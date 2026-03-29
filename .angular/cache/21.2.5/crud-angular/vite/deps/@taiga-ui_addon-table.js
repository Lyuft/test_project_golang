import {
  EMPTY_CLIENT_RECT,
  EMPTY_QUERY,
  NgControl,
  NgModel,
  PolymorpheusOutlet,
  TUI_COMMON_ICONS,
  TUI_ICON_END,
  TUI_SPIN_ICONS,
  TUI_SPIN_TEXTS,
  TUI_TEXTFIELD_OPTIONS,
  TUI_TRUE_HANDLER,
  TuiAppearance,
  TuiButton,
  TuiControl,
  TuiDataList,
  TuiDataListComponent,
  TuiDropdownDirective,
  TuiDropdownOpen,
  TuiIcon,
  TuiIcons,
  TuiLink,
  TuiNativeValidator,
  TuiOption,
  TuiTextfieldComponent,
  TuiWithAppearance,
  TuiWithIcons,
  WA_MUTATION_OBSERVER_INIT,
  WA_WINDOW,
  WaMutationObserverService,
  WaResizeObserverService,
  coerceBooleanProperty,
  tuiAppearanceOptionsProvider,
  tuiArrayShallowEquals,
  tuiArrayToggle,
  tuiButtonOptionsProvider,
  tuiControlValue,
  tuiCreateOptions,
  tuiDefaultSort,
  tuiExtractI18n,
  tuiFallbackValueProvider,
  tuiGetActualTarget,
  tuiInjectElement,
  tuiInjectIconResolver,
  tuiIsElement,
  tuiIsString,
  tuiPreventDefault,
  tuiProvide,
  tuiProvideOptions,
  tuiPure,
  tuiPx,
  tuiQueryListChanges,
  tuiTypedFromEvent,
  tuiWatch,
  tuiWithStyles,
  tuiZoneOptimized,
  tuiZonefree,
  tuiZonefreeScheduler
} from "./chunk-2UDURBLU.js";
import {
  takeUntilDestroyed,
  toSignal
} from "./chunk-AOZU4WIZ.js";
import "./chunk-P35NFK3Y.js";
import "./chunk-BC4PMDKU.js";
import "./chunk-J36ZAYF3.js";
import {
  AsyncPipe,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
  isPlatformBrowser,
  isPlatformServer
} from "./chunk-IHAK26QT.js";
import "./chunk-DEBYPIGP.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  Injectable,
  Input,
  NgModule,
  Output,
  PLATFORM_ID,
  Pipe,
  SkipSelf,
  TemplateRef,
  ViewChild,
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
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
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
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresolveDocument,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-EIFE64Y5.js";
import {
  DOCUMENT,
  DestroyRef,
  EventEmitter,
  InjectionToken,
  NgZone,
  computed,
  effect,
  forwardRef,
  inject,
  signal,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵnamespaceSVG,
  ɵɵresetView,
  ɵɵrestoreView
} from "./chunk-M5JT76BW.js";
import {
  BehaviorSubject,
  EMPTY,
  Observable,
  ReplaySubject,
  Subject,
  Subscription,
  __decorate,
  __spreadProps,
  __spreadValues,
  catchError,
  combineLatest,
  debounce,
  debounceTime,
  defer,
  delay,
  distinctUntilChanged,
  filter,
  fromEvent,
  identity,
  map,
  merge,
  of,
  share,
  skip,
  startWith,
  switchMap,
  takeUntil,
  timer
} from "./chunk-7XKNWGE2.js";

// node_modules/@taiga-ui/addon-table/fesm2022/taiga-ui-addon-table-tokens.mjs
var TUI_TABLE_SHOW_HIDE_MESSAGE = new InjectionToken(ngDevMode ? "TUI_TABLE_SHOW_HIDE_MESSAGE" : "", {
  factory: tuiExtractI18n("showHideText")
});
var TUI_TABLE_PAGINATION_TEXTS = new InjectionToken(ngDevMode ? "TUI_TABLE_PAGINATION_TEXTS" : "", {
  factory: tuiExtractI18n("paginationTexts")
});

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-tiles.mjs
var _c0 = ["*"];
var _c1 = ["wrapper"];
var tuiTilesSwap = (order, currentIndex, newIndex) => {
  if (!order.has(currentIndex) || !order.has(newIndex)) {
    return order;
  }
  const dragged = order.get(currentIndex) ?? currentIndex;
  const placement = order.get(newIndex) ?? newIndex;
  const newOrder = new Map(order);
  newOrder.set(currentIndex, placement);
  newOrder.set(newIndex, dragged);
  return newOrder;
};
var tuiTilesShift = (order, currentIndex, newIndex) => {
  if (!order.has(currentIndex) || !order.has(newIndex)) {
    return order;
  }
  const dragged = order.get(currentIndex) ?? currentIndex;
  const placement = order.get(newIndex) ?? newIndex;
  const newOrder = new Map(order);
  const flipped = new Map(Array.from(order).map(([a, b]) => [b, a]));
  if ((placement - dragged) / Math.abs(placement - dragged) > 0) {
    for (let i = placement; i > dragged; i--) {
      newOrder.set(flipped.get(i) ?? i, i - 1);
    }
  } else {
    for (let i = placement; i < dragged; i++) {
      newOrder.set(flipped.get(i) ?? i, i + 1);
    }
  }
  newOrder.set(currentIndex, placement);
  return newOrder;
};
var TUI_TILES_REORDER = new InjectionToken(ngDevMode ? "TUI_TILES_REORDER" : "", {
  factory: () => tuiTilesSwap
});
var TuiTilesComponent = class _TuiTilesComponent {
  constructor() {
    this.el$ = new Subject();
    this.handler = inject(TUI_TILES_REORDER);
    this.debounce = 0;
    this.orderChange = this.el$.pipe(debounce(() => timer(this.debounce)), filter(this.filter.bind(this)), map((element) => this.reorder(element)));
    this.element = signal(null);
    this.el = tuiInjectElement();
    this.order$ = new BehaviorSubject(/* @__PURE__ */ new Map());
  }
  set order(map2) {
    this.order$.next(map2);
  }
  get order() {
    return this.order$.value;
  }
  rearrange(element) {
    this.el$.next(element);
  }
  filter(element) {
    return !!this.element() && !!element && this.element() !== element;
  }
  reorder(element) {
    const elements = Array.from(this.el.children);
    const currentIndex = elements.indexOf(this.element() || element);
    const newIndex = elements.indexOf(element);
    const order = this.order.size ? new Map(this.order) : new Map(elements.map((_, index) => [index, index]));
    this.order$.next(this.handler(order, currentIndex, newIndex));
    return this.order$.value;
  }
  static {
    this.ɵfac = function TuiTilesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTilesComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTilesComponent,
      selectors: [["tui-tiles"]],
      hostBindings: function TuiTilesComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("pointerleave.zoneless", function TuiTilesComponent_pointerleave_zoneless_HostBindingHandler() {
            return ctx.rearrange();
          });
        }
      },
      inputs: {
        debounce: "debounce",
        order: "order"
      },
      outputs: {
        orderChange: "orderChange"
      },
      features: [ɵɵProvidersFeature([WaResizeObserverService, WaMutationObserverService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          childList: true
        }
      }])],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function TuiTilesComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      styles: ["tui-tiles{position:relative;z-index:0;display:grid;grid-auto-flow:dense;justify-items:stretch}tui-tiles._dragged tui-tile>.t-wrapper{pointer-events:none}tui-tiles._dragged tui-tile:not(._dragged)>.t-wrapper,tui-tiles:not(._dragged) tui-tile._dragged>.t-wrapper{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;transition-delay:1ms}tui-tile>.t-wrapper{position:absolute;z-index:0;border-radius:inherit}tui-tile._dragged>.t-wrapper,tui-tile:has(tui-tile._dragged)>.t-wrapper{z-index:1}tui-tile [tuiTileHandle]{touch-action:none;-webkit-user-select:none;user-select:none}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTilesComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-tiles",
      template: "<ng-content />",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [WaResizeObserverService, WaMutationObserverService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          childList: true
        }
      }],
      host: {
        "(pointerleave.zoneless)": "rearrange()"
      },
      styles: ["tui-tiles{position:relative;z-index:0;display:grid;grid-auto-flow:dense;justify-items:stretch}tui-tiles._dragged tui-tile>.t-wrapper{pointer-events:none}tui-tiles._dragged tui-tile:not(._dragged)>.t-wrapper,tui-tiles:not(._dragged) tui-tile._dragged>.t-wrapper{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;transition-delay:1ms}tui-tile>.t-wrapper{position:absolute;z-index:0;border-radius:inherit}tui-tile._dragged>.t-wrapper,tui-tile:has(tui-tile._dragged)>.t-wrapper{z-index:1}tui-tile [tuiTileHandle]{touch-action:none;-webkit-user-select:none;user-select:none}\n"]
    }]
  }], null, {
    debounce: [{
      type: Input
    }],
    orderChange: [{
      type: Output
    }],
    order: [{
      type: Input
    }]
  });
})();
var TuiTileService = class _TuiTileService {
  constructor() {
    this.isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    this.el = tuiInjectElement();
    this.tiles = inject(TuiTilesComponent);
    this.sub = new Subscription();
    this.offset$ = new BehaviorSubject([NaN, NaN]);
    this.position$ = combineLatest([this.offset$.pipe(distinctUntilChanged(tuiArrayShallowEquals)), inject(WaResizeObserverService).pipe(startWith(null)), inject(WaMutationObserverService).pipe(startWith(null)), this.tiles.order$.pipe(debounceTime(0, tuiZonefreeScheduler()))]).pipe(map(([offset]) => offset));
  }
  init(element) {
    if (this.isBrowser) {
      this.sub.add(this.position$.subscribe((offset) => {
        this.setPosition(element, offset);
        this.setRect(element, offset);
      }));
    } else {
      this.el.style.setProperty("position", "relative");
    }
  }
  setOffset(offset) {
    this.offset$.next(offset);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  getRect([left, top]) {
    const elTop = Number.isNaN(top) ? this.el.offsetTop : top;
    const elLeft = Number.isNaN(left) ? this.el.offsetLeft : left;
    const rect = {
      top: elTop,
      left: elLeft,
      width: this.el.clientWidth,
      height: this.el.clientHeight,
      right: NaN,
      bottom: NaN,
      y: elTop,
      x: elLeft
    };
    return __spreadProps(__spreadValues({}, rect), {
      toJSON: () => JSON.stringify(rect)
    });
  }
  setRect({
    style
  }, offset) {
    const {
      top,
      left,
      width,
      height
    } = this.getRect(offset);
    style.top = tuiPx(top);
    style.left = tuiPx(left);
    style.width = tuiPx(width);
    style.height = tuiPx(height);
  }
  setPosition(element, [left]) {
    if (!Number.isNaN(left)) {
      element.style.setProperty("position", "fixed");
      element.style.setProperty("transition", "none");
      return;
    }
    const {
      style
    } = element;
    const rect = element.getBoundingClientRect();
    const host = this.el.getBoundingClientRect();
    style.removeProperty("position");
    style.removeProperty("transition");
    style.removeProperty("top");
    style.removeProperty("left");
    style.top = tuiPx(rect.top - host.top + this.el.offsetTop);
    style.left = tuiPx(rect.left - host.left + this.el.offsetLeft);
  }
  static {
    this.ɵfac = function TuiTileService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTileService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiTileService,
      factory: _TuiTileService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTileService, [{
    type: Injectable
  }], null, null);
})();
var TuiTile = class _TuiTile {
  constructor() {
    this.service = inject(TuiTileService);
    this.tiles = inject(TuiTilesComponent);
    this.dragged = signal(false);
    this.width = 1;
    this.height = 1;
    this.element = tuiInjectElement();
  }
  onDrag(offset) {
    const dragged = !Number.isNaN(offset[0]);
    this.dragged.set(this.dragged() || dragged);
    this.tiles.element.set(dragged ? this.element : null);
    this.service.setOffset(offset);
    if (dragged) {
      this.tiles.el.classList.add("_dragged");
    } else {
      this.tiles.el.classList.remove("_dragged");
    }
  }
  ngAfterViewInit() {
    if (this.wrapper) {
      this.service.init(this.wrapper.nativeElement);
    }
  }
  ngOnDestroy() {
    if (this.tiles.element() === this.element) {
      this.tiles.element.set(null);
    }
  }
  get column() {
    return `span var(--tui-width, ${this.width})`;
  }
  get row() {
    return `span var(--tui-height, ${this.height})`;
  }
  onEnter() {
    this.tiles.rearrange(this.element);
  }
  onTransitionEnd() {
    this.dragged.set(false);
  }
  static {
    this.ɵfac = function TuiTile_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTile)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTile,
      selectors: [["tui-tile"]],
      viewQuery: function TuiTile_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c1, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.wrapper = _t.first);
        }
      },
      hostVars: 6,
      hostBindings: function TuiTile_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("pointerenter", function TuiTile_pointerenter_HostBindingHandler() {
            return ctx.onEnter();
          });
        }
        if (rf & 2) {
          ɵɵstyleProp("grid-column", ctx.column)("grid-row", ctx.row);
          ɵɵclassProp("_dragged", ctx.dragged());
        }
      },
      inputs: {
        width: "width",
        height: "height"
      },
      features: [ɵɵProvidersFeature([TuiTileService])],
      ngContentSelectors: _c0,
      decls: 3,
      vars: 0,
      consts: [["wrapper", ""], [1, "t-wrapper", 3, "transitionend.self"]],
      template: function TuiTile_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵdomElementStart(0, "div", 1, 0);
          ɵɵdomListener("transitionend.self", function TuiTile_Template_div_transitionend_self_0_listener() {
            return ctx.onTransitionEnd();
          });
          ɵɵprojection(2);
          ɵɵdomElementEnd();
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTile, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-tile",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [TuiTileService],
      host: {
        "[class._dragged]": "dragged()",
        "[style.gridColumn]": "column",
        "[style.gridRow]": "row",
        "(pointerenter)": "onEnter()"
      },
      template: '<div\n    #wrapper\n    class="t-wrapper"\n    (transitionend.self)="onTransitionEnd()"\n>\n    <ng-content />\n</div>\n'
    }]
  }], null, {
    wrapper: [{
      type: ViewChild,
      args: ["wrapper"]
    }],
    width: [{
      type: Input
    }],
    height: [{
      type: Input
    }]
  });
})();
var TuiTileHandle = class _TuiTileHandle {
  constructor() {
    this.zone = inject(NgZone);
    this.tile = inject(TuiTile);
    this.x = NaN;
    this.y = NaN;
  }
  onPointer(x = NaN, y = NaN) {
    if (!Number.isNaN(x) || !Number.isNaN(this.x)) {
      this.zone.run(() => {
        const {
          left,
          top
        } = this.tile.element.getBoundingClientRect();
        this.x = x - left;
        this.y = y - top;
        this.tile.onDrag([NaN, NaN]);
      });
    }
  }
  onMove(x, y) {
    if (!Number.isNaN(this.x)) {
      this.zone.run(() => {
        this.tile.onDrag([x - this.x, y - this.y]);
      });
    }
  }
  onStart(event) {
    const target = tuiGetActualTarget(event);
    const {
      x,
      y,
      pointerId
    } = event;
    if (tuiIsElement(target)) {
      target.releasePointerCapture(pointerId);
    }
    this.onPointer(x, y);
  }
  static {
    this.ɵfac = function TuiTileHandle_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTileHandle)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTileHandle,
      selectors: [["", "tuiTileHandle", ""]],
      hostBindings: function TuiTileHandle_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("pointerdown.zoneless.prevent", function TuiTileHandle_pointerdown_zoneless_prevent_HostBindingHandler($event) {
            return ctx.onStart($event);
          })("pointerup.zoneless", function TuiTileHandle_pointerup_zoneless_HostBindingHandler() {
            return ctx.onPointer();
          }, ɵɵresolveDocument)("pointermove.zoneless", function TuiTileHandle_pointermove_zoneless_HostBindingHandler($event) {
            return ctx.onMove($event.x, $event.y);
          }, ɵɵresolveDocument);
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTileHandle, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiTileHandle]",
      host: {
        "(pointerdown.zoneless.prevent)": "onStart($event)",
        "(document:pointerup.zoneless)": "onPointer()",
        "(document:pointermove.zoneless)": "onMove($event.x, $event.y)"
      }
    }]
  }], null, null);
})();
var TuiTiles = [TuiTilesComponent, TuiTile, TuiTileHandle];

// node_modules/@taiga-ui/addon-table/fesm2022/taiga-ui-addon-table-components-reorder.mjs
var _c02 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function TuiReorder_tui_tile_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const template_r2 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", template_r2, " ");
  }
}
function TuiReorder_tui_tile_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-tile")(1, "div", 2)(2, "div", 3);
    ɵɵelement(3, "tui-icon", 4);
    ɵɵtemplate(4, TuiReorder_tui_tile_1_ng_container_4_Template, 2, 1, "ng-container", 5);
    ɵɵelementEnd();
    ɵɵelementStart(5, "button", 6);
    ɵɵlistener("click", function TuiReorder_tui_tile_1_Template_button_click_5_listener() {
      const item_r3 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.toggle(item_r3));
    })("keydown.arrowDown.prevent", function TuiReorder_tui_tile_1_Template_button_keydown_arrowDown_prevent_5_listener() {
      const index_r5 = ɵɵrestoreView(_r1).index;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.move(index_r5, 1));
    })("keydown.arrowUp.prevent", function TuiReorder_tui_tile_1_Template_button_keydown_arrowUp_prevent_5_listener() {
      const index_r5 = ɵɵrestoreView(_r1).index;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.move(index_r5, -1));
    });
    ɵɵtext(6);
    ɵɵpipe(7, "async");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const index_r5 = ctx.index;
    const ctx_r3 = ɵɵnextContext();
    ɵɵstyleProp("order", ctx_r3.order.get(index_r5));
    ɵɵadvance();
    ɵɵclassProp("t-item_disabled", !ctx_r3.isEnabled(item_r3));
    ɵɵadvance(2);
    ɵɵproperty("icon", ctx_r3.options.icons.drag);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r3.content)("polymorpheusOutletContext", ɵɵpureFunction2(11, _c02, item_r3, index_r5));
    ɵɵadvance();
    ɵɵproperty("iconStart", ctx_r3.getIcon(item_r3));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 9, ctx_r3.showHideText$), " ");
  }
}
var TUI_REORDER_DEFAULT_OPTIONS = {
  icons: {
    hide: "@tui.eye-off",
    show: "@tui.eye",
    drag: "@tui.grip-vertical"
  }
};
var TUI_REORDER_OPTIONS = new InjectionToken(ngDevMode ? "TUI_REORDER_OPTIONS" : "", {
  factory: () => TUI_REORDER_DEFAULT_OPTIONS
});
function tuiReorderOptionsProvider(options) {
  return tuiProvideOptions(TUI_REORDER_OPTIONS, options, TUI_REORDER_DEFAULT_OPTIONS);
}
var TuiReorder = class _TuiReorder {
  constructor() {
    this.dragging = false;
    this.order = /* @__PURE__ */ new Map();
    this.unsortedItems = [];
    this.options = inject(TUI_REORDER_OPTIONS);
    this.showHideText$ = inject(TUI_TABLE_SHOW_HIDE_MESSAGE);
    this.enabled = [];
    this.itemsChange = new EventEmitter();
    this.enabledChange = new EventEmitter();
    this.content = ({
      $implicit
    }) => String($implicit);
  }
  set items(items) {
    if (items.length !== this.unsortedItems.length || !items.every((item) => this.unsortedItems.includes(item))) {
      this.unsortedItems = items;
    }
  }
  onDrag() {
    this.dragging = true;
  }
  onDrop() {
    if (!this.dragging) {
      return;
    }
    this.dragging = false;
    this.updateItems();
  }
  isEnabled(item) {
    return this.enabled.includes(item);
  }
  getIcon(item) {
    return this.isEnabled(item) ? this.options.icons.hide : this.options.icons.show;
  }
  toggle(toggled) {
    this.enabled = this.isEnabled(toggled) ? this.enabled.filter((item) => item !== toggled) : this.enabled.concat(toggled);
    this.updateEnabled();
  }
  move(index, direction) {
    const oldIndex = this.order.get(index) ?? index;
    if (!oldIndex && direction < 0 || oldIndex === this.unsortedItems.length - 1 && direction > 0) {
      return;
    }
    const newIndex = oldIndex + direction;
    const oldItem = Array.from(this.order.values()).findIndex((item) => item === newIndex);
    this.order.set(index, newIndex);
    this.order.set(oldItem, oldIndex);
    this.order = new Map(this.order);
    this.updateItems();
  }
  getSortedItems() {
    const items = new Array(this.unsortedItems.length);
    this.unsortedItems.forEach((item, index) => {
      items[this.order.get(index) ?? index] = item;
    });
    return items;
  }
  updateItems() {
    this.itemsChange.emit(this.getSortedItems());
    this.updateEnabled();
  }
  updateEnabled() {
    const enabled = this.getSortedItems().filter((item) => this.isEnabled(item));
    this.enabled = enabled;
    this.enabledChange.emit(enabled);
  }
  static {
    this.ɵfac = function TuiReorder_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiReorder)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiReorder,
      selectors: [["tui-reorder"]],
      hostBindings: function TuiReorder_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("focusout.stop", function TuiReorder_focusout_stop_HostBindingHandler() {
            return 0;
          })("pointerdown.zoneless", function TuiReorder_pointerdown_zoneless_HostBindingHandler() {
            return ctx.onDrag();
          })("pointerup.zoneless", function TuiReorder_pointerup_zoneless_HostBindingHandler() {
            return ctx.onDrop();
          }, ɵɵresolveDocument);
        }
      },
      inputs: {
        enabled: "enabled",
        items: "items",
        content: "content"
      },
      outputs: {
        itemsChange: "itemsChange",
        enabledChange: "enabledChange"
      },
      features: [ɵɵProvidersFeature([{
        provide: TUI_TILES_REORDER,
        useValue: tuiTilesShift
      }])],
      decls: 2,
      vars: 2,
      consts: [[1, "t-wrapper", 3, "orderChange", "order"], [3, "order", 4, "ngFor", "ngForOf"], [1, "t-item"], ["tuiTileHandle", "", 1, "t-draggable"], [1, "t-icon", 3, "icon"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["appearance", "icon", "size", "xs", "tuiIconButton", "", "type", "button", 1, "t-button", 3, "click", "keydown.arrowDown.prevent", "keydown.arrowUp.prevent", "iconStart"]],
      template: function TuiReorder_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "tui-tiles", 0);
          ɵɵtwoWayListener("orderChange", function TuiReorder_Template_tui_tiles_orderChange_0_listener($event) {
            ɵɵtwoWayBindingSet(ctx.order, $event) || (ctx.order = $event);
            return $event;
          });
          ɵɵtemplate(1, TuiReorder_tui_tile_1_Template, 8, 14, "tui-tile", 1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵtwoWayProperty("order", ctx.order);
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.unsortedItems);
        }
      },
      dependencies: [AsyncPipe, NgForOf, PolymorpheusOutlet, TuiButton, TuiIcon, TuiTilesComponent, TuiTile, TuiTileHandle],
      styles: ["[_nghost-%COMP%]{display:block;font:var(--tui-font-text-s);padding:.5rem 0;-webkit-user-select:none;user-select:none}.t-wrapper[_ngcontent-%COMP%]{grid-auto-rows:2rem}.t-draggable[_ngcontent-%COMP%]{cursor:ns-resize;flex:1 1 auto}.t-item[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;block-size:2rem;align-items:center;padding:0 .75rem;background:var(--tui-background-base)}.t-item_disabled[_ngcontent-%COMP%]{opacity:var(--tui-disabled-opacity)}.t-item_disabled[_ngcontent-%COMP%]   .t-button[_ngcontent-%COMP%]{color:var(--tui-text-primary);opacity:1}.t-item[_ngcontent-%COMP%]:hover{background:var(--tui-background-base-alt)}.t-item[_ngcontent-%COMP%]:hover   .t-button[_ngcontent-%COMP%]{opacity:1}.t-icon[_ngcontent-%COMP%]{margin-inline-end:.5rem;color:var(--tui-text-tertiary);border-width:.25rem}.t-button[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-inline-start:auto;opacity:0}.t-button[_ngcontent-%COMP%]:focus{opacity:1}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiReorder, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-reorder",
      imports: [AsyncPipe, NgForOf, PolymorpheusOutlet, TuiButton, TuiIcon, TuiTiles],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: TUI_TILES_REORDER,
        useValue: tuiTilesShift
      }],
      host: {
        "(focusout.stop)": "(0)",
        "(pointerdown.zoneless)": "onDrag()",
        "(document:pointerup.zoneless)": "onDrop()"
      },
      template: '<tui-tiles\n    class="t-wrapper"\n    [(order)]="order"\n>\n    <tui-tile\n        *ngFor="let item of unsortedItems; let index = index"\n        [style.order]="order.get(index)"\n    >\n        <div\n            class="t-item"\n            [class.t-item_disabled]="!isEnabled(item)"\n        >\n            <div\n                tuiTileHandle\n                class="t-draggable"\n            >\n                <tui-icon\n                    class="t-icon"\n                    [icon]="options.icons.drag"\n                />\n                <ng-container *polymorpheusOutlet="content as template; context: {$implicit: item, index: index}">\n                    {{ template }}\n                </ng-container>\n            </div>\n            <button\n                appearance="icon"\n                size="xs"\n                tuiIconButton\n                type="button"\n                class="t-button"\n                [iconStart]="getIcon(item)"\n                (click)="toggle(item)"\n                (keydown.arrowDown.prevent)="move(index, 1)"\n                (keydown.arrowUp.prevent)="move(index, -1)"\n            >\n                {{ showHideText$ | async }}\n            </button>\n        </div>\n    </tui-tile>\n</tui-tiles>\n',
      styles: [":host{display:block;font:var(--tui-font-text-s);padding:.5rem 0;-webkit-user-select:none;user-select:none}.t-wrapper{grid-auto-rows:2rem}.t-draggable{cursor:ns-resize;flex:1 1 auto}.t-item{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;block-size:2rem;align-items:center;padding:0 .75rem;background:var(--tui-background-base)}.t-item_disabled{opacity:var(--tui-disabled-opacity)}.t-item_disabled .t-button{color:var(--tui-text-primary);opacity:1}.t-item:hover{background:var(--tui-background-base-alt)}.t-item:hover .t-button{opacity:1}.t-icon{margin-inline-end:.5rem;color:var(--tui-text-tertiary);border-width:.25rem}.t-button{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-inline-start:auto;opacity:0}.t-button:focus{opacity:1}\n"]
    }]
  }], null, {
    enabled: [{
      type: Input
    }],
    itemsChange: [{
      type: Output
    }],
    enabledChange: [{
      type: Output
    }],
    items: [{
      type: Input
    }],
    content: [{
      type: Input
    }]
  });
})();

