(function() {
    function e(t, n, a) {
        function o(i, c) {
            if (!n[i]) {
                if (!t[i]) {
                    var s = "function" == typeof require && require;
                    if (!c && s) return s(i, !0);
                    if (r) return r(i, !0);
                    var l = new Error("Cannot find module '" + i + "'");
                    throw l.code = "MODULE_NOT_FOUND", l;
                }
                var u = n[i] = {
                    exports: {}
                };
                t[i][0].call(u.exports, function(e) {
                    var n = t[i][1][e];
                    return o(n || e);
                }, u, u.exports, e, t, n, a);
            }
            return n[i].exports;
        }
        for (var r = "function" == typeof require && require, i = 0; i < a.length; i++) o(a[i]);
        return o;
    }
    return e;
})()({
    1: [ function(e, t, n) {
        "use strict";
        n.__esModule = true;
        var a = {
            title: "Let's play this amazing game!",
            imageUrl: "./fbcdn/shareImage.png"
        };
        var o = a.imageUrl;
        var r = "https://";
        var i = 3;
        var c = [ "af_ZA", "ar_AR", "az_AZ", "be_BY", "bg_BG", "bn_IN", "bs_BA", "ca_ES", "cs_CZ", "cx_PH", "cy_GB", "da_DK", "de_DE", "el_GR", "en_GB", "en_PI", "en_UD", "en_US", "eo_EO", "es_ES", "es_LA", "et_EE", "eu_ES", "fa_IR", "fb_LT", "fi_FI", "fo_FO", "fr_CA", "fr_FR", "fy_NL", "ga_IE", "gl_ES", "gn_PY", "he_IL", "hi_IN", "hr_HR", "hu_HU", "hy_AM", "id_ID", "is_IS", "it_IT", "ja_JP", "jv_ID", "ka_GE", "km_KH", "kn_IN", "ko_KR", "ku_TR", "la_VA", "lt_LT", "lv_LV", "mk_MK", "ml_IN", "ms_MY", "nb_NO", "ne_NP", "nl_NL", "nn_NO", "pa_IN", "pl_PL", "ps_AF", "pt_BR", "pt_PT", "ro_RO", "ru_RU", "si_LK", "sk_SK", "sl_SI", "sq_AL", "sr_RS", "sv_SE", "sw_KE", "ta_IN", "te_IN", "th_TH", "tl_PH", "tr_TR", "uk_UA", "ur_PK", "vi_VN", "zh_CN", "zh_HK", "zh_TW" ];
        var s;
        (function(e) {
            e[e["UNLOAD"] = 0] = "UNLOAD";
            e[e["LOADING"] = 1] = "LOADING";
            e[e["LOADED"] = 2] = "LOADED";
        })(s || (s = {}));
        var l;
        (function(e) {
            e[e["REWARD"] = 0] = "REWARD";
            e[e["INTERSTITIAL"] = 1] = "INTERSTITIAL";
        })(l || (l = {}));
        var u = {};
        u[l.REWARD] = {
            id: "",
            list: []
        };
        u[l.INTERSTITIAL] = {
            id: "",
            list: []
        };
        var f = 0;
        var d = function() {
            f++;
            return {
                status: s.UNLOAD,
                instance: null,
                index: f
            };
        };
        for (var g = 0; g < i; g++) {
            u[l.REWARD].list.push(d());
            u[l.INTERSTITIAL].list.push(d());
        }
        var v = function(e, t) {
            var n = u[t].id;
            var a = null;
            var o = "";
            if (t === l.REWARD) {
                o = "视频";
                a = FBInstant.getRewardedVideoAsync.bind(FBInstant);
            } else {
                o = "插屏";
                a = FBInstant.getInterstitialAdAsync.bind(FBInstant);
            }
            var r = function() {
                e.instance.loadAsync().then(function() {
                    console.log("加载" + o + "广告成功!" + e.index);
                    e.status = s.LOADED;
                })["catch"](function(t) {
                    e.status = s.UNLOAD;
                    console.log("加载" + o + "广告失败! " + e.index);
                    console.error(t);
                });
            };
            if (e.instance) {
                r();
            } else {
                a(n).then(function(t) {
                    e.instance = t;
                    r();
                })["catch"](function(t) {
                    e.status = s.UNLOAD;
                    console.log("初始化" + o + "广告失败! " + e.index);
                    console.error(t);
                });
            }
        };
        var m = function(e) {
            if (!u[e].id) {
                return;
            }
            var t = null;
            u[e].list.forEach(function(n, a) {
                switch (n.status) {
                  case s.UNLOAD:
                    n.status = s.LOADING;
                    setTimeout(function() {
                        v(n, e);
                    }, a * 1e4);
                    break;

                  case s.LOADING:
                    break;

                  case s.LOADED:
                    t = t || n;
                    break;
                }
            });
            return t;
        };
        var h = function(e) {
            u[l.REWARD].id = e;
            m(l.REWARD);
        };
        var y = function(e) {
            u[l.INTERSTITIAL].id = e;
            m(l.INTERSTITIAL);
        };
        var p = function(e, t) {
            var n = m(e);
            var a = e === l.REWARD;
            var o = a ? "视频" : "插屏";
            if (n) {
                n.status = s.UNLOAD;
                n.instance.showAsync().then(function() {
                    delete n.instance;
                    m(e);
                    t();
                })["catch"](function(a) {
                    if (a.code !== "RATE_LIMITED") {
                        delete n.instance;
                    } else {
                        n.status = s.LOADING;
                        setTimeout(function() {
                            n.status = s.LOADED;
                        }, 1e4);
                    }
                    console.error(o, "广告播放失败!", a);
                    console.log("尝试获取另一个" + o + "广告");
                    p(e, t);
                });
            } else {
                console.error("没有已加载完毕的" + o + "广告!");
                console.log(a ? "即将播放插屏广告!" : "即将直接发放奖励!");
                a ? p(l.INTERSTITIAL, t) : t(1);
            }
        };
        var I = 0;
        var w = function(e, t) {
            var n = e.includes("https") ? PlatformAPI.getItem(e) : "";
            if (!n) {
                PlatformAPI.getBase64Async(e, function(e) {
                    t(e);
                });
            } else {
                t(n);
            }
        };
        var S = function(e) {
            var t = e.callback;
            if (!FBInstant.context.getID()) return t && t(false, "没有环境");
            var n = e.score + "";
            PlatformAPI.makeChallengeImage({
                imageUrl: o,
                score: n,
                callback: function(e) {
                    var a = PlatformAPI.challengeText.replace("{0}", n);
                    var o = {};
                    c.forEach(function(e) {
                        o[e] = a;
                    });
                    var r = {
                        action: "CUSTOM",
                        image: e,
                        text: {
                            default: a,
                            localizations: o
                        },
                        template: "",
                        notification: "PUSH"
                    };
                    FBInstant.updateAsync(r).then(function() {
                        t && t(true);
                    })["catch"](function(e) {
                        t && t(false, e);
                    });
                }
            });
        };
        var T = function(e) {
            var t = function(t) {
                PlatformAPI.request({
                    url: r + "/game/fb/subscribe.html",
                    data: {
                        fb: e,
                        player_id: FBInstant.player.getID(),
                        subscribe: t
                    },
                    method: "POST"
                });
            };
            FBInstant.player.canSubscribeBotAsync().then(function(e) {
                e && FBInstant.player.subscribeBotAsync().then(function(e) {
                    console.log("then,", e);
                    t(1);
                })["catch"](function(e) {
                    console.log("catch,", e);
                    t(0);
                });
            })["catch"](function(e) {
                console.log(e);
            });
        };
        var _ = function(e, t) {
            var n = 3;
            var a = function() {
                PlatformAPI.request({
                    url: r + "/game/user/login.html",
                    method: "POST",
                    data: {
                        fb: e,
                        player_id: FBInstant.player.getID(),
                        user_name: FBInstant.player.getName(),
                        header_url: FBInstant.player.getPhoto(),
                        locale: FBInstant.getLocale()
                    },
                    success: function() {
                        t && t();
                    },
                    fail: function() {
                        if (n <= 0) {
                            return;
                        }
                        n--;
                        a();
                    }
                });
            };
            if (FBInstant.player.getName() === null) {
                var o = setInterval(function() {
                    if (FBInstant.player.getName() === null) {
                        console.log("等待调用FBInstant.startGameAsync");
                    } else {
                        clearInterval(o);
                        a();
                    }
                }, 100);
            } else {
                a();
            }
        };
        var A = function(e) {
            var t;
            var n = e.length;
            var a = null;
            while (0 != n) {
                a = Math.random() * n-- >>> 0;
                t = [ e[a], e[n] ], e[n] = t[0], e[a] = t[1];
            }
            return e;
        };
        var x = function(e) {
            var t = [];
            if (!e.includes("https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=")) {
                return e;
            }
            var n = e.split("?")[1];
            var a = n.split("&");
            a.forEach(function(e) {
                var n = e.split("=");
                switch (n[0]) {
                  case "igpid":
                    t[0] = n[1];
                    break;

                  case "ext":
                    t[1] = n[1];
                    break;

                  case "hash":
                    t[2] = n[1];
                    break;
                }
            });
            return t.join("|");
        };
        var b = function() {
            FBInstant.player.getConnectedPlayersAsync().then(function(e) {
                var t = [];
                A(e).slice(0, 3).forEach(function(e) {
                    t.push({
                        name: e.getName(),
                        photo: e.getPhoto(),
                        id: e.getID()
                    });
                });
                FBInstant.setSessionData({
                    friendList: t,
                    locale: FBInstant.getLocale()
                });
            });
        };
        var E = function() {};
        var P = {
            platform: "FBInstant",
            share: function(e) {
                if (e === void 0) {
                    e = function() {};
                }
                w(a.imageUrl, function(t) {
                    FBInstant.shareAsync({
                        intent: "REQUEST",
                        image: t,
                        text: a.title,
                        data: {}
                    }).then(function(t) {
                        console.log("shareResult", t);
                        e();
                    })["catch"](function(e) {
                        console.error("shareResult", e);
                    });
                });
            },
            onHide: function(e) {
                FBInstant.onPause(e);
            },
            createShortcut: function() {
                FBInstant.canCreateShortcutAsync().then(function(e) {
                    if (e) {
                        FBInstant.createShortcutAsync();
                    }
                });
            },
            createVideoAd: function(e, t) {
                p(l.REWARD, t);
            },
            createInterstitialAd: function(e, t) {
                p(l.INTERSTITIAL, t);
            },
            initAd: function(e) {
                var t = e.fb_site.img_ad;
                var n = e.fb_site.video_ad;
                I = +e.fb_site.banner_to_interstitial_probability;
                console.log("RewardedVideoId:", n || "视频广告未配置");
                console.log("InterstitialAdId:", t || "插屏广告未配置");
                console.log("BannerToInterstitialProbability:", I);
                if (n && FBInstant.getSupportedAPIs().indexOf("getRewardedVideoAsync") !== -1) {
                    h(n);
                }
                if (t && FBInstant.getSupportedAPIs().indexOf("getInterstitialAdAsync") !== -1) {
                    y(t);
                }
                P.createShortcut();
            },
            chooseAsync: function(e, t) {
                FBInstant.context.chooseAsync({
                    filter: [ "NEW_CONTEXT_ONLY" ]
                }).then(function() {
                    S({
                        score: e,
                        callback: t
                    });
                })["catch"](function() {
                    t && t(false);
                });
            },
            getLocaleType: function() {
                var e = FBInstant.getLocale();
                if (e === "zh_CN") {
                    return "zh";
                } else {
                    return "en";
                }
            },
            shareAppMessage: function(e) {
                P.share(e.success);
            },
            navigateToMiniProgram: function(e) {
                PlatformAPI.request({
                    method: "POST",
                    url: r + "/game/fb/sharelog.html",
                    data: {
                        fb: PlatformAPI.gameId,
                        index: e.btnIndex,
                        type: 1,
                        player_id: FBInstant.player.getID()
                    }
                });
                FBInstant.switchGameAsync(e.appId, e.extraData).then(function() {
                    PlatformAPI.request({
                        method: "POST",
                        url: r + "/game/fb/sharelog.html",
                        data: {
                            fb: PlatformAPI.gameId,
                            index: e.btnIndex,
                            type: 2,
                            player_id: FBInstant.player.getID()
                        }
                    });
                    e.success && e.success();
                })["catch"](function(t) {
                    e.fail && e.fail();
                });
            },
            setUserCloudStorage: function(e) {
                var t = {};
                e.KVDataList.forEach(function(e) {
                    t[e.key] = e.value;
                });
                FBInstant.player.setStatsAsync(t).then(e.success);
            },
            getPlayerInfo: function() {
                if (FBInstant.player.getName()) {
                    return {
                        nickName: FBInstant.player.getName(),
                        nickname: FBInstant.player.getName(),
                        avatarUrl: FBInstant.player.getPhoto()
                    };
                } else {
                    var e = {};
                    Object.defineProperty(e, "nickName", {
                        get: function() {
                            return FBInstant.player.getName();
                        }
                    });
                    Object.defineProperty(e, "nickname", {
                        get: function() {
                            return FBInstant.player.getName();
                        }
                    });
                    Object.defineProperty(e, "avatarUrl", {
                        get: function() {
                            return FBInstant.player.getPhoto();
                        }
                    });
                    return e;
                }
            },
            setCloudStats: function(e, t) {
                FBInstant.player.setStatsAsync(e).then(function() {
                    t && t();
                });
            },
            getCloudStats: function(e) {},
            shareWithImage: function(e, t, n) {
                if (typeof n !== "function") {
                    n = function() {};
                }
                FBInstant.shareAsync({
                    intent: "REQUEST",
                    image: e,
                    text: a.title,
                    data: {}
                }).then(function(e) {
                    console.log("shareResult", e);
                    n({});
                })["catch"](function(e) {
                    console.error("shareResult", e);
                });
            },
            updateLeaderboard: function(e, t, n) {
                P.updateScoreToContext(t);
                var a = undefined;
                if (typeof n !== typeof void 0) {
                    if (typeof n !== typeof {}) {
                        console.error("extraData必须是一个Object");
                        debugger;
                        return;
                    }
                    a = JSON.stringify(n);
                }
                FBInstant.getLeaderboardAsync(e).then(function(e) {
                    return e.setScoreAsync(t, a);
                })["catch"](function(e) {
                    console.error(e);
                });
            },
            createBannerAd: function(e) {
                console.log("banner 转 插屏几率", I);
                if (I && Math.random() < I / 100) {
                    PlatformAPI.createInterstitialAd(e, function() {});
                }
                return new Proxy({}, {
                    get: function(e, t) {
                        return function() {};
                    }
                });
            },
            createAsync: function(e) {
                var t = e.callback;
                var n = e.id;
                FBInstant.context.createAsync(n).then(function() {
                    S(e);
                })["catch"](function(e) {
                    t && t(false, e);
                });
            },
            updateScoreToContext: function(e, t) {
                if (t === void 0) {
                    t = function() {};
                }
                S({
                    score: e,
                    callback: t
                });
            }
        };
        n["default"] = P;
    }, {} ],
    2: [ function(e, t, n) {
        "use strict";
        n.__esModule = true;
        var a = e("./ToastAndModal");
        var o = e("./SSSGameConfig");
        var r = {
            initializeAsync() {
                return new Promise(e => {
                    e();
                });
            },
            startGameAsync() {
                return new Promise(e => {
                    e();
                });
            },
            platform: "H5",
            toast: null,
            showToast: function(e) {
                if (typeof e === typeof "") {
                    a["default"].showToast({
                        content: e
                    });
                } else {
                    e.title && !e.content && (e.content = e.title);
                    a["default"].showToast(e);
                }
            },
            showModal: function e(t) {
                a["default"].showModal(t);
            },
            getItem: function(e) {
                return localStorage.getItem(e);
            },
            setItem: function(e, t) {
                return localStorage.setItem(e, t);
            },
            requestOpenId: function() {
                return "";
            },
            createVideoAd: function(e, t) {
                console.log("视频播放回调");
                window.__adStartCallback = ()=>{
                    sm._stageOnBlur()
                }
                window.__adFinishedCallback = (() => {
                    t && t();
                    sm._stageOnFocus()
                });
                window.__adErrorCallback = ()=>{
                    sm._stageOnFocus()
                    gameManager && gameManager.resumeGame && gameManager.resumeGame();
                    PlatformAPI.showToast("No Ad Available!")
                }
                window.createVideoAd();
            },
            createInterstitialAd: function(e, t) {
                console.log("插屏回调");
                t && t();
            },
            initAd: function(e, t) {
                console.log("initAd--data", e);
                t && t();
            },
            getLocaleType: function() {
                return "zh";
            },
            setStorageSync: function(e, t) {
                localStorage.setItem(e, JSON.stringify(t));
            },
            setStorage: function(e) {
                var t = e.key, n = e.data, a = e.success;
                setTimeout(function() {
                    localStorage.setItem(t, JSON.stringify(n));
                    a && a({
                        errMsg: "setStorage:ok"
                    });
                }, 0);
            },
            getOpenDataContext: function() {
                return {
                    postMessage: function(e) {
                        console.log("open data context post message : ", e);
                    },
                    canvas: r.createCanvas()
                };
            },
            getSystemInfo: function(e) {
                setTimeout(function() {
                    e && e.success(r.getSystemInfoSync());
                }, 0);
            },
            getSystemInfoSync: function() {
                return new Proxy(window, {
                    get: function(e, t) {
                        return {
                            errMsg: "getSystemInfo:ok",
                            screenWidth: window.innerWidth,
                            screenHeight: window.innerHeight,
                            windowWidth: window.innerWidth,
                            windowHeight: window.innerHeight,
                            SDKVersion: "9.9.9",
                            system: ""
                        }[t];
                    }
                });
            },
            getLaunchOptionsSync: function() {
                return {
                    query: {}
                };
            },
            clearStorage: function(e) {
                setTimeout(function() {
                    localStorage.clear();
                    e.success && e.success();
                }, 0);
            },
            clearStorageSync: function() {
                localStorage.clear();
            },
            getStorage: function(e) {
                var t = e.key, n = e.success;
                setTimeout(function() {
                    var e = localStorage.getItem(t);
                    try {
                        n && n({
                            errMsg: "getStorage:ok",
                            data: JSON.parse(e)
                        });
                    } catch (t) {
                        n && n({
                            errMsg: "getStorage:ok",
                            data: e
                        });
                    }
                }, 0);
            },
            getStorageSync: function(e) {
                var t = localStorage.getItem(e);
                try {
                    return JSON.parse(t);
                } catch (e) {
                    return t;
                }
            },
            removeStorage: function(e) {
                var t = e.key, n = e.success;
                setTimeout(function() {
                    localStorage.removeItem(t);
                    n && n();
                }, 0);
            },
            removeStorageSync: function(e) {
                localStorage.removeItem(e);
            },
            getStorageInfo: function(e) {
                var t = e.success;
                console.error("已废弃, 使用PlatformAPI.getStorage代替");
                setTimeout(function() {
                    t && t({});
                }, 0);
            },
            getStorageInfoSync: function() {
                console.error("已废弃, 使用PlatformAPI.getStorageSync代替");
                return {};
            },
            request: function(e) {
                var t = typeof e.tryTimes === "undefined" ? 3 : e.tryTimes;
                var n = e.url;
                var a = e.success;
                var o = e.fail;
                var i = e.complete;
                var c = new XMLHttpRequest();
                c.onreadystatechange = function() {
                    var s;
                    try {
                        s = JSON.parse(c.responseText);
                    } catch (e) {
                        s = c.responseText;
                    }
                    if (4 == c.readyState) {
                        var l = c.getAllResponseHeaders();
                        var u = l.trim().split(/[\r\n]+/);
                        var f = {};
                        u.forEach(function(e) {
                            var t = e.split(": ");
                            var n = t.shift();
                            var a = t.join(": ");
                            f[n] = a;
                        });
                        if (200 <= c.status && 400 > c.status) {
                            var d = {
                                data: s,
                                header: f,
                                statusCode: c.status
                            };
                            a && a(d);
                            i && i(d);
                        } else {
                            if (t > 0) {
                                console.log("请求失败, 正在进行重试...剩余重试次数:" + (t - 1));
                                e.tryTimes = t - 1;
                                r.request(e);
                            } else {
                                var d = {
                                    url: n,
                                    method: e.method || "GET",
                                    data: s,
                                    statusCode: c.status,
                                    header: f,
                                    errMsg: c.statusText
                                };
                                o && o(d);
                                i && i(d);
                            }
                        }
                    }
                };
                c.open(e.method || "GET", n);
                c.send(JSON.stringify(e.data));
            },
            getVideoAdPlayInfoToday: function() {
                return {
                    playTimes: -1,
                    maxTimes: -1,
                    valid: true
                };
            },
            updateShareMenu: function(e) {
                e && e.success && e.success({});
            },
            getPlayerInfo: function() {
                return {
                    nickname: "GDPlayer",
                    nickName: "GDPlayer",
                    avatarUrl: "./fbcdn/avatar.png"
                };
            },
            setCloudStats: function(e, t) {
                r.setStorageSync("__cloudObject", JSON.stringify(e));
                t && t();
            },
            getCloudStats: function(e) {
                e.success && e.success(r.getStorageSync("__cloudObject"));
            },
            login: function(e) {
                e.success && e.success({
                    errMsg: "login:ok",
                    code: "1"
                });
            },
            getUserInfo: function(e) {
                e.success && e.success({
                    userInfo: window["PlatformAPI"].getPlayerInfo()
                });
            },
            shareAppMessage: function(e) {
                e.success && e.success({});
            },
            onShow: function(e, t) {
                if (t === void 0) {
                    t = true;
                }
                if (window["cc"]) {
                    var n = window["cc"];
                    n.game.on(n.game.EVENT_SHOW, function() {
                        e({
                            query: {}
                        });
                    });
                } else {
                    if (window["Laya"] || window["laya"]) {
                        var a = window["Laya"];
                        var o = setInterval(function() {
                            if (a.stage) {
                                clearInterval(o);
                                console.log("regist Laya onShow");
                                a.stage.on(a.Event.VISIBILITY_CHANGE, null, function(t) {
                                    if (a.stage._isVisibility) {
                                        e({
                                            query: {}
                                        });
                                    }
                                });
                            } else {
                                console.log("Laya.stage is not initialied, wait 100 ms to recheck");
                            }
                        }, 100);
                    } else {
                        if (window["egret"]) {
                            var i = setInterval(function() {
                                var t = window["egret"];
                                if (t.lifecycle && t.lifecycle.stage) {
                                    console.log("regist egret onShow");
                                    clearInterval(i);
                                    t.lifecycle.stage.addEventListener(t.Event.ACTIVATE, function() {
                                        e({
                                            query: {}
                                        });
                                    });
                                } else {
                                    console.log("egret.lifecycle.stage is not initialied, wait 100 ms to recheck");
                                }
                            }, 100);
                        } else {
                            if (t) {
                                console.error("未知引擎, 将在一秒后重试");
                                setTimeout(function() {
                                    r.onShow(e, false);
                                }, 1e3);
                            } else {
                                console.error("未知引擎, 需要在此处手动添加某种监听返回前台的方法!");
                                debugger;
                            }
                        }
                    }
                }
            },
            getWXUserInfo: function() {
                return {
                    userInfo: window["PlatformAPI"].getPlayerInfo()
                };
            },
            createInnerAudioContext: function() {
                var e = new Audio();
                e.autoplay = true;
                e.preload = "preload";
                var t = [];
                var n = {
                    play: function() {
                        try {
                            e.play();
                        } catch (e) {
                            console.error(e);
                        }
                        for (var n = 0; n < t.length; n++) {
                            t[n] && t[n]();
                        }
                    },
                    pause: function() {
                        e.pause();
                    },
                    stop: function() {
                        e.pause();
                    },
                    onEnded: function() {
                        console.warn("未实现的方法");
                    },
                    onPlay: function(e) {
                        t.push(e);
                    }
                };
                Object.defineProperty(n, "src", {
                    set: function(t) {
                        e.src = t;
                    },
                    get: function() {
                        return e.src;
                    }
                });
                return n;
            },
            createCanvas: function() {
                return document.createElement("canvas");
            },
            createImage: function() {
                return new Image();
            },
            toTempFilePath: function(e) {
                var t = window["cc"];
                var n = function() {
                    t && t.director.off(t.Director.EVENT_AFTER_DRAW, n);
                    var a = document.querySelectorAll("canvas")[0];
                    if (!a) {
                        console.error("查找canvas失败, 请修改上方代码, 手动定位主canvas");
                        debugger;
                        return;
                    }
                    var o = a.toDataURL("image/png");
                    var r = new Image();
                    r.onload = function() {
                        var t = document.createElement("canvas");
                        t.width = e.destWidth;
                        t.height = e.destHeight;
                        var n = t.getContext("2d");
                        n.drawImage(r, e.x, e.y, e.width, e.height, 0, 0, t.width, t.height);
                        var a = t.toDataURL("image/png");
                        e.success && e.success(a);
                    };
                    r.src = o;
                };
                if (t) {
                    t.director.on(t.Director.EVENT_AFTER_DRAW, n);
                } else {
                    n();
                }
            },
            toTempFilePathSync: function(e) {
                r.toTempFilePath(e);
            },
            getSetting: function(e) {
                e && e.success && e.success({
                    authSetting: {
                        "scope.userInfo": true
                    }
                });
            },
            getBase64Async: function(e, t) {
                if (e.includes("fbcdn")) {
                    var n = new XMLHttpRequest();
                    n.open("get", e, true);
                    n.responseType = "blob";
                    n.onload = function() {
                        if (this.status == 200) {
                            var n = this.response;
                            var a = new FileReader();
                            a.onloadend = function(e) {
                                var n = e.target["result"];
                                t && t(n);
                            };
                            a.readAsDataURL(n);
                        } else {
                            console.error("加载图片失败!", e);
                        }
                    };
                    n.setRequestHeader("Access-Control-Allow-Origin", "*");
                    n.send();
                } else {
                    PlatformAPI.request({
                        url: "https://fb.sanshengshi.xyz/event/fb/image.html?url=" + e,
                        success: function(e) {
                            console.log(e);
                            var n = e.data.message;
                            t && t(n);
                        }
                    });
                }
            },
            vibrateShort: function() {
                navigator && navigator.vibrate && navigator.vibrate(15);
            },
            vibrateLong: function() {
                navigator && navigator.vibrate && navigator.vibrate(400);
            },
            getUpdateManager: function() {
                return {
                    onCheckForUpdate: function(e) {
                        console.warn("empty function called: getUpdateManager().onCheckForUpdate() ");
                        e && e({
                            hasUpdate: false
                        });
                    },
                    onUpdateReady: function() {
                        console.warn("empty function called: getUpdateManager().onUpdateReady() ");
                    },
                    onUpdateFailed: function() {
                        console.warn("empty function called: getUpdateManager().onUpdateFailed() ");
                    },
                    applyUpdate: function() {
                        console.warn("empty function called: getUpdateManager().applyUpdate() ");
                    }
                };
            },
            getNetworkType: function(e) {
                setTimeout(function() {
                    e && e.success && e.success({
                        errMsg: "getNetworkType:ok",
                        networkType: "wifi"
                    });
                }, 0);
            },
            checkSession: function(e) {
                setTimeout(function() {
                    e && e.success && e.success();
                }, 0);
            },
            init: function(e) {
                PlatformAPI.gameId = e;
                o["default"](e);
            },
            getLocale: function() {
                return "zh_CN";
            },
            makeChallengeImage: function(e) {
                var t = e.imageUrl;
                var n = e.score;
                var a = typeof n !== typeof void 0;
                var o = e.callback;
                var i = r.createCanvas();
                var c = i.getContext("2d");
                var s = 2;
                var l = [];
                var u = FBInstant.player.getPhoto();
                var f = function(e, t, n) {
                    var a = function(e, t) {
                        return {
                            x: e,
                            y: t
                        };
                    };
                    var o = a(e.x + t, e.y);
                    var r = a(e.x + e.width, e.y);
                    var i = a(e.x + e.width, e.y + e.height);
                    var c = a(e.x, e.y + e.height);
                    var s = a(e.x, e.y);
                    n.beginPath();
                    n.lineWidth = 6;
                    n.strokeStyle = "#FFFFFF";
                    n.moveTo(o.x, o.y);
                    n.arcTo(r.x, r.y, i.x, i.y, t);
                    n.arcTo(i.x, i.y, c.x, c.y, t);
                    n.arcTo(c.x, c.y, s.x, s.y, t);
                    n.arcTo(s.x, s.y, o.x, o.y, t);
                    n.shadowColor = "rgba(0, 0, 0, 0.0)";
                    n.stroke();
                };
                var d = function(e) {
                    var t = e.src;
                    var r = e.onload;
                    var u = new Image();
                    u.crossOrigin = "Anoymous";
                    u.onload = function() {
                        r && r(u);
                        s--;
                        if (s === 0) {
                            l.forEach(function(e) {
                                var t = e.options;
                                var n = t.x || 0;
                                var a = t.y || 0;
                                var o = t.destWidth || e.img.width;
                                var r = t.destHeight || e.img.height;
                                c.drawImage(e.img, n, a, o, r);
                            });
                            f({
                                x: g - 3,
                                y: h - 3,
                                width: v + 6,
                                height: m + 6
                            }, 20, c);
                            c.shadowColor = "rgba(0, 0, 0, 0.7)";
                            c.shadowOffsetX = 5;
                            c.shadowOffsetY = 5;
                            c.shadowBlur = 2;
                            c.font = "bold 40px Helvetica";
                            c.fillStyle = "#ffffff";
                            c.textAlign = "center";
                            c.textBaseline = "middle";
                            if (a) {
                                c.fillText("SCORE", 450, 120);
                                c.fillText(n + "", 450, 190);
                            } else {
                                c.fillText("YOUR", 440, 125);
                                c.fillText("TURN!", 480, 190);
                            }
                            c.restore();
                            o && o(i.toDataURL());
                        }
                    };
                    u.src = t;
                    l.push({
                        img: u,
                        options: e
                    });
                };
                d({
                    src: t,
                    onload: function(e) {
                        i.width = e.width;
                        i.height = e.height;
                    }
                });
                var g = 50;
                var v = 140;
                var m = v;
                var h = 150 - m / 2;
                d({
                    src: u,
                    x: g,
                    y: h,
                    destWidth: v,
                    destHeight: m
                });
            }
        };
        n["default"] = r;
    }, {
        "./SSSGameConfig": 3,
        "./ToastAndModal": 4
    } ],
    3: [ function(e, t, n) {
        "use strict";
        n.__esModule = true;
        var a = function(e) {
            if (!window["PlatformAPI"]) {
                console.error("先引用PlatformAPI, 再引用SSSGameConfig!");
                debugger;
            }
            var t = "https://raw.githubusercontent.com/zty8023ys/configServer/master/";
            var n;
            var a;
            var o;
            var r;
            var i;
            var c;
            var s;
            var l = false;
            var u = null;
            var f = null;
            var d = null;
            var g = null;
            var v = null;
            var m = null;
            var h = null;
            var y = function(e, t, n, a, o, r, i) {
                f = t;
                d = n;
                g = a;
                v = o;
                m = r;
                h = i;
            };
            var p = {};
            window["INeedUserInfo"] = function() {};
            window["initSSSGameConfig"] = function(a, o) {
                if (a === void 0) {
                    a = function() {
                        console.log("initSSSGameConfig Done");
                    };
                }
                if (o === void 0) {
                    o = function() {
                        console.log("onLoadFromNet Done");
                    };
                }
                if (l) {
                    o();
                    a();
                    return;
                }
                l = true;
                var r = function() {
                    wx.request({
                        url: t + e + ".json?r=" + Math.random(),
                        success: function(e) {
                            console.log("game config", e);
                            if (e.data && e.data.status === 1) {
                                var t = e.data;
                                n(t, a, o);
                            } else {
                                r();
                            }
                        },
                        failed: function() {
                            r();
                        },
                        complete: function() {
                            console.log("sdk request complete!");
                        }
                    });
                };
                r();
            };
            n = function(e, t, n) {
                r(e);
                a(e);
                o(e);
                i(e, t);
                s(e.fb_share.share);
                c();
                n();
            };
            c = function() {
                var e = {
                    getRandomShareUnit: true,
                    createBrandSprite: true,
                    setSSSmoregameBtn: true,
                    createMoreGameBtn: true,
                    getSwitchState: true,
                    loadMygameUrlJosn: true,
                    getGameConfig: true
                };
                var t = {};
                for (var n in p) {
                    t[n] = p[n];
                    console.log("add SSSGameConfig function : " + n);
                }
                for (var n in e) {
                    t[n] = t[n] || function() {};
                }
                window["SSSGameConfig"] = t;
            };
            r = function(e) {
                p.getSwitchState = function() {
                    return true;
                };
            };
            i = function(e, t) {
                var n = {
                    hugeScale: 1.1,
                    toHugeTime: 1,
                    delayTime: .8,
                    smallScale: .9,
                    toSmallTime: 1.5
                };
                var a = function(e) {
                    var t = window["Laya"];
                    var a = function(e, t) {
                        e.x = t.x, e.y = t.y;
                    };
                    var o = function(e, n, o, r) {
                        if (typeof r != typeof undefined) {
                            o = {
                                x: o,
                                y: r
                            };
                        }
                        var i = t.loader.getRes(e);
                        if (!i) return console.error("加载图片失败! ", e), null;
                        var c = new t.Sprite();
                        c.graphics.drawTexture(i, 0, 0);
                        c.width = i._w;
                        c.height = i._h;
                        c.pivot(c.width / 2, c.height / 2);
                        n && n.addChild(c);
                        o && a(c, o);
                        return c;
                    };
                    d = o;
                    var r = function(e, n, a) {
                        var o = [];
                        e.forEach(function(e, t) {
                            n[t] = e;
                            o.push({
                                url: e,
                                type: "image"
                            });
                        });
                        t.loader.load(o, t.Handler.create(this, a));
                    };
                    var i = function() {};
                    var c = function(e, t) {
                        e.on("mousedown", null, t);
                    };
                    var s = function(e, n) {
                        var a = t.loader.getRes(n);
                        e.graphics.clear();
                        e.graphics.drawTexture(a, 0, 0);
                        e.width = a._w;
                        e.height = a._h;
                    };
                    var l = function(e, t) {
                        var n = e.getChildByName(t);
                        n && n.destroy();
                    };
                    var u = function(e) {
                        e.timerLoop((n.toHugeTime + n.toSmallTime + n.delayTime) * 1e3, e, function() {
                            t.Tween.to(e, {
                                scaleX: n.hugeScale,
                                scaleY: n.hugeScale
                            }, n.toHugeTime * 1e3, null, t.Handler.create(e, function() {
                                t.Tween.to(e, {}, n.delayTime * 1e3, null, t.Handler.create(e, function() {
                                    t.Tween.to(e, {
                                        scaleX: n.smallScale,
                                        scaleY: n.smallScale
                                    }, n.toSmallTime * 1e3);
                                }));
                            }));
                        });
                    };
                    y(i, r, o, c, s, l, u);
                    setTimeout(function() {
                        e();
                    }, 0);
                };
                var o = function(e) {
                    var t = window["cc"];
                    var a = {};
                    var o = function(e, n, a) {
                        var o = 0;
                        var r = function(r) {
                            if (typeof e[r] != typeof "" || e[r].indexOf("https") == -1) return "continue";
                            var i = e[r];
                            o++;
                            t.loader.load(i, function(e, t) {
                                n[r] = t;
                                o--;
                                if (o == 0) {
                                    a && a();
                                }
                            });
                        };
                        for (var i in e) {
                            r(i);
                        }
                    };
                    var r = function(e, n, a) {
                        var o = new t.Node();
                        var r = new t.SpriteFrame();
                        o.addComponent(t.Sprite).spriteFrame = r;
                        n && n.addChild(o);
                        a && (o.position = a);
                        r.setTexture(e);
                        return o;
                    };
                    var i = function(e, t, n) {
                        return r(a.brandImage, e, {
                            x: t,
                            y: n
                        });
                    };
                    var c = function(e, t) {
                        e.on("touchstart", t);
                    };
                    var s = function(e, n) {
                        e.getComponent(t.Sprite).spriteFrame.setTexture(n);
                    };
                    var l = function(e, t) {
                        var n = e.getChildByName(t);
                        n && n.destroy();
                    };
                    var u = function(e) {
                        e.runAction(t.repeatForever(t.sequence(t.scaleTo(n.toHugeTime, n.hugeScale), t.delayTime(n.delayTime), t.scaleTo(n.toSmallTime, n.smallScale))));
                    };
                    y(i, o, r, c, s, l, u);
                    setTimeout(function() {
                        e();
                    }, 0);
                };
                var r = function(e) {
                    var t = window["egret"];
                    var a = window["eui"];
                    var o = window["RES"];
                    var r = {};
                    var i = function(e, t, n) {
                        var o = new a.Image(e);
                        o.anchorOffsetX = e.textureWidth / 2;
                        o.anchorOffsetY = e.textureHeight / 2;
                        n && (o.x = n.x, o.y = n.y);
                        t && t.addChild(o);
                        return o;
                    };
                    var c = function(e, t, n) {
                        var a = 0;
                        var r = function(r) {
                            if (typeof e[r] != typeof "" || e[r].indexOf("https") == -1) return "continue";
                            var i = e[r];
                            a++;
                            o.getResByUrl(i, function(e) {
                                t[r] = e;
                                a--;
                                if (a == 0) {
                                    n && n();
                                }
                            }, null, o.ResourceItem.TYPE_IMAGE);
                        };
                        for (var i in e) {
                            r(i);
                        }
                    };
                    var s = function(e, t, n) {
                        return i(r.brandImage, e, {
                            x: t,
                            y: n
                        });
                    };
                    var l = function(e, n) {
                        e.addEventListener(t.TouchEvent.TOUCH_BEGIN, function() {
                            n();
                        }, e);
                    };
                    var u = function(e, t) {
                        e.source = t;
                    };
                    var f = function(e, t) {
                        var n = e.getChildByName(t);
                        n && e.removeChild(n);
                    };
                    var d = function(e) {
                        t.Tween.get(e, {
                            loop: true
                        }).to({
                            scaleX: n.hugeScale,
                            scaleY: n.hugeScale
                        }, n.toHugeTime * 500).wait(n.delayTime * 1e3).to({
                            scaleX: n.smallScale,
                            scaleY: n.smallScale
                        }, n.toSmallTime * 1e3).to({
                            scaleX: 1,
                            scaleY: 1
                        }, n.toHugeTime * 500);
                    };
                    y(s, c, i, l, u, f, d);
                    setTimeout(function() {
                        e();
                    }, 0);
                };
                var i = function() {
                    var e = window["ccui"];
                    var a = window["cc"];
                    var o = {};
                    var r = function(e, t, n) {
                        var o = new a.Sprite(e);
                        n && o.setPosition(n);
                        t && t.addChild(o);
                        return o;
                    };
                    var i = function(e, t, n) {
                        var o = 0;
                        var r = function(r) {
                            if (typeof e[r] != typeof "" || e[r].indexOf("https") == -1) return "continue";
                            var i = e[r];
                            o++;
                            a.loader.loadImg(i, function() {}, function(e, i) {
                                var c = new a.Texture2D();
                                c.initWithElement(i);
                                c.handleLoadedTexture();
                                t[r] = c;
                                o--;
                                if (o == 0) {
                                    n && n();
                                }
                            });
                        };
                        for (var i in e) {
                            r(i);
                        }
                    };
                    var c = function(e, t, n) {
                        return r(o.brandImage, e, {
                            x: t,
                            y: n
                        });
                    };
                    var s = function(e, t) {
                        e.addClickEventListener(t);
                    };
                    var l = function(e, t) {
                        e.loadTextureNormal(t);
                    };
                    var u = function(e, t) {
                        var n = e.getChildByName(t);
                        n && e.removeChild(n);
                    };
                    var f = function(t, n, a) {
                        var o = e.Button.create();
                        o.setTouchEnabled(true);
                        o.loadTextures(t, "", "");
                        n.addChild(o);
                        o.setPosition(a);
                        return o;
                    };
                    var d = function(e) {
                        e.runAction(a.repeatForever(a.sequence(a.scaleTo(n.toHugeTime, n.hugeScale), a.delayTime(n.delayTime), a.scaleTo(n.toSmallTime, n.smallScale))));
                    };
                    y(c, function(e, t, n) {
                        i(e, t, function() {
                            for (var a in e) {
                                t[a] = e[a];
                            }
                            n();
                        });
                    }, f, s, l, u, d);
                    setTimeout(function() {
                        t();
                    }, 0);
                };
                var c = function() {
                    if (typeof window != "undefined" && window["cc"]) {
                        if (window["cc"]["DEFAULT_ENGINE"]) {
                            console.log("%c \n\n================================\n\n " + window["cc"]["DEFAULT_ENGINE"] + " Project\n\n================================\n\n", "color:#ff0000");
                            return i;
                        }
                        console.log("%c \n\n================================\n\n Cocos Creator Project\n\n================================\n\n", "color:#ff0000");
                        return o;
                    } else if (typeof window != "undefined" && window["egret"]) {
                        console.log("%c \n\n================================\n\n Egret Project\n\n================================\n\n", "color:#ff0000");
                        return r;
                    } else if (typeof window != "undefined" && (window["laya"] || window["Laya"])) {
                        console.log("%c \n\n================================\n\n Laya Project\n\n================================\n\n", "color:#ff0000");
                        return a;
                    } else {
                        console.log("%c \n\n================================\n\nUnkonw Project!!!\n\nUtils Load Failed!!!\n\n================================\n\n", "color:#ff0000");
                        return function(e) {
                            setTimeout(function() {
                                console.error("未知引擎, 导量可能无法正常使用, 需要手动添加代码");
                                var t = function(e) {
                                    return function() {
                                        console.error("未知引擎, 调用方法:" + e + " 失败!");
                                        debugger;
                                    };
                                };
                                y(t("createBrandSprite"), t("loadFromNet"), t("newSprite"), t("setClickCallbackFunc"), t("changeSpriteFunc"), t("removeOldSpriteFunc"), t("setScaleAnimationFunc"));
                                e();
                            }, 100);
                        };
                    }
                };
                var s = c();
                s && s(t);
            };
            a = function(e) {
                PlatformAPI.initAd(e);
            };
            o = function(e) {
                PlatformAPI.challengeText = e.fb_site.challenge_text || "Your friend sent you a new challenge just now!";
                var t = function() {
                    return {
                        title: "",
                        imageUrl: ""
                    };
                };
                p.getRandomShareUnit = t;
            };
            s = function(e) {
                var t = function() {};
                p.loadMygameUrlJosn = t;
                var n = null;
                var a = function(t) {
                    if (!m) {
                        u = t;
                        return;
                    }
                    var a = function() {
                        var e = function(e, t, n, a, o) {
                            var r = "__SSSMoreGame_" + n;
                            m(e, r);
                            var i = [];
                            var c = t.icon_image.length;
                            if (c == 0) return;
                            f(t.icon_image, i, function() {
                                var s = d(i[0], e, {
                                    x: isNaN(a) ? t.icon_image_x : a,
                                    y: isNaN(o) ? t.icon_image_y : o
                                });
                                s.name = r;
                                h(s);
                                g(s, function() {
                                    wx.navigateToMiniProgram({
                                        appId: t.jump_appid,
                                        btnIndex: n,
                                        extraData: {
                                            appid: t.appid
                                        }
                                    });
                                });
                                if (!t.icon_space) return;
                                var l = 0;
                                var u = setInterval(function() {
                                    try {
                                        v(s, i[l]);
                                    } catch (e) {
                                        console.log("change frame fail! ", e);
                                        clearInterval(u);
                                    }
                                    l++;
                                    if (l == c) {
                                        l = 0;
                                    }
                                }, t.icon_space);
                            });
                        };
                        n.forEach(function(n, a) {
                            e(t, n, a);
                        });
                        window["createMoreGameBtn"] = function(t, a, o, r) {
                            e(t, n[a], a, o, r);
                        };
                    };
                    if (n) {
                        a();
                        return;
                    }
                    setTimeout(function() {
                        var t = [];
                        e.forEach(function(e, n) {
                            t.push({
                                bind_id: 0,
                                type: 1,
                                icon_image: [ e.icon_image ],
                                icon_image_x: +e.icon_image_x,
                                icon_image_y: +e.icon_image_y,
                                jump_appid: e.appid,
                                index: n
                            });
                        });
                        n = t;
                        console.log(n);
                        a();
                    }, 0);
                };
                p.setSSSmoregameBtn = a;
                p.createMoreGameBtn = function() {
                    console.error("创建单个MoreGameBtn调用太早了!");
                };
            };
        };
        n["default"] = a;
    }, {} ],
    4: [ function(e, t, n) {
        "use strict";
        n.__esModule = true;
        var a = {
            showToast: function(e) {
                var t = this;
                var n = function() {
                    var e = t.getValidMetaWidthScale();
                    var n = document.getElementsByTagName("body")[0];
                    var a = document.createElement("div");
                    a.id = "vhs-main-toast";
                    a.style.visibility = "hidden";
                    a.style.minWidth = "45%";
                    a.style.maxWidth = "55%";
                    a.style.left = "0";
                    a.style.right = "0";
                    a.style.marginLeft = "auto";
                    a.style.marginRight = "auto";
                    a.style.backgroundColor = "#333";
                    a.style.color = "#fff";
                    a.style.textAlign = "center";
                    a.style.borderRadius = 5 * e + "px";
                    a.style.padding = 10 * e + "px";
                    a.style.position = "fixed";
                    a.style.zIndex = "10";
                    a.style.top = "35%";
                    a.style.fontSize = 16 * e + "px";
                    n.appendChild(a);
                };
                var a = function() {
                    var e = document.getElementById("vhs-main-toast");
                    e.parentNode.removeChild(e);
                };
                var o = 3e3;
                if (e.duration) {
                    o = e.duration;
                }
                if (e.content) {
                    n();
                    var r = document.getElementById("vhs-main-toast");
                    r.innerHTML = e.content;
                    r.style.visibility = "visible";
                    setTimeout(function() {
                        a();
                        if (e.complete) e.complete();
                    }, o);
                }
            },
            getValidMetaWidthScale: function() {
                var e = 1;
                var t = document.getElementsByTagName("meta");
                var n = 0;
                for (var a = t.length - 1; a >= 0; a--) {
                    var o = t[a];
                    var r = o.getAttribute("content");
                    if (r == null || r.indexOf("width") == -1 || r == "null") continue;
                    var i = r.split(",");
                    for (var c = 0, s = i.length; c < s; c++) {
                        var l = i[c];
                        if (l.indexOf("width") == -1) {
                            continue;
                        }
                        var u = l.split("=");
                        n = +u[u.length - 1];
                    }
                    if (n > 0) {
                        break;
                    }
                }
                var f = 375;
                if (n != 0) {
                    e = n / f;
                }
                return e;
            },
            showModal: function(e) {
                var t = this;
                var n = function() {
                    var e = t.getValidMetaWidthScale();
                    var n = document.getElementsByTagName("body")[0];
                    var a = document.createElement("div");
                    a.id = "vhs-modal-bg-cover";
                    a.style.backgroundColor = "rgba(51, 51, 51, 0.85)";
                    a.style.width = "100%";
                    a.style.height = "100%";
                    a.style.position = "fixed";
                    a.style.zIndex = "999";
                    a.style.top = "0";
                    n.appendChild(a);
                    var o = document.createElement("div");
                    o.id = "vhs-modal-warp";
                    o.style.visibility = "visible";
                    o.style.minWidth = "50%";
                    o.style.maxWidth = "66.8%";
                    o.style.backgroundColor = "#fff";
                    o.style.color = "#333";
                    o.style.textAlign = "center";
                    o.style.borderRadius = 5 * e + "px";
                    o.style.paddingTop = 10 * e + "px";
                    o.style.position = "fixed";
                    o.style.zIndex = "10";
                    o.style.left = "0";
                    o.style.right = "0";
                    o.style.marginLeft = "auto";
                    o.style.marginRight = "auto";
                    o.style.top = "44%";
                    o.style.fontSize = 15 * e + "px";
                    o.style.borderStyle = "solid";
                    o.style.borderColor = "#e1e0e4";
                    o.style.borderWidth = 1 * e + "px";
                    a.appendChild(o);
                    var r = document.createElement("div");
                    o.appendChild(r);
                    var i = document.createElement("p");
                    i.id = "vhs-modal-title";
                    i.style.fontSize = 16 * e + "px";
                    i.style.marginTop = "0px";
                    i.style.marginBottom = "0px";
                    r.appendChild(i);
                    var c = document.createElement("div");
                    c.id = "vhs-modal-content";
                    c.style.paddingTop = 10 * e + "px";
                    c.style.paddingBottom = 15 * e + "px";
                    c.style.paddingLeft = 10 * e + "px";
                    c.style.paddingRight = 10 * e + "px";
                    c.style.fontSize = 14 * e + "px";
                    c.style.color = "rgb(95, 92, 92)";
                    r.appendChild(c);
                    var s = document.createElement("div");
                    s.id = "vhs-modal-action";
                    s.style.bottom = 9 * e + "px";
                    s.style.width = "100%";
                    s.style.borderTop = "1px solid rgb(191, 190, 190)";
                    s.style.height = 41 * e + "px";
                    o.appendChild(s);
                    var l = document.createElement("div");
                    l.id = "vhs-modal-cancel";
                    l.style.float = "left";
                    l.style.width = "50%";
                    l.style.color = "red";
                    l.style.height = 41 * e + "px";
                    l.style.lineHeight = 41 * e + "px";
                    s.appendChild(l);
                    var u = document.createElement("div");
                    u.id = "vhs-modal-confirm";
                    u.style.float = "right";
                    u.style.width = "49%";
                    u.style.height = 41 * e + "px";
                    u.style.lineHeight = 41 * e + "px";
                    u.style.borderLeft = "1px solid rgb(191, 190, 190)";
                    s.appendChild(u);
                };
                var a = function() {
                    var e = document.getElementById("vhs-modal-bg-cover");
                    e.parentNode.removeChild(e);
                };
                var o = function() {
                    var e = t.getValidMetaWidthScale();
                    var n = document.getElementById("vhs-modal-warp");
                    var a = window.outerHeight;
                    n.style.top = (a * e - n.clientHeight) / 2 + "px";
                    console.log((a * e - n.clientHeight) / 2 + "px");
                };
                if (e.content) {
                    n();
                    var r = document.getElementById("vhs-modal-title");
                    r.innerText = e.title || "Tips";
                    var i = document.getElementById("vhs-modal-content");
                    i.innerText = e.content;
                    var c = document.getElementById("vhs-modal-cancel");
                    c.innerHTML = e.cancelTitle || "Cancel";
                    o();
                    c.onclick = function() {
                        if (e.cancel) {
                            e.cancel();
                        }
                        if (e.success) e.success({
                            cancel: true
                        });
                        if (e.complete) e.complete({
                            cancel: true
                        });
                        a();
                    };
                    var s = document.getElementById("vhs-modal-confirm");
                    s.innerHTML = e.confirmTitle || "Confirm";
                    s.onclick = function() {
                        if (e.confirm) e.confirm();
                        if (e.success) e.success({
                            confirm: true
                        });
                        if (e.complete) e.complete({
                            confirm: true
                        });
                        a();
                    };
                }
            }
        };
        n["default"] = a;
    }, {} ],
    5: [ function(e, t, n) {
        "use strict";
        n.__esModule = true;
        var a = e("./H5/H5");
        var o = e("./FBInstant/FBInstant");
        var r;
        (function(e) {
            e[e["FBINSTANT"] = 0] = "FBINSTANT";
            e[e["H5"] = 1] = "H5";
        })(r || (r = {}));
        var i = function() {
            if (window["FBInstant"]) {
                return r.FBINSTANT;
            }
            return r.H5;
        };
        var c = function(e) {
            return Object.assign(a["default"], e);
        };
        var s;
        var l = i();
        console.log("platform::::", l);
        window["getPlatform"] = i;
        switch (l) {
          case r.H5:
            s = a["default"];
            break;

          case r.FBINSTANT:
            s = Object.assign(c(o["default"]), window["FBInstant"]);
            break;
        }
        s = new Proxy(s, {
            get: function(e, t) {
                var n = Reflect.get(e, t);
                if (typeof n === typeof void 0) {
                    n = function() {
                        var e = [];
                        for (var n = 0; n < arguments.length; n++) {
                            e[n] = arguments[n];
                        }
                        console.log("empty functions:", t, "args:", e);
                        return new Proxy({}, {
                            get: function(e, t) {
                                return function() {
                                    var e = [];
                                    for (var n = 0; n < arguments.length; n++) {
                                        e[n] = arguments[n];
                                    }
                                    console.log("call empty functions:", t, e);
                                };
                            }
                        });
                    };
                }
                return n;
            }
        });
        window["oldWx"] = window["wx"];
        window["wx"] = window["wx"] || s;
        window["FBInstant"] = window["FBInstant"] || s;
        window["PlatformAPI"] = s;
        window["initSSSGameConfig"] = function() {
            console.error("需要先调用 PlatformAPI.init !!!");
            debugger;
        };
    }, {
        "./FBInstant/FBInstant": 1,
        "./H5/H5": 2
    } ]
}, {}, [ 5 ]);