import {
  DAYS_IN_WEEK,
  MAX_YEAR,
  MIN_YEAR,
  POLYMORPHEUS_CONTEXT,
  PolymorpheusComponent,
  PolymorpheusOutlet,
  PolymorpheusTemplate,
  SCROLL_REF_SELECTOR,
  TUI_ANIMATIONS_DEFAULT_DURATION,
  TUI_ANIMATIONS_SPEED,
  TUI_APPEARANCE_DEFAULT_OPTIONS,
  TUI_APPEARANCE_OPTIONS,
  TUI_ASSETS_PATH,
  TUI_AUXILIARY,
  TUI_BACK_WORD,
  TUI_BUTTON_DEFAULT_OPTIONS,
  TUI_BUTTON_OPTIONS,
  TUI_CLEAR_WORD,
  TUI_CLOSE_WORD,
  TUI_COMMON_ICONS,
  TUI_DARK_MODE,
  TUI_DARK_MODE_DEFAULT_KEY,
  TUI_DARK_MODE_KEY,
  TUI_DATA_LIST_ACCESSOR,
  TUI_DATA_LIST_HOST,
  TUI_DATE_FORMAT,
  TUI_DAY_TYPE_HANDLER,
  TUI_DEFAULT_DATE_FORMAT,
  TUI_DEFAULT_ERROR_MESSAGE,
  TUI_DEFAULT_ITEMS_HANDLERS,
  TUI_DEFAULT_NUMBER_FORMAT,
  TUI_DEFAULT_SCROLLBAR_OPTIONS,
  TUI_DROPDOWN_COMPONENT,
  TUI_DROPDOWN_CONTEXT,
  TUI_DROPDOWN_DEFAULT_OPTIONS,
  TUI_DROPDOWN_HOST,
  TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS,
  TUI_DROPDOWN_HOVER_OPTIONS,
  TUI_DROPDOWN_OPTIONS,
  TUI_FALSE_HANDLER,
  TUI_FIRST_DAY,
  TUI_FIRST_DAY_OF_WEEK,
  TUI_FONT_OFFSET,
  TUI_GROUP_DEFAULT_OPTIONS,
  TUI_GROUP_OPTIONS,
  TUI_HINT_COMPONENT,
  TUI_HINT_DEFAULT_OPTIONS,
  TUI_HINT_DIRECTIONS,
  TUI_HINT_OPTIONS,
  TUI_HINT_PROVIDERS,
  TUI_ICON_END,
  TUI_ICON_REGISTRY,
  TUI_ICON_RESOLVER,
  TUI_ICON_START,
  TUI_ICON_STARTS,
  TUI_ICON_START_RESOLVER,
  TUI_IS_IOS,
  TUI_IS_MOBILE,
  TUI_ITEMS_HANDLERS,
  TUI_LAST_DAY,
  TUI_LAST_DISPLAYED_DAY,
  TUI_LINK_DEFAULT_OPTIONS,
  TUI_LINK_OPTIONS,
  TUI_MEDIA,
  TUI_MONTHS,
  TUI_NOTHING_FOUND_MESSAGE,
  TUI_NUMBER_FORMAT,
  TUI_OPTION_CONTENT,
  TUI_PLATFORM,
  TUI_REDUCED_MOTION,
  TUI_SCROLLABLE,
  TUI_SCROLLBAR_OPTIONS,
  TUI_SCROLL_INTO_VIEW,
  TUI_SCROLL_REF,
  TUI_SELECTION_STREAM,
  TUI_SHORT_WEEK_DAYS,
  TUI_SPIN_ICONS,
  TUI_SPIN_TEXTS,
  TUI_TEXTFIELD_ACCESSOR,
  TUI_TEXTFIELD_OPTIONS,
  TUI_THEME,
  TUI_TRUE_HANDLER,
  TUI_VERSION,
  TUI_VIEWPORT,
  TuiAccessor,
  TuiActiveZone,
  TuiAnimated,
  TuiAnimatedParent,
  TuiAppearance,
  TuiBreakpointService,
  TuiButton,
  TuiDarkThemeService,
  TuiDataList,
  TuiDataListComponent,
  TuiDataListDirective,
  TuiDateFormat,
  TuiDay,
  TuiDayRange,
  TuiDriver,
  TuiDriverDirective,
  TuiDropdown,
  TuiDropdownA11y,
  TuiDropdownAuto,
  TuiDropdownComponent,
  TuiDropdownContext,
  TuiDropdownDirective,
  TuiDropdownDriver,
  TuiDropdownDriverDirective,
  TuiDropdownFixed,
  TuiDropdownHover,
  TuiDropdownManual,
  TuiDropdownOpen,
  TuiDropdownOpenLegacy,
  TuiDropdownOptionsDirective,
  TuiDropdownPortal,
  TuiDropdownPosition,
  TuiDropdownPositionSided,
  TuiDropdownSelection,
  TuiDropdownService,
  TuiDropdowns,
  TuiFontSize,
  TuiFormatDateService,
  TuiGroup,
  TuiHint,
  TuiHintBaseComponent,
  TuiHintComponent,
  TuiHintDescribe,
  TuiHintDirective,
  TuiHintDriver,
  TuiHintHost,
  TuiHintHover,
  TuiHintManual,
  TuiHintOptionsDirective,
  TuiHintOverflow,
  TuiHintPointer,
  TuiHintPosition,
  TuiHintService,
  TuiHintUnstyled,
  TuiHintUnstyledComponent,
  TuiHints,
  TuiHovered,
  TuiIcon,
  TuiIconPipe,
  TuiIcons,
  TuiItemsHandlersDirective,
  TuiItemsHandlersValidator,
  TuiLabel,
  TuiLink,
  TuiMonth,
  TuiMonthRange,
  TuiNumberFormat,
  TuiOptGroup,
  TuiOption,
  TuiOptionNew,
  TuiOptionWithValue,
  TuiPopoverService,
  TuiPopup,
  TuiPopupService,
  TuiPopups,
  TuiPositionAccessor,
  TuiPositionService,
  TuiRectAccessor,
  TuiScrollControls,
  TuiScrollIntoView,
  TuiScrollRef,
  TuiScrollable,
  TuiScrollbar,
  TuiScrollbarDirective,
  TuiScrollbarService,
  TuiSelect,
  TuiSelectLike,
  TuiSurface,
  TuiTextfield,
  TuiTextfieldBase,
  TuiTextfieldBaseComponent,
  TuiTextfieldComponent,
  TuiTextfieldContent,
  TuiTextfieldDirective,
  TuiTextfieldDropdownDirective,
  TuiTextfieldItemComponent,
  TuiTextfieldMultiComponent,
  TuiTextfieldOptionsDirective,
  TuiTitle,
  TuiValidationError,
  TuiVehicle,
  TuiVisualViewportService,
  TuiWithAppearance,
  TuiWithDropdownOpen,
  TuiWithIcons,
  TuiWithItemsHandlers,
  TuiWithNativePicker,
  TuiWithOptionContent,
  TuiWithTextfield,
  TuiWithTextfieldDropdown,
  TuiYear,
  WA_ANIMATION_FRAME,
  WA_WINDOW,
  WINDOW,
  coerceBooleanProperty,
  injectContext,
  tuiAppearance,
  tuiAppearanceFocus,
  tuiAppearanceMode,
  tuiAppearanceOptionsProvider,
  tuiAppearanceState,
  tuiAsAuxiliary,
  tuiAsDataList,
  tuiAsDataListAccessor,
  tuiAsDataListHost,
  tuiAsDriver,
  tuiAsOptionContent,
  tuiAsPopover,
  tuiAsPositionAccessor,
  tuiAsRectAccessor,
  tuiAsTextfieldAccessor,
  tuiAsVehicle,
  tuiAsViewport,
  tuiAssetsPathProvider,
  tuiButtonOptionsProvider,
  tuiCheckFixedPosition,
  tuiClamp,
  tuiCloseWatcher,
  tuiCommonIconsProvider,
  tuiContainsOrAfter,
  tuiCreateOptions,
  tuiDateFormatProvider,
  tuiDropdown,
  tuiDropdownEnabled,
  tuiDropdownHoverOptionsProvider,
  tuiDropdownOpen,
  tuiDropdownOptionsProvider,
  tuiEnableFontScaling,
  tuiFallbackAccessor,
  tuiFormatNumber,
  tuiGetActualTarget,
  tuiGetClosestFocusable,
  tuiGetDuration,
  tuiGetFocused,
  tuiGetFractionPartPadded,
  tuiGetIconMode,
  tuiGetViewportHeight,
  tuiGetViewportWidth,
  tuiGetWordRange,
  tuiGroupOptionsProvider,
  tuiHintOptionsProvider,
  tuiIconResolverProvider,
  tuiIconsProvider,
  tuiIfMap,
  tuiInRange,
  tuiInjectAuxiliary,
  tuiInjectDataListSize,
  tuiInjectElement,
  tuiInjectIconResolver,
  tuiIsEditingKey,
  tuiIsElement,
  tuiIsHTMLElement,
  tuiIsNumber,
  tuiIsObscured,
  tuiIsPresent,
  tuiIsSafari,
  tuiIsString,
  tuiItemsHandlersProvider,
  tuiLinkOptionsProvider,
  tuiNullableSame,
  tuiNumberFormatProvider,
  tuiNumberToStringWithoutExp,
  tuiOverrideOptions,
  tuiPositionAccessorFor,
  tuiProvideAccessor,
  tuiProvideOptions,
  tuiPure,
  tuiPx,
  tuiRectAccessorFor,
  tuiScrollbarOptionsProvider,
  tuiSizeBigger,
  tuiStringHashToHsl,
  tuiTextfieldIconBinding,
  tuiTextfieldOptionsProvider,
  tuiToAnimationOptions,
  tuiTypedFromEvent,
  tuiWatch,
  tuiWithStyles,
  tuiZonefreeScheduler,
  tuiZonefull
} from "./chunk-2UDURBLU.js";
import {
  takeUntilDestroyed,
  toSignal
} from "./chunk-AOZU4WIZ.js";
import {
  animate,
  animateChild,
  query,
  sequence,
  stagger,
  style,
  transition,
  trigger
} from "./chunk-P35NFK3Y.js";
import {
  PreventEventPlugin
} from "./chunk-AMAZA7M3.js";
import "./chunk-BC4PMDKU.js";
import "./chunk-J36ZAYF3.js";
import {
  AsyncPipe,
  EVENT_MANAGER_PLUGINS,
  NgComponentOutlet,
  NgForOf,
  NgIf,
  NgTemplateOutlet
} from "./chunk-IHAK26QT.js";
import "./chunk-DEBYPIGP.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  Inject,
  Injectable,
  Input,
  Output,
  Pipe,
  Renderer2,
  RendererFactory2,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  setClassMetadata,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵpipeBindV,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction5,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-EIFE64Y5.js";
import {
  DOCUMENT,
  DestroyRef,
  EventEmitter,
  INJECTOR$1,
  InjectionToken,
  Injector,
  NgZone,
  RuntimeError,
  assertInInjectionContext,
  computed,
  inject,
  signal,
  ɵɵdefineInjectable,
  ɵɵinject,
  ɵɵnamespaceSVG,
  ɵɵresetView,
  ɵɵrestoreView
} from "./chunk-M5JT76BW.js";
import {
  BehaviorSubject,
  EMPTY,
  Observable,
  Subject,
  __decorate,
  __objRest,
  __spreadProps,
  __spreadValues,
  combineLatest,
  distinctUntilChanged,
  endWith,
  exhaustMap,
  filter,
  fromEvent,
  identity,
  ignoreElements,
  isObservable,
  map,
  merge,
  of,
  race,
  repeat,
  share,
  shareReplay,
  skipWhile,
  startWith,
  switchMap,
  take,
  takeUntil,
  throttleTime,
  timer
} from "./chunk-7XKNWGE2.js";

