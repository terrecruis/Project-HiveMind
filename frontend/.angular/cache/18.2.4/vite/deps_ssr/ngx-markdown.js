import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  _Renderer,
  marked
} from "./chunk-DHMDD3ZF.js";
import {
  DomSanitizer
} from "./chunk-S4L4GIHN.js";
import {
  HttpClient
} from "./chunk-VHJKVWX5.js";
import {
  AsyncPipe,
  CommonModule,
  isPlatformBrowser
} from "./chunk-4HWACCY7.js";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  PLATFORM_ID,
  Pipe,
  SecurityContext,
  ViewContainerRef,
  require_cjs,
  require_operators,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-XRRKVE5L.js";
import {
  __async,
  __spreadValues,
  __toESM
} from "./chunk-NQ4HTGF6.js";

// node_modules/ngx-markdown/fesm2022/ngx-markdown.mjs
var import_rxjs = __toESM(require_cjs(), 1);
var import_operators = __toESM(require_operators(), 1);
var _c0 = ["*"];
var BUTTON_TEXT_COPY = "Copy";
var BUTTON_TEXT_COPIED = "Copied";
var _ClipboardButtonComponent = class _ClipboardButtonComponent {
  constructor() {
    this._buttonClick$ = new import_rxjs.Subject();
    this.copied$ = this._buttonClick$.pipe((0, import_operators.switchMap)(() => (0, import_rxjs.merge)((0, import_rxjs.of)(true), (0, import_rxjs.timer)(3e3).pipe((0, import_operators.mapTo)(false)))), (0, import_operators.distinctUntilChanged)(), (0, import_operators.shareReplay)(1));
    this.copiedText$ = this.copied$.pipe((0, import_operators.startWith)(false), (0, import_operators.map)((copied) => copied ? BUTTON_TEXT_COPIED : BUTTON_TEXT_COPY));
  }
  onCopyToClipboardClick() {
    this._buttonClick$.next();
  }
};
_ClipboardButtonComponent.ɵfac = function ClipboardButtonComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ClipboardButtonComponent)();
};
_ClipboardButtonComponent.ɵcmp = ɵɵdefineComponent({
  type: _ClipboardButtonComponent,
  selectors: [["markdown-clipboard"]],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 4,
  vars: 7,
  consts: [[1, "markdown-clipboard-button", 3, "click"]],
  template: function ClipboardButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "button", 0);
      ɵɵpipe(1, "async");
      ɵɵlistener("click", function ClipboardButtonComponent_Template_button_click_0_listener() {
        return ctx.onCopyToClipboardClick();
      });
      ɵɵtext(2);
      ɵɵpipe(3, "async");
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassProp("copied", ɵɵpipeBind1(1, 3, ctx.copied$));
      ɵɵadvance(2);
      ɵɵtextInterpolate(ɵɵpipeBind1(3, 5, ctx.copiedText$));
    }
  },
  dependencies: [AsyncPipe],
  encapsulation: 2,
  changeDetection: 0
});
var ClipboardButtonComponent = _ClipboardButtonComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClipboardButtonComponent, [{
    type: Component,
    args: [{
      selector: "markdown-clipboard",
      template: `
    <button
      class="markdown-clipboard-button"
      [class.copied]="copied$ | async"
      (click)="onCopyToClipboardClick()"
    >{{ copiedText$ | async }}</button>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [AsyncPipe]
    }]
  }], null, null);
})();
var CLIPBOARD_OPTIONS = new InjectionToken("CLIPBOARD_OPTIONS");
var KatexSpecificOptions = class {
};
var _LanguagePipe = class _LanguagePipe {
  transform(value, language) {
    if (value == null) {
      value = "";
    }
    if (language == null) {
      language = "";
    }
    if (typeof value !== "string") {
      console.error(`LanguagePipe has been invoked with an invalid value type [${typeof value}]`);
      return value;
    }
    if (typeof language !== "string") {
      console.error(`LanguagePipe has been invoked with an invalid parameter [${typeof language}]`);
      return value;
    }
    return "```" + language + "\n" + value + "\n```";
  }
};
_LanguagePipe.ɵfac = function LanguagePipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LanguagePipe)();
};
_LanguagePipe.ɵpipe = ɵɵdefinePipe({
  name: "language",
  type: _LanguagePipe,
  pure: true,
  standalone: true
});
var LanguagePipe = _LanguagePipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguagePipe, [{
    type: Pipe,
    args: [{
      name: "language",
      standalone: true
    }]
  }], null, null);
})();
var PrismPlugin;
(function(PrismPlugin2) {
  PrismPlugin2["CommandLine"] = "command-line";
  PrismPlugin2["LineHighlight"] = "line-highlight";
  PrismPlugin2["LineNumbers"] = "line-numbers";
})(PrismPlugin || (PrismPlugin = {}));
var MARKED_EXTENSIONS = new InjectionToken("MARKED_EXTENSIONS");
var MARKED_OPTIONS = new InjectionToken("MARKED_OPTIONS");
var errorJoyPixelsNotLoaded = "[ngx-markdown] When using the `emoji` attribute you *have to* include Emoji-Toolkit files to `angular.json` or use imports. See README for more information";
var errorKatexNotLoaded = "[ngx-markdown] When using the `katex` attribute you *have to* include KaTeX files to `angular.json` or use imports. See README for more information";
var errorMermaidNotLoaded = "[ngx-markdown] When using the `mermaid` attribute you *have to* include Mermaid files to `angular.json` or use imports. See README for more information";
var errorClipboardNotLoaded = "[ngx-markdown] When using the `clipboard` attribute you *have to* include Clipboard files to `angular.json` or use imports. See README for more information";
var errorClipboardViewContainerRequired = "[ngx-markdown] When using the `clipboard` attribute you *have to* provide the `viewContainerRef` parameter to `MarkdownService.render()` function";
var errorSrcWithoutHttpClient = "[ngx-markdown] When using the `src` attribute you *have to* pass the `HttpClient` as a parameter of the `forRoot` method. See README for more information";
var SECURITY_CONTEXT = new InjectionToken("SECURITY_CONTEXT");
var ExtendedRenderer = class extends _Renderer {
  constructor() {
    super(...arguments);
    this.ɵNgxMarkdownRendererExtendedForExtensions = false;
    this.ɵNgxMarkdownRendererExtendedForMermaid = false;
  }
};
var _MarkdownService = class _MarkdownService {
  get options() {
    return this._options;
  }
  set options(value) {
    this._options = __spreadValues(__spreadValues({}, this.DEFAULT_MARKED_OPTIONS), value);
  }
  get renderer() {
    return this.options.renderer;
  }
  set renderer(value) {
    this.options.renderer = value;
  }
  constructor(clipboardOptions, extensions, options, platform, securityContext, http, sanitizer) {
    this.clipboardOptions = clipboardOptions;
    this.extensions = extensions;
    this.platform = platform;
    this.securityContext = securityContext;
    this.http = http;
    this.sanitizer = sanitizer;
    this.DEFAULT_MARKED_OPTIONS = {
      renderer: new _Renderer()
    };
    this.DEFAULT_KATEX_OPTIONS = {
      delimiters: [{
        left: "$$",
        right: "$$",
        display: true
      }, {
        left: "$",
        right: "$",
        display: false
      }, {
        left: "\\(",
        right: "\\)",
        display: false
      }, {
        left: "\\begin{equation}",
        right: "\\end{equation}",
        display: true
      }, {
        left: "\\begin{align}",
        right: "\\end{align}",
        display: true
      }, {
        left: "\\begin{alignat}",
        right: "\\end{alignat}",
        display: true
      }, {
        left: "\\begin{gather}",
        right: "\\end{gather}",
        display: true
      }, {
        left: "\\begin{CD}",
        right: "\\end{CD}",
        display: true
      }, {
        left: "\\[",
        right: "\\]",
        display: true
      }]
    };
    this.DEFAULT_MERMAID_OPTIONS = {
      startOnLoad: false
    };
    this.DEFAULT_CLIPBOARD_OPTIONS = {
      buttonComponent: void 0
    };
    this.DEFAULT_PARSE_OPTIONS = {
      decodeHtml: false,
      inline: false,
      emoji: false,
      mermaid: false,
      markedOptions: void 0,
      disableSanitizer: false
    };
    this.DEFAULT_RENDER_OPTIONS = {
      clipboard: false,
      clipboardOptions: void 0,
      katex: false,
      katexOptions: void 0,
      mermaid: false,
      mermaidOptions: void 0
    };
    this._reload$ = new import_rxjs.Subject();
    this.reload$ = this._reload$.asObservable();
    this.options = options;
  }
  parse(markdown, parseOptions = this.DEFAULT_PARSE_OPTIONS) {
    const {
      decodeHtml,
      inline,
      emoji,
      mermaid: mermaid2,
      disableSanitizer
    } = parseOptions;
    const markedOptions = __spreadValues(__spreadValues({}, this.options), parseOptions.markedOptions);
    const renderer = markedOptions.renderer || this.renderer || new _Renderer();
    if (this.extensions) {
      this.renderer = this.extendsRendererForExtensions(renderer);
    }
    if (mermaid2) {
      this.renderer = this.extendsRendererForMermaid(renderer);
    }
    const trimmed = this.trimIndentation(markdown);
    const decoded = decodeHtml ? this.decodeHtml(trimmed) : trimmed;
    const emojified = emoji ? this.parseEmoji(decoded) : decoded;
    const marked2 = this.parseMarked(emojified, markedOptions, inline);
    const sanitized = disableSanitizer ? marked2 : this.sanitizer.sanitize(this.securityContext, marked2);
    return sanitized || "";
  }
  render(element, options = this.DEFAULT_RENDER_OPTIONS, viewContainerRef) {
    const {
      clipboard,
      clipboardOptions,
      katex: katex2,
      katexOptions,
      mermaid: mermaid2,
      mermaidOptions
    } = options;
    if (katex2) {
      this.renderKatex(element, __spreadValues(__spreadValues({}, this.DEFAULT_KATEX_OPTIONS), katexOptions));
    }
    if (mermaid2) {
      this.renderMermaid(element, __spreadValues(__spreadValues({}, this.DEFAULT_MERMAID_OPTIONS), mermaidOptions));
    }
    if (clipboard) {
      this.renderClipboard(element, viewContainerRef, __spreadValues(__spreadValues(__spreadValues({}, this.DEFAULT_CLIPBOARD_OPTIONS), this.clipboardOptions), clipboardOptions));
    }
    this.highlight(element);
  }
  reload() {
    this._reload$.next();
  }
  getSource(src) {
    if (!this.http) {
      throw new Error(errorSrcWithoutHttpClient);
    }
    return this.http.get(src, {
      responseType: "text"
    }).pipe((0, import_operators.map)((markdown) => this.handleExtension(src, markdown)));
  }
  highlight(element) {
    if (!isPlatformBrowser(this.platform)) {
      return;
    }
    if (typeof Prism === "undefined" || typeof Prism.highlightAllUnder === "undefined") {
      return;
    }
    if (!element) {
      element = document;
    }
    const noLanguageElements = element.querySelectorAll('pre code:not([class*="language-"])');
    Array.prototype.forEach.call(noLanguageElements, (x) => x.classList.add("language-none"));
    Prism.highlightAllUnder(element);
  }
  decodeHtml(html) {
    if (!isPlatformBrowser(this.platform)) {
      return html;
    }
    const textarea = document.createElement("textarea");
    textarea.innerHTML = html;
    return textarea.value;
  }
  extendsRendererForExtensions(renderer) {
    const extendedRenderer = renderer;
    if (extendedRenderer.ɵNgxMarkdownRendererExtendedForExtensions === true) {
      return renderer;
    }
    if (this.extensions?.length > 0) {
      marked.use(...this.extensions);
    }
    extendedRenderer.ɵNgxMarkdownRendererExtendedForExtensions = true;
    return renderer;
  }
  extendsRendererForMermaid(renderer) {
    const extendedRenderer = renderer;
    if (extendedRenderer.ɵNgxMarkdownRendererExtendedForMermaid === true) {
      return renderer;
    }
    const defaultCode = renderer.code;
    renderer.code = function(code, language, isEscaped) {
      return language === "mermaid" ? `<div class="mermaid">${code}</div>` : defaultCode.call(this, code, language, isEscaped);
    };
    extendedRenderer.ɵNgxMarkdownRendererExtendedForMermaid = true;
    return renderer;
  }
  handleExtension(src, markdown) {
    const urlProtocolIndex = src.lastIndexOf("://");
    const urlWithoutProtocol = urlProtocolIndex > -1 ? src.substring(urlProtocolIndex + 4) : src;
    const lastSlashIndex = urlWithoutProtocol.lastIndexOf("/");
    const lastUrlSegment = lastSlashIndex > -1 ? urlWithoutProtocol.substring(lastSlashIndex + 1).split("?")[0] : "";
    const lastDotIndex = lastUrlSegment.lastIndexOf(".");
    const extension = lastDotIndex > -1 ? lastUrlSegment.substring(lastDotIndex + 1) : "";
    return !!extension && extension !== "md" ? "```" + extension + "\n" + markdown + "\n```" : markdown;
  }
  parseMarked(html, markedOptions, inline = false) {
    if (markedOptions.renderer) {
      const renderer = __spreadValues({}, markedOptions.renderer);
      delete renderer.ɵNgxMarkdownRendererExtendedForExtensions;
      delete renderer.ɵNgxMarkdownRendererExtendedForMermaid;
      delete markedOptions.renderer;
      marked.use({
        renderer
      });
    }
    return inline ? marked.parseInline(html, markedOptions) : marked.parse(html, markedOptions);
  }
  parseEmoji(html) {
    if (!isPlatformBrowser(this.platform)) {
      return html;
    }
    if (typeof joypixels === "undefined" || typeof joypixels.shortnameToUnicode === "undefined") {
      throw new Error(errorJoyPixelsNotLoaded);
    }
    return joypixels.shortnameToUnicode(html);
  }
  renderKatex(element, options) {
    if (!isPlatformBrowser(this.platform)) {
      return;
    }
    if (typeof katex === "undefined" || typeof renderMathInElement === "undefined") {
      throw new Error(errorKatexNotLoaded);
    }
    renderMathInElement(element, options);
  }
  renderClipboard(element, viewContainerRef, options) {
    if (!isPlatformBrowser(this.platform)) {
      return;
    }
    if (typeof ClipboardJS === "undefined") {
      throw new Error(errorClipboardNotLoaded);
    }
    if (!viewContainerRef) {
      throw new Error(errorClipboardViewContainerRequired);
    }
    const {
      buttonComponent,
      buttonTemplate
    } = options;
    const preElements = element.querySelectorAll("pre");
    for (let i = 0; i < preElements.length; i++) {
      const preElement = preElements.item(i);
      const preWrapperElement = document.createElement("div");
      preWrapperElement.style.position = "relative";
      preElement.parentNode.insertBefore(preWrapperElement, preElement);
      preWrapperElement.appendChild(preElement);
      const toolbarWrapperElement = document.createElement("div");
      toolbarWrapperElement.classList.add("markdown-clipboard-toolbar");
      toolbarWrapperElement.style.position = "absolute";
      toolbarWrapperElement.style.top = ".5em";
      toolbarWrapperElement.style.right = ".5em";
      toolbarWrapperElement.style.zIndex = "1";
      preWrapperElement.insertAdjacentElement("beforeend", toolbarWrapperElement);
      preWrapperElement.onmouseenter = () => toolbarWrapperElement.classList.add("hover");
      preWrapperElement.onmouseleave = () => toolbarWrapperElement.classList.remove("hover");
      let embeddedViewRef;
      if (buttonComponent) {
        const componentRef = viewContainerRef.createComponent(buttonComponent);
        embeddedViewRef = componentRef.hostView;
        componentRef.changeDetectorRef.markForCheck();
      } else if (buttonTemplate) {
        embeddedViewRef = viewContainerRef.createEmbeddedView(buttonTemplate);
      } else {
        const componentRef = viewContainerRef.createComponent(ClipboardButtonComponent);
        embeddedViewRef = componentRef.hostView;
        componentRef.changeDetectorRef.markForCheck();
      }
      let clipboardInstance;
      embeddedViewRef.rootNodes.forEach((node) => {
        toolbarWrapperElement.appendChild(node);
        clipboardInstance = new ClipboardJS(node, {
          text: () => preElement.innerText
        });
      });
      embeddedViewRef.onDestroy(() => clipboardInstance.destroy());
    }
  }
  renderMermaid(element, options = this.DEFAULT_MERMAID_OPTIONS) {
    if (!isPlatformBrowser(this.platform)) {
      return;
    }
    if (typeof mermaid === "undefined" || typeof mermaid.initialize === "undefined") {
      throw new Error(errorMermaidNotLoaded);
    }
    const mermaidElements = element.querySelectorAll(".mermaid");
    if (mermaidElements.length === 0) {
      return;
    }
    mermaid.initialize(options);
    mermaid.run({
      nodes: mermaidElements
    });
  }
  trimIndentation(markdown) {
    if (!markdown) {
      return "";
    }
    let indentStart;
    return markdown.split("\n").map((line) => {
      let lineIdentStart = indentStart;
      if (line.length > 0) {
        lineIdentStart = isNaN(lineIdentStart) ? line.search(/\S|$/) : Math.min(line.search(/\S|$/), lineIdentStart);
      }
      if (isNaN(indentStart)) {
        indentStart = lineIdentStart;
      }
      return lineIdentStart ? line.substring(lineIdentStart) : line;
    }).join("\n");
  }
};
_MarkdownService.ɵfac = function MarkdownService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MarkdownService)(ɵɵinject(CLIPBOARD_OPTIONS, 8), ɵɵinject(MARKED_EXTENSIONS, 8), ɵɵinject(MARKED_OPTIONS, 8), ɵɵinject(PLATFORM_ID), ɵɵinject(SECURITY_CONTEXT), ɵɵinject(HttpClient, 8), ɵɵinject(DomSanitizer));
};
_MarkdownService.ɵprov = ɵɵdefineInjectable({
  token: _MarkdownService,
  factory: _MarkdownService.ɵfac
});
var MarkdownService = _MarkdownService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MarkdownService, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CLIPBOARD_OPTIONS]
    }, {
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MARKED_EXTENSIONS]
    }, {
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MARKED_OPTIONS]
    }, {
      type: Optional
    }]
  }, {
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: SecurityContext,
    decorators: [{
      type: Inject,
      args: [SECURITY_CONTEXT]
    }]
  }, {
    type: HttpClient,
    decorators: [{
      type: Optional
    }]
  }, {
    type: DomSanitizer
  }], null);
})();
var _MarkdownComponent = class _MarkdownComponent {
  get disableSanitizer() {
    return this._disableSanitizer;
  }
  set disableSanitizer(value) {
    this._disableSanitizer = this.coerceBooleanProperty(value);
  }
  get inline() {
    return this._inline;
  }
  set inline(value) {
    this._inline = this.coerceBooleanProperty(value);
  }
  // Plugin - clipboard
  get clipboard() {
    return this._clipboard;
  }
  set clipboard(value) {
    this._clipboard = this.coerceBooleanProperty(value);
  }
  // Plugin - emoji
  get emoji() {
    return this._emoji;
  }
  set emoji(value) {
    this._emoji = this.coerceBooleanProperty(value);
  }
  // Plugin - katex
  get katex() {
    return this._katex;
  }
  set katex(value) {
    this._katex = this.coerceBooleanProperty(value);
  }
  // Plugin - mermaid
  get mermaid() {
    return this._mermaid;
  }
  set mermaid(value) {
    this._mermaid = this.coerceBooleanProperty(value);
  }
  // Plugin - lineHighlight
  get lineHighlight() {
    return this._lineHighlight;
  }
  set lineHighlight(value) {
    this._lineHighlight = this.coerceBooleanProperty(value);
  }
  // Plugin - lineNumbers
  get lineNumbers() {
    return this._lineNumbers;
  }
  set lineNumbers(value) {
    this._lineNumbers = this.coerceBooleanProperty(value);
  }
  // Plugin - commandLine
  get commandLine() {
    return this._commandLine;
  }
  set commandLine(value) {
    this._commandLine = this.coerceBooleanProperty(value);
  }
  constructor(element, markdownService, viewContainerRef) {
    this.element = element;
    this.markdownService = markdownService;
    this.viewContainerRef = viewContainerRef;
    this.error = new EventEmitter();
    this.load = new EventEmitter();
    this.ready = new EventEmitter();
    this._clipboard = false;
    this._commandLine = false;
    this._disableSanitizer = false;
    this._emoji = false;
    this._inline = false;
    this._katex = false;
    this._lineHighlight = false;
    this._lineNumbers = false;
    this._mermaid = false;
    this.destroyed$ = new import_rxjs.Subject();
  }
  ngOnChanges() {
    this.loadContent();
  }
  loadContent() {
    if (this.data != null) {
      this.handleData();
      return;
    }
    if (this.src != null) {
      this.handleSrc();
      return;
    }
  }
  ngAfterViewInit() {
    if (!this.data && !this.src) {
      this.handleTransclusion();
    }
    this.markdownService.reload$.pipe((0, import_operators.takeUntil)(this.destroyed$)).subscribe(() => this.loadContent());
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  render(markdown, decodeHtml = false) {
    return __async(this, null, function* () {
      const parsedOptions = {
        decodeHtml,
        inline: this.inline,
        emoji: this.emoji,
        mermaid: this.mermaid,
        disableSanitizer: this.disableSanitizer
      };
      const renderOptions = {
        clipboard: this.clipboard,
        clipboardOptions: {
          buttonComponent: this.clipboardButtonComponent,
          buttonTemplate: this.clipboardButtonTemplate
        },
        katex: this.katex,
        katexOptions: this.katexOptions,
        mermaid: this.mermaid,
        mermaidOptions: this.mermaidOptions
      };
      const parsed = yield this.markdownService.parse(markdown, parsedOptions);
      this.element.nativeElement.innerHTML = parsed;
      this.handlePlugins();
      this.markdownService.render(this.element.nativeElement, renderOptions, this.viewContainerRef);
      this.ready.emit();
    });
  }
  coerceBooleanProperty(value) {
    return value != null && `${String(value)}` !== "false";
  }
  handleData() {
    this.render(this.data);
  }
  handleSrc() {
    this.markdownService.getSource(this.src).subscribe({
      next: (markdown) => {
        this.render(markdown).then(() => {
          this.load.emit(markdown);
        });
      },
      error: (error) => this.error.emit(error)
    });
  }
  handleTransclusion() {
    this.render(this.element.nativeElement.innerHTML, true);
  }
  handlePlugins() {
    if (this.commandLine) {
      this.setPluginClass(this.element.nativeElement, PrismPlugin.CommandLine);
      this.setPluginOptions(this.element.nativeElement, {
        dataFilterOutput: this.filterOutput,
        dataHost: this.host,
        dataPrompt: this.prompt,
        dataOutput: this.output,
        dataUser: this.user
      });
    }
    if (this.lineHighlight) {
      this.setPluginOptions(this.element.nativeElement, {
        dataLine: this.line,
        dataLineOffset: this.lineOffset
      });
    }
    if (this.lineNumbers) {
      this.setPluginClass(this.element.nativeElement, PrismPlugin.LineNumbers);
      this.setPluginOptions(this.element.nativeElement, {
        dataStart: this.start
      });
    }
  }
  setPluginClass(element, plugin) {
    const preElements = element.querySelectorAll("pre");
    for (let i = 0; i < preElements.length; i++) {
      const classes = plugin instanceof Array ? plugin : [plugin];
      preElements.item(i).classList.add(...classes);
    }
  }
  setPluginOptions(element, options) {
    const preElements = element.querySelectorAll("pre");
    for (let i = 0; i < preElements.length; i++) {
      Object.keys(options).forEach((option) => {
        const attributeValue = options[option];
        if (attributeValue) {
          const attributeName = this.toLispCase(option);
          preElements.item(i).setAttribute(attributeName, attributeValue.toString());
        }
      });
    }
  }
  toLispCase(value) {
    const upperChars = value.match(/([A-Z])/g);
    if (!upperChars) {
      return value;
    }
    let str = value.toString();
    for (let i = 0, n = upperChars.length; i < n; i++) {
      str = str.replace(new RegExp(upperChars[i]), "-" + upperChars[i].toLowerCase());
    }
    if (str.slice(0, 1) === "-") {
      str = str.slice(1);
    }
    return str;
  }
};
_MarkdownComponent.ɵfac = function MarkdownComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MarkdownComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(MarkdownService), ɵɵdirectiveInject(ViewContainerRef));
};
_MarkdownComponent.ɵcmp = ɵɵdefineComponent({
  type: _MarkdownComponent,
  selectors: [["markdown"], ["", "markdown", ""]],
  inputs: {
    data: "data",
    src: "src",
    disableSanitizer: "disableSanitizer",
    inline: "inline",
    clipboard: "clipboard",
    clipboardButtonComponent: "clipboardButtonComponent",
    clipboardButtonTemplate: "clipboardButtonTemplate",
    emoji: "emoji",
    katex: "katex",
    katexOptions: "katexOptions",
    mermaid: "mermaid",
    mermaidOptions: "mermaidOptions",
    lineHighlight: "lineHighlight",
    line: "line",
    lineOffset: "lineOffset",
    lineNumbers: "lineNumbers",
    start: "start",
    commandLine: "commandLine",
    filterOutput: "filterOutput",
    host: "host",
    prompt: "prompt",
    output: "output",
    user: "user"
  },
  outputs: {
    error: "error",
    load: "load",
    ready: "ready"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function MarkdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var MarkdownComponent = _MarkdownComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MarkdownComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "markdown, [markdown]",
      template: "<ng-content></ng-content>",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: MarkdownService
  }, {
    type: ViewContainerRef
  }], {
    data: [{
      type: Input
    }],
    src: [{
      type: Input
    }],
    disableSanitizer: [{
      type: Input
    }],
    inline: [{
      type: Input
    }],
    clipboard: [{
      type: Input
    }],
    clipboardButtonComponent: [{
      type: Input
    }],
    clipboardButtonTemplate: [{
      type: Input
    }],
    emoji: [{
      type: Input
    }],
    katex: [{
      type: Input
    }],
    katexOptions: [{
      type: Input
    }],
    mermaid: [{
      type: Input
    }],
    mermaidOptions: [{
      type: Input
    }],
    lineHighlight: [{
      type: Input
    }],
    line: [{
      type: Input
    }],
    lineOffset: [{
      type: Input
    }],
    lineNumbers: [{
      type: Input
    }],
    start: [{
      type: Input
    }],
    commandLine: [{
      type: Input
    }],
    filterOutput: [{
      type: Input
    }],
    host: [{
      type: Input
    }],
    prompt: [{
      type: Input
    }],
    output: [{
      type: Input
    }],
    user: [{
      type: Input
    }],
    error: [{
      type: Output
    }],
    load: [{
      type: Output
    }],
    ready: [{
      type: Output
    }]
  });
})();
var _MarkdownPipe = class _MarkdownPipe {
  constructor(domSanitizer, elementRef, markdownService, viewContainerRef, zone) {
    this.domSanitizer = domSanitizer;
    this.elementRef = elementRef;
    this.markdownService = markdownService;
    this.viewContainerRef = viewContainerRef;
    this.zone = zone;
  }
  transform(value, options) {
    return __async(this, null, function* () {
      if (value == null) {
        return "";
      }
      if (typeof value !== "string") {
        console.error(`MarkdownPipe has been invoked with an invalid value type [${typeof value}]`);
        return value;
      }
      const markdown = yield this.markdownService.parse(value, options);
      this.zone.onStable.pipe((0, import_operators.first)()).subscribe(() => this.markdownService.render(this.elementRef.nativeElement, options, this.viewContainerRef));
      return this.domSanitizer.bypassSecurityTrustHtml(markdown);
    });
  }
};
_MarkdownPipe.ɵfac = function MarkdownPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MarkdownPipe)(ɵɵdirectiveInject(DomSanitizer, 16), ɵɵdirectiveInject(ElementRef, 16), ɵɵdirectiveInject(MarkdownService, 16), ɵɵdirectiveInject(ViewContainerRef, 16), ɵɵdirectiveInject(NgZone, 16));
};
_MarkdownPipe.ɵpipe = ɵɵdefinePipe({
  name: "markdown",
  type: _MarkdownPipe,
  pure: true,
  standalone: true
});
var MarkdownPipe = _MarkdownPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MarkdownPipe, [{
    type: Pipe,
    args: [{
      name: "markdown",
      standalone: true
    }]
  }], () => [{
    type: DomSanitizer
  }, {
    type: ElementRef
  }, {
    type: MarkdownService
  }, {
    type: ViewContainerRef
  }, {
    type: NgZone
  }], null);
})();
function provideMarkdown(markdownModuleConfig) {
  return [MarkdownService, markdownModuleConfig?.loader ?? [], markdownModuleConfig?.clipboardOptions ?? [], markdownModuleConfig?.markedOptions ?? [], {
    provide: MARKED_EXTENSIONS,
    useValue: markdownModuleConfig?.markedExtensions ?? []
  }, {
    provide: SECURITY_CONTEXT,
    useValue: markdownModuleConfig?.sanitize ?? SecurityContext.HTML
  }];
}
var sharedDeclarations = [ClipboardButtonComponent, LanguagePipe, MarkdownComponent, MarkdownPipe];
var _MarkdownModule = class _MarkdownModule {
  static forRoot(markdownModuleConfig) {
    return {
      ngModule: _MarkdownModule,
      providers: [provideMarkdown(markdownModuleConfig)]
    };
  }
  static forChild() {
    return {
      ngModule: _MarkdownModule
    };
  }
};
_MarkdownModule.ɵfac = function MarkdownModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MarkdownModule)();
};
_MarkdownModule.ɵmod = ɵɵdefineNgModule({
  type: _MarkdownModule,
  imports: [CommonModule, ClipboardButtonComponent, LanguagePipe, MarkdownComponent, MarkdownPipe],
  exports: [ClipboardButtonComponent, LanguagePipe, MarkdownComponent, MarkdownPipe]
});
_MarkdownModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
var MarkdownModule = _MarkdownModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MarkdownModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ...sharedDeclarations],
      exports: sharedDeclarations
    }]
  }], null, null);
})();
var MermaidAPI;
(function(MermaidAPI2) {
  let SecurityLevel;
  (function(SecurityLevel2) {
    SecurityLevel2["Strict"] = "strict";
    SecurityLevel2["Loose"] = "loose";
    SecurityLevel2["Antiscript"] = "antiscript";
    SecurityLevel2["Sandbox"] = "sandbox";
  })(SecurityLevel = MermaidAPI2.SecurityLevel || (MermaidAPI2.SecurityLevel = {}));
  let Theme;
  (function(Theme2) {
    Theme2["Base"] = "base";
    Theme2["Forest"] = "forest";
    Theme2["Dark"] = "dark";
    Theme2["Default"] = "default";
    Theme2["Neutral"] = "neutral";
  })(Theme = MermaidAPI2.Theme || (MermaidAPI2.Theme = {}));
  let LogLevel;
  (function(LogLevel2) {
    LogLevel2[LogLevel2["Debug"] = 1] = "Debug";
    LogLevel2[LogLevel2["Info"] = 2] = "Info";
    LogLevel2[LogLevel2["Warn"] = 3] = "Warn";
    LogLevel2[LogLevel2["Error"] = 4] = "Error";
    LogLevel2[LogLevel2["Fatal"] = 5] = "Fatal";
  })(LogLevel = MermaidAPI2.LogLevel || (MermaidAPI2.LogLevel = {}));
})(MermaidAPI || (MermaidAPI = {}));
export {
  CLIPBOARD_OPTIONS,
  ClipboardButtonComponent,
  ExtendedRenderer,
  KatexSpecificOptions,
  LanguagePipe,
  MARKED_EXTENSIONS,
  MARKED_OPTIONS,
  MarkdownComponent,
  MarkdownModule,
  MarkdownPipe,
  MarkdownService,
  _Renderer as MarkedRenderer,
  MermaidAPI,
  PrismPlugin,
  SECURITY_CONTEXT,
  errorClipboardNotLoaded,
  errorClipboardViewContainerRequired,
  errorJoyPixelsNotLoaded,
  errorKatexNotLoaded,
  errorMermaidNotLoaded,
  errorSrcWithoutHttpClient,
  provideMarkdown
};
//# sourceMappingURL=ngx-markdown.js.map
