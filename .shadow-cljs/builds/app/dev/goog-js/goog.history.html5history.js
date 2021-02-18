["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/history/html5history.js"],"~:js","goog.provide(\"goog.history.Html5History\");\ngoog.provide(\"goog.history.Html5History.TokenTransformer\");\ngoog.require(\"goog.asserts\");\ngoog.require(\"goog.events\");\ngoog.require(\"goog.events.EventTarget\");\ngoog.require(\"goog.events.EventType\");\ngoog.require(\"goog.history.Event\");\n/**\n * @final\n * @constructor\n * @extends {goog.events.EventTarget}\n * @param {Window=} opt_win\n * @param {goog.history.Html5History.TokenTransformer=} opt_transformer\n */\ngoog.history.Html5History = function(opt_win, opt_transformer) {\n  goog.events.EventTarget.call(this);\n  goog.asserts.assert(goog.history.Html5History.isSupported(opt_win), \"HTML5 history is not supported.\");\n  /** @private @type {Window} */ this.window_ = opt_win || window;\n  /** @private @type {goog.history.Html5History.TokenTransformer} */ this.transformer_ = opt_transformer || null;\n  /** @private @type {?string} */ this.lastFragment_ = null;\n  goog.events.listen(this.window_, goog.events.EventType.POPSTATE, this.onHistoryEvent_, false, this);\n  goog.events.listen(this.window_, goog.events.EventType.HASHCHANGE, this.onHistoryEvent_, false, this);\n};\ngoog.inherits(goog.history.Html5History, goog.events.EventTarget);\n/**\n * @param {Window=} opt_win\n * @return {boolean}\n */\ngoog.history.Html5History.isSupported = function(opt_win) {\n  var win = opt_win || window;\n  return !!(win.history && win.history.pushState);\n};\n/** @private @type {boolean} */ goog.history.Html5History.prototype.enabled_ = false;\n/** @private @type {boolean} */ goog.history.Html5History.prototype.useFragment_ = true;\n/** @private @type {string} */ goog.history.Html5History.prototype.pathPrefix_ = \"/\";\n/**\n * @param {boolean} enable\n */\ngoog.history.Html5History.prototype.setEnabled = function(enable) {\n  if (enable == this.enabled_) {\n    return;\n  }\n  this.enabled_ = enable;\n  if (enable) {\n    this.dispatchEvent(new goog.history.Event(this.getToken(), false));\n  }\n};\n/**\n * @return {string}\n */\ngoog.history.Html5History.prototype.getToken = function() {\n  if (this.useFragment_) {\n    return goog.asserts.assertString(this.getFragment_());\n  } else {\n    return this.transformer_ ? this.transformer_.retrieveToken(this.pathPrefix_, this.window_.location) : this.window_.location.pathname.substr(this.pathPrefix_.length);\n  }\n};\n/**\n * @param {string} token\n * @param {string=} opt_title\n */\ngoog.history.Html5History.prototype.setToken = function(token, opt_title) {\n  if (token == this.getToken()) {\n    return;\n  }\n  this.window_.history.pushState(null, opt_title || this.window_.document.title || \"\", this.getUrl_(token));\n  this.dispatchEvent(new goog.history.Event(token, false));\n};\n/**\n * @param {string} token\n * @param {string=} opt_title\n */\ngoog.history.Html5History.prototype.replaceToken = function(token, opt_title) {\n  this.window_.history.replaceState(null, opt_title || this.window_.document.title || \"\", this.getUrl_(token));\n  this.dispatchEvent(new goog.history.Event(token, false));\n};\n/** @override */ goog.history.Html5History.prototype.disposeInternal = function() {\n  goog.events.unlisten(this.window_, goog.events.EventType.POPSTATE, this.onHistoryEvent_, false, this);\n  if (this.useFragment_) {\n    goog.events.unlisten(this.window_, goog.events.EventType.HASHCHANGE, this.onHistoryEvent_, false, this);\n  }\n};\n/**\n * @param {boolean} useFragment\n */\ngoog.history.Html5History.prototype.setUseFragment = function(useFragment) {\n  if (this.useFragment_ != useFragment) {\n    if (useFragment) {\n      goog.events.listen(this.window_, goog.events.EventType.HASHCHANGE, this.onHistoryEvent_, false, this);\n    } else {\n      goog.events.unlisten(this.window_, goog.events.EventType.HASHCHANGE, this.onHistoryEvent_, false, this);\n    }\n    this.useFragment_ = useFragment;\n  }\n};\n/**\n * @param {string} pathPrefix\n */\ngoog.history.Html5History.prototype.setPathPrefix = function(pathPrefix) {\n  this.pathPrefix_ = pathPrefix;\n};\n/**\n * @return {string}\n */\ngoog.history.Html5History.prototype.getPathPrefix = function() {\n  return this.pathPrefix_;\n};\n/**\n * @private\n * @return {?string}\n */\ngoog.history.Html5History.prototype.getFragment_ = function() {\n  if (this.useFragment_) {\n    var loc = this.window_.location.href;\n    var index = loc.indexOf(\"#\");\n    return index < 0 ? \"\" : loc.substring(index + 1);\n  } else {\n    return null;\n  }\n};\n/**\n * @private\n * @param {string} token\n * @return {string}\n */\ngoog.history.Html5History.prototype.getUrl_ = function(token) {\n  if (this.useFragment_) {\n    return \"#\" + token;\n  } else {\n    return this.transformer_ ? this.transformer_.createUrl(token, this.pathPrefix_, this.window_.location) : this.pathPrefix_ + token + this.window_.location.search;\n  }\n};\n/**\n * @private\n * @param {goog.events.BrowserEvent} e\n */\ngoog.history.Html5History.prototype.onHistoryEvent_ = function(e) {\n  if (this.enabled_) {\n    var fragment = this.getFragment_();\n    if (e.type == goog.events.EventType.POPSTATE || fragment != this.lastFragment_) {\n      this.lastFragment_ = fragment;\n      this.dispatchEvent(new goog.history.Event(this.getToken(), true));\n    }\n  }\n};\n/** @interface */ goog.history.Html5History.TokenTransformer = function() {\n};\n/**\n * @param {string} pathPrefix\n * @param {Location} location\n * @return {string}\n */\ngoog.history.Html5History.TokenTransformer.prototype.retrieveToken = function(pathPrefix, location) {\n};\n/**\n * @param {string} token\n * @param {string} pathPrefix\n * @param {Location} location\n * @return {string}\n */\ngoog.history.Html5History.TokenTransformer.prototype.createUrl = function(token, pathPrefix, location) {\n};\n","~:source","// Copyright 2010 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview HTML5 based history implementation, compatible with\n * goog.History.\n *\n * TODO(user): There should really be a history interface and multiple\n * implementations.\n *\n */\n\n\ngoog.provide('goog.history.Html5History');\ngoog.provide('goog.history.Html5History.TokenTransformer');\n\ngoog.require('goog.asserts');\ngoog.require('goog.events');\ngoog.require('goog.events.EventTarget');\ngoog.require('goog.events.EventType');\ngoog.require('goog.history.Event');\n\n\n\n/**\n * An implementation compatible with goog.History that uses the HTML5\n * history APIs.\n *\n * @param {Window=} opt_win The window to listen/dispatch history events on.\n * @param {goog.history.Html5History.TokenTransformer=} opt_transformer\n *     The token transformer that is used to create URL from the token\n *     when storing token without using hash fragment.\n * @constructor\n * @extends {goog.events.EventTarget}\n * @final\n */\ngoog.history.Html5History = function(opt_win, opt_transformer) {\n  goog.events.EventTarget.call(this);\n  goog.asserts.assert(\n      goog.history.Html5History.isSupported(opt_win),\n      'HTML5 history is not supported.');\n\n  /**\n   * The window object to use for history tokens.  Typically the top window.\n   * @type {Window}\n   * @private\n   */\n  this.window_ = opt_win || window;\n\n  /**\n   * The token transformer that is used to create URL from the token\n   * when storing token without using hash fragment.\n   * @type {goog.history.Html5History.TokenTransformer}\n   * @private\n   */\n  this.transformer_ = opt_transformer || null;\n\n  /**\n   * The fragment of the last navigation. Used to eliminate duplicate/redundant\n   * NAVIGATE events when a POPSTATE and HASHCHANGE event are triggered for the\n   * same navigation (e.g., back button click).\n   * @private {?string}\n   */\n  this.lastFragment_ = null;\n\n  goog.events.listen(\n      this.window_, goog.events.EventType.POPSTATE, this.onHistoryEvent_, false,\n      this);\n  goog.events.listen(\n      this.window_, goog.events.EventType.HASHCHANGE, this.onHistoryEvent_,\n      false, this);\n};\ngoog.inherits(goog.history.Html5History, goog.events.EventTarget);\n\n\n/**\n * Returns whether Html5History is supported.\n * @param {Window=} opt_win Optional window to check.\n * @return {boolean} Whether html5 history is supported.\n */\ngoog.history.Html5History.isSupported = function(opt_win) {\n  var win = opt_win || window;\n  return !!(win.history && win.history.pushState);\n};\n\n\n/**\n * Status of when the object is active and dispatching events.\n * @type {boolean}\n * @private\n */\ngoog.history.Html5History.prototype.enabled_ = false;\n\n\n/**\n * Whether to use the fragment to store the token, defaults to true.\n * @type {boolean}\n * @private\n */\ngoog.history.Html5History.prototype.useFragment_ = true;\n\n\n/**\n * If useFragment is false the path will be used, the path prefix will be\n * prepended to all tokens. Defaults to '/'.\n * @type {string}\n * @private\n */\ngoog.history.Html5History.prototype.pathPrefix_ = '/';\n\n\n/**\n * Starts or stops the History.  When enabled, the History object\n * will immediately fire an event for the current location. The caller can set\n * up event listeners between the call to the constructor and the call to\n * setEnabled.\n *\n * @param {boolean} enable Whether to enable history.\n */\ngoog.history.Html5History.prototype.setEnabled = function(enable) {\n  if (enable == this.enabled_) {\n    return;\n  }\n\n  this.enabled_ = enable;\n\n  if (enable) {\n    this.dispatchEvent(new goog.history.Event(this.getToken(), false));\n  }\n};\n\n\n/**\n * Returns the current token.\n * @return {string} The current token.\n */\ngoog.history.Html5History.prototype.getToken = function() {\n  if (this.useFragment_) {\n    return goog.asserts.assertString(this.getFragment_());\n  } else {\n    return this.transformer_ ?\n        this.transformer_.retrieveToken(\n            this.pathPrefix_, this.window_.location) :\n        this.window_.location.pathname.substr(this.pathPrefix_.length);\n  }\n};\n\n\n/**\n * Sets the history state.\n * @param {string} token The history state identifier.\n * @param {string=} opt_title Optional title to associate with history entry.\n */\ngoog.history.Html5History.prototype.setToken = function(token, opt_title) {\n  if (token == this.getToken()) {\n    return;\n  }\n\n  // Per externs/gecko_dom.js document.title can be null.\n  this.window_.history.pushState(\n      null, opt_title || this.window_.document.title || '',\n      this.getUrl_(token));\n  this.dispatchEvent(new goog.history.Event(token, false));\n};\n\n\n/**\n * Replaces the current history state without affecting the rest of the history\n * stack.\n * @param {string} token The history state identifier.\n * @param {string=} opt_title Optional title to associate with history entry.\n */\ngoog.history.Html5History.prototype.replaceToken = function(token, opt_title) {\n  // Per externs/gecko_dom.js document.title can be null.\n  this.window_.history.replaceState(\n      null, opt_title || this.window_.document.title || '',\n      this.getUrl_(token));\n  this.dispatchEvent(new goog.history.Event(token, false));\n};\n\n\n/** @override */\ngoog.history.Html5History.prototype.disposeInternal = function() {\n  goog.events.unlisten(\n      this.window_, goog.events.EventType.POPSTATE, this.onHistoryEvent_, false,\n      this);\n  if (this.useFragment_) {\n    goog.events.unlisten(\n        this.window_, goog.events.EventType.HASHCHANGE, this.onHistoryEvent_,\n        false, this);\n  }\n};\n\n\n/**\n * Sets whether to use the fragment to store tokens.\n * @param {boolean} useFragment Whether to use the fragment.\n */\ngoog.history.Html5History.prototype.setUseFragment = function(useFragment) {\n  if (this.useFragment_ != useFragment) {\n    if (useFragment) {\n      goog.events.listen(\n          this.window_, goog.events.EventType.HASHCHANGE, this.onHistoryEvent_,\n          false, this);\n    } else {\n      goog.events.unlisten(\n          this.window_, goog.events.EventType.HASHCHANGE, this.onHistoryEvent_,\n          false, this);\n    }\n    this.useFragment_ = useFragment;\n  }\n};\n\n\n/**\n * Sets the path prefix to use if storing tokens in the path. The path\n * prefix should start and end with slash.\n * @param {string} pathPrefix Sets the path prefix.\n */\ngoog.history.Html5History.prototype.setPathPrefix = function(pathPrefix) {\n  this.pathPrefix_ = pathPrefix;\n};\n\n\n/**\n * Gets the path prefix.\n * @return {string} The path prefix.\n */\ngoog.history.Html5History.prototype.getPathPrefix = function() {\n  return this.pathPrefix_;\n};\n\n\n/**\n * Gets the current hash fragment, if useFragment_ is enabled.\n * @return {?string} The hash fragment.\n * @private\n */\ngoog.history.Html5History.prototype.getFragment_ = function() {\n  if (this.useFragment_) {\n    var loc = this.window_.location.href;\n    var index = loc.indexOf('#');\n    return index < 0 ? '' : loc.substring(index + 1);\n  } else {\n    return null;\n  }\n};\n\n\n/**\n * Gets the URL to set when calling history.pushState\n * @param {string} token The history token.\n * @return {string} The URL.\n * @private\n */\ngoog.history.Html5History.prototype.getUrl_ = function(token) {\n  if (this.useFragment_) {\n    return '#' + token;\n  } else {\n    return this.transformer_ ?\n        this.transformer_.createUrl(\n            token, this.pathPrefix_, this.window_.location) :\n        this.pathPrefix_ + token + this.window_.location.search;\n  }\n};\n\n\n/**\n * Handles history events dispatched by the browser.\n * @param {goog.events.BrowserEvent} e The browser event object.\n * @private\n */\ngoog.history.Html5History.prototype.onHistoryEvent_ = function(e) {\n  if (this.enabled_) {\n    var fragment = this.getFragment_();\n    // Only fire NAVIGATE event if it's POPSTATE or if the fragment has changed\n    // without a POPSTATE event. The latter is an indication the browser doesn't\n    // support POPSTATE, and the event is a HASHCHANGE instead.\n    if (e.type == goog.events.EventType.POPSTATE ||\n        fragment != this.lastFragment_) {\n      this.lastFragment_ = fragment;\n      this.dispatchEvent(new goog.history.Event(this.getToken(), true));\n    }\n  }\n};\n\n\n\n/**\n * A token transformer that can create a URL from a history\n * token. This is used by `goog.history.Html5History` to create\n * URL when storing token without the hash fragment.\n *\n * Given a `window.location` object containing the location\n * created by `createUrl`, the token transformer allows\n * retrieval of the token back via `retrieveToken`.\n *\n * @interface\n */\ngoog.history.Html5History.TokenTransformer = function() {};\n\n\n/**\n * Retrieves a history token given the path prefix and\n * `window.location` object.\n *\n * @param {string} pathPrefix The path prefix to use when storing token\n *     in a path; always begin with a slash.\n * @param {Location} location The `window.location` object.\n *     Treat this object as read-only.\n * @return {string} token The history token.\n */\ngoog.history.Html5History.TokenTransformer.prototype.retrieveToken = function(\n    pathPrefix, location) {};\n\n\n/**\n * Creates a URL to be pushed into HTML5 history stack when storing\n * token without using hash fragment.\n *\n * @param {string} token The history token.\n * @param {string} pathPrefix The path prefix to use when storing token\n *     in a path; always begin with a slash.\n * @param {Location} location The `window.location` object.\n *     Treat this object as read-only.\n * @return {string} url The complete URL string from path onwards\n *     (without {@code protocol://host:port} part); must begin with a\n *     slash.\n */\ngoog.history.Html5History.TokenTransformer.prototype.createUrl = function(\n    token, pathPrefix, location) {};\n","~:compiled-at",1588185538790,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.history.html5history.js\",\n\"lineCount\":163,\n\"mappings\":\"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\",\n\"sources\":[\"goog/history/html5history.js\"],\n\"sourcesContent\":[\"// Copyright 2010 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview HTML5 based history implementation, compatible with\\n * goog.History.\\n *\\n * TODO(user): There should really be a history interface and multiple\\n * implementations.\\n *\\n */\\n\\n\\ngoog.provide('goog.history.Html5History');\\ngoog.provide('goog.history.Html5History.TokenTransformer');\\n\\ngoog.require('goog.asserts');\\ngoog.require('goog.events');\\ngoog.require('goog.events.EventTarget');\\ngoog.require('goog.events.EventType');\\ngoog.require('goog.history.Event');\\n\\n\\n\\n/**\\n * An implementation compatible with goog.History that uses the HTML5\\n * history APIs.\\n *\\n * @param {Window=} opt_win The window to listen/dispatch history events on.\\n * @param {goog.history.Html5History.TokenTransformer=} opt_transformer\\n *     The token transformer that is used to create URL from the token\\n *     when storing token without using hash fragment.\\n * @constructor\\n * @extends {goog.events.EventTarget}\\n * @final\\n */\\ngoog.history.Html5History = function(opt_win, opt_transformer) {\\n  goog.events.EventTarget.call(this);\\n  goog.asserts.assert(\\n      goog.history.Html5History.isSupported(opt_win),\\n      'HTML5 history is not supported.');\\n\\n  /**\\n   * The window object to use for history tokens.  Typically the top window.\\n   * @type {Window}\\n   * @private\\n   */\\n  this.window_ = opt_win || window;\\n\\n  /**\\n   * The token transformer that is used to create URL from the token\\n   * when storing token without using hash fragment.\\n   * @type {goog.history.Html5History.TokenTransformer}\\n   * @private\\n   */\\n  this.transformer_ = opt_transformer || null;\\n\\n  /**\\n   * The fragment of the last navigation. Used to eliminate duplicate/redundant\\n   * NAVIGATE events when a POPSTATE and HASHCHANGE event are triggered for the\\n   * same navigation (e.g., back button click).\\n   * @private {?string}\\n   */\\n  this.lastFragment_ = null;\\n\\n  goog.events.listen(\\n      this.window_, goog.events.EventType.POPSTATE, this.onHistoryEvent_, false,\\n      this);\\n  goog.events.listen(\\n      this.window_, goog.events.EventType.HASHCHANGE, this.onHistoryEvent_,\\n      false, this);\\n};\\ngoog.inherits(goog.history.Html5History, goog.events.EventTarget);\\n\\n\\n/**\\n * Returns whether Html5History is supported.\\n * @param {Window=} opt_win Optional window to check.\\n * @return {boolean} Whether html5 history is supported.\\n */\\ngoog.history.Html5History.isSupported = function(opt_win) {\\n  var win = opt_win || window;\\n  return !!(win.history && win.history.pushState);\\n};\\n\\n\\n/**\\n * Status of when the object is active and dispatching events.\\n * @type {boolean}\\n * @private\\n */\\ngoog.history.Html5History.prototype.enabled_ = false;\\n\\n\\n/**\\n * Whether to use the fragment to store the token, defaults to true.\\n * @type {boolean}\\n * @private\\n */\\ngoog.history.Html5History.prototype.useFragment_ = true;\\n\\n\\n/**\\n * If useFragment is false the path will be used, the path prefix will be\\n * prepended to all tokens. Defaults to '/'.\\n * @type {string}\\n * @private\\n */\\ngoog.history.Html5History.prototype.pathPrefix_ = '/';\\n\\n\\n/**\\n * Starts or stops the History.  When enabled, the History object\\n * will immediately fire an event for the current location. The caller can set\\n * up event listeners between the call to the constructor and the call to\\n * setEnabled.\\n *\\n * @param {boolean} enable Whether to enable history.\\n */\\ngoog.history.Html5History.prototype.setEnabled = function(enable) {\\n  if (enable == this.enabled_) {\\n    return;\\n  }\\n\\n  this.enabled_ = enable;\\n\\n  if (enable) {\\n    this.dispatchEvent(new goog.history.Event(this.getToken(), false));\\n  }\\n};\\n\\n\\n/**\\n * Returns the current token.\\n * @return {string} The current token.\\n */\\ngoog.history.Html5History.prototype.getToken = function() {\\n  if (this.useFragment_) {\\n    return goog.asserts.assertString(this.getFragment_());\\n  } else {\\n    return this.transformer_ ?\\n        this.transformer_.retrieveToken(\\n            this.pathPrefix_, this.window_.location) :\\n        this.window_.location.pathname.substr(this.pathPrefix_.length);\\n  }\\n};\\n\\n\\n/**\\n * Sets the history state.\\n * @param {string} token The history state identifier.\\n * @param {string=} opt_title Optional title to associate with history entry.\\n */\\ngoog.history.Html5History.prototype.setToken = function(token, opt_title) {\\n  if (token == this.getToken()) {\\n    return;\\n  }\\n\\n  // Per externs/gecko_dom.js document.title can be null.\\n  this.window_.history.pushState(\\n      null, opt_title || this.window_.document.title || '',\\n      this.getUrl_(token));\\n  this.dispatchEvent(new goog.history.Event(token, false));\\n};\\n\\n\\n/**\\n * Replaces the current history state without affecting the rest of the history\\n * stack.\\n * @param {string} token The history state identifier.\\n * @param {string=} opt_title Optional title to associate with history entry.\\n */\\ngoog.history.Html5History.prototype.replaceToken = function(token, opt_title) {\\n  // Per externs/gecko_dom.js document.title can be null.\\n  this.window_.history.replaceState(\\n      null, opt_title || this.window_.document.title || '',\\n      this.getUrl_(token));\\n  this.dispatchEvent(new goog.history.Event(token, false));\\n};\\n\\n\\n/** @override */\\ngoog.history.Html5History.prototype.disposeInternal = function() {\\n  goog.events.unlisten(\\n      this.window_, goog.events.EventType.POPSTATE, this.onHistoryEvent_, false,\\n      this);\\n  if (this.useFragment_) {\\n    goog.events.unlisten(\\n        this.window_, goog.events.EventType.HASHCHANGE, this.onHistoryEvent_,\\n        false, this);\\n  }\\n};\\n\\n\\n/**\\n * Sets whether to use the fragment to store tokens.\\n * @param {boolean} useFragment Whether to use the fragment.\\n */\\ngoog.history.Html5History.prototype.setUseFragment = function(useFragment) {\\n  if (this.useFragment_ != useFragment) {\\n    if (useFragment) {\\n      goog.events.listen(\\n          this.window_, goog.events.EventType.HASHCHANGE, this.onHistoryEvent_,\\n          false, this);\\n    } else {\\n      goog.events.unlisten(\\n          this.window_, goog.events.EventType.HASHCHANGE, this.onHistoryEvent_,\\n          false, this);\\n    }\\n    this.useFragment_ = useFragment;\\n  }\\n};\\n\\n\\n/**\\n * Sets the path prefix to use if storing tokens in the path. The path\\n * prefix should start and end with slash.\\n * @param {string} pathPrefix Sets the path prefix.\\n */\\ngoog.history.Html5History.prototype.setPathPrefix = function(pathPrefix) {\\n  this.pathPrefix_ = pathPrefix;\\n};\\n\\n\\n/**\\n * Gets the path prefix.\\n * @return {string} The path prefix.\\n */\\ngoog.history.Html5History.prototype.getPathPrefix = function() {\\n  return this.pathPrefix_;\\n};\\n\\n\\n/**\\n * Gets the current hash fragment, if useFragment_ is enabled.\\n * @return {?string} The hash fragment.\\n * @private\\n */\\ngoog.history.Html5History.prototype.getFragment_ = function() {\\n  if (this.useFragment_) {\\n    var loc = this.window_.location.href;\\n    var index = loc.indexOf('#');\\n    return index < 0 ? '' : loc.substring(index + 1);\\n  } else {\\n    return null;\\n  }\\n};\\n\\n\\n/**\\n * Gets the URL to set when calling history.pushState\\n * @param {string} token The history token.\\n * @return {string} The URL.\\n * @private\\n */\\ngoog.history.Html5History.prototype.getUrl_ = function(token) {\\n  if (this.useFragment_) {\\n    return '#' + token;\\n  } else {\\n    return this.transformer_ ?\\n        this.transformer_.createUrl(\\n            token, this.pathPrefix_, this.window_.location) :\\n        this.pathPrefix_ + token + this.window_.location.search;\\n  }\\n};\\n\\n\\n/**\\n * Handles history events dispatched by the browser.\\n * @param {goog.events.BrowserEvent} e The browser event object.\\n * @private\\n */\\ngoog.history.Html5History.prototype.onHistoryEvent_ = function(e) {\\n  if (this.enabled_) {\\n    var fragment = this.getFragment_();\\n    // Only fire NAVIGATE event if it's POPSTATE or if the fragment has changed\\n    // without a POPSTATE event. The latter is an indication the browser doesn't\\n    // support POPSTATE, and the event is a HASHCHANGE instead.\\n    if (e.type == goog.events.EventType.POPSTATE ||\\n        fragment != this.lastFragment_) {\\n      this.lastFragment_ = fragment;\\n      this.dispatchEvent(new goog.history.Event(this.getToken(), true));\\n    }\\n  }\\n};\\n\\n\\n\\n/**\\n * A token transformer that can create a URL from a history\\n * token. This is used by `goog.history.Html5History` to create\\n * URL when storing token without the hash fragment.\\n *\\n * Given a `window.location` object containing the location\\n * created by `createUrl`, the token transformer allows\\n * retrieval of the token back via `retrieveToken`.\\n *\\n * @interface\\n */\\ngoog.history.Html5History.TokenTransformer = function() {};\\n\\n\\n/**\\n * Retrieves a history token given the path prefix and\\n * `window.location` object.\\n *\\n * @param {string} pathPrefix The path prefix to use when storing token\\n *     in a path; always begin with a slash.\\n * @param {Location} location The `window.location` object.\\n *     Treat this object as read-only.\\n * @return {string} token The history token.\\n */\\ngoog.history.Html5History.TokenTransformer.prototype.retrieveToken = function(\\n    pathPrefix, location) {};\\n\\n\\n/**\\n * Creates a URL to be pushed into HTML5 history stack when storing\\n * token without using hash fragment.\\n *\\n * @param {string} token The history token.\\n * @param {string} pathPrefix The path prefix to use when storing token\\n *     in a path; always begin with a slash.\\n * @param {Location} location The `window.location` object.\\n *     Treat this object as read-only.\\n * @return {string} url The complete URL string from path onwards\\n *     (without {@code protocol://host:port} part); must begin with a\\n *     slash.\\n */\\ngoog.history.Html5History.TokenTransformer.prototype.createUrl = function(\\n    token, pathPrefix, location) {};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"history\",\"Html5History\",\"goog.history.Html5History\",\"opt_win\",\"opt_transformer\",\"events\",\"EventTarget\",\"call\",\"asserts\",\"assert\",\"isSupported\",\"window_\",\"window\",\"transformer_\",\"lastFragment_\",\"listen\",\"EventType\",\"POPSTATE\",\"onHistoryEvent_\",\"HASHCHANGE\",\"inherits\",\"goog.history.Html5History.isSupported\",\"win\",\"pushState\",\"prototype\",\"enabled_\",\"useFragment_\",\"pathPrefix_\",\"setEnabled\",\"goog.history.Html5History.prototype.setEnabled\",\"enable\",\"dispatchEvent\",\"Event\",\"getToken\",\"goog.history.Html5History.prototype.getToken\",\"assertString\",\"getFragment_\",\"retrieveToken\",\"location\",\"pathname\",\"substr\",\"length\",\"setToken\",\"goog.history.Html5History.prototype.setToken\",\"token\",\"opt_title\",\"document\",\"title\",\"getUrl_\",\"replaceToken\",\"goog.history.Html5History.prototype.replaceToken\",\"replaceState\",\"disposeInternal\",\"goog.history.Html5History.prototype.disposeInternal\",\"unlisten\",\"setUseFragment\",\"goog.history.Html5History.prototype.setUseFragment\",\"useFragment\",\"setPathPrefix\",\"goog.history.Html5History.prototype.setPathPrefix\",\"pathPrefix\",\"getPathPrefix\",\"goog.history.Html5History.prototype.getPathPrefix\",\"goog.history.Html5History.prototype.getFragment_\",\"loc\",\"href\",\"index\",\"indexOf\",\"substring\",\"goog.history.Html5History.prototype.getUrl_\",\"createUrl\",\"search\",\"goog.history.Html5History.prototype.onHistoryEvent_\",\"e\",\"fragment\",\"type\",\"TokenTransformer\",\"goog.history.Html5History.TokenTransformer\",\"goog.history.Html5History.TokenTransformer.prototype.retrieveToken\",\"goog.history.Html5History.TokenTransformer.prototype.createUrl\"]\n}\n"]