// node_modules/@angular/animations/fesm2022/animations.mjs
var AnimationBuilder = class _AnimationBuilder {
  static ɵfac = function AnimationBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnimationBuilder)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _AnimationBuilder,
    factory: () => (() => inject(BrowserAnimationBuilder))(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(BrowserAnimationBuilder)
    }]
  }], null, null);
})();
var AnimationFactory = class {
};
var BrowserAnimationBuilder = class _BrowserAnimationBuilder extends AnimationBuilder {
  animationModuleType = inject(ANIMATION_MODULE_TYPE, {
    optional: true
  });
  _nextAnimationId = 0;
  _renderer;
  constructor(rootRenderer, doc) {
    super();
    const typeData = {
      id: "0",
      encapsulation: ViewEncapsulation.None,
      styles: [],
      data: {
        animation: []
      }
    };
    this._renderer = rootRenderer.createRenderer(doc.body, typeData);
    if (this.animationModuleType === null && !isAnimationRenderer(this._renderer)) {
      throw new RuntimeError(3600, (typeof ngDevMode === "undefined" || ngDevMode) && "Angular detected that the `AnimationBuilder` was injected, but animation support was not enabled. Please make sure that you enable animations in your application by calling `provideAnimations()` or `provideAnimationsAsync()` function.");
    }
  }
  build(animation2) {
    const id = this._nextAnimationId;
    this._nextAnimationId++;
    const entry = Array.isArray(animation2) ? sequence(animation2) : animation2;
    issueAnimationCommand(this._renderer, null, id, "register", [entry]);
    return new BrowserAnimationFactory(id, this._renderer);
  }
  static ɵfac = function BrowserAnimationBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserAnimationBuilder)(ɵɵinject(RendererFactory2), ɵɵinject(DOCUMENT));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _BrowserAnimationBuilder,
    factory: _BrowserAnimationBuilder.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RendererFactory2
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var BrowserAnimationFactory = class extends AnimationFactory {
  _id;
  _renderer;
  constructor(_id, _renderer) {
    super();
    this._id = _id;
    this._renderer = _renderer;
  }
  create(element, options) {
    return new RendererAnimationPlayer(this._id, element, options || {}, this._renderer);
  }
};
var RendererAnimationPlayer = class {
  id;
  element;
  _renderer;
  parentPlayer = null;
  _started = false;
  constructor(id, element, options, _renderer) {
    this.id = id;
    this.element = element;
    this._renderer = _renderer;
    this._command("create", options);
  }
  _listen(eventName, callback) {
    return this._renderer.listen(this.element, `@@${this.id}:${eventName}`, callback);
  }
  _command(command, ...args) {
    issueAnimationCommand(this._renderer, this.element, this.id, command, args);
  }
  onDone(fn) {
    this._listen("done", fn);
  }
  onStart(fn) {
    this._listen("start", fn);
  }
  onDestroy(fn) {
    this._listen("destroy", fn);
  }
  init() {
    this._command("init");
  }
  hasStarted() {
    return this._started;
  }
  play() {
    this._command("play");
    this._started = true;
  }
  pause() {
    this._command("pause");
  }
  restart() {
    this._command("restart");
  }
  finish() {
    this._command("finish");
  }
  destroy() {
    this._command("destroy");
  }
  reset() {
    this._command("reset");
    this._started = false;
  }
  setPosition(p) {
    this._command("setPosition", p);
  }
  getPosition() {
    return unwrapAnimationRenderer(this._renderer)?.engine?.players[this.id]?.getPosition() ?? 0;
  }
  totalTime = 0;
};
function issueAnimationCommand(renderer, element, id, command, args) {
  renderer.setProperty(element, `@@${id}:${command}`, args);
}
function unwrapAnimationRenderer(renderer) {
  const type = renderer.ɵtype;
  if (type === 0) {
    return renderer;
  } else if (type === 1) {
    return renderer.animationRenderer;
  }
  return null;
}
function isAnimationRenderer(renderer) {
  const type = renderer.ɵtype;
  return type === 0 || type === 1;
}

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-animations.mjs
var TRANSITION = "{{duration}}ms ease-in-out";
var DURATION = { params: { duration: 300 } };
var STAGGER = 300;
var tuiParentAnimation = trigger("tuiParentAnimation", [
  transition(":leave", [query(":scope > *", [animateChild()], { optional: true })])
]);
var tuiParentStop = trigger("tuiParentStop", [transition(":enter", [])]);
var tuiHost = trigger("tuiHost", [
  transition(":enter", [
    style({ overflow: "clip" }),
    query(":scope > *", [animateChild()], { optional: true })
  ]),
  transition(":leave", [query(":scope > *", [animateChild()], { optional: true })])
]);
var tuiHeightCollapse = trigger("tuiHeightCollapse", [
  transition(":enter", [style({ height: 0 }), animate(TRANSITION, style({ height: "*" }))], DURATION),
  transition(":leave", [style({ height: "*" }), animate(TRANSITION, style({ height: 0 }))], DURATION)
]);
var tuiHeightCollapseList = trigger("tuiHeightCollapseList", [
  transition("* => *", [
    query(":enter", [
      style({ height: 0 }),
      stagger(STAGGER, [animate(TRANSITION, style({ height: "*" }))])
    ], {
      optional: true
    }),
    query(":leave", [
      style({ height: "*" }),
      stagger(STAGGER, [animate(TRANSITION, style({ height: 0 }))])
    ], {
      optional: true
    })
  ], DURATION)
]);
var tuiWidthCollapse = trigger("tuiWidthCollapse", [
  transition(":enter", [style({ width: 0 }), animate(TRANSITION, style({ width: "*" }))], DURATION),
  transition(":leave", [style({ width: "*" }), animate(TRANSITION, style({ width: 0 }))], DURATION)
]);
var tuiWidthCollapseList = trigger("tuiWidthCollapseList", [
  transition("* => *", [
    query(":enter", [
      style({ width: 0 }),
      stagger(STAGGER, [animate(TRANSITION, style({ width: "*" }))])
    ], {
      optional: true
    }),
    query(":leave", [
      style({ width: "*" }),
      stagger(STAGGER, [animate(TRANSITION, style({ width: 0 }))])
    ], {
      optional: true
    })
  ], DURATION)
]);
var tuiCrossFade = trigger("tuiCrossFade", [
  transition(":enter", [style({ opacity: 0 }), animate(TRANSITION, style({ opacity: 1 }))], { params: { duration: 300 } }),
  transition(":leave", [
    style({
      opacity: 1,
      position: "absolute",
      left: "{{left}}",
      right: "{{right}}",
      bottom: "{{bottom}}",
      top: "{{top}}"
    }),
    animate(TRANSITION, style({ opacity: 0 }))
  ], {
    params: {
      duration: 300,
      left: "auto",
      right: "auto",
      bottom: "auto",
      top: "auto"
    }
  })
]);
var tuiFadeIn = trigger("tuiFadeIn", [
  transition(":enter", [style({ opacity: 0 }), animate(TRANSITION, style({ opacity: 1 }))], DURATION),
  transition(":leave", [style({ opacity: 1 }), animate(TRANSITION, style({ opacity: 0 }))], DURATION)
]);
var tuiFadeInList = trigger("tuiFadeInList", [
  transition("* => *", [
    query(":enter", [
      style({ opacity: 0 }),
      stagger(STAGGER, [animate(TRANSITION, style({ opacity: 1 }))])
    ], {
      optional: true
    }),
    query(":leave", [
      style({ opacity: 1 }),
      stagger(STAGGER, [animate(TRANSITION, style({ opacity: 0 }))])
    ], {
      optional: true
    })
  ], DURATION)
]);
var tuiFadeInTop = trigger("tuiFadeInTop", [
  transition(":enter", [
    style({ transform: "translateY(-{{start}}px)", opacity: 0 }),
    animate(TRANSITION, style({ transform: "translateY({{end}})", opacity: 1 }))
  ], { params: { end: 0, start: 10, duration: 300 } }),
  transition(":leave", [
    style({ transform: "translateY({{end}})", opacity: 1 }),
    animate(TRANSITION, style({ transform: "translateY(-{{start}}px)", opacity: 0 }))
  ], { params: { end: 0, start: 10, duration: 300 } })
]);
var tuiFadeInBottom = trigger("tuiFadeInBottom", [
  transition(":enter", [
    style({ transform: "translateY({{start}}px)", opacity: 0 }),
    animate(TRANSITION, style({ transform: "translateY({{end}})", opacity: 1 }))
  ], { params: { end: 0, start: 10, duration: 300 } }),
  transition(":leave", [
    style({ transform: "translateY({{end}})", opacity: 1 }),
    animate(TRANSITION, style({ transform: "translateY({{start}}px)", opacity: 0 }))
  ], { params: { end: 0, start: 10, duration: 300 } })
]);
var tuiDropdownAnimation = trigger("tuiDropdownAnimation", [
  transition(":enter", [
    style({ transform: "translateY(-{{start}}px)", opacity: 0 }),
    animate(TRANSITION, style({ transform: "translateY({{end}})", opacity: 1 }))
  ], { params: { end: 0, start: 10, duration: 300 } }),
  transition(":leave", [
    style({ transform: "translateY({{end}})", opacity: 1 }),
    animate(TRANSITION, style({ transform: "translateY(-{{start}}px)", opacity: 0 }))
  ], { params: { end: 0, start: 10, duration: 300 } })
]);
var tuiScaleIn = trigger("tuiScaleIn", [
  transition(":enter", [
    style({ transform: "scale({{start}})" }),
    animate("{{duration}}ms {{easing}}", style({ transform: "scale({{end}})" }))
  ], { params: { end: 1, start: 0, duration: 300, easing: "ease-in-out" } }),
  transition(":leave", [
    style({ transform: "scale({{end}})" }),
    animate(TRANSITION, style({ transform: "scale({{start}})" }))
  ], { params: { end: 1, start: 0, duration: 300 } })
]);
var tuiPop = trigger("tuiPop", [
  transition(":enter", [
    style({ transform: "scale({{start}})" }),
    animate(TRANSITION, style({ transform: "scale({{middle}})" })),
    animate(TRANSITION, style({ transform: "scale({{end}})" }))
  ], { params: { end: 1, middle: 1.1, start: 0, duration: 300 } }),
  transition(":leave", [
    style({ transform: "scale({{end}})" }),
    animate(TRANSITION, style({ transform: "scale({{middle}})" })),
    animate(TRANSITION, style({ transform: "scale({{start}})" }))
  ], { params: { end: 1, middle: 1.1, start: 0, duration: 300 } })
]);
var tuiScaleInList = trigger("tuiScaleInList", [
  transition("* => *", [
    query(":enter", [
      style({ transform: "scale({{start}})" }),
      stagger(STAGGER, [
        animate(TRANSITION, style({ transform: "scale({{end}})" }))
      ])
    ], { optional: true }),
    query(":leave", [
      style({ transform: "scale({{end}})" }),
      stagger(STAGGER, [
        animate(TRANSITION, style({ transform: "scale({{start}})" }))
      ])
    ], { optional: true })
  ], { params: { end: 1, start: 0, duration: 300 } })
]);
var tuiSlideIn = trigger("tuiSlideIn", [
  transition("* => left", [
    style({ transform: "translateX(-{{start}})" }),
    animate(TRANSITION, style({ transform: "translateX({{end}})" }))
  ], { params: { end: 0, start: "100%", duration: 300 } }),
  transition("left => *", [
    style({ transform: "translateX({{end}})" }),
    animate(TRANSITION, style({ transform: "translateX(-{{start}})" }))
  ], { params: { end: 0, start: "100%", duration: 300 } }),
  transition("* => right", [
    style({ transform: "translateX({{start}})" }),
    animate(TRANSITION, style({ transform: "translateX({{end}})" }))
  ], { params: { end: 0, start: "100%", duration: 300 } }),
  transition("right => *", [
    style({ transform: "translateX({{end}})" }),
    animate(TRANSITION, style({ transform: "translateX({{start}})" }))
  ], { params: { end: 0, start: "100%", duration: 300 } })
]);
var tuiSlideInLeft = trigger("tuiSlideInLeft", [
  transition(":enter", [
    style({ transform: "translateX(-{{start}})" }),
    animate(TRANSITION, style({ transform: "translateX({{end}})" }))
  ], { params: { end: 0, start: "100%", duration: 300 } }),
  transition(":leave", [
    style({ transform: "translateX({{end}})" }),
    animate(TRANSITION, style({ transform: "translateX(-{{start}})" }))
  ], { params: { end: 0, start: "100%", duration: 300 } })
]);
var tuiSlideInLeftList = trigger("tuiSlideInLeftList", [
  transition("* => *", [
    query(":enter", [
      style({ transform: "translateX(-{{start}})" }),
      stagger(STAGGER, [
        animate(TRANSITION, style({ transform: "translateX({{end}})" }))
      ])
    ], { optional: true }),
    query(":leave", [
      style({ transform: "translateX({{end}})" }),
      stagger(STAGGER, [
        animate(TRANSITION, style({ transform: "translateX(-{{start}})" }))
      ])
    ], { optional: true })
  ], { params: { end: 0, start: "100%", duration: 300 } })
]);
var tuiSlideInRight = trigger("tuiSlideInRight", [
  transition(":enter", [
    style({ transform: "translateX({{start}})" }),
    animate(TRANSITION, style({ transform: "translateX({{end}})" }))
  ], { params: { end: 0, start: "100%", duration: 300 } }),
  transition(":leave", [
    style({ transform: "translateX({{end}})" }),
    animate(TRANSITION, style({ transform: "translateX({{start}})" }))
  ], { params: { end: 0, start: "100%", duration: 300 } })
]);
var tuiSlideInRightList = trigger("tuiSlideInRightList", [
  transition("* => *", [
    query(":enter", [
      style({ transform: "translateX({{start}})" }),
      stagger(STAGGER, [
        animate(TRANSITION, style({ transform: "translateX({{end}})" }))
      ])
    ], { optional: true }),
    query(":leave", [
      style({ transform: "translateX({{end}})" }),
      stagger(STAGGER, [
        animate(TRANSITION, style({ transform: "translateX({{start}})" }))
      ])
    ], { optional: true })
  ], { params: { end: 0, start: "100%", duration: 300 } })
]);
var tuiSlideInTop = trigger("tuiSlideInTop", [
  transition(":enter", [
    style({ transform: "translate3d(0,{{start}},0)", pointerEvents: "none" }),
    animate(TRANSITION, style({ transform: "translate3d(0,{{end}},0)" }))
  ], { params: { end: 0, start: "100%", duration: 300 } }),
  transition(":leave", [
    style({ transform: "translate3d(0,{{end}},0)" }),
    animate(TRANSITION, style({ transform: "translate3d(0,{{start}},0)" }))
  ], { params: { end: 0, start: "100%", duration: 300 } })
]);
var tuiSlideInTopList = trigger("tuiSlideInTopList", [
  transition("* => *", [
    query(":enter", [
      style({ transform: "translateY({{start}})" }),
      stagger(STAGGER, [
        animate(TRANSITION, style({ transform: "translateY({{end}})" }))
      ])
    ], { optional: true }),
    query(":leave", [
      style({ transform: "translateY({{end}})" }),
      stagger(STAGGER, [
        animate(TRANSITION, style({ transform: "translateY({{start}})" }))
      ])
    ], { optional: true })
  ], { params: { end: 0, start: "100%", duration: 300 } })
]);
var tuiSlideInBottom = trigger("tuiSlideInBottom", [
  transition(":enter", [
    style({ transform: "translateY(-{{start}})" }),
    animate(TRANSITION, style({ transform: "translateY({{end}})" }))
  ], { params: { end: 0, start: "100%", duration: 300 } }),
  transition(":leave", [
    style({ transform: "translateY({{end}})" }),
    animate(TRANSITION, style({ transform: "translateY(-{{start}})" }))
  ], { params: { end: 0, start: "100%", duration: 300 } })
]);
var tuiSlideInBottomList = trigger("tuiSlideInBottomList", [
  transition("* => *", [
    query(":enter", [
      style({ transform: "translateY(-{{start}})" }),
      stagger(STAGGER, [
        animate(TRANSITION, style({ transform: "translateY({{end}})" }))
      ])
    ], { optional: true }),
    query(":leave", [
      style({ transform: "translateY({{end}})" }),
      stagger(STAGGER, [
        animate(TRANSITION, style({ transform: "translateY(-{{start}})" }))
      ])
    ], { optional: true })
  ], { params: { end: 0, start: "100%", duration: 300 } })
]);

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-notification.mjs
var ICONS = {
  info: "@tui.info",
  positive: "@tui.circle-check",
  negative: "@tui.circle-x",
  warning: "@tui.circle-alert",
  neutral: "@tui.info",
  /* TODO @deprecated remove in v5 */
  success: "@tui.circle-check",
  /* TODO @deprecated remove in v5 */
  error: "@tui.circle-x"
};
var TUI_NOTIFICATION_DEFAULT_OPTIONS = {
  appearance: "info",
  icon: (appearance) => ICONS[appearance] ?? "",
  size: "l"
};
var [TUI_NOTIFICATION_OPTIONS, tuiNotificationOptionsProvider] = tuiCreateOptions(TUI_NOTIFICATION_DEFAULT_OPTIONS);
var TuiNotificationStyles = class _TuiNotificationStyles {
  static {
    this.ɵfac = function TuiNotificationStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiNotificationStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiNotificationStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-notification"],
      decls: 0,
      vars: 0,
      template: function TuiNotificationStyles_Template(rf, ctx) {
      },
      styles: ['tui-notification,[tuiNotification]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;position:relative;display:block;max-block-size:100%;color:var(--tui-text-primary);padding:1rem;font:var(--tui-font-text-m);line-height:1.5rem;border-radius:var(--tui-radius-l);box-sizing:border-box;text-align:start;text-decoration:none;border-inline-start:var(--t-start) solid transparent;border-inline-end:var(--t-end) solid transparent;--t-start: 0;--t-end: 0}tui-notification[style*="--t-icon-start:"],[tuiNotification][style*="--t-icon-start:"]{--t-start: 2rem}tui-notification[style*="--t-icon-end:"],[tuiNotification][style*="--t-icon-end:"]{--t-end: 1.5rem}tui-notification:before,[tuiNotification]:before{position:absolute;left:-1rem;inset-inline-start:-1rem}tui-notification:after,[tuiNotification]:after{position:absolute;top:50%;transform:translateY(-50%);right:-.5rem;font-size:1rem;margin:0;margin-inline-end:-.25rem;margin-inline-start:auto;color:var(--tui-text-tertiary)!important}@supports (inset-inline-end: 0){tui-notification:after,[tuiNotification]:after{right:unset;inset-inline-end:-.5rem}}tui-notification[data-size=s],[tuiNotification][data-size=s]{padding:.375rem .625rem;font:var(--tui-font-text-s);line-height:1.25rem;border-radius:var(--tui-radius-m)}tui-notification[data-size=s][style*="--t-icon-start:"],[tuiNotification][data-size=s][style*="--t-icon-start:"]{--t-start: 1.5rem}tui-notification[data-size=s]:before,[tuiNotification][data-size=s]:before{top:.5rem;left:-.875rem;inset-inline-start:-.875rem;font-size:1rem}tui-notification[data-size=s]:after,[tuiNotification][data-size=s]:after{right:-.875rem}@supports (inset-inline-end: 0){tui-notification[data-size=s]:after,[tuiNotification][data-size=s]:after{right:unset;inset-inline-end:-.875rem}}tui-notification[data-size=s] tui-icon,[tuiNotification][data-size=s] tui-icon{font-size:1rem}tui-notification[data-size=s] [tuiTitle],[tuiNotification][data-size=s] [tuiTitle]{font:var(--tui-font-text-s);font-weight:700}tui-notification[data-size=s] [tuiSubtitle],[tuiNotification][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-s)}tui-notification[data-size=s] [tuiSubtitle]+*,[tuiNotification][data-size=s] [tuiSubtitle]+*{gap:1rem;margin:.375rem 0 .25rem}tui-notification[data-size=s]>[tuiIconButton],[tuiNotification][data-size=s]>[tuiIconButton]{top:0;right:0}@supports (inset-inline-end: 0){tui-notification[data-size=s]>[tuiIconButton],[tuiNotification][data-size=s]>[tuiIconButton]{right:unset;inset-inline-end:0}}tui-notification[data-size=m],[tuiNotification][data-size=m]{padding:.75rem;font:var(--tui-font-text-s);line-height:1.25rem;border-radius:var(--tui-radius-m)}tui-notification[data-size=m][style*="--t-icon-start:"],[tuiNotification][data-size=m][style*="--t-icon-start:"]{--t-start: 1.625rem}tui-notification[data-size=m]:before,[tuiNotification][data-size=m]:before{left:-.875rem;inset-inline-start:-.875rem;font-size:1.25rem}tui-notification[data-size=m]:after,[tuiNotification][data-size=m]:after{right:-.75rem}@supports (inset-inline-end: 0){tui-notification[data-size=m]:after,[tuiNotification][data-size=m]:after{right:unset;inset-inline-end:-.75rem}}tui-notification[data-size=m] tui-icon,[tuiNotification][data-size=m] tui-icon{font-size:1.25rem}tui-notification[data-size=m] [tuiTitle],[tuiNotification][data-size=m] [tuiTitle]{font:var(--tui-font-text-ui-m);font-weight:700}tui-notification[data-size=m] [tuiSubtitle],[tuiNotification][data-size=m] [tuiSubtitle]{font:var(--tui-font-text-s)}tui-notification[data-size=m] [tuiSubtitle]+*,[tuiNotification][data-size=m] [tuiSubtitle]+*{gap:1rem;margin:.625rem 0 .25rem}tui-notification[data-size=m]>[tuiIconButton],[tuiNotification][data-size=m]>[tuiIconButton]{top:.375rem;right:.5rem}@supports (inset-inline-end: 0){tui-notification[data-size=m]>[tuiIconButton],[tuiNotification][data-size=m]>[tuiIconButton]{right:unset;inset-inline-end:.5rem}}tui-notification [tuiTitle],[tuiNotification] [tuiTitle]{gap:.125rem;font:var(--tui-font-text-ui-l);font-weight:700}tui-notification [tuiSubtitle],[tuiNotification] [tuiSubtitle]{font:var(--tui-font-text-m)}tui-notification [tuiSubtitle]+*,[tuiNotification] [tuiSubtitle]+*{display:flex;align-items:center;gap:1.25rem;margin-block-start:.625rem;font:var(--tui-font-text-s)}tui-notification>[tuiIconButton],[tuiNotification]>[tuiIconButton]{position:absolute;top:.75rem;right:.75rem;box-shadow:none!important;background:transparent!important}@supports (inset-inline-end: 0){tui-notification>[tuiIconButton],[tuiNotification]>[tuiIconButton]{right:unset;inset-inline-end:.75rem}}[tuiNotification]{cursor:pointer}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNotificationStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-notification"
      },
      styles: ['tui-notification,[tuiNotification]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;position:relative;display:block;max-block-size:100%;color:var(--tui-text-primary);padding:1rem;font:var(--tui-font-text-m);line-height:1.5rem;border-radius:var(--tui-radius-l);box-sizing:border-box;text-align:start;text-decoration:none;border-inline-start:var(--t-start) solid transparent;border-inline-end:var(--t-end) solid transparent;--t-start: 0;--t-end: 0}tui-notification[style*="--t-icon-start:"],[tuiNotification][style*="--t-icon-start:"]{--t-start: 2rem}tui-notification[style*="--t-icon-end:"],[tuiNotification][style*="--t-icon-end:"]{--t-end: 1.5rem}tui-notification:before,[tuiNotification]:before{position:absolute;left:-1rem;inset-inline-start:-1rem}tui-notification:after,[tuiNotification]:after{position:absolute;top:50%;transform:translateY(-50%);right:-.5rem;font-size:1rem;margin:0;margin-inline-end:-.25rem;margin-inline-start:auto;color:var(--tui-text-tertiary)!important}@supports (inset-inline-end: 0){tui-notification:after,[tuiNotification]:after{right:unset;inset-inline-end:-.5rem}}tui-notification[data-size=s],[tuiNotification][data-size=s]{padding:.375rem .625rem;font:var(--tui-font-text-s);line-height:1.25rem;border-radius:var(--tui-radius-m)}tui-notification[data-size=s][style*="--t-icon-start:"],[tuiNotification][data-size=s][style*="--t-icon-start:"]{--t-start: 1.5rem}tui-notification[data-size=s]:before,[tuiNotification][data-size=s]:before{top:.5rem;left:-.875rem;inset-inline-start:-.875rem;font-size:1rem}tui-notification[data-size=s]:after,[tuiNotification][data-size=s]:after{right:-.875rem}@supports (inset-inline-end: 0){tui-notification[data-size=s]:after,[tuiNotification][data-size=s]:after{right:unset;inset-inline-end:-.875rem}}tui-notification[data-size=s] tui-icon,[tuiNotification][data-size=s] tui-icon{font-size:1rem}tui-notification[data-size=s] [tuiTitle],[tuiNotification][data-size=s] [tuiTitle]{font:var(--tui-font-text-s);font-weight:700}tui-notification[data-size=s] [tuiSubtitle],[tuiNotification][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-s)}tui-notification[data-size=s] [tuiSubtitle]+*,[tuiNotification][data-size=s] [tuiSubtitle]+*{gap:1rem;margin:.375rem 0 .25rem}tui-notification[data-size=s]>[tuiIconButton],[tuiNotification][data-size=s]>[tuiIconButton]{top:0;right:0}@supports (inset-inline-end: 0){tui-notification[data-size=s]>[tuiIconButton],[tuiNotification][data-size=s]>[tuiIconButton]{right:unset;inset-inline-end:0}}tui-notification[data-size=m],[tuiNotification][data-size=m]{padding:.75rem;font:var(--tui-font-text-s);line-height:1.25rem;border-radius:var(--tui-radius-m)}tui-notification[data-size=m][style*="--t-icon-start:"],[tuiNotification][data-size=m][style*="--t-icon-start:"]{--t-start: 1.625rem}tui-notification[data-size=m]:before,[tuiNotification][data-size=m]:before{left:-.875rem;inset-inline-start:-.875rem;font-size:1.25rem}tui-notification[data-size=m]:after,[tuiNotification][data-size=m]:after{right:-.75rem}@supports (inset-inline-end: 0){tui-notification[data-size=m]:after,[tuiNotification][data-size=m]:after{right:unset;inset-inline-end:-.75rem}}tui-notification[data-size=m] tui-icon,[tuiNotification][data-size=m] tui-icon{font-size:1.25rem}tui-notification[data-size=m] [tuiTitle],[tuiNotification][data-size=m] [tuiTitle]{font:var(--tui-font-text-ui-m);font-weight:700}tui-notification[data-size=m] [tuiSubtitle],[tuiNotification][data-size=m] [tuiSubtitle]{font:var(--tui-font-text-s)}tui-notification[data-size=m] [tuiSubtitle]+*,[tuiNotification][data-size=m] [tuiSubtitle]+*{gap:1rem;margin:.625rem 0 .25rem}tui-notification[data-size=m]>[tuiIconButton],[tuiNotification][data-size=m]>[tuiIconButton]{top:.375rem;right:.5rem}@supports (inset-inline-end: 0){tui-notification[data-size=m]>[tuiIconButton],[tuiNotification][data-size=m]>[tuiIconButton]{right:unset;inset-inline-end:.5rem}}tui-notification [tuiTitle],[tuiNotification] [tuiTitle]{gap:.125rem;font:var(--tui-font-text-ui-l);font-weight:700}tui-notification [tuiSubtitle],[tuiNotification] [tuiSubtitle]{font:var(--tui-font-text-m)}tui-notification [tuiSubtitle]+*,[tuiNotification] [tuiSubtitle]+*{display:flex;align-items:center;gap:1.25rem;margin-block-start:.625rem;font:var(--tui-font-text-s)}tui-notification>[tuiIconButton],[tuiNotification]>[tuiIconButton]{position:absolute;top:.75rem;right:.75rem;box-shadow:none!important;background:transparent!important}@supports (inset-inline-end: 0){tui-notification>[tuiIconButton],[tuiNotification]>[tuiIconButton]{right:unset;inset-inline-end:.75rem}}[tuiNotification]{cursor:pointer}\n']
    }]
  }], null, null);
})();
var TuiNotification = class _TuiNotification {
  constructor() {
    this.options = inject(TUI_NOTIFICATION_OPTIONS);
    this.nothing = tuiWithStyles(TuiNotificationStyles);
    this.icons = inject(TuiIcons);
    this.appearance = this.options.appearance;
    this.icon = this.options.icon;
    this.size = this.options.size;
  }
  ngOnInit() {
    this.refresh();
  }
  ngOnChanges() {
    this.refresh();
  }
  refresh() {
    this.icons.iconStart.set(tuiIsString(this.icon) ? this.icon : this.icon(this.appearance));
  }
  static {
    this.ɵfac = function TuiNotification_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiNotification)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiNotification,
      selectors: [["tui-notification"], ["a", "tuiNotification", ""], ["button", "tuiNotification", ""]],
      hostVars: 1,
      hostBindings: function TuiNotification_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        appearance: "appearance",
        icon: "icon",
        size: "size"
      },
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_NOTIFICATION_OPTIONS), tuiLinkOptionsProvider({
        appearance: "",
        pseudo: true
      }), tuiButtonOptionsProvider({
        appearance: "outline-grayscale",
        size: "s"
      })]), ɵɵHostDirectivesFeature([TuiWithIcons, TuiWithAppearance]), ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNotification, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-notification,a[tuiNotification],button[tuiNotification]",
      providers: [tuiAppearanceOptionsProvider(TUI_NOTIFICATION_OPTIONS), tuiLinkOptionsProvider({
        appearance: "",
        pseudo: true
      }), tuiButtonOptionsProvider({
        appearance: "outline-grayscale",
        size: "s"
      })],
      hostDirectives: [TuiWithIcons, TuiWithAppearance],
      host: {
        "[attr.data-size]": "size"
      }
    }]
  }], null, {
    appearance: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-popover.mjs
var TuiPopoverDirective = class _TuiPopoverDirective extends PolymorpheusTemplate {
  constructor() {
    super(...arguments);
    this.service = inject(TuiPopoverService);
    this.open$ = new Subject();
    this.options = {};
    this.open = false;
    this.openChange = this.open$.pipe(distinctUntilChanged(), tuiIfMap(() => this.service.open(this, this.options).pipe(ignoreElements(), endWith(false))), share());
  }
  ngOnChanges() {
    this.open$.next(this.open);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiPopoverDirective_BaseFactory;
      return function TuiPopoverDirective_Factory(__ngFactoryType__) {
        return (ɵTuiPopoverDirective_BaseFactory || (ɵTuiPopoverDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiPopoverDirective)))(__ngFactoryType__ || _TuiPopoverDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiPopoverDirective,
      standalone: false,
      features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPopoverDirective, [{
    type: Directive
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-pipes-mapper.mjs
var TuiMapperPipe = class _TuiMapperPipe {
  /**
   * Maps object to an arbitrary result through a mapper function
   *
   * @param value an item to transform
   * @param mapper a mapping function
   * @param args arbitrary number of additional arguments
   */
  transform(value, mapper, ...args) {
    return mapper(value, ...args);
  }
  static {
    this.ɵfac = function TuiMapperPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiMapperPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiMapper",
      type: _TuiMapperPipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMapperPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiMapper"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-alert.mjs
function TuiAlertComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r1, " ");
  }
}
function TuiAlertComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 7);
  }
  if (rf & 2) {
    const text_r2 = ctx.polymorpheusOutlet;
    ɵɵproperty("innerHTML", text_r2, ɵɵsanitizeHtml);
  }
}
function TuiAlertComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 8);
    ɵɵlistener("click", function TuiAlertComponent_button_6_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.item.$implicit.complete());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("iconStart", ctx_r3.icons.close);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r3.close(), " ");
  }
}
function TuiAlerts_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 3);
    ɵɵpipe(1, "tuiMapper");
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngComponentOutlet", item_r1.component.component)("ngComponentOutletInjector", ɵɵpipeBind2(1, 2, item_r1, ctx_r1.mapper));
  }
}
function TuiAlerts_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, TuiAlerts_div_0_ng_container_1_Template, 2, 5, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const group_r3 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("ngForOf", group_r3);
  }
}
var TUI_ALERT_DEFAULT_OPTIONS = {
  autoClose: 3e3,
  label: "",
  closeable: true,
  data: void 0
};
var TUI_ALERT_OPTIONS = new InjectionToken(ngDevMode ? "TUI_ALERT_OPTIONS" : "", {
  factory: () => __spreadValues(__spreadValues({}, TUI_ALERT_DEFAULT_OPTIONS), inject(TUI_NOTIFICATION_OPTIONS))
});
var TUI_ALERT_POSITION = new InjectionToken(ngDevMode ? "TUI_ALERT_POSITION" : "", {
  factory: () => inject(TUI_IS_MOBILE) ? "1rem 1rem 0 auto" : "2rem 3rem 0 auto"
});
var TUI_ALERTS = new InjectionToken(ngDevMode ? "TUI_ALERTS" : "", {
  factory: () => new BehaviorSubject([])
});
var TUI_ALERTS_GROUPED = new InjectionToken(ngDevMode ? "TUI_ALERTS_GROUPED" : "");
function tuiAlertOptionsProvider(options) {
  return {
    provide: TUI_ALERT_OPTIONS,
    useFactory: () => __spreadValues(__spreadValues(__spreadValues({}, TUI_ALERT_DEFAULT_OPTIONS), inject(TUI_ALERT_OPTIONS, {
      optional: true,
      skipSelf: true
    }) || inject(TUI_NOTIFICATION_OPTIONS)), options)
  };
}
var TuiAlertComponent = class _TuiAlertComponent {
  constructor() {
    this.el = tuiInjectElement();
    this.icons = inject(TUI_COMMON_ICONS);
    this.close = toSignal(inject(TUI_CLOSE_WORD));
    this.position = inject(TUI_ALERT_POSITION);
    this.item = injectContext();
    this.sub = of(typeof this.item.autoClose === "function" ? this.item.autoClose(this.item.appearance) : this.item.autoClose).pipe(switchMap((autoClose) => autoClose ? timer(autoClose) : EMPTY), takeUntil(fromEvent(this.el, "mouseenter")), repeat({
      delay: () => fromEvent(this.el, "mouseleave")
    }), takeUntilDestroyed()).subscribe(() => this.item.$implicit.complete());
  }
  get from() {
    return this.position.endsWith("auto") ? "translateX(100%)" : "translateX(-100%)";
  }
  static {
    this.ɵfac = function TuiAlertComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAlertComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiAlertComponent,
      selectors: [["tui-alert"]],
      hostAttrs: ["role", "alert"],
      hostVars: 4,
      hostBindings: function TuiAlertComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("margin", ctx.position)("--tui-from", ctx.from);
        }
      },
      features: [ɵɵHostDirectivesFeature([TuiAnimated])],
      decls: 7,
      vars: 9,
      consts: [[1, "t-wrapper"], ["size", "m", 3, "appearance", "icon"], ["tuiTitle", ""], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["tuiSubtitle", ""], [3, "innerHTML", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["tuiIconButton", "", "type", "button", 3, "iconStart", "click", 4, "ngIf"], [3, "innerHTML"], ["tuiIconButton", "", "type", "button", 3, "click", "iconStart"]],
      template: function TuiAlertComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0)(1, "tui-notification", 1)(2, "span", 2);
          ɵɵtemplate(3, TuiAlertComponent_ng_container_3_Template, 2, 1, "ng-container", 3);
          ɵɵelementStart(4, "span", 4);
          ɵɵtemplate(5, TuiAlertComponent_span_5_Template, 1, 1, "span", 5);
          ɵɵelementEnd()();
          ɵɵtemplate(6, TuiAlertComponent_button_6_Template, 2, 2, "button", 6);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵclassProp("t-closeable", ctx.item.closeable);
          ɵɵproperty("appearance", ctx.item.appearance)("icon", ctx.item.icon);
          ɵɵadvance(2);
          ɵɵproperty("polymorpheusOutlet", ctx.item.label)("polymorpheusOutletContext", ctx.item);
          ɵɵadvance(2);
          ɵɵproperty("polymorpheusOutlet", ctx.item.content)("polymorpheusOutletContext", ctx.item);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.item.closeable);
        }
      },
      dependencies: [NgIf, PolymorpheusOutlet, TuiButton, TuiNotification, TuiTitle],
      styles: ["[_nghost-%COMP%]{display:grid;inline-size:18rem;flex-shrink:0;word-break:break-word}.tui-enter[_nghost-%COMP%], .tui-leave[_nghost-%COMP%]{animation-name:tuiFade,tuiSlide,tuiCollapse}[_nghost-%COMP%]:not(:first-child){margin-block-start:0!important}[_nghost-%COMP%]:not(:last-child){margin-block-end:0!important}.t-wrapper[_ngcontent-%COMP%]{transition-property:margin;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;grid-row:1 / span 2;overflow:hidden;margin-block-end:.75rem;background:var(--tui-background-base);border-radius:var(--tui-radius-m);box-shadow:var(--tui-shadow-medium)}.tui-leave[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{margin:0}.t-closeable[_ngcontent-%COMP%]{padding-inline-end:2.5rem}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAlertComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-alert",
      imports: [NgIf, PolymorpheusOutlet, TuiButton, TuiNotification, TuiTitle],
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [TuiAnimated],
      host: {
        role: "alert",
        "[style.margin]": "position",
        "[style.--tui-from]": "from"
      },
      template: '<div class="t-wrapper">\n    <tui-notification\n        size="m"\n        [appearance]="item.appearance"\n        [class.t-closeable]="item.closeable"\n        [icon]="item.icon"\n    >\n        <span tuiTitle>\n            <ng-container *polymorpheusOutlet="item.label as text; context: item">\n                {{ text }}\n            </ng-container>\n            <span tuiSubtitle>\n                <span\n                    *polymorpheusOutlet="item.content as text; context: item"\n                    [innerHTML]="text"\n                ></span>\n            </span>\n        </span>\n        <button\n            *ngIf="item.closeable"\n            tuiIconButton\n            type="button"\n            [iconStart]="icons.close"\n            (click)="item.$implicit.complete()"\n        >\n            {{ close() }}\n        </button>\n    </tui-notification>\n</div>\n',
      styles: [":host{display:grid;inline-size:18rem;flex-shrink:0;word-break:break-word}:host.tui-enter,:host.tui-leave{animation-name:tuiFade,tuiSlide,tuiCollapse}:host:not(:first-child){margin-block-start:0!important}:host:not(:last-child){margin-block-end:0!important}.t-wrapper{transition-property:margin;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;grid-row:1 / span 2;overflow:hidden;margin-block-end:.75rem;background:var(--tui-background-base);border-radius:var(--tui-radius-m);box-shadow:var(--tui-shadow-medium)}:host.tui-leave .t-wrapper{margin:0}.t-closeable{padding-inline-end:2.5rem}\n"]
    }]
  }], null, null);
})();
var TuiAlertService = class _TuiAlertService extends TuiPopoverService {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiAlertService_BaseFactory;
      return function TuiAlertService_Factory(__ngFactoryType__) {
        return (ɵTuiAlertService_BaseFactory || (ɵTuiAlertService_BaseFactory = ɵɵgetInheritedFactory(_TuiAlertService)))(__ngFactoryType__ || _TuiAlertService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiAlertService,
      factory: () => (() => new _TuiAlertService(TUI_ALERTS, TuiAlertComponent, inject(TUI_ALERT_OPTIONS)))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAlertService, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => new TuiAlertService(TUI_ALERTS, TuiAlertComponent, inject(TUI_ALERT_OPTIONS))
    }]
  }], null, null);
})();
var TuiAlert = class _TuiAlert extends TuiPopoverDirective {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiAlert_BaseFactory;
      return function TuiAlert_Factory(__ngFactoryType__) {
        return (ɵTuiAlert_BaseFactory || (ɵTuiAlert_BaseFactory = ɵɵgetInheritedFactory(_TuiAlert)))(__ngFactoryType__ || _TuiAlert);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiAlert,
      selectors: [["ng-template", "tuiAlert", ""]],
      inputs: {
        options: [0, "tuiAlertOptions", "options"],
        open: [0, "tuiAlert", "open"]
      },
      outputs: {
        openChange: "tuiAlertChange"
      },
      features: [ɵɵProvidersFeature([tuiAsPopover(TuiAlertService)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAlert, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiAlert]",
      inputs: ["options: tuiAlertOptions", "open: tuiAlert"],
      outputs: ["openChange: tuiAlertChange"],
      providers: [tuiAsPopover(TuiAlertService)]
    }]
  }], null, null);
})();
var TuiAlerts = class _TuiAlerts {
  constructor() {
    this.injector = inject(INJECTOR$1);
    this.alerts$ = inject(TUI_ALERTS_GROUPED);
    this.trackBy = identity;
    this.mapper = (useValue) => Injector.create({
      providers: [{
        provide: POLYMORPHEUS_CONTEXT,
        useValue
      }],
      parent: this.injector
    });
  }
  static {
    this.ɵfac = function TuiAlerts_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAlerts)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiAlerts,
      selectors: [["tui-alerts"]],
      features: [ɵɵProvidersFeature([{
        provide: TUI_ALERTS_GROUPED,
        useFactory: () => combineLatest([of(/* @__PURE__ */ new Map()), inject(TUI_ALERTS)]).pipe(map(([map2, alerts]) => {
          map2.forEach((_, key) => map2.set(key, []));
          alerts.forEach((alert) => {
            const key = alert.component.component;
            const value = map2.get(key) || [];
            map2.set(key, [...value, alert]);
          });
          return Array.from(map2.values());
        }))
      }])],
      decls: 2,
      vars: 4,
      consts: [["tuiAnimatedParent", "", "class", "t-wrapper", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tuiAnimatedParent", "", 1, "t-wrapper"], [3, "ngComponentOutlet", "ngComponentOutletInjector", 4, "ngFor", "ngForOf"], [3, "ngComponentOutlet", "ngComponentOutletInjector"]],
      template: function TuiAlerts_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiAlerts_div_0_Template, 2, 1, "div", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngForOf", ɵɵpipeBind1(1, 2, ctx.alerts$))("ngForTrackBy", ctx.trackBy);
        }
      },
      dependencies: [AsyncPipe, NgComponentOutlet, NgForOf, TuiAnimatedParent, TuiMapperPipe],
      styles: ["tui-alerts>.t-wrapper{position:fixed;top:0;left:0;inline-size:100%;display:flex;flex-direction:column;pointer-events:none;box-sizing:border-box;block-size:100%;padding:env(safe-area-inset-top) 0 env(safe-area-inset-bottom)}tui-alerts>.t-wrapper>*{pointer-events:auto}\n"],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAlerts, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-alerts",
      imports: [AsyncPipe, NgComponentOutlet, NgForOf, TuiAnimatedParent, TuiMapperPipe],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [{
        provide: TUI_ALERTS_GROUPED,
        useFactory: () => combineLatest([of(/* @__PURE__ */ new Map()), inject(TUI_ALERTS)]).pipe(map(([map2, alerts]) => {
          map2.forEach((_, key) => map2.set(key, []));
          alerts.forEach((alert) => {
            const key = alert.component.component;
            const value = map2.get(key) || [];
            map2.set(key, [...value, alert]);
          });
          return Array.from(map2.values());
        }))
      }],
      template: '<div\n    *ngFor="let group of alerts$ | async; trackBy: trackBy"\n    tuiAnimatedParent\n    class="t-wrapper"\n>\n    <ng-container\n        *ngFor="let item of group"\n        [ngComponentOutlet]="item.component.component"\n        [ngComponentOutletInjector]="item | tuiMapper: mapper"\n    />\n</div>\n',
      styles: ["tui-alerts>.t-wrapper{position:fixed;top:0;left:0;inline-size:100%;display:flex;flex-direction:column;pointer-events:none;box-sizing:border-box;block-size:100%;padding:env(safe-area-inset-top) 0 env(safe-area-inset-bottom)}tui-alerts>.t-wrapper>*{pointer-events:auto}\n"]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-let.mjs
var TuiLetContext = class {
  constructor(internalDirectiveInstance) {
    this.internalDirectiveInstance = internalDirectiveInstance;
  }
  get $implicit() {
    return this.internalDirectiveInstance.tuiLet;
  }
  get tuiLet() {
    return this.internalDirectiveInstance.tuiLet;
  }
};
var TuiLet = class _TuiLet {
  constructor() {
    inject(ViewContainerRef).createEmbeddedView(inject(TemplateRef), new TuiLetContext(this));
  }
  /**
   * Asserts the correct type of the context for the template that `TuiLet` will render.
   *
   * The presence of this method is a signal to the Ivy template type-check compiler that the
   * `TuiLet` structural directive renders its template with a specific context type.
   */
  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }
  static {
    this.ɵfac = function TuiLet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLet)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiLet,
      selectors: [["", "tuiLet", ""]],
      inputs: {
        tuiLet: "tuiLet"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLet, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiLet]"
    }]
  }], function() {
    return [];
  }, {
    tuiLet: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-repeat-times.mjs
var MAX_VALUE = 65536;
var TuiRepeatTimesContext = class {
  constructor($implicit) {
    this.$implicit = $implicit;
  }
};
var TuiRepeatTimes = class _TuiRepeatTimes {
  constructor() {
    this.viewContainer = inject(ViewContainerRef);
    this.templateRef = inject(TemplateRef);
  }
  set tuiRepeatTimesOf(count) {
    const safeCount = Math.floor(tuiClamp(count, 0, MAX_VALUE));
    const {
      length
    } = this.viewContainer;
    if (count < length) {
      this.removeContainers(length - count);
    } else {
      this.addContainers(safeCount);
    }
  }
  addContainers(count) {
    for (let index = this.viewContainer.length; index < count; index++) {
      this.viewContainer.createEmbeddedView(this.templateRef, new TuiRepeatTimesContext(index));
    }
  }
  removeContainers(amount) {
    for (let index = 0; index < amount; index++) {
      this.viewContainer.remove();
    }
  }
  static {
    this.ɵfac = function TuiRepeatTimes_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiRepeatTimes)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiRepeatTimes,
      selectors: [["", "tuiRepeatTimes", "", "tuiRepeatTimesOf", ""]],
      inputs: {
        tuiRepeatTimesOf: "tuiRepeatTimesOf"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRepeatTimes, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiRepeatTimes][tuiRepeatTimesOf]"
    }]
  }], null, {
    tuiRepeatTimesOf: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-pipes-auto-color.mjs
var TuiAutoColorPipe = class _TuiAutoColorPipe {
  transform(text) {
    return tuiStringHashToHsl(text);
  }
  static {
    this.ɵfac = function TuiAutoColorPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAutoColorPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiAutoColor",
      type: _TuiAutoColorPipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAutoColorPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiAutoColor"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-pipes-calendar-sheet.mjs
var getMonthStartDaysOffset = (month, firstDayOfWeek) => {
  const startMonthOffsetFromSunday = new Date(month.year, month.month, 1).getDay();
  return startMonthOffsetFromSunday >= firstDayOfWeek ? startMonthOffsetFromSunday - firstDayOfWeek : DAYS_IN_WEEK - (firstDayOfWeek - startMonthOffsetFromSunday);
};
var getDayFromMonthRowCol = ({
  month,
  rowIndex,
  colIndex,
  firstDayOfWeek
}) => {
  ngDevMode && console.assert(Number.isInteger(rowIndex));
  ngDevMode && console.assert(tuiInRange(rowIndex, 0, 6));
  ngDevMode && console.assert(Number.isInteger(colIndex));
  ngDevMode && console.assert(tuiInRange(colIndex, 0, DAYS_IN_WEEK));
  let day = rowIndex * DAYS_IN_WEEK + colIndex - getMonthStartDaysOffset(month, firstDayOfWeek) + 1;
  if (day > month.daysCount) {
    day -= month.daysCount;
    month = month.append({
      month: 1
    });
  }
  if (day <= 0) {
    month = month.append({
      month: -1
    });
    day = month.daysCount + day;
  }
  return new TuiDay(month.year, month.month, day);
};
var CALENDAR_ROWS_COUNT = 6;
var TuiCalendarSheetPipe = class _TuiCalendarSheetPipe {
  constructor() {
    this.firstDayOfWeek = inject(TUI_FIRST_DAY_OF_WEEK);
    this.currentMonth = null;
    this.currentSheet = [];
  }
  transform(month, showAdjacentDays = false) {
    if (this.currentMonth?.monthSame(month)) {
      return this.currentSheet;
    }
    const sheet = [];
    for (let rowIndex = 0; rowIndex < CALENDAR_ROWS_COUNT; rowIndex++) {
      const row = [];
      for (let colIndex = 0; colIndex < DAYS_IN_WEEK; colIndex++) {
        const day = getDayFromMonthRowCol({
          month,
          rowIndex,
          colIndex,
          firstDayOfWeek: this.firstDayOfWeek
        });
        const isPrevMonthDay = (day2, relativeToMonth = month) => day2.year < relativeToMonth.year || day2.month < relativeToMonth.month;
        const isNextMonthDay = (day2, relativeToMonth = month) => day2.year > relativeToMonth.year || day2.month > relativeToMonth.month;
        if (isPrevMonthDay(day) && !showAdjacentDays) {
          continue;
        }
        if (isNextMonthDay(day) && !showAdjacentDays) {
          break;
        }
        row.push(day);
      }
      sheet.push(row);
    }
    this.currentSheet = sheet.filter((row) => row.length);
    this.currentMonth = month;
    return this.currentSheet;
  }
  static {
    this.ɵfac = function TuiCalendarSheetPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCalendarSheetPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiCalendarSheet",
      type: _TuiCalendarSheetPipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendarSheetPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiCalendarSheet"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-pipes-fallback-src.mjs
var TuiFallbackSrcPipe = class _TuiFallbackSrcPipe {
  constructor() {
    this.el = tuiInjectElement();
  }
  transform(src, fallback) {
    return fromEvent(this.el, "error", {
      capture: true
    }).pipe(map(() => fallback), startWith(src || fallback));
  }
  static {
    this.ɵfac = function TuiFallbackSrcPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFallbackSrcPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiFallbackSrc",
      type: _TuiFallbackSrcPipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFallbackSrcPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiFallbackSrc"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-pipes-flag.mjs
var TuiFlagPipe = class _TuiFlagPipe {
  constructor() {
    this.staticPath = inject(TUI_ASSETS_PATH);
  }
  transform(countryIsoCode) {
    if (!countryIsoCode) {
      return null;
    }
    return `${this.staticPath}/flags/${countryIsoCode.toLowerCase()}.svg`;
  }
  static {
    this.ɵfac = function TuiFlagPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFlagPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiFlag",
      type: _TuiFlagPipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFlagPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiFlag"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-pipes-format-date.mjs
var TuiFormatDatePipe = class _TuiFormatDatePipe {
  constructor() {
    this.service = inject(TuiFormatDateService);
  }
  transform(timestampOrDate) {
    return this.service.format(timestampOrDate.valueOf());
  }
  static {
    this.ɵfac = function TuiFormatDatePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFormatDatePipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiFormatDate",
      type: _TuiFormatDatePipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFormatDatePipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiFormatDate"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-pipes-format-number.mjs
var TuiFormatNumberPipe = class _TuiFormatNumberPipe {
  constructor() {
    this.numberFormat = inject(TUI_NUMBER_FORMAT);
  }
  /**
   * Formats number adding thousand separators and correct decimal separator
   * padding decimal part with zeroes to given length
   * @param value number
   * @param settings See {@link TuiNumberFormatSettings}
   */
  transform(value, settings = {}) {
    return this.numberFormat.pipe(map((format) => tuiFormatNumber(value, __spreadValues(__spreadProps(__spreadValues({}, format), {
      precision: Number.isNaN(format.precision) ? Infinity : format.precision
    }), settings))));
  }
  static {
    this.ɵfac = function TuiFormatNumberPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFormatNumberPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiFormatNumber",
      type: _TuiFormatNumberPipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFormatNumberPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiFormatNumber"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-pipes-initials.mjs
var TuiInitialsPipe = class _TuiInitialsPipe {
  transform(text) {
    return text.toUpperCase().split(" ").map(([char]) => char).join("").slice(0, 2);
  }
  static {
    this.ɵfac = function TuiInitialsPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiInitialsPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiInitials",
      type: _TuiInitialsPipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInitialsPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiInitials"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-pipes-month.mjs
var TuiMonthPipe = class _TuiMonthPipe {
  constructor() {
    this.months$ = inject(TUI_MONTHS);
  }
  transform({
    month
  }) {
    return this.months$.pipe(map((months) => months[month] || months[0]));
  }
  static {
    this.ɵfac = function TuiMonthPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiMonthPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiMonth",
      type: _TuiMonthPipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMonthPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiMonth"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-pipes-order-week-days.mjs
function convertToSundayFirstWeekFormat(weekDaysNames) {
  const sundayIndex = weekDaysNames.length - 1;
  return [weekDaysNames[sundayIndex] || "", ...weekDaysNames.slice(0, sundayIndex)];
}
var TuiOrderWeekDaysPipe = class _TuiOrderWeekDaysPipe {
  constructor() {
    this.firstDayOfWeekIndex = inject(TUI_FIRST_DAY_OF_WEEK);
  }
  transform(mondayFirstWeekDays$) {
    return mondayFirstWeekDays$.pipe(map(convertToSundayFirstWeekFormat), map((weekDays) => [...weekDays.slice(this.firstDayOfWeekIndex), ...weekDays.slice(0, this.firstDayOfWeekIndex)]));
  }
  static {
    this.ɵfac = function TuiOrderWeekDaysPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiOrderWeekDaysPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiOrderWeekDays",
      type: _TuiOrderWeekDaysPipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOrderWeekDaysPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiOrderWeekDays"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-spin-button.mjs
var _c0 = ["*"];
function TuiSpinButton_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 1);
    ɵɵlistener("click", function TuiSpinButton_ng_container_0_Template_button_click_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onLeftClick());
    });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "span", 2);
    ɵɵprojection(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "button", 3);
    ɵɵlistener("click", function TuiSpinButton_ng_container_0_Template_button_click_5_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onRightClick());
    });
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const texts_r3 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassProp("t-button_hidden", ctx_r1.disabled || ctx_r1.leftDisabled);
    ɵɵproperty("iconStart", ctx_r1.icons.decrement)("tabIndex", ctx_r1.focusable ? 0 : -1);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", texts_r3[0], " ");
    ɵɵadvance(3);
    ɵɵclassProp("t-button_hidden", ctx_r1.disabled || ctx_r1.rightDisabled);
    ɵɵproperty("iconStart", ctx_r1.icons.increment)("tabIndex", ctx_r1.focusable ? 0 : -1);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", texts_r3[1], " ");
  }
}
var TuiSpinButton = class _TuiSpinButton {
  constructor() {
    this.icons = inject(TUI_SPIN_ICONS);
    this.spinTexts$ = inject(TUI_SPIN_TEXTS);
    this.focusable = true;
    this.disabled = false;
    this.leftDisabled = false;
    this.rightDisabled = false;
    this.leftClick = new EventEmitter();
    this.rightClick = new EventEmitter();
  }
  onLeftClick() {
    if (!this.disabled && !this.leftDisabled) {
      this.leftClick.emit();
    }
  }
  onRightClick() {
    if (!this.disabled && !this.rightDisabled) {
      this.rightClick.emit();
    }
  }
  static {
    this.ɵfac = function TuiSpinButton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSpinButton)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSpinButton,
      selectors: [["tui-spin-button"]],
      hostBindings: function TuiSpinButton_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("mousedown.zoneless.prevent", function TuiSpinButton_mousedown_zoneless_prevent_HostBindingHandler() {
            return 0;
          })("keydown.arrowLeft.prevent", function TuiSpinButton_keydown_arrowLeft_prevent_HostBindingHandler() {
            return ctx.onLeftClick();
          })("keydown.arrowRight.prevent", function TuiSpinButton_keydown_arrowRight_prevent_HostBindingHandler() {
            return ctx.onRightClick();
          });
        }
      },
      inputs: {
        focusable: "focusable",
        disabled: "disabled",
        leftDisabled: "leftDisabled",
        rightDisabled: "rightDisabled"
      },
      outputs: {
        leftClick: "leftClick",
        rightClick: "rightClick"
      },
      ngContentSelectors: _c0,
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], ["appearance", "flat", "automation-id", "tui-spin-button__left", "size", "xs", "tuiIconButton", "", "type", "button", 1, "t-button", 3, "click", "iconStart", "tabIndex"], [1, "t-content", "t-calendar-title"], ["appearance", "flat", "automation-id", "tui-spin-button__right", "size", "xs", "tuiIconButton", "", "type", "button", 1, "t-button", 3, "click", "iconStart", "tabIndex"]],
      template: function TuiSpinButton_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, TuiSpinButton_ng_container_0_Template, 7, 10, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.spinTexts$));
        }
      },
      dependencies: [AsyncPipe, NgIf, TuiButton],
      styles: ["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:space-between;font:var(--tui-font-text-l);text-align:center;font-weight:700}.t-button[_ngcontent-%COMP%]{transform:scaleX(var(--tui-inline))}.t-button_hidden[_ngcontent-%COMP%]{visibility:hidden}.t-content[_ngcontent-%COMP%]{padding:0 .5rem}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSpinButton, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-spin-button",
      imports: [AsyncPipe, NgIf, TuiButton],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "(mousedown.zoneless.prevent)": "(0)",
        "(keydown.arrowLeft.prevent)": "onLeftClick()",
        "(keydown.arrowRight.prevent)": "onRightClick()"
      },
      template: '<ng-container *ngIf="spinTexts$ | async as texts">\n    <button\n        appearance="flat"\n        automation-id="tui-spin-button__left"\n        size="xs"\n        tuiIconButton\n        type="button"\n        class="t-button"\n        [class.t-button_hidden]="disabled || leftDisabled"\n        [iconStart]="icons.decrement"\n        [tabIndex]="focusable ? 0 : -1"\n        (click)="onLeftClick()"\n    >\n        {{ texts[0] }}\n    </button>\n    <span class="t-content t-calendar-title">\n        <ng-content />\n    </span>\n    <button\n        appearance="flat"\n        automation-id="tui-spin-button__right"\n        size="xs"\n        tuiIconButton\n        type="button"\n        class="t-button"\n        [class.t-button_hidden]="disabled || rightDisabled"\n        [iconStart]="icons.increment"\n        [tabIndex]="focusable ? 0 : -1"\n        (click)="onRightClick()"\n    >\n        {{ texts[1] }}\n    </button>\n</ng-container>\n',
      styles: [":host{display:flex;align-items:center;justify-content:space-between;font:var(--tui-font-text-l);text-align:center;font-weight:700}.t-button{transform:scaleX(var(--tui-inline))}.t-button_hidden{visibility:hidden}.t-content{padding:0 .5rem}\n"]
    }]
  }], null, {
    focusable: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    leftDisabled: [{
      type: Input
    }],
    rightDisabled: [{
      type: Input
    }],
    leftClick: [{
      type: Output
    }],
    rightClick: [{
      type: Output
    }]
  });
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-calendar.mjs
var _c02 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function TuiCalendarSheet_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 3);
  }
  if (rf & 2) {
    const day_r1 = ctx.$implicit;
    ɵɵproperty("textContent", day_r1);
  }
}
function TuiCalendarSheet_div_4_div_1_ng_container_1_ng_container_1_div_1_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 11);
  }
  if (rf & 2) {
    const markers_r5 = ɵɵnextContext().ngIf;
    ɵɵstyleProp("background", (markers_r5 == null ? null : markers_r5[1]) || "");
  }
}
function TuiCalendarSheet_div_4_div_1_ng_container_1_ng_container_1_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵelement(1, "div", 11);
    ɵɵtemplate(2, TuiCalendarSheet_div_4_div_1_ng_container_1_ng_container_1_div_1_div_3_div_2_Template, 1, 2, "div", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const markers_r5 = ctx.ngIf;
    ɵɵadvance();
    ɵɵstyleProp("background", markers_r5 == null ? null : markers_r5[0]);
    ɵɵadvance();
    ɵɵproperty("ngIf", markers_r5.length > 1);
  }
}
function TuiCalendarSheet_div_4_div_1_ng_container_1_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 8);
    ɵɵpipe(1, "tuiMapper");
    ɵɵlistener("click", function TuiCalendarSheet_div_4_div_1_ng_container_1_ng_container_1_div_1_Template_div_click_0_listener() {
      ɵɵrestoreView(_r2);
      const item_r3 = ɵɵnextContext().tuiLet;
      const ctx_r3 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r3.onItemClick(item_r3));
    })("tuiHoveredChange", function TuiCalendarSheet_div_4_div_1_ng_container_1_ng_container_1_div_1_Template_div_tuiHoveredChange_0_listener($event) {
      ɵɵrestoreView(_r2);
      const item_r3 = ɵɵnextContext().tuiLet;
      const ctx_r3 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r3.onItemHovered($event && item_r3));
    });
    ɵɵtext(2);
    ɵɵtemplate(3, TuiCalendarSheet_div_4_div_1_ng_container_1_ng_container_1_div_1_div_3_Template, 3, 3, "div", 9);
    ɵɵpipe(4, "tuiMapper");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext().tuiLet;
    const ctx_r3 = ɵɵnextContext(4);
    ɵɵclassProp("t-cell_disabled", ctx_r3.disabledItemHandler(item_r3))("t-cell_today", ctx_r3.itemIsToday(item_r3))("t-cell_unavailable", ctx_r3.itemIsUnavailable(item_r3));
    ɵɵattribute("data-range", ctx_r3.getItemRange(item_r3))("data-type", ɵɵpipeBind2(1, 10, item_r3, ctx_r3.dayTypeHandler));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", item_r3.day, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBindV(4, 13, ɵɵpureFunction5(19, _c02, item_r3, ctx_r3.toMarkers, ctx_r3.itemIsToday(item_r3), ctx_r3.getItemRange(item_r3), ctx_r3.markerHandler)));
  }
}
function TuiCalendarSheet_div_4_div_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiCalendarSheet_div_4_div_1_ng_container_1_ng_container_1_div_1_Template, 5, 25, "div", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.tuiLet;
    const ctx_r3 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r3 && (!ctx_r3.itemIsUnavailable(item_r3) || ctx_r3.showAdjacent));
  }
}
function TuiCalendarSheet_div_4_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiCalendarSheet_div_4_div_1_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const colIndex_r6 = ctx.$implicit;
    const rowIndex_r7 = ɵɵnextContext().$implicit;
    const sheet_r8 = ɵɵnextContext().tuiLet;
    ɵɵadvance();
    ɵɵproperty("tuiLet", sheet_r8[rowIndex_r7] == null ? null : sheet_r8[rowIndex_r7][colIndex_r6]);
  }
}
function TuiCalendarSheet_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtemplate(1, TuiCalendarSheet_div_4_div_1_ng_container_1_Template, 2, 1, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const rowIndex_r7 = ctx.$implicit;
    const sheet_r8 = ɵɵnextContext().tuiLet;
    ɵɵadvance();
    ɵɵproperty("tuiRepeatTimesOf", (sheet_r8[rowIndex_r7] == null ? null : sheet_r8[rowIndex_r7].length) || 0);
  }
}
function TuiCalendarSheet_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, TuiCalendarSheet_div_4_div_1_Template, 2, 1, "div", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const sheet_r8 = ctx.tuiLet;
    ɵɵadvance();
    ɵɵproperty("tuiRepeatTimesOf", sheet_r8.length);
  }
}
function TuiCalendarSpin_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.value.formattedYear, " ");
  }
}
function TuiCalendarSpin_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 3);
    ɵɵlistener("click", function TuiCalendarSpin_ng_template_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onYearClick());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.value.formattedYear, " ");
  }
}
function TuiCalendarYear_div_0_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4);
    ɵɵlistener("click", function TuiCalendarYear_div_0_ng_container_1_div_1_Template_div_click_0_listener() {
      const item_r2 = ɵɵrestoreView(_r1).tuiLet;
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.yearClick.emit(item_r2));
    })("tuiHoveredChange", function TuiCalendarYear_div_0_ng_container_1_div_1_Template_div_tuiHoveredChange_0_listener($event) {
      const item_r2 = ɵɵrestoreView(_r1).tuiLet;
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.onItemHovered($event, item_r2));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.tuiLet;
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵclassProp("t-cell_disabled", ctx_r2.isDisabled(item_r2))("t-cell_today", ctx_r2.itemIsToday(item_r2));
    ɵɵproperty("tuiScrollIntoView", ctx_r2.scrollItemIntoView(item_r2));
    ɵɵattribute("data-range", ctx_r2.getItemRange(item_r2));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", item_r2, " ");
  }
}
function TuiCalendarYear_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiCalendarYear_div_0_ng_container_1_div_1_Template, 2, 7, "div", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const colIndex_r4 = ctx.$implicit;
    const rowIndex_r5 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("tuiLet", ctx_r2.getItem(rowIndex_r5, colIndex_r4));
  }
}
function TuiCalendarYear_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, TuiCalendarYear_div_0_ng_container_1_Template, 2, 1, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵproperty("tuiRepeatTimesOf", 4);
  }
}
function TuiCalendar_tui_scrollbar_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-scrollbar", 2)(1, "tui-calendar-year", 3);
    ɵɵlistener("yearClick", function TuiCalendar_tui_scrollbar_0_Template_tui_calendar_year_yearClick_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onPickerYearClick($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("initialItem", ctx_r1.month.year)("max", ctx_r1.computedMax.year)("min", ctx_r1.computedMin.year)("rangeMode", ctx_r1.options.rangeMode)("value", ctx_r1.value);
  }
}
function TuiCalendar_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-calendar-spin", 4);
    ɵɵlistener("valueChange", function TuiCalendar_ng_template_1_Template_tui_calendar_spin_valueChange_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onPaginationValueChange($event));
    })("yearClick", function TuiCalendar_ng_template_1_Template_tui_calendar_spin_yearClick_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onPaginationYearClick());
    });
    ɵɵelementEnd();
    ɵɵelementStart(1, "tui-calendar-sheet", 5);
    ɵɵpipe(2, "tuiMapper");
    ɵɵlistener("dayClick", function TuiCalendar_ng_template_1_Template_tui_calendar_sheet_dayClick_1_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onDayClick($event));
    })("hoveredItemChange", function TuiCalendar_ng_template_1_Template_tui_calendar_sheet_hoveredItemChange_1_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onHoveredItemChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("max", ctx_r1.computedMaxViewedMonth)("min", ctx_r1.computedMinViewedMonth)("value", ctx_r1.month);
    ɵɵadvance();
    ɵɵproperty("disabledItemHandler", ɵɵpipeBind4(2, 9, ctx_r1.disabledItemHandler, ctx_r1.disabledItemHandlerMapper, ctx_r1.computedMin, ctx_r1.computedMax))("hoveredItem", ctx_r1.hoveredItem)("markerHandler", ctx_r1.markerHandler)("month", ctx_r1.month)("showAdjacent", ctx_r1.showAdjacent)("value", ctx_r1.value);
  }
}
var TUI_CALENDAR_SHEET_DEFAULT_OPTIONS = {
  rangeMode: false
};
var TUI_CALENDAR_SHEET_OPTIONS = new InjectionToken(ngDevMode ? "TUI_CALENDAR_SHEET_OPTIONS" : "", {
  factory: () => TUI_CALENDAR_SHEET_DEFAULT_OPTIONS
});
function tuiCalendarSheetOptionsProvider(options) {
  return tuiProvideOptions(TUI_CALENDAR_SHEET_OPTIONS, options, TUI_CALENDAR_SHEET_DEFAULT_OPTIONS);
}
var TuiCalendarSheet = class _TuiCalendarSheet {
  constructor() {
    this.options = inject(TUI_CALENDAR_SHEET_OPTIONS);
    this.today = TuiDay.currentLocal();
    this.unorderedWeekDays$ = inject(TUI_SHORT_WEEK_DAYS);
    this.dayTypeHandler = inject(TUI_DAY_TYPE_HANDLER);
    this.month = TuiMonth.currentLocal();
    this.disabledItemHandler = TUI_FALSE_HANDLER;
    this.markerHandler = null;
    this.value = null;
    this.hoveredItem = null;
    this.showAdjacent = true;
    this.single = true;
    this.hoveredItemChange = new EventEmitter();
    this.dayClick = new EventEmitter();
    this.toMarkers = (day, today, range, markerHandler) => {
      if (today || ["active", "end", "start"].includes(range || "")) {
        return null;
      }
      const markers = markerHandler?.(day);
      return markers?.length ? markers : null;
    };
  }
  /**
   * @deprecated TODO(v5): delete it. It is used nowhere except unit tests
   */
  itemIsInterval(day) {
    const {
      value,
      hoveredItem
    } = this;
    if (!(value instanceof TuiDayRange)) {
      return false;
    }
    if (!value.isSingleDay) {
      return value.from.daySameOrBefore(day) && value.to.dayAfter(day);
    }
    if (hoveredItem === null) {
      return false;
    }
    const range = TuiDayRange.sort(value.from, hoveredItem);
    return range.from.daySameOrBefore(day) && range.to.dayAfter(day);
  }
  onItemHovered(item) {
    this.updateHoveredItem(item || null);
  }
  getItemRange(item) {
    const {
      value,
      hoveredItem
    } = this;
    if (!value) {
      return null;
    }
    if (value instanceof TuiDay && !this.computedRangeMode) {
      return value.daySame(item) ? "active" : null;
    }
    if (value instanceof TuiDayRange && value.isSingleDay) {
      return value.from.daySame(item) ? "active" : null;
    }
    if (!(value instanceof TuiDay) && !(value instanceof TuiDayRange)) {
      return value.find((day) => day.daySame(item)) ? "active" : null;
    }
    const range = this.getRange(value, hoveredItem);
    if (range.isSingleDay && range.from.daySame(item)) {
      return "active";
    }
    if (range.from.daySame(item)) {
      return "start";
    }
    if (range.to.daySame(item)) {
      return "end";
    }
    return range.from.dayBefore(item) && range.to.dayAfter(item) ? "middle" : null;
  }
  get computedRangeMode() {
    return !this.single || this.options.rangeMode;
  }
  get isRangePicking() {
    return this.computedRangeMode ? this.value instanceof TuiDay : (
      /**
       * Only for backward compatibility!
       * TODO(v5): replace with `this.options.rangeMode && this.value instanceof TuiDay`
       */
      this.value instanceof TuiDayRange && this.value.isSingleDay
    );
  }
  itemIsToday(item) {
    return this.today.daySame(item);
  }
  itemIsUnavailable(item) {
    return !this.month.monthSame(item);
  }
  onItemClick(item) {
    this.dayClick.emit(item);
  }
  getRange(value, hoveredItem) {
    if (value instanceof TuiDay) {
      return TuiDayRange.sort(value, hoveredItem ?? value);
    }
    return value.isSingleDay ? TuiDayRange.sort(value.from, hoveredItem ?? value.to) : value;
  }
  updateHoveredItem(day) {
    if (tuiNullableSame(this.hoveredItem, day, (a, b) => a.daySame(b))) {
      return;
    }
    this.hoveredItem = day;
    this.hoveredItemChange.emit(day);
  }
  static {
    this.ɵfac = function TuiCalendarSheet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCalendarSheet)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCalendarSheet,
      selectors: [["tui-calendar-sheet"]],
      hostVars: 2,
      hostBindings: function TuiCalendarSheet_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("_picking", ctx.isRangePicking);
        }
      },
      inputs: {
        month: "month",
        disabledItemHandler: "disabledItemHandler",
        markerHandler: "markerHandler",
        value: "value",
        hoveredItem: "hoveredItem",
        showAdjacent: "showAdjacent",
        single: "single"
      },
      outputs: {
        hoveredItemChange: "hoveredItemChange",
        dayClick: "dayClick"
      },
      decls: 6,
      vars: 9,
      consts: [[1, "t-row", "t-row_weekday"], ["class", "t-cell", 3, "textContent", 4, "ngFor", "ngForOf"], [4, "tuiLet"], [1, "t-cell", 3, "textContent"], ["automation-id", "tui-calendar-sheet__row", "class", "t-row", 4, "tuiRepeatTimes", "tuiRepeatTimesOf"], ["automation-id", "tui-calendar-sheet__row", 1, "t-row"], [4, "tuiRepeatTimes", "tuiRepeatTimesOf"], ["automation-id", "tui-calendar-sheet__cell", "class", "t-cell", 3, "t-cell_disabled", "t-cell_today", "t-cell_unavailable", "click", "tuiHoveredChange", 4, "ngIf"], ["automation-id", "tui-calendar-sheet__cell", 1, "t-cell", 3, "click", "tuiHoveredChange"], ["class", "t-dots", 4, "ngIf"], [1, "t-dots"], [1, "t-dot"], ["class", "t-dot", 3, "background", 4, "ngIf"]],
      template: function TuiCalendarSheet_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵtemplate(1, TuiCalendarSheet_div_1_Template, 1, 1, "div", 1);
          ɵɵpipe(2, "tuiOrderWeekDays");
          ɵɵpipe(3, "async");
          ɵɵelementEnd();
          ɵɵtemplate(4, TuiCalendarSheet_div_4_Template, 2, 1, "div", 2);
          ɵɵpipe(5, "tuiCalendarSheet");
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngForOf", ɵɵpipeBind1(3, 4, ɵɵpipeBind1(2, 2, ctx.unorderedWeekDays$)));
          ɵɵadvance(3);
          ɵɵproperty("tuiLet", ɵɵpipeBind2(5, 6, ctx.month, true));
        }
      },
      dependencies: [AsyncPipe, NgForOf, NgIf, TuiCalendarSheetPipe, TuiHovered, TuiLet, TuiMapperPipe, TuiOrderWeekDaysPipe, TuiRepeatTimes],
      styles: [`.t-row[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;font:var(--tui-font-text-m)}.t-row[_ngcontent-%COMP%]:last-child{justify-content:flex-start}.t-cell[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell[_ngcontent-%COMP%]:first-child{border-inline-start-color:transparent!important}.t-cell[_ngcontent-%COMP%]:last-child{border-inline-end-color:transparent!important}.t-cell[_ngcontent-%COMP%]:before, .t-cell[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;bottom:0;right:0;content:"";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell[_ngcontent-%COMP%]:after{-webkit-mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat;mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat}.t-cell[data-range][_ngcontent-%COMP%]:before{background:var(--tui-background-neutral-1)}._picking[_nghost-%COMP%]   .t-cell[data-range][_ngcontent-%COMP%]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle][_ngcontent-%COMP%]{border-color:var(--tui-background-neutral-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=middle][_ngcontent-%COMP%]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle][_ngcontent-%COMP%]:not(:first-child):before{border-top-left-radius:0;border-bottom-left-radius:0}.t-cell[data-range=middle][_ngcontent-%COMP%]:not(:last-child):before{border-top-right-radius:0;border-bottom-right-radius:0}.t-cell[data-range=start][_ngcontent-%COMP%]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=start][_ngcontent-%COMP%]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start][_ngcontent-%COMP%]:not(:last-child):before{right:-1rem}.t-cell[data-range=start][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1)}.t-cell[data-range=end][_ngcontent-%COMP%]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=end][_ngcontent-%COMP%]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end][_ngcontent-%COMP%]:not(:first-child):before{left:-1rem}.t-cell[data-range=end][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1);transform:scaleX(-1)}.t-cell[data-range=active][_ngcontent-%COMP%]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1);-webkit-mask:none;mask:none}.t-cell_disabled[_ngcontent-%COMP%]{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today[_ngcontent-%COMP%]{text-decoration:underline;text-underline-offset:.25rem}@media (hover: hover) and (pointer: fine){.t-cell[_ngcontent-%COMP%]:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start][_ngcontent-%COMP%]:hover:after, .t-cell[data-range=end][_ngcontent-%COMP%]:hover:after, .t-cell[data-range=active][_ngcontent-%COMP%]:hover:after{background:var(--tui-background-accent-1-hover)}}.t-cell[_ngcontent-%COMP%]{inline-size:calc(100% / 7)}[data-type=weekday][_ngcontent-%COMP%]{color:var(--tui-text-primary)}[data-type=weekend][_ngcontent-%COMP%]{color:var(--tui-text-negative)}.t-row[_ngcontent-%COMP%]{justify-content:flex-start}.t-row[_ngcontent-%COMP%]:first-child{justify-content:flex-end}.t-row_weekday[_ngcontent-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-secondary);pointer-events:none}.t-cell_unavailable[_ngcontent-%COMP%]{opacity:var(--tui-disabled-opacity)}.t-dots[_ngcontent-%COMP%]{position:absolute;bottom:0;display:flex;justify-content:center;margin-block-start:-.5rem;padding-block-end:.25rem}.t-dot[_ngcontent-%COMP%]{display:inline-block;inline-size:.25rem;block-size:.25rem;border-radius:100%;margin:0 .0625rem}`],
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiCalendarSheet.prototype, "getRange", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendarSheet, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-calendar-sheet",
      imports: [AsyncPipe, NgForOf, NgIf, TuiCalendarSheetPipe, TuiHovered, TuiLet, TuiMapperPipe, TuiOrderWeekDaysPipe, TuiRepeatTimes],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class._picking]": "isRangePicking"
      },
      template: `<div class="t-row t-row_weekday">
    <div
        *ngFor="let day of unorderedWeekDays$ | tuiOrderWeekDays | async"
        class="t-cell"
        [textContent]="day"
    ></div>
</div>
<div *tuiLet="month | tuiCalendarSheet: true as sheet">
    <div
        *tuiRepeatTimes="let rowIndex of sheet.length"
        automation-id="tui-calendar-sheet__row"
        class="t-row"
    >
        <ng-container *tuiRepeatTimes="let colIndex of sheet[rowIndex]?.length || 0">
            <ng-container *tuiLet="sheet[rowIndex]?.[colIndex] as item">
                <div
                    *ngIf="item && (!itemIsUnavailable(item) || showAdjacent)"
                    automation-id="tui-calendar-sheet__cell"
                    class="t-cell"
                    [attr.data-range]="getItemRange(item)"
                    [attr.data-type]="item | tuiMapper: dayTypeHandler"
                    [class.t-cell_disabled]="disabledItemHandler(item)"
                    [class.t-cell_today]="itemIsToday(item)"
                    [class.t-cell_unavailable]="itemIsUnavailable(item)"
                    (click)="onItemClick(item)"
                    (tuiHoveredChange)="onItemHovered($event && item)"
                >
                    {{ item.day }}
                    <div
                        *ngIf="
                            item
                                | tuiMapper
                                    : toMarkers
                                    : itemIsToday(item)
                                    : getItemRange(item)
                                    : markerHandler as markers
                        "
                        class="t-dots"
                    >
                        <div
                            class="t-dot"
                            [style.background]="markers?.[0]"
                        ></div>
                        <div
                            *ngIf="markers.length > 1"
                            class="t-dot"
                            [style.background]="markers?.[1] || ''"
                        ></div>
                    </div>
                </div>
            </ng-container>
        </ng-container>
    </div>
</div>
`,
      styles: [`.t-row{display:flex;justify-content:flex-start;font:var(--tui-font-text-m)}.t-row:last-child{justify-content:flex-start}.t-cell{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell:first-child{border-inline-start-color:transparent!important}.t-cell:last-child{border-inline-end-color:transparent!important}.t-cell:before,.t-cell:after{position:absolute;top:0;left:0;bottom:0;right:0;content:"";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell:after{-webkit-mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat;mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat}.t-cell[data-range]:before{background:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]:not(:first-child):before{border-top-left-radius:0;border-bottom-left-radius:0}.t-cell[data-range=middle]:not(:last-child):before{border-top-right-radius:0;border-bottom-right-radius:0}.t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:not(:last-child):before{right:-1rem}.t-cell[data-range=start]:after{background:var(--tui-background-accent-1)}.t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end]:not(:first-child):before{left:-1rem}.t-cell[data-range=end]:after{background:var(--tui-background-accent-1);transform:scaleX(-1)}.t-cell[data-range=active]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active]:after{background:var(--tui-background-accent-1);-webkit-mask:none;mask:none}.t-cell_disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today{text-decoration:underline;text-underline-offset:.25rem}@media (hover: hover) and (pointer: fine){.t-cell:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:hover:after,.t-cell[data-range=end]:hover:after,.t-cell[data-range=active]:hover:after{background:var(--tui-background-accent-1-hover)}}.t-cell{inline-size:calc(100% / 7)}[data-type=weekday]{color:var(--tui-text-primary)}[data-type=weekend]{color:var(--tui-text-negative)}.t-row{justify-content:flex-start}.t-row:first-child{justify-content:flex-end}.t-row_weekday{font:var(--tui-font-text-s);color:var(--tui-text-secondary);pointer-events:none}.t-cell_unavailable{opacity:var(--tui-disabled-opacity)}.t-dots{position:absolute;bottom:0;display:flex;justify-content:center;margin-block-start:-.5rem;padding-block-end:.25rem}.t-dot{display:inline-block;inline-size:.25rem;block-size:.25rem;border-radius:100%;margin:0 .0625rem}
`]
    }]
  }], null, {
    month: [{
      type: Input
    }],
    disabledItemHandler: [{
      type: Input
    }],
    markerHandler: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    hoveredItem: [{
      type: Input
    }],
    showAdjacent: [{
      type: Input
    }],
    single: [{
      type: Input
    }],
    hoveredItemChange: [{
      type: Output
    }],
    dayClick: [{
      type: Output
    }],
    getRange: []
  });
})();
var TuiCalendarSpin = class _TuiCalendarSpin {
  constructor() {
    this.value = TuiMonth.currentLocal();
    this.min = TUI_FIRST_DAY;
    this.max = TUI_LAST_DAY;
    this.valueChange = new EventEmitter();
    this.yearClick = new EventEmitter();
  }
  onYearClick() {
    this.yearClick.next(this.value);
  }
  append(date) {
    const value = this.value.append(date);
    if (this.min.monthSameOrAfter(value)) {
      this.updateValue(this.min);
    } else {
      this.updateValue(this.max.monthSameOrBefore(value) ? this.max : value);
    }
  }
  updateValue(value) {
    if (this.value.monthSame(value)) {
      return;
    }
    this.value = value;
    this.valueChange.emit(value);
  }
  static {
    this.ɵfac = function TuiCalendarSpin_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCalendarSpin)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCalendarSpin,
      selectors: [["tui-calendar-spin"]],
      inputs: {
        value: "value",
        min: "min",
        max: "max"
      },
      outputs: {
        valueChange: "valueChange",
        yearClick: "yearClick"
      },
      decls: 7,
      vars: 10,
      consts: [["button", ""], [3, "leftClick", "rightClick", "focusable", "leftDisabled", "rightDisabled"], [4, "ngIf", "ngIfElse"], ["id", "year-btn", "automation-id", "tui-primitive-year-month-pagination__year-button", "tabIndex", "-1", "tuiLink", "", "type", "button", 3, "click"]],
      template: function TuiCalendarSpin_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "tui-spin-button", 1);
          ɵɵlistener("leftClick", function TuiCalendarSpin_Template_tui_spin_button_leftClick_0_listener() {
            return ctx.append({
              month: -1
            });
          })("rightClick", function TuiCalendarSpin_Template_tui_spin_button_rightClick_0_listener() {
            return ctx.append({
              month: 1
            });
          });
          ɵɵtext(1);
          ɵɵpipe(2, "tuiMonth");
          ɵɵpipe(3, "async");
          ɵɵtemplate(4, TuiCalendarSpin_ng_container_4_Template, 2, 1, "ng-container", 2)(5, TuiCalendarSpin_ng_template_5_Template, 2, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          const button_r3 = ɵɵreference(6);
          ɵɵproperty("focusable", false)("leftDisabled", ctx.value.monthSameOrBefore(ctx.min))("rightDisabled", ctx.value.monthSameOrAfter(ctx.max));
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 8, ɵɵpipeBind1(2, 6, ctx.value)), " ");
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ctx.min.year === ctx.max.year)("ngIfElse", button_r3);
        }
      },
      dependencies: [AsyncPipe, NgIf, TuiLink, TuiMonthPipe, TuiSpinButton],
      styles: ["[_nghost-%COMP%]{display:block}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendarSpin, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-calendar-spin",
      imports: [AsyncPipe, NgIf, TuiLink, TuiMonthPipe, TuiSpinButton],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<tui-spin-button\n    [focusable]="false"\n    [leftDisabled]="value.monthSameOrBefore(min)"\n    [rightDisabled]="value.monthSameOrAfter(max)"\n    (leftClick)="append({month: -1})"\n    (rightClick)="append({month: 1})"\n>\n    {{ value | tuiMonth | async }}\n    <ng-container *ngIf="min.year === max.year; else button">\n        {{ value.formattedYear }}\n    </ng-container>\n    <ng-template #button>\n        <button\n            id="year-btn"\n            automation-id="tui-primitive-year-month-pagination__year-button"\n            tabIndex="-1"\n            tuiLink\n            type="button"\n            (click)="onYearClick()"\n        >\n            {{ value.formattedYear }}\n        </button>\n    </ng-template>\n</tui-spin-button>\n',
      styles: [":host{display:block}\n"]
    }]
  }], null, {
    value: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    yearClick: [{
      type: Output
    }]
  });
})();
var LIMIT = 100;
var ITEMS_IN_ROW = 4;
var CURRENT_YEAR = TuiMonth.currentLocal().year;
var TuiCalendarYear = class _TuiCalendarYear {
  constructor() {
    this.hoveredItem = signal(null);
    this.isRangePicking = computed((x = this.value()) => this.rangeMode && (x instanceof TuiDay || x instanceof TuiMonth));
    this.rangeMode = false;
    this.disabledItemHandler = inject(TUI_ITEMS_HANDLERS).disabledItemHandler();
    this.yearClick = new EventEmitter();
    this.initialItem = signal(CURRENT_YEAR);
    this.min = signal(MIN_YEAR);
    this.max = signal(MAX_YEAR);
    this.value = signal(null);
  }
  // TODO(v5): use signal inputs
  set initialItemSetter(x) {
    this.initialItem.set(x ?? CURRENT_YEAR);
  }
  // TODO(v5): use signal inputs
  set minSetter(x) {
    this.min.set(x);
  }
  // TODO(v5): use signal inputs
  set maxSetter(x) {
    this.max.set(x);
  }
  // TODO(v5): use signal inputs
  set valueSetter(x) {
    this.value.set(x);
  }
  isDisabled(item) {
    return this.max() && this.max() < item || this.min() && this.min() > item || this.disabledItemHandler(item);
  }
  getItemRange(item) {
    const value = this.value();
    const hoveredItem = this.hoveredItem();
    if (value instanceof TuiYear && value.year === item) {
      return "active";
    }
    if (tuiIsNumber(value)) {
      return value === item ? "active" : null;
    }
    if (!(value instanceof TuiMonthRange) && !(value instanceof TuiYear)) {
      return value?.find((day) => day.year === item) ? "active" : null;
    }
    const hovered = this.isRangePicking() ? hoveredItem : null;
    const from = "from" in value ? value.from?.year : value.year;
    const to = "from" in value ? value.to.year : value.year;
    const min = Math.min(from, hovered ?? to);
    const max = Math.max(from, hovered ?? to);
    if (min === max && from === to && from === item) {
      return "active";
    }
    if (min === item) {
      return "start";
    }
    if (max === item) {
      return "end";
    }
    return min < item && item < max ? "middle" : null;
  }
  onItemHovered(hovered, item) {
    this.hoveredItem.set(hovered ? item : null);
  }
  get rows() {
    return Math.ceil((this.calculatedMax - this.calculatedMin) / ITEMS_IN_ROW);
  }
  scrollItemIntoView(item) {
    return this.initialItem() === item;
  }
  getItem(rowIndex, colIndex) {
    return rowIndex * ITEMS_IN_ROW + colIndex + this.calculatedMin;
  }
  itemIsToday(item) {
    return CURRENT_YEAR === item;
  }
  get calculatedMin() {
    const initial = this.initialItem() - LIMIT;
    const min = this.min() ?? MIN_YEAR;
    return min > initial ? min : initial;
  }
  get calculatedMax() {
    const initial = this.initialItem() + LIMIT;
    const max = this.max() ?? MAX_YEAR;
    return max < initial ? max + 1 : initial;
  }
  static {
    this.ɵfac = function TuiCalendarYear_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCalendarYear)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCalendarYear,
      selectors: [["tui-calendar-year"]],
      hostVars: 2,
      hostBindings: function TuiCalendarYear_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("_picking", ctx.isRangePicking());
        }
      },
      inputs: {
        rangeMode: "rangeMode",
        disabledItemHandler: "disabledItemHandler",
        initialItemSetter: [2, "initialItem", "initialItemSetter", (x) => x ?? CURRENT_YEAR],
        minSetter: [2, "min", "minSetter", (x) => x ?? MIN_YEAR],
        maxSetter: [2, "max", "maxSetter", (x) => x ?? MAX_YEAR],
        valueSetter: [0, "value", "valueSetter"]
      },
      outputs: {
        yearClick: "yearClick"
      },
      features: [ɵɵProvidersFeature([tuiAsAuxiliary(_TuiCalendarYear)])],
      decls: 1,
      vars: 1,
      consts: [["automation-id", "tui-calendar-year__row", "class", "t-row", 4, "tuiRepeatTimes", "tuiRepeatTimesOf"], ["automation-id", "tui-calendar-year__row", 1, "t-row"], [4, "tuiRepeatTimes", "tuiRepeatTimesOf"], ["automation-id", "tui-calendar-year__cell", "class", "t-cell", 3, "t-cell_disabled", "t-cell_today", "tuiScrollIntoView", "click", "tuiHoveredChange", 4, "tuiLet"], ["automation-id", "tui-calendar-year__cell", 1, "t-cell", 3, "click", "tuiHoveredChange", "tuiScrollIntoView"]],
      template: function TuiCalendarYear_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiCalendarYear_div_0_Template, 2, 1, "div", 0);
        }
        if (rf & 2) {
          ɵɵproperty("tuiRepeatTimesOf", ctx.rows);
        }
      },
      dependencies: [TuiHovered, TuiLet, TuiRepeatTimes, TuiScrollIntoView],
      styles: [`.t-row[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;font:var(--tui-font-text-m)}.t-row[_ngcontent-%COMP%]:first-child{justify-content:flex-end}.t-row[_ngcontent-%COMP%]:last-child{justify-content:flex-start}.t-cell[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell[_ngcontent-%COMP%]:first-child{border-inline-start-color:transparent!important}.t-cell[_ngcontent-%COMP%]:last-child{border-inline-end-color:transparent!important}.t-cell[_ngcontent-%COMP%]:before, .t-cell[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;bottom:0;right:0;content:"";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell[_ngcontent-%COMP%]:after{-webkit-mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat;mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat}.t-cell[data-range][_ngcontent-%COMP%]:before{background:var(--tui-background-neutral-1)}._picking[_nghost-%COMP%]   .t-cell[data-range][_ngcontent-%COMP%]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle][_ngcontent-%COMP%]{border-color:var(--tui-background-neutral-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=middle][_ngcontent-%COMP%]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle][_ngcontent-%COMP%]:not(:first-child):before{border-top-left-radius:0;border-bottom-left-radius:0}.t-cell[data-range=middle][_ngcontent-%COMP%]:not(:last-child):before{border-top-right-radius:0;border-bottom-right-radius:0}.t-cell[data-range=start][_ngcontent-%COMP%]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=start][_ngcontent-%COMP%]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start][_ngcontent-%COMP%]:not(:last-child):before{right:-1rem}.t-cell[data-range=start][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1)}.t-cell[data-range=end][_ngcontent-%COMP%]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=end][_ngcontent-%COMP%]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end][_ngcontent-%COMP%]:not(:first-child):before{left:-1rem}.t-cell[data-range=end][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1);transform:scaleX(-1)}.t-cell[data-range=active][_ngcontent-%COMP%]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1);-webkit-mask:none;mask:none}.t-cell_disabled[_ngcontent-%COMP%]{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today[_ngcontent-%COMP%]{text-decoration:underline;text-underline-offset:.25rem}@media (hover: hover) and (pointer: fine){.t-cell[_ngcontent-%COMP%]:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start][_ngcontent-%COMP%]:hover:after, .t-cell[data-range=end][_ngcontent-%COMP%]:hover:after, .t-cell[data-range=active][_ngcontent-%COMP%]:hover:after{background:var(--tui-background-accent-1-hover)}}[_nghost-%COMP%]{display:block;padding-inline-end:1rem;inline-size:15.75rem;padding:0 1.125rem}.t-cell[_ngcontent-%COMP%]{flex:1;border-block-start-width:.5rem;border-block-end-width:.5rem}`],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendarYear, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-calendar-year",
      imports: [TuiHovered, TuiLet, TuiRepeatTimes, TuiScrollIntoView],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsAuxiliary(TuiCalendarYear)],
      host: {
        "[class._picking]": "isRangePicking()"
      },
      template: '<div\n    *tuiRepeatTimes="let rowIndex of rows"\n    automation-id="tui-calendar-year__row"\n    class="t-row"\n>\n    <ng-container *tuiRepeatTimes="let colIndex of 4">\n        <div\n            *tuiLet="getItem(rowIndex, colIndex) as item"\n            automation-id="tui-calendar-year__cell"\n            class="t-cell"\n            [attr.data-range]="getItemRange(item)"\n            [class.t-cell_disabled]="isDisabled(item)"\n            [class.t-cell_today]="itemIsToday(item)"\n            [tuiScrollIntoView]="scrollItemIntoView(item)"\n            (click)="yearClick.emit(item)"\n            (tuiHoveredChange)="onItemHovered($event, item)"\n        >\n            {{ item }}\n        </div>\n    </ng-container>\n</div>\n',
      styles: [`.t-row{display:flex;justify-content:flex-start;font:var(--tui-font-text-m)}.t-row:first-child{justify-content:flex-end}.t-row:last-child{justify-content:flex-start}.t-cell{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell:first-child{border-inline-start-color:transparent!important}.t-cell:last-child{border-inline-end-color:transparent!important}.t-cell:before,.t-cell:after{position:absolute;top:0;left:0;bottom:0;right:0;content:"";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell:after{-webkit-mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat;mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat}.t-cell[data-range]:before{background:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]:not(:first-child):before{border-top-left-radius:0;border-bottom-left-radius:0}.t-cell[data-range=middle]:not(:last-child):before{border-top-right-radius:0;border-bottom-right-radius:0}.t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:not(:last-child):before{right:-1rem}.t-cell[data-range=start]:after{background:var(--tui-background-accent-1)}.t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end]:not(:first-child):before{left:-1rem}.t-cell[data-range=end]:after{background:var(--tui-background-accent-1);transform:scaleX(-1)}.t-cell[data-range=active]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active]:after{background:var(--tui-background-accent-1);-webkit-mask:none;mask:none}.t-cell_disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today{text-decoration:underline;text-underline-offset:.25rem}@media (hover: hover) and (pointer: fine){.t-cell:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:hover:after,.t-cell[data-range=end]:hover:after,.t-cell[data-range=active]:hover:after{background:var(--tui-background-accent-1-hover)}}:host{display:block;padding-inline-end:1rem;inline-size:15.75rem;padding:0 1.125rem}.t-cell{flex:1;border-block-start-width:.5rem;border-block-end-width:.5rem}
`]
    }]
  }], null, {
    rangeMode: [{
      type: Input
    }],
    disabledItemHandler: [{
      type: Input
    }],
    yearClick: [{
      type: Output
    }],
    initialItemSetter: [{
      type: Input,
      args: [{
        alias: "initialItem",
        transform: (x) => x ?? CURRENT_YEAR
      }]
    }],
    minSetter: [{
      type: Input,
      args: [{
        alias: "min",
        transform: (x) => x ?? MIN_YEAR
      }]
    }],
    maxSetter: [{
      type: Input,
      args: [{
        alias: "max",
        transform: (x) => x ?? MAX_YEAR
      }]
    }],
    valueSetter: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
var TuiCalendar = class _TuiCalendar {
  constructor() {
    this.cdr = inject(ChangeDetectorRef);
    this.day = null;
    this.view = "month";
    this.options = inject(TUI_CALENDAR_SHEET_OPTIONS);
    this.month = TuiMonth.currentLocal();
    this.disabledItemHandler = inject(TUI_ITEMS_HANDLERS).disabledItemHandler();
    this.min = TUI_FIRST_DAY;
    this.max = TUI_LAST_DAY;
    this.minViewedMonth = TUI_FIRST_DAY;
    this.maxViewedMonth = TUI_LAST_DAY;
    this.hoveredItem = null;
    this.showAdjacent = true;
    this.markerHandler = null;
    this.dayClick = new EventEmitter();
    this.monthChange = new EventEmitter();
    this.hoveredItemChange = new EventEmitter();
    this.valueChange = new Subject();
    this.disabledItemHandlerMapper = (disabledItemHandler, min, max) => (item) => item.dayBefore(min) || item.dayAfter(max) || disabledItemHandler(item);
  }
  set value(value) {
    this.cdr.markForCheck();
    this.day = value;
    if (this.showAdjacent && value instanceof TuiDay && value.daySameOrBefore(TUI_LAST_DISPLAYED_DAY)) {
      this.month = value;
    }
  }
  set initialView(view) {
    this.view = view;
  }
  get value() {
    return this.day;
  }
  onPaginationValueChange(month) {
    this.updateViewedMonth(month);
  }
  onDayClick(day) {
    this.dayClick.emit(day);
    this.valueChange.next(day);
  }
  onHoveredItemChange(day) {
    this.updateHoveredDay(day);
  }
  get computedMin() {
    return this.min ?? TUI_FIRST_DAY;
  }
  get computedMax() {
    return this.max ?? TUI_LAST_DAY;
  }
  get computedMinViewedMonth() {
    const min = this.computedMin;
    const minViewed = this.minViewedMonth ?? TUI_FIRST_DAY;
    return minViewed.monthSameOrAfter(min) ? minViewed : min;
  }
  get computedMaxViewedMonth() {
    const max = this.computedMax;
    const maxViewed = this.maxViewedMonth ?? TUI_LAST_DAY;
    return maxViewed.monthSameOrBefore(max) ? maxViewed : max;
  }
  get isInYearView() {
    return this.view === "year";
  }
  onPaginationYearClick() {
    this.view = "year";
  }
  onPickerYearClick(year) {
    this.view = "month";
    this.updateViewedMonth(new TuiMonth(year, this.month.month));
  }
  updateViewedMonth(month) {
    if (this.month.monthSame(month)) {
      return;
    }
    this.month = month;
    this.monthChange.emit(month);
  }
  updateHoveredDay(day) {
    if (tuiNullableSame(this.hoveredItem, day, (a, b) => a.daySame(b))) {
      return;
    }
    this.hoveredItem = day;
    this.hoveredItemChange.emit(day);
  }
  static {
    this.ɵfac = function TuiCalendar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCalendar)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCalendar,
      selectors: [["tui-calendar"]],
      hostBindings: function TuiCalendar_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("pointerdown.prevent.zoneless", function TuiCalendar_pointerdown_prevent_zoneless_HostBindingHandler() {
            return 0;
          });
        }
      },
      inputs: {
        month: "month",
        disabledItemHandler: "disabledItemHandler",
        min: "min",
        max: "max",
        minViewedMonth: "minViewedMonth",
        maxViewedMonth: "maxViewedMonth",
        hoveredItem: "hoveredItem",
        showAdjacent: "showAdjacent",
        markerHandler: "markerHandler",
        value: "value",
        initialView: "initialView"
      },
      outputs: {
        dayClick: "dayClick",
        monthChange: "monthChange",
        hoveredItemChange: "hoveredItemChange"
      },
      features: [ɵɵProvidersFeature([tuiAsAuxiliary(_TuiCalendar)])],
      decls: 3,
      vars: 2,
      consts: [["calendar", ""], ["automation-id", "tui-calendar__scrollbar", "class", "t-scrollbar", 4, "ngIf", "ngIfElse"], ["automation-id", "tui-calendar__scrollbar", 1, "t-scrollbar"], ["automation-id", "tui-calendar__year", 3, "yearClick", "initialItem", "max", "min", "rangeMode", "value"], ["automation-id", "tui-calendar__pagination", 1, "t-pagination", 3, "valueChange", "yearClick", "max", "min", "value"], ["automation-id", "tui-calendar__calendar", 3, "dayClick", "hoveredItemChange", "disabledItemHandler", "hoveredItem", "markerHandler", "month", "showAdjacent", "value"]],
      template: function TuiCalendar_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiCalendar_tui_scrollbar_0_Template, 2, 5, "tui-scrollbar", 1)(1, TuiCalendar_ng_template_1_Template, 3, 14, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const calendar_r4 = ɵɵreference(2);
          ɵɵproperty("ngIf", ctx.isInYearView)("ngIfElse", calendar_r4);
        }
      },
      dependencies: [NgIf, TuiCalendarSheet, TuiCalendarSpin, TuiCalendarYear, TuiMapperPipe, TuiScrollbar],
      styles: ["[_nghost-%COMP%]{display:block;min-block-size:20.25rem;inline-size:18rem;padding:1rem 1.125rem;box-sizing:border-box;flex-shrink:0}tui-dropdown-mobile[_nghost-%COMP%], tui-dropdown-mobile   [_nghost-%COMP%]{inline-size:100%}tui-calendar-year[_ngcontent-%COMP%]{padding:0}.t-scrollbar[_ngcontent-%COMP%]{block-size:18.25rem;inline-size:calc(100% + 1rem)}.t-pagination[_ngcontent-%COMP%]{margin-block-end:1rem}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendar, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-calendar",
      imports: [NgIf, TuiCalendarSheet, TuiCalendarSpin, TuiCalendarYear, TuiMapperPipe, TuiScrollbar],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsAuxiliary(TuiCalendar)],
      host: {
        "(pointerdown.prevent.zoneless)": "0"
      },
      template: '<tui-scrollbar\n    *ngIf="isInYearView; else calendar"\n    automation-id="tui-calendar__scrollbar"\n    class="t-scrollbar"\n>\n    <tui-calendar-year\n        automation-id="tui-calendar__year"\n        [initialItem]="month.year"\n        [max]="computedMax.year"\n        [min]="computedMin.year"\n        [rangeMode]="options.rangeMode"\n        [value]="value"\n        (yearClick)="onPickerYearClick($event)"\n    />\n</tui-scrollbar>\n<ng-template #calendar>\n    <tui-calendar-spin\n        automation-id="tui-calendar__pagination"\n        class="t-pagination"\n        [max]="computedMaxViewedMonth"\n        [min]="computedMinViewedMonth"\n        [value]="month"\n        (valueChange)="onPaginationValueChange($event)"\n        (yearClick)="onPaginationYearClick()"\n    />\n    <tui-calendar-sheet\n        automation-id="tui-calendar__calendar"\n        [disabledItemHandler]="disabledItemHandler | tuiMapper: disabledItemHandlerMapper : computedMin : computedMax"\n        [hoveredItem]="hoveredItem"\n        [markerHandler]="markerHandler"\n        [month]="month"\n        [showAdjacent]="showAdjacent"\n        [value]="value"\n        (dayClick)="onDayClick($event)"\n        (hoveredItemChange)="onHoveredItemChange($event)"\n    />\n</ng-template>\n',
      styles: [":host{display:block;min-block-size:20.25rem;inline-size:18rem;padding:1rem 1.125rem;box-sizing:border-box;flex-shrink:0}:host-context(tui-dropdown-mobile){inline-size:100%}tui-calendar-year{padding:0}.t-scrollbar{block-size:18.25rem;inline-size:calc(100% + 1rem)}.t-pagination{margin-block-end:1rem}\n"]
    }]
  }], null, {
    month: [{
      type: Input
    }],
    disabledItemHandler: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    minViewedMonth: [{
      type: Input
    }],
    maxViewedMonth: [{
      type: Input
    }],
    hoveredItem: [{
      type: Input
    }],
    showAdjacent: [{
      type: Input
    }],
    markerHandler: [{
      type: Input
    }],
    dayClick: [{
      type: Output
    }],
    monthChange: [{
      type: Output
    }],
    hoveredItemChange: [{
      type: Output
    }],
    value: [{
      type: Input
    }],
    initialView: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-auto-focus.mjs
var AbstractTuiAutofocusHandler = class {
  constructor(el, options) {
    this.el = el;
    this.options = options;
  }
  get element() {
    const el = this.el.nativeElement.tagName.includes("-") ? this.el.nativeElement.querySelector(this.options.query) : this.el.nativeElement;
    return el || this.el.nativeElement;
  }
  get isTextFieldElement() {
    return this.element.matches(this.options.query);
  }
};
var TIMEOUT = 1e3;
var NG_ANIMATION_SELECTOR = ".ng-animating";
var TuiDefaultAutofocusHandler = class extends AbstractTuiAutofocusHandler {
  constructor(el, animationFrame$, zone, options) {
    super(el, options);
    this.animationFrame$ = animationFrame$;
    this.zone = zone;
  }
  setFocus() {
    if (this.isTextFieldElement) {
      race(timer(this.options.delay || TIMEOUT), this.animationFrame$.pipe(throttleTime(100, tuiZonefreeScheduler(this.zone)), map(() => this.element.closest(NG_ANIMATION_SELECTOR)), skipWhile(Boolean), take(1))).subscribe(() => this.element.focus({
        preventScroll: this.options.preventScroll
      }));
    } else {
      this.element.focus({
        preventScroll: true
      });
    }
  }
};
var TEXTFIELD_ATTRS = ["type", "inputMode", "autocomplete", "accept", "min", "max", "step", "pattern", "size", "maxlength"];
var TuiIosAutofocusHandler = class extends AbstractTuiAutofocusHandler {
  constructor(el, renderer, zone, win, options) {
    super(el, options);
    this.renderer = renderer;
    this.zone = zone;
    this.win = win;
  }
  setFocus() {
    if (this.isTextFieldElement) {
      this.zone.runOutsideAngular(() => this.iosWebkitAutofocus());
    } else {
      this.element.focus({
        preventScroll: true
      });
    }
  }
  iosWebkitAutofocus() {
    const fakeInput = this.makeFakeInput();
    const duration = this.getDurationTimeBeforeFocus();
    let fakeFocusTimeoutId = 0;
    let elementFocusTimeoutId = 0;
    const blurHandler = () => fakeInput.focus({
      preventScroll: true
    });
    const focusHandler = () => {
      clearTimeout(fakeFocusTimeoutId);
      fakeFocusTimeoutId = this.win.setTimeout(() => {
        clearTimeout(elementFocusTimeoutId);
        fakeInput.removeEventListener("blur", blurHandler);
        fakeInput.removeEventListener("focus", focusHandler);
        elementFocusTimeoutId = this.win.setTimeout(() => {
          this.element.focus({
            preventScroll: this.options.preventScroll
          });
          fakeInput.remove();
        }, duration);
      });
    };
    fakeInput.addEventListener("blur", blurHandler, {
      once: true
    });
    fakeInput.addEventListener("focus", focusHandler);
    if (this.insideDialog()) {
      this.win.document.body.appendChild(fakeInput);
    } else {
      this.element.parentElement?.appendChild(fakeInput);
    }
    fakeInput.focus({
      preventScroll: true
    });
  }
  /**
   * @note:
   * emulate textfield position in layout with cursor
   * before focus to real textfield element
   *
   * required note:
   * [fakeInput.readOnly = true] ~
   * don't use {readOnly: true} value, it's doesn't work for emulate autofill
   *
   * [fakeInput.style.opacity = 0] ~
   * don't use {opacity: 0}, sometimes it's doesn't work for emulate real input
   *
   * [fakeInput.style.fontSize = 16px] ~
   * disable possible auto zoom
   *
   * [fakeInput.style.top/left] ~
   * emulate position cursor before focus to real textfield element
   */
  makeFakeInput() {
    const fakeInput = this.renderer.createElement("input");
    const rect = this.element.getBoundingClientRect();
    this.patchFakeInputFromFocusableElement(fakeInput);
    fakeInput.style.height = tuiPx(rect.height);
    fakeInput.style.width = tuiPx(rect.width / 2);
    fakeInput.style.position = "fixed";
    fakeInput.style.zIndex = "-99999999";
    fakeInput.style.caretColor = "transparent";
    fakeInput.style.border = "none";
    fakeInput.style.outline = "none";
    fakeInput.style.color = "transparent";
    fakeInput.style.background = "transparent";
    fakeInput.style.cursor = "none";
    fakeInput.style.fontSize = tuiPx(16);
    fakeInput.style.top = tuiPx(rect.top);
    fakeInput.style.left = tuiPx(rect.left);
    return fakeInput;
  }
  getDurationTimeBeforeFocus() {
    return parseFloat(this.win.getComputedStyle(this.element).getPropertyValue("--tui-duration")) || 0;
  }
  /**
   * @note:
   * unfortunately, in older versions of iOS
   * there is a bug that the fake input cursor
   * will move along with the dialog animation
   * and then that dialog will be shaking
   */
  insideDialog() {
    return !!this.element.closest("tui-dialog");
  }
  /**
   * @note:
   * inherit basic attributes values from real input
   * for help iOS detect what do you want see on keyboard,
   * for example [inputMode=numeric, autocomplete=cc-number]
   */
  patchFakeInputFromFocusableElement(fakeInput) {
    TEXTFIELD_ATTRS.forEach((attr) => {
      const value = this.element.getAttribute(attr);
      if (tuiIsPresent(value)) {
        fakeInput.setAttribute(attr, value);
      }
    });
  }
};
var [TUI_AUTOFOCUS_OPTIONS, tuiAutoFocusOptionsProvider] = tuiCreateOptions({
  delay: NaN,
  query: "input, textarea, select, [contenteditable]",
  preventScroll: false
});
var TUI_AUTOFOCUS_HANDLER = new InjectionToken(ngDevMode ? "TUI_AUTOFOCUS_HANDLER" : "");
var TUI_AUTOFOCUS_PROVIDERS = [{
  provide: TUI_AUTOFOCUS_HANDLER,
  deps: [ElementRef, WA_ANIMATION_FRAME, Renderer2, NgZone, WA_WINDOW, TUI_IS_IOS, TUI_AUTOFOCUS_OPTIONS],
  // eslint-disable-next-line @typescript-eslint/max-params,max-params
  useFactory: (el, animationFrame$, renderer, zone, win, isIos, options) => isIos ? new TuiIosAutofocusHandler(el, renderer, zone, win, options) : new TuiDefaultAutofocusHandler(el, animationFrame$, zone, options)
}];
var TuiAutoFocus = class _TuiAutoFocus {
  constructor() {
    this.handler = inject(TUI_AUTOFOCUS_HANDLER);
    this.options = inject(TUI_AUTOFOCUS_OPTIONS);
    this.destroyRef = inject(DestroyRef);
  }
  ngAfterViewInit() {
    if (this.autoFocus) {
      this.focus();
    }
  }
  focus() {
    if (Number.isNaN(this.options.delay)) {
      void Promise.resolve().then(() => this.handler.setFocus());
    } else {
      timer(this.options.delay).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.handler.setFocus());
    }
  }
  static {
    this.ɵfac = function TuiAutoFocus_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAutoFocus)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiAutoFocus,
      selectors: [["", "tuiAutoFocus", ""]],
      inputs: {
        autoFocus: [2, "tuiAutoFocus", "autoFocus", coerceBooleanProperty]
      },
      features: [ɵɵProvidersFeature(TUI_AUTOFOCUS_PROVIDERS)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAutoFocus, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiAutoFocus]",
      providers: TUI_AUTOFOCUS_PROVIDERS
    }]
  }], null, {
    autoFocus: [{
      type: Input,
      args: [{
        alias: "tuiAutoFocus",
        transform: coerceBooleanProperty
      }]
    }]
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-focus-trap.mjs
var TuiFocusTrap = class _TuiFocusTrap {
  constructor() {
    this.doc = inject(DOCUMENT);
    this.el = tuiInjectElement();
    this.activeElement = null;
    this.initialized = false;
    Promise.resolve().then(() => {
      this.initialized = true;
      this.activeElement = tuiGetFocused(this.doc);
      this.el.focus();
    });
  }
  ngOnDestroy() {
    this.initialized = false;
    if (tuiIsHTMLElement(this.activeElement)) {
      this.activeElement.focus();
    }
  }
  onFocusIn(node) {
    const {
      firstElementChild
    } = this.el;
    if (!tuiContainsOrAfter(this.el, node) && firstElementChild) {
      tuiGetClosestFocusable({
        initial: firstElementChild,
        root: this.el
      })?.focus();
    }
  }
  static {
    this.ɵfac = function TuiFocusTrap_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFocusTrap)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiFocusTrap,
      selectors: [["", "tuiFocusTrap", ""]],
      hostAttrs: ["tabIndex", "0"],
      hostBindings: function TuiFocusTrap_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("focusin.zoneless", function TuiFocusTrap_focusin_zoneless_HostBindingHandler($event) {
            return ctx.initialized && ctx.onFocusIn($event.target);
          }, ɵɵresolveWindow)("pointerdown", function TuiFocusTrap_pointerdown_HostBindingHandler($event) {
            return $event.currentTarget == null ? null : $event.currentTarget.removeAttribute("tabindex");
          });
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFocusTrap, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiFocusTrap]",
      host: {
        tabIndex: "0",
        "(window:focusin.zoneless)": "initialized && onFocusIn($event.target)",
        // https://bugs.webkit.org/show_bug.cgi?id=303022
        "(pointerdown)": '$event.currentTarget?.removeAttribute("tabindex")'
      }
    }]
  }], function() {
    return [];
  }, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-dialog.mjs