// node_modules/@ng-web-apis/intersection-observer/fesm2022/ng-web-apis-intersection-observer.mjs
var SafeObserver = typeof IntersectionObserver !== "undefined" ? IntersectionObserver : class {
  root = null;
  rootMargin = "";
  thresholds = [];
  observe() {
  }
  unobserve() {
  }
  disconnect() {
  }
  takeRecords() {
    return [];
  }
};
var WA_INTERSECTION_ROOT = new InjectionToken("[WA_INTERSECTION_ROOT]");
var INTERSECTION_ROOT = WA_INTERSECTION_ROOT;
var WA_INTERSECTION_ROOT_MARGIN_DEFAULT = "0px 0px 0px 0px";
var INTERSECTION_ROOT_MARGIN_DEFAULT = WA_INTERSECTION_ROOT_MARGIN_DEFAULT;
var WA_INTERSECTION_ROOT_MARGIN = new InjectionToken("[WA_INTERSECTION_ROOT_MARGIN]", {
  providedIn: "root",
  factory: () => INTERSECTION_ROOT_MARGIN_DEFAULT
});
var INTERSECTION_ROOT_MARGIN = WA_INTERSECTION_ROOT_MARGIN;
function rootMarginFactory() {
  return inject(ElementRef).nativeElement.getAttribute("waIntersectionRootMargin") || INTERSECTION_ROOT_MARGIN_DEFAULT;
}
var WA_INTERSECTION_THRESHOLD_DEFAULT = 0;
var INTERSECTION_THRESHOLD_DEFAULT = WA_INTERSECTION_THRESHOLD_DEFAULT;
var WA_INTERSECTION_THRESHOLD = new InjectionToken("[WA_INTERSECTION_THRESHOLD]", {
  providedIn: "root",
  factory: () => INTERSECTION_THRESHOLD_DEFAULT
});
var INTERSECTION_THRESHOLD = WA_INTERSECTION_THRESHOLD;
function thresholdFactory() {
  return inject(ElementRef).nativeElement.getAttribute("waIntersectionThreshold")?.split(",").map(parseFloat) || INTERSECTION_THRESHOLD_DEFAULT;
}
var WaIntersectionObserverDirective = class _WaIntersectionObserverDirective extends SafeObserver {
  callbacks = /* @__PURE__ */ new Map();
  margin = "";
  threshold = "";
  constructor() {
    const root = inject(INTERSECTION_ROOT, {
      optional: true
    });
    super((entries) => {
      this.callbacks.forEach((callback, element) => {
        const filtered = entries.filter(({
          target
        }) => target === element);
        return filtered.length && callback(filtered, this);
      });
    }, {
      root: root?.nativeElement,
      rootMargin: rootMarginFactory(),
      threshold: thresholdFactory()
    });
  }
  observe(target, callback = () => {
  }) {
    super.observe(target);
    this.callbacks.set(target, callback);
  }
  unobserve(target) {
    super.unobserve(target);
    this.callbacks.delete(target);
  }
  ngOnDestroy() {
    this.disconnect();
  }
  static ɵfac = function WaIntersectionObserverDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaIntersectionObserverDirective)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _WaIntersectionObserverDirective,
    selectors: [["", "waIntersectionObserver", ""]],
    inputs: {
      margin: [0, "waIntersectionRootMargin", "margin"],
      threshold: [0, "waIntersectionThreshold", "threshold"]
    },
    exportAs: ["IntersectionObserver"],
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaIntersectionObserverDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[waIntersectionObserver]",
      inputs: ["margin: waIntersectionRootMargin", "threshold: waIntersectionThreshold"],
      exportAs: "IntersectionObserver"
    }]
  }], function() {
    return [];
  }, null);
})();
var IntersectionObserveeService = class _IntersectionObserveeService extends Observable {
  constructor() {
    const nativeElement = inject(ElementRef).nativeElement;
    const observer = inject(WaIntersectionObserverDirective);
    super((subscriber) => {
      observer.observe(nativeElement, (entries) => {
        subscriber.next(entries);
      });
      return () => {
        observer.unobserve(nativeElement);
      };
    });
    return this.pipe(share());
  }
  static ɵfac = function IntersectionObserveeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IntersectionObserveeService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _IntersectionObserveeService,
    factory: _IntersectionObserveeService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IntersectionObserveeService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var WaIntersectionObservee = class _WaIntersectionObservee {
  waIntersectionObservee = inject(IntersectionObserveeService);
  static ɵfac = function WaIntersectionObservee_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaIntersectionObservee)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _WaIntersectionObservee,
    selectors: [["", "waIntersectionObservee", ""]],
    outputs: {
      waIntersectionObservee: "waIntersectionObservee"
    },
    features: [ɵɵProvidersFeature([IntersectionObserveeService])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaIntersectionObservee, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[waIntersectionObservee]",
      outputs: ["waIntersectionObservee"],
      providers: [IntersectionObserveeService]
    }]
  }], null, null);
})();
var WaIntersectionRoot = class _WaIntersectionRoot {
  static ɵfac = function WaIntersectionRoot_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaIntersectionRoot)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _WaIntersectionRoot,
    selectors: [["", "waIntersectionRoot", ""]],
    features: [ɵɵProvidersFeature([{
      provide: INTERSECTION_ROOT,
      useExisting: ElementRef
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaIntersectionRoot, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[waIntersectionRoot]",
      providers: [{
        provide: INTERSECTION_ROOT,
        useExisting: ElementRef
      }]
    }]
  }], null, null);
})();
var IntersectionObserverModule = class _IntersectionObserverModule {
  static ɵfac = function IntersectionObserverModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IntersectionObserverModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _IntersectionObserverModule,
    imports: [WaIntersectionObserverDirective, WaIntersectionObservee, WaIntersectionRoot],
    exports: [WaIntersectionObserverDirective, WaIntersectionObservee, WaIntersectionRoot]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IntersectionObserverModule, [{
    type: NgModule,
    args: [{
      imports: [WaIntersectionObserverDirective, WaIntersectionObservee, WaIntersectionRoot],
      exports: [WaIntersectionObserverDirective, WaIntersectionObservee, WaIntersectionRoot]
    }]
  }], null, null);
})();
var IntersectionObserverService = class _IntersectionObserverService extends Observable {
  nativeElement = inject(ElementRef).nativeElement;
  rootMargin = inject(INTERSECTION_ROOT_MARGIN);
  threshold = inject(INTERSECTION_THRESHOLD);
  root = inject(INTERSECTION_ROOT, {
    optional: true
  })?.nativeElement ?? null;
  constructor() {
    super((subscriber) => {
      const observer = new SafeObserver((entries) => {
        subscriber.next(entries);
      }, {
        root: this.root,
        rootMargin: this.rootMargin,
        threshold: this.threshold
      });
      observer.observe(this.nativeElement);
      return () => {
        observer.disconnect();
      };
    });
  }
  static ɵfac = function IntersectionObserverService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IntersectionObserverService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _IntersectionObserverService,
    factory: _IntersectionObserverService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IntersectionObserverService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var WA_INTERSECTION_OBSERVER_SUPPORT = new InjectionToken("[WA_INTERSECTION_OBSERVER_SUPPORT]: [INTERSECTION_OBSERVER_SUPPORT]", {
  providedIn: "root",
  factory: () => !!inject(WA_WINDOW).IntersectionObserver
});

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-badge.mjs
var TUI_BADGE_DEFAULT_OPTIONS = {
  appearance: "",
  size: "l"
};
var TUI_BADGE_OPTIONS = new InjectionToken(ngDevMode ? "TUI_BADGE_OPTIONS" : "", {
  factory: () => TUI_BADGE_DEFAULT_OPTIONS
});
function tuiBadgeOptionsProvider(options) {
  return tuiProvideOptions(TUI_BADGE_OPTIONS, options, TUI_BADGE_DEFAULT_OPTIONS);
}
var TuiBadgeStyles = class _TuiBadgeStyles {
  static {
    this.ɵfac = function TuiBadgeStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiBadgeStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiBadgeStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-badge"],
      decls: 0,
      vars: 0,
      template: function TuiBadgeStyles_Template(rf, ctx) {
      },
      styles: ["tui-badge,[tuiBadge]{--t-icon-size: 1rem;--t-padding: 0 .5rem;--t-size: var(--tui-height-xs);--t-margin: -.25rem;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, 0rem) - 2 * var(--t-margin, 0rem));border-radius:6rem;justify-content:center;background:#959595;color:var(--tui-background-base);padding:var(--t-padding);block-size:var(--t-size);min-inline-size:var(--t-size);inline-size:-webkit-fit-content;inline-size:-moz-fit-content;inline-size:fit-content;font:var(--tui-font-text-s)}tui-badge>img,[tuiBadge]>img,tui-badge>tui-svg,[tuiBadge]>tui-svg,tui-badge>tui-icon,[tuiBadge]>tui-icon,tui-badge>tui-avatar,[tuiBadge]>tui-avatar,tui-badge>tui-badge,[tuiBadge]>tui-badge,tui-badge>[tuiBadge],[tuiBadge]>[tuiBadge],tui-badge>[tuiRadio],[tuiBadge]>[tuiRadio],tui-badge>[tuiSwitch],[tuiBadge]>[tuiSwitch],tui-badge>[tuiCheckbox],[tuiBadge]>[tuiCheckbox],tui-badge[tuiIcons]:before,[tuiBadge][tuiIcons]:before,tui-badge[tuiIcons]:after,[tuiBadge][tuiIcons]:after{margin:var(--t-margin)}tui-badge[tuiStatus]:before,[tuiBadge][tuiStatus]:before{inline-size:.375rem;block-size:.375rem;margin:0}tui-badge>tui-icon,[tuiBadge]>tui-icon,tui-badge[tuiIcons]:before,[tuiBadge][tuiIcons]:before,tui-badge[tuiIcons]:after,[tuiBadge][tuiIcons]:after{font-size:var(--t-icon-size)!important}tui-badge[data-appearance=error],[tuiBadge][data-appearance=error],tui-badge[data-appearance=negative],[tuiBadge][data-appearance=negative]{--t-status: var(--tui-status-negative)}tui-badge[data-appearance=success],[tuiBadge][data-appearance=success],tui-badge[data-appearance=positive],[tuiBadge][data-appearance=positive]{--t-status: var(--tui-status-positive)}tui-badge[data-appearance=warning],[tuiBadge][data-appearance=warning]{--t-status: var(--tui-status-warning)}tui-badge[data-appearance=info],[tuiBadge][data-appearance=info]{--t-status: var(--tui-status-info)}tui-badge[data-appearance=neutral],[tuiBadge][data-appearance=neutral]{--t-status: var(--tui-status-neutral)}tui-badge[data-size=s],[tuiBadge][data-size=s]{--t-padding: 0 .3125rem;--t-size: 1rem;--t-icon-size: .625rem;--t-margin: -.125rem;font:var(--tui-font-text-xs)}tui-badge[data-size=s][tuiStatus]:before,[tuiBadge][data-size=s][tuiStatus]:before{inline-size:.25rem;block-size:.25rem;margin-inline-end:-.125rem}tui-badge[data-size=m],[tuiBadge][data-size=m]{--t-padding: 0 .375rem;--t-size: 1.25rem;--t-icon-size: .75rem;--t-margin: -.125rem}tui-badge[data-size=xl],[tuiBadge][data-size=xl]{--t-margin: -.25rem;--t-padding: 0 .75rem;--t-size: var(--tui-height-s);font:var(--tui-font-text-m)}tui-badge[data-size=xl][tuiStatus]:before,[tuiBadge][data-size=xl][tuiStatus]:before{inline-size:.5rem;block-size:.5rem;margin-inline-end:-.125rem}tui-badge[tuiAppearance][data-appearance=error],[tuiBadge][tuiAppearance][data-appearance=error],tui-badge[tuiAppearance][data-appearance=success],[tuiBadge][tuiAppearance][data-appearance=success],tui-badge[tuiAppearance][data-appearance=negative],[tuiBadge][tuiAppearance][data-appearance=negative],tui-badge[tuiAppearance][data-appearance=positive],[tuiBadge][tuiAppearance][data-appearance=positive],tui-badge[tuiAppearance][data-appearance=warning],[tuiBadge][tuiAppearance][data-appearance=warning],tui-badge[tuiAppearance][data-appearance=info],[tuiBadge][tuiAppearance][data-appearance=info],tui-badge[tuiAppearance][data-appearance=neutral],[tuiBadge][tuiAppearance][data-appearance=neutral]{color:var(--tui-text-primary)}img[tuiBadge]{padding:0;inline-size:var(--t-size)}tui-icon[tuiBadge]{--t-margin: 0 !important;-webkit-mask:none;mask:none;block-size:var(--t-size);inline-size:var(--t-size)}tui-icon[tuiBadge][data-size=s]:after{-webkit-mask-size:.625rem;mask-size:.625rem}tui-icon[tuiBadge][data-size=m]:after{-webkit-mask-size:.75rem;mask-size:.75rem}tui-icon[tuiBadge][data-size=l]:after,tui-icon[tuiBadge][data-size=xl]:after{-webkit-mask-size:1rem;mask-size:1rem}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBadgeStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-badge"
      },
      styles: ["tui-badge,[tuiBadge]{--t-icon-size: 1rem;--t-padding: 0 .5rem;--t-size: var(--tui-height-xs);--t-margin: -.25rem;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, 0rem) - 2 * var(--t-margin, 0rem));border-radius:6rem;justify-content:center;background:#959595;color:var(--tui-background-base);padding:var(--t-padding);block-size:var(--t-size);min-inline-size:var(--t-size);inline-size:-webkit-fit-content;inline-size:-moz-fit-content;inline-size:fit-content;font:var(--tui-font-text-s)}tui-badge>img,[tuiBadge]>img,tui-badge>tui-svg,[tuiBadge]>tui-svg,tui-badge>tui-icon,[tuiBadge]>tui-icon,tui-badge>tui-avatar,[tuiBadge]>tui-avatar,tui-badge>tui-badge,[tuiBadge]>tui-badge,tui-badge>[tuiBadge],[tuiBadge]>[tuiBadge],tui-badge>[tuiRadio],[tuiBadge]>[tuiRadio],tui-badge>[tuiSwitch],[tuiBadge]>[tuiSwitch],tui-badge>[tuiCheckbox],[tuiBadge]>[tuiCheckbox],tui-badge[tuiIcons]:before,[tuiBadge][tuiIcons]:before,tui-badge[tuiIcons]:after,[tuiBadge][tuiIcons]:after{margin:var(--t-margin)}tui-badge[tuiStatus]:before,[tuiBadge][tuiStatus]:before{inline-size:.375rem;block-size:.375rem;margin:0}tui-badge>tui-icon,[tuiBadge]>tui-icon,tui-badge[tuiIcons]:before,[tuiBadge][tuiIcons]:before,tui-badge[tuiIcons]:after,[tuiBadge][tuiIcons]:after{font-size:var(--t-icon-size)!important}tui-badge[data-appearance=error],[tuiBadge][data-appearance=error],tui-badge[data-appearance=negative],[tuiBadge][data-appearance=negative]{--t-status: var(--tui-status-negative)}tui-badge[data-appearance=success],[tuiBadge][data-appearance=success],tui-badge[data-appearance=positive],[tuiBadge][data-appearance=positive]{--t-status: var(--tui-status-positive)}tui-badge[data-appearance=warning],[tuiBadge][data-appearance=warning]{--t-status: var(--tui-status-warning)}tui-badge[data-appearance=info],[tuiBadge][data-appearance=info]{--t-status: var(--tui-status-info)}tui-badge[data-appearance=neutral],[tuiBadge][data-appearance=neutral]{--t-status: var(--tui-status-neutral)}tui-badge[data-size=s],[tuiBadge][data-size=s]{--t-padding: 0 .3125rem;--t-size: 1rem;--t-icon-size: .625rem;--t-margin: -.125rem;font:var(--tui-font-text-xs)}tui-badge[data-size=s][tuiStatus]:before,[tuiBadge][data-size=s][tuiStatus]:before{inline-size:.25rem;block-size:.25rem;margin-inline-end:-.125rem}tui-badge[data-size=m],[tuiBadge][data-size=m]{--t-padding: 0 .375rem;--t-size: 1.25rem;--t-icon-size: .75rem;--t-margin: -.125rem}tui-badge[data-size=xl],[tuiBadge][data-size=xl]{--t-margin: -.25rem;--t-padding: 0 .75rem;--t-size: var(--tui-height-s);font:var(--tui-font-text-m)}tui-badge[data-size=xl][tuiStatus]:before,[tuiBadge][data-size=xl][tuiStatus]:before{inline-size:.5rem;block-size:.5rem;margin-inline-end:-.125rem}tui-badge[tuiAppearance][data-appearance=error],[tuiBadge][tuiAppearance][data-appearance=error],tui-badge[tuiAppearance][data-appearance=success],[tuiBadge][tuiAppearance][data-appearance=success],tui-badge[tuiAppearance][data-appearance=negative],[tuiBadge][tuiAppearance][data-appearance=negative],tui-badge[tuiAppearance][data-appearance=positive],[tuiBadge][tuiAppearance][data-appearance=positive],tui-badge[tuiAppearance][data-appearance=warning],[tuiBadge][tuiAppearance][data-appearance=warning],tui-badge[tuiAppearance][data-appearance=info],[tuiBadge][tuiAppearance][data-appearance=info],tui-badge[tuiAppearance][data-appearance=neutral],[tuiBadge][tuiAppearance][data-appearance=neutral]{color:var(--tui-text-primary)}img[tuiBadge]{padding:0;inline-size:var(--t-size)}tui-icon[tuiBadge]{--t-margin: 0 !important;-webkit-mask:none;mask:none;block-size:var(--t-size);inline-size:var(--t-size)}tui-icon[tuiBadge][data-size=s]:after{-webkit-mask-size:.625rem;mask-size:.625rem}tui-icon[tuiBadge][data-size=m]:after{-webkit-mask-size:.75rem;mask-size:.75rem}tui-icon[tuiBadge][data-size=l]:after,tui-icon[tuiBadge][data-size=xl]:after{-webkit-mask-size:1rem;mask-size:1rem}\n"]
    }]
  }], null, null);
})();
var TuiBadge = class _TuiBadge {
  constructor() {
    this.nothing = tuiWithStyles(TuiBadgeStyles);
    this.size = inject(TUI_BADGE_OPTIONS).size;
  }
  static {
    this.ɵfac = function TuiBadge_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiBadge)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiBadge,
      selectors: [["tui-badge"], ["", "tuiBadge", ""]],
      hostVars: 1,
      hostBindings: function TuiBadge_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        size: "size"
      },
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_BADGE_OPTIONS)]), ɵɵHostDirectivesFeature([TuiWithAppearance, TuiWithIcons])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBadge, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-badge,[tuiBadge]",
      providers: [tuiAppearanceOptionsProvider(TUI_BADGE_OPTIONS)],
      hostDirectives: [TuiWithAppearance, TuiWithIcons],
      host: {
        "[attr.data-size]": "size"
      }
    }]
  }], null, {
    size: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-fade.mjs
var BUFFER = 1;
var TuiFadeStyles = class _TuiFadeStyles {
  static {
    this.ɵfac = function TuiFadeStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFadeStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiFadeStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-fade-styles"],
      decls: 0,
      vars: 0,
      template: function TuiFadeStyles_Template(rf, ctx) {
      },
      styles: ["[tuiFade]{scrollbar-width:none;-ms-overflow-style:none;transition-property:-webkit-mask-position;transition-property:mask-position;transition-property:mask-position,-webkit-mask-position;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;overflow:auto;text-overflow:unset!important;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}[tuiFade]::-webkit-scrollbar,[tuiFade]::-webkit-scrollbar-thumb{display:none}[tuiFade]:not([data-orientation=vertical]){overflow-y:hidden;-webkit-mask-image:linear-gradient(to right,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to left,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(#000,#000);mask-image:linear-gradient(to right,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to left,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(#000,#000);-webkit-mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top;mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top;-webkit-mask-size:calc(51% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),calc(50% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),100% calc(100% - var(--t-line-height, 100%));mask-size:calc(51% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),calc(50% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),100% calc(100% - var(--t-line-height, 100%))}[tuiFade]:not([data-orientation=vertical])._start{-webkit-mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top;mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top}[tuiFade]:not([data-orientation=vertical])._end{-webkit-mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,right bottom,top;mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,right bottom,top}[tuiFade]:not([data-orientation=vertical])._start._end{-webkit-mask-position:left bottom,right bottom,top;mask-position:left bottom,right bottom,top}[dir=rtl] [tuiFade]:not([data-orientation=vertical])._end{-webkit-mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top;mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top}[dir=rtl] [tuiFade]:not([data-orientation=vertical])._start{-webkit-mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,right bottom,top;mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,right bottom,top}[dir=rtl] [tuiFade]:not([data-orientation=vertical])._start._end{-webkit-mask-position:left bottom,right bottom,top;mask-position:left bottom,right bottom,top}[tuiFade][data-orientation=vertical]{overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to top,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset)));mask-image:linear-gradient(to bottom,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to top,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset)));-webkit-mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px),left calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px);mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px),left calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px);-webkit-mask-size:100% calc(51% + var(--t-fade-size) + var(--t-fade-offset));mask-size:100% calc(51% + var(--t-fade-size) + var(--t-fade-offset))}[tuiFade][data-orientation=vertical]._start{-webkit-mask-position:left top,left calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px);mask-position:left top,left calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px)}[tuiFade][data-orientation=vertical]._end{-webkit-mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px),left bottom;mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px),left bottom}[tuiFade][data-orientation=vertical]._start._end{-webkit-mask-position:left top,left bottom;mask-position:left top,left bottom}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFadeStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-fade-styles"
      },
      styles: ["[tuiFade]{scrollbar-width:none;-ms-overflow-style:none;transition-property:-webkit-mask-position;transition-property:mask-position;transition-property:mask-position,-webkit-mask-position;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;overflow:auto;text-overflow:unset!important;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}[tuiFade]::-webkit-scrollbar,[tuiFade]::-webkit-scrollbar-thumb{display:none}[tuiFade]:not([data-orientation=vertical]){overflow-y:hidden;-webkit-mask-image:linear-gradient(to right,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to left,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(#000,#000);mask-image:linear-gradient(to right,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to left,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(#000,#000);-webkit-mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top;mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top;-webkit-mask-size:calc(51% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),calc(50% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),100% calc(100% - var(--t-line-height, 100%));mask-size:calc(51% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),calc(50% + var(--t-fade-size) + var(--t-fade-offset)) var(--t-line-height, 100%),100% calc(100% - var(--t-line-height, 100%))}[tuiFade]:not([data-orientation=vertical])._start{-webkit-mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top;mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top}[tuiFade]:not([data-orientation=vertical])._end{-webkit-mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,right bottom,top;mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,right bottom,top}[tuiFade]:not([data-orientation=vertical])._start._end{-webkit-mask-position:left bottom,right bottom,top;mask-position:left bottom,right bottom,top}[dir=rtl] [tuiFade]:not([data-orientation=vertical])._end{-webkit-mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top;mask-position:left bottom,calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px) bottom,top}[dir=rtl] [tuiFade]:not([data-orientation=vertical])._start{-webkit-mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,right bottom,top;mask-position:calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px) bottom,right bottom,top}[dir=rtl] [tuiFade]:not([data-orientation=vertical])._start._end{-webkit-mask-position:left bottom,right bottom,top;mask-position:left bottom,right bottom,top}[tuiFade][data-orientation=vertical]{overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to top,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset)));mask-image:linear-gradient(to bottom,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset))),linear-gradient(to top,transparent var(--t-fade-offset),#000 calc(var(--t-fade-size) + var(--t-fade-offset)));-webkit-mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px),left calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px);mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px),left calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px);-webkit-mask-size:100% calc(51% + var(--t-fade-size) + var(--t-fade-offset));mask-size:100% calc(51% + var(--t-fade-size) + var(--t-fade-offset))}[tuiFade][data-orientation=vertical]._start{-webkit-mask-position:left top,left calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px);mask-position:left top,left calc(100% + var(--t-fade-size) + var(--t-fade-offset) - 1px)}[tuiFade][data-orientation=vertical]._end{-webkit-mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px),left bottom;mask-position:left calc(-1 * var(--t-fade-size) - var(--t-fade-offset) + 1px),left bottom}[tuiFade][data-orientation=vertical]._start._end{-webkit-mask-position:left top,left bottom;mask-position:left top,left bottom}\n"]
    }]
  }], null, null);
})();
var TuiFade = class _TuiFade {
  constructor() {
    this.lineHeight = null;
    this.size = "1.5em";
    this.offset = "0em";
    this.orientation = "horizontal";
    const el = tuiInjectElement();
    inject(NgZone).runOutsideAngular(() => {
      setTimeout(() => {
        el.style.transition = "";
      });
    });
    tuiWithStyles(TuiFadeStyles);
    merge(inject(WaResizeObserverService, {
      self: true
    }), inject(WaMutationObserverService, {
      self: true
    }), fromEvent(el, "scroll")).pipe(filter(() => !!el.scrollWidth), tuiZonefree(), takeUntilDestroyed()).subscribe(() => {
      el.classList.toggle("_end", this.isEnd(el));
      el.classList.toggle("_start", !!Math.floor(el.scrollLeft) || !!Math.floor(el.scrollTop));
    });
  }
  isEnd({
    scrollTop,
    scrollLeft,
    scrollHeight,
    scrollWidth,
    clientHeight,
    clientWidth
  }) {
    return this.orientation === "vertical" ? Math.round(scrollTop) < scrollHeight - clientHeight - BUFFER : Math.ceil(Math.abs(scrollLeft)) < scrollWidth - clientWidth - BUFFER || // horizontal multiline fade can kick in early due to hanging elements of fonts so using bigger buffer
    scrollHeight > clientHeight + 4 * BUFFER;
  }
  static {
    this.ɵfac = function TuiFade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFade)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiFade,
      selectors: [["", "tuiFade", ""]],
      hostVars: 11,
      hostBindings: function TuiFade_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-orientation", ctx.orientation);
          ɵɵstyleProp("line-height", ctx.lineHeight)("--t-line-height", ctx.lineHeight)("--t-fade-size", ctx.size)("--t-fade-offset", ctx.offset)("transition", "none");
        }
      },
      inputs: {
        lineHeight: [0, "tuiFadeHeight", "lineHeight"],
        size: [0, "tuiFadeSize", "size"],
        offset: [0, "tuiFadeOffset", "offset"],
        orientation: [0, "tuiFade", "orientation"]
      },
      features: [ɵɵProvidersFeature([WaResizeObserverService, WaMutationObserverService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          characterData: true,
          subtree: true
        }
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFade, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiFade]",
      providers: [WaResizeObserverService, WaMutationObserverService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          characterData: true,
          subtree: true
        }
      }],
      host: {
        "[style.line-height]": "lineHeight",
        "[style.--t-line-height]": "lineHeight",
        "[style.--t-fade-size]": "size",
        "[style.--t-fade-offset]": "offset",
        "[attr.data-orientation]": "orientation",
        "[style.transition]": '"none"'
      }
    }]
  }], function() {
    return [];
  }, {
    lineHeight: [{
      type: Input,
      args: ["tuiFadeHeight"]
    }],
    size: [{
      type: Input,
      args: ["tuiFadeSize"]
    }],
    offset: [{
      type: Input,
      args: ["tuiFadeOffset"]
    }],
    orientation: [{
      type: Input,
      args: ["tuiFade"]
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-avatar.mjs
var _c03 = ["*"];
function TuiAvatar_img_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("src", ctx_r0.value, ɵɵsanitizeUrl);
  }
}
function TuiAvatar_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.value);
  }
}
function TuiAvatarLabeled_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", item_r1, " ");
  }
}
function TuiAvatarLabeled_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiAvatarLabeled_ng_container_1_span_1_Template, 2, 1, "span", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.split(ctx_r1.label));
  }
}
var TUI_AVATAR_DEFAULT_OPTIONS = {
  appearance: "",
  round: true,
  size: "l"
};
var [TUI_AVATAR_OPTIONS, tuiAvatarOptionsProvider] = tuiCreateOptions(TUI_AVATAR_DEFAULT_OPTIONS);
var TuiAvatar = class _TuiAvatar {
  constructor() {
    this.options = inject(TUI_AVATAR_OPTIONS);
    this.size = this.options.size;
    this.round = this.options.round;
  }
  get value() {
    return this.src || "";
  }
  get svg() {
    return tuiIsString(this.value) && this.value.endsWith(".svg");
  }
  get type() {
    if (this.value && !tuiIsString(this.value)) {
      return "img";
    }
    if (this.value.startsWith("@tui.")) {
      return "icon";
    }
    if (this.value.length > 0 && this.value.length < 3) {
      return "text";
    }
    return this.value.length ? "img" : "content";
  }
  static {
    this.ɵfac = function TuiAvatar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAvatar)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiAvatar,
      selectors: [["tui-avatar"], ["button", "tuiAvatar", ""], ["a", "tuiAvatar", ""]],
      hostVars: 6,
      hostBindings: function TuiAvatar_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size)("data-type", ctx.type);
          ɵɵclassProp("_round", ctx.round)("_svg", ctx.svg);
        }
      },
      inputs: {
        size: "size",
        round: "round",
        src: "src"
      },
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_AVATAR_OPTIONS)]), ɵɵHostDirectivesFeature([TuiWithAppearance, {
        directive: TuiIcons,
        inputs: ["iconStart", "src"]
      }])],
      ngContentSelectors: _c03,
      decls: 3,
      vars: 2,
      consts: [["alt", "", "loading", "lazy", 3, "src", 4, "ngIf"], [4, "ngIf"], ["alt", "", "loading", "lazy", 3, "src"]],
      template: function TuiAvatar_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, TuiAvatar_img_0_Template, 1, 1, "img", 0)(1, TuiAvatar_ng_container_1_Template, 2, 1, "ng-container", 1);
          ɵɵprojection(2);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.type === "img");
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.type === "text");
        }
      },
      dependencies: [NgIf],
      styles: ['[_nghost-%COMP%]{--t-size: 3.5rem;--t-radius: .75rem;position:relative;display:inline-flex;flex-shrink:0;inline-size:var(--t-size);block-size:var(--t-size);align-items:center;justify-content:center;overflow:hidden;white-space:nowrap;border-radius:var(--t-radius);border:none;background:var(--tui-background-neutral-1);color:var(--tui-text-secondary);vertical-align:middle;box-sizing:border-box;padding:.25rem;opacity:.999}[data-size=xs][_nghost-%COMP%]{--t-size: var(--tui-height-xs);--t-radius: .5rem;font:var(--tui-font-text-xs);font-weight:700}[data-size=xs][data-type=content][_nghost-%COMP%]{font:var(--tui-font-text-m);font-size:.5625rem}[data-size=s][_nghost-%COMP%]{--t-size: var(--tui-height-s);--t-radius: .5rem;font:var(--tui-font-text-s);font-weight:700}[data-size=s][data-type=content][_nghost-%COMP%]{font:var(--tui-font-text-xs);font-weight:700}[data-size=m][_nghost-%COMP%]{--t-size: calc(var(--tui-height-m) - .25rem);--t-radius: .75rem;font:var(--tui-font-text-l);font-weight:700}[data-size=m][data-type=content][_nghost-%COMP%]{font:var(--tui-font-text-m);font-weight:700}[data-size=l][_nghost-%COMP%]{--t-size: var(--tui-height-l);--t-radius: .75rem;font:var(--tui-font-heading-5)}[data-size=l][data-type=content][_nghost-%COMP%]{font:var(--tui-font-text-l);font-weight:700}[data-size=xl][_nghost-%COMP%]{--t-size: 5rem;--t-radius: .75rem;font:var(--tui-font-heading-3)}[data-size=xl][data-type=content][_nghost-%COMP%]{font:var(--tui-font-heading-4)}[data-size=xxl][_nghost-%COMP%]{--t-size: 6rem;--t-radius: 1rem;font:var(--tui-font-heading-3)}[data-size=xxl][data-type=content][_nghost-%COMP%]{font:var(--tui-font-heading-3)}[data-size=xxxl][_nghost-%COMP%]{--t-size: 8rem;--t-radius: 1.25rem;font:var(--tui-font-heading-2)}[data-size=xxxl][data-type=content][_nghost-%COMP%]{font:var(--tui-font-heading-3)}[data-type][_nghost-%COMP%]:before{display:none}[_nghost-%COMP%]:not([data-type=icon]):before{-webkit-mask:none;mask:none}[data-type=img][_nghost-%COMP%]:not(._svg){background:transparent}[data-type=icon][_nghost-%COMP%]:before{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";display:block;font-size:calc(var(--t-size) * .6);-webkit-mask-size:1em;mask-size:1em}._round[_nghost-%COMP%]{--t-radius: calc(var(--t-size) / 2)}[_nghost-%COMP%]     img, [_nghost-%COMP%]     picture, [_nghost-%COMP%]     video{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;object-fit:cover;box-sizing:border-box;border-radius:inherit}._svg[_nghost-%COMP%]   img[_ngcontent-%COMP%]{padding:20%;object-fit:contain;border-radius:unset}'],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAvatar, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-avatar,button[tuiAvatar],a[tuiAvatar]",
      imports: [NgIf],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAppearanceOptionsProvider(TUI_AVATAR_OPTIONS)],
      hostDirectives: [TuiWithAppearance, {
        directive: TuiIcons,
        inputs: ["iconStart: src"]
      }],
      host: {
        "[attr.data-size]": "size",
        "[attr.data-type]": "type",
        "[class._round]": "round",
        "[class._svg]": "svg"
      },
      template: `<img
    *ngIf="type === 'img'"
    alt=""
    loading="lazy"
    [src]="value"
/>
<ng-container *ngIf="type === 'text'">{{ value }}</ng-container>
<ng-content />
`,
      styles: [':host{--t-size: 3.5rem;--t-radius: .75rem;position:relative;display:inline-flex;flex-shrink:0;inline-size:var(--t-size);block-size:var(--t-size);align-items:center;justify-content:center;overflow:hidden;white-space:nowrap;border-radius:var(--t-radius);border:none;background:var(--tui-background-neutral-1);color:var(--tui-text-secondary);vertical-align:middle;box-sizing:border-box;padding:.25rem;opacity:.999}:host[data-size=xs]{--t-size: var(--tui-height-xs);--t-radius: .5rem;font:var(--tui-font-text-xs);font-weight:700}:host[data-size=xs][data-type=content]{font:var(--tui-font-text-m);font-size:.5625rem}:host[data-size=s]{--t-size: var(--tui-height-s);--t-radius: .5rem;font:var(--tui-font-text-s);font-weight:700}:host[data-size=s][data-type=content]{font:var(--tui-font-text-xs);font-weight:700}:host[data-size=m]{--t-size: calc(var(--tui-height-m) - .25rem);--t-radius: .75rem;font:var(--tui-font-text-l);font-weight:700}:host[data-size=m][data-type=content]{font:var(--tui-font-text-m);font-weight:700}:host[data-size=l]{--t-size: var(--tui-height-l);--t-radius: .75rem;font:var(--tui-font-heading-5)}:host[data-size=l][data-type=content]{font:var(--tui-font-text-l);font-weight:700}:host[data-size=xl]{--t-size: 5rem;--t-radius: .75rem;font:var(--tui-font-heading-3)}:host[data-size=xl][data-type=content]{font:var(--tui-font-heading-4)}:host[data-size=xxl]{--t-size: 6rem;--t-radius: 1rem;font:var(--tui-font-heading-3)}:host[data-size=xxl][data-type=content]{font:var(--tui-font-heading-3)}:host[data-size=xxxl]{--t-size: 8rem;--t-radius: 1.25rem;font:var(--tui-font-heading-2)}:host[data-size=xxxl][data-type=content]{font:var(--tui-font-heading-3)}:host[data-type]:before{display:none}:host:not([data-type=icon]):before{-webkit-mask:none;mask:none}:host[data-type=img]:not(._svg){background:transparent}:host[data-type=icon]:before{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";display:block;font-size:calc(var(--t-size) * .6);-webkit-mask-size:1em;mask-size:1em}:host._round{--t-radius: calc(var(--t-size) / 2)}:host ::ng-deep img,:host ::ng-deep picture,:host ::ng-deep video{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;object-fit:cover;box-sizing:border-box;border-radius:inherit}:host._svg img{padding:20%;object-fit:contain;border-radius:unset}\n']
    }]
  }], null, {
    size: [{
      type: Input
    }],
    round: [{
      type: Input
    }],
    src: [{
      type: Input
    }]
  });
})();
var TuiAvatarLabeled = class _TuiAvatarLabeled {
  constructor() {
    this.label = "";
  }
  split(label) {
    return label.split(" ");
  }
  static {
    this.ɵfac = function TuiAvatarLabeled_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAvatarLabeled)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiAvatarLabeled,
      selectors: [["tui-avatar-labeled"]],
      inputs: {
        label: "label"
      },
      ngContentSelectors: _c03,
      decls: 2,
      vars: 1,
      consts: [[4, "ngIf"], ["tuiFade", "", 4, "ngFor", "ngForOf"], ["tuiFade", ""]],
      template: function TuiAvatarLabeled_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
          ɵɵtemplate(1, TuiAvatarLabeled_ng_container_1_Template, 2, 1, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.label.length);
        }
      },
      dependencies: [NgForOf, NgIf, TuiFade],
      styles: ["tui-avatar-labeled{display:flex;inline-size:3.5rem;box-sizing:content-box;flex-direction:column;text-align:center;align-items:center;line-height:.895rem;font-size:.75rem;padding:0 .5rem;white-space:nowrap}tui-avatar-labeled tui-avatar{margin-block-end:.375rem}tui-avatar-labeled [tuiFade]{inline-size:calc(100% + 1rem)}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiAvatarLabeled.prototype, "split", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAvatarLabeled, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-avatar-labeled",
      imports: [NgForOf, NgIf, TuiFade],
      template: `
        <ng-content />
        <ng-container *ngIf="label.length">
            <span
                *ngFor="let item of split(label)"
                tuiFade
            >
                {{ item }}
            </span>
        </ng-container>
    `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: ["tui-avatar-labeled{display:flex;inline-size:3.5rem;box-sizing:content-box;flex-direction:column;text-align:center;align-items:center;line-height:.895rem;font-size:.75rem;padding:0 .5rem;white-space:nowrap}tui-avatar-labeled tui-avatar{margin-block-end:.375rem}tui-avatar-labeled [tuiFade]{inline-size:calc(100% + 1rem)}\n"]
    }]
  }], null, {
    label: [{
      type: Input
    }],
    split: []
  });
})();
var TuiAvatarOutlineStyles = class _TuiAvatarOutlineStyles {
  static {
    this.ɵfac = function TuiAvatarOutlineStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAvatarOutlineStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiAvatarOutlineStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-avatar-outline"],
      decls: 0,
      vars: 0,
      template: function TuiAvatarOutlineStyles_Template(rf, ctx) {
      },
      styles: ['[tuiAvatarOutline]{--t-outline: .1875rem;--t-gap: .125rem}[tuiAvatarOutline][data-size=xs],[tuiAvatarOutline][data-size=s],[tuiAvatarOutline][data-size=m]{--t-outline: .125rem;--t-gap: .0625rem}[tuiAvatarOutline]._outline{-webkit-mask:radial-gradient(closest-side,#000,#000 calc(100% - var(--t-gap) - var(--t-outline) - .5px),transparent calc(100% - var(--t-gap) - var(--t-outline)),transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)));mask:radial-gradient(closest-side,#000,#000 calc(100% - var(--t-gap) - var(--t-outline) - .5px),transparent calc(100% - var(--t-gap) - var(--t-outline)),transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)))}[tuiAvatarOutline]._outline:after{content:"";position:absolute;top:0;left:0;inline-size:100%;block-size:100%;background:var(--t-fill);-webkit-mask:radial-gradient(closest-side,transparent,transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)));mask:radial-gradient(closest-side,transparent,transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)))}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAvatarOutlineStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-avatar-outline"
      },
      styles: ['[tuiAvatarOutline]{--t-outline: .1875rem;--t-gap: .125rem}[tuiAvatarOutline][data-size=xs],[tuiAvatarOutline][data-size=s],[tuiAvatarOutline][data-size=m]{--t-outline: .125rem;--t-gap: .0625rem}[tuiAvatarOutline]._outline{-webkit-mask:radial-gradient(closest-side,#000,#000 calc(100% - var(--t-gap) - var(--t-outline) - .5px),transparent calc(100% - var(--t-gap) - var(--t-outline)),transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)));mask:radial-gradient(closest-side,#000,#000 calc(100% - var(--t-gap) - var(--t-outline) - .5px),transparent calc(100% - var(--t-gap) - var(--t-outline)),transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)))}[tuiAvatarOutline]._outline:after{content:"";position:absolute;top:0;left:0;inline-size:100%;block-size:100%;background:var(--t-fill);-webkit-mask:radial-gradient(closest-side,transparent,transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)));mask:radial-gradient(closest-side,transparent,transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)))}\n']
    }]
  }], null, null);
})();
var TuiAvatarOutline = class _TuiAvatarOutline {
  constructor() {
    this.nothing = tuiWithStyles(TuiAvatarOutlineStyles);
    this.tuiAvatarOutline = "";
  }
  get value() {
    return this.tuiAvatarOutline === "" ? "var(--tui-background-accent-1)" : this.tuiAvatarOutline;
  }
  static {
    this.ɵfac = function TuiAvatarOutline_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAvatarOutline)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiAvatarOutline,
      selectors: [["", "tuiAvatarOutline", ""]],
      hostVars: 4,
      hostBindings: function TuiAvatarOutline_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("--t-fill", ctx.value);
          ɵɵclassProp("_outline", ctx.value);
        }
      },
      inputs: {
        tuiAvatarOutline: "tuiAvatarOutline"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAvatarOutline, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiAvatarOutline]",
      host: {
        "[style.--t-fill]": "value",
        "[class._outline]": "value"
      }
    }]
  }], null, {
    tuiAvatarOutline: [{
      type: Input
    }]
  });
})();
var TuiAvatarStack = class _TuiAvatarStack {
  constructor() {
    this.direction = "right";
  }
  static {
    this.ɵfac = function TuiAvatarStack_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAvatarStack)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiAvatarStack,
      selectors: [["tui-avatar-stack"]],
      hostVars: 1,
      hostBindings: function TuiAvatarStack_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-direction", ctx.direction);
        }
      },
      inputs: {
        direction: "direction"
      },
      ngContentSelectors: _c03,
      decls: 1,
      vars: 0,
      template: function TuiAvatarStack_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      styles: ["tui-avatar-stack{display:flex;--t-gap: .125rem}tui-avatar-stack tui-avatar{--t-offset: 2.5rem}tui-avatar-stack tui-avatar[data-size=xl]{--t-offset: 2.125rem}tui-avatar-stack tui-avatar[data-size=l]{--t-offset: 1.5rem}tui-avatar-stack tui-avatar[data-size=m]{--t-offset: .75rem}tui-avatar-stack tui-avatar[data-size=s]{--t-offset: .575rem}tui-avatar-stack tui-avatar[data-size=xs]{--t-offset: .375rem}tui-avatar-stack tui-avatar._round{-webkit-mask-image:radial-gradient(circle at calc(50% - calc(var(--tui-inline) * (var(--t-size) - var(--t-offset)))) 50%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px));mask-image:radial-gradient(circle at calc(50% - calc(var(--tui-inline) * (var(--t-size) - var(--t-offset)))) 50%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px))}tui-avatar-stack[data-direction=right] tui-avatar._round{--tui-inline: -1}[dir=rtl] tui-avatar-stack[data-direction=right] tui-avatar._round{--tui-inline: 1}tui-avatar-stack[data-direction=right] tui-avatar._round:last-child{-webkit-mask-image:none;mask-image:none}tui-avatar-stack[data-direction=left] tui-avatar._round:first-child{-webkit-mask-image:none;mask-image:none}tui-avatar-stack[data-direction=left] tui-avatar:not(._round):not(:first-child),[dir=rtl] tui-avatar-stack[data-direction=right] tui-avatar:not(._round):not(:last-child){-webkit-mask-image:radial-gradient(circle at 0% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 0% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to right,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));mask-image:radial-gradient(circle at 0% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 0% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to right,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));-webkit-mask-position:calc(var(--t-offset) - var(--t-radius)) calc(-1 * (var(--t-size) - var(--t-radius))),calc(var(--t-offset) - var(--t-radius)) calc(var(--t-size) - var(--t-radius)),bottom;mask-position:calc(var(--t-offset) - var(--t-radius)) calc(-1 * (var(--t-size) - var(--t-radius))),calc(var(--t-offset) - var(--t-radius)) calc(var(--t-size) - var(--t-radius)),bottom}tui-avatar-stack[data-direction=right] tui-avatar:not(._round):not(:last-child),[dir=rtl] tui-avatar-stack[data-direction=left] tui-avatar:not(._round):not(:first-child){-webkit-mask-image:radial-gradient(circle at 150% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 150% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to left,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));mask-image:radial-gradient(circle at 150% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 150% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to left,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));-webkit-mask-position:calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(-1 * var(--t-gap)),calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(100% + var(--t-gap)),bottom;mask-position:calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(-1 * var(--t-gap)),calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(100% + var(--t-gap)),bottom}tui-avatar-stack tui-avatar:not(._round){-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}[dir=rtl] tui-avatar-stack[data-direction=left] tui-avatar:not(._round),tui-avatar-stack[data-direction=right] tui-avatar:not(._round){-webkit-mask-size:calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),100%;mask-size:calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),100%}[dir=rtl] tui-avatar-stack[data-direction=right] tui-avatar:not(._round){-webkit-mask-size:unset;mask-size:unset}tui-avatar-stack tui-avatar:not(:last-child){margin-inline-end:calc(-1 * var(--t-offset))}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAvatarStack, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-avatar-stack",
      template: "<ng-content />",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[attr.data-direction]": "direction"
      },
      styles: ["tui-avatar-stack{display:flex;--t-gap: .125rem}tui-avatar-stack tui-avatar{--t-offset: 2.5rem}tui-avatar-stack tui-avatar[data-size=xl]{--t-offset: 2.125rem}tui-avatar-stack tui-avatar[data-size=l]{--t-offset: 1.5rem}tui-avatar-stack tui-avatar[data-size=m]{--t-offset: .75rem}tui-avatar-stack tui-avatar[data-size=s]{--t-offset: .575rem}tui-avatar-stack tui-avatar[data-size=xs]{--t-offset: .375rem}tui-avatar-stack tui-avatar._round{-webkit-mask-image:radial-gradient(circle at calc(50% - calc(var(--tui-inline) * (var(--t-size) - var(--t-offset)))) 50%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px));mask-image:radial-gradient(circle at calc(50% - calc(var(--tui-inline) * (var(--t-size) - var(--t-offset)))) 50%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px))}tui-avatar-stack[data-direction=right] tui-avatar._round{--tui-inline: -1}[dir=rtl] tui-avatar-stack[data-direction=right] tui-avatar._round{--tui-inline: 1}tui-avatar-stack[data-direction=right] tui-avatar._round:last-child{-webkit-mask-image:none;mask-image:none}tui-avatar-stack[data-direction=left] tui-avatar._round:first-child{-webkit-mask-image:none;mask-image:none}tui-avatar-stack[data-direction=left] tui-avatar:not(._round):not(:first-child),[dir=rtl] tui-avatar-stack[data-direction=right] tui-avatar:not(._round):not(:last-child){-webkit-mask-image:radial-gradient(circle at 0% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 0% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to right,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));mask-image:radial-gradient(circle at 0% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 0% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to right,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));-webkit-mask-position:calc(var(--t-offset) - var(--t-radius)) calc(-1 * (var(--t-size) - var(--t-radius))),calc(var(--t-offset) - var(--t-radius)) calc(var(--t-size) - var(--t-radius)),bottom;mask-position:calc(var(--t-offset) - var(--t-radius)) calc(-1 * (var(--t-size) - var(--t-radius))),calc(var(--t-offset) - var(--t-radius)) calc(var(--t-size) - var(--t-radius)),bottom}tui-avatar-stack[data-direction=right] tui-avatar:not(._round):not(:last-child),[dir=rtl] tui-avatar-stack[data-direction=left] tui-avatar:not(._round):not(:first-child){-webkit-mask-image:radial-gradient(circle at 150% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 150% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to left,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));mask-image:radial-gradient(circle at 150% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 150% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to left,transparent calc(var(--t-offset) + var(--t-gap)),#000 calc(var(--t-offset) + var(--t-gap)));-webkit-mask-position:calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(-1 * var(--t-gap)),calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(100% + var(--t-gap)),bottom;mask-position:calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(-1 * var(--t-gap)),calc((var(--t-offset) - var(--t-size) + var(--t-radius) / 2 + var(--t-gap) + 1px) * -1) calc(100% + var(--t-gap)),bottom}tui-avatar-stack tui-avatar:not(._round){-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}[dir=rtl] tui-avatar-stack[data-direction=left] tui-avatar:not(._round),tui-avatar-stack[data-direction=right] tui-avatar:not(._round){-webkit-mask-size:calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),100%;mask-size:calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),100%}[dir=rtl] tui-avatar-stack[data-direction=right] tui-avatar:not(._round){-webkit-mask-size:unset;mask-size:unset}tui-avatar-stack tui-avatar:not(:last-child){margin-inline-end:calc(-1 * var(--t-offset))}\n"]
    }]
  }], null, {
    direction: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-checkbox.mjs
var _c04 = ["type", "checkbox", "tuiCheckbox", ""];
var TUI_CHECKBOX_DEFAULT_OPTIONS = {
  size: "m",
  appearance: (el) => el.checked || el.indeterminate ? "primary" : "outline-grayscale",
  icons: {
    checked: "@tui.check",
    indeterminate: "@tui.minus"
  }
};
var TUI_CHECKBOX_OPTIONS = new InjectionToken(ngDevMode ? "TUI_CHECKBOX_OPTIONS" : "", {
  factory: () => TUI_CHECKBOX_DEFAULT_OPTIONS
});
function tuiCheckboxOptionsProvider(options) {
  return tuiProvideOptions(TUI_CHECKBOX_OPTIONS, options, TUI_CHECKBOX_DEFAULT_OPTIONS);
}
var TuiCheckbox = class _TuiCheckbox {
  constructor() {
    this.appearance = inject(TuiAppearance);
    this.options = inject(TUI_CHECKBOX_OPTIONS);
    this.cdr = inject(ChangeDetectorRef);
    this.resolver = tuiInjectIconResolver();
    this.destroyRef = inject(DestroyRef);
    this.el = tuiInjectElement();
    this.size = this.options.size;
    this.control = inject(NgControl, {
      optional: true,
      self: true
    });
  }
  ngOnInit() {
    if (!this.control?.valueChanges) {
      return;
    }
    tuiControlValue(this.control).pipe(tuiWatch(this.cdr), takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
      const fix = this.control instanceof NgModel && value === null ? this.control.model : value;
      this.el.indeterminate = fix === null;
    });
  }
  ngDoCheck() {
    this.appearance.tuiAppearance = tuiIsString(this.options.appearance) ? this.options.appearance : this.options.appearance(this.el);
  }
  getIcon(state) {
    const option = this.options.icons[state];
    const icon = tuiIsString(option) ? option : option(this.size);
    return icon && `url(${this.resolver(icon)})`;
  }
  static {
    this.ɵfac = function TuiCheckbox_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCheckbox)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCheckbox,
      selectors: [["input", "type", "checkbox", "tuiCheckbox", ""]],
      hostVars: 8,
      hostBindings: function TuiCheckbox_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵdomProperty("disabled", !ctx.control || ctx.control.disabled);
          ɵɵattribute("data-size", ctx.size);
          ɵɵstyleProp("--t-checked-icon", ctx.getIcon("checked"))("--t-indeterminate-icon", ctx.getIcon("indeterminate"));
          ɵɵclassProp("_readonly", !ctx.control);
        }
      },
      inputs: {
        size: "size"
      },
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiAppearance,
        inputs: ["tuiAppearanceState", "tuiAppearanceState", "tuiAppearanceFocus", "tuiAppearanceFocus", "tuiAppearanceMode", "tuiAppearanceMode"]
      }, TuiNativeValidator])],
      attrs: _c04,
      decls: 0,
      vars: 0,
      template: function TuiCheckbox_Template(rf, ctx) {
      },
      styles: [`[tuiCheckbox]{--t-size: 1.5rem;--t-radius: var(--tui-radius-s);inline-size:var(--t-size);block-size:var(--t-size);border-radius:var(--t-radius);cursor:pointer;margin:0;flex-shrink:0}[tuiCheckbox]:before{position:absolute;top:0;left:0;bottom:0;right:0;content:"";inline-size:1rem;block-size:1rem;margin:auto;background:currentColor;-webkit-mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"></svg>') center / 100%;mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"></svg>') center / 100%;transform:scale(0);transition:transform var(--tui-duration) ease-in-out,-webkit-mask 0s var(--tui-duration) ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s var(--tui-duration) ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s var(--tui-duration) ease-in-out,-webkit-mask 0s var(--tui-duration) ease-in-out}[tuiCheckbox]:disabled._readonly._readonly{opacity:1;pointer-events:none}[tuiCheckbox]:checked:before,[tuiCheckbox]:indeterminate:before{-webkit-mask-image:var(--t-checked-icon);mask-image:var(--t-checked-icon);transform:scale(1);transition:transform var(--tui-duration) ease-in-out,-webkit-mask 0s ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s ease-in-out,-webkit-mask 0s ease-in-out;transition-duration:inherit}[tuiCheckbox]:indeterminate:before{-webkit-mask-image:var(--t-indeterminate-icon);mask-image:var(--t-indeterminate-icon)}[tuiCheckbox][data-size=s]{--t-size: 1rem;--t-radius: var(--tui-radius-xs)}[tuiCheckbox][data-size=s]:before{inline-size:.875rem;block-size:.875rem}[tuiCheckbox]:invalid:not([data-mode]),[tuiCheckbox][data-mode~=invalid]{color:#fff}
`],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCheckbox, [{
    type: Component,
    args: [{
      standalone: true,
      selector: 'input[type="checkbox"][tuiCheckbox]',
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [{
        directive: TuiAppearance,
        inputs: ["tuiAppearanceState", "tuiAppearanceFocus", "tuiAppearanceMode"]
      }, TuiNativeValidator],
      host: {
        "[disabled]": "!control || control.disabled",
        "[attr.data-size]": "size",
        "[class._readonly]": "!control",
        "[style.--t-checked-icon]": 'getIcon("checked")',
        "[style.--t-indeterminate-icon]": 'getIcon("indeterminate")'
      },
      styles: [`[tuiCheckbox]{--t-size: 1.5rem;--t-radius: var(--tui-radius-s);inline-size:var(--t-size);block-size:var(--t-size);border-radius:var(--t-radius);cursor:pointer;margin:0;flex-shrink:0}[tuiCheckbox]:before{position:absolute;top:0;left:0;bottom:0;right:0;content:"";inline-size:1rem;block-size:1rem;margin:auto;background:currentColor;-webkit-mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"></svg>') center / 100%;mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"></svg>') center / 100%;transform:scale(0);transition:transform var(--tui-duration) ease-in-out,-webkit-mask 0s var(--tui-duration) ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s var(--tui-duration) ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s var(--tui-duration) ease-in-out,-webkit-mask 0s var(--tui-duration) ease-in-out}[tuiCheckbox]:disabled._readonly._readonly{opacity:1;pointer-events:none}[tuiCheckbox]:checked:before,[tuiCheckbox]:indeterminate:before{-webkit-mask-image:var(--t-checked-icon);mask-image:var(--t-checked-icon);transform:scale(1);transition:transform var(--tui-duration) ease-in-out,-webkit-mask 0s ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s ease-in-out,-webkit-mask 0s ease-in-out;transition-duration:inherit}[tuiCheckbox]:indeterminate:before{-webkit-mask-image:var(--t-indeterminate-icon);mask-image:var(--t-indeterminate-icon)}[tuiCheckbox][data-size=s]{--t-size: 1rem;--t-radius: var(--tui-radius-xs)}[tuiCheckbox][data-size=s]:before{inline-size:.875rem;block-size:.875rem}[tuiCheckbox]:invalid:not([data-mode]),[tuiCheckbox][data-mode~=invalid]{color:#fff}
`]
    }]
  }], null, {
    size: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-switch.mjs
var _c05 = ["type", "checkbox", "tuiSwitch", ""];
var TUI_SWITCH_DEFAULT_OPTIONS = {
  showIcons: true,
  size: "m",
  icon: "@tui.check",
  appearance: (el) => el.checked ? "primary" : "secondary"
};
var TUI_SWITCH_OPTIONS = new InjectionToken(ngDevMode ? "TUI_SWITCH_OPTIONS" : "", {
  factory: () => TUI_SWITCH_DEFAULT_OPTIONS
});
function tuiSwitchOptionsProvider(options) {
  return tuiProvideOptions(TUI_SWITCH_OPTIONS, options, TUI_SWITCH_DEFAULT_OPTIONS);
}
var TuiSwitch = class _TuiSwitch {
  constructor() {
    this.appearance = inject(TuiAppearance);
    this.resolver = tuiInjectIconResolver();
    this.destroyRef = inject(DestroyRef);
    this.cdr = inject(ChangeDetectorRef);
    this.options = inject(TUI_SWITCH_OPTIONS);
    this.el = tuiInjectElement();
    this.control = inject(NgControl, {
      self: true,
      optional: true
    });
    this.size = this.options.size;
    this.showIcons = this.options.showIcons;
  }
  ngOnInit() {
    this.control?.valueChanges?.pipe(tuiWatch(this.cdr), takeUntilDestroyed(this.destroyRef)).subscribe();
  }
  ngDoCheck() {
    this.appearance.tuiAppearance = this.options.appearance(this.el);
  }
  get icon() {
    const {
      options,
      resolver,
      size
    } = this;
    const icon = tuiIsString(options.icon) ? options.icon : options.icon(size);
    return this.showIcons && icon ? `url(${resolver(icon)})` : null;
  }
  static {
    this.ɵfac = function TuiSwitch_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSwitch)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSwitch,
      selectors: [["input", "type", "checkbox", "tuiSwitch", ""]],
      hostAttrs: ["role", "switch"],
      hostVars: 6,
      hostBindings: function TuiSwitch_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵdomProperty("disabled", !ctx.control || ctx.control.disabled);
          ɵɵattribute("data-size", ctx.size);
          ɵɵstyleProp("--t-checked-icon", ctx.icon);
          ɵɵclassProp("_readonly", !ctx.control);
        }
      },
      inputs: {
        size: "size",
        showIcons: "showIcons"
      },
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiAppearance,
        inputs: ["tuiAppearanceState", "tuiAppearanceState", "tuiAppearanceFocus", "tuiAppearanceFocus", "tuiAppearanceMode", "tuiAppearanceMode"]
      }, TuiNativeValidator])],
      attrs: _c05,
      decls: 0,
      vars: 0,
      template: function TuiSwitch_Template(rf, ctx) {
      },
      styles: ['[tuiSwitch]{transition-property:background,box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;inline-size:3rem;block-size:1.5rem;border-radius:2rem;overflow:hidden;cursor:pointer;margin:0;flex-shrink:0}[tuiSwitch][data-size=s]{block-size:1rem;inline-size:2rem}[tuiSwitch][data-size=s]:before{inline-size:1rem;transform:translate(-1rem);-webkit-mask-size:.75rem;mask-size:.75rem}[tuiSwitch][data-size=s]:after{inline-size:1rem;box-shadow:-2.625rem 0 0 .5rem var(--tui-background-base);outline-width:.167rem;transform:scale(.375)}[tuiSwitch][data-size=s]:checked:after{transform:scale(.375) translate(2.625rem)}[tuiSwitch]:checked:before{transform:none}[tuiSwitch]:checked:after{transform:scale(.33333) translate(4.5rem)}[tuiSwitch]:disabled._readonly._readonly{opacity:1}[tuiSwitch]:before,[tuiSwitch]:after{content:"";position:absolute;block-size:100%;inline-size:1.5rem;transition-property:transform}[tuiSwitch]:before{left:.125rem;display:var(--t-checked-icon, none);background:currentColor;-webkit-mask:var(--t-checked-icon) no-repeat center;mask:var(--t-checked-icon) no-repeat center;-webkit-mask-size:1rem;mask-size:1rem;transform:translate(-1.5rem)}[tuiSwitch]:after{right:0;border-radius:100%;transform:scale(.33333);box-shadow:-4.5rem 0 0 .75rem var(--tui-background-base);outline:.375rem solid var(--tui-background-neutral-2-pressed);outline-offset:var(--t-checked-icon, 20rem)}[tuiSwitch]:invalid:not([data-mode]),[tuiSwitch][data-mode~=invalid]{color:#fff}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSwitch, [{
    type: Component,
    args: [{
      standalone: true,
      selector: 'input[type="checkbox"][tuiSwitch]',
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [{
        directive: TuiAppearance,
        inputs: ["tuiAppearanceState", "tuiAppearanceFocus", "tuiAppearanceMode"]
      }, TuiNativeValidator],
      host: {
        role: "switch",
        "[disabled]": "!control || control.disabled",
        "[attr.data-size]": "size",
        "[class._readonly]": "!control",
        "[style.--t-checked-icon]": "icon"
      },
      styles: ['[tuiSwitch]{transition-property:background,box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;inline-size:3rem;block-size:1.5rem;border-radius:2rem;overflow:hidden;cursor:pointer;margin:0;flex-shrink:0}[tuiSwitch][data-size=s]{block-size:1rem;inline-size:2rem}[tuiSwitch][data-size=s]:before{inline-size:1rem;transform:translate(-1rem);-webkit-mask-size:.75rem;mask-size:.75rem}[tuiSwitch][data-size=s]:after{inline-size:1rem;box-shadow:-2.625rem 0 0 .5rem var(--tui-background-base);outline-width:.167rem;transform:scale(.375)}[tuiSwitch][data-size=s]:checked:after{transform:scale(.375) translate(2.625rem)}[tuiSwitch]:checked:before{transform:none}[tuiSwitch]:checked:after{transform:scale(.33333) translate(4.5rem)}[tuiSwitch]:disabled._readonly._readonly{opacity:1}[tuiSwitch]:before,[tuiSwitch]:after{content:"";position:absolute;block-size:100%;inline-size:1.5rem;transition-property:transform}[tuiSwitch]:before{left:.125rem;display:var(--t-checked-icon, none);background:currentColor;-webkit-mask:var(--t-checked-icon) no-repeat center;mask:var(--t-checked-icon) no-repeat center;-webkit-mask-size:1rem;mask-size:1rem;transform:translate(-1.5rem)}[tuiSwitch]:after{right:0;border-radius:100%;transform:scale(.33333);box-shadow:-4.5rem 0 0 .75rem var(--tui-background-base);outline:.375rem solid var(--tui-background-neutral-2-pressed);outline-offset:var(--t-checked-icon, 20rem)}[tuiSwitch]:invalid:not([data-mode]),[tuiSwitch][data-mode~=invalid]{color:#fff}\n']
    }]
  }], null, {
    size: [{
      type: Input
    }],
    showIcons: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-chip.mjs
var TUI_CHIP_DEFAULT_OPTIONS = {
  appearance: "neutral",
  size: "s"
};
var TUI_CHIP_OPTIONS = new InjectionToken(ngDevMode ? "TUI_CHIP_OPTIONS" : "", {
  factory: () => TUI_CHIP_DEFAULT_OPTIONS
});
function tuiChipOptionsProvider(options) {
  return tuiProvideOptions(TUI_CHIP_OPTIONS, options, TUI_CHIP_DEFAULT_OPTIONS);
}
var TuiChipStyles = class _TuiChipStyles {
  static {
    this.ɵfac = function TuiChipStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiChipStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiChipStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-chip"],
      decls: 0,
      vars: 0,
      template: function TuiChipStyles_Template(rf, ctx) {
      },
      styles: ["tui-chip,[tuiChip]{--t-gap: .125rem;--t-margin: -.125rem;--t-icon-size: 1rem;--t-padding: 0 .625rem;--t-size: var(--tui-height-s);-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, 0rem) - 2 * var(--t-margin, 0rem));font:var(--tui-font-text-s);border-radius:var(--tui-radius-m);padding:var(--t-padding);block-size:var(--t-size);inline-size:-webkit-fit-content;inline-size:-moz-fit-content;inline-size:fit-content;isolation:isolate}tui-chip>img,[tuiChip]>img,tui-chip>tui-svg,[tuiChip]>tui-svg,tui-chip>tui-icon,[tuiChip]>tui-icon,tui-chip>tui-avatar,[tuiChip]>tui-avatar,tui-chip>tui-badge,[tuiChip]>tui-badge,tui-chip>[tuiBadge],[tuiChip]>[tuiBadge],tui-chip>[tuiRadio],[tuiChip]>[tuiRadio],tui-chip>[tuiSwitch],[tuiChip]>[tuiSwitch],tui-chip>[tuiCheckbox],[tuiChip]>[tuiCheckbox],tui-chip[tuiIcons]:before,[tuiChip][tuiIcons]:before,tui-chip[tuiIcons]:after,[tuiChip][tuiIcons]:after{margin:var(--t-margin)}tui-chip:matches(a,button,select,textarea,input,label,.tui-interactive):not(:disabled),[tuiChip]:matches(a,button,select,textarea,input,label,.tui-interactive):not(:disabled){cursor:pointer}tui-chip:is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled),[tuiChip]:is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled){cursor:pointer}tui-chip>tui-icon,[tuiChip]>tui-icon,tui-chip[tuiIcons]:before,[tuiChip][tuiIcons]:before,tui-chip[tuiIcons]:after,[tuiChip][tuiIcons]:after{font-size:var(--t-icon-size)!important}tui-chip>[tuiIconButton],[tuiChip]>[tuiIconButton]{margin:-.375rem}tui-chip>tui-badge,[tuiChip]>tui-badge,tui-chip>[tuiBadge],[tuiChip]>[tuiBadge]{margin-inline-end:0}tui-chip[data-size=xxs],[tuiChip][data-size=xxs]{--t-gap: 0rem;--t-padding: 0 .25rem;--t-size: 1rem;--t-icon-size: .75rem;font:var(--tui-font-text-xs);border-radius:var(--tui-radius-xs)}tui-chip[data-size=xxs]>[tuiIconButton],[tuiChip][data-size=xxs]>[tuiIconButton]{margin:-.5rem;transform:scale(.75)}tui-chip[data-size=xs],[tuiChip][data-size=xs]{--t-padding: 0 .375rem;--t-size: var(--tui-height-xs);border-radius:var(--tui-radius-xs)}tui-chip[data-size=xs]>[tuiIconButton],[tuiChip][data-size=xs]>[tuiIconButton]{margin:-.375rem}tui-chip[data-size=m],[tuiChip][data-size=m]{--t-margin: -.375rem;--t-icon-size: 1.5rem;--t-padding: 0 1rem;--t-size: var(--tui-height-m);font:var(--tui-font-text-m)}tui-chip[data-size=m]>[tuiIconButton],[tuiChip][data-size=m]>[tuiIconButton]{margin:-.75rem}tui-chip[data-size=m]>tui-badge,[tuiChip][data-size=m]>tui-badge,tui-chip[data-size=m]>[tuiBadge],[tuiChip][data-size=m]>[tuiBadge]{margin-inline-start:-.375rem}tui-chip>img,[tuiChip]>img,tui-chip tui-avatar,[tuiChip] tui-avatar{inline-size:1.5rem;margin-inline-start:-.375rem}tui-chip>[tuiFade]:first-of-type,[tuiChip]>[tuiFade]:first-of-type{flex:1 0 30%;max-inline-size:-webkit-fit-content;max-inline-size:-moz-fit-content;max-inline-size:fit-content}tui-chip>[tuiFade]:last-of-type,[tuiChip]>[tuiFade]:last-of-type{flex:0 1 auto}tui-chip>input[tuiChip],[tuiChip]>input[tuiChip]{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;margin:0}tui-chip>input[tuiChip][type=checkbox],[tuiChip]>input[tuiChip][type=checkbox],tui-chip>input[tuiChip][type=radio],[tuiChip]>input[tuiChip][type=radio]{z-index:-1}tui-chip[tuiAppearance][data-appearance=error],[tuiChip][tuiAppearance][data-appearance=error],tui-chip[tuiAppearance][data-appearance=success],[tuiChip][tuiAppearance][data-appearance=success],tui-chip[tuiAppearance][data-appearance=negative],[tuiChip][tuiAppearance][data-appearance=negative],tui-chip[tuiAppearance][data-appearance=positive],[tuiChip][tuiAppearance][data-appearance=positive],tui-chip[tuiAppearance][data-appearance=warning],[tuiChip][tuiAppearance][data-appearance=warning],tui-chip[tuiAppearance][data-appearance=info],[tuiChip][tuiAppearance][data-appearance=info],tui-chip[tuiAppearance][data-appearance=neutral],[tuiChip][tuiAppearance][data-appearance=neutral]{color:var(--tui-text-primary)}input[tuiChip]:matches(a,button,select,textarea,input,label,.tui-interactive):not(:disabled){cursor:text}input[tuiChip]:is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled){cursor:text}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiChipStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-chip"
      },
      styles: ["tui-chip,[tuiChip]{--t-gap: .125rem;--t-margin: -.125rem;--t-icon-size: 1rem;--t-padding: 0 .625rem;--t-size: var(--tui-height-s);-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, 0rem) - 2 * var(--t-margin, 0rem));font:var(--tui-font-text-s);border-radius:var(--tui-radius-m);padding:var(--t-padding);block-size:var(--t-size);inline-size:-webkit-fit-content;inline-size:-moz-fit-content;inline-size:fit-content;isolation:isolate}tui-chip>img,[tuiChip]>img,tui-chip>tui-svg,[tuiChip]>tui-svg,tui-chip>tui-icon,[tuiChip]>tui-icon,tui-chip>tui-avatar,[tuiChip]>tui-avatar,tui-chip>tui-badge,[tuiChip]>tui-badge,tui-chip>[tuiBadge],[tuiChip]>[tuiBadge],tui-chip>[tuiRadio],[tuiChip]>[tuiRadio],tui-chip>[tuiSwitch],[tuiChip]>[tuiSwitch],tui-chip>[tuiCheckbox],[tuiChip]>[tuiCheckbox],tui-chip[tuiIcons]:before,[tuiChip][tuiIcons]:before,tui-chip[tuiIcons]:after,[tuiChip][tuiIcons]:after{margin:var(--t-margin)}tui-chip:matches(a,button,select,textarea,input,label,.tui-interactive):not(:disabled),[tuiChip]:matches(a,button,select,textarea,input,label,.tui-interactive):not(:disabled){cursor:pointer}tui-chip:is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled),[tuiChip]:is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled){cursor:pointer}tui-chip>tui-icon,[tuiChip]>tui-icon,tui-chip[tuiIcons]:before,[tuiChip][tuiIcons]:before,tui-chip[tuiIcons]:after,[tuiChip][tuiIcons]:after{font-size:var(--t-icon-size)!important}tui-chip>[tuiIconButton],[tuiChip]>[tuiIconButton]{margin:-.375rem}tui-chip>tui-badge,[tuiChip]>tui-badge,tui-chip>[tuiBadge],[tuiChip]>[tuiBadge]{margin-inline-end:0}tui-chip[data-size=xxs],[tuiChip][data-size=xxs]{--t-gap: 0rem;--t-padding: 0 .25rem;--t-size: 1rem;--t-icon-size: .75rem;font:var(--tui-font-text-xs);border-radius:var(--tui-radius-xs)}tui-chip[data-size=xxs]>[tuiIconButton],[tuiChip][data-size=xxs]>[tuiIconButton]{margin:-.5rem;transform:scale(.75)}tui-chip[data-size=xs],[tuiChip][data-size=xs]{--t-padding: 0 .375rem;--t-size: var(--tui-height-xs);border-radius:var(--tui-radius-xs)}tui-chip[data-size=xs]>[tuiIconButton],[tuiChip][data-size=xs]>[tuiIconButton]{margin:-.375rem}tui-chip[data-size=m],[tuiChip][data-size=m]{--t-margin: -.375rem;--t-icon-size: 1.5rem;--t-padding: 0 1rem;--t-size: var(--tui-height-m);font:var(--tui-font-text-m)}tui-chip[data-size=m]>[tuiIconButton],[tuiChip][data-size=m]>[tuiIconButton]{margin:-.75rem}tui-chip[data-size=m]>tui-badge,[tuiChip][data-size=m]>tui-badge,tui-chip[data-size=m]>[tuiBadge],[tuiChip][data-size=m]>[tuiBadge]{margin-inline-start:-.375rem}tui-chip>img,[tuiChip]>img,tui-chip tui-avatar,[tuiChip] tui-avatar{inline-size:1.5rem;margin-inline-start:-.375rem}tui-chip>[tuiFade]:first-of-type,[tuiChip]>[tuiFade]:first-of-type{flex:1 0 30%;max-inline-size:-webkit-fit-content;max-inline-size:-moz-fit-content;max-inline-size:fit-content}tui-chip>[tuiFade]:last-of-type,[tuiChip]>[tuiFade]:last-of-type{flex:0 1 auto}tui-chip>input[tuiChip],[tuiChip]>input[tuiChip]{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;margin:0}tui-chip>input[tuiChip][type=checkbox],[tuiChip]>input[tuiChip][type=checkbox],tui-chip>input[tuiChip][type=radio],[tuiChip]>input[tuiChip][type=radio]{z-index:-1}tui-chip[tuiAppearance][data-appearance=error],[tuiChip][tuiAppearance][data-appearance=error],tui-chip[tuiAppearance][data-appearance=success],[tuiChip][tuiAppearance][data-appearance=success],tui-chip[tuiAppearance][data-appearance=negative],[tuiChip][tuiAppearance][data-appearance=negative],tui-chip[tuiAppearance][data-appearance=positive],[tuiChip][tuiAppearance][data-appearance=positive],tui-chip[tuiAppearance][data-appearance=warning],[tuiChip][tuiAppearance][data-appearance=warning],tui-chip[tuiAppearance][data-appearance=info],[tuiChip][tuiAppearance][data-appearance=info],tui-chip[tuiAppearance][data-appearance=neutral],[tuiChip][tuiAppearance][data-appearance=neutral]{color:var(--tui-text-primary)}input[tuiChip]:matches(a,button,select,textarea,input,label,.tui-interactive):not(:disabled){cursor:text}input[tuiChip]:is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled){cursor:text}\n"]
    }]
  }], null, null);
})();
var TuiChip = class _TuiChip {
  constructor() {
    this.options = inject(TUI_CHIP_OPTIONS);
    this.nothing = tuiWithStyles(TuiChipStyles);
    this.size = this.options.size;
  }
  static {
    this.ɵfac = function TuiChip_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiChip)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiChip,
      selectors: [["tui-chip"], ["", "tuiChip", ""]],
      hostVars: 1,
      hostBindings: function TuiChip_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        size: "size"
      },
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_CHIP_OPTIONS), tuiSwitchOptionsProvider({
        size: "s"
      }), tuiCheckboxOptionsProvider({
        size: "s"
      }), tuiAvatarOptionsProvider({
        size: "xs"
      }), tuiButtonOptionsProvider({
        size: "xs",
        appearance: "icon"
      })]), ɵɵHostDirectivesFeature([TuiWithAppearance, TuiWithIcons])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiChip, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-chip,[tuiChip]",
      providers: [tuiAppearanceOptionsProvider(TUI_CHIP_OPTIONS), tuiSwitchOptionsProvider({
        size: "s"
      }), tuiCheckboxOptionsProvider({
        size: "s"
      }), tuiAvatarOptionsProvider({
        size: "xs"
      }), tuiButtonOptionsProvider({
        size: "xs",
        appearance: "icon"
      })],
      hostDirectives: [TuiWithAppearance, TuiWithIcons],
      host: {
        "[attr.data-size]": "size"
      }
    }]
  }], null, {
    size: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-progress.mjs
var _c06 = ["tuiProgressBar", ""];
var _c12 = ["tuiProgressLabel", ""];
var _c2 = [[["progress"]], [["tui-progress-circle"]], "*"];
var _c3 = ["progress", "tui-progress-circle", "*"];
var TuiProgressFixedGradientStyles = class _TuiProgressFixedGradientStyles {
  static {
    this.ɵfac = function TuiProgressFixedGradientStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiProgressFixedGradientStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiProgressFixedGradientStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-fixed-gradient"],
      decls: 0,
      vars: 0,
      template: function TuiProgressFixedGradientStyles_Template(rf, ctx) {
      },
      styles: ["[tuiProgressFixedGradient]::-moz-progress-bar{inline-size:100%!important;clip-path:inset(0 calc(100% - var(--tui-progress-percent)) 0 0 round var(--tui-radius-m));-moz-transition:clip-path var(--tui-duration) linear;transition:clip-path var(--tui-duration) linear;margin-inline-end:calc(-100% + var(--tui-progress-percent))}[tuiProgressFixedGradient]::-webkit-progress-value{inline-size:100%!important;clip-path:inset(0 calc(100% - var(--tui-progress-percent)) 0 0 round var(--tui-radius-m));-webkit-transition:clip-path var(--tui-duration) linear;transition:clip-path var(--tui-duration) linear}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressFixedGradientStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-fixed-gradient"
      },
      styles: ["[tuiProgressFixedGradient]::-moz-progress-bar{inline-size:100%!important;clip-path:inset(0 calc(100% - var(--tui-progress-percent)) 0 0 round var(--tui-radius-m));-moz-transition:clip-path var(--tui-duration) linear;transition:clip-path var(--tui-duration) linear;margin-inline-end:calc(-100% + var(--tui-progress-percent))}[tuiProgressFixedGradient]::-webkit-progress-value{inline-size:100%!important;clip-path:inset(0 calc(100% - var(--tui-progress-percent)) 0 0 round var(--tui-radius-m));-webkit-transition:clip-path var(--tui-duration) linear;transition:clip-path var(--tui-duration) linear}\n"]
    }]
  }], null, null);
})();
var TuiProgressFixedGradientDirective = class _TuiProgressFixedGradientDirective {
  constructor() {
    this.nativeProgress = tuiInjectElement();
    this.nothing = tuiWithStyles(TuiProgressFixedGradientStyles);
  }
  get progressPercent() {
    const {
      value
    } = this.nativeProgress;
    const max = this.nativeProgress.max ?? 1;
    return Math.min(value / max * 100, 100);
  }
  static {
    this.ɵfac = function TuiProgressFixedGradientDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiProgressFixedGradientDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiProgressFixedGradientDirective,
      selectors: [["progress", "tuiProgressBar", "", "tuiProgressFixedGradient", ""]],
      hostVars: 2,
      hostBindings: function TuiProgressFixedGradientDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("--tui-progress-percent", ctx.progressPercent, "%");
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressFixedGradientDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "progress[tuiProgressBar][tuiProgressFixedGradient]",
      host: {
        "[style.--tui-progress-percent.%]": "progressPercent"
      }
    }]
  }], null, null);
})();
var TUI_PROGRESS_DEFAULT_OPTIONS = {
  color: null,
  size: "m"
};
var TUI_PROGRESS_OPTIONS = new InjectionToken(ngDevMode ? "TUI_PROGRESS_OPTIONS" : "", {
  factory: () => TUI_PROGRESS_DEFAULT_OPTIONS
});
function tuiProgressOptionsProvider(options) {
  return tuiProvideOptions(TUI_PROGRESS_OPTIONS, options, TUI_PROGRESS_DEFAULT_OPTIONS);
}
var TuiProgressBar = class _TuiProgressBar {
  constructor() {
    this.options = inject(TUI_PROGRESS_OPTIONS);
    this.color = this.options.color;
    this.size = this.options.size;
  }
  static {
    this.ɵfac = function TuiProgressBar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiProgressBar)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiProgressBar,
      selectors: [["progress", "tuiProgressBar", ""]],
      hostVars: 3,
      hostBindings: function TuiProgressBar_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
          ɵɵstyleProp("--tui-progress-color", ctx.color);
        }
      },
      inputs: {
        color: "color",
        size: "size"
      },
      attrs: _c06,
      decls: 0,
      vars: 0,
      template: function TuiProgressBar_Template(rf, ctx) {
      },
      styles: ["@keyframes tuiIndeterminateAnimation{50%{background-position:left}}[tuiProgressBar]{-webkit-appearance:none;appearance:none;border:none;--t-height: .75rem;display:block;inline-size:100%;block-size:var(--t-height);color:var(--tui-background-accent-1);background:var(--tui-background-neutral-2);clip-path:inset(0 .5px round var(--tui-radius-m));overflow:hidden;border-radius:1rem;flex-shrink:0}[tuiProgressBar]::-webkit-progress-value{-webkit-transition:inline-size var(--tui-duration) linear;transition:inline-size var(--tui-duration) linear}[tuiProgressBar]::-webkit-progress-value{background:var(--tui-progress-color, currentColor);border-radius:inherit}[tuiProgressBar]::-moz-progress-bar{background:var(--tui-progress-color, currentColor);border-radius:inherit}[tuiProgressBar][data-size=xxs]{--t-height: .125rem}[tuiProgressBar][data-size=xs]{--t-height: .25rem}[tuiProgressBar][data-size=s]{--t-height: .5rem}[tuiProgressBar][data-size=l]{--t-height: 1rem}[tuiProgressBar][data-size=xl]{--t-height: 1.25rem}[tuiProgressBar][data-size=xxl]{--t-height: 1.5rem}[tuiProgressBar]:indeterminate{background:linear-gradient(to right,var(--tui-background-neutral-2) 0 45%,var(--tui-progress-color, currentColor) 45% 55%,var(--tui-background-neutral-2) 55% 100%) right;background-size:225%;animation:tuiIndeterminateAnimation 3s infinite ease-in-out}[tuiProgressBar]:indeterminate::-webkit-progress-value{background:transparent}[tuiProgressBar]:indeterminate::-moz-progress-bar{background:transparent}[tuiProgressBar]::-webkit-progress-inner-element{border-radius:inherit}[tuiProgressBar]::-webkit-progress-bar{background:transparent;border-radius:inherit}label[tuiProgressLabel] [tuiProgressBar]:not(:first-child){position:absolute;top:0;left:0;inline-size:100%;block-size:100%;background:transparent}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressBar, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "progress[tuiProgressBar]",
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[style.--tui-progress-color]": "color",
        "[attr.data-size]": "size"
      },
      styles: ["@keyframes tuiIndeterminateAnimation{50%{background-position:left}}[tuiProgressBar]{-webkit-appearance:none;appearance:none;border:none;--t-height: .75rem;display:block;inline-size:100%;block-size:var(--t-height);color:var(--tui-background-accent-1);background:var(--tui-background-neutral-2);clip-path:inset(0 .5px round var(--tui-radius-m));overflow:hidden;border-radius:1rem;flex-shrink:0}[tuiProgressBar]::-webkit-progress-value{-webkit-transition:inline-size var(--tui-duration) linear;transition:inline-size var(--tui-duration) linear}[tuiProgressBar]::-webkit-progress-value{background:var(--tui-progress-color, currentColor);border-radius:inherit}[tuiProgressBar]::-moz-progress-bar{background:var(--tui-progress-color, currentColor);border-radius:inherit}[tuiProgressBar][data-size=xxs]{--t-height: .125rem}[tuiProgressBar][data-size=xs]{--t-height: .25rem}[tuiProgressBar][data-size=s]{--t-height: .5rem}[tuiProgressBar][data-size=l]{--t-height: 1rem}[tuiProgressBar][data-size=xl]{--t-height: 1.25rem}[tuiProgressBar][data-size=xxl]{--t-height: 1.5rem}[tuiProgressBar]:indeterminate{background:linear-gradient(to right,var(--tui-background-neutral-2) 0 45%,var(--tui-progress-color, currentColor) 45% 55%,var(--tui-background-neutral-2) 55% 100%) right;background-size:225%;animation:tuiIndeterminateAnimation 3s infinite ease-in-out}[tuiProgressBar]:indeterminate::-webkit-progress-value{background:transparent}[tuiProgressBar]:indeterminate::-moz-progress-bar{background:transparent}[tuiProgressBar]::-webkit-progress-inner-element{border-radius:inherit}[tuiProgressBar]::-webkit-progress-bar{background:transparent;border-radius:inherit}label[tuiProgressLabel] [tuiProgressBar]:not(:first-child){position:absolute;top:0;left:0;inline-size:100%;block-size:100%;background:transparent}\n"]
    }]
  }], null, {
    color: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();
var TuiProgressColorSegments = class _TuiProgressColorSegments {
  constructor() {
    this.colors = signal([]);
    this.el = tuiInjectElement();
    this.position = toSignal(inject(WaMutationObserverService, {
      self: true
    }).pipe(map(() => this.el.position), tuiWatch()), {
      initialValue: this.el.position
    });
    this.color = computed(() => {
      const colors = this.colors();
      const position = this.position();
      if (!colors.length || position <= 0) {
        return null;
      }
      const colorsString = colors.reduce((acc, color, i) => `${acc}, ${color} calc(${i} / ${colors.length} * 100% / ${position}) calc(${i + 1} / ${colors.length} * 100% / ${position})`, "");
      return `linear-gradient(to right${colorsString})`;
    });
  }
  set colorsSetter(colors) {
    this.colors.set(colors);
  }
  static {
    this.ɵfac = function TuiProgressColorSegments_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiProgressColorSegments)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiProgressColorSegments,
      selectors: [["progress", "tuiProgressBar", "", "tuiProgressColorSegments", ""]],
      hostVars: 2,
      hostBindings: function TuiProgressColorSegments_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("--tui-progress-color", ctx.color());
        }
      },
      inputs: {
        colorsSetter: [0, "tuiProgressColorSegments", "colorsSetter"]
      },
      features: [ɵɵProvidersFeature([WaMutationObserverService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          attributeOldValue: true
        }
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressColorSegments, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "progress[tuiProgressBar][tuiProgressColorSegments]",
      providers: [WaMutationObserverService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          attributeOldValue: true
        }
      }],
      host: {
        "[style.--tui-progress-color]": "color()"
      }
    }]
  }], null, {
    colorsSetter: [{
      type: Input,
      args: ["tuiProgressColorSegments"]
    }]
  });
})();
var TuiProgressCircle = class _TuiProgressCircle {
  constructor() {
    this.options = inject(TUI_PROGRESS_OPTIONS);
    this.animationDelay = toSignal(of(true).pipe(delay(0)));
    this.value = 0;
    this.max = 1;
    this.color = this.options.color;
    this.size = this.options.size;
    this.arc = false;
  }
  get progressRatio() {
    const ratio = this.value / this.max;
    return Number.isFinite(ratio) ? ratio : 0;
  }
  static {
    this.ɵfac = function TuiProgressCircle_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiProgressCircle)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiProgressCircle,
      selectors: [["tui-progress-circle"]],
      hostVars: 7,
      hostBindings: function TuiProgressCircle_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
          ɵɵstyleProp("--tui-progress-color", ctx.color)("--t-progress-ratio", ctx.progressRatio);
          ɵɵclassProp("_arc", ctx.arc);
        }
      },
      inputs: {
        value: "value",
        max: "max",
        color: "color",
        size: "size",
        arc: [2, "arc", "arc", coerceBooleanProperty]
      },
      decls: 4,
      vars: 4,
      consts: [[1, "t-hidden-progress", 3, "max", "value"], ["aria-hidden", "true", "height", "100%", "width", "100%", 1, "t-svg"], ["cx", "50%", "cy", "50%", 1, "t-track"], ["cx", "50%", "cy", "50%", 1, "t-progress"]],
      template: function TuiProgressCircle_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵdomElement(0, "progress", 0);
          ɵɵnamespaceSVG();
          ɵɵdomElementStart(1, "svg", 1);
          ɵɵdomElement(2, "circle", 2)(3, "circle", 3);
          ɵɵdomElementEnd();
        }
        if (rf & 2) {
          ɵɵdomProperty("max", ctx.max)("value", ctx.value);
          ɵɵadvance(3);
          ɵɵclassProp("t-progress_filled", ctx.animationDelay());
        }
      },
      styles: ["[_nghost-%COMP%]{--t-stroke-width: var(--tui-thickness, .375em);position:relative;display:block;color:var(--tui-background-accent-1);transform:rotate(-90deg);transform-origin:center;font-size:1rem;inline-size:var(--t-diameter);min-inline-size:var(--t-diameter);block-size:var(--t-diameter);border-radius:100%;-webkit-mask:radial-gradient(closest-side,transparent calc(100% - var(--t-stroke-width)),#000 calc(100% - var(--t-stroke-width) + .5px));mask:radial-gradient(closest-side,transparent calc(100% - var(--t-stroke-width)),#000 calc(100% - var(--t-stroke-width) + .5px))}._arc[_nghost-%COMP%]{transform:rotate(135deg)}[data-size=xxs][_nghost-%COMP%]{--t-diameter: 2em}[data-size=xs][_nghost-%COMP%]{--t-diameter: 2.5em}[data-size=s][_nghost-%COMP%]{--t-diameter: 3.5em}[data-size=m][_nghost-%COMP%]{--t-diameter: 4em}[data-size=l][_nghost-%COMP%]{--t-diameter: 5em}[data-size=xl][_nghost-%COMP%]{--t-diameter: 6em}[data-size=xxl][_nghost-%COMP%]{--t-diameter: 8em}.t-track[_ngcontent-%COMP%], .t-progress[_ngcontent-%COMP%]{fill:transparent;stroke-linecap:round;stroke-width:var(--t-stroke-width);r:calc((var(--t-diameter) - var(--t-stroke-width)) / 2)}.t-track[_ngcontent-%COMP%]{stroke:var(--tui-background-neutral-1)}._arc[_nghost-%COMP%]   .t-track[_ngcontent-%COMP%]{stroke-dasharray:calc(.75 * calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2))) calc(.25 * calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2)))}.t-progress[_ngcontent-%COMP%]{stroke:var(--tui-progress-color, currentColor);stroke-dasharray:calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2));stroke-dashoffset:calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2))}.t-progress_filled[_ngcontent-%COMP%]{transition-property:stroke-dashoffset,stroke-dasharray;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;transition-timing-function:linear;stroke-dashoffset:calc(calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2)) - var(--t-progress-ratio) * calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2)))}._arc[_nghost-%COMP%]   .t-progress[_ngcontent-%COMP%]{stroke-dashoffset:.1px;stroke-dasharray:calc(.75 * var(--t-progress-ratio) * calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2))) calc(calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2)))}.t-hidden-progress[_ngcontent-%COMP%]{position:absolute;clip:rect(1px,1px,1px,1px);clip-path:inset(50%);block-size:1px;inline-size:1px;margin:-1px;overflow:hidden;padding:0}.t-svg[_ngcontent-%COMP%]{overflow:unset}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressCircle, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-progress-circle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[attr.data-size]": "size",
        "[style.--tui-progress-color]": "color",
        "[style.--t-progress-ratio]": "progressRatio",
        "[class._arc]": "arc"
      },
      template: '<progress\n    class="t-hidden-progress"\n    [max]="max"\n    [value]="value"\n></progress>\n\n<svg\n    aria-hidden="true"\n    height="100%"\n    width="100%"\n    class="t-svg"\n>\n    <circle\n        cx="50%"\n        cy="50%"\n        class="t-track"\n    />\n\n    <circle\n        cx="50%"\n        cy="50%"\n        class="t-progress"\n        [class.t-progress_filled]="animationDelay()"\n    />\n</svg>\n',
      styles: [":host{--t-stroke-width: var(--tui-thickness, .375em);position:relative;display:block;color:var(--tui-background-accent-1);transform:rotate(-90deg);transform-origin:center;font-size:1rem;inline-size:var(--t-diameter);min-inline-size:var(--t-diameter);block-size:var(--t-diameter);border-radius:100%;-webkit-mask:radial-gradient(closest-side,transparent calc(100% - var(--t-stroke-width)),#000 calc(100% - var(--t-stroke-width) + .5px));mask:radial-gradient(closest-side,transparent calc(100% - var(--t-stroke-width)),#000 calc(100% - var(--t-stroke-width) + .5px))}:host._arc{transform:rotate(135deg)}:host[data-size=xxs]{--t-diameter: 2em}:host[data-size=xs]{--t-diameter: 2.5em}:host[data-size=s]{--t-diameter: 3.5em}:host[data-size=m]{--t-diameter: 4em}:host[data-size=l]{--t-diameter: 5em}:host[data-size=xl]{--t-diameter: 6em}:host[data-size=xxl]{--t-diameter: 8em}.t-track,.t-progress{fill:transparent;stroke-linecap:round;stroke-width:var(--t-stroke-width);r:calc((var(--t-diameter) - var(--t-stroke-width)) / 2)}.t-track{stroke:var(--tui-background-neutral-1)}:host._arc .t-track{stroke-dasharray:calc(.75 * calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2))) calc(.25 * calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2)))}.t-progress{stroke:var(--tui-progress-color, currentColor);stroke-dasharray:calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2));stroke-dashoffset:calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2))}.t-progress_filled{transition-property:stroke-dashoffset,stroke-dasharray;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;transition-timing-function:linear;stroke-dashoffset:calc(calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2)) - var(--t-progress-ratio) * calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2)))}:host._arc .t-progress{stroke-dashoffset:.1px;stroke-dasharray:calc(.75 * var(--t-progress-ratio) * calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2))) calc(calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-stroke-width)) / 2)))}.t-hidden-progress{position:absolute;clip:rect(1px,1px,1px,1px);clip-path:inset(50%);block-size:1px;inline-size:1px;margin:-1px;overflow:hidden;padding:0}.t-svg{overflow:unset}\n"]
    }]
  }], null, {
    value: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    arc: [{
      type: Input,
      args: [{
        transform: coerceBooleanProperty
      }]
    }]
  });
})();
var TuiProgressLabel = class _TuiProgressLabel {
  static {
    this.ɵfac = function TuiProgressLabel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiProgressLabel)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiProgressLabel,
      selectors: [["label", "tuiProgressLabel", ""]],
      attrs: _c12,
      ngContentSelectors: _c3,
      decls: 4,
      vars: 0,
      consts: [[1, "t-label"]],
      template: function TuiProgressLabel_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c2);
          ɵɵprojection(0);
          ɵɵprojection(1, 1);
          ɵɵdomElementStart(2, "span", 0);
          ɵɵprojection(3, 2);
          ɵɵdomElementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{position:relative;display:inline-block;color:var(--tui-text-primary)}.t-label[_ngcontent-%COMP%]{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;display:flex;font:var(--tui-font-text-s);flex-direction:column;justify-content:center;align-items:center}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressLabel, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "label[tuiProgressLabel]",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<ng-content select="progress" />\n<ng-content select="tui-progress-circle" />\n<span class="t-label">\n    <ng-content />\n</span>\n',
      styles: [":host{position:relative;display:inline-block;color:var(--tui-text-primary)}.t-label{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;display:flex;font:var(--tui-font-text-s);flex-direction:column;justify-content:center;align-items:center}\n"]
    }]
  }], null, null);
})();
var TuiProgressSegmentedStyles = class _TuiProgressSegmentedStyles {
  static {
    this.ɵfac = function TuiProgressSegmentedStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiProgressSegmentedStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiProgressSegmentedStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-progress-segmented"],
      decls: 0,
      vars: 0,
      template: function TuiProgressSegmentedStyles_Template(rf, ctx) {
      },
      styles: ["[tuiProgressBar]._segmented{--tui-segment-gap: .5rem;-webkit-mask-image:radial-gradient(circle closest-side at calc(var(--t-height) / 2) center,#999 0 99%,transparent calc(99% + .6px) 100%),radial-gradient(circle closest-side at calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)) center,#999 0 99%,transparent calc(99% + .6px) 100%),linear-gradient(to right,transparent 0 calc(var(--t-height) / 2),#999 calc(var(--t-height) / 2) calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)),transparent calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)));mask-image:radial-gradient(circle closest-side at calc(var(--t-height) / 2) center,#999 0 99%,transparent calc(99% + .6px) 100%),radial-gradient(circle closest-side at calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)) center,#999 0 99%,transparent calc(99% + .6px) 100%),linear-gradient(to right,transparent 0 calc(var(--t-height) / 2),#999 calc(var(--t-height) / 2) calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)),transparent calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)));-webkit-mask-size:calc(100% * var(--t-segment-width) + var(--tui-segment-gap) * var(--t-segment-width));mask-size:calc(100% * var(--t-segment-width) + var(--tui-segment-gap) * var(--t-segment-width))}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressSegmentedStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-progress-segmented"
      },
      styles: ["[tuiProgressBar]._segmented{--tui-segment-gap: .5rem;-webkit-mask-image:radial-gradient(circle closest-side at calc(var(--t-height) / 2) center,#999 0 99%,transparent calc(99% + .6px) 100%),radial-gradient(circle closest-side at calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)) center,#999 0 99%,transparent calc(99% + .6px) 100%),linear-gradient(to right,transparent 0 calc(var(--t-height) / 2),#999 calc(var(--t-height) / 2) calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)),transparent calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)));mask-image:radial-gradient(circle closest-side at calc(var(--t-height) / 2) center,#999 0 99%,transparent calc(99% + .6px) 100%),radial-gradient(circle closest-side at calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)) center,#999 0 99%,transparent calc(99% + .6px) 100%),linear-gradient(to right,transparent 0 calc(var(--t-height) / 2),#999 calc(var(--t-height) / 2) calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)),transparent calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)));-webkit-mask-size:calc(100% * var(--t-segment-width) + var(--tui-segment-gap) * var(--t-segment-width));mask-size:calc(100% * var(--t-segment-width) + var(--tui-segment-gap) * var(--t-segment-width))}\n"]
    }]
  }], null, null);
})();
var TuiProgressSegmented = class _TuiProgressSegmented {
  constructor() {
    this.nothing = tuiWithStyles(TuiProgressSegmentedStyles);
    this.segments = 1;
  }
  static {
    this.ɵfac = function TuiProgressSegmented_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiProgressSegmented)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiProgressSegmented,
      selectors: [["", "tuiProgressBar", "", "segments", ""]],
      hostAttrs: [1, "_segmented"],
      hostVars: 2,
      hostBindings: function TuiProgressSegmented_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("--t-segment-width", 1 / ctx.segments);
        }
      },
      inputs: {
        segments: "segments"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressSegmented, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiProgressBar][segments]",
      host: {
        class: "_segmented",
        "[style.--t-segment-width]": "1 / segments"
      }
    }]
  }], null, {
    segments: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-present.mjs
var TuiPresent = class _TuiPresent {
  constructor() {
    this.visibility$ = new BehaviorSubject(false);
    this.tuiPresentChange = this.visibility$.pipe(distinctUntilChanged(), skip(1));
  }
  ngOnDestroy() {
    this.visibility$.next(false);
  }
  onAnimation(visibility) {
    this.visibility$.next(visibility);
  }
  static {
    this.ɵfac = function TuiPresent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPresent)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiPresent,
      selectors: [["", "tuiPresentChange", ""]],
      hostVars: 2,
      hostBindings: function TuiPresent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("animationcancel.self", function TuiPresent_animationcancel_self_HostBindingHandler() {
            return ctx.onAnimation(false);
          })("animationstart.self", function TuiPresent_animationstart_self_HostBindingHandler() {
            return ctx.onAnimation(true);
          });
        }
        if (rf & 2) {
          ɵɵstyleProp("animation", "tuiPresent 1s infinite");
        }
      },
      outputs: {
        tuiPresentChange: "tuiPresentChange"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPresent, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiPresentChange]",
      host: {
        "[style.animation]": '"tuiPresent 1s infinite"',
        "(animationcancel.self)": "onAnimation(false)",
        "(animationstart.self)": "onAnimation(true)"
      }
    }]
  }], null, {
    tuiPresentChange: [{
      type: Output
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-chevron.mjs
var TUI_CHEVRON = new InjectionToken(ngDevMode ? "TUI_CHEVRON" : "", {
  factory: () => "@tui.chevron-down"
});
var TuiChevronStyles = class _TuiChevronStyles {
  static {
    this.ɵfac = function TuiChevronStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiChevronStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiChevronStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-chevron"],
      decls: 0,
      vars: 0,
      template: function TuiChevronStyles_Template(rf, ctx) {
      },
      styles: ['[tuiChevron][tuiIcons]:after,tui-icon[tuiChevron]:after{transition-property:transform,color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;cursor:pointer}tui-textfield[tuiChevron][tuiIcons]:after{font-size:1rem}tui-textfield[data-size=s][tuiChevron][tuiIcons]:after{margin-inline-end:calc(-.125rem - var(--t-padding))}tui-textfield[data-size=m][tuiChevron][tuiIcons]:after{margin-inline-end:calc(.125rem - var(--t-padding))}tui-textfield[data-size=l][tuiChevron][tuiIcons]:after{margin-inline-end:calc(.25rem - var(--t-padding))}[tuiChevron][tuiIcons]._chevron-rotated:after,tui-icon[tuiChevron]._chevron-rotated:after{transform:rotate(180deg)}[tuiChevron]:has(input[tuiTextfield]:read-only):after{cursor:default}tui-textfield[tuiChevron][style*="--t-icon-end:"][data-size=l]{--t-end: 1.875rem}tui-textfield[tuiChevron][style*="--t-icon-end:"][data-size=m]{--t-end: 1.5rem}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiChevronStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-chevron"
      },
      styles: ['[tuiChevron][tuiIcons]:after,tui-icon[tuiChevron]:after{transition-property:transform,color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;cursor:pointer}tui-textfield[tuiChevron][tuiIcons]:after{font-size:1rem}tui-textfield[data-size=s][tuiChevron][tuiIcons]:after{margin-inline-end:calc(-.125rem - var(--t-padding))}tui-textfield[data-size=m][tuiChevron][tuiIcons]:after{margin-inline-end:calc(.125rem - var(--t-padding))}tui-textfield[data-size=l][tuiChevron][tuiIcons]:after{margin-inline-end:calc(.25rem - var(--t-padding))}[tuiChevron][tuiIcons]._chevron-rotated:after,tui-icon[tuiChevron]._chevron-rotated:after{transform:rotate(180deg)}[tuiChevron]:has(input[tuiTextfield]:read-only):after{cursor:default}tui-textfield[tuiChevron][style*="--t-icon-end:"][data-size=l]{--t-end: 1.875rem}tui-textfield[tuiChevron][style*="--t-icon-end:"][data-size=m]{--t-end: 1.5rem}\n']
    }]
  }], null, null);
})();
var TuiChevron = class _TuiChevron {
  constructor() {
    this.el = tuiInjectElement();
    this.dropdown = inject(TuiDropdownDirective, {
      optional: true
    });
    this.nothing = tuiWithStyles(TuiChevronStyles);
    this.toggle = effect(() => this.el.classList.toggle("_chevron-rotated", this.chevron() || this.chevron() === "" && !!this.dropdown?.ref()));
    this.chevron = signal("");
  }
  set tuiChevron(chevron) {
    this.chevron.set(chevron);
  }
  static {
    this.ɵfac = function TuiChevron_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiChevron)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiChevron,
      selectors: [["", "tuiChevron", ""]],
      hostAttrs: ["tuiChevron", ""],
      inputs: {
        tuiChevron: "tuiChevron"
      },
      features: [ɵɵProvidersFeature([tuiProvide(TUI_ICON_END, TUI_CHEVRON)])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiChevron, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiChevron]",
      providers: [tuiProvide(TUI_ICON_END, TUI_CHEVRON)],
      host: {
        tuiChevron: ""
      }
    }]
  }], null, {
    tuiChevron: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/addon-table/fesm2022/taiga-ui-addon-table-components-table.mjs
var _c07 = ["tuiCaption", ""];
var _c13 = ["*"];
var _c22 = ["tuiTh", ""];
function TuiTableTh_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 3);
    ɵɵlistener("click", function TuiTableTh_button_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateSorterAndDirection());
    });
    ɵɵelementContainer(1, 4);
    ɵɵtext(2);
    ɵɵpipe(3, "async");
    ɵɵelement(4, "tui-icon", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const content_r3 = ɵɵreference(2);
    ɵɵclassProp("t-sort_sorted", ctx_r1.isCurrent);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", content_r3);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 5, ctx_r1.table && ctx_r1.table.change$), " ");
    ɵɵadvance(2);
    ɵɵproperty("icon", ctx_r1.icon);
  }
}
function TuiTableTh_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function TuiTableTh_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6);
    ɵɵlistener("tuiResized", function TuiTableTh_div_3_Template_div_tuiResized_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onResized($event));
    });
    ɵɵelementEnd();
  }
}
var _c32 = ["content"];
var _c4 = ["tuiTd", ""];
var _c5 = ["tuiTr", ""];
function TuiTableTr_ng_container_0_ng_container_1_ng_template_1_td_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 6);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.ngIf;
    const key_r2 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", item_r1[key_r2], " ");
  }
}
function TuiTableTr_ng_container_0_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiTableTr_ng_container_0_ng_container_1_ng_template_1_td_0_Template, 2, 1, "td", 5);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx_r2.item$));
  }
}
function TuiTableTr_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 4);
    ɵɵtemplate(1, TuiTableTr_ng_container_0_ng_container_1_ng_template_1_Template, 2, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const key_r2 = ctx.$implicit;
    const plain_r4 = ɵɵreference(2);
    const items_r5 = ɵɵnextContext().ngIf;
    ɵɵproperty("ngTemplateOutlet", items_r5[key_r2] && items_r5[key_r2].template || plain_r4);
  }
}
function TuiTableTr_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiTableTr_ng_container_0_ng_container_1_Template, 3, 1, "ng-container", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.table.columns);
  }
}
function TuiTableTr_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "td");
  }
}
var _c6 = ["tuiTbody", ""];
function TuiTableTbody_tr_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r3 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r3, " ");
  }
}
function TuiTableTbody_tr_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tr")(1, "th", 1)(2, "button", 2);
    ɵɵlistener("click", function TuiTableTbody_tr_0_Template_button_click_2_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onClick());
    });
    ɵɵelementStart(3, "span", 3);
    ɵɵtemplate(4, TuiTableTbody_tr_0_ng_container_4_Template, 2, 1, "ng-container", 4);
    ɵɵelementEnd();
    ɵɵelement(5, "tui-icon", 5);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("colSpan", ctx_r1.table.columns.length);
    ɵɵadvance(3);
    ɵɵproperty("polymorpheusOutlet", ctx_r1.heading);
    ɵɵadvance();
    ɵɵproperty("tuiChevron", ctx_r1.open);
  }
}
function TuiTableTbody_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵprojection(1);
    ɵɵelementContainerEnd();
  }
}
var _c7 = ["tuiThGroup", ""];
var _c8 = (a0) => ({
  $implicit: a0
});
function TuiTableThGroup_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 3);
  }
  if (rf & 2) {
    const key_r1 = ctx.$implicit;
    const headings_r2 = ɵɵnextContext().ngIf;
    const plain_r3 = ɵɵreference(3);
    ɵɵproperty("ngTemplateOutlet", (headings_r2 == null ? null : headings_r2[key_r1] == null ? null : headings_r2[key_r1].template) || plain_r3)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c8, key_r1));
  }
}
function TuiTableThGroup_ng_container_1_ng_template_2_th_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const key_r4 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", key_r4.toString(), " ");
  }
}
function TuiTableThGroup_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiTableThGroup_ng_container_1_ng_template_2_th_0_Template, 2, 1, "th", 4);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", !ctx_r4.th && !ctx_r4.heads.length);
  }
}
function TuiTableThGroup_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiTableThGroup_ng_container_1_ng_container_1_Template, 1, 4, "ng-container", 2)(2, TuiTableThGroup_ng_container_1_ng_template_2_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r4.table.columns);
  }
}
var TuiTableCaption = class _TuiTableCaption {
  static {
    this.ɵfac = function TuiTableCaption_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTableCaption)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTableCaption,
      selectors: [["caption", "tuiCaption", ""]],
      attrs: _c07,
      ngContentSelectors: _c13,
      decls: 1,
      vars: 0,
      template: function TuiTableCaption_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      styles: ["caption[tuiCaption]{caption-side:bottom;text-align:start;padding:.75rem 0;color:var(--tui-text-secondary)}caption[tuiCaption]>*:not(:first-child){margin-inline-start:.5rem}caption[tuiCaption] tui-pagination:not(:first-child),caption[tuiCaption] tui-pager:not(:first-child){display:inline-flex;vertical-align:middle}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableCaption, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "caption[tuiCaption]",
      template: "<ng-content/>",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: ["caption[tuiCaption]{caption-side:bottom;text-align:start;padding:.75rem 0;color:var(--tui-text-secondary)}caption[tuiCaption]>*:not(:first-child){margin-inline-start:.5rem}caption[tuiCaption] tui-pagination:not(:first-child),caption[tuiCaption] tui-pager:not(:first-child){display:inline-flex;vertical-align:middle}\n"]
    }]
  }], null, null);
})();
var TuiTableCell = class _TuiTableCell {
  constructor() {
    this.tuiCell = "";
    this.template = inject(TemplateRef);
  }
  static {
    this.ɵfac = function TuiTableCell_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTableCell)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTableCell,
      selectors: [["ng-template", "tuiCell", ""]],
      inputs: {
        tuiCell: "tuiCell"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableCell, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiCell]"
    }]
  }], null, {
    tuiCell: [{
      type: Input
    }]
  });
})();
var TuiSortDirection = {
  Asc: 1,
  Desc: -1
};
var TUI_TABLE_DEFAULT_OPTIONS = {
  sticky: false,
  resizable: false,
  open: true,
  size: "m",
  direction: TuiSortDirection.Asc,
  requiredSort: false,
  sortIcons: {
    asc: "@tui.chevron-up",
    desc: "@tui.chevron-down",
    off: "@tui.chevrons-up-down"
  }
};
var TUI_TABLE_OPTIONS = new InjectionToken(ngDevMode ? "TUI_TABLE_OPTIONS" : "", {
  factory: () => TUI_TABLE_DEFAULT_OPTIONS
});
function tuiTableOptionsProvider(options) {
  return tuiProvideOptions(TUI_TABLE_OPTIONS, options, TUI_TABLE_DEFAULT_OPTIONS);
}
var TuiStuck = class _TuiStuck {
  constructor() {
    this.stuck = toSignal(inject(IntersectionObserverService).pipe(map((entries) => (entries[entries.length - 1]?.intersectionRatio ?? 0) < 1), distinctUntilChanged(), tuiWatch(), catchError(() => EMPTY)));
  }
  static {
    this.ɵfac = function TuiStuck_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiStuck)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiStuck,
      selectors: [["never"]],
      hostVars: 2,
      hostBindings: function TuiStuck_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("_stuck", ctx.stuck());
        }
      },
      features: [ɵɵProvidersFeature([IntersectionObserverService, {
        provide: WA_INTERSECTION_THRESHOLD,
        useValue: [0, 1]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiStuck, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-stuck:never",
      providers: [IntersectionObserverService, {
        provide: WA_INTERSECTION_THRESHOLD,
        useValue: [0, 1]
      }],
      host: {
        "[class._stuck]": "stuck()"
      }
    }]
  }], null, null);
})();
var EMPTY_COMPARATOR = () => 0;
var TuiTableStyles = class _TuiTableStyles {
  static {
    this.ɵfac = function TuiTableStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTableStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTableStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-table"],
      decls: 0,
      vars: 0,
      template: function TuiTableStyles_Template(rf, ctx) {
      },
      styles: ["table[tuiTable]{border-collapse:separate;border-spacing:0}table[tuiTable] [tuiCell]{padding:0}table[tuiTable] [tuiTitle]{white-space:nowrap}table[tuiTable] [tuiTitle] tui-icon{font-size:1rem}table[tuiTable] [tuiSubtitle]{color:var(--tui-text-secondary)}table[tuiTable] [tuiTh] [tuiCell],table[tuiTable] [tuiTh] [tuiTitle]{font:inherit;color:inherit}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-table"
      },
      styles: ["table[tuiTable]{border-collapse:separate;border-spacing:0}table[tuiTable] [tuiCell]{padding:0}table[tuiTable] [tuiTitle]{white-space:nowrap}table[tuiTable] [tuiTitle] tui-icon{font-size:1rem}table[tuiTable] [tuiSubtitle]{color:var(--tui-text-secondary)}table[tuiTable] [tuiTh] [tuiCell],table[tuiTable] [tuiTh] [tuiTitle]{font:inherit;color:inherit}\n"]
    }]
  }], null, null);
})();
var TuiTableDirective = class _TuiTableDirective {
  constructor() {
    this.options = inject(TUI_TABLE_OPTIONS);
    this.cdr = inject(ChangeDetectorRef);
    this.nothing = tuiWithStyles(TuiTableStyles);
    this.columns = [];
    this.direction = this.options.direction;
    this.sorter = EMPTY_COMPARATOR;
    this.directionChange = new EventEmitter();
    this.sorterChange = new EventEmitter();
    this.sortChange = combineLatest([this.sorterChange, this.directionChange]).pipe(debounceTime(0), map(([sortComparator, sortDirection]) => ({
      sortBy: sortComparator,
      orderBy: sortDirection,
      sortComparator,
      sortDirection
    })));
    this.appearance = signal("table");
    this.size = signal(this.options.size);
    this.cleaner = signal(false);
    this.change$ = new Subject();
  }
  set sizeSetter(size) {
    this.size.set(size);
  }
  updateSorterAndDirection(sorter) {
    if (this.sorter === sorter) {
      this.updateSorter(this.sorter, this.direction === TuiSortDirection.Asc ? TuiSortDirection.Desc : TuiSortDirection.Asc);
    } else {
      this.updateSorter(sorter);
    }
  }
  ngOnChanges() {
    this.change$.next();
  }
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
  updateSorter(sorter, direction = TuiSortDirection.Asc) {
    this.sorter = sorter || EMPTY_COMPARATOR.bind({});
    this.direction = direction;
    this.sorterChange.emit(sorter);
    this.directionChange.emit(this.direction);
    this.change$.next();
  }
  static {
    this.ɵfac = function TuiTableDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTableDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTableDirective,
      selectors: [["table", "tuiTable", ""]],
      hostVars: 1,
      hostBindings: function TuiTableDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size());
        }
      },
      inputs: {
        columns: "columns",
        direction: "direction",
        sorter: "sorter",
        sizeSetter: [0, "size", "sizeSetter"]
      },
      outputs: {
        directionChange: "directionChange",
        sorterChange: "sorterChange",
        sortChange: "sortChange"
      },
      features: [ɵɵProvidersFeature([{
        provide: WA_INTERSECTION_ROOT_MARGIN,
        useValue: "10000px 10000px 10000px 0px"
      }, tuiProvide(TUI_TEXTFIELD_OPTIONS, _TuiTableDirective), tuiButtonOptionsProvider({
        size: "s"
      }), tuiBadgeOptionsProvider({
        size: "m",
        appearance: "neutral"
      }), tuiChipOptionsProvider({
        size: "xxs",
        appearance: "neutral"
      }), tuiProgressOptionsProvider({
        size: "s",
        color: "var(--tui-text-action)"
      })]), ɵɵHostDirectivesFeature([TuiStuck]), ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "table[tuiTable]",
      providers: [{
        provide: WA_INTERSECTION_ROOT_MARGIN,
        useValue: "10000px 10000px 10000px 0px"
      }, tuiProvide(TUI_TEXTFIELD_OPTIONS, TuiTableDirective), tuiButtonOptionsProvider({
        size: "s"
      }), tuiBadgeOptionsProvider({
        size: "m",
        appearance: "neutral"
      }), tuiChipOptionsProvider({
        size: "xxs",
        appearance: "neutral"
      }), tuiProgressOptionsProvider({
        size: "s",
        color: "var(--tui-text-action)"
      })],
      hostDirectives: [TuiStuck],
      host: {
        "[attr.data-size]": "size()"
      }
    }]
  }], null, {
    columns: [{
      type: Input
    }],
    direction: [{
      type: Input
    }],
    sorter: [{
      type: Input
    }],
    directionChange: [{
      type: Output
    }],
    sorterChange: [{
      type: Output
    }],
    sortChange: [{
      type: Output
    }],
    sizeSetter: [{
      type: Input,
      args: ["size"]
    }]
  });
})();
var TuiTableDirectionOrder = class _TuiTableDirectionOrder {
  constructor() {
    this.table = inject(TuiTableDirective);
    this.directionOrderChange = this.table.directionChange.pipe(map((dir) => dir === 1 ? "asc" : "desc"));
  }
  set directionOrder(order) {
    this.table.direction = order === "asc" ? TuiSortDirection.Asc : TuiSortDirection.Desc;
  }
  static {
    this.ɵfac = function TuiTableDirectionOrder_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTableDirectionOrder)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTableDirectionOrder,
      selectors: [["table", "tuiTable", "", "tuiDirectionOrder", ""]],
      inputs: {
        directionOrder: "directionOrder"
      },
      outputs: {
        directionOrderChange: "directionOrderChange"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableDirectionOrder, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "table[tuiTable][tuiDirectionOrder]"
    }]
  }], null, {
    directionOrderChange: [{
      type: Output
    }],
    directionOrder: [{
      type: Input
    }]
  });
})();
var TuiTableHead = class _TuiTableHead {
  constructor() {
    this.tuiHead = "";
    this.template = inject(TemplateRef);
  }
  static {
    this.ɵfac = function TuiTableHead_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTableHead)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTableHead,
      selectors: [["", "tuiHead", ""]],
      inputs: {
        tuiHead: "tuiHead"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableHead, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiHead]"
    }]
  }], null, {
    tuiHead: [{
      type: Input,
      args: [{
        required: true
      }]
    }]
  });
})();
var TuiTableResized = class _TuiTableResized {
  constructor() {
    this.doc = inject(DOCUMENT);
    this.el = tuiInjectElement();
    this.tuiResized = tuiTypedFromEvent(this.el, "mousedown").pipe(tuiPreventDefault(), switchMap(() => {
      const {
        width,
        right
      } = this.el.closest("th")?.getBoundingClientRect() || EMPTY_CLIENT_RECT;
      return tuiTypedFromEvent(this.doc, "mousemove").pipe(distinctUntilChanged(), map(({
        clientX
      }) => width + clientX - right), takeUntil(tuiTypedFromEvent(this.doc, "mouseup")));
    }));
  }
  static {
    this.ɵfac = function TuiTableResized_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTableResized)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTableResized,
      selectors: [["", "tuiResized", ""]],
      outputs: {
        tuiResized: "tuiResized"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableResized, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiResized]"
    }]
  }], null, {
    tuiResized: [{
      type: Output
    }]
  });
})();
var TuiTableTh = class _TuiTableTh {
  constructor() {
    this.options = inject(TUI_TABLE_OPTIONS);
    this.head = inject(TuiTableHead, {
      optional: true
    });
    this.width = null;
    this.table = inject(forwardRef(() => TuiTableDirective), {
      optional: true
    });
    this.minWidth = -Infinity;
    this.maxWidth = Infinity;
    this.sorter = this.head ? (a, b) => tuiDefaultSort(a[this.key], b[this.key]) : null;
    this.resizable = this.options.resizable;
    this.sticky = this.options.sticky;
    this.requiredSort = this.options.requiredSort;
  }
  get key() {
    if (!this.head) {
      throw new TuiTableSortKeyException();
    }
    return this.head.tuiHead;
  }
  get isCurrent() {
    return !!this.sorter && !!this.table && this.sorter === this.table.sorter;
  }
  get icon() {
    if (this.isCurrent) {
      return this.table?.direction === TuiSortDirection.Asc ? this.options.sortIcons.asc : this.options.sortIcons.desc;
    }
    return this.options.sortIcons.off;
  }
  updateSorterAndDirection() {
    const sorter = this.requiredSort ? this.sorter : null;
    this.table?.updateSorterAndDirection(this.isCurrentAndDescDirection ? sorter : this.sorter);
  }
  onResized(width) {
    this.width = Math.min(Math.max(width, this.minWidth), this.maxWidth);
  }
  get isCurrentAndDescDirection() {
    return this.sorter === this.table?.sorter && this.table?.direction === TuiSortDirection.Desc;
  }
  static {
    this.ɵfac = function TuiTableTh_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTableTh)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTableTh,
      selectors: [["th", "tuiTh", ""]],
      hostVars: 8,
      hostBindings: function TuiTableTh_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("min-width", ctx.width || ctx.minWidth, "px")("width", ctx.width || ctx.minWidth, "px")("max-width", ctx.width || ctx.maxWidth, "px");
          ɵɵclassProp("_sticky", ctx.sticky);
        }
      },
      inputs: {
        minWidth: "minWidth",
        maxWidth: "maxWidth",
        sorter: "sorter",
        resizable: "resizable",
        sticky: "sticky",
        requiredSort: "requiredSort"
      },
      attrs: _c22,
      ngContentSelectors: _c13,
      decls: 4,
      vars: 3,
      consts: [["content", ""], ["type", "button", "class", "t-sort", 3, "t-sort_sorted", "click", 4, "ngIf", "ngIfElse"], ["class", "t-bar", 3, "tuiResized", 4, "ngIf"], ["type", "button", 1, "t-sort", 3, "click"], [3, "ngTemplateOutlet"], [1, "t-icon", 3, "icon"], [1, "t-bar", 3, "tuiResized"]],
      template: function TuiTableTh_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, TuiTableTh_button_0_Template, 5, 7, "button", 1)(1, TuiTableTh_ng_template_1_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor)(3, TuiTableTh_div_3_Template, 1, 0, "div", 2);
        }
        if (rf & 2) {
          const content_r3 = ɵɵreference(2);
          ɵɵproperty("ngIf", ctx.sorter && ctx.table)("ngIfElse", content_r3);
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ctx.resizable);
        }
      },
      dependencies: [AsyncPipe, NgIf, NgTemplateOutlet, TuiIcon, TuiTableResized],
      styles: ['[_nghost-%COMP%]{transition-property:box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;top:0;block-size:var(--tui-height-m);font:var(--tui-font-text-s);text-align:start;font-weight:700;color:var(--tui-text-secondary);background:var(--tui-background-base);cursor:default;padding:0 .75rem;box-sizing:border-box;box-shadow:0 .3125rem #ededed00;border:1px solid var(--tui-border-normal);filter:opacity(1)}@supports (-webkit-hyphens: none){[_nghost-%COMP%]{transform:translateZ(0)}}[_nghost-%COMP%]:not(:first-child){border-inline-start:none}._sticky[_nghost-%COMP%], ._stuck   ._sticky[_nghost-%COMP%]{position:sticky;z-index:30}._sticky[_nghost-%COMP%]:first-child, ._stuck   ._sticky[_nghost-%COMP%]:first-child{left:0}._sticky[_nghost-%COMP%]:after, ._stuck   ._sticky[_nghost-%COMP%]:after{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;top:0;left:100%;bottom:0;inline-size:.3125rem;pointer-events:none;background:#edededb3;opacity:0}._stuck   [_nghost-%COMP%]{z-index:20}tr:not(:first-child)[_nghost-%COMP%], tr:not(:first-child)   [_nghost-%COMP%]{border-block-start:none}table[data-size="l"][_nghost-%COMP%], table[data-size="l"]   [_nghost-%COMP%]{block-size:var(--tui-height-l);font:var(--tui-font-text-m);font-weight:700;padding:0 1rem}table[data-size="s"][_nghost-%COMP%], table[data-size="s"]   [_nghost-%COMP%]{block-size:var(--tui-height-s);font:var(--tui-font-text-s);font-weight:700;padding:0 .5rem}thead[tuiThead][_nghost-%COMP%], thead[tuiThead]   [_nghost-%COMP%]{position:sticky}table._stuck._sticky[_nghost-%COMP%]:after, table._stuck   ._sticky[_nghost-%COMP%]:after{opacity:1}thead[tuiThead]._stuck[_nghost-%COMP%], thead[tuiThead]._stuck   [_nghost-%COMP%]{box-shadow:0 .3125rem #edededb3}[tuiTheme="dark"]._sticky[_nghost-%COMP%]:after, [tuiTheme="dark"]   ._sticky[_nghost-%COMP%]:after{background:#3c3c3ce6}[tuiTheme="dark"]   thead[tuiThead]._stuck[_nghost-%COMP%], [tuiTheme="dark"]   thead[tuiThead]._stuck   [_nghost-%COMP%]{box-shadow:0 .3125rem #3c3c3ce6}[tuiTheme="dark"]   thead[tuiThead]._stuck[_nghost-%COMP%]:first-child, [tuiTheme="dark"]   thead[tuiThead]._stuck   [_nghost-%COMP%]:first-child{box-shadow:.0625rem .3125rem #3c3c3ce6}table[data-size="l"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size="l"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-l)}table[data-size="m"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size="m"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-m)}table[data-size="s"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size="s"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-s)}.t-sort[_ngcontent-%COMP%]{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;line-height:inherit;text-decoration:none;display:inline-flex;vertical-align:top;flex-direction:inherit;align-items:center;outline:none;font:inherit;text-transform:inherit;color:inherit;cursor:pointer}.t-sort_sorted[_ngcontent-%COMP%]{color:var(--tui-text-primary)}.t-sort[_ngcontent-%COMP%]:focus-visible{background:var(--tui-service-selection-background)}.t-sort[_ngcontent-%COMP%]:hover{color:var(--tui-text-primary)}.t-bar[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:0;bottom:0;right:-1px;inline-size:.1875rem;justify-self:flex-end;border-inline-start:2px solid transparent;background:var(--tui-status-warning);background-clip:content-box;cursor:ew-resize;opacity:0}.t-bar[_ngcontent-%COMP%]:hover, .t-bar[_ngcontent-%COMP%]:active{opacity:1}.t-icon[_ngcontent-%COMP%]{border-width:.25rem}'],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableTh, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "th[tuiTh]",
      imports: [AsyncPipe, NgIf, NgTemplateOutlet, TuiIcon, TuiTableResized],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[style.min-width.px]": "width || minWidth",
        "[style.width.px]": "width || minWidth",
        "[style.max-width.px]": "width || maxWidth",
        "[class._sticky]": "sticky"
      },
      template: '<button\n    *ngIf="sorter && table; else content"\n    type="button"\n    class="t-sort"\n    [class.t-sort_sorted]="isCurrent"\n    (click)="updateSorterAndDirection()"\n>\n    <ng-container [ngTemplateOutlet]="content" />\n    {{ table && table.change$ | async }}\n    <tui-icon\n        class="t-icon"\n        [icon]="icon"\n    />\n</button>\n<ng-template #content>\n    <ng-content />\n</ng-template>\n<div\n    *ngIf="resizable"\n    class="t-bar"\n    (tuiResized)="onResized($event)"\n></div>\n',
      styles: [':host{transition-property:box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;top:0;block-size:var(--tui-height-m);font:var(--tui-font-text-s);text-align:start;font-weight:700;color:var(--tui-text-secondary);background:var(--tui-background-base);cursor:default;padding:0 .75rem;box-sizing:border-box;box-shadow:0 .3125rem #ededed00;border:1px solid var(--tui-border-normal);filter:opacity(1)}@supports (-webkit-hyphens: none){:host{transform:translateZ(0)}}:host:not(:first-child){border-inline-start:none}:host._sticky,:host-context(._stuck) :host._sticky{position:sticky;z-index:30}:host._sticky:first-child,:host-context(._stuck) :host._sticky:first-child{left:0}:host._sticky:after,:host-context(._stuck) :host._sticky:after{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;top:0;left:100%;bottom:0;inline-size:.3125rem;pointer-events:none;background:#edededb3;opacity:0}:host-context(._stuck) :host{z-index:20}:host-context(tr:not(:first-child)){border-block-start:none}:host-context(table[data-size="l"]){block-size:var(--tui-height-l);font:var(--tui-font-text-m);font-weight:700;padding:0 1rem}:host-context(table[data-size="s"]){block-size:var(--tui-height-s);font:var(--tui-font-text-s);font-weight:700;padding:0 .5rem}:host-context(thead[tuiThead]){position:sticky}:host-context(table._stuck)._sticky:after{opacity:1}:host-context(thead[tuiThead]._stuck){box-shadow:0 .3125rem #edededb3}:host-context([tuiTheme="dark"])._sticky:after{background:#3c3c3ce6}:host-context([tuiTheme="dark"] thead[tuiThead]._stuck){box-shadow:0 .3125rem #3c3c3ce6}:host-context([tuiTheme="dark"] thead[tuiThead]._stuck):first-child{box-shadow:.0625rem .3125rem #3c3c3ce6}:host-context(table[data-size="l"] thead[tuiThead] tr:nth-child(2)){top:var(--tui-height-l)}:host-context(table[data-size="m"] thead[tuiThead] tr:nth-child(2)){top:var(--tui-height-m)}:host-context(table[data-size="s"] thead[tuiThead] tr:nth-child(2)){top:var(--tui-height-s)}.t-sort{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;line-height:inherit;text-decoration:none;display:inline-flex;vertical-align:top;flex-direction:inherit;align-items:center;outline:none;font:inherit;text-transform:inherit;color:inherit;cursor:pointer}.t-sort_sorted{color:var(--tui-text-primary)}.t-sort:focus-visible{background:var(--tui-service-selection-background)}.t-sort:hover{color:var(--tui-text-primary)}.t-bar{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:0;bottom:0;right:-1px;inline-size:.1875rem;justify-self:flex-end;border-inline-start:2px solid transparent;background:var(--tui-status-warning);background-clip:content-box;cursor:ew-resize;opacity:0}.t-bar:hover,.t-bar:active{opacity:1}.t-icon{border-width:.25rem}\n']
    }]
  }], null, {
    minWidth: [{
      type: Input
    }],
    maxWidth: [{
      type: Input
    }],
    sorter: [{
      type: Input
    }],
    resizable: [{
      type: Input
    }],
    sticky: [{
      type: Input
    }],
    requiredSort: [{
      type: Input
    }]
  });
})();
var TuiTableSortKeyException = class extends Error {
  constructor() {
    super(ngDevMode ? "Trying to sort with no key" : "");
  }
};
var TuiTableSortable = class _TuiTableSortable {
  constructor() {
    this.table = inject(TuiTableDirective);
    this.th = inject(TuiTableTh);
    this.sortBy = inject(forwardRef(() => TuiTableSortBy));
    this.sorter = () => 0;
  }
  get key() {
    return this.th.key;
  }
  ngOnChanges() {
    if (this.sortable) {
      this.sorter = this.match ? this.table.sorter : this.sorter;
      this.th.sorter = this.sorter;
    } else {
      this.th.sorter = null;
    }
  }
  check() {
    if (this.match && this.table.sorter !== this.sorter) {
      this.table.updateSorter(this.sorter);
    }
  }
  get match() {
    return this.sortBy.tuiSortBy === this.key;
  }
  static {
    this.ɵfac = function TuiTableSortable_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTableSortable)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTableSortable,
      selectors: [["th", "tuiTh", "", "tuiSortable", ""]],
      inputs: {
        sortable: [2, "tuiSortable", "sortable", coerceBooleanProperty]
      },
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableSortable, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "th[tuiTh][tuiSortable]"
    }]
  }], null, {
    sortable: [{
      type: Input,
      args: [{
        alias: "tuiSortable",
        transform: coerceBooleanProperty
      }]
    }]
  });
})();
var TuiTableSortBy = class _TuiTableSortBy {
  constructor() {
    this.sortables = EMPTY_QUERY;
    this.table = inject(TuiTableDirective);
    this.tuiSortByChange = this.table.sorterChange.pipe(
      // delay is for getting actual ContentChildren (sortables) https://github.com/angular/angular/issues/38976
      delay(0),
      filter(() => !!this.sortables.length),
      map((sorter) => this.getKey(sorter))
    );
    this.tuiSortChange = combineLatest([this.tuiSortByChange, this.table.directionChange]).pipe(debounceTime(0), map(([sortKey, sortDirection]) => ({
      sortBy: sortKey,
      orderBy: sortDirection,
      sortKey,
      sortDirection
    })));
    this.tuiSortBy = null;
  }
  set sortBy(sortBy) {
    this.tuiSortBy = sortBy;
    this.checkSortables();
  }
  checkSortables() {
    this.sortables.forEach((s) => s.check());
  }
  getKey(sorter) {
    return this.sortables.find((s) => s.sorter === sorter)?.key || null;
  }
  static {
    this.ɵfac = function TuiTableSortBy_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTableSortBy)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTableSortBy,
      selectors: [["table", "tuiTable", "", "tuiSortBy", ""]],
      contentQueries: function TuiTableSortBy_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiTableSortable, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sortables = _t);
        }
      },
      inputs: {
        sortBy: [0, "tuiSortBy", "sortBy"]
      },
      outputs: {
        tuiSortByChange: "tuiSortByChange",
        tuiSortChange: "tuiSortChange"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableSortBy, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "table[tuiTable][tuiSortBy]"
    }]
  }], null, {
    sortables: [{
      type: ContentChildren,
      args: [TuiTableSortable, {
        descendants: true
      }]
    }],
    tuiSortByChange: [{
      type: Output
    }],
    tuiSortChange: [{
      type: Output
    }],
    sortBy: [{
      type: Input,
      args: ["tuiSortBy"]
    }]
  });
})();
var TuiTableThead = class _TuiTableThead {
  static {
    this.ɵfac = function TuiTableThead_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTableThead)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTableThead,
      selectors: [["thead", "tuiThead", ""]],
      features: [ɵɵProvidersFeature([{
        provide: WA_INTERSECTION_ROOT_MARGIN,
        useValue: "0px 10000px 10000px 10000px"
      }]), ɵɵHostDirectivesFeature([TuiStuck])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableThead, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "thead[tuiThead]",
      providers: [{
        provide: WA_INTERSECTION_ROOT_MARGIN,
        useValue: "0px 10000px 10000px 10000px"
      }],
      hostDirectives: [TuiStuck]
    }]
  }], null, null);
})();
var TuiTableSortPipe = class _TuiTableSortPipe {
  constructor() {
    this.table = inject(TuiTableDirective);
  }
  transform(data) {
    return this.sort(data ?? [], this.table.sorter, this.table.direction);
  }
  sort(data, sorter, direction) {
    return [...data].sort((a, b) => direction * sorter(a, b));
  }
  static {
    this.ɵfac = function TuiTableSortPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTableSortPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiTableSort",
      type: _TuiTableSortPipe,
      pure: false
    });
  }
};
__decorate([tuiPure], TuiTableSortPipe.prototype, "sort", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableSortPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiTableSort",
      pure: false
    }]
  }], null, {
    sort: []
  });
})();
var TUI_TABLE_PROVIDER = [{
  provide: TuiTableDirective,
  deps: [[new SkipSelf(), TuiTableDirective]],
  useFactory: (controller) => {
    controller.change$.pipe(tuiWatch(), takeUntilDestroyed()).subscribe();
    return controller;
  }
}];
var TuiTableExpand = class _TuiTableExpand {
  constructor() {
    this.el = tuiInjectElement();
    this.server = isPlatformServer(inject(PLATFORM_ID));
    this.transitioning = signal(false);
    this.contentHeight = computed((_ = this.expanded()) => this.update());
    this.visible$ = new Subject();
    this.sub = this.visible$.pipe(switchMap((v) => v ? timer(500).pipe(map(() => v)) : of(v)), takeUntilDestroyed()).subscribe((visible) => this.el.classList.toggle("_visible", visible));
    this.expandedChange = new EventEmitter();
    this.expanded = signal(inject(TUI_TABLE_OPTIONS).open);
  }
  set expandedSetter(open) {
    this.expanded.set(open);
    this.transitioning.set(true);
  }
  toggle() {
    this.expanded.set(!this.expanded());
    this.transitioning.set(true);
    this.expandedChange.emit(this.expanded());
  }
  update() {
    if (!this.content || this.server) {
      return 0;
    }
    const el = this.content.nativeElement;
    el.style.setProperty("display", "block");
    const height = el.getBoundingClientRect().height;
    el.style.removeProperty("display");
    return height;
  }
  static {
    this.ɵfac = function TuiTableExpand_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTableExpand)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTableExpand,
      selectors: [["tui-table-expand"]],
      viewQuery: function TuiTableExpand_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c32, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t.first);
        }
      },
      hostAttrs: ["ngSkipHydration", "true"],
      hostBindings: function TuiTableExpand_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("tuiPresentChange", function TuiTableExpand_tuiPresentChange_HostBindingHandler($event) {
            return ctx.visible$.next($event);
          });
        }
      },
      inputs: {
        expandedSetter: [0, "expanded", "expandedSetter"]
      },
      outputs: {
        expandedChange: "expandedChange"
      },
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiPresent,
        outputs: ["tuiPresentChange", "tuiPresentChange"]
      }])],
      ngContentSelectors: _c13,
      decls: 4,
      vars: 6,
      consts: [["content", ""], [1, "t-content"], [1, "t-filler", 3, "animationcancel", "animationend", "animationstart"]],
      template: function TuiTableExpand_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵdomElementStart(0, "div", 1, 0);
          ɵɵprojection(2);
          ɵɵdomElementEnd();
          ɵɵdomElementStart(3, "div", 2);
          ɵɵdomListener("animationcancel", function TuiTableExpand_Template_div_animationcancel_3_listener() {
            return ctx.transitioning.set(false);
          })("animationend", function TuiTableExpand_Template_div_animationend_3_listener() {
            return ctx.transitioning.set(false);
          })("animationstart", function TuiTableExpand_Template_div_animationstart_3_listener() {
            return ctx.transitioning.set(true);
          });
          ɵɵdomElementEnd();
        }
        if (rf & 2) {
          ɵɵclassProp("t-content_open", ctx.expanded() && !ctx.transitioning());
          ɵɵadvance(3);
          ɵɵstyleProp("--t-height", ctx.contentHeight(), "px");
          ɵɵclassProp("t-filler_open", ctx.expanded());
        }
      },
      styles: ["@keyframes _ngcontent-%COMP%_fade-in{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_open{0%{block-size:0}to{block-size:var(--t-height)}}@keyframes _ngcontent-%COMP%_close{0%{block-size:var(--t-height)}to{block-size:0}}[_nghost-%COMP%]{display:contents}[_nghost-%COMP%]:not(._visible){--tui-duration: 0ms}.t-content[_ngcontent-%COMP%]{display:none}.t-content_open[_ngcontent-%COMP%]{display:contents}.t-content_open[_ngcontent-%COMP%]     tr{animation:_ngcontent-%COMP%_fade-in var(--tui-duration)}.t-filler[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_close calc(var(--tui-duration) + 1ms)}.t-filler_open[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_open calc(var(--tui-duration) + 1ms)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableExpand, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-table-expand",
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [{
        directive: TuiPresent,
        outputs: ["tuiPresentChange"]
      }],
      host: {
        ngSkipHydration: "true",
        "(tuiPresentChange)": "visible$.next($event)"
      },
      template: '<div\n    #content\n    class="t-content"\n    [class.t-content_open]="expanded() && !transitioning()"\n>\n    <ng-content />\n</div>\n\n<div\n    class="t-filler"\n    [class.t-filler_open]="expanded()"\n    [style.--t-height.px]="contentHeight()"\n    (animationcancel)="transitioning.set(false)"\n    (animationend)="transitioning.set(false)"\n    (animationstart)="transitioning.set(true)"\n></div>\n',
      styles: ["@keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes open{0%{block-size:0}to{block-size:var(--t-height)}}@keyframes close{0%{block-size:var(--t-height)}to{block-size:0}}:host{display:contents}:host:not(._visible){--tui-duration: 0ms}.t-content{display:none}.t-content_open{display:contents}.t-content_open ::ng-deep tr{animation:fade-in var(--tui-duration)}.t-filler{animation:close calc(var(--tui-duration) + 1ms)}.t-filler_open{animation:open calc(var(--tui-duration) + 1ms)}\n"]
    }]
  }], null, {
    content: [{
      type: ViewChild,
      args: ["content", {
        static: true
      }]
    }],
    expandedChange: [{
      type: Output
    }],
    expandedSetter: [{
      type: Input,
      args: ["expanded"]
    }]
  });
})();
var TuiTableTd = class _TuiTableTd {
  static {
    this.ɵfac = function TuiTableTd_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTableTd)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTableTd,
      selectors: [["th", "tuiTd", ""], ["td", "tuiTd", ""]],
      contentQueries: function TuiTableTd_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiControl, 5)(dirIndex, TuiTextfieldComponent, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.control = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textfield = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function TuiTableTd_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("_editable", ctx.control || ctx.textfield);
        }
      },
      attrs: _c4,
      ngContentSelectors: _c13,
      decls: 1,
      vars: 0,
      template: function TuiTableTd_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      styles: ['[_nghost-%COMP%]{position:relative;text-align:start;background:var(--tui-background-base);border:1px solid var(--tui-border-normal);border-block-start:none;box-sizing:border-box;filter:opacity(1)}@supports (-webkit-hyphens: none){[_nghost-%COMP%]{transform:translateZ(0)}}[_nghost-%COMP%]:first-child{left:0}[_nghost-%COMP%]:not(:first-child){border-inline-start:none}._editable[_nghost-%COMP%]:focus-within{z-index:1}._editable[_nghost-%COMP%]{padding:0!important;vertical-align:top}th[_nghost-%COMP%]{position:sticky;z-index:1}th[_nghost-%COMP%]:after{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;top:0;bottom:0;left:100%;inline-size:.3125rem;pointer-events:none;background:#edededb3;opacity:0}th[_nghost-%COMP%]:focus-within:not(:disabled){z-index:11}[tuiTheme="dark"][_nghost-%COMP%]:after, [tuiTheme="dark"]   [_nghost-%COMP%]:after{background:#3c3c3ce6}table._stuck[_nghost-%COMP%], table._stuck   [_nghost-%COMP%]{z-index:10}table._stuck[_nghost-%COMP%]:last-of-type:after, table._stuck   [_nghost-%COMP%]:last-of-type:after{opacity:1}table[data-size="l"][_nghost-%COMP%], table[data-size="l"]   [_nghost-%COMP%]{block-size:var(--tui-height-l);font:var(--tui-font-text-m);padding:1rem}table[data-size="m"][_nghost-%COMP%], table[data-size="m"]   [_nghost-%COMP%]{block-size:var(--tui-height-m);font:var(--tui-font-text-s);padding:.75rem}table[data-size="s"][_nghost-%COMP%], table[data-size="s"]   [_nghost-%COMP%]{block-size:var(--tui-height-s);font:var(--tui-font-text-s);padding:.25rem .5rem}td[_nghost-%COMP%]:focus-within{z-index:1}td[_nghost-%COMP%]:not(:focus-within){z-index:0}'],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableTd, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "th[tuiTd], td[tuiTd]",
      template: "<ng-content />",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class._editable]": "control || textfield"
      },
      styles: [':host{position:relative;text-align:start;background:var(--tui-background-base);border:1px solid var(--tui-border-normal);border-block-start:none;box-sizing:border-box;filter:opacity(1)}@supports (-webkit-hyphens: none){:host{transform:translateZ(0)}}:host:first-child{left:0}:host:not(:first-child){border-inline-start:none}:host._editable:focus-within{z-index:1}:host._editable{padding:0!important;vertical-align:top}:host(th){position:sticky;z-index:1}:host(th):after{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;top:0;bottom:0;left:100%;inline-size:.3125rem;pointer-events:none;background:#edededb3;opacity:0}:host(th):focus-within:not(:disabled){z-index:11}:host-context([tuiTheme="dark"]):after{background:#3c3c3ce6}:host-context(table._stuck){z-index:10}:host-context(table._stuck):last-of-type:after{opacity:1}:host-context(table[data-size="l"]){block-size:var(--tui-height-l);font:var(--tui-font-text-m);padding:1rem}:host-context(table[data-size="m"]){block-size:var(--tui-height-m);font:var(--tui-font-text-s);padding:.75rem}:host-context(table[data-size="s"]){block-size:var(--tui-height-s);font:var(--tui-font-text-s);padding:.25rem .5rem}:host(td):focus-within{z-index:1}:host(td):not(:focus-within){z-index:0}\n']
    }]
  }], null, {
    control: [{
      type: ContentChild,
      args: [TuiControl]
    }],
    textfield: [{
      type: ContentChild,
      args: [TuiTextfieldComponent]
    }]
  });
})();
var TuiTableTr = class _TuiTableTr {
  constructor() {
    this.cells = EMPTY_QUERY;
    this.body = inject(forwardRef(() => TuiTableTbody));
    this.contentReady$ = new ReplaySubject(1);
    this.table = inject(forwardRef(() => TuiTableDirective));
    this.height = toSignal(inject(WaResizeObserverService, {
      self: true
    }).pipe(map(([entry]) => entry?.contentRect.height ?? 0), distinctUntilChanged(), tuiZoneOptimized()), {
      initialValue: 0
    });
    this.cells$ = this.contentReady$.pipe(switchMap(() => tuiQueryListChanges(this.cells)), map((cells) => cells.reduce((record, item) => __spreadProps(__spreadValues({}, record), {
      [item.tuiCell]: item
    }), {})));
    this.item$ = this.contentReady$.pipe(switchMap(() => tuiQueryListChanges(this.body.rows)), map((rows) => this.body.data[rows.findIndex((row) => row === this)]));
  }
  ngAfterContentInit() {
    Promise.resolve().then(() => this.contentReady$.next(true));
  }
  static {
    this.ɵfac = function TuiTableTr_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTableTr)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTableTr,
      selectors: [["tr", "tuiTr", ""]],
      contentQueries: function TuiTableTr_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiTableCell, 4);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cells = _t);
        }
      },
      hostVars: 2,
      hostBindings: function TuiTableTr_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("--t-row-height", ctx.height(), "px");
        }
      },
      features: [ɵɵProvidersFeature([TUI_TABLE_PROVIDER, WaResizeObserverService])],
      attrs: _c5,
      ngContentSelectors: _c13,
      decls: 5,
      vars: 4,
      consts: [["dummy", ""], ["plain", ""], [4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet", 4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet"], ["tuiTd", "", 4, "ngIf"], ["tuiTd", ""]],
      template: function TuiTableTr_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, TuiTableTr_ng_container_0_Template, 2, 1, "ng-container", 2);
          ɵɵpipe(1, "async");
          ɵɵtemplate(2, TuiTableTr_ng_template_2_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵprojection(4);
        }
        if (rf & 2) {
          const dummy_r6 = ɵɵreference(3);
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 2, ctx.cells$))("ngIfElse", dummy_r6);
        }
      },
      dependencies: [AsyncPipe, NgForOf, NgIf, NgTemplateOutlet, TuiTableTd],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableTr, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tr[tuiTr]",
      imports: [AsyncPipe, NgForOf, NgIf, NgTemplateOutlet, TuiTableTd],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [TUI_TABLE_PROVIDER, WaResizeObserverService],
      host: {
        "[style.--t-row-height.px]": "height()"
      },
      template: '<ng-container *ngIf="cells$ | async as items; else dummy">\n    <ng-container\n        *ngFor="let key of table.columns"\n        [ngTemplateOutlet]="(items[key] && items[key].template) || plain"\n    >\n        <ng-template #plain>\n            <td\n                *ngIf="item$ | async as item"\n                tuiTd\n            >\n                {{ item[key] }}\n            </td>\n        </ng-template>\n    </ng-container>\n</ng-container>\n<ng-template #dummy>\n    <td></td>\n</ng-template>\n<ng-content />\n'
    }]
  }], null, {
    cells: [{
      type: ContentChildren,
      args: [forwardRef(() => TuiTableCell)]
    }]
  });
})();
var TuiTableTbody = class _TuiTableTbody {
  constructor() {
    this.options = inject(TUI_TABLE_OPTIONS);
    this.table = inject(forwardRef(() => TuiTableDirective));
    this.rows = EMPTY_QUERY;
    this.data = [];
    this.open = this.options.open;
    this.openChange = new EventEmitter();
    this.onClick = () => {
      this.open = !this.open;
      this.openChange.emit(this.open);
    };
  }
  static {
    this.ɵfac = function TuiTableTbody_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTableTbody)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTableTbody,
      selectors: [["tbody", "tuiTbody", ""]],
      contentQueries: function TuiTableTbody_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiTableTr, 4);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.rows = _t);
        }
      },
      inputs: {
        data: "data",
        heading: "heading",
        open: "open"
      },
      outputs: {
        openChange: "openChange"
      },
      features: [ɵɵProvidersFeature(TUI_TABLE_PROVIDER)],
      attrs: _c6,
      ngContentSelectors: _c13,
      decls: 2,
      vars: 2,
      consts: [[4, "ngIf"], [1, "t-heading", 3, "colSpan"], ["type", "button", 1, "t-expand", 3, "click"], [1, "t-name"], [4, "polymorpheusOutlet"], [1, "t-chevron", 3, "tuiChevron"]],
      template: function TuiTableTbody_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, TuiTableTbody_tr_0_Template, 6, 3, "tr", 0)(1, TuiTableTbody_ng_container_1_Template, 2, 0, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.heading);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.open);
        }
      },
      dependencies: [NgIf, PolymorpheusOutlet, TuiChevron, TuiIcon],
      styles: ['[_nghost-%COMP%]{border-color:var(--tui-border-normal)}[_nghost-%COMP%]   tr[_ngcontent-%COMP%]{border-color:inherit}.t-expand[_ngcontent-%COMP%]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;display:flex;inline-size:100%;block-size:100%;align-items:center;box-sizing:border-box;outline:none;font-weight:700;cursor:pointer;border-color:inherit}.t-expand[_ngcontent-%COMP%]:focus-visible   .t-name[_ngcontent-%COMP%]{background:var(--tui-service-selection-background)}.t-expand[_ngcontent-%COMP%]:before, .t-expand[_ngcontent-%COMP%]:after{content:"";position:sticky;block-size:100%;border-inline-start:1px solid;border-color:inherit}.t-expand[_ngcontent-%COMP%]:before{left:0}.t-expand[_ngcontent-%COMP%]:after{right:0}.t-heading[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;block-size:var(--tui-height-m);font:var(--tui-font-text-s);padding:0;background:var(--tui-background-neutral-1);border-block-end:1px solid var(--tui-border-normal);border-color:inherit}.t-heading[_ngcontent-%COMP%]:hover{background:var(--tui-background-neutral-1-hover)}table[data-size="l"][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%], table[data-size="l"]   [_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{font:var(--tui-font-text-m);block-size:var(--tui-height-l)}.t-name[_ngcontent-%COMP%]{position:sticky;left:.75rem;display:inline-block}table[data-size="l"][_nghost-%COMP%]   .t-name[_ngcontent-%COMP%], table[data-size="l"]   [_nghost-%COMP%]   .t-name[_ngcontent-%COMP%]{left:1rem}.t-chevron[_ngcontent-%COMP%]{position:sticky;right:.75rem;margin:0 .6875rem 0 auto}'],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableTbody, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tbody[tuiTbody]",
      imports: [NgIf, PolymorpheusOutlet, TuiChevron, TuiIcon],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: TUI_TABLE_PROVIDER,
      template: '<tr *ngIf="heading">\n    <th\n        class="t-heading"\n        [colSpan]="table.columns.length"\n    >\n        <button\n            type="button"\n            class="t-expand"\n            (click)="onClick()"\n        >\n            <span class="t-name">\n                <ng-container *polymorpheusOutlet="heading as text">\n                    {{ text }}\n                </ng-container>\n            </span>\n            <tui-icon\n                class="t-chevron"\n                [tuiChevron]="open"\n            />\n        </button>\n    </th>\n</tr>\n<ng-container *ngIf="open">\n    <ng-content />\n</ng-container>\n',
      styles: [':host{border-color:var(--tui-border-normal)}:host tr{border-color:inherit}.t-expand{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;display:flex;inline-size:100%;block-size:100%;align-items:center;box-sizing:border-box;outline:none;font-weight:700;cursor:pointer;border-color:inherit}.t-expand:focus-visible .t-name{background:var(--tui-service-selection-background)}.t-expand:before,.t-expand:after{content:"";position:sticky;block-size:100%;border-inline-start:1px solid;border-color:inherit}.t-expand:before{left:0}.t-expand:after{right:0}.t-heading{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;block-size:var(--tui-height-m);font:var(--tui-font-text-s);padding:0;background:var(--tui-background-neutral-1);border-block-end:1px solid var(--tui-border-normal);border-color:inherit}.t-heading:hover{background:var(--tui-background-neutral-1-hover)}:host-context(table[data-size="l"]) .t-heading{font:var(--tui-font-text-m);block-size:var(--tui-height-l)}.t-name{position:sticky;left:.75rem;display:inline-block}:host-context(table[data-size="l"]) .t-name{left:1rem}.t-chevron{position:sticky;right:.75rem;margin:0 .6875rem 0 auto}\n']
    }]
  }], null, {
    rows: [{
      type: ContentChildren,
      args: [forwardRef(() => TuiTableTr)]
    }],
    data: [{
      type: Input
    }],
    heading: [{
      type: Input
    }],
    open: [{
      type: Input
    }],
    openChange: [{
      type: Output
    }]
  });
})();
var TuiTableThGroup = class _TuiTableThGroup {
  constructor() {
    this.heads = EMPTY_QUERY;
    this.heads$ = null;
    this.table = inject(forwardRef(() => TuiTableDirective));
  }
  ngAfterContentInit() {
    this.heads$ = this.heads.changes.pipe(startWith(null), map(() => this.heads.reduce((record, item) => __spreadProps(__spreadValues({}, record), {
      [item.tuiHead]: item
    }), {})));
  }
  static {
    this.ɵfac = function TuiTableThGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTableThGroup)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTableThGroup,
      selectors: [["tr", "tuiThGroup", ""]],
      contentQueries: function TuiTableThGroup_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiTableTh, 5)(dirIndex, TuiTableHead, 4);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.th = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.heads = _t);
        }
      },
      features: [ɵɵProvidersFeature([TUI_TABLE_PROVIDER])],
      attrs: _c7,
      ngContentSelectors: _c13,
      decls: 3,
      vars: 3,
      consts: [["plain", ""], [4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["tuiTh", "", 4, "ngIf"], ["tuiTh", ""]],
      template: function TuiTableThGroup_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
          ɵɵtemplate(1, TuiTableThGroup_ng_container_1_Template, 4, 1, "ng-container", 1);
          ɵɵpipe(2, "async");
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx.heads$));
        }
      },
      dependencies: [AsyncPipe, NgForOf, NgIf, NgTemplateOutlet, TuiTableTh],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableThGroup, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tr[tuiThGroup]",
      imports: [AsyncPipe, NgForOf, NgIf, NgTemplateOutlet, TuiTableTh],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [TUI_TABLE_PROVIDER],
      template: '<ng-content />\n<ng-container *ngIf="heads$ | async as headings">\n    <ng-container\n        *ngFor="let key of table.columns"\n        [ngTemplateOutlet]="headings?.[key]?.template || plain"\n        [ngTemplateOutletContext]="{$implicit: key}"\n    />\n    <ng-template\n        #plain\n        let-key\n    >\n        <th\n            *ngIf="!th && !heads.length"\n            tuiTh\n        >\n            {{ key.toString() }}\n        </th>\n    </ng-template>\n</ng-container>\n'
    }]
  }], null, {
    th: [{
      type: ContentChild,
      args: [forwardRef(() => TuiTableTh)]
    }],
    heads: [{
      type: ContentChildren,
      args: [forwardRef(() => TuiTableHead)]
    }]
  });
})();
var TuiTable = [TuiTableDirective, TuiTableCaption, TuiTableTbody, TuiTableThGroup, TuiTableTh, TuiTableTd, TuiTableTr, TuiTableCell, TuiTableHead, TuiTableSortBy, TuiTableSortable, TuiTableThead, TuiTableResized, TuiTableSortPipe, TuiTableDirectionOrder, TuiTableExpand];

