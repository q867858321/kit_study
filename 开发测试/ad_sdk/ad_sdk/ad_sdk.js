var GameModel = function() {
    var EMPTY_FUN = function () {
    };
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
                var args = arguments, len = arguments.length, deep = false, i = 1, target = args[0], opts, src, clone, copy;
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
    return {
        Toolkit: $Toolkit,
        Object: $Object,
    }
}();

var AFGAdRequest = function() {
    var EMPTY_FUN = function () {
    };
    // assign false if you don't want to request ad when the page is loading
    var preloadAds = false;
    var afg_channel_id, afg_clientpub;
    var adDisplayContainer, adsLoader, adRequeted = false, adsManager;
    var adTagUrl;
    var adContainer;
    var game;
    var _init = function(g, channel_id, clientpub) {
        adContainer = document.getElementById('adContainer');
        if (!adContainer) {
            adContainer = document.createElement('DIV');
            adContainer.id = 'adContainer';
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
        adsLoader.addEventListener( google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, onAdsManagerLoaded,false); 
        // adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, onAdError, false);
        if (preloadAds) {
            _requestAds();
        }
    }
    var _requestAds = function() {
        // Request ads.
        var adsRequest = new google.ima.AdsRequest();
        adsRequest.adTagUrl = adTagUrl;
        adsRequest.linearAdSlotWidth = adContainer.clientWidth;
        adsRequest.linearAdSlotHeight = adContainer.clientHeight;
        adsRequest.nonLinearAdSlotWidth = adContainer.clientWidth;
        adsRequest.nonLinearAdSlotHeight = adContainer.clientHeight;
        adsRequest.forceNonLinearFullSlot = true;
        adsLoader.requestAds(adsRequest);
    }
    var _playAds = function() {
        // Initialize the container. Must be done via a user action on mobile devices.
        adDisplayContainer.initialize();
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
    var requestAds = function() {
        if(!preloadAds) {
            _requestAds();
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
        adsManager.addEventListener(google.ima.AdEvent.Type.STARTED,onAdEvent);
        adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, onAdEvent);
        _playAds();
    }

    var onAdError = function(){
		game.startGame();
		alert(1);
	};
    var onAdEvent = function(adEvent) {
    	var ad = adEvent.getAd();
  		switch (adEvent.type) {
		    case google.ima.AdEvent.Type.LOADED:
		      // This is the first event sent for an ad - it is possible to
		      // determine whether the ad is a video ad or an overlay.
		      if (!ad.isLinear()) {
		      }
		      break;
		    case google.ima.AdEvent.Type.STARTED:
		      // This event indicates the ad has started - the video player
		      // can adjust the UI, for example display a pause button and
		      // remaining time.
		      if (ad.isLinear()) {
		        // For a linear ad, a timer can be started to poll for
		        // the remaining time.
		        intervalTimer = setInterval(
		            function() {
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
		    case google.ima.AdEvent.Type.USER_CLOSE:
		    case google.ima.AdEvent.Type.SKIPPED:
		      console.log("User skipped/close the ad");
		      //start your game
		      game.startGame(); 
		    break;
  		}
    };
    //重新开始
    var onContentResumeRequested = function() {
        
    };
    //暂停
    var onContentPauseRequested = function() {

    };
    return {
        init: _init,
        requestAds: requestAds
    }
}();
(function(_gameModel, _AFGAdRequest){
    // 游戏容器
    var GamePage = function(gameUrl) {
        this.gameUrl = gameUrl;
    }
    GamePage.generateGame = function(gameUrl) {
        return new GamePage(gameUrl);
    }
    GamePage.prototype.init = function(){};
    _gameModel.Object.extend(GamePage.prototype, {
        // 加载游戏
        loadGame: function() {
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
            }
            _me._connFrame.onload = _frame_on_load;
            _me._connFrame.addEventListener && _me._connFrame.addEventListener("load", _frame_on_load, false);
            _me._connFrame.attachEvent && _me._connFrame.attachEvent("onload", _frame_on_load);
            _me._connFrame.src = _me.gameUrl;
            document.getElementById('gameframediv').appendChild(_me._connFrame);
            // 跨域代理消息接收
            var _preDispatchHandler = function (crsDt) {
                
            };
            window.addEventListener ? window.addEventListener("message", _preDispatchHandler, false) : window.attachEvent("onmessage", _preDispatchHandler);
        },
        startGame: function() {
        	var _me = this;
        	_me._connFrame.style.cssText = "display:block;width: 100%;height: 100%;overflow:hidden;"
        }
    });
    _gameModel.init = function() {
        GamePage.generateGame();
    }
    var Game = function() {
        var startGame = function(afg_channel_id, afg_clientpub, gameUrl) {
        	_AFGAdRequest.init(GamePage.generateGame(gameUrl), afg_channel_id, afg_clientpub);
        	_AFGAdRequest.requestAds()
        }
        return {
            startGame: startGame
        }
    };
    _gameModel.Game = Game();
})(GameModel, AFGAdRequest);
(function() {
    window.gameModel = GameModel;
})();