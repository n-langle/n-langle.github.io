// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"frd3z":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = "192.168.0.34";
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ba60c367739bf03c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"ebWYT":[function(require,module,exports) {
// js entry file
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _main = require("./classes/Main");
var _mainDefault = parcelHelpers.interopDefault(_main);
new (0, _mainDefault.default)();

},{"./classes/Main":"qyZzV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"qyZzV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _pageDefault = require("./PageDefault");
var _pageDefaultDefault = parcelHelpers.interopDefault(_pageDefault);
var _pageHome = require("./PageHome");
var _pageHomeDefault = parcelHelpers.interopDefault(_pageHome);
var _pageWebsite = require("./PageWebsite");
var _pageWebsiteDefault = parcelHelpers.interopDefault(_pageWebsite);
var _scroll = require("./Scroll");
var _scrollDefault = parcelHelpers.interopDefault(_scroll);
var _intro = require("./Intro");
var _introDefault = parcelHelpers.interopDefault(_intro);
var _device = require("./Device");
var _deviceDefault = parcelHelpers.interopDefault(_device);
var _customCursor = require("./CustomCursor");
var _customCursorDefault = parcelHelpers.interopDefault(_customCursor);
const pageClasses = {
    "home": (0, _pageHomeDefault.default),
    "website": (0, _pageWebsiteDefault.default),
    "default": (0, _pageDefaultDefault.default)
};
class Main {
    #customCursor;
    #scroll;
    #pages = {};
    #title = document.querySelector("title");
    #description = document.querySelector('meta[name="description"]');
    #currentPage = null;
    #onPopState = ()=>{
        this.swap(document.location);
    };
    #onClickSameOriginLink = (e)=>{
        const url = new URL(e.currentTarget.href);
        e.preventDefault();
        if (url.href !== window.location.href) this.swap(url.href, e.currentTarget);
    };
    constructor(){
        this.#scroll = (0, _scrollDefault.default).getInstance();
        this.#customCursor = new (0, _customCursorDefault.default)();
        // set pop state event
        window.addEventListener("popstate", this.#onPopState);
        // init first page
        this.#initialiseContent(document.documentElement).register(window.location.href, document.documentElement, false);
        // init current page
        this.#currentPage = this.#pages[window.location.href];
        this.#currentPage.beforeIntro();
        new (0, _introDefault.default)().play(()=>{
            this.#currentPage.afterIntro();
        });
        new (0, _deviceDefault.default)({
            onDeviceTypeKnown: (isMobile)=>{
                if (!isMobile) this.#scroll.enableSmoothScroll();
                else this.#customCursor = this.#customCursor.destroy();
            }
        });
    }
    #initialiseContent(context) {
        const links = context.querySelectorAll("a");
        const origin = window.location.origin;
        links.forEach((link)=>{
            const url = new URL(link.href);
            if (url.origin === origin) link.addEventListener("click", this.#onClickSameOriginLink);
        });
        if (this.#customCursor) this.#customCursor.initTriggers(context);
        return this;
    }
    parseHtml(html) {
        if (typeof html !== "string") return html;
        const container = document.createElement("div");
        container.innerHTML = html.replace(/<(\/|)(html|body|head>)/gi, "<$1custom-$2");
        return container.children[0];
    }
    register(href, html, mustInitialiseContent) {
        html = this.parseHtml(html);
        const content = html.getElementsByClassName("site-content")[0];
        const pageClassName = pageClasses[content.dataset.page] ? content.dataset.page : "default";
        if (mustInitialiseContent) this.#initialiseContent(content);
        this.#pages[href] = new pageClasses[pageClassName]({
            title: html.querySelector("title").textContent,
            description: html.querySelector('meta[name="description"]').getAttribute("content"),
            content: content
        });
        return this;
    }
    isRegistered(href) {
        return !!this.#pages[href];
    }
    swap(href, trigger) {
        const data = {
            trigger: trigger,
            from: window.location.href,
            to: href
        };
        const currentPage = this.#currentPage;
        const whenOutroIsPlayedAndPageIsLoaded = ()=>{
            if (!isPageLoaded || !isOutroPlayed) return;
            const nextPage = this.#pages[href];
            const nextContent = nextPage.getContent();
            currentPage.getContent().replaceWith(nextContent);
            this.#scroll.reset();
            nextPage.afterSwap(data);
            if (this.#customCursor) this.#customCursor.reset();
            this.#currentPage = nextPage;
            this.#title.textContent = nextPage.getTitle();
            this.#description.setAttribute("content", nextPage.getDescription());
            history.pushState({}, "", href);
        };
        let isPageLoaded = this.isRegistered(href);
        let isOutroPlayed = false;
        // load page if not already registered
        if (!isPageLoaded) fetch(href).then((response)=>response.text()).then((html)=>{
            isPageLoaded = true;
            this.register(href, html, true);
            whenOutroIsPlayedAndPageIsLoaded();
        });
        currentPage.beforeSwap(data, function() {
            isOutroPlayed = true;
            whenOutroIsPlayedAndPageIsLoaded();
        });
        return this;
    }
}
exports.default = Main;

},{"./PageDefault":"d8y7I","./PageHome":"bzb8g","./PageWebsite":"frOD9","./Scroll":"4fbbF","./Intro":"g6JhA","./Device":"cP0vy","./CustomCursor":"c4lyO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d8y7I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _oneloopJs = require("oneloop.js");
var _extend = require("../utils/extend");
var _extendDefault = parcelHelpers.interopDefault(_extend);
class PageDefault {
    #settings;
    constructor(options){
        this.#settings = (0, _extendDefault.default)(true, {}, PageDefault.defaults, options);
    }
    getTitle() {
        return this.#settings.title;
    }
    getDescription() {
        return this.#settings.description;
    }
    getContent() {
        return this.#settings.content;
    }
    setContentVisible() {
        this.#settings.content.style.opacity = 1;
        return this;
    }
    find(selector) {
        return this.#settings.content.querySelector(selector);
    }
    findAll(selector) {
        return this.#settings.content.querySelectorAll(selector);
    }
    beforeIntro() {
        return this;
    }
    afterIntro() {
        return this;
    }
    beforeSwap(data, callback) {
        new (0, _oneloopJs.Tween)({
            duration: 500,
            onUpdate: (timestamp, tick, percent)=>{
                this.#settings.content.style.opacity = 1 - percent;
            },
            onComplete: callback
        });
        return this;
    }
    afterSwap(data, callback) {
        this.#settings.content.style.opacity = 0;
        new (0, _oneloopJs.Tween)({
            duration: 500,
            onUpdate: (timestamp, tick, percent)=>{
                this.#settings.content.style.opacity = percent;
            },
            onComplete: callback
        });
        return this;
    }
}
PageDefault.defaults = {
    title: "",
    description: "",
    content: null
};
exports.default = PageDefault;

},{"oneloop.js":"l9lAO","../utils/extend":"ilxxn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l9lAO":[function(require,module,exports) {
/**
* @license
* Copyright 2022 OneLoop.js
* Author: Nicolas Langle
* Repository: https://github.com/n-langle/OneLoop.js
* Version: 5.1.0
* SPDX-License-Identifier: MIT
* 
* Credit for easing functions goes to : https://github.com/ai/easings.net/blob/master/src/easings/easingsFunctions.ts
* Credit for Emoji regexp goes to : https://medium.com/reactnative/emojis-in-javascript-f693d0eb79fb
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MainLoopEntry", ()=>y);
parcelHelpers.export(exports, "ScrollObserver", ()=>L);
parcelHelpers.export(exports, "SplittedText", ()=>M);
parcelHelpers.export(exports, "ThrottledEvent", ()=>x);
parcelHelpers.export(exports, "Tween", ()=>B);
parcelHelpers.export(exports, "Vector2", ()=>m);
parcelHelpers.export(exports, "easings", ()=>V);
const d = window, U = document.documentElement, s = Math, u = s.pow, a = s.sqrt, l = s.sin, o = s.cos, c = s.PI, _ = s.max, p = s.min, q = s.abs, Q = s.round;
var V = function() {
    const s = 1.70158, e = 1.525 * s, i = 1 + s, r = 2 * c / 3, h = 2 * c / 4.5, n = (t)=>{
        var s = 7.5625, e = 2.75;
        return t < 1 / e ? s * t * t : t < 2 / e ? s * (t -= 1.5 / e) * t + .75 : t < 2.5 / e ? s * (t -= 2.25 / e) * t + .9375 : s * (t -= 2.625 / e) * t + .984375;
    };
    return {
        linear: (t)=>t,
        easeInQuad: (t)=>t * t,
        easeOutQuad: (t)=>1 - (1 - t) * (1 - t),
        easeInOutQuadx: (t)=>t < .5 ? 2 * t * t : 1 - u(-2 * t + 2, 2) / 2,
        easeInCubic: (t)=>t * t * t,
        easeOutCubic: (t)=>1 - u(1 - t, 3),
        easeInOutCubic: (t)=>t < .5 ? 4 * t * t * t : 1 - u(-2 * t + 2, 3) / 2,
        easeInQuart: (t)=>t * t * t * t,
        easeOutQuart: (t)=>1 - u(1 - t, 4),
        easeInOutQuart: (t)=>t < .5 ? 8 * t * t * t * t : 1 - u(-2 * t + 2, 4) / 2,
        easeInQuint: (t)=>t * t * t * t * t,
        easeOutQuint: (t)=>1 - u(1 - t, 5),
        easeInOutQuint: (t)=>t < .5 ? 16 * t * t * t * t * t : 1 - u(-2 * t + 2, 5) / 2,
        easeInSine: (t)=>1 - o(t * c / 2),
        easeOutSine: (t)=>l(t * c / 2),
        easeInOutSine: (t)=>-(o(c * t) - 1) / 2,
        easeInExpo: (t)=>0 === t ? 0 : u(2, 10 * t - 10),
        easeOutExpo: (t)=>1 === t ? 1 : 1 - u(2, -10 * t),
        easeInOutExpo: (t)=>0 === t ? 0 : 1 === t ? 1 : t < .5 ? u(2, 20 * t - 10) / 2 : (2 - u(2, -20 * t + 10)) / 2,
        easeInCirc: (t)=>1 - a(1 - u(t, 2)),
        easeOutCirc: (t)=>a(1 - u(t - 1, 2)),
        easeInOutCirc: (t)=>t < .5 ? (1 - a(1 - u(2 * t, 2))) / 2 : (a(1 - u(-2 * t + 2, 2)) + 1) / 2,
        easeInBack: (t)=>i * t * t * t - s * t * t,
        easeOutBack: (t)=>1 + i * u(t - 1, 3) + s * u(t - 1, 2),
        easeInOutBack: (t)=>t < .5 ? u(2 * t, 2) * (2 * (1 + e) * t - e) / 2 : (u(2 * t - 2, 2) * ((1 + e) * (2 * t - 2) + e) + 2) / 2,
        easeInElastic: (t)=>0 === t ? 0 : 1 === t ? 1 : -u(2, 10 * t - 10) * l((10 * t - 10.75) * r),
        easeOutElastic: (t)=>0 === t ? 0 : 1 === t ? 1 : u(2, -10 * t) * l((10 * t - .75) * r) + 1,
        easeInOutElastic: (t)=>0 === t ? 0 : 1 === t ? 1 : t < .5 ? -(u(2, 20 * t - 10) * l((20 * t - 11.125) * h)) / 2 : u(2, -20 * t + 10) * l((20 * t - 11.125) * h) / 2 + 1,
        easeInBounce: (t)=>1 - n(1 - t),
        easeOutBounce: n,
        easeInOutBounce: (t)=>t < .5 ? (1 - n(1 - 2 * t)) / 2 : (1 + n(2 * t - 1)) / 2
    };
}(), e = ()=>performance.now();
const i = [];
let r = null, t = null;
function z(s) {
    var e = (s - t) / 16.66;
    for(let t = 0; t < i.length; t++)i[t].needsUpdate(s) ? i[t].update(s, e) : (i.splice(t, 1)[0].complete(s, e), t--);
    r = i.length ? (t = s, requestAnimationFrame(z)) : null;
}
var h = {
    add (t) {
        return -1 === i.indexOf(t) && (i.push(t), null === r) && this.start(), this;
    },
    remove (t) {
        t = i.indexOf(t);
        return -1 < t && i.splice(t, 1), this;
    },
    start () {
        return null === r && (t = e(), r = requestAnimationFrame(z)), this;
    },
    stop () {
        return cancelAnimationFrame(r), r = null, this;
    },
    destroy () {
        i.length = 0, this.stop();
    }
};
function n() {
    var s = arguments, e = s[0];
    for(let t = 1; t < s.length; t++)for(var i in s[t])void 0 !== s[t][i] && (e[i] = s[t][i]);
    return e;
}
var f = ()=>{};
class y {
    constructor(t){
        n(this, y.defaults, t);
    }
    start() {
        return h.add(this), this.onStart.call(this, e(), 0), this;
    }
    stop() {
        return h.remove(this), this.onStop.call(this, e(), 0), this;
    }
    update(t, s) {
        return this.onUpdate.call(this, t, s), this;
    }
    complete(t, s) {
        return this.onComplete.call(this, t, s), this;
    }
    needsUpdate() {
        return !0;
    }
    static defaults = {
        onStart: f,
        onUpdate: f,
        onStop: f,
        onComplete: f
    };
}
class B extends y {
    constructor(t){
        super(n({}, B.defaults, t)), this._a = 0, this._b = 1, this._c = 0, this._d = this.reverse ? 1 : 0, this._e = 0, this._f = null, this.autoStart && this.start();
    }
    reset() {
        return this._f = null, this._b = 1, this._c = 0, this._d = this.reverse ? 1 : 0, h.remove(this), this.onUpdate(0, 0, 0), this;
    }
    pause() {
        return this._f = e(), h.remove(this), this;
    }
    start(t) {
        return 0 === (t = 0 !== t ? t || this.delay : t) ? (this._f ? (this._e += e() - this._f, this._f = null) : (this.reverse && (this._b = D[this._d](this._c), this._d = (this._d + 1) % 2), this._e = 0, this._a = e(), this.onStart(this._a, 0, 1 - this._b)), h.add(this)) : setTimeout(this.start.bind(this, 0), t), this;
    }
    update(t, s) {
        var e = V[this.easing]((t - (this._a + this._e)) / (this.duration * this._b)) * this._b + 1 - this._b, e = D[this._d](e);
        return this._c = e, this.onUpdate(t, s, e), this;
    }
    complete(t, s) {
        var e = (this._d + 1) % 2;
        return this._f = null, this.onUpdate(t, s, e), this.onComplete(t, s, e), 0 < this.loop && (this.loop--, this.start()), this;
    }
    needsUpdate(t) {
        return t - (this._a + this._e) < this.duration * this._b;
    }
    static defaults = {
        delay: 0,
        duration: 1e3,
        easing: "linear",
        loop: 0,
        reverse: !1,
        autoStart: !0
    };
}
const D = [
    (t)=>t,
    (t)=>1 - t
];
var v = (t, s)=>"string" == typeof t ? (s || document).querySelectorAll(t) : 0 <= t.length ? t : [
        t
    ];
const b = [];
class x extends y {
    constructor(t, s, e){
        super();
        var i = {};
        i[s + "start"] = [], i[s] = [], i[s + "end"] = [], this._g = i, this._h = !1, this._i = null, this._j = t, this._k = s, this._l = null, this._m = e || "", this._n = ()=>{
            this._h = !1;
        }, this._o = (t)=>{
            this._l = t, this._h || (this._h = !0, this.start(), g(this._g[this._k + "start"], t)), clearTimeout(this._i), this._i = setTimeout(this._n, 128);
        }, this._j.addEventListener(this._k, this._o, {
            passive: !0
        });
    }
    destroy() {
        var t = b.indexOf(this);
        -1 < t && b.splice(t, 1), this._j.removeEventListener(this._k, this._o);
    }
    add(t, s) {
        return -1 === this._g[t].indexOf(s) && this._g[t].push(s), this;
    }
    remove(t, s) {
        s = this._g[t].indexOf(s);
        return -1 < s && this._g[t].splice(s, 1), this;
    }
    hasEvent() {
        var t = this._g, s = this._k;
        return 0 < t[s + "start"].length + t[s].length + t[s + "end"].length;
    }
    update(t, s) {
        return g(this._g[this._k], this._l), super.update(t, s), this;
    }
    complete(t, s) {
        return g(this._g[this._k + "end"], this._l), super.complete(t, s), this;
    }
    needsUpdate() {
        return this._h;
    }
    static getInstance(s, e, i) {
        let r;
        i = i || "";
        for(let t = 0; t < b.length; t++){
            var h = b[t];
            if (h._k === e && h._j === s && h._m === i) {
                r = b[t];
                break;
            }
        }
        return r || (r = new x(s, e, i), b.push(r)), r;
    }
    static destroy() {
        for(; b[0];)b[0].destroy();
    }
}
function g(s, e) {
    for(let t = 0; t < s.length; t++)s[t](e);
}
class m {
    constructor(t, s){
        this.x = t || 0, this.y = "number" == typeof s ? s : this.x;
    }
    set(t, s) {
        return this.x = t, this.y = s, this;
    }
    add(t) {
        return this.x += t.x, this.y += t.y, this;
    }
    addScalar(t) {
        return this.x += t, this.y += t, this;
    }
    subtract(t) {
        return this.x -= t.x, this.y -= t.y, this;
    }
    subtractScalar(t) {
        return this.x -= t, this.y -= t, this;
    }
    multiply(t) {
        return this.x *= t.x, this.y *= t.y, this;
    }
    multiplyScalar(t) {
        return this.x *= t, this.y *= t, this;
    }
    divide(t) {
        return this.x /= t.x, this.y /= t.y, this;
    }
    divideScalar(t) {
        return this.x /= t, this.y /= t, this;
    }
    magnitude() {
        return a(this.x * this.x + this.y * this.y);
    }
    normalize() {
        return this.divideScalar(this.magnitude());
    }
    reverse() {
        return this.multiplyScalar(-1);
    }
    copy(t) {
        return this.x = t.x, this.y = t.y, this;
    }
    clone() {
        return new m(this.x, this.y);
    }
    angle() {
        var t = s.atan2(this.y, this.x);
        return t < 0 && (t += 2 * c), t;
    }
    rotate(t) {
        var s = this.x;
        return this.x = s * o(t) - this.y * l(t), this.y = s * l(t) + this.y * o(t), this;
    }
}
var T = ()=>new m(U.scrollWidth, U.scrollHeight), O = ()=>new m(d.pageXOffset, d.pageYOffset);
class F {
    constructor(t, s, e){
        n(this, F.defaults, s), this.element = t, this._p = !1, this._q = !1, this.children = this.children ? v(this.children, this.element) : [], this.refresh(e), this._p = !0;
    }
    refresh(t) {
        var s = this.element.getBoundingClientRect(), e = s.height, i = s.width, r = s.right, h = s.bottom, n = d.innerHeight, u = d.innerWidth, a = O(), l = a.x, a = a.y, o = T();
        return this.distanceRTW = new m(u + i, n + e), this.startRTW = new m(r - this.distanceRTW.x + l, h - this.distanceRTW.y + a), this.startRTE = new m(_(s.left + l - u, 0), _(s.top + a - n, 0)), this.distanceRTE = new m(p(r + l - this.startRTE.x, o.x - r - l + i, o.x - u), p(h + a - this.startRTE.y, o.y - h - a + e, o.y - n)), this.control(t), this;
    }
    control(t) {
        var s = t.scroll, e = s.clone().subtract(this.startRTW).divide(this.distanceRTW), s = s.clone().subtract(this.startRTE).divide(this.distanceRTE);
        return 0 <= e.x && e.x <= 1 && 0 <= e.y && e.y <= 1 ? (this._q || (this._q = !0, this.onVisibilityStart.call(this, t, w(e), w(s)), this.onVisible.call(this, t, w(e), w(s))), this.onVisible.call(this, t, e, s)) : !this._q && this._p || (this._q = !1, this.onVisible.call(this, t, w(e), w(s)), this.onVisibilityEnd.call(this, t, w(e), w(s))), this.onAlways.call(this, t, e, s), this;
    }
    static defaults = {
        children: "",
        onVisible: f,
        onVisibilityStart: f,
        onVisibilityEnd: f,
        onAlways: f
    };
}
function w(t) {
    return new m(p(_(0, Q(t.x)), 1), p(_(0, Q(t.y)), 1));
}
const I = [];
let S = null, R = null, E = null;
class L extends y {
    constructor(t){
        super(n({}, L.defaults, t)), this._r = [], this._s = [], this._t = ()=>this.start(), this._u = ()=>this.refresh(), this._v = O(), this._h = !0, this._w = T(), R = R || new x(d, "resize"), E = E || new x(d, "scroll"), R.add("resize", this._u), E.add("scrollstart", this._t), I.push(this), L.startAutoRefresh();
    }
    destroy() {
        this._h && (this._h = !1, I.splice(I.indexOf(this), 1), 0 === I.length ? (L.stopAutoRefresh(), R.destroy(), E.destroy(), R = E = null) : (R.remove("resize", this._u), E.remove("scrollstart", this._t)));
    }
    observe(t, s) {
        var e = v(t), i = this.getScrollInfos();
        for(let t = 0; t < e.length; t++)-1 === this._r.indexOf(e[t]) && (this._s.push(new F(e[t], s, i)), this._r.push(e[t]));
        return this;
    }
    unobserve(t) {
        var s = v(t);
        for(let t = 0; t < s.length; t++){
            var e = this._r.indexOf(s[t]);
            -1 < e && (this._r.splice(e, 1), this._s.splice(e, 1));
        }
        return this;
    }
    update(t, s) {
        super.update(t, s);
        var e = this.getScrollInfos();
        for(let t = 0; t < this._s.length; t++)this._s[t].control(e);
        return this._v.copy(e.scroll), this;
    }
    needsUpdate() {
        return this._h && E.needsUpdate() || 1 < this.scrollDivider && 1 < O().subtract(this._v).magnitude();
    }
    hasEntry() {
        return 0 < this._s.length;
    }
    getScrollInfos() {
        var t = this._v, s = O().subtract(t).divideScalar(this.scrollDivider).add(t), t = s.clone().subtract(t);
        return {
            scroll: s,
            delta: t,
            direction: new m(t.x / q(t.x) || 0, t.y / q(t.y) || 0)
        };
    }
    refresh() {
        var s = this.getScrollInfos();
        for(let t = 0; t < this._s.length; t++)this._s[t].refresh(s);
        return this.onRefresh.call(this, s), this;
    }
    synchronise() {
        return this._v = O(), this;
    }
    static defaults = {
        scrollDivider: 1,
        onRefresh: f
    };
    static autoRefreshDelay = 1e3;
    static startAutoRefresh() {
        let s = T();
        return null === S && null !== L.autoRefreshDelay && (S = setInterval(()=>{
            var t = T();
            if (s.x !== t.x || s.y !== t.y) {
                for(let t = 0; t < I.length; t++)I[t].refresh();
                s = t;
            }
        }, L.autoRefreshDelay)), this;
    }
    static stopAutoRefresh() {
        return clearInterval(S), S = null, this;
    }
    static destroy() {
        for(; I[0];)I[0].destroy();
    }
}
const W = [], j = /(((?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32-\ude3a]|[\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])((\u200D(\u2640|\u2642)\uFE0F)|[]))|&([a-zA-Z]{2,6}|#[0-9]{2,5});|<|>)/g, N = /(\s)/;
let H = null;
class M {
    constructor(t, s){
        n(this, M.defaults, s), this._x = t.innerHTML, this._y = t, this._u = this.split.bind(this), H = H || new x(d, "resize"), this.autoSplit && this.split(), W.push(this);
    }
    destroy() {
        var t = W.indexOf(this);
        -1 < t && (this.restore(), W.splice(t, 1), W.length || (H.destroy(), H = null));
    }
    restore() {
        return this._y.innerHTML = this._x, H.remove("resize", this._u), this;
    }
    split() {
        var t = this._y, s = this._x;
        if (s) {
            if (t.innerHTML !== s && this.restore(), this.byLine) {
                Z(t, k("st-word-temp"));
                var r = t.children, h = (t, s)=>t ? this.lineWrapper(t) + s : "";
                let s = "", e = "", i = r[0].offsetTop;
                H.add("resize", this._u);
                for(let t = 0; t < r.length; t++){
                    var n = r[t], u = n.offsetTop, a = "BR" === n.tagName;
                    i === u && !a || (e += h(s.substring(-1), " "), s = ""), a ? e += "<br />" : s += n.outerHTML + " ", i = u;
                }
                t.innerHTML = e + h(s, ""), t.innerHTML = Y(t, "st-word-temp");
            }
            this.byWord && Z(t, this.wordWrapper), this.byChar && (t.innerHTML = P(t, this.charWrapper), t.innerHTML = X(t, "", (t)=>N.test(t) ? t : this.charWrapper(t), this.preserve));
        }
        return this;
    }
    static defaults = {
        autoSplit: !0,
        byLine: !1,
        byWord: !1,
        byChar: !1,
        preserve: "st-char",
        lineWrapper: k("st-line"),
        wordWrapper: k("st-word"),
        charWrapper: k("st-char")
    };
}
function k(s) {
    return (t)=>'<span class="' + s + '">' + t + "</span>";
}
function C(t, s, e) {
    var i = t.childNodes;
    let r = "";
    for(let t = 0; t < i.length; t++){
        var h = i[t];
        3 === h.nodeType ? r += s(h.data) : 1 === h.nodeType && (r += e(h));
    }
    return r;
}
function P(t, s) {
    return C(t, (t)=>t.replace(j, s), (t)=>A(t, P(t, s)));
}
function X(t, e, i, s) {
    return C(t, (t)=>{
        var s = t.trim();
        return "" !== s ? ("" === e ? t : s).split(e).map(i).join(e) : t;
    }, (t)=>s && t.classList.contains(s) ? t.outerHTML : A(t, X(t, e, i, s)));
}
function Y(t, s) {
    return C(t, (t)=>t, (t)=>t.classList.contains(s) ? t.innerHTML : A(t, Y(t, s)));
}
function A(t, s) {
    return t.outerHTML.replace(">" + t.innerHTML + "<", ">" + s + "<");
}
function Z(t, s) {
    t.innerHTML = function s(t) {
        return C(t, (t)=>t.replace("<", "[<]"), (t)=>A(t, s(t)));
    }(t), t.innerHTML = X(t, " ", s).replace("[<]", "&lt;");
}
M.destroy = function() {
    for(; W[0];)W[0].destroy();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"ilxxn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>extend);
var _isPlainObject = require("./isPlainObject");
var _isPlainObjectDefault = parcelHelpers.interopDefault(_isPlainObject);
function extend() {
    const args = arguments;
    const firstArgIsBool = typeof args[0] === "boolean";
    const deep = firstArgIsBool ? args[0] : false;
    const start = firstArgIsBool ? 1 : 0;
    const rt = (0, _isPlainObjectDefault.default)(args[start]) ? args[start] : {};
    var i;
    var prop;
    for(i = start + 1; i < args.length; i++)for(prop in args[i]){
        if (deep && (0, _isPlainObjectDefault.default)(args[i][prop])) rt[prop] = extend(true, {}, rt[prop], args[i][prop]);
        else if (typeof args[i][prop] !== "undefined") rt[prop] = args[i][prop];
    }
    return rt;
}

},{"./isPlainObject":"kWsDV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kWsDV":[function(require,module,exports) {
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isPlainObject);
function isObject(o) {
    return Object.prototype.toString.call(o) === "[object Object]";
}
function isPlainObject(o) {
    let ctor, prot;
    if (isObject(o) === false) return false;
    // If has modified constructor
    ctor = o.constructor;
    if (ctor === undefined) return true;
    // If has modified prototype
    prot = ctor.prototype;
    if (isObject(prot) === false) return false;
    // If constructor does not have an Object-specific method
    // eslint-disable-next-line no-prototype-builtins
    if (prot.hasOwnProperty("isPrototypeOf") === false) return false;
    // Most likely a plain Object
    return true;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bzb8g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _pageDefault = require("./PageDefault");
var _pageDefaultDefault = parcelHelpers.interopDefault(_pageDefault);
var _scroll = require("./Scroll");
var _scrollDefault = parcelHelpers.interopDefault(_scroll);
var _popin = require("./Popin");
var _popinDefault = parcelHelpers.interopDefault(_popin);
var _oneloopJs = require("oneloop.js");
class PageHome extends (0, _pageDefaultDefault.default) {
    #scroll;
    #popinInstances = [];
    constructor(options){
        super(options);
        this.#scroll = (0, _scrollDefault.default).getInstance();
        this.findAll(".popin").forEach((popin)=>{
            this.#popinInstances.push(new (0, _popinDefault.default)(popin, {
                context: this.getContent()
            }));
        });
    }
    #initialise(delay) {
        const animatables = this.findAll(".works-list__company, ol li li");
        this.#scroll.observe(".works-list__project-logo", {
            onVisible: function(scrollInfos, pRTW, pRTE) {
                const y = pRTW.y;
                this.element.style.setProperty("--percent-y-from-middle", y <= .5 ? (y - .1) * 2.5 : 1 - (y - .5) * 2.5);
            }
        });
        animatables.forEach((el, i)=>{
            const y = i < 4 ? 250 - i * 25 : 0;
            el.style.opacity = 0;
            el.style.transform = `translateY(${y}px)`;
            new (0, _oneloopJs.Tween)({
                delay: delay + Math.min(i * 500, 1500),
                duration: Math.max(3000 - i * 500, 1500),
                onUpdate: (timestamp, tick, percent)=>{
                    el.style.opacity = percent * 2;
                    el.style.transform = `translateY(${y * (1 - (0, _oneloopJs.easings).easeOutExpo(percent))}px)`;
                },
                onComplete: ()=>{
                    el.style.opacity = "";
                    el.style.transform = "";
                }
            });
        });
        return this;
    }
    beforeIntro() {
        this.#initialise(2500);
        return this;
    }
    beforeSwap(data, callback) {
        const trigger = data.trigger;
        const img = trigger.querySelector(".works-list__project-screenshot");
        const logo = trigger.querySelector(".works-list__project-logo");
        new (0, _oneloopJs.Tween)({
            duration: 700,
            easing: "easeOutExpo",
            onUpdate: function(timestamp, tick, percent) {
                trigger.style.transform = "scale(" + (1 + .05 * percent) + ")";
                img.style.transform = "scale(" + (1 + .25 * percent) + ")";
                logo.style.transform = "translate(-50%, -50%) scale(" + (1 + .05 * percent) + ")";
            },
            onComplete: function() {
                trigger.style.transform = "";
                img.style.transform = "";
                logo.style.transform = "";
            }
        });
        super.beforeSwap(data, ()=>{
            this.#popinInstances.forEach((instance)=>{
                instance.close();
            });
            if (typeof callback === "function") callback();
        });
        return this;
    }
    afterSwap(data, callback) {
        this.#initialise(0);
        this.setContentVisible();
        if (typeof callback === "function") callback();
        return this;
    }
}
exports.default = PageHome;

},{"./PageDefault":"d8y7I","./Popin":"MQWpt","oneloop.js":"l9lAO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./Scroll":"4fbbF"}],"MQWpt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _extend = require("../utils/extend");
var _extendDefault = parcelHelpers.interopDefault(_extend);
var _oneloopJs = require("oneloop.js");
class Popin {
    #popin;
    #path;
    #settings;
    #triggers;
    #tween;
    #isOpen = false;
    #onClickTrigger = ()=>{
        this[this.#isOpen ? "close" : "open"]();
    };
    #onClickPopin = (e)=>{
        if (e.target === e.currentTarget) this.close();
    };
    constructor(popin, options){
        const html = document.documentElement;
        const parentNode = popin.parentNode;
        const previousElement = popin.previousElementSibling;
        const relocate = parentNode.firstChild === popin ? ()=>{
            parentNode.insertAdjacentElement("afterbegin", popin);
        } : ()=>{
            previousElement.insertAdjacentElement("afterend", popin);
        };
        // add svg
        popin.insertAdjacentHTML("beforeend", `\
            <svg class="popin__background" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 256" preserveAspectRatio="none">
                <path d="M0, 0H64C64, 0, 64, 56, 64, 128S64, 256, 64, 256H0V0Z"></path>
            </svg>`);
        // settings
        this.#settings = (0, _extendDefault.default)({}, Popin.defaults, options);
        // vars
        this.#popin = popin;
        this.#path = this.#popin.querySelector(".popin__background path");
        this.#triggers = this.#settings.context.querySelectorAll('[aria-controls="' + popin.id + '"]');
        this.#tween = new (0, _oneloopJs.Tween)({
            duration: 1750,
            autoStart: false,
            reverse: true,
            onStart: ()=>{
                this.#popin.style.display = "block";
            },
            onUpdate: (timestamp, tick, percent)=>{
                var a = (0, _oneloopJs.easings).easeInOutCubic(percent) * 64;
                var b = (0, _oneloopJs.easings).easeInOutExpo(percent) * 64;
                this.#path.setAttribute("d", "M0, 0H" + a + "C" + a + ", 0, " + b + ", 56, " + b + ", 128S" + a + ", 256, " + a + ", 256H0V0Z");
            },
            onComplete: (timestamp, tick, percent)=>{
                if (percent === 0) {
                    this.#popin.style.display = "none";
                    relocate();
                }
            }
        });
        this.#triggers.forEach((trigger)=>{
            trigger.addEventListener("click", this.#onClickTrigger);
        });
        this.#popin.addEventListener("click", this.#onClickPopin);
    }
    open() {
        if (!this.#isOpen) {
            this.#isOpen = true;
            this.#settings.targetOnOpen.appendChild(this.#popin);
            this.#tween.start();
            this.#popin.offsetHeight;
            this.#popin.classList.add(this.#settings.openClass);
        }
        return this;
    }
    close() {
        if (this.#isOpen) {
            this.#isOpen = false;
            this.#tween.start();
            this.#popin.classList.remove(this.#settings.openClass);
        }
        return this;
    }
}
Popin.defaults = {
    context: document,
    targetOnOpen: document.body,
    openClass: "is-open"
};
exports.default = Popin;

},{"../utils/extend":"ilxxn","oneloop.js":"l9lAO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4fbbF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _oneloopJs = require("oneloop.js");
// ----
// Class Scroll
// ----
let instance = null;
class Scroll {
    #directions = [
        "top",
        "bottom",
        "up",
        "down"
    ];
    #html = document.documentElement;
    #currentDirectionIndex;
    #scrollObserver;
    #isSmoothScrollEnabled = false;
    #scrollHeight = 0;
    #onRefresh;
    constructor(){
        if (instance) return instance;
        instance = this;
        this.#scrollObserver = new (0, _oneloopJs.ScrollObserver)();
        this.#onRefresh = this.#refresh.bind(this);
        this.#scrollObserver.observe(this.#html, {
            onAlways: (scroll, percentRTW, percentRTE)=>{
                const y = percentRTE.y || 0; // TODO: see why on load it's NaN
                const p = Math.min(Math.round(y * 100), 100);
                if (p === 0) this.#setDirectionClass("top");
                else if (p === 100) this.#setDirectionClass("bottom");
                else if (scroll.direction.y === -1) this.#setDirectionClass("up");
                else if (scroll.direction.y === 1) this.#setDirectionClass("down");
                this.#html.style.setProperty("--scroll-y", y * this.#scrollHeight + "px");
            }
        });
    }
    #setDirectionClass(direction) {
        const newIndex = this.#directions.indexOf(direction);
        if (newIndex > -1 && this.#currentDirectionIndex !== newIndex) {
            this.#html.classList.remove("scroll-" + this.#directions[this.#currentDirectionIndex]);
            this.#html.classList.add("scroll-" + this.#directions[newIndex]);
            this.#currentDirectionIndex = newIndex;
        }
        return this;
    }
    #refresh() {
        const content = document.querySelector(".site-content");
        const contentHeight = content.offsetHeight;
        this.#scrollHeight = contentHeight - window.innerHeight;
        this.#html.style.setProperty("--content-height", contentHeight + "px");
        return this;
    }
    enableSmoothScroll() {
        this.#refresh();
        this.#isSmoothScrollEnabled = true;
        this.#scrollObserver.scrollDivider = 16;
        this.#scrollObserver.onStart = this.#onRefresh;
        this.#scrollObserver.onRefresh = this.#onRefresh;
        this.#html.style.setProperty("--scroll-y", this.#scrollObserver.getScrollInfos().scroll.y * this.#scrollHeight + "px");
        this.#html.classList.add("has-smooth-scroll");
        this.#scrollObserver.synchronise();
    }
    observe(element, options) {
        this.#scrollObserver.observe(element, options);
        return this;
    }
    unobserve(element) {
        this.#scrollObserver.unobserve(element);
        return this;
    }
    reset() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        });
        if (this.#isSmoothScrollEnabled) {
            this.#html.style.setProperty("--scroll-y", "0px");
            this.#refresh();
            this.#scrollObserver.synchronise();
        }
        return this;
    }
    static getInstance() {
        if (!instance) new Scroll();
        return instance;
    }
}
exports.default = Scroll;

},{"oneloop.js":"l9lAO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"frOD9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _animatedTitle = require("./AnimatedTitle");
var _animatedTitleDefault = parcelHelpers.interopDefault(_animatedTitle);
var _pageDefault = require("./PageDefault");
var _pageDefaultDefault = parcelHelpers.interopDefault(_pageDefault);
var _scroll = require("./Scroll");
var _scrollDefault = parcelHelpers.interopDefault(_scroll);
var _oneloopJs = require("oneloop.js");
class PageWebsite extends (0, _pageDefaultDefault.default) {
    #scroll;
    #work;
    #chapeau;
    #h1;
    #description;
    #btn;
    #container;
    constructor(options){
        super(options);
        this.#scroll = (0, _scrollDefault.default).getInstance();
        this.#h1 = new (0, _animatedTitleDefault.default)(this.find("h1"), {
            observeOnScroll: false,
            showOnInitialise: false
        });
        this.#work = this.find(".work");
        this.#chapeau = this.find(".work__chapeau");
        this.#description = this.find(".is-style-large");
        this.#btn = this.find(".work__btn");
        this.#container = this.find(".container");
        this.#reset();
    }
    #initialise() {
        this.#scroll.observe(".work__devices", {
            onVisible: function(scrollInfos, pRTW, pRTE) {
                this.element.style.setProperty("--percent-y", pRTW.y);
            }
        });
        new (0, _oneloopJs.Tween)({
            duration: 250,
            onUpdate: (timestamp, tick, percent)=>{
                this.#chapeau.style.opacity = percent;
            }
        });
        this.#h1.show();
        new (0, _oneloopJs.Tween)({
            delay: 500,
            duration: 2000,
            onUpdate: (timestamp, tick, percent)=>{
                this.#description.style.opacity = percent;
                this.#description.style.transform = `translateY(${100 * (1 - (0, _oneloopJs.easings).easeOutExpo(percent))}px)`;
            }
        });
        if (this.#btn) new (0, _oneloopJs.Tween)({
            delay: 750,
            duration: 1750,
            onUpdate: (timestamp, tick, percent)=>{
                this.#btn.style.opacity = percent;
                this.#btn.style.transform = `translateY(${125 * (1 - (0, _oneloopJs.easings).easeOutExpo(percent))}px)`;
            }
        });
        new (0, _oneloopJs.Tween)({
            delay: 1000,
            duration: 1500,
            onUpdate: (timestamp, tick, percent)=>{
                this.#container.style.opacity = percent;
                this.#container.style.transform = `translateY(${150 * (1 - (0, _oneloopJs.easings).easeOutExpo(percent))}px)`;
            }
        });
        return this;
    }
    #reset() {
        this.#chapeau.style.opacity = 0;
        this.#h1.render(0);
        this.#description.style.opacity = 0;
        this.#description.style.transform = "translateY(100px)";
        this.#container.style.opacity = 0;
        this.#container.style.transform = "translateY(150px)";
        if (this.#btn) {
            this.#btn.style.opacity = 0;
            this.#btn.style.transform = "translateY(125px)";
        }
        return this;
    }
    afterIntro() {
        this.#initialise();
        return this;
    }
    beforeSwap(data, callback) {
        new (0, _oneloopJs.Tween)({
            duration: 1000,
            onUpdate: (timestamp, tick, percent)=>{
                this.#work.style.opacity = 1 - percent;
                this.#work.style.transform = `translateY(${-200 * (0, _oneloopJs.easings).easeInExpo(percent)}px)`;
            },
            onComplete: ()=>{
                this.#reset();
                this.#work.style.opacity = "";
                this.#work.style.transform = "";
                if (typeof callback === "function") callback();
            }
        });
        return this;
    }
    afterSwap(data, callback) {
        this.setContentVisible();
        this.#initialise();
        if (typeof callback === "function") callback();
        return this;
    }
}
exports.default = PageWebsite;

},{"./AnimatedTitle":"axDd1","./PageDefault":"d8y7I","oneloop.js":"l9lAO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./Scroll":"4fbbF"}],"axDd1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _scroll = require("./Scroll");
var _scrollDefault = parcelHelpers.interopDefault(_scroll);
var _extend = require("../utils/extend");
var _extendDefault = parcelHelpers.interopDefault(_extend);
var _oneloopJs = require("oneloop.js");
class AnimatedTitle {
    #settings;
    #title = null;
    #chars = [];
    #scroll = null;
    #splittedText;
    constructor(title, options){
        this.#settings = (0, _extendDefault.default)(true, {}, AnimatedTitle.defaults, options);
        this.#title = title;
        if (document.fonts.check('1em "Source Serif 4"')) this.#initialise();
        else document.fonts.ready.then(()=>this.#initialise());
    }
    #initialise() {
        this.#splittedText = new (0, _oneloopJs.SplittedText)(this.#title, {
            byLine: true,
            byChar: true
        });
        this.#chars = this.#title.getElementsByClassName("st-char");
        this.render(0);
        if (this.#settings.observeOnScroll) {
            this.#scroll = (0, _scrollDefault.default).getInstance();
            this.#scroll.observe(this.#title, {
                onVisible: (scrollInfos, pRTW)=>{
                    this.render(Math.max(0, pRTW.y));
                }
            });
        } else if (this.#settings.showOnInitialise) this.show();
        this.#title.style.visibility = "visible";
    }
    show(callback) {
        new (0, _oneloopJs.Tween)({
            duration: Math.max(this.#chars.length * 142, 1000),
            onUpdate: (timestamp, tick, percent)=>{
                this.render(percent);
            },
            onComplete: callback
        });
        return this;
    }
    render(percent) {
        const chars = this.#chars;
        const length = chars.length;
        for(let i = 0; i < length; i++){
            const p = (0, _oneloopJs.easings).easeOutExpo(Math.max(Math.min(percent * 2 - i / (length - 1) * 0.5, 1), 0));
            chars[i].style.opacity = p;
            chars[i].style.transform = "translateY(" + (24 - 24 * p) + "%) rotateX(" + (-90 + 90 * p) + "deg)";
        }
        return this;
    }
}
AnimatedTitle.defaults = {
    observeOnScroll: true,
    showOnInitialise: true
};
exports.default = AnimatedTitle;

},{"./Scroll":"4fbbF","../utils/extend":"ilxxn","oneloop.js":"l9lAO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g6JhA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _animatedTitle = require("./AnimatedTitle");
var _animatedTitleDefault = parcelHelpers.interopDefault(_animatedTitle);
var _oneloopJs = require("oneloop.js");
class Intro {
    #intro = document.getElementsByClassName("site-intro")[0];
    #logo = document.getElementsByClassName("logo")[0];
    #path;
    constructor(){
        this.#intro.innerHTML = `\
            <svg class="site-intro__background" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 64" preserveAspectRatio='none'>
                <path d="M0, 0V64C0, 64, 57.3, 64, 128, 64S256, 64, 256, 64V0H0Z"/>
            </svg>`;
        this.#path = this.#intro.querySelector("path");
    }
    play(callback) {
        const p = this.#logo.querySelector("p");
        new (0, _oneloopJs.Tween)({
            duration: 2000,
            delay: 2500,
            onUpdate: (timestamp, tick, percent)=>{
                const a = (0, _oneloopJs.easings).easeInCubic(1 - percent) * 64;
                const b = (0, _oneloopJs.easings).easeInQuint(1 - percent) * 64;
                // eslint-disable-next-line prettier/prettier
                this.#path.setAttribute("d", "M0, 0V" + a + "C0, " + a + ", 57.3, " + b + ", 128, " + b + "S256, " + a + ", 256, " + a + "V0H0Z");
            },
            onComplete: ()=>{
                this.#intro.style.display = "none";
                if (typeof callback === "function") callback();
            }
        });
        new (0, _animatedTitleDefault.default)(this.#logo.querySelector("a"), {
            observeOnScroll: false
        });
        new (0, _oneloopJs.Tween)({
            duration: 1500,
            delay: 500,
            onUpdate: (timestamp, tick, percent)=>{
                p.style.opacity = percent;
            }
        });
        return this;
    }
}
exports.default = Intro;

},{"./AnimatedTitle":"axDd1","oneloop.js":"l9lAO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cP0vy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _noop = require("../utils/noop");
var _noopDefault = parcelHelpers.interopDefault(_noop);
var _extend = require("../utils/extend");
var _extendDefault = parcelHelpers.interopDefault(_extend);
let instance = null;
class Device {
    #settings;
    #isMobile = false;
    #onMobileEvent;
    #onDesktopEvent;
    constructor(options){
        if (instance) return instance;
        instance = this;
        this.#settings = (0, _extendDefault.default)(true, {}, Device.defaults, options);
        this.#onMobileEvent = ()=>{
            this.#isMobile = true;
            this.#removeEvents();
        };
        this.#onDesktopEvent = ()=>{
            this.#removeEvents();
        };
        document.addEventListener("touchstart", this.#onMobileEvent);
        document.addEventListener("mousemove", this.#onDesktopEvent);
        window.addEventListener("scroll", this.#onDesktopEvent);
    }
    #removeEvents() {
        document.removeEventListener("touchstart", this.#onMobileEvent);
        document.removeEventListener("mousemove", this.#onDesktopEvent);
        window.removeEventListener("scroll", this.#onDesktopEvent);
        this.#settings.onDeviceTypeKnown(this.#isMobile);
        return this;
    }
    isMobile() {
        return this.#isMobile;
    }
    isDesktop() {
        return !this.#isMobile;
    }
    static getInstance() {
        if (!instance) new Device();
        return instance;
    }
}
Device.defaults = {
    onDeviceTypeKnown: (0, _noopDefault.default)
};
exports.default = Device;

},{"../utils/noop":"fJcsH","../utils/extend":"ilxxn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fJcsH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function() {});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c4lyO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _oneloopJs = require("oneloop.js");
var _extend = require("../utils/extend");
var _extendDefault = parcelHelpers.interopDefault(_extend);
// ----
// class
// ----
class CustomCursor {
    #settings;
    #move;
    #cursor;
    #mainLoopEntry;
    #oneMouseMove = ()=>{
        document.removeEventListener("mousemove", this.#oneMouseMove);
        this.#cursor.style.display = "";
    };
    #onMouseMove = (e)=>{
        this.#move.set(e.clientX, e.clientY);
    };
    #onMouseEnterTrigger = (e)=>{
        this.#cursor.dataset.tag = e.currentTarget.tagName.toLowerCase();
        this.#cursor.dataset.class = e.currentTarget.className.toLowerCase();
        this.#cursor.classList.add(this.#settings.activeClass);
    };
    #onMouseLeaveTrigger = ()=>{
        this.#cursor.dataset.tag = "";
        this.#cursor.dataset.class = "";
        this.#cursor.classList.remove(this.#settings.activeClass);
    };
    constructor(options){
        const cursor = document.createElement("div");
        const last = new (0, _oneloopJs.Vector2)();
        const current = new (0, _oneloopJs.Vector2)();
        const move = new (0, _oneloopJs.Vector2)();
        // settings
        this.#settings = (0, _extendDefault.default)({}, CustomCursor.defaults, options);
        // vars
        this.#move = move;
        this.#cursor = cursor;
        this.#mainLoopEntry = new (0, _oneloopJs.MainLoopEntry)({
            autoStart: false,
            onUpdate: function() {
                current.x = move.x + (last.x - move.x) * 0.8;
                current.y = move.y + (last.y - move.y) * 0.8;
                cursor.style.transform = "translate(" + current.x + "px," + current.y + "px)";
                last.set(current.x, current.y);
            }
        });
        cursor.style.display = "none";
        cursor.classList.add(this.#settings.cursorClass);
        cursor.innerHTML = this.#settings.innerHTML;
        document.addEventListener("mousemove", this.#oneMouseMove);
        document.addEventListener("mousemove", this.#onMouseMove);
        document.documentElement.classList.add(this.#settings.enabledClass);
        document.body.appendChild(cursor);
        this.#mainLoopEntry.start();
    }
    initTrigger(trigger) {
        trigger.addEventListener("mouseenter", this.#onMouseEnterTrigger);
        trigger.addEventListener("mouseleave", this.#onMouseLeaveTrigger);
        return this;
    }
    initTriggers(context) {
        context.querySelectorAll(this.#settings.triggers).forEach(this.initTrigger.bind(this));
        return this;
    }
    reset() {
        this.#cursor.classList.remove(this.#settings.activeClass);
        return this;
    }
    destroy() {
        document.querySelectorAll(this.#settings.triggers).forEach((trigger)=>{
            trigger.removeEventListener("mouseenter", this.#onMouseEnterTrigger);
            trigger.removeEventListener("mouseleave", this.#onMouseLeaveTrigger);
        });
        this.#mainLoopEntry.stop();
        document.removeEventListener("mousemove", this.#oneMouseMove);
        document.removeEventListener("mousemove", this.#onMouseMove);
        document.body.removeChild(this.#cursor);
        document.documentElement.classList.remove(this.#settings.enabledClass);
    }
}
// ----
// defaults
// ----
CustomCursor.defaults = {
    enabledClass: "has-custom-cursor",
    cursorClass: "cursor",
    activeClass: "is-active",
    innerHTML: "<div></div>",
    triggers: "a, button, input, label, select, audio, iframe"
};
// ----
// export
// ----
exports.default = CustomCursor;

},{"oneloop.js":"l9lAO","../utils/extend":"ilxxn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["frd3z","ebWYT"], "ebWYT", "parcelRequire2041")

//# sourceMappingURL=index.739bf03c.js.map