function TuiDialogComponent_header_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r1, " ");
  }
}
function TuiDialogComponent_header_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "header", 6);
    ɵɵtemplate(1, TuiDialogComponent_header_0_ng_container_1_Template, 2, 1, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r1.header)("polymorpheusOutletContext", ctx_r1.context);
  }
}
function TuiDialogComponent_ng_container_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 9)(1, "button", 10);
    ɵɵlistener("click", function TuiDialogComponent_ng_container_4_div_2_Template_button_click_1_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.context.$implicit.complete());
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", (ctx_r1.context.data == null ? null : ctx_r1.context.data.button) || "OK", " ");
  }
}
function TuiDialogComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "div", 7);
    ɵɵtemplate(2, TuiDialogComponent_ng_container_4_div_2_Template, 3, 1, "div", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r4 = ctx.polymorpheusOutlet;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("innerHTML", text_r4, ɵɵsanitizeHtml);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.context.closeable || ctx_r1.context.dismissible);
  }
}
function TuiDialogComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 11);
    ɵɵlistener("click", function TuiDialogComponent_button_6_Template_button_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.close$.next());
    })("mousedown.prevent.zoneless", function TuiDialogComponent_button_6_Template_button_mousedown_prevent_zoneless_0_listener() {
      return 0;
    });
    ɵɵtext(1);
    ɵɵpipe(2, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleProp("border-radius", 100, "%");
    ɵɵproperty("appearance", ctx_r1.isMobile() ? "icon" : "neutral")("iconStart", ctx_r1.icons.close)("size", ctx_r1.isMobile() ? "xs" : "s");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 6, ctx_r1.closeWord$), "\n");
  }
}
function TuiDialogs_section_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiDialogs_section_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "section", 2);
    ɵɵtemplate(1, TuiDialogs_section_1_ng_container_1_Template, 1, 0, "ng-container", 3);
    ɵɵelement(2, "tui-scroll-controls", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    ɵɵattribute("aria-labelledby", item_r1.id);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", item_r1.component)("polymorpheusOutletContext", item_r1);
  }
}
var TUI_DIALOGS = new InjectionToken(ngDevMode ? "TUI_DIALOGS" : "", {
  factory: () => new BehaviorSubject([])
});
var TUI_DIALOG_DEFAULT_OPTIONS = {
  appearance: "",
  size: "m",
  required: false,
  closeable: true,
  dismissible: true,
  label: "",
  header: "",
  data: void 0
};
var TUI_DIALOGS_CLOSE = new InjectionToken(ngDevMode ? "TUI_DIALOGS_CLOSE" : "", {
  factory: () => EMPTY
});
var TUI_DIALOG_OPTIONS = new InjectionToken(ngDevMode ? "TUI_DIALOG_OPTIONS" : "", {
  factory: () => TUI_DIALOG_DEFAULT_OPTIONS
});
function tuiDialogOptionsProvider(options) {
  return tuiProvideOptions(TUI_DIALOG_OPTIONS, options, TUI_DIALOG_DEFAULT_OPTIONS);
}
var SCROLLBAR_PLACEHOLDER = 17;
var TuiDialogCloseService = class _TuiDialogCloseService extends Observable {
  constructor() {
    super((subscriber) => merge(this.esc$, this.mousedown$, tuiCloseWatcher().pipe(tuiZonefull())).subscribe(subscriber));
    this.win = inject(WA_WINDOW);
    this.doc = inject(DOCUMENT);
    this.el = tuiInjectElement();
    this.esc$ = tuiTypedFromEvent(this.doc, "keydown").pipe(filter((event) => {
      const target = tuiGetActualTarget(event);
      return (
        // @ts-ignore
        typeof CloseWatcher === "undefined" && event.key?.toLowerCase() === "escape" && !event.defaultPrevented && (this.el.contains(target) || this.isOutside(target))
      );
    }));
    this.mousedown$ = tuiTypedFromEvent(this.doc, "mousedown").pipe(filter((event) => tuiGetViewportWidth(this.win) - event.clientX > SCROLLBAR_PLACEHOLDER && this.isOutside(tuiGetActualTarget(event))), switchMap(() => tuiTypedFromEvent(this.doc, "mouseup").pipe(take(1), map(tuiGetActualTarget), filter((target) => this.isOutside(target)))));
  }
  isOutside(target) {
    return tuiIsElement(target) && (!tuiContainsOrAfter(this.el, target) || // TODO: Drop 'new' attribute in v5
    target === this.el && !this.el.hasAttribute("new"));
  }
  static {
    this.ɵfac = function TuiDialogCloseService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDialogCloseService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiDialogCloseService,
      factory: _TuiDialogCloseService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogCloseService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var REQUIRED_ERROR = new Error("Required dialog was dismissed");
function toObservable(valueOrStream) {
  return isObservable(valueOrStream) ? valueOrStream : of(valueOrStream);
}
var TuiDialogComponent = class _TuiDialogComponent {
  constructor() {
    this.close$ = new Subject();
    this.context = injectContext();
    this.closeWord$ = inject(TUI_CLOSE_WORD);
    this.icons = inject(TUI_COMMON_ICONS);
    this.from = computed(() => this.size === "fullscreen" || this.size === "page" || this.isMobile() ? "translateY(100vh)" : "translateY(2.5rem)");
    this.isMobile = toSignal(inject(TuiBreakpointService).pipe(map((breakpoint) => breakpoint === "mobile")));
    merge(this.close$.pipe(switchMap(() => toObservable(this.context.closeable))), inject(TuiDialogCloseService).pipe(exhaustMap(() => toObservable(this.context.dismissible).pipe(take(1)))), inject(TUI_DIALOGS_CLOSE).pipe(map(TUI_TRUE_HANDLER))).pipe(filter(Boolean), takeUntilDestroyed()).subscribe(() => {
      this.close();
    });
  }
  get size() {
    return this.context.size;
  }
  get header() {
    return this.context.header;
  }
  close() {
    if (this.context.required) {
      this.context.$implicit.error(REQUIRED_ERROR);
    } else {
      this.context.$implicit.complete();
    }
  }
  static {
    this.ɵfac = function TuiDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDialogComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiDialogComponent,
      selectors: [["tui-dialog"]],
      hostVars: 6,
      hostBindings: function TuiDialogComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-appearance", ctx.context.appearance)("data-size", ctx.size);
          ɵɵstyleProp("--tui-from", ctx.from());
          ɵɵclassProp("_centered", ctx.header);
        }
      },
      features: [ɵɵProvidersFeature([TuiDialogCloseService]), ɵɵHostDirectivesFeature([TuiAnimated])],
      decls: 7,
      vars: 8,
      consts: [["class", "t-header", 4, "ngIf"], [1, "t-content"], [1, "t-heading", 3, "id", "textContent"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-filler"], ["automation-id", "tui-dialog__close", "tuiIconButton", "", "type", "button", "class", "t-close", 3, "appearance", "iconStart", "size", "border-radius", "click", "mousedown.prevent.zoneless", 4, "ngIf"], [1, "t-header"], [3, "innerHTML"], ["class", "t-buttons", 4, "ngIf"], [1, "t-buttons"], ["size", "m", "tuiAutoFocus", "", "tuiButton", "", "type", "button", 3, "click"], ["automation-id", "tui-dialog__close", "tuiIconButton", "", "type", "button", 1, "t-close", 3, "click", "mousedown.prevent.zoneless", "appearance", "iconStart", "size"]],
      template: function TuiDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiDialogComponent_header_0_Template, 2, 2, "header", 0);
          ɵɵelementStart(1, "div", 1);
          ɵɵelement(2, "h2", 2);
          ɵɵelementStart(3, "section");
          ɵɵtemplate(4, TuiDialogComponent_ng_container_4_Template, 3, 2, "ng-container", 3);
          ɵɵelementEnd()();
          ɵɵelement(5, "div", 4);
          ɵɵtemplate(6, TuiDialogComponent_button_6_Template, 3, 8, "button", 5);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.header);
          ɵɵadvance(2);
          ɵɵclassProp("t-heading_closable", ctx.context.closeable && !ctx.header);
          ɵɵproperty("id", ctx.context.id)("textContent", ctx.context.label);
          ɵɵadvance(2);
          ɵɵproperty("polymorpheusOutlet", ctx.context.content)("polymorpheusOutletContext", ctx.context);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.context.closeable);
        }
      },
      dependencies: [AsyncPipe, NgIf, PolymorpheusOutlet, TuiAutoFocus, TuiButton],
      styles: ['[_nghost-%COMP%]{position:relative;display:flex;font:var(--tui-font-text-m);flex-direction:column;box-sizing:border-box;margin:auto;border-radius:1.5rem;border:2.5rem solid transparent}.tui-enter[_nghost-%COMP%], .tui-leave[_nghost-%COMP%]{animation-name:tuiFade,tuiSlide}[_nghost-%COMP%]:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";border-radius:inherit;pointer-events:none;box-shadow:var(--tui-shadow-popup)}[data-size=auto][_nghost-%COMP%]{inline-size:auto}[data-size=s][_nghost-%COMP%]{inline-size:30rem}[data-size=s][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:1.5rem}[data-size=s][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{font:var(--tui-font-heading-5)}[data-size=m][_nghost-%COMP%]{inline-size:42.5rem}[data-size=l][_nghost-%COMP%]{inline-size:55rem}[data-size=fullscreen][_nghost-%COMP%], [data-size=page][_nghost-%COMP%]{min-inline-size:100vw;min-block-size:100%;border-radius:0;border:none;background:var(--tui-background-elevation-1);box-shadow:0 4rem var(--tui-background-elevation-1)}[data-size=fullscreen][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%], [data-size=page][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:3rem calc(50vw - 22.5rem)}[data-size=fullscreen][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%], [data-size=page][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{font:var(--tui-font-heading-3)}._centered[_nghost-%COMP%]{text-align:center}[_nghost-%COMP%]   tui-root._mobile[data-size][_nghost-%COMP%], tui-root._mobile   [data-size][_nghost-%COMP%]{min-inline-size:100%;inline-size:100%;max-inline-size:100%;border-radius:0;border:none;margin:auto 0 0;background:var(--tui-background-elevation-1);padding-block-end:env(safe-area-inset-bottom)}[_nghost-%COMP%]   tui-root._mobile[data-size][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%], tui-root._mobile   [data-size][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:1rem}[_nghost-%COMP%]   tui-root._mobile[data-size][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%], tui-root._mobile   [data-size][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{font:var(--tui-font-heading-5)}[_nghost-%COMP%]   tui-root._mobile[data-size=fullscreen][_nghost-%COMP%], tui-root._mobile   [data-size=fullscreen][_nghost-%COMP%], [_nghost-%COMP%]   tui-root._mobile[data-size=page][_nghost-%COMP%], tui-root._mobile   [data-size=page][_nghost-%COMP%]{padding:env(safe-area-inset-top) 0 env(safe-area-inset-bottom)}[_nghost-%COMP%]   tui-root._mobile[data-size=fullscreen][_nghost-%COMP%]   .t-close[_ngcontent-%COMP%], tui-root._mobile   [data-size=fullscreen][_nghost-%COMP%]   .t-close[_ngcontent-%COMP%], [_nghost-%COMP%]   tui-root._mobile[data-size=page][_nghost-%COMP%]   .t-close[_ngcontent-%COMP%], tui-root._mobile   [data-size=page][_nghost-%COMP%]   .t-close[_ngcontent-%COMP%]{top:max(1rem,env(safe-area-inset-top))}[data-size=page][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%], tui-root._mobile   [data-size=page][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:0}.t-heading[_ngcontent-%COMP%]{margin:0 0 .5rem;overflow-wrap:break-word;font:var(--tui-font-heading-4)}.t-heading_closable[_ngcontent-%COMP%]{padding-inline-end:2rem}.t-heading[_ngcontent-%COMP%]:empty{display:none}.t-header[_ngcontent-%COMP%]{display:flex;border-top-left-radius:inherit;border-top-right-radius:inherit;overflow:hidden}[data-size=fullscreen][_nghost-%COMP%]   tui-root._mobile[_nghost-%COMP%]   .t-header[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{flex:1}.t-content[_ngcontent-%COMP%]{border-radius:inherit;padding:1.75rem;background:var(--tui-background-elevation-1)}.t-content[_ngcontent-%COMP%]:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.t-content[_ngcontent-%COMP%] > section[_ngcontent-%COMP%]{border-radius:inherit}.t-filler[_ngcontent-%COMP%]{flex-grow:1}.t-close[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:1rem;right:1rem}@supports (inset-inline-end: 0){.t-close[_ngcontent-%COMP%]{right:unset;inset-inline-end:1rem}}.t-buttons[_ngcontent-%COMP%]{margin-block-start:1.25rem;text-align:end}']
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-dialog",
      imports: [AsyncPipe, NgIf, PolymorpheusOutlet, TuiAutoFocus, TuiButton],
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [TuiDialogCloseService],
      hostDirectives: [TuiAnimated],
      host: {
        "[attr.data-appearance]": "context.appearance",
        "[attr.data-size]": "size",
        "[class._centered]": "header",
        "[style.--tui-from]": "from()"
      },
      template: `<header
    *ngIf="header"
    class="t-header"
>
    <ng-container *polymorpheusOutlet="header as text; context: context">
        {{ text }}
    </ng-container>
</header>
<div class="t-content">
    <h2
        class="t-heading"
        [class.t-heading_closable]="context.closeable && !header"
        [id]="context.id"
        [textContent]="context.label"
    ></h2>
    <section>
        <ng-container *polymorpheusOutlet="context.content as text; context: context">
            <div [innerHTML]="text"></div>
            <div
                *ngIf="context.closeable || context.dismissible"
                class="t-buttons"
            >
                <button
                    size="m"
                    tuiAutoFocus
                    tuiButton
                    type="button"
                    (click)="context.$implicit.complete()"
                >
                    {{ context.data?.button || 'OK' }}
                </button>
            </div>
        </ng-container>
    </section>
</div>
<div class="t-filler"></div>

<!-- Close button is insensitive to \`context.closeable === Observable<false>\` by design -->
<button
    *ngIf="context.closeable"
    automation-id="tui-dialog__close"
    tuiIconButton
    type="button"
    class="t-close"
    [appearance]="isMobile() ? 'icon' : 'neutral'"
    [iconStart]="icons.close"
    [size]="isMobile() ? 'xs' : 's'"
    [style.border-radius.%]="100"
    (click)="close$.next()"
    (mousedown.prevent.zoneless)="(0)"
>
    {{ closeWord$ | async }}
</button>
`,
      styles: [':host{position:relative;display:flex;font:var(--tui-font-text-m);flex-direction:column;box-sizing:border-box;margin:auto;border-radius:1.5rem;border:2.5rem solid transparent}:host.tui-enter,:host.tui-leave{animation-name:tuiFade,tuiSlide}:host:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";border-radius:inherit;pointer-events:none;box-shadow:var(--tui-shadow-popup)}:host[data-size=auto]{inline-size:auto}:host[data-size=s]{inline-size:30rem}:host[data-size=s] .t-content{padding:1.5rem}:host[data-size=s] .t-heading{font:var(--tui-font-heading-5)}:host[data-size=m]{inline-size:42.5rem}:host[data-size=l]{inline-size:55rem}:host[data-size=fullscreen],:host[data-size=page]{min-inline-size:100vw;min-block-size:100%;border-radius:0;border:none;background:var(--tui-background-elevation-1);box-shadow:0 4rem var(--tui-background-elevation-1)}:host[data-size=fullscreen] .t-content,:host[data-size=page] .t-content{padding:3rem calc(50vw - 22.5rem)}:host[data-size=fullscreen] .t-heading,:host[data-size=page] .t-heading{font:var(--tui-font-heading-3)}:host._centered{text-align:center}:host :host-context(tui-root._mobile)[data-size]{min-inline-size:100%;inline-size:100%;max-inline-size:100%;border-radius:0;border:none;margin:auto 0 0;background:var(--tui-background-elevation-1);padding-block-end:env(safe-area-inset-bottom)}:host :host-context(tui-root._mobile)[data-size] .t-content{padding:1rem}:host :host-context(tui-root._mobile)[data-size] .t-heading{font:var(--tui-font-heading-5)}:host :host-context(tui-root._mobile)[data-size=fullscreen],:host :host-context(tui-root._mobile)[data-size=page]{padding:env(safe-area-inset-top) 0 env(safe-area-inset-bottom)}:host :host-context(tui-root._mobile)[data-size=fullscreen] .t-close,:host :host-context(tui-root._mobile)[data-size=page] .t-close{top:max(1rem,env(safe-area-inset-top))}:host[data-size=page] .t-content,:host-context(tui-root._mobile) :host[data-size=page] .t-content{padding:0}.t-heading{margin:0 0 .5rem;overflow-wrap:break-word;font:var(--tui-font-heading-4)}.t-heading_closable{padding-inline-end:2rem}.t-heading:empty{display:none}.t-header{display:flex;border-top-left-radius:inherit;border-top-right-radius:inherit;overflow:hidden}:host[data-size=fullscreen] :host-context(tui-root._mobile) .t-header{flex:1}.t-content{border-radius:inherit;padding:1.75rem;background:var(--tui-background-elevation-1)}.t-content:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.t-content>section{border-radius:inherit}.t-filler{flex-grow:1}.t-close{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:1rem;right:1rem}@supports (inset-inline-end: 0){.t-close{right:unset;inset-inline-end:1rem}}.t-buttons{margin-block-start:1.25rem;text-align:end}\n']
    }]
  }], function() {
    return [];
  }, null);
})();
var TuiDialogService = class _TuiDialogService extends TuiPopoverService {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiDialogService_BaseFactory;
      return function TuiDialogService_Factory(__ngFactoryType__) {
        return (ɵTuiDialogService_BaseFactory || (ɵTuiDialogService_BaseFactory = ɵɵgetInheritedFactory(_TuiDialogService)))(__ngFactoryType__ || _TuiDialogService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiDialogService,
      factory: () => (() => new _TuiDialogService(TUI_DIALOGS, TuiDialogComponent, inject(TUI_DIALOG_OPTIONS)))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogService, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => new TuiDialogService(TUI_DIALOGS, TuiDialogComponent, inject(TUI_DIALOG_OPTIONS))
    }]
  }], null, null);
})();
var TuiDialog = class _TuiDialog extends TuiPopoverDirective {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiDialog_BaseFactory;
      return function TuiDialog_Factory(__ngFactoryType__) {
        return (ɵTuiDialog_BaseFactory || (ɵTuiDialog_BaseFactory = ɵɵgetInheritedFactory(_TuiDialog)))(__ngFactoryType__ || _TuiDialog);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDialog,
      selectors: [["ng-template", "tuiDialog", ""]],
      inputs: {
        options: [0, "tuiDialogOptions", "options"],
        open: [0, "tuiDialog", "open"]
      },
      outputs: {
        openChange: "tuiDialogChange"
      },
      features: [ɵɵProvidersFeature([tuiAsPopover(TuiDialogService)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialog, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiDialog]",
      inputs: ["options: tuiDialogOptions", "open: tuiDialog"],
      outputs: ["openChange: tuiDialogChange"],
      providers: [tuiAsPopover(TuiDialogService)]
    }]
  }], null, null);
})();
function tuiDialog(component, _a = {}) {
  var _b = _a, {
    injector
  } = _b, options = __objRest(_b, [
    "injector"
  ]);
  if (!injector) {
    assertInInjectionContext(tuiDialog);
    injector = inject(INJECTOR$1);
  }
  const dialogService = injector.get(TuiDialogService);
  return (data) => dialogService.open(new PolymorpheusComponent(component, injector), __spreadProps(__spreadValues({}, options), {
    data
  }));
}
var TuiActiveZoneAdapter = class _TuiActiveZoneAdapter {
  constructor() {
    this.current = inject(TuiActiveZone);
    this.parent = findActive(inject(TuiActiveZone, {
      skipSelf: true
    }), tuiGetFocused(inject(DOCUMENT)));
  }
  ngOnInit() {
    this.current.tuiActiveZoneParentSetter = this.parent;
  }
  ngOnDestroy() {
    this.current.tuiActiveZoneParentSetter = null;
  }
  static {
    this.ɵfac = function TuiActiveZoneAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiActiveZoneAdapter)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiActiveZoneAdapter,
      selectors: [["", "tuiActiveZoneAdapter", ""]],
      features: [ɵɵHostDirectivesFeature([TuiActiveZone])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiActiveZoneAdapter, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiActiveZoneAdapter]",
      hostDirectives: [TuiActiveZone]
    }]
  }], null, null);
})();
function findActive(zone, element) {
  if (!element || !zone.contains(element)) {
    return null;
  }
  const active = zone.children.find((child) => child.contains(element));
  return active ? findActive(active, element) : zone;
}
var TuiDialogs = class _TuiDialogs {
  constructor() {
    this.dialogs = toSignal(inject(TUI_DIALOGS), {
      initialValue: []
    });
  }
  static {
    this.ɵfac = function TuiDialogs_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDialogs)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiDialogs,
      selectors: [["tui-dialogs"]],
      decls: 2,
      vars: 3,
      consts: [[1, "t-overlay"], ["aria-modal", "true", "role", "dialog", "tuiActiveZoneAdapter", "", "tuiAnimatedParent", "", "tuiFocusTrap", "", "tuiScrollRef", "", "class", "t-dialog", 4, "ngFor", "ngForOf"], ["aria-modal", "true", "role", "dialog", "tuiActiveZoneAdapter", "", "tuiAnimatedParent", "", "tuiFocusTrap", "", "tuiScrollRef", "", 1, "t-dialog"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-scrollbars"]],
      template: function TuiDialogs_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "div", 0);
          ɵɵtemplate(1, TuiDialogs_section_1_Template, 3, 3, "section", 1);
        }
        if (rf & 2) {
          ɵɵclassProp("t-overlay_visible", ctx.dialogs().length);
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.dialogs());
        }
      },
      dependencies: [NgForOf, PolymorpheusOutlet, TuiActiveZoneAdapter, TuiAnimatedParent, TuiFocusTrap, TuiScrollControls, TuiScrollRef],
      styles: ['[_nghost-%COMP%]{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;scrollbar-width:none;-ms-overflow-style:none;pointer-events:none;overflow:hidden;overscroll-behavior:none;overflow-wrap:break-word;margin-block-start:var(--t-root-top)}[_nghost-%COMP%]::-webkit-scrollbar, [_nghost-%COMP%]::-webkit-scrollbar-thumb{display:none}[_nghost-%COMP%]:has(section){pointer-events:auto;overflow:auto}[_nghost-%COMP%]:has(section:only-of-type     tui-dialog[new][data-appearance~=fullscreen])>.t-overlay, [_nghost-%COMP%]:has(section:only-of-type     tui-notification-middle)>.t-overlay{opacity:0}[_nghost-%COMP%]:before{content:"";display:block;block-size:200%}.t-overlay[_ngcontent-%COMP%], .t-dialog[_ngcontent-%COMP%]{transition-property:filter;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;scrollbar-width:none;-ms-overflow-style:none;position:fixed;top:0;left:0;bottom:0;right:0;display:flex;block-size:100%;align-items:flex-start;outline:none;overflow:auto}.t-overlay[_ngcontent-%COMP%]::-webkit-scrollbar, .t-dialog[_ngcontent-%COMP%]::-webkit-scrollbar, .t-overlay[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .t-dialog[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{display:none}.t-dialog[_ngcontent-%COMP%]{position:sticky;overscroll-behavior:none;filter:brightness(.25)}.t-dialog[_ngcontent-%COMP%]:has(tui-dialog[new]){display:grid;place-items:center}.t-dialog[_ngcontent-%COMP%]    >.tui-enter+.t-scrollbars .t-bar_vertical, .t-dialog[_ngcontent-%COMP%]    >.tui-leave+.t-scrollbars .t-bar_vertical{display:none}.t-overlay[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;background:var(--tui-service-backdrop);-webkit-backdrop-filter:var(--tui-backdrop, none);backdrop-filter:var(--tui-backdrop, none);opacity:0;transition-timing-function:ease-in}.t-overlay_visible[_ngcontent-%COMP%]{opacity:1;transition-timing-function:ease-out}.t-dialog[_ngcontent-%COMP%]:last-child{pointer-events:auto;filter:none}tui-root:has(tui-dropdown-mobile._sheet)[_nghost-%COMP%]   .t-dialog[_ngcontent-%COMP%]:last-child, tui-root:has(tui-dropdown-mobile._sheet)   [_nghost-%COMP%]   .t-dialog[_ngcontent-%COMP%]:last-child{filter:brightness(.5)}.t-scrollbars[_ngcontent-%COMP%]{position:fixed;top:0;left:0;bottom:0;right:0;margin:0;color:#747474}.t-scrollbars[_ngcontent-%COMP%]     .t-bar_horizontal, .t-scrollbars[_ngcontent-%COMP%]     .t-bar_vertical .t-thumb[style*="height: 100%"]{display:none}']
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogs, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-dialogs",
      imports: [NgForOf, PolymorpheusOutlet, TuiActiveZoneAdapter, TuiAnimatedParent, TuiFocusTrap, TuiScrollControls, TuiScrollRef],
      changeDetection: ChangeDetectionStrategy.Default,
      template: '<div\n    class="t-overlay"\n    [class.t-overlay_visible]="dialogs().length"\n></div>\n<!--TODO: Rename to <article> in v5-->\n<section\n    *ngFor="let item of dialogs()"\n    aria-modal="true"\n    role="dialog"\n    tuiActiveZoneAdapter\n    tuiAnimatedParent\n    tuiFocusTrap\n    tuiScrollRef\n    class="t-dialog"\n    [attr.aria-labelledby]="item.id"\n>\n    <ng-container *polymorpheusOutlet="item.component; context: item" />\n    <tui-scroll-controls class="t-scrollbars" />\n</section>\n',
      styles: [':host{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;scrollbar-width:none;-ms-overflow-style:none;pointer-events:none;overflow:hidden;overscroll-behavior:none;overflow-wrap:break-word;margin-block-start:var(--t-root-top)}:host::-webkit-scrollbar,:host::-webkit-scrollbar-thumb{display:none}:host:has(section){pointer-events:auto;overflow:auto}:host:has(section:only-of-type ::ng-deep tui-dialog[new][data-appearance~=fullscreen])>.t-overlay,:host:has(section:only-of-type ::ng-deep tui-notification-middle)>.t-overlay{opacity:0}:host:before{content:"";display:block;block-size:200%}.t-overlay,.t-dialog{transition-property:filter;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;scrollbar-width:none;-ms-overflow-style:none;position:fixed;top:0;left:0;bottom:0;right:0;display:flex;block-size:100%;align-items:flex-start;outline:none;overflow:auto}.t-overlay::-webkit-scrollbar,.t-dialog::-webkit-scrollbar,.t-overlay::-webkit-scrollbar-thumb,.t-dialog::-webkit-scrollbar-thumb{display:none}.t-dialog{position:sticky;overscroll-behavior:none;filter:brightness(.25)}.t-dialog:has(tui-dialog[new]){display:grid;place-items:center}.t-dialog ::ng-deep>.tui-enter+.t-scrollbars .t-bar_vertical,.t-dialog ::ng-deep>.tui-leave+.t-scrollbars .t-bar_vertical{display:none}.t-overlay{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;background:var(--tui-service-backdrop);-webkit-backdrop-filter:var(--tui-backdrop, none);backdrop-filter:var(--tui-backdrop, none);opacity:0;transition-timing-function:ease-in}.t-overlay_visible{opacity:1;transition-timing-function:ease-out}.t-dialog:last-child{pointer-events:auto;filter:none}:host-context(tui-root:has(tui-dropdown-mobile._sheet)) .t-dialog:last-child{filter:brightness(.5)}.t-scrollbars{position:fixed;top:0;left:0;bottom:0;right:0;margin:0;color:#747474}.t-scrollbars ::ng-deep .t-bar_horizontal,.t-scrollbars ::ng-deep .t-bar_vertical .t-thumb[style*="height: 100%"]{display:none}\n']
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-error.mjs
var _c03 = () => ({});
function TuiError_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r1, " ");
  }
}
function TuiError_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, TuiError_div_0_ng_container_1_Template, 2, 1, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r1.error.message || ctx_r1.default())("polymorpheusOutletContext", ctx_r1.error.context || ɵɵpureFunction0(2, _c03));
  }
}
var TuiError = class _TuiError {
  constructor() {
    this.options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
    this.error = null;
    this.visible = true;
    this.default = toSignal(inject(TUI_DEFAULT_ERROR_MESSAGE));
  }
  set errorSetter(error) {
    this.error = tuiIsString(error) ? new TuiValidationError(error) : error;
  }
  static {
    this.ɵfac = function TuiError_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiError)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiError,
      selectors: [["tui-error"]],
      hostVars: 2,
      hostBindings: function TuiError_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("_error", ctx.error);
        }
      },
      inputs: {
        errorSetter: [0, "error", "errorSetter"]
      },
      decls: 1,
      vars: 1,
      consts: [["automation-id", "tui-error__text", "tuiAnimated", "", "class", "t-message-text", 4, "ngIf"], ["automation-id", "tui-error__text", "tuiAnimated", "", 1, "t-message-text"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
      template: function TuiError_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiError_div_0_Template, 2, 3, "div", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.error);
        }
      },
      dependencies: [NgIf, PolymorpheusOutlet, TuiAnimated],
      styles: ['[_nghost-%COMP%]{transition-property:grid-template-rows;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:grid;font:var(--tui-font-text-s);color:var(--tui-text-negative);overflow-wrap:break-word;grid-template-rows:0fr}._error[_nghost-%COMP%]{grid-template-rows:1fr}.t-message-text[_ngcontent-%COMP%]{white-space:pre-line;grid-row:1 / span 2;overflow:hidden}.t-message-text.tui-enter[_ngcontent-%COMP%], .t-message-text.tui-leave[_ngcontent-%COMP%]{animation-name:tuiFade}.t-message-text[_ngcontent-%COMP%]:before{content:"";line-height:1.5rem;vertical-align:bottom}'],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiError, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-error",
      imports: [NgIf, PolymorpheusOutlet, TuiAnimated],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class._error]": "error"
      },
      template: '<div\n    *ngIf="error"\n    automation-id="tui-error__text"\n    tuiAnimated\n    class="t-message-text"\n>\n    <ng-container *polymorpheusOutlet="error.message || default() as text; context: error.context || {}">\n        {{ text }}\n    </ng-container>\n</div>\n',
      styles: [':host{transition-property:grid-template-rows;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:grid;font:var(--tui-font-text-s);color:var(--tui-text-negative);overflow-wrap:break-word;grid-template-rows:0fr}:host._error{grid-template-rows:1fr}.t-message-text{white-space:pre-line;grid-row:1 / span 2;overflow:hidden}.t-message-text.tui-enter,.t-message-text.tui-leave{animation-name:tuiFade}.t-message-text:before{content:"";line-height:1.5rem;vertical-align:bottom}\n']
    }]
  }], null, {
    errorSetter: [{
      type: Input,
      args: ["error"]
    }]
  });
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-loader.mjs
var _c04 = ["*"];
function TuiLoader_div_2_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r1, " ");
  }
}
function TuiLoader_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtemplate(1, TuiLoader_div_2_div_3_ng_container_1_Template, 2, 1, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassProp("t-text_horizontal", ctx_r1.isHorizontal);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r1.textContent);
  }
}
function TuiLoader_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 3);
    ɵɵelement(2, "circle", 4);
    ɵɵelementEnd();
    ɵɵtemplate(3, TuiLoader_div_2_div_3_Template, 2, 3, "div", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("t-loader_horizontal", ctx_r1.isHorizontal)("t-loader_inherit-color", ctx_r1.inheritColor);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r1.textContent);
  }
}
var TUI_LOADER_DEFAULT_OPTIONS = {
  size: "m",
  inheritColor: false,
  overlay: false
};
var TUI_LOADER_OPTIONS = new InjectionToken(ngDevMode ? "TUI_LOADER_OPTIONS" : "", {
  factory: () => TUI_LOADER_DEFAULT_OPTIONS
});
function tuiLoaderOptionsProvider(options) {
  return tuiProvideOptions(TUI_LOADER_OPTIONS, options, TUI_LOADER_DEFAULT_OPTIONS);
}
var TuiLoader = class _TuiLoader {
  constructor() {
    this.isIOS = inject(TUI_IS_IOS);
    this.options = inject(TUI_LOADER_OPTIONS);
    this.isApple = tuiIsSafari(tuiInjectElement()) || this.isIOS;
    this.size = this.options.size;
    this.inheritColor = this.options.inheritColor;
    this.overlay = this.options.overlay;
    this.loading = true;
  }
  get isHorizontal() {
    return !tuiSizeBigger(this.size);
  }
  static {
    this.ɵfac = function TuiLoader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLoader)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiLoader,
      selectors: [["tui-loader"]],
      hostVars: 3,
      hostBindings: function TuiLoader_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
          ɵɵclassProp("_loading", ctx.loading);
        }
      },
      inputs: {
        size: "size",
        inheritColor: "inheritColor",
        overlay: "overlay",
        textContent: "textContent",
        loading: [0, "showLoader", "loading"]
      },
      ngContentSelectors: _c04,
      decls: 3,
      vars: 7,
      consts: [[1, "t-content", 3, "disabled"], ["class", "t-loader", 3, "t-loader_horizontal", "t-loader_inherit-color", 4, "ngIf"], [1, "t-loader"], ["automation-id", "tui-loader__loader", "focusable", "false", "height", "100%", "width", "100%", 1, "t-icon"], ["cx", "50%", "cy", "50%", 1, "t-circle"], ["automation-id", "tui-loader__text", "class", "t-text", 3, "t-text_horizontal", 4, "ngIf"], ["automation-id", "tui-loader__text", 1, "t-text"], [4, "polymorpheusOutlet"]],
      template: function TuiLoader_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "fieldset", 0);
          ɵɵprojection(1);
          ɵɵelementEnd();
          ɵɵtemplate(2, TuiLoader_div_2_Template, 4, 5, "div", 1);
        }
        if (rf & 2) {
          ɵɵclassProp("t-content_has-overlay", ctx.overlay && ctx.loading)("t-content_loading", ctx.loading);
          ɵɵproperty("disabled", ctx.loading && !ctx.isApple);
          ɵɵattribute("inert", ctx.loading || null);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.loading);
        }
      },
      dependencies: [NgIf, PolymorpheusOutlet],
      styles: ["[_nghost-%COMP%]{position:relative;display:flex;min-inline-size:1.5rem;--tui-thickness: calc(var(--t-diameter) / 12)}._loading[_nghost-%COMP%]{overflow:hidden}[data-size=xs][_nghost-%COMP%]{--t-diameter: .75em}[data-size=s][_nghost-%COMP%]{--t-diameter: 1em}[data-size=m][_nghost-%COMP%]{--t-diameter: 1.5em}[data-size=l][_nghost-%COMP%]{--t-diameter: 2.5em}[data-size=xl][_nghost-%COMP%]{--t-diameter: 3.5em}[data-size=xxl][_nghost-%COMP%]{--t-diameter: 5em}.t-content[_ngcontent-%COMP%]{z-index:0;min-inline-size:100%;block-size:100%;padding:0;margin:0;border:none}.t-content_has-overlay[_ngcontent-%COMP%]{opacity:.3}.t-content_loading[_ngcontent-%COMP%]{pointer-events:none}.t-loader[_ngcontent-%COMP%]{position:relative;left:-100%;display:flex;inset-inline-start:-100%;flex-direction:column;align-items:center;justify-content:center;min-inline-size:100%;min-block-size:var(--t-diameter);flex-shrink:0;align-self:center;color:var(--tui-text-primary);stroke:var(--tui-background-accent-1);animation:tuiFadeIn var(--tui-duration);font-size:1rem}.t-loader.t-loader_horizontal[_ngcontent-%COMP%]{flex-direction:row}.t-loader.t-loader_inherit-color[_ngcontent-%COMP%]{color:inherit;stroke:currentColor}.t-text[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font:var(--tui-font-text-s);margin-block-start:1rem;color:inherit;max-inline-size:100%;text-align:center;stroke-width:0}.t-text_horizontal[_ngcontent-%COMP%]{margin:0;margin-inline-start:1rem}@keyframes _ngcontent-%COMP%_tuiLoaderRotate{0%{transform:rotate(-90deg)}50%{transform:rotate(-90deg) rotate(1turn)}to{transform:rotate(-90deg) rotate(3turn)}}.t-icon[_ngcontent-%COMP%]{display:block;inline-size:var(--t-diameter);block-size:var(--t-diameter);margin:0 calc(var(--t-diameter) / -2);border-radius:100%;overflow:hidden;animation:_ngcontent-%COMP%_tuiLoaderRotate 4s linear infinite}@supports (-webkit-hyphens: none){.t-icon[_ngcontent-%COMP%]{overflow:visible}}@keyframes _ngcontent-%COMP%_tuiLoaderDashOffset{0%{stroke-dashoffset:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)))}50%{stroke-dashoffset:calc(.05 * calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness))))}to{stroke-dashoffset:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)))}}.t-circle[_ngcontent-%COMP%]{r:calc(var(--t-diameter) / 2 - var(--tui-thickness));stroke-dasharray:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)));fill:none;stroke:inherit;stroke-width:max(var(--tui-thickness),1.5px);animation:_ngcontent-%COMP%_tuiLoaderDashOffset 4s linear infinite}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLoader, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-loader",
      imports: [NgIf, PolymorpheusOutlet],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class._loading]": "loading",
        "[attr.data-size]": "size"
      },
      template: '<fieldset\n    class="t-content"\n    [attr.inert]="loading || null"\n    [class.t-content_has-overlay]="overlay && loading"\n    [class.t-content_loading]="loading"\n    [disabled]="loading && !isApple"\n>\n    <ng-content />\n</fieldset>\n\n<div\n    *ngIf="loading"\n    class="t-loader"\n    [class.t-loader_horizontal]="isHorizontal"\n    [class.t-loader_inherit-color]="inheritColor"\n>\n    <svg\n        automation-id="tui-loader__loader"\n        focusable="false"\n        height="100%"\n        width="100%"\n        class="t-icon"\n    >\n        <circle\n            cx="50%"\n            cy="50%"\n            class="t-circle"\n        />\n    </svg>\n\n    <div\n        *ngIf="textContent"\n        automation-id="tui-loader__text"\n        class="t-text"\n        [class.t-text_horizontal]="isHorizontal"\n    >\n        <ng-container *polymorpheusOutlet="textContent as text">\n            {{ text }}\n        </ng-container>\n    </div>\n</div>\n',
      styles: [":host{position:relative;display:flex;min-inline-size:1.5rem;--tui-thickness: calc(var(--t-diameter) / 12)}:host._loading{overflow:hidden}:host[data-size=xs]{--t-diameter: .75em}:host[data-size=s]{--t-diameter: 1em}:host[data-size=m]{--t-diameter: 1.5em}:host[data-size=l]{--t-diameter: 2.5em}:host[data-size=xl]{--t-diameter: 3.5em}:host[data-size=xxl]{--t-diameter: 5em}.t-content{z-index:0;min-inline-size:100%;block-size:100%;padding:0;margin:0;border:none}.t-content_has-overlay{opacity:.3}.t-content_loading{pointer-events:none}.t-loader{position:relative;left:-100%;display:flex;inset-inline-start:-100%;flex-direction:column;align-items:center;justify-content:center;min-inline-size:100%;min-block-size:var(--t-diameter);flex-shrink:0;align-self:center;color:var(--tui-text-primary);stroke:var(--tui-background-accent-1);animation:tuiFadeIn var(--tui-duration);font-size:1rem}.t-loader.t-loader_horizontal{flex-direction:row}.t-loader.t-loader_inherit-color{color:inherit;stroke:currentColor}.t-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font:var(--tui-font-text-s);margin-block-start:1rem;color:inherit;max-inline-size:100%;text-align:center;stroke-width:0}.t-text_horizontal{margin:0;margin-inline-start:1rem}@keyframes tuiLoaderRotate{0%{transform:rotate(-90deg)}50%{transform:rotate(-90deg) rotate(1turn)}to{transform:rotate(-90deg) rotate(3turn)}}.t-icon{display:block;inline-size:var(--t-diameter);block-size:var(--t-diameter);margin:0 calc(var(--t-diameter) / -2);border-radius:100%;overflow:hidden;animation:tuiLoaderRotate 4s linear infinite}@supports (-webkit-hyphens: none){.t-icon{overflow:visible}}@keyframes tuiLoaderDashOffset{0%{stroke-dashoffset:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)))}50%{stroke-dashoffset:calc(.05 * calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness))))}to{stroke-dashoffset:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)))}}.t-circle{r:calc(var(--t-diameter) / 2 - var(--tui-thickness));stroke-dasharray:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)));fill:none;stroke:inherit;stroke-width:max(var(--tui-thickness),1.5px);animation:tuiLoaderDashOffset 4s linear infinite}\n"]
    }]
  }], null, {
    size: [{
      type: Input
    }],
    inheritColor: [{
      type: Input
    }],
    overlay: [{
      type: Input
    }],
    textContent: [{
      type: Input
    }],
    loading: [{
      type: Input,
      args: ["showLoader"]
    }]
  });
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-expand.mjs
var _c05 = ["wrapper"];
var _c1 = ["*"];
function TuiExpandComponent_ng_container_2_tui_loader_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tui-loader", 4);
    ɵɵelementContainer(1, 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("overlay", true)("showLoader", ctx_r0.loading);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.content);
  }
}
function TuiExpandComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵprojection(1);
    ɵɵtemplate(2, TuiExpandComponent_ng_container_2_tui_loader_2_Template, 2, 3, "tui-loader", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.async)("ngIfElse", ctx_r0.content);
  }
}
var TuiExpandContent = class _TuiExpandContent {
  static {
    this.ɵfac = function TuiExpandContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiExpandContent)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiExpandContent,
      selectors: [["", "tuiExpandContent", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiExpandContent, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiExpandContent]"
    }]
  }], null, null);
})();
var State = {
  Idle: 0,
  Loading: 1,
  Prepared: 2,
  Animated: 3
};
var LOADER_HEIGHT = 48;
var TUI_EXPAND_LOADED = "tui-expand-loaded";
var TuiExpandComponent = class _TuiExpandComponent {
  constructor() {
    this.cdr = inject(ChangeDetectorRef);
    this.destroyRef = inject(DestroyRef);
    this.state = State.Idle;
    this.content = null;
    this.expanded = null;
    this.async = false;
  }
  set expandedSetter(expanded) {
    if (this.expanded === null) {
      this.expanded = expanded;
      return;
    }
    if (this.state !== State.Idle) {
      this.expanded = expanded;
      this.state = State.Animated;
      return;
    }
    this.expanded = expanded;
    this.retrigger(this.async && expanded ? State.Loading : State.Animated);
  }
  get contentVisible() {
    return this.expanded || this.state !== State.Idle;
  }
  get overflow() {
    return this.state !== State.Idle;
  }
  get loading() {
    return !!this.expanded && this.async && this.state === State.Loading;
  }
  get height() {
    const {
      expanded,
      state: state2,
      contentWrapper
    } = this;
    if (expanded && state2 === State.Prepared || !expanded && state2 === State.Animated) {
      return 0;
    }
    if (contentWrapper && (!expanded && state2 === State.Prepared || expanded && state2 === State.Animated)) {
      return contentWrapper.nativeElement.offsetHeight;
    }
    if (contentWrapper && expanded && state2 === State.Loading) {
      return Math.max(contentWrapper.nativeElement.offsetHeight, LOADER_HEIGHT);
    }
    return null;
  }
  onTransitionEnd({
    propertyName,
    pseudoElement
  }) {
    if (propertyName === "opacity" && !pseudoElement && this.state === State.Animated) {
      this.state = State.Idle;
    }
  }
  onExpandLoaded(event) {
    event.stopPropagation();
    if (this.state === State.Loading) {
      this.retrigger(State.Animated);
    }
  }
  retrigger(state2) {
    this.state = State.Prepared;
    timer(0).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      if (this.state !== State.Prepared) {
        return;
      }
      this.state = state2;
      this.cdr.markForCheck();
    });
  }
  static {
    this.ɵfac = function TuiExpandComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiExpandComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiExpandComponent,
      selectors: [["tui-expand"]],
      contentQueries: function TuiExpandComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiExpandContent, 5, TemplateRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t.first);
        }
      },
      viewQuery: function TuiExpandComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c05, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentWrapper = _t.first);
        }
      },
      hostVars: 9,
      hostBindings: function TuiExpandComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("transitionend.self", function TuiExpandComponent_transitionend_self_HostBindingHandler($event) {
            return ctx.onTransitionEnd($event);
          })("tui-expand-loaded", function TuiExpandComponent_tui_expand_loaded_HostBindingHandler($event) {
            return ctx.onExpandLoaded($event);
          });
        }
        if (rf & 2) {
          ɵɵattribute("aria-expanded", ctx.expanded);
          ɵɵstyleProp("height", ctx.height, "px");
          ɵɵclassProp("_loading", ctx.loading)("_overflow", ctx.overflow)("_expanded", ctx.expanded);
        }
      },
      inputs: {
        async: "async",
        expandedSetter: [0, "expanded", "expandedSetter"]
      },
      ngContentSelectors: _c1,
      decls: 3,
      vars: 3,
      consts: [["wrapper", ""], [1, "t-wrapper"], [4, "ngIf"], ["size", "l", 3, "overlay", "showLoader", 4, "ngIf", "ngIfElse"], ["size", "l", 3, "overlay", "showLoader"], [3, "ngTemplateOutlet"]],
      template: function TuiExpandComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "div", 1, 0);
          ɵɵtemplate(2, TuiExpandComponent_ng_container_2_Template, 3, 2, "ng-container", 2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("@tuiParentAnimation", void 0)("@.disabled", ctx.overflow);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.contentVisible);
        }
      },
      dependencies: [NgIf, NgTemplateOutlet, TuiLoader],
      styles: ['[_nghost-%COMP%]{transition-property:opacity,height,visibility;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;opacity:0;transition-delay:1ms}._overflow[_nghost-%COMP%]{overflow:hidden}._expanded[_nghost-%COMP%]{opacity:1}._loading[_nghost-%COMP%]{opacity:.99}.t-wrapper[_ngcontent-%COMP%]:before, .t-wrapper[_ngcontent-%COMP%]:after{content:"";display:table}'],
      data: {
        animation: [tuiParentAnimation]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiExpandComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-expand",
      imports: [NgIf, NgTemplateOutlet, TuiLoader],
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [tuiParentAnimation],
      host: {
        "[style.height.px]": "height",
        "[class._loading]": "loading",
        "[class._overflow]": "overflow",
        "[class._expanded]": "expanded",
        "[attr.aria-expanded]": "expanded",
        "(transitionend.self)": "onTransitionEnd($event)",
        [`(${TUI_EXPAND_LOADED})`]: "onExpandLoaded($event)"
      },
      template: '<div\n    #wrapper\n    class="t-wrapper"\n    @tuiParentAnimation\n    [@.disabled]="overflow"\n>\n    <ng-container *ngIf="contentVisible">\n        <ng-content />\n        <tui-loader\n            *ngIf="async; else content"\n            size="l"\n            [overlay]="true"\n            [showLoader]="loading"\n        >\n            <ng-container [ngTemplateOutlet]="content" />\n        </tui-loader>\n    </ng-container>\n</div>\n',
      styles: [':host{transition-property:opacity,height,visibility;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;opacity:0;transition-delay:1ms}:host._overflow{overflow:hidden}:host._expanded{opacity:1}:host._loading{opacity:.99}.t-wrapper:before,.t-wrapper:after{content:"";display:table}\n']
    }]
  }], null, {
    contentWrapper: [{
      type: ViewChild,
      args: ["wrapper"]
    }],
    content: [{
      type: ContentChild,
      args: [TuiExpandContent, {
        read: TemplateRef
      }]
    }],
    async: [{
      type: Input
    }],
    expandedSetter: [{
      type: Input,
      args: ["expanded"]
    }]
  });
})();
var TuiExpand = [TuiExpandComponent, TuiExpandContent];

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-platform.mjs
var TuiPlatform = class _TuiPlatform {
  constructor() {
    this.tuiPlatform = inject(TUI_PLATFORM, {
      skipSelf: true
    });
  }
  static {
    this.ɵfac = function TuiPlatform_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPlatform)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiPlatform,
      selectors: [["", "tuiPlatform", ""]],
      hostVars: 1,
      hostBindings: function TuiPlatform_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-platform", ctx.tuiPlatform);
        }
      },
      inputs: {
        tuiPlatform: "tuiPlatform"
      },
      features: [ɵɵProvidersFeature([{
        provide: TUI_PLATFORM,
        useFactory: () => inject(_TuiPlatform).tuiPlatform
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPlatform, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiPlatform]",
      providers: [{
        provide: TUI_PLATFORM,
        useFactory: () => inject(TuiPlatform).tuiPlatform
      }],
      host: {
        "[attr.data-platform]": "tuiPlatform"
      }
    }]
  }], null, {
    tuiPlatform: [{
      type: Input
    }]
  });
})();

