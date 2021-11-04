// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\images\\mobile\\logo-mobile.png":[["logo-mobile.824617bb.png","images/mobile/logo-mobile.png"],"images/mobile/logo-mobile.png"],"./..\\images\\tablet\\hero-icecream-tablet.png":[["hero-icecream-tablet.07cb51a2.png","images/tablet/hero-icecream-tablet.png"],"images/tablet/hero-icecream-tablet.png"],"./..\\images\\tablet\\hero-girl-tablet.png":[["hero-girl-tablet.9143cf37.png","images/tablet/hero-girl-tablet.png"],"images/tablet/hero-girl-tablet.png"],"./..\\images\\tablet\\hero-milk-tablet.png":[["hero-milk-tablet.8138eac5.png","images/tablet/hero-milk-tablet.png"],"images/tablet/hero-milk-tablet.png"],"./..\\images\\mobile\\ellipse.png":[["ellipse.19d4454d.png","images/mobile/ellipse.png"],"images/mobile/ellipse.png"],"./..\\images\\tablet\\hero-icecream-tablet@2x.png":[["hero-icecream-tablet@2x.3ecfaaba.png","images/tablet/hero-icecream-tablet@2x.png"],"images/tablet/hero-icecream-tablet@2x.png"],"./..\\images\\tablet\\hero-girl-tablet@2x.png":[["hero-girl-tablet@2x.deea947d.png","images/tablet/hero-girl-tablet@2x.png"],"images/tablet/hero-girl-tablet@2x.png"],"./..\\images\\tablet\\hero-milk-tablet@2x.png":[["hero-milk-tablet@2x.30ebf292.png","images/tablet/hero-milk-tablet@2x.png"],"images/tablet/hero-milk-tablet@2x.png"],"./..\\images\\mobile\\hero-icecream-mobile.png":[["hero-icecream-mobile.797de45a.png","images/mobile/hero-icecream-mobile.png"],"images/mobile/hero-icecream-mobile.png"],"./..\\images\\mobile\\hero-icecream-mobile@2x.png":[["hero-icecream-mobile@2x.8580f644.png","images/mobile/hero-icecream-mobile@2x.png"],"images/mobile/hero-icecream-mobile@2x.png"],"./..\\images\\desktop\\hero-icecream-desktop.png":[["hero-icecream-desktop.a3065e50.png","images/desktop/hero-icecream-desktop.png"],"images/desktop/hero-icecream-desktop.png"],"./..\\images\\desktop\\hero-girl-desktop.png":[["hero-girl-desktop.34953655.png","images/desktop/hero-girl-desktop.png"],"images/desktop/hero-girl-desktop.png"],"./..\\images\\desktop\\hero-milk-desktop.png":[["hero-milk-desktop.a4353de1.png","images/desktop/hero-milk-desktop.png"],"images/desktop/hero-milk-desktop.png"],"./..\\images\\desktop\\hero-icecream-desktop@2x.png":[["hero-icecream-desktop@2x.ce1a9180.png","images/desktop/hero-icecream-desktop@2x.png"],"images/desktop/hero-icecream-desktop@2x.png"],"./..\\images\\desktop\\hero-girl-desktop@2x.png":[["hero-girl-desktop@2x.41fae2b2.png","images/desktop/hero-girl-desktop@2x.png"],"images/desktop/hero-girl-desktop@2x.png"],"./..\\images\\desktop\\hero-milk-desktop@2x.png":[["hero-milk-desktop@2x.a3a16fb2.png","images/desktop/hero-milk-desktop@2x.png"],"images/desktop/hero-milk-desktop@2x.png"],"./..\\images\\mobile\\product-1-mobile.png":[["product-1-mobile.5f57e11a.png","images/mobile/product-1-mobile.png"],"images/mobile/product-1-mobile.png"],"./..\\images\\mobile\\product-2-mobile.png":[["product-2-mobile.2b95464c.png","images/mobile/product-2-mobile.png"],"images/mobile/product-2-mobile.png"],"./..\\images\\mobile\\product-3-mobile.png":[["product-3-mobile.22c4905c.png","images/mobile/product-3-mobile.png"],"images/mobile/product-3-mobile.png"],"./..\\images\\mobile\\product-1-mobile@2x.png":[["product-1-mobile@2x.f4e540e3.png","images/mobile/product-1-mobile@2x.png"],"images/mobile/product-1-mobile@2x.png"],"./..\\images\\mobile\\product-2-mobile@2x.png":[["product-2-mobile@2x.c2dec085.png","images/mobile/product-2-mobile@2x.png"],"images/mobile/product-2-mobile@2x.png"],"./..\\images\\mobile\\product-3-mobile@2x.png":[["product-3-mobile@2x.7a2f7a70.png","images/mobile/product-3-mobile@2x.png"],"images/mobile/product-3-mobile@2x.png"],"./..\\images\\tablet\\product-1-tablet.png":[["product-1-tablet.fb020517.png","images/tablet/product-1-tablet.png"],"images/tablet/product-1-tablet.png"],"./..\\images\\tablet\\product-2-tablet.png":[["product-2-tablet.ba1478d5.png","images/tablet/product-2-tablet.png"],"images/tablet/product-2-tablet.png"],"./..\\images\\tablet\\product-3-tablet.png":[["product-3-tablet.3b9ab12d.png","images/tablet/product-3-tablet.png"],"images/tablet/product-3-tablet.png"],"./..\\images\\tablet\\product-1-tablet@2x.png":[["product-1-tablet@2x.25dffae4.png","images/tablet/product-1-tablet@2x.png"],"images/tablet/product-1-tablet@2x.png"],"./..\\images\\tablet\\product-2-tablet@2x.png":[["product-2-tablet@2x.e0110a10.png","images/tablet/product-2-tablet@2x.png"],"images/tablet/product-2-tablet@2x.png"],"./..\\images\\tablet\\product-3-tablet@2x.png":[["product-3-tablet@2x.ef0d23a9.png","images/tablet/product-3-tablet@2x.png"],"images/tablet/product-3-tablet@2x.png"],"./..\\images\\desktop\\product-1-desktop.png":[["product-1-desktop.caecdeb2.png","images/desktop/product-1-desktop.png"],"images/desktop/product-1-desktop.png"],"./..\\images\\desktop\\product-2-desktop.png":[["product-2-desktop.592d1d95.png","images/desktop/product-2-desktop.png"],"images/desktop/product-2-desktop.png"],"./..\\images\\desktop\\product-3-desktop.png":[["product-3-desktop.06282961.png","images/desktop/product-3-desktop.png"],"images/desktop/product-3-desktop.png"],"./..\\images\\desktop\\product-1-desktop@2x.png":[["product-1-desktop@2x.44a9cb54.png","images/desktop/product-1-desktop@2x.png"],"images/desktop/product-1-desktop@2x.png"],"./..\\images\\desktop\\product-2-desktop@2x.png":[["product-2-desktop@2x.1be1ae1b.png","images/desktop/product-2-desktop@2x.png"],"images/desktop/product-2-desktop@2x.png"],"./..\\images\\desktop\\product-3-desktop@2x.png":[["product-3-desktop@2x.fcf87556.png","images/desktop/product-3-desktop@2x.png"],"images/desktop/product-3-desktop@2x.png"],"./..\\images\\mobile\\milk-spalsh-mobile.png":[["milk-spalsh-mobile.3014652e.png","images/mobile/milk-spalsh-mobile.png"],"images/mobile/milk-spalsh-mobile.png"],"./..\\images\\mobile\\milk-splash-mobile@2x.png":[["milk-splash-mobile@2x.c7c2e99a.png","images/mobile/milk-splash-mobile@2x.png"],"images/mobile/milk-splash-mobile@2x.png"],"./..\\images\\desktop\\milk-splash-desktop.png":[["milk-splash-desktop.ed1b81ff.png","images/desktop/milk-splash-desktop.png"],"images/desktop/milk-splash-desktop.png"],"./..\\images\\desktop\\milk-splash-desktop@2x.png":[["milk-splash-desktop@2x.3e6b7aad.png","images/desktop/milk-splash-desktop@2x.png"],"images/desktop/milk-splash-desktop@2x.png"],"./..\\images\\icons\\icon-milk.png":[["icon-milk.d9a88774.png","images/icons/icon-milk.png"],"images/icons/icon-milk.png"],"./..\\images\\icons\\icon-milk@2x.png":[["icon-milk@2x.031b910b.png","images/icons/icon-milk@2x.png"],"images/icons/icon-milk@2x.png"],"./..\\images\\icons\\icon-apples.png":[["icon-apples.b4c1ac37.png","images/icons/icon-apples.png"],"images/icons/icon-apples.png"],"./..\\images\\icons\\icon-apples@2x.png":[["icon-apples@2x.db8ff1cf.png","images/icons/icon-apples@2x.png"],"images/icons/icon-apples@2x.png"],"./..\\images\\icons\\icon-heart.png":[["icon-heart.4750e957.png","images/icons/icon-heart.png"],"images/icons/icon-heart.png"],"./..\\images\\icons\\icon-heart@2x.png":[["icon-heart@2x.ceca5b42.png","images/icons/icon-heart@2x.png"],"images/icons/icon-heart@2x.png"],"./..\\images\\icons\\review-decor.png":[["review-decor.086ac9c7.png","images/icons/review-decor.png"],"images/icons/review-decor.png"],"./..\\images\\Icons\\review.png":[["review.810e3f5a.png","images/Icons/review.png"],"images/Icons/review.png"],"./..\\images\\icons\\bullet-active.png":[["bullet-active.fbf65b43.png","images/icons/bullet-active.png"],"images/icons/bullet-active.png"],"./..\\images\\desktop\\contacts-bg@1x.png":[["contacts-bg@1x.359c2f39.png","images/desktop/contacts-bg@1x.png"],"images/desktop/contacts-bg@1x.png"],"./..\\images\\desktop\\contacts-bg@2x.png":[["contacts-bg@2x.2f94ef27.png","images/desktop/contacts-bg@2x.png"],"images/desktop/contacts-bg@2x.png"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");
},{"./sass/main.scss":"sass/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58408" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map