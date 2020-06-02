! function() {
    "use strict";

    function s() {
        var s = window._CCSettings;
        if (window._CCSettings = void 0, !s.debug) {
            var e = s.uuids,
                c = s.rawAssets,
                r = s.assetTypes,
                t = s.rawAssets = {};
            for (var n in c) {
                var a = c[n],
                    i = t[n] = {};
                for (var o in a) {
                    var d = a[o],
                        u = d[1];
                    "number" == typeof u && (d[1] = r[u]), i[e[o] || o] = d
                }
            }
            for (var v = s.scenes, y = 0; y < v.length; ++y) {
                var p = v[y];
                "number" == typeof p.uuid && (p.uuid = e[p.uuid])
            }
            var w = s.packedAssets;
            for (var A in w)
                for (var b = w[A], l = 0; l < b.length; ++l) "number" == typeof b[l] && (b[l] = e[b[l]]);
            var m = s.subpackages;
            for (var f in m) {
                var g = m[f].uuids;
                if (g)
                    for (var E = 0, _ = g.length; E < _; E++) "number" == typeof g[E] && (g[E] = e[g[E]])
            }
        }
        cc.sys.isBrowser && document.getElementById("GameCanvas");
        var O = s.jsList,
            //R = s.debug ? "src/project.dev.js" : "src/project.js";
            R = "src/project.min.js";
        O ? (O = O.map(function(s) {
            return "src/" + s
        })).push(R) : O = [R], cc.sys.isNative && cc.sys.isMobile && (O = O.concat(["src/anysdk/jsb_anysdk.js", "src/anysdk/jsb_anysdk_constants.js"]));
        var C = {
            id: "GameCanvas",
            scenes: s.scenes,
            debugMode: s.debug ? cc.debug.DebugMode.INFO : cc.debug.DebugMode.ERROR,
            showFPS: !1,
            frameRate: 30,
            jsList: O,
            groupList: s.groupList,
            collisionMatrix: s.collisionMatrix
        };
        cc.AssetLibrary.init({
            libraryPath: "res/import",
            rawAssetsBase: "res/raw-",
            rawAssets: s.rawAssets,
            packedAssets: s.packedAssets,
            md5AssetsMap: s.md5AssetsMap
        }), cc.game.run(C, function() {
            cc.view.resizeWithBrowserSize(!0), cc.view.enableRetina(!0), cc.sys.isMobile && ("landscape" === s.orientation ? cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE) : "portrait" === s.orientation && cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT), cc.view.enableAutoFullScreen(cc.sys.browserType !== cc.sys.BROWSER_TYPE_BAIDU && cc.sys.browserType !== cc.sys.BROWSER_TYPE_WECHAT && cc.sys.browserType !== cc.sys.BROWSER_TYPE_MOBILE_QQ)), cc.sys.isBrowser && cc.sys.os === cc.sys.OS_ANDROID && (cc.macro.DOWNLOAD_MAX_CONCURRENT = 2), cc.AssetLibrary.init({
                    libraryPath: "res/import",
                    rawAssetsBase: "res/raw-",
                    rawAssets: s.rawAssets,
                    packedAssets: s.packedAssets,
                    md5AssetsMap: s.md5AssetsMap,
                    subpackages: s.subpackages
                }),
                function(r) {
                    var s = cc.director._getSceneUuid(r);
                    s ? (cc.director.emit(cc.Director.EVENT_BEFORE_SCENE_LOADING, r), cc.loader.load({
                        uuid: s.uuid,
                        type: "uuid"
                    }, function(s, e, c) {
                        var r = 100 * s / e * .9;
                    }, function(s, e) {
                        var c;
                        c = r;
                        cc.director.loadScene(c, function() {})
                    })) : onLoaded(new Error)
                }(s.launchScene)
        })
    }
    if (window.document) {
        var e = document.createElement("script");
        e.async = !0, e.src = window._CCSettings.debug ? "cocos2d-js.js" : "cocos2d-js-min.js";
        var c = function() {
            document.body.removeChild(e), e.removeEventListener("load", c, !1), "undefined" != typeof VConsole && (window.vConsole = new VConsole), s()
        };
        e.addEventListener("load", c, !1), document.body.appendChild(e)
    }
}();