// node_modules/@taiga-ui/addon-table/fesm2022/taiga-ui-addon-table-components-table-pagination.mjs
var _c08 = (a0, a1) => ({
  $implicit: a0,
  total: a1
});
function TuiTablePagination_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementStart(2, "strong", 7);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const texts_r1 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", texts_r1.pages, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.pages);
  }
}
function TuiTablePagination_ng_container_0_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 8);
    ɵɵtwoWayListener("tuiDropdownOpenChange", function TuiTablePagination_ng_container_0_button_5_Template_button_tuiDropdownOpenChange_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      ɵɵtwoWayBindingSet(ctx_r1.open, $event) || (ctx_r1.open = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementStart(1, "strong");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const content_r4 = ɵɵreference(9);
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("tuiDropdown", content_r4);
    ɵɵtwoWayProperty("tuiDropdownOpen", ctx_r1.open);
    ɵɵadvance(2);
    ɵɵtextInterpolate2("", ctx_r1.start + 1, "–", ctx_r1.end);
  }
}
function TuiTablePagination_ng_container_0_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "strong");
    ɵɵtext(1, "0 - 0");
    ɵɵelementEnd();
  }
}
function TuiTablePagination_ng_container_0_ng_template_8_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r7 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r7, " ");
  }
}
function TuiTablePagination_ng_container_0_ng_template_8_ng_container_1_tui_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-icon", 14);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("icon", ctx_r1.commonIcons.check);
  }
}
function TuiTablePagination_ng_container_0_ng_template_8_ng_container_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 15);
  }
}
function TuiTablePagination_ng_container_0_ng_template_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 11);
    ɵɵlistener("click", function TuiTablePagination_ng_container_0_ng_template_8_ng_container_1_Template_button_click_1_listener() {
      const item_r6 = ɵɵrestoreView(_r5).$implicit;
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onItem(item_r6));
    });
    ɵɵtemplate(2, TuiTablePagination_ng_container_0_ng_template_8_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 12)(3, TuiTablePagination_ng_container_0_ng_template_8_ng_container_1_tui_icon_3_Template, 1, 1, "tui-icon", 13)(4, TuiTablePagination_ng_container_0_ng_template_8_ng_container_1_ng_template_4_Template, 1, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const fakeIcon_r8 = ɵɵreference(5);
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵproperty("polymorpheusOutlet", ctx_r1.sizeOptionContent)("polymorpheusOutletContext", ɵɵpureFunction2(4, _c08, item_r6, ctx_r1.total));
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r6 === ctx_r1.size)("ngIfElse", fakeIcon_r8);
  }
}
function TuiTablePagination_ng_container_0_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tui-data-list", 9);
    ɵɵtemplate(1, TuiTablePagination_ng_container_0_ng_template_8_ng_container_1_Template, 6, 7, "ng-container", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.items);
  }
}
function TuiTablePagination_ng_container_0_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 16);
    ɵɵlistener("click", function TuiTablePagination_ng_container_0_ng_container_13_Template_button_click_1_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.back());
    });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 17);
    ɵɵlistener("click", function TuiTablePagination_ng_container_0_ng_container_13_Template_button_click_3_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.forth());
    });
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const spinTexts_r10 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.leftDisabled)("iconStart", ctx_r1.icons.decrement);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", spinTexts_r10[0], " ");
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.rightDisabled)("iconStart", ctx_r1.icons.increment);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", spinTexts_r10[1], " ");
  }
}
function TuiTablePagination_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 4);
    ɵɵtemplate(2, TuiTablePagination_ng_container_0_ng_container_2_Template, 4, 2, "ng-container", 3);
    ɵɵelementEnd();
    ɵɵelementStart(3, "span", 5);
    ɵɵtext(4);
    ɵɵtemplate(5, TuiTablePagination_ng_container_0_button_5_Template, 3, 4, "button", 6)(6, TuiTablePagination_ng_container_0_ng_template_6_Template, 2, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor)(8, TuiTablePagination_ng_container_0_ng_template_8_Template, 2, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵtext(10);
    ɵɵelementStart(11, "strong", 7);
    ɵɵtext(12);
    ɵɵelementEnd()();
    ɵɵtemplate(13, TuiTablePagination_ng_container_0_ng_container_13_Template, 5, 6, "ng-container", 3);
    ɵɵpipe(14, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const texts_r1 = ctx.ngIf;
    const zeroTotal_r11 = ɵɵreference(7);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.showPages);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", texts_r1.linesPerPage, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.total !== 0)("ngIfElse", zeroTotal_r11);
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", texts_r1.of, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.total);
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(14, 7, ctx_r1.spinTexts$));
  }
}
function defaultSizeOptionContent({
  $implicit
}) {
  return `${$implicit}`;
}
var TUI_TABLE_PAGINATION_DEFAULT_OPTIONS = {
  sizeOptionContent: defaultSizeOptionContent,
  showPages: true,
  items: [10, 20, 50, 100],
  size: 10
};
var TUI_TABLE_PAGINATION_OPTIONS = new InjectionToken(ngDevMode ? "TUI_TABLE_PAGINATION_OPTIONS" : "", {
  factory: () => TUI_TABLE_PAGINATION_DEFAULT_OPTIONS
});
function tuiTablePaginationOptionsProvider(options) {
  return tuiProvideOptions(TUI_TABLE_PAGINATION_OPTIONS, options, TUI_TABLE_PAGINATION_DEFAULT_OPTIONS);
}
var TuiTablePagination = class _TuiTablePagination {
  constructor() {
    this.options = inject(TUI_TABLE_PAGINATION_OPTIONS);
    this.open = false;
    this.icons = inject(TUI_SPIN_ICONS);
    this.spinTexts$ = inject(TUI_SPIN_TEXTS);
    this.texts$ = inject(TUI_TABLE_PAGINATION_TEXTS);
    this.commonIcons = inject(TUI_COMMON_ICONS);
    this.items = this.options.items;
    this.total = 0;
    this.page = 0;
    this.size = this.options.size;
    this.paginationChange = new EventEmitter();
  }
  onItem(size) {
    const {
      start
    } = this;
    this.size = size;
    this.open = false;
    this.page = Math.floor(start / this.size);
    this.paginationChange.emit(this.pagination);
  }
  get pages() {
    return Math.ceil(this.total / this.size);
  }
  get showPages() {
    return this.options.showPages;
  }
  get sizeOptionContent() {
    return this.options.sizeOptionContent;
  }
  get start() {
    return Math.min(this.page, Math.floor(this.total / this.size)) * this.size;
  }
  get end() {
    return Math.min(this.start + this.size, this.total);
  }
  get leftDisabled() {
    return !this.start;
  }
  get rightDisabled() {
    return this.end === this.total;
  }
  get pagination() {
    return {
      page: this.page,
      size: this.size
    };
  }
  back() {
    this.page--;
    this.paginationChange.emit(this.pagination);
  }
  forth() {
    this.page++;
    this.paginationChange.emit(this.pagination);
  }
  static {
    this.ɵfac = function TuiTablePagination_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTablePagination)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTablePagination,
      selectors: [["tui-table-pagination"]],
      inputs: {
        items: "items",
        total: "total",
        page: "page",
        size: "size"
      },
      outputs: {
        paginationChange: "paginationChange"
      },
      decls: 2,
      vars: 3,
      consts: [["zeroTotal", ""], ["content", ""], ["fakeIcon", ""], [4, "ngIf"], [1, "t-pages"], ["automation-id", "tui-table-pagination__lines-per-page-wrapper"], ["tuiLink", "", "type", "button", 3, "tuiDropdown", "tuiDropdownOpen", "tuiDropdownOpenChange", 4, "ngIf", "ngIfElse"], [1, "t-strong"], ["tuiLink", "", "type", "button", 3, "tuiDropdownOpenChange", "tuiDropdown", "tuiDropdownOpen"], ["size", "s"], [4, "ngFor", "ngForOf"], ["tuiOption", "", "type", "button", 1, "t-item", 3, "click"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["class", "t-checkmark", 3, "icon", 4, "ngIf", "ngIfElse"], [1, "t-checkmark", 3, "icon"], [1, "t-checkmark"], ["appearance", "icon", "size", "xs", "tuiIconButton", "", "type", "button", 1, "t-button", "t-button_back", 3, "click", "disabled", "iconStart"], ["appearance", "icon", "size", "xs", "tuiIconButton", "", "type", "button", 1, "t-button", 3, "click", "disabled", "iconStart"]],
      template: function TuiTablePagination_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiTablePagination_ng_container_0_Template, 15, 9, "ng-container", 3);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.texts$));
        }
      },
      dependencies: [AsyncPipe, NgForOf, NgIf, PolymorpheusOutlet, TuiButton, TuiDataListComponent, TuiOption, TuiDropdownDirective, TuiDropdownOpen, TuiIcon, TuiLink],
      styles: ["[_nghost-%COMP%]{display:flex;font:var(--tui-font-text-s);align-items:center;color:var(--tui-text-tertiary)}.t-strong[_ngcontent-%COMP%]{color:var(--tui-text-primary)}.t-pages[_ngcontent-%COMP%]{margin-inline-end:auto}.t-item[_ngcontent-%COMP%]{min-inline-size:5.5rem;box-sizing:border-box}.t-checkmark[_ngcontent-%COMP%]{min-inline-size:1rem;font-size:1rem;margin-inline-start:.25rem}.t-button[_ngcontent-%COMP%]{transform:scaleX(var(--tui-inline))}.t-button_back[_ngcontent-%COMP%]{margin-inline-end:.25rem;margin-inline-start:1.5rem}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTablePagination, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-table-pagination",
      imports: [AsyncPipe, NgForOf, NgIf, PolymorpheusOutlet, TuiButton, TuiDataList, TuiDropdownDirective, TuiDropdownOpen, TuiIcon, TuiLink],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<ng-container *ngIf="texts$ | async as texts">\n    <span class="t-pages">\n        <ng-container *ngIf="showPages">\n            {{ texts.pages }}\n            <strong class="t-strong">{{ pages }}</strong>\n        </ng-container>\n    </span>\n    <span automation-id="tui-table-pagination__lines-per-page-wrapper">\n        {{ texts.linesPerPage }}\n\n        <button\n            *ngIf="total !== 0; else zeroTotal"\n            tuiLink\n            type="button"\n            [tuiDropdown]="content"\n            [(tuiDropdownOpen)]="open"\n        >\n            <strong>{{ start + 1 }}–{{ end }}</strong>\n        </button>\n        <ng-template #zeroTotal>\n            <strong>0 - 0</strong>\n        </ng-template>\n        <ng-template #content>\n            <tui-data-list size="s">\n                <ng-container *ngFor="let item of items">\n                    <button\n                        tuiOption\n                        type="button"\n                        class="t-item"\n                        (click)="onItem(item)"\n                    >\n                        <ng-container\n                            *polymorpheusOutlet="sizeOptionContent as text; context: {$implicit: item, total: total}"\n                        >\n                            {{ text }}\n                        </ng-container>\n                        <tui-icon\n                            *ngIf="item === size; else fakeIcon"\n                            class="t-checkmark"\n                            [icon]="commonIcons.check"\n                        />\n\n                        <ng-template #fakeIcon>\n                            <span class="t-checkmark"></span>\n                        </ng-template>\n                    </button>\n                </ng-container>\n            </tui-data-list>\n        </ng-template>\n        {{ texts.of }}\n        <strong class="t-strong">{{ total }}</strong>\n    </span>\n    <ng-container *ngIf="spinTexts$ | async as spinTexts">\n        <button\n            appearance="icon"\n            size="xs"\n            tuiIconButton\n            type="button"\n            class="t-button t-button_back"\n            [disabled]="leftDisabled"\n            [iconStart]="icons.decrement"\n            (click)="back()"\n        >\n            {{ spinTexts[0] }}\n        </button>\n        <button\n            appearance="icon"\n            size="xs"\n            tuiIconButton\n            type="button"\n            class="t-button"\n            [disabled]="rightDisabled"\n            [iconStart]="icons.increment"\n            (click)="forth()"\n        >\n            {{ spinTexts[1] }}\n        </button>\n    </ng-container>\n</ng-container>\n',
      styles: [":host{display:flex;font:var(--tui-font-text-s);align-items:center;color:var(--tui-text-tertiary)}.t-strong{color:var(--tui-text-primary)}.t-pages{margin-inline-end:auto}.t-item{min-inline-size:5.5rem;box-sizing:border-box}.t-checkmark{min-inline-size:1rem;font-size:1rem;margin-inline-start:.25rem}.t-button{transform:scaleX(var(--tui-inline))}.t-button_back{margin-inline-end:.25rem;margin-inline-start:1.5rem}\n"]
    }]
  }], null, {
    items: [{
      type: Input
    }],
    total: [{
      type: Input
    }],
    page: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    paginationChange: [{
      type: Output
    }]
  });
})();

