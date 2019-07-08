var GameModel = function () {
    var EMPTY_FUN = function () {};
    var $Toolkit = function () {
        return {
            extend: function (_Cld, _Prt) {
                var fn = EMPTY_FUN;
                fn.prototype = _Prt.prototype;
                _Cld.prototype = new fn();
                _Cld.constructor = _Cld;
                return _Cld;
            }
        }
    }();
    var $Object = function () {
        return {
            extend: function () {
                var args = arguments,
                    len = arguments.length,
                    deep = false,
                    i = 1,
                    target = args[0],
                    opts, src, clone, copy;
                if (typeof target === "boolean") {
                    deep = target;
                    target = arguments[1] || {};
                    i = 2;
                }
                if (typeof target !== "object" && typeof target !== "function") {
                    target = {};
                }
                if (len === i) {
                    target = {};
                    --i;
                }
                for (; i < len; i++) {
                    if ((opts = arguments[i]) != null) {
                        for (var name in opts) {
                            src = target[name];
                            copy = opts[name];
                            if (target === copy) {
                                continue;
                            }
                            if (deep && copy && typeof copy === "object" && !copy.nodeType) {
                                if (src) {
                                    clone = src;
                                } else if (copy instanceof Array) {
                                    clone = [];
                                } else if (typeof copy === 'object') {
                                    clone = {};
                                } else {
                                    clone = copy;
                                }
                                target[name] = object.extend(deep, clone, copy);
                            } else if (copy !== undefined) {
                                target[name] = copy;
                            }
                        }
                    }
                }
                return target;
            }
        }
    }();
    var $Console = function () {
        var LEVELS = {log: 3, info: 2, warn: 1, error: 0};
        var _CONSOLE_DEBUG_LEVEL = LEVELS.info;
        var cons_prefix = ' :: [Connect] > ';
        var trace = function (funName) {
            return function (args) {
                window.console && console[funName] && getDebugLevel() >= LEVELS[funName] && console[funName](cons_prefix + args);
            }
        };
        var getDebugLevel = function () {
            return ~~(_CONSOLE_DEBUG_LEVEL || LEVELS.info);
        };
        return {
            log: trace("log"),
            info: trace("info"),
            warn: trace("warn"),
            error: trace("error"),
            setLevel: function (lvNm) {
                return _CONSOLE_DEBUG_LEVEL = LEVELS[lvNm] || _CONSOLE_DEBUG_LEVEL;
            }
        }
    }();
    return {
        Toolkit: $Toolkit,
        Object: $Object,
        Console: $Console
    }
}();

