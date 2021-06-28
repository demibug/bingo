var __extends = this && this.__extends || function () {
    var e = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function (e, t) {
        e.__proto__ = t
    }
     || function (e, t) {
        for (var i in t)
            t.hasOwnProperty(i) && (e[i] = t[i])
    };
    return function (t, i) {
        function n() {
            this.constructor = t
        }
        e(t, i),
        t.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
    }
}
();
!function () {
    return function e(t, i, n) {
        function s(o, r) {
            if (!i[o]) {
                if (!t[o]) {
                    var l = "function" == typeof require && require;
                    if (!r && l)
                        return l(o, !0);
                    if (a)
                        return a(o, !0);
                    var h = new Error("Cannot find module '" + o + "'");
                    throw h.code = "MODULE_NOT_FOUND",
                    h
                }
                var p = i[o] = {
                    exports: {}
                };
                t[o][0].call(p.exports, function (e) {
                    return s(t[o][1][e] || e)
                }, p, p.exports, e, t, i, n)
            }
            return i[o].exports
        }
        for (var a = "function" == typeof require && require, o = 0; o < n.length; o++)
            s(n[o]);
        return s
    }
}
()({
    1: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("./Defines/BingoDefines"),
            s = e("./Utils/BingoDevice"),
            a = e("./Events/BingoEvent"),
            o = e("./Defines/BingoEventDefine"),
            r = e("./BingoSdkConfig"),
            l = e("./BingoUIManager"),
            h = e("./Defines/BingoUIDefine"),
            p = e("./Defines/BingoResDefine"),
            m = e("./Utils/BingoDebug"),
            d = e("./Platform/BingoPlatform"),
            _ = e("./Defines/BingoSuspensionDefine"),
            c = e("./UI/SuspensionIcon/SuspensionMoreGameBtn"),
            u = e("./UI/SuspensionIcon/SuspensionIconBtn");
            class g extends Laya.EventDispatcher {
                constructor() {
                    if (super(), this.m_bInit = !1, this.m_atlasLoadCount = 0, this.exportData = null, this.adData = null, this.arrBannerID = null, this.m_MatchIconNum = 0, this.m_FinishIconNum = 0, this.FinishIconTime = 0, g.isDebug) {
                        let e = 1386,
                        t = 640;
                        window.Laya3D ? Laya3D.init(e, t) : Laya.init(e, t, Laya.WebGL),
                        Laya.stage.scaleMode = "fixedwidth",
                        Laya.stage.screenMode = "horizontal",
                        Laya.stage.alignV = "top",
                        Laya.stage.alignH = "left",
                        Laya.Stat.show(),
                        this.initSdk(e, t, !0)
                    }
                }
                initSdk(e, t, i, a = null) {
                    n.default.DEFAULT_WIDTH = e,
                    n.default.DEFAULT_HEIGHT = t,
                    this.m_bInit || (this.m_bInit = !0, this.initAtlas(), r.default.init(), r.default.isHorizon = n.default.DEFAULT_WIDTH > n.default.DEFAULT_HEIGHT, s.default.updateScreenSize(Laya.stage.width, Laya.stage.height), l.default.inst.enter(), d.default.inst.platform.init(a), Laya.stage.on(Laya.Event.RESIZE, this, this.onResize), Laya.stage.on(Laya.Event.FOCUS, this, this.onFocus), Laya.stage.on(Laya.Event.BLUR, this, this.onBlur))
                }
                registEvent(e, t, i, n, s) {
                    a.default.registEvent(e, t, i, n, s)
                }
                unregistEvent(e, t, i, n) {
                    a.default.unregistEvent(e, t, i, n)
                }
                showCancelExport(e = null, t = null) {
                    let i = d.default.inst.platform;
                    if (null != i && !i.isEnable(i.cancelExportEnable, i.cancelExportWhitelist))
                        return !1;
                    let n = r.default.isHorizon ? h.default.BINGO_UI_CANCEL_EXPORT_H : h.default.BINGO_UI_CANCEL_EXPORT_V;
                    return l.default.inst.showUI(n, null, t, e),
                    !0
                }
                closeCancelExport() {
                    let e = r.default.isHorizon ? h.default.BINGO_UI_CANCEL_EXPORT_H : h.default.BINGO_UI_CANCEL_EXPORT_V;
                    this.closeUI(e)
                }
                showFinishExport(e = null, t = null) {
                    let i = d.default.inst.platform;
                    if (null != i && !i.isEnable(i.finishExportEnable, i.finishExportWhitelist))
                        return !1;
                    let n = r.default.isHorizon ? h.default.BINGO_UI_FINISH_EXPORT_H : h.default.BINGO_UI_FINISH_EXPORT_V;
                    return l.default.inst.showUI(n, null, t, e),
                    !0
                }
                closeFinishExport() {
                    let e = r.default.isHorizon ? h.default.BINGO_UI_FINISH_EXPORT_H : h.default.BINGO_UI_FINISH_EXPORT_V;
                    this.closeUI(e)
                }
                showStartupExport(e = null, t = null) {
                    let i = d.default.inst.platform;
                    if (null != i && !i.isEnable(i.startupExportEnable, i.startupExportWhitelist))
                        return !1;
                    let n = r.default.isHorizon ? h.default.BINGO_UI_STARTUP_EXPORT_H : h.default.BINGO_UI_STARTUP_EXPORT_V;
                    return l.default.inst.showUI(n, null, t, e),
                    !0
                }
                closeStartupExport() {
                    let e = r.default.isHorizon ? h.default.BINGO_UI_STARTUP_EXPORT_H : h.default.BINGO_UI_STARTUP_EXPORT_V;
                    this.closeUI(e)
                }
                showStartupBannerClick(e = null, t = null) {
                    let i = d.default.inst.platform;
                    if (null != i && !i.isEnable(i.startupBannerEnable, i.startupBannerWhitelist))
                        return !1;
                    let n = r.default.isHorizon ? h.default.BINGO_UI_COMBO_H : h.default.BINGO_UI_COMBO_V;
                    return l.default.inst.showUI(n, null, t, e),
                    !0
                }
                closeStartupBannerClick() {
                    let e = r.default.isHorizon ? h.default.BINGO_UI_COMBO_H : h.default.BINGO_UI_COMBO_V;
                    this.closeUI(e)
                }
                showFinishBannerClick(e = null, t = null) {
                    let i = d.default.inst.platform;
                    if (null != i && !i.isEnable(i.finishBannerEnable, i.finishBannerWhitelist))
                        return !1;
                    let n = r.default.isHorizon ? h.default.BINGO_UI_FINISH_COMBO_H : h.default.BINGO_UI_FINISH_COMBO_V;
                    return l.default.inst.showUI(n, null, t, e),
                    !0
                }
                closeFinishBannerClick() {
                    let e = r.default.isHorizon ? h.default.BINGO_UI_FINISH_COMBO_H : h.default.BINGO_UI_FINISH_COMBO_V;
                    this.closeUI(e)
                }
                showRecommendedExport(e = null, t = null) {
                    let i = d.default.inst.platform;
                    if (null != i && !i.isEnable(i.recommendedExportEnable, i.recommendedExportWhitelist))
                        return !1;
                    let n = r.default.isHorizon ? h.default.BINGO_UI_RECOMMENDED_EXPORT_H : h.default.BINGO_UI_RECOMMENDED_EXPORT_V;
                    return l.default.inst.showUI(n, null, t, e),
                    !0
                }
                closeRecommendedExport() {
                    let e = r.default.isHorizon ? h.default.BINGO_UI_RECOMMENDED_EXPORT_H : h.default.BINGO_UI_RECOMMENDED_EXPORT_V;
                    this.closeUI(e)
                }
                showInitVideo(e, t = null) {
                    let i = d.default.inst.platform;
                    return !(null != i && !i.isEnable(i.initVideoEnable, i.initVideoWhitelist)) && (d.default.inst.platform.showVideo(e, t), !0)
                }
                showStartupVideo(e, t = null) {
                    let i = d.default.inst.platform;
                    return !(null != i && !i.isEnable(i.startupVideoEnable, i.startupVideoWhitelist)) && (d.default.inst.platform.showVideo(e, t), !0)
                }
                showFinishVideo(e, t = null) {
                    let i = d.default.inst.platform;
                    return !(null != i && !i.isEnable(i.finishVideoEnable, i.finishVideoWhitelist)) && (d.default.inst.platform.showVideo(e, t), !0)
                }
                addMainSuspensionIcon(e, t) {
                    let i = d.default.inst.platform;
                    if (null != i && !i.isEnable(i.mainHangEnable, i.mainHangWhitelist))
                        return !1;
                    let n = new c.default;
                    return e.addChild(n),
                    n.SuspensionMoreGameBtn(_.default.SUSPENSION_MAIN, t),
                    !0
                }
                addMatchSuspensionIcon(e, t) {
                    let i = d.default.inst.platform;
                    if (null != i && !i.isEnable(i.matchHangEnable, i.matchHangWhitelist))
                        return !1;
                    this.m_MatchIconNum++;
                    let n = new u.default;
                    return e.addChild(n),
                    n.addSuspensionIcon(_.default.SUSPENSION_MATCH, t, this.m_MatchIconNum),
                    !0
                }
                addGameSuspensionIcon(e, t) {
                    let i = d.default.inst.platform;
                    if (null != i && !i.isEnable(i.gameplayHangEnable, i.gameplayHangWhitelist))
                        return !1;
                    let n = new c.default;
                    return e.addChild(n),
                    n.SuspensionMoreGameBtn(_.default.SUSPENSION_GAME, t),
                    !0
                }
                addEndSuspensionIcon(e, t) {
                    let i = d.default.inst.platform;
                    if (null != i && !i.isEnable(i.finishHangEnable, i.finishHangWhitelist))
                        return !1;
                    this.m_FinishIconNum++;
                    let n = new u.default;
                    return e.addChild(n),
                    n.addSuspensionIcon(_.default.SUSPENSION_END, t, this.m_FinishIconNum),
                    !0
                }
                addDrawerSuspensionIcon(e, t) {
                    let i = d.default.inst.platform;
                    if (null != i && !i.isEnable(i.drawerHangEnable, i.drawerHangWhitelist))
                        return !1;
                    let n = new c.default;
                    return e.addChild(n),
                    n.SuspensionMoreGameBtn(_.default.SUSPENSION_DRAWER, t),
                    !0
                }
                getSDKWhite() {
                    let e = d.default.inst.platform;
                    return !!e && e.isWhitelist
                }
                showSDKVideo(e, t = null) {
                    d.default.inst.platform.showVideo(e, t)
                }
                showSDKBanner() {
                    d.default.inst.platform.showBanner()
                }
                hideSDKBanner() {
                    d.default.inst.platform.closeBanner()
                }
                startBannerExposure() {
                    d.default.inst.platform.startBannerExposure()
                }
                stopBannerExposure() {
                    d.default.inst.platform.stopBannerExposure()
                }
                cpComboClickEnable() {
                    return d.default.inst.platform.isEnable(d.default.inst.platform.cpComboClickEnable, d.default.inst.platform.cpComboClickWhitelist)
                }
                closeUI(e) {
                    a.default.dispatchEvent(o.default.UI_CLOSE, e)
                }
                initAtlas() {
                    Laya.loader.load(p.default.getUIAtlasURL() + h.default.BINGO_UI_COMMON_ATLAS + ".atlas", Laya.Handler.create(this, this.onInitAtlas), null, Laya.Loader.ATLAS)
                }
                onInitAtlas() {
                    let e = p.default.getUIAtlasURL() + h.default.BINGO_UI_COMMON_ATLAS + ".atlas";
                    null == Laya.loader.getRes(e) ? (this.m_atlasLoadCount <= 3 ? this.initAtlas() : m.default.error("load atlas fail !!"), this.m_atlasLoadCount++) : g.isDebug && l.default.inst.showUI(h.default.BINGO_UI_STARTUP_EXPORT_H, null, null, Laya.stage)
                }
                onResize() {
                    s.default.updateScreenSize(Laya.stage.width, Laya.stage.height),
                    a.default.dispatchEvent(o.default.RESIZE)
                }
                onFocus() {
                    a.default.dispatchEvent(o.default.FOCUS)
                }
                onBlur() {
                    a.default.dispatchEvent(o.default.BLUR)
                }
            }
            g.isDebug = !0,
            i.default = g
        }, {
            "./BingoSdkConfig": 2,
            "./BingoUIManager": 3,
            "./Defines/BingoDefines": 9,
            "./Defines/BingoEventDefine": 10,
            "./Defines/BingoResDefine": 11,
            "./Defines/BingoSuspensionDefine": 12,
            "./Defines/BingoUIDefine": 13,
            "./Events/BingoEvent": 14,
            "./Platform/BingoPlatform": 19,
            "./UI/SuspensionIcon/SuspensionIconBtn": 51,
            "./UI/SuspensionIcon/SuspensionMoreGameBtn": 52,
            "./Utils/BingoDebug": 53,
            "./Utils/BingoDevice": 54
        }
    ],
    2: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("./UI/BingoUIFullscreenImage"),
            s = e("./UI/BingoUIExportItem"),
            a = e("./UI/BingoUIScaleButton"),
            o = e("./UI/BingoUIWidthFillImage");
            class r {
                static init() {
                    var e = Laya.ClassUtils.regClass;
                    e("UI/BingoUIFullscreenImage.ts", n.default),
                    e("UI/BingoUIExportItem.ts", s.default),
                    e("UI/BingoUIScaleButton.ts", a.default),
                    e("UI/BingoUIWidthFillImage.ts", o.default)
                }
            }
            r.isHorizon = !1,
            i.default = r
        }, {
            "./UI/BingoUIExportItem": 26,
            "./UI/BingoUIFullscreenImage": 27,
            "./UI/BingoUIScaleButton": 28,
            "./UI/BingoUIWidthFillImage": 30
        }
    ],
    3: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("./Core/BingoUIState"),
            s = e("./Utils/BingoMap"),
            a = e("./Defines/BingoUIDefine"),
            o = e("./UI/CancelExport/BingoCancelExport_HState"),
            r = e("./UI/CancelExport/BingoCancelExport_VState"),
            l = e("./UI/ComboClick/BingoComboClick_HState"),
            h = e("./UI/FinishExport/BingoFinishExport_HState"),
            p = e("./UI/StartupExport/BingoStartupExport_HState"),
            m = e("./UI/ComboClick/BingoComboClick_VState"),
            d = e("./UI/FinishExport/BingoFinishExport_VState"),
            _ = e("./UI/StartupExport/BingoStartupExport_VState"),
            c = e("./UI/BingoFinishCombo/BingoFinishComboClick_VState"),
            u = e("./UI/BingoFinishCombo/BingoFinishComboClick_HState"),
            g = e("./UI/RecommendedExport/BingoRecommendedExport_VState"),
            I = e("./UI/RecommendedExport/BingoRecommendedExport_HState"),
            f = e("./Utils/BingoDebug");
            class y extends n.default {
                constructor() {
                    super(),
                    this.m_lstUIState = new Array,
                    this.m_mapStateClass = new s.default,
                    y._inst = this
                }
                static get inst() {
                    return this._inst || new y
                }
                onEnter() {
                    this.registUI()
                }
                onLeave() {}
                registUI() {
                    this.registStateClass(a.default.BINGO_UI_CANCEL_EXPORT_H, o.default),
                    this.registStateClass(a.default.BINGO_UI_CANCEL_EXPORT_V, r.default),
                    this.registStateClass(a.default.BINGO_UI_FINISH_EXPORT_H, h.default),
                    this.registStateClass(a.default.BINGO_UI_FINISH_EXPORT_V, d.default),
                    this.registStateClass(a.default.BINGO_UI_STARTUP_EXPORT_H, p.default),
                    this.registStateClass(a.default.BINGO_UI_STARTUP_EXPORT_V, _.default),
                    this.registStateClass(a.default.BINGO_UI_COMBO_H, l.default),
                    this.registStateClass(a.default.BINGO_UI_COMBO_V, m.default),
                    this.registStateClass(a.default.BINGO_UI_FINISH_COMBO_H, u.default),
                    this.registStateClass(a.default.BINGO_UI_FINISH_COMBO_V, c.default),
                    this.registStateClass(a.default.BINGO_UI_RECOMMENDED_EXPORT_H, I.default),
                    this.registStateClass(a.default.BINGO_UI_RECOMMENDED_EXPORT_V, g.default)
                }
                registStateClass(e, t) {
                    this.m_mapStateClass.set(e, t)
                }
                showUI(e, t, i, n) {
                    if (f.default.warn("frame : " + Laya.timer.currFrame + " openBingoUI UIID：" + e), this.m_mapStateClass.containsKey(e)) {
                        let s = this.m_mapStateClass.get(e),
                        a = this.createTempState(s, e, t, i, n);
                        null != a && a.enter()
                    }
                }
                closeTempState(e) {
                    f.default.warn("frame : " + Laya.timer.currFrame + " closeBingoUI UIID：" + e.viewID);
                    let t = this.m_lstUIState.indexOf(e);
                    -1 != t && this.m_lstUIState.splice(t, 1),
                    e.leave()
                }
                createTempState(e, t, i, n, s) {
                    let a = null,
                    o = this.getTempState(t);
                    return null != o ? (a = o).leave() : (a = new e, this.m_lstUIState.push(a)),
                    null != a && (a.viewID = t, a.data = i, a.closeHandler = n, a.parentSp = s),
                    a
                }
                getTempState(e) {
                    let t = null;
                    for (let i = 0; i < this.m_lstUIState.length; i++) {
                        let n = this.m_lstUIState[i];
                        if (null != n && n.viewID == e) {
                            t = n;
                            break
                        }
                    }
                    return t
                }
            }
            y._inst = null,
            i.default = y
        }, {
            "./Core/BingoUIState": 7,
            "./Defines/BingoUIDefine": 13,
            "./UI/BingoFinishCombo/BingoFinishComboClick_HState": 22,
            "./UI/BingoFinishCombo/BingoFinishComboClick_VState": 24,
            "./UI/CancelExport/BingoCancelExport_HState": 31,
            "./UI/CancelExport/BingoCancelExport_VState": 33,
            "./UI/ComboClick/BingoComboClick_HState": 35,
            "./UI/ComboClick/BingoComboClick_VState": 37,
            "./UI/FinishExport/BingoFinishExport_HState": 39,
            "./UI/FinishExport/BingoFinishExport_VState": 41,
            "./UI/RecommendedExport/BingoRecommendedExport_HState": 43,
            "./UI/RecommendedExport/BingoRecommendedExport_VState": 45,
            "./UI/StartupExport/BingoStartupExport_HState": 47,
            "./UI/StartupExport/BingoStartupExport_VState": 49,
            "./Utils/BingoDebug": 53,
            "./Utils/BingoMap": 55
        }
    ],
    4: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("../Utils/BingoDebug");
            i.default = class {
                constructor() {
                    this.m_currentState = null,
                    this.m_childStates = [],
                    this.m_parentState = null
                }
                get currentState() {
                    return this.m_currentState
                }
                get parentState() {
                    return this.m_parentState
                }
                enter() {
                    this.onEnter()
                }
                update() {
                    this.onUpdate(),
                    this.m_currentState && this.m_currentState.update()
                }
                leave() {
                    this.onLeave(),
                    this.clearStates()
                }
                onEnter() {}
                onUpdate() {}
                onLeave() {}
                setCurrentState(e) {
                    null != this.m_currentState && this.m_currentState.leave(),
                    null == e ? this.m_currentState = null : (this.m_currentState = e, this.m_currentState.enter())
                }
                createState(e) {
                    for (let t = 0; t < this.m_childStates.length; t++) {
                        let i = this.m_childStates[t];
                        if (null != i && i instanceof e)
                            return i
                    }
                    return null
                }
                addState(e) {
                    let t = this.createState(e);
                    return null == t && ((t = new e).m_parentState = this, this.m_childStates.push(t)),
                    t
                }
                removeState(e) {
                    if (null != e) {
                        let t = this.m_childStates.indexOf(e);
                        -1 != t && this.m_childStates.splice(t, 1)
                    }
                }
                clearStates() {
                    this.setCurrentState(null),
                    this.m_childStates && (this.m_childStates.length = 0)
                }
                changeState(e) {
                    null != e ? -1 != this.m_childStates.indexOf(e) ? this.setCurrentState(e) : n.default.log(typeof e + " state not found.") : this.setCurrentState(null)
                }
            }
        }, {
            "../Utils/BingoDebug": 53
        }
    ],
    5: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("./BingoUISprite"),
            s = e("../Utils/BingoMap"),
            a = e("../Defines/BingoResDefine"),
            o = e("../Utils/BingoDebug"),
            r = e("../Events/BingoEvent");
            i.default = class extends n.default {
                constructor(e = null) {
                    super(),
                    this.m_atlasName = null,
                    this.m_loadAtlasComplete = !1,
                    this.m_mapRegistEvent = null,
                    this.m_loadAtlasCount = 0,
                    this.LOAD_COUNT_MAX = 3,
                    null != e && (this.m_atlasName = e),
                    this.visible = !1
                }
                onCreate() {
                    this.loadAtlas(),
                    this.checkShow(!0)
                }
                onRemove() {
                    this.offAll(),
                    Laya.timer.clear(this, this.doShowUI),
                    this.clearAllRegistedEvent()
                }
                loadAtlas() {
                    if (null != this.m_atlasName) {
                        let e = a.default.getUIAtlasURL() + this.m_atlasName + ".atlas";
                        Laya.loader.load(e, Laya.Handler.create(this, this.onLoadAtlasHandler), null, Laya.Loader.ATLAS)
                    } else
                        this.m_loadAtlasComplete = !0, this.checkShow()
                }
                onLoadAtlasHandler() {
                    if (this.destroyed)
                        return;
                    let e = a.default.getUIAtlasURL() + this.m_atlasName + ".atlas";
                    Laya.loader.getRes(e) ? (this.m_loadAtlasComplete = !0, this.checkShow()) : this.m_loadAtlasCount > this.LOAD_COUNT_MAX ? o.default.error("load res fail : " + e) : (this.m_loadAtlasCount++, this.loadAtlas())
                }
                registEvent(e, t, i, n) {
                    if (null == e || null == t || null == i)
                        return;
                    null == this.m_mapRegistEvent && (this.m_mapRegistEvent = new s.default);
                    let a = new l;
                    a.caller = t,
                    a.callback = i,
                    r.default.registEvent(e, t, i, !1, n);
                    let o = null;
                    (o = this.m_mapRegistEvent.containsKey(e) ? this.m_mapRegistEvent.get(e) : []).push(a),
                    this.m_mapRegistEvent.set(e, o)
                }
                unregistEvent(e, t, i) {
                    if (null == e || null == t || null == i || null == this.m_mapRegistEvent)
                        return;
                    let n = this.m_mapRegistEvent.get(e);
                    for (let s = 0; s < n.length; s++) {
                        let a = n[s];
                        null != a && a.caller == t && a.callback == i && (r.default.unregistEvent(e, t, i, !1), n.splice(s, 1), s--)
                    }
                }
                clearAllRegistedEvent() {
                    if (null != this.m_mapRegistEvent) {
                        for (let e of this.m_mapRegistEvent.keys) {
                            let t = this.m_mapRegistEvent.get(e);
                            if (null != t)
                                for (let i = 0; i < t.length; i++) {
                                    let n = t[i];
                                    null != n.caller && null != n.callback && r.default.unregistEvent(e, n.caller, n.callback, !1)
                                }
                        }
                        this.m_mapRegistEvent.clear(),
                        this.m_mapRegistEvent = null
                    }
                }
                checkShow(e = !1) {
                    this.m_loadAtlasComplete && 0 == this.visible && (this.visible = !0, e ? Laya.timer.frameOnce(1, this, this.doShowUI) : this.doShowUI())
                }
                doShowUI() {
                    this.show()
                }
                show() {
                    this.onShow()
                }
            };
            class l {
                constructor() {
                    this.caller = null,
                    this.callback = null
                }
            }
        }, {
            "../Defines/BingoResDefine": 11,
            "../Events/BingoEvent": 14,
            "../Utils/BingoDebug": 53,
            "../Utils/BingoMap": 55,
            "./BingoUISprite": 6
        }
    ],
    6: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            i.default = class extends Laya.Sprite {
                constructor() {
                    super(),
                    this.on(Laya.Event.DISPLAY, this, this.onDisplay)
                }
                destroy(e = !0) {
                    this.m_create = !1,
                    Laya.timer.clearAll(this),
                    this.onRemove(),
                    super.destroy(e)
                }
                onCreate() {}
                onRemove() {}
                onDisplay() {
                    this.m_create || (this.m_create = !0, this.onCreate())
                }
            }
        }, {}
    ],
    7: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("./BingoState"),
            s = e("../Events/BingoEvent"),
            a = e("../Defines/BingoEventDefine"),
            o = e("../BingoUIManager");
            i.default = class extends n.default {
                constructor() {
                    super(...arguments),
                    this.viewID = 0,
                    this.data = null,
                    this.m_stateView = null,
                    this.closeHandler = null,
                    this.eventID = 0,
                    this.parentSp = null
                }
                enter() {
                    super.enter(),
                    s.default.registEvent(a.default.UI_CLOSE, this, this.onUIClose),
                    s.default.dispatchEvent(a.default.ON_UI_OPEN, this.viewID)
                }
                leave() {
                    super.leave(),
                    s.default.unregistEvent(a.default.UI_CLOSE, this, this.onUIClose),
                    this.m_stateView && (this.m_stateView.removeSelf(), this.m_stateView.destroyed || this.m_stateView.destroy(), this.m_stateView = null),
                    this.parentSp = null,
                    s.default.dispatchEvent(a.default.ON_UI_CLOSE, this.viewID),
                    this.closeHandler && this.closeHandler.runWith(this.eventID),
                    this.closeHandler = null
                }
                createTempStateView(e, t, i, n = null) {
                    null == i && (i = Laya.stage);
                    let s = new e(n);
                    return s.viewID = t,
                    this.m_stateView = s,
                    this.m_stateView.setUIState(this),
                    -1 == i.getChildIndex(s) && s.setParentSprite(i),
                    s
                }
                onUIClose(e) {
                    this.viewID == e && o.default.inst.closeTempState(this)
                }
            }
        }, {
            "../BingoUIManager": 3,
            "../Defines/BingoEventDefine": 10,
            "../Events/BingoEvent": 14,
            "./BingoState": 4
        }
    ],
    8: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("./BingoUIComponent"),
            s = e("../Events/BingoEvent"),
            a = e("../Defines/BingoEventDefine"),
            o = e("../Utils/BingoUtils"),
            r = e("../Defines/BingoDefines"),
            l = e("../Utils/BingoDevice"),
            h = e("../BingoSdkConfig");
            i.default = class extends n.default {
                constructor() {
                    super(...arguments),
                    this.viewID = 0,
                    this.m_uiView = null,
                    this.m_uiState = null,
                    this.m_parentSprite = null,
                    this.m_anchorTopLeft = null,
                    this.m_anchorTopCenter = null,
                    this.m_anchorTopRight = null,
                    this.m_anchorMiddleLeft = null,
                    this.m_anchorMiddleCenter = null,
                    this.m_anchorMiddleRight = null,
                    this.m_anchorBottomLeft = null,
                    this.m_anchorBottomCenter = null,
                    this.m_anchorBottomRight = null,
                    this.m_mapAnchorSprite = null
                }
                onCreate() {
                    this.registEvent(a.default.RESIZE, this, this.onResize),
                    this.on(a.default.ON_UI_SHOW, this, this.onShow),
                    super.onCreate()
                }
                onRemove() {
                    this.off(a.default.ON_UI_SHOW, this, this.onShow),
                    super.onRemove(),
                    this.m_uiView = null,
                    this.m_uiState = null
                }
                setUIState(e) {
                    this.m_uiState = e
                }
                setParentSprite(e) {
                    this.m_parentSprite = e,
                    e.addChild(this)
                }
                createUIView(e) {
                    let t = new e;
                    return this.m_uiView = t,
                    this.addChild(t),
                    this.m_anchorTopLeft = o.default.getChildByPath(this.m_uiView, r.default.ANCHOR_TOP_LEFT, !1),
                    this.m_anchorTopCenter = o.default.getChildByPath(this.m_uiView, r.default.ANCHOR_TOP_CENTER, !1),
                    this.m_anchorTopRight = o.default.getChildByPath(this.m_uiView, r.default.ANCHOR_TOP_RIGHT, !1),
                    this.m_anchorMiddleLeft = o.default.getChildByPath(this.m_uiView, r.default.ANCHOR_MIDDLE_LEFT, !1),
                    this.m_anchorMiddleCenter = o.default.getChildByPath(this.m_uiView, r.default.ANCHOR_MIDDLE_CENTER, !1),
                    this.m_anchorMiddleRight = o.default.getChildByPath(this.m_uiView, r.default.ANCHOR_MIDDLE_RIGHT, !1),
                    this.m_anchorBottomLeft = o.default.getChildByPath(this.m_uiView, r.default.ANCHOR_BOTTOM_LEFT, !1),
                    this.m_anchorBottomCenter = o.default.getChildByPath(this.m_uiView, r.default.ANCHOR_BOTTOM_CENTER, !1),
                    this.m_anchorBottomRight = o.default.getChildByPath(this.m_uiView, r.default.ANCHOR_BOTTOM_RIGHT, !1),
                    this.onResize(),
                    t
                }
                onResize() {
                    if (this.destroyed || null == this.getStyle() || null == this.m_uiView || this.m_uiView.destroyed)
                        return;
                    let e = l.default.uiScreenWidth,
                    t = l.default.uiScreenHeight,
                    i = l.default.uiScale,
                    n = e / 2,
                    s = t / 2,
                    a = e;
                    if (h.default.isHorizon) {
                        let e = 0,
                        i = 0 + l.default.uiOffsetX;
                        null != this.m_anchorTopLeft && this.m_anchorTopLeft.pos(i, e),
                        null != this.m_anchorTopCenter && this.m_anchorTopCenter.pos(n, e),
                        null != this.m_anchorTopRight && this.m_anchorTopRight.pos(a - i, e),
                        null != this.m_anchorMiddleLeft && this.m_anchorMiddleLeft.pos(i, s),
                        null != this.m_anchorMiddleCenter && this.m_anchorMiddleCenter.pos(n, s),
                        null != this.m_anchorMiddleRight && this.m_anchorMiddleRight.pos(a - i, s),
                        null != this.m_anchorBottomLeft && this.m_anchorBottomLeft.pos(i, t),
                        null != this.m_anchorBottomCenter && this.m_anchorBottomCenter.pos(n, t),
                        null != this.m_anchorBottomRight && this.m_anchorBottomRight.pos(a - i, t)
                    } else {
                        let e = 0,
                        i = 0 + l.default.uiOffsetY,
                        o = t - l.default.uiOffsetY;
                        null != this.m_anchorTopLeft && this.m_anchorTopLeft.pos(e, i),
                        null != this.m_anchorTopCenter && this.m_anchorTopCenter.pos(n, i),
                        null != this.m_anchorTopRight && this.m_anchorTopRight.pos(a, i),
                        null != this.m_anchorMiddleLeft && this.m_anchorMiddleLeft.pos(e, s),
                        null != this.m_anchorMiddleCenter && this.m_anchorMiddleCenter.pos(n, s),
                        null != this.m_anchorMiddleRight && this.m_anchorMiddleRight.pos(a, s),
                        null != this.m_anchorBottomLeft && this.m_anchorBottomLeft.pos(e, o),
                        null != this.m_anchorBottomCenter && this.m_anchorBottomCenter.pos(n, o),
                        null != this.m_anchorBottomRight && this.m_anchorBottomRight.pos(a, o)
                    }
                    this.m_uiView.width = e,
                    this.m_uiView.height = t,
                    this.scale(i, i, !0)
                }
                show() {
                    this.event(a.default.ON_UI_SHOW, this.m_uiState.data),
                    s.default.dispatchEvent(a.default.ON_UI_SHOW, this.viewID)
                }
            }
        }, {
            "../BingoSdkConfig": 2,
            "../Defines/BingoDefines": 9,
            "../Defines/BingoEventDefine": 10,
            "../Events/BingoEvent": 14,
            "../Utils/BingoDevice": 54,
            "../Utils/BingoUtils": 56,
            "./BingoUIComponent": 5
        }
    ],
    9: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            class n {}
            n.DEBUG_LOG = !0,
            n.DEFAULT_WIDTH = 0,
            n.DEFAULT_HEIGHT = 0,
            n.ELASTIC_BACK_TIME = 200,
            n.ELASTIC_DISTANCE = 100,
            n.ROLL_RATIO = .7,
            n.ANCHOR_TOP_LEFT = "BINGO_TOP_LEFT",
            n.ANCHOR_TOP_CENTER = "BINGO_TOP_CENTER",
            n.ANCHOR_TOP_RIGHT = "BINGO_TOP_RIGHT",
            n.ANCHOR_MIDDLE_LEFT = "BINGO_MIDDLE_LEFT",
            n.ANCHOR_MIDDLE_CENTER = "BINGO_MIDDLE_CENTER",
            n.ANCHOR_MIDDLE_RIGHT = "BINGO_MIDDLE_RIGHT",
            n.ANCHOR_BOTTOM_LEFT = "BINGO_BOTTOM_LEFT",
            n.ANCHOR_BOTTOM_CENTER = "BINGO_BOTTOM_CENTER",
            n.ANCHOR_BOTTOM_RIGHT = "BINGO_BOTTOM_RIGHT",
            n.BANNER_LAST_TIME = 2e3,
            n.STAT_TYPE = {
                VIDEO_CLICK: "video_click",
                VIDEO_SHOW: "watch",
                VIDEO_ERROR: "video_error",
                BANNER_CLICK: "banner",
                BANNER_SHOW: "banner_exposure",
                PUSH_CLICK: "icon_click",
                SHARE: "share",
                INSERT_SHOW: "screen_exposure"
            },
            i.default = n
        }, {}
    ],
    10: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            class n {}
            n.UI_CLOSE = "BINGO_UI_CLOSE",
            n.ON_UI_OPEN = "BINGO_ON_UI_OPEN",
            n.ON_UI_SHOW = "BINGO_ON_UI_SHOW",
            n.ON_UI_CLOSE = "BINGO_ON_CLOSE_UI",
            n.RESIZE = "BINGO_RESIZE",
            n.FOCUS = "BINGO_FOCUS",
            n.BLUR = "BINGO_BLUR",
            i.default = n
        }, {}
    ],
    11: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            class n {
                static getUIAtlasURL() {
                    return this.resURL + "bingo_atlas/"
                }
                static getUIJsonURL() {
                    return this.resURL + "bingo_gui/"
                }
                static getUITextureResURL() {
                    return this.resURL + "bingo_texture/"
                }
            }
            n.resURL = "res/",
            i.default = n
        }, {}
    ],
    12: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            class n {}
            n.SUSPENSION_MAIN = 1,
            n.SUSPENSION_MATCH = 2,
            n.SUSPENSION_GAME = 3,
            n.SUSPENSION_END = 4,
            n.SUSPENSION_DRAWER = 5,
            i.default = n
        }, {}
    ],
    13: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            class n {}
            n.BINGO_UI_COMMON_ATLAS = "bingo_common",
            n.BINGO_UI_STARTUP_EXPORT_H = 100,
            n.BINGO_UI_STARTUP_EXPORT_V = 101,
            n.BINGO_UI_CANCEL_EXPORT_H = 200,
            n.BINGO_UI_CANCEL_EXPORT_V = 201,
            n.BINGO_UI_FINISH_EXPORT_H = 300,
            n.BINGO_UI_FINISH_EXPORT_V = 301,
            n.BINGO_UI_COMBO_H = 400,
            n.BINGO_UI_COMBO_V = 401,
            n.BINGO_UI_FINISH_COMBO_H = 500,
            n.BINGO_UI_FINISH_COMBO_V = 501,
            n.BINGO_UI_RECOMMENDED_EXPORT_H = 600,
            n.BINGO_UI_RECOMMENDED_EXPORT_V = 601,
            i.default = n
        }, {}
    ],
    14: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            class n extends Laya.EventDispatcher {
                constructor() {
                    super(),
                    n._inst = this
                }
                static get inst() {
                    return this._inst || new n
                }
                static registEvent(e, t, i, n = !1, s) {
                    null != e && null != t && null != i && (n ? this.inst.once(e, t, i, s) : this.inst.on(e, t, i, s))
                }
                static unregistEvent(e, t, i, n = !1) {
                    null != e && null != t && null != i && this.inst.off(e, t, i, n)
                }
                static dispatchEvent(e, t) {
                    this.inst.event(e, t)
                }
            }
            n._inst = null,
            i.default = n
        }, {}
    ],
    15: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("./BingoSdk");
            Laya.Browser.window.bingoSdk = new n.default
        }, {
            "./BingoSdk": 1
        }
    ],
    16: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            i.default = class {
                constructor() {
                    this.showId = null,
                    this.readyId = null,
                    this.loadingId = null,
                    this.banner = null,
                    this.readyBanner = null,
                    this.loadingBanner = null,
                    this.width = 0,
                    this.height = 0,
                    this.statId = -1,
                    this.isShow = !1
                }
            }
        }, {}
    ],
    17: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            i.default = class {
                constructor() {
                    this.m_arrCodes = [],
                    this.m_idx = 0
                }
                randomCodes() {
                    this.m_arrCodes.sort(function (e, t) {
                        return Math.random() > .5 ? -1 : 1
                    })
                }
                addCode(e) {
                    null != e && "" != e && -1 == this.m_arrCodes.indexOf(e) && this.m_arrCodes.push(e)
                }
                getNextCode() {
                    if (0 == this.m_arrCodes.length)
                        return null;
                    this.m_idx >= this.m_arrCodes.length && (this.m_idx = 0);
                    let e = this.m_arrCodes[this.m_idx];
                    return this.m_idx++,
                    e
                }
            }
        }, {}
    ],
    18: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            i.default = class {
                constructor() {
                    this.to_appid = "",
                    this.togame_name = "",
                    this.icon = "",
                    this.jump_path = "",
                    this.panel = 0,
                    this.online = 0,
                    this.extData = null
                }
            }
        }, {}
    ],
    19: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("./BingoPlatformWX");
            class s {
                constructor() {
                    this.m_platform = null,
                    s._inst = this
                }
                static get inst() {
                    return this._inst || new s
                }
                get platform() {
                    return null == this.m_platform && (this.m_platform = new n.default),
                    this.m_platform
                }
            }
            s._inst = null,
            i.default = s
        }, {
            "./BingoPlatformWX": 20
        }
    ],
    20: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("./BingoAdCode"),
            s = e("./BingoAdBanner"),
            a = e("../Utils/BingoDebug"),
            o = e("./BingoAdJump"),
            r = e("../Utils/BingoUtils"),
            l = e("../Defines/BingoDefines"),
            h = e("../Events/BingoEvent"),
            p = e("../Defines/BingoEventDefine"),
            m = e("../BingoSdkConfig");
            class d {
                constructor() {
                    this.appId = null,
                    this.isWhitelist = !1,
                    this.m_bgwl = null,
                    this.m_openId = null,
                    this.startupExportEnable = !1,
                    this.startupExportWhitelist = !1,
                    this.startupExportJumpArray = [],
                    this.cancelExportEnable = !1,
                    this.cancelExportWhitelist = !1,
                    this.cancelExportJumpArray = [],
                    this.finishExportEnable = !1,
                    this.finishExportWhitelist = !1,
                    this.finishExportJumpArray = [],
                    this.recommendedExportEnable = !1,
                    this.recommendedExportWhitelist = !1,
                    this.recommendedExportJumpArray = [],
                    this.mainHangEnable = !1,
                    this.mainHangWhitelist = !1,
                    this.mainHangJumpArray = [],
                    this.matchHangEnable = !1,
                    this.matchHangWhitelist = !1,
                    this.matchHangJumpArray = [],
                    this.gameplayHangEnable = !1,
                    this.gameplayHangWhitelist = !1,
                    this.gameplayHangJumpArray = [],
                    this.finishHangEnable = !1,
                    this.finishHangWhitelist = !1,
                    this.finishHangJumpArray = [],
                    this.drawerHangEnable = !1,
                    this.drawerHangWhitelist = !1,
                    this.drawerHangJumpArray = [],
                    this.comboClickEnable = !1,
                    this.comboClickWhitelist = !1,
                    this.startupBannerEnable = !1,
                    this.startupBannerWhitelist = !1,
                    this.finishExportBannerEnable = !1,
                    this.finishExportBannerWhitelist = !1,
                    this.finishBannerEnable = !1,
                    this.finishBannerWhitelist = !1,
                    this.startupVideoEnable = !1,
                    this.startupVideoWhitelist = !1,
                    this.finishVideoEnable = !1,
                    this.finishVideoWhitelist = !1,
                    this.initVideoEnable = !1,
                    this.initVideoWhitelist = !1,
                    this.cpComboClickEnable = !1,
                    this.cpComboClickWhitelist = !1,
                    this.m_banner = new s.default,
                    this.m_bannerIDCode = new n.default,
                    this.m_highBanner = new s.default,
                    this.m_highBannerID = null,
                    this.m_highBannerExposureTimes = 0,
                    this.HIGH_BANNER_EXPOSURE_MAX_COUNT = 10,
                    this.m_highBannerExposureDeltaTime = 0,
                    this.HIGH_BANNER_EXPOSURE_MAX_TIME = 6e3,
                    this.m_isHighBannerExposure = !1,
                    this.m_isHighBannerAlreadyShow = !1,
                    this.BANNER_EXPOSURE_UPDATE_TIME = 1e3,
                    this.m_videoAd = null,
                    this.m_videoIDCode = new n.default,
                    this.m_adVideoUnitID = null,
                    this.m_videoStartHandler = null,
                    this.m_videoCompleteHandler = null,
                    this.isFocus = !1,
                    this.m_screenWidth = 0,
                    this.finishExportBlood = "",
                    this.finishExportAtk = "",
                    this.finishExportClick = "",
                    this.finishExportHeart = "",
                    this.finishExportTip = "",
                    this.finishExportFrame = "",
                    this.finishExportSequenceFrame1 = "",
                    this.finishExportSequenceFrame2 = ""
                }
                init(e) {
                    if (null == Laya.Browser.window.wx)
                        return;
                    if (d.inst = this, this.m_bgwl = fyhdSDK.getFyhd(), null == this.m_bgwl)
                        return;
                    this.appId = this.m_bgwl.param._gameAppid;
                    let t = this,
                    i = Laya.timer.currTimer;
                    this.m_bgwl.startSdk({
                        callback: function (n) {
                            let s = Laya.timer.currTimer - i;
                            a.default.warn("SDK pass time : startSdk use " + .001 * s + " sec."),
                            t.initSdk(e)
                        }
                    }),
                    wx.onShow(e => {
                        h.default.dispatchEvent(p.default.FOCUS),
                        this.isFocus = !0
                    }),
                    wx.onHide(e => {
                        h.default.dispatchEvent(p.default.BLUR),
                        e && (8 == e.targetAction || 9 == e.targetAction || 10 == e.targetAction) && e.targetPagePath.length > 50 && null != this.m_banner && null != this.m_banner.showId && this.statReport(l.default.STAT_TYPE.BANNER_CLICK, this.m_banner.showId),
                        this.isFocus = !1
                    }),
                    this.isFocus = !0;
                    let {
                        screenWidth: n
                    } = wx.getSystemInfoSync();
                    this.m_screenWidth = n
                }
                initSdk(e) {
                    if (null == this.m_bgwl || null == wx)
                        return;
                    let t = wx.getStorageSync("BG_openid");
                    null != t && "" != t ? (this.statAuth(t), this.initPushController(t, e), this.login(null, !1)) : this.login(e, !0)
                }
                login(e, t) {
                    let i = Laya.timer.currTimer;
                    this.m_bgwl.getFyhdUserInfo({}, !1, n => {
                        let s = Laya.timer.currTimer - i;
                        if (a.default.warn("SDK pass time : getFyhdUserInfo use " + .001 * s + " sec."), null != n && 1 == n.err_code && null != n.result && null != n.result.user && null != n.result.user.openid) {
                            let i = n.result.user.openid;
                            t && (this.statAuth(i), this.initPushController(i, e))
                        }
                    })
                }
                statAuth(e) {
                    if (null == this.m_bgwl)
                        return;
                    let t = {
                        openid: e
                    };
                    this.m_bgwl.loginData(t, () => {}),
                    this.m_openId = e
                }
                initPushController(e, t) {
                    if (null == this.m_bgwl)
                        return;
                    let i = this,
                    n = Laya.timer.currTimer;
                    this.m_bgwl.pushControl(function (s) {
                        let o = Laya.timer.currTimer - n;
                        if (a.default.warn("SDK pass time : pushControl use " + .001 * o + " sec."), null != s.code && 1 == s.code && null != s.data) {
                            if (null != s.data.game_appid && (i.appId = s.data.game_appid), null != s.data.is_white_player && (i.isWhitelist = 1 == s.data.is_white_player), null != s.data.banner_config_ad_id && s.data.banner_config_ad_id instanceof Array) {
                                Laya.Browser.window.bingoSdk.arrBannerID = s.data.banner_config_ad_id;
                                for (let e in s.data.banner_config_ad_id) {
                                    let t = s.data.banner_config_ad_id[e];
                                    i.m_bannerIDCode.addCode(t)
                                }
                                i.m_bannerIDCode.randomCodes(),
                                i.preloadBanner()
                            }
                            if (null != s.data.highest_rate_ad_id && (i.m_highBannerID = s.data.highest_rate_ad_id, i.loadHighBanner(), Laya.timer.loop(i.BANNER_EXPOSURE_UPDATE_TIME * Laya.timer.scale, i, i.updateBannerExposure)), null != s.data.video_config_ad_id && s.data.video_config_ad_id instanceof Array) {
                                for (let e in s.data.video_config_ad_id) {
                                    let t = s.data.video_config_ad_id[e];
                                    i.m_videoIDCode.addCode(t)
                                }
                                i.preloadAD()
                            }
                            if (null != s.data.export && s.data.export instanceof Array) {
                                Laya.Browser.window.bingoSdk.exportData = s.data.export;
                                for (let e in s.data.export) {
                                    let t = s.data.export[e];
                                    i.initExport(t)
                                }
                            }
                            if (null != s.data.ad && s.data.ad instanceof Array) {
                                Laya.Browser.window.bingoSdk.adData = s.data.ad;
                                for (let e in s.data.ad) {
                                    let t = s.data.ad[e];
                                    i.initAd(t)
                                }
                            }
                        }
                        null != t && t.runWith(e)
                    })
                }
                initExport(e) {
                    if (null != e.type)
                        switch (e.type) {
                        case 2:
                            if (this.startupExportEnable = 1 == e.state, this.startupExportWhitelist = 1 == e.state_white, null != e.push)
                                for (let t in e.push) {
                                    let i = e.push[t];
                                    if (null != i) {
                                        let e = this.initJumpData(i);
                                        this.startupExportJumpArray.push(e)
                                    }
                                }
                            break;
                        case 3:
                            if (this.cancelExportEnable = 1 == e.state, this.cancelExportWhitelist = 1 == e.state_white, null != e.push)
                                for (let t in e.push) {
                                    let i = e.push[t];
                                    if (null != i) {
                                        let e = this.initJumpData(i);
                                        this.cancelExportJumpArray.push(e)
                                    }
                                }
                            break;
                        case 4:
                            if (this.mainHangEnable = 1 == e.state, this.mainHangWhitelist = 1 == e.state_white, null != e.push)
                                for (let t in e.push) {
                                    let i = e.push[t];
                                    if (null != i) {
                                        let e = this.initJumpData(i);
                                        this.mainHangJumpArray.push(e)
                                    }
                                }
                            break;
                        case 5:
                            if (this.matchHangEnable = 1 == e.state, this.matchHangWhitelist = 1 == e.state_white, null != e.push)
                                for (let t in e.push) {
                                    let i = e.push[t];
                                    if (null != i) {
                                        let e = this.initJumpData(i);
                                        this.matchHangJumpArray.push(e)
                                    }
                                }
                            break;
                        case 6:
                            if (this.gameplayHangEnable = 1 == e.state, this.gameplayHangWhitelist = 1 == e.state_white, null != e.push)
                                for (let t in e.push) {
                                    let i = e.push[t];
                                    if (null != i) {
                                        let e = this.initJumpData(i);
                                        this.gameplayHangJumpArray.push(e)
                                    }
                                }
                            break;
                        case 7:
                            if (this.finishHangEnable = 1 == e.state, this.finishHangWhitelist = 1 == e.state_white, null != e.push)
                                for (let t in e.push) {
                                    let i = e.push[t];
                                    if (null != i) {
                                        let e = this.initJumpData(i);
                                        this.finishHangJumpArray.push(e)
                                    }
                                }
                            break;
                        case 8:
                            if (this.finishExportEnable = 1 == e.state, this.finishExportWhitelist = 1 == e.state_white, null != e.push)
                                for (let t in e.push) {
                                    let i = e.push[t];
                                    if (null != i) {
                                        let e = this.initJumpData(i);
                                        this.finishExportJumpArray.push(e)
                                    }
                                }
                            break;
                        case 9:
                            if (this.recommendedExportEnable = 1 == e.state, this.recommendedExportWhitelist = 1 == e.state_white, null != e.push)
                                for (let t in e.push) {
                                    let i = e.push[t];
                                    if (null != i) {
                                        let e = this.initJumpData(i);
                                        this.recommendedExportJumpArray.push(e)
                                    }
                                }
                            break;
                        case 10:
                            if (this.drawerHangEnable = 1 == e.state, this.drawerHangWhitelist = 1 == e.state_white, null != e.push)
                                for (let t in e.push) {
                                    let i = e.push[t];
                                    if (null != i) {
                                        let e = this.initJumpData(i);
                                        this.drawerHangJumpArray.push(e)
                                    }
                                }
                        }
                }
                initJumpData(e) {
                    let t = new o.default;
                    return t.to_appid = e.to_appid,
                    t.togame_name = e.togame_name,
                    t.jump_path = e.jump_path,
                    t.icon = e.icon,
                    t.panel = e.panel,
                    t.online = r.default.randomRangeInt(5e4, 2e5),
                    t
                }
                initAd(e) {
                    if (null != e.type)
                        switch (e.type) {
                        case 1:
                            this.startupBannerEnable = 1 == e.state,
                            this.startupBannerWhitelist = 1 == e.state_white;
                            break;
                        case 2:
                            this.finishExportBannerEnable = 1 == e.state,
                            this.finishExportBannerWhitelist = 1 == e.state_white;
                            break;
                        case 3:
                            this.finishBannerEnable = 1 == e.state,
                            this.finishBannerWhitelist = 1 == e.state_white,
                            this.finishExportBlood = e.style[2],
                            this.finishExportAtk = e.style[1],
                            this.finishExportClick = e.style[3],
                            this.finishExportHeart = e.style[5],
                            this.finishExportSequenceFrame1 = e.style[6],
                            this.finishExportSequenceFrame2 = e.style[7],
                            this.finishExportTip = e.style[8],
                            this.finishExportFrame = e.style[4];
                            break;
                        case 4:
                            this.startupVideoEnable = 1 == e.state,
                            this.startupVideoWhitelist = 1 == e.state_white;
                            break;
                        case 5:
                            this.finishVideoEnable = 1 == e.state,
                            this.finishVideoWhitelist = 1 == e.state_white;
                        case 6:
                            this.initVideoEnable = 1 == e.state,
                            this.initVideoWhitelist = 1 == e.state_white;
                            break;
                        case 7:
                            this.cpComboClickEnable = 1 == e.state,
                            this.cpComboClickWhitelist = 1 == e.state_white
                        }
                }
                preloadBanner() {
                    let e = this.m_bannerIDCode.getNextCode();
                    null != e && "" != e && this.loadBanner(e)
                }
                loadBanner(e) {
                    let t = this.m_banner,
                    i = 0,
                    n = 0,
                    s = 0,
                    o = 0,
                    r = m.default.isHorizon ? 300 : this.m_screenWidth;
                    i = r / 2.87,
                    n = r,
                    s = Laya.Browser.clientWidth / 2 - n / 2,
                    o = Laya.Browser.clientHeight - i;
                    let h = wx.createBannerAd({
                        adUnitId: e,
                        adIntervals: 30,
                        style: {
                            left: s,
                            top: o,
                            width: n,
                            height: i
                        }
                    });
                    t.loadingId = e,
                    t.loadingBanner = h,
                    t.loadingBanner.onLoad(() => {
                        if (a.default.log("banner load success : " + t.loadingId), null != t.loadingBanner) {
                            let e = !1;
                            0 == t.isShow || null == t.banner ? (null != t.banner ? t.banner.destroy() : t.isShow && (e = !0), t.banner = t.loadingBanner, t.loadingBanner = null, t.showId = t.loadingId, t.loadingId = null) : (null != t.readyBanner && t.readyBanner.destroy(), t.readyBanner = t.loadingBanner, t.loadingBanner = null, t.readyId = t.loadingId, t.loadingId = null),
                            e && (t.banner.show().catch(e => {
                                    a.default.log("banner show error : " + t.showId + " err: " + e)
                                }), this.statReport(l.default.STAT_TYPE.BANNER_SHOW, t.showId))
                        }
                    }),
                    t.loadingBanner.onError(i => {
                        a.default.log("banner load error : " + t.loadingId + " err: " + i),
                        t.loadingId == e && (t.loadingBanner = null, t.loadingId = null)
                    })
                }
                showBanner() {
                    if (a.default.log("bingo show banner"), null == Laya.Browser.window.wx)
                        return;
                    let e = this.m_banner;
                    if (e.isShow = !0, null != e.banner)
                        e.banner.show().catch(t => {
                            a.default.log("banner show error : " + e.showId + " err: " + t)
                        }), this.statReport(l.default.STAT_TYPE.BANNER_SHOW, e.showId);
                    else {
                        if (null != e.readyBanner && (null != e.banner && e.banner.destroy(), e.banner = e.readyBanner, e.readyBanner = null, e.showId = e.readyId, e.readyId = null), null == e.loadingBanner) {
                            let e = this.m_bannerIDCode.getNextCode();
                            null != e && this.loadBanner(e)
                        }
                        null != e.banner && (e.banner.show().catch(t => {
                                a.default.log("banner show error : " + e.showId + " err: " + t)
                            }), this.statReport(l.default.STAT_TYPE.BANNER_SHOW, e.showId))
                    }
                }
                closeBanner() {
                    let e = this.m_banner;
                    if (e.isShow) {
                        if (null != e.banner && e.banner.hide(), null != e.readyBanner && (null != e.banner && e.banner.destroy(), e.banner = e.readyBanner, e.readyBanner = null, e.showId = e.readyId, e.readyId = null), null == e.loadingBanner) {
                            let e = this.m_bannerIDCode.getNextCode();
                            null != e && this.loadBanner(e)
                        }
                        e.isShow = !1
                    }
                }
                updateBannerExposure() {
                    if (!this.m_isHighBannerExposure || !this.isFocus)
                        return;
                    let e = this;
                    if (this.m_isHighBannerAlreadyShow && (a.default.log("highBannerExposureDeltaTime : " + this.m_highBannerExposureDeltaTime), this.m_highBannerExposureDeltaTime += this.BANNER_EXPOSURE_UPDATE_TIME), this.m_highBannerExposureDeltaTime > this.HIGH_BANNER_EXPOSURE_MAX_TIME)
                        if (this.m_highBannerExposureDeltaTime = 0, this.m_highBannerExposureTimes++, this.m_highBannerExposureTimes > this.HIGH_BANNER_EXPOSURE_MAX_COUNT) {
                            this.m_highBannerExposureTimes = 0;
                            let t = Laya.timer.currTimer;
                            this.m_bgwl.getHighestRateAdId(function (i) {
                                let n = Laya.timer.currTimer - t;
                                a.default.warn("SDK pass time : getHighestRateAdId use " + .001 * n + " sec."),
                                null != i.code && 1 == i.code && null != i.data && (e.m_highBannerID = i.data.highest_rate_ad_id, e.loadHighBanner())
                            })
                        } else
                            this.isWhitelist && (this.showHighRateBanner(!1), this.loadHighBanner())
                }
                startBannerExposure() {
                    a.default.warn("startBannerExposure"),
                    this.m_isHighBannerExposure = !0,
                    this.showHighRateBanner(!0)
                }
                stopBannerExposure() {
                    a.default.warn("stopBannerExposure"),
                    this.closeHighRateBanner()
                }
                loadHighBanner() {
                    if (null == Laya.Browser.window.wx)
                        return;
                    let e = this.m_highBannerID;
                    if (null == e || "" == e)
                        return;
                    let t = this.m_highBanner;
                    if (null != t.readyBanner || null != t.loadingBanner)
                        return;
                    let i = 0,
                    n = 0,
                    s = 0,
                    o = 0;
                    i = 300 / 2.87,
                    n = 300,
                    s = Laya.Browser.clientWidth / 2 - 150,
                    o = Laya.Browser.clientHeight - 300 / 2.87;
                    let r = wx.createBannerAd({
                        adUnitId: e,
                        adIntervals: 30,
                        style: {
                            left: s,
                            top: o,
                            width: 300,
                            height: 300 / 2.87
                        }
                    });
                    this.m_isHighBannerAlreadyShow = !1,
                    t.loadingId = e,
                    t.loadingBanner = r,
                    t.loadingBanner.onLoad(() => {
                        a.default.log("banner load success : " + t.loadingId),
                        null != t.loadingBanner && (t.readyBanner = t.loadingBanner, t.loadingBanner = null, t.readyId = t.loadingId, t.loadingId = null, t.isShow && null != t.readyBanner && (this.m_isHighBannerAlreadyShow = !1, t.readyBanner.show().then(() => {
                                    null != t.banner && t.banner.destroy(),
                                    t.banner = t.readyBanner,
                                    t.readyBanner = null,
                                    t.showId = t.readyId,
                                    t.readyId = null,
                                    this.m_isHighBannerExposure ? (this.statReport(l.default.STAT_TYPE.BANNER_SHOW, t.showId), this.m_isHighBannerAlreadyShow = !0) : this.closeHighRateBanner()
                                })))
                    }),
                    t.loadingBanner.onError(i => {
                        a.default.log("banner load error : " + t.loadingId + " err: " + i),
                        t.loadingId == e && (t.loadingBanner = null, t.loadingId = null)
                    })
                }
                showHighRateBanner(e) {
                    if (null == Laya.Browser.window.wx)
                        return;
                    let t = this.m_highBanner;
                    null != t.readyBanner ? (this.m_isHighBannerAlreadyShow = !1, t.readyBanner.show().then(() => {
                            null != t.banner && t.banner.destroy(),
                            t.banner = t.readyBanner,
                            t.readyBanner = null,
                            t.showId = t.readyId,
                            t.readyId = null,
                            this.m_isHighBannerExposure ? (this.statReport(l.default.STAT_TYPE.BANNER_SHOW, t.showId), this.m_isHighBannerAlreadyShow = !0) : this.closeHighRateBanner()
                        })) : (t.isShow = !0, e && null != t.banner && (this.m_isHighBannerAlreadyShow = !1, t.banner.show().then(() => {
                                this.m_isHighBannerExposure ? (this.statReport(l.default.STAT_TYPE.BANNER_SHOW, t.showId), this.m_isHighBannerAlreadyShow = !0) : this.closeHighRateBanner()
                            }).catch(e => {
                                a.default.log("banner show error : " + t.showId + " err: " + e)
                            })))
                }
                closeHighRateBanner() {
                    this.m_isHighBannerExposure = !1,
                    this.m_isHighBannerAlreadyShow = !1;
                    let e = this.m_highBanner;
                    e.isShow = !1,
                    null != e.banner && e.banner.hide()
                }
                showVideo(e, t = null) {
                    if (a.default.log("bingo show video"), null != Laya.Browser.window.wx) {
                        if (null == this.m_videoAd) {
                            if (this.m_adVideoUnitID = this.m_videoIDCode.getNextCode(), null == this.m_adVideoUnitID)
                                return null != e && e.runWith(!1), e = null, null != t && t.run(), void(t = null);
                            this.createVideoAd()
                        }
                        null != this.m_videoAd ? (this.m_videoCompleteHandler = e, this.m_videoStartHandler = t, this.m_videoAd.offError(this.onVideoError), this.m_videoAd.onError(this.onVideoError), this.m_videoAd.offClose(this.onVideoClose), this.m_videoAd.onClose(this.onVideoClose), this.m_videoAd.show().then(() => {
                                null != this.m_videoStartHandler && (this.m_videoStartHandler.runWith(!0), this.m_videoStartHandler = null)
                            }).catch(e => {
                                this.m_videoAd.load().then(() => {
                                    this.m_videoAd.show().then(() => {
                                        null != this.m_videoStartHandler && (this.m_videoStartHandler.runWith(!0), this.m_videoStartHandler = null)
                                    })
                                }).catch(e => {
                                    null != this.m_videoStartHandler && (this.m_videoStartHandler.runWith(!1), this.m_videoStartHandler = null),
                                    null != this.m_videoCompleteHandler && (this.m_videoCompleteHandler.runWith(!1), this.m_videoCompleteHandler = null)
                                })
                            })) : (null != this.m_videoStartHandler && (this.m_videoStartHandler.runWith(!1), this.m_videoStartHandler = null), null != this.m_videoCompleteHandler && (this.m_videoCompleteHandler.runWith(!1), this.m_videoCompleteHandler = null), this.statReport(l.default.STAT_TYPE.VIDEO_ERROR, this.m_adVideoUnitID)),
                        this.statReport(l.default.STAT_TYPE.VIDEO_CLICK, this.m_adVideoUnitID)
                    }
                }
                preloadAD() {
                    null == this.m_videoAd && (this.m_adVideoUnitID = this.m_videoIDCode.getNextCode(), this.createVideoAd())
                }
                createVideoAd() {
                    null != Laya.Browser.window.wx && null != this.m_adVideoUnitID && (this.m_videoAd = wx.createRewardedVideoAd({
                            adUnitId: this.m_adVideoUnitID,
                            multiton: !0
                        }), this.m_videoAd)
                }
                onVideoError(e) {
                    let t = d.inst;
                    a.default.error("video error : " + e.errCode + " msg : " + e.errMsg),
                    t.m_videoAd.destroy(),
                    t.m_videoAd = null,
                    t.statReport(l.default.STAT_TYPE.VIDEO_ERROR, this.m_adVideoUnitID)
                }
                onVideoClose(e) {
                    let t = d.inst;
                    null != t.m_videoStartHandler && (t.m_videoStartHandler.runWith(!1), t.m_videoStartHandler = null),
                    e && e.isEnded || void 0 === e ? (t.m_videoCompleteHandler && (t.m_videoCompleteHandler.runWith(!0), t.m_videoCompleteHandler = null), t.statReport(l.default.STAT_TYPE.VIDEO_SHOW, this.m_adVideoUnitID)) : (t.m_videoCompleteHandler && (t.m_videoCompleteHandler.runWith(!1), t.m_videoCompleteHandler = null), t.statReport(l.default.STAT_TYPE.VIDEO_ERROR, this.m_adVideoUnitID))
                }
                jumpToGame(e, t, i = null) {
                    if (null == t && (t = ""), a.default.log("bingo jump to game : " + e + " path : " + t), null == Laya.Browser.window.wx)
                        return;
                    t && -1 != t.indexOf("&amp;") && (t = t.split("&amp;").join("&"));
                    let n = this;
                    if (null == wx)
                        return;
                    n.statReport(l.default.STAT_TYPE.PUSH_CLICK, null);
                    let s = {
                        appId: e,
                        path: t,
                        extraData: {},
                        envVersion: "release",
                        success: function (t) {
                            n.sharePlay(n.m_openId, e)
                        },
                        fail: function (e) {
                            i && i.run()
                        },
                        complete: function (e) {}
                    };
                    wx.navigateToMiniProgram && wx.navigateToMiniProgram(s)
                }
                statReport(e, t) {
                    if (null != this.m_bgwl)
                        if (null == t || "" == t) {
                            let t = {
                                ad_type: e
                            };
                            this.m_bgwl.advertisement(t, e => {})
                        } else {
                            let i = {
                                ad_type: e,
                                ad_id: t
                            };
                            this.m_bgwl.advertisement(i, e => {})
                        }
                }
                sharePlay(e, t) {
                    if (null == this.m_bgwl)
                        return;
                    let i = {
                        openid: e,
                        to_appid: t,
                        sort: 0
                    };
                    this.m_bgwl.sharePlay(i, e => {})
                }
                isEnable(e, t) {
                    return !!e && (!t || !!this.isWhitelist)
                }
                isGetFinishBannerClickUrl() {
                    return !(!this.finishExportBlood || "" == this.finishExportBlood) && (!(!this.finishExportAtk || "" == this.finishExportAtk) && (!(!this.finishExportClick || "" == this.finishExportClick) && (!(!this.finishExportHeart || "" == this.finishExportHeart) && (!(!this.finishExportTip || "" == this.finishExportTip) && (!(!this.finishExportFrame || "" == this.finishExportFrame) && (!(!this.finishExportSequenceFrame1 || "" == this.finishExportSequenceFrame1) && !(!this.finishExportSequenceFrame2 || "" == this.finishExportSequenceFrame2)))))))
                }
            }
            d.inst = null,
            i.default = d
        }, {
            "../BingoSdkConfig": 2,
            "../Defines/BingoDefines": 9,
            "../Defines/BingoEventDefine": 10,
            "../Events/BingoEvent": 14,
            "../Utils/BingoDebug": 53,
            "../Utils/BingoUtils": 56,
            "./BingoAdBanner": 16,
            "./BingoAdCode": 17,
            "./BingoAdJump": 18
        }
    ],
    21: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var n = Laya.View,
            s = Laya.ClassUtils.regClass;
            !function (e) {
                !function (e) {
                    !function (e) {
                        class t extends n {
                            constructor() {
                                super()
                            }
                            createChildren() {
                                super.createChildren(),
                                this.createView(t.uiView)
                            }
                        }
                        t.uiView = {
                            type: "View",
                            props: {
                                width: 1386,
                                height: 640
                            },
                            compId: 2,
                            child: [{
                                    type: "Image",
                                    props: {
                                        y: 0,
                                        x: 0,
                                        width: 1386,
                                        skin: "res/bingo_atlas/bingo_common/blank.png",
                                        sizeGrid: "2,2,2,2",
                                        runtime: "UI/BingoUIFullscreenImage.ts",
                                        height: 640
                                    },
                                    compId: 16
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 0,
                                        width: 1,
                                        name: "BINGO_TOP_LEFT",
                                        height: 1
                                    },
                                    compId: 3
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 693,
                                        width: 1,
                                        name: "BINGO_TOP_CENTER",
                                        height: 1
                                    },
                                    compId: 4
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 1386,
                                        width: 1,
                                        name: "BINGO_TOP_RIGHT",
                                        height: 1
                                    },
                                    compId: 5
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 320,
                                        x: 0,
                                        width: 1,
                                        name: "BINGO_MIDDLE_LEFT",
                                        height: 1
                                    },
                                    compId: 6
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 320,
                                        x: 693,
                                        width: 1,
                                        name: "BINGO_MIDDLE_CENTER",
                                        height: 1
                                    },
                                    compId: 7,
                                    child: [{
                                            type: "Sprite",
                                            props: {},
                                            compId: 17,
                                            child: [{
                                                    type: "Text",
                                                    props: {
                                                        y: -290,
                                                        x: -664,
                                                        text: "最近在玩",
                                                        fontSize: 29,
                                                        color: "#4c4c4c",
                                                        runtime: "Laya.Text"
                                                    },
                                                    compId: 19
                                                }, {
                                                    type: "Text",
                                                    props: {
                                                        y: -244,
                                                        x: -663,
                                                        text: "本周热门游戏",
                                                        fontSize: 37,
                                                        color: "#010101",
                                                        runtime: "Laya.Text"
                                                    },
                                                    compId: 20
                                                }, {
                                                    type: "List",
                                                    props: {
                                                        y: -192,
                                                        x: -666,
                                                        width: 460,
                                                        var: "left_list",
                                                        spaceY: 15,
                                                        repeatY: 4,
                                                        repeatX: 1,
                                                        height: 430
                                                    },
                                                    compId: 21,
                                                    child: [{
                                                            type: "VScrollBar",
                                                            props: {
                                                                name: "scrollBar",
                                                                height: 430
                                                            },
                                                            compId: 22
                                                        }, {
                                                            type: "Box",
                                                            props: {
                                                                y: 13,
                                                                runtime: "UI/BingoUIExportItem.ts",
                                                                name: "render"
                                                            },
                                                            compId: 23,
                                                            child: [{
                                                                    type: "Image",
                                                                    props: {
                                                                        y: 0,
                                                                        x: 6,
                                                                        width: 70,
                                                                        skin: "res/bingo_atlas/bingo_common/_0000_3.png",
                                                                        height: 70
                                                                    },
                                                                    compId: 28
                                                                }, {
                                                                    type: "Image",
                                                                    props: {
                                                                        y: 0,
                                                                        x: 6,
                                                                        width: 70,
                                                                        skin: "res/bingo_atlas/bingo_common/_0000_3.png",
                                                                        name: "icon",
                                                                        height: 70
                                                                    },
                                                                    compId: 24
                                                                }, {
                                                                    type: "Button",
                                                                    props: {
                                                                        y: 38,
                                                                        x: 402,
                                                                        stateNum: 1,
                                                                        skin: "res/bingo_atlas/bingo_common/_0013_4.png",
                                                                        runtime: "UI/BingoUIScaleButton.ts",
                                                                        name: "btn",
                                                                        labelSize: 27,
                                                                        labelColors: "#00adff",
                                                                        label: "打开",
                                                                        anchorY: .5,
                                                                        anchorX: .5
                                                                    },
                                                                    compId: 27
                                                                }, {
                                                                    type: "Text",
                                                                    props: {
                                                                        y: 9,
                                                                        x: 112,
                                                                        name: "name",
                                                                        fontSize: 24,
                                                                        color: "#4c4c4c",
                                                                        runtime: "Laya.Text"
                                                                    },
                                                                    compId: 25
                                                                }, {
                                                                    type: "Text",
                                                                    props: {
                                                                        y: 39,
                                                                        x: 117,
                                                                        name: "tip",
                                                                        fontSize: 23,
                                                                        color: "#4c4c4c",
                                                                        runtime: "Laya.Text"
                                                                    },
                                                                    compId: 26
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, {
                                            type: "Sprite",
                                            props: {},
                                            compId: 18,
                                            child: [{
                                                    type: "List",
                                                    props: {
                                                        y: -237,
                                                        x: -149,
                                                        width: 780,
                                                        var: "r_list_1",
                                                        spaceX: 25,
                                                        repeatY: 1,
                                                        repeatX: 5,
                                                        height: 140,
                                                        hScrollBarSkin: " "
                                                    },
                                                    compId: 29,
                                                    child: [{
                                                            type: "HScrollBar",
                                                            props: {
                                                                width: 780
                                                            },
                                                            compId: 30
                                                        }, {
                                                            type: "Box",
                                                            props: {
                                                                runtime: "UI/BingoUIExportItem.ts",
                                                                name: "render"
                                                            },
                                                            compId: 31,
                                                            child: [{
                                                                    type: "Image",
                                                                    props: {
                                                                        y: 0,
                                                                        x: 0,
                                                                        width: 135,
                                                                        skin: "res/bingo_atlas/bingo_common/_0000_3.png",
                                                                        sizeGrid: "10,10,10,10",
                                                                        height: 135
                                                                    },
                                                                    compId: 32
                                                                }, {
                                                                    type: "Image",
                                                                    props: {
                                                                        y: 0,
                                                                        x: 0,
                                                                        width: 135,
                                                                        skin: "res/bingo_atlas/bingo_common/_0000_3.png",
                                                                        sizeGrid: "10,10,10,10",
                                                                        name: "icon",
                                                                        height: 135
                                                                    },
                                                                    compId: 33
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }, {
                                                    type: "List",
                                                    props: {
                                                        y: -70,
                                                        x: -149,
                                                        width: 780,
                                                        var: "r_list_2",
                                                        spaceX: 25,
                                                        repeatY: 1,
                                                        repeatX: 5,
                                                        height: 140,
                                                        hScrollBarSkin: " "
                                                    },
                                                    compId: 34,
                                                    child: [{
                                                            type: "HScrollBar",
                                                            props: {
                                                                width: 780
                                                            },
                                                            compId: 35
                                                        }, {
                                                            type: "Box",
                                                            props: {
                                                                runtime: "UI/BingoUIExportItem.ts",
                                                                name: "render"
                                                            },
                                                            compId: 36,
                                                            child: [{
                                                                    type: "Image",
                                                                    props: {
                                                                        y: 0,
                                                                        x: 0,
                                                                        width: 135,
                                                                        skin: "res/bingo_atlas/bingo_common/_0000_3.png",
                                                                        sizeGrid: "10,10,10,10",
                                                                        height: 135
                                                                    },
                                                                    compId: 37
                                                                }, {
                                                                    type: "Image",
                                                                    props: {
                                                                        y: 0,
                                                                        x: 0,
                                                                        width: 135,
                                                                        skin: "res/bingo_atlas/bingo_common/_0000_3.png",
                                                                        sizeGrid: "10,10,10,10",
                                                                        name: "icon",
                                                                        height: 135
                                                                    },
                                                                    compId: 38
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }, {
                                                    type: "List",
                                                    props: {
                                                        y: 94,
                                                        x: -149,
                                                        width: 780,
                                                        var: "r_list_3",
                                                        spaceX: 25,
                                                        repeatY: 1,
                                                        repeatX: 5,
                                                        height: 140,
                                                        hScrollBarSkin: " "
                                                    },
                                                    compId: 39,
                                                    child: [{
                                                            type: "HScrollBar",
                                                            props: {
                                                                width: 780
                                                            },
                                                            compId: 40
                                                        }, {
                                                            type: "Box",
                                                            props: {
                                                                runtime: "UI/BingoUIExportItem.ts",
                                                                name: "render"
                                                            },
                                                            compId: 41,
                                                            child: [{
                                                                    type: "Image",
                                                                    props: {
                                                                        y: 0,
                                                                        x: 0,
                                                                        width: 135,
                                                                        skin: "res/bingo_atlas/bingo_common/_0000_3.png",
                                                                        sizeGrid: "10,10,10,10",
                                                                        height: 135
                                                                    },
                                                                    compId: 42
                                                                }, {
                                                                    type: "Image",
                                                                    props: {
                                                                        y: 0,
                                                                        x: 0,
                                                                        width: 135,
                                                                        skin: "res/bingo_atlas/bingo_common/_0000_3.png",
                                                                        sizeGrid: "10,10,10,10",
                                                                        name: "icon",
                                                                        height: 135
                                                                    },
                                                                    compId: 43
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, {
                                            type: "Button",
                                            props: {
                                                y: 260,
                                                x: 0,
                                                var: "btn_ok",
                                                stateNum: 1,
                                                skin: "res/bingo_atlas/bingo_common/_0019.png",
                                                runtime: "UI/BingoUIScaleButton.ts",
                                                anchorY: .5,
                                                anchorX: .5
                                            },
                                            compId: 44
                                        }
                                    ]
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 320,
                                        x: 1386,
                                        width: 1,
                                        name: "BINGO_MIDDLE_RIGHT",
                                        height: 1
                                    },
                                    compId: 8
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 640,
                                        x: 0,
                                        width: 1,
                                        name: "BINGO_BOTTOM_LEFT",
                                        height: 1
                                    },
                                    compId: 9
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 640,
                                        x: 693,
                                        width: 1,
                                        name: "BINGO_BOTTOM_CENTER",
                                        height: 1
                                    },
                                    compId: 10
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 640,
                                        x: 1386,
                                        width: 1,
                                        name: "BINGO_BOTTOM_RIGHT",
                                        height: 1
                                    },
                                    compId: 11
                                }
                            ],
                            loadList: ["res/bingo_atlas/bingo_common/blank.png", "res/bingo_atlas/bingo_common/_0000_3.png", "res/bingo_atlas/bingo_common/_0013_4.png", "res/bingo_atlas/bingo_common/_0019.png"],
                            loadList3D: []
                        },
                        e.BingoCancelExport_HQUI = t,
                        s("UICode.res.bingo_gui.BingoCancelExport_HQUI", t);
                        class i extends n {
                            constructor() {
                                super()
                            }
                            createChildren() {
                                super.createChildren(),
                                this.createView(i.uiView)
                            }
                        }
                        i.uiView = {
                            type: "View",
                            props: {
                                width: 640,
                                height: 1386
                            },
                            compId: 2,
                            child: [{
                                    type: "Image",
                                    props: {
                                        y: 0,
                                        x: 0,
                                        width: 640,
                                        skin: "res/bingo_atlas/bingo_common/_0000_1.png",
                                        sizeGrid: "10,10,10,10",
                                        runtime: "UI/BingoUIFullscreenImage.ts",
                                        height: 1386
                                    },
                                    compId: 14
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 0,
                                        width: 1,
                                        name: "BINGO_TOP_LEFT",
                                        height: 1
                                    },
                                    compId: 3
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 320,
                                        width: 1,
                                        name: "BINGO_TOP_CENTER",
                                        height: 1
                                    },
                                    compId: 4
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 640,
                                        width: 1,
                                        name: "BINGO_TOP_RIGHT",
                                        height: 1
                                    },
                                    compId: 5
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 693,
                                        x: 0,
                                        width: 1,
                                        name: "BINGO_MIDDLE_LEFT",
                                        height: 1
                                    },
                                    compId: 6
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 693,
                                        x: 320,
                                        width: 1,
                                        name: "BINGO_MIDDLE_CENTER",
                                        height: 1
                                    },
                                    compId: 7,
                                    child: [{
                                            type: "List",
                                            props: {
                                                y: -650,
                                                x: -280,
                                                width: 560,
                                                var: "list",
                                                spaceY: 35,
                                                spaceX: 40,
                                                repeatY: 3,
                                                repeatX: 2,
                                                height: 1130
                                            },
                                            compId: 16,
                                            child: [{
                                                    type: "VScrollBar",
                                                    props: {
                                                        y: 0,
                                                        x: 0,
                                                        name: "scrollBar"
                                                    },
                                                    compId: 22
                                                }, {
                                                    type: "Box",
                                                    props: {
                                                        y: 0,
                                                        x: 0,
                                                        runtime: "UI/BingoUIExportItem.ts",
                                                        name: "render"
                                                    },
                                                    compId: 18,
                                                    child: [{
                                                            type: "Image",
                                                            props: {
                                                                y: 0,
                                                                x: 3,
                                                                width: 254,
                                                                skin: "res/bingo_atlas/bingo_common/_0000_3.png",
                                                                name: "icon",
                                                                height: 254
                                                            },
                                                            compId: 19
                                                        }, {
                                                            type: "Sprite",
                                                            props: {
                                                                y: 0,
                                                                x: 0,
                                                                width: 260,
                                                                texture: "res/bingo_atlas/bingo_common/_0010_4.png",
                                                                height: 340
                                                            },
                                                            compId: 20
                                                        }, {
                                                            type: "Text",
                                                            props: {
                                                                y: 267,
                                                                x: 0,
                                                                width: 260,
                                                                name: "name",
                                                                fontSize: 33,
                                                                color: "#4c4c4c",
                                                                align: "center",
                                                                runtime: "Laya.Text"
                                                            },
                                                            compId: 21
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, {
                                            type: "Button",
                                            props: {
                                                y: 595,
                                                x: 1,
                                                var: "btn_ok",
                                                stateNum: 1,
                                                skin: "res/bingo_atlas/bingo_common/_0019.png",
                                                runtime: "UI/BingoUIScaleButton.ts",
                                                anchorY: .5,
                                                anchorX: .5
                                            },
                                            compId: 23
                                        }
                                    ]
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 693,
                                        x: 640,
                                        width: 1,
                                        name: "BINGO_MIDDLE_RIGHT",
                                        height: 1
                                    },
                                    compId: 8
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 1386,
                                        x: 0,
                                        width: 1,
                                        name: "BINGO_BOTTOM_LEFT",
                                        height: 1
                                    },
                                    compId: 9
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 1386,
                                        x: 320,
                                        width: 1,
                                        name: "BINGO_BOTTOM_CENTER",
                                        height: 1
                                    },
                                    compId: 10
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 1386,
                                        x: 640,
                                        width: 1,
                                        name: "BINGO_BOTTOM_RIGHT",
                                        height: 1
                                    },
                                    compId: 11
                                }
                            ],
                            loadList: ["res/bingo_atlas/bingo_common/_0000_1.png", "res/bingo_atlas/bingo_common/_0000_3.png", "res/bingo_atlas/bingo_common/_0010_4.png", "res/bingo_atlas/bingo_common/_0019.png"],
                            loadList3D: []
                        },
                        e.BingoCancelExport_VQUI = i,
                        s("UICode.res.bingo_gui.BingoCancelExport_VQUI", i);
                        class a extends n {
                            constructor() {
                                super()
                            }
                            createChildren() {
                                super.createChildren(),
                                this.createView(a.uiView)
                            }
                        }
                        a.uiView = {
                            type: "View",
                            props: {
                                width: 1386,
                                runtime: "UI/BingoUIScaleButton.ts",
                                height: 640
                            },
                            compId: 2,
                            child: [{
                                    type: "Image",
                                    props: {
                                        y: 0,
                                        x: 0,
                                        width: 1386,
                                        skin: "res/bingo_atlas/bingo_common/_0003.png",
                                        sizeGrid: "10,10,10,10",
                                        runtime: "UI/BingoUIFullscreenImage.ts",
                                        height: 640
                                    },
                                    compId: 15
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 0,
                                        width: 1,
                                        name: "BINGO_TOP_LEFT",
                                        height: 1
                                    },
                                    compId: 3
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 693,
                                        width: 1,
                                        name: "BINGO_TOP_CENTER",
                                        height: 1
                                    },
                                    compId: 4
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 1386,
                                        width: 1,
                                        name: "BINGO_TOP_RIGHT",
                                        height: 1
                                    },
                                    compId: 5
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 320,
                                        x: 0,
                                        width: 1,
                                        name: "BINGO_MIDDLE_LEFT",
                                        height: 1
                                    },
                                    compId: 6
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 320,
                                        x: 693,
                                        width: 1,
                                        name: "BINGO_MIDDLE_CENTER",
                                        height: 1
                                    },
                                    compId: 7,
                                    child: [{
                                            type: "Sprite",
                                            props: {
                                                y: -301,
                                                x: -167,
                                                texture: "res/bingo_atlas/bingo_common/liwu_00.png"
                                            },
                                            compId: 19
                                        }, {
                                            type: "Sprite",
                                            props: {
                                                y: -211,
                                                x: -84,
                                                texture: "res/bingo_atlas/bingo_common/liwu_04.png"
                                            },
                                            compId: 20
                                        }, {
                                            type: "Image",
                                            props: {
                                                y: -10,
                                                x: -124,
                                                skin: "res/bingo_atlas/bingo_common/liwu_frame_01.png",
                                                scaleX: .5
                                            },
                                            compId: 22
                                        }, {
                                            type: "Image",
                                            props: {
                                                y: -5,
                                                x: -119,
                                                width: 475,
                                                var: "progress",
                                                skin: "res/bingo_atlas/bingo_common/liwu_frame_02.png",
                                                scaleX: .5,
                                                height: 26
                                            },
                                            compId: 23
                                        }, {
                                            type: "Sprite",
                                            props: {
                                                y: -7,
                                                x: 43,
                                                width: 76,
                                                texture: "res/bingo_atlas/bingo_common/liwu_btn_01.png",
                                                height: 34
                                            },
                                            compId: 24
                                        }
                                    ]
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 320,
                                        x: 1386,
                                        width: 1,
                                        name: "BINGO_MIDDLE_RIGHT",
                                        height: 1
                                    },
                                    compId: 8
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 640,
                                        x: 0,
                                        width: 1,
                                        name: "BINGO_BOTTOM_LEFT",
                                        height: 1
                                    },
                                    compId: 9
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 640,
                                        x: 693,
                                        width: 1,
                                        name: "BINGO_BOTTOM_CENTER",
                                        height: 1
                                    },
                                    compId: 10,
                                    child: [{
                                            type: "Button",
                                            props: {
                                                y: -202,
                                                x: -235,
                                                width: 470,
                                                var: "btn_click",
                                                stateNum: 1,
                                                skin: "res/bingo_atlas/bingo_common/wuchu_06.png",
                                                height: 158
                                            },
                                            compId: 25,
                                            child: [{
                                                    type: "Sprite",
                                                    props: {
                                                        y: 34,
                                                        x: 77,
                                                        width: 316,
                                                        texture: "res/bingo_atlas/bingo_common/wuchu_07.png",
                                                        height: 83
                                                    },
                                                    compId: 38
                                                }
                                            ]
                                        }, {
                                            type: "Sprite",
                                            props: {
                                                y: -331,
                                                x: 218,
                                                texture: "res/bingo_atlas/bingo_common/wuchu_09.png"
                                            },
                                            compId: 35
                                        }, {
                                            type: "Sprite",
                                            props: {
                                                y: -239,
                                                x: 249,
                                                texture: "res/bingo_atlas/bingo_common/wuchu_10.png"
                                            },
                                            compId: 36
                                        }, {
                                            type: "Sprite",
                                            props: {
                                                y: -311.5,
                                                x: 241.5,
                                                texture: "res/bingo_atlas/bingo_common/wuchu_08.png"
                                            },
                                            compId: 37
                                        }
                                    ]
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 640,
                                        x: 1386,
                                        width: 1,
                                        name: "BINGO_BOTTOM_RIGHT",
                                        height: 1
                                    },
                                    compId: 11
                                }
                            ],
                            loadList: ["res/bingo_atlas/bingo_common/_0003.png", "res/bingo_atlas/bingo_common/liwu_00.png", "res/bingo_atlas/bingo_common/liwu_04.png", "res/bingo_atlas/bingo_common/liwu_frame_01.png", "res/bingo_atlas/bingo_common/liwu_frame_02.png", "res/bingo_atlas/bingo_common/liwu_btn_01.png", "res/bingo_atlas/bingo_common/wuchu_06.png", "res/bingo_atlas/bingo_common/wuchu_07.png", "res/bingo_atlas/bingo_common/wuchu_09.png", "res/bingo_atlas/bingo_common/wuchu_10.png", "res/bingo_atlas/bingo_common/wuchu_08.png"],
                            loadList3D: []
                        },
                        e.BingoCombo_HUI = a,
                        s("UICode.res.bingo_gui.BingoCombo_HUI", a);
                        class o extends n {
                            constructor() {
                                super()
                            }
                            createChildren() {
                                super.createChildren(),
                                this.createView(o.uiView)
                            }
                        }
                        o.uiView = {
                            type: "View",
                            props: {
                                width: 640,
                                height: 1386
                            },
                            compId: 2,
                            child: [{
                                    type: "Image",
                                    props: {
                                        y: 0,
                                        x: 0,
                                        width: 640,
                                        skin: "res/bingo_atlas/bingo_common/_0003.png",
                                        runtime: "UI/BingoUIFullscreenImage.ts",
                                        height: 1380
                                    },
                                    compId: 15
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 0,
                                        width: 1,
                                        name: "BINGO_TOP_LEFT",
                                        height: 1
                                    },
                                    compId: 3
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 320,
                                        width: 1,
                                        name: "BINGO_TOP_CENTER",
                                        height: 1
                                    },
                                    compId: 4
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 640,
                                        width: 1,
                                        name: "BINGO_TOP_RIGHT",
                                        height: 1
                                    },
                                    compId: 5
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 693,
                                        x: 0,
                                        width: 1,
                                        name: "BINGO_MIDDLE_LEFT",
                                        height: 1
                                    },
                                    compId: 6
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 693,
                                        x: 320,
                                        width: 1,
                                        name: "BINGO_MIDDLE_CENTER",
                                        height: 1
                                    },
                                    compId: 7,
                                    child: [{
                                            type: "Sprite",
                                            props: {
                                                y: -394,
                                                x: -167,
                                                texture: "res/bingo_atlas/bingo_common/liwu_00.png"
                                            },
                                            compId: 17
                                        }, {
                                            type: "Sprite",
                                            props: {
                                                y: -271.5,
                                                x: -85,
                                                texture: "res/bingo_atlas/bingo_common/liwu_04.png"
                                            },
                                            compId: 18
                                        }, {
                                            type: "Image",
                                            props: {
                                                y: 7,
                                                x: -123,
                                                skin: "res/bingo_atlas/bingo_common/liwu_frame_01.png",
                                                scaleX: .5
                                            },
                                            compId: 20
                                        }, {
                                            type: "Image",
                                            props: {
                                                y: 13,
                                                x: -118,
                                                width: 239,
                                                var: "progress",
                                                skin: "res/bingo_atlas/bingo_common/liwu_frame_02.png",
                                                height: 25
                                            },
                                            compId: 21
                                        }, {
                                            type: "Sprite",
                                            props: {
                                                y: 10,
                                                x: 45,
                                                texture: "res/bingo_atlas/bingo_common/liwu_btn_01.png"
                                            },
                                            compId: 22
                                        }
                                    ]
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 693,
                                        x: 640,
                                        width: 1,
                                        name: "BINGO_MIDDLE_RIGHT",
                                        height: 1
                                    },
                                    compId: 8
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 1386,
                                        x: 0,
                                        width: 1,
                                        name: "BINGO_BOTTOM_LEFT",
                                        height: 1
                                    },
                                    compId: 9
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 1386,
                                        x: 320,
                                        width: 1,
                                        name: "BINGO_BOTTOM_CENTER",
                                        height: 1
                                    },
                                    compId: 10,
                                    child: [{
                                            type: "Button",
                                            props: {
                                                y: -113,
                                                x: -153,
                                                var: "btn_click",
                                                stateNum: 1,
                                                skin: "res/bingo_atlas/bingo_common/wuchu_06.png"
                                            },
                                            compId: 26,
                                            child: [{
                                                    type: "Sprite",
                                                    props: {
                                                        y: 23,
                                                        x: 56,
                                                        texture: "res/bingo_atlas/bingo_common/wuchu_07.png"
                                                    },
                                                    compId: 32
                                                }
                                            ]
                                        }, {
                                            type: "Sprite",
                                            props: {
                                                y: -224,
                                                x: -131,
                                                texture: "res/bingo_atlas/bingo_common/wuchu_09.png",
                                                skewY: 180
                                            },
                                            compId: 29
                                        }, {
                                            type: "Sprite",
                                            props: {
                                                y: -144,
                                                x: -154,
                                                texture: "res/bingo_atlas/bingo_common/wuchu_10.png",
                                                skewY: 180
                                            },
                                            compId: 30
                                        }, {
                                            type: "Sprite",
                                            props: {
                                                y: -229,
                                                x: -178,
                                                texture: "res/bingo_atlas/bingo_common/wuchu_08.png",
                                                rotation: 70
                                            },
                                            compId: 31
                                        }
                                    ]
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 1386,
                                        x: 640,
                                        width: 1,
                                        name: "BINGO_BOTTOM_RIGHT",
                                        height: 1
                                    },
                                    compId: 11
                                }
                            ],
                            animations: [{
                                    nodes: [{
                                            target: 24,
                                            keyframes: {
                                                y: [{
                                                        value: -100,
                                                        tweenMethod: "linearNone",
                                                        tween: !0,
                                                        target: 24,
                                                        key: "y",
                                                        index: 0
                                                    }, {
                                                        value: -150,
                                                        tweenMethod: "linearNone",
                                                        tween: !0,
                                                        target: 24,
                                                        key: "y",
                                                        index: 5
                                                    }, {
                                                        value: -100,
                                                        tweenMethod: "linearNone",
                                                        tween: !0,
                                                        target: 24,
                                                        key: "y",
                                                        index: 10
                                                    }
                                                ]
                                            }
                                        }
                                    ],
                                    name: "ani1",
                                    id: 1,
                                    frameRate: 24,
                                    action: 0
                                }
                            ],
                            loadList: ["res/bingo_atlas/bingo_common/_0003.png", "res/bingo_atlas/bingo_common/liwu_00.png", "res/bingo_atlas/bingo_common/liwu_04.png", "res/bingo_atlas/bingo_common/liwu_frame_01.png", "res/bingo_atlas/bingo_common/liwu_frame_02.png", "res/bingo_atlas/bingo_common/liwu_btn_01.png", "res/bingo_atlas/bingo_common/wuchu_06.png", "res/bingo_atlas/bingo_common/wuchu_07.png", "res/bingo_atlas/bingo_common/wuchu_09.png", "res/bingo_atlas/bingo_common/wuchu_10.png", "res/bingo_atlas/bingo_common/wuchu_08.png"],
                            loadList3D: []
                        },
                        e.BingoCombo_VUI = o,
                        s("UICode.res.bingo_gui.BingoCombo_VUI", o);
                        class r extends n {
                            constructor() {
                                super()
                            }
                            createChildren() {
                                super.createChildren(),
                                this.createView(r.uiView)
                            }
                        }
                        r.uiView = {
                            type: "View",
                            props: {
                                width: 1386,
                                runtime: "UI/BingoUIScaleButton.ts",
                                height: 640
                            },
                            compId: 2,
                            child: [{
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 0,
                                        var: "spBg"
                                    },
                                    compId: 55
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 0,
                                        width: 1,
                                        name: "BINGO_TOP_LEFT",
                                        height: 1
                                    },
                                    compId: 3
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 693,
                                        width: 1,
                                        name: "BINGO_TOP_CENTER",
                                        height: 1
                                    },
                                    compId: 4
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 1386,
                                        width: 1,
                                        name: "BINGO_TOP_RIGHT",
                                        height: 1
                                    },
                                    compId: 5
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 320,
                                        x: 0,
                                        width: 1,
                                        name: "BINGO_MIDDLE_LEFT",
                                        height: 1
                                    },
                                    compId: 6
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 320,
                                        x: 693,
                                        width: 1,
                                        name: "BINGO_MIDDLE_CENTER",
                                        height: 1
                                    },
                                    compId: 7,
                                    child: [{
                                            type: "Image",
                                            props: {
                                                y: -320,
                                                x: -300.5,
                                                var: "img_title"
                                            },
                                            compId: 43
                                        }, {
                                            type: "Sprite",
                                            props: {
                                                y: -206,
                                                x: -289,
                                                var: "spAni"
                                            },
                                            compId: 39
                                        }, {
                                            type: "Image",
                                            props: {
                                                y: -208,
                                                x: 338,
                                                var: "progressBg"
                                            },
                                            compId: 44
                                        }, {
                                            type: "Image",
                                            props: {
                                                y: 144,
                                                x: 343,
                                                var: "progress",
                                                anchorY: 1
                                            },
                                            compId: 42
                                        }, {
                                            type: "Image",
                                            props: {
                                                y: 99,
                                                x: 318,
                                                var: "progressEnd"
                                            },
                                            compId: 45
                                        }
                                    ]
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 320,
                                        x: 1386,
                                        width: 1,
                                        name: "BINGO_MIDDLE_RIGHT",
                                        height: 1
                                    },
                                    compId: 8
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 640,
                                        x: 0,
                                        width: 1,
                                        name: "BINGO_BOTTOM_LEFT",
                                        height: 1
                                    },
                                    compId: 9
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 640,
                                        x: 693,
                                        width: 1,
                                        name: "BINGO_BOTTOM_CENTER",
                                        height: 1
                                    },
                                    compId: 10,
                                    child: [{
                                            type: "Button",
                                            props: {
                                                y: -149,
                                                x: -221,
                                                var: "btn_click",
                                                stateNum: 1
                                            },
                                            compId: 25
                                        }, {
                                            type: "Image",
                                            props: {
                                                y: -73,
                                                x: 108,
                                                var: "img_ani",
                                                scaleY: 1,
                                                scaleX: 1,
                                                anchorY: 1
                                            },
                                            compId: 36
                                        }
                                    ]
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 640,
                                        x: 1386,
                                        width: 1,
                                        name: "BINGO_BOTTOM_RIGHT",
                                        height: 1
                                    },
                                    compId: 11
                                }
                            ],
                            animations: [{
                                    nodes: [{
                                            target: 36,
                                            keyframes: {
                                                x: [{
                                                        value: 108,
                                                        tweenMethod: "linearNone",
                                                        tween: !0,
                                                        target: 36,
                                                        key: "x",
                                                        index: 0
                                                    }
                                                ],
                                                scaleY: [{
                                                        value: 1,
                                                        tweenMethod: "linearNone",
                                                        tween: !0,
                                                        target: 36,
                                                        key: "scaleY",
                                                        index: 0
                                                    }, {
                                                        value: 1.2,
                                                        tweenMethod: "linearNone",
                                                        tween: !0,
                                                        target: 36,
                                                        key: "scaleY",
                                                        index: 5
                                                    }, {
                                                        value: 1,
                                                        tweenMethod: "linearNone",
                                                        tween: !0,
                                                        target: 36,
                                                        key: "scaleY",
                                                        index: 10
                                                    }
                                                ],
                                                scaleX: [{
                                                        value: 1,
                                                        tweenMethod: "linearNone",
                                                        tween: !0,
                                                        target: 36,
                                                        key: "scaleX",
                                                        index: 0
                                                    }, {
                                                        value: 1.2,
                                                        tweenMethod: "linearNone",
                                                        tween: !0,
                                                        target: 36,
                                                        key: "scaleX",
                                                        index: 5
                                                    }, {
                                                        value: 1,
                                                        tweenMethod: "linearNone",
                                                        tween: !0,
                                                        target: 36,
                                                        key: "scaleX",
                                                        index: 10
                                                    }
                                                ]
                                            }
                                        }
                                    ],
                                    name: "ani1",
                                    id: 1,
                                    frameRate: 24,
                                    action: 0
                                }
                            ],
                            loadList: [],
                            loadList3D: []
                        },
                        e.BingoFinishCombo_HUI = r,
                        s("UICode.res.bingo_gui.BingoFinishCombo_HUI", r);
                        class l extends n {
                            constructor() {
                                super()
                            }
                            createChildren() {
                                super.createChildren(),
                                this.createView(l.uiView)
                            }
                        }
                        l.uiView = {
                            type: "View",
                            props: {
                                width: 640,
                                height: 1386
                            },
                            compId: 2,
                            child: [{
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 0,
                                        var: "spBg"
                                    },
                                    compId: 33
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 0,
                                        width: 1,
                                        name: "BINGO_TOP_LEFT",
                                        height: 1
                                    },
                                    compId: 3
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 320,
                                        width: 1,
                                        name: "BINGO_TOP_CENTER",
                                        height: 1
                                    },
                                    compId: 4,
                                    child: [{
                                            type: "Image",
                                            props: {
                                                y: 226,
                                                x: -300,
                                                var: "img_title"
                                            },
                                            compId: 28
                                        }, {
                                            type: "Image",
                                            props: {
                                                y: 405,
                                                x: 199,
                                                var: "progressBg",
                                                rotation: 90
                                            },
                                            compId: 30
                                        }, {
                                            type: "Image",
                                            props: {
                                                y: 410,
                                                x: -151,
                                                var: "progress",
                                                rotation: 90,
                                                anchorY: 1
                                            },
                                            compId: 31
                                        }, {
                                            type: "Image",
                                            props: {
                                                y: 382,
                                                x: -201,
                                                var: "progressEnd"
                                            },
                                            compId: 32
                                        }
                                    ]
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 640,
                                        width: 1,
                                        name: "BINGO_TOP_RIGHT",
                                        height: 1
                                    },
                                    compId: 5
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 693,
                                        x: 0,
                                        width: 1,
                                        name: "BINGO_MIDDLE_LEFT",
                                        height: 1
                                    },
                                    compId: 6
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 693,
                                        x: 320,
                                        width: 1,
                                        name: "BINGO_MIDDLE_CENTER",
                                        height: 1
                                    },
                                    compId: 7,
                                    child: [{
                                            type: "Sprite",
                                            props: {
                                                y: -155,
                                                x: -317,
                                                var: "spAni"
                                            },
                                            compId: 29
                                        }
                                    ]
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 693,
                                        x: 640,
                                        width: 1,
                                        name: "BINGO_MIDDLE_RIGHT",
                                        height: 1
                                    },
                                    compId: 8
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 1386,
                                        x: 0,
                                        width: 1,
                                        name: "BINGO_BOTTOM_LEFT",
                                        height: 1
                                    },
                                    compId: 9
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 1386,
                                        x: 320,
                                        width: 1,
                                        name: "BINGO_BOTTOM_CENTER",
                                        height: 1
                                    },
                                    compId: 10,
                                    child: [{
                                            type: "Button",
                                            props: {
                                                y: -149,
                                                x: -221,
                                                var: "btn_click",
                                                stateNum: 1
                                            },
                                            compId: 23
                                        }, {
                                            type: "Image",
                                            props: {
                                                y: -86,
                                                x: 78,
                                                var: "img_ani",
                                                anchorY: 1
                                            },
                                            compId: 27
                                        }
                                    ]
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 1386,
                                        x: 640,
                                        width: 1,
                                        name: "BINGO_BOTTOM_RIGHT",
                                        height: 1
                                    },
                                    compId: 11
                                }
                            ],
                            animations: [{
                                    nodes: [{
                                            target: 27,
                                            keyframes: {
                                                x: [{
                                                        value: 78,
                                                        tweenMethod: "linearNone",
                                                        tween: !0,
                                                        target: 27,
                                                        key: "x",
                                                        index: 0
                                                    }
                                                ],
                                                scaleY: [{
                                                        value: 1,
                                                        tweenMethod: "linearNone",
                                                        tween: !0,
                                                        target: 27,
                                                        key: "scaleY",
                                                        index: 0
                                                    }, {
                                                        value: 1.2,
                                                        tweenMethod: "linearNone",
                                                        tween: !0,
                                                        target: 27,
                                                        key: "scaleY",
                                                        index: 5
                                                    }, {
                                                        value: 1,
                                                        tweenMethod: "linearNone",
                                                        tween: !0,
                                                        target: 27,
                                                        key: "scaleY",
                                                        index: 10
                                                    }
                                                ],
                                                scaleX: [{
                                                        value: 1,
                                                        tweenMethod: "linearNone",
                                                        tween: !0,
                                                        target: 27,
                                                        key: "scaleX",
                                                        index: 0
                                                    }, {
                                                        value: 1.2,
                                                        tweenMethod: "linearNone",
                                                        tween: !0,
                                                        target: 27,
                                                        key: "scaleX",
                                                        index: 5
                                                    }, {
                                                        value: 1,
                                                        tweenMethod: "linearNone",
                                                        tween: !0,
                                                        target: 27,
                                                        key: "scaleX",
                                                        index: 10
                                                    }
                                                ]
                                            }
                                        }
                                    ],
                                    name: "ani1",
                                    id: 1,
                                    frameRate: 24,
                                    action: 0
                                }
                            ],
                            loadList: [],
                            loadList3D: []
                        },
                        e.BingoFinishCombo_VUI = l,
                        s("UICode.res.bingo_gui.BingoFinishCombo_VUI", l);
                        class h extends n {
                            constructor() {
                                super()
                            }
                            createChildren() {
                                super.createChildren(),
                                this.createView(h.uiView)
                            }
                        }
                        h.uiView = {
                            type: "View",
                            props: {
                                width: 1386,
                                height: 640
                            },
                            compId: 2,
                            child: [{
                                    type: "Image",
                                    props: {
                                        y: 1,
                                        x: -22,
                                        width: 1386,
                                        skin: "res/bingo_atlas/bingo_common/_0003.png",
                                        sizeGrid: "10,10,10,10",
                                        runtime: "UI/BingoUIFullscreenImage.ts",
                                        height: 640
                                    },
                                    compId: 15
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 0,
                                        width: 1,
                                        name: "BINGO_TOP_LEFT",
                                        height: 1
                                    },
                                    compId: 3
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 693,
                                        width: 1,
                                        name: "BINGO_TOP_CENTER",
                                        height: 1
                                    },
                                    compId: 4
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 1386,
                                        width: 1,
                                        name: "BINGO_TOP_RIGHT",
                                        height: 1
                                    },
                                    compId: 5
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 320,
                                        x: 0,
                                        width: 1,
                                        name: "BINGO_MIDDLE_LEFT",
                                        height: 1
                                    },
                                    compId: 6
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 320,
                                        x: 693,
                                        width: 1,
                                        name: "BINGO_MIDDLE_CENTER",
                                        height: 1
                                    },
                                    compId: 7,
                                    child: [{
                                            type: "List",
                                            props: {
                                                y: -335,
                                                x: -1182,
                                                width: 1996,
                                                var: "list",
                                                spaceY: 10,
                                                spaceX: -5,
                                                scaleY: 1.2,
                                                scaleX: 1.2,
                                                repeatY: 2,
                                                repeatX: 7,
                                                height: 565
                                            },
                                            compId: 16,
                                            child: [{
                                                    type: "HScrollBar",
                                                    props: {
                                                        width: 1996,
                                                        name: "scrollBar"
                                                    },
                                                    compId: 17
                                                }, {
                                                    type: "Box",
                                                    props: {
                                                        y: 15.5,
                                                        x: 0,
                                                        width: 273,
                                                        runtime: "UI/BingoUIExportItem.ts",
                                                        name: "render"
                                                    },
                                                    compId: 18,
                                                    child: [{
                                                            type: "Image",
                                                            props: {
                                                                y: 11,
                                                                x: 15,
                                                                width: 204,
                                                                name: "icon",
                                                                height: 196
                                                            },
                                                            compId: 24
                                                        }, {
                                                            type: "Image",
                                                            props: {
                                                                y: 0,
                                                                x: 0,
                                                                skin: "res/bingo_atlas/bingo_common/0003_2.png",
                                                                name: "frame_big"
                                                            },
                                                            compId: 23
                                                        }, {
                                                            type: "Text",
                                                            props: {
                                                                y: 211,
                                                                x: 0,
                                                                width: 230,
                                                                text: "我的名字我的名字",
                                                                overflow: "hidden",
                                                                name: "name",
                                                                fontSize: 30,
                                                                color: "#ffffff",
                                                                bold: !0,
                                                                align: "center",
                                                                runtime: "Laya.Text"
                                                            },
                                                            compId: 25
                                                        }, {
                                                            type: "Image",
                                                            props: {
                                                                y: -21,
                                                                x: -24,
                                                                width: 228,
                                                                scaleY: 1.15,
                                                                scaleX: 1.2,
                                                                name: "frame_line",
                                                                height: 250
                                                            },
                                                            compId: 33
                                                        }, {
                                                            type: "Image",
                                                            props: {
                                                                y: 28,
                                                                x: 28,
                                                                scaleY: 1.8,
                                                                scaleX: 1.8,
                                                                name: "icon_click"
                                                            },
                                                            compId: 34
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 320,
                                        x: 1386,
                                        width: 1,
                                        name: "BINGO_MIDDLE_RIGHT",
                                        height: 1
                                    },
                                    compId: 8
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 640,
                                        x: 0,
                                        width: 1,
                                        name: "BINGO_BOTTOM_LEFT",
                                        height: 1
                                    },
                                    compId: 9
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 640,
                                        x: 693,
                                        width: 1,
                                        name: "BINGO_BOTTOM_CENTER",
                                        height: 1
                                    },
                                    compId: 10,
                                    child: [{
                                            type: "Button",
                                            props: {
                                                y: -130,
                                                x: 0,
                                                var: "btn_ok",
                                                stateNum: 1,
                                                skin: "res/bingo_atlas/bingo_common/0003.png",
                                                runtime: "UI/BingoUIScaleButton.ts",
                                                anchorY: .5,
                                                anchorX: .5
                                            },
                                            compId: 29
                                        }
                                    ]
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 640,
                                        x: 1386,
                                        width: 1,
                                        name: "BINGO_BOTTOM_RIGHT",
                                        height: 1
                                    },
                                    compId: 11
                                }
                            ],
                            loadList: ["res/bingo_atlas/bingo_common/_0003.png", "res/bingo_atlas/bingo_common/0003_2.png", "res/bingo_atlas/bingo_common/0003.png"],
                            loadList3D: []
                        },
                        e.BingoFinishExport_HQUI = h,
                        s("UICode.res.bingo_gui.BingoFinishExport_HQUI", h);
                        class p extends n {
                            constructor() {
                                super()
                            }
                            createChildren() {
                                super.createChildren(),
                                this.createView(p.uiView)
                            }
                        }
                        p.uiView = {
                            type: "View",
                            props: {
                                width: 640,
                                height: 1386
                            },
                            compId: 2,
                            child: [{
                                    type: "Image",
                                    props: {
                                        y: 0,
                                        x: 0,
                                        width: 640,
                                        skin: "res/bingo_atlas/bingo_common/blank.png",
                                        sizeGrid: "3,3,3,3",
                                        runtime: "UI/BingoUIFullscreenImage.ts",
                                        height: 1386
                                    },
                                    compId: 44
                                }, {
                                    type: "Image",
                                    props: {
                                        y: 0,
                                        x: 0,
                                        width: 640,
                                        skin: "res/bingo_atlas/bingo_common/_0000_1.png",
                                        sizeGrid: "10,10,10,10",
                                        runtime: "UI/BingoUIWidthFillImage.ts",
                                        height: 510
                                    },
                                    compId: 15
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 0,
                                        width: 1,
                                        name: "BINGO_TOP_LEFT",
                                        height: 1
                                    },
                                    compId: 3
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 320,
                                        width: 1,
                                        name: "BINGO_TOP_CENTER",
                                        height: 1
                                    },
                                    compId: 4,
                                    child: [{
                                            type: "Text",
                                            props: {
                                                y: 27,
                                                x: -112,
                                                text: "__",
                                                fontSize: 34,
                                                color: "#ffffff",
                                                runtime: "Laya.Text"
                                            },
                                            compId: 25
                                        }, {
                                            type: "Text",
                                            props: {
                                                y: 27,
                                                x: 81,
                                                text: "__",
                                                fontSize: 34,
                                                color: "#ffffff",
                                                runtime: "Laya.Text"
                                            },
                                            compId: 26
                                        }, {
                                            type: "Text",
                                            props: {
                                                y: 45,
                                                x: -64,
                                                text: "热门推荐",
                                                fontSize: 32,
                                                color: "#ffffff",
                                                runtime: "Laya.Text"
                                            },
                                            compId: 27
                                        }, {
                                            type: "Box",
                                            props: {
                                                y: 162,
                                                x: -108.5,
                                                var: "top1",
                                                runtime: "UI/BingoUIExportItem.ts"
                                            },
                                            compId: 16,
                                            child: [{
                                                    type: "Image",
                                                    props: {
                                                        y: 2,
                                                        x: 6,
                                                        width: 205,
                                                        skin: "res/bingo_atlas/bingo_common/_0000_3.png",
                                                        name: "icon",
                                                        height: 205
                                                    },
                                                    compId: 17
                                                }, {
                                                    type: "Sprite",
                                                    props: {
                                                        y: -49,
                                                        x: 37,
                                                        texture: "res/bingo_atlas/bingo_common/_0008_7.png"
                                                    },
                                                    compId: 22
                                                }, {
                                                    type: "Sprite",
                                                    props: {
                                                        y: -40,
                                                        x: 54,
                                                        texture: "res/bingo_atlas/bingo_common/_0009_TOP.png"
                                                    },
                                                    compId: 23
                                                }, {
                                                    type: "Sprite",
                                                    props: {
                                                        y: -58,
                                                        x: 139,
                                                        texture: "res/bingo_atlas/bingo_common/_0007_1.png"
                                                    },
                                                    compId: 24
                                                }, {
                                                    type: "Sprite",
                                                    props: {
                                                        y: 0,
                                                        x: 0,
                                                        texture: "res/bingo_atlas/bingo_common/_0003_6.png"
                                                    },
                                                    compId: 18
                                                }, {
                                                    type: "Text",
                                                    props: {
                                                        y: 207,
                                                        x: 26.5,
                                                        width: 164,
                                                        overflow: "hidden",
                                                        name: "name",
                                                        height: 26,
                                                        fontSize: 26,
                                                        color: "#ffffff",
                                                        align: "center",
                                                        runtime: "Laya.Text"
                                                    },
                                                    compId: 20
                                                }, {
                                                    type: "Text",
                                                    props: {
                                                        y: 242,
                                                        x: 4,
                                                        width: 210,
                                                        name: "tip",
                                                        fontSize: 22,
                                                        color: "#ffffff",
                                                        align: "center",
                                                        runtime: "Laya.Text"
                                                    },
                                                    compId: 21
                                                }
                                            ]
                                        }, {
                                            type: "Box",
                                            props: {
                                                y: 230,
                                                x: -308,
                                                var: "top2",
                                                runtime: "UI/BingoUIExportItem.ts"
                                            },
                                            compId: 28,
                                            child: [{
                                                    type: "Image",
                                                    props: {
                                                        y: 2,
                                                        x: 6,
                                                        width: 170,
                                                        skin: "res/bingo_atlas/bingo_common/_0000_3.png",
                                                        name: "icon",
                                                        height: 170
                                                    },
                                                    compId: 29
                                                }, {
                                                    type: "Sprite",
                                                    props: {
                                                        y: -42,
                                                        x: 30,
                                                        width: 76,
                                                        texture: "res/bingo_atlas/bingo_common/_0008_7.png",
                                                        height: 36
                                                    },
                                                    compId: 30
                                                }, {
                                                    type: "Sprite",
                                                    props: {
                                                        y: -35,
                                                        x: 43,
                                                        width: 53,
                                                        texture: "res/bingo_atlas/bingo_common/_0009_TOP.png",
                                                        height: 21
                                                    },
                                                    compId: 31
                                                }, {
                                                    type: "Sprite",
                                                    props: {
                                                        y: -50,
                                                        x: 119,
                                                        texture: "res/bingo_atlas/bingo_common/_0006_2.png"
                                                    },
                                                    compId: 32
                                                }, {
                                                    type: "Sprite",
                                                    props: {
                                                        y: 0,
                                                        x: 0,
                                                        texture: "res/bingo_atlas/bingo_common/_0002_6.png"
                                                    },
                                                    compId: 33
                                                }, {
                                                    type: "Text",
                                                    props: {
                                                        y: 203,
                                                        x: 0,
                                                        width: 185,
                                                        name: "tip",
                                                        fontSize: 19,
                                                        color: "#ffffff",
                                                        align: "center",
                                                        runtime: "Laya.Text"
                                                    },
                                                    compId: 35
                                                }, {
                                                    type: "Text",
                                                    props: {
                                                        y: 177,
                                                        x: 14,
                                                        width: 164,
                                                        overflow: "hidden",
                                                        name: "name",
                                                        height: 26,
                                                        fontSize: 26,
                                                        color: "#ffffff",
                                                        align: "center",
                                                        runtime: "Laya.Text"
                                                    },
                                                    compId: 57
                                                }
                                            ]
                                        }, {
                                            type: "Box",
                                            props: {
                                                y: 230,
                                                x: 123,
                                                var: "top3",
                                                runtime: "UI/BingoUIExportItem.ts"
                                            },
                                            compId: 36,
                                            child: [{
                                                    type: "Image",
                                                    props: {
                                                        y: 2,
                                                        x: 6,
                                                        width: 170,
                                                        skin: "res/bingo_atlas/bingo_common/_0000_3.png",
                                                        name: "icon",
                                                        height: 170
                                                    },
                                                    compId: 37
                                                }, {
                                                    type: "Sprite",
                                                    props: {
                                                        y: -42,
                                                        x: 30,
                                                        width: 76,
                                                        texture: "res/bingo_atlas/bingo_common/_0008_7.png",
                                                        height: 36
                                                    },
                                                    compId: 38
                                                }, {
                                                    type: "Sprite",
                                                    props: {
                                                        y: -35,
                                                        x: 43,
                                                        width: 53,
                                                        texture: "res/bingo_atlas/bingo_common/_0009_TOP.png",
                                                        height: 21
                                                    },
                                                    compId: 39
                                                }, {
                                                    type: "Sprite",
                                                    props: {
                                                        y: -50,
                                                        x: 119,
                                                        texture: "res/bingo_atlas/bingo_common/_0005_3.png"
                                                    },
                                                    compId: 40
                                                }, {
                                                    type: "Sprite",
                                                    props: {
                                                        y: 0,
                                                        x: 0,
                                                        texture: "res/bingo_atlas/bingo_common/_0001_6.png"
                                                    },
                                                    compId: 41
                                                }, {
                                                    type: "Text",
                                                    props: {
                                                        y: 203,
                                                        x: 0,
                                                        width: 185,
                                                        name: "tip",
                                                        fontSize: 19,
                                                        color: "#ffffff",
                                                        align: "center",
                                                        runtime: "Laya.Text"
                                                    },
                                                    compId: 43
                                                }, {
                                                    type: "Text",
                                                    props: {
                                                        y: 190,
                                                        x: 14,
                                                        width: 164,
                                                        overflow: "hidden",
                                                        name: "name",
                                                        height: 26,
                                                        fontSize: 26,
                                                        color: "#ffffff",
                                                        align: "center",
                                                        runtime: "Laya.Text"
                                                    },
                                                    compId: 58
                                                }
                                            ]
                                        }
                                    ]
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 640,
                                        width: 1,
                                        name: "BINGO_TOP_RIGHT",
                                        height: 1
                                    },
                                    compId: 5
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 693,
                                        x: 0,
                                        width: 1,
                                        name: "BINGO_MIDDLE_LEFT",
                                        height: 1
                                    },
                                    compId: 6
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 693,
                                        x: 320,
                                        width: 1,
                                        name: "BINGO_MIDDLE_CENTER",
                                        height: 1
                                    },
                                    compId: 7,
                                    child: [{
                                            type: "List",
                                            props: {
                                                y: -180,
                                                x: -320,
                                                width: 640,
                                                var: "list",
                                                repeatY: 5,
                                                repeatX: 1,
                                                height: 690
                                            },
                                            compId: 45,
                                            child: [{
                                                    type: "VScrollBar",
                                                    props: {
                                                        name: "scrollBar",
                                                        height: 430
                                                    },
                                                    compId: 46
                                                }, {
                                                    type: "Box",
                                                    props: {
                                                        runtime: "UI/BingoUIExportItem.ts",
                                                        name: "render"
                                                    },
                                                    compId: 47,
                                                    child: [{
                                                            type: "Image",
                                                            props: {
                                                                y: 15,
                                                                x: 94,
                                                                width: 95,
                                                                skin: "res/bingo_atlas/bingo_common/_0000_3.png",
                                                                name: "icon",
                                                                height: 95
                                                            },
                                                            compId: 49
                                                        }, {
                                                            type: "Sprite",
                                                            props: {
                                                                y: 128,
                                                                x: 7,
                                                                texture: "res/bingo_atlas/bingo_common/_0006_rect_2.png"
                                                            },
                                                            compId: 53
                                                        }, {
                                                            type: "Button",
                                                            props: {
                                                                y: 21,
                                                                x: 455,
                                                                stateNum: 1,
                                                                skin: "res/bingo_atlas/bingo_common/_0004_.png",
                                                                runtime: "UI/BingoUIScaleButton.ts",
                                                                name: "btn",
                                                                labelSize: 27,
                                                                labelColors: "#00adff"
                                                            },
                                                            compId: 52
                                                        }, {
                                                            type: "Text",
                                                            props: {
                                                                y: 32,
                                                                x: 208,
                                                                name: "name",
                                                                fontSize: 24,
                                                                color: "#4c4c4c",
                                                                runtime: "Laya.Text"
                                                            },
                                                            compId: 50
                                                        }, {
                                                            type: "Text",
                                                            props: {
                                                                y: 65,
                                                                x: 212,
                                                                name: "tip",
                                                                fontSize: 22,
                                                                color: "#373737",
                                                                runtime: "Laya.Text"
                                                            },
                                                            compId: 51
                                                        }, {
                                                            type: "Text",
                                                            props: {
                                                                y: 36,
                                                                x: 17,
                                                                width: 60,
                                                                name: "index",
                                                                fontSize: 50,
                                                                color: "#1c1c1c",
                                                                align: "center",
                                                                runtime: "Laya.Text"
                                                            },
                                                            compId: 54
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, {
                                            type: "Sprite",
                                            props: {
                                                y: -24,
                                                x: 193,
                                                texture: "res/bingo_atlas/bingo_common/finger_2.png"
                                            },
                                            compId: 56
                                        }
                                    ]
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 693,
                                        x: 640,
                                        width: 1,
                                        name: "BINGO_MIDDLE_RIGHT",
                                        height: 1
                                    },
                                    compId: 8
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 1386,
                                        x: 0,
                                        width: 1,
                                        name: "BINGO_BOTTOM_LEFT",
                                        height: 1
                                    },
                                    compId: 9
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 1386,
                                        x: 320,
                                        width: 1,
                                        name: "BINGO_BOTTOM_CENTER",
                                        height: 1
                                    },
                                    compId: 10,
                                    child: [{
                                            type: "Button",
                                            props: {
                                                y: -93,
                                                x: 0,
                                                var: "btn_ok",
                                                stateNum: 1,
                                                skin: "res/bingo_atlas/bingo_common/_0019.png",
                                                runtime: "UI/BingoUIScaleButton.ts",
                                                anchorY: .5,
                                                anchorX: .5
                                            },
                                            compId: 55
                                        }
                                    ]
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 1386,
                                        x: 640,
                                        width: 1,
                                        name: "BINGO_BOTTOM_RIGHT",
                                        height: 1
                                    },
                                    compId: 11
                                }
                            ],
                            animations: [{
                                    nodes: [{
                                            target: 56,
                                            keyframes: {
                                                texture: [{
                                                        value: "res/bingo_atlas/bingo_common/finger_1.png",
                                                        tweenMethod: "linearNone",
                                                        tween: !1,
                                                        target: 56,
                                                        key: "texture",
                                                        index: 0
                                                    }, {
                                                        value: "res/bingo_atlas/bingo_common/finger_2.png",
                                                        tweenMethod: "linearNone",
                                                        tween: !1,
                                                        target: 56,
                                                        key: "texture",
                                                        index: 4
                                                    }, {
                                                        value: "res/bingo_atlas/bingo_common/finger_1.png",
                                                        tweenMethod: "linearNone",
                                                        tween: !1,
                                                        target: 56,
                                                        key: "texture",
                                                        index: 8
                                                    }
                                                ]
                                            }
                                        }
                                    ],
                                    name: "ani1",
                                    id: 1,
                                    frameRate: 24,
                                    action: 0
                                }
                            ],
                            loadList: ["res/bingo_atlas/bingo_common/blank.png", "res/bingo_atlas/bingo_common/_0000_1.png", "res/bingo_atlas/bingo_common/_0000_3.png", "res/bingo_atlas/bingo_common/_0008_7.png", "res/bingo_atlas/bingo_common/_0009_TOP.png", "res/bingo_atlas/bingo_common/_0007_1.png", "res/bingo_atlas/bingo_common/_0003_6.png", "res/bingo_atlas/bingo_common/_0006_2.png", "res/bingo_atlas/bingo_common/_0002_6.png", "res/bingo_atlas/bingo_common/_0005_3.png", "res/bingo_atlas/bingo_common/_0001_6.png", "res/bingo_atlas/bingo_common/_0006_rect_2.png", "res/bingo_atlas/bingo_common/_0004_.png", "res/bingo_atlas/bingo_common/finger_2.png", "res/bingo_atlas/bingo_common/_0019.png", "res/bingo_atlas/bingo_common/finger_1.png"],
                            loadList3D: []
                        },
                        e.BingoFinishExport_VQUI = p,
                        s("UICode.res.bingo_gui.BingoFinishExport_VQUI", p);
                        class m extends n {
                            constructor() {
                                super()
                            }
                            createChildren() {
                                super.createChildren(),
                                this.createView(m.uiView)
                            }
                        }
                        m.uiView = {
                            type: "View",
                            props: {
                                width: 1386,
                                height: 640
                            },
                            compId: 2,
                            child: [{
                                    type: "Image",
                                    props: {
                                        y: 0,
                                        x: 0,
                                        width: 1386,
                                        skin: "res/bingo_atlas/bingo_common/_0003.png",
                                        sizeGrid: "15,15,15,15",
                                        runtime: "UI/BingoUIFullscreenImage.ts",
                                        height: 640
                                    },
                                    compId: 108
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 0,
                                        var: "spBg"
                                    },
                                    compId: 29
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 0,
                                        width: 1,
                                        name: "BINGO_TOP_LEFT",
                                        height: 1
                                    },
                                    compId: 3
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 693,
                                        width: 1,
                                        name: "BINGO_TOP_CENTER",
                                        height: 1
                                    },
                                    compId: 4
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 1386,
                                        width: 1,
                                        name: "BINGO_TOP_RIGHT",
                                        height: 1
                                    },
                                    compId: 5
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 320,
                                        x: 0,
                                        width: 1,
                                        name: "BINGO_MIDDLE_LEFT",
                                        height: 1
                                    },
                                    compId: 6
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 320,
                                        x: 693,
                                        width: 1,
                                        name: "BINGO_MIDDLE_CENTER",
                                        height: 1
                                    },
                                    compId: 7,
                                    child: [{
                                            type: "Box",
                                            props: {
                                                y: -182,
                                                x: -648,
                                                var: "tip1",
                                                runtime: "UI/BingoUIExportItem.ts"
                                            },
                                            compId: 31,
                                            child: [{
                                                    type: "Image",
                                                    props: {
                                                        y: -97,
                                                        x: 0,
                                                        width: 234,
                                                        skin: "res/bingo_atlas/bingo_common/img_tuijianBg.png",
                                                        scaleY: 1,
                                                        scaleX: 1,
                                                        height: 331
                                                    },
                                                    compId: 35
                                                }, {
                                                    type: "Image",
                                                    props: {
                                                        y: -83,
                                                        x: 14,
                                                        width: 209,
                                                        name: "icon",
                                                        height: 200
                                                    },
                                                    compId: 40
                                                }, {
                                                    type: "Image",
                                                    props: {
                                                        y: 128,
                                                        x: 13,
                                                        width: 98,
                                                        scaleY: .85,
                                                        scaleX: .85,
                                                        name: "icon2",
                                                        height: 93
                                                    },
                                                    compId: 36
                                                }, {
                                                    type: "Button",
                                                    props: {
                                                        y: 163,
                                                        x: 110,
                                                        stateNum: 1,
                                                        skin: "res/bingo_atlas/bingo_common/img_go.png",
                                                        scaleY: .85,
                                                        scaleX: .85
                                                    },
                                                    compId: 38
                                                }, {
                                                    type: "Text",
                                                    props: {
                                                        y: 134,
                                                        x: 93,
                                                        width: 140,
                                                        overflow: "hidden",
                                                        name: "name",
                                                        fontSize: 28,
                                                        color: "#ffffff",
                                                        align: "center",
                                                        runtime: "Laya.Text"
                                                    },
                                                    compId: 39
                                                }
                                            ]
                                        }, {
                                            type: "Box",
                                            props: {
                                                y: -182,
                                                x: -383,
                                                var: "tip2",
                                                runtime: "UI/BingoUIExportItem.ts"
                                            },
                                            compId: 77,
                                            child: [{
                                                    type: "Image",
                                                    props: {
                                                        y: -97,
                                                        x: 0,
                                                        width: 234,
                                                        skin: "res/bingo_atlas/bingo_common/img_tuijianBg.png",
                                                        scaleY: 1,
                                                        scaleX: 1,
                                                        height: 331
                                                    },
                                                    compId: 78
                                                }, {
                                                    type: "Image",
                                                    props: {
                                                        y: -83,
                                                        x: 14,
                                                        width: 209,
                                                        name: "icon",
                                                        height: 200
                                                    },
                                                    compId: 79
                                                }, {
                                                    type: "Image",
                                                    props: {
                                                        y: 128,
                                                        x: 13,
                                                        width: 98,
                                                        scaleY: .85,
                                                        scaleX: .85,
                                                        name: "icon2",
                                                        height: 93
                                                    },
                                                    compId: 80
                                                }, {
                                                    type: "Button",
                                                    props: {
                                                        y: 163,
                                                        x: 110,
                                                        stateNum: 1,
                                                        skin: "res/bingo_atlas/bingo_common/img_go.png",
                                                        scaleY: .85,
                                                        scaleX: .85
                                                    },
                                                    compId: 81
                                                }, {
                                                    type: "Text",
                                                    props: {
                                                        y: 134,
                                                        x: 93,
                                                        width: 140,
                                                        overflow: "hidden",
                                                        name: "name",
                                                        fontSize: 28,
                                                        color: "#ffffff",
                                                        align: "center",
                                                        runtime: "Laya.Text"
                                                    },
                                                    compId: 82
                                                }
                                            ]
                                        }, {
                                            type: "Box",
                                            props: {
                                                y: -182,
                                                x: -118,
                                                var: "tip3",
                                                runtime: "UI/BingoUIExportItem.ts"
                                            },
                                            compId: 83,
                                            child: [{
                                                    type: "Image",
                                                    props: {
                                                        y: -97,
                                                        x: 0,
                                                        width: 234,
                                                        skin: "res/bingo_atlas/bingo_common/img_tuijianBg.png",
                                                        scaleY: 1,
                                                        scaleX: 1,
                                                        height: 331
                                                    },
                                                    compId: 84
                                                }, {
                                                    type: "Image",
                                                    props: {
                                                        y: -83,
                                                        x: 14,
                                                        width: 209,
                                                        name: "icon",
                                                        height: 200
                                                    },
                                                    compId: 85
                                                }, {
                                                    type: "Image",
                                                    props: {
                                                        y: 128,
                                                        x: 13,
                                                        width: 98,
                                                        scaleY: .85,
                                                        scaleX: .85,
                                                        name: "icon2",
                                                        height: 93
                                                    },
                                                    compId: 86
                                                }, {
                                                    type: "Button",
                                                    props: {
                                                        y: 163,
                                                        x: 110,
                                                        stateNum: 1,
                                                        skin: "res/bingo_atlas/bingo_common/img_go.png",
                                                        scaleY: .85,
                                                        scaleX: .85
                                                    },
                                                    compId: 87
                                                }, {
                                                    type: "Text",
                                                    props: {
                                                        y: 134,
                                                        x: 93,
                                                        width: 140,
                                                        overflow: "hidden",
                                                        name: "name",
                                                        fontSize: 28,
                                                        color: "#ffffff",
                                                        align: "center",
                                                        runtime: "Laya.Text"
                                                    },
                                                    compId: 88
                                                }
                                            ]
                                        }, {
                                            type: "Box",
                                            props: {
                                                y: -182,
                                                x: 147,
                                                var: "tip4",
                                                runtime: "UI/BingoUIExportItem.ts"
                                            },
                                            compId: 89,
                                            child: [{
                                                    type: "Image",
                                                    props: {
                                                        y: -97,
                                                        x: 0,
                                                        width: 234,
                                                        skin: "res/bingo_atlas/bingo_common/img_tuijianBg.png",
                                                        scaleY: 1,
                                                        scaleX: 1,
                                                        height: 331
                                                    },
                                                    compId: 90
                                                }, {
                                                    type: "Image",
                                                    props: {
                                                        y: -83,
                                                        x: 14,
                                                        width: 209,
                                                        name: "icon",
                                                        height: 200
                                                    },
                                                    compId: 91
                                                }, {
                                                    type: "Image",
                                                    props: {
                                                        y: 128,
                                                        x: 13,
                                                        width: 98,
                                                        scaleY: .85,
                                                        scaleX: .85,
                                                        name: "icon2",
                                                        height: 93
                                                    },
                                                    compId: 92
                                                }, {
                                                    type: "Button",
                                                    props: {
                                                        y: 163,
                                                        x: 110,
                                                        stateNum: 1,
                                                        skin: "res/bingo_atlas/bingo_common/img_go.png",
                                                        scaleY: .85,
                                                        scaleX: .85
                                                    },
                                                    compId: 93
                                                }, {
                                                    type: "Text",
                                                    props: {
                                                        y: 134,
                                                        x: 93,
                                                        width: 140,
                                                        overflow: "hidden",
                                                        name: "name",
                                                        fontSize: 28,
                                                        color: "#ffffff",
                                                        align: "center",
                                                        runtime: "Laya.Text"
                                                    },
                                                    compId: 94
                                                }
                                            ]
                                        }, {
                                            type: "Box",
                                            props: {
                                                y: -182,
                                                x: 412,
                                                var: "tip5",
                                                runtime: "UI/BingoUIExportItem.ts"
                                            },
                                            compId: 95,
                                            child: [{
                                                    type: "Image",
                                                    props: {
                                                        y: -97,
                                                        x: 0,
                                                        width: 234,
                                                        skin: "res/bingo_atlas/bingo_common/img_tuijianBg.png",
                                                        scaleY: 1,
                                                        scaleX: 1,
                                                        height: 331
                                                    },
                                                    compId: 96
                                                }, {
                                                    type: "Image",
                                                    props: {
                                                        y: -83,
                                                        x: 14,
                                                        width: 209,
                                                        name: "icon",
                                                        height: 200
                                                    },
                                                    compId: 97
                                                }, {
                                                    type: "Image",
                                                    props: {
                                                        y: 128,
                                                        x: 13,
                                                        width: 98,
                                                        scaleY: .85,
                                                        scaleX: .85,
                                                        name: "icon2",
                                                        height: 93
                                                    },
                                                    compId: 98
                                                }, {
                                                    type: "Button",
                                                    props: {
                                                        y: 163,
                                                        x: 110,
                                                        stateNum: 1,
                                                        skin: "res/bingo_atlas/bingo_common/img_go.png",
                                                        scaleY: .85,
                                                        scaleX: .85
                                                    },
                                                    compId: 99
                                                }, {
                                                    type: "Text",
                                                    props: {
                                                        y: 134,
                                                        x: 93,
                                                        width: 140,
                                                        overflow: "hidden",
                                                        name: "name",
                                                        fontSize: 28,
                                                        color: "#ffffff",
                                                        align: "center",
                                                        runtime: "Laya.Text"
                                                    },
                                                    compId: 100
                                                }
                                            ]
                                        }, {
                                            type: "List",
                                            props: {
                                                y: 66,
                                                x: -800,
                                                width: 1600,
                                                var: "list",
                                                spaceY: 13,
                                                spaceX: 14,
                                                repeatY: 1,
                                                repeatX: 10,
                                                height: 209
                                            },
                                            compId: 101,
                                            child: [{
                                                    type: "HScrollBar",
                                                    props: {
                                                        width: 1600,
                                                        name: "scrollBar"
                                                    },
                                                    compId: 102
                                                }, {
                                                    type: "Box",
                                                    props: {
                                                        x: 0,
                                                        width: 149,
                                                        scaleY: 1,
                                                        scaleX: 1,
                                                        runtime: "UI/BingoUIExportItem.ts",
                                                        name: "render"
                                                    },
                                                    compId: 103,
                                                    child: [{
                                                            type: "Image",
                                                            props: {
                                                                y: 7,
                                                                x: 9,
                                                                width: 132,
                                                                name: "icon",
                                                                height: 127
                                                            },
                                                            compId: 104
                                                        }, {
                                                            type: "Image",
                                                            props: {
                                                                y: 0,
                                                                x: 0,
                                                                width: 214,
                                                                skin: "res/bingo_atlas/bingo_common/0002.png",
                                                                scaleY: .7,
                                                                scaleX: .7,
                                                                height: 278
                                                            },
                                                            compId: 105
                                                        }, {
                                                            type: "Text",
                                                            props: {
                                                                y: 146,
                                                                x: 0,
                                                                width: 150,
                                                                overflow: "hidden",
                                                                name: "name",
                                                                fontSize: 24,
                                                                color: "#ffffff",
                                                                align: "center",
                                                                runtime: "Laya.Text"
                                                            },
                                                            compId: 106
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, {
                                            type: "Button",
                                            props: {
                                                y: 84,
                                                x: -132,
                                                var: "btn_random",
                                                stateNum: 1,
                                                skin: "res/bingo_atlas/bingo_common/0007.png"
                                            },
                                            compId: 107
                                        }, {
                                            type: "Button",
                                            props: {
                                                y: -320,
                                                x: -693,
                                                var: "btnClose",
                                                stateNum: 1,
                                                skin: "res/bingo_atlas/bingo_common/img_close.png",
                                                scaleY: .85,
                                                scaleX: .85
                                            },
                                            compId: 30
                                        }
                                    ]
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 320,
                                        x: 1386,
                                        width: 1,
                                        name: "BINGO_MIDDLE_RIGHT",
                                        height: 1
                                    },
                                    compId: 8
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 640,
                                        x: 0,
                                        width: 1,
                                        name: "BINGO_BOTTOM_LEFT",
                                        height: 1
                                    },
                                    compId: 9
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 640,
                                        x: 693,
                                        width: 1,
                                        name: "BINGO_BOTTOM_CENTER",
                                        height: 1
                                    },
                                    compId: 10
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 640,
                                        x: 1386,
                                        width: 1,
                                        name: "BINGO_BOTTOM_RIGHT",
                                        height: 1
                                    },
                                    compId: 11
                                }
                            ],
                            loadList: ["res/bingo_atlas/bingo_common/_0003.png", "res/bingo_atlas/bingo_common/img_tuijianBg.png", "res/bingo_atlas/bingo_common/img_go.png", "res/bingo_atlas/bingo_common/0002.png", "res/bingo_atlas/bingo_common/0007.png", "res/bingo_atlas/bingo_common/img_close.png"],
                            loadList3D: []
                        },
                        e.BingoRecommendedExport_HQUI = m,
                        s("UICode.res.bingo_gui.BingoRecommendedExport_HQUI", m);
                        class d extends n {
                            constructor() {
                                super()
                            }
                            createChildren() {
                                super.createChildren(),
                                this.createView(d.uiView)
                            }
                        }
                        d.uiView = {
                            type: "View",
                            props: {
                                width: 640,
                                height: 1386
                            },
                            compId: 2,
                            child: [{
                                    type: "Image",
                                    props: {
                                        y: 0,
                                        x: 0,
                                        width: 640,
                                        skin: "res/bingo_atlas/bingo_common/_0003.png",
                                        sizeGrid: "15,15,15,15",
                                        runtime: "UI/BingoUIFullscreenImage.ts",
                                        height: 1386
                                    },
                                    compId: 90
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 0,
                                        var: "spBg"
                                    },
                                    compId: 89
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 0,
                                        width: 1,
                                        name: "BINGO_TOP_LEFT",
                                        height: 1
                                    },
                                    compId: 3,
                                    child: [{
                                            type: "Button",
                                            props: {
                                                y: 0,
                                                x: 0,
                                                var: "btnClose",
                                                stateNum: 1,
                                                skin: "res/bingo_atlas/bingo_common/img_close.png",
                                                scaleY: .85,
                                                scaleX: .85
                                            },
                                            compId: 65
                                        }
                                    ]
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 320,
                                        width: 1,
                                        name: "BINGO_TOP_CENTER",
                                        height: 1
                                    },
                                    compId: 4
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 640,
                                        width: 1,
                                        name: "BINGO_TOP_RIGHT",
                                        height: 1
                                    },
                                    compId: 5
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 693,
                                        x: 0,
                                        width: 1,
                                        name: "BINGO_MIDDLE_LEFT",
                                        height: 1
                                    },
                                    compId: 6
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 693,
                                        x: 320,
                                        width: 1,
                                        name: "BINGO_MIDDLE_CENTER",
                                        height: 1
                                    },
                                    compId: 7,
                                    child: [{
                                            type: "Box",
                                            props: {
                                                y: -649,
                                                x: -116,
                                                var: "tip1",
                                                runtime: "UI/BingoUIExportItem.ts"
                                            },
                                            compId: 68,
                                            child: [{
                                                    type: "Image",
                                                    props: {
                                                        y: 0,
                                                        x: 0,
                                                        skin: "res/bingo_atlas/bingo_common/img_tuijianBg.png",
                                                        scaleY: .85,
                                                        scaleX: .85
                                                    },
                                                    compId: 69
                                                }, {
                                                    type: "Image",
                                                    props: {
                                                        y: 221,
                                                        x: 12,
                                                        width: 100,
                                                        scaleY: .85,
                                                        scaleX: .85,
                                                        name: "icon2",
                                                        height: 100
                                                    },
                                                    compId: 70
                                                }, {
                                                    type: "Button",
                                                    props: {
                                                        y: 258,
                                                        x: 112,
                                                        stateNum: 1,
                                                        skin: "res/bingo_atlas/bingo_common/img_go.png",
                                                        scaleY: .85,
                                                        scaleX: .85
                                                    },
                                                    compId: 72
                                                }, {
                                                    type: "Text",
                                                    props: {
                                                        y: 224,
                                                        x: 97,
                                                        width: 153,
                                                        scaleX: .85,
                                                        overflow: "hidden",
                                                        name: "name",
                                                        fontSize: 28,
                                                        color: "#ffffff",
                                                        align: "center",
                                                        runtime: "Laya.Text"
                                                    },
                                                    compId: 73
                                                }, {
                                                    type: "Image",
                                                    props: {
                                                        y: 13,
                                                        x: 17,
                                                        width: 200,
                                                        name: "icon",
                                                        height: 200
                                                    },
                                                    compId: 74
                                                }
                                            ]
                                        }, {
                                            type: "Box",
                                            props: {
                                                y: -268.625,
                                                x: -258,
                                                var: "tip2",
                                                runtime: "UI/BingoUIExportItem.ts"
                                            },
                                            compId: 92,
                                            child: [{
                                                    type: "Image",
                                                    props: {
                                                        y: 0,
                                                        x: 0,
                                                        skin: "res/bingo_atlas/bingo_common/img_tuijianBg.png",
                                                        scaleY: .85,
                                                        scaleX: .85
                                                    },
                                                    compId: 93
                                                }, {
                                                    type: "Image",
                                                    props: {
                                                        y: 221,
                                                        x: 12,
                                                        width: 100,
                                                        scaleY: .85,
                                                        scaleX: .85,
                                                        name: "icon2",
                                                        height: 100
                                                    },
                                                    compId: 94
                                                }, {
                                                    type: "Button",
                                                    props: {
                                                        y: 258,
                                                        x: 112,
                                                        stateNum: 1,
                                                        skin: "res/bingo_atlas/bingo_common/img_go.png",
                                                        scaleY: .85,
                                                        scaleX: .85
                                                    },
                                                    compId: 95
                                                }, {
                                                    type: "Text",
                                                    props: {
                                                        y: 224,
                                                        x: 97,
                                                        width: 153,
                                                        scaleX: .85,
                                                        overflow: "hidden",
                                                        name: "name",
                                                        fontSize: 28,
                                                        color: "#ffffff",
                                                        align: "center",
                                                        runtime: "Laya.Text"
                                                    },
                                                    compId: 96
                                                }, {
                                                    type: "Image",
                                                    props: {
                                                        y: 13,
                                                        x: 17,
                                                        width: 200,
                                                        name: "icon",
                                                        height: 200
                                                    },
                                                    compId: 97
                                                }
                                            ]
                                        }, {
                                            type: "Box",
                                            props: {
                                                y: -268.625,
                                                x: 28,
                                                var: "tip3",
                                                runtime: "UI/BingoUIExportItem.ts"
                                            },
                                            compId: 98,
                                            child: [{
                                                    type: "Image",
                                                    props: {
                                                        y: 0,
                                                        x: 0,
                                                        skin: "res/bingo_atlas/bingo_common/img_tuijianBg.png",
                                                        scaleY: .85,
                                                        scaleX: .85
                                                    },
                                                    compId: 99
                                                }, {
                                                    type: "Image",
                                                    props: {
                                                        y: 221,
                                                        x: 12,
                                                        width: 100,
                                                        scaleY: .85,
                                                        scaleX: .85,
                                                        name: "icon2",
                                                        height: 100
                                                    },
                                                    compId: 100
                                                }, {
                                                    type: "Button",
                                                    props: {
                                                        y: 258,
                                                        x: 112,
                                                        stateNum: 1,
                                                        skin: "res/bingo_atlas/bingo_common/img_go.png",
                                                        scaleY: .85,
                                                        scaleX: .85
                                                    },
                                                    compId: 101
                                                }, {
                                                    type: "Text",
                                                    props: {
                                                        y: 224,
                                                        x: 97,
                                                        width: 153,
                                                        scaleX: .85,
                                                        overflow: "hidden",
                                                        name: "name",
                                                        fontSize: 28,
                                                        color: "#ffffff",
                                                        align: "center",
                                                        runtime: "Laya.Text"
                                                    },
                                                    compId: 102
                                                }, {
                                                    type: "Image",
                                                    props: {
                                                        y: 13,
                                                        x: 17,
                                                        width: 200,
                                                        name: "icon",
                                                        height: 200
                                                    },
                                                    compId: 103
                                                }
                                            ]
                                        }, {
                                            type: "List",
                                            props: {
                                                y: 126,
                                                x: -300,
                                                width: 604,
                                                var: "list",
                                                spaceY: 0,
                                                spaceX: 0,
                                                repeatY: 2,
                                                repeatX: 4,
                                                height: 414
                                            },
                                            compId: 104,
                                            child: [{
                                                    type: "HScrollBar",
                                                    props: {
                                                        width: 604,
                                                        name: "scrollBar"
                                                    },
                                                    compId: 105
                                                }, {
                                                    type: "Box",
                                                    props: {
                                                        x: 0,
                                                        width: 149,
                                                        scaleY: 1,
                                                        scaleX: 1,
                                                        runtime: "UI/BingoUIExportItem.ts",
                                                        name: "render"
                                                    },
                                                    compId: 106,
                                                    child: [{
                                                            type: "Image",
                                                            props: {
                                                                y: 7,
                                                                x: 9,
                                                                width: 156,
                                                                scaleX: .85,
                                                                name: "icon",
                                                                height: 127
                                                            },
                                                            compId: 107
                                                        }, {
                                                            type: "Image",
                                                            props: {
                                                                y: 0,
                                                                x: 0,
                                                                width: 214,
                                                                skin: "res/bingo_atlas/bingo_common/0002.png",
                                                                scaleY: .7,
                                                                scaleX: .7,
                                                                height: 278
                                                            },
                                                            compId: 108
                                                        }, {
                                                            type: "Text",
                                                            props: {
                                                                y: 146,
                                                                x: 0,
                                                                width: 150,
                                                                overflow: "hidden",
                                                                name: "name",
                                                                fontSize: 24,
                                                                color: "#ffffff",
                                                                align: "center",
                                                                runtime: "Laya.Text"
                                                            },
                                                            compId: 109
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, {
                                            type: "Button",
                                            props: {
                                                y: 329,
                                                x: -132,
                                                var: "btn_random",
                                                stateNum: 1,
                                                skin: "res/bingo_atlas/bingo_common/0007.png"
                                            },
                                            compId: 111
                                        }
                                    ]
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 693,
                                        x: 640,
                                        width: 1,
                                        name: "BINGO_MIDDLE_RIGHT",
                                        height: 1
                                    },
                                    compId: 8
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 1386,
                                        x: 0,
                                        width: 1,
                                        name: "BINGO_BOTTOM_LEFT",
                                        height: 1
                                    },
                                    compId: 9
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 1386,
                                        x: 320,
                                        width: 1,
                                        name: "BINGO_BOTTOM_CENTER",
                                        height: 1
                                    },
                                    compId: 10
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 1386,
                                        x: 640,
                                        width: 1,
                                        name: "BINGO_BOTTOM_RIGHT",
                                        height: 1
                                    },
                                    compId: 11
                                }
                            ],
                            loadList: ["res/bingo_atlas/bingo_common/_0003.png", "res/bingo_atlas/bingo_common/img_close.png", "res/bingo_atlas/bingo_common/img_tuijianBg.png", "res/bingo_atlas/bingo_common/img_go.png", "res/bingo_atlas/bingo_common/0002.png", "res/bingo_atlas/bingo_common/0007.png"],
                            loadList3D: []
                        },
                        e.BingoRecommendedExport_VQUI = d,
                        s("UICode.res.bingo_gui.BingoRecommendedExport_VQUI", d);
                        class _ extends n {
                            constructor() {
                                super()
                            }
                            createChildren() {
                                super.createChildren(),
                                this.createView(_.uiView)
                            }
                        }
                        _.uiView = {
                            type: "View",
                            props: {
                                width: 1386,
                                height: 640
                            },
                            compId: 2,
                            child: [{
                                    type: "Image",
                                    props: {
                                        y: 0,
                                        x: 0,
                                        width: 1386,
                                        skin: "res/bingo_atlas/bingo_common/_0003.png",
                                        sizeGrid: "15,15,15,15",
                                        runtime: "UI/BingoUIFullscreenImage.ts",
                                        height: 640
                                    },
                                    compId: 15
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 0,
                                        width: 1,
                                        name: "BINGO_TOP_LEFT",
                                        height: 1
                                    },
                                    compId: 3
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 693,
                                        width: 1,
                                        name: "BINGO_TOP_CENTER",
                                        height: 1
                                    },
                                    compId: 4
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 1386,
                                        width: 1,
                                        name: "BINGO_TOP_RIGHT",
                                        height: 1
                                    },
                                    compId: 5
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 320,
                                        x: 0,
                                        width: 1,
                                        name: "BINGO_MIDDLE_LEFT",
                                        height: 1
                                    },
                                    compId: 6
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 320,
                                        x: 693,
                                        width: 1,
                                        name: "BINGO_MIDDLE_CENTER",
                                        height: 1
                                    },
                                    compId: 7,
                                    child: [{
                                            type: "List",
                                            props: {
                                                y: -297,
                                                x: -800,
                                                width: 1600,
                                                var: "list",
                                                spaceY: 13,
                                                spaceX: 14,
                                                repeatY: 3,
                                                repeatX: 10,
                                                height: 613
                                            },
                                            compId: 16,
                                            child: [{
                                                    type: "HScrollBar",
                                                    props: {
                                                        width: 1600,
                                                        name: "scrollBar",
                                                        height: 1
                                                    },
                                                    compId: 17
                                                }, {
                                                    type: "Box",
                                                    props: {
                                                        x: 0,
                                                        width: 175,
                                                        scaleY: 1,
                                                        scaleX: 1,
                                                        runtime: "UI/BingoUIExportItem.ts",
                                                        name: "render"
                                                    },
                                                    compId: 18,
                                                    child: [{
                                                            type: "Image",
                                                            props: {
                                                                y: 7,
                                                                x: 9,
                                                                width: 144,
                                                                name: "icon",
                                                                height: 137
                                                            },
                                                            compId: 24
                                                        }, {
                                                            type: "Image",
                                                            props: {
                                                                y: 0,
                                                                x: 0,
                                                                skin: "res/bingo_atlas/bingo_common/0003_2.png",
                                                                scaleY: .7,
                                                                scaleX: .7,
                                                                name: "frame_big"
                                                            },
                                                            compId: 23
                                                        }, {
                                                            type: "Text",
                                                            props: {
                                                                y: 146,
                                                                x: 9,
                                                                width: 150,
                                                                text: "我的名字我的",
                                                                overflow: "hidden",
                                                                name: "name",
                                                                fontSize: 24,
                                                                color: "#ffffff",
                                                                bold: !0,
                                                                align: "center",
                                                                runtime: "Laya.Text"
                                                            },
                                                            compId: 25
                                                        }, {
                                                            type: "Image",
                                                            props: {
                                                                y: -16,
                                                                x: -16,
                                                                width: 146,
                                                                scaleY: 1.1,
                                                                scaleX: 1.3,
                                                                name: "frame_line",
                                                                height: 185
                                                            },
                                                            compId: 32
                                                        }, {
                                                            type: "Image",
                                                            props: {
                                                                y: 7,
                                                                x: 7,
                                                                scaleY: 1.5,
                                                                scaleX: 1.5,
                                                                name: "icon_click"
                                                            },
                                                            compId: 33
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, {
                                            type: "Button",
                                            props: {
                                                y: 192,
                                                x: 5,
                                                var: "btn_ok",
                                                stateNum: 1,
                                                skin: "res/bingo_atlas/bingo_common/0003.png",
                                                scaleY: 1.5,
                                                scaleX: 1.5,
                                                runtime: "UI/BingoUIScaleButton.ts",
                                                anchorY: .5,
                                                anchorX: .5
                                            },
                                            compId: 29
                                        }
                                    ]
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 320,
                                        x: 1386,
                                        width: 1,
                                        name: "BINGO_MIDDLE_RIGHT",
                                        height: 1
                                    },
                                    compId: 8
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 640,
                                        x: 0,
                                        width: 1,
                                        name: "BINGO_BOTTOM_LEFT",
                                        height: 1
                                    },
                                    compId: 9
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 640,
                                        x: 693,
                                        width: 1,
                                        name: "BINGO_BOTTOM_CENTER",
                                        height: 1
                                    },
                                    compId: 10
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 640,
                                        x: 1386,
                                        width: 1,
                                        name: "BINGO_BOTTOM_RIGHT",
                                        height: 1
                                    },
                                    compId: 11
                                }
                            ],
                            loadList: ["res/bingo_atlas/bingo_common/_0003.png", "res/bingo_atlas/bingo_common/0003_2.png", "res/bingo_atlas/bingo_common/0003.png"],
                            loadList3D: []
                        },
                        e.BingoStartupExport_HQUI = _,
                        s("UICode.res.bingo_gui.BingoStartupExport_HQUI", _);
                        class c extends n {
                            constructor() {
                                super()
                            }
                            createChildren() {
                                super.createChildren(),
                                this.createView(c.uiView)
                            }
                        }
                        c.uiView = {
                            type: "View",
                            props: {
                                width: 640,
                                height: 1386
                            },
                            compId: 2,
                            child: [{
                                    type: "Image",
                                    props: {
                                        y: 0,
                                        x: 0,
                                        width: 640,
                                        skin: "res/bingo_atlas/bingo_common/_0003.png",
                                        sizeGrid: "2,2,2,2",
                                        runtime: "UI/BingoUIFullscreenImage.ts",
                                        height: 1386
                                    },
                                    compId: 16
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 0,
                                        width: 1,
                                        name: "BINGO_TOP_LEFT",
                                        height: 1
                                    },
                                    compId: 3
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 320,
                                        width: 1,
                                        name: "BINGO_TOP_CENTER",
                                        height: 1
                                    },
                                    compId: 4
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 0,
                                        x: 640,
                                        width: 1,
                                        name: "BINGO_TOP_RIGHT",
                                        height: 1
                                    },
                                    compId: 5
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 693,
                                        x: 0,
                                        width: 1,
                                        name: "BINGO_MIDDLE_LEFT",
                                        height: 1
                                    },
                                    compId: 6
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 693,
                                        x: 320,
                                        width: 1,
                                        name: "BINGO_MIDDLE_CENTER",
                                        height: 1
                                    },
                                    compId: 7,
                                    child: [{
                                            type: "List",
                                            props: {
                                                y: -683,
                                                x: -311,
                                                width: 643,
                                                var: "list_1",
                                                spaceY: -20,
                                                spaceX: -8,
                                                repeatY: 5,
                                                repeatX: 3,
                                                height: 1349
                                            },
                                            compId: 56,
                                            child: [{
                                                    type: "VScrollBar",
                                                    props: {
                                                        y: 0,
                                                        x: 0,
                                                        name: "scrollBar"
                                                    },
                                                    compId: 57
                                                }, {
                                                    type: "Box",
                                                    props: {
                                                        y: 0,
                                                        x: 0,
                                                        width: 218,
                                                        runtime: "UI/BingoUIExportItem.ts",
                                                        name: "render",
                                                        height: 280
                                                    },
                                                    compId: 58,
                                                    child: [{
                                                            type: "Image",
                                                            props: {
                                                                y: 10,
                                                                x: 8,
                                                                width: 190,
                                                                skin: "res/bingo_atlas/bingo_common/_0000_3.png",
                                                                sizeGrid: "15,15,15,15",
                                                                name: "icon",
                                                                height: 176
                                                            },
                                                            compId: 59
                                                        }, {
                                                            type: "Image",
                                                            props: {
                                                                y: 0,
                                                                x: 0,
                                                                skin: "res/bingo_atlas/bingo_common/0003_2.png",
                                                                scaleY: .9,
                                                                scaleX: .9,
                                                                name: "frame_big"
                                                            },
                                                            compId: 60
                                                        }, {
                                                            type: "Text",
                                                            props: {
                                                                y: 192,
                                                                x: 28,
                                                                width: 150,
                                                                text: "我的名字我的",
                                                                overflow: "hidden",
                                                                name: "name",
                                                                fontSize: 24,
                                                                color: "#ffffff",
                                                                align: "center",
                                                                runtime: "Laya.Text"
                                                            },
                                                            compId: 61
                                                        }, {
                                                            type: "Image",
                                                            props: {
                                                                y: -18,
                                                                x: -16,
                                                                width: 237,
                                                                sizeGrid: "6,6,6,6",
                                                                name: "frame_line",
                                                                height: 258
                                                            },
                                                            compId: 69
                                                        }, {
                                                            type: "Image",
                                                            props: {
                                                                y: 28,
                                                                x: 28,
                                                                scaleY: 1.5,
                                                                scaleX: 1.5,
                                                                name: "icon_click"
                                                            },
                                                            compId: 70
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 693,
                                        x: 640,
                                        width: 1,
                                        name: "BINGO_MIDDLE_RIGHT",
                                        height: 1
                                    },
                                    compId: 8
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 1386,
                                        x: 0,
                                        width: 1,
                                        name: "BINGO_BOTTOM_LEFT",
                                        height: 1
                                    },
                                    compId: 9
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 1386,
                                        x: 320,
                                        width: 1,
                                        name: "BINGO_BOTTOM_CENTER",
                                        height: 1
                                    },
                                    compId: 10,
                                    child: [{
                                            type: "Button",
                                            props: {
                                                y: -109,
                                                x: 6,
                                                var: "btn_ok",
                                                stateNum: 1,
                                                skin: "res/bingo_atlas/bingo_common/0003.png",
                                                scaleY: 1.5,
                                                scaleX: 1.5,
                                                runtime: "UI/BingoUIScaleButton.ts",
                                                anchorY: .5,
                                                anchorX: .5
                                            },
                                            compId: 63
                                        }
                                    ]
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 1386,
                                        x: 640,
                                        width: 1,
                                        name: "BINGO_BOTTOM_RIGHT",
                                        height: 1
                                    },
                                    compId: 11
                                }
                            ],
                            loadList: ["res/bingo_atlas/bingo_common/_0003.png", "res/bingo_atlas/bingo_common/_0000_3.png", "res/bingo_atlas/bingo_common/0003_2.png", "res/bingo_atlas/bingo_common/0003.png"],
                            loadList3D: []
                        },
                        e.BingoStartupExport_VQUI = c,
                        s("UICode.res.bingo_gui.BingoStartupExport_VQUI", c)
                    }
                    (e.bingo_gui || (e.bingo_gui = {}))
                }
                (e.res || (e.res = {}))
            }
            (i.UICode || (i.UICode = {})),
            function (e) {
                !function (e) {
                    !function (e) {
                        !function (e) {
                            class t extends n {
                                constructor() {
                                    super()
                                }
                                createChildren() {
                                    super.createChildren(),
                                    this.createView(t.uiView)
                                }
                            }
                            t.uiView = {
                                type: "View",
                                props: {
                                    width: 1386,
                                    height: 640
                                },
                                compId: 2,
                                child: [{
                                        type: "Sprite",
                                        props: {
                                            y: 0,
                                            x: 0,
                                            width: 1,
                                            name: "BINGO_TOP_LEFT",
                                            height: 1
                                        },
                                        compId: 3
                                    }, {
                                        type: "Sprite",
                                        props: {
                                            y: 0,
                                            x: 693,
                                            width: 1,
                                            name: "BINGO_TOP_CENTER",
                                            height: 1
                                        },
                                        compId: 4
                                    }, {
                                        type: "Sprite",
                                        props: {
                                            y: 0,
                                            x: 1386,
                                            width: 1,
                                            name: "BINGO_TOP_RIGHT",
                                            height: 1
                                        },
                                        compId: 5
                                    }, {
                                        type: "Sprite",
                                        props: {
                                            y: 320,
                                            x: 0,
                                            width: 1,
                                            name: "BINGO_MIDDLE_LEFT",
                                            height: 1
                                        },
                                        compId: 6
                                    }, {
                                        type: "Sprite",
                                        props: {
                                            y: 320,
                                            x: 693,
                                            width: 1,
                                            name: "BINGO_MIDDLE_CENTER",
                                            height: 1
                                        },
                                        compId: 7
                                    }, {
                                        type: "Sprite",
                                        props: {
                                            y: 320,
                                            x: 1386,
                                            width: 1,
                                            name: "BINGO_MIDDLE_RIGHT",
                                            height: 1
                                        },
                                        compId: 8
                                    }, {
                                        type: "Sprite",
                                        props: {
                                            y: 640,
                                            x: 0,
                                            width: 1,
                                            name: "BINGO_BOTTOM_LEFT",
                                            height: 1
                                        },
                                        compId: 9
                                    }, {
                                        type: "Sprite",
                                        props: {
                                            y: 640,
                                            x: 693,
                                            width: 1,
                                            name: "BINGO_BOTTOM_CENTER",
                                            height: 1
                                        },
                                        compId: 10
                                    }, {
                                        type: "Sprite",
                                        props: {
                                            y: 640,
                                            x: 1386,
                                            width: 1,
                                            name: "BINGO_BOTTOM_RIGHT",
                                            height: 1
                                        },
                                        compId: 11
                                    }
                                ],
                                loadList: [],
                                loadList3D: []
                            },
                            e.DefaultView_HUI = t,
                            s("UICode.res.bingo_gui.Default.DefaultView_HUI", t);
                            class i extends n {
                                constructor() {
                                    super()
                                }
                                createChildren() {
                                    super.createChildren(),
                                    this.createView(i.uiView)
                                }
                            }
                            i.uiView = {
                                type: "View",
                                props: {
                                    width: 640,
                                    height: 1386
                                },
                                compId: 2,
                                child: [{
                                        type: "Sprite",
                                        props: {
                                            y: 0,
                                            x: 0,
                                            width: 1,
                                            name: "BINGO_TOP_LEFT",
                                            height: 1
                                        },
                                        compId: 3
                                    }, {
                                        type: "Sprite",
                                        props: {
                                            y: 0,
                                            x: 320,
                                            width: 1,
                                            name: "BINGO_TOP_CENTER",
                                            height: 1
                                        },
                                        compId: 4
                                    }, {
                                        type: "Sprite",
                                        props: {
                                            y: 0,
                                            x: 640,
                                            width: 1,
                                            name: "BINGO_TOP_RIGHT",
                                            height: 1
                                        },
                                        compId: 5
                                    }, {
                                        type: "Sprite",
                                        props: {
                                            y: 693,
                                            x: 0,
                                            width: 1,
                                            name: "BINGO_MIDDLE_LEFT",
                                            height: 1
                                        },
                                        compId: 6
                                    }, {
                                        type: "Sprite",
                                        props: {
                                            y: 693,
                                            x: 320,
                                            width: 1,
                                            name: "BINGO_MIDDLE_CENTER",
                                            height: 1
                                        },
                                        compId: 7
                                    }, {
                                        type: "Sprite",
                                        props: {
                                            y: 693,
                                            x: 640,
                                            width: 1,
                                            name: "BINGO_MIDDLE_RIGHT",
                                            height: 1
                                        },
                                        compId: 8
                                    }, {
                                        type: "Sprite",
                                        props: {
                                            y: 1386,
                                            x: 0,
                                            width: 1,
                                            name: "BINGO_BOTTOM_LEFT",
                                            height: 1
                                        },
                                        compId: 9
                                    }, {
                                        type: "Sprite",
                                        props: {
                                            y: 1386,
                                            x: 320,
                                            width: 1,
                                            name: "BINGO_BOTTOM_CENTER",
                                            height: 1
                                        },
                                        compId: 10
                                    }, {
                                        type: "Sprite",
                                        props: {
                                            y: 1386,
                                            x: 640,
                                            width: 1,
                                            name: "BINGO_BOTTOM_RIGHT",
                                            height: 1
                                        },
                                        compId: 11
                                    }
                                ],
                                loadList: [],
                                loadList3D: []
                            },
                            e.DefaultView_VUI = i,
                            s("UICode.res.bingo_gui.Default.DefaultView_VUI", i)
                        }
                        (e.Default || (e.Default = {}))
                    }
                    (e.bingo_gui || (e.bingo_gui = {}))
                }
                (e.res || (e.res = {}))
            }
            (i.UICode || (i.UICode = {}))
        }, {}
    ],
    22: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("../../Core/BingoUIState"),
            s = e("../../Defines/BingoUIDefine"),
            a = e("./BingoFinishComboClick_HView");
            i.default = class extends n.default {
                constructor() {
                    super(...arguments),
                    this.m_view = null
                }
                onEnter() {
                    this.m_view = this.createTempStateView(a.default, s.default.BINGO_UI_FINISH_COMBO_H, this.parentSp, s.default.BINGO_UI_COMMON_ATLAS)
                }
                onLeave() {
                    this.m_view = null
                }
            }
        }, {
            "../../Core/BingoUIState": 7,
            "../../Defines/BingoUIDefine": 13,
            "./BingoFinishComboClick_HView": 23
        }
    ],
    23: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("../../Core/BingoUIView"),
            s = e("../../Utils/BingoUtils"),
            a = e("../../Defines/BingoDefines"),
            o = e("../../Platform/BingoPlatform"),
            r = e("../../Utils/BingoDevice"),
            l = e("../../UICode/layaMaxUI");
            i.default = class extends n.default {
                constructor() {
                    super(...arguments),
                    this.m_view = null,
                    this.m_bannerProgress = 0,
                    this.m_nowProgress = 0,
                    this.m_unitHight = 0,
                    this.m_isShowBanner = !1,
                    this.m_bannerDelay = 0,
                    this.m_reduceDelay = 0,
                    this.m_playerAin = new Laya.Animation,
                    this.m_proHight = 0
                }
                onCreate() {
                    super.onCreate()
                }
                onRemove() {
                    super.onRemove(),
                    Laya.timer.clear(this, this.updateProgress),
                    this.m_view = null
                }
                onResize() {
                    super.onResize(),
                    this.m_view && (this.m_view.spBg.graphics.clear(), this.m_view.spBg.graphics.drawRect(0, 0, r.default.uiScreenWidth, r.default.uiScreenHeight, "#000000"))
                }
                onShow() {
                    let e = o.default.inst.platform;
                    if (!e || 0 == e.isGetFinishBannerClickUrl())
                        return void this.closeView();
                    let t = [e.finishExportSequenceFrame1, e.finishExportSequenceFrame2];
                    this.m_playerAin = this.m_playerAin.loadImages(t, "player"),
                    this.m_playerAin.source = e.finishExportSequenceFrame1 + "," + e.finishExportSequenceFrame2 + "," + e.finishExportSequenceFrame1,
                    this.m_playerAin.visible = !0,
                    this.m_playerAin.interval = 1,
                    this.m_playerAin.play(1, !1),
                    this.m_playerAin.interval = 70,
                    this.m_view = this.createUIView(l.UICode.res.bingo_gui.BingoFinishCombo_HUI),
                    this.m_view.spAni.addChild(this.m_playerAin),
                    this.loadSkin(e.finishExportTip, this.m_view.img_title),
                    this.loadSkin(e.finishExportFrame, this.m_view.progressBg),
                    this.loadSkin(e.finishExportBlood, this.m_view.progress),
                    this.loadSkin(e.finishExportHeart, this.m_view.progressEnd),
                    this.loadSkin(e.finishExportAtk, this.m_view.btn_click),
                    this.loadSkin(e.finishExportClick, this.m_view.img_ani),
                    this.m_bannerProgress = s.default.randomRangeInt(40, 80),
                    this.m_view.btn_click.on(Laya.Event.CLICK, this, this.onBtnClick),
                    this.m_view.ani1.play(0, !0),
                    Laya.timer.loop(100 * Laya.timer.scale, this, this.updateProgress),
                    this.m_view && (this.m_view.spBg.graphics.clear(), this.m_view.spBg.graphics.drawRect(0, 0, r.default.uiScreenWidth, r.default.uiScreenHeight, "#000000"))
                }
                closeView() {
                    Laya.Browser.window.bingoSdk.closeUI(this.viewID)
                }
                onBtnClick() {
                    this.m_playerAin.play(0, !1),
                    this.m_reduceDelay = 100;
                    let e = s.default.randomRangeInt(5, 10),
                    t = this.nowProgress,
                    i = t + e;
                    this.nowProgress = i,
                    t < this.m_bannerProgress && i >= this.m_bannerProgress && 0 == this.m_isShowBanner && (this.m_isShowBanner = !0, this.m_bannerDelay = a.default.BANNER_LAST_TIME, o.default.inst.platform.showBanner())
                }
                updateProgress() {
                    null == this.m_view || this.m_view.destroyed || (this.m_isShowBanner && (this.m_bannerDelay -= 100, this.m_bannerDelay <= 0 && (this.m_bannerDelay = 0, o.default.inst.platform.closeBanner(), this.closeView(), console.log("关闭banner"))), this.m_reduceDelay > 0 && (this.m_reduceDelay -= 100, this.m_reduceDelay <= 0 && (this.m_reduceDelay = 100, this.nowProgress -= 1)))
                }
                set nowProgress(e) {
                    if (null == this.m_view || this.m_view.destroyed)
                        return;
                    e < 0 ? e = 0 : e > 100 && (e = 100),
                    this.m_nowProgress = e;
                    let t = (100 - this.m_nowProgress) * this.m_unitHight;
                    Laya.Tween.to(this.m_view.progress, {
                        height: t
                    }, 100)
                }
                get nowProgress() {
                    return this.m_nowProgress
                }
                loadSkin(e, t) {
                    Laya.loader.load(e, new Laya.Handler(this, this.loadSkinComplete, [e, t]))
                }
                loadSkinComplete(e, t) {
                    t.skin = e,
                    t == this.m_view.progress && (this.m_unitHight = this.m_view.progress.height / 100, this.m_proHight = this.m_view.progress.height)
                }
            }
        }, {
            "../../Core/BingoUIView": 8,
            "../../Defines/BingoDefines": 9,
            "../../Platform/BingoPlatform": 19,
            "../../UICode/layaMaxUI": 21,
            "../../Utils/BingoDevice": 54,
            "../../Utils/BingoUtils": 56
        }
    ],
    24: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("../../Core/BingoUIState"),
            s = e("./BingoFinishComboClick_VView"),
            a = e("../../Defines/BingoUIDefine");
            i.default = class extends n.default {
                constructor() {
                    super(...arguments),
                    this.m_view = null
                }
                onEnter() {
                    this.m_view = this.createTempStateView(s.default, a.default.BINGO_UI_FINISH_COMBO_V, this.parentSp, a.default.BINGO_UI_COMMON_ATLAS)
                }
                onLeave() {
                    this.m_view = null
                }
            }
        }, {
            "../../Core/BingoUIState": 7,
            "../../Defines/BingoUIDefine": 13,
            "./BingoFinishComboClick_VView": 25
        }
    ],
    25: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("../../Core/BingoUIView"),
            s = e("../../Utils/BingoUtils"),
            a = e("../../Defines/BingoDefines"),
            o = e("../../Platform/BingoPlatform"),
            r = e("../../UICode/layaMaxUI"),
            l = e("../../Utils/BingoDevice");
            i.default = class extends n.default {
                constructor() {
                    super(...arguments),
                    this.m_view = null,
                    this.m_bannerProgress = 0,
                    this.m_nowProgress = 0,
                    this.m_unitWidth = 0,
                    this.m_isShowBanner = !1,
                    this.m_bannerDelay = 0,
                    this.m_reduceDelay = 0,
                    this.m_playerAin = new Laya.Animation
                }
                onCreate() {
                    super.onCreate()
                }
                onRemove() {
                    super.onRemove(),
                    Laya.timer.clear(this, this.updateProgress),
                    this.m_view = null
                }
                onResize() {
                    super.onResize(),
                    this.m_view && (this.m_view.spBg.graphics.clear(), this.m_view.spBg.graphics.drawRect(0, 0, l.default.uiScreenWidth, l.default.uiScreenHeight, "#000000"))
                }
                onShow() {
                    let e = o.default.inst.platform;
                    if (!e || 0 == e.isGetFinishBannerClickUrl())
                        return void this.closeView();
                    let t = [e.finishExportSequenceFrame1, e.finishExportSequenceFrame2];
                    this.m_playerAin = this.m_playerAin.loadImages(t, "player"),
                    this.m_playerAin.source = e.finishExportSequenceFrame1 + "," + e.finishExportSequenceFrame2 + "," + e.finishExportSequenceFrame1,
                    this.m_playerAin.visible = !0,
                    this.m_playerAin.interval = 1,
                    this.m_playerAin.play(1, !1),
                    this.m_playerAin.interval = 70,
                    this.m_view = this.createUIView(r.UICode.res.bingo_gui.BingoFinishCombo_VUI),
                    this.m_view.spAni.addChild(this.m_playerAin),
                    this.loadSkin(e.finishExportTip, this.m_view.img_title),
                    this.loadSkin(e.finishExportFrame, this.m_view.progressBg),
                    this.loadSkin(e.finishExportBlood, this.m_view.progress),
                    this.loadSkin(e.finishExportHeart, this.m_view.progressEnd),
                    this.loadSkin(e.finishExportAtk, this.m_view.btn_click),
                    this.loadSkin(e.finishExportClick, this.m_view.img_ani),
                    this.m_bannerProgress = s.default.randomRangeInt(40, 80),
                    this.m_view.btn_click.on(Laya.Event.CLICK, this, this.onBtnClick),
                    this.m_view.ani1.play(0, !0),
                    Laya.timer.loop(100 * Laya.timer.scale, this, this.updateProgress),
                    this.m_view && (this.m_view.spBg.graphics.clear(), this.m_view.spBg.graphics.drawRect(0, 0, l.default.uiScreenWidth, l.default.uiScreenHeight, "#000000"))
                }
                closeView() {
                    Laya.Browser.window.bingoSdk.closeUI(this.viewID)
                }
                onBtnClick() {
                    this.m_playerAin.play(0, !1),
                    this.m_reduceDelay = 100;
                    let e = s.default.randomRangeInt(5, 10),
                    t = this.nowProgress,
                    i = t + e;
                    this.nowProgress = i,
                    t < this.m_bannerProgress && i >= this.m_bannerProgress && 0 == this.m_isShowBanner && (this.m_isShowBanner = !0, this.m_bannerDelay = a.default.BANNER_LAST_TIME, o.default.inst.platform.showBanner())
                }
                updateProgress() {
                    null == this.m_view || this.m_view.destroyed || (this.m_isShowBanner && (this.m_bannerDelay -= 100, this.m_bannerDelay <= 0 && (this.m_bannerDelay = 0, o.default.inst.platform.closeBanner(), this.closeView(), console.log("关闭banner"))), this.m_reduceDelay > 0 && (this.m_reduceDelay -= 100, this.m_reduceDelay <= 0 && (this.m_reduceDelay = 100, this.nowProgress -= 1)))
                }
                set nowProgress(e) {
                    if (null == this.m_view || this.m_view.destroyed)
                        return;
                    e < 0 ? e = 0 : e > 100 && (e = 100),
                    this.m_nowProgress = e;
                    let t = (100 - this.m_nowProgress) * this.m_unitWidth;
                    Laya.Tween.to(this.m_view.progress, {
                        height: t
                    }, 100)
                }
                get nowProgress() {
                    return this.m_nowProgress
                }
                loadSkin(e, t) {
                    Laya.loader.load(e, new Laya.Handler(this, this.loadSkinComplete, [e, t]))
                }
                loadSkinComplete(e, t) {
                    t.skin = e,
                    t == this.m_view.progress && (this.m_unitWidth = this.m_view.progress.height / 100)
                }
            }
        }, {
            "../../Core/BingoUIView": 8,
            "../../Defines/BingoDefines": 9,
            "../../Platform/BingoPlatform": 19,
            "../../UICode/layaMaxUI": 21,
            "../../Utils/BingoDevice": 54,
            "../../Utils/BingoUtils": 56
        }
    ],
    26: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("../Platform/BingoPlatform"),
            s = e("../Utils/BingoUtils");
            i.default = class extends Laya.Box {
                constructor() {
                    super(...arguments),
                    this.m_init = !1,
                    this.m_flag = !1,
                    this.i = 0
                }
                init() {
                    this.m_init || (this.m_init = !0, this.m_icon = s.default.getChildByPath(this, "icon", !1), this.m_name = s.default.getChildByPath(this, "name", !1), this.m_tip = s.default.getChildByPath(this, "tip", !1), this.m_btn = s.default.getChildByPath(this, "btn", !1), this.m_index = s.default.getChildByPath(this, "index", !1), this.m_icon2 = s.default.getChildByPath(this, "icon2", !1), this.m_frame_big = s.default.getChildByPath(this, "frame_big", !1), this.m_frame_line = s.default.getChildByPath(this, "frame_line", !1), this.m_icon_click = s.default.getChildByPath(this, "icon_click", !1), Laya.timer.loop(100 * Laya.timer.scale, this, this.updateAnimFrame))
                }
                onDestroy() {
                    super.onDestroy(),
                    Laya.timer.clear(this, this.updateAnimFrame)
                }
                updateAnimFrame() {
                    if (!this.m_frame_line || !this.m_icon_click)
                        return;
                    if (!this.m_flag)
                        return this.m_frame_line.visible = !1, void(this.m_icon_click.visible = !1);
                    this.m_frame_line.visible = !0,
                    this.m_icon_click.visible = !0,
                    this.i > 5 && (this.i = 0);
                    let e = "frame_0" + this.i,
                    t = "point_0" + this.i;
                    this.m_frame_line.skin = this.getSkin(e),
                    this.m_icon_click.skin = this.getSkin(t),
                    this.i++
                }
                setData(e, t = 0, i = !1, n = 1, s = 4, a = 9, o = -1) {
                    this.m_data = e,
                    this.init(),
                    this.showUi(i, t, n, s, a, o)
                }
                showUi(e = !1, t, i, n, s, a) {
                    if (e && t) {
                        if (1 == i)
                            switch (t % 3) {
                            case 0:
                                this.m_frame_big.skin = this.getSkin("0002");
                                break;
                            case 1:
                                this.m_frame_big.skin = this.getSkin("0004");
                                break;
                            case 2:
                                this.m_frame_big.skin = this.getSkin("0005")
                            }
                        else if (2 == i)
                            switch (t % 4) {
                            case 0:
                                this.m_frame_big.skin = this.getSkin("0002");
                                break;
                            case 1:
                                this.m_frame_big.skin = this.getSkin("0004");
                                break;
                            case 2:
                                this.m_frame_big.skin = this.getSkin("0005");
                                break;
                            case 3:
                                switch (t / 4 % 3) {
                                case 0:
                                    this.m_frame_big.skin = this.getSkin("0002");
                                    break;
                                case 1:
                                    this.m_frame_big.skin = this.getSkin("0004");
                                    break;
                                case 2:
                                    this.m_frame_big.skin = this.getSkin("0005")
                                }
                            }
                        else if (3 == i)
                            switch (t % 3) {
                            case 0:
                                this.m_frame_big.skin = this.getSkin("0003_2");
                                break;
                            case 1:
                                this.m_frame_big.skin = this.getSkin("0004_2");
                                break;
                            case 2:
                                this.m_frame_big.skin = this.getSkin("0005_2")
                            }
                        this.m_flag = t == n || t == s || t == a
                    }
                    this.m_icon && this.m_icon.skin != this.m_data.icon && (this.m_icon.skin = this.m_data.icon),
                    this.m_icon2 && this.m_icon2.skin != this.m_data.icon && (this.m_icon2.skin = this.m_data.icon),
                    this.m_name && (this.m_name.text = this.m_data.togame_name),
                    this.m_tip && (this.m_data.online >= 1e4 ? this.m_tip.text = (this.m_data.online / 1e4).toFixed(2) + "万人在玩" : this.m_tip.text = this.m_data.online + "人在玩"),
                    this.m_btn ? this.m_btn.on(Laya.Event.CLICK, this, this.onJumpMiniGame) : this.on(Laya.Event.CLICK, this, this.onJumpMiniGame),
                    this.m_index && (this.m_index.text = this.m_data.extData + "")
                }
                onJumpMiniGame() {
                    console.log("跳转游戏" + this.m_data.togame_name),
                    n.default.inst.platform.jumpToGame(this.m_data.to_appid, this.m_data.jump_path)
                }
                getSkin(e) {
                    return "res/bingo_atlas/bingo_common/" + e + ".png"
                }
            }
        }, {
            "../Platform/BingoPlatform": 19,
            "../Utils/BingoUtils": 56
        }
    ],
    27: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("../Events/BingoEvent"),
            s = e("../Defines/BingoEventDefine"),
            a = e("../Utils/BingoDevice");
            i.default = class extends Laya.Image {
                constructor() {
                    super(),
                    this.m_create = !1,
                    this.on(Laya.Event.DISPLAY, this, this.onAddToStageHandler)
                }
                onAddToStageHandler() {
                    this.m_create || (this.m_create = !0, this.onResize(), n.default.registEvent(s.default.RESIZE, this, this.onResize))
                }
                destroy(e) {
                    this.offAll(),
                    n.default.unregistEvent(s.default.RESIZE, this, this.onResize),
                    Laya.Tween.clearAll(this),
                    super.destroy(e)
                }
                onResize() {
                    let e = a.default.uiScreenWidth,
                    t = a.default.uiScreenHeight;
                    this.size(10 * e, 10 * t),
                    this.pos(10 * -e / 2, 10 * -t / 2)
                }
            }
        }, {
            "../Defines/BingoEventDefine": 10,
            "../Events/BingoEvent": 14,
            "../Utils/BingoDevice": 54
        }
    ],
    28: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("../Utils/BingoDebug");
            i.default = class extends Laya.Button {
                constructor() {
                    super(),
                    this.SMALL_SCALE_SIZE = .95,
                    this.NORMAL_SCALE_SIZE = 1,
                    this.SCALE_TIME = 100,
                    this.m_clickTimeLimit = 500,
                    this.m_create = !1,
                    this.m_baseScaleX = 1,
                    this.m_baseScaleY = 1,
                    this.m_clickTimeStamp = 0,
                    this.on(Laya.Event.DISPLAY, this, this.onAddToStageHandler),
                    this.on(Laya.Event.MOUSE_DOWN, this, this.onBtnMouseDown),
                    this.on(Laya.Event.MOUSE_OUT, this, this.onBtnMouseOut),
                    this.on(Laya.Event.MOUSE_UP, this, this.onBtnMouseUp)
                }
                set enableClickLimit(e) {
                    this.m_clickTimeLimit = e ? 500 : 50
                }
                onAddToStageHandler() {
                    this.checkInitView()
                }
                checkInitView() {
                    this.m_create || (this.m_create = !0, this.onCreate(), this.m_baseScaleX = this.scaleX, this.m_baseScaleY = this.scaleY)
                }
                onCreate() {}
                onRemove() {}
                onBtnMouseDown() {
                    Laya.Tween.to(this, {
                        scaleX: this.m_baseScaleX * this.SMALL_SCALE_SIZE,
                        scaleY: this.m_baseScaleY * this.SMALL_SCALE_SIZE
                    }, this.SCALE_TIME)
                }
                onBtnMouseUp() {
                    Laya.Tween.to(this, {
                        scaleX: this.m_baseScaleX * this.NORMAL_SCALE_SIZE,
                        scaleY: this.m_baseScaleY * this.NORMAL_SCALE_SIZE
                    }, this.SCALE_TIME)
                }
                onBtnMouseOut() {
                    Laya.Tween.to(this, {
                        scaleX: this.m_baseScaleX * this.NORMAL_SCALE_SIZE,
                        scaleY: this.m_baseScaleY * this.NORMAL_SCALE_SIZE
                    }, this.SCALE_TIME)
                }
                destroy(e) {
                    this.onRemove(),
                    this.offAll(),
                    Laya.Tween.clearAll(this),
                    super.destroy(e)
                }
                event(e, t) {
                    if (e == Laya.Event.CLICK) {
                        if (Laya.Browser.now() - this.m_clickTimeStamp < this.m_clickTimeLimit)
                            return n.default.log("CLICK_TIME_LIMIT"), !1;
                        this.m_clickTimeStamp = Laya.Browser.now()
                    }
                    return super.event(e, t)
                }
            }
        }, {
            "../Utils/BingoDebug": 53
        }
    ],
    29: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("../Utils/BingoMap");
            class s {
                constructor() {
                    this.isDown = !1,
                    this.m_listHV = new n.default,
                    s._inst = this,
                    this.init()
                }
                static get inst() {
                    return this._inst || new s
                }
                setScrollEffect(e, t) {
                    this.m_listHV.set(e, t),
                    e.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown),
                    e.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove),
                    e.on(Laya.Event.MOUSE_OUT, this, this.onMouseOut),
                    e.on(Laya.Event.MOUSE_UP, this, this.onMouseUp),
                    e.on(Laya.Event.MOUSE_OVER, this, this.onMouseUp)
                }
                cleanList(e) {
                    this.m_listHV.remove(e)
                }
                init() {
                    Laya.timer.frameLoop(1, this, this.updateScroll)
                }
                updateScroll() {
                    for (let i = 0; i < this.m_listHV.arrkeys.length; i++) {
                        let n = this.m_listHV.arrkeys[i],
                        s = this.m_listHV.get(n);
                        if (!n.scrollBar)
                            continue;
                        n.scrollBar.value += 1;
                        let a = 160;
                        if (n.cells[0] && (a = this.m_listHV.get(n) ? n.cells[0].width + n.spaceX : n.cells[0].height + n.spaceY), n.scrollBar.value >= a) {
                            var e = 1;
                            e = s ? n.repeatY : n.repeatX;
                            for (var t = 0; t < e; t++)
                                n.array.push(n.array.shift());
                            n.scrollBar.value -= a,
                            n.refresh()
                        }
                    }
                }
                onMouseDown(e) {
                    this.isDown = !0,
                    this.beginX = e.stageX
                }
                onMouseMove(e) {
                    if (!this.isDown)
                        return;
                    let t = this.getListByEvent(e),
                    i = 160;
                    t.cells[0] && (i = this.m_listHV.get(t) ? t.cells[0].width + t.spaceX : t.cells[0].height + t.spaceY);
                    var n = e.stageX - this.beginX;
                    if (this.beginX = e.stageX, t.scrollBar.value -= n, console.log("move:" + t.scrollBar.value), 0 == t.scrollBar.value) {
                        var s = 1;
                        s = this.m_listHV.get(t) ? t.repeatY : t.repeatX;
                        for (var a = 0; a < s; a++)
                            t.array.unshift(t.array.pop());
                        t.scrollBar.value += i,
                        t.refresh()
                    } else if (t.scrollBar.value >= i) {
                        s = 1;
                        s = this.m_listHV.get(t) ? t.repeatY : t.repeatX;
                        for (a = 0; a < s; a++)
                            t.array.push(t.array.shift());
                        t.scrollBar.value -= i,
                        t.refresh()
                    }
                }
                onMouseOut(e) {
                    this.isDown = !1
                }
                onMouseUp(e) {
                    this.isDown = !1
                }
                getListByEvent(e) {
                    var t;
                    if (null == e.target.scrollBar)
                        if (null == e.target.parent.scrollBar) {
                            if (null == e.target.parent.parent.scrollBar)
                                return void console.log("scrollBar为空");
                            t = e.target.parent.parent
                        } else
                            t = e.target.parent;
                    else
                        t = e.target;
                    return t
                }
            }
            s._inst = null,
            i.default = s
        }, {
            "../Utils/BingoMap": 55
        }
    ],
    30: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("../Events/BingoEvent"),
            s = e("../Defines/BingoEventDefine"),
            a = e("../Utils/BingoDevice");
            i.default = class extends Laya.Image {
                constructor() {
                    super(),
                    this.m_create = !1,
                    this.on(Laya.Event.DISPLAY, this, this.onAddToStageHandler)
                }
                onAddToStageHandler() {
                    this.m_create || (this.m_create = !0, this.onResize(), n.default.registEvent(s.default.RESIZE, this, this.onResize))
                }
                destroy(e) {
                    this.offAll(),
                    n.default.unregistEvent(s.default.RESIZE, this, this.onResize),
                    Laya.Tween.clearAll(this),
                    super.destroy(e)
                }
                onResize() {
                    let e = a.default.uiScreenWidth;
                    this.width = e
                }
            }
        }, {
            "../Defines/BingoEventDefine": 10,
            "../Events/BingoEvent": 14,
            "../Utils/BingoDevice": 54
        }
    ],
    31: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("../../Core/BingoUIState"),
            s = e("./BingoCancelExport_HView"),
            a = e("../../Defines/BingoUIDefine");
            i.default = class extends n.default {
                constructor() {
                    super(...arguments),
                    this.m_view = null
                }
                onEnter() {
                    this.m_view = this.createTempStateView(s.default, a.default.BINGO_UI_CANCEL_EXPORT_H, this.parentSp, a.default.BINGO_UI_COMMON_ATLAS)
                }
                onLeave() {
                    this.m_view = null
                }
            }
        }, {
            "../../Core/BingoUIState": 7,
            "../../Defines/BingoUIDefine": 13,
            "./BingoCancelExport_HView": 32
        }
    ],
    32: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("../../Core/BingoUIView"),
            s = e("../../UICode/layaMaxUI"),
            a = e("../../Platform/BingoPlatform"),
            o = e("../../Utils/BingoUtils"),
            r = e("../BingoUIScrollEffect");
            i.default = class extends n.default {
                constructor() {
                    super(...arguments),
                    this.m_view = null,
                    this.m_data = [],
                    this.m_clickNum = 0,
                    this.m_closeBtnY = 260
                }
                onCreate() {
                    super.onCreate()
                }
                onRemove() {
                    this.m_view && !this.m_view.destroyed && (r.default.inst.cleanList(this.m_view.r_list_1), r.default.inst.cleanList(this.m_view.r_list_2), r.default.inst.cleanList(this.m_view.r_list_3)),
                    super.onRemove(),
                    this.m_view = null
                }
                onShow() {
                    this.m_clickNum = 0,
                    this.m_view = this.createUIView(s.UICode.res.bingo_gui.BingoCancelExport_HQUI),
                    this.m_view.btn_ok.on(Laya.Event.CLICK, this, this.closeView),
                    this.m_view.btn_ok.y = this.m_closeBtnY,
                    this.m_data.length = 0;
                    for (let e = 0; e < a.default.inst.platform.cancelExportJumpArray.length; e++)
                        this.m_data.push(a.default.inst.platform.cancelExportJumpArray[e]);
                    if (this.m_data && 0 != this.m_data.length) {
                        if (a.default.inst.platform.isWhitelist) {
                            let e = this.m_data[o.default.randomRangeInt(0, this.m_data.length - 1)];
                            a.default.inst.platform.jumpToGame(e.to_appid, e.jump_path)
                        }
                        this.m_view.left_list.renderHandler = new Laya.Handler(this, this.renderList),
                        this.m_view.left_list.array = this.m_data,
                        this.m_data = o.default.setMinArr(this.m_data, 8),
                        this.m_view.r_list_1.renderHandler = new Laya.Handler(this, this.renderList),
                        this.m_view.r_list_1.array = this.m_data,
                        r.default.inst.setScrollEffect(this.m_view.r_list_1, !0),
                        this.m_view.r_list_2.renderHandler = new Laya.Handler(this, this.renderList),
                        this.m_view.r_list_2.array = this.m_data,
                        r.default.inst.setScrollEffect(this.m_view.r_list_2, !0),
                        this.m_view.r_list_3.renderHandler = new Laya.Handler(this, this.renderList),
                        this.m_view.r_list_3.array = this.m_data,
                        r.default.inst.setScrollEffect(this.m_view.r_list_3, !0)
                    }
                }
                closeView() {
                    Laya.Browser.window.bingoSdk.closeUI(this.viewID)
                }
                renderList(e, t) {
                    e.setData(e.dataSource, t, !1)
                }
            }
        }, {
            "../../Core/BingoUIView": 8,
            "../../Platform/BingoPlatform": 19,
            "../../UICode/layaMaxUI": 21,
            "../../Utils/BingoUtils": 56,
            "../BingoUIScrollEffect": 29
        }
    ],
    33: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("../../Core/BingoUIState"),
            s = e("../../Defines/BingoUIDefine"),
            a = e("./BingoCancelExport_VView");
            i.default = class extends n.default {
                constructor() {
                    super(...arguments),
                    this.m_view = null
                }
                onEnter() {
                    this.m_view = this.createTempStateView(a.default, s.default.BINGO_UI_CANCEL_EXPORT_V, this.parentSp, s.default.BINGO_UI_COMMON_ATLAS)
                }
                onLeave() {
                    this.m_view = null
                }
            }
        }, {
            "../../Core/BingoUIState": 7,
            "../../Defines/BingoUIDefine": 13,
            "./BingoCancelExport_VView": 34
        }
    ],
    34: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("../../Core/BingoUIView"),
            s = e("../../UICode/layaMaxUI"),
            a = e("../BingoUIScrollEffect"),
            o = e("../../Utils/BingoUtils"),
            r = e("../../Platform/BingoPlatform");
            i.default = class extends n.default {
                constructor() {
                    super(...arguments),
                    this.m_view = null,
                    this.m_data = []
                }
                onCreate() {
                    super.onCreate()
                }
                onRemove() {
                    this.m_view && !this.m_view.destroyed && a.default.inst.cleanList(this.m_view.list),
                    super.onRemove(),
                    this.m_view = null
                }
                onShow() {
                    this.m_view = this.createUIView(s.UICode.res.bingo_gui.BingoCancelExport_VQUI),
                    this.m_view.btn_ok.on(Laya.Event.CLICK, this, this.closeView),
                    this.m_data.length = 0;
                    for (let e = 0; e < r.default.inst.platform.cancelExportJumpArray.length; e++)
                        this.m_data.push(r.default.inst.platform.cancelExportJumpArray[e]);
                    if (this.m_data && 0 != this.m_data.length) {
                        if (r.default.inst.platform.isWhitelist) {
                            let e = this.m_data[o.default.randomRangeInt(0, this.m_data.length - 1)];
                            r.default.inst.platform.jumpToGame(e.to_appid, e.jump_path)
                        }
                        this.m_data = o.default.setMinArr(this.m_data, 13),
                        this.m_view.list.renderHandler = new Laya.Handler(this, this.renderList),
                        this.m_view.list.array = this.m_data,
                        a.default.inst.setScrollEffect(this.m_view.list, !1)
                    }
                }
                closeView() {
                    Laya.Browser.window.bingoSdk.closeUI(this.viewID)
                }
                renderList(e, t) {
                    e.setData(e.dataSource, t, !1)
                }
            }
        }, {
            "../../Core/BingoUIView": 8,
            "../../Platform/BingoPlatform": 19,
            "../../UICode/layaMaxUI": 21,
            "../../Utils/BingoUtils": 56,
            "../BingoUIScrollEffect": 29
        }
    ],
    35: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("../../Core/BingoUIState"),
            s = e("./BingoComboClick_HView"),
            a = e("../../Defines/BingoUIDefine");
            i.default = class extends n.default {
                constructor() {
                    super(...arguments),
                    this.m_view = null
                }
                onEnter() {
                    this.m_view = this.createTempStateView(s.default, a.default.BINGO_UI_COMBO_H, this.parentSp, a.default.BINGO_UI_COMMON_ATLAS)
                }
                onLeave() {
                    this.m_view = null
                }
            }
        }, {
            "../../Core/BingoUIState": 7,
            "../../Defines/BingoUIDefine": 13,
            "./BingoComboClick_HView": 36
        }
    ],
    36: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("../../Core/BingoUIView"),
            s = e("../../Utils/BingoUtils"),
            a = e("../../Defines/BingoDefines"),
            o = e("../../Platform/BingoPlatform"),
            r = e("../../UICode/layaMaxUI");
            i.default = class extends n.default {
                constructor() {
                    super(...arguments),
                    this.m_view = null,
                    this.m_bannerProgress = 0,
                    this.m_nowProgress = 0,
                    this.m_unitWidth = 0,
                    this.m_isShowBanner = !1,
                    this.m_bannerDelay = 0,
                    this.m_reduceDelay = 0
                }
                onCreate() {
                    super.onCreate()
                }
                onRemove() {
                    super.onRemove(),
                    Laya.timer.clear(this, this.updateProgress),
                    o.default.inst.platform.closeBanner(),
                    this.m_view = null
                }
                onShow() {
                    this.m_view = this.createUIView(r.UICode.res.bingo_gui.BingoCombo_HUI),
                    this.m_bannerProgress = s.default.randomRangeInt(40, 80),
                    this.m_unitWidth = this.m_view.progress.width / 100,
                    this.m_view.btn_click.on(Laya.Event.CLICK, this, this.onBtnClick),
                    this.m_view.progress.width = 0,
                    Laya.timer.loop(100 * Laya.timer.scale, this, this.updateProgress)
                }
                closeView() {
                    Laya.Browser.window.bingoSdk.closeUI(this.viewID)
                }
                onBtnClick() {
                    this.m_reduceDelay = 100;
                    let e = s.default.randomRangeInt(5, 10),
                    t = this.nowProgress,
                    i = t + e;
                    this.nowProgress = i,
                    t < this.m_bannerProgress && i >= this.m_bannerProgress && 0 == this.m_isShowBanner && (this.m_isShowBanner = !0, this.m_bannerDelay = a.default.BANNER_LAST_TIME, o.default.inst.platform.showBanner())
                }
                updateProgress() {
                    null == this.m_view || this.m_view.destroyed || (this.m_isShowBanner && (this.m_bannerDelay -= 100, this.m_bannerDelay <= 0 && (this.m_bannerDelay = 0, o.default.inst.platform.closeBanner(), this.closeView(), console.log("关闭banner"))), this.m_reduceDelay > 0 && (this.m_reduceDelay -= 100, this.m_reduceDelay <= 0 && (this.m_reduceDelay = 100, this.nowProgress -= 1)))
                }
                set nowProgress(e) {
                    if (null == this.m_view || this.m_view.destroyed)
                        return;
                    e < 0 ? e = 0 : e > 100 && (e = 100),
                    this.m_nowProgress = e;
                    let t = this.m_nowProgress * this.m_unitWidth;
                    Laya.Tween.to(this.m_view.progress, {
                        width: t
                    }, 100)
                }
                get nowProgress() {
                    return this.m_nowProgress
                }
            }
        }, {
            "../../Core/BingoUIView": 8,
            "../../Defines/BingoDefines": 9,
            "../../Platform/BingoPlatform": 19,
            "../../UICode/layaMaxUI": 21,
            "../../Utils/BingoUtils": 56
        }
    ],
    37: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("../../Core/BingoUIState"),
            s = e("./BingoComboClick_VView"),
            a = e("../../Defines/BingoUIDefine");
            i.default = class extends n.default {
                constructor() {
                    super(...arguments),
                    this.m_view = null
                }
                onEnter() {
                    this.m_view = this.createTempStateView(s.default, a.default.BINGO_UI_COMBO_V, this.parentSp, a.default.BINGO_UI_COMMON_ATLAS)
                }
                onLeave() {
                    this.m_view = null
                }
            }
        }, {
            "../../Core/BingoUIState": 7,
            "../../Defines/BingoUIDefine": 13,
            "./BingoComboClick_VView": 38
        }
    ],
    38: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("../../Core/BingoUIView"),
            s = e("../../UICode/layaMaxUI"),
            a = e("../../Utils/BingoUtils"),
            o = e("../../Defines/BingoDefines"),
            r = e("../../Platform/BingoPlatform");
            i.default = class extends n.default {
                constructor() {
                    super(...arguments),
                    this.m_view = null,
                    this.m_bannerProgress = 0,
                    this.m_nowProgress = 0,
                    this.m_unitWidth = 0,
                    this.m_isShowBanner = !1,
                    this.m_bannerDelay = 0,
                    this.m_reduceDelay = 0
                }
                onCreate() {
                    super.onCreate()
                }
                onRemove() {
                    super.onRemove(),
                    Laya.timer.clear(this, this.updateProgress),
                    this.m_view = null
                }
                onShow() {
                    this.m_view = this.createUIView(s.UICode.res.bingo_gui.BingoCombo_VUI),
                    this.m_bannerProgress = a.default.randomRangeInt(40, 80),
                    this.m_unitWidth = this.m_view.progress.width / 100,
                    this.m_view.btn_click.on(Laya.Event.CLICK, this, this.onBtnClick),
                    this.m_view.ani1.play(0, !0),
                    this.m_view.progress.width = 0,
                    Laya.timer.loop(100, this, this.updateProgress)
                }
                closeView() {
                    Laya.Browser.window.bingoSdk.closeUI(this.viewID)
                }
                onBtnClick() {
                    this.m_reduceDelay = 100;
                    let e = a.default.randomRangeInt(5, 10),
                    t = this.nowProgress,
                    i = t + e;
                    this.nowProgress = i,
                    t < this.m_bannerProgress && i >= this.m_bannerProgress && 0 == this.m_isShowBanner && (this.m_isShowBanner = !0, this.m_bannerDelay = o.default.BANNER_LAST_TIME, r.default.inst.platform.showBanner())
                }
                updateProgress() {
                    null == this.m_view || this.m_view.destroyed || (this.m_isShowBanner && (this.m_bannerDelay -= 100, this.m_bannerDelay <= 0 && (this.m_bannerDelay = 0, r.default.inst.platform.closeBanner(), this.closeView(), console.log("关闭banner"))), this.m_reduceDelay > 0 && (this.m_reduceDelay -= 100, this.m_reduceDelay <= 0 && (this.m_reduceDelay = 100, this.nowProgress -= 1)))
                }
                set nowProgress(e) {
                    if (null == this.m_view || this.m_view.destroyed)
                        return;
                    e < 0 ? e = 0 : e > 100 && (e = 100),
                    this.m_nowProgress = e;
                    let t = this.m_nowProgress * this.m_unitWidth;
                    Laya.Tween.to(this.m_view.progress, {
                        width: t
                    }, 100)
                }
                get nowProgress() {
                    return this.m_nowProgress
                }
            }
        }, {
            "../../Core/BingoUIView": 8,
            "../../Defines/BingoDefines": 9,
            "../../Platform/BingoPlatform": 19,
            "../../UICode/layaMaxUI": 21,
            "../../Utils/BingoUtils": 56
        }
    ],
    39: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("../../Core/BingoUIState"),
            s = e("./BingoFinishExport_HView"),
            a = e("../../Defines/BingoUIDefine");
            i.default = class extends n.default {
                constructor() {
                    super(...arguments),
                    this.m_view = null
                }
                onEnter() {
                    this.m_view = this.createTempStateView(s.default, a.default.BINGO_UI_FINISH_EXPORT_H, this.parentSp, a.default.BINGO_UI_COMMON_ATLAS)
                }
                onLeave() {
                    this.m_view = null
                }
            }
        }, {
            "../../Core/BingoUIState": 7,
            "../../Defines/BingoUIDefine": 13,
            "./BingoFinishExport_HView": 40
        }
    ],
    40: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("../../Core/BingoUIView"),
            s = e("../../UICode/layaMaxUI"),
            a = e("../BingoUIScrollEffect"),
            o = e("../../Platform/BingoPlatform"),
            r = e("../../Utils/BingoUtils");
            i.default = class extends n.default {
                constructor() {
                    super(...arguments),
                    this.m_view = null,
                    this.m_clickNum = 0,
                    this.m_arrData = [],
                    this.m_number = 0,
                    this.m_flag = !1
                }
                onCreate() {
                    super.onCreate()
                }
                onRemove() {
                    this.m_view && !this.m_view.destroyed && a.default.inst.cleanList(this.m_view.list),
                    super.onRemove(),
                    this.m_arrData.length = 0,
                    this.m_view = null
                }
                onResize() {
                    super.onResize()
                }
                onShow() {
                    this.m_clickNum = 0,
                    this.m_view = this.createUIView(s.UICode.res.bingo_gui.BingoFinishExport_HQUI),
                    this.m_view.btn_ok.on(Laya.Event.CLICK, this, this.clickCount),
                    this.m_arrData.length = 0;
                    for (let e = 0; e < o.default.inst.platform.finishExportJumpArray.length; e++)
                        this.m_arrData.push(o.default.inst.platform.finishExportJumpArray[e]);
                    if (this.m_arrData && 0 != this.m_arrData.length) {
                        if (o.default.inst.platform.isWhitelist) {
                            let e = this.m_arrData[r.default.randomRangeInt(0, this.m_arrData.length - 1)];
                            o.default.inst.platform.jumpToGame(e.to_appid, e.jump_path)
                        }
                        this.m_arrData = r.default.setMinArr(this.m_arrData, 21),
                        this.m_view.list.array = this.m_arrData,
                        this.m_view.list.renderHandler = new Laya.Handler(this, this.renderList),
                        a.default.inst.setScrollEffect(this.m_view.list, !0)
                    }
                }
                clickCount() {
                    let e = o.default.inst.platform;
                    null != e && !e.isEnable(e.finishExportBannerEnable, e.finishExportBannerWhitelist) || 0 != this.m_clickNum ? this.closeView() : (this.m_clickNum += 1, this.m_view.btn_ok.off(Laya.Event.CLICK, this, this.clickCount), Laya.timer.once(2e3 * Laya.timer.scale, this, function () {
                            o.default.inst.platform.showBanner(),
                            this.m_view.btn_ok.on(Laya.Event.CLICK, this, this.clickCount),
                            Laya.timer.once(3e3 * Laya.timer.scale, this, function () {
                                o.default.inst.platform.closeBanner()
                            })
                        }))
                }
                closeView() {
                    o.default.inst.platform.closeBanner(),
                    Laya.Browser.window.bingoSdk.closeUI(this.viewID)
                }
                renderList(e, t) {
                    e.setData(e.dataSource, t, !0, 3)
                }
            }
        }, {
            "../../Core/BingoUIView": 8,
            "../../Platform/BingoPlatform": 19,
            "../../UICode/layaMaxUI": 21,
            "../../Utils/BingoUtils": 56,
            "../BingoUIScrollEffect": 29
        }
    ],
    41: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("../../Core/BingoUIState"),
            s = e("../../Defines/BingoUIDefine"),
            a = e("./BingoFinishExport_VView");
            i.default = class extends n.default {
                constructor() {
                    super(...arguments),
                    this.m_view = null
                }
                onEnter() {
                    this.m_view = this.createTempStateView(a.default, s.default.BINGO_UI_FINISH_EXPORT_V, this.parentSp, s.default.BINGO_UI_COMMON_ATLAS)
                }
                onLeave() {
                    this.m_view = null
                }
            }
        }, {
            "../../Core/BingoUIState": 7,
            "../../Defines/BingoUIDefine": 13,
            "./BingoFinishExport_VView": 42
        }
    ],
    42: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("../../Core/BingoUIView"),
            s = e("../../UICode/layaMaxUI"),
            a = e("../../Platform/BingoPlatform"),
            o = e("../../Utils/BingoUtils");
            i.default = class extends n.default {
                constructor() {
                    super(...arguments),
                    this.m_view = null,
                    this.m_clickNum = 0
                }
                onCreate() {
                    super.onCreate()
                }
                onRemove() {
                    super.onRemove(),
                    this.m_view = null
                }
                onShow() {
                    this.m_clickNum = 0,
                    this.m_view = this.createUIView(s.UICode.res.bingo_gui.BingoFinishExport_VQUI),
                    this.m_view.btn_ok.on(Laya.Event.CLICK, this, this.clickCount);
                    let e = [];
                    for (let t = 0; t < a.default.inst.platform.finishExportJumpArray.length; t++)
                        e.push(a.default.inst.platform.finishExportJumpArray[t]);
                    if (e && 0 != e.length) {
                        if (a.default.inst.platform.isWhitelist) {
                            let t = e[o.default.randomRangeInt(0, e.length - 1)];
                            a.default.inst.platform.jumpToGame(t.to_appid, t.jump_path)
                        }
                        this.m_view.list.renderHandler = new Laya.Handler(this, this.renderList);
                        for (let t = 1; t <= 3; t++) {
                            let i = e.shift();
                            this.m_view["top" + t].setData(i, t)
                        }
                        this.m_view.ani1.play(0, !0);
                        for (let t = 0; t < e.length; t++)
                            e[t].extData = t + 4;
                        this.m_view.list.array = e
                    }
                }
                clickCount() {
                    let e = a.default.inst.platform;
                    null != e && !e.isEnable(e.finishExportBannerEnable, e.finishExportBannerWhitelist) || 0 != this.m_clickNum ? this.closeView() : (this.m_clickNum += 1, this.m_view.btn_ok.off(Laya.Event.CLICK, this, this.clickCount), Laya.timer.once(2e3 * Laya.timer.scale, this, function () {
                            a.default.inst.platform.showBanner(),
                            this.m_view.btn_ok.on(Laya.Event.CLICK, this, this.clickCount),
                            Laya.timer.once(3e3 * Laya.timer.scale, this, function () {
                                a.default.inst.platform.closeBanner()
                            })
                        }))
                }
                closeView() {
                    a.default.inst.platform.closeBanner(),
                    Laya.Browser.window.bingoSdk.closeUI(this.viewID)
                }
                renderList(e, t) {
                    e.setData(e.dataSource, t, !1)
                }
            }
        }, {
            "../../Core/BingoUIView": 8,
            "../../Platform/BingoPlatform": 19,
            "../../UICode/layaMaxUI": 21,
            "../../Utils/BingoUtils": 56
        }
    ],
    43: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("../../Core/BingoUIState"),
            s = e("../../Defines/BingoUIDefine"),
            a = e("./BingoRecommendedExport_HView");
            i.default = class extends n.default {
                constructor() {
                    super(...arguments),
                    this.m_view = null
                }
                onEnter() {
                    this.m_view = this.createTempStateView(a.default, s.default.BINGO_UI_RECOMMENDED_EXPORT_H, this.parentSp, s.default.BINGO_UI_COMMON_ATLAS)
                }
                onLeave() {
                    this.m_view = null
                }
            }
        }, {
            "../../Core/BingoUIState": 7,
            "../../Defines/BingoUIDefine": 13,
            "./BingoRecommendedExport_HView": 44
        }
    ],
    44: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("../../Core/BingoUIView"),
            s = e("../../UICode/layaMaxUI"),
            a = e("../BingoUIScrollEffect"),
            o = e("../../Utils/BingoUtils"),
            r = e("../../Platform/BingoPlatform"),
            l = e("../../Utils/BingoDevice");
            i.default = class extends n.default {
                constructor() {
                    super(...arguments),
                    this.m_view = null
                }
                onCreate() {
                    super.onCreate()
                }
                onRemove() {
                    this.m_view && !this.m_view.destroyed && a.default.inst.cleanList(this.m_view.list),
                    super.onRemove(),
                    this.m_view = null,
                    r.default.inst.platform.stopBannerExposure()
                }
                onShow() {
                    if (this.m_view = this.createUIView(s.UICode.res.bingo_gui.BingoRecommendedExport_HQUI), this.m_data = r.default.inst.platform.recommendedExportJumpArray, this.m_data && 0 != this.m_data.length) {
                        if (r.default.inst.platform.isWhitelist) {
                            let e = this.m_data[o.default.randomRangeInt(0, this.m_data.length - 1)];
                            r.default.inst.platform.jumpToGame(e.to_appid, e.jump_path)
                        }
                        this.m_data = o.default.setMinArr(this.m_data, 22);
                        for (let e = 1; e <= 5; e++) {
                            let t = this.m_data[o.default.randomRangeInt(0, this.m_data.length - 1)];
                            this.m_view["tip" + e].setData(t, e)
                        }
                        this.m_view.list.renderHandler = new Laya.Handler(this, this.renderList),
                        this.m_view.list.array = this.m_data,
                        a.default.inst.setScrollEffect(this.m_view.list, !0),
                        this.m_view.btnClose.on(Laya.Event.CLICK, this, this.closeView),
                        this.m_view && (this.m_view.spBg.graphics.clear(), this.m_view.spBg.graphics.drawRect(0, 0, l.default.uiScreenWidth, l.default.uiScreenHeight, "#000000")),
                        this.m_view.btn_random.on(Laya.Event.CLICK, this, this.onRandom),
                        r.default.inst.platform.startBannerExposure()
                    }
                }
                onRandom() {
                    let e = this.m_data.length,
                    t = Math.floor(Math.random() * e);
                    r.default.inst.platform.jumpToGame(this.m_data[t].to_appid, this.m_data[t].jump_path)
                }
                closeView() {
                    Laya.Browser.window.bingoSdk.closeUI(this.viewID)
                }
                onResize() {
                    super.onResize(),
                    this.m_view && (this.m_view.spBg.graphics.clear(), this.m_view.spBg.graphics.drawRect(0, 0, l.default.uiScreenWidth, l.default.uiScreenHeight, "#000000"))
                }
                renderList(e, t) {
                    e.setData(e.dataSource, t, !1)
                }
            }
        }, {
            "../../Core/BingoUIView": 8,
            "../../Platform/BingoPlatform": 19,
            "../../UICode/layaMaxUI": 21,
            "../../Utils/BingoDevice": 54,
            "../../Utils/BingoUtils": 56,
            "../BingoUIScrollEffect": 29
        }
    ],
    45: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("../../Core/BingoUIState"),
            s = e("../../Defines/BingoUIDefine"),
            a = e("./BingoRecommendedExport_VView");
            i.default = class extends n.default {
                constructor() {
                    super(...arguments),
                    this.m_view = null
                }
                onEnter() {
                    this.m_view = this.createTempStateView(a.default, s.default.BINGO_UI_RECOMMENDED_EXPORT_V, this.parentSp, s.default.BINGO_UI_COMMON_ATLAS)
                }
                onLeave() {
                    this.m_view = null
                }
            }
        }, {
            "../../Core/BingoUIState": 7,
            "../../Defines/BingoUIDefine": 13,
            "./BingoRecommendedExport_VView": 46
        }
    ],
    46: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("../../Core/BingoUIView"),
            s = e("../../UICode/layaMaxUI"),
            a = e("../../Utils/BingoUtils"),
            o = e("../../Platform/BingoPlatform"),
            r = e("../../Utils/BingoDevice"),
            l = e("../BingoUIScrollEffect");
            i.default = class extends n.default {
                constructor() {
                    super(...arguments),
                    this.m_view = null
                }
                onCreate() {
                    super.onCreate()
                }
                onRemove() {
                    this.m_view && !this.m_view.destroyed && l.default.inst.cleanList(this.m_view.list),
                    super.onRemove(),
                    this.m_view = null,
                    o.default.inst.platform.stopBannerExposure()
                }
                onShow() {
                    if (this.m_view = this.createUIView(s.UICode.res.bingo_gui.BingoRecommendedExport_VQUI), this.m_data = o.default.inst.platform.recommendedExportJumpArray, this.m_data && 0 != this.m_data.length) {
                        if (o.default.inst.platform.isWhitelist) {
                            let e = this.m_data[a.default.randomRangeInt(0, this.m_data.length - 1)];
                            o.default.inst.platform.jumpToGame(e.to_appid, e.jump_path)
                        }
                        this.m_data = a.default.setMinArr(this.m_data, 31);
                        for (let e = 1; e <= 3; e++) {
                            let t = this.m_data[a.default.randomRangeInt(0, this.m_data.length - 1)];
                            this.m_view["tip" + e].setData(t, e)
                        }
                        this.m_view.list.renderHandler = new Laya.Handler(this, this.renderList),
                        this.m_view.list.array = this.m_data,
                        l.default.inst.setScrollEffect(this.m_view.list, !1),
                        this.m_view.btn_random.on(Laya.Event.CLICK, this, this.onRandom),
                        this.m_view.btnClose.on(Laya.Event.CLICK, this, this.closeView),
                        this.m_view && (this.m_view.spBg.graphics.clear(), this.m_view.spBg.graphics.drawRect(0, 0, r.default.uiScreenWidth, r.default.uiScreenHeight, "#000000")),
                        o.default.inst.platform.startBannerExposure()
                    }
                }
                onRandom() {
                    let e = this.m_data.length,
                    t = Math.floor(Math.random() * e);
                    o.default.inst.platform.jumpToGame(this.m_data[t].to_appid, this.m_data[t].jump_path)
                }
                closeView() {
                    Laya.Browser.window.bingoSdk.closeUI(this.viewID)
                }
                onResize() {
                    super.onResize(),
                    this.m_view && (this.m_view.spBg.graphics.clear(), this.m_view.spBg.graphics.drawRect(0, 0, r.default.uiScreenWidth, r.default.uiScreenHeight, "#000000"))
                }
                renderList(e, t) {
                    e.setData(e.dataSource, t, !1)
                }
            }
        }, {
            "../../Core/BingoUIView": 8,
            "../../Platform/BingoPlatform": 19,
            "../../UICode/layaMaxUI": 21,
            "../../Utils/BingoDevice": 54,
            "../../Utils/BingoUtils": 56,
            "../BingoUIScrollEffect": 29
        }
    ],
    47: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("../../Core/BingoUIState"),
            s = e("../../Defines/BingoUIDefine"),
            a = e("./BingoStartupExport_HView");
            i.default = class extends n.default {
                constructor() {
                    super(...arguments),
                    this.m_view = null
                }
                onEnter() {
                    this.m_view = this.createTempStateView(a.default, s.default.BINGO_UI_STARTUP_EXPORT_H, this.parentSp, s.default.BINGO_UI_COMMON_ATLAS)
                }
                onLeave() {
                    this.m_view = null
                }
            }
        }, {
            "../../Core/BingoUIState": 7,
            "../../Defines/BingoUIDefine": 13,
            "./BingoStartupExport_HView": 48
        }
    ],
    48: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("../../Core/BingoUIView"),
            s = e("../../UICode/layaMaxUI"),
            a = e("../BingoUIScrollEffect"),
            o = e("../../Utils/BingoUtils"),
            r = e("../../Platform/BingoPlatform");
            i.default = class extends n.default {
                constructor() {
                    super(...arguments),
                    this.m_view = null,
                    this.m_clickNum = 0
                }
                onCreate() {
                    super.onCreate()
                }
                onRemove() {
                    this.m_view && !this.m_view.destroyed && a.default.inst.cleanList(this.m_view.list),
                    super.onRemove(),
                    this.m_view = null
                }
                onShow() {
                    if (this.m_clickNum = 0, this.m_view = this.createUIView(s.UICode.res.bingo_gui.BingoStartupExport_HQUI), this.m_data = r.default.inst.platform.startupExportJumpArray, this.m_data && 0 != this.m_data.length) {
                        if (r.default.inst.platform.isWhitelist) {
                            let e = this.m_data[o.default.randomRangeInt(0, this.m_data.length - 1)];
                            r.default.inst.platform.jumpToGame(e.to_appid, e.jump_path)
                        }
                        this.m_view.list.renderHandler = new Laya.Handler(this, this.renderList),
                        this.m_data = o.default.setMinArr(this.m_data, 50),
                        this.m_view.list.array = this.m_data,
                        a.default.inst.setScrollEffect(this.m_view.list, !0),
                        this.m_view.btn_ok.on(Laya.Event.CLICK, this, this.closeView)
                    }
                }
                closeView() {
                    if (0 == this.m_clickNum) {
                        this.m_clickNum++;
                        let e = this.m_data[o.default.randomRangeInt(0, this.m_data.length - 1)];
                        r.default.inst.platform.jumpToGame(e.to_appid, e.jump_path)
                    } else
                        Laya.Browser.window.bingoSdk.closeUI(this.viewID)
                }
                renderList(e, t) {
                    e.setData(e.dataSource, t, !0, 3, 4, 9, 8)
                }
            }
        }, {
            "../../Core/BingoUIView": 8,
            "../../Platform/BingoPlatform": 19,
            "../../UICode/layaMaxUI": 21,
            "../../Utils/BingoUtils": 56,
            "../BingoUIScrollEffect": 29
        }
    ],
    49: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("../../Core/BingoUIState"),
            s = e("../../Defines/BingoUIDefine"),
            a = e("./BingoStartupExport_VView");
            i.default = class extends n.default {
                constructor() {
                    super(...arguments),
                    this.m_view = null
                }
                onEnter() {
                    this.m_view = this.createTempStateView(a.default, s.default.BINGO_UI_STARTUP_EXPORT_V, this.parentSp, s.default.BINGO_UI_COMMON_ATLAS)
                }
                onLeave() {
                    this.m_view = null
                }
            }
        }, {
            "../../Core/BingoUIState": 7,
            "../../Defines/BingoUIDefine": 13,
            "./BingoStartupExport_VView": 50
        }
    ],
    50: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("../../Core/BingoUIView"),
            s = e("../../UICode/layaMaxUI"),
            a = e("../BingoUIScrollEffect"),
            o = e("../../Utils/BingoUtils"),
            r = e("../../Platform/BingoPlatform");
            i.default = class extends n.default {
                constructor() {
                    super(...arguments),
                    this.m_view = null,
                    this.m_clickNum = 0
                }
                onCreate() {
                    super.onCreate()
                }
                onRemove() {
                    this.m_view && !this.m_view.destroyed && a.default.inst.cleanList(this.m_view.list_1),
                    super.onRemove(),
                    this.m_view = null
                }
                onShow() {
                    if (this.m_clickNum = 0, this.m_view = this.createUIView(s.UICode.res.bingo_gui.BingoStartupExport_VQUI), this.m_data = r.default.inst.platform.startupExportJumpArray, this.m_data && 0 != this.m_data.length) {
                        if (r.default.inst.platform.isWhitelist) {
                            let e = this.m_data[o.default.randomRangeInt(0, this.m_data.length - 1)];
                            r.default.inst.platform.jumpToGame(e.to_appid, e.jump_path)
                        }
                        this.m_data = o.default.setMinArr(this.m_data, 26),
                        this.m_view.list_1.renderHandler = new Laya.Handler(this, this.renderList),
                        this.m_view.list_1.array = this.m_data,
                        a.default.inst.setScrollEffect(this.m_view.list_1, !1),
                        this.m_view.btn_ok.on(Laya.Event.CLICK, this, this.closeView)
                    }
                }
                closeView() {
                    if (0 == this.m_clickNum) {
                        this.m_clickNum++;
                        let e = this.m_data[o.default.randomRangeInt(0, this.m_data.length - 1)];
                        r.default.inst.platform.jumpToGame(e.to_appid, e.jump_path)
                    } else
                        Laya.Browser.window.bingoSdk.closeUI(this.viewID)
                }
                renderList(e, t) {
                    e.setData(e.dataSource, t, !0, 3)
                }
            }
        }, {
            "../../Core/BingoUIView": 8,
            "../../Platform/BingoPlatform": 19,
            "../../UICode/layaMaxUI": 21,
            "../../Utils/BingoUtils": 56,
            "../BingoUIScrollEffect": 29
        }
    ],
    51: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("../../Defines/BingoSuspensionDefine"),
            s = e("../../Platform/BingoPlatform"),
            a = e("../../Utils/BingoUtils");
            i.default = class extends Laya.Sprite {
                constructor() {
                    super(...arguments),
                    this.m_SuspensionJumpArray = []
                }
                addSuspensionIcon(e, t, i, a = !1) {
                    switch (this.m_type = e, this.m_cancelExportParent = t, this.m_showNum = i, e) {
                    case n.default.SUSPENSION_MAIN:
                        this.m_SuspensionJumpArray = s.default.inst.platform.mainHangJumpArray;
                        break;
                    case n.default.SUSPENSION_MATCH:
                        this.m_SuspensionJumpArray = s.default.inst.platform.matchHangJumpArray;
                        break;
                    case n.default.SUSPENSION_GAME:
                        this.m_SuspensionJumpArray = s.default.inst.platform.gameplayHangJumpArray;
                        break;
                    case n.default.SUSPENSION_END:
                        this.m_SuspensionJumpArray = s.default.inst.platform.finishHangJumpArray,
                        a && this.JumpGame()
                    }
                    this.m_bgIcon = new Laya.Image("res/bingo_atlas/bingo_common/_00163.png"),
                    this.m_imgIcon = new Laya.Image,
                    this.m_txtName = new Laya.Text,
                    this.addChild(this.m_bgIcon),
                    this.m_bgIcon.addChild(this.m_imgIcon),
                    this.m_bgIcon.addChild(this.m_txtName),
                    this.m_imgIcon.x = 7,
                    this.m_imgIcon.y = 10,
                    this.m_imgIcon.width = 111,
                    this.m_imgIcon.height = 108,
                    this.m_txtName.fontSize = 20,
                    this.m_txtName.align = "center",
                    this.m_txtName.width = 120,
                    this.m_txtName.height = 24,
                    this.m_txtName.x = 3.5,
                    this.m_txtName.y = 125,
                    this.shakingEffect(),
                    this.setIconData(),
                    Laya.timer.loop(3e3 * Laya.timer.scale, this, this.setIconData, [this.m_bgIcon, this.m_imgIcon, this.m_txtName])
                }
                JumpGame() {
                    if (s.default.inst.platform.isWhitelist) {
                        let e = this.m_SuspensionJumpArray[a.default.randomRangeInt(0, this.m_SuspensionJumpArray.length - 1)];
                        s.default.inst.platform.jumpToGame(e.to_appid, e.jump_path, new Laya.Handler(this, this.onMoreGame))
                    }
                }
                setIconData() {
                    this.m_jumpData = this.m_SuspensionJumpArray[this.m_showNum % this.m_SuspensionJumpArray.length],
                    this.m_txtName.text = this.m_jumpData.togame_name,
                    this.m_imgIcon.skin = this.m_jumpData.icon,
                    this.m_imgIcon.on(Laya.Event.CLICK, this, this.onClickIcon)
                }
                shakingEffect() {
                    this.m_tween = Laya.Tween.to(this.m_bgIcon, {
                        x: 10 == this.m_bgIcon.x ? -10 : 10
                    }, 500, null, new Laya.Handler(this, this.shakingEffect))
                }
                onClickIcon() {
                    let e = this.m_jumpData.to_appid,
                    t = this.m_jumpData.jump_path;
                    s.default.inst.platform.isWhitelist ? s.default.inst.platform.jumpToGame(e, t, new Laya.Handler(this, this.onMoreGame)) : s.default.inst.platform.jumpToGame(e, t)
                }
                onMoreGame(e) {
                    Laya.Browser.window.bingoSdk.showCancelExport(this.m_cancelExportParent)
                }
                onDestroy() {
                    super.onDestroy(),
                    this.m_bgIcon = null,
                    this.m_imgIcon = null,
                    this.m_txtName = null,
                    this.m_tween = null
                }
            }
        }, {
            "../../Defines/BingoSuspensionDefine": 12,
            "../../Platform/BingoPlatform": 19,
            "../../Utils/BingoUtils": 56
        }
    ],
    52: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("../../Defines/BingoSuspensionDefine");
            i.default = class extends Laya.Sprite {
                SuspensionMoreGameBtn(e, t) {
                    this.m_CancelExportParent = t,
                    e == n.default.SUSPENSION_GAME ? this.m_imgMoreGame = new Laya.Image("res/bingo_atlas/bingo_common/hutui_tuichu1.png") : e == n.default.SUSPENSION_MAIN ? (this.m_imgMoreGame = new Laya.Image("res/bingo_atlas/bingo_common/moregame.png"), this.shakingEffect(this.m_imgMoreGame)) : e == n.default.SUSPENSION_DRAWER && (this.m_imgMoreGame = new Laya.Image("res/bingo_atlas/bingo_common/hutui_kaihui.png")),
                    this.addChild(this.m_imgMoreGame),
                    this.m_imgMoreGame.on(Laya.Event.CLICK, this, this.onMoreGame)
                }
                shakingEffect(e) {
                    this.m_tween = Laya.Tween.to(e, {
                        x: 10 == e.x ? -10 : 10
                    }, 500, null, new Laya.Handler(this, function () {
                                this.shakingEffect(e)
                            }))
                }
                onDestroy() {
                    super.onDestroy(),
                    this.m_imgMoreGame = null,
                    this.m_tween = null,
                    this.m_CancelExportParent = null
                }
                onMoreGame() {
                    Laya.Browser.window.bingoSdk.showCancelExport(this.m_CancelExportParent)
                }
            }
        }, {
            "../../Defines/BingoSuspensionDefine": 12
        }
    ],
    53: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("../Defines/BingoDefines");
            i.default = class {
                static log(e, t = null) {
                    if (n.default.DEBUG_LOG)
                        if (t) {
                            let i = JSON.stringify(t);
                            console.log(e, i)
                        } else
                            console.log(e)
                }
                static error(e, t = null) {
                    if (n.default.DEBUG_LOG)
                        if (t) {
                            let i = JSON.stringify(t);
                            console.error(e, i)
                        } else
                            console.error(e)
                }
                static warn(e, t = null) {
                    if (n.default.DEBUG_LOG)
                        if (t) {
                            let i = JSON.stringify(t);
                            console.warn(e, i)
                        } else
                            console.warn(e)
                }
                static stack() {
                    n.default.DEBUG_LOG && (console.log("***----------------------------------------  ** "), console.trace(), console.log("***----------------------------------------  ** "))
                }
            }
        }, {
            "../Defines/BingoDefines": 9
        }
    ],
    54: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("../Defines/BingoDefines"),
            s = e("./BingoDebug"),
            a = e("../BingoSdkConfig");
            class o {
                static isNotchScreen() {
                    let e = window.innerWidth > 0 ? window.innerWidth : screen.width,
                    t = window.innerHeight > 0 ? window.innerHeight : screen.height,
                    i = Laya.Browser.pixelRatio;
                    if (a.default.isHorizon) {
                        if (e < t) {
                            let i = e;
                            e = t,
                            t = i
                        }
                        return s.default.log("width : " + e + " height : " + t + " ratio : " + i),
                        812 == e && 375 == t && 3 == i || e / t >= 2
                    }
                    if (e > t) {
                        let i = e;
                        e = t,
                        t = i
                    }
                    return s.default.log("width : " + e + " height : " + t + " ratio : " + i),
                    375 == e && 812 == t && 3 == i || t / e >= 2
                }
                static updateScreenSize(e, t) {
                    if (this.screenWidth = e, this.screenHeight = t, a.default.isHorizon) {
                        if (e < t) {
                            let i = e;
                            e = t,
                            t = i
                        }
                    } else if (e > t) {
                        let i = e;
                        e = t,
                        t = i
                    }
                    let i = e / n.default.DEFAULT_WIDTH,
                    s = t / n.default.DEFAULT_HEIGHT;
                    this.uiScale = i < s ? i : s,
                    this.uiScreenWidth = e / this.uiScale,
                    this.uiScreenHeight = t / this.uiScale,
                    this.isNotchScreen() ? (this.uiOffsetX = 44, Laya.Browser.onIPhone, this.uiOffsetY = 24) : (this.uiOffsetX = 0, this.uiOffsetY = 0)
                }
            }
            o.screenWidth = 0,
            o.screenHeight = 0,
            o.uiScreenWidth = 0,
            o.uiScreenHeight = 0,
            o.uiScale = 0,
            o.uiOffsetX = 0,
            o.uiOffsetY = 0,
            i.default = o
        }, {
            "../BingoSdkConfig": 2,
            "../Defines/BingoDefines": 9,
            "./BingoDebug": 53
        }
    ],
    55: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            i.default = class {
                constructor() {
                    this.m_map = new Map,
                    this.m_recacheKey = !0,
                    this.m_recacheValue = !0,
                    this.m_keys = [],
                    this.m_values = []
                }
                set(e, t) {
                    this.m_map.set(e, t),
                    this.markRecache()
                }
                get(e) {
                    return this.m_map.get(e)
                }
                containsKey(e) {
                    return !!this.m_map.has(e)
                }
                remove(e) {
                    return !!this.m_map.get(e) && (this.markRecache(), this.m_map.delete(e), !0)
                }
                clear() {
                    this.markRecache(),
                    this.m_map && this.m_map.clear()
                }
                get values() {
                    return this.m_map.values()
                }
                get keys() {
                    return this.m_map.keys()
                }
                get arrkeys() {
                    if (!this.m_recacheKey)
                        return this.m_keys;
                    this.m_keys.length = 0;
                    for (let e of this.m_map.keys())
                        this.m_keys.push(e);
                    return this.m_recacheKey = !1,
                    this.m_keys
                }
                get arrvalues() {
                    if (!this.m_recacheValue)
                        return this.m_values;
                    this.m_values.length = 0;
                    for (let e of this.m_map.values())
                        this.m_values.push(e);
                    return this.m_recacheValue = !1,
                    this.m_values
                }
                markRecache() {
                    this.m_recacheKey = !0,
                    this.m_recacheValue = !0
                }
            }
        }, {}
    ],
    56: [function (e, t, i) {
            "use strict";
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            const n = e("./BingoDebug");
            i.default = class {
                static arrayBufferToString(e) {
                    let t = new Laya.Byte;
                    return t.writeArrayBuffer(e),
                    t.pos = 0,
                    t.readUTFBytes().trim()
                }
                static getChildByPath(e, t, i = !0) {
                    let s = null,
                    a = t.split("/"),
                    o = e;
                    if (null != a && a.length > 0)
                        for (let e = 0; e < a.length && null != o; e++) {
                            let t = a[e];
                            if (null == t || "" == t)
                                break;
                            o = o.getChildByName(a[e]),
                            e == a.length - 1 && (s = o)
                        }
                    return null == s && i && null == s && n.default.log('Error ! get child by path: "' + t + '" fail !'),
                    s
                }
                static randomRangeInt(e, t) {
                    return e = Math.ceil(e),
                    t = Math.floor(t),
                    Math.floor(Math.random() * (t - e + 1)) + e
                }
                static setMinArr(e, t) {
                    if (!e || 0 == e.length || e.length >= t)
                        return e;
                    let i = [];
                    for (let n = 0; n <= t; n++)
                        e[n] ? i.push(e[n]) : e[n % e.length] && i.push(e[n % e.length]);
                    return i
                }
                static shuffle(e) {
                    if (e.length <= 0)
                        return null;
                    let t = [],
                    i = [];
                    for (let t = 0; t < e.length; t++)
                        i.push(e[t]);
                    for (; i.length > 0; ) {
                        let e = Math.floor(Math.random() * i.length);
                        t.push(i[e]),
                        i.splice(e, 1)
                    }
                    return t
                }
                static get refocusTimestamp() {
                    return (new Date).getTime()
                }
            }
        }, {
            "./BingoDebug": 53
        }
    ]
}, {}, [15]);