// node_modules/@taiga-ui/addon-table/fesm2022/taiga-ui-addon-table-directives-table-control.mjs
var TuiTableControlDirective = class _TuiTableControlDirective extends TuiControl {
  constructor() {
    super(...arguments);
    this.children = signal([]);
    this.checked = computed(() => !!this.children().length && this.children().every((i) => this.value().includes(i.tuiCheckboxRow)));
    this.indeterminate = computed(() => !!this.value().length && !this.checked());
  }
  toggleAll() {
    this.onChange(this.checked() ? [] : this.children().map((i) => i.tuiCheckboxRow));
  }
  process(checkbox) {
    this.children.update((children) => tuiArrayToggle(children, checkbox));
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiTableControlDirective_BaseFactory;
      return function TuiTableControlDirective_Factory(__ngFactoryType__) {
        return (ɵTuiTableControlDirective_BaseFactory || (ɵTuiTableControlDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiTableControlDirective)))(__ngFactoryType__ || _TuiTableControlDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTableControlDirective,
      selectors: [["", "tuiTable", "", "ngModel", ""], ["", "tuiTable", "", "formControl", ""], ["", "tuiTable", "", "formControlName", ""]],
      features: [ɵɵProvidersFeature([tuiFallbackValueProvider([])]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableControlDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiTable][ngModel],[tuiTable][formControl],[tuiTable][formControlName]",
      providers: [tuiFallbackValueProvider([])]
    }]
  }], null, null);
})();
var TuiCheckboxRowDirective = class _TuiCheckboxRowDirective {
  constructor() {
    this.control = inject(NgControl);
    this.parent = inject(TuiTableControlDirective);
    this.checked = computed((checked = this.parent.value().includes(this.tuiCheckboxRow)) => {
      setTimeout(() => this.control.control?.setValue(checked));
      return checked;
    });
  }
  ngOnInit() {
    this.parent.process(this);
  }
  ngOnDestroy() {
    this.parent.process(this);
    this.parent.onChange(this.parent.value().filter((item) => item !== this.tuiCheckboxRow));
  }
  onChange() {
    this.parent.onChange(tuiArrayToggle(this.parent.value(), this.tuiCheckboxRow));
  }
  static {
    this.ɵfac = function TuiCheckboxRowDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCheckboxRowDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiCheckboxRowDirective,
      selectors: [["", "tuiCheckbox", "", "tuiCheckboxRow", ""]],
      hostVars: 1,
      hostBindings: function TuiCheckboxRowDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("change", function TuiCheckboxRowDirective_change_HostBindingHandler() {
            return ctx.onChange();
          });
        }
        if (rf & 2) {
          ɵɵdomProperty("checked", ctx.checked());
        }
      },
      inputs: {
        tuiCheckboxRow: "tuiCheckboxRow"
      },
      features: [ɵɵProvidersFeature([{
        provide: NgControl,
        useClass: NgModel
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCheckboxRowDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiCheckbox][tuiCheckboxRow]",
      providers: [{
        provide: NgControl,
        useClass: NgModel
      }],
      host: {
        "[checked]": "checked()",
        "(change)": "onChange()"
      }
    }]
  }], null, {
    tuiCheckboxRow: [{
      type: Input
    }]
  });
})();
var TuiCheckboxTableDirective = class _TuiCheckboxTableDirective {
  constructor() {
    this.control = inject(NgControl);
    this.parent = inject(TuiTableControlDirective);
    this.update = computed(() => {
      this.control.control?.setValue(this.parent.indeterminate() ? null : this.parent.checked());
    });
  }
  static {
    this.ɵfac = function TuiCheckboxTableDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCheckboxTableDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiCheckboxTableDirective,
      selectors: [["", "tuiCheckbox", "", "tuiCheckboxTable", ""]],
      hostVars: 2,
      hostBindings: function TuiCheckboxTableDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("change", function TuiCheckboxTableDirective_change_HostBindingHandler() {
            return ctx.parent.toggleAll();
          });
        }
        if (rf & 2) {
          ɵɵdomProperty("checked", ctx.parent.checked())("indeterminate", ctx.parent.indeterminate());
        }
      },
      features: [ɵɵProvidersFeature([{
        provide: NgControl,
        useClass: NgModel
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCheckboxTableDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiCheckbox][tuiCheckboxTable]",
      providers: [{
        provide: NgControl,
        useClass: NgModel
      }],
      host: {
        "[checked]": "parent.checked()",
        "[indeterminate]": "parent.indeterminate()",
        "(change)": "parent.toggleAll()"
      }
    }]
  }], null, null);
})();
var TuiTableControl = [TuiCheckboxRowDirective, TuiCheckboxTableDirective, TuiTableControlDirective];

