(("undefined" != typeof global ? global : self).webpackJsonp = ("undefined" != typeof global ? global : self).webpackJsonp || []).push([ [ 0 ], {
    1777: function(e, t, r) {
        var n = r(111), a = r(202), s = r(495), i = a("iterator");
        e.exports = !n(function() {
            var e = new URL("b?a=1&b=2&c=3", "http://a"), t = e.searchParams, r = "";
            return e.pathname = "c%20d", t.forEach(function(e, n) {
                t.delete("b"), r += n + e;
            }), s && !e.toJSON || !t.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== t.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[i] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== r || "x" !== new URL("http://x", void 0).host;
        });
    },
    1845: function(e, t, r) {
        "use strict";
        var n = /[^\0-\u007E]/, a = /[.\u3002\uFF0E\uFF61]/g, s = "Overflow: input needs wider integers to process", i = Math.floor, o = String.fromCharCode, u = function(e) {
            return e + 22 + 75 * (e < 26);
        }, h = function(e, t, r) {
            var n = 0;
            for (e = r ? i(e / 700) : e >> 1, e += i(e / t); e > 455; n += 36) e = i(e / 35);
            return i(n + 36 * e / (e + 38));
        }, l = function(e) {
            var t, r, n = [], a = (e = function(e) {
                for (var t = [], r = 0, n = e.length; r < n; ) {
                    var a = e.charCodeAt(r++);
                    if (a >= 55296 && a <= 56319 && r < n) {
                        var s = e.charCodeAt(r++);
                        56320 == (64512 & s) ? t.push(((1023 & a) << 10) + (1023 & s) + 65536) : (t.push(a), 
                        r--);
                    } else t.push(a);
                }
                return t;
            }(e)).length, l = 128, f = 0, c = 72;
            for (t = 0; t < e.length; t++) (r = e[t]) < 128 && n.push(o(r));
            var p = n.length, g = p;
            for (p && n.push("-"); g < a; ) {
                var v = 2147483647;
                for (t = 0; t < e.length; t++) (r = e[t]) >= l && r < v && (v = r);
                var m = g + 1;
                if (v - l > i((2147483647 - f) / m)) throw RangeError(s);
                for (f += (v - l) * m, l = v, t = 0; t < e.length; t++) {
                    if ((r = e[t]) < l && ++f > 2147483647) throw RangeError(s);
                    if (r == l) {
                        for (var d = f, y = 36; ;y += 36) {
                            var w = y <= c ? 1 : y >= c + 26 ? 26 : y - c;
                            if (d < w) break;
                            var b = d - w, R = 36 - w;
                            n.push(o(u(w + b % R))), d = i(b / R);
                        }
                        n.push(o(u(d))), c = h(f, m, g == p), f = 0, ++g;
                    }
                }
                ++f, ++l;
            }
            return n.join("");
        };
        e.exports = function(e) {
            var t, r, s = [], i = e.toLowerCase().replace(a, ".").split(".");
            for (t = 0; t < i.length; t++) r = i[t], s.push(n.test(r) ? "xn--" + l(r) : r);
            return s.join(".");
        };
    },
    1846: function(e, t, r) {
        "use strict";
        r(42);
        var n = r(60), a = r(513), s = r(1777), i = r(200), o = r(217), u = r(210), h = r(536), l = r(201), f = r(130), c = r(207), p = r(218), g = r(516), v = r(405), m = r(137), d = r(216), y = r(526), w = r(1847), b = r(517), R = r(202), L = a("fetch"), U = a("Headers"), k = R("iterator"), S = l.set, A = l.getterFor("URLSearchParams"), q = l.getterFor("URLSearchParamsIterator"), I = /\+/g, P = Array(4), B = function(e) {
            return P[e - 1] || (P[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"));
        }, x = function(e) {
            try {
                return decodeURIComponent(e);
            } catch (t) {
                return e;
            }
        }, E = function(e) {
            var t = e.replace(I, " "), r = 4;
            try {
                return decodeURIComponent(t);
            } catch (e) {
                for (;r; ) t = t.replace(B(r--), x);
                return t;
            }
        }, j = /[!'()~]|%20/g, C = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+"
        }, F = function(e) {
            return C[e];
        }, O = function(e) {
            return encodeURIComponent(e).replace(j, F);
        }, T = function(e, t) {
            if (t) for (var r, n, a = t.split("&"), s = 0; s < a.length; ) (r = a[s++]).length && (n = r.split("="), 
            e.push({
                key: E(n.shift()),
                value: E(n.join("="))
            }));
        }, D = function(e) {
            this.entries.length = 0, T(this.entries, e);
        }, J = function(e, t) {
            if (e < t) throw TypeError("Not enough arguments");
        }, $ = h(function(e, t) {
            S(this, {
                type: "URLSearchParamsIterator",
                iterator: w(A(e).entries),
                kind: t
            });
        }, "Iterator", function() {
            var e = q(this), t = e.kind, r = e.iterator.next(), n = r.value;
            return r.done || (r.value = "keys" === t ? n.key : "values" === t ? n.value : [ n.key, n.value ]), 
            r;
        }), M = function() {
            f(this, M, "URLSearchParams");
            var e, t, r, n, a, s, i, o, u, h = arguments.length > 0 ? arguments[0] : void 0, l = [];
            if (S(this, {
                type: "URLSearchParams",
                entries: l,
                updateURL: function() {},
                updateSearchParams: D
            }), void 0 !== h) if (m(h)) if ("function" == typeof (e = b(h))) for (r = (t = e.call(h)).next; !(n = r.call(t)).done; ) {
                if ((i = (s = (a = w(v(n.value))).next).call(a)).done || (o = s.call(a)).done || !s.call(a).done) throw TypeError("Expected sequence with length 2");
                l.push({
                    key: i.value + "",
                    value: o.value + ""
                });
            } else for (u in h) c(h, u) && l.push({
                key: u,
                value: h[u] + ""
            }); else T(l, "string" == typeof h ? "?" === h.charAt(0) ? h.slice(1) : h : h + "");
        }, N = M.prototype;
        o(N, {
            append: function(e, t) {
                J(arguments.length, 2);
                var r = A(this);
                r.entries.push({
                    key: e + "",
                    value: t + ""
                }), r.updateURL();
            },
            delete: function(e) {
                J(arguments.length, 1);
                for (var t = A(this), r = t.entries, n = e + "", a = 0; a < r.length; ) r[a].key === n ? r.splice(a, 1) : a++;
                t.updateURL();
            },
            get: function(e) {
                J(arguments.length, 1);
                for (var t = A(this).entries, r = e + "", n = 0; n < t.length; n++) if (t[n].key === r) return t[n].value;
                return null;
            },
            getAll: function(e) {
                J(arguments.length, 1);
                for (var t = A(this).entries, r = e + "", n = [], a = 0; a < t.length; a++) t[a].key === r && n.push(t[a].value);
                return n;
            },
            has: function(e) {
                J(arguments.length, 1);
                for (var t = A(this).entries, r = e + "", n = 0; n < t.length; ) if (t[n++].key === r) return !0;
                return !1;
            },
            set: function(e, t) {
                J(arguments.length, 1);
                for (var r, n = A(this), a = n.entries, s = !1, i = e + "", o = t + "", u = 0; u < a.length; u++) (r = a[u]).key === i && (s ? a.splice(u--, 1) : (s = !0, 
                r.value = o));
                s || a.push({
                    key: i,
                    value: o
                }), n.updateURL();
            },
            sort: function() {
                var e, t, r, n = A(this), a = n.entries, s = a.slice();
                for (a.length = 0, r = 0; r < s.length; r++) {
                    for (e = s[r], t = 0; t < r; t++) if (a[t].key > e.key) {
                        a.splice(t, 0, e);
                        break;
                    }
                    t === r && a.push(e);
                }
                n.updateURL();
            },
            forEach: function(e) {
                for (var t, r = A(this).entries, n = p(e, arguments.length > 1 ? arguments[1] : void 0, 3), a = 0; a < r.length; ) n((t = r[a++]).value, t.key, this);
            },
            keys: function() {
                return new $(this, "keys");
            },
            values: function() {
                return new $(this, "values");
            },
            entries: function() {
                return new $(this, "entries");
            }
        }, {
            enumerable: !0
        }), i(N, k, N.entries), i(N, "toString", function() {
            for (var e, t = A(this).entries, r = [], n = 0; n < t.length; ) e = t[n++], r.push(O(e.key) + "=" + O(e.value));
            return r.join("&");
        }, {
            enumerable: !0
        }), u(M, "URLSearchParams"), n({
            global: !0,
            forced: !s
        }, {
            URLSearchParams: M
        }), s || "function" != typeof L || "function" != typeof U || n({
            global: !0,
            enumerable: !0,
            forced: !0
        }, {
            fetch: function(e) {
                var t, r, n, a = [ e ];
                return arguments.length > 1 && (t = arguments[1], m(t) && (r = t.body, "URLSearchParams" === g(r) && ((n = t.headers ? new U(t.headers) : new U()).has("content-type") || n.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), 
                t = d(t, {
                    body: y(0, String(r)),
                    headers: y(0, n)
                }))), a.push(t)), L.apply(this, a);
            }
        }), e.exports = {
            URLSearchParams: M,
            getState: A
        };
    },
    1847: function(e, t, r) {
        var n = r(405), a = r(517);
        e.exports = function(e) {
            var t = a(e);
            if ("function" != typeof t) throw TypeError(String(e) + " is not iterable");
            return n(t.call(e));
        };
    },
    492: function(e, t, r) {
        "use strict";
        r(44);
        var n, a = r(60), s = r(121), i = r(1777), o = r(199), u = r(532), h = r(200), l = r(130), f = r(207), c = r(533), p = r(534), g = r(535).codeAt, v = r(1845), m = r(210), d = r(1846), y = r(201), w = o.URL, b = d.URLSearchParams, R = d.getState, L = y.set, U = y.getterFor("URL"), k = Math.floor, S = Math.pow, A = /[A-Za-z]/, q = /[\d+\-.A-Za-z]/, I = /\d/, P = /^(0x|0X)/, B = /^[0-7]+$/, x = /^\d+$/, E = /^[\dA-Fa-f]+$/, j = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/, C = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/, F = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g, O = /[\u0009\u000A\u000D]/g, T = function(e, t) {
            var r, n, a;
            if ("[" == t.charAt(0)) {
                if ("]" != t.charAt(t.length - 1)) return "Invalid host";
                if (!(r = J(t.slice(1, -1)))) return "Invalid host";
                e.host = r;
            } else if (G(e)) {
                if (t = v(t), j.test(t)) return "Invalid host";
                if (null === (r = D(t))) return "Invalid host";
                e.host = r;
            } else {
                if (C.test(t)) return "Invalid host";
                for (r = "", n = p(t), a = 0; a < n.length; a++) r += H(n[a], M);
                e.host = r;
            }
        }, D = function(e) {
            var t, r, n, a, s, i, o, u = e.split(".");
            if (u.length && "" == u[u.length - 1] && u.pop(), (t = u.length) > 4) return e;
            for (r = [], n = 0; n < t; n++) {
                if ("" == (a = u[n])) return e;
                if (s = 10, a.length > 1 && "0" == a.charAt(0) && (s = P.test(a) ? 16 : 8, a = a.slice(8 == s ? 1 : 2)), 
                "" === a) i = 0; else {
                    if (!(10 == s ? x : 8 == s ? B : E).test(a)) return e;
                    i = parseInt(a, s);
                }
                r.push(i);
            }
            for (n = 0; n < t; n++) if (i = r[n], n == t - 1) {
                if (i >= S(256, 5 - t)) return null;
            } else if (i > 255) return null;
            for (o = r.pop(), n = 0; n < r.length; n++) o += r[n] * S(256, 3 - n);
            return o;
        }, J = function(e) {
            var t, r, n, a, s, i, o, u = [ 0, 0, 0, 0, 0, 0, 0, 0 ], h = 0, l = null, f = 0, c = function() {
                return e.charAt(f);
            };
            if (":" == c()) {
                if (":" != e.charAt(1)) return;
                f += 2, l = ++h;
            }
            for (;c(); ) {
                if (8 == h) return;
                if (":" != c()) {
                    for (t = r = 0; r < 4 && E.test(c()); ) t = 16 * t + parseInt(c(), 16), f++, r++;
                    if ("." == c()) {
                        if (0 == r) return;
                        if (f -= r, h > 6) return;
                        for (n = 0; c(); ) {
                            if (a = null, n > 0) {
                                if (!("." == c() && n < 4)) return;
                                f++;
                            }
                            if (!I.test(c())) return;
                            for (;I.test(c()); ) {
                                if (s = parseInt(c(), 10), null === a) a = s; else {
                                    if (0 == a) return;
                                    a = 10 * a + s;
                                }
                                if (a > 255) return;
                                f++;
                            }
                            u[h] = 256 * u[h] + a, 2 != ++n && 4 != n || h++;
                        }
                        if (4 != n) return;
                        break;
                    }
                    if (":" == c()) {
                        if (f++, !c()) return;
                    } else if (c()) return;
                    u[h++] = t;
                } else {
                    if (null !== l) return;
                    f++, l = ++h;
                }
            }
            if (null !== l) for (i = h - l, h = 7; 0 != h && i > 0; ) o = u[h], u[h--] = u[l + i - 1], 
            u[l + --i] = o; else if (8 != h) return;
            return u;
        }, $ = function(e) {
            var t, r, n, a;
            if ("number" == typeof e) {
                for (t = [], r = 0; r < 4; r++) t.unshift(e % 256), e = k(e / 256);
                return t.join(".");
            }
            if ("object" == typeof e) {
                for (t = "", n = function(e) {
                    for (var t = null, r = 1, n = null, a = 0, s = 0; s < 8; s++) 0 !== e[s] ? (a > r && (t = n, 
                    r = a), n = null, a = 0) : (null === n && (n = s), ++a);
                    return a > r && (t = n, r = a), t;
                }(e), r = 0; r < 8; r++) a && 0 === e[r] || (a && (a = !1), n === r ? (t += r ? ":" : "::", 
                a = !0) : (t += e[r].toString(16), r < 7 && (t += ":")));
                return "[" + t + "]";
            }
            return e;
        }, M = {}, N = c({}, M, {
            " ": 1,
            '"': 1,
            "<": 1,
            ">": 1,
            "`": 1
        }), z = c({}, N, {
            "#": 1,
            "?": 1,
            "{": 1,
            "}": 1
        }), Z = c({}, z, {
            "/": 1,
            ":": 1,
            ";": 1,
            "=": 1,
            "@": 1,
            "[": 1,
            "\\": 1,
            "]": 1,
            "^": 1,
            "|": 1
        }), H = function(e, t) {
            var r = g(e, 0);
            return r > 32 && r < 127 && !f(t, e) ? e : encodeURIComponent(e);
        }, X = {
            ftp: 21,
            file: null,
            http: 80,
            https: 443,
            ws: 80,
            wss: 443
        }, G = function(e) {
            return f(X, e.scheme);
        }, K = function(e) {
            return "" != e.username || "" != e.password;
        }, Q = function(e) {
            return !e.host || e.cannotBeABaseURL || "file" == e.scheme;
        }, V = function(e, t) {
            var r;
            return 2 == e.length && A.test(e.charAt(0)) && (":" == (r = e.charAt(1)) || !t && "|" == r);
        }, W = function(e) {
            var t;
            return e.length > 1 && V(e.slice(0, 2)) && (2 == e.length || "/" === (t = e.charAt(2)) || "\\" === t || "?" === t || "#" === t);
        }, Y = function(e) {
            var t = e.path, r = t.length;
            !r || "file" == e.scheme && 1 == r && V(t[0], !0) || t.pop();
        }, _ = function(e) {
            return "." === e || "%2e" === e.toLowerCase();
        }, ee = function(e) {
            return ".." === (e = e.toLowerCase()) || "%2e." === e || ".%2e" === e || "%2e%2e" === e;
        }, te = {}, re = {}, ne = {}, ae = {}, se = {}, ie = {}, oe = {}, ue = {}, he = {}, le = {}, fe = {}, ce = {}, pe = {}, ge = {}, ve = {}, me = {}, de = {}, ye = {}, we = {}, be = {}, Re = {}, Le = function(e, t, r, a) {
            var s, i, o, u, h = r || te, l = 0, c = "", g = !1, v = !1, m = !1;
            for (r || (e.scheme = "", e.username = "", e.password = "", e.host = null, e.port = null, 
            e.path = [], e.query = null, e.fragment = null, e.cannotBeABaseURL = !1, t = t.replace(F, "")), 
            t = t.replace(O, ""), s = p(t); l <= s.length; ) {
                switch (i = s[l], h) {
                  case te:
                    if (!i || !A.test(i)) {
                        if (r) return "Invalid scheme";
                        h = ne;
                        continue;
                    }
                    c += i.toLowerCase(), h = re;
                    break;

                  case re:
                    if (i && (q.test(i) || "+" == i || "-" == i || "." == i)) c += i.toLowerCase(); else {
                        if (":" != i) {
                            if (r) return "Invalid scheme";
                            c = "", h = ne, l = 0;
                            continue;
                        }
                        if (r && (G(e) != f(X, c) || "file" == c && (K(e) || null !== e.port) || "file" == e.scheme && !e.host)) return;
                        if (e.scheme = c, r) return void (G(e) && X[e.scheme] == e.port && (e.port = null));
                        c = "", "file" == e.scheme ? h = ge : G(e) && a && a.scheme == e.scheme ? h = ae : G(e) ? h = ue : "/" == s[l + 1] ? (h = se, 
                        l++) : (e.cannotBeABaseURL = !0, e.path.push(""), h = we);
                    }
                    break;

                  case ne:
                    if (!a || a.cannotBeABaseURL && "#" != i) return "Invalid scheme";
                    if (a.cannotBeABaseURL && "#" == i) {
                        e.scheme = a.scheme, e.path = a.path.slice(), e.query = a.query, e.fragment = "", 
                        e.cannotBeABaseURL = !0, h = Re;
                        break;
                    }
                    h = "file" == a.scheme ? ge : ie;
                    continue;

                  case ae:
                    if ("/" != i || "/" != s[l + 1]) {
                        h = ie;
                        continue;
                    }
                    h = he, l++;
                    break;

                  case se:
                    if ("/" == i) {
                        h = le;
                        break;
                    }
                    h = ye;
                    continue;

                  case ie:
                    if (e.scheme = a.scheme, i == n) e.username = a.username, e.password = a.password, 
                    e.host = a.host, e.port = a.port, e.path = a.path.slice(), e.query = a.query; else if ("/" == i || "\\" == i && G(e)) h = oe; else if ("?" == i) e.username = a.username, 
                    e.password = a.password, e.host = a.host, e.port = a.port, e.path = a.path.slice(), 
                    e.query = "", h = be; else {
                        if ("#" != i) {
                            e.username = a.username, e.password = a.password, e.host = a.host, e.port = a.port, 
                            e.path = a.path.slice(), e.path.pop(), h = ye;
                            continue;
                        }
                        e.username = a.username, e.password = a.password, e.host = a.host, e.port = a.port, 
                        e.path = a.path.slice(), e.query = a.query, e.fragment = "", h = Re;
                    }
                    break;

                  case oe:
                    if (!G(e) || "/" != i && "\\" != i) {
                        if ("/" != i) {
                            e.username = a.username, e.password = a.password, e.host = a.host, e.port = a.port, 
                            h = ye;
                            continue;
                        }
                        h = le;
                    } else h = he;
                    break;

                  case ue:
                    if (h = he, "/" != i || "/" != c.charAt(l + 1)) continue;
                    l++;
                    break;

                  case he:
                    if ("/" != i && "\\" != i) {
                        h = le;
                        continue;
                    }
                    break;

                  case le:
                    if ("@" == i) {
                        g && (c = "%40" + c), g = !0, o = p(c);
                        for (var d = 0; d < o.length; d++) {
                            var y = o[d];
                            if (":" != y || m) {
                                var w = H(y, Z);
                                m ? e.password += w : e.username += w;
                            } else m = !0;
                        }
                        c = "";
                    } else if (i == n || "/" == i || "?" == i || "#" == i || "\\" == i && G(e)) {
                        if (g && "" == c) return "Invalid authority";
                        l -= p(c).length + 1, c = "", h = fe;
                    } else c += i;
                    break;

                  case fe:
                  case ce:
                    if (r && "file" == e.scheme) {
                        h = me;
                        continue;
                    }
                    if (":" != i || v) {
                        if (i == n || "/" == i || "?" == i || "#" == i || "\\" == i && G(e)) {
                            if (G(e) && "" == c) return "Invalid host";
                            if (r && "" == c && (K(e) || null !== e.port)) return;
                            if (u = T(e, c)) return u;
                            if (c = "", h = de, r) return;
                            continue;
                        }
                        "[" == i ? v = !0 : "]" == i && (v = !1), c += i;
                    } else {
                        if ("" == c) return "Invalid host";
                        if (u = T(e, c)) return u;
                        if (c = "", h = pe, r == ce) return;
                    }
                    break;

                  case pe:
                    if (!I.test(i)) {
                        if (i == n || "/" == i || "?" == i || "#" == i || "\\" == i && G(e) || r) {
                            if ("" != c) {
                                var b = parseInt(c, 10);
                                if (b > 65535) return "Invalid port";
                                e.port = G(e) && b === X[e.scheme] ? null : b, c = "";
                            }
                            if (r) return;
                            h = de;
                            continue;
                        }
                        return "Invalid port";
                    }
                    c += i;
                    break;

                  case ge:
                    if (e.scheme = "file", "/" == i || "\\" == i) h = ve; else {
                        if (!a || "file" != a.scheme) {
                            h = ye;
                            continue;
                        }
                        if (i == n) e.host = a.host, e.path = a.path.slice(), e.query = a.query; else if ("?" == i) e.host = a.host, 
                        e.path = a.path.slice(), e.query = "", h = be; else {
                            if ("#" != i) {
                                W(s.slice(l).join("")) || (e.host = a.host, e.path = a.path.slice(), Y(e)), h = ye;
                                continue;
                            }
                            e.host = a.host, e.path = a.path.slice(), e.query = a.query, e.fragment = "", h = Re;
                        }
                    }
                    break;

                  case ve:
                    if ("/" == i || "\\" == i) {
                        h = me;
                        break;
                    }
                    a && "file" == a.scheme && !W(s.slice(l).join("")) && (V(a.path[0], !0) ? e.path.push(a.path[0]) : e.host = a.host), 
                    h = ye;
                    continue;

                  case me:
                    if (i == n || "/" == i || "\\" == i || "?" == i || "#" == i) {
                        if (!r && V(c)) h = ye; else if ("" == c) {
                            if (e.host = "", r) return;
                            h = de;
                        } else {
                            if (u = T(e, c)) return u;
                            if ("localhost" == e.host && (e.host = ""), r) return;
                            c = "", h = de;
                        }
                        continue;
                    }
                    c += i;
                    break;

                  case de:
                    if (G(e)) {
                        if (h = ye, "/" != i && "\\" != i) continue;
                    } else if (r || "?" != i) if (r || "#" != i) {
                        if (i != n && (h = ye, "/" != i)) continue;
                    } else e.fragment = "", h = Re; else e.query = "", h = be;
                    break;

                  case ye:
                    if (i == n || "/" == i || "\\" == i && G(e) || !r && ("?" == i || "#" == i)) {
                        if (ee(c) ? (Y(e), "/" == i || "\\" == i && G(e) || e.path.push("")) : _(c) ? "/" == i || "\\" == i && G(e) || e.path.push("") : ("file" == e.scheme && !e.path.length && V(c) && (e.host && (e.host = ""), 
                        c = c.charAt(0) + ":"), e.path.push(c)), c = "", "file" == e.scheme && (i == n || "?" == i || "#" == i)) for (;e.path.length > 1 && "" === e.path[0]; ) e.path.shift();
                        "?" == i ? (e.query = "", h = be) : "#" == i && (e.fragment = "", h = Re);
                    } else c += H(i, z);
                    break;

                  case we:
                    "?" == i ? (e.query = "", h = be) : "#" == i ? (e.fragment = "", h = Re) : i != n && (e.path[0] += H(i, M));
                    break;

                  case be:
                    r || "#" != i ? i != n && ("'" == i && G(e) ? e.query += "%27" : e.query += "#" == i ? "%23" : H(i, M)) : (e.fragment = "", 
                    h = Re);
                    break;

                  case Re:
                    i != n && (e.fragment += H(i, N));
                }
                l++;
            }
        }, Ue = function(e) {
            var t, r, n = l(this, Ue, "URL"), a = arguments.length > 1 ? arguments[1] : void 0, i = String(e), o = L(n, {
                type: "URL"
            });
            if (void 0 !== a) if (a instanceof Ue) t = U(a); else if (r = Le(t = {}, String(a))) throw TypeError(r);
            if (r = Le(o, i, null, t)) throw TypeError(r);
            var u = o.searchParams = new b(), h = R(u);
            h.updateSearchParams(o.query), h.updateURL = function() {
                o.query = String(u) || null;
            }, s || (n.href = Se.call(n), n.origin = Ae.call(n), n.protocol = qe.call(n), n.username = Ie.call(n), 
            n.password = Pe.call(n), n.host = Be.call(n), n.hostname = xe.call(n), n.port = Ee.call(n), 
            n.pathname = je.call(n), n.search = Ce.call(n), n.searchParams = Fe.call(n), n.hash = Oe.call(n));
        }, ke = Ue.prototype, Se = function() {
            var e = U(this), t = e.scheme, r = e.username, n = e.password, a = e.host, s = e.port, i = e.path, o = e.query, u = e.fragment, h = t + ":";
            return null !== a ? (h += "//", K(e) && (h += r + (n ? ":" + n : "") + "@"), h += $(a), 
            null !== s && (h += ":" + s)) : "file" == t && (h += "//"), h += e.cannotBeABaseURL ? i[0] : i.length ? "/" + i.join("/") : "", 
            null !== o && (h += "?" + o), null !== u && (h += "#" + u), h;
        }, Ae = function() {
            var e = U(this), t = e.scheme, r = e.port;
            if ("blob" == t) try {
                return new URL(t.path[0]).origin;
            } catch (e) {
                return "null";
            }
            return "file" != t && G(e) ? t + "://" + $(e.host) + (null !== r ? ":" + r : "") : "null";
        }, qe = function() {
            return U(this).scheme + ":";
        }, Ie = function() {
            return U(this).username;
        }, Pe = function() {
            return U(this).password;
        }, Be = function() {
            var e = U(this), t = e.host, r = e.port;
            return null === t ? "" : null === r ? $(t) : $(t) + ":" + r;
        }, xe = function() {
            var e = U(this).host;
            return null === e ? "" : $(e);
        }, Ee = function() {
            var e = U(this).port;
            return null === e ? "" : String(e);
        }, je = function() {
            var e = U(this), t = e.path;
            return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : "";
        }, Ce = function() {
            var e = U(this).query;
            return e ? "?" + e : "";
        }, Fe = function() {
            return U(this).searchParams;
        }, Oe = function() {
            var e = U(this).fragment;
            return e ? "#" + e : "";
        }, Te = function(e, t) {
            return {
                get: e,
                set: t,
                configurable: !0,
                enumerable: !0
            };
        };
        if (s && u(ke, {
            href: Te(Se, function(e) {
                var t = U(this), r = String(e), n = Le(t, r);
                if (n) throw TypeError(n);
                R(t.searchParams).updateSearchParams(t.query);
            }),
            origin: Te(Ae),
            protocol: Te(qe, function(e) {
                var t = U(this);
                Le(t, String(e) + ":", te);
            }),
            username: Te(Ie, function(e) {
                var t = U(this), r = p(String(e));
                if (!Q(t)) {
                    t.username = "";
                    for (var n = 0; n < r.length; n++) t.username += H(r[n], Z);
                }
            }),
            password: Te(Pe, function(e) {
                var t = U(this), r = p(String(e));
                if (!Q(t)) {
                    t.password = "";
                    for (var n = 0; n < r.length; n++) t.password += H(r[n], Z);
                }
            }),
            host: Te(Be, function(e) {
                var t = U(this);
                t.cannotBeABaseURL || Le(t, String(e), fe);
            }),
            hostname: Te(xe, function(e) {
                var t = U(this);
                t.cannotBeABaseURL || Le(t, String(e), ce);
            }),
            port: Te(Ee, function(e) {
                var t = U(this);
                Q(t) || ("" == (e = String(e)) ? t.port = null : Le(t, e, pe));
            }),
            pathname: Te(je, function(e) {
                var t = U(this);
                t.cannotBeABaseURL || (t.path = [], Le(t, e + "", de));
            }),
            search: Te(Ce, function(e) {
                var t = U(this);
                "" == (e = String(e)) ? t.query = null : ("?" == e.charAt(0) && (e = e.slice(1)), 
                t.query = "", Le(t, e, be)), R(t.searchParams).updateSearchParams(t.query);
            }),
            searchParams: Te(Fe),
            hash: Te(Oe, function(e) {
                var t = U(this);
                "" != (e = String(e)) ? ("#" == e.charAt(0) && (e = e.slice(1)), t.fragment = "", 
                Le(t, e, Re)) : t.fragment = null;
            })
        }), h(ke, "toJSON", function() {
            return Se.call(this);
        }, {
            enumerable: !0
        }), h(ke, "toString", function() {
            return Se.call(this);
        }, {
            enumerable: !0
        }), w) {
            var De = w.createObjectURL, Je = w.revokeObjectURL;
            De && h(Ue, "createObjectURL", function(e) {
                return De.apply(w, arguments);
            }), Je && h(Ue, "revokeObjectURL", function(e) {
                return Je.apply(w, arguments);
            });
        }
        m(Ue, "URL"), a({
            global: !0,
            forced: !i,
            sham: !s
        }, {
            URL: Ue
        });
    }
} ]);