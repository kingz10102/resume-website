(("undefined" != typeof global ? global : self).webpackJsonp = ("undefined" != typeof global ? global : self).webpackJsonp || []).push([ [ 96 ], {
    1049: function(e, t, n) {
        "use strict";
        var r = n(17), l = n(14), o = r.default.extend({
            props: {
                tag: {
                    type: [ Object, String ],
                    default: "div"
                },
                listenerActive: {
                    type: Boolean,
                    default: !0
                }
            },
            data: function() {
                return {
                    requestAnimationFrameID: null
                };
            },
            methods: {
                handleDocumentClick: function(e) {
                    var t = e.target;
                    this.listenerActive && t instanceof Node && !this.$el.contains(t) && this.$emit("clickout", e);
                },
                addClickoutListener: function() {
                    var e = this;
                    this.requestAnimationFrameID || (this.requestAnimationFrameID = l.default.requestAnimationFrame(function() {
                        document.addEventListener("click", e.handleDocumentClick), e.requestAnimationFrameID = null;
                    }));
                },
                cleanupClickoutListener: function() {
                    this.requestAnimationFrameID && (cancelAnimationFrame(this.requestAnimationFrameID), 
                    this.requestAnimationFrameID = null), document.removeEventListener("click", this.handleDocumentClick);
                }
            },
            watch: {
                listenerActive: function(e) {
                    e ? this.addClickoutListener() : this.cleanupClickoutListener();
                }
            },
            mounted: function() {
                this.listenerActive && this.addClickoutListener();
            },
            beforeDestroy: function() {
                this.cleanupClickoutListener();
            }
        }), i = n(68), a = Object(i.default)(o, function() {
            var e = this.$createElement;
            return (this._self._c || e)(this.tag, {
                ref: "container",
                tag: "component"
            }, [ this._t("default") ], 2);
        }, [], !1, null, null, null).exports, s = r.default.extend({
            components: {
                ClickoutListener: a
            },
            props: {
                isOpen: Boolean,
                contentContainerClass: [ String, Object, Array ]
            }
        }), u = n(1191);
        var c = Object(i.default)(s, function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("ClickoutListener", {
                class: e.$style.dropdown,
                attrs: {
                    listenerActive: e.isOpen
                },
                on: {
                    clickout: function(t) {
                        return e.$emit("clickout", t);
                    }
                }
            }, [ e._t("control"), n("div", {
                directives: [ {
                    name: "show",
                    rawName: "v-show",
                    value: e.isOpen,
                    expression: "isOpen"
                } ],
                class: [ e.$style.dropdownContent, e.contentContainerClass ],
                attrs: {
                    "data-ut": "dropdown-content-container"
                }
            }, [ e._t("content") ], 2) ], 2);
        }, [], !1, function(e) {
            this.$style = u.default.locals || u.default;
        }, null, null);
        t.a = c.exports;
    },
    1052: function(e, t, n) {
        "use strict";
        var r = n(17).default.extend({
            props: {
                items: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                },
                keyboardActive: Boolean,
                displayFunction: {
                    type: Function,
                    default: function(e) {
                        return e;
                    }
                },
                keyFunction: {
                    type: Function,
                    default: function(e, t) {
                        return t;
                    }
                }
            },
            data: function() {
                return {
                    selectedIdx: null,
                    ignoreMouse: !1
                };
            },
            computed: {
                length: function() {
                    var e, t;
                    return null !== (t = null === (e = this.items) || void 0 === e ? void 0 : e.length) && void 0 !== t ? t : 0;
                }
            },
            watch: {
                keyboardActive: function(e) {
                    e ? this.addKeydownListener() : this.removeKeydownListener();
                },
                items: function() {
                    this.selectedIdx = null;
                }
            },
            mounted: function() {
                this.keyboardActive && this.addKeydownListener();
            },
            beforeDestroy: function() {
                this.removeKeydownListener(), this.removeMouseMoveListener();
            },
            methods: {
                addKeydownListener: function() {
                    document.addEventListener("keydown", this.handleKeydown);
                },
                removeKeydownListener: function() {
                    document.removeEventListener("keydown", this.handleKeydown);
                },
                handleItemMouseover: function(e) {
                    this.ignoreMouse || (this.selectedIdx = e);
                },
                handleKeydown: function(e) {
                    "ArrowDown" === e.key ? (e.preventDefault(), this.updateSelectedIdxByDelta(1), this.ignoreMouseOverUntilMove()) : "ArrowUp" === e.key ? (e.preventDefault(), 
                    this.updateSelectedIdxByDelta(-1), this.ignoreMouseOverUntilMove()) : "Enter" === e.key && null !== this.selectedIdx && this.selectIdx(this.selectedIdx);
                },
                ignoreMouseOverUntilMove: function() {
                    this.ignoreMouse || this.$el.addEventListener("mousemove", this.handleMouseMove), 
                    this.ignoreMouse = !0;
                },
                handleMouseMove: function() {
                    this.ignoreMouse = !1, this.removeMouseMoveListener();
                },
                removeMouseMoveListener: function() {
                    this.$el.removeEventListener("mousemove", this.handleMouseMove);
                },
                updateSelectedIdxByDelta: function(e) {
                    this.length && (null === this.selectedIdx ? this.selectedIdx = e >= 0 ? 0 : this.length - 1 : this.selectedIdx = (this.selectedIdx + e % this.length + this.length) % this.length, 
                    this.scrollToItemIfHidden(this.selectedIdx));
                },
                selectIdx: function(e) {
                    this.$emit("selected", this.items[e]);
                },
                isSelected: function(e) {
                    return e === this.selectedIdx;
                },
                getItemRef: function(e) {
                    return "item-" + e;
                },
                scrollToItemIfHidden: function(e) {
                    var t = this.$refs[this.getItemRef(e)][0];
                    t.offsetTop >= this.$el.scrollTop + this.$el.clientHeight ? this.$el.scrollTop = t.offsetTop : t.offsetTop < this.$el.scrollTop && (this.$el.scrollTop = t.offsetTop - this.$el.clientHeight + t.clientHeight);
                }
            }
        }), l = n(1193), o = n(68);
        var i = Object(o.default)(r, function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("ul", {
                class: e.$style.resultsList
            }, e._l(e.items, function(t, r) {
                var l;
                return n("li", {
                    key: e.keyFunction(t, r),
                    ref: e.getItemRef(r),
                    refInFor: !0,
                    on: {
                        mouseover: function(t) {
                            return e.handleItemMouseover(r);
                        },
                        click: function(t) {
                            return e.selectIdx(r);
                        }
                    }
                }, [ e._t("default", [ n("div", {
                    class: [ e.$style.resultItem, (l = {}, l[e.$style.selected] = e.isSelected(r), l) ],
                    attrs: {
                        "data-ut": "result-item"
                    }
                }, [ e._v(e._s(e.displayFunction(t))) ]) ], null, {
                    item: t,
                    isSelected: e.isSelected(r)
                }) ], 2);
            }), 0);
        }, [], !1, function(e) {
            this.$style = l.default.locals || l.default;
        }, null, null);
        t.a = i.exports;
    },
    1191: function(e, t, n) {
        "use strict";
        var r = n(774), l = n.n(r);
        t.default = l.a;
    },
    1192: function(e, t, n) {
        (t = e.exports = n(188)(!1)).push([ e.i, ".Dropdown-dropdown-1PS {\n  position: relative;\n}\n.Dropdown-dropdownContent-D0U {\n  background-color: #fff;\n  border-radius: 3px;\n  box-shadow: 0 1px 2px rgba(25, 25, 25, 0.2);\n  position: absolute;\n  top: 100%;\n  width: 100%;\n}\n", "" ]), 
        t.locals = {
            dropdown: "Dropdown-dropdown-1PS",
            dropdownContent: "Dropdown-dropdownContent-D0U"
        };
    },
    1193: function(e, t, n) {
        "use strict";
        var r = n(775), l = n.n(r);
        t.default = l.a;
    },
    1194: function(e, t, n) {
        (t = e.exports = n(188)(!1)).push([ e.i, ".ResultsList-resultItem-1d_ {\n  cursor: pointer;\n  font-weight: 600;\n  line-height: 32px;\n  padding: 0 10px;\n  vertical-align: middle;\n}\n.ResultsList-resultItem-1d_.ResultsList-selected-2Hz {\n    background-color: #0057ff;\n    color: #fff;\n    -webkit-transition: background-color 0.1s linear, color 0.1s linear;\n    transition: background-color 0.1s linear, color 0.1s linear;\n}\n", "" ]), 
        t.locals = {
            resultItem: "ResultsList-resultItem-1d_",
            selected: "ResultsList-selected-2Hz"
        };
    },
    1195: function(e, t, n) {
        var r = n(1674);
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n(189).default)("42100bae", r, !0, {});
    },
    1196: function(e, t, n) {
        var r = n(1676);
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n(189).default)("1c46b948", r, !0, {});
    },
    1219: function(e, t, n) {
        "use strict";
        var r = n(17), l = n(351), o = r.default.extend({
            inheritAttrs: !1,
            components: {
                CloseIcon: l.a
            },
            props: {
                placeholder: String,
                value: String,
                isSelected: Boolean,
                ariaLabel: {
                    type: String,
                    required: !0
                },
                validator: RegExp,
                inputClass: String
            },
            methods: {
                validateContent: function(e) {
                    this.validator && (this.validator.test(e.key) || (e.preventDefault(), this.$emit("keyPrevented", e.key)));
                }
            }
        }), i = n(1330), a = n(68);
        var s = Object(a.default)(o, function() {
            var e, t = this, n = t.$createElement, r = t._self._c || n;
            return r("div", {
                class: t.$style.container
            }, [ r("input", t._b({
                class: [ t.$style.singleTagInput, (e = {}, e[t.$style.selected] = t.isSelected, 
                e), t.inputClass ],
                attrs: {
                    placeholder: t.placeholder,
                    "aria-label": t.ariaLabel
                },
                domProps: {
                    value: t.value
                },
                on: {
                    keypress: t.validateContent,
                    input: function(e) {
                        return t.$emit("input", e.target.value);
                    },
                    focus: function(e) {
                        return t.$emit("focus", e);
                    },
                    blur: function(e) {
                        return t.$emit("blur", e);
                    },
                    keyup: function(e) {
                        return t.$emit("keyup", e);
                    }
                }
            }, "input", t.$attrs, !1)), r("button", {
                directives: [ {
                    name: "show",
                    rawName: "v-show",
                    value: t.isSelected,
                    expression: "isSelected"
                } ],
                class: t.$style.clearButton,
                on: {
                    click: function(e) {
                        return t.$emit("clear-clicked", e);
                    }
                }
            }, [ r("CloseIcon", {
                class: t.$style.icon
            }) ], 1) ]);
        }, [], !1, function(e) {
            this.$style = i.default.locals || i.default;
        }, null, null);
        t.a = s.exports;
    },
    1220: function(e, t, n) {
        "use strict";
        var r = n(17).default.extend({
            props: {
                sectionAfter: Boolean,
                sectionBefore: Boolean
            }
        }), l = n(1332), o = n(68);
        var i = Object(o.default)(r, function() {
            var e, t = this.$createElement;
            return (this._self._c || t)("div", {
                class: [ this.$style.extraSection, (e = {}, e[this.$style.sectionAfter] = this.sectionAfter, 
                e[this.$style.sectionBefore] = this.sectionBefore, e) ]
            }, [ this._t("default") ], 2);
        }, [], !1, function(e) {
            this.$style = l.default.locals || l.default;
        }, null, null);
        t.a = i.exports;
    },
    1330: function(e, t, n) {
        "use strict";
        var r = n(898), l = n.n(r);
        t.default = l.a;
    },
    1331: function(e, t, n) {
        (t = e.exports = n(188)(!1)).push([ e.i, ".SingleTagInput-container-3M- {\n  -webkit-box-align: center;\n          align-items: center;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  display: -webkit-box;\n  display: flex;\n  position: relative;\n  width: 100%;\n}\n.SingleTagInput-singleTagInput-LQ4 {\n  border: none;\n  border-radius: inherit;\n  color: inherit;\n  font-size: 13px;\n  font-weight: 600;\n  height: 32px;\n  padding: 8px 12px;\n  width: 100%;\n}\n.SingleTagInput-selected-2rD {\n  background-color: #f9f9f9;\n}\n.SingleTagInput-clearButton-1YL {\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: -webkit-box;\n  display: flex;\n  position: absolute;\n  right: 10px;\n}\n.SingleTagInput-clearButton-1YL:hover .SingleTagInput-icon-3ks {\n    fill: #191919;\n}\n.SingleTagInput-icon-3ks {\n  fill: #696969;\n  height: 0.75em;\n}\n", "" ]), 
        t.locals = {
            container: "SingleTagInput-container-3M-",
            singleTagInput: "SingleTagInput-singleTagInput-LQ4",
            selected: "SingleTagInput-selected-2rD",
            clearButton: "SingleTagInput-clearButton-1YL",
            icon: "SingleTagInput-icon-3ks"
        };
    },
    1332: function(e, t, n) {
        "use strict";
        var r = n(899), l = n.n(r);
        t.default = l.a;
    },
    1333: function(e, t, n) {
        (t = e.exports = n(188)(!1)).push([ e.i, ".InputExtraSection-extraSection-1F- {\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: #f9f9f9;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  min-width: 26px;\n  padding: 7px;\n}\n.InputExtraSection-sectionAfter-3Ay {\n  border-bottom-left-radius: 0;\n  border-left-style: none;\n  border-top-left-radius: 0;\n}\n.InputExtraSection-sectionBefore-2wr {\n  border-bottom-right-radius: 0;\n  border-right-style: none;\n  border-top-right-radius: 0;\n}\n", "" ]), 
        t.locals = {
            extraSection: "InputExtraSection-extraSection-1F-",
            sectionAfter: "InputExtraSection-sectionAfter-3Ay",
            sectionBefore: "InputExtraSection-sectionBefore-2wr"
        };
    },
    1334: function(e, t, n) {
        "use strict";
        var r = n(900), l = n.n(r);
        t.default = l.a;
    },
    1335: function(e, t, n) {
        (t = e.exports = n(188)(!1)).push([ e.i, ".SingleTagAutocomplete-container-2sv {\n  display: -webkit-box;\n  display: flex;\n}\n.SingleTagAutocomplete-dropdown-1xJ {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n.SingleTagAutocomplete-noResults-35x {\n  font-size: 13px;\n  padding: 10px;\n}\n.SingleTagAutocomplete-content-1Yx {\n  display: -webkit-box;\n  display: flex;\n}\n.SingleTagAutocomplete-resultsList-2iO {\n  max-height: min(320px, 100vh - 340px);\n  overflow-y: scroll;\n  width: 100%;\n}\n.SingleTagAutocomplete-input-35K.SingleTagAutocomplete-clearLeftRadius-2J_ {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.SingleTagAutocomplete-input-35K.SingleTagAutocomplete-clearRightRadius-3oA {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n", "" ]), 
        t.locals = {
            container: "SingleTagAutocomplete-container-2sv",
            dropdown: "SingleTagAutocomplete-dropdown-1xJ",
            noResults: "SingleTagAutocomplete-noResults-35x",
            content: "SingleTagAutocomplete-content-1Yx",
            resultsList: "SingleTagAutocomplete-resultsList-2iO",
            input: "SingleTagAutocomplete-input-35K",
            clearLeftRadius: "SingleTagAutocomplete-clearLeftRadius-2J_",
            clearRightRadius: "SingleTagAutocomplete-clearRightRadius-3oA"
        };
    },
    1336: function(e, t, n) {
        "use strict";
        var r = n(901), l = n.n(r);
        t.default = l.a;
    },
    1337: function(e, t, n) {
        (t = e.exports = n(188)(!1)).push([ e.i, ".RecommendedItems-recommendedHeader-maw {\n  color: #767676;\n  font-size: 10px;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n.RecommendedItems-recommendedItem-1Vp {\n  background: none;\n  border: none;\n  color: inherit;\n  cursor: pointer;\n  font-size: 13px;\n  line-height: 1.8;\n  max-width: 100%;\n  text-align: left;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.RecommendedItems-recommendedItem-1Vp:hover {\n    color: #0057ff;\n    text-decoration: none;\n}\n.RecommendedItems-recommendedItem-1Vp.RecommendedItems-selected-358 {\n    color: #0057ff;\n}\n", "" ]), 
        t.locals = {
            recommendedHeader: "RecommendedItems-recommendedHeader-maw",
            recommendedItem: "RecommendedItems-recommendedItem-1Vp",
            selected: "RecommendedItems-selected-358"
        };
    },
    1338: function(e, t, n) {
        "use strict";
        var r = n(902), l = n.n(r);
        t.default = l.a;
    },
    1339: function(e, t, n) {
        (t = e.exports = n(188)(!1)).push([ e.i, ".ToolFilter-icon-1qL {\n  width: 16px;\n}\n.ToolFilter-toolFilter-1Ly {\n  padding: 30px;\n  width: 415px;\n}\n.ToolFilter-autocomplete-28u {\n  margin-bottom: 25px;\n}\n", "" ]), 
        t.locals = {
            icon: "ToolFilter-icon-1qL",
            toolFilter: "ToolFilter-toolFilter-1Ly",
            autocomplete: "ToolFilter-autocomplete-28u"
        };
    },
    1352: function(e, t, n) {
        "use strict";
        var r = n(0), l = n(17), o = n(58), i = n(1368), a = n(25), s = n(68), u = Object(s.default)({}, function() {
            var e = this.$createElement, t = this._self._c || e;
            return t("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 16 16"
                }
            }, [ t("path", {
                attrs: {
                    d: "M0 0v16h16V0zm2 1l3 1.5-.543.543L6.25 4.835 4.836 6.25 3.043 4.457 2.5 5 1 2zm11.5 14a1.5 1.5 0 01-1.061-.439L9.4 11.518 11.517 9.4l3.04 3.041A1.5 1.5 0 0113.5 15zm-2-7a3.481 3.481 0 01-1.173-.206l-6.764 6.762a1.5 1.5 0 11-2.124-2.117L8.2 5.672a3.492 3.492 0 014.469-4.466L10.5 3.379V5.5h2.121L14.8 3.327A3.494 3.494 0 0111.5 8z",
                    fill: "none"
                }
            }), t("path", {
                attrs: {
                    d: "M3.043 4.457L4.836 6.25 6.25 4.835 4.457 3.043 5 2.5 2 1 1 2l1.5 3zM14.558 12.438L11.518 9.4 9.4 11.518l3.044 3.043a1.5 1.5 0 102.118-2.123zM12.621 5.5H10.5V3.379l2.174-2.173A3.493 3.493 0 008.2 5.673L1.439 12.44a1.5 1.5 0 102.124 2.117L10.327 7.8A3.494 3.494 0 0014.8 3.327z"
                }
            }) ]);
        }, [], !1, null, null, null).exports, c = n(731), d = n(933), p = n(909), f = n(374), h = n.n(f), m = Object(o.createNamespacedHelpers)("tools"), g = m.mapActions, x = m.mapState, v = l.default.extend({
            components: {
                OutlinedDropdown: c.a,
                SingleTagAutocomplete: d.a,
                RecommendedItems: p.a,
                Tools: u
            },
            props: {
                filterState: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                },
                contentOffset: Number
            },
            data: function() {
                return {
                    recommendedTools: a.i,
                    value: "",
                    isOpen: !1
                };
            },
            computed: Object(r.__assign)(Object(r.__assign)({}, x([ "autoSuggestedTools", "toolData" ])), {
                selectedTool: function() {
                    var e = this.filterState.tools;
                    return e ? this.toolData[e] : null;
                },
                selectedValue: function() {
                    var e;
                    return (null === (e = this.selectedTool) || void 0 === e ? void 0 : e.title) || "";
                }
            }),
            watch: {
                selectedValue: function(e) {
                    this.value = e;
                }
            },
            created: function() {
                this.value = this.selectedValue;
            },
            methods: Object(r.__assign)(Object(r.__assign)({}, g({
                fetchToolsSuggestions: i.a.FETCH_TOOLS_SUGGESTIONS,
                toolSelected: i.a.TOOL_SELECTED,
                clearSuggestions: i.a.CLEAR_SUGGESTIONS
            })), {
                fetchSuggestions: h()(function(e) {
                    this.fetchToolsSuggestions(e);
                }, 300),
                updateFilter: function(e) {
                    this.clearSuggestions();
                    var t = null;
                    e && (t = e.id, this.toolSelected(e)), this.isOpen = !1, this.$emit("updatefilter", {
                        tools: t
                    });
                }
            })
        }), y = n(1338);
        var b = Object(s.default)(v, function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("OutlinedDropdown", {
                staticClass: "qa-filter-tools e2e-ToolFilter-tools",
                attrs: {
                    value: e.selectedValue,
                    label: e.$translate("search_tools_label", "Tools"),
                    contentOffset: e.contentOffset,
                    isOpen: e.isOpen
                },
                on: {
                    filterDropdownToggled: function(t) {
                        return e.$emit("filterDropdownToggled");
                    },
                    click: function(t) {
                        e.isOpen = !0;
                    },
                    clickout: function(t) {
                        e.isOpen = !1;
                    }
                },
                scopedSlots: e._u([ {
                    key: "icon",
                    fn: function() {
                        return [ n("Tools", {
                            class: e.$style.icon
                        }) ];
                    },
                    proxy: !0
                }, {
                    key: "content",
                    fn: function() {
                        return [ n("div", {
                            class: [ e.$style.toolFilter, "qa-tool-filter-panel", "e2e-ToolFilter-panel" ]
                        }, [ n("SingleTagAutocomplete", {
                            class: e.$style.autocomplete,
                            attrs: {
                                results: e.autoSuggestedTools,
                                displayFunction: function(e) {
                                    return e.title;
                                },
                                keyFunction: function(e) {
                                    return e.id;
                                },
                                selectedValue: e.selectedValue,
                                ariaLabel: e.$translate("search_filter_tool_arialabel", "tool"),
                                "data-ut": "tool-filter-input"
                            },
                            on: {
                                input: e.fetchSuggestions,
                                selected: e.updateFilter
                            },
                            model: {
                                value: e.value,
                                callback: function(t) {
                                    e.value = t;
                                },
                                expression: "value"
                            }
                        }), n("RecommendedItems", {
                            class: e.$style.popularContainer,
                            attrs: {
                                header: e.$translate("search_filter_tool_popular", "Popular Tools"),
                                items: e.recommendedTools,
                                displayFunction: function(e) {
                                    return e.title;
                                },
                                "data-ut": "popular-tool-list"
                            },
                            on: {
                                "item-clicked": e.updateFilter
                            }
                        }) ], 1) ];
                    },
                    proxy: !0
                } ])
            });
        }, [], !1, function(e) {
            this.$style = y.default.locals || y.default;
        }, null, null);
        t.a = b.exports;
    },
    1673: function(e, t, n) {
        "use strict";
        var r = n(1195), l = n.n(r);
        t.default = l.a;
    },
    1674: function(e, t, n) {
        (t = e.exports = n(188)(!1)).push([ e.i, ".ColorPicker-colorPalette-1L_ {\n  height: 260px;\n  margin: 20px;\n  width: 492px;\n}\n.ColorPicker-colorSelected-37J {\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: #fff;\n  border-radius: 50%;\n  cursor: pointer;\n  display: -webkit-box;\n  display: flex;\n  height: 16px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  pointer-events: none;\n  position: relative;\n  width: 16px;\n}\n.ColorPicker-checkMark-3_9 {\n  border-bottom: 2px solid #191919;\n  border-right: 2px solid #191919;\n  display: inline-block;\n  height: 8px;\n  margin-left: 1px;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  width: 4px;\n}\n.ColorPicker-selected-E-z:hover {\n  border-color: rgba(255, 255, 255, 0.5);\n}\n.ColorPicker-selected-E-z:hover .ColorPicker-checkMark-3_9 {\n    display: none;\n}\n.ColorPicker-selected-E-z:hover .ColorPicker-colorSelected-37J::after {\n    border-left: 2px solid #191919;\n    border-radius: 6px;\n    content: '';\n    height: 9px;\n    left: 7px;\n    position: absolute;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n}\n.ColorPicker-selected-E-z:hover .ColorPicker-colorSelected-37J::before {\n    border-left: 2px solid #191919;\n    border-radius: 6px;\n    content: '';\n    height: 9px;\n    left: 7px;\n    position: absolute;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n}\n.ColorPicker-color-Mlg {\n  border: 1px solid transparent;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  border-left: 1px solid rgba(255, 255, 255, 0.2);\n  box-sizing: border-box;\n  float: left;\n  height: 26px;\n  position: relative;\n  width: 41px;\n}\n.ColorPicker-color-Mlg.ColorPicker-selected-E-z, .ColorPicker-color-Mlg:hover {\n    -webkit-box-align: center;\n            align-items: center;\n    border-color: white;\n    border-width: 2px;\n    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.16);\n    cursor: pointer;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n}\n.ColorPicker-color-Mlg:active {\n    box-shadow: inset 0 0 4px rgba(25, 25, 25, 0.3);\n}\n.ColorPicker-color-Mlg.focus-visible {\n    outline: none;\n}\n.ColorPicker-color-Mlg.focus-visible::before {\n      border: 1px solid #0057ff;\n      bottom: -3px;\n      content: '';\n      left: -3px;\n      position: absolute;\n      right: -3px;\n      top: -3px;\n      z-index: 1;\n}\n", "" ]), 
        t.locals = {
            colorPalette: "ColorPicker-colorPalette-1L_",
            colorSelected: "ColorPicker-colorSelected-37J",
            checkMark: "ColorPicker-checkMark-3_9",
            selected: "ColorPicker-selected-E-z",
            color: "ColorPicker-color-Mlg"
        };
    },
    1675: function(e, t, n) {
        "use strict";
        var r = n(1196), l = n.n(r);
        t.default = l.a;
    },
    1676: function(e, t, n) {
        (t = e.exports = n(188)(!1)).push([ e.i, '.ColorFilter-colorLabel-3gJ {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  max-width: 174px;\n  white-space: nowrap;\n}\n.ColorFilter-colorIcon-3zb {\n  height: 20px;\n  width: 20px;\n}\n.ColorFilter-colorSelected-fXe {\n  border: 1px solid #191919;\n  border-radius: 50%;\n}\n.ColorFilter-colorGeneric-3jV {\n  background: url("https://a5.behance.net/be57761534296cde8208c6136fe258981b810316/img/search/colorWheel.png") no-repeat;\n  background-size: auto 100%;\n}\n', "" ]), 
        t.locals = {
            colorLabel: "ColorFilter-colorLabel-3gJ",
            colorIcon: "ColorFilter-colorIcon-3zb",
            colorSelected: "ColorFilter-colorSelected-fXe",
            colorGeneric: "ColorFilter-colorGeneric-3jV"
        };
    },
    1679: function(e, t, n) {
        var r = n(2161);
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n(189).default)("4c908a3c", r, !0, {});
    },
    1680: function(e, t, n) {
        var r = n(2163);
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n(189).default)("2c7ee43c", r, !0, {});
    },
    1681: function(e, t, n) {
        var r = n(2165);
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n(189).default)("4aba8c96", r, !0, {});
    },
    1682: function(e, t, n) {
        var r = n(2167);
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n(189).default)("4e22bcd2", r, !0, {});
    },
    1683: function(e, t, n) {
        var r = n(2169);
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n(189).default)("c2f1d5c4", r, !0, {});
    },
    1761: function(e, t, n) {
        "use strict";
        var r = n(17), l = n(25), o = {
            props: {
                value: {
                    type: String,
                    default: null
                }
            },
            data: function() {
                return {
                    selectedHexColor: this.value,
                    colorsData: l.b,
                    row: 10,
                    column: 12
                };
            },
            methods: {
                isSelected: function(e, t) {
                    return this.getColor(t, e) === this.value;
                },
                handleColorSelection: function(e) {
                    if (this.selectedHexColor === e) return this.selectedHexColor = null, void this.$emit("input", null);
                    this.selectedHexColor = e, this.$emit("input", this.selectedHexColor);
                },
                getColor: function(e, t) {
                    var n = (t - 1) * this.column + e - 1;
                    return this.colorsData[n].hexValue;
                }
            }
        }, i = n(1673), a = n(68);
        var s = Object(a.default)(o, function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {
                class: e.$style.colorPalette
            }, [ n("ul", [ e._l(e.row, function(t) {
                return e._l(e.column, function(r) {
                    var l;
                    return n("li", {
                        key: "color-" + t + "-" + r,
                        ref: "colorItem",
                        refInFor: !0,
                        class: [ e.$style.color, (l = {}, l[e.$style.selected] = e.isSelected(t, r), l), "qa-color-picker-color-item", "e2e-ColorPicker-color-item" ],
                        style: "background-color: #" + e.getColor(r, t),
                        attrs: {
                            "data-ut": "color-picker-color-item-" + t + "-" + r,
                            tabindex: "0"
                        },
                        on: {
                            click: function(n) {
                                e.handleColorSelection(e.getColor(r, t));
                            },
                            keyup: function(n) {
                                if (!n.type.indexOf("key") && e._k(n.keyCode, "enter", 13, n.key, "Enter")) return null;
                                e.handleColorSelection(e.getColor(r, t));
                            }
                        }
                    }, [ e.isSelected(t, r) ? n("div", {
                        ref: "colorItemCheck",
                        refInFor: !0,
                        class: e.$style.colorSelected
                    }, [ n("div", {
                        class: e.$style.checkMark
                    }) ]) : e._e() ]);
                });
            }) ], 2) ]);
        }, [], !1, function(e) {
            this.$style = i.default.locals || i.default;
        }, null, null).exports, u = n(731), c = r.default.extend({
            components: {
                OutlinedDropdown: u.a,
                ColorPicker: s
            },
            data: function() {
                return {
                    isOpen: !1
                };
            },
            props: {
                filterState: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                },
                contentOffset: Number
            },
            computed: {
                hasColorSelected: function() {
                    var e;
                    return Boolean(null === (e = this.filterState) || void 0 === e ? void 0 : e.color_hex);
                },
                colorValue: function() {
                    var e, t = this;
                    if (null === (e = this.filterState) || void 0 === e ? void 0 : e.color_hex) {
                        var n = l.b.find(function(e) {
                            return e.hexValue === t.filterState.color_hex;
                        });
                        return n ? this.$translate(n.label.key, n.label.text) + " #" + this.filterState.color_hex : "#" + this.filterState.color_hex;
                    }
                    return null;
                }
            },
            methods: {
                handleInput: function(e) {
                    this.$emit("updatefilter", {
                        color_hex: e
                    }), this.isOpen = !1;
                }
            }
        }), d = n(1675);
        var p = Object(a.default)(c, function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("OutlinedDropdown", {
                staticClass: "qa-filter-color e2e-ColorFilter",
                attrs: {
                    value: e.colorValue,
                    label: e.$translate("search_filter_header_color", "Color"),
                    contentOffset: e.contentOffset,
                    isOpen: e.isOpen
                },
                on: {
                    filterDropdownToggled: function(t) {
                        return e.$emit("filterDropdownToggled", t);
                    },
                    click: function(t) {
                        e.isOpen = !0;
                    },
                    clickout: function(t) {
                        e.isOpen = !1;
                    }
                },
                scopedSlots: e._u([ {
                    key: "icon",
                    fn: function() {
                        return [ e.hasColorSelected ? n("div", {
                            class: [ e.$style.colorIcon, e.$style.colorSelected ],
                            style: "background-color: #" + e.filterState.color_hex,
                            attrs: {
                                "data-ut": "color-filter-colorsample"
                            }
                        }) : n("div", {
                            class: [ e.$style.colorIcon, e.$style.colorGeneric ]
                        }) ];
                    },
                    proxy: !0
                }, {
                    key: "content",
                    fn: function() {
                        return [ n("ColorPicker", {
                            attrs: {
                                value: e.filterState.color_hex,
                                "data-ut": "color-filter-menu"
                            },
                            on: {
                                input: function(t) {
                                    return e.handleInput(t);
                                }
                            }
                        }) ];
                    },
                    proxy: !0
                } ])
            });
        }, [], !1, function(e) {
            this.$style = d.default.locals || d.default;
        }, null, null);
        t.a = p.exports;
    },
    1772: function(e, t, n) {
        "use strict";
        var r = n(68), l = Object(r.default)({}, function() {
            var e = this.$createElement, t = this._self._c || e;
            return t("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 18 18"
                }
            }, [ t("circle", {
                attrs: {
                    cx: "1.25",
                    cy: "1.25",
                    r: "1.25",
                    transform: "translate(10.65 5.05)"
                }
            }), t("path", {
                attrs: {
                    d: "M17.437,2H.562A.534.534,0,0,0,0,2.5v13a.534.534,0,0,0,.562.5H17.437A.534.534,0,0,0,18,15.5V2.5a.534.534,0,0,0-.563-.5ZM17,11a7.583,7.583,0,0,0-3.091-1c-1.469,0-2.738,2-4.208,2S6.362,8,4.892,8C3.556,8,1,12,1,12V3H17Z"
                }
            }) ]);
        }, [], !1, null, null, null);
        t.a = l.exports;
    },
    2160: function(e, t, n) {
        "use strict";
        var r = n(1679), l = n.n(r);
        t.default = l.a;
    },
    2161: function(e, t, n) {
        (t = e.exports = n(188)(!1)).push([ e.i, ".FocalFilter-content-3jK {\n  padding: 30px;\n  width: 230px;\n}\n.FocalFilter-header-1uW {\n  color: #767676;\n  font-size: 10px;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n.FocalFilter-inputContainer-3hk {\n  display: -webkit-box;\n  display: flex;\n  margin-bottom: 25px;\n}\n.FocalFilter-focalInput-1U5 {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.FocalFilter-inputUnits-1R2 {\n  font-size: 10px;\n}\n.FocalFilter-inputField-3gn {\n  -webkit-appearance: textfield;\n     -moz-appearance: textfield;\n          appearance: textfield;\n}\n.FocalFilter-inputField-3gn::-webkit-inner-spin-button,\n  .FocalFilter-inputField-3gn ::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n            appearance: none;\n}\n.FocalFilter-errorMessage-2fA {\n  color: #696969;\n  font-size: 11px;\n  margin-top: -15px;\n  padding-bottom: 12px;\n}\n.FocalFilter-focalIcon-3VF {\n  height: 16px;\n}\n", "" ]), 
        t.locals = {
            content: "FocalFilter-content-3jK",
            header: "FocalFilter-header-1uW",
            inputContainer: "FocalFilter-inputContainer-3hk",
            focalInput: "FocalFilter-focalInput-1U5",
            inputUnits: "FocalFilter-inputUnits-1R2",
            inputField: "FocalFilter-inputField-3gn",
            errorMessage: "FocalFilter-errorMessage-2fA",
            focalIcon: "FocalFilter-focalIcon-3VF"
        };
    },
    2162: function(e, t, n) {
        "use strict";
        var r = n(1680), l = n.n(r);
        t.default = l.a;
    },
    2163: function(e, t, n) {
        (t = e.exports = n(188)(!1)).push([ e.i, ".CameraFilter-cameraFilter-1hF {\n  color: #191919;\n  padding: 30px;\n  width: 440px;\n}\n.CameraFilter-autocomplete-1Bg {\n  margin-bottom: 25px;\n}\n.CameraFilter-recommendedContainer-2vf {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.CameraFilter-popularContainer-1jJ {\n  margin-right: 5px;\n  width: 150px;\n}\n.CameraFilter-trendingContainer-o0H {\n  width: 215px;\n}\n", "" ]), 
        t.locals = {
            cameraFilter: "CameraFilter-cameraFilter-1hF",
            autocomplete: "CameraFilter-autocomplete-1Bg",
            recommendedContainer: "CameraFilter-recommendedContainer-2vf",
            popularContainer: "CameraFilter-popularContainer-1jJ",
            trendingContainer: "CameraFilter-trendingContainer-o0H"
        };
    },
    2164: function(e, t, n) {
        "use strict";
        var r = n(1681), l = n.n(r);
        t.default = l.a;
    },
    2165: function(e, t, n) {
        (t = e.exports = n(188)(!1)).push([ e.i, ".LensFilter-lensFilter-1wZ {\n  color: #191919;\n  padding: 30px;\n  width: 595px;\n}\n.LensFilter-filterIcon-38c {\n  width: 14px;\n}\n.LensFilter-autocomplete-3Up {\n  margin-bottom: 25px;\n}\n.LensFilter-recommendedContainer-3yb {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.LensFilter-popularContainer-3Dq {\n  width: 155px;\n}\n.LensFilter-trendingContainer-3uX {\n  width: 200px;\n}\n.LensFilter-typeContainer-39R {\n  width: 60px;\n}\n", "" ]), 
        t.locals = {
            lensFilter: "LensFilter-lensFilter-1wZ",
            filterIcon: "LensFilter-filterIcon-38c",
            autocomplete: "LensFilter-autocomplete-3Up",
            recommendedContainer: "LensFilter-recommendedContainer-3yb",
            popularContainer: "LensFilter-popularContainer-3Dq",
            trendingContainer: "LensFilter-trendingContainer-3uX",
            typeContainer: "LensFilter-typeContainer-39R"
        };
    },
    2166: function(e, t, n) {
        "use strict";
        var r = n(1682), l = n.n(r);
        t.default = l.a;
    },
    2167: function(e, t, n) {
        (t = e.exports = n(188)(!1)).push([ e.i, ".ImageTypeFilter-imageTypeFilter-3EN {\n  color: #191919;\n  padding: 30px;\n  width: 150px;\n}\n.ImageTypeFilter-filterIcon-1Qv {\n  width: 16px;\n}\n.ImageTypeFilter-imageTypeButton-1x4 {\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: block;\n  font-size: 15px;\n}\n.ImageTypeFilter-imageTypeButton-1x4:not(:last-child) {\n    margin-bottom: 15px;\n}\n.ImageTypeFilter-imageTypeButton-1x4:hover {\n    color: #0057ff;\n    text-decoration: none;\n}\n.ImageTypeFilter-imageTypeButton-1x4.ImageTypeFilter-selected-16P {\n    color: #0057ff;\n}\n", "" ]), 
        t.locals = {
            imageTypeFilter: "ImageTypeFilter-imageTypeFilter-3EN",
            filterIcon: "ImageTypeFilter-filterIcon-1Qv",
            imageTypeButton: "ImageTypeFilter-imageTypeButton-1x4",
            selected: "ImageTypeFilter-selected-16P"
        };
    },
    2168: function(e, t, n) {
        "use strict";
        var r = n(1683), l = n.n(r);
        t.default = l.a;
    },
    2169: function(e, t, n) {
        (t = e.exports = n(188)(!1)).push([ e.i, ".ExposureFilter-icon-2F0 {\n  width: 18px;\n}\n.ExposureFilter-content-3QT {\n  display: -webkit-box;\n  display: flex;\n  padding: 30px;\n  width: 490px;\n}\n.ExposureFilter-exposureSection-2Sn {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n.ExposureFilter-exposureSection-2Sn:not(:last-child) {\n    margin-right: 30px;\n}\n.ExposureFilter-exposureSelect-YHO {\n  margin-bottom: 25px;\n}\n.ExposureFilter-exposureSectionHeader-2Rd {\n  color: #767676;\n  font-size: 10px;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n.ExposureFilter-extraLabel-1Jx {\n  font-size: 10px;\n}\n.ExposureFilter-filterControlButtons-C9i {\n  border-top: 1px solid #e8e8e8;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  padding: 20px 30px;\n}\n", "" ]), 
        t.locals = {
            icon: "ExposureFilter-icon-2F0",
            content: "ExposureFilter-content-3QT",
            exposureSection: "ExposureFilter-exposureSection-2Sn",
            exposureSelect: "ExposureFilter-exposureSelect-YHO",
            exposureSectionHeader: "ExposureFilter-exposureSectionHeader-2Rd",
            extraLabel: "ExposureFilter-extraLabel-1Jx",
            filterControlButtons: "ExposureFilter-filterControlButtons-C9i"
        };
    },
    2618: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n(17), l = n(1347), o = n(1351), i = n(1352), a = n(1761), s = n(731), u = n(380), c = n(68), d = Object(c.default)({}, function() {
            var e = this.$createElement, t = this._self._c || e;
            return t("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 18 18"
                }
            }, [ t("path", {
                attrs: {
                    d: "M17.551474,1.78198127 L17.7431496,2.24107472 C17.8265088,2.41983899 17.7491676,2.63233201 17.5704034,2.71569116 L14.6287119,4.08648485 L14.6926787,4.17802821 C15.0197035,4.63905672 15.3064674,5.12735964 15.5497997,5.63753791 C16.8130225,8.34086607 16.3116128,11.3912148 14.9911362,14.0533284 L17.2568339,14.8909954 L17.6082907,15.0263339 C17.7935902,15.093809 17.8891321,15.2986994 17.8217129,15.4840193 L17.6265096,16.0203359 C17.5590345,16.2056354 17.3541441,16.3011773 17.1688242,16.2337581 L16.9853954,16.1598306 L0.704850355,10.2451861 C0.433431095,10.1463512 0.248255558,9.89377194 0.235646888,9.60519304 C0.223038218,9.31661414 0.385452556,9.04879085 0.647243378,8.92671579 L17.0768575,1.60923501 C17.2556218,1.52587586 17.4681148,1.60321699 17.551474,1.78198127 Z M13.4194384,4.65037836 L11.1141098,5.67159811 C12.3723528,6.80810692 12.744675,10.6526111 10.972351,12.6718158 L13.7350655,13.6633425 C14.9911362,11.3912148 15.4921746,8.60015422 14.3832521,6.18150799 C14.1196154,5.63704622 13.7963654,5.12352624 13.4194384,4.65037836 Z M8.91852641,6.64566792 L2.33139796,9.56861416 L9.28304198,12.0644534 C8.28409908,10.4058245 8.31363996,8.07993523 8.91852641,6.64566792 Z M10.344,6.37392598 L10.1911631,6.59144134 C10.151497,6.64955866 10.1076624,6.71768542 10.06339,6.79541626 C9.82582456,7.21251953 9.6288746,7.77206107 9.52676785,8.363031 C9.31324098,9.59887447 9.52066247,10.7700501 10.2131975,11.7025421 L10.2131975,11.7025421 L10.349,11.872926 L10.4734943,11.7175305 C11.1067303,10.8720685 11.3281584,9.79843448 11.1851643,8.64495031 L11.1851643,8.64495031 L11.1489621,8.39660699 C11.0487264,7.79763207 10.8543637,7.22807932 10.6197545,6.80323028 C10.5761181,6.72421012 10.5328658,6.65492602 10.4938128,6.59580463 L10.4938128,6.59580463 L10.344,6.37392598 Z"
                }
            }) ]);
        }, [], !1, null, null, null).exports, p = n(909), f = n(1219), h = n(1220), m = r.default.extend({
            components: {
                OutlinedDropdown: s.a,
                TextInput: u.a,
                FocalLength: d,
                SingleTagInput: f.a,
                InputExtraSection: h.a,
                RecommendedItems: p.a
            },
            props: {
                filterState: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                },
                contentOffset: Number
            },
            data: function() {
                return {
                    isOpen: !1,
                    value: "",
                    hasError: !1,
                    minFocalLength: 10,
                    maxFocalLength: 2e3,
                    unitText: "mm"
                };
            },
            created: function() {
                this.value = this.selectedRecommendedValue ? "" : this.propValue;
            },
            computed: {
                recommendedFocalLength: function() {
                    return this.$store.state.focalLength.ranges.exif_focal_length;
                },
                propValue: function() {
                    var e;
                    return null !== (e = this.filterState.exif_focal_length) && void 0 !== e ? e : null;
                },
                selectedRecommendedValue: function() {
                    var e, t, n = this;
                    return null !== (t = null === (e = this.recommendedFocalLength.find(function(e) {
                        return e.value === n.propValue;
                    })) || void 0 === e ? void 0 : e.label) && void 0 !== t ? t : null;
                },
                labelValue: function() {
                    var e;
                    return null !== (e = this.selectedRecommendedValue) && void 0 !== e ? e : this.propValue ? "" + this.propValue + this.unitText : null;
                },
                isSelected: function() {
                    return Boolean(this.propValue) && this.propValue === this.value;
                }
            },
            watch: {
                filterState: function(e) {
                    var t;
                    this.value = this.selectedRecommendedValue ? null : null !== (t = e.exif_focal_length) && void 0 !== t ? t : null;
                }
            },
            methods: {
                getLabelValue: function() {
                    return 123;
                },
                handleFocalInput: function() {
                    null !== this.value && "" !== this.value && (parseInt(this.value) < this.minFocalLength || parseInt(this.value) > this.maxFocalLength) ? this.hasError = !0 : (this.hasError = !1, 
                    this.$emit("updatefilter", {
                        exif_focal_length: this.value
                    }), this.isOpen = !1);
                },
                handleRecommendedClick: function(e) {
                    this.$emit("updatefilter", {
                        exif_focal_length: e
                    }), this.hasError = !1, this.isOpen = !1;
                },
                handleClearClicked: function() {
                    this.$emit("updatefilter", {
                        exif_focal_length: null
                    }), this.hasError = !1, this.isOpen = !1;
                }
            }
        }), g = n(2160);
        var x, v, y = Object(c.default)(m, function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("OutlinedDropdown", {
                attrs: {
                    value: e.labelValue,
                    label: e.$translate("search_filter_header_focal_length", "Focal Length"),
                    contentOffset: e.contentOffset,
                    isOpen: e.isOpen
                },
                on: {
                    filterDropdownToggled: function(t) {
                        return e.$emit("filterDropdownToggled");
                    },
                    click: function(t) {
                        e.isOpen = !0;
                    },
                    clickout: function(t) {
                        e.isOpen = !1;
                    }
                },
                scopedSlots: e._u([ {
                    key: "icon",
                    fn: function() {
                        return [ n("FocalLength", {
                            class: e.$style.focalIcon
                        }) ];
                    },
                    proxy: !0
                }, {
                    key: "content",
                    fn: function() {
                        return [ n("div", {
                            class: e.$style.content
                        }, [ n("h3", {
                            class: e.$style.header
                        }, [ e._v(" " + e._s(e.$translate("search_focal_length_input_header", "focal length")) + " ") ]), n("div", {
                            class: e.$style.inputContainer
                        }, [ n("SingleTagInput", {
                            class: e.$style.focalInput,
                            attrs: {
                                inputClass: e.$style.inputField,
                                type: "number",
                                min: e.minFocalLength,
                                max: e.maxFocalLength,
                                isSelected: e.isSelected,
                                validator: /[0-9]+/,
                                placeholder: e.$translate("search_filter_focal_length_placeholder", "Enter Focal Length"),
                                ariaLabel: e.$translate("search_filter_focal_length_arialabel", "focal length"),
                                "data-ut": "search-focal-length-input"
                            },
                            on: {
                                keyup: function(t) {
                                    return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.handleFocalInput(t);
                                },
                                "clear-clicked": e.handleClearClicked
                            },
                            model: {
                                value: e.value,
                                callback: function(t) {
                                    e.value = t;
                                },
                                expression: "value"
                            }
                        }), n("InputExtraSection", {
                            class: e.$style.inputUnits,
                            attrs: {
                                sectionAfter: ""
                            }
                        }, [ e._v(e._s(e.unitText)) ]) ], 1), e.hasError ? n("p", {
                            class: e.$style.errorMessage,
                            attrs: {
                                "data-ut": "search-focal-error-meesage"
                            }
                        }, [ e._v(" " + e._s(e.$translate("search_focal_length_error_message", "Please enter a number between {min} and {max}.", {
                            min: e.minFocalLength,
                            max: e.maxFocalLength
                        })) + " ") ]) : e._e(), n("RecommendedItems", {
                            attrs: {
                                header: e.$translate("search_focal_length_ranges", "focal length ranges"),
                                items: e.recommendedFocalLength,
                                displayFunction: function(e) {
                                    return e.label;
                                },
                                selectedFunction: function(t) {
                                    return t.value === e.propValue;
                                }
                            },
                            on: {
                                "item-clicked": function(t) {
                                    return e.handleRecommendedClick(t ? t.value : null);
                                }
                            }
                        }) ], 1) ];
                    },
                    proxy: !0
                } ])
            });
        }, [], !1, function(e) {
            this.$style = g.default.locals || g.default;
        }, null, null).exports, b = n(0), _ = n(58), S = n(1006), k = "FETCH_EXIF_MAKE_SUGGESTIONS", I = "CLEAR_SUGGESTIONS", w = "SET_EXIF_MAKE_SUGGESTIONS", F = {
            namespaced: !0,
            state: function() {
                return {
                    suggestions: null,
                    popular: [],
                    trending: []
                };
            },
            actions: (x = {}, x[k] = function(e, t) {
                var n = e.commit, r = e.dispatch;
                return Object(b.__awaiter)(this, void 0, void 0, function() {
                    var e, l;
                    return Object(b.__generator)(this, function(o) {
                        switch (o.label) {
                          case 0:
                            return o.trys.push([ 0, 4, , 6 ]), t ? [ 4, S.a.fetchExifMakeSuggestions(t) ] : [ 3, 2 ];

                          case 1:
                            return e = o.sent(), n(w, e), [ 3, 3 ];

                          case 2:
                            r(I), o.label = 3;

                          case 3:
                            return [ 3, 6 ];

                          case 4:
                            return l = o.sent(), [ 4, r("error", l, {
                                root: !0
                            }) ];

                          case 5:
                            return o.sent(), [ 3, 6 ];

                          case 6:
                            return [ 2 ];
                        }
                    });
                });
            }, x[I] = function(e) {
                (0, e.commit)(w, null);
            }, x),
            mutations: (v = {}, v[w] = function(e, t) {
                e.suggestions = t;
            }, v)
        }, $ = n(911), T = n(933), O = n(374), C = n.n(O), L = Object(_.createNamespacedHelpers)("camera"), E = L.mapActions, A = L.mapState, V = r.default.extend({
            components: {
                OutlinedDropdown: s.a,
                SingleTagAutocomplete: T.a,
                Camera: $.a,
                RecommendedItems: p.a
            },
            props: {
                filterState: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                },
                contentOffset: Number
            },
            data: function() {
                var e, t;
                return {
                    isOpen: !1,
                    value: null !== (t = null === (e = this.filterState) || void 0 === e ? void 0 : e.exif_make) && void 0 !== t ? t : null
                };
            },
            methods: Object(b.__assign)(Object(b.__assign)({}, E({
                fetchExifMakeSuggestions: k,
                clearSuggestions: I
            })), {
                fetchSuggestions: C()(function(e) {
                    this.fetchExifMakeSuggestions(e);
                }, 300),
                updateFilter: function(e) {
                    this.clearSuggestions(), this.isOpen = !1, this.$emit("updatefilter", {
                        exif_make: e
                    });
                }
            }),
            computed: Object(b.__assign)(Object(b.__assign)({}, A([ "suggestions", "trending", "popular" ])), {
                cameraValue: function() {
                    var e, t;
                    return null !== (t = null === (e = this.filterState) || void 0 === e ? void 0 : e.exif_make) && void 0 !== t ? t : null;
                }
            }),
            watch: {
                cameraValue: function(e) {
                    this.value = e;
                }
            },
            beforeCreate: function() {
                this.$store.registerModule("camera", F, {
                    preserveState: Boolean(this.$store.state.camera)
                });
            },
            destroyed: function() {
                this.$store.unregisterModule("camera");
            }
        }), M = n(2162);
        var j, D, R = Object(c.default)(V, function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("OutlinedDropdown", {
                attrs: {
                    value: e.cameraValue,
                    label: e.$translate("search_filter_header_camera", "Camera"),
                    contentOffset: e.contentOffset,
                    isOpen: e.isOpen
                },
                on: {
                    filterDropdownToggled: function(t) {
                        return e.$emit("filterDropdownToggled");
                    },
                    click: function(t) {
                        e.isOpen = !0;
                    },
                    clickout: function(t) {
                        e.isOpen = !1;
                    }
                },
                scopedSlots: e._u([ {
                    key: "icon",
                    fn: function() {
                        return [ n("Camera") ];
                    },
                    proxy: !0
                }, {
                    key: "content",
                    fn: function() {
                        return [ n("div", {
                            class: e.$style.cameraFilter
                        }, [ n("SingleTagAutocomplete", {
                            class: e.$style.autocomplete,
                            attrs: {
                                results: e.suggestions,
                                selectedValue: e.cameraValue,
                                ariaLabel: e.$translate("search_filter_camera_arialabel", "camera")
                            },
                            on: {
                                selected: e.updateFilter,
                                input: e.fetchSuggestions
                            },
                            model: {
                                value: e.value,
                                callback: function(t) {
                                    e.value = t;
                                },
                                expression: "value"
                            }
                        }), n("div", {
                            class: e.$style.recommendedContainer
                        }, [ n("RecommendedItems", {
                            class: e.$style.popularContainer,
                            attrs: {
                                header: e.$translate("search_filter_camera_popular", "Popular Brands"),
                                items: e.popular,
                                "data-ut": "popular-camera-list"
                            },
                            on: {
                                "item-clicked": e.updateFilter
                            }
                        }), n("RecommendedItems", {
                            class: e.$style.trendingContainer,
                            attrs: {
                                header: e.$translate("search_filter_camera_trending", "Trending Cameras"),
                                items: e.trending,
                                "data-ut": "trending-camera-list"
                            },
                            on: {
                                "item-clicked": e.updateFilter
                            }
                        }) ], 1) ], 1) ];
                    },
                    proxy: !0
                } ])
            });
        }, [], !1, function(e) {
            this.$style = M.default.locals || M.default;
        }, null, null).exports, B = "FETCH_EXIF_LENS_SUGGESTIONS", z = "CLEAR_SUGGESTIONS", P = "SET_EXIF_LENS_SUGGESTIONS", G = {
            namespaced: !0,
            state: function() {
                return {
                    suggestions: null,
                    popular: [],
                    trending: [],
                    types: []
                };
            },
            actions: (j = {}, j[B] = function(e, t) {
                var n = e.commit, r = e.dispatch;
                return Object(b.__awaiter)(this, void 0, void 0, function() {
                    var e, l;
                    return Object(b.__generator)(this, function(o) {
                        switch (o.label) {
                          case 0:
                            return o.trys.push([ 0, 4, , 6 ]), t ? [ 4, S.a.fetchExifLensSuggestions(t) ] : [ 3, 2 ];

                          case 1:
                            return e = o.sent(), n(P, e), [ 3, 3 ];

                          case 2:
                            r(z), o.label = 3;

                          case 3:
                            return [ 3, 6 ];

                          case 4:
                            return l = o.sent(), [ 4, r("error", l, {
                                root: !0
                            }) ];

                          case 5:
                            return o.sent(), [ 3, 6 ];

                          case 6:
                            return [ 2 ];
                        }
                    });
                });
            }, j[z] = function(e) {
                (0, e.commit)(P, null);
            }, j),
            mutations: (D = {}, D[P] = function(e, t) {
                e.suggestions = t;
            }, D)
        }, H = Object(c.default)({}, function() {
            var e = this.$createElement, t = this._self._c || e;
            return t("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 15 16"
                }
            }, [ t("path", {
                attrs: {
                    d: "M2.107 7.947a19.212 19.212 0 01.531-4.592L.676 4.822a7.54 7.54 0 000 6.242l1.962 1.471a19.207 19.207 0 01-.531-4.588z"
                }
            }), t("path", {
                attrs: {
                    d: "M13.081 0H4.499a19.53 19.53 0 000 15.895h8.582a19.53 19.53 0 010-15.895z"
                }
            }), t("path", {
                attrs: {
                    d: "M13.549 1.706a12.613 12.613 0 00-.864 2.348 9.429 9.429 0 010 7.794 12.644 12.644 0 00.868 2.344 15.08 15.08 0 000-12.483z"
                }
            }) ]);
        }, [], !1, null, null, null).exports, N = Object(_.createNamespacedHelpers)("lens"), q = N.mapActions, Z = N.mapState, K = r.default.extend({
            components: {
                OutlinedDropdown: s.a,
                SingleTagAutocomplete: T.a,
                Lens: H,
                RecommendedItems: p.a
            },
            props: {
                filterState: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                },
                contentOffset: Number
            },
            data: function() {
                return {
                    isOpen: !1,
                    updatedValue: null
                };
            },
            methods: Object(b.__assign)(Object(b.__assign)({}, q({
                fetchExifLensSuggestions: B,
                clearSuggestions: z
            })), {
                fetchSuggestions: C()(function(e) {
                    this.fetchExifLensSuggestions(e);
                }, 300),
                updateFilter: function(e) {
                    this.clearSuggestions(), this.isOpen = !1, "1" === e || "0" === e ? this.$emit("updatefilter", {
                        exif_zoom: e,
                        exif_lens: null
                    }) : this.$emit("updatefilter", {
                        exif_lens: e,
                        exif_zoom: null
                    });
                },
                matchLensType: function() {
                    var e, t, n = this;
                    if ("1" === (null === (e = this.filterState) || void 0 === e ? void 0 : e.exif_zoom) || "0" === (null === (t = this.filterState) || void 0 === t ? void 0 : t.exif_zoom)) {
                        var r = this.types.find(function(e) {
                            return e.value === n.filterState.exif_zoom;
                        });
                        if (r) return r.label;
                    }
                    return null;
                }
            }),
            computed: Object(b.__assign)(Object(b.__assign)({}, Z([ "suggestions", "trending", "popular", "types" ])), {
                singleTagValue: {
                    get: function() {
                        var e;
                        return (null === (e = this.filterState) || void 0 === e ? void 0 : e.exif_lens) || this.matchLensType() || this.updatedValue || null;
                    },
                    set: function(e) {
                        this.updatedValue = e;
                    }
                },
                lensValue: function() {
                    var e;
                    return (null === (e = this.filterState) || void 0 === e ? void 0 : e.exif_lens) || this.matchLensType() || null;
                }
            }),
            watch: {
                lensValue: function(e) {
                    this.singleTagValue = e;
                }
            },
            beforeCreate: function() {
                this.$store.registerModule("lens", G, {
                    preserveState: Boolean(this.$store.state.lens)
                });
            },
            destroyed: function() {
                this.$store.unregisterModule("lens");
            }
        }), U = n(2164);
        var W = Object(c.default)(K, function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("OutlinedDropdown", {
                attrs: {
                    value: e.lensValue,
                    label: e.$translate("search_filter_header_lens", "Lens"),
                    contentOffset: e.contentOffset,
                    isOpen: e.isOpen
                },
                on: {
                    filterDropdownToggled: function(t) {
                        return e.$emit("filterDropdownToggled");
                    },
                    click: function(t) {
                        e.isOpen = !0;
                    },
                    clickout: function(t) {
                        e.isOpen = !1;
                    }
                },
                scopedSlots: e._u([ {
                    key: "icon",
                    fn: function() {
                        return [ n("Lens", {
                            class: e.$style.filterIcon
                        }) ];
                    },
                    proxy: !0
                }, {
                    key: "content",
                    fn: function() {
                        return [ n("div", {
                            class: e.$style.lensFilter
                        }, [ n("SingleTagAutocomplete", {
                            class: e.$style.autocomplete,
                            attrs: {
                                results: e.suggestions,
                                selectedValue: e.lensValue,
                                ariaLabel: e.$translate("search_filter_lens_arialabel", "lens")
                            },
                            on: {
                                selected: e.updateFilter,
                                input: e.fetchSuggestions
                            },
                            model: {
                                value: e.singleTagValue,
                                callback: function(t) {
                                    e.singleTagValue = t;
                                },
                                expression: "singleTagValue"
                            }
                        }), n("div", {
                            class: e.$style.recommendedContainer
                        }, [ n("RecommendedItems", {
                            class: e.$style.typeContainer,
                            attrs: {
                                header: e.$translate("search_filter_lens_types", "Lens Types"),
                                items: e.types,
                                displayFunction: function(e) {
                                    return e.label;
                                },
                                "data-ut": "lens-types-list"
                            },
                            on: {
                                "item-clicked": function(t) {
                                    return e.updateFilter(t ? t.value : null);
                                }
                            }
                        }), n("RecommendedItems", {
                            class: e.$style.popularContainer,
                            attrs: {
                                header: e.$translate("search_filter_lens_popular", "Popular Lenses"),
                                items: e.popular,
                                "data-ut": "popular-lens-list"
                            },
                            on: {
                                "item-clicked": e.updateFilter
                            }
                        }), n("RecommendedItems", {
                            class: e.$style.trendingContainer,
                            attrs: {
                                header: e.$translate("search_filter_lens_trending", "Trending Lenses"),
                                items: e.trending,
                                "data-ut": "trending-lens-list"
                            },
                            on: {
                                "item-clicked": e.updateFilter
                            }
                        }) ], 1) ], 1) ];
                    },
                    proxy: !0
                } ])
            });
        }, [], !1, function(e) {
            this.$style = U.default.locals || U.default;
        }, null, null).exports, J = n(1772), X = n(4), Y = r.default.extend({
            components: {
                OutlinedDropdown: s.a,
                ImageIcon: J.a
            },
            props: {
                filterState: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                },
                contentOffset: Number
            },
            data: function() {
                return {
                    isOpen: !1,
                    gifLocalized: X.default.translate("search_filter_image_type_gif", "GIF")
                };
            },
            methods: {
                updateFilter: function(e) {
                    this.isOpen = !1, this.$emit("updatefilter", {
                        gif: e
                    });
                }
            },
            computed: {
                gifSelected: function() {
                    var e;
                    return "1" === (null === (e = this.filterState) || void 0 === e ? void 0 : e.gif);
                },
                labelValue: function() {
                    return this.gifSelected ? this.gifLocalized : null;
                }
            }
        }), Q = n(2166);
        var ee = Object(c.default)(Y, function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("OutlinedDropdown", {
                attrs: {
                    value: e.labelValue,
                    label: e.$translate("search_filter_header_image_type", "Image Type"),
                    contentOffset: e.contentOffset,
                    isOpen: e.isOpen
                },
                on: {
                    filterDropdownToggled: function(t) {
                        return e.$emit("filterDropdownToggled");
                    },
                    click: function(t) {
                        e.isOpen = !0;
                    },
                    clickout: function(t) {
                        e.isOpen = !1;
                    }
                },
                scopedSlots: e._u([ {
                    key: "icon",
                    fn: function() {
                        return [ n("ImageIcon", {
                            class: e.$style.filterIcon
                        }) ];
                    },
                    proxy: !0
                }, {
                    key: "content",
                    fn: function() {
                        var t, r;
                        return [ n("div", {
                            class: e.$style.imageTypeFilter
                        }, [ n("button", {
                            class: [ e.$style.imageTypeButton, (t = {}, t[e.$style.selected] = !e.gifSelected, 
                            t) ],
                            attrs: {
                                "data-ut": "image-type-all"
                            },
                            on: {
                                click: function(t) {
                                    return e.updateFilter(null);
                                }
                            }
                        }, [ e._v(e._s(e.$translate("search_filter_image_type_all", "All"))) ]), n("button", {
                            class: [ e.$style.imageTypeButton, (r = {}, r[e.$style.selected] = e.gifSelected, 
                            r) ],
                            attrs: {
                                "data-ut": "image-type-gif"
                            },
                            on: {
                                click: function(t) {
                                    return e.updateFilter("1");
                                }
                            }
                        }, [ e._v(e._s(e.gifLocalized)) ]) ]) ];
                    },
                    proxy: !0
                } ])
            });
        }, [], !1, function(e) {
            this.$style = Q.default.locals || Q.default;
        }, null, null).exports, te = {
            namespaced: !0,
            state: function() {
                return {
                    popular: {
                        exif_shutter_speed: [],
                        exif_aperture: []
                    },
                    recommended: {
                        exif_shutter_speed: [],
                        exif_aperture: []
                    },
                    ranges: {
                        exif_shutter_speed: [],
                        exif_aperture: []
                    }
                };
            }
        }, ne = Object(c.default)({}, function() {
            var e = this.$createElement, t = this._self._c || e;
            return t("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 18 18"
                }
            }, [ t("path", {
                attrs: {
                    d: "M3.085 3.633a7.9 7.9 0 00-1.7 7.779h4.281zm9.172-1.927a7.918 7.918 0 00-7.864.764l1.322 3.983zm4.714 7.871C16.986 9.386 17 9.2 17 9a7.975 7.975 0 00-3.229-6.406l-3.25 2.358zm-3.546-.564l-2.5 7.741a8 8 0 005.724-5.431zm-4.27 7.979l1.284-3.972H2.092A7.987 7.987 0 009 17a1.026 1.026 0 00.155-.008z"
                }
            }) ]);
        }, [], !1, null, null, null).exports, re = r.default.extend({
            components: {
                SingleTagAutocomplete: T.a
            },
            data: function() {
                return {
                    value: this.selectedValue
                };
            },
            props: {
                selectedValue: String,
                placeholder: {
                    type: String,
                    required: !0
                },
                popularOptions: Array,
                recommendedOptions: Array,
                ariaLabel: {
                    type: String,
                    required: !0
                },
                validator: RegExp
            },
            computed: {
                options: function() {
                    var e, t;
                    return null !== (t = (null === (e = this.value) || void 0 === e ? void 0 : e.length) ? this.popularOptions : this.recommendedOptions) && void 0 !== t ? t : [];
                },
                filteredValue: function() {
                    var e, t = this;
                    return (null === (e = this.value) || void 0 === e ? void 0 : e.length) ? this.options.filter(function(e) {
                        return e.includes(t.value);
                    }) : this.options;
                }
            },
            watch: {
                selectedValue: function(e) {
                    this.value = e;
                }
            },
            methods: {
                handleSelected: function(e) {
                    this.$emit("selected", e);
                }
            }
        }), le = Object(c.default)(re, function() {
            var e = this, t = e.$createElement;
            return (e._self._c || t)("SingleTagAutocomplete", {
                attrs: {
                    selectedValue: e.selectedValue,
                    results: e.filteredValue,
                    placeholder: e.placeholder,
                    ariaLabel: e.ariaLabel,
                    allowArbitraryInput: !0,
                    validator: e.validator
                },
                on: {
                    selected: e.handleSelected
                },
                scopedSlots: e._u([ {
                    key: "sectionBefore",
                    fn: function() {
                        return [ e._t("sectionBefore") ];
                    },
                    proxy: !0
                }, {
                    key: "sectionAfter",
                    fn: function() {
                        return [ e._t("sectionAfter") ];
                    },
                    proxy: !0
                } ], null, !0),
                model: {
                    value: e.value,
                    callback: function(t) {
                        e.value = t;
                    },
                    expression: "value"
                }
            });
        }, [], !1, null, null, null).exports, oe = n(347), ie = Object(_.createNamespacedHelpers)("exposure").mapState, ae = r.default.extend({
            components: {
                OutlinedDropdown: s.a,
                Aperture: ne,
                ExposureSelect: le,
                RecommendedItems: p.a,
                Btn: oe.a
            },
            props: {
                filterState: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                },
                contentOffset: Number
            },
            data: function() {
                var e, t, n, r;
                return {
                    isOpen: !1,
                    shutterSpeedValue: null !== (t = null === (e = this.filterState) || void 0 === e ? void 0 : e.exif_shutter_speed) && void 0 !== t ? t : null,
                    apertureValue: null !== (r = null === (n = this.filterState) || void 0 === n ? void 0 : n.exif_aperture) && void 0 !== r ? r : null
                };
            },
            computed: Object(b.__assign)(Object(b.__assign)({}, ie([ "recommended", "popular", "ranges" ])), {
                shutterSpeedInputValue: function() {
                    return this.getRecommendedLabel(this.ranges.exif_shutter_speed, this.shutterSpeedValue) ? null : this.shutterSpeedValue;
                },
                shutterSpeedDisplayValue: function() {
                    var e, t, n, r = null !== (t = null === (e = this.filterState) || void 0 === e ? void 0 : e.exif_shutter_speed) && void 0 !== t ? t : null;
                    return r ? null !== (n = this.getRecommendedLabel(this.ranges.exif_shutter_speed, r)) && void 0 !== n ? n : r + "s" : null;
                },
                apertureInputValue: function() {
                    return this.getRecommendedLabel(this.ranges.exif_aperture, this.apertureValue) ? null : this.apertureValue;
                },
                apertureDisplayValue: function() {
                    var e, t, n, r = null !== (t = null === (e = this.filterState) || void 0 === e ? void 0 : e.exif_aperture) && void 0 !== t ? t : null;
                    return r ? null !== (n = this.getRecommendedLabel(this.ranges.exif_aperture, r)) && void 0 !== n ? n : "f/" + r : null;
                },
                displayLabel: function() {
                    return [ this.shutterSpeedDisplayValue, this.apertureDisplayValue ].filter(function(e) {
                        return null !== e;
                    }).join(", ");
                },
                showClear: function() {
                    return Boolean(this.shutterSpeedDisplayValue) || Boolean(this.apertureDisplayValue);
                }
            }),
            watch: {
                filterState: function(e) {
                    var t, n;
                    this.shutterSpeedValue = null !== (t = e.exif_shutter_speed) && void 0 !== t ? t : null, 
                    this.apertureValue = null !== (n = e.exif_aperture) && void 0 !== n ? n : null;
                }
            },
            methods: {
                handleShutterSpeedSelected: function(e) {
                    this.shutterSpeedValue = e;
                },
                handleApertureSelected: function(e) {
                    this.apertureValue = e;
                },
                handleCancel: function() {
                    this.isOpen = !1;
                },
                handleClear: function() {
                    this.$emit("updatefilter", {
                        exif_aperture: null,
                        exif_shutter_speed: null
                    }), this.isOpen = !1;
                },
                handleApply: function() {
                    this.$emit("updatefilter", {
                        exif_aperture: this.apertureValue,
                        exif_shutter_speed: this.shutterSpeedValue
                    }), this.isOpen = !1;
                },
                getRecommendedLabel: function(e, t) {
                    var n, r;
                    return t && null !== (r = null === (n = e.find(function(e) {
                        return e.value === t;
                    })) || void 0 === n ? void 0 : n.label) && void 0 !== r ? r : null;
                }
            },
            beforeCreate: function() {
                this.$store.registerModule("exposure", te, {
                    preserveState: Boolean(this.$store.state.exposure)
                });
            },
            destroyed: function() {
                this.$store.unregisterModule("exposure");
            }
        }), se = n(2168);
        var ue = Object(c.default)(ae, function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("OutlinedDropdown", {
                attrs: {
                    value: e.displayLabel,
                    label: e.$translate("search_filter_exposure_label", "Exposure"),
                    contentOffset: e.contentOffset,
                    isOpen: e.isOpen
                },
                on: {
                    filterDropdownToggled: function(t) {
                        return e.$emit("filterDropdownToggled");
                    },
                    click: function(t) {
                        e.isOpen = !0;
                    },
                    clickout: function(t) {
                        e.isOpen = !1;
                    }
                },
                scopedSlots: e._u([ {
                    key: "icon",
                    fn: function() {
                        return [ n("Aperture", {
                            class: e.$style.icon
                        }) ];
                    },
                    proxy: !0
                }, {
                    key: "content",
                    fn: function() {
                        return [ n("div", {
                            class: e.$style.content
                        }, [ n("div", {
                            class: e.$style.exposureSection
                        }, [ n("h3", {
                            class: e.$style.exposureSectionHeader
                        }, [ e._v(e._s(e.$translate("search_filter_exposure_shutter_speed_header", "Shutter Speed"))) ]), n("ExposureSelect", {
                            class: e.$style.exposureSelect,
                            attrs: {
                                selectedValue: e.shutterSpeedInputValue,
                                popularOptions: e.popular.exif_shutter_speed,
                                recommendedOptions: e.recommended.exif_shutter_speed,
                                placeholder: e.$translate("search_filter_exposure_shutter_speed_placeholder", "Enter Shutter Speed"),
                                ariaLabel: e.$translate("search_filter_exposure_shutter_speed_arialabel", "Shutter speed"),
                                validator: /[0-9/]+/,
                                "data-ut": "shutter-speed-select"
                            },
                            on: {
                                selected: e.handleShutterSpeedSelected
                            },
                            scopedSlots: e._u([ {
                                key: "sectionAfter",
                                fn: function() {
                                    return [ n("span", {
                                        class: e.$style.extraLabel
                                    }, [ e._v("s") ]) ];
                                },
                                proxy: !0
                            } ])
                        }), n("RecommendedItems", {
                            attrs: {
                                header: e.$translate("search_filter_exposure_shutter_speed_ranges", "Shutter Speed Ranges"),
                                items: e.ranges.exif_shutter_speed,
                                displayFunction: function(e) {
                                    return e.label;
                                },
                                selectedFunction: function(t) {
                                    return t.value === e.shutterSpeedValue;
                                },
                                "data-ut": "shutter-speed-ranges"
                            },
                            on: {
                                "item-clicked": function(t) {
                                    return e.handleShutterSpeedSelected(t ? t.value : null);
                                }
                            }
                        }) ], 1), n("div", {
                            class: e.$style.exposureSection
                        }, [ n("h3", {
                            class: e.$style.exposureSectionHeader
                        }, [ e._v(e._s(e.$translate("search_filter_exposure_aperture_header", "Aperture"))) ]), n("ExposureSelect", {
                            class: e.$style.exposureSelect,
                            attrs: {
                                selectedValue: e.apertureInputValue,
                                popularOptions: e.popular.exif_aperture,
                                recommendedOptions: e.recommended.exif_aperture,
                                placeholder: e.$translate("search_filter_exposure_aperture_placeholder", "Enter Aperture"),
                                ariaLabel: e.$translate("search_filter_exposure_aperture_arialabel", "Aperture"),
                                validator: /[0-9.]+/,
                                "data-ut": "aperture-select"
                            },
                            on: {
                                selected: e.handleApertureSelected
                            },
                            scopedSlots: e._u([ {
                                key: "sectionBefore",
                                fn: function() {
                                    return [ n("span", {
                                        class: e.$style.extraLabel
                                    }, [ e._v("f/") ]) ];
                                },
                                proxy: !0
                            } ])
                        }), n("RecommendedItems", {
                            attrs: {
                                header: e.$translate("search_filter_exposure_aperture_ranges", "Aperture Ranges"),
                                items: e.ranges.exif_aperture,
                                displayFunction: function(e) {
                                    return e.label;
                                },
                                selectedFunction: function(t) {
                                    return t.value === e.apertureValue;
                                },
                                "data-ut": "aperture-ranges"
                            },
                            on: {
                                "item-clicked": function(t) {
                                    return e.handleApertureSelected(t ? t.value : null);
                                }
                            }
                        }) ], 1) ]), n("div", {
                            class: e.$style.filterControlButtons
                        }, [ n("Btn", {
                            attrs: {
                                type: "ghost"
                            },
                            on: {
                                click: e.handleCancel
                            }
                        }, [ e._v(e._s(e.$translate("search_filter_exposure_cancel", "Cancel"))) ]), e.showClear ? n("Btn", {
                            attrs: {
                                type: "ghost",
                                "data-ut": "clear-button"
                            },
                            on: {
                                click: e.handleClear
                            }
                        }, [ e._v(" " + e._s(e.$translate("search_filter_exposure_clear", "Clear Filter")) + " ") ]) : e._e(), n("Btn", {
                            attrs: {
                                type: "primary",
                                "data-ut": "apply-button"
                            },
                            on: {
                                click: e.handleApply
                            }
                        }, [ e._v(e._s(e.$translate("search_filter_exposure_apply", "Apply Filter"))) ]) ], 1) ];
                    },
                    proxy: !0
                } ])
            });
        }, [], !1, function(e) {
            this.$style = se.default.locals || se.default;
        }, null, null).exports, ce = r.default.extend({
            components: {
                FilterBar: l.a,
                CreativeFieldFilter: o.a,
                ToolFilter: i.a,
                ColorFilter: a.a,
                FocalFilter: y,
                CameraFilter: R,
                LensFilter: W,
                ImageTypeFilter: ee,
                ExposureFilter: ue
            },
            props: {
                filterState: Object,
                contentType: String,
                isSafeSearch: Boolean
            }
        }), de = Object(c.default)(ce, function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("FilterBar", {
                attrs: {
                    filterState: e.filterState,
                    contentType: e.contentType,
                    isSafeSearch: e.isSafeSearch
                },
                on: {
                    updatefilter: function(t) {
                        return e.$emit("updatefilter", t);
                    },
                    safeSearchChanged: function(t) {
                        return e.$emit("safeSearchChanged", t);
                    }
                },
                scopedSlots: e._u([ {
                    key: "filters",
                    fn: function(t) {
                        var r = t.scrollLeft, l = t.toggleScrollable;
                        return [ n("CreativeFieldFilter", {
                            attrs: {
                                filterState: e.filterState,
                                contentOffset: -r
                            },
                            on: {
                                updatefilter: function(t) {
                                    return e.$emit("updatefilter", t);
                                },
                                filterDropdownToggled: l
                            }
                        }), n("ToolFilter", {
                            attrs: {
                                filterState: e.filterState,
                                contentOffset: -r
                            },
                            on: {
                                updatefilter: function(t) {
                                    return e.$emit("updatefilter", t);
                                },
                                filterDropdownToggled: l
                            }
                        }), n("ColorFilter", {
                            attrs: {
                                filterState: e.filterState,
                                contentOffset: -r
                            },
                            on: {
                                updatefilter: function(t) {
                                    return e.$emit("updatefilter", t);
                                },
                                filterDropdownToggled: l
                            }
                        }), n("CameraFilter", {
                            attrs: {
                                contentOffset: -r,
                                filterState: e.filterState
                            },
                            on: {
                                updatefilter: function(t) {
                                    return e.$emit("updatefilter", t);
                                },
                                filterDropdownToggled: l
                            }
                        }), n("LensFilter", {
                            attrs: {
                                contentOffset: -r,
                                filterState: e.filterState
                            },
                            on: {
                                updatefilter: function(t) {
                                    return e.$emit("updatefilter", t);
                                },
                                filterDropdownToggled: l
                            }
                        }), n("ExposureFilter", {
                            attrs: {
                                contentOffset: -r,
                                filterState: e.filterState
                            },
                            on: {
                                updatefilter: function(t) {
                                    return e.$emit("updatefilter", t);
                                },
                                filterDropdownToggled: l
                            }
                        }), n("FocalFilter", {
                            attrs: {
                                filterState: e.filterState,
                                contentOffset: -r
                            },
                            on: {
                                updatefilter: function(t) {
                                    return e.$emit("updatefilter", t);
                                },
                                filterDropdownToggled: l
                            }
                        }), n("ImageTypeFilter", {
                            attrs: {
                                filterState: e.filterState,
                                contentOffset: -r
                            },
                            on: {
                                updatefilter: function(t) {
                                    return e.$emit("updatefilter", t);
                                },
                                filterDropdownToggled: l
                            }
                        }) ];
                    }
                } ])
            });
        }, [], !1, null, null, null);
        t.default = de.exports;
    },
    371: function(e, t, n) {
        "use strict";
        var r = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }, l = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'"
        }, o = /(&amp;|&lt;|&gt;|&quot;|&#39;)/g, i = /[&<>"']/g;
        function a(e) {
            return r[e];
        }
        function s(e) {
            return l[e];
        }
        function u(e) {
            return null == e ? "" : String(e).replace(i, a);
        }
        function c(e) {
            return null == e ? "" : String(e).replace(o, s);
        }
        u.options = c.options = {}, e.exports = {
            encode: u,
            escape: u,
            decode: c,
            unescape: c,
            version: "1.0.0-browser"
        };
    },
    376: function(e, t, n) {
        var r = n(471);
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n(189).default)("0d4fcdab", r, !0, {});
    },
    380: function(e, t, n) {
        "use strict";
        var r = n(418), l = n.n(r), o = n(17).default.extend({
            name: "TextInput",
            props: {
                type: {
                    type: String,
                    default: "text",
                    validator: function(e) {
                        return /^(text|number|email|password|search|url|tel)$/.test(e);
                    }
                },
                name: {
                    type: String
                },
                label: {
                    type: String
                },
                placeholder: {
                    type: String
                },
                placeholderStyle: {
                    type: String,
                    default: "dark",
                    validator: function(e) {
                        return "dark" === e || "light" === e;
                    }
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                standalone: {
                    type: Boolean
                },
                readonly: {
                    type: Boolean,
                    default: !1
                },
                required: {
                    type: Boolean,
                    default: !1
                },
                autocomplete: {
                    type: String,
                    default: "off"
                },
                autofocus: {
                    type: Boolean,
                    default: !1
                },
                maxlength: {
                    type: Number,
                    default: -1
                },
                minLength: {
                    type: Number,
                    default: 3
                },
                shimWidth: {
                    type: Number
                },
                errorMessage: {
                    type: String
                },
                errorLayout: {
                    type: String,
                    default: "under",
                    validator: function(e) {
                        return "under" === e || "over" === e;
                    }
                },
                value: {
                    type: [ String, Number ],
                    default: ""
                },
                isDark: {
                    type: Boolean,
                    default: !1
                },
                isErrorMessageFixed: {
                    type: Boolean,
                    default: !1
                },
                shouldFocus: {
                    type: Boolean
                },
                isForProjectEditor: {
                    type: Boolean,
                    default: !1
                }
            },
            computed: {
                hasError: function() {
                    return Boolean(this.errorMessage);
                },
                unlabeled: function() {
                    return !this.label;
                },
                shimPadding: function() {
                    return !!this.shimWidth && String(this.shimWidth + 5) + "px";
                }
            },
            watch: {
                shouldFocus: function(e) {
                    this.autofocus && (e ? this.$refs.input.focus() : this.$refs.input.blur());
                }
            },
            methods: {
                hasHtml: function(e) {
                    return l()(e, {
                        allowedTags: []
                    }) !== e;
                },
                hasClientError: function() {
                    var e = this.$refs.input.value;
                    return "" === e ? "isEmpty" : this.hasHtml(e) ? "hasHtml" : -1 !== this.minLength && e.length < this.minLength ? "tooShort" : -1 !== this.maxlength && e.length > this.maxlength && "tooLong";
                },
                handleKeyupEnter: function() {
                    var e = this.hasClientError();
                    e ? this.$emit("hasError", e) : this.$emit("enter", this.$refs.input.value);
                },
                focus: function() {
                    this.$refs.input.focus();
                }
            }
        }), i = n(470), a = n(68);
        var s = Object(a.default)(o, function() {
            var e, t, n, r = this, l = r.$createElement, o = r._self._c || l;
            return o("div", {
                ref: "root",
                class: [ r.$style.textInput, (e = {}, e[r.$style.error] = r.hasError, e[r.$style.errorOver] = "over" === r.errorLayout, 
                e[r.$style.textInputWithSpace] = !r.standalone, e) ]
            }, [ o("label", {
                ref: "label",
                class: r.$style.label
            }, [ r._v(r._s(r.label) + " "), o("input", {
                ref: "input",
                class: [ r.$style.input, (t = {}, t[r.$style.dark] = r.isDark, t[r.$style.unlabeled] = r.unlabeled, 
                t[r.$style.disabled] = r.disabled, t[r.$style.inputWithSpace] = !r.standalone, t[r.$style.placeholderLight] = "light" === r.placeholderStyle, 
                t[r.$style.forProjectEditor] = r.isForProjectEditor, t), "qa-text-input", "e2e-TextInput-input" ],
                style: {
                    "padding-left": r.shimPadding
                },
                attrs: {
                    type: r.type,
                    name: r.name,
                    placeholder: r.placeholder,
                    disabled: r.disabled,
                    required: r.required,
                    maxlength: r.maxlength,
                    autocomplete: r.autocomplete,
                    readonly: r.readonly,
                    autofocus: r.autofocus
                },
                domProps: {
                    value: r.value
                },
                on: {
                    input: function(e) {
                        return r.$emit("input", e.target.value);
                    },
                    blur: function(e) {
                        return r.$emit("blur", e);
                    },
                    keyup: function(e) {
                        return !e.type.indexOf("key") && r._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : r.handleKeyupEnter(e);
                    }
                }
            }) ]), r.hasError ? o("p", {
                ref: "errorMessage",
                class: [ r.$style.errorMessage, (n = {}, n[r.$style.fixed] = r.isErrorMessageFixed, 
                n) ],
                attrs: {
                    "data-ut": "TextInput__error"
                }
            }, [ r._v(r._s(r.errorMessage)) ]) : r._e() ]);
        }, [], !1, function(e) {
            this.$style = i.default.locals || i.default;
        }, null, null);
        t.a = s.exports;
    },
    390: function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return "string" == typeof e ? e.toLowerCase() : e;
        };
    },
    391: function(e, t, n) {
        "use strict";
        var r = n(392);
        e.exports = {
            uris: r([ "background", "base", "cite", "href", "longdesc", "src", "usemap" ])
        };
    },
    392: function(e, t, n) {
        "use strict";
        function r(e, t) {
            return e[t] = !0, e;
        }
        e.exports = function(e) {
            return e.reduce(r, {});
        };
    },
    393: function(e, t, n) {
        "use strict";
        var r = n(392);
        e.exports = {
            voids: r([ "area", "br", "col", "hr", "img", "wbr", "input", "base", "basefont", "link", "meta" ])
        };
    },
    418: function(e, t, n) {
        "use strict";
        n(371);
        var r = n(452), l = n(453), o = n(454), i = n(455);
        function a(e, t, n) {
            var a = [], s = !0 === n ? t : r({}, i, t), u = o(a, s);
            return l(e, u), a.join("");
        }
        a.defaults = i, e.exports = a;
    },
    452: function(e, t, n) {
        "use strict";
        e.exports = function e(t) {
            for (var n, r, l = Array.prototype.slice.call(arguments, 1); l.length; ) for (r in n = l.shift()) n.hasOwnProperty(r) && ("[object Object]" === Object.prototype.toString.call(t[r]) ? t[r] = e(t[r], n[r]) : t[r] = n[r]);
            return t;
        };
    },
    453: function(e, t, n) {
        "use strict";
        var r = n(371), l = n(390), o = (n(391), n(393)), i = /^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/, a = /^<\s*\/\s*([\w:-]+)[^>]*>/, s = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g, u = /^</, c = /^<\s*\//;
        e.exports = function(e, t) {
            for (var n, d = function() {
                var e = [];
                return e.lastItem = function() {
                    return e[e.length - 1];
                }, e;
            }(), p = e; e; ) f();
            function f() {
                n = !0, "\x3c!--" === e.substr(0, 4) ? function() {
                    var r = e.indexOf("--\x3e");
                    r >= 0 && (t.comment && t.comment(e.substring(4, r)), e = e.substring(r + 3), n = !1);
                }() : c.test(e) ? h(a, g) : u.test(e) && h(i, m), function() {
                    if (n) {
                        var r, l = e.indexOf("<");
                        l >= 0 ? (r = e.substring(0, l), e = e.substring(l)) : (r = e, e = ""), t.chars && t.chars(r);
                    }
                }();
                var r = e === p;
                p = e, r && (e = "");
            }
            function h(t, r) {
                var l = e.match(t);
                l && (e = e.substring(l[0].length), l[0].replace(t, r), n = !1);
            }
            function m(e, n, i, a) {
                var u = {}, c = l(n), p = o.voids[c] || !!a;
                i.replace(s, function(e, t, n, l, o) {
                    u[t] = void 0 === n && void 0 === l && void 0 === o ? void 0 : r.decode(n || l || o || "");
                }), p || d.push(c), t.start && t.start(c, u, p);
            }
            function g(e, n) {
                var r, o = 0, i = l(n);
                if (i) for (o = d.length - 1; o >= 0 && d[o] !== i; o--) ;
                if (o >= 0) {
                    for (r = d.length - 1; r >= o; r--) t.end && t.end(d[r]);
                    d.length = o;
                }
            }
            g();
        };
    },
    454: function(e, t, n) {
        "use strict";
        var r = n(371), l = n(390), o = n(391), i = n(393);
        e.exports = function(e, t) {
            var n, a = t || {};
            return d(), {
                start: function(e, t, i) {
                    var c = l(e);
                    n.ignoring ? u(c) : -1 !== (a.allowedTags || []).indexOf(c) && (!a.filter || a.filter({
                        tag: c,
                        attrs: t
                    })) ? (s("<"), s(c), Object.keys(t).forEach(function(e) {
                        var n, i = t[e], u = (a.allowedClasses || {})[c] || [], d = (a.allowedAttributes || {})[c] || [], p = l(e);
                        "class" === p && -1 === d.indexOf(p) ? (i = i.split(" ").filter(function(e) {
                            return u && -1 !== u.indexOf(e);
                        }).join(" ").trim(), n = i.length) : n = -1 !== d.indexOf(p) && (!0 !== o.uris[p] || function(e) {
                            var t = e[0];
                            if ("#" === t || "/" === t) return !0;
                            var n = e.indexOf(":");
                            if (-1 === n) return !0;
                            var r = e.indexOf("?");
                            if (-1 !== r && n > r) return !0;
                            var l = e.indexOf("#");
                            return -1 !== l && n > l || a.allowedSchemes.some(function(t) {
                                return 0 === e.indexOf(t + ":");
                            });
                        }(i)), n && (s(" "), s(e), "string" == typeof i && (s('="'), s(r.encode(i)), s('"')));
                    }), s(i ? "/>" : ">")) : u(c);
                },
                end: function(e) {
                    var t = l(e);
                    -1 !== (a.allowedTags || []).indexOf(t) && !1 === n.ignoring ? (s("</"), s(t), s(">")) : c(t);
                },
                chars: function(e) {
                    !1 === n.ignoring && s(a.transformText ? a.transformText(e) : e);
                }
            };
            function s(t) {
                e.push(t);
            }
            function u(e) {
                i.voids[e] || (!1 === n.ignoring ? n = {
                    ignoring: e,
                    depth: 1
                } : n.ignoring === e && n.depth++);
            }
            function c(e) {
                n.ignoring === e && --n.depth <= 0 && d();
            }
            function d() {
                n = {
                    ignoring: !1,
                    depth: 0
                };
            }
        };
    },
    455: function(e, t, n) {
        "use strict";
        e.exports = {
            allowedAttributes: {
                a: [ "href", "name", "target", "title", "aria-label" ],
                iframe: [ "allowfullscreen", "frameborder", "src" ],
                img: [ "src", "alt", "title", "aria-label" ]
            },
            allowedClasses: {},
            allowedSchemes: [ "http", "https", "mailto" ],
            allowedTags: [ "a", "abbr", "article", "b", "blockquote", "br", "caption", "code", "del", "details", "div", "em", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "img", "ins", "kbd", "li", "main", "mark", "ol", "p", "pre", "section", "span", "strike", "strong", "sub", "summary", "sup", "table", "tbody", "td", "th", "thead", "tr", "u", "ul" ],
            filter: null
        };
    },
    470: function(e, t, n) {
        "use strict";
        var r = n(376), l = n.n(r);
        t.default = l.a;
    },
    471: function(e, t, n) {
        (t = e.exports = n(188)(!1)).push([ e.i, ".TextInput-textInput-29G {\n  font-size: 13px;\n  vertical-align: top;\n}\n.TextInput-textInputWithSpace-2so {\n  margin-bottom: 15px;\n}\n.TextInput-label-1SN {\n  font-family: inherit;\n  font-size: 13px;\n  line-height: 1.3;\n  cursor: pointer;\n  display: block;\n  font-weight: bold;\n}\n.TextInput-input-1ZG {\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  box-sizing: border-box;\n  color: #191919;\n  display: block;\n  font-weight: 600;\n  height: 32px;\n  padding: 4px;\n  padding-left: 10px;\n  width: 100%;\n}\n.TextInput-input-1ZG::-webkit-input-placeholder {\n    color: #959595;\n}\n.TextInput-input-1ZG::-moz-placeholder {\n    color: #959595;\n}\n.TextInput-input-1ZG:-ms-input-placeholder {\n    color: #959595;\n}\n.TextInput-input-1ZG::-ms-input-placeholder {\n    color: #959595;\n}\n.TextInput-input-1ZG::placeholder {\n    color: #959595;\n}\n.TextInput-input-1ZG.TextInput-placeholderLight-1WL::-webkit-input-placeholder {\n    color: #fff;\n}\n.TextInput-input-1ZG.TextInput-placeholderLight-1WL::-moz-placeholder {\n    color: #fff;\n}\n.TextInput-input-1ZG.TextInput-placeholderLight-1WL:-ms-input-placeholder {\n    color: #fff;\n}\n.TextInput-input-1ZG.TextInput-placeholderLight-1WL::-ms-input-placeholder {\n    color: #fff;\n}\n.TextInput-input-1ZG.TextInput-placeholderLight-1WL::placeholder {\n    color: #fff;\n}\n.TextInput-input-1ZG:hover {\n    border-color: #696969;\n}\n.TextInput-input-1ZG:focus {\n    border-color: #0057ff;\n}\n.TextInput-error-1H3 .TextInput-input-1ZG {\n    border-color: #d00;\n}\n.TextInput-input-1ZG.TextInput-disabled-KjM {\n    background: #e8e8e8;\n    color: #959595;\n}\n.TextInput-input-1ZG.TextInput-forProjectEditor-dsA {\n    height: 38px;\n}\n.TextInput-inputWithSpace-33q {\n  margin-top: 8px;\n}\n.TextInput-inputWithSpace-33q.TextInput-unlabeled-1hM {\n    margin-top: 21px;\n}\n.TextInput-errorMessage-3fr {\n  color: #d00;\n  font-size: 12px;\n  font-weight: 600;\n  margin-bottom: 0;\n  margin-top: 5px;\n}\n.TextInput-errorMessage-3fr.TextInput-fixed-3zs {\n    position: absolute;\n}\n.TextInput-textInput-29G.TextInput-errorOver-2A9 {\n  position: relative;\n}\n.TextInput-textInput-29G.TextInput-errorOver-2A9 .TextInput-input-1ZG,\n  .TextInput-textInput-29G.TextInput-errorOver-2A9 .TextInput-input-1ZG.TextInput-unlabeled-1hM {\n    margin-top: 0;\n}\n.TextInput-textInput-29G.TextInput-errorOver-2A9 .TextInput-errorMessage-3fr {\n    bottom: 100%;\n    font-style: normal;\n    margin-bottom: 5px;\n    margin-top: 0;\n    position: absolute;\n}\n.TextInput-dark-FIp {\n  font-family: inherit;\n  font-size: 13px;\n  line-height: 1.3;\n  background: rgba(255, 255, 255, 0.2);\n  border-color: rgba(255, 255, 255, 0.25);\n  color: #fff;\n  min-width: 343px;\n}\n.TextInput-input-1ZG {\n  -webkit-transition: border-color 0.15s linear, color 0.15s linear, background-color 0.15s linear;\n  transition: border-color 0.15s linear, color 0.15s linear, background-color 0.15s linear;\n}\n", "" ]), 
        t.locals = {
            textInput: "TextInput-textInput-29G",
            textInputWithSpace: "TextInput-textInputWithSpace-2so",
            label: "TextInput-label-1SN",
            input: "TextInput-input-1ZG",
            placeholderLight: "TextInput-placeholderLight-1WL",
            error: "TextInput-error-1H3",
            disabled: "TextInput-disabled-KjM",
            forProjectEditor: "TextInput-forProjectEditor-dsA",
            inputWithSpace: "TextInput-inputWithSpace-33q",
            unlabeled: "TextInput-unlabeled-1hM",
            errorMessage: "TextInput-errorMessage-3fr",
            fixed: "TextInput-fixed-3zs",
            errorOver: "TextInput-errorOver-2A9",
            dark: "TextInput-dark-FIp"
        };
    },
    774: function(e, t, n) {
        var r = n(1192);
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n(189).default)("1f6c9524", r, !0, {});
    },
    775: function(e, t, n) {
        var r = n(1194);
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n(189).default)("485b7794", r, !0, {});
    },
    898: function(e, t, n) {
        var r = n(1331);
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n(189).default)("8374dbd8", r, !0, {});
    },
    899: function(e, t, n) {
        var r = n(1333);
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n(189).default)("019f3d93", r, !0, {});
    },
    900: function(e, t, n) {
        var r = n(1335);
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n(189).default)("efd582b8", r, !0, {});
    },
    901: function(e, t, n) {
        var r = n(1337);
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n(189).default)("454f56a1", r, !0, {});
    },
    902: function(e, t, n) {
        var r = n(1339);
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n(189).default)("627c5de2", r, !0, {});
    },
    909: function(e, t, n) {
        "use strict";
        var r = n(17).default.extend({
            props: {
                header: String,
                items: Array,
                selectedValue: [ String, Object ],
                displayFunction: {
                    type: Function,
                    default: function(e) {
                        return e;
                    }
                },
                selectedFunction: {
                    type: Function
                }
            },
            methods: {
                isSelected: function(e) {
                    var t = this;
                    return (this.selectedFunction ? this.selectedFunction : function(e) {
                        return e === t.selectedValue;
                    })(e);
                },
                handleClick: function(e) {
                    this.$emit("item-clicked", this.isSelected(e) ? null : e);
                }
            }
        }), l = n(1336), o = n(68);
        var i = Object(o.default)(r, function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", [ n("h3", {
                class: e.$style.recommendedHeader
            }, [ e._v(e._s(e.header)) ]), n("ul", {
                attrs: {
                    "data-ut": "popular-camera-list"
                }
            }, e._l(e.items, function(t, r) {
                var l;
                return n("li", {
                    key: r
                }, [ n("button", {
                    class: [ e.$style.recommendedItem, "qa-RecommendedItems-item", "e2e-RecommendedItems-item", (l = {}, 
                    l[e.$style.selected] = e.isSelected(t), l) ],
                    on: {
                        click: function(n) {
                            return e.handleClick(t);
                        }
                    }
                }, [ e._v(e._s(e.displayFunction(t))) ]) ]);
            }), 0) ]);
        }, [], !1, function(e) {
            this.$style = l.default.locals || l.default;
        }, null, null);
        t.a = i.exports;
    },
    911: function(e, t, n) {
        "use strict";
        var r = n(68), l = Object(r.default)({}, function() {
            var e = this.$createElement, t = this._self._c || e;
            return t("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "12.517",
                    viewBox: "0 0 16 12.517"
                }
            }, [ t("path", {
                attrs: {
                    d: "M38.522,39.9a2.322,2.322,0,1,0,2.322,2.322A2.326,2.326,0,0,0,38.522,39.9Z",
                    transform: "translate(-30.513 -35.357)"
                }
            }), t("path", {
                attrs: {
                    d: "M16.246,14.734H14.8a.952.952,0,0,1-.824-.454l-.437-.673a1.554,1.554,0,0,0-1.3-.707H8.558a1.554,1.554,0,0,0-1.3.707l-.437.673A.973.973,0,0,1,6,14.734H4.554A2.158,2.158,0,0,0,2.4,16.887v6.376a2.158,2.158,0,0,0,2.154,2.154H16.246A2.158,2.158,0,0,0,18.4,23.264V16.871A2.143,2.143,0,0,0,16.246,14.734Zm-5.838,8.547a3.516,3.516,0,1,1,3.516-3.516A3.526,3.526,0,0,1,10.408,23.281Z",
                    transform: "translate(-2.4 -12.9)"
                }
            }) ]);
        }, [], !1, null, null, null);
        t.a = l.exports;
    },
    933: function(e, t, n) {
        "use strict";
        var r = n(1049), l = n(1052), o = n(1219), i = n(1220), a = n(17).default.extend({
            components: {
                Dropdown: r.a,
                ResultsList: l.a,
                SingleTagInput: o.a,
                InputExtraSection: i.a
            },
            props: {
                value: String,
                selectedValue: String,
                results: Array,
                placeholder: String,
                ariaLabel: String,
                displayFunction: {
                    type: Function,
                    default: function(e) {
                        return e;
                    }
                },
                keyFunction: {
                    type: Function,
                    default: function(e) {
                        return e;
                    }
                },
                allowArbitraryInput: {
                    type: Boolean,
                    default: !1
                },
                validator: RegExp
            },
            data: function() {
                return {
                    isOpen: !1
                };
            },
            computed: {
                displayedPlaceholder: function() {
                    var e;
                    return null !== (e = this.placeholder) && void 0 !== e ? e : this.$translate("search_single_tag_autocomplete_placeholder", "Start typing to see list");
                },
                displayValue: function() {
                    var e;
                    return null !== (e = this.value) && void 0 !== e ? e : this.selectedValue;
                },
                hasValue: function() {
                    var e;
                    return Boolean(null === (e = this.value) || void 0 === e ? void 0 : e.length);
                },
                hasResults: function() {
                    var e;
                    return 0 !== (null === (e = this.results) || void 0 === e ? void 0 : e.length);
                },
                showNoResults: function() {
                    return this.hasValue && !this.allowArbitraryInput;
                },
                isSelected: function() {
                    return this.hasValue && this.value === this.selectedValue;
                },
                hasSectionBefore: function() {
                    return Boolean(this.$slots.sectionBefore);
                },
                hasSectionAfter: function() {
                    return Boolean(this.$slots.sectionAfter);
                }
            },
            methods: {
                handleSelected: function(e) {
                    this.isOpen = !1, this.$emit("selected", e);
                },
                handleInput: function(e) {
                    this.isOpen = !0, this.$emit("input", e);
                },
                handleFocus: function() {
                    this.isOpen = !0;
                },
                handleClearClicked: function() {
                    this.handleSelected(null);
                },
                handleClickout: function() {
                    this.isOpen = !1, this.allowArbitraryInput ? this.handleSelected(this.value) : this.hasValue ? this.$emit("input", this.selectedValue) : this.handleSelected(null);
                },
                handleKeyEnter: function() {
                    this.allowArbitraryInput && this.handleSelected(this.value);
                }
            }
        }), s = n(1334), u = n(68);
        var c = Object(u.default)(a, function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {
                class: e.$style.container
            }, [ e.hasSectionBefore ? n("InputExtraSection", {
                attrs: {
                    sectionBefore: "",
                    "data-ut": "section-before"
                }
            }, [ e._t("sectionBefore") ], 2) : e._e(), n("Dropdown", {
                class: e.$style.dropdown,
                attrs: {
                    isOpen: e.isOpen,
                    contentContainerClass: e.$style.content
                },
                on: {
                    clickout: e.handleClickout
                },
                scopedSlots: e._u([ {
                    key: "control",
                    fn: function() {
                        var t;
                        return [ n("SingleTagInput", {
                            class: [ e.$style.input, (t = {}, t[e.$style.clearRightRadius] = e.hasSectionAfter, 
                            t[e.$style.clearLeftRadius] = e.hasSectionBefore, t) ],
                            attrs: {
                                isSelected: e.isSelected,
                                value: e.displayValue,
                                placeholder: e.displayedPlaceholder,
                                validator: e.validator,
                                "aria-label": e.ariaLabel
                            },
                            on: {
                                input: e.handleInput,
                                focus: e.handleFocus,
                                "clear-clicked": e.handleClearClicked,
                                keyup: function(t) {
                                    return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.handleKeyEnter(t);
                                }
                            }
                        }) ];
                    },
                    proxy: !0
                }, {
                    key: "content",
                    fn: function() {
                        return [ e.hasResults ? n("ResultsList", {
                            class: e.$style.resultsList,
                            attrs: {
                                items: e.results,
                                keyboardActive: e.isOpen,
                                displayFunction: e.displayFunction,
                                keyFunction: e.keyFunction
                            },
                            on: {
                                selected: e.handleSelected
                            }
                        }) : e.showNoResults ? n("span", {
                            class: e.$style.noResults
                        }, [ e._v(" " + e._s(e.$translate("single_tag_autocomplete_not_found", 'Sorry, we couldn’t find results for "{query}"', {
                            query: e.value
                        })) + " ") ]) : e._e() ];
                    },
                    proxy: !0
                } ])
            }), e.hasSectionAfter ? n("InputExtraSection", {
                attrs: {
                    sectionAfter: "",
                    "data-ut": "section-after"
                }
            }, [ e._t("sectionAfter") ], 2) : e._e() ], 1);
        }, [], !1, function(e) {
            this.$style = s.default.locals || s.default;
        }, null, null);
        t.a = c.exports;
    }
} ]);