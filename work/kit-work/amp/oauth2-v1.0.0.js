/**
 * Created by Happy on 2017/4/20.
 */
var H5Model = function () {
    var EMPTY_FUN = function () {
    };
    var $Cookie = function () {
        var domainPrefix = document.domain || "";
        return {
            set: function (name, value, domain, path, hour) {
                if (hour) {
                    var expire = new Date();
                    expire.setTime(expire.getTime() + 3600000 * hour);
                }
                document.cookie = name + "=" + value + "; " + (hour ? ("expires=" + expire.toGMTString() + "; ") : "") + (path ? ("path=" + path + "; ") : "path=/; ") + (domain ? ("domain=" + domain + ";") : ("domain=" + domainPrefix + ";"));
                return true;
            }, get: function (name) {
                var r = new RegExp("(?:^|;+|\\s+)" + name + "=([^;]*)"), m = document.cookie.match(r);
                return (!m ? "" : m[1]);
            }, del: function (name, domain, path) {
                document.cookie = name + "=; expires=Mon, 26 Jul 1997 05:00:00 GMT; " + (path ? ("path=" + path + "; ") : "path=/; ") + (domain ? ("domain=" + domain + ";") : ("domain=" + domainPrefix + ";"));
            }
        }
    }();
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
    var $JSON = function () {
        var
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, meta = {
                '\b': '\\b',
                '\t': '\\t',
                '\n': '\\n',
                '\f': '\\f',
                '\r': '\\r',
                '"': '\\"',
                '\\': '\\\\'
            };

        function quote(string) {
            escapable.lastIndex = 0;
            return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === 'string' ? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' : '"' + string + '"';
        }

        function stringify(obj) {
            var ret = [], v = "";
            for (var i in obj) {
                v = obj[i];
                v = v !== undefined ? v : "";
                switch (typeof v) {
                    case'string':
                        v = quote(v);
                        break;
                    case'object':
                        v = stringify(v);
                        break;
                    case'function':
                        continue;
                }
                ret.push('"' + i + '":' + v);
            }
            return '{' + ret + '}';
        }

        return {
            stringify: function () {
                return window.JSON && JSON.stringify ? JSON.stringify : stringify
            }(), parse: function (str) {
                str = str || "{}";
                var ret = {};
                try {
                    ret = (new Function("return (" + str + ")"))();
                } catch (e) {
                    $Console.error("JSON.parse => parse数据格式错误:" + str);
                }
                return ret;
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
    var $QueryString = function () {
        var re = /"/g;
        var tool = {
            genHttpParamString: function (o) {
                return this.commonDictionaryJoin(o, null, null, null, window.encodeURIComponent);
            }, splitHttpParamString: function (s) {
                return this.commonDictionarySplit(s, null, null, null, window.decodeURIComponent);
            }, commonDictionarySplit: function (s, esp, vq, eq, valueHandler) {
                var res = {}, l, ks, vs, t, vv;
                if (!s || typeof(s) != "string") {
                    return res;
                }
                if (typeof(esp) != 'string') {
                    esp = "&";
                }
                if (typeof(vq) != 'string') {
                    vq = "";
                }
                if (typeof(eq) != 'string') {
                    eq = "=";
                }
                l = s.split(esp);
                if (l && l.length) {
                    for (var i = 0, len = l.length; i < len; ++i) {
                        ks = l[i].split(eq);
                        if (ks.length > 1) {
                            t = ks.slice(1).join(eq);
                            vs = t.split(vq);
                            vv = vs.slice(vq.length, vs.length - vq.length).join(vq);
                            res[ks[0]] = (typeof valueHandler == 'function' ? valueHandler(vv) : vv);
                        } else {
                            ks[0] && (res[ks[0]] = true);
                        }
                    }
                }
                return res;
            }, commonDictionaryJoin: function (o, esp, vq, eq, valueHandler) {
                var res = [], t, ok;
                if (!o || typeof(o) != "object") {
                    return '';
                }
                if (typeof(o) == "string") {
                    return o;
                }
                if (typeof(esp) != 'string') {
                    esp = "&";
                }
                if (typeof(vq) != 'string') {
                    vq = "";
                }
                if (typeof(eq) != 'string') {
                    eq = "=";
                }
                for (var k in o) {
                    ok = (o[k] + "").replace(re, "\\\"");
                    res.push(k + eq + vq + (typeof valueHandler == 'function' ? valueHandler(ok) : ok) + vq);
                }
                return res.join(esp);
            }
        };
        return {
            stringify: function (obj) {
                return tool.genHttpParamString(obj);
            }, parse: function (str) {
                return tool.splitHttpParamString(str);
            }, getParameter: function (name) {
                var r = new RegExp("(\\?|#|&)" + name + "=([^&#]*)(&|#|$)"), m = location.href.match(r);
                return decodeURIComponent(!m ? "" : m[2]);
            }
        }
    }();
    return {
        Cookie: $Cookie,
        Console: $Console,
        getVersion: function () {
            return "1.0.1";
        },
        Toolkit: $Toolkit,
        JSON: $JSON,
        Object: $Object,
        QueryString: $QueryString,
    }
}();

(function (_h5Model) {
    var _ver = H5Model.getVersion();
    var EMPTY_FUN = function () {};
    var _origin = "http://sso.appskyx.com";		//提交的地址信息
    var config = {
        PMCrossPage: 'https://sso.appskyx.com/jsdkproxy/PMProxy.html',
        getCrossSolution: function () {
            var solution;
            if (window.postMessage) {
                solution = "PMProxy";
            } else {
                _h5Model.Console.error("未找到可用的跨域通信方案");
                solution = "EMPProxy";
            }
            _h5Model.Console.info("确定跨域代理策略：" + solution);
            return solution;
        }
    };
    var sequence = 1000;
    var Request = function (uri, paras, fmt, method) {
        this.uri = uri;
        this.paras = paras || {};
        this.fmt = fmt || "json";
        this.method = (method || "get").toLocaleLowerCase();
        this.successPool = [];
        this.errorPool = [];
        this.completePool = [];
        this.seq = sequence++;
    };
    Request.prototype.success = function (fun) {
        this.successPool.push(fun);
        return this;
    };
    Request.prototype.error = function (fun) {
        this.errorPool.push(fun);
        return this;
    };
    Request.prototype.complete = function (fun) {
        this.completePool.push(fun);
        return this;
    };
    Request.prototype.send = EMPTY_FUN;
    Request.prototype._onCallback = function (xhr, fmt, seq) {
        if(xhr.status == 200 || xhr.status == 204) {
            var responseText = xhr.responseText, response = new Response(responseText, xhr.status, fmt, seq);
            !~~response.code ? this.onSuccess(response) : this.onError(response);
        } else {
            this.onError(new Response("", xhr.status, fmt, seq));
        }
    };
    Request.prototype.onSuccess = function (response) {
        var pool = this.successPool;
        for (var i = 0; i < pool.length; i++) {
            pool[i](response);
        }
        this.onComplete(response);
    };
    Request.prototype.onError = function (response) {
        var pool = this.errorPool;
        for (var i = 0; i < pool.length; i++) {
            pool[i](response);
        }
        this.onComplete(response);
    };
    Request.prototype.onComplete = function (response) {
        var pool = this.completePool;
        for (var i = 0; i < pool.length; i++) {
            pool[i](response);
        }
    };
    var Response = function (respData, status, fmt, seq) {
        this.status = status || -1;
        this.fmt = fmt || "json";
        this.code = this.ret = -1;
        this.data = null;
        this.seq = seq || -1;
        this.parseData(respData);
        if (this.code && Response[this.code]) {
            Response[this.code](this.data, this.dataText);
        }
    };
    Response.prototype.parseData = function (rd) {
        this.dataText = rd;
        switch (this.fmt) {
            case "xml":

                break;
            case "json":
            default:
                this.data = _h5Model.JSON.parse(rd || '{}');
                this.code = this.ret = this.data.ret !== undefined ? ~~this.data.ret : this.data.data && this.data.data.ret !== undefined ? ~~this.data.data.ret : -1;
                break;
        }
    };
    Response.prototype.stringifyData = function () {
        return this.dataText;
    };
    Response[100013] = function (dt, dtTxt) {
        _h5Model.Login.signOut();
        _h5Model.Console.warn("api返回token失效");
    };
    var XHRRequest = _h5Model.Toolkit.extend(function () {
        Request.apply(this, arguments);
        this.xhr = XHRRequest.createInstance();
    }, Request);
    _h5Model.Object.extend(XHRRequest.prototype, {
        send: function () {
            var xhr = this.xhr, method = this.method, fmt = this.fmt, me = this, paras = _h5Model.QueryString.stringify(me.paras), uri = method == "post" ? this.uri : this.uri.indexOf("?") < 0 ? this.uri + '?' + paras : this.uri.replace(/[&?]*/g, "") + '&' + paras;
            xhr.open(method, uri, !!this.async);
            try {
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xhr.setRequestHeader("X-Requested-From", "_TC_QC_jsProxy_");
            } catch (e) {
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    me._onCallback(xhr, fmt, me.seq);
                }
            };
            xhr.send(paras || null);
        }
    });
    XHRRequest.createInstance = window.XMLHttpRequest ? function () {
        return new window.XMLHttpRequest();
    } : function () {
        return new window.ActiveXObject("Microsoft.XMLHTTP");
    };
    _h5Model.XHRRequest = XHRRequest;
    _h5Model.request = function (uri, paras, fmt, method) {
        return new XHRRequest(uri, paras, fmt, method);
    };
    var Proxy = function () {
        this.requests = [];
        this.invokes = [];
        this.readyPool = [];
        this.isReady = false;
        this.timeStamp = +new Date();
        this.init();
    };
    Proxy.prototype.init = EMPTY_FUN;
    Proxy.prototype.ready = function (fun) {
        this.readyPool.push(fun);
    };
    Proxy.prototype.onReady = function () {
        this.isReady = true;
        var pool = this.readyPool;
        for (var i = 0; i < pool.length; i++) {
            pool[i]();
        }
    };
    Proxy.prototype.send = function (req) {
        var pendingRequest;
        req && (this.requests.push(req));
        while (this.isReady && (pendingRequest = this.requests.shift())) {
            Proxy.pendingRequests.push(pendingRequest);
            _h5Model.Console.log("seq no :" + pendingRequest.seq + "请求发起" + "  ts -> " + (+new Date()));
            this._doSend(pendingRequest);
        }
    };
    Proxy.prototype._doSend = function (req) {
    };
    Proxy.prototype._preDispatch = function (_this, cstDt, seq, fmt) {
        var dt = cstDt.data || (cstDt.currentTarget && cstDt.currentTarget.data) || {};
        var cmd = dt.split("@@@");
        switch (cmd[0]) {
            case "invoke" :
                this.invoke(cmd[1]);
                break;
            default:
                this.dispatch(cmd[1] || cstDt, seq, fmt);
                break;
        }
    };
    Proxy.prototype.invoke = function (ivk) {
        var pendingInvoke;
        ivk && (this.invokes.push(ivk));
        while (this.isReady && (pendingInvoke = this.invokes.shift())) {
            this._doInvoke(pendingInvoke);
        }
    };
    Proxy.prototype._doInvoke = function (ivk) {
    };
    Proxy.prototype.dispose = function () {
        _proxy = null;
        this.onDispose();
    };
    Proxy.prototype.onDispose = function () {
    };
    Proxy.pendingRequests = [];
    Proxy.dispatchReceive = function (seq, resText, status, fmt) {
        var pendingRequests = Proxy.pendingRequests;
        for (var i = 0; i < pendingRequests.length; i++) {
            if(pendingRequests[i].seq == seq) {
                _h5Model.Console.log("seq no :" + seq + "响应收到" + "  ts -> " + (+new Date()));
                pendingRequests[i]._onCallback({status: status, responseText: resText}, fmt, seq);
                pendingRequests.splice(i, 1);
                return;
            }
        }

    };
    Proxy.invoke = function () {
        var _pendingPool = [];
        return function (cmdStr) {
            cmdStr && _pendingPool.push(cmdStr);
            if(!_proxy) {
                _h5Model.Console.info("Proxy未初始化，invoke入栈");
                Proxy.generateProxy();
                return;
            }
            var _crtIvk;
            while (_crtIvk = _pendingPool.shift()) {
                _proxy._doInvoke(_crtIvk);
            }
        }
    }();
    var _proxy;
    Proxy.generateProxy = function (_name) {
        var _solutions = {PMProxy: PMProxy, EMPProxy: EMPProxy};
        if (_name) {
            return new _solutions[_name]();
        }
        if (!_proxy) {
            _proxy = new _solutions[config.getCrossSolution()]();
        }
        return _proxy;
    };
    Proxy.getFunction = function (cmdP) {
        var cmd;
        cmdP = cmdP.split(".");
        for (var i = 0; i < cmdP.length; i++) {
            cmd = cmd ? cmd[cmdP[i]] : window[cmdP[i]];
        }
        return cmd;
    };
    var PMProxy = _h5Model.Toolkit.extend(function () {
        Proxy.apply(this, arguments);
    }, Proxy);
    _h5Model.Object.extend(PMProxy.prototype, {
        init: function () {
            var _me = this;
            _me._connFrame = document.createElement("iframe");
            _me._connFrame.style.cssText = "width:0px; height:0px; display:none; overflow:hidden;";
            var _frame_on_load = function () {
                _frame_on_load.fire();
                _frame_on_load.fire = function () {
                    _me.isReady = true;
                    _me.send();
                    _me.invoke();
                }
            };
            _frame_on_load.fire = function () {
                _h5Model.Console.info("Proxy代理创建成功，耗时" + (new Date() - _me.timeStamp));
            };
            _me._connFrame.onload = _frame_on_load;
            _me._connFrame.addEventListener && _me._connFrame.addEventListener("load", _frame_on_load, false);
            _me._connFrame.attachEvent && _me._connFrame.attachEvent("onload", _frame_on_load);
            _me._connFrame.src = "http://sso.appskyx.com/oauth2/PMProxy";
            document.body.appendChild(_me._connFrame);
            var _preDispatchHandler = function (crsDt) {
                //获取信息
                if (crsDt.origin && (crsDt.origin == _origin)) {
                    _me.isReady = true;
                    _me._preDispatch(_me, crsDt);
                }
            };
            window.addEventListener ? window.addEventListener("message", _preDispatchHandler, false) : window.attachEvent("onmessage", _preDispatchHandler);
        },
        _doSend : function (regObj) {
            var str = _h5Model.QueryString.stringify({
                uri: regObj.uri,
                paras: _h5Model.QueryString.stringify(regObj.paras),
                fmt: regObj.fmt,
                method: regObj.method
            });
            this._connFrame.contentWindow.postMessage(str, _origin);
        },
        dispatch: function (crsDt) {
            var dt = crsDt.data, obj = dt.split(":<.<<#:"), seq = obj[0], status = obj[1], fmt = obj[2], data = obj[3];
            _h5Model.Console.log("data:\t" + data);
            Proxy.dispatchReceive(seq, data, status, fmt);
        },
        _doInvoke: function (cmdStr) {
            _h5Model.Console.log("invoke:\t" + cmdStr);
            if(typeof cmdStr != "string") {
                return;
            }
            var pas = cmdStr.split("#"), cmdP = pas[0], args = pas[1] && pas[1].split(","), cmd;
            cmd = Proxy.getFunction(cmdP);
            cmd.apply(null, args);
        },
        onDispose: function () {
            this._connFrame.parentNode.removeChild(this._connFrame);
            this._connFrame = null;
        }
    });
    var EMPProxy = _h5Model.Toolkit.extend(function () {
        Proxy.apply(this, arguments);
    }, Proxy);
    _h5Model.Object.extend(EMPProxy.prototype, {
        init: function () {
            _h5Model.Console.info("init:" + arguments)
        }, _doSend: function (regObj) {
            _h5Model.Console.info("_doSend:" + arguments)
        }, dispatch: function (crsDt) {
            _h5Model.Console.info("dispatch:" + arguments)
        }
    });
    /**
     * redirectURI
     * @param opts
     * @private
     */
    _h5Model.api = function () {
        var _pendingPool = [];
        var bindTokenPara = function (req) {
            var TKObj = _h5Model.Login._getTokenKeys();
            req.paras.access_token = TKObj.accessToken;
            req.paras.format = req.fmt;
            return req;
        };
        var fun = function (api, paras, fmt, method) {
            _proxy = Proxy.generateProxy();
            var defAPICfg = getAPIConfig(api);
            api = defAPICfg.api || api;
            paras = paras || {};
            method = method || defAPICfg.method;
            var req = new Request(api, paras, fmt, method);
            setTimeout(function () {
                var aToken = _h5Model.Login._getTokenKeys();
                if(aToken.accessToken) {
                    _proxy.send(bindTokenPara(req));
                } else {
                    _pendingPool.push(req);
                    _h5Model.Console.warn("openid与accessToken丢失，调用请求入栈 : [" + api + "]，栈大小：" + _pendingPool.length);
                }
            }, 10);
            req.success(function () {

            }).error(function (response) {
                var resp = response || {};
            });
            return req;
        };
        fun._ready = function () {
            _h5Model.Console.info("init成功，开始触发api调用堆栈");
            var _crtReq;
            while (_crtReq = _pendingPool.shift()) {
                _proxy.send(bindTokenPara(_crtReq));
            }
        };
        return fun;
    }();
    var Login = function () {
        var _showPopup = function (opts) {
            // _init();
            _h5Model.init();
            var url = _getPopupUrl(opts || {});
           // return window.open(url);
            _mask();
            _createIframeBox(url);
           // document.location.href = url;
        };

        var baseid = new Date().getTime() + "_" + (Math.random() + "").replace(".", "");
        var iframeBox = 'iframeBox' + baseid;
        var maskid = 'mask' + baseid;
        var maskzIndex = 1;
        var iframeBoxzIndex = 2;
        var _mask = function () {
            var mask = document.createElement('div');
            mask.id = this.maskid;
            mask.style.cssText = "z-index:" + this.maskzIndex + ";width: 100%;height: 100%;top: 0px;left: 0px;background-color: rgba(0, 0, 0, 0);opacity: 0.6;cursor: wait;position: fixed;";
            document.getElementsByTagName('body').item(0).appendChild(mask);
        };

        var _createIframeBox = function (url) {
            var oDiv = document.createElement('div');
            oDiv.id = iframeBox;
            oDiv.style.cssText = "width:100%; height:100%;position:fixed;z-index:" + iframeBoxzIndex + ";overflow:hidden;left:0;top:0";
            var u = navigator.userAgent;
            if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
                oDiv.style["-webkito-overflow-scrolling"] = "touch";
                oDiv.style["overflow"] = "hidden";
            } else {
                oDiv.style["-webkit-overflow-scrolling"] = "touch";
                oDiv.style["overflow-y"] = "scroll";
            }
            document.getElementsByTagName('body').item(0).appendChild(oDiv);

            var oScript = document.createElement("iframe");
            oScript.style.cssText = "background-color:#fff;width:100%; height:100%;border:0";
            oScript.src = url;
            oDiv.appendChild(oScript);
        };

        var _removeElement = function(ele) {
            if (ele == null || ele == undefined || ele == "undefined")
                return;
            var parentElement = ele.parentNode;
            if (parentElement) {
                parentElement.removeChild(ele);
            }
        };

        var access_token;

        var _getPopupUrl = function (opts) {
            var redirectURI = opts['redirectURI'] || H5Model.getRedirectUri(), appId = opts['appId'] || H5Model.getAppId(), sp = opts['sp'] || H5Model.getSP();
            var paras = ['client_id=a5b1e8d7f247f86', 'app_id=' + appId, 'sp=' + sp], url = 'http://sso.appskyx.com/oauth2/login';
            if(redirectURI) {
                if (redirectURI.indexOf('://') > 0) {
                    redirectURI = encodeURIComponent(redirectURI);
                }
                paras.push('redirect_uri=' + redirectURI);
            } else {
                paras.push('redirect_uri=' + window.location.protocol + "//" + window.location.host + window.location.pathname);
                H5Model.Console.info("default redirect uri=>" + window.location.protocol + "//" + window.location.host + window.location.pathname);
            }
            url = url + "?" + paras.join("&");
            return url;
        };

        var _init = function (cfg) {
            // window.addEventListener ? window.addEventListener("message", function (e) {
            //     H5Model.Console.log(JSON.stringify(e.data));
            //     H5Model.Cookie.set('HTML5_V2_UDB', e.data.accessToken, document.domain, '/', 1);
            //     _removeElement(document.getElementById(iframeBox));
            //     _removeElement(document.getElementById(maskid));
            //     window.location.href = e.data.redirectURI;
            // }, false) : window.attachEvent("onmessage", function (e) {
            //     H5Model.Console.log(JSON.stringify(e.data));
            // });
            // var TKObj = _h5Model.Login._getTokenKeys();
            // if(!TKObj.accessToken) {
            //     Proxy.invoke();
            //     return;
            // }
            var _preDispatchHandler = function (crsDt) {
                //获取信息
                alert(crsDt.data);
            };
            window.addEventListener ? window.addEventListener("message", _preDispatchHandler, false) : window.attachEvent("onmessage", _preDispatchHandler);
        };
        
        var _signOut = function () {
            H5Model.api("signOut", {uid: _user_info.id}).success(function (req) {
                access_token = undefined;
                _user_info = null;
                var logoutFun;
                for (var i = 0; i < _logoutFuns.length; i++) {
                    logoutFun = _logoutFuns[i];
                    logoutFun();
                }
            }).error(function (req) {
                _h5Model.Console.error("Login => signOut 注销失败" + req);
            });
        };
        
        var _getInfo = function (cb) {
            //远程拿账户信息
            if(H5Model.Cookie.get("HTML5_V2_UDB")) {
                H5Model.api("getUserInfo").success(function (req) {
                    var result = req.data;
                    _user_info = result.data;
                    cb(_user_info)
                }).error(function (req) {
                    _h5Model.Console.error("Login => getUserInfo 获取数据失败" + req);
                });
            } else {
                cb()
            }
        };
        
        var _getACToken = function () {
            return access_token || function () {
                    access_token = _h5Model.Cookie.get('HTML5_V2_UDB');
                }();
        };

        var _loginFuns = [], _logoutFuns = [], _user_info;
        var retFun = function (opts, loginFun, logoutFun, __outCallFlag) {
            var args = arguments;
            !__outCallFlag && logoutFun !== null && _logoutFuns.push(function (__opts) {
                return function () {
                    var argPara = [args[0], null, null, 1];
                    (logoutFun || EMPTY_FUN)(__opts);
                    args.callee.apply(null, argPara);
                }
            }(opts));
            var _loginFun;
            var loginFunFire = function () {
                for (var i = 0; i < _loginFuns.length; i++) {
                    _loginFun = _loginFuns[i];
                    _loginFun(_user_info);
                }
            };
            loginFun !== null && _loginFuns.push(function (__opts) {
                return function (dt) {
                    (loginFun || EMPTY_FUN)(dt, __opts);
                }
            }(opts));
            if (!_user_info) {
                _getACToken();
                if(access_token) {
                    H5Model.api("getUserInfo").success(function (req) {
                        var result = req.data;
                        _user_info = result.data;
                        loginFunFire();
                    }).error(function (req) {
                        _h5Model.Console.error("Login => getMe 获取数据失败" + req);
                    });
                } else {
                    h5Loader();
                }
            } else {
                _user_info && loginFunFire();
            }
        };

        H5Model.Object.extend(retFun, {
            getInfo: _getInfo,
            signOut : function () {
                H5Model.Cookie.del('HTML5_V2_UDB', document.domain, '/');
                _signOut();
            },
            showPopup: _showPopup,
            _getTokenKeys: function () {
                _getACToken();
                return {accessToken: access_token};
            },
            check:function () {
                _getACToken();
                return !!access_token;
            },
            _onLoginBack: function (aToken, notRefresh) {
                //_removeElement(document.getElementById(iframeBox));
                //_removeElement(document.getElementById(maskid));
                if(aToken) {
                    H5Model.Cookie.set('HTML5_V2_UDB', aToken, document.domain, '/', 1);
                }
                _getACToken();
                H5Model.init();
                //刷新
                !notRefresh && H5Model.Login({}, null, null, 1);
            },
            reset: function () {
                _loginFuns = [];
                _logoutFuns = [];
            }
        });

        return retFun;
    };
    _h5Model.Login = Login();
    var appId = -1, tmpCfg = null, redirectURI = "", sp = -1;
    //var reg = /h5res\.hello\-game.cn\/oauth2\/js\/oauth2/i;
    var reg = /oauth2/i;
    var h5model_script;
    _h5Model.init = function (cfg) {
        cfg = cfg || tmpCfg || {};
        tmpCfg = cfg;
        h5Loader();
        var TKObj = _h5Model.Login._getTokenKeys();
        redirectURI = cfg.redirectURI;
        var appid = H5Model.getAppId();
        if(appid < 0) {
            H5Model.getAppId(arguments);
            return;
        }
        Proxy.invoke();
        if(!TKObj.accessToken) {
            
        }
    };
    function h5Loader() {
        var scripts = document.getElementsByTagName("script");
        for(var i = 0, script, l = scripts.length; i < l; i++) {
            script = scripts[i];
            var src = script.src;
            var mat = src.match(reg);
            if(mat) {
                h5model_script = script;
                break;
            }
        }
        var arr = [];
        for(var i = 0, att; i < h5model_script.attributes.length; i++) {
            att = h5model_script.attributes[i];
            if(att.name != "src" && att.specified) {
                arr.push([att.name.toLowerCase(), '"' + att.value + '"'].join("="));
            }
        }
        var attr;
        for (var i = arr.length; i--;) {
            attr = arr[i].split("=");
            if(attr[0] == "data-appid") {
                appId = attr[1].replace(/\"/g, "");
            }
            if(attr[0] == "data-redirecturi") {
                redirectURI = attr[1].replace(/\"/g, "");
            }
            if(attr[0] == "data-callback") {

            }
            if(attr[0] == "data-sp") {
                sp = attr[1].replace(/\"/g, "");
            }
        }
    }

    _h5Model.getAppId = function(ars) {
        if(ars) {

        }
        return appId;
    };
    _h5Model.getSP = function(ars) {
        if(ars) {

        }
        return sp;
    };
    _h5Model.getRedirectUri = function(ars) {
        if(ars) {

        }
        return redirectURI;
    };
    _h5Model.invoke = function () {
        var pxy = Proxy.generateProxy('PMProxy');
        pxy.invoke(arguments);
    };
    var getAPIConfig = function () {
    	//获取用户提交地址
        var API_DICT = {
            'getUserInfo' :{
                api: "http://sso.appskyx.com/oauth2/getUserInfo",
                method: "get"
            },
            'signOut' : {
                api: "http://sso.appskyx.com/oauth2/signOut",
                method: "get"
            }
        };
        return function (apiKey) {
            return API_DICT[apiKey] || {};
        }
    }();
    (function(){
        var token = H5Model.QueryString.getParameter("token");
        if(token == "" || token == undefined || token == null || !token){

        } else {
            H5Model.Login._onLoginBack(token);
        }
    })();
})(H5Model);
(function () {
    window.h5Model = H5Model;
})();