// node_modules/@ng-web-apis/screen-orientation/fesm2022/ng-web-apis-screen-orientation.mjs
var ScreenOrientationService = class _ScreenOrientationService extends Observable {
  win = inject(WA_WINDOW);
  stream$ = (this.isModern ? fromEvent(this.win.screen.orientation, "change").pipe(startWith(null), map(() => (
    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/Screen/orientation
     * The type read-only property of the ScreenOrientation interface returns the document's current orientation type,
     * one of "portrait-primary", "portrait-secondary", "landscape-primary", or "landscape-secondary".
     *
     * Browser compatibility:
     * Safari 16.4+, Chrome 38+, Firefox 43+
     */
    this.win.screen.orientation.type
  ))) : fromEvent(this.win, "orientationchange").pipe(startWith(null), map(() => {
    const angle = parseInt(this.win.orientation, 10);
    switch (angle) {
      case -90:
        return "landscape-secondary";
      case 180:
        return "portrait-secondary";
      case 90:
        return "landscape-primary";
      case 0:
      default:
        return "portrait-primary";
    }
  }))).pipe(shareReplay({
    bufferSize: 1,
    refCount: true
  }));
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
  }
  get isModern() {
    return !!this.win?.screen?.orientation;
  }
  static ɵfac = function ScreenOrientationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScreenOrientationService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ScreenOrientationService,
    factory: _ScreenOrientationService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScreenOrientationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var ViewportService = class _ViewportService extends Observable {
  visualViewport = inject(WINDOW).visualViewport;
  stream$ = this.visualViewport ? merge(fromEvent(this.visualViewport, "resize"), fromEvent(this.visualViewport, "scroll"), fromEvent(this.visualViewport, "scrollend")).pipe(startWith(null), map(() => this.visualViewport), filter(Boolean), shareReplay({
    bufferSize: 1,
    refCount: true
  })) : EMPTY;
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
  }
  static ɵfac = function ViewportService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewportService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ViewportService,
    factory: _ViewportService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewportService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-visual-viewport.mjs
