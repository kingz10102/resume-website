(("undefined" != typeof global ? global : self).webpackJsonp = ("undefined" != typeof global ? global : self).webpackJsonp || []).push([ [ 21 ], {
    356: function(t, e, n) {
        "use strict";
        var a = n(17), i = n(29), r = n(404), o = n(38), s = a.default.extend({
            name: "Avatar",
            components: {
                AvatarImage: r.a
            },
            props: {
                owners: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                },
                images: {
                    type: Object
                },
                src: {
                    type: String
                },
                src2x: {
                    type: String
                },
                profileUrl: {
                    type: String,
                    default: ""
                },
                size: {
                    type: Number,
                    default: 35
                },
                context: {
                    type: String,
                    default: ""
                },
                isDisabled: {
                    type: Boolean,
                    default: !1
                },
                shouldHaveMiniProfile: {
                    type: Boolean,
                    default: !0
                },
                isHovered: {
                    type: Boolean,
                    default: !1
                },
                shouldTriggerFollow: {
                    type: Boolean,
                    default: !1
                },
                followeeId: {
                    type: Number
                },
                isFollowing: {
                    type: Boolean
                }
            },
            computed: {
                hasLink: function() {
                    return !this.isDisabled && !!this.profileUrl;
                },
                hasMultipleOwner: function() {
                    return this.owners.length > 1;
                },
                entityType: function() {
                    return this.hasMultipleOwner ? "project" : "user";
                },
                avatarUrl: function() {
                    if (this.owners.length > 0) return !this.shouldTriggerFollow && !this.hasMultipleOwner && this.owners[0].url;
                }
            },
            directives: {
                target: function(t, e) {
                    e.value && t.setAttribute("target", "_blank");
                },
                href: function(t, e) {
                    var n = e.value;
                    n.hasLink && t.setAttribute("href", n.profileUrl);
                }
            },
            methods: {
                errorHandler: function(t) {
                    t.target.src = "/assets/img/profile/no-image-115.png", t.target.removeAttribute("srcset");
                    var e = this.$store && this.$store.state.user && this.$store.state.user.loggedInUser && this.$store.state.user.loggedInUser.url || "";
                    this.profileUrl.length && e === this.profileUrl && i.default.info("avatarfail", "avatar_failed", {
                        username: this.$store.state.user.loggedInUser.username
                    });
                },
                clickHandler: function(t) {
                    if (this.isDisabled) return t.preventDefault(), void t.stopPropagation();
                    o.default.custom("avatar", this.context + " - avatar click"), this.$emit("avatarClicked", t);
                }
            }
        }), l = n(412), u = n(68);
        var p = Object(u.default)(s, function() {
            var t, e, n, a, i = this, r = i.$createElement, o = i._self._c || r;
            return o("div", [ Boolean(i.owners.length) ? o("a", {
                ref: "ownerAvatar",
                class: [ i.$style.avatar, i.$style.avatarHover, (t = {}, t[i.$style.disabled] = i.isDisabled, 
                t), (e = {}, e["js-action-follow"] = i.shouldTriggerFollow, e) ],
                style: {
                    height: i.size + "px",
                    width: i.size + "px",
                    minHeight: i.size + "px",
                    minWidth: i.size + "px"
                },
                attrs: {
                    target: "_blank",
                    href: i.avatarUrl,
                    "data-followee": i.followeeId,
                    "data-entity": i.entityType,
                    "data-following": i.isFollowing,
                    "data-source": "avatar"
                },
                on: {
                    click: i.clickHandler
                }
            }, [ i.isHovered ? o("span", {
                ref: "blocking",
                class: i.$style.hovered
            }) : i._e(), i._l(i.owners, function(t, e) {
                var n;
                return o("AvatarImage", {
                    key: e,
                    ref: "eachOwner",
                    refInFor: !0,
                    class: [ [ i.hasMultipleOwner ? i.$style.multipleAvatarImage : i.$style.avatarImage ], (n = {}, 
                    n["js-mini-profile"] = !i.hasMultipleOwner && i.shouldHaveMiniProfile, n) ],
                    attrs: {
                        images: t.images,
                        alt: i.$translate("alt_avatar_multiple_users", "user's avatar"),
                        avatarSize: i.size,
                        "data-id": t.id
                    },
                    on: {
                        "~error": function(t) {
                            return i.errorHandler(t);
                        }
                    }
                });
            }) ], 2) : o("a", {
                directives: [ {
                    name: "target",
                    rawName: "v-target",
                    value: i.hasLink,
                    expression: "hasLink"
                }, {
                    name: "href",
                    rawName: "v-href",
                    value: {
                        hasLink: i.hasLink,
                        profileUrl: i.profileUrl
                    },
                    expression: "{ hasLink, profileUrl }"
                } ],
                ref: "link",
                class: [ i.$style.avatar, (n = {}, n[i.$style.avatarHover] = i.hasLink, n), (a = {}, 
                a[i.$style.disabled] = i.isDisabled, a) ],
                style: [ {
                    height: i.size + "px",
                    width: i.size + "px",
                    minHeight: i.size + "px",
                    minWidth: i.size + "px"
                } ],
                on: {
                    click: i.clickHandler
                }
            }, [ i.isHovered ? o("span", {
                ref: "blocking",
                class: i.$style.hovered
            }) : i._e(), o("AvatarImage", {
                ref: "avatarImage",
                class: i.$style.avatarImage,
                style: {
                    height: i.size + "px",
                    width: i.size + "px"
                },
                attrs: {
                    images: i.images,
                    alt: i.$translate("alt_avatar_single_user", "user's avatar"),
                    src1x: i.src,
                    src2x: i.src2x,
                    avatarSize: i.size
                },
                on: {
                    "~error": function(t) {
                        return i.errorHandler(t);
                    }
                }
            }) ], 1) ]);
        }, [], !1, function(t) {
            this.$style = l.default.locals || l.default;
        }, null, null);
        e.a = p.exports;
    },
    359: function(t, e, n) {
        var a = n(411);
        "string" == typeof a && (a = [ [ t.i, a, "" ] ]), a.locals && (t.exports = a.locals);
        (0, n(189).default)("f45290a0", a, !0, {});
    },
    360: function(t, e, n) {
        var a = n(413);
        "string" == typeof a && (a = [ [ t.i, a, "" ] ]), a.locals && (t.exports = a.locals);
        (0, n(189).default)("68e12e24", a, !0, {});
    },
    362: function(t, e, n) {
        "use strict";
        n.d(e, "i", function() {
            return r;
        }), n.d(e, "g", function() {
            return o;
        }), n.d(e, "f", function() {
            return s;
        }), n.d(e, "d", function() {
            return l;
        }), n.d(e, "a", function() {
            return u;
        }), n.d(e, "e", function() {
            return p;
        }), n.d(e, "c", function() {
            return f;
        }), n.d(e, "b", function() {
            return d;
        }), n.d(e, "h", function() {
            return g;
        });
        var a = n(0), i = /^size_/;
        function r(t) {
            var e = t ? t.split(".").pop() : null;
            return !!e && "gif" === e.toLowerCase();
        }
        function o(t) {
            var e = Object(a.__assign)({}, t);
            return Object.entries(e).forEach(function(t) {
                var n = t[0], a = t[1];
                i.test(n) && (null === a || void 0 === a ? void 0 : a.url) && (e[n.replace(i, "")] = a.url);
            }), e.max_808 && (e[808] = e.max_808), Object.keys(e).filter(function(t) {
                return -1 === t.indexOf("_opt");
            }).filter(function(t) {
                return !isNaN(Number(t)) && e[t].length > 1;
            }).map(function(t) {
                return e[t] + " " + t + "w";
            }).join(", ");
        }
        function s(t) {
            var e = Object(a.__assign)({}, t);
            return Object.entries(e).forEach(function(t) {
                var n = t[0], a = t[1];
                i.test(n) && (null === a || void 0 === a ? void 0 : a.url) && (e[n.replace(i, "")] = a.url);
            }), e.max_808_opt && (e["808_opt"] = e.max_808_opt), Object.keys(e).filter(function(t) {
                return -1 !== t.indexOf("_opt");
            }).filter(function(t) {
                return !isNaN(Number(t.split("_opt")[0])) && e[t].length > 1;
            }).map(function(t) {
                return e[t] + " " + t.split("_opt")[0] + "w";
            }).join(", ");
        }
        function l(t) {
            var e = t.images, n = t.upperLimit, r = Object(a.__assign)({}, e);
            return Object.entries(r).forEach(function(t) {
                var e = t[0], n = t[1];
                i.test(e) && n && "string" != typeof n && (r[e.replace(i, "")] = n.url);
            }), Object.keys(r).filter(function(t) {
                return "string" == typeof r[t];
            }).map(function(t) {
                var e = "disp" === t || "original" === t ? 808 : Number(t);
                if (!(n && e > n || isNaN(Number(e)))) return r[t] + " " + e + "w";
            }).filter(function(t) {
                return !!t;
            }).join(", ");
        }
        function u(t) {
            var e = t.images, n = t.upperLimit;
            return Object.keys(e).filter(function(t) {
                return -1 !== t.indexOf("_still");
            }).map(function(t) {
                var a = -1 !== t.indexOf("max_") ? t.replace("max_", "").replace("_still", "") : t.split("_")[0];
                if (!(n && Number(a) > n)) return isNaN(Number(a)) ? void 0 : e[t] + " " + a + "w";
            }).filter(function(t) {
                return !!t;
            }).join(", ");
        }
        function p(t) {
            var e = t.images, n = t.upperLimit;
            return Object.keys(e).filter(function(t) {
                return -1 !== t.indexOf("max_") && -1 === t.indexOf("_still");
            }).map(function(t) {
                var a = t.replace("max_", "");
                if (!(n && Number(a) > n)) return e[t] + " " + a + "w";
            }).filter(function(t) {
                return !!t;
            }).join(", ");
        }
        function c(t, e) {
            return t.map(function(t) {
                if (!e[t]) return null;
                var n = e[t].width;
                return e[t].url + " " + n + "w";
            }).filter(function(t) {
                return null !== t;
            }).join(", ");
        }
        function f(t) {
            return c([ "disp", "max_1200", "1400_opt_1", "fs", "2800_opt_1" ], t);
        }
        function d(t) {
            return c([ "max_158", "max_316", "max_632" ], t);
        }
        function g(t) {
            return c([ "158_still", "316_still", "632_still" ], t);
        }
    },
    381: function(t, e, n) {
        var a = n(500);
        "string" == typeof a && (a = [ [ t.i, a, "" ] ]), a.locals && (t.exports = a.locals);
        (0, n(189).default)("b6ef138c", a, !0, {});
    },
    404: function(t, e, n) {
        "use strict";
        var a = n(17), i = n(362), r = a.default.extend({
            props: {
                images: {
                    type: Object
                },
                src1x: {
                    type: String
                },
                src2x: {
                    type: String
                },
                avatarSize: {
                    type: Number,
                    default: 115
                },
                alt: {
                    type: String,
                    default: "User's avatar"
                }
            },
            computed: {
                altText: function() {
                    return this.alt || this.$translate("avatar_image_default_alt_text", "User's avatar");
                },
                src: function() {
                    if (this.src1x) return this.src1x;
                    if (this.images) {
                        if (this.images[115]) return this.images[115];
                        var t = Object.keys(this.images), e = t[t.length - 1];
                        return this.images[e];
                    }
                },
                srcset: function() {
                    return this.src1x && this.src2x ? this.src1x + " 1x, " + this.src2x + " 2x" : Object(i.g)(this.images);
                }
            }
        }), o = n(410), s = n(68);
        var l = Object(s.default)(r, function() {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("img", {
                ref: "imageEl",
                class: t.$style.avatarImage,
                attrs: {
                    src: t.src,
                    alt: t.altText,
                    srcset: t.srcset,
                    sizes: t.avatarSize + "px"
                },
                on: {
                    error: function(e) {
                        return t.$emit("error", e);
                    }
                }
            });
        }, [], !1, function(t) {
            this.$style = o.default.locals || o.default;
        }, null, null);
        e.a = l.exports;
    },
    407: function(t, e, n) {
        "use strict";
        var a = n(68), i = Object(a.default)({}, function() {
            var t = this.$createElement, e = this._self._c || t;
            return e("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 125.8 291.6"
                }
            }, [ e("path", {
                attrs: {
                    d: "M88.6 145.8l-70-81.1v162.2z"
                }
            }) ]);
        }, [], !1, null, null, null);
        e.a = i.exports;
    },
    410: function(t, e, n) {
        "use strict";
        var a = n(359), i = n.n(a);
        e.default = i.a;
    },
    411: function(t, e, n) {
        (e = t.exports = n(188)(!1)).push([ t.i, ".AvatarImage-avatarImage-3uu {\n  border-radius: inherit;\n  display: block;\n  width: 100%;\n}\n", "" ]), 
        e.locals = {
            avatarImage: "AvatarImage-avatarImage-3uu"
        };
    },
    412: function(t, e, n) {
        "use strict";
        var a = n(360), i = n.n(a);
        e.default = i.a;
    },
    413: function(t, e, n) {
        (e = t.exports = n(188)(!1)).push([ t.i, ".Avatar-hovered-1tJ {\n  background: #fff;\n  height: 100%;\n  left: 0;\n  opacity: 0.7;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: 3;\n}\n.Avatar-avatar-3m1 {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  background-color: #e8e8e8;\n  border-radius: 50%;\n  box-sizing: content-box !important;\n  display: block;\n  line-height: 0;\n  overflow: hidden;\n  position: relative;\n}\n.Avatar-disabled-32M {\n  cursor: default;\n  pointer-events: none;\n}\n.Avatar-hovered-1tJ {\n  background-color: #3c4e6e;\n  display: block;\n}\n.Avatar-avatarHover-1lN {\n  position: relative;\n}\n.Avatar-avatarHover-1lN::after {\n    background-color: #191919;\n    border-radius: 50%;\n    bottom: 0;\n    content: '';\n    left: 0;\n    opacity: 0;\n    pointer-events: none;\n    position: absolute;\n    right: 0;\n    top: 0;\n    -webkit-transition: opacity 0.2s linear;\n    transition: opacity 0.2s linear;\n}\n.Avatar-avatarHover-1lN:hover::after, .Avatar-avatarHover-1lN.Avatar-hasHoverState-1C9::after {\n    opacity: 0.2;\n}\n.Avatar-avatarImage-2oR {\n  border-radius: 50%;\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n.Avatar-avatarImage-2oR[src=''] {\n    opacity: 0;\n}\n.Avatar-avatar-3m1 .Avatar-multipleAvatarImage-1Ic {\n  background-color: #fff;\n  border-radius: 0;\n  float: left;\n  width: 50%;\n}\n", "" ]), 
        e.locals = {
            hovered: "Avatar-hovered-1tJ",
            avatar: "Avatar-avatar-3m1",
            disabled: "Avatar-disabled-32M",
            avatarHover: "Avatar-avatarHover-1lN",
            hasHoverState: "Avatar-hasHoverState-1C9",
            avatarImage: "Avatar-avatarImage-2oR",
            multipleAvatarImage: "Avatar-multipleAvatarImage-1Ic"
        };
    },
    496: function(t, e, n) {
        "use strict";
        var a = {
            name: "Facebook",
            props: {
                useColor: {
                    type: Boolean,
                    default: !1
                }
            }
        }, i = n(499), r = n(68);
        var o = Object(r.default)(a, function() {
            var t, e = this.$createElement, n = this._self._c || e;
            return n("svg", {
                attrs: {
                    viewBox: "0 0 32 32",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [ n("g", {
                attrs: {
                    transform: "translate(-1654 -928)"
                }
            }, [ n("circle", {
                class: (t = {}, t[this.$style.circle] = this.useColor, t),
                attrs: {
                    transform: "translate(1654 928)",
                    cx: "16",
                    cy: "16",
                    r: "16"
                }
            }), n("path", {
                class: this.$style.icon,
                attrs: {
                    d: "M1671.395 953v-7.3h2.45l.367-2.846h-2.817v-1.815c0-.826.226-1.384 1.412-1.384h1.5v-2.542a19.964 19.964 0 0 0-2.192-.113 3.425 3.425 0 0 0-3.658 3.756v2.1H1666v2.844h2.457v7.3z"
                }
            }) ]) ]);
        }, [], !1, function(t) {
            this.$style = i.default.locals || i.default;
        }, null, null);
        e.a = o.exports;
    },
    499: function(t, e, n) {
        "use strict";
        var a = n(381), i = n.n(a);
        e.default = i.a;
    },
    500: function(t, e, n) {
        (e = t.exports = n(188)(!1)).push([ t.i, ".Facebook-circle-2zX {\n  fill: #4861a3;\n}\n.Facebook-icon-2Bw {\n  fill: #fff;\n}\n", "" ]), 
        e.locals = {
            circle: "Facebook-circle-2zX",
            icon: "Facebook-icon-2Bw"
        };
    },
    578: function(t, e, n) {
        "use strict";
        var a = n(68), i = Object(a.default)({}, function() {
            var t = this.$createElement, e = this._self._c || t;
            return e("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "5673 839.716 15.931 11.285"
                }
            }, [ e("g", [ e("path", {
                attrs: {
                    d: "M5680.86 846.605a.18.18 0 0 0 .21 0l7.86-5.764v-.46a.7.7 0 0 0-.724-.662h-14.482a.7.7 0 0 0-.724.663v.46z"
                }
            }), e("path", {
                attrs: {
                    d: "M5688.93 842.426l-4.378 3.21 4.38 2.41z"
                }
            }), e("path", {
                attrs: {
                    d: "M5683.428 846.46l-1.514 1.11a1.663 1.663 0 0 1-1.9 0l-1.514-1.116-5.5 3.032v.85a.7.7 0 0 0 .724.665h14.482a.7.7 0 0 0 .724-.663v-.85z"
                }
            }), e("path", {
                attrs: {
                    d: "M5677.372 845.63l-4.372-3.205v5.618z"
                }
            }) ]) ]);
        }, [], !1, null, null, null);
        e.a = i.exports;
    },
    662: function(t, e, n) {
        var a = n(979);
        "string" == typeof a && (a = [ [ t.i, a, "" ] ]), a.locals && (t.exports = a.locals);
        (0, n(189).default)("23e9d014", a, !0, {});
    },
    668: function(t, e, n) {
        var a = n(992);
        "string" == typeof a && (a = [ [ t.i, a, "" ] ]), a.locals && (t.exports = a.locals);
        (0, n(189).default)("2bdd7b44", a, !0, {});
    },
    669: function(t, e, n) {
        var a = n(994);
        "string" == typeof a && (a = [ [ t.i, a, "" ] ]), a.locals && (t.exports = a.locals);
        (0, n(189).default)("78f61d8e", a, !0, {});
    },
    670: function(t, e, n) {
        var a = n(996);
        "string" == typeof a && (a = [ [ t.i, a, "" ] ]), a.locals && (t.exports = a.locals);
        (0, n(189).default)("90a8493c", a, !0, {});
    },
    904: function(t, e, n) {
        "use strict";
        var a = {
            props: {
                mode: {
                    type: String
                }
            }
        }, i = n(978), r = n(68);
        var o = Object(r.default)(a, function() {
            var t = this.$createElement;
            return (this._self._c || t)("transition", {
                attrs: {
                    "enter-active-class": this.$style.enterActive,
                    "leave-active-class": this.$style.leaveActive,
                    mode: this.mode
                }
            }, [ this._t("default") ], 2);
        }, [], !1, function(t) {
            this.$style = i.default.locals || i.default;
        }, null, null);
        e.a = o.exports;
    },
    926: function(t, e, n) {
        "use strict";
        n(190), n(9), n(11), n(43);
        var a = n(68), i = Object(a.default)({}, function() {
            var t = this.$createElement, e = this._self._c || t;
            return e("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 34 34"
                }
            }, [ e("defs"), e("g", [ e("g", {
                attrs: {
                    fill: "#fff",
                    stroke: "#e8e8e8",
                    transform: "translate(1 1)"
                }
            }, [ e("circle", {
                attrs: {
                    cx: "16",
                    cy: "16",
                    r: "16",
                    stroke: "none"
                }
            }), e("circle", {
                attrs: {
                    cx: "16",
                    cy: "16",
                    r: "16.5",
                    fill: "none"
                }
            }) ]), e("path", {
                attrs: {
                    d: "M22.748 20.099a7.745 7.745 0 01-.766 1.377A7 7 0 0121 22.671a1.914 1.914 0 01-1.268.558 3.178 3.178 0 01-1.171-.28 3.361 3.361 0 00-1.261-.278 3.475 3.475 0 00-1.3.279 3.489 3.489 0 01-1.121.295 1.8 1.8 0 01-1.3-.573 7.347 7.347 0 01-1.029-1.235 8.539 8.539 0 01-1.092-2.168A7.937 7.937 0 0111 16.686a4.718 4.718 0 01.62-2.469 3.634 3.634 0 011.3-1.312 3.49 3.49 0 011.754-.5 4.13 4.13 0 011.357.316 4.362 4.362 0 001.069.321 6.44 6.44 0 001.2-.373 3.944 3.944 0 011.62-.288 3.444 3.444 0 012.7 1.42 3 3 0 00-1.592 2.726 3.008 3.008 0 00.985 2.272 3.245 3.245 0 00.987.647q-.119.344-.252.66zM20 9.285a3.039 3.039 0 01-.78 1.993 2.654 2.654 0 01-2.2 1.088 2.218 2.218 0 01-.02-.267 3.123 3.123 0 01.827-2.014 3.182 3.182 0 011.006-.759 3 3 0 011.152-.327 2.587 2.587 0 01.015.286z"
                }
            }) ]) ]);
        }, [], !1, null, null, null).exports, r = n(347), o = n(578), s = n(496), l = Object(a.default)({}, function() {
            var t = this.$createElement, e = this._self._c || t;
            return e("svg", {
                attrs: {
                    viewBox: "0 0 34 34",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [ e("g", {
                attrs: {
                    transform: "translate(-1693 -927)"
                }
            }, [ e("circle", {
                attrs: {
                    transform: "translate(1694 928)",
                    cx: "16",
                    cy: "16",
                    r: "16",
                    stroke: "#e8e8e8",
                    fill: "#fff"
                }
            }), e("path", {
                attrs: {
                    d: "M1717.68 944.182a9.192 9.192 0 0 0-.145-1.636H1710v3.095h4.305a3.68 3.68 0 0 1-1.6 2.415v2.006h2.585a7.8 7.8 0 0 0 2.39-5.88z",
                    fill: "#4285f4",
                    "fill-rule": "evenodd"
                }
            }), e("path", {
                attrs: {
                    d: "M1710 952a7.638 7.638 0 0 0 5.294-1.938l-2.585-2.007a4.826 4.826 0 0 1-7.185-2.535h-2.673v2.073A8 8 0 0 0 1710 952z",
                    fill: "#34a853",
                    "fill-rule": "evenodd"
                }
            }), e("path", {
                attrs: {
                    d: "M1705.5 945.52a4.73 4.73 0 0 1 0-3.04v-2.073h-2.673a8.01 8.01 0 0 0 0 7.185l2.673-2.073z",
                    fill: "#fbbc05",
                    "fill-rule": "evenodd"
                }
            }), e("path", {
                attrs: {
                    d: "M1710 939.182a4.322 4.322 0 0 1 3.058 1.2l2.295-2.295A7.688 7.688 0 0 0 1710 936a8 8 0 0 0-7.149 4.407l2.673 2.073a4.768 4.768 0 0 1 4.476-3.3z",
                    fill: "#ea4335",
                    "fill-rule": "evenodd"
                }
            }) ]) ]);
        }, [], !1, null, null, null).exports;
        function u(t, e, n, a, i, r, o) {
            try {
                var s = t[r](o), l = s.value;
            } catch (t) {
                return void n(t);
            }
            s.done ? e(l) : Promise.resolve(l).then(a, i);
        }
        var p = {
            components: {
                AppleIcon: i,
                Btn: r.a,
                Envelope: o.a,
                FacebookIcon: s.a,
                GoogleIcon: l
            },
            props: {
                from: String,
                primaryButtonCTAType: {
                    type: String,
                    default: "signup"
                },
                followeeId: {
                    type: Number
                },
                primaryLabel: {
                    type: String
                },
                shouldDisplaySocialSignIn: {
                    type: Boolean,
                    default: !0
                }
            },
            computed: {
                buttonClass: function() {
                    return {
                        signup: "js-adobeid-signup",
                        follow: "js-action-follow"
                    }[this.primaryButtonCTAType];
                }
            },
            methods: {
                initFollow: function() {
                    var t = this;
                    return function(t) {
                        return function() {
                            var e = this, n = arguments;
                            return new Promise(function(a, i) {
                                var r = t.apply(e, n);
                                function o(t) {
                                    u(r, a, i, o, s, "next", t);
                                }
                                function s(t) {
                                    u(r, a, i, o, s, "throw", t);
                                }
                                o(void 0);
                            });
                        };
                    }(regeneratorRuntime.mark(function e() {
                        var a;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, n.e(31).then(n.bind(null, 417));

                              case 2:
                                a = e.sent, a.default.init(t.$refs.root);

                              case 5:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                }
            },
            mounted: function() {
                "follow" === this.primaryButtonCTAType && this.initFollow();
            }
        }, c = n(993);
        var f = Object(a.default)(p, function() {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                ref: "root",
                class: t.$style.container
            }, [ n("Btn", {
                ref: "emailSignup",
                class: [ t.$style.signup, this.buttonClass ],
                attrs: {
                    type: "primary",
                    "data-signup-from": t.from,
                    "data-followee": t.followeeId,
                    leadingIconStyle: t.$style.phone,
                    "data-entity": "user",
                    "data-following": "false"
                }
            }, [ n("label", {
                class: t.$style.desktop
            }, [ t._v(t._s(t.primaryLabel || t.$translate("sign_up_buttons_with_email", "Sign Up With Email"))) ]), n("Envelope", {
                class: [ t.$style.phone, t.$style.envelope ],
                attrs: {
                    slot: "leadingIcon"
                },
                slot: "leadingIcon"
            }), n("label", {
                class: t.$style.phone
            }, [ t._v(t._s(t.$translate("sign_up_buttons_with_email_mobile", "Sign Up"))) ]) ], 1), t.shouldDisplaySocialSignIn ? [ n("span", {
                class: [ t.$style.or, t.$style.desktop ]
            }, [ t._v(" " + t._s(t.$translate("sign_up_buttons_or", "or")) + " ") ]), n("a", {
                ref: "appleSignin",
                class: [ t.$style.appleIcon, "js-adobeid-signin", "vue-btn" ],
                attrs: {
                    "data-signin-from": t.from,
                    "data-adobeid-social-provider": "apple"
                }
            }, [ n("AppleIcon", {
                attrs: {
                    useColor: !0
                }
            }) ], 1), n("a", {
                ref: "facebookSignin",
                class: [ t.$style.fbIcon, "js-adobeid-signin", "vue-btn" ],
                attrs: {
                    "data-signin-from": t.from,
                    "data-adobeid-social-provider": "facebook"
                }
            }, [ n("FacebookIcon", {
                attrs: {
                    useColor: !0
                }
            }) ], 1), n("a", {
                ref: "googleSignin",
                class: [ t.$style.googleIcon, "js-adobeid-signin", "vue-btn" ],
                attrs: {
                    "data-signin-from": t.from,
                    "data-adobeid-social-provider": "google"
                }
            }, [ n("GoogleIcon") ], 1) ] : [ n("a", {
                ref: "genericSignin",
                class: [ t.$style.signin, "js-adobeid-signin" ],
                attrs: {
                    "data-signin-from": t.from
                }
            }, [ t._v(t._s(t.$translate("signup_prompt_sign_in", "Or, sign in"))) ]) ] ], 2);
        }, [], !1, function(t) {
            this.$style = c.default.locals || c.default;
        }, null, null);
        e.a = f.exports;
    },
    931: function(t, e, n) {
        "use strict";
        n(190);
        var a = n(356), i = n(347), r = n(932), o = n(407), s = n(38), l = n(926), u = n(15), p = {
            components: {
                Avatar: a.a,
                Btn: i.a,
                Popup: r.a,
                TriangleIcon: o.a,
                SignUpButtons: l.a
            },
            props: {
                header: {
                    type: String
                },
                subHeader: {
                    type: String
                },
                cookieName: {
                    type: String
                },
                primaryLabel: {
                    type: String
                },
                shouldDisplaySocialSignIn: {
                    type: Boolean,
                    default: !0
                },
                isSmallPrompt: {
                    type: Boolean,
                    default: !1
                },
                owners: {
                    type: Array
                },
                followeeId: {
                    type: Number
                },
                primaryButtonCTAType: {
                    type: String
                },
                context: {
                    type: String
                },
                canClose: {
                    type: Boolean,
                    default: !0
                },
                delay: {
                    type: Number,
                    default: 2e3
                },
                isHiddenMobile: {
                    type: Boolean,
                    default: !0
                },
                analyticsChannel: {
                    type: String,
                    default: "sign_up_prompt"
                }
            },
            data: function() {
                return {
                    isPromptRendered: !1,
                    didUserSeePrompt: !1
                };
            },
            watch: {
                didUserSeePrompt: function(t) {
                    t && this.isPromptRendered && s.default.custom(this.analyticsChannel, "rendered", this.logData);
                }
            },
            mounted: function() {
                var t = this;
                this.delay > 0 ? this.showPromptTimeout = setTimeout(function() {
                    t.init();
                }, this.delay) : this.init();
            },
            destroyed: function() {
                clearTimeout(this.showPromptTimeout);
            },
            computed: {
                logData: function() {
                    return {
                        from_prompt_source: this.context
                    };
                }
            },
            methods: {
                init: function() {
                    this.open();
                },
                open: function() {
                    u.cookieAgent.get(this.cookieName) || (this.isPromptRendered = !0);
                },
                close: function() {
                    this.canClose && (this.isPromptRendered = !1, u.cookieAgent.set(this.cookieName, "true", {
                        expires: 14
                    }), s.default.custom(this.analyticsChannel, "closed", this.logData));
                },
                visibilityChanged: function(t) {
                    t && (this.didUserSeePrompt = t);
                }
            }
        }, c = n(995), f = n(68);
        var d = Object(f.default)(p, function() {
            var t, e, n, a = this, i = a.$createElement, r = a._self._c || i;
            return a.isPromptRendered ? r("Popup", {
                directives: [ {
                    name: "observe-visibility",
                    rawName: "v-observe-visibility",
                    value: {
                        callback: a.visibilityChanged,
                        once: !0
                    },
                    expression: "{ callback: visibilityChanged, once: true }"
                } ],
                ref: "promptPopup",
                class: [ a.$style.popup, (t = {}, t[a.$style.hideMobile] = a.isHiddenMobile, t), (e = {}, 
                e[a.$style.small] = a.isSmallPrompt, e) ],
                attrs: {
                    canClose: a.canClose
                },
                on: {
                    closed: a.close
                }
            }, [ a.$slots.default ? a._t("default") : [ a.owners ? r("Avatar", {
                ref: "avatar",
                class: a.$style.avatar,
                attrs: {
                    owners: a.owners,
                    size: 50,
                    shouldHaveMiniProfile: !1
                }
            }) : a._e(), r("h1", {
                ref: "header",
                class: [ a.$style.header, (n = {}, n[a.$style.headerWithAvatar] = a.owners, n) ]
            }, [ a._v(a._s(a.header)) ]), r("h2", {
                ref: "subHeader",
                class: a.$style.subHeader
            }, [ a._v(a._s(a.subHeader)) ]), r("div", {
                class: a.$style.callToAction
            }, [ a.$slots.action ? a._t("action") : r("SignUpButtons", {
                ref: "signUpButtons",
                attrs: {
                    from: a.context,
                    primaryLabel: a.primaryLabel,
                    followeeId: a.followeeId,
                    primaryButtonCTAType: a.primaryButtonCTAType,
                    shouldDisplaySocialSignIn: a.shouldDisplaySocialSignIn
                }
            }) ], 2) ] ], 2) : a._e();
        }, [], !1, function(t) {
            this.$style = c.default.locals || c.default;
        }, null, null);
        e.a = d.exports;
    },
    932: function(t, e, n) {
        "use strict";
        var a = n(347), i = n(351), r = {
            name: "Popup",
            components: {
                Btn: a.a,
                CloseIcon: i.a
            },
            props: {
                heading: {
                    type: String
                },
                text: {
                    type: String
                },
                buttons: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                },
                canClose: {
                    type: Boolean,
                    default: !0
                }
            },
            data: function() {
                return {
                    isHidden: !1
                };
            },
            methods: {
                hide: function() {
                    this.isHidden = !0, this.$emit("closed");
                }
            }
        }, o = n(991), s = n(68);
        var l = Object(s.default)(r, function() {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                directives: [ {
                    name: "show",
                    rawName: "v-show",
                    value: !t.isHidden,
                    expression: "!isHidden"
                } ],
                ref: "popup",
                class: t.$style.popup
            }, [ t.canClose ? n("span", {
                ref: "hideButton",
                class: t.$style.close,
                on: {
                    click: t.hide
                }
            }, [ n("CloseIcon", {
                class: t.$style.icon
            }) ], 1) : t._e(), n("h2", {
                ref: "heading",
                class: t.$style.heading
            }, [ t._v(t._s(t.heading)) ]), n("div", {
                ref: "text",
                class: t.$style.text,
                domProps: {
                    innerHTML: t._s(t.text)
                }
            }), t._t("default"), t.buttons.length ? n("div", {
                ref: "buttonContainer",
                class: t.$style.buttons
            }, t._l(t.buttons, function(e, a) {
                return n("Btn", t._b({
                    key: a,
                    attrs: {
                        type: e.type,
                        customClass: e.customClass
                    },
                    on: {
                        click: e.click
                    }
                }, "Btn", e.attributes, !1), [ t._v(t._s(e.label)) ]);
            }), 1) : t._e() ], 2);
        }, [], !1, function(t) {
            this.$style = o.default.locals || o.default;
        }, null, null);
        e.a = l.exports;
    },
    978: function(t, e, n) {
        "use strict";
        var a = n(662), i = n.n(a);
        e.default = i.a;
    },
    979: function(t, e, n) {
        (e = t.exports = n(188)(!1)).push([ t.i, ".FadeUp-enterActive-3XP {\n  -webkit-animation: FadeUp-fadeUp-cEy 0.5s;\n          animation: FadeUp-fadeUp-cEy 0.5s;\n  -webkit-animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n          animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n}\n.FadeUp-leaveActive-2FD {\n  animation: FadeUp-fadeUp-cEy 0.5s reverse;\n  -webkit-animation-timing-function: cubic-bezier(0.78, 0, 0.81, 0);\n          animation-timing-function: cubic-bezier(0.78, 0, 0.81, 0);\n}\n@-webkit-keyframes FadeUp-fadeUp-cEy {\n0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 10%, 0);\n            transform: translate3d(0, 10%, 0);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n}\n@keyframes FadeUp-fadeUp-cEy {\n0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 10%, 0);\n            transform: translate3d(0, 10%, 0);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n}\n", "" ]), 
        e.locals = {
            enterActive: "FadeUp-enterActive-3XP",
            fadeUp: "FadeUp-fadeUp-cEy",
            leaveActive: "FadeUp-leaveActive-2FD"
        };
    },
    991: function(t, e, n) {
        "use strict";
        var a = n(668), i = n.n(a);
        e.default = i.a;
    },
    992: function(t, e, n) {
        (e = t.exports = n(188)(!1)).push([ t.i, ".Popup-popup-T3F {\n  background: #fff;\n  border-radius: 6px;\n  box-shadow: 0 1px 2px rgba(25, 25, 25, 0.2);\n  left: 50%;\n  padding: 30px 47px 30px 30px;\n  position: fixed;\n  top: 50%;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n          transform: translateX(-50%) translateY(-50%);\n  z-index: 999;\n}\n.Popup-close-3By {\n  cursor: pointer;\n  opacity: 0.5;\n  position: absolute;\n  right: 15px;\n  top: 15px;\n}\n.Popup-close-3By:hover {\n    opacity: 1;\n}\n.Popup-heading-AaP {\n  font-size: 20px;\n  line-height: 1.2;\n}\n.Popup-text-27E {\n  font-size: 15px;\n  margin-top: 11px;\n}\n.Popup-buttons-1X9 {\n  margin-top: 22px;\n}\n.Popup-icon-3II {\n  display: block;\n  fill: #191919;\n  height: 10px;\n  width: 10px;\n}\n", "" ]), 
        e.locals = {
            popup: "Popup-popup-T3F",
            close: "Popup-close-3By",
            heading: "Popup-heading-AaP",
            text: "Popup-text-27E",
            buttons: "Popup-buttons-1X9",
            icon: "Popup-icon-3II"
        };
    },
    993: function(t, e, n) {
        "use strict";
        var a = n(669), i = n.n(a);
        e.default = i.a;
    },
    994: function(t, e, n) {
        (e = t.exports = n(188)(!1)).push([ t.i, ".SignUpButtons-container-1uy {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n}\n.SignUpButtons-container-1uy .SignUpButtons-phone-2sR {\n    display: none;\n}\n@media (max-width: 603px) {\n.SignUpButtons-container-1uy .SignUpButtons-phone-2sR {\n        display: block;\n}\n}\n@media (max-width: 603px) {\n.SignUpButtons-desktop-25M {\n    display: none;\n}\n}\n.SignUpButtons-envelope-jAq {\n  fill: #fff;\n}\n.SignUpButtons-signup-1rV,\n.SignUpButtons-or-2kd,\n.SignUpButtons-fbIcon-2f1,\n.SignUpButtons-appleIcon-17P {\n  margin-right: 10px;\n}\n.SignUpButtons-signup-1rV {\n  margin-right: 12px;\n}\n.SignUpButtons-signin-3_o {\n  color: #696969;\n  font-size: 14px;\n  font-weight: bold;\n}\n.SignUpButtons-or-2kd {\n  color: #959595;\n  font-weight: bold;\n}\n.SignUpButtons-fbIcon-2f1.SignUpButtons-fbIcon-2f1,\n.SignUpButtons-googleIcon-389,\n.SignUpButtons-appleIcon-17P {\n  -webkit-transition-duration: 0.2s;\n          transition-duration: 0.2s;\n  -webkit-transition-property: -webkit-filter;\n  transition-property: -webkit-filter;\n  transition-property: filter;\n  transition-property: filter, -webkit-filter;\n  width: 32px;\n}\n.SignUpButtons-fbIcon-2f1.SignUpButtons-fbIcon-2f1:hover,\n  .SignUpButtons-googleIcon-389:hover,\n  .SignUpButtons-appleIcon-17P:hover {\n    -webkit-filter: brightness(90%);\n            filter: brightness(90%);\n}\n", "" ]), 
        e.locals = {
            container: "SignUpButtons-container-1uy",
            phone: "SignUpButtons-phone-2sR",
            desktop: "SignUpButtons-desktop-25M",
            envelope: "SignUpButtons-envelope-jAq",
            signup: "SignUpButtons-signup-1rV",
            or: "SignUpButtons-or-2kd",
            fbIcon: "SignUpButtons-fbIcon-2f1",
            appleIcon: "SignUpButtons-appleIcon-17P",
            signin: "SignUpButtons-signin-3_o",
            googleIcon: "SignUpButtons-googleIcon-389"
        };
    },
    995: function(t, e, n) {
        "use strict";
        var a = n(670), i = n.n(a);
        e.default = i.a;
    },
    996: function(t, e, n) {
        (e = t.exports = n(188)(!1)).push([ t.i, ".SignUpPrompt-popup-2RA {\n  box-shadow: 0 3px 8px rgba(25, 25, 25, 0.3);\n  left: initial;\n  padding: 18px 30px 30px;\n  top: initial;\n  -webkit-transform: initial;\n          transform: initial;\n  z-index: 2;\n  bottom: 40px;\n  cursor: default;\n  right: 10px;\n  width: 350px;\n}\n@media (max-width: 1024px) {\n.SignUpPrompt-popup-2RA.SignUpPrompt-hideMobile-BPa {\n      display: none;\n}\n}\n.SignUpPrompt-avatar-3Da {\n  border-radius: 50%;\n  box-shadow: 0 3px 6px rgba(25, 25, 25, 0.2);\n  left: 25px;\n  margin-top: -25px;\n  position: absolute;\n  top: 0;\n}\n.SignUpPrompt-header-2ga {\n  font-size: 27px;\n  font-weight: 900;\n  line-height: 1;\n  margin-bottom: 10px;\n}\n.SignUpPrompt-header-2ga.SignUpPrompt-headerWithAvatar-3XO {\n    margin-top: 15px;\n}\n.SignUpPrompt-subHeader-YY5 {\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 1.1;\n  margin-bottom: 15px;\n}\n.SignUpPrompt-small-2n9 .SignUpPrompt-subHeader-YY5 {\n    font-size: 15px;\n    font-weight: normal;\n    line-height: 1.3;\n}\n", "" ]), 
        e.locals = {
            popup: "SignUpPrompt-popup-2RA",
            hideMobile: "SignUpPrompt-hideMobile-BPa",
            avatar: "SignUpPrompt-avatar-3Da",
            header: "SignUpPrompt-header-2ga",
            headerWithAvatar: "SignUpPrompt-headerWithAvatar-3XO",
            subHeader: "SignUpPrompt-subHeader-YY5",
            small: "SignUpPrompt-small-2n9"
        };
    }
} ]);