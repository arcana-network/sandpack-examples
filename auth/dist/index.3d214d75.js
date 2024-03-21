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
})({"km5uZ":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
declare var HMR_USE_SSE: boolean;
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
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
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
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
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

},{}],"bB7Pu":[function(require,module,exports) {
var _auth = require("@arcana/auth");
let provider;
let from = ""; // get from eth_accounts call
let userPK; // public key corresponding to the email ID, verifier
let ENV_ARCANA_CLIENTID = "xar_live_d7c88d9b033d100e4200d21a5c4897b896e60063", ENV_ARCANA_WALLET_UI_POSITION = "right", ENV_ARCANA_THEME = "light", ENV_ARCANA_NETWORK = "mainnet", ENV_ARCANA_WALLET_VISIBLE = "false", ENV_ARCANA_COMPACT_MODE, ENV_ARCANA_DEFAULT_CHAINID, ENV_USER_LOGIN_EMAIL = "shaloo@newfang.io", ENV_USER_LOGIN_VERIFIER = "google", ENV_ADD_CHAIN_ID, ENV_ADD_CHAIN_NAME, ENV_ADD_CHAIN_SYM, ENV_ADD_CHAIN_RPC_URL, ENV_ADD_CHAIN_BLK_EXP_URL, ENV_SWITCH_CHAIN_ID, ENV_QUERY_PUBLIC_KEY_FOR_ID = "makyl@newfang.io", ENV_QUERY_PUBLIC_KEY_FOR_ID_VERIFIER = "google";
console.log(" ENV_ARCANA_CLIENTID ", ENV_ARCANA_CLIENTID);
console.log("Happy production!");
const auth = new (0, _auth.AuthProvider)(ENV_ARCANA_CLIENTID, {
    network: ENV_ARCANA_NETWORK,
    position: ENV_ARCANA_WALLET_UI_POSITION,
    theme: ENV_ARCANA_THEME,
    alwaysVisible: ENV_ARCANA_WALLET_VISIBLE,
    //appMode: "1",
    connectOptions: {
        compact: ENV_ARCANA_COMPACT_MODE
    },
    chainConfig: {
        chainId: ENV_ARCANA_DEFAULT_CHAINID
    }
});
provider = auth.provider;
setHooks();
function setHooks() {
    provider.on("connect", async (params)=>{
        console.log({
            type: "connect",
            params: params
        });
        document.querySelector("#event").innerHTML = "connect Event";
    });
    provider.on("accountsChanged", (params)=>{
        console.log({
            type: "accountsChanged",
            params: params
        });
        document.querySelector("#event").innerHTML = "accountsChanged Event";
    });
    provider.on("chainChanged", async (params)=>{
        console.log({
            type: "chainChanged",
            params: params
        });
        document.querySelector("#event").innerHTML = "chainChanged Event";
    });
    provider.on("disconnect", async (params)=>{
        console.log({
            type: "disconnect",
            params: params
        });
        document.querySelector("#event").innerHTML = "disconnect Event";
    });
    provider.on("message", async (params)=>{
        console.log({
            type: "message",
            params: params
        });
        document.querySelector("#event").innerHTML = "message Event";
    });
}
async function initAuth() {
    try {
        console.log("Intantiating Auth... ");
        document.querySelector("#result").innerHTML = "Initializing Auth. Please wait...";
        console.time("auth_init");
        await auth.init();
        console.timeEnd("auth_init");
        console.log("Init auth complete!");
        document.querySelector("#result").innerHTML = "Auth initialized. Now you can continue.";
        console.log({
            provider
        });
    } catch (e1) {
        console.log({
            e: e1
        });
    }
}
async function getLogins() {
    let authOptions = "";
    try {
        console.log("Get logins");
        const logins = await auth.getLogins();
        for(var i = 0; i < logins.length; i++)authOptions = authOptions + logins[i].toString() + ", ";
        authOptions = authOptions.slice(0, -1);
        document.querySelector("#result").innerHTML = "Available Auth Options: \n" + authOptions;
        console.log({
            logins
        });
    } catch (e1) {
        console.log(e1);
    }
}
async function getAppId() {
    try {
        const appId = await auth.appId;
        console.log("App id:", appId);
        document.querySelector("#result").innerHTML = "AppId: " + appId;
    } catch (e1) {
        console.log(e1);
    }
}
async function connect() {
    try {
        await auth.connect();
        document.querySelector("#result").innerHTML = "Connect: User logged in successfully!";
    } catch (e1) {
        console.log(e1);
    }
}
async function isLoggedIn() {
    try {
        let ans = await auth.isLoggedIn();
        if (true == ans) document.querySelector("#result").innerHTML = "Yes, User: " + ENV_USER_LOGIN_EMAIL + "is logged in aready!";
        else document.querySelector("#result").innerHTML = "No, user is not yet logged in!";
    } catch (e1) {
        console.log(e1);
    }
}
async function emailCallback() {
    console.log("Received emailsent callback");
    document.querySelector("#result").innerHTML = "Login With Link: Link Emailed!";
}
async function loginWithOTP() {
    try {
        console.log("Login OTP will be sent to:", ENV_USER_LOGIN_EMAIL);
        const login = await auth.loginWithOTPStart(ENV_USER_LOGIN_EMAIL);
        await login.begin();
        if (login.isCompleteRequired) {
            console.log("isCompleteRequired is True");
            await loginWithOTPComplete(ENV_USER_LOGIN_EMAIL, emailCallback);
        }
        document.querySelector("#result").innerHTML = "Login With Link: Link Emailed to emailID=", ENV_USER_LOGIN_EMAIL;
    } catch (e1) {
        console.log(e1);
    }
}
async function loginWithLink() {
    try {
        console.log("Login email link will be sent to:", ENV_USER_LOGIN_EMAIL);
        await auth.loginWithLink(ENV_USER_LOGIN_EMAIL, emailCallback());
        document.querySelector("#result").innerHTML = "Login With Link: Link Emailed to emailID=", ENV_USER_LOGIN_EMAIL;
    } catch (e1) {
        console.log(e1);
    }
}
async function loginWithSocial() {
    try {
        await auth.loginWithSocial(ENV_USER_LOGIN_VERIFIER);
        document.querySelector("#result").innerHTML = "Login With Social Provider: " + ENV_USER_LOGIN_VERIFIER + " Logged in!";
    } catch (e1) {
        console.log(e1);
    }
}
async function requestAccounts() {
    console.log("Requesting accounts");
    try {
        const accounts = await provider.request({
            method: "eth_requestAccounts"
        });
        console.log({
            accounts
        });
        document.querySelector("#result").innerHTML = "RequestAccounts: " + JSON.stringify(accounts);
        console.log({
            e
        });
    } catch (e1) {
        console.log({
            e: e1
        });
    }
}
async function logout() {
    console.log("Requesting logout");
    try {
        await auth.logout();
        document.querySelector("#result").innerHTML = "Logout: You are now logged out!";
    } catch (e1) {
        console.log({
            e: e1
        });
    }
}
async function getAccounts() {
    console.log("Requesting accounts");
    try {
        const accounts = await auth.provider.request({
            method: "eth_accounts"
        });
        console.log({
            accounts
        });
        from = accounts[0];
        document.querySelector("#result").innerHTML = accounts[0];
    } catch (e1) {
        console.log(e1);
    }
}
async function getUser() {
    console.log("Get User Information...");
    try {
        const userInfo = await auth.getUser();
        console.log({
            userInfo
        });
        document.querySelector("#result").innerHTML = "Email: " + userInfo.email.toString() + "," + "Name: " + userInfo.name.toString() + "," + "Login Type: " + userInfo.loginType.toString() + "," + "Public Key: " + userInfo.publicKey.toString() + "," + "Arcana JWT Token: " + userInfo.loginToken.toString();
    } catch (e1) {
        console.log(e1);
    }
}
async function getPublicKey() {
    console.log("Get User's Public Key...");
    try {
        const pKey = await auth.getPublicKey(ENV_USER_LOGIN_EMAIL, ENV_USER_LOGIN_VERIFIER);
        console.log(pKey.toString());
        document.querySelector("#result").innerHTML = pKey.toString();
    } catch (e1) {
        console.log(e1);
    }
}
let contractAddress;
// Get Public Key
// associated with the current account
// and  used for encryption
async function getEncryptPK() {
    console.log("Requesting logged in user's public key");
    try {
        const pk = await auth.provider.request({
            method: "eth_getEncryptionPublicKey",
            params: [
                from
            ]
        });
        console.log({
            pk
        });
        document.querySelector("#result").innerHTML = "Logged in User's Public Key =" + pk;
    } catch (e1) {
        console.log({
            e: e1
        });
        document.querySelector("#result").innerHTML = "eth_getEncryptionPublicKey failed!!! error = " + e1;
    }
}
async function getUserPK() {
    console.log("Requesting public for user with email id:", ENV_QUERY_PUBLIC_KEY_FOR_ID);
    try {
        userPK = await auth.provider.getPublicKey(ENV_QUERY_PUBLIC_KEY_FOR_ID, ENV_QUERY_PUBLIC_KEY_FOR_ID_VERIFIER);
        console.log({
            userPK
        });
        document.querySelector("#result").innerHTML = "Public key for input email ID = " + ENV_QUERY_PUBLIC_KEY_FOR_ID + " is" + userPK;
    } catch (e1) {
        console.log({
            e: e1
        });
        document.querySelector("#result").innerHTML = "Public key for input email ID failed with error =  " + e1;
    }
}
async function showWallet() {
    console.log("Display wallet...");
    try {
        await auth.showWallet();
        document.querySelector("#result").innerHTML = "Wallet displayed on the " + ENV_ARCANA_WALLET_UI_POSITION + " side of the screen.";
    } catch (e1) {
        console.log({
            e: e1
        });
    }
}
document.querySelector("#Btn-InitAuth").addEventListener("click", initAuth);
document.querySelector("#Btn-GetLogins").addEventListener("click", getLogins);
document.querySelector("#Btn-GetAppId").addEventListener("click", getAppId);
document.querySelector("#Btn-IsLoggedIn").addEventListener("click", isLoggedIn);
document;
document.querySelector("#Btn-Connect").addEventListener("click", connect);
document.querySelector("#Btn-Login-with-Social").addEventListener("click", loginWithSocial);
document.querySelector("#Btn-Login-with-Link").addEventListener("click", loginWithLink);
document.querySelector("#Btn-Login-with-OTP").addEventListener("click", loginWithOTP);
document.querySelector("#Btn-GetAccounts").addEventListener("click", getAccounts);
document.querySelector("#Btn-GetUser").addEventListener("click", getUser);
document.querySelector("#Btn-GetPublicKey").addEventListener("click", getPublicKey);
document.querySelector("#Btn-GetEncryptPublicKey").addEventListener("click", getEncryptPK);
document.querySelector("#Btn-GetUserPublicKey").addEventListener("click", getUserPK);
document.querySelector("#Btn-ReqAccounts").addEventListener("click", requestAccounts);
document.querySelector("#Btn-ShowWallet").addEventListener("click", showWallet);
document.querySelector("#Btn-Logout").addEventListener("click", logout);

},{"@arcana/auth":"bHQGa"}],"bHQGa":[function(require,module,exports) {
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AuthProvider", ()=>Rn);
parcelHelpers.export(exports, "BearerAuthentication", ()=>_e);
function e(e, t, n, r) {
    return new (n || (n = Promise))(function(i, o) {
        function s(e) {
            try {
                l(r.next(e));
            } catch (e) {
                o(e);
            }
        }
        function a(e) {
            try {
                l(r.throw(e));
            } catch (e) {
                o(e);
            }
        }
        function l(e) {
            var t;
            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                e(t);
            })).then(s, a);
        }
        l((r = r.apply(e, t || [])).next());
    });
}
var t = {}, n = {}, r = a;
a.default = a, a.stable = u, a.stableStringify = u;
var i = [], o = [];
function s() {
    return {
        depthLimit: Number.MAX_SAFE_INTEGER,
        edgesLimit: Number.MAX_SAFE_INTEGER
    };
}
function a(e, t, n, r) {
    var a;
    void 0 === r && (r = s()), c(e, "", 0, [], void 0, 0, r);
    try {
        a = 0 === o.length ? JSON.stringify(e, t, n) : JSON.stringify(e, f(t), n);
    } catch (e) {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
    } finally{
        for(; 0 !== i.length;){
            var l = i.pop();
            4 === l.length ? Object.defineProperty(l[0], l[1], l[3]) : l[0][l[1]] = l[2];
        }
    }
    return a;
}
function l(e, t, n, r) {
    var s = Object.getOwnPropertyDescriptor(r, n);
    void 0 !== s.get ? s.configurable ? (Object.defineProperty(r, n, {
        value: e
    }), i.push([
        r,
        n,
        t,
        s
    ])) : o.push([
        t,
        n,
        e
    ]) : (r[n] = e, i.push([
        r,
        n,
        t
    ]));
}
function c(e, t, n, r, i, o, s) {
    var a;
    if (o += 1, "object" == typeof e && null !== e) {
        for(a = 0; a < r.length; a++)if (r[a] === e) return void l("[Circular]", e, t, i);
        if (void 0 !== s.depthLimit && o > s.depthLimit) return void l("[...]", e, t, i);
        if (void 0 !== s.edgesLimit && n + 1 > s.edgesLimit) return void l("[...]", e, t, i);
        if (r.push(e), Array.isArray(e)) for(a = 0; a < e.length; a++)c(e[a], a, a, r, e, o, s);
        else {
            var d = Object.keys(e);
            for(a = 0; a < d.length; a++){
                var u = d[a];
                c(e[u], u, a, r, e, o, s);
            }
        }
        r.pop();
    }
}
function d(e, t) {
    return e < t ? -1 : e > t ? 1 : 0;
}
function u(e, t, n, r) {
    void 0 === r && (r = s());
    var a, l = h(e, "", 0, [], void 0, 0, r) || e;
    try {
        a = 0 === o.length ? JSON.stringify(l, t, n) : JSON.stringify(l, f(t), n);
    } catch (e) {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
    } finally{
        for(; 0 !== i.length;){
            var c = i.pop();
            4 === c.length ? Object.defineProperty(c[0], c[1], c[3]) : c[0][c[1]] = c[2];
        }
    }
    return a;
}
function h(e, t, n, r, o, s, a) {
    var c;
    if (s += 1, "object" == typeof e && null !== e) {
        for(c = 0; c < r.length; c++)if (r[c] === e) return void l("[Circular]", e, t, o);
        try {
            if ("function" == typeof e.toJSON) return;
        } catch (e) {
            return;
        }
        if (void 0 !== a.depthLimit && s > a.depthLimit) return void l("[...]", e, t, o);
        if (void 0 !== a.edgesLimit && n + 1 > a.edgesLimit) return void l("[...]", e, t, o);
        if (r.push(e), Array.isArray(e)) for(c = 0; c < e.length; c++)h(e[c], c, c, r, e, s, a);
        else {
            var u = {}, f = Object.keys(e).sort(d);
            for(c = 0; c < f.length; c++){
                var p = f[c];
                h(e[p], p, c, r, e, s, a), u[p] = e[p];
            }
            if (void 0 === o) return u;
            i.push([
                o,
                t,
                e
            ]), o[t] = u;
        }
        r.pop();
    }
}
function f(e) {
    return e = void 0 !== e ? e : function(e, t) {
        return t;
    }, function(t, n) {
        if (o.length > 0) for(var r = 0; r < o.length; r++){
            var i = o[r];
            if (i[1] === t && i[0] === n) {
                n = i[2], o.splice(r, 1);
                break;
            }
        }
        return e.call(this, t, n);
    };
}
Object.defineProperty(n, "__esModule", {
    value: !0
}), n.EthereumProviderError = n.EthereumRpcError = void 0;
const p = r;
class g extends Error {
    constructor(e, t, n){
        if (!Number.isInteger(e)) throw new Error('"code" must be an integer.');
        if (!t || "string" != typeof t) throw new Error('"message" must be a nonempty string.');
        super(t), this.code = e, void 0 !== n && (this.data = n);
    }
    serialize() {
        const e = {
            code: this.code,
            message: this.message
        };
        return void 0 !== this.data && (e.data = this.data), this.stack && (e.stack = this.stack), e;
    }
    toString() {
        return p.default(this.serialize(), _, 2);
    }
}
n.EthereumRpcError = g;
function _(e, t) {
    if ("[Circular]" !== t) return t;
}
n.EthereumProviderError = class extends g {
    constructor(e, t, n){
        if (!function(e) {
            return Number.isInteger(e) && e >= 1e3 && e <= 4999;
        }(e)) throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
        super(e, t, n);
    }
};
var m = {}, v = {};
Object.defineProperty(v, "__esModule", {
    value: !0
}), v.errorValues = v.errorCodes = void 0, v.errorCodes = {
    rpc: {
        invalidInput: -32000,
        resourceNotFound: -32001,
        resourceUnavailable: -32002,
        transactionRejected: -32003,
        methodNotSupported: -32004,
        limitExceeded: -32005,
        parse: -32700,
        invalidRequest: -32600,
        methodNotFound: -32601,
        invalidParams: -32602,
        internal: -32603
    },
    provider: {
        userRejectedRequest: 4001,
        unauthorized: 4100,
        unsupportedMethod: 4200,
        disconnected: 4900,
        chainDisconnected: 4901
    }
}, v.errorValues = {
    "-32700": {
        standard: "JSON RPC 2.0",
        message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
    },
    "-32600": {
        standard: "JSON RPC 2.0",
        message: "The JSON sent is not a valid Request object."
    },
    "-32601": {
        standard: "JSON RPC 2.0",
        message: "The method does not exist / is not available."
    },
    "-32602": {
        standard: "JSON RPC 2.0",
        message: "Invalid method parameter(s)."
    },
    "-32603": {
        standard: "JSON RPC 2.0",
        message: "Internal JSON-RPC error."
    },
    "-32000": {
        standard: "EIP-1474",
        message: "Invalid input."
    },
    "-32001": {
        standard: "EIP-1474",
        message: "Resource not found."
    },
    "-32002": {
        standard: "EIP-1474",
        message: "Resource unavailable."
    },
    "-32003": {
        standard: "EIP-1474",
        message: "Transaction rejected."
    },
    "-32004": {
        standard: "EIP-1474",
        message: "Method not supported."
    },
    "-32005": {
        standard: "EIP-1474",
        message: "Request limit exceeded."
    },
    4001: {
        standard: "EIP-1193",
        message: "User rejected the request."
    },
    4100: {
        standard: "EIP-1193",
        message: "The requested account and/or method has not been authorized by the user."
    },
    4200: {
        standard: "EIP-1193",
        message: "The requested method is not supported by this Ethereum provider."
    },
    4900: {
        standard: "EIP-1193",
        message: "The provider is disconnected from all chains."
    },
    4901: {
        standard: "EIP-1193",
        message: "The provider is disconnected from the specified chain."
    }
}, function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.serializeError = e.isValidCode = e.getMessageFromCode = e.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
    const t = v, r = n, i = t.errorCodes.rpc.internal, o = {
        code: i,
        message: s(i)
    };
    function s(n, r = "Unspecified error message. This is a bug, please report it.") {
        if (Number.isInteger(n)) {
            const r = n.toString();
            if (d(t.errorValues, r)) return t.errorValues[r].message;
            if (l(n)) return e.JSON_RPC_SERVER_ERROR_MESSAGE;
        }
        return r;
    }
    function a(e) {
        if (!Number.isInteger(e)) return !1;
        const n = e.toString();
        return !!t.errorValues[n] || !!l(e);
    }
    function l(e) {
        return e >= -32099 && e <= -32000;
    }
    function c(e) {
        return e && "object" == typeof e && !Array.isArray(e) ? Object.assign({}, e) : e;
    }
    function d(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }
    e.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.", e.getMessageFromCode = s, e.isValidCode = a, e.serializeError = function(e, { fallbackError: t = o, shouldIncludeStack: n = !1 } = {}) {
        var i, l;
        if (!t || !Number.isInteger(t.code) || "string" != typeof t.message) throw new Error("Must provide fallback error with integer number code and string message.");
        if (e instanceof r.EthereumRpcError) return e.serialize();
        const u = {};
        if (e && "object" == typeof e && !Array.isArray(e) && d(e, "code") && a(e.code)) {
            const t = e;
            u.code = t.code, t.message && "string" == typeof t.message ? (u.message = t.message, d(t, "data") && (u.data = t.data)) : (u.message = s(u.code), u.data = {
                originalError: c(e)
            });
        } else {
            u.code = t.code;
            const n = null === (i = e) || void 0 === i ? void 0 : i.message;
            u.message = n && "string" == typeof n ? n : t.message, u.data = {
                originalError: c(e)
            };
        }
        const h = null === (l = e) || void 0 === l ? void 0 : l.stack;
        return n && e && h && "string" == typeof h && (u.stack = h), u;
    };
}(m);
var y = {};
Object.defineProperty(y, "__esModule", {
    value: !0
}), y.ethErrors = void 0;
const w = n, b = m, x = v;
function C(e, t) {
    const [n, r] = L(t);
    return new w.EthereumRpcError(e, n || b.getMessageFromCode(e), r);
}
function E(e, t) {
    const [n, r] = L(t);
    return new w.EthereumProviderError(e, n || b.getMessageFromCode(e), r);
}
function L(e) {
    if (e) {
        if ("string" == typeof e) return [
            e
        ];
        if ("object" == typeof e && !Array.isArray(e)) {
            const { message: t, data: n } = e;
            if (t && "string" != typeof t) throw new Error("Must specify string message.");
            return [
                t || void 0,
                n
            ];
        }
    }
    return [];
}
y.ethErrors = {
    rpc: {
        parse: (e)=>C(x.errorCodes.rpc.parse, e),
        invalidRequest: (e)=>C(x.errorCodes.rpc.invalidRequest, e),
        invalidParams: (e)=>C(x.errorCodes.rpc.invalidParams, e),
        methodNotFound: (e)=>C(x.errorCodes.rpc.methodNotFound, e),
        internal: (e)=>C(x.errorCodes.rpc.internal, e),
        server: (e)=>{
            if (!e || "object" != typeof e || Array.isArray(e)) throw new Error("Ethereum RPC Server errors must provide single object argument.");
            const { code: t } = e;
            if (!Number.isInteger(t) || t > -32005 || t < -32099) throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
            return C(t, e);
        },
        invalidInput: (e)=>C(x.errorCodes.rpc.invalidInput, e),
        resourceNotFound: (e)=>C(x.errorCodes.rpc.resourceNotFound, e),
        resourceUnavailable: (e)=>C(x.errorCodes.rpc.resourceUnavailable, e),
        transactionRejected: (e)=>C(x.errorCodes.rpc.transactionRejected, e),
        methodNotSupported: (e)=>C(x.errorCodes.rpc.methodNotSupported, e),
        limitExceeded: (e)=>C(x.errorCodes.rpc.limitExceeded, e)
    },
    provider: {
        userRejectedRequest: (e)=>E(x.errorCodes.provider.userRejectedRequest, e),
        unauthorized: (e)=>E(x.errorCodes.provider.unauthorized, e),
        unsupportedMethod: (e)=>E(x.errorCodes.provider.unsupportedMethod, e),
        disconnected: (e)=>E(x.errorCodes.provider.disconnected, e),
        chainDisconnected: (e)=>E(x.errorCodes.provider.chainDisconnected, e),
        custom: (e)=>{
            if (!e || "object" != typeof e || Array.isArray(e)) throw new Error("Ethereum Provider custom errors must provide single object argument.");
            const { code: t, message: n, data: r } = e;
            if (!n || "string" != typeof n) throw new Error('"message" must be a nonempty string');
            return new w.EthereumProviderError(t, n, r);
        }
    }
}, function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getMessageFromCode = e.serializeError = e.EthereumProviderError = e.EthereumRpcError = e.ethErrors = e.errorCodes = void 0;
    const t = n;
    Object.defineProperty(e, "EthereumRpcError", {
        enumerable: !0,
        get: function() {
            return t.EthereumRpcError;
        }
    }), Object.defineProperty(e, "EthereumProviderError", {
        enumerable: !0,
        get: function() {
            return t.EthereumProviderError;
        }
    });
    const r = m;
    Object.defineProperty(e, "serializeError", {
        enumerable: !0,
        get: function() {
            return r.serializeError;
        }
    }), Object.defineProperty(e, "getMessageFromCode", {
        enumerable: !0,
        get: function() {
            return r.getMessageFromCode;
        }
    });
    const i = y;
    Object.defineProperty(e, "ethErrors", {
        enumerable: !0,
        get: function() {
            return i.ethErrors;
        }
    });
    const o = v;
    Object.defineProperty(e, "errorCodes", {
        enumerable: !0,
        get: function() {
            return o.errorCodes;
        }
    });
}(t);
var k, S = {}, N = {
    exports: {}
}, I = "object" == typeof Reflect ? Reflect : null, O = I && "function" == typeof I.apply ? I.apply : function(e, t, n) {
    return Function.prototype.apply.call(e, t, n);
};
k = I && "function" == typeof I.ownKeys ? I.ownKeys : Object.getOwnPropertySymbols ? function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : function(e) {
    return Object.getOwnPropertyNames(e);
};
var R = Number.isNaN || function(e) {
    return e != e;
};
function P() {
    P.init.call(this);
}
N.exports = P, N.exports.once = function(e, t) {
    return new Promise(function(n, r) {
        function i(n) {
            e.removeListener(t, o), r(n);
        }
        function o() {
            "function" == typeof e.removeListener && e.removeListener("error", i), n([].slice.call(arguments));
        }
        z(e, t, o, {
            once: !0
        }), "error" !== t && function(e, t, n) {
            "function" == typeof e.on && z(e, "error", t, n);
        }(e, i, {
            once: !0
        });
    });
}, P.EventEmitter = P, P.prototype._events = void 0, P.prototype._eventsCount = 0, P.prototype._maxListeners = void 0;
var A = 10;
function j(e) {
    if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
function F(e) {
    return void 0 === e._maxListeners ? P.defaultMaxListeners : e._maxListeners;
}
function D(e, t, n, r) {
    var i, o, s, a;
    if (j(n), void 0 === (o = e._events) ? (o = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== o.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), o = e._events), s = o[t]), void 0 === s) s = o[t] = n, ++e._eventsCount;
    else if ("function" == typeof s ? s = o[t] = r ? [
        n,
        s
    ] : [
        s,
        n
    ] : r ? s.unshift(n) : s.push(n), (i = F(e)) > 0 && s.length > i && !s.warned) {
        s.warned = !0;
        var l = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        l.name = "MaxListenersExceededWarning", l.emitter = e, l.type = t, l.count = s.length, a = l, console && console.warn && console.warn(a);
    }
    return e;
}
function $() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function U(e, t, n) {
    var r = {
        fired: !1,
        wrapFn: void 0,
        target: e,
        type: t,
        listener: n
    }, i = $.bind(r);
    return i.listener = n, r.wrapFn = i, i;
}
function M(e, t, n) {
    var r = e._events;
    if (void 0 === r) return [];
    var i = r[t];
    return void 0 === i ? [] : "function" == typeof i ? n ? [
        i.listener || i
    ] : [
        i
    ] : n ? function(e) {
        for(var t = new Array(e.length), n = 0; n < t.length; ++n)t[n] = e[n].listener || e[n];
        return t;
    }(i) : T(i, i.length);
}
function W(e) {
    var t = this._events;
    if (void 0 !== t) {
        var n = t[e];
        if ("function" == typeof n) return 1;
        if (void 0 !== n) return n.length;
    }
    return 0;
}
function T(e, t) {
    for(var n = new Array(t), r = 0; r < t; ++r)n[r] = e[r];
    return n;
}
function z(e, t, n, r) {
    if ("function" == typeof e.on) r.once ? e.once(t, n) : e.on(t, n);
    else {
        if ("function" != typeof e.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
        e.addEventListener(t, function i(o) {
            r.once && e.removeEventListener(t, i), n(o);
        });
    }
}
Object.defineProperty(P, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
        return A;
    },
    set: function(e) {
        if ("number" != typeof e || e < 0 || R(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
        A = e;
    }
}), P.init = function() {
    void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
}, P.prototype.setMaxListeners = function(e) {
    if ("number" != typeof e || e < 0 || R(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
    return this._maxListeners = e, this;
}, P.prototype.getMaxListeners = function() {
    return F(this);
}, P.prototype.emit = function(e) {
    for(var t = [], n = 1; n < arguments.length; n++)t.push(arguments[n]);
    var r = "error" === e, i = this._events;
    if (void 0 !== i) r = r && void 0 === i.error;
    else if (!r) return !1;
    if (r) {
        var o;
        if (t.length > 0 && (o = t[0]), o instanceof Error) throw o;
        var s = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
        throw s.context = o, s;
    }
    var a = i[e];
    if (void 0 === a) return !1;
    if ("function" == typeof a) O(a, this, t);
    else {
        var l = a.length, c = T(a, l);
        for(n = 0; n < l; ++n)O(c[n], this, t);
    }
    return !0;
}, P.prototype.addListener = function(e, t) {
    return D(this, e, t, !1);
}, P.prototype.on = P.prototype.addListener, P.prototype.prependListener = function(e, t) {
    return D(this, e, t, !0);
}, P.prototype.once = function(e, t) {
    return j(t), this.on(e, U(this, e, t)), this;
}, P.prototype.prependOnceListener = function(e, t) {
    return j(t), this.prependListener(e, U(this, e, t)), this;
}, P.prototype.removeListener = function(e, t) {
    var n, r, i, o, s;
    if (j(t), void 0 === (r = this._events)) return this;
    if (void 0 === (n = r[e])) return this;
    if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
    else if ("function" != typeof n) {
        for(i = -1, o = n.length - 1; o >= 0; o--)if (n[o] === t || n[o].listener === t) {
            s = n[o].listener, i = o;
            break;
        }
        if (i < 0) return this;
        0 === i ? n.shift() : function(e, t) {
            for(; t + 1 < e.length; t++)e[t] = e[t + 1];
            e.pop();
        }(n, i), 1 === n.length && (r[e] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", e, s || t);
    }
    return this;
}, P.prototype.off = P.prototype.removeListener, P.prototype.removeAllListeners = function(e) {
    var t, n, r;
    if (void 0 === (n = this._events)) return this;
    if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this;
    if (0 === arguments.length) {
        var i, o = Object.keys(n);
        for(r = 0; r < o.length; ++r)"removeListener" !== (i = o[r]) && this.removeAllListeners(i);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
    }
    if ("function" == typeof (t = n[e])) this.removeListener(e, t);
    else if (void 0 !== t) for(r = t.length - 1; r >= 0; r--)this.removeListener(e, t[r]);
    return this;
}, P.prototype.listeners = function(e) {
    return M(this, e, !0);
}, P.prototype.rawListeners = function(e) {
    return M(this, e, !1);
}, P.listenerCount = function(e, t) {
    return "function" == typeof e.listenerCount ? e.listenerCount(t) : W.call(e, t);
}, P.prototype.listenerCount = W, P.prototype.eventNames = function() {
    return this._eventsCount > 0 ? k(this._events) : [];
}, Object.defineProperty(S, "__esModule", {
    value: !0
});
const q = N.exports;
function H(e, t, n) {
    try {
        Reflect.apply(e, t, n);
    } catch (e) {
        setTimeout(()=>{
            throw e;
        });
    }
}
class V extends q.EventEmitter {
    emit(e, ...t) {
        let n = "error" === e;
        const r = this._events;
        if (void 0 !== r) n = n && void 0 === r.error;
        else if (!n) return !1;
        if (n) {
            let e;
            if (t.length > 0 && ([e] = t), e instanceof Error) throw e;
            const n = new Error("Unhandled error." + (e ? ` (${e.message})` : ""));
            throw n.context = e, n;
        }
        const i = r[e];
        if (void 0 === i) return !1;
        if ("function" == typeof i) H(i, this, t);
        else {
            const e = i.length, n = function(e) {
                const t = e.length, n = new Array(t);
                for(let r = 0; r < t; r += 1)n[r] = e[r];
                return n;
            }(i);
            for(let r = 0; r < e; r += 1)H(n[r], this, t);
        }
        return !0;
    }
}
var G = S.default = V;
class J extends Error {
    constructor(e, t){
        super(e), this.message = t, this.message = `Arcana SDK error: [${e}] ${t}`;
    }
}
const K = new J("user_not_logged_in", "User is not logged in"), B = new J("wallet_not_initialized", "AuthProvider is not initialized. Please run `await auth.init(...)` before calling functions"), Z = new class {
    constructor(e, t){
        this.message = `Arcana SDK warning: [${e}] ${t}`;
    }
    log() {
        console.warn(this.message);
    }
}("duplicate_iframe", "Duplicate iframe detected, please keep a single instance of AuthProvider"), Y = {
    NOTSET: 0,
    DEBUG: 1,
    INFO: 2,
    WARNING: 3,
    ERROR: 4,
    NOLOGS: 5
}, X = {};
let Q = Y.NOLOGS, ee = null;
const te = (e)=>{
    Q = e;
}, ne = (e)=>(X[e] || (X[e] = new re(Q, e)), X[e]);
class re {
    constructor(e, t){
        this.logLevel = e, this.prefix = "[ARCANA_AUTH]", t && (this.prefix += `[${t}]`);
    }
    log(e, t, n = {}) {
        this.internalLog(Y[e], t, n);
    }
    info(e, t = {}) {
        this.internalLog(Y.INFO, e, t);
    }
    debug(e, t = {}) {
        this.internalLog(Y.DEBUG, e, t);
    }
    warn(e, t = {}) {
        this.internalLog(Y.WARNING, e, t);
    }
    error(e, t = {}) {
        var n;
        t instanceof Error && this.internalLog(Y.ERROR, e, `${t.name}: ${t.message}: ${t.stack}`), this.internalLog(Y.ERROR, e, t), n = JSON.stringify({
            message: e,
            params: t
        }), ee && ee(n);
    }
    internalLog(e, t, n) {
        const r = `${this.prefix} - ${this.getLogLevelName(e)} ${this.getTime()} ${t} \n[PARAMS]: ${JSON.stringify(n)}\n          `;
        this.consoleLog(e, r);
    }
    getLogLevelName(e) {
        switch(e){
            case Y.DEBUG:
                return "DEBUG";
            case Y.INFO:
                return "INFO";
            case Y.WARNING:
                return "WARN";
            case Y.ERROR:
                return "ERROR";
            default:
                return "NOTSET";
        }
    }
    getTime() {
        return (new Date).toLocaleTimeString();
    }
    consoleLog(e, t) {
        if (!(e < this.logLevel)) switch(e){
            case Y.DEBUG:
                console.debug(t);
                break;
            case Y.WARNING:
                console.warn(t);
                break;
            case Y.ERROR:
                console.error(t);
                break;
            case Y.INFO:
                console.info(t);
                break;
            default:
                console.log(t);
        }
    }
}
const ie = "data:image/svg+xml,%3Csvg width='151' height='147' viewBox='0 0 151 147' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='0.419035'%3E%3Cpath d='M94.3585 4.39385C94.3585 6.8206 92.3736 8.78798 89.9253 8.78798C87.477 8.78798 85.4922 6.8206 85.4922 4.39385C85.4922 1.96723 87.477 0 89.9253 0C92.3736 0 94.3585 1.96723 94.3585 4.39385Z' fill='%233CA6FA'/%3E%3C/g%3E%3Cg opacity='0.796078'%3E%3Cpath d='M59.4441 15.3287L56.8114 16.8352C56.3347 17.108 55.7253 16.9461 55.4501 16.4737L50.6962 8.31243C50.421 7.84009 50.5844 7.23603 51.0609 6.96337L53.6938 5.45667C54.1703 5.184 54.7797 5.34582 55.055 5.81815L59.8088 13.9795C60.0841 14.452 59.9207 15.0559 59.4441 15.3287Z' fill='%233CA6FA'/%3E%3C/g%3E%3Cg opacity='0.796078'%3E%3Cpath d='M15.0339 32.3637L15.6261 32.5628C16.2975 32.7886 17.0381 32.6722 17.6065 32.2519L18.1077 31.8812C19.5388 30.8226 21.5735 31.8501 21.5507 33.6199L21.5427 34.2397C21.5336 34.9425 21.8739 35.6047 22.4528 36.0106L22.9635 36.3685C24.4215 37.3904 24.0642 39.6257 22.359 40.1512L21.7618 40.3352C21.0846 40.5438 20.5546 41.0694 20.3442 41.7405L20.1584 42.3325C19.6284 44.0226 17.3731 44.3766 16.342 42.9315L15.9807 42.4255C15.5713 41.8517 14.9032 41.5142 14.1942 41.5233L13.5688 41.5311C11.7833 41.5537 10.7467 39.5372 11.8147 38.1186L12.1888 37.6218C12.613 37.0586 12.7302 36.3245 12.5024 35.6589L12.3015 35.0719C11.7281 33.3957 13.3427 31.7954 15.0339 32.3637Z' fill='%233CA6FA'/%3E%3C/g%3E%3Cg opacity='0.796078'%3E%3Cpath d='M11.2466 63.5287L11.9116 66.4689C12.032 67.0012 11.6943 67.5295 11.1572 67.6487L1.87966 69.7101C1.34269 69.8293 0.809791 69.4946 0.689237 68.9623L0.0243071 66.0219C-0.0959554 65.4897 0.241739 64.9615 0.778708 64.8423L10.0564 62.7809C10.5933 62.6617 11.1262 62.9964 11.2466 63.5287Z' fill='%239DE000'/%3E%3C/g%3E%3Cg opacity='0.796078'%3E%3Cpath d='M20.6082 100.625C20.6082 103.052 18.6234 105.019 16.1752 105.019C13.7268 105.019 11.7422 103.052 11.7422 100.625C11.7422 98.1987 13.7268 96.2314 16.1752 96.2314C18.6234 96.2314 20.6082 98.1987 20.6082 100.625Z' fill='%23F23D3D'/%3E%3C/g%3E%3Cg opacity='0.796078'%3E%3Cpath d='M15.0339 122.725L15.6261 122.924C16.2975 123.15 17.0381 123.034 17.6065 122.613L18.1077 122.242C19.5388 121.184 21.5735 122.211 21.5507 123.981L21.5427 124.601C21.5336 125.304 21.8739 125.966 22.4528 126.372L22.9635 126.73C24.4215 127.752 24.0642 129.987 22.359 130.513L21.7618 130.697C21.0846 130.905 20.5546 131.431 20.3442 132.102L20.1584 132.694C19.6284 134.384 17.3731 134.738 16.342 133.293L15.9807 132.787C15.5713 132.213 14.9032 131.876 14.1942 131.885L13.5688 131.893C11.7833 131.915 10.7467 129.899 11.8147 128.48L12.1888 127.983C12.613 127.42 12.7302 126.686 12.5024 126.02L12.3015 125.433C11.7281 123.757 13.3427 122.157 15.0339 122.725Z' fill='%23FAEE3D'/%3E%3C/g%3E%3Cg opacity='0.796078'%3E%3Cpath d='M129.132 28.1704C127.789 26.435 128.205 23.8499 130.054 22.4436C131.903 21.0374 134.53 21.3082 135.873 23.0437C135.876 23.047 135.878 23.0503 135.881 23.0535' stroke='%23F23D3D' stroke-width='1.98137' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cg opacity='0.796078'%3E%3Cpath d='M140.862 52.2221L141.454 52.4212C142.126 52.647 142.866 52.5306 143.435 52.1103L143.936 51.7396C145.367 50.681 147.402 51.7085 147.379 53.4783L147.371 54.0981C147.362 54.8009 147.702 55.4631 148.281 55.869L148.792 56.2269C150.25 57.2488 149.893 59.4841 148.187 60.0096L147.59 60.1936C146.913 60.4022 146.383 60.9278 146.172 61.5989L145.986 62.1909C145.456 63.881 143.201 64.235 142.17 62.7899L141.809 62.2839C141.399 61.7101 140.732 61.3726 140.022 61.3817L139.397 61.3896C137.612 61.4121 136.575 59.3956 137.643 57.9771L138.017 57.4803C138.441 56.917 138.558 56.1829 138.33 55.5173L138.13 54.9303C137.556 53.2541 139.171 51.6538 140.862 52.2221Z' fill='%23FAEE3D'/%3E%3C/g%3E%3Cg opacity='0.796078'%3E%3Cpath d='M145.217 104.171C148.232 104.564 150.367 107.485 149.948 110.64C149.529 113.795 146.703 116.068 143.689 115.674C143.683 115.674 143.678 115.673 143.672 115.672' stroke='%23F23D3D' stroke-width='1.48603' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cg opacity='0.796078'%3E%3Cpath d='M135.718 141.235L133.085 142.742C132.608 143.014 131.999 142.852 131.724 142.38L126.97 134.219C126.694 133.746 126.858 133.142 127.334 132.87L129.967 131.363C130.444 131.09 131.053 131.252 131.328 131.724L136.082 139.886C136.357 140.358 136.194 140.962 135.718 141.235Z' fill='%233CA6FA'/%3E%3C/g%3E%3Cg opacity='0.796078'%3E%3Cpath d='M49.4302 146.001C47.5793 143.61 48.1523 140.048 50.6998 138.111C53.2472 136.174 56.8664 136.547 58.7173 138.938L58.7279 138.951' stroke='%233CA6FA' stroke-width='1.98137' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cpath d='M133.141 69.8273C133.141 98.8525 109.4 122.382 80.1137 122.382C50.8274 122.382 27.0859 98.8525 27.0859 69.8273C27.0859 40.802 50.8274 17.2725 80.1137 17.2725C109.4 17.2725 133.141 40.802 133.141 69.8273Z' fill='%239DE000'/%3E%3Cpath d='M56.6641 69.9175L72.2097 85.3247L103.481 54.332' stroke='white' stroke-width='5.7388' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A", oe = (e)=>40 === se(e).length, se = (e)=>e.startsWith("0x") ? e.substring(2) : e, ae = (e, t = !0)=>{
    const n = e.toString(16);
    return t ? ((e)=>e.startsWith("0x") ? e : `0x${e}`)(n) : se(n);
}, le = ()=>window.location.origin + window.location.pathname;
let ce = Math.floor(4294967295 * Math.random());
function de(e) {
    return String.fromCharCode(parseInt(e.slice(1), 16));
}
function ue(e) {
    var t;
    return t = JSON.stringify(e), window.btoa(encodeURIComponent(t).replace(/%[0-9A-F]{2}/g, de));
}
class he extends Error {
    constructor(e, t, n = ""){
        super(t), this.code = e, this.message = t, this.data = n;
    }
}
class fe extends G {
    constructor(e){
        super(), this.rpcConfig = e, this.connected = !1, this.logger = ne("ArcanaProvider"), this.onResponse = (e, t)=>{
            this.subscriber.emit(`result:${e}:${t.id}`, t);
        }, this.handleEvents = (e, t)=>{
            switch(e){
                case "accountsChanged":
                    this.emit(e, [
                        t
                    ]);
                    break;
                case "chainChanged":
                    this.setChainId(t), this.emit("chainChanged", ae(t.chainId));
                    break;
                case "connect":
                    this.chainId = "object" == typeof t ? t.chainId : "", this.connected = !0, this.emit("connect", t);
                    break;
                case "disconnect":
                    this.iframe.handleDisconnect(), this.connected = !1, this.emit("disconnect", t);
                    break;
                case "message":
                    this.emit("message", t);
            }
        }, this.subscriber = new G;
    }
    isArcana() {
        return !0;
    }
    init(t, n) {
        return e(this, void 0, void 0, function*() {
            this.iframe = t;
            const { communication: e } = yield this.iframe.setConnectionMethods({
                onEvent: this.handleEvents,
                onMethodResponse: (e, t)=>{
                    this.onResponse(e, t);
                },
                getParentUrl: le,
                getAppMode: ()=>{
                    var e;
                    return null === (e = this.iframe) || void 0 === e ? void 0 : e.appMode;
                },
                getAppConfig: this.iframe.getAppConfig,
                getWalletPosition: this.iframe.getWalletPlace,
                getRpcConfig: ()=>this.rpcConfig,
                sendPendingRequestCount: this.iframe.onReceivingPendingRequestCount,
                triggerSocialLogin: n.loginWithSocial,
                triggerPasswordlessLogin: n.loginWithLink,
                getPopupState: ()=>this.iframe.getState(),
                setIframeStyle: this.iframe.setIframeStyle,
                setSessionID: this.iframe.setSessionID,
                getSDKVersion: ()=>"v3"
            });
            this.communication = e;
        });
    }
    isLoggedIn() {
        return e(this, void 0, void 0, function*() {
            try {
                return (yield this.getCommunication("isLoggedIn")).isLoggedIn();
            } catch (e) {
                return this.logger.error("isLoggedIn", e), !1;
            }
        });
    }
    isConnected() {
        return e(this, void 0, void 0, function*() {
            return this.connected;
        });
    }
    isLoginAvailable(t) {
        return e(this, void 0, void 0, function*() {
            const e = yield this.getCommunication("isLoginAvailable"), n = yield e.isLoginAvailable(t);
            return this.logger.info("loginAvailable", {
                [t]: n
            }), n;
        });
    }
    requestUserInfo() {
        return e(this, void 0, void 0, function*() {
            const e = yield this.getCommunication("getUserInfo");
            if (!(yield e.isLoggedIn())) throw K;
            return yield e.getUserInfo();
        });
    }
    getReconnectionUrl() {
        return e(this, void 0, void 0, function*() {
            const e = yield this.getCommunication("getReconnectionUrl");
            return yield e.getReconnectionUrl();
        });
    }
    getPublicKey(t, n) {
        return e(this, void 0, void 0, function*() {
            return (yield this.getCommunication("getPublicKey")).getPublicKey(t, n);
        });
    }
    getAvailableLogins() {
        return e(this, void 0, void 0, function*() {
            const e = yield this.getCommunication("getAvailableLogins");
            return yield e.getAvailableLogins();
        });
    }
    triggerLogout() {
        return e(this, void 0, void 0, function*() {
            const e = yield this.getCommunication("triggerLogout");
            yield e.triggerLogout(!0);
        });
    }
    initPasswordlessLogin(t) {
        return e(this, void 0, void 0, function*() {
            const e = yield this.getCommunication("initPasswordlessLogin");
            return yield e.initPasswordlessLogin(t);
        });
    }
    initSocialLogin(t) {
        return e(this, void 0, void 0, function*() {
            const e = yield this.getCommunication("initSocialLogin");
            return yield e.initSocialLogin(t);
        });
    }
    expandWallet() {
        return e(this, void 0, void 0, function*() {
            const e = yield this.getCommunication("expandWallet");
            return yield e.expandWallet();
        });
    }
    getCommunication(t = "sendRequest") {
        return e(this, void 0, void 0, function*() {
            if (this.communication) {
                const e = yield this.communication.promise;
                if (!e[t]) throw new J("fn_not_available", `The requested fn ${t} is not available in this context`);
                return e;
            }
            throw new J("connection_not_available", "The connection is not available yet");
        });
    }
    request(n) {
        return e(this, void 0, void 0, function*() {
            if (!n || "object" != typeof n || Array.isArray(n)) throw t.ethErrors.rpc.invalidRequest({
                message: "Invalid request arguments",
                data: n
            });
            const { method: r, params: i } = n;
            if (!r) throw t.ethErrors.rpc.invalidRequest({
                message: "Invalid method argument",
                data: n
            });
            const o = {
                method: r,
                params: i,
                jsonrpc: "2.0",
                id: (ce = (ce + 1) % 4294967295, ce)
            };
            return new Promise((t, n)=>{
                this.getCommunication().then((i)=>e(this, void 0, void 0, function*() {
                        this.getResponse(r, o.id).then(t, n), yield i.sendRequest(o);
                    }), n);
            });
        });
    }
    getResponse(e, t) {
        return new Promise((n, r)=>{
            this.subscriber.once(`result:${e}:${t}`, (e)=>e.error ? r(pe(e.error)) : n(e.result));
        });
    }
    setChainId(e) {
        e && "object" == typeof e && "chainId" in e && "number" == typeof e.chainId && (this.chainId = ae(e.chainId));
    }
}
const pe = (e)=>{
    switch(ne("ArcanaProvider").error("getError", e), e){
        case "user_deny":
            return new he(4001, "User rejected the request.");
        case "operation_not_supported":
            return new he(4200, "The requested method is not supported by this provider.");
        case "all_disconnected":
            return new he(4900, "The provider is disconnected from all chains. Login is pending.");
        default:
            return "string" != typeof e ? new he(e.code, e.message, e.data) : t.ethErrors.rpc.internal(e);
    }
};
var ge, _e, me, ve, ye, we, be, xe;
!function(e) {
    e[e.CREATED = 0] = "CREATED", e[e.RUNNING = 1] = "RUNNING", e[e.DONE = 2] = "DONE";
}(ge || (ge = {})), function(e) {
    e.firebase = "firebase";
}(_e || (_e = {})), function(e) {
    e[e.NoUI = 0] = "NoUI", e[e.Widget = 1] = "Widget", e[e.Full = 2] = "Full";
}(me || (me = {})), function(e) {
    e.Call = "call", e.Reply = "reply", e.Syn = "syn", e.SynAck = "synAck", e.Ack = "ack";
}(ve || (ve = {})), function(e) {
    e.Fulfilled = "fulfilled", e.Rejected = "rejected";
}(ye || (ye = {})), function(e) {
    e.ConnectionDestroyed = "ConnectionDestroyed", e.ConnectionTimeout = "ConnectionTimeout", e.NoIframeSrc = "NoIframeSrc";
}(we || (we = {})), function(e) {
    e.DataCloneError = "DataCloneError";
}(be || (be = {})), function(e) {
    e.Message = "message";
}(xe || (xe = {}));
const Ce = {
    "http:": "80",
    "https:": "443"
}, Ee = /^(https?:)?\/\/([^/:]+)?(:(\d+))?/, Le = [
    "file:",
    "data:"
];
const ke = ({ name: e, message: t, stack: n })=>({
        name: e,
        message: t,
        stack: n
    });
let Se = 0;
var Ne = ()=>++Se;
const Ie = (e)=>e ? e.split(".") : [], Oe = (e, t, n)=>{
    const r = Ie(t);
    return r.reduce((e, t, i)=>(void 0 === e[t] && (e[t] = {}), i === r.length - 1 && (e[t] = n), e[t]), e), e;
}, Re = (e, t)=>{
    const n = {};
    return Object.keys(e).forEach((r)=>{
        const i = e[r], o = ((e, t)=>{
            const n = Ie(t || "");
            return n.push(e), ((e)=>e.join("."))(n);
        })(r, t);
        "object" == typeof i && Object.assign(n, Re(i, o)), "function" == typeof i && (n[o] = i);
    }), n;
};
var Pe = (e, t, n, r, i)=>{
    const { localName: o, local: s, remote: a, originForSending: l, originForReceiving: c } = t;
    let d = !1;
    i(`${o}: Connecting call sender`);
    const u = (e)=>(...t)=>{
            let n;
            i(`${o}: Sending ${e}() call`);
            try {
                a.closed && (n = !0);
            } catch (e) {
                n = !0;
            }
            if (n && r(), d) {
                const t = new Error(`Unable to send ${e}() call due to destroyed connection`);
                throw t.code = we.ConnectionDestroyed, t;
            }
            return new Promise((n, r)=>{
                const d = Ne(), u = (t)=>{
                    if (t.source !== a || t.data.penpal !== ve.Reply || t.data.id !== d) return;
                    if ("*" !== c && t.origin !== c) return void i(`${o} received message from origin ${t.origin} which did not match expected origin ${c}`);
                    const l = t.data;
                    i(`${o}: Received ${e}() reply`), s.removeEventListener(xe.Message, u);
                    let h = l.returnValue;
                    l.returnValueIsError && (h = ((e)=>{
                        const t = new Error;
                        return Object.keys(e).forEach((n)=>t[n] = e[n]), t;
                    })(h)), (l.resolution === ye.Fulfilled ? n : r)(h);
                };
                s.addEventListener(xe.Message, u);
                const h = {
                    penpal: ve.Call,
                    id: d,
                    methodName: e,
                    args: t
                };
                a.postMessage(h, l);
            });
        }, h = n.reduce((e, t)=>(e[t] = u(t), e), {});
    return Object.assign(e, ((e)=>{
        const t = {};
        for(const n in e)Oe(t, n, e[n]);
        return t;
    })(h)), ()=>{
        d = !0;
    };
}, Ae = (e, t, n, r, i)=>{
    const { destroy: o, onDestroy: s } = r;
    let a, l;
    const c = {};
    return (r)=>{
        if ("*" !== t && r.origin !== t) return void i(`Parent: Handshake - Received ACK message from origin ${r.origin} which did not match expected origin ${t}`);
        i("Parent: Handshake - Received ACK");
        const d = {
            localName: "Parent",
            local: window,
            remote: r.source,
            originForSending: n,
            originForReceiving: t
        };
        a && a(), a = ((e, t, n)=>{
            const { localName: r, local: i, remote: o, originForSending: s, originForReceiving: a } = e;
            let l = !1;
            const c = (e)=>{
                if (e.source !== o || e.data.penpal !== ve.Call) return;
                if ("*" !== a && e.origin !== a) return void n(`${r} received message from origin ${e.origin} which did not match expected origin ${a}`);
                const i = e.data, { methodName: c, args: d, id: u } = i;
                n(`${r}: Received ${c}() call`);
                const h = (e)=>(t)=>{
                        if (n(`${r}: Sending ${c}() reply`), l) return void n(`${r}: Unable to send ${c}() reply due to destroyed connection`);
                        const i = {
                            penpal: ve.Reply,
                            id: u,
                            resolution: e,
                            returnValue: t
                        };
                        e === ye.Rejected && t instanceof Error && (i.returnValue = ke(t), i.returnValueIsError = !0);
                        try {
                            o.postMessage(i, s);
                        } catch (e) {
                            if (e.name === be.DataCloneError) {
                                const t = {
                                    penpal: ve.Reply,
                                    id: u,
                                    resolution: ye.Rejected,
                                    returnValue: ke(e),
                                    returnValueIsError: !0
                                };
                                o.postMessage(t, s);
                            }
                            throw e;
                        }
                    };
                new Promise((e)=>e(t[c].apply(t, d))).then(h(ye.Fulfilled), h(ye.Rejected));
            };
            return i.addEventListener(xe.Message, c), ()=>{
                l = !0, i.removeEventListener(xe.Message, c);
            };
        })(d, e, i), s(a), l && l.forEach((e)=>{
            delete c[e];
        }), l = r.data.methodNames;
        const u = Pe(c, d, l, o, i);
        return s(u), c;
    };
};
var je = (e)=>{
    let { iframe: t, methods: n = {}, childOrigin: r, timeout: i, debug: o = !1 } = e;
    const s = ((e)=>(...t)=>{
            e && console.log("[Penpal]", ...t);
        })(o), a = ((e, t)=>{
        const n = [];
        let r = !1;
        return {
            destroy (i) {
                r || (r = !0, t(`${e}: Destroying connection`), n.forEach((e)=>{
                    e(i);
                }));
            },
            onDestroy (e) {
                r ? e() : n.push(e);
            }
        };
    })("Parent", s), { onDestroy: l, destroy: c } = a;
    r || (((e)=>{
        if (!e.src && !e.srcdoc) {
            const e = new Error("Iframe must have src or srcdoc property defined.");
            throw e.code = we.NoIframeSrc, e;
        }
    })(t), r = ((e)=>{
        if (e && Le.find((t)=>e.startsWith(t))) return "null";
        const t = document.location, n = Ee.exec(e);
        let r, i, o;
        return n ? (r = n[1] ? n[1] : t.protocol, i = n[2], o = n[4]) : (r = t.protocol, i = t.hostname, o = t.port), `${r}//${i}${o && o !== Ce[r] ? `:${o}` : ""}`;
    })(t.src));
    const d = "null" === r ? "*" : r, u = Re(n), h = ((e, t, n, r)=>(i)=>{
            if (!i.source) return;
            if ("*" !== n && i.origin !== n) return void e(`Parent: Handshake - Received SYN message from origin ${i.origin} which did not match expected origin ${n}`);
            e("Parent: Handshake - Received SYN, responding with SYN-ACK");
            const o = {
                penpal: ve.SynAck,
                methodNames: Object.keys(t)
            };
            i.source.postMessage(o, r);
        })(s, u, r, d), f = Ae(u, r, d, a, s), p = new Promise((e, n)=>{
        const r = ((e, t)=>{
            let n;
            return void 0 !== e && (n = window.setTimeout(()=>{
                const n = new Error(`Connection timed out after ${e}ms`);
                n.code = we.ConnectionTimeout, t(n);
            }, e)), ()=>{
                clearTimeout(n);
            };
        })(i, c), o = (n)=>{
            if (n.source === t.contentWindow && n.data) {
                if (n.data.penpal !== ve.Syn) {
                    if (n.data.penpal !== ve.Ack) ;
                    else {
                        const t = f(n);
                        t && (r(), e(t));
                    }
                } else h(n);
            }
        };
        window.addEventListener(xe.Message, o), s("Parent: Awaiting handshake"), ((e, t)=>{
            const { destroy: n, onDestroy: r } = t, i = setInterval(()=>{
                e.isConnected || (clearInterval(i), n());
            }, 6e4);
            r(()=>{
                clearInterval(i);
            });
        })(t, a), l((e)=>{
            window.removeEventListener(xe.Message, o), e && n(e);
        });
    });
    return {
        promise: p,
        destroy () {
            c();
        }
    };
};
const Fe = {
    border: "none",
    position: "fixed",
    height: 0,
    width: 0,
    right: 0,
    bottom: 0,
    zIndex: 2147483648
};
class De {
    constructor(e){
        this.params = e, this.getSessionID = ()=>{
            const e = window.localStorage.getItem(`arcana-auth-${this.getIframeUrl()}-sessionID`);
            return e ? JSON.parse(e) : null;
        }, this.setSessionID = (e, t)=>{
            window.localStorage.setItem(`arcana-auth-${this.getIframeUrl()}-sessionID`, JSON.stringify({
                id: e,
                expiry: t
            }));
        }, this.clearSessionID = ()=>{
            window.localStorage.removeItem(`arcana-auth-${this.getIframeUrl()}-sessionID`);
        }, this.setIframeStyle = (e)=>{
            var t;
            if (1 == (null === (t = this.params.standaloneMode) || void 0 === t ? void 0 : t.mode)) this.widgetIframe.style.height = e.height ? e.height : "80vh", this.widgetIframe.style.maxWidth = "100%", this.widgetIframe.style.width = "430px", this.widgetIframe.style.bottom = "0", this.widgetIframe.style.right = "0";
            else for(const t in e)this.widgetIframe.style[t] = e[t];
        }, this.getWalletPlace = ()=>this.params.position, this.getAppConfig = ()=>this.params.appConfig, this.checkDuplicateIframe(), this.checkSecureOrigin();
    }
    setConnectionMethods(t) {
        return e(this, void 0, void 0, function*() {
            try {
                return this.iframeCommunication || (this.iframeCommunication = je({
                    iframe: this.widgetIframe,
                    methods: Object.assign(Object.assign({}, t), {
                        uiEvent: (e, t)=>{
                            var n;
                            (null === (n = this.params.standaloneMode) || void 0 === n ? void 0 : n.handler) && this.params.standaloneMode.handler(e, t);
                        }
                    }),
                    childOrigin: this.params.iframeUrl
                }), yield this.iframeCommunication.promise), {
                    iframe: this.widgetIframe,
                    communication: this.iframeCommunication
                };
            } catch (e) {
                throw new Error("Could not set connection methods");
            }
        });
    }
    triggerBearerAuthentication(t, n) {
        return e(this, void 0, void 0, function*() {
            return (yield this.iframeCommunication.promise).triggerBearerLogin(t, n);
        });
    }
    setWalletType(e) {
        this.appMode = null != e ? e : me.Full, this.initWalletUI();
    }
    getState() {
        return this.state;
    }
    handleDisconnect() {
        this.widgetIframe.src = this.getIframeUrl(), this.clearSessionID();
    }
    onReceivingPendingRequestCount(e) {
        const t = document.getElementById("req-count-badge");
        t && (e > 0 ? (t.style.display = "flex", t.textContent = `${e}`) : t.style.display = "none");
    }
    getIframeUrl() {
        var e, t;
        const n = ue({
            standaloneMode: (null === (e = this.params.standaloneMode) || void 0 === e ? void 0 : e.mode) ? null === (t = this.params.standaloneMode) || void 0 === t ? void 0 : t.mode : 0
        }), r = new URL(`/${this.params.appId}/v2/login`, this.params.iframeUrl);
        return r.hash = n, r.toString();
    }
    createWidgetIframe() {
        return ((e, t, ...n)=>{
            const r = document.createElement(e);
            t && (Object.assign(r, t), t.style && Object.assign(r.style, t.style));
            for (const e of n)"string" != typeof e ? r.appendChild(e) : r.appendChild(document.createTextNode(e));
            return r;
        })("iframe", {
            style: Fe,
            src: this.getIframeUrl(),
            allow: "clipboard-write",
            className: "xar-wallet"
        });
    }
    checkDuplicateIframe() {
        [].slice.call(document.querySelectorAll(".xar-wallet")).length > 0 && Z.log();
    }
    initWalletUI() {
        this.widgetIframe = this.createWidgetIframe(), document.body.appendChild(this.widgetIframe);
    }
    checkSecureOrigin() {
        const e = "localhost" === location.hostname || "127.0.0.1" === location.hostname, t = "https:" === location.protocol;
        if (!(e || t)) throw new Error("Insecure origin");
    }
}
const $e = {
    authUrl: "https://verify.dev.arcana.network",
    gatewayUrl: "https://gateway-dev.arcana.network",
    walletUrl: "https://wallet.dev.arcana.network"
}, Ue = {
    authUrl: "https://verify.beta.arcana.network",
    gatewayUrl: "https://gateway001-testnet.arcana.network",
    walletUrl: "https://wallet.beta.arcana.network"
}, Me = {
    authUrl: "https://auth.arcana.network",
    gatewayUrl: "https://gateway.arcana.network",
    walletUrl: "https://wallet.arcana.network"
};
function We(e) {
    return We = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, We(e);
}
function Te(e) {
    if (!("string" == typeof e || e instanceof String)) {
        var t = We(e);
        throw null === e ? t = "null" : "object" === t && (t = e.constructor.name), new TypeError("Expected a string but received a ".concat(t));
    }
}
function ze(e) {
    return ze = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, ze(e);
}
function qe(e, t) {
    var n, r;
    Te(e), "object" === ze(t) ? (n = t.min || 0, r = t.max) : (n = arguments[1], r = arguments[2]);
    var i = encodeURI(e).split(/%..|./).length - 1;
    return i >= n && (void 0 === r || i <= r);
}
function He() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    for(var n in t)void 0 === e[n] && (e[n] = t[n]);
    return e;
}
var Ve = {
    require_tld: !0,
    allow_underscores: !1,
    allow_trailing_dot: !1,
    allow_numeric_tld: !1,
    allow_wildcard: !1,
    ignore_max_length: !1
};
var Ge = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])", Je = "(".concat(Ge, "[.]){3}").concat(Ge), Ke = new RegExp("^".concat(Je, "$")), Be = "(?:[0-9a-fA-F]{1,4})", Ze = new RegExp("^(" + "(?:".concat(Be, ":){7}(?:").concat(Be, "|:)|") + "(?:".concat(Be, ":){6}(?:").concat(Je, "|:").concat(Be, "|:)|") + "(?:".concat(Be, ":){5}(?::").concat(Je, "|(:").concat(Be, "){1,2}|:)|") + "(?:".concat(Be, ":){4}(?:(:").concat(Be, "){0,1}:").concat(Je, "|(:").concat(Be, "){1,3}|:)|") + "(?:".concat(Be, ":){3}(?:(:").concat(Be, "){0,2}:").concat(Je, "|(:").concat(Be, "){1,4}|:)|") + "(?:".concat(Be, ":){2}(?:(:").concat(Be, "){0,3}:").concat(Je, "|(:").concat(Be, "){1,5}|:)|") + "(?:".concat(Be, ":){1}(?:(:").concat(Be, "){0,4}:").concat(Je, "|(:").concat(Be, "){1,6}|:)|") + "(?::((?::".concat(Be, "){0,5}:").concat(Je, "|(?::").concat(Be, "){1,7}|:))") + ")(%[0-9a-zA-Z-.:]{1,})?$");
function Ye(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    return Te(e), (t = String(t)) ? "4" === t ? Ke.test(e) : "6" === t && Ze.test(e) : Ye(e, 4) || Ye(e, 6);
}
var Xe = {
    allow_display_name: !1,
    allow_underscores: !1,
    require_display_name: !1,
    allow_utf8_local_part: !0,
    require_tld: !0,
    blacklisted_chars: "",
    ignore_max_length: !1,
    host_blacklist: [],
    host_whitelist: []
}, Qe = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i, et = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i, tt = /^[a-z\d]+$/, nt = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i, rt = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i, it = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
function ot(e, t) {
    if (Te(e), (t = He(t, Xe)).require_display_name || t.allow_display_name) {
        var n = e.match(Qe);
        if (n) {
            var r = n[1];
            if (e = e.replace(r, "").replace(/(^<|>$)/g, ""), r.endsWith(" ") && (r = r.slice(0, -1)), !function(e) {
                var t = e.replace(/^"(.+)"$/, "$1");
                if (!t.trim()) return !1;
                if (/[\.";<>]/.test(t)) {
                    if (t === e) return !1;
                    if (t.split('"').length !== t.split('\\"').length) return !1;
                }
                return !0;
            }(r)) return !1;
        } else if (t.require_display_name) return !1;
    }
    if (!t.ignore_max_length && e.length > 254) return !1;
    var i = e.split("@"), o = i.pop(), s = o.toLowerCase();
    if (t.host_blacklist.includes(s)) return !1;
    if (t.host_whitelist.length > 0 && !t.host_whitelist.includes(s)) return !1;
    var a = i.join("@");
    if (t.domain_specific_validation && ("gmail.com" === s || "googlemail.com" === s)) {
        var l = (a = a.toLowerCase()).split("+")[0];
        if (!qe(l.replace(/\./g, ""), {
            min: 6,
            max: 30
        })) return !1;
        for(var c = l.split("."), d = 0; d < c.length; d++)if (!tt.test(c[d])) return !1;
    }
    if (!(!1 !== t.ignore_max_length || qe(a, {
        max: 64
    }) && qe(o, {
        max: 254
    }))) return !1;
    if (!function(e, t) {
        Te(e), (t = He(t, Ve)).allow_trailing_dot && "." === e[e.length - 1] && (e = e.substring(0, e.length - 1)), !0 === t.allow_wildcard && 0 === e.indexOf("*.") && (e = e.substring(2));
        var n = e.split("."), r = n[n.length - 1];
        if (t.require_tld) {
            if (n.length < 2) return !1;
            if (!t.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(r)) return !1;
            if (/\s/.test(r)) return !1;
        }
        return !(!t.allow_numeric_tld && /^\d+$/.test(r)) && n.every(function(e) {
            return !(e.length > 63 && !t.ignore_max_length || !/^[a-z_\u00a1-\uffff0-9-]+$/i.test(e) || /[\uff01-\uff5e]/.test(e) || /^-|-$/.test(e) || !t.allow_underscores && /_/.test(e));
        });
    }(o, {
        require_tld: t.require_tld,
        ignore_max_length: t.ignore_max_length,
        allow_underscores: t.allow_underscores
    })) {
        if (!t.allow_ip_domain) return !1;
        if (!Ye(o)) {
            if (!o.startsWith("[") || !o.endsWith("]")) return !1;
            var u = o.slice(1, -1);
            if (0 === u.length || !Ye(u)) return !1;
        }
    }
    if ('"' === a[0]) return a = a.slice(1, a.length - 1), t.allow_utf8_local_part ? it.test(a) : nt.test(a);
    for(var h = t.allow_utf8_local_part ? rt : et, f = a.split("."), p = 0; p < f.length; p++)if (!h.test(f[p])) return !1;
    return !t.blacklisted_chars || -1 === a.search(new RegExp("[".concat(t.blacklisted_chars, "]+"), "g"));
}
class st {
    constructor(e){
        this.url = e;
    }
    open() {
        const e = lt();
        return this.window = window.open(this.url, "_blank", e), this.getWindowResponse();
    }
    getWindowResponse() {
        return new Promise((t, n)=>{
            let r = !1;
            const i = window.setInterval(()=>{
                var e;
                !r && (null === (e = this.window) || void 0 === e ? void 0 : e.closed) && n("User closed the popup");
            }, 500), o = (s)=>e(this, void 0, void 0, function*() {
                    var e, a, l;
                    if (!(null === (e = null == s ? void 0 : s.data) || void 0 === e ? void 0 : e.status)) return;
                    const c = s.data;
                    return r = !0, this.clear(o, i), "success" === c.status ? (null === (a = this.window) || void 0 === a || a.close(), t("success")) : "error" == c.status ? (null === (l = this.window) || void 0 === l || l.close(), n(c.error)) : "done" === c.status ? t("done") : void console.log("Unexpected event");
                });
            window.addEventListener("message", o, !1);
        });
    }
    clear(e, t) {
        window.removeEventListener("message", e), window.clearInterval(t);
    }
}
const at = {
    titlebar: 0,
    toolbar: 0,
    status: 0,
    menubar: 0,
    resizable: 0,
    height: 1200,
    width: 700,
    popup: 1
}, lt = ()=>{
    const e = [];
    for(const t in at)e.push(`${t}=${at[t]}`);
    return e.join(",");
};
var ct, dt, ut, ht, ft, pt = {}, gt = [], _t = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function mt(e, t) {
    for(var n in t)e[n] = t[n];
    return e;
}
function vt(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
}
function yt(e, t, n, r, i) {
    var o = {
        type: e,
        props: t,
        key: n,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == i ? ++ut : i
    };
    return null == i && null != dt.vnode && dt.vnode(o), o;
}
function wt(e) {
    return e.children;
}
function bt(e, t) {
    this.props = e, this.context = t;
}
function xt(e, t) {
    if (null == t) return e.__ ? xt(e.__, e.__.__k.indexOf(e) + 1) : null;
    for(var n; t < e.__k.length; t++)if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
    return "function" == typeof e.type ? xt(e) : null;
}
function Ct(e) {
    var t, n;
    if (null != (e = e.__) && null != e.__c) {
        for(e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)if (null != (n = e.__k[t]) && null != n.__e) {
            e.__e = e.__c.base = n.__e;
            break;
        }
        return Ct(e);
    }
}
function Et(e) {
    (!e.__d && (e.__d = !0) && ht.push(e) && !Lt.__r++ || ft !== dt.debounceRendering) && ((ft = dt.debounceRendering) || setTimeout)(Lt);
}
function Lt() {
    for(var e; Lt.__r = ht.length;)e = ht.sort(function(e, t) {
        return e.__v.__b - t.__v.__b;
    }), ht = [], e.some(function(e) {
        var t, n, r, i, o, s;
        e.__d && (o = (i = (t = e).__v).__e, (s = t.__P) && (n = [], (r = mt({}, i)).__v = i.__v + 1, At(s, i, r, t.__n, void 0 !== s.ownerSVGElement, null != i.__h ? [
            o
        ] : null, n, null == o ? xt(i) : o, i.__h), jt(n, i), i.__e != o && Ct(i)));
    });
}
function kt(e, t, n, r, i, o, s, a, l, c) {
    var d, u, h, f, p, g, _, m = r && r.__k || gt, v = m.length;
    for(n.__k = [], d = 0; d < t.length; d++)if (null != (f = n.__k[d] = null == (f = t[d]) || "boolean" == typeof f ? null : "string" == typeof f || "number" == typeof f || "bigint" == typeof f ? yt(null, f, null, null, f) : Array.isArray(f) ? yt(wt, {
        children: f
    }, null, null, null) : f.__b > 0 ? yt(f.type, f.props, f.key, f.ref ? f.ref : null, f.__v) : f)) {
        if (f.__ = n, f.__b = n.__b + 1, null === (h = m[d]) || h && f.key == h.key && f.type === h.type) m[d] = void 0;
        else for(u = 0; u < v; u++){
            if ((h = m[u]) && f.key == h.key && f.type === h.type) {
                m[u] = void 0;
                break;
            }
            h = null;
        }
        At(e, f, h = h || pt, i, o, s, a, l, c), p = f.__e, (u = f.ref) && h.ref != u && (_ || (_ = []), h.ref && _.push(h.ref, null, f), _.push(u, f.__c || p, f)), null != p ? (null == g && (g = p), "function" == typeof f.type && f.__k === h.__k ? f.__d = l = St(f, l, e) : l = Nt(e, f, h, m, p, l), "function" == typeof n.type && (n.__d = l)) : l && h.__e == l && l.parentNode != e && (l = xt(h));
    }
    for(n.__e = g, d = v; d--;)null != m[d] && $t(m[d], m[d]);
    if (_) for(d = 0; d < _.length; d++)Dt(_[d], _[++d], _[++d]);
}
function St(e, t, n) {
    for(var r, i = e.__k, o = 0; i && o < i.length; o++)(r = i[o]) && (r.__ = e, t = "function" == typeof r.type ? St(r, t, n) : Nt(n, r, r, i, r.__e, t));
    return t;
}
function Nt(e, t, n, r, i, o) {
    var s, a, l;
    if (void 0 !== t.__d) s = t.__d, t.__d = void 0;
    else if (null == n || i != o || null == i.parentNode) e: if (null == o || o.parentNode !== e) e.appendChild(i), s = null;
    else {
        for(a = o, l = 0; (a = a.nextSibling) && l < r.length; l += 2)if (a == i) break e;
        e.insertBefore(i, o), s = o;
    }
    return void 0 !== s ? s : i.nextSibling;
}
function It(e, t, n) {
    "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || _t.test(t) ? n : n + "px";
}
function Ot(e, t, n, r, i) {
    var o;
    e: if ("style" === t) {
        if ("string" == typeof n) e.style.cssText = n;
        else {
            if ("string" == typeof r && (e.style.cssText = r = ""), r) for(t in r)n && t in n || It(e.style, t, "");
            if (n) for(t in n)r && n[t] === r[t] || It(e.style, t, n[t]);
        }
    } else if ("o" === t[0] && "n" === t[1]) o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Pt : Rt, o) : e.removeEventListener(t, o ? Pt : Rt, o);
    else if ("dangerouslySetInnerHTML" !== t) {
        if (i) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e) try {
            e[t] = null == n ? "" : n;
            break e;
        } catch (e) {}
        "function" == typeof n || (null == n || !1 === n && -1 == t.indexOf("-") ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function Rt(e) {
    this.l[e.type + !1](dt.event ? dt.event(e) : e);
}
function Pt(e) {
    this.l[e.type + !0](dt.event ? dt.event(e) : e);
}
function At(e, t, n, r, i, o, s, a, l) {
    var c, d, u, h, f, p, g, _, m, v, y, w, b, x = t.type;
    if (void 0 !== t.constructor) return null;
    null != n.__h && (l = n.__h, a = t.__e = n.__e, t.__h = null, o = [
        a
    ]), (c = dt.__b) && c(t);
    try {
        e: if ("function" == typeof x) {
            _ = t.props, m = (c = x.contextType) && r[c.__c], v = c ? m ? m.props.value : c.__ : r, n.__c ? g = (d = t.__c = n.__c).__ = d.__E : ("prototype" in x && x.prototype.render ? t.__c = d = new x(_, v) : (t.__c = d = new bt(_, v), d.constructor = x, d.render = Ut), m && m.sub(d), d.props = _, d.state || (d.state = {}), d.context = v, d.__n = r, u = d.__d = !0, d.__h = [], d._sb = []), null == d.__s && (d.__s = d.state), null != x.getDerivedStateFromProps && (d.__s == d.state && (d.__s = mt({}, d.__s)), mt(d.__s, x.getDerivedStateFromProps(_, d.__s))), h = d.props, f = d.state;
            for(c = 0; c < d._sb.length; c++)d.__h.push(d._sb[c]), d._sb = [];
            if (u) null == x.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(), null != d.componentDidMount && d.__h.push(d.componentDidMount);
            else {
                if (null == x.getDerivedStateFromProps && _ !== h && null != d.componentWillReceiveProps && d.componentWillReceiveProps(_, v), !d.__e && null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(_, d.__s, v) || t.__v === n.__v) {
                    d.props = _, d.state = d.__s, t.__v !== n.__v && (d.__d = !1), d.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(e) {
                        e && (e.__ = t);
                    }), d.__h.length && s.push(d);
                    break e;
                }
                null != d.componentWillUpdate && d.componentWillUpdate(_, d.__s, v), null != d.componentDidUpdate && d.__h.push(function() {
                    d.componentDidUpdate(h, f, p);
                });
            }
            if (d.context = v, d.props = _, d.__v = t, d.__P = e, y = dt.__r, w = 0, "prototype" in x && x.prototype.render) d.state = d.__s, d.__d = !1, y && y(t), c = d.render(d.props, d.state, d.context);
            else do d.__d = !1, y && y(t), c = d.render(d.props, d.state, d.context), d.state = d.__s;
            while (d.__d && ++w < 25);
            d.state = d.__s, null != d.getChildContext && (r = mt(mt({}, r), d.getChildContext())), u || null == d.getSnapshotBeforeUpdate || (p = d.getSnapshotBeforeUpdate(h, f)), b = null != c && c.type === wt && null == c.key ? c.props.children : c, kt(e, Array.isArray(b) ? b : [
                b
            ], t, n, r, i, o, s, a, l), d.base = t.__e, t.__h = null, d.__h.length && s.push(d), g && (d.__E = d.__ = null), d.__e = !1;
        } else null == o && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Ft(n.__e, t, n, r, i, o, s, l);
        (c = dt.diffed) && c(t);
    } catch (e) {
        t.__v = null, (l || null != o) && (t.__e = a, t.__h = !!l, o[o.indexOf(a)] = null), dt.__e(e, t, n);
    }
}
function jt(e, t) {
    dt.__c && dt.__c(t, e), e.some(function(t) {
        try {
            e = t.__h, t.__h = [], e.some(function(e) {
                e.call(t);
            });
        } catch (e) {
            dt.__e(e, t.__v);
        }
    });
}
function Ft(e, t, n, r, i, o, s, a) {
    var l, c, d, u = n.props, h = t.props, f = t.type, p = 0;
    if ("svg" === f && (i = !0), null != o) {
        for(; p < o.length; p++)if ((l = o[p]) && "setAttribute" in l == !!f && (f ? l.localName === f : 3 === l.nodeType)) {
            e = l, o[p] = null;
            break;
        }
    }
    if (null == e) {
        if (null === f) return document.createTextNode(h);
        e = i ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, h.is && h), o = null, a = !1;
    }
    if (null === f) u === h || a && e.data === h || (e.data = h);
    else {
        if (o = o && ct.call(e.childNodes), c = (u = n.props || pt).dangerouslySetInnerHTML, d = h.dangerouslySetInnerHTML, !a) {
            if (null != o) for(u = {}, p = 0; p < e.attributes.length; p++)u[e.attributes[p].name] = e.attributes[p].value;
            (d || c) && (d && (c && d.__html == c.__html || d.__html === e.innerHTML) || (e.innerHTML = d && d.__html || ""));
        }
        if (function(e, t, n, r, i) {
            var o;
            for(o in n)"children" === o || "key" === o || o in t || Ot(e, o, null, n[o], r);
            for(o in t)i && "function" != typeof t[o] || "children" === o || "key" === o || "value" === o || "checked" === o || n[o] === t[o] || Ot(e, o, t[o], n[o], r);
        }(e, h, u, i, a), d) t.__k = [];
        else if (p = t.props.children, kt(e, Array.isArray(p) ? p : [
            p
        ], t, n, r, i && "foreignObject" !== f, o, s, o ? o[0] : n.__k && xt(n, 0), a), null != o) for(p = o.length; p--;)null != o[p] && vt(o[p]);
        a || ("value" in h && void 0 !== (p = h.value) && (p !== e.value || "progress" === f && !p || "option" === f && p !== u.value) && Ot(e, "value", p, u.value, !1), "checked" in h && void 0 !== (p = h.checked) && p !== e.checked && Ot(e, "checked", p, u.checked, !1));
    }
    return e;
}
function Dt(e, t, n) {
    try {
        "function" == typeof e ? e(t) : e.current = t;
    } catch (e) {
        dt.__e(e, n);
    }
}
function $t(e, t, n) {
    var r, i;
    if (dt.unmount && dt.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Dt(r, null, t)), null != (r = e.__c)) {
        if (r.componentWillUnmount) try {
            r.componentWillUnmount();
        } catch (e) {
            dt.__e(e, t);
        }
        r.base = r.__P = null, e.__c = void 0;
    }
    if (r = e.__k) for(i = 0; i < r.length; i++)r[i] && $t(r[i], t, n || "function" != typeof e.type);
    n || null == e.__e || vt(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Ut(e, t, n) {
    return this.constructor(e, n);
}
function Mt(e, t, n) {
    var r, i, o;
    dt.__ && dt.__(e, t), i = (r = "function" == typeof n) ? null : n && n.__k || t.__k, o = [], At(t, e = (!r && n || t).__k = function(e, t, n) {
        var r, i, o, s = {};
        for(o in t)"key" == o ? r = t[o] : "ref" == o ? i = t[o] : s[o] = t[o];
        if (arguments.length > 2 && (s.children = arguments.length > 3 ? ct.call(arguments, 2) : n), "function" == typeof e && null != e.defaultProps) for(o in e.defaultProps)void 0 === s[o] && (s[o] = e.defaultProps[o]);
        return yt(e, s, r, i, null);
    }(wt, null, [
        e
    ]), i || pt, pt, void 0 !== t.ownerSVGElement, !r && n ? [
        n
    ] : i ? null : t.firstChild ? ct.call(t.childNodes) : null, o, !r && n ? n : i ? i.__e : t.firstChild, r), jt(o, e);
}
ct = gt.slice, dt = {
    __e: function(e, t, n, r) {
        for(var i, o, s; t = t.__;)if ((i = t.__c) && !i.__) try {
            if ((o = i.constructor) && null != o.getDerivedStateFromError && (i.setState(o.getDerivedStateFromError(e)), s = i.__d), null != i.componentDidCatch && (i.componentDidCatch(e, r || {}), s = i.__d), s) return i.__E = i;
        } catch (t) {
            e = t;
        }
        throw e;
    }
}, ut = 0, bt.prototype.setState = function(e, t) {
    var n;
    n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = mt({}, this.state), "function" == typeof e && (e = e(mt({}, n), this.props)), e && mt(n, e), null != e && this.__v && (t && this._sb.push(t), Et(this));
}, bt.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), Et(this));
}, bt.prototype.render = wt, ht = [], Lt.__r = 0;
var Wt = 0;
function Tt(e, t, n, r, i) {
    var o, s, a = {};
    for(s in t)"ref" == s ? o = t[s] : a[s] = t[s];
    var l = {
        type: e,
        props: a,
        key: n,
        ref: o,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: --Wt,
        __source: i,
        __self: r
    };
    if ("function" == typeof e && (o = e.defaultProps)) for(s in o)void 0 === a[s] && (a[s] = o[s]);
    return dt.vnode && dt.vnode(l), l;
}
const zt = "https://auth-icons.s3.ap-south-1.amazonaws.com", qt = {
    google: `${zt}/google.png`,
    twitter: `${zt}/twitter.png`,
    github: `${zt}/github-light.png`,
    github_light: `${zt}/github.png`,
    twitch: `${zt}/twitch.png`,
    discord: `${zt}/discord.png`,
    aws: `${zt}/aws.png`,
    aws_light: `${zt}/aws_light.png`,
    steam: `${zt}/steam.png`
};
const Ht = {
    light: `${zt}/secured-by-arcana-light.svg`,
    dark: `${zt}/secured-by-arcana-dark.svg`
};
var Vt, Gt, Jt, Kt, Bt = 0, Zt = [], Yt = [], Xt = dt.__b, Qt = dt.__r, en = dt.diffed, tn = dt.__c, nn = dt.unmount;
function rn(e, t) {
    dt.__h && dt.__h(Gt, e, Bt || t), Bt = 0;
    var n = Gt.__H || (Gt.__H = {
        __: [],
        __h: []
    });
    return e >= n.__.length && n.__.push({
        __V: Yt
    }), n.__[e];
}
function on(e) {
    return Bt = 1, sn(hn, e);
}
function sn(e, t, n) {
    var r = rn(Vt++, 2);
    if (r.t = e, !r.__c && (r.__ = [
        n ? n(t) : hn(void 0, t),
        function(e) {
            var t = r.__N ? r.__N[0] : r.__[0], n = r.t(t, e);
            t !== n && (r.__N = [
                n,
                r.__[1]
            ], r.__c.setState({}));
        }
    ], r.__c = Gt, !Gt.u)) {
        Gt.u = !0;
        var i = Gt.shouldComponentUpdate;
        Gt.shouldComponentUpdate = function(e, t, n) {
            if (!r.__c.__H) return !0;
            var o = r.__c.__H.__.filter(function(e) {
                return e.__c;
            });
            if (o.every(function(e) {
                return !e.__N;
            })) return !i || i.call(this, e, t, n);
            var s = !1;
            return o.forEach(function(e) {
                if (e.__N) {
                    var t = e.__[0];
                    e.__ = e.__N, e.__N = void 0, t !== e.__[0] && (s = !0);
                }
            }), !(!s && r.__c.props === e) && (!i || i.call(this, e, t, n));
        };
    }
    return r.__N || r.__;
}
function an() {
    for(var e; e = Zt.shift();)if (e.__P && e.__H) try {
        e.__H.__h.forEach(dn), e.__H.__h.forEach(un), e.__H.__h = [];
    } catch (t) {
        e.__H.__h = [], dt.__e(t, e.__v);
    }
}
dt.__b = function(e) {
    "function" != typeof e.type || e.__m || e.type === wt ? e.__m || (e.__m = e.__ && e.__.__m ? e.__.__m : "") : e.__m = (e.__ && e.__.__m ? e.__.__m : "") + (e.__ && e.__.__k ? e.__.__k.indexOf(e) : 0), Gt = null, Xt && Xt(e);
}, dt.__r = function(e) {
    Qt && Qt(e), Vt = 0;
    var t = (Gt = e.__c).__H;
    t && (Jt === Gt ? (t.__h = [], Gt.__h = [], t.__.forEach(function(e) {
        e.__N && (e.__ = e.__N), e.__V = Yt, e.__N = e.i = void 0;
    })) : (t.__h.forEach(dn), t.__h.forEach(un), t.__h = [])), Jt = Gt;
}, dt.diffed = function(e) {
    en && en(e);
    var t = e.__c;
    t && t.__H && (t.__H.__h.length && (1 !== Zt.push(t) && Kt === dt.requestAnimationFrame || ((Kt = dt.requestAnimationFrame) || cn)(an)), t.__H.__.forEach(function(e) {
        e.i && (e.__H = e.i), e.__V !== Yt && (e.__ = e.__V), e.i = void 0, e.__V = Yt;
    })), Jt = Gt = null;
}, dt.__c = function(e, t) {
    t.some(function(e) {
        try {
            e.__h.forEach(dn), e.__h = e.__h.filter(function(e) {
                return !e.__ || un(e);
            });
        } catch (n) {
            t.some(function(e) {
                e.__h && (e.__h = []);
            }), t = [], dt.__e(n, e.__v);
        }
    }), tn && tn(e, t);
}, dt.unmount = function(e) {
    nn && nn(e);
    var t, n = e.__c;
    n && n.__H && (n.__H.__.forEach(function(e) {
        try {
            dn(e);
        } catch (e) {
            t = e;
        }
    }), n.__H = void 0, t && dt.__e(t, n.__v));
};
var ln = "function" == typeof requestAnimationFrame;
function cn(e) {
    var t, n = function() {
        clearTimeout(r), ln && cancelAnimationFrame(t), setTimeout(e);
    }, r = setTimeout(n, 100);
    ln && (t = requestAnimationFrame(n));
}
function dn(e) {
    var t = Gt, n = e.__c;
    "function" == typeof n && (e.__c = void 0, n()), Gt = t;
}
function un(e) {
    var t = Gt;
    e.__c = e.__(), Gt = t;
}
function hn(e, t) {
    return "function" == typeof t ? t(e) : t;
}
function fn(e) {
    const t = e.compact ? 60 : 80, { stroke: n = 8, secondaryColor: r } = e;
    return Tt("div", Object.assign({
        "aria-label": "oval-loading"
    }, {
        children: Tt("svg", Object.assign({
            width: t,
            height: t,
            viewBox: pn(Number(n), 20),
            xmlns: "http://www.w3.org/2000/svg",
            className: "xar-loader-circle",
            "data-testid": "oval-svg"
        }, {
            children: Tt("g", Object.assign({
                fill: "none",
                fillRule: "evenodd"
            }, {
                children: Tt("g", Object.assign({
                    transform: "translate(1 1)",
                    "stroke-width": n,
                    "data-testid": "oval-secondary-group"
                }, {
                    children: [
                        Tt("circle", {
                            strokeOpacity: ".5",
                            cx: "0",
                            cy: "0",
                            r: 20,
                            stroke: r,
                            "stroke-width": n,
                            opacity: .3
                        }),
                        Tt("path", Object.assign({
                            d: gn(20),
                            stroke: e.strokeColor
                        }, {
                            children: Tt("animateTransform", {
                                attributeName: "transform",
                                type: "rotate",
                                from: "0 0 0",
                                to: "360 0 0",
                                dur: "1s",
                                repeatCount: "indefinite"
                            })
                        }))
                    ]
                }))
            }))
        }))
    }));
}
const pn = (e, t)=>{
    const n = -t - e / 2 + 1, r = 2 * t + e;
    return [
        n,
        n,
        r,
        r
    ].join(" ");
}, gn = (e)=>[
        "M" + e + " 0c0-9.94-8.06",
        e,
        e,
        e
    ].join("-");
