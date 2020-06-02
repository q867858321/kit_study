var url = "https://imasdk.googleapis.com/js/sdkloader/ima3.js";
var script = document.createElement("script");
script.src = url;
document.getElementsByTagName("html")[0].appendChild(script);
if (document.getElementById('adContainer')) {
    document.getElementById('adContainer').style.display = "none";
}


var AFGAdRequest = null;
script.onload = function () {
    AFGAdRequest = function () {
        var EMPTY_FUN = function () {};
        // assign false if you don't want to request ad when the page is loading
        var preloadAds = true;
        var isAdCached = false;
        var afg_channel_id, afg_clientpub;
        var adDisplayContainer, adsLoader, adRequeted = false,
            adsManager;
        var adTagUrl;
        var adContainer;
        var state = 'success';
        var _init = function (channel_id, clientpub) {
            adContainer = document.getElementById('adContainer');
            if (!adContainer) {
                adContainer = document.createElement('DIV');
                adContainer.id = 'adContainer';
                adContainer.style.cssText = "position:fixed;left:0;top:0;right:0;bottom:0;z-index:999;"
                // append to body
                document.body.appendChild(adContainer);
            }
            afg_channel_id = channel_id;
            afg_clientpub = clientpub;
            // adTagUrl = 'http://googleads.g.doubleclick.net/pagead/ads?ad_type=video_image_text&client=' + afg_clientpub + '&videoad_start_delay=0&description_url=http%3A%2F%2Fwww.google.com&adtest=on';
            var descriptionURL = window.location.origin;
            adTagUrl = "//googleads.g.doubleclick.net/pagead/ads?client=" +
                afg_clientpub +
                "&ad_type=video_image&hl=en&channel=" +
                afg_channel_id +
                "&cust_age=1001&cust_gender=1" +
                "&max_ad_duration=30000&adsafe=medium&description_url=" +
                encodeURIComponent(descriptionURL);
            setUpIMA();
        }
        var setUpIMA = function () {
            // Create the ad display container.
            console.log("setUpIMA")
            createAdDisplayContainer();
            // Create ads loader.
            adsLoader = new google.ima.AdsLoader(adDisplayContainer);
            adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, onAdsManagerLoaded, false);
            adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, onAdError, false);
            if (preloadAds) {
                _requestAds();
            }
        }
        /**
         * request ads
         */
        function _requestAds() {
            // Request ads.
            var adsRequest = new google.ima.AdsRequest();
            adsRequest.adTagUrl = adTagUrl;
            adsRequest.linearAdSlotWidth = adContainer.clientWidth - 5;
            adsRequest.linearAdSlotHeight = adContainer.clientHeight - 5;
            adsRequest.nonLinearAdSlotWidth = adContainer.clientWidth - 5;
            adsRequest.nonLinearAdSlotHeight = adContainer.clientHeight - 5;
            adsRequest.forceNonLinearFullSlot = true;
            adsLoader.requestAds(adsRequest);
            isAdCached = true; //means play ads when it is back.
        }
        /**
         * play ads
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
            } catch (adError) {
                // An error may be thrown if there was a problem with the VAST response.
                // Please start your game HERE
                console.log("Play Ads Error:" + adError);
                adContainer.style.display = "none";
            }
        }
        var _destroy = function () {
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
        var requestAds = function (e) {
            var adContainer = document.getElementById('adContainer');
            if (adContainer) {
                adContainer.style.display = " block";
            }

            if (!isAdCached) {
                _requestAds();
            }
        }
        var hideAdContainer = function () {
            if (!adContainer) {
                var adContainerObj = document.getElementById('adContainer');
                if (adContainerObj) {
                    document.getElementById('adContainer').style.display = " none";
                }
            } else {
                adContainer.style.display = "none";
            }
        }

        function createAdDisplayContainer() {
            adDisplayContainer = new google.ima.AdDisplayContainer(adContainer);
        }

        function onAdsManagerLoaded(adsManagerLoadedEvent) {
            console.log("adsManagerLoadedEvent", adsManagerLoadedEvent);
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

        var onAdError = function (info) {
            console.error("error ads:", info);
            state = 'error';
        };
        var onAdEvent = function (adEvent) {
            var ad = adEvent.getAd();
            // console.log("adEvent", adEvent);
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
                    hideAdContainer();
                    console.log("Ads are completed");
                    //start your game
                    state = 'completed';
                    break;
                case google.ima.AdEvent.Type.SKIPPED:
                    //start your game
                    // game.startGame();
                    state = 'skipped';
                    hideAdContainer();
                    break;
                case google.ima.AdEvent.Type.USER_CLOSE:
                    console.log("User close the ad");
                    state = 'closed';
                    hideAdContainer();
                    break;
            }
        };
        //restart
        var onContentResumeRequested = function () {

        };
        //stop
        var onContentPauseRequested = function () {
            // game.startGame();
        };

        var getAdState = function () {
            return state;
        }
        return {
            init: _init,
            destroy: _destroy,
            requestAds: requestAds,
            hideAdContainer: hideAdContainer,
            getAdState: getAdState
        }
    }();

    AFGAdRequest.init('1', 'ca-video-pub-4968145218643279');
};

 //  'http://googleads.g.doubleclick.net/pagead/ads?ad_type=video_image_text&client=ca-video-pub-4968145218643279&videoad_start_delay=0&description_url=http%3A%2F%2Fwww.google.com&adtest=on';

// 再次播放广告
//AFGAdRequest.requestAds();