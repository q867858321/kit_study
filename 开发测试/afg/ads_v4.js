$(function() {

	//Create an ad display container
	var timer__err;
	var fisrtLoad_aft = true;
	var start_myad;
	var adObject;
	var AdDistance;
	var adContainer = $("#adContainer");
	$('#mainContainer').height($('body').height());
	adContainer.width($('body').width());
	adContainer.height($('body').height());
	// adContainer.width($(document.body).width());
	// adContainer.height($(document.body).height()-100);
	var videoContent = document.getElementById('contentElement');

	function syscheck() {
		var u = navigator.userAgent;
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
		var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios缁堢
		if (isIOS) {
			return 1;
		} else return 0;

	}

	function showGame() {
		$("#mainContainer").hide();
		$("#gameframediv").show();
		var gameframe = $("#gameframediv").find("#gameframe")
		if (gameframe.length <= 0) {
			// $("#gameframediv").append("<object id='gameframe' style='display:block;width: 100%;height: 100%' data="+gameURL+" class='iframe'  name='cpframe' frameborder='0'></object>")
			isIOS = syscheck()
			if (isIOS) {
				$("#gameframediv").append("<object id='gameframe' style='display:block;width: 100%;height: 100%' data=" + gameURL +
					" class='iframe'  name='cpframe' frameborder='0'></object>")
			} else {
				$("#gameframediv").append("<iframe id='gameframe' style='display:block;width: 100%;height: 100%' src=" + gameURL +
					" class='iframe' scrolling='no' name='cpframe' frameborder='0'></iframe>")
			}
		}
		// $("gameframe").attr("src",gameURL);
		//鏇存柊鐣岄潰鏍峰紡
	}
	clearTimeout(timer__err)
	timer__err = setTimeout(function() {
		console.log("load ads timeout")
		showGame();
	}, 3000)
	try {
		var adDisplayContainer = new google.ima.AdDisplayContainer(
			document.getElementById('adContainer')
			// , videoContent
		);
	} catch (error) {
		console.log(error);
		showGame()
	}
	adDisplayContainer.initialize();
	var adsLoader = new google.ima.AdsLoader(adDisplayContainer);
	// Add event listeners
	adsLoader.addEventListener(
		google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
		onAdsManagerLoaded,
		false);
	adsLoader.addEventListener(
		google.ima.AdErrorEvent.Type.AD_ERROR,
		onAdError,
		false);

	function onAdError(adErrorEvent) {
		// Handle the error logging and destroy the AdsManager
		showGame();
		console.log(">>>>>>" + adErrorEvent.getError());
		// adsManager.destroy();
		clearTimeout(timer__err)
		timer__err = setTimeout(function() {
			requestAds();
		}, 100000)
	}

	// An event listener to tell the SDK that our content video
	// is completed so the SDK can play any post-roll ads.
	//涓€涓簨浠朵睛鍚櫒鏉ュ憡璇夋垜浠殑鍐呭瑙嗛SDK //瀹屾垚鍥犳SDK鍙互鎾斁浠讳綍鐗囧熬骞垮憡銆�
	var contentEndedListener = function() {
		adsLoader.contentComplete();
	};
	videoContent.onended = contentEndedListener;
	var descriptionURL = window.location.origin;
	// Request video ads.
	//璇锋眰瑙嗛骞垮憡
	var adsRequest = new google.ima.AdsRequest();
	var clientpub = 'demo';
	var ad_channel = 123;
	if (clientpub == "None") {
		adsRequest.adTagUrl = "";
	} else if (clientpub == 'demo') {
		adsRequest.adTagUrl =
			'//googleads.g.doubleclick.net/pagead/ads?ad_type=video_image&client=ca-games-pub-4968145218643279&videoad_start_delay=0&description_url=http%3A%2F%2Fwww.google.com&max_ad_duration=20000&adtest=on';
	} else {
		adsRequest.adTagUrl =
			"//googleads.g.doubleclick.net/pagead/ads?client=" +
			clientpub
			//+ "&ad_type=text_image_flash&hl=en&channel="
			+
			"&ad_type=video_image&hl=en&channel=" +
			ad_channel +
			"&cust_age=1001&cust_gender=1" +
			"&max_ad_duration=30000&adsafe=medium&description_url=" +
			encodeURIComponent(descriptionURL);
		//adsRequest.forceNonLinearFullSlot = true;
	}

	adsRequest.linearAdSlotWidth = adContainer.width();
	adsRequest.linearAdSlotHeight = adContainer.height();
	adsRequest.nonLinearAdSlotWidth = adContainer.width();
	adsRequest.nonLinearAdSlotHeight = adContainer.height();


	var timeCounter = 15;
	var timeoutTimer = null;
	$(document).ready(function() {
		start();
	})

	function start() {
		requestAds();
		// $(window).bind("resize",correctPositions);
	}

	function requestAds() {
		adsLoader.requestAds(adsRequest);
	}

	//Getting the AdsManager and Display Ads

	function onAdsManagerLoaded(adsManagerLoadedEvent) {
		clearTimeout(timer__err);
		// var adsRenderingSettings = new google.ima.AdsRenderingSettings();
		// adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;
		// Get the ads manager.
		adsManager = adsManagerLoadedEvent.getAdsManager(videoContent); // See API reference for contentPlayback

		// Add listeners to the required events.
		adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, onAdError);
		adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, onAdEvent);
		adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, onAdEvent);
		adsManager.addEventListener(google.ima.AdEvent.Type.USER_CLOSE, onAdEvent);
		adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, onAdEvent);
		adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, onAdEvent);
		adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, onAdEvent);
		adsManager.addEventListener(google.ima.AdEvent.Type.CLICK, onAdEvent);
		adsManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, onAdEvent);
		window.start_myad = start_myad = function() {
			try {
				// Initialize the ads manager. Ad rules playlist will start at this time.
				//鍒濆鍖栧箍鍛婄鐞嗐€傚箍鍛婅鍒欐挱鏀惧垪琛ㄥ皢鍦ㄦ鏃跺紑濮嬨€�
				adsManager.init(adContainer.width(), adContainer.height(), google.ima.ViewMode.NORMAL);
				// adsManager.init($(document.body ).width(),$(document.body).height(), google.ima.ViewMode.NORMAL);
				// Call start to show ads. Single video and overlay ads will
				// start at this time; this call will be ignored for ad rules, as ad rules
				// ads start when the adsManager is initialized.
				//璋冪敤寮€濮嬪睍绀哄箍鍛娿€傚崟涓棰戝拰閲嶅彔寮忓箍鍛婂皢
				// 寮€濮嬪湪杩欎釜鏃跺€�; 姝よ皟鐢ㄥ皢涓哄箍鍛婅鍒欒蹇界暐锛屽洜涓哄箍鍛婅鍒�
				// 骞垮憡鏃讹紝AdsManager鐨勫垵濮嬪寲鍚姩銆�
				adsManager.start();
			} catch (adError) {
				console.log("adError++" + adError);
				try {
					showAd_afg_Deferred.reject("ad error");
				} catch (err) {}
				showGame();
				// An error may be thrown if there was a problem with the VAST response.
			}
		}

		if (fisrtLoad_aft) {
			start_myad();
			fisrtLoad_aft = false;
		}
	}


	function correctPositions() {
		$("#adContainer_logo").hide();
		if (adObject && adsManager) {
			if (SysOS == "pc") {
				if (adObject.isLinear()) {
					$("#mainContainer").css({
						"margin-top": 0
					});
					$("#mainContainer").height(604);
					adContainer.height(604);
					$("#adContainer").css({
						"padding-top": 10
					});
					adsManager.resize(adContainer.width(), 604, google.ima.ViewMode.NORMAL);
				} else {
					$("#mainContainer").css({
						"margin-top": 0
					});
					$("#mainContainer").height(594);
					adContainer.height(594 - adObject.getHeight() / 2);
					adsManager.resize(adObject.getWidth(), adObject.getHeight(), google.ima.ViewMode.NORMAL);
					var PaddingLeft = (488 - adObject.getWidth()) / 2;
					if (PaddingLeft < 0) PaddingLeft = 0;
					$("#adContainer").css({
						"padding-left": PaddingLeft
					});
				}
			} else {
				if (adObject.isLinear()) {
					$("#adContainer").height($(window).height() - AdDistance);
					adsManager.resize($(window).width(), $(window).height() - AdDistance, google.ima.ViewMode.NORMAL);
				} else {
					$("#mainContainer").css({
						"margin-top": 0
					});
					$("#mainContainer").height($(window).height() - AdDistance);
					$("#adContainer").height($(window).height() - AdDistance - ($(window).height() - AdDistance + adObject.getHeight()) /
						2);
					adsManager.resize(adObject.getWidth(), adObject.getHeight(), google.ima.ViewMode.NORMAL);
					var PaddingLeft = ($(window).width() - adObject.getWidth()) / 2;
					if (PaddingLeft < 0) PaddingLeft = 0;
					$("#adContainer").css({
						"padding-left": PaddingLeft
					});
				}
			}
		}
	}

	function onAdEvent(e) {
		console.log("Ad event:" + e.type);
		var i = e.getAd();
		var log = false;
		switch (e.type) {
			case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
				onContentResumeRequested();
				break;
			case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
				onContentPauseRequested();
				break;
			case google.ima.AdEvent.Type.LOADED:
				console.log("loaded");
				try {
					showAd_afg_Deferred.resolve("ad start");
				} catch (err) {}
				adObject = i;
				// correctPositions()
				// i.isLinear() || tickTimer()
				;
				break;
			case google.ima.AdEvent.Type.STARTED:
				break;
			case google.ima.AdEvent.Type.COMPLETE:
				showGame();
				log = true;
				break;
			case google.ima.AdEvent.Type.CLICK:
				showGame();
				log = true;
				break;
			case google.ima.AdEvent.Type.USER_CLOSE:
				requestAds();
				showGame();
				log = true;
				break;
			case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
				showGame();
				log = true;
				requestAds();
				break;
		}
		//if(log){requestAds()}
	}

	function onContentPauseRequested() {
		// This function is where you should setup UI for showing ads (e.g.
		// display ad timer countdown, disable seeking, etc.)

	}

	function onContentResumeRequested() {
		// This function is where you should ensure that your UI is ready
		// to play content.
		showGame();
	}

	function tickTimer() {
		timeoutTimer = setTimeout(function() {
			timeCounter--;
			if (timeCounter == 0) {
				showGame();
				clearTimeout(timeoutTimer);
			} else {
				tickTimer();
			}
		}, 1e3)
	}! function() {
		$(function() {
			var $mainContainer = $("#mainContainer"),
				$gameframediv = $("#gameframediv"),
				$gameframe = $gameframediv.find("#gameframe");

			function showAd_afg() {
				window.showAd_afg_Deferred = $.Deferred();
				window.showAd_afg_Deferred.done(function() {
					$mainContainer.show();
					$gameframediv.hide();
				}).fail(function() {
					requestAds()
				})
				start_myad && start_myad();
			}
			window.showAd_afg = showAd_afg;
			var cdnurl = $gameframe.attr('src');
			cdnurl = cdnurl.replace('http://', '').replace('https://', '').replace('://', '').replace('//', '');
			window.addEventListener("message", function(event) {
				if (event.origin != 'http://imasdk.googleapis.com') {
					var oriFra = event.origin;
					oriFra = oriFra.replace('http://', '').replace('https://', '').replace('://', '').replace('//', '')
					if (cdnurl.indexOf(oriFra) >= -1) {
						if (event.data == "showAd_afg") {
							showAd_afg();
						}
					}
				}

			}, false);
		})

	}()

});
