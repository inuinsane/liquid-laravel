/*!
  * CoreUI PRO v3.4.0 (https://coreui.io)
  * Copyright 2020 creativeLabs Łukasz Holeczek
  * License (https://coreui.io/pro/license/)
  */
 !function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).coreui = t()
}(this, (function() {
    "use strict";
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function t(t, n, i) {
        return n && e(t.prototype, n),
        i && e(t, i),
        t
    }
    function n(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, i)
        }
        return n
    }
    function o(e) {
        for (var t = 1; t < arguments.length; t++) {
            var o = null != arguments[t] ? arguments[t] : {};
            t % 2 ? i(Object(o), !0).forEach((function(t) {
                n(e, t, o[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : i(Object(o)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
            }
            ))
        }
        return e
    }
    var r, s, a, l, c = "transitionend", u = function(e) {
        do {
            e += Math.floor(1e6 * Math.random())
        } while (document.getElementById(e));return e
    }, f = function(e) {
        var t = e.getAttribute("data-target");
        if (!t || "#" === t) {
            var n = e.getAttribute("href");
            t = n && "#" !== n ? n.trim() : null
        }
        return t
    }, h = function(e) {
        var t = f(e);
        return t && document.querySelector(t) ? t : null
    }, d = function(e) {
        var t = f(e);
        return t ? document.querySelector(t) : null
    }, p = function(e) {
        if (!e)
            return 0;
        var t = window.getComputedStyle(e)
          , n = t.transitionDuration
          , i = t.transitionDelay
          , o = parseFloat(n)
          , r = parseFloat(i);
        return o || r ? (n = n.split(",")[0],
        i = i.split(",")[0],
        1e3 * (parseFloat(n) + parseFloat(i))) : 0
    }, g = function(e) {
        e.dispatchEvent(new Event(c))
    }, m = function(e) {
        return (e[0] || e).nodeType
    }, v = function(e, t) {
        var n = !1
          , i = t + 5;
        e.addEventListener(c, (function t() {
            n = !0,
            e.removeEventListener(c, t)
        }
        )),
        setTimeout((function() {
            n || g(e)
        }
        ), i)
    }, _ = function(e, t, n) {
        Object.keys(n).forEach((function(i) {
            var o, r = n[i], s = t[i], a = s && m(s) ? "element" : null == (o = s) ? "" + o : {}.toString.call(o).match(/\s([a-z]+)/i)[1].toLowerCase();
            if (!new RegExp(r).test(a))
                throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + r + '".')
        }
        ))
    }, y = function(e) {
        if (!e)
            return !1;
        if (e.style && e.parentNode && e.parentNode.style) {
            var t = getComputedStyle(e)
              , n = getComputedStyle(e.parentNode);
            return "none" !== t.display && "none" !== n.display && "hidden" !== t.visibility
        }
        return !1
    }, b = function e(t) {
        if (!document.documentElement.attachShadow)
            return null;
        if ("function" == typeof t.getRootNode) {
            var n = t.getRootNode();
            return n instanceof ShadowRoot ? n : null
        }
        return t instanceof ShadowRoot ? t : t.parentNode ? e(t.parentNode) : null
    }, w = function() {
        return function() {}
    }, E = function(e) {
        return e.offsetHeight
    }, L = function() {
        var e = window.jQuery;
        return e && !document.body.hasAttribute("data-no-jquery") ? e : null
    }, T = (r = {},
    s = 1,
    {
        set: function(e, t, n) {
            "undefined" == typeof e.key && (e.key = {
                key: t,
                id: s
            },
            s++),
            r[e.key.id] = n
        },
        get: function(e, t) {
            if (!e || "undefined" == typeof e.key)
                return null;
            var n = e.key;
            return n.key === t ? r[n.id] : null
        },
        delete: function(e, t) {
            if ("undefined" != typeof e.key) {
                var n = e.key;
                n.key === t && (delete r[n.id],
                delete e.key)
            }
        }
    }), O = function(e, t, n) {
        T.set(e, t, n)
    }, k = function(e, t) {
        return T.get(e, t)
    }, C = function(e, t) {
        T.delete(e, t)
    }, S = Element.prototype.querySelectorAll, A = Element.prototype.querySelector, x = (a = new CustomEvent("Bootstrap",{
        cancelable: !0
    }),
    (l = document.createElement("div")).addEventListener("Bootstrap", (function() {
        return null
    }
    )),
    a.preventDefault(),
    l.dispatchEvent(a),
    a.defaultPrevented), D = /:scope\b/;
    (function() {
        var e = document.createElement("div");
        try {
            e.querySelectorAll(":scope *")
        } catch (e) {
            return !1
        }
        return !0
    }
    )() || (S = function(e) {
        if (!D.test(e))
            return this.querySelectorAll(e);
        var t = Boolean(this.id);
        t || (this.id = u("scope"));
        var n = null;
        try {
            e = e.replace(D, "#" + this.id),
            n = this.querySelectorAll(e)
        } finally {
            t || this.removeAttribute("id")
        }
        return n
    }
    ,
    A = function(e) {
        if (!D.test(e))
            return this.querySelector(e);
        var t = S.call(this, e);
        return "undefined" != typeof t[0] ? t[0] : null
    }
    );
    var j = L()
      , N = /[^.]*(?=\..*)\.|.*/
      , I = /\..*/
      , P = /::\d+$/
      , M = {}
      , R = 1
      , H = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }
      , W = ["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"];
    function Y(e, t) {
        return t && t + "::" + R++ || e.uidEvent || R++
    }
    function B(e) {
        var t = Y(e);
        return e.uidEvent = t,
        M[t] = M[t] || {},
        M[t]
    }
    function X(e, t, n) {
        void 0 === n && (n = null);
        for (var i = Object.keys(e), o = 0, r = i.length; o < r; o++) {
            var s = e[i[o]];
            if (s.originalHandler === t && s.delegationSelector === n)
                return s
        }
        return null
    }
    function U(e, t, n) {
        var i = "string" == typeof t
          , o = i ? n : t
          , r = e.replace(I, "")
          , s = H[r];
        return s && (r = s),
        W.indexOf(r) > -1 || (r = e),
        [i, o, r]
    }
    function q(e, t, n, i, o) {
        if ("string" == typeof t && e) {
            n || (n = i,
            i = null);
            var r = U(t, n, i)
              , s = r[0]
              , a = r[1]
              , l = r[2]
              , c = B(e)
              , u = c[l] || (c[l] = {})
              , f = X(u, a, s ? n : null);
            if (f)
                f.oneOff = f.oneOff && o;
            else {
                var h = Y(a, t.replace(N, ""))
                  , d = s ? function(e, t, n) {
                    return function i(o) {
                        for (var r = e.querySelectorAll(t), s = o.target; s && s !== this; s = s.parentNode)
                            for (var a = r.length; a--; )
                                if (r[a] === s)
                                    return o.delegateTarget = s,
                                    i.oneOff && F.off(e, o.type, n),
                                    n.apply(s, [o]);
                        return null
                    }
                }(e, n, i) : function(e, t) {
                    return function n(i) {
                        return i.delegateTarget = e,
                        n.oneOff && F.off(e, i.type, t),
                        t.apply(e, [i])
                    }
                }(e, n);
                d.delegationSelector = s ? n : null,
                d.originalHandler = a,
                d.oneOff = o,
                d.uidEvent = h,
                u[h] = d,
                e.addEventListener(l, d, s)
            }
        }
    }
    function Q(e, t, n, i, o) {
        var r = X(t[n], i, o);
        r && (e.removeEventListener(n, r, Boolean(o)),
        delete t[n][r.uidEvent])
    }
    var F = {
        on: function(e, t, n, i) {
            q(e, t, n, i, !1)
        },
        one: function(e, t, n, i) {
            q(e, t, n, i, !0)
        },
        off: function(e, t, n, i) {
            if ("string" == typeof t && e) {
                var o = U(t, n, i)
                  , r = o[0]
                  , s = o[1]
                  , a = o[2]
                  , l = a !== t
                  , c = B(e)
                  , u = "." === t.charAt(0);
                if ("undefined" == typeof s) {
                    u && Object.keys(c).forEach((function(n) {
                        !function(e, t, n, i) {
                            var o = t[n] || {};
                            Object.keys(o).forEach((function(r) {
                                if (r.indexOf(i) > -1) {
                                    var s = o[r];
                                    Q(e, t, n, s.originalHandler, s.delegationSelector)
                                }
                            }
                            ))
                        }(e, c, n, t.slice(1))
                    }
                    ));
                    var f = c[a] || {};
                    Object.keys(f).forEach((function(n) {
                        var i = n.replace(P, "");
                        if (!l || t.indexOf(i) > -1) {
                            var o = f[n];
                            Q(e, c, a, o.originalHandler, o.delegationSelector)
                        }
                    }
                    ))
                } else {
                    if (!c || !c[a])
                        return;
                    Q(e, c, a, s, r ? n : null)
                }
            }
        },
        trigger: function(e, t, n) {
            if ("string" != typeof t || !e)
                return null;
            var i, o = t.replace(I, ""), r = t !== o, s = W.indexOf(o) > -1, a = !0, l = !0, c = !1, u = null;
            return r && j && (i = j.Event(t, n),
            j(e).trigger(i),
            a = !i.isPropagationStopped(),
            l = !i.isImmediatePropagationStopped(),
            c = i.isDefaultPrevented()),
            s ? (u = document.createEvent("HTMLEvents")).initEvent(o, a, !0) : u = new CustomEvent(t,{
                bubbles: a,
                cancelable: !0
            }),
            "undefined" != typeof n && Object.keys(n).forEach((function(e) {
                Object.defineProperty(u, e, {
                    get: function() {
                        return n[e]
                    }
                })
            }
            )),
            c && (u.preventDefault(),
            x || Object.defineProperty(u, "defaultPrevented", {
                get: function() {
                    return !0
                }
            })),
            l && e.dispatchEvent(u),
            u.defaultPrevented && "undefined" != typeof i && i.preventDefault(),
            u
        }
    }
      , V = "asyncLoad"
      , z = "coreui.asyncLoad"
      , K = "c-active"
      , $ = "c-show"
      , G = ".c-sidebar-nav-dropdown"
      , J = ".c-xhr-link, .c-sidebar-nav-link"
      , Z = {
        defaultPage: "main.html",
        errorPage: "404.html",
        subpagesDirectory: "views/"
    }
      , ee = function() {
        function e(e, t) {
            this._config = this._getConfig(t),
            this._element = e;
            var n = location.hash.replace(/^#/, "");
            "" !== n ? this._setUpUrl(n) : this._setUpUrl(this._config.defaultPage),
            this._addEventListeners()
        }
        var n = e.prototype;
        return n._getConfig = function(e) {
            return e = o(o({}, Z), e)
        }
        ,
        n._loadPage = function(e) {
            var t = this
              , n = this._element
              , i = this._config
              , o = function e(n, i) {
                void 0 === i && (i = 0);
                var o = document.createElement("script");
                o.type = "text/javascript",
                o.src = n[i],
                o.className = "view-script",
                o.onload = o.onreadystatechange = function() {
                    t.readyState && "complete" !== t.readyState || n.length > i + 1 && e(n, i + 1)
                }
                ,
                document.getElementsByTagName("body")[0].appendChild(o)
            }
              , r = new XMLHttpRequest;
            r.open("GET", i.subpagesDirectory + e);
            var s = new CustomEvent("xhr",{
                detail: {
                    url: e,
                    status: r.status
                }
            });
            n.dispatchEvent(s),
            r.onload = function(t) {
                if (200 === r.status) {
                    s = new CustomEvent("xhr",{
                        detail: {
                            url: e,
                            status: r.status
                        }
                    }),
                    n.dispatchEvent(s);
                    var a = document.createElement("div");
                    a.innerHTML = t.target.response;
                    var l = Array.from(a.querySelectorAll("script")).map((function(e) {
                        return e.attributes.getNamedItem("src").nodeValue
                    }
                    ));
                    a.querySelectorAll("script").forEach((function(e) {
                        return e.remove(e)
                    }
                    )),
                    window.scrollTo(0, 0),
                    n.innerHTML = "",
                    n.appendChild(a),
                    (c = document.querySelectorAll(".view-script")).length && c.forEach((function(e) {
                        e.remove()
                    }
                    )),
                    l.length && o(l),
                    window.location.hash = e
                } else
                    window.location.href = i.errorPage;
                var c
            }
            ,
            r.send()
        }
        ,
        n._setUpUrl = function(e) {
            e = e.replace(/^\//, "").split("?")[0],
            Array.from(document.querySelectorAll(J)).forEach((function(e) {
                e.classList.remove(K)
            }
            )),
            Array.from(document.querySelectorAll(J)).forEach((function(e) {
                e.classList.remove(K)
            }
            )),
            Array.from(document.querySelectorAll(G)).forEach((function(e) {
                e.classList.remove($)
            }
            )),
            Array.from(document.querySelectorAll(G)).forEach((function(t) {
                Array.from(t.querySelectorAll('a[href*="' + e + '"]')).length > 0 && t.classList.add($)
            }
            )),
            Array.from(document.querySelectorAll('.c-sidebar-nav-item a[href*="' + e + '"]')).forEach((function(e) {
                e.classList.add(K)
            }
            )),
            this._loadPage(e)
        }
        ,
        n._loadBlank = function(e) {
            window.open(e)
        }
        ,
        n._loadTop = function(e) {
            window.location = e
        }
        ,
        n._update = function(e) {
            "#" !== e.href && ("undefined" != typeof e.dataset.toggle && "null" !== e.dataset.toggle || ("_top" === e.target ? this._loadTop(e.href) : "_blank" === e.target ? this._loadBlank(e.href) : this._setUpUrl(e.getAttribute("href"))))
        }
        ,
        n._addEventListeners = function() {
            var e = this;
            F.on(document, "click.coreui.asyncLoad.data-api", J, (function(t) {
                t.preventDefault();
                var n = t.target;
                n.classList.contains("c-sidebar-nav-link") || (n = n.closest(J)),
                n.classList.contains("c-sidebar-nav-dropdown-toggle") || "#" === n.getAttribute("href") || e._update(n)
            }
            ))
        }
        ,
        e._asyncLoadInterface = function(t, n) {
            var i = k(t, z);
            if (i || (i = new e(t,"object" == typeof n && n)),
            "string" == typeof n) {
                if ("undefined" == typeof i[n])
                    throw new TypeError('No method named "' + n + '"');
                i[n]()
            }
        }
        ,
        e.jQueryInterface = function(t) {
            return this.each((function() {
                e._asyncLoadInterface(this, t)
            }
            ))
        }
        ,
        t(e, null, [{
            key: "VERSION",
            get: function() {
                return "3.2.2"
            }
        }, {
            key: "Default",
            get: function() {
                return Z
            }
        }]),
        e
    }()
      , te = L();
    if (te) {
        var ne = te.fn[V];
        te.fn[V] = ee.jQueryInterface,
        te.fn[V].Constructor = ee,
        te.fn[V].noConflict = function() {
            return te.fn[V] = ne,
            ee.jQueryInterface
        }
    }
    var ie = "coreui.alert"
      , oe = function() {
        function e(e) {
            this._element = e,
            this._element && O(e, ie, this)
        }
        var n = e.prototype;
        return n.close = function(e) {
            var t = e ? this._getRootElement(e) : this._element
              , n = this._triggerCloseEvent(t);
            null === n || n.defaultPrevented || this._removeElement(t)
        }
        ,
        n.dispose = function() {
            C(this._element, ie),
            this._element = null
        }
        ,
        n._getRootElement = function(e) {
            return d(e) || e.closest(".alert")
        }
        ,
        n._triggerCloseEvent = function(e) {
            return F.trigger(e, "close.coreui.alert")
        }
        ,
        n._removeElement = function(e) {
            var t = this;
            if (e.classList.remove("show"),
            e.classList.contains("fade")) {
                var n = p(e);
                F.one(e, c, (function() {
                    return t._destroyElement(e)
                }
                )),
                v(e, n)
            } else
                this._destroyElement(e)
        }
        ,
        n._destroyElement = function(e) {
            e.parentNode && e.parentNode.removeChild(e),
            F.trigger(e, "closed.coreui.alert")
        }
        ,
        e.jQueryInterface = function(t) {
            return this.each((function() {
                var n = k(this, ie);
                n || (n = new e(this)),
                "close" === t && n[t](this)
            }
            ))
        }
        ,
        e.handleDismiss = function(e) {
            return function(t) {
                t && t.preventDefault(),
                e.close(this)
            }
        }
        ,
        e.getInstance = function(e) {
            return k(e, ie)
        }
        ,
        t(e, null, [{
            key: "VERSION",
            get: function() {
                return "3.2.2"
            }
        }]),
        e
    }();
    F.on(document, "click.coreui.alert.data-api", '[data-dismiss="alert"]', oe.handleDismiss(new oe));
    var re = L();
    if (re) {
        var se = re.fn.alert;
        re.fn.alert = oe.jQueryInterface,
        re.fn.alert.Constructor = oe,
        re.fn.alert.noConflict = function() {
            return re.fn.alert = se,
            oe.jQueryInterface
        }
    }
    var ae = {
        matches: function(e, t) {
            return e.matches(t)
        },
        find: function(e, t) {
            var n;
            return void 0 === t && (t = document.documentElement),
            (n = []).concat.apply(n, S.call(t, e))
        },
        findOne: function(e, t) {
            return void 0 === t && (t = document.documentElement),
            A.call(t, e)
        },
        children: function(e, t) {
            var n, i = (n = []).concat.apply(n, e.children);
            return i.filter((function(e) {
                return e.matches(t)
            }
            ))
        },
        parents: function(e, t) {
            for (var n = [], i = e.parentNode; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType; )
                this.matches(i, t) && n.push(i),
                i = i.parentNode;
            return n
        },
        prev: function(e, t) {
            for (var n = e.previousElementSibling; n; ) {
                if (n.matches(t))
                    return [n];
                n = n.previousElementSibling
            }
            return []
        },
        next: function(e, t) {
            for (var n = e.nextElementSibling; n; ) {
                if (this.matches(n, t))
                    return [n];
                n = n.nextElementSibling
            }
            return []
        }
    }
      , le = "coreui.button"
      , ce = "active"
      , ue = "disabled"
      , fe = "focus"
      , he = '[data-toggle^="button"]'
      , de = ".btn"
      , pe = function() {
        function e(e) {
            this._element = e,
            O(e, le, this)
        }
        var n = e.prototype;
        return n.toggle = function() {
            var e = !0
              , t = !0
              , n = this._element.closest('[data-toggle="buttons"]');
            if (n) {
                var i = ae.findOne('input:not([type="hidden"])', this._element);
                if (i && "radio" === i.type) {
                    if (i.checked && this._element.classList.contains(ce))
                        e = !1;
                    else {
                        var o = ae.findOne(".active", n);
                        o && o.classList.remove(ce)
                    }
                    if (e) {
                        if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains(ue) || n.classList.contains(ue))
                            return;
                        i.checked = !this._element.classList.contains(ce),
                        F.trigger(i, "change")
                    }
                    i.focus(),
                    t = !1
                }
            }
            t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(ce)),
            e && this._element.classList.toggle(ce)
        }
        ,
        n.dispose = function() {
            C(this._element, le),
            this._element = null
        }
        ,
        e.jQueryInterface = function(t) {
            return this.each((function() {
                var n = k(this, le);
                n || (n = new e(this)),
                "toggle" === t && n[t]()
            }
            ))
        }
        ,
        e.getInstance = function(e) {
            return k(e, le)
        }
        ,
        t(e, null, [{
            key: "VERSION",
            get: function() {
                return "3.2.2"
            }
        }]),
        e
    }();
    F.on(document, "click.coreui.button.data-api", he, (function(e) {
        e.preventDefault();
        var t = e.target.closest(de)
          , n = k(t, le);
        n || (n = new pe(t)),
        n.toggle()
    }
    )),
    F.on(document, "focus.coreui.button.data-api", he, (function(e) {
        var t = e.target.closest(de);
        t && t.classList.add(fe)
    }
    )),
    F.on(document, "blur.coreui.button.data-api", he, (function(e) {
        var t = e.target.closest(de);
        t && t.classList.remove(fe)
    }
    ));
    var ge = L();
    if (ge) {
        var me = ge.fn.button;
        ge.fn.button = pe.jQueryInterface,
        ge.fn.button.Constructor = pe,
        ge.fn.button.noConflict = function() {
            return ge.fn.button = me,
            pe.jQueryInterface
        }
    }
    function ve(e) {
        return "true" === e || "false" !== e && (e === Number(e).toString() ? Number(e) : "" === e || "null" === e ? null : e)
    }
    function _e(e) {
        return e.replace(/[A-Z]/g, (function(e) {
            return "-" + e.toLowerCase()
        }
        ))
    }
    var ye = {
        createElementFromHTML: function(e) {
            var t = document.createElement("div");
            return t.innerHTML = e.trim(),
            t.firstChild
        },
        setDataAttribute: function(e, t, n) {
            e.setAttribute("data-" + _e(t), n)
        },
        removeDataAttribute: function(e, t) {
            e.removeAttribute("data-" + _e(t))
        },
        getDataAttributes: function(e) {
            if (!e)
                return {};
            var t = o({}, e.dataset);
            return Object.keys(t).forEach((function(e) {
                t[e] = ve(t[e])
            }
            )),
            t
        },
        getDataAttribute: function(e, t) {
            return ve(e.getAttribute("data-" + _e(t)))
        },
        offset: function(e) {
            var t = e.getBoundingClientRect();
            return {
                top: t.top + document.body.scrollTop,
                left: t.left + document.body.scrollLeft
            }
        },
        position: function(e) {
            return {
                top: e.offsetTop,
                left: e.offsetLeft
            }
        },
        toggleClass: function(e, t) {
            e && (e.classList.contains(t) ? e.classList.remove(t) : e.classList.add(t))
        }
    }
      , be = "carousel"
      , we = "coreui.carousel"
      , Ee = "." + we
      , Le = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }
      , Te = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }
      , Oe = "next"
      , ke = "prev"
      , Ce = "slid" + Ee
      , Se = "active"
      , Ae = ".active.carousel-item"
      , xe = {
        TOUCH: "touch",
        PEN: "pen"
    }
      , De = function() {
        function e(e, t) {
            this._items = null,
            this._interval = null,
            this._activeElement = null,
            this._isPaused = !1,
            this._isSliding = !1,
            this.touchTimeout = null,
            this.touchStartX = 0,
            this.touchDeltaX = 0,
            this._config = this._getConfig(t),
            this._element = e,
            this._indicatorsElement = ae.findOne(".carousel-indicators", this._element),
            this._touchSupported = "ontouchstart"in document.documentElement || navigator.maxTouchPoints > 0,
            this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent),
            this._addEventListeners(),
            O(e, we, this)
        }
        var n = e.prototype;
        return n.next = function() {
            this._isSliding || this._slide(Oe)
        }
        ,
        n.nextWhenVisible = function() {
            !document.hidden && y(this._element) && this.next()
        }
        ,
        n.prev = function() {
            this._isSliding || this._slide(ke)
        }
        ,
        n.pause = function(e) {
            e || (this._isPaused = !0),
            ae.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (g(this._element),
            this.cycle(!0)),
            clearInterval(this._interval),
            this._interval = null
        }
        ,
        n.cycle = function(e) {
            e || (this._isPaused = !1),
            this._interval && (clearInterval(this._interval),
            this._interval = null),
            this._config && this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        ,
        n.to = function(e) {
            var t = this;
            this._activeElement = ae.findOne(Ae, this._element);
            var n = this._getItemIndex(this._activeElement);
            if (!(e > this._items.length - 1 || e < 0))
                if (this._isSliding)
                    F.one(this._element, Ce, (function() {
                        return t.to(e)
                    }
                    ));
                else {
                    if (n === e)
                        return this.pause(),
                        void this.cycle();
                    var i = e > n ? Oe : ke;
                    this._slide(i, this._items[e])
                }
        }
        ,
        n.dispose = function() {
            F.off(this._element, Ee),
            C(this._element, we),
            this._items = null,
            this._config = null,
            this._element = null,
            this._interval = null,
            this._isPaused = null,
            this._isSliding = null,
            this._activeElement = null,
            this._indicatorsElement = null
        }
        ,
        n._getConfig = function(e) {
            return e = o(o({}, Le), e),
            _(be, e, Te),
            e
        }
        ,
        n._handleSwipe = function() {
            var e = Math.abs(this.touchDeltaX);
            if (!(e <= 40)) {
                var t = e / this.touchDeltaX;
                this.touchDeltaX = 0,
                t > 0 && this.prev(),
                t < 0 && this.next()
            }
        }
        ,
        n._addEventListeners = function() {
            var e = this;
            this._config.keyboard && F.on(this._element, "keydown.coreui.carousel", (function(t) {
                return e._keydown(t)
            }
            )),
            "hover" === this._config.pause && (F.on(this._element, "mouseenter.coreui.carousel", (function(t) {
                return e.pause(t)
            }
            )),
            F.on(this._element, "mouseleave.coreui.carousel", (function(t) {
                return e.cycle(t)
            }
            ))),
            this._config.touch && this._touchSupported && this._addTouchEventListeners()
        }
        ,
        n._addTouchEventListeners = function() {
            var e = this
              , t = function(t) {
                e._pointerEvent && xe[t.pointerType.toUpperCase()] ? e.touchStartX = t.clientX : e._pointerEvent || (e.touchStartX = t.touches[0].clientX)
            }
              , n = function(t) {
                e._pointerEvent && xe[t.pointerType.toUpperCase()] && (e.touchDeltaX = t.clientX - e.touchStartX),
                e._handleSwipe(),
                "hover" === e._config.pause && (e.pause(),
                e.touchTimeout && clearTimeout(e.touchTimeout),
                e.touchTimeout = setTimeout((function(t) {
                    return e.cycle(t)
                }
                ), 500 + e._config.interval))
            };
            ae.find(".carousel-item img", this._element).forEach((function(e) {
                F.on(e, "dragstart.coreui.carousel", (function(e) {
                    return e.preventDefault()
                }
                ))
            }
            )),
            this._pointerEvent ? (F.on(this._element, "pointerdown.coreui.carousel", (function(e) {
                return t(e)
            }
            )),
            F.on(this._element, "pointerup.coreui.carousel", (function(e) {
                return n(e)
            }
            )),
            this._element.classList.add("pointer-event")) : (F.on(this._element, "touchstart.coreui.carousel", (function(e) {
                return t(e)
            }
            )),
            F.on(this._element, "touchmove.coreui.carousel", (function(t) {
                return function(t) {
                    t.touches && t.touches.length > 1 ? e.touchDeltaX = 0 : e.touchDeltaX = t.touches[0].clientX - e.touchStartX
                }(t)
            }
            )),
            F.on(this._element, "touchend.coreui.carousel", (function(e) {
                return n(e)
            }
            )))
        }
        ,
        n._keydown = function(e) {
            if (!/input|textarea/i.test(e.target.tagName))
                switch (e.key) {
                case "ArrowLeft":
                    e.preventDefault(),
                    this.prev();
                    break;
                case "ArrowRight":
                    e.preventDefault(),
                    this.next()
                }
        }
        ,
        n._getItemIndex = function(e) {
            return this._items = e && e.parentNode ? ae.find(".carousel-item", e.parentNode) : [],
            this._items.indexOf(e)
        }
        ,
        n._getItemByDirection = function(e, t) {
            var n = e === Oe
              , i = e === ke
              , o = this._getItemIndex(t)
              , r = this._items.length - 1;
            if ((i && 0 === o || n && o === r) && !this._config.wrap)
                return t;
            var s = (o + (e === ke ? -1 : 1)) % this._items.length;
            return -1 === s ? this._items[this._items.length - 1] : this._items[s]
        }
        ,
        n._triggerSlideEvent = function(e, t) {
            var n = this._getItemIndex(e)
              , i = this._getItemIndex(ae.findOne(Ae, this._element));
            return F.trigger(this._element, "slide.coreui.carousel", {
                relatedTarget: e,
                direction: t,
                from: i,
                to: n
            })
        }
        ,
        n._setActiveIndicatorElement = function(e) {
            if (this._indicatorsElement) {
                for (var t = ae.find(".active", this._indicatorsElement), n = 0; n < t.length; n++)
                    t[n].classList.remove(Se);
                var i = this._indicatorsElement.children[this._getItemIndex(e)];
                i && i.classList.add(Se)
            }
        }
        ,
        n._slide = function(e, t) {
            var n, i, o, r = this, s = ae.findOne(Ae, this._element), a = this._getItemIndex(s), l = t || s && this._getItemByDirection(e, s), u = this._getItemIndex(l), f = Boolean(this._interval);
            if (e === Oe ? (n = "carousel-item-left",
            i = "carousel-item-next",
            o = "left") : (n = "carousel-item-right",
            i = "carousel-item-prev",
            o = "right"),
            l && l.classList.contains(Se))
                this._isSliding = !1;
            else if (!this._triggerSlideEvent(l, o).defaultPrevented && s && l) {
                if (this._isSliding = !0,
                f && this.pause(),
                this._setActiveIndicatorElement(l),
                this._element.classList.contains("slide")) {
                    l.classList.add(i),
                    E(l),
                    s.classList.add(n),
                    l.classList.add(n);
                    var h = parseInt(l.getAttribute("data-interval"), 10);
                    h ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
                    this._config.interval = h) : this._config.interval = this._config.defaultInterval || this._config.interval;
                    var d = p(s);
                    F.one(s, c, (function() {
                        l.classList.remove(n, i),
                        l.classList.add(Se),
                        s.classList.remove(Se, i, n),
                        r._isSliding = !1,
                        setTimeout((function() {
                            F.trigger(r._element, Ce, {
                                relatedTarget: l,
                                direction: o,
                                from: a,
                                to: u
                            })
                        }
                        ), 0)
                    }
                    )),
                    v(s, d)
                } else
                    s.classList.remove(Se),
                    l.classList.add(Se),
                    this._isSliding = !1,
                    F.trigger(this._element, Ce, {
                        relatedTarget: l,
                        direction: o,
                        from: a,
                        to: u
                    });
                f && this.cycle()
            }
        }
        ,
        e.carouselInterface = function(t, n) {
            var i = k(t, we)
              , r = o(o({}, Le), ye.getDataAttributes(t));
            "object" == typeof n && (r = o(o({}, r), n));
            var s = "string" == typeof n ? n : r.slide;
            if (i || (i = new e(t,r)),
            "number" == typeof n)
                i.to(n);
            else if ("string" == typeof s) {
                if ("undefined" == typeof i[s])
                    throw new TypeError('No method named "' + s + '"');
                i[s]()
            } else
                r.interval && r.ride && (i.pause(),
                i.cycle())
        }
        ,
        e.jQueryInterface = function(t) {
            return this.each((function() {
                e.carouselInterface(this, t)
            }
            ))
        }
        ,
        e.dataApiClickHandler = function(t) {
            var n = d(this);
            if (n && n.classList.contains("carousel")) {
                var i = o(o({}, ye.getDataAttributes(n)), ye.getDataAttributes(this))
                  , r = this.getAttribute("data-slide-to");
                r && (i.interval = !1),
                e.carouselInterface(n, i),
                r && k(n, we).to(r),
                t.preventDefault()
            }
        }
        ,
        e.getInstance = function(e) {
            return k(e, we)
        }
        ,
        t(e, null, [{
            key: "VERSION",
            get: function() {
                return "3.2.2"
            }
        }, {
            key: "Default",
            get: function() {
                return Le
            }
        }]),
        e
    }();
    F.on(document, "click.coreui.carousel.data-api", "[data-slide], [data-slide-to]", De.dataApiClickHandler),
    F.on(window, "load.coreui.carousel.data-api", (function() {
        for (var e = ae.find('[data-ride="carousel"]'), t = 0, n = e.length; t < n; t++)
            De.carouselInterface(e[t], k(e[t], we))
    }
    ));
    var je = L();
    if (je) {
        var Ne = je.fn[be];
        je.fn[be] = De.jQueryInterface,
        je.fn[be].Constructor = De,
        je.fn[be].noConflict = function() {
            return je.fn[be] = Ne,
            De.jQueryInterface
        }
    }
    var Ie = "class-toggler"
      , Pe = "coreui.class-toggler"
      , Me = {
        addClass: "(null|array|string)",
        breakpoints: "(null|array|string)",
        removeClass: "(null|array|string)",
        responsive: "(null|boolean)",
        target: "(null|string)",
        toggleClass: "(null|array|string)"
    }
      , Re = {
        addClass: null,
        breakpoints: ["", "sm", "md", "lg", "xl"],
        removeClass: null,
        responsive: !1,
        target: "body",
        toggleClass: null
    }
      , He = "classremoved"
      , We = "classtoggle"
      , Ye = ".c-class-toggler"
      , Be = function() {
        function e(e, t) {
            this._element = e,
            this._config = this._getConfig(t),
            O(e, Pe, this)
        }
        var n = e.prototype;
        return n.add = function() {
            var e = this
              , t = this._target();
            this._config.addClass.replace(/\s/g, "").split(",").forEach((function(n) {
                t.classList.add(n),
                e._customEvent("classadded", t, !0, n)
            }
            ))
        }
        ,
        n.remove = function() {
            var e = this
              , t = this._target();
            this._config.removeClass.replace(/\s/g, "").split(",").forEach((function(n) {
                e._config.responsive ? e._updateResponsiveClassNames(n).forEach((function(n) {
                    t.classList.remove(n),
                    e._customEvent(He, t, !1, n)
                }
                )) : (t.classList.remove(n),
                e._customEvent(He, t, !1, n))
            }
            ))
        }
        ,
        n.toggle = function() {
            var e = this
              , t = this._target()
              , n = this._config.toggleClass.replace(/\s/g, "").split(",");
            this._config.responsive ? n.forEach((function(n) {
                e._updateResponsiveClassNames(n).filter((function(e) {
                    return t.classList.contains(e)
                }
                )).length ? e._updateResponsiveClassNames(n).forEach((function(n) {
                    e._config.removeClass = n,
                    e.remove(),
                    e._customEvent(We, t, !1, n)
                }
                )) : (e._config.addClass = n,
                e.add(),
                e._customEvent(We, t, !0, n))
            }
            )) : n.forEach((function(n) {
                t.classList.contains(n) ? (e._config.removeClass = n,
                e.remove(),
                e._customEvent(We, t, !1, n)) : (e._config.addClass = n,
                e.add(),
                e._customEvent(We, t, !0, n))
            }
            ))
        }
        ,
        n.class = function() {
            this._config.toggleClass = this._config.class,
            this._element.getAttribute("responsive") && (this._config.responsive = this._element.getAttribute("responsive")),
            this.toggle()
        }
        ,
        n._target = function() {
            return "body" === this._config.target ? document.querySelector(this._config.target) : "_parent" === this._config.target ? this._element.parentNode : document.querySelector(this._config.target)
        }
        ,
        n._customEvent = function(e, t, n, i) {
            var o = new CustomEvent(e,{
                detail: {
                    target: t,
                    add: n,
                    className: i
                }
            });
            t.dispatchEvent(o)
        }
        ,
        n._breakpoint = function(e) {
            return this._config.breakpoints.filter((function(e) {
                return e.length > 0
            }
            )).filter((function(t) {
                return e.includes(t)
            }
            ))[0]
        }
        ,
        n._breakpoints = function(e) {
            var t = this._config.breakpoints;
            return t.slice(0, t.indexOf(t.filter((function(e) {
                return e.length > 0
            }
            )).filter((function(t) {
                return e.includes(t)
            }
            ))[0]) + 1)
        }
        ,
        n._updateResponsiveClassNames = function(e) {
            var t = this._breakpoint(e);
            return this._breakpoints(e).map((function(n) {
                return n.length > 0 ? e.replace(t, n) : e.replace("-" + t, n)
            }
            ))
        }
        ,
        n._includesResponsiveClass = function(e) {
            var t = this;
            return this._updateResponsiveClassNames(e).filter((function(e) {
                return t._config.target.contains(e)
            }
            ))
        }
        ,
        n._getConfig = function(e) {
            return e = o(o(o({}, this.constructor.Default), ye.getDataAttributes(this._element)), e),
            _(Ie, e, this.constructor.DefaultType),
            e
        }
        ,
        e.classTogglerInterface = function(t, n) {
            var i = k(t, Pe);
            if (i || (i = new e(t,"object" == typeof n && n)),
            "string" == typeof n) {
                if ("undefined" == typeof i[n])
                    throw new TypeError('No method named "' + n + '"');
                i[n]()
            }
        }
        ,
        e.jQueryInterface = function(t) {
            return this.each((function() {
                e.classTogglerInterface(this, t)
            }
            ))
        }
        ,
        t(e, null, [{
            key: "VERSION",
            get: function() {
                return "3.2.2"
            }
        }, {
            key: "Default",
            get: function() {
                return Re
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Me
            }
        }]),
        e
    }();
    F.on(document, "click.coreui.class-toggler.data-api", Ye, (function(e) {
        e.preventDefault(),
        e.stopPropagation();
        var t = e.target;
        t.classList.contains("c-class-toggler") || (t = t.closest(Ye)),
        "undefined" != typeof t.dataset.addClass && Be.classTogglerInterface(t, "add"),
        "undefined" != typeof t.dataset.removeClass && Be.classTogglerInterface(t, "remove"),
        "undefined" != typeof t.dataset.toggleClass && Be.classTogglerInterface(t, "toggle"),
        "undefined" != typeof t.dataset.class && Be.classTogglerInterface(t, "class")
    }
    ));
    var Xe = L();
    if (Xe) {
        var Ue = Xe.fn[Ie];
        Xe.fn[Ie] = Be.jQueryInterface,
        Xe.fn[Ie].Constructor = Be,
        Xe.fn[Ie].noConflict = function() {
            return Xe.fn[Ie] = Ue,
            Be.jQueryInterface
        }
    }
    var qe = "collapse"
      , Qe = "coreui.collapse"
      , Fe = {
        toggle: !0,
        parent: ""
    }
      , Ve = {
        toggle: "boolean",
        parent: "(string|element)"
    }
      , ze = "show"
      , Ke = "collapse"
      , $e = "collapsing"
      , Ge = "collapsed"
      , Je = "width"
      , Ze = '[data-toggle="collapse"]'
      , et = function() {
        function e(e, t) {
            this._isTransitioning = !1,
            this._element = e,
            this._config = this._getConfig(t),
            this._triggerArray = ae.find(Ze + '[href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]');
            for (var n = ae.find(Ze), i = 0, o = n.length; i < o; i++) {
                var r = n[i]
                  , s = h(r)
                  , a = ae.find(s).filter((function(t) {
                    return t === e
                }
                ));
                null !== s && a.length && (this._selector = s,
                this._triggerArray.push(r))
            }
            this._parent = this._config.parent ? this._getParent() : null,
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle(),
            O(e, Qe, this)
        }
        var n = e.prototype;
        return n.toggle = function() {
            this._element.classList.contains(ze) ? this.hide() : this.show()
        }
        ,
        n.show = function() {
            var t = this;
            if (!this._isTransitioning && !this._element.classList.contains(ze)) {
                var n, i;
                this._parent && 0 === (n = ae.find(".show, .collapsing", this._parent).filter((function(e) {
                    return "string" == typeof t._config.parent ? e.getAttribute("data-parent") === t._config.parent : e.classList.contains(Ke)
                }
                ))).length && (n = null);
                var o = ae.findOne(this._selector);
                if (n) {
                    var r = n.filter((function(e) {
                        return o !== e
                    }
                    ));
                    if ((i = r[0] ? k(r[0], Qe) : null) && i._isTransitioning)
                        return
                }
                if (!F.trigger(this._element, "show.coreui.collapse").defaultPrevented) {
                    n && n.forEach((function(t) {
                        o !== t && e.collapseInterface(t, "hide"),
                        i || O(t, Qe, null)
                    }
                    ));
                    var s = this._getDimension();
                    this._element.classList.remove(Ke),
                    this._element.classList.add($e),
                    this._element.style[s] = 0,
                    this._triggerArray.length && this._triggerArray.forEach((function(e) {
                        e.classList.remove(Ge),
                        e.setAttribute("aria-expanded", !0)
                    }
                    )),
                    this.setTransitioning(!0);
                    var a = "scroll" + (s[0].toUpperCase() + s.slice(1))
                      , l = p(this._element);
                    F.one(this._element, c, (function() {
                        t._element.classList.remove($e),
                        t._element.classList.add(Ke, ze),
                        t._element.style[s] = "",
                        t.setTransitioning(!1),
                        F.trigger(t._element, "shown.coreui.collapse")
                    }
                    )),
                    v(this._element, l),
                    this._element.style[s] = this._element[a] + "px"
                }
            }
        }
        ,
        n.hide = function() {
            var e = this;
            if (!this._isTransitioning && this._element.classList.contains(ze) && !F.trigger(this._element, "hide.coreui.collapse").defaultPrevented) {
                var t = this._getDimension();
                this._element.style[t] = this._element.getBoundingClientRect()[t] + "px",
                E(this._element),
                this._element.classList.add($e),
                this._element.classList.remove(Ke, ze);
                var n = this._triggerArray.length;
                if (n > 0)
                    for (var i = 0; i < n; i++) {
                        var o = this._triggerArray[i]
                          , r = d(o);
                        r && !r.classList.contains(ze) && (o.classList.add(Ge),
                        o.setAttribute("aria-expanded", !1))
                    }
                this.setTransitioning(!0);
                this._element.style[t] = "";
                var s = p(this._element);
                F.one(this._element, c, (function() {
                    e.setTransitioning(!1),
                    e._element.classList.remove($e),
                    e._element.classList.add(Ke),
                    F.trigger(e._element, "hidden.coreui.collapse")
                }
                )),
                v(this._element, s)
            }
        }
        ,
        n.setTransitioning = function(e) {
            this._isTransitioning = e
        }
        ,
        n.dispose = function() {
            C(this._element, Qe),
            this._config = null,
            this._parent = null,
            this._element = null,
            this._triggerArray = null,
            this._isTransitioning = null
        }
        ,
        n._getConfig = function(e) {
            return (e = o(o({}, Fe), e)).toggle = Boolean(e.toggle),
            _(qe, e, Ve),
            e
        }
        ,
        n._getDimension = function() {
            return this._element.classList.contains(Je) ? Je : "height"
        }
        ,
        n._getParent = function() {
            var e = this
              , t = this._config.parent;
            m(t) ? "undefined" == typeof t.jquery && "undefined" == typeof t[0] || (t = t[0]) : t = ae.findOne(t);
            var n = Ze + '[data-parent="' + t + '"]';
            return ae.find(n, t).forEach((function(t) {
                var n = d(t);
                e._addAriaAndCollapsedClass(n, [t])
            }
            )),
            t
        }
        ,
        n._addAriaAndCollapsedClass = function(e, t) {
            if (e && t.length) {
                var n = e.classList.contains(ze);
                t.forEach((function(e) {
                    n ? e.classList.remove(Ge) : e.classList.add(Ge),
                    e.setAttribute("aria-expanded", n)
                }
                ))
            }
        }
        ,
        e.collapseInterface = function(t, n) {
            var i = k(t, Qe)
              , r = o(o(o({}, Fe), ye.getDataAttributes(t)), "object" == typeof n && n ? n : {});
            if (!i && r.toggle && "string" == typeof n && /show|hide/.test(n) && (r.toggle = !1),
            i || (i = new e(t,r)),
            "string" == typeof n) {
                if ("undefined" == typeof i[n])
                    throw new TypeError('No method named "' + n + '"');
                i[n]()
            }
        }
        ,
        e.jQueryInterface = function(t) {
            return this.each((function() {
                e.collapseInterface(this, t)
            }
            ))
        }
        ,
        e.getInstance = function(e) {
            return k(e, Qe)
        }
        ,
        t(e, null, [{
            key: "VERSION",
            get: function() {
                return "3.2.2"
            }
        }, {
            key: "Default",
            get: function() {
                return Fe
            }
        }]),
        e
    }();
    F.on(document, "click.coreui.collapse.data-api", Ze, (function(e) {
        "A" === e.target.tagName && e.preventDefault();
        var t = ye.getDataAttributes(this)
          , n = h(this);
        ae.find(n).forEach((function(e) {
            var n, i = k(e, Qe);
            i ? (null === i._parent && "string" == typeof t.parent && (i._config.parent = t.parent,
            i._parent = i._getParent()),
            n = "toggle") : n = t,
            et.collapseInterface(e, n)
        }
        ))
    }
    ));
    var tt = L();
    if (tt) {
        var nt = tt.fn[qe];
        tt.fn[qe] = et.jQueryInterface,
        tt.fn[qe].Constructor = et,
        tt.fn[qe].noConflict = function() {
            return tt.fn[qe] = nt,
            et.jQueryInterface
        }
    }
    var it = "top"
      , ot = "bottom"
      , rt = "right"
      , st = "left"
      , at = "auto"
      , lt = [it, ot, rt, st]
      , ct = "start"
      , ut = "end"
      , ft = "viewport"
      , ht = "popper"
      , dt = lt.reduce((function(e, t) {
        return e.concat([t + "-" + ct, t + "-" + ut])
    }
    ), [])
      , pt = [].concat(lt, [at]).reduce((function(e, t) {
        return e.concat([t, t + "-" + ct, t + "-" + ut])
    }
    ), [])
      , gt = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
    function mt(e) {
        return e ? (e.nodeName || "").toLowerCase() : null
    }
    function vt(e) {
        if ("[object Window]" !== e.toString()) {
            var t = e.ownerDocument;
            return t && t.defaultView || window
        }
        return e
    }
    function _t(e) {
        return e instanceof vt(e).Element || e instanceof Element
    }
    function yt(e) {
        return e instanceof vt(e).HTMLElement || e instanceof HTMLElement
    }
    function bt(e) {
        return e.split("-")[0]
    }
    function wt(e) {
        return {
            x: e.offsetLeft,
            y: e.offsetTop,
            width: e.offsetWidth,
            height: e.offsetHeight
        }
    }
    function Et(e, t) {
        var n, i = t.getRootNode && t.getRootNode();
        if (e.contains(t))
            return !0;
        if (i && ((n = i)instanceof vt(n).ShadowRoot || n instanceof ShadowRoot)) {
            var o = t;
            do {
                if (o && e.isSameNode(o))
                    return !0;
                o = o.parentNode || o.host
            } while (o)
        }
        return !1
    }
    function Lt(e) {
        return vt(e).getComputedStyle(e)
    }
    function Tt(e) {
        return ["table", "td", "th"].indexOf(mt(e)) >= 0
    }
    function Ot(e) {
        return ((_t(e) ? e.ownerDocument : e.document) || window.document).documentElement
    }
    function kt(e) {
        return "html" === mt(e) ? e : e.assignedSlot || e.parentNode || e.host || Ot(e)
    }
    function Ct(e) {
        if (!yt(e) || "fixed" === Lt(e).position)
            return null;
        var t = e.offsetParent;
        if (t) {
            var n = Ot(t);
            if ("body" === mt(t) && "static" === Lt(t).position && "static" !== Lt(n).position)
                return n
        }
        return t
    }
    function St(e) {
        for (var t = vt(e), n = Ct(e); n && Tt(n) && "static" === Lt(n).position; )
            n = Ct(n);
        return n && "body" === mt(n) && "static" === Lt(n).position ? t : n || function(e) {
            for (var t = kt(e); yt(t) && ["html", "body"].indexOf(mt(t)) < 0; ) {
                var n = Lt(t);
                if ("none" !== n.transform || "none" !== n.perspective || n.willChange && "auto" !== n.willChange)
                    return t;
                t = t.parentNode
            }
            return null
        }(e) || t
    }
    function At(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
    }
    function xt(e, t, n) {
        return Math.max(e, Math.min(t, n))
    }
    function Dt(e) {
        return Object.assign(Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }), e)
    }
    function jt(e, t) {
        return t.reduce((function(t, n) {
            return t[n] = e,
            t
        }
        ), {})
    }
    var Nt = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };
    function It(e) {
        var t, n = e.popper, i = e.popperRect, o = e.placement, r = e.offsets, s = e.position, a = e.gpuAcceleration, l = e.adaptive, c = function(e) {
            var t = e.x
              , n = e.y
              , i = window.devicePixelRatio || 1;
            return {
                x: Math.round(t * i) / i || 0,
                y: Math.round(n * i) / i || 0
            }
        }(r), u = c.x, f = c.y, h = r.hasOwnProperty("x"), d = r.hasOwnProperty("y"), p = st, g = it, m = window;
        if (l) {
            var v = St(n);
            v === vt(n) && (v = Ot(n)),
            o === it && (g = ot,
            f -= v.clientHeight - i.height,
            f *= a ? 1 : -1),
            o === st && (p = rt,
            u -= v.clientWidth - i.width,
            u *= a ? 1 : -1)
        }
        var _, y = Object.assign({
            position: s
        }, l && Nt);
        return a ? Object.assign(Object.assign({}, y), {}, ((_ = {})[g] = d ? "0" : "",
        _[p] = h ? "0" : "",
        _.transform = (m.devicePixelRatio || 1) < 2 ? "translate(" + u + "px, " + f + "px)" : "translate3d(" + u + "px, " + f + "px, 0)",
        _)) : Object.assign(Object.assign({}, y), {}, ((t = {})[g] = d ? f + "px" : "",
        t[p] = h ? u + "px" : "",
        t.transform = "",
        t))
    }
    var Pt = {
        passive: !0
    };
    var Mt = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };
    function Rt(e) {
        return e.replace(/left|right|bottom|top/g, (function(e) {
            return Mt[e]
        }
        ))
    }
    var Ht = {
        start: "end",
        end: "start"
    };
    function Wt(e) {
        return e.replace(/start|end/g, (function(e) {
            return Ht[e]
        }
        ))
    }
    function Yt(e) {
        var t = e.getBoundingClientRect();
        return {
            width: t.width,
            height: t.height,
            top: t.top,
            right: t.right,
            bottom: t.bottom,
            left: t.left,
            x: t.left,
            y: t.top
        }
    }
    function Bt(e) {
        var t = vt(e);
        return {
            scrollLeft: t.pageXOffset,
            scrollTop: t.pageYOffset
        }
    }
    function Xt(e) {
        return Yt(Ot(e)).left + Bt(e).scrollLeft
    }
    function Ut(e) {
        var t = Lt(e)
          , n = t.overflow
          , i = t.overflowX
          , o = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + i)
    }
    function qt(e) {
        return ["html", "body", "#document"].indexOf(mt(e)) >= 0 ? e.ownerDocument.body : yt(e) && Ut(e) ? e : qt(kt(e))
    }
    function Qt(e, t) {
        void 0 === t && (t = []);
        var n = qt(e)
          , i = "body" === mt(n)
          , o = vt(n)
          , r = i ? [o].concat(o.visualViewport || [], Ut(n) ? n : []) : n
          , s = t.concat(r);
        return i ? s : s.concat(Qt(kt(r)))
    }
    function Ft(e) {
        return Object.assign(Object.assign({}, e), {}, {
            left: e.x,
            top: e.y,
            right: e.x + e.width,
            bottom: e.y + e.height
        })
    }
    function Vt(e, t) {
        return t === ft ? Ft(function(e) {
            var t = vt(e)
              , n = Ot(e)
              , i = t.visualViewport
              , o = n.clientWidth
              , r = n.clientHeight
              , s = 0
              , a = 0;
            return i && (o = i.width,
            r = i.height,
            /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = i.offsetLeft,
            a = i.offsetTop)),
            {
                width: o,
                height: r,
                x: s + Xt(e),
                y: a
            }
        }(e)) : yt(t) ? function(e) {
            var t = Yt(e);
            return t.top = t.top + e.clientTop,
            t.left = t.left + e.clientLeft,
            t.bottom = t.top + e.clientHeight,
            t.right = t.left + e.clientWidth,
            t.width = e.clientWidth,
            t.height = e.clientHeight,
            t.x = t.left,
            t.y = t.top,
            t
        }(t) : Ft(function(e) {
            var t = Ot(e)
              , n = Bt(e)
              , i = e.ownerDocument.body
              , o = Math.max(t.scrollWidth, t.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0)
              , r = Math.max(t.scrollHeight, t.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0)
              , s = -n.scrollLeft + Xt(e)
              , a = -n.scrollTop;
            return "rtl" === Lt(i || t).direction && (s += Math.max(t.clientWidth, i ? i.clientWidth : 0) - o),
            {
                width: o,
                height: r,
                x: s,
                y: a
            }
        }(Ot(e)))
    }
    function zt(e, t, n) {
        var i = "clippingParents" === t ? function(e) {
            var t = Qt(kt(e))
              , n = ["absolute", "fixed"].indexOf(Lt(e).position) >= 0 && yt(e) ? St(e) : e;
            return _t(n) ? t.filter((function(e) {
                return _t(e) && Et(e, n) && "body" !== mt(e)
            }
            )) : []
        }(e) : [].concat(t)
          , o = [].concat(i, [n])
          , r = o[0]
          , s = o.reduce((function(t, n) {
            var i = Vt(e, n);
            return t.top = Math.max(i.top, t.top),
            t.right = Math.min(i.right, t.right),
            t.bottom = Math.min(i.bottom, t.bottom),
            t.left = Math.max(i.left, t.left),
            t
        }
        ), Vt(e, r));
        return s.width = s.right - s.left,
        s.height = s.bottom - s.top,
        s.x = s.left,
        s.y = s.top,
        s
    }
    function Kt(e) {
        return e.split("-")[1]
    }
    function $t(e) {
        var t, n = e.reference, i = e.element, o = e.placement, r = o ? bt(o) : null, s = o ? Kt(o) : null, a = n.x + n.width / 2 - i.width / 2, l = n.y + n.height / 2 - i.height / 2;
        switch (r) {
        case it:
            t = {
                x: a,
                y: n.y - i.height
            };
            break;
        case ot:
            t = {
                x: a,
                y: n.y + n.height
            };
            break;
        case rt:
            t = {
                x: n.x + n.width,
                y: l
            };
            break;
        case st:
            t = {
                x: n.x - i.width,
                y: l
            };
            break;
        default:
            t = {
                x: n.x,
                y: n.y
            }
        }
        var c = r ? At(r) : null;
        if (null != c) {
            var u = "y" === c ? "height" : "width";
            switch (s) {
            case ct:
                t[c] = Math.floor(t[c]) - Math.floor(n[u] / 2 - i[u] / 2);
                break;
            case ut:
                t[c] = Math.floor(t[c]) + Math.ceil(n[u] / 2 - i[u] / 2)
            }
        }
        return t
    }
    function Gt(e, t) {
        void 0 === t && (t = {});
        var n = t
          , i = n.placement
          , o = void 0 === i ? e.placement : i
          , r = n.boundary
          , s = void 0 === r ? "clippingParents" : r
          , a = n.rootBoundary
          , l = void 0 === a ? ft : a
          , c = n.elementContext
          , u = void 0 === c ? ht : c
          , f = n.altBoundary
          , h = void 0 !== f && f
          , d = n.padding
          , p = void 0 === d ? 0 : d
          , g = Dt("number" != typeof p ? p : jt(p, lt))
          , m = u === ht ? "reference" : ht
          , v = e.elements.reference
          , _ = e.rects.popper
          , y = e.elements[h ? m : u]
          , b = zt(_t(y) ? y : y.contextElement || Ot(e.elements.popper), s, l)
          , w = Yt(v)
          , E = $t({
            reference: w,
            element: _,
            strategy: "absolute",
            placement: o
        })
          , L = Ft(Object.assign(Object.assign({}, _), E))
          , T = u === ht ? L : w
          , O = {
            top: b.top - T.top + g.top,
            bottom: T.bottom - b.bottom + g.bottom,
            left: b.left - T.left + g.left,
            right: T.right - b.right + g.right
        }
          , k = e.modifiersData.offset;
        if (u === ht && k) {
            var C = k[o];
            Object.keys(O).forEach((function(e) {
                var t = [rt, ot].indexOf(e) >= 0 ? 1 : -1
                  , n = [it, ot].indexOf(e) >= 0 ? "y" : "x";
                O[e] += C[n] * t
            }
            ))
        }
        return O
    }
    function Jt(e, t) {
        void 0 === t && (t = {});
        var n = t
          , i = n.placement
          , o = n.boundary
          , r = n.rootBoundary
          , s = n.padding
          , a = n.flipVariations
          , l = n.allowedAutoPlacements
          , c = void 0 === l ? pt : l
          , u = Kt(i)
          , f = u ? a ? dt : dt.filter((function(e) {
            return Kt(e) === u
        }
        )) : lt
          , h = f.filter((function(e) {
            return c.indexOf(e) >= 0
        }
        ));
        0 === h.length && (h = f);
        var d = h.reduce((function(t, n) {
            return t[n] = Gt(e, {
                placement: n,
                boundary: o,
                rootBoundary: r,
                padding: s
            })[bt(n)],
            t
        }
        ), {});
        return Object.keys(d).sort((function(e, t) {
            return d[e] - d[t]
        }
        ))
    }
    function Zt(e, t, n) {
        return void 0 === n && (n = {
            x: 0,
            y: 0
        }),
        {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x
        }
    }
    function en(e) {
        return [it, rt, ot, st].some((function(t) {
            return e[t] >= 0
        }
        ))
    }
    function tn(e, t, n) {
        void 0 === n && (n = !1);
        var i, o = Ot(t), r = Yt(e), s = yt(t), a = {
            scrollLeft: 0,
            scrollTop: 0
        }, l = {
            x: 0,
            y: 0
        };
        return (s || !s && !n) && (("body" !== mt(t) || Ut(o)) && (a = (i = t) !== vt(i) && yt(i) ? function(e) {
            return {
                scrollLeft: e.scrollLeft,
                scrollTop: e.scrollTop
            }
        }(i) : Bt(i)),
        yt(t) ? ((l = Yt(t)).x += t.clientLeft,
        l.y += t.clientTop) : o && (l.x = Xt(o))),
        {
            x: r.left + a.scrollLeft - l.x,
            y: r.top + a.scrollTop - l.y,
            width: r.width,
            height: r.height
        }
    }
    function nn(e) {
        var t = new Map
          , n = new Set
          , i = [];
        function o(e) {
            n.add(e.name),
            [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) {
                if (!n.has(e)) {
                    var i = t.get(e);
                    i && o(i)
                }
            }
            )),
            i.push(e)
        }
        return e.forEach((function(e) {
            t.set(e.name, e)
        }
        )),
        e.forEach((function(e) {
            n.has(e.name) || o(e)
        }
        )),
        i
    }
    var on = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };
    function rn() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        return !t.some((function(e) {
            return !(e && "function" == typeof e.getBoundingClientRect)
        }
        ))
    }
    function sn(e) {
        void 0 === e && (e = {});
        var t = e
          , n = t.defaultModifiers
          , i = void 0 === n ? [] : n
          , o = t.defaultOptions
          , r = void 0 === o ? on : o;
        return function(e, t, n) {
            void 0 === n && (n = r);
            var o, s, a = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign(Object.assign({}, on), r),
                modifiersData: {},
                elements: {
                    reference: e,
                    popper: t
                },
                attributes: {},
                styles: {}
            }, l = [], c = !1, u = {
                state: a,
                setOptions: function(n) {
                    f(),
                    a.options = Object.assign(Object.assign(Object.assign({}, r), a.options), n),
                    a.scrollParents = {
                        reference: _t(e) ? Qt(e) : e.contextElement ? Qt(e.contextElement) : [],
                        popper: Qt(t)
                    };
                    var o, s, c = function(e) {
                        var t = nn(e);
                        return gt.reduce((function(e, n) {
                            return e.concat(t.filter((function(e) {
                                return e.phase === n
                            }
                            )))
                        }
                        ), [])
                    }((o = [].concat(i, a.options.modifiers),
                    s = o.reduce((function(e, t) {
                        var n = e[t.name];
                        return e[t.name] = n ? Object.assign(Object.assign(Object.assign({}, n), t), {}, {
                            options: Object.assign(Object.assign({}, n.options), t.options),
                            data: Object.assign(Object.assign({}, n.data), t.data)
                        }) : t,
                        e
                    }
                    ), {}),
                    Object.keys(s).map((function(e) {
                        return s[e]
                    }
                    ))));
                    return a.orderedModifiers = c.filter((function(e) {
                        return e.enabled
                    }
                    )),
                    a.orderedModifiers.forEach((function(e) {
                        var t = e.name
                          , n = e.options
                          , i = void 0 === n ? {} : n
                          , o = e.effect;
                        if ("function" == typeof o) {
                            var r = o({
                                state: a,
                                name: t,
                                instance: u,
                                options: i
                            })
                              , s = function() {};
                            l.push(r || s)
                        }
                    }
                    )),
                    u.update()
                },
                forceUpdate: function() {
                    if (!c) {
                        var e = a.elements
                          , t = e.reference
                          , n = e.popper;
                        if (rn(t, n)) {
                            a.rects = {
                                reference: tn(t, St(n), "fixed" === a.options.strategy),
                                popper: wt(n)
                            },
                            a.reset = !1,
                            a.placement = a.options.placement,
                            a.orderedModifiers.forEach((function(e) {
                                return a.modifiersData[e.name] = Object.assign({}, e.data)
                            }
                            ));
                            for (var i = 0; i < a.orderedModifiers.length; i++)
                                if (!0 !== a.reset) {
                                    var o = a.orderedModifiers[i]
                                      , r = o.fn
                                      , s = o.options
                                      , l = void 0 === s ? {} : s
                                      , f = o.name;
                                    "function" == typeof r && (a = r({
                                        state: a,
                                        options: l,
                                        name: f,
                                        instance: u
                                    }) || a)
                                } else
                                    a.reset = !1,
                                    i = -1
                        }
                    }
                },
                update: (o = function() {
                    return new Promise((function(e) {
                        u.forceUpdate(),
                        e(a)
                    }
                    ))
                }
                ,
                function() {
                    return s || (s = new Promise((function(e) {
                        Promise.resolve().then((function() {
                            s = void 0,
                            e(o())
                        }
                        ))
                    }
                    ))),
                    s
                }
                ),
                destroy: function() {
                    f(),
                    c = !0
                }
            };
            if (!rn(e, t))
                return u;
            function f() {
                l.forEach((function(e) {
                    return e()
                }
                )),
                l = []
            }
            return u.setOptions(n).then((function(e) {
                !c && n.onFirstUpdate && n.onFirstUpdate(e)
            }
            )),
            u
        }
    }
    var an = sn({
        defaultModifiers: [{
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function() {},
            effect: function(e) {
                var t = e.state
                  , n = e.instance
                  , i = e.options
                  , o = i.scroll
                  , r = void 0 === o || o
                  , s = i.resize
                  , a = void 0 === s || s
                  , l = vt(t.elements.popper)
                  , c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                return r && c.forEach((function(e) {
                    e.addEventListener("scroll", n.update, Pt)
                }
                )),
                a && l.addEventListener("resize", n.update, Pt),
                function() {
                    r && c.forEach((function(e) {
                        e.removeEventListener("scroll", n.update, Pt)
                    }
                    )),
                    a && l.removeEventListener("resize", n.update, Pt)
                }
            },
            data: {}
        }, {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function(e) {
                var t = e.state
                  , n = e.name;
                t.modifiersData[n] = $t({
                    reference: t.rects.reference,
                    element: t.rects.popper,
                    strategy: "absolute",
                    placement: t.placement
                })
            },
            data: {}
        }, {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function(e) {
                var t = e.state
                  , n = e.options
                  , i = n.gpuAcceleration
                  , o = void 0 === i || i
                  , r = n.adaptive
                  , s = void 0 === r || r
                  , a = {
                    placement: bt(t.placement),
                    popper: t.elements.popper,
                    popperRect: t.rects.popper,
                    gpuAcceleration: o
                };
                null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), It(Object.assign(Object.assign({}, a), {}, {
                    offsets: t.modifiersData.popperOffsets,
                    position: t.options.strategy,
                    adaptive: s
                })))),
                null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), It(Object.assign(Object.assign({}, a), {}, {
                    offsets: t.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1
                })))),
                t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
                    "data-popper-placement": t.placement
                })
            },
            data: {}
        }, {
            name: "applyStyles",
            enabled: !0,
            phase: "write",
            fn: function(e) {
                var t = e.state;
                Object.keys(t.elements).forEach((function(e) {
                    var n = t.styles[e] || {}
                      , i = t.attributes[e] || {}
                      , o = t.elements[e];
                    yt(o) && mt(o) && (Object.assign(o.style, n),
                    Object.keys(i).forEach((function(e) {
                        var t = i[e];
                        !1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t)
                    }
                    )))
                }
                ))
            },
            effect: function(e) {
                var t = e.state
                  , n = {
                    popper: {
                        position: t.options.strategy,
                        left: "0",
                        top: "0",
                        margin: "0"
                    },
                    arrow: {
                        position: "absolute"
                    },
                    reference: {}
                };
                return Object.assign(t.elements.popper.style, n.popper),
                t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                function() {
                    Object.keys(t.elements).forEach((function(e) {
                        var i = t.elements[e]
                          , o = t.attributes[e] || {}
                          , r = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
                            return e[t] = "",
                            e
                        }
                        ), {});
                        yt(i) && mt(i) && (Object.assign(i.style, r),
                        Object.keys(o).forEach((function(e) {
                            i.removeAttribute(e)
                        }
                        )))
                    }
                    ))
                }
            },
            requires: ["computeStyles"]
        }, {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function(e) {
                var t = e.state
                  , n = e.options
                  , i = e.name
                  , o = n.offset
                  , r = void 0 === o ? [0, 0] : o
                  , s = pt.reduce((function(e, n) {
                    return e[n] = function(e, t, n) {
                        var i = bt(e)
                          , o = [st, it].indexOf(i) >= 0 ? -1 : 1
                          , r = "function" == typeof n ? n(Object.assign(Object.assign({}, t), {}, {
                            placement: e
                        })) : n
                          , s = r[0]
                          , a = r[1];
                        return s = s || 0,
                        a = (a || 0) * o,
                        [st, rt].indexOf(i) >= 0 ? {
                            x: a,
                            y: s
                        } : {
                            x: s,
                            y: a
                        }
                    }(n, t.rects, r),
                    e
                }
                ), {})
                  , a = s[t.placement]
                  , l = a.x
                  , c = a.y;
                null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += l,
                t.modifiersData.popperOffsets.y += c),
                t.modifiersData[i] = s
            }
        }, {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function(e) {
                var t = e.state
                  , n = e.options
                  , i = e.name;
                if (!t.modifiersData[i]._skip) {
                    for (var o = n.mainAxis, r = void 0 === o || o, s = n.altAxis, a = void 0 === s || s, l = n.fallbackPlacements, c = n.padding, u = n.boundary, f = n.rootBoundary, h = n.altBoundary, d = n.flipVariations, p = void 0 === d || d, g = n.allowedAutoPlacements, m = t.options.placement, v = bt(m), _ = l || (v === m || !p ? [Rt(m)] : function(e) {
                        if (bt(e) === at)
                            return [];
                        var t = Rt(e);
                        return [Wt(e), t, Wt(t)]
                    }(m)), y = [m].concat(_).reduce((function(e, n) {
                        return e.concat(bt(n) === at ? Jt(t, {
                            placement: n,
                            boundary: u,
                            rootBoundary: f,
                            padding: c,
                            flipVariations: p,
                            allowedAutoPlacements: g
                        }) : n)
                    }
                    ), []), b = t.rects.reference, w = t.rects.popper, E = new Map, L = !0, T = y[0], O = 0; O < y.length; O++) {
                        var k = y[O]
                          , C = bt(k)
                          , S = Kt(k) === ct
                          , A = [it, ot].indexOf(C) >= 0
                          , x = A ? "width" : "height"
                          , D = Gt(t, {
                            placement: k,
                            boundary: u,
                            rootBoundary: f,
                            altBoundary: h,
                            padding: c
                        })
                          , j = A ? S ? rt : st : S ? ot : it;
                        b[x] > w[x] && (j = Rt(j));
                        var N = Rt(j)
                          , I = [];
                        if (r && I.push(D[C] <= 0),
                        a && I.push(D[j] <= 0, D[N] <= 0),
                        I.every((function(e) {
                            return e
                        }
                        ))) {
                            T = k,
                            L = !1;
                            break
                        }
                        E.set(k, I)
                    }
                    if (L)
                        for (var P = function(e) {
                            var t = y.find((function(t) {
                                var n = E.get(t);
                                if (n)
                                    return n.slice(0, e).every((function(e) {
                                        return e
                                    }
                                    ))
                            }
                            ));
                            if (t)
                                return T = t,
                                "break"
                        }, M = p ? 3 : 1; M > 0; M--) {
                            if ("break" === P(M))
                                break
                        }
                    t.placement !== T && (t.modifiersData[i]._skip = !0,
                    t.placement = T,
                    t.reset = !0)
                }
            },
            requiresIfExists: ["offset"],
            data: {
                _skip: !1
            }
        }, {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function(e) {
                var t = e.state
                  , n = e.options
                  , i = e.name
                  , o = n.mainAxis
                  , r = void 0 === o || o
                  , s = n.altAxis
                  , a = void 0 !== s && s
                  , l = n.boundary
                  , c = n.rootBoundary
                  , u = n.altBoundary
                  , f = n.padding
                  , h = n.tether
                  , d = void 0 === h || h
                  , p = n.tetherOffset
                  , g = void 0 === p ? 0 : p
                  , m = Gt(t, {
                    boundary: l,
                    rootBoundary: c,
                    padding: f,
                    altBoundary: u
                })
                  , v = bt(t.placement)
                  , _ = Kt(t.placement)
                  , y = !_
                  , b = At(v)
                  , w = "x" === b ? "y" : "x"
                  , E = t.modifiersData.popperOffsets
                  , L = t.rects.reference
                  , T = t.rects.popper
                  , O = "function" == typeof g ? g(Object.assign(Object.assign({}, t.rects), {}, {
                    placement: t.placement
                })) : g
                  , k = {
                    x: 0,
                    y: 0
                };
                if (E) {
                    if (r) {
                        var C = "y" === b ? it : st
                          , S = "y" === b ? ot : rt
                          , A = "y" === b ? "height" : "width"
                          , x = E[b]
                          , D = E[b] + m[C]
                          , j = E[b] - m[S]
                          , N = d ? -T[A] / 2 : 0
                          , I = _ === ct ? L[A] : T[A]
                          , P = _ === ct ? -T[A] : -L[A]
                          , M = t.elements.arrow
                          , R = d && M ? wt(M) : {
                            width: 0,
                            height: 0
                        }
                          , H = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        }
                          , W = H[C]
                          , Y = H[S]
                          , B = xt(0, L[A], R[A])
                          , X = y ? L[A] / 2 - N - B - W - O : I - B - W - O
                          , U = y ? -L[A] / 2 + N + B + Y + O : P + B + Y + O
                          , q = t.elements.arrow && St(t.elements.arrow)
                          , Q = q ? "y" === b ? q.clientTop || 0 : q.clientLeft || 0 : 0
                          , F = t.modifiersData.offset ? t.modifiersData.offset[t.placement][b] : 0
                          , V = E[b] + X - F - Q
                          , z = E[b] + U - F
                          , K = xt(d ? Math.min(D, V) : D, x, d ? Math.max(j, z) : j);
                        E[b] = K,
                        k[b] = K - x
                    }
                    if (a) {
                        var $ = "x" === b ? it : st
                          , G = "x" === b ? ot : rt
                          , J = E[w]
                          , Z = xt(J + m[$], J, J - m[G]);
                        E[w] = Z,
                        k[w] = Z - J
                    }
                    t.modifiersData[i] = k
                }
            },
            requiresIfExists: ["offset"]
        }, {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function(e) {
                var t, n = e.state, i = e.name, o = n.elements.arrow, r = n.modifiersData.popperOffsets, s = bt(n.placement), a = At(s), l = [st, rt].indexOf(s) >= 0 ? "height" : "width";
                if (o && r) {
                    var c = n.modifiersData[i + "#persistent"].padding
                      , u = wt(o)
                      , f = "y" === a ? it : st
                      , h = "y" === a ? ot : rt
                      , d = n.rects.reference[l] + n.rects.reference[a] - r[a] - n.rects.popper[l]
                      , p = r[a] - n.rects.reference[a]
                      , g = St(o)
                      , m = g ? "y" === a ? g.clientHeight || 0 : g.clientWidth || 0 : 0
                      , v = d / 2 - p / 2
                      , _ = c[f]
                      , y = m - u[l] - c[h]
                      , b = m / 2 - u[l] / 2 + v
                      , w = xt(_, b, y)
                      , E = a;
                    n.modifiersData[i] = ((t = {})[E] = w,
                    t.centerOffset = w - b,
                    t)
                }
            },
            effect: function(e) {
                var t = e.state
                  , n = e.options
                  , i = e.name
                  , o = n.element
                  , r = void 0 === o ? "[data-popper-arrow]" : o
                  , s = n.padding
                  , a = void 0 === s ? 0 : s;
                null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && Et(t.elements.popper, r) && (t.elements.arrow = r,
                t.modifiersData[i + "#persistent"] = {
                    padding: Dt("number" != typeof a ? a : jt(a, lt))
                })
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"]
        }, {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function(e) {
                var t = e.state
                  , n = e.name
                  , i = t.rects.reference
                  , o = t.rects.popper
                  , r = t.modifiersData.preventOverflow
                  , s = Gt(t, {
                    elementContext: "reference"
                })
                  , a = Gt(t, {
                    altBoundary: !0
                })
                  , l = Zt(s, i)
                  , c = Zt(a, o, r)
                  , u = en(l)
                  , f = en(c);
                t.modifiersData[n] = {
                    referenceClippingOffsets: l,
                    popperEscapeOffsets: c,
                    isReferenceHidden: u,
                    hasPopperEscaped: f
                },
                t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
                    "data-popper-reference-hidden": u,
                    "data-popper-escaped": f
                })
            }
        }]
    })
      , ln = "dropdown"
      , cn = "coreui.dropdown"
      , un = "." + cn
      , fn = "Escape"
      , hn = "Space"
      , dn = "ArrowUp"
      , pn = "ArrowDown"
      , gn = new RegExp("ArrowUp|ArrowDown|Escape")
      , mn = "hide" + un
      , vn = "hidden" + un
      , _n = "click.coreui.dropdown.data-api"
      , yn = "keydown.coreui.dropdown.data-api"
      , bn = "disabled"
      , wn = "show"
      , En = "dropdown-menu-right"
      , Ln = '[data-toggle="dropdown"]'
      , Tn = ".dropdown-menu"
      , On = {
        offset: [0, 0],
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null
    }
      , kn = {
        offset: "(array|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
        popperConfig: "(null|object)"
    }
      , Cn = function() {
        function e(e, t) {
            this._element = e,
            this._popper = null,
            this._config = this._getConfig(t),
            this._menu = this._getMenuElement(),
            this._inNavbar = this._detectNavbar(),
            this._inHeader = this._detectHeader(),
            this._addEventListeners(),
            O(e, cn, this)
        }
        var n = e.prototype;
        return n.toggle = function() {
            if (!this._element.disabled && !this._element.classList.contains(bn)) {
                var t = this._menu.classList.contains(wn);
                e.clearMenus(),
                t || this.show()
            }
        }
        ,
        n.show = function() {
            if (!(this._element.disabled || this._element.classList.contains(bn) || this._menu.classList.contains(wn))) {
                var t = e.getParentFromElement(this._element)
                  , n = {
                    relatedTarget: this._element
                };
                if (!F.trigger(t, "show.coreui.dropdown", n).defaultPrevented) {
                    if (!this._inNavbar && !this._inHeader) {
                        if ("undefined" == typeof an)
                            throw new TypeError("CoreUI's dropdowns require Popper.js (https://popper.js.org)");
                        var i = this._element;
                        "parent" === this._config.reference ? i = t : m(this._config.reference) && (i = this._config.reference,
                        "undefined" != typeof this._config.reference.jquery && (i = this._config.reference[0])),
                        "scrollParent" !== this._config.boundary && t.classList.add("position-static"),
                        this._popper = an(i, this._menu, this._getPopperConfig())
                    }
                    var o, r;
                    if ("ontouchstart"in document.documentElement && !t.closest(".navbar-nav"))
                        (o = []).concat.apply(o, document.body.children).forEach((function(e) {
                            return F.on(e, "mouseover", null, (function() {}
                            ))
                        }
                        ));
                    if ("ontouchstart"in document.documentElement && !t.closest(".c-header-nav"))
                        (r = []).concat.apply(r, document.body.children).forEach((function(e) {
                            return F.on(e, "mouseover", null, (function() {}
                            ))
                        }
                        ));
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    ye.toggleClass(this._menu, wn),
                    ye.toggleClass(t, wn),
                    F.trigger(t, "shown.coreui.dropdown", n)
                }
            }
        }
        ,
        n.hide = function() {
            if (!this._element.disabled && !this._element.classList.contains(bn) && this._menu.classList.contains(wn)) {
                var t = e.getParentFromElement(this._element)
                  , n = {
                    relatedTarget: this._element
                };
                F.trigger(t, mn, n).defaultPrevented || (this._popper && this._popper.destroy(),
                ye.toggleClass(this._menu, wn),
                ye.toggleClass(t, wn),
                F.trigger(t, vn, n))
            }
        }
        ,
        n.dispose = function() {
            C(this._element, cn),
            F.off(this._element, un),
            this._element = null,
            this._menu = null,
            this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        ,
        n.update = function() {
            this._inNavbar = this._detectNavbar(),
            this._inHeader = this._detectHeader(),
            this._popper && this._popper.update()
        }
        ,
        n._addEventListeners = function() {
            var e = this;
            F.on(this._element, "click.coreui.dropdown", (function(t) {
                t.preventDefault(),
                t.stopPropagation(),
                e.toggle()
            }
            ))
        }
        ,
        n._getConfig = function(e) {
            return e = o(o(o({}, this.constructor.Default), ye.getDataAttributes(this._element)), e),
            _(ln, e, this.constructor.DefaultType),
            e
        }
        ,
        n._getMenuElement = function() {
            var t = e.getParentFromElement(this._element);
            return ae.findOne(Tn, t)
        }
        ,
        n._getPlacement = function() {
            var e = this._element.parentNode
              , t = "bottom-start";
            return e.classList.contains("dropup") ? (t = "top-start",
            this._menu.classList.contains(En) && (t = "top-end")) : e.classList.contains("dropright") ? t = "right-start" : e.classList.contains("dropleft") ? t = "left-start" : this._menu.classList.contains(En) && (t = "bottom-end"),
            t
        }
        ,
        n._detectNavbar = function() {
            return Boolean(this._element.closest(".navbar"))
        }
        ,
        n._detectHeader = function() {
            return Boolean(this._element.closest(".c-header"))
        }
        ,
        n._getOffset = function() {
            var e = this;
            return "function" == typeof this._config.offset ? function(t) {
                var n = t.placement
                  , i = t.reference
                  , o = t.popper;
                return e._config.offset({
                    placement: n,
                    reference: i,
                    popper: o
                })
            }
            : this._config.offset
        }
        ,
        n._getPopperConfig = function() {
            var e = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }, {
                    name: "flip",
                    enabled: this._config.flip
                }, {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }]
            };
            return "static" === this._config.display && (e.modifiers = {
                name: "applyStyles",
                enabled: !1
            }),
            o(o({}, e), this._config.popperConfig)
        }
        ,
        e.dropdownInterface = function(t, n) {
            var i = k(t, cn);
            if (i || (i = new e(t,"object" == typeof n ? n : null)),
            "string" == typeof n) {
                if ("undefined" == typeof i[n])
                    throw new TypeError('No method named "' + n + '"');
                i[n]()
            }
        }
        ,
        e.jQueryInterface = function(t) {
            return this.each((function() {
                e.dropdownInterface(this, t)
            }
            ))
        }
        ,
        e.clearMenus = function(t) {
            if (!t || 2 !== t.button && ("keyup" !== t.type || "Tab" === t.key))
                for (var n = ae.find(Ln), i = 0, o = n.length; i < o; i++) {
                    var r = e.getParentFromElement(n[i])
                      , s = k(n[i], cn)
                      , a = {
                        relatedTarget: n[i]
                    };
                    if (t && "click" === t.type && (a.clickEvent = t),
                    s) {
                        var l = s._menu;
                        if (r.classList.contains(wn))
                            if (!(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && "Tab" === t.key) && r.contains(t.target)))
                                if (!F.trigger(r, mn, a).defaultPrevented) {
                                    var c;
                                    if ("ontouchstart"in document.documentElement)
                                        (c = []).concat.apply(c, document.body.children).forEach((function(e) {
                                            return F.off(e, "mouseover", null, (function() {}
                                            ))
                                        }
                                        ));
                                    n[i].setAttribute("aria-expanded", "false"),
                                    s._popper && s._popper.destroy(),
                                    l.classList.remove(wn),
                                    r.classList.remove(wn),
                                    F.trigger(r, vn, a)
                                }
                    }
                }
        }
        ,
        e.getParentFromElement = function(e) {
            return d(e) || e.parentNode
        }
        ,
        e.dataApiKeydownHandler = function(t) {
            if (!(/input|textarea/i.test(t.target.tagName) ? t.key === hn || t.key !== fn && (t.key !== pn && t.key !== dn || t.target.closest(Tn)) : !gn.test(t.key)) && (t.preventDefault(),
            t.stopPropagation(),
            !this.disabled && !this.classList.contains(bn))) {
                var n = e.getParentFromElement(this)
                  , i = n.classList.contains(wn);
                if (t.key === fn)
                    return (this.matches(Ln) ? this : ae.prev(this, Ln)[0]).focus(),
                    void e.clearMenus();
                if (i && t.key !== hn) {
                    var o = ae.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", n).filter(y);
                    if (o.length) {
                        var r = o.indexOf(t.target);
                        t.key === dn && r > 0 && r--,
                        t.key === pn && r < o.length - 1 && r++,
                        o[r = -1 === r ? 0 : r].focus()
                    }
                } else
                    e.clearMenus()
            }
        }
        ,
        e.getInstance = function(e) {
            return k(e, cn)
        }
        ,
        t(e, null, [{
            key: "VERSION",
            get: function() {
                return "3.2.2"
            }
        }, {
            key: "Default",
            get: function() {
                return On
            }
        }, {
            key: "DefaultType",
            get: function() {
                return kn
            }
        }]),
        e
    }();
    F.on(document, yn, Ln, Cn.dataApiKeydownHandler),
    F.on(document, yn, Tn, Cn.dataApiKeydownHandler),
    F.on(document, _n, Cn.clearMenus),
    F.on(document, "keyup.coreui.dropdown.data-api", Cn.clearMenus),
    F.on(document, _n, Ln, (function(e) {
        e.preventDefault(),
        e.stopPropagation(),
        Cn.dropdownInterface(this, "toggle")
    }
    )),
    F.on(document, _n, ".dropdown form", (function(e) {
        return e.stopPropagation()
    }
    ));
    var Sn = L();
    if (Sn) {
        var An = Sn.fn[ln];
        Sn.fn[ln] = Cn.jQueryInterface,
        Sn.fn[ln].Constructor = Cn,
        Sn.fn[ln].noConflict = function() {
            return Sn.fn[ln] = An,
            Cn.jQueryInterface
        }
    }
    var xn = "loading-button"
      , Dn = "coreui.loading-button"
      , jn = "c-loading-button-loading"
      , Nn = {
        percent: 0,
        progress: !1,
        spinner: !0,
        spinnerType: "border",
        timeout: 1e3
    }
      , In = {
        percent: "number",
        progress: "boolean",
        spinner: "boolean",
        spinnerType: "string",
        timeout: "number"
    }
      , Pn = function() {
        function e(e, t) {
            this._element = e,
            this._config = this._getConfig(t),
            this._pause = !1,
            this._percent = this._config.percent,
            this._timeout = this._config.timeout,
            this._progressBar = null,
            this._spinner = null,
            this._state = "idle",
            this._element && O(e, Dn, this)
        }
        var n = e.prototype;
        return n.start = function() {
            var e = this;
            "loading" !== this._state && (this._createSpinner(),
            this._createProgressBar(),
            setTimeout((function() {
                e._element.classList.add(jn),
                e._loading(),
                F.trigger(e._element, "start.coreui.loading-button")
            }
            ), 1))
        }
        ,
        n.stop = function() {
            var e = this;
            this._element.classList.remove(jn);
            var t = function() {
                e._removeSpinner(),
                e._removeProgressBar(),
                e._state = "idle",
                F.trigger(e._element, "stop.coreui.loading-button"),
                e._percent >= 100 && F.trigger(e._element, "complete.coreui.loading-button"),
                e._percent = e._config.percent,
                e._timeout = e._config.timeout
            };
            if (this._spinner) {
                var n = p(this._spinner);
                return F.one(this._spinner, c, t),
                void v(this._spinner, n)
            }
            t()
        }
        ,
        n.pause = function() {
            this._pause = !0,
            this._state = "pause"
        }
        ,
        n.resume = function() {
            this._pause = !1,
            this._loading()
        }
        ,
        n.complete = function() {
            this._timeout = 1e3
        }
        ,
        n.updatePercent = function(e) {
            var t = (this._percent - e) / 100;
            this._timeout *= 1 + t,
            this._percent = e
        }
        ,
        n.dispose = function() {
            C(this._element, Dn),
            this._element = null
        }
        ,
        n.update = function(e) {
            this._config = this._getConfig(e)
        }
        ,
        n._getConfig = function(e) {
            return e = o(o(o({}, this.constructor.Default), ye.getDataAttributes(this._element)), e),
            _(xn, e, this.constructor.DefaultType),
            e
        }
        ,
        n._loading = function() {
            var e = this
              , t = setInterval((function() {
                if (e._state = "loading",
                e._percent >= 100)
                    return e.stop(),
                    void clearInterval(t);
                if (e._pause)
                    clearInterval(t);
                else {
                    var n = e._timeout / (100 - e._percent) / 10;
                    e._percent = Math.round(100 * (e._percent + 1 / n)) / 100,
                    e._timeout -= 10,
                    e._animateProgressBar()
                }
            }
            ), 10)
        }
        ,
        n._createProgressBar = function() {
            if (this._config.progress) {
                var e = document.createElement("div");
                e.classList.add("c-loading-button-progress"),
                e.setAttribute("role", "progressbar"),
                e.setAttribute("aria-hidden", "true"),
                e.style.backgroundColor = this._progressBarBg(),
                this._element.insertBefore(e, this._element.firstChild),
                this._progressBar = e
            }
        }
        ,
        n._createSpinner = function() {
            if (this._config.spinner) {
                var e = document.createElement("span")
                  , t = this._config.spinnerType;
                e.classList.add("c-loading-button-spinner", "spinner-" + t, "spinner-" + t + "-sm"),
                e.setAttribute("role", "status"),
                e.setAttribute("aria-hidden", "true"),
                this._element.insertBefore(e, this._element.firstChild),
                this._spinner = e
            }
        }
        ,
        n._removeProgressBar = function() {
            this._config.progress && (this._progressBar.remove(),
            this._progressBar = null)
        }
        ,
        n._removeSpinner = function() {
            this._config.spinner && (this._spinner.remove(),
            this._spinner = null)
        }
        ,
        n._progressBarBg = function() {
            var e = ("rgba(0, 0, 0, 0)" === window.getComputedStyle(this._element).getPropertyValue("background-color") ? "rgb(255, 255, 255)" : window.getComputedStyle(this._element).getPropertyValue("background-color")).match(/^rgb?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
            return (299 * parseInt(e[1], 10) + 587 * parseInt(e[2], 10) + 114 * parseInt(e[3], 10)) / 1e3 > 150 ? "rgba(0, 0, 0, .2)" : "rgba(255, 255, 255, .2)"
        }
        ,
        n._animateProgressBar = function() {
            this._config.progress && (this._progressBar.style.width = this._percent + "%")
        }
        ,
        e.loadingButtonInterface = function(t, n, i) {
            var o = k(t, Dn);
            if (o || (o = "object" == typeof n ? new e(t,n) : new e(t)),
            "string" == typeof n) {
                if ("undefined" == typeof o[n])
                    throw new TypeError('No method named "' + n + '"');
                switch (n) {
                case "update":
                    o[n](i);
                    break;
                case "dispose":
                case "start":
                case "stop":
                case "pause":
                case "resume":
                case "complete":
                case "updatePercent":
                    o[n]()
                }
            }
        }
        ,
        e.jQueryInterface = function(t, n) {
            return this.each((function() {
                e.loadingButtonInterface(this, t, n)
            }
            ))
        }
        ,
        e.getInstance = function(e) {
            return k(e, Dn)
        }
        ,
        t(e, null, [{
            key: "VERSION",
            get: function() {
                return "3.4.0-alpha.0"
            }
        }, {
            key: "Default",
            get: function() {
                return Nn
            }
        }, {
            key: "DefaultType",
            get: function() {
                return In
            }
        }]),
        e
    }();
    F.on(window, "load.coreui.loading-button.data-api", (function() {
        Array.from(document.querySelectorAll('[data-coreui="loading-button"]')).forEach((function(e) {
            Pn.loadingButtonInterface(e, ye.getDataAttributes(e))
        }
        ))
    }
    ));
    var Mn = L();
    if (Mn) {
        var Rn = Mn.fn[xn];
        Mn.fn[xn] = Pn.jQueryInterface,
        Mn.fn[xn].Constructor = Pn,
        Mn.fn[xn].noConflict = function() {
            return Mn.fn[xn] = Rn,
            Pn.jQueryInterface
        }
    }
    var Hn = "modal"
      , Wn = "coreui.modal"
      , Yn = "." + Wn
      , Bn = "Escape"
      , Xn = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    }
      , Un = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    }
      , qn = "hidden" + Yn
      , Qn = "show" + Yn
      , Fn = "focusin" + Yn
      , Vn = "resize" + Yn
      , zn = "click.dismiss" + Yn
      , Kn = "keydown.dismiss" + Yn
      , $n = "mousedown.dismiss" + Yn
      , Gn = "modal-open"
      , Jn = "fade"
      , Zn = "show"
      , ei = "modal-static"
      , ti = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , ni = ".sticky-top"
      , ii = function() {
        function e(e, t) {
            this._config = this._getConfig(t),
            this._element = e,
            this._dialog = ae.findOne(".modal-dialog", e),
            this._backdrop = null,
            this._isShown = !1,
            this._isBodyOverflowing = !1,
            this._ignoreBackdropClick = !1,
            this._isTransitioning = !1,
            this._scrollbarWidth = 0,
            O(e, Wn, this)
        }
        var n = e.prototype;
        return n.toggle = function(e) {
            return this._isShown ? this.hide() : this.show(e)
        }
        ,
        n.show = function(e) {
            var t = this;
            if (!this._isShown && !this._isTransitioning) {
                this._element.classList.contains(Jn) && (this._isTransitioning = !0);
                var n = F.trigger(this._element, Qn, {
                    relatedTarget: e
                });
                this._isShown || n.defaultPrevented || (this._isShown = !0,
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                F.on(this._element, zn, '[data-dismiss="modal"]', (function(e) {
                    return t.hide(e)
                }
                )),
                F.on(this._dialog, $n, (function() {
                    F.one(t._element, "mouseup.dismiss.coreui.modal", (function(e) {
                        e.target === t._element && (t._ignoreBackdropClick = !0)
                    }
                    ))
                }
                )),
                this._showBackdrop((function() {
                    return t._showElement(e)
                }
                )))
            }
        }
        ,
        n.hide = function(e) {
            var t = this;
            if ((e && e.preventDefault(),
            this._isShown && !this._isTransitioning) && !F.trigger(this._element, "hide.coreui.modal").defaultPrevented) {
                this._isShown = !1;
                var n = this._element.classList.contains(Jn);
                if (n && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                F.off(document, Fn),
                this._element.classList.remove(Zn),
                F.off(this._element, zn),
                F.off(this._dialog, $n),
                n) {
                    var i = p(this._element);
                    F.one(this._element, c, (function(e) {
                        return t._hideModal(e)
                    }
                    )),
                    v(this._element, i)
                } else
                    this._hideModal()
            }
        }
        ,
        n.dispose = function() {
            [window, this._element, this._dialog].forEach((function(e) {
                return F.off(e, Yn)
            }
            )),
            F.off(document, Fn),
            C(this._element, Wn),
            this._config = null,
            this._element = null,
            this._dialog = null,
            this._backdrop = null,
            this._isShown = null,
            this._isBodyOverflowing = null,
            this._ignoreBackdropClick = null,
            this._isTransitioning = null,
            this._scrollbarWidth = null
        }
        ,
        n.handleUpdate = function() {
            this._adjustDialog()
        }
        ,
        n._getConfig = function(e) {
            return e = o(o({}, Xn), e),
            _(Hn, e, Un),
            e
        }
        ,
        n._showElement = function(e) {
            var t = this
              , n = this._element.classList.contains(Jn)
              , i = ae.findOne(".modal-body", this._dialog);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.scrollTop = 0,
            i && (i.scrollTop = 0),
            n && E(this._element),
            this._element.classList.add(Zn),
            this._config.focus && this._enforceFocus();
            var o = function() {
                t._config.focus && t._element.focus(),
                t._isTransitioning = !1,
                F.trigger(t._element, "shown.coreui.modal", {
                    relatedTarget: e
                })
            };
            if (n) {
                var r = p(this._dialog);
                F.one(this._dialog, c, o),
                v(this._dialog, r)
            } else
                o()
        }
        ,
        n._enforceFocus = function() {
            var e = this;
            F.off(document, Fn),
            F.on(document, Fn, (function(t) {
                document === t.target || e._element === t.target || e._element.contains(t.target) || e._element.focus()
            }
            ))
        }
        ,
        n._setEscapeEvent = function() {
            var e = this;
            this._isShown ? F.on(this._element, Kn, (function(t) {
                e._config.keyboard && t.key === Bn ? (t.preventDefault(),
                e.hide()) : e._config.keyboard || t.key !== Bn || e._triggerBackdropTransition()
            }
            )) : F.off(this._element, Kn)
        }
        ,
        n._setResizeEvent = function() {
            var e = this;
            this._isShown ? F.on(window, Vn, (function() {
                return e._adjustDialog()
            }
            )) : F.off(window, Vn)
        }
        ,
        n._hideModal = function() {
            var e = this;
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            this._isTransitioning = !1,
            this._showBackdrop((function() {
                document.body.classList.remove(Gn),
                e._resetAdjustments(),
                e._resetScrollbar(),
                F.trigger(e._element, qn)
            }
            ))
        }
        ,
        n._removeBackdrop = function() {
            this._backdrop.parentNode.removeChild(this._backdrop),
            this._backdrop = null
        }
        ,
        n._showBackdrop = function(e) {
            var t = this
              , n = this._element.classList.contains(Jn) ? Jn : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"),
                this._backdrop.className = "modal-backdrop",
                n && this._backdrop.classList.add(n),
                document.body.appendChild(this._backdrop),
                F.on(this._element, zn, (function(e) {
                    t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && t._triggerBackdropTransition()
                }
                )),
                n && E(this._backdrop),
                this._backdrop.classList.add(Zn),
                !n)
                    return void e();
                var i = p(this._backdrop);
                F.one(this._backdrop, c, e),
                v(this._backdrop, i)
            } else if (!this._isShown && this._backdrop) {
                this._backdrop.classList.remove(Zn);
                var o = function() {
                    t._removeBackdrop(),
                    e()
                };
                if (this._element.classList.contains(Jn)) {
                    var r = p(this._backdrop);
                    F.one(this._backdrop, c, o),
                    v(this._backdrop, r)
                } else
                    o()
            } else
                e()
        }
        ,
        n._triggerBackdropTransition = function() {
            var e = this;
            if ("static" === this._config.backdrop) {
                if (F.trigger(this._element, "hidePrevented.coreui.modal").defaultPrevented)
                    return;
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                t || (this._element.style.overflowY = "hidden"),
                this._element.classList.add(ei);
                var n = p(this._dialog);
                F.off(this._element, c),
                F.one(this._element, c, (function() {
                    e._element.classList.remove(ei),
                    t || (F.one(e._element, c, (function() {
                        e._element.style.overflowY = ""
                    }
                    )),
                    v(e._element, n))
                }
                )),
                v(this._element, n),
                this._element.focus()
            } else
                this.hide()
        }
        ,
        n._adjustDialog = function() {
            var e = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }
        ,
        n._resetAdjustments = function() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        ,
        n._checkScrollbar = function() {
            var e = document.body.getBoundingClientRect();
            this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth,
            this._scrollbarWidth = this._getScrollbarWidth()
        }
        ,
        n._setScrollbar = function() {
            var e = this;
            if (this._isBodyOverflowing) {
                ae.find(ti).forEach((function(t) {
                    var n = t.style.paddingRight
                      , i = window.getComputedStyle(t)["padding-right"];
                    ye.setDataAttribute(t, "padding-right", n),
                    t.style.paddingRight = parseFloat(i) + e._scrollbarWidth + "px"
                }
                )),
                ae.find(ni).forEach((function(t) {
                    var n = t.style.marginRight
                      , i = window.getComputedStyle(t)["margin-right"];
                    ye.setDataAttribute(t, "margin-right", n),
                    t.style.marginRight = parseFloat(i) - e._scrollbarWidth + "px"
                }
                ));
                var t = document.body.style.paddingRight
                  , n = window.getComputedStyle(document.body)["padding-right"];
                ye.setDataAttribute(document.body, "padding-right", t),
                document.body.style.paddingRight = parseFloat(n) + this._scrollbarWidth + "px"
            }
            document.body.classList.add(Gn)
        }
        ,
        n._resetScrollbar = function() {
            ae.find(ti).forEach((function(e) {
                var t = ye.getDataAttribute(e, "padding-right");
                "undefined" != typeof t && (ye.removeDataAttribute(e, "padding-right"),
                e.style.paddingRight = t)
            }
            )),
            ae.find(".sticky-top").forEach((function(e) {
                var t = ye.getDataAttribute(e, "margin-right");
                "undefined" != typeof t && (ye.removeDataAttribute(e, "margin-right"),
                e.style.marginRight = t)
            }
            ));
            var e = ye.getDataAttribute(document.body, "padding-right");
            "undefined" == typeof e ? document.body.style.paddingRight = "" : (ye.removeDataAttribute(document.body, "padding-right"),
            document.body.style.paddingRight = e)
        }
        ,
        n._getScrollbarWidth = function() {
            var e = document.createElement("div");
            e.className = "modal-scrollbar-measure",
            document.body.appendChild(e);
            var t = e.getBoundingClientRect().width - e.clientWidth;
            return document.body.removeChild(e),
            t
        }
        ,
        e.jQueryInterface = function(t, n) {
            return this.each((function() {
                var i = k(this, Wn)
                  , r = o(o(o({}, Xn), ye.getDataAttributes(this)), "object" == typeof t && t ? t : {});
                if (i || (i = new e(this,r)),
                "string" == typeof t) {
                    if ("undefined" == typeof i[t])
                        throw new TypeError('No method named "' + t + '"');
                    i[t](n)
                } else
                    r.show && i.show(n)
            }
            ))
        }
        ,
        e.getInstance = function(e) {
            return k(e, Wn)
        }
        ,
        t(e, null, [{
            key: "VERSION",
            get: function() {
                return "3.2.2"
            }
        }, {
            key: "Default",
            get: function() {
                return Xn
            }
        }]),
        e
    }();
    F.on(document, "click.coreui.modal.data-api", '[data-toggle="modal"]', (function(e) {
        var t = this
          , n = d(this);
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault(),
        F.one(n, Qn, (function(e) {
            e.defaultPrevented || F.one(n, qn, (function() {
                y(t) && t.focus()
            }
            ))
        }
        ));
        var i = k(n, Wn);
        if (!i) {
            var r = o(o({}, ye.getDataAttributes(n)), ye.getDataAttributes(this));
            i = new ii(n,r)
        }
        i.show(this)
    }
    ));
    var oi = L();
    if (oi) {
        var ri = oi.fn.modal;
        oi.fn.modal = ii.jQueryInterface,
        oi.fn.modal.Constructor = ii,
        oi.fn.modal.noConflict = function() {
            return oi.fn.modal = ri,
            ii.jQueryInterface
        }
    }
    var si = "mutli-select"
      , ai = "coreui.mutli-select"
      , li = "." + ai
      , ci = ".c-multi-select-search"
      , ui = ".c-multi-select-option"
      , fi = ".c-multi-select-options-empty"
      , hi = "changed" + li
      , di = "click" + li
      , pi = "hidden" + li
      , gi = "keydown" + li
      , mi = "c-multi-select"
      , vi = "c-multi-select-option"
      , _i = "c-multi-selected"
      , yi = "c-show"
      , bi = {
        inline: !1,
        multiple: !0,
        options: !1,
        optionsEmptyPlaceholder: "no items",
        search: !1,
        searchPlaceholder: "Select...",
        selection: !0,
        selectionType: "counter",
        selectionTypeCounterText: "item(s) selected",
        selected: []
    }
      , wi = {
        inline: "boolean",
        multiple: "boolean",
        options: "(boolean|array)",
        optionsEmptyPlaceholder: "string",
        search: "boolean",
        searchPlaceholder: "string",
        selection: "boolean",
        selectionType: "string",
        selectionTypeCounterText: "string",
        selected: "array"
    }
      , Ei = function() {
        function e(e, t) {
            this._element = e,
            this._selectionElement = null,
            this._selectionCleanerElement = null,
            this._searchElement = null,
            this._optionsElement = null,
            this._config = this._getConfig(t),
            this._clone = null,
            this._optionss = this._getOptions(),
            this._search = "",
            this._selection = this._getSelectedOptions(this._optionss),
            this._options = {},
            this._config.options.length > 0 && this._createNativeSelect(this._config.options),
            this._createSelect(),
            this._addEventListeners(),
            O(this._element, ai, this)
        }
        var n = e.prototype;
        return n.update = function(e) {
            this._getConfig(e)
        }
        ,
        n.dispose = function() {
            C(this._element, ai),
            this._element = null
        }
        ,
        n.show = function() {
            F.trigger(this._element, "show.coreui.mutli-select"),
            this._clone.classList.add(yi),
            this._config.search && ae.findOne(ci, this._clone).focus(),
            F.trigger(this._element, "showN.coreui.mutli-select")
        }
        ,
        n.hide = function() {
            F.trigger(this._element, "hide.coreui.mutli-select"),
            this._clone.classList.remove(yi),
            F.trigger(this._element, pi)
        }
        ,
        n.search = function(e) {
            this._search = e.length > 0 ? e.toLowerCase() : e,
            this._filterOptionsList(),
            F.trigger(this._element, "search.coreui.mutli-select")
        }
        ,
        n._addEventListeners = function() {
            var e = this;
            F.on(this._clone, di, (function() {
                e.show()
            }
            )),
            F.on(this._searchElement, "keyup.coreui.mutli-select", (function() {
                e._onSearchChange(e._searchElement)
            }
            )),
            F.on(this._searchElement, gi, (function(t) {
                var n = t.keyCode || t.charCode;
                8 !== n && 46 !== n || 0 !== t.target.value.length || e._selectionDeleteLast()
            }
            )),
            F.on(this._optionsElement, di, (function(t) {
                t.preventDefault(),
                t.stopPropagation(),
                e._onOptionsClick(t.target)
            }
            )),
            F.on(this._selectionCleanerElement, di, (function(t) {
                t.preventDefault(),
                t.stopPropagation(),
                e._selectionClear(),
                e._updateSelection(),
                e._updateSearch(),
                e._updateSearchSize()
            }
            )),
            F.on(this._optionsElement, gi, (function(t) {
                13 === (t.keyCode || t.charCode) && (e._onOptionsClick(t.target),
                ae.findOne(ci, e._clone).focus())
            }
            ))
        }
        ,
        n._getConfig = function(e, t) {
            return !0 !== t && (e = o(o(o({}, this.constructor.Default), ye.getDataAttributes(this._element)), e)),
            _(si, e, this.constructor.DefaultType),
            e
        }
        ,
        n._getOptions = function(e) {
            var t = this;
            if (void 0 === e && (e = this._element),
            this._config.options)
                return this._config.options;
            var n = Array.from(e.childNodes).filter((function(e) {
                return "OPTION" === e.nodeName || "OPTGROUP" === e.nodeName
            }
            ))
              , i = [];
            return n.forEach((function(e) {
                "OPTION" === e.nodeName && i.push({
                    value: e.value,
                    text: e.outerText,
                    selected: e.selected
                }),
                "OPTGROUP" === e.nodeName && i.push({
                    label: e.label,
                    options: t._getOptions(e)
                })
            }
            )),
            i
        }
        ,
        n._getSelectedOptions = function(e) {
            var t = this
              , n = [];
            return e.forEach((function(e) {
                "undefined" != typeof e.value ? e.selected && (t._config.multiple || (n.length = 0),
                n.push({
                    value: String(e.value),
                    text: e.text
                })) : t._getSelectedOptions(e.options)
            }
            )),
            n
        }
        ,
        n._createNativeSelect = function(e) {
            var t = document.createElement("select");
            t.classList.add(mi),
            this._element.id && (t.id = this._element.id),
            this._config.multiple && (t.multiple = !0),
            this._createNativeOptions(t, e),
            this._element.parentNode.replaceChild(t, this._element),
            this._element = t
        }
        ,
        n._createNativeOptions = function(e, t) {
            var n = this;
            t.forEach((function(t) {
                if ("undefined" != typeof t.options) {
                    var i = document.createElement("optgroup");
                    i.label = t.label,
                    n._createNativeOptions(i, t.options),
                    e.append(i)
                } else {
                    var o = document.createElement("OPTION");
                    o.value = t.value,
                    !0 === t.selected && (o.selected = !0),
                    o.innerHTML = t.text,
                    e.append(o)
                }
            }
            ))
        }
        ,
        n._hideNativeSelect = function() {
            this._element.tabIndex = "-1",
            this._element.style.display = "none"
        }
        ,
        n._createSelect = function() {
            var e = document.createElement("div");
            e.classList.add(mi),
            this._config.multiple && e.classList.add("c-multi-select-multiple"),
            this._config.inline && e.classList.add("c-multi-select-inline"),
            "tags" === this._config.selectionType && e.classList.add("c-multi-select-selection-tags"),
            this._clone = e,
            this._element.parentNode.insertBefore(e, this._element.nextSibling),
            (!this._config.inline || this._config.inline && this._config.selection) && this._createSelection(),
            this._config.search && (this._createSearchInput(),
            this._updateSearch()),
            this._createOptionsContainer(),
            this._hideNativeSelect(),
            this._updateOptionsList()
        }
        ,
        n._createSelection = function() {
            var e = document.createElement("span");
            e.classList.add("c-multi-select-selection"),
            this._clone.append(e),
            this._updateSelection(),
            this._selectionElement = e
        }
        ,
        n._createSelectionCleaner = function() {
            var e = document.createElement("span");
            e.classList.add("c-multi-select-selection-cleaner"),
            e.innerHTML = "&times;",
            this._clone.append(e),
            this._selectionCleanerElement = e
        }
        ,
        n._createSearchInput = function() {
            var e = document.createElement("input");
            e.classList.add("c-multi-select-search"),
            this._searchElement = e,
            this._updateSearchSize(),
            this._clone.append(e)
        }
        ,
        n._createOptionsContainer = function() {
            var e = document.createElement("div");
            e.classList.add("c-multi-select-options"),
            this._clone.append(e),
            this._createOptions(e, this._optionss),
            this._optionsElement = e
        }
        ,
        n._createOptions = function(e, t) {
            var n = this;
            t.forEach((function(t) {
                if ("undefined" != typeof t.value) {
                    var i = document.createElement("div");
                    i.classList.add(vi),
                    i.dataset.value = String(t.value),
                    i.tabIndex = 0,
                    i.innerHTML = t.text,
                    e.append(i)
                }
                if ("undefined" != typeof t.label) {
                    var o = document.createElement("div");
                    o.classList.add("c-multi-select-optgroup");
                    var r = document.createElement("div");
                    r.innerHTML = t.label,
                    r.classList.add("c-multi-select-optgroup-label"),
                    o.append(r),
                    n._createOptions(o, t.options),
                    e.append(o)
                }
            }
            ))
        }
        ,
        n._createTag = function(e, t) {
            var n = this
              , i = document.createElement("span");
            i.classList.add("c-multi-select-tag"),
            i.dataset.value = e,
            i.innerHTML = t;
            var o = document.createElement("span");
            return o.classList.add("c-multi-select-tag-delete", "close"),
            o.setAttribute("aria-label", "Close"),
            o.innerHTML = '<span aria-hidden="true">&times;</span>',
            i.append(o),
            F.on(o, di, (function(t) {
                t.preventDefault(),
                t.stopPropagation(),
                i.remove(),
                n._selectionDelete(e),
                n._updateOptionsList(),
                n._updateSearch()
            }
            )),
            i
        }
        ,
        n._onOptionsClick = function(e) {
            if (e.classList.contains(vi) && !e.classList.contains("c-label")) {
                var t = String(e.dataset.value)
                  , n = e.textContent;
                this._config.multiple && e.classList.contains(_i) ? this._selectionDelete(t) : this._config.multiple && !e.classList.contains(_i) ? this._selectionAdd(t, n) : this._config.multiple || this._selectionAdd(t, n),
                this._updateSelection(),
                this._updateSearch(),
                this._updateSearchSize()
            }
        }
        ,
        n._selectionAdd = function(e, t) {
            this._config.multiple || this._selectionClear(),
            0 === this._selection.filter((function(t) {
                return t.value === e
            }
            )).length && this._selection.push({
                value: e,
                text: t
            }),
            this._selectOption(e)
        }
        ,
        n._selectionClear = function() {
            this._selection.length = 0,
            this._clearOptions()
        }
        ,
        n._selectionDelete = function(e) {
            var t = this._selection.filter((function(t) {
                return t.value !== e
            }
            ));
            this._selection = t,
            this._unSelectOption(e)
        }
        ,
        n._selectionDeleteLast = function() {
            if (this._selection.length > 0) {
                var e = this._selection.pop();
                this._selectionDelete(e.value),
                this._updateSelection(),
                this._updateSearch()
            }
        }
        ,
        n._updateSelection = function() {
            var e = this;
            if (!this._config.inline || this._config.selection) {
                var t = ae.findOne(".c-multi-select-selection", this._clone);
                if (!this._config.multiple || "counter" !== this._config.selectionType)
                    return this._config.multiple && "tags" === this._config.selectionType ? (t.innerHTML = "",
                    void this._selection.forEach((function(n) {
                        t.append(e._createTag(n.value, n.text))
                    }
                    ))) : void (this._config.multiple && "text" === this._config.selectionType ? t.innerHTML = this._selection.map((function(e) {
                        return e.text
                    }
                    )).join(", ") : this._selection.length > 0 && (t.innerHTML = this._selection[0].text));
                t.innerHTML = this._selection.length + " " + this._config.selectionTypeCounterText
            }
        }
        ,
        n._updateSelectionCleaner = function() {
            if (null !== this._selectionCleanerElement) {
                var e = ae.findOne(".c-multi-select-selection-cleaner", this._clone);
                this._selection.length > 0 ? e.style.removeProperty("display") : e.style.display = "none"
            }
        }
        ,
        n._updateSearch = function() {
            if (this._config.search)
                return 0 !== this._selection.length || "tags" !== this._config.selectionType && "text" !== this._config.selectionType || this._searchElement.removeAttribute("size"),
                this._selection.length > 0 && !this._config.multiple && !this._config.inline ? (this._searchElement.placeholder = this._selection[0].text,
                void (this._selectionElement.style.display = "none")) : this._selection.length > 0 && this._config.multiple && "counter" !== this._config.selectionType && !this._config.inline ? (this._searchElement.placeholder = "",
                void this._selectionElement.style.removeProperty("display")) : 0 === this._selection.length && this._config.multiple && !this._config.inline ? (this._searchElement.placeholder = this._config.searchPlaceholder,
                void (this._selectionElement.style.display = "none")) : this._config.multiple && "counter" === this._config.selectionType && !this._config.inline ? (this._searchElement.placeholder = this._selection.length + " item(s) selected",
                void (this._selectionElement.style.display = "none")) : void (this._config.inline && (this._searchElement.placeholder = this._config.searchPlaceholder))
        }
        ,
        n._updateSearchSize = function(e) {
            void 0 === e && (e = 2),
            this._config.inline || !(this._selection.length > 0) || "tags" !== this._config.selectionType && "text" !== this._config.selectionType ? 0 !== this._selection.length || "tags" !== this._config.selectionType && "text" !== this._config.selectionType || this._searchElement.removeAttribute("size") : this._searchElement.size = e
        }
        ,
        n._selectOption = function(e) {
            ae.findOne('option[value="' + e + '"]', this._element).selected = !0;
            var t = ae.findOne('[data-value="' + e + '"]', this._optionsElement);
            t && t.classList.add(_i),
            F.trigger(this._element, hi, {
                value: this._selection
            })
        }
        ,
        n._unSelectOption = function(e) {
            ae.findOne('option[value="' + e + '"]', this._element).selected = !1;
            var t = ae.findOne('[data-value="' + e + '"]', this._optionsElement);
            t && t.classList.remove(_i),
            F.trigger(this._element, hi, {
                value: this._selection
            })
        }
        ,
        n._clearOptions = function() {
            this._element.value = null,
            ae.find(".c-multi-selected", this._clone).forEach((function(e) {
                e.classList.remove(_i)
            }
            ))
        }
        ,
        n._onSearchChange = function(e) {
            e && (this.search(e.value),
            this._updateSearchSize(e.value.length + 1))
        }
        ,
        n._updateOptionsList = function() {
            var e = this;
            ae.find(ui, this._clone).forEach((function(t) {
                0 !== e._selection.filter((function(e) {
                    return e.value === t.dataset.value
                }
                )).length && t.classList.add(_i),
                0 === e._selection.filter((function(e) {
                    return e.value === t.dataset.value
                }
                )).length && t.classList.remove(_i)
            }
            ))
        }
        ,
        n._isHidden = function(e) {
            return null === e.offsetParent
        }
        ,
        n._isVisible = function(e) {
            return "none" !== window.getComputedStyle(e).display
        }
        ,
        n._filterOptionsList = function() {
            var e = this
              , t = ae.find(ui, this._clone)
              , n = 0;
            if (t.forEach((function(t) {
                -1 === t.textContent.toLowerCase().indexOf(e._search) ? t.style.display = "none" : (t.style.removeProperty("display"),
                n++);
                var i = t.closest(".c-multi-select-optgroup");
                i && (ae.children(i, ui).filter((function(t) {
                    return e._isVisible(t)
                }
                )).length > 0 ? i.style.removeProperty("display") : i.style.display = "none")
            }
            )),
            n > 0)
                ae.findOne(fi, this._clone) && ae.findOne(fi, this._clone).remove();
            else if (0 === n) {
                var i = document.createElement("div");
                i.classList.add("c-multi-select-options-empty"),
                i.innerHTML = this._config.optionsEmptyPlaceholder,
                ae.findOne(fi, this._clone) || ae.findOne(".c-multi-select-options", this._clone).append(i)
            }
        }
        ,
        e.jQueryInterface = function(e) {
            return this.each((function() {
                var t = k(this, ai);
                switch (t || (t = new Select(this)),
                e) {
                case "update":
                    t[e](this, par);
                    break;
                case "dispose":
                case "open":
                case "close":
                case "search":
                case "value":
                    t[e](this)
                }
            }
            ))
        }
        ,
        e.clearMenus = function(e) {
            if (!e || 2 !== e.button && ("keyup" !== e.type || "Tab" === e.key))
                for (var t = ae.find(".c-multi-select"), n = 0, i = t.length; n < i; n++) {
                    var o = k(t[n], ai)
                      , r = {
                        relatedTarget: t[n]
                    };
                    e && "click" === e.type && (r.clickEvent = e),
                    o && (o._clone.classList.contains(yi) && (o._clone.contains(e.target) || (o._clone.classList.remove(yi),
                    F.trigger(o._element, pi))))
                }
        }
        ,
        e.getInstance = function(e) {
            return k(e, ai)
        }
        ,
        e.new = function(e, t) {
            var n = k(e, ai);
            return n || new Select(e,t)
        }
        ,
        e.destroy = function(e) {
            var t = k(e, ai);
            return !!t && (e.parentNode && e.parentNode.removeChild(e),
            Select.destroyInstance(t),
            C(e, ai),
            !0)
        }
        ,
        t(e, null, [{
            key: "VERSION",
            get: function() {
                return "3.4.0-alpha.0"
            }
        }, {
            key: "Default",
            get: function() {
                return bi
            }
        }, {
            key: "DefaultType",
            get: function() {
                return wi
            }
        }]),
        e
    }();
    F.on(document, "click.coreui.mutli-select.data-api", Ei.clearMenus),
    F.on(document, "keyup.coreui.mutli-select.data-api", Ei.clearMenus);
    var Li = L();
    if (Li) {
        var Ti = Li.fn[si];
        Li.fn[si] = Ei.jQueryInterface,
        Li.fn[si].Constructor = Ei,
        Li.fn[si].noConflict = function() {
            return Li.fn[si] = Ti,
            Ei.jQueryInterface
        }
    }
    var Oi = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]
      , ki = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi
      , Ci = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i
      , Si = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    };
    function Ai(e, t, n) {
        var i;
        if (!e.length)
            return e;
        if (n && "function" == typeof n)
            return n(e);
        for (var o = (new window.DOMParser).parseFromString(e, "text/html"), r = Object.keys(t), s = (i = []).concat.apply(i, o.body.querySelectorAll("*")), a = function(e, n) {
            var i, o = s[e], a = o.nodeName.toLowerCase();
            if (-1 === r.indexOf(a))
                return o.parentNode.removeChild(o),
                "continue";
            var l = (i = []).concat.apply(i, o.attributes)
              , c = [].concat(t["*"] || [], t[a] || []);
            l.forEach((function(e) {
                (function(e, t) {
                    var n = e.nodeName.toLowerCase();
                    if (-1 !== t.indexOf(n))
                        return -1 === Oi.indexOf(n) || Boolean(e.nodeValue.match(ki) || e.nodeValue.match(Ci));
                    for (var i = t.filter((function(e) {
                        return e instanceof RegExp
                    }
                    )), o = 0, r = i.length; o < r; o++)
                        if (n.match(i[o]))
                            return !0;
                    return !1
                }
                )(e, c) || o.removeAttribute(e.nodeName)
            }
            ))
        }, l = 0, c = s.length; l < c; l++)
            a(l);
        return o.body.innerHTML
    }
    var xi = "tooltip"
      , Di = "coreui.tooltip"
      , ji = "." + Di
      , Ni = new RegExp("(^|\\s)bs-tooltip\\S+","g")
      , Ii = ["sanitize", "whiteList", "sanitizeFn"]
      , Pi = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(array|function)",
        container: "(string|element|boolean)",
        boundary: "(string|element)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object",
        popperConfig: "(null|object)"
    }
      , Mi = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
    }
      , Ri = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: [0, 0],
        container: !1,
        boundary: "scrollParent",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: Si,
        popperConfig: null
    }
      , Hi = {
        HIDE: "hide" + ji,
        HIDDEN: "hidden" + ji,
        SHOW: "show" + ji,
        SHOWN: "shown" + ji,
        INSERTED: "inserted" + ji,
        CLICK: "click" + ji,
        FOCUSIN: "focusin" + ji,
        FOCUSOUT: "focusout" + ji,
        MOUSEENTER: "mouseenter" + ji,
        MOUSELEAVE: "mouseleave" + ji
    }
      , Wi = "fade"
      , Yi = "show"
      , Bi = "show"
      , Xi = "out"
      , Ui = "hover"
      , qi = "focus"
      , Qi = function() {
        function e(e, t) {
            if ("undefined" == typeof an)
                throw new TypeError("CoreUI's tooltips require Popper.js (https://popper.js.org)");
            this._isEnabled = !0,
            this._timeout = 0,
            this._hoverState = "",
            this._activeTrigger = {},
            this._popper = null,
            this.element = e,
            this.config = this._getConfig(t),
            this.tip = null,
            this._setListeners(),
            O(e, this.constructor.DATA_KEY, this)
        }
        var n = e.prototype;
        return n.enable = function() {
            this._isEnabled = !0
        }
        ,
        n.disable = function() {
            this._isEnabled = !1
        }
        ,
        n.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }
        ,
        n.toggle = function(e) {
            if (this._isEnabled)
                if (e) {
                    var t = this.constructor.DATA_KEY
                      , n = k(e.delegateTarget, t);
                    n || (n = new this.constructor(e.delegateTarget,this._getDelegateConfig()),
                    O(e.delegateTarget, t, n)),
                    n._activeTrigger.click = !n._activeTrigger.click,
                    n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                } else {
                    if (this.getTipElement().classList.contains(Yi))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        ,
        n.dispose = function() {
            clearTimeout(this._timeout),
            C(this.element, this.constructor.DATA_KEY),
            F.off(this.element, this.constructor.EVENT_KEY),
            F.off(this.element.closest(".modal"), "hide.coreui.modal", this._hideModalHandler),
            this.tip && this.tip.parentNode.removeChild(this.tip),
            this._isEnabled = null,
            this._timeout = null,
            this._hoverState = null,
            this._activeTrigger = null,
            this._popper && this._popper.destroy(),
            this._popper = null,
            this.element = null,
            this.config = null,
            this.tip = null
        }
        ,
        n.show = function() {
            var e = this;
            if ("none" === this.element.style.display)
                throw new Error("Please use show on visible elements");
            if (this.isWithContent() && this._isEnabled) {
                var t = F.trigger(this.element, this.constructor.Event.SHOW)
                  , n = b(this.element)
                  , i = null === n ? this.element.ownerDocument.documentElement.contains(this.element) : n.contains(this.element);
                if (t.defaultPrevented || !i)
                    return;
                var o = this.getTipElement()
                  , r = u(this.constructor.NAME);
                o.setAttribute("id", r),
                this.element.setAttribute("aria-describedby", r),
                this.setContent(),
                this.config.animation && o.classList.add(Wi);
                var s, a = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement, l = this._getAttachment(a), f = this._getContainer();
                if (O(o, this.constructor.DATA_KEY, this),
                this.element.ownerDocument.documentElement.contains(this.tip) || f.appendChild(o),
                F.trigger(this.element, this.constructor.Event.INSERTED),
                this._popper = an(this.element, o, this._getPopperConfig(l)),
                o.classList.add(Yi),
                "ontouchstart"in document.documentElement)
                    (s = []).concat.apply(s, document.body.children).forEach((function(e) {
                        F.on(e, "mouseover", (function() {}
                        ))
                    }
                    ));
                var h = function() {
                    e.config.animation && e._fixTransition();
                    var t = e._hoverState;
                    e._hoverState = null,
                    F.trigger(e.element, e.constructor.Event.SHOWN),
                    t === Xi && e._leave(null, e)
                };
                if (this.tip.classList.contains(Wi)) {
                    var d = p(this.tip);
                    F.one(this.tip, c, h),
                    v(this.tip, d)
                } else
                    h()
            }
        }
        ,
        n.hide = function() {
            var e = this
              , t = this.getTipElement()
              , n = function() {
                e._hoverState !== Bi && t.parentNode && t.parentNode.removeChild(t),
                e._cleanTipClass(),
                e.element.removeAttribute("aria-describedby"),
                F.trigger(e.element, e.constructor.Event.HIDDEN),
                e._popper.destroy()
            };
            if (!F.trigger(this.element, this.constructor.Event.HIDE).defaultPrevented) {
                var i;
                if (t.classList.remove(Yi),
                "ontouchstart"in document.documentElement)
                    (i = []).concat.apply(i, document.body.children).forEach((function(e) {
                        return F.off(e, "mouseover", w)
                    }
                    ));
                if (this._activeTrigger.click = !1,
                this._activeTrigger.focus = !1,
                this._activeTrigger.hover = !1,
                this.tip.classList.contains(Wi)) {
                    var o = p(t);
                    F.one(t, c, n),
                    v(t, o)
                } else
                    n();
                this._hoverState = ""
            }
        }
        ,
        n.update = function() {
            null !== this._popper && this._popper.update()
        }
        ,
        n.isWithContent = function() {
            return Boolean(this.getTitle())
        }
        ,
        n.getTipElement = function() {
            if (this.tip)
                return this.tip;
            var e = document.createElement("div");
            return e.innerHTML = this.config.template,
            this.tip = e.children[0],
            this.tip
        }
        ,
        n.setContent = function() {
            var e = this.getTipElement();
            this.setElementContent(ae.findOne(".tooltip-inner", e), this.getTitle()),
            e.classList.remove(Wi, Yi)
        }
        ,
        n.setElementContent = function(e, t) {
            if (null !== e)
                return "object" == typeof t && m(t) ? (t.jquery && (t = t[0]),
                void (this.config.html ? t.parentNode !== e && (e.innerHTML = "",
                e.appendChild(t)) : e.textContent = t.textContent)) : void (this.config.html ? (this.config.sanitize && (t = Ai(t, this.config.whiteList, this.config.sanitizeFn)),
                e.innerHTML = t) : e.textContent = t)
        }
        ,
        n.getTitle = function() {
            var e = this.element.getAttribute("data-original-title");
            return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
            e
        }
        ,
        n._getPopperConfig = function(e) {
            var t = this;
            return o(o({}, {
                placement: e,
                modifiers: [{
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: "." + this.constructor.NAME + "-arrow"
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        boundary: this.config.boundary
                    }
                }],
                onFirstUpdate: function(e) {
                    e.originalPlacement !== e.placement && t._popper.update()
                }
            }), this.config.popperConfig)
        }
        ,
        n._getOffset = function() {
            var e = this;
            return "function" == typeof this.config.offset ? function(t) {
                var n = t.placement
                  , i = t.reference
                  , o = t.popper;
                return e.config.offset({
                    placement: n,
                    reference: i,
                    popper: o
                })
            }
            : this.config.offset
        }
        ,
        n._getContainer = function() {
            return !1 === this.config.container ? document.body : m(this.config.container) ? this.config.container : ae.findOne(this.config.container)
        }
        ,
        n._getAttachment = function(e) {
            return Mi[e.toUpperCase()]
        }
        ,
        n._setListeners = function() {
            var e = this;
            this.config.trigger.split(" ").forEach((function(t) {
                if ("click" === t)
                    F.on(e.element, e.constructor.Event.CLICK, e.config.selector, (function(t) {
                        return e.toggle(t)
                    }
                    ));
                else if ("manual" !== t) {
                    var n = t === Ui ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN
                      , i = t === Ui ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                    F.on(e.element, n, e.config.selector, (function(t) {
                        return e._enter(t)
                    }
                    )),
                    F.on(e.element, i, e.config.selector, (function(t) {
                        return e._leave(t)
                    }
                    ))
                }
            }
            )),
            this._hideModalHandler = function() {
                e.element && e.hide()
            }
            ,
            F.on(this.element.closest(".modal"), "hide.coreui.modal", this._hideModalHandler),
            this.config.selector ? this.config = o(o({}, this.config), {}, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }
        ,
        n._fixTitle = function() {
            var e = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
            this.element.setAttribute("title", ""))
        }
        ,
        n._enter = function(e, t) {
            var n = this.constructor.DATA_KEY;
            (t = t || k(e.delegateTarget, n)) || (t = new this.constructor(e.delegateTarget,this._getDelegateConfig()),
            O(e.delegateTarget, n, t)),
            e && (t._activeTrigger["focusin" === e.type ? qi : Ui] = !0),
            t.getTipElement().classList.contains(Yi) || t._hoverState === Bi ? t._hoverState = Bi : (clearTimeout(t._timeout),
            t._hoverState = Bi,
            t.config.delay && t.config.delay.show ? t._timeout = setTimeout((function() {
                t._hoverState === Bi && t.show()
            }
            ), t.config.delay.show) : t.show())
        }
        ,
        n._leave = function(e, t) {
            var n = this.constructor.DATA_KEY;
            (t = t || k(e.delegateTarget, n)) || (t = new this.constructor(e.delegateTarget,this._getDelegateConfig()),
            O(e.delegateTarget, n, t)),
            e && (t._activeTrigger["focusout" === e.type ? qi : Ui] = !1),
            t._isWithActiveTrigger() || (clearTimeout(t._timeout),
            t._hoverState = Xi,
            t.config.delay && t.config.delay.hide ? t._timeout = setTimeout((function() {
                t._hoverState === Xi && t.hide()
            }
            ), t.config.delay.hide) : t.hide())
        }
        ,
        n._isWithActiveTrigger = function() {
            for (var e in this._activeTrigger)
                if (this._activeTrigger[e])
                    return !0;
            return !1
        }
        ,
        n._getConfig = function(e) {
            var t = ye.getDataAttributes(this.element);
            return Object.keys(t).forEach((function(e) {
                -1 !== Ii.indexOf(e) && delete t[e]
            }
            )),
            e && "object" == typeof e.container && e.container.jquery && (e.container = e.container[0]),
            "number" == typeof (e = o(o(o({}, this.constructor.Default), t), "object" == typeof e && e ? e : {})).delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }),
            "number" == typeof e.title && (e.title = e.title.toString()),
            "number" == typeof e.content && (e.content = e.content.toString()),
            _(xi, e, this.constructor.DefaultType),
            e.sanitize && (e.template = Ai(e.template, e.whiteList, e.sanitizeFn)),
            e
        }
        ,
        n._getDelegateConfig = function() {
            var e = {};
            if (this.config)
                for (var t in this.config)
                    this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
            return e
        }
        ,
        n._cleanTipClass = function() {
            var e = this.getTipElement()
              , t = e.getAttribute("class").match(Ni);
            null !== t && t.length > 0 && t.map((function(e) {
                return e.trim()
            }
            )).forEach((function(t) {
                return e.classList.remove(t)
            }
            ))
        }
        ,
        n._fixTransition = function() {
            var e = this.getTipElement()
              , t = this.config.animation;
            null === e.getAttribute("data-popper-placement") && (e.classList.remove(Wi),
            this.config.animation = !1,
            this.hide(),
            this.show(),
            this.config.animation = t)
        }
        ,
        e.jQueryInterface = function(t) {
            return this.each((function() {
                var n = k(this, Di)
                  , i = "object" == typeof t && t;
                if ((n || !/dispose|hide/.test(t)) && (n || (n = new e(this,i)),
                "string" == typeof t)) {
                    if ("undefined" == typeof n[t])
                        throw new TypeError('No method named "' + t + '"');
                    n[t]()
                }
            }
            ))
        }
        ,
        e.getInstance = function(e) {
            return k(e, Di)
        }
        ,
        t(e, null, [{
            key: "VERSION",
            get: function() {
                return "3.2.2"
            }
        }, {
            key: "Default",
            get: function() {
                return Ri
            }
        }, {
            key: "NAME",
            get: function() {
                return xi
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return Di
            }
        }, {
            key: "Event",
            get: function() {
                return Hi
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return ji
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Pi
            }
        }]),
        e
    }()
      , Fi = L();
    if (Fi) {
        var Vi = Fi.fn.tooltip;
        Fi.fn.tooltip = Qi.jQueryInterface,
        Fi.fn.tooltip.Constructor = Qi,
        Fi.fn.tooltip.noConflict = function() {
            return Fi.fn.tooltip = Vi,
            Qi.jQueryInterface
        }
    }
    var zi = "popover"
      , Ki = "coreui.popover"
      , $i = "." + Ki
      , Gi = new RegExp("(^|\\s)bs-popover\\S+","g")
      , Ji = o(o({}, Qi.Default), {}, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    })
      , Zi = o(o({}, Qi.DefaultType), {}, {
        content: "(string|element|function)"
    })
      , eo = {
        HIDE: "hide" + $i,
        HIDDEN: "hidden" + $i,
        SHOW: "show" + $i,
        SHOWN: "shown" + $i,
        INSERTED: "inserted" + $i,
        CLICK: "click" + $i,
        FOCUSIN: "focusin" + $i,
        FOCUSOUT: "focusout" + $i,
        MOUSEENTER: "mouseenter" + $i,
        MOUSELEAVE: "mouseleave" + $i
    }
      , to = function(e) {
        var n, i;
        function o() {
            return e.apply(this, arguments) || this
        }
        i = e,
        (n = o).prototype = Object.create(i.prototype),
        n.prototype.constructor = n,
        n.__proto__ = i;
        var r = o.prototype;
        return r.isWithContent = function() {
            return this.getTitle() || this._getContent()
        }
        ,
        r.setContent = function() {
            var e = this.getTipElement();
            this.setElementContent(ae.findOne(".popover-header", e), this.getTitle());
            var t = this._getContent();
            "function" == typeof t && (t = t.call(this.element)),
            this.setElementContent(ae.findOne(".popover-body", e), t),
            e.classList.remove("fade", "show")
        }
        ,
        r._addAttachmentClass = function(e) {
            this.getTipElement().classList.add("bs-popover-" + e)
        }
        ,
        r._getContent = function() {
            return this.element.getAttribute("data-content") || this.config.content
        }
        ,
        r._cleanTipClass = function() {
            var e = this.getTipElement()
              , t = e.getAttribute("class").match(Gi);
            null !== t && t.length > 0 && t.map((function(e) {
                return e.trim()
            }
            )).forEach((function(t) {
                return e.classList.remove(t)
            }
            ))
        }
        ,
        o.jQueryInterface = function(e) {
            return this.each((function() {
                var t = k(this, Ki)
                  , n = "object" == typeof e ? e : null;
                if ((t || !/dispose|hide/.test(e)) && (t || (t = new o(this,n),
                O(this, Ki, t)),
                "string" == typeof e)) {
                    if ("undefined" == typeof t[e])
                        throw new TypeError('No method named "' + e + '"');
                    t[e]()
                }
            }
            ))
        }
        ,
        o.getInstance = function(e) {
            return k(e, Ki)
        }
        ,
        t(o, null, [{
            key: "VERSION",
            get: function() {
                return "3.2.2"
            }
        }, {
            key: "Default",
            get: function() {
                return Ji
            }
        }, {
            key: "NAME",
            get: function() {
                return zi
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return Ki
            }
        }, {
            key: "Event",
            get: function() {
                return eo
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return $i
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Zi
            }
        }]),
        o
    }(Qi)
      , no = L();
    if (no) {
        var io = no.fn.popover;
        no.fn.popover = to.jQueryInterface,
        no.fn.popover.Constructor = to,
        no.fn.popover.noConflict = function() {
            return no.fn.popover = io,
            to.jQueryInterface
        }
    }
    var oo = "scrollspy"
      , ro = "coreui.scrollspy"
      , so = "." + ro
      , ao = {
        offset: 10,
        method: "auto",
        target: ""
    }
      , lo = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }
      , co = "dropdown-item"
      , uo = "active"
      , fo = ".nav-link"
      , ho = "position"
      , po = function() {
        function e(e, t) {
            var n = this;
            this._element = e,
            this._scrollElement = "BODY" === e.tagName ? window : e,
            this._config = this._getConfig(t),
            this._selector = this._config.target + " " + ".nav-link, " + this._config.target + " " + ".list-group-item, " + this._config.target + " ." + co,
            this._offsets = [],
            this._targets = [],
            this._activeTarget = null,
            this._scrollHeight = 0,
            F.on(this._scrollElement, "scroll.coreui.scrollspy", (function(e) {
                return n._process(e)
            }
            )),
            this.refresh(),
            this._process(),
            O(e, ro, this)
        }
        var n = e.prototype;
        return n.refresh = function() {
            var e = this
              , t = this._scrollElement === this._scrollElement.window ? "offset" : ho
              , n = "auto" === this._config.method ? t : this._config.method
              , i = n === ho ? this._getScrollTop() : 0;
            this._offsets = [],
            this._targets = [],
            this._scrollHeight = this._getScrollHeight(),
            ae.find(this._selector).map((function(e) {
                var t = h(e)
                  , o = t ? ae.findOne(t) : null;
                if (o) {
                    var r = o.getBoundingClientRect();
                    if (r.width || r.height)
                        return [ye[n](o).top + i, t]
                }
                return null
            }
            )).filter((function(e) {
                return e
            }
            )).sort((function(e, t) {
                return e[0] - t[0]
            }
            )).forEach((function(t) {
                e._offsets.push(t[0]),
                e._targets.push(t[1])
            }
            ))
        }
        ,
        n.dispose = function() {
            C(this._element, ro),
            F.off(this._scrollElement, so),
            this._element = null,
            this._scrollElement = null,
            this._config = null,
            this._selector = null,
            this._offsets = null,
            this._targets = null,
            this._activeTarget = null,
            this._scrollHeight = null
        }
        ,
        n._getConfig = function(e) {
            if ("string" != typeof (e = o(o({}, ao), "object" == typeof e && e ? e : {})).target && m(e.target)) {
                var t = e.target.id;
                t || (t = u(oo),
                e.target.id = t),
                e.target = "#" + t
            }
            return _(oo, e, lo),
            e
        }
        ,
        n._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        ,
        n._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        ,
        n._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        ,
        n._process = function() {
            var e = this._getScrollTop() + this._config.offset
              , t = this._getScrollHeight()
              , n = this._config.offset + t - this._getOffsetHeight();
            if (this._scrollHeight !== t && this.refresh(),
            e >= n) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i)
            } else {
                if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0)
                    return this._activeTarget = null,
                    void this._clear();
                for (var o = this._offsets.length; o--; ) {
                    this._activeTarget !== this._targets[o] && e >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || e < this._offsets[o + 1]) && this._activate(this._targets[o])
                }
            }
        }
        ,
        n._activate = function(e) {
            this._activeTarget = e,
            this._clear();
            var t = this._selector.split(",").map((function(t) {
                return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
            }
            ))
              , n = ae.findOne(t.join(","));
            n.classList.contains(co) ? (ae.findOne(".dropdown-toggle", n.closest(".dropdown")).classList.add(uo),
            n.classList.add(uo)) : (n.classList.add(uo),
            ae.parents(n, ".nav, .list-group").forEach((function(e) {
                ae.prev(e, ".nav-link, .list-group-item").forEach((function(e) {
                    return e.classList.add(uo)
                }
                )),
                ae.prev(e, ".nav-item").forEach((function(e) {
                    ae.children(e, fo).forEach((function(e) {
                        return e.classList.add(uo)
                    }
                    ))
                }
                ))
            }
            ))),
            F.trigger(this._scrollElement, "activate.coreui.scrollspy", {
                relatedTarget: e
            })
        }
        ,
        n._clear = function() {
            ae.find(this._selector).filter((function(e) {
                return e.classList.contains(uo)
            }
            )).forEach((function(e) {
                return e.classList.remove(uo)
            }
            ))
        }
        ,
        e.jQueryInterface = function(t) {
            return this.each((function() {
                var n = k(this, ro);
                if (n || (n = new e(this,"object" == typeof t && t)),
                "string" == typeof t) {
                    if ("undefined" == typeof n[t])
                        throw new TypeError('No method named "' + t + '"');
                    n[t]()
                }
            }
            ))
        }
        ,
        e.getInstance = function(e) {
            return k(e, ro)
        }
        ,
        t(e, null, [{
            key: "VERSION",
            get: function() {
                return "3.2.2"
            }
        }, {
            key: "Default",
            get: function() {
                return ao
            }
        }]),
        e
    }();
    F.on(window, "load.coreui.scrollspy.data-api", (function() {
        ae.find('[data-spy="scroll"]').forEach((function(e) {
            return new po(e,ye.getDataAttributes(e))
        }
        ))
    }
    ));
    var go = L();
    if (go) {
        var mo = go.fn[oo];
        go.fn[oo] = po.jQueryInterface,
        go.fn[oo].Constructor = po,
        go.fn[oo].noConflict = function() {
            return go.fn[oo] = mo,
            po.jQueryInterface
        }
    }
    /*!
   * perfect-scrollbar v1.5.0
   * Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
   * Licensed under MIT
   */
    function vo(e) {
        return getComputedStyle(e)
    }
    function _o(e, t) {
        for (var n in t) {
            var i = t[n];
            "number" == typeof i && (i += "px"),
            e.style[n] = i
        }
        return e
    }
    function yo(e) {
        var t = document.createElement("div");
        return t.className = e,
        t
    }
    var bo = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);
    function wo(e, t) {
        if (!bo)
            throw new Error("No element matching method supported");
        return bo.call(e, t)
    }
    function Eo(e) {
        e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e)
    }
    function Lo(e, t) {
        return Array.prototype.filter.call(e.children, (function(e) {
            return wo(e, t)
        }
        ))
    }
    var To = "ps"
      , Oo = "ps__rtl"
      , ko = {
        thumb: function(e) {
            return "ps__thumb-" + e
        },
        rail: function(e) {
            return "ps__rail-" + e
        },
        consuming: "ps__child--consume"
    }
      , Co = {
        focus: "ps--focus",
        clicking: "ps--clicking",
        active: function(e) {
            return "ps--active-" + e
        },
        scrolling: function(e) {
            return "ps--scrolling-" + e
        }
    }
      , So = {
        x: null,
        y: null
    };
    function Ao(e, t) {
        var n = e.element.classList
          , i = Co.scrolling(t);
        n.contains(i) ? clearTimeout(So[t]) : n.add(i)
    }
    function xo(e, t) {
        So[t] = setTimeout((function() {
            return e.isAlive && e.element.classList.remove(Co.scrolling(t))
        }
        ), e.settings.scrollingThreshold)
    }
    var Do = function(e) {
        this.element = e,
        this.handlers = {}
    }
      , jo = {
        isEmpty: {
            configurable: !0
        }
    };
    Do.prototype.bind = function(e, t) {
        "undefined" == typeof this.handlers[e] && (this.handlers[e] = []),
        this.handlers[e].push(t),
        this.element.addEventListener(e, t, !1)
    }
    ,
    Do.prototype.unbind = function(e, t) {
        var n = this;
        this.handlers[e] = this.handlers[e].filter((function(i) {
            return !(!t || i === t) || (n.element.removeEventListener(e, i, !1),
            !1)
        }
        ))
    }
    ,
    Do.prototype.unbindAll = function() {
        for (var e in this.handlers)
            this.unbind(e)
    }
    ,
    jo.isEmpty.get = function() {
        var e = this;
        return Object.keys(this.handlers).every((function(t) {
            return 0 === e.handlers[t].length
        }
        ))
    }
    ,
    Object.defineProperties(Do.prototype, jo);
    var No = function() {
        this.eventElements = []
    };
    function Io(e) {
        if ("function" == typeof window.CustomEvent)
            return new CustomEvent(e);
        var t = document.createEvent("CustomEvent");
        return t.initCustomEvent(e, !1, !1, void 0),
        t
    }
    function Po(e, t, n, i, o) {
        var r;
        if (void 0 === i && (i = !0),
        void 0 === o && (o = !1),
        "top" === t)
            r = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
        else {
            if ("left" !== t)
                throw new Error("A proper axis should be provided");
            r = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"]
        }
        !function(e, t, n, i, o) {
            var r = n[0]
              , s = n[1]
              , a = n[2]
              , l = n[3]
              , c = n[4]
              , u = n[5];
            void 0 === i && (i = !0);
            void 0 === o && (o = !1);
            var f = e.element;
            e.reach[l] = null,
            f[a] < 1 && (e.reach[l] = "start");
            f[a] > e[r] - e[s] - 1 && (e.reach[l] = "end");
            t && (f.dispatchEvent(Io("ps-scroll-" + l)),
            t < 0 ? f.dispatchEvent(Io("ps-scroll-" + c)) : t > 0 && f.dispatchEvent(Io("ps-scroll-" + u)),
            i && function(e, t) {
                Ao(e, t),
                xo(e, t)
            }(e, l));
            e.reach[l] && (t || o) && f.dispatchEvent(Io("ps-" + l + "-reach-" + e.reach[l]))
        }(e, n, r, i, o)
    }
    function Mo(e) {
        return parseInt(e, 10) || 0
    }
    No.prototype.eventElement = function(e) {
        var t = this.eventElements.filter((function(t) {
            return t.element === e
        }
        ))[0];
        return t || (t = new Do(e),
        this.eventElements.push(t)),
        t
    }
    ,
    No.prototype.bind = function(e, t, n) {
        this.eventElement(e).bind(t, n)
    }
    ,
    No.prototype.unbind = function(e, t, n) {
        var i = this.eventElement(e);
        i.unbind(t, n),
        i.isEmpty && this.eventElements.splice(this.eventElements.indexOf(i), 1)
    }
    ,
    No.prototype.unbindAll = function() {
        this.eventElements.forEach((function(e) {
            return e.unbindAll()
        }
        )),
        this.eventElements = []
    }
    ,
    No.prototype.once = function(e, t, n) {
        var i = this.eventElement(e)
          , o = function(e) {
            i.unbind(t, o),
            n(e)
        };
        i.bind(t, o)
    }
    ;
    var Ro = {
        isWebKit: "undefined" != typeof document && "WebkitAppearance"in document.documentElement.style,
        supportsTouch: "undefined" != typeof window && ("ontouchstart"in window || "maxTouchPoints"in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch),
        supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
        isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
    };
    function Ho(e) {
        var t = e.element
          , n = Math.floor(t.scrollTop)
          , i = t.getBoundingClientRect();
        e.containerWidth = Math.ceil(i.width),
        e.containerHeight = Math.ceil(i.height),
        e.contentWidth = t.scrollWidth,
        e.contentHeight = t.scrollHeight,
        t.contains(e.scrollbarXRail) || (Lo(t, ko.rail("x")).forEach((function(e) {
            return Eo(e)
        }
        )),
        t.appendChild(e.scrollbarXRail)),
        t.contains(e.scrollbarYRail) || (Lo(t, ko.rail("y")).forEach((function(e) {
            return Eo(e)
        }
        )),
        t.appendChild(e.scrollbarYRail)),
        !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0,
        e.railXWidth = e.containerWidth - e.railXMarginWidth,
        e.railXRatio = e.containerWidth / e.railXWidth,
        e.scrollbarXWidth = Wo(e, Mo(e.railXWidth * e.containerWidth / e.contentWidth)),
        e.scrollbarXLeft = Mo((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1,
        !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0,
        e.railYHeight = e.containerHeight - e.railYMarginHeight,
        e.railYRatio = e.containerHeight / e.railYHeight,
        e.scrollbarYHeight = Wo(e, Mo(e.railYHeight * e.containerHeight / e.contentHeight)),
        e.scrollbarYTop = Mo(n * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1,
        e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth),
        e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight),
        function(e, t) {
            var n = {
                width: t.railXWidth
            }
              , i = Math.floor(e.scrollTop);
            t.isRtl ? n.left = t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth - t.contentWidth : n.left = e.scrollLeft;
            t.isScrollbarXUsingBottom ? n.bottom = t.scrollbarXBottom - i : n.top = t.scrollbarXTop + i;
            _o(t.scrollbarXRail, n);
            var o = {
                top: i,
                height: t.railYHeight
            };
            t.isScrollbarYUsingRight ? t.isRtl ? o.right = t.contentWidth - (t.negativeScrollAdjustment + e.scrollLeft) - t.scrollbarYRight - t.scrollbarYOuterWidth - 9 : o.right = t.scrollbarYRight - e.scrollLeft : t.isRtl ? o.left = t.negativeScrollAdjustment + e.scrollLeft + 2 * t.containerWidth - t.contentWidth - t.scrollbarYLeft - t.scrollbarYOuterWidth : o.left = t.scrollbarYLeft + e.scrollLeft;
            _o(t.scrollbarYRail, o),
            _o(t.scrollbarX, {
                left: t.scrollbarXLeft,
                width: t.scrollbarXWidth - t.railBorderXWidth
            }),
            _o(t.scrollbarY, {
                top: t.scrollbarYTop,
                height: t.scrollbarYHeight - t.railBorderYWidth
            })
        }(t, e),
        e.scrollbarXActive ? t.classList.add(Co.active("x")) : (t.classList.remove(Co.active("x")),
        e.scrollbarXWidth = 0,
        e.scrollbarXLeft = 0,
        t.scrollLeft = !0 === e.isRtl ? e.contentWidth : 0),
        e.scrollbarYActive ? t.classList.add(Co.active("y")) : (t.classList.remove(Co.active("y")),
        e.scrollbarYHeight = 0,
        e.scrollbarYTop = 0,
        t.scrollTop = 0)
    }
    function Wo(e, t) {
        return e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)),
        e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)),
        t
    }
    function Yo(e, t) {
        var n = t[0]
          , i = t[1]
          , o = t[2]
          , r = t[3]
          , s = t[4]
          , a = t[5]
          , l = t[6]
          , c = t[7]
          , u = t[8]
          , f = e.element
          , h = null
          , d = null
          , p = null;
        function g(t) {
            t.touches && t.touches[0] && (t[o] = t.touches[0].pageY),
            f[l] = h + p * (t[o] - d),
            Ao(e, c),
            Ho(e),
            t.stopPropagation(),
            t.preventDefault()
        }
        function m() {
            xo(e, c),
            e[u].classList.remove(Co.clicking),
            e.event.unbind(e.ownerDocument, "mousemove", g)
        }
        function v(t, s) {
            h = f[l],
            s && t.touches && (t[o] = t.touches[0].pageY),
            d = t[o],
            p = (e[i] - e[n]) / (e[r] - e[a]),
            s ? e.event.bind(e.ownerDocument, "touchmove", g) : (e.event.bind(e.ownerDocument, "mousemove", g),
            e.event.once(e.ownerDocument, "mouseup", m),
            t.preventDefault()),
            e[u].classList.add(Co.clicking),
            t.stopPropagation()
        }
        e.event.bind(e[s], "mousedown", (function(e) {
            v(e)
        }
        )),
        e.event.bind(e[s], "touchstart", (function(e) {
            v(e, !0)
        }
        ))
    }
    var Bo = {
        "click-rail": function(e) {
            e.element,
            e.event.bind(e.scrollbarY, "mousedown", (function(e) {
                return e.stopPropagation()
            }
            )),
            e.event.bind(e.scrollbarYRail, "mousedown", (function(t) {
                var n = t.pageY - window.pageYOffset - e.scrollbarYRail.getBoundingClientRect().top > e.scrollbarYTop ? 1 : -1;
                e.element.scrollTop += n * e.containerHeight,
                Ho(e),
                t.stopPropagation()
            }
            )),
            e.event.bind(e.scrollbarX, "mousedown", (function(e) {
                return e.stopPropagation()
            }
            )),
            e.event.bind(e.scrollbarXRail, "mousedown", (function(t) {
                var n = t.pageX - window.pageXOffset - e.scrollbarXRail.getBoundingClientRect().left > e.scrollbarXLeft ? 1 : -1;
                e.element.scrollLeft += n * e.containerWidth,
                Ho(e),
                t.stopPropagation()
            }
            ))
        },
        "drag-thumb": function(e) {
            Yo(e, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]),
            Yo(e, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"])
        },
        keyboard: function(e) {
            var t = e.element;
            e.event.bind(e.ownerDocument, "keydown", (function(n) {
                if (!(n.isDefaultPrevented && n.isDefaultPrevented() || n.defaultPrevented) && (wo(t, ":hover") || wo(e.scrollbarX, ":focus") || wo(e.scrollbarY, ":focus"))) {
                    var i, o = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
                    if (o) {
                        if ("IFRAME" === o.tagName)
                            o = o.contentDocument.activeElement;
                        else
                            for (; o.shadowRoot; )
                                o = o.shadowRoot.activeElement;
                        if (wo(i = o, "input,[contenteditable]") || wo(i, "select,[contenteditable]") || wo(i, "textarea,[contenteditable]") || wo(i, "button,[contenteditable]"))
                            return
                    }
                    var r = 0
                      , s = 0;
                    switch (n.which) {
                    case 37:
                        r = n.metaKey ? -e.contentWidth : n.altKey ? -e.containerWidth : -30;
                        break;
                    case 38:
                        s = n.metaKey ? e.contentHeight : n.altKey ? e.containerHeight : 30;
                        break;
                    case 39:
                        r = n.metaKey ? e.contentWidth : n.altKey ? e.containerWidth : 30;
                        break;
                    case 40:
                        s = n.metaKey ? -e.contentHeight : n.altKey ? -e.containerHeight : -30;
                        break;
                    case 32:
                        s = n.shiftKey ? e.containerHeight : -e.containerHeight;
                        break;
                    case 33:
                        s = e.containerHeight;
                        break;
                    case 34:
                        s = -e.containerHeight;
                        break;
                    case 36:
                        s = e.contentHeight;
                        break;
                    case 35:
                        s = -e.contentHeight;
                        break;
                    default:
                        return
                    }
                    e.settings.suppressScrollX && 0 !== r || e.settings.suppressScrollY && 0 !== s || (t.scrollTop -= s,
                    t.scrollLeft += r,
                    Ho(e),
                    function(n, i) {
                        var o = Math.floor(t.scrollTop);
                        if (0 === n) {
                            if (!e.scrollbarYActive)
                                return !1;
                            if (0 === o && i > 0 || o >= e.contentHeight - e.containerHeight && i < 0)
                                return !e.settings.wheelPropagation
                        }
                        var r = t.scrollLeft;
                        if (0 === i) {
                            if (!e.scrollbarXActive)
                                return !1;
                            if (0 === r && n < 0 || r >= e.contentWidth - e.containerWidth && n > 0)
                                return !e.settings.wheelPropagation
                        }
                        return !0
                    }(r, s) && n.preventDefault())
                }
            }
            ))
        },
        wheel: function(e) {
            var t = e.element;
            function n(n) {
                var i = function(e) {
                    var t = e.deltaX
                      , n = -1 * e.deltaY;
                    return "undefined" != typeof t && "undefined" != typeof n || (t = -1 * e.wheelDeltaX / 6,
                    n = e.wheelDeltaY / 6),
                    e.deltaMode && 1 === e.deltaMode && (t *= 10,
                    n *= 10),
                    t != t && n != n && (t = 0,
                    n = e.wheelDelta),
                    e.shiftKey ? [-n, -t] : [t, n]
                }(n)
                  , o = i[0]
                  , r = i[1];
                if (!function(e, n, i) {
                    if (!Ro.isWebKit && t.querySelector("select:focus"))
                        return !0;
                    if (!t.contains(e))
                        return !1;
                    for (var o = e; o && o !== t; ) {
                        if (o.classList.contains(ko.consuming))
                            return !0;
                        var r = vo(o);
                        if (i && r.overflowY.match(/(scroll|auto)/)) {
                            var s = o.scrollHeight - o.clientHeight;
                            if (s > 0 && (o.scrollTop > 0 && i < 0 || o.scrollTop < s && i > 0))
                                return !0
                        }
                        if (n && r.overflowX.match(/(scroll|auto)/)) {
                            var a = o.scrollWidth - o.clientWidth;
                            if (a > 0 && (o.scrollLeft > 0 && n < 0 || o.scrollLeft < a && n > 0))
                                return !0
                        }
                        o = o.parentNode
                    }
                    return !1
                }(n.target, o, r)) {
                    var s = !1;
                    e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (r ? t.scrollTop -= r * e.settings.wheelSpeed : t.scrollTop += o * e.settings.wheelSpeed,
                    s = !0) : e.scrollbarXActive && !e.scrollbarYActive && (o ? t.scrollLeft += o * e.settings.wheelSpeed : t.scrollLeft -= r * e.settings.wheelSpeed,
                    s = !0) : (t.scrollTop -= r * e.settings.wheelSpeed,
                    t.scrollLeft += o * e.settings.wheelSpeed),
                    Ho(e),
                    (s = s || function(n, i) {
                        var o = Math.floor(t.scrollTop)
                          , r = 0 === t.scrollTop
                          , s = o + t.offsetHeight === t.scrollHeight
                          , a = 0 === t.scrollLeft
                          , l = t.scrollLeft + t.offsetWidth === t.scrollWidth;
                        return !(Math.abs(i) > Math.abs(n) ? r || s : a || l) || !e.settings.wheelPropagation
                    }(o, r)) && !n.ctrlKey && (n.stopPropagation(),
                    n.preventDefault())
                }
            }
            "undefined" != typeof window.onwheel ? e.event.bind(t, "wheel", n) : "undefined" != typeof window.onmousewheel && e.event.bind(t, "mousewheel", n)
        },
        touch: function(e) {
            if (Ro.supportsTouch || Ro.supportsIePointer) {
                var t = e.element
                  , n = {}
                  , i = 0
                  , o = {}
                  , r = null;
                Ro.supportsTouch ? (e.event.bind(t, "touchstart", c),
                e.event.bind(t, "touchmove", u),
                e.event.bind(t, "touchend", f)) : Ro.supportsIePointer && (window.PointerEvent ? (e.event.bind(t, "pointerdown", c),
                e.event.bind(t, "pointermove", u),
                e.event.bind(t, "pointerup", f)) : window.MSPointerEvent && (e.event.bind(t, "MSPointerDown", c),
                e.event.bind(t, "MSPointerMove", u),
                e.event.bind(t, "MSPointerUp", f)))
            }
            function s(n, i) {
                t.scrollTop -= i,
                t.scrollLeft -= n,
                Ho(e)
            }
            function a(e) {
                return e.targetTouches ? e.targetTouches[0] : e
            }
            function l(e) {
                return (!e.pointerType || "pen" !== e.pointerType || 0 !== e.buttons) && (!(!e.targetTouches || 1 !== e.targetTouches.length) || !(!e.pointerType || "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE))
            }
            function c(e) {
                if (l(e)) {
                    var t = a(e);
                    n.pageX = t.pageX,
                    n.pageY = t.pageY,
                    i = (new Date).getTime(),
                    null !== r && clearInterval(r)
                }
            }
            function u(r) {
                if (l(r)) {
                    var c = a(r)
                      , u = {
                        pageX: c.pageX,
                        pageY: c.pageY
                    }
                      , f = u.pageX - n.pageX
                      , h = u.pageY - n.pageY;
                    if (function(e, n, i) {
                        if (!t.contains(e))
                            return !1;
                        for (var o = e; o && o !== t; ) {
                            if (o.classList.contains(ko.consuming))
                                return !0;
                            var r = vo(o);
                            if (i && r.overflowY.match(/(scroll|auto)/)) {
                                var s = o.scrollHeight - o.clientHeight;
                                if (s > 0 && (o.scrollTop > 0 && i < 0 || o.scrollTop < s && i > 0))
                                    return !0
                            }
                            if (n && r.overflowX.match(/(scroll|auto)/)) {
                                var a = o.scrollWidth - o.clientWidth;
                                if (a > 0 && (o.scrollLeft > 0 && n < 0 || o.scrollLeft < a && n > 0))
                                    return !0
                            }
                            o = o.parentNode
                        }
                        return !1
                    }(r.target, f, h))
                        return;
                    s(f, h),
                    n = u;
                    var d = (new Date).getTime()
                      , p = d - i;
                    p > 0 && (o.x = f / p,
                    o.y = h / p,
                    i = d),
                    function(n, i) {
                        var o = Math.floor(t.scrollTop)
                          , r = t.scrollLeft
                          , s = Math.abs(n)
                          , a = Math.abs(i);
                        if (a > s) {
                            if (i < 0 && o === e.contentHeight - e.containerHeight || i > 0 && 0 === o)
                                return 0 === window.scrollY && i > 0 && Ro.isChrome
                        } else if (s > a && (n < 0 && r === e.contentWidth - e.containerWidth || n > 0 && 0 === r))
                            return !0;
                        return !0
                    }(f, h) && r.preventDefault()
                }
            }
            function f() {
                e.settings.swipeEasing && (clearInterval(r),
                r = setInterval((function() {
                    e.isInitialized ? clearInterval(r) : o.x || o.y ? Math.abs(o.x) < .01 && Math.abs(o.y) < .01 ? clearInterval(r) : (s(30 * o.x, 30 * o.y),
                    o.x *= .8,
                    o.y *= .8) : clearInterval(r)
                }
                ), 10))
            }
        }
    }
      , Xo = function(e, t) {
        var n = this;
        if (void 0 === t && (t = {}),
        "string" == typeof e && (e = document.querySelector(e)),
        !e || !e.nodeName)
            throw new Error("no element is specified to initialize PerfectScrollbar");
        for (var i in this.element = e,
        e.classList.add(To),
        this.settings = {
            handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
            maxScrollbarLength: null,
            minScrollbarLength: null,
            scrollingThreshold: 1e3,
            scrollXMarginOffset: 0,
            scrollYMarginOffset: 0,
            suppressScrollX: !1,
            suppressScrollY: !1,
            swipeEasing: !0,
            useBothWheelAxes: !1,
            wheelPropagation: !0,
            wheelSpeed: 1
        },
        t)
            this.settings[i] = t[i];
        this.containerWidth = null,
        this.containerHeight = null,
        this.contentWidth = null,
        this.contentHeight = null;
        var o, r, s = function() {
            return e.classList.add(Co.focus)
        }, a = function() {
            return e.classList.remove(Co.focus)
        };
        this.isRtl = "rtl" === vo(e).direction,
        !0 === this.isRtl && e.classList.add(Oo),
        this.isNegativeScroll = (r = e.scrollLeft,
        e.scrollLeft = -1,
        o = e.scrollLeft < 0,
        e.scrollLeft = r,
        o),
        this.negativeScrollAdjustment = this.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0,
        this.event = new No,
        this.ownerDocument = e.ownerDocument || document,
        this.scrollbarXRail = yo(ko.rail("x")),
        e.appendChild(this.scrollbarXRail),
        this.scrollbarX = yo(ko.thumb("x")),
        this.scrollbarXRail.appendChild(this.scrollbarX),
        this.scrollbarX.setAttribute("tabindex", 0),
        this.event.bind(this.scrollbarX, "focus", s),
        this.event.bind(this.scrollbarX, "blur", a),
        this.scrollbarXActive = null,
        this.scrollbarXWidth = null,
        this.scrollbarXLeft = null;
        var l = vo(this.scrollbarXRail);
        this.scrollbarXBottom = parseInt(l.bottom, 10),
        isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1,
        this.scrollbarXTop = Mo(l.top)) : this.isScrollbarXUsingBottom = !0,
        this.railBorderXWidth = Mo(l.borderLeftWidth) + Mo(l.borderRightWidth),
        _o(this.scrollbarXRail, {
            display: "block"
        }),
        this.railXMarginWidth = Mo(l.marginLeft) + Mo(l.marginRight),
        _o(this.scrollbarXRail, {
            display: ""
        }),
        this.railXWidth = null,
        this.railXRatio = null,
        this.scrollbarYRail = yo(ko.rail("y")),
        e.appendChild(this.scrollbarYRail),
        this.scrollbarY = yo(ko.thumb("y")),
        this.scrollbarYRail.appendChild(this.scrollbarY),
        this.scrollbarY.setAttribute("tabindex", 0),
        this.event.bind(this.scrollbarY, "focus", s),
        this.event.bind(this.scrollbarY, "blur", a),
        this.scrollbarYActive = null,
        this.scrollbarYHeight = null,
        this.scrollbarYTop = null;
        var c = vo(this.scrollbarYRail);
        this.scrollbarYRight = parseInt(c.right, 10),
        isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1,
        this.scrollbarYLeft = Mo(c.left)) : this.isScrollbarYUsingRight = !0,
        this.scrollbarYOuterWidth = this.isRtl ? function(e) {
            var t = vo(e);
            return Mo(t.width) + Mo(t.paddingLeft) + Mo(t.paddingRight) + Mo(t.borderLeftWidth) + Mo(t.borderRightWidth)
        }(this.scrollbarY) : null,
        this.railBorderYWidth = Mo(c.borderTopWidth) + Mo(c.borderBottomWidth),
        _o(this.scrollbarYRail, {
            display: "block"
        }),
        this.railYMarginHeight = Mo(c.marginTop) + Mo(c.marginBottom),
        _o(this.scrollbarYRail, {
            display: ""
        }),
        this.railYHeight = null,
        this.railYRatio = null,
        this.reach = {
            x: e.scrollLeft <= 0 ? "start" : e.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
            y: e.scrollTop <= 0 ? "start" : e.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
        },
        this.isAlive = !0,
        this.settings.handlers.forEach((function(e) {
            return Bo[e](n)
        }
        )),
        this.lastScrollTop = Math.floor(e.scrollTop),
        this.lastScrollLeft = e.scrollLeft,
        this.event.bind(this.element, "scroll", (function(e) {
            return n.onScroll(e)
        }
        )),
        Ho(this)
    };
    Xo.prototype.update = function() {
        this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0,
        _o(this.scrollbarXRail, {
            display: "block"
        }),
        _o(this.scrollbarYRail, {
            display: "block"
        }),
        this.railXMarginWidth = Mo(vo(this.scrollbarXRail).marginLeft) + Mo(vo(this.scrollbarXRail).marginRight),
        this.railYMarginHeight = Mo(vo(this.scrollbarYRail).marginTop) + Mo(vo(this.scrollbarYRail).marginBottom),
        _o(this.scrollbarXRail, {
            display: "none"
        }),
        _o(this.scrollbarYRail, {
            display: "none"
        }),
        Ho(this),
        Po(this, "top", 0, !1, !0),
        Po(this, "left", 0, !1, !0),
        _o(this.scrollbarXRail, {
            display: ""
        }),
        _o(this.scrollbarYRail, {
            display: ""
        }))
    }
    ,
    Xo.prototype.onScroll = function(e) {
        this.isAlive && (Ho(this),
        Po(this, "top", this.element.scrollTop - this.lastScrollTop),
        Po(this, "left", this.element.scrollLeft - this.lastScrollLeft),
        this.lastScrollTop = Math.floor(this.element.scrollTop),
        this.lastScrollLeft = this.element.scrollLeft)
    }
    ,
    Xo.prototype.destroy = function() {
        this.isAlive && (this.event.unbindAll(),
        Eo(this.scrollbarX),
        Eo(this.scrollbarY),
        Eo(this.scrollbarXRail),
        Eo(this.scrollbarYRail),
        this.removePsClasses(),
        this.element = null,
        this.scrollbarX = null,
        this.scrollbarY = null,
        this.scrollbarXRail = null,
        this.scrollbarYRail = null,
        this.isAlive = !1)
    }
    ,
    Xo.prototype.removePsClasses = function() {
        this.element.className = this.element.className.split(" ").filter((function(e) {
            return !e.match(/^ps([-_].+|)$/)
        }
        )).join(" ")
    }
    ;
    var Uo = "sidebar"
      , qo = "coreui.sidebar"
      , Qo = {
        activeLinksExact: !0,
        breakpoints: {
            xs: "c-sidebar-show",
            sm: "c-sidebar-sm-show",
            md: "c-sidebar-md-show",
            lg: "c-sidebar-lg-show",
            xl: "c-sidebar-xl-show",
            xxl: "c-sidebar-xxl-show"
        },
        dropdownAccordion: !0
    }
      , Fo = {
        activeLinksExact: "boolean",
        breakpoints: "object",
        dropdownAccordion: "(string|boolean)"
    }
      , Vo = "c-active"
      , zo = "c-sidebar-nav-dropdown"
      , Ko = "c-show"
      , $o = "c-sidebar-minimized"
      , Go = "c-sidebar-unfoldable"
      , Jo = "click.coreui.sidebar.data-api"
      , Zo = ".c-sidebar-nav-dropdown-toggle"
      , er = ".c-sidebar-nav-dropdown"
      , tr = ".c-sidebar-nav-link"
      , nr = ".c-sidebar-nav"
      , ir = ".c-sidebar"
      , or = function() {
        function e(e, t) {
            if ("undefined" == typeof Xo)
                throw new TypeError("CoreUI's sidebar require Perfect Scrollbar");
            this._element = e,
            this._config = this._getConfig(t),
            this._open = this._isVisible(),
            this._mobile = this._isMobile(),
            this._overlaid = this._isOverlaid(),
            this._minimize = this._isMinimized(),
            this._unfoldable = this._isUnfoldable(),
            this._setActiveLink(),
            this._ps = null,
            this._backdrop = null,
            this._psInit(),
            this._addEventListeners(),
            O(e, qo, this)
        }
        var n = e.prototype;
        return n.open = function(e) {
            var t = this;
            F.trigger(this._element, "open.coreui.sidebar"),
            this._isMobile() ? (this._addClassName(this._firstBreakpointClassName()),
            this._showBackdrop(),
            F.one(this._element, c, (function() {
                t._addClickOutListener()
            }
            ))) : e ? (this._addClassName(this._getBreakpointClassName(e)),
            this._isOverlaid() && F.one(this._element, c, (function() {
                t._addClickOutListener()
            }
            ))) : (this._addClassName(this._firstBreakpointClassName()),
            this._isOverlaid() && F.one(this._element, c, (function() {
                t._addClickOutListener()
            }
            )));
            var n = p(this._element);
            F.one(this._element, c, (function() {
                !0 === t._isVisible() && (t._open = !0,
                F.trigger(t._element, "opened.coreui.sidebar"))
            }
            )),
            v(this._element, n)
        }
        ,
        n.close = function(e) {
            var t = this;
            F.trigger(this._element, "close.coreui.sidebar"),
            this._isMobile() ? (this._element.classList.remove(this._firstBreakpointClassName()),
            this._removeBackdrop(),
            this._removeClickOutListener()) : e ? (this._element.classList.remove(this._getBreakpointClassName(e)),
            this._isOverlaid() && this._removeClickOutListener()) : (this._element.classList.remove(this._firstBreakpointClassName()),
            this._isOverlaid() && this._removeClickOutListener());
            var n = p(this._element);
            F.one(this._element, c, (function() {
                !1 === t._isVisible() && (t._open = !1,
                F.trigger(t._element, "closed.coreui.sidebar"))
            }
            )),
            v(this._element, n)
        }
        ,
        n.toggle = function(e) {
            this._open ? this.close(e) : this.open(e)
        }
        ,
        n.minimize = function() {
            this._isMobile() || (this._addClassName($o),
            this._minimize = !0,
            this._psDestroy())
        }
        ,
        n.unfoldable = function() {
            this._isMobile() || (this._addClassName(Go),
            this._unfoldable = !0)
        }
        ,
        n.reset = function() {
            this._element.classList.contains($o) && (this._element.classList.remove($o),
            this._minimize = !1,
            F.one(this._element, c, this._psInit())),
            this._element.classList.contains(Go) && (this._element.classList.remove(Go),
            this._unfoldable = !1)
        }
        ,
        n._getConfig = function(e) {
            return e = o(o(o({}, this.constructor.Default), ye.getDataAttributes(this._element)), e),
            _(Uo, e, this.constructor.DefaultType),
            e
        }
        ,
        n._isMobile = function() {
            return Boolean(window.getComputedStyle(this._element, null).getPropertyValue("--is-mobile"))
        }
        ,
        n._isIOS = function() {
            var e = ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"];
            if (Boolean(navigator.platform))
                for (; e.length; )
                    if (navigator.platform === e.pop())
                        return !0;
            return !1
        }
        ,
        n._isMinimized = function() {
            return this._element.classList.contains($o)
        }
        ,
        n._isOverlaid = function() {
            return this._element.classList.contains("c-sidebar-overlaid")
        }
        ,
        n._isUnfoldable = function() {
            return this._element.classList.contains(Go)
        }
        ,
        n._isVisible = function() {
            var e = this._element.getBoundingClientRect();
            return e.top >= 0 && e.left >= 0 && e.bottom <= (window.innerHeight || document.documentElement.clientHeight) && e.right <= (window.innerWidth || document.documentElement.clientWidth)
        }
        ,
        n._addClassName = function(e) {
            this._element.classList.add(e)
        }
        ,
        n._firstBreakpointClassName = function() {
            return Object.keys(Qo.breakpoints).map((function(e) {
                return Qo.breakpoints[e]
            }
            ))[0]
        }
        ,
        n._getBreakpointClassName = function(e) {
            return Qo.breakpoints[e]
        }
        ,
        n._removeBackdrop = function() {
            this._backdrop && (this._backdrop.parentNode.removeChild(this._backdrop),
            this._backdrop = null)
        }
        ,
        n._showBackdrop = function() {
            this._backdrop || (this._backdrop = document.createElement("div"),
            this._backdrop.className = "c-sidebar-backdrop",
            this._backdrop.classList.add("c-fade"),
            document.body.appendChild(this._backdrop),
            E(this._backdrop),
            this._backdrop.classList.add(Ko))
        }
        ,
        n._clickOutListener = function(e, t) {
            null === e.target.closest(ir) && (e.preventDefault(),
            e.stopPropagation(),
            t.close())
        }
        ,
        n._addClickOutListener = function() {
            var e = this;
            F.on(document, Jo, (function(t) {
                e._clickOutListener(t, e)
            }
            ))
        }
        ,
        n._removeClickOutListener = function() {
            F.off(document, Jo)
        }
        ,
        n._getAllSiblings = function(e, t) {
            var n = [];
            e = e.parentNode.firstChild;
            do {
                3 !== e.nodeType && 8 !== e.nodeType && (t && !t(e) || n.push(e))
            } while (e = e.nextSibling);return n
        }
        ,
        n._toggleDropdown = function(e, t) {
            var n = e.target;
            n.classList.contains("c-sidebar-nav-dropdown-toggle") || (n = n.closest(Zo));
            var i = n.closest(nr).dataset;
            "undefined" != typeof i.dropdownAccordion && (Qo.dropdownAccordion = JSON.parse(i.dropdownAccordion)),
            !0 === Qo.dropdownAccordion && this._getAllSiblings(n.parentElement, (function(e) {
                return Boolean(e.classList.contains(zo))
            }
            )).forEach((function(e) {
                e !== n.parentNode && e.classList.contains(zo) && e.classList.remove(Ko)
            }
            )),
            n.parentNode.classList.toggle(Ko),
            t._psUpdate()
        }
        ,
        n._psInit = function() {
            this._element.querySelector(nr) && !this._isIOS() && (this._ps = new Xo(this._element.querySelector(nr),{
                suppressScrollX: !0,
                wheelPropagation: !1
            }))
        }
        ,
        n._psUpdate = function() {
            this._ps && this._ps.update()
        }
        ,
        n._psDestroy = function() {
            this._ps && (this._ps.destroy(),
            this._ps = null)
        }
        ,
        n._getParents = function(e, t) {
            for (var n = []; e && e !== document; e = e.parentNode)
                t ? e.matches(t) && n.push(e) : n.push(e);
            return n
        }
        ,
        n._setActiveLink = function() {
            var e = this;
            Array.from(this._element.querySelectorAll(tr)).forEach((function(t) {
                var n = String(window.location);
                (/\?.*=/.test(n) || /\?./.test(n)) && (n = n.split("?")[0]),
                /#./.test(n) && (n = n.split("#")[0]);
                var i = t.closest(nr).dataset;
                "undefined" != typeof i.activeLinksExact && (Qo.activeLinksExact = JSON.parse(i.activeLinksExact)),
                Qo.activeLinksExact && t.href === n && (t.classList.add(Vo),
                Array.from(e._getParents(t, er)).forEach((function(e) {
                    e.classList.add(Ko)
                }
                ))),
                !Qo.activeLinksExact && t.href.startsWith(n) && (t.classList.add(Vo),
                Array.from(e._getParents(t, er)).forEach((function(e) {
                    e.classList.add(Ko)
                }
                )))
            }
            ))
        }
        ,
        n._addEventListeners = function() {
            var e = this;
            this._mobile && this._open && this._addClickOutListener(),
            this._overlaid && this._open && this._addClickOutListener(),
            F.on(this._element, "classtoggle", (function(t) {
                if (t.detail.className === $o && (e._element.classList.contains($o) ? e.minimize() : e.reset()),
                t.detail.className === Go && (e._element.classList.contains(Go) ? e.unfoldable() : e.reset()),
                "undefined" != typeof Object.keys(Qo.breakpoints).find((function(e) {
                    return Qo.breakpoints[e] === t.detail.className
                }
                ))) {
                    var n = t.detail.className
                      , i = Object.keys(Qo.breakpoints).find((function(e) {
                        return Qo.breakpoints[e] === n
                    }
                    ));
                    t.detail.add ? e.open(i) : e.close(i)
                }
            }
            )),
            F.on(this._element, Jo, Zo, (function(t) {
                t.preventDefault(),
                e._toggleDropdown(t, e)
            }
            )),
            F.on(this._element, Jo, tr, (function() {
                e._isMobile() && e.close()
            }
            ))
        }
        ,
        e._sidebarInterface = function(t, n) {
            var i = k(t, qo);
            if (i || (i = new e(t,"object" == typeof n && n)),
            "string" == typeof n) {
                if ("undefined" == typeof i[n])
                    throw new TypeError('No method named "' + n + '"');
                i[n]()
            }
        }
        ,
        e.jQueryInterface = function(t) {
            return this.each((function() {
                e._sidebarInterface(this, t)
            }
            ))
        }
        ,
        e.getInstance = function(e) {
            return k(e, qo)
        }
        ,
        t(e, null, [{
            key: "VERSION",
            get: function() {
                return "3.2.2"
            }
        }, {
            key: "Default",
            get: function() {
                return Qo
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Fo
            }
        }]),
        e
    }();
    F.on(window, "load.coreui.sidebar.data-api", (function() {
        Array.from(document.querySelectorAll(ir)).forEach((function(e) {
            or._sidebarInterface(e)
        }
        ))
    }
    ));
    var rr = L();
    if (rr) {
        var sr = rr.fn.sidebar;
        rr.fn.sidebar = or.jQueryInterface,
        rr.fn.sidebar.Constructor = or,
        rr.fn.sidebar.noConflict = function() {
            return rr.fn.sidebar = sr,
            or.jQueryInterface
        }
    }
    var ar = "coreui.tab"
      , lr = "active"
      , cr = "fade"
      , ur = "show"
      , fr = ".active"
      , hr = ":scope > li > .active"
      , dr = function() {
        function e(e) {
            this._element = e,
            O(this._element, ar, this)
        }
        var n = e.prototype;
        return n.show = function() {
            var e = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(lr) || this._element.classList.contains("disabled"))) {
                var t, n = d(this._element), i = this._element.closest(".nav, .list-group");
                if (i) {
                    var o = "UL" === i.nodeName || "OL" === i.nodeName ? hr : fr;
                    t = (t = ae.find(o, i))[t.length - 1]
                }
                var r = null;
                if (t && (r = F.trigger(t, "hide.coreui.tab", {
                    relatedTarget: this._element
                })),
                !(F.trigger(this._element, "show.coreui.tab", {
                    relatedTarget: t
                }).defaultPrevented || null !== r && r.defaultPrevented)) {
                    this._activate(this._element, i);
                    var s = function() {
                        F.trigger(t, "hidden.coreui.tab", {
                            relatedTarget: e._element
                        }),
                        F.trigger(e._element, "shown.coreui.tab", {
                            relatedTarget: t
                        })
                    };
                    n ? this._activate(n, n.parentNode, s) : s()
                }
            }
        }
        ,
        n.dispose = function() {
            C(this._element, ar),
            this._element = null
        }
        ,
        n._activate = function(e, t, n) {
            var i = this
              , o = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? ae.children(t, fr) : ae.find(hr, t))[0]
              , r = n && o && o.classList.contains(cr)
              , s = function() {
                return i._transitionComplete(e, o, n)
            };
            if (o && r) {
                var a = p(o);
                o.classList.remove(ur),
                F.one(o, c, s),
                v(o, a)
            } else
                s()
        }
        ,
        n._transitionComplete = function(e, t, n) {
            if (t) {
                t.classList.remove(lr);
                var i = ae.findOne(":scope > .dropdown-menu .active", t.parentNode);
                i && i.classList.remove(lr),
                "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
            }
            (e.classList.add(lr),
            "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0),
            E(e),
            e.classList.contains(cr) && e.classList.add(ur),
            e.parentNode && e.parentNode.classList.contains("dropdown-menu")) && (e.closest(".dropdown") && ae.find(".dropdown-toggle").forEach((function(e) {
                return e.classList.add(lr)
            }
            )),
            e.setAttribute("aria-expanded", !0));
            n && n()
        }
        ,
        e.jQueryInterface = function(t) {
            return this.each((function() {
                var n = k(this, ar) || new e(this);
                if ("string" == typeof t) {
                    if ("undefined" == typeof n[t])
                        throw new TypeError('No method named "' + t + '"');
                    n[t]()
                }
            }
            ))
        }
        ,
        e.getInstance = function(e) {
            return k(e, ar)
        }
        ,
        t(e, null, [{
            key: "VERSION",
            get: function() {
                return "3.2.2"
            }
        }]),
        e
    }();
    F.on(document, "click.coreui.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function(e) {
        e.preventDefault(),
        (k(this, ar) || new dr(this)).show()
    }
    ));
    var pr = L();
    if (pr) {
        var gr = pr.fn.tab;
        pr.fn.tab = dr.jQueryInterface,
        pr.fn.tab.Constructor = dr,
        pr.fn.tab.noConflict = function() {
            return pr.fn.tab = gr,
            dr.jQueryInterface
        }
    }
    var mr, vr, _r, yr, br, wr = "toast", Er = "coreui.toast", Lr = "." + Er, Tr = "click.dismiss" + Lr, Or = "hide", kr = "show", Cr = "showing", Sr = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }, Ar = {
        animation: !0,
        autohide: !0,
        delay: 5e3
    }, xr = function() {
        function e(e, t) {
            this._element = e,
            this._config = this._getConfig(t),
            this._timeout = null,
            this._setListeners(),
            O(e, Er, this)
        }
        var n = e.prototype;
        return n.show = function() {
            var e = this;
            if (!F.trigger(this._element, "show.coreui.toast").defaultPrevented) {
                this._clearTimeout(),
                this._config.animation && this._element.classList.add("fade");
                var t = function() {
                    e._element.classList.remove(Cr),
                    e._element.classList.add(kr),
                    F.trigger(e._element, "shown.coreui.toast"),
                    e._config.autohide && (e._timeout = setTimeout((function() {
                        e.hide()
                    }
                    ), e._config.delay))
                };
                if (this._element.classList.remove(Or),
                E(this._element),
                this._element.classList.add(Cr),
                this._config.animation) {
                    var n = p(this._element);
                    F.one(this._element, c, t),
                    v(this._element, n)
                } else
                    t()
            }
        }
        ,
        n.hide = function() {
            var e = this;
            if (this._element.classList.contains(kr) && !F.trigger(this._element, "hide.coreui.toast").defaultPrevented) {
                var t = function() {
                    e._element.classList.add(Or),
                    F.trigger(e._element, "hidden.coreui.toast")
                };
                if (this._element.classList.remove(kr),
                this._config.animation) {
                    var n = p(this._element);
                    F.one(this._element, c, t),
                    v(this._element, n)
                } else
                    t()
            }
        }
        ,
        n.dispose = function() {
            this._clearTimeout(),
            this._element.classList.contains(kr) && this._element.classList.remove(kr),
            F.off(this._element, Tr),
            C(this._element, Er),
            this._element = null,
            this._config = null
        }
        ,
        n._getConfig = function(e) {
            return e = o(o(o({}, Ar), ye.getDataAttributes(this._element)), "object" == typeof e && e ? e : {}),
            _(wr, e, this.constructor.DefaultType),
            e
        }
        ,
        n._setListeners = function() {
            var e = this;
            F.on(this._element, Tr, '[data-dismiss="toast"]', (function() {
                return e.hide()
            }
            ))
        }
        ,
        n._clearTimeout = function() {
            clearTimeout(this._timeout),
            this._timeout = null
        }
        ,
        e.jQueryInterface = function(t) {
            return this.each((function() {
                var n = k(this, Er);
                if (n || (n = new e(this,"object" == typeof t && t)),
                "string" == typeof t) {
                    if ("undefined" == typeof n[t])
                        throw new TypeError('No method named "' + t + '"');
                    n[t](this)
                }
            }
            ))
        }
        ,
        e.getInstance = function(e) {
            return k(e, Er)
        }
        ,
        t(e, null, [{
            key: "VERSION",
            get: function() {
                return "3.2.2"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Sr
            }
        }, {
            key: "Default",
            get: function() {
                return Ar
            }
        }]),
        e
    }(), Dr = L();
    if (Dr) {
        var jr = Dr.fn.toast;
        Dr.fn.toast = xr.jQueryInterface,
        Dr.fn.toast.Constructor = xr,
        Dr.fn.toast.noConflict = function() {
            return Dr.fn.toast = jr,
            xr.jQueryInterface
        }
    }
    return Array.from || (Array.from = (mr = Object.prototype.toString,
    vr = function(e) {
        return "function" == typeof e || "[object Function]" === mr.call(e)
    }
    ,
    _r = Math.pow(2, 53) - 1,
    yr = function(e) {
        var t = function(e) {
            var t = Number(e);
            return isNaN(t) ? 0 : 0 !== t && isFinite(t) ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t)) : t
        }(e);
        return Math.min(Math.max(t, 0), _r)
    }
    ,
    function(e) {
        var t = this
          , n = Object(e);
        if (null == e)
            throw new TypeError("Array.from requires an array-like object - not null or undefined");
        var i, o = arguments.length > 1 ? arguments[1] : void 0;
        if ("undefined" != typeof o) {
            if (!vr(o))
                throw new TypeError("Array.from: when provided, the second argument must be a function");
            arguments.length > 2 && (i = arguments[2])
        }
        for (var r, s = yr(n.length), a = vr(t) ? Object(new t(s)) : new Array(s), l = 0; l < s; )
            r = n[l],
            a[l] = o ? "undefined" == typeof i ? o(r, l) : o.call(i, r, l) : r,
            l += 1;
        return a.length = s,
        a
    }
    )),
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
    Element.prototype.closest || (Element.prototype.closest = function(e) {
        var t = this;
        do {
            if (t.matches(e))
                return t;
            t = t.parentElement || t.parentNode
        } while (null !== t && 1 === t.nodeType);return null
    }
    ),
    function() {
        if ("function" == typeof window.CustomEvent)
            return !1;
        window.CustomEvent = function(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: null
            };
            var n = document.createEvent("CustomEvent");
            return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
            n
        }
    }(),
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(e) {
        for (var t = (this.document || this.ownerDocument).querySelectorAll(e), n = t.length; --n >= 0 && t.item(n) !== this; )
            ;
        return n > -1
    }
    ),
    Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
        value: function(e) {
            if (null == this)
                throw new TypeError('"this" is null or not defined');
            var t = Object(this)
              , n = t.length >>> 0;
            if ("function" != typeof e)
                throw new TypeError("predicate must be a function");
            for (var i = arguments[1], o = 0; o < n; ) {
                var r = t[o];
                if (e.call(i, r, o, t))
                    return r;
                o++
            }
        }
    }),
    "function" != typeof Object.assign && (Object.assign = function(e, t) {
        if (null == e)
            throw new TypeError("Cannot convert undefined or null to object");
        for (var n = Object(e), i = 1; i < arguments.length; i++) {
            var o = arguments[i];
            if (null != o)
                for (var r in o)
                    Object.prototype.hasOwnProperty.call(o, r) && (n[r] = o[r])
        }
        return n
    }
    ),
    br = function() {
        function e(e) {
            var t = this.constructor;
            return this.then((function(n) {
                return t.resolve(e()).then((function() {
                    return n
                }
                ))
            }
            ), (function(n) {
                return t.resolve(e()).then((function() {
                    return t.reject(n)
                }
                ))
            }
            ))
        }
        var t = setTimeout;
        function n(e) {
            return Boolean(e && "undefined" != typeof e.length)
        }
        function i() {}
        function o(e) {
            if (!(this instanceof o))
                throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e)
                throw new TypeError("not a function");
            this._state = 0,
            this._handled = !1,
            this._value = void 0,
            this._deferreds = [],
            u(e, this)
        }
        function r(e, t) {
            for (; 3 === e._state; )
                e = e._value;
            0 !== e._state ? (e._handled = !0,
            o._immediateFn((function() {
                var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                if (null !== n) {
                    var i;
                    try {
                        i = n(e._value)
                    } catch (e) {
                        return void a(t.promise, e)
                    }
                    s(t.promise, i)
                } else
                    (1 === e._state ? s : a)(t.promise, e._value)
            }
            ))) : e._deferreds.push(t)
        }
        function s(e, t) {
            try {
                if (t === e)
                    throw new TypeError("A promise cannot be resolved with itself.");
                if (t && ("object" == typeof t || "function" == typeof t)) {
                    var n = t.then;
                    if (t instanceof o)
                        return e._state = 3,
                        e._value = t,
                        void l(e);
                    if ("function" == typeof n)
                        return void u((i = n,
                        r = t,
                        function() {
                            i.apply(r, arguments)
                        }
                        ), e)
                }
                e._state = 1,
                e._value = t,
                l(e)
            } catch (t) {
                a(e, t)
            }
            var i, r
        }
        function a(e, t) {
            e._state = 2,
            e._value = t,
            l(e)
        }
        function l(e) {
            2 === e._state && 0 === e._deferreds.length && o._immediateFn((function() {
                e._handled || o._unhandledRejectionFn(e._value)
            }
            ));
            for (var t = 0, n = e._deferreds.length; t < n; t++)
                r(e, e._deferreds[t]);
            e._deferreds = null
        }
        function c(e, t, n) {
            this.onFulfilled = "function" == typeof e ? e : null,
            this.onRejected = "function" == typeof t ? t : null,
            this.promise = n
        }
        function u(e, t) {
            var n = !1;
            try {
                e((function(e) {
                    n || (n = !0,
                    s(t, e))
                }
                ), (function(e) {
                    n || (n = !0,
                    a(t, e))
                }
                ))
            } catch (e) {
                if (n)
                    return;
                n = !0,
                a(t, e)
            }
        }
        o.prototype.catch = function(e) {
            return this.then(null, e)
        }
        ,
        o.prototype.then = function(e, t) {
            var n = new this.constructor(i);
            return r(this, new c(e,t,n)),
            n
        }
        ,
        o.prototype.finally = e,
        o.all = function(e) {
            return new o((function(t, i) {
                if (!n(e))
                    return i(new TypeError("Promise.all accepts an array"));
                var o = Array.prototype.slice.call(e);
                if (0 === o.length)
                    return t([]);
                var r = o.length;
                function s(e, n) {
                    try {
                        if (n && ("object" == typeof n || "function" == typeof n)) {
                            var a = n.then;
                            if ("function" == typeof a)
                                return void a.call(n, (function(t) {
                                    s(e, t)
                                }
                                ), i)
                        }
                        o[e] = n,
                        0 == --r && t(o)
                    } catch (e) {
                        i(e)
                    }
                }
                for (var a = 0; a < o.length; a++)
                    s(a, o[a])
            }
            ))
        }
        ,
        o.resolve = function(e) {
            return e && "object" == typeof e && e.constructor === o ? e : new o((function(t) {
                t(e)
            }
            ))
        }
        ,
        o.reject = function(e) {
            return new o((function(t, n) {
                n(e)
            }
            ))
        }
        ,
        o.race = function(e) {
            return new o((function(t, i) {
                if (!n(e))
                    return i(new TypeError("Promise.race accepts an array"));
                for (var r = 0, s = e.length; r < s; r++)
                    o.resolve(e[r]).then(t, i)
            }
            ))
        }
        ,
        o._immediateFn = "function" == typeof setImmediate && function(e) {
            setImmediate(e)
        }
        || function(e) {
            t(e, 0)
        }
        ,
        o._unhandledRejectionFn = function(e) {
            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
        }
        ;
        var f = function() {
            if ("undefined" != typeof self)
                return self;
            if ("undefined" != typeof window)
                return window;
            if ("undefined" != typeof global)
                return global;
            throw new Error("unable to locate global object")
        }();
        "Promise"in f ? f.Promise.prototype.finally || (f.Promise.prototype.finally = e) : f.Promise = o
    }
    ,
    "object" == typeof exports && "undefined" != typeof module ? br() : "function" == typeof define && define.amd ? define(br) : br(),
    function() {
        function e(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var n = document.createEvent("CustomEvent");
            return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
            n
        }
        "function" == typeof window.CustomEvent || this.CustomEvent.toString().indexOf("CustomEventConstructor") > -1 || (e.prototype = window.Event.prototype,
        window.CustomEvent = e)
    }(),
    {
        AsyncLoad: ee,
        Alert: oe,
        Button: pe,
        Carousel: De,
        ClassToggler: Be,
        Collapse: et,
        Dropdown: Cn,
        LoadingButton: Pn,
        Modal: ii,
        MultiSelect: Ei,
        Popover: to,
        Scrollspy: po,
        Sidebar: or,
        Tab: dr,
        Toast: xr,
        Tooltip: Qi
    }
}
));