!function(e, t) {
    void 0 === t && (t = {});
    var n = t.insertAt;
    if (e && "undefined" != typeof document) {
        var r = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
        i.type = "text/css", "top" === n && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e));
    }
}("@import url('https://fonts.googleapis.com/css2?family=Sora:wght@100;400;600;700&display=block');\n\n.xar-light-mode {\n  --fg: #333333;\n  --bg: #eff1f3;\n  --background: #fcfcfc;\n  --inputShadow: 0 0 8px 3px rgba(126, 126, 126, 0.25);\n}\n\n.xar-dark-mode {\n  --fg: #ffffff;\n  --bg: #313131;\n  --background: #1f1f1f;\n  --inputShadow: 0 0 8px 3px rgba(0, 0, 0, 0.05);\n}\n\n.compact {\n  --modal-height: 235px;\n  --loader-font-size: 14px;\n  --loader-font-weight: 400;\n  --success-img-width: 70px;\n  --action-link-size: 12px;\n}\n\n.full {\n  --modal-height: 480px;\n  --loader-font-size: 20px;\n  --loader-font-weight: 700;\n  --success-img-width: 100px;\n  --action-link-size: 15px;\n}\n\n#xar-modal {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  z-index: 2147483648;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background: rgba(10, 10, 10, 0.7);\n  backdrop-filter: blur(16px);\n  font-family: Sora, sans-serif;\n}\n\n.xar-header-logo__container {\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid var(--fg);\n}\n\n.xar-header-logo__empty-container {\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.xar-header-logo {\n  max-width: 60px;\n  max-height: 60px;\n  margin: 0 auto;\n  display: inline-block;\n}\n\n.xar-header-heading {\n  font-family: 'Sora', sans-serif;\n  text-align: center;\n}\n\n.xar-header-subtext {\n  font-family: 'Sora', sans-serif;\n  font-size: 12px;\n  font-weight: 400;\n  max-width: 200px;\n}\n\n.xar-email-login {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.xar-email-login > *:not(:first-child) {\n  margin-top: 20px;\n}\n\n.xar-email-login__label {\n  text-align: left;\n  font-size: 14px;\n  color: var(--fg);\n  font-weight: 400;\n}\n\n.xar-success__img {\n  max-width: var(--success-img-width);\n}\n\n.xar-email-login__input {\n  height: 45px;\n  padding: 0 16px;\n  font-size: 14px;\n  font-weight: 400;\n  color: var(--fg);\n  background: var(--bg);\n  border: none;\n  border-radius: 5px;\n  outline: none;\n  box-shadow: var(--inputShadow);\n}\n\n.xar-social-container {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n\n.xar-social-icon__wrapper {\n  display: flex;\n  background: var(--fg);\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  align-items: center;\n}\n\n.xar-social-icon__wrapper:hover {\n  cursor: pointer;\n  transition: all 0.5s;\n  transform: scale(1.15, 1.15);\n}\n\n.xar-social-icon {\n  margin: 0 auto;\n  width: 24px;\n  max-height: 24px;\n}\n\n.xar-container {\n  padding: 30px 30px 20px;\n  width: 325px;\n  min-height: var(--modal-height);\n  background-color: var(--background);\n  color: var(--fg);\n  margin: 0 auto;\n  font-family: 'Sora', sans-serif;\n  box-shadow: 4px 5px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n  box-sizing: content-box;\n}\n\n.xar-inner-container {\n  min-height: inherit;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.xar-inner-container > *:not(:first-child) {\n  margin-top: 20px;\n}\n\n.xar-btn {\n  width: 100%;\n  height: 2.75rem;\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: var(--bg);\n  background: var(--fg);\n  border: none;\n  border-radius: 5px;\n}\n\n.xar-btn:disabled {\n  opacity: 0.7;\n}\n\n.xar-btn:hover:enabled {\n  cursor: pointer;\n  transition: all 0.5s;\n  transform: scale(1.05, 1.15);\n}\n\n.xar-btn:disabled,\n.xar-btn[disabled] {\n  cursor: not-allowed;\n}\n\n.xar-footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 1rem;\n}\n\n.xar-footer-text {\n  font-size: 12px;\n  font-weight: 400;\n}\n\n.xar-footer-img__link {\n  height: 15px;\n}\n\n.xar-footer-img {\n  display: block;\n}\n\n.xar-separator {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  text-align: center;\n}\n\n.xar-separator:before,\n.xar-separator:after {\n  content: '';\n  flex: 1 1 auto;\n  border-bottom: 1px solid var(--fg);\n}\n\n.xar-separator:before {\n  margin-right: 1rem;\n}\n\n.xar-separator:after {\n  margin-left: 1rem;\n}\n\n.xar-action__link {\n  text-underline-offset: 3px;\n  text-transform: uppercase;\n  text-decoration: underline;\n  color: #3e9aff;\n  font-weight: 700;\n  font-size: var(--action-link-size);\n  line-height: 19px;\n  cursor: pointer;\n}\n\n.xar-loader__text {\n  font-size: var(--loader-font-size);\n  font-weight: var(--loader-font-weight);\n}\n\n.xar-loader-circle {\n  stroke: var(--fg);\n}\n");
const _n = ({ compact: e, logo: t })=>{
    const [n, r] = on(!1);
    return Tt(wt, {
        children: [
            n ? "" : Tt("div", {
                className: "xar-header-logo__empty-container"
            }),
            Tt("div", Object.assign({
                className: "xar-header-logo__container",
                style: n ? {} : {
                    display: "none"
                }
            }, {
                children: Tt("img", {
                    className: "xar-header-logo",
                    src: t,
                    alt: "app-logo",
                    onLoad: ()=>{
                        r(!1);
                    }
                })
            })),
            e ? "" : Tt("div", Object.assign({
                className: "xar-header-text"
            }, {
                children: [
                    Tt("h1", Object.assign({
                        className: "xar-header-heading"
                    }, {
                        children: "Welcome"
                    })),
                    Tt("p", Object.assign({
                        className: "xar-header-subtext"
                    }, {
                        children: "We\u2019ll email you a login link for a password-free sign in."
                    }))
                ]
            }))
        ]
    });
}, mn = ({ loginWithLink: t, email: n, setEmail: r })=>{
    const [i, o] = on(!0);
    return function(e, t) {
        var n = rn(Vt++, 3);
        !dt.__s && function(e, t) {
            return !e || e.length !== t.length || t.some(function(t, n) {
                return t !== e[n];
            });
        }(n.__H, t) && (n.__ = e, n.i = t, Gt.__H.__h.push(n));
    }(()=>{
        o(!ot(n));
    }, []), Tt("form", Object.assign({
        className: "xar-email-login"
    }, {
        children: [
            Tt("input", {
                value: n,
                onInput: (e)=>{
                    r(e.currentTarget.value), o(!ot(e.currentTarget.value));
                },
                className: "xar-email-login__input",
                type: "text",
                placeholder: "Enter your email"
            }),
            Tt("button", Object.assign({
                disabled: i,
                onClick: (r)=>e(void 0, void 0, void 0, function*() {
                        r.preventDefault(), n && (yield t(n));
                    }),
                className: "xar-btn"
            }, {
                children: "Get Login Link"
            }))
        ]
    }));
}, vn = ({ text: e })=>Tt("div", Object.assign({
        className: "xar-separator"
    }, {
        children: e
    })), yn = ({ loginWithSocial: e, loginList: t, mode: n })=>Tt("div", Object.assign({
        className: "xar-social-container"
    }, {
        children: t.map((t)=>{
            var r, i;
            return Tt("div", Object.assign({
                className: "xar-social-icon__wrapper",
                onClick: ()=>((t)=>e(t))(t)
            }, {
                children: Tt("img", {
                    src: (r = t, i = n, qt[`${r}_${i}`] ? qt[`${r}_${i}`] : qt[r]),
                    alt: `${t} logo`,
                    className: "xar-social-icon"
                })
            }));
        })
    })), wn = ({ mode: e })=>{
    const t = Ht[e];
    return Tt("div", Object.assign({
        className: "xar-footer"
    }, {
        children: Tt("a", Object.assign({
            href: "https://arcana.network",
            target: "_blank",
            className: "xar-footer-img__link"
        }, {
            children: Tt("img", {
                className: "xar-footer-img",
                src: t,
                alt: "Secured By Arcana"
            })
        }))
    }));
}, bn = (e)=>Tt(wt, {
        children: [
            e.header ? e.header : Tt(fn, {
                compact: e.compact,
                stroke: 8,
                secondaryColor: "#8D8D8D"
            }),
            e.text ? Tt("p", Object.assign({
                className: "xar-loader__text"
            }, {
                children: e.text
            })) : "",
            e.children ? Tt(wt, {
                children: e.children
            }) : ""
        ]
    }), xn = ({ children: e, mode: t })=>Tt("div", Object.assign({
        class: "xar-container"
    }, {
        children: [
            Tt("div", Object.assign({
                class: "xar-inner-container"
            }, {
                children: e
            })),
            Tt(wn, {
                mode: t
            })
        ]
    })), Cn = ({ text: e, method: t })=>Tt("div", Object.assign({
        class: "xar-action-container"
    }, {
        children: Tt("p", Object.assign({
            onClick: ()=>t(),
            className: "xar-action__link"
        }, {
            children: e
        }))
    })), En = "xar-modal", Ln = (e)=>Tt("div", Object.assign({
        id: En,
        onClick: (t)=>{
            var n;
            (null === (n = t.target) || void 0 === n ? void 0 : n.id) == En && e.closeFunc && e.closeFunc(new Error("User closed the connect modal"));
        }
    }, {
        children: e.children
    })), kn = {
    SOCIAL: "Please complete the login to proceed",
    LINK: "Sending login link to your email",
    LINK_SENT: "Please complete the login by clicking on email"
}, Sn = {
    text: "",
    loading: !1,
    type: ""
}, Nn = (e, t)=>"SOCIAL" == t || "LINK" == t || "LINK_SENT" == t ? {
        text: kn[t],
        type: t,
        loading: !0
    } : "RESET" == t ? Sn : e, In = (t)=>{
    const [n, r] = sn(Nn, Sn), [i, o] = on(""), s = ()=>e(void 0, void 0, void 0, function*() {
            i && (r("LINK"), t.loginWithLink(i, ()=>{
                r("LINK_SENT");
            }).finally(()=>{
                r("RESET");
            }));
        });
    return n.loading ? Tt(Ln, {
        children: Tt(xn, Object.assign({
            mode: t.mode
        }, {
            children: Tt(bn, Object.assign({
                compact: t.options.compact,
                text: n.text,
                mode: t.mode,
                header: "LINK_SENT" == n.type ? Tt("img", {
                    className: "xar-success__img",
                    src: ie
                }) : void 0
            }, {
                children: "LINK_SENT" == n.type ? Tt(wt, {
                    children: [
                        Tt(Cn, {
                            method: ()=>s(),
                            text: "Resend email"
                        }),
                        Tt(Cn, {
                            method: ()=>r("RESET"),
                            text: "Change email id"
                        })
                    ]
                }) : null
            }))
        }))
    }) : Tt(Ln, Object.assign({
        closeFunc: t.closeFunc
    }, {
        children: Tt(xn, Object.assign({
            mode: t.mode
        }, {
            children: [
                Tt(_n, {
                    compact: t.options.compact,
                    logo: t.logo
                }),
                Tt(mn, {
                    email: i,
                    setEmail: o,
                    loginWithLink: s
                }),
                t.loginList.length > 0 ? Tt(wt, {
                    children: [
                        Tt(vn, {
                            text: "or continue with"
                        }),
                        Tt(yn, {
                            loginWithSocial: (n)=>e(void 0, void 0, void 0, function*() {
                                    r("SOCIAL"), t.loginWithSocial(n).finally(()=>{
                                        r("RESET");
                                    });
                                }),
                            loginList: t.loginList,
                            mode: t.mode
                        })
                    ]
                }) : null
            ]
        }))
    }));
};
class On {
    constructor(e){
        this.status = "closed", this.close = (e)=>{
            "closed" !== this.status && (this.onClose(e), this.status = "closed", Mt(null, this.container));
        }, this.params = {
            loginList: e.loginList.filter((e)=>"passwordless" !== e),
            loginWithSocial: e.loginWithSocial,
            loginWithLink: e.loginWithLink,
            mode: e.mode,
            closeFunc: this.close,
            logo: e.logo,
            options: e.options
        }, this.createContainer();
    }
    open(e) {
        "open" !== this.status && (this.onClose = e, this.status = "open", Mt(Tt(In, Object.assign({}, this.params)), this.container));
    }
    createContainer() {
        const e = this.params.options.compact ? "compact" : "full";
        this.container = document.createElement("div"), this.container.setAttribute("id", "xar-login-container"), this.container.classList.add(`xar-${this.params.mode}-mode`), this.container.classList.add(e), document.body.appendChild(this.container);
    }
}
class Rn {
    constructor(t, n){
        this.initStatus = ge.CREATED, this.initPromises = [], this.loginWithSocial = (t)=>e(this, void 0, void 0, function*() {
                if (this.initStatus === ge.DONE) {
                    if (yield this.isLoggedIn()) return this._provider;
                    if (!(yield this._provider.isLoginAvailable(t))) throw new Error(`${t} login is not available`);
                    const e = yield this._provider.initSocialLogin(t);
                    return this.beginLogin(e);
                }
                throw B;
            }), this.loginWithLink = (t, n)=>e(this, void 0, void 0, function*() {
                if (this.initStatus === ge.DONE) {
                    if (yield this.isLoggedIn()) return this._provider;
                    if (!ot(t)) throw new Error("Invalid email");
                    return yield this._provider.initPasswordlessLogin(t), n && n(), yield this.waitForConnect();
                }
                throw B;
            }), this.loginWithBearer = (t, n)=>e(this, void 0, void 0, function*() {
                if (this.initStatus !== ge.DONE) throw B;
                return yield this.iframeWrapper.triggerBearerAuthentication(t, n);
            });
        let r = null == n ? void 0 : n.network, i = t;
        if (((e)=>3 == e.split("_").length)(t)) {
            const e = ((e)=>{
                const t = e.split("_"), [, n, r] = t;
                if (!oe(r)) throw new Error("Invalid ClientId");
                if ("live" == n) return {
                    network: "mainnet",
                    address: r
                };
                if ("test" == n) return {
                    network: "testnet",
                    address: r
                };
                if ("dev" == n) return {
                    network: "dev",
                    address: r
                };
                throw new Error("Invalid ClientId");
            })(t);
            r = e.network, i = e.address;
        }
        ((e)=>{
            if (!((e)=>null != e)(e)) throw new Error("appAddress is required");
            if (!((e)=>"string" == typeof e && e.trim().length > 0)(e)) throw new Error("appAddress is required to be a non-empty string");
            if (!oe(e)) throw new Error("appAddress is required to be an ethereum address");
        })(i), this.appId = se(i), this.params = ((e)=>{
            var t;
            const n = {
                network: "testnet",
                debug: !1,
                position: "right",
                theme: "dark",
                alwaysVisible: !0,
                setWindowProvider: !1,
                connectOptions: {
                    compact: !1
                }
            };
            return (null == e ? void 0 : e.network) && (n.network = e.network), void 0 !== (null == e ? void 0 : e.debug) && (n.debug = e.debug), (null == e ? void 0 : e.redirectUrl) && (n.redirectUrl = e.redirectUrl), (null == e ? void 0 : e.chainConfig) && (n.chainConfig = e.chainConfig), (null == e ? void 0 : e.theme) && (n.theme = e.theme), (null == e ? void 0 : e.position) && (n.position = e.position), void 0 !== (null == e ? void 0 : e.alwaysVisible) && (n.alwaysVisible = e.alwaysVisible), void 0 !== (null === (t = null == e ? void 0 : e.connectOptions) || void 0 === t ? void 0 : t.compact) && (n.connectOptions.compact = e.connectOptions.compact), "testnet" != n.network && "dev" != n.network || console.log(`%c[Arcana Auth] You are currently on ${n.network} network.`, "color: red"), n;
        })(Object.assign(Object.assign({}, n), {
            network: r
        })), this.networkConfig = ((e)=>{
            if ("string" == typeof e && "testnet" == e) return Ue;
            if ("string" == typeof e && "dev" == e) return $e;
            if ("string" == typeof e && "mainnet" == e) return Me;
            if (function(e) {
                return "string" != typeof e && !("object" != typeof e || !e.gatewayUrl) && !("object" != typeof e || !e.walletUrl) && !("object" != typeof e || !e.authUrl);
            }(e)) return e;
            throw new Error("Invalid network config passed");
        })(this.params.network), function(e, t) {
            try {
                if ("undefined" == typeof document) return;
                const n = document.createElement("link");
                n.href = `${e}/${t}/login`, n.type = "text/html", n.rel = "prefetch", document.head.appendChild(n);
            } catch (e) {
                console.warn(e);
            }
        }(this.networkConfig.walletUrl, this.appId), this.rpcConfig = this.params.chainConfig, this._provider = new fe(this.rpcConfig), this.params.debug ? (te(Y.DEBUG), ee = (e)=>{
            console.error(e);
        }) : te(Y.NOLOGS);
    }
    init() {
        var t;
        return e(this, void 0, void 0, function*() {
            return this.initStatus === ge.CREATED ? (this.initStatus = ge.RUNNING, this.iframeWrapper || (yield this.setAppConfig(), this.iframeWrapper = new De({
                appId: this.appId,
                iframeUrl: this.networkConfig.walletUrl,
                appConfig: this.appConfig,
                position: this.params.position,
                standaloneMode: this._standaloneMode
            }), this.iframeWrapper.setWalletType(null !== (t = this.params.appMode) && void 0 !== t ? t : this.params.alwaysVisible ? me.Full : me.Widget), yield this._provider.init(this.iframeWrapper, {
                loginWithLink: this.loginWithLink,
                loginWithSocial: this.loginWithSocial
            }), this.setProviders(), this.initStatus = ge.DONE, this.resolveInitPromises()), this) : this.initStatus === ge.RUNNING ? yield this.waitForInit() : this;
        });
    }
    connect() {
        return e(this, void 0, void 0, function*() {
            if (this.initStatus !== ge.DONE && (yield this.init()), yield this.isLoggedIn()) return this._provider;
            const e = yield this.getLogins();
            return this.connectCtrl || (this.connectCtrl = new On({
                loginWithLink: this.loginWithLink,
                loginWithSocial: this.loginWithSocial,
                loginList: e,
                mode: this.theme,
                logo: this.logo.vertical,
                options: this.params.connectOptions
            })), new Promise((e, t)=>{
                this.connectCtrl.open((e)=>{
                    if (e) return t(e);
                }), this.waitForConnect().then((t)=>{
                    this.connectCtrl.close(), e(t);
                }).catch(t);
            });
        });
    }
    showWallet() {
        if (!this.connected) throw new Error("no connection yet, cannot show wallet");
        this._provider.expandWallet();
    }
    get connected() {
        return this._provider.connected;
    }
    getUser() {
        if (this.initStatus === ge.DONE) return this._provider.requestUserInfo();
        throw B;
    }
    isLoggedIn() {
        return e(this, void 0, void 0, function*() {
            if (this.initStatus === ge.DONE) return this._provider.isLoggedIn();
            throw B;
        });
    }
    logout() {
        if (this.initStatus === ge.DONE) return this._provider.triggerLogout();
        throw B;
    }
    getPublicKey(t, n = "google") {
        return e(this, void 0, void 0, function*() {
            if (this.initStatus === ge.DONE) {
                if (!t || "" === t) throw new J("email_required", `Email is required in getPublicKey, got ${t}`);
                return yield this._provider.getPublicKey(t, n);
            }
            throw B;
        });
    }
    getLogins() {
        return e(this, void 0, void 0, function*() {
            if (this.initStatus === ge.DONE) return yield this._provider.getAvailableLogins();
            throw B;
        });
    }
    getProvider() {
        if (this.initStatus === ge.DONE) return this._provider;
        throw B;
    }
    canReconnect() {
        return e(this, void 0, void 0, function*() {
            if (yield this.init(), yield this.isLoggedIn()) return !1;
            const e = this.iframeWrapper.getSessionID();
            return !!e && !(e.expiry < Date.now());
        });
    }
    reconnect() {
        return e(this, void 0, void 0, function*() {
            if (yield this.init(), yield this.isLoggedIn()) return void (yield this.waitForConnect());
            const e = this.iframeWrapper.getSessionID();
            if (e) {
                if (e.expiry < Date.now()) throw new Error("cannot reconnect, session expired");
                const t = new URL((yield this._provider.getReconnectionUrl()));
                t.searchParams.set("sessionID", e.id);
                const n = new st(t.toString());
                return yield n.open(), void (yield this.waitForConnect());
            }
            throw new Error("cannot reconnect, no session found");
        });
    }
    get chainId() {
        return this._provider.chainId;
    }
    beginLogin(t) {
        return e(this, void 0, void 0, function*() {
            const e = new st(t);
            return yield e.open(), yield this.waitForConnect();
        });
    }
    waitForConnect() {
        return new Promise((e)=>{
            if (this.connected) return e(this._provider);
            this._provider.once("connect", ()=>e(this._provider));
        });
    }
    setAppConfig() {
        return e(this, void 0, void 0, function*() {
            const t = yield function(t, n) {
                return e(this, void 0, void 0, function*() {
                    const e = new URL(`/api/v1/get-app-theme/?id=${t}`, n);
                    return yield (yield fetch(e.toString())).json();
                });
            }(this.appId, this.networkConfig.gatewayUrl), n = function(e, t, n) {
                const r = new URL(`/api/v2/app/${e}/logo?type=${t}`, n);
                return {
                    horizontal: `${r.toString()}&orientation=horizontal`,
                    vertical: `${r.toString()}&orientation=vertical`
                };
            }(this.appId, this.params.theme, this.networkConfig.gatewayUrl), r = t.logo.dark_horizontal || t.logo.light_horizontal, i = t.logo.dark_vertical || t.logo.light_vertical;
            this.appConfig = {
                name: t.name,
                themeConfig: {
                    assets: {
                        logo: {
                            horizontal: r ? n.horizontal : "",
                            vertical: i ? n.vertical : ""
                        }
                    },
                    theme: this.params.theme
                }
            };
        });
    }
    waitForInit() {
        return e(this, void 0, void 0, function*() {
            const e = new Promise((e)=>{
                this.initPromises.push(e);
            });
            return yield e;
        });
    }
    resolveInitPromises() {
        const e = this.initPromises;
        this.initPromises = [];
        for (const t of e)t(this);
    }
    get provider() {
        if (this._provider) return this._provider;
        throw B;
    }
    get logo() {
        if (this.initStatus === ge.DONE) return this.appConfig.themeConfig.assets.logo;
        throw B;
    }
    get theme() {
        if (this.initStatus === ge.DONE) return this.appConfig.themeConfig.theme;
        throw B;
    }
    setProviders() {
        var e, t, n;
        const r = window;
        try {
            r.arcana = null !== (e = r.arcana) && void 0 !== e ? e : {}, r.arcana.provider = this._provider;
        } catch (e) {}
        if (this.params.setWindowProvider) try {
            r.ethereum = null !== (t = r.ethereum) && void 0 !== t ? t : this._provider, r.ethereum.providers = null !== (n = r.ethereum.providers) && void 0 !== n ? n : [], r.ethereum.providers.push(this._provider);
        } catch (e) {
            console.error(e);
        }
    }
    standaloneMode(e, t) {
        this._standaloneMode = {
            mode: e,
            handler: t
        };
    }
}

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

},{}]},["km5uZ","bB7Pu"], "bB7Pu", "parcelRequiree1cc")

//# sourceMappingURL=index.3d214d75.js.map
