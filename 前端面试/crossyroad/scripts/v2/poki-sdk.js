!
function (t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var i = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n),
            i.l = !0,
            i.exports
    }
    n.m = t,
        n.c = e,
        n.d = function (t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: r
            })
        },
        n.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
        },
        n.t = function (t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var i in t) n.d(r, i,
                    function (e) {
                        return t[e]
                    }.bind(null, i));
            return r
        },
        n.n = function (t) {
            var e = t && t.__esModule ?
                function () {
                    return t.
                    default
                } :
                function () {
                    return t
                };
            return n.d(e, "a", e),
                e
        },
        n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        },
        n.p = "",
        n(n.s = 78)
}([function (t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    },
    function (t, e, n) {
        var r = n(27)("wks"),
            i = n(28),
            o = n(0).Symbol,
            a = "function" == typeof o;
        (t.exports = function (t) {
            return r[t] || (r[t] = a && o[t] || (a ? o : i)("Symbol." + t))
        }).store = r
    },
    function (t, e) {
        var n = t.exports = {
            version: "2.6.7"
        };
        "number" == typeof __e && (__e = n)
    },
    function (t, e, n) {
        var r = n(7);
        t.exports = function (t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t
        }
    },
    function (t, e, n) {
        var r = n(11),
            i = n(23);
        t.exports = n(5) ?
            function (t, e, n) {
                return r.f(t, e, i(1, n))
            } : function (t, e, n) {
                return t[e] = n,
                    t
            }
    },
    function (t, e, n) {
        t.exports = !n(14)(function () {
            return 7 != Object.defineProperty({},
                "a", {
                    get: function () {
                        return 7
                    }
                }).a
        })
    },
    function (t, e, n) {
        var r = n(0),
            i = n(2),
            o = n(9),
            a = n(4),
            s = n(12),
            c = function (t, e, n) {
                var d, u, l, f = t & c.F,
                    p = t & c.G,
                    m = t & c.S,
                    g = t & c.P,
                    h = t & c.B,
                    A = t & c.W,
                    v = p ? i : i[e] || (i[e] = {}),
                    y = v.prototype,
                    b = p ? r : m ? r[e] : (r[e] || {}).prototype;
                for (d in p && (n = e), n)(u = !f && b && void 0 !== b[d]) && s(v, d) || (l = u ? b[d] : n[d], v[d] = p && "function" != typeof b[d] ? n[d] : h && u ? o(l, r) : A && b[d] == l ?
                    function (t) {
                        var e = function (e, n, r) {
                            if (this instanceof t) {
                                switch (arguments.length) {
                                    case 0:
                                        return new t;
                                    case 1:
                                        return new t(e);
                                    case 2:
                                        return new t(e, n)
                                }
                                return new t(e, n, r)
                            }
                            return t.apply(this, arguments)
                        };
                        return e.prototype = t.prototype,
                            e
                    }(l) : g && "function" == typeof l ? o(Function.call, l) : l, g && ((v.virtual || (v.virtual = {}))[d] = l, t & c.R && y && !y[d] && a(y, d, l)))
            };
        c.F = 1,
            c.G = 2,
            c.S = 4,
            c.P = 8,
            c.B = 16,
            c.W = 32,
            c.U = 64,
            c.R = 128,
            t.exports = c
    },
    function (t, e) {
        t.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    },
    function (t, e) {
        t.exports = {}
    },
    function (t, e, n) {
        var r = n(10);
        t.exports = function (t, e, n) {
            if (r(t), void 0 === e) return t;
            switch (n) {
                case 1:
                    return function (n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function (n, r) {
                        return t.call(e, n, r)
                    };
                case 3:
                    return function (n, r, i) {
                        return t.call(e, n, r, i)
                    }
            }
            return function () {
                return t.apply(e, arguments)
            }
        }
    },
    function (t, e) {
        t.exports = function (t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    },
    function (t, e, n) {
        var r = n(3),
            i = n(41),
            o = n(42),
            a = Object.defineProperty;
        e.f = n(5) ? Object.defineProperty : function (t, e, n) {
            if (r(t), e = o(e, !0), r(n), i) try {
                return a(t, e, n)
            } catch (t) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value),
                t
        }
    },
    function (t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function (t, e) {
            return n.call(t, e)
        }
    },
    function (t, e) {
        var n = {}.toString;
        t.exports = function (t) {
            return n.call(t).slice(8, -1)
        }
    },
    function (t, e) {
        t.exports = function (t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    },
    function (t, e, n) {
        var r = n(7),
            i = n(0).document,
            o = r(i) && r(i.createElement);
        t.exports = function (t) {
            return o ? i.createElement(t) : {}
        }
    },
    function (t, e, n) {
        var r = n(25),
            i = n(17);
        t.exports = function (t) {
            return r(i(t))
        }
    },
    function (t, e) {
        t.exports = function (t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    },
    function (t, e) {
        var n = Math.ceil,
            r = Math.floor;
        t.exports = function (t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
        }
    },
    function (t, e, n) {
        var r = n(27)("keys"),
            i = n(28);
        t.exports = function (t) {
            return r[t] || (r[t] = i(t))
        }
    },
    function (t, e) {
        t.exports = !0
    },
    function (t, e, n) {
        var r = n(11).f,
            i = n(12),
            o = n(1)("toStringTag");
        t.exports = function (t, e, n) {
            t && !i(t = n ? t : t.prototype, o) && r(t, o, {
                configurable: !0,
                value: e
            })
        }
    },
    function (t, e, n) {
        "use strict";
        var r = n(10);
        t.exports.f = function (t) {
            return new

            function (t) {
                var e, n;
                this.promise = new t(function (t, r) {
                        if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
                        e = t,
                            n = r
                    }),
                    this.resolve = r(e),
                    this.reject = r(n)
            }(t)
        }
    },
    function (t, e) {
        t.exports = function (t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }
    },
    function (t, e, n) {
        var r = n(44),
            i = n(29);
        t.exports = Object.keys ||
            function (t) {
                return r(t, i)
            }
    },
    function (t, e, n) {
        var r = n(13);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
            return "String" == r(t) ? t.split("") : Object(t)
        }
    },
    function (t, e, n) {
        var r = n(18),
            i = Math.min;
        t.exports = function (t) {
            return t > 0 ? i(r(t), 9007199254740991) : 0
        }
    },
    function (t, e, n) {
        var r = n(2),
            i = n(0),
            o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
        (t.exports = function (t, e) {
            return o[t] || (o[t] = void 0 !== e ? e : {})
        })("versions", []).push({
            version: r.version,
            mode: n(20) ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    },
    function (t, e) {
        var n = 0,
            r = Math.random();
        t.exports = function (t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
        }
    },
    function (t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    },
    function (t, e, n) {
        var r = n(17);
        t.exports = function (t) {
            return Object(r(t))
        }
    },
    function (t, e, n) {
        "use strict";
        var r = n(20),
            i = n(6),
            o = n(52),
            a = n(4),
            s = n(8),
            c = n(53),
            d = n(21),
            u = n(56),
            l = n(1)("iterator"),
            f = !([].keys && "next" in [].keys()),
            p = function () {
                return this
            };
        t.exports = function (t, e, n, m, g, h, A) {
            c(n, e, m);
            var v, y, b, w = function (t) {
                    if (!f && t in S) return S[t];
                    switch (t) {
                        case "keys":
                        case "values":
                            return function () {
                                return new n(this, t)
                            }
                    }
                    return function () {
                        return new n(this, t)
                    }
                },
                E = e + " Iterator",
                _ = "values" == g,
                T = !1,
                S = t.prototype,
                I = S[l] || S["@@iterator"] || g && S[g],
                k = I || w(g),
                O = g ? _ ? w("entries") : k : void 0,
                C = "Array" == e && S.entries || I;
            if (C && (b = u(C.call(new t))) !== Object.prototype && b.next && (d(b, E, !0), r || "function" == typeof b[l] || a(b, l, p)), _ && I && "values" !== I.name && (T = !0, k = function () {
                    return I.call(this)
                }), r && !A || !f && !T && S[l] || a(S, l, k), s[e] = k, s[E] = p, g)
                if (v = {
                        values: _ ? k : w("values"),
                        keys: h ? k : w("keys"),
                        entries: O
                    },
                    A)
                    for (y in v) y in S || o(S, y, v[y]);
                else i(i.P + i.F * (f || T), e, v);
            return v
        }
    },
    function (t, e, n) {
        var r = n(0).document;
        t.exports = r && r.documentElement
    },
    function (t, e, n) {
        var r = n(13),
            i = n(1)("toStringTag"),
            o = "Arguments" == r(function () {
                return arguments
            }());
        t.exports = function (t) {
            var e, n, a;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
                try {
                    return t[e]
                } catch (t) {}
            }(e = Object(t), i)) ? n : o ? r(e) : "Object" == (a = r(e)) && "function" == typeof e.callee ? "Arguments" : a
        }
    },
    function (t, e, n) {
        var r = n(3),
            i = n(10),
            o = n(1)("species");
        t.exports = function (t, e) {
            var n, a = r(t).constructor;
            return void 0 === a || void 0 == (n = r(a)[o]) ? e : i(n)
        }
    },
    function (t, e, n) {
        var r, i, o, a = n(9),
            s = n(67),
            c = n(32),
            d = n(15),
            u = n(0),
            l = u.process,
            f = u.setImmediate,
            p = u.clearImmediate,
            m = u.MessageChannel,
            g = u.Dispatch,
            h = 0,
            A = {},
            v = function () {
                var t = +this;
                if (A.hasOwnProperty(t)) {
                    var e = A[t];
                    delete A[t],
                        e()
                }
            },
            y = function (t) {
                v.call(t.data)
            };
        f && p || (f = function (t) {
                    for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
                    return A[++h] = function () {
                            s("function" == typeof t ? t : Function(t), e)
                        },
                        r(h),
                        h
                },
                p = function (t) {
                    delete A[t]
                },
                "process" == n(13)(l) ? r = function (t) {
                    l.nextTick(a(v, t, 1))
                } : g && g.now ? r = function (t) {
                    g.now(a(v, t, 1))
                } : m ? (o = (i = new m).port2, i.port1.onmessage = y, r = a(o.postMessage, o, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (r = function (t) {
                        u.postMessage(t + "", "*")
                    },
                    u.addEventListener("message", y, !1)) : r = "onreadystatechange" in d("script") ?
                function (t) {
                    c.appendChild(d("script")).onreadystatechange = function () {
                        c.removeChild(this),
                            v.call(t)
                    }
                } : function (t) {
                    setTimeout(a(v, t, 1), 0)
                }),
            t.exports = {
                set: f,
                clear: p
            }
    },
    function (t, e) {
        t.exports = function (t) {
            try {
                return {
                    e: !1,
                    v: t()
                }
            } catch (t) {
                return {
                    e: !0,
                    v: t
                }
            }
        }
    },
    function (t, e, n) {
        var r = n(3),
            i = n(7),
            o = n(22);
        t.exports = function (t, e) {
            if (r(t), i(e) && e.constructor === t) return e;
            var n = o.f(t);
            return (0, n.resolve)(e),
                n.promise
        }
    },
    function (t, e, n) {
        n(40),
            t.exports = n(2).Object.assign
    },
    function (t, e, n) {
        n(49),
            n(50),
            n(57),
            n(61),
            n(73),
            n(74),
            t.exports = n(2).Promise
    },
    function (t, e, n) {
        var r = n(6);
        r(r.S + r.F, "Object", {
            assign: n(43)
        })
    },
    function (t, e, n) {
        t.exports = !n(5) && !n(14)(function () {
            return 7 != Object.defineProperty(n(15)("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    },
    function (t, e, n) {
        var r = n(7);
        t.exports = function (t, e) {
            if (!r(t)) return t;
            var n, i;
            if (e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
            if ("function" == typeof (n = t.valueOf) && !r(i = n.call(t))) return i;
            if (!e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    function (t, e, n) {
        "use strict";
        var r = n(5),
            i = n(24),
            o = n(47),
            a = n(48),
            s = n(30),
            c = n(25),
            d = Object.assign;
        t.exports = !d || n(14)(function () {
                var t = {},
                    e = {},
                    n = Symbol(),
                    r = "abcdefghijklmnopqrst";
                return t[n] = 7,
                    r.split("").forEach(function (t) {
                        e[t] = t
                    }),
                    7 != d({},
                        t)[n] || Object.keys(d({},
                        e)).join("") != r
            }) ?
            function (t, e) {
                for (var n = s(t), d = arguments.length, u = 1, l = o.f, f = a.f; d > u;)
                    for (var p, m = c(arguments[u++]), g = l ? i(m).concat(l(m)) : i(m), h = g.length, A = 0; h > A;) p = g[A++],
                        r && !f.call(m, p) || (n[p] = m[p]);
                return n
            } : d
    },
    function (t, e, n) {
        var r = n(12),
            i = n(16),
            o = n(45)(!1),
            a = n(19)("IE_PROTO");
        t.exports = function (t, e) {
            var n, s = i(t),
                c = 0,
                d = [];
            for (n in s) n != a && r(s, n) && d.push(n);
            for (; e.length > c;) r(s, n = e[c++]) && (~o(d, n) || d.push(n));
            return d
        }
    },
    function (t, e, n) {
        var r = n(16),
            i = n(26),
            o = n(46);
        t.exports = function (t) {
            return function (e, n, a) {
                var s, c = r(e),
                    d = i(c.length),
                    u = o(a, d);
                if (t && n != n) {
                    for (; d > u;)
                        if ((s = c[u++]) != s) return !0
                } else
                    for (; d > u; u++)
                        if ((t || u in c) && c[u] === n) return t || u || 0;
                return !t && -1
            }
        }
    },
    function (t, e, n) {
        var r = n(18),
            i = Math.max,
            o = Math.min;
        t.exports = function (t, e) {
            return (t = r(t)) < 0 ? i(t + e, 0) : o(t, e)
        }
    },
    function (t, e) {
        e.f = Object.getOwnPropertySymbols
    },
    function (t, e) {
        e.f = {}.propertyIsEnumerable
    },
    function (t, e) {},
    function (t, e, n) {
        "use strict";
        var r = n(51)(!0);
        n(31)(String, "String",
            function (t) {
                this._t = String(t),
                    this._i = 0
            },
            function () {
                var t, e = this._t,
                    n = this._i;
                return n >= e.length ? {
                    value: void 0,
                    done: !0
                } : (t = r(e, n), this._i += t.length, {
                    value: t,
                    done: !1
                })
            })
    },
    function (t, e, n) {
        var r = n(18),
            i = n(17);
        t.exports = function (t) {
            return function (e, n) {
                var o, a, s = String(i(e)),
                    c = r(n),
                    d = s.length;
                return c < 0 || c >= d ? t ? "" : void 0 : (o = s.charCodeAt(c)) < 55296 || o > 56319 || c + 1 === d || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343 ? t ? s.charAt(c) : o : t ? s.slice(c, c + 2) : a - 56320 + (o - 55296 << 10) + 65536
            }
        }
    },
    function (t, e, n) {
        t.exports = n(4)
    },
    function (t, e, n) {
        "use strict";
        var r = n(54),
            i = n(23),
            o = n(21),
            a = {};
        n(4)(a, n(1)("iterator"),
                function () {
                    return this
                }),
            t.exports = function (t, e, n) {
                t.prototype = r(a, {
                        next: i(1, n)
                    }),
                    o(t, e + " Iterator")
            }
    },
    function (t, e, n) {
        var r = n(3),
            i = n(55),
            o = n(29),
            a = n(19)("IE_PROTO"),
            s = function () {},
            c = function () {
                var t, e = n(15)("iframe"),
                    r = o.length;
                for (e.style.display = "none", n(32).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), c = t.F; r--;) delete c.prototype[o[r]];
                return c()
            };
        t.exports = Object.create ||
            function (t, e) {
                var n;
                return null !== t ? (s.prototype = r(t), n = new s, s.prototype = null, n[a] = t) : n = c(),
                    void 0 === e ? n : i(n, e)
            }
    },
    function (t, e, n) {
        var r = n(11),
            i = n(3),
            o = n(24);
        t.exports = n(5) ? Object.defineProperties : function (t, e) {
            i(t);
            for (var n, a = o(e), s = a.length, c = 0; s > c;) r.f(t, n = a[c++], e[n]);
            return t
        }
    },
    function (t, e, n) {
        var r = n(12),
            i = n(30),
            o = n(19)("IE_PROTO"),
            a = Object.prototype;
        t.exports = Object.getPrototypeOf ||
            function (t) {
                return t = i(t),
                    r(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
            }
    },
    function (t, e, n) {
        n(58);
        for (var r = n(0), i = n(4), o = n(8), a = n(1)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), c = 0; c < s.length; c++) {
            var d = s[c],
                u = r[d],
                l = u && u.prototype;
            l && !l[a] && i(l, a, d),
                o[d] = o.Array
        }
    },
    function (t, e, n) {
        "use strict";
        var r = n(59),
            i = n(60),
            o = n(8),
            a = n(16);
        t.exports = n(31)(Array, "Array",
                function (t, e) {
                    this._t = a(t),
                        this._i = 0,
                        this._k = e
                },
                function () {
                    var t = this._t,
                        e = this._k,
                        n = this._i++;
                    return !t || n >= t.length ? (this._t = void 0, i(1)) : i(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
                },
                "values"),
            o.Arguments = o.Array,
            r("keys"),
            r("values"),
            r("entries")
    },
    function (t, e) {
        t.exports = function () {}
    },
    function (t, e) {
        t.exports = function (t, e) {
            return {
                value: e,
                done: !!t
            }
        }
    },
    function (t, e, n) {
        "use strict";
        var r, i, o, a, s = n(20),
            c = n(0),
            d = n(9),
            u = n(33),
            l = n(6),
            f = n(7),
            p = n(10),
            m = n(62),
            g = n(63),
            h = n(34),
            A = n(35).set,
            v = n(68)(),
            y = n(22),
            b = n(36),
            w = n(69),
            E = n(37),
            _ = c.TypeError,
            T = c.process,
            S = T && T.versions,
            I = S && S.v8 || "",
            k = c.Promise,
            O = "process" == u(T),
            C = function () {},
            x = i = y.f,
            D = !!
            function () {
                try {
                    var t = k.resolve(1),
                        e = (t.constructor = {})[n(1)("species")] = function (t) {
                            t(C, C)
                        };
                    return (O || "function" == typeof PromiseRejectionEvent) && t.then(C) instanceof e && 0 !== I.indexOf("6.6") && -1 === w.indexOf("Chrome/66")
                } catch (t) {}
            }(),
            P = function (t) {
                var e;
                return !(!f(t) || "function" != typeof (e = t.then)) && e
            },
            B = function (t, e) {
                if (!t._n) {
                    t._n = !0;
                    var n = t._c;
                    v(function () {
                        for (var r = t._v,
                                i = 1 == t._s,
                                o = 0,
                                a = function (e) {
                                    var n, o, a, s = i ? e.ok : e.fail,
                                        c = e.resolve,
                                        d = e.reject,
                                        u = e.domain;
                                    try {
                                        s ? (i || (2 == t._h && U(t), t._h = 1), !0 === s ? n = r : (u && u.enter(), n = s(r), u && (u.exit(), a = !0)), n === e.promise ? d(_("Promise-chain cycle")) : (o = P(n)) ? o.call(n, c, d) : c(n)) : d(r)
                                    } catch (t) {
                                        u && !a && u.exit(),
                                            d(t)
                                    }
                                }; n.length > o;) a(n[o++]);
                        t._c = [],
                            t._n = !1,
                            e && !t._h && R(t)
                    })
                }
            },
            R = function (t) {
                A.call(c,
                    function () {
                        var e, n, r, i = t._v,
                            o = j(t);
                        if (o && (e = b(function () {
                                O ? T.emit("unhandledRejection", i, t) : (n = c.onunhandledrejection) ? n({
                                    promise: t,
                                    reason: i
                                }) : (r = c.console) && r.error && r.error("Unhandled promise rejection", i)
                            }), t._h = O || j(t) ? 2 : 1), t._a = void 0, o && e.e) throw e.v
                    })
            },
            j = function (t) {
                return 1 !== t._h && 0 === (t._a || t._c).length
            },
            U = function (t) {
                A.call(c,
                    function () {
                        var e;
                        O ? T.emit("rejectionHandled", t) : (e = c.onrejectionhandled) && e({
                            promise: t,
                            reason: t._v
                        })
                    })
            },
            N = function (t) {
                var e = this;
                e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), B(e, !0))
            },
            z = function (t) {
                var e, n = this;
                if (!n._d) {
                    n._d = !0,
                        n = n._w || n;
                    try {
                        if (n === t) throw _("Promise can't be resolved itself");
                        (e = P(t)) ? v(function () {
                            var r = {
                                _w: n,
                                _d: !1
                            };
                            try {
                                e.call(t, d(z, r, 1), d(N, r, 1))
                            } catch (t) {
                                N.call(r, t)
                            }
                        }): (n._v = t, n._s = 1, B(n, !1))
                    } catch (t) {
                        N.call({
                                _w: n,
                                _d: !1
                            },
                            t)
                    }
                }
            };
        D || (k = function (t) {
                    m(this, k, "Promise", "_h"),
                        p(t),
                        r.call(this);
                    try {
                        t(d(z, this, 1), d(N, this, 1))
                    } catch (t) {
                        N.call(this, t)
                    }
                },
                (r = function (t) {
                    this._c = [],
                        this._a = void 0,
                        this._s = 0,
                        this._d = !1,
                        this._v = void 0,
                        this._h = 0,
                        this._n = !1
                }).prototype = n(70)(k.prototype, {
                    then: function (t, e) {
                        var n = x(h(this, k));
                        return n.ok = "function" != typeof t || t,
                            n.fail = "function" == typeof e && e,
                            n.domain = O ? T.domain : void 0,
                            this._c.push(n),
                            this._a && this._a.push(n),
                            this._s && B(this, !1),
                            n.promise
                    },
                    catch: function (t) {
                        return this.then(void 0, t)
                    }
                }), o = function () {
                    var t = new r;
                    this.promise = t,
                        this.resolve = d(z, t, 1),
                        this.reject = d(N, t, 1)
                },
                y.f = x = function (t) {
                    return t === k || t === a ? new o(t) : i(t)
                }),
            l(l.G + l.W + l.F * !D, {
                Promise: k
            }),
            n(21)(k, "Promise"),
            n(71)("Promise"),
            a = n(2).Promise,
            l(l.S + l.F * !D, "Promise", {
                reject: function (t) {
                    var e = x(this);
                    return (0, e.reject)(t),
                        e.promise
                }
            }),
            l(l.S + l.F * (s || !D), "Promise", {
                resolve: function (t) {
                    return E(s && this === a ? k : this, t)
                }
            }),
            l(l.S + l.F * !(D && n(72)(function (t) {
                k.all(t).
                catch(C)
            })), "Promise", {
                all: function (t) {
                    var e = this,
                        n = x(e),
                        r = n.resolve,
                        i = n.reject,
                        o = b(function () {
                            var n = [],
                                o = 0,
                                a = 1;
                            g(t, !1,
                                    function (t) {
                                        var s = o++,
                                            c = !1;
                                        n.push(void 0),
                                            a++,
                                            e.resolve(t).then(function (t) {
                                                    c || (c = !0, n[s] = t, --a || r(n))
                                                },
                                                i)
                                    }),
                                --a || r(n)
                        });
                    return o.e && i(o.v),
                        n.promise
                },
                race: function (t) {
                    var e = this,
                        n = x(e),
                        r = n.reject,
                        i = b(function () {
                            g(t, !1,
                                function (t) {
                                    e.resolve(t).then(n.resolve, r)
                                })
                        });
                    return i.e && r(i.v),
                        n.promise
                }
            })
    },
    function (t, e) {
        t.exports = function (t, e, n, r) {
            if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
            return t
        }
    },
    function (t, e, n) {
        var r = n(9),
            i = n(64),
            o = n(65),
            a = n(3),
            s = n(26),
            c = n(66),
            d = {},
            u = {};
        (e = t.exports = function (t, e, n, l, f) {
            var p, m, g, h, A = f ?
                function () {
                    return t
                } : c(t),
                v = r(n, l, e ? 2 : 1),
                y = 0;
            if ("function" != typeof A) throw TypeError(t + " is not iterable!");
            if (o(A)) {
                for (p = s(t.length); p > y; y++)
                    if ((h = e ? v(a(m = t[y])[0], m[1]) : v(t[y])) === d || h === u) return h
            } else
                for (g = A.call(t); !(m = g.next()).done;)
                    if ((h = i(g, v, m.value, e)) === d || h === u) return h
        }).BREAK = d,
            e.RETURN = u
    },
    function (t, e, n) {
        var r = n(3);
        t.exports = function (t, e, n, i) {
            try {
                return i ? e(r(n)[0], n[1]) : e(n)
            } catch (e) {
                var o = t.
                return;
                throw void 0 !== o && r(o.call(t)),
                    e
            }
        }
    },
    function (t, e, n) {
        var r = n(8),
            i = n(1)("iterator"),
            o = Array.prototype;
        t.exports = function (t) {
            return void 0 !== t && (r.Array === t || o[i] === t)
        }
    },
    function (t, e, n) {
        var r = n(33),
            i = n(1)("iterator"),
            o = n(8);
        t.exports = n(2).getIteratorMethod = function (t) {
            if (void 0 != t) return t[i] || t["@@iterator"] || o[r(t)]
        }
    },
    function (t, e) {
        t.exports = function (t, e, n) {
            var r = void 0 === n;
            switch (e.length) {
                case 0:
                    return r ? t() : t.call(n);
                case 1:
                    return r ? t(e[0]) : t.call(n, e[0]);
                case 2:
                    return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
                case 3:
                    return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
                case 4:
                    return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
            }
            return t.apply(n, e)
        }
    },
    function (t, e, n) {
        var r = n(0),
            i = n(35).set,
            o = r.MutationObserver || r.WebKitMutationObserver,
            a = r.process,
            s = r.Promise,
            c = "process" == n(13)(a);
        t.exports = function () {
            var t, e, n, d = function () {
                var r, i;
                for (c && (r = a.domain) && r.exit(); t;) {
                    i = t.fn,
                        t = t.next;
                    try {
                        i()
                    } catch (r) {
                        throw t ? n() : e = void 0,
                            r
                    }
                }
                e = void 0,
                    r && r.enter()
            };
            if (c) n = function () {
                a.nextTick(d)
            };
            else if (!o || r.navigator && r.navigator.standalone)
                if (s && s.resolve) {
                    var u = s.resolve(void 0);
                    n = function () {
                        u.then(d)
                    }
                } else n = function () {
                    i.call(r, d)
                };
            else {
                var l = !0,
                    f = document.createTextNode("");
                new o(d).observe(f, {
                        characterData: !0
                    }),
                    n = function () {
                        f.data = l = !l
                    }
            }
            return function (r) {
                var i = {
                    fn: r,
                    next: void 0
                };
                e && (e.next = i),
                    t || (t = i, n()),
                    e = i
            }
        }
    },
    function (t, e, n) {
        var r = n(0).navigator;
        t.exports = r && r.userAgent || ""
    },
    function (t, e, n) {
        var r = n(4);
        t.exports = function (t, e, n) {
            for (var i in e) n && t[i] ? t[i] = e[i] : r(t, i, e[i]);
            return t
        }
    },
    function (t, e, n) {
        "use strict";
        var r = n(0),
            i = n(2),
            o = n(11),
            a = n(5),
            s = n(1)("species");
        t.exports = function (t) {
            var e = "function" == typeof i[t] ? i[t] : r[t];
            a && e && !e[s] && o.f(e, s, {
                configurable: !0,
                get: function () {
                    return this
                }
            })
        }
    },
    function (t, e, n) {
        var r = n(1)("iterator"),
            i = !1;
        try {
            var o = [7][r]();
            o.
            return = function () {
                    i = !0
                },
                Array.from(o,
                    function () {
                        throw 2
                    })
        } catch (t) {}
        t.exports = function (t, e) {
            if (!e && !i) return !1;
            var n = !1;
            try {
                var o = [7],
                    a = o[r]();
                a.next = function () {
                        return {
                            done: n = !0
                        }
                    },
                    o[r] = function () {
                        return a
                    },
                    t(o)
            } catch (t) {}
            return n
        }
    },
    function (t, e, n) {
        "use strict";
        var r = n(6),
            i = n(2),
            o = n(0),
            a = n(34),
            s = n(37);
        r(r.P + r.R, "Promise", {
            finally: function (t) {
                var e = a(this, i.Promise || o.Promise),
                    n = "function" == typeof t;
                return this.then(n ?
                    function (n) {
                        return s(e, t()).then(function () {
                            return n
                        })
                    } : t, n ?
                    function (n) {
                        return s(e, t()).then(function () {
                            throw n
                        })
                    } : t)
            }
        })
    },
    function (t, e, n) {
        "use strict";
        var r = n(6),
            i = n(22),
            o = n(36);
        r(r.S, "Promise", {
            try: function (t) {
                var e = i.f(this),
                    n = o(t);
                return (n.e ? e.reject : e.resolve)(n.v),
                    e.promise
            }
        })
    },
    function (t, e) {
        !
        function (t) {
            "use strict";
            if (!t.fetch) {
                var e = {
                    searchParams: "URLSearchParams" in t,
                    iterable: "Symbol" in t && "iterator" in Symbol,
                    blob: "FileReader" in t && "Blob" in t &&
                        function () {
                            try {
                                return new Blob,
                                    !0
                            } catch (t) {
                                return !1
                            }
                        }(),
                    formData: "FormData" in t,
                    arrayBuffer: "ArrayBuffer" in t
                };
                if (e.arrayBuffer) var n = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                    r = function (t) {
                        return t && DataView.prototype.isPrototypeOf(t)
                    },
                    i = ArrayBuffer.isView ||
                    function (t) {
                        return t && n.indexOf(Object.prototype.toString.call(t)) > -1
                    };
                u.prototype.append = function (t, e) {
                        t = s(t),
                            e = c(e);
                        var n = this.map[t];
                        this.map[t] = n ? n + "," + e : e
                    },
                    u.prototype.delete = function (t) {
                        delete this.map[s(t)]
                    },
                    u.prototype.get = function (t) {
                        return t = s(t),
                            this.has(t) ? this.map[t] : null
                    },
                    u.prototype.has = function (t) {
                        return this.map.hasOwnProperty(s(t))
                    },
                    u.prototype.set = function (t, e) {
                        this.map[s(t)] = c(e)
                    },
                    u.prototype.forEach = function (t, e) {
                        for (var n in this.map) this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this)
                    },
                    u.prototype.keys = function () {
                        var t = [];
                        return this.forEach(function (e, n) {
                                t.push(n)
                            }),
                            d(t)
                    },
                    u.prototype.values = function () {
                        var t = [];
                        return this.forEach(function (e) {
                                t.push(e)
                            }),
                            d(t)
                    },
                    u.prototype.entries = function () {
                        var t = [];
                        return this.forEach(function (e, n) {
                                t.push([n, e])
                            }),
                            d(t)
                    },
                    e.iterable && (u.prototype[Symbol.iterator] = u.prototype.entries);
                var o = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
                h.prototype.clone = function () {
                        return new h(this, {
                            body: this._bodyInit
                        })
                    },
                    g.call(h.prototype),
                    g.call(v.prototype),
                    v.prototype.clone = function () {
                        return new v(this._bodyInit, {
                            status: this.status,
                            statusText: this.statusText,
                            headers: new u(this.headers),
                            url: this.url
                        })
                    },
                    v.error = function () {
                        var t = new v(null, {
                            status: 0,
                            statusText: ""
                        });
                        return t.type = "error",
                            t
                    };
                var a = [301, 302, 303, 307, 308];
                v.redirect = function (t, e) {
                        if (-1 === a.indexOf(e)) throw new RangeError("Invalid status code");
                        return new v(null, {
                            status: e,
                            headers: {
                                location: t
                            }
                        })
                    },
                    t.Headers = u,
                    t.Request = h,
                    t.Response = v,
                    t.fetch = function (t, n) {
                        return new Promise(function (r, i) {
                            var o = new h(t, n),
                                a = new XMLHttpRequest;
                            a.onload = function () {
                                    var t, e, n = {
                                        status: a.status,
                                        statusText: a.statusText,
                                        headers: (t = a.getAllResponseHeaders() || "", e = new u, t.split(/\r?\n/).forEach(function (t) {
                                            var n = t.split(":"),
                                                r = n.shift().trim();
                                            if (r) {
                                                var i = n.join(":").trim();
                                                e.append(r, i)
                                            }
                                        }), e)
                                    };
                                    n.url = "responseURL" in a ? a.responseURL : n.headers.get("X-Request-URL");
                                    var i = "response" in a ? a.response : a.responseText;
                                    r(new v(i, n))
                                },
                                a.onerror = function () {
                                    i(new TypeError("Network request failed"))
                                },
                                a.ontimeout = function () {
                                    i(new TypeError("Network request failed"))
                                },
                                a.open(o.method, o.url, !0),
                                "include" === o.credentials && (a.withCredentials = !0),
                                "responseType" in a && e.blob && (a.responseType = "blob"),
                                o.headers.forEach(function (t, e) {
                                    a.setRequestHeader(e, t)
                                }),
                                a.send(void 0 === o._bodyInit ? null : o._bodyInit)
                        })
                    },
                    t.fetch.polyfill = !0
            }

            function s(t) {
                if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
                return t.toLowerCase()
            }

            function c(t) {
                return "string" != typeof t && (t = String(t)),
                    t
            }

            function d(t) {
                var n = {
                    next: function () {
                        var e = t.shift();
                        return {
                            done: void 0 === e,
                            value: e
                        }
                    }
                };
                return e.iterable && (n[Symbol.iterator] = function () {
                        return n
                    }),
                    n
            }

            function u(t) {
                this.map = {},
                    t instanceof u ? t.forEach(function (t, e) {
                            this.append(e, t)
                        },
                        this) : Array.isArray(t) ? t.forEach(function (t) {
                            this.append(t[0], t[1])
                        },
                        this) : t && Object.getOwnPropertyNames(t).forEach(function (e) {
                            this.append(e, t[e])
                        },
                        this)
            }

            function l(t) {
                if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
                t.bodyUsed = !0
            }

            function f(t) {
                return new Promise(function (e, n) {
                    t.onload = function () {
                            e(t.result)
                        },
                        t.onerror = function () {
                            n(t.error)
                        }
                })
            }

            function p(t) {
                var e = new FileReader,
                    n = f(e);
                return e.readAsArrayBuffer(t),
                    n
            }

            function m(t) {
                if (t.slice) return t.slice(0);
                var e = new Uint8Array(t.byteLength);
                return e.set(new Uint8Array(t)),
                    e.buffer
            }

            function g() {
                return this.bodyUsed = !1,
                    this._initBody = function (t) {
                        if (this._bodyInit = t, t)
                            if ("string" == typeof t) this._bodyText = t;
                            else if (e.blob && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
                        else if (e.formData && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
                        else if (e.searchParams && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString();
                        else if (e.arrayBuffer && e.blob && r(t)) this._bodyArrayBuffer = m(t.buffer),
                            this._bodyInit = new Blob([this._bodyArrayBuffer]);
                        else {
                            if (!e.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(t) && !i(t)) throw new Error("unsupported BodyInit type");
                            this._bodyArrayBuffer = m(t)
                        } else this._bodyText = "";
                        this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : e.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    },
                    e.blob && (this.blob = function () {
                            var t = l(this);
                            if (t) return t;
                            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                            return Promise.resolve(new Blob([this._bodyText]))
                        },
                        this.arrayBuffer = function () {
                            return this._bodyArrayBuffer ? l(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(p)
                        }),
                    this.text = function () {
                        var t, e, n, r = l(this);
                        if (r) return r;
                        if (this._bodyBlob) return t = this._bodyBlob,
                            e = new FileReader,
                            n = f(e),
                            e.readAsText(t),
                            n;
                        if (this._bodyArrayBuffer) return Promise.resolve(function (t) {
                            for (var e = new Uint8Array(t), n = new Array(e.length), r = 0; r < e.length; r++) n[r] = String.fromCharCode(e[r]);
                            return n.join("")
                        }(this._bodyArrayBuffer));
                        if (this._bodyFormData) throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText)
                    },
                    e.formData && (this.formData = function () {
                        return this.text().then(A)
                    }),
                    this.json = function () {
                        return this.text().then(JSON.parse)
                    },
                    this
            }

            function h(t, e) {
                var n, r, i = (e = e || {}).body;
                if (t instanceof h) {
                    if (t.bodyUsed) throw new TypeError("Already read");
                    this.url = t.url,
                        this.credentials = t.credentials,
                        e.headers || (this.headers = new u(t.headers)),
                        this.method = t.method,
                        this.mode = t.mode,
                        i || null == t._bodyInit || (i = t._bodyInit, t.bodyUsed = !0)
                } else this.url = String(t);
                if (this.credentials = e.credentials || this.credentials || "omit", !e.headers && this.headers || (this.headers = new u(e.headers)), this.method = (n = e.method || this.method || "GET", r = n.toUpperCase(), o.indexOf(r) > -1 ? r : n), this.mode = e.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && i) throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(i)
            }

            function A(t) {
                var e = new FormData;
                return t.trim().split("&").forEach(function (t) {
                        if (t) {
                            var n = t.split("="),
                                r = n.shift().replace(/\+/g, " "),
                                i = n.join("=").replace(/\+/g, " ");
                            e.append(decodeURIComponent(r), decodeURIComponent(i))
                        }
                    }),
                    e
            }

            function v(t, e) {
                e || (e = {}),
                    this.type = "default",
                    this.status = "status" in e ? e.status : 200,
                    this.ok = this.status >= 200 && this.status < 300,
                    this.statusText = "statusText" in e ? e.statusText : "OK",
                    this.headers = new u(e.headers),
                    this.url = e.url || "",
                    this._initBody(t)
            }
        }("undefined" != typeof self ? self : this)
    },
    function (t, e) {
        /*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
        "document" in window.self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) ||
            function (t) {
                "use strict";
                if ("Element" in t) {
                    var e = t.Element.prototype,
                        n = Object,
                        r = String.prototype.trim ||
                        function () {
                            return this.replace(/^\s+|\s+$/g, "")
                        },
                        i = Array.prototype.indexOf ||
                        function (t) {
                            for (var e = 0,
                                    n = this.length; e < n; e++)
                                if (e in this && this[e] === t) return e;
                            return -1
                        },
                        o = function (t, e) {
                            this.name = t,
                                this.code = DOMException[t],
                                this.message = e
                        },
                        a = function (t, e) {
                            if ("" === e) throw new o("SYNTAX_ERR", "An invalid or illegal string was specified");
                            if (/\s/.test(e)) throw new o("INVALID_CHARACTER_ERR", "String contains an invalid character");
                            return i.call(t, e)
                        },
                        s = function (t) {
                            for (var e = r.call(t.getAttribute("class") || ""), n = e ? e.split(/\s+/) : [], i = 0, o = n.length; i < o; i++) this.push(n[i]);
                            this._updateClassName = function () {
                                t.setAttribute("class", this.toString())
                            }
                        },
                        c = s.prototype = [],
                        d = function () {
                            return new s(this)
                        };
                    if (o.prototype = Error.prototype, c.item = function (t) {
                            return this[t] || null
                        },
                        c.contains = function (t) {
                            return -1 !== a(this, t += "")
                        },
                        c.add = function () {
                            var t, e = arguments,
                                n = 0,
                                r = e.length,
                                i = !1;
                            do {
                                t = e[n] + "", -1 === a(this, t) && (this.push(t), i = !0)
                            } while (++n < r);
                            i && this._updateClassName()
                        },
                        c.remove = function () {
                            var t, e, n = arguments,
                                r = 0,
                                i = n.length,
                                o = !1;
                            do {
                                for (t = n[r] + "", e = a(this, t); - 1 !== e;) this.splice(e, 1), o = !0, e = a(this, t)
                            } while (++r < i);
                            o && this._updateClassName()
                        },
                        c.toggle = function (t, e) {
                            t += "";
                            var n = this.contains(t),
                                r = n ? !0 !== e && "remove" : !1 !== e && "add";
                            return r && this[r](t),
                                !0 === e || !1 === e ? e : !n
                        },
                        c.toString = function () {
                            return this.join(" ")
                        },
                        n.defineProperty) {
                        var u = {
                            get: d,
                            enumerable: !0,
                            configurable: !0
                        };
                        try {
                            n.defineProperty(e, "classList", u)
                        } catch (t) {
                            void 0 !== t.number && -2146823252 !== t.number || (u.enumerable = !1, n.defineProperty(e, "classList", u))
                        }
                    } else n.prototype.__defineGetter__ && e.__defineGetter__("classList", d)
                }
            }(window.self),
            function () {
                "use strict";
                var t = document.createElement("_");
                if (t.classList.add("c1", "c2"), !t.classList.contains("c2")) {
                    var e = function (t) {
                        var e = DOMTokenList.prototype[t];
                        DOMTokenList.prototype[t] = function (t) {
                            var n, r = arguments.length;
                            for (n = 0; n < r; n++) t = arguments[n],
                                e.call(this, t)
                        }
                    };
                    e("add"),
                        e("remove")
                }
                if (t.classList.toggle("c3", !1), t.classList.contains("c3")) {
                    var n = DOMTokenList.prototype.toggle;
                    DOMTokenList.prototype.toggle = function (t, e) {
                        return 1 in arguments && !this.contains(t) == !e ? e : n.call(this, t)
                    }
                }
                t = null
            }())
    },
    function (module, exports) {
        !
        function (t) {
            var e = window.pbjsChunk;
            window.pbjsChunk = function (n, o, a) {
                for (var s, c, d, u = 0,
                        l = []; u < n.length; u++) c = n[u],
                    r[c] && l.push(r[c][0]),
                    r[c] = 0;
                for (s in o) Object.prototype.hasOwnProperty.call(o, s) && (t[s] = o[s]);
                for (e && e(n, o, a); l.length;) l.shift()();
                if (a)
                    for (u = 0; u < a.length; u++) d = i(i.s = a[u]);
                return d
            };
            var n = {},
                r = {
                    254: 0
                };

            function i(e) {
                if (n[e]) return n[e].exports;
                var r = n[e] = {
                    i: e,
                    l: !1,
                    exports: {}
                };
                return t[e].call(r.exports, r, r.exports, i),
                    r.l = !0,
                    r.exports
            }
            i.m = t,
                i.c = n,
                i.d = function (t, e, n) {
                    i.o(t, e) || Object.defineProperty(t, e, {
                        configurable: !1,
                        enumerable: !0,
                        get: n
                    })
                },
                i.n = function (t) {
                    var e = t && t.__esModule ?
                        function () {
                            return t.
                            default
                        } :
                        function () {
                            return t
                        };
                    return i.d(e, "a", e),
                        e
                },
                i.o = function (t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                },
                i.p = "",
                i.oe = function (t) {
                    throw console.error(t),
                        t
                },
                i(i.s = 642)
        }({
            0: function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                    n.d(e, "internal",
                        function () {
                            return D
                        }),
                    n.d(e, "bind",
                        function () {
                            return B
                        }),
                    e.replaceTokenInString = function (t, e, n) {
                        return rt(e,
                                function (e, r) {
                                    e = void 0 === e ? "" : e;
                                    var i = n + r.toUpperCase() + n,
                                        o = new RegExp(i, "g");
                                    t = t.replace(o, e)
                                }),
                            t
                    },
                    e.getUniqueIdentifierStr = j,
                    e.generateUUID = function t(e) {
                        return e ? (e ^ (window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random()) >> e / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, t)
                    },
                    e.getBidIdParameter = function (t, e) {
                        return e && e[t] ? e[t] : ""
                    },
                    e.tryAppendQueryString = function (t, e, n) {
                        return n ? t + (e + "=") + encodeURIComponent(n) + "&" : t
                    },
                    e.parseQueryStringParameters = function (t) {
                        var e = "";
                        for (var n in t) t.hasOwnProperty(n) && (e += n + "=" + encodeURIComponent(t[n]) + "&");
                        return e
                    },
                    e.transformAdServerTargetingObj = function (t) {
                        return t && 0 < Object.getOwnPropertyNames(t).length ? pt(t).map(function (e) {
                            return "".concat(e, "=").concat(encodeURIComponent(mt(t, e)))
                        }).join("&") : ""
                    },
                    e.getAdUnitSizes = function (t) {
                        if (t) {
                            var e = [];
                            if (t.mediaTypes && t.mediaTypes.banner && Array.isArray(t.mediaTypes.banner.sizes)) {
                                var n = t.mediaTypes.banner.sizes;
                                Array.isArray(n[0]) ? e = n : e.push(n)
                            } else Array.isArray(t.sizes) && (Array.isArray(t.sizes[0]) ? e = t.sizes : e.push(t.sizes));
                            return e
                        }
                    },
                    e.parseSizesInput = function (t) {
                        var e = [];
                        if ("string" == typeof t) {
                            var n = t.split(","),
                                r = /^(\d)+x(\d)+$/i;
                            if (n)
                                for (var i in n) ot(n, i) && n[i].match(r) && e.push(n[i])
                        } else if ("object" === h(t)) {
                            var o = t.length;
                            if (0 < o)
                                if (2 === o && "number" == typeof t[0] && "number" == typeof t[1]) e.push(U(t));
                                else
                                    for (var a = 0; a < o; a++) e.push(U(t[a]))
                        }
                        return e
                    },
                    e.parseGPTSingleSizeArray = U,
                    e.parseGPTSingleSizeArrayToRtbSize = function (t) {
                        if (N(t)) return {
                            w: t[0],
                            h: t[1]
                        }
                    },
                    e.getTopWindowLocation = z,
                    e.getTopFrameReferrer = M,
                    e.getAncestorOrigins = L,
                    e.getWindowTop = q,
                    e.getWindowSelf = V,
                    e.getWindowLocation = G,
                    e.getTopWindowUrl = function () {
                        var t;
                        try {
                            t = D.getTopWindowLocation().href
                        } catch (e) {
                            t = ""
                        }
                        return t
                    },
                    e.getTopWindowReferrer = function () {
                        try {
                            return window.top.document.referrer
                        } catch (t) {
                            return document.referrer
                        }
                    },
                    e.logMessage = W,
                    e.logInfo = F,
                    e.logWarn = H,
                    e.logError = K,
                    e.hasConsoleLogger = function () {
                        return k
                    },
                    e.debugTurnedOn = Z,
                    e.createInvisibleIframe = function () {
                        var t = document.createElement("iframe");
                        return t.id = j(),
                            t.height = 0,
                            t.width = 0,
                            t.border = "0px",
                            t.hspace = "0",
                            t.vspace = "0",
                            t.marginWidth = "0",
                            t.marginHeight = "0",
                            t.style.border = "0",
                            t.scrolling = "no",
                            t.frameBorder = "0",
                            t.src = "about:blank",
                            t.style.display = "none",
                            t
                    },
                    e.getParameterByName = function (t) {
                        var e = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(window.location.search);
                        return null !== e ? decodeURIComponent(e[1].replace(/\+/g, " ")) : ""
                    },
                    e.hasValidBidRequest = function (t, e, n) {
                        var r = !1;

                        function i(t, n) {
                            n === e[o] && (r = !0)
                        }
                        for (var o = 0; o < e.length; o++)
                            if (r = !1, rt(t, i), !r) return K("Params are missing for bid request. One of these required paramaters are missing: " + e, n),
                                !1;
                        return !0
                    },
                    e.addEventHandler = function (t, e, n) {
                        t.addEventListener ? t.addEventListener(e, n, !0) : t.attachEvent && t.attachEvent("on" + e, n)
                    },
                    e.isA = Q,
                    e.isFn = X,
                    e.isStr = J,
                    e.isArray = $,
                    e.isNumber = tt,
                    e.isPlainObject = et,
                    e.isBoolean = function (t) {
                        return Q(t, T)
                    },
                    e.isEmpty = nt,
                    e.isEmptyStr = function (t) {
                        return J(t) && (!t || 0 === t.length)
                    },
                    e._each = rt,
                    e.contains = function (t, e) {
                        if (nt(t)) return !1;
                        if (X(t.indexOf)) return -1 !== t.indexOf(e);
                        for (var n = t.length; n--;)
                            if (t[n] === e) return !0;
                        return !1
                    },
                    n.d(e, "indexOf",
                        function () {
                            return it
                        }),
                    e._map = function (t, e) {
                        if (nt(t)) return [];
                        if (X(t.map)) return t.map(e);
                        var n = [];
                        return rt(t,
                                function (r, i) {
                                    n.push(e(r, i, t))
                                }),
                            n
                    },
                    e.insertElement = at,
                    e.triggerPixel = st,
                    e.callBurl = function (t) {
                        var e = t.source,
                            n = t.burl;
                        e === v.S2S.SRC && n && D.triggerPixel(n)
                    },
                    e.insertHtmlIntoIframe = function (t) {
                        if (t) {
                            var e = document.createElement("iframe");
                            e.id = j(),
                                e.width = 0,
                                e.height = 0,
                                e.hspace = "0",
                                e.vspace = "0",
                                e.marginWidth = "0",
                                e.marginHeight = "0",
                                e.style.display = "none",
                                e.style.height = "0px",
                                e.style.width = "0px",
                                e.scrolling = "no",
                                e.frameBorder = "0",
                                e.allowtransparency = "true",
                                D.insertElement(e, document, "body"),
                                e.contentWindow.document.open(),
                                e.contentWindow.document.write(t),
                                e.contentWindow.document.close()
                        }
                    },
                    e.insertUserSyncIframe = ct,
                    e.createTrackPixelHtml = function (t) {
                        return t ? '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">' + '<img src="' + encodeURI(t) + '"></div>' : ""
                    },
                    e.createTrackPixelIframeHtml = dt,
                    e.getIframeDocument = function (t) {
                        if (t) {
                            var e;
                            try {
                                e = t.contentWindow ? t.contentWindow.document : t.contentDocument.document ? t.contentDocument.document : t.contentDocument
                            } catch (t) {
                                D.logError("Cannot get iframe document", t)
                            }
                            return e
                        }
                    },
                    e.getValueString = ut,
                    e.uniques = lt,
                    e.flatten = ft,
                    e.getBidRequest = function (t, e) {
                        return t ? (e.some(function (e) {
                            var r = s()(e.bids,
                                function (e) {
                                    return ["bidId", "adId", "bid_id"].some(function (n) {
                                        return e[n] === t
                                    })
                                });
                            return r && (n = r),
                                r
                        }), n) : void 0;
                        var n
                    }, e.getKeys = pt,
                    e.getValue = mt,
                    e.getKeyByValue = function (t, e) {
                        for (var n in t)
                            if (t.hasOwnProperty(n) && t[n] === e) return n
                    },
                    e.getBidderCodes = function () {
                        return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : pbjs.adUnits).map(function (t) {
                            return t.bids.map(function (t) {
                                return t.bidder
                            }).reduce(ft, [])
                        }).reduce(ft).filter(lt)
                    },
                    e.isGptPubadsDefined = function () {
                        if (window.googletag && X(window.googletag.pubads) && X(window.googletag.pubads().getSlots)) return !0
                    },
                    n.d(e, "getHighestCpm",
                        function () {
                            return gt
                        }),
                    n.d(e, "getOldestHighestCpmBid",
                        function () {
                            return ht
                        }),
                    n.d(e, "getLatestHighestCpmBid",
                        function () {
                            return At
                        }),
                    e.shuffle = function (t) {
                        for (var e = t.length; 0 < e;) {
                            var n = Math.floor(Math.random() * e),
                                r = t[--e];
                            t[e] = t[n],
                                t[n] = r
                        }
                        return t
                    },
                    e.adUnitsFilter = function (t, e) {
                        return d()(t, e && e.adUnitCode)
                    },
                    e.isSrcdocSupported = function (t) {
                        return t.defaultView && t.defaultView.frameElement && "srcdoc" in t.defaultView.frameElement && !/firefox/i.test(navigator.userAgent)
                    },
                    e.deepClone = yt,
                    e.inIframe = bt,
                    e.isSafariBrowser = function () {
                        return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
                    },
                    e.replaceAuctionPrice = function (t, e) {
                        if (t) return t.replace(/\$\{AUCTION_PRICE\}/g, e)
                    },
                    e.timestamp = function () {
                        return (new Date).getTime()
                    },
                    e.checkCookieSupport = wt,
                    e.cookiesAreEnabled = function () {
                        return !!D.checkCookieSupport() || (window.document.cookie = "prebid.cookieTest", -1 != window.document.cookie.indexOf("prebid.cookieTest"))
                    },
                    e.getCookie = function (t) {
                        var e = window.document.cookie.match("(^|;)\\s*" + t + "\\s*=\\s*([^;]*)\\s*(;|$)");
                        return e ? decodeURIComponent(e[2]) : null
                    },
                    e.setCookie = function (t, e, n) {
                        document.cookie = "".concat(t, "=").concat(encodeURIComponent(e)).concat("" !== n ? "; expires=".concat(n) : "", "; path=/")
                    },
                    e.localStorageIsEnabled = function () {
                        try {
                            return localStorage.setItem("prebid.cookieTest", "1"),
                                "1" === localStorage.getItem("prebid.cookieTest")
                        } catch (t) {
                            return !1
                        }
                    },
                    e.delayExecution = function (t, e) {
                        if (e < 1) throw new Error("numRequiredCalls must be a positive number. Got ".concat(e));
                        var n = 0;
                        return function () {
                            ++n === e && t.apply(null, arguments)
                        }
                    },
                    e.groupBy = function (t, e) {
                        return t.reduce(function (t, n) {
                            return (t[n[e]] = t[n[e]] || []).push(n),
                                t
                        }, {})
                    },
                    e.createContentToExecuteExtScriptInFriendlyFrame = function (t) {
                        return t ? '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;<\/script></head><body>\x3c!--PRE_SCRIPT_TAG_MACRO--\x3e<script src="'.concat(t, '"><\/script>\x3c!--POST_SCRIPT_TAG_MACRO--\x3e</body></html>') : ""
                    },
                    e.getDefinedParams = function (t, e) {
                        return e.filter(function (e) {
                            return t[e]
                        }).reduce(function (e, n) {
                            return g(e,
                                function (t, e, n) {
                                    return e in t ? Object.defineProperty(t, e, {
                                            value: n,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        }) : t[e] = n,
                                        t
                                }({},
                                    n, t[n]))
                        }, {})
                    },
                    e.isValidMediaTypes = function (t) {
                        var e = ["banner", "native", "video"];
                        return !!Object.keys(t).every(function (t) {
                            return d()(e, t)
                        }) && (!t.video || !t.video.context || d()(["instream", "outstream", "adpod"], t.video.context))
                    },
                    e.getBidderRequest = function (t, e, n) {
                        return s()(t,
                            function (t) {
                                return 0 < t.bids.filter(function (t) {
                                    return t.bidder === e && t.adUnitCode === n
                                }).length
                            }) || {
                            start: null,
                            auctionId: null
                        }
                    },
                    e.getUserConfiguredParams = function (t, e, n) {
                        return t.filter(function (t) {
                            return t.code === e
                        }).map(function (t) {
                            return t.bids
                        }).reduce(ft, []).filter(function (t) {
                            return t.bidder === n
                        }).map(function (t) {
                            return t.params || {}
                        })
                    },
                    e.getOrigin = function () {
                        return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")
                    },
                    e.getDNT = function () {
                        return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack
                    },
                    e.isAdUnitCodeMatchingSlot = function (t) {
                        return function (e) {
                            return Et(t, e)
                        }
                    },
                    e.isSlotMatchingAdUnitCode = function (t) {
                        return function (e) {
                            return Et(e, t)
                        }
                    },
                    e.unsupportedBidderMessage = function (t, e) {
                        var n = Object.keys(t.mediaTypes || {
                            banner: "banner"
                        }).join(", ");
                        return "\n    ".concat(t.code, " is a ").concat(n, " ad unit\n    containing bidders that don't support ").concat(n, ": ").concat(e, ".\n    This bidder won't fetch demand.\n  ")
                    },
                    e.deletePropertyFromObject = function (t, e) {
                        var n = g({},
                            t);
                        return delete n[e],
                            n
                    },
                    e.isInteger = _t,
                    e.convertCamelToUnderscore = function (t) {
                        return t.replace(/(?:^|\.?)([A-Z])/g,
                            function (t, e) {
                                return "_" + e.toLowerCase()
                            }).replace(/^_/, "")
                    },
                    e.cleanObj = function (t) {
                        return Object.keys(t).reduce(function (e, n) {
                            return void 0 !== t[n] && (e[n] = t[n]),
                                e
                        }, {})
                    },
                    e.pick = function (t, e) {
                        return "object" === h(t) ? e.reduce(function (n, r, i) {
                            if ("function" == typeof r) return n;
                            var o = r,
                                a = r.match(/^(.+?)\sas\s(.+?)$/i);
                            a && (r = a[1], o = a[2]);
                            var s = t[r];
                            return "function" == typeof e[i + 1] && (s = e[i + 1](s, n)),
                                void 0 !== s && (n[o] = s),
                                n
                        }, {}) : {}
                    },
                    e.transformBidderParamKeywords = function (t) {
                        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "keywords",
                            n = [];
                        return rt(t,
                                function (t, r) {
                                    if ($(t)) {
                                        var i = [];
                                        rt(t,
                                                function (t) {
                                                    !(t = ut(e + "." + r, t)) && "" !== t || i.push(t)
                                                }),
                                            t = i
                                    } else {
                                        if (!J(t = ut(e + "." + r, t))) return;
                                        t = [t]
                                    }
                                    n.push({
                                        key: r,
                                        value: t
                                    })
                                }),
                            n
                    },
                    e.convertTypes = function (t, e) {
                        return Object.keys(t).forEach(function (n) {
                                e[n] && (X(t[n]) ? e[n] = t[n](e[n]) : e[n] = function (t, e) {
                                    return "string" === t ? e && e.toString() : "number" === t ? Number(e) : e
                                }(t[n], e[n]), isNaN(e[n]) && delete e.key)
                            }),
                            e
                    },
                    e.setDataInLocalStorage = function (t, e) {
                        Tt() && window.localStorage.setItem(t, e)
                    },
                    e.getDataFromLocalStorage = function (t) {
                        if (Tt()) return window.localStorage.getItem(t)
                    },
                    e.hasLocalStorage = Tt,
                    e.isArrayOfNums = function (t, e) {
                        return $(t) && (!e || t.length === e) && t.every(function (t) {
                            return _t(t)
                        })
                    },
                    e.fill = function (t, e) {
                        for (var n = [], r = 0; r < e; r++) {
                            var i = et(t) ? yt(t) : t;
                            n.push(i)
                        }
                        return n
                    },
                    e.chunk = function (t, e) {
                        for (var n = [], r = 0; r < Math.ceil(t.length / e); r++) {
                            var i = r * e,
                                o = i + e;
                            n.push(t.slice(i, o))
                        }
                        return n
                    },
                    e.getMinValueFromArray = function (t) {
                        return Math.min.apply(Math, m(t))
                    },
                    e.getMaxValueFromArray = function (t) {
                        return Math.max.apply(Math, m(t))
                    },
                    e.compareOn = function (t) {
                        return function (e, n) {
                            return e[t] < n[t] ? 1 : e[t] > n[t] ? -1 : 0
                        }
                    };
                var r = n(3),
                    i = n(88),
                    o = n.n(i),
                    a = n(11),
                    s = n.n(a),
                    c = n(9),
                    d = n.n(c),
                    u = n(10),
                    l = n(89),
                    f = n.n(l);
                n.d(e, "deepAccess",
                    function () {
                        return f.a
                    });
                var p = n(90);

                function m(t) {
                    return function (t) {
                            if (Array.isArray(t)) {
                                for (var e = 0,
                                        n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                                return n
                            }
                        }(t) ||
                        function (t) {
                            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
                        }(t) ||
                        function () {
                            throw new TypeError("Invalid attempt to spread non-iterable instance")
                        }()
                }

                function g() {
                    return (g = Object.assign ||
                        function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = arguments[e];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                            }
                            return t
                        }).apply(this, arguments)
                }

                function h(t) {
                    return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                        function (t) {
                            return typeof t
                        } : function (t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                }
                n.d(e, "deepSetValue",
                    function () {
                        return p.a
                    });
                var A, v = n(4),
                    y = "Array",
                    b = "String",
                    w = "Function",
                    E = "Number",
                    _ = "Object",
                    T = "Boolean",
                    S = Object.prototype.toString,
                    I = Boolean(window.console),
                    k = Boolean(I && window.console.log),
                    O = Boolean(I && window.console.info),
                    C = Boolean(I && window.console.warn),
                    x = Boolean(I && window.console.error),
                    D = {
                        checkCookieSupport: wt,
                        createTrackPixelIframeHtml: dt,
                        getWindowSelf: V,
                        getWindowTop: q,
                        getAncestorOrigins: L,
                        getTopFrameReferrer: M,
                        getWindowLocation: G,
                        getTopWindowLocation: z,
                        insertUserSyncIframe: ct,
                        insertElement: at,
                        isFn: X,
                        triggerPixel: st,
                        logError: K,
                        logWarn: H,
                        logMessage: W,
                        logInfo: F
                    },
                    P = {},
                    B = function (t, e) {
                        return e
                    }.bind(null, 1, P)() === P ? Function.prototype.bind : function (t) {
                        var e = this,
                            n = Array.prototype.slice.call(arguments, 1);
                        return function () {
                            return e.apply(t, n.concat(Array.prototype.slice.call(arguments)))
                        }
                    },
                    R = (A = 0,
                        function () {
                            return ++A
                        });

                function j() {
                    return R() + Math.random().toString(16).substr(2)
                }

                function U(t) {
                    if (N(t)) return t[0] + "x" + t[1]
                }

                function N(t) {
                    return $(t) && 2 === t.length && !isNaN(t[0]) && !isNaN(t[1])
                }

                function z() {
                    if (bt()) {
                        var t;
                        try {
                            t = D.getAncestorOrigins() || D.getTopFrameReferrer()
                        } catch (t) {
                            F("could not obtain top window location", t)
                        }
                        if (t) return Object(u.c)(t, {
                            decodeSearchAsString: !0
                        })
                    }
                    return D.getWindowLocation()
                }

                function M() {
                    try {
                        window.top.location.toString();
                        for (var t, e = "";
                            (t = t ? t.parent : window).document && t.document.referrer && (e = t.document.referrer), t !== window.top;);
                        return e
                    } catch (t) {
                        return window.document.referrer
                    }
                }

                function L() {
                    if (window.document.location && window.document.location.ancestorOrigins && 1 <= window.document.location.ancestorOrigins.length) return window.document.location.ancestorOrigins[window.document.location.ancestorOrigins.length - 1]
                }

                function q() {
                    return window.top
                }

                function V() {
                    return window.self
                }

                function G() {
                    return window.location
                }

                function W() {
                    Z() && k && console.log.apply(console, Y(arguments, "MESSAGE:"))
                }

                function F() {
                    Z() && O && console.info.apply(console, Y(arguments, "INFO:"))
                }

                function H() {
                    Z() && C && console.warn.apply(console, Y(arguments, "WARNING:"))
                }

                function K() {
                    Z() && x && console.error.apply(console, Y(arguments, "ERROR:"))
                }

                function Y(t, e) {
                    return t = [].slice.call(t),
                        e && t.unshift(e),
                        t.unshift("display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;"),
                        t.unshift("%cPrebid"),
                        t
                }

                function Z() {
                    return !!r.b.getConfig("debug")
                }

                function Q(t, e) {
                    return S.call(t) === "[object " + e + "]"
                }

                function X(t) {
                    return Q(t, w)
                }

                function J(t) {
                    return Q(t, b)
                }

                function $(t) {
                    return Q(t, y)
                }

                function tt(t) {
                    return Q(t, E)
                }

                function et(t) {
                    return Q(t, _)
                }

                function nt(t) {
                    if (!t) return !0;
                    if ($(t) || J(t)) return !(0 < t.length);
                    for (var e in t)
                        if (hasOwnProperty.call(t, e)) return !1;
                    return !0
                }

                function rt(t, e) {
                    if (!nt(t)) {
                        if (X(t.forEach)) return t.forEach(e, this);
                        var n = 0,
                            r = t.length;
                        if (0 < r)
                            for (; n < r; n++) e(t[n], n, t);
                        else
                            for (n in t) hasOwnProperty.call(t, n) && e.call(this, t[n], n)
                    }
                }
                var it = function () {
                        if (Array.prototype.indexOf) return Array.prototype.indexOf
                    }(),
                    ot = function (t, e) {
                        return t.hasOwnProperty ? t.hasOwnProperty(e) : void 0 !== t[e] && t.constructor.prototype[e] !== t[e]
                    };

                function at(t, e, n, r) {
                    var i;
                    e = e || document,
                        i = n ? e.getElementsByTagName(n) : e.getElementsByTagName("head");
                    try {
                        if ((i = i.length ? i : e.getElementsByTagName("body")).length) {
                            i = i[0];
                            var o = r ? null : i.firstChild;
                            return i.insertBefore(t, o)
                        }
                    } catch (t) {}
                }

                function st(t, e) {
                    var n = new Image;
                    e && D.isFn(e) && (n.addEventListener("load", e), n.addEventListener("error", e)),
                        n.src = t
                }

                function ct(t, e) {
                    var n = D.createTrackPixelIframeHtml(t, !1, "allow-scripts allow-same-origin"),
                        r = document.createElement("div");
                    r.innerHTML = n;
                    var i = r.firstChild;
                    e && D.isFn(e) && (i.addEventListener("load", e), i.addEventListener("error", e)),
                        D.insertElement(i, document, "html", !0)
                }

                function dt(t) {
                    var e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
                    return t ? ((!(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]) && (t = encodeURI(t)), e = e && 'sandbox="'.concat(e, '"'), "<iframe ".concat(e, ' id="').concat(j(), '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(t, '">\n    </iframe>')) : ""
                }

                function ut(t, e, n) {
                    return null == e ? n : J(e) ? e : tt(e) ? e.toString() : void D.logWarn("Unsuported type for param: " + t + " required type: String")
                }

                function lt(t, e, n) {
                    return n.indexOf(t) === e
                }

                function ft(t, e) {
                    return t.concat(e)
                }

                function pt(t) {
                    return Object.keys(t)
                }

                function mt(t, e) {
                    return t[e]
                }
                var gt = vt("timeToRespond",
                        function (t, e) {
                            return e < t
                        }),
                    ht = vt("responseTimestamp",
                        function (t, e) {
                            return e < t
                        }),
                    At = vt("responseTimestamp",
                        function (t, e) {
                            return t < e
                        });

                function vt(t, e) {
                    return function (n, r) {
                        return n.cpm === r.cpm ? e(n[t], r[t]) ? r : n : n.cpm < r.cpm ? r : n
                    }
                }

                function yt(t) {
                    return o()(t)
                }

                function bt() {
                    try {
                        return D.getWindowSelf() !== D.getWindowTop()
                    } catch (t) {
                        return !0
                    }
                }

                function wt() {
                    if (window.navigator.cookieEnabled || document.cookie.length) return !0
                }
                var Et = function (t, e) {
                    return t.getAdUnitPath() === e || t.getSlotElementId() === e
                };

                function _t(t) {
                    return Number.isInteger ? Number.isInteger(t) : "number" == typeof t && isFinite(t) && Math.floor(t) === t
                }

                function Tt() {
                    try {
                        return !!window.localStorage
                    } catch (t) {
                        K("Local storage api disabled")
                    }
                }
            },
            1: function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                    e.registerBidder = function (t) {
                        var e = Array.isArray(t.supportedMediaTypes) ? {
                            supportedMediaTypes: t.supportedMediaTypes
                        } : void 0;

                        function n(t) {
                            var n = T(t);
                            i.
                            default.registerBidAdapter(n, t.code, e)
                        }
                        n(t),
                            Array.isArray(t.aliases) && t.aliases.forEach(function (e) {
                                i.
                                default.aliasRegistry[e] = t.code,
                                    n(w({},
                                        t, {
                                            code: e
                                        }))
                            })
                    },
                    e.newBidder = T,
                    e.preloadBidderMappingFile = S,
                    e.getIabSubCategory = function (t, e) {
                        var n = i.
                        default.getBidAdapter(t);
                        if (n.getSpec().getMappingFileInfo) {
                            var r = n.getSpec().getMappingFileInfo(),
                                o = r.localStorageKey ? r.localStorageKey : n.getBidderCode(),
                                a = Object(A.getDataFromLocalStorage)(o);
                            if (a) {
                                try {
                                    a = JSON.parse(a)
                                } catch (e) {
                                    Object(A.logError)("Failed to parse ".concat(t, " mapping data stored in local storage"))
                                }
                                return a.mapping[e] ? a.mapping[e] : null
                            }
                        }
                    },
                    e.isValid = I;
                var r = n(40),
                    i = n(7),
                    o = n(3),
                    a = n(23),
                    s = n(26),
                    c = n(25),
                    d = n(49),
                    u = n(4),
                    l = n.n(u),
                    f = n(8),
                    p = n.n(f),
                    m = n(9),
                    g = n.n(m),
                    h = n(5),
                    A = n(0),
                    v = n(2),
                    y = n(13);

                function b(t) {
                    return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                        function (t) {
                            return typeof t
                        } : function (t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                }

                function w() {
                    return (w = Object.assign ||
                        function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = arguments[e];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                            }
                            return t
                        }).apply(this, arguments)
                }
                var E = ["requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency"],
                    _ = 1;

                function T(t) {
                    return w(new r.a(t.code), {
                        getSpec: function () {
                            return Object.freeze(t)
                        },
                        registerSyncs: e,
                        callBids: function (r, i, o, s, c) {
                            if (Array.isArray(r.bids)) {
                                var d = {},
                                    u = [],
                                    f = r.bids.filter(n);
                                if (0 !== f.length) {
                                    var m = {};
                                    f.forEach(function (t) {
                                        (m[t.bidId] = t).adUnitCode || (t.adUnitCode = t.placementCode)
                                    });
                                    var g = t.buildRequests(f, r);
                                    if (g && 0 !== g.length) {
                                        Array.isArray(g) || (g = [g]);
                                        var h = Object(A.delayExecution)(v, g.length);
                                        g.forEach(function (e) {
                                            switch (e.method) {
                                                case "GET":
                                                    s("".concat(e.url).concat(function (t) {
                                                            return t ? "?".concat("object" === b(t) ? Object(A.parseQueryStringParameters)(t) : t) : ""
                                                        }(e.data)), {
                                                            success: n,
                                                            error: o
                                                        },
                                                        void 0, w({
                                                                method: "GET",
                                                                withCredentials: !0
                                                            },
                                                            e.options));
                                                    break;
                                                case "POST":
                                                    s(e.url, {
                                                            success: n,
                                                            error: o
                                                        },
                                                        "string" == typeof e.data ? e.data : JSON.stringify(e.data), w({
                                                                method: "POST",
                                                                contentType: "text/plain",
                                                                withCredentials: !0
                                                            },
                                                            e.options));
                                                    break;
                                                default:
                                                    Object(A.logWarn)("Skipping invalid request from ".concat(t.code, ". Request type ").concat(e.type, " must be GET or POST")),
                                                        h()
                                            }

                                            function n(n, o) {
                                                c(t.code);
                                                try {
                                                    n = JSON.parse(n)
                                                } catch (n) {}
                                                var s;
                                                n = {
                                                        body: n,
                                                        headers: {
                                                            get: o.getResponseHeader.bind(o)
                                                        }
                                                    },
                                                    u.push(n);
                                                try {
                                                    s = t.interpretResponse(n, e)
                                                } catch (n) {
                                                    return Object(A.logError)("Bidder ".concat(t.code, " failed to interpret the server's response. Continuing without bids"), null, n),
                                                        void h()
                                                }

                                                function f(e) {
                                                    var n = m[e.requestId];
                                                    if (n) {
                                                        var o = w(Object(a.a)(l.a.STATUS.GOOD, n), e);
                                                        !
                                                        function (t, e) {
                                                            d[t] = !0,
                                                                I(t, e, [r]) && i(t, e)
                                                        }(n.adUnitCode, o)
                                                    } else Object(A.logWarn)("Bidder ".concat(t.code, " made bid for unknown request ID: ").concat(e.requestId, ". Ignoring."))
                                                }
                                                s && (s.forEach ? s.forEach(f) : f(s)),
                                                    h(s)
                                            }

                                            function o(e) {
                                                c(t.code),
                                                    Object(A.logError)("Server call for ".concat(t.code, " failed: ").concat(e, ". Continuing without bids.")),
                                                    h()
                                            }
                                        })
                                    } else v()
                                } else v()
                            }

                            function v() {
                                o(),
                                    p.a.emit(l.a.EVENTS.BIDDER_DONE, r),
                                    e(u, r.gdprConsent)
                            }
                        }
                    });

                    function e(e, n) {
                        if (t.getUserSyncs) {
                            var r = o.b.getConfig("userSync.filterSettings"),
                                i = t.getUserSyncs({
                                        iframeEnabled: !!(o.b.getConfig("userSync.iframeEnabled") || r && (r.iframe || r.all)),
                                        pixelEnabled: !!(o.b.getConfig("userSync.pixelEnabled") || r && (r.image || r.all))
                                    },
                                    e, n);
                            i && (Array.isArray(i) || (i = [i]), i.forEach(function (e) {
                                s.a.registerSync(e.type, t.code, e.url)
                            }))
                        }
                    }

                    function n(e) {
                        return !!t.isBidRequestValid(e) || (Object(A.logWarn)("Invalid bid sent to bidder ".concat(t.code, ": ").concat(JSON.stringify(e))), !1)
                    }
                }

                function S(t, e) {
                    if (!o.b.getConfig("adpod.brandCategoryExclusion")) return t.call(this, e);
                    e.filter(function (t) {
                            return Object(A.deepAccess)(t, "mediaTypes.video.context") === v.a
                        }).map(function (t) {
                            return t.bids.map(function (t) {
                                return t.bidder
                            })
                        }).reduce(A.flatten, []).filter(A.uniques).forEach(function (t) {
                            var e = i.
                            default.getBidAdapter(t);
                            if (e.getSpec().getMappingFileInfo) {
                                var n = e.getSpec().getMappingFileInfo(),
                                    r = n.refreshInDays ? n.refreshInDays : _,
                                    o = n.localStorageKey ? n.localStorageKey : e.getSpec().code,
                                    a = Object(A.getDataFromLocalStorage)(o);
                                (!a || Object(A.timestamp)() < a.lastUpdated + 24 * r * 60 * 60 * 1e3) && Object(h.a)(n.url, {
                                    success: function (e) {
                                        try {
                                            e = JSON.parse(e);
                                            var n = {
                                                lastUpdated: Object(A.timestamp)(),
                                                mapping: e.mapping
                                            };
                                            Object(A.setDataInLocalStorage)(o, JSON.stringify(n))
                                        } catch (e) {
                                            Object(A.logError)("Failed to parse ".concat(t, " bidder translation mapping file"))
                                        }
                                    },
                                    error: function () {
                                        Object(A.logError)("Failed to load ".concat(t, " bidder translation file"))
                                    }
                                })
                            }
                        }),
                        t.call(this, e)
                }

                function I(t, e, n) {
                    function r(t) {
                        return "Invalid bid from ".concat(e.bidderCode, ". Ignoring bid: ").concat(t)
                    }
                    return t ? e ? (i = Object.keys(e), E.every(function (t) {
                        return g()(i, t) && !g()([void 0, null], e[t])
                    }) ? "native" !== e.mediaType || Object(c.f)(e, n) ? "video" !== e.mediaType || Object(d.c)(e, n) ? !("banner" === e.mediaType && !
                        function (t, e, n) {
                            if ((e.width || 0 === parseInt(e.width, 10)) && (e.height || 0 === parseInt(e.height, 10))) return e.width = parseInt(e.width, 10),
                                e.height = parseInt(e.height, 10),
                                !0;
                            var r = Object(A.getBidderRequest)(n, e.bidderCode, t),
                                i = r && r.bids && r.bids[0] && r.bids[0].sizes,
                                o = Object(A.parseSizesInput)(i);
                            if (1 !== o.length) return !1;
                            var a = function (t, e) {
                                    return function (t) {
                                            if (Array.isArray(t)) return t
                                        }(t) ||
                                        function (t, e) {
                                            var n = [],
                                                r = !0,
                                                i = !1,
                                                o = void 0;
                                            try {
                                                for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                                            } catch (t) {
                                                i = !0,
                                                    o = t
                                            } finally {
                                                try {
                                                    r || null == s.
                                                    return || s.
                                                    return()
                                                } finally {
                                                    if (i) throw o
                                                }
                                            }
                                            return n
                                        }(t, e) ||
                                        function () {
                                            throw new TypeError("Invalid attempt to destructure non-iterable instance")
                                        }()
                                }(o[0].split("x"), 2),
                                s = a[0],
                                c = a[1];
                            return e.width = parseInt(s, 10),
                                e.height = parseInt(c, 10),
                                !0
                        }(t, e, n) && (Object(A.logError)(r("Banner bids require a width and height")), 1)) : (Object(A.logError)(r("Video bid does not have required vastUrl or renderer property")), !1) : (Object(A.logError)(r("Native bid missing some required properties.")), !1) : (Object(A.logError)(r("Bidder ".concat(e.bidderCode, " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."))), !1)) : (Object(A.logWarn)("Some adapter tried to add an undefined bid for ".concat(t, ".")), !1) : (Object(A.logWarn)("No adUnitCode was supplied to addBidResponse."), !1);
                    var i
                }
                Object(y.a)("checkAdUnitSetup").before(S)
            },
            10: function (t, e, n) {
                "use strict";

                function r(t) {
                    return t ? t.replace(/^\?/, "").split("&").reduce(function (t, e) {
                        var n = function (t, e) {
                                return function (t) {
                                        if (Array.isArray(t)) return t
                                    }(t) ||
                                    function (t, e) {
                                        var n = [],
                                            r = !0,
                                            i = !1,
                                            o = void 0;
                                        try {
                                            for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                                        } catch (t) {
                                            i = !0,
                                                o = t
                                        } finally {
                                            try {
                                                r || null == s.
                                                return || s.
                                                return()
                                            } finally {
                                                if (i) throw o
                                            }
                                        }
                                        return n
                                    }(t, e) ||
                                    function () {
                                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                                    }()
                            }(e.split("="), 2),
                            r = n[0],
                            i = n[1];
                        return /\[\]$/.test(r) ? (t[r = r.replace("[]", "")] = t[r] || [], t[r].push(i)) : t[r] = i || "",
                            t
                    }, {}) : {}
                }

                function i(t) {
                    return Object.keys(t).map(function (e) {
                        return Array.isArray(t[e]) ? t[e].map(function (t) {
                            return "".concat(e, "[]=").concat(t)
                        }).join("&") : "".concat(e, "=").concat(t[e])
                    }).join("&")
                }
                e.d = r,
                    e.b = i,
                    e.c = function (t, e) {
                        var n = document.createElement("a");
                        e && "noDecodeWholeURL" in e && e.noDecodeWholeURL ? n.href = t : n.href = decodeURIComponent(t);
                        var i = e && "decodeSearchAsString" in e && e.decodeSearchAsString;
                        return {
                            href: n.href,
                            protocol: (n.protocol || "").replace(/:$/, ""),
                            hostname: n.hostname,
                            port: +n.port,
                            pathname: n.pathname.replace(/^(?!\/)/, "/"),
                            search: i ? n.search : r(n.search || ""),
                            hash: (n.hash || "").replace(/^#/, ""),
                            host: n.host || window.location.host
                        }
                    },
                    e.a = function (t) {
                        return (t.protocol || "http") + "://" + (t.host || t.hostname + (t.port ? ":".concat(t.port) : "")) + (t.pathname || "") + (t.search ? "?".concat(i(t.search || "")) : "") + (t.hash ? "#".concat(t.hash) : "")
                    }
            },
            11: function (t, e, n) {
                n(80),
                    t.exports = n(16).Array.find
            },
            12: function (t, e, n) {
                "use strict";
                e.a = s,
                    e.c = function (t) {
                        return !(!t || !t.url)
                    },
                    e.b = function (t, e) {
                        t.render(e)
                    };
                var r = n(50),
                    i = n(0),
                    o = n(11),
                    a = n.n(o);

                function s(t) {
                    var e = this,
                        n = t.url,
                        o = t.config,
                        s = t.id,
                        c = t.callback,
                        d = t.loaded,
                        u = t.adUnitCode;
                    this.url = n,
                        this.config = o,
                        this.handlers = {},
                        this.id = s,
                        this.loaded = d,
                        this.cmd = [],
                        this.push = function (t) {
                            "function" == typeof t ? e.loaded ? t.call() : e.cmd.push(t) : i.logError("Commands given to Renderer.push must be wrapped in a function")
                        },
                        this.callback = c ||
                        function () {
                            e.loaded = !0,
                                e.process()
                        },
                        function (t) {
                            var e = pbjs.adUnits,
                                n = a()(e,
                                    function (e) {
                                        return e.code === t
                                    });
                            return !!(n && n.renderer && n.renderer.url && n.renderer.render)
                        }(u) ? i.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(u)) : Object(r.b)(n, this.callback, !0)
                }
                s.install = function (t) {
                        return new s({
                            url: t.url,
                            config: t.config,
                            id: t.id,
                            callback: t.callback,
                            loaded: t.loaded,
                            adUnitCode: t.adUnitCode
                        })
                    },
                    s.prototype.getConfig = function () {
                        return this.config
                    },
                    s.prototype.setRender = function (t) {
                        this.render = t
                    },
                    s.prototype.setEventHandlers = function (t) {
                        this.handlers = t
                    },
                    s.prototype.handleVideoEvent = function (t) {
                        var e = t.id,
                            n = t.eventName;
                        "function" == typeof this.handlers[n] && this.handlers[n](),
                            i.logMessage("Prebid Renderer event for id ".concat(e, " type ").concat(n))
                    },
                    s.prototype.process = function () {
                        for (; 0 < this.cmd.length;) try {
                            this.cmd.shift().call()
                        } catch (t) {
                            i.logError("Error processing Renderer command: ", t)
                        }
                    }
            },
            13: function (t, e, n) {
                "use strict";
                n.d(e, "b",
                        function () {
                            return o
                        }),
                    n.d(e, "a",
                        function () {
                            return a
                        }),
                    e.d = function (t, e) {
                        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 15;
                        0 === t.getHooks({
                            hook: e
                        }).length && t.before(e, n)
                    },
                    e.c = function (t, e) {
                        o("async",
                            function (t) {
                                t.forEach(function (t) {
                                    return e.apply(void 0,
                                        function (t) {
                                            return function (t) {
                                                    if (Array.isArray(t)) {
                                                        for (var e = 0,
                                                                n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                                                        return n
                                                    }
                                                }(t) ||
                                                function (t) {
                                                    if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
                                                }(t) ||
                                                function () {
                                                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                                                }()
                                        }(t))
                                })
                            },
                            t)([])
                    },
                    e.e = function (t) {
                        for (var e = arguments.length,
                                n = new Array(1 < e ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                        a(t).before(function (t, e) {
                            e.push(n),
                                t(e)
                        })
                    };
                var r = n(91),
                    i = n.n(r),
                    o = i()({
                        ready: i.a.SYNC | i.a.ASYNC | i.a.QUEUE
                    }),
                    a = o.get
            },
            130: function (t, e, n) {
                "use strict";
                var r = n(15),
                    i = n(43)(6),
                    o = "findIndex",
                    a = !0;
                o in [] && Array(1)[o](function () {
                        a = !1
                    }),
                    r(r.P + r.F * a, "Array", {
                        findIndex: function (t, e) {
                            return i(this, t, 1 < arguments.length ? e : void 0)
                        }
                    }),
                    n(35)(o)
            },
            133: function (t, e, n) {
                "use strict";
                e.a = function () {
                    addEventListener("message", p, !1)
                };
                var r = n(8),
                    i = n.n(r),
                    o = n(25),
                    a = n(4),
                    s = (n.n(a), n(0)),
                    c = n(29),
                    d = n(11),
                    u = n.n(d),
                    l = n(12),
                    f = a.EVENTS.BID_WON;

                function p(t) {
                    var e = t.message ? "message" : "data",
                        n = {};
                    try {
                        n = JSON.parse(t[e])
                    } catch (t) {
                        return
                    }
                    if (n && n.adId) {
                        var r = u()(c.a.getBidsReceived(),
                            function (t) {
                                return t.adId === n.adId
                            });
                        if (r && "Prebid Request" === n.message && (function (t, e, n) {
                                var r = t.adId,
                                    i = t.ad,
                                    o = t.adUrl,
                                    a = t.width,
                                    c = t.height,
                                    d = t.renderer,
                                    f = t.cpm;
                                Object(l.c)(d) ? Object(l.b)(d, t) : r && (function (t) {
                                    var e = t.adUnitCode,
                                        n = t.width,
                                        r = t.height;
                                    ["div:last-child", "div:last-child iframe"].forEach(function (t) {
                                        var i = function (t) {
                                            var n = function (t) {
                                                    return window.googletag ?
                                                        function (t) {
                                                            return u()(window.googletag.pubads().getSlots().filter(Object(s.isSlotMatchingAdUnitCode)(t)),
                                                                function (t) {
                                                                    return t
                                                                }).getSlotElementId()
                                                        }(t) : window.apntag ?
                                                        function (t) {
                                                            var e = window.apntag.getTag(t);
                                                            return e && e.targetId
                                                        }(t) : t
                                                }(e),
                                                r = document.getElementById(n);
                                            return r && r.querySelector(t)
                                        }(t);
                                        if (i) {
                                            var o = i.style;
                                            o.width = n + "px",
                                                o.height = r + "px"
                                        } else Object(s.logWarn)("Unable to locate matching page element for adUnitCode ".concat(e, ".  Can't resize it to ad's dimensions.  Please review setup."))
                                    })
                                }(t), n.postMessage(JSON.stringify({
                                    message: "Prebid Response",
                                    ad: Object(s.replaceAuctionPrice)(i, f),
                                    adUrl: Object(s.replaceAuctionPrice)(o, f),
                                    adId: r,
                                    width: a,
                                    height: c
                                }), e))
                            }(r, n.adServerDomain, t.source), c.a.addWinningBid(r), i.a.emit(f, r)), r && "Prebid Native" === n.message) {
                            if ("assetRequest" === n.action) {
                                var a = Object(o.c)(n, r);
                                return void t.source.postMessage(JSON.stringify(a), t.origin)
                            }
                            if ("click" === Object(o.b)(n, r)) return;
                            c.a.addWinningBid(r),
                                i.a.emit(f, r)
                        }
                    }
                }
            },
            134: function (t, e, n) {
                "use strict";
                e.a = function (t) {
                    var e;
                    try {
                        t = t || window.sessionStorage,
                            e = JSON.parse(t.getItem(c))
                    } catch (t) {}
                    e && l(e, !0)
                };
                var r = n(3),
                    i = n(0),
                    o = n(37);

                function a() {
                    return (a = Object.assign ||
                        function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = arguments[e];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                            }
                            return t
                        }).apply(this, arguments)
                }
                var s, c = "pbjs:debugging";

                function d(t) {
                    Object(i.logMessage)("DEBUG: " + t)
                }

                function u() {
                    o.c.getHooks({
                        hook: s
                    }).remove()
                }

                function l(t, e) {
                    var n = 1 < arguments.length && void 0 !== e && e;
                    r.b.setConfig({
                            debug: !0
                        }),
                        d("bidder overrides enabled".concat(n ? " from session" : "")),
                        u(),
                        s = function (t, e, n) {
                            Array.isArray(this.bidders) && -1 === this.bidders.indexOf(n.bidderCode) ?
                                function (t) {
                                    Object(i.logWarn)("DEBUG: " + t)
                                }("bidder '".concat(n.bidderCode, "' excluded from auction by bidder overrides")) : (Array.isArray(this.bids) && this.bids.forEach(function (t) {
                                    t.bidder && t.bidder !== n.bidderCode || t.adUnitCode && t.adUnitCode !== e || (n = a({},
                                        n), Object.keys(t).filter(function (t) {
                                        return -1 === ["bidder", "adUnitCode"].indexOf(t)
                                    }).forEach(function (r) {
                                        var i = t[r];
                                        d("bidder overrides changed '".concat(e, "/").concat(n.bidderCode, "' bid.").concat(r, " from '").concat(n[r], "' to '").concat(i, "'")),
                                            n[r] = i
                                    }))
                                }), t(e, n))
                        }.bind(t),
                        o.c.before(s, 5)
                }
                r.b.getConfig("debugging",
                    function (t) {
                        return function (t) {
                            if (t.enabled) {
                                try {
                                    window.sessionStorage.setItem(c, JSON.stringify(t))
                                } catch (t) {}
                                l(t)
                            } else {
                                u(),
                                    d("bidder overrides disabled");
                                try {
                                    window.sessionStorage.removeItem(c)
                                } catch (t) {}
                            }
                        }(t.debugging)
                    })
            },
            135: function (t, e, n) {
                n(136),
                    n(65),
                    n(145),
                    n(147),
                    n(151),
                    n(154),
                    n(156),
                    t.exports = n(16).Set
            },
            136: function (t, e) {},
            137: function (t, e, n) {
                var r = n(45),
                    i = n(33);
                t.exports = function (t) {
                    return function (e, n) {
                        var o, a, s = String(i(e)),
                            c = r(n),
                            d = s.length;
                        return c < 0 || d <= c ? t ? "" : void 0 : (o = s.charCodeAt(c)) < 55296 || 56319 < o || c + 1 === d || (a = s.charCodeAt(c + 1)) < 56320 || 57343 < a ? t ? s.charAt(c) : o : t ? s.slice(c, c + 2) : a - 56320 + (o - 55296 << 10) + 65536
                    }
                }
            },
            138: function (t, e, n) {
                t.exports = n(21)
            },
            139: function (t, e, n) {
                "use strict";
                var r = n(66),
                    i = n(42),
                    o = n(53),
                    a = {};
                n(21)(a, n(14)("iterator"),
                        function () {
                            return this
                        }),
                    t.exports = function (t, e, n) {
                        t.prototype = r(a, {
                                next: i(1, n)
                            }),
                            o(t, e + " Iterator")
                    }
            },
            14: function (t, e, n) {
                var r = n(57)("wks"),
                    i = n(46),
                    o = n(19).Symbol,
                    a = "function" == typeof o;
                (t.exports = function (t) {
                    return r[t] || (r[t] = a && o[t] || (a ? o : i)("Symbol." + t))
                }).store = r
            },
            140: function (t, e, n) {
                var r = n(20),
                    i = n(27),
                    o = n(141);
                t.exports = n(22) ? Object.defineProperties : function (t, e) {
                    i(t);
                    for (var n, a = o(e), s = a.length, c = 0; c < s;) r.f(t, n = a[c++], e[n]);
                    return t
                }
            },
            141: function (t, e, n) {
                var r = n(142),
                    i = n(67);
                t.exports = Object.keys ||
                    function (t) {
                        return r(t, i)
                    }
            },
            142: function (t, e, n) {
                var r = n(28),
                    i = n(47),
                    o = n(59)(!1),
                    a = n(52)("IE_PROTO");
                t.exports = function (t, e) {
                    var n, s = i(t),
                        c = 0,
                        d = [];
                    for (n in s) n != a && r(s, n) && d.push(n);
                    for (; e.length > c;) r(s, n = e[c++]) && (~o(d, n) || d.push(n));
                    return d
                }
            },
            143: function (t, e, n) {
                var r = n(19).document;
                t.exports = r && r.documentElement
            },
            144: function (t, e, n) {
                var r = n(28),
                    i = n(44),
                    o = n(52)("IE_PROTO"),
                    a = Object.prototype;
                t.exports = Object.getPrototypeOf ||
                    function (t) {
                        return t = i(t),
                            r(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
                    }
            },
            145: function (t, e, n) {
                n(146);
                for (var r = n(19), i = n(21), o = n(30), a = n(14)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), c = 0; c < s.length; c++) {
                    var d = s[c],
                        u = r[d],
                        l = u && u.prototype;
                    l && !l[a] && i(l, a, d),
                        o[d] = o.Array
                }
            },
            146: function (t, e, n) {
                "use strict";
                var r = n(35),
                    i = n(68),
                    o = n(30),
                    a = n(47);
                t.exports = n(51)(Array, "Array",
                        function (t, e) {
                            this._t = a(t),
                                this._i = 0,
                                this._k = e
                        },
                        function () {
                            var t = this._t,
                                e = this._k,
                                n = this._i++;
                            return !t || n >= t.length ? (this._t = void 0, i(1)) : i(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
                        },
                        "values"),
                    o.Arguments = o.Array,
                    r("keys"),
                    r("values"),
                    r("entries")
            },
            147: function (t, e, n) {
                "use strict";
                var r = n(148),
                    i = n(76);
                t.exports = n(150)("Set",
                    function (t) {
                        return function (e) {
                            return t(this, 0 < arguments.length ? e : void 0)
                        }
                    }, {
                        add: function (t) {
                            return r.def(i(this, "Set"), t = 0 === t ? 0 : t, t)
                        }
                    },
                    r)
            },
            148: function (t, e, n) {
                "use strict";

                function r(t, e) {
                    var n, r = m(e);
                    if ("F" !== r) return t._i[r];
                    for (n = t._f; n; n = n.n)
                        if (n.k == e) return n
                }
                var i = n(20).f,
                    o = n(66),
                    a = n(69),
                    s = n(24),
                    c = n(70),
                    d = n(39),
                    u = n(51),
                    l = n(68),
                    f = n(149),
                    p = n(22),
                    m = n(75).fastKey,
                    g = n(76),
                    h = p ? "_s" : "size";
                t.exports = {
                    getConstructor: function (t, e, n, u) {
                        var l = t(function (t, r) {
                            c(t, l, e, "_i"),
                                t._t = e,
                                t._i = o(null),
                                t._f = void 0,
                                t._l = void 0,
                                t[h] = 0,
                                null != r && d(r, n, t[u], t)
                        });
                        return a(l.prototype, {
                                clear: function () {
                                    for (var t = g(this, e), n = t._i, r = t._f; r; r = r.n) r.r = !0,
                                        r.p && (r.p = r.p.n = void 0),
                                        delete n[r.i];
                                    t._f = t._l = void 0,
                                        t[h] = 0
                                },
                                delete: function (t) {
                                    var n = g(this, e),
                                        i = r(n, t);
                                    if (i) {
                                        var o = i.n,
                                            a = i.p;
                                        delete n._i[i.i],
                                            i.r = !0,
                                            a && (a.n = o),
                                            o && (o.p = a),
                                            n._f == i && (n._f = o),
                                            n._l == i && (n._l = a),
                                            n[h]--
                                    }
                                    return !!i
                                },
                                forEach: function (t, n) {
                                    g(this, e);
                                    for (var r, i = s(t, 1 < arguments.length ? n : void 0, 3); r = r ? r.n : this._f;)
                                        for (i(r.v, r.k, this); r && r.r;) r = r.p
                                },
                                has: function (t) {
                                    return !!r(g(this, e), t)
                                }
                            }),
                            p && i(l.prototype, "size", {
                                get: function () {
                                    return g(this, e)[h]
                                }
                            }),
                            l
                    },
                    def: function (t, e, n) {
                        var i, o, a = r(t, e);
                        return a ? a.v = n : (t._l = a = {
                                    i: o = m(e, !0),
                                    k: e,
                                    v: n,
                                    p: i = t._l,
                                    n: void 0,
                                    r: !1
                                },
                                t._f || (t._f = a), i && (i.n = a), t[h]++, "F" !== o && (t._i[o] = a)),
                            t
                    },
                    getEntry: r,
                    setStrong: function (t, e, n) {
                        u(t, e,
                                function (t, n) {
                                    this._t = g(t, e),
                                        this._k = n,
                                        this._l = void 0
                                },
                                function () {
                                    for (var t = this,
                                            e = t._k,
                                            n = t._l; n && n.r;) n = n.p;
                                    return t._t && (t._l = n = n ? n.n : t._t._f) ? l(0, "keys" == e ? n.k : "values" == e ? n.v : [n.k, n.v]) : (t._t = void 0, l(1))
                                },
                                n ? "entries" : "values", !n, !0),
                            f(e)
                    }
                }
            },
            149: function (t, e, n) {
                "use strict";
                var r = n(19),
                    i = n(16),
                    o = n(20),
                    a = n(22),
                    s = n(14)("species");
                t.exports = function (t) {
                    var e = "function" == typeof i[t] ? i[t] : r[t];
                    a && e && !e[s] && o.f(e, s, {
                        configurable: !0,
                        get: function () {
                            return this
                        }
                    })
                }
            },
            15: function (t, e, n) {
                var r = n(19),
                    i = n(16),
                    o = n(24),
                    a = n(21),
                    s = n(28),
                    c = "prototype",
                    d = function (t, e, n) {
                        var u, l, f, p = t & d.F,
                            m = t & d.G,
                            g = t & d.S,
                            h = t & d.P,
                            A = t & d.B,
                            v = t & d.W,
                            y = m ? i : i[e] || (i[e] = {}),
                            b = y[c],
                            w = m ? r : g ? r[e] : (r[e] || {})[c];
                        for (u in m && (n = e), n)(l = !p && w && void 0 !== w[u]) && s(y, u) || (f = l ? w[u] : n[u], y[u] = m && "function" != typeof w[u] ? n[u] : A && l ? o(f, r) : v && w[u] == f ?
                            function (t) {
                                function e(e, n, r) {
                                    if (this instanceof t) {
                                        switch (arguments.length) {
                                            case 0:
                                                return new t;
                                            case 1:
                                                return new t(e);
                                            case 2:
                                                return new t(e, n)
                                        }
                                        return new t(e, n, r)
                                    }
                                    return t.apply(this, arguments)
                                }
                                return e[c] = t[c],
                                    e
                            }(f) : h && "function" == typeof f ? o(Function.call, f) : f, h && ((y.virtual || (y.virtual = {}))[u] = f, t & d.R && b && !b[u] && a(b, u, f)))
                    };
                d.F = 1,
                    d.G = 2,
                    d.S = 4,
                    d.P = 8,
                    d.B = 16,
                    d.W = 32,
                    d.U = 64,
                    d.R = 128,
                    t.exports = d
            },
            150: function (t, e, n) {
                "use strict";
                var r = n(19),
                    i = n(15),
                    o = n(75),
                    a = n(31),
                    s = n(21),
                    c = n(69),
                    d = n(39),
                    u = n(70),
                    l = n(18),
                    f = n(53),
                    p = n(20).f,
                    m = n(43)(0),
                    g = n(22);
                t.exports = function (t, e, n, h, A, v) {
                    var y = r[t],
                        b = y,
                        w = A ? "set" : "add",
                        E = b && b.prototype,
                        _ = {};
                    return g && "function" == typeof b && (v || E.forEach && !a(function () {
                            (new b).entries().next()
                        })) ? (b = e(function (e, n) {
                            u(e, b, t, "_c"),
                                e._c = new y,
                                null != n && d(n, A, e[w], e)
                        }), m("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),
                            function (t) {
                                var e = "add" == t || "set" == t;
                                t in E && (!v || "clear" != t) && s(b.prototype, t,
                                    function (n, r) {
                                        if (u(this, b, t), !e && v && !l(n)) return "get" == t && void 0;
                                        var i = this._c[t](0 === n ? 0 : n, r);
                                        return e ? this : i
                                    })
                            }), v || p(b.prototype, "size", {
                            get: function () {
                                return this._c.size
                            }
                        })) : (b = h.getConstructor(e, t, A, w), c(b.prototype, n), o.NEED = !0),
                        f(b, t),
                        _[t] = b,
                        i(i.G + i.W + i.F, _),
                        v || h.setStrong(b, t, A),
                        b
                }
            },
            151: function (t, e, n) {
                var r = n(15);
                r(r.P + r.R, "Set", {
                    toJSON: n(152)("Set")
                })
            },
            152: function (t, e, n) {
                var r = n(74),
                    i = n(153);
                t.exports = function (t) {
                    return function () {
                        if (r(this) != t) throw TypeError(t + "#toJSON isn't generic");
                        return i(this)
                    }
                }
            },
            153: function (t, e, n) {
                var r = n(39);
                t.exports = function (t, e) {
                    var n = [];
                    return r(t, !1, n.push, n, e),
                        n
                }
            },
            154: function (t, e, n) {
                n(155)("Set")
            },
            155: function (t, e, n) {
                "use strict";
                var r = n(15);
                t.exports = function (t) {
                    r(r.S, t, {
                        of: function () {
                            for (var t = arguments.length,
                                    e = new Array(t); t--;) e[t] = arguments[t];
                            return new this(e)
                        }
                    })
                }
            },
            156: function (t, e, n) {
                n(157)("Set")
            },
            157: function (t, e, n) {
                "use strict";
                var r = n(15),
                    i = n(54),
                    o = n(24),
                    a = n(39);
                t.exports = function (t) {
                    r(r.S, t, {
                        from: function (t, e, n) {
                            var r, s, c, d, u = e;
                            return i(this),
                                (r = void 0 !== u) && i(u),
                                null == t ? new this : (s = [], r ? (c = 0, d = o(u, n, 2), a(t, !1,
                                    function (t) {
                                        s.push(d(t, c++))
                                    })) : a(t, !1, s.push, s), new this(s))
                        }
                    })
                }
            },
            158: function (t, e, n) {
                n(65),
                    n(159),
                    t.exports = n(16).Array.from
            },
            159: function (t, e, n) {
                "use strict";
                var r = n(24),
                    i = n(15),
                    o = n(44),
                    a = n(71),
                    s = n(72),
                    c = n(34),
                    d = n(160),
                    u = n(73);
                i(i.S + i.F * !n(161)(function (t) {
                    Array.from(t)
                }), "Array", {
                    from: function (t, e, n) {
                        var i, l, f, p, m = o(t),
                            g = "function" == typeof this ? this : Array,
                            h = arguments.length,
                            A = 1 < h ? e : void 0,
                            v = void 0 !== A,
                            y = 0,
                            b = u(m);
                        if (v && (A = r(A, 2 < h ? n : void 0, 2)), null == b || g == Array && s(b))
                            for (l = new g(i = c(m.length)); y < i; y++) d(l, y, v ? A(m[y], y) : m[y]);
                        else
                            for (p = b.call(m), l = new g; !(f = p.next()).done; y++) d(l, y, v ? a(p, A, [f.value, y], !0) : f.value);
                        return l.length = y,
                            l
                    }
                })
            },
            16: function (t, e) {
                var n = t.exports = {
                    version: "2.6.9"
                };
                "number" == typeof __e && (__e = n)
            },
            160: function (t, e, n) {
                "use strict";
                var r = n(20),
                    i = n(42);
                t.exports = function (t, e, n) {
                    e in t ? r.f(t, e, i(0, n)) : t[e] = n
                }
            },
            161: function (t, e, n) {
                var r = n(14)("iterator"),
                    i = !1;
                try {
                    var o = [7][r]();
                    o.
                    return = function () {
                            i = !0
                        },
                        Array.from(o,
                            function () {
                                throw 2
                            })
                } catch (t) {}
                t.exports = function (t, e) {
                    if (!e && !i) return !1;
                    var n = !1;
                    try {
                        var o = [7],
                            a = o[r]();
                        a.next = function () {
                                return {
                                    done: n = !0
                                }
                            },
                            o[r] = function () {
                                return a
                            },
                            t(o)
                    } catch (t) {}
                    return n
                }
            },
            18: function (t, e) {
                t.exports = function (t) {
                    return "object" == typeof t ? null !== t : "function" == typeof t
                }
            },
            19: function (t, e) {
                var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
                "number" == typeof __g && (__g = n)
            },
            2: function (t, e, n) {
                "use strict";
                n.d(e, "c",
                        function () {
                            return r
                        }),
                    n.d(e, "d",
                        function () {
                            return i
                        }),
                    n.d(e, "b",
                        function () {
                            return o
                        }),
                    n.d(e, "a",
                        function () {
                            return a
                        });
                var r = "native",
                    i = "video",
                    o = "banner",
                    a = "adpod"
            },
            20: function (t, e, n) {
                var r = n(27),
                    i = n(81),
                    o = n(82),
                    a = Object.defineProperty;
                e.f = n(22) ? Object.defineProperty : function (t, e, n) {
                    if (r(t), e = o(e, !0), r(n), i) try {
                        return a(t, e, n)
                    } catch (t) {}
                    if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                    return "value" in n && (t[e] = n.value),
                        t
                }
            },
            21: function (t, e, n) {
                var r = n(20),
                    i = n(42);
                t.exports = n(22) ?
                    function (t, e, n) {
                        return r.f(t, e, i(1, n))
                    } : function (t, e, n) {
                        return t[e] = n,
                            t
                    }
            },
            22: function (t, e, n) {
                t.exports = !n(31)(function () {
                    return 7 != Object.defineProperty({},
                        "a", {
                            get: function () {
                                return 7
                            }
                        }).a
                })
            },
            23: function (t, e, n) {
                "use strict";
                e.a = function (t, e) {
                    return new

                    function (t, e) {
                        var n = e && e.src || "client",
                            i = t || 0;
                        this.bidderCode = e && e.bidder || "",
                            this.width = 0,
                            this.height = 0,
                            this.statusMessage = function () {
                                switch (i) {
                                    case 0:
                                        return "Pending";
                                    case 1:
                                        return "Bid available";
                                    case 2:
                                        return "Bid returned empty or error response";
                                    case 3:
                                        return "Bid timed out"
                                }
                            }(),
                            this.adId = r.getUniqueIdentifierStr(),
                            this.requestId = e && e.bidId,
                            this.mediaType = "banner",
                            this.source = n,
                            this.getStatusCode = function () {
                                return i
                            },
                            this.getSize = function () {
                                return this.width + "x" + this.height
                            }
                    }(t, e)
                };
                var r = n(0)
            },
            24: function (t, e, n) {
                var r = n(54);
                t.exports = function (t, e, n) {
                    if (r(t), void 0 === e) return t;
                    switch (n) {
                        case 1:
                            return function (n) {
                                return t.call(e, n)
                            };
                        case 2:
                            return function (n, r) {
                                return t.call(e, n, r)
                            };
                        case 3:
                            return function (n, r, i) {
                                return t.call(e, n, r, i)
                            }
                    }
                    return function () {
                        return t.apply(e, arguments)
                    }
                }
            },
            246: function (t, e, n) {
                n(247),
                    t.exports = n(16).String.includes
            },
            247: function (t, e, n) {
                "use strict";
                var r = n(15),
                    i = n(248),
                    o = "includes";
                r(r.P + r.F * n(250)(o), "String", {
                    includes: function (t, e) {
                        return !!~i(this, t, o).indexOf(t, 1 < arguments.length ? e : void 0)
                    }
                })
            },
            248: function (t, e, n) {
                var r = n(249),
                    i = n(33);
                t.exports = function (t, e, n) {
                    if (r(e)) throw TypeError("String#" + n + " doesn't accept regex!");
                    return String(i(t))
                }
            },
            249: function (t, e, n) {
                var r = n(18),
                    i = n(32),
                    o = n(14)("match");
                t.exports = function (t) {
                    var e;
                    return r(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" == i(t))
                }
            },
            25: function (t, e, n) {
                "use strict";
                n.d(e, "e",
                        function () {
                            return c
                        }),
                    n.d(e, "a",
                        function () {
                            return d
                        }),
                    e.g = function (t) {
                        return t && t.type &&
                            function (t) {
                                return !(!t || !o()(Object.keys(u), t)) || (Object(r.logError)("".concat(t, " nativeParam is not supported")), !1)
                            }(t.type) ? u[t.type] : t
                    },
                    e.f = function (t, e) {
                        var n = Object(r.getBidRequest)(t.requestId, e);
                        if (!n) return !1;
                        if (!Object(r.deepAccess)(t, "native.clickUrl")) return !1;
                        if (Object(r.deepAccess)(t, "native.image") && (!Object(r.deepAccess)(t, "native.image.height") || !Object(r.deepAccess)(t, "native.image.width"))) return !1;
                        if (Object(r.deepAccess)(t, "native.icon") && (!Object(r.deepAccess)(t, "native.icon.height") || !Object(r.deepAccess)(t, "native.icon.width"))) return !1;
                        var i = n.nativeParams;
                        if (!i) return !0;
                        var a = Object.keys(i).filter(function (t) {
                                return i[t].required
                            }),
                            s = Object.keys(t.native).filter(function (e) {
                                return t.native[e]
                            });
                        return a.every(function (t) {
                            return o()(s, t)
                        })
                    },
                    e.b = function (t, e) {
                        var n;
                        return "click" === t.action ? n = e.native && e.native.clickTrackers : (n = e.native && e.native.impressionTrackers, e.native && e.native.javascriptTrackers && Object(r.insertHtmlIntoIframe)(e.native.javascriptTrackers)),
                            (n || []).forEach(r.triggerPixel),
                            t.action
                    },
                    e.d = function (t, e) {
                        var n = {};
                        return Object.keys(t.native).forEach(function (i) {
                                var o = s.NATIVE_KEYS[i],
                                    a = l(t.native[i]);
                                Object(r.deepAccess)(e, "mediaTypes.native.".concat(i, ".sendId")) && (a = "".concat(o, ":").concat(t.adId)),
                                    o && a && (n[o] = a)
                            }),
                            n
                    },
                    e.c = function (t, e) {
                        var n = {
                            message: "assetResponse",
                            adId: t.adId,
                            assets: []
                        };
                        return t.assets.forEach(function (t) {
                                var i = Object(r.getKeyByValue)(s.NATIVE_KEYS, t),
                                    o = l(e.native[i]);
                                n.assets.push({
                                    key: i,
                                    value: o
                                })
                            }),
                            n
                    };
                var r = n(0),
                    i = n(9),
                    o = n.n(i);

                function a(t) {
                    return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                        function (t) {
                            return typeof t
                        } : function (t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                }
                var s = n(4),
                    c = [],
                    d = Object.keys(s.NATIVE_KEYS).map(function (t) {
                        return s.NATIVE_KEYS[t]
                    }),
                    u = {
                        image: {
                            image: {
                                required: !0
                            },
                            title: {
                                required: !0
                            },
                            sponsoredBy: {
                                required: !0
                            },
                            clickUrl: {
                                required: !0
                            },
                            body: {
                                required: !1
                            },
                            icon: {
                                required: !1
                            }
                        }
                    };

                function l(t) {
                    return "object" === a(t) && t.url ? t.url : t
                }
            },
            250: function (t, e, n) {
                var r = n(14)("match");
                t.exports = function (t) {
                    var e = /./;
                    try {
                        "/./" [t](e)
                    } catch (n) {
                        try {
                            return e[r] = !1,
                                !"/./" [t](e)
                        } catch (t) {}
                    }
                    return !0
                }
            },
            26: function (t, e, n) {
                "use strict";
                n.d(e, "a",
                    function () {
                        return A
                    });
                var r = n(0),
                    i = n(3),
                    o = n(9),
                    a = n.n(o);

                function s(t, e) {
                    return function (t) {
                            if (Array.isArray(t)) return t
                        }(t) ||
                        function (t, e) {
                            var n = [],
                                r = !0,
                                i = !1,
                                o = void 0;
                            try {
                                for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                            } catch (t) {
                                i = !0,
                                    o = t
                            } finally {
                                try {
                                    r || null == s.
                                    return || s.
                                    return()
                                } finally {
                                    if (i) throw o
                                }
                            }
                            return n
                        }(t, e) ||
                        function () {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance")
                        }()
                }

                function c() {
                    return (c = Object.assign ||
                        function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = arguments[e];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                            }
                            return t
                        }).apply(this, arguments)
                }
                i.b.setDefaults({
                    userSync: {
                        syncEnabled: !0,
                        pixelEnabled: !0,
                        syncsPerBidder: 5,
                        syncDelay: 3e3
                    }
                });
                var d, u, l, f, p, m, g, h = !r.isSafariBrowser() && r.cookiesAreEnabled(),
                    A = (d = {
                            config: i.b.getConfig("userSync"),
                            browserSupportsCookies: h
                        },
                        u = {},
                        l = {
                            image: [],
                            iframe: []
                        },
                        f = new Set, m = {
                            image: !(p = {}),
                            iframe: !1
                        },
                        g = d.config, i.b.getConfig("userSync",
                            function (t) {
                                g = c(g, t.userSync)
                            }), u.registerSync = function (t, e, n) {
                            return f.has(e) ? r.logMessage('already fired syncs for "'.concat(e, '", ignoring registerSync call')) : g.syncEnabled && r.isArray(l[t]) ? e ? 0 !== g.syncsPerBidder && Number(p[e]) >= g.syncsPerBidder ? r.logWarn('Number of user syncs exceeded for "'.concat(e, '"')) : u.canBidderRegisterSync(t, e) ? (l[t].push([e, n]), void(p = function (t, e) {
                                return t[e] ? t[e] += 1 : t[e] = 1,
                                    t
                            }(p, e))) : r.logWarn('Bidder "'.concat(e, '" not permitted to register their "').concat(t, '" userSync pixels.')) : r.logWarn("Bidder is required for registering sync") : r.logWarn('User sync type "'.concat(t, '" not supported'))
                        },
                        u.syncUsers = function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                            if (t) return setTimeout(v, Number(t));
                            v()
                        },
                        u.triggerUserSyncs = function () {
                            g.enableOverride && u.syncUsers()
                        },
                        u.canBidderRegisterSync = function (t, e) {
                            if (g.filterSettings) {
                                if (function (t, e) {
                                        var n = g.filterSettings;
                                        if (function (t, e) {
                                                if (t.all && t[e]) return r.logWarn('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(e, '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.')),
                                                    !1;
                                                var n = t.all ? t.all : t[e],
                                                    i = t.all ? "all" : e;
                                                if (!n) return !1;
                                                var o = n.filter,
                                                    a = n.bidders;
                                                return o && "include" !== o && "exclude" !== o ? (r.logWarn('UserSync "filterSettings.'.concat(i, ".filter\" setting '").concat(o, "' is not a valid option; use either 'include' or 'exclude'.")), !1) : !!("*" === a || Array.isArray(a) && 0 < a.length && a.every(function (t) {
                                                    return r.isStr(t) && "*" !== t
                                                })) || (r.logWarn('Detected an invalid setup in userSync "filterSettings.'.concat(i, ".bidders\"; use either '*' (to represent all bidders) or an array of bidders.")), !1)
                                            }(n, t)) {
                                            m[t] = !0;
                                            var i = n.all ? n.all : n[t],
                                                o = "*" === i.bidders ? [e] : i.bidders;
                                            return {
                                                include: function (t, e) {
                                                    return !a()(t, e)
                                                },
                                                exclude: function (t, e) {
                                                    return a()(t, e)
                                                }
                                            } [i.filter || "include"](o, e)
                                        }
                                        return !1
                                    }(t, e)) return !1
                            } else {
                                if (g.enabledBidders && g.enabledBidders.length && g.enabledBidders.indexOf(e) < 0) return !1;
                                if ("iframe" === t && !g.iframeEnabled && !m.iframe) return !1;
                                if ("image" === t && !g.pixelEnabled && !m.image) return !1
                            }
                            return !0
                        },
                        u);

                function v() {
                    if (g.syncEnabled && d.browserSupportsCookies) {
                        try {
                            (g.pixelEnabled || m.image) && y(l.image,
                                    function (t) {
                                        var e = s(t, 2),
                                            n = e[0],
                                            i = e[1];
                                        r.logMessage("Invoking image pixel user sync for bidder: ".concat(n)),
                                            r.triggerPixel(i)
                                    }),
                                (g.iframeEnabled || m.iframe) && y(l.iframe,
                                    function (t) {
                                        var e = s(t, 2),
                                            n = e[0],
                                            i = e[1];
                                        r.logMessage("Invoking iframe user sync for bidder: ".concat(n)),
                                            r.insertUserSyncIframe(i)
                                    })
                        } catch (t) {
                            return r.logError("Error firing user syncs", t)
                        }
                        l = {
                            image: [],
                            iframe: []
                        }
                    }
                }

                function y(t, e) {
                    r.shuffle(t).forEach(function (t) {
                        e(t),
                            f.add(t[0])
                    })
                }
            },
            27: function (t, e, n) {
                var r = n(18);
                t.exports = function (t) {
                    if (!r(t)) throw TypeError(t + " is not an object!");
                    return t
                }
            },
            28: function (t, e) {
                var n = {}.hasOwnProperty;
                t.exports = function (t, e) {
                    return n.call(t, e)
                }
            },
            29: function (t, e, n) {
                "use strict";
                n.d(e, "a",
                    function () {
                        return u
                    });
                var r, i, o = n(0),
                    a = n(37),
                    s = n(11),
                    c = n.n(s),
                    d = n(4),
                    u = (r = [], (i = {}).addWinningBid = function (t) {
                            var e = c()(r,
                                function (e) {
                                    return e.getAuctionId() === t.auctionId
                                });
                            e ? e.addWinningBid(t) : utils.logWarn("Auction not found when adding winning bid")
                        },
                        i.getAllWinningBids = function () {
                            return r.map(function (t) {
                                return t.getWinningBids()
                            }).reduce(o.flatten, [])
                        },
                        i.getBidsRequested = function () {
                            return r.map(function (t) {
                                return t.getBidRequests()
                            }).reduce(o.flatten, [])
                        },
                        i.getNoBids = function () {
                            return r.map(function (t) {
                                return t.getNoBids()
                            }).reduce(o.flatten, [])
                        },
                        i.getBidsReceived = function () {
                            return r.map(function (t) {
                                if (t.getAuctionStatus() === a.a) return t.getBidsReceived()
                            }).reduce(o.flatten, []).filter(function (t) {
                                return t
                            })
                        },
                        i.getAdUnits = function () {
                            return r.map(function (t) {
                                return t.getAdUnits()
                            }).reduce(o.flatten, [])
                        },
                        i.getAdUnitCodes = function () {
                            return r.map(function (t) {
                                return t.getAdUnitCodes()
                            }).reduce(o.flatten, []).filter(o.uniques)
                        },
                        i.createAuction = function (t) {
                            var e = t.adUnits,
                                n = t.adUnitCodes,
                                i = t.callback,
                                o = t.cbTimeout,
                                s = t.labels,
                                c = t.auctionId,
                                d = Object(a.h)({
                                    adUnits: e,
                                    adUnitCodes: n,
                                    callback: i,
                                    cbTimeout: o,
                                    labels: s,
                                    auctionId: c
                                });
                            return function (t) {
                                    r.push(t)
                                }(d),
                                d
                        },
                        i.findBidByAdId = function (t) {
                            return c()(r.map(function (t) {
                                    return t.getBidsReceived()
                                }).reduce(o.flatten, []),
                                function (e) {
                                    return e.adId === t
                                })
                        },
                        i.getStandardBidderAdServerTargeting = function () {
                            return Object(a.g)()[d.JSON_MAPPING.ADSERVER_TARGETING]
                        },
                        i.setStatusForBids = function (t, e) {
                            var n = i.findBidByAdId(t);
                            if (n && (n.status = e), n && e === d.BID_STATUS.BID_TARGETING_SET) {
                                var o = c()(r,
                                    function (t) {
                                        return t.getAuctionId() === n.auctionId
                                    });
                                o && o.setBidTargeting(n)
                            }
                        },
                        i.getLastAuctionId = function () {
                            return r.length && r[r.length - 1].getAuctionId()
                        },
                        i)
            },
            3: function (t, e, n) {
                "use strict";
                n.d(e, "a",
                        function () {
                            return g
                        }),
                    n.d(e, "b",
                        function () {
                            return E
                        });
                var r = n(41),
                    i = n(11),
                    o = n.n(i),
                    a = n(9),
                    s = n.n(a),
                    c = n(10);

                function d() {
                    return (d = Object.assign ||
                        function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = arguments[e];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                            }
                            return t
                        }).apply(this, arguments)
                }

                function u(t) {
                    return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                        function (t) {
                            return typeof t
                        } : function (t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                }
                var l = n(0),
                    f = n(4),
                    p = "TRUE" === (Object(c.d)(window.location.search)[f.DEBUG_MODE] || "").toUpperCase(),
                    m = window.location.origin,
                    g = "random",
                    h = {};
                h[g] = !0,
                    h.fixed = !0;
                var A, v, y, b = g,
                    w = {
                        LOW: "low",
                        MEDIUM: "medium",
                        HIGH: "high",
                        AUTO: "auto",
                        DENSE: "dense",
                        CUSTOM: "custom"
                    },
                    E = (y = [], _(), {
                        getConfig: function () {
                            if (arguments.length <= 1 && "function" != typeof (arguments.length <= 0 ? void 0 : arguments[0])) {
                                var t = arguments.length <= 0 ? void 0 : arguments[0];
                                return t ? l.deepAccess(v, t) : v
                            }
                            return function (t, e) {
                                var n = e;
                                return "string" != typeof t && (n = t, t = "*"),
                                    "function" == typeof n ? (y.push({
                                            topic: t,
                                            callback: n
                                        }),
                                        function () {
                                            y.splice(y.indexOf(e), 1)
                                        }) : void l.logError("listener must be a function")
                            }.apply(void 0, arguments)
                        },
                        setConfig: function (t) {
                            if ("object" === u(t)) {
                                var e = {};
                                Object.keys(t).forEach(function (n) {
                                        var r = t[n];
                                        "object" === u(A[n]) && "object" === u(r) && (r = d({},
                                                A[n], r)),
                                            e[n] = v[n] = r
                                    }),
                                    T(e)
                            } else l.logError("setConfig options must be an object")
                        },
                        setDefaults: function (t) {
                            "object" === u(A) ? (d(A, t), d(v, t)) : l.logError("defaults must be an object")
                        },
                        resetConfig: _
                    });

                function _() {
                    var t = {
                        _debug: p,
                        get debug() {
                            return this._debug
                        },
                        set debug(t) {
                            this._debug = t
                        },
                        _bidderTimeout: 3e3,
                        get bidderTimeout() {
                            return this._bidderTimeout
                        },
                        set bidderTimeout(t) {
                            this._bidderTimeout = t
                        },
                        _publisherDomain: m,
                        get publisherDomain() {
                            return this._publisherDomain
                        },
                        set publisherDomain(t) {
                            this._publisherDomain = t
                        },
                        _priceGranularity: w.MEDIUM,
                        set priceGranularity(t) {
                            n(t) && ("string" == typeof t ? this._priceGranularity = e(t) ? t : w.MEDIUM : "object" === u(t) && (this._customPriceBucket = t, this._priceGranularity = w.CUSTOM, l.logMessage("Using custom price granularity")))
                        },
                        get priceGranularity() {
                            return this._priceGranularity
                        },
                        _customPriceBucket: {},
                        get customPriceBucket() {
                            return this._customPriceBucket
                        },
                        _mediaTypePriceGranularity: {},
                        get mediaTypePriceGranularity() {
                            return this._mediaTypePriceGranularity
                        },
                        set mediaTypePriceGranularity(t) {
                            var r = this;
                            this._mediaTypePriceGranularity = Object.keys(t).reduce(function (i, o) {
                                return n(t[o]) ? "string" == typeof t ? i[o] = e(t[o]) ? t[o] : r._priceGranularity : "object" === u(t) && (i[o] = t[o], l.logMessage("Using custom price granularity for ".concat(o))) : l.logWarn("Invalid price granularity for media type: ".concat(o)),
                                    i
                            }, {})
                        },
                        _sendAllBids: !0,
                        get enableSendAllBids() {
                            return this._sendAllBids
                        },
                        set enableSendAllBids(t) {
                            this._sendAllBids = t
                        },
                        _useBidCache: !(A = {}),
                        get useBidCache() {
                            return this._useBidCache
                        },
                        set useBidCache(t) {
                            this._useBidCache = t
                        },
                        _bidderSequence: b,
                        get bidderSequence() {
                            return this._bidderSequence
                        },
                        set bidderSequence(t) {
                            h[t] ? this._bidderSequence = t : l.logWarn("Invalid order: ".concat(t, ". Bidder Sequence was not set."))
                        },
                        _timeoutBuffer: 400,
                        get timeoutBuffer() {
                            return this._timeoutBuffer
                        },
                        set timeoutBuffer(t) {
                            this._timeoutBuffer = t
                        },
                        _disableAjaxTimeout: !1,
                        get disableAjaxTimeout() {
                            return this._disableAjaxTimeout
                        },
                        set disableAjaxTimeout(t) {
                            this._disableAjaxTimeout = t
                        }
                    };

                    function e(t) {
                        return o()(Object.keys(w),
                            function (e) {
                                return t === w[e]
                            })
                    }

                    function n(t) {
                        if (!t) return l.logError("Prebid Error: no value passed to `setPriceGranularity()`"),
                            !1;
                        if ("string" == typeof t) e(t) || l.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");
                        else if ("object" === u(t) && !Object(r.b)(t)) return l.logError("Invalid custom price value passed to `setPriceGranularity()`"),
                            !1;
                        return !0
                    }
                    v && T(Object.keys(v).reduce(function (e, n) {
                            return v[n] !== t[n] && (e[n] = t[n] || {}),
                                e
                        }, {})),
                        v = t
                }

                function T(t) {
                    var e = Object.keys(t);
                    y.filter(function (t) {
                            return s()(e, t.topic)
                        }).forEach(function (e) {
                            e.callback(function (t, e, n) {
                                return e in t ? Object.defineProperty(t, e, {
                                        value: n,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : t[e] = n,
                                    t
                            }({},
                                e.topic, t[e.topic]))
                        }),
                        y.filter(function (t) {
                            return "*" === t.topic
                        }).forEach(function (e) {
                            return e.callback(t)
                        })
                }
            },
            30: function (t, e) {
                t.exports = {}
            },
            31: function (t, e) {
                t.exports = function (t) {
                    try {
                        return !!t()
                    } catch (t) {
                        return !0
                    }
                }
            },
            32: function (t, e) {
                var n = {}.toString;
                t.exports = function (t) {
                    return n.call(t).slice(8, -1)
                }
            },
            33: function (t, e) {
                t.exports = function (t) {
                    if (null == t) throw TypeError("Can't call method on  " + t);
                    return t
                }
            },
            34: function (t, e, n) {
                var r = n(45),
                    i = Math.min;
                t.exports = function (t) {
                    return 0 < t ? i(r(t), 9007199254740991) : 0
                }
            },
            35: function (t, e) {
                t.exports = function () {}
            },
            356: function (t, e, n) {
                n(357),
                    t.exports = n(16).Number.isInteger
            },
            357: function (t, e, n) {
                var r = n(15);
                r(r.S, "Number", {
                    isInteger: n(358)
                })
            },
            358: function (t, e, n) {
                var r = n(18),
                    i = Math.floor;
                t.exports = function (t) {
                    return !r(t) && isFinite(t) && i(t) === t
                }
            },
            36: function (t, e, n) {
                n(130),
                    t.exports = n(16).Array.findIndex
            },
            37: function (t, e, n) {
                "use strict";
                n.d(e, "b",
                        function () {
                            return E
                        }),
                    n.d(e, "a",
                        function () {
                            return _
                        }),
                    e.h = function (t) {
                        var e, n, i, a, s = t.adUnits,
                            u = t.adUnitCodes,
                            l = t.callback,
                            f = t.cbTimeout,
                            C = t.labels,
                            P = t.auctionId,
                            B = s,
                            j = C,
                            U = u,
                            N = [],
                            z = [],
                            M = [],
                            L = P || A.generateUUID(),
                            q = l,
                            V = f,
                            G = [],
                            W = new Set;

                        function F() {
                            return {
                                auctionId: L,
                                timestamp: e,
                                auctionEnd: n,
                                auctionStatus: i,
                                adUnits: B,
                                adUnitCodes: U,
                                labels: j,
                                bidderRequests: N,
                                noBids: M,
                                bidsReceived: z,
                                winningBids: G,
                                timeout: V
                            }
                        }

                        function H(t, e) {
                            if (e && clearTimeout(a), void 0 === n) {
                                var o = [];
                                t && (A.logMessage("Auction ".concat(L, " timedOut")), (o = function (t, e) {
                                        return N.map(function (t) {
                                            return (t.bids || []).filter(function (t) {
                                                return !e.has(t.bidder)
                                            })
                                        }).reduce(r.flatten, []).map(function (t) {
                                            return {
                                                bidId: t.bidId,
                                                bidder: t.bidder,
                                                adUnitCode: t.adUnitCode,
                                                auctionId: t.auctionId
                                            }
                                        })
                                    }(0, W)).length && y.emit(b.EVENTS.BID_TIMEOUT, o)),
                                    i = _,
                                    n = Date.now(),
                                    y.emit(b.EVENTS.AUCTION_END, F());
                                try {
                                    if (null != q) {
                                        var c = U,
                                            u = z.filter(A.bind.call(r.adUnitsFilter, this, c)).reduce(R, {});
                                        q.apply(pbjs, [u, t]),
                                            q = null
                                    }
                                } catch (t) {
                                    A.logError("Error executing bidsBackHandler", null, t)
                                } finally {
                                    o.length && v.callTimedOutBidders(s, o, V);
                                    var l = d.b.getConfig("userSync") || {};
                                    l.enableOverride || h(l.syncDelay)
                                }
                            }
                        }

                        function K() {
                            A.logInfo("Bids Received for Auction with id: ".concat(L), z),
                                i = _,
                                H(!1, !0)
                        }

                        function Y(t) {
                            W.add(t)
                        }
                        return {
                            addBidReceived: function (t) {
                                z = z.concat(t)
                            },
                            addNoBid: function (t) {
                                M = M.concat(t)
                            },
                            executeCallback: H,
                            callBids: function () {
                                var t = this;
                                i = w,
                                    e = Date.now();
                                var n = v.makeBidRequests(B, e, L, V, j);
                                A.logInfo("Bids Requested for Auction with id: ".concat(L), n),
                                    n.forEach(function (t) {
                                        !
                                        function (t) {
                                            N = N.concat(t)
                                        }(t)
                                    });
                                var s = {};
                                if (n.length < 1) A.logWarn("No valid bid requests returned for auction"),
                                    K();
                                else {
                                    var u = {
                                        bidRequests: n,
                                        run: function () {
                                            !
                                            function () {
                                                var t = H.bind(null, !0),
                                                    e = setTimeout(t, V);
                                                a = e
                                            }(),
                                            i = E,
                                                y.emit(b.EVENTS.AUCTION_INIT, F());
                                            var e = function (t, e) {
                                                var n = 0,
                                                    i = !1,
                                                    a = new Set,
                                                    s = {};

                                                function u() {
                                                    n--,
                                                    i && 0 === n && t()
                                                }
                                                return {
                                                    addBidResponse: function (t, i) {
                                                        s[i.requestId] = !0,
                                                            n++;
                                                        var a = function (t) {
                                                            var e = t.adUnitCode,
                                                                n = t.bid,
                                                                i = t.bidderRequest,
                                                                a = t.auctionId,
                                                                s = i.start,
                                                                u = g({},
                                                                    n, {
                                                                        auctionId: a,
                                                                        responseTimestamp: Object(r.timestamp)(),
                                                                        requestTimestamp: s,
                                                                        cpm: parseFloat(n.cpm) || 0,
                                                                        bidder: n.bidderCode,
                                                                        adUnitCode: e
                                                                    });
                                                            u.timeToRespond = u.responseTimestamp - u.requestTimestamp,
                                                                y.emit(b.EVENTS.BID_ADJUSTMENT, u);
                                                            var l = i.bids && p()(i.bids,
                                                                    function (t) {
                                                                        return t.adUnitCode == e
                                                                    }),
                                                                f = l && l.renderer;
                                                            f && f.url && (u.renderer = c.a.install({
                                                                url: f.url
                                                            }), u.renderer.setRender(f.render));
                                                            var m = d.b.getConfig("mediaTypePriceGranularity.".concat(n.mediaType)),
                                                                h = Object(o.a)(u.cpm, "object" ===
                                                                    function (t) {
                                                                        return ("function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                                                                            function (t) {
                                                                                return typeof t
                                                                            } : function (t) {
                                                                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                                                            })(t)
                                                                    }(m) ? m : d.b.getConfig("customPriceBucket"), d.b.getConfig("currency.granularityMultiplier"));
                                                            return u.pbLg = h.low,
                                                                u.pbMg = h.med,
                                                                u.pbHg = h.high,
                                                                u.pbAg = h.auto,
                                                                u.pbDg = h.dense,
                                                                u.pbCg = h.custom,
                                                                u
                                                        }({
                                                            adUnitCode: t,
                                                            bid: i,
                                                            bidderRequest: this,
                                                            auctionId: e.getAuctionId()
                                                        });
                                                        "video" === a.mediaType ?
                                                            function (t, e, n, i) {
                                                                var o = !0,
                                                                    a = Object(r.getBidRequest)(e.requestId, [n]),
                                                                    s = a && Object(r.deepAccess)(a, "mediaTypes.video"),
                                                                    c = s && Object(r.deepAccess)(s, "context");
                                                                d.b.getConfig("cache.url") && c !== m.a && (e.videoCacheKey ? e.vastUrl || (A.logError("videoCacheKey specified but not required vastUrl for video bid"), o = !1) : (o = !1, D(t, e, i, a))),
                                                                    o && (x(t, e), i())
                                                            }(e, a, this, u) : (x(e, a), u())
                                                    },
                                                    adapterDone: function () {
                                                        a.add(this),
                                                            i = e.getBidRequests().every(function (t) {
                                                                return a.has(t)
                                                            }),
                                                            this.bids.forEach(function (t) {
                                                                s[t.bidId] || (e.addNoBid(t), y.emit(b.EVENTS.NO_BID, t))
                                                            }),
                                                            i && 0 === n && t()
                                                    }
                                                }
                                            }(K, t);
                                            v.callBids(B, n,
                                                function () {
                                                    for (var t = arguments.length,
                                                            n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                                    O.apply({
                                                            dispatch: e.addBidResponse,
                                                            bidderRequest: this
                                                        },
                                                        n)
                                                },
                                                e.adapterDone, {
                                                    request: function (t, e) {
                                                        f(S, e),
                                                            f(s, t),
                                                            I[t] || (I[t] = {
                                                                SRA: !0,
                                                                origin: e
                                                            }),
                                                            1 < s[t] && (I[t].SRA = !1)
                                                    },
                                                    done: function (t) {
                                                        S[t]--,
                                                            k[0] && l(k[0]) && k.shift()
                                                    }
                                                },
                                                V, Y)
                                        }
                                    };
                                    l(u) || (A.logWarn("queueing auction due to limited endpoint capacity"), k.push(u))
                                }

                                function l(t) {
                                    var e = !0,
                                        n = d.b.getConfig("maxRequestsPerOrigin") || T;
                                    return t.bidRequests.some(function (t) {
                                            var r = 1,
                                                i = void 0 !== t.src && t.src === b.S2S.SRC ? "s2s" : t.bidderCode;
                                            return I[i] && (!1 === I[i].SRA && (r = Math.min(t.bids.length, n)), S[I[i].origin] + r > n && (e = !1)),
                                                !e
                                        }),
                                        e && t.run(),
                                        e
                                }

                                function f(t, e) {
                                    void 0 === t[e] ? t[e] = 1 : t[e]++
                                }
                            },
                            addWinningBid: function (t) {
                                G = G.concat(t),
                                    v.callBidWonBidder(t.bidder, t, s)
                            },
                            setBidTargeting: function (t) {
                                v.callSetTargetingBidder(t.bidder, t)
                            },
                            getWinningBids: function () {
                                return G
                            },
                            getTimeout: function () {
                                return V
                            },
                            getAuctionId: function () {
                                return L
                            },
                            getAuctionStatus: function () {
                                return i
                            },
                            getAdUnits: function () {
                                return B
                            },
                            getAdUnitCodes: function () {
                                return U
                            },
                            getBidRequests: function () {
                                return N
                            },
                            getBidsReceived: function () {
                                return z
                            },
                            getNoBids: function () {
                                return M
                            }
                        }
                    },
                    n.d(e, "c",
                        function () {
                            return O
                        }),
                    e.f = C,
                    e.d = x,
                    n.d(e, "e",
                        function () {
                            return D
                        }),
                    e.g = P;
                var r = n(0),
                    i = n(10),
                    o = n(41),
                    a = n(25),
                    s = n(62),
                    c = n(12),
                    d = n(3),
                    u = n(26),
                    l = n(13),
                    f = n(11),
                    p = n.n(f),
                    m = n(49);

                function g() {
                    return (g = Object.assign ||
                        function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = arguments[e];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                            }
                            return t
                        }).apply(this, arguments)
                }
                var h = u.a.syncUsers,
                    A = n(0),
                    v = n(7).
                default,
                y = n(8),
                    b = n(4),
                    w = "started",
                    E = "inProgress",
                    _ = "completed";
                y.on(b.EVENTS.BID_ADJUSTMENT,
                    function (t) {
                        !
                        function (t) {
                            var e, n = t.bidderCode,
                                r = t.cpm;
                            if (pbjs.bidderSettings && (n && pbjs.bidderSettings[n] && "function" == typeof pbjs.bidderSettings[n].bidCpmAdjustment ? e = pbjs.bidderSettings[n].bidCpmAdjustment : pbjs.bidderSettings[b.JSON_MAPPING.BD_SETTING_STANDARD] && "function" == typeof pbjs.bidderSettings[b.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (e = pbjs.bidderSettings[b.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment), e)) try {
                                r = e(t.cpm, g({},
                                    t))
                            } catch (t) {
                                A.logError("Error during bid adjustment", "bidmanager.js", t)
                            }
                            0 <= r && (t.cpm = r)
                        }(t)
                    });
                var T = 4,
                    S = {},
                    I = {},
                    k = [],
                    O = Object(l.b)("async",
                        function (t, e) {
                            this.dispatch.call(this.bidderRequest, t, e)
                        },
                        "addBidResponse");

                function C(t, e) {
                    e.timeToRespond > t.getTimeout() + d.b.getConfig("timeoutBuffer") && t.executeCallback(!0)
                }

                function x(t, e) {
                    var n = t.getBidRequests(),
                        r = p()(n,
                            function (t) {
                                return t.bidderCode === e.bidderCode
                            });
                    !
                    function (t, e) {
                        var n;
                        if (t.bidderCode && (0 < t.cpm || t.dealId)) {
                            var r = p()(e.bids,
                                function (e) {
                                    return e.adUnitCode === t.adUnitCode
                                });
                            n = function (t, e, n) {
                                if (!e) return {};
                                var r = {},
                                    i = pbjs.bidderSettings;
                                i && (B(r, P(e.mediaType, t), e), t && i[t] && i[t][b.JSON_MAPPING.ADSERVER_TARGETING] && (B(r, i[t], e), e.sendStandardTargeting = i[t].sendStandardTargeting));
                                return e.native && (r = g({},
                                        r, Object(a.d)(e, n))),
                                    r
                            }(t.bidderCode, t, r)
                        }
                        t.adserverTargeting = g(t.adserverTargeting || {},
                            n)
                    }(e, r),
                    y.emit(b.EVENTS.BID_RESPONSE, e),
                        t.addBidReceived(e),
                        C(t, e)
                }
                var D = Object(l.b)("async",
                    function (t, e, n, r) {
                        Object(s.b)([e],
                            function (r, i) {
                                r ? (A.logWarn("Failed to save to the video cache: ".concat(r, ". Video bid must be discarded.")), C(t, e)) : "" === i[0].uuid ? (A.logWarn("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."), C(t, e)) : (e.videoCacheKey = i[0].uuid, e.vastUrl || (e.vastUrl = Object(s.a)(e.videoCacheKey)), x(t, e), n())
                            })
                    },
                    "callPrebidCache");

                function P(t, e) {
                    function n(t, e) {
                        return {
                            key: t,
                            val: "function" == typeof e ?
                                function (t) {
                                    return e(t)
                                } : function (t) {
                                    return Object(r.getValue)(t, e)
                                }
                        }
                    }
                    var o = b.TARGETING_KEYS,
                        a = d.b.getConfig("mediaTypePriceGranularity.".concat(t)),
                        s = "string" == typeof t && a ? "string" == typeof a ? a : "custom" : d.b.getConfig("priceGranularity"),
                        c = pbjs.bidderSettings;
                    if (c[b.JSON_MAPPING.BD_SETTING_STANDARD] || (c[b.JSON_MAPPING.BD_SETTING_STANDARD] = {}), c[b.JSON_MAPPING.BD_SETTING_STANDARD][b.JSON_MAPPING.ADSERVER_TARGETING] || (c[b.JSON_MAPPING.BD_SETTING_STANDARD][b.JSON_MAPPING.ADSERVER_TARGETING] = [n(o.BIDDER, "bidderCode"), n(o.AD_ID, "adId"), n(o.PRICE_BUCKET,
                            function (t) {
                                return s === b.GRANULARITY_OPTIONS.AUTO ? t.pbAg : s === b.GRANULARITY_OPTIONS.DENSE ? t.pbDg : s === b.GRANULARITY_OPTIONS.LOW ? t.pbLg : s === b.GRANULARITY_OPTIONS.MEDIUM ? t.pbMg : s === b.GRANULARITY_OPTIONS.HIGH ? t.pbHg : s === b.GRANULARITY_OPTIONS.CUSTOM ? t.pbCg : void 0
                            }), n(o.SIZE, "size"), n(o.DEAL, "dealId"), n(o.SOURCE, "source"), n(o.FORMAT, "mediaType")]), "video" === t) {
                        var u = c[b.JSON_MAPPING.BD_SETTING_STANDARD][b.JSON_MAPPING.ADSERVER_TARGETING];
                        if ([o.UUID, o.CACHE_ID].forEach(function (t) {
                                void 0 === p()(u,
                                    function (e) {
                                        return e.key === t
                                    }) && u.push(n(t, "videoCacheKey"))
                            }), d.b.getConfig("cache.url") && (!e || !1 !== A.deepAccess(c, "".concat(e, ".sendStandardTargeting")))) {
                            var l = Object(i.c)(d.b.getConfig("cache.url"));
                            void 0 === p()(u,
                                function (t) {
                                    return t.key === o.CACHE_HOST
                                }) && u.push(n(o.CACHE_HOST,
                                function (t) {
                                    return A.deepAccess(t, "adserverTargeting.".concat(o.CACHE_HOST)) ? t.adserverTargeting[o.CACHE_HOST] : l.hostname
                                }))
                        }
                    }
                    return c[b.JSON_MAPPING.BD_SETTING_STANDARD]
                }

                function B(t, e, n) {
                    var r = e[b.JSON_MAPPING.ADSERVER_TARGETING];
                    return n.size = n.getSize(),
                        A._each(r,
                            function (r) {
                                var i = r.key,
                                    o = r.val;
                                if (t[i] && A.logWarn("The key: " + i + " is getting ovewritten"), A.isFn(o)) try {
                                    o = o(n)
                                } catch (r) {
                                    A.logError("bidmanager", "ERROR", r)
                                }(void 0 === e.suppressEmptyKeys || !0 !== e.suppressEmptyKeys) && i !== b.TARGETING_KEYS.DEAL || !A.isEmptyStr(o) && null != o ? t[i] = o : A.logInfo("suppressing empty key '" + i + "' from adserver targeting")
                            }),
                        t
                }

                function R(t, e) {
                    return t[e.adUnitCode] || (t[e.adUnitCode] = {
                            bids: []
                        }),
                        t[e.adUnitCode].bids.push(e),
                        t
                }
            },
            38: function (t, e, n) {
                "use strict";
                e.a = function () {
                        return window.pbjs
                    },
                    window.pbjs = window.pbjs || {},
                    window.pbjs.cmd = window.pbjs.cmd || [],
                    window.pbjs.que = window.pbjs.que || []
            },
            39: function (t, e, n) {
                var r = n(24),
                    i = n(71),
                    o = n(72),
                    a = n(27),
                    s = n(34),
                    c = n(73),
                    d = {},
                    u = {};
                (e = t.exports = function (t, e, n, l, f) {
                    var p, m, g, h, A = f ?
                        function () {
                            return t
                        } : c(t),
                        v = r(n, l, e ? 2 : 1),
                        y = 0;
                    if ("function" != typeof A) throw TypeError(t + " is not iterable!");
                    if (o(A)) {
                        for (p = s(t.length); y < p; y++)
                            if ((h = e ? v(a(m = t[y])[0], m[1]) : v(t[y])) === d || h === u) return h
                    } else
                        for (g = A.call(t); !(m = g.next()).done;)
                            if ((h = i(g, v, m.value, e)) === d || h === u) return h
                }).BREAK = d,
                    e.RETURN = u
            },
            4: function (t, e) {
                t.exports = {
                    JSON_MAPPING: {
                        PL_CODE: "code",
                        PL_SIZE: "sizes",
                        PL_BIDS: "bids",
                        BD_BIDDER: "bidder",
                        BD_ID: "paramsd",
                        BD_PL_ID: "placementId",
                        ADSERVER_TARGETING: "adserverTargeting",
                        BD_SETTING_STANDARD: "standard"
                    },
                    DEBUG_MODE: "pbjs_debug",
                    STATUS: {
                        GOOD: 1,
                        NO_BID: 2
                    },
                    CB: {
                        TYPE: {
                            ALL_BIDS_BACK: "allRequestedBidsBack",
                            AD_UNIT_BIDS_BACK: "adUnitBidsBack",
                            BID_WON: "bidWon",
                            REQUEST_BIDS: "requestBids"
                        }
                    },
                    EVENTS: {
                        AUCTION_INIT: "auctionInit",
                        AUCTION_END: "auctionEnd",
                        BID_ADJUSTMENT: "bidAdjustment",
                        BID_TIMEOUT: "bidTimeout",
                        BID_REQUESTED: "bidRequested",
                        BID_RESPONSE: "bidResponse",
                        NO_BID: "noBid",
                        BID_WON: "bidWon",
                        BIDDER_DONE: "bidderDone",
                        SET_TARGETING: "setTargeting",
                        REQUEST_BIDS: "requestBids",
                        ADD_AD_UNITS: "addAdUnits",
                        AD_RENDER_FAILED: "adRenderFailed"
                    },
                    AD_RENDER_FAILED_REASON: {
                        PREVENT_WRITING_ON_MAIN_DOCUMENT: "preventWritingOnMainDocuemnt",
                        NO_AD: "noAd",
                        EXCEPTION: "exception",
                        CANNOT_FIND_AD: "cannotFindAd",
                        MISSING_DOC_OR_ADID: "missingDocOrAdid"
                    },
                    EVENT_ID_PATHS: {
                        bidWon: "adUnitCode"
                    },
                    GRANULARITY_OPTIONS: {
                        LOW: "low",
                        MEDIUM: "medium",
                        HIGH: "high",
                        AUTO: "auto",
                        DENSE: "dense",
                        CUSTOM: "custom"
                    },
                    TARGETING_KEYS: {
                        BIDDER: "hb_bidder",
                        AD_ID: "hb_adid",
                        PRICE_BUCKET: "hb_pb",
                        SIZE: "hb_size",
                        DEAL: "hb_deal",
                        SOURCE: "hb_source",
                        FORMAT: "hb_format",
                        UUID: "hb_uuid",
                        CACHE_ID: "hb_cache_id",
                        CACHE_HOST: "hb_cache_host"
                    },
                    NATIVE_KEYS: {
                        title: "hb_native_title",
                        body: "hb_native_body",
                        body2: "hb_native_body2",
                        privacyLink: "hb_native_privacy",
                        privacyIcon: "hb_native_privicon",
                        sponsoredBy: "hb_native_brand",
                        image: "hb_native_image",
                        icon: "hb_native_icon",
                        clickUrl: "hb_native_linkurl",
                        displayUrl: "hb_native_displayurl",
                        cta: "hb_native_cta",
                        rating: "hb_native_rating",
                        address: "hb_native_address",
                        downloads: "hb_native_downloads",
                        likes: "hb_native_likes",
                        phone: "hb_native_phone",
                        price: "hb_native_price",
                        salePrice: "hb_native_saleprice"
                    },
                    S2S: {
                        SRC: "s2s",
                        DEFAULT_ENDPOINT: "https://prebid.adnxs.com/pbs/v1/openrtb2/auction",
                        SYNCED_BIDDERS_KEY: "pbjsSyncs"
                    },
                    BID_STATUS: {
                        BID_TARGETING_SET: "targetingSet",
                        RENDERED: "rendered"
                    }
                }
            },
            40: function (t, e, n) {
                "use strict";
                e.a = function (t) {
                    var e = t;
                    return {
                        callBids: function () {},
                        setBidderCode: function (t) {
                            e = t
                        },
                        getBidderCode: function () {
                            return e
                        }
                    }
                }
            },
            41: function (t, e, n) {
                "use strict";
                n.d(e, "a",
                        function () {
                            return f
                        }),
                    n.d(e, "b",
                        function () {
                            return m
                        });
                var r = n(11),
                    i = n.n(r),
                    o = n(0),
                    a = 2,
                    s = {
                        buckets: [{
                            min: 0,
                            max: 5,
                            increment: .5
                        }]
                    },
                    c = {
                        buckets: [{
                            min: 0,
                            max: 20,
                            increment: .1
                        }]
                    },
                    d = {
                        buckets: [{
                            min: 0,
                            max: 20,
                            increment: .01
                        }]
                    },
                    u = {
                        buckets: [{
                                min: 0,
                                max: 3,
                                increment: .01
                            },
                            {
                                min: 3,
                                max: 8,
                                increment: .05
                            },
                            {
                                min: 8,
                                max: 20,
                                increment: .5
                            }
                        ]
                    },
                    l = {
                        buckets: [{
                                min: 0,
                                max: 5,
                                increment: .05
                            },
                            {
                                min: 5,
                                max: 10,
                                increment: .1
                            },
                            {
                                min: 10,
                                max: 20,
                                increment: .5
                            }
                        ]
                    };

                function f(t, e) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1,
                        r = parseFloat(t);
                    return isNaN(r) && (r = ""), {
                        low: "" === r ? "" : p(t, s, n),
                        med: "" === r ? "" : p(t, c, n),
                        high: "" === r ? "" : p(t, d, n),
                        auto: "" === r ? "" : p(t, l, n),
                        dense: "" === r ? "" : p(t, u, n),
                        custom: "" === r ? "" : p(t, e, n)
                    }
                }

                function p(t, e, n) {
                    var r = "";
                    if (!m(e)) return r;
                    var o = e.buckets.reduce(function (t, e) {
                            return t.max > e.max ? t : e
                        }, {
                            max: 0
                        }),
                        s = i()(e.buckets,
                            function (e) {
                                if (t > o.max * n) {
                                    var i = e.precision;
                                    void 0 === i && (i = a),
                                        r = (e.max * n).toFixed(i)
                                } else if (t <= e.max * n && t >= e.min * n) return e
                            });
                    return s && (r = function (t, e, n) {
                            var r = void 0 !== e.precision ? e.precision : a,
                                i = e.increment * n,
                                o = e.min * n,
                                s = Math.pow(10, r + 2),
                                c = (t * s - o * s) / (i * s),
                                d = Math.floor(c) * i + o;
                            return (d = Number(d.toFixed(10))).toFixed(r)
                        }(t, s, n)),
                        r
                }

                function m(t) {
                    if (o.isEmpty(t) || !t.buckets || !Array.isArray(t.buckets)) return !1;
                    var e = !0;
                    return t.buckets.forEach(function (t) {
                            void 0 !== t.min && t.max && t.increment || (e = !1)
                        }),
                        e
                }
            },
            42: function (t, e) {
                t.exports = function (t, e) {
                    return {
                        enumerable: !(1 & t),
                        configurable: !(2 & t),
                        writable: !(4 & t),
                        value: e
                    }
                }
            },
            43: function (t, e, n) {
                var r = n(24),
                    i = n(56),
                    o = n(44),
                    a = n(34),
                    s = n(83);
                t.exports = function (t, e) {
                    var n = 1 == t,
                        c = 2 == t,
                        d = 3 == t,
                        u = 4 == t,
                        l = 6 == t,
                        f = 5 == t || l,
                        p = e || s;
                    return function (e, s, m) {
                        for (var g, h, A = o(e), v = i(A), y = r(s, m, 3), b = a(v.length), w = 0, E = n ? p(e, b) : c ? p(e, 0) : void 0; w < b; w++)
                            if ((f || w in v) && (h = y(g = v[w], w, A), t))
                                if (n) E[w] = h;
                                else if (h) switch (t) {
                            case 3:
                                return !0;
                            case 5:
                                return g;
                            case 6:
                                return w;
                            case 2:
                                E.push(g)
                        } else if (u) return !1;
                        return l ? -1 : d || u ? u : E
                    }
                }
            },
            44: function (t, e, n) {
                var r = n(33);
                t.exports = function (t) {
                    return Object(r(t))
                }
            },
            45: function (t, e) {
                var n = Math.ceil,
                    r = Math.floor;
                t.exports = function (t) {
                    return isNaN(t = +t) ? 0 : (0 < t ? r : n)(t)
                }
            },
            46: function (t, e) {
                var n = 0,
                    r = Math.random();
                t.exports = function (t) {
                    return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
                }
            },
            47: function (t, e, n) {
                var r = n(56),
                    i = n(33);
                t.exports = function (t) {
                    return r(i(t))
                }
            },
            48: function (t, e, n) {
                "use strict";
                e.a = o,
                    n.d(e, "b",
                        function () {
                            return a
                        });
                var r = n(0);

                function i() {
                    return (i = Object.assign ||
                        function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = arguments[e];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                            }
                            return t
                        }).apply(this, arguments)
                }

                function o(t) {
                    function e() {
                        var e = function () {
                                var e, o = [];
                                do {
                                    try {
                                        e = e ? e.parent : t;
                                        try {
                                            var a = e == t.top,
                                                s = {
                                                    referrer: e.document.referrer || null,
                                                    location: e.location.href || null,
                                                    isTop: a
                                                };
                                            a && (s = i(s, {
                                                    canonicalUrl: n(e.document)
                                                })),
                                                o.push(s)
                                        } catch (a) {
                                            o.push({
                                                    referrer: null,
                                                    location: null,
                                                    isTop: e == t.top
                                                }),
                                                Object(r.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location")
                                        }
                                    } catch (a) {
                                        return o.push({
                                                referrer: null,
                                                location: null,
                                                isTop: !1
                                            }),
                                            o
                                    }
                                } while (e != t.top);
                                return o
                            }(),
                            o = function () {
                                try {
                                    if (!t.location.ancestorOrigins) return;
                                    return t.location.ancestorOrigins
                                } catch (t) {}
                            }();
                        if (o)
                            for (var a = 0,
                                    s = o.length; a < s; a++) e[a].ancestor = o[a];
                        return e
                    }

                    function n(t) {
                        try {
                            var e = t.querySelector("link[rel='canonical']");
                            if (null !== e) return e.href
                        } catch (t) {}
                        return null
                    }
                    return function () {
                        try {
                            var t, n = e(),
                                r = n.length - 1,
                                i = null !== n[r].location || 0 < r && null !== n[r - 1].referrer,
                                o = function (t) {
                                    var e, n = [],
                                        r = null,
                                        i = null,
                                        o = null,
                                        a = null,
                                        s = null;
                                    for (e = t.length - 1; 0 <= e; e--) {
                                        try {
                                            r = t[e].location
                                        } catch (t) {}
                                        if (r) n.push(r),
                                            s = s || r;
                                        else if (0 !== e) {
                                            i = t[e - 1];
                                            try {
                                                o = i.referrer,
                                                    a = i.ancestor
                                            } catch (t) {}
                                            o ? (n.push(o), s = s || o) : a ? (n.push(a), s = s || a) : n.push(null)
                                        } else n.push(null)
                                    }
                                    return {
                                        stack: n,
                                        detectedRefererUrl: s
                                    }
                                }(n);
                            return n[n.length - 1].canonicalUrl && (t = n[n.length - 1].canonicalUrl), {
                                referer: o.detectedRefererUrl,
                                reachedTop: i,
                                numIframes: r,
                                stack: o.stack,
                                canonicalUrl: t
                            }
                        } catch (t) {}
                    }
                }
                var a = o(window)
            },
            49: function (t, e, n) {
                "use strict";
                n.d(e, "a",
                        function () {
                            return s
                        }),
                    e.c = function (t, e) {
                        var n = Object(r.getBidRequest)(t.requestId, e),
                            i = n && Object(r.deepAccess)(n, "mediaTypes.video"),
                            o = i && Object(r.deepAccess)(i, "context");
                        return c(t, n, i, o)
                    },
                    n.d(e, "b",
                        function () {
                            return c
                        }),
                    n(7);
                var r = n(0),
                    i = n(3),
                    o = n(9),
                    a = (n.n(o), n(13)),
                    s = "outstream",
                    c = Object(a.b)("sync",
                        function (t, e, n, o) {
                            return !e || n && o !== s ? i.b.getConfig("cache.url") || !t.vastXml || t.vastUrl ? !(!t.vastUrl && !t.vastXml) : (Object(r.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), !1) : o !== s || !(!t.renderer && !e.renderer)
                        },
                        "checkVideoBidSetup")
            },
            5: function (t, e, n) {
                "use strict";
                n.d(e, "a",
                        function () {
                            return d
                        }),
                    e.b = u;
                var r = n(10),
                    i = n(3);

                function o() {
                    return (o = Object.assign ||
                        function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = arguments[e];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                            }
                            return t
                        }).apply(this, arguments)
                }

                function a(t) {
                    return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                        function (t) {
                            return typeof t
                        } : function (t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                }
                var s = n(0),
                    c = 4,
                    d = u();

                function u() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 3e3,
                        e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                        n = e.request,
                        d = e.done;
                    return function (e, u, l) {
                        var f = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
                        try {
                            var p, m = f.method || (l ? "POST" : "GET"),
                                g = document.createElement("a");
                            g.href = e;
                            var h = "object" === a(u) && null !== u ? u : {
                                success: function () {
                                    s.logMessage("xhr success")
                                },
                                error: function (t) {
                                    s.logError("xhr error", null, t)
                                }
                            };
                            if ("function" == typeof u && (h.success = u), (p = new window.XMLHttpRequest).onreadystatechange = function () {
                                    if (p.readyState === c) {
                                        "function" == typeof d && d(g.origin);
                                        var t = p.status;
                                        200 <= t && t < 300 || 304 === t ? h.success(p.responseText, p) : h.error(p.statusText, p)
                                    }
                                },
                                i.b.getConfig("disableAjaxTimeout") || (p.ontimeout = function () {
                                    s.logError("  xhr timeout after ", p.timeout, "ms")
                                }), "GET" === m && l) {
                                var A = Object(r.c)(e, f);
                                o(A.search, l),
                                    e = Object(r.a)(A)
                            }
                            p.open(m, e, !0),
                                i.b.getConfig("disableAjaxTimeout") || (p.timeout = t),
                                f.withCredentials && (p.withCredentials = !0),
                                s._each(f.customHeaders,
                                    function (t, e) {
                                        p.setRequestHeader(e, t)
                                    }),
                                f.preflight && p.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                                p.setRequestHeader("Content-Type", f.contentType || "text/plain"),
                                "function" == typeof n && n(g.origin),
                                "POST" === m && l ? p.send(l) : p.send()
                        } catch (e) {
                            s.logError("xhr construction", e)
                        }
                    }
                }
            },
            50: function (t, e, n) {
                "use strict";
                e.a = function (t, e) {
                        if (e && t)
                            if (i()(s, e)) {
                                if (!a[t]) {
                                    o.logWarn("module ".concat(e, " is loading external JavaScript"));
                                    var n = document.createElement("script");
                                    n.type = "text/javascript",
                                        n.async = !0,
                                        n.src = t,
                                        o.insertElement(n),
                                        a[t] = !0
                                }
                            } else o.logError("".concat(e, " not whitelisted for loading external JavaScript"));
                        else o.logError("cannot load external script without url and moduleCode")
                    },
                    e.b = function (t, e, n) {
                        t ? n ? a[t] ? e && "function" == typeof e && (a[t].loaded ? e() : a[t].callbacks.push(e)) : (a[t] = {
                                loaded: !1,
                                callbacks: []
                            },
                            e && "function" == typeof e && a[t].callbacks.push(e), c(t,
                                function () {
                                    a[t].loaded = !0;
                                    try {
                                        for (var e = 0; e < a[t].callbacks.length; e++) a[t].callbacks[e]()
                                    } catch (e) {
                                        o.logError("Error executing callback", "adloader.js:loadScript", e)
                                    }
                                })) : c(t, e) : o.logError("Error attempting to request empty URL", "adloader.js:loadScript")
                    };
                var r = n(9),
                    i = n.n(r),
                    o = n(0),
                    a = {},
                    s = ["criteo"];

                function c(t, e) {
                    var n = document.createElement("script");
                    n.type = "text/javascript",
                        n.async = !0,
                        e && "function" == typeof e && (n.readyState ? n.onreadystatechange = function () {
                            "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null, e())
                        } : n.onload = function () {
                            e()
                        }),
                        n.src = t;
                    var r = document.getElementsByTagName("head");
                    (r = r.length ? r : document.getElementsByTagName("body")).length && (r = r[0]).insertBefore(n, r.firstChild)
                }
            },
            51: function (t, e, n) {
                "use strict";

                function r() {
                    return this
                }
                var i = n(58),
                    o = n(15),
                    a = n(138),
                    s = n(21),
                    c = n(30),
                    d = n(139),
                    u = n(53),
                    l = n(144),
                    f = n(14)("iterator"),
                    p = !([].keys && "next" in [].keys()),
                    m = "values";
                t.exports = function (t, e, n, g, h, A, v) {
                    function y(t) {
                        if (!p && t in I) return I[t];
                        switch (t) {
                            case "keys":
                            case m:
                                return function () {
                                    return new n(this, t)
                                }
                        }
                        return function () {
                            return new n(this, t)
                        }
                    }
                    d(n, e, g);
                    var b, w, E, _ = e + " Iterator",
                        T = h == m,
                        S = !1,
                        I = t.prototype,
                        k = I[f] || I["@@iterator"] || h && I[h],
                        O = k || y(h),
                        C = h ? T ? y("entries") : O : void 0,
                        x = "Array" == e && I.entries || k;
                    if (x && (E = l(x.call(new t))) !== Object.prototype && E.next && (u(E, _, !0), i || "function" == typeof E[f] || s(E, f, r)), T && k && k.name !== m && (S = !0, O = function () {
                            return k.call(this)
                        }), i && !v || !p && !S && I[f] || s(I, f, O), c[e] = O, c[_] = r, h)
                        if (b = {
                                values: T ? O : y(m),
                                keys: A ? O : y("keys"),
                                entries: C
                            },
                            v)
                            for (w in b) w in I || a(I, w, b[w]);
                        else o(o.P + o.F * (p || S), e, b);
                    return b
                }
            },
            52: function (t, e, n) {
                var r = n(57)("keys"),
                    i = n(46);
                t.exports = function (t) {
                    return r[t] || (r[t] = i(t))
                }
            },
            53: function (t, e, n) {
                var r = n(20).f,
                    i = n(28),
                    o = n(14)("toStringTag");
                t.exports = function (t, e, n) {
                    t && !i(t = n ? t : t.prototype, o) && r(t, o, {
                        configurable: !0,
                        value: e
                    })
                }
            },
            54: function (t, e) {
                t.exports = function (t) {
                    if ("function" != typeof t) throw TypeError(t + " is not a function!");
                    return t
                }
            },
            55: function (t, e, n) {
                var r = n(18),
                    i = n(19).document,
                    o = r(i) && r(i.createElement);
                t.exports = function (t) {
                    return o ? i.createElement(t) : {}
                }
            },
            56: function (t, e, n) {
                var r = n(32);
                t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
                    return "String" == r(t) ? t.split("") : Object(t)
                }
            },
            57: function (t, e, n) {
                var r = n(16),
                    i = n(19),
                    o = "__core-js_shared__",
                    a = i[o] || (i[o] = {});
                (t.exports = function (t, e) {
                    return a[t] || (a[t] = void 0 !== e ? e : {})
                })("versions", []).push({
                    version: r.version,
                    mode: n(58) ? "pure" : "global",
                    copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
                })
            },
            58: function (t, e) {
                t.exports = !0
            },
            59: function (t, e, n) {
                var r = n(47),
                    i = n(34),
                    o = n(87);
                t.exports = function (t) {
                    return function (e, n, a) {
                        var s, c = r(e),
                            d = i(c.length),
                            u = o(a, d);
                        if (t && n != n) {
                            for (; u < d;)
                                if ((s = c[u++]) != s) return !0
                        } else
                            for (; u < d; u++)
                                if ((t || u in c) && c[u] === n) return t || u || 0;
                        return !t && -1
                    }
                }
            },
            60: function (t, e, n) {
                "use strict";
                e.a = function (t, e) {
                        return t.labelAll ? {
                            labelAll: !0,
                            labels: t.labelAll,
                            activeLabels: e
                        } : {
                            labelAll: !1,
                            labels: t.labelAny,
                            activeLabels: e
                        }
                    },
                    e.c = function (t) {
                        var e = d(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : c);
                        return !e.shouldFilter || !!e.sizesSupported[t]
                    },
                    e.b = function () {
                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                            e = t.labels,
                            n = void 0 === e ? [] : e,
                            r = t.labelAll,
                            o = void 0 !== r && r,
                            s = t.activeLabels,
                            u = void 0 === s ? [] : s,
                            l = 1 < arguments.length ? arguments[1] : void 0,
                            f = 2 < arguments.length ? arguments[2] : void 0,
                            p = d(3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : c);
                        l = Object(i.isPlainObject)(l) ? Object(i.deepClone)(l) : f ? {
                            banner: {
                                sizes: f
                            }
                        } : {};
                        var m = Object(i.deepAccess)(l, "banner.sizes");
                        p.shouldFilter && m && (l.banner.sizes = m.filter(function (t) {
                            return p.sizesSupported[t]
                        }));
                        var g = Object.keys(l),
                            h = {
                                active: g.every(function (t) {
                                    return "banner" !== t
                                }) || g.some(function (t) {
                                    return "banner" === t
                                }) && 0 < Object(i.deepAccess)(l, "banner.sizes.length") && (0 === n.length || !o && (n.some(function (t) {
                                    return p.labels[t]
                                }) || n.some(function (t) {
                                    return a()(u, t)
                                })) || o && n.reduce(function (t, e) {
                                        return t ? p.labels[e] || a()(u, e) : t
                                    },
                                    !0)),
                                mediaTypes: l
                            };
                        return m && m.length !== l.banner.sizes.length && (h.filterResults = {
                                before: m,
                                after: l.banner.sizes
                            }),
                            h
                    };
                var r = n(3),
                    i = n(0),
                    o = n(9),
                    a = n.n(o);

                function s(t) {
                    return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                        function (t) {
                            return typeof t
                        } : function (t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                }
                var c = [];

                function d(t) {
                    return t.reduce(function (t, e) {
                        if ("object" === s(e) && "string" == typeof e.mediaQuery) {
                            var n = !1;
                            try {
                                n = Object(i.getWindowTop)().matchMedia(e.mediaQuery).matches
                            } catch (t) {
                                Object(i.logWarn)("Unfriendly iFrame blocks sizeConfig from being correctly evaluated"),
                                    n = matchMedia(e.mediaQuery).matches
                            }
                            n && (Array.isArray(e.sizesSupported) && (t.shouldFilter = !0), ["labels", "sizesSupported"].forEach(function (n) {
                                return (e[n] || []).forEach(function (e) {
                                    return t[n][e] = !0
                                })
                            }))
                        } else Object(i.logWarn)('sizeConfig rule missing required property "mediaQuery"');
                        return t
                    }, {
                        labels: {},
                        sizesSupported: {},
                        shouldFilter: !1
                    })
                }
                r.b.getConfig("sizeConfig",
                    function (t) {
                        return function (t) {
                            c = t
                        }(t.sizeConfig)
                    })
            },
            61: function (t, e, n) {
                "use strict";
                n.d(e, "a",
                    function () {
                        return o
                    });
                var r = n(0),
                    i = {},
                    o = {
                        incrementCounter: function (t) {
                            return i[t] = i[t] || {},
                                i[t].counter = Object(r.deepAccess)(i, "".concat(t, ".counter")) + 1 || 1,
                                i[t].counter
                        },
                        getCounter: function (t) {
                            return Object(r.deepAccess)(i, "".concat(t, ".counter")) || 0
                        }
                    }
            },
            62: function (t, e, n) {
                "use strict";
                e.b = function (t, e) {
                        var n = {
                            puts: t.map(o)
                        };
                        Object(r.a)(i.b.getConfig("cache.url"),
                            function (t) {
                                return {
                                    success: function (e) {
                                        var n;
                                        try {
                                            n = JSON.parse(e).responses
                                        } catch (e) {
                                            return void t(e, [])
                                        }
                                        n ? t(null, n) : t(new Error("The cache server didn't respond with a responses property."), [])
                                    },
                                    error: function (e, n) {
                                        t(new Error("Error storing video ad in the cache: ".concat(e, ": ").concat(JSON.stringify(n))), [])
                                    }
                                }
                            }(e), JSON.stringify(n), {
                                contentType: "text/plain",
                                withCredentials: !0
                            })
                    },
                    e.a = function (t) {
                        return "".concat(i.b.getConfig("cache.url"), "?uuid=").concat(t)
                    };
                var r = n(5),
                    i = n(3);

                function o(t) {
                    var e = {
                        type: "xml",
                        value: t.vastXml ? t.vastXml : function (t, e) {
                            var n = e ? "<![CDATA[".concat(e, "]]>") : "";
                            return '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['.concat(t, "]]></VASTAdTagURI>\n        <Impression>").concat(n, "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")
                        }(t.vastUrl, t.vastImpUrl),
                        ttlseconds: Number(t.ttl)
                    };
                    return "string" == typeof t.customCacheKey && "" !== t.customCacheKey && (e.key = t.customCacheKey),
                        e
                }
            },
            63: function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                    n.d(e, "checkAdUnitSetup",
                        function () {
                            return L
                        });
                var r = n(38),
                    i = n(0),
                    o = n(133),
                    a = n(26),
                    s = n(50),
                    c = n(3),
                    d = n(29),
                    u = n(64),
                    l = n(13),
                    f = n(134),
                    p = n(9),
                    m = n.n(p),
                    g = n(61),
                    h = n(12),
                    A = n(23);

                function v(t) {
                    return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                        function (t) {
                            return typeof t
                        } : function (t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                }

                function y() {
                    return (y = Object.assign ||
                        function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = arguments[e];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                            }
                            return t
                        }).apply(this, arguments)
                }
                var b = Object(r.a)(),
                    w = n(4),
                    E = n(0),
                    _ = n(7).
                default,
                T = n(8),
                    S = a.a.triggerUserSyncs,
                    I = w.EVENTS,
                    k = I.ADD_AD_UNITS,
                    O = I.BID_WON,
                    C = I.REQUEST_BIDS,
                    x = I.SET_TARGETING,
                    D = I.AD_RENDER_FAILED,
                    P = w.AD_RENDER_FAILED_REASON,
                    B = P.PREVENT_WRITING_ON_MAIN_DOCUMENT,
                    R = P.NO_AD,
                    j = P.EXCEPTION,
                    U = P.CANNOT_FIND_AD,
                    N = P.MISSING_DOC_OR_ADID,
                    z = {
                        bidWon: function (t) {
                            var e = d.a.getBidsRequested().map(function (t) {
                                return t.bids.map(function (t) {
                                    return t.adUnitCode
                                })
                            }).reduce(i.flatten).filter(i.uniques);
                            return !!E.contains(e, t) || void E.logError('The "' + t + '" placement is not defined.')
                        }
                    };

                function M(t, e, n) {
                    t.defaultView && t.defaultView.frameElement && (t.defaultView.frameElement.width = e, t.defaultView.frameElement.height = n)
                }
                Object(f.a)(),
                    b.bidderSettings = b.bidderSettings || {},
                    b.libLoaded = !0,
                    b.version = "v2.27.0",
                    E.logInfo("Prebid.js v2.27.0 loaded"),
                    b.adUnits = b.adUnits || [],
                    b.triggerUserSyncs = S;
                var L = Object(l.b)("sync",
                    function (t) {
                        return t.forEach(function (t) {
                                var e = t.mediaTypes,
                                    n = E.getAdUnitSizes(t);
                                if (e && e.banner) {
                                    var r = e.banner;
                                    r.sizes ? (r.sizes = n, t.sizes = n) : (E.logError("Detected a mediaTypes.banner object did not include sizes.  This is a required field for the mediaTypes.banner object.  Removing invalid mediaTypes.banner object from request."), delete t.mediaTypes.banner)
                                } else t.sizes && (E.logWarn("Usage of adUnits.sizes will eventually be deprecated.  Please define size dimensions within the corresponding area of the mediaTypes.<object> (eg mediaTypes.banner.sizes)."), t.sizes = n);
                                if (e && e.video) {
                                    var o = e.video;
                                    if (o.playerSize)
                                        if (Array.isArray(o.playerSize) && 1 === o.playerSize.length && o.playerSize.every(function (t) {
                                                return Object(i.isArrayOfNums)(t, 2)
                                            })) t.sizes = o.playerSize;
                                        else if (Object(i.isArrayOfNums)(o.playerSize, 2)) {
                                        var a = [];
                                        a.push(o.playerSize),
                                            E.logInfo("Transforming video.playerSize from [".concat(o.playerSize, "] to [[").concat(a, "]] so it's in the proper format.")),
                                            t.sizes = o.playerSize = a
                                    } else E.logError("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."),
                                        delete t.mediaTypes.video.playerSize
                                }
                                if (e && e.native) {
                                    var s = e.native;
                                    s.image && s.image.sizes && !Array.isArray(s.image.sizes) && (E.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."), delete t.mediaTypes.native.image.sizes),
                                        s.image && s.image.aspect_ratios && !Array.isArray(s.image.aspect_ratios) && (E.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."), delete t.mediaTypes.native.image.aspect_ratios),
                                        s.icon && s.icon.sizes && !Array.isArray(s.icon.sizes) && (E.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."), delete t.mediaTypes.native.icon.sizes)
                                }
                            }),
                            t
                    },
                    "checkAdUnitSetup");

                function q(t) {
                    var e = d.a[t]().filter(E.bind.call(i.adUnitsFilter, this, d.a.getAdUnitCodes())),
                        n = d.a.getLastAuctionId();
                    return e.map(function (t) {
                        return t.adUnitCode
                    }).filter(i.uniques).map(function (t) {
                        return e.filter(function (e) {
                            return e.auctionId === n && e.adUnitCode === t
                        })
                    }).filter(function (t) {
                        return t && t[0] && t[0].adUnitCode
                    }).map(function (t) {
                        return function (t, e, n) {
                            return e in t ? Object.defineProperty(t, e, {
                                    value: n,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : t[e] = n,
                                t
                        }({},
                            t[0].adUnitCode, {
                                bids: t
                            })
                    }).reduce(function (t, e) {
                        return y(t, e)
                    }, {})
                }

                function V(t, e, n) {
                    var r = {};
                    r.reason = t,
                        r.message = e,
                        n && (r.bid = n),
                        E.logError(e),
                        T.emit(D, r)
                }

                function G(t) {
                    t.forEach(function (t) {
                        if (void 0 === t.called) try {
                            t.call(),
                                t.called = !0
                        } catch (t) {
                            E.logError("Error processing command :", "prebid.js", t)
                        }
                    })
                }
                b.getAdserverTargetingForAdUnitCodeStr = function (t) {
                        if (E.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments), t) {
                            var e = b.getAdserverTargetingForAdUnitCode(t);
                            return E.transformAdServerTargetingObj(e)
                        }
                        E.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")
                    },
                    b.getAdserverTargetingForAdUnitCode = function (t) {
                        return b.getAdserverTargeting(t)[t]
                    },
                    b.getAdserverTargeting = function (t) {
                        return E.logInfo("Invoking pbjs.getAdserverTargeting", arguments),
                            u.b.getAllTargeting(t)
                    },
                    b.getNoBids = function () {
                        return E.logInfo("Invoking pbjs.getNoBids", arguments),
                            q("getNoBids")
                    },
                    b.getBidResponses = function () {
                        return E.logInfo("Invoking pbjs.getBidResponses", arguments),
                            q("getBidsReceived")
                    },
                    b.getBidResponsesForAdUnitCode = function (t) {
                        return {
                            bids: d.a.getBidsReceived().filter(function (e) {
                                return e.adUnitCode === t
                            })
                        }
                    },
                    b.setTargetingForGPTAsync = function (t, e) {
                        if (E.logInfo("Invoking pbjs.setTargetingForGPTAsync", arguments), Object(i.isGptPubadsDefined)()) {
                            var n = u.b.getAllTargeting(t);
                            u.b.resetPresetTargeting(t),
                                u.b.setTargetingForGPT(n, e),
                                Object.keys(n).forEach(function (t) {
                                    Object.keys(n[t]).forEach(function (e) {
                                        "hb_adid" === e && d.a.setStatusForBids(n[t][e], w.BID_STATUS.BID_TARGETING_SET)
                                    })
                                }),
                                T.emit(x, n)
                        } else E.logError("window.googletag is not defined on the page")
                    },
                    b.setTargetingForAst = function (t) {
                        E.logInfo("Invoking pbjs.setTargetingForAn", arguments),
                            u.b.isApntagDefined() ? (u.b.setTargetingForAst(t), T.emit(x, u.b.getAllTargeting())) : E.logError("window.apntag is not defined on the page")
                    },
                    b.renderAd = function (t, e) {
                        if (E.logInfo("Invoking pbjs.renderAd", arguments), E.logMessage("Calling renderAd with adId :" + e), t && e) try {
                            var n = d.a.findBidByAdId(e);
                            if (n) {
                                n.status = w.BID_STATUS.RENDERED,
                                    n.ad = E.replaceAuctionPrice(n.ad, n.cpm),
                                    n.adUrl = E.replaceAuctionPrice(n.adUrl, n.cpm),
                                    d.a.addWinningBid(n),
                                    T.emit(O, n);
                                var r = n.height,
                                    i = n.width,
                                    o = n.ad,
                                    a = n.mediaType,
                                    s = n.adUrl,
                                    c = n.renderer,
                                    u = document.createComment("Creative ".concat(n.creativeId, " served by ").concat(n.bidder, " Prebid.js Header Bidding"));
                                if (E.insertElement(u, t, "body"), Object(h.c)(c)) Object(h.b)(c, n);
                                else if (t === document && !E.inIframe() || "video" === a) {
                                    var l = "Error trying to write ad. Ad render call ad id ".concat(e, " was prevented from writing to the main document.");
                                    V(B, l, n)
                                } else if (o) {
                                    if (navigator.userAgent && -1 < navigator.userAgent.toLowerCase().indexOf("firefox/")) {
                                        var f = navigator.userAgent.toLowerCase().match(/firefox\/([\d\.]+)/)[1];
                                        f && parseInt(f, 10) < 67 && t.open("text/html", "replace")
                                    }
                                    t.write(o),
                                        t.close(),
                                        M(t, i, r),
                                        E.callBurl(n)
                                } else if (s) {
                                    var p = E.createInvisibleIframe();
                                    p.height = r,
                                        p.width = i,
                                        p.style.display = "inline",
                                        p.style.overflow = "hidden",
                                        p.src = s,
                                        E.insertElement(p, t, "body"),
                                        M(t, i, r),
                                        E.callBurl(n)
                                } else {
                                    var m = "Error trying to write ad. No ad for bid response id: ".concat(e);
                                    V(R, m, n)
                                }
                            } else {
                                var g = "Error trying to write ad. Cannot find ad by given id : ".concat(e);
                                V(U, g)
                            }
                        } catch (t) {
                            var A = "Error trying to write ad Id :".concat(e, " to the page:").concat(t.message);
                            V(j, A)
                        } else {
                            var v = "Error trying to write ad Id :".concat(e, " to the page. Missing document or adId");
                            V(N, v)
                        }
                    },
                    b.removeAdUnit = function (t) {
                        E.logInfo("Invoking pbjs.removeAdUnit", arguments),
                            t ? (E.isArray(t) ? t : [t]).forEach(function (t) {
                                for (var e = 0; e < b.adUnits.length; e++) b.adUnits[e].code === t && b.adUnits.splice(e, 1)
                            }) : b.adUnits = []
                    },
                    b.requestBids = Object(l.b)("async",
                        function () {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                                e = t.bidsBackHandler,
                                n = t.timeout,
                                r = t.adUnits,
                                i = t.adUnitCodes,
                                o = t.labels,
                                a = t.auctionId;
                            T.emit(C);
                            var s = n || c.b.getConfig("bidderTimeout");
                            if (r = r || b.adUnits, E.logInfo("Invoking pbjs.requestBids", arguments), i && i.length ? r = r.filter(function (t) {
                                    return m()(i, t.code)
                                }) : i = r && r.map(function (t) {
                                    return t.code
                                }), (r = L(r)).forEach(function (t) {
                                    var e = Object.keys(t.mediaTypes || {
                                            banner: "banner"
                                        }),
                                        n = t.bids.map(function (t) {
                                            return t.bidder
                                        }),
                                        r = _.bidderRegistry,
                                        i = c.b.getConfig("s2sConfig"),
                                        o = i && i.bidders,
                                        a = o ? n.filter(function (t) {
                                            return !m()(o, t)
                                        }) : n;
                                    t.transactionId = E.generateUUID(),
                                        a.forEach(function (n) {
                                            var i = r[n],
                                                o = i && i.getSpec && i.getSpec(),
                                                a = o && o.supportedMediaTypes || ["banner"];
                                            e.some(function (t) {
                                                return m()(a, t)
                                            }) || (E.logWarn(E.unsupportedBidderMessage(t, n)), t.bids = t.bids.filter(function (t) {
                                                return t.bidder !== n
                                            }))
                                        }),
                                        g.a.incrementCounter(t.code)
                                }), r && 0 !== r.length) {
                                var l = d.a.createAuction({
                                        adUnits: r,
                                        adUnitCodes: i,
                                        callback: e,
                                        cbTimeout: s,
                                        labels: o,
                                        auctionId: a
                                    }),
                                    f = r.length;
                                return 15 < f && E.logInfo("Current auction ".concat(l.getAuctionId(), " contains ").concat(f, " adUnits."), r),
                                    i.forEach(function (t) {
                                        return u.b.setLatestAuctionForAdUnit(t, l.getAuctionId())
                                    }),
                                    l.callBids(),
                                    l
                            }
                            if (E.logMessage("No adUnits configured. No bids requested."), "function" == typeof e) try {
                                e()
                            } catch (t) {
                                E.logError("Error executing bidsBackHandler", null, t)
                            }
                        }),
                    b.addAdUnits = function (t) {
                        E.logInfo("Invoking pbjs.addAdUnits", arguments),
                            E.isArray(t) ? b.adUnits.push.apply(b.adUnits, t) : "object" === v(t) && b.adUnits.push(t),
                            T.emit(k)
                    },
                    b.onEvent = function (t, e, n) {
                        E.logInfo("Invoking pbjs.onEvent", arguments),
                            E.isFn(e) ? !n || z[t].call(null, n) ? T.on(t, e, n) : E.logError('The id provided is not valid for event "' + t + '" and no handler was set.') : E.logError('The event handler provided is not a function and was not set on event "' + t + '".')
                    },
                    b.offEvent = function (t, e, n) {
                        E.logInfo("Invoking pbjs.offEvent", arguments),
                            n && !z[t].call(null, n) || T.off(t, e, n)
                    },
                    b.registerBidAdapter = function (t, e) {
                        E.logInfo("Invoking pbjs.registerBidAdapter", arguments);
                        try {
                            _.registerBidAdapter(t(), e)
                        } catch (t) {
                            E.logError("Error registering bidder adapter : " + t.message)
                        }
                    },
                    b.registerAnalyticsAdapter = function (t) {
                        E.logInfo("Invoking pbjs.registerAnalyticsAdapter", arguments);
                        try {
                            _.registerAnalyticsAdapter(t)
                        } catch (t) {
                            E.logError("Error registering analytics adapter : " + t.message)
                        }
                    },
                    b.createBid = function (t) {
                        return E.logInfo("Invoking pbjs.createBid", arguments),
                            Object(A.a)(t)
                    },
                    b.loadScript = function (t, e, n) {
                        E.logInfo("Invoking pbjs.loadScript", arguments),
                            Object(s.b)(t, e, n)
                    },
                    b.enableAnalytics = function (t) {
                        t && !E.isEmpty(t) ? (E.logInfo("Invoking pbjs.enableAnalytics for: ", t), _.enableAnalytics(t)) : E.logError("pbjs.enableAnalytics should be called with option {}")
                    },
                    b.aliasBidder = function (t, e) {
                        E.logInfo("Invoking pbjs.aliasBidder", arguments),
                            t && e ? _.aliasBidAdapter(t, e) : E.logError("bidderCode and alias must be passed as arguments", "pbjs.aliasBidder")
                    },
                    b.getAllWinningBids = function () {
                        return d.a.getAllWinningBids()
                    },
                    b.getAllPrebidWinningBids = function () {
                        return d.a.getBidsReceived().filter(function (t) {
                            return t.status === w.BID_STATUS.BID_TARGETING_SET
                        })
                    },
                    b.getHighestCpmBids = function (t) {
                        var e = Object(u.a)(d.a.getBidsReceived(), i.getLatestHighestCpmBid);
                        return u.b.getWinningBids(t, e)
                    },
                    b.markWinningBidAsUsed = function (t) {
                        var e = [];
                        t.adUnitCode && t.adId ? e = d.a.getBidsReceived().filter(function (e) {
                                return e.adId === t.adId && e.adUnitCode === t.adUnitCode
                            }) : t.adUnitCode ? e = u.b.getWinningBids(t.adUnitCode) : t.adId ? e = d.a.getBidsReceived().filter(function (e) {
                                return e.adId === t.adId
                            }) : E.logWarn("Inproper usage of markWinningBidAsUsed. It'll need an adUnitCode and/or adId to function."),
                            0 < e.length && (e[0].status = w.BID_STATUS.RENDERED)
                    },
                    b.getConfig = c.b.getConfig,
                    b.setConfig = c.b.setConfig,
                    b.que.push(function () {
                        return Object(o.a)()
                    }),
                    b.cmd.push = function (t) {
                        if ("function" == typeof t) try {
                            t.call()
                        } catch (t) {
                            E.logError("Error processing command :", t.message, t.stack)
                        } else E.logError("Commands written into pbjs.cmd.push must be wrapped in a function")
                    },
                    b.que.push = b.cmd.push,
                    b.processQueue = function () {
                        l.b.ready(),
                            G(b.que),
                            G(b.cmd)
                    },
                    e.
                default = b
            },
            64: function (t, e, n) {
                "use strict";
                e.a = b,
                    n.d(e, "b",
                        function () {
                            return S
                        });
                var r = n(0),
                    i = n(3),
                    o = n(25),
                    a = n(29),
                    s = n(60),
                    c = n(2),
                    d = n(9),
                    u = n.n(d);

                function l(t) {
                    return function (t) {
                            if (Array.isArray(t)) {
                                for (var e = 0,
                                        n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                                return n
                            }
                        }(t) ||
                        function (t) {
                            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
                        }(t) ||
                        function () {
                            throw new TypeError("Invalid attempt to spread non-iterable instance")
                        }()
                }

                function f() {
                    return (f = Object.assign ||
                        function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = arguments[e];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                            }
                            return t
                        }).apply(this, arguments)
                }

                function p(t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n,
                        t
                }
                var m = n(0),
                    g = n(4),
                    h = [],
                    A = Object.keys(g.TARGETING_KEYS).map(function (t) {
                        return g.TARGETING_KEYS[t]
                    }),
                    v = function (t) {
                        return t.responseTimestamp + 1e3 * t.ttl + 1e3 > Object(r.timestamp)()
                    },
                    y = function (t) {
                        return t && (t.status && !u()([g.BID_STATUS.BID_TARGETING_SET, g.BID_STATUS.RENDERED], t.status) || !t.status)
                    };

                function b(t, e) {
                    var n = [],
                        i = Object(r.groupBy)(t, "adUnitCode");
                    return Object.keys(i).forEach(function (t) {
                            var o = Object(r.groupBy)(i[t], "bidderCode");
                            Object.keys(o).forEach(function (t) {
                                return n.push(o[t].reduce(e))
                            })
                        }),
                        n
                }

                function w(t, e) {
                    return void 0 !== t.adUnitTargeting.hb_deal && void 0 === e.adUnitTargeting.hb_deal ? -1 : void 0 === t.adUnitTargeting.hb_deal && void 0 !== e.adUnitTargeting.hb_deal ? 1 : e.adUnitTargeting.hb_pb - t.adUnitTargeting.hb_pb
                }
                var E, _, T, S = (E = a.a, T = {},
                    (_ = {}).setLatestAuctionForAdUnit = function (t, e) {
                        T[t] = e
                    },
                    _.resetPresetTargeting = function (t) {
                        if (Object(r.isGptPubadsDefined)()) {
                            var e = I(t),
                                n = E.getAdUnits().filter(function (t) {
                                    return u()(e, t.code)
                                });
                            window.googletag.pubads().getSlots().forEach(function (t) {
                                h.forEach(function (e) {
                                    n.forEach(function (n) {
                                        n.code !== t.getAdUnitPath() && n.code !== t.getSlotElementId() || t.setTargeting(e, null)
                                    })
                                })
                            })
                        }
                    },
                    _.resetPresetTargetingAST = function (t) {
                        I(t).forEach(function (t) {
                            var e = window.apntag.getTag(t);
                            if (e && e.keywords) {
                                var n = {};
                                Object.keys(e.keywords).forEach(function (t) {
                                        u()(h, t.toLowerCase()) || (n[t] = e.keywords[t])
                                    }),
                                    window.apntag.modifyTag(t, {
                                        keywords: n
                                    })
                            }
                        })
                    },
                    _.getAllTargeting = function (t) {
                        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : k(),
                            n = I(t),
                            a = function (t, e) {
                                var n = _.getWinningBids(t, e),
                                    r = O();
                                return n.map(function (t) {
                                    return p({},
                                        t.adUnitCode, Object.keys(t.adserverTargeting).filter(function (e) {
                                            return void 0 === t.sendStandardTargeting || t.sendStandardTargeting || -1 === r.indexOf(e)
                                        }).reduce(function (e, n) {
                                                var r = [t.adserverTargeting[n]],
                                                    i = p({},
                                                        n.substring(0, 20), r);
                                                if (n !== g.TARGETING_KEYS.DEAL) return [].concat(l(e), [i]);
                                                var o = p({},
                                                    "".concat(n, "_").concat(t.bidderCode).substring(0, 20), r);
                                                return [].concat(l(e), [i, o])
                                            },
                                            []))
                                })
                            }(n, e).concat(function (t, e) {
                                return e.filter(function (e) {
                                    return u()(t, e.adUnitCode)
                                }).map(function (t) {
                                    return f({},
                                        t)
                                }).reduce(C, []).map(D).filter(function (t) {
                                    return t
                                })
                            }(n, e)).concat(i.b.getConfig("enableSendAllBids") ?
                                function (t, e) {
                                    var n = A.concat(o.a);
                                    return b(e, r.getHighestCpm).map(function (e) {
                                        if (e.adserverTargeting && t && (m.isArray(t) && u()(t, e.adUnitCode) || "string" == typeof t && e.adUnitCode === t)) return p({},
                                            e.adUnitCode,
                                            function (t, e) {
                                                return e.map(function (e) {
                                                    return p({},
                                                        "".concat(e, "_").concat(t.bidderCode).substring(0, 20), [t.adserverTargeting[e]])
                                                })
                                            }(e, n.filter(function (t) {
                                                return void 0 !== e.adserverTargeting[t]
                                            })))
                                    }).filter(function (t) {
                                        return t
                                    })
                                }(n, e) : []);
                        a.map(function (t) {
                                Object.keys(t).map(function (e) {
                                    t[e].map(function (t) {
                                        -1 === h.indexOf(Object.keys(t)[0]) && (h = Object.keys(t).concat(h))
                                    })
                                })
                            }),
                            a = a.map(function (t) {
                                return p({},
                                    Object.keys(t)[0], t[Object.keys(t)[0]].map(function (t) {
                                        return p({},
                                            Object.keys(t)[0], t[Object.keys(t)[0]].join(", "))
                                    }).reduce(function (t, e) {
                                        return f(e, t)
                                    }, {}))
                            }).reduce(function (t, e) {
                                var n = Object.keys(e)[0];
                                return t[n] = f({},
                                        t[n], e[n]),
                                    t
                            }, {});
                        var s = i.b.getConfig("targetingControls.auctionKeyMaxChars");
                        return s && (Object(r.logInfo)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(s, " characters.  Running checks on auction keys...")), a = function (t, e) {
                                var n = Object(r.deepClone)(t);
                                return Object.keys(n).map(function (t) {
                                    return {
                                        adUnitCode: t,
                                        adUnitTargeting: n[t]
                                    }
                                }).sort(w).reduce(function (t, i, o, a) {
                                    var s = function (t) {
                                        return Object.keys(t).reduce(function (e, n) {
                                                return e + "".concat(n, "%3d").concat(encodeURIComponent(t[n]), "%26")
                                            },
                                            "")
                                    }(i.adUnitTargeting);
                                    o + 1 === a.length && (s = s.slice(0, -3));
                                    var c = i.adUnitCode,
                                        d = s.length;
                                    return d <= e ? (e -= d, Object(r.logInfo)("AdUnit '".concat(c, "' auction keys comprised of ").concat(d, " characters.  Deducted from running threshold; new limit is ").concat(e), n[c]), t[c] = n[c]) : Object(r.logWarn)("The following keys for adUnitCode '".concat(c, "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ").concat(d, ", the current allotted amount was ").concat(e, ".\n"), n[c]),
                                        o + 1 === a.length && 0 === Object.keys(t).length && Object(r.logError)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."),
                                        t
                                }, {})
                            }(a, s)),
                            n.forEach(function (t) {
                                a[t] || (a[t] = {})
                            }),
                            a
                    },
                    _.setTargetingForGPT = function (t, e) {
                        window.googletag.pubads().getSlots().forEach(function (n) {
                            Object.keys(t).filter(e ? e(n) : Object(r.isAdUnitCodeMatchingSlot)(n)).forEach(function (e) {
                                return Object.keys(t[e]).forEach(function (r) {
                                    var i = t[e][r].split(",");
                                    (i = 1 < i.length ? [i] : i).map(function (t) {
                                        return m.logMessage("Attempting to set key value for slot: ".concat(n.getSlotElementId(), " key: ").concat(r, " value: ").concat(t)),
                                            t
                                    }).forEach(function (t) {
                                        n.setTargeting(r, t)
                                    })
                                })
                            })
                        })
                    },
                    _.getWinningBids = function (t) {
                        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : k(),
                            n = I(t);
                        return e.filter(function (t) {
                            return u()(n, t.adUnitCode)
                        }).filter(function (t) {
                            return 0 < t.cpm
                        }).map(function (t) {
                            return t.adUnitCode
                        }).filter(r.uniques).map(function (t) {
                            return e.filter(function (e) {
                                return e.adUnitCode === t ? e : null
                            }).reduce(r.getHighestCpm)
                        })
                    },
                    _.setTargetingForAst = function (t) {
                        var e = _.getAllTargeting(t);
                        try {
                            _.resetPresetTargetingAST(t)
                        } catch (t) {
                            m.logError("unable to reset targeting for AST" + t)
                        }
                        Object.keys(e).forEach(function (t) {
                            return Object.keys(e[t]).forEach(function (n) {
                                if (m.logMessage("Attempting to set targeting for targetId: ".concat(t, " key: ").concat(n, " value: ").concat(e[t][n])), m.isStr(e[t][n]) || m.isArray(e[t][n])) {
                                    var r = {};
                                    n.search(/pt[0-9]/) < 0 ? r[n.toUpperCase()] = e[t][n] : r[n] = e[t][n],
                                        window.apntag.setKeywords(t, r, {
                                            overrideKeyValue: !0
                                        })
                                }
                            })
                        })
                    },
                    _.isApntagDefined = function () {
                        if (window.apntag && m.isFn(window.apntag.setKeywords)) return !0
                    },
                    _);

                function I(t) {
                    return "string" == typeof t ? [t] : m.isArray(t) ? t : E.getAdUnitCodes() || []
                }

                function k() {
                    var t = E.getBidsReceived();
                    return i.b.getConfig("useBidCache") || (t = t.filter(function (t) {
                            return T[t.adUnitCode] === t.auctionId
                        })),
                        b(t = t.filter(function (t) {
                            return Object(r.deepAccess)(t, "video.context") !== c.a
                        }).filter(function (t) {
                            return "banner" !== t.mediaType || Object(s.c)([t.width, t.height])
                        }).filter(y).filter(v), r.getOldestHighestCpmBid)
                }

                function O() {
                    return E.getStandardBidderAdServerTargeting().map(function (t) {
                        return t.key
                    }).concat(A).filter(r.uniques)
                }

                function C(t, e, n, i) {
                    return Object.keys(e.adserverTargeting).filter(x()).forEach(function (n) {
                            t.length && t.filter(function (t) {
                                return function (n) {
                                    return n.adUnitCode === e.adUnitCode && n.adserverTargeting[t]
                                }
                            }(n)).forEach(function (t) {
                                return function (n) {
                                    m.isArray(n.adserverTargeting[t]) || (n.adserverTargeting[t] = [n.adserverTargeting[t]]),
                                        n.adserverTargeting[t] = n.adserverTargeting[t].concat(e.adserverTargeting[t]).filter(r.uniques),
                                        delete e.adserverTargeting[t]
                                }
                            }(n))
                        }),
                        t.push(e),
                        t
                }

                function x() {
                    var t = O();
                    return function (e) {
                        return -1 === t.indexOf(e)
                    }
                }

                function D(t) {
                    return p({},
                        t.adUnitCode, Object.keys(t.adserverTargeting).filter(x()).map(function (e) {
                            return p({},
                                e.substring(0, 20), [t.adserverTargeting[e]])
                        }))
                }
            },
            642: function (t, e, n) {
                t.exports = n(63)
            },
            65: function (t, e, n) {
                "use strict";
                var r = n(137)(!0);
                n(51)(String, "String",
                    function (t) {
                        this._t = String(t),
                            this._i = 0
                    },
                    function () {
                        var t, e = this._t,
                            n = this._i;
                        return n >= e.length ? {
                            value: void 0,
                            done: !0
                        } : (t = r(e, n), this._i += t.length, {
                            value: t,
                            done: !1
                        })
                    })
            },
            66: function (t, e, n) {
                function r() {}
                var i = n(27),
                    o = n(140),
                    a = n(67),
                    s = n(52)("IE_PROTO"),
                    c = "prototype",
                    d = function () {
                        var t, e = n(55)("iframe"),
                            r = a.length;
                        for (e.style.display = "none", n(143).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), d = t.F; r--;) delete d[c][a[r]];
                        return d()
                    };
                t.exports = Object.create ||
                    function (t, e) {
                        var n;
                        return null !== t ? (r[c] = i(t), n = new r, r[c] = null, n[s] = t) : n = d(),
                            void 0 === e ? n : o(n, e)
                    }
            },
            67: function (t, e) {
                t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
            },
            68: function (t, e) {
                t.exports = function (t, e) {
                    return {
                        value: e,
                        done: !!t
                    }
                }
            },
            69: function (t, e, n) {
                var r = n(21);
                t.exports = function (t, e, n) {
                    for (var i in e) n && t[i] ? t[i] = e[i] : r(t, i, e[i]);
                    return t
                }
            },
            7: function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                    n.d(e, "gdprDataHandler",
                        function () {
                            return I
                        }),
                    e.setS2STestingModule = function (t) {
                        h = t
                    };
                var r = n(0),
                    i = n(60),
                    o = n(25),
                    a = n(1),
                    s = n(5),
                    c = n(3),
                    d = n(9),
                    u = n.n(d),
                    l = n(11),
                    f = n.n(l),
                    p = n(61),
                    m = n(48);

                function g() {
                    return (g = Object.assign ||
                        function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = arguments[e];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                            }
                            return t
                        }).apply(this, arguments)
                }
                var h, A = n(0),
                    v = n(4),
                    y = n(8),
                    b = {},
                    w = b.bidderRegistry = {},
                    E = b.aliasRegistry = {},
                    _ = {};
                c.b.getConfig("s2sConfig",
                    function (t) {
                        _ = t.s2sConfig
                    });
                var T = {};

                function S(t) {
                    var e = t.bidderCode,
                        n = t.auctionId,
                        a = t.bidderRequestId,
                        s = t.adUnits,
                        c = t.labels,
                        d = t.src;
                    return s.reduce(function (t, s) {
                            var u = Object(i.b)(Object(i.a)(s, c), s.mediaTypes, s.sizes),
                                l = u.active,
                                f = u.mediaTypes,
                                m = u.filterResults;
                            return l ? m && A.logInfo('Size mapping filtered adUnit "'.concat(s.code, '" banner sizes from '), m.before, "to ", m.after) : A.logInfo('Size mapping disabled adUnit "'.concat(s.code, '"')),
                                l && t.push(s.bids.filter(function (t) {
                                    return t.bidder === e
                                }).reduce(function (t, e) {
                                        var u = s.nativeParams || A.deepAccess(s, "mediaTypes.native");
                                        u && (e = g({},
                                                e, {
                                                    nativeParams: Object(o.g)(u)
                                                })),
                                            e = g({},
                                                e, Object(r.getDefinedParams)(s, ["mediaType", "renderer"]));
                                        var l = Object(i.b)(Object(i.a)(e, c), f),
                                            m = l.active,
                                            h = l.mediaTypes,
                                            v = l.filterResults;
                                        return m ? v && A.logInfo('Size mapping filtered adUnit "'.concat(s.code, '" bidder "').concat(e.bidder, '" banner sizes from '), v.before, "to ", v.after) : A.logInfo('Size mapping deactivated adUnit "'.concat(s.code, '" bidder "').concat(e.bidder, '"')),
                                            A.isValidMediaTypes(h) ? e = g({},
                                                e, {
                                                    mediaTypes: h
                                                }) : A.logError("mediaTypes is not correctly configured for adunit ".concat(s.code)),
                                            m && t.push(g({},
                                                e, {
                                                    adUnitCode: s.code,
                                                    transactionId: s.transactionId,
                                                    sizes: A.deepAccess(h, "banner.sizes") || A.deepAccess(h, "video.playerSize") || [],
                                                    bidId: e.bid_id || A.getUniqueIdentifierStr(),
                                                    bidderRequestId: a,
                                                    auctionId: n,
                                                    src: d,
                                                    bidRequestsCount: p.a.getCounter(s.code)
                                                })),
                                            t
                                    },
                                    [])),
                                t
                        },
                        []).reduce(r.flatten, []).filter(function (t) {
                        return "" !== t
                    })
                }
                var I = {
                    consentData: null,
                    setConsentData: function (t) {
                        I.consentData = t
                    },
                    getConsentData: function () {
                        return I.consentData
                    }
                };

                function k() {
                    return _ && _.enabled && _.testing && h
                }

                function O(t, e, n) {
                    try {
                        var r = w[t].getSpec();
                        r && r[e] && "function" == typeof r[e] && (A.logInfo("Invoking ".concat(t, ".").concat(e)), r[e](n))
                    } catch (n) {
                        A.logWarn("Error calling ".concat(e, " of ").concat(t))
                    }
                }
                b.makeBidRequests = function (t, e, n, i, o) {
                        var a = [],
                            s = Object(r.getBidderCodes)(t);
                        c.b.getConfig("bidderSequence") === c.a && (s = Object(r.shuffle)(s));
                        var d = Object(m.b)(),
                            l = s,
                            p = [];
                        if (_.enabled) {
                            k() && (p = h.getSourceBidderMap(t)[h.CLIENT]);
                            var g = _.bidders;
                            l = s.filter(function (t) {
                                return !u()(g, t) || u()(p, t)
                            });
                            var y = function (t) {
                                    var e = _.bidders,
                                        n = A.deepClone(t);
                                    return n.forEach(function (t) {
                                            t.bids = t.bids.filter(function (t) {
                                                return u()(e, t.bidder) && (!k() || t.finalSource !== h.CLIENT)
                                            }).map(function (t) {
                                                return t.bid_id = A.getUniqueIdentifierStr(),
                                                    t
                                            })
                                        }),
                                        n.filter(function (t) {
                                            return 0 !== t.bids.length
                                        })
                                }(t),
                                b = A.generateUUID();
                            g.forEach(function (t) {
                                    var r = A.getUniqueIdentifierStr(),
                                        i = {
                                            bidderCode: t,
                                            auctionId: n,
                                            bidderRequestId: r,
                                            tid: b,
                                            bids: S({
                                                bidderCode: t,
                                                auctionId: n,
                                                bidderRequestId: r,
                                                adUnits: A.deepClone(y),
                                                labels: o,
                                                src: v.S2S.SRC
                                            }),
                                            auctionStart: e,
                                            timeout: _.timeout,
                                            src: v.S2S.SRC,
                                            refererInfo: d
                                        };
                                    0 !== i.bids.length && a.push(i)
                                }),
                                y.forEach(function (t) {
                                    var e = t.bids.filter(function (t) {
                                        return f()(a,
                                            function (e) {
                                                return f()(e.bids,
                                                    function (e) {
                                                        return e.bidId === t.bid_id
                                                    })
                                            })
                                    });
                                    t.bids = e
                                }),
                                a.forEach(function (t) {
                                    t.adUnitsS2SCopy = y.filter(function (t) {
                                        return 0 < t.bids.length
                                    })
                                })
                        }
                        var E = function (t) {
                            var e = A.deepClone(t);
                            return e.forEach(function (t) {
                                    t.bids = t.bids.filter(function (t) {
                                        return !k() || t.finalSource !== h.SERVER
                                    })
                                }),
                                e.filter(function (t) {
                                    return 0 !== t.bids.length
                                })
                        }(t);
                        return l.forEach(function (t) {
                                var r = A.getUniqueIdentifierStr(),
                                    s = {
                                        bidderCode: t,
                                        auctionId: n,
                                        bidderRequestId: r,
                                        bids: S({
                                            bidderCode: t,
                                            auctionId: n,
                                            bidderRequestId: r,
                                            adUnits: A.deepClone(E),
                                            labels: o,
                                            src: "client"
                                        }),
                                        auctionStart: e,
                                        timeout: i,
                                        refererInfo: d
                                    },
                                    c = w[t];
                                c || A.logError("Trying to make a request for bidder that does not exist: ".concat(t)),
                                    c && s.bids && 0 !== s.bids.length && a.push(s)
                            }),
                            I.getConsentData() && a.forEach(function (t) {
                                t.gdprConsent = I.getConsentData()
                            }),
                            a
                    },
                    b.callBids = function (t, e, n, i, o, a, c) {
                        if (e.length) {
                            var d = function (t, e) {
                                    return function (t) {
                                            if (Array.isArray(t)) return t
                                        }(t) ||
                                        function (t, e) {
                                            var n = [],
                                                r = !0,
                                                i = !1,
                                                o = void 0;
                                            try {
                                                for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                                            } catch (t) {
                                                i = !0,
                                                    o = t
                                            } finally {
                                                try {
                                                    r || null == s.
                                                    return || s.
                                                    return()
                                                } finally {
                                                    if (i) throw o
                                                }
                                            }
                                            return n
                                        }(t, e) ||
                                        function () {
                                            throw new TypeError("Invalid attempt to destructure non-iterable instance")
                                        }()
                                }(e.reduce(function (t, e) {
                                        return t[Number(void 0 !== e.src && e.src === v.S2S.SRC)].push(e),
                                            t
                                    },
                                    [
                                        [],
                                        []
                                    ]), 2),
                                l = d[0],
                                f = d[1];
                            if (f.length) {
                                var p = Object(s.b)(a, o ? {
                                        request: o.request.bind(null, "s2s"),
                                        done: o.done
                                    } : void 0),
                                    m = _.bidders,
                                    g = w[_.adapter],
                                    h = f[0].tid,
                                    b = f[0].adUnitsS2SCopy;
                                if (g) {
                                    var E = {
                                        tid: h,
                                        ad_units: b
                                    };
                                    if (E.ad_units.length) {
                                        var T = f.map(function (t) {
                                                return t.start = Object(r.timestamp)(),
                                                    i.bind(t)
                                            }),
                                            S = E.ad_units.reduce(function (t, e) {
                                                    return t.concat((e.bids || []).reduce(function (t, e) {
                                                            return t.concat(e.bidder)
                                                        },
                                                        []))
                                                },
                                                []);
                                        A.logMessage("CALLING S2S HEADER BIDDERS ==== ".concat(m.filter(function (t) {
                                                return u()(S, t)
                                            }).join(","))),
                                            f.forEach(function (t) {
                                                y.emit(v.EVENTS.BID_REQUESTED, t)
                                            }),
                                            g.callBids(E, f,
                                                function (t, e) {
                                                    var i = Object(r.getBidderRequest)(f, e.bidderCode, t);
                                                    i && n.call(i, t, e)
                                                },
                                                function () {
                                                    return T.forEach(function (t) {
                                                        return t()
                                                    })
                                                },
                                                p)
                                    }
                                }
                            }
                            l.forEach(function (t) {
                                t.start = Object(r.timestamp)();
                                var e = w[t.bidderCode];
                                A.logMessage("CALLING BIDDER ======= ".concat(t.bidderCode)),
                                    y.emit(v.EVENTS.BID_REQUESTED, t);
                                var d = Object(s.b)(a, o ? {
                                    request: o.request.bind(null, t.bidderCode),
                                    done: o.done
                                } : void 0);
                                e.callBids(t, n.bind(t), i.bind(t), d, c)
                            })
                        } else A.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?")
                    },
                    b.videoAdapters = [],
                    b.registerBidAdapter = function (t, e) {
                        var n = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes,
                            r = void 0 === n ? [] : n;
                        t && e ? "function" == typeof t.callBids ? (w[e] = t, u()(r, "video") && b.videoAdapters.push(e), u()(r, "native") && o.e.push(e)) : A.logError("Bidder adaptor error for bidder code: " + e + "bidder must implement a callBids() function") : A.logError("bidAdaptor or bidderCode not specified")
                    },
                    b.aliasBidAdapter = function (t, e) {
                        if (void 0 === w[e]) {
                            var n = w[t];
                            if (void 0 === n) {
                                var r = c.b.getConfig("s2sConfig"),
                                    i = r && r.bidders;
                                i && u()(i, e) ? E[e] = t : A.logError('bidderCode "' + t + '" is not an existing bidder.', "adapterManager.aliasBidAdapter")
                            } else try {
                                var s, d = function (t) {
                                    var e = [];
                                    return u()(b.videoAdapters, t) && e.push("video"),
                                        u()(o.e, t) && e.push("native"),
                                        e
                                }(t);
                                if (n.constructor.prototype != Object.prototype)(s = new n.constructor).setBidderCode(e);
                                else {
                                    var l = n.getSpec();
                                    s = Object(a.newBidder)(g({},
                                            l, {
                                                code: e
                                            })),
                                        E[e] = t
                                }
                                b.registerBidAdapter(s, e, {
                                    supportedMediaTypes: d
                                })
                            } catch (e) {
                                A.logError(t + " bidder does not currently support aliasing.", "adapterManager.aliasBidAdapter")
                            }
                        } else A.logMessage('alias name "' + e + '" has been already specified.')
                    },
                    b.registerAnalyticsAdapter = function (t) {
                        var e = t.adapter,
                            n = t.code;
                        e && n ? "function" == typeof e.enableAnalytics ? (e.code = n, T[n] = e) : A.logError('Prebid Error: Analytics adaptor error for analytics "'.concat(n, '"\n        analytics adapter must implement an enableAnalytics() function')) : A.logError("Prebid Error: analyticsAdapter or analyticsCode not specified")
                    },
                    b.enableAnalytics = function (t) {
                        A.isArray(t) || (t = [t]),
                            A._each(t,
                                function (t) {
                                    var e = T[t.provider];
                                    e ? e.enableAnalytics(t) : A.logError("Prebid Error: no analytics adapter found in registry for\n        ".concat(t.provider, "."))
                                })
                    },
                    b.getBidAdapter = function (t) {
                        return w[t]
                    },
                    b.callTimedOutBidders = function (t, e, n) {
                        e = e.map(function (e) {
                                return e.params = A.getUserConfiguredParams(t, e.adUnitCode, e.bidder),
                                    e.timeout = n,
                                    e
                            }),
                            e = A.groupBy(e, "bidder"),
                            Object.keys(e).forEach(function (t) {
                                O(t, "onTimeout", e[t])
                            })
                    },
                    b.callBidWonBidder = function (t, e, n) {
                        e.params = A.getUserConfiguredParams(n, e.adUnitCode, e.bidder),
                            O(t, "onBidWon", e)
                    },
                    b.callSetTargetingBidder = function (t, e) {
                        O(t, "onSetTargeting", e)
                    },
                    e.
                default = b
            },
            70: function (t, e) {
                t.exports = function (t, e, n, r) {
                    if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
                    return t
                }
            },
            71: function (t, e, n) {
                var r = n(27);
                t.exports = function (t, e, n, i) {
                    try {
                        return i ? e(r(n)[0], n[1]) : e(n)
                    } catch (e) {
                        var o = t.
                        return;
                        throw void 0 !== o && r(o.call(t)),
                            e
                    }
                }
            },
            72: function (t, e, n) {
                var r = n(30),
                    i = n(14)("iterator"),
                    o = Array.prototype;
                t.exports = function (t) {
                    return void 0 !== t && (r.Array === t || o[i] === t)
                }
            },
            73: function (t, e, n) {
                var r = n(74),
                    i = n(14)("iterator"),
                    o = n(30);
                t.exports = n(16).getIteratorMethod = function (t) {
                    if (null != t) return t[i] || t["@@iterator"] || o[r(t)]
                }
            },
            74: function (t, e, n) {
                var r = n(32),
                    i = n(14)("toStringTag"),
                    o = "Arguments" == r(function () {
                        return arguments
                    }());
                t.exports = function (t) {
                    var e, n, a;
                    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
                        try {
                            return t[e]
                        } catch (t) {}
                    }(e = Object(t), i)) ? n : o ? r(e) : "Object" == (a = r(e)) && "function" == typeof e.callee ? "Arguments" : a
                }
            },
            75: function (t, e, n) {
                function r(t) {
                    s(t, i, {
                        value: {
                            i: "O" + ++c,
                            w: {}
                        }
                    })
                }
                var i = n(46)("meta"),
                    o = n(18),
                    a = n(28),
                    s = n(20).f,
                    c = 0,
                    d = Object.isExtensible ||
                    function () {
                        return !0
                    },
                    u = !n(31)(function () {
                        return d(Object.preventExtensions({}))
                    }),
                    l = t.exports = {
                        KEY: i,
                        NEED: !1,
                        fastKey: function (t, e) {
                            if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                            if (!a(t, i)) {
                                if (!d(t)) return "F";
                                if (!e) return "E";
                                r(t)
                            }
                            return t[i].i
                        },
                        getWeak: function (t, e) {
                            if (!a(t, i)) {
                                if (!d(t)) return !0;
                                if (!e) return !1;
                                r(t)
                            }
                            return t[i].w
                        },
                        onFreeze: function (t) {
                            return u && l.NEED && d(t) && !a(t, i) && r(t),
                                t
                        }
                    }
            },
            76: function (t, e, n) {
                var r = n(18);
                t.exports = function (t, e) {
                    if (!r(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
                    return t
                }
            },
            77: function (t, e, n) {
                "use strict";
                e.a = function (t, e) {
                    o.adServers = o.adServers || {},
                        o.adServers[t] = o.adServers[t] || {},
                        Object.keys(e).forEach(function (n) {
                            o.adServers[t][n] ? Object(i.logWarn)("Attempting to add an already registered function property ".concat(n, " for AdServer ").concat(t, ".")) : o.adServers[t][n] = e[n]
                        })
                };
                var r = n(38),
                    i = n(0),
                    o = Object(r.a)()
            },
            8: function (t, e, n) {
                function r() {
                    return (r = Object.assign ||
                        function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = arguments[e];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                            }
                            return t
                        }).apply(this, arguments)
                }
                var i, o, a = n(0),
                    s = n(4),
                    c = Array.prototype.slice,
                    d = Array.prototype.push,
                    u = a._map(s.EVENTS,
                        function (t) {
                            return t
                        }),
                    l = s.EVENT_ID_PATHS,
                    f = [];
                t.exports = (i = {},
                    (o = {}).on = function (t, e, n) {
                        if (function (t) {
                                return a.contains(u, t)
                            }(t)) {
                            var r = i[t] || {
                                que: []
                            };
                            n ? (r[n] = r[n] || {
                                        que: []
                                    },
                                    r[n].que.push(e)) : r.que.push(e),
                                i[t] = r
                        } else a.logError("Wrong event name : " + t + " Valid event names :" + u)
                    },
                    o.emit = function (t) {
                        !
                        function (t, e) {
                            a.logMessage("Emitting event for: " + t);
                            var n = e[0] || {},
                                r = n[l[t]],
                                o = i[t] || {
                                    que: []
                                },
                                s = a._map(o,
                                    function (t, e) {
                                        return e
                                    }),
                                c = [];
                            f.push({
                                    eventType: t,
                                    args: n,
                                    id: r
                                }),
                                r && a.contains(s, r) && d.apply(c, o[r].que),
                                d.apply(c, o.que),
                                a._each(c,
                                    function (t) {
                                        if (t) try {
                                            t.apply(null, e)
                                        } catch (t) {
                                            a.logError("Error executing handler:", "events.js", t)
                                        }
                                    })
                        }(t, c.call(arguments, 1))
                    },
                    o.off = function (t, e, n) {
                        var r = i[t];
                        a.isEmpty(r) || a.isEmpty(r.que) && a.isEmpty(r[n]) || n && (a.isEmpty(r[n]) || a.isEmpty(r[n].que)) || (n ? a._each(r[n].que,
                            function (t) {
                                var i = r[n].que;
                                t === e && i.splice(a.indexOf.call(i, t), 1)
                            }) : a._each(r.que,
                            function (t) {
                                var n = r.que;
                                t === e && n.splice(a.indexOf.call(n, t), 1)
                            }), i[t] = r)
                    },
                    o.get = function () {
                        return i
                    },
                    o.getEvents = function () {
                        var t = [];
                        return a._each(f,
                                function (e) {
                                    var n = r({},
                                        e);
                                    t.push(n)
                                }),
                            t
                    },
                    o)
            },
            80: function (t, e, n) {
                "use strict";
                var r = n(15),
                    i = n(43)(5),
                    o = "find",
                    a = !0;
                o in [] && Array(1)[o](function () {
                        a = !1
                    }),
                    r(r.P + r.F * a, "Array", {
                        find: function (t, e) {
                            return i(this, t, 1 < arguments.length ? e : void 0)
                        }
                    }),
                    n(35)(o)
            },
            81: function (t, e, n) {
                t.exports = !n(22) && !n(31)(function () {
                    return 7 != Object.defineProperty(n(55)("div"), "a", {
                        get: function () {
                            return 7
                        }
                    }).a
                })
            },
            82: function (t, e, n) {
                var r = n(18);
                t.exports = function (t, e) {
                    if (!r(t)) return t;
                    var n, i;
                    if (e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
                    if ("function" == typeof (n = t.valueOf) && !r(i = n.call(t))) return i;
                    if (!e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
                    throw TypeError("Can't convert object to primitive value")
                }
            },
            83: function (t, e, n) {
                var r = n(84);
                t.exports = function (t, e) {
                    return new(r(t))(e)
                }
            },
            84: function (t, e, n) {
                var r = n(18),
                    i = n(85),
                    o = n(14)("species");
                t.exports = function (t) {
                    var e;
                    return i(t) && ("function" != typeof (e = t.constructor) || e !== Array && !i(e.prototype) || (e = void 0), r(e) && null === (e = e[o]) && (e = void 0)),
                        void 0 === e ? Array : e
                }
            },
            85: function (t, e, n) {
                var r = n(32);
                t.exports = Array.isArray ||
                    function (t) {
                        return "Array" == r(t)
                    }
            },
            86: function (t, e, n) {
                "use strict";
                var r = n(15),
                    i = n(59)(!0);
                r(r.P, "Array", {
                        includes: function (t, e) {
                            return i(this, t, 1 < arguments.length ? e : void 0)
                        }
                    }),
                    n(35)("includes")
            },
            87: function (t, e, n) {
                var r = n(45),
                    i = Math.max,
                    o = Math.min;
                t.exports = function (t, e) {
                    return (t = r(t)) < 0 ? i(t + e, 0) : o(t, e)
                }
            },
            88: function (t, e) {
                t.exports = function t(e) {
                    var n = Array.isArray(e) ? [] : {};
                    for (var r in e) {
                        var i = e[r];
                        n[r] = i && "object" == typeof i ? t(i) : i
                    }
                    return n
                }
            },
            89: function (t, e, n) {
                t.exports = function (t, e, n, r, i) {
                    for (e = e.split ? e.split(".") : e, r = 0; r < e.length; r++) t = t ? t[e[r]] : i;
                    return t === i ? n : t
                }
            },
            9: function (t, e, n) {
                n(86),
                    t.exports = n(16).Array.includes
            },
            90: function (t, e, n) {
                "use strict";
                e.a = function (t, e, n) {
                    e.split && (e = e.split("."));
                    for (var r, i = 0,
                            o = e.length,
                            a = t; i < o; ++i) r = a[e[i]],
                        a = a[e[i]] = i === o - 1 ? n : null != r ? r : !~e[i + 1].indexOf(".") && -1 < +e[i + 1] ? [] : {}
                }
            },
            91: function (t, e) {
                s.SYNC = 1,
                    s.ASYNC = 2,
                    s.QUEUE = 4;
                var n = "fun-hooks",
                    r = Object.freeze({
                        useProxy: !0,
                        ready: 0
                    }),
                    i = "2,1,0" === [1].reduce(function (t, e, n) {
                            return [t, e, n]
                        },
                        2).toString() ? Array.prototype.reduce : function (t, e) {
                        var n, r = Object(this),
                            i = r.length >>> 0,
                            o = 0;
                        if (e) n = e;
                        else {
                            for (; o < i && !(o in r);) o++;
                            n = r[o++]
                        }
                        for (; o < i;) o in r && (n = t(n, r[o], o, r)),
                            o++;
                        return n
                    };

                function o(t, e) {
                    return Array.prototype.slice.call(t, e)
                }
                var a = Object.assign ||
                    function (t) {
                        return i.call(o(arguments, 1),
                            function (t, e) {
                                return e && Object.keys(e).forEach(function (n) {
                                        t[n] = e[n]
                                    }),
                                    t
                            },
                            t)
                    };

                function s(t) {
                    var e, c = {},
                        d = [];

                    function u(t, e) {
                        return "function" == typeof t ? p.call(null, "sync", t, e) : "string" == typeof t && "function" == typeof e ? p.apply(null, arguments) : "object" == typeof t ?
                            function (t, e, n) {
                                var r = !0;
                                void 0 === e && (e = Object.getOwnPropertyNames(t), r = !1);
                                for (var i = {},
                                        o = ["constructor"];
                                    (e = e.filter(function (e) {
                                        return !("function" != typeof t[e] || -1 !== o.indexOf(e) || e.match(/^_/))
                                    })).forEach(function (e) {
                                        var r = e.split(":"),
                                            o = r[0],
                                            a = r[1] || "sync";
                                        if (!i[o]) {
                                            var s = t[o];
                                            i[o] = t[o] = p(a, s, n ? [n, o] : void 0)
                                        }
                                    }), t = Object.getPrototypeOf(t), r && t;);
                                return i
                            }.apply(null, arguments) : void 0
                    }

                    function l(t) {
                        var r = Array.isArray(t) ? t : t.split(".");
                        return i.call(r,
                            function (i, o, a) {
                                var s = !1;
                                return i[o] || (a === r.length - 1 ? (e || d.push(function () {
                                    s || console.warn(n + ": referenced '" + t + "' but it was never created")
                                }), i[o] = f(function (t) {
                                    i[o] = t,
                                        s = !0
                                })) : i[o] = {})
                            },
                            c)
                    }

                    function f(t) {
                        var e = [],
                            n = [],
                            r = function () {};
                        return {
                            __funHook: {
                                install: function (i, o, a) {
                                    this.type = i,
                                        this.fn = o,
                                        (r = a)(e, n),
                                        t && t(o)
                                }
                            },
                            before: function (t, n) {
                                return i.call(this, e, "before", t, n)
                            },
                            after: function (t, e) {
                                return i.call(this, n, "after", t, e)
                            },
                            getHooks: function (t) {
                                var r = e.concat(n);
                                return "object" == typeof t && (r = r.filter(function (e) {
                                        return Object.keys(t).every(function (n) {
                                            return e[n] === t[n]
                                        })
                                    })),
                                    a(r, {
                                        remove: function () {
                                            return r.forEach(function (t) {
                                                    t.remove()
                                                }),
                                                this
                                        }
                                    })
                            },
                            removeAll: function () {
                                return this.getHooks().remove()
                            }
                        };

                        function i(t, i, o, a) {
                            var s = {
                                hook: o,
                                type: i,
                                priority: a || 10,
                                remove: function () {
                                    var i = t.indexOf(s); - 1 !== i && (t.splice(i, 1), r(e, n))
                                }
                            };
                            return t.push(s),
                                t.sort(function (t, e) {
                                    return e.priority - t.priority
                                }),
                                r(e, n),
                                this
                        }
                    }

                    function p(r, i, c) {
                        if (i.__funHook) {
                            if (i.__funHook.type !== r) throw n + ": recreated hookable with different type";
                            return i.__funHook.fn
                        }
                        var u, p, m = c ? l(c) : f(),
                            g = {
                                get: function (t, e) {
                                    return m[e] || Reflect.get.apply(Reflect, arguments)
                                }
                            };
                        return e || d.push(h),
                            t.useProxy && "function" == typeof Proxy && Proxy.revocable ? p = new Proxy(i, g) : a(p = function () {
                                    return g.apply ? g.apply(i, this, o(arguments)) : i.apply(this, arguments)
                                },
                                m),
                            m.__funHook.install(r, p,
                                function (t, e) {
                                    var n, i = [];

                                    function a(t) {
                                        i.push(t.hook)
                                    }
                                    u = t.length || e.length ? (t.forEach(a), n = i.push(void 0) - 1, e.forEach(a),
                                            function (t, e, a) {
                                                var s, c = 0,
                                                    d = "async" === r && "function" == typeof a[a.length - 1] && a.pop();

                                                function u(t) {
                                                    "sync" === r ? s = t : d && d.apply(null, arguments)
                                                }

                                                function l(t) {
                                                    if (i[c]) {
                                                        var n = o(arguments);
                                                        return l.bail = u,
                                                            n.unshift(l),
                                                            i[c++].apply(e, n)
                                                    }
                                                    "sync" === r ? s = t : d && d.apply(null, arguments)
                                                }
                                                return i[n] = function () {
                                                        var n = o(arguments, 1);
                                                        "async" === r && d && (delete l.bail, n.push(l));
                                                        var i = t.apply(e, n);
                                                        "sync" === r && l(i)
                                                    },
                                                    l.apply(null, a),
                                                    s
                                            }) : void 0,
                                        h()
                                }),
                            p;

                        function h() {
                            !e && ("sync" !== r || t.ready & s.SYNC) && ("async" !== r || t.ready & s.ASYNC) ? "sync" !== r && t.ready & s.QUEUE ? g.apply = function () {
                                var t = arguments;
                                d.push(function () {
                                    p.apply(t[1], t[2])
                                })
                            } : g.apply = function () {
                                throw n + ": hooked function not ready"
                            } : g.apply = u
                        }
                    }
                    return (t = a({},
                            r, t)).ready ? u.ready = function () {
                            e = !0,
                                function (t) {
                                    for (var e; e = t.shift();) e()
                                }(d)
                        } : e = !0,
                        u.get = l,
                        u
                }
                t.exports = s
            }
        }),
        pbjsChunk([236], {
                    131: function (t, e, n) {
                        t.exports = n(132)
                    },
                    132: function (t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                                value: !0
                            }),
                            e.callPrebidCacheHook = I,
                            e.checkAdUnitSetupHook = k,
                            e.checkVideoBidSetupHook = O,
                            e.adpodSetConfig = C,
                            e.callPrebidCacheAfterAuction = x,
                            e.sortByPricePerSecond = D,
                            e.getTargeting = P;
                        var r = n(0),
                            i = n(37),
                            o = n(63),
                            a = n(49),
                            s = n(13),
                            c = n(62),
                            d = n(3),
                            u = n(2),
                            l = n(135),
                            f = n.n(l),
                            p = n(11),
                            m = n.n(p),
                            g = n(29);

                        function h() {
                            return (h = Object.assign ||
                                function (t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var n = arguments[e];
                                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                                    }
                                    return t
                                }).apply(this, arguments)
                        }

                        function A(t, e, n) {
                            return e in t ? Object.defineProperty(t, e, {
                                    value: n,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : t[e] = n,
                                t
                        }
                        var v, y = n(158),
                            b = "hb_pb_cat_dur",
                            w = "hb_cache_id",
                            E = 50,
                            _ = 5,
                            T = (v = {}, {
                                addBid: function (t) {
                                    v[t.auctionId] ||
                                        function (t) {
                                            v[t] = {},
                                                v[t].bidStorage = new f.a,
                                                v[t].queueDispatcher = function (t) {
                                                    var e, n = 1;
                                                    return function (o, a, s, d) {
                                                        function u() {
                                                            (function (t, e, n) {
                                                                (function (t) {
                                                                    for (var e = 0; e < t.length; e++) T.removeBid(t[e])
                                                                })(e),
                                                                Object(c.b)(e,
                                                                    function (o, a) {
                                                                        if (o) {
                                                                            r.logWarn("Failed to save to the video cache: ".concat(o, ". Video bid(s) must be discarded."));
                                                                            for (var s = 0; s < e.length; s++) Object(i.f)(t, e[s])
                                                                        } else
                                                                            for (var c = 0; c < a.length; c++) "" !== a[c].uuid ? Object(i.d)(t, e[c]) : r.logInfo("Detected a bid was not cached because the custom key was already registered.  Attempted to use key: ".concat(e[c].customCacheKey, ". Bid was: "), e[c]),
                                                                                n()
                                                                    })
                                                            }).call(l, o, a, s)
                                                        }
                                                        var l = this;
                                                        clearTimeout(e),
                                                            d ? n = 1 : n === _ ? (n = 1, u()) : (n++, e = setTimeout(u, t))
                                                    }
                                                }(E),
                                                v[t].initialCacheKey = r.generateUUID()
                                        }(t.auctionId),
                                        v[t.auctionId].bidStorage.add(t)
                                },
                                removeBid: function (t) {
                                    v[t.auctionId].bidStorage.delete(t)
                                },
                                getBids: function (t) {
                                    return v[t.auctionId] && v[t.auctionId].bidStorage.values()
                                },
                                getQueueDispatcher: function (t) {
                                    return v[t.auctionId] && v[t.auctionId].queueDispatcher
                                },
                                setupInitialCacheKey: function (t) {
                                    v[t.auctionId] || (v[t.auctionId] = {},
                                        v[t.auctionId].initialCacheKey = r.generateUUID())
                                },
                                getInitialCacheKey: function (t) {
                                    return v[t.auctionId] && v[t.auctionId].initialCacheKey
                                }
                            });

                        function S(t, e) {
                            var n, i = T.getInitialCacheKey(t),
                                o = r.deepAccess(t, "video.durationBucket"),
                                a = t.cpm.toFixed(2);
                            if (e) {
                                var s = r.deepAccess(t, "meta.adServerCatId");
                                n = "".concat(a, "_").concat(s, "_").concat(o, "s")
                            } else n = "".concat(a, "_").concat(o, "s");
                            t.adserverTargeting || (t.adserverTargeting = {}),
                                t.adserverTargeting[b] = n,
                                t.adserverTargeting[w] = i,
                                t.videoCacheKey = i,
                                t.customCacheKey = "".concat(n, "_").concat(i)
                        }

                        function I(t, e, n, o, a) {
                            var s = r.deepAccess(a, "mediaTypes.video");
                            if (s && s.context === u.a) {
                                var c = d.b.getConfig("adpod.brandCategoryExclusion");
                                !r.deepAccess(n, "meta.adServerCatId") && c ? (r.logWarn("Detected a bid without meta.adServerCatId while setConfig({adpod.brandCategoryExclusion}) was enabled.  This bid has been rejected:", n), o()) : !1 === d.b.getConfig("adpod.deferCaching") ? (T.addBid(n), S(n, c),
                                    function (t, e, n) {
                                        var o = T.getBids(e);
                                        if (o) {
                                            var a = y(o);
                                            T.getQueueDispatcher(e)(t, a, n, !(t.getAuctionStatus() === i.b))
                                        } else r.logWarn("Attempted to cache a bid from an unknown auction. Bid:", e)
                                    }(e, n, o)) : (T.setupInitialCacheKey(n), S(n, c), Object(i.d)(e, n), o())
                            } else t.call(this, e, n, o, a)
                        }

                        function k(t, e) {
                            e = e.filter(function (t) {
                                    var e = r.deepAccess(t, "mediaTypes"),
                                        n = r.deepAccess(e, "video");
                                    if (n && n.context === u.a) {
                                        if (1 < Object.keys(e).length) return r.logWarn("Detected more than one mediaType in adUnitCode: ".concat(t.code, " while attempting to define an 'adpod' video adUnit.  'adpod' adUnits cannot be mixed with other mediaTypes.  This adUnit will be removed from the auction.")),
                                            !1;
                                        var i = "Detected missing or incorrectly setup fields for an adpod adUnit.  Please review the following fields of adUnitCode: ".concat(t.code, ".  This adUnit will be removed from the auction."),
                                            o = !(!n.playerSize || !r.isArrayOfNums(n.playerSize)),
                                            a = !!(n.adPodDurationSec && r.isNumber(n.adPodDurationSec) && 0 < n.adPodDurationSec),
                                            s = !!(n.durationRangeSec && r.isArrayOfNums(n.durationRangeSec) && n.durationRangeSec.every(function (t) {
                                                return 0 < t
                                            }));
                                        if (!o || !a || !s) return i += o ? "" : "\nmediaTypes.video.playerSize",
                                            i += a ? "" : "\nmediaTypes.video.adPodDurationSec",
                                            i += s ? "" : "\nmediaTypes.video.durationRangeSec",
                                            r.logWarn(i),
                                            !1
                                    }
                                    return !0
                                }),
                                t.call(this, e)
                        }

                        function O(t, e, n, i, o) {
                            if (o === u.a) {
                                var a = !0;
                                d.b.getConfig("adpod.brandCategoryExclusion") && !r.deepAccess(e, "meta.iabSubCatId") && (a = !1),
                                    r.deepAccess(e, "video") && (r.deepAccess(e, "video.context") && e.video.context === u.a || (a = !1), !r.deepAccess(e, "video.durationSeconds") || e.video.durationSeconds <= 0 ? a = !1 : function (t, e) {
                                        var n = r.deepAccess(e, "video.durationSeconds"),
                                            i = r.deepAccess(t, "mediaTypes.video"),
                                            o = i.durationRangeSec;
                                        if (o.sort(function (t, e) {
                                                return t - e
                                            }), i.requireExactDuration) {
                                            if (!m()(o,
                                                    function (t) {
                                                        return t === n
                                                    })) return r.logWarn("Detected a bid with a duration value not part of the list of accepted ranges specified in adUnit.mediaTypes.video.durationRangeSec.  Exact match durations must be used for this adUnit. Rejecting bid: ", e),
                                                !1;
                                            e.video.durationBucket = n
                                        } else {
                                            var a = Math.max.apply(Math,
                                                function (t) {
                                                    return function (t) {
                                                            if (Array.isArray(t)) {
                                                                for (var e = 0,
                                                                        n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                                                                return n
                                                            }
                                                        }(t) ||
                                                        function (t) {
                                                            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
                                                        }(t) ||
                                                        function () {
                                                            throw new TypeError("Invalid attempt to spread non-iterable instance")
                                                        }()
                                                }(o));
                                            if (!(n <= a + 2)) return r.logWarn("Detected a bid with a duration value outside the accepted ranges specified in adUnit.mediaTypes.video.durationRangeSec.  Rejecting bid: ", e),
                                                !1;
                                            var s = m()(o,
                                                function (t) {
                                                    return n <= t + 2
                                                });
                                            e.video.durationBucket = s
                                        }
                                        return !0
                                    }(n, e) || (a = !1)),
                                    d.b.getConfig("cache.url") || !e.vastXml || e.vastUrl || (r.logError('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), a = !1),
                                    t.bail(a)
                            } else t.call(this, e, n, i, o)
                        }

                        function C(t) {
                            void 0 !== t.bidQueueTimeDelay && ("number" == typeof t.bidQueueTimeDelay && 0 < t.bidQueueTimeDelay ? E = t.bidQueueTimeDelay : r.logWarn("Detected invalid value for adpod.bidQueueTimeDelay in setConfig; must be a positive number.  Using default: ".concat(E))),
                                void 0 !== t.bidQueueSizeLimit && ("number" == typeof t.bidQueueSizeLimit && 0 < t.bidQueueSizeLimit ? _ = t.bidQueueSizeLimit : r.logWarn("Detected invalid value for adpod.bidQueueSizeLimit in setConfig; must be a positive number.  Using default: ".concat(_)))
                        }

                        function x(t, e) {
                            Object(c.b)(t,
                                function (n, r) {
                                    if (n) e(n, null);
                                    else {
                                        for (var i = [], o = 0; o < r.length; o++) "" !== r[o] && i.push(t[o]);
                                        e(null, i)
                                    }
                                })
                        }

                        function D(t, e) {
                            return t.cpm / t.video.durationBucket < e.cpm / e.video.durationBucket ? 1 : t.cpm / t.video.durationBucket > e.cpm / e.video.durationBucket ? -1 : 0
                        }

                        function P() {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                                e = t.codes,
                                n = t.callback;
                            if (n) {
                                var i = function (t) {
                                        return g.a.getAdUnits().filter(function (t) {
                                            return r.deepAccess(t, "mediaTypes.video.context") === u.a
                                        }).filter(function (e) {
                                            return !(0 < t.length) || -1 != t.indexOf(e.code)
                                        })
                                    }(e = e || []),
                                    o = g.a.getBidsReceived(),
                                    a = d.b.getConfig("adpod.brandCategoryExclusion"),
                                    s = d.b.getConfig("adpod.deferCaching"),
                                    c = "boolean" != typeof s || s,
                                    l = function (t, e) {
                                        var n = e.map(function (t) {
                                            return t.code
                                        });
                                        return t.filter(function (t) {
                                            return -1 != n.indexOf(t.adUnitCode) && t.video && t.video.context === u.a
                                        })
                                    }(o, i);
                                (l = a || c ?
                                    function (t) {
                                        var e = l.map(function (t) {
                                            return h({},
                                                t, A({},
                                                    b, t.adserverTargeting[b]))
                                        });
                                        e = r.groupBy(e, b);
                                        var n = [];
                                        return Object.keys(e).forEach(function (t) {
                                                e[t].sort(r.compareOn("responseTimestamp")),
                                                    n.push(e[t][0])
                                            }),
                                            n
                                    }() : l).sort(D);
                                var f = {};
                                if (!1 === c) i.forEach(function (t) {
                                        var e = [],
                                            n = r.deepAccess(t, "mediaTypes.video.adPodDurationSec");
                                        l.filter(function (e) {
                                                return e.adUnitCode === t.code
                                            }).forEach(function (t, r, i) {
                                                t.video.durationBucket <= n && (e.push(A({},
                                                        b, t.adserverTargeting[b])), n -= t.video.durationBucket),
                                                    r === i.length - 1 && 0 < e.length && e.push(A({},
                                                        w, t.adserverTargeting[w]))
                                            }),
                                            f[t.code] = e
                                    }),
                                    n(null, f);
                                else {
                                    var p = [];
                                    i.forEach(function (t) {
                                            var e = r.deepAccess(t, "mediaTypes.video.adPodDurationSec");
                                            l.filter(function (e) {
                                                return e.adUnitCode === t.code
                                            }).forEach(function (t) {
                                                t.video.durationBucket <= e && (p.push(t), e -= t.video.durationBucket)
                                            })
                                        }),
                                        x(p,
                                            function (t, e) {
                                                if (t) n(t, null);
                                                else {
                                                    var i = r.groupBy(e, "adUnitCode");
                                                    Object.keys(i).forEach(function (t) {
                                                            var e = [];
                                                            i[t].forEach(function (t, n, r) {
                                                                    e.push(A({},
                                                                            b, t.adserverTargeting[b])),
                                                                        n === r.length - 1 && 0 < e.length && e.push(A({},
                                                                            w, t.adserverTargeting[w]))
                                                                }),
                                                                f[t] = e
                                                        }),
                                                        n(null, f)
                                                }
                                            })
                                }
                                return f
                            }
                            r.logError("No callback function was defined in the getTargeting call.  Aborting getTargeting().")
                        }
                        d.b.getConfig("adpod",
                                function (t) {
                                    return C(t.adpod)
                                }),
                            Object(s.d)(i.e, I),
                            Object(s.d)(o.checkAdUnitSetup, k),
                            Object(s.d)(a.b, O);
                        var B = {
                            TARGETING_KEY_PB_CAT_DUR: b,
                            TARGETING_KEY_CACHE_ID: w,
                            getTargeting: P
                        };
                        Object.freeze(B),
                            Object(s.c)("adpod",
                                function (t) {
                                    r.isPlainObject(arguments.length <= 0 ? void 0 : t) ?
                                        function (t, e) {
                                            for (var n in e) t[n] = e[n]
                                        }(arguments.length <= 0 ? void 0 : t, B) : r.logError("Adpod module needs plain object to share methods with submodule")
                                })
                    }
                },
                [131]),
            pbjsChunk([222], {
                    196: function (t, e, n) {
                        t.exports = n(197)
                    },
                    197: function (t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                                value: !0
                            }),
                            n.d(e, "spec",
                                function () {
                                    return S
                                });
                        var r = n(12),
                            i = n(0),
                            o = n(3),
                            a = n(1),
                            s = n(2),
                            c = n(11),
                            d = n.n(c),
                            u = n(9),
                            l = n.n(u);

                        function f(t) {
                            return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                                function (t) {
                                    return typeof t
                                } : function (t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                })(t)
                        }

                        function p() {
                            return (p = Object.assign ||
                                function (t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var n = arguments[e];
                                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                                    }
                                    return t
                                }).apply(this, arguments)
                        }

                        function m(t) {
                            return function (t) {
                                    if (Array.isArray(t)) {
                                        for (var e = 0,
                                                n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                                        return n
                                    }
                                }(t) ||
                                function (t) {
                                    if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
                                }(t) ||
                                function () {
                                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                                }()
                        }
                        var g = "appnexus",
                            h = "//ib.adnxs.com/ut/v3/prebid",
                            A = ["id", "mimes", "minduration", "maxduration", "startdelay", "skippable", "playback_method", "frameworks"],
                            v = ["age", "externalUid", "segments", "gender", "dnt", "language"],
                            y = ["geo", "device_id"],
                            b = ["enabled", "dongle", "member_id", "debug_timeout"],
                            w = {
                                body: "description",
                                body2: "desc2",
                                cta: "ctatext",
                                image: {
                                    serverName: "main_image",
                                    requiredParams: {
                                        required: !0
                                    }
                                },
                                icon: {
                                    serverName: "icon",
                                    requiredParams: {
                                        required: !0
                                    }
                                },
                                sponsoredBy: "sponsored_by",
                                privacyLink: "privacy_link",
                                salePrice: "saleprice",
                                displayUrl: "displayurl"
                            },
                            E = "<script",
                            _ = /http:\/\/cdn\.adnxs\.com\/v/,
                            T = "trk.js",
                            S = {
                                code: g,
                                aliases: ["appnexusAst", "brealtime", "emxdigital", "pagescience", "defymedia", "gourmetads", "matomy", "featureforward", "oftmedia", "districtm"],
                                supportedMediaTypes: [s.b, s.d, s.c],
                                isBidRequestValid: function (t) {
                                    return !!(t.params.placementId || t.params.member && t.params.invCode)
                                },
                                buildRequests: function (t, e) {
                                    var n, r = t.map(C),
                                        a = d()(t, D);
                                    a && (n = {},
                                        Object.keys(a.params.user).filter(function (t) {
                                            return l()(v, t)
                                        }).forEach(function (t) {
                                            return n[t] = a.params.user[t]
                                        }));
                                    var s, c = d()(t, B);
                                    c && c.params && c.params.app && (s = {},
                                        Object.keys(c.params.app).filter(function (t) {
                                            return l()(y, t)
                                        }).forEach(function (t) {
                                            return s[t] = c.params.app[t]
                                        }));
                                    var u, f = d()(t, R);
                                    f && f.params && c.params.app && c.params.app.id && (u = {
                                        appid: f.params.app.id
                                    });
                                    var p = {},
                                        A = {},
                                        w = i.getCookie("apn_prebid_debug") || null;
                                    if (w) try {
                                        p = JSON.parse(w)
                                    } catch (t) {
                                        i.logError("AppNexus Debug Auction Cookie Error:\n\n" + t)
                                    } else {
                                        var E = d()(t, j);
                                        E && E.debug && (p = E.debug)
                                    }
                                    p && p.enabled && Object.keys(p).filter(function (t) {
                                        return l()(b, t)
                                    }).forEach(function (t) {
                                        A[t] = p[t]
                                    });
                                    var _ = d()(t, P),
                                        T = _ ? parseInt(_.params.member, 10) : 0,
                                        S = {
                                            tags: m(r),
                                            user: n,
                                            sdk: {
                                                source: "pbjs",
                                                version: "2.27.0"
                                            }
                                        };
                                    if (0 < T && (S.member_id = T), c && (S.device = s), f && (S.app = u), o.b.getConfig("adpod.brandCategoryExclusion") && (S.brand_category_uniqueness = !0), A.enabled && (S.debug = A, i.logInfo("AppNexus Debug Auction Settings:\n\n" + JSON.stringify(A, null, 4))), e && e.gdprConsent && (S.gdpr_consent = {
                                            consent_string: e.gdprConsent.consentString,
                                            consent_required: e.gdprConsent.gdprApplies
                                        }), e && e.refererInfo) {
                                        var I = {
                                            rd_ref: encodeURIComponent(e.refererInfo.referer),
                                            rd_top: e.refererInfo.reachedTop,
                                            rd_ifs: e.refererInfo.numIframes,
                                            rd_stk: e.refererInfo.stack.map(function (t) {
                                                return encodeURIComponent(t)
                                            }).join(",")
                                        };
                                        S.referrer_detection = I
                                    }
                                    d()(t, U) && t.filter(U).forEach(function (t) {
                                        var e = function (t, e) {
                                                var n = e.mediaTypes.video,
                                                    r = n.durationRangeSec,
                                                    o = n.requireExactDuration,
                                                    a = function (t) {
                                                        var e = t.adPodDurationSec,
                                                            n = t.durationRangeSec,
                                                            r = t.requireExactDuration,
                                                            o = i.getMinValueFromArray(n),
                                                            a = Math.floor(e / o);
                                                        return r ? Math.max(a, n.length) : a
                                                    }(e.mediaTypes.video),
                                                    s = i.getMaxValueFromArray(r),
                                                    c = t.filter(function (t) {
                                                        return t.uuid === e.bidId
                                                    }),
                                                    d = i.fill.apply(i, m(c).concat([a]));
                                                if (o) {
                                                    var u = Math.ceil(a / r.length),
                                                        l = i.chunk(d, u);
                                                    r.forEach(function (t, e) {
                                                        l[e].map(function (e) {
                                                            N(e, "minduration", t),
                                                                N(e, "maxduration", t)
                                                        })
                                                    })
                                                } else d.map(function (t) {
                                                    return N(t, "maxduration", s)
                                                });
                                                return d
                                            }(r, t),
                                            n = S.tags.filter(function (e) {
                                                return e.uuid !== t.bidId
                                            });
                                        S.tags = [].concat(m(n), m(e))
                                    });
                                    var k = i.deepAccess(t[0], "userId.criteortus.".concat(g, ".userid"));
                                    if (k) {
                                        var O = [];
                                        O.push({
                                                provider: "criteo",
                                                user_id: k
                                            }),
                                            S.tpuids = O
                                    }
                                    return function (t, e) {
                                        var n = [];
                                        if (15 < t.tags.length) {
                                            var r = i.deepClone(t);
                                            i.chunk(t.tags, 15).forEach(function (t) {
                                                r.tags = t;
                                                var i = JSON.stringify(r);
                                                n.push({
                                                    method: "POST",
                                                    url: h,
                                                    data: i,
                                                    bidderRequest: e
                                                })
                                            })
                                        } else {
                                            var o = JSON.stringify(t);
                                            n = {
                                                method: "POST",
                                                url: h,
                                                data: o,
                                                bidderRequest: e
                                            }
                                        }
                                        return n
                                    }(S, e)
                                },
                                interpretResponse: function (t, e) {
                                    var n = this,
                                        o = e.bidderRequest,
                                        c = [];
                                    if (!(t = t.body) || t.error) {
                                        var u = "in response for ".concat(o.bidderCode, " adapter");
                                        return t && t.error && (u += ": ".concat(t.error)),
                                            i.logError(u),
                                            c
                                    }
                                    if (t.tags && t.tags.forEach(function (t) {
                                            var e = function (t) {
                                                return t && t.ads && t.ads.length && d()(t.ads,
                                                    function (t) {
                                                        return t.rtb
                                                    })
                                            }(t);
                                            if (e && 0 !== e.cpm && l()(n.supportedMediaTypes, e.ad_type)) {
                                                var u = function (t, e, n) {
                                                    var o = i.getBidRequest(t.uuid, [n]),
                                                        c = {
                                                            requestId: t.uuid,
                                                            cpm: e.cpm,
                                                            creativeId: e.creative_id,
                                                            dealId: e.deal_id,
                                                            currency: "USD",
                                                            netRevenue: !0,
                                                            ttl: 300,
                                                            adUnitCode: o.adUnitCode,
                                                            appnexus: {
                                                                buyerMemberId: e.buyer_member_id,
                                                                dealPriority: e.deal_priority,
                                                                dealCode: e.deal_code
                                                            }
                                                        };
                                                    if (e.advertiser_id && (c.meta = p({},
                                                            c.meta, {
                                                                advertiserId: e.advertiser_id
                                                            })), e.rtb.video) {
                                                        if (p(c, {
                                                                width: e.rtb.video.player_width,
                                                                height: e.rtb.video.player_height,
                                                                vastUrl: e.rtb.video.asset_url,
                                                                vastImpUrl: e.notify_url,
                                                                ttl: 3600
                                                            }), i.deepAccess(o, "mediaTypes.video.context") === s.a) {
                                                            var d = Object(a.getIabSubCategory)(o.bidder, e.brand_category_id);
                                                            c.meta = p({},
                                                                    c.meta, {
                                                                        iabSubCatId: d
                                                                    }),
                                                                c.video = {
                                                                    context: s.a,
                                                                    durationSeconds: Math.floor(e.rtb.video.duration_ms / 1e3)
                                                                }
                                                        }
                                                        if (e.renderer_url) {
                                                            var u = i.deepAccess(n.bids[0], "renderer.options");
                                                            p(c, {
                                                                    adResponse: t,
                                                                    renderer: function (t, e) {
                                                                        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                                                                            o = r.a.install({
                                                                                id: e.renderer_id,
                                                                                url: e.renderer_url,
                                                                                config: n,
                                                                                loaded: !1,
                                                                                adUnitCode: t
                                                                            });
                                                                        try {
                                                                            o.setRender(z)
                                                                        } catch (t) {
                                                                            i.logWarn("Prebid Error calling setRender on renderer", t)
                                                                        }
                                                                        return o.setEventHandlers({
                                                                                impression: function () {
                                                                                    return i.logMessage("AppNexus outstream video impression event")
                                                                                },
                                                                                loaded: function () {
                                                                                    return i.logMessage("AppNexus outstream video loaded event")
                                                                                },
                                                                                ended: function () {
                                                                                    i.logMessage("AppNexus outstream renderer video event"),
                                                                                        document.querySelector("#".concat(t)).style.display = "none"
                                                                                }
                                                                            }),
                                                                            o
                                                                    }(c.adUnitCode, e, u)
                                                                }),
                                                                c.adResponse.ad = c.adResponse.ads[0],
                                                                c.adResponse.ad.video = c.adResponse.ad.rtb.video
                                                        }
                                                    } else if (e.rtb[s.c]) {
                                                        var l = e.rtb[s.c],
                                                            f = e.viewability.config.replace("src=", "data-src="),
                                                            m = l.javascript_trackers;
                                                        null == m ? m = f : i.isStr(m) ? m = [m, f] : m.push(f),
                                                            c[s.c] = {
                                                                title: l.title,
                                                                body: l.desc,
                                                                body2: l.desc2,
                                                                cta: l.ctatext,
                                                                rating: l.rating,
                                                                sponsoredBy: l.sponsored,
                                                                privacyLink: l.privacy_link,
                                                                address: l.address,
                                                                downloads: l.downloads,
                                                                likes: l.likes,
                                                                phone: l.phone,
                                                                price: l.price,
                                                                salePrice: l.saleprice,
                                                                clickUrl: l.link.url,
                                                                displayUrl: l.displayurl,
                                                                clickTrackers: l.link.click_trackers,
                                                                impressionTrackers: l.impression_trackers,
                                                                javascriptTrackers: m
                                                            },
                                                            l.main_img && (c.native.image = {
                                                                url: l.main_img.url,
                                                                height: l.main_img.height,
                                                                width: l.main_img.width
                                                            }),
                                                            l.icon && (c.native.icon = {
                                                                url: l.icon.url,
                                                                height: l.icon.height,
                                                                width: l.icon.width
                                                            })
                                                    } else {
                                                        p(c, {
                                                            width: e.rtb.banner.width,
                                                            height: e.rtb.banner.height,
                                                            ad: e.rtb.banner.content
                                                        });
                                                        try {
                                                            var g = e.rtb.trackers[0].impression_urls[0],
                                                                h = i.createTrackPixelHtml(g);
                                                            c.ad += h
                                                        } catch (t) {
                                                            i.logError("Error appending tracking pixel", t)
                                                        }
                                                    }
                                                    return c
                                                }(t, e, o);
                                                u.mediaType = function (t) {
                                                        var e = t.ad_type;
                                                        return e === s.d ? s.d : e === s.c ? s.c : s.b
                                                    }(e),
                                                    c.push(u)
                                            }
                                        }), t.debug && t.debug.debug_info) {
                                        var f = "AppNexus Debug Auction for Prebid\n\n" + t.debug.debug_info;
                                        f = f.replace(/(<td>|<th>)/gm, "\t").replace(/(<\/td>|<\/th>)/gm, "\n").replace(/^<br>/gm, "").replace(/(<br>\n|<br>)/gm, "\n").replace(/<h1>(.*)<\/h1>/gm, "\n\n===== $1 =====\n\n").replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, "\n\n*** $1 ***\n\n").replace(/(<([^>]+)>)/gim, ""),
                                            i.logMessage("https://console.appnexus.com/docs/understanding-the-debug-auction"),
                                            i.logMessage(f)
                                    }
                                    return c
                                },
                                getMappingFileInfo: function () {
                                    return {
                                        url: "//acdn.adnxs.com/prebid/appnexus-mapping/mappings.json",
                                        refreshInDays: 7
                                    }
                                },
                                getUserSyncs: function (t) {
                                    if (t.iframeEnabled) return [{
                                        type: "iframe",
                                        url: "//acdn.adnxs.com/ib/static/usersync/v3/async_usersync.html"
                                    }]
                                },
                                transformBidParams: function (t, e) {
                                    return t = i.convertTypes({
                                                member: "string",
                                                invCode: "string",
                                                placementId: "number",
                                                keywords: i.transformBidderParamKeywords
                                            },
                                            t),
                                        e && (t.use_pmt_rule = "boolean" == typeof t.usePaymentRule && t.usePaymentRule, t.usePaymentRule && delete t.usePaymentRule, I(t.keywords) && t.keywords.forEach(k), Object.keys(t).forEach(function (e) {
                                            var n = i.convertCamelToUnderscore(e);
                                            n !== e && (t[n] = t[e], delete t[e])
                                        })),
                                        t
                                },
                                onBidWon: function (t) {
                                    t.native &&
                                        function (t) {
                                            var e = function (t) {
                                                var e;
                                                if (i.isStr(t) && O(t)) e = t;
                                                else if (i.isArray(t))
                                                    for (var n = 0; n < t.length; n++) {
                                                        var r = t[n];
                                                        O(r) && (e = r)
                                                    }
                                                return e
                                            }(t.native.javascriptTrackers);
                                            if (e)
                                                for (var n = "pbjs_adid=" + t.adId + ";pbjs_auc=" + t.adUnitCode,
                                                        r = function (t) {
                                                            var e = t.indexOf('src="') + 5,
                                                                n = t.indexOf('"', e);
                                                            return t.substring(e, n)
                                                        }(e), o = r.replace("dom_id=%native_dom_id%", n), a = document.getElementsByTagName("iframe"), s = !1, c = 0; c < a.length && !s; c++) {
                                                    var d = a[c];
                                                    try {
                                                        var u = d.contentDocument || d.contentWindow.document;
                                                        if (u)
                                                            for (var l = u.getElementsByTagName("script"), f = 0; f < l.length && !s; f++) {
                                                                var p = l[f];
                                                                p.getAttribute("data-src") == r && (p.setAttribute("src", o), p.setAttribute("data-src", ""), p.removeAttribute && p.removeAttribute("data-src"), s = !0)
                                                            }
                                                    } catch (t) {
                                                        if (!(t instanceof DOMException && "SecurityError" === t.name)) throw t
                                                    }
                                                }
                                        }(t)
                                }
                            };

                        function I(t) {
                            return !!(i.isArray(t) && 0 < t.length)
                        }

                        function k(t) {
                            I(t.value) && "" === t.value[0] && delete t.value
                        }

                        function O(t) {
                            var e = t.match(_),
                                n = null != e && 1 <= e.length,
                                r = t.match(T),
                                i = null != r && 1 <= r.length;
                            return t.startsWith(E) && i && n
                        }

                        function C(t) {
                            var e = {};
                            if (e.sizes = x(t.sizes), e.primary_size = e.sizes[0], e.ad_types = [], e.uuid = t.bidId, t.params.placementId ? e.id = parseInt(t.params.placementId, 10) : e.code = t.params.invCode, e.allow_smaller_sizes = t.params.allowSmallerSizes || !1, e.use_pmt_rule = t.params.usePaymentRule || !1, e.prebid = !0, e.disable_psa = !0, t.params.reserve && (e.reserve = t.params.reserve), t.params.position && (e.position = {
                                    above: 1,
                                    below: 2
                                } [t.params.position] || 0), t.params.trafficSourceCode && (e.traffic_source_code = t.params.trafficSourceCode), t.params.privateSizes && (e.private_sizes = x(t.params.privateSizes)), t.params.supplyType && (e.supply_type = t.params.supplyType), t.params.pubClick && (e.pubclick = t.params.pubClick), t.params.extInvCode && (e.ext_inv_code = t.params.extInvCode), t.params.externalImpId && (e.external_imp_id = t.params.externalImpId), !i.isEmpty(t.params.keywords)) {
                                var n = i.transformBidderParamKeywords(t.params.keywords);
                                0 < n.length && n.forEach(k),
                                    e.keywords = n
                            }
                            if ((t.mediaType === s.c || i.deepAccess(t, "mediaTypes.".concat(s.c))) && (e.ad_types.push(s.c), 0 === e.sizes.length && (e.sizes = x([1, 1])), t.nativeParams)) {
                                var r = function (t) {
                                    var e = {};
                                    return Object.keys(t).forEach(function (n) {
                                            var r = w[n] && w[n].serverName || w[n] || n,
                                                o = w[n] && w[n].requiredParams;
                                            if (e[r] = p({},
                                                    o, t[n]), (r === w.image.serverName || r === w.icon.serverName) && e[r].sizes) {
                                                var a = e[r].sizes;
                                                (i.isArrayOfNums(a) || i.isArray(a) && 0 < a.length && a.every(function (t) {
                                                    return i.isArrayOfNums(t)
                                                })) && (e[r].sizes = x(e[r].sizes))
                                            }
                                            r === w.privacyLink && (e.privacy_supported = !0)
                                        }),
                                        e
                                }(t.nativeParams);
                                e[s.c] = {
                                    layouts: [r]
                                }
                            }
                            var o = i.deepAccess(t, "mediaTypes.".concat(s.d)),
                                a = i.deepAccess(t, "mediaTypes.video.context");
                            return t.mediaType !== s.d && !o || e.ad_types.push(s.d),
                                (t.mediaType === s.d || o && "outstream" !== a) && (e.require_asset_url = !0),
                                t.params.video && (e.video = {},
                                    Object.keys(t.params.video).filter(function (t) {
                                        return l()(A, t)
                                    }).forEach(function (n) {
                                        return e.video[n] = t.params.video[n]
                                    })),
                                t.renderer && (e.video = p({},
                                    e.video, {
                                        custom_renderer_present: !0
                                    })),
                                (i.isEmpty(t.mediaType) && i.isEmpty(t.mediaTypes) || t.mediaType === s.b || t.mediaTypes && t.mediaTypes[s.b]) && e.ad_types.push(s.b),
                                e
                        }

                        function x(t) {
                            var e = [],
                                n = {};
                            if (i.isArray(t) && 2 === t.length && !i.isArray(t[0])) n.width = parseInt(t[0], 10),
                                n.height = parseInt(t[1], 10),
                                e.push(n);
                            else if ("object" === f(t))
                                for (var r = 0; r < t.length; r++) {
                                    var o = t[r];
                                    (n = {}).width = parseInt(o[0], 10),
                                        n.height = parseInt(o[1], 10),
                                        e.push(n)
                                }
                            return e
                        }

                        function D(t) {
                            return !!t.params.user
                        }

                        function P(t) {
                            return !!parseInt(t.params.member, 10)
                        }

                        function B(t) {
                            if (t.params) return !!t.params.app
                        }

                        function R(t) {
                            return t.params && t.params.app ? !!t.params.app.id : !!t.params.app
                        }

                        function j(t) {
                            return !!t.debug
                        }

                        function U(t) {
                            return t.mediaTypes && t.mediaTypes.video && t.mediaTypes.video.context === s.a
                        }

                        function N(t, e, n) {
                            i.isEmpty(t.video) && (t.video = {}),
                                t.video[e] = n
                        }

                        function z(t) {
                            t.renderer.push(function () {
                                window.ANOutstreamVideo.renderAd({
                                        tagId: t.adResponse.tag_id,
                                        sizes: [t.getSize().split("x")],
                                        targetId: t.adUnitCode,
                                        uuid: t.adResponse.uuid,
                                        adResponse: t.adResponse,
                                        rendererOptions: t.renderer.getConfig()
                                    },
                                    function (t, e, n) {
                                        t.renderer.handleVideoEvent({
                                            id: e,
                                            eventName: n
                                        })
                                    }.bind(null, t))
                            })
                        }
                        Object(a.registerBidder)(S)
                    }
                },
                [196]),
            pbjsChunk([198], {
                    244: function (t, e, n) {
                        t.exports = n(245)
                    },
                    245: function (t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                                value: !0
                            }),
                            n.d(e, "userCMP",
                                function () {
                                    return r
                                }),
                            n.d(e, "consentTimeout",
                                function () {
                                    return i
                                }),
                            n.d(e, "allowAuction",
                                function () {
                                    return o
                                }),
                            n.d(e, "staticConsentData",
                                function () {
                                    return a
                                }),
                            e.requestBidsHook = b,
                            e.resetConsentData = function () {
                                s = void 0,
                                    u.gdprDataHandler.setConsentData(null)
                            },
                            e.setConsentConfig = S;
                        var r, i, o, a, s, c = n(0),
                            d = n(3),
                            u = n(7),
                            l = n(9),
                            f = n.n(l),
                            p = n(246),
                            m = n.n(p),
                            g = "iab",
                            h = 1e4,
                            A = !0,
                            v = !1,
                            y = {
                                iab: function (t, e, n) {
                                    var r, i = function () {
                                            var e = {};

                                            function r() {
                                                e.getConsentData && e.getVendorConsents && t(e, n)
                                            }
                                            return {
                                                consentDataCallback: function (t) {
                                                    e.getConsentData = t,
                                                        r()
                                                },
                                                vendorConsentsCallback: function (t) {
                                                    e.getVendorConsents = t,
                                                        r()
                                                }
                                            }
                                        }(),
                                        o = {};
                                    try {
                                        r = window.__cmp || c.getWindowTop().__cmp
                                    } catch (t) {}
                                    if (c.isFn(r)) r("getConsentData", null, i.consentDataCallback),
                                        r("getVendorConsents", null, i.vendorConsentsCallback);
                                    else if (window.$sf && window.$sf.ext && "function" == typeof window.$sf.ext.cmp) d("getConsentData", i.consentDataCallback),
                                        d("getVendorConsents", i.vendorConsentsCallback);
                                    else {
                                        for (var a, s = window; !a;) {
                                            try {
                                                s.frames.__cmpLocator && (a = s)
                                            } catch (t) {}
                                            if (s === window.top) break;
                                            s = s.parent
                                        }
                                        if (!a) return e("CMP not found.", n);
                                        u("getConsentData", a, i.consentDataCallback),
                                            u("getVendorConsents", a, i.vendorConsentsCallback)
                                    }

                                    function d(t, e) {
                                        var r = n.adUnits,
                                            i = 1,
                                            o = 1;
                                        if (Array.isArray(r) && 0 < r.length) {
                                            var a = c.getAdUnitSizes(r[0]);
                                            i = a[0][0],
                                                o = a[0][1]
                                        }
                                        window.$sf.ext.register(i, o,
                                                function (n, r) {
                                                    if ("cmpReturn" === n) {
                                                        var i = "getConsentData" === t ? r.vendorConsentData : r.vendorConsents;
                                                        e(i)
                                                    }
                                                }),
                                            window.$sf.ext.cmp(t)
                                    }

                                    function u(t, e, n) {
                                        function r(t) {
                                            var e = "string" == typeof t.data && m()(t.data, "cmpReturn") ? JSON.parse(t.data) : t.data;
                                            if (e.__cmpReturn && e.__cmpReturn.callId) {
                                                var n = e.__cmpReturn;
                                                void 0 !== o[n.callId] && (o[n.callId](n.returnValue, n.success), delete o[n.callId])
                                            }
                                        }
                                        window.__cmp = function (t, n, r) {
                                                var i = Math.random() + "",
                                                    a = {
                                                        __cmpCall: {
                                                            command: t,
                                                            parameter: n,
                                                            callId: i
                                                        }
                                                    };
                                                o[i] = r,
                                                    e.postMessage(a, "*")
                                            },
                                            window.addEventListener("message", r, !1),
                                            window.__cmp(t, null,
                                                function (t) {
                                                    window.removeEventListener("message", r, !1),
                                                        n(t)
                                                })
                                    }
                                },
                                static: function (t, e, n) {
                                    t(a, n)
                                }
                            };

                        function b(t, e) {
                            var n = {
                                context: this,
                                args: [e],
                                nextFn: t,
                                adUnits: e.adUnits || pbjs.adUnits,
                                bidsBackHandler: e.bidsBackHandler,
                                haveExited: !1,
                                timer: null
                            };
                            return s ? T(null, n) : f()(Object.keys(y), r) ? (y[r].call(this, w, E, n), void(n.haveExited || (0 === i ? w(void 0, n) : n.timer = setTimeout(function (t) {
                                E("CMP workflow exceeded timeout threshold.", t)
                            }.bind(null, n), i)))) : (c.logWarn("CMP framework (".concat(r, ") is not a supported framework.  Aborting consentManagement module and resuming auction.")), n.nextFn.apply(n.context, n.args))
                        }

                        function w(t, e) {
                            var n = t && t.getConsentData && t.getConsentData.gdprApplies;
                            "boolean" == typeof n && (!0 !== n || c.isStr(t.getConsentData.consentData) && c.isPlainObject(t.getVendorConsents) && 1 < Object.keys(t.getVendorConsents).length) ? (clearTimeout(e.timer), _(t), T(null, e)) : E("CMP returned unexpected value during lookup process.", e, t)
                        }

                        function E(t, e, n) {
                            clearTimeout(e.timer),
                                o && _(void 0),
                                T(t, e, n)
                        }

                        function _(t) {
                            s = {
                                    consentString: t ? t.getConsentData.consentData : void 0,
                                    vendorData: t ? t.getVendorConsents : void 0,
                                    gdprApplies: t ? t.getConsentData.gdprApplies : void 0
                                },
                                u.gdprDataHandler.setConsentData(s)
                        }

                        function T(t, e, n) {
                            if (!1 === e.haveExited) {
                                e.haveExited = !0;
                                var r = e.context,
                                    i = e.args,
                                    a = e.nextFn;
                                t ? o ? (c.logWarn(t + " Resuming auction without consent data as per consentManagement config.", n), a.apply(r, i)) : (c.logError(t + " Canceling auction as per consentManagement config.", n), "function" == typeof e.bidsBackHandler ? e.bidsBackHandler() : c.logError("Error executing bidsBackHandler")) : a.apply(r, i)
                            }
                        }

                        function S(t) {
                            c.isStr(t.cmpApi) ? r = t.cmpApi : (r = g, c.logInfo("consentManagement config did not specify cmp.  Using system default setting (".concat(g, ")."))),
                                c.isNumber(t.timeout) ? i = t.timeout : (i = h, c.logInfo("consentManagement config did not specify timeout.  Using system default setting (".concat(h, ")."))),
                                "boolean" == typeof t.allowAuctionWithoutConsent ? o = t.allowAuctionWithoutConsent : (o = A, c.logInfo("consentManagement config did not specify allowAuctionWithoutConsent.  Using system default setting (".concat(A, ")."))),
                                c.logInfo("consentManagement module has been activated..."),
                                "static" === r && (c.isPlainObject(t.consentData) ? (a = t.consentData, i = 0) : c.logError("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")),
                                v || pbjs.requestBids.before(b, 50),
                                v = !0
                        }
                        d.b.getConfig("consentManagement",
                            function (t) {
                                return S(t.consentManagement)
                            })
                    }
                },
                [244]),
            pbjsChunk([195], {
                    255: function (t, e, n) {
                        t.exports = n(256)
                    },
                    256: function (t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                                value: !0
                            }),
                            n.d(e, "spec",
                                function () {
                                    return s
                                });
                        var r = n(0),
                            i = n(1),
                            o = n(2),
                            a = "conversant",
                            s = {
                                code: a,
                                aliases: ["cnvr"],
                                supportedMediaTypes: [o.b, o.d],
                                isBidRequestValid: function (t) {
                                    if (!t || !t.params) return r.logWarn(a + ": Missing bid parameters"),
                                        !1;
                                    if (!r.isStr(t.params.site_id)) return r.logWarn(a + ": site_id must be specified as a string"),
                                        !1;
                                    if (d(t))
                                        if (t.params.mimes) {
                                            if (!r.isArray(t.params.mimes) || !t.params.mimes.every(function (t) {
                                                    return r.isStr(t)
                                                })) return r.logWarn(a + ": mimes must be an array of strings"),
                                                !1
                                        } else r.logWarn(a + ": mimes should be specified for videos");
                                    return !0
                                },
                                buildRequests: function (t, e) {
                                    var n = r.getTopWindowLocation(),
                                        i = n.href,
                                        o = "https:" === n.protocol ? 1 : 0,
                                        a = "",
                                        s = "",
                                        l = null,
                                        f = t.map(function (t) {
                                            var e = r.getBidIdParameter("bidfloor", t.params),
                                                n = o || (r.getBidIdParameter("secure", t.params) ? 1 : 0);
                                            a = r.getBidIdParameter("site_id", t.params),
                                                s = t.auctionId;
                                            var i = {
                                                id: t.bidId,
                                                secure: n,
                                                bidfloor: e || 0,
                                                displaymanager: "Prebid.js",
                                                displaymanagerver: "2.2.4"
                                            };
                                            if (u(t.params.tag_id, i, "tagid"), d(t)) {
                                                var f = r.deepAccess(t, "mediaTypes.video") || {},
                                                    p = c(f.playerSize || t.sizes),
                                                    m = {};
                                                p && p[0] && (u(p[0].w, m, "w"), u(p[0].h, m, "h")),
                                                    u(t.params.position, m, "pos"),
                                                    u(t.params.mimes || f.mimes, m, "mimes"),
                                                    u(t.params.maxduration, m, "maxduration"),
                                                    u(t.params.protocols || f.protocols, m, "protocols"),
                                                    u(t.params.api || f.api, m, "api"),
                                                    i.video = m
                                            } else {
                                                var g = {
                                                    format: c((r.deepAccess(t, "mediaTypes.banner") || {}).sizes || t.sizes)
                                                };
                                                u(t.params.position, g, "pos"),
                                                    i.banner = g
                                            }
                                            return t.userId && t.userId.pubcid ? l = t.userId.pubcid : t.crumbs && t.crumbs.pubcid && (l = t.crumbs.pubcid),
                                                i
                                        }),
                                        p = {
                                            id: s,
                                            imp: f,
                                            site: {
                                                id: a,
                                                mobile: null !== document.querySelector('meta[name="viewport"][content*="width=device-width"]') ? 1 : 0,
                                                page: i
                                            },
                                            device: function () {
                                                var t = navigator.language ? "language" : "userLanguage";
                                                return {
                                                    h: screen.height,
                                                    w: screen.width,
                                                    dnt: "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNoTrack || "yes" === navigator.doNotTrack ? 1 : 0,
                                                    language: navigator[t].split("-")[0],
                                                    make: navigator.vendor ? navigator.vendor : "",
                                                    ua: navigator.userAgent
                                                }
                                            }(),
                                            at: 1
                                        },
                                        m = {};
                                    return e && e.gdprConsent && (m.consent = e.gdprConsent.consentString, "boolean" == typeof e.gdprConsent.gdprApplies && (p.regs = {
                                            ext: {
                                                gdpr: e.gdprConsent.gdprApplies ? 1 : 0
                                            }
                                        })),
                                        l && (m.fpc = l),
                                        r.isEmpty(m) || (p.user = {
                                            ext: m
                                        }), {
                                            method: "POST",
                                            url: "//web.hb.ad.cpe.dotomi.com/s2s/header/24",
                                            data: p
                                        }
                                },
                                interpretResponse: function (t, e) {
                                    var n = [],
                                        i = {};
                                    return t = t.body,
                                        e && e.data && e.data.imp && r._each(e.data.imp,
                                            function (t) {
                                                return i[t.id] = t
                                            }),
                                        t && r.isArray(t.seatbid) && r._each(t.seatbid,
                                            function (e) {
                                                r._each(e.bid,
                                                    function (e) {
                                                        var r = parseFloat(e.price);
                                                        if (0 < r && e.impid) {
                                                            var o = e.adm || "",
                                                                a = e.nurl || "",
                                                                s = i[e.impid],
                                                                c = {
                                                                    requestId: e.impid,
                                                                    currency: t.cur || "USD",
                                                                    cpm: r,
                                                                    creativeId: e.crid || "",
                                                                    ttl: 300,
                                                                    netRevenue: !0
                                                                };
                                                            s.video ? (c.vastUrl = o, c.mediaType = "video", c.width = s.video.w, c.height = s.video.h) : (c.ad = o + '<img src="' + a + '" />', c.width = e.w, c.height = e.h),
                                                                n.push(c)
                                                        }
                                                    })
                                            }),
                                        n
                                },
                                transformBidParams: function (t, e) {
                                    return r.convertTypes({
                                            site_id: "string",
                                            secure: "number",
                                            mobile: "number"
                                        },
                                        t)
                                }
                            };

                        function c(t) {
                            var e;
                            return Array.isArray(t) && (e = 2 === t.length && "number" == typeof t[0] && "number" == typeof t[1] ? [{
                                    w: t[0],
                                    h: t[1]
                                }] : r._map(t,
                                    function (t) {
                                        return {
                                            w: t[0],
                                            h: t[1]
                                        }
                                    })),
                                e
                        }

                        function d(t) {
                            return "video" === t.mediaType || !!r.deepAccess(t, "mediaTypes.video")
                        }

                        function u(t, e, n) {
                            t && (e[n] = t)
                        }
                        Object(i.registerBidder)(s)
                    }
                },
                [255]),
            pbjsChunk([0], {
                    259: function (t, e, n) {
                        t.exports = n(260)
                    },
                    260: function (module, __webpack_exports__, __webpack_require__) {
                        "use strict";
                        Object.defineProperty(__webpack_exports__, "__esModule", {
                                value: !0
                            }),
                            __webpack_require__.d(__webpack_exports__, "FAST_BID_PUBKEY",
                                function () {
                                    return FAST_BID_PUBKEY
                                }),
                            __webpack_require__.d(__webpack_exports__, "spec",
                                function () {
                                    return spec
                                }),
                            __webpack_exports__.cryptoVerify = cryptoVerify;
                        var __WEBPACK_IMPORTED_MODULE_0__src_adloader__ = __webpack_require__(50),
                            __WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory__ = __webpack_require__(1),
                            __WEBPACK_IMPORTED_MODULE_2__src_config__ = __webpack_require__(3),
                            __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__ = __webpack_require__(2),
                            __WEBPACK_IMPORTED_MODULE_4__src_url__ = __webpack_require__(10),
                            __WEBPACK_IMPORTED_MODULE_5__src_utils__ = __webpack_require__(0),
                            __WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_find__ = __webpack_require__(11),
                            __WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_find__),
                            __WEBPACK_IMPORTED_MODULE_7_jsencrypt_bin_jsencrypt__ = __webpack_require__(261),
                            __WEBPACK_IMPORTED_MODULE_7_jsencrypt_bin_jsencrypt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jsencrypt_bin_jsencrypt__),
                            __WEBPACK_IMPORTED_MODULE_8_crypto_js_sha256__ = __webpack_require__(262),
                            __WEBPACK_IMPORTED_MODULE_8_crypto_js_sha256___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_crypto_js_sha256__);

                        function _extends() {
                            return (_extends = Object.assign ||
                                function (t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var n = arguments[e];
                                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                                    }
                                    return t
                                }).apply(this, arguments)
                        }
                        var ADAPTER_VERSION = 19,
                            BIDDER_CODE = "criteo",
                            CDB_ENDPOINT = "//bidder.criteo.com/cdb",
                            CRITEO_VENDOR_ID = 91,
                            INTEGRATION_MODES = {
                                amp: 1
                            },
                            PROFILE_ID_INLINE = 207,
                            PROFILE_ID_PUBLISHERTAG = 185,
                            PUBLISHER_TAG_URL = "//static.criteo.net/js/ld/publishertag.prebid.js",
                            FAST_BID_PUBKEY = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDO1BjAITkFTtP0IMzmF7qsqhpu\ny1dGaTPHnjMU9mRZsrnfR3C0sEN5pYEzEcFRPnkJjJuhH8Rnh5+CE+LcKg0Z8ZZ7\nOmOSj0/qnYTAYCu0cR5LiyWG79KlIgUyMbp92ulGg24gAyGrVn4+v/4c53WlOEUp\n4YWvb82G0CD5NcDNpQIDAQAB\n-----END PUBLIC KEY-----",
                            spec = {
                                code: BIDDER_CODE,
                                supportedMediaTypes: [__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__.b, __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__.d],
                                isBidRequestValid: function (t) {
                                    return !(!t || !t.params || !t.params.zoneId && !t.params.networkId || hasVideoMediaType(t) && !hasValidVideoMediaType(t))
                                },
                                buildRequests: function (t, e) {
                                    var n, r;
                                    if (_extends(e, {
                                            ceh: __WEBPACK_IMPORTED_MODULE_2__src_config__.b.getConfig("criteo.ceh")
                                        }), publisherTagAvailable() || (window.Criteo = window.Criteo || {},
                                            window.Criteo.usePrebidEvents = !1, tryGetCriteoFastBid(), setTimeout(function () {
                                                    Object(__WEBPACK_IMPORTED_MODULE_0__src_adloader__.a)(PUBLISHER_TAG_URL, BIDDER_CODE)
                                                },
                                                e.timeout)), publisherTagAvailable()) {
                                        var i = new Criteo.PubTag.Adapters.Prebid(PROFILE_ID_PUBLISHERTAG, ADAPTER_VERSION, t, e, "2.27.0");
                                        n = i.buildCdbUrl(),
                                            r = i.buildCdbRequest()
                                    } else {
                                        var o = buildContext(t);
                                        n = buildCdbUrl(o),
                                            r = buildCdbRequest(o, t, e)
                                    }
                                    if (r) return {
                                        method: "POST",
                                        url: n,
                                        data: r,
                                        bidRequests: t
                                    }
                                },
                                interpretResponse: function (t, e) {
                                    var n = t.body || t;
                                    if (publisherTagAvailable()) {
                                        var r = Criteo.PubTag.Adapters.Prebid.GetAdapter(e);
                                        if (r) return r.interpretResponse(n, e)
                                    }
                                    var i = [];
                                    return n && n.slots && __WEBPACK_IMPORTED_MODULE_5__src_utils__.isArray(n.slots) && n.slots.forEach(function (t) {
                                            var n = __WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_find___default()(e.bidRequests,
                                                    function (e) {
                                                        return e.adUnitCode === t.impid && (!e.params.zoneId || parseInt(e.params.zoneId) === t.zoneid)
                                                    }),
                                                r = n.bidId,
                                                o = {
                                                    requestId: r,
                                                    adId: t.bidId || __WEBPACK_IMPORTED_MODULE_5__src_utils__.getUniqueIdentifierStr(),
                                                    cpm: t.cpm,
                                                    currency: t.currency,
                                                    netRevenue: !0,
                                                    ttl: t.ttl || 60,
                                                    creativeId: r,
                                                    width: t.width,
                                                    height: t.height
                                                };
                                            t.native ? o.ad = createNativeAd(r, t.native, n.params.nativeCallback) : t.video ? (o.vastUrl = t.displayurl, o.mediaType = __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__.d) : o.ad = t.creative,
                                                i.push(o)
                                        }),
                                        i
                                },
                                onTimeout: function (t) {
                                    publisherTagAvailable() && Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidTimeout()
                                },
                                onBidWon: function (t) {
                                    publisherTagAvailable() && Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidWon(t)
                                },
                                onSetTargeting: function (t) {
                                    publisherTagAvailable() && Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleSetTargeting(t)
                                }
                            };

                        function publisherTagAvailable() {
                            return "undefined" != typeof Criteo && Criteo.PubTag && Criteo.PubTag.Adapters && Criteo.PubTag.Adapters.Prebid
                        }

                        function buildContext(t) {
                            var e = __WEBPACK_IMPORTED_MODULE_5__src_utils__.getTopWindowUrl(),
                                n = Object(__WEBPACK_IMPORTED_MODULE_4__src_url__.c)(e).search,
                                r = {
                                    url: e,
                                    debug: "1" === n.pbt_debug,
                                    noLog: "1" === n.pbt_nolog,
                                    integrationMode: void 0
                                };
                            return t.forEach(function (t) {
                                    t.params.integrationMode && (r.integrationMode = t.params.integrationMode)
                                }),
                                r
                        }

                        function buildCdbUrl(t) {
                            var e = CDB_ENDPOINT;
                            return e += "?profileId=" + PROFILE_ID_INLINE,
                                e += "&av=" + String(ADAPTER_VERSION),
                                e += "&wv=" + encodeURIComponent("2.27.0"),
                                e += "&cb=" + String(Math.floor(99999999999 * Math.random())),
                                t.integrationMode in INTEGRATION_MODES && (e += "&im=" + INTEGRATION_MODES[t.integrationMode]),
                                t.debug && (e += "&debug=1"),
                                t.noLog && (e += "&nolog=1"),
                                e
                        }

                        function buildCdbRequest(t, e, n) {
                            var r, i = {
                                publisher: {
                                    url: t.url
                                },
                                slots: e.map(function (t) {
                                    r = t.params.networkId || r;
                                    var e = {
                                        impid: t.adUnitCode,
                                        transactionid: t.transactionId,
                                        auctionId: t.auctionId,
                                        sizes: getBannerSizes(t)
                                    };
                                    if (t.params.zoneId && (e.zoneid = t.params.zoneId), t.params.publisherSubId && (e.publishersubid = t.params.publisherSubId), t.params.nativeCallback && (e.native = !0), hasVideoMediaType(t)) {
                                        var n = {
                                            playersizes: getVideoSizes(t),
                                            mimes: t.mediaTypes.video.mimes,
                                            protocols: t.mediaTypes.video.protocols,
                                            maxduration: t.mediaTypes.video.maxduration,
                                            api: t.mediaTypes.video.api
                                        };
                                        n.skip = t.params.video.skip,
                                            n.placement = t.params.video.placement,
                                            n.minduration = t.params.video.minduration,
                                            n.playbackmethod = t.params.video.playbackmethod,
                                            n.startdelay = t.params.video.startdelay,
                                            e.video = n
                                    }
                                    return e
                                })
                            };
                            return r && (i.publisher.networkid = r),
                                i.user = {},
                                n && n.ceh && (i.user.ceh = n.ceh),
                                n && n.gdprConsent && (i.gdprConsent = {},
                                    void 0 !== n.gdprConsent.gdprApplies && (i.gdprConsent.gdprApplies = !!n.gdprConsent.gdprApplies), n.gdprConsent.vendorData && n.gdprConsent.vendorData.vendorConsents && void 0 !== n.gdprConsent.vendorData.vendorConsents[CRITEO_VENDOR_ID.toString(10)] && (i.gdprConsent.consentGiven = !!n.gdprConsent.vendorData.vendorConsents[CRITEO_VENDOR_ID.toString(10)]), void 0 !== n.gdprConsent.consentString && (i.gdprConsent.consentData = n.gdprConsent.consentString)),
                                i
                        }

                        function getVideoSizes(t) {
                            return parseSizes(__WEBPACK_IMPORTED_MODULE_5__src_utils__.deepAccess(t, "mediaTypes.video.playerSize"))
                        }

                        function getBannerSizes(t) {
                            return parseSizes(__WEBPACK_IMPORTED_MODULE_5__src_utils__.deepAccess(t, "mediaTypes.banner.sizes") || t.sizes)
                        }

                        function parseSize(t) {
                            return t[0] + "x" + t[1]
                        }

                        function parseSizes(t) {
                            return Array.isArray(t[0]) ? t.map(function (t) {
                                return parseSize(t)
                            }) : [parseSize(t)]
                        }

                        function hasVideoMediaType(t) {
                            return void 0 !== __WEBPACK_IMPORTED_MODULE_5__src_utils__.deepAccess(t, "params.video") && void 0 !== __WEBPACK_IMPORTED_MODULE_5__src_utils__.deepAccess(t, "mediaTypes.video")
                        }

                        function hasValidVideoMediaType(t) {
                            var e = !0;
                            if (["mimes", "playerSize", "maxduration", "protocols", "api"].forEach(function (n) {
                                    void 0 === __WEBPACK_IMPORTED_MODULE_5__src_utils__.deepAccess(t, "mediaTypes.video." + n) && (e = !1, __WEBPACK_IMPORTED_MODULE_5__src_utils__.logError("Criteo Bid Adapter: mediaTypes.video." + n + " is required"))
                                }), ["skip", "placement", "playbackmethod"].forEach(function (n) {
                                    void 0 === __WEBPACK_IMPORTED_MODULE_5__src_utils__.deepAccess(t, "params.video." + n) && (e = !1, __WEBPACK_IMPORTED_MODULE_5__src_utils__.logError("Criteo Bid Adapter: params.video." + n + " is required"))
                                }), e) {
                                if ("instream" == t.mediaTypes.video.context && 1 === t.params.video.placement) return !0;
                                if ("outstream" == t.mediaTypes.video.context && 1 !== t.params.video.placement) return !0
                            }
                            return !1
                        }

                        function createNativeAd(t, e, n) {
                            return window.criteo_prebid_native_slots = window.criteo_prebid_native_slots || {},
                                window.criteo_prebid_native_slots[t] = {
                                    callback: n,
                                    payload: e
                                },
                                '<script type="text/javascript">\n    var win = window;\n    for (var i = 0; i < 10; ++i) {\n      win = win.parent;\n      if (win.criteo_prebid_native_slots) {\n        var responseSlot = win.criteo_prebid_native_slots["'.concat(t, '"];\n        responseSlot.callback(responseSlot.payload);\n        break;\n      }\n    }\n  <\/script>')
                        }

                        function cryptoVerify(t, e, n) {
                            var r = new __WEBPACK_IMPORTED_MODULE_7_jsencrypt_bin_jsencrypt___default.a;
                            return r.setPublicKey(t),
                                r.verify(n, e, __WEBPACK_IMPORTED_MODULE_8_crypto_js_sha256___default.a)
                        }

                        function validateFastBid(t) {
                            var e = t.indexOf("\n"),
                                n = t.substr(0, e).trim();
                            if ("// Hash: " !== n.substr(0, 9)) return __WEBPACK_IMPORTED_MODULE_5__src_utils__.logWarn("No hash found in FastBid"),
                                !1;
                            var r = n.substr(9),
                                i = t.substr(e + 1);
                            try {
                                return cryptoVerify(FAST_BID_PUBKEY, r, i)
                            } catch (t) {
                                return void __WEBPACK_IMPORTED_MODULE_5__src_utils__.logWarn("Failed to verify Criteo FastBid")
                            }
                        }

                        function tryGetCriteoFastBid() {
                            try {
                                var fastBid = localStorage.getItem("criteo_fast_bid");
                                null !== fastBid && (!1 === validateFastBid(fastBid) ? (__WEBPACK_IMPORTED_MODULE_5__src_utils__.logWarn("Invalid Criteo FastBid found"), localStorage.removeItem("criteo_fast_bid")) : (__WEBPACK_IMPORTED_MODULE_5__src_utils__.logInfo("Using Criteo FastBid"), eval(fastBid)))
                            } catch (t) {}
                        }
                        Object(__WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory__.registerBidder)(spec)
                    },
                    261: function (t, e, n) {
                        !
                        function (t) {
                            "use strict";
                            var e = "0123456789abcdefghijklmnopqrstuvwxyz";

                            function n(t) {
                                return e.charAt(t)
                            }

                            function r(t, e) {
                                return t & e
                            }

                            function i(t, e) {
                                return t | e
                            }

                            function o(t, e) {
                                return t ^ e
                            }

                            function a(t, e) {
                                return t & ~e
                            }

                            function s(t) {
                                if (0 == t) return -1;
                                var e = 0;
                                return 0 == (65535 & t) && (t >>= 16, e += 16),
                                    0 == (255 & t) && (t >>= 8, e += 8),
                                    0 == (15 & t) && (t >>= 4, e += 4),
                                    0 == (3 & t) && (t >>= 2, e += 2),
                                    0 == (1 & t) && ++e,
                                    e
                            }

                            function c(t) {
                                for (var e = 0; 0 != t;) t &= t - 1,
                                    ++e;
                                return e
                            }
                            var d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

                            function u(t) {
                                var e, n, r = "";
                                for (e = 0; e + 3 <= t.length; e += 3) n = parseInt(t.substring(e, e + 3), 16),
                                    r += d.charAt(n >> 6) + d.charAt(63 & n);
                                for (e + 1 == t.length ? (n = parseInt(t.substring(e, e + 1), 16), r += d.charAt(n << 2)) : e + 2 == t.length && (n = parseInt(t.substring(e, e + 2), 16), r += d.charAt(n >> 2) + d.charAt((3 & n) << 4)); 0 < (3 & r.length);) r += "=";
                                return r
                            }

                            function l(t) {
                                var e, r = "",
                                    i = 0,
                                    o = 0;
                                for (e = 0; e < t.length && "=" != t.charAt(e); ++e) {
                                    var a = d.indexOf(t.charAt(e));
                                    a < 0 || (i = 0 == i ? (r += n(a >> 2), o = 3 & a, 1) : 1 == i ? (r += n(o << 2 | a >> 4), o = 15 & a, 2) : 2 == i ? (r += n(o), r += n(a >> 2), o = 3 & a, 3) : (r += n(o << 2 | a >> 4), r += n(15 & a), 0))
                                }
                                return 1 == i && (r += n(o << 2)),
                                    r
                            }
                            var f, p, m = function (t, e) {
                                    return (m = Object.setPrototypeOf || {
                                            __proto__: []
                                        }
                                        instanceof Array &&
                                        function (t, e) {
                                            t.__proto__ = e
                                        } ||
                                        function (t, e) {
                                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                                        })(t, e)
                                },
                                g = {
                                    decode: function (t) {
                                        var e;
                                        if (void 0 === p) {
                                            var n = "= \f\n\r\t \u2028\u2029";
                                            for (p = Object.create(null), e = 0; e < 64; ++e) p["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)] = e;
                                            for (e = 0; e < n.length; ++e) p[n.charAt(e)] = -1
                                        }
                                        var r = [],
                                            i = 0,
                                            o = 0;
                                        for (e = 0; e < t.length; ++e) {
                                            var a = t.charAt(e);
                                            if ("=" == a) break;
                                            if (-1 != (a = p[a])) {
                                                if (void 0 === a) throw new Error("Illegal character at offset " + e);
                                                i |= a,
                                                    4 <= ++o ? (r[r.length] = i >> 16, r[r.length] = i >> 8 & 255, r[r.length] = 255 & i, o = i = 0) : i <<= 6
                                            }
                                        }
                                        switch (o) {
                                            case 1:
                                                throw new Error("Base64 encoding incomplete: at least 2 bits missing");
                                            case 2:
                                                r[r.length] = i >> 10;
                                                break;
                                            case 3:
                                                r[r.length] = i >> 16,
                                                    r[r.length] = i >> 8 & 255
                                        }
                                        return r
                                    },
                                    re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
                                    unarmor: function (t) {
                                        var e = g.re.exec(t);
                                        if (e)
                                            if (e[1]) t = e[1];
                                            else {
                                                if (!e[2]) throw new Error("RegExp out of sync");
                                                t = e[2]
                                            }
                                        return g.decode(t)
                                    }
                                },
                                h = 1e13,
                                A = (v.prototype.mulAdd = function (t, e) {
                                        var n, r, i = this.buf,
                                            o = i.length;
                                        for (n = 0; n < o; ++n)(r = i[n] * t + e) < h ? e = 0 : r -= (e = 0 | r / h) * h,
                                            i[n] = r;
                                        0 < e && (i[n] = e)
                                    },
                                    v.prototype.sub = function (t) {
                                        var e, n, r = this.buf,
                                            i = r.length;
                                        for (e = 0; e < i; ++e) t = (n = r[e] - t) < 0 ? (n += h, 1) : 0,
                                            r[e] = n;
                                        for (; 0 === r[r.length - 1];) r.pop()
                                    },
                                    v.prototype.toString = function (t) {
                                        if (10 != (t || 10)) throw new Error("only base 10 is supported");
                                        for (var e = this.buf,
                                                n = e[e.length - 1].toString(), r = e.length - 2; 0 <= r; --r) n += (h + e[r]).toString().substring(1);
                                        return n
                                    },
                                    v.prototype.valueOf = function () {
                                        for (var t = this.buf,
                                                e = 0,
                                                n = t.length - 1; 0 <= n; --n) e = e * h + t[n];
                                        return e
                                    },
                                    v.prototype.simplify = function () {
                                        var t = this.buf;
                                        return 1 == t.length ? t[0] : this
                                    },
                                    v);

                            function v(t) {
                                this.buf = [+t || 0]
                            }
                            var y = "…",
                                b = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
                                w = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;

                            function E(t, e) {
                                return t.length > e && (t = t.substring(0, e) + y),
                                    t
                            }
                            var _ = (T.prototype.get = function (t) {
                                    if (void 0 === t && (t = this.pos++), t >= this.enc.length) throw new Error("Requesting byte offset " + t + " on a stream of length " + this.enc.length);
                                    return "string" == typeof this.enc ? this.enc.charCodeAt(t) : this.enc[t]
                                },
                                T.prototype.hexByte = function (t) {
                                    return this.hexDigits.charAt(t >> 4 & 15) + this.hexDigits.charAt(15 & t)
                                },
                                T.prototype.hexDump = function (t, e, n) {
                                    for (var r = "",
                                            i = t; i < e; ++i)
                                        if (r += this.hexByte(this.get(i)), !0 !== n) switch (15 & i) {
                                            case 7:
                                                r += "  ";
                                                break;
                                            case 15:
                                                r += "\n";
                                                break;
                                            default:
                                                r += " "
                                        }
                                    return r
                                },
                                T.prototype.isASCII = function (t, e) {
                                    for (var n = t; n < e; ++n) {
                                        var r = this.get(n);
                                        if (r < 32 || 176 < r) return !1
                                    }
                                    return !0
                                },
                                T.prototype.parseStringISO = function (t, e) {
                                    for (var n = "",
                                            r = t; r < e; ++r) n += String.fromCharCode(this.get(r));
                                    return n
                                },
                                T.prototype.parseStringUTF = function (t, e) {
                                    for (var n = "",
                                            r = t; r < e;) {
                                        var i = this.get(r++);
                                        n += i < 128 ? String.fromCharCode(i) : 191 < i && i < 224 ? String.fromCharCode((31 & i) << 6 | 63 & this.get(r++)) : String.fromCharCode((15 & i) << 12 | (63 & this.get(r++)) << 6 | 63 & this.get(r++))
                                    }
                                    return n
                                },
                                T.prototype.parseStringBMP = function (t, e) {
                                    for (var n, r, i = "",
                                            o = t; o < e;) n = this.get(o++),
                                        r = this.get(o++),
                                        i += String.fromCharCode(n << 8 | r);
                                    return i
                                },
                                T.prototype.parseTime = function (t, e, n) {
                                    var r = this.parseStringISO(t, e),
                                        i = (n ? b : w).exec(r);
                                    return i ? (n && (i[1] = +i[1], i[1] += +i[1] < 70 ? 2e3 : 1900), r = i[1] + "-" + i[2] + "-" + i[3] + " " + i[4], i[5] && (r += ":" + i[5], i[6] && (r += ":" + i[6], i[7] && (r += "." + i[7]))), i[8] && (r += " UTC", "Z" != i[8] && (r += i[8], i[9] && (r += ":" + i[9]))), r) : "Unrecognized time: " + r
                                },
                                T.prototype.parseInteger = function (t, e) {
                                    for (var n, r = this.get(t), i = 127 < r, o = i ? 255 : 0, a = ""; r == o && ++t < e;) r = this.get(t);
                                    if (0 == (n = e - t)) return i ? -1 : 0;
                                    if (4 < n) {
                                        for (a = r, n <<= 3; 0 == (128 & (+a ^ o));) a = +a << 1,
                                            --n;
                                        a = "(" + n + " bit)\n"
                                    }
                                    i && (r -= 256);
                                    for (var s = new A(r), c = t + 1; c < e; ++c) s.mulAdd(256, this.get(c));
                                    return a + s.toString()
                                },
                                T.prototype.parseBitString = function (t, e, n) {
                                    for (var r = this.get(t), i = "(" + ((e - t - 1 << 3) - r) + " bit)\n", o = "", a = t + 1; a < e; ++a) {
                                        for (var s = this.get(a), c = a == e - 1 ? r : 0, d = 7; c <= d; --d) o += s >> d & 1 ? "1" : "0";
                                        if (o.length > n) return i + E(o, n)
                                    }
                                    return i + o
                                },
                                T.prototype.parseOctetString = function (t, e, n) {
                                    if (this.isASCII(t, e)) return E(this.parseStringISO(t, e), n);
                                    var r = e - t,
                                        i = "(" + r + " byte)\n";
                                    (n /= 2) < r && (e = t + n);
                                    for (var o = t; o < e; ++o) i += this.hexByte(this.get(o));
                                    return n < r && (i += y),
                                        i
                                },
                                T.prototype.parseOID = function (t, e, n) {
                                    for (var r = "",
                                            i = new A,
                                            o = 0,
                                            a = t; a < e; ++a) {
                                        var s = this.get(a);
                                        if (i.mulAdd(128, 127 & s), o += 7, !(128 & s)) {
                                            if ("" === r)
                                                if ((i = i.simplify()) instanceof A) i.sub(80),
                                                    r = "2." + i.toString();
                                                else {
                                                    var c = i < 80 ? i < 40 ? 0 : 1 : 2;
                                                    r = c + "." + (i - 40 * c)
                                                }
                                            else r += "." + i.toString();
                                            if (r.length > n) return E(r, n);
                                            i = new A,
                                                o = 0
                                        }
                                    }
                                    return 0 < o && (r += ".incomplete"),
                                        r
                                },
                                T);

                            function T(t, e) {
                                this.hexDigits = "0123456789ABCDEF",
                                    t instanceof T ? (this.enc = t.enc, this.pos = t.pos) : (this.enc = t, this.pos = e)
                            }
                            var S = (I.prototype.typeName = function () {
                                    switch (this.tag.tagClass) {
                                        case 0:
                                            switch (this.tag.tagNumber) {
                                                case 0:
                                                    return "EOC";
                                                case 1:
                                                    return "BOOLEAN";
                                                case 2:
                                                    return "INTEGER";
                                                case 3:
                                                    return "BIT_STRING";
                                                case 4:
                                                    return "OCTET_STRING";
                                                case 5:
                                                    return "NULL";
                                                case 6:
                                                    return "OBJECT_IDENTIFIER";
                                                case 7:
                                                    return "ObjectDescriptor";
                                                case 8:
                                                    return "EXTERNAL";
                                                case 9:
                                                    return "REAL";
                                                case 10:
                                                    return "ENUMERATED";
                                                case 11:
                                                    return "EMBEDDED_PDV";
                                                case 12:
                                                    return "UTF8String";
                                                case 16:
                                                    return "SEQUENCE";
                                                case 17:
                                                    return "SET";
                                                case 18:
                                                    return "NumericString";
                                                case 19:
                                                    return "PrintableString";
                                                case 20:
                                                    return "TeletexString";
                                                case 21:
                                                    return "VideotexString";
                                                case 22:
                                                    return "IA5String";
                                                case 23:
                                                    return "UTCTime";
                                                case 24:
                                                    return "GeneralizedTime";
                                                case 25:
                                                    return "GraphicString";
                                                case 26:
                                                    return "VisibleString";
                                                case 27:
                                                    return "GeneralString";
                                                case 28:
                                                    return "UniversalString";
                                                case 30:
                                                    return "BMPString"
                                            }
                                            return "Universal_" + this.tag.tagNumber.toString();
                                        case 1:
                                            return "Application_" + this.tag.tagNumber.toString();
                                        case 2:
                                            return "[" + this.tag.tagNumber.toString() + "]";
                                        case 3:
                                            return "Private_" + this.tag.tagNumber.toString()
                                    }
                                },
                                I.prototype.content = function (t) {
                                    if (void 0 === this.tag) return null;
                                    void 0 === t && (t = 1 / 0);
                                    var e = this.posContent(),
                                        n = Math.abs(this.length);
                                    if (!this.tag.isUniversal()) return null !== this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + n, t);
                                    switch (this.tag.tagNumber) {
                                        case 1:
                                            return 0 === this.stream.get(e) ? "false" : "true";
                                        case 2:
                                            return this.stream.parseInteger(e, e + n);
                                        case 3:
                                            return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(e, e + n, t);
                                        case 4:
                                            return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + n, t);
                                        case 6:
                                            return this.stream.parseOID(e, e + n, t);
                                        case 16:
                                        case 17:
                                            return null !== this.sub ? "(" + this.sub.length + " elem)" : "(no elem)";
                                        case 12:
                                            return E(this.stream.parseStringUTF(e, e + n), t);
                                        case 18:
                                        case 19:
                                        case 20:
                                        case 21:
                                        case 22:
                                        case 26:
                                            return E(this.stream.parseStringISO(e, e + n), t);
                                        case 30:
                                            return E(this.stream.parseStringBMP(e, e + n), t);
                                        case 23:
                                        case 24:
                                            return this.stream.parseTime(e, e + n, 23 == this.tag.tagNumber)
                                    }
                                    return null
                                },
                                I.prototype.toString = function () {
                                    return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]"
                                },
                                I.prototype.toPrettyString = function (t) {
                                    void 0 === t && (t = "");
                                    var e = t + this.typeName() + " @" + this.stream.pos;
                                    if (0 <= this.length && (e += "+"), e += this.length, this.tag.tagConstructed ? e += " (constructed)" : !this.tag.isUniversal() || 3 != this.tag.tagNumber && 4 != this.tag.tagNumber || null === this.sub || (e += " (encapsulates)"), e += "\n", null !== this.sub) {
                                        t += "  ";
                                        for (var n = 0,
                                                r = this.sub.length; n < r; ++n) e += this.sub[n].toPrettyString(t)
                                    }
                                    return e
                                },
                                I.prototype.posStart = function () {
                                    return this.stream.pos
                                },
                                I.prototype.posContent = function () {
                                    return this.stream.pos + this.header
                                },
                                I.prototype.posEnd = function () {
                                    return this.stream.pos + this.header + Math.abs(this.length)
                                },
                                I.prototype.toHexString = function () {
                                    return this.stream.hexDump(this.posStart(), this.posEnd(), !0)
                                },
                                I.decodeLength = function (t) {
                                    var e = t.get(),
                                        n = 127 & e;
                                    if (n == e) return n;
                                    if (6 < n) throw new Error("Length over 48 bits not supported at position " + (t.pos - 1));
                                    if (0 == n) return null;
                                    for (var r = e = 0; r < n; ++r) e = 256 * e + t.get();
                                    return e
                                },
                                I.prototype.getHexStringValue = function () {
                                    var t = this.toHexString(),
                                        e = 2 * this.header,
                                        n = 2 * this.length;
                                    return t.substr(e, n)
                                },
                                I.decode = function (t) {
                                    var e;

                                    function n() {
                                        var t = [];
                                        if (null !== o) {
                                            for (var n = a + o; e.pos < n;) t[t.length] = I.decode(e);
                                            if (e.pos != n) throw new Error("Content size is not correct for container starting at offset " + a)
                                        } else try {
                                            for (;;) {
                                                var r = I.decode(e);
                                                if (r.tag.isEOC()) break;
                                                t[t.length] = r
                                            }
                                            o = a - e.pos
                                        } catch (t) {
                                            throw new Error("Exception while decoding undefined length content: " + t)
                                        }
                                        return t
                                    }
                                    e = t instanceof _ ? t : new _(t, 0);
                                    var r = new _(e),
                                        i = new O(e),
                                        o = I.decodeLength(e),
                                        a = e.pos,
                                        s = a - r.pos,
                                        c = null;
                                    if (i.tagConstructed) c = n();
                                    else if (i.isUniversal() && (3 == i.tagNumber || 4 == i.tagNumber)) try {
                                        if (3 == i.tagNumber && 0 != e.get()) throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
                                        c = n();
                                        for (var d = 0; d < c.length; ++d)
                                            if (c[d].tag.isEOC()) throw new Error("EOC is not supposed to be actual content.")
                                    } catch (t) {
                                        c = null
                                    }
                                    if (null === c) {
                                        if (null === o) throw new Error("We can't skip over an invalid tag with undefined length at offset " + a);
                                        e.pos = a + Math.abs(o)
                                    }
                                    return new I(r, s, o, i, c)
                                },
                                I);

                            function I(t, e, n, r, i) {
                                if (!(r instanceof O)) throw new Error("Invalid tag value.");
                                this.stream = t,
                                    this.header = e,
                                    this.length = n,
                                    this.tag = r,
                                    this.sub = i
                            }
                            var k, O = (C.prototype.isUniversal = function () {
                                    return 0 === this.tagClass
                                },
                                C.prototype.isEOC = function () {
                                    return 0 === this.tagClass && 0 === this.tagNumber
                                },
                                C);

                            function C(t) {
                                var e = t.get();
                                if (this.tagClass = e >> 6, this.tagConstructed = 0 != (32 & e), this.tagNumber = 31 & e, 31 == this.tagNumber) {
                                    for (var n = new A; e = t.get(), n.mulAdd(128, 127 & e), 128 & e;);
                                    this.tagNumber = n.simplify()
                                }
                            }
                            var x = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
                                D = (1 << 26) / x[x.length - 1],
                                P = (B.prototype.toString = function (t) {
                                        if (this.s < 0) return "-" + this.negate().toString(t);
                                        var e;
                                        if (16 == t) e = 4;
                                        else if (8 == t) e = 3;
                                        else if (2 == t) e = 1;
                                        else if (32 == t) e = 5;
                                        else {
                                            if (4 != t) return this.toRadix(t);
                                            e = 2
                                        }
                                        var r, i = (1 << e) - 1,
                                            o = !1,
                                            a = "",
                                            s = this.t,
                                            c = this.DB - s * this.DB % e;
                                        if (0 < s--)
                                            for (c < this.DB && 0 < (r = this[s] >> c) && (o = !0, a = n(r)); 0 <= s;) c < e ? (r = (this[s] & (1 << c) - 1) << e - c, r |= this[--s] >> (c += this.DB - e)) : (r = this[s] >> (c -= e) & i, c <= 0 && (c += this.DB, --s)),
                                                0 < r && (o = !0),
                                                o && (a += n(r));
                                        return o ? a : "0"
                                    },
                                    B.prototype.negate = function () {
                                        var t = V();
                                        return B.ZERO.subTo(this, t),
                                            t
                                    },
                                    B.prototype.abs = function () {
                                        return this.s < 0 ? this.negate() : this
                                    },
                                    B.prototype.compareTo = function (t) {
                                        var e = this.s - t.s;
                                        if (0 != e) return e;
                                        var n = this.t;
                                        if (0 != (e = n - t.t)) return this.s < 0 ? -e : e;
                                        for (; 0 <= --n;)
                                            if (0 != (e = this[n] - t[n])) return e;
                                        return 0
                                    },
                                    B.prototype.bitLength = function () {
                                        return this.t <= 0 ? 0 : this.DB * (this.t - 1) + Z(this[this.t - 1] ^ this.s & this.DM)
                                    },
                                    B.prototype.mod = function (t) {
                                        var e = V();
                                        return this.abs().divRemTo(t, null, e),
                                            this.s < 0 && 0 < e.compareTo(B.ZERO) && t.subTo(e, e),
                                            e
                                    },
                                    B.prototype.modPowInt = function (t, e) {
                                        var n;
                                        return n = t < 256 || e.isEven() ? new U(e) : new z(e),
                                            this.exp(t, n)
                                    },
                                    B.prototype.clone = function () {
                                        var t = V();
                                        return this.copyTo(t),
                                            t
                                    },
                                    B.prototype.intValue = function () {
                                        if (this.s < 0) {
                                            if (1 == this.t) return this[0] - this.DV;
                                            if (0 == this.t) return -1
                                        } else {
                                            if (1 == this.t) return this[0];
                                            if (0 == this.t) return 0
                                        }
                                        return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
                                    },
                                    B.prototype.byteValue = function () {
                                        return 0 == this.t ? this.s : this[0] << 24 >> 24
                                    },
                                    B.prototype.shortValue = function () {
                                        return 0 == this.t ? this.s : this[0] << 16 >> 16
                                    },
                                    B.prototype.signum = function () {
                                        return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
                                    },
                                    B.prototype.toByteArray = function () {
                                        var t = this.t,
                                            e = [];
                                        e[0] = this.s;
                                        var n, r = this.DB - t * this.DB % 8,
                                            i = 0;
                                        if (0 < t--)
                                            for (r < this.DB && (n = this[t] >> r) != (this.s & this.DM) >> r && (e[i++] = n | this.s << this.DB - r); 0 <= t;) r < 8 ? (n = (this[t] & (1 << r) - 1) << 8 - r, n |= this[--t] >> (r += this.DB - 8)) : (n = this[t] >> (r -= 8) & 255, r <= 0 && (r += this.DB, --t)),
                                                0 != (128 & n) && (n |= -256),
                                                0 == i && (128 & this.s) != (128 & n) && ++i,
                                                (0 < i || n != this.s) && (e[i++] = n);
                                        return e
                                    },
                                    B.prototype.equals = function (t) {
                                        return 0 == this.compareTo(t)
                                    },
                                    B.prototype.min = function (t) {
                                        return this.compareTo(t) < 0 ? this : t
                                    },
                                    B.prototype.max = function (t) {
                                        return 0 < this.compareTo(t) ? this : t
                                    },
                                    B.prototype.and = function (t) {
                                        var e = V();
                                        return this.bitwiseTo(t, r, e),
                                            e
                                    },
                                    B.prototype.or = function (t) {
                                        var e = V();
                                        return this.bitwiseTo(t, i, e),
                                            e
                                    },
                                    B.prototype.xor = function (t) {
                                        var e = V();
                                        return this.bitwiseTo(t, o, e),
                                            e
                                    },
                                    B.prototype.andNot = function (t) {
                                        var e = V();
                                        return this.bitwiseTo(t, a, e),
                                            e
                                    },
                                    B.prototype.not = function () {
                                        for (var t = V(), e = 0; e < this.t; ++e) t[e] = this.DM & ~this[e];
                                        return t.t = this.t,
                                            t.s = ~this.s,
                                            t
                                    },
                                    B.prototype.shiftLeft = function (t) {
                                        var e = V();
                                        return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e),
                                            e
                                    },
                                    B.prototype.shiftRight = function (t) {
                                        var e = V();
                                        return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e),
                                            e
                                    },
                                    B.prototype.getLowestSetBit = function () {
                                        for (var t = 0; t < this.t; ++t)
                                            if (0 != this[t]) return t * this.DB + s(this[t]);
                                        return this.s < 0 ? this.t * this.DB : -1
                                    },
                                    B.prototype.bitCount = function () {
                                        for (var t = 0,
                                                e = this.s & this.DM,
                                                n = 0; n < this.t; ++n) t += c(this[n] ^ e);
                                        return t
                                    },
                                    B.prototype.testBit = function (t) {
                                        var e = Math.floor(t / this.DB);
                                        return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB)
                                    },
                                    B.prototype.setBit = function (t) {
                                        return this.changeBit(t, i)
                                    },
                                    B.prototype.clearBit = function (t) {
                                        return this.changeBit(t, a)
                                    },
                                    B.prototype.flipBit = function (t) {
                                        return this.changeBit(t, o)
                                    },
                                    B.prototype.add = function (t) {
                                        var e = V();
                                        return this.addTo(t, e),
                                            e
                                    },
                                    B.prototype.subtract = function (t) {
                                        var e = V();
                                        return this.subTo(t, e),
                                            e
                                    },
                                    B.prototype.multiply = function (t) {
                                        var e = V();
                                        return this.multiplyTo(t, e),
                                            e
                                    },
                                    B.prototype.divide = function (t) {
                                        var e = V();
                                        return this.divRemTo(t, e, null),
                                            e
                                    },
                                    B.prototype.remainder = function (t) {
                                        var e = V();
                                        return this.divRemTo(t, null, e),
                                            e
                                    },
                                    B.prototype.divideAndRemainder = function (t) {
                                        var e = V(),
                                            n = V();
                                        return this.divRemTo(t, e, n),
                                            [e, n]
                                    },
                                    B.prototype.modPow = function (t, e) {
                                        var n, r, i = t.bitLength(),
                                            o = Y(1);
                                        if (i <= 0) return o;
                                        n = i < 18 ? 1 : i < 48 ? 3 : i < 144 ? 4 : i < 768 ? 5 : 6,
                                            r = i < 8 ? new U(e) : e.isEven() ? new L(e) : new z(e);
                                        var a = [],
                                            s = 3,
                                            c = n - 1,
                                            d = (1 << n) - 1;
                                        if (a[1] = r.convert(this), 1 < n) {
                                            var u = V();
                                            for (r.sqrTo(a[1], u); s <= d;) a[s] = V(),
                                                r.mulTo(u, a[s - 2], a[s]),
                                                s += 2
                                        }
                                        var l, f, p = t.t - 1,
                                            m = !0,
                                            g = V();
                                        for (i = Z(t[p]) - 1; 0 <= p;) {
                                            for (c <= i ? l = t[p] >> i - c & d : (l = (t[p] & (1 << i + 1) - 1) << c - i, 0 < p && (l |= t[p - 1] >> this.DB + i - c)), s = n; 0 == (1 & l);) l >>= 1,
                                                --s;
                                            if ((i -= s) < 0 && (i += this.DB, --p), m) a[l].copyTo(o),
                                                m = !1;
                                            else {
                                                for (; 1 < s;) r.sqrTo(o, g),
                                                    r.sqrTo(g, o),
                                                    s -= 2;
                                                0 < s ? r.sqrTo(o, g) : (f = o, o = g, g = f),
                                                    r.mulTo(g, a[l], o)
                                            }
                                            for (; 0 <= p && 0 == (t[p] & 1 << i);) r.sqrTo(o, g),
                                                f = o,
                                                o = g,
                                                g = f,
                                                --i < 0 && (i = this.DB - 1, --p)
                                        }
                                        return r.revert(o)
                                    },
                                    B.prototype.modInverse = function (t) {
                                        var e = t.isEven();
                                        if (this.isEven() && e || 0 == t.signum()) return B.ZERO;
                                        for (var n = t.clone(), r = this.clone(), i = Y(1), o = Y(0), a = Y(0), s = Y(1); 0 != n.signum();) {
                                            for (; n.isEven();) n.rShiftTo(1, n),
                                                e ? (i.isEven() && o.isEven() || (i.addTo(this, i), o.subTo(t, o)), i.rShiftTo(1, i)) : o.isEven() || o.subTo(t, o),
                                                o.rShiftTo(1, o);
                                            for (; r.isEven();) r.rShiftTo(1, r),
                                                e ? (a.isEven() && s.isEven() || (a.addTo(this, a), s.subTo(t, s)), a.rShiftTo(1, a)) : s.isEven() || s.subTo(t, s),
                                                s.rShiftTo(1, s);
                                            0 <= n.compareTo(r) ? (n.subTo(r, n), e && i.subTo(a, i), o.subTo(s, o)) : (r.subTo(n, r), e && a.subTo(i, a), s.subTo(o, s))
                                        }
                                        return 0 != r.compareTo(B.ONE) ? B.ZERO : 0 <= s.compareTo(t) ? s.subtract(t) : s.signum() < 0 ? (s.addTo(t, s), s.signum() < 0 ? s.add(t) : s) : s
                                    },
                                    B.prototype.pow = function (t) {
                                        return this.exp(t, new R)
                                    },
                                    B.prototype.gcd = function (t) {
                                        var e = this.s < 0 ? this.negate() : this.clone(),
                                            n = t.s < 0 ? t.negate() : t.clone();
                                        if (e.compareTo(n) < 0) {
                                            var r = e;
                                            e = n,
                                                n = r
                                        }
                                        var i = e.getLowestSetBit(),
                                            o = n.getLowestSetBit();
                                        if (o < 0) return e;
                                        for (i < o && (o = i), 0 < o && (e.rShiftTo(o, e), n.rShiftTo(o, n)); 0 < e.signum();) 0 < (i = e.getLowestSetBit()) && e.rShiftTo(i, e),
                                            0 < (i = n.getLowestSetBit()) && n.rShiftTo(i, n),
                                            0 <= e.compareTo(n) ? (e.subTo(n, e), e.rShiftTo(1, e)) : (n.subTo(e, n), n.rShiftTo(1, n));
                                        return 0 < o && n.lShiftTo(o, n),
                                            n
                                    },
                                    B.prototype.isProbablePrime = function (t) {
                                        var e, n = this.abs();
                                        if (1 == n.t && n[0] <= x[x.length - 1]) {
                                            for (e = 0; e < x.length; ++e)
                                                if (n[0] == x[e]) return !0;
                                            return !1
                                        }
                                        if (n.isEven()) return !1;
                                        for (e = 1; e < x.length;) {
                                            for (var r = x[e], i = e + 1; i < x.length && r < D;) r *= x[i++];
                                            for (r = n.modInt(r); e < i;)
                                                if (r % x[e++] == 0) return !1
                                        }
                                        return n.millerRabin(t)
                                    },
                                    B.prototype.copyTo = function (t) {
                                        for (var e = this.t - 1; 0 <= e; --e) t[e] = this[e];
                                        t.t = this.t,
                                            t.s = this.s
                                    },
                                    B.prototype.fromInt = function (t) {
                                        this.t = 1,
                                            this.s = t < 0 ? -1 : 0,
                                            0 < t ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0
                                    },
                                    B.prototype.fromString = function (t, e) {
                                        var n;
                                        if (16 == e) n = 4;
                                        else if (8 == e) n = 3;
                                        else if (256 == e) n = 8;
                                        else if (2 == e) n = 1;
                                        else if (32 == e) n = 5;
                                        else {
                                            if (4 != e) return void this.fromRadix(t, e);
                                            n = 2
                                        }
                                        this.t = 0,
                                            this.s = 0;
                                        for (var r = t.length,
                                                i = !1,
                                                o = 0; 0 <= --r;) {
                                            var a = 8 == n ? 255 & +t[r] : K(t, r);
                                            a < 0 ? "-" == t.charAt(r) && (i = !0) : (i = !1, 0 == o ? this[this.t++] = a : o + n > this.DB ? (this[this.t - 1] |= (a & (1 << this.DB - o) - 1) << o, this[this.t++] = a >> this.DB - o) : this[this.t - 1] |= a << o, (o += n) >= this.DB && (o -= this.DB))
                                        }
                                        8 == n && 0 != (128 & +t[0]) && (this.s = -1, 0 < o && (this[this.t - 1] |= (1 << this.DB - o) - 1 << o)),
                                            this.clamp(),
                                            i && B.ZERO.subTo(this, this)
                                    },
                                    B.prototype.clamp = function () {
                                        for (var t = this.s & this.DM; 0 < this.t && this[this.t - 1] == t;) --this.t
                                    },
                                    B.prototype.dlShiftTo = function (t, e) {
                                        var n;
                                        for (n = this.t - 1; 0 <= n; --n) e[n + t] = this[n];
                                        for (n = t - 1; 0 <= n; --n) e[n] = 0;
                                        e.t = this.t + t,
                                            e.s = this.s
                                    },
                                    B.prototype.drShiftTo = function (t, e) {
                                        for (var n = t; n < this.t; ++n) e[n - t] = this[n];
                                        e.t = Math.max(this.t - t, 0),
                                            e.s = this.s
                                    },
                                    B.prototype.lShiftTo = function (t, e) {
                                        for (var n = t % this.DB,
                                                r = this.DB - n,
                                                i = (1 << r) - 1, o = Math.floor(t / this.DB), a = this.s << n & this.DM, s = this.t - 1; 0 <= s; --s) e[s + o + 1] = this[s] >> r | a,
                                            a = (this[s] & i) << n;
                                        for (s = o - 1; 0 <= s; --s) e[s] = 0;
                                        e[o] = a,
                                            e.t = this.t + o + 1,
                                            e.s = this.s,
                                            e.clamp()
                                    },
                                    B.prototype.rShiftTo = function (t, e) {
                                        e.s = this.s;
                                        var n = Math.floor(t / this.DB);
                                        if (n >= this.t) e.t = 0;
                                        else {
                                            var r = t % this.DB,
                                                i = this.DB - r,
                                                o = (1 << r) - 1;
                                            e[0] = this[n] >> r;
                                            for (var a = n + 1; a < this.t; ++a) e[a - n - 1] |= (this[a] & o) << i,
                                                e[a - n] = this[a] >> r;
                                            0 < r && (e[this.t - n - 1] |= (this.s & o) << i),
                                                e.t = this.t - n,
                                                e.clamp()
                                        }
                                    },
                                    B.prototype.subTo = function (t, e) {
                                        for (var n = 0,
                                                r = 0,
                                                i = Math.min(t.t, this.t); n < i;) r += this[n] - t[n],
                                            e[n++] = r & this.DM,
                                            r >>= this.DB;
                                        if (t.t < this.t) {
                                            for (r -= t.s; n < this.t;) r += this[n],
                                                e[n++] = r & this.DM,
                                                r >>= this.DB;
                                            r += this.s
                                        } else {
                                            for (r += this.s; n < t.t;) r -= t[n],
                                                e[n++] = r & this.DM,
                                                r >>= this.DB;
                                            r -= t.s
                                        }
                                        e.s = r < 0 ? -1 : 0,
                                            r < -1 ? e[n++] = this.DV + r : 0 < r && (e[n++] = r),
                                            e.t = n,
                                            e.clamp()
                                    },
                                    B.prototype.multiplyTo = function (t, e) {
                                        var n = this.abs(),
                                            r = t.abs(),
                                            i = n.t;
                                        for (e.t = i + r.t; 0 <= --i;) e[i] = 0;
                                        for (i = 0; i < r.t; ++i) e[i + n.t] = n.am(0, r[i], e, i, 0, n.t);
                                        e.s = 0,
                                            e.clamp(),
                                            this.s != t.s && B.ZERO.subTo(e, e)
                                    },
                                    B.prototype.squareTo = function (t) {
                                        for (var e = this.abs(), n = t.t = 2 * e.t; 0 <= --n;) t[n] = 0;
                                        for (n = 0; n < e.t - 1; ++n) {
                                            var r = e.am(n, e[n], t, 2 * n, 0, 1);
                                            (t[n + e.t] += e.am(n + 1, 2 * e[n], t, 2 * n + 1, r, e.t - n - 1)) >= e.DV && (t[n + e.t] -= e.DV, t[n + e.t + 1] = 1)
                                        }
                                        0 < t.t && (t[t.t - 1] += e.am(n, e[n], t, 2 * n, 0, 1)),
                                            t.s = 0,
                                            t.clamp()
                                    },
                                    B.prototype.divRemTo = function (t, e, n) {
                                        var r = t.abs();
                                        if (!(r.t <= 0)) {
                                            var i = this.abs();
                                            if (i.t < r.t) return null != e && e.fromInt(0),
                                                void(null != n && this.copyTo(n));
                                            null == n && (n = V());
                                            var o = V(),
                                                a = this.s,
                                                s = t.s,
                                                c = this.DB - Z(r[r.t - 1]);
                                            0 < c ? (r.lShiftTo(c, o), i.lShiftTo(c, n)) : (r.copyTo(o), i.copyTo(n));
                                            var d = o.t,
                                                u = o[d - 1];
                                            if (0 != u) {
                                                var l = u * (1 << this.F1) + (1 < d ? o[d - 2] >> this.F2 : 0),
                                                    f = this.FV / l,
                                                    p = (1 << this.F1) / l,
                                                    m = 1 << this.F2,
                                                    g = n.t,
                                                    h = g - d,
                                                    A = null == e ? V() : e;
                                                for (o.dlShiftTo(h, A), 0 <= n.compareTo(A) && (n[n.t++] = 1, n.subTo(A, n)), B.ONE.dlShiftTo(d, A), A.subTo(o, o); o.t < d;) o[o.t++] = 0;
                                                for (; 0 <= --h;) {
                                                    var v = n[--g] == u ? this.DM : Math.floor(n[g] * f + (n[g - 1] + m) * p);
                                                    if ((n[g] += o.am(0, v, n, h, 0, d)) < v)
                                                        for (o.dlShiftTo(h, A), n.subTo(A, n); n[g] < --v;) n.subTo(A, n)
                                                }
                                                null != e && (n.drShiftTo(d, e), a != s && B.ZERO.subTo(e, e)),
                                                    n.t = d,
                                                    n.clamp(),
                                                    0 < c && n.rShiftTo(c, n),
                                                    a < 0 && B.ZERO.subTo(n, n)
                                            }
                                        }
                                    },
                                    B.prototype.invDigit = function () {
                                        if (this.t < 1) return 0;
                                        var t = this[0];
                                        if (0 == (1 & t)) return 0;
                                        var e = 3 & t;
                                        return 0 < (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) ? this.DV - e : -e
                                    },
                                    B.prototype.isEven = function () {
                                        return 0 == (0 < this.t ? 1 & this[0] : this.s)
                                    },
                                    B.prototype.exp = function (t, e) {
                                        if (4294967295 < t || t < 1) return B.ONE;
                                        var n = V(),
                                            r = V(),
                                            i = e.convert(this),
                                            o = Z(t) - 1;
                                        for (i.copyTo(n); 0 <= --o;)
                                            if (e.sqrTo(n, r), 0 < (t & 1 << o)) e.mulTo(r, i, n);
                                            else {
                                                var a = n;
                                                n = r,
                                                    r = a
                                            }
                                        return e.revert(n)
                                    },
                                    B.prototype.chunkSize = function (t) {
                                        return Math.floor(Math.LN2 * this.DB / Math.log(t))
                                    },
                                    B.prototype.toRadix = function (t) {
                                        if (null == t && (t = 10), 0 == this.signum() || t < 2 || 36 < t) return "0";
                                        var e = this.chunkSize(t),
                                            n = Math.pow(t, e),
                                            r = Y(n),
                                            i = V(),
                                            o = V(),
                                            a = "";
                                        for (this.divRemTo(r, i, o); 0 < i.signum();) a = (n + o.intValue()).toString(t).substr(1) + a,
                                            i.divRemTo(r, i, o);
                                        return o.intValue().toString(t) + a
                                    },
                                    B.prototype.fromRadix = function (t, e) {
                                        this.fromInt(0),
                                            null == e && (e = 10);
                                        for (var n = this.chunkSize(e), r = Math.pow(e, n), i = !1, o = 0, a = 0, s = 0; s < t.length; ++s) {
                                            var c = K(t, s);
                                            c < 0 ? "-" == t.charAt(s) && 0 == this.signum() && (i = !0) : (a = e * a + c, ++o >= n && (this.dMultiply(r), this.dAddOffset(a, 0), a = o = 0))
                                        }
                                        0 < o && (this.dMultiply(Math.pow(e, o)), this.dAddOffset(a, 0)),
                                            i && B.ZERO.subTo(this, this)
                                    },
                                    B.prototype.fromNumber = function (t, e, n) {
                                        if ("number" == typeof e)
                                            if (t < 2) this.fromInt(1);
                                            else
                                                for (this.fromNumber(t, n), this.testBit(t - 1) || this.bitwiseTo(B.ONE.shiftLeft(t - 1), i, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(e);) this.dAddOffset(2, 0),
                                                    this.bitLength() > t && this.subTo(B.ONE.shiftLeft(t - 1), this);
                                        else {
                                            var r = [],
                                                o = 7 & t;
                                            r.length = 1 + (t >> 3),
                                                e.nextBytes(r),
                                                0 < o ? r[0] &= (1 << o) - 1 : r[0] = 0,
                                                this.fromString(r, 256)
                                        }
                                    },
                                    B.prototype.bitwiseTo = function (t, e, n) {
                                        var r, i, o = Math.min(t.t, this.t);
                                        for (r = 0; r < o; ++r) n[r] = e(this[r], t[r]);
                                        if (t.t < this.t) {
                                            for (i = t.s & this.DM, r = o; r < this.t; ++r) n[r] = e(this[r], i);
                                            n.t = this.t
                                        } else {
                                            for (i = this.s & this.DM, r = o; r < t.t; ++r) n[r] = e(i, t[r]);
                                            n.t = t.t
                                        }
                                        n.s = e(this.s, t.s),
                                            n.clamp()
                                    },
                                    B.prototype.changeBit = function (t, e) {
                                        var n = B.ONE.shiftLeft(t);
                                        return this.bitwiseTo(n, e, n),
                                            n
                                    },
                                    B.prototype.addTo = function (t, e) {
                                        for (var n = 0,
                                                r = 0,
                                                i = Math.min(t.t, this.t); n < i;) r += this[n] + t[n],
                                            e[n++] = r & this.DM,
                                            r >>= this.DB;
                                        if (t.t < this.t) {
                                            for (r += t.s; n < this.t;) r += this[n],
                                                e[n++] = r & this.DM,
                                                r >>= this.DB;
                                            r += this.s
                                        } else {
                                            for (r += this.s; n < t.t;) r += t[n],
                                                e[n++] = r & this.DM,
                                                r >>= this.DB;
                                            r += t.s
                                        }
                                        e.s = r < 0 ? -1 : 0,
                                            0 < r ? e[n++] = r : r < -1 && (e[n++] = this.DV + r),
                                            e.t = n,
                                            e.clamp()
                                    },
                                    B.prototype.dMultiply = function (t) {
                                        this[this.t] = this.am(0, t - 1, this, 0, 0, this.t),
                                            ++this.t,
                                            this.clamp()
                                    },
                                    B.prototype.dAddOffset = function (t, e) {
                                        if (0 != t) {
                                            for (; this.t <= e;) this[this.t++] = 0;
                                            for (this[e] += t; this[e] >= this.DV;) this[e] -= this.DV,
                                                ++e >= this.t && (this[this.t++] = 0),
                                                ++this[e]
                                        }
                                    },
                                    B.prototype.multiplyLowerTo = function (t, e, n) {
                                        var r = Math.min(this.t + t.t, e);
                                        for (n.s = 0, n.t = r; 0 < r;) n[--r] = 0;
                                        for (var i = n.t - this.t; r < i; ++r) n[r + this.t] = this.am(0, t[r], n, r, 0, this.t);
                                        for (i = Math.min(t.t, e); r < i; ++r) this.am(0, t[r], n, r, 0, e - r);
                                        n.clamp()
                                    },
                                    B.prototype.multiplyUpperTo = function (t, e, n) {
                                        --e;
                                        var r = n.t = this.t + t.t - e;
                                        for (n.s = 0; 0 <= --r;) n[r] = 0;
                                        for (r = Math.max(e - this.t, 0); r < t.t; ++r) n[this.t + r - e] = this.am(e - r, t[r], n, 0, 0, this.t + r - e);
                                        n.clamp(),
                                            n.drShiftTo(1, n)
                                    },
                                    B.prototype.modInt = function (t) {
                                        if (t <= 0) return 0;
                                        var e = this.DV % t,
                                            n = this.s < 0 ? t - 1 : 0;
                                        if (0 < this.t)
                                            if (0 == e) n = this[0] % t;
                                            else
                                                for (var r = this.t - 1; 0 <= r; --r) n = (e * n + this[r]) % t;
                                        return n
                                    },
                                    B.prototype.millerRabin = function (t) {
                                        var e = this.subtract(B.ONE),
                                            n = e.getLowestSetBit();
                                        if (n <= 0) return !1;
                                        var r = e.shiftRight(n);
                                        x.length < (t = t + 1 >> 1) && (t = x.length);
                                        for (var i = V(), o = 0; o < t; ++o) {
                                            i.fromInt(x[Math.floor(Math.random() * x.length)]);
                                            var a = i.modPow(r, this);
                                            if (0 != a.compareTo(B.ONE) && 0 != a.compareTo(e)) {
                                                for (var s = 1; s++ < n && 0 != a.compareTo(e);)
                                                    if (0 == (a = a.modPowInt(2, this)).compareTo(B.ONE)) return !1;
                                                if (0 != a.compareTo(e)) return !1
                                            }
                                        }
                                        return !0
                                    },
                                    B.prototype.square = function () {
                                        var t = V();
                                        return this.squareTo(t),
                                            t
                                    },
                                    B.prototype.gcda = function (t, e) {
                                        var n = this.s < 0 ? this.negate() : this.clone(),
                                            r = t.s < 0 ? t.negate() : t.clone();
                                        if (n.compareTo(r) < 0) {
                                            var i = n;
                                            n = r,
                                                r = i
                                        }
                                        var o = n.getLowestSetBit(),
                                            a = r.getLowestSetBit();
                                        if (a < 0) e(n);
                                        else {
                                            o < a && (a = o),
                                                0 < a && (n.rShiftTo(a, n), r.rShiftTo(a, r));
                                            var s = function () {
                                                0 < (o = n.getLowestSetBit()) && n.rShiftTo(o, n),
                                                    0 < (o = r.getLowestSetBit()) && r.rShiftTo(o, r),
                                                    0 <= n.compareTo(r) ? (n.subTo(r, n), n.rShiftTo(1, n)) : (r.subTo(n, r), r.rShiftTo(1, r)),
                                                    0 < n.signum() ? setTimeout(s, 0) : (0 < a && r.lShiftTo(a, r), setTimeout(function () {
                                                            e(r)
                                                        },
                                                        0))
                                            };
                                            setTimeout(s, 10)
                                        }
                                    },
                                    B.prototype.fromNumberAsync = function (t, e, n, r) {
                                        if ("number" == typeof e)
                                            if (t < 2) this.fromInt(1);
                                            else {
                                                this.fromNumber(t, n),
                                                    this.testBit(t - 1) || this.bitwiseTo(B.ONE.shiftLeft(t - 1), i, this),
                                                    this.isEven() && this.dAddOffset(1, 0);
                                                var o = this,
                                                    a = function () {
                                                        o.dAddOffset(2, 0),
                                                            o.bitLength() > t && o.subTo(B.ONE.shiftLeft(t - 1), o),
                                                            o.isProbablePrime(e) ? setTimeout(function () {
                                                                    r()
                                                                },
                                                                0) : setTimeout(a, 0)
                                                    };
                                                setTimeout(a, 0)
                                            }
                                        else {
                                            var s = [],
                                                c = 7 & t;
                                            s.length = 1 + (t >> 3),
                                                e.nextBytes(s),
                                                0 < c ? s[0] &= (1 << c) - 1 : s[0] = 0,
                                                this.fromString(s, 256)
                                        }
                                    },
                                    B);

                            function B(t, e, n) {
                                null != t && ("number" == typeof t ? this.fromNumber(t, e, n) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
                            }
                            var R = (j.prototype.convert = function (t) {
                                    return t
                                },
                                j.prototype.revert = function (t) {
                                    return t
                                },
                                j.prototype.mulTo = function (t, e, n) {
                                    t.multiplyTo(e, n)
                                },
                                j.prototype.sqrTo = function (t, e) {
                                    t.squareTo(e)
                                },
                                j);

                            function j() {}
                            var U = (N.prototype.convert = function (t) {
                                    return t.s < 0 || 0 <= t.compareTo(this.m) ? t.mod(this.m) : t
                                },
                                N.prototype.revert = function (t) {
                                    return t
                                },
                                N.prototype.reduce = function (t) {
                                    t.divRemTo(this.m, null, t)
                                },
                                N.prototype.mulTo = function (t, e, n) {
                                    t.multiplyTo(e, n),
                                        this.reduce(n)
                                },
                                N.prototype.sqrTo = function (t, e) {
                                    t.squareTo(e),
                                        this.reduce(e)
                                },
                                N);

                            function N(t) {
                                this.m = t
                            }
                            var z = (M.prototype.convert = function (t) {
                                    var e = V();
                                    return t.abs().dlShiftTo(this.m.t, e),
                                        e.divRemTo(this.m, null, e),
                                        t.s < 0 && 0 < e.compareTo(P.ZERO) && this.m.subTo(e, e),
                                        e
                                },
                                M.prototype.revert = function (t) {
                                    var e = V();
                                    return t.copyTo(e),
                                        this.reduce(e),
                                        e
                                },
                                M.prototype.reduce = function (t) {
                                    for (; t.t <= this.mt2;) t[t.t++] = 0;
                                    for (var e = 0; e < this.m.t; ++e) {
                                        var n = 32767 & t[e],
                                            r = n * this.mpl + ((n * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                                        for (t[n = e + this.m.t] += this.m.am(0, r, t, e, 0, this.m.t); t[n] >= t.DV;) t[n] -= t.DV,
                                            t[++n]++
                                    }
                                    t.clamp(),
                                        t.drShiftTo(this.m.t, t),
                                        0 <= t.compareTo(this.m) && t.subTo(this.m, t)
                                },
                                M.prototype.mulTo = function (t, e, n) {
                                    t.multiplyTo(e, n),
                                        this.reduce(n)
                                },
                                M.prototype.sqrTo = function (t, e) {
                                    t.squareTo(e),
                                        this.reduce(e)
                                },
                                M);

                            function M(t) {
                                this.m = t,
                                    this.mp = t.invDigit(),
                                    this.mpl = 32767 & this.mp,
                                    this.mph = this.mp >> 15,
                                    this.um = (1 << t.DB - 15) - 1,
                                    this.mt2 = 2 * t.t
                            }
                            var L = (q.prototype.convert = function (t) {
                                    if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
                                    if (t.compareTo(this.m) < 0) return t;
                                    var e = V();
                                    return t.copyTo(e),
                                        this.reduce(e),
                                        e
                                },
                                q.prototype.revert = function (t) {
                                    return t
                                },
                                q.prototype.reduce = function (t) {
                                    for (t.drShiftTo(this.m.t - 1, this.r2), t.t > this.m.t + 1 && (t.t = this.m.t + 1, t.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0;) t.dAddOffset(1, this.m.t + 1);
                                    for (t.subTo(this.r2, t); 0 <= t.compareTo(this.m);) t.subTo(this.m, t)
                                },
                                q.prototype.mulTo = function (t, e, n) {
                                    t.multiplyTo(e, n),
                                        this.reduce(n)
                                },
                                q.prototype.sqrTo = function (t, e) {
                                    t.squareTo(e),
                                        this.reduce(e)
                                },
                                q);

                            function q(t) {
                                this.m = t,
                                    this.r2 = V(),
                                    this.q3 = V(),
                                    P.ONE.dlShiftTo(2 * t.t, this.r2),
                                    this.mu = this.r2.divide(t)
                            }

                            function V() {
                                return new P(null)
                            }

                            function G(t, e) {
                                return new P(t, e)
                            }
                            k = "Microsoft Internet Explorer" == navigator.appName ? (P.prototype.am = function (t, e, n, r, i, o) {
                                        for (var a = 32767 & e,
                                                s = e >> 15; 0 <= --o;) {
                                            var c = 32767 & this[t],
                                                d = this[t++] >> 15,
                                                u = s * c + d * a;
                                            i = ((c = a * c + ((32767 & u) << 15) + n[r] + (1073741823 & i)) >>> 30) + (u >>> 15) + s * d + (i >>> 30),
                                                n[r++] = 1073741823 & c
                                        }
                                        return i
                                    },
                                    30) : "Netscape" != navigator.appName ? (P.prototype.am = function (t, e, n, r, i, o) {
                                        for (; 0 <= --o;) {
                                            var a = e * this[t++] + n[r] + i;
                                            i = Math.floor(a / 67108864),
                                                n[r++] = 67108863 & a
                                        }
                                        return i
                                    },
                                    26) : (P.prototype.am = function (t, e, n, r, i, o) {
                                        for (var a = 16383 & e,
                                                s = e >> 14; 0 <= --o;) {
                                            var c = 16383 & this[t],
                                                d = this[t++] >> 14,
                                                u = s * c + d * a;
                                            i = ((c = a * c + ((16383 & u) << 14) + n[r] + i) >> 28) + (u >> 14) + s * d,
                                                n[r++] = 268435455 & c
                                        }
                                        return i
                                    },
                                    28),
                                P.prototype.DB = k,
                                P.prototype.DM = (1 << k) - 1,
                                P.prototype.DV = 1 << k,
                                P.prototype.FV = Math.pow(2, 52),
                                P.prototype.F1 = 52 - k,
                                P.prototype.F2 = 2 * k - 52;
                            var W, F, H = [];
                            for (W = "0".charCodeAt(0), F = 0; F <= 9; ++F) H[W++] = F;
                            for (W = "a".charCodeAt(0), F = 10; F < 36; ++F) H[W++] = F;
                            for (W = "A".charCodeAt(0), F = 10; F < 36; ++F) H[W++] = F;

                            function K(t, e) {
                                var n = H[t.charCodeAt(e)];
                                return null == n ? -1 : n
                            }

                            function Y(t) {
                                var e = V();
                                return e.fromInt(t),
                                    e
                            }

                            function Z(t) {
                                var e, n = 1;
                                return 0 != (e = t >>> 16) && (t = e, n += 16),
                                    0 != (e = t >> 8) && (t = e, n += 8),
                                    0 != (e = t >> 4) && (t = e, n += 4),
                                    0 != (e = t >> 2) && (t = e, n += 2),
                                    0 != (e = t >> 1) && (t = e, n += 1),
                                    n
                            }
                            P.ZERO = Y(0),
                                P.ONE = Y(1);
                            var Q = (X.prototype.init = function (t) {
                                    var e, n, r;
                                    for (e = 0; e < 256; ++e) this.S[e] = e;
                                    for (e = n = 0; e < 256; ++e) n = n + this.S[e] + t[e % t.length] & 255,
                                        r = this.S[e],
                                        this.S[e] = this.S[n],
                                        this.S[n] = r;
                                    this.i = 0,
                                        this.j = 0
                                },
                                X.prototype.next = function () {
                                    var t;
                                    return this.i = this.i + 1 & 255,
                                        this.j = this.j + this.S[this.i] & 255,
                                        t = this.S[this.i],
                                        this.S[this.i] = this.S[this.j],
                                        this.S[this.j] = t,
                                        this.S[t + this.S[this.i] & 255]
                                },
                                X);

                            function X() {
                                this.i = 0,
                                    this.j = 0,
                                    this.S = []
                            }
                            var J, $, tt = 256,
                                et = null;
                            if (null == et) {
                                et = [];
                                var nt = void($ = 0);
                                if (window.crypto && window.crypto.getRandomValues) {
                                    var rt = new Uint32Array(256);
                                    for (window.crypto.getRandomValues(rt), nt = 0; nt < rt.length; ++nt) et[$++] = 255 & rt[nt]
                                }
                                var it = function (t) {
                                    if (this.count = this.count || 0, 256 <= this.count || tt <= $) window.removeEventListener ? window.removeEventListener("mousemove", it, !1) : window.detachEvent && window.detachEvent("onmousemove", it);
                                    else try {
                                        var e = t.x + t.y;
                                        et[$++] = 255 & e,
                                            this.count += 1
                                    } catch (t) {}
                                };
                                window.addEventListener ? window.addEventListener("mousemove", it, !1) : window.attachEvent && window.attachEvent("onmousemove", it)
                            }

                            function ot() {
                                if (null == J) {
                                    for (J = new Q; $ < tt;) {
                                        var t = Math.floor(65536 * Math.random());
                                        et[$++] = 255 & t
                                    }
                                    for (J.init(et), $ = 0; $ < et.length; ++$) et[$] = 0;
                                    $ = 0
                                }
                                return J.next()
                            }
                            var at = (st.prototype.nextBytes = function (t) {
                                    for (var e = 0; e < t.length; ++e) t[e] = ot()
                                },
                                st);

                            function st() {}
                            var ct = (dt.prototype.doPublic = function (t) {
                                    return t.modPowInt(this.e, this.n)
                                },
                                dt.prototype.doPrivate = function (t) {
                                    if (null == this.p || null == this.q) return t.modPow(this.d, this.n);
                                    for (var e = t.mod(this.p).modPow(this.dmp1, this.p), n = t.mod(this.q).modPow(this.dmq1, this.q); e.compareTo(n) < 0;) e = e.add(this.p);
                                    return e.subtract(n).multiply(this.coeff).mod(this.p).multiply(this.q).add(n)
                                },
                                dt.prototype.setPublic = function (t, e) {
                                    null != t && null != e && 0 < t.length && 0 < e.length ? (this.n = G(t, 16), this.e = parseInt(e, 16)) : console.error("Invalid RSA public key")
                                },
                                dt.prototype.encrypt = function (t) {
                                    var e = function (t, e) {
                                        if (e < t.length + 11) return console.error("Message too long for RSA"),
                                            null;
                                        for (var n = [], r = t.length - 1; 0 <= r && 0 < e;) {
                                            var i = t.charCodeAt(r--);
                                            i < 128 ? n[--e] = i : 127 < i && i < 2048 ? (n[--e] = 63 & i | 128, n[--e] = i >> 6 | 192) : (n[--e] = 63 & i | 128, n[--e] = i >> 6 & 63 | 128, n[--e] = i >> 12 | 224)
                                        }
                                        n[--e] = 0;
                                        for (var o = new at,
                                                a = []; 2 < e;) {
                                            for (a[0] = 0; 0 == a[0];) o.nextBytes(a);
                                            n[--e] = a[0]
                                        }
                                        return n[--e] = 2,
                                            n[--e] = 0,
                                            new P(n)
                                    }(t, this.n.bitLength() + 7 >> 3);
                                    if (null == e) return null;
                                    var n = this.doPublic(e);
                                    if (null == n) return null;
                                    var r = n.toString(16);
                                    return 0 == (1 & r.length) ? r : "0" + r
                                },
                                dt.prototype.setPrivate = function (t, e, n) {
                                    null != t && null != e && 0 < t.length && 0 < e.length ? (this.n = G(t, 16), this.e = parseInt(e, 16), this.d = G(n, 16)) : console.error("Invalid RSA private key")
                                },
                                dt.prototype.setPrivateEx = function (t, e, n, r, i, o, a, s) {
                                    null != t && null != e && 0 < t.length && 0 < e.length ? (this.n = G(t, 16), this.e = parseInt(e, 16), this.d = G(n, 16), this.p = G(r, 16), this.q = G(i, 16), this.dmp1 = G(o, 16), this.dmq1 = G(a, 16), this.coeff = G(s, 16)) : console.error("Invalid RSA private key")
                                },
                                dt.prototype.generate = function (t, e) {
                                    var n = new at,
                                        r = t >> 1;
                                    this.e = parseInt(e, 16);
                                    for (var i = new P(e, 16);;) {
                                        for (; this.p = new P(t - r, 1, n), 0 != this.p.subtract(P.ONE).gcd(i).compareTo(P.ONE) || !this.p.isProbablePrime(10););
                                        for (; this.q = new P(r, 1, n), 0 != this.q.subtract(P.ONE).gcd(i).compareTo(P.ONE) || !this.q.isProbablePrime(10););
                                        if (this.p.compareTo(this.q) <= 0) {
                                            var o = this.p;
                                            this.p = this.q,
                                                this.q = o
                                        }
                                        var a = this.p.subtract(P.ONE),
                                            s = this.q.subtract(P.ONE),
                                            c = a.multiply(s);
                                        if (0 == c.gcd(i).compareTo(P.ONE)) {
                                            this.n = this.p.multiply(this.q),
                                                this.d = i.modInverse(c),
                                                this.dmp1 = this.d.mod(a),
                                                this.dmq1 = this.d.mod(s),
                                                this.coeff = this.q.modInverse(this.p);
                                            break
                                        }
                                    }
                                },
                                dt.prototype.decrypt = function (t) {
                                    var e = G(t, 16),
                                        n = this.doPrivate(e);
                                    return null == n ? null : function (t, e) {
                                        for (var n = t.toByteArray(), r = 0; r < n.length && 0 == n[r];) ++r;
                                        if (n.length - r != e - 1 || 2 != n[r]) return null;
                                        for (++r; 0 != n[r];)
                                            if (++r >= n.length) return null;
                                        for (var i = ""; ++r < n.length;) {
                                            var o = 255 & n[r];
                                            o < 128 ? i += String.fromCharCode(o) : 191 < o && o < 224 ? (i += String.fromCharCode((31 & o) << 6 | 63 & n[r + 1]), ++r) : (i += String.fromCharCode((15 & o) << 12 | (63 & n[r + 1]) << 6 | 63 & n[r + 2]), r += 2)
                                        }
                                        return i
                                    }(n, this.n.bitLength() + 7 >> 3)
                                },
                                dt.prototype.generateAsync = function (t, e, n) {
                                    var r = new at,
                                        i = t >> 1;
                                    this.e = parseInt(e, 16);
                                    var o = new P(e, 16),
                                        a = this,
                                        s = function () {
                                            function e() {
                                                if (a.p.compareTo(a.q) <= 0) {
                                                    var t = a.p;
                                                    a.p = a.q,
                                                        a.q = t
                                                }
                                                var e = a.p.subtract(P.ONE),
                                                    r = a.q.subtract(P.ONE),
                                                    i = e.multiply(r);
                                                0 == i.gcd(o).compareTo(P.ONE) ? (a.n = a.p.multiply(a.q), a.d = o.modInverse(i), a.dmp1 = a.d.mod(e), a.dmq1 = a.d.mod(r), a.coeff = a.q.modInverse(a.p), setTimeout(function () {
                                                        n()
                                                    },
                                                    0)) : setTimeout(s, 0)
                                            }
                                            var c = function () {
                                                    a.q = V(),
                                                        a.q.fromNumberAsync(i, 1, r,
                                                            function () {
                                                                a.q.subtract(P.ONE).gcda(o,
                                                                    function (t) {
                                                                        0 == t.compareTo(P.ONE) && a.q.isProbablePrime(10) ? setTimeout(e, 0) : setTimeout(c, 0)
                                                                    })
                                                            })
                                                },
                                                d = function () {
                                                    a.p = V(),
                                                        a.p.fromNumberAsync(t - i, 1, r,
                                                            function () {
                                                                a.p.subtract(P.ONE).gcda(o,
                                                                    function (t) {
                                                                        0 == t.compareTo(P.ONE) && a.p.isProbablePrime(10) ? setTimeout(c, 0) : setTimeout(d, 0)
                                                                    })
                                                            })
                                                };
                                            setTimeout(d, 0)
                                        };
                                    setTimeout(s, 0)
                                },
                                dt.prototype.sign = function (t, e, n) {
                                    var r = function (t, e) {
                                        if (e < t.length + 22) return console.error("Message too long for RSA"),
                                            null;
                                        for (var n = e - t.length - 6,
                                                r = "",
                                                i = 0; i < n; i += 2) r += "ff";
                                        return G("0001" + r + "00" + t, 16)
                                    }((ut[n] || "") + e(t).toString(), this.n.bitLength() / 4);
                                    if (null == r) return null;
                                    var i = this.doPrivate(r);
                                    if (null == i) return null;
                                    var o = i.toString(16);
                                    return 0 == (1 & o.length) ? o : "0" + o
                                },
                                dt.prototype.verify = function (t, e, n) {
                                    var r = G(e, 16),
                                        i = this.doPublic(r);
                                    return null == i ? null : function (t) {
                                        for (var e in ut)
                                            if (ut.hasOwnProperty(e)) {
                                                var n = ut[e],
                                                    r = n.length;
                                                if (t.substr(0, r) == n) return t.substr(r)
                                            }
                                        return t
                                    }(i.toString(16).replace(/^1f+00/, "")) == n(t).toString()
                                },
                                dt);

                            function dt() {
                                this.n = null,
                                    this.e = 0,
                                    this.d = null,
                                    this.p = null,
                                    this.q = null,
                                    this.dmp1 = null,
                                    this.dmq1 = null,
                                    this.coeff = null
                            }
                            var ut = {
                                    md2: "3020300c06082a864886f70d020205000410",
                                    md5: "3020300c06082a864886f70d020505000410",
                                    sha1: "3021300906052b0e03021a05000414",
                                    sha224: "302d300d06096086480165030402040500041c",
                                    sha256: "3031300d060960864801650304020105000420",
                                    sha384: "3041300d060960864801650304020205000430",
                                    sha512: "3051300d060960864801650304020305000440",
                                    ripemd160: "3021300906052b2403020105000414"
                                },
                                lt = {};
                            lt.lang = {
                                extend: function (t, e, n) {
                                    if (!e || !t) throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.");

                                    function r() {}
                                    if (r.prototype = e.prototype, t.prototype = new r, (t.prototype.constructor = t).superclass = e.prototype, e.prototype.constructor == Object.prototype.constructor && (e.prototype.constructor = e), n) {
                                        var i;
                                        for (i in n) t.prototype[i] = n[i];
                                        var o = function () {},
                                            a = ["toString", "valueOf"];
                                        try {
                                            / MSIE /.test(navigator.userAgent) && (o = function (t, e) {
                                                for (i = 0; i < a.length; i += 1) {
                                                    var n = a[i],
                                                        r = e[n];
                                                    "function" == typeof r && r != Object.prototype[n] && (t[n] = r)
                                                }
                                            })
                                        } catch (t) {}
                                        o(t.prototype, n)
                                    }
                                }
                            };
                            var ft = {};
                            void 0 !== ft.asn1 && ft.asn1 || (ft.asn1 = {}),
                                ft.asn1.ASN1Util = new

                            function () {
                                this.integerToByteHex = function (t) {
                                        var e = t.toString(16);
                                        return e.length % 2 == 1 && (e = "0" + e),
                                            e
                                    },
                                    this.bigIntToMinTwosComplementsHex = function (t) {
                                        var e = t.toString(16);
                                        if ("-" != e.substr(0, 1)) e.length % 2 == 1 ? e = "0" + e : e.match(/^[0-7]/) || (e = "00" + e);
                                        else {
                                            var n = e.substr(1).length;
                                            n % 2 == 1 ? n += 1 : e.match(/^[0-7]/) || (n += 2);
                                            for (var r = "",
                                                    i = 0; i < n; i++) r += "f";
                                            e = new P(r, 16).xor(t).add(P.ONE).toString(16).replace(/^-/, "")
                                        }
                                        return e
                                    },
                                    this.getPEMStringFromHex = function (t, e) {
                                        return hextopem(t, e)
                                    },
                                    this.newObject = function (t) {
                                        var e = ft.asn1,
                                            n = e.DERBoolean,
                                            r = e.DERInteger,
                                            i = e.DERBitString,
                                            o = e.DEROctetString,
                                            a = e.DERNull,
                                            s = e.DERObjectIdentifier,
                                            c = e.DEREnumerated,
                                            d = e.DERUTF8String,
                                            u = e.DERNumericString,
                                            l = e.DERPrintableString,
                                            f = e.DERTeletexString,
                                            p = e.DERIA5String,
                                            m = e.DERUTCTime,
                                            g = e.DERGeneralizedTime,
                                            h = e.DERSequence,
                                            A = e.DERSet,
                                            v = e.DERTaggedObject,
                                            y = e.ASN1Util.newObject,
                                            b = Object.keys(t);
                                        if (1 != b.length) throw "key of param shall be only one.";
                                        var w = b[0];
                                        if (-1 == ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + w + ":")) throw "undefined key: " + w;
                                        if ("bool" == w) return new n(t[w]);
                                        if ("int" == w) return new r(t[w]);
                                        if ("bitstr" == w) return new i(t[w]);
                                        if ("octstr" == w) return new o(t[w]);
                                        if ("null" == w) return new a(t[w]);
                                        if ("oid" == w) return new s(t[w]);
                                        if ("enum" == w) return new c(t[w]);
                                        if ("utf8str" == w) return new d(t[w]);
                                        if ("numstr" == w) return new u(t[w]);
                                        if ("prnstr" == w) return new l(t[w]);
                                        if ("telstr" == w) return new f(t[w]);
                                        if ("ia5str" == w) return new p(t[w]);
                                        if ("utctime" == w) return new m(t[w]);
                                        if ("gentime" == w) return new g(t[w]);
                                        if ("seq" == w) {
                                            for (var E = t[w], _ = [], T = 0; T < E.length; T++) {
                                                var S = y(E[T]);
                                                _.push(S)
                                            }
                                            return new h({
                                                array: _
                                            })
                                        }
                                        if ("set" == w) {
                                            for (E = t[w], _ = [], T = 0; T < E.length; T++) S = y(E[T]),
                                                _.push(S);
                                            return new A({
                                                array: _
                                            })
                                        }
                                        if ("tag" == w) {
                                            var I = t[w];
                                            if ("[object Array]" === Object.prototype.toString.call(I) && 3 == I.length) {
                                                var k = y(I[2]);
                                                return new v({
                                                    tag: I[0],
                                                    explicit: I[1],
                                                    obj: k
                                                })
                                            }
                                            var O = {};
                                            if (void 0 !== I.explicit && (O.explicit = I.explicit), void 0 !== I.tag && (O.tag = I.tag), void 0 === I.obj) throw "obj shall be specified for 'tag'.";
                                            return O.obj = y(I.obj),
                                                new v(O)
                                        }
                                    },
                                    this.jsonToASN1HEX = function (t) {
                                        return this.newObject(t).getEncodedHex()
                                    }
                            },
                            ft.asn1.ASN1Util.oidHexToInt = function (t) {
                                    for (var e = "",
                                            n = parseInt(t.substr(0, 2), 16), r = (e = Math.floor(n / 40) + "." + n % 40, ""), i = 2; i < t.length; i += 2) {
                                        var o = ("00000000" + parseInt(t.substr(i, 2), 16).toString(2)).slice(-8);
                                        r += o.substr(1, 7),
                                            "0" == o.substr(0, 1) && (e = e + "." + new P(r, 2).toString(10), r = "")
                                    }
                                    return e
                                },
                                ft.asn1.ASN1Util.oidIntToHex = function (t) {
                                    function e(t) {
                                        var e = t.toString(16);
                                        return 1 == e.length && (e = "0" + e),
                                            e
                                    }

                                    function n(t) {
                                        var n = "",
                                            r = new P(t, 10).toString(2),
                                            i = 7 - r.length % 7;
                                        7 == i && (i = 0);
                                        for (var o = "",
                                                a = 0; a < i; a++) o += "0";
                                        for (r = o + r, a = 0; a < r.length - 1; a += 7) {
                                            var s = r.substr(a, 7);
                                            a != r.length - 7 && (s = "1" + s),
                                                n += e(parseInt(s, 2))
                                        }
                                        return n
                                    }
                                    if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
                                    var r = "",
                                        i = t.split(".");
                                    r += e(40 * parseInt(i[0]) + parseInt(i[1])),
                                        i.splice(0, 2);
                                    for (var o = 0; o < i.length; o++) r += n(i[o]);
                                    return r
                                },
                                ft.asn1.ASN1Object = function () {
                                    this.getLengthHexFromValue = function () {
                                            if (void 0 === this.hV || null == this.hV) throw "this.hV is null or undefined.";
                                            if (this.hV.length % 2 == 1) throw "value hex must be even length: n=" + "".length + ",v=" + this.hV;
                                            var t = this.hV.length / 2,
                                                e = t.toString(16);
                                            if (e.length % 2 == 1 && (e = "0" + e), t < 128) return e;
                                            var n = e.length / 2;
                                            if (15 < n) throw "ASN.1 length too long to represent by 8x: n = " + t.toString(16);
                                            return (128 + n).toString(16) + e
                                        },
                                        this.getEncodedHex = function () {
                                            return null != this.hTLV && !this.isModified || (this.hV = this.getFreshValueHex(), this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, this.isModified = !1),
                                                this.hTLV
                                        },
                                        this.getValueHex = function () {
                                            return this.getEncodedHex(),
                                                this.hV
                                        },
                                        this.getFreshValueHex = function () {
                                            return ""
                                        }
                                },
                                ft.asn1.DERAbstractString = function (t) {
                                    ft.asn1.DERAbstractString.superclass.constructor.call(this),
                                        this.getString = function () {
                                            return this.s
                                        },
                                        this.setString = function (t) {
                                            this.hTLV = null,
                                                this.isModified = !0,
                                                this.s = t,
                                                this.hV = stohex(this.s)
                                        },
                                        this.setStringHex = function (t) {
                                            this.hTLV = null,
                                                this.isModified = !0,
                                                this.s = null,
                                                this.hV = t
                                        },
                                        this.getFreshValueHex = function () {
                                            return this.hV
                                        },
                                        void 0 !== t && ("string" == typeof t ? this.setString(t) : void 0 !== t.str ? this.setString(t.str) : void 0 !== t.hex && this.setStringHex(t.hex))
                                },
                                lt.lang.extend(ft.asn1.DERAbstractString, ft.asn1.ASN1Object),
                                ft.asn1.DERAbstractTime = function (t) {
                                    ft.asn1.DERAbstractTime.superclass.constructor.call(this),
                                        this.localDateToUTC = function (t) {
                                            return utc = t.getTime() + 6e4 * t.getTimezoneOffset(),
                                                new Date(utc)
                                        },
                                        this.formatDate = function (t, e, n) {
                                            var r = this.zeroPadding,
                                                i = this.localDateToUTC(t),
                                                o = String(i.getFullYear());
                                            "utc" == e && (o = o.substr(2, 2));
                                            var a = o + r(String(i.getMonth() + 1), 2) + r(String(i.getDate()), 2) + r(String(i.getHours()), 2) + r(String(i.getMinutes()), 2) + r(String(i.getSeconds()), 2);
                                            if (!0 === n) {
                                                var s = i.getMilliseconds();
                                                if (0 != s) {
                                                    var c = r(String(s), 3);
                                                    a = a + "." + (c = c.replace(/[0]+$/, ""))
                                                }
                                            }
                                            return a + "Z"
                                        },
                                        this.zeroPadding = function (t, e) {
                                            return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t
                                        },
                                        this.getString = function () {
                                            return this.s
                                        },
                                        this.setString = function (t) {
                                            this.hTLV = null,
                                                this.isModified = !0,
                                                this.s = t,
                                                this.hV = stohex(t)
                                        },
                                        this.setByDateValue = function (t, e, n, r, i, o) {
                                            var a = new Date(Date.UTC(t, e - 1, n, r, i, o, 0));
                                            this.setByDate(a)
                                        },
                                        this.getFreshValueHex = function () {
                                            return this.hV
                                        }
                                },
                                lt.lang.extend(ft.asn1.DERAbstractTime, ft.asn1.ASN1Object),
                                ft.asn1.DERAbstractStructured = function (t) {
                                    ft.asn1.DERAbstractString.superclass.constructor.call(this),
                                        this.setByASN1ObjectArray = function (t) {
                                            this.hTLV = null,
                                                this.isModified = !0,
                                                this.asn1Array = t
                                        },
                                        this.appendASN1Object = function (t) {
                                            this.hTLV = null,
                                                this.isModified = !0,
                                                this.asn1Array.push(t)
                                        },
                                        this.asn1Array = new Array,
                                        void 0 !== t && void 0 !== t.array && (this.asn1Array = t.array)
                                },
                                lt.lang.extend(ft.asn1.DERAbstractStructured, ft.asn1.ASN1Object),
                                ft.asn1.DERBoolean = function () {
                                    ft.asn1.DERBoolean.superclass.constructor.call(this),
                                        this.hT = "01",
                                        this.hTLV = "0101ff"
                                },
                                lt.lang.extend(ft.asn1.DERBoolean, ft.asn1.ASN1Object),
                                ft.asn1.DERInteger = function (t) {
                                    ft.asn1.DERInteger.superclass.constructor.call(this),
                                        this.hT = "02",
                                        this.setByBigInteger = function (t) {
                                            this.hTLV = null,
                                                this.isModified = !0,
                                                this.hV = ft.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
                                        },
                                        this.setByInteger = function (t) {
                                            var e = new P(String(t), 10);
                                            this.setByBigInteger(e)
                                        },
                                        this.setValueHex = function (t) {
                                            this.hV = t
                                        },
                                        this.getFreshValueHex = function () {
                                            return this.hV
                                        },
                                        void 0 !== t && (void 0 !== t.bigint ? this.setByBigInteger(t.bigint) : void 0 !== t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : void 0 !== t.hex && this.setValueHex(t.hex))
                                },
                                lt.lang.extend(ft.asn1.DERInteger, ft.asn1.ASN1Object),
                                ft.asn1.DERBitString = function (t) {
                                    if (void 0 !== t && void 0 !== t.obj) {
                                        var e = ft.asn1.ASN1Util.newObject(t.obj);
                                        t.hex = "00" + e.getEncodedHex()
                                    }
                                    ft.asn1.DERBitString.superclass.constructor.call(this),
                                        this.hT = "03",
                                        this.setHexValueIncludingUnusedBits = function (t) {
                                            this.hTLV = null,
                                                this.isModified = !0,
                                                this.hV = t
                                        },
                                        this.setUnusedBitsAndHexValue = function (t, e) {
                                            if (t < 0 || 7 < t) throw "unused bits shall be from 0 to 7: u = " + t;
                                            var n = "0" + t;
                                            this.hTLV = null,
                                                this.isModified = !0,
                                                this.hV = n + e
                                        },
                                        this.setByBinaryString = function (t) {
                                            var e = 8 - (t = t.replace(/0+$/, "")).length % 8;
                                            8 == e && (e = 0);
                                            for (var n = 0; n <= e; n++) t += "0";
                                            var r = "";
                                            for (n = 0; n < t.length - 1; n += 8) {
                                                var i = t.substr(n, 8),
                                                    o = parseInt(i, 2).toString(16);
                                                1 == o.length && (o = "0" + o),
                                                    r += o
                                            }
                                            this.hTLV = null,
                                                this.isModified = !0,
                                                this.hV = "0" + e + r
                                        },
                                        this.setByBooleanArray = function (t) {
                                            for (var e = "",
                                                    n = 0; n < t.length; n++) 1 == t[n] ? e += "1" : e += "0";
                                            this.setByBinaryString(e)
                                        },
                                        this.newFalseArray = function (t) {
                                            for (var e = new Array(t), n = 0; n < t; n++) e[n] = !1;
                                            return e
                                        },
                                        this.getFreshValueHex = function () {
                                            return this.hV
                                        },
                                        void 0 !== t && ("string" == typeof t && t.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(t) : void 0 !== t.hex ? this.setHexValueIncludingUnusedBits(t.hex) : void 0 !== t.bin ? this.setByBinaryString(t.bin) : void 0 !== t.array && this.setByBooleanArray(t.array))
                                },
                                lt.lang.extend(ft.asn1.DERBitString, ft.asn1.ASN1Object),
                                ft.asn1.DEROctetString = function (t) {
                                    if (void 0 !== t && void 0 !== t.obj) {
                                        var e = ft.asn1.ASN1Util.newObject(t.obj);
                                        t.hex = e.getEncodedHex()
                                    }
                                    ft.asn1.DEROctetString.superclass.constructor.call(this, t),
                                        this.hT = "04"
                                },
                                lt.lang.extend(ft.asn1.DEROctetString, ft.asn1.DERAbstractString),
                                ft.asn1.DERNull = function () {
                                    ft.asn1.DERNull.superclass.constructor.call(this),
                                        this.hT = "05",
                                        this.hTLV = "0500"
                                },
                                lt.lang.extend(ft.asn1.DERNull, ft.asn1.ASN1Object),
                                ft.asn1.DERObjectIdentifier = function (t) {
                                    function e(t) {
                                        var e = t.toString(16);
                                        return 1 == e.length && (e = "0" + e),
                                            e
                                    }

                                    function n(t) {
                                        var n = "",
                                            r = new P(t, 10).toString(2),
                                            i = 7 - r.length % 7;
                                        7 == i && (i = 0);
                                        for (var o = "",
                                                a = 0; a < i; a++) o += "0";
                                        for (r = o + r, a = 0; a < r.length - 1; a += 7) {
                                            var s = r.substr(a, 7);
                                            a != r.length - 7 && (s = "1" + s),
                                                n += e(parseInt(s, 2))
                                        }
                                        return n
                                    }
                                    ft.asn1.DERObjectIdentifier.superclass.constructor.call(this),
                                        this.hT = "06",
                                        this.setValueHex = function (t) {
                                            this.hTLV = null,
                                                this.isModified = !0,
                                                this.s = null,
                                                this.hV = t
                                        },
                                        this.setValueOidString = function (t) {
                                            if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
                                            var r = "",
                                                i = t.split(".");
                                            r += e(40 * parseInt(i[0]) + parseInt(i[1])),
                                                i.splice(0, 2);
                                            for (var o = 0; o < i.length; o++) r += n(i[o]);
                                            this.hTLV = null,
                                                this.isModified = !0,
                                                this.s = null,
                                                this.hV = r
                                        },
                                        this.setValueName = function (t) {
                                            var e = ft.asn1.x509.OID.name2oid(t);
                                            if ("" === e) throw "DERObjectIdentifier oidName undefined: " + t;
                                            this.setValueOidString(e)
                                        },
                                        this.getFreshValueHex = function () {
                                            return this.hV
                                        },
                                        void 0 !== t && ("string" == typeof t ? t.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(t) : this.setValueName(t) : void 0 !== t.oid ? this.setValueOidString(t.oid) : void 0 !== t.hex ? this.setValueHex(t.hex) : void 0 !== t.name && this.setValueName(t.name))
                                },
                                lt.lang.extend(ft.asn1.DERObjectIdentifier, ft.asn1.ASN1Object),
                                ft.asn1.DEREnumerated = function (t) {
                                    ft.asn1.DEREnumerated.superclass.constructor.call(this),
                                        this.hT = "0a",
                                        this.setByBigInteger = function (t) {
                                            this.hTLV = null,
                                                this.isModified = !0,
                                                this.hV = ft.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
                                        },
                                        this.setByInteger = function (t) {
                                            var e = new P(String(t), 10);
                                            this.setByBigInteger(e)
                                        },
                                        this.setValueHex = function (t) {
                                            this.hV = t
                                        },
                                        this.getFreshValueHex = function () {
                                            return this.hV
                                        },
                                        void 0 !== t && (void 0 !== t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : void 0 !== t.hex && this.setValueHex(t.hex))
                                },
                                lt.lang.extend(ft.asn1.DEREnumerated, ft.asn1.ASN1Object),
                                ft.asn1.DERUTF8String = function (t) {
                                    ft.asn1.DERUTF8String.superclass.constructor.call(this, t),
                                        this.hT = "0c"
                                },
                                lt.lang.extend(ft.asn1.DERUTF8String, ft.asn1.DERAbstractString),
                                ft.asn1.DERNumericString = function (t) {
                                    ft.asn1.DERNumericString.superclass.constructor.call(this, t),
                                        this.hT = "12"
                                },
                                lt.lang.extend(ft.asn1.DERNumericString, ft.asn1.DERAbstractString),
                                ft.asn1.DERPrintableString = function (t) {
                                    ft.asn1.DERPrintableString.superclass.constructor.call(this, t),
                                        this.hT = "13"
                                },
                                lt.lang.extend(ft.asn1.DERPrintableString, ft.asn1.DERAbstractString),
                                ft.asn1.DERTeletexString = function (t) {
                                    ft.asn1.DERTeletexString.superclass.constructor.call(this, t),
                                        this.hT = "14"
                                },
                                lt.lang.extend(ft.asn1.DERTeletexString, ft.asn1.DERAbstractString),
                                ft.asn1.DERIA5String = function (t) {
                                    ft.asn1.DERIA5String.superclass.constructor.call(this, t),
                                        this.hT = "16"
                                },
                                lt.lang.extend(ft.asn1.DERIA5String, ft.asn1.DERAbstractString),
                                ft.asn1.DERUTCTime = function (t) {
                                    ft.asn1.DERUTCTime.superclass.constructor.call(this, t),
                                        this.hT = "17",
                                        this.setByDate = function (t) {
                                            this.hTLV = null,
                                                this.isModified = !0,
                                                this.date = t,
                                                this.s = this.formatDate(this.date, "utc"),
                                                this.hV = stohex(this.s)
                                        },
                                        this.getFreshValueHex = function () {
                                            return void 0 === this.date && void 0 === this.s && (this.date = new Date, this.s = this.formatDate(this.date, "utc"), this.hV = stohex(this.s)),
                                                this.hV
                                        },
                                        void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{12}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date))
                                },
                                lt.lang.extend(ft.asn1.DERUTCTime, ft.asn1.DERAbstractTime),
                                ft.asn1.DERGeneralizedTime = function (t) {
                                    ft.asn1.DERGeneralizedTime.superclass.constructor.call(this, t),
                                        this.hT = "18",
                                        this.withMillis = !1,
                                        this.setByDate = function (t) {
                                            this.hTLV = null,
                                                this.isModified = !0,
                                                this.date = t,
                                                this.s = this.formatDate(this.date, "gen", this.withMillis),
                                                this.hV = stohex(this.s)
                                        },
                                        this.getFreshValueHex = function () {
                                            return void 0 === this.date && void 0 === this.s && (this.date = new Date, this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = stohex(this.s)),
                                                this.hV
                                        },
                                        void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{14}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date), !0 === t.millis && (this.withMillis = !0))
                                },
                                lt.lang.extend(ft.asn1.DERGeneralizedTime, ft.asn1.DERAbstractTime),
                                ft.asn1.DERSequence = function (t) {
                                    ft.asn1.DERSequence.superclass.constructor.call(this, t),
                                        this.hT = "30",
                                        this.getFreshValueHex = function () {
                                            for (var t = "",
                                                    e = 0; e < this.asn1Array.length; e++) t += this.asn1Array[e].getEncodedHex();
                                            return this.hV = t,
                                                this.hV
                                        }
                                },
                                lt.lang.extend(ft.asn1.DERSequence, ft.asn1.DERAbstractStructured),
                                ft.asn1.DERSet = function (t) {
                                    ft.asn1.DERSet.superclass.constructor.call(this, t),
                                        this.hT = "31",
                                        this.sortFlag = !0,
                                        this.getFreshValueHex = function () {
                                            for (var t = new Array,
                                                    e = 0; e < this.asn1Array.length; e++) {
                                                var n = this.asn1Array[e];
                                                t.push(n.getEncodedHex())
                                            }
                                            return 1 == this.sortFlag && t.sort(),
                                                this.hV = t.join(""),
                                                this.hV
                                        },
                                        void 0 !== t && void 0 !== t.sortflag && 0 == t.sortflag && (this.sortFlag = !1)
                                },
                                lt.lang.extend(ft.asn1.DERSet, ft.asn1.DERAbstractStructured),
                                ft.asn1.DERTaggedObject = function (t) {
                                    ft.asn1.DERTaggedObject.superclass.constructor.call(this),
                                        this.hT = "a0",
                                        this.hV = "",
                                        this.isExplicit = !0,
                                        this.asn1Object = null,
                                        this.setASN1Object = function (t, e, n) {
                                            this.hT = e,
                                                this.isExplicit = t,
                                                this.asn1Object = n,
                                                this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), this.hTLV = null, this.isModified = !0) : (this.hV = null, this.hTLV = n.getEncodedHex(), this.hTLV = this.hTLV.replace(/^../, e), this.isModified = !1)
                                        },
                                        this.getFreshValueHex = function () {
                                            return this.hV
                                        },
                                        void 0 !== t && (void 0 !== t.tag && (this.hT = t.tag), void 0 !== t.explicit && (this.isExplicit = t.explicit), void 0 !== t.obj && (this.asn1Object = t.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)))
                                },
                                lt.lang.extend(ft.asn1.DERTaggedObject, ft.asn1.ASN1Object);
                            var pt, mt, gt, ht = (m(pt = vt, mt = gt = ct), pt.prototype = null === mt ? Object.create(mt) : (At.prototype = mt.prototype, new At), vt.prototype.parseKey = function (t) {
                                    try {
                                        var e = 0,
                                            n = 0,
                                            r = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(t) ?
                                            function (t) {
                                                var e;
                                                if (void 0 === f) {
                                                    var n = "0123456789ABCDEF",
                                                        r = " \f\n\r\t \u2028\u2029";
                                                    for (f = {},
                                                        e = 0; e < 16; ++e) f[n.charAt(e)] = e;
                                                    for (n = n.toLowerCase(), e = 10; e < 16; ++e) f[n.charAt(e)] = e;
                                                    for (e = 0; e < r.length; ++e) f[r.charAt(e)] = -1
                                                }
                                                var i = [],
                                                    o = 0,
                                                    a = 0;
                                                for (e = 0; e < t.length; ++e) {
                                                    var s = t.charAt(e);
                                                    if ("=" == s) break;
                                                    if (-1 != (s = f[s])) {
                                                        if (void 0 === s) throw new Error("Illegal character at offset " + e);
                                                        o |= s,
                                                            2 <= ++a ? (i[i.length] = o, a = o = 0) : o <<= 4
                                                    }
                                                }
                                                if (a) throw new Error("Hex encoding incomplete: 4 bits missing");
                                                return i
                                            }(t) : g.unarmor(t),
                                            i = S.decode(r);
                                        if (3 === i.sub.length && (i = i.sub[2].sub[0]), 9 === i.sub.length) {
                                            e = i.sub[1].getHexStringValue(),
                                                this.n = G(e, 16),
                                                n = i.sub[2].getHexStringValue(),
                                                this.e = parseInt(n, 16);
                                            var o = i.sub[3].getHexStringValue();
                                            this.d = G(o, 16);
                                            var a = i.sub[4].getHexStringValue();
                                            this.p = G(a, 16);
                                            var s = i.sub[5].getHexStringValue();
                                            this.q = G(s, 16);
                                            var c = i.sub[6].getHexStringValue();
                                            this.dmp1 = G(c, 16);
                                            var d = i.sub[7].getHexStringValue();
                                            this.dmq1 = G(d, 16);
                                            var u = i.sub[8].getHexStringValue();
                                            this.coeff = G(u, 16)
                                        } else {
                                            if (2 !== i.sub.length) return !1;
                                            var l = i.sub[1].sub[0];
                                            e = l.sub[0].getHexStringValue(),
                                                this.n = G(e, 16),
                                                n = l.sub[1].getHexStringValue(),
                                                this.e = parseInt(n, 16)
                                        }
                                        return !0
                                    } catch (t) {
                                        return !1
                                    }
                                },
                                vt.prototype.getPrivateBaseKey = function () {
                                    var t = {
                                        array: [new ft.asn1.DERInteger({
                                            int: 0
                                        }), new ft.asn1.DERInteger({
                                            bigint: this.n
                                        }), new ft.asn1.DERInteger({
                                            int: this.e
                                        }), new ft.asn1.DERInteger({
                                            bigint: this.d
                                        }), new ft.asn1.DERInteger({
                                            bigint: this.p
                                        }), new ft.asn1.DERInteger({
                                            bigint: this.q
                                        }), new ft.asn1.DERInteger({
                                            bigint: this.dmp1
                                        }), new ft.asn1.DERInteger({
                                            bigint: this.dmq1
                                        }), new ft.asn1.DERInteger({
                                            bigint: this.coeff
                                        })]
                                    };
                                    return new ft.asn1.DERSequence(t).getEncodedHex()
                                },
                                vt.prototype.getPrivateBaseKeyB64 = function () {
                                    return u(this.getPrivateBaseKey())
                                },
                                vt.prototype.getPublicBaseKey = function () {
                                    var t = new ft.asn1.DERSequence({
                                            array: [new ft.asn1.DERObjectIdentifier({
                                                oid: "1.2.840.113549.1.1.1"
                                            }), new ft.asn1.DERNull]
                                        }),
                                        e = new ft.asn1.DERSequence({
                                            array: [new ft.asn1.DERInteger({
                                                bigint: this.n
                                            }), new ft.asn1.DERInteger({
                                                int: this.e
                                            })]
                                        }),
                                        n = new ft.asn1.DERBitString({
                                            hex: "00" + e.getEncodedHex()
                                        });
                                    return new ft.asn1.DERSequence({
                                        array: [t, n]
                                    }).getEncodedHex()
                                },
                                vt.prototype.getPublicBaseKeyB64 = function () {
                                    return u(this.getPublicBaseKey())
                                },
                                vt.wordwrap = function (t, e) {
                                    if (!t) return t;
                                    var n = "(.{1," + (e = e || 64) + "})( +|$\n?)|(.{1," + e + "})";
                                    return t.match(RegExp(n, "g")).join("\n")
                                },
                                vt.prototype.getPrivateKey = function () {
                                    var t = "-----BEGIN RSA PRIVATE KEY-----\n";
                                    return (t += vt.wordwrap(this.getPrivateBaseKeyB64()) + "\n") + "-----END RSA PRIVATE KEY-----"
                                },
                                vt.prototype.getPublicKey = function () {
                                    var t = "-----BEGIN PUBLIC KEY-----\n";
                                    return (t += vt.wordwrap(this.getPublicBaseKeyB64()) + "\n") + "-----END PUBLIC KEY-----"
                                },
                                vt.hasPublicKeyProperty = function (t) {
                                    return (t = t || {}).hasOwnProperty("n") && t.hasOwnProperty("e")
                                },
                                vt.hasPrivateKeyProperty = function (t) {
                                    return (t = t || {}).hasOwnProperty("n") && t.hasOwnProperty("e") && t.hasOwnProperty("d") && t.hasOwnProperty("p") && t.hasOwnProperty("q") && t.hasOwnProperty("dmp1") && t.hasOwnProperty("dmq1") && t.hasOwnProperty("coeff")
                                },
                                vt.prototype.parsePropertiesFrom = function (t) {
                                    this.n = t.n,
                                        this.e = t.e,
                                        t.hasOwnProperty("d") && (this.d = t.d, this.p = t.p, this.q = t.q, this.dmp1 = t.dmp1, this.dmq1 = t.dmq1, this.coeff = t.coeff)
                                },
                                vt);

                            function At() {
                                this.constructor = pt
                            }

                            function vt(t) {
                                var e = gt.call(this) || this;
                                return t && ("string" == typeof t ? e.parseKey(t) : (vt.hasPrivateKeyProperty(t) || vt.hasPublicKeyProperty(t)) && e.parsePropertiesFrom(t)),
                                    e
                            }
                            var yt = (bt.prototype.setKey = function (t) {
                                    this.log && this.key && console.warn("A key was already set, overriding existing."),
                                        this.key = new ht(t)
                                },
                                bt.prototype.setPrivateKey = function (t) {
                                    this.setKey(t)
                                },
                                bt.prototype.setPublicKey = function (t) {
                                    this.setKey(t)
                                },
                                bt.prototype.decrypt = function (t) {
                                    try {
                                        return this.getKey().decrypt(l(t))
                                    } catch (t) {
                                        return !1
                                    }
                                },
                                bt.prototype.encrypt = function (t) {
                                    try {
                                        return u(this.getKey().encrypt(t))
                                    } catch (t) {
                                        return !1
                                    }
                                },
                                bt.prototype.sign = function (t, e, n) {
                                    try {
                                        return u(this.getKey().sign(t, e, n))
                                    } catch (t) {
                                        return !1
                                    }
                                },
                                bt.prototype.verify = function (t, e, n) {
                                    try {
                                        return this.getKey().verify(t, l(e), n)
                                    } catch (t) {
                                        return !1
                                    }
                                },
                                bt.prototype.getKey = function (t) {
                                    if (!this.key) {
                                        if (this.key = new ht, t && "[object Function]" === {}.toString.call(t)) return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, t);
                                        this.key.generate(this.default_key_size, this.default_public_exponent)
                                    }
                                    return this.key
                                },
                                bt.prototype.getPrivateKey = function () {
                                    return this.getKey().getPrivateKey()
                                },
                                bt.prototype.getPrivateKeyB64 = function () {
                                    return this.getKey().getPrivateBaseKeyB64()
                                },
                                bt.prototype.getPublicKey = function () {
                                    return this.getKey().getPublicKey()
                                },
                                bt.prototype.getPublicKeyB64 = function () {
                                    return this.getKey().getPublicBaseKeyB64()
                                },
                                bt.version = "3.0.0-rc.1", bt);

                            function bt(t) {
                                t = t || {},
                                    this.default_key_size = parseInt(t.default_key_size, 10) || 1024,
                                    this.default_public_exponent = t.default_public_exponent || "010001",
                                    this.log = t.log || !1,
                                    this.key = null
                            }
                            window.JSEncrypt = yt,
                                t.JSEncrypt = yt,
                                t.
                            default = yt,
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                })
                        }(e)
                    },
                    262: function (t, e, n) {
                        var r;
                        r = function (t) {
                                return function (e) {
                                        var n = t,
                                            r = n.lib,
                                            i = r.WordArray,
                                            o = r.Hasher,
                                            a = n.algo,
                                            s = [],
                                            c = [];
                                        !
                                        function () {
                                            function t(t) {
                                                for (var n = e.sqrt(t), r = 2; r <= n; r++)
                                                    if (!(t % r)) return !1;
                                                return !0
                                            }

                                            function n(t) {
                                                return 4294967296 * (t - (0 | t)) | 0
                                            }
                                            for (var r = 2,
                                                    i = 0; i < 64;) t(r) && (i < 8 && (s[i] = n(e.pow(r, .5))), c[i] = n(e.pow(r, 1 / 3)), i++),
                                                r++
                                        }();
                                        var d = [],
                                            u = a.SHA256 = o.extend({
                                                _doReset: function () {
                                                    this._hash = new i.init(s.slice(0))
                                                },
                                                _doProcessBlock: function (t, e) {
                                                    for (var n = this._hash.words,
                                                            r = n[0], i = n[1], o = n[2], a = n[3], s = n[4], u = n[5], l = n[6], f = n[7], p = 0; p < 64; p++) {
                                                        if (p < 16) d[p] = 0 | t[e + p];
                                                        else {
                                                            var m = d[p - 15],
                                                                g = (m << 25 | m >>> 7) ^ (m << 14 | m >>> 18) ^ m >>> 3,
                                                                h = d[p - 2],
                                                                A = (h << 15 | h >>> 17) ^ (h << 13 | h >>> 19) ^ h >>> 10;
                                                            d[p] = g + d[p - 7] + A + d[p - 16]
                                                        }
                                                        var v = r & i ^ r & o ^ i & o,
                                                            y = (r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22),
                                                            b = f + ((s << 26 | s >>> 6) ^ (s << 21 | s >>> 11) ^ (s << 7 | s >>> 25)) + (s & u ^ ~s & l) + c[p] + d[p];
                                                        f = l,
                                                            l = u,
                                                            u = s,
                                                            s = a + b | 0,
                                                            a = o,
                                                            o = i,
                                                            i = r,
                                                            r = b + (y + v) | 0
                                                    }
                                                    n[0] = n[0] + r | 0,
                                                        n[1] = n[1] + i | 0,
                                                        n[2] = n[2] + o | 0,
                                                        n[3] = n[3] + a | 0,
                                                        n[4] = n[4] + s | 0,
                                                        n[5] = n[5] + u | 0,
                                                        n[6] = n[6] + l | 0,
                                                        n[7] = n[7] + f | 0
                                                },
                                                _doFinalize: function () {
                                                    var t = this._data,
                                                        n = t.words,
                                                        r = 8 * this._nDataBytes,
                                                        i = 8 * t.sigBytes;
                                                    return n[i >>> 5] |= 128 << 24 - i % 32,
                                                        n[14 + (64 + i >>> 9 << 4)] = e.floor(r / 4294967296),
                                                        n[15 + (64 + i >>> 9 << 4)] = r,
                                                        t.sigBytes = 4 * n.length,
                                                        this._process(),
                                                        this._hash
                                                },
                                                clone: function () {
                                                    var t = o.clone.call(this);
                                                    return t._hash = this._hash.clone(),
                                                        t
                                                }
                                            });
                                        n.SHA256 = o._createHelper(u),
                                            n.HmacSHA256 = o._createHmacHelper(u)
                                    }(Math),
                                    t.SHA256
                            },
                            t.exports = r(n(263))
                    },
                    263: function (t, e, n) {
                        var r;
                        r = function () {
                                var t, e, n, r, i, o, a, s, c, d, u, l, f = f || (t = Math, e = Object.create ||
                                    function (t) {
                                        var e;
                                        return p.prototype = t,
                                            e = new p,
                                            p.prototype = null,
                                            e
                                    },
                                    r = (n = {}).lib = {},
                                    i = r.Base = {
                                        extend: function (t) {
                                            var n = e(this);
                                            return t && n.mixIn(t),
                                                n.hasOwnProperty("init") && this.init !== n.init || (n.init = function () {
                                                    n.$super.init.apply(this, arguments)
                                                }),
                                                (n.init.prototype = n).$super = this,
                                                n
                                        },
                                        create: function () {
                                            var t = this.extend();
                                            return t.init.apply(t, arguments),
                                                t
                                        },
                                        init: function () {},
                                        mixIn: function (t) {
                                            for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
                                            t.hasOwnProperty("toString") && (this.toString = t.toString)
                                        },
                                        clone: function () {
                                            return this.init.prototype.extend(this)
                                        }
                                    },
                                    o = r.WordArray = i.extend({
                                        init: function (t, e) {
                                            t = this.words = t || [],
                                                this.sigBytes = null != e ? e : 4 * t.length
                                        },
                                        toString: function (t) {
                                            return (t || s).stringify(this)
                                        },
                                        concat: function (t) {
                                            var e = this.words,
                                                n = t.words,
                                                r = this.sigBytes,
                                                i = t.sigBytes;
                                            if (this.clamp(), r % 4)
                                                for (var o = 0; o < i; o++) {
                                                    var a = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                                                    e[r + o >>> 2] |= a << 24 - (r + o) % 4 * 8
                                                } else
                                                    for (o = 0; o < i; o += 4) e[r + o >>> 2] = n[o >>> 2];
                                            return this.sigBytes += i,
                                                this
                                        },
                                        clamp: function () {
                                            var e = this.words,
                                                n = this.sigBytes;
                                            e[n >>> 2] &= 4294967295 << 32 - n % 4 * 8,
                                                e.length = t.ceil(n / 4)
                                        },
                                        clone: function () {
                                            var t = i.clone.call(this);
                                            return t.words = this.words.slice(0),
                                                t
                                        },
                                        random: function (e) {
                                            function n(e) {
                                                e = e;
                                                var n = 987654321,
                                                    r = 4294967295;
                                                return function () {
                                                    var i = ((n = 36969 * (65535 & n) + (n >> 16) & r) << 16) + (e = 18e3 * (65535 & e) + (e >> 16) & r) & r;
                                                    return i /= 4294967296,
                                                        (i += .5) * (.5 < t.random() ? 1 : -1)
                                                }
                                            }
                                            for (var r, i = [], a = 0; a < e; a += 4) {
                                                var s = n(4294967296 * (r || t.random()));
                                                r = 987654071 * s(),
                                                    i.push(4294967296 * s() | 0)
                                            }
                                            return new o.init(i, e)
                                        }
                                    }), a = n.enc = {},
                                    s = a.Hex = {
                                        stringify: function (t) {
                                            for (var e = t.words,
                                                    n = t.sigBytes,
                                                    r = [], i = 0; i < n; i++) {
                                                var o = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                                r.push((o >>> 4).toString(16)),
                                                    r.push((15 & o).toString(16))
                                            }
                                            return r.join("")
                                        },
                                        parse: function (t) {
                                            for (var e = t.length,
                                                    n = [], r = 0; r < e; r += 2) n[r >>> 3] |= parseInt(t.substr(r, 2), 16) << 24 - r % 8 * 4;
                                            return new o.init(n, e / 2)
                                        }
                                    },
                                    c = a.Latin1 = {
                                        stringify: function (t) {
                                            for (var e = t.words,
                                                    n = t.sigBytes,
                                                    r = [], i = 0; i < n; i++) {
                                                var o = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                                r.push(String.fromCharCode(o))
                                            }
                                            return r.join("")
                                        },
                                        parse: function (t) {
                                            for (var e = t.length,
                                                    n = [], r = 0; r < e; r++) n[r >>> 2] |= (255 & t.charCodeAt(r)) << 24 - r % 4 * 8;
                                            return new o.init(n, e)
                                        }
                                    },
                                    d = a.Utf8 = {
                                        stringify: function (t) {
                                            try {
                                                return decodeURIComponent(escape(c.stringify(t)))
                                            } catch (t) {
                                                throw new Error("Malformed UTF-8 data")
                                            }
                                        },
                                        parse: function (t) {
                                            return c.parse(unescape(encodeURIComponent(t)))
                                        }
                                    },
                                    u = r.BufferedBlockAlgorithm = i.extend({
                                        reset: function () {
                                            this._data = new o.init,
                                                this._nDataBytes = 0
                                        },
                                        _append: function (t) {
                                            "string" == typeof t && (t = d.parse(t)),
                                                this._data.concat(t),
                                                this._nDataBytes += t.sigBytes
                                        },
                                        _process: function (e) {
                                            var n = this._data,
                                                r = n.words,
                                                i = n.sigBytes,
                                                a = this.blockSize,
                                                s = i / (4 * a),
                                                c = (s = e ? t.ceil(s) : t.max((0 | s) - this._minBufferSize, 0)) * a,
                                                d = t.min(4 * c, i);
                                            if (c) {
                                                for (var u = 0; u < c; u += a) this._doProcessBlock(r, u);
                                                var l = r.splice(0, c);
                                                n.sigBytes -= d
                                            }
                                            return new o.init(l, d)
                                        },
                                        clone: function () {
                                            var t = i.clone.call(this);
                                            return t._data = this._data.clone(),
                                                t
                                        },
                                        _minBufferSize: 0
                                    }), r.Hasher = u.extend({
                                        cfg: i.extend(),
                                        init: function (t) {
                                            this.cfg = this.cfg.extend(t),
                                                this.reset()
                                        },
                                        reset: function () {
                                            u.reset.call(this),
                                                this._doReset()
                                        },
                                        update: function (t) {
                                            return this._append(t),
                                                this._process(),
                                                this
                                        },
                                        finalize: function (t) {
                                            return t && this._append(t),
                                                this._doFinalize()
                                        },
                                        blockSize: 16,
                                        _createHelper: function (t) {
                                            return function (e, n) {
                                                return new t.init(n).finalize(e)
                                            }
                                        },
                                        _createHmacHelper: function (t) {
                                            return function (e, n) {
                                                return new l.HMAC.init(t, n).finalize(e)
                                            }
                                        }
                                    }), l = n.algo = {},
                                    n);

                                function p() {}
                                return f
                            },
                            t.exports = r()
                    }
                },
                [259]),
            pbjsChunk([192], {
                    266: function (t, e, n) {
                        t.exports = n(267)
                    },
                    267: function (t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                                value: !0
                            }),
                            n.d(e, "currencySupportEnabled",
                                function () {
                                    return v
                                }),
                            n.d(e, "currencyRates",
                                function () {
                                    return y
                                }),
                            e.setConfig = w,
                            e.addBidResponseHook = _;
                        var r = n(23),
                            i = n(4),
                            o = (n.n(i), n(5)),
                            a = n(0),
                            s = n(3),
                            c = n(13);

                        function d(t) {
                            return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                                function (t) {
                                    return typeof t
                                } : function (t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                })(t)
                        }
                        var u, l = "https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json?date=$$TODAY$$",
                            f = 4,
                            p = [],
                            m = {},
                            g = !1,
                            h = !0,
                            A = "USD",
                            v = !1,
                            y = {},
                            b = {};

                        function w(t) {
                            var e = l;
                            if ("object" === d(t.rates) && (y.conversions = t.rates, h = !(g = !0)), "object" === d(t.defaultRates) && (u = t.defaultRates, y.conversions = u, g = !0), "string" == typeof t.adServerCurrency) {
                                a.logInfo("enabling currency support", arguments),
                                    A = t.adServerCurrency,
                                    t.conversionRateFile && (a.logInfo("currency using override conversionRateFile:", t.conversionRateFile), e = t.conversionRateFile);
                                var n = e.indexOf("$$TODAY$$");
                                if (-1 !== n) {
                                    var r = new Date,
                                        i = "".concat(r.getMonth() + 1),
                                        s = "".concat(r.getDate());
                                    i.length < 2 && (i = "0".concat(i)),
                                        s.length < 2 && (s = "0".concat(s));
                                    var f = "".concat(r.getFullYear()).concat(i).concat(s);
                                    e = "".concat(e.substring(0, n)).concat(f).concat(e.substring(n + 9, e.length))
                                }!
                                function (t) {
                                    m = {},
                                        v = !0,
                                        a.logInfo("Installing addBidResponse decorator for currency module", arguments),
                                        Object(c.a)("addBidResponse").before(_, 100),
                                        h && (h = !1, Object(o.a)(t, {
                                            success: function (t) {
                                                try {
                                                    y = JSON.parse(t),
                                                        a.logInfo("currencyRates set to " + JSON.stringify(y)),
                                                        g = !0,
                                                        T()
                                                } catch (e) {
                                                    E("Failed to parse currencyRates response: " + t)
                                                }
                                            },
                                            error: E
                                        }))
                                }(e)
                            } else a.logInfo("disabling currency support"),
                                function () {
                                    a.logInfo("Uninstalling addBidResponse decorator for currency module", arguments),
                                        Object(c.a)("addBidResponse").getHooks({
                                            hook: _
                                        }).remove(),
                                        A = "USD",
                                        m = {},
                                        g = v = !1,
                                        h = !0,
                                        y = {},
                                        b = {}
                                }();
                            "object" === d(t.bidderCurrencyDefault) && (b = t.bidderCurrencyDefault)
                        }

                        function E(t) {
                            u ? (a.logWarn(t), a.logWarn("Currency failed loading rates, falling back to currency.defaultRates")) : a.logError(t)
                        }

                        function _(t, e, n) {
                            if (!n) return t.call(this, e);
                            var o = n.bidderCode || n.bidder;
                            if (b[o]) {
                                var s = b[o];
                                n.currency && s !== n.currency ? a.logWarn("Currency default '".concat(o, ": ").concat(s, "' ignored. adapter specified '").concat(n.currency, "'")) : n.currency = s
                            }
                            if (n.currency || (a.logWarn('Currency not specified on bid.  Defaulted to "USD"'), n.currency = "USD"), n.getCpmInNewCurrency = function (t) {
                                    return (parseFloat(this.cpm) * S(this.currency, t)).toFixed(3)
                                },
                                n.originalCpm = n.cpm, n.originalCurrency = n.currency, n.currency === A) return t.call(this, e, n);
                            p.push(function (t, e, n) {
                                    return function () {
                                        var o = n[1];
                                        if (void 0 !== o && "currency" in o && "cpm" in o) {
                                            var s = o.currency;
                                            try {
                                                var c = S(s);
                                                1 !== c && (o.cpm = (parseFloat(o.cpm) * c).toFixed(4), o.currency = A)
                                            } catch (s) {
                                                a.logWarn("Returning NO_BID, getCurrencyConversion threw error: ", s),
                                                    n[1] = Object(r.a)(i.STATUS.NO_BID, {
                                                        bidder: o.bidderCode || o.bidder,
                                                        bidId: o.requestId
                                                    })
                                            }
                                        }
                                        return t.apply(e, n)
                                    }
                                }(t, this, [e, n])),
                                v && !g || T()
                        }

                        function T() {
                            for (; 0 < p.length;) p.shift()()
                        }

                        function S(t, e) {
                            var n, r = 1 < arguments.length && void 0 !== e ? e : A,
                                i = null,
                                o = "".concat(t, "->").concat(r);
                            if (o in m) i = m[o],
                                a.logMessage("Using conversionCache value " + i + " for " + o);
                            else if (!1 === v) {
                                if ("USD" !== t) throw new Error("Prebid currency support has not been enabled and fromCurrency is not USD");
                                i = 1
                            } else if (t === r) i = 1;
                            else if (t in y.conversions) {
                                if (!(r in (n = y.conversions[t]))) throw new Error("Specified adServerCurrency in config '" + r + "' not found in the currency rates file");
                                i = n[r],
                                    a.logInfo("getCurrencyConversion using direct " + t + " to " + r + " conversionRate " + i)
                            } else if (r in y.conversions) {
                                if (!(t in (n = y.conversions[r]))) throw new Error("Specified fromCurrency '" + t + "' not found in the currency rates file");
                                i = I(1 / n[t], f),
                                    a.logInfo("getCurrencyConversion using reciprocal " + t + " to " + r + " conversionRate " + i)
                            } else {
                                var s = Object.keys(y.conversions)[0];
                                if (!(t in y.conversions[s])) throw new Error("Specified fromCurrency '" + t + "' not found in the currency rates file");
                                var c = 1 / y.conversions[s][t];
                                if (!(r in y.conversions[s])) throw new Error("Specified adServerCurrency in config '" + r + "' not found in the currency rates file");
                                i = I(c * y.conversions[s][r], f),
                                    a.logInfo("getCurrencyConversion using intermediate " + t + " thru " + s + " to " + r + " conversionRate " + i)
                            }
                            return o in m || (a.logMessage("Adding conversionCache value " + i + " for " + o), m[o] = i),
                                i
                        }

                        function I(t, e) {
                            for (var n = 1,
                                    r = 0; r < e; r++) n += "0";
                            return Math.round(t * n) / n
                        }
                        s.b.getConfig("currency",
                            function (t) {
                                return w(t.currency)
                            })
                    }
                },
                [266]),
            pbjsChunk([189], {
                    272: function (t, e, n) {
                        t.exports = n(273)
                    },
                    273: function (t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                                value: !0
                            }),
                            n.d(e, "adpodUtils",
                                function () {
                                    return p
                                }),
                            e.buildDfpVideoUrl = m,
                            e.notifyTranslationModule = g,
                            e.buildAdpodVideoUrl = h;
                        var r = n(77),
                            i = n(64),
                            o = n(10),
                            a = n(0),
                            s = n(3),
                            c = n(13),
                            d = n(29);

                        function u(t, e, n) {
                            return e in t ? Object.defineProperty(t, e, {
                                    value: n,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : t[e] = n,
                                t
                        }

                        function l() {
                            return (l = Object.assign ||
                                function (t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var n = arguments[e];
                                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                                    }
                                    return t
                                }).apply(this, arguments)
                        }
                        var f = {
                                env: "vp",
                                gdfp_req: 1,
                                output: "xml_vast3",
                                unviewed_position_start: 1
                            },
                            p = {};

                        function m(t) {
                            if (t.params || t.url) {
                                var e = t.adUnit,
                                    n = t.bid || i.b.getWinningBids(e.code)[0],
                                    r = {};
                                if (t.url && (r = Object(o.c)(t.url, {
                                        noDecodeWholeURL: !0
                                    }), Object(a.isEmpty)(t.params))) return function (t, e, n) {
                                    var r = A(e, t, "search");
                                    r && (t.search.description_url = r);
                                    var i = v(e, n);
                                    return t.search.cust_params = t.search.cust_params ? t.search.cust_params + "%26" + i : i,
                                        Object(o.a)(t)
                                }(r, n, t);
                                var s = {
                                        correlator: Date.now(),
                                        sz: Object(a.parseSizesInput)(e.sizes).join("|"),
                                        url: encodeURIComponent(location.href)
                                    },
                                    c = v(n, t),
                                    d = l({},
                                        f, r.search, s, t.params, {
                                            cust_params: c
                                        }),
                                    u = A(n, t, "params");
                                return u && (d.description_url = u),
                                    Object(o.a)({
                                        protocol: "https",
                                        host: "pubads.g.doubleclick.net",
                                        pathname: "/gampad/ads",
                                        search: d
                                    })
                            }
                            Object(a.logError)("A params object or a url is required to use pbjs.adServers.dfp.buildVideoUrl")
                        }

                        function g(t) {
                            t.call(this, "dfp")
                        }

                        function h() {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                                e = t.code,
                                n = t.params,
                                r = t.callback;
                            if (n && r) {
                                var i, s, c, m = {
                                    correlator: Date.now(),
                                    sz: (i = e, s = d.a.getAdUnits().filter(function (t) {
                                        return t.code === i
                                    }), c = Object(a.deepAccess)(s[0], "mediaTypes.video.playerSize"), Object(a.parseSizesInput)(c).join("|")),
                                    url: encodeURIComponent(location.href)
                                };
                                p.getTargeting({
                                    codes: [e],
                                    callback: function (t, i) {
                                        var a;
                                        if (t) r(t, null);
                                        else {
                                            var s = (u(a = {},
                                                    p.TARGETING_KEY_PB_CAT_DUR, void 0), u(a, p.TARGETING_KEY_CACHE_ID, void 0), a),
                                                c = {};
                                            i[e] && (c = i[e].reduce(function (t, e) {
                                                    return Object.keys(e)[0] === p.TARGETING_KEY_PB_CAT_DUR ? t[p.TARGETING_KEY_PB_CAT_DUR] = void 0 !== t[p.TARGETING_KEY_PB_CAT_DUR] ? t[p.TARGETING_KEY_PB_CAT_DUR] + "," + e[p.TARGETING_KEY_PB_CAT_DUR] : e[p.TARGETING_KEY_PB_CAT_DUR] : Object.keys(e)[0] === p.TARGETING_KEY_CACHE_ID && (t[p.TARGETING_KEY_CACHE_ID] = e[p.TARGETING_KEY_CACHE_ID]),
                                                        t
                                                },
                                                s));
                                            var d = encodeURIComponent(Object(o.b)(c)),
                                                g = l({},
                                                    f, m, n, {
                                                        cust_params: d
                                                    }),
                                                h = Object(o.a)({
                                                    protocol: "https",
                                                    host: "pubads.g.doubleclick.net",
                                                    pathname: "/gampad/ads",
                                                    search: g
                                                });
                                            r(null, h)
                                        }
                                    }
                                })
                            } else Object(a.logError)("A params object and a callback is required to use pbjs.adServers.dfp.buildAdpodVideoUrl")
                        }

                        function A(t, e, n) {
                            if (!s.b.getConfig("cache.url"))
                                if (Object(a.deepAccess)(e, "".concat(n, ".description_url"))) Object(a.logError)("input cannnot contain description_url");
                                else {
                                    var r = t && t.vastUrl;
                                    if (r) return encodeURIComponent(r)
                                }
                        }

                        function v(t, e) {
                            var n = t && t.adserverTargeting || {},
                                r = {},
                                s = e && e.adUnit;
                            if (s) {
                                var c = i.b.getAllTargeting(s.code);
                                r = c ? c[s.code] : {}
                            }
                            var d = Object(a.deepAccess)(e, "params.cust_params"),
                                u = l({}, {
                                        hb_uuid: t && t.videoCacheKey
                                    }, {
                                        hb_cache_id: t && t.videoCacheKey
                                    },
                                    r, n, d);
                            return encodeURIComponent(Object(o.b)(u))
                        }
                        Object(c.a)("registerAdserver").before(g),
                            Object(r.a)("dfp", {
                                buildVideoUrl: m,
                                buildAdpodVideoUrl: h,
                                getAdpodTargeting: function (t) {
                                    return p.getTargeting(t)
                                }
                            }),
                            Object(c.e)("adpod", p)
                    }
                },
                [272]),
            pbjsChunk([186], {
                    278: function (t, e, n) {
                        t.exports = n(279)
                    },
                    279: function (t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                                value: !0
                            }),
                            n.d(e, "spec",
                                function () {
                                    return a
                                }),
                            e.matchRequest = s,
                            e.checkDeepArray = c,
                            e.defaultSize = d;
                        var r = n(0),
                            i = n(1),
                            o = n(3);
                        var a = {
                            code: "districtmDMX",
                            supportedFormat: ["banner"],
                            isBidRequestValid: function (t) {
                                return !(!t.params.dmxid || !t.params.memberid)
                            },
                            interpretResponse: function (t, e) {
                                return (t = t.body || {}).seatbid && r.isArray(t.seatbid) ? t.seatbid.reduce(function (t, n) {
                                        var r = n.bid.reduce(function (t, n) {
                                            if (t.price < n.price) {
                                                var r = d(s(n.impid, e)),
                                                    i = r.width,
                                                    o = r.height;
                                                return n.cpm = n.price,
                                                    n.bidId = n.impid,
                                                    n.requestId = n.impid,
                                                    n.width = n.w || i,
                                                    n.height = n.h || o,
                                                    n.ad = n.adm,
                                                    n.netRevenue = !0,
                                                    n.creativeId = n.crid,
                                                    n.currency = "USD",
                                                    n.ttl = 60,
                                                    n
                                            }
                                            return t.cpm = t.price,
                                                t
                                        }, {
                                            price: 0
                                        });
                                        return r.adm && t.push(r),
                                            t
                                    },
                                    []).filter(function (t) {
                                    return !!t.bidId
                                }) : []
                            },
                            buildRequests: function (t, e) {
                                var n = o.b.getConfig("bidderTimeout"),
                                    i = {
                                        id: r.generateUUID(),
                                        cur: ["USD"],
                                        tmax: n - 300,
                                        test: this.test() || 0,
                                        site: {
                                            publisher: {
                                                id: String(t[0].params.memberid) || null
                                            }
                                        }
                                    };
                                i.test || delete i.test,
                                    e.gdprConsent && (i.regs = {},
                                        i.regs.ext = {},
                                        i.regs.ext.gdpr = !0 === e.gdprConsent.gdprApplies ? 1 : 0, i.user = {},
                                        i.user.ext = {},
                                        i.user.ext.consent = e.gdprConsent.consentString);
                                var a = t.map(function (t) {
                                    var e = {};
                                    return e.id = t.bidId,
                                        e.tagid = String(t.params.dmxid),
                                        e.secure = "https:" === window.location.protocol ? 1 : 0,
                                        e.banner = {
                                            topframe: 1,
                                            w: t.sizes[0][0] || 0,
                                            h: t.sizes[0][1] || 0,
                                            format: t.sizes.map(function (t) {
                                                return {
                                                    w: t[0],
                                                    h: t[1]
                                                }
                                            }).filter(function (t) {
                                                return "number" == typeof t.w && "number" == typeof t.h
                                            })
                                        },
                                        e
                                });
                                return i.imp = a, {
                                    method: "POST",
                                    url: "https://dmx.districtm.io/b/v1",
                                    data: JSON.stringify(i),
                                    options: {
                                        contentType: "application/json",
                                        withCredentials: !0
                                    },
                                    bidderRequest: e
                                }
                            },
                            test: function () {
                                return -1 !== window.location.href.indexOf("dmTest=true") ? 1 : 0
                            },
                            getUserSyncs: function (t) {
                                if (t.iframeEnabled) return [{
                                    type: "iframe",
                                    url: "https://cdn.districtm.io/ids/index.html"
                                }]
                            }
                        };

                        function s(t, e) {
                            return function (t, e) {
                                return function (t) {
                                        if (Array.isArray(t)) return t
                                    }(t) ||
                                    function (t, e) {
                                        var n = [],
                                            r = !0,
                                            i = !1,
                                            o = void 0;
                                        try {
                                            for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                                        } catch (t) {
                                            i = !0,
                                                o = t
                                        } finally {
                                            try {
                                                r || null == s.
                                                return || s.
                                                return()
                                            } finally {
                                                if (i) throw o
                                            }
                                        }
                                        return n
                                    }(t, e) ||
                                    function () {
                                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                                    }()
                            }(e.bidderRequest.bids.filter(function (e) {
                                return e.bidId === t
                            }), 1)[0]
                        }

                        function c(t) {
                            return Array.isArray(t) && Array.isArray(t[0]) ? t[0] : t
                        }

                        function d(t) {
                            var e = t.sizes,
                                n = {};
                            return n.width = c(e)[0],
                                n.height = c(e)[1],
                                n
                        }
                        Object(i.registerBidder)(a)
                    }
                },
                [278]),
            pbjsChunk([182], {
                    286: function (t, e, n) {
                        t.exports = n(287)
                    },
                    287: function (t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                                value: !0
                            }),
                            n.d(e, "emxAdapter",
                                function () {
                                    return f
                                }),
                            n.d(e, "spec",
                                function () {
                                    return p
                                });
                        var r = n(0),
                            i = n(1),
                            o = n(2),
                            a = n(12),
                            s = n(9),
                            c = n.n(s);

                        function d() {
                            return (d = Object.assign ||
                                function (t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var n = arguments[e];
                                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                                    }
                                    return t
                                }).apply(this, arguments)
                        }
                        var u = "emx_digital",
                            l = "//js.brealtime.com/outstream/1.30.0/bundle.js",
                            f = {
                                validateSizes: function (t) {
                                    return r.isArray(t) && void 0 !== t[0] ? t.every(function (t) {
                                        return r.isArray(t) && 2 === t.length
                                    }) : (r.logWarn(u + ": Sizes should be an array"), !1)
                                },
                                checkVideoContext: function (t) {
                                    return t && t.mediaTypes && t.mediaTypes.video && t.mediaTypes.video.context && ("instream" === t.mediaTypes.video.context || "outstream" === t.mediaTypes.video.context)
                                },
                                buildBanner: function (t) {
                                    var e = [];
                                    return e = t.mediaTypes && t.mediaTypes.banner && t.mediaTypes.banner.sizes ? t.mediaTypes.banner.sizes : t.sizes,
                                        f.validateSizes(e) || (r.logWarn(u + ": could not detect mediaType banner sizes. Assigning to bid sizes instead"), e = t.sizes), {
                                            format: e.map(function (t) {
                                                return {
                                                    w: t[0],
                                                    h: t[1]
                                                }
                                            }),
                                            w: e[0][0],
                                            h: e[0][1]
                                        }
                                },
                                formatVideoResponse: function (t, e) {
                                    return t.vastXml = e.adm,
                                        e.renderer || e.mediaTypes && e.mediaTypes.video && e.mediaTypes.video.context && "outstream" !== e.mediaTypes.video.context || (t.renderer = f.createRenderer(t, {
                                            id: e.bidId,
                                            url: l
                                        })),
                                        t
                                },
                                isMobile: function () {
                                    return /(ios|ipod|ipad|iphone|android)/i.test(navigator.userAgent)
                                },
                                isConnectedTV: function () {
                                    return /(smart[-]?tv|hbbtv|appletv|googletv|hdmi|netcast\.tv|viera|nettv|roku|\bdtv\b|sonydtv|inettvbrowser|\btv\b)/i.test(navigator.userAgent)
                                },
                                getDevice: function () {
                                    return {
                                        ua: navigator.userAgent,
                                        js: 1,
                                        dnt: "yes" === navigator.doNotTrack || "1" === navigator.doNotTrack || "1" === navigator.msDoNotTrack ? 1 : 0,
                                        h: screen.height,
                                        w: screen.width,
                                        devicetype: f.isMobile() ? 1 : f.isConnectedTV() ? 3 : 2,
                                        language: navigator.language || navigator.browserLanguage || navigator.userLanguage || navigator.systemLanguage
                                    }
                                },
                                cleanProtocols: function (t) {
                                    return t.protocols && c()(t.protocols, 7) && (r.logWarn(u + ": VAST 4.0 is currently not supported. This protocol has been filtered out of the request."), t.protocols = t.protocols.filter(function (t) {
                                            return 7 !== t
                                        })),
                                        t
                                },
                                outstreamRender: function (t) {
                                    t.renderer.push(function () {
                                        var e = t && t.params && t.params[0] && t.params[0].video ? t.params[0].video : {};
                                        window.emxVideoQueue = window.emxVideoQueue || [],
                                            window.queueEmxVideo({
                                                id: t.adUnitCode,
                                                adsResponses: t.vastXml,
                                                options: e
                                            }),
                                            window.emxVideoReady && window.videojs && window.emxVideoReady()
                                    })
                                },
                                createRenderer: function (t, e) {
                                    var n = a.a.install({
                                        id: e.id,
                                        url: l,
                                        loaded: !1
                                    });
                                    try {
                                        n.setRender(f.outstreamRender)
                                    } catch (t) {
                                        r.logWarn("Prebid Error calling setRender on renderer", t)
                                    }
                                    return n
                                },
                                buildVideo: function (t) {
                                    var e = d(t.mediaTypes.video, t.params.video);
                                    return f.cleanProtocols(e)
                                },
                                parseResponse: function (t) {
                                    try {
                                        return decodeURIComponent(t)
                                    } catch (t) {
                                        r.logError("emx_digitalBidAdapter", "error", t)
                                    }
                                },
                                getReferrer: function () {
                                    try {
                                        return window.top.document.referrer
                                    } catch (t) {
                                        return document.referrer
                                    }
                                },
                                getGdpr: function (t, e) {
                                    return t.gdprConsent && (e.regs = {
                                            ext: {
                                                gdpr: !0 === t.gdprConsent.gdprApplies ? 1 : 0
                                            }
                                        }),
                                        t.gdprConsent && t.gdprConsent.gdprApplies && (e.user = {
                                            ext: {
                                                consent: t.gdprConsent.consentString
                                            }
                                        }),
                                        e
                                }
                            },
                            p = {
                                code: u,
                                supportedMediaTypes: [o.b, o.d],
                                isBidRequestValid: function (t) {
                                    if (!t || !t.params) return r.logWarn(u + ": Missing bid or bid params."),
                                        !1;
                                    if (t.bidder !== u) return r.logWarn(u + ': Must use "emx_digital" as bidder code.'),
                                        !1;
                                    if (!t.params.tagid || !r.isStr(t.params.tagid)) return r.logWarn(u + ": Missing tagid param or tagid present and not type String."),
                                        !1;
                                    var e;
                                    if (t.mediaTypes && t.mediaTypes.banner) {
                                        if (e = t.mediaTypes.banner.sizes ? t.mediaTypes.banner.sizes : t.sizes, !f.validateSizes(e)) return r.logWarn(u + ": Missing sizes in bid"),
                                            !1
                                    } else if (t.mediaTypes && t.mediaTypes.video) {
                                        if (!f.checkVideoContext(t)) return r.logWarn(u + ": Missing video context: instream or outstream"),
                                            !1;
                                        if (!t.mediaTypes.video.playerSize) return r.logWarn(u + ": Missing video playerSize"),
                                            !1
                                    }
                                    return !0
                                },
                                buildRequests: function (t, e) {
                                    var n = [],
                                        i = e.timeout || "",
                                        o = Date.now(),
                                        a = location.protocol + "//hb.emxdgt.com?t=" + i + "&ts=" + o + "&src=pbjs",
                                        s = -1 < location.protocol.indexOf("https") ? 1 : 0,
                                        c = r.getTopWindowLocation().hostname,
                                        u = e.refererInfo.referer,
                                        l = f.getDevice(),
                                        p = f.getReferrer();
                                    r._each(t,
                                        function (t) {
                                            var e = r.getBidIdParameter("tagid", t.params),
                                                i = parseFloat(r.getBidIdParameter("bidfloor", t.params)) || 0,
                                                o = !!t.mediaTypes.video,
                                                a = d({
                                                        id: t.bidId,
                                                        tid: t.transactionId,
                                                        tagid: e,
                                                        secure: s
                                                    },
                                                    o ? {
                                                        video: f.buildVideo(t)
                                                    } : {
                                                        banner: f.buildBanner(t)
                                                    },
                                                    0 < i ? {
                                                        bidfloor: i,
                                                        bidfloorcur: "USD"
                                                    } : {});
                                            n.push(a)
                                        });
                                    var m = {
                                        id: e.auctionId,
                                        imp: n,
                                        device: l,
                                        site: {
                                            domain: c,
                                            page: u,
                                            ref: p
                                        },
                                        cur: "USD",
                                        version: "1.40.2"
                                    };
                                    return m = f.getGdpr(e, d({},
                                        m)), {
                                        method: "POST",
                                        url: a,
                                        data: JSON.stringify(m),
                                        options: {
                                            withCredentials: !0
                                        }
                                    }
                                },
                                interpretResponse: function (t) {
                                    var e = [],
                                        n = t.body || {};
                                    return n.seatbid && 0 < n.seatbid.length && n.seatbid[0].bid && n.seatbid.forEach(function (t) {
                                            t = t.bid[0];
                                            var n = !1,
                                                r = f.parseResponse(t.adm) || "",
                                                i = {
                                                    requestId: t.id,
                                                    cpm: t.price,
                                                    width: t.w,
                                                    height: t.h,
                                                    creativeId: t.crid || t.id,
                                                    dealId: t.dealid || null,
                                                    currency: "USD",
                                                    netRevenue: !0,
                                                    ttl: t.ttl,
                                                    ad: r
                                                };
                                            t.adm && -1 < t.adm.indexOf("<?xml version=") && (n = !0, i = f.formatVideoResponse(i, d({},
                                                    t))),
                                                i.mediaType = n ? o.d : o.b,
                                                e.push(i)
                                        }),
                                        e
                                },
                                getUserSyncs: function (t) {
                                    var e = [];
                                    return t.iframeEnabled && e.push({
                                            type: "iframe",
                                            url: "//biddr.brealtime.com/check.html"
                                        }),
                                        e
                                }
                            };
                        Object(i.registerBidder)(p)
                    }
                },
                [286]),
            pbjsChunk([152], {
                    354: function (t, e, n) {
                        t.exports = n(355)
                    },
                    355: function (t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                                value: !0
                            }),
                            n.d(e, "spec",
                                function () {
                                    return f
                                });
                        var r = n(0),
                            i = n(2),
                            o = n(3),
                            a = n(356),
                            s = n.n(a),
                            c = n(1);

                        function d(t) {
                            return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                                function (t) {
                                    return typeof t
                                } : function (t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                })(t)
                        }
                        var u = {
                            JPY: 1
                        };

                        function l(t) {
                            return Array.isArray(t) && 2 === t.length && s()(t[0]) && s()(t[1])
                        }
                        var f = {
                            code: "ix",
                            supportedMediaTypes: [i.b],
                            isBidRequestValid: function (t) {
                                if (!l(t.params.size)) return !1;
                                if (!
                                    function (t, e) {
                                        if (l(t)) return t[0] === e[0] && t[1] === e[1];
                                        for (var n = 0; n < t.length; n++)
                                            if (t[n][0] === e[0] && t[n][1] === e[1]) return !0;
                                        return !1
                                    }(t.sizes, t.params.size)) return !1;
                                if (t.hasOwnProperty("mediaType") && "banner" !== t.mediaType) return !1;
                                if (t.hasOwnProperty("mediaTypes") && !r.deepAccess(t, "mediaTypes.banner.sizes")) return !1;
                                if ("string" != typeof t.params.siteId && "number" != typeof t.params.siteId) return !1;
                                var e = t.params.hasOwnProperty("bidFloor"),
                                    n = t.params.hasOwnProperty("bidFloorCur");
                                return !e && !n || e && n &&
                                    function (t, e) {
                                        return Boolean("number" == typeof t && "string" == typeof e && e.match(/^[A-Z]{3}$/))
                                    }(t.params.bidFloor, t.params.bidFloorCur)
                            },
                            buildRequests: function (t, e) {
                                for (var n, i, a = [], s = [], c = null, u = null, l = "https://as-sec.casalemedia.com/cygnus", f = 0; f < t.length; f++) c = t[f],
                                    i = void 0,
                                    (i = {}).id = (n = c).bidId,
                                    i.banner = {},
                                    i.banner.w = n.params.size[0],
                                    i.banner.h = n.params.size[1],
                                    i.banner.topframe = r.inIframe() ? 0 : 1,
                                    i.ext = {},
                                    i.ext.siteID = n.params.siteId,
                                    !n.params.hasOwnProperty("id") || "string" != typeof n.params.id && "number" != typeof n.params.id ? i.ext.sid = "".concat(n.params.size[0], "x").concat(n.params.size[1]) : i.ext.sid = String(n.params.id),
                                    n.params.hasOwnProperty("bidFloor") && n.params.hasOwnProperty("bidFloorCur") && (i.bidfloor = n.params.bidFloor, i.bidfloorcur = n.params.bidFloorCur),
                                    u = i,
                                    a.push(u);
                                if (window.headertag && "function" == typeof window.headertag.getIdentityInfo) {
                                    var p = window.headertag.getIdentityInfo();
                                    if (p && "object" === d(p))
                                        for (var m in p)
                                            if (p.hasOwnProperty(m)) {
                                                var g = p[m];
                                                !g.responsePending && g.data && "object" === d(g.data) && Object.keys(g.data).length && s.push(g.data)
                                            }
                                }
                                var h = {};
                                if (h.id = t[0].bidderRequestId, h.imp = a, h.site = {},
                                    h.ext = {},
                                    h.ext.source = "prebid", 0 < s.length && (h.user = {},
                                        h.user.eids = s), document.referrer && "" !== document.referrer && (h.site.ref = document.referrer), e) {
                                    if (e.gdprConsent) {
                                        var A = e.gdprConsent;
                                        A.hasOwnProperty("gdprApplies") && (h.regs = {
                                                ext: {
                                                    gdpr: A.gdprApplies ? 1 : 0
                                                }
                                            }),
                                            A.hasOwnProperty("consentString") && (h.user = h.user || {},
                                                h.user.ext = {
                                                    consent: A.consentString || ""
                                                })
                                    }
                                    e.refererInfo && (h.site.page = e.refererInfo.referer, e.refererInfo.referer && 0 !== e.refererInfo.referer.indexOf("https") && (l = "http://as.casalemedia.com/cygnus"))
                                }
                                var v = {},
                                    y = o.b.getConfig("ix");
                                if (y) {
                                    if ("object" === d(y.firstPartyData)) {
                                        var b = y.firstPartyData,
                                            w = "?";
                                        for (var E in b) b.hasOwnProperty(E) && (w += "".concat(encodeURIComponent(E), "=").concat(encodeURIComponent(b[E]), "&"));
                                        w = w.slice(0, -1),
                                            h.site.page += w
                                    }
                                    "number" == typeof y.timeout && (v.t = y.timeout)
                                }
                                return v.s = t[0].params.siteId,
                                    v.v = 7.2,
                                    v.r = JSON.stringify(h),
                                    v.ac = "j",
                                    v.sd = 1, {
                                        method: "GET",
                                        url: l,
                                        data: v
                                    }
                            },
                            interpretResponse: function (t) {
                                var e = [],
                                    n = null;
                                if (!t.hasOwnProperty("body") || !t.body.hasOwnProperty("seatbid")) return e;
                                for (var i, o, a, s = t.body,
                                        c = s.seatbid,
                                        d = 0; d < c.length; d++)
                                    if (c[d].hasOwnProperty("bid"))
                                        for (var l = c[d].bid, f = 0; f < l.length; f++) i = l[f],
                                            o = s.cur,
                                            a = void 0,
                                            a = {},
                                            u.hasOwnProperty(o) ? a.cpm = i.price / u[o] : a.cpm = i.price / 100,
                                            a.requestId = i.impid,
                                            a.width = i.w,
                                            a.height = i.h,
                                            a.ad = i.adm,
                                            a.dealId = r.deepAccess(i, "ext.dealid"),
                                            a.ttl = 35,
                                            a.netRevenue = !0,
                                            a.currency = o,
                                            a.creativeId = i.hasOwnProperty("crid") ? i.crid : "-",
                                            a.meta = {},
                                            a.meta.networkId = r.deepAccess(i, "ext.dspid"),
                                            a.meta.brandId = r.deepAccess(i, "ext.advbrandid"),
                                            a.meta.brandName = r.deepAccess(i, "ext.advbrand"),
                                            n = a,
                                            e.push(n);
                                return e
                            },
                            transformBidParams: function (t, e) {
                                return r.convertTypes({
                                        siteID: "number"
                                    },
                                    t)
                            }
                        };
                        Object(c.registerBidder)(f)
                    }
                },
                [354]),
            pbjsChunk([123], {
                    425: function (t, e, n) {
                        t.exports = n(426)
                    },
                    426: function (t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                                value: !0
                            }),
                            e.resetBoPixel = function () {
                                p = !0
                            },
                            n.d(e, "spec",
                                function () {
                                    return m
                                });
                        var r = n(3),
                            i = n(1),
                            o = n(0),
                            a = n(26),
                            s = n(2),
                            c = n(10);
                        var d = [s.b, s.d],
                            u = "openx",
                            l = "hb_pb",
                            f = "2.1.7",
                            p = !0,
                            m = {
                                code: u,
                                supportedMediaTypes: d,
                                isBidRequestValid: function (t) {
                                    var e = t.params.delDomain || t.params.platform;
                                    return o.deepAccess(t, "mediaTypes.banner") && e ? !!t.params.unit || 0 < o.deepAccess(t, "mediaTypes.banner.sizes.length") : !(!t.params.unit || !e)
                                },
                                buildRequests: function (t, e) {
                                    if (0 === t.length) return [];
                                    var n = [],
                                        i = function (t, e) {
                                            return function (t) {
                                                    if (Array.isArray(t)) return t
                                                }(t) ||
                                                function (t, e) {
                                                    var n = [],
                                                        r = !0,
                                                        i = !1,
                                                        o = void 0;
                                                    try {
                                                        for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                                                    } catch (t) {
                                                        i = !0,
                                                            o = t
                                                    } finally {
                                                        try {
                                                            r || null == s.
                                                            return || s.
                                                            return()
                                                        } finally {
                                                            if (i) throw o
                                                        }
                                                    }
                                                    return n
                                                }(t, e) ||
                                                function () {
                                                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                                                }()
                                        }(function (t) {
                                            return t.reduce(function (t, e) {
                                                    return function (t) {
                                                            return o.deepAccess(t, "mediaTypes.video") && !o.deepAccess(t, "mediaTypes.banner") || t.mediaType === s.d
                                                        }(e) ? t[0].push(e) : t[1].push(e),
                                                        t
                                                },
                                                [
                                                    [],
                                                    []
                                                ])
                                        }(t), 2),
                                        a = i[0],
                                        c = i[1];
                                    return 0 < c.length && n.push(function (t, e) {
                                            var n = [],
                                                i = !1,
                                                a = h(t, e),
                                                s = o._map(t,
                                                    function (t) {
                                                        return t.params.unit
                                                    });
                                            a.aus = o._map(t,
                                                    function (t) {
                                                        return o.parseSizesInput(t.sizes).join(",")
                                                    }).join("|"),
                                                a.divIds = o._map(t,
                                                    function (t) {
                                                        return encodeURIComponent(t.adUnitCode)
                                                    }).join(","),
                                                s.some(function (t) {
                                                    return t
                                                }) && (a.auid = s.join(",")),
                                                t.some(function (t) {
                                                    return t.params.doNotTrack
                                                }) && (a.ns = 1),
                                                !0 !== r.b.getConfig("coppa") && !t.some(function (t) {
                                                    return t.params.coppa
                                                }) || (a.tfcd = 1),
                                                t.forEach(function (t) {
                                                    if (t.params.customParams) {
                                                        var e = o._map(Object.keys(t.params.customParams),
                                                                function (e) {
                                                                    return function (t, e) {
                                                                        var n = e[t];
                                                                        return o.isArray(n) && (n = n.join(",")),
                                                                            (t.toLowerCase() + "=" + n.toLowerCase()).replace("+", ".").replace("/", "_")
                                                                    }(e, t.params.customParams)
                                                                }),
                                                            r = window.btoa(e.join("&"));
                                                        i = !0,
                                                            n.push(r)
                                                    } else n.push("")
                                                }),
                                                i && (a.tps = n.join(","));
                                            var c = [],
                                                d = !1;
                                            return t.forEach(function (t) {
                                                    t.params.customFloor ? (c.push(Math.round(100 * t.params.customFloor) / 100 * 1e3), d = !0) : c.push(0)
                                                }),
                                                d && (a.aumfs = c.join(",")), {
                                                    method: "GET",
                                                    url: a.ph ? "//u.openx.net/w/1.0/arj" : "//".concat(t[0].params.delDomain, "/w/1.0/arj"),
                                                    data: a,
                                                    payload: {
                                                        bids: t,
                                                        startTime: new Date
                                                    }
                                                }
                                        }(c, e)),
                                        0 < a.length && a.forEach(function (t) {
                                            n.push(function (t, e) {
                                                var n = function (t, e) {
                                                    var n, r, i = h([t], e),
                                                        a = o.deepAccess(t, "params.video") || {},
                                                        s = o.deepAccess(t, "mediaTypes.video.context"),
                                                        c = o.deepAccess(t, "mediaTypes.video.playerSize");
                                                    return o.isArray(t.sizes) && 2 === t.sizes.length && !o.isArray(t.sizes[0]) ? (n = parseInt(t.sizes[0], 10), r = parseInt(t.sizes[1], 10)) : o.isArray(t.sizes) && o.isArray(t.sizes[0]) && 2 === t.sizes[0].length ? (n = parseInt(t.sizes[0][0], 10), r = parseInt(t.sizes[0][1], 10)) : o.isArray(c) && 2 === c.length && (n = parseInt(c[0], 10), r = parseInt(c[1], 10)),
                                                        Object.keys(a).forEach(function (t) {
                                                            "openrtb" === t ? (a[t].w = n || a[t].w, a[t].v = r || a[t].v, i[t] = JSON.stringify(a[t])) : t in i || "url" === t || (i[t] = a[t])
                                                        }),
                                                        i.auid = t.params.unit,
                                                        i.vwd = n || a.vwd,
                                                        i.vht = r || a.vht,
                                                        "outstream" === s && (i.vos = "101"),
                                                        a.mimes && (i.vmimes = a.mimes),
                                                        i
                                                }(t, e);
                                                return {
                                                    method: "GET",
                                                    url: n.ph ? "//u.openx.net/v/1.0/avjp" : "//".concat(t.params.delDomain, "/v/1.0/avjp"),
                                                    data: n,
                                                    payload: {
                                                        bid: t,
                                                        startTime: new Date
                                                    }
                                                }
                                            }(t, e))
                                        }),
                                        n
                                },
                                interpretResponse: function (t, e) {
                                    var n = t.body;
                                    return (/avjp$/.test(e.url) ? s.d : s.b) === s.d ?
                                        function (t, e) {
                                            var n = e.bid,
                                                r = e.startTime,
                                                i = [];
                                            if (void 0 !== t && "" !== t.vastUrl && "" !== t.pub_rev) {
                                                var o = Object(c.c)(t.vastUrl).search || {},
                                                    a = {};
                                                a.requestId = n.bidId,
                                                    a.ttl = 300,
                                                    a.netRevenue = !0,
                                                    a.currency = t.currency,
                                                    a.cpm = Number(t.pub_rev) / 1e3,
                                                    a.width = t.width,
                                                    a.height = t.height,
                                                    a.creativeId = t.adid,
                                                    a.vastUrl = t.vastUrl,
                                                    a.mediaType = s.d,
                                                    t.ph = o.ph,
                                                    t.colo = o.colo,
                                                    t.ts = o.ts,
                                                    i.push(a),
                                                    A(s.d, t, r)
                                            }
                                            return i
                                        }(n, e.payload) : function (t, e) {
                                            for (var n = e.bids,
                                                    r = e.startTime,
                                                    i = t.ads.ad,
                                                    o = [], a = 0; a < i.length; a++) {
                                                var c = i[a],
                                                    d = parseInt(c.idx, 10),
                                                    u = {};
                                                if (u.requestId = n[d].bidId, c.pub_rev) {
                                                    u.cpm = Number(c.pub_rev) / 1e3;
                                                    var l = c.creative[0];
                                                    l && (u.width = l.width, u.height = l.height),
                                                        u.creativeId = l.id,
                                                        u.ad = c.html,
                                                        c.deal_id && (u.dealId = c.deal_id),
                                                        u.ttl = 300,
                                                        u.netRevenue = !0,
                                                        u.currency = c.currency,
                                                        c.tbd && (u.tbd = c.tbd),
                                                        u.ts = c.ts,
                                                        u.meta = {},
                                                        c.brand_id && (u.meta.brandId = c.brand_id),
                                                        c.adv_id && (u.meta.dspid = c.adv_id),
                                                        o.push(u),
                                                        A(s.b, c, r)
                                                }
                                            }
                                            return o
                                        }(n, e.payload)
                                },
                                getUserSyncs: function (t, e) {
                                    if (t.iframeEnabled || t.pixelEnabled) return [{
                                        type: t.iframeEnabled ? "iframe" : "image",
                                        url: o.deepAccess(e, "0.body.ads.pixels") || o.deepAccess(e, "0.body.pixels") || "//u.openx.net/w/1.0/pd"
                                    }]
                                },
                                transformBidParams: function (t, e) {
                                    return o.convertTypes({
                                            unit: "string",
                                            customFloor: "number"
                                        },
                                        t)
                                }
                            };

                        function g(t) {
                            for (var e in t) t.hasOwnProperty(e) && (t[e] || delete t[e]);
                            return o._map(Object.keys(t),
                                function (e) {
                                    return "".concat(e, "=").concat(t[e])
                                }).join("&")
                        }

                        function h(t, e) {
                            var n, i = o.inIframe();
                            if (n = {
                                    ju: r.b.getConfig("pageUrl") || o.getTopWindowUrl(),
                                    jr: o.getTopWindowReferrer(),
                                    ch: document.charSet || document.characterSet,
                                    res: "".concat(screen.width, "x").concat(screen.height, "x").concat(screen.colorDepth),
                                    ifr: i,
                                    tz: (new Date).getTimezoneOffset(),
                                    tws: function (t) {
                                        var e, n, r, i = window,
                                            o = document,
                                            a = o.documentElement;
                                        if (t) {
                                            try {
                                                i = window.top,
                                                    o = window.top.document
                                            } catch (t) {
                                                return
                                            }
                                            a = o.documentElement,
                                                r = o.body,
                                                e = i.innerWidth || a.clientWidth || r.clientWidth,
                                                n = i.innerHeight || a.clientHeight || r.clientHeight
                                        } else a = o.documentElement,
                                            e = i.innerWidth || a.clientWidth,
                                            n = i.innerHeight || a.clientHeight;
                                        return "".concat(e, "x").concat(n)
                                    }(i),
                                    be: 1,
                                    bc: t[0].params.bc || "".concat(l, "_").concat(f),
                                    dddid: o._map(t,
                                        function (t) {
                                            return t.transactionId
                                        }).join(","),
                                    nocache: (new Date).getTime()
                                },
                                t[0].params.platform && (n.ph = t[0].params.platform), o.deepAccess(e, "gdprConsent")) {
                                var a = e.gdprConsent;
                                void 0 !== a.consentString && (n.gdpr_consent = a.consentString),
                                    void 0 !== a.gdprApplies && (n.gdpr = a.gdprApplies ? 1 : 0),
                                    "iab" === r.b.getConfig("consentManagement.cmpApi") && (n.x_gdpr_f = 1)
                            }
                            return t[0].userId && t[0].userId.pubcid ? n.pubcid = t[0].userId.pubcid : t[0].crumbs && t[0].crumbs.pubcid && (n.pubcid = t[0].crumbs.pubcid),
                                n
                        }

                        function A(t, e, n) {
                            if (p) {
                                p = !1;
                                var i, d = r.b.getConfig("bidderTimeout");
                                window.PREBID_TIMEOUT && (d = Math.min(window.PREBID_TIMEOUT, d));
                                var l = {
                                    bd: +new Date - n,
                                    bp: e.pub_rev,
                                    br: "0",
                                    bs: o.getTopWindowLocation().hostname,
                                    bt: d,
                                    ts: e.ts
                                };
                                if (l.br = l.bt < l.bd ? "t" : "p", t === s.d) {
                                    var f = Object(c.c)(e.colo);
                                    l.ph = e.ph,
                                        i = "//".concat(f.hostname, "/w/1.0/bo?").concat(g(l))
                                } else {
                                    var m = o.deepAccess(e, "creative.0.tracking.impression").match(/([^?]+\/)ri\?/);
                                    m && 1 < m.length && (i = "".concat(m[1], "bo?").concat(g(l)))
                                }
                                i && a.a.registerSync("image", u, i)
                            }
                        }
                        Object(i.registerBidder)(m)
                    }
                },
                [425]),
            pbjsChunk([107], {
                    464: function (t, e, n) {
                        t.exports = n(465)
                    },
                    465: function (t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                                value: !0
                            }),
                            e.setStorageItem = g,
                            e.getStorageItem = h,
                            e.removeStorageItem = A,
                            e.isPubcidEnabled = function () {
                                return m.enabled
                            },
                            e.getExpInterval = function () {
                                return m.interval
                            },
                            e.getPubcidConfig = function () {
                                return m
                            },
                            e.requestBidHook = b,
                            e.setCookie = w,
                            e.getCookie = E,
                            e.setConfig = _,
                            e.initPubcid = T;
                        var r = n(0),
                            i = n(3);

                        function o() {
                            return (o = Object.assign ||
                                function (t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var n = arguments[e];
                                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                                    }
                                    return t
                                }).apply(this, arguments)
                        }

                        function a(t) {
                            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                                function (t) {
                                    return typeof t
                                } : function (t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                })(t)
                        }
                        var s = "_pubcid",
                            c = "_pubcid_optout",
                            d = 525600,
                            u = "PublisherCommonId",
                            l = "_exp",
                            f = "cookie",
                            p = "html5",
                            m = {
                                enabled: !0,
                                interval: d,
                                typeEnabled: p,
                                readOnly: !1
                            };

                        function g(t, e, n) {
                            try {
                                if (void 0 !== n && null != n) {
                                    var i = new Date(Date.now() + 60 * n * 1e3).toUTCString();
                                    localStorage.setItem(t + l, i)
                                }
                                localStorage.setItem(t, e)
                            } catch (t) {
                                r.logMessage(t)
                            }
                        }

                        function h(t) {
                            var e = null;
                            try {
                                var n = localStorage.getItem(t + l);
                                n ? 0 < new Date(n).getTime() - Date.now() ? e = localStorage.getItem(t) : A(t) : e = localStorage.getItem(t)
                            } catch (t) {
                                r.logMessage(t)
                            }
                            return e
                        }

                        function A(t) {
                            try {
                                localStorage.removeItem(t + l),
                                    localStorage.removeItem(t)
                            } catch (t) {
                                r.logMessage(t)
                            }
                        }

                        function v(t) {
                            var e;
                            return m.typeEnabled === f ? e = E(t) : m.typeEnabled === p && (e = (e = h(t)) || E(t)),
                                "undefined" === e || "null" === e ? null : e
                        }

                        function y(t, e, n) {
                            t && e && (m.typeEnabled === f ? w(t, e, n) : m.typeEnabled === p && g(t, e, n))
                        }

                        function b(t, e) {
                            var n = e.adUnits || pbjs.adUnits,
                                i = null;
                            return m.enabled && m.typeEnabled && ("object" === a(window[u]) ? (i = window[u].getId(), r.logMessage(u + ": pubcid = " + i)) : (i = v(s), m.readOnly || (i ? y(s, i, m.interval) : (i = r.generateUUID(), y(s, i, m.interval), i = v(s))), r.logMessage("pbjs: pubcid = " + i)), n && i && n.forEach(function (t) {
                                    t.bids.forEach(function (t) {
                                        o(t, {
                                            crumbs: {
                                                pubcid: i
                                            }
                                        })
                                    })
                                })),
                                t.call(this, e)
                        }

                        function w(t, e, n) {
                            var r = new Date;
                            r.setTime(r.getTime() + 1e3 * n * 60),
                                window.document.cookie = t + "=" + encodeURIComponent(e) + ";path=/;expires=" + r.toGMTString()
                        }

                        function E(t) {
                            if (t && window.document.cookie) {
                                var e = window.document.cookie.match("(^|;)\\s*" + t + "\\s*=\\s*([^;]*)\\s*(;|$)");
                                return e ? decodeURIComponent(e[2]) : null
                            }
                            return null
                        }

                        function _() {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                                e = t.enable,
                                n = void 0 === e || e,
                                i = t.expInterval,
                                o = void 0 === i ? d : i,
                                a = t.type,
                                s = void 0 === a ? "html5,cookie" : a,
                                c = t.readOnly,
                                u = void 0 !== c && c;
                            m.enabled = n,
                                m.interval = parseInt(o, 10),
                                isNaN(m.interval) && (m.interval = d),
                                m.readOnly = u,
                                m.typeEnabled = null;
                            for (var l = s.split(","), g = 0; g < l.length; ++g) {
                                var h = l[g].trim();
                                if (h === f) {
                                    if (r.cookiesAreEnabled()) {
                                        m.typeEnabled = f;
                                        break
                                    }
                                } else if (h === p && r.hasLocalStorage()) {
                                    m.typeEnabled = p;
                                    break
                                }
                            }
                        }

                        function T() {
                            i.b.getConfig("pubcid",
                                    function (t) {
                                        return _(t.pubcid)
                                    }),
                                v(c) || pbjs.requestBids.before(b)
                        }
                        T()
                    }
                },
                [464]),
            pbjsChunk([106], {
                    466: function (t, e, n) {
                        t.exports = n(467)
                    },
                    467: function (t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                                value: !0
                            }),
                            n.d(e, "spec",
                                function () {
                                    return C
                                });
                        var r = n(0),
                            i = n(1),
                            o = n(2),
                            a = n(3);

                        function s(t) {
                            return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                                function (t) {
                                    return typeof t
                                } : function (t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                })(t)
                        }
                        var c = "PubMatic: ",
                            d = "USD",
                            u = "nFIn8aLzbd",
                            l = void 0,
                            f = {
                                kadpageurl: "",
                                gender: "",
                                yob: "",
                                lat: "",
                                lon: "",
                                wiid: "",
                                profId: "",
                                verId: ""
                            },
                            p = {
                                NUMBER: "number",
                                STRING: "string",
                                BOOLEAN: "boolean",
                                ARRAY: "array",
                                OBJECT: "object"
                            },
                            m = {
                                mimes: p.ARRAY,
                                minduration: p.NUMBER,
                                maxduration: p.NUMBER,
                                startdelay: p.NUMBER,
                                playbackmethod: p.ARRAY,
                                api: p.ARRAY,
                                protocols: p.ARRAY,
                                w: p.NUMBER,
                                h: p.NUMBER,
                                battr: p.ARRAY,
                                linearity: p.NUMBER,
                                placement: p.NUMBER,
                                minbitrate: p.NUMBER,
                                maxbitrate: p.NUMBER
                            },
                            g = {
                                TITLE: {
                                    ID: 1,
                                    KEY: "title",
                                    TYPE: 0
                                },
                                IMAGE: {
                                    ID: 2,
                                    KEY: "image",
                                    TYPE: 0
                                },
                                ICON: {
                                    ID: 3,
                                    KEY: "icon",
                                    TYPE: 0
                                },
                                SPONSOREDBY: {
                                    ID: 4,
                                    KEY: "sponsoredBy",
                                    TYPE: 1
                                },
                                BODY: {
                                    ID: 5,
                                    KEY: "body",
                                    TYPE: 2
                                },
                                CLICKURL: {
                                    ID: 6,
                                    KEY: "clickUrl",
                                    TYPE: 0
                                },
                                VIDEO: {
                                    ID: 7,
                                    KEY: "video",
                                    TYPE: 0
                                },
                                EXT: {
                                    ID: 8,
                                    KEY: "ext",
                                    TYPE: 0
                                },
                                DATA: {
                                    ID: 9,
                                    KEY: "data",
                                    TYPE: 0
                                },
                                LOGO: {
                                    ID: 10,
                                    KEY: "logo",
                                    TYPE: 0
                                },
                                SPONSORED: {
                                    ID: 11,
                                    KEY: "sponsored",
                                    TYPE: 1
                                },
                                DESC: {
                                    ID: 12,
                                    KEY: "data",
                                    TYPE: 2
                                },
                                RATING: {
                                    ID: 13,
                                    KEY: "rating",
                                    TYPE: 3
                                },
                                LIKES: {
                                    ID: 14,
                                    KEY: "likes",
                                    TYPE: 4
                                },
                                DOWNLOADS: {
                                    ID: 15,
                                    KEY: "downloads",
                                    TYPE: 5
                                },
                                PRICE: {
                                    ID: 16,
                                    KEY: "price",
                                    TYPE: 6
                                },
                                SALEPRICE: {
                                    ID: 17,
                                    KEY: "saleprice",
                                    TYPE: 7
                                },
                                PHONE: {
                                    ID: 18,
                                    KEY: "phone",
                                    TYPE: 8
                                },
                                ADDRESS: {
                                    ID: 19,
                                    KEY: "address",
                                    TYPE: 9
                                },
                                DESC2: {
                                    ID: 20,
                                    KEY: "desc2",
                                    TYPE: 10
                                },
                                DISPLAYURL: {
                                    ID: 21,
                                    KEY: "displayurl",
                                    TYPE: 11
                                },
                                CTA: {
                                    ID: 22,
                                    KEY: "cta",
                                    TYPE: 12
                                }
                            },
                            h = {
                                ICON: 1,
                                LOGO: 2,
                                IMAGE: 3
                            },
                            A = [{
                                    id: g.SPONSOREDBY.ID,
                                    required: !0,
                                    data: {
                                        type: 1
                                    }
                                },
                                {
                                    id: g.TITLE.ID,
                                    required: !0
                                },
                                {
                                    id: g.IMAGE.ID,
                                    required: !0
                                }
                            ],
                            v = {
                                1: "PMP",
                                5: "PREF",
                                6: "PMPG"
                            },
                            y = 0,
                            b = !1,
                            w = {},
                            E = {};

                        function _(t, e) {
                            if (!r.isStr(e)) return e && r.logWarn(c + "Ignoring param key: " + t + ", expects string-value, found " + s(e)),
                                l;
                            switch (t) {
                                case "pmzoneid":
                                    return e.split(",").slice(0, 50).map(function (t) {
                                        return t.trim()
                                    }).join();
                                case "kadfloor":
                                case "lat":
                                case "lon":
                                    return parseFloat(e) || l;
                                case "yob":
                                    return parseInt(e) || l;
                                default:
                                    return e
                            }
                        }

                        function T(t, e, n) {
                            var i, o = "Ignoring param key: " + t + ", expects " + n + ", found " + s(e);
                            switch (n) {
                                case p.BOOLEAN:
                                    i = r.isBoolean;
                                    break;
                                case p.NUMBER:
                                    i = r.isNumber;
                                    break;
                                case p.STRING:
                                    i = r.isStr;
                                    break;
                                case p.ARRAY:
                                    i = r.isArray
                            }
                            return i(e) ? e : (r.logWarn(c + o), l)
                        }

                        function S(t) {
                            var e, n, i, o = {
                                assets: []
                            };
                            for (var a in t) {
                                if (t.hasOwnProperty(a)) {
                                    var s = {};
                                    if (!(o.assets && 0 < o.assets.length && o.assets.hasOwnProperty(a))) switch (a) {
                                        case g.TITLE.KEY:
                                            t[a].len || t[a].length ? s = {
                                                id: g.TITLE.ID,
                                                required: t[a].required ? 1 : 0,
                                                title: {
                                                    len: t[a].len || t[a].length,
                                                    ext: t[a].ext
                                                }
                                            } : r.logWarn(c + "Error: Title Length is required for native ad: " + JSON.stringify(t));
                                            break;
                                        case g.IMAGE.KEY:
                                            t[a].sizes && 0 < t[a].sizes.length ? s = {
                                                id: g.IMAGE.ID,
                                                required: t[a].required ? 1 : 0,
                                                img: {
                                                    type: h.IMAGE,
                                                    w: t[a].w || t[a].width || (t[a].sizes ? t[a].sizes[0] : l),
                                                    h: t[a].h || t[a].height || (t[a].sizes ? t[a].sizes[1] : l),
                                                    wmin: t[a].wmin || t[a].minimumWidth || (t[a].minsizes ? t[a].minsizes[0] : l),
                                                    hmin: t[a].hmin || t[a].minimumHeight || (t[a].minsizes ? t[a].minsizes[1] : l),
                                                    mimes: t[a].mimes,
                                                    ext: t[a].ext
                                                }
                                            } : r.logWarn(c + "Error: Image sizes is required for native ad: " + JSON.stringify(t));
                                            break;
                                        case g.ICON.KEY:
                                            t[a].sizes && 0 < t[a].sizes.length ? s = {
                                                id: g.ICON.ID,
                                                required: t[a].required ? 1 : 0,
                                                img: {
                                                    type: h.ICON,
                                                    w: t[a].w || t[a].width || (t[a].sizes ? t[a].sizes[0] : l),
                                                    h: t[a].h || t[a].height || (t[a].sizes ? t[a].sizes[1] : l)
                                                }
                                            } : r.logWarn(c + "Error: Icon sizes is required for native ad: " + JSON.stringify(t));
                                            break;
                                        case g.VIDEO.KEY:
                                            s = {
                                                id: g.VIDEO.ID,
                                                required: t[a].required ? 1 : 0,
                                                video: {
                                                    minduration: t[a].minduration,
                                                    maxduration: t[a].maxduration,
                                                    protocols: t[a].protocols,
                                                    mimes: t[a].mimes,
                                                    ext: t[a].ext
                                                }
                                            };
                                            break;
                                        case g.EXT.KEY:
                                            s = {
                                                id: g.EXT.ID,
                                                required: t[a].required ? 1 : 0
                                            };
                                            break;
                                        case g.LOGO.KEY:
                                            s = {
                                                id: g.LOGO.ID,
                                                required: t[a].required ? 1 : 0,
                                                img: {
                                                    type: h.LOGO,
                                                    w: t[a].w || t[a].width || (t[a].sizes ? t[a].sizes[0] : l),
                                                    h: t[a].h || t[a].height || (t[a].sizes ? t[a].sizes[1] : l)
                                                }
                                            };
                                            break;
                                        case g.SPONSOREDBY.KEY:
                                        case g.BODY.KEY:
                                        case g.RATING.KEY:
                                        case g.LIKES.KEY:
                                        case g.DOWNLOADS.KEY:
                                        case g.PRICE.KEY:
                                        case g.SALEPRICE.KEY:
                                        case g.PHONE.KEY:
                                        case g.ADDRESS.KEY:
                                        case g.DESC2.KEY:
                                        case g.DISPLAYURL.KEY:
                                        case g.CTA.KEY:
                                            n = t,
                                                i = (e = E[a]).KEY,
                                                s = {
                                                    id: e.ID,
                                                    required: n[i].required ? 1 : 0,
                                                    data: {
                                                        type: e.TYPE,
                                                        len: n[i].len,
                                                        ext: n[i].ext
                                                    }
                                                }
                                    }
                                }
                                s && s.id && (o.assets[o.assets.length] = s)
                            }
                            var d = A.length,
                                u = 0;
                            return A.forEach(function (t) {
                                    for (var e = o.assets.length,
                                            n = 0; n < e; n++)
                                        if (t.id == o.assets[n].id) {
                                            u++;
                                            break
                                        }
                                }),
                                b = d != u,
                                o
                        }

                        function I(t) {
                            var e, n = t.mediaTypes.banner.sizes,
                                i = [];
                            if (n !== l && r.isArray(n)) {
                                if (e = {},
                                    t.params.width || t.params.height) e.w = t.params.width,
                                    e.h = t.params.height;
                                else {
                                    if (0 === n.length) return e = l,
                                        r.logWarn(c + "Error: mediaTypes.banner.size missing for adunit: " + t.params.adUnit + ". Ignoring the banner impression in the adunit."),
                                        e;
                                    e.w = parseInt(n[0][0]),
                                        e.h = parseInt(n[0][1]),
                                        n = n.splice(1, n.length - 1)
                                }
                                0 < n.length && (i = [], n.forEach(function (t) {
                                        1 < t.length && i.push({
                                            w: t[0],
                                            h: t[1]
                                        })
                                    }), 0 < i.length && (e.format = i)),
                                    e.pos = 0,
                                    e.topframe = r.inIframe() ? 0 : 1
                            } else r.logWarn(c + "Error: mediaTypes.banner.size missing for adunit: " + t.params.adUnit + ". Ignoring the banner impression in the adunit."),
                                e = l;
                            return e
                        }

                        function k(t) {
                            var e, n = t.params.video;
                            if (n !== l) {
                                for (var i in e = {},
                                        m) n.hasOwnProperty(i) && (e[i] = T(i, n[i], m[i]));
                                r.isArray(t.mediaTypes.video.playerSize[0]) ? (e.w = parseInt(t.mediaTypes.video.playerSize[0][0]), e.h = parseInt(t.mediaTypes.video.playerSize[0][1])) : r.isNumber(t.mediaTypes.video.playerSize[0]) && (e.w = parseInt(t.mediaTypes.video.playerSize[0]), e.h = parseInt(t.mediaTypes.video.playerSize[1])),
                                    t.params.video.hasOwnProperty("skippable") && (e.ext = {
                                        video_skippable: t.params.video.skippable ? 1 : 0
                                    })
                            } else e = l,
                                r.logWarn(c + "Error: Video config params missing for adunit: " + t.params.adUnit + " with mediaType set as video. Ignoring video impression in the adunit.");
                            return e
                        }

                        function O(t, e) {
                            var n = [];
                            (function (t) {
                                var e = function (t) {
                                    var e, n = (e = window.DigiTrust && (a.b.getConfig("digiTrustId") || window.DigiTrust.getUser({
                                        member: t
                                    }))) && e.success && e.identity || null;
                                    return !n || n.privacy && n.privacy.optout ? null : n
                                }(u);
                                null !== e && t.push({
                                    source: "digitru.st",
                                    uids: [{
                                        id: e.id || "",
                                        atype: 1,
                                        ext: {
                                            keyv: parseInt(e.keyv) || 0
                                        }
                                    }]
                                })
                            })(n),
                            function (t, e) {
                                var n = null,
                                    i = a.b.getConfig("adsrvrOrgId");
                                r.isStr(r.deepAccess(e, "0.userId.tdid")) ? n = e[0].userId.tdid : i && r.isStr(i.TDID) && (n = i.TDID),
                                    null !== n && t.push({
                                        source: "adserver.org",
                                        uids: [{
                                            id: n,
                                            atype: 1,
                                            ext: {
                                                rtiPartner: "TDID"
                                            }
                                        }]
                                    })
                            }(n, e),
                            0 < n.length && (t.user.eids = n)
                        }
                        r._each(g,
                                function (t) {
                                    w[t.ID] = t.KEY
                                }),
                            r._each(g,
                                function (t) {
                                    E[t.KEY] = t
                                });
                        var C = {
                            code: "pubmatic",
                            supportedMediaTypes: [o.b, o.d, o.c],
                            isBidRequestValid: function (t) {
                                return !(!t || !t.params || (r.isStr(t.params.publisherId) ? !(!t.params.hasOwnProperty("video") || t.params.video.hasOwnProperty("mimes") && r.isArray(t.params.video.mimes) && 0 !== t.params.video.mimes.length) && (r.logWarn(c + "Error: For video ads, mimes is mandatory and must specify atlease 1 mime value. Call to OpenBid will not be sent for ad unit:" + JSON.stringify(t)), 1) : (r.logWarn(c + "Error: publisherId is mandatory and cannot be numeric. Call to OpenBid will not be sent for ad unit: " + JSON.stringify(t)), 1)))
                            },
                            buildRequests: function (t, e) {
                                var n;
                                e && e.refererInfo && (n = e.refererInfo);
                                var i, a, u = function (t) {
                                        var e = {};
                                        return e.pageURL = r.getTopWindowUrl(),
                                            t && t.referer ? e.refURL = t.referer : e.refURL = "",
                                            e
                                    }(n),
                                    p = function (t) {
                                        return {
                                            id: "" + (new Date).getTime(),
                                            at: 1,
                                            cur: [d],
                                            imp: [],
                                            site: {
                                                page: t.pageURL,
                                                ref: t.refURL,
                                                publisher: {}
                                            },
                                            device: {
                                                ua: navigator.userAgent,
                                                js: 1,
                                                dnt: "yes" == navigator.doNotTrack || "1" == navigator.doNotTrack || "1" == navigator.msDoNotTrack ? 1 : 0,
                                                h: screen.height,
                                                w: screen.width,
                                                language: navigator.language
                                            },
                                            user: {},
                                            ext: {}
                                        }
                                    }(u),
                                    m = "",
                                    g = "",
                                    h = [],
                                    A = [];
                                if (t.forEach(function (t) {
                                        if ((a = r.deepClone(t)).params.adSlot = a.params.adSlot || "",
                                            function (t) {
                                                t.params.adUnit = "",
                                                    t.params.adUnitIndex = "0",
                                                    t.params.width = 0,
                                                    t.params.height = 0,
                                                    t.params.adSlot = function (t) {
                                                        return r.isStr(t) ? t.replace(/^\s+/g, "").replace(/\s+$/g, "") : ""
                                                    }(t.params.adSlot);
                                                var e = t.params.adSlot,
                                                    n = e.split(":");
                                                if (e = n[0], 2 == n.length && (t.params.adUnitIndex = n[1]), n = e.split("@"), t.params.adUnit = n[0], 1 < n.length) {
                                                    if (2 != (n = n[1].split("x")).length) return void r.logWarn(c + "AdSlot Error: adSlot not in required format");
                                                    t.params.width = parseInt(n[0]),
                                                        t.params.height = parseInt(n[1])
                                                } else if (t.hasOwnProperty("mediaTypes") && t.mediaTypes.hasOwnProperty(o.b) && t.mediaTypes.banner.hasOwnProperty("sizes")) {
                                                    for (var i = 0,
                                                            a = []; i < t.mediaTypes.banner.sizes.length; i++) 2 === t.mediaTypes.banner.sizes[i].length && a.push(t.mediaTypes.banner.sizes[i]);
                                                    t.mediaTypes.banner.sizes = a,
                                                        1 <= t.mediaTypes.banner.sizes.length && (t.params.width = t.mediaTypes.banner.sizes[0][0], t.params.height = t.mediaTypes.banner.sizes[0][1], t.mediaTypes.banner.sizes = t.mediaTypes.banner.sizes.splice(1, t.mediaTypes.banner.sizes.length - 1))
                                                }
                                            }(a), a.params.hasOwnProperty("video"));
                                        else if (!(a.hasOwnProperty("mediaTypes") && a.mediaTypes.hasOwnProperty(o.c) || 0 !== a.params.width || 0 !== a.params.height)) return void r.logWarn(c + "Skipping the non-standard adslot: ", a.params.adSlot, JSON.stringify(a));
                                        u.pubId = u.pubId || a.params.publisherId,
                                            (u = function (t, e) {
                                                var n, i, o;
                                                for (n in e.kadpageurl || (e.kadpageurl = e.pageURL), f) f.hasOwnProperty(n) && (i = t[n]) && ("object" === s(o = f[n]) && (i = o.f(i, e)), r.isStr(i) ? e[n] = i : r.logWarn(c + "Ignoring param : " + n + " with value : " + f[n] + ", expects string-value, found " + s(i)));
                                                return e
                                            }(a.params, u)).transactionId = a.transactionId,
                                            "" === m ? m = a.params.currency || l : a.params.hasOwnProperty("currency") && m !== a.params.currency && r.logWarn(c + "Currency specifier ignored. Only one currency permitted."),
                                            a.params.currency = m,
                                            a.params.hasOwnProperty("dctr") && r.isStr(a.params.dctr) && h.push(a.params.dctr),
                                            a.params.hasOwnProperty("bcat") && r.isArray(a.params.bcat) && (A = A.concat(a.params.bcat));
                                        var e = function (t) {
                                            var e, n, i = {},
                                                a = {},
                                                s = t.hasOwnProperty("sizes") ? t.sizes : [],
                                                u = "",
                                                f = [];
                                            if (i = {
                                                    id: t.bidId,
                                                    tagid: t.params.adUnit || void 0,
                                                    bidfloor: _("kadfloor", t.params.kadfloor),
                                                    secure: 1,
                                                    ext: {
                                                        pmZoneId: _("pmzoneid", t.params.pmzoneid)
                                                    },
                                                    bidfloorcur: t.params.currency ? _("currency", t.params.currency) : d
                                                },
                                                t.hasOwnProperty("mediaTypes"))
                                                for (u in t.mediaTypes) switch (u) {
                                                    case o.b:
                                                        (e = I(t)) !== l && (i.banner = e);
                                                        break;
                                                    case o.c:
                                                        a.request = JSON.stringify(S(t.nativeParams)),
                                                            b ? r.logWarn(c + "Error: Error in Native adunit " + t.params.adUnit + ". Ignoring the adunit. Refer to http://prebid.org/dev-docs/show-native-ads.html for more details.") : i.native = a;
                                                        break;
                                                    case o.d:
                                                        (n = k(t)) !== l && (i.video = n)
                                                } else e = {
                                                        pos: 0,
                                                        w: t.params.width,
                                                        h: t.params.height,
                                                        topframe: r.inIframe() ? 0 : 1
                                                    },
                                                    r.isArray(s) && 1 < s.length && ((s = s.splice(1, s.length - 1)).forEach(function (t) {
                                                        f.push({
                                                            w: t[0],
                                                            h: t[1]
                                                        })
                                                    }), e.format = f),
                                                    i.banner = e;
                                            return i.hasOwnProperty(o.b) || i.hasOwnProperty(o.c) || i.hasOwnProperty(o.d) ? i : l
                                        }(a);
                                        e && p.imp.push(e)
                                    }), 0 != p.imp.length) {
                                    if (p.site.publisher.id = u.pubId.trim(), y = u.pubId.trim(), p.ext.wrapper = {},
                                        p.ext.wrapper.profile = parseInt(u.profId) || l, p.ext.wrapper.version = parseInt(u.verId) || l, p.ext.wrapper.wiid = u.wiid || l, p.ext.wrapper.wv = "prebid_prebid_2.27.0", p.ext.wrapper.transactionId = u.transactionId, p.ext.wrapper.wp = "pbjs", p.user.gender = u.gender ? u.gender.trim() : l, p.user.geo = {},
                                        e && e.gdprConsent && (p.user.ext = {
                                                consent: e.gdprConsent.consentString
                                            },
                                            p.regs = {
                                                ext: {
                                                    gdpr: e.gdprConsent.gdprApplies ? 1 : 0
                                                }
                                            }), p.user.geo.lat = _("lat", u.lat), p.user.geo.lon = _("lon", u.lon), p.user.yob = _("yob", u.yob), p.device.geo = p.user.geo, p.site.page = u.kadpageurl.trim() || p.site.page.trim(), p.site.domain = function (t) {
                                            var e = document.createElement("a");
                                            return e.href = t,
                                                e.hostname
                                        }(p.site.page), 0 < h.length)
                                        if (t[0].params.hasOwnProperty("dctr")) {
                                            if (g = t[0].params.dctr, r.isStr(g) && 0 < g.length) {
                                                var v = g.split("|");
                                                g = "",
                                                    v.forEach(function (t) {
                                                        g += 0 < t.length ? t.trim() + "|" : ""
                                                    }),
                                                    i = g.length,
                                                    "|" === g.substring(i, i - 1) && (g = g.substring(0, i - 1)),
                                                    p.site.ext = {
                                                        key_val: g.trim()
                                                    }
                                            } else r.logWarn(c + "Ignoring param : dctr with value : " + g + ", expects string-value, found empty or non-string value");
                                            1 < h.length && r.logWarn(c + "dctr value found in more than 1 adunits. Value from 1st adunit will be picked. Ignoring values from subsequent adunits")
                                        } else r.logWarn(c + "dctr value not found in 1st adunit, ignoring values from subsequent adunits");
                                    return O(p, t),
                                        function (t, e) {
                                            0 < (e = e.filter(function (t) {
                                                return "string" == typeof t || (r.logWarn(c + "bcat: Each category should be a string, ignoring category: " + t), !1)
                                            }).map(function (t) {
                                                return t.trim()
                                            }).filter(function (t, e, n) {
                                                if (3 < t.length) return n.indexOf(t) === e;
                                                r.logWarn(c + "bcat: Each category should have a value of a length of more than 3 characters, ignoring category: " + t)
                                            })).length && (r.logWarn(c + "bcat: Selected: ", e), t.bcat = e)
                                        }(p, A), {
                                            method: "POST",
                                            url: "https://hbopenbid.pubmatic.com/translator?source=prebid-client",
                                            data: JSON.stringify(p)
                                        }
                                }
                            },
                            interpretResponse: function (t, e) {
                                var n = [],
                                    i = d;
                                try {
                                    t.body && t.body.seatbid && r.isArray(t.body.seatbid) && (i = t.body.cur || i, t.body.seatbid.forEach(function (t) {
                                        t.bid && r.isArray(t.bid) && t.bid.forEach(function (t) {
                                            var a = JSON.parse(e.data),
                                                s = {
                                                    requestId: t.impid,
                                                    cpm: (parseFloat(t.price) || 0).toFixed(2),
                                                    width: t.w,
                                                    height: t.h,
                                                    creativeId: t.crid || t.id,
                                                    dealId: t.dealid,
                                                    currency: i,
                                                    netRevenue: !1,
                                                    ttl: 300,
                                                    referrer: a.site && a.site.ref ? a.site.ref : "",
                                                    ad: t.adm
                                                };
                                            a.imp && 0 < a.imp.length && a.imp.forEach(function (e) {
                                                    if (t.impid === e.id) switch (function (t, e) {
                                                        var n = "",
                                                            i = new RegExp(/VAST\s+version/);
                                                        if (0 <= t.indexOf('span class="PubAPIAd"')) e.mediaType = o.b;
                                                        else if (i.test(t)) e.mediaType = o.d;
                                                        else try {
                                                            (n = JSON.parse(t.replace(/\\/g, ""))) && n.native && (e.mediaType = o.c)
                                                        } catch (e) {
                                                            r.logWarn(c + "Error: Cannot parse native reponse for ad response: " + t)
                                                        }
                                                    }(t.adm, s), s.mediaType) {
                                                        case o.b:
                                                            break;
                                                        case o.d:
                                                            s.width = t.hasOwnProperty("w") ? t.w : e.video.w,
                                                                s.height = t.hasOwnProperty("h") ? t.h : e.video.h,
                                                                s.vastXml = t.adm;
                                                            break;
                                                        case o.c:
                                                            !
                                                            function (t, e) {
                                                                if (e.native = {},
                                                                    t.hasOwnProperty("adm")) {
                                                                    var n = "";
                                                                    try {
                                                                        n = JSON.parse(t.adm.replace(/\\/g, ""))
                                                                    } catch (t) {
                                                                        return r.logWarn(c + "Error: Cannot parse native reponse for ad response: " + e.adm)
                                                                    }
                                                                    if (n && n.native && n.native.assets && 0 < n.native.assets.length) {
                                                                        e.mediaType = o.c;
                                                                        for (var i = 0,
                                                                                a = n.native.assets.length; i < a; i++) switch (n.native.assets[i].id) {
                                                                            case g.TITLE.ID:
                                                                                e.native.title = n.native.assets[i].title && n.native.assets[i].title.text;
                                                                                break;
                                                                            case g.IMAGE.ID:
                                                                                e.native.image = {
                                                                                    url: n.native.assets[i].img && n.native.assets[i].img.url,
                                                                                    height: n.native.assets[i].img && n.native.assets[i].img.h,
                                                                                    width: n.native.assets[i].img && n.native.assets[i].img.w
                                                                                };
                                                                                break;
                                                                            case g.ICON.ID:
                                                                                e.native.icon = {
                                                                                    url: n.native.assets[i].img && n.native.assets[i].img.url,
                                                                                    height: n.native.assets[i].img && n.native.assets[i].img.h,
                                                                                    width: n.native.assets[i].img && n.native.assets[i].img.w
                                                                                };
                                                                                break;
                                                                            case g.SPONSOREDBY.ID:
                                                                            case g.BODY.ID:
                                                                            case g.LIKES.ID:
                                                                            case g.DOWNLOADS.ID:
                                                                            case g.PRICE:
                                                                            case g.SALEPRICE.ID:
                                                                            case g.PHONE.ID:
                                                                            case g.ADDRESS.ID:
                                                                            case g.DESC2.ID:
                                                                            case g.CTA.ID:
                                                                            case g.RATING.ID:
                                                                            case g.DISPLAYURL.ID:
                                                                                e.native[w[n.native.assets[i].id]] = n.native.assets[i].data && n.native.assets[i].data.value
                                                                        }
                                                                        e.native.clickUrl = n.native.link && n.native.link.url,
                                                                            e.native.clickTrackers = n.native.link && n.native.link.clicktrackers || [],
                                                                            e.native.impressionTrackers = n.native.imptrackers || [],
                                                                            e.native.jstracker = n.native.jstracker || [],
                                                                            e.width || (e.width = 0),
                                                                            e.height || (e.height = 0)
                                                                    }
                                                                }
                                                            }(t, s)
                                                    }
                                                }),
                                                t.ext && t.ext.deal_channel && (s.dealChannel = v[t.ext.deal_channel] || null),
                                                s.meta = {},
                                                t.ext && t.ext.dspid && (s.meta.networkId = t.ext.dspid),
                                                t.ext && t.ext.advid && (s.meta.buyerId = t.ext.advid),
                                                t.adomain && 0 < t.adomain.length && (s.meta.clickUrl = t.adomain[0]),
                                                n.push(s)
                                        })
                                    }))
                                } catch (t) {
                                    r.logError(t)
                                }
                                return n
                            },
                            getUserSyncs: function (t, e, n) {
                                var i = "https://ads.pubmatic.com/AdServer/js/showad.js#PIX&kdntuid=1&p=" + y;
                                if (n && (i += "&gdpr=" + (n.gdprApplies ? 1 : 0), i += "&gdpr_consent=" + encodeURIComponent(n.consentString || "")), t.iframeEnabled) return [{
                                    type: "iframe",
                                    url: i
                                }];
                                r.logWarn(c + "Please enable iframe based user sync.")
                            },
                            transformBidParams: function (t, e) {
                                return r.convertTypes({
                                        publisherId: "string",
                                        adSlot: "string"
                                    },
                                    t)
                            }
                        };
                        Object(i.registerBidder)(C)
                    }
                },
                [466]),
            pbjsChunk([91], {
                    510: function (t, e, n) {
                        t.exports = n(511)
                    },
                    511: function (t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                                value: !0
                            }),
                            n.d(e, "FASTLANE_ENDPOINT",
                                function () {
                                    return f
                                }),
                            n.d(e, "VIDEO_ENDPOINT",
                                function () {
                                    return p
                                }),
                            n.d(e, "SYNC_ENDPOINT",
                                function () {
                                    return m
                                }),
                            n.d(e, "spec",
                                function () {
                                    return A
                                }),
                            e.hasVideoMediaType = E,
                            e.masSizeOrdering = T,
                            e.determineRubiconVideoSizeId = S,
                            e.getPriceGranularity = I,
                            e.hasValidVideoParams = k,
                            e.resetUserSync = function () {
                                O = !1
                            };
                        var r = n(0),
                            i = n(1),
                            o = n(3),
                            a = n(2);

                        function s(t, e, n) {
                            return e in t ? Object.defineProperty(t, e, {
                                    value: n,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : t[e] = n,
                                t
                        }

                        function c() {
                            return (c = Object.assign ||
                                function (t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var n = arguments[e];
                                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                                    }
                                    return t
                                }).apply(this, arguments)
                        }

                        function d(t, e) {
                            return function (t) {
                                    if (Array.isArray(t)) return t
                                }(t) ||
                                function (t, e) {
                                    var n = [],
                                        r = !0,
                                        i = !1,
                                        o = void 0;
                                    try {
                                        for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                                    } catch (t) {
                                        i = !0,
                                            o = t
                                    } finally {
                                        try {
                                            r || null == s.
                                            return || s.
                                            return()
                                        } finally {
                                            if (i) throw o
                                        }
                                    }
                                    return n
                                }(t, e) ||
                                function () {
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                                }()
                        }

                        function u(t) {
                            return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                                function (t) {
                                    return typeof t
                                } : function (t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                })(t)
                        }

                        function l() {
                            return "https:" === location.protocol
                        }
                        var f = "//fastlane.rubiconproject.com/a/api/fastlane.json",
                            p = "//prebid-server.rubiconproject.com/openrtb2/auction",
                            m = "https://eus.rubiconproject.com/usync.html",
                            g = {
                                FASTLANE: {
                                    id: "dt.id",
                                    keyv: "dt.keyv",
                                    pref: "dt.pref"
                                },
                                PREBID_SERVER: {
                                    id: "id",
                                    keyv: "keyv"
                                }
                            },
                            h = {
                                1: "468x60",
                                2: "728x90",
                                5: "120x90",
                                8: "120x600",
                                9: "160x600",
                                10: "300x600",
                                13: "200x200",
                                14: "250x250",
                                15: "300x250",
                                16: "336x280",
                                17: "240x400",
                                19: "300x100",
                                31: "980x120",
                                32: "250x360",
                                33: "180x500",
                                35: "980x150",
                                37: "468x400",
                                38: "930x180",
                                39: "750x100",
                                40: "750x200",
                                41: "750x300",
                                43: "320x50",
                                44: "300x50",
                                48: "300x300",
                                53: "1024x768",
                                54: "300x1050",
                                55: "970x90",
                                57: "970x250",
                                58: "1000x90",
                                59: "320x80",
                                60: "320x150",
                                61: "1000x1000",
                                64: "580x500",
                                65: "640x480",
                                66: "930x600",
                                67: "320x480",
                                68: "1800x1000",
                                72: "320x320",
                                73: "320x160",
                                78: "980x240",
                                79: "980x300",
                                80: "980x400",
                                83: "480x300",
                                94: "970x310",
                                96: "970x210",
                                101: "480x320",
                                102: "768x1024",
                                103: "480x280",
                                105: "250x800",
                                108: "320x240",
                                113: "1000x300",
                                117: "320x100",
                                125: "800x250",
                                126: "200x600",
                                144: "980x600",
                                145: "980x150",
                                156: "640x320",
                                159: "320x250",
                                179: "250x600",
                                195: "600x300",
                                198: "640x360",
                                199: "640x200",
                                213: "1030x590",
                                214: "980x360",
                                229: "320x180",
                                232: "580x400",
                                257: "400x600",
                                265: "1920x1080",
                                288: "640x380"
                            };
                        r._each(h,
                            function (t, e) {
                                return h[t] = e
                            });
                        var A = {
                            code: "rubicon",
                            supportedMediaTypes: [a.b, a.d],
                            isBidRequestValid: function (t) {
                                if ("object" !== u(t.params)) return !1;
                                for (var e = 0,
                                        n = ["accountId", "siteId", "zoneId"]; e < n.length; e++)
                                    if (t.params[n[e]] = parseInt(t.params[n[e]]), isNaN(t.params[n[e]])) return r.logError("Rubicon bid adapter Error: wrong format of accountId or siteId or zoneId."),
                                        !1;
                                var i = _(t, !0);
                                return !!i && ("video" !== i || k(t))
                            },
                            buildRequests: function (t, e) {
                                var n = [],
                                    i = t.filter(function (t) {
                                        return "video" === _(t)
                                    }).map(function (t) {
                                        t.startTime = (new Date).getTime();
                                        var n = {
                                                id: t.transactionId,
                                                test: o.b.getConfig("debug") ? 1 : 0,
                                                cur: ["USD"],
                                                source: {
                                                    tid: t.transactionId
                                                },
                                                tmax: o.b.getConfig("TTL") || 1e3,
                                                imp: [{
                                                    exp: 300,
                                                    id: t.adUnitCode,
                                                    secure: l() || t.params.secure ? 1 : 0,
                                                    ext: {
                                                        rubicon: t.params
                                                    },
                                                    video: r.deepAccess(t, "mediaTypes.video") || {}
                                                }],
                                                ext: {
                                                    prebid: {
                                                        cache: {
                                                            vastxml: {
                                                                returnCreative: !1
                                                            }
                                                        },
                                                        targeting: {
                                                            includewinners: !0,
                                                            includebidderkeys: !1,
                                                            pricegranularity: I(o.b)
                                                        }
                                                    }
                                                }
                                            },
                                            i = parseFloat(r.deepAccess(t, "params.floor"));
                                        isNaN(i) || (n.imp[0].bidfloor = i),
                                            n.imp[0].ext.rubicon.video.size_id = S(t),
                                            function (t, e, n) {
                                                t && ("object" === u(o.b.getConfig("app")) ? t.app = o.b.getConfig("app") : t.site = {
                                                        page: y(e, n)
                                                    },
                                                    "object" === u(o.b.getConfig("device")) && (t.device = o.b.getConfig("device")), e.params.video.language && ["site", "device"].forEach(function (n) {
                                                        t[n] && (t[n].content = c({
                                                                language: e.params.video.language
                                                            },
                                                            t[n].content))
                                                    }))
                                            }(n, t, e),
                                            function (t, e) {
                                                "object" === u(t.imp[0].video) && void 0 === t.imp[0].video.skip && (t.imp[0].video.skip = e.params.video.skip),
                                                    "object" === u(t.imp[0].video) && void 0 === t.imp[0].video.skipafter && (t.imp[0].video.skipafter = e.params.video.skipdelay),
                                                    "object" === u(t.imp[0].video) && void 0 === t.imp[0].video.pos && (t.imp[0].video.pos = "atf" === e.params.position ? 1 : "btf" === e.params.position ? 3 : 0);
                                                var n = b(e, "video");
                                                t.imp[0].video.w = n[0],
                                                    t.imp[0].video.h = n[1]
                                            }(n, t);
                                        var a, s = v(t, "PREBID_SERVER");
                                        return s && r.deepSetValue(n, "user.ext.digitrust", s),
                                            e.gdprConsent && ("boolean" == typeof e.gdprConsent.gdprApplies && (a = e.gdprConsent.gdprApplies ? 1 : 0), n.regs ? n.regs.ext ? n.regs.ext.gdpr = a : n.regs.ext = {
                                                    gdpr: a
                                                } : n.regs = {
                                                    ext: {
                                                        gdpr: a
                                                    }
                                                },
                                                r.deepSetValue(n, "user.ext.consent", e.gdprConsent.consentString)),
                                            t.userId && "object" === u(t.userId) && (t.userId.tdid || t.userId.pubcid) && (r.deepSetValue(n, "user.ext.eids", []), t.userId.tdid && n.user.ext.eids.push({
                                                source: "adserver.org",
                                                uids: [{
                                                    id: t.userId.tdid,
                                                    ext: {
                                                        rtiPartner: "TDID"
                                                    }
                                                }]
                                            }), t.userId.pubcid && n.user.ext.eids.push({
                                                source: "pubcommon",
                                                uids: [{
                                                    id: t.userId.pubcid
                                                }]
                                            })),
                                            !0 === o.b.getConfig("coppa") && r.deepSetValue(request, "regs.coppa", 1), {
                                                method: "POST",
                                                url: p,
                                                data: n,
                                                bidRequest: t
                                            }
                                    });
                                if (!0 !== o.b.getConfig("rubicon.singleRequest")) n = i.concat(t.filter(function (t) {
                                    return "banner" === _(t)
                                }).map(function (t) {
                                    var n = A.createSlotParams(t, e);
                                    return {
                                        method: "GET",
                                        url: f,
                                        data: A.getOrderedParams(n).reduce(function (t, e) {
                                                var i = n[e];
                                                return r.isStr(i) && "" !== i || r.isNumber(i) ? "".concat(t).concat(e, "=").concat(encodeURIComponent(i), "&") : t
                                            },
                                            "") + "slots=1&rand=".concat(Math.random()),
                                        bidRequest: t
                                    }
                                }));
                                else {
                                    var a = t.filter(function (t) {
                                        return "banner" === _(t)
                                    }).reduce(function (t, e) {
                                        return (t[e.params.siteId] = t[e.params.siteId] || []).push(e),
                                            t
                                    }, {});
                                    n = i.concat(Object.keys(a).reduce(function (t, n) {
                                        return (i = a[n], i.map(function (t, e) {
                                                return e % 10 == 0 ? i.slice(e, e + 10) : null
                                            }).filter(function (t) {
                                                return t
                                            })).forEach(function (n) {
                                                var i = A.combineSlotUrlParams(n.map(function (t) {
                                                    return A.createSlotParams(t, e)
                                                }));
                                                t.push({
                                                    method: "GET",
                                                    url: f,
                                                    data: A.getOrderedParams(i).reduce(function (t, e) {
                                                            var n = i[e];
                                                            return r.isStr(n) && "" !== n || r.isNumber(n) ? "".concat(t).concat(e, "=").concat(encodeURIComponent(n), "&") : t
                                                        },
                                                        "") + "slots=".concat(n.length, "&rand=").concat(Math.random()),
                                                    bidRequest: n
                                                })
                                            }),
                                            t;
                                        var i
                                    }, []))
                                }
                                return n
                            },
                            getOrderedParams: function (t) {
                                var e = /^tg_v/,
                                    n = /^tg_i/,
                                    r = ["tpid_tdid", "account_id", "site_id", "zone_id", "size_id", "alt_size_ids", "p_pos", "gdpr", "gdpr_consent", "rf", "dt.id", "dt.keyv", "dt.pref", "p_geo.latitude", "p_geo.longitude", "kw"].concat(Object.keys(t).filter(function (t) {
                                        return e.test(t)
                                    })).concat(Object.keys(t).filter(function (t) {
                                        return n.test(t)
                                    })).concat(["tk_flint", "x_source.tid", "p_screen_res", "rp_floor", "rp_secure", "tk_user_key"]);
                                return r.concat(Object.keys(t).filter(function (t) {
                                    return -1 === r.indexOf(t)
                                }))
                            },
                            combineSlotUrlParams: function (t) {
                                if (1 === t.length) return t[0];
                                var e = t.reduce(function (e, n, r) {
                                        return Object.keys(n).forEach(function (i) {
                                                e.hasOwnProperty(i) || (e[i] = new Array(t.length)),
                                                    e[i].splice(r, 1, n[i])
                                            }),
                                            e
                                    }, {}),
                                    n = new RegExp("^([^;]*)(;\\1)+$");
                                return Object.keys(e).forEach(function (t) {
                                        var r = e[t].join(";"),
                                            i = r.match(n);
                                        e[t] = i ? i[1] : r
                                    }),
                                    e
                            },
                            createSlotParams: function (t, e) {
                                t.startTime = (new Date).getTime();
                                var n = t.params,
                                    r = b(t, "banner"),
                                    i = d(n.latLong || [], 2),
                                    a = i[0],
                                    s = i[1],
                                    f = o.b.getConfig("rubicon.int_type"),
                                    p = {
                                        account_id: n.accountId,
                                        site_id: n.siteId,
                                        zone_id: n.zoneId,
                                        size_id: r[0],
                                        alt_size_ids: r.slice(1).join(",") || void 0,
                                        p_pos: "atf" === n.position || "btf" === n.position ? n.position : "unknown",
                                        rp_floor: .01 < (n.floor = parseFloat(n.floor)) ? n.floor : .01,
                                        rp_secure: l() ? "1" : "0",
                                        tk_flint: "".concat(f || "pbjs_lite", "_v2.27.0"),
                                        "x_source.tid": t.transactionId,
                                        p_screen_res: [window.screen.width, window.screen.height].join("x"),
                                        kw: Array.isArray(n.keywords) ? n.keywords.join(",") : "",
                                        tk_user_key: n.userId,
                                        "p_geo.latitude": isNaN(parseFloat(a)) ? void 0 : parseFloat(a).toFixed(4),
                                        "p_geo.longitude": isNaN(parseFloat(s)) ? void 0 : parseFloat(s).toFixed(4),
                                        "tg_fl.eid": t.code,
                                        rf: y(t, e)
                                    };
                                (t.userId || {}).tdid && (p.tpid_tdid = t.userId.tdid),
                                    e.gdprConsent && ("boolean" == typeof e.gdprConsent.gdprApplies && (p.gdpr = Number(e.gdprConsent.gdprApplies)), p.gdpr_consent = e.gdprConsent.consentString),
                                    null !== n.visitor && "object" === u(n.visitor) && Object.keys(n.visitor).forEach(function (t) {
                                        null != n.visitor[t] && (p["tg_v.".concat(t)] = n.visitor[t].toString())
                                    }),
                                    null !== n.inventory && "object" === u(n.inventory) && Object.keys(n.inventory).forEach(function (t) {
                                        null != n.inventory[t] && (p["tg_i.".concat(t)] = n.inventory[t].toString())
                                    });
                                var m = v(t, "FASTLANE");
                                return c(p, m),
                                    !0 === o.b.getConfig("coppa") && (p.coppa = 1),
                                    p
                            },
                            interpretResponse: function (t, e) {
                                var n = e.bidRequest;
                                if (!(t = t.body) || "object" !== u(t)) return [];
                                if (t.seatbid) {
                                    var i = r.deepAccess(t, "ext.errors.rubicon");
                                    Array.isArray(i) && 0 < i.length && i.forEach(function (t) {
                                        r.logError("Got error from PBS Java openRTB: " + t)
                                    });
                                    var s = [];
                                    return t.seatbid.forEach(function (e) {
                                            (e.bid || []).forEach(function (i) {
                                                var c = {
                                                    requestId: n.bidId,
                                                    currency: t.cur || "USD",
                                                    creativeId: i.crid,
                                                    cpm: i.price || 0,
                                                    bidderCode: e.seat,
                                                    ttl: 300,
                                                    netRevenue: o.b.getConfig("rubicon.netRevenue") || !1,
                                                    width: i.w || r.deepAccess(n, "mediaTypes.video.w") || r.deepAccess(n, "params.video.playerWidth"),
                                                    height: i.h || r.deepAccess(n, "mediaTypes.video.h") || r.deepAccess(n, "params.video.playerHeight")
                                                };
                                                i.dealid && (c.dealId = i.dealid);
                                                var d = r.deepAccess(t, "ext.responsetimemillis.rubicon");
                                                if (n && d && (n.serverResponseTimeMs = d), r.deepAccess(i, "ext.prebid.type") === a.d) {
                                                    c.mediaType = a.d;
                                                    var l = r.deepAccess(i, "ext.prebid.targeting");
                                                    l && "object" === u(l) && (c.adserverTargeting = l),
                                                        i.ext.prebid.cache && "object" === u(i.ext.prebid.cache.vastXml) && i.ext.prebid.cache.vastXml.cacheId && i.ext.prebid.cache.vastXml.url ? (c.videoCacheKey = i.ext.prebid.cache.vastXml.cacheId, c.vastUrl = i.ext.prebid.cache.vastXml.url) : l && l.hb_uuid && l.hb_cache_host && l.hb_cache_path && (c.videoCacheKey = l.hb_uuid, c.vastUrl = "https://".concat(l.hb_cache_host).concat(l.hb_cache_path, "?uuid=").concat(l.hb_uuid)),
                                                        i.adm && (c.vastXml = i.adm),
                                                        i.nurl && (c.vastUrl = i.nurl),
                                                        !c.vastUrl && i.nurl && (c.vastUrl = i.nurl)
                                                } else r.logError("Prebid Server Java openRTB returns response with media type other than video for video request.");
                                                s.push(c)
                                            })
                                        }),
                                        s
                                }
                                var c = t.ads;
                                return "object" !== u(n) || Array.isArray(n) || "video" !== _(n) || "object" !== u(c) || (c = c[n.adUnitCode]),
                                    !Array.isArray(c) || c.length < 1 ? [] : c.reduce(function (e, i, s) {
                                            if ("ok" !== i.status) return e;
                                            var c = Array.isArray(n) ? n[s] : n;
                                            if (c && "object" === u(c)) {
                                                var l = {
                                                    requestId: c.bidId,
                                                    currency: "USD",
                                                    creativeId: i.creative_id || "".concat(i.network || "", "-").concat(i.advertiser || ""),
                                                    cpm: i.cpm || 0,
                                                    dealId: i.deal,
                                                    ttl: 300,
                                                    netRevenue: o.b.getConfig("rubicon.netRevenue") || !1,
                                                    rubicon: {
                                                        advertiserId: i.advertiser,
                                                        networkId: i.network
                                                    },
                                                    meta: {
                                                        advertiserId: i.advertiser,
                                                        networkId: i.network
                                                    }
                                                };
                                                if (i.creative_type && (l.mediaType = i.creative_type), i.creative_type === a.d) l.width = c.params.video.playerWidth,
                                                    l.height = c.params.video.playerHeight,
                                                    l.vastUrl = i.creative_depot_url,
                                                    l.impression_id = i.impression_id,
                                                    l.videoCacheKey = i.impression_id;
                                                else {
                                                    l.ad = function (t, e) {
                                                        return "<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='".concat(e, "'>\n<script type='text/javascript'>").concat(t, "<\/script>\n</div>\n</body>\n</html>")
                                                    }(i.script, i.impression_id);
                                                    var f = d(h[i.size_id].split("x").map(function (t) {
                                                        return Number(t)
                                                    }), 2);
                                                    l.width = f[0],
                                                        l.height = f[1]
                                                }
                                                l.rubiconTargeting = (Array.isArray(i.targeting) ? i.targeting : []).reduce(function (t, e) {
                                                        return t[e.key] = e.values[0],
                                                            t
                                                    }, {
                                                        rpfl_elemid: c.adUnitCode
                                                    }),
                                                    e.push(l)
                                            } else r.logError("Rubicon bid adapter Error: bidRequest undefined at index position:".concat(s), n, t);
                                            return e
                                        },
                                        []).sort(function (t, e) {
                                        return (e.cpm || 0) - (t.cpm || 0)
                                    })
                            },
                            getUserSyncs: function (t, e, n) {
                                if (!O && t.iframeEnabled) {
                                    var r = "";
                                    return n && "string" == typeof n.consentString && ("boolean" == typeof n.gdprApplies ? r += "?gdpr=".concat(Number(n.gdprApplies), "&gdpr_consent=").concat(n.consentString) : r += "?gdpr_consent=".concat(n.consentString)),
                                        O = !0, {
                                            type: "iframe",
                                            url: m + r
                                        }
                                }
                            },
                            transformBidParams: function (t, e) {
                                return r.convertTypes({
                                        accountId: "number",
                                        siteId: "number",
                                        zoneId: "number"
                                    },
                                    t)
                            }
                        };

                        function v(t, e) {
                            var n, i = 0 < arguments.length && void 0 !== t ? t : {},
                                a = 1 < arguments.length ? e : void 0;
                            if (!a || !g[a]) return null;
                            var c = g[a],
                                d = function () {
                                    var t = r.deepAccess(i, "userId.digitrustid.data");
                                    if (t) return t;
                                    var e = window.DigiTrust && (o.b.getConfig("digiTrustId") || window.DigiTrust.getUser({
                                        member: "T9QSFKPDN9"
                                    }));
                                    return e && e.success && e.identity || null
                                }();
                            if (!d || d.privacy && d.privacy.optout) return null;
                            var u = (s(n = {},
                                c.id, d.id), s(n, c.keyv, d.keyv), n);
                            return c.pref && (u[c.pref] = 0),
                                u
                        }

                        function y(t, e) {
                            var n = o.b.getConfig("pageUrl");
                            return n = t.params.referrer ? t.params.referrer : n || e.refererInfo.referer,
                                t.params.secure ? n.replace(/^http:/i, "https:") : n
                        }

                        function b(t, e) {
                            var n = t.params;
                            if ("video" === e) {
                                var i = [];
                                return n.video && n.video.playerWidth && n.video.playerHeight ? i = [n.video.playerWidth, n.video.playerHeight] : Array.isArray(r.deepAccess(t, "mediaTypes.video.playerSize")) && 1 === t.mediaTypes.video.playerSize.length ? i = t.mediaTypes.video.playerSize[0] : Array.isArray(t.sizes) && 0 < t.sizes.length && Array.isArray(t.sizes[0]) && 1 < t.sizes[0].length && (i = t.sizes[0]),
                                    i
                            }
                            var o = [];
                            return Array.isArray(n.sizes) ? o = n.sizes : void 0 !== r.deepAccess(t, "mediaTypes.banner.sizes") ? o = w(t.mediaTypes.banner.sizes) : Array.isArray(t.sizes) && 0 < t.sizes.length ? o = w(t.sizes) : r.logWarn("Warning: no sizes are setup or found"),
                                T(o)
                        }

                        function w(t) {
                            return r.parseSizesInput(t).reduce(function (t, e) {
                                    var n = parseInt(h[e], 10);
                                    return n && t.push(n),
                                        t
                                },
                                [])
                        }

                        function E(t) {
                            return "object" === u(r.deepAccess(t, "params.video")) && void 0 !== r.deepAccess(t, "mediaTypes.".concat(a.d))
                        }

                        function _(t, e) {
                            var n = 1 < arguments.length && void 0 !== e && e;
                            return E(t) ? -1 === ["outstream", "instream"].indexOf(r.deepAccess(t, "mediaTypes.".concat(a.d, ".context"))) ? void(n && r.logError("Rubicon bid adapter requires mediaTypes.video.context to be one of outstream or instream")) : b(t, "video").length < 2 ? void(n && r.logError("Rubicon bid adapter could not determine the playerSize of the video\nplayerWidth and playerHeight are inferred from one of params.playerWidth/playerHeight or mediaTypes.video.playerSize or adUnit.sizes, in that order")) : (n && r.logMessage("Rubicon bid adapter making video request for adUnit", t.adUnitCode), "video") : 0 === b(t, "banner").length ? void(n && r.logError("Rubicon bid adapter could not determine the sizes for a banner request\nThey are inferred from one of params.sizes or mediaTypes.banner.sizes or adUnit.sizes, in that order")) : (n && r.logMessage("Rubicon bid adapter making banner request for adUnit", t.adUnitCode), "banner")
                        }

                        function T(t) {
                            var e = [15, 2, 9];
                            return t.sort(function (t, n) {
                                var r = e.indexOf(t),
                                    i = e.indexOf(n);
                                return -1 < r || -1 < i ? -1 === r ? 1 : -1 === i ? -1 : r - i : t - n
                            })
                        }

                        function S(t) {
                            var e = parseInt(r.deepAccess(t, "params.video.size_id"));
                            return isNaN(e) ? "outstream" === r.deepAccess(t, "mediaTypes.".concat(a.d, ".context")) ? 203 : 201 : e
                        }

                        function I(t) {
                            return {
                                ranges: {
                                    low: [{
                                        max: 5,
                                        increment: .5
                                    }],
                                    medium: [{
                                        max: 20,
                                        increment: .1
                                    }],
                                    high: [{
                                        max: 20,
                                        increment: .01
                                    }],
                                    auto: [{
                                            max: 5,
                                            increment: .05
                                        },
                                        {
                                            min: 5,
                                            max: 10,
                                            increment: .1
                                        },
                                        {
                                            min: 10,
                                            max: 20,
                                            increment: .5
                                        }
                                    ],
                                    dense: [{
                                            max: 3,
                                            increment: .01
                                        },
                                        {
                                            min: 3,
                                            max: 8,
                                            increment: .05
                                        },
                                        {
                                            min: 8,
                                            max: 20,
                                            increment: .5
                                        }
                                    ],
                                    custom: t.getConfig("customPriceBucket") && t.getConfig("customPriceBucket").buckets
                                } [t.getConfig("priceGranularity")]
                            }
                        }

                        function k(t) {
                            var e = !0,
                                n = Object.prototype.toString.call([]),
                                i = Object.prototype.toString.call(0),
                                o = {
                                    mimes: n,
                                    protocols: n,
                                    maxduration: i,
                                    linearity: i,
                                    api: n
                                };
                            return Object.keys(o).forEach(function (n) {
                                    Object.prototype.toString.call(r.deepAccess(t, "mediaTypes.video." + n)) !== o[n] && (e = !1, r.logError("Rubicon Bid Adapter: mediaTypes.video." + n + " is required and must be of type: " + o[n]))
                                }),
                                e
                        }
                        var O = !1;
                        Object(i.registerBidder)(A)
                    }
                },
                [510]),
            pbjsChunk([73], {
                    558: function (t, e, n) {
                        t.exports = n(559)
                    },
                    559: function (t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                                value: !0
                            }),
                            n.d(e, "spec",
                                function () {
                                    return d
                                });
                        var r = n(0),
                            i = n(12),
                            o = n(1),
                            a = n(2);

                        function s(t) {
                            return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                                function (t) {
                                    return typeof t
                                } : function (t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                })(t)
                        }
                        var c = "spotx",
                            d = {
                                code: c,
                                aliases: ["spotx"],
                                supportedMediaTypes: [a.d],
                                isBidRequestValid: function (t) {
                                    if (t && "object" !== s(t.params)) return r.logError(c + ": params is not defined or is incorrect in the bidder settings."),
                                        !1;
                                    if (!r.deepAccess(t, "mediaTypes.video")) return r.logError(c + ": mediaTypes.video is not present in the bidder settings."),
                                        !1;
                                    var e = r.deepAccess(t, "mediaTypes.video.playerSize");
                                    if (!e || !r.isArray(e)) return r.logError(c + ": mediaTypes.video.playerSize is not defined in the bidder settings."),
                                        !1;
                                    if (!r.getBidIdParameter("channel_id", t.params)) return r.logError(c + ": channel_id is not present in bidder params"),
                                        !1;
                                    if (("outstream" == r.deepAccess(t, "mediaTypes.video.context") || "outstream" == r.deepAccess(t, "params.ad_unit")) && !r.getBidIdParameter("outstream_function", t.params)) {
                                        if (!r.getBidIdParameter("outstream_options", t.params)) return r.logError(c + ": please define outstream_options parameter or override the default SpotX outstream rendering by defining your own Outstream function using field outstream_function."),
                                            !1;
                                        if (!r.getBidIdParameter("slot", t.params.outstream_options)) return r.logError(c + ": please define parameters slot outstream_options object in the configuration."),
                                            !1
                                    }
                                    return !0
                                },
                                buildRequests: function (t, e) {
                                    var n = e.refererInfo.referer,
                                        i = !!n.match(/^https:/);
                                    return t.map(function (t) {
                                        var o = r.getBidIdParameter("channel_id", t.params),
                                            a = null,
                                            s = r.deepAccess(t, "mediaTypes.video.playerSize"),
                                            c = s[0][0],
                                            d = s[0][1],
                                            u = i || (r.getBidIdParameter("secure", t.params) ? 1 : 0),
                                            l = {
                                                sdk_name: "Prebid 1+",
                                                versionOrtb: "2.3"
                                            };
                                        if ("" != r.getBidIdParameter("hide_skin", t.params) && (l.hide_skin = +!!r.getBidIdParameter("hide_skin", t.params)), "" != r.getBidIdParameter("ad_volume", t.params) && (l.ad_volume = r.getBidIdParameter("ad_volume", t.params)), "" != r.getBidIdParameter("ad_unit", t.params) && (l.ad_unit = r.getBidIdParameter("ad_unit", t.params)), "" != r.getBidIdParameter("outstream_options", t.params) && (l.outstream_options = r.getBidIdParameter("outstream_options", t.params)), "" != r.getBidIdParameter("outstream_function", t.params) && (l.outstream_function = r.getBidIdParameter("outstream_function", t.params)), "" != r.getBidIdParameter("custom", t.params) && (l.custom = r.getBidIdParameter("custom", t.params)), "" != r.getBidIdParameter("pre_market_bids", t.params) && r.isArray(r.getBidIdParameter("pre_market_bids", t.params))) {
                                            var f = r.getBidIdParameter("pre_market_bids", t.params);
                                            for (var p in l.pre_market_bids = [], f) {
                                                var m = f[p],
                                                    g = "";
                                                m.vast_url ? g = '<?xml version="1.0" encoding="utf-8"?><VAST version="2.0"><Ad><Wrapper><VASTAdTagURI>' + m.vast_url + "</VASTAdTagURI></Wrapper></Ad></VAST>" : m.vast_string && (g = m.vast_string),
                                                    l.pre_market_bids.push({
                                                        id: m.deal_id,
                                                        seatbid: [{
                                                            bid: [{
                                                                impid: Date.now(),
                                                                dealid: m.deal_id,
                                                                price: m.price,
                                                                adm: g
                                                            }]
                                                        }],
                                                        cur: m.currency,
                                                        ext: {
                                                            event_log: [{}]
                                                        }
                                                    })
                                            }
                                        }
                                        var h = r.getBidIdParameter("mimes", t.params) || ["application/javascript", "video/mp4", "video/webm"],
                                            A = {
                                                id: t.bidId,
                                                secure: u,
                                                video: {
                                                    w: c,
                                                    h: d,
                                                    ext: l,
                                                    mimes: h
                                                }
                                            };
                                        "" != r.getBidIdParameter("price_floor", t.params) && (A.bidfloor = r.getBidIdParameter("price_floor", t.params)),
                                            "" != r.getBidIdParameter("start_delay", t.params) && (A.video.startdelay = 0 + Boolean(r.getBidIdParameter("start_delay", t.params))),
                                            t.crumbs && t.crumbs.pubcid && (a = t.crumbs.pubcid);
                                        var v = navigator.language ? "language" : "userLanguage",
                                            y = {
                                                h: screen.height,
                                                w: screen.width,
                                                dnt: r.getDNT() ? 1 : 0,
                                                language: navigator[v].split("-")[0],
                                                make: navigator.vendor ? navigator.vendor : "",
                                                ua: navigator.userAgent
                                            },
                                            b = {
                                                id: o,
                                                imp: A,
                                                site: {
                                                    id: "",
                                                    page: n,
                                                    content: "content"
                                                },
                                                device: y,
                                                ext: {
                                                    wrap_response: 1
                                                }
                                            };
                                        r.getBidIdParameter("number_of_ads", t.params) && (b.ext.number_of_ads = r.getBidIdParameter("number_of_ads", t.params));
                                        var w = {};
                                        return e && e.gdprConsent && (w.consent = e.gdprConsent.consentString, void 0 !== e.gdprConsent.gdprApplies && (b.regs = {
                                                ext: {
                                                    gdpr: e.gdprConsent.gdprApplies ? 1 : 0
                                                }
                                            })),
                                            a && (w.fpc = a),
                                            r.isEmpty(w) || (b.user = {
                                                ext: w
                                            }), {
                                                method: "POST",
                                                url: "//search.spotxchange.com/openrtb/2.3/dados/" + o,
                                                data: b,
                                                bidRequest: e
                                            }
                                    })
                                },
                                interpretResponse: function (t, e) {
                                    var n = [],
                                        o = t.body;
                                    return o && r.isArray(o.seatbid) && r._each(o.seatbid,
                                            function (t) {
                                                r._each(t.bid,
                                                    function (t) {
                                                        var s = {};
                                                        for (var c in e.bidRequest.bids) t.impid == e.bidRequest.bids[c].bidId && (s = e.bidRequest.bids[c]);
                                                        r._each(s.params.pre_market_bids,
                                                            function (e) {
                                                                e.deal_id == t.id && (t.price = e.price, o.cur = e.currency)
                                                            });
                                                        var d = {
                                                                requestId: s.bidId,
                                                                currency: o.cur || "USD",
                                                                cpm: t.price,
                                                                creativeId: t.crid || "",
                                                                ttl: 360,
                                                                netRevenue: !0,
                                                                channel_id: o.id,
                                                                cache_key: t.ext.cache_key,
                                                                vastUrl: "//search.spotxchange.com/ad/vast.html?key=" + t.ext.cache_key,
                                                                mediaType: a.d,
                                                                width: t.w,
                                                                height: t.h
                                                            },
                                                            l = r.deepAccess(s, "mediaTypes.video.context"),
                                                            f = r.deepAccess(s, "params.ad_unit");
                                                        if ("outstream" == l || "outstream" == f) {
                                                            var p = r.deepAccess(s, "mediaTypes.video.playerSize"),
                                                                m = i.a.install({
                                                                    id: 0,
                                                                    url: "//",
                                                                    config: {
                                                                        adText: "SpotX Outstream Video Ad via Prebid.js",
                                                                        player_width: p[0][0],
                                                                        player_height: p[0][1],
                                                                        content_page_url: r.deepAccess(e, "data.site.page"),
                                                                        ad_mute: +!!r.deepAccess(s, "params.ad_mute"),
                                                                        hide_skin: +!!r.deepAccess(s, "params.hide_skin"),
                                                                        outstream_options: r.deepAccess(s, "params.outstream_options"),
                                                                        outstream_function: r.deepAccess(s, "params.outstream_function")
                                                                    }
                                                                });
                                                            try {
                                                                m.setRender(u),
                                                                    m.setEventHandlers({
                                                                        impression: function () {
                                                                            return r.logMessage("SpotX outstream video impression event")
                                                                        },
                                                                        loaded: function () {
                                                                            return r.logMessage("SpotX outstream video loaded event")
                                                                        },
                                                                        ended: function () {
                                                                            r.logMessage("SpotX outstream renderer video event")
                                                                        }
                                                                    })
                                                            } catch (s) {
                                                                r.logWarn("Prebid Error calling setRender or setEve,tHandlers on renderer", s)
                                                            }
                                                            d.renderer = m
                                                        }
                                                        n.push(d)
                                                    })
                                            }),
                                        n
                                }
                            };

                        function u(t) {
                            var e = function (t) {
                                var e = r.getBidIdParameter("slot", t.renderer.config.outstream_options);
                                r.logMessage("[SPOTX][renderer] Handle SpotX outstream renderer");
                                var n = window.document.createElement("script");
                                n.type = "text/javascript",
                                    n.src = "//js.spotx.tv/easi/v1/" + t.channel_id + ".js";
                                var i = {};
                                i["data-spotx_channel_id"] = "" + t.channel_id,
                                    i["data-spotx_vast_url"] = "" + t.vastUrl,
                                    i["data-spotx_content_page_url"] = t.renderer.config.content_page_url,
                                    i["data-spotx_ad_unit"] = "incontent",
                                    r.logMessage("[SPOTX][renderer] Default beahavior"),
                                    r.getBidIdParameter("ad_mute", t.renderer.config.outstream_options) && (i["data-spotx_ad_mute"] = "0"),
                                    i["data-spotx_collapse"] = "0",
                                    i["data-spotx_autoplay"] = "1",
                                    i["data-spotx_blocked_autoplay_override_mode"] = "1",
                                    i["data-spotx_video_slot_can_autoplay"] = "1";
                                var o = r.getBidIdParameter("playersize_auto_adapt", t.renderer.config.outstream_options);
                                if (o && r.isBoolean(o) && !0 === o)
                                    if (t.width && r.isNumber(t.width) && t.height && r.isNumber(t.height)) {
                                        var a, s = t.width / t.height,
                                            c = window.document.getElementById(e).clientWidth,
                                            d = t.renderer.config.player_width,
                                            u = t.renderer.config.player_height,
                                            l = 0;
                                        c < d && (u = (d = c) / s),
                                            a = s <= 1 ? (l = Math.round(u * s), u) : (l = d, Math.round(d / s)),
                                            i["data-spotx_content_width"] = "" + l,
                                            i["data-spotx_content_height"] = "" + a
                                    } else r.logWarn("[SPOTX][renderer] PlayerSize auto adapt: bid.width and bid.height are incorrect");
                                var f = r.getBidIdParameter("custom_override", t.renderer.config.outstream_options);
                                if (f && r.isPlainObject(f))
                                    for (var p in r.logMessage("[SPOTX][renderer] Custom beahavior."), f) f.hasOwnProperty(p) && ("channel_id" === p || "vast_url" === p || "content_page_url" === p || "ad_unit" === p ? r.logWarn("[SPOTX][renderer] Custom beahavior: following option cannot be overrided: " + p) : i["data-spotx_" + p] = f[p]);
                                for (var m in i) i.hasOwnProperty(m) && n.setAttribute(m, i[m]);
                                return n
                            }(t);
                            if (null != t.renderer.config.outstream_function && "function" == typeof t.renderer.config.outstream_function) t.renderer.config.outstream_function(t, e);
                            else try {
                                var n = r.getBidIdParameter("in_iframe", t.renderer.config.outstream_options);
                                if (n && "IFRAME" == window.document.getElementById(n).nodeName) {
                                    var i = window.document.getElementById(n),
                                        o = i.contentDocument;
                                    !o && i.contentWindow && (o = i.contentWindow.document),
                                        o.body.appendChild(e)
                                } else {
                                    var a = r.getBidIdParameter("slot", t.renderer.config.outstream_options);
                                    a && window.document.getElementById(a) ? window.document.getElementById(a).appendChild(e) : window.document.getElementsByTagName("head")[0].appendChild(e)
                                }
                            } catch (t) {
                                r.logError("[SPOTX][renderer] Error:" + t.message)
                            }
                        }
                        Object(o.registerBidder)(d)
                    }
                },
                [558]),
            pbjsChunk([1], {
                    598: function (t, e, n) {
                        t.exports = n(599)
                    },
                    599: function (t, e, n) {
                        "use strict";
                        Object.defineProperty(e, "__esModule", {
                                value: !0
                            }),
                            n.d(e, "syncDelay",
                                function () {
                                    return i
                                }),
                            e.setSubmoduleRegistry = function (t) {
                                I = t
                            },
                            e.requestBidsHook = D,
                            e.attachIdSystem = R,
                            e.init = j;
                        var r, i, o = n(11),
                            a = n.n(o),
                            s = n(3),
                            c = n(8),
                            d = n.n(c),
                            u = n(0),
                            l = n(38),
                            f = n(7),
                            p = n(4),
                            m = n.n(p),
                            g = n(13),
                            h = n(600),
                            A = n(601),
                            v = "User ID",
                            y = "cookie",
                            b = "html5",
                            w = 500,
                            E = [],
                            _ = !1,
                            T = [],
                            S = [],
                            I = [];

                        function k(t, e, n) {
                            try {
                                var r = u.isPlainObject(e) ? JSON.stringify(e) : e,
                                    i = new Date(Date.now() + 864e5 * n).toUTCString();
                                t.type === y ? u.setCookie(t.name, r, i) : t.type === b && (localStorage.setItem("".concat(t.name, "_exp"), i), localStorage.setItem(t.name, encodeURIComponent(r)))
                            } catch (t) {
                                u.logError(t)
                            }
                        }

                        function O(t) {
                            t.forEach(function (t) {
                                t.callback(function (e) {
                                    t.callback = void 0,
                                        e ? (t.config.storage && k(t.config.storage, e, t.config.storage.expires), t.idObj = t.submodule.decode(e)) : u.logError("".concat(v, ": ").concat(t.submodule.name, " - request id responded with an empty value"))
                                })
                            })
                        }

                        function C(t) {
                            return Array.isArray(t) && t.length ? t.filter(function (t) {
                                return u.isPlainObject(t.idObj) && Object.keys(t.idObj).length
                            }).reduce(function (t, e) {
                                return Object.keys(e.idObj).forEach(function (n) {
                                        t[n] = e.idObj[n]
                                    }),
                                    t
                            }, {}) : {}
                        }

                        function x() {
                            if (void 0 === r && (e = T, n = f.gdprDataHandler.getConsentData(), r = function (t) {
                                    if (t && "boolean" == typeof t.gdprApplies && t.gdprApplies) {
                                        if (!t.consentString) return !1;
                                        if (t.vendorData && t.vendorData.purposeConsents && !1 === t.vendorData.purposeConsents[1]) return !1
                                    }
                                    return !0
                                }(n) ? e.reduce(function (t, e) {
                                        if (e.config.storage) {
                                            var r = function (t) {
                                                var e;
                                                try {
                                                    if (t.type === y) e = u.getCookie(t.name);
                                                    else if (t.type === b) {
                                                        var n = localStorage.getItem("".concat(t.name, "_exp"));
                                                        "" === n ? e = localStorage.getItem(t.name) : n && 0 < new Date(n).getTime() - Date.now() && (e = decodeURIComponent(localStorage.getItem(t.name)))
                                                    }
                                                    "string" == typeof e && "{" === e.charAt(0) && (e = JSON.parse(e))
                                                } catch (t) {
                                                    u.logError(t)
                                                }
                                                return e
                                            }(e.config.storage);
                                            if (r) e.idObj = e.submodule.decode(r);
                                            else {
                                                var i = e.submodule.getId(e.config.params, n);
                                                "function" == typeof i ? e.callback = i : (k(e.config.storage, i, e.config.storage.expires), e.idObj = e.submodule.decode(i))
                                            }
                                        } else if (e.config.value) e.idObj = e.config.value;
                                        else {
                                            var o = e.submodule.getId(e.config.params, n);
                                            "function" == typeof o ? e.callback = o : e.idObj = e.submodule.decode()
                                        }
                                        return t.push(e),
                                            t
                                    },
                                    []) : (u.logWarn("".concat(v, " - gdpr permission not valid for local storage or cookies, exit module")), [])).length) {
                                var t = r.filter(function (t) {
                                    return u.isFn(t.callback)
                                });
                                t.length && d.a.on(m.a.EVENTS.AUCTION_END,
                                    function e() {
                                        d.a.off(m.a.EVENTS.AUCTION_END, e),
                                            0 < i ? setTimeout(function () {
                                                    O(t)
                                                },
                                                i) : O(t)
                                    })
                            }
                            var e, n
                        }

                        function D(t, e) {
                            return x(),
                                function (t, e) {
                                    if (![t].some(function (t) {
                                            return !Array.isArray(t) || !t.length
                                        })) {
                                        var n = C(e);
                                        Object.keys(n).length && t.forEach(function (t) {
                                            t.bids.forEach(function (t) {
                                                t.userId = n
                                            })
                                        })
                                    }
                                }(e.adUnits || Object(l.a)().adUnits, r),
                                t.call(this, e)
                        }

                        function P() {
                            return x(),
                                C(r)
                        }

                        function B() {
                            var t = function (t, e, n) {
                                return Array.isArray(t) ? t.reduce(function (t, e) {
                                        return !e || u.isEmptyStr(e.name) || (!e.storage || u.isEmptyStr(e.storage.type) || u.isEmptyStr(e.storage.name) || -1 === n.indexOf(e.storage.type) ? u.isPlainObject(e.value) ? t.push(e) : e.storage || e.value || t.push(e) : t.push(e)),
                                            t
                                    },
                                    []) : []
                            }(S, 0, E);
                            if (t.length) {
                                var e = I.filter(function (t) {
                                    return !a()(T,
                                        function (e) {
                                            return e.name === t.name
                                        })
                                });
                                T = e.map(function (e) {
                                        var n = a()(t,
                                            function (t) {
                                                return t.name === e.name
                                            });
                                        return n ? {
                                            submodule: e,
                                            config: n,
                                            callback: void 0,
                                            idObj: void 0
                                        } : null
                                    }).filter(function (t) {
                                        return null !== t
                                    }),
                                    !_ && T.length && (Object(l.a)().requestBids.before(D, 40), u.logInfo("".concat(v, " - usersync config updated for ").concat(T.length, " submodules")), _ = !0)
                            }
                        }

                        function R(t) {
                            a()(I,
                                function (e) {
                                    return e.name === t.name
                                }) || (I.push(t), B())
                        }

                        function j(t) {
                            T = [],
                                _ = !(S = []),
                                r = void 0,
                                -1 !== (E = [u.localStorageIsEnabled() ? b : null, u.cookiesAreEnabled() ? y : null].filter(function (t) {
                                    return null !== t
                                })).indexOf(y) && u.getCookie("_pbjs_id_optout") ? u.logInfo("".concat(v, " - opt-out cookie found, exit module")) : -1 === E.indexOf(b) || !localStorage.getItem("_pbjs_id_optout") && !localStorage.getItem("_pubcid_optout") ? (t.getConfig(function (t) {
                                    var e = t.userSync || t.usersync;
                                    e && e.userIds && (S = e.userIds, i = u.isNumber(e.syncDelay) ? e.syncDelay : w, B())
                                }), Object(l.a)().getUserIds = P) : u.logInfo("".concat(v, " - opt-out localStorage found, exit module"))
                        }
                        j(s.b),
                            R(A.a),
                            R(h.a),
                            Object(g.c)("userId", R)
                    },
                    600: function (t, e, n) {
                        "use strict";
                        n.d(e, "a",
                            function () {
                                return o
                            });
                        var r = n(0),
                            i = n(5),
                            o = {
                                name: "unifiedId",
                                decode: function (t) {
                                    return t && "string" == typeof t.TDID ? {
                                        tdid: t.TDID
                                    } : void 0
                                },
                                getId: function (t) {
                                    if (t && ("string" == typeof t.partner || "string" == typeof t.url)) {
                                        var e = t.url || "//match.adsrvr.org/track/rid?ttd_pid=".concat(t.partner, "&fmt=json");
                                        return function (t) {
                                            Object(i.a)(e,
                                                function (e) {
                                                    var n;
                                                    if (e) try {
                                                        n = JSON.parse(e)
                                                    } catch (e) {
                                                        r.logError(e)
                                                    }
                                                    t(n)
                                                },
                                                void 0, {
                                                    method: "GET"
                                                })
                                        }
                                    }
                                    r.logError("User ID - unifiedId submodule requires either partner or url to be defined")
                                }
                            }
                    },
                    601: function (t, e, n) {
                        "use strict";
                        n.d(e, "a",
                            function () {
                                return o
                            });
                        var r = n(0);

                        function i(t) {
                            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                                function (t) {
                                    return typeof t
                                } : function (t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                })(t)
                        }
                        var o = {
                            name: "pubCommonId",
                            decode: function (t) {
                                return {
                                    pubcid: t
                                }
                            },
                            getId: function () {
                                var t;
                                try {
                                    "object" === i(window.PublisherCommonId) && (t = window.PublisherCommonId.getId())
                                } catch (t) {}
                                return t || r.generateUUID()
                            }
                        }
                    }
                },
                [598]),
            pbjs.processQueue()
    },
    function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(38),
            i = n.n(r),
            o = n(39),
            a = n.n(o);
        n(75),
            n(76);
        void 0 === Object.assign && (Object.assign = i.a),
            "undefined" == typeof Promise && (window.Promise = a.a);
        var s = {
                ready: "pokiAppReady",
                uninitialized: "pokiAppUninitialized",
                adblocked: "pokiAppAdblocked",
                ads: {
                    completed: "pokiAdsCompleted",
                    error: "pokiAdsError",
                    adblocked: "pokiAdsAdBlocked",
                    impression: "pokiAdsImpression",
                    durationChange: "pokiAdsDurationChange",
                    limit: "pokiAdsLimit",
                    ready: "pokiAdsReady",
                    requested: "pokiAdsRequested",
                    skipped: "pokiAdsSkipped",
                    started: "pokiAdsStarted",
                    stopped: "pokiAdsStopped",
                    update: "pokiAdsUpdate",
                    rewarded: "pokiAdsRewarded",
                    busy: "pokiAdsBusy",
                    position: {
                        preroll: "PP",
                        midroll: "PM",
                        rewarded: "PR"
                    },
                    video: {
                        clicked: "pokiVideoAdsClicked",
                        firstQuartile: "pokiVideoAdsFirstQuartile",
                        midPoint: "pokiVideoAdsMidPoint",
                        thirdQuartile: "pokiVideoAdsThirdQuartile",
                        userClose: "pokiVideoAdsUserClose",
                        error: "pokiVideoAdsError",
                        paused: "pokiVideoAdsPauseTriggered",
                        resumed: "pokiVideoAdsResumedTriggered",
                        progress: "pokiVideoAdsProgress"
                    },
                    timings: {
                        timePerTry: "pokiAdsTimePerTry",
                        timeBetweenAds: "pokiAdsTimeBetweenAds",
                        startAdsAfter: "pokiAdsStartAdsAfter"
                    },
                    type: {
                        video: "pokiAdsTypeVideo",
                        display: "pokiAdsTypeDisplay"
                    },
                    raw: "rawIMAEvent",
                    rawError: "rawIMAErrorEvent"
                },
                info: {
                    messages: {
                        timeLimit: "The ad-request was not processed, because of a time constraint",
                        prerollLimit: "The ad-request was cancelled, because we're not allowed to show a preroll"
                    }
                },
                message: {
                    event: "pokiMessageEvent",
                    gameState: "pokiMessageGameState",
                    sdkDetails: "pokiMessageSdkDetails",
                    toggleProgrammaticAds: "pokiMessageToggleProgrammaticAds",
                    debug: "pokiMessageDebug"
                },
                tracking: {
                    custom: "pokiTrackingCustom",
                    setPlayerAge: "pokiTrackingSetPlayerAge",
                    togglePlayerAdvertisingConsent: "pokiTrackingTogglePlayerAdvertisingConsent",
                    screen: {
                        gameplayStart: "pokiTrackingScreenGameplayStart",
                        gameplayStop: "pokiTrackingScreenGameplayStop",
                        gameLoadingStarted: "pokiTrackingScreenGameLoadingStarted",
                        gameLoadingProgress: "pokiTrackingScreenGameLoadingProgress",
                        gameLoadingFinished: "pokiTrackingScreenGameLoadingFinished",
                        commercialBreak: "pokiTrackingScreenCommercialBreak",
                        rewardedBreak: "pokiTrackingScreenRewardedBreak",
                        happyTime: "pokiTrackingScreenHappyTime",
                        firstRound: "pokiTrackingScreenFirstRound",
                        roundStart: "pokiTrackingScreenRoundStart",
                        roundEnd: "pokiTrackingScreenRoundEnd",
                        gameInteractive: "pokiTrackingScreenGameInteractive"
                    },
                    sdk: {
                        status: {
                            initialized: "pokiTrackingSdkStatusInitialized",
                            failed: "pokiTrackingSdkStatusFailed"
                        }
                    },
                    ads: {
                        status: {
                            busy: "pokiTrackingAdsStatusBusy",
                            completed: "pokiTrackingAdsStatusCompleted",
                            error: "pokiTrackingAdsStatusError",
                            impression: "pokiTrackingAdsStatusImpression",
                            limit: "pokiTrackingAdsStatusLimit",
                            ready: "pokiTrackingAdsStatusReady",
                            requested: "pokiTrackingAdsStatusRequested",
                            skipped: "pokiTrackingAdsStatusSkipped",
                            started: "pokiTrackingAdsStatusStarted"
                        },
                        type: {
                            video: "pokiTrackingAdsTypeVideo",
                            display: "pokiTrackingAdsTypeDisplay"
                        }
                    }
                }
            },
            c = function () {
                function t() {}
                return t.clearEventListeners = function () {
                        this.listeners = {}
                    },
                    t.removeEventListener = function (t, e) {
                        if (Object.prototype.hasOwnProperty.call(this.listeners, t)) {
                            var n = this.listeners[t].indexOf(e); - 1 !== n && this.listeners[t].splice(n, 1)
                        }
                    },
                    t.addEventListener = function (t, e, n) {
                        var r = this;
                        if (void 0 === n && (n = !1), n = !!n, Object.prototype.hasOwnProperty.call(this.listeners, t) || (this.listeners[t] = []), n) {
                            var i = function (n) {
                                r.removeEventListener.bind(r)(t, i),
                                    e(n)
                            };
                            this.listeners[t].push(i)
                        } else this.listeners[t].push(e)
                    },
                    t.dispatchEvent = function (t, e) {
                        void 0 === e && (e = {}),
                            this.debug && console.info(t, e);
                        for (var n = Object.keys(this.listeners), r = 0; r < n.length; r++) {
                            var i = n[r];
                            if (t === i)
                                for (var o = this.listeners[i], a = 0; a < o.length; a++) o[a](e)
                        }
                    },
                    t.setDebug = function (t) {
                        this.debug = t
                    },
                    t.listeners = {},
                    t.debug = !1,
                    t
            }(),
            d = function (t, e) {
                var n = !1;
                return Object.keys(e).forEach(function (r) {
                        e[r] === t && (n = !0)
                    }),
                    n
            },
            u = function () {
                function t() {}
                return t.sendMessage = function (t, e) {
                        void 0 === e && (e = {});
                        var n = window.parent;
                        if (!d(t, s.message)) {
                            var r = Object.keys(s.message).map(function (t) {
                                return "poki.message." + t
                            });
                            throw new TypeError("Argument 'type' must be one of " + r.join(", "))
                        }
                        n.postMessage({
                                type: t,
                                content: e
                            },
                            "*")
                    },
                    t
            }(),
            l = function (t) {
                var e = new Array;
                return Object.keys(t).forEach(function (n) {
                        "object" == typeof t[n] ? e = e.concat(l(t[n])) : e.push(t[n])
                    }),
                    e
            },
            f = l(s.tracking),
            p = function () {
                function t() {}
                return t.setDebug = function (t) {
                        this.debug = t
                    },
                    t.track = function (t, e) {
                        if (void 0 === e && (e = {}), -1 === f.indexOf(t)) throw new TypeError("Invalid 'event', must be one of " + f.join(", "));
                        if ("object" != typeof e) throw new TypeError("Invalid data, must be an object");
                        this.debug && (Object.keys(e).length ? console.info("%cPOKI_TRACKER: %cTracked event '" + t + "' with data:", "font-weight: bold", "", e) : console.info("%cPOKI_TRACKER: %cTracked event '" + t + "'", "font-weight: bold", "")),
                            u.sendMessage(s.message.event, {
                                event: t,
                                data: e
                            })
                    },
                    t.setupDefaultEvents = function () {
                        var e, n = ((e = {})[s.ready] = s.tracking.sdk.status.initialized, e[s.adblocked] = s.tracking.sdk.status.failed, e[s.ads.busy] = s.tracking.ads.status.busy, e[s.ads.completed] = s.tracking.ads.status.completed, e[s.ads.error] = s.tracking.ads.status.error, e[s.ads.impression] = s.tracking.ads.status.impression, e[s.ads.limit] = s.tracking.ads.status.limit, e[s.ads.ready] = s.tracking.ads.status.ready, e[s.ads.requested] = s.tracking.ads.status.requested, e[s.ads.skipped] = s.tracking.ads.status.skipped, e[s.ads.started] = s.tracking.ads.status.started, e[s.ads.type.video] = s.tracking.ads.type.video, e[s.ads.type.display] = s.tracking.ads.type.display, e[s.tracking.screen.gameplayStart] = s.tracking.screen.gameplayStart, e[s.tracking.screen.gameplayStop] = s.tracking.screen.gameplayStop, e[s.tracking.screen.loadingProgress] = s.tracking.screen.loadingProgress, e[s.tracking.screen.commercialBreak] = s.tracking.screen.commercialBreak, e[s.tracking.screen.rewardedBreak] = s.tracking.screen.rewardedBreak, e[s.tracking.screen.happyTime] = s.tracking.screen.happyTime, e);
                        Object.keys(n).forEach(function (e) {
                            c.addEventListener(e,
                                function (r) {
                                    t.track(n[e], r)
                                })
                        })
                    },
                    t.trackCDNLeaks = function () {
                        if (void 0 !== window.fetch && !["megajatek.hu", "jeuxjeuxjeux.fr", "1001oyun.com", "poki.com", "poki.ro", "megaspel.se", "poki.de", "paisdelosjuegos.com.ar", "poki.it", "poki.dk", "123pelit.com", "poki.no", "moiteigri.com", "poki.pl", "hrajhry.sk", "poki.gr", "poki.com.br", "poki.cz", "trochoi.net", "poki.nl", "poki.be", "poki.pt", "paisdelosjuegos.cl", "paisdelosjuegos.com.mx", "paisdelosjuegos.com.co", "paisdelosjuegos.es", "jeuxjeuxjeux.ch", "spielyeti.ch", "poki.at", "paisdelosjuegos.com.uy", "paisdelosjuegos.com.pe", "paisdelosjuegos.com.ec", "paisdelosjuegos.co.ve", "paisdelosjuegos.com.do", "poki.by", "paisdelosjuegos.cr", "paisdelosjuegos.com.pa", "poki.cn", "poki.jp", "poki.co.il", "localhost"].some(function (t) {
                                return location.hostname.endsWith(t)
                            })) {
                            var t = location.ancestorOrigins;
                            if ((!document.referrer || 0 === document.referrer.length || "undefined" === document.referrer) && t) {
                                var e = {
                                    v: 6,
                                    c: "game-cdn-leaks",
                                    d: [{
                                            k: "useragent",
                                            v: navigator ? navigator.userAgent : ""
                                        },
                                        {
                                            k: "ancestor",
                                            v: JSON.stringify(t)
                                        },
                                        {
                                            k: "location",
                                            v: location.href
                                        }
                                    ]
                                };
                                window.fetch("https://t.pok123i.io/l", {
                                    method: "post",
                                    body: JSON.stringify(e),
                                    headers: {
                                        "Content-Type": "application/json"
                                    }
                                }).
                                catch()
                            }
                            var n = {
                                v: 6,
                                c: "poki-sdk-locations",
                                d: [{
                                    k: "location",
                                    v: location.href
                                }]
                            };
                            window.fetch("https://t.p123oki.io/l", {
                                method: "post",
                                body: JSON.stringify(n),
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            }).
                            catch()
                        }
                    },
                    t.debug = !1,
                    t
            }(),
            m = {
                hash: "G1L1",
                adTagUrl: adTagUrl,
                // adTagUrl: 'http://googleads.g.doubleclick.net/pagead/ads?&ad_type=video_image_text&client=ca-video-pub-4968145218643279&videoad_start_delay=0&description_url=http%3A%2F%2Fwww.google.com&adtest=on',
                // adTagUrl: "//pubads.g.doubleclick.net/gampad/ads?sz=320x240|320x300|400x300|640x360|640x480&iu=/1053551/Pub-Poki-Generic&ciu_szs&impl=s&gdfp_req=1&env=vp&output=xml_vast2&unviewed_position_start=1&url={url}&description_url={descriptionUrl}&correlator={timestamp}",
                adTiming: {
                    preroll: !0,
                    timeBetweenAds: 12e4,
                    timePerTry: 7e3,
                    startAdsAfter: 0
                },
                waterfallRetries: 2,
                country: "NL"
            },
            g = function (t) {
                return t instanceof Array ? t : [t]
            },
            h = function () {
                function t(t) {
                    void 0 === t && (t = {}),
                        this.setTimings(t),
                        this.timingIdx = {
                            timePerTry: 0
                        },
                        this.timers = {
                            timePerTry: void 0,
                            timeBetweenAds: void 0,
                            startAdsAfter: void 0
                        },
                        c.addEventListener(s.ads.completed, this.startTimeBetweenAdsTimer.bind(this)),
                        c.addEventListener(s.ads.stopped, this.startTimeBetweenAdsTimer.bind(this))
                }
                return t.prototype.setTimings = function (t) {
                        var e = m.adTiming,
                            n = t.preroll,
                            r = void 0 === n ? e.preroll : n,
                            i = t.timePerTry,
                            o = void 0 === i ? e.timePerTry : i,
                            a = t.timeBetweenAds,
                            s = void 0 === a ? e.timeBetweenAds : a,
                            c = t.startAdsAfter,
                            d = void 0 === c ? e.startAdsAfter : c;
                        this.timings = {
                            preroll: !1 !== r,
                            timePerTry: g(o),
                            timeBetweenAds: s,
                            startAdsAfter: d
                        }
                    },
                    t.prototype.startTimeBetweenAdsTimer = function () {
                        this.startTimer("timeBetweenAds")
                    },
                    t.prototype.startStartAdsAfterTimer = function () {
                        this.startTimer("startAdsAfter")
                    },
                    t.prototype.requestPossible = function () {
                        return !this.timers.timeBetweenAds && !this.timers.startAdsAfter
                    },
                    t.prototype.startWaterfallTimer = function (t) {
                        this.startTimer("timePerTry", t)
                    },
                    t.prototype.stopWaterfallTimer = function () {
                        this.stopTimer("timePerTry")
                    },
                    t.prototype.nextWaterfallTimer = function () {
                        this.nextTiming("timePerTry")
                    },
                    t.prototype.resetWaterfallTimerIdx = function () {
                        this.resetTimingIdx("timePerTry")
                    },
                    t.prototype.stopTimer = function (t) {
                        this.timers[t] && (clearTimeout(this.timers[t]), this.timers[t] = void 0)
                    },
                    t.prototype.startTimer = function (t, e) {
                        var n = this;
                        void 0 === e && (e = function () {}),
                            this.getTiming(t) <= 0 ? e() : (this.timers[t] && clearTimeout(this.timers[t]), this.timers[t] = setTimeout(function () {
                                    n.stopTimer(t),
                                        e()
                                },
                                this.getTiming(t)))
                    },
                    t.prototype.getTiming = function (t) {
                        var e = this.timings[t];
                        return e instanceof Array ? e[this.timingIdx[t]] : e
                    },
                    t.prototype.nextTiming = function (t) {
                        if (void 0 === this.timingIdx[t]) throw new Error("AdTimings Error: " + t + " does not have multiple timers");
                        this.timingIdx[t] = (this.timingIdx[t] + 1) % this.timings[t].length
                    },
                    t.prototype.resetTimingIdx = function (t) {
                        if (void 0 === this.timingIdx[t]) throw new Error("AdTimings Error: " + t + " does not have multiple timers");
                        this.timingIdx[t] = 0
                    },
                    t.prototype.prerollPossible = function () {
                        return this.timings.preroll
                    },
                    t
            }(),
            A = function () {
                function t(t) {
                    void 0 === t && (t = {}),
                        this.adDuration = 15e3,
                        this.adRunning = !1,
                        this.timeUpdateInterval = 100,
                        this.pauseDuration = 0,
                        t.timeUpdateInterval && (this.timeUpdateInterval = t.timeUpdateInterval),
                        this.setupEventHandlers()
                }
                return t.prototype.setupEventHandlers = function () {
                        c.addEventListener(s.ads.started, this.handleAdStarted.bind(this)),
                            c.addEventListener(s.ads.durationChange, this.handleAdDurationChange.bind(this)),
                            c.addEventListener(s.ads.error, this.handleAdError.bind(this)),
                            c.addEventListener(s.ads.completed, this.handleAdCompleted.bind(this)),
                            c.addEventListener(s.ads.stopped, this.handleAdStopped.bind(this)),
                            c.addEventListener(s.ads.video.paused, this.handleAdPause.bind(this)),
                            c.addEventListener(s.ads.video.resumed, this.handleAdResume.bind(this))
                    },
                    t.prototype.handleAdStarted = function (t) {
                        this.adRunning = !0,
                            this.timeAdStart = new Date,
                            this.adDuration = t.remainingTime,
                            this.startAdTimeRemainingInterval()
                    },
                    t.prototype.handleAdDurationChange = function (t) {
                        this.adDuration = t.duration
                    },
                    t.prototype.handleAdError = function () {
                        this.adRunning = !1
                    },
                    t.prototype.handleAdCompleted = function () {
                        this.adRunning = !1,
                            clearInterval(this.adTimeRemainingInterval)
                    },
                    t.prototype.handleAdStopped = function () {
                        this.adRunning = !1,
                            clearInterval(this.adTimeRemainingInterval)
                    },
                    t.prototype.handleAdPause = function () {
                        this.pauseTime = new Date,
                            clearInterval(this.adTimeRemainingInterval)
                    },
                    t.prototype.handleAdResume = function () {
                        this.pauseDuration += (new Date).valueOf() - this.pauseTime.valueOf(),
                            this.startAdTimeRemainingInterval()
                    },
                    t.prototype.startAdTimeRemainingInterval = function () {
                        this.adTimeRemainingInterval = setInterval(this.timeRemainingCountDown.bind(this), this.timeUpdateInterval)
                    },
                    t.prototype.timeRemainingCountDown = function () {
                        var t = this.getRemainingAdTime();
                        c.dispatchEvent(s.ads.update, {
                                duration: this.adDuration,
                                remaining: Math.max(0, t),
                                percentageCompleted: Math.min(100, 100 - t / this.adDuration * 100)
                            }),
                            t <= 0 && clearInterval(this.adTimeRemainingInterval)
                    },
                    t.prototype.getRemainingAdTime = function () {
                        var t = (new Date).valueOf() - this.pauseDuration - this.timeAdStart.valueOf();
                        return this.adDuration - t
                    },
                    t.prototype.isAdRunning = function () {
                        return this.adRunning
                    },
                    t
            }(),
            v = function () {
                return window.location.href
            },
            y = function () {
                return "undefined" != typeof navigator && /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i.test(navigator.userAgent)
            },
            b = function (t, e) {
                t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var n = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(e || window.location.search);
                return null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "))
            },
            w = Object.assign ||
            function (t) {
                for (var e, n = 1,
                        r = arguments.length; n < r; n++)
                    for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            },
            E = "rewarded",
            _ = "video",
            T = {
                allowSmallerSizes: !0,
                frameworks: [2],
                h: 480,
                maxduration: 15,
                mimes: "undefined" != typeof navigator && /MSIE \\d|Trident.*rv:/i.test(navigator.userAgent) || y() ? ["video/mp4"] : ["video/mp4", "video/webm", "video/ogg"],
                startdelay: 0,
                w: 640,
                video: {
                    playback_method: ["auto_play_sound_on", "auto_play_sound_off", "auto_play_sound_unknown"]
                }
            },
            S = [{
                    bidder: "appnexus",
                    params: w({
                            placementId: 13184250
                        },
                        T, {
                            video: w({},
                                T.video, {
                                    skippable: !0
                                })
                        })
                },
                {
                    bidder: "appnexus",
                    params: w({
                            placementId: 13184309
                        },
                        T, {
                            video: w({},
                                T.video, {
                                    skippable: !1,
                                    maxduration: 15
                                })
                        })
                },
                {
                    bidder: "openx",
                    params: {
                        unit: "540105196",
                        delDomain: "poki-d.openx.net",
                        openrtb: {
                            imp: [{
                                video: {
                                    mimes: [T.mimes.join(",")],
                                    protocols: [2, 3, 5, 6, 7, 8],
                                    maxduration: 15,
                                    skip: 1,
                                    skipafter: 5,
                                    w: 640,
                                    h: 480
                                }
                            }]
                        }
                    }
                },
                {
                    bidder: "openx",
                    params: {
                        unit: "540719065",
                        delDomain: "poki-d.openx.net",
                        openrtb: {
                            imp: [{
                                video: {
                                    mimes: [T.mimes.join(",")],
                                    protocols: [2, 3, 5, 6, 7, 8],
                                    maxduration: 15,
                                    skip: 0,
                                    w: 640,
                                    h: 480
                                }
                            }]
                        }
                    }
                },
                {
                    bidder: "districtm",
                    params: w({
                            placementId: 12906789
                        },
                        T, {
                            video: w({},
                                T.video, {
                                    skippable: !1,
                                    maxduration: 15
                                })
                        })
                },
                {
                    bidder: "spotx",
                    params: {
                        channel_id: "265590",
                        ad_unit: "instream",
                        secure: !0,
                        mimes: T.mimes,
                        hide_skin: !0
                    }
                }
            ],
            I = {
                video: {
                    context: "instream",
                    playerSize: [640, 480],
                    mimes: T.mimes,
                    protocols: [2, 3, 5, 6, 7, 8],
                    maxduration: 15,
                    skip: 1,
                    linearity: 1,
                    api: [2]
                }
            },
            k = [{
                    code: _,
                    mediaTypes: I,
                    bids: S.concat([{
                        bidder: "rubicon",
                        params: {
                            accountId: "18608",
                            siteId: "266914",
                            zoneId: "1322034",
                            video: {
                                size_id: 204
                            }
                        }
                    }])
                },
                {
                    code: E,
                    mediaTypes: I,
                    bids: S.concat([{
                        bidder: "rubicon",
                        params: {
                            accountId: "18608",
                            siteId: "266916",
                            zoneId: "1322048",
                            video: {
                                size_id: 202
                            }
                        }
                    }])
                }
            ],
            O = {
                EUR: {
                    EUR: 1,
                    GBP: .858595,
                    USD: 1.13151
                },
                GBP: {
                    EUR: 1.164693481792929,
                    GBP: 1,
                    USD: 1.3178623215835172
                },
                USD: {
                    EUR: .8837747788353616,
                    GBP: .7588046062341472,
                    USD: 1
                }
            },
            C = {
                debug: !1,
                enableSendAllBids: !0,
                usePrebidCache: !0,
                bidderTimeout: 1e3,
                priceGranularity: "dense",
                currency: {
                    adServerCurrency: "EUR",
                    rates: O,
                    defaultRates: O,
                    bidderCurrencyDefault: {
                        openx: "EUR"
                    }
                },
                cache: {
                    url: "https://prebid.adnxs.com/pbc/v1/cache"
                },
                userSync: {
                    iframeEnabled: !0
                }
            };
        var x = Object.assign ||
            function (t) {
                for (var e, n = 1,
                        r = arguments.length; n < r; n++)
                    for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            },
            D = function () {
                function t(t, e) {
                    void 0 === e && (e = {}),
                        this.retries = 0,
                        this.running = !1,
                        this.application = t,
                        this.totalRetries = e.totalRetries || m.waterfallRetries || 1,
                        this.timing = e.timing || new h(m.adTiming),
                        this.adTagUrls = e.adTagUrl ? g(e.adTagUrl) : [m.adTagUrl],
                        this.opportunityId = "",
                        c.addEventListener(s.ads.video.error, this.moveThroughWaterfall.bind(this)),
                        c.addEventListener(s.ads.ready, this.timing.stopWaterfallTimer.bind(this.timing)),
                        c.addEventListener(s.ads.started, this.stopWaterfall.bind(this))
                }
                return t.prototype.moveThroughWaterfall = function () {
                        if (!1 !== this.running) {
                            if (this.timing.stopWaterfallTimer(), this.retries < this.totalRetries) return this.timing.nextWaterfallTimer(),
                                void this.requestAd();
                            this.running = !1,
                                this.timing.resetWaterfallTimerIdx();
                            var t = this.criteria ? this.criteria.position : void 0;
                            c.dispatchEvent(s.ads.error, {
                                message: "No ads",
                                waterfall: this.retries,
                                opportunityId: this.opportunityId,
                                position: t
                            })
                        }
                    },
                    t.prototype.cutOffWaterfall = function () {
                        this.application.stopPlayback(),
                            this.moveThroughWaterfall()
                    },
                    t.prototype.start = function (t, e, n, r) {
                        void 0 === t && (t = {}),
                            this.running = !0,
                            this.retries = 0,
                            this.criteria = t,
                            this.timing.resetWaterfallTimerIdx(),
                            this.overrideAdTagUrl = n,
                            this.opportunityId = r || "",
                            this.rewarded = e,
                            this.requestAd()
                    },
                    t.prototype.requestAd = function () {
                        this.timing.startWaterfallTimer(this.cutOffWaterfall.bind(this)),
                            this.retries++,
                            et.isPokiPlatform || (this.criteria.waterfall = this.retries);
                        var t, e, n = (this.retries - 1) % this.adTagUrls.length,
                            r = function (t) {
                                var e = v().split("?"),
                                    n = encodeURIComponent(e[0]);
                                console.log("descriptionUrl", n);
                                t = (t = t.split("{descriptionUrl}").join(n)).split("{timestamp}").join((new Date).getTime().toString());
                                return t
                            }(this.overrideAdTagUrl || this.adTagUrls[n]) + (t = this.criteria, e = "", Object.keys(t).forEach(function (n) {
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    var r = t[n];
                                    Array.isArray(r) && (r = r.join()),
                                        e += n + "=" + r + "&"
                                }
                            }), "&cust_params=" + (e = encodeURIComponent(e)) + "&");
                        et.childDirected && (r += "&tfcd=1"),
                            et.nonPersonalized && (r += "&npa=1"),
                            et.consentString && et.consentString.length > 0 && (this.criteria = x({},
                                this.criteria, {
                                    consent_string: et.consentString
                                }));
                        var i = this.criteria ? this.criteria.position : void 0;
                        c.dispatchEvent(s.ads.requested, {
                                position: i,
                                waterfall: this.retries,
                                opportunityId: this.opportunityId
                            }),
                            1 !== this.retries || y() ? this.application.requestAd(r, i, this.retries, this.opportunityId) : function (t, e, n, r, i, o) {
                                if (window.pbjs && window.pbjs.que && window.pbjs.getConfig) {
                                    var a = v().split("?"),
                                        s = encodeURIComponent(a[0]),
                                        c = o ? E : _;
                                    window.pbjs.que.push(function () {
                                        window.pbjs.requestBids({
                                            adUnitCodes: [c],
                                            bidsBackHandler: function () {
                                                try {
                                                    var o = window.pbjs.adUnits.filter(function (t) {
                                                        return t.code === c
                                                    })[0];
                                                    if ("undefined" === o) return console.error("Video-ad-unit not found, did you give it the adunit.code='video' value?"),
                                                        void t.requestAd(e, n.position, r, i);
                                                    var a = window.pbjs.adServers.dfp.buildVideoUrl({
                                                        adUnit: o,
                                                        params: {
                                                            iu: b("iu", e),
                                                            sz: "320x240|320x300|400x300|640x360|640x480",
                                                            output: "vast",
                                                            cust_params: n,
                                                            description_url: s
                                                        }
                                                    });
                                                    window.pbjs.markWinningBidAsUsed({
                                                            adUnitCode: c
                                                        }),
                                                        t.requestAd(a, n.position, r, i)
                                                } catch (o) {
                                                    t.requestAd(e, n.position, r, i)
                                                }
                                            }
                                        })
                                    })
                                } else t.requestAd(e, n.position, r, i)
                            }(this.application, r, this.criteria, this.retries, this.opportunityId, this.rewarded)
                    },
                    t.prototype.isRunning = function () {
                        return this.running
                    },
                    t.prototype.stopWaterfall = function () {
                        this.running = !1,
                            this.timing.stopWaterfallTimer(),
                            this.timing.resetWaterfallTimerIdx()
                    },
                    t
            }(),
            P = "pokiSdkContainer",
            B = "pokiSdkHidden",
            R = "pokiSdkPauseButton",
            j = "pokiSdkProgressBar",
            U = "pokiSdkSpinnerContainer",
            N = "pokiSdkVisible",
            z = "\n." + P + " {\n\toverflow: hidden;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 1000;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n." + P + ".pokiSdkFixed {\n\tposition: fixed;\n}\n\n." + P + "." + N + " {\n\tvisibility: visible;\n}\n\n." + P + "." + B + ", ." + U + "." + B + " {\n\tvisibility: hidden;\n}\n\n." + P + "." + B + ", ." + U + ", ." + U + " div, ." + U + " img {\n\tpointer-events: none;\n}\n\n.pokiSdkInsideContainer {\n\tbackground: #000;\n\tposition: relative;\n\tz-index: 1;\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\n\topacity: 0;\n\t-webkit-transition: opacity 0.5s ease-in-out;\n\t-moz-transition: opacity 0.5s ease-in-out;\n\t-ms-transition: opacity 0.5s ease-in-out;\n\t-o-transition: opacity 0.5s ease-in-out;\n\ttransition: opacity 0.5s ease-in-out;\n}\n\n." + P + "." + N + " .pokiSdkInsideContainer {\n\topacity: 1;\n}\n\n.pokiSdkVideoContainer {\n\twidth: 100%;\n\tflex-grow: 1;\n}\n\n.pokiSdkPauseContainer {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\tz-index: 9999;\n\tbackground-color: rgba(0, 0, 0, .5);\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n." + R + " {\n\theight: 20%;\n\twidth: 25%;\n\tbackground-color: #282a2e;\n\tborder-radius: 16px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tcursor: pointer;\n}\n\n." + R + ":hover {\n\tbackground-color: #439ed5\n}\n\n." + R + ':after {\n\tcontent: "";\n\tborder: solid transparent;\n\tborder-width: 18px;\n\tborder-right-width: 0;\n\tborder-left-width: 36px;\n\tborder-left-color: rgba(255, 255, 255, 1);\n}\n\n.pokiSdkProgressContainer {\n\tbackground: #002B50;\n\twidth: 100%;\n\theight: 5px;\n\tposition: absolute;\n\tbottom: 0;\n\tz-index: 9999;\n}\n\n.' + j + " {\n\tposition:relative;\n\tbottom:0px;\n\tbackground: #009CFF;\n\theight: 100%;\n\twidth: 0%;\n\ttransition: width 0.1s;\n\ttransition-timing-function: linear;\n}\n\n." + j + "." + N + ", .pokiSdkPauseContainer." + N + " {\n\tvisibility: visible;\n\tpointer-events: auto;\n}\n\n." + j + "." + B + ", .pokiSdkPauseContainer." + B + " {\n\tvisibility: hidden;\n\tpointer-events: none;\n}\n\n@keyframes gwd-gen-no02gwdanimation_gwd-keyframes{0%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}25%{transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}35%{opacity:1;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}40%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}100%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}}@-webkit-keyframes gwd-gen-no02gwdanimation_gwd-keyframes{0%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}25%{-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}35%{opacity:1;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}40%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}100%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}}@-moz-keyframes gwd-gen-no02gwdanimation_gwd-keyframes{0%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}25%{-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}35%{opacity:1;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}40%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}100%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}}[data-gwd-group=SpinnerGroup] .gwd-gen-no02gwdanimation{animation:gwd-gen-no02gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-webkit-animation:gwd-gen-no02gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-moz-animation:gwd-gen-no02gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards}@keyframes gwd-gen-4pvrgwdanimation_gwd-keyframes{0%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}25%{transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}40%{opacity:1;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}45%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}100%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}}@-webkit-keyframes gwd-gen-4pvrgwdanimation_gwd-keyframes{0%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}25%{-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}40%{opacity:1;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}45%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}100%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}}@-moz-keyframes gwd-gen-4pvrgwdanimation_gwd-keyframes{0%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}25%{-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}40%{opacity:1;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}45%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}100%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}}[data-gwd-group=SpinnerGroup] .gwd-gen-4pvrgwdanimation{animation:gwd-gen-4pvrgwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-webkit-animation:gwd-gen-4pvrgwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-moz-animation:gwd-gen-4pvrgwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards}@keyframes gwd-gen-kw40gwdanimation_gwd-keyframes{0%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}25%{transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}45%{opacity:1;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}50%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}100%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}}@-webkit-keyframes gwd-gen-kw40gwdanimation_gwd-keyframes{0%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}25%{-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}45%{opacity:1;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}50%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}100%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}}@-moz-keyframes gwd-gen-kw40gwdanimation_gwd-keyframes{0%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}25%{-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}45%{opacity:1;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}50%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}100%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}}[data-gwd-group=SpinnerGroup] .gwd-gen-kw40gwdanimation{animation:gwd-gen-kw40gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-webkit-animation:gwd-gen-kw40gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-moz-animation:gwd-gen-kw40gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards}@keyframes gwd-gen-2uv8gwdanimation_gwd-keyframes{0%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}25%{transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}50%{opacity:1;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}55%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}100%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}}@-webkit-keyframes gwd-gen-2uv8gwdanimation_gwd-keyframes{0%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}25%{-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}50%{opacity:1;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}55%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}100%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}}@-moz-keyframes gwd-gen-2uv8gwdanimation_gwd-keyframes{0%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}25%{-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}50%{opacity:1;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}55%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}100%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}}[data-gwd-group=SpinnerGroup] .gwd-gen-2uv8gwdanimation{animation:gwd-gen-2uv8gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-webkit-animation:gwd-gen-2uv8gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-moz-animation:gwd-gen-2uv8gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards}@keyframes gwd-gen-1x97gwdanimation_gwd-keyframes{0%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}25%{transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}55%{opacity:1;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}60%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}100%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}}@-webkit-keyframes gwd-gen-1x97gwdanimation_gwd-keyframes{0%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}25%{-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}55%{opacity:1;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}60%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}100%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}}@-moz-keyframes gwd-gen-1x97gwdanimation_gwd-keyframes{0%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}25%{-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}55%{opacity:1;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}60%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}100%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}}[data-gwd-group=SpinnerGroup] .gwd-gen-1x97gwdanimation{animation:gwd-gen-1x97gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-webkit-animation:gwd-gen-1x97gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-moz-animation:gwd-gen-1x97gwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards}@keyframes gwd-gen-1i1egwdanimation_gwd-keyframes{0%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}25%{transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}60%{opacity:1;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}65%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}100%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}}@-webkit-keyframes gwd-gen-1i1egwdanimation_gwd-keyframes{0%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}25%{-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}60%{opacity:1;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}65%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}100%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}}@-moz-keyframes gwd-gen-1i1egwdanimation_gwd-keyframes{0%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}25%{-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}60%{opacity:1;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}65%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}100%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}}[data-gwd-group=SpinnerGroup] .gwd-gen-1i1egwdanimation{animation:gwd-gen-1i1egwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-webkit-animation:gwd-gen-1i1egwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-moz-animation:gwd-gen-1i1egwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards}@keyframes gwd-gen-1sapgwdanimation_gwd-keyframes{0%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}25%{transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}65%{opacity:1;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:step-end;-webkit-animation-timing-function:step-end;-moz-animation-timing-function:step-end}70%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}100%{opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}}@-webkit-keyframes gwd-gen-1sapgwdanimation_gwd-keyframes{0%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}25%{-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}65%{opacity:1;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:step-end}70%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}100%{opacity:0;-webkit-transform:translate3d(0,0,0);-webkit-animation-timing-function:linear}}@-moz-keyframes gwd-gen-1sapgwdanimation_gwd-keyframes{0%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}25%{-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}65%{opacity:1;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:step-end}70%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}100%{opacity:0;-moz-transform:translate3d(0,0,0);-moz-animation-timing-function:linear}}[data-gwd-group=SpinnerGroup] .gwd-gen-1sapgwdanimation{animation:gwd-gen-1sapgwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-webkit-animation:gwd-gen-1sapgwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards;-moz-animation:gwd-gen-1sapgwdanimation_gwd-keyframes 2s linear 0s infinite normal forwards}@keyframes gwd-gen-5qotgwdanimation_gwd-keyframes{0%{transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-webkit-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-moz-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);animation-timing-function:cubic-bezier(1,0,.58,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}12.5%{transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-webkit-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-moz-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);animation-timing-function:cubic-bezier(.42,0,0,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}25%{transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-webkit-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-moz-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);animation-timing-function:cubic-bezier(1,0,.58,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}37.5%{transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-webkit-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-moz-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);animation-timing-function:cubic-bezier(.42,0,0,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}50%{transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-webkit-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-moz-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);animation-timing-function:cubic-bezier(1,0,.58,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}62.5%{transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-webkit-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-moz-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);animation-timing-function:cubic-bezier(.42,0,0,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}75%{transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-webkit-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-moz-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);animation-timing-function:cubic-bezier(1,0,.58,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}87.5%{transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-webkit-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-moz-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);animation-timing-function:cubic-bezier(.42,0,0,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}100%{transform:translate3d(0,0,0) rotateZ(360deg) scale3d(1,1,1);-webkit-transform:translate3d(0,0,0) rotateZ(360deg) scale3d(1,1,1);-moz-transform:translate3d(0,0,0) rotateZ(360deg) scale3d(1,1,1);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}}@-webkit-keyframes gwd-gen-5qotgwdanimation_gwd-keyframes{0%{-webkit-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1)}12.5%{-webkit-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1)}25%{-webkit-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1)}37.5%{-webkit-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1)}50%{-webkit-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1)}62.5%{-webkit-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1)}75%{-webkit-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1)}87.5%{-webkit-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1)}100%{-webkit-transform:translate3d(0,0,0) rotateZ(360deg) scale3d(1,1,1);-webkit-animation-timing-function:linear}}@-moz-keyframes gwd-gen-5qotgwdanimation_gwd-keyframes{0%{-moz-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}12.5%{-moz-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}25%{-moz-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}37.5%{-moz-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}50%{-moz-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}62.5%{-moz-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}75%{-moz-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}87.5%{-moz-transform:translate3d(0,200px,0) rotateZ(0) scale3d(1.2,.8,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}100%{-moz-transform:translate3d(0,0,0) rotateZ(360deg) scale3d(1,1,1);-moz-animation-timing-function:linear}}[data-gwd-group=SpinnerGroup] .gwd-gen-5qotgwdanimation{animation:gwd-gen-5qotgwdanimation_gwd-keyframes 4s linear 0s infinite normal forwards;-webkit-animation:gwd-gen-5qotgwdanimation_gwd-keyframes 4s linear 0s infinite normal forwards;-moz-animation:gwd-gen-5qotgwdanimation_gwd-keyframes 4s linear 0s infinite normal forwards}@keyframes gwd-gen-faadgwdanimation_gwd-keyframes{0%{opacity:.2;transform:scale3d(.5,.8,1);-webkit-transform:scale3d(.5,.8,1);-moz-transform:scale3d(.5,.8,1);animation-timing-function:cubic-bezier(1,0,.58,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}50%{opacity:.5;transform:scale3d(1,.8,1);-webkit-transform:scale3d(1,.8,1);-moz-transform:scale3d(1,.8,1);animation-timing-function:cubic-bezier(.42,0,0,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}100%{opacity:.2;transform:scale3d(.5,.8,1);-webkit-transform:scale3d(.5,.8,1);-moz-transform:scale3d(.5,.8,1);animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}}@-webkit-keyframes gwd-gen-faadgwdanimation_gwd-keyframes{0%{opacity:.2;-webkit-transform:scale3d(.5,.8,1);-webkit-animation-timing-function:cubic-bezier(1,0,.58,1)}50%{opacity:.5;-webkit-transform:scale3d(1,.8,1);-webkit-animation-timing-function:cubic-bezier(.42,0,0,1)}100%{opacity:.2;-webkit-transform:scale3d(.5,.8,1);-webkit-animation-timing-function:linear}}@-moz-keyframes gwd-gen-faadgwdanimation_gwd-keyframes{0%{opacity:.2;-moz-transform:scale3d(.5,.8,1);-moz-animation-timing-function:cubic-bezier(1,0,.58,1)}50%{opacity:.5;-moz-transform:scale3d(1,.8,1);-moz-animation-timing-function:cubic-bezier(.42,0,0,1)}100%{opacity:.2;-moz-transform:scale3d(.5,.8,1);-moz-animation-timing-function:linear}}[data-gwd-group=SpinnerGroup] .gwd-gen-faadgwdanimation{animation:gwd-gen-faadgwdanimation_gwd-keyframes 1s linear 0s infinite normal forwards;-webkit-animation:gwd-gen-faadgwdanimation_gwd-keyframes 1s linear 0s infinite normal forwards;-moz-animation:gwd-gen-faadgwdanimation_gwd-keyframes 1s linear 0s infinite normal forwards}[data-gwd-group=SpinnerGroup] .gwd-grp-13td.gwd-img-1653{position:absolute;top:0;width:612px;height:568px;opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);left:0}[data-gwd-group=SpinnerGroup] .gwd-grp-13td.gwd-img-alsm{position:absolute;top:0;width:612px;height:568px;opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);left:0}[data-gwd-group=SpinnerGroup] .gwd-grp-13td.gwd-img-f0mu{position:absolute;top:0;width:612px;height:568px;opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);left:0}[data-gwd-group=SpinnerGroup] .gwd-grp-13td.gwd-img-1sr3{position:absolute;top:0;width:612px;height:568px;opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);left:0}[data-gwd-group=SpinnerGroup] .gwd-grp-13td.gwd-img-1ffn{position:absolute;top:0;width:612px;height:568px;opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);left:0}[data-gwd-group=SpinnerGroup] .gwd-grp-13td.gwd-img-16f3{position:absolute;top:0;width:612px;height:568px;opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);left:0}[data-gwd-group=SpinnerGroup] .gwd-grp-13td.gwd-img-1rrs{position:absolute;top:0;width:612px;height:568px;opacity:0;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);left:0}[data-gwd-group=SpinnerGroup] .gwd-grp-13td.gwd-img-1dhi{position:absolute;transform-origin:283.711px 283.516px 0;-webkit-transform-origin:283.711px 283.516px 0;-moz-transform-origin:283.711px 283.516px 0;height:568px;width:568px;top:0;transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-webkit-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);-moz-transform:translate3d(0,0,0) rotateZ(0) scale3d(1,1,1);transform-style:preserve-3d;-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;left:0}[data-gwd-group=SpinnerGroup] .gwd-grp-13td.gwd-img-1izg{position:absolute;width:568px;height:604.02px;opacity:.2;transform-style:preserve-3d;-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;transform:scale3d(.5,.8,1);-webkit-transform:scale3d(.5,.8,1);-moz-transform:scale3d(.5,.8,1);top:55px;left:0}[data-gwd-group=SpinnerGroup]{width:611.979px;height:598.605px}.gwd-div-1v1s{transform:scale(.5,.5)}\n",
            M = function () {
                function t(t) {
                    var e = this;
                    if (this.hideElement = function (t) {
                            t.classList.add(B),
                                t.classList.remove(N)
                        },
                        this.showElement = function (t) {
                            t.classList.add(N),
                                t.classList.remove(B)
                        },
                        this.wrapper = t.wrapper, c.addEventListener(s.ads.update,
                            function (t) {
                                var n = t.percentageCompleted;
                                n < 100 && (e.progressBar.style.width = n + "%")
                            }), this.wrapper instanceof HTMLElement || (console.error("POKI-SDK: wrapper is not a HTMLElement, falling back to document.body"), this.wrapper = document.body), this.createElements(), "undefined" != typeof window && document) {
                        var n = document.createElement("style");
                        n.innerHTML = z,
                            document.head.appendChild(n)
                    }
                }
                return t.prototype.setupEvents = function (t) {
                        this.pauseContainer.addEventListener("click", t.resumeAd.bind(t))
                    },
                    t.prototype.hide = function () {
                        window.clearInterval(this.progressInterval),
                            this.hideElement(this.containerDiv),
                            this.hideElement(this.progressContainer),
                            this.containerDiv.classList.remove("pokiSdkOverlay"),
                            this.progressBar.style.width = "0%"
                    },
                    t.prototype.hideSpinner = function () {
                        this.hideElement(this.spinnerContainer)
                    },
                    t.prototype.showWithOpacity = function () {
                        this.showElement(this.spinnerContainer),
                            this.showElement(this.containerDiv),
                            this.showElement(this.progressContainer)
                    },
                    t.prototype.show = function () {
                        this.containerDiv.classList.add("pokiSdkOverlay"),
                            this.showElement(this.containerDiv),
                            this.showElement(this.progressContainer)
                    },
                    t.prototype.getVideoBounds = function () {
                        return this.videoContainer.getBoundingClientRect()
                    },
                    t.prototype.getVideoContainer = function () {
                        return this.videoContainer
                    },
                    t.prototype.showPauseButton = function () {
                        this.showElement(this.pauseContainer)
                    },
                    t.prototype.hidePauseButton = function () {
                        this.hideElement(this.pauseContainer)
                    },
                    t.prototype.createElements = function () {
                        if (this.containerDiv = document.createElement("div"), this.insideContainer = document.createElement("div"), this.pauseButton = document.createElement("div"), this.pauseContainer = document.createElement("div"), this.progressBar = document.createElement("div"), this.progressContainer = document.createElement("div"), this.spinnerContainer = document.createElement("div"), this.videoContainer = document.createElement("div"), this.containerDiv.className = P, this.insideContainer.className = "pokiSdkInsideContainer", this.pauseButton.className = R, this.pauseContainer.className = "pokiSdkPauseContainer", this.hideElement(this.pauseContainer), this.progressBar.className = j, this.progressContainer.className = "pokiSdkProgressContainer", this.spinnerContainer.className = U, this.videoContainer.className = "pokiSdkVideoContainer", this.spinnerContainer.innerHTML = '\n\t\t\t<div id="new-progress-spinner" style="z-index:10;position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) scale3d(0.5, 0.5, 0.5);">\n\t\t\t\t<div class="gwd-div-1v1s" data-gwd-group="SpinnerGroup">\n\t\t\t\t\t<img src="https://game-cdn.po123ki.com/loaders/v2/static/spinner/Sparkle_1.svg" class="gwd-img-1653 gwd-gen-no02gwdanimation gwd-grp-13td" data-gwd-grp-id="Sparkle_1">\n\t\t\t\t\t<img src="https://game-cdn.po1234ki.com/loaders/v2/static/spinner/Sparkle_2.svg" class="gwd-img-alsm gwd-gen-4pvrgwdanimation gwd-grp-13td" data-gwd-grp-id="Sparkle_2">\n\t\t\t\t\t<img src="https://game-cdn.po123ki.com/loaders/v2/static/spinner/Sparkle_3.svg" class="gwd-img-f0mu gwd-gen-kw40gwdanimation gwd-grp-13td" data-gwd-grp-id="Sparkle_3">\n\t\t\t\t\t<img src="https://game-cdn.po1234ki.com/loaders/v2/static/spinner/Sparkle_4.svg" class="gwd-img-1sr3 gwd-gen-2uv8gwdanimation gwd-grp-13td" data-gwd-grp-id="Sparkle_4">\n\t\t\t\t\t<img src="https://game-cdn.po123ki.com/loaders/v2/static/spinner/Sparkle_5.svg" class="gwd-img-1ffn gwd-gen-1x97gwdanimation gwd-grp-13td" data-gwd-grp-id="Sparkle_5">\n\t\t\t\t\t<img src="https://game-cdn.po123ki.com/loaders/v2/static/spinner/Sparkle_6.svg" class="gwd-img-16f3 gwd-gen-1i1egwdanimation gwd-grp-13td" data-gwd-grp-id="Sparkle_6">\n\t\t\t\t\t<img src="https://game-cdn.pok123i.com/loaders/v2/static/spinner/Sparkle_7.svg" class="gwd-img-1rrs gwd-gen-1sapgwdanimation gwd-grp-13td" data-gwd-grp-id="Sparkle_7">\n\t\t\t\t\t<img src="https://game-cdn.p123oki.com/loaders/v2.0/static/hand_fingers_isolated.svg" class="gwd-img-1dhi gwd-gen-5qotgwdanimation gwd-grp-13td" data-gwd-grp-id="heart">\n\t\t\t\t\t<img src="https://game-cdn.po12345ki.com/loaders/v2/static/spinner/shadow_new_3.svg" class="gwd-img-1izg gwd-gen-faadgwdanimation gwd-grp-13td" data-gwd-grp-id="shadow_new_3">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t', this.hide(), this.containerDiv.appendChild(this.insideContainer), this.containerDiv.appendChild(this.spinnerContainer), this.insideContainer.appendChild(this.pauseContainer), this.insideContainer.appendChild(this.progressContainer), this.insideContainer.appendChild(this.videoContainer), this.pauseContainer.appendChild(this.pauseButton), this.progressContainer.appendChild(this.progressBar), this.wrapper.appendChild(this.containerDiv), this.wrapper === document.body) this.containerDiv.classList.add("pokiSdkFixed");
                        else {
                            var t = window.getComputedStyle(this.wrapper).position;
                            t && -1 !== ["absolute", "fixed", "relative"].indexOf(t) || (this.wrapper.style.position = "relative")
                        }
                    },
                    t
            }(),
            L = !0,
            q = {};
        var V = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "GB", "IS", "LI", "NO"],
            G = ["US"],
            W = ["ZZ"];

        function F(t) {
            return W.includes(t)
        }
        var H = function (t, e, n, r) {
                return new(n || (n = Promise))(function (i, o) {
                    function a(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function s(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(t) {
                        t.done ? i(t.value) : new n(function (e) {
                            e(t.value)
                        }).then(a, s)
                    }
                    c((r = r.apply(t, e || [])).next())
                })
            },
            K = function (t, e) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function () {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    },
                    "function" == typeof Symbol && (o[Symbol.iterator] = function () {
                        return this
                    }),
                    o;

                function s(o) {
                    return function (s) {
                        return function (o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++,
                                            r = o[1],
                                            o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(),
                                            a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1],
                                                i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2],
                                                a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(),
                                            a.trys.pop();
                                        continue
                                }
                                o = e.call(t, a)
                            } catch (t) {
                                o = [6, t],
                                    r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            },
            Y = function () {
                function t(t, e) {
                    var n = this;
                    this.contentCompleteCalled = !1,
                        this.bannerTimeout = null,
                        this.currentRunningAdTag = "unknown",
                        this.allowedToPlayAd = !0,
                        this.currentRequestIsMuted = !1,
                        this.canWeAutoPlayWithSound = function () {
                            return H(n, void 0, void 0,
                                function () {
                                    return K(this,
                                        function (t) {
                                            switch (t.label) {
                                                case 0:
                                                    if (!this.blankVideo) return [2, !1];
                                                    t.label = 1;
                                                case 1:
                                                    return t.trys.push([1, 3, , 4]),
                                                        [4, this.blankVideo.play()];
                                                case 2:
                                                    return t.sent(),
                                                        [2, !0];
                                                case 3:
                                                    return t.sent(),
                                                        [2, !1];
                                                case 4:
                                                    return [2]
                                            }
                                        })
                                })
                        },
                        this.application = t,
                        this.videoPlayer = e,
                        google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.INSECURE),
                        google.ima.settings.setDisableCustomPlaybackForIOS10Plus(!0),
                        this.adsManager = null,
                        this.initAdDisplayContainer(),
                        this.initAdsLoader(),
                        this.initBlankVideo()
                }
                return t.prototype.initAdDisplayContainer = function () {
                        this.adDisplayContainer || (this.adDisplayContainer = new google.ima.AdDisplayContainer(this.videoPlayer.adContainer))
                    },
                    t.prototype.initAdsLoader = function () {
                        this.adsLoader || (this.adsLoader = new google.ima.AdsLoader(this.adDisplayContainer), this.adsLoader.getSettings().setPlayerType("h5_vsi"), this.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this.onAdsManagerLoaded, !1, this), this.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdError, !1, this))
                    },
                    t.prototype.initialUserAction = function () {
                        this.initAdDisplayContainer(),
                            this.adDisplayContainer.initialize()
                    },
                    t.prototype.requestAds = function (t) {
                        return H(this, void 0, void 0,
                            function () {
                                var e;
                                return K(this,
                                    function (n) {
                                        switch (n.label) {
                                            case 0:
                                                return (e = new google.ima.AdsRequest).adTagUrl = t,
                                                    e.linearAdSlotWidth = this.videoPlayer.width - 10,
                                                    e.linearAdSlotHeight = this.videoPlayer.height - 15,
                                                    e.nonLinearAdSlotWidth = this.videoPlayer.width - 10,
                                                    e.nonLinearAdSlotHeight = this.videoPlayer.height - 15,
                                                    e.forceNonLinearFullSlot = true,
                                                    this.allowedToPlayAd = !0,
                                                    this.currentRunningAdTag = t,
                                                    [4, this.canWeAutoPlayWithSound()];
                                            case 1:
                                                return n.sent() ? (e.setAdWillPlayMuted(!1), this.currentRequestIsMuted = !1) : (e.setAdWillPlayMuted(!0), this.currentRequestIsMuted = !0),
                                                    e.setAdWillAutoPlay(!0),
                                                    this.adsLoader.requestAds(e),
                                                    [2]
                                        }
                                    })
                            })
                    },
                    t.prototype.resize = function (t, e, n) {
                        void 0 === n && (n = google.ima.ViewMode.NORMAL),
                            this.adsManager && this.adsManager.resize(this.videoPlayer.width, this.videoPlayer.height, n)
                    },
                    t.prototype.contentEnded = function () {
                        this.adsLoader && (this.contentCompleteCalled = !0, this.adsLoader.contentComplete())
                    },
                    t.prototype.onAdsManagerLoaded = function (t) {
                        var e = new google.ima.AdsRenderingSettings;
                        this.adsManager = t.getAdsManager(this.videoPlayer, e),
                            this.currentRequestIsMuted && this.adsManager.setVolume(0),
                            this.allowedToPlayAd ? (this.attachAdEvents(), this.application.onAdManagerLoaded()) : (this.tearDownAdManager(), this.application.onAdStoppedDuringRequest())
                    },
                    t.prototype.startPlayback = function () {
                        this.adsManager.init(this.videoPlayer.width, this.videoPlayer.height, google.ima.ViewMode.NORMAL),
                            this.adsManager.start()
                    },
                    t.prototype.stopPlayback = function () {
                        this.allowedToPlayAd = !1,
                            this.application.onAdClosed({
                                type: s.ads.stopped
                            }),
                            this.tearDownAdManager(),
                            this.adsLoader && (this.adsLoader.contentComplete(), this.adsLoader.destroy(), this.adsLoader = null, this.initAdsLoader())
                    },
                    t.prototype.resumeAd = function () {
                        this.adsManager && this.adsManager.resume()
                    },
                    t.prototype.tearDownAdManager = function () {
                        this.adsManager && (this.adsManager.stop(), this.adsManager.destroy(), this.adsManager = null),
                            null !== this.bannerTimeout && (clearTimeout(this.bannerTimeout), this.bannerTimeout = null)
                    },
                    t.prototype.attachAdEvents = function () {
                        var t = this,
                            e = google.ima.AdEvent.Type;
                        this.adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdError, !1, this),
                            [e.AD_BREAK_READY, e.AD_METADATA, e.ALL_ADS_COMPLETED, e.CLICK, e.COMPLETE, e.DURATION_CHANGE, e.EXPANDED_CHANGED, e.FIRST_QUARTILE, e.IMPRESSION, e.LOADED, e.LOG, e.MIDPOINT, e.PAUSED, e.SKIPPABLE_STATE_CHANGED, e.SKIPPED, e.STARTED, e.THIRD_QUARTILE, e.USER_CLOSE, e.VIEWABLE_IMPRESSION, e.VOLUME_CHANGED, e.VOLUME_MUTED, e.AD_PROGRESS].forEach(function (e) {
                                t.adsManager.addEventListener(e, t.onAdEvent, !1, t)
                            })
                    },
                    t.prototype.onContentPauseRequested = function () {
                        this.application.pauseForAd()
                    },
                    t.prototype.onContentResumeRequested = function () {
                        this.contentCompleteCalled || this.application.resumeAfterAd()
                    },
                    t.prototype.onAdEvent = function (t) {
                        var e = this;
                        this.application.onRawAdEvent(t, this.currentRunningAdTag);
                        var n = t.getAd();
                        switch (t.type) {
                            case google.ima.AdEvent.Type.CLICK:
                                this.application.onAdClicked();
                                break;
                            case google.ima.AdEvent.Type.LOADED:
                                this.resize(this.videoPlayer.width, this.videoPlayer.height),
                                    this.application.onAdEvent(t);
                                break;
                            case google.ima.AdEvent.Type.AD_PROGRESS:
                                var r = t.getAdData();
                                this.application.onVideoProgress({
                                    currentTime: r.currentTime,
                                    duration: r.duration
                                });
                                break;
                            case google.ima.AdEvent.Type.STARTED:
                                t.remainingTime = this.adsManager.getRemainingTime(),
                                    t.remainingTime <= 0 && (t.remainingTime = 15),
                                    n.isLinear() || (this.bannerTimeout = window.setTimeout(function () {
                                            e.application.onAdClosed(t)
                                        },
                                        1e3 * (t.remainingTime + 1))),
                                    this.application.onAdStarted(t, {
                                        adTag: this.currentRunningAdTag,
                                        adId: n.getAdId(),
                                        adSystem: n.getAdSystem(),
                                        advertiserName: n.getAdvertiserName(),
                                        apiFramework: n.getApiFramework(),
                                        creativeAdId: n.getCreativeAdId(),
                                        creativeId: n.getCreativeId(),
                                        description: n.getDescription(),
                                        mediaUrl: n.getMediaUrl(),
                                        title: n.getTitle()
                                    });
                                break;
                            case google.ima.AdEvent.Type.DURATION_CHANGE:
                                t.duration = n.getDuration(),
                                    this.application.onAdDurationChange(t);
                                break;
                            case google.ima.AdEvent.Type.COMPLETE:
                                this.application.onAdComplete(),
                                    this.closeAd(t);
                                break;
                            case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                            case google.ima.AdEvent.Type.USER_CLOSE:
                                this.closeAd(t);
                                break;
                            case google.ima.AdEvent.Type.PAUSED:
                                this.application.pausedAd();
                                break;
                            default:
                                this.application.onAdEvent(t)
                        }
                    },
                    t.prototype.closeAd = function (t) {
                        null !== this.bannerTimeout && (clearTimeout(this.bannerTimeout), this.bannerTimeout = null),
                            this.application.onAdClosed(t)
                    },
                    t.prototype.onAdError = function (t) {
                        console.log("error", t);
                        this.application.onRawAdErrorEvent(t, this.currentRunningAdTag),
                            this.application.resumeAfterAd(),
                            void 0 !== this.adsManager && null != this.adsManager && this.adsManager.destroy(),
                            this.application.onAdError(t)
                    },
                    t.prototype.initBlankVideo = function () {
                        this.blankVideo = document.createElement("video"),
                            this.blankVideo.setAttribute("playsinline", "playsinline");
                        var t = document.createElement("source");
                        t.src = "data:video/mp4;base64, AAAAHGZ0eXBNNFYgAAACAGlzb21pc28yYXZjMQAAAAhmcmVlAAAGF21kYXTeBAAAbGliZmFhYyAxLjI4AABCAJMgBDIARwAAArEGBf//rdxF6b3m2Ui3lizYINkj7u94MjY0IC0gY29yZSAxNDIgcjIgOTU2YzhkOCAtIEguMjY0L01QRUctNCBBVkMgY29kZWMgLSBDb3B5bGVmdCAyMDAzLTIwMTQgLSBodHRwOi8vd3d3LnZpZGVvbGFuLm9yZy94MjY0Lmh0bWwgLSBvcHRpb25zOiBjYWJhYz0wIHJlZj0zIGRlYmxvY2s9MTowOjAgYW5hbHlzZT0weDE6MHgxMTEgbWU9aGV4IHN1Ym1lPTcgcHN5PTEgcHN5X3JkPTEuMDA6MC4wMCBtaXhlZF9yZWY9MSBtZV9yYW5nZT0xNiBjaHJvbWFfbWU9MSB0cmVsbGlzPTEgOHg4ZGN0PTAgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0xIGNocm9tYV9xcF9vZmZzZXQ9LTIgdGhyZWFkcz02IGxvb2thaGVhZF90aHJlYWRzPTEgc2xpY2VkX3RocmVhZHM9MCBucj0wIGRlY2ltYXRlPTEgaW50ZXJsYWNlZD0wIGJsdXJheV9jb21wYXQ9MCBjb25zdHJhaW5lZF9pbnRyYT0wIGJmcmFtZXM9MCB3ZWlnaHRwPTAga2V5aW50PTI1MCBrZXlpbnRfbWluPTI1IHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCB2YnZfbWF4cmF0ZT03NjggdmJ2X2J1ZnNpemU9MzAwMCBjcmZfbWF4PTAuMCBuYWxfaHJkPW5vbmUgZmlsbGVyPTAgaXBfcmF0aW89MS40MCBhcT0xOjEuMDAAgAAAAFZliIQL8mKAAKvMnJycnJycnJycnXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXiEASZACGQAjgCEASZACGQAjgAAAAAdBmjgX4GSAIQBJkAIZACOAAAAAB0GaVAX4GSAhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGagC/AySEASZACGQAjgAAAAAZBmqAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZrAL8DJIQBJkAIZACOAAAAABkGa4C/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmwAvwMkhAEmQAhkAI4AAAAAGQZsgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGbQC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm2AvwMkhAEmQAhkAI4AAAAAGQZuAL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGboC/AySEASZACGQAjgAAAAAZBm8AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZvgL8DJIQBJkAIZACOAAAAABkGaAC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmiAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpAL8DJIQBJkAIZACOAAAAABkGaYC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmoAvwMkhAEmQAhkAI4AAAAAGQZqgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGawC/AySEASZACGQAjgAAAAAZBmuAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZsAL8DJIQBJkAIZACOAAAAABkGbIC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm0AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZtgL8DJIQBJkAIZACOAAAAABkGbgCvAySEASZACGQAjgCEASZACGQAjgAAAAAZBm6AnwMkhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AAAAhubW9vdgAAAGxtdmhkAAAAAAAAAAAAAAAAAAAD6AAABDcAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAzB0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAABAAAAAAAAA+kAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAALAAAACQAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAPpAAAAAAABAAAAAAKobWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAB1MAAAdU5VxAAAAAAALWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABWaWRlb0hhbmRsZXIAAAACU21pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAhNzdGJsAAAAr3N0c2QAAAAAAAAAAQAAAJ9hdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAALAAkABIAAAASAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP//AAAALWF2Y0MBQsAN/+EAFWdCwA3ZAsTsBEAAAPpAADqYA8UKkgEABWjLg8sgAAAAHHV1aWRraEDyXyRPxbo5pRvPAyPzAAAAAAAAABhzdHRzAAAAAAAAAAEAAAAeAAAD6QAAABRzdHNzAAAAAAAAAAEAAAABAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAAIxzdHN6AAAAAAAAAAAAAAAeAAADDwAAAAsAAAALAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAAiHN0Y28AAAAAAAAAHgAAAEYAAANnAAADewAAA5gAAAO0AAADxwAAA+MAAAP2AAAEEgAABCUAAARBAAAEXQAABHAAAASMAAAEnwAABLsAAATOAAAE6gAABQYAAAUZAAAFNQAABUgAAAVkAAAFdwAABZMAAAWmAAAFwgAABd4AAAXxAAAGDQAABGh0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAACAAAAAAAABDcAAAAAAAAAAAAAAAEBAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAQkAAADcAABAAAAAAPgbWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAC7gAAAykBVxAAAAAAALWhkbHIAAAAAAAAAAHNvdW4AAAAAAAAAAAAAAABTb3VuZEhhbmRsZXIAAAADi21pbmYAAAAQc21oZAAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAADT3N0YmwAAABnc3RzZAAAAAAAAAABAAAAV21wNGEAAAAAAAAAAQAAAAAAAAAAAAIAEAAAAAC7gAAAAAAAM2VzZHMAAAAAA4CAgCIAAgAEgICAFEAVBbjYAAu4AAAADcoFgICAAhGQBoCAgAECAAAAIHN0dHMAAAAAAAAAAgAAADIAAAQAAAAAAQAAAkAAAAFUc3RzYwAAAAAAAAAbAAAAAQAAAAEAAAABAAAAAgAAAAIAAAABAAAAAwAAAAEAAAABAAAABAAAAAIAAAABAAAABgAAAAEAAAABAAAABwAAAAIAAAABAAAACAAAAAEAAAABAAAACQAAAAIAAAABAAAACgAAAAEAAAABAAAACwAAAAIAAAABAAAADQAAAAEAAAABAAAADgAAAAIAAAABAAAADwAAAAEAAAABAAAAEAAAAAIAAAABAAAAEQAAAAEAAAABAAAAEgAAAAIAAAABAAAAFAAAAAEAAAABAAAAFQAAAAIAAAABAAAAFgAAAAEAAAABAAAAFwAAAAIAAAABAAAAGAAAAAEAAAABAAAAGQAAAAIAAAABAAAAGgAAAAEAAAABAAAAGwAAAAIAAAABAAAAHQAAAAEAAAABAAAAHgAAAAIAAAABAAAAHwAAAAQAAAABAAAA4HN0c3oAAAAAAAAAAAAAADMAAAAaAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAACMc3RjbwAAAAAAAAAfAAAALAAAA1UAAANyAAADhgAAA6IAAAO+AAAD0QAAA+0AAAQAAAAEHAAABC8AAARLAAAEZwAABHoAAASWAAAEqQAABMUAAATYAAAE9AAABRAAAAUjAAAFPwAABVIAAAVuAAAFgQAABZ0AAAWwAAAFzAAABegAAAX7AAAGFwAAAGJ1ZHRhAAAAWm1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAALWlsc3QAAAAlqXRvbwAAAB1kYXRhAAAAAQAAAABMYXZmNTUuMzMuMTAw",
                            this.blankVideo.appendChild(t)
                    },
                    t.prototype.muteAd = function () {
                        void 0 !== this.adsManager && null != this.adsManager && this.adsManager.setVolume(0)
                    },
                    t
            }(),
            Z = function () {
                function t(t) {
                    this.adContainer = t,
                        this.currentTime = 0
                }
                return t.prototype.resize = function (t, e) {
                        this.width = t,
                            this.height = e
                    },
                    t
            }(),
            Q = Object.assign ||
            function (t) {
                for (var e, n = 1,
                        r = arguments.length; n < r; n++)
                    for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            },
            X = function () {
                function t(t) {
                    var e = this;
                    this.fireCloseOnce = !0,
                        this.pausedAd = function () {
                            c.dispatchEvent(s.ads.video.paused)
                        },
                        this.onAdManagerLoaded = function () {
                            c.dispatchEvent(s.ads.ready)
                        },
                        this.onAdDurationChange = function (t) {
                            var e = 1e3 * t.duration;
                            c.dispatchEvent(s.ads.durationChange, {
                                duration: e
                            })
                        },
                        this.onAdClicked = function () {
                            c.dispatchEvent(s.ads.video.clicked)
                        },
                        this.onAdComplete = function () {
                            c.dispatchEvent(s.ads.rewarded, {
                                position: e.position,
                                waterfall: e.waterfallN,
                                opportunityId: e.opportunityId
                            })
                        },
                        this.onVideoProgress = function (t) {
                            c.dispatchEvent(s.ads.video.progress, {
                                percentage: t
                            })
                        },
                        this.onRawAdEvent = function (t, n) {
                            c.dispatchEvent(s.ads.raw, {
                                event: t,
                                adTagUrl: n,
                                position: e.position,
                                waterfall: e.waterfallN,
                                opportunityId: e.opportunityId
                            })
                        },
                        this.onRawAdErrorEvent = function (t, n) {
                            c.dispatchEvent(s.ads.rawError, {
                                event: t,
                                adTagUrl: n,
                                position: e.position,
                                waterfall: e.waterfallN,
                                opportunityId: e.opportunityId
                            })
                        },
                        this.initVars(),
                        this.videoPlayer = new Z(t),
                        this.ads = new Y(this, this.videoPlayer)
                }
                return t.prototype.initVars = function () {
                        this.playing = !1,
                            this.adsActive = !1,
                            this.adsDone = !1
                    },
                    t.prototype.resumeAfterAd = function () {
                        this.initVars()
                    },
                    t.prototype.pauseForAd = function () {
                        this.adsActive = !0,
                            this.playing = !0
                    },
                    t.prototype.requestAd = function (t, e, n, r) {
                        if (void 0 === e && (e = ""), this.fireCloseOnce = !0, this.position = e, this.waterfallN = n, this.opportunityId = r, !this.adsDone) return this.ads.initialUserAction(),
                            this.ads.requestAds(t),
                            void(this.adsDone = !0);
                        this.playing = !this.playing
                    },
                    t.prototype.resize = function (t, e) {
                        this.videoPlayer.resize(t, e),
                            this.ads.resize(t, e)
                    },
                    t.prototype.muteAd = function () {
                        this.ads.muteAd()
                    },
                    t.prototype.startPlayback = function () {
                        this.ads.startPlayback()
                    },
                    t.prototype.stopPlayback = function () {
                        this.ads.stopPlayback()
                    },
                    t.prototype.resumeAd = function () {
                        c.dispatchEvent(s.ads.video.resumed),
                            this.ads.resumeAd()
                    },
                    t.prototype.onAdStarted = function (t, e) {
                        var n = 1e3 * (t.remainingTime || 0);
                        c.dispatchEvent(s.ads.started, Q({},
                            e, {
                                remainingTime: n,
                                position: this.position,
                                waterfall: this.waterfallN,
                                opportunityId: this.opportunityId
                            }))
                    },
                    t.prototype.onAdClosed = function (t) {
                        this.ads.contentEnded(),
                            t.type === s.ads.stopped ? c.dispatchEvent(s.ads.stopped, {
                                position: this.position,
                                waterfall: this.waterfallN,
                                opportunityId: this.opportunityId
                            }) : this.fireCloseOnce && (c.dispatchEvent(s.ads.completed, {
                                position: this.position,
                                waterfall: this.waterfallN,
                                opportunityId: this.opportunityId
                            }), this.fireCloseOnce = !1),
                            this.initVars()
                    },
                    t.prototype.onAdError = function (t) {
                        this.ads.contentEnded();
                        var e = t.getError && t.getError().toString() || "Unknown";
                        c.dispatchEvent(s.ads.video.error, {
                                message: e,
                                position: this.position,
                                waterfall: this.waterfallN,
                                opportunityId: this.opportunityId
                            }),
                            this.initVars()
                    },
                    t.prototype.onAdStoppedDuringRequest = function () {
                        this.ads.contentEnded(),
                            this.initVars()
                    },
                    t.prototype.onAdEvent = function (t) {
                        var e = t.getAd && t.getAd();
                        switch (t.type) {
                            case google.ima.AdEvent.Type.FIRST_QUARTILE:
                                c.dispatchEvent(s.ads.video.firstQuartile, {
                                    position: this.position,
                                    waterfall: this.waterfallN,
                                    opportunityId: this.opportunityId
                                });
                                break;
                            case google.ima.AdEvent.Type.MIDPOINT:
                                c.dispatchEvent(s.ads.video.midPoint, {
                                    position: this.position,
                                    waterfall: this.waterfallN,
                                    opportunityId: this.opportunityId
                                });
                                break;
                            case google.ima.AdEvent.Type.THIRD_QUARTILE:
                                c.dispatchEvent(s.ads.video.thirdQuartile, {
                                    position: this.position,
                                    waterfall: this.waterfallN,
                                    opportunityId: this.opportunityId
                                });
                                break;
                            case google.ima.AdEvent.Type.SKIPPED:
                                c.dispatchEvent(s.ads.skipped, {
                                    position: this.position,
                                    waterfall: this.waterfallN,
                                    opportunityId: this.opportunityId
                                });
                                break;
                            case google.ima.AdEvent.Type.IMPRESSION:
                                c.dispatchEvent(s.ads.impression, {
                                        position: this.position,
                                        waterfall: this.waterfallN,
                                        opportunityId: this.opportunityId
                                    }),
                                    e && (e.isLinear() ? c.dispatchEvent(s.ads.type.video, {
                                        position: this.position,
                                        waterfall: this.waterfallN,
                                        opportunityId: this.opportunityId
                                    }) : c.dispatchEvent(s.ads.type.display, {
                                        position: this.position,
                                        waterfall: this.waterfallN,
                                        opportunityId: this.opportunityId
                                    }))
                        }
                    },
                    t
            }(),
            J = function (t) {
                return new Promise(function (e, n) {
                    var r = document.createElement("script");
                    r.type = "text/javascript",
                        r.async = !0,
                        r.src = t;
                    var i = function () {
                        r.readyState && "loaded" !== r.readyState && "complete" !== r.readyState || (e(), r.onload = null, r.onreadystatechange = null)
                    };
                    r.onload = i,
                        r.onreadystatechange = i,
                        r.onerror = n,
                        document.head.appendChild(r)
                })
            },
            $ = function () {
                var t, e = (t = {
                        host: window.location.host || window.location.hostname,
                        href: window.location.href,
                        pathname: window.location.pathname,
                        referrer: document.referrer,
                        "ref-id": b("ref")
                    },
                    Object.keys(t).map(function (e) {
                        return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
                    }).join("&"));
                return fetch("//publishing-api.po123ki.com/game/hit", {
                    method: "POST",
                    body: e,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                    }
                }).then(function (t) {
                    if (t.status >= 200 && t.status < 400) return t.json();
                    throw new Error("Bad Request")
                }).
                catch(function () {})
            },
            tt = Object.assign ||
            function (t) {
                for (var e, n = 1,
                        r = arguments.length; n < r; n++)
                    for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            },
            et = function () {
                function t() {
                    this.autoStartOnReady = !1,
                        this.criteria = {},
                        this.debug = !1,
                        this.debugIsOverwritten = !1,
                        this.handlers = {},
                        this.isInitialized = !1,
                        this.programmaticAdsEnabled = !0,
                        this.sdkBooted = !1,
                        this.sdkImaError = !1,
                        this.adReady = !1,
                        this.setPlayerAge = function (t) {
                            t &&
                                function (t, e) {
                                    if (L) try {
                                        localStorage.setItem(t, e)
                                    } catch (n) {
                                        L = !1,
                                            q[t] = e
                                    } else q[t] = e
                                }("playerAge", t)
                        },
                        this.toggleNonPersonalized = function (e) {
                            t.nonPersonalized = e
                        },
                        this.setConsentString = function (e) {
                            t.consentString = e
                        },
                        this.sdkNotBootedButCalled = function () {
                            c.dispatchEvent(s.uninitialized, {}),
                                console.error("The Poki SDK has not yet been initialized")
                        }
                }
                return t.prototype.init = function (e) {
                        var r = this;
                        if (void 0 === e && (e = {}), "undefined" != typeof window) {
                            var i = this.checkForInitializeError();
                            if (i) return console.error("Poki SDK Error: " + i);
                            n(77);
                            var o, a = e.adTagUrl,
                                d = e.adTiming,
                                u = void 0 === d ? {} : d,
                                l = e.customCriteria,
                                f = void 0 === l ? {} : l,
                                g = e.debug,
                                h = void 0 !== g && g,
                                v = e.onReady,
                                y = void 0 === v ? null : v,
                                E = e.onAdblocked,
                                _ = void 0 === E ? null : E,
                                T = e.timeUpdateInterval,
                                S = e.prebid,
                                I = void 0 === S ? {} : S,
                                O = e.waterfallRetries,
                                x = e.wrapper,
                                P = void 0 === x ? document.body : x;
                            y && this.registerHandler("onReady", y),
                                _ && this.registerHandler("onAdblocked", _),
                                this.setupDefaultEvents(),
                                o = I,
                                window.pbjs = window.pbjs || {},
                                window.pbjs.que = window.pbjs.que || [],
                                window.pbjs.que.push(function () {
                                    window.pbjs.addAdUnits(o.adUnits || k),
                                        window.pbjs.setConfig(w({},
                                            C, o.config))
                                }),
                                this.debug = !!h;
                            var B = tt({},
                                m);
                            a ? (t.isPokiPlatform = !0, B = tt({},
                                    B, {
                                        adTagUrl: a,
                                        customCriteria: f,
                                        adTiming: u
                                    })) : t.isPokiPlatform = !1,
                                this.videoTimer = new A({
                                    timeUpdateInterval: T
                                });
                            var R = $;
                            (t.isPokiPlatform || this.debug) && (R = function () {
                                return Promise.resolve(B)
                            }),
                            window.addEventListener("resize", this.resize.bind(this), !1),
                                window.addEventListener("message", this.onMessage.bind(this), !1),
                                p.setupDefaultEvents(),
                                p.trackCDNLeaks();
                            var j = b("pokiDebug");
                            return j ? (this.setDebug("true" === j), this.debugIsOverwritten = !0) : this.setDebug(h),
                                Promise.all([R(), J("//imasdk.googleapis.com/js/sdkloader/ima3.js")]).
                            catch(function () {
                                c.dispatchEvent(s.adblocked)
                            }).then(function (t) {
                                if (void 0 !== t) {
                                    var e = t[0],
                                        n = tt({},
                                            m, e);
                                    r.enableSettings(n),
                                        r.adTimings.startStartAdsAfterTimer(),
                                        r.playerSkin = new M({
                                            wrapper: P
                                        }),
                                        r.application = new X(r.playerSkin.getVideoContainer()),
                                        r.playerSkin.setupEvents(r),
                                        r.waterfall = new D(r.application, {
                                            timing: r.adTimings,
                                            totalRetries: O,
                                            adTagUrl: n.adTagUrl
                                        }),
                                        c.dispatchEvent(s.ready)
                                }
                            })
                        }
                    },
                    t.prototype.requestAd = function (e) {
                        void 0 === e && (e = {});
                        var n = e.autoStart,
                            r = void 0 === n || n,
                            i = e.onStart,
                            o = void 0 === i ? null : i,
                            a = e.onFinish,
                            u = void 0 === a ? null : a,
                            l = e.position,
                            f = void 0 === l ? null : l,
                            p = e.customCriteria,
                            m = void 0 === p ? {} : p;
                        if (!this.sdkBooted) return c.dispatchEvent(s.ads.error, {
                                message: "Requesting ad on unbooted SDK"
                            }),
                            void this.sdkNotBootedButCalled();
                        if (this.sdkImaError) return c.dispatchEvent(s.ads.error, {
                                message: "Adblocker has been detected"
                            }),
                            void("function" == typeof u && u(s.ads.error));
                        if (this.autoStartOnReady = !1 !== r, u && this.registerHandler("onFinish", u), o && this.registerHandler("onStart", o), y() && f !== s.ads.position.rewarded) return c.dispatchEvent(s.ads.error, {
                            reason: "Interstitials are disabled on mobile"
                        });
                        if (null === f || !d(f, s.ads.position)) return console.error("POKI-SDK: Invalid position");
                        if (this.videoTimer.isAdRunning() || this.waterfall.isRunning()) return c.dispatchEvent(s.ads.busy);
                        if (this.adReady) return c.dispatchEvent(s.ads.ready);
                        if (f === s.ads.position.preroll && !this.adTimings.prerollPossible()) return c.dispatchEvent(s.ads.limit, {
                            reason: s.info.messages.prerollLimit
                        });
                        if (f !== s.ads.position.rewarded && !this.adTimings.requestPossible()) return c.dispatchEvent(s.ads.limit, {
                            reason: s.info.messages.timeLimit,
                            data: {
                                position: f
                            }
                        });
                        var g = tt({},
                            this.criteria, {
                                position: f
                            });
                        if (this.debug && (f === s.ads.position.rewarded ? g.debug = "ad-sdk-test-rewarded" : g.debug = "ad-sdk-test-video"), (t.isPokiPlatform || f === s.ads.position.rewarded) && (g = tt({},
                                g, m)), this.distributorId && 2 === Number(this.distributorId)) {
                            var h = encodeURIComponent(b("tag") || ""),
                                A = encodeURIComponent(b("site_id") || ""),
                                v = encodeURIComponent(b("categories") || "");
                            g.tag = h,
                                g.tag_site = h + "|" + A,
                                g.site_id = A,
                                g.categories = v
                        }
                        this.programmaticAdsEnabled || (g.disable_programmatic = 1);
                        var w = Math.random().toString(36).substring(2);
                        this.resize(),
                            this.playerSkin.showWithOpacity(),
                            this.waterfall.start(g, f === s.ads.position.rewarded, void 0, w)
                    },
                    t.prototype.enableSettings = function (t) {
                        this.criteria = tt({},
                                t.customCriteria, {
                                    pdata: t.hash
                                }),
                            this.adTimings = new h(t.adTiming),
                            this.gameId = Number(t.gameId),
                            this.distributorId = Number(t.distributorId),
                            this.country = t.country
                    },
                    t.prototype.togglePlayerAdvertisingConsent = function (t) {
                        if (t) {
                            var e, n = parseInt(function (t) {
                                    if (!L) return q[t];
                                    try {
                                        return localStorage.getItem(t)
                                    } catch (e) {
                                        return q[t]
                                    }
                                }("playerAge"), 10) || 0,
                                r = this.country,
                                i = (e = r, V.includes(e)),
                                o = function (t) {
                                    return G.includes(t)
                                }(r),
                                a = F(r);
                            (i || o || F) && (i && n <= 12 || o && n <= 16 || a && n <= 16) ? this.disableProgrammatic(): this.enableProgrammatic()
                        } else this.disableProgrammatic()
                    },
                    t.prototype.disableProgrammatic = function () {
                        t.childDirected = !0,
                            this.programmaticAdsEnabled = !1
                    },
                    t.prototype.enableProgrammatic = function () {
                        t.childDirected = !1,
                            this.programmaticAdsEnabled = !0
                    },
                    t.prototype.getProgrammaticAdsEnabled = function () {
                        return this.programmaticAdsEnabled
                    },
                    t.prototype.setDebug = function (t) {
                        this.debugIsOverwritten || (p.setDebug(t), c.setDebug(t), this.debug = t)
                    },
                    t.prototype.resize = function () {
                        if (!this.sdkBooted) return this.sdkNotBootedButCalled();
                        if (!this.sdkImaError) {
                            var t = this.playerSkin.getVideoBounds();
                            this.application.resize(t.width, t.height)
                        }
                    },
                    t.prototype.onMessage = function (t) {
                        if ("string" == typeof t.data.type) switch (t.data.type) {
                            case "toggleNonPersonalized":
                                this.toggleNonPersonalized(!(!t.data.content || !t.data.content.nonPersonalized));
                                break;
                            case "setPersonalizedADConsent":
                                this.toggleNonPersonalized(!(t.data.content && t.data.content.consent)),
                                    this.setConsentString(t.data.content ? t.data.content.consentString : "")
                        }
                    },
                    t.prototype.startAd = function () {
                        if (!this.sdkBooted) return this.sdkNotBootedButCalled();
                        this.sdkImaError || (this.adReady ? (this.resize(), this.playerSkin.show(), this.application.startPlayback()) : c.dispatchEvent(s.ads.error, {
                            message: "No ads ready to start"
                        }))
                    },
                    t.prototype.stopAd = function () {
                        if (!this.sdkBooted) return this.sdkNotBootedButCalled();
                        this.sdkImaError || (this.waterfall.stopWaterfall(), this.application.stopPlayback(), this.playerSkin.hide())
                    },
                    t.prototype.resumeAd = function () {
                        if (!this.sdkBooted) return this.sdkNotBootedButCalled();
                        this.sdkImaError || (this.playerSkin.hidePauseButton(), this.application.resumeAd())
                    },
                    t.prototype.muteAd = function () {
                        if (!this.sdkBooted) return this.sdkNotBootedButCalled();
                        this.sdkImaError || this.application.muteAd()
                    },
                    t.prototype.checkForInitializeError = function () {
                        return this.isInitialized ? "Poki SDK has already been initialized" : (this.isInitialized = !0, !1)
                    },
                    t.prototype.registerHandler = function (t, e) {
                        this.handlers[t] = e
                    },
                    t.prototype.callHandler = function (t) {
                        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                        "function" == typeof this.handlers[t] && this.handlers[t](e)
                    },
                    t.prototype.setupDefaultEvents = function () {
                        var t = this;
                        c.addEventListener(s.ready,
                                function () {
                                    t.sdkBooted = !0,
                                        t.callHandler("onReady")
                                }),
                            c.addEventListener(s.adblocked,
                                function () {
                                    t.sdkBooted = !0,
                                        t.sdkImaError = !0,
                                        t.callHandler("onAdblocked")
                                }),
                            c.addEventListener(s.ads.limit,
                                function () {
                                    t.callHandler("onFinish", s.ads.limit)
                                }),
                            c.addEventListener(s.ads.ready,
                                function () {
                                    t.adReady = !0,
                                        t.autoStartOnReady && t.startAd()
                                }),
                            c.addEventListener(s.ads.started,
                                function () {
                                    t.playerSkin.hideSpinner(),
                                        t.callHandler("onStart", s.ads.limit)
                                }),
                            c.addEventListener(s.ads.video.paused,
                                function () {
                                    t.playerSkin.showPauseButton()
                                }),
                            c.addEventListener(s.ads.error,
                                function () {
                                    t.callHandler("onFinish", s.ads.error)
                                }),
                            c.addEventListener(s.ads.completed,
                                function () {
                                    t.callHandler("onFinish", s.ads.completed)
                                }),
                            [s.ads.completed, s.ads.error, s.ads.limit, s.ads.stopped].forEach(function (e) {
                                c.addEventListener(e,
                                    function () {
                                        t.playerSkin && t.playerSkin.hide(),
                                            t.adReady = !1
                                    })
                            })
                    },
                    t.prototype.getDistributorId = function () {
                        return this.distributorId ? Number(this.distributorId) : void 0
                    },
                    t.prototype.getAdReady = function () {
                        return !!this.adReady
                    },
                    t.childDirected = !1,
                    t.isPokiPlatform = !1,
                    t.nonPersonalized = !1,
                    t.consentString = "",
                    t
            }(),
            nt = Object.assign ||
            function (t) {
                for (var e, n = 1,
                        r = arguments.length; n < r; n++)
                    for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            },
            rt = function () {
                function t() {
                    var t = this;
                    this.gameStarted = !1,
                        this.init = function () {
                            return new Promise(function (e, n) {
                                t.SDK = new et,
                                    t.SDK.init({
                                        onReady: e,
                                        onAdblocked: n
                                    }),
                                    u.sendMessage(s.message.sdkDetails, {
                                        version: "2.37.0"
                                    })
                            })
                        },
                        this.initWithVideoHB = function () {
                            return t.init()
                        },
                        this.gameLoadingStart = function () {
                            p.track(s.tracking.screen.gameLoadingStarted)
                        },
                        this.gameLoadingFinished = function () {
                            p.track(s.tracking.screen.gameLoadingFinished)
                        },
                        this.gameLoadingProgress = function (t) {
                            var e = {};
                            void 0 !== t.percentageDone && (e.percentageDone = Number(t.percentageDone)),
                                void 0 !== t.kbLoaded && (e.kbLoaded = Number(t.kbLoaded)),
                                void 0 !== t.kbTotal && (e.kbTotal = Number(t.kbTotal)),
                                void 0 !== t.fileNameLoaded && (e.fileNameLoaded = String(t.fileNameLoaded)),
                                void 0 !== t.filesLoaded && (e.filesLoaded = Number(t.filesLoaded)),
                                void 0 !== t.filesTotal && (e.filesTotal = Number(t.filesTotal))
                        },
                        this.gameplayStart = function () {
                            t.gameStarted || (t.gameStarted = !0, p.track(s.tracking.screen.firstRound)),
                                p.track(s.tracking.screen.gameplayStart)
                        },
                        this.gameInteractive = function () {
                            p.track(s.tracking.screen.gameInteractive)
                        },
                        this.gameplayStop = function () {
                            p.track(s.tracking.screen.gameplayStop)
                        },
                        this.roundStart = function (t) {
                            void 0 === t && (t = ""),
                                t = String(t),
                                p.track(s.tracking.screen.roundStart, {
                                    identifier: t
                                })
                        },
                        this.roundEnd = function (t) {
                            void 0 === t && (t = ""),
                                t = String(t),
                                p.track(s.tracking.screen.roundEnd, {
                                    identifier: t
                                })
                        },
                        this.customEvent = function (e, n, r) {
                            if (void 0 === r && (r = {}), !e || !n) return t.error("customEvent", "customEvent needs at least a noun and a verb");
                            e = String(e),
                                n = String(n),
                                r = nt({},
                                    r),
                                p.track(s.tracking.custom, {
                                    eventNoun: e,
                                    eventVerb: n,
                                    eventData: r
                                })
                        },
                        this.commercialBreak = function () {
                            return new Promise(function (e) {
                                p.track(s.tracking.screen.commercialBreak);
                                var n = function () {
                                    c.removeEventListener(s.ads.completed, n),
                                        c.removeEventListener(s.ads.limit, n),
                                        c.removeEventListener(s.ads.error, n),
                                        c.removeEventListener(s.ads.busy, n),
                                        e()
                                };
                                c.addEventListener(s.ads.completed, n),
                                    c.addEventListener(s.ads.limit, n),
                                    c.addEventListener(s.ads.error, n),
                                    c.addEventListener(s.ads.busy, n);
                                var r = t.gameStarted ? s.ads.position.midroll : s.ads.position.preroll;
                                t.SDK.requestAd({
                                    position: r
                                })
                            })
                        },
                        this.rewardedBreak = function () {
                            return new Promise(function (e) {
                                p.track(s.tracking.screen.rewardedBreak);
                                var n = function (t) {
                                        c.removeEventListener(s.ads.completed, r),
                                            c.removeEventListener(s.ads.limit, r),
                                            c.removeEventListener(s.ads.error, r),
                                            c.removeEventListener(s.ads.busy, r),
                                            c.removeEventListener(s.ads.rewarded, i),
                                            e(t)
                                    },
                                    r = function () {
                                        return n(!1)
                                    },
                                    i = function () {
                                        return n(!0)
                                    };
                                console.log("requestAds");

                                c.addEventListener(s.ads.completed, r),
                                    c.addEventListener(s.ads.limit, r),
                                    c.addEventListener(s.ads.error, r),
                                    c.addEventListener(s.ads.busy, r),
                                    c.addEventListener(s.ads.rewarded, i),
                                    t.SDK.requestAd({
                                        position: s.ads.position.rewarded
                                    })
                            })
                        },
                        this.happyTime = function (e) {
                            void 0 === e && (e = 1),
                                ((e = Number(e)) < 0 || e > 1) && (e = Math.max(0, Math.min(1, e)), t.warning("happyTime", "Intensity should be a value between 0 and 1, adjusted to " + e)),
                                p.track(s.tracking.screen.happyTime, {
                                    intensity: e
                                })
                        },
                        this.muteAd = function () {
                            t.SDK.muteAd()
                        },
                        this.setPlayerAge = function (e) {
                            p.track(s.tracking.setPlayerAge, {
                                    age: e
                                }),
                                e && t.SDK.setPlayerAge(e)
                        },
                        this.togglePlayerAdvertisingConsent = function (e) {
                            p.track(s.tracking.togglePlayerAdvertisingConsent, {
                                    didConsent: e
                                }),
                                t.SDK.togglePlayerAdvertisingConsent(e),
                                u.sendMessage(s.message.toggleProgrammaticAds, {
                                    enabled: t.SDK.getProgrammaticAdsEnabled()
                                })
                        },
                        this.warning = function (t, e) {
                            console.warn("PokiSDK." + t + ": " + e)
                        },
                        this.error = function (t, e) {
                            console.error("PokiSDK." + t + ": " + e)
                        }
                }
                return t.prototype.setDebug = function (t) {
                        void 0 === t && (t = !0),
                            this.SDK.setDebug(t)
                    },
                    t.prototype.disableProgrammatic = function () {
                        this.SDK.disableProgrammatic()
                    },
                    t.prototype.toggleNonPersonalized = function (t) {
                        void 0 === t && (t = !1),
                            this.SDK.toggleNonPersonalized(t)
                    },
                    t.prototype.setConsentString = function (t) {
                        this.SDK.setConsentString(t)
                    },
                    t
            }();
        window.PokiSDK = new rt
    }
]);