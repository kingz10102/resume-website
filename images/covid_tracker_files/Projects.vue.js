(("undefined" != typeof global ? global : self).webpackJsonp = ("undefined" != typeof global ? global : self).webpackJsonp || []).push([ [ 103, 16 ], {
    1008: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return u;
        });
        n(19), n(69), n(85), n(20), n(22), n(108), n(42), n(37), n(71), n(190), n(24), n(9), 
        n(11), n(84), n(44), n(23), n(45), n(43);
        var r = n(369), o = n.n(r), i = n(14), a = n(939);
        function s(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n;
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance");
            }();
        }
        function l(e, t, n, r, o, i, a) {
            try {
                var s = e[i](a), l = s.value;
            } catch (e) {
                return void n(e);
            }
            s.done ? t(l) : Promise.resolve(l).then(r, o);
        }
        function c(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    var i = e.apply(t, n);
                    function a(e) {
                        l(i, r, o, a, s, "next", e);
                    }
                    function s(e) {
                        l(i, r, o, a, s, "throw", e);
                    }
                    a(void 0);
                });
            };
        }
        var u = {
            observerGrid: "observer_grid",
            recycleGrid: "recycle_grid"
        }, d = {
            components: {
                virtualList: n.n(a).a
            },
            props: {
                breakpoints: {
                    type: Array,
                    default: function() {
                        return [ 603, 876, 1300, 1724, 2148, 2592 ];
                    }
                },
                items: {
                    type: Array,
                    required: !0
                },
                gridType: {
                    type: String
                },
                itemsPerPage: {
                    type: Number,
                    default: 48
                },
                shouldFreeze: {
                    type: Boolean
                }
            },
            data: function() {
                return {
                    orientationTimer: null,
                    columns: 5,
                    containerHeight: 0,
                    itemHeightPlusMargin: 0,
                    isDynamic: !1,
                    culledAbove: 0,
                    culledBelow: 20,
                    cullTimeout: null,
                    resizeTimeout: null,
                    itemInFocus: -1,
                    itemsPerRow: -1,
                    rowHeight: 0,
                    numRowsHiddenAbove: 0,
                    resizeTimer: null,
                    visibleRowIndex: -1,
                    chunkHeight: 0,
                    isObserverGrid: this.gridType === u.observerGrid,
                    isRecycleGrid: this.gridType === u.recycleGrid
                };
            },
            mounted: function() {
                this.isRecycleGrid ? this.initRecycleGrid() : this.isObserverGrid ? this.initPerfGrid() : this.initDynamicGrid();
            },
            destroyed: function() {
                var e = this;
                this.isRecycleGrid ? this.destroyRecycleGrid() : this.isObserverGrid ? this.destroyPerfGrid() : (Object.keys(this.breakpoints).forEach(function(t) {
                    o.a.off(t, e.updateColumns), o.a.off(t, e.updateHeight);
                }), window.removeEventListener("resize", this.resizeHandle), window.removeEventListener("scroll", this.scrollHandle), 
                window.removeEventListener("scroll", this.loadNextPage), window.removeEventListener("orientationchange", this.onOrientationChangeEnd));
            },
            methods: {
                initRecycleGrid: function() {
                    var e = this;
                    return c(regeneratorRuntime.mark(function t() {
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (i.default.hasOwnProperty("IntersectionObserver")) {
                                    t.next = 3;
                                    break;
                                }
                                return t.next = 3, e.polyFillIO();

                              case 3:
                                e.setRecycleGridParams(), window.addEventListener("resize", e.onResizeEnd), window.addEventListener("scroll", e.loadNextPage);

                              case 6:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                destroyRecycleGrid: function() {
                    window.removeEventListener("resize", this.onResizeEnd), window.removeEventListener("scroll", this.loadNextPage);
                },
                handleVisibility: function(e, t) {
                    var n = e && t.target, r = n.dataset && n.dataset.rowIndex;
                    this.visibleRowIndex = r ? Number(r) : this.visibleRowIndex;
                    var o = this.visibleRowIndex - 9;
                    this.numRowsHiddenAbove = o - 1;
                },
                setRecycleGridParams: function() {
                    this.updateChunkHeight(), this.updateColumns();
                },
                updateChunkHeight: function() {
                    var e = this;
                    return c(regeneratorRuntime.mark(function t() {
                        var n;
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, e.$nextTick();

                              case 2:
                                if (e.$emit("chunk-height-update-attempted"), n = e.$refs.chunk && e.$refs.chunk[0].getBoundingClientRect().height, 
                                e.chunkHeight !== n && void 0 !== n) {
                                    t.next = 6;
                                    break;
                                }
                                return t.abrupt("return");

                              case 6:
                                e.chunkHeight = n;

                              case 7:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                updateGrid: function() {
                    this.updateColumns(), this.isRecycleGrid && this.updateChunkHeight(), this.isObserverGrid && (this.rowHeight = this.$refs.listItem[0].getBoundingClientRect().height);
                },
                onOrientationChangeEnd: function() {
                    clearTimeout(this.orientationTimer), this.orientationTimer = setTimeout(this.updateColumns, 500);
                },
                onResizeEnd: function() {
                    clearTimeout(this.resizeTimer), this.resizeTimer = setTimeout(this.updateGrid, 150);
                },
                loadNextPage: function() {
                    var e = this.numPage < 3 ? .5 : .8;
                    this.shouldFreeze || i.default.innerHeight + i.default.scrollY() < document.body.scrollHeight * e || this.handleReachPageEnd();
                },
                bind: function() {
                    window.addEventListener("scroll", this.loadNextPage), window.addEventListener("resize", this.onResizeEnd);
                },
                unbind: function() {
                    window.removeEventListener("scroll", this.loadNextPage), window.removeEventListener("resize", this.onResizeEnd);
                },
                initPerfGrid: function() {
                    this.updateGrid(), this.bind();
                },
                destroyPerfGrid: function() {
                    this.unbind();
                },
                handleReachPageEnd: function() {
                    this.$emit("reachedEnd");
                },
                updateColumns: function() {
                    for (var e = i.default.innerWidth, t = this.breakpoints.length + 1, n = 0; n < this.breakpoints.length; n++) if (e <= this.breakpoints[n]) {
                        t = n + 1;
                        break;
                    }
                    this.columns = t, this.itemsPerRow = t, this.$emit("columnUpdated", t);
                },
                updateHeight: function() {
                    if (!this.$refs.listItem) return this.containerHeight = 0;
                    this.containerHeight = this.itemHeightPlusMargin * Math.ceil(this.$refs.listItem.length / this.columns) + 80;
                },
                getTransform: function(e, t) {
                    return {
                        transform: "translate(" + 100 * e + "%, " + 100 * t + "%)"
                    };
                },
                initDynamicGrid: function() {
                    var e = this;
                    Object.keys(this.mediaQueries).forEach(function(t) {
                        o()(t, e.mediaQueries[t]), o.a.on(t, e.updateColumns), o.a.on(t, e.updateHeight);
                    }), this.updateColumns(), this.updateLayoutCache(), this.isDynamic = !0, window.addEventListener("resize", this.resizeHandle), 
                    window.addEventListener("scroll", this.scrollHandle), window.addEventListener("scroll", this.loadNextPage), 
                    window.addEventListener("orientationchange", this.onOrientationChangeEnd);
                },
                updateLayoutCache: function() {
                    if (this.$refs.listItem && this.$refs.listItem.length) {
                        var e = this.$refs.listItem[0].getBoundingClientRect();
                        this.itemHeightPlusMargin = e.height, this.gridWrapOffset = i.default.scrollY() + e.top, 
                        this.updateHeight(), this.updateCulling();
                    } else this.itemHeightPlusMargin = 0;
                },
                resizeHandle: function() {
                    document.body.classList.contains("overlay-open") || (this.resizeTimeout && i.default.cancelAnimationFrame(this.resizeTimeout), 
                    this.resizeTimeout = i.default.requestAnimationFrame(this.updateLayoutCache));
                },
                scrollHandle: function() {
                    document.body.classList.contains("overlay-open") || (this.cullTimeout && i.default.cancelAnimationFrame(this.cullTimeout), 
                    this.cullTimeout = i.default.requestAnimationFrame(this.updateCulling));
                },
                updateCulling: function() {
                    var e = Math.floor((i.default.scrollY() - this.gridWrapOffset) / this.itemHeightPlusMargin), t = e * this.columns;
                    this.culledAbove = t;
                    var n = (e + (Math.ceil(i.default.innerHeight / this.itemHeightPlusMargin) + 3)) * this.columns;
                    this.culledBelow = n;
                },
                isCulled: function(e) {
                    return e < this.culledAbove || e >= this.culledBelow;
                }
            },
            watch: {
                items: function() {
                    var e = this;
                    return c(regeneratorRuntime.mark(function t() {
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (!e.isObserverGrid) {
                                    t.next = 2;
                                    break;
                                }
                                return t.abrupt("return");

                              case 2:
                                return t.next = 4, e.$nextTick();

                              case 4:
                                e.updateLayoutCache();

                              case 5:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                shouldFreeze: function(e) {
                    if (e) return this.unbind();
                    this.bind();
                }
            },
            computed: {
                itemChunk: function() {
                    var e = [], t = s(this.items);
                    if (this.itemsPerRow <= 0) return e;
                    for (;t.length; ) e.push(t.splice(0, this.itemsPerRow));
                    return e;
                },
                rowAnchors: function() {
                    var e = this;
                    return this.items.map(function(t, n) {
                        if (n % e.itemsPerRow == 0) return {};
                    }).filter(function(e) {
                        return e;
                    });
                },
                numPage: function() {
                    return this.items.length / this.itemsPerPage;
                },
                numRowsPerPage: function() {
                    return Math.floor(this.itemsPerPage / this.itemsPerRow);
                },
                lowerLimit: function() {
                    return this.numRowsHiddenAbove * this.itemsPerRow - 1;
                },
                upperLimit: function() {
                    var e = this.visibleRowIndex * this.itemsPerRow, t = Math.ceil(e + 2 * this.numRowsPerPage * this.itemsPerRow);
                    return Math.max(t + 1, this.itemsPerPage);
                },
                numRowsRendered: function() {
                    return Math.floor((this.upperLimit - this.lowerLimit) / this.itemsPerRow);
                },
                numRowsTotal: function() {
                    return Math.floor(this.items.length / this.itemsPerRow);
                },
                numRowsHiddenBelow: function() {
                    return this.numRowsTotal - this.numRowsRendered - this.numRowsHiddenAbove;
                },
                mediaQueries: function() {
                    var e = this;
                    if (!this.isObserverGrid) {
                        var t = this.breakpoints.map(function(t, n) {
                            return n === e.breakpoints.length - 1 ? "screen and (min-width: " + (t + 1) + "px)" : "screen and (min-width: " + (t + 1) + "px) and (max-width: " + e.breakpoints[n + 1] + "px)";
                        });
                        return t.splice(0, 0, "screen and (max-width: " + this.breakpoints[0] + "px)"), 
                        t;
                    }
                },
                matrix: function() {
                    if (!this.isObserverGrid) {
                        for (var e = 0, t = -1, n = [], r = 0; r < this.items.length; r++) r % this.columns == 0 && (e = 0, 
                        t++), n.push([ t, e ]), e++;
                        return n;
                    }
                }
            }
        }, f = n(940), p = n(68);
        var h = Object(p.default)(d, function() {
            var e, t, n = this, r = n.$createElement, o = n._self._c || r;
            return o("div", {
                ref: "root",
                class: [ n.$style.root, "qa-content-grid", (e = {}, e[n.$style.isDynamic] = n.isDynamic, 
                e), (t = {}, t[n.$style.observerGrid] = n.isObserverGrid, t) ],
                style: n.isObserverGrid ? {} : {
                    minHeight: n.containerHeight + "px"
                },
                attrs: {
                    "data-qa-items-per-page": n.itemsPerPage
                }
            }, [ o("div", {
                class: n.$style.gridWrap
            }, [ n.isObserverGrid ? [ n._l(n.rowAnchors, function(e, t) {
                return [ o("div", {
                    directives: [ {
                        name: "observe-visibility",
                        rawName: "v-observe-visibility",
                        value: n.handleVisibility,
                        expression: "handleVisibility"
                    } ],
                    key: t,
                    ref: "anchor",
                    refInFor: !0,
                    class: n.$style.anchor,
                    style: {
                        transform: "translateY(" + t * n.rowHeight + "px)"
                    },
                    attrs: {
                        "data-row-index": t,
                        tabindex: "-1"
                    }
                }) ];
            }), o("ul", {
                ref: "gridWrap",
                class: n.$style.grid,
                style: {
                    paddingTop: Math.max(n.numRowsHiddenAbove * n.rowHeight, 0) + "px",
                    paddingBottom: Math.max(n.numRowsHiddenBelow * n.rowHeight, 0) + "px"
                }
            }, [ n._l(n.items, function(e, t) {
                var r;
                return [ t > n.lowerLimit && t < n.upperLimit ? o("li", {
                    key: t,
                    ref: "listItem",
                    refInFor: !0,
                    class: [ n.$style.gridItem, (r = {}, r[n.$style.focused] = n.itemInFocus === t, 
                    r), "qa-grid-item", "e2e-ContentGrid-item" ],
                    attrs: {
                        "data-qa-index": t
                    }
                }, [ n._t("item", null, {
                    item: e
                }) ], 2) : n._e() ];
            }) ], 2) ] : n.isRecycleGrid ? [ o("virtualList", {
                attrs: {
                    size: n.chunkHeight,
                    remain: 10,
                    pagemode: !0,
                    wclass: n.$style.list,
                    itemcount: n.itemChunk.length
                }
            }, n._l(n.itemChunk, function(e, t) {
                return o("ul", {
                    key: "chunk-" + t,
                    ref: "chunk",
                    refInFor: !0,
                    class: n.$style.chunk
                }, n._l(e, function(e, t) {
                    var r;
                    return o("li", {
                        key: "item-" + t,
                        ref: "listItem",
                        refInFor: !0,
                        class: [ n.$style.gridItem, (r = {}, r[n.$style.focused] = n.itemInFocus === t, 
                        r), "qa-grid-item", "e2e-ContentGrid-item" ]
                    }, [ n._t("item", null, {
                        item: e
                    }) ], 2);
                }), 0);
            }), 0) ] : o("ul", {
                ref: "gridWrap",
                class: n.$style.grid
            }, n._l(n.items, function(e, t) {
                var r;
                return o("li", {
                    key: t,
                    ref: "listItem",
                    refInFor: !0,
                    class: [ n.$style.gridItem, (r = {}, r[n.$style.focused] = n.itemInFocus === t, 
                    r), "qa-grid-item", "e2e-ContentGrid-item" ],
                    style: n.isDynamic && n.getTransform(n.matrix[t][1], n.matrix[t][0])
                }, [ n._t("item", null, {
                    item: e,
                    cull: n.isCulled(t)
                }) ], 2);
            }), 0) ], 2) ]);
        }, [], !1, function(e) {
            this.$style = f.default.locals || f.default;
        }, null, null);
        t.b = h.exports;
    },
    1658: function(e, t, n) {
        var r = n(2135);
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n(189).default)("eb953e0c", r, !0, {});
    },
    1659: function(e, t, n) {
        var r = n(2137);
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n(189).default)("7d054548", r, !0, {});
    },
    2134: function(e, t, n) {
        "use strict";
        var r = n(1658), o = n.n(r);
        t.default = o.a;
    },
    2135: function(e, t, n) {
        (t = e.exports = n(188)(!1)).push([ e.i, ".ProjectCover-image-1zW {\n  border-radius: 4px;\n  display: block;\n  overflow: hidden;\n  width: 100%;\n}\n.ProjectCover-image-1zW,\n.ProjectCover-coverLink-3m3.ProjectCover-coverLink-3m3 {\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.ProjectCover-details-1U4 {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  pointer-events: none;\n  position: relative;\n  width: 100%;\n}\n.ProjectCover-info-2a- {\n  min-width: 0;\n  padding-right: 15px;\n  text-align: left;\n}\n.ProjectCover-icon-1Go {\n  margin-right: 5px;\n}\n.ProjectCover-icon-1Go:not(:first-child) {\n    margin-left: 12px;\n}\n.ProjectCover-controlsAndPrivacyContainer-6ww {\n  display: -webkit-box;\n  display: flex;\n  left: 15px;\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  z-index: 1;\n}\n.ProjectCover-privacyLockContainer-1dh {\n  position: absolute;\n  right: 0;\n}\n.ProjectCover-coverWithFlags-1hm:hover .ProjectCover-privacyLockContainer-1dh {\n    display: none;\n}\n@-webkit-keyframes ProjectCover-fadeIn-1VA {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes ProjectCover-fadeIn-1VA {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n.ProjectCover-searchLoadingPlaceholder-3HC {\n  -webkit-animation: ProjectCover-fadeIn-1VA ease-in 1;\n          animation: ProjectCover-fadeIn-1VA ease-in 1;\n  -webkit-animation-duration: 0.2s;\n          animation-duration: 0.2s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  background-color: #ccc;\n  border-radius: 3px;\n  opacity: 0;\n  overflow: hidden;\n  position: relative;\n}\n.ProjectCover-wrapper-2W8 {\n  background-color: #f2f2f2;\n  position: relative;\n}\n.ProjectCover-image-1zW {\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear;\n  width: 100%;\n  will-change: transform;\n}\n@media (max-width: 603px) {\n.ProjectCover-hideDetailsMobile-ha9 {\n    display: none;\n}\n}\n.ProjectCover-stats-2cT .ProjectCover-icon-1Go {\n  fill: #959595;\n  margin-right: 4px;\n}\n.ProjectCover-appreciations-3Ut.ProjectCover-icon-1Go {\n  margin-left: 14px;\n  margin-top: -3px;\n}\n.ProjectCover-views-2B7.ProjectCover-icon-1Go {\n  margin-left: 15px;\n  margin-top: 0;\n}\n.ProjectCover-details-1U4 {\n  height: 53px;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin: 8px 0 0;\n}\n.ProjectCover-stats-2cT {\n  align-self: flex-start;\n  margin-top: 2px;\n  pointer-events: initial;\n}\n.ProjectCover-cover-iX9.ProjectCover-cover-iX9 {\n  max-width: initial;\n}\n.ProjectCover-cover-iX9.ProjectCover-cover-iX9::after {\n    background-color: #191919;\n    border-radius: 4px;\n    bottom: 0;\n    content: '';\n    left: 0;\n    opacity: 0.2;\n    pointer-events: none;\n    position: absolute;\n    right: 0;\n    top: 0;\n    -webkit-transition: opacity 0.15s linear;\n    transition: opacity 0.15s linear;\n    will-change: opacity;\n}\n.ProjectCover-cover-iX9.ProjectCover-cover-iX9:not(:hover)::after {\n    opacity: 0;\n}\n.ProjectCover-info-2a- {\n  line-height: 1.2;\n}\n.ProjectCover-coverPlaceholder-2xJ.ProjectCover-coverPlaceholder-2xJ {\n  max-width: initial;\n}\n.ProjectCover-infoPlaceholder-Egu {\n  width: 100%;\n}\n.ProjectCover-titlePlaceholder-2t8 {\n  height: 13px;\n  width: 61%;\n}\n.ProjectCover-ownerPlaceholder-11_ {\n  height: 11px;\n  margin-top: 5px;\n  width: 30%;\n}\n", "" ]), 
        t.locals = {
            image: "ProjectCover-image-1zW",
            coverLink: "ProjectCover-coverLink-3m3",
            details: "ProjectCover-details-1U4",
            info: "ProjectCover-info-2a-",
            icon: "ProjectCover-icon-1Go",
            controlsAndPrivacyContainer: "ProjectCover-controlsAndPrivacyContainer-6ww",
            privacyLockContainer: "ProjectCover-privacyLockContainer-1dh",
            coverWithFlags: "ProjectCover-coverWithFlags-1hm",
            searchLoadingPlaceholder: "ProjectCover-searchLoadingPlaceholder-3HC",
            fadeIn: "ProjectCover-fadeIn-1VA",
            wrapper: "ProjectCover-wrapper-2W8",
            hideDetailsMobile: "ProjectCover-hideDetailsMobile-ha9",
            stats: "ProjectCover-stats-2cT",
            appreciations: "ProjectCover-appreciations-3Ut",
            views: "ProjectCover-views-2B7",
            cover: "ProjectCover-cover-iX9",
            coverPlaceholder: "ProjectCover-coverPlaceholder-2xJ",
            infoPlaceholder: "ProjectCover-infoPlaceholder-Egu",
            titlePlaceholder: "ProjectCover-titlePlaceholder-2t8",
            ownerPlaceholder: "ProjectCover-ownerPlaceholder-11_"
        };
    },
    2136: function(e, t, n) {
        "use strict";
        var r = n(1659), o = n.n(r);
        t.default = o.a;
    },
    2137: function(e, t, n) {
        (t = e.exports = n(188)(!1)).push([ e.i, ".Projects-grid-2Uj {\n  margin-bottom: 50px;\n}\n.Projects-grid-2Uj.Projects-grid-2Uj {\n    height: auto;\n    padding: 0;\n}\n@media (max-width: 603px) {\n.Projects-grid-2Uj.Projects-grid-2Uj {\n        margin-left: auto;\n        margin-right: auto;\n}\n}\n.Projects-cover-1nk {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 404px;\n}\n", "" ]), 
        t.locals = {
            grid: "Projects-grid-2Uj",
            cover: "Projects-cover-1nk"
        };
    },
    2638: function(e, t, n) {
        "use strict";
        n.r(t);
        n(19), n(814), n(20), n(22), n(26), n(27), n(24), n(23);
        var r = n(395), o = n(383), i = n(573), a = n(494), s = n(680), l = n(483), c = n(389), u = n(58), d = n(415);
        function f(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function p(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? f(Object(n), !0).forEach(function(t) {
                    h(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function h(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        var v = {
            components: {
                AppreciationsIcon: r.a,
                ViewsIcon: o.a,
                TitleOwner: i.a,
                CoverStats: a.a,
                ProjectCoverNeue: s.a,
                Cover: l.a
            },
            props: {
                project: {
                    type: Object
                },
                cull: {
                    type: Boolean
                },
                isClickDisabled: {
                    type: Boolean,
                    default: !1
                },
                showSiblingProjectsSelector: {
                    type: Boolean,
                    default: !0
                },
                trackingSource: {
                    type: String
                }
            },
            filters: {
                commaSplit: c.b,
                abbreviate: c.a
            },
            computed: p({}, Object(u.mapState)({
                locale: function(e) {
                    return e.translation.localization.LOCALE;
                }
            }), {
                isPlaceholder: function() {
                    return null === this.project;
                }
            }),
            methods: {
                getProjectUrl: function(e) {
                    return this.trackingSource && (e = p({}, e, {
                        tracking_source: this.trackingSource
                    })), Object(d.a)(this.project.url, e);
                }
            }
        }, m = n(2134), g = n(68);
        var b = Object(g.default)(v, function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", [ e.isPlaceholder ? n("Cover", {
                ref: "coverPlaceholder",
                class: e.$style.coverPlaceholder,
                attrs: {
                    isPlaceholder: e.isPlaceholder
                }
            }) : n("ProjectCoverNeue", {
                ref: "cover",
                class: [ e.$style.cover, "qa-search-project-item" ],
                attrs: {
                    showSiblingProjectsSelector: e.showSiblingProjectsSelector,
                    project: e.project,
                    showDetailOverlay: !1,
                    cull: e.cull,
                    trackingSource: e.trackingSource
                }
            }), n("div", {
                ref: "details",
                class: e.$style.details
            }, [ e.isPlaceholder ? n("div", {
                ref: "infoPlaceholder",
                class: e.$style.infoPlaceholder
            }, [ n("div", {
                class: [ e.$style.searchLoadingPlaceholder, e.$style.titlePlaceholder ]
            }), n("div", {
                class: [ e.$style.searchLoadingPlaceholder, e.$style.ownerPlaceholder ]
            }) ]) : n("div", {
                class: e.$style.info
            }, [ n("TitleOwner", {
                ref: "titleOwner",
                attrs: {
                    url: e.getProjectUrl(),
                    title: e.project.name,
                    owners: e.project.owners,
                    hasShadowText: !1,
                    isMedium: !0,
                    theme: "dark",
                    limitHeight: !0,
                    shouldOpenProjectPopupOnClick: !0,
                    trackingSource: e.trackingSource
                }
            }) ], 1), e.isPlaceholder ? e._e() : n("div", {
                ref: "stats",
                class: e.$style.stats
            }, [ n("CoverStats", [ n("template", {
                slot: "content"
            }, [ n("AppreciationsIcon", {
                class: [ e.$style.icon, e.$style.appreciations ]
            }), n("span", {
                attrs: {
                    "data-ut": "appreciation-count",
                    title: e._f("commaSplit")(e.project.stats.appreciations, e.locale)
                }
            }, [ e._v(e._s(e._f("abbreviate")(e.project.stats.appreciations, e.locale))) ]), n("ViewsIcon", {
                class: [ e.$style.icon, e.$style.views ]
            }), n("span", {
                attrs: {
                    "data-ut": "views-count",
                    title: e._f("commaSplit")(e.project.stats.views, e.locale)
                }
            }, [ e._v(e._s(e._f("abbreviate")(e.project.stats.views, e.locale))) ]) ], 1) ], 2) ], 1) ]) ], 1);
        }, [], !1, function(e) {
            this.$style = m.default.locals || m.default;
        }, null, null).exports, w = n(1008), y = n(528), x = n(25);
        function C(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function j(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        var P = Object(u.createNamespacedHelpers)("search").mapState, k = {
            components: {
                ProjectCover: b,
                ContentGrid: w.b
            },
            props: {
                isProjectPopupOpen: {
                    type: Boolean
                }
            },
            computed: function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? C(Object(n), !0).forEach(function(t) {
                        j(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : C(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }({}, Object(u.mapState)([ "gates" ]), {}, P({
                isFetching: function(e) {
                    return e.isFetching.projects;
                },
                projects: function(e) {
                    return e.content.projects;
                },
                isLoadingMore: function(e) {
                    return e.isLoadingMore;
                },
                hasMore: function(e) {
                    return e.hasMore;
                },
                filters: function(e) {
                    return e.filters;
                },
                itemsPerPage: function(e) {
                    return e.itemsPerPage;
                }
            }), {
                trackingSource: function() {
                    return Object(y.e)(this.filters, "search_projects");
                },
                projectItems: function() {
                    var e = Array(x.c).fill(null);
                    return this.isFetching ? e : this.projects;
                },
                gridType: function() {
                    return Boolean(this.gates.recycle_grid) ? w.a.recycleGrid : Boolean(this.gates.observer_grid) ? w.a.observerGrid : "";
                }
            }),
            methods: {
                checkIfShouldLoadMore: function() {
                    this.isLoadingMore || this.isFetching || !this.hasMore || this.$emit("appendSearchResults", {
                        contentType: x.a.PROJECTS,
                        analytics: {
                            num_proj_loaded: this.projectItems.length
                        }
                    });
                }
            }
        }, O = n(2136);
        var _ = Object(g.default)(k, function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {
                class: e.$style.root
            }, [ n("ContentGrid", {
                ref: "contentGrid",
                class: e.$style.grid,
                attrs: {
                    items: e.projectItems,
                    gridType: e.gridType,
                    itemsPerPage: e.itemsPerPage,
                    shouldFreeze: e.isProjectPopupOpen
                },
                on: {
                    reachedEnd: e.checkIfShouldLoadMore
                },
                scopedSlots: e._u([ {
                    key: "item",
                    fn: function(t) {
                        return [ n("ProjectCover", {
                            ref: "projectItem",
                            class: e.$style.cover,
                            attrs: {
                                project: t.item,
                                cull: t.cull,
                                trackingSource: e.trackingSource
                            }
                        }) ];
                    }
                } ])
            }) ], 1);
        }, [], !1, function(e) {
            this.$style = O.default.locals || O.default;
        }, null, null);
        t.default = _.exports;
    },
    347: function(e, t, n) {
        "use strict";
        var r = [ "base", "light", "inverted", "primary", "secondary", "ghost", "success", "danger", "transparent" ], o = [ "small", "normal", "large" ], i = n(17).default.extend({
            name: "Btn",
            props: {
                type: {
                    type: String,
                    default: "base",
                    validator: function(e) {
                        return r.includes(e);
                    }
                },
                typeAttr: {
                    type: String,
                    default: "button"
                },
                size: {
                    type: String,
                    default: "normal",
                    validator: function(e) {
                        return o.includes(e);
                    }
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                href: String,
                leadingIcon: String,
                trailingIcon: String,
                customClass: String,
                customLabelWrapperClass: String,
                leadingIconStyle: {
                    type: String
                },
                target: {
                    type: String,
                    default: "_self"
                }
            },
            computed: {
                componentIs: function() {
                    return this.href ? "a" : "button";
                }
            }
        }), a = n(367), s = n(68);
        var l = Object(s.default)(i, function() {
            var e, t = this, n = t.$createElement, r = t._self._c || n;
            return r(t.componentIs, {
                ref: "button",
                tag: "component",
                class: [ "vue-btn", t.$style.button, t.$style[t.type], t.$style[t.size], (e = {}, 
                e[t.$style.disabled] = t.disabled, e), t.customClass ],
                attrs: {
                    disabled: t.disabled,
                    href: t.href,
                    type: t.typeAttr,
                    target: t.target
                },
                on: {
                    click: function(e) {
                        return t.$emit("click", e);
                    }
                }
            }, [ r("div", {
                class: [ t.$style.labelWrapper, t.customLabelWrapperClass ]
            }, [ t.$slots.leadingIcon ? r("div", {
                ref: "leadingIcon",
                class: [ t.$style.icon, t.$style.leading, t.leadingIconStyle ]
            }, [ t._t("leadingIcon") ], 2) : t._e(), r("div", {
                class: t.$style.label
            }, [ t._t("default") ], 2), t.$slots.trailingIcon ? r("div", {
                class: [ t.$style.icon, t.$style.trailing ]
            }, [ t._t("trailingIcon") ], 2) : t._e() ]) ]);
        }, [], !1, function(e) {
            this.$style = a.default.locals || a.default;
        }, null, null);
        t.a = l.exports;
    },
    349: function(e, t, n) {
        var r = n(368);
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n(189).default)("281875b0", r, !0, {});
    },
    354: function(e, t, n) {
        e.exports = n(2)(56);
    },
    362: function(e, t, n) {
        "use strict";
        n.d(t, "i", function() {
            return i;
        }), n.d(t, "g", function() {
            return a;
        }), n.d(t, "f", function() {
            return s;
        }), n.d(t, "d", function() {
            return l;
        }), n.d(t, "a", function() {
            return c;
        }), n.d(t, "e", function() {
            return u;
        }), n.d(t, "c", function() {
            return f;
        }), n.d(t, "b", function() {
            return p;
        }), n.d(t, "h", function() {
            return h;
        });
        var r = n(0), o = /^size_/;
        function i(e) {
            var t = e ? e.split(".").pop() : null;
            return !!t && "gif" === t.toLowerCase();
        }
        function a(e) {
            var t = Object(r.__assign)({}, e);
            return Object.entries(t).forEach(function(e) {
                var n = e[0], r = e[1];
                o.test(n) && (null === r || void 0 === r ? void 0 : r.url) && (t[n.replace(o, "")] = r.url);
            }), t.max_808 && (t[808] = t.max_808), Object.keys(t).filter(function(e) {
                return -1 === e.indexOf("_opt");
            }).filter(function(e) {
                return !isNaN(Number(e)) && t[e].length > 1;
            }).map(function(e) {
                return t[e] + " " + e + "w";
            }).join(", ");
        }
        function s(e) {
            var t = Object(r.__assign)({}, e);
            return Object.entries(t).forEach(function(e) {
                var n = e[0], r = e[1];
                o.test(n) && (null === r || void 0 === r ? void 0 : r.url) && (t[n.replace(o, "")] = r.url);
            }), t.max_808_opt && (t["808_opt"] = t.max_808_opt), Object.keys(t).filter(function(e) {
                return -1 !== e.indexOf("_opt");
            }).filter(function(e) {
                return !isNaN(Number(e.split("_opt")[0])) && t[e].length > 1;
            }).map(function(e) {
                return t[e] + " " + e.split("_opt")[0] + "w";
            }).join(", ");
        }
        function l(e) {
            var t = e.images, n = e.upperLimit, i = Object(r.__assign)({}, t);
            return Object.entries(i).forEach(function(e) {
                var t = e[0], n = e[1];
                o.test(t) && n && "string" != typeof n && (i[t.replace(o, "")] = n.url);
            }), Object.keys(i).filter(function(e) {
                return "string" == typeof i[e];
            }).map(function(e) {
                var t = "disp" === e || "original" === e ? 808 : Number(e);
                if (!(n && t > n || isNaN(Number(t)))) return i[e] + " " + t + "w";
            }).filter(function(e) {
                return !!e;
            }).join(", ");
        }
        function c(e) {
            var t = e.images, n = e.upperLimit;
            return Object.keys(t).filter(function(e) {
                return -1 !== e.indexOf("_still");
            }).map(function(e) {
                var r = -1 !== e.indexOf("max_") ? e.replace("max_", "").replace("_still", "") : e.split("_")[0];
                if (!(n && Number(r) > n)) return isNaN(Number(r)) ? void 0 : t[e] + " " + r + "w";
            }).filter(function(e) {
                return !!e;
            }).join(", ");
        }
        function u(e) {
            var t = e.images, n = e.upperLimit;
            return Object.keys(t).filter(function(e) {
                return -1 !== e.indexOf("max_") && -1 === e.indexOf("_still");
            }).map(function(e) {
                var r = e.replace("max_", "");
                if (!(n && Number(r) > n)) return t[e] + " " + r + "w";
            }).filter(function(e) {
                return !!e;
            }).join(", ");
        }
        function d(e, t) {
            return e.map(function(e) {
                if (!t[e]) return null;
                var n = t[e].width;
                return t[e].url + " " + n + "w";
            }).filter(function(e) {
                return null !== e;
            }).join(", ");
        }
        function f(e) {
            return d([ "disp", "max_1200", "1400_opt_1", "fs", "2800_opt_1" ], e);
        }
        function p(e) {
            return d([ "max_158", "max_316", "max_632" ], e);
        }
        function h(e) {
            return d([ "158_still", "316_still", "632_still" ], e);
        }
    },
    363: function(e, t, n) {
        e.exports = n(2)(345);
    },
    364: function(e, t, n) {
        var r = n(426);
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n(189).default)("1fd5893e", r, !0, {});
    },
    366: function(e, t, n) {
        var r = n(435);
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n(189).default)("a416516a", r, !0, {});
    },
    367: function(e, t, n) {
        "use strict";
        var r = n(349), o = n.n(r);
        t.default = o.a;
    },
    368: function(e, t, n) {
        (t = e.exports = n(188)(!1)).push([ e.i, ".Btn-button-BGn {\n  border: 1px solid transparent;\n  border-radius: 100px;\n  cursor: pointer;\n  display: inline-block;\n  font-weight: 600;\n  line-height: 1;\n  -webkit-transition-duration: 300ms;\n          transition-duration: 300ms;\n  -webkit-transition-property: color, background;\n  transition-property: color, background;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.Btn-button-BGn:hover {\n    text-decoration: none;\n}\n.Btn-button-BGn.focus-visible {\n    outline: 1px solid #0057ff;\n}\n.Btn-base-M-O {\n  background: #fff;\n  border-color: #e8e8e8;\n  color: #191919;\n}\n.Btn-base-M-O .Btn-icon-flr .rf-icon {\n    fill: #191919;\n}\n.Btn-base-M-O .Btn-icon-flr.Btn-leading-29d {\n    float: left;\n}\n.Btn-base-M-O .Btn-icon-flr.Btn-trailing-3Hx {\n    float: right;\n}\n.Btn-base-M-O:hover {\n    background: #f1f1f1;\n}\n.Btn-base-M-O:active {\n    background: #e4e4e4;\n}\n.Btn-base-M-O.Btn-disabled-2iY {\n    background: #e8e8e8;\n    color: #fff;\n    cursor: default;\n    fill: #fff;\n    pointer-events: none;\n    -webkit-transition: none;\n    transition: none;\n}\n.Btn-light-PPA {\n  background: #fff;\n  border-color: transparent;\n  color: #0057ff;\n}\n.Btn-light-PPA .Btn-icon-flr .rf-icon {\n    fill: #0057ff;\n}\n.Btn-light-PPA .Btn-icon-flr.Btn-leading-29d {\n    float: left;\n}\n.Btn-light-PPA .Btn-icon-flr.Btn-trailing-3Hx {\n    float: right;\n}\n.Btn-light-PPA:hover {\n    background: #f1f1f1;\n}\n.Btn-light-PPA:active {\n    background: #e4e4e4;\n}\n.Btn-light-PPA.Btn-disabled-2iY {\n    background: #e8e8e8;\n    color: #fff;\n    cursor: default;\n    fill: #fff;\n    pointer-events: none;\n    -webkit-transition: none;\n    transition: none;\n}\n.Btn-inverted-1aU {\n  background: rgba(25, 25, 25, 0.2);\n  border-color: transparent;\n  color: #fff;\n}\n.Btn-inverted-1aU .Btn-icon-flr .rf-icon {\n    fill: #fff;\n}\n.Btn-inverted-1aU .Btn-icon-flr.Btn-leading-29d {\n    float: left;\n}\n.Btn-inverted-1aU .Btn-icon-flr.Btn-trailing-3Hx {\n    float: right;\n}\n.Btn-inverted-1aU:hover {\n    background: rgba(25, 25, 25, 0.5);\n}\n.Btn-inverted-1aU:active {\n    background: rgba(25, 25, 25, 0.5);\n}\n.Btn-inverted-1aU.Btn-disabled-2iY {\n    background: #e8e8e8;\n    color: #fff;\n    cursor: default;\n    fill: #fff;\n    pointer-events: none;\n    -webkit-transition: none;\n    transition: none;\n}\n.Btn-primary-1H3 {\n  background: #0057ff;\n  border-color: transparent;\n  color: #fff;\n}\n.Btn-primary-1H3 .Btn-icon-flr .rf-icon {\n    fill: #fff;\n}\n.Btn-primary-1H3 .Btn-icon-flr.Btn-leading-29d {\n    float: left;\n}\n.Btn-primary-1H3 .Btn-icon-flr.Btn-trailing-3Hx {\n    float: right;\n}\n.Btn-primary-1H3:hover {\n    background: #003ecb;\n}\n.Btn-primary-1H3:active {\n    background: #002f9a;\n}\n.Btn-primary-1H3.Btn-disabled-2iY {\n    background: #e8e8e8;\n    color: #fff;\n    cursor: default;\n    fill: #fff;\n    pointer-events: none;\n    -webkit-transition: none;\n    transition: none;\n}\n.Btn-secondary-sgc {\n  background: #fff;\n  border-color: #e8e8e8;\n  color: #191919;\n}\n.Btn-secondary-sgc .Btn-icon-flr .rf-icon {\n    fill: #191919;\n}\n.Btn-secondary-sgc .Btn-icon-flr.Btn-leading-29d {\n    float: left;\n}\n.Btn-secondary-sgc .Btn-icon-flr.Btn-trailing-3Hx {\n    float: right;\n}\n.Btn-secondary-sgc:hover {\n    background: #f1f1f1;\n}\n.Btn-secondary-sgc:active {\n    background: #e4e4e4;\n}\n.Btn-secondary-sgc.Btn-disabled-2iY {\n    background: #e8e8e8;\n    color: #fff;\n    cursor: default;\n    fill: #fff;\n    pointer-events: none;\n    -webkit-transition: none;\n    transition: none;\n}\n.Btn-ghost-2Wn {\n  background: #fff;\n  border-color: transparent;\n  color: #696969;\n}\n.Btn-ghost-2Wn .Btn-icon-flr .rf-icon {\n    fill: #696969;\n}\n.Btn-ghost-2Wn .Btn-icon-flr.Btn-leading-29d {\n    float: left;\n}\n.Btn-ghost-2Wn .Btn-icon-flr.Btn-trailing-3Hx {\n    float: right;\n}\n.Btn-ghost-2Wn:hover {\n    background: #fff;\n}\n.Btn-ghost-2Wn:active {\n    background: #fff;\n}\n.Btn-ghost-2Wn.Btn-disabled-2iY {\n    background: #e8e8e8;\n    color: #fff;\n    cursor: default;\n    fill: #fff;\n    pointer-events: none;\n    -webkit-transition: none;\n    transition: none;\n}\n.Btn-ghost-2Wn:hover .Btn-label-1Zf {\n    border-bottom: 1px solid #9c9c9c;\n}\n.Btn-ghost-2Wn.Btn-disabled-2iY {\n    background: transparent;\n    color: #e8e8e8;\n}\n.Btn-transparent-1nm {\n  background: transparent;\n  border-color: transparent;\n  color: #fff;\n}\n.Btn-transparent-1nm .Btn-icon-flr .rf-icon {\n    fill: #fff;\n}\n.Btn-transparent-1nm .Btn-icon-flr.Btn-leading-29d {\n    float: left;\n}\n.Btn-transparent-1nm .Btn-icon-flr.Btn-trailing-3Hx {\n    float: right;\n}\n.Btn-transparent-1nm:hover {\n    background: transparent;\n}\n.Btn-transparent-1nm:active {\n    background: transparent;\n}\n.Btn-transparent-1nm.Btn-disabled-2iY {\n    background: #e8e8e8;\n    color: #fff;\n    cursor: default;\n    fill: #fff;\n    pointer-events: none;\n    -webkit-transition: none;\n    transition: none;\n}\n.Btn-transparent-1nm:hover .Btn-label-1Zf {\n    text-decoration: underline;\n}\n.Btn-transparent-1nm.Btn-disabled-2iY {\n    background: transparent;\n    opacity: 0.5;\n}\n.Btn-success-3QX {\n  background: #058900;\n  border-color: transparent;\n  color: #fff;\n}\n.Btn-success-3QX .Btn-icon-flr .rf-icon {\n    fill: #fff;\n}\n.Btn-success-3QX .Btn-icon-flr.Btn-leading-29d {\n    float: left;\n}\n.Btn-success-3QX .Btn-icon-flr.Btn-trailing-3Hx {\n    float: right;\n}\n.Btn-success-3QX:hover {\n    background: #026700;\n}\n.Btn-success-3QX:active {\n    background: #024400;\n}\n.Btn-success-3QX.Btn-disabled-2iY {\n    background: #e8e8e8;\n    color: #fff;\n    cursor: default;\n    fill: #fff;\n    pointer-events: none;\n    -webkit-transition: none;\n    transition: none;\n}\n.Btn-danger-29D {\n  background: #d00;\n  border-color: transparent;\n  color: #fff;\n}\n.Btn-danger-29D .Btn-icon-flr .rf-icon {\n    fill: #fff;\n}\n.Btn-danger-29D .Btn-icon-flr.Btn-leading-29d {\n    float: left;\n}\n.Btn-danger-29D .Btn-icon-flr.Btn-trailing-3Hx {\n    float: right;\n}\n.Btn-danger-29D:hover {\n    background: #aa0000;\n}\n.Btn-danger-29D:active {\n    background: #910000;\n}\n.Btn-danger-29D.Btn-disabled-2iY {\n    background: #e8e8e8;\n    color: #fff;\n    cursor: default;\n    fill: #fff;\n    pointer-events: none;\n    -webkit-transition: none;\n    transition: none;\n}\n.Btn-label-1Zf {\n  border: 1px solid transparent;\n  display: inline-block;\n  max-width: 100%;\n}\n.Btn-labelWrapper-1jS {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.Btn-small-2_o .Btn-labelWrapper-1jS {\n  padding: 5px 12px 6px;\n}\n.Btn-small-2_o .Btn-label-1Zf {\n  font-size: 12px;\n}\n.Btn-small-2_o .Btn-icon-flr .rf-icon {\n  height: 14px;\n}\n.Btn-small-2_o .Btn-icon-flr.Btn-leading-29d {\n  margin-right: 4px;\n}\n.Btn-small-2_o .Btn-icon-flr.Btn-trailing-3Hx {\n  margin-left: 4px;\n}\n.Btn-normal-hI4 .Btn-labelWrapper-1jS {\n  padding: 8px 18px;\n}\n.Btn-normal-hI4 .Btn-label-1Zf {\n  font-size: 14px;\n}\n.Btn-normal-hI4 .Btn-icon-flr .rf-icon {\n  height: 18px;\n  margin-top: -2px;\n}\n.Btn-normal-hI4 .Btn-icon-flr.Btn-leading-29d {\n  margin-right: 7px;\n}\n.Btn-normal-hI4 .Btn-icon-flr.Btn-trailing-3Hx {\n  margin-left: 7px;\n}\n.Btn-large-_8E .Btn-labelWrapper-1jS {\n  padding: 10px 22px 12px;\n}\n.Btn-large-_8E .Btn-label-1Zf {\n  font-size: 18px;\n}\n.Btn-large-_8E .Btn-icon-flr .rf-icon {\n  height: 20px;\n}\n.Btn-large-_8E .Btn-icon-flr.Btn-leading-29d {\n  margin-right: 10px;\n}\n.Btn-large-_8E .Btn-icon-flr.Btn-trailing-3Hx {\n  margin-left: 10px;\n}\n", "" ]), 
        t.locals = {
            button: "Btn-button-BGn",
            base: "Btn-base-M-O",
            icon: "Btn-icon-flr",
            leading: "Btn-leading-29d",
            trailing: "Btn-trailing-3Hx",
            disabled: "Btn-disabled-2iY",
            light: "Btn-light-PPA",
            inverted: "Btn-inverted-1aU",
            primary: "Btn-primary-1H3",
            secondary: "Btn-secondary-sgc",
            ghost: "Btn-ghost-2Wn",
            label: "Btn-label-1Zf",
            transparent: "Btn-transparent-1nm",
            success: "Btn-success-3QX",
            danger: "Btn-danger-29D",
            labelWrapper: "Btn-labelWrapper-1jS",
            small: "Btn-small-2_o",
            normal: "Btn-normal-hI4",
            large: "Btn-large-_8E"
        };
    },
    369: function(e, t, n) {
        e.exports = n(2)(24);
    },
    382: function(e, t, n) {
        "use strict";
        var r = {
            name: "DropdownItem"
        }, o = n(434), i = n(68);
        var a = Object(i.default)(r, function() {
            var e = this.$createElement, t = this._self._c || e;
            return t("li", {
                class: this.$style.root
            }, [ t("span", {
                class: this.$style.item
            }, [ this._t("default") ], 2) ]);
        }, [], !1, function(e) {
            this.$style = o.default.locals || o.default;
        }, null, null);
        t.a = a.exports;
    },
    383: function(e, t, n) {
        "use strict";
        var r = n(68), o = Object(r.default)({}, function() {
            var e = this.$createElement, t = this._self._c || e;
            return t("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16"
                }
            }, [ t("path", {
                attrs: {
                    d: "M8.5 3.5c-5 0-8 5-8 5s3 5 8 5 8-5 8-5-3-5-8-5zm0 7c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .894 2 2 0 1.104-.896 2-2 2z"
                }
            }) ]);
        }, [], !1, null, null, null);
        t.a = o.exports;
    },
    386: function(e, t, n) {
        var r = n(515);
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n(189).default)("74503b64", r, !0, {});
    },
    387: function(e, t, n) {
        var r = n(519);
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n(189).default)("b2e070a4", r, !0, {});
    },
    388: function(e, t, n) {
        var r = n(521);
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n(189).default)("b106e13a", r, !0, {});
    },
    389: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return s;
        }), n.d(t, "a", function() {
            return l;
        });
        var r = n(4), o = (n(107), n(363), n(551)), i = n.n(o), a = (n(574), {
            en_US: "en",
            cs_CZ: "cs",
            da_DK: "da-dk",
            de_DE: "de",
            es_ES: "es",
            fr_FR: "fr",
            it_IT: "it",
            nl_NL: "nl-nl",
            nb_NO: "no",
            pl_PL: "pl",
            pt_BR: "pt-br",
            ru_RU: "ru",
            fi_FI: "fi",
            tr_TR: "tr",
            ja_JP: "ja",
            zh_CN: "chs",
            zh_TW: "chs"
        });
        function s(e, t) {
            return void 0 === t && (t = "en-US"), r.default.formatNumber(e, t);
        }
        function l(e, t) {
            return void 0 === t && (t = "en-US"), function(e, t) {
                return e < 1e3 ? e.toLocaleString() : (i.a.locale(a[t] || "en"), i()(e).format("0.0a").replace(".0", ""));
            }(e, t);
        }
    },
    394: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "a", function() {
            return o;
        }), n.d(t, "e", function() {
            return a;
        }), n.d(t, "d", function() {
            return s;
        }), n.d(t, "c", function() {
            return l;
        });
        n(354), n(190);
        var r = "404", o = "202", i = "115";
        function a(e) {
            return e[r];
        }
        function s(e) {
            return e[o];
        }
        function l(e) {
            if (e.covers) {
                e.cover_sizes = i + "px", e.cover_src = e.covers[i] || e.covers.original;
                var t = [];
                for (var n in e.covers) isNaN(Number(n)) || t.push(e.covers[n] + " " + n + "w");
                e.cover_srcset = t.join(",");
            }
        }
    },
    395: function(e, t, n) {
        "use strict";
        var r = n(425), o = n(68);
        var i = Object(o.default)({}, function() {
            var e = this.$createElement, t = this._self._c || e;
            return t("svg", {
                class: this.$style.icon,
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0.5 0.5 16 16"
                }
            }, [ t("path", {
                attrs: {
                    fill: "none",
                    d: "M.5.5h16v16H.5z"
                }
            }), t("path", {
                ref: "path",
                attrs: {
                    d: "M.5 7.5h3v8h-3zM7.207 15.207c.193.19.425.29.677.293H12c.256 0 .512-.098.707-.293l2.5-2.5c.19-.19.288-.457.293-.707V8.5c0-.553-.445-1-1-1h-5L11 5s.5-.792.5-1.5v-1c0-.553-.447-1-1-1l-1 2-4 4v6l1.707 1.707z"
                }
            }) ]);
        }, [], !1, function(e) {
            this.$style = r.default.locals || r.default;
        }, null, null);
        t.a = i.exports;
    },
    400: function(e, t, n) {
        var r = n(550);
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n(189).default)("9d46823a", r, !0, {});
    },
    405: function(e, t, n) {
        e.exports = n(2)(28);
    },
    407: function(e, t, n) {
        "use strict";
        var r = n(68), o = Object(r.default)({}, function() {
            var e = this.$createElement, t = this._self._c || e;
            return t("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 125.8 291.6"
                }
            }, [ t("path", {
                attrs: {
                    d: "M88.6 145.8l-70-81.1v162.2z"
                }
            }) ]);
        }, [], !1, null, null, null);
        t.a = o.exports;
    },
    414: function(e, t, n) {
        var r = n(580);
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n(189).default)("14e53ada", r, !0, {});
    },
    415: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r;
        });
        n(22), n(42), n(24), n(9), n(84), n(44), n(23), n(45), n(492);
        function r(e, t) {
            if (!t) return e;
            try {
                var n = new URL(e);
                return Object.keys(t).forEach(function(e) {
                    return n.searchParams.set(e, t[e]);
                }), n.toString();
            } catch (t) {
                return e;
            }
        }
    },
    419: function(e, t, n) {
        e.exports = n(2)(40);
    },
    425: function(e, t, n) {
        "use strict";
        var r = n(364), o = n.n(r);
        t.default = o.a;
    },
    426: function(e, t, n) {
        (t = e.exports = n(188)(!1)).push([ e.i, ".Appreciations-icon-2NG {\n  fill: #fff;\n}\n", "" ]), 
        t.locals = {
            icon: "Appreciations-icon-2NG"
        };
    },
    427: function(e, t, n) {
        var r = n(601);
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n(189).default)("43c351fa", r, !0, {});
    },
    428: function(e, t, n) {
        var r = n(603);
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n(189).default)("6ad330b9", r, !0, {});
    },
    434: function(e, t, n) {
        "use strict";
        var r = n(366), o = n.n(r);
        t.default = o.a;
    },
    435: function(e, t, n) {
        (t = e.exports = n(188)(!1)).push([ e.i, ".DropdownItem-item-soQ {\n  cursor: pointer;\n}\n.DropdownItem-root-1Gd {\n  font-size: 13px;\n  font-weight: bold;\n  line-height: 1.2;\n  -webkit-transition: background-color 0.15s linear;\n  transition: background-color 0.15s linear;\n}\n.DropdownItem-root-1Gd a,\n  .DropdownItem-root-1Gd span:not(.DropdownItem-item-soQ) {\n    color: inherit;\n    display: block;\n    padding: 8px 20px 8px 13px;\n    text-decoration: inherit;\n    -webkit-transition: color 0.15s linear;\n    transition: color 0.15s linear;\n}\n.DropdownItem-root-1Gd:hover {\n    background-color: #0057ff;\n    color: #fff;\n}\n", "" ]), 
        t.locals = {
            item: "DropdownItem-item-soQ",
            root: "DropdownItem-root-1Gd"
        };
    },
    445: function(e, t, n) {
        var r = n(697);
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n(189).default)("7e82cdd0", r, !0, {});
    },
    446: function(e, t, n) {
        var r = n(699);
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n(189).default)("474f9cda", r, !0, {});
    },
    464: function(e, t, n) {
        "use strict";
        n(19), n(20), n(22), n(106), n(26), n(27), n(24), n(23);
        var r = n(348), o = {
            name: "OwnerRowNeue",
            props: {
                owner: {
                    type: Object,
                    required: !0
                }
            }
        }, i = n(514), a = n(68);
        var s = Object(a.default)(o, function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {
                class: e.$style.row
            }, [ n("a", {
                ref: "link",
                class: [ e.$style.link, "js-mini-profile" ],
                attrs: {
                    href: e.owner.url,
                    "data-id": e.owner.id
                },
                on: {
                    focus: function(t) {
                        return e.$emit("rowOnFocus");
                    },
                    blur: function(t) {
                        return e.$emit("rowOnBlur");
                    }
                }
            }, [ n("span", {
                class: e.$style.imageWrap
            }, [ n("img", {
                class: e.$style.image,
                attrs: {
                    src: e.owner.images[50]
                }
            }) ]), n("span", {
                class: e.$style.name
            }, [ e._v(e._s(e.owner.display_name)) ]) ]) ]);
        }, [], !1, function(e) {
            this.$style = i.default.locals || i.default;
        }, null, null).exports, l = n(415);
        function c(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function u(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        var d = {
            name: "OwnersNeue",
            props: {
                owners: {
                    type: Array
                },
                ownerTextClass: {
                    type: Array
                },
                trackingSource: {
                    type: String
                },
                theme: {
                    type: String,
                    validator: function(e) {
                        return [ "light", "dark" ].includes(e);
                    },
                    default: "light"
                },
                showAvatar: {
                    type: Boolean
                },
                shouldRemoveMultiOwnerTooltip: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    isMultipleOwnerInFocus: !1,
                    shouldTooltipOpen: !1
                };
            },
            components: {
                Tooltip: r.a,
                OwnerRowNeue: s
            },
            methods: {
                getUrl: function(e, t) {
                    return this.trackingSource && (t = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? c(Object(n), !0).forEach(function(t) {
                                u(e, t, n[t]);
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                        }
                        return e;
                    }({}, t, {
                        tracking_source: this.trackingSource
                    })), Object(l.a)(e, t);
                }
            }
        }, f = n(518);
        var p = Object(a.default)(d, function() {
            var e, t = this, n = t.$createElement, r = t._self._c || n;
            return t.owners.length ? r("div", {
                class: [ t.$style.root, t.$style[t.theme], (e = {}, e[t.$style.overflowText] = 1 === t.owners.length, 
                e) ]
            }, [ t.owners.length > 1 && !t.shouldRemoveMultiOwnerTooltip ? r("div", {
                class: t.$style.tooltipContainer,
                attrs: {
                    "data-ut": "multi-owner-tooltip"
                }
            }, [ r("Tooltip", {
                ref: "ownersList",
                attrs: {
                    hasTextTrigger: !0,
                    position: "bottom",
                    alignment: "right",
                    alignmentOffset: -15,
                    canTruncateTrigger: !0,
                    isOpen: t.shouldTooltipOpen
                },
                nativeOn: {
                    keyup: function(e) {
                        if (!e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter")) return null;
                        t.shouldTooltipOpen = !t.shouldTooltipOpen;
                    },
                    focus: function(e) {
                        return t.$emit("tooltipOnFocus");
                    },
                    blur: function(e) {
                        return t.$emit("tooltipOnBlur");
                    }
                }
            }, [ r("div", {
                class: [ t.$style.arrow, t.$style.overflowText, t.$style.multipleOwnersText, t.ownerTextClass ]
            }, [ t._v(" " + t._s(t.$translate("multiple_owners", "Multiple Owners")) + " ") ]), r("div", {
                attrs: {
                    slot: "tooltipContent"
                },
                slot: "tooltipContent"
            }, [ r("div", {
                class: t.$style.list
            }, t._l(t.owners, function(e, n) {
                return r("OwnerRowNeue", {
                    key: "owner-" + n,
                    ref: "ownerRow",
                    refInFor: !0,
                    attrs: {
                        owner: e
                    },
                    on: {
                        rowOnFocus: function(e) {
                            return t.$emit("ownerOnFocus");
                        },
                        rowOnBlur: function(e) {
                            return t.$emit("ownerOnBlur");
                        }
                    }
                });
            }), 1) ]) ]) ], 1) : t._e(), t.owners.length > 1 && t.shouldRemoveMultiOwnerTooltip ? r("div", {
                class: t.$style.tooltipContainer
            }, [ r("div", {
                class: [ t.$style.overflowText, t.ownerTextClass ]
            }, [ t._v(" " + t._s(t.$translate("multiple_owners", "Multiple Owners")) + " ") ]) ]) : t._e(), t.owners.length <= 1 ? r("span", {
                class: [ "js-mini-profile", t.$style.ownerAndAvatar ],
                attrs: {
                    "data-id": t.owners[0].id
                }
            }, [ 1 === t.owners.length && t.showAvatar ? r("span", {
                class: t.$style.ownerImage
            }, [ r("img", {
                ref: "avatar",
                class: t.$style.ownerImageEl,
                attrs: {
                    src: t.owners[0].images[50],
                    alt: t.owners[0].display_name
                }
            }) ]) : t._e(), r("a", {
                ref: "singleOwner",
                class: [ t.$style.owner, t.ownerTextClass ],
                attrs: {
                    href: t.getUrl(t.owners[0].url)
                },
                on: {
                    focus: function(e) {
                        return t.$emit("ownerOnFocus");
                    },
                    blur: function(e) {
                        return t.$emit("ownerOnBlur");
                    }
                }
            }, [ t._v(t._s(t.owners[0].display_name)) ]) ]) : t._e() ]) : t._e();
        }, [], !1, function(e) {
            this.$style = f.default.locals || f.default;
        }, null, null);
        t.a = p.exports;
    },
    476: function(e, t, n) {
        var r = n(741);
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n(189).default)("1c3f44ee", r, !0, {});
    },
    483: function(e, t, n) {
        "use strict";
        var r = n(17).default.extend({
            props: {
                wrapperClasses: {
                    type: Array
                },
                isInFocus: {
                    type: Boolean
                },
                isPlaceholder: {
                    type: Boolean,
                    default: !1
                },
                hasNoConstraints: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    didTransitionEnd: !1
                };
            },
            watch: {
                isInFocus: function(e) {
                    e ? this.$el.focus() : this.$el.blur();
                }
            },
            mounted: function() {
                var e = this.$refs.overlay;
                e && (e.addEventListener("transitionend", this.toggleTransitionState), e.addEventListener("transitionstart", this.toggleTransitionState));
            },
            beforeDestroy: function() {
                var e = this.$refs.overlay;
                e && (e.removeEventListener("transitionend", this.toggleTransitionState), e.removeEventListener("transitionstart", this.toggleTransitionState));
            },
            methods: {
                toggleTransitionState: function(e) {
                    this.didTransitionEnd = "transitionend" === e.type;
                }
            }
        }), o = n(579), i = n(68);
        var a = Object(i.default)(r, function() {
            var e, t, n, r, o = this, i = o.$createElement, a = o._self._c || i;
            return a("div", {
                ref: "root",
                class: [ o.$style.cover, (e = {}, e[o.$style.focused] = o.isInFocus, e) ]
            }, [ a("div", {
                class: [ o.$style.wrapper, o.wrapperClasses, (t = {}, t[o.$style.noConstraints] = o.hasNoConstraints, 
                t) ]
            }, [ a("div", {
                ref: "content",
                class: [ o.$style.content, (n = {}, n[o.$style.searchLoadingPlaceholder + " qa-cover-placeholder"] = o.isPlaceholder, 
                n) ]
            }, [ o._t("content", null, {
                hoverClass: o.$style.showOnHover
            }) ], 2), o.$slots.hoverOverlay || o.$scopedSlots.hoverOverlay ? a("div", {
                ref: "overlay",
                class: [ o.$style.overlay, o.$style.showOnHover, (r = {}, r[o.$style.transitionDone] = o.didTransitionEnd, 
                r), "qa-cover-overlay" ]
            }, [ o._t("hoverOverlay") ], 2) : o._e(), o.$slots.alwaysVisibleOverlay || o.$scopedSlots.alwaysVisibleOverlay ? a("div", {
                class: o.$style.overlay
            }, [ o._t("alwaysVisibleOverlay", null, {
                hoverClass: o.$style.showOnHover
            }) ], 2) : o._e() ]) ]);
        }, [], !1, function(e) {
            this.$style = o.default.locals || o.default;
        }, null, null);
        t.a = a.exports;
    },
    494: function(e, t, n) {
        "use strict";
        var r = n(520), o = n(68);
        var i = Object(o.default)({}, function() {
            var e = this.$createElement;
            return (this._self._c || e)("div", {
                class: this.$style.stats
            }, [ this._t("content") ], 2);
        }, [], !1, function(e) {
            this.$style = r.default.locals || r.default;
        }, null, null);
        t.a = i.exports;
    },
    495: function(e, t, n) {
        e.exports = n(2)(78);
    },
    508: function(e, t, n) {
        "use strict";
        var r = {
            props: {
                url: {
                    type: String
                },
                isSmall: {
                    type: Boolean
                },
                isMedium: {
                    type: Boolean
                },
                shouldOpenProjectPopupOnClick: {
                    type: Boolean
                },
                isFeatured: {
                    type: Boolean
                },
                hasShadow: {
                    type: Boolean,
                    default: !0
                }
            }
        }, o = n(600), i = n(68);
        var a = Object(i.default)(r, function() {
            var e, t, n, r, o, i, a = this, s = a.$createElement;
            return (a._self._c || s)("a", {
                ref: "link",
                class: [ a.$style.title, "qa-title-owner", "e2e-Title-owner", (e = {}, e[a.$style.smallTitle] = a.isSmall, 
                e), (t = {}, t[a.$style.mediumTitle] = a.isMedium, t), (n = {}, n[a.$style.featured] = a.isFeatured, 
                n), (r = {}, r[a.$style.hasShadow] = a.hasShadow, r), (o = {}, o["js-project-cover-title-link"] = a.shouldOpenProjectPopupOnClick, 
                o), (i = {}, i["e2e-project-cover-title-link"] = a.shouldOpenProjectPopupOnClick, 
                i) ],
                attrs: {
                    href: a.url
                },
                on: {
                    focus: function(e) {
                        return a.$emit("focus");
                    },
                    blur: function(e) {
                        return a.$emit("blur");
                    }
                }
            }, [ a._t("default") ], 2);
        }, [], !1, function(e) {
            this.$style = o.default.locals || o.default;
        }, null, null);
        t.a = a.exports;
    },
    509: function(e, t, n) {
        "use strict";
        var r = {
            props: {
                colors: {
                    type: Array,
                    required: !0
                }
            }
        }, o = n(549), i = n(68);
        var a = Object(i.default)(r, function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return e.colors && e.colors.length ? n("div", {
                ref: "dominantColor",
                class: e.$style.dominantColor,
                style: {
                    backgroundColor: "rgb(" + e.colors[0].r + ", " + e.colors[0].g + ", " + e.colors[0].b + ")"
                }
            }) : n("svg", {
                ref: "fallbackImage",
                class: e.$style.colorFallback,
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 65 65"
                }
            }, [ n("g", {
                attrs: {
                    transform: "translate(-27 -27)"
                }
            }, [ n("path", {
                class: e.$style.fallbackIconPath,
                attrs: {
                    d: "M27,27V92H92V27ZM72.217,41.13A7.065,7.065,0,1,1,65.152,48.2,7,7,0,0,1,72.217,41.13ZM34.065,75.043l18.37-18.37L66.565,70.8l7.065-7.065,11.3,11.3Z"
                }
            }) ]) ]);
        }, [], !1, function(e) {
            this.$style = o.default.locals || o.default;
        }, null, null);
        t.a = a.exports;
    },
    513: function(e, t, n) {
        e.exports = n(2)(62);
    },
    514: function(e, t, n) {
        "use strict";
        var r = n(386), o = n.n(r);
        t.default = o.a;
    },
    515: function(e, t, n) {
        (t = e.exports = n(188)(!1)).push([ e.i, ".OwnerRowNeue-link-1lv {\n  display: inline-block;\n  max-width: 200px;\n  white-space: nowrap;\n}\n.OwnerRowNeue-link-1lv:hover {\n    text-decoration: none;\n}\n.OwnerRowNeue-link-1lv:hover .OwnerRowNeue-name-2z2 {\n      text-decoration: underline;\n}\n.OwnerRowNeue-row-2Kz:not(:last-child) {\n  margin-bottom: 6px;\n}\n.OwnerRowNeue-name-2z2 {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #191919;\n  display: inline-block;\n  max-width: calc(100% - 25px);\n  vertical-align: middle;\n}\n.OwnerRowNeue-imageWrap-3oR {\n  border-radius: 50%;\n  display: inline-block;\n  height: 18px;\n  margin-right: 7px;\n  overflow: hidden;\n  vertical-align: middle;\n  width: 18px;\n}\n.OwnerRowNeue-image-3xB {\n  width: 100%;\n}\n", "" ]), 
        t.locals = {
            link: "OwnerRowNeue-link-1lv",
            name: "OwnerRowNeue-name-2z2",
            row: "OwnerRowNeue-row-2Kz",
            imageWrap: "OwnerRowNeue-imageWrap-3oR",
            image: "OwnerRowNeue-image-3xB"
        };
    },
    516: function(e, t, n) {
        e.exports = n(2)(179);
    },
    517: function(e, t, n) {
        e.exports = n(2)(185);
    },
    518: function(e, t, n) {
        "use strict";
        var r = n(387), o = n.n(r);
        t.default = o.a;
    },
    519: function(e, t, n) {
        (t = e.exports = n(188)(!1)).push([ e.i, ".OwnersNeue-root-3-b {\n  pointer-events: all;\n}\n.OwnersNeue-root-3-b.OwnersNeue-light-z2U .OwnersNeue-owner-3CC {\n  color: #fff;\n}\n.OwnersNeue-root-3-b.OwnersNeue-light-z2U .OwnersNeue-arrow-3Ak::after {\n  border-top-color: #fff;\n}\n.OwnersNeue-root-3-b.OwnersNeue-dark-1da .OwnersNeue-owner-3CC {\n  color: #191919;\n}\n.OwnersNeue-root-3-b.OwnersNeue-dark-1da .OwnersNeue-arrow-3Ak::after {\n  border-top-color: #191919;\n}\n.OwnersNeue-ownerImage-2kF {\n  cursor: pointer;\n  display: inline-block;\n  height: 20px;\n  margin-right: 5px;\n  -webkit-transition: -webkit-filter 0.1s linear;\n  transition: -webkit-filter 0.1s linear;\n  transition: filter 0.1s linear;\n  transition: filter 0.1s linear, -webkit-filter 0.1s linear;\n  vertical-align: top;\n  width: 20px;\n}\n.OwnersNeue-ownerAndAvatar-1W8:hover .OwnersNeue-ownerImage-2kF {\n  -webkit-filter: brightness(80%);\n          filter: brightness(80%);\n}\n.OwnersNeue-ownerAndAvatar-1W8:hover .OwnersNeue-owner-3CC {\n  text-decoration: underline;\n}\n.OwnersNeue-multipleOwnersText-3gi:hover {\n  text-decoration: underline;\n}\n.OwnersNeue-ownerImageEl-dtp {\n  border-radius: 50%;\n  width: 100%;\n}\n.OwnersNeue-overflowText-M69 {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.OwnersNeue-owner-3CC {\n  color: inherit;\n  top: 1px;\n}\n.OwnersNeue-tooltipContainer-3aD {\n  display: inline-block;\n  max-width: 100%;\n  vertical-align: bottom;\n}\n.OwnersNeue-arrow-3Ak {\n  padding-right: 12px;\n  position: relative;\n}\n.OwnersNeue-arrow-3Ak::after {\n    border: 4px solid transparent;\n    content: '';\n    display: block;\n    height: 0;\n    position: absolute;\n    right: 0;\n    top: 7px;\n    width: 0;\n}\n.OwnersNeue-list-2Or {\n  max-height: 170px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n", "" ]), 
        t.locals = {
            root: "OwnersNeue-root-3-b",
            light: "OwnersNeue-light-z2U",
            owner: "OwnersNeue-owner-3CC",
            arrow: "OwnersNeue-arrow-3Ak",
            dark: "OwnersNeue-dark-1da",
            ownerImage: "OwnersNeue-ownerImage-2kF",
            ownerAndAvatar: "OwnersNeue-ownerAndAvatar-1W8",
            multipleOwnersText: "OwnersNeue-multipleOwnersText-3gi",
            ownerImageEl: "OwnersNeue-ownerImageEl-dtp",
            overflowText: "OwnersNeue-overflowText-M69",
            tooltipContainer: "OwnersNeue-tooltipContainer-3aD",
            list: "OwnersNeue-list-2Or"
        };
    },
    520: function(e, t, n) {
        "use strict";
        var r = n(388), o = n.n(r);
        t.default = o.a;
    },
    521: function(e, t, n) {
        (t = e.exports = n(188)(!1)).push([ e.i, ".Stats-stats-1iI {\n  -webkit-box-align: center;\n          align-items: center;\n  align-self: flex-end;\n  display: -webkit-box;\n  display: flex;\n  font-weight: bold;\n  margin-left: auto;\n  white-space: nowrap;\n}\n", "" ]), 
        t.locals = {
            stats: "Stats-stats-1iI"
        };
    },
    526: function(e, t, n) {
        e.exports = n(2)(74);
    },
    528: function(e, t, n) {
        "use strict";
        n.d(t, "e", function() {
            return o;
        }), n.d(t, "a", function() {
            return i;
        }), n.d(t, "b", function() {
            return a;
        }), n.d(t, "d", function() {
            return s;
        }), n.d(t, "c", function() {
            return l;
        });
        var r = n(25);
        function o(e, t) {
            return void 0 === t && (t = "search"), e.search ? t + "_" + e.sort + "|" + e.search : t + "_" + e.sort;
        }
        function i(e, t) {
            void 0 === t && (t = r.a.PROJECTS);
            for (var n = {}, o = 0, i = r.j[t]; o < i.length; o++) {
                var a = i[o];
                e[a] && (n[a] = e[a]);
            }
            return n;
        }
        function a(e) {
            return Object.keys(e).filter(function(e) {
                return "search" !== e;
            }).reduce(function(t, n) {
                return "field" === n ? t.creative_fields = e[n] : t[n] = e[n], t;
            }, {});
        }
        var s = {
            makeAndModel: "exif_make",
            lens: "exif_lens",
            focalLength: "exif_focal_length",
            shutterSpeed: "exif_shutter_speed",
            aperture: "exif_aperture"
        }, l = {
            make_and_model: "exif_make",
            lens: "exif_lens",
            focal_length: "exif_focal_length",
            shutter_speed: "exif_shutter_speed",
            aperture: "exif_aperture"
        };
    },
    532: function(e, t, n) {
        e.exports = n(2)(319);
    },
    533: function(e, t, n) {
        e.exports = n(2)(342);
    },
    534: function(e, t, n) {
        e.exports = n(2)(346);
    },
    535: function(e, t, n) {
        e.exports = n(2)(180);
    },
    536: function(e, t, n) {
        e.exports = n(2)(321);
    },
    549: function(e, t, n) {
        "use strict";
        var r = n(400), o = n.n(r);
        t.default = o.a;
    },
    550: function(e, t, n) {
        (t = e.exports = n(188)(!1)).push([ e.i, ".DominantColor-colorFallback-2Sh {\n  height: 50px;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translate(-25px, -25px);\n          transform: translate(-25px, -25px);\n  width: 50px;\n}\n.DominantColor-fallbackIconPath-qvI {\n  fill: #e8e8e8;\n}\n.DominantColor-dominantColor-2PM {\n  border-radius: inherit;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n", "" ]), 
        t.locals = {
            colorFallback: "DominantColor-colorFallback-2Sh",
            fallbackIconPath: "DominantColor-fallbackIconPath-qvI",
            dominantColor: "DominantColor-dominantColor-2PM"
        };
    },
    573: function(e, t, n) {
        "use strict";
        n(106);
        var r = n(464), o = n(508), i = {
            components: {
                OwnersNeue: r.a,
                Title: o.a
            },
            props: {
                url: String,
                title: String,
                owners: Array,
                isSmall: Boolean,
                isMedium: Boolean,
                shouldOpenProjectPopupOnClick: Boolean,
                isFeatured: Boolean,
                limitHeight: Boolean,
                trackingSource: String,
                theme: {
                    type: String,
                    default: "light",
                    validator: function(e) {
                        return [ "light", "dark" ].includes(e);
                    }
                },
                hasShadowText: {
                    type: Boolean,
                    default: !0
                },
                shouldRemoveMultiOwnerTooltip: {
                    type: Boolean,
                    default: !1
                },
                shouldShowOwner: {
                    type: Boolean,
                    default: !0
                }
            }
        }, a = n(602), s = n(68);
        var l = Object(s.default)(i, function() {
            var e, t, n, r, o, i = this, a = i.$createElement, s = i._self._c || a;
            return s("span", {
                ref: "root",
                class: [ (e = {}, e[i.$style.limitHeight] = i.limitHeight, e) ]
            }, [ s("Title", {
                ref: "title",
                class: i.$style.title,
                attrs: {
                    "data-ut": "title",
                    url: i.url,
                    isSmall: i.isSmall,
                    isMedium: i.isMedium,
                    shouldOpenProjectPopupOnClick: i.shouldOpenProjectPopupOnClick,
                    isFeatured: i.isFeatured,
                    hasShadow: i.hasShadowText
                },
                on: {
                    focus: function(e) {
                        return i.$emit("elOnFocus");
                    },
                    blur: function(e) {
                        return i.$emit("elOnBlur");
                    }
                }
            }, [ i._v(i._s(i.title)) ]), i.shouldShowOwner ? s("OwnersNeue", {
                ref: "owners",
                class: [ i.$style.owner, (t = {}, t[i.$style.smallOwner] = i.isSmall, t), (n = {}, 
                n[i.$style.mediumOwner] = i.isMedium, n) ],
                attrs: {
                    "data-ut": "owners",
                    owners: i.owners,
                    ownerTextClass: [ (r = {}, r[i.$style.shadowText] = i.hasShadowText, r), (o = {}, 
                    o[i.$style.smallOwnerArrow] = i.isSmall, o) ],
                    theme: i.theme,
                    shouldRemoveMultiOwnerTooltip: i.shouldRemoveMultiOwnerTooltip,
                    trackingSource: i.trackingSource
                },
                on: {
                    ownerOnFocus: function(e) {
                        return i.$emit("elOnFocus");
                    },
                    ownerOnBlur: function(e) {
                        return i.$emit("elOnBlur");
                    },
                    tooltipOnFocus: function(e) {
                        return i.$emit("elOnFocus");
                    },
                    tooltipOnBlur: function(e) {
                        return i.$emit("elOnBlur");
                    }
                }
            }) : i._e() ], 1);
        }, [], !1, function(e) {
            this.$style = a.default.locals || a.default;
        }, null, null);
        t.a = l.exports;
    },
    579: function(e, t, n) {
        "use strict";
        var r = n(414), o = n.n(r);
        t.default = o.a;
    },
    580: function(e, t, n) {
        (t = e.exports = n(188)(!1)).push([ e.i, "@-webkit-keyframes Cover-fadeIn-3AZ {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes Cover-fadeIn-3AZ {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n.Cover-searchLoadingPlaceholder-3yS {\n  -webkit-animation: Cover-fadeIn-3AZ ease-in 1;\n          animation: Cover-fadeIn-3AZ ease-in 1;\n  -webkit-animation-duration: 0.2s;\n          animation-duration: 0.2s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  background-color: #ccc;\n  border-radius: 3px;\n  opacity: 0;\n  overflow: hidden;\n  position: relative;\n}\n.Cover-cover-2mr {\n  position: relative;\n}\n.Cover-content-2R2 {\n  border-radius: 4px;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.Cover-overlay-28e {\n  color: #fff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.Cover-showOnHover-Ks- {\n  opacity: 0;\n  -webkit-transition: opacity 0.2s;\n  transition: opacity 0.2s;\n  will-change: opacity;\n}\n.Cover-focused-1tt .Cover-showOnHover-Ks-,\n  .Cover-cover-2mr:hover .Cover-showOnHover-Ks- {\n    opacity: 1;\n}\n.Cover-showOnHover-Ks-.Cover-transitionDone-22y {\n    will-change: auto;\n}\n@media (hover: none) {\n.Cover-showOnHover-Ks- {\n      opacity: 1;\n}\n}\n.Cover-wrapper-300:not(.Cover-noConstraints-PzQ) {\n  height: 0;\n}\n.Cover-wrapper-300 {\n  border-radius: 4px;\n  display: block;\n  padding-top: 78.22%;\n  position: relative;\n  width: 100%;\n}\n.Cover-wrapper-300[tabindex]::before {\n    bottom: -10px;\n    left: -10px;\n    right: -10px;\n    top: -10px;\n}\n", "" ]), 
        t.locals = {
            searchLoadingPlaceholder: "Cover-searchLoadingPlaceholder-3yS",
            fadeIn: "Cover-fadeIn-3AZ",
            cover: "Cover-cover-2mr",
            content: "Cover-content-2R2",
            overlay: "Cover-overlay-28e",
            showOnHover: "Cover-showOnHover-Ks-",
            focused: "Cover-focused-1tt",
            transitionDone: "Cover-transitionDone-22y",
            wrapper: "Cover-wrapper-300",
            noConstraints: "Cover-noConstraints-PzQ"
        };
    },
    591: function(e, t, n) {
        "use strict";
        n(190);
        var r = n(348), o = n(28), i = {
            name: "Feature",
            components: {
                Tooltip: r.a
            },
            props: {
                tooltipAlignment: {
                    type: String
                },
                url: {
                    type: String
                },
                featuredDate: {
                    type: [ Number, String ]
                },
                site: {
                    type: Object
                },
                numProjects: {
                    type: Number
                },
                slug: {
                    type: String
                },
                index: {
                    type: Number
                },
                shouldForceDisplayRibbons: {
                    type: Boolean
                }
            },
            computed: {
                assetUrl: function() {
                    return o.ASSETS_URL + "img/shared_icons/svg/ribbons";
                },
                canTransitionWithDelay: function() {
                    return null !== this.index && this.index >= 0;
                },
                timestamp: function() {
                    if ("string" == typeof this.featuredDate) return this.featuredDate;
                    var e = new Date(1e3 * this.featuredDate);
                    return e.toLocaleDateString();
                },
                imgSrc: function() {
                    return this.slug ? this.assetUrl + "/" + this.slug + ".svg" : this.assetUrl + "/" + this.site.ribbon.image;
                },
                imgSrcSet: function() {
                    if (!this.slug) return this.site.ribbon.image + ", " + this.site.ribbon.image_2x + " 2x";
                }
            }
        }, a = n(696), s = n(68);
        var l = Object(s.default)(i, function() {
            var e, t, n = this, r = n.$createElement, o = n._self._c || r;
            return o("div", {
                ref: "root",
                class: [ n.$style.ribbonContainer, (e = {}, e[n.$style.forceDisplayRibbons] = n.shouldForceDisplayRibbons, 
                e) ]
            }, [ o("Tooltip", {
                ref: "tooltip",
                attrs: {
                    alignment: n.tooltipAlignment,
                    isResponsive: !0,
                    position: "bottom",
                    triangleDistance: 6,
                    distance: 0
                },
                on: {
                    didOpen: function(e) {
                        return n.$emit("featureTooltipOpen");
                    },
                    didClose: function(e) {
                        return n.$emit("featureTooltipClosed");
                    }
                }
            }, [ o("a", {
                ref: "ribbon",
                class: [ "rf-ribbon", n.$style.ribbon ],
                attrs: {
                    href: n.url
                }
            }, [ o("img", {
                ref: "ribbonImg",
                class: [ "rf-ribbon__image", n.$style.ribbonImage, (t = {}, t[n.$style.ribbonImageDelay] = n.canTransitionWithDelay, 
                t) ],
                attrs: {
                    src: n.imgSrc,
                    alt: n.site.name,
                    srcset: n.imgSrcSet,
                    title: n.site.title,
                    "data-transition-delay-index": n.canTransitionWithDelay && n.index
                }
            }) ]), n.numProjects ? o("div", {
                ref: "numProjects",
                class: n.$style.numProjects
            }, [ n._v(n._s(n.numProjects)) ]) : n._e(), o("div", {
                attrs: {
                    slot: "tooltipContent"
                },
                slot: "tooltipContent"
            }, [ o("div", {
                class: [ "rf-feature__header", n.$style.featureHeader ]
            }, [ n._v(n._s(n.$translate("featured_in", "Featured In"))) ]), o("div", {
                class: [ "rf-feature__info", n.$style.featureInfo ]
            }, [ o("a", {
                ref: "link",
                class: [ "rf-feature__link" ],
                attrs: {
                    href: n.url
                }
            }, [ n._v(n._s(n.site.name)) ]), n.featuredDate ? o("span", {
                ref: "featuredDate"
            }, [ n._v(" — "), o("time", {
                ref: "timestamp",
                class: [ "rf-feature__date" ],
                attrs: {
                    datetime: n.timestamp
                }
            }, [ n._v(n._s(n.timestamp)) ]) ]) : n._e() ]) ]) ]) ], 1);
        }, [], !1, function(e) {
            this.$style = a.default.locals || a.default;
        }, null, null);
        t.a = l.exports;
    },
    600: function(e, t, n) {
        "use strict";
        var r = n(427), o = n.n(r);
        t.default = o.a;
    },
    601: function(e, t, n) {
        (t = e.exports = n(188)(!1)).push([ e.i, ".Title-title-3nk {\n  color: inherit;\n  display: inline-block;\n  font-size: 16px;\n  font-weight: bold;\n  margin-bottom: -2px;\n  max-height: 43px;\n  overflow: hidden;\n  padding-bottom: 2px;\n  pointer-events: all;\n}\n.Title-title-3nk.Title-featured-24h {\n    color: #0057ff;\n}\n.Title-title-3nk.Title-hasShadow-14p {\n    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);\n}\n.Title-smallTitle-3gU {\n  font-size: 12px;\n  max-height: 33px;\n}\n.Title-mediumTitle-J-V {\n  font-size: 15px;\n  padding-bottom: 0;\n}\n", "" ]), 
        t.locals = {
            title: "Title-title-3nk",
            featured: "Title-featured-24h",
            hasShadow: "Title-hasShadow-14p",
            smallTitle: "Title-smallTitle-3gU",
            mediumTitle: "Title-mediumTitle-J-V"
        };
    },
    602: function(e, t, n) {
        "use strict";
        var r = n(428), o = n.n(r);
        t.default = o.a;
    },
    603: function(e, t, n) {
        (t = e.exports = n(188)(!1)).push([ e.i, ".TitleOwner-limitHeight-2_Y .TitleOwner-title-3nP {\n  max-height: 39px;\n  max-width: 100%;\n  overflow: hidden;\n}\n.TitleOwner-owner-1aG {\n  font-size: 13px;\n}\n.TitleOwner-smallOwner-3G9 {\n  font-size: 11px;\n}\n.TitleOwner-shadowText-3QJ {\n  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);\n}\n.TitleOwner-mediumOwner-NDt {\n  font-size: 12px;\n}\n.TitleOwner-smallOwnerArrow-2ue::after {\n  top: 6px;\n}\n", "" ]), 
        t.locals = {
            limitHeight: "TitleOwner-limitHeight-2_Y",
            title: "TitleOwner-title-3nP",
            owner: "TitleOwner-owner-1aG",
            smallOwner: "TitleOwner-smallOwner-3G9",
            shadowText: "TitleOwner-shadowText-3QJ",
            mediumOwner: "TitleOwner-mediumOwner-NDt",
            smallOwnerArrow: "TitleOwner-smallOwnerArrow-2ue"
        };
    },
    639: function(e, t, n) {
        var r = n(941);
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]), r.locals && (e.exports = r.locals);
        (0, n(189).default)("4448efac", r, !0, {});
    },
    680: function(e, t, n) {
        "use strict";
        var r = n(0), o = n(17), i = n(483), a = n(591), s = n(382), l = n(395), c = n(383), u = n(484), d = n(347), f = n(573), p = n(508), h = n(464), v = n(485), m = n(718), g = n(494), b = n(509), w = n(394), y = n(415), x = n(362), C = n(113), j = n.n(C), P = n(389), k = o.default.extend({
            name: "ProjectCoverNeue",
            props: {
                project: {
                    type: Object,
                    required: !0
                },
                isFeatureQueueAdmin: {
                    type: Boolean,
                    default: !1
                },
                shouldShowEditDropdown: {
                    type: Boolean,
                    default: !1
                },
                areDetailsShownOnMobile: {
                    type: Boolean,
                    default: !0
                },
                isClickDisabled: {
                    type: Boolean,
                    default: !1
                },
                showDetailOverlay: {
                    type: Boolean,
                    default: !0
                },
                isCollectionEditable: {
                    type: Boolean,
                    default: !1
                },
                cull: {
                    type: Boolean
                },
                shouldDisplayFeatureFlags: {
                    type: Boolean,
                    default: !0
                },
                showSiblingProjectsSelector: {
                    type: Boolean,
                    default: !0
                },
                trackingSource: {
                    type: String
                },
                isStatsVisible: {
                    type: Boolean
                },
                shouldDisplayDraftControls: {
                    type: Boolean
                },
                hasNoConstraints: {
                    type: Boolean,
                    default: !1
                },
                shouldRemoveMultiOwnerTooltip: {
                    type: Boolean,
                    default: !1
                },
                locale: {
                    type: String
                },
                isFlagged: {
                    type: Boolean
                },
                useOptCovers: {
                    type: Boolean
                }
            },
            data: function() {
                return {
                    loaded: !1,
                    defaultCoverSize: w.b,
                    isUrlInFocus: !1,
                    isOwnerInFocus: !1,
                    isHovered: !1,
                    featureRibbonsVisibilityStatus: null,
                    isFeatureFlagInFocus: !1
                };
            },
            filters: {
                commaSplit: P.b,
                abbreviate: P.a
            },
            watch: {
                loaded: function(e) {
                    e && this.$emit("coverImageLoaded");
                }
            },
            components: {
                Cover: i.a,
                AppreciationsIcon: l.a,
                ViewsIcon: c.a,
                Btn: d.a,
                TitleOwner: f.a,
                PrivacyLockTooltip: u.a,
                GearDropdown: v.a,
                CoverStats: g.a,
                DropdownItem: s.a,
                DominantColor: b.a,
                CollectionEdit: m.a,
                Feature: a.a,
                OwnersNeue: h.a,
                Title: p.a
            },
            methods: {
                getProjectUrl: function(e) {
                    return this.trackingSource && (e = Object(r.__assign)(Object(r.__assign)({}, e), {
                        tracking_source: this.trackingSource
                    })), Object(y.a)(this.project.url, e);
                },
                coverSrc: function(e) {
                    return Object(w.e)(e);
                },
                coverSrcset: function(e) {
                    if (this.useOptCovers) {
                        var t = Object(x.f)(e);
                        if (t) return t;
                    }
                    return Object(x.g)(e);
                },
                imageLoaded: function() {
                    return this.$refs.image.complete;
                },
                handleFeatureFlagVisibility: function(e, t) {
                    this.featureRibbonsVisibilityStatus && (this.featureRibbonsVisibilityStatus[e] = t, 
                    this.isFeatureFlagInFocus = this.featureRibbonsVisibilityStatus.filter(function(e) {
                        return e;
                    }).length > 0);
                },
                mouseEventHandler: function(e) {
                    this.isClickDisabled && (e.preventDefault(), e.stopPropagation(), "click" === e.type && this.$emit("clickPrevented"));
                }
            },
            mounted: function() {
                this.imageLoaded() && (this.loaded = !0);
            },
            computed: {
                genericProjectLink: function() {
                    return this.getProjectUrl();
                },
                canDisplayFeaturedFlags: function() {
                    return this.shouldDisplayFeatureFlags && this.featureFlags;
                },
                isInFocus: function() {
                    var e = this.isUrlInFocus || this.isOwnerInFocus || this.isFeatureFlagInFocus;
                    return e ? this.$emit("isFocused") : this.$emit("isBlurred"), e;
                },
                featureFlags: function() {
                    var e, t = (null === (e = null === this || void 0 === this ? void 0 : this.project) || void 0 === e ? void 0 : e.features) && this.project.features.length && this.project.features.slice(0, 5);
                    return !!t && (this.featureRibbonsVisibilityStatus = new Array(t.length).fill(!1), 
                    null === t || void 0 === t ? void 0 : t.map(function(e, n) {
                        return t.length - n > 2 ? Object(r.__assign)(Object(r.__assign)({}, e), {
                            tooltipAlignment: "center"
                        }) : Object(r.__assign)(Object(r.__assign)({}, e), {
                            tooltipAlignment: "right"
                        });
                    }));
                },
                lastModified: function() {
                    return j.a.unix(this.project.modified_on).fromNow();
                },
                servedMarks: function() {
                    return this.project.served && this.project.served.mark;
                },
                queuedMarks: function() {
                    return this.project.queued && this.project.queued.mark;
                }
            }
        }), O = n(740), _ = n(68);
        var B = Object(_.default)(k, function() {
            var e, t, n, r, o, i, a, s, l = this, c = l.$createElement, u = l._self._c || c;
            return u("div", {
                ref: "root",
                class: [ l.$style.root, (e = {}, e[l.$style.flagged] = l.isFlagged, e), (t = {}, 
                t[l.$style.statsVisible] = l.isStatsVisible, t), (n = {}, n[l.$style.noConstraints] = l.hasNoConstraints, 
                n) ]
            }, [ u("Cover", {
                ref: "cover",
                class: [ l.$style.cover, "qa-project-cover", "e2e-ProjectCoverNeue", {
                    "js-project-cover e2e-ProjectCoverNeue-cover": l.showSiblingProjectsSelector
                }, (r = {}, r[l.$style.coverWithFlags] = l.canDisplayFeaturedFlags, r), (o = {}, 
                o[l.$style.statsVisible] = l.isStatsVisible, o), (i = {}, i[l.$style.loaded] = l.loaded, 
                i) ],
                attrs: {
                    wrapperClasses: [ l.$style.wrapper, "qa-cover-wrapper", "e2e-ProjectCoverNeue-wrapper" ],
                    isInFocus: l.isInFocus,
                    hasNoConstraints: l.hasNoConstraints
                },
                nativeOn: {
                    mouseenter: function(e) {
                        l.isHovered = !0;
                    },
                    mouseleave: function(e) {
                        l.isHovered = !1;
                    }
                },
                scopedSlots: l._u([ {
                    key: "content",
                    fn: function(e) {
                        return [ u("DominantColor", {
                            attrs: {
                                colors: l.project.colors
                            }
                        }), u("img", {
                            directives: [ {
                                name: "show",
                                rawName: "v-show",
                                value: !l.cull,
                                expression: "!cull"
                            } ],
                            ref: "image",
                            class: [ l.$style.image, "js-cover-image" ],
                            attrs: {
                                sizes: l.defaultCoverSize + "px",
                                src: l.coverSrc(l.project.covers),
                                srcset: l.coverSrcset(l.project.covers),
                                alt: l.project.name
                            },
                            on: {
                                error: function(e) {
                                    l.loaded = !0;
                                },
                                load: function(e) {
                                    l.loaded = !0;
                                }
                            }
                        }), l.$slots.topRight ? u("div", {
                            class: l.$style.topRight
                        }, [ l._t("topRight", null, {
                            project: l.project
                        }) ], 2) : l._e(), l.servedMarks || l.queuedMarks ? u("ul", {
                            class: l.$style.curationMarks
                        }, [ l._l(l.servedMarks, function(e) {
                            return u("li", {
                                key: e,
                                ref: "servedMark",
                                refInFor: !0,
                                class: [ l.$style.curationMark, l.$style.served ]
                            }, [ l._v(l._s(e)) ]);
                        }), l._l(l.queuedMarks, function(e) {
                            return u("li", {
                                key: e,
                                ref: "queuedMark",
                                refInFor: !0,
                                class: [ l.$style.curationMark, l.$style.queued ]
                            }, [ l._v(l._s(e)) ]);
                        }) ], 2) : l._e(), u("div", {
                            class: l.$style.controlsAndPrivacyContainer
                        }, [ l.shouldShowEditDropdown ? u("GearDropdown", {
                            ref: "gearDropdown",
                            class: [ e.hoverClass, "js-controls-overlay-menu", "e2e-ProjectCoverNeue-controls-overlay-menu" ],
                            attrs: {
                                alignment: "left"
                            }
                        }, [ u("DropdownItem", [ u("a", {
                            staticClass: "js-project-edit",
                            attrs: {
                                href: "/portfolio/editor?project_id=" + l.project.id
                            }
                        }, [ l._v(l._s(l.$translate("project_cover_dropdown_edit", "Edit"))) ]) ]), u("DropdownItem", [ u("span", {
                            ref: "clone",
                            on: {
                                click: function(e) {
                                    return l.$emit("clone", {
                                        id: l.project.id
                                    });
                                }
                            }
                        }, [ l._v(l._s(l.$translate("project_cover_dropdown_clone", "Clone"))) ]) ]), l.project.private ? l._e() : u("DropdownItem", [ u("a", {
                            staticClass: "js-project-promote",
                            attrs: {
                                href: l.getProjectUrl({
                                    share: "1"
                                })
                            }
                        }, [ l._v(l._s(l.$translate("project_cover_dropdown_promote", "Promote"))) ]) ]), u("DropdownItem", [ u("span", {
                            ref: "unpublish",
                            on: {
                                click: function(e) {
                                    return l.$emit("unpublish", {
                                        id: l.project.id
                                    });
                                }
                            }
                        }, [ l._v(l._s(l.$translate("project_cover_dropdown_unpublish", "Unpublish"))) ]) ]), l.project.is_founder ? u("DropdownItem", [ u("span", {
                            ref: "delete",
                            staticClass: "js-project-delete e2e-ProjectCoverNeue-project-delete",
                            on: {
                                click: function(e) {
                                    return l.$emit("delete", {
                                        id: l.project.id
                                    });
                                }
                            }
                        }, [ l._v(l._s(l.$translate("project_cover_dropdown_delete", "Delete"))) ]) ]) : u("DropdownItem", [ u("span", {
                            ref: "remove",
                            on: {
                                click: function(e) {
                                    return l.$emit("remove", {
                                        id: l.project.id
                                    });
                                }
                            }
                        }, [ l._v(l._s(l.$translate("project_cover_dropdown_remove", "Remove"))) ]) ]) ], 1) : l._e(), l.isCollectionEditable ? u("CollectionEdit", {
                            ref: "collectionEditIcon",
                            class: e.hoverClass,
                            attrs: {
                                projectId: l.project.id,
                                alignment: "left"
                            },
                            on: {
                                deleteFromCollection: function(e) {
                                    return l.$emit("deleteProjectFromCollection");
                                },
                                editCollection: function(e) {
                                    return l.$emit("editProjectRelatedCollection");
                                }
                            }
                        }) : l._e(), l.project.private ? u("div", {
                            class: l.$style.privacyLockContainer
                        }, [ u("PrivacyLockTooltip") ], 1) : l._e() ], 1) ];
                    }
                } ], null, !0)
            }, [ u("template", {
                slot: l.isFeatureQueueAdmin ? "alwaysVisibleOverlay" : "hoverOverlay"
            }, [ l.canDisplayFeaturedFlags ? u("div", {
                ref: "tooltipFader",
                class: l.$style.featureFlagsContainer
            }, l._l(l.featureFlags, function(e, t) {
                return u("Feature", {
                    key: "featured-" + t,
                    ref: "featureFlag",
                    refInFor: !0,
                    class: l.$style.feature,
                    attrs: {
                        tooltipAlignment: e.tooltipAlignment,
                        index: t,
                        shouldForceDisplayRibbons: l.isHovered || l.isInFocus,
                        url: e.site.url,
                        featuredDate: e.featured_on,
                        site: e.site
                    },
                    on: {
                        featureTooltipOpen: function(e) {
                            return l.handleFeatureFlagVisibility(t, !0);
                        },
                        featureTooltipClosed: function(e) {
                            return l.handleFeatureFlagVisibility(t, !1);
                        }
                    }
                });
            }), 1) : l._e(), l.showDetailOverlay ? [ !l.project.published_on && l.shouldDisplayDraftControls ? u("div", {
                ref: "draftControls",
                class: l.$style.draftControls
            }, [ u("Btn", {
                class: l.$style.draftControl,
                attrs: {
                    customLabelWrapperClass: l.$style.draftControlText,
                    type: "primary",
                    href: "/portfolio/editor?project_id=" + l.project.id
                }
            }, [ l._v(l._s(l.$translate("project_draft_control_edit", "Edit Project"))) ]), u("Btn", {
                class: l.$style.draftControl,
                attrs: {
                    customLabelWrapperClass: l.$style.draftControlText
                },
                on: {
                    click: function(e) {
                        return l.$emit("delete", {
                            id: l.project.id
                        });
                    }
                }
            }, [ l._v(l._s(l.$translate("project_draft_control_delete", "Delete Project"))) ]), u("div", {
                class: l.$style.draftModified
            }, [ l._v(" " + l._s(l.$translate("project_draft_last_modified", "Last modified")) + " "), u("time", {
                ref: "lastModified"
            }, [ l._v(l._s(l.lastModified)) ]) ]) ], 1) : u("a", {
                ref: "published",
                class: [ l.$style.coverLink, "js-project-cover-image-link", "js-project-link", "e2e-ProjectCoverNeue-link" ],
                attrs: {
                    href: l.genericProjectLink,
                    title: l.$translate("link_to_project", "Link to project")
                },
                on: {
                    mouseup: l.mouseEventHandler,
                    click: l.mouseEventHandler,
                    focus: function(e) {
                        l.isUrlInFocus = !0;
                    },
                    blur: function(e) {
                        l.isUrlInFocus = !1;
                    }
                }
            }), u("div", {
                ref: "details",
                class: [ l.$style.details, (a = {}, a[l.$style.draftDetails] = !l.project.published_on, 
                a), (s = {}, s[l.$style.hideDetailsMobile] = !l.areDetailsShownOnMobile, s) ]
            }, [ u("div", {
                class: l.$style.info
            }, [ l.isStatsVisible ? u("Title", {
                ref: "title",
                attrs: {
                    url: l.getProjectUrl(),
                    isFeatured: l.project.isFeatured,
                    hasShadow: !1,
                    shouldOpenProjectPopupOnClick: !0
                },
                on: {
                    focus: function(e) {
                        l.isOwnerInFocus = !0;
                    },
                    blur: function(e) {
                        l.isOwnerInFocus = !1;
                    }
                }
            }, [ l._v(l._s(l.project.name)) ]) : u("TitleOwner", {
                ref: "titleOwner",
                attrs: {
                    url: l.getProjectUrl(),
                    title: l.project.name,
                    owners: l.project.owners,
                    isFeatured: l.project.isFeatured,
                    shouldRemoveMultiOwnerTooltip: l.shouldRemoveMultiOwnerTooltip,
                    shouldOpenProjectPopupOnClick: ""
                },
                on: {
                    elOnFocus: function(e) {
                        l.isOwnerInFocus = !0;
                    },
                    elOnBlur: function(e) {
                        l.isOwnerInFocus = !1;
                    }
                }
            }) ], 1), l.isStatsVisible ? l._e() : u("CoverStats", {
                ref: "stats"
            }, [ u("template", {
                slot: "content"
            }, [ u("AppreciationsIcon", {
                class: l.$style.icon
            }), u("span", {
                ref: "appreciationsTitle",
                attrs: {
                    title: l._f("commaSplit")(l.project.stats.appreciations, l.locale)
                }
            }, [ l._v(l._s(l._f("abbreviate")(l.project.stats.appreciations, l.locale))) ]), u("ViewsIcon", {
                class: l.$style.icon
            }), u("span", {
                ref: "viewsTitle",
                attrs: {
                    title: l._f("commaSplit")(l.project.stats.views, l.locale)
                }
            }, [ l._v(l._s(l._f("abbreviate")(l.project.stats.views, l.locale))) ]) ], 1) ], 2) ], 1), l.$slots.topRightHover ? u("div", {
                class: l.$style.topRight
            }, [ l._t("topRightHover", null, {
                project: l.project
            }) ], 2) : l._e() ] : l._e() ], 2), l.showDetailOverlay ? l._e() : u("template", {
                slot: "alwaysVisibleOverlay"
            }, [ u("a", {
                ref: "published",
                class: [ l.$style.coverLink, "js-project-cover-image-link", "js-project-link", "e2e-ProjectCoverNeue-link" ],
                attrs: {
                    href: l.genericProjectLink,
                    title: l.$translate("link_to_project", "Link to project")
                },
                on: {
                    mouseup: l.mouseEventHandler,
                    click: l.mouseEventHandler
                }
            }) ]) ], 2), l.isStatsVisible ? u("div", {
                class: l.$style.visibleStatsAndOwners
            }, [ u("span", {
                class: l.$style.ownersContainer
            }, [ u("OwnersNeue", {
                ref: "owners",
                class: l.$style.owners,
                attrs: {
                    owners: l.project.owners,
                    theme: "dark",
                    showAvatar: !0
                },
                on: {
                    ownerOnFocus: function(e) {
                        return l.$emit("elOnFocus");
                    },
                    ownerOnBlur: function(e) {
                        return l.$emit("elOnBlur");
                    },
                    tooltipOnFocus: function(e) {
                        return l.$emit("elOnFocus");
                    },
                    tooltipOnBlur: function(e) {
                        return l.$emit("elOnBlur");
                    }
                }
            }) ], 1), u("div", {
                class: l.$style.visibleStats
            }, [ u("CoverStats", {
                ref: "stats"
            }, [ u("template", {
                slot: "content"
            }, [ u("AppreciationsIcon", {
                class: [ l.$style.icon, l.$style.appreciateIcon ]
            }), u("span", {
                ref: "appreciationsTitle",
                attrs: {
                    title: l._f("commaSplit")(l.project.stats.appreciations, l.locale)
                }
            }, [ l._v(l._s(l._f("abbreviate")(l.project.stats.appreciations, l.locale))) ]), u("ViewsIcon", {
                class: [ l.$style.icon, l.$style.viewsIcon ]
            }), u("span", {
                ref: "viewsTitle",
                attrs: {
                    title: l._f("commaSplit")(l.project.stats.views, l.locale)
                }
            }, [ l._v(l._s(l._f("abbreviate")(l.project.stats.views, l.locale))) ]) ], 1) ], 2) ], 1) ]) : l._e() ], 1);
        }, [], !1, function(e) {
            this.$style = O.default.locals || O.default;
        }, null, null);
        t.a = B.exports;
    },
    696: function(e, t, n) {
        "use strict";
        var r = n(445), o = n.n(r);
        t.default = o.a;
    },
    697: function(e, t, n) {
        (t = e.exports = n(188)(!1)).push([ e.i, ".Feature-ribbon-20X {\n  height: 57px;\n  overflow: hidden;\n  width: auto;\n}\n.Feature-ribbonImage-2tP {\n  -ms-interpolation-mode: nearest-neighbor;\n      image-rendering: -moz-crisp-edges;\n      image-rendering: pixelated;\n  position: relative;\n  top: -7px;\n  -webkit-transition: top 0.15s ease;\n  transition: top 0.15s ease;\n}\n.Feature-ribbonImageDelay-1d3 {\n  opacity: 0;\n  -webkit-transform: translateY(-10%);\n          transform: translateY(-10%);\n  -webkit-transition: opacity 0.2s linear, -webkit-transform 0.2s linear;\n  transition: opacity 0.2s linear, -webkit-transform 0.2s linear;\n  transition: transform 0.2s linear, opacity 0.2s linear;\n  transition: transform 0.2s linear, opacity 0.2s linear, -webkit-transform 0.2s linear;\n}\n.Feature-ribbonImageDelay-1d3[data-transition-delay-index='0'] {\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n}\n.Feature-ribbonImageDelay-1d3[data-transition-delay-index='1'] {\n    -webkit-transition-delay: 0.1s;\n            transition-delay: 0.1s;\n}\n.Feature-ribbonImageDelay-1d3[data-transition-delay-index='2'] {\n    -webkit-transition-delay: 0.2s;\n            transition-delay: 0.2s;\n}\n.Feature-ribbonImageDelay-1d3[data-transition-delay-index='3'] {\n    -webkit-transition-delay: 0.3s;\n            transition-delay: 0.3s;\n}\n.Feature-ribbonImageDelay-1d3[data-transition-delay-index='4'] {\n    -webkit-transition-delay: 0.4s;\n            transition-delay: 0.4s;\n}\n.Feature-forceDisplayRibbons-46Z .Feature-ribbonImageDelay-1d3 {\n    opacity: 1;\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%);\n}\n.Feature-ribbonContainer-P5U:hover .Feature-ribbonImage-2tP {\n  top: 0;\n}\n.Feature-ribbonContainer-P5U:hover .Feature-numProjects-2rt {\n  opacity: 0;\n}\n.Feature-featureHeader-git {\n  padding: 5px 7px;\n}\n.Feature-featureInfo-G8D {\n  padding: 0 7px 5px;\n}\n.Feature-numProjects-2rt {\n  color: #696969;\n  font-size: 11px;\n  font-weight: bold;\n  margin-top: -10px;\n  text-align: center;\n  -webkit-transition: opacity 0.1s;\n  transition: opacity 0.1s;\n  width: 100%;\n}\n", "" ]), 
        t.locals = {
            ribbon: "Feature-ribbon-20X",
            ribbonImage: "Feature-ribbonImage-2tP",
            ribbonImageDelay: "Feature-ribbonImageDelay-1d3",
            forceDisplayRibbons: "Feature-forceDisplayRibbons-46Z",
            ribbonContainer: "Feature-ribbonContainer-P5U",
            numProjects: "Feature-numProjects-2rt",
            featureHeader: "Feature-featureHeader-git",
            featureInfo: "Feature-featureInfo-G8D"
        };
    },
    698: function(e, t, n) {
        "use strict";
        var r = n(446), o = n.n(r);
        t.default = o.a;
    },
    699: function(e, t, n) {
        (t = e.exports = n(188)(!1)).push([ e.i, ".CollectionEdit-root-XLa .CollectionEdit-cogContainer-hzr {\n  background: #fff;\n  border: 1px solid #e8e8e8;\n  border-radius: 30px;\n  display: -webkit-box;\n  display: flex;\n  padding: 3px 14px;\n}\n.CollectionEdit-iconContainer-1Hb {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n}\n.CollectionEdit-editIcon-25C {\n  margin-top: 2px;\n}\n.CollectionEdit-triangle-Ih4 {\n  display: inline-block;\n  height: 15px;\n  margin: 0 0 5px 9px;\n  position: relative;\n  top: 3px;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n.CollectionEdit-dropdown-29_ {\n  min-width: 170px;\n}\n.CollectionEdit-menuItem-2tH {\n  white-space: nowrap;\n}\n", "" ]), 
        t.locals = {
            root: "CollectionEdit-root-XLa",
            cogContainer: "CollectionEdit-cogContainer-hzr",
            iconContainer: "CollectionEdit-iconContainer-1Hb",
            editIcon: "CollectionEdit-editIcon-25C",
            triangle: "CollectionEdit-triangle-Ih4",
            dropdown: "CollectionEdit-dropdown-29_",
            menuItem: "CollectionEdit-menuItem-2tH"
        };
    },
    718: function(e, t, n) {
        "use strict";
        var r = n(486), o = n(348), i = n(382), a = n(407), s = {
            edit: "collection-item-edit",
            delete: "collection-item-delete"
        }, l = {
            components: {
                Icon: r.a,
                Tooltip: o.a,
                DropdownItem: i.a,
                TriangleIcon: a.a
            },
            props: {
                alignment: {
                    type: String,
                    default: "right"
                }
            },
            data: function() {
                return {
                    testIds: s
                };
            }
        }, c = n(698), u = n(68);
        var d = Object(u.default)(l, function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {
                class: e.$style.root
            }, [ n("Tooltip", {
                ref: "tooltip",
                class: e.$style.cogContainer,
                attrs: {
                    isResponsive: !0,
                    horizontalPadding: 0,
                    position: "bottom",
                    alignment: e.alignment
                }
            }, [ n("div", {
                class: e.$style.iconContainer
            }, [ n("Icon", {
                class: e.$style.editIcon,
                attrs: {
                    name: "edit"
                }
            }), n("TriangleIcon", {
                class: e.$style.triangle
            }) ], 1), n("ul", {
                class: e.$style.dropdown,
                attrs: {
                    slot: "tooltipContent"
                },
                slot: "tooltipContent"
            }, [ n("DropdownItem", {
                staticClass: "qa-moodboard-item-edit"
            }, [ n("span", {
                ref: "edit",
                attrs: {
                    "data-ut": e.testIds.edit
                },
                on: {
                    click: function(t) {
                        return e.$emit("editCollection");
                    }
                }
            }, [ e._v(e._s(e.$translate("collection_cover_edit", "Edit"))) ]) ]), n("DropdownItem", {
                staticClass: "qa-moodboard-item-delete"
            }, [ n("span", {
                ref: "delete",
                class: e.$style.menuItem,
                attrs: {
                    "data-ut": e.testIds.delete
                },
                on: {
                    click: function(t) {
                        return e.$emit("deleteFromCollection");
                    }
                }
            }, [ e._v(e._s(e.$translate("moodboard_delete_single_project", "Delete from Moodboard"))) ]) ]) ], 1) ]) ], 1);
        }, [], !1, function(e) {
            this.$style = c.default.locals || c.default;
        }, null, null);
        t.a = d.exports;
    },
    727: function(e, t, n) {
        e.exports = n(2)(41);
    },
    740: function(e, t, n) {
        "use strict";
        var r = n(476), o = n.n(r);
        t.default = o.a;
    },
    741: function(e, t, n) {
        (t = e.exports = n(188)(!1)).push([ e.i, ".ProjectCoverNeue-image-1MZ {\n  border-radius: 4px;\n  display: block;\n  overflow: hidden;\n  width: 100%;\n}\n.ProjectCoverNeue-image-1MZ,\n.ProjectCoverNeue-coverLink-102.ProjectCoverNeue-coverLink-102 {\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.ProjectCoverNeue-details-yQ_ {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  pointer-events: none;\n  position: relative;\n  width: 100%;\n}\n.ProjectCoverNeue-info-4Ul {\n  min-width: 0;\n  padding-right: 15px;\n  text-align: left;\n}\n.ProjectCoverNeue-icon-vNS {\n  margin-right: 5px;\n}\n.ProjectCoverNeue-icon-vNS:not(:first-child) {\n    margin-left: 12px;\n}\n.ProjectCoverNeue-controlsAndPrivacyContainer-20r {\n  display: -webkit-box;\n  display: flex;\n  left: 15px;\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  z-index: 1;\n}\n.ProjectCoverNeue-privacyLockContainer-1Jv {\n  position: absolute;\n  right: 0;\n}\n.ProjectCoverNeue-coverWithFlags-1Aq:hover .ProjectCoverNeue-privacyLockContainer-1Jv {\n    display: none;\n}\n.ProjectCoverNeue-wrapper-27j {\n  background-color: #f2f2f2;\n  position: relative;\n}\n.ProjectCoverNeue-root-166 {\n  position: relative;\n}\n.ProjectCoverNeue-flagged-aC4 .ProjectCoverNeue-visibleStatsAndOwners-2Av,\n.ProjectCoverNeue-flagged-aC4 .ProjectCoverNeue-cover-3Ni {\n  opacity: 0;\n  z-index: -1;\n}\n.ProjectCoverNeue-root-166:not(.ProjectCoverNeue-noConstraints-1Mx) {\n  max-width: 404px;\n  min-width: 145px;\n}\n.ProjectCoverNeue-statsVisible-19j {\n  position: relative;\n}\n.ProjectCoverNeue-statsVisible-19j .ProjectCoverNeue-details-yQ_ {\n    padding-bottom: 10px;\n}\n.ProjectCoverNeue-statsVisible-19j .ProjectCoverNeue-visibleStatsAndOwners-2Av {\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    min-height: 45px;\n    padding-bottom: 10px;\n    padding-top: 10px;\n}\n.ProjectCoverNeue-statsVisible-19j .ProjectCoverNeue-visibleStatsAndOwners-2Av .ProjectCoverNeue-ownersContainer-3Go {\n      -webkit-box-flex: 1;\n              flex: 1;\n      max-width: calc(404px - 130px);\n      min-width: 0;\n}\n.ProjectCoverNeue-statsVisible-19j .ProjectCoverNeue-visibleStatsAndOwners-2Av .ProjectCoverNeue-owners-1qo {\n      font-size: 13px;\n      font-weight: bold;\n}\n.ProjectCoverNeue-statsVisible-19j .ProjectCoverNeue-visibleStats-1lK {\n    color: #696969;\n    margin-left: 10px;\n    margin-top: 2px;\n    max-width: 130px;\n}\n.ProjectCoverNeue-statsVisible-19j .ProjectCoverNeue-visibleStats-1lK .ProjectCoverNeue-icon-vNS {\n      fill: #696969;\n}\n.ProjectCoverNeue-details-yQ_ {\n  background: -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(81%, rgba(0, 0, 0, 0.6)));\n  background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.6) 81%);\n  margin-top: auto;\n  padding: 30px 15px 18px;\n  border-radius: 0 0 4px 4px;\n  flex-shrink: 0;\n}\n.ProjectCoverNeue-image-1MZ {\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear;\n  width: 100%;\n  will-change: transform;\n}\n.ProjectCoverNeue-loaded-26R .ProjectCoverNeue-image-1MZ {\n    will-change: auto;\n}\n.ProjectCoverNeue-draftControls-2_f,\n.ProjectCoverNeue-draftDetails-27O {\n  background: rgba(0, 0, 0, 0.5);\n}\n.ProjectCoverNeue-draftDetails-27O {\n  padding-top: 0;\n}\n.ProjectCoverNeue-draftControls-2_f {\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 4px 4px 0 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n}\n.ProjectCoverNeue-draftControl-25C {\n  margin-bottom: 10px;\n  min-width: 150px;\n}\n.ProjectCoverNeue-draftControlText-2Pk {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.ProjectCoverNeue-draftModified-1qY {\n  font-size: 12px;\n  font-weight: bold;\n  margin-top: 10px;\n}\n.ProjectCoverNeue-curationMarks-3rK {\n  display: -webkit-box;\n  display: flex;\n  flex-flow: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  left: 0;\n  position: absolute;\n  top: 15px;\n  width: 100%;\n}\n.ProjectCoverNeue-curationMark-2t6 {\n  background: #fff;\n  border-radius: 3px;\n  display: inline-block;\n  font-size: 12px;\n  font-weight: bold;\n  margin: 0 2px 2px 0;\n  padding: 5px 7px;\n}\n.ProjectCoverNeue-served-zg8 {\n  color: #f00;\n}\n.ProjectCoverNeue-queued-nKO {\n  background: #00d646;\n  color: #fff;\n}\n.ProjectCoverNeue-topRight-Ob1 {\n  max-width: 50%;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n@media (max-width: 603px) {\n.ProjectCoverNeue-hideDetailsMobile-10a {\n    display: none;\n}\n}\n.ProjectCoverNeue-icon-vNS {\n  fill: #fff;\n  position: relative;\n}\n.ProjectCoverNeue-appreciateIcon-WrB {\n  top: -2px;\n}\n.ProjectCoverNeue-viewsIcon-2EU {\n  top: -1px;\n}\n.ProjectCoverNeue-featureFlagsContainer-312 {\n  display: -webkit-box;\n  display: flex;\n  position: absolute;\n  right: 10px;\n  top: 0;\n  z-index: 2;\n}\n.ProjectCoverNeue-feature-1Du {\n  margin-left: 10px;\n}\n", "" ]), 
        t.locals = {
            image: "ProjectCoverNeue-image-1MZ",
            coverLink: "ProjectCoverNeue-coverLink-102",
            details: "ProjectCoverNeue-details-yQ_",
            info: "ProjectCoverNeue-info-4Ul",
            icon: "ProjectCoverNeue-icon-vNS",
            controlsAndPrivacyContainer: "ProjectCoverNeue-controlsAndPrivacyContainer-20r",
            privacyLockContainer: "ProjectCoverNeue-privacyLockContainer-1Jv",
            coverWithFlags: "ProjectCoverNeue-coverWithFlags-1Aq",
            wrapper: "ProjectCoverNeue-wrapper-27j",
            root: "ProjectCoverNeue-root-166",
            flagged: "ProjectCoverNeue-flagged-aC4",
            visibleStatsAndOwners: "ProjectCoverNeue-visibleStatsAndOwners-2Av",
            cover: "ProjectCoverNeue-cover-3Ni",
            noConstraints: "ProjectCoverNeue-noConstraints-1Mx",
            statsVisible: "ProjectCoverNeue-statsVisible-19j",
            ownersContainer: "ProjectCoverNeue-ownersContainer-3Go",
            owners: "ProjectCoverNeue-owners-1qo",
            visibleStats: "ProjectCoverNeue-visibleStats-1lK",
            loaded: "ProjectCoverNeue-loaded-26R",
            draftControls: "ProjectCoverNeue-draftControls-2_f",
            draftDetails: "ProjectCoverNeue-draftDetails-27O",
            draftControl: "ProjectCoverNeue-draftControl-25C",
            draftControlText: "ProjectCoverNeue-draftControlText-2Pk",
            draftModified: "ProjectCoverNeue-draftModified-1qY",
            curationMarks: "ProjectCoverNeue-curationMarks-3rK",
            curationMark: "ProjectCoverNeue-curationMark-2t6",
            served: "ProjectCoverNeue-served-zg8",
            queued: "ProjectCoverNeue-queued-nKO",
            topRight: "ProjectCoverNeue-topRight-Ob1",
            hideDetailsMobile: "ProjectCoverNeue-hideDetailsMobile-10a",
            appreciateIcon: "ProjectCoverNeue-appreciateIcon-WrB",
            viewsIcon: "ProjectCoverNeue-viewsIcon-2EU",
            featureFlagsContainer: "ProjectCoverNeue-featureFlagsContainer-312",
            feature: "ProjectCoverNeue-feature-1Du"
        };
    },
    742: function(e, t, n) {
        e.exports = n(2)(125);
    },
    781: function(e, t, n) {
        "use strict";
        var r = n(727), o = n(742), i = n(419);
        e.exports = function(e) {
            for (var t = r(this), n = i(t.length), a = arguments.length, s = o(a > 1 ? arguments[1] : void 0, n), l = a > 2 ? arguments[2] : void 0, c = void 0 === l ? n : o(l, n); c > s; ) t[s++] = e;
            return t;
        };
    },
    814: function(e, t, n) {
        var r = n(60), o = n(781), i = n(126);
        r({
            target: "Array",
            proto: !0
        }, {
            fill: o
        }), i("fill");
    },
    939: function(e, t, n) {
        (function(e) {
            var r, o, i;
            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                })(e);
            }
            !function(s, l) {
                "object" === a(t) && "object" === a(e) ? e.exports = l("VirtualList", n(17)) : (o = [ n(17) ], 
                r = l.bind(s, "VirtualList"), void 0 === (i = "function" == typeof r ? r.apply(t, o) : r) || (e.exports = i));
            }(this, function(e, t) {
                "object" === a(t) && "function" == typeof t.default && (t = t.default);
                var n = function(e, t, n) {
                    var r;
                    return function() {
                        var o = this, i = arguments, a = n && !r;
                        clearTimeout(r), r = setTimeout(function() {
                            r = null, n || e.apply(o, i);
                        }, t), a && e.apply(o, i);
                    };
                };
                return t.component(e, {
                    props: {
                        size: {
                            type: Number,
                            required: !0
                        },
                        remain: {
                            type: Number,
                            required: !0
                        },
                        rtag: {
                            type: String,
                            default: "div"
                        },
                        wtag: {
                            type: String,
                            default: "div"
                        },
                        wclass: {
                            type: String,
                            default: ""
                        },
                        pagemode: {
                            type: Boolean,
                            default: !1
                        },
                        scrollelement: {
                            type: "undefined" == typeof window ? Object : HTMLElement,
                            default: null
                        },
                        start: {
                            type: Number,
                            default: 0
                        },
                        offset: {
                            type: Number,
                            default: 0
                        },
                        variable: {
                            type: [ Function, Boolean ],
                            default: !1
                        },
                        bench: {
                            type: Number,
                            default: 0
                        },
                        debounce: {
                            type: Number,
                            default: 0
                        },
                        totop: {
                            type: [ Function, Boolean ],
                            default: !1
                        },
                        tobottom: {
                            type: [ Function, Boolean ],
                            default: !1
                        },
                        onscroll: {
                            type: [ Function, Boolean ],
                            default: !1
                        },
                        item: {
                            type: Object,
                            default: null
                        },
                        itemcount: {
                            type: Number,
                            default: 0
                        },
                        itemprops: {
                            type: Function,
                            default: function() {}
                        }
                    },
                    watch: {
                        size: function() {
                            this.changeProp = "size";
                        },
                        remain: function() {
                            this.changeProp = "remain";
                        },
                        bench: function() {
                            this.changeProp = "bench", this.itemModeForceRender();
                        },
                        start: function() {
                            this.changeProp = "start", this.itemModeForceRender();
                        },
                        offset: function() {
                            this.changeProp = "offset", this.itemModeForceRender();
                        },
                        itemcount: function() {
                            this.changeProp = "itemcount", this.itemModeForceRender();
                        },
                        scrollelement: function(e, t) {
                            this.pagemode || (t && this.removeScrollListener(t), e && this.addScrollListener(e));
                        }
                    },
                    created: function() {
                        var e = this.start >= this.remain ? this.start : 0, t = this.remain + (this.bench || this.remain), n = Object.create(null);
                        n.direction = "", n.scrollTop = 0, n.start = e, n.end = e + t - 1, n.keeps = t, 
                        n.total = 0, n.offsetAll = 0, n.paddingTop = 0, n.paddingBottom = 0, n.varCache = {}, 
                        n.varAverSize = 0, n.varLastCalcIndex = 0, this.delta = n;
                    },
                    mounted: function() {
                        if (this.pagemode ? this.addScrollListener(window) : this.scrollelement && this.addScrollListener(this.scrollelement), 
                        this.start) {
                            var e = this.getZone(this.start).start;
                            this.setScrollTop(this.variable ? this.getVarOffset(e) : e * this.size);
                        } else this.offset && this.setScrollTop(this.offset);
                    },
                    beforeDestroy: function() {
                        this.pagemode ? this.removeScrollListener(window) : this.scrollelement && this.removeScrollListener(this.scrollelement);
                    },
                    beforeUpdate: function() {
                        var e = this.delta;
                        e.keeps = this.remain + (this.bench || this.remain);
                        var t = "start" === this.changeProp ? this.start : e.start, n = this.getZone(t);
                        if (this.changeProp && [ "start", "size", "offset" ].includes(this.changeProp)) {
                            var r = "offset" === this.changeProp ? this.offset : this.variable ? this.getVarOffset(n.isLast ? e.total : n.start) : n.isLast && e.total - t <= this.remain ? e.total * this.size : t * this.size;
                            this.$nextTick(this.setScrollTop.bind(this, r));
                        }
                        (this.changeProp || e.end !== n.end || t !== n.start) && (this.changeProp = "", 
                        e.end = n.end, e.start = n.start, this.forceRender());
                    },
                    methods: {
                        addScrollListener: function(e) {
                            this.scrollHandler = this.debounce ? n(this.onScroll.bind(this), this.debounce) : this.onScroll, 
                            e.addEventListener("scroll", this.scrollHandler, !1);
                        },
                        removeScrollListener: function(e) {
                            e.removeEventListener("scroll", this.scrollHandler, !1);
                        },
                        onScroll: function(e) {
                            var t, n = this.delta, r = this.$refs.vsl;
                            if (this.pagemode) t = -this.$el.getBoundingClientRect().top; else if (this.scrollelement) {
                                var o = this.scrollelement.getBoundingClientRect(), i = this.$el.getBoundingClientRect();
                                t = o.top - i.top;
                            } else t = (r.$el || r).scrollTop || 0;
                            n.direction = t > n.scrollTop ? "D" : "U", n.scrollTop = t, n.total > n.keeps ? this.updateZone(t) : n.end = n.total - 1;
                            var a = n.offsetAll;
                            if (this.onscroll) {
                                var s = Object.create(null);
                                s.offset = t, s.offsetAll = a, s.start = n.start, s.end = n.end, this.onscroll(e, s);
                            }
                            !t && n.total && this.fireEvent("totop"), t >= a && this.fireEvent("tobottom");
                        },
                        updateZone: function(e) {
                            var t = this.delta, n = this.variable ? this.getVarOvers(e) : Math.floor(e / this.size);
                            "U" === t.direction && (n = n - this.remain + 1);
                            var r = this.getZone(n), o = this.bench || this.remain, i = 1 === Math.abs(n - t.start - o);
                            !i && n - t.start <= o && !r.isLast && n > t.start || (i || r.start !== t.start || r.end !== t.end) && (t.end = r.end, 
                            t.start = r.start, this.forceRender());
                        },
                        getZone: function(e) {
                            var t, n = this.delta;
                            e = parseInt(e, 10), e = Math.max(0, e);
                            var r = n.total - n.keeps, o = e <= n.total && e >= r || e > n.total;
                            return {
                                end: (t = o ? Math.max(0, r) : e) + n.keeps - 1,
                                start: t,
                                isLast: o
                            };
                        },
                        forceRender: function() {
                            var e = this;
                            window.requestAnimationFrame(function() {
                                e.$forceUpdate();
                            });
                        },
                        itemModeForceRender: function() {
                            this.item && this.forceRender();
                        },
                        getVarOvers: function(e) {
                            for (var t = 0, n = 0, r = 0, o = this.delta, i = o.total; t <= i; ) {
                                if (n = t + Math.floor((i - t) / 2), r = this.getVarOffset(n), o.varAverSize || (o.varAverSize = Math.floor(r / n)), 
                                r === e) return n;
                                r < e ? t = n + 1 : r > e && (i = n - 1);
                            }
                            return t > 0 ? --t : 0;
                        },
                        getVarOffset: function(e, t) {
                            var n = this.delta, r = n.varCache[e];
                            if (!t && r) return r.offset;
                            for (var o = 0, i = 0; i < e; i++) {
                                var a = this.getVarSize(i, t);
                                n.varCache[i] = {
                                    size: a,
                                    offset: o
                                }, o += a;
                            }
                            return n.varLastCalcIndex = Math.max(n.varLastCalcIndex, e - 1), n.varLastCalcIndex = Math.min(n.varLastCalcIndex, n.total - 1), 
                            o;
                        },
                        getVarSize: function(e, t) {
                            var n = this.delta.varCache[e];
                            if (!t && n) return n.size;
                            if ("function" == typeof this.variable) return this.variable(e) || 0;
                            var r = this.item ? this.$children[e] ? this.$children[e].$vnode : null : this.$slots.default[e], o = r && r.data && r.data.style;
                            if (o && o.height) {
                                var i = o.height.match(/^(.*)px$/);
                                return i && +i[1] || 0;
                            }
                            return 0;
                        },
                        getVarPaddingTop: function() {
                            return this.getVarOffset(this.delta.start);
                        },
                        getVarPaddingBottom: function() {
                            var e = this.delta, t = e.total - 1;
                            return e.total - e.end <= e.keeps || e.varLastCalcIndex === t ? this.getVarOffset(t) - this.getVarOffset(e.end) : (e.total - e.end) * (e.varAverSize || this.size);
                        },
                        getVarAllHeight: function() {
                            var e = this.delta;
                            return e.total - e.end <= e.keeps || e.varLastCalcIndex === e.total - 1 ? this.getVarOffset(e.total) : this.getVarOffset(e.start) + (e.total - e.end) * (e.varAverSize || this.size);
                        },
                        updateVariable: function(e) {
                            this.getVarOffset(e, !0);
                        },
                        fireEvent: function(e) {
                            this[e] && this[e]();
                        },
                        setScrollTop: function(e) {
                            if (this.pagemode) window.scrollTo(0, e); else if (this.scrollelement) this.scrollelement.scrollTo(0, e); else {
                                var t = this.$refs.vsl;
                                t && ((t.$el || t).scrollTop = e);
                            }
                        },
                        filter: function(e) {
                            var t, n, r, o = this.delta, i = this.$slots.default || [];
                            this.item ? (o.total = this.itemcount, o.keeps > o.total && (o.end = o.total - 1)) : (i.length || (o.start = 0), 
                            o.total = i.length);
                            var a = o.total > o.keeps;
                            this.variable ? (r = this.getVarAllHeight(), t = a ? this.getVarPaddingTop() : 0, 
                            n = a ? this.getVarPaddingBottom() : 0) : (r = this.size * o.total, t = this.size * (a ? o.start : 0), 
                            n = this.size * (a ? o.total - o.keeps : 0) - t), n < this.size && (n = 0), o.paddingTop = t, 
                            o.paddingBottom = n, o.offsetAll = r - this.size * this.remain;
                            for (var s = [], l = o.start; l < o.total && l <= Math.ceil(o.end); l++) {
                                var c = null;
                                c = this.item ? e(this.item, this.itemprops(l)) : i[l], s.push(c);
                            }
                            return s;
                        }
                    },
                    render: function(e) {
                        var t = this.debounce, r = this.filter(e), o = this.delta, i = o.paddingTop, a = o.paddingBottom, s = e(this.wtag, {
                            style: {
                                display: "block",
                                "padding-top": i + "px",
                                "padding-bottom": a + "px"
                            },
                            class: this.wclass,
                            attrs: {
                                role: "group"
                            }
                        }, r);
                        return this.pagemode || this.scrollelement ? s : e(this.rtag, {
                            ref: "vsl",
                            style: {
                                display: "block",
                                "overflow-y": "auto",
                                height: this.size * this.remain + "px"
                            },
                            on: {
                                "&scroll": t ? n(this.onScroll.bind(this), t) : this.onScroll
                            }
                        }, [ s ]);
                    }
                });
            });
        }).call(this, n(88)(e));
    },
    940: function(e, t, n) {
        "use strict";
        var r = n(639), o = n.n(r);
        t.default = o.a;
    },
    941: function(e, t, n) {
        (t = e.exports = n(188)(!1)).push([ e.i, ".ContentGrid-root-2NE {\n  background-color: #fff;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 24px;\n  padding-right: 24px;\n}\n@media (max-width: 603px) {\n.ContentGrid-root-2NE {\n      margin-left: 20px;\n      margin-right: 20px;\n}\n}\n.ContentGrid-root-2NE .ContentGrid-gridItem-2Ad {\n    position: relative;\n    width: 100%;\n    z-index: 0;\n}\n.ContentGrid-root-2NE .ContentGrid-gridItem-2Ad:hover {\n      z-index: 1;\n}\n@media screen and (min-width: 604px) and (max-width: 876px) {\n.ContentGrid-root-2NE .ContentGrid-gridItem-2Ad {\n        width: 50%;\n}\n}\n@media screen and (min-width: 877px) and (max-width: 1300px) {\n.ContentGrid-root-2NE .ContentGrid-gridItem-2Ad {\n        width: 33.33333%;\n}\n}\n@media screen and (min-width: 1301px) and (max-width: 1724px) {\n.ContentGrid-root-2NE .ContentGrid-gridItem-2Ad {\n        width: 25%;\n}\n}\n@media screen and (min-width: 1725px) and (max-width: 2148px) {\n.ContentGrid-root-2NE .ContentGrid-gridItem-2Ad {\n        width: 20%;\n}\n}\n@media screen and (min-width: 2149px) and (max-width: 2592px) {\n.ContentGrid-root-2NE .ContentGrid-gridItem-2Ad {\n        width: 16.66667%;\n}\n}\n@media screen and (min-width: 2593px) {\n.ContentGrid-root-2NE .ContentGrid-gridItem-2Ad {\n        width: 14.28571%;\n}\n}\n@media (max-width: null) {\n.ContentGrid-root-2NE .ContentGrid-gridItem-2Ad {\n        left: auto;\n}\n}\n.ContentGrid-list-3IF {\n  width: 100%;\n}\n.ContentGrid-chunk-sXM {\n  display: -webkit-box;\n  display: flex;\n}\n.ContentGrid-gridWrap-2bc {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding-bottom: 80px;\n}\n.ContentGrid-gridWrap-2bc .ContentGrid-anchor-2aG {\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  visibility: hidden;\n}\n.ContentGrid-grid-1EY {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-left: -10px;\n  margin-right: -10px;\n  margin-top: -10px;\n  position: relative;\n}\n.ContentGrid-observerGrid-16o .ContentGrid-grid-1EY {\n    -webkit-box-pack: left;\n            justify-content: left;\n}\n.ContentGrid-observerGrid-16o {\n  height: auto;\n}\n.ContentGrid-isDynamic-6PO {\n  height: 100vh;\n}\n.ContentGrid-gridItem-2Ad {\n  padding: 10px;\n}\n.ContentGrid-root-2NE.ContentGrid-isDynamic-6PO .ContentGrid-gridItem-2Ad {\n  left: 0;\n  position: absolute;\n  top: 0;\n  z-index: 0;\n}\n.ContentGrid-root-2NE.ContentGrid-isDynamic-6PO .ContentGrid-gridItem-2Ad.ContentGrid-focused-2iW, .ContentGrid-root-2NE.ContentGrid-isDynamic-6PO .ContentGrid-gridItem-2Ad:hover {\n    z-index: 1;\n}\n", "" ]), 
        t.locals = {
            root: "ContentGrid-root-2NE",
            gridItem: "ContentGrid-gridItem-2Ad",
            list: "ContentGrid-list-3IF",
            chunk: "ContentGrid-chunk-sXM",
            gridWrap: "ContentGrid-gridWrap-2bc",
            anchor: "ContentGrid-anchor-2aG",
            grid: "ContentGrid-grid-1EY",
            observerGrid: "ContentGrid-observerGrid-16o",
            isDynamic: "ContentGrid-isDynamic-6PO",
            focused: "ContentGrid-focused-2iW"
        };
    }
} ]);