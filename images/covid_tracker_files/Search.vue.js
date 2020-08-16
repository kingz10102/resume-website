(("undefined" != typeof global ? global : self).webpackJsonp = ("undefined" != typeof global ? global : self).webpackJsonp || []).push([ [ 20, 31, 32 ], {
    346: function(t, e, n) {
        t.exports = n(2)(5);
    },
    350: function(t, e, n) {
        "use strict";
        n(106);
        var i = {
            Vector: "spinner-vector"
        }, o = {
            data: function() {
                return {
                    svgId: "spinner-" + Date.now(),
                    testIds: i
                };
            },
            props: {
                text: {
                    type: String,
                    required: !1
                },
                autofill: {
                    type: Boolean,
                    default: !1
                },
                color: {
                    type: String,
                    default: "blue",
                    validator: function(t) {
                        return [ "white", "blue" ].includes(t);
                    }
                }
            }
        }, r = n(377), s = n(68);
        var l = Object(s.default)(o, function() {
            var t, e, n = this, i = n.$createElement, o = n._self._c || i;
            return o("div", {
                ref: "spinnerContainer",
                staticClass: "vc-Spinner rf-spinner",
                class: (t = {}, t[n.$style.standaloneSpinner] = !n.text && !n.autofill, t)
            }, [ o("svg", {
                class: [ (e = {}, e[n.$style.autofill] = n.autofill, e), "rf-spinner__spinner" ],
                attrs: {
                    "data-ut": n.testIds.Vector,
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 200 200",
                    preserveAspectRatio: "xMinYMin meet",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink"
                }
            }, [ o("defs", [ o("linearGradient", {
                attrs: {
                    id: n.svgId,
                    x1: "0%",
                    y1: "0%",
                    x2: "65%",
                    y2: "0%"
                }
            }, [ o("stop", {
                ref: "def1",
                class: n.$style[n.color],
                attrs: {
                    offset: "0%"
                }
            }), o("stop", {
                ref: "def2",
                class: n.$style[n.color],
                attrs: {
                    offset: "100%",
                    "stop-opacity": "0"
                }
            }) ], 1) ], 1), o("circle", {
                attrs: {
                    cx: "100",
                    cy: "100",
                    r: "90",
                    fill: "transparent",
                    stroke: "url(#" + n.svgId + ")",
                    "stroke-width": "20"
                }
            }) ]), n.text ? o("p", {
                ref: "text",
                staticClass: "rf-spinner__text"
            }, [ n._v(n._s(n.text)) ]) : n._e() ]);
        }, [], !1, function(t) {
            this.$style = r.default.locals || r.default;
        }, null, null);
        e.a = l.exports;
    },
    352: function(t, e, n) {
        var i = n(378);
        "string" == typeof i && (i = [ [ t.i, i, "" ] ]), i.locals && (t.exports = i.locals);
        (0, n(189).default)("789a9fc4", i, !0, {});
    },
    354: function(t, e, n) {
        t.exports = n(2)(56);
    },
    361: function(t, e, n) {
        var i = n(346), o = {}, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.b("<div "), i.s(i.f("instant_backfill", t, e, 1), t, e, 0, 26, 49, "{{ }}") && (i.rs(t, e, function(t, e, n) {
                    n.b('data-backfill="instant"');
                }), t.pop()), i.b(' class="'), i.sub("classes", t, e, n), i.b(" js-action-follow "), 
                i.s(i.f("is_following", t, e, 1), t, e, 0, 137, 147, "{{ }}") && (i.rs(t, e, function(t, e, n) {
                    n.b(" following");
                }), t.pop()), i.b(' qa-follow-button-container e2e-follow-button-container form-button-wrap rf-button__container rf-button__container--follow follow-button-container" data-followee="'), 
                i.b(i.v(i.f("id", t, e, 0))), i.b('" data-entity="'), i.sub("type", t, e, n), i.b('" data-source="'), 
                i.b(i.v(i.f("source", t, e, 0))), i.b('" '), i.s(i.f("is_gallery", t, e, 1), t, e, 0, 408, 435, "{{ }}") && (i.rs(t, e, function(t, e, n) {
                    n.b('data-gallery="'), n.b(n.v(n.f("gallery", t, e, 0))), n.b('" ');
                }), t.pop()), i.b(" "), i.s(i.f("is_following", t, e, 1), t, e, 0, 468, 489, "{{ }}") && (i.rs(t, e, function(t, e, n) {
                    n.b('data-following="true"');
                }), t.pop()), i.b(" "), i.sub("attrs", t, e, n), i.b(' tabindex="0">'), i.b("\n" + n), 
                i.b('  <a class="js-form-button-follow e2e-form-button-follow '), i.sub("size", t, e, n), 
                i.b(' rf-button rf-button--follow"><span class="rf-button__label">'), i.sub("follow", t, e, n), 
                i.b("</span></a>"), i.b("\n" + n), i.b('  <a class="qa-form-button-following e2e-form-button-following '), 
                i.sub("size", t, e, n), i.b(' rf-button rf-button--secondary rf-button--following"><span class="rf-button__label">'), 
                i.sub("following", t, e, n), i.b("</span></a>"), i.b("\n" + n), i.b('  <a class="js-form-button-unfollow e2e-form-button-unfollow '), 
                i.sub("size", t, e, n), i.b(' rf-button rf-button--danger rf-button--unfollow"><span class="rf-button__label">'), 
                i.sub("unfollow", t, e, n), i.b("</span></a>"), i.b("\n" + n), i.b("</div>"), i.b("\n"), 
                i.fl();
            },
            partials: {},
            subs: {
                classes: function(t, e, n, i) {},
                type: function(t, e, n, i) {},
                attrs: function(t, e, n, i) {},
                size: function(t, e, n, i) {},
                follow: function(t, e, n, i) {
                    n.s(n.f("translate", t, e, 1), t, e, 0, 703, 723, "{{ }}") && (n.rs(t, e, function(t, e, n) {
                        n.b("button_follow|Follow");
                    }), t.pop()), n.b(n.v(n.f("follow_label_postfix", t, e, 0)));
                },
                following: function(t, e, n, i) {
                    n.s(n.f("translate", t, e, 1), t, e, 0, 978, 1004, "{{ }}") && (n.rs(t, e, function(t, e, n) {
                        n.b("button_following|Following");
                    }), t.pop()), n.b(n.v(n.f("follow_label_postfix", t, e, 0)));
                },
                unfollow: function(t, e, n, i) {
                    n.s(n.f("translate", t, e, 1), t, e, 0, 1255, 1279, "{{ }}") && (n.rs(t, e, function(t, e, n) {
                        n.b("button_unfollow|Unfollow");
                    }), t.pop()), n.b(n.v(n.f("follow_label_postfix", t, e, 0)));
                }
            }
        }, '<div {{#instant_backfill}}data-backfill="instant"{{/instant_backfill}} class="{{$classes}}{{/classes}} js-action-follow {{#is_following}} following{{/is_following}} qa-follow-button-container e2e-follow-button-container form-button-wrap rf-button__container rf-button__container--follow follow-button-container" data-followee="{{id}}" data-entity="{{$type}}{{/type}}" data-source="{{source}}" {{#is_gallery}}data-gallery="{{gallery}}" {{/is_gallery}} {{#is_following}}data-following="true"{{/is_following}} {{$attrs}}{{/attrs}} tabindex="0">\n  <a class="js-form-button-follow e2e-form-button-follow {{$size}}{{/size}} rf-button rf-button--follow"><span class="rf-button__label">{{$follow}}{{#translate}}button_follow|Follow{{/translate}}{{follow_label_postfix}}{{/follow}}</span></a>\n  <a class="qa-form-button-following e2e-form-button-following {{$size}}{{/size}} rf-button rf-button--secondary rf-button--following"><span class="rf-button__label">{{$following}}{{#translate}}button_following|Following{{/translate}}{{follow_label_postfix}}{{/following}}</span></a>\n  <a class="js-form-button-unfollow e2e-form-button-unfollow {{$size}}{{/size}} rf-button rf-button--danger rf-button--unfollow"><span class="rf-button__label">{{$unfollow}}{{#translate}}button_unfollow|Unfollow{{/translate}}{{follow_label_postfix}}{{/unfollow}}</span></a>\n</div>\n', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, function(t, e) {
                return Object.keys(e).reduce(function(t, n) {
                    return t[n] = e[n], t;
                }, t);
            }(o, e), n);
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    369: function(t, e, n) {
        t.exports = n(2)(24);
    },
    370: function(t, e, n) {
        t.exports = n(2)(49);
    },
    373: function(t, e, n) {
        t.exports = n(2)(20);
    },
    377: function(t, e, n) {
        "use strict";
        var i = n(352), o = n.n(i);
        e.default = o.a;
    },
    378: function(t, e, n) {
        (e = t.exports = n(188)(!1)).push([ t.i, ".rf-spinner__spinner:only-child.Spinner-autofill-2bc {\n  height: 100%;\n  min-height: 100%;\n  min-width: 100%;\n  width: 100%;\n}\n.Spinner-blue-3_W {\n  stop-color: #0057ff;\n}\n.Spinner-white-2Dl {\n  stop-color: #fff;\n}\n.Spinner-standaloneSpinner-25B {\n  height: 35px;\n  width: 35px;\n}\n", "" ]), 
        e.locals = {
            autofill: "Spinner-autofill-2bc",
            blue: "Spinner-blue-3_W",
            white: "Spinner-white-2Dl",
            standaloneSpinner: "Spinner-standaloneSpinner-25B"
        };
    },
    394: function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "a", function() {
            return o;
        }), n.d(e, "e", function() {
            return s;
        }), n.d(e, "d", function() {
            return l;
        }), n.d(e, "c", function() {
            return a;
        });
        n(354), n(190);
        var i = "404", o = "202", r = "115";
        function s(t) {
            return t[i];
        }
        function l(t) {
            return t[o];
        }
        function a(t) {
            if (t.covers) {
                t.cover_sizes = r + "px", t.cover_src = t.covers[r] || t.covers.original;
                var e = [];
                for (var n in t.covers) isNaN(Number(n)) || e.push(t.covers[n] + " " + n + "w");
                t.cover_srcset = e.join(",");
            }
        }
    },
    405: function(t, e, n) {
        t.exports = n(2)(28);
    },
    417: function(t, e, n) {
        "use strict";
        n.r(e);
        n(19), n(20), n(22), n(191), n(26), n(27), n(24), n(23);
        var i = n(337), o = n.n(i), r = n(373), s = n.n(r), l = n(436), a = n.n(l), c = n(438), f = n.n(c), u = n(38), p = (n(9), 
        n(11), n(430)), b = "following", d = "following-hold", h = n.n(p).a.extend({
            init: function(t, e) {
                this.$view = t, this._model = e, this.rendered();
            },
            destroy: function() {
                this._model.off(null, null, this);
            },
            rendered: function() {
                var t = this, e = this;
                this._model.on("following", function(e) {
                    t.$view.toggleClass(b, e), t.$view.data("following", e), e && t.$view.addClass(d).one("mouseleave", function() {
                        o()(this).removeClass(d);
                    });
                }, this), this.$view.on("click keyup", function(t) {
                    var n = "click" === t.type, i = "keyup" === t.type && 13 === t.keyCode;
                    if (n || i) {
                        t.stopPropagation();
                        var r = o()(this).data(), s = {
                            backfill: r.backfill
                        };
                        e._controller.follow(s, r.source);
                    }
                });
            }
        }, {
            rateLimitPopup: function(t) {
                return n.e(42).then(n.bind(null, 2598)).then(function(e) {
                    return (0, e.open)(t);
                });
            }
        }), _ = n(14), v = n(1), g = a.a.extend({
            init: function(t, e, n, i) {
                this.views = [], this.type = n || "user", this.gallery = i, this._model = new f.a(t, {
                    blocking: !1,
                    following: e || !1
                }), this.listenTo(this._model, "all", this.trigger);
            },
            _initView: function(t) {
                var e = new h(t, this._model);
                return e._controller = this, e;
            },
            add: function(t) {
                if (t.data("befollow")) return this;
                var e = this._initView(t);
                return t.data("befollow", e), this.views.push(e), this;
            },
            setFollowing: function(t) {
                this._model.set("following", t);
            },
            follow: function(t) {
                var e = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                if (!this._model.get("blocking")) {
                    var i, o = this._model, r = this._model.get("following");
                    return this._model.set("blocking", !0), i = this.constructor.send(this.type, this.id, !r, t, this.gallery, n).then(function(t) {
                        return o.set("following", !r), t.following = !r, "user" === e.type && e.trigger("updated-user"), 
                        t;
                    }, function(t) {
                        var e;
                        429 === t.status && (t.responseJSON && t.responseJSON.messages && (e = t.responseJSON.messages.pop().message), 
                        h.rateLimitPopup(e));
                    }), this.trigger("request", i), i.then(s, s), i;
                }
                function s() {
                    o.set("blocking", !1);
                }
            },
            destroy: function() {
                this.views.forEach(function(t) {
                    t.destroy();
                }), this.views = [], this._model.destroy(), this._model = null;
            }
        }, {
            sendBackfill: function(t, e) {
                return this.send(t, e, !0, {
                    backfill: "instant"
                });
            },
            send: function(t, e, n, i, o, r) {
                return Object(v.default)({
                    url: "/relations/" + t + "/" + e + _.default.getLocation("search"),
                    type: n ? "POST" : "DELETE",
                    data: i
                }).then(function(i) {
                    return u.default.custom("analytics", n ? "Followed" : "Unfollowed", {
                        followee: e,
                        type: t,
                        gallery: o,
                        source: r
                    }), i;
                });
            }
        }).mixin(s.a), w = n(46), m = n(465);
        function y(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, i);
            }
            return n;
        }
        function j(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        var x, O = {};
        x = {
            init: function(t) {
                var e = this;
                return this.signUp = {}, o()(".js-action-follow", t).each(function(t, n) {
                    var i = o()(n), r = i.data("followee"), s = i.data("following"), l = i.data("entity"), a = i.data("gallery");
                    if (w.default.isLoggedIn()) x._bindFollow(i, l, r, s, a); else {
                        var c = j({}, n.id, x._initSignUp(i));
                        e.signUp = function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? y(Object(n), !0).forEach(function(e) {
                                    j(t, e, n[e]);
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach(function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                });
                            }
                            return t;
                        }({}, e.signUp, {}, c);
                    }
                }), this;
            },
            destroy: function() {
                this.signUp = {}, O = {};
            },
            _bindFollow: function(t, e, n, i) {
                var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
                O[e] || (O[e] = {}), O[e][n] || (O[e][n] = x._create(e, n, i, o)), O[e][n].add(t);
            },
            _initSignUp: function(t) {
                var e = t.data(), n = {
                    id: e.followee,
                    entity: e.entity,
                    action: e.action ? e.action : "follow",
                    from: e.signupFrom,
                    displayName: e.displayName
                };
                return m.default.init({
                    data: n,
                    context: t[0]
                });
            },
            _create: function(t, e, n, i) {
                var o = this, r = new g(e, n, t, i);
                return this.listenTo(r, "following", function(n) {
                    this.trigger("following", e, n, t, i);
                }).listenTo(r, "request", function(n) {
                    this.trigger("request", e, n, t, i);
                }).listenTo(r, "updated-user", function() {
                    if (O.project) {
                        var t = o._isFollowingAll();
                        Object.keys(O.project).forEach(function(e) {
                            O.project[e].setFollowing(t);
                        }), t && o.trigger("is-following-all");
                    }
                }), "project" === t && this.listenTo(r, "request", this._updateUsersOnProjectFollow), 
                r;
            },
            _isFollowingAll: function() {
                return !Object.keys(O.user).filter(function(t) {
                    return !O.user[t].data.following;
                }).length;
            },
            _updateUsersOnProjectFollow: function(t) {
                t.then(function(t) {
                    t.owner_ids.forEach(function(e) {
                        O.user[e] && O.user[e].setFollowing(t.following);
                    });
                });
            }
        }, Object.assign(x, s.a);
        e.default = x;
    },
    430: function(t, e, n) {
        t.exports = n(2)(30);
    },
    432: function(t, e, n) {
        t.exports = n(2)(3);
    },
    436: function(t, e, n) {
        t.exports = n(2)(31);
    },
    437: function(t, e, n) {
        var i = n(346), o = {
            "lib/_follow/_button": n(361).template
        }, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.s(i.f("is_profile_owner", t, e, 1), t, e, 1, 0, 0, "") || i.b(i.rp("<lib/_follow/_button0", t, e, "")), 
                i.fl();
            },
            partials: {
                "<lib/_follow/_button0": {
                    name: "lib/_follow/_button",
                    partials: {},
                    subs: {
                        classes: function(t, e, n, i) {
                            n.b("user-follow");
                        },
                        type: function(t, e, n, i) {
                            n.b("user");
                        },
                        size: function(t, e, n, i) {
                            n.b("rf-button--small");
                        },
                        attrs: function(t, e, n, i) {
                            n.b('data-display-name="'), n.b(n.v(n.f("display_name", t, e, 0))), n.b('"');
                        }
                    }
                }
            },
            subs: {}
        }, '{{^is_profile_owner}}\n  {{<lib/_follow/_button}}\n    {{$classes}}user-follow{{/classes}}\n    {{$type}}user{{/type}}\n    {{$size}}rf-button--small{{/size}}\n    {{$attrs}}data-display-name="{{display_name}}"{{/attrs}}\n  {{/lib/_follow/_button}}\n{{/is_profile_owner}}\n', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, function(t, e) {
                return Object.keys(e).reduce(function(t, n) {
                    return t[n] = e[n], t;
                }, t);
            }(o, e), n);
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    438: function(t, e, n) {
        t.exports = n(2)(140);
    },
    456: function(t, e, n) {
        t.exports = n(2)(195);
    },
    457: function(t, e, n) {
        t.exports = n(2)(197);
    },
    460: function(t, e, n) {
        var i = n(346), o = {}, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<svg class="rf-icon rf-icon--appreciate" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0.5 0.5 16 16"><path fill="none" d="M.5.5h16v16H.5z"/><path d="M.5 7.5h3v8h-3zM7.207 15.207c.193.19.425.29.677.293H12c.256 0 .512-.098.707-.293l2.5-2.5c.19-.19.288-.457.293-.707V8.5c0-.553-.445-1-1-1h-5L11 5s.5-.792.5-1.5v-1c0-.553-.447-1-1-1l-1 2-4 4v6l1.707 1.707z"/></svg>'), 
                i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<svg class="rf-icon rf-icon--appreciate" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0.5 0.5 16 16"><path fill="none" d="M.5.5h16v16H.5z"/><path d="M.5 7.5h3v8h-3zM7.207 15.207c.193.19.425.29.677.293H12c.256 0 .512-.098.707-.293l2.5-2.5c.19-.19.288-.457.293-.707V8.5c0-.553-.445-1-1-1h-5L11 5s.5-.792.5-1.5v-1c0-.553-.447-1-1-1l-1 2-4 4v6l1.707 1.707z"/></svg>\n', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, function(t, e) {
                return Object.keys(e).reduce(function(t, n) {
                    return t[n] = e[n], t;
                }, t);
            }(o, e), n);
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    461: function(t, e, n) {
        var i = n(346), o = {}, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<svg class="rf-icon rf-icon--views" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="none" d="M.5.5h16v16H.5z"/><path d="M8.5 3.5c-5 0-8 5-8 5s3 5 8 5 8-5 8-5-3-5-8-5zm0 7c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .894 2 2 0 1.104-.896 2-2 2z"/></svg>'), 
                i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<svg class="rf-icon rf-icon--views" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="none" d="M.5.5h16v16H.5z"/><path d="M8.5 3.5c-5 0-8 5-8 5s3 5 8 5 8-5 8-5-3-5-8-5zm0 7c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .894 2 2 0 1.104-.896 2-2 2z"/></svg>\n', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, function(t, e) {
                return Object.keys(e).reduce(function(t, n) {
                    return t[n] = e[n], t;
                }, t);
            }(o, e), n);
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    462: function(t, e, n) {
        t.exports = n(2)(43);
    },
    465: function(t, e, n) {
        "use strict";
        n.r(e);
        n(9), n(11), n(43);
        var i = n(370), o = n.n(i), r = (n(354), n(37), n(24), n(432)), s = n(46), l = n(462);
        function a(t, e, n, i, o, r, s) {
            try {
                var l = t[r](s), a = l.value;
            } catch (t) {
                return void n(t);
            }
            l.done ? e(a) : Promise.resolve(a).then(i, o);
        }
        function c(t) {
            return r.default.SSO.URLS.LOGIN + "?destination=" + function(t) {
                if (t.adobeidSignupDestination) return encodeURIComponent(t.adobeidSignupDestination);
                var e = {
                    id: t.id,
                    entity: t.entity,
                    action: t.action,
                    title: t.displayName
                }, n = Object.keys(e).map(function(t) {
                    return encodeURIComponent(t) + "=" + encodeURIComponent(e[t]);
                }).join("&");
                return encodeURIComponent("/onboarding?" + n);
            }(t);
        }
        var f = function(t) {
            return u.apply(this, arguments);
        };
        function u() {
            return (u = function(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(i, o) {
                        var r = t.apply(e, n);
                        function s(t) {
                            a(r, i, o, s, l, "next", t);
                        }
                        function l(t) {
                            a(r, i, o, s, l, "throw", t);
                        }
                        s(void 0);
                    });
                };
            }(regeneratorRuntime.mark(function t(e) {
                var n;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return n = {
                            redirect_uri: c(e)
                        }, t.prev = 1, t.next = 4, l.default.logSignUpIntent(e);

                      case 4:
                        s.default.signUp(n), t.next = 11;
                        break;

                      case 7:
                        throw t.prev = 7, t.t0 = t.catch(1), s.default.signUp(n), new Error("Logging Failed");

                      case 11:
                      case "end":
                        return t.stop();
                    }
                }, t, null, [ [ 1, 7 ] ]);
            }))).apply(this, arguments);
        }
        function p(t, e, n, i, o, r, s) {
            try {
                var l = t[r](s), a = l.value;
            } catch (t) {
                return void n(t);
            }
            l.done ? e(a) : Promise.resolve(a).then(i, o);
        }
        e.default = o.a.extend({
            init: function(t) {
                var e = t.data, n = t.context;
                this.data = e, this.context = n;
            },
            bind: function() {
                this.context.addEventListener("click", this._signUp.bind(this));
            },
            unbind: function() {
                this.context.removeEventListener("click", this._signUp.bind(this));
            },
            _signUp: function() {
                var t = this;
                return function(t) {
                    return function() {
                        var e = this, n = arguments;
                        return new Promise(function(i, o) {
                            var r = t.apply(e, n);
                            function s(t) {
                                p(r, i, o, s, l, "next", t);
                            }
                            function l(t) {
                                p(r, i, o, s, l, "throw", t);
                            }
                            s(void 0);
                        });
                    };
                }(regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.prev = 0, e.next = 3, f(t.data);

                          case 3:
                            t.trigger("logged"), e.next = 9;
                            break;

                          case 6:
                            e.prev = 6, e.t0 = e.catch(0), t.trigger("logging-failed");

                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e, null, [ [ 0, 6 ] ]);
                }))();
            }
        });
    },
    489: function(t, e, n) {
        var i = n(346), o = {}, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.b('<svg class="rf-icon rf-icon--followers" xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14"><path fill-rule="evenodd" d="M13 12v2L9 11l4-3v2h3v2H13zM7.809 14H2.75.0V9.75 9.749C0 8.231 1.234 7 2.75 7 2.753 7 2.757 7 2.76 7H8.537C7.584 8.062 7 9.462 7 11.001 7 12.096 7.298 13.117 7.809 14zM6 5C4.619 5 3.5 3.881 3.5 2.5 3.5 1.119 4.619.0 6 0 7.381.0 8.5 1.119 8.5 2.5 8.5 3.881 7.381 5 6 5z"/></svg>'), 
                i.b("\n"), i.fl();
            },
            partials: {},
            subs: {}
        }, '<svg class="rf-icon rf-icon--followers" xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14"><path fill-rule="evenodd" d="M13 12v2L9 11l4-3v2h3v2H13zM7.809 14H2.75.0V9.75 9.749C0 8.231 1.234 7 2.75 7 2.753 7 2.757 7 2.76 7H8.537C7.584 8.062 7 9.462 7 11.001 7 12.096 7.298 13.117 7.809 14zM6 5C4.619 5 3.5 3.881 3.5 2.5 3.5 1.119 4.619.0 6 0 7.381.0 8.5 1.119 8.5 2.5 8.5 3.881 7.381 5 6 5z"/></svg>\n', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, function(t, e) {
                return Object.keys(e).reduce(function(t, n) {
                    return t[n] = e[n], t;
                }, t);
            }(o, e), n);
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    522: function(t, e, n) {
        t.exports = n(2)(108);
    },
    575: function(t, e, n) {
        t.exports = n(2)(271);
    },
    585: function(t, e, n) {
        t.exports = n(2)(136);
    },
    642: function(t, e, n) {
        var i = n(946);
        "string" == typeof i && (i = [ [ t.i, i, "" ] ]), i.locals && (t.exports = i.locals);
        (0, n(189).default)("13e591ee", i, !0, {});
    },
    676: function(t, e, n) {
        t.exports = n(2)(13);
    },
    707: function(t, e, n) {
        var i = n(346), o = {
            "bestyleguide/_avatar": n(585).template,
            "lib/_follow/_buttonUserSmall": n(437).template,
            "bestyleguide/_icons/_appreciate": n(460).template,
            "bestyleguide/_icons/_views": n(461).template,
            "bestyleguide/_icons/_followers": n(489).template
        }, r = new i.Template({
            code: function(t, e, n) {
                var i = this;
                return i.b(n = n || ""), i.s(i.f("user", t, e, 1), t, e, 0, 9, 2318, "{{ }}") && (i.rs(t, e, function(t, e, i) {
                    i.b('<div class="rf-mini-profile hide-phone hide-tablet">'), i.b("\n"), i.b("\n" + n), 
                    i.b('  <div class="rf-mini-profile__user-info-wrap">'), i.b("\n" + n), i.b('    <div class="rf-mini-profile__user-info-container">'), 
                    i.b("\n" + n), i.b(i.rp("<bestyleguide/_avatar0", t, e, "")), i.b("\n" + n), i.b('      <div class="rf-mini-profile__user-info">'), 
                    i.b("\n" + n), i.b('        <a target="_blank" href="'), i.b(i.v(i.f("url", t, e, 0))), 
                    i.b('" class="rf-mini-profile__user-name">'), i.b(i.v(i.f("display_name", t, e, 0))), 
                    i.b("</a>"), i.b("\n" + n), i.b('        <a target="_blank" href="'), i.b(i.v(i.f("location_link", t, e, 0))), 
                    i.b('" class="rf-mini-profile__user-location">'), i.s(i.f("city", t, e, 1), t, e, 0, 609, 619, "{{ }}") && (i.rs(t, e, function(t, e, n) {
                        n.b(n.v(n.f("city", t, e, 0))), n.b(", ");
                    }), t.pop()), i.s(i.f("state", t, e, 1), t, e, 0, 638, 649, "{{ }}") && (i.rs(t, e, function(t, e, n) {
                        n.b(n.v(n.f("state", t, e, 0))), n.b(", ");
                    }), t.pop()), i.s(i.f("country", t, e, 1), t, e, 0, 671, 682, "{{ }}") && (i.rs(t, e, function(t, e, n) {
                        n.b(n.v(n.f("country", t, e, 0)));
                    }), t.pop()), i.b("</a>"), i.b("\n" + n), i.b("      </div>"), i.b("\n" + n), i.b("    </div>"), 
                    i.b("\n" + n), i.b(i.rp("<lib/_follow/_buttonUserSmall1", t, e, "    ")), i.b("  </div>"), 
                    i.b("\n"), i.b("\n" + n), i.s(i.f("has_latest_projects", t, e, 1), t, e, 0, 797, 1568, "{{ }}") && (i.rs(t, e, function(t, e, i) {
                        i.b('    <div class="rf-mini-profile__projects">'), i.b("\n" + n), i.s(i.f("latest_projects", t, e, 1), t, e, 0, 868, 1534, "{{ }}") && (i.rs(t, e, function(t, e, i) {
                            i.s(i.d(".", t, e, 1), t, e, 0, 883, 1418, "{{ }}") && (i.rs(t, e, function(t, e, i) {
                                i.b('          <a target="_blank" href="'), i.b(i.v(i.f("url", t, e, 0))), i.b('" class="rf-mini-profile__project-image-wrapper js-mini-profile__project-image-wrapper">'), 
                                i.b("\n" + n), i.s(i.f("cover_srcset", t, e, 1), t, e, 0, 1044, 1377, "{{ }}") && (i.rs(t, e, function(t, e, i) {
                                    i.b("              <img"), i.b("\n" + n), i.b("                "), i.s(i.f("cover_src", t, e, 1), t, e, 0, 1094, 1113, "{{ }}") && (i.rs(t, e, function(t, e, n) {
                                        n.b('src="'), n.b(n.v(n.f("cover_src", t, e, 0))), n.b('"');
                                    }), t.pop()), i.b("\n" + n), i.b("                "), i.s(i.f("cover_sizes", t, e, 1), t, e, 0, 1160, 1183, "{{ }}") && (i.rs(t, e, function(t, e, n) {
                                        n.b('sizes="'), n.b(n.v(n.f("cover_sizes", t, e, 0))), n.b('"');
                                    }), t.pop()), i.b(" "), i.b("\n" + n), i.b("                "), i.s(i.f("cover_srcset", t, e, 1), t, e, 0, 1234, 1259, "{{ }}") && (i.rs(t, e, function(t, e, n) {
                                        n.b('srcset="'), n.b(n.v(n.f("cover_srcset", t, e, 0))), n.b('"');
                                    }), t.pop()), i.b(" "), i.b("\n" + n), i.b('                class="rf-mini-profile__project-image js-mini-profile__project-image">'), 
                                    i.b("\n" + n);
                                }), t.pop()), i.b("          </a>"), i.b("\n" + n);
                            }), t.pop()), i.s(i.d(".", t, e, 1), t, e, 1, 0, 0, "") || (i.b('          <div class="rf-mini-profile__project-image-placeholder"></div>'), 
                            i.b("\n" + n));
                        }), t.pop()), i.b("    </div>"), i.b("\n" + n);
                    }), t.pop()), i.b("\n" + n), i.s(i.f("stats", t, e, 1), t, e, 0, 1606, 2272, "{{ }}") && (i.rs(t, e, function(t, e, i) {
                        i.b('  <div class="rf-mini-profile__stats">'), i.b("\n" + n), i.b('    <span class="rf-mini-profile__stat rf-mini-profile__stat--appreciations">'), 
                        i.b("\n" + n), i.b(i.rp("<bestyleguide/_icons/_appreciate2", t, e, "      ")), i.b('      <span class="rf-mini-profile__stat-number"> '), 
                        i.b(i.v(i.f("appreciations", t, e, 0))), i.b("</span>"), i.b("\n" + n), i.b("    </span>"), 
                        i.b("\n"), i.b("\n" + n), i.b('    <span class="rf-mini-profile__stat rf-mini-profile__stat--views">'), 
                        i.b("\n" + n), i.b(i.rp("<bestyleguide/_icons/_views3", t, e, "      ")), i.b('      <span class="rf-mini-profile__stat-number">'), 
                        i.b(i.v(i.f("views", t, e, 0))), i.b("</span>"), i.b("\n" + n), i.b("    </span>"), 
                        i.b("\n"), i.b("\n" + n), i.b('    <span class="rf-mini-profile__stat rf-mini-profile__stat--followers">'), 
                        i.b("\n" + n), i.b(i.rp("<bestyleguide/_icons/_followers4", t, e, "      ")), i.b('      <span class="rf-mini-profile__stat-number">'), 
                        i.b(i.v(i.f("followers", t, e, 0))), i.b("</span>"), i.b("\n" + n), i.b("    </span>"), 
                        i.b("\n" + n), i.b("  </div> \x3c!-- .stats-wrap --\x3e"), i.b("\n" + n);
                    }), t.pop()), i.b("</div> \x3c!-- .mini-profile-wrap --\x3e"), i.b("\n" + n);
                }), t.pop()), i.fl();
            },
            partials: {
                "<bestyleguide/_avatar0": {
                    name: "bestyleguide/_avatar",
                    partials: {},
                    subs: {
                        avatarUrl: function(t, e, n, i) {
                            n.b(n.v(n.f("url", t, e, 0)));
                        },
                        src: function(t, e, n, i) {
                            n.b(n.v(n.d("images.115", t, e, 0)));
                        },
                        srcLarge: function(t, e, n, i) {
                            n.b(n.v(n.d("images.230", t, e, 0)));
                        }
                    }
                },
                "<lib/_follow/_buttonUserSmall1": {
                    name: "lib/_follow/_buttonUserSmall",
                    partials: {},
                    subs: {}
                },
                "<bestyleguide/_icons/_appreciate2": {
                    name: "bestyleguide/_icons/_appreciate",
                    partials: {},
                    subs: {}
                },
                "<bestyleguide/_icons/_views3": {
                    name: "bestyleguide/_icons/_views",
                    partials: {},
                    subs: {}
                },
                "<bestyleguide/_icons/_followers4": {
                    name: "bestyleguide/_icons/_followers",
                    partials: {},
                    subs: {}
                }
            },
            subs: {}
        }, '{{#user}}\n<div class="rf-mini-profile hide-phone hide-tablet">\n\n  <div class="rf-mini-profile__user-info-wrap">\n    <div class="rf-mini-profile__user-info-container">\n      {{<bestyleguide/_avatar}}\n        {{$avatarUrl}}{{url}}{{/avatarUrl}}\n        {{$src}}{{images.115}}{{/src}}\n        {{$srcLarge}}{{images.230}}{{/srcLarge}}\n      {{/bestyleguide/_avatar}}\n\n      <div class="rf-mini-profile__user-info">\n        <a target="_blank" href="{{url}}" class="rf-mini-profile__user-name">{{display_name}}</a>\n        <a target="_blank" href="{{location_link}}" class="rf-mini-profile__user-location">{{#city}}{{city}}, {{/city}}{{#state}}{{state}}, {{/state}}{{#country}}{{country}}{{/country}}</a>\n      </div>\n    </div>\n    {{>lib/_follow/_buttonUserSmall}}\n  </div>\n\n  {{#has_latest_projects}}\n    <div class="rf-mini-profile__projects">\n      {{#latest_projects}}\n        {{#.}}\n          <a target="_blank" href="{{url}}" class="rf-mini-profile__project-image-wrapper js-mini-profile__project-image-wrapper">\n            {{#cover_srcset}}\n              <img\n                {{#cover_src}}src="{{cover_src}}"{{/cover_src}}\n                {{#cover_sizes}}sizes="{{cover_sizes}}"{{/cover_sizes}} \n                {{#cover_srcset}}srcset="{{cover_srcset}}"{{/cover_srcset}} \n                class="rf-mini-profile__project-image js-mini-profile__project-image">\n            {{/cover_srcset}}\n          </a>\n        {{/.}}\n        {{^.}}\n          <div class="rf-mini-profile__project-image-placeholder"></div>\n        {{/.}}\n      {{/latest_projects}}\n    </div>\n  {{/has_latest_projects}}\n\n  {{#stats}}\n  <div class="rf-mini-profile__stats">\n    <span class="rf-mini-profile__stat rf-mini-profile__stat--appreciations">\n      {{>bestyleguide/_icons/_appreciate}}\n      <span class="rf-mini-profile__stat-number"> {{appreciations}}</span>\n    </span>\n\n    <span class="rf-mini-profile__stat rf-mini-profile__stat--views">\n      {{>bestyleguide/_icons/_views}}\n      <span class="rf-mini-profile__stat-number">{{views}}</span>\n    </span>\n\n    <span class="rf-mini-profile__stat rf-mini-profile__stat--followers">\n      {{>bestyleguide/_icons/_followers}}\n      <span class="rf-mini-profile__stat-number">{{followers}}</span>\n    </span>\n  </div> \x3c!-- .stats-wrap --\x3e\n  {{/stats}}\n</div> \x3c!-- .mini-profile-wrap --\x3e\n{{/user}}\n', i);
        r.ri = function(t, e, n) {
            return i.helpers && t.unshift(i.helpers), this.r(t, function(t, e) {
                return Object.keys(e).reduce(function(t, n) {
                    return t[n] = e[n], t;
                }, t);
            }(o, e), n);
        }, t.exports = r.render.bind(r), t.exports.template = r;
    },
    778: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n(337), o = n.n(i), r = n(1), s = n(522), l = (n(19), n(20), n(22), n(26), 
        n(27), n(24), n(23), n(417)), a = n(575), c = n(707), f = n.n(c), u = n(394);
        function p(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, i);
            }
            return n;
        }
        function b(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        var d, h, _, v = a.default.extend({
            mustache: f.a,
            template: function(t) {
                return t.user && t.user.latest_projects && t.user.latest_projects.forEach(u.c), 
                this._super(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? p(Object(n), !0).forEach(function(e) {
                            b(t, e, n[e]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                        });
                    }
                    return t;
                }({
                    classes: [ "hide-tablet", "hide-phone", "js-mini-profile-popup" ]
                }, t));
            },
            position: function() {
                var t, e, n, i = this._controller.$context.width() / 2, o = this.constructor.NUB_OFFSET - i, r = o < 0 ? "+" : "-";
                this._super(this._controller.$context, {
                    my: "left top",
                    at: "left" + r + Math.abs(o) + " bottom+" + this.constructor.NUB_HEIGHT,
                    collision: "flipfit",
                    within: this._model.get("within")
                }), t = this._controller.$context.offset(), e = this.$view.offset(), this._model.get("bottom") && e.top + this.$view.height() > this._model.get("bottom").offset().top ? (this._super(this._controller.$context, {
                    my: "left" + r + Math.abs(o) + " bottom-" + this.constructor.NUB_HEIGHT,
                    at: "left top",
                    collision: "flipfit none",
                    within: this._model.get("within")
                }), n = "bottom") : n = t.top > e.top ? "bottom" : "top", n += Math.floor(t.left) > e.left + Math.abs(o) ? "-right" : "-left", 
                this.$view.removeClass("top-right top-left bottom-right bottom-left").addClass(n);
            },
            rendered: function() {
                this._super(), l.default.init(this.$view);
            },
            show: function() {
                if (!document.body.contains(this._controller.$context[0])) return this.hide();
                this.$view && (this.$view.removeClass("hide"), this.position()), this._super();
            },
            hide: function() {
                this._super(), this.destroy();
            },
            _bind: o.a.noop,
            _unbind: o.a.noop
        }, {
            NUB_OFFSET: 32,
            NUB_HEIGHT: 12
        }), g = s.default.extend({
            init: function() {
                this._super.apply(this, arguments), this.listenTo(this._view, {
                    postrender: function(t) {
                        this._bindHide(t);
                    },
                    hide: function() {
                        this._unbindHide();
                    }
                }), this._keepAlive = this._keepAlive.bind(this), this._setDeath = this._setDeath.bind(this);
            },
            _unbindHide: function() {
                this.$context.off(".miniprofile");
            },
            _bindHide: function(t) {
                t.on({
                    "mouseenter.miniprofile": this._keepAlive,
                    "mouseleave.miniprofile": this._setDeath,
                    "click.miniprofile": this._setDeath
                });
            },
            setContext: function(t) {
                this.$context = t, this._unbindHide(), this._bindHide(this.$context);
            },
            _keepAlive: function() {
                clearTimeout(this._hideTimeout);
            },
            _setDeath: function() {
                var t = this;
                this._hideTimeout = setTimeout(function() {
                    t._view && (t._view.hide(), t.trigger("closed"));
                }, this.constructor.HIDE_TIMEOUT);
            }
        }, {
            VIEW_CLASS: v,
            HIDE_TIMEOUT: 500
        }), w = 500;
        function m(t) {
            return Object(r.default)({
                url: "/v2/users/" + t,
                type: "get",
                data: {
                    format: "mini",
                    client_id: window.adobeid.client_id
                }
            });
        }
        e.default = {
            init: function() {
                var t, e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o()(document.body), i = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o()(".js-footer"), s = n instanceof o.a ? n : o()(n);
                h = i || o()(window), d = r, s.on("mouseenter", ".js-mini-profile", function() {
                    var n = o()(this);
                    n.data("hasMiniProfile") || (t = n.data("id"), clearTimeout(_), _ = setTimeout(function() {
                        n.addClass("wait"), (e = m(t)).then(function(t) {
                            n.removeClass("wait"), function(t, e) {
                                var n = new g(e);
                                t.parents(".popup").length ? (e.within = o()(window), e.bottom = null) : (e.within = h, 
                                e.bottom = d), t.data("hasMiniProfile", !0), n.setContext(t), n.render(t), t.trigger("miniprofile-rendered"), 
                                n._view.show(), n.on("closed", function() {
                                    t.data("hasMiniProfile", !1), n.destroy();
                                });
                            }(n, t), e = null;
                        }, function() {
                            n.removeClass("wait");
                        });
                    }, w));
                }).on("mouseleave", ".js-mini-profile", function() {
                    clearTimeout(_), e && (e.reject(), e = null, s.data("hasMiniProfile", !1));
                });
            },
            destroy: function(t) {
                clearTimeout(_), (t = t || o()(document.body)).off("mouseenter mouseleave", ".js-mini-profile");
            },
            loadUser: m,
            popUpDelay: w
        };
    },
    928: function(t, e, n) {
        "use strict";
        n(19), n(69), n(85), n(20), n(22), n(108), n(42), n(26), n(27), n(24), n(9), n(11), 
        n(107), n(84), n(44), n(467), n(23), n(45), n(43);
        var i, o, r = n(337), s = n.n(r), l = n(676), a = n.n(l), c = n(373), f = n.n(c), u = n(369), p = n.n(u), b = n(14), d = (n(59), 
        n(0)), h = "POPUP_OPENED", _ = "SET_PROJECTS", v = "SET_TRACKING_SOURCE", g = "SET_BASE_PAGE_URL", w = {
            namespaced: !0,
            state: function() {
                return {
                    projects: [],
                    trackingSource: "",
                    backgroundPageUrl: ""
                };
            },
            actions: (i = {}, i[h] = function(t, e) {
                var n = t.commit, i = e.entities, o = e.trackingSource, r = e.backgroundPageUrl;
                return Object(d.__awaiter)(this, void 0, void 0, function() {
                    return Object(d.__generator)(this, function(t) {
                        return n(g, r), n(_, i), n(v, o), [ 2 ];
                    });
                });
            }, i),
            mutations: (o = {}, o[g] = function(t, e) {
                t.backgroundPageUrl = e;
            }, o[_] = function(t, e) {
                t.projects = e;
            }, o[v] = function(t, e) {
                t.trackingSource = e;
            }, o)
        }, m = function(t) {
            return /^project/.test(t.name);
        }, y = {
            watch: {
                $route: function(t, e) {
                    !m(t) || m(e) ? !m(t) && m(e) && this.$emit("close") : this.$emit("open");
                }
            },
            beforeCreate: function() {
                this.$store.registerModule("layout", w);
            },
            beforeDestroy: function() {
                this.$store.unregisterModule("layout");
            }
        }, j = n(945), x = n(68);
        var O = Object(x.default)(y, function() {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", {
                class: [ this.$style.app, "qa-project-popup" ]
            }, [ e("router-view") ], 1);
        }, [], !1, function(t) {
            this.$style = j.default.locals || j.default;
        }, null, null).exports, k = n(17), P = n(58), S = n(90), $ = n(72), U = n(129), E = n(119), z = n(132), T = n(116), C = n(120), M = n.n(C), D = n(134), H = n.n(D), I = n(38), L = n(133);
        function F(t, e, n, i, o, r, s) {
            try {
                var l = t[r](s), a = l.value;
            } catch (t) {
                return void n(t);
            }
            l.done ? e(a) : Promise.resolve(a).then(i, o);
        }
        function A(t) {
            return function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n;
                }
            }(t) || function(t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance");
            }();
        }
        function B(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, i);
            }
            return n;
        }
        function N(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? B(Object(n), !0).forEach(function(e) {
                    R(t, e, n[e]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : B(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
            }
            return t;
        }
        function R(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        e.a = N({
            init: function() {
                var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = e.gates, i = void 0 === n ? {} : n, o = e.config, r = void 0 === o ? {} : o, l = e.loggedInUser, a = void 0 === l ? {} : l, c = e.projectEntities, f = void 0 === c ? [] : c, u = e.trackingSource, p = void 0 === u ? "" : u, b = e.backgroundPageUrl, d = void 0 === b ? "" : b;
                this._initPopup(i, r, a), this.maybePushState = this.maybePushState.bind(this), 
                this.projectEntities = f, this.trackingSource = p, this.backgroundPageUrl = d;
                return s()(document.body).on("click.project-popup", ".js-project-cover-title-link, .js-project-comment-link, .js-project-cover-image-link, .js-project-sibling-link, .js-project-cover-stats-link, .js-project-promote", function(e) {
                    return t.maybePushState(e);
                }), this.vm;
            },
            updateProjectEntities: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                this.projectEntities = t;
            },
            setBackgroundPageUrl: function(t) {
                this.backgroundPageUrl = t;
            },
            _initPopup: function(t, e, n) {
                var i = this;
                k.default.use(P.default), k.default.use(S.a), k.default.use(H.a), k.default.use(L.a);
                var o = new P.default.Store({
                    modules: {
                        translation: $.default,
                        user: U.default,
                        error: E.b
                    }
                }), r = {
                    config: e,
                    gates: t,
                    user: {
                        loggedInUser: n
                    }
                };
                o.replaceState(M()({}, o.state, r)), Object(z.default)(k.default).setLocalization(o, r.config.LOCALIZATION);
                var s = new S.a({
                    mode: "history",
                    routes: A(Object(T.c)(o))
                });
                s.afterEach(function(t) {
                    t.matched.length && I.default.pageView("gallery:popup");
                }), this.vm = new k.default(N({}, O, {
                    router: s,
                    store: o
                })), this.vm.$on("open", function(t) {
                    return function() {
                        var e = this, n = arguments;
                        return new Promise(function(i, o) {
                            var r = t.apply(e, n);
                            function s(t) {
                                F(r, i, o, s, l, "next", t);
                            }
                            function l(t) {
                                F(r, i, o, s, l, "throw", t);
                            }
                            s(void 0);
                        });
                    };
                }(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, i.vm.$store.dispatch("layout/" + h, {
                                entities: i.projectEntities,
                                trackingSource: i.trackingSource,
                                backgroundPageUrl: i.backgroundPageUrl
                            });

                          case 2:
                            i.vm.$emit("entitiesSet");

                          case 3:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                }))), this.vm.$mount(document.querySelector(".js-vue-project-view-mount"));
            },
            maybePushState: function(t) {
                var e = t.button, n = t.altKey, i = t.ctrlKey, o = t.metaKey, r = t.shiftKey, s = t.currentTarget;
                if (p.a.is("desktop") && !a()("touch") && !(0 !== e || n || i || o || r)) {
                    var l = s.href;
                    b.default.getLocation("href") !== l && (t.preventDefault(), this.pushState(t));
                }
            },
            pushState: function(t) {
                this.vm.$router.push({
                    path: "" + t.currentTarget.pathname + t.currentTarget.search
                });
            },
            destroy: function() {
                this.vm.$destroy(), this.vm = null, this.off(), s()(window).off("popstate.project-popup"), 
                s()(document.body).off("click.project-popup");
            }
        }, f.a);
    },
    945: function(t, e, n) {
        "use strict";
        var i = n(642), o = n.n(i);
        e.default = o.a;
    },
    946: function(t, e, n) {
        (e = t.exports = n(188)(!1)).push([ t.i, ".ProjectPopupLayout-app-3ym {\n  position: relative;\n  z-index: 7;\n}\n.ProjectPopupLayout-app-3ym * {\n    box-sizing: border-box;\n}\n", "" ]), 
        e.locals = {
            app: "ProjectPopupLayout-app-3ym"
        };
    }
} ]);