var AFGAdRequest = function () {
    var EMPTY_FUN = function () {};
    // assign false if you don't want to request ad when the page is loading
    var preloadAds = true;
    var isAdCached = false;
    var afg_channel_id, afg_clientpub;
    var adDisplayContainer, adsLoader, adRequeted = false,
        adsManager;
    var adTagUrl;
    var adContainer;
    var game;
    var _init = function (g, channel_id, clientpub) {
        adContainer = document.getElementById('adContainer');
        if (!adContainer) {
            adContainer = document.createElement('DIV');
            adContainer.id = 'adContainer';
            // 插入到body
            document.body.appendChild(adContainer);
        }
        game = g;
        afg_channel_id = channel_id;
        afg_clientpub = clientpub;
        adTagUrl = 'http://googleads.g.doubleclick.net/pagead/ads?ad_type=video_image_text&client=' + afg_channel_id + '&videoad_start_delay=0&description_url=http%3A%2F%2Fwww.google.com&adtest=on';
        setUpIMA();
    }
    var setUpIMA = function () {
        // Create the ad display container.
        createAdDisplayContainer();
        // Create ads loader.
        adsLoader = new google.ima.AdsLoader(adDisplayContainer);
        adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, onAdsManagerLoaded, false);
        // adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, onAdError, false);
        if (preloadAds) {
            _requestAds();
        }
    }
    /**
     * 请求广告
     */
    var _requestAds = function () {
        // Request ads.
        var adsRequest = new google.ima.AdsRequest();
        adsRequest.adTagUrl = adTagUrl;
        adsRequest.linearAdSlotWidth = adContainer.clientWidth;
        adsRequest.linearAdSlotHeight = adContainer.clientHeight;
        adsRequest.nonLinearAdSlotWidth = adContainer.clientWidth;
        adsRequest.nonLinearAdSlotHeight = adContainer.clientHeight;
        adsRequest.forceNonLinearFullSlot = true;
        adsLoader.requestAds(adsRequest);
        isAdCached = true; //means play ads when it is back.
    }
    /**
     * 播放广告
     */
    var _playAds = function () {
        // Initialize the container. Must be done via a user action on mobile devices.
        adDisplayContainer.initialize();
        isAdCached = false; //when out from here, no ads cached.
        try {
            // Initialize the ads manager.
            adsManager.init(adContainer.clientWidth, adContainer.clientHeight, google.ima.ViewMode.NORMAL);
            // start showing the ad.
            adsManager.start();
            // load your game when the ads is playing
            game.loadGame();
        } catch (adError) {
            // An error may be thrown if there was a problem with the VAST response.
            // Please start your game HERE
            console.log("Play Ads Error:" + adError);
            adContainer.style.display = "none";
            game.loadGame();
            game.startGame();
        }
    }
    var _destroy = function() {
    	if (adDisplayContainer) {
        	adDisplayContainer.destroy();
	    }
	    if (adsManager) {
	        adsManager.destroy();
	    }
	    if (adsLoader) {
	        adsLoader.destroy();
	    }
    }
    var requestAds = function () {
    	if(adContainer) {
    		adContainer.style.cssText = "display: block;"
    	}
    	if(!isAdCached) {
    		_requestAds();	
    	}
    }
	var hideAdContainer = function() {
    	if(adContainer) {
    		adContainer.style.cssText = "display: none;"
    	}
   }
    function createAdDisplayContainer() {
        adDisplayContainer = new google.ima.AdDisplayContainer(adContainer);
    }
    function onAdsManagerLoaded(adsManagerLoadedEvent) {
        // Get the ads manager.
        var adsRenderingSettings = new google.ima.AdsRenderingSettings();
        adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;
        // videoContent should be set to the content video element.
        adsManager = adsManagerLoadedEvent.getAdsManager(adDisplayContainer, adsRenderingSettings);
        // Add listeners to the required events.
        adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, onAdError);
        adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, onContentPauseRequested);
        adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, onContentResumeRequested);
        adsManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, onAdEvent);
        // Listen to any additional events, if necessary.
        adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, onAdEvent);
        adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, onAdEvent);
        adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, onAdEvent);

        adsManager.addEventListener(google.ima.AdEvent.Type.USER_CLOSE, onAdEvent);
        adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPED, onAdEvent);
        if (isAdCached) {
		    _playAds();
	    }
    }
	var onAdError = function () {
        game.startGame();
    };
    var onAdEvent = function (adEvent) {
        var ad = adEvent.getAd();
        switch (adEvent.type) {
            case google.ima.AdEvent.Type.LOADED:
                // This is the first event sent for an ad - it is possible to
                // determine whether the ad is a video ad or an overlay.
                if (!ad.isLinear()) {}
                break;
            case google.ima.AdEvent.Type.STARTED:
                // This event indicates the ad has started - the video player
                // can adjust the UI, for example display a pause button and
                // remaining time.
                if (ad.isLinear()) {
                    // For a linear ad, a timer can be started to poll for
                    // the remaining time.
                    intervalTimer = setInterval(
                        function () {
                            var remainingTime = adsManager.getRemainingTime();
                        },
                        300); // every 300ms
                }
                break;
            case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
            case google.ima.AdEvent.Type.COMPLETE:
                // This event indicates the ad has finished
                // perform appropriate UI actions, such as removing the timer for
                // remaining time detection.
                if (ad.isLinear()) {
                    clearInterval(intervalTimer);
                }
                console.log("Ads are completed");
                //start your game
                game.startGame();
                break;
            case google.ima.AdEvent.Type.SKIPPED:
                //start your game
                // game.startGame();
                break;
			case google.ima.AdEvent.Type.USER_CLOSE:
				console.log("User close the ad");
				
				game.startGame();
				break;
        }
    };
    //重新开始
    var onContentResumeRequested = function () {

    };
    //暂停
    var onContentPauseRequested = function () {
        // game.startGame();
    };
    return {
        init: _init,
        destroy: _destroy,
        requestAds: requestAds,
        hideAdContainer: hideAdContainer
    }
}();
(function (_gameModel, _AFGAdRequest) {

    // 游戏容器
    var GamePage = function (gameUrl) {
    	this.invokes = [];
    	this.isReady = false;
        this.gameUrl = gameUrl;
		this.isBegin=false;
		this.state="success";
		var arrUrl = gameUrl.split("//");
		var start = arrUrl[1].indexOf("/");
		var relUrl = arrUrl[1].substring(0,start);
		 _origin = arrUrl[0]+"//"+relUrl;  //游戏域名 
    }
	
	

    GamePage.generateGame = function (gameUrl) {
        return new GamePage(gameUrl);
    }
    GamePage.prototype.init = function () {};
    GamePage.prototype.loadGame = function () {};
    GamePage.prototype.startGame = function () {};
    GamePage.prototype._preDispatch = function(_this, cstDt) {
    	var dt = cstDt.data || (cstDt.currentTarget && cstDt.currentTarget.data) || {};
    	var cmd = dt.split("@@@");
    	switch (cmd[0]) {
    		case "invoke" :
                this.invoke(cmd[1]);
                break;
            default:
//              this.dispatch(cmd[1] || cstDt, seq, fmt);
                break;
    	}
    };
    GamePage.prototype.invoke = function(ivk) {
    	var pendingInvoke;
        ivk && (this.invokes.push(ivk));
        while (this.isReady && (pendingInvoke = this.invokes.shift())) {
            this._doInvoke(pendingInvoke);
        }
    };
    GamePage.prototype._doInvoke = function(){};
    GamePage.getFunction = function (cmdP) {
        var cmd;
        cmdP = cmdP.split(".");
        for (var i = 0; i < cmdP.length; i++) {
            cmd = cmd ? cmd[cmdP[i]] : window[cmdP[i]];
        }
        return cmd;
    };
    GamePage.dispatchReceive = function (seq, resText, status, fmt) {
        
    };
    _gameModel.Object.extend(GamePage.prototype, {
        // 加载游戏
        loadGame: function () {
        	console.log("load game");
            if(window.frames['gameIFrame']) {
            	return;
            }
            var _me = this;
            _me._connFrame = document.createElement("iframe");
            _me._connFrame.style.cssText = "display:none;width: 100%;height: 100%;overflow:hidden;";
            var _frame_on_load = function () {
                _frame_on_load.fire();
                // 覆盖之前的fire方法
                _frame_on_load.fire = function () {

                }
            }
            _frame_on_load.fire = function () {
                // iframe create success
				console.log("game iframe success")
				// _me.isOnload=true;
            }
            _me._connFrame.onload = _frame_on_load;
            _me._connFrame.addEventListener && _me._connFrame.addEventListener("load", _frame_on_load, false);
            _me._connFrame.attachEvent && _me._connFrame.attachEvent("onload", _frame_on_load);
            _me._connFrame.src = _me.gameUrl;
            _me._connFrame.id = 'gameIFrame';
			 _me._connFrame.name = 'gameIFrame';
            var gameFrameContainer = document.getElementById('gameFrameContainer');
            if (!gameFrameContainer) {
	            gameFrameContainer = document.createElement('DIV');
	            gameFrameContainer.id = 'gameFrameContainer';
	            // 插入到body
	            document.body.appendChild(gameFrameContainer);
        	}
            gameFrameContainer.appendChild(_me._connFrame);
            // 跨域代理消息接收
            var _preDispatchHandler = function (crsDt) {
				
				//获取信息
                if (crsDt.origin && (crsDt.origin == _origin)) {
                    _me.isReady = true;
					console.log(crsDt)
                    _me._preDispatch(_me, crsDt);
                }
            };
            window.addEventListener ? window.addEventListener("message", _preDispatchHandler, false) : window.attachEvent("onmessage", _preDispatchHandler);
        },
		showGame: function() {
			var _me = this;
			// hide ad container
			_AFGAdRequest.hideAdContainer();
			_me._connFrame.style.cssText = "display:block;width: 100%;height: 100%;overflow:hidden;"
		},
        startGame: function () {
			var _me = this;
			_me.showGame();
			if(_me.isBegin) {
				window.frames['gameIFrame'].postMessage(_me.state,_origin);
			}else{
				_me.isBegin=true;
			}
        },
        send: function() {
        	var _me = this;
        	_me._connFrame.contentWindow.postMessage('ad played', _origin)
        },
        dispatch: function (crsDt) {
            var dt = crsDt.data, obj = dt.split(":<.<<#:"), seq = obj[0], status = obj[1], fmt = obj[2], data = obj[3];
//          _gameModel.Console.log("data:\t" + data);
			console.log("data:\t" + data)
            GamePage.dispatchReceive(seq, data, status, fmt);
        },
        _doInvoke: function(cmdStr) {
//			_gameModel.Console.log("invoke:\t" + cmdStr);    
			console.log("invoke:\t" + cmdStr)
			if(typeof cmdStr != "string") {
                return;
            }
			var pas = cmdStr.split("#"), cmdP = pas[0], args = pas[1] && pas[1].split(","), cmd;
            cmd = GamePage.getFunction(cmdP);
            cmd.apply(null, args);
        }
    });
    _gameModel.init = function (gameUrl) {
        return GamePage.generateGame(gameUrl);
    }
    var Game = function () {
        var startGame = function (cfg) {
        	if(!cfg.gameUrl) {
        		throw new Error('not game url')
        	}
        	if(cfg.afg_channel_id && cfg.afg_clientpub) {
	        	_AFGAdRequest.init(_gameModel.init(cfg.gameUrl), cfg.afg_channel_id, cfg.afg_clientpub);
	            _AFGAdRequest.requestAds();
        	} else {
        		var game = _gameModel.init(cfg.gameUrl);
        		game.loadGame();
        		game.startGame();
        	}
        }
        var requestAds = function() {
        	_AFGAdRequest.requestAds()	
        }
        return {
            startGame: startGame,
            requestAds: requestAds
        }
    };
    _gameModel.Game = Game();
})(GameModel, AFGAdRequest);
(function () {
    window.gameModel = GameModel;
})();