var TuiVisualViewport = class _TuiVisualViewport {
  constructor() {
    this.w = inject(WA_WINDOW);
    this.style = tuiInjectElement().style;
    this.minInnerHeight = Infinity;
    this.$ = inject(ViewportService).pipe(takeUntilDestroyed()).subscribe(({
      offsetLeft,
      offsetTop,
      height,
      width,
      scale
    }) => {
      this.minInnerHeight = Math.min(this.minInnerHeight, this.w.innerHeight);
      this.style.setProperty("--tui-viewport-x", tuiPx(offsetLeft));
      this.style.setProperty("--tui-viewport-y", tuiPx(offsetTop));
      this.style.setProperty("--tui-viewport-height", tuiPx(height));
      this.style.setProperty("--tui-viewport-width", tuiPx(width));
      this.style.setProperty("--tui-viewport-scale", String(scale));
      this.style.setProperty("--tui-viewport-vh", tuiPx(this.w.innerHeight / 100));
      this.style.setProperty("--tui-viewport-vw", tuiPx(this.w.innerWidth / 100));
      this.style.setProperty("--tui-viewport-svh", tuiPx(this.minInnerHeight / 100));
    });
  }
  static {
    this.ɵfac = function TuiVisualViewport_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiVisualViewport)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiVisualViewport,
      selectors: [["", "tuiVisualViewport", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiVisualViewport, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiVisualViewport]"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-root.mjs
var _c06 = ["*", [["tuiOverContent"]], [["tuiOverDialogs"]], [["tuiOverAlerts"]], [["tuiOverDropdowns"]], [["tuiOverHints"]]];
var _c12 = ["*", "tuiOverContent", "tuiOverDialogs", "tuiOverAlerts", "tuiOverDropdowns", "tuiOverHints"];
function TuiRoot_ng_container_2_tui_scroll_controls_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-scroll-controls", 3);
  }
}
function TuiRoot_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiRoot_ng_container_2_tui_scroll_controls_1_Template, 1, 0, "tui-scroll-controls", 2);
    ɵɵelement(2, "tui-popups");
    ɵɵprojection(3, 1);
    ɵɵelement(4, "tui-dialogs");
    ɵɵprojection(5, 2);
    ɵɵelement(6, "tui-alerts");
    ɵɵprojection(7, 3);
    ɵɵelement(8, "tui-dropdowns");
    ɵɵprojection(9, 4);
    ɵɵelement(10, "tui-hints");
    ɵɵprojection(11, 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.scrollbars);
  }
}
var TuiRoot = class _TuiRoot {
  constructor() {
    this.doc = inject(DOCUMENT);
    this.el = tuiInjectElement();
    this.reducedMotion = inject(TUI_REDUCED_MOTION);
    this.duration = tuiGetDuration(inject(TUI_ANIMATIONS_SPEED));
    this.isChildRoot = !!inject(_TuiRoot, {
      optional: true,
      skipSelf: true
    });
    this.top = signal(!this.isChildRoot);
    this.isMobileRes = toSignal(inject(TuiBreakpointService).pipe(map((breakpoint) => breakpoint === "mobile"), tuiWatch()), {
      initialValue: false
    });
    this.nativeScrollbar = inject(TUI_SCROLLBAR_OPTIONS).mode === "native";
    this.scrollbars = !this.nativeScrollbar && !inject(TUI_IS_MOBILE) && !this.isChildRoot;
    const factory = inject(RendererFactory2);
    factory.removeStylesOnCompDestroy = false;
    if (factory.delegate) {
      factory.delegate.removeStylesOnCompDestroy = false;
    }
    if (!this.top()) {
      return;
    }
    this.doc.documentElement.setAttribute("data-tui-theme", inject(TUI_THEME).toLowerCase());
    if (!this.nativeScrollbar) {
      this.doc.defaultView?.document.documentElement.classList.add("tui-zero-scrollbar");
    }
    ngDevMode && console.assert(!!inject(EVENT_MANAGER_PLUGINS).find((plugin) => plugin instanceof PreventEventPlugin), "NG_EVENT_PLUGINS is missing from global providers");
  }
  get isTopLayer() {
    return this.doc.fullscreenElement?.matches("tui-root") ? this.doc.fullscreenElement === this.el : !this.isChildRoot;
  }
  static {
    this.ɵfac = function TuiRoot_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiRoot)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiRoot,
      selectors: [["tui-root"]],
      hostAttrs: ["data-tui-version", "4.76.0"],
      hostVars: 6,
      hostBindings: function TuiRoot_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("touchstart.passive.zoneless", function TuiRoot_touchstart_passive_zoneless_HostBindingHandler() {
            return 0;
          })("fullscreenchange", function TuiRoot_fullscreenchange_HostBindingHandler() {
            return ctx.top.set(ctx.isTopLayer);
          }, ɵɵresolveDocument);
        }
        if (rf & 2) {
          ɵɵstyleProp("--tui-duration", ctx.duration, "ms")("--tui-scroll-behavior", ctx.reducedMotion ? "auto" : "smooth");
          ɵɵclassProp("_mobile", ctx.isMobileRes());
        }
      },
      features: [ɵɵHostDirectivesFeature([TuiPlatform, TuiVisualViewport, TuiFontSize, TuiActiveZone])],
      ngContentSelectors: _c12,
      decls: 3,
      vars: 1,
      consts: [[1, "t-root-content"], [4, "ngIf"], ["class", "t-root-scrollbar", 4, "ngIf"], [1, "t-root-scrollbar"]],
      template: function TuiRoot_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c06);
          ɵɵelementStart(0, "div", 0);
          ɵɵprojection(1);
          ɵɵelementEnd();
          ɵɵtemplate(2, TuiRoot_ng_container_2_Template, 12, 1, "ng-container", 1);
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.top());
        }
      },
      dependencies: [NgIf, TuiAlerts, TuiDialogs, TuiDropdowns, TuiHints, TuiPopups, TuiScrollControls],
      styles: ["@keyframes tuiSkeletonVibe{to{opacity:.5}}@keyframes tuiPresent{to{opacity:.99999}}@keyframes tuiFade{0%{opacity:0}}@keyframes tuiSlide{0%{transform:var(--tui-from, translateY(100%))}}@keyframes tuiScale{0%{transform:scale(var(--tui-scale, 0))}}@keyframes tuiCollapse{0%{grid-template-rows:0fr}to{grid-template-rows:1fr}}.tui-enter,.tui-leave{animation-duration:var(--tui-duration);animation-timing-function:ease-in-out;pointer-events:none}.tui-leave{animation-direction:reverse}\n", ".tui-zero-scrollbar{scrollbar-width:none;-ms-overflow-style:none}.tui-zero-scrollbar::-webkit-scrollbar,.tui-zero-scrollbar::-webkit-scrollbar-thumb{display:none}body,input{margin:0}tui-root{position:relative;display:block;font:var(--tui-font-text-s);color:var(--tui-text-primary);flex:1;border-image:conic-gradient(var(--tui-background-base) 0 0) fill 0/0/0 0 100vh 0;-webkit-tap-highlight-color:transparent}:root{--tui-inline-start: left;--tui-inline-end: right;--tui-inline: 1}[dir=rtl]{--tui-inline-start: right;--tui-inline-end: left;--tui-inline: -1}tui-root>.t-root-scrollbar{position:fixed;top:0;left:0;bottom:0;right:0;z-index:0;display:none;margin:0}[data-tui-theme] tui-root>.t-root-scrollbar{display:block}.t-root-content{position:relative;top:var(--t-root-top);block-size:100%;isolation:isolate}.t-root-content>*{--t-root-top: 0}[tuiDropdownButton][tuiDropdownButton]{display:none}\n"],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRoot, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-root",
      imports: [NgIf, TuiAlerts, TuiDialogs, TuiDropdowns, TuiHints, TuiPopups, TuiScrollControls],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      hostDirectives: [TuiPlatform, TuiVisualViewport, TuiFontSize, TuiActiveZone],
      host: {
        "data-tui-version": TUI_VERSION,
        "[style.--tui-duration.ms]": "duration",
        "[style.--tui-scroll-behavior]": 'reducedMotion ? "auto" : "smooth"',
        "[class._mobile]": "isMobileRes()",
        // Required for the :active state to work in Safari. https://stackoverflow.com/a/33681490
        "(touchstart.passive.zoneless)": "0",
        "(document:fullscreenchange)": "top.set(isTopLayer)"
      },
      template: '<div class="t-root-content">\n    <ng-content />\n</div>\n<ng-container *ngIf="top()">\n    <tui-scroll-controls\n        *ngIf="scrollbars"\n        class="t-root-scrollbar"\n    />\n    <tui-popups />\n    <ng-content select="tuiOverContent" />\n    <tui-dialogs />\n    <ng-content select="tuiOverDialogs" />\n    <tui-alerts />\n    <ng-content select="tuiOverAlerts" />\n    <tui-dropdowns />\n    <ng-content select="tuiOverDropdowns" />\n    <tui-hints />\n    <ng-content select="tuiOverHints" />\n</ng-container>\n',
      styles: ["@keyframes tuiSkeletonVibe{to{opacity:.5}}@keyframes tuiPresent{to{opacity:.99999}}@keyframes tuiFade{0%{opacity:0}}@keyframes tuiSlide{0%{transform:var(--tui-from, translateY(100%))}}@keyframes tuiScale{0%{transform:scale(var(--tui-scale, 0))}}@keyframes tuiCollapse{0%{grid-template-rows:0fr}to{grid-template-rows:1fr}}.tui-enter,.tui-leave{animation-duration:var(--tui-duration);animation-timing-function:ease-in-out;pointer-events:none}.tui-leave{animation-direction:reverse}\n", ".tui-zero-scrollbar{scrollbar-width:none;-ms-overflow-style:none}.tui-zero-scrollbar::-webkit-scrollbar,.tui-zero-scrollbar::-webkit-scrollbar-thumb{display:none}body,input{margin:0}tui-root{position:relative;display:block;font:var(--tui-font-text-s);color:var(--tui-text-primary);flex:1;border-image:conic-gradient(var(--tui-background-base) 0 0) fill 0/0/0 0 100vh 0;-webkit-tap-highlight-color:transparent}:root{--tui-inline-start: left;--tui-inline-end: right;--tui-inline: 1}[dir=rtl]{--tui-inline-start: right;--tui-inline-end: left;--tui-inline: -1}tui-root>.t-root-scrollbar{position:fixed;top:0;left:0;bottom:0;right:0;z-index:0;display:none;margin:0}[data-tui-theme] tui-root>.t-root-scrollbar{display:block}.t-root-content{position:relative;top:var(--t-root-top);block-size:100%;isolation:isolate}.t-root-content>*{--t-root-top: 0}[tuiDropdownButton][tuiDropdownButton]{display:none}\n"]
    }]
  }], function() {
    return [];
  }, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-fullscreen.mjs