// node_modules/@taiga-ui/addon-table/fesm2022/taiga-ui-addon-table-directives-table-filters.mjs
var AbstractTuiTableFilter = class {
};
var TuiGenericFilter = class _TuiGenericFilter extends AbstractTuiTableFilter {
  constructor() {
    super(...arguments);
    this.filter = TUI_TRUE_HANDLER;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiGenericFilter_BaseFactory;
      return function TuiGenericFilter_Factory(__ngFactoryType__) {
        return (ɵTuiGenericFilter_BaseFactory || (ɵTuiGenericFilter_BaseFactory = ɵɵgetInheritedFactory(_TuiGenericFilter)))(__ngFactoryType__ || _TuiGenericFilter);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiGenericFilter,
      selectors: [["", "tuiGenericFilter", ""]],
      inputs: {
        filter: [0, "tuiGenericFilter", "filter"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(AbstractTuiTableFilter, _TuiGenericFilter)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiGenericFilter, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiGenericFilter]",
      providers: [tuiProvide(AbstractTuiTableFilter, TuiGenericFilter)]
    }]
  }], null, {
    filter: [{
      type: Input,
      args: ["tuiGenericFilter"]
    }]
  });
})();
var TuiTableFiltersDirective = class _TuiTableFiltersDirective {
  constructor() {
    this.refresh$ = new ReplaySubject(1);
    this.filters = [];
  }
  register(filter2) {
    this.filters = this.filters.concat(filter2);
    this.update();
  }
  unregister(filter2) {
    this.filters = this.filters.filter((item) => item !== filter2);
    this.update();
  }
  filter(items) {
    return this.refresh$.pipe(switchMap(identity), startWith(null), map(() => items.filter((item) => this.check(item))));
  }
  check(item) {
    return this.filters.every((filter2) => filter2.filter(item));
  }
  update() {
    this.refresh$.next(merge(...this.filters.map(({
      refresh$
    }) => refresh$)));
  }
  static {
    this.ɵfac = function TuiTableFiltersDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTableFiltersDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTableFiltersDirective,
      selectors: [["", "tuiTableFilters", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableFiltersDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiTableFilters]"
    }]
  }], null, null);
})();
var TuiTableFilterDirective = class _TuiTableFilterDirective {
  constructor() {
    this.head = inject(TuiTableHead, {
      optional: true
    });
    this.delegate = inject(AbstractTuiTableFilter);
    this.control = inject(NgControl);
    this.filters = inject(TuiTableFiltersDirective);
    this.refresh$ = defer(() => merge(this.control.valueChanges || EMPTY, this.control.statusChanges?.pipe(distinctUntilChanged()) || EMPTY));
  }
  ngOnInit() {
    this.filters.register(this);
  }
  ngOnDestroy() {
    this.filters.unregister(this);
  }
  filter(item) {
    const {
      disabled,
      value
    } = this.control;
    return !!disabled || !this.key || this.delegate.filter(item[this.key], value);
  }
  get key() {
    return this.tuiTableFilter || this.head?.tuiHead;
  }
  static {
    this.ɵfac = function TuiTableFilterDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTableFilterDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTableFilterDirective,
      selectors: [["", "tuiTableFilter", ""]],
      inputs: {
        tuiTableFilter: "tuiTableFilter"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableFilterDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiTableFilter]"
    }]
  }], null, {
    tuiTableFilter: [{
      type: Input
    }]
  });
})();
var TuiTableFiltersPipe = class _TuiTableFiltersPipe {
  constructor() {
    this.filters = inject(TuiTableFiltersDirective);
  }
  transform(items) {
    return this.filters.filter(items);
  }
  static {
    this.ɵfac = function TuiTableFiltersPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTableFiltersPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiTableFilters",
      type: _TuiTableFiltersPipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableFiltersPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiTableFilters"
    }]
  }], null, null);
})();
var TuiTableFilters = [TuiTableFiltersDirective, TuiTableFilterDirective, TuiTableFiltersPipe, TuiGenericFilter];
export {
  AbstractTuiTableFilter,
  TUI_REORDER_DEFAULT_OPTIONS,
  TUI_REORDER_OPTIONS,
  TUI_TABLE_DEFAULT_OPTIONS,
  TUI_TABLE_OPTIONS,
  TUI_TABLE_PAGINATION_DEFAULT_OPTIONS,
  TUI_TABLE_PAGINATION_OPTIONS,
  TUI_TABLE_PAGINATION_TEXTS,
  TUI_TABLE_PROVIDER,
  TUI_TABLE_SHOW_HIDE_MESSAGE,
  TuiCheckboxRowDirective,
  TuiCheckboxTableDirective,
  TuiGenericFilter,
  TuiReorder,
  TuiSortDirection,
  TuiStuck,
  TuiTable,
  TuiTableCaption,
  TuiTableCell,
  TuiTableControl,
  TuiTableControlDirective,
  TuiTableDirectionOrder,
  TuiTableDirective,
  TuiTableExpand,
  TuiTableFilterDirective,
  TuiTableFilters,
  TuiTableFiltersDirective,
  TuiTableFiltersPipe,
  TuiTableHead,
  TuiTablePagination,
  TuiTableResized,
  TuiTableSortBy,
  TuiTableSortKeyException,
  TuiTableSortPipe,
  TuiTableSortable,
  TuiTableTbody,
  TuiTableTd,
  TuiTableTh,
  TuiTableThGroup,
  TuiTableThead,
  TuiTableTr,
  tuiReorderOptionsProvider,
  tuiTableOptionsProvider,
  tuiTablePaginationOptionsProvider
};
//# sourceMappingURL=@taiga-ui_addon-table.js.map
