!function(e) {
    function t(r) {
        if (n[r])
            return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, t),
        o.l = !0,
        o.exports
    }
    var n = {};
    t.m = e,
    t.c = n,
    t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }
    ,
    t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return t.d(n, "a", n),
        n
    }
    ,
    t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    t.p = "",
    t(t.s = 0)
}([function(e, t, n) {
    e.exports = n(1)
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function s(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++)
                n[t] = e[t];
            return n
        }
        return Array.from(e)
    }
    function c(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++)
                n[t] = e[t];
            return n
        }
        return Array.from(e)
    }
    function u(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function l(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++)
                n[t] = e[t];
            return n
        }
        return Array.from(e)
    }
    function p(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function d(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function f(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    function h(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function _(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function y(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    function m(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function v(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function b(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    function g(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function w(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function E(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    function k(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function P(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function S(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    function O(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function A(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function C(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    function T(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function j(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function R(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function I(e, t) {
        var n = {};
        for (var r in e)
            t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    }
    function M(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function q(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function L(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function N(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    function D(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function B(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++)
                n[t] = e[t];
            return n
        }
        return Array.from(e)
    }
    function x(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++)
                n[t] = e[t];
            return n
        }
        return Array.from(e)
    }
    function F(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function U(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++)
                n[t] = e[t];
            return n
        }
        return Array.from(e)
    }
    function W(e, t) {
        var n = {};
        for (var r in e)
            t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    }
    function z(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function H(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function Y(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    function G(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function V(e, t) {
        var n = {};
        for (var r in e)
            t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    }
    function K(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function $(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function J(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    function Q(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function Z(e, t) {
        var n = {};
        for (var r in e)
            t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    }
    function X(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function ee(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function te(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    function ne(e, t) {
        var n = {};
        for (var r in e)
            t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    }
    function re(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++)
                n[t] = e[t];
            return n
        }
        return Array.from(e)
    }
    function oe(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function ae(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function ie(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    function se(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++)
                n[t] = e[t];
            return n
        }
        return Array.from(e)
    }
    function ce(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function ue(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++)
                n[t] = e[t];
            return n
        }
        return Array.from(e)
    }
    function le(e, t) {
        var n = {};
        for (var r in e)
            t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    }
    function pe(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function de(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function fe(e, t) {
        var n = {};
        for (var r in e)
            t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    }
    function he(e, t) {
        var n = {};
        for (var r in e)
            t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    }
    function _e(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++)
                n[t] = e[t];
            return n
        }
        return Array.from(e)
    }
    function ye(e, t) {
        var n = {};
        for (var r in e)
            t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    }
    function me(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function ve(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++)
                n[t] = e[t];
            return n
        }
        return Array.from(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var be, ge, we, Ee, ke, Pe, Se = function(e) {
        function t(e) {
            r(this, t);
            var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return window.__stripeElementsController && window.__stripeElementsController.reportIntegrationError(e),
            n.name = "IntegrationError",
            Object.defineProperty(n, "message", {
                value: n.message,
                enumerable: !0
            }),
            n
        }
        return a(t, e),
        t
    }(Error), Oe = Se, Ae = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "absurd";
        throw new Error(t)
    }, Ce = n(2), Te = n.n(Ce), je = window.Promise ? Promise : Te.a, Re = je, Ie = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    , Me = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    , qe = function(e, t) {
        for (var n = 0; n < e.length; n++)
            if (t(e[n]))
                return e[n]
    }, Le = function(e, t) {
        for (var n = 0; n < e.length; n++)
            if (t(e[n]))
                return n;
        return -1
    }, Ne = function(e) {
        return e && "object" === (void 0 === e ? "undefined" : Me(e)) && (e.constructor === Array || e.constructor === Object)
    }, De = function(e) {
        return Ne(e) ? Array.isArray(e) ? e.slice(0, e.length) : Ie({}, e) : e
    }, Be = function e(t) {
        return function() {
            for (var n = arguments.length, r = Array(n), o = 0; o < n; o++)
                r[o] = arguments[o];
            if (Array.isArray(r[0]) && t)
                return De(r[0]);
            var a = Array.isArray(r[0]) ? [] : {};
            return r.forEach(function(n) {
                n && Object.keys(n).forEach(function(r) {
                    var o = a[r]
                      , i = n[r]
                      , s = Ne(o) && !(t && Array.isArray(o));
                    "object" === (void 0 === i ? "undefined" : Me(i)) && s ? a[r] = e(t)(o, De(i)) : void 0 !== i ? a[r] = Ne(i) ? e(t)(i) : De(i) : void 0 !== o && (a[r] = o)
                })
            }),
            a
        }
    }, xe = (Be(!1),
    Be(!0)), Fe = function(e, t) {
        for (var n = {}, r = 0; r < t.length; r++)
            n[t[r]] = !0;
        for (var o = [], a = 0; a < e.length; a++)
            n[e[a]] && o.push(e[a]);
        return o
    }, Ue = function(e, t) {
        var n = 0
          , r = function r(o) {
            for (var a = Date.now() + 50; n < e.length && Date.now() < a; )
                t(e[n]),
                n++;
            n === e.length ? o() : setTimeout(function() {
                return r(o)
            })
        };
        return new Re(function(e) {
            return r(e)
        }
        )
    }, We = ["aed", "afn", "all", "amd", "ang", "aoa", "ars", "aud", "awg", "azn", "bam", "bbd", "bdt", "bgn", "bhd", "bif", "bmd", "bnd", "bob", "brl", "bsd", "btn", "bwp", "byr", "bzd", "cad", "cdf", "chf", "clf", "clp", "cny", "cop", "crc", "cuc", "cup", "cve", "czk", "djf", "dkk", "dop", "dzd", "egp", "ern", "etb", "eur", "fjd", "fkp", "gbp", "gel", "ghs", "gip", "gmd", "gnf", "gtq", "gyd", "hkd", "hnl", "hrk", "htg", "huf", "idr", "ils", "inr", "iqd", "irr", "isk", "jmd", "jod", "jpy", "kes", "kgs", "khr", "kmf", "kpw", "krw", "kwd", "kyd", "kzt", "lak", "lbp", "lkr", "lrd", "lsl", "ltl", "lvl", "lyd", "mad", "mdl", "mga", "mkd", "mmk", "mnt", "mop", "mro", "mur", "mvr", "mwk", "mxn", "myr", "mzn", "nad", "ngn", "nio", "nok", "npr", "nzd", "omr", "pab", "pen", "pgk", "php", "pkr", "pln", "pyg", "qar", "ron", "rsd", "rub", "rwf", "sar", "sbd", "scr", "sdg", "sek", "sgd", "shp", "skk", "sll", "sos", "srd", "ssp", "std", "svc", "syp", "szl", "thb", "tjs", "tmt", "tnd", "top", "try", "ttd", "twd", "tzs", "uah", "ugx", "usd", "uyu", "uzs", "vef", "vnd", "vuv", "wst", "xaf", "xag", "xau", "xcd", "xdr", "xof", "xpf", "yer", "zar", "zmk", "zmw", "btc", "jep", "eek", "ghc", "mtl", "tmm", "yen", "zwd", "zwl", "zwn", "zwr"], ze = We, He = {
        AT: "AT",
        AU: "AU",
        BE: "BE",
        BR: "BR",
        CA: "CA",
        CH: "CH",
        DE: "DE",
        DK: "DK",
        EE: "EE",
        ES: "ES",
        FI: "FI",
        FR: "FR",
        GB: "GB",
        GR: "GR",
        HK: "HK",
        IE: "IE",
        IN: "IN",
        IT: "IT",
        JP: "JP",
        LT: "LT",
        LU: "LU",
        LV: "LV",
        MX: "MX",
        MY: "MY",
        NL: "NL",
        NO: "NO",
        NZ: "NZ",
        PH: "PH",
        PL: "PL",
        PT: "PT",
        RO: "RO",
        SE: "SE",
        SG: "SG",
        SK: "SK",
        US: "US"
    }, Ye = Object.keys(He), Ge = {
        live: "live",
        test: "test",
        unknown: "unknown"
    }, Ve = function(e) {
        return /^pk_test_/.test(e) ? Ge.test : /^pk_live_/.test(e) ? Ge.live : Ge.unknown
    }, Ke = function(e) {
        if (e === Ge.unknown)
            throw new Oe("It looks like you're using an older Stripe key. In order to use this API, you'll need to use a modern API key, which is prefixed with 'pk_live_' or 'pk_test_'.\n    You can roll your publishable key here: https://dashboard.stripe.com/account/apikeys")
    }, $e = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    , Je = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    , Qe = function(e, t, n) {
        return "Invalid value for " + n.label + ": " + (n.path.join(".") || "value") + " should be " + e + ". You specified: " + t + "."
    }, Ze = function(e) {
        return {
            type: "valid",
            value: e,
            warnings: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
        }
    }, Xe = function(e) {
        return {
            error: e,
            errorType: "full",
            type: "error"
        }
    }, et = function(e, t, n) {
        var r = new Oe(Qe(e, t, n));
        return Xe(r)
    }, tt = function(e, t, n) {
        return {
            expected: e,
            actual: String(t),
            options: n,
            errorType: "mismatch",
            type: "error"
        }
    }, nt = function(e) {
        return function(t, n) {
            return void 0 === t ? Ze(t) : e(t, n)
        }
    }, rt = function(e, t) {
        return function(n, r) {
            var o = function(e) {
                var t = e.options.path.join(".") || "value";
                return {
                    error: t + " should be " + e.expected,
                    actual: t + " as " + e.actual
                }
            }
              , a = function(e, t, n) {
                return Xe(new Oe("Invalid value for " + e + ": " + t + ". You specified " + n + "."))
            }
              , i = e(n, r)
              , s = t(n, r);
            if ("error" === i.type && "error" === s.type) {
                if ("mismatch" === i.errorType && "mismatch" === s.errorType) {
                    var c = o(i)
                      , u = c.error
                      , l = c.actual
                      , p = o(s)
                      , d = p.error
                      , f = p.actual;
                    return a(r.label, u === d ? u : u + " or " + d, l === f ? l : l + " and " + f)
                }
                if ("mismatch" === i.errorType) {
                    var h = o(i)
                      , _ = h.error
                      , y = h.actual;
                    return a(r.label, _, y)
                }
                if ("mismatch" === s.errorType) {
                    var m = o(s)
                      , v = m.error
                      , b = m.actual;
                    return a(r.label, v, b)
                }
                return Xe(i.error)
            }
            return "valid" === i.type ? i : s
        }
    }, ot = function(e, t) {
        return function(n, r) {
            return n instanceof e ? Ze(n) : tt("a " + t + " instance", n, r)
        }
    }, at = function(e, t) {
        return function(n, r) {
            var o = qe(e, function(e) {
                return e === n
            });
            if (void 0 === o) {
                var a = t ? "a recognized string." : "one of the following strings: " + e.join(", ");
                return tt(a, n, r)
            }
            return Ze(o)
        }
    }, it = function(e) {
        return function(t, n) {
            return "string" == typeof t && 0 === t.indexOf(e) ? Ze(t) : tt("a string starting with " + e, t, n)
        }
    }, st = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        return at(t, !1)
    }, ct = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        return at(t, !0)
    }, ut = st.apply(void 0, s(Ye)), lt = st.apply(void 0, s(ze)), pt = (st.apply(void 0, s(Object.keys(Ge))),
    function(e, t) {
        return "string" == typeof e ? Ze(e) : tt("a string", e, t)
    }
    ), dt = function(e, t) {
        return function(n, r) {
            return void 0 === n ? Ze(t()) : e(n, r)
        }
    }, ft = function(e, t) {
        return "boolean" == typeof e ? Ze(e) : tt("a boolean", e, t)
    }, ht = function(e) {
        return function(t, n) {
            return "number" == typeof t && t > e ? Ze(t) : tt("a number greater than " + e, t, n)
        }
    }, _t = function(e) {
        return function(t, n) {
            return "number" == typeof t && t === parseInt(t, 10) && (!e || t >= 0) ? Ze(t) : tt(e ? "a positive amount in the currency's subunit" : "an amount in the currency's subunit", t, n)
        }
    }, yt = function(e, t) {
        return _t(!1)(e, t)
    }, mt = function(e, t) {
        return _t(!0)(e, t)
    }, vt = function(e, t) {
        return e && "object" === (void 0 === e ? "undefined" : Je(e)) ? Ze(e) : tt("an object", e, t)
    }, bt = function(e) {
        return function(t, n) {
            if (Array.isArray(t)) {
                return t.map(function(t, r) {
                    return e(t, $e({}, n, {
                        path: [].concat(s(n.path), [String(r)])
                    }))
                }).reduce(function(e, t) {
                    return "error" === e.type ? e : "error" === t.type ? t : Ze([].concat(s(e.value), [t.value]), [].concat(s(e.warnings), s(t.warnings)))
                }, Ze([]))
            }
            return tt("array", t, n)
        }
    }, gt = function(e) {
        return function(t) {
            return function(n, r) {
                if (Array.isArray(n)) {
                    var o = t(n, r);
                    if ("valid" === o.type)
                        for (var a = {}, i = 0; i < o.value.length; i += 1) {
                            var s = o.value[i];
                            if ("object" === (void 0 === s ? "undefined" : Je(s)) && s && "string" == typeof s[e]) {
                                var c = s[e];
                                if (a[c])
                                    return Xe(new Oe("Duplicate value for " + e + ": " + c + ". The property '" + e + "' of '" + r.path.join(".") + "' has to be unique."));
                                a[c] = !0
                            }
                        }
                    return o
                }
                return tt("array", n, r)
            }
        }
    }, wt = function(e) {
        return function(t, n) {
            return void 0 === t ? Ze(void 0) : tt("used in " + e + " instead", t, n)
        }
    }, Et = function(e) {
        return function(t) {
            return function(n, r) {
                if (n && "object" === (void 0 === n ? "undefined" : Je(n)) && !Array.isArray(n)) {
                    var o = n
                      , a = qe(Object.keys(o), function(e) {
                        return !t[e]
                    });
                    if (a && e)
                        return Xe(new Oe("Invalid " + r.label + " parameter: " + [].concat(s(r.path), [a]).join(".") + " is not an accepted parameter."));
                    var c = Ze({});
                    return a && (c = Object.keys(o).reduce(function(e, n) {
                        return t[n] ? e : Ze(e.value, [].concat(s(e.warnings), ["Unrecognized " + r.label + " parameter: " + [].concat(s(r.path), [n]).join(".") + " is not a recognized parameter. This may cause issues with your integration in the future."]))
                    }, c)),
                    Object.keys(t).reduce(function(e, n) {
                        if ("error" === e.type)
                            return e;
                        var a = t[n]
                          , c = a(o[n], $e({}, r, {
                            path: [].concat(s(r.path), [n])
                        }));
                        return "valid" === c.type && void 0 !== c.value ? Ze($e({}, e.value, i({}, n, c.value)), [].concat(s(e.warnings), s(c.warnings))) : "valid" === c.type ? Ze(e.value, [].concat(s(e.warnings), s(c.warnings))) : c
                    }, c)
                }
                return tt("an object", n, r)
            }
        }
    }, kt = Et(!0), Pt = Et(!1), St = function(e, t, n, r) {
        var o = r || {}
          , a = e(t, {
            origin: o.origin || "",
            element: o.element || "",
            label: n,
            path: []
        });
        return "valid" === a.type ? a : "full" === a.errorType ? a : {
            type: "error",
            errorType: "full",
            error: new Oe(Qe(a.expected, a.actual, a.options))
        }
    }, Ot = function(e, t, n, r) {
        var o = St(e, t, n, r);
        switch (o.type) {
        case "valid":
            return {
                value: o.value,
                warnings: o.warnings
            };
        case "error":
            throw o.error;
        default:
            return Ae(o)
        }
    }, At = /^(http(s)?):\/\//, Ct = function(e) {
        return At.test(e)
    }, Tt = function(e) {
        if (!Ct(e))
            return null;
        var t = document.createElement("a");
        t.href = e;
        var n = t.protocol
          , r = t.host
          , o = /:80$/
          , a = /:443$/;
        return "http:" === n && o.test(r) ? r = r.replace(o, "") : "https:" === n && a.test(r) && (r = r.replace(a, "")),
        {
            host: r,
            protocol: n,
            origin: n + "//" + r
        }
    }, jt = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
          , n = Tt(e);
        return !!n && n.host !== (t || window.location.host)
    }, Rt = function(e, t) {
        if ("/" === t[0]) {
            var n = Tt(e);
            return n ? "" + n.origin + t : t
        }
        return "" + e.replace(/\/[^\/]*$/, "/") + t
    }, It = {
        CARD_ELEMENT: "CARD_ELEMENT",
        CONTROLLER: "CONTROLLER",
        METRICS_CONTROLLER: "METRICS_CONTROLLER",
        PAYMENT_REQUEST_ELEMENT: "PAYMENT_REQUEST_ELEMENT",
        PAYMENT_REQUEST_BROWSER: "PAYMENT_REQUEST_BROWSER",
        PAYMENT_REQUEST_GOOGLE_PAY: "PAYMENT_REQUEST_GOOGLE_PAY",
        IBAN_ELEMENT: "IBAN_ELEMENT",
        IDEAL_BANK_ELEMENT: "IDEAL_BANK_ELEMENT",
        AUTHORIZE_WITH_URL: "AUTHORIZE_WITH_URL",
        CARDINAL_3DS2: "CARDINAL_3DS2",
        STRIPE_3DS2: "STRIPE_3DS2"
    }, Mt = It, qt = function(e) {
        return "https://js.stripe.com/v3/" + (e || "")
    }, Lt = function(e) {
        switch (e) {
        case "CARD_ELEMENT":
            return qt("elements-inner-card-a38e7f3b455049821703011c3bd4e407.html");
        case "CONTROLLER":
            return qt("controller-34243ca61b4cd746557d9134819d5ee3.html");
        case "METRICS_CONTROLLER":
            return "https://js.stripe.com/v2/m/outer.html";
        case "PAYMENT_REQUEST_ELEMENT":
            return qt("elements-inner-payment-request-f80f804c543bfd8cc14e49185830799c.html");
        case "PAYMENT_REQUEST_BROWSER":
            return qt("payment-request-inner-browser-8a8f73a32440981d0b7b9a195a1210ea.html");
        case "PAYMENT_REQUEST_GOOGLE_PAY":
            return qt("payment-request-inner-google-pay-77ee3ba6aa44076f018a7164d24ce00f.html");
        case "IBAN_ELEMENT":
            return qt("elements-inner-iban-7255562768cd7f6671ef090450d94e7c.html");
        case "IDEAL_BANK_ELEMENT":
            return qt("elements-inner-ideal-bank-94f2d83d08f11a901832477b9b14ae10.html");
        case "AUTHORIZE_WITH_URL":
            return qt("authorize-with-url-inner-7ce71741c9ad8c12712852294b0e7a4e.html");
        case "CARDINAL_3DS2":
            return qt("cardinal-inner-0baa9b7f23e27f64926aea03b503e5f6.html");
        case "STRIPE_3DS2":
            return qt("three-ds-2-inner-481d020bf6c04689902a5325ebc6ee85.html");
        default:
            return Ae(e)
        }
    }, Nt = Lt, Dt = {
        card: "card",
        cardNumber: "cardNumber",
        cardExpiry: "cardExpiry",
        cardCvc: "cardCvc",
        postalCode: "postalCode",
        iban: "iban",
        idealBank: "idealBank",
        idealBankSecondary: "idealBankSecondary",
        paymentRequestButton: "paymentRequestButton"
    }, Bt = Dt, xt = [Bt.card, Bt.cardNumber, Bt.cardExpiry, Bt.cardCvc, Bt.postalCode], Ft = xt, Ut = Tt("https://js.stripe.com/v3/"), Wt = Ut ? Ut.origin : "", zt = {
        family: "font-family",
        src: "src",
        unicodeRange: "unicode-range",
        style: "font-style",
        variant: "font-variant",
        stretch: "font-stretch",
        weight: "font-weight",
        display: "font-display"
    }, Ht = Object.keys(zt).reduce(function(e, t) {
        return e[zt[t]] = t,
        e
    }, {}), Yt = [Bt.idealBank, Bt.idealBankSecondary], Gt = 0, Vt = function(e) {
        return "" + e + Gt++
    }, Kt = function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return t ? (parseInt(t, 10) ^ 16 * Math.random() >> parseInt(t, 10) / 4).toString(16) : "00000000-0000-4000-8000-000000000000".replace(/[08]/g, e)
    }, $t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    , Jt = function e(t, n) {
        var r = [];
        return Object.keys(t).forEach(function(o) {
            var a = t[o]
              , i = n ? n + "[" + o + "]" : o;
            if (a && "object" === (void 0 === a ? "undefined" : $t(a))) {
                var s = e(a, i);
                "" !== s && (r = [].concat(c(r), [s]))
            } else
                void 0 !== a && null !== a && (r = [].concat(c(r), [i + "=" + encodeURIComponent(String(a))]))
        }),
        r.join("&").replace(/%20/g, "+")
    }, Qt = Jt, Zt = n(6), Xt = n.n(Zt), en = function() {
        function e(e, t) {
            var n = []
              , r = !0
              , o = !1
              , a = void 0;
            try {
                for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value),
                !t || n.length !== t); r = !0)
                    ;
            } catch (e) {
                o = !0,
                a = e
            } finally {
                try {
                    !r && s.return && s.return()
                } finally {
                    if (o)
                        throw a
                }
            }
            return n
        }
        return function(t, n) {
            if (Array.isArray(t))
                return t;
            if (Symbol.iterator in Object(t))
                return e(t, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }(), tn = function(e, t) {
        var n = {};
        t.forEach(function(e) {
            var t = en(e, 2)
              , r = t[0]
              , o = t[1];
            r.split(/\s+/).forEach(function(e) {
                e && (n[e] = n[e] || o)
            })
        }),
        e.className = Xt()(e.className, n)
    }, nn = function(e, t) {
        e.style.cssText = Object.keys(t).map(function(e) {
            return e + ": " + t[e] + " !important;"
        }).join(" ")
    }, rn = function(e) {
        try {
            return window.parent.frames[e]
        } catch (e) {
            return null
        }
    }, on = function(e) {
        if (!document.body)
            throw new Oe("Stripe.js requires that your page has a <body> element.");
        return e(document.body)
    }, an = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    , sn = function(e) {
        var t = e.frameId
          , n = e.controllerId
          , r = e.type
          , o = Wt
          , a = void 0;
        "controller" === r ? a = rn(t) : "group" === r ? a = rn(n) : "outer" === r ? a = window.frames[t] : "inner" === r && (o = "*",
        a = window.parent),
        a && a.postMessage(JSON.stringify(an({}, e, {
            __stripeJsV3: !0
        })), o)
    }, cn = function(e) {
        try {
            var t = "string" == typeof e ? JSON.parse(e) : e;
            return t.__stripeJsV3 ? t : null
        } catch (e) {
            return null
        }
    }, un = (n(7),
    function(e, t) {
        var n = e._isUserError || "IntegrationError" === e.name;
        throw t && !n && t.report("fatal.uncaught_error", {
            iframe: !1,
            name: e.name,
            element: "outer",
            message: e.message || e.description,
            fileName: e.fileName,
            lineNumber: e.lineNumber,
            columnNumber: e.columnNumber,
            stack: e.stack && e.stack.substring(0, 1e3)
        }),
        e
    }
    ), ln = function(e, t) {
        return function(n) {
            try {
                return e.call(this, n)
            } catch (e) {
                return un(e, t || this && this._controller)
            }
        }
    }, pn = function(e, t) {
        return function(n, r) {
            try {
                return e.call(this, n, r)
            } catch (e) {
                return un(e, t || this && this._controller)
            }
        }
    }, dn = function(e, t) {
        return function(n, r, o) {
            try {
                return e.call(this, n, r, o)
            } catch (e) {
                return un(e, t || this && this._controller)
            }
        }
    }, fn = function(e, t) {
        return function() {
            try {
                for (var n = arguments.length, r = Array(n), o = 0; o < n; o++)
                    r[o] = arguments[o];
                return e.call.apply(e, [this].concat(r))
            } catch (e) {
                return un(e, t || this && this._controller)
            }
        }
    }, hn = function e() {
        var t = this;
        u(this, e),
        this._emit = function(e) {
            for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                r[o - 1] = arguments[o];
            return (t._callbacks[e] || []).forEach(function(e) {
                var t = e.fn;
                if (t._isUserCallback)
                    try {
                        t.apply(void 0, r)
                    } catch (e) {
                        throw e._isUserError = !0,
                        e
                    }
                else
                    t.apply(void 0, r)
            }),
            t
        }
        ,
        this._once = function(e, n) {
            var r = function r() {
                t._off(e, r),
                n.apply(void 0, arguments)
            };
            return t._on(e, r, n)
        }
        ,
        this._removeAllListeners = function() {
            return t._callbacks = {},
            t
        }
        ,
        this._on = function(e, n, r) {
            return t._callbacks[e] = t._callbacks[e] || [],
            t._callbacks[e].push({
                original: r,
                fn: n
            }),
            t
        }
        ,
        this._validateUserOn = function(e, t) {}
        ,
        this._userOn = function(e, n) {
            if ("string" != typeof e)
                throw new Oe("When adding an event listener, the first argument should be a string event name.");
            if ("function" != typeof n)
                throw new Oe("When adding an event listener, the second argument should be a function callback.");
            return t._validateUserOn(e, n),
            n._isUserCallback = !0,
            t._on(e, n)
        }
        ,
        this._hasRegisteredListener = function(e) {
            return t._callbacks[e] && t._callbacks[e].length > 0
        }
        ,
        this._off = function(e, n) {
            if (n) {
                for (var r = t._callbacks[e], o = void 0, a = 0; a < r.length; a++)
                    if (o = r[a],
                    o.fn === n || o.original === n) {
                        r.splice(a, 1);
                        break
                    }
            } else
                delete t._callbacks[e];
            return t
        }
        ,
        this._callbacks = {};
        var n = pn(this._userOn)
          , r = pn(this._off)
          , o = pn(this._once)
          , a = ln(this._hasRegisteredListener)
          , i = ln(this._removeAllListeners)
          , s = fn(this._emit);
        this.on = this.addListener = this.addEventListener = n,
        this.off = this.removeListener = this.removeEventListener = r,
        this.once = o,
        this.hasRegisteredListener = a,
        this.removeAllListeners = i,
        this.emit = s
    }, _n = hn, yn = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    , mn = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }(), vn = function(e) {
        function t(e, n, r) {
            p(this, t);
            var o = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return o.type = e,
            o.loaded = !1,
            o._controllerId = n,
            o._persistentMessages = [],
            o._queuedMessages = [],
            o._requests = {},
            o.id = o._generateId(),
            o._iframe = o._createIFrame(r),
            o._on("load", function() {
                o.loaded = !0,
                o._ensureMounted(),
                o.loaded && (o._persistentMessages.forEach(function(e) {
                    return o._send(e)
                }),
                o._queuedMessages.forEach(function(e) {
                    return o._send(e)
                }),
                o._queuedMessages = [])
            }),
            o
        }
        return f(t, e),
        mn(t, [{
            key: "_generateId",
            value: function() {
                return Vt("__privateStripeFrame")
            }
        }, {
            key: "send",
            value: function(e) {
                this._send({
                    message: e,
                    type: "outer",
                    frameId: this.id,
                    controllerId: this._controllerId
                })
            }
        }, {
            key: "sendPersistent",
            value: function(e) {
                this._ensureMounted();
                var t = {
                    message: e,
                    type: "outer",
                    frameId: this.id,
                    controllerId: this._controllerId
                };
                this._persistentMessages = [].concat(l(this._persistentMessages), [t]),
                this.loaded && sn(t)
            }
        }, {
            key: "action",
            value: function(e) {
                var t = this
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , r = Vt(e);
                return new Re(function(o, a) {
                    t._requests[r] = {
                        resolve: o,
                        reject: a
                    },
                    t._send({
                        message: {
                            action: "stripe-frame-action",
                            payload: {
                                type: e,
                                nonce: r,
                                options: n
                            }
                        },
                        type: "outer",
                        frameId: t.id,
                        controllerId: t._controllerId
                    })
                }
                )
            }
        }, {
            key: "resolve",
            value: function(e, t) {
                this._requests[e] && this._requests[e].resolve(t)
            }
        }, {
            key: "_send",
            value: function(e) {
                this._ensureMounted(),
                this.loaded ? sn(e) : this._queuedMessages = [].concat(l(this._queuedMessages), [e])
            }
        }, {
            key: "appendTo",
            value: function(e) {
                e.appendChild(this._iframe)
            }
        }, {
            key: "unmount",
            value: function() {
                this.loaded = !1,
                this._emit("unload")
            }
        }, {
            key: "destroy",
            value: function() {
                this.unmount();
                var e = this._iframe.parentElement;
                e && e.removeChild(this._iframe),
                this._emit("destroy")
            }
        }, {
            key: "_ensureMounted",
            value: function() {
                this._isMounted() || this.unmount()
            }
        }, {
            key: "_isMounted",
            value: function() {
                return !!document.body && document.body.contains(this._iframe)
            }
        }, {
            key: "_createIFrame",
            value: function(e) {
                var t = window.location.href.toString()
                  , n = Tt(t)
                  , r = n ? n.origin : ""
                  , o = e.queryString && "string" == typeof e.queryString ? e.queryString : Qt(yn({}, e, {
                    origin: r,
                    referrer: t,
                    controllerId: this._controllerId
                }))
                  , a = document.createElement("iframe");
                return a.setAttribute("frameborder", "0"),
                a.setAttribute("allowTransparency", "true"),
                a.setAttribute("scrolling", "no"),
                a.setAttribute("name", this.id),
                a.setAttribute("allowpaymentrequest", "true"),
                a.src = Nt(this.type) + "#" + o,
                a
            }
        }]),
        t
    }(_n), bn = vn, gn = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }(), wn = function e(t, n, r) {
        null === t && (t = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
            var a = Object.getPrototypeOf(t);
            return null === a ? void 0 : e(a, n, r)
        }
        if ("value"in o)
            return o.value;
        var i = o.get;
        if (void 0 !== i)
            return i.call(r)
    }, En = {
        border: "none",
        margin: "0",
        padding: "0",
        width: "1px",
        "min-width": "100%",
        overflow: "hidden",
        display: "block",
        visibility: "hidden",
        position: "fixed",
        height: "1px",
        "pointer-events": "none",
        "user-select": "none"
    }, kn = function(e) {
        function t(e, n, r) {
            h(this, t);
            var o = _(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r));
            if (o.autoload = r.autoload || !1,
            "complete" === document.readyState)
                o._ensureMounted();
            else {
                var a = o._ensureMounted.bind(o);
                document.addEventListener("DOMContentLoaded", a),
                window.addEventListener("load", a),
                setTimeout(a, 5e3)
            }
            return o
        }
        return y(t, e),
        gn(t, [{
            key: "_ensureMounted",
            value: function() {
                wn(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_ensureMounted", this).call(this),
                this._isMounted() || this._autoMount()
            }
        }, {
            key: "_autoMount",
            value: function() {
                if (document.body)
                    this.appendTo(document.body);
                else if ("complete" === document.readyState || "interactive" === document.readyState)
                    throw new Oe("Stripe.js requires that your page has a <body> element.");
                this.autoload && (this.loaded = !0)
            }
        }, {
            key: "_createIFrame",
            value: function(e) {
                var n = wn(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_createIFrame", this).call(this, e);
                return n.setAttribute("aria-hidden", "true"),
                n.setAttribute("allowpaymentrequest", "true"),
                n.setAttribute("tabIndex", "-1"),
                nn(n, En),
                n
            }
        }]),
        t
    }(bn), Pn = kn, Sn = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }(), On = function(e) {
        function t() {
            return m(this, t),
            v(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return b(t, e),
        Sn(t, [{
            key: "_generateId",
            value: function() {
                return this._controllerId
            }
        }]),
        t
    }(Pn), An = On, Cn = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }(), Tn = function e(t, n, r) {
        null === t && (t = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
            var a = Object.getPrototypeOf(t);
            return null === a ? void 0 : e(a, n, r)
        }
        if ("value"in o)
            return o.value;
        var i = o.get;
        if (void 0 !== i)
            return i.call(r)
    }, jn = {
        border: "none",
        margin: "0",
        padding: "0",
        width: "1px",
        "min-width": "100%",
        overflow: "hidden",
        display: "block",
        "user-select": "none"
    }, Rn = function(e) {
        function t() {
            return g(this, t),
            w(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return E(t, e),
        Cn(t, [{
            key: "update",
            value: function(e) {
                this.send({
                    action: "stripe-user-update",
                    payload: e
                })
            }
        }, {
            key: "updateStyle",
            value: function(e) {
                var t = this;
                Object.keys(e).forEach(function(n) {
                    t._iframe.style[n] = e[n]
                })
            }
        }, {
            key: "focus",
            value: function() {
                this.loaded && this.send({
                    action: "stripe-user-focus",
                    payload: {}
                })
            }
        }, {
            key: "blur",
            value: function() {
                this.loaded && (this._iframe.contentWindow.blur(),
                this._iframe.blur())
            }
        }, {
            key: "clear",
            value: function() {
                this.send({
                    action: "stripe-user-clear",
                    payload: {}
                })
            }
        }, {
            key: "_createIFrame",
            value: function(e) {
                var n = Tn(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_createIFrame", this).call(this, e);
                return n.setAttribute("title", "Secure payment input frame"),
                nn(n, jn),
                n
            }
        }]),
        t
    }(bn), In = Rn, Mn = function(e, t) {
        var n = !1;
        return function() {
            if (n)
                throw new Oe(t);
            n = !0;
            try {
                return e.apply(void 0, arguments).then(function(e) {
                    return n = !1,
                    e
                }, function(e) {
                    throw n = !1,
                    e
                })
            } catch (e) {
                throw n = !1,
                e
            }
        }
    }, qn = function(e) {
        var t = e;
        return function() {
            t && (t.apply(void 0, arguments),
            t = null)
        }
    }, Ln = function() {
        return on(function(e) {
            var t = e.style
              , n = t.position
              , r = t.top
              , o = t.left
              , a = t.bottom
              , i = t.right
              , s = t.overflow
              , c = window
              , u = c.pageXOffset
              , l = c.pageYOffset
              , p = document.documentElement ? window.innerWidth - document.documentElement.offsetWidth : 0
              , d = document.documentElement ? window.innerHeight - document.documentElement.offsetHeight : 0;
            return e.style.position = "fixed",
            e.style.overflow = "hidden",
            e.style.top = -l + "px",
            e.style.left = -u + "px",
            e.style.right = p + "px",
            e.style.bottom = d + "px",
            qn(function() {
                e.style.position = n,
                e.style.top = r,
                e.style.left = o,
                e.style.bottom = a,
                e.style.right = i,
                e.style.overflow = s,
                window.scrollTo(u, l)
            })
        })
    }, Nn = function(e, t) {
        var n = Array.prototype.slice.call(document.querySelectorAll("a[href], area[href], input:not([disabled]),\n  select:not([disabled]), textarea:not([disabled]), button:not([disabled]),\n  object, embed, *[tabindex], *[contenteditable]")).filter(function(e) {
            var t = e.getAttribute("tabindex")
              , n = !t || parseInt(t, 10) >= 0
              , r = e.getBoundingClientRect()
              , o = r.width > 0 && r.height > 0;
            return n && o
        });
        return n[Le(n, function(t) {
            return t === e || e.contains(t)
        }) + ("previous" === t ? -1 : 1)]
    }, Dn = function(e) {
        var t = []
          , n = Ue(document.querySelectorAll("*"), function(n) {
            var r = n.getAttribute("tabindex") || "";
            n !== e && (n.tabIndex = -1),
            t.push({
                element: n,
                tabIndex: r
            })
        });
        return qn(function() {
            n.then(function() {
                return Ue(t, function(e) {
                    var t = e.element
                      , n = e.tabIndex;
                    "" === n ? t.removeAttribute("tabindex") : t.setAttribute("tabindex", n)
                })
            })
        })
    }, Bn = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    , xn = {
        display: "block",
        position: "fixed",
        "z-index": "2147483647",
        background: "rgba(0,0,0,0)",
        transition: "background 300ms cubic-bezier(0.4, 0, 0.2, 1)",
        "will-change": "background",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0"
    }, Fn = Bn({}, xn, {
        background: "rgba(0,0,0,0.5)"
    }), Un = {
        position: "absolute",
        left: "0",
        top: "0",
        height: "100%",
        width: "100%"
    }, Wn = function e(t, n, r) {
        null === t && (t = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
            var a = Object.getPrototypeOf(t);
            return null === a ? void 0 : e(a, n, r)
        }
        if ("value"in o)
            return o.value;
        var i = o.get;
        if (void 0 !== i)
            return i.call(r)
    }, zn = function(e) {
        function t(e, n, r) {
            k(this, t);
            var o = P(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r));
            return o._autoMount = function() {
                on(function(e) {
                    o._wrapper.style.display = "none",
                    e.insertBefore(o._wrapper, e.firstChild),
                    o.appendTo(o._wrapper)
                })
            }
            ,
            o.show = function() {
                nn(o._wrapper, xn),
                nn(o._iframe, Un),
                o.restoreFocus = Dn(o._iframe),
                o.restoreBodyScroll = Ln()
            }
            ,
            o.fadeInBackdrop = function() {
                nn(o._wrapper, Fn)
            }
            ,
            o.destroy = function() {
                return new Re(function(e) {
                    nn(o._wrapper, xn),
                    setTimeout(e, 500),
                    o._wrapper.addEventListener("transitionend", e)
                }
                ).then(function() {
                    Wn(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", o).call(o),
                    document.body && document.body.removeChild(o._wrapper),
                    o.restoreBodyScroll(),
                    o.restoreFocus()
                })
            }
            ,
            o._wrapper = document.createElement("div"),
            o.restoreBodyScroll = function() {}
            ,
            o.restoreFocus = function() {}
            ,
            o._autoMount(),
            o
        }
        return S(t, e),
        t
    }(bn), Hn = zn, Yn = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    , Gn = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }(), Vn = function e(t, n, r) {
        null === t && (t = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
            var a = Object.getPrototypeOf(t);
            return null === a ? void 0 : e(a, n, r)
        }
        if ("value"in o)
            return o.value;
        var i = o.get;
        if (void 0 !== i)
            return i.call(r)
    }, Kn = {
        display: "block",
        position: "absolute",
        "z-index": "1000",
        width: "1px",
        "min-width": "100%",
        margin: "2px 0 0 0",
        padding: "0",
        border: "none",
        overflow: "hidden"
    }, $n = function(e) {
        function t() {
            return O(this, t),
            A(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return C(t, e),
        Gn(t, [{
            key: "updateStyle",
            value: function(e) {
                var t = this;
                Object.keys(e).forEach(function(n) {
                    t._iframe.style[n] = e[n]
                })
            }
        }, {
            key: "update",
            value: function(e) {
                this.send({
                    action: "stripe-user-update",
                    payload: e
                })
            }
        }, {
            key: "_createIFrame",
            value: function(e) {
                var n = Vn(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_createIFrame", this).call(this, Yn({}, e, {
                    isSecondaryFrame: !0
                }));
                return nn(n, Kn),
                n.style.height = "0",
                n
            }
        }]),
        t
    }(bn), Jn = $n, Qn = function(e) {
        var t = Tt(e)
          , n = t ? t.host : "";
        return "stripe.com" === n || !!n.match(/\.stripe\.(com|me)$/)
    }, Zn = function(e, t) {
        var n = Tt(e)
          , r = Tt(t);
        return !(!n || !r) && n.origin === r.origin
    }, Xn = function(e) {
        return Zn(e, "https://js.stripe.com/v3/")
    }, er = function(e) {
        return Xn(e) || Qn(e)
    }, tr = ["button", "checkbox", "file", "hidden", "image", "submit", "radio", "reset"], nr = function(e) {
        var t = e.tagName;
        if (e.isContentEditable || "TEXTAREA" === t)
            return !0;
        if ("INPUT" !== t)
            return !1;
        var n = e.getAttribute("type");
        return -1 === tr.indexOf(n)
    }, rr = nr, or = function(e) {
        return /(MSIE ([0-9]{1,}[.0-9]{0,})|Trident\/)/i.test(e)
    }, ar = function(e) {
        return /SamsungBrowser/.test(e)
    }, ir = function(e) {
        return /iPad|iPhone/i.test(e) && !or(e)
    }, sr = function(e) {
        return /Android/i.test(e) && !or(e)
    }, cr = window.navigator.userAgent, ur = function(e) {
        return /Edge\//i.test(e)
    }(cr), lr = (function(e) {
        /Edge\/((1[0-6]\.)|0\.)/i.test(e)
    }(cr),
    or(cr)), pr = function(e) {
        return /MSIE 9/i.test(e)
    }(cr), dr = (function(e) {
        /MSIE ([0-9]{1,}[.0-9]{0,})/i.test(e)
    }(cr),
    ir(cr)), fr = (function(e) {
        ir(e) || sr(e)
    }(cr),
    sr(cr),
    function(e) {
        /Android 4\./i.test(e) && !/Chrome/i.test(e) && sr(e)
    }(cr),
    function(e) {
        return /^((?!chrome|android).)*safari/i.test(e) && !ar(e)
    }(cr)), hr = (function(e) {
        /Firefox\//i.test(e)
    }(cr),
    function(e) {
        /Firefox\/(50|51|[0-4]?\d)([^\d]|$)/i.test(e)
    }(cr),
    ar(cr)), _r = (function(e) {
        /Chrome\/(6[6-9]|[7-9]\d+|[1-9]\d{2,})/i.test(e)
    }(cr),
    !!window.ApplePaySession), yr = (be = {},
    T(be, Bt.card, {
        unique: !0,
        conflict: [Bt.cardNumber, Bt.cardExpiry, Bt.cardCvc, Bt.postalCode],
        beta: !1
    }),
    T(be, Bt.cardNumber, {
        unique: !0,
        conflict: [Bt.card],
        beta: !1
    }),
    T(be, Bt.cardExpiry, {
        unique: !0,
        conflict: [Bt.card],
        beta: !1
    }),
    T(be, Bt.cardCvc, {
        unique: !0,
        conflict: [Bt.card],
        beta: !1
    }),
    T(be, Bt.postalCode, {
        unique: !0,
        conflict: [Bt.card],
        beta: !1
    }),
    T(be, Bt.paymentRequestButton, {
        unique: !0,
        conflict: [],
        beta: !1
    }),
    T(be, Bt.iban, {
        unique: !0,
        conflict: [],
        beta: !1
    }),
    T(be, Bt.idealBank, {
        unique: !0,
        conflict: [],
        beta: !1
    }),
    be), mr = yr, vr = (ge = {},
    j(ge, Bt.card, Mt.CARD_ELEMENT),
    j(ge, Bt.cardNumber, Mt.CARD_ELEMENT),
    j(ge, Bt.cardExpiry, Mt.CARD_ELEMENT),
    j(ge, Bt.cardCvc, Mt.CARD_ELEMENT),
    j(ge, Bt.postalCode, Mt.CARD_ELEMENT),
    j(ge, Bt.paymentRequestButton, Mt.PAYMENT_REQUEST_ELEMENT),
    j(ge, Bt.iban, Mt.IBAN_ELEMENT),
    j(ge, Bt.idealBank, Mt.IDEAL_BANK_ELEMENT),
    ge), br = vr, gr = ["brand"], wr = ["country", "bankName"], Er = (we = {},
    R(we, Bt.card, gr),
    R(we, Bt.cardNumber, gr),
    R(we, Bt.iban, wr),
    we), kr = R({}, Bt.idealBank, {
        secondary: Bt.idealBankSecondary
    }), Pr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    , Sr = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    , Or = !1, Ar = function(e, t) {
        return document.activeElement === e._iframe || e._iframe.parentElement && document.activeElement === t
    }, Cr = function e(t) {
        M(this, e),
        Tr.call(this);
        var n = t.apiKey
          , r = t.stripeAccount
          , o = t.stripeJsId
          , a = t.locale;
        this._id = Vt("__privateStripeController"),
        this._stripeJsId = o,
        this._apiKey = n,
        this._stripeAccount = r,
        this._controllerFrame = new An(Mt.CONTROLLER,this._id,Sr({}, t)),
        this._frames = {},
        this._requests = {},
        this._setupPostMessage(),
        this._handleMessage = ln(this._handleMessage, this),
        this.action.fetchLocale({
            locale: a || "auto"
        })
    }, Tr = function() {
        var e = this;
        this._sendCAReq = function(t) {
            var n = Vt(t.tag);
            return new Re(function(r, o) {
                e._requests[n] = {
                    resolve: r,
                    reject: o
                },
                e._controllerFrame.send({
                    action: "stripe-safe-controller-action-request",
                    payload: {
                        nonce: n,
                        caReq: t
                    }
                })
            }
            )
        }
        ,
        this.livemode = function() {
            var t = e._apiKey;
            return /^pk_test_/.test(t) ? "testmode" : /^pk_live_/.test(t) ? "livemode" : "unknown"
        }
        ,
        this.action = {
            retrievePaymentIntent: function(t) {
                return e._sendCAReq({
                    tag: "RETRIEVE_PAYMENT_INTENT",
                    value: t
                })
            },
            confirmPaymentIntent: function(t) {
                return e._sendCAReq({
                    tag: "CONFIRM_PAYMENT_INTENT",
                    value: t
                })
            },
            confirmSetupIntent: function(t) {
                return e._sendCAReq({
                    tag: "CONFIRM_SETUP_INTENT",
                    value: t
                })
            },
            fetchLocale: function(t) {
                return e._sendCAReq({
                    tag: "FETCH_LOCALE",
                    value: t
                })
            },
            updateCSSFonts: function(t) {
                return e._sendCAReq({
                    tag: "UPDATE_CSS_FONTS",
                    value: t
                })
            },
            createApplePaySession: function(t) {
                return e._sendCAReq({
                    tag: "CREATE_APPLE_PAY_SESSION",
                    value: t
                })
            },
            retrieveSource: function(t) {
                return e._sendCAReq({
                    tag: "RETRIEVE_SOURCE",
                    value: t
                })
            },
            tokenizeWithElement: function(t) {
                return e._sendCAReq({
                    tag: "TOKENIZE_WITH_ELEMENT",
                    value: t
                })
            },
            tokenizeCvcUpdate: function(t) {
                return e._sendCAReq({
                    tag: "TOKENIZE_CVC_UPDATE",
                    value: t
                })
            },
            tokenizeWithData: function(t) {
                return e._sendCAReq({
                    tag: "TOKENIZE_WITH_DATA",
                    value: t
                })
            },
            createSourceWithElement: function(t) {
                return e._sendCAReq({
                    tag: "CREATE_SOURCE_WITH_ELEMENT",
                    value: t
                })
            },
            createSourceWithData: function(t) {
                return e._sendCAReq({
                    tag: "CREATE_SOURCE_WITH_DATA",
                    value: t
                })
            },
            createPaymentMethodWithElement: function(t) {
                return e._sendCAReq({
                    tag: "CREATE_PAYMENT_METHOD_WITH_ELEMENT",
                    value: t
                })
            },
            createPaymentMethodWithData: function(t) {
                return e._sendCAReq({
                    tag: "CREATE_PAYMENT_METHOD_WITH_DATA",
                    value: t
                })
            },
            createPaymentPage: function(t) {
                return e._sendCAReq({
                    tag: "CREATE_PAYMENT_PAGE",
                    value: t
                })
            },
            createPaymentPageWithSession: function(t) {
                return e._sendCAReq({
                    tag: "CREATE_PAYMENT_PAGE_WITH_SESSION",
                    value: t
                })
            }
        },
        this.createElementFrame = function(t, n) {
            var r = n.groupId
              , o = I(n, ["groupId"])
              , a = new In(t,e._id,Sr({}, o, {
                keyMode: Ve(e._apiKey)
            }));
            return e._setupFrame(a, t, r)
        }
        ,
        this.createSecondaryElementFrame = function(t, n) {
            var r = n.groupId
              , o = I(n, ["groupId"])
              , a = new Jn(t,e._id,o);
            return e._setupFrame(a, t, r)
        }
        ,
        this.createHiddenFrame = function(t, n) {
            var r = new Pn(t,e._id,n);
            return e._setupFrame(r, t)
        }
        ,
        this.createLightboxFrame = function(t, n) {
            var r = new Hn(t,e._id,n);
            return e._setupFrame(r, t)
        }
        ,
        this._setupFrame = function(t, n, r) {
            return e._frames[t.id] = t,
            e._controllerFrame.sendPersistent({
                action: "stripe-user-createframe",
                payload: {
                    newFrameId: t.id,
                    frameType: n,
                    groupId: r
                }
            }),
            t._on("unload", function() {
                e._controllerFrame.sendPersistent({
                    action: "stripe-frame-unload",
                    payload: {
                        unloadedFrameId: t.id
                    }
                })
            }),
            t._on("destroy", function() {
                delete e._frames[t.id],
                e._controllerFrame.sendPersistent({
                    action: "stripe-frame-destroy",
                    payload: {
                        destroyedFrameId: t.id
                    }
                })
            }),
            t._on("load", function() {
                e._controllerFrame.sendPersistent({
                    action: "stripe-frame-load",
                    payload: {
                        loadedFrameId: t.id
                    }
                }),
                e._controllerFrame.loaded && t.send({
                    action: "stripe-controller-load",
                    payload: {}
                })
            }),
            t
        }
        ,
        this.report = function(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            e._controllerFrame.send({
                action: "stripe-controller-report",
                payload: {
                    event: t,
                    data: n
                }
            })
        }
        ,
        this.warn = function() {
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
            e._controllerFrame.send({
                action: "stripe-controller-warn",
                payload: {
                    args: n
                }
            })
        }
        ,
        this.controllerFor = function() {
            return "outer"
        }
        ,
        this._setupPostMessage = function() {
            window.addEventListener("message", function(t) {
                var n = t.data
                  , r = t.origin
                  , o = cn(n);
                o && Zn(Wt, r) && e._handleMessage(o)
            })
        }
        ,
        this._handleMessage = function(t) {
            var n = t.controllerId
              , r = t.frameId
              , o = t.message
              , a = e._frames[r];
            if (n === e._id)
                switch (o.action) {
                case "stripe-frame-event":
                    var i = o.payload
                      , s = i.event
                      , c = i.data;
                    if (a) {
                        if (dr) {
                            var u = a._iframe.parentElement
                              , l = u && u.querySelector(".__PrivateStripeElement-input");
                            if ("focus" === s && !Or && !Ar(a, l)) {
                                l && l.focus(),
                                Or = !0;
                                break
                            }
                            if ("blur" === s && Or) {
                                Or = !1;
                                break
                            }
                            "blur" === s && setTimeout(function() {
                                var e = document.activeElement;
                                if (e && !Ar(a, l) && !rr(e)) {
                                    var t = u && u.querySelector(".__PrivateStripeElement-safariInput");
                                    if (t) {
                                        var n = t;
                                        n.disabled = !1,
                                        n.focus(),
                                        n.blur(),
                                        n.disabled = !0
                                    }
                                    e.focus()
                                }
                            }, 400)
                        }
                        a._emit(s, c)
                    }
                    break;
                case "stripe-frame-action-complete":
                    a && a.resolve(o.payload.nonce, o.payload.result);
                    break;
                case "stripe-frame-error":
                    throw new Oe(o.payload.message);
                case "stripe-integration-error":
                    a && a._emit("__privateIntegrationError", {
                        message: o.payload.message
                    });
                    break;
                case "stripe-controller-load":
                    e._controllerFrame._emit("load"),
                    Object.keys(e._frames).forEach(function(t) {
                        return e._frames[t].send({
                            action: "stripe-controller-load",
                            payload: {}
                        })
                    });
                    break;
                case "stripe-safe-controller-action-response":
                    e._requests[o.payload.nonce] && e._requests[o.payload.nonce].resolve(o.payload.caRes);
                    break;
                case "stripe-safe-controller-action-error":
                    if (e._requests[o.payload.nonce]) {
                        var p = o.payload.caErr;
                        "object" === (void 0 === p ? "undefined" : Pr(p)) && null !== p && "string" == typeof p.name && "IntegrationError" === p.name ? e._requests[o.payload.nonce].reject(new Oe("string" == typeof p.message ? p.message : "")) : e._requests[o.payload.nonce].reject(p)
                    }
                }
        }
    }, jr = Cr, Rr = function() {
        var e = document.querySelectorAll("meta[name=viewport][content]")
          , t = e[e.length - 1];
        return t && t instanceof HTMLMetaElement ? t.content : ""
    }, Ir = function(e) {
        Rr().match(/width=device-width/) || e('Elements requires "width=device-width" be set in your page\'s viewport meta tag.\n       For more information: https://stripe.com/docs/stripe-js/elements/quickstart#viewport-meta-requirements')
    }, Mr = function(e) {
        function t() {
            q(this, t);
            var e = L(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return e.name = "NetworkError",
            e.type = "network_error",
            e
        }
        return N(t, e),
        t
    }(Error), qr = Mr, Lr = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    , Nr = {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
    }, Dr = function(e) {
        return Object.keys(Nr).forEach(function(t) {
            e.setRequestHeader(t, Nr[t])
        }),
        e
    }, Br = function e(t) {
        return new Re(function(n, r) {
            var o = t.method
              , a = t.url
              , i = t.data
              , s = t.withCredentials
              , c = i ? Qt(i) : ""
              , u = !window.XMLHttpRequest || jt(a) && void 0 === (new XMLHttpRequest).withCredentials
              , l = "GET" === o && c ? a + "?" + c : a
              , p = "GET" === o ? "" : c;
            if (u) {
                var d = new window.XDomainRequest;
                try {
                    d.open(o, l)
                } catch (e) {
                    r(e)
                }
                d.onerror = function() {
                    n({
                        responseText: JSON.stringify({
                            error: {
                                type: "api_error"
                            }
                        })
                    })
                }
                ,
                d.onload = function() {
                    n({
                        status: 200,
                        responseText: d.responseText
                    })
                }
                ,
                setTimeout(function() {
                    d.send(p)
                }, 0)
            } else {
                var f = new XMLHttpRequest;
                s && (f.withCredentials = s),
                f.open(o, l, !0),
                Dr(f),
                f.onreadystatechange = function() {
                    4 === f.readyState && (f.onreadystatechange = function() {}
                    ,
                    0 === f.status ? s ? r(new qr) : e(Lr({}, t, {
                        withCredentials: !0
                    })).then(n, r) : n(f))
                }
                ;
                try {
                    f.send(p)
                } catch (e) {
                    r(e)
                }
            }
        }
        )
    }, xr = Br, Fr = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    , Ur = function(e, t) {
        var n = /@font-face[ ]?{[^}]*}/g
          , r = e.match(n);
        if (!r)
            throw new Oe("No @font-face rules found in file from " + t);
        return r
    }, Wr = function(e) {
        var t = e.match(/@font-face[ ]?{([^}]*)}/);
        return t ? t[1] : ""
    }, zr = function(e, t) {
        var n = e.replace(/\/\*.*\*\//g, "").trim()
          , r = n.length && /;$/.test(n) ? n : n + ";"
          , o = r.match(/((([^;(]*\([^()]*\)[^;)]*)|[^;]+)+)(?=;)/g);
        if (!o)
            throw new Oe("Found @font-face rule containing no valid font-properties in file from " + t);
        return o
    }, Hr = function(e, t) {
        var n = e.indexOf(":");
        if (-1 === n)
            throw new Oe("Invalid css declaration in file from " + t + ': "' + e + '"');
        var r = e.slice(0, n).trim()
          , o = Ht[r];
        if (!o)
            throw new Oe("Unsupported css property in file from " + t + ': "' + r + '"');
        return {
            property: o,
            value: e.slice(n + 1).trim()
        }
    }, Yr = function(e, t) {
        var n = e.reduce(function(e, n) {
            var r = Hr(n, t)
              , o = r.property
              , a = r.value;
            return Fr({}, e, D({}, o, a))
        }, {});
        return ["family", "src"].forEach(function(e) {
            if (!n[e])
                throw new Oe("Missing css property in file from " + t + ': "' + zt[e] + '"')
        }),
        n
    }, Gr = function(e) {
        return xr({
            url: e,
            method: "GET"
        }).then(function(e) {
            return e.responseText
        }).then(function(t) {
            return Ur(t, e).map(function(t) {
                var n = Wr(t)
                  , r = zr(n, e);
                return Yr(r, e)
            })
        })
    }, Vr = Gr, Kr = function(e, t) {
        return e.reduce(function(e, n) {
            return e.then(function(e) {
                return "SATISFIED" === e.type ? e : n().then(function(e) {
                    return t(e) ? {
                        type: "SATISFIED",
                        value: e
                    } : {
                        type: "UNSATISFIED"
                    }
                })
            })
        }, Re.resolve({
            type: "UNSATISFIED"
        }))
    }, $r = Kr, Jr = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    , Qr = {
        merchantCapabilities: ["supports3DS"],
        displayItems: []
    }, Zr = {
        amount: mt,
        label: pt,
        pending: nt(ft)
    }, Xr = {
        amount: yt,
        label: pt,
        pending: nt(ft)
    }, eo = {
        amount: yt,
        label: pt,
        pending: nt(ft),
        id: dt(pt, function() {
            return Vt("shippingOption")
        }),
        detail: dt(pt, function() {
            return ""
        })
    }, to = {
        displayItems: nt(bt(Pt(Xr))),
        shippingOptions: nt(gt("id")(bt(Pt(eo)))),
        total: nt(Pt(Zr))
    }, no = {
        shipping: "shipping",
        delivery: "delivery",
        pickup: "pickup"
    }, ro = {
        requestShipping: nt(ft),
        requestPayerName: nt(ft),
        requestPayerEmail: nt(ft),
        requestPayerPhone: nt(ft),
        shippingType: nt(st.apply(void 0, B(Object.keys(no))))
    }, oo = Jr({}, ro, {
        displayItems: nt(bt(Pt(Xr))),
        shippingOptions: nt(gt("id")(bt(Pt(eo)))),
        total: Pt(Xr),
        currency: lt,
        country: ut,
        jcbEnabled: nt(ft),
        __passThroughEmail: nt(pt),
        __ignoreGooglePay: nt(ft)
    }), ao = {
        success: "success",
        fail: "fail",
        invalid_payer_name: "invalid_payer_name",
        invalid_payer_email: "invalid_payer_email",
        invalid_payer_phone: "invalid_payer_phone",
        invalid_shipping_address: "invalid_shipping_address"
    }, io = st.apply(void 0, B(Object.keys(ao))), so = io, co = Jr({}, to, {
        status: so
    }), uo = Jr({}, to, {
        currency: nt(lt)
    }), lo = Pt(co), po = kt(uo), fo = Pt(oo), ho = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    , _o = {
        CAN_MAKE_PAYMENT: "CAN_MAKE_PAYMENT"
    }, yo = {
        fail: "fail",
        invalid_payer_name: "invalid_payer_name",
        invalid_payer_phone: "invalid_payer_phone",
        invalid_payer_email: "invalid_payer_email",
        invalid_shipping_address: "invalid_shipping_address"
    }, mo = ho({
        success: "success"
    }, yo), vo = {
        checkout_beta_2: "checkout_beta_2",
        checkout_beta_3: "checkout_beta_3",
        checkout_beta_4: "checkout_beta_4",
        payment_intent_beta_1: "payment_intent_beta_1",
        payment_intent_beta_2: "payment_intent_beta_2",
        payment_intent_beta_3: "payment_intent_beta_3",
        setup_intent_beta_1: "setup_intent_beta_1",
        card_payment_method_beta_1: "card_payment_method_beta_1",
        acknowledge_ie9_deprecation: "acknowledge_ie9_deprecation",
        cvc_update_beta_1: "cvc_update_beta_1",
        spr_beta_1: "spr_beta_1",
        google_pay_beta_1: "google_pay_beta_1",
        checkout_google_pay_beta_1: "checkout_google_pay_beta_1"
    }, bo = Object.keys(vo), go = function(e, t) {
        return e.indexOf(t) >= 0
    }, wo = function(e) {
        var t = go(e, vo.google_pay_beta_1);
        return fr ? t ? ["APPLE_PAY", "GOOGLE_PAY"] : ["APPLE_PAY"] : t ? ["GOOGLE_PAY", "BROWSER"] : ["BROWSER"]
    }, Eo = wo, ko = function() {
        try {
            return window.location.origin === window.top.location.origin
        } catch (e) {
            return !1
        }
    }, Po = void 0, So = function(e) {
        var t = {};
        return function(n) {
            if (void 0 !== t[n])
                return t[n];
            var r = e(n);
            return t[n] = r,
            r
        }
    }(function(e) {
        return window.ApplePaySession.canMakePaymentsWithActiveCard(e).then(function(e) {
            return Po && Po("payreq.can_make_payment_native_response", {
                available: e
            }),
            e
        })
    }), Oo = 2, Ao = function(e, t, n, r) {
        var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Oo
          , a = Math.max(Oo, o);
        if (Po = r,
        window.ApplePaySession) {
            if (ko()) {
                if (n && "https:" !== window.location.protocol)
                    return window.console && window.console.warn("To test Apple Pay, you must serve this page over HTTPS."),
                    Re.resolve(!1);
                if (window.ApplePaySession.supportsVersion(a)) {
                    var i = t ? [e, t] : [e]
                      , s = "merchant." + i.join(".") + ".stripe";
                    return So(s).then(function(r) {
                        if (n && !r && window.console) {
                            var o = t ? "or stripeAccount parameter (" + t + ") " : "";
                            window.console.warn("Either you do not have a card saved to your Wallet or the current domain (" + e + ") " + o + "is not registered for Apple Pay. Visit https://dashboard.stripe.com/account/apple_pay to register this domain.")
                        }
                        return r
                    })
                }
                return n && window.console && window.console.warn("This version of Safari does not support ApplePay JS version " + a + "."),
                Re.resolve(!1)
            }
            return Re.resolve(!1)
        }
        return Re.resolve(!1)
    }, Co = ["mastercard", "visa"], To = ["AT", "AU", "BE", "CA", "CH", "DE", "DK", "EE", "ES", "FI", "FR", "GB", "GR", "HK", "IE", "IT", "JP", "LT", "LU", "LV", "MX", "NL", "NO", "NZ", "PL", "PT", "SE", "SG", "US"], jo = function(e, t) {
        var n = "US" === e || t ? ["discover", "diners", "jcb"].concat(Co) : Co;
        return -1 !== To.indexOf(e) ? ["amex"].concat(x(n)) : n
    }, Ro = function(e, t) {
        return jo(e, t).reduce(function(e, t) {
            return "mastercard" === t ? [].concat(x(e), ["masterCard"]) : "diners" === t ? e : [].concat(x(e), [t])
        }, [])
    }, Io = {
        bif: 1,
        clp: 1,
        djf: 1,
        gnf: 1,
        jpy: 1,
        kmf: 1,
        krw: 1,
        mga: 1,
        pyg: 1,
        rwf: 1,
        vnd: 1,
        vuv: 1,
        xaf: 1,
        xof: 1,
        xpf: 1
    }, Mo = function(e) {
        var t = Io[e.toLowerCase()] || 100;
        return {
            unitSize: 1 / t,
            fractionDigits: Math.log(t) / Math.log(10)
        }
    }, qo = function(e, t) {
        var n = Mo(t);
        return (e * n.unitSize).toFixed(n.fractionDigits)
    }, Lo = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    , No = function(e, t) {
        return {
            amount: qo(e.amount, t.currency),
            label: e.label,
            type: e.pending ? "pending" : "final"
        }
    }, Do = function(e, t) {
        return {
            amount: qo(e.amount, t.currency),
            label: e.label,
            detail: e.detail,
            identifier: e.id
        }
    }, Bo = function(e) {
        return function(t) {
            return t[e] && "string" == typeof t[e] ? t[e].toUpperCase() : null
        }
    }, xo = (Ee = {},
    F(Ee, ao.success, 0),
    F(Ee, ao.fail, 1),
    F(Ee, ao.invalid_payer_name, 2),
    F(Ee, ao.invalid_shipping_address, 3),
    F(Ee, ao.invalid_payer_phone, 4),
    F(Ee, ao.invalid_payer_email, 4),
    Ee), Fo = (ke = {},
    F(ke, no.pickup, "storePickup"),
    F(ke, no.shipping, "shipping"),
    F(ke, no.delivery, "delivery"),
    ke), Uo = {
        total: function(e) {
            return No(e.total, e)
        },
        lineItems: function(e) {
            return e.displayItems ? e.displayItems.map(function(t) {
                return No(t, e)
            }) : []
        },
        shippingMethods: function(e) {
            return e.shippingOptions ? e.shippingOptions.map(function(t) {
                return Do(t, e)
            }) : []
        }
    }, Wo = {
        shippingType: function(e) {
            var t = e.shippingType;
            if (!t)
                return null;
            var n = Fo[t];
            if (void 0 !== n)
                return n;
            throw new Oe("Invalid value for shippingType: " + t)
        },
        requiredBillingContactFields: function(e) {
            return e.requestPayerName ? ["postalAddress"] : null
        },
        requiredShippingContactFields: function(e) {
            var t = [];
            return e.requestShipping && t.push("postalAddress"),
            e.requestPayerEmail && t.push("email"),
            e.requestPayerPhone && t.push("phone"),
            t.length ? t : null
        },
        countryCode: Bo("country"),
        currencyCode: Bo("currency"),
        merchantCapabilities: function(e) {
            return function(t) {
                return t[e] || null
            }
        }("merchantCapabilities"),
        supportedNetworks: function(e) {
            return Ro(e.country, e.jcbEnabled || !1)
        }
    }, zo = {
        status: function(e) {
            return xo[e.status] || 0
        }
    }, Ho = Lo({}, Uo, Wo), Yo = Lo({}, Uo, zo), Go = function(e) {
        var t = Lo({}, Qr, e);
        return Object.keys(Ho).reduce(function(e, n) {
            var r = Ho[n]
              , o = r(t);
            return null !== o ? Lo({}, e, F({}, n, o)) : e
        }, {})
    }, Vo = function(e) {
        return Object.keys(Yo).reduce(function(t, n) {
            var r = Yo[n]
              , o = r(e);
            return null !== o ? Lo({}, t, F({}, n, o)) : t
        }, {})
    }, Ko = function(e) {
        return "string" == typeof e ? e : null
    }, $o = function(e) {
        return e ? Ko(e.phoneNumber) : null
    }, Jo = function(e) {
        return e ? Ko(e.emailAddress) : null
    }, Qo = function(e) {
        return e ? [e.givenName, e.familyName].filter(function(e) {
            return e && "string" == typeof e
        }).join(" ") : null
    }, Zo = function(e) {
        if (e) {
            var t = e.addressLines
              , n = e.countryCode
              , r = e.postalCode
              , o = e.administrativeArea
              , a = e.locality
              , i = e.phoneNumber
              , s = Ko(n);
            return {
                addressLine: Array.isArray(t) ? t.reduce(function(e, t) {
                    return "string" == typeof t ? [].concat(U(e), [t]) : e
                }, []) : [],
                country: s ? s.toUpperCase() : "",
                postalCode: Ko(r) || "",
                recipient: Qo(e) || "",
                region: Ko(o) || "",
                city: Ko(a) || "",
                phone: Ko(i) || "",
                sortingCode: "",
                dependentLocality: "",
                organization: ""
            }
        }
        return null
    }, Xo = function(e, t) {
        if (e && t.shippingOptions) {
            var n = e.identifier
              , r = e.label;
            return t.shippingOptions.filter(function(e) {
                return e.id === n && e.label === r
            })[0] || null
        }
        return null
    }, ea = function(e, t) {
        var n = e.shippingContact
          , r = e.shippingMethod
          , o = e.billingContact;
        return {
            shippingOption: Xo(r, t),
            shippingAddress: Zo(n),
            payerEmail: t.__passThroughEmail ? t.__passThroughEmail : Jo(n),
            payerPhone: $o(n),
            payerName: Qo(o),
            methodName: "apple-pay"
        }
    }, ta = ea, na = function(e) {
        if (!e || !e.length)
            throw new Oe("When requesting shipping information, you must specify shippingOptions once a shipping address is selected.\nEither provide shippingOptions in stripe.paymentRequest(...) or listen for the shippingaddresschange event and provide shippingOptions to the updateWith callback there.");
        return e
    }, ra = na, oa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    , aa = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    , ia = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }(), sa = {
        australia: "AU",
        austria: "AT",
        canada: "CA",
        schweiz: "CH",
        deutschland: "DE",
        hongkong: "HK",
        saudiarabia: "SA",
        espaa: "ES",
        singapore: "SG",
        us: "US",
        usa: "US",
        unitedstatesofamerica: "US",
        unitedstates: "US",
        england: "GB",
        gb: "GB",
        uk: "GB",
        unitedkingdom: "GB"
    }, ca = function(e) {
        function t(e) {
            z(this, t);
            var n = H(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            ua.call(n);
            var r = e.report
              , o = e.warn
              , a = e.createApplePaySession
              , i = e.tokenizeWithData
              , s = e.createSourceWithData
              , c = e.createPaymentMethodWithData
              , u = e.authentication
              , l = e.mids
              , p = e.options
              , d = e.minimumVersion;
            n._controllerReport = r,
            n._controllerWarn = o,
            n._createApplePaySession = a,
            n._tokenizeWithData = i,
            n._createSourceWithData = s,
            n._createPaymentMethodWithData = c,
            n._showCalledByButtonElement = null,
            n._authentication = u,
            n._mids = l,
            n._minimumVersion = d || Oo,
            n._report("payreq.options", {
                options: p
            });
            var f = Ot(fo, p || {}, "paymentRequest()")
              , h = f.value;
            if (f.warnings.forEach(function(e) {
                return n._controllerWarn(e)
            }),
            h.__passThroughEmail && h.requestPayerEmail)
                throw new Oe("When providing `__passThroughEmail`, `requestPayerEmail` has to be `false`");
            return n._cachedCanMakePayment = null,
            n._canMakePaymentCalled = !1,
            n._initialPaymentRequest = h,
            n._isShowing = !1,
            n._initializeSessionState(),
            n
        }
        return Y(t, e),
        ia(t, [{
            key: "_initializeSessionState",
            value: function() {
                this._paymentRequestOptions = aa({}, this._initialPaymentRequest, {
                    status: ao.success
                }),
                this._privateSession = null,
                this._privateShippingOption = null;
                var e = this._paymentRequestOptions.shippingOptions;
                e && e.length && (this._privateShippingOption = e[0])
            }
        }, {
            key: "_setupSession",
            value: function(e, t) {
                var n = this;
                e.addEventListener("validatemerchant", ln(this._validateMerchant(e, t))),
                e.addEventListener("paymentauthorized", ln(this._paymentAuthorized(e))),
                e.addEventListener("cancel", ln(function() {
                    n._report("payreq.show_rejected"),
                    n._isShowing = !1,
                    n._onEvent ? n._onEvent({
                        type: "cancel"
                    }) : n._emit("cancel")
                })),
                e.addEventListener("shippingcontactselected", ln(this._shippingContactSelected(e))),
                e.addEventListener("shippingmethodselected", ln(this._shippingMethodSelected(e)))
            }
        }]),
        t
    }(_n), ua = function() {
        var e = this;
        this._onEvent = null,
        this.setEventHandler = function(t) {
            e._onEvent = t
        }
        ,
        this.canMakePayment = ln(function() {
            return null === e._cachedCanMakePayment ? Ao(window.location.hostname, e._authentication.accountId, Ve(e._authentication.apiKey) === Ge.test, e._report, e._minimumVersion).then(function(t) {
                return e._canMakePaymentCalled = !0,
                e._cachedCanMakePayment = t,
                e._report("payreq.can_make_payment_response", {
                    available: e._cachedCanMakePayment
                }),
                e._cachedCanMakePayment ? {
                    applePay: !0
                } : null
            }) : Re.resolve().then(function() {
                return e._canMakePaymentCalled = !0,
                e._report("payreq.can_make_payment_response", {
                    available: e._cachedCanMakePayment,
                    cached: !0
                }),
                e._cachedCanMakePayment ? {
                    applePay: !0
                } : null
            })
        }),
        this.update = ln(function(t) {
            if (e._isShowing)
                throw new Oe("You cannot update Payment Request options while the payment sheet is showing.");
            var n = Ot(po, t, "PaymentRequest update()")
              , r = n.value;
            n.warnings.forEach(function(t) {
                return e._controllerWarn(t)
            }),
            e._initialPaymentRequest = xe(e._paymentRequestOptions, r),
            e._initializeSessionState(),
            e._report("payreq.update", {
                updates: t
            })
        }),
        this.show = ln(function() {
            null === e._showCalledByButtonElement && (e._showCalledByButtonElement = !1);
            var t = e._showCalledByButtonElement;
            if (e._usedByButtonElement && !e._showCalledByButtonElement && (e._report("payreq.show_called_with_button"),
            e._controllerWarn("Do not call show() yourself if you are using the paymentRequestButton Element. The Element handles showing the payment sheet.")),
            !e._canMakePaymentCalled)
                throw new Oe("You must first check the Payment Request API's\navailability using paymentRequest.canMakePayment() before calling show().");
            if (!e._cachedCanMakePayment)
                throw new Oe("Payment Request is not available in this browser.");
            e._initializeSessionState();
            var n = void 0;
            try {
                n = new window.ApplePaySession(e._minimumVersion,Go(e._paymentRequestOptions))
            } catch (e) {
                throw "Must create a new ApplePaySession from a user gesture handler." === e.message ? new Oe("show() must be called from a user gesture handler (such as a click handler, after the user clicks a button).") : e
            }
            e._privateSession = n,
            e._setupSession(n, t),
            n.begin(),
            e._isShowing = !0,
            e._report("payreq.show", {
                listeners: Object.keys(e._callbacks).sort()
            })
        }),
        this.abort = ln(function() {
            e._privateSession && (e._privateSession.abort(),
            e._report("payreq.abort"))
        }),
        this._report = function(t, n) {
            e._controllerReport(t, aa({}, n, null !== e._showCalledByButtonElement ? {
                usesButtonElement: e._showCalledByButtonElement
            } : {}, {
                impl: "applepay"
            }))
        }
        ,
        this._elementShow = function() {
            e._showCalledByButtonElement = !0,
            e.show()
        }
        ,
        this._registerElement = function() {
            e._usedByButtonElement = !0
        }
        ,
        this._validateMerchant = function(t, n) {
            return function(r) {
                e._createApplePaySession({
                    data: {
                        validation_url: r.validationURL,
                        domain_name: window.location.hostname,
                        display_name: e._paymentRequestOptions.total.label
                    },
                    usesButtonElement: n
                }).then(function(n) {
                    switch (n.type) {
                    case "object":
                        t.completeMerchantValidation(JSON.parse(n.object.session));
                        break;
                    case "error":
                        e._handleValidationError(t)(n.error);
                        break;
                    default:
                        Ae(n)
                    }
                }, e._handleValidationError(t))
            }
        }
        ,
        this._handleValidationError = function(t) {
            return function(n) {
                var r = n.message;
                t.abort(),
                "string" == typeof r ? (e._controllerWarn(r),
                e._report("user_error.apple_pay_session_error", {
                    error: n
                })) : e._report("fatal.payreq.unexpected_error", {
                    error: n
                })
            }
        }
        ,
        this._paymentAuthorized = function(t) {
            return function(n) {
                var r = n.payment;
                e._report("payreq.paymentauthorized");
                var o = e._showCalledByButtonElement ? Bt.paymentRequestButton : null;
                e._tokenizeWithData({
                    type: "apple_pay",
                    elementName: o,
                    tokenData: aa({}, r, {
                        billingContact: e._normalizeContact(r.billingContact)
                    }),
                    mids: e._mids
                }).then(function(n) {
                    if ("error" === n.type)
                        t.completePayment(window.ApplePaySession.STATUS_FAILURE),
                        e._report("payreq.api_error.create_token", {
                            error: n.error
                        });
                    else {
                        var o = e._normalizeContact(r.shippingContact)
                          , a = e._normalizeContact(r.billingContact);
                        o && e._paymentRequestOptions.requestShipping && !o.countryCode && t.completePayment(window.ApplePaySession.STATUS_INVALID_SHIPPING_POSTAL_ADDRESS);
                        var i = ta({
                            shippingContact: o,
                            billingContact: a
                        }, e._paymentRequestOptions);
                        e._onToken(t)(aa({}, i, {
                            shippingOption: e._privateShippingOption,
                            token: n.object
                        }))
                    }
                })
            }
        }
        ,
        this._normalizeContact = function(t) {
            if (t && "object" === (void 0 === t ? "undefined" : oa(t)) && t.country && "string" == typeof t.country) {
                var n = t.country.toLowerCase().replace(/[^a-z]+/g, "")
                  , r = void 0;
                return t.countryCode ? "string" == typeof t.countryCode && (r = t.countryCode.toUpperCase()) : (r = sa[n]) || e._report("warn.payreq.missing_country_code", {
                    country: t.country
                }),
                aa({}, t, {
                    countryCode: r
                })
            }
            return "object" === (void 0 === t ? "undefined" : oa(t)) ? t : null
        }
        ,
        this._onToken = function(t) {
            return function(n) {
                if (e._isShowing && e._onEvent) {
                    return void (0,
                    e._onEvent)({
                        type: "paymentresponse",
                        payload: aa({}, n, {
                            complete: e._completePayment(t)
                        })
                    })
                }
                e._hasRegisteredListener("token") && e._maybeEmitSourceOrToken("token", aa({}, n, {
                    complete: e._completePayment(t)
                }));
                var r = n.token
                  , o = W(n, ["token"])
                  , a = o.payerPhone
                  , i = o.payerEmail
                  , s = e._showCalledByButtonElement ? Bt.paymentRequestButton : null;
                e._hasRegisteredListener("source") && e._createSourceWithData({
                    elementName: s,
                    type: "card",
                    sourceData: {
                        token: r.id,
                        owner: {
                            phone: a,
                            email: i
                        }
                    },
                    mids: e._mids
                }).then(function(n) {
                    "error" === n.type ? (e._report("fatal.payreq.source_failed", {
                        error: n.error,
                        token: r
                    }),
                    t.completePayment(window.ApplePaySession.STATUS_FAILURE)) : e._maybeEmitSourceOrToken("source", aa({}, o, {
                        source: n.object,
                        complete: e._completePayment(t)
                    }))
                }),
                e._hasRegisteredListener("paymentmethod") && e._createPaymentMethodWithData({
                    elementName: s,
                    type: "card",
                    paymentMethodData: {
                        card: {
                            token: r.id
                        },
                        billing_details: {
                            phone: a,
                            email: i
                        }
                    },
                    mids: e._mids
                }).then(function(n) {
                    "error" === n.type ? (e._report("fatal.payreq.pm_failed", {
                        error: n.error,
                        token: r
                    }),
                    t.completePayment(window.ApplePaySession.STATUS_FAILURE)) : e._maybeEmitSourceOrToken("paymentmethod", aa({}, o, {
                        paymentMethod: n.object,
                        complete: e._completePayment(t)
                    }))
                })
            }
        }
        ,
        this._maybeEmitSourceOrToken = function(t, n) {
            e._isShowing && e._emit(t, n)
        }
        ,
        this._completePayment = function(t) {
            return function(n) {
                var r = Ot(lo, {
                    status: n
                }, "status for PaymentRequest completion")
                  , o = r.value;
                r.warnings.forEach(function(t) {
                    return e._controllerWarn(t)
                }),
                e._paymentRequestOptions = xe(e._paymentRequestOptions, o);
                var a = Vo(e._paymentRequestOptions)
                  , i = a.status;
                t.completePayment(i),
                -1 === [window.ApplePaySession.STATUS_INVALID_BILLING_POSTAL_ADDRESS, window.ApplePaySession.STATUS_INVALID_SHIPPING_POSTAL_ADDRESS, window.ApplePaySession.STATUS_INVALID_SHIPPING_CONTACT].indexOf(i) && (e._isShowing = !1)
            }
        }
        ,
        this._shippingContactSelected = function(t) {
            return function(n) {
                var r = ta({
                    shippingContact: e._normalizeContact(n.shippingContact)
                }, e._paymentRequestOptions).shippingAddress;
                if (e._hasRegisteredListener("shippingaddresschange") || e._onEvent) {
                    var o = {
                        shippingAddress: r,
                        updateWith: e._completeShippingContactSelection(t)
                    };
                    e._onEvent ? e._onEvent({
                        type: "shippingaddresschange",
                        payload: o
                    }) : e._emit("shippingaddresschange", o)
                } else {
                    ra(e._paymentRequestOptions.shippingOptions);
                    var a = Vo(e._paymentRequestOptions)
                      , i = a.total
                      , s = a.lineItems
                      , c = a.shippingMethods;
                    t.completeShippingContactSelection(window.ApplePaySession.STATUS_SUCCESS, c, i, s)
                }
            }
        }
        ,
        this._completeShippingContactSelection = function(t) {
            return function(n) {
                var r = Ot(lo, n || {}, "shipping address selection callback")
                  , o = r.value;
                if (r.warnings.forEach(function(t) {
                    return e._controllerWarn(t)
                }),
                e._paymentRequestOptions = xe(e._paymentRequestOptions, o),
                e._paymentRequestOptions.status === ao.success) {
                    var a = ra(e._paymentRequestOptions.shippingOptions);
                    e._privateShippingOption = a[0]
                }
                var i = Vo(e._paymentRequestOptions)
                  , s = i.status
                  , c = i.shippingMethods
                  , u = i.total
                  , l = i.lineItems;
                t.completeShippingContactSelection(s, c, u, l)
            }
        }
        ,
        this._shippingMethodSelected = function(t) {
            return function(n) {
                if (e._privateShippingOption = ta({
                    shippingMethod: n.shippingMethod
                }, e._paymentRequestOptions).shippingOption,
                e._hasRegisteredListener("shippingoptionchange") || e._onEvent) {
                    var r = {
                        shippingOption: e._privateShippingOption,
                        updateWith: e._completeShippingMethodSelection(t)
                    };
                    e._onEvent ? e._onEvent({
                        type: "shippingoptionchange",
                        payload: r
                    }) : e._emit("shippingoptionchange", r)
                } else {
                    var o = Vo(e._paymentRequestOptions)
                      , a = o.total
                      , i = o.lineItems;
                    t.completeShippingMethodSelection(window.ApplePaySession.STATUS_SUCCESS, a, i)
                }
            }
        }
        ,
        this._completeShippingMethodSelection = function(t) {
            return function(n) {
                var r = Ot(lo, n || {}, "shipping option selection callback")
                  , o = r.value;
                r.warnings.forEach(function(t) {
                    return e._controllerWarn(t)
                }),
                e._paymentRequestOptions = xe(e._paymentRequestOptions, o);
                var a = Vo(e._paymentRequestOptions)
                  , i = a.status
                  , s = a.total
                  , c = a.lineItems;
                t.completeShippingMethodSelection(i, s, c)
            }
        }
    }, la = ca, pa = null, da = function(e) {
        return null !== pa ? Re.resolve(pa) : e().then(function(e) {
            return pa = e
        })
    }, fa = da, ha = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    , _a = function e(t) {
        var n = this;
        G(this, e),
        this._mids = null,
        this._frame = null,
        this._shouldInitFrame = function() {
            return "https:" === window.location.protocol
        }
        ,
        this._initFrame = function(e) {
            var t = n._controller.createHiddenFrame(Mt.PAYMENT_REQUEST_GOOGLE_PAY, {
                authentication: n._authentication,
                mids: n._mids
            });
            t.send({
                action: "stripe-pr-initialize",
                payload: {
                    data: e
                }
            }),
            n._initFrameEventHandlers(t),
            n._frame = t
        }
        ,
        this._initFrameEventHandlers = function(e) {
            e._on("pr-cancel", function() {
                n._onEvent({
                    type: "cancel"
                })
            }),
            e._on("pr-error", function(e) {
                n._onEvent({
                    type: "error",
                    payload: {
                        errorMessage: e.errorMessage,
                        errorCode: e.errorCode
                    }
                })
            }),
            e._on("pr-callback", function(t) {
                var r = t.event
                  , o = t.options
                  , a = t.nonce;
                switch (r) {
                case "paymentresponse":
                    n._handlePaymentResponse(e, o, a);
                    break;
                case "shippingaddresschange":
                    n._handleShippingAddressChange(e, o, a);
                    break;
                case "shippingoptionchange":
                    n._handleShippingOptionChange(e, o, a);
                    break;
                default:
                    throw new Error("Unexpected event name: " + r)
                }
            })
        }
        ,
        this._handlePaymentResponse = function(e, t, r) {
            var o = function(t) {
                e.send({
                    action: "stripe-pr-callback-complete",
                    payload: {
                        nonce: r,
                        data: {
                            status: t
                        }
                    }
                })
            };
            n._onEvent({
                type: "paymentresponse",
                payload: ha({}, t, {
                    complete: o
                })
            })
        }
        ,
        this._handleShippingAddressChange = function(e, t, r) {
            var o = function(t) {
                e.send({
                    action: "stripe-pr-callback-complete",
                    payload: {
                        nonce: r,
                        data: t
                    }
                })
            };
            n._onEvent({
                type: "shippingaddresschange",
                payload: ha({}, t, {
                    updateWith: o
                })
            })
        }
        ,
        this._handleShippingOptionChange = function(e, t, r) {
            var o = function(t) {
                e.send({
                    action: "stripe-pr-callback-complete",
                    payload: {
                        nonce: r,
                        data: t
                    }
                })
            };
            n._onEvent({
                type: "shippingoptionchange",
                payload: ha({}, t, {
                    updateWith: o
                })
            })
        }
        ,
        this.setEventHandler = function(e) {
            n._onEvent = e
        }
        ,
        this.canMakePayment = function() {
            if (!n._shouldInitFrame() || !n._frame)
                return Re.resolve(!1);
            var e = n._frame;
            return fa(function() {
                return e.action(_o.CAN_MAKE_PAYMENT).then(function(e) {
                    return !0 === e.available
                })
            })
        }
        ,
        this.show = function() {
            n._frame && n._frame.send({
                action: "stripe-pr-show",
                payload: {
                    data: {
                        usesButtonElement: n._usesButtonElement && n._usesButtonElement()
                    }
                }
            })
        }
        ,
        this.update = function(e) {
            n._frame && n._frame.send({
                action: "stripe-pr-update",
                payload: {
                    data: e
                }
            })
        }
        ,
        this.abort = function() {
            n._frame && n._frame.send({
                action: "stripe-pr-abort",
                payload: {}
            })
        }
        ,
        this._controller = t.controller,
        this._authentication = t.authentication,
        this._mids = t.mids,
        this._usesButtonElement = t.usesButtonElement,
        this._controller && this._shouldInitFrame() && (this._controller.action.fetchLocale({
            locale: "auto"
        }),
        this._initFrame(t.options))
    }, ya = _a, ma = function() {
        if (!window.PaymentRequest)
            return null;
        if (/CriOS\/59/.test(navigator.userAgent))
            return null;
        if (/.*\(.*; wv\).*Chrome\/(?:53|54)\.\d.*/g.test(navigator.userAgent))
            return null;
        if (hr)
            return null;
        var e = window.PaymentRequest;
        return e.prototype.canMakePayment || (e.prototype.canMakePayment = function() {
            return Re.resolve(!1)
        }
        ),
        e
    }(), va = null, ba = function(e, t) {
        return null !== va ? Re.resolve(va) : ma ? t && "https:" !== window.location.protocol ? (window.console && window.console.warn("To test Payment Request, you must serve this page over HTTPS."),
        Re.resolve(!1)) : e ? e.action(_o.CAN_MAKE_PAYMENT).then(function(e) {
            var t = e.available;
            return va = !0 === t
        }) : Re.resolve(!1) : Re.resolve(!1)
    }, ga = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    , wa = function(e) {
        function t(e, n, r, o) {
            K(this, t);
            var a = $(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            Ea.call(a),
            a._showCalledByButtonElement = null,
            a._authentication = n,
            a._controller = e,
            a._mids = r,
            a._report("payreq.options", {
                options: o
            }),
            a._cachedCanMakePayment = null,
            a._canMakePaymentCalled = !1;
            var i = Ot(fo, o || {}, "paymentRequest()")
              , s = i.value;
            if (i.warnings.forEach(function(e) {
                return a._controller.warn(e)
            }),
            ma && "https:" === window.location.protocol) {
                a._controller.action.fetchLocale({
                    locale: "auto"
                });
                var c = a._controller.createHiddenFrame(Mt.PAYMENT_REQUEST_BROWSER, {
                    authentication: n,
                    mids: a._mids
                });
                a._setupPrFrame(c, s),
                a._prFrame = c
            } else
                a._prFrame = null;
            return a
        }
        return J(t, e),
        t
    }(_n), Ea = function() {
        var e = this;
        this._onEvent = null,
        this.setEventHandler = function(t) {
            e._onEvent = t
        }
        ,
        this.canMakePayment = ln(function() {
            return null === e._cachedCanMakePayment ? ba(e._prFrame, Ve(e._authentication.apiKey) === Ge.test).then(function(t) {
                return e._canMakePaymentCalled = !0,
                e._cachedCanMakePayment = t,
                e._report("payreq.can_make_payment_response", {
                    available: e._cachedCanMakePayment
                }),
                e._cachedCanMakePayment ? {
                    applePay: !1
                } : null
            }) : Re.resolve().then(function() {
                return e._canMakePaymentCalled = !0,
                e._report("payreq.can_make_payment_response", {
                    available: e._cachedCanMakePayment,
                    cached: !0
                }),
                e._cachedCanMakePayment ? {
                    applePay: !1
                } : null
            })
        }),
        this.update = ln(function(t) {
            var n = e._prFrame;
            if (n) {
                var r = Ot(po, t, "PaymentRequest update()")
                  , o = r.value;
                r.warnings.forEach(function(t) {
                    return e._controller.warn(t)
                }),
                n.send({
                    action: "stripe-pr-update",
                    payload: {
                        data: o
                    }
                })
            }
            e._report("payreq.update", {
                updates: t
            })
        }),
        this.show = ln(function() {
            if (null === e._showCalledByButtonElement && (e._showCalledByButtonElement = !1),
            e._usedByButtonElement && !e._showCalledByButtonElement && (e._report("payreq.show_called_with_button"),
            e._controller.warn("Do not call show() yourself if you are using the paymentRequestButton Element. The Element handles showing the payment sheet.")),
            !e._canMakePaymentCalled)
                throw new Oe("You must first check the Payment Request API's\navailability using paymentRequest.canMakePayment() before calling show().");
            if (!e._cachedCanMakePayment || !e._prFrame)
                throw new Oe("Payment Request is not available in this browser.");
            e._prFrame.send({
                action: "stripe-pr-show",
                payload: {
                    data: {
                        usesButtonElement: e._showCalledByButtonElement
                    }
                }
            }),
            e._report("payreq.show", {
                listeners: Object.keys(e._callbacks).sort()
            })
        }),
        this.abort = ln(function() {
            e._prFrame && (e._prFrame.send({
                action: "stripe-pr-abort",
                payload: {}
            }),
            e._report("payreq.abort"))
        }),
        this._report = function(t, n) {
            e._controller.report(t, ga({}, n, null !== e._showCalledByButtonElement ? {
                usesButtonElement: e._showCalledByButtonElement
            } : {}, {
                impl: "prapi"
            }))
        }
        ,
        this._elementShow = function() {
            e._showCalledByButtonElement = !0,
            e.show()
        }
        ,
        this._registerElement = function() {
            e._usedByButtonElement = !0
        }
        ,
        this._setupPrFrame = function(t, n) {
            t.send({
                action: "stripe-pr-initialize",
                payload: {
                    data: n
                }
            }),
            t._on("pr-cancel", function() {
                e._onEvent ? e._onEvent({
                    type: "cancel"
                }) : e._emit("cancel")
            }),
            t._on("pr-error", function(t) {
                e._report("payreq.api_error.create_token", {
                    error: "Would have emitted 'error' event, but 'error' is silenced."
                })
            }),
            t._on("pr-callback", function(r) {
                var o = r.event
                  , a = r.nonce
                  , i = r.options;
                if ("token" === o) {
                    var s = function(n) {
                        var r = Ot(lo, {
                            status: n
                        }, "status for PaymentRequest completion")
                          , o = r.value;
                        r.warnings.forEach(function(t) {
                            return e._controller.warn(t)
                        }),
                        t.send({
                            action: "stripe-pr-callback-complete",
                            payload: {
                                data: o,
                                nonce: a
                            }
                        })
                    };
                    e._handleToken(t, i, s)
                } else if ("shippingaddresschange" === o || "shippingoptionchange" === o)
                    if (e._hasRegisteredListener(o) || e._onEvent) {
                        var c = i.shippingAddress
                          , u = i.shippingOption
                          , l = function(r) {
                            var i = Ot(lo, r || {}, o + " callback")
                              , s = i.value;
                            i.warnings.forEach(function(t) {
                                return e._controller.warn(t)
                            }),
                            "shippingaddresschange" === o && s.status === ao.success && ra(s.shippingOptions || n.shippingOptions),
                            t.send({
                                action: "stripe-pr-callback-complete",
                                payload: {
                                    nonce: a,
                                    data: s
                                }
                            })
                        };
                        if ("shippingaddresschange" === o) {
                            var p = {
                                shippingAddress: c,
                                updateWith: l
                            };
                            e._onEvent ? e._onEvent({
                                type: "shippingaddresschange",
                                payload: p
                            }) : e._emit("shippingaddresschange", p)
                        } else {
                            var d = {
                                shippingOption: u,
                                updateWith: l
                            };
                            e._onEvent ? e._onEvent({
                                type: "shippingoptionchange",
                                payload: d
                            }) : e._emit("shippingoptionchange", d)
                        }
                    } else
                        "shippingaddresschange" === o && ra(n.shippingOptions),
                        t.send({
                            action: "stripe-pr-callback-complete",
                            payload: {
                                nonce: a,
                                data: {
                                    status: ao.success
                                }
                            }
                        });
                else
                    e._report("error.payreq.unknown_event", {
                        event: o,
                        options: i
                    })
            })
        }
        ,
        this._handleToken = function(t, n, r) {
            var o = n._privateOwner
              , a = V(n, ["_privateOwner"]);
            if (e._onEvent)
                return void e._onEvent({
                    type: "paymentresponse",
                    payload: ga({}, a, {
                        __googlePayBillingDetails: o,
                        complete: r
                    })
                });
            e._hasRegisteredListener("token") && e._emit("token", ga({}, a, {
                complete: r
            }));
            var i = a.token
              , s = V(a, ["token"])
              , c = n.payerPhone || null
              , u = n.payerEmail || null
              , l = e._showCalledByButtonElement ? Bt.paymentRequestButton : null;
            e._hasRegisteredListener("source") && e._controller.action.createSourceWithData({
                elementName: l,
                type: "card",
                sourceData: {
                    token: i.id,
                    owner: ga({
                        phone: c,
                        email: u
                    }, o || {})
                },
                mids: null
            }).then(function(t) {
                "error" === t.type ? (e._report("fatal.payreq.source_failed", {
                    error: t.error,
                    token: i
                }),
                r(ao.fail)) : e._emit("source", ga({}, s, {
                    source: t.object,
                    complete: r
                }))
            }),
            e._hasRegisteredListener("paymentmethod") && e._controller.action.createPaymentMethodWithData({
                elementName: l,
                type: "card",
                paymentMethodData: {
                    card: {
                        token: i.id
                    },
                    billing_details: ga({
                        phone: c,
                        email: u
                    }, o || {})
                },
                mids: null
            }).then(function(t) {
                "error" === t.type ? (e._report("fatal.payreq.pm_failed", {
                    error: t.error,
                    token: i
                }),
                r(ao.fail)) : e._emit("paymentmethod", ga({}, s, {
                    paymentMethod: t.object,
                    complete: r
                }))
            })
        }
    }, ka = wa, Pa = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    , Sa = function(e) {
        function t(e) {
            X(this, t);
            var n = ee(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            Oa.call(n),
            n._controller = e.controller,
            n._authentication = e.authentication,
            n._mids = e.mids,
            n._report("payreq.options", {
                options: e.rawOptions
            });
            var r = Ot(fo, e.rawOptions || {}, "paymentRequest()")
              , o = r.value;
            if (r.warnings.forEach(function(e) {
                return n._warn(e)
            }),
            o.__passThroughEmail && o.requestPayerEmail)
                throw new Oe("When providing `__passThroughEmail`, `requestPayerEmail` has to be `false`.");
            return n._initialOptions = o,
            n._queryStrategy = Eo(e.betas),
            n._initBackingLibraries(o),
            n
        }
        return te(t, e),
        t
    }(_n), Oa = function() {
        var e = this;
        this._usedByButtonElement = null,
        this._showCalledByButtonElement = !1,
        this._backingLibraries = {
            APPLE_PAY: null,
            GOOGLE_PAY: null,
            BROWSER: null
        },
        this._activeBackingLibraryName = null,
        this._activeBackingLibrary = null,
        this._canMakePaymentAvailability = {
            APPLE_PAY: null,
            GOOGLE_PAY: null,
            BROWSER: null
        },
        this._canMakePaymentResolved = !1,
        this._validateUserOn = function(t, n) {
            "string" == typeof t && ("source" === t && e._hasRegisteredListener("paymentmethod") || "paymentmethod" === t && e._hasRegisteredListener("source")) && e._controller.warn("Do not register event listeners for both `source` or `paymentmethod`. Only one of them will succeed.")
        }
        ,
        this._report = function(t, n) {
            e._controller.report(t, n)
        }
        ,
        this._warn = function(t) {
            e._controller.warn(t)
        }
        ,
        this._registerElement = function() {
            e._usedByButtonElement = !0,
            e._backingLibraries.APPLE_PAY && e._backingLibraries.APPLE_PAY._registerElement(),
            e._backingLibraries.BROWSER && e._backingLibraries.BROWSER._registerElement()
        }
        ,
        this._elementShow = function() {
            e._showCalledByButtonElement = !0,
            e._backingLibraries.APPLE_PAY && (e._backingLibraries.APPLE_PAY._showCalledByButtonElement = !0),
            e._backingLibraries.BROWSER && (e._backingLibraries.BROWSER._showCalledByButtonElement = !0),
            e.show()
        }
        ,
        this._initBackingLibraries = function(t) {
            e._queryStrategy.forEach(function(n) {
                switch (n) {
                case "APPLE_PAY":
                    var r = e._controller
                      , o = r.report
                      , a = r.warn
                      , i = r.action
                      , s = i.createApplePaySession
                      , c = i.tokenizeWithData
                      , u = i.createSourceWithData
                      , l = i.createPaymentMethodWithData
                      , p = new la({
                        report: o,
                        warn: a,
                        createApplePaySession: s,
                        tokenizeWithData: c,
                        createSourceWithData: u,
                        createPaymentMethodWithData: l,
                        authentication: e._authentication,
                        mids: e._mids,
                        options: t
                    });
                    p.setEventHandler(e._handleInternalEvent),
                    e._backingLibraries.APPLE_PAY = p;
                    break;
                case "GOOGLE_PAY":
                    var d = new ya({
                        controller: e._controller,
                        authentication: e._authentication,
                        mids: e._mids,
                        options: t,
                        usesButtonElement: function() {
                            return !0 === e._usedByButtonElement
                        }
                    });
                    d.setEventHandler(e._handleInternalEvent),
                    e._backingLibraries.GOOGLE_PAY = d;
                    break;
                case "BROWSER":
                    var f = new ka(e._controller,e._authentication,e._mids,Pa({}, t, {
                        __ignoreGooglePay: -1 !== e._queryStrategy.indexOf("GOOGLE_PAY")
                    }));
                    f.setEventHandler(e._handleInternalEvent),
                    e._backingLibraries.BROWSER = f;
                    break;
                default:
                    Ae(n)
                }
            })
        }
        ,
        this._handleInternalEvent = function(t) {
            switch (t.type) {
            case "paymentresponse":
                e._emitPaymentResponse(t.payload);
                break;
            case "error":
                break;
            default:
                e._emitExternalEvent(t)
            }
        }
        ,
        this._emitExternalEvent = function(t) {
            switch (t.type) {
            case "cancel":
                e._emit("cancel");
                break;
            case "shippingoptionchange":
            case "shippingaddresschange":
                var n = t.type
                  , r = t.payload
                  , o = null
                  , a = !1
                  , i = !1
                  , s = function(s) {
                    if (i && a)
                        return void e._controller.warn("Call to updateWith() was ignored because it has already timed out. Please ensure that updateWith is called within 30 seconds.");
                    if (a)
                        return void e._controller.warn("Call to updateWith() was ignored because it has already been called. Do not call updateWith more than once.");
                    o && clearTimeout(o),
                    a = !0;
                    var c = Ot(lo, s || {}, n + " callback")
                      , u = c.value;
                    c.warnings.forEach(function(t) {
                        return e._controller.warn(t)
                    });
                    var l = u.shippingOptions || e._initialOptions.shippingOptions;
                    if (!("shippingaddresschange" !== t.type || u.status !== mo.success || l && l.length))
                        throw new Oe("When requesting shipping information, you must specify shippingOptions once a shipping address is selected.\nEither provide shippingOptions in stripe.paymentRequest(...) or listen for the shippingaddresschange event and provide shippingOptions to the updateWith callback there.");
                    r.updateWith(u)
                };
                e._hasRegisteredListener(t.type) ? (e._emit(n, Pa({}, r, {
                    updateWith: s
                })),
                o = setTimeout(function() {
                    i = !0,
                    e._controller.warn('Timed out waiting for a call to updateWith(). If you listen to "' + t.type + '" events, then you must call event.updateWith in the "' + t.type + '" handler within 30 seconds.'),
                    s({
                        status: "fail"
                    })
                }, 29900)) : s({
                    status: "success"
                });
                break;
            case "token":
            case "source":
            case "paymentmethod":
                var c = t.type
                  , u = t.payload
                  , l = null
                  , p = !1
                  , d = !1
                  , f = function(t) {
                    if (p && d)
                        return void e._controller.warn("Call to complete() was ignored because it has already timed out. Please ensure that complete is called within 30 seconds.");
                    if (d)
                        return void e._controller.warn("Call to complete() was ignored because it has already been called. Do not call complete more than once.");
                    l && clearTimeout(l),
                    d = !0;
                    var n = Ot(io, t, "status for PaymentRequest completion")
                      , r = n.value;
                    n.warnings.forEach(function(t) {
                        return e._controller.warn(t)
                    }),
                    u.complete(r)
                };
                l = setTimeout(function() {
                    p = !0,
                    e._controller.warn('Timed out waiting for a call to complete(). Once you have processed the payment in the "' + t.type + '" handler, you must call event.complete within 30 seconds.'),
                    f("fail")
                }, 29900),
                e._emit(c, Pa({}, u, {
                    complete: f
                }));
                break;
            default:
                Ae(t)
            }
        }
        ,
        this._emitPaymentResponse = function(t) {
            var n = t.__googlePayBillingDetails
              , r = Z(t, ["__googlePayBillingDetails"])
              , o = r.token
              , a = Z(r, ["token"])
              , i = a.payerPhone
              , s = a.payerEmail
              , c = a.complete
              , u = e._showCalledByButtonElement ? Bt.paymentRequestButton : null;
            e._hasRegisteredListener("token") && e._emitExternalEvent({
                type: "token",
                payload: r
            }),
            e._hasRegisteredListener("source") && e._controller.action.createSourceWithData({
                elementName: u,
                type: "card",
                sourceData: {
                    token: o.id,
                    owner: Pa({
                        phone: i,
                        email: s
                    }, n || {})
                },
                mids: null
            }).then(function(t) {
                "error" === t.type ? (e._report("fatal.payreq.source_failed", {
                    error: t.error,
                    token: o
                }),
                c("fail")) : e._emitExternalEvent({
                    type: "source",
                    payload: Pa({}, a, {
                        source: t.object
                    })
                })
            }),
            e._hasRegisteredListener("paymentmethod") && e._controller.action.createPaymentMethodWithData({
                elementName: u,
                type: "card",
                paymentMethodData: {
                    card: {
                        token: o.id
                    },
                    billing_details: Pa({
                        phone: i,
                        email: s
                    }, n || {})
                },
                mids: null
            }).then(function(t) {
                "error" === t.type ? (e._report("fatal.payreq.pm_failed", {
                    error: t.error,
                    token: o
                }),
                c("fail")) : e._emitExternalEvent({
                    type: "paymentmethod",
                    payload: Pa({}, a, {
                        paymentMethod: t.object
                    })
                })
            })
        }
        ,
        this._canMakePaymentForBackingLibrary = function(t) {
            var n = e._backingLibraries[t];
            if (!n)
                throw new Error("Unexpectedly calling canMakePayment on uninitialized backing library.");
            return n.canMakePayment().then(function(n) {
                var r = !(null === n || !1 === n);
                return e._canMakePaymentAvailability = Pa({}, e._canMakePaymentAvailability, Q({}, t, r)),
                {
                    backingLibraryName: t,
                    available: r
                }
            })
        }
        ,
        this._constructCanMakePaymentResponse = function() {
            return Pa({
                applePay: e._canMakePaymentAvailability.APPLE_PAY
            }, -1 !== e._queryStrategy.indexOf("GOOGLE_PAY") ? {
                googlePay: e._canMakePaymentAvailability.GOOGLE_PAY
            } : {})
        }
        ,
        this.canMakePayment = ln(function() {
            if (e._canMakePaymentResolved)
                return null !== e._activeBackingLibrary ? Re.resolve(e._constructCanMakePaymentResponse()) : Re.resolve(null);
            if ("https:" !== window.location.protocol)
                return Re.resolve(null);
            var t = e._queryStrategy.map(function(t) {
                return function() {
                    return e._canMakePaymentForBackingLibrary(t)
                }
            });
            return $r(t, function(t) {
                var n = t.backingLibraryName
                  , r = t.available;
                return r && (e._activeBackingLibraryName = n,
                e._activeBackingLibrary = e._backingLibraries[n]),
                r
            }).then(function(t) {
                return e._canMakePaymentResolved = !0,
                "UNSATISFIED" === t.type ? null : e._constructCanMakePaymentResponse()
            })
        }),
        this.update = ln(function(t) {
            var n = Ot(po, t, "PaymentRequest update()")
              , r = n.value;
            n.warnings.forEach(function(t) {
                return e._warn(t)
            }),
            e._activeBackingLibrary && e._activeBackingLibrary.update(r)
        }),
        this.show = ln(function() {
            if (e._usedByButtonElement && !e._showCalledByButtonElement && (e._report("payreq.show_called_with_button"),
            e._warn("Do not call show() yourself if you are using the paymentRequestButton Element. The Element handles showing the payment sheet.")),
            !e._canMakePaymentResolved)
                throw new Oe("You must first check the Payment Request API's availability using paymentRequest.canMakePayment() before calling show().");
            if (!e._activeBackingLibrary)
                throw new Oe("Payment Request is not available in this browser.");
            e._activeBackingLibrary.show()
        }),
        this.abort = ln(function() {
            e._activeBackingLibrary && e._activeBackingLibrary.abort()
        })
    }, Aa = Sa, Ca = {
        base: nt(vt),
        complete: nt(vt),
        empty: nt(vt),
        invalid: nt(vt),
        paymentRequestButton: nt(vt)
    }, Ta = {
        classes: nt(Pt({
            base: nt(pt),
            complete: nt(pt),
            empty: nt(pt),
            focus: nt(pt),
            invalid: nt(pt),
            webkitAutofill: nt(pt)
        })),
        hidePostalCode: nt(ft),
        hideIcon: nt(ft),
        style: nt(Pt(Ca)),
        iconStyle: nt(st("solid", "default")),
        value: nt(rt(pt, vt)),
        __privateCvcOptional: nt(ft),
        __privateValue: nt(rt(pt, vt)),
        __privateEmitIbanValue: nt(ft),
        error: nt(Pt({
            type: pt,
            code: nt(pt),
            decline_code: nt(pt),
            param: nt(pt)
        })),
        locale: wt("elements()"),
        fonts: wt("elements()"),
        placeholder: nt(pt),
        disabled: nt(ft),
        placeholderCountry: nt(pt),
        paymentRequest: nt(rt(rt(ot(la, "stripe.paymentRequest(...)"), ot(ka, "stripe.paymentRequest(...)")), ot(Aa, "stripe.paymentRequest(...)"))),
        supportedCountries: nt(bt(pt))
    }, ja = Pt(Ta), Ra = function(e, t) {
        if (!(e && e in mr))
            throw new Oe("A valid Element name must be provided. Valid Elements are:\n" + Object.keys(mr).filter(function(e) {
                return !mr[e].beta
            }).join(", ") + "; you passed: " + e + ".");
        if (mr[e].unique && -1 !== t.indexOf(e))
            throw new Oe("Can only create one Element of type " + e + ".");
        var n = Fe(t, mr[e].conflict);
        if (n.length) {
            var r = n[0];
            throw new Oe("Cannot create an Element of type " + e + " after an Element of type " + r + " has already been created.")
        }
    }, Ia = "14px", Ma = function(e) {
        var t = e.split(" ").map(function(e) {
            return parseInt(e.trim(), 10)
        });
        return 1 === t.length || 2 === t.length ? 2 * t[0] : 3 === t.length || 4 === t.length ? t[0] + t[2] : 0
    }, qa = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "1.2em"
          , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ia
          , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "0"
          , r = Ma(n);
        if ("string" == typeof e && /^[0-9.]+px$/.test(e)) {
            return parseFloat(e.toString().replace(/[^0-9.]/g, "")) + r + "px"
        }
        var o = parseFloat(e.toString().replace(/[^0-9.]/g, ""))
          , a = parseFloat(Ia.replace(/[^0-9.]/g, ""))
          , i = parseFloat(t.toString().replace(/[^0-9.]/g, ""))
          , s = void 0;
        if ("string" == typeof t && /^(\d+|\d*\.\d+)px$/.test(t))
            s = i;
        else if ("string" == typeof t && /^(\d+|\d*\.\d+)em$/.test(t))
            s = i * a;
        else if ("string" == typeof t && /^(\d+|\d*\.\d+)%$/.test(t))
            s = i / 100 * a;
        else {
            if ("string" != typeof t || !/^[\d.]+$/.test(t) && !/^\d*\.(px|em|%)$/.test(t))
                return "100%";
            s = a
        }
        var c = o * s + r
          , u = c + "px";
        return /^[0-9.]+px$/.test(u) ? u : "100%"
    }, La = qa, Na = function(e, t) {
        return e ? window.getComputedStyle(e, t) : null
    }, Da = Na, Ba = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    , xa = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }(), Fa = {
        base: "StripeElement",
        focus: "StripeElement--focus",
        invalid: "StripeElement--invalid",
        complete: "StripeElement--complete",
        empty: "StripeElement--empty",
        webkitAutofill: "StripeElement--webkit-autofill"
    }, Ua = {
        margin: "0",
        padding: "0",
        border: "none",
        display: "block",
        background: "transparent",
        position: "relative",
        opacity: "1"
    }, Wa = {
        border: "none",
        display: "block",
        position: "absolute",
        height: "1px",
        top: "0",
        left: "0",
        padding: "0",
        margin: "0",
        width: "100%",
        opacity: "0",
        background: "transparent",
        "pointer-events": "none",
        "font-size": "16px"
    }, za = function(e) {
        return parseFloat(e.toFixed(1))
    }, Ha = function(e) {
        return /^\d+(\.\d*)?px$/.test(e)
    }, Ya = function(e) {
        function t(e) {
            oe(this, t);
            var n = ae(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            Ga.call(n);
            var r = e.controller
              , o = e.componentName
              , a = e.paymentRequest;
            n._controller = r,
            n._componentName = o;
            var i = "paymentRequestButton" === n._componentName;
            if (i) {
                if (!a)
                    throw new Oe("You must pass in a stripe.paymentRequest object in order to use this Element.");
                n._paymentRequest = a,
                n._paymentRequest._registerElement()
            }
            return n._createComponent(e, o),
            n._classes = Fa,
            n._changeClasses(e.classes || {}),
            n._lastBackgroundColor = "",
            n._destroyed = !1,
            n._focused = !1,
            n._empty = !i,
            n._invalid = !1,
            n._complete = !1,
            n._autofilled = !1,
            n._lastSubmittedAt = null,
            n
        }
        return ie(t, e),
        xa(t, [{
            key: "_checkDestroyed",
            value: function() {
                if (this._destroyed)
                    throw new Oe("This Element has already been destroyed. Please create a new one.")
            }
        }, {
            key: "_isMounted",
            value: function() {
                return !!document.body && document.body.contains(this._component)
            }
        }, {
            key: "_mountToParent",
            value: function(e) {
                var t = this._component.parentElement
                  , n = this._isMounted();
                if (e === t) {
                    if (n)
                        return;
                    this.unmount(),
                    this._mountTo(e)
                } else if (t) {
                    if (n)
                        throw new Oe("This Element is already mounted. Use `unmount()` to unmount the Element before re-mounting.");
                    this.unmount(),
                    this._mountTo(e)
                } else
                    this._mountTo(e)
            }
        }, {
            key: "_mountTo",
            value: function(e) {
                var t = Date.now()
                  , n = Da(e, null)
                  , r = !!n && "rtl" === n.getPropertyValue("direction")
                  , o = "BROWSER";
                for (this._paymentRequest && this._paymentRequest instanceof Aa && this._paymentRequest._activeBackingLibraryName ? o = this._paymentRequest._activeBackingLibraryName : _r && (o = "APPLE_PAY"),
                this._parent = e; e.firstChild; )
                    e.removeChild(e.firstChild);
                e.appendChild(this._component),
                this._frame.send({
                    action: "stripe-user-mount",
                    payload: {
                        mountTime: t,
                        rtl: r,
                        paymentRequestButtonType: o
                    }
                }),
                this._findPossibleLabel(),
                this._updateClasses()
            }
        }, {
            key: "_updateClasses",
            value: function() {
                this._parent && tn(this._parent, [[this._classes.base, !0], [this._classes.empty, this._empty], [this._classes.focus, this._focused], [this._classes.invalid, this._invalid], [this._classes.complete, this._complete], [this._classes.webkitAutofill, this._autofilled]])
            }
        }, {
            key: "_removeClasses",
            value: function() {
                this._parent && tn(this._parent, [[this._classes.base, !1], [this._classes.empty, !1], [this._classes.focus, !1], [this._classes.invalid, !1], [this._classes.complete, !1], [this._classes.webkitAutofill, !1]])
            }
        }, {
            key: "_findPossibleLabel",
            value: function() {
                var e = this._parent;
                if (e) {
                    var t = e.getAttribute("id")
                      , n = void 0;
                    if (t && (n = document.querySelector("label[for='" + t + "']")),
                    n)
                        e.addEventListener("click", this.focus);
                    else
                        for (n = n || e.parentElement; n && "LABEL" !== n.nodeName; )
                            n = n.parentElement;
                    n ? (this._label = n,
                    n.addEventListener("click", this.focus)) : e.addEventListener("click", this.focus)
                }
            }
        }, {
            key: "_changeClasses",
            value: function(e) {
                var t = {};
                return Object.keys(e).forEach(function(n) {
                    if (!Fa[n])
                        throw new Oe(n + " is not a customizable class name.\nYou can customize: " + Object.keys(Fa).join(", "));
                    var r = e[n] || Fa[n];
                    t[n] = r.replace(/\./g, " ")
                }),
                this._classes = Ba({}, this._classes, t),
                this
            }
        }, {
            key: "_emitEvent",
            value: function(e, t) {
                return this._emit(e, Ba({
                    elementType: this._componentName
                }, t))
            }
        }, {
            key: "_setupEvents",
            value: function() {
                var e = this;
                this._frame._on("redirectfocus", function(t) {
                    var n = t.focusDirection
                      , r = Nn(e._component, n);
                    r && r.focus()
                }),
                this._frame._on("focus", function() {
                    e._focused = !0,
                    e._updateClasses()
                }),
                this._frame._on("blur", function() {
                    e._focused = !1,
                    e._updateClasses(),
                    e._lastSubmittedAt && "paymentRequestButton" === e._componentName && (e._controller.report("payment_request_button.sheet_visible", {
                        latency: new Date - e._lastSubmittedAt
                    }),
                    e._lastSubmittedAt = null)
                }),
                this._frame._on("submit", function() {
                    if ("paymentRequestButton" === e._componentName) {
                        e._lastSubmittedAt = new Date;
                        var t = !1
                          , n = !1;
                        e._emitEvent("click", {
                            preventDefault: function() {
                                e._controller.report("payment_request_button.default_prevented"),
                                t && e._controller.warn("event.preventDefault() was called after the payment sheet was shown. Make sure to call it synchronously when handling the `click` event."),
                                n = !0
                            }
                        }),
                        !n && e._paymentRequest && (e._paymentRequest._elementShow(),
                        t = !0)
                    } else
                        e._emitEvent("submit"),
                        e._formSubmit()
                }),
                ["ready", "focus", "blur", "escape"].forEach(function(t) {
                    e._frame._on(t, function() {
                        e._emitEvent(t)
                    })
                }),
                this._frame._on("change", function(t) {
                    var n = {};
                    ["error", "value", "empty", "complete"].concat(re(Er[e._componentName] || [])).forEach(function(e) {
                        return n[e] = t[e]
                    }),
                    e._emitEvent("change", n),
                    e._empty = n.empty,
                    e._invalid = !!n.error,
                    e._complete = n.complete,
                    e._updateClasses()
                }),
                this._frame._on("__privateIntegrationError", function(t) {
                    var n = t.message;
                    e._emitEvent("__privateIntegrationError", {
                        message: n
                    })
                }),
                this._frame._on("dimensions", function(t) {
                    if (e._parent) {
                        var n = Da(e._parent, null);
                        if (n) {
                            var r = parseFloat(n.getPropertyValue("height"))
                              , o = t.height;
                            if ("border-box" === n.getPropertyValue("box-sizing")) {
                                var a = parseFloat(n.getPropertyValue("padding-top"))
                                  , i = parseFloat(n.getPropertyValue("padding-bottom"));
                                r = r - parseFloat(n.getPropertyValue("border-top")) - parseFloat(n.getPropertyValue("border-bottom")) - a - i
                            }
                            0 !== r && za(r) < za(o) && e._controller.report("wrapper_height_mismatch", {
                                height: o,
                                outer_height: r
                            });
                            var s = e._component.getBoundingClientRect().height;
                            0 !== s && 0 !== o && za(s) !== za(o) && (e._frame.updateStyle({
                                height: o + "px"
                            }),
                            e._controller.report("iframe_height_update", {
                                height: o,
                                calculated_height: s
                            }))
                        }
                    }
                }),
                this._frame._on("autofill", function() {
                    if (e._parent) {
                        var t = e._parent.style.backgroundColor
                          , n = "#faffbd" === t || "rgb(250, 255, 189)" === t;
                        e._lastBackgroundColor = n ? e._lastBackgroundColor : t,
                        e._parent.style.backgroundColor = "#faffbd",
                        e._autofilled = !0,
                        e._updateClasses()
                    }
                }),
                this._frame._on("autofill-cleared", function() {
                    e._autofilled = !1,
                    e._parent && (e._parent.style.backgroundColor = e._lastBackgroundColor),
                    e._updateClasses()
                })
            }
        }, {
            key: "_handleOutsideClick",
            value: function() {
                this._secondaryFrame && this._secondaryFrame.send({
                    action: "stripe-outside-click",
                    payload: {}
                })
            }
        }, {
            key: "_createSecondFrame",
            value: function(e, t, n) {
                var r = this._controller.createSecondaryElementFrame(e, Ba({}, n, {
                    componentName: t
                }));
                return r && r.on && r.on("height-change", function(e) {
                    r.updateStyle({
                        height: e.height + "px"
                    })
                }),
                r
            }
        }, {
            key: "_createComponent",
            value: function(e, t) {
                this._createElement(e, t),
                this._setupEvents(),
                this._updateFrameHeight(e, !0)
            }
        }, {
            key: "_updateFrameHeight",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if ("paymentRequestButton" === this._componentName) {
                    var n = e.style && e.style.paymentRequestButton || {}
                      , r = n.height
                      , o = "string" == typeof r ? r : void 0;
                    (t || o) && (this._frame.updateStyle({
                        height: o || this._lastHeight || "40px"
                    }),
                    this._lastHeight = o || this._lastHeight)
                } else {
                    var a = e.style && e.style.base || {}
                      , i = a.lineHeight
                      , s = a.fontSize
                      , c = a.padding
                      , u = "string" != typeof i || isNaN(parseFloat(i)) ? void 0 : i
                      , l = "string" == typeof s ? s : void 0
                      , p = "string" == typeof c ? c : void 0;
                    if (l && !Ha(l) && this._controller.warn("The fontSize style you specified (" + l + ") is not in px. We do not recommend using relative css units, as they will be calculated relative to our iframe's styles rather than your site's."),
                    t || u || l) {
                        var d = -1 === Yt.indexOf(this._componentName) ? void 0 : p || this._lastPadding
                          , f = La(u || this._lastHeight, l || this._lastFontSize, d);
                        this._frame.updateStyle({
                            height: f
                        }),
                        this._lastFontSize = l || this._lastFontSize,
                        this._lastHeight = u || this._lastHeight,
                        this._lastPadding = d
                    }
                }
            }
        }, {
            key: "_createElement",
            value: function(e, t) {
                var n = this
                  , r = (e.classes,
                e.controller,
                e.paymentRequest,
                ne(e, ["classes", "controller", "paymentRequest"]))
                  , o = document.createElement("div");
                o.className = "__PrivateStripeElement";
                var a = document.createElement("input");
                a.className = "__PrivateStripeElement-input",
                a.setAttribute("aria-hidden", "true"),
                a.setAttribute("aria-label", " "),
                a.setAttribute("autocomplete", "false"),
                a.maxLength = 1,
                a.disabled = !0,
                nn(o, Ua),
                nn(a, Wa);
                var i = Da(document.body)
                  , s = !!i && "rtl" === i.getPropertyValue("direction")
                  , c = br[t]
                  , u = Ba({}, r, {
                    rtl: s
                })
                  , l = this._controller.createElementFrame(c, u);
                if (l._on("load", function() {
                    a.disabled = !1
                }),
                a.addEventListener("focus", function() {
                    l.focus()
                }),
                l.appendTo(o),
                kr[t]) {
                    var p = kr[t].secondary;
                    this._secondaryFrame = this._createSecondFrame(c, p, Ba({}, u, {
                        primaryElementType: t
                    })),
                    this._secondaryFrame.appendTo(o),
                    window.addEventListener("click", function() {
                        return n._handleOutsideClick()
                    })
                }
                if (o.appendChild(a),
                dr) {
                    var d = document.createElement("input");
                    d.className = "__PrivateStripeElement-safariInput",
                    d.setAttribute("aria-hidden", "true"),
                    d.setAttribute("tabindex", "-1"),
                    d.setAttribute("autocomplete", "false"),
                    d.maxLength = 1,
                    d.disabled = !0,
                    nn(d, Wa),
                    o.appendChild(d)
                }
                this._component = o,
                this._frame = l,
                this._fakeInput = a
            }
        }]),
        t
    }(_n), Ga = function() {
        var e = this;
        this._paymentRequest = null,
        this.mount = ln(function(t) {
            e._checkDestroyed();
            var n = void 0;
            if (!t)
                throw new Oe("Missing argument. Make sure to call mount() with a valid DOM element or selector.");
            if ("string" == typeof t) {
                var r = document.querySelectorAll(t);
                if (r.length > 1 && e._controller.warn("The selector you specified (" + t + ") applies to " + r.length + " DOM elements that are currently on the page.\nThe Stripe Element will be mounted to the first one."),
                !r.length)
                    throw new Oe("The selector you specified (" + t + ") applies to no DOM elements that are currently on the page.\nMake sure the element exists on the page before calling mount().");
                n = r[0]
            } else {
                if (!t.appendChild)
                    throw new Oe("Invalid DOM element. Make sure to call mount() with a valid DOM element or selector.");
                n = t
            }
            if ("INPUT" === n.nodeName)
                throw new Oe("Stripe Elements must be mounted in a DOM element that\ncan contain child nodes. `input` elements are not permitted to have child\nnodes. Try using a `div` element instead.");
            if (n.children.length && e._controller.warn("This Element will be mounted to a DOM element that contains child nodes."),
            e._paymentRequest) {
                if (!e._paymentRequest._canMakePaymentCalled && !e._paymentRequest._canMakePaymentResolved)
                    throw new Oe("For the paymentRequestButton Element, you must first check availability using paymentRequest.canMakePayment() before mounting the Element.");
                if (!e._paymentRequest._cachedCanMakePayment && !e._paymentRequest._activeBackingLibraryName)
                    throw new Oe("The paymentRequestButton Element is not available in the current environment.");
                e._mountToParent(n)
            } else
                e._mountToParent(n)
        }),
        this.update = ln(function(t) {
            e._checkDestroyed();
            var n = Ot(ja, t || {}, "element.update()")
              , r = n.value;
            if (n.warnings.forEach(function(t) {
                return e._controller.warn(t)
            }),
            r) {
                var o = r.classes
                  , a = ne(r, ["classes"]);
                e._changeClasses(o || {}),
                e._updateFrameHeight(r),
                Object.keys(a).length && (e._frame.update(a),
                e._secondaryFrame && e._secondaryFrame.update(a))
            }
            return e
        }),
        this.focus = ln(function(t) {
            return e._checkDestroyed(),
            t && t.preventDefault(),
            document.activeElement && document.activeElement.blur && document.activeElement.blur(),
            e._fakeInput.focus(),
            e
        }),
        this.blur = ln(function() {
            return e._checkDestroyed(),
            e._frame.blur(),
            e._fakeInput.blur(),
            e
        }),
        this.clear = ln(function() {
            return e._checkDestroyed(),
            e._frame.clear(),
            e
        }),
        this.unmount = ln(function() {
            e._checkDestroyed();
            var t = e._component.parentElement
              , n = e._label;
            return t && (t.removeChild(e._component),
            t.removeEventListener("click", e.focus),
            e._removeClasses()),
            e._parent = null,
            n && (n.removeEventListener("click", e.focus),
            e._label = null),
            e._secondaryFrame && (e._secondaryFrame.unmount(),
            window.removeEventListener("click", e._handleOutsideClick)),
            e._fakeInput.disabled = !0,
            e._frame.unmount(),
            e
        }),
        this.destroy = ln(function() {
            return e._checkDestroyed(),
            e.unmount(),
            e._destroyed = !0,
            e._emitEvent("destroy"),
            e
        }),
        this._formSubmit = function() {
            for (var t = e._component.parentElement; t && "FORM" !== t.nodeName; )
                t = t.parentElement;
            if (t) {
                var n = document.createEvent("Event");
                n.initEvent("submit", !0, !0),
                t.dispatchEvent(n)
            }
        }
    }, Va = Ya, Ka = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    , $a = {
        locale: nt(pt),
        fonts: nt(bt(vt))
    }, Ja = Pt($a), Qa = function e(t, n) {
        var r = this;
        ce(this, e),
        Za.call(this);
        var o = Ot(Ja, n || {}, "elements()")
          , a = o.value;
        o.warnings.forEach(function(e) {
            return t.warn(e)
        }),
        Ir(t.warn),
        t.report("elements", {
            options: n
        }),
        this._elements = [],
        this._id = Vt("elements"),
        this._controller = t;
        var i = a.locale
          , s = a.fonts || [];
        this._controller.action.fetchLocale({
            locale: i || "auto"
        });
        var c = s.filter(function(e) {
            return !e.cssSrc || "string" != typeof e.cssSrc
        }).map(function(e) {
            return Ka({}, e, {
                __resolveFontRelativeTo: window.location.href
            })
        })
          , u = s.map(function(e) {
            return e.cssSrc
        }).reduce(function(e, t) {
            return "string" == typeof t ? [].concat(se(e), [t]) : e
        }, []).map(function(e) {
            return Ct(e) ? e : Rt(window.location.href, e)
        });
        return this._pendingFonts = u.length,
        this._commonOptions = Ka({}, a, {
            fonts: c
        }),
        u.forEach(function(e) {
            if ("string" == typeof e) {
                var t = Date.now();
                Vr(e).then(function(n) {
                    r._controller.report("font.loaded", {
                        load_time: Date.now() - t,
                        font_count: n.length,
                        css_src: e
                    });
                    var o = n.map(function(t) {
                        return Ka({}, t, {
                            __resolveFontRelativeTo: e
                        })
                    });
                    r._controller.action.updateCSSFonts({
                        fonts: o,
                        groupId: r._id
                    }),
                    r._commonOptions = Ka({}, r._commonOptions, {
                        fonts: [].concat(se(r._commonOptions.fonts ? r._commonOptions.fonts : []), se(o))
                    })
                }).catch(function(n) {
                    r._controller.report("error.font.not_loaded", {
                        load_time: Date.now() - t,
                        message: n && n.message && n.message,
                        css_src: e
                    }),
                    r._controller.warn("Failed to load CSS file at " + e + ".")
                })
            }
        }),
        this
    }, Za = function() {
        var e = this;
        this.create = pn(function(t, n) {
            Ra(t, e._elements);
            var r = Ot(ja, n || {}, "create()")
              , o = r.value;
            r.warnings.forEach(function(t) {
                return e._controller.warn(t)
            });
            var a = Ka({}, o, e._commonOptions, {
                componentName: t,
                groupId: e._id
            })
              , i = (ur || lr) && Qt(a).length > 2e3
              , s = !!e._pendingFonts || i
              , c = new Va(Ka({}, a, {
                fonts: i ? null : e._commonOptions.fonts,
                controller: e._controller,
                wait: s
            }));
            return e._elements = [].concat(se(e._elements), [t]),
            c._on("destroy", function() {
                e._elements = e._elements.filter(function(e) {
                    return e !== t
                })
            }),
            i && c._frame.send({
                action: "stripe-user-update",
                payload: {
                    fonts: e._commonOptions.fonts
                }
            }),
            c
        })
    }, Xa = Qa, ei = function(e, t, n, r, o) {
        if (go(o, vo.spr_beta_1))
            return new Aa({
                controller: e,
                authentication: t,
                mids: n,
                rawOptions: r,
                betas: o
            });
        if (window.ApplePaySession) {
            var a = e.report
              , i = e.warn
              , s = e.action
              , c = s.createApplePaySession
              , u = s.tokenizeWithData
              , l = s.createSourceWithData
              , p = s.createPaymentMethodWithData;
            return new la({
                report: a,
                warn: i,
                createApplePaySession: c,
                tokenizeWithData: u,
                createSourceWithData: l,
                createPaymentMethodWithData: p,
                authentication: t,
                mids: n,
                options: r
            })
        }
        return new ka(e,t,n,r)
    }, ti = ei, ni = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    , ri = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    , oi = function(e, t) {
        switch (e.type) {
        case "object":
            return {
                paymentIntent: e.object
            };
        case "error":
            return {
                error: ri({}, t ? {
                    payment_intent: t
                } : {}, e.error)
            };
        default:
            return Ae(e)
        }
    }, ai = function(e) {
        var t = e.trim().match(/^([a-z]+_[^_]+)_secret_[^-]+$/);
        return t ? {
            id: t[1],
            clientSecret: t[0]
        } : null
    }, ii = function(e, t) {
        if ("string" != typeof e)
            return tt("a client_secret string", e, t);
        var n = ai(e);
        return null === n ? tt("a client secret of the form ${id}_secret_${secret}", e, t) : Ze(n, [])
    }, si = function(e, t) {
        if (null == e)
            return Ze(null);
        var n = e.type
          , r = le(e, ["type"])
          , o = ri({}, t, {
            path: [].concat(ue(t.path), ["type"])
        })
          , a = dt(pt, function() {
            return null
        })(n, o);
        return "error" === a.type ? a : Ze({
            type: a.value,
            data: r
        })
    }, ci = function(e) {
        return "requires_source_action" === e || "requires_action" === e
    }, ui = function(e) {
        return "requires_source_action" === e.status || "requires_action" === e.status ? e.next_action : null
    }, li = function(e, t) {
        if (null === e)
            return et("object", "null", t);
        if ("object" !== (void 0 === e ? "undefined" : ni(e)))
            return et("object", void 0 === e ? "undefined" : ni(e), t);
        var n = e.client_secret
          , r = e.status
          , o = e.next_action
          , a = ri({}, t, {
            path: [].concat(ue(t.path), ["client_secret"])
        })
          , i = ii(n, a);
        if ("error" === i.type)
            return i;
        if ("string" != typeof r) {
            var s = ri({}, t, {
                path: [].concat(ue(t.path), ["status"])
            });
            return et("string", void 0 === r ? "undefined" : ni(r), s)
        }
        if (("requires_source_action" === r || "requires_action" === r) && "object" !== (void 0 === o ? "undefined" : ni(o))) {
            var c = ri({}, t, {
                path: [].concat(ue(t.path), ["next_action"])
            });
            return et("object", void 0 === o ? "undefined" : ni(o), c)
        }
        return Ze(e, [])
    }, pi = function(e) {
        return function(t, n) {
            if ("object" === (void 0 === t ? "undefined" : ni(t)) && null !== t) {
                var r = t.source
                  , o = t.source_data
                  , a = t.payment_method
                  , i = t.payment_method_data
                  , s = le(t, ["source", "source_data", "payment_method", "payment_method_data"]);
                if (null != r && "string" != typeof r) {
                    var c = ri({}, n, {
                        path: [].concat(ue(n.path), ["source"])
                    });
                    return et("string", void 0 === r ? "undefined" : ni(r), c)
                }
                if (null != a && "string" != typeof a) {
                    var u = ri({}, n, {
                        path: [].concat(ue(n.path), ["payment_method"])
                    });
                    return et("string", void 0 === a ? "undefined" : ni(a), u)
                }
                if (null != o && "object" !== (void 0 === o ? "undefined" : ni(o))) {
                    var l = ri({}, n, {
                        path: [].concat(ue(n.path), ["source_data"])
                    });
                    return et("object", void 0 === o ? "undefined" : ni(o), l)
                }
                if (null != i && "object" !== (void 0 === i ? "undefined" : ni(i))) {
                    var p = ri({}, n, {
                        path: [].concat(ue(n.path), ["payment_method_data"])
                    });
                    return et("object", void 0 === i ? "undefined" : ni(i), p)
                }
                var d = ri({}, n, {
                    path: [].concat(ue(n.path), ["source_data"])
                })
                  , f = si(o, d);
                if ("error" === f.type)
                    return f;
                var h = f.value
                  , _ = ri({}, n, {
                    path: [].concat(ue(n.path), ["payment_method_data"])
                })
                  , y = si(i, _);
                if ("error" === y.type)
                    return y;
                var m = y.value;
                return Ze({
                    sourceData: h,
                    source: null == r ? null : r,
                    paymentMethodData: m,
                    paymentMethod: null == a ? null : a,
                    otherParams: ri({}, e, s)
                })
            }
            return null === t ? et("object", "null", n) : et("object", void 0 === t ? "undefined" : ni(t), n)
        }
    }, di = function(e) {
        return function(t, n) {
            if (void 0 === t)
                return Ze({
                    sourceData: null,
                    paymentMethodData: null,
                    source: null,
                    paymentMethod: null,
                    otherParams: {}
                });
            if ("object" !== (void 0 === t ? "undefined" : ni(t)))
                return et("object", void 0 === t ? "undefined" : ni(t), n);
            if (null === t)
                return et("object", "null", n);
            if (e) {
                if (!t.payment_intent)
                    return Ze({
                        sourceData: null,
                        paymentMethodData: null,
                        source: null,
                        paymentMethod: null,
                        otherParams: t
                    });
                var r = t.payment_intent
                  , o = le(t, ["payment_intent"])
                  , a = ri({}, n, {
                    path: [].concat(ue(n.path), ["payment_intent"])
                });
                return pi(o)(r, a)
            }
            return t.payment_intent ? Xe(new Oe("The payment_intent parameter has been removed. To fix, move everything nested under the payment_intent parameter to the top-level object.")) : pi({})(t, n)
        }
    }, fi = {
        card: "card",
        ideal: "ideal",
        sepa_debit: "sepa_debit",
        three_d_secure: "three_d_secure"
    }, hi = (Pe = {},
    pe(Pe, Bt.card, fi.card),
    pe(Pe, Bt.cardNumber, fi.card),
    pe(Pe, Bt.cardExpiry, fi.card),
    pe(Pe, Bt.cardCvc, fi.card),
    pe(Pe, Bt.postalCode, fi.card),
    pe(Pe, Bt.iban, fi.sepa_debit),
    pe(Pe, Bt.idealBank, fi.ideal),
    Pe), _i = function(e) {
        return -1 === Ft.indexOf(e)
    }, yi = function(e, t) {
        return null != t ? t : _i(e) ? null : hi[e] || null
    }, mi = function(e) {
        var t = e.name
          , n = e.value
          , r = e.expiresIn
          , o = e.path
          , a = e.domain
          , i = new Date
          , s = r || 31536e6;
        i.setTime(i.getTime() + s);
        var c = o || "/"
          , u = (n || "").replace(/[^!#-+\--:<-[\]-~]/g, encodeURIComponent)
          , l = encodeURIComponent(t) + "=" + u + ";expires=" + i.toGMTString() + ";path=" + c;
        a && (l += ";domain=" + a),
        document.cookie = l
    }, vi = function(e) {
        var t = qe(document.cookie.split("; "), function(t) {
            var n = t.indexOf("=");
            return decodeURIComponent(t.substr(0, n)) === e
        });
        if (t) {
            var n = t.indexOf("=");
            return decodeURIComponent(t.substr(n + 1))
        }
        return null
    }, bi = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }(), gi = "__privateStripeMetricsController", wi = {
        MERCHANT: "merchant",
        SESSION: "session"
    }, Ei = function() {
        function e() {
            var t = this
              , n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (de(this, e),
            n.checkoutIds) {
                var r = n.checkoutIds
                  , o = r.muid
                  , a = r.sid;
                this._muid = o,
                this._sid = a,
                this._doNotPersist = !0
            } else
                this._muid = this._getID(wi.MERCHANT),
                this._sid = this._getID(wi.SESSION),
                this._doNotPersist = !1;
            this._id = Vt(gi),
            this._controllerFrame = new An(Mt.METRICS_CONTROLLER,this._id,{
                autoload: !0,
                queryString: this._buildFrameQueryString()
            }),
            this._guidPromise = new Re(function(e) {
                t._establishMessageChannel(e)
            }
            ),
            this._startIntervalCheck(),
            setTimeout(this._testLatency.bind(this), 2e3 + 500 * Math.random())
        }
        return bi(e, [{
            key: "ids",
            value: function() {
                return {
                    guid: this._guid || "NA",
                    muid: this._muid || "NA",
                    sid: this._sid || "NA"
                }
            }
        }, {
            key: "idsPromise",
            value: function() {
                var e = this;
                return this._guidPromise.then(function() {
                    return e.ids()
                })
            }
        }, {
            key: "_establishMessageChannel",
            value: function(e) {
                var t = this;
                window.addEventListener("message", function(n) {
                    try {
                        var r = JSON.parse(n.data)
                          , o = r.originatingScript
                          , a = r.payload;
                        "m" === o && (t._guid = a,
                        e(a))
                    } catch (e) {}
                })
            }
        }, {
            key: "_startIntervalCheck",
            value: function() {
                var e = this
                  , t = window.location.href;
                setInterval(function() {
                    var n = window.location.href;
                    n !== t && (e.send({
                        action: "ping",
                        payload: {
                            sid: e._getID(wi.SESSION),
                            muid: e._getID(wi.MERCHANT),
                            title: document.title,
                            referrer: document.referrer,
                            url: document.location.href
                        }
                    }),
                    t = n)
                }, 5e3)
            }
        }, {
            key: "report",
            value: function(e, t) {
                try {
                    this.send({
                        action: "track",
                        payload: {
                            sid: this._getID(wi.SESSION),
                            muid: this._getID(wi.MERCHANT),
                            url: document.location.href,
                            source: e,
                            data: t
                        }
                    })
                } catch (e) {}
            }
        }, {
            key: "send",
            value: function(e) {
                var t = Nt(Mt.METRICS_CONTROLLER);
                Xn(t) && this._controllerFrame.send(e)
            }
        }, {
            key: "_testLatency",
            value: function() {
                var e = this
                  , t = []
                  , n = new Date
                  , r = function r() {
                    try {
                        var o = new Date;
                        t.push(o - n),
                        t.length >= 10 && (e.report("mouse-timings-10", t),
                        document.removeEventListener("mousemove", r)),
                        n = o
                    } catch (e) {}
                };
                document.addEventListener("mousemove", r)
            }
        }, {
            key: "_extractMetaReferrerPolicy",
            value: function() {
                var e = document.querySelector("meta[name=referrer]");
                return null != e && e instanceof HTMLMetaElement ? e.content.toLowerCase() : null
            }
        }, {
            key: "_extractUrl",
            value: function(e) {
                var t = document.location.href;
                switch (e) {
                case "origin":
                case "strict-origin":
                case "origin-when-cross-origin":
                case "strict-origin-when-cross-origin":
                    return document.location.origin;
                case "unsafe-url":
                    return t.split("#")[0];
                default:
                    return t
                }
            }
        }, {
            key: "_buildFrameQueryString",
            value: function() {
                var e = this._extractMetaReferrerPolicy()
                  , t = this._extractUrl(e)
                  , n = {
                    url: t,
                    title: document.title,
                    referrer: document.referrer,
                    muid: this._muid,
                    sid: this._sid,
                    preview: er(t)
                };
                return null != e && (n.metaReferrerPolicy = e),
                Object.keys(n).map(function(e) {
                    return null != n[e] ? e + "=" + encodeURIComponent(n[e].toString()) : null
                }).join("&")
            }
        }, {
            key: "_getID",
            value: function(e) {
                switch (e) {
                case wi.MERCHANT:
                    if (this._doNotPersist)
                        return this._muid;
                    try {
                        var t = vi("__stripe_mid") || Kt();
                        return mi({
                            name: "__stripe_mid",
                            value: t,
                            domain: "." + document.location.hostname
                        }),
                        t
                    } catch (e) {
                        return "NA"
                    }
                case wi.SESSION:
                    if (this._doNotPersist)
                        return this._sid;
                    try {
                        var n = vi("__stripe_sid") || Kt();
                        return mi({
                            name: "__stripe_sid",
                            value: n,
                            domain: "." + document.location.hostname,
                            expiresIn: 18e5
                        }),
                        n
                    } catch (e) {
                        return "NA"
                    }
                default:
                    throw new Error("Invalid ID type specified: " + e)
                }
            }
        }]),
        e
    }(), ki = Ei, Pi = {
        _frame: Pt({
            id: pt
        }),
        _componentName: pt
    }, Si = Pt(Pi), Oi = function(e) {
        var t = St(Si, e, "");
        return "error" === t.type ? null : t.value
    }, Ai = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    , Ci = function(e, t, n, r) {
        if (null === e) {
            if (null === t) {
                throw new Oe(n + ": you must additionally specify the type of payment method to create within " + (r ? "source_data" : "payment_method_data") + ".")
            }
            return t
        }
        if (null === t)
            return e;
        if (t !== e)
            throw new Oe(n + ": you specified `type: " + t + "`, but " + n + " will create a " + e + " payment method.");
        return e
    }, Ti = function(e, t, n, r, o, a) {
        var i = St(Si, o, r);
        if ("error" === i.type)
            return null;
        var s = i.value
          , c = Ot(di(t), a, r)
          , u = c.value
          , l = u.sourceData
          , p = u.source
          , d = u.paymentMethodData
          , f = u.paymentMethod
          , h = u.otherParams;
        if (!e && l)
            throw new Oe(r + ": Expected payment_method_data, not source_data.");
        if (null != p)
            throw new Oe("When calling " + r + " on an Element, you can't pass in a pre-existing source ID, as a source will be created using the Element.");
        if (null != f)
            throw new Oe("When calling " + r + " on an Element, you can't pass in a pre-existing PaymentMethod ID, as a PaymentMethod will be created using the Element.");
        var _ = s._componentName
          , y = s._frame.id
          , m = l || d || {
            type: null,
            data: {}
        }
          , v = m.type
          , b = m.data
          , g = yi(_, v)
          , w = e && !d;
        return {
            confirmMode: {
                tag: "element",
                elementName: _,
                shouldCreateSource: w,
                frameId: y,
                type: Ci(n, g, r, w),
                data: b
            },
            otherParams: h
        }
    }, ji = function(e, t, n, r, o, a) {
        var i = Ot(di(t), o, r)
          , s = i.value
          , c = s.sourceData
          , u = s.source
          , l = s.paymentMethodData
          , p = s.paymentMethod
          , d = s.otherParams;
        if (!e && c)
            throw new Oe(r + ": Expected payment_method, source, or payment_method_data, not source_data.");
        if (null !== u && null !== c)
            throw new Oe(r + ": Expected either source or source_data, but not both.");
        if (null !== p && null !== l)
            throw new Oe(r + ": Expected either payment_method or payment_method_data, but not both.");
        if (null !== p && null !== u)
            throw new Oe(r + ": Expected either payment_method or source, but not both.");
        if (c || l) {
            var f = c || l || {}
              , h = f.type
              , _ = f.data
              , y = e && !l;
            return {
                confirmMode: {
                    tag: "data",
                    shouldCreateSource: y,
                    type: Ci(n, h, r, y),
                    data: _
                },
                otherParams: d
            }
        }
        return null !== u ? {
            confirmMode: {
                tag: "source",
                source: u
            },
            otherParams: d
        } : null !== p ? {
            confirmMode: {
                tag: "paymentMethod",
                paymentMethod: p
            },
            otherParams: d
        } : {
            confirmMode: {
                tag: "none"
            },
            otherParams: d
        }
    }, Ri = function(e, t, n, r) {
        return function(o, a) {
            var i = Ti(e, t, n, r, o, a);
            if (i)
                return i;
            var s = ji(e, t, n, r, o);
            if (s)
                return s;
            throw new Oe("Expected: stripe." + r + "(intentSecret, element[, data]) or stripe." + r + "(intentSecret[, data]). Please see the docs for more usage examples https://stripe.com/docs/payments/dynamic-authentication")
        }
    }, Ii = function(e, t, n) {
        return e.createLightboxFrame(Mt.AUTHORIZE_WITH_URL, {
            url: t,
            locale: n
        })
    }, Mi = function(e, t, n) {
        var r = Rr()
          , o = Date.now()
          , a = Ii(t, e, n);
        return a.show(),
        t.report("authorize_with_url.loading", {
            viewport: r
        }),
        a._on("load", function() {
            t.report("authorize_with_url.loaded", {
                loadDuration: Date.now() - o
            }),
            a.fadeInBackdrop()
        }),
        new Re(function(e, n) {
            a._once("authorize_with_url_done", function(n) {
                t.report("authorize_with_url.done", {
                    shownDuration: Date.now() - o,
                    success: !("error"in n)
                }),
                a.destroy().then(function() {
                    return e(n)
                })
            })
        }
        )
    }, qi = function(e, t) {
        if (e) {
            if ("use_stripe_sdk" === e.type && "cardinal_3ds2_fingerprint" === e.use_stripe_sdk.type)
                return Ai({
                    type: "cardinal-sdk-fingerprint"
                }, e.use_stripe_sdk.stripe_js);
            if ("use_stripe_sdk" === e.type && "stripe_3ds2_fingerprint" === e.use_stripe_sdk.type)
                return {
                    type: "3ds2-fingerprint",
                    threeDS2Source: e.use_stripe_sdk.three_d_secure_2_source,
                    transactionId: e.use_stripe_sdk.server_transaction_id,
                    methodUrl: e.use_stripe_sdk.three_ds_method_url,
                    directoryServerName: e.use_stripe_sdk.directory_server_name
                };
            if ("use_stripe_sdk" !== e.type && "authorize_with_url" !== e.type || e.use_stripe_sdk && ("cardinal_3ds2_fingerprint" === e.use_stripe_sdk.type || "cardinal_3ds2_challenge" === e.use_stripe_sdk.type || "stripe_3ds2_fingerprint" === e.use_stripe_sdk.type) || t !== fi.card) {
                if ("redirect_to_url" !== e.type && "authorize_with_url" !== e.type || t !== fi.ideal)
                    return;
                return {
                    type: "ideal-redirect",
                    redirectUrl: e.redirect_to_url ? e.redirect_to_url.url : e.authorize_with_url.url
                }
            }
            return {
                type: "3ds1-modal",
                url: e.use_stripe_sdk ? e.use_stripe_sdk.stripe_js : e.authorize_with_url.url
            }
        }
    }, Li = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    , Ni = function(e) {
        if (!e || "object" !== (void 0 === e ? "undefined" : Li(e)))
            return null;
        var t = e.type
          , n = fe(e, ["type"]);
        return {
            type: "string" == typeof t ? t : null,
            data: n
        }
    }, Di = function(e) {
        switch (e.type) {
        case "object":
            return {
                source: e.object
            };
        case "error":
            return {
                error: e.error
            };
        default:
            return Ae(e)
        }
    }, Bi = {
        source: Pt({
            id: it("src_"),
            client_secret: it("src_client_secret_")
        })
    }, xi = Pt(Bi), Fi = function(e) {
        switch (e.type) {
        case "object":
            return {
                paymentMethod: e.object
            };
        case "error":
            return {
                error: e.error
            };
        default:
            return Ae(e)
        }
    }, Ui = function(e) {
        return new Re(function(t, n) {
            var r = setTimeout(function() {
                t({
                    type: "error",
                    error: {
                        code: "redirect_error",
                        message: "Failed to redirect to " + e
                    },
                    locale: "en"
                })
            }, 3e3);
            window.addEventListener("pagehide", function() {
                clearTimeout(r)
            }),
            window.top.location.href = e
        }
        )
    }, Wi = function(e, t, n) {
        e.report("redirect_error", {
            initiator: t,
            error: n.error
        })
    }, zi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    , Hi = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    , Yi = function(e, t, n) {
        return e.createLightboxFrame(Mt.CARDINAL_3DS2, {
            intentSecret: t,
            locale: n
        })
    }, Gi = function(e, t, n) {
        return e.createLightboxFrame(Mt.STRIPE_3DS2, {
            intentSecret: t,
            locale: n
        })
    }, Vi = function(e) {
        return function(t) {
            if (t.error || t.paymentIntent)
                return t;
            throw e.report("cardinal_3ds2.malformed_frame_action_payload", {
                payload: t
            }),
            new Oe("Malformed frame action response")
        }
    }, Ki = function(e, t, n, r) {
        var o = Date.now()
          , a = Yi(n, e, r);
        return a.show(),
        n.report("cardinal_3ds2.frame.loading"),
        new Re(function(e) {
            a._on("load", function() {
                n.report("cardinal_3ds2.frame.loaded", {
                    loadDuration: Date.now() - o
                }),
                a.fadeInBackdrop(),
                a.action("stripe-cardinal-3ds2-init", t).then(Vi(n)).then(function(t) {
                    n.report("cardinal_3ds2.done", {
                        totalDuration: Date.now() - o,
                        success: !("error"in t)
                    }),
                    a.destroy().then(function() {
                        return e(t)
                    })
                })
            })
        }
        )
    }, $i = function(e) {
        return function(t) {
            if (t.error || t.object)
                return t;
            throw e.report("3ds2.malformed_frame_action_payload", {
                payload: t
            }),
            new Oe("Malformed frame action response")
        }
    }, Ji = function(e, t, n, r) {
        var o = Date.now()
          , a = Gi(n, e, r);
        return a.show(),
        n.report("3ds2.frame.loading"),
        new Re(function(r) {
            a._on("load", function() {
                n.report("3ds2.frame.loaded", {
                    loadDuration: Date.now() - o
                }),
                a.fadeInBackdrop(),
                a.action("3ds2-init", Hi({}, t, {
                    clientSecret: e
                })).then($i(n)).then(oi).then(function(e) {
                    n.report("3ds2.done", {
                        totalDuration: Date.now() - o,
                        success: !("error"in e)
                    }),
                    a.destroy().then(function() {
                        return r(e)
                    })
                })
            })
        }
        )
    }, Qi = function(e, t, n) {
        var r = function(t) {
            return Wi(n, "ideal redirect", t),
            oi(t, e)
        };
        return Ui(t).then(r)
    }, Zi = function(e) {
        switch (e.type) {
        case "error":
            var t = e.error;
            if ("payment_intent_unexpected_state" === t.code && "object" === zi(t.payment_intent) && null != t.payment_intent && "string" == typeof t.payment_intent.status && ci(t.payment_intent.status)) {
                var n = t.payment_intent;
                return {
                    type: "object",
                    locale: e.locale,
                    object: n
                }
            }
            return e;
        case "object":
            return e;
        default:
            return Ae(e)
        }
    }, Xi = function(e, t, n, r) {
        var o = qi(ui(t), n);
        if (!o)
            return Re.resolve({
                paymentIntent: t
            });
        switch (o.type) {
        case "3ds1-modal":
            return Mi(o.url, e, r).then(function(e) {
                if (e.paymentIntent || e.error)
                    return e;
                throw new Error("Got SetupIntent response from AuthorizeWithUrl")
            });
        case "3ds2-fingerprint":
            return Ji(t.client_secret, {
                threeDS2Source: o.threeDS2Source,
                directoryServerName: o.directoryServerName,
                transactionId: o.transactionId,
                methodUrl: o.methodUrl
            }, e, r);
        case "cardinal-sdk-fingerprint":
            return Ki(t.client_secret, {
                jwt: o.jwt,
                bin: o.bin,
                env: o.env
            }, e, r);
        case "ideal-redirect":
            return Qi(t, o.redirectUrl, e);
        default:
            return Re.resolve({
                paymentIntent: t
            })
        }
    }, es = function(e, t, n) {
        return function(r) {
            var o = Zi(r);
            switch (o.type) {
            case "error":
                var a = o.error
                  , i = a.payment_intent;
                return n && i && "payment_intent_unexpected_state" === a.code && ("succeeded" === i.status || "requires_capture" === i.status) ? Re.resolve({
                    paymentIntent: i
                }) : Re.resolve(oi(r));
            case "object":
                var s = o.object;
                return Xi(e, s, t, o.locale);
            default:
                return Ae(o)
            }
        }
    }, ts = function(e, t, n, r, o) {
        var a = Oi(r);
        if ("string" != typeof n)
            return Re.reject(new Oe("Please provide a PaymentMethod type to createPaymentMethod."));
        var i = Ni(a ? o : r)
          , s = i || {
            type: null,
            data: {}
        }
          , c = s.type
          , u = s.data;
        if (c && n !== c)
            return Re.reject(new Oe("The type supplied in payment_method_data is not consistent."));
        if (a) {
            var l = a._frame.id
              , p = a._componentName;
            return e.action.createPaymentMethodWithElement({
                frameId: l,
                elementName: p,
                type: n,
                paymentMethodData: u,
                mids: t
            }).then(Fi)
        }
        return i ? e.action.createPaymentMethodWithData({
            elementName: null,
            type: n,
            paymentMethodData: u,
            mids: t
        }).then(Fi) : Re.reject(new Oe("Please provide either an Element or PaymentMethod creation parameters to createPaymentMethod."))
    }, ns = function(e, t) {
        var n = Ot(ii, e, "retrievePaymentIntent")
          , r = n.value;
        return t.action.retrievePaymentIntent(r).then(oi)
    }, rs = function(e, t, n, r, o, a) {
        var i = Ot(ii, r, "stripe.confirmPaymentIntent intent secret")
          , s = i.value
          , c = Ri(e, !1, null, "confirmPaymentIntent")(o, a);
        return t.action.confirmPaymentIntent(Hi({}, c, {
            intentSecret: s,
            expectedType: null,
            mids: n
        })).then(oi)
    }, os = function(e, t) {
        var n = Ot(ii, e, "handleCardAction")
          , r = n.value;
        return t.action.retrievePaymentIntent(r).then(function(e) {
            var n = Zi(e);
            switch (n.type) {
            case "error":
                return Re.resolve(oi(e));
            case "object":
                var r = n.object;
                if (ci(r.status)) {
                    if ("manual" !== r.confirmation_method)
                        throw new Oe("handleCardAction: The PaymentIntent supplied does not require manual server-side confirmation. Please use handleCardPayment instead to complete the payment.");
                    return Xi(t, r, fi.card, n.locale)
                }
                throw new Oe("handleCardAction: The PaymentIntent supplied is not in the requires_action state.");
            default:
                return Ae(n)
            }
        })
    }, as = function(e, t, n, r, o, a, i) {
        var s = Ot(ii, o, "stripe.handleCardPayment intent secret")
          , c = s.value
          , u = fi.card
          , l = Ri(e, r, u, "handleCardPayment")(a, i)
          , p = !a && !i;
        return t.action.confirmPaymentIntent(Hi({}, l, {
            otherParams: Hi({}, l.otherParams, {
                use_stripe_sdk: !0
            }),
            intentSecret: c,
            expectedType: u,
            mids: n
        })).then(es(t, u, p))
    }, is = function(e, t, n, r, o, a) {
        var i = Ot(ii, r, "stripe.handleSepaDebitPayment intent secret")
          , s = i.value
          , c = fi.sepa_debit
          , u = Ri(!0, n, c, "handleSepaDebitPayment")(o, a)
          , l = !o && !a;
        return e.action.confirmPaymentIntent(Hi({}, u, {
            intentSecret: s,
            expectedType: c,
            mids: t
        })).then(es(e, c, l))
    }, ss = function(e, t, n, r, o, a) {
        var i = Ot(ii, r, "stripe.handleIdealPayment intent secret")
          , s = i.value
          , c = fi.ideal
          , u = Ri(!0, n, c, "handleIdealPayment")(o, a)
          , l = !o && !a;
        return e.action.confirmPaymentIntent(Hi({}, u, {
            intentSecret: s,
            expectedType: c,
            mids: t
        })).then(es(e, c, l))
    }, cs = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    , us = function(e, t, n, r) {
        var o = qi(ui(t), n);
        if (!o)
            return Re.resolve({
                setupIntent: t
            });
        switch (o.type) {
        case "3ds1-modal":
            return Mi(o.url, e, r).then(function(e) {
                if (e.setupIntent || e.error)
                    return e;
                throw new Error("Got PaymentIntent response from AuthorizeWithUrl")
            });
        default:
            return Re.resolve({
                setupIntent: t
            })
        }
    }, ls = function(e, t, n) {
        return function(r) {
            switch (r.type) {
            case "error":
                var o = r.error
                  , a = o.setup_intent;
                return n && a && "succeeded" === a.status ? Re.resolve({
                    setupIntent: a
                }) : Re.resolve({
                    error: o
                });
            case "object":
                var i = r.object;
                return us(e, i, t, r.locale);
            default:
                return Ae(r)
            }
        }
    }, ps = function(e, t, n, r, o) {
        var a = Ot(ii, n, "stripe.handleCardSetup intent secret")
          , i = a.value
          , s = fi.card
          , c = Ri(!1, !1, s, "handleCardSetup")(r, o)
          , u = !r && !o;
        return e.action.confirmSetupIntent(cs({}, c, {
            otherParams: cs({}, c.otherParams, {
                use_stripe_sdk: !0
            }),
            intentSecret: i,
            expectedType: s,
            mids: t
        })).then(ls(e, s, u))
    }, ds = [vo.checkout_beta_2, vo.checkout_beta_3, vo.checkout_beta_4, vo.checkout_google_pay_beta_1], fs = {
        da: "da",
        de: "de",
        en: "en",
        es: "es",
        fi: "fi",
        fr: "fr",
        it: "it",
        ja: "ja",
        nl: "nl",
        nb: "nb",
        pl: "pl",
        pt: "pt",
        sv: "sv",
        zh: "zh"
    }, hs = Object.keys(fs), _s = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    , ys = {
        sku: nt(pt),
        plan: nt(pt),
        clientReferenceId: nt(pt),
        locale: nt(st.apply(void 0, ["auto"].concat(_e(hs)))),
        customerEmail: nt(pt),
        billingAddressCollection: nt(st("required", "auto")),
        submitType: nt(st("auto", "pay", "book", "donate"))
    }, ms = function(e, t, n) {
        if (e && t || (e || t) && n)
            throw new Oe("stripe.redirectToCheckout: Expected only one of sku, plan, or items.");
        if ("string" == typeof e)
            return [{
                sku: e,
                quantity: 1
            }];
        if ("string" == typeof t)
            return [{
                plan: t,
                quantity: 1
            }];
        if (n)
            return n.map(function(e) {
                return "sku" === e.type ? {
                    sku: e.id,
                    quantity: e.quantity
                } : {
                    plan: e.id,
                    quantity: e.quantity
                }
            });
        throw new Oe("stripe.redirectToCheckout: You must provide either sku, plan, or items.")
    }, vs = function(e) {
        var t = kt(_s({}, ys, {
            items: nt(rt(bt(kt({
                type: st("plan"),
                quantity: ht(0),
                id: pt
            })), bt(kt({
                type: st("sku"),
                quantity: ht(0),
                id: pt
            })))),
            successUrl: pt,
            cancelUrl: pt
        }))
          , n = Ot(t, e, "stripe.redirectToCheckout")
          , r = n.value
          , o = r.sku
          , a = r.plan
          , i = r.items
          , s = he(r, ["sku", "plan", "items"])
          , c = ms(o, a, i);
        return _s({
            tag: "no-session",
            items: c
        }, s)
    }, bs = function(e, t) {
        var n = kt(_s({}, ys, {
            sessionId: nt(pt),
            successUrl: nt(pt),
            cancelUrl: nt(pt),
            items: nt(rt(bt(kt({
                quantity: ht(0),
                plan: pt
            })), bt(kt({
                quantity: ht(0),
                sku: pt
            }))))
        }))
          , r = Ot(n, e, "stripe.redirectToCheckout")
          , o = r.value;
        if (o.sessionId) {
            var a = o.sessionId;
            if (Object.keys(o).length > 1)
                throw new Oe("stripe.redirectToCheckout: Do not provide other parameters when providing sessionId. Specify all parameters on your server when creating the CheckoutSession.");
            if (!/^cs_/.test(a))
                throw new Oe("stripe.redirectToCheckout: Invalid value for sessionId. You specified '" + a + "'.");
            if ("livemode" === t && /^cs_test_/.test(a))
                throw new Oe("stripe.redirectToCheckout: the provided sessionId is for a test mode Checkout Session, whereas Stripe.js was initialized with a live mode publishable key.");
            if ("testmode" === t && /^cs_live_/.test(a))
                throw new Oe("stripe.redirectToCheckout: the provided sessionId is for a live mode Checkout Session, whereas Stripe.js was initialized with a test mode publishable key.");
            return {
                tag: "session",
                sessionId: a
            }
        }
        var i = (o.sessionId,
        o.sku,
        o.plan,
        o.items)
          , s = o.successUrl
          , c = o.cancelUrl
          , u = he(o, ["sessionId", "sku", "plan", "items", "successUrl", "cancelUrl"]);
        if (!i)
            throw new Oe("stripe.redirectToCheckout: You must provide one of items or sessionId.");
        if (!s || !c)
            throw new Oe("stripe.redirectToCheckout: You must provide successUrl and cancelUrl.");
        return _s({
            tag: "no-session",
            items: i,
            successUrl: s,
            cancelUrl: c
        }, u)
    }, gs = function(e, t) {
        var n = bs(e, t);
        if ("no-session" === n.tag) {
            var r = n.successUrl
              , o = n.cancelUrl;
            if (!Ct(r))
                throw new Oe("stripe.redirectToCheckout: successUrl must start with either http:// or https://.");
            if (!Ct(o))
                throw new Oe("stripe.redirectToCheckout: cancelUrl must start with either http:// or https://.");
            return n
        }
        return n
    }, ws = function(e, t) {
        return "session" === t.tag || null == e || t.locale || -1 === ["auto"].concat(_e(hs)).indexOf(e) ? t : _s({}, t, {
            locale: e
        })
    }, Es = function(e, t, n) {
        switch (e) {
        case "checkout_beta_2":
            return vs(t);
        case "checkout_beta_3":
            return bs(t, n);
        case "checkout_beta_4":
        default:
            return gs(t, n)
        }
    }, ks = function(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "unknown";
        return ws(t, Es(e, n, r))
    }, Ps = ks, Ss = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    , Os = function(e, t) {
        var n = function(t) {
            return Wi(e, "redirectToCheckout", t),
            {
                error: t.error
            }
        };
        return Ui(t).then(n)
    }, As = function(e, t, n, r) {
        return function(o) {
            e.report("redirect_to_checkout.options", {
                beta: t,
                options: o,
                globalLocale: r
            });
            var a = Ps(t, r, o, e.livemode());
            if ("session" === a.tag) {
                var i = a
                  , s = i.sessionId;
                return e.action.createPaymentPageWithSession({
                    beta: t,
                    mids: n(),
                    sessionId: s
                }).then(function(t) {
                    if ("error" === t.type)
                        return {
                            error: t.error
                        };
                    var n = t.object.url;
                    return Os(e, n)
                })
            }
            var c = a
              , u = (c.tag,
            c.items)
              , l = c.successUrl
              , p = c.cancelUrl
              , d = c.clientReferenceId
              , f = c.customerEmail
              , h = c.billingAddressCollection
              , _ = c.submitType
              , y = ye(c, ["tag", "items", "successUrl", "cancelUrl", "clientReferenceId", "customerEmail", "billingAddressCollection", "submitType"])
              , m = u.map(function(e) {
                if (e.sku)
                    return {
                        type: "sku",
                        id: e.sku,
                        quantity: e.quantity
                    };
                if (e.plan)
                    return {
                        type: "plan",
                        id: e.plan,
                        quantity: e.quantity
                    };
                throw new Error("Unexpected item shape.")
            })
              , v = null === t ? {
                use_payment_methods: !0
            } : {};
            return e.action.createPaymentPage(Ss({
                beta: t,
                mids: n(),
                items: m,
                success_url: l,
                cancel_url: p,
                client_reference_id: d,
                customer_email: f,
                billing_address_collection: h,
                submit_type: _
            }, v, y)).then(function(t) {
                if ("error" === t.type)
                    return {
                        error: t.error
                    };
                var n = t.object.url;
                return Os(e, n)
            })
        }
    }, Cs = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    , Ts = function(e) {
        switch (e.type) {
        case "object":
            return {
                token: e.object
            };
        case "error":
            return {
                error: e.error
            };
        default:
            return Ae(e)
        }
    }, js = function(e) {
        return "object" === (void 0 === e ? "undefined" : Cs(e)) && null !== e ? e : {}
    }, Rs = function(e, t, n) {
        var r = Oi(t);
        if (r && "cardCvc" === r._componentName) {
            var o = r._frame.id;
            return e.action.tokenizeCvcUpdate({
                frameId: o,
                mids: n
            }).then(Ts)
        }
        throw new Oe("You must provide a `cardCvc` Element to create a `cvc_update` token.")
    }, Is = function(e, t) {
        return function(n, r) {
            var o = Oi(n);
            if (o) {
                var a = o._frame.id
                  , i = o._componentName
                  , s = js(r);
                return e.action.tokenizeWithElement({
                    frameId: a,
                    elementName: i,
                    tokenData: s,
                    mids: t
                }).then(Ts)
            }
            if ("string" == typeof n) {
                var c = n
                  , u = js(r);
                return e.action.tokenizeWithData({
                    elementName: null,
                    type: c,
                    tokenData: u,
                    mids: t
                }).then(Ts)
            }
            throw new Oe("You must provide a Stripe Element or a valid token type to create a Token.")
        }
    }, Ms = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    , qs = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }(), Ls = Pt({
        apiKey: pt,
        stripeAccount: nt(pt),
        locale: nt(pt),
        __privateApiUrl: nt(pt),
        __checkout: nt(Pt({
            mids: Pt({
                muid: pt,
                sid: pt
            })
        })),
        betas: nt(bt(ct.apply(void 0, ve(bo))))
    }), Ns = function(e) {
        return "You have an in-flight " + e + "! Please be sure to disable your form submit button when " + e + " is called."
    }, Ds = function() {
        function e(t, n) {
            var r = this;
            me(this, e),
            Bs.call(this);
            var o = Ot(Ls, t || {}, "Stripe()")
              , a = o.value
              , i = o.warnings
              , s = a.apiKey
              , c = a.stripeAccount
              , u = a.locale
              , l = a.__privateApiUrl
              , p = a.__checkout
              , d = a.betas;
            if ("" === s)
                throw new Oe("Please call Stripe() with your publishable key. You used an empty string.");
            if (0 === s.indexOf("sk_"))
                throw new Oe("You should not use your secret key with Stripe.js.\n        Please pass a publishable key instead.");
            p && p.mids && (e._ec = new ki({
                checkoutIds: p.mids
            })),
            this._apiKey = s,
            this._keyMode = Ve(s),
            this._locale = u || null,
            this._betas = d || [],
            this._stripeAccount = c || null,
            this._isCheckout = !!p,
            this._controller = new jr(Ms({
                apiKey: s,
                __privateApiUrl: l,
                stripeAccount: c,
                betas: this._betas,
                stripeJsId: e.stripeJsId
            }, this._locale ? {
                locale: this._locale
            } : {})),
            i.forEach(function(e) {
                return r._controller.warn(e)
            }),
            this._ensureHTTPS(),
            this._ensureStripeHosted(n),
            this._attachPaymentIntentMethods(this._betas),
            this._attachCheckoutMethods(this._betas),
            this._attachPrivateMethodsForCheckout(this._isCheckout),
            this._warnIE9Deprecation()
        }
        return qs(e, [{
            key: "_attachPaymentIntentMethods",
            value: function(e) {
                var t = this
                  , n = go(this._betas, vo.payment_intent_beta_1) || go(this._betas, vo.payment_intent_beta_2)
                  , r = function() {
                    return t._mids()
                }
                  , o = dn(function() {
                    for (var e = arguments.length, n = Array(e), o = 0; o < e; o++)
                        n[o] = arguments[o];
                    return ts.apply(void 0, [t._controller, r()].concat(n))
                })
                  , a = ln(function(e) {
                    return ns(e, t._controller)
                })
                  , i = dn(function() {
                    for (var e = arguments.length, n = Array(e), o = 0; o < e; o++)
                        n[o] = arguments[o];
                    return rs.apply(void 0, [!0, t._controller, r()].concat(n))
                })
                  , s = dn(function() {
                    for (var e = arguments.length, n = Array(e), o = 0; o < e; o++)
                        n[o] = arguments[o];
                    return rs.apply(void 0, [!1, t._controller, r()].concat(n))
                })
                  , c = Mn(as, Ns("handleCardPayment"))
                  , u = dn(function() {
                    for (var e = arguments.length, o = Array(e), a = 0; a < e; a++)
                        o[a] = arguments[a];
                    return c.apply(void 0, [!0, t._controller, r(), n].concat(o))
                })
                  , l = dn(function() {
                    for (var e = arguments.length, o = Array(e), a = 0; a < e; a++)
                        o[a] = arguments[a];
                    return c.apply(void 0, [!1, t._controller, r(), n].concat(o))
                })
                  , p = Mn(os, Ns("handleCardAction"))
                  , d = ln(function(e) {
                    return p(e, t._controller)
                })
                  , f = Mn(ps, Ns("handleCardSetup"))
                  , h = dn(function() {
                    for (var e = arguments.length, n = Array(e), o = 0; o < e; o++)
                        n[o] = arguments[o];
                    return f.apply(void 0, [t._controller, r()].concat(n))
                })
                  , _ = dn(function() {
                    for (var e = arguments.length, o = Array(e), a = 0; a < e; a++)
                        o[a] = arguments[a];
                    return is.apply(void 0, [t._controller, r(), n].concat(o))
                })
                  , y = dn(function() {
                    for (var e = arguments.length, o = Array(e), a = 0; a < e; a++)
                        o[a] = arguments[a];
                    return ss.apply(void 0, [t._controller, r(), n].concat(o))
                });
                this.createPaymentMethod = o,
                this.retrievePaymentIntent = a,
                this.handleCardPayment = l,
                this.confirmPaymentIntent = s,
                this.handleCardAction = d;
                var m = function(e) {
                    return function() {
                        throw new Oe("You cannot call `stripe." + e + "` without supplying a PaymentIntents beta flag when initializing Stripe.js.        You can find more information including code snippets at https://www.stripe.com/docs/payments/payment-intents/quickstart.")
                    }
                };
                this.fulfillPaymentIntent = m("fulfillPaymentIntent"),
                this.handleSepaDebitPayment = m("handleSepaDebitPayment"),
                this.handleIdealPayment = m("handleIdealPayment"),
                go(this._betas, vo.payment_intent_beta_1) ? this.fulfillPaymentIntent = u : (go(this._betas, vo.payment_intent_beta_3) || go(this._betas, vo.payment_intent_beta_2)) && (this.handleCardPayment = u),
                go(this._betas, vo.payment_intent_beta_3) && (this.confirmPaymentIntent = i,
                this.handleSepaDebitPayment = _,
                this.handleIdealPayment = y),
                go(this._betas, vo.setup_intent_beta_1) && (this.handleCardSetup = h)
            }
        }, {
            key: "_attachPrivateMethodsForCheckout",
            value: function(e) {
                var t = this;
                e && (this.tryNextSourceAction = pn(function(e, n) {
                    var r = Ot(li, e, "Payment Intent")
                      , o = r.value
                      , a = Object.keys(fi).map(function(e) {
                        return fi[e]
                    })
                      , i = Ot(st.apply(void 0, ve(a)), n, "Source type")
                      , s = i.value;
                    return Xi(t._controller, o, s, "auto")
                }))
            }
        }, {
            key: "_attachCheckoutMethods",
            value: function(e) {
                var t = this
                  , n = function() {
                    return t._mids()
                }
                  , r = qe(ds, function(e) {
                    return go(t._betas, e)
                });
                this.redirectToCheckout = As(this._controller, r || null, n, this._locale)
            }
        }, {
            key: "_warnIE9Deprecation",
            value: function() {
                var e = this._keyMode === Ge.live
                  , t = "Starting in December 2018, stripe.js v3 will no longer support IE9, per Microsoft's lifecycle policy.\n\nThis error is being thrown only in IE9 in testmode so that you have an opportunity to update your integration or your browser testing strategy.\n\nIf you want to suppress this error in testmode until December, initialize stripe.js with the `acknowledge_ie9_deprecation` beta:\nvar stripe = Stripe(key, {betas: ['acknowledge_ie9_deprecation']})";
                if (pr && !e && !go(this._betas, vo.acknowledge_ie9_deprecation))
                    throw window.console && console.error(t),
                    new Oe(t)
            }
        }, {
            key: "_ensureHTTPS",
            value: function() {
                var e = window.location.protocol
                  , t = -1 !== ["https:", "file:"].indexOf(e)
                  , n = -1 !== ["localhost", "127.0.0.1", "0.0.0.0"].indexOf(window.location.hostname)
                  , r = this._keyMode === Ge.live
                  , o = "Live Stripe.js integrations must use HTTPS. For more information: https://stripe.com/docs/stripe-js/elements/quickstart#http-requirements";
                if (!t) {
                    if (r && !n)
                        throw this._controller.report("user_error.non_https_error", {
                            protocol: e
                        }),
                        new Oe(o);
                    !r || n ? window.console && console.warn("You may test your Stripe.js integration over HTTP. However, live Stripe.js integrations must use HTTPS.") : window.console && console.warn(o)
                }
            }
        }, {
            key: "_ensureStripeHosted",
            value: function(e) {
                if (!e)
                    throw this._controller.report("user_error.self_hosted"),
                    new Oe("Stripe.js must be loaded from js.stripe.com. For more information https://stripe.com/docs/stripe-js/reference#including-stripejs")
            }
        }, {
            key: "_mids",
            value: function() {
                return e._ec ? e._ec.ids() : null
            }
        }]),
        e
    }();
    Ds.version = 3,
    Ds.stripeJsId = Kt(),
    Ds._ec = function() {
        return "https://checkout.stripe.com/".match(new RegExp(document.location.protocol + "//" + document.location.host)) ? null : new ki
    }();
    var Bs = function() {
        var e = this;
        this.elements = ln(function(t) {
            return new Xa(e._controller,Ms({}, e._locale ? {
                locale: e._locale
            } : {}, t))
        }),
        this.createToken = pn(function(t, n) {
            var r = e._mids();
            if ("cvc_update" === t) {
                if (go(e._betas, vo.cvc_update_beta_1))
                    return Rs(e._controller, n, r);
                throw new Oe("You cannot create a 'cvc_update' token without using the 'cvc_update_beta_1' beta flag.")
            }
            return Is(e._controller, r)(t, n)
        }),
        this.createSource = pn(function(t, n) {
            var r = Oi(t)
              , o = Ni(r ? n : t)
              , a = o || {
                type: null,
                data: {}
            }
              , i = a.type
              , s = a.data;
            if (r) {
                var c = r._frame.id
                  , u = r._componentName;
                return !o && _i(u) ? Re.reject(new Oe("Please provide Source creation parameters to createSource.")) : e._controller.action.createSourceWithElement({
                    frameId: c,
                    elementName: u,
                    type: i,
                    sourceData: s,
                    mids: e._mids()
                }).then(Di)
            }
            return o ? i ? e._controller.action.createSourceWithData({
                elementName: null,
                type: i,
                sourceData: s,
                mids: e._mids()
            }).then(Di) : Re.reject(new Oe("Please provide a source type to createSource.")) : Re.reject(new Oe("Please provide either an Element or Source creation parameters to createSource."))
        }),
        this.retrieveSource = ln(function(t) {
            var n = Ot(xi, {
                source: t
            }, "retrieveSource")
              , r = n.value;
            return n.warnings.forEach(function(t) {
                return e._controller.warn(t)
            }),
            e._controller.action.retrieveSource(r).then(Di)
        }),
        this.paymentRequest = ln(function(t) {
            return Ke(e._keyMode),
            ti(e._controller, {
                apiKey: e._apiKey,
                accountId: e._stripeAccount
            }, e._mids(), t, e._betas)
        })
    }
      , xs = Ds
      , Fs = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , Us = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
      , Ws = function() {
        if (document.currentScript) {
            var e = Tt(document.currentScript.src);
            return !e || er(e.origin)
        }
        return !0
    }()
      , zs = function(e, t) {
        return new xs(Us({
            apiKey: e
        }, t && "object" === (void 0 === t ? "undefined" : Fs(t)) ? t : {}),Ws)
    };
    zs.version = xs.version,
    window.Stripe && 2 === window.Stripe.version && !window.Stripe.StripeV3 ? window.Stripe.StripeV3 = zs : window.Stripe ? window.console && console.warn("It looks like Stripe.js was loaded more than one time. Please only load it once per page.") : window.Stripe = zs;
    t.default = zs
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        var t = new o(o._61);
        return t._81 = 1,
        t._65 = e,
        t
    }
    var o = n(3);
    e.exports = o;
    var a = r(!0)
      , i = r(!1)
      , s = r(null)
      , c = r(void 0)
      , u = r(0)
      , l = r("");
    o.resolve = function(e) {
        if (e instanceof o)
            return e;
        if (null === e)
            return s;
        if (void 0 === e)
            return c;
        if (!0 === e)
            return a;
        if (!1 === e)
            return i;
        if (0 === e)
            return u;
        if ("" === e)
            return l;
        if ("object" == typeof e || "function" == typeof e)
            try {
                var t = e.then;
                if ("function" == typeof t)
                    return new o(t.bind(e))
            } catch (e) {
                return new o(function(t, n) {
                    n(e)
                }
                )
            }
        return r(e)
    }
    ,
    o.all = function(e) {
        var t = Array.prototype.slice.call(e);
        return new o(function(e, n) {
            function r(i, s) {
                if (s && ("object" == typeof s || "function" == typeof s)) {
                    if (s instanceof o && s.then === o.prototype.then) {
                        for (; 3 === s._81; )
                            s = s._65;
                        return 1 === s._81 ? r(i, s._65) : (2 === s._81 && n(s._65),
                        void s.then(function(e) {
                            r(i, e)
                        }, n))
                    }
                    var c = s.then;
                    if ("function" == typeof c) {
                        return void new o(c.bind(s)).then(function(e) {
                            r(i, e)
                        }, n)
                    }
                }
                t[i] = s,
                0 == --a && e(t)
            }
            if (0 === t.length)
                return e([]);
            for (var a = t.length, i = 0; i < t.length; i++)
                r(i, t[i])
        }
        )
    }
    ,
    o.reject = function(e) {
        return new o(function(t, n) {
            n(e)
        }
        )
    }
    ,
    o.race = function(e) {
        return new o(function(t, n) {
            e.forEach(function(e) {
                o.resolve(e).then(t, n)
            })
        }
        )
    }
    ,
    o.prototype.catch = function(e) {
        return this.then(null, e)
    }
}
, function(e, t, n) {
    "use strict";
    function r() {}
    function o(e) {
        try {
            return e.then
        } catch (e) {
            return m = e,
            v
        }
    }
    function a(e, t) {
        try {
            return e(t)
        } catch (e) {
            return m = e,
            v
        }
    }
    function i(e, t, n) {
        try {
            e(t, n)
        } catch (e) {
            return m = e,
            v
        }
    }
    function s(e) {
        if ("object" != typeof this)
            throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e)
            throw new TypeError("not a function");
        this._45 = 0,
        this._81 = 0,
        this._65 = null,
        this._54 = null,
        e !== r && _(e, this)
    }
    function c(e, t, n) {
        return new e.constructor(function(o, a) {
            var i = new s(r);
            i.then(o, a),
            u(e, new h(t,n,i))
        }
        )
    }
    function u(e, t) {
        for (; 3 === e._81; )
            e = e._65;
        if (s._10 && s._10(e),
        0 === e._81)
            return 0 === e._45 ? (e._45 = 1,
            void (e._54 = t)) : 1 === e._45 ? (e._45 = 2,
            void (e._54 = [e._54, t])) : void e._54.push(t);
        l(e, t)
    }
    function l(e, t) {
        y(function() {
            var n = 1 === e._81 ? t.onFulfilled : t.onRejected;
            if (null === n)
                return void (1 === e._81 ? p(t.promise, e._65) : d(t.promise, e._65));
            var r = a(n, e._65);
            r === v ? d(t.promise, m) : p(t.promise, r)
        })
    }
    function p(e, t) {
        if (t === e)
            return d(e, new TypeError("A promise cannot be resolved with itself."));
        if (t && ("object" == typeof t || "function" == typeof t)) {
            var n = o(t);
            if (n === v)
                return d(e, m);
            if (n === e.then && t instanceof s)
                return e._81 = 3,
                e._65 = t,
                void f(e);
            if ("function" == typeof n)
                return void _(n.bind(t), e)
        }
        e._81 = 1,
        e._65 = t,
        f(e)
    }
    function d(e, t) {
        e._81 = 2,
        e._65 = t,
        s._97 && s._97(e, t),
        f(e)
    }
    function f(e) {
        if (1 === e._45 && (u(e, e._54),
        e._54 = null),
        2 === e._45) {
            for (var t = 0; t < e._54.length; t++)
                u(e, e._54[t]);
            e._54 = null
        }
    }
    function h(e, t, n) {
        this.onFulfilled = "function" == typeof e ? e : null,
        this.onRejected = "function" == typeof t ? t : null,
        this.promise = n
    }
    function _(e, t) {
        var n = !1
          , r = i(e, function(e) {
            n || (n = !0,
            p(t, e))
        }, function(e) {
            n || (n = !0,
            d(t, e))
        });
        n || r !== v || (n = !0,
        d(t, m))
    }
    var y = n(4)
      , m = null
      , v = {};
    e.exports = s,
    s._10 = null,
    s._97 = null,
    s._61 = r,
    s.prototype.then = function(e, t) {
        if (this.constructor !== s)
            return c(this, e, t);
        var n = new s(r);
        return u(this, new h(e,t,n)),
        n
    }
}
, function(e, t, n) {
    "use strict";
    (function(t) {
        function n(e) {
            i.length || (a(),
            s = !0),
            i[i.length] = e
        }
        function r() {
            for (; c < i.length; ) {
                var e = c;
                if (c += 1,
                i[e].call(),
                c > u) {
                    for (var t = 0, n = i.length - c; t < n; t++)
                        i[t] = i[t + c];
                    i.length -= c,
                    c = 0
                }
            }
            i.length = 0,
            c = 0,
            s = !1
        }
        function o(e) {
            return function() {
                function t() {
                    clearTimeout(n),
                    clearInterval(r),
                    e()
                }
                var n = setTimeout(t, 0)
                  , r = setInterval(t, 50)
            }
        }
        e.exports = n;
        var a, i = [], s = !1, c = 0, u = 1024, l = void 0 !== t ? t : self, p = l.MutationObserver || l.WebKitMutationObserver;
        a = "function" == typeof p ? function(e) {
            var t = 1
              , n = new p(e)
              , r = document.createTextNode("");
            return n.observe(r, {
                characterData: !0
            }),
            function() {
                t = -t,
                r.data = t
            }
        }(r) : o(r),
        n.requestFlush = a,
        n.makeRequestCallFromTimer = o
    }
    ).call(t, n(5))
}
, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0,
        eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}
, function(e, t, n) {
    var r, o;
    !function() {
        "use strict";
        var n = function() {
            function e() {}
            function t(e, t) {
                for (var n = t.length, r = 0; r < n; ++r)
                    a(e, t[r])
            }
            function n(e, t) {
                e[t] = !0
            }
            function r(e, t) {
                for (var n in t)
                    s.call(t, n) && (e[n] = !!t[n])
            }
            function o(e, t) {
                for (var n = t.split(c), r = n.length, o = 0; o < r; ++o)
                    e[n[o]] = !0
            }
            function a(e, a) {
                if (a) {
                    var i = typeof a;
                    "string" === i ? o(e, a) : Array.isArray(a) ? t(e, a) : "object" === i ? r(e, a) : "number" === i && n(e, a)
                }
            }
            function i() {
                for (var n = arguments.length, r = Array(n), o = 0; o < n; o++)
                    r[o] = arguments[o];
                var a = new e;
                t(a, r);
                var i = [];
                for (var s in a)
                    a[s] && i.push(s);
                return i.join(" ")
            }
            e.prototype = Object.create(null);
            var s = {}.hasOwnProperty
              , c = /\s+/;
            return i
        }();
        void 0 !== e && e.exports ? e.exports = n : (r = [],
        void 0 !== (o = function() {
            return n
        }
        .apply(t, r)) && (e.exports = o))
    }()
}
, function(e, t) {}
]);