var _c07 = ["tuiFullscreen", ""];
var _c13 = ["*"];
var TuiFullscreen = class _TuiFullscreen {
  constructor() {
    this.doc = inject(DOCUMENT);
    this.open = signal(false);
    this.opened = new EventEmitter();
    this.options = {
      navigationUI: "auto"
    };
  }
  set fullscreen(open) {
    if (this.open() === open) {
      return;
    }
    if (open) {
      this.root?.nativeElement.requestFullscreen(this.options).then(() => this.fullscreenState(open));
    } else {
      this.doc.exitFullscreen().then(() => this.fullscreenState(open)).catch((error) => console.error("Failed to exit fullscreen:", error));
    }
  }
  closedByEscape(event) {
    const escaped = !this.doc.fullscreenElement && event.target === this.root?.nativeElement;
    if (escaped) {
      this.fullscreenState(false);
    }
  }
  fullscreenState(open) {
    this.open.set(open);
    this.opened.emit(open);
  }
  static {
    this.ɵfac = function TuiFullscreen_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFullscreen)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiFullscreen,
      selectors: [["", "tuiFullscreen", ""]],
      viewQuery: function TuiFullscreen_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(TuiRoot, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.root = _t.first);
        }
      },
      hostBindings: function TuiFullscreen_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("fullscreenchange", function TuiFullscreen_fullscreenchange_HostBindingHandler($event) {
            return ctx.closedByEscape($event);
          }, ɵɵresolveDocument);
        }
      },
      inputs: {
        options: [0, "tuiFullscreenOptions", "options"],
        fullscreen: [0, "tuiFullscreen", "fullscreen"]
      },
      outputs: {
        opened: "tuiFullscreenChange"
      },
      features: [ɵɵProvidersFeature([], [{
        provide: TuiActiveZone,
        useValue: null
      }])],
      attrs: _c07,
      ngContentSelectors: _c13,
      decls: 2,
      vars: 0,
      template: function TuiFullscreen_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "tui-root");
          ɵɵprojection(1);
          ɵɵelementEnd();
        }
      },
      dependencies: [TuiRoot],
      styles: ["tui-root[_ngcontent-%COMP%]{scrollbar-width:none;-ms-overflow-style:none;overflow:auto}tui-root[_ngcontent-%COMP%]::-webkit-scrollbar, tui-root[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{display:none}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFullscreen, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "[tuiFullscreen]",
      imports: [TuiRoot],
      template: "<tui-root><ng-content /></tui-root>",
      changeDetection: ChangeDetectionStrategy.OnPush,
      viewProviders: [{
        provide: TuiActiveZone,
        useValue: null
      }],
      host: {
        "(document:fullscreenchange)": "closedByEscape($event)"
      },
      styles: ["tui-root{scrollbar-width:none;-ms-overflow-style:none;overflow:auto}tui-root::-webkit-scrollbar,tui-root::-webkit-scrollbar-thumb{display:none}\n"]
    }]
  }], null, {
    root: [{
      type: ViewChild,
      args: [TuiRoot, {
        read: ElementRef
      }]
    }],
    opened: [{
      type: Output,
      args: ["tuiFullscreenChange"]
    }],
    options: [{
      type: Input,
      args: ["tuiFullscreenOptions"]
    }],
    fullscreen: [{
      type: Input,
      args: ["tuiFullscreen"]
    }]
  });
})();
export {
  SCROLL_REF_SELECTOR,
  TUI_ALERTS,
  TUI_ALERTS_GROUPED,
  TUI_ALERT_DEFAULT_OPTIONS,
  TUI_ALERT_OPTIONS,
  TUI_ALERT_POSITION,
  TUI_ANIMATIONS_DEFAULT_DURATION,
  TUI_ANIMATIONS_SPEED,
  TUI_APPEARANCE_DEFAULT_OPTIONS,
  TUI_APPEARANCE_OPTIONS,
  TUI_ASSETS_PATH,
  TUI_AUXILIARY,
  TUI_BACK_WORD,
  TUI_BUTTON_DEFAULT_OPTIONS,
  TUI_BUTTON_OPTIONS,
  TUI_CALENDAR_SHEET_DEFAULT_OPTIONS,
  TUI_CALENDAR_SHEET_OPTIONS,
  TUI_CLEAR_WORD,
  TUI_CLOSE_WORD,
  TUI_COMMON_ICONS,
  TUI_DARK_MODE,
  TUI_DARK_MODE_DEFAULT_KEY,
  TUI_DARK_MODE_KEY,
  TUI_DATA_LIST_ACCESSOR,
  TUI_DATA_LIST_HOST,
  TUI_DATE_FORMAT,
  TUI_DAY_TYPE_HANDLER,
  TUI_DEFAULT_DATE_FORMAT,
  TUI_DEFAULT_ERROR_MESSAGE,
  TUI_DEFAULT_ITEMS_HANDLERS,
  TUI_DEFAULT_NUMBER_FORMAT,
  TUI_DEFAULT_SCROLLBAR_OPTIONS,
  TUI_DIALOGS,
  TUI_DIALOGS_CLOSE,
  TUI_DIALOG_DEFAULT_OPTIONS,
  TUI_DIALOG_OPTIONS,
  TUI_DROPDOWN_COMPONENT,
  TUI_DROPDOWN_CONTEXT,
  TUI_DROPDOWN_DEFAULT_OPTIONS,
  TUI_DROPDOWN_HOST,
  TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS,
  TUI_DROPDOWN_HOVER_OPTIONS,
  TUI_DROPDOWN_OPTIONS,
  TUI_EXPAND_LOADED,
  TUI_FIRST_DAY_OF_WEEK,
  TUI_FONT_OFFSET,
  TUI_GROUP_DEFAULT_OPTIONS,
  TUI_GROUP_OPTIONS,
  TUI_HINT_COMPONENT,
  TUI_HINT_DEFAULT_OPTIONS,
  TUI_HINT_DIRECTIONS,
  TUI_HINT_OPTIONS,
  TUI_HINT_PROVIDERS,
  TUI_ICON_END,
  TUI_ICON_REGISTRY,
  TUI_ICON_RESOLVER,
  TUI_ICON_START,
  TUI_ICON_STARTS,
  TUI_ICON_START_RESOLVER,
  TUI_ITEMS_HANDLERS,
  TUI_LINK_DEFAULT_OPTIONS,
  TUI_LINK_OPTIONS,
  TUI_LOADER_DEFAULT_OPTIONS,
  TUI_LOADER_OPTIONS,
  TUI_MEDIA,
  TUI_MONTHS,
  TUI_NOTHING_FOUND_MESSAGE,
  TUI_NOTIFICATION_DEFAULT_OPTIONS,
  TUI_NOTIFICATION_OPTIONS,
  TUI_NUMBER_FORMAT,
  TUI_OPTION_CONTENT,
  TUI_REDUCED_MOTION,
  TUI_SCROLLABLE,
  TUI_SCROLLBAR_OPTIONS,
  TUI_SCROLL_INTO_VIEW,
  TUI_SCROLL_REF,
  TUI_SELECTION_STREAM,
  TUI_SHORT_WEEK_DAYS,
  TUI_SPIN_ICONS,
  TUI_SPIN_TEXTS,
  TUI_TEXTFIELD_ACCESSOR,
  TUI_TEXTFIELD_OPTIONS,
  TUI_THEME,
  TUI_VIEWPORT,
  TuiAccessor,
  TuiAlert,
  TuiAlertComponent,
  TuiAlertService,
  TuiAlerts,
  TuiAppearance,
  TuiAutoColorPipe,
  TuiBreakpointService,
  TuiButton,
  TuiCalendar,
  TuiCalendarSheet,
  TuiCalendarSheetPipe,
  TuiCalendarSpin,
  TuiCalendarYear,
  TuiDarkThemeService,
  TuiDataList,
  TuiDataListComponent,
  TuiDataListDirective,
  TuiDateFormat,
  TuiDialog,
  TuiDialogCloseService,
  TuiDialogComponent,
  TuiDialogService,
  TuiDialogs,
  TuiDriver,
  TuiDriverDirective,
  TuiDropdown,
  TuiDropdownA11y,
  TuiDropdownAuto,
  TuiDropdownComponent,
  TuiDropdownContext,
  TuiDropdownDirective,
  TuiDropdownDriver,
  TuiDropdownDriverDirective,
  TuiDropdownFixed,
  TuiDropdownHover,
  TuiDropdownManual,
  TuiDropdownOpen,
  TuiDropdownOpenLegacy,
  TuiDropdownOptionsDirective,
  TuiDropdownPortal,
  TuiDropdownPosition,
  TuiDropdownPositionSided,
  TuiDropdownSelection,
  TuiDropdownService,
  TuiDropdowns,
  TuiError,
  TuiExpand,
  TuiExpandComponent,
  TuiExpandContent,
  TuiFallbackSrcPipe,
  TuiFlagPipe,
  TuiFormatDatePipe,
  TuiFormatDateService,
  TuiFormatNumberPipe,
  TuiFullscreen,
  TuiGroup,
  TuiHint,
  TuiHintBaseComponent,
  TuiHintComponent,
  TuiHintDescribe,
  TuiHintDirective,
  TuiHintDriver,
  TuiHintHost,
  TuiHintHover,
  TuiHintManual,
  TuiHintOptionsDirective,
  TuiHintOverflow,
  TuiHintPointer,
  TuiHintPosition,
  TuiHintService,
  TuiHintUnstyled,
  TuiHintUnstyledComponent,
  TuiHints,
  TuiIcon,
  TuiIconPipe,
  TuiIcons,
  TuiInitialsPipe,
  TuiItemsHandlersDirective,
  TuiItemsHandlersValidator,
  TuiLabel,
  TuiLink,
  TuiLoader,
  TuiMonthPipe,
  TuiNotification,
  TuiNumberFormat,
  TuiOptGroup,
  TuiOption,
  TuiOptionNew,
  TuiOptionWithValue,
  TuiOrderWeekDaysPipe,
  TuiPopup,
  TuiPopupService,
  TuiPopups,
  TuiPositionAccessor,
  TuiPositionService,
  TuiRectAccessor,
  TuiRoot,
  TuiScrollControls,
  TuiScrollIntoView,
  TuiScrollRef,
  TuiScrollable,
  TuiScrollbar,
  TuiScrollbarDirective,
  TuiScrollbarService,
  TuiSelect,
  TuiSelectLike,
  TuiSpinButton,
  TuiSurface,
  TuiTextfield,
  TuiTextfieldBase,
  TuiTextfieldBaseComponent,
  TuiTextfieldComponent,
  TuiTextfieldContent,
  TuiTextfieldDirective,
  TuiTextfieldDropdownDirective,
  TuiTextfieldItemComponent,
  TuiTextfieldMultiComponent,
  TuiTextfieldOptionsDirective,
  TuiTitle,
  TuiVehicle,
  TuiVisualViewportService,
  TuiWithAppearance,
  TuiWithDropdownOpen,
  TuiWithIcons,
  TuiWithItemsHandlers,
  TuiWithNativePicker,
  TuiWithOptionContent,
  TuiWithTextfield,
  TuiWithTextfieldDropdown,
  tuiAlertOptionsProvider,
  tuiAppearance,
  tuiAppearanceFocus,
  tuiAppearanceMode,
  tuiAppearanceOptionsProvider,
  tuiAppearanceState,
  tuiAsAuxiliary,
  tuiAsDataList,
  tuiAsDataListAccessor,
  tuiAsDataListHost,
  tuiAsDriver,
  tuiAsOptionContent,
  tuiAsPositionAccessor,
  tuiAsRectAccessor,
  tuiAsTextfieldAccessor,
  tuiAsVehicle,
  tuiAsViewport,
  tuiAssetsPathProvider,
  tuiButtonOptionsProvider,
  tuiCalendarSheetOptionsProvider,
  tuiCheckFixedPosition,
  tuiCommonIconsProvider,
  tuiCrossFade,
  tuiDateFormatProvider,
  tuiDialog,
  tuiDialogOptionsProvider,
  tuiDropdown,
  tuiDropdownAnimation,
  tuiDropdownEnabled,
  tuiDropdownHoverOptionsProvider,
  tuiDropdownOpen,
  tuiDropdownOptionsProvider,
  tuiEnableFontScaling,
  tuiFadeIn,
  tuiFadeInBottom,
  tuiFadeInList,
  tuiFadeInTop,
  tuiFallbackAccessor,
  tuiFormatNumber,
  tuiGetDuration,
  tuiGetFractionPartPadded,
  tuiGetIconMode,
  tuiGetViewportHeight,
  tuiGetViewportWidth,
  tuiGetWordRange,
  tuiGroupOptionsProvider,
  tuiHeightCollapse,
  tuiHeightCollapseList,
  tuiHintOptionsProvider,
  tuiHost,
  tuiIconResolverProvider,
  tuiIconsProvider,
  tuiInjectAuxiliary,
  tuiInjectDataListSize,
  tuiInjectIconResolver,
  tuiIsEditingKey,
  tuiIsObscured,
  tuiItemsHandlersProvider,
  tuiLinkOptionsProvider,
  tuiLoaderOptionsProvider,
  tuiNotificationOptionsProvider,
  tuiNumberFormatProvider,
  tuiNumberToStringWithoutExp,
  tuiOverrideOptions,
  tuiParentAnimation,
  tuiParentStop,
  tuiPop,
  tuiPositionAccessorFor,
  tuiProvideAccessor,
  tuiRectAccessorFor,
  tuiScaleIn,
  tuiScaleInList,
  tuiScrollbarOptionsProvider,
  tuiSizeBigger,
  tuiSlideIn,
  tuiSlideInBottom,
  tuiSlideInBottomList,
  tuiSlideInLeft,
  tuiSlideInLeftList,
  tuiSlideInRight,
  tuiSlideInRightList,
  tuiSlideInTop,
  tuiSlideInTopList,
  tuiStringHashToHsl,
  tuiTextfieldIconBinding,
  tuiTextfieldOptionsProvider,
  tuiToAnimationOptions,
  tuiWidthCollapse,
  tuiWidthCollapseList
};
//# sourceMappingURL=@taiga-ui_core.js.map
