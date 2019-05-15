(function () {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var mainloop_min = createCommonjsModule(function (module) {
	  /**
	   * mainloop.js 1.0.3-20170529
	   *
	   * @author Isaac Sukin (http://www.isaacsukin.com/)
	   * @license MIT
	   */

	  !function (a) {
	    function b(a) {
	      if (x = q(b), !(a < e + l)) {
	        for (d += a - e, e = a, t(a, d), a > i + h && (f = g * j * 1e3 / (a - i) + (1 - g) * f, i = a, j = 0), j++, k = 0; d >= c;) {
	          if (u(c), d -= c, ++k >= 240) {
	            o = !0;break;
	          }
	        }v(d / c), w(f, o), o = !1;
	      }
	    }var c = 1e3 / 60,
	        d = 0,
	        e = 0,
	        f = 60,
	        g = .9,
	        h = 1e3,
	        i = 0,
	        j = 0,
	        k = 0,
	        l = 0,
	        m = !1,
	        n = !1,
	        o = !1,
	        p = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) ? window : a,
	        q = p.requestAnimationFrame || function () {
	      var a = Date.now(),
	          b,
	          d;return function (e) {
	        return b = Date.now(), d = Math.max(0, c - (b - a)), a = b + d, setTimeout(function () {
	          e(b + d);
	        }, d);
	      };
	    }(),
	        r = p.cancelAnimationFrame || clearTimeout,
	        s = function s() {},
	        t = s,
	        u = s,
	        v = s,
	        w = s,
	        x;a.MainLoop = { getSimulationTimestep: function getSimulationTimestep() {
	        return c;
	      }, setSimulationTimestep: function setSimulationTimestep(a) {
	        return c = a, this;
	      }, getFPS: function getFPS() {
	        return f;
	      }, getMaxAllowedFPS: function getMaxAllowedFPS() {
	        return 1e3 / l;
	      }, setMaxAllowedFPS: function setMaxAllowedFPS(a) {
	        return "undefined" == typeof a && (a = 1 / 0), 0 === a ? this.stop() : l = 1e3 / a, this;
	      }, resetFrameDelta: function resetFrameDelta() {
	        var a = d;return d = 0, a;
	      }, setBegin: function setBegin(a) {
	        return t = a || t, this;
	      }, setUpdate: function setUpdate(a) {
	        return u = a || u, this;
	      }, setDraw: function setDraw(a) {
	        return v = a || v, this;
	      }, setEnd: function setEnd(a) {
	        return w = a || w, this;
	      }, start: function start() {
	        return n || (n = !0, x = q(function (a) {
	          v(1), m = !0, e = a, i = a, j = 0, x = q(b);
	        })), this;
	      }, stop: function stop() {
	        return m = !1, n = !1, r(x), this;
	      }, isRunning: function isRunning() {
	        return m;
	      } }, null !== module && "object" == 'object' && (module.exports = a.MainLoop);
	  }(commonjsGlobal);
	  
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CoordinateError = function (_Error) {
	    _inherits(CoordinateError, _Error);

	    function CoordinateError(message) {
	        _classCallCheck(this, CoordinateError);

	        var _this = _possibleConstructorReturn(this, (CoordinateError.__proto__ || Object.getPrototypeOf(CoordinateError)).call(this, message));

	        _this.name = 'IntCoordinateError';
	        return _this;
	    }

	    return CoordinateError;
	}(Error);

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var IntCoordinate = function () {
	    function IntCoordinate(x, y) {
	        var nullPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	        _classCallCheck$1(this, IntCoordinate);

	        if (Number.isInteger(x) && Number.isInteger(y) || nullPosition == true) {
	            this.x = Number(x);
	            this.y = Number(y);
	            this.nullPosition = nullPosition;
	        } else {
	            throw new CoordinateError('Coordinates have to be integer values!');
	        }
	    }

	    _createClass(IntCoordinate, [{
	        key: 'coordinates',
	        get: function get() {
	            return {
	                x: this.x,
	                y: this.y
	            };
	        }
	    }]);

	    return IntCoordinate;
	}();

	var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Osztály a canvas elem API-jának absztrahálására.
	 */

	var CanvasWrapper = function () {
	    function CanvasWrapper(canvasDOMElement, width, height) {
	        _classCallCheck$2(this, CanvasWrapper);

	        if (canvasDOMElement == undefined || typeof canvasDOMElement.getContext != 'function') {
	            throw new Error('Cannot get render context of wrapped element.');
	        }
	        this.width = width;
	        this.height = height;
	        this._canvas = canvasDOMElement;

	        this._canvas.width = this.width;
	        this._canvas.height = this.height;

	        this._ctx = this._canvas.getContext('2d');
	        this._scene = [];

	        this.createRect.bind(this);
	        this.drawRect.bind(this);
	        this.renderScene.bind(this);
	    }

	    /**
	     * Téglalap reprezentáció létrehozása.
	     * @param {*} posX 
	     * @param {*} posY 
	     * @param {*} width 
	     * @param {*} height 
	     * @param {*} color 
	     */


	    _createClass$1(CanvasWrapper, [{
	        key: 'createRect',
	        value: function createRect() {
	            var posX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	            var posY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	            var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
	            var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;
	            var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'black';
	            var zindex = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

	            var rect = {
	                type: 'rect',
	                width: width,
	                height: height,
	                position: {
	                    x: posX,
	                    y: posY
	                },
	                color: color,
	                zindex: zindex
	            };
	            this._scene.push(rect);
	            return rect;
	        }
	    }, {
	        key: 'createCircle',
	        value: function createCircle() {
	            var posX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	            var posY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	            var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
	            var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'black';
	            var zindex = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

	            var circle = {
	                type: 'circle',
	                radius: radius,
	                startAngle: 0,
	                endAngle: 2 * Math.PI,
	                position: {
	                    x: posX,
	                    y: posY
	                },
	                color: color,
	                zindex: zindex
	            };
	            this._scene.push(circle);
	            return circle;
	        }

	        /**
	         * Téglalap kirajzolása
	         * @param {*téglalap reprezentáció} rect 
	         */

	    }, {
	        key: 'drawRect',
	        value: function drawRect(rect) {
	            if ((typeof rect === 'undefined' ? 'undefined' : _typeof$1(rect)) === 'object' && rect !== null) {
	                if (rect.type == 'rect') {
	                    this._ctx.fillStyle = rect.color;
	                    this._ctx.fillRect(rect.position.x, rect.position.y, rect.width, rect.height);
	                    return true;
	                }
	                return false;
	            }
	            return false;
	        }
	    }, {
	        key: 'drawCircle',
	        value: function drawCircle(circle) {

	            if ((typeof circle === 'undefined' ? 'undefined' : _typeof$1(circle)) === 'object' && circle !== null) {
	                if (circle.type === 'circle') {

	                    this._ctx.fillStyle = circle.color;
	                    this._ctx.beginPath();
	                    this._ctx.arc(circle.position.x, circle.position.y, circle.radius, circle.startAngle, circle.endAngle);
	                    this._ctx.closePath();
	                    this._ctx.fill();
	                    return true;
	                }
	                return false;
	            }
	            return false;
	        }

	        /**
	         * Színtér kirajzolása
	         */

	    }, {
	        key: 'renderScene',
	        value: function renderScene() {

	            this._ctx.clearRect(0, 0, this.width, this.height);
	            var zBufferedScene = this.sortSceneByZIndex(this._scene);
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = zBufferedScene[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var object = _step.value;

	                    switch (object.type) {
	                        case 'rect':
	                            this.drawRect(object);
	                            break;
	                        case 'circle':
	                            this.drawCircle(object);
	                            break;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'clearScene',
	        value: function clearScene() {
	            this._scene = [];
	        }
	    }, {
	        key: 'sortSceneByZIndex',
	        value: function sortSceneByZIndex(scene) {
	            var zBufferedScene = scene.sort(function (z1, z2) {
	                return z1 > z2;
	            });
	            return zBufferedScene;
	        }
	    }]);

	    return CanvasWrapper;
	}();

	function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Entity = function Entity() {
	    _classCallCheck$3(this, Entity);

	    if (new.target === Entity) {
	        throw new Error("Abstract class. Cannot be instantiated!");
	    }

	    if (this.update === void 0 || typeof this.update !== 'function') {
	        throw new Error("Abstract method 'update' must be overriden!");
	    }

	    if (this.reset === void 0 || typeof this.reset !== 'function') {
	        throw new Error("Abstract method 'reset' must be overriden!");
	    }
	};

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	var _listCacheClear = listCacheClear;

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || value !== value && other !== other;
	}

	var eq_1 = eq;

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq_1(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	var _assocIndexOf = assocIndexOf;

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	var _listCacheDelete = listCacheDelete;

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	var _listCacheGet = listCacheGet;

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return _assocIndexOf(this.__data__, key) > -1;
	}

	var _listCacheHas = listCacheHas;

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	var _listCacheSet = listCacheSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = _listCacheClear;
	ListCache.prototype['delete'] = _listCacheDelete;
	ListCache.prototype.get = _listCacheGet;
	ListCache.prototype.has = _listCacheHas;
	ListCache.prototype.set = _listCacheSet;

	var _ListCache = ListCache;

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new _ListCache();
	  this.size = 0;
	}

	var _stackClear = stackClear;

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	var _stackDelete = stackDelete;

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	var _stackGet = stackGet;

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	var _stackHas = stackHas;

	var _typeof$2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = _typeof$2(commonjsGlobal) == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	var _freeGlobal = freeGlobal;

	var _typeof$3 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/** Detect free variable `self`. */
	var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof$3(self)) == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = _freeGlobal || freeSelf || Function('return this')();

	var _root = root;

	/** Built-in value references. */
	var _Symbol2 = _root.Symbol;

	var _Symbol = _Symbol2;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	var _getRawTag = getRawTag;

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString$1 = objectProto$1.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString$1.call(value);
	}

	var _objectToString = objectToString;

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return symToStringTag$1 && symToStringTag$1 in Object(value) ? _getRawTag(value) : _objectToString(value);
	}

	var _baseGetTag = baseGetTag;

	var _typeof$4 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof$4(value);
	  return value != null && (type == 'object' || type == 'function');
	}

	var isObject_1 = isObject;

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject_1(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = _baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	var isFunction_1 = isFunction;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = _root['__core-js_shared__'];

	var _coreJsData = coreJsData;

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = function () {
	  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
	  return uid ? 'Symbol(src)_1.' + uid : '';
	}();

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && maskSrcKey in func;
	}

	var _isMasked = isMasked;

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return func + '';
	    } catch (e) {}
	  }
	  return '';
	}

	var _toSource = toSource;

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto$1 = Function.prototype,
	    objectProto$2 = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString$1 = funcProto$1.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' + funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject_1(value) || _isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(_toSource(value));
	}

	var _baseIsNative = baseIsNative;

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	var _getValue = getValue;

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = _getValue(object, key);
	  return _baseIsNative(value) ? value : undefined;
	}

	var _getNative = getNative;

	/* Built-in method references that are verified to be native. */
	var Map = _getNative(_root, 'Map');

	var _Map = Map;

	/* Built-in method references that are verified to be native. */
	var nativeCreate = _getNative(Object, 'create');

	var _nativeCreate = nativeCreate;

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
	  this.size = 0;
	}

	var _hashClear = hashClear;

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _hashDelete = hashDelete;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto$3 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (_nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
	}

	var _hashGet = hashGet;

	/** Used for built-in method references. */
	var objectProto$4 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return _nativeCreate ? data[key] !== undefined : hasOwnProperty$3.call(data, key);
	}

	var _hashHas = hashHas;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = _nativeCreate && value === undefined ? HASH_UNDEFINED$1 : value;
	  return this;
	}

	var _hashSet = hashSet;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = _hashClear;
	Hash.prototype['delete'] = _hashDelete;
	Hash.prototype.get = _hashGet;
	Hash.prototype.has = _hashHas;
	Hash.prototype.set = _hashSet;

	var _Hash = Hash;

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new _Hash(),
	    'map': new (_Map || _ListCache)(),
	    'string': new _Hash()
	  };
	}

	var _mapCacheClear = mapCacheClear;

	var _typeof$5 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof$5(value);
	  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
	}

	var _isKeyable = isKeyable;

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return _isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
	}

	var _getMapData = getMapData;

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = _getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _mapCacheDelete = mapCacheDelete;

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return _getMapData(this, key).get(key);
	}

	var _mapCacheGet = mapCacheGet;

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return _getMapData(this, key).has(key);
	}

	var _mapCacheHas = mapCacheHas;

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = _getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	var _mapCacheSet = mapCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = _mapCacheClear;
	MapCache.prototype['delete'] = _mapCacheDelete;
	MapCache.prototype.get = _mapCacheGet;
	MapCache.prototype.has = _mapCacheHas;
	MapCache.prototype.set = _mapCacheSet;

	var _MapCache = MapCache;

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof _ListCache) {
	    var pairs = data.__data__;
	    if (!_Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new _MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	var _stackSet = stackSet;

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new _ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = _stackClear;
	Stack.prototype['delete'] = _stackDelete;
	Stack.prototype.get = _stackGet;
	Stack.prototype.has = _stackHas;
	Stack.prototype.set = _stackSet;

	var _Stack = Stack;

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	var _arrayEach = arrayEach;

	var defineProperty = function () {
	  try {
	    var func = _getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}();

	var _defineProperty = defineProperty;

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && _defineProperty) {
	    _defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	var _baseAssignValue = baseAssignValue;

	/** Used for built-in method references. */
	var objectProto$5 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty$4.call(object, key) && eq_1(objValue, value)) || value === undefined && !(key in object)) {
	    _baseAssignValue(object, key, value);
	  }
	}

	var _assignValue = assignValue;

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      _baseAssignValue(object, key, newValue);
	    } else {
	      _assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	var _copyObject = copyObject;

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	var _baseTimes = baseTimes;

	var _typeof$6 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof$6(value)) == 'object';
	}

	var isObjectLike_1 = isObjectLike;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
	}

	var _baseIsArguments = baseIsArguments;

	/** Used for built-in method references. */
	var objectProto$6 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto$6.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = _baseIsArguments(function () {
	  return arguments;
	}()) ? _baseIsArguments : function (value) {
	  return isObjectLike_1(value) && hasOwnProperty$5.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	};

	var isArguments_1 = isArguments;

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	var isArray_1 = isArray;

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	var stubFalse_1 = stubFalse;

	var isBuffer_1 = createCommonjsModule(function (module, exports) {
	  /** Detect free variable `exports`. */
	  var freeExports = exports && !exports.nodeType && exports;

	  /** Detect free variable `module`. */
	  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	  /** Detect the popular CommonJS extension `module.exports`. */
	  var moduleExports = freeModule && freeModule.exports === freeExports;

	  /** Built-in value references. */
	  var Buffer = moduleExports ? _root.Buffer : undefined;

	  /* Built-in method references for those with the same name as other `lodash` methods. */
	  var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	  /**
	   * Checks if `value` is a buffer.
	   *
	   * @static
	   * @memberOf _
	   * @since 4.3.0
	   * @category Lang
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	   * @example
	   *
	   * _.isBuffer(new Buffer(2));
	   * // => true
	   *
	   * _.isBuffer(new Uint8Array(2));
	   * // => false
	   */
	  var isBuffer = nativeIsBuffer || stubFalse_1;

	  module.exports = isBuffer;
	});

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
	}

	var _isIndex = isIndex;

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER$1 = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
	}

	var isLength_1 = isLength;

	/** `Object#toString` result references. */
	var argsTag$1 = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag$1 = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	    return isObjectLike_1(value) && isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
	}

	var _baseIsTypedArray = baseIsTypedArray;

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function (value) {
	    return func(value);
	  };
	}

	var _baseUnary = baseUnary;

	var _nodeUtil = createCommonjsModule(function (module, exports) {
	  /** Detect free variable `exports`. */
	  var freeExports = exports && !exports.nodeType && exports;

	  /** Detect free variable `module`. */
	  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	  /** Detect the popular CommonJS extension `module.exports`. */
	  var moduleExports = freeModule && freeModule.exports === freeExports;

	  /** Detect free variable `process` from Node.js. */
	  var freeProcess = moduleExports && _freeGlobal.process;

	  /** Used to access faster Node.js helpers. */
	  var nodeUtil = function () {
	    try {
	      return freeProcess && freeProcess.binding && freeProcess.binding('util');
	    } catch (e) {}
	  }();

	  module.exports = nodeUtil;
	});

	/* Node.js helper references. */
	var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

	var isTypedArray_1 = isTypedArray;

	/** Used for built-in method references. */
	var objectProto$7 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray_1(value),
	      isArg = !isArr && isArguments_1(value),
	      isBuff = !isArr && !isArg && isBuffer_1(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? _baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty$6.call(value, key)) && !(skipIndexes && (
	    // Safari 9 has enumerable `arguments.length` in strict mode.
	    key == 'length' ||
	    // Node.js 0.10 has enumerable non-index properties on buffers.
	    isBuff && (key == 'offset' || key == 'parent') ||
	    // PhantomJS 2 has enumerable non-index properties on typed arrays.
	    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
	    // Skip index properties.
	    _isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _arrayLikeKeys = arrayLikeKeys;

	/** Used for built-in method references. */
	var objectProto$8 = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$8;

	  return value === proto;
	}

	var _isPrototype = isPrototype;

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function (arg) {
	    return func(transform(arg));
	  };
	}

	var _overArg = overArg;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = _overArg(Object.keys, Object);

	var _nativeKeys = nativeKeys;

	/** Used for built-in method references. */
	var objectProto$9 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!_isPrototype(object)) {
	    return _nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty$7.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _baseKeys = baseKeys;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength_1(value.length) && !isFunction_1(value);
	}

	var isArrayLike_1 = isArrayLike;

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
	}

	var keys_1 = keys;

	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && _copyObject(source, keys_1(source), object);
	}

	var _baseAssign = baseAssign;

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _nativeKeysIn = nativeKeysIn;

	/** Used for built-in method references. */
	var objectProto$a = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$8 = objectProto$a.hasOwnProperty;

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject_1(object)) {
	    return _nativeKeysIn(object);
	  }
	  var isProto = _isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty$8.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _baseKeysIn = baseKeysIn;

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn$1(object) {
	  return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
	}

	var keysIn_1 = keysIn$1;

	/**
	 * The base implementation of `_.assignIn` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssignIn(object, source) {
	  return object && _copyObject(source, keysIn_1(source), object);
	}

	var _baseAssignIn = baseAssignIn;

	var _cloneBuffer = createCommonjsModule(function (module, exports) {
	  /** Detect free variable `exports`. */
	  var freeExports = exports && !exports.nodeType && exports;

	  /** Detect free variable `module`. */
	  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	  /** Detect the popular CommonJS extension `module.exports`. */
	  var moduleExports = freeModule && freeModule.exports === freeExports;

	  /** Built-in value references. */
	  var Buffer = moduleExports ? _root.Buffer : undefined,
	      allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

	  /**
	   * Creates a clone of  `buffer`.
	   *
	   * @private
	   * @param {Buffer} buffer The buffer to clone.
	   * @param {boolean} [isDeep] Specify a deep clone.
	   * @returns {Buffer} Returns the cloned buffer.
	   */
	  function cloneBuffer(buffer, isDeep) {
	    if (isDeep) {
	      return buffer.slice();
	    }
	    var length = buffer.length,
	        result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

	    buffer.copy(result);
	    return result;
	  }

	  module.exports = cloneBuffer;
	});

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	var _copyArray = copyArray;

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	var _arrayFilter = arrayFilter;

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	var stubArray_1 = stubArray;

	/** Used for built-in method references. */
	var objectProto$b = Object.prototype;

	/** Built-in value references. */
	var propertyIsEnumerable$1 = objectProto$b.propertyIsEnumerable;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols ? stubArray_1 : function (object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return _arrayFilter(nativeGetSymbols(object), function (symbol) {
	    return propertyIsEnumerable$1.call(object, symbol);
	  });
	};

	var _getSymbols = getSymbols;

	/**
	 * Copies own symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return _copyObject(source, _getSymbols(source), object);
	}

	var _copySymbols = copySymbols;

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	var _arrayPush = arrayPush;

	/** Built-in value references. */
	var getPrototype = _overArg(Object.getPrototypeOf, Object);

	var _getPrototype = getPrototype;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own and inherited enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbolsIn = !nativeGetSymbols$1 ? stubArray_1 : function (object) {
	  var result = [];
	  while (object) {
	    _arrayPush(result, _getSymbols(object));
	    object = _getPrototype(object);
	  }
	  return result;
	};

	var _getSymbolsIn = getSymbolsIn;

	/**
	 * Copies own and inherited symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbolsIn(source, object) {
	  return _copyObject(source, _getSymbolsIn(source), object);
	}

	var _copySymbolsIn = copySymbolsIn;

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
	}

	var _baseGetAllKeys = baseGetAllKeys;

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return _baseGetAllKeys(object, keys_1, _getSymbols);
	}

	var _getAllKeys = getAllKeys;

	/**
	 * Creates an array of own and inherited enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeysIn(object) {
	  return _baseGetAllKeys(object, keysIn_1, _getSymbolsIn);
	}

	var _getAllKeysIn = getAllKeysIn;

	/* Built-in method references that are verified to be native. */
	var DataView = _getNative(_root, 'DataView');

	var _DataView = DataView;

	/* Built-in method references that are verified to be native. */
	var Promise = _getNative(_root, 'Promise');

	var _Promise = Promise;

	/* Built-in method references that are verified to be native. */
	var Set$1 = _getNative(_root, 'Set');

	var _Set = Set$1;

	/* Built-in method references that are verified to be native. */
	var WeakMap = _getNative(_root, 'WeakMap');

	var _WeakMap = WeakMap;

	/** `Object#toString` result references. */
	var mapTag$1 = '[object Map]',
	    objectTag$1 = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag$1 = '[object Set]',
	    weakMapTag$1 = '[object WeakMap]';

	var dataViewTag$1 = '[object DataView]';

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = _toSource(_DataView),
	    mapCtorString = _toSource(_Map),
	    promiseCtorString = _toSource(_Promise),
	    setCtorString = _toSource(_Set),
	    weakMapCtorString = _toSource(_WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = _baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if (_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$1 || _Map && getTag(new _Map()) != mapTag$1 || _Promise && getTag(_Promise.resolve()) != promiseTag || _Set && getTag(new _Set()) != setTag$1 || _WeakMap && getTag(new _WeakMap()) != weakMapTag$1) {
	    getTag = function getTag(value) {
	        var result = _baseGetTag(value),
	            Ctor = result == objectTag$1 ? value.constructor : undefined,
	            ctorString = Ctor ? _toSource(Ctor) : '';

	        if (ctorString) {
	            switch (ctorString) {
	                case dataViewCtorString:
	                    return dataViewTag$1;
	                case mapCtorString:
	                    return mapTag$1;
	                case promiseCtorString:
	                    return promiseTag;
	                case setCtorString:
	                    return setTag$1;
	                case weakMapCtorString:
	                    return weakMapTag$1;
	            }
	        }
	        return result;
	    };
	}

	var _getTag = getTag;

	/** Used for built-in method references. */
	var objectProto$c = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$9 = objectProto$c.hasOwnProperty;

	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = array.constructor(length);

	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty$9.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}

	var _initCloneArray = initCloneArray;

	/** Built-in value references. */
	var Uint8Array = _root.Uint8Array;

	var _Uint8Array = Uint8Array;

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
	  return result;
	}

	var _cloneArrayBuffer = cloneArrayBuffer;

	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? _cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}

	var _cloneDataView = cloneDataView;

	/**
	 * Adds the key-value `pair` to `map`.
	 *
	 * @private
	 * @param {Object} map The map to modify.
	 * @param {Array} pair The key-value pair to add.
	 * @returns {Object} Returns `map`.
	 */
	function addMapEntry(map, pair) {
	  // Don't return `map.set` because it's not chainable in IE 11.
	  map.set(pair[0], pair[1]);
	  return map;
	}

	var _addMapEntry = addMapEntry;

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	var _arrayReduce = arrayReduce;

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function (value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	var _mapToArray = mapToArray;

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1;

	/**
	 * Creates a clone of `map`.
	 *
	 * @private
	 * @param {Object} map The map to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned map.
	 */
	function cloneMap(map, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(_mapToArray(map), CLONE_DEEP_FLAG) : _mapToArray(map);
	  return _arrayReduce(array, _addMapEntry, new map.constructor());
	}

	var _cloneMap = cloneMap;

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;

	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}

	var _cloneRegExp = cloneRegExp;

	/**
	 * Adds `value` to `set`.
	 *
	 * @private
	 * @param {Object} set The set to modify.
	 * @param {*} value The value to add.
	 * @returns {Object} Returns `set`.
	 */
	function addSetEntry(set, value) {
	  // Don't return `set.add` because it's not chainable in IE 11.
	  set.add(value);
	  return set;
	}

	var _addSetEntry = addSetEntry;

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function (value) {
	    result[++index] = value;
	  });
	  return result;
	}

	var _setToArray = setToArray;

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG$1 = 1;

	/**
	 * Creates a clone of `set`.
	 *
	 * @private
	 * @param {Object} set The set to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned set.
	 */
	function cloneSet(set, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(_setToArray(set), CLONE_DEEP_FLAG$1) : _setToArray(set);
	  return _arrayReduce(array, _addSetEntry, new set.constructor());
	}

	var _cloneSet = cloneSet;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = _Symbol ? _Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}

	var _cloneSymbol = cloneSymbol;

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	var _cloneTypedArray = cloneTypedArray;

	/** `Object#toString` result references. */
	var boolTag$1 = '[object Boolean]',
	    dateTag$1 = '[object Date]',
	    mapTag$2 = '[object Map]',
	    numberTag$1 = '[object Number]',
	    regexpTag$1 = '[object RegExp]',
	    setTag$2 = '[object Set]',
	    stringTag$1 = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag$1 = '[object ArrayBuffer]',
	    dataViewTag$2 = '[object DataView]',
	    float32Tag$1 = '[object Float32Array]',
	    float64Tag$1 = '[object Float64Array]',
	    int8Tag$1 = '[object Int8Array]',
	    int16Tag$1 = '[object Int16Array]',
	    int32Tag$1 = '[object Int32Array]',
	    uint8Tag$1 = '[object Uint8Array]',
	    uint8ClampedTag$1 = '[object Uint8ClampedArray]',
	    uint16Tag$1 = '[object Uint16Array]',
	    uint32Tag$1 = '[object Uint32Array]';

	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, cloneFunc, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag$1:
	      return _cloneArrayBuffer(object);

	    case boolTag$1:
	    case dateTag$1:
	      return new Ctor(+object);

	    case dataViewTag$2:
	      return _cloneDataView(object, isDeep);

	    case float32Tag$1:case float64Tag$1:
	    case int8Tag$1:case int16Tag$1:case int32Tag$1:
	    case uint8Tag$1:case uint8ClampedTag$1:case uint16Tag$1:case uint32Tag$1:
	      return _cloneTypedArray(object, isDeep);

	    case mapTag$2:
	      return _cloneMap(object, isDeep, cloneFunc);

	    case numberTag$1:
	    case stringTag$1:
	      return new Ctor(object);

	    case regexpTag$1:
	      return _cloneRegExp(object);

	    case setTag$2:
	      return _cloneSet(object, isDeep, cloneFunc);

	    case symbolTag:
	      return _cloneSymbol(object);
	  }
	}

	var _initCloneByTag = initCloneByTag;

	/** Built-in value references. */
	var objectCreate = Object.create;

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = function () {
	  function object() {}
	  return function (proto) {
	    if (!isObject_1(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object();
	    object.prototype = undefined;
	    return result;
	  };
	}();

	var _baseCreate = baseCreate;

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return typeof object.constructor == 'function' && !_isPrototype(object) ? _baseCreate(_getPrototype(object)) : {};
	}

	var _initCloneObject = initCloneObject;

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG$2 = 1,
	    CLONE_FLAT_FLAG = 2,
	    CLONE_SYMBOLS_FLAG = 4;

	/** `Object#toString` result references. */
	var argsTag$2 = '[object Arguments]',
	    arrayTag$1 = '[object Array]',
	    boolTag$2 = '[object Boolean]',
	    dateTag$2 = '[object Date]',
	    errorTag$1 = '[object Error]',
	    funcTag$2 = '[object Function]',
	    genTag$1 = '[object GeneratorFunction]',
	    mapTag$3 = '[object Map]',
	    numberTag$2 = '[object Number]',
	    objectTag$2 = '[object Object]',
	    regexpTag$2 = '[object RegExp]',
	    setTag$3 = '[object Set]',
	    stringTag$2 = '[object String]',
	    symbolTag$1 = '[object Symbol]',
	    weakMapTag$2 = '[object WeakMap]';

	var arrayBufferTag$2 = '[object ArrayBuffer]',
	    dataViewTag$3 = '[object DataView]',
	    float32Tag$2 = '[object Float32Array]',
	    float64Tag$2 = '[object Float64Array]',
	    int8Tag$2 = '[object Int8Array]',
	    int16Tag$2 = '[object Int16Array]',
	    int32Tag$2 = '[object Int32Array]',
	    uint8Tag$2 = '[object Uint8Array]',
	    uint8ClampedTag$2 = '[object Uint8ClampedArray]',
	    uint16Tag$2 = '[object Uint16Array]',
	    uint32Tag$2 = '[object Uint32Array]';

	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag$2] = cloneableTags[arrayTag$1] = cloneableTags[arrayBufferTag$2] = cloneableTags[dataViewTag$3] = cloneableTags[boolTag$2] = cloneableTags[dateTag$2] = cloneableTags[float32Tag$2] = cloneableTags[float64Tag$2] = cloneableTags[int8Tag$2] = cloneableTags[int16Tag$2] = cloneableTags[int32Tag$2] = cloneableTags[mapTag$3] = cloneableTags[numberTag$2] = cloneableTags[objectTag$2] = cloneableTags[regexpTag$2] = cloneableTags[setTag$3] = cloneableTags[stringTag$2] = cloneableTags[symbolTag$1] = cloneableTags[uint8Tag$2] = cloneableTags[uint8ClampedTag$2] = cloneableTags[uint16Tag$2] = cloneableTags[uint32Tag$2] = true;
	cloneableTags[errorTag$1] = cloneableTags[funcTag$2] = cloneableTags[weakMapTag$2] = false;

	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Deep clone
	 *  2 - Flatten inherited properties
	 *  4 - Clone symbols
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, bitmask, customizer, key, object, stack) {
	  var result,
	      isDeep = bitmask & CLONE_DEEP_FLAG$2,
	      isFlat = bitmask & CLONE_FLAT_FLAG,
	      isFull = bitmask & CLONE_SYMBOLS_FLAG;

	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject_1(value)) {
	    return value;
	  }
	  var isArr = isArray_1(value);
	  if (isArr) {
	    result = _initCloneArray(value);
	    if (!isDeep) {
	      return _copyArray(value, result);
	    }
	  } else {
	    var tag = _getTag(value),
	        isFunc = tag == funcTag$2 || tag == genTag$1;

	    if (isBuffer_1(value)) {
	      return _cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag$2 || tag == argsTag$2 || isFunc && !object) {
	      result = isFlat || isFunc ? {} : _initCloneObject(value);
	      if (!isDeep) {
	        return isFlat ? _copySymbolsIn(value, _baseAssignIn(result, value)) : _copySymbols(value, _baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = _initCloneByTag(value, tag, baseClone, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new _Stack());
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);

	  var keysFunc = isFull ? isFlat ? _getAllKeysIn : _getAllKeys : isFlat ? keysIn : keys_1;

	  var props = isArr ? undefined : keysFunc(value);
	  _arrayEach(props || value, function (subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    _assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
	  });
	  return result;
	}

	var _baseClone = baseClone;

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG$3 = 1,
	    CLONE_SYMBOLS_FLAG$1 = 4;

	/**
	 * This method is like `_.clone` except that it recursively clones `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.0.0
	 * @category Lang
	 * @param {*} value The value to recursively clone.
	 * @returns {*} Returns the deep cloned value.
	 * @see _.clone
	 * @example
	 *
	 * var objects = [{ 'a': 1 }, { 'b': 2 }];
	 *
	 * var deep = _.cloneDeep(objects);
	 * console.log(deep[0] === objects[0]);
	 * // => false
	 */
	function cloneDeep(value) {
	  return _baseClone(value, CLONE_DEEP_FLAG$3 | CLONE_SYMBOLS_FLAG$1);
	}

	var cloneDeep_1 = cloneDeep;

	function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ConfigError = function (_Error) {
	    _inherits$1(ConfigError, _Error);

	    function ConfigError(message) {
	        _classCallCheck$4(this, ConfigError);

	        var _this = _possibleConstructorReturn$1(this, (ConfigError.__proto__ || Object.getPrototypeOf(ConfigError)).call(this, message));

	        _this.name = 'ConfigError';
	        return _this;
	    }

	    return ConfigError;
	}(Error);

	var counter = 0;
	function idGenerator() {
	    var id = 'id-' + counter++;
	    return id;
	}

	function EuclideanDistance(from, to) {
	    return Math.sqrt(Math.pow(from.coordinates.x - to.coordinates.x, 2) + Math.pow(from.coordinates.y - to.coordinates.y, 2));
	}

	var _createClass$2 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck$5(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn$2(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Board = function (_Entity) {
	    _inherits$2(Board, _Entity);

	    function Board(callbacks, config) {
	        _classCallCheck$5(this, Board);

	        var _this = _possibleConstructorReturn$2(this, (Board.__proto__ || Object.getPrototypeOf(Board)).call(this));

	        var parsedConfig = void 0;
	        try {
	            parsedConfig = _this.parseConfig(config);
	        } catch (e) {
	            if (typeof callbacks.propagateError == 'function') {
	                callbacks.propagateError(e);
	            } else {
	                throw e;
	            }
	        }

	        _this.state = {};
	        _this.state.ID = idGenerator();

	        Object.assign(_this.state, parsedConfig);
	        _this.callbacks = callbacks;
	        _this.config = config;
	        return _this;
	    }

	    _createClass$2(Board, [{
	        key: 'parseConfig',
	        value: function parseConfig(config) {
	            if (config.width == undefined || config.height == undefined || config.obstacles != undefined && typeof config.obstacles == 'function') {
	                throw new ConfigError('Missing fields in config or given obstacle field is not a list. Fields needed: width:integer, height: integer');
	            }
	            var parsedConfig = {};
	            parsedConfig.config = config;
	            parsedConfig.width = Number(config.width);
	            parsedConfig.height = Number(config.height);

	            var parsedObstacles = [];
	            if (config.obstacles) {
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = config.obstacles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var obstacle = _step.value;

	                        parsedObstacles.push(new IntCoordinate(Number(obstacle.position.x), Number(obstacle.position.y)));
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	            }

	            parsedConfig.obstacles = parsedObstacles;

	            return parsedConfig;
	        }
	    }, {
	        key: 'update',
	        value: function update() {}
	    }, {
	        key: 'reset',
	        value: function reset() {}
	    }, {
	        key: 'setState',
	        value: function setState(options) {
	            var nextState = this.state;
	            Object.assign(nextState, options);

	            this.state = nextState;
	        }
	    }, {
	        key: 'dimensions',
	        get: function get() {
	            return {
	                dimX: this.state.width,
	                dimY: this.state.height
	            };
	        }
	    }, {
	        key: 'ID',
	        get: function get() {
	            return this.state.ID;
	        }
	    }, {
	        key: 'obstacles',
	        get: function get() {
	            return this.state.obstacles;
	        }
	    }]);

	    return Board;
	}(Entity);

	function _classCallCheck$6(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ObserverEntity = function ObserverEntity() {
	    _classCallCheck$6(this, ObserverEntity);

	    if (new.target === ObserverEntity) {
	        throw new Error("Abstract class cannot be instantiated!");
	    }

	    if (this.update === void 0 || typeof this.update !== "function") {
	        throw new Error("Abstract method 'update' must be overriden!");
	    }

	    if (this.onNotify === void 0 || typeof this.onNotify !== "function") {
	        throw new Error("Abstract method 'onNotify' must be overriden!");
	    }

	    if (this.reset === void 0 || typeof this.reset !== 'function') {
	        throw new Error("Abstract method 'reset' must be overriden!");
	    }
	};

	function _classCallCheck$7(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Command = function Command() {
	    _classCallCheck$7(this, Command);

	    if (new.target === Command) {
	        throw new Error("Abstract class. Cannot be instantiated!");
	    }

	    if (this.execute === void 0 || typeof this.execute !== 'function') {
	        throw new Error("Abstract method 'execute' must be overriden!");
	    }
	};

	var _createClass$3 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck$8(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn$3(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LeftTurnCommand = function (_Command) {
	    _inherits$3(LeftTurnCommand, _Command);

	    function LeftTurnCommand() {
	        _classCallCheck$8(this, LeftTurnCommand);

	        return _possibleConstructorReturn$3(this, (LeftTurnCommand.__proto__ || Object.getPrototypeOf(LeftTurnCommand)).call(this));
	    }

	    _createClass$3(LeftTurnCommand, [{
	        key: 'execute',
	        value: function execute(snake) {
	            return snake.handleInput('LEFT');
	        }
	    }]);

	    return LeftTurnCommand;
	}(Command);

	var _createClass$4 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck$9(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn$4(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits$4(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RightTurnCommand = function (_Command) {
	    _inherits$4(RightTurnCommand, _Command);

	    function RightTurnCommand() {
	        _classCallCheck$9(this, RightTurnCommand);

	        return _possibleConstructorReturn$4(this, (RightTurnCommand.__proto__ || Object.getPrototypeOf(RightTurnCommand)).call(this));
	    }

	    _createClass$4(RightTurnCommand, [{
	        key: 'execute',
	        value: function execute(snake) {
	            return snake.handleInput('RIGHT');
	        }
	    }]);

	    return RightTurnCommand;
	}(Command);

	var _createClass$5 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck$a(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn$5(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits$5(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DownTurnCommand = function (_Command) {
	    _inherits$5(DownTurnCommand, _Command);

	    function DownTurnCommand() {
	        _classCallCheck$a(this, DownTurnCommand);

	        return _possibleConstructorReturn$5(this, (DownTurnCommand.__proto__ || Object.getPrototypeOf(DownTurnCommand)).call(this));
	    }

	    _createClass$5(DownTurnCommand, [{
	        key: 'execute',
	        value: function execute(snake) {
	            return snake.handleInput('DOWN');
	        }
	    }]);

	    return DownTurnCommand;
	}(Command);

	var _createClass$6 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck$b(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn$6(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits$6(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UpTurnCommand = function (_Command) {
	    _inherits$6(UpTurnCommand, _Command);

	    function UpTurnCommand() {
	        _classCallCheck$b(this, UpTurnCommand);

	        return _possibleConstructorReturn$6(this, (UpTurnCommand.__proto__ || Object.getPrototypeOf(UpTurnCommand)).call(this));
	    }

	    _createClass$6(UpTurnCommand, [{
	        key: 'execute',
	        value: function execute(snake) {
	            return snake.handleInput('UP');
	        }
	    }]);

	    return UpTurnCommand;
	}(Command);

	var _createClass$7 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck$c(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn$7(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits$7(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Snake = function (_ObserverEntity) {
	    _inherits$7(Snake, _ObserverEntity);

	    function Snake(callbacks, config, strategy, notifier) {
	        _classCallCheck$c(this, Snake);

	        var _this = _possibleConstructorReturn$7(this, (Snake.__proto__ || Object.getPrototypeOf(Snake)).call(this));

	        var parsedConfig = void 0;
	        try {
	            parsedConfig = _this.parseConfig(config);
	        } catch (e) {
	            if (typeof callbacks.propagateError == 'function') {
	                callbacks.propagateError(e);
	            } else {
	                throw e;
	            }
	        }

	        _this.state = {};
	        _this.state.ID = idGenerator();
	        _this.state.velocity = {
	            x: 0,
	            y: 0
	        };
	        _this.state.notificationBuffer = [];
	        _this.state.status = "ALIVE";
	        _this.state.strategy = strategy;
	        _this.state.path = [];
	        _this.state.target = undefined;
	        Object.assign(_this.state, parsedConfig);

	        _this.config = config;
	        _this.timer = new Date();
	        _this.callbacks = callbacks;
	        if (notifier) {
	            _this.notifier = notifier;
	            notifier.subscribe(_this);
	        }
	        return _this;
	    }

	    _createClass$7(Snake, [{
	        key: 'parseConfig',
	        value: function parseConfig(config) {
	            if (config.startDirection == undefined || config.startVelocity == undefined || config.startX == undefined || config.startY == undefined || config.baseLength == undefined || config.limitX == undefined || config.limitY == undefined) {
	                throw new ConfigError('Missing configuration or missing fields in configuration. Needed fields: startdirection: (LEFT | RIGHT | UP | DOWN), startVelocity: integer, startX: integer, startY:integer, baseLength: integer, limitX: integer, limitY: integer');
	            }
	            var parsedConfig = {};
	            parsedConfig.body = [];
	            parsedConfig.direction = config.startDirection;
	            parsedConfig.baseVelocity = Number(config.startVelocity);
	            parsedConfig.limits = {
	                x: Number(config.limitX),
	                y: Number(config.limitY)
	            };
	            for (var i = 0; i < config.baseLength; ++i) {
	                parsedConfig.body[i] = new IntCoordinate(Number(config.startX), Number(config.startY));
	            }
	            if (config.color) {
	                parsedConfig.color = config.color;
	            } else {
	                parsedConfig.color = 'green';
	            }

	            return parsedConfig;
	        }
	    }, {
	        key: 'update',
	        value: function update() {
	            var nextState = {};
	            var nextDirection = void 0;
	            var nextVelocity = void 0;
	            var nextBody = void 0;
	            var commandResult = void 0;
	            var nextStep = void 0;
	            var path = void 0;
	            var command = void 0;
	            var notifier = this.notifier;

	            if (this.isAlive()) {
	                path = this.calculatePath();
	                if (path && path.length > 1) {
	                    command = this.calculateCommand(this.head, path[1]);
	                }

	                command = command;
	                if (command) {
	                    commandResult = command.execute(this);
	                }

	                nextDirection = commandResult || this.direction;
	                nextVelocity = this.calculateVelocity(nextDirection);
	                nextBody = this.move(nextVelocity.x, nextVelocity.y);
	                nextStep = nextBody[0];
	                if (notifier) {
	                    notifier.calculateStepCollisionType(nextStep, this.ID);
	                }
	                Object.assign(nextState, {
	                    direction: nextDirection,
	                    body: nextBody,
	                    velocity: nextVelocity,
	                    path: path
	                });
	                var notificationBuffer = this.state.notificationBuffer;
	                var notification = notificationBuffer.pop();
	                while (notification) {
	                    this.processNotification(notification, nextState);
	                    notification = notificationBuffer.pop();
	                }
	                if (this.isAlive()) {
	                    this.setState(nextState);
	                }
	            }
	        }
	    }, {
	        key: 'reset',
	        value: function reset() {
	            var parsedConfig = this.parseConfig(this.config);
	            var nextState = {
	                velocity: {
	                    x: 0,
	                    y: 0
	                },
	                status: "ALIVE",
	                target: undefined
	            };
	            Object.assign(nextState, parsedConfig);
	            this.setState(nextState);
	        }
	    }, {
	        key: 'die',
	        value: function die() {
	            this.setState({
	                status: 'DEAD'
	            });
	        }
	    }, {
	        key: 'onNotify',
	        value: function onNotify(entity, event) {
	            var eventType = event.type;
	            switch (eventType) {
	                case 'PILL_COLLISION':
	                    {
	                        if (entity.ID == this.ID) {
	                            var storedNotification = {
	                                type: eventType,
	                                payload: {
	                                    entity: entity,
	                                    pill: event.pill
	                                }
	                            };
	                            this.storeNotification(storedNotification);
	                        }
	                        break;
	                    }
	                case 'WALL_COLLISION':
	                    {
	                        if (entity.ID == this.ID) {
	                            var _storedNotification = {
	                                type: eventType,
	                                payload: {
	                                    entity: entity
	                                }
	                            };
	                            this.storeNotification(_storedNotification);
	                        }
	                        break;
	                    }
	                case 'BODY_COLLISION':
	                    {
	                        if (entity.ID == this.ID) {
	                            var _storedNotification2 = {
	                                type: eventType,
	                                payload: {
	                                    entity: entity
	                                }
	                            };
	                            this.storeNotification(_storedNotification2);
	                        }

	                        break;
	                    }
	                case 'TARGET_REACHED':
	                    {
	                        if (entity.ID == this.ID) {
	                            var _storedNotification3 = {
	                                type: eventType,
	                                payload: {
	                                    entity: entity
	                                }
	                            };
	                            this.storeNotification(_storedNotification3);
	                        }
	                        break;
	                    }
	            }
	        }
	    }, {
	        key: 'processNotification',
	        value: function processNotification(notification, nextState) {
	            var _nextState$body;

	            var notificationResult = {};
	            var payload = notification.payload;
	            switch (notification.type) {
	                case 'PILL_COLLISION':
	                    var result = this.eat(payload.pill.pillValue);
	                    (_nextState$body = nextState.body).push.apply(_nextState$body, _toConsumableArray(result));
	                    break;
	                case 'WALL_COLLISION':
	                    this.die();
	                    break;
	                case 'BODY_COLLISION':
	                    this.die();
	                    break;
	                case 'TARGET_REACHED':
	                    nextState.target = undefined;
	                    break;
	            }
	            return notificationResult;
	        }
	    }, {
	        key: 'setState',
	        value: function setState(options) {
	            var nextState = cloneDeep_1(this.state);
	            Object.assign(nextState, options);

	            this.state = nextState;
	        }
	    }, {
	        key: 'handleInput',
	        value: function handleInput(direction) {
	            if (!this.isOppositeDirection(direction)) {
	                return direction;
	            }
	            return undefined;
	        }
	    }, {
	        key: 'move',
	        value: function move(velocityX, velocityY) {
	            var nextBody = cloneDeep_1(this.body);

	            nextBody.pop();
	            var nextHead = this.calculateNextHead(velocityX, velocityY);
	            nextBody.unshift(nextHead);

	            return nextBody;
	        }
	    }, {
	        key: 'storeNotification',
	        value: function storeNotification(notification) {
	            if (notification.type == undefined || notification.payload == undefined) {
	                return false;
	            } else {
	                this.state.notificationBuffer.unshift(notification);
	                return true;
	            }
	        }
	    }, {
	        key: 'calculateVelocity',
	        value: function calculateVelocity(direction) {
	            var nextVelocity = {};
	            switch (direction) {
	                case 'RIGHT':
	                    nextVelocity.x = this.state.baseVelocity;
	                    nextVelocity.y = 0;
	                    break;
	                case 'LEFT':
	                    nextVelocity.x = -this.state.baseVelocity;
	                    nextVelocity.y = 0;
	                    break;
	                case 'DOWN':
	                    nextVelocity.x = 0;
	                    nextVelocity.y = this.state.baseVelocity;
	                    break;
	                case 'UP':
	                    nextVelocity.x = 0;
	                    nextVelocity.y = -this.state.baseVelocity;
	                    break;
	            }            return nextVelocity;
	        }
	    }, {
	        key: 'calculateNextHead',
	        value: function calculateNextHead(velocityX, velocityY) {
	            var head = this.head;
	            var nextPosX = head.coordinates.x + velocityX;
	            var nextPosY = head.coordinates.y + velocityY;
	            var limits = this.state.limits;

	            if (nextPosX < 0 || nextPosX >= limits.x || nextPosY < 0 || nextPosY >= limits.y) {
	                return new IntCoordinate(nextPosX, nextPosY, true);
	            }
	            return new IntCoordinate(nextPosX, nextPosY);
	        }
	    }, {
	        key: 'calculateCommand',
	        value: function calculateCommand(from, to) {
	            var fromX = from.coordinates.x;
	            var fromY = from.coordinates.y;
	            var toX = to.coordinates.x;
	            var toY = to.coordinates.y;
	            var currDirection = this.direction;

	            if (fromX - toX > 0 && !(currDirection == 'RIGHT')) {
	                return new LeftTurnCommand();
	            }
	            if (fromX - toX < 0 && !(currDirection == 'LEFT')) {
	                return new RightTurnCommand();
	            }
	            if (fromY - toY > 0 && !(currDirection == 'DOWN')) {
	                return new UpTurnCommand();
	            }
	            if (fromY - toY < 0 && !(currDirection == 'UP')) {
	                return new DownTurnCommand();
	            }
	            return undefined;
	        }
	    }, {
	        key: 'eat',
	        value: function eat(gain) {
	            var additionalNodes = [];
	            var tailNode = this.body[this.bodyLength - 1];
	            var tailNodeCoordinates = tailNode.coordinates;
	            for (var i = 0; i < gain; i++) {
	                additionalNodes.push(new IntCoordinate(tailNodeCoordinates.x, tailNodeCoordinates.y));
	            }

	            return additionalNodes;
	        }
	    }, {
	        key: 'calculatePath',
	        value: function calculatePath() {
	            var strategy = this.state.strategy;
	            var path = [];
	            if (strategy) {
	                if (typeof strategy.calculateTarget == 'function') {
	                    if (this.state.target == undefined) {
	                        var target = strategy.calculateTarget(this);
	                        this.setState({
	                            target: target
	                        });
	                    }
	                }
	                if (typeof strategy.pathfinder == 'function') {
	                    var startTime = this.timer.getTime();
	                    path = strategy.pathfinder(this);
	                    var endTime = this.timer.getTime();
	                    this.timer.get;
	                    var runtime = endTime - startTime;
	                    this.callbacks.propagateRuntime(this.ID, runtime);
	                }
	            }
	            return path;
	        }
	    }, {
	        key: 'isOppositeDirection',
	        value: function isOppositeDirection(direction) {
	            if (this.state.direction === 'RIGHT' && direction === 'LEFT') {
	                return true;
	            } else if (this.state.direction === 'LEFT' && direction === 'RIGHT') {
	                return true;
	            } else if (this.state.direction === 'UP' && direction === 'DOWN') {
	                return true;
	            } else if (this.state.direction === 'DOWN' && direction === 'UP') {
	                return true;
	            }
	            return false;
	        }
	    }, {
	        key: 'isAlive',
	        value: function isAlive() {
	            return this.state.status === 'ALIVE';
	        }
	    }, {
	        key: 'bodyLength',
	        get: function get() {
	            return this.state.body.length;
	        }
	    }, {
	        key: 'endOfBody',
	        get: function get() {
	            return this.body[this.bodyLength - 1];
	        }
	    }, {
	        key: 'body',
	        get: function get() {
	            return this.state.body;
	        }
	    }, {
	        key: 'baseVelocity',
	        get: function get() {
	            return this.state.baseVelocity;
	        }
	    }, {
	        key: 'head',
	        get: function get() {
	            return this.body[0];
	        }
	    }, {
	        key: 'direction',
	        get: function get() {
	            return this.state.direction;
	        }
	    }, {
	        key: 'status',
	        get: function get() {
	            return this.state.status;
	        }
	    }, {
	        key: 'target',
	        get: function get() {
	            return this.state.target;
	        }
	    }, {
	        key: 'tail',
	        get: function get() {
	            return this.body.slice(1);
	        }
	    }, {
	        key: 'ID',
	        get: function get() {
	            return this.state.ID;
	        }
	    }, {
	        key: 'path',
	        get: function get() {
	            return this.state.path;
	        }
	    }, {
	        key: 'color',
	        get: function get() {
	            return this.state.color;
	        }
	    }]);

	    return Snake;
	}(ObserverEntity);

	var _createClass$8 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _toConsumableArray$1(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck$d(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn$8(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits$8(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Pill = function (_ObserverEntity) {
	    _inherits$8(Pill, _ObserverEntity);

	    function Pill(callbacks, config, notifier) {
	        _classCallCheck$d(this, Pill);

	        var _this = _possibleConstructorReturn$8(this, (Pill.__proto__ || Object.getPrototypeOf(Pill)).call(this));

	        var parsedConfig = void 0;
	        try {
	            parsedConfig = _this.parseConfig(config);
	        } catch (e) {
	            if (typeof callbacks.propagateError == 'function') {
	                callbacks.propagateError(e);
	            } else {
	                throw e;
	            }
	        }

	        _this.state = {};
	        _this.state.ID = idGenerator();

	        _this.callbacks = callbacks;
	        _this.config = config;

	        Object.assign(_this.state, parsedConfig);

	        if (notifier) {
	            _this.notifier = notifier;
	            notifier.subscribe(_this);
	        }
	        return _this;
	    }

	    _createClass$8(Pill, [{
	        key: 'parseConfig',
	        value: function parseConfig(config) {
	            if (config == undefined || config.pillValue == undefined || config.startPosX == undefined || config.startPosY == undefined || config.limitX == undefined || config.limitY == undefined) {
	                throw new ConfigError('Missing config or missing fields in config. Fields needed: pillValue: integer, startPosX: Integer, startPosY: Integer.');
	            }

	            var parsedConfig = {};
	            parsedConfig.pillValue = Number(config.pillValue);
	            parsedConfig.position = new IntCoordinate(Number(config.startPosX), Number(config.startPosY));
	            parsedConfig.limits = {};
	            parsedConfig.limits.x = Number(config.limitX);
	            parsedConfig.limits.y = Number(config.limitY);

	            if (config.color) {
	                parsedConfig.color = config.color;
	            } else {
	                parsedConfig.color = 'red';
	            }

	            return parsedConfig;
	        }
	    }, {
	        key: 'update',
	        value: function update() {}
	    }, {
	        key: 'setState',
	        value: function setState(options) {
	            var nextState = cloneDeep_1(this.state);
	            Object.assign(nextState, options);

	            this.state = nextState;
	        }
	    }, {
	        key: 'reset',
	        value: function reset() {
	            var parsedConfig = this.parseConfig(this.config);

	            this.setState({
	                position: parsedConfig.position,
	                pillValue: parsedConfig.pillValue
	            });
	        }
	    }, {
	        key: 'onNotify',
	        value: function onNotify(entity, event) {
	            switch (event.type) {
	                case 'PILL_COLLISION':
	                    var newPosition = this.calculateNewRandomPosition();
	                    this.setState({
	                        position: newPosition
	                    });
	                    break;
	            }
	        }
	    }, {
	        key: 'calculateNewRandomPosition',
	        value: function calculateNewRandomPosition() {
	            var limitX = this.state.limits.x;
	            var limitY = this.state.limits.x;
	            var snakes = this.callbacks.getEntityList().snakes;
	            var obstacles = this.callbacks.getEntityList().board.obstacles;
	            var appendedSnakeBodies = [];

	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = snakes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var snake = _step.value;

	                    appendedSnakeBodies.push.apply(appendedSnakeBodies, _toConsumableArray$1(snake.body));
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }

	            if (appendedSnakeBodies.length + obstacles.length >= limitX * limitY) {
	                return new IntCoordinate(undefined, undefined, true);
	            } else {
	                var freePositions = this.calculateFreePositions(appendedSnakeBodies, obstacles);
	                var randomPosIndex = Math.trunc(Math.random() * (freePositions.length - 1));
	                var randomPosition = freePositions[randomPosIndex];
	                return new IntCoordinate(randomPosition.x, randomPosition.y);
	            }
	        }
	    }, {
	        key: 'calculateFreePositions',
	        value: function calculateFreePositions(snakeBody, obstacles) {
	            var limitX = this.state.limits.x;
	            var limitY = this.state.limits.x;
	            var positions = [];
	            for (var i = 0; i < limitX; i++) {
	                for (var j = 0; j < limitY; j++) {
	                    positions.push({
	                        x: i,
	                        y: j
	                    });
	                }
	            }
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	                for (var _iterator2 = snakeBody[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var node = _step2.value;

	                    var index = node.coordinates.x * limitX + node.coordinates.y;
	                    positions.splice(index, 1);
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }

	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;

	            try {
	                for (var _iterator3 = obstacles[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var obstacle = _step3.value;

	                    var index = obstacle.coordinates.x * limitX + obstacle.coordinates.y;
	                    positions.splice(index, 1);
	                }
	            } catch (err) {
	                _didIteratorError3 = true;
	                _iteratorError3 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                        _iterator3.return();
	                    }
	                } finally {
	                    if (_didIteratorError3) {
	                        throw _iteratorError3;
	                    }
	                }
	            }

	            return positions;
	        }
	    }, {
	        key: 'position',
	        get: function get() {
	            return this.state.position;
	        }
	    }, {
	        key: 'pillValue',
	        get: function get() {
	            return this.state.pillValue;
	        }
	    }, {
	        key: 'ID',
	        get: function get() {
	            return this.state.ID;
	        }
	    }, {
	        key: 'color',
	        get: function get() {
	            return this.state.color;
	        }
	    }]);

	    return Pill;
	}(ObserverEntity);

	function _classCallCheck$e(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Subject = function Subject() {
	    _classCallCheck$e(this, Subject);

	    if (new.target === Subject) {
	        throw new Error("Abstract class. Cannot be instantiated!");
	    }
	    if (this.subscribe === void 0 || typeof this.subscribe !== "function") {
	        throw new Error("Abstract method 'addObserver' must be overriden!");
	    }

	    if (this.unsubscribe === void 0 || typeof this.unsubscribe !== "function") {
	        throw new Error("Abstract method 'unsubscribe' must be overriden!");
	    }
	};

	var _createClass$9 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck$f(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn$9(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits$9(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Notifier = function (_Subject) {
	    _inherits$9(Notifier, _Subject);

	    function Notifier(callbacks) {
	        _classCallCheck$f(this, Notifier);

	        var _this = _possibleConstructorReturn$9(this, (Notifier.__proto__ || Object.getPrototypeOf(Notifier)).call(this));

	        _this.observers = new Set();
	        _this.callbacks = callbacks;
	        _this.lastNodeBuffer = {};

	        _this.subscribe = _this.subscribe.bind(_this);
	        return _this;
	    }

	    _createClass$9(Notifier, [{
	        key: 'calculateStepCollisionType',
	        value: function calculateStepCollisionType(nextStep, callerID) {
	            var _this2 = this;

	            var snakes = this.callbacks.getEntityList().snakes;
	            var board = this.callbacks.getEntityList().board;
	            var pills = this.callbacks.getEntityList().pills;
	            var callerSnake = this.callbacks.getEntityByID(callerID);

	            this.storeLastNode(callerID, callerSnake.endOfBody);

	            if (board) {
	                if (nextStep.nullPosition == true) {
	                    // console.log('<---------------WALL_COLLISION_ACITON--------------->');
	                    this.observers.forEach(function (observer) {
	                        var caller = _this2.callbacks.getEntityByID(callerID);
	                        observer.onNotify(caller, {
	                            type: "WALL_COLLISION"
	                        });
	                    });
	                } else {
	                    var obstacles = board.obstacles;
	                    var _iteratorNormalCompletion = true;
	                    var _didIteratorError = false;
	                    var _iteratorError = undefined;

	                    try {
	                        for (var _iterator = obstacles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                            var obstacle = _step.value;

	                            if (obstacle.coordinates.x == nextStep.coordinates.x && obstacle.coordinates.y == nextStep.coordinates.y) {
	                                // console.log('<---------------WALL_COLLISION_ACITON--------------->');
	                                this.observers.forEach(function (observer) {
	                                    var caller = _this2.callbacks.getEntityByID(callerID);
	                                    observer.onNotify(caller, {
	                                        type: "WALL_COLLISION"
	                                    });
	                                });
	                            }
	                        }
	                    } catch (err) {
	                        _didIteratorError = true;
	                        _iteratorError = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion && _iterator.return) {
	                                _iterator.return();
	                            }
	                        } finally {
	                            if (_didIteratorError) {
	                                throw _iteratorError;
	                            }
	                        }
	                    }
	                }
	            }

	            var _loop = function _loop(pill) {
	                if (pill.position.coordinates != undefined) {
	                    if (pill.position.coordinates.x === nextStep.coordinates.x && pill.position.coordinates.y === nextStep.coordinates.y) {
	                        // console.log('<---------------PILL_COLLISION_ACITON--------------->');
	                        _this2.observers.forEach(function (observer) {
	                            var caller = _this2.callbacks.getEntityByID(callerID);
	                            observer.onNotify(caller, {
	                                type: 'PILL_COLLISION',
	                                pill: pill
	                            });
	                        });
	                    }
	                }
	            };

	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	                for (var _iterator2 = pills[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var pill = _step2.value;

	                    _loop(pill);
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }

	            if (callerSnake.target && callerSnake.target.coordinates != undefined) {
	                if (callerSnake.target && callerSnake.target.coordinates.x === nextStep.coordinates.x && callerSnake.target.coordinates.y === nextStep.coordinates.y) {
	                    // console.log('<---------------TARGET_REACHED--------------->');
	                    this.observers.forEach(function (observer) {
	                        observer.onNotify(callerSnake, {
	                            type: 'TARGET_REACHED'
	                        });
	                    });
	                }
	            }

	            var lastNodes = {};
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;

	            try {
	                for (var _iterator3 = snakes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var snake = _step3.value;

	                    lastNodes[snake.ID] = snake.endOfBody;
	                }
	            } catch (err) {
	                _didIteratorError3 = true;
	                _iteratorError3 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                        _iterator3.return();
	                    }
	                } finally {
	                    if (_didIteratorError3) {
	                        throw _iteratorError3;
	                    }
	                }
	            }

	            Object.assign(lastNodes, this.lastNodeBuffer);
	            var includes = false;
	            var _iteratorNormalCompletion4 = true;
	            var _didIteratorError4 = false;
	            var _iteratorError4 = undefined;

	            try {
	                for (var _iterator4 = Object.keys(lastNodes)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                    var key = _step4.value;

	                    includes = includes || lastNodes[key].coordinates.x == nextStep.coordinates.x && lastNodes[key].coordinates.y == nextStep.coordinates.y;
	                }
	            } catch (err) {
	                _didIteratorError4 = true;
	                _iteratorError4 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                        _iterator4.return();
	                    }
	                } finally {
	                    if (_didIteratorError4) {
	                        throw _iteratorError4;
	                    }
	                }
	            }

	            if (!includes) {
	                var _iteratorNormalCompletion5 = true;
	                var _didIteratorError5 = false;
	                var _iteratorError5 = undefined;

	                try {
	                    for (var _iterator5 = snakes[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	                        var _snake = _step5.value;
	                        var _iteratorNormalCompletion6 = true;
	                        var _didIteratorError6 = false;
	                        var _iteratorError6 = undefined;

	                        try {
	                            for (var _iterator6 = _snake.body[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	                                var node = _step6.value;

	                                if (nextStep.coordinates.x === node.coordinates.x && nextStep.coordinates.y === node.coordinates.y) {
	                                    // console.log('<---------------BODY_COLLISION_ACITON--------------->');
	                                    this.observers.forEach(function (observer) {
	                                        var caller = _this2.callbacks.getEntityByID(callerID);
	                                        observer.onNotify(caller, {
	                                            type: 'BODY_COLLISION'
	                                        });
	                                    });
	                                    break;
	                                }
	                            }
	                        } catch (err) {
	                            _didIteratorError6 = true;
	                            _iteratorError6 = err;
	                        } finally {
	                            try {
	                                if (!_iteratorNormalCompletion6 && _iterator6.return) {
	                                    _iterator6.return();
	                                }
	                            } finally {
	                                if (_didIteratorError6) {
	                                    throw _iteratorError6;
	                                }
	                            }
	                        }
	                    }
	                } catch (err) {
	                    _didIteratorError5 = true;
	                    _iteratorError5 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion5 && _iterator5.return) {
	                            _iterator5.return();
	                        }
	                    } finally {
	                        if (_didIteratorError5) {
	                            throw _iteratorError5;
	                        }
	                    }
	                }
	            }

	            if (snakes.length == Object.keys(this.lastNodeBuffer).length) {
	                this.lastNodeBuffer = {};
	            }
	        }
	    }, {
	        key: 'subscribe',
	        value: function subscribe(observer) {
	            if (observer instanceof ObserverEntity) {
	                this.observers.add(observer);
	                return true;
	            }
	            return false;
	        }
	    }, {
	        key: 'unsubscribe',
	        value: function unsubscribe(observer) {
	            this.observers.delete(observer);
	        }
	    }, {
	        key: 'storeLastNode',
	        value: function storeLastNode(ID, lastNode) {
	            if (ID && lastNode instanceof IntCoordinate) {
	                this.lastNodeBuffer[ID] = lastNode;
	                return true;
	            }
	            return false;
	        }
	    }]);

	    return Notifier;
	}(Subject);

	var _typeof$7 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass$a = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck$g(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Model = function () {
	    function Model(config, strategies) {
	        _classCallCheck$g(this, Model);

	        this.getEntityList = this.getEntityList.bind(this);
	        this.getEntityByID = this.getEntityByID.bind(this);
	        this.propagateError = this.propagateError.bind(this);
	        this.propagateRuntime = this.propagateRuntime.bind(this);

	        this.passedDownCallbacks = {
	            getEntityList: this.getEntityList,
	            getEntityByID: this.getEntityByID,
	            propagateError: this.propagateError,
	            propagateRuntime: this.propagateRuntime
	        };

	        this.notifier = new Notifier(this.passedDownCallbacks);
	        this.strategies = strategies;

	        var parsedConfig = void 0;
	        try {
	            parsedConfig = this.parseConfig(config);
	        } catch (e) {
	            if (typeof this.propagateError == 'function') {
	                this.propagateError(e);
	            } else {
	                throw e;
	            }
	        }

	        if (parsedConfig) {
	            this.simulationSpeed = parsedConfig.simulationSpeed;
	            this.Entities = {
	                snakes: parsedConfig.snakes,
	                pills: parsedConfig.pills,
	                board: parsedConfig.board
	            };
	        }

	        this.config = config;
	    }

	    _createClass$a(Model, [{
	        key: 'update',
	        value: function update() {
	            var snakes = this.Entities.snakes;
	            var pills = this.Entities.pills;
	            var board = this.Entities.board;
	            if (!this.isGameOver()) {
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {

	                    for (var _iterator = snakes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var snake = _step.value;

	                        snake.update();
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }

	                var _iteratorNormalCompletion2 = true;
	                var _didIteratorError2 = false;
	                var _iteratorError2 = undefined;

	                try {
	                    for (var _iterator2 = pills[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                        var pill = _step2.value;

	                        pill.update();
	                    }
	                } catch (err) {
	                    _didIteratorError2 = true;
	                    _iteratorError2 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                            _iterator2.return();
	                        }
	                    } finally {
	                        if (_didIteratorError2) {
	                            throw _iteratorError2;
	                        }
	                    }
	                }

	                board.update();
	            }
	        }
	    }, {
	        key: 'reset',
	        value: function reset() {
	            var snakes = this.Entities.snakes;
	            var pills = this.Entities.pills;
	            var board = this.Entities.board;
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;

	            try {
	                for (var _iterator3 = snakes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var snake = _step3.value;

	                    snake.reset();
	                }
	            } catch (err) {
	                _didIteratorError3 = true;
	                _iteratorError3 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                        _iterator3.return();
	                    }
	                } finally {
	                    if (_didIteratorError3) {
	                        throw _iteratorError3;
	                    }
	                }
	            }

	            var _iteratorNormalCompletion4 = true;
	            var _didIteratorError4 = false;
	            var _iteratorError4 = undefined;

	            try {
	                for (var _iterator4 = pills[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                    var pill = _step4.value;

	                    pill.reset();
	                }
	            } catch (err) {
	                _didIteratorError4 = true;
	                _iteratorError4 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                        _iterator4.return();
	                    }
	                } finally {
	                    if (_didIteratorError4) {
	                        throw _iteratorError4;
	                    }
	                }
	            }

	            board.reset();
	        }
	    }, {
	        key: 'snakeFactory',
	        value: function snakeFactory(snakeConfig, notifier) {
	            var strategyName = snakeConfig.strategy;
	            var strategyType = this.strategies[strategyName];
	            var strategy = new strategyType(this.passedDownCallbacks);
	            var snake = new Snake(this.passedDownCallbacks, snakeConfig, strategy, notifier);
	            return snake;
	        }
	    }, {
	        key: 'isGameOver',
	        value: function isGameOver() {
	            var isGameOver = true;
	            var snakes = this.Entities.snakes;
	            var _iteratorNormalCompletion5 = true;
	            var _didIteratorError5 = false;
	            var _iteratorError5 = undefined;

	            try {
	                for (var _iterator5 = snakes[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	                    var snake = _step5.value;

	                    isGameOver = isGameOver && !snake.isAlive();
	                }
	            } catch (err) {
	                _didIteratorError5 = true;
	                _iteratorError5 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
	                        _iterator5.return();
	                    }
	                } finally {
	                    if (_didIteratorError5) {
	                        throw _iteratorError5;
	                    }
	                }
	            }

	            return isGameOver;
	        }
	    }, {
	        key: 'parseConfig',
	        value: function parseConfig(config) {
	            var parsedConfig = {};
	            var enrichedConfig = void 0;

	            if (config == undefined) {
	                throw new ConfigError('Config is missing!');
	            }

	            enrichedConfig = this.enrichConfig(config);
	            var snakeConfigs = enrichedConfig.snakeConfigs;
	            var pillConfigs = enrichedConfig.pillConfigs;
	            var boardConfig = enrichedConfig.boardConfig;
	            var mainConfig = enrichedConfig.main;

	            if (snakeConfigs) {
	                if (Array.isArray(snakeConfigs)) {
	                    var snakes = [];
	                    var _iteratorNormalCompletion6 = true;
	                    var _didIteratorError6 = false;
	                    var _iteratorError6 = undefined;

	                    try {
	                        for (var _iterator6 = snakeConfigs[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	                            var snakeConfig = _step6.value;

	                            if (this.strategies[snakeConfig.strategy]) {
	                                var snake = this.snakeFactory(snakeConfig, this.notifier);
	                                snakes.push(snake);
	                            } else {
	                                throw new ConfigError("snakeConfig's strategy is not in the index!");
	                            }
	                        }
	                    } catch (err) {
	                        _didIteratorError6 = true;
	                        _iteratorError6 = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion6 && _iterator6.return) {
	                                _iterator6.return();
	                            }
	                        } finally {
	                            if (_didIteratorError6) {
	                                throw _iteratorError6;
	                            }
	                        }
	                    }

	                    parsedConfig.snakes = snakes;
	                } else {
	                    throw new ConfigError('snakeConfigs field of config should be an Array!');
	                }
	            }
	            if (pillConfigs) {
	                if (Array.isArray(pillConfigs)) {
	                    var pills = [];
	                    var _iteratorNormalCompletion7 = true;
	                    var _didIteratorError7 = false;
	                    var _iteratorError7 = undefined;

	                    try {
	                        for (var _iterator7 = pillConfigs[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
	                            var pillConfig = _step7.value;

	                            var pill = new Pill(this.passedDownCallbacks, pillConfig, this.notifier);
	                            pills.push(pill);
	                        }
	                    } catch (err) {
	                        _didIteratorError7 = true;
	                        _iteratorError7 = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion7 && _iterator7.return) {
	                                _iterator7.return();
	                            }
	                        } finally {
	                            if (_didIteratorError7) {
	                                throw _iteratorError7;
	                            }
	                        }
	                    }

	                    parsedConfig.pills = pills;
	                } else {
	                    throw new ConfigError('pillConfigs field of config should be an Array!');
	                }
	            }
	            if (boardConfig) {
	                if ((typeof boardConfig === 'undefined' ? 'undefined' : _typeof$7(boardConfig)) == 'object') {
	                    var board = new Board(this.passedDownCallbacks, boardConfig);
	                    parsedConfig.board = board;
	                } else {
	                    throw new ConfigError('boardConfig field of config should be an Object!');
	                }
	            }
	            if (mainConfig) {
	                if (mainConfig.simulationSpeed) {
	                    var simulationSpeed = Number(mainConfig.simulationSpeed);
	                    if (Number.isInteger(simulationSpeed)) {
	                        parsedConfig.simulationSpeed = simulationSpeed;
	                    } else {
	                        throw new ConfigError('simulationSpeed value should be Integer!');
	                    }
	                } else {
	                    throw new ConfigError('Missing main config field simulationSpeed!');
	                }
	            }

	            return parsedConfig;
	        }
	    }, {
	        key: 'enrichConfig',
	        value: function enrichConfig(config) {
	            var boardConfig = config.boardConfig;
	            var limitX = 0;
	            var limitY = 0;
	            var pillConfigs = config.pillConfigs;
	            var snakeConfigs = config.snakeConfigs;
	            if (boardConfig) {
	                limitX = boardConfig.width || limitX;
	                limitY = boardConfig.height || limitY;
	            }
	            if (pillConfigs && Array.isArray(pillConfigs)) {
	                var _iteratorNormalCompletion8 = true;
	                var _didIteratorError8 = false;
	                var _iteratorError8 = undefined;

	                try {
	                    for (var _iterator8 = pillConfigs[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
	                        var pillConfig = _step8.value;

	                        pillConfig.limitX = limitX;
	                        pillConfig.limitY = limitY;
	                    }
	                } catch (err) {
	                    _didIteratorError8 = true;
	                    _iteratorError8 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion8 && _iterator8.return) {
	                            _iterator8.return();
	                        }
	                    } finally {
	                        if (_didIteratorError8) {
	                            throw _iteratorError8;
	                        }
	                    }
	                }
	            }
	            if (snakeConfigs && Array.isArray(snakeConfigs)) {
	                var _iteratorNormalCompletion9 = true;
	                var _didIteratorError9 = false;
	                var _iteratorError9 = undefined;

	                try {
	                    for (var _iterator9 = snakeConfigs[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
	                        var snakeConfig = _step9.value;

	                        snakeConfig.limitX = limitX;
	                        snakeConfig.limitY = limitY;
	                    }
	                } catch (err) {
	                    _didIteratorError9 = true;
	                    _iteratorError9 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion9 && _iterator9.return) {
	                            _iterator9.return();
	                        }
	                    } finally {
	                        if (_didIteratorError9) {
	                            throw _iteratorError9;
	                        }
	                    }
	                }
	            }
	            return config;
	        }

	        //*************************************************** CALLBACKS *******************************************************************************//

	    }, {
	        key: 'propagateRuntime',
	        value: function propagateRuntime(snakeID, runtime) {
	            if (this.runtimes == undefined) {
	                this.runtimes = {};
	            }
	            this.runtimes[snakeID] = runtime;
	        }
	    }, {
	        key: 'getEntityList',
	        value: function getEntityList() {
	            return this.Entities;
	        }
	    }, {
	        key: 'propagateError',
	        value: function propagateError(error) {
	            if (this.errorBuffer == undefined) {
	                this.errorBuffer = [];
	            }
	            if (error instanceof Error) {
	                this.errorBuffer.push(error);
	                return true;
	            }
	            return false;
	        }
	    }, {
	        key: 'getEntityByID',
	        value: function getEntityByID(ID) {
	            var returnEntity = void 0;
	            var snakes = this.Entities.snakes;
	            var _iteratorNormalCompletion10 = true;
	            var _didIteratorError10 = false;
	            var _iteratorError10 = undefined;

	            try {
	                for (var _iterator10 = snakes[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
	                    var snake = _step10.value;

	                    if (snake.ID == ID) {
	                        returnEntity = snake;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError10 = true;
	                _iteratorError10 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion10 && _iterator10.return) {
	                        _iterator10.return();
	                    }
	                } finally {
	                    if (_didIteratorError10) {
	                        throw _iteratorError10;
	                    }
	                }
	            }

	            var pills = this.Entities.pills;
	            var _iteratorNormalCompletion11 = true;
	            var _didIteratorError11 = false;
	            var _iteratorError11 = undefined;

	            try {
	                for (var _iterator11 = pills[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
	                    var pill = _step11.value;

	                    if (pill.ID == ID) {
	                        returnEntity = pill;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError11 = true;
	                _iteratorError11 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion11 && _iterator11.return) {
	                        _iterator11.return();
	                    }
	                } finally {
	                    if (_didIteratorError11) {
	                        throw _iteratorError11;
	                    }
	                }
	            }

	            var board = this.Entities.board;
	            if (board.ID == ID) {
	                returnEntity = board;
	            }
	            return returnEntity;
	        }
	    }]);

	    return Model;
	}();

	function _classCallCheck$h(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Strategy = function Strategy() {
	    _classCallCheck$h(this, Strategy);

	    if (new.target === Strategy) {
	        throw new Error("Abstract class. Cannot be instantiated!");
	    }

	    if (this.pathfinder === void 0 || typeof this.pathfinder !== 'function') {
	        throw new Error("Abstract method 'pathfinder' must be overriden!");
	    }

	    if (this.calculateTarget === void 0 || typeof this.calculateTarget !== 'function') {
	        throw new Error("Abstract method 'calculateTarget' must be overriden!");
	    }
	};

	function AStar(heurisim, start, goal, gscoreTable, fScoreTable, dimensions) {
	    var closedLabelSet = new Set();
	    var openLabelSet = new Set(['' + start.coordinates.x + start.coordinates.y]);
	    var cameFrom = {};

	    var startLabel = '' + start.coordinates.x + start.coordinates.y;
	    gscoreTable[startLabel].score = 0;
	    fScoreTable[startLabel].score = heuristicCostEstimate(heurisim, start, goal);

	    while (openLabelSet.size > 0) {
	        var currentLabel = minScoreLabelSelect(openLabelSet, fScoreTable);
	        if (currentLabel === '' + goal.coordinates.x + goal.coordinates.y) {
	            return reconstructPath(cameFrom, currentLabel, fScoreTable);
	        }
	        openLabelSet.delete(currentLabel);
	        closedLabelSet.add(currentLabel);

	        var neighbors = getNeighbors(fScoreTable[currentLabel], dimensions.dimX - 1, dimensions.dimY - 1, fScoreTable);

	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = neighbors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var neighbor = _step.value;

	                if (closedLabelSet.has(neighbor)) {
	                    continue;
	                }

	                //szomszédos mező távolsága
	                var tentativegscore = gscoreTable[currentLabel].score + EuclideanDistance(fScoreTable[currentLabel].position, fScoreTable[neighbor].position) + (1 + 1 / 1000);

	                if (!openLabelSet.has(neighbor)) {
	                    openLabelSet.add(neighbor);
	                } else if (tentativegscore >= gscoreTable[neighbor].score) {
	                    continue;
	                }

	                cameFrom[neighbor] = currentLabel;
	                gscoreTable[neighbor].score = tentativegscore;
	                fScoreTable[neighbor].score = gscoreTable[neighbor].score + heuristicCostEstimate(heurisim, fScoreTable[neighbor].position, goal);
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                    _iterator.return();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }
	    }
	    return [];
	}

	//Square of Eucllabelean distance
	// TODO: makes this passed argument
	function heuristicCostEstimate(heurisim, from, to) {
	    return Math.pow(heurisim(from, to), 2);
	}

	function minScoreLabelSelect(labelSet, table) {
	    var setAsArray = Array.from(labelSet);
	    var minEntry = setAsArray[0];
	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;

	    try {
	        for (var _iterator2 = labelSet[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var entry = _step2.value;

	            if (table[minEntry].score > table[entry].score) {
	                minEntry = entry;
	            }
	        }
	    } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                _iterator2.return();
	            }
	        } finally {
	            if (_didIteratorError2) {
	                throw _iteratorError2;
	            }
	        }
	    }

	    return minEntry;
	}

	function reconstructPath(cameFromLabelList, currentLabel, tiles) {
	    var totalPath = [];
	    totalPath.push(tiles[currentLabel].position);
	    var keys = new Set(Object.keys(cameFromLabelList));
	    while (keys.has(currentLabel)) {
	        currentLabel = cameFromLabelList[currentLabel];
	        totalPath.unshift(tiles[currentLabel].position);
	    }
	    return totalPath;
	}

	function getNeighbors(tableTile, maxX, maxY, table) {
	    var neighbors = [];
	    var posX = tableTile.position.coordinates.x;
	    var posY = tableTile.position.coordinates.y;

	    if (posX != 0) {
	        var label = '' + (posX - 1) + posY;
	        var neighbor = table[label];
	        if (neighbor.status != 'SNAKE' && neighbor.status != 'OBSTACLE') {
	            neighbors.push(label);
	        }
	    }
	    if (posY != 0) {
	        var _label = '' + posX + (posY - 1);
	        var _neighbor = table[_label];
	        if (_neighbor.status != 'SNAKE' && _neighbor.status != 'OBSTACLE') {
	            neighbors.push(_label);
	        }
	    }
	    if (posX < maxX) {
	        var _label2 = '' + (posX + 1) + posY;
	        var _neighbor2 = table[_label2];
	        if (_neighbor2.status != 'SNAKE' && _neighbor2.status != 'OBSTACLE') {
	            neighbors.push(_label2);
	        }
	    }
	    if (posY < maxY) {
	        var _label3 = '' + posX + (posY + 1);
	        var _neighbor3 = table[_label3];
	        if (_neighbor3.status != 'SNAKE' && _neighbor3.status != 'OBSTACLE') {
	            neighbors.push(_label3);
	        }
	    }

	    return neighbors;
	}

	function AStarPreprocess(board, snakes, pills) {
	    var dimensions = board.dimensions;
	    var obstacles = board.obstacles;
	    var gScoreTable = {};
	    var fScoreTable = {};
	    for (var i = 0; i < dimensions.dimX; i++) {
	        for (var j = 0; j < dimensions.dimY; j++) {
	            var status = 'EMPTY';

	            if (status == 'EMPTY') {
	                var _iteratorNormalCompletion3 = true;
	                var _didIteratorError3 = false;
	                var _iteratorError3 = undefined;

	                try {
	                    for (var _iterator3 = obstacles[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                        var obstacle = _step3.value;

	                        if (obstacle.coordinates.x == i && obstacle.coordinates.y == j) {
	                            status = 'OBSTACLE';
	                            break;
	                        }
	                    }
	                } catch (err) {
	                    _didIteratorError3 = true;
	                    _iteratorError3 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                            _iterator3.return();
	                        }
	                    } finally {
	                        if (_didIteratorError3) {
	                            throw _iteratorError3;
	                        }
	                    }
	                }
	            }

	            var _iteratorNormalCompletion4 = true;
	            var _didIteratorError4 = false;
	            var _iteratorError4 = undefined;

	            try {
	                for (var _iterator4 = pills[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                    var pill = _step4.value;

	                    if (pill.position.coordinates.x == i && pill.position.coordinates.y == j) {
	                        status = 'PILL';
	                        break;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError4 = true;
	                _iteratorError4 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                        _iterator4.return();
	                    }
	                } finally {
	                    if (_didIteratorError4) {
	                        throw _iteratorError4;
	                    }
	                }
	            }

	            if (status == 'EMPTY') {
	                var _iteratorNormalCompletion5 = true;
	                var _didIteratorError5 = false;
	                var _iteratorError5 = undefined;

	                try {
	                    for (var _iterator5 = snakes[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	                        var snake = _step5.value;
	                        var _iteratorNormalCompletion6 = true;
	                        var _didIteratorError6 = false;
	                        var _iteratorError6 = undefined;

	                        try {
	                            for (var _iterator6 = snake.body[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	                                var node = _step6.value;

	                                if (node.coordinates.x == i && node.coordinates.y == j) {
	                                    status = 'SNAKE';
	                                    break;
	                                }
	                            }
	                        } catch (err) {
	                            _didIteratorError6 = true;
	                            _iteratorError6 = err;
	                        } finally {
	                            try {
	                                if (!_iteratorNormalCompletion6 && _iterator6.return) {
	                                    _iterator6.return();
	                                }
	                            } finally {
	                                if (_didIteratorError6) {
	                                    throw _iteratorError6;
	                                }
	                            }
	                        }
	                    }
	                } catch (err) {
	                    _didIteratorError5 = true;
	                    _iteratorError5 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion5 && _iterator5.return) {
	                            _iterator5.return();
	                        }
	                    } finally {
	                        if (_didIteratorError5) {
	                            throw _iteratorError5;
	                        }
	                    }
	                }
	            }
	            gScoreTable['' + i + j] = {
	                score: Infinity,
	                position: new IntCoordinate(i, j),
	                status: status
	            };
	            fScoreTable['' + i + j] = {
	                score: Infinity,
	                position: new IntCoordinate(i, j),
	                status: status
	            };
	        }
	    }
	    return {
	        gScoreTable: gScoreTable,
	        fScoreTable: fScoreTable
	    };
	}

	var _createClass$b = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck$i(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn$a(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits$a(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PlainAStarStrategy = function (_Strategy) {
	    _inherits$a(PlainAStarStrategy, _Strategy);

	    function PlainAStarStrategy(callbacks) {
	        _classCallCheck$i(this, PlainAStarStrategy);

	        var _this = _possibleConstructorReturn$a(this, (PlainAStarStrategy.__proto__ || Object.getPrototypeOf(PlainAStarStrategy)).call(this));

	        _this.callbacks = callbacks;
	        return _this;
	    }

	    _createClass$b(PlainAStarStrategy, [{
	        key: 'pathfinder',
	        value: function pathfinder(snake) {
	            var pills = this.callbacks.getEntityList().pills;
	            var board = this.callbacks.getEntityList().board;
	            var snakes = this.callbacks.getEntityList().snakes;
	            var dimensions = board.dimensions;
	            var heurism = EuclideanDistance;
	            var aStarPreprocessResult = AStarPreprocess(board, snakes, pills);
	            var path = AStar(heurism, snake.head, snake.target, aStarPreprocessResult.gScoreTable, aStarPreprocessResult.fScoreTable, dimensions);
	            return path;
	        }
	    }, {
	        key: 'calculateTarget',
	        value: function calculateTarget(snake) {
	            var pills = this.callbacks.getEntityList().pills;
	            var firstPill = pills[0];
	            var min = firstPill;
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = pills[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var pill = _step.value;

	                    var minDist = EuclideanDistance(snake.head, min.position);
	                    var currDist = EuclideanDistance(snake.head, pill.position);
	                    if (minDist < currDist) {
	                        min = pill;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }

	            return min.position;
	        }
	    }]);

	    return PlainAStarStrategy;
	}(Strategy);

	var strategies = {
	    plainAStarStrategy: PlainAStarStrategy
	};

	var main = {
		simulationSpeed: 50
	};
	var boardConfig = {
		width: 25,
		height: 25
	};
	var snakeConfigs = [{
		baseLength: "2",
		startX: "0",
		startY: "0",
		startDirection: "RIGHT",
		startVelocity: "1",
		strategy: "plainAStarStrategy",
		color: "#E8E85C"
	}];
	var pillConfigs = [{
		pillValue: 4,
		startPosX: 14,
		startPosY: 14
	}];
	var config = {
		main: main,
		boardConfig: boardConfig,
		snakeConfigs: snakeConfigs,
		pillConfigs: pillConfigs
	};

	function initViewPort(hoistOn) {
	    if (hoistOn == undefined || typeof hoistOn.appendChild != 'function') {
	        throw new Error('Cannot hoist on given element!.');
	    }

	    var viewPort = document.createElement('canvas');
	    viewPort.id = 'viewPort';
	    viewPort.innerHTML = 'No canvas support :(';

	    var viewPortWrapperElement = document.createElement('div');
	    viewPortWrapperElement.id = 'viewPortWrapperElement';

	    //Stílus
	    viewPortWrapperElement.style.width = '100%';
	    viewPortWrapperElement.style.textAlign = 'center';
	    viewPort.style.display = 'inline';
	    viewPort.style.border = 'solid 1px';

	    //Hozzáadás a DOM-hoz
	    viewPortWrapperElement.appendChild(viewPort);
	    hoistOn.appendChild(viewPortWrapperElement);
	    return viewPort;
	}

	function initComponents(config, model, mainloop) {
	    var snakes = model.getEntityList().snakes;

	    //speed selector
	    var speedSelector = document.querySelector('#speed-selector');
	    speedSelector.value = Number(config.main.simulationSpeed);
	    speedSelector.addEventListener('input', function (event) {
	        model.simulationSpeed = speedSelector.value;
	        mainloop.setSimulationTimestep(1000 / speedSelector.value);
	    });

	    //dashboard
	    var dashboard = document.querySelector('#dashboard');
	    dashboard.style = "background-color: #d6c182; text-align: center; padding: 10px";

	    //restart button
	    var restartButton = document.querySelector('#restart-button');
	    restartButton.addEventListener('click', function (event) {
	        model.reset();
	    });

	    //stop button
	    var stopButton = document.querySelector('#stop-button');
	    stopButton.addEventListener('click', function (event) {
	        mainloop.stop();
	    });

	    //start button
	    var startButton = document.querySelector('#start-button');
	    startButton.addEventListener('click', function (event) {
	        mainloop.start();
	    });
	}

	function generateErrorMessage(errors) {
	    var errorMessage = errors[0].name + ': ' + errors[0].message;
	    for (var i = 1; i < errors.length; i++) {
	        errorMessage = errors[i].name + ': ' + errors[i].message + '\n' + errorMessage;
	    }
	    return errorMessage;
	}

	function drawScene(model, canvasWrapper, tileWidth, tileHeight) {
	    var snakes = model.getEntityList().snakes;
	    var pills = model.getEntityList().pills;
	    var obstacles = model.getEntityList().board.obstacles;
	    var pathZindex = 1;
	    var pillZindex = 0;
	    var snakeZindex = 2;
	    var obstacleZindex = 4;

	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        for (var _iterator = snakes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var snake = _step.value;
	            var _iteratorNormalCompletion4 = true;
	            var _didIteratorError4 = false;
	            var _iteratorError4 = undefined;

	            try {
	                for (var _iterator4 = snake.path[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                    var element = _step4.value;

	                    var width = tileWidth / 2;
	                    var height = tileHeight / 2;
	                    var xOffset = width / 2;
	                    var yOffset = height / 2;
	                    var posX = element.coordinates.x * tileWidth + xOffset;
	                    var posY = element.coordinates.y * tileHeight + yOffset;
	                    canvasWrapper.createRect(posX, posY, width, height, snake.color, pathZindex, snakeZindex);
	                }
	            } catch (err) {
	                _didIteratorError4 = true;
	                _iteratorError4 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                        _iterator4.return();
	                    }
	                } finally {
	                    if (_didIteratorError4) {
	                        throw _iteratorError4;
	                    }
	                }
	            }

	            var _iteratorNormalCompletion5 = true;
	            var _didIteratorError5 = false;
	            var _iteratorError5 = undefined;

	            try {
	                for (var _iterator5 = snake.body[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	                    var node = _step5.value;

	                    var width = tileWidth;
	                    var height = tileHeight;
	                    var posX = node.coordinates.x * tileWidth;
	                    var posY = node.coordinates.y * tileHeight;

	                    canvasWrapper.createRect(posX, posY, width, height, snake.color);
	                }
	            } catch (err) {
	                _didIteratorError5 = true;
	                _iteratorError5 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
	                        _iterator5.return();
	                    }
	                } finally {
	                    if (_didIteratorError5) {
	                        throw _iteratorError5;
	                    }
	                }
	            }
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }

	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;

	    try {
	        for (var _iterator2 = pills[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var pill = _step2.value;

	            var radius = tileWidth / 2;
	            var xOffset = tileWidth / 2;
	            var yOffset = tileHeight / 2;
	            var posX = pill.position.coordinates.x * tileWidth + xOffset;
	            var posY = pill.position.coordinates.y * tileHeight + yOffset;

	            canvasWrapper.createCircle(posX, posY, radius, pill.color, pillZindex);
	        }
	    } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                _iterator2.return();
	            }
	        } finally {
	            if (_didIteratorError2) {
	                throw _iteratorError2;
	            }
	        }
	    }

	    var _iteratorNormalCompletion3 = true;
	    var _didIteratorError3 = false;
	    var _iteratorError3 = undefined;

	    try {
	        for (var _iterator3 = obstacles[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	            var obstacle = _step3.value;

	            var width = tileWidth;
	            var height = tileHeight;
	            var posX = obstacle.coordinates.x * tileWidth;
	            var posY = obstacle.coordinates.y * tileHeight;

	            canvasWrapper.createRect(posX, posY, width, height, 'black', obstacleZindex);
	        }
	    } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                _iterator3.return();
	            }
	        } finally {
	            if (_didIteratorError3) {
	                throw _iteratorError3;
	            }
	        }
	    }
	}

	window.onload = main$1;

	function main$1() {
	    var model = new Model(config, strategies);
	    console.log(model.errorBuffer);
	    var errors = model.errorBuffer || [];
	    if (errors.length > 0) {
	        var errorMessage = generateErrorMessage(errors);
	        console.log(errorMessage);
	        window.alert(errorMessage);
	    }
	    var numberOfColumns = Number(config.boardConfig.width);
	    var numberOfRows = Number(config.boardConfig.height);
	    var viewPortWidth = 720;
	    var viewPortHeight = 720;
	    var tileWidth = viewPortWidth / numberOfColumns;
	    var tileHeight = viewPortHeight / numberOfRows;
	    var wrappedCanvas = void 0;

	    var viewPort = initViewPort(document.querySelector('#viewport-container'));
	    wrappedCanvas = new CanvasWrapper(viewPort, viewPortWidth, viewPortHeight);

	    var mainloop = mainloop_min.setUpdate(function () {
	        model.update();
	    }).setDraw(function () {
	        wrappedCanvas.clearScene();
	        drawScene(model, wrappedCanvas, tileWidth, tileHeight);
	        wrappedCanvas.renderScene();
	    }).setSimulationTimestep(1000 / model.simulationSpeed);

	    initComponents(config, model, mainloop);
	    drawScene(model, wrappedCanvas, tileWidth, tileHeight);
	    wrappedCanvas.renderScene();
	}

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9tYWlubG9vcC5qcy9idWlsZC9tYWlubG9vcC5taW4uanMiLCIuLi9zcmMvanMvZXJyb3JzL0ludENvb3JkaW5hdGVFcnJvci5qcyIsIi4uL3NyYy9qcy9pbnRDb29yZGluYXRlLmpzIiwiLi4vc3JjL2pzL2NhbnZhc1dyYXBwZXIuanMiLCIuLi9zcmMvanMvQWJzdHJhY3RDbGFzc2VzL0VudGl0eS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9lcS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrQ2xlYXIuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja0RlbGV0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrR2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tIYXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzRnVuY3Rpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3JlSnNEYXRhLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNNYXNrZWQuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL190b1NvdXJjZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFZhbHVlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TmF0aXZlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTWFwLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaENsZWFyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaERlbGV0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hHZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoSGFzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaFNldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0hhc2guanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXlhYmxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVHZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUhhcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTWFwQ2FjaGUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja1NldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N0YWNrLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlFYWNoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZGVmaW5lUHJvcGVydHkuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQXNzaWduVmFsdWUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NpZ25WYWx1ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcHlPYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVGltZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc0FyZ3VtZW50cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcmd1bWVudHMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJGYWxzZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNCdWZmZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc0luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0xlbmd0aC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVW5hcnkuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19ub2RlVXRpbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb3ZlckFyZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlS2V5cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcnJheUxpa2UuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2tleXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQXNzaWduLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlS2V5c0luLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUtleXNJbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gva2V5c0luLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUFzc2lnbkluLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVCdWZmZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5QXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUZpbHRlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvc3R1YkFycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0U3ltYm9scy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcHlTeW1ib2xzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlQdXNoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UHJvdG90eXBlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0U3ltYm9sc0luLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29weVN5bWJvbHNJbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0QWxsS2V5cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldEFsbEtleXNJbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0RhdGFWaWV3LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fUHJvbWlzZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1NldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1dlYWtNYXAuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRUYWcuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pbml0Q2xvbmVBcnJheS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1VpbnQ4QXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jbG9uZUFycmF5QnVmZmVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVEYXRhVmlldy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FkZE1hcEVudHJ5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlSZWR1Y2UuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBUb0FycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVNYXAuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jbG9uZVJlZ0V4cC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FkZFNldEVudHJ5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lU2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVTeW1ib2wuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jbG9uZVR5cGVkQXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pbml0Q2xvbmVCeVRhZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VDcmVhdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pbml0Q2xvbmVPYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQ2xvbmUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2Nsb25lRGVlcC5qcyIsIi4uL3NyYy9qcy9lcnJvcnMvQ29uZmlnRXJyb3IuanMiLCIuLi9zcmMvanMvY3VzdG9tVXRpbHMuanMiLCIuLi9zcmMvanMvYm9hcmQuanMiLCIuLi9zcmMvanMvQWJzdHJhY3RDbGFzc2VzL09ic2VydmVyRW50aXR5LmpzIiwiLi4vc3JjL2pzL0Fic3RyYWN0Q2xhc3Nlcy9Db21tYW5kLmpzIiwiLi4vc3JjL2pzL0NvbW1hbmRzL0xlZnRUdXJuQ29tbWFuZC5qcyIsIi4uL3NyYy9qcy9Db21tYW5kcy9SaWdodFR1cm5Db21tYW5kLmpzIiwiLi4vc3JjL2pzL0NvbW1hbmRzL0Rvd25UdXJuQ29tbWFuZC5qcyIsIi4uL3NyYy9qcy9Db21tYW5kcy9VcFR1cm5Db21tYW5kLmpzIiwiLi4vc3JjL2pzL3NuYWtlLmpzIiwiLi4vc3JjL2pzL3BpbGwuanMiLCIuLi9zcmMvanMvQWJzdHJhY3RDbGFzc2VzL1N1YmplY3QuanMiLCIuLi9zcmMvanMvbm90aWZpZXIuanMiLCIuLi9zcmMvanMvbW9kZWwuanMiLCIuLi9zcmMvanMvQWJzdHJhY3RDbGFzc2VzL1N0cmF0ZWd5LmpzIiwiLi4vc3JjL2pzL3BhdGhmaW5kaW5nLWFsZ29yaXRobXMvYVN0YXJBbGdvcml0aG0uanMiLCIuLi9zcmMvanMvcGF0aGZpbmRpbmctYWxnb3JpdGhtcy9wbGFpbkFTdGFyLmpzIiwiLi4vc3JjL2pzL3BhdGhmaW5kaW5nLWFsZ29yaXRobXMvaW5kZXguanMiLCIuLi9zcmMvanMvbWFpbkZ1bmN0aW9ucy5qcyIsIi4uL3NyYy9qcy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogbWFpbmxvb3AuanMgMS4wLjMtMjAxNzA1MjlcbiAqXG4gKiBAYXV0aG9yIElzYWFjIFN1a2luIChodHRwOi8vd3d3LmlzYWFjc3VraW4uY29tLylcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5cbiFmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGEpe2lmKHg9cShiKSwhKGE8ZStsKSl7Zm9yKGQrPWEtZSxlPWEsdChhLGQpLGE+aStoJiYoZj1nKmoqMWUzLyhhLWkpKygxLWcpKmYsaT1hLGo9MCksaisrLGs9MDtkPj1jOylpZih1KGMpLGQtPWMsKytrPj0yNDApe289ITA7YnJlYWt9dihkL2MpLHcoZixvKSxvPSExfX12YXIgYz0xZTMvNjAsZD0wLGU9MCxmPTYwLGc9LjksaD0xZTMsaT0wLGo9MCxrPTAsbD0wLG09ITEsbj0hMSxvPSExLHA9XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdz93aW5kb3c6YSxxPXAucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxmdW5jdGlvbigpe3ZhciBhPURhdGUubm93KCksYixkO3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gYj1EYXRlLm5vdygpLGQ9TWF0aC5tYXgoMCxjLShiLWEpKSxhPWIrZCxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZShiK2QpfSxkKX19KCkscj1wLmNhbmNlbEFuaW1hdGlvbkZyYW1lfHxjbGVhclRpbWVvdXQscz1mdW5jdGlvbigpe30sdD1zLHU9cyx2PXMsdz1zLHg7YS5NYWluTG9vcD17Z2V0U2ltdWxhdGlvblRpbWVzdGVwOmZ1bmN0aW9uKCl7cmV0dXJuIGN9LHNldFNpbXVsYXRpb25UaW1lc3RlcDpmdW5jdGlvbihhKXtyZXR1cm4gYz1hLHRoaXN9LGdldEZQUzpmdW5jdGlvbigpe3JldHVybiBmfSxnZXRNYXhBbGxvd2VkRlBTOmZ1bmN0aW9uKCl7cmV0dXJuIDFlMy9sfSxzZXRNYXhBbGxvd2VkRlBTOmZ1bmN0aW9uKGEpe3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBhJiYoYT0xLzApLDA9PT1hP3RoaXMuc3RvcCgpOmw9MWUzL2EsdGhpc30scmVzZXRGcmFtZURlbHRhOmZ1bmN0aW9uKCl7dmFyIGE9ZDtyZXR1cm4gZD0wLGF9LHNldEJlZ2luOmZ1bmN0aW9uKGEpe3JldHVybiB0PWF8fHQsdGhpc30sc2V0VXBkYXRlOmZ1bmN0aW9uKGEpe3JldHVybiB1PWF8fHUsdGhpc30sc2V0RHJhdzpmdW5jdGlvbihhKXtyZXR1cm4gdj1hfHx2LHRoaXN9LHNldEVuZDpmdW5jdGlvbihhKXtyZXR1cm4gdz1hfHx3LHRoaXN9LHN0YXJ0OmZ1bmN0aW9uKCl7cmV0dXJuIG58fChuPSEwLHg9cShmdW5jdGlvbihhKXt2KDEpLG09ITAsZT1hLGk9YSxqPTAseD1xKGIpfSkpLHRoaXN9LHN0b3A6ZnVuY3Rpb24oKXtyZXR1cm4gbT0hMSxuPSExLHIoeCksdGhpc30saXNSdW5uaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIG19fSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGEuTWFpbkxvb3ApOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm51bGwhPT1tb2R1bGUmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUuZXhwb3J0cyYmKG1vZHVsZS5leHBvcnRzPWEuTWFpbkxvb3ApfSh0aGlzKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1haW5sb29wLm1pbi5qcy5tYXAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb29yZGluYXRlRXJyb3IgZXh0ZW5kcyBFcnJvcntcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlKXtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdJbnRDb29yZGluYXRlRXJyb3InO1xuICAgIH1cbn0iLCJpbXBvcnQgSW50Q29vcmRpbmF0ZUVycm9yIGZyb20gJy4vZXJyb3JzL0ludENvb3JkaW5hdGVFcnJvci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludENvb3JkaW5hdGUge1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIG51bGxQb3NpdGlvbiA9IGZhbHNlKSB7XG4gICAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHgpICYmIE51bWJlci5pc0ludGVnZXIoeSkgfHwgbnVsbFBvc2l0aW9uID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMueCA9IE51bWJlcih4KTtcbiAgICAgICAgICAgIHRoaXMueSA9IE51bWJlcih5KTtcbiAgICAgICAgICAgIHRoaXMubnVsbFBvc2l0aW9uID0gbnVsbFBvc2l0aW9uO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgSW50Q29vcmRpbmF0ZUVycm9yKCdDb29yZGluYXRlcyBoYXZlIHRvIGJlIGludGVnZXIgdmFsdWVzIScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGNvb3JkaW5hdGVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogdGhpcy54LFxuICAgICAgICAgICAgeTogdGhpcy55XG4gICAgICAgIH1cbiAgICB9XG59IiwiLy8ndXNlIHN0cmljdCdcblxuaW1wb3J0IEludENvb3JkaW5hdGUgZnJvbSAnLi9pbnRDb29yZGluYXRlLmpzJztcblxuLyoqXG4gKiBPc3p0w6FseSBhIGNhbnZhcyBlbGVtIEFQSS1qw6FuYWsgYWJzenRyYWjDoWzDoXPDoXJhLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXNXcmFwcGVyIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXNET01FbGVtZW50LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGlmKGNhbnZhc0RPTUVsZW1lbnQgPT0gdW5kZWZpbmVkIHx8IHR5cGVvZiBjYW52YXNET01FbGVtZW50LmdldENvbnRleHQgIT0gJ2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBnZXQgcmVuZGVyIGNvbnRleHQgb2Ygd3JhcHBlZCBlbGVtZW50LicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuX2NhbnZhcyA9IGNhbnZhc0RPTUVsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy5fY2FudmFzLndpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgdGhpcy5fY2FudmFzLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuX2N0eCA9IHRoaXMuX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLl9zY2VuZSA9IFtdO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlUmVjdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYXdSZWN0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVuZGVyU2NlbmUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUw6lnbGFsYXAgcmVwcmV6ZW50w6FjacOzIGzDqXRyZWhvesOhc2EuXG4gICAgICogQHBhcmFtIHsqfSBwb3NYIFxuICAgICAqIEBwYXJhbSB7Kn0gcG9zWSBcbiAgICAgKiBAcGFyYW0geyp9IHdpZHRoIFxuICAgICAqIEBwYXJhbSB7Kn0gaGVpZ2h0IFxuICAgICAqIEBwYXJhbSB7Kn0gY29sb3IgXG4gICAgICovXG4gICAgY3JlYXRlUmVjdChwb3NYID0gMCwgcG9zWSA9IDAsIHdpZHRoID0gMTAsIGhlaWdodCA9IDEwLCBjb2xvciA9ICdibGFjaycsIHppbmRleCA9IDApIHtcbiAgICAgICAgY29uc3QgcmVjdCA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdyZWN0JyxcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgICAgICB4OiBwb3NYLFxuICAgICAgICAgICAgICAgIHk6IHBvc1lcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgIHppbmRleFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9zY2VuZS5wdXNoKHJlY3QpO1xuICAgICAgICByZXR1cm4gcmVjdDtcbiAgICB9XG5cbiAgICBjcmVhdGVDaXJjbGUocG9zWCA9IDAsIHBvc1kgPSAwLCByYWRpdXMgPSA1LCBjb2xvciA9ICdibGFjaycsIHppbmRleCA9IDApIHtcbiAgICAgICAgY29uc3QgY2lyY2xlID0ge1xuICAgICAgICAgICAgdHlwZTogJ2NpcmNsZScsXG4gICAgICAgICAgICByYWRpdXMsXG4gICAgICAgICAgICBzdGFydEFuZ2xlOiAwLFxuICAgICAgICAgICAgZW5kQW5nbGU6IDIgKiBNYXRoLlBJLFxuICAgICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgICAgICB4OiBwb3NYLFxuICAgICAgICAgICAgICAgIHk6IHBvc1lcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgIHppbmRleFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9zY2VuZS5wdXNoKGNpcmNsZSk7XG4gICAgICAgIHJldHVybiBjaXJjbGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVMOpZ2xhbGFwIGtpcmFqem9sw6FzYVxuICAgICAqIEBwYXJhbSB7KnTDqWdsYWxhcCByZXByZXplbnTDoWNpw7N9IHJlY3QgXG4gICAgICovXG4gICAgZHJhd1JlY3QocmVjdCkge1xuICAgICAgICBpZiAodHlwZW9mIHJlY3QgPT09ICdvYmplY3QnICYmIHJlY3QgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChyZWN0LnR5cGUgPT0gJ3JlY3QnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3R4LmZpbGxTdHlsZSA9IHJlY3QuY29sb3I7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3R4LmZpbGxSZWN0KHJlY3QucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi55LCByZWN0LndpZHRoLCByZWN0LmhlaWdodCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGRyYXdDaXJjbGUoY2lyY2xlKSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjaXJjbGUgPT09ICdvYmplY3QnICYmIGNpcmNsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGNpcmNsZS50eXBlID09PSAnY2lyY2xlJykge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fY3R4LmZpbGxTdHlsZSA9IGNpcmNsZS5jb2xvcjtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3R4LmFyYyhjaXJjbGUucG9zaXRpb24ueCwgY2lyY2xlLnBvc2l0aW9uLnksIGNpcmNsZS5yYWRpdXMsIGNpcmNsZS5zdGFydEFuZ2xlLCBjaXJjbGUuZW5kQW5nbGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2N0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTesOtbnTDqXIga2lyYWp6b2zDoXNhXG4gICAgICovXG4gICAgcmVuZGVyU2NlbmUoKSB7XG5cbiAgICAgICAgdGhpcy5fY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIGxldCB6QnVmZmVyZWRTY2VuZSA9IHRoaXMuc29ydFNjZW5lQnlaSW5kZXgodGhpcy5fc2NlbmUpO1xuICAgICAgICBmb3IgKGxldCBvYmplY3Qgb2YgekJ1ZmZlcmVkU2NlbmUpIHtcbiAgICAgICAgICAgIHN3aXRjaCAob2JqZWN0LnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdyZWN0JzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3UmVjdChvYmplY3QpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdjaXJjbGUnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdDaXJjbGUob2JqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhclNjZW5lKCkge1xuICAgICAgICB0aGlzLl9zY2VuZSA9IFtdO1xuICAgIH1cblxuICAgIHNvcnRTY2VuZUJ5WkluZGV4KHNjZW5lKSB7XG4gICAgICAgIGxldCB6QnVmZmVyZWRTY2VuZSA9IHNjZW5lLnNvcnQoKHoxLCB6MikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHoxID4gejJcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB6QnVmZmVyZWRTY2VuZTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50aXR5e1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIGlmIChuZXcudGFyZ2V0ID09PSBFbnRpdHkpe1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWJzdHJhY3QgY2xhc3MuIENhbm5vdCBiZSBpbnN0YW50aWF0ZWQhXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy51cGRhdGUgPT09IHZvaWQgMCB8fCB0eXBlb2YgdGhpcy51cGRhdGUgIT09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWJzdHJhY3QgbWV0aG9kICd1cGRhdGUnIG11c3QgYmUgb3ZlcnJpZGVuIVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMucmVzZXQgPT09IHZvaWQgMCB8fCB0eXBlb2YgdGhpcy5yZXNldCAhPT0gJ2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBYnN0cmFjdCBtZXRob2QgJ3Jlc2V0JyBtdXN0IGJlIG92ZXJyaWRlbiFcIik7XG4gICAgICAgIH1cbiAgICB9XG59OyIsIi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVDbGVhcjtcbiIsIi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxO1xuIiwidmFyIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc29jSW5kZXhPZjtcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgLS10aGlzLnNpemU7XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZURlbGV0ZTtcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVHZXQ7XG4iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUhhcztcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICArK3RoaXMuc2l6ZTtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZVNldDtcbiIsInZhciBsaXN0Q2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUNsZWFyJyksXG4gICAgbGlzdENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlRGVsZXRlJyksXG4gICAgbGlzdENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlR2V0JyksXG4gICAgbGlzdENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlSGFzJyksXG4gICAgbGlzdENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBMaXN0Q2FjaGU7XG4iLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqL1xuZnVuY3Rpb24gc3RhY2tDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGU7XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tDbGVhcjtcbiIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICByZXN1bHQgPSBkYXRhWydkZWxldGUnXShrZXkpO1xuXG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0RlbGV0ZTtcbiIsIi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0dldDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhY2sgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0hhcyhrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tIYXM7XG4iLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbm1vZHVsZS5leHBvcnRzID0gY29yZUpzRGF0YTtcbiIsInZhciBjb3JlSnNEYXRhID0gcmVxdWlyZSgnLi9fY29yZUpzRGF0YScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFza2VkO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU291cmNlO1xuIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc01hc2tlZCA9IHJlcXVpcmUoJy4vX2lzTWFza2VkJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IGlzRnVuY3Rpb24odmFsdWUpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hdGl2ZTtcbiIsIi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFZhbHVlO1xuIiwidmFyIGJhc2VJc05hdGl2ZSA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hdGl2ZScpLFxuICAgIGdldFZhbHVlID0gcmVxdWlyZSgnLi9fZ2V0VmFsdWUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXROYXRpdmU7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUNyZWF0ZTtcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaENsZWFyO1xuIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoRGVsZXRlO1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEdldDtcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyAoZGF0YVtrZXldICE9PSB1bmRlZmluZWQpIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hIYXM7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgdGhpcy5zaXplICs9IHRoaXMuaGFzKGtleSkgPyAwIDogMTtcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hTZXQ7XG4iLCJ2YXIgaGFzaENsZWFyID0gcmVxdWlyZSgnLi9faGFzaENsZWFyJyksXG4gICAgaGFzaERlbGV0ZSA9IHJlcXVpcmUoJy4vX2hhc2hEZWxldGUnKSxcbiAgICBoYXNoR2V0ID0gcmVxdWlyZSgnLi9faGFzaEdldCcpLFxuICAgIGhhc2hIYXMgPSByZXF1aXJlKCcuL19oYXNoSGFzJyksXG4gICAgaGFzaFNldCA9IHJlcXVpcmUoJy4vX2hhc2hTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gSGFzaDtcbiIsInZhciBIYXNoID0gcmVxdWlyZSgnLi9fSGFzaCcpLFxuICAgIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLnNpemUgPSAwO1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVDbGVhcjtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleWFibGU7XG4iLCJ2YXIgaXNLZXlhYmxlID0gcmVxdWlyZSgnLi9faXNLZXlhYmxlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXBEYXRhO1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlRGVsZXRlO1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUdldDtcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlSGFzO1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG5cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSArPSBkYXRhLnNpemUgPT0gc2l6ZSA/IDAgOiAxO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZVNldDtcbiIsInZhciBtYXBDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVDbGVhcicpLFxuICAgIG1hcENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVEZWxldGUnKSxcbiAgICBtYXBDYWNoZUdldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlR2V0JyksXG4gICAgbWFwQ2FjaGVIYXMgPSByZXF1aXJlKCcuL19tYXBDYWNoZUhhcycpLFxuICAgIG1hcENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwQ2FjaGU7XG4iLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKipcbiAqIFNldHMgdGhlIHN0YWNrIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIHN0YWNrIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzdGFja1NldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBkYXRhLl9fZGF0YV9fO1xuICAgIGlmICghTWFwIHx8IChwYWlycy5sZW5ndGggPCBMQVJHRV9BUlJBWV9TSVpFIC0gMSkpIHtcbiAgICAgIHBhaXJzLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICAgIHRoaXMuc2l6ZSA9ICsrZGF0YS5zaXplO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja1NldDtcbiIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBzdGFja0NsZWFyID0gcmVxdWlyZSgnLi9fc3RhY2tDbGVhcicpLFxuICAgIHN0YWNrRGVsZXRlID0gcmVxdWlyZSgnLi9fc3RhY2tEZWxldGUnKSxcbiAgICBzdGFja0dldCA9IHJlcXVpcmUoJy4vX3N0YWNrR2V0JyksXG4gICAgc3RhY2tIYXMgPSByZXF1aXJlKCcuL19zdGFja0hhcycpLFxuICAgIHN0YWNrU2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU3RhY2soZW50cmllcykge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTdGFja2AuXG5TdGFjay5wcm90b3R5cGUuY2xlYXIgPSBzdGFja0NsZWFyO1xuU3RhY2sucHJvdG90eXBlWydkZWxldGUnXSA9IHN0YWNrRGVsZXRlO1xuU3RhY2sucHJvdG90eXBlLmdldCA9IHN0YWNrR2V0O1xuU3RhY2sucHJvdG90eXBlLmhhcyA9IHN0YWNrSGFzO1xuU3RhY2sucHJvdG90eXBlLnNldCA9IHN0YWNrU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YWNrO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZm9yRWFjaGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RWFjaChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkgPT09IGZhbHNlKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RWFjaDtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHZhciBmdW5jID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2RlZmluZVByb3BlcnR5Jyk7XG4gICAgZnVuYyh7fSwgJycsIHt9KTtcbiAgICByZXR1cm4gZnVuYztcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmaW5lUHJvcGVydHk7XG4iLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19kZWZpbmVQcm9wZXJ0eScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBhc3NpZ25WYWx1ZWAgYW5kIGBhc3NpZ25NZXJnZVZhbHVlYCB3aXRob3V0XG4gKiB2YWx1ZSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5ID09ICdfX3Byb3RvX18nICYmIGRlZmluZVByb3BlcnR5KSB7XG4gICAgZGVmaW5lUHJvcGVydHkob2JqZWN0LCBrZXksIHtcbiAgICAgICdjb25maWd1cmFibGUnOiB0cnVlLFxuICAgICAgJ2VudW1lcmFibGUnOiB0cnVlLFxuICAgICAgJ3ZhbHVlJzogdmFsdWUsXG4gICAgICAnd3JpdGFibGUnOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VBc3NpZ25WYWx1ZTtcbiIsInZhciBiYXNlQXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19iYXNlQXNzaWduVmFsdWUnKSxcbiAgICBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBc3NpZ25zIGB2YWx1ZWAgdG8gYGtleWAgb2YgYG9iamVjdGAgaWYgdGhlIGV4aXN0aW5nIHZhbHVlIGlzIG5vdCBlcXVpdmFsZW50XG4gKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgaWYgKCEoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYgZXEob2JqVmFsdWUsIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NpZ25WYWx1ZTtcbiIsInZhciBhc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnblZhbHVlJyksXG4gICAgYmFzZUFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnblZhbHVlJyk7XG5cbi8qKlxuICogQ29waWVzIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBpZGVudGlmaWVycyB0byBjb3B5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29waWVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPYmplY3Qoc291cmNlLCBwcm9wcywgb2JqZWN0LCBjdXN0b21pemVyKSB7XG4gIHZhciBpc05ldyA9ICFvYmplY3Q7XG4gIG9iamVjdCB8fCAob2JqZWN0ID0ge30pO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcblxuICAgIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICAgID8gY3VzdG9taXplcihvYmplY3Rba2V5XSwgc291cmNlW2tleV0sIGtleSwgb2JqZWN0LCBzb3VyY2UpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBuZXdWYWx1ZSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICBpZiAoaXNOZXcpIHtcbiAgICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlPYmplY3Q7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUaW1lcztcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNBcmd1bWVudHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqL1xuZnVuY3Rpb24gYmFzZUlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGFyZ3NUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzQXJndW1lbnRzO1xuIiwidmFyIGJhc2VJc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vX2Jhc2VJc0FyZ3VtZW50cycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FyZ3VtZW50cyA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA/IGJhc2VJc0FyZ3VtZW50cyA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJndW1lbnRzO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViRmFsc2U7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKSxcbiAgICBzdHViRmFsc2UgPSByZXF1aXJlKCcuL3N0dWJGYWxzZScpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNCdWZmZXI7XG4iLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSAmJlxuICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0luZGV4O1xuIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTGVuZ3RoO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgb2YgdHlwZWQgYXJyYXlzLiAqL1xudmFyIHR5cGVkQXJyYXlUYWdzID0ge307XG50eXBlZEFycmF5VGFnc1tmbG9hdDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Zsb2F0NjRUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDhUYWddID0gdHlwZWRBcnJheVRhZ3NbaW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQ4VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50OENsYW1wZWRUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbnR5cGVkQXJyYXlUYWdzW2FyZ3NUYWddID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlUYWddID1cbnR5cGVkQXJyYXlUYWdzW2FycmF5QnVmZmVyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Jvb2xUYWddID1cbnR5cGVkQXJyYXlUYWdzW2RhdGFWaWV3VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2RhdGVUYWddID1cbnR5cGVkQXJyYXlUYWdzW2Vycm9yVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Z1bmNUYWddID1cbnR5cGVkQXJyYXlUYWdzW21hcFRhZ10gPSB0eXBlZEFycmF5VGFnc1tudW1iZXJUYWddID1cbnR5cGVkQXJyYXlUYWdzW29iamVjdFRhZ10gPSB0eXBlZEFycmF5VGFnc1tyZWdleHBUYWddID1cbnR5cGVkQXJyYXlUYWdzW3NldFRhZ10gPSB0eXBlZEFycmF5VGFnc1tzdHJpbmdUYWddID1cbnR5cGVkQXJyYXlUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNUeXBlZEFycmF5YCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiZcbiAgICBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICEhdHlwZWRBcnJheVRhZ3NbYmFzZUdldFRhZyh2YWx1ZSldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc1R5cGVkQXJyYXk7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuYXJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0b3JpbmcgbWV0YWRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhcCBhcmd1bWVudHMgZm9yLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlVW5hcnkoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyh2YWx1ZSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuYXJ5O1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBub2RlVXRpbDtcbiIsInZhciBiYXNlSXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9fYmFzZUlzVHlwZWRBcnJheScpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIG5vZGVVdGlsID0gcmVxdWlyZSgnLi9fbm9kZVV0aWwnKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNUeXBlZEFycmF5ID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNUeXBlZEFycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSB0eXBlZCBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KG5ldyBVaW50OEFycmF5KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShbXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNUeXBlZEFycmF5ID0gbm9kZUlzVHlwZWRBcnJheSA/IGJhc2VVbmFyeShub2RlSXNUeXBlZEFycmF5KSA6IGJhc2VJc1R5cGVkQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNUeXBlZEFycmF5O1xuIiwidmFyIGJhc2VUaW1lcyA9IHJlcXVpcmUoJy4vX2Jhc2VUaW1lcycpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKSxcbiAgICAgIGlzQXJnID0gIWlzQXJyICYmIGlzQXJndW1lbnRzKHZhbHVlKSxcbiAgICAgIGlzQnVmZiA9ICFpc0FyciAmJiAhaXNBcmcgJiYgaXNCdWZmZXIodmFsdWUpLFxuICAgICAgaXNUeXBlID0gIWlzQXJyICYmICFpc0FyZyAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheSh2YWx1ZSksXG4gICAgICBza2lwSW5kZXhlcyA9IGlzQXJyIHx8IGlzQXJnIHx8IGlzQnVmZiB8fCBpc1R5cGUsXG4gICAgICByZXN1bHQgPSBza2lwSW5kZXhlcyA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZykgOiBbXSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoXG4gICAgICAgICAgIC8vIFNhZmFyaSA5IGhhcyBlbnVtZXJhYmxlIGBhcmd1bWVudHMubGVuZ3RoYCBpbiBzdHJpY3QgbW9kZS5cbiAgICAgICAgICAga2V5ID09ICdsZW5ndGgnIHx8XG4gICAgICAgICAgIC8vIE5vZGUuanMgMC4xMCBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiBidWZmZXJzLlxuICAgICAgICAgICAoaXNCdWZmICYmIChrZXkgPT0gJ29mZnNldCcgfHwga2V5ID09ICdwYXJlbnQnKSkgfHxcbiAgICAgICAgICAgLy8gUGhhbnRvbUpTIDIgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gdHlwZWQgYXJyYXlzLlxuICAgICAgICAgICAoaXNUeXBlICYmIChrZXkgPT0gJ2J1ZmZlcicgfHwga2V5ID09ICdieXRlTGVuZ3RoJyB8fCBrZXkgPT0gJ2J5dGVPZmZzZXQnKSkgfHxcbiAgICAgICAgICAgLy8gU2tpcCBpbmRleCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICBpc0luZGV4KGtleSwgbGVuZ3RoKVxuICAgICAgICApKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUxpa2VLZXlzO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUHJvdG90eXBlO1xuIiwiLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3ZlckFyZztcbiIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5cztcbiIsInZhciBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5cyA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXMnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzO1xuIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2U7XG4iLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXM7XG4iLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uYXNzaWduYCB3aXRob3V0IHN1cHBvcnQgZm9yIG11bHRpcGxlIHNvdXJjZXNcbiAqIG9yIGBjdXN0b21pemVyYCBmdW5jdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduKG9iamVjdCwgc291cmNlKSB7XG4gIHJldHVybiBvYmplY3QgJiYgY29weU9iamVjdChzb3VyY2UsIGtleXMoc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQXNzaWduO1xuIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2VcbiAqIFtgT2JqZWN0LmtleXNgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGV4Y2VwdCB0aGF0IGl0IGluY2x1ZGVzIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIG5hdGl2ZUtleXNJbihvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAob2JqZWN0ICE9IG51bGwpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5c0luO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzSW4gPSByZXF1aXJlKCcuL19uYXRpdmVLZXlzSW4nKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzSW5gIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXNJbihvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXNJbihvYmplY3QpO1xuICB9XG4gIHZhciBpc1Byb3RvID0gaXNQcm90b3R5cGUob2JqZWN0KSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoIShrZXkgPT0gJ2NvbnN0cnVjdG9yJyAmJiAoaXNQcm90byB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlS2V5c0luO1xuIiwidmFyIGFycmF5TGlrZUtleXMgPSByZXF1aXJlKCcuL19hcnJheUxpa2VLZXlzJyksXG4gICAgYmFzZUtleXNJbiA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzSW4nKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5c0luKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InLCAnYyddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbmZ1bmN0aW9uIGtleXNJbihvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCwgdHJ1ZSkgOiBiYXNlS2V5c0luKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5c0luO1xuIiwidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnLi9rZXlzSW4nKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5hc3NpZ25JbmAgd2l0aG91dCBzdXBwb3J0IGZvciBtdWx0aXBsZSBzb3VyY2VzXG4gKiBvciBgY3VzdG9taXplcmAgZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnbkluKG9iamVjdCwgc291cmNlKSB7XG4gIHJldHVybiBvYmplY3QgJiYgY29weU9iamVjdChzb3VyY2UsIGtleXNJbihzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VBc3NpZ25JbjtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICBhbGxvY1Vuc2FmZSA9IEJ1ZmZlciA/IEJ1ZmZlci5hbGxvY1Vuc2FmZSA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgIGBidWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge0J1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVCdWZmZXIoYnVmZmVyLCBpc0RlZXApIHtcbiAgaWYgKGlzRGVlcCkge1xuICAgIHJldHVybiBidWZmZXIuc2xpY2UoKTtcbiAgfVxuICB2YXIgbGVuZ3RoID0gYnVmZmVyLmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGFsbG9jVW5zYWZlID8gYWxsb2NVbnNhZmUobGVuZ3RoKSA6IG5ldyBidWZmZXIuY29uc3RydWN0b3IobGVuZ3RoKTtcblxuICBidWZmZXIuY29weShyZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lQnVmZmVyO1xuIiwiLyoqXG4gKiBDb3BpZXMgdGhlIHZhbHVlcyBvZiBgc291cmNlYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBzb3VyY2UgVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXk9W11dIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyB0by5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBjb3B5QXJyYXkoc291cmNlLCBhcnJheSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHNvdXJjZS5sZW5ndGg7XG5cbiAgYXJyYXkgfHwgKGFycmF5ID0gQXJyYXkobGVuZ3RoKSk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbaW5kZXhdID0gc291cmNlW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weUFycmF5O1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZmlsdGVyYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc0luZGV4ID0gMCxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJlc3VsdFtyZXNJbmRleCsrXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RmlsdGVyO1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGEgbmV3IGVtcHR5IGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZW1wdHkgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhcnJheXMgPSBfLnRpbWVzKDIsIF8uc3R1YkFycmF5KTtcbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXMpO1xuICogLy8gPT4gW1tdLCBbXV1cbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXNbMF0gPT09IGFycmF5c1sxXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBzdHViQXJyYXkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViQXJyYXk7XG4iLCJ2YXIgYXJyYXlGaWx0ZXIgPSByZXF1aXJlKCcuL19hcnJheUZpbHRlcicpLFxuICAgIHN0dWJBcnJheSA9IHJlcXVpcmUoJy4vc3R1YkFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzID0gIW5hdGl2ZUdldFN5bWJvbHMgPyBzdHViQXJyYXkgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICByZXR1cm4gYXJyYXlGaWx0ZXIobmF0aXZlR2V0U3ltYm9scyhvYmplY3QpLCBmdW5jdGlvbihzeW1ib2wpIHtcbiAgICByZXR1cm4gcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsIHN5bWJvbCk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRTeW1ib2xzO1xuIiwidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKTtcblxuLyoqXG4gKiBDb3BpZXMgb3duIHN5bWJvbHMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgZnJvbS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyB0by5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlTeW1ib2xzKHNvdXJjZSwgb2JqZWN0KSB7XG4gIHJldHVybiBjb3B5T2JqZWN0KHNvdXJjZSwgZ2V0U3ltYm9scyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlTeW1ib2xzO1xuIiwiLyoqXG4gKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYXBwZW5kLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UHVzaChhcnJheSwgdmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG9mZnNldCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W29mZnNldCArIGluZGV4XSA9IHZhbHVlc1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UHVzaDtcbiIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRQcm90b3R5cGU7XG4iLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKSxcbiAgICBzdHViQXJyYXkgPSByZXF1aXJlKCcuL3N0dWJBcnJheScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzSW4gPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHdoaWxlIChvYmplY3QpIHtcbiAgICBhcnJheVB1c2gocmVzdWx0LCBnZXRTeW1ib2xzKG9iamVjdCkpO1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZShvYmplY3QpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFN5bWJvbHNJbjtcbiIsInZhciBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGdldFN5bWJvbHNJbiA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHNJbicpO1xuXG4vKipcbiAqIENvcGllcyBvd24gYW5kIGluaGVyaXRlZCBzeW1ib2xzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIGZyb20uXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgdG8uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5U3ltYm9sc0luKHNvdXJjZSwgb2JqZWN0KSB7XG4gIHJldHVybiBjb3B5T2JqZWN0KHNvdXJjZSwgZ2V0U3ltYm9sc0luKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weVN5bWJvbHNJbjtcbiIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldEFsbEtleXNgIGFuZCBgZ2V0QWxsS2V5c0luYCB3aGljaCB1c2VzXG4gKiBga2V5c0Z1bmNgIGFuZCBgc3ltYm9sc0Z1bmNgIHRvIGdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzeW1ib2xzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzRnVuYywgc3ltYm9sc0Z1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXNGdW5jKG9iamVjdCk7XG4gIHJldHVybiBpc0FycmF5KG9iamVjdCkgPyByZXN1bHQgOiBhcnJheVB1c2gocmVzdWx0LCBzeW1ib2xzRnVuYyhvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0QWxsS2V5cztcbiIsInZhciBiYXNlR2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRBbGxLZXlzJyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5cywgZ2V0U3ltYm9scyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QWxsS2V5cztcbiIsInZhciBiYXNlR2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRBbGxLZXlzJyksXG4gICAgZ2V0U3ltYm9sc0luID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9sc0luJyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnLi9rZXlzSW4nKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBnZXRBbGxLZXlzSW4ob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNJbiwgZ2V0U3ltYm9sc0luKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRBbGxLZXlzSW47XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIERhdGFWaWV3ID0gZ2V0TmF0aXZlKHJvb3QsICdEYXRhVmlldycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGFWaWV3O1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBQcm9taXNlID0gZ2V0TmF0aXZlKHJvb3QsICdQcm9taXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZXQ7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFdlYWtNYXAgPSBnZXROYXRpdmUocm9vdCwgJ1dlYWtNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBXZWFrTWFwO1xuIiwidmFyIERhdGFWaWV3ID0gcmVxdWlyZSgnLi9fRGF0YVZpZXcnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBQcm9taXNlID0gcmVxdWlyZSgnLi9fUHJvbWlzZScpLFxuICAgIFNldCA9IHJlcXVpcmUoJy4vX1NldCcpLFxuICAgIFdlYWtNYXAgPSByZXF1aXJlKCcuL19XZWFrTWFwJyksXG4gICAgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICBwcm9taXNlVGFnID0gJ1tvYmplY3QgUHJvbWlzZV0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtYXBzLCBzZXRzLCBhbmQgd2Vha21hcHMuICovXG52YXIgZGF0YVZpZXdDdG9yU3RyaW5nID0gdG9Tb3VyY2UoRGF0YVZpZXcpLFxuICAgIG1hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShNYXApLFxuICAgIHByb21pc2VDdG9yU3RyaW5nID0gdG9Tb3VyY2UoUHJvbWlzZSksXG4gICAgc2V0Q3RvclN0cmluZyA9IHRvU291cmNlKFNldCksXG4gICAgd2Vha01hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShXZWFrTWFwKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xudmFyIGdldFRhZyA9IGJhc2VHZXRUYWc7XG5cbi8vIEZhbGxiYWNrIGZvciBkYXRhIHZpZXdzLCBtYXBzLCBzZXRzLCBhbmQgd2VhayBtYXBzIGluIElFIDExIGFuZCBwcm9taXNlcyBpbiBOb2RlLmpzIDwgNi5cbmlmICgoRGF0YVZpZXcgJiYgZ2V0VGFnKG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMSkpKSAhPSBkYXRhVmlld1RhZykgfHxcbiAgICAoTWFwICYmIGdldFRhZyhuZXcgTWFwKSAhPSBtYXBUYWcpIHx8XG4gICAgKFByb21pc2UgJiYgZ2V0VGFnKFByb21pc2UucmVzb2x2ZSgpKSAhPSBwcm9taXNlVGFnKSB8fFxuICAgIChTZXQgJiYgZ2V0VGFnKG5ldyBTZXQpICE9IHNldFRhZykgfHxcbiAgICAoV2Vha01hcCAmJiBnZXRUYWcobmV3IFdlYWtNYXApICE9IHdlYWtNYXBUYWcpKSB7XG4gIGdldFRhZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGJhc2VHZXRUYWcodmFsdWUpLFxuICAgICAgICBDdG9yID0gcmVzdWx0ID09IG9iamVjdFRhZyA/IHZhbHVlLmNvbnN0cnVjdG9yIDogdW5kZWZpbmVkLFxuICAgICAgICBjdG9yU3RyaW5nID0gQ3RvciA/IHRvU291cmNlKEN0b3IpIDogJyc7XG5cbiAgICBpZiAoY3RvclN0cmluZykge1xuICAgICAgc3dpdGNoIChjdG9yU3RyaW5nKSB7XG4gICAgICAgIGNhc2UgZGF0YVZpZXdDdG9yU3RyaW5nOiByZXR1cm4gZGF0YVZpZXdUYWc7XG4gICAgICAgIGNhc2UgbWFwQ3RvclN0cmluZzogcmV0dXJuIG1hcFRhZztcbiAgICAgICAgY2FzZSBwcm9taXNlQ3RvclN0cmluZzogcmV0dXJuIHByb21pc2VUYWc7XG4gICAgICAgIGNhc2Ugc2V0Q3RvclN0cmluZzogcmV0dXJuIHNldFRhZztcbiAgICAgICAgY2FzZSB3ZWFrTWFwQ3RvclN0cmluZzogcmV0dXJuIHdlYWtNYXBUYWc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFnO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBhcnJheSBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lQXJyYXkoYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGFycmF5LmNvbnN0cnVjdG9yKGxlbmd0aCk7XG5cbiAgLy8gQWRkIHByb3BlcnRpZXMgYXNzaWduZWQgYnkgYFJlZ0V4cCNleGVjYC5cbiAgaWYgKGxlbmd0aCAmJiB0eXBlb2YgYXJyYXlbMF0gPT0gJ3N0cmluZycgJiYgaGFzT3duUHJvcGVydHkuY2FsbChhcnJheSwgJ2luZGV4JykpIHtcbiAgICByZXN1bHQuaW5kZXggPSBhcnJheS5pbmRleDtcbiAgICByZXN1bHQuaW5wdXQgPSBhcnJheS5pbnB1dDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRDbG9uZUFycmF5O1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFVpbnQ4QXJyYXkgPSByb290LlVpbnQ4QXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gVWludDhBcnJheTtcbiIsInZhciBVaW50OEFycmF5ID0gcmVxdWlyZSgnLi9fVWludDhBcnJheScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgYXJyYXlCdWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciBUaGUgYXJyYXkgYnVmZmVyIHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYXJyYXkgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUFycmF5QnVmZmVyKGFycmF5QnVmZmVyKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgYXJyYXlCdWZmZXIuY29uc3RydWN0b3IoYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCk7XG4gIG5ldyBVaW50OEFycmF5KHJlc3VsdCkuc2V0KG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVBcnJheUJ1ZmZlcjtcbiIsInZhciBjbG9uZUFycmF5QnVmZmVyID0gcmVxdWlyZSgnLi9fY2xvbmVBcnJheUJ1ZmZlcicpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgZGF0YVZpZXdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YVZpZXcgVGhlIGRhdGEgdmlldyB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgZGF0YSB2aWV3LlxuICovXG5mdW5jdGlvbiBjbG9uZURhdGFWaWV3KGRhdGFWaWV3LCBpc0RlZXApIHtcbiAgdmFyIGJ1ZmZlciA9IGlzRGVlcCA/IGNsb25lQXJyYXlCdWZmZXIoZGF0YVZpZXcuYnVmZmVyKSA6IGRhdGFWaWV3LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyBkYXRhVmlldy5jb25zdHJ1Y3RvcihidWZmZXIsIGRhdGFWaWV3LmJ5dGVPZmZzZXQsIGRhdGFWaWV3LmJ5dGVMZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lRGF0YVZpZXc7XG4iLCIvKipcbiAqIEFkZHMgdGhlIGtleS12YWx1ZSBgcGFpcmAgdG8gYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSBwYWlyIFRoZSBrZXktdmFsdWUgcGFpciB0byBhZGQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBtYXBgLlxuICovXG5mdW5jdGlvbiBhZGRNYXBFbnRyeShtYXAsIHBhaXIpIHtcbiAgLy8gRG9uJ3QgcmV0dXJuIGBtYXAuc2V0YCBiZWNhdXNlIGl0J3Mgbm90IGNoYWluYWJsZSBpbiBJRSAxMS5cbiAgbWFwLnNldChwYWlyWzBdLCBwYWlyWzFdKTtcbiAgcmV0dXJuIG1hcDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhZGRNYXBFbnRyeTtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnJlZHVjZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHsqfSBbYWNjdW11bGF0b3JdIFRoZSBpbml0aWFsIHZhbHVlLlxuICogQHBhcmFtIHtib29sZWFufSBbaW5pdEFjY3VtXSBTcGVjaWZ5IHVzaW5nIHRoZSBmaXJzdCBlbGVtZW50IG9mIGBhcnJheWAgYXNcbiAqICB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlSZWR1Y2UoYXJyYXksIGl0ZXJhdGVlLCBhY2N1bXVsYXRvciwgaW5pdEFjY3VtKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgaWYgKGluaXRBY2N1bSAmJiBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGFycmF5WysraW5kZXhdO1xuICB9XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBpdGVyYXRlZShhY2N1bXVsYXRvciwgYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiBhY2N1bXVsYXRvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVJlZHVjZTtcbiIsIi8qKlxuICogQ29udmVydHMgYG1hcGAgdG8gaXRzIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGtleS12YWx1ZSBwYWlycy5cbiAqL1xuZnVuY3Rpb24gbWFwVG9BcnJheShtYXApIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShtYXAuc2l6ZSk7XG5cbiAgbWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IFtrZXksIHZhbHVlXTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwVG9BcnJheTtcbiIsInZhciBhZGRNYXBFbnRyeSA9IHJlcXVpcmUoJy4vX2FkZE1hcEVudHJ5JyksXG4gICAgYXJyYXlSZWR1Y2UgPSByZXF1aXJlKCcuL19hcnJheVJlZHVjZScpLFxuICAgIG1hcFRvQXJyYXkgPSByZXF1aXJlKCcuL19tYXBUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIGNsb25pbmcuICovXG52YXIgQ0xPTkVfREVFUF9GTEFHID0gMTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNsb25lRnVuYyBUaGUgZnVuY3Rpb24gdG8gY2xvbmUgdmFsdWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBtYXAuXG4gKi9cbmZ1bmN0aW9uIGNsb25lTWFwKG1hcCwgaXNEZWVwLCBjbG9uZUZ1bmMpIHtcbiAgdmFyIGFycmF5ID0gaXNEZWVwID8gY2xvbmVGdW5jKG1hcFRvQXJyYXkobWFwKSwgQ0xPTkVfREVFUF9GTEFHKSA6IG1hcFRvQXJyYXkobWFwKTtcbiAgcmV0dXJuIGFycmF5UmVkdWNlKGFycmF5LCBhZGRNYXBFbnRyeSwgbmV3IG1hcC5jb25zdHJ1Y3Rvcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVNYXA7XG4iLCIvKiogVXNlZCB0byBtYXRjaCBgUmVnRXhwYCBmbGFncyBmcm9tIHRoZWlyIGNvZXJjZWQgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUZsYWdzID0gL1xcdyokLztcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHJlZ2V4cGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWdleHAgVGhlIHJlZ2V4cCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGNsb25lUmVnRXhwKHJlZ2V4cCkge1xuICB2YXIgcmVzdWx0ID0gbmV3IHJlZ2V4cC5jb25zdHJ1Y3RvcihyZWdleHAuc291cmNlLCByZUZsYWdzLmV4ZWMocmVnZXhwKSk7XG4gIHJlc3VsdC5sYXN0SW5kZXggPSByZWdleHAubGFzdEluZGV4O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lUmVnRXhwO1xuIiwiLyoqXG4gKiBBZGRzIGB2YWx1ZWAgdG8gYHNldGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBtb2RpZnkuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhZGQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBzZXRgLlxuICovXG5mdW5jdGlvbiBhZGRTZXRFbnRyeShzZXQsIHZhbHVlKSB7XG4gIC8vIERvbid0IHJldHVybiBgc2V0LmFkZGAgYmVjYXVzZSBpdCdzIG5vdCBjaGFpbmFibGUgaW4gSUUgMTEuXG4gIHNldC5hZGQodmFsdWUpO1xuICByZXR1cm4gc2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFkZFNldEVudHJ5O1xuIiwiLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBhbiBhcnJheSBvZiBpdHMgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBzZXRUb0FycmF5KHNldCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KHNldC5zaXplKTtcblxuICBzZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRUb0FycmF5O1xuIiwidmFyIGFkZFNldEVudHJ5ID0gcmVxdWlyZSgnLi9fYWRkU2V0RW50cnknKSxcbiAgICBhcnJheVJlZHVjZSA9IHJlcXVpcmUoJy4vX2FycmF5UmVkdWNlJyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgY2xvbmluZy4gKi9cbnZhciBDTE9ORV9ERUVQX0ZMQUcgPSAxO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgc2V0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNsb25lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2xvbmVGdW5jIFRoZSBmdW5jdGlvbiB0byBjbG9uZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHNldC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVTZXQoc2V0LCBpc0RlZXAsIGNsb25lRnVuYykge1xuICB2YXIgYXJyYXkgPSBpc0RlZXAgPyBjbG9uZUZ1bmMoc2V0VG9BcnJheShzZXQpLCBDTE9ORV9ERUVQX0ZMQUcpIDogc2V0VG9BcnJheShzZXQpO1xuICByZXR1cm4gYXJyYXlSZWR1Y2UoYXJyYXksIGFkZFNldEVudHJ5LCBuZXcgc2V0LmNvbnN0cnVjdG9yKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVNldDtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFZhbHVlT2YgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnZhbHVlT2YgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIHRoZSBgc3ltYm9sYCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzeW1ib2wgVGhlIHN5bWJvbCBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgc3ltYm9sIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVTeW1ib2woc3ltYm9sKSB7XG4gIHJldHVybiBzeW1ib2xWYWx1ZU9mID8gT2JqZWN0KHN5bWJvbFZhbHVlT2YuY2FsbChzeW1ib2wpKSA6IHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lU3ltYm9sO1xuIiwidmFyIGNsb25lQXJyYXlCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUFycmF5QnVmZmVyJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGB0eXBlZEFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHR5cGVkQXJyYXkgVGhlIHR5cGVkIGFycmF5IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCB0eXBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2xvbmVUeXBlZEFycmF5KHR5cGVkQXJyYXksIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcih0eXBlZEFycmF5LmJ1ZmZlcikgOiB0eXBlZEFycmF5LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyB0eXBlZEFycmF5LmNvbnN0cnVjdG9yKGJ1ZmZlciwgdHlwZWRBcnJheS5ieXRlT2Zmc2V0LCB0eXBlZEFycmF5Lmxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVUeXBlZEFycmF5O1xuIiwidmFyIGNsb25lQXJyYXlCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUFycmF5QnVmZmVyJyksXG4gICAgY2xvbmVEYXRhVmlldyA9IHJlcXVpcmUoJy4vX2Nsb25lRGF0YVZpZXcnKSxcbiAgICBjbG9uZU1hcCA9IHJlcXVpcmUoJy4vX2Nsb25lTWFwJyksXG4gICAgY2xvbmVSZWdFeHAgPSByZXF1aXJlKCcuL19jbG9uZVJlZ0V4cCcpLFxuICAgIGNsb25lU2V0ID0gcmVxdWlyZSgnLi9fY2xvbmVTZXQnKSxcbiAgICBjbG9uZVN5bWJvbCA9IHJlcXVpcmUoJy4vX2Nsb25lU3ltYm9sJyksXG4gICAgY2xvbmVUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9fY2xvbmVUeXBlZEFycmF5Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZSBiYXNlZCBvbiBpdHMgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNsb25pbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNsb25lRnVuYyBUaGUgZnVuY3Rpb24gdG8gY2xvbmUgdmFsdWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVCeVRhZyhvYmplY3QsIHRhZywgY2xvbmVGdW5jLCBpc0RlZXApIHtcbiAgdmFyIEN0b3IgPSBvYmplY3QuY29uc3RydWN0b3I7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBhcnJheUJ1ZmZlclRhZzpcbiAgICAgIHJldHVybiBjbG9uZUFycmF5QnVmZmVyKG9iamVjdCk7XG5cbiAgICBjYXNlIGJvb2xUYWc6XG4gICAgY2FzZSBkYXRlVGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yKCtvYmplY3QpO1xuXG4gICAgY2FzZSBkYXRhVmlld1RhZzpcbiAgICAgIHJldHVybiBjbG9uZURhdGFWaWV3KG9iamVjdCwgaXNEZWVwKTtcblxuICAgIGNhc2UgZmxvYXQzMlRhZzogY2FzZSBmbG9hdDY0VGFnOlxuICAgIGNhc2UgaW50OFRhZzogY2FzZSBpbnQxNlRhZzogY2FzZSBpbnQzMlRhZzpcbiAgICBjYXNlIHVpbnQ4VGFnOiBjYXNlIHVpbnQ4Q2xhbXBlZFRhZzogY2FzZSB1aW50MTZUYWc6IGNhc2UgdWludDMyVGFnOlxuICAgICAgcmV0dXJuIGNsb25lVHlwZWRBcnJheShvYmplY3QsIGlzRGVlcCk7XG5cbiAgICBjYXNlIG1hcFRhZzpcbiAgICAgIHJldHVybiBjbG9uZU1hcChvYmplY3QsIGlzRGVlcCwgY2xvbmVGdW5jKTtcblxuICAgIGNhc2UgbnVtYmVyVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yKG9iamVjdCk7XG5cbiAgICBjYXNlIHJlZ2V4cFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVJlZ0V4cChvYmplY3QpO1xuXG4gICAgY2FzZSBzZXRUYWc6XG4gICAgICByZXR1cm4gY2xvbmVTZXQob2JqZWN0LCBpc0RlZXAsIGNsb25lRnVuYyk7XG5cbiAgICBjYXNlIHN5bWJvbFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVN5bWJvbChvYmplY3QpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdENsb25lQnlUYWc7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdENyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY3JlYXRlYCB3aXRob3V0IHN1cHBvcnQgZm9yIGFzc2lnbmluZ1xuICogcHJvcGVydGllcyB0byB0aGUgY3JlYXRlZCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm90byBUaGUgb2JqZWN0IHRvIGluaGVyaXQgZnJvbS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBvYmplY3QuXG4gKi9cbnZhciBiYXNlQ3JlYXRlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBvYmplY3QoKSB7fVxuICByZXR1cm4gZnVuY3Rpb24ocHJvdG8pIHtcbiAgICBpZiAoIWlzT2JqZWN0KHByb3RvKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBpZiAob2JqZWN0Q3JlYXRlKSB7XG4gICAgICByZXR1cm4gb2JqZWN0Q3JlYXRlKHByb3RvKTtcbiAgICB9XG4gICAgb2JqZWN0LnByb3RvdHlwZSA9IHByb3RvO1xuICAgIHZhciByZXN1bHQgPSBuZXcgb2JqZWN0O1xuICAgIG9iamVjdC5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUNyZWF0ZTtcbiIsInZhciBiYXNlQ3JlYXRlID0gcmVxdWlyZSgnLi9fYmFzZUNyZWF0ZScpLFxuICAgIGdldFByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2dldFByb3RvdHlwZScpLFxuICAgIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKTtcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVPYmplY3Qob2JqZWN0KSB7XG4gIHJldHVybiAodHlwZW9mIG9iamVjdC5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmICFpc1Byb3RvdHlwZShvYmplY3QpKVxuICAgID8gYmFzZUNyZWF0ZShnZXRQcm90b3R5cGUob2JqZWN0KSlcbiAgICA6IHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRDbG9uZU9iamVjdDtcbiIsInZhciBTdGFjayA9IHJlcXVpcmUoJy4vX1N0YWNrJyksXG4gICAgYXJyYXlFYWNoID0gcmVxdWlyZSgnLi9fYXJyYXlFYWNoJyksXG4gICAgYXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19hc3NpZ25WYWx1ZScpLFxuICAgIGJhc2VBc3NpZ24gPSByZXF1aXJlKCcuL19iYXNlQXNzaWduJyksXG4gICAgYmFzZUFzc2lnbkluID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnbkluJyksXG4gICAgY2xvbmVCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUJ1ZmZlcicpLFxuICAgIGNvcHlBcnJheSA9IHJlcXVpcmUoJy4vX2NvcHlBcnJheScpLFxuICAgIGNvcHlTeW1ib2xzID0gcmVxdWlyZSgnLi9fY29weVN5bWJvbHMnKSxcbiAgICBjb3B5U3ltYm9sc0luID0gcmVxdWlyZSgnLi9fY29weVN5bWJvbHNJbicpLFxuICAgIGdldEFsbEtleXMgPSByZXF1aXJlKCcuL19nZXRBbGxLZXlzJyksXG4gICAgZ2V0QWxsS2V5c0luID0gcmVxdWlyZSgnLi9fZ2V0QWxsS2V5c0luJyksXG4gICAgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaW5pdENsb25lQXJyYXkgPSByZXF1aXJlKCcuL19pbml0Q2xvbmVBcnJheScpLFxuICAgIGluaXRDbG9uZUJ5VGFnID0gcmVxdWlyZSgnLi9faW5pdENsb25lQnlUYWcnKSxcbiAgICBpbml0Q2xvbmVPYmplY3QgPSByZXF1aXJlKCcuL19pbml0Q2xvbmVPYmplY3QnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBjbG9uaW5nLiAqL1xudmFyIENMT05FX0RFRVBfRkxBRyA9IDEsXG4gICAgQ0xPTkVfRkxBVF9GTEFHID0gMixcbiAgICBDTE9ORV9TWU1CT0xTX0ZMQUcgPSA0O1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIHN1cHBvcnRlZCBieSBgXy5jbG9uZWAuICovXG52YXIgY2xvbmVhYmxlVGFncyA9IHt9O1xuY2xvbmVhYmxlVGFnc1thcmdzVGFnXSA9IGNsb25lYWJsZVRhZ3NbYXJyYXlUYWddID1cbmNsb25lYWJsZVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gY2xvbmVhYmxlVGFnc1tkYXRhVmlld1RhZ10gPVxuY2xvbmVhYmxlVGFnc1tib29sVGFnXSA9IGNsb25lYWJsZVRhZ3NbZGF0ZVRhZ10gPVxuY2xvbmVhYmxlVGFnc1tmbG9hdDMyVGFnXSA9IGNsb25lYWJsZVRhZ3NbZmxvYXQ2NFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tpbnQ4VGFnXSA9IGNsb25lYWJsZVRhZ3NbaW50MTZUYWddID1cbmNsb25lYWJsZVRhZ3NbaW50MzJUYWddID0gY2xvbmVhYmxlVGFnc1ttYXBUYWddID1cbmNsb25lYWJsZVRhZ3NbbnVtYmVyVGFnXSA9IGNsb25lYWJsZVRhZ3Nbb2JqZWN0VGFnXSA9XG5jbG9uZWFibGVUYWdzW3JlZ2V4cFRhZ10gPSBjbG9uZWFibGVUYWdzW3NldFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tzdHJpbmdUYWddID0gY2xvbmVhYmxlVGFnc1tzeW1ib2xUYWddID1cbmNsb25lYWJsZVRhZ3NbdWludDhUYWddID0gY2xvbmVhYmxlVGFnc1t1aW50OENsYW1wZWRUYWddID1cbmNsb25lYWJsZVRhZ3NbdWludDE2VGFnXSA9IGNsb25lYWJsZVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG5jbG9uZWFibGVUYWdzW2Vycm9yVGFnXSA9IGNsb25lYWJsZVRhZ3NbZnVuY1RhZ10gPVxuY2xvbmVhYmxlVGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNsb25lYCBhbmQgYF8uY2xvbmVEZWVwYCB3aGljaCB0cmFja3NcbiAqIHRyYXZlcnNlZCBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy5cbiAqICAxIC0gRGVlcCBjbG9uZVxuICogIDIgLSBGbGF0dGVuIGluaGVyaXRlZCBwcm9wZXJ0aWVzXG4gKiAgNCAtIENsb25lIHN5bWJvbHNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNsb25pbmcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2tleV0gVGhlIGtleSBvZiBgdmFsdWVgLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBwYXJlbnQgb2JqZWN0IG9mIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIG9iamVjdHMgYW5kIHRoZWlyIGNsb25lIGNvdW50ZXJwYXJ0cy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBjbG9uZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VDbG9uZSh2YWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwga2V5LCBvYmplY3QsIHN0YWNrKSB7XG4gIHZhciByZXN1bHQsXG4gICAgICBpc0RlZXAgPSBiaXRtYXNrICYgQ0xPTkVfREVFUF9GTEFHLFxuICAgICAgaXNGbGF0ID0gYml0bWFzayAmIENMT05FX0ZMQVRfRkxBRyxcbiAgICAgIGlzRnVsbCA9IGJpdG1hc2sgJiBDTE9ORV9TWU1CT0xTX0ZMQUc7XG5cbiAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICByZXN1bHQgPSBvYmplY3QgPyBjdXN0b21pemVyKHZhbHVlLCBrZXksIG9iamVjdCwgc3RhY2spIDogY3VzdG9taXplcih2YWx1ZSk7XG4gIH1cbiAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKTtcbiAgaWYgKGlzQXJyKSB7XG4gICAgcmVzdWx0ID0gaW5pdENsb25lQXJyYXkodmFsdWUpO1xuICAgIGlmICghaXNEZWVwKSB7XG4gICAgICByZXR1cm4gY29weUFycmF5KHZhbHVlLCByZXN1bHQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFnID0gZ2V0VGFnKHZhbHVlKSxcbiAgICAgICAgaXNGdW5jID0gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcblxuICAgIGlmIChpc0J1ZmZlcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjbG9uZUJ1ZmZlcih2YWx1ZSwgaXNEZWVwKTtcbiAgICB9XG4gICAgaWYgKHRhZyA9PSBvYmplY3RUYWcgfHwgdGFnID09IGFyZ3NUYWcgfHwgKGlzRnVuYyAmJiAhb2JqZWN0KSkge1xuICAgICAgcmVzdWx0ID0gKGlzRmxhdCB8fCBpc0Z1bmMpID8ge30gOiBpbml0Q2xvbmVPYmplY3QodmFsdWUpO1xuICAgICAgaWYgKCFpc0RlZXApIHtcbiAgICAgICAgcmV0dXJuIGlzRmxhdFxuICAgICAgICAgID8gY29weVN5bWJvbHNJbih2YWx1ZSwgYmFzZUFzc2lnbkluKHJlc3VsdCwgdmFsdWUpKVxuICAgICAgICAgIDogY29weVN5bWJvbHModmFsdWUsIGJhc2VBc3NpZ24ocmVzdWx0LCB2YWx1ZSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWNsb25lYWJsZVRhZ3NbdGFnXSkge1xuICAgICAgICByZXR1cm4gb2JqZWN0ID8gdmFsdWUgOiB7fTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IGluaXRDbG9uZUJ5VGFnKHZhbHVlLCB0YWcsIGJhc2VDbG9uZSwgaXNEZWVwKTtcbiAgICB9XG4gIH1cbiAgLy8gQ2hlY2sgZm9yIGNpcmN1bGFyIHJlZmVyZW5jZXMgYW5kIHJldHVybiBpdHMgY29ycmVzcG9uZGluZyBjbG9uZS5cbiAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQodmFsdWUpO1xuICBpZiAoc3RhY2tlZCkge1xuICAgIHJldHVybiBzdGFja2VkO1xuICB9XG4gIHN0YWNrLnNldCh2YWx1ZSwgcmVzdWx0KTtcblxuICB2YXIga2V5c0Z1bmMgPSBpc0Z1bGxcbiAgICA/IChpc0ZsYXQgPyBnZXRBbGxLZXlzSW4gOiBnZXRBbGxLZXlzKVxuICAgIDogKGlzRmxhdCA/IGtleXNJbiA6IGtleXMpO1xuXG4gIHZhciBwcm9wcyA9IGlzQXJyID8gdW5kZWZpbmVkIDoga2V5c0Z1bmModmFsdWUpO1xuICBhcnJheUVhY2gocHJvcHMgfHwgdmFsdWUsIGZ1bmN0aW9uKHN1YlZhbHVlLCBrZXkpIHtcbiAgICBpZiAocHJvcHMpIHtcbiAgICAgIGtleSA9IHN1YlZhbHVlO1xuICAgICAgc3ViVmFsdWUgPSB2YWx1ZVtrZXldO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBwb3B1bGF0ZSBjbG9uZSAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGFzc2lnblZhbHVlKHJlc3VsdCwga2V5LCBiYXNlQ2xvbmUoc3ViVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGtleSwgdmFsdWUsIHN0YWNrKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VDbG9uZTtcbiIsInZhciBiYXNlQ2xvbmUgPSByZXF1aXJlKCcuL19iYXNlQ2xvbmUnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgY2xvbmluZy4gKi9cbnZhciBDTE9ORV9ERUVQX0ZMQUcgPSAxLFxuICAgIENMT05FX1NZTUJPTFNfRkxBRyA9IDQ7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5jbG9uZWAgZXhjZXB0IHRoYXQgaXQgcmVjdXJzaXZlbHkgY2xvbmVzIGB2YWx1ZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAxLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHJlY3Vyc2l2ZWx5IGNsb25lLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGRlZXAgY2xvbmVkIHZhbHVlLlxuICogQHNlZSBfLmNsb25lXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW3sgJ2EnOiAxIH0sIHsgJ2InOiAyIH1dO1xuICpcbiAqIHZhciBkZWVwID0gXy5jbG9uZURlZXAob2JqZWN0cyk7XG4gKiBjb25zb2xlLmxvZyhkZWVwWzBdID09PSBvYmplY3RzWzBdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGVlcCh2YWx1ZSkge1xuICByZXR1cm4gYmFzZUNsb25lKHZhbHVlLCBDTE9ORV9ERUVQX0ZMQUcgfCBDTE9ORV9TWU1CT0xTX0ZMQUcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lRGVlcDtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmZpZ0Vycm9yIGV4dGVuZHMgRXJyb3J7XG4gICAgY29uc3RydWN0b3IobWVzc2FnZSkge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ0NvbmZpZ0Vycm9yJztcbiAgICAgIH1cbn0iLCJsZXQgY291bnRlciA9IDA7XG5leHBvcnQgZnVuY3Rpb24gaWRHZW5lcmF0b3IoKXtcbiAgICAgICAgbGV0IGlkID0gJ2lkLScgKyBjb3VudGVyKys7XG4gICAgICAgIHJldHVybiAgaWQ7XG4gICAgfVxuXG5leHBvcnQgZnVuY3Rpb24gRXVjbGlkZWFuRGlzdGFuY2UoZnJvbSwgdG8pIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KGZyb20uY29vcmRpbmF0ZXMueCAtIHRvLmNvb3JkaW5hdGVzLngsIDIpICsgTWF0aC5wb3coZnJvbS5jb29yZGluYXRlcy55IC0gdG8uY29vcmRpbmF0ZXMueSwgMikpO1xufSIsImltcG9ydCBFbnRpdHkgZnJvbSAnLi9BYnN0cmFjdENsYXNzZXMvRW50aXR5JztcbmltcG9ydCBjbG9uZURlZXAgZnJvbSAnbG9kYXNoL2Nsb25lRGVlcCc7XG5pbXBvcnQgQ29uZmlnRXJyb3IgZnJvbSAnLi9lcnJvcnMvQ29uZmlnRXJyb3IuanMnO1xuaW1wb3J0IEludENvb3JkaW5hdGUgZnJvbSAnLi9pbnRDb29yZGluYXRlLmpzJztcbmltcG9ydCB7aWRHZW5lcmF0b3J9IGZyb20gJy4vY3VzdG9tVXRpbHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2FyZCBleHRlbmRzIEVudGl0eSB7XG4gICAgY29uc3RydWN0b3IoY2FsbGJhY2tzLCBjb25maWcpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBsZXQgcGFyc2VkQ29uZmlnXG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgcGFyc2VkQ29uZmlnID0gdGhpcy5wYXJzZUNvbmZpZyhjb25maWcpO1xuICAgICAgICB9Y2F0Y2goZSl7XG4gICAgICAgICAgICBpZih0eXBlb2YgY2FsbGJhY2tzLnByb3BhZ2F0ZUVycm9yID09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5wcm9wYWdhdGVFcnJvcihlKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YXRlID0ge307XG4gICAgICAgIHRoaXMuc3RhdGUuSUQgPSBpZEdlbmVyYXRvcigpO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZSwgcGFyc2VkQ29uZmlnKTtcbiAgICAgICAgdGhpcy5jYWxsYmFja3MgPSBjYWxsYmFja3M7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIH1cblxuICAgIHBhcnNlQ29uZmlnKGNvbmZpZykge1xuICAgICAgICBpZiAoY29uZmlnLndpZHRoID09IHVuZGVmaW5lZCB8fCBjb25maWcuaGVpZ2h0ID09IHVuZGVmaW5lZCB8fCBjb25maWcub2JzdGFjbGVzICE9IHVuZGVmaW5lZCAmJiB0eXBlb2YgY29uZmlnLm9ic3RhY2xlcyA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQ29uZmlnRXJyb3IoJ01pc3NpbmcgZmllbGRzIGluIGNvbmZpZyBvciBnaXZlbiBvYnN0YWNsZSBmaWVsZCBpcyBub3QgYSBsaXN0LiBGaWVsZHMgbmVlZGVkOiB3aWR0aDppbnRlZ2VyLCBoZWlnaHQ6IGludGVnZXInKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGFyc2VkQ29uZmlnID0ge307XG4gICAgICAgIHBhcnNlZENvbmZpZy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHBhcnNlZENvbmZpZy53aWR0aCA9IE51bWJlcihjb25maWcud2lkdGgpO1xuICAgICAgICBwYXJzZWRDb25maWcuaGVpZ2h0ID0gTnVtYmVyKGNvbmZpZy5oZWlnaHQpO1xuICAgICAgICBcbiAgICAgICAgbGV0IHBhcnNlZE9ic3RhY2xlcyA9IFtdO1xuICAgICAgICBpZihjb25maWcub2JzdGFjbGVzKXtcbiAgICAgICAgICAgIGZvcihsZXQgb2JzdGFjbGUgb2YgY29uZmlnLm9ic3RhY2xlcyl7XG4gICAgICAgICAgICAgICAgcGFyc2VkT2JzdGFjbGVzLnB1c2gobmV3IEludENvb3JkaW5hdGUoTnVtYmVyKG9ic3RhY2xlLnBvc2l0aW9uLngpLCBOdW1iZXIob2JzdGFjbGUucG9zaXRpb24ueSkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHBhcnNlZENvbmZpZy5vYnN0YWNsZXMgPSBwYXJzZWRPYnN0YWNsZXM7XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlZENvbmZpZztcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7fVxuXG4gICAgcmVzZXQoKSB7fVxuXG4gICAgc2V0U3RhdGUob3B0aW9ucykge1xuICAgICAgICBsZXQgbmV4dFN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihuZXh0U3RhdGUsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgfVxuXG4gICAgZ2V0IGRpbWVuc2lvbnMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkaW1YOiB0aGlzLnN0YXRlLndpZHRoLFxuICAgICAgICAgICAgZGltWTogdGhpcy5zdGF0ZS5oZWlnaHRcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBJRCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5JRDtcbiAgICB9XG5cbiAgICBnZXQgb2JzdGFjbGVzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLm9ic3RhY2xlcztcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBPYnNlcnZlckVudGl0eSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmIChuZXcudGFyZ2V0ID09PSBPYnNlcnZlckVudGl0eSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWJzdHJhY3QgY2xhc3MgY2Fubm90IGJlIGluc3RhbnRpYXRlZCFcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy51cGRhdGUgPT09IHZvaWQgMCB8fCB0eXBlb2YgdGhpcy51cGRhdGUgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWJzdHJhY3QgbWV0aG9kICd1cGRhdGUnIG11c3QgYmUgb3ZlcnJpZGVuIVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9uTm90aWZ5ID09PSB2b2lkIDAgfHwgdHlwZW9mIHRoaXMub25Ob3RpZnkgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWJzdHJhY3QgbWV0aG9kICdvbk5vdGlmeScgbXVzdCBiZSBvdmVycmlkZW4hXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5yZXNldCA9PT0gdm9pZCAwIHx8IHR5cGVvZiB0aGlzLnJlc2V0ICE9PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0IG1ldGhvZCAncmVzZXQnIG11c3QgYmUgb3ZlcnJpZGVuIVwiKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tYW5kIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKG5ldy50YXJnZXQgPT09IENvbW1hbmQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0IGNsYXNzLiBDYW5ub3QgYmUgaW5zdGFudGlhdGVkIVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmV4ZWN1dGUgPT09IHZvaWQgMCB8fCB0eXBlb2YgdGhpcy5leGVjdXRlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBYnN0cmFjdCBtZXRob2QgJ2V4ZWN1dGUnIG11c3QgYmUgb3ZlcnJpZGVuIVwiKTtcbiAgICAgICAgfVxuICAgIH1cbn07IiwiaW1wb3J0IENvbW1hbmQgZnJvbSAnLi4vQWJzdHJhY3RDbGFzc2VzL0NvbW1hbmQnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlZnRUdXJuQ29tbWFuZCBleHRlbmRzIENvbW1hbmR7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBleGVjdXRlKHNuYWtlKXtcbiAgICAgICAgcmV0dXJuIHNuYWtlLmhhbmRsZUlucHV0KCdMRUZUJyk7XG4gICAgfVxufSIsImltcG9ydCBDb21tYW5kIGZyb20gJy4uL0Fic3RyYWN0Q2xhc3Nlcy9Db21tYW5kJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmlnaHRUdXJuQ29tbWFuZCBleHRlbmRzIENvbW1hbmR7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBleGVjdXRlKHNuYWtlKXtcbiAgICAgICAgcmV0dXJuIHNuYWtlLmhhbmRsZUlucHV0KCdSSUdIVCcpO1xuICAgIH1cbn0iLCJpbXBvcnQgQ29tbWFuZCBmcm9tICcuLi9BYnN0cmFjdENsYXNzZXMvQ29tbWFuZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvd25UdXJuQ29tbWFuZCBleHRlbmRzIENvbW1hbmR7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBleGVjdXRlKHNuYWtlKXtcbiAgICAgICAgcmV0dXJuIHNuYWtlLmhhbmRsZUlucHV0KCdET1dOJyk7XG4gICAgfVxufSIsImltcG9ydCBDb21tYW5kIGZyb20gJy4uL0Fic3RyYWN0Q2xhc3Nlcy9Db21tYW5kJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXBUdXJuQ29tbWFuZCBleHRlbmRzIENvbW1hbmR7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBleGVjdXRlKHNuYWtlKXtcbiAgICAgICAgcmV0dXJuIHNuYWtlLmhhbmRsZUlucHV0KCdVUCcpO1xuICAgIH1cbn0iLCIvLyd1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgT2JzZXJ2ZXJFbnRpdHkgZnJvbSAnLi9BYnN0cmFjdENsYXNzZXMvT2JzZXJ2ZXJFbnRpdHknO1xuaW1wb3J0IENvbmZpZ0Vycm9yIGZyb20gJy4vZXJyb3JzL0NvbmZpZ0Vycm9yLmpzJztcbmltcG9ydCBMZWZ0VHVybkNvbW1hbmQgZnJvbSAnLi9Db21tYW5kcy9MZWZ0VHVybkNvbW1hbmQnO1xuaW1wb3J0IFJpZ2h0VHVybkNvbW1hbmQgZnJvbSAnLi9Db21tYW5kcy9SaWdodFR1cm5Db21tYW5kJztcbmltcG9ydCBEb3duVHVybkNvbW1hbmQgZnJvbSAnLi9Db21tYW5kcy9Eb3duVHVybkNvbW1hbmQnO1xuaW1wb3J0IFVwVHVybkNvbW1hbmQgZnJvbSAnLi9Db21tYW5kcy9VcFR1cm5Db21tYW5kJztcbmltcG9ydCBJbnRDb29yZGluYXRlIGZyb20gJy4vaW50Q29vcmRpbmF0ZSc7XG5cbmltcG9ydCB7XG4gICAgaWRHZW5lcmF0b3Jcbn0gZnJvbSAnLi9jdXN0b21VdGlscy5qcyc7XG5pbXBvcnQgY2xvbmVEZWVwIGZyb20gJ2xvZGFzaC9jbG9uZURlZXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbmFrZSBleHRlbmRzIE9ic2VydmVyRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihjYWxsYmFja3MsIGNvbmZpZywgc3RyYXRlZ3ksIG5vdGlmaWVyKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBsZXQgcGFyc2VkQ29uZmlnXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwYXJzZWRDb25maWcgPSB0aGlzLnBhcnNlQ29uZmlnKGNvbmZpZyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2tzLnByb3BhZ2F0ZUVycm9yID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MucHJvcGFnYXRlRXJyb3IoZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fVxuICAgICAgICB0aGlzLnN0YXRlLklEID0gaWRHZW5lcmF0b3IoKTtcbiAgICAgICAgdGhpcy5zdGF0ZS52ZWxvY2l0eSA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0ZS5ub3RpZmljYXRpb25CdWZmZXIgPSBbXTtcbiAgICAgICAgdGhpcy5zdGF0ZS5zdGF0dXMgPSBcIkFMSVZFXCI7XG4gICAgICAgIHRoaXMuc3RhdGUuc3RyYXRlZ3kgPSBzdHJhdGVneTtcbiAgICAgICAgdGhpcy5zdGF0ZS5wYXRoID0gW107XG4gICAgICAgIHRoaXMuc3RhdGUudGFyZ2V0ID0gdW5kZWZpbmVkO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuc3RhdGUsIHBhcnNlZENvbmZpZyk7XG5cbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMudGltZXIgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0aGlzLmNhbGxiYWNrcyA9IGNhbGxiYWNrcztcbiAgICAgICAgaWYgKG5vdGlmaWVyKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmaWVyID0gbm90aWZpZXI7XG4gICAgICAgICAgICBub3RpZmllci5zdWJzY3JpYmUodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJzZUNvbmZpZyhjb25maWcpIHtcbiAgICAgICAgaWYgKGNvbmZpZy5zdGFydERpcmVjdGlvbiA9PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0VmVsb2NpdHkgPT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydFggPT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydFkgPT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5iYXNlTGVuZ3RoID09IHVuZGVmaW5lZCB8fCBjb25maWcubGltaXRYID09IHVuZGVmaW5lZCB8fCBjb25maWcubGltaXRZID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IENvbmZpZ0Vycm9yKCdNaXNzaW5nIGNvbmZpZ3VyYXRpb24gb3IgbWlzc2luZyBmaWVsZHMgaW4gY29uZmlndXJhdGlvbi4gTmVlZGVkIGZpZWxkczogc3RhcnRkaXJlY3Rpb246IChMRUZUIHwgUklHSFQgfCBVUCB8IERPV04pLCBzdGFydFZlbG9jaXR5OiBpbnRlZ2VyLCBzdGFydFg6IGludGVnZXIsIHN0YXJ0WTppbnRlZ2VyLCBiYXNlTGVuZ3RoOiBpbnRlZ2VyLCBsaW1pdFg6IGludGVnZXIsIGxpbWl0WTogaW50ZWdlcicpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwYXJzZWRDb25maWcgPSB7fVxuICAgICAgICBwYXJzZWRDb25maWcuYm9keSA9IFtdO1xuICAgICAgICBwYXJzZWRDb25maWcuZGlyZWN0aW9uID0gY29uZmlnLnN0YXJ0RGlyZWN0aW9uO1xuICAgICAgICBwYXJzZWRDb25maWcuYmFzZVZlbG9jaXR5ID0gTnVtYmVyKGNvbmZpZy5zdGFydFZlbG9jaXR5KTtcbiAgICAgICAgcGFyc2VkQ29uZmlnLmxpbWl0cyA9IHtcbiAgICAgICAgICAgIHg6IE51bWJlcihjb25maWcubGltaXRYKSxcbiAgICAgICAgICAgIHk6IE51bWJlcihjb25maWcubGltaXRZKVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29uZmlnLmJhc2VMZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgcGFyc2VkQ29uZmlnLmJvZHlbaV0gPSBuZXcgSW50Q29vcmRpbmF0ZShOdW1iZXIoY29uZmlnLnN0YXJ0WCksIE51bWJlcihjb25maWcuc3RhcnRZKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmZpZy5jb2xvcikge1xuICAgICAgICAgICAgcGFyc2VkQ29uZmlnLmNvbG9yID0gY29uZmlnLmNvbG9yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VkQ29uZmlnLmNvbG9yID0gJ2dyZWVuJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJzZWRDb25maWc7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBsZXQgbmV4dFN0YXRlID0ge307XG4gICAgICAgIGxldCBuZXh0RGlyZWN0aW9uO1xuICAgICAgICBsZXQgbmV4dFZlbG9jaXR5O1xuICAgICAgICBsZXQgbmV4dEJvZHk7XG4gICAgICAgIGxldCBjb21tYW5kUmVzdWx0O1xuICAgICAgICBsZXQgbmV4dFN0ZXA7XG4gICAgICAgIGxldCBwYXRoO1xuICAgICAgICBsZXQgY29tbWFuZDtcbiAgICAgICAgbGV0IG5vdGlmaWVyID0gdGhpcy5ub3RpZmllcjtcblxuICAgICAgICBpZiAodGhpcy5pc0FsaXZlKCkpIHtcbiAgICAgICAgICAgIHBhdGggPSB0aGlzLmNhbGN1bGF0ZVBhdGgoKTtcbiAgICAgICAgICAgIGlmIChwYXRoICYmIHBhdGgubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGNvbW1hbmQgPSB0aGlzLmNhbGN1bGF0ZUNvbW1hbmQodGhpcy5oZWFkLCBwYXRoWzFdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29tbWFuZCA9IGNvbW1hbmQ7XG4gICAgICAgICAgICBpZiAoY29tbWFuZCkge1xuICAgICAgICAgICAgICAgIGNvbW1hbmRSZXN1bHQgPSBjb21tYW5kLmV4ZWN1dGUodGhpcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5leHREaXJlY3Rpb24gPSBjb21tYW5kUmVzdWx0IHx8IHRoaXMuZGlyZWN0aW9uO1xuICAgICAgICAgICAgbmV4dFZlbG9jaXR5ID0gdGhpcy5jYWxjdWxhdGVWZWxvY2l0eShuZXh0RGlyZWN0aW9uKTtcbiAgICAgICAgICAgIG5leHRCb2R5ID0gdGhpcy5tb3ZlKG5leHRWZWxvY2l0eS54LCBuZXh0VmVsb2NpdHkueSk7XG4gICAgICAgICAgICBuZXh0U3RlcCA9IG5leHRCb2R5WzBdO1xuICAgICAgICAgICAgaWYgKG5vdGlmaWVyKSB7XG4gICAgICAgICAgICAgICAgbm90aWZpZXIuY2FsY3VsYXRlU3RlcENvbGxpc2lvblR5cGUobmV4dFN0ZXAsIHRoaXMuSUQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihuZXh0U3RhdGUsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IG5leHREaXJlY3Rpb24sXG4gICAgICAgICAgICAgICAgYm9keTogbmV4dEJvZHksXG4gICAgICAgICAgICAgICAgdmVsb2NpdHk6IG5leHRWZWxvY2l0eSxcbiAgICAgICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxldCBub3RpZmljYXRpb25CdWZmZXIgPSB0aGlzLnN0YXRlLm5vdGlmaWNhdGlvbkJ1ZmZlcjtcbiAgICAgICAgICAgIGxldCBub3RpZmljYXRpb24gPSBub3RpZmljYXRpb25CdWZmZXIucG9wKCk7XG4gICAgICAgICAgICB3aGlsZSAobm90aWZpY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbiwgbmV4dFN0YXRlKTtcbiAgICAgICAgICAgICAgICBub3RpZmljYXRpb24gPSBub3RpZmljYXRpb25CdWZmZXIucG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5pc0FsaXZlKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJlc2V0KCkge1xuICAgICAgICBsZXQgcGFyc2VkQ29uZmlnID0gdGhpcy5wYXJzZUNvbmZpZyh0aGlzLmNvbmZpZyk7XG4gICAgICAgIGxldCBuZXh0U3RhdGUgPSB7XG4gICAgICAgICAgICB2ZWxvY2l0eToge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXR1czogXCJBTElWRVwiLFxuICAgICAgICAgICAgdGFyZ2V0OiB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuYXNzaWduKG5leHRTdGF0ZSwgcGFyc2VkQ29uZmlnKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUpO1xuICAgIH1cblxuICAgIGRpZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzdGF0dXM6ICdERUFEJ1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIG9uTm90aWZ5KGVudGl0eSwgZXZlbnQpIHtcbiAgICAgICAgbGV0IGV2ZW50VHlwZSA9IGV2ZW50LnR5cGVcbiAgICAgICAgc3dpdGNoIChldmVudFR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgKCdQSUxMX0NPTExJU0lPTicpOiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudGl0eS5JRCA9PSB0aGlzLklEKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzdG9yZWROb3RpZmljYXRpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBldmVudFR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBlbnRpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGlsbDogZXZlbnQucGlsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlTm90aWZpY2F0aW9uKHN0b3JlZE5vdGlmaWNhdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAoJ1dBTExfQ09MTElTSU9OJyk6IHtcbiAgICAgICAgICAgICAgICBpZiAoZW50aXR5LklEID09IHRoaXMuSUQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0b3JlZE5vdGlmaWNhdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGV2ZW50VHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IGVudGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVOb3RpZmljYXRpb24oc3RvcmVkTm90aWZpY2F0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICgnQk9EWV9DT0xMSVNJT04nKToge1xuICAgICAgICAgICAgICAgIGlmIChlbnRpdHkuSUQgPT0gdGhpcy5JRCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3RvcmVkTm90aWZpY2F0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogZXZlbnRUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eTogZW50aXR5XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZU5vdGlmaWNhdGlvbihzdG9yZWROb3RpZmljYXRpb24pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAoJ1RBUkdFVF9SRUFDSEVEJyk6IHtcbiAgICAgICAgICAgICAgICBpZiAoZW50aXR5LklEID09IHRoaXMuSUQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0b3JlZE5vdGlmaWNhdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGV2ZW50VHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IGVudGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVOb3RpZmljYXRpb24oc3RvcmVkTm90aWZpY2F0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9jZXNzTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbiwgbmV4dFN0YXRlKSB7XG4gICAgICAgIGxldCBub3RpZmljYXRpb25SZXN1bHQgPSB7fTtcbiAgICAgICAgbGV0IHBheWxvYWQgPSBub3RpZmljYXRpb24ucGF5bG9hZFxuICAgICAgICBzd2l0Y2ggKG5vdGlmaWNhdGlvbi50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICgnUElMTF9DT0xMSVNJT04nKTpcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5lYXQocGF5bG9hZC5waWxsLnBpbGxWYWx1ZSk7XG4gICAgICAgICAgICAgICAgbmV4dFN0YXRlLmJvZHkucHVzaCguLi5yZXN1bHQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAoJ1dBTExfQ09MTElTSU9OJyk6XG4gICAgICAgICAgICAgICAgdGhpcy5kaWUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgKCdCT0RZX0NPTExJU0lPTicpOlxuICAgICAgICAgICAgICAgIHRoaXMuZGllKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICgnVEFSR0VUX1JFQUNIRUQnKTpcbiAgICAgICAgICAgICAgICAgICAgbmV4dFN0YXRlLnRhcmdldCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm90aWZpY2F0aW9uUmVzdWx0O1xuICAgIH1cblxuICAgIHNldFN0YXRlKG9wdGlvbnMpIHtcbiAgICAgICAgbGV0IG5leHRTdGF0ZSA9IGNsb25lRGVlcCh0aGlzLnN0YXRlKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihuZXh0U3RhdGUsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgfVxuXG4gICAgaGFuZGxlSW5wdXQoZGlyZWN0aW9uKSB7XG4gICAgICAgIGlmICghdGhpcy5pc09wcG9zaXRlRGlyZWN0aW9uKGRpcmVjdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb247XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBtb3ZlKHZlbG9jaXR5WCwgdmVsb2NpdHlZKSB7XG4gICAgICAgIGxldCBuZXh0Qm9keSA9IGNsb25lRGVlcCh0aGlzLmJvZHkpO1xuXG4gICAgICAgIG5leHRCb2R5LnBvcCgpO1xuICAgICAgICBsZXQgbmV4dEhlYWQgPSB0aGlzLmNhbGN1bGF0ZU5leHRIZWFkKHZlbG9jaXR5WCwgdmVsb2NpdHlZKVxuICAgICAgICBuZXh0Qm9keS51bnNoaWZ0KG5leHRIZWFkKTtcblxuICAgICAgICByZXR1cm4gbmV4dEJvZHk7XG4gICAgfVxuXG4gICAgc3RvcmVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uKSB7XG4gICAgICAgIGlmIChub3RpZmljYXRpb24udHlwZSA9PSB1bmRlZmluZWQgfHwgbm90aWZpY2F0aW9uLnBheWxvYWQgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm5vdGlmaWNhdGlvbkJ1ZmZlci51bnNoaWZ0KG5vdGlmaWNhdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhbGN1bGF0ZVZlbG9jaXR5KGRpcmVjdGlvbikge1xuICAgICAgICBsZXQgbmV4dFZlbG9jaXR5ID0ge307XG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlICdSSUdIVCc6XG4gICAgICAgICAgICAgICAgbmV4dFZlbG9jaXR5LnggPSB0aGlzLnN0YXRlLmJhc2VWZWxvY2l0eTtcbiAgICAgICAgICAgICAgICBuZXh0VmVsb2NpdHkueSA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdMRUZUJzpcbiAgICAgICAgICAgICAgICBuZXh0VmVsb2NpdHkueCA9IC10aGlzLnN0YXRlLmJhc2VWZWxvY2l0eTtcbiAgICAgICAgICAgICAgICBuZXh0VmVsb2NpdHkueSA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdET1dOJzpcbiAgICAgICAgICAgICAgICBuZXh0VmVsb2NpdHkueCA9IDA7XG4gICAgICAgICAgICAgICAgbmV4dFZlbG9jaXR5LnkgPSB0aGlzLnN0YXRlLmJhc2VWZWxvY2l0eTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1VQJzpcbiAgICAgICAgICAgICAgICBuZXh0VmVsb2NpdHkueCA9IDA7XG4gICAgICAgICAgICAgICAgbmV4dFZlbG9jaXR5LnkgPSAtdGhpcy5zdGF0ZS5iYXNlVmVsb2NpdHk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXh0VmVsb2NpdHk7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlTmV4dEhlYWQodmVsb2NpdHlYLCB2ZWxvY2l0eVkpIHtcbiAgICAgICAgbGV0IGhlYWQgPSB0aGlzLmhlYWQ7XG4gICAgICAgIGxldCBuZXh0UG9zWCA9IGhlYWQuY29vcmRpbmF0ZXMueCArIHZlbG9jaXR5WDtcbiAgICAgICAgbGV0IG5leHRQb3NZID0gaGVhZC5jb29yZGluYXRlcy55ICsgdmVsb2NpdHlZO1xuICAgICAgICBsZXQgbGltaXRzID0gdGhpcy5zdGF0ZS5saW1pdHM7XG5cblxuICAgICAgICBpZiAobmV4dFBvc1ggPCAwIHx8IG5leHRQb3NYID49IGxpbWl0cy54IHx8IG5leHRQb3NZIDwgMCB8fCBuZXh0UG9zWSA+PSBsaW1pdHMueSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBJbnRDb29yZGluYXRlKG5leHRQb3NYLCBuZXh0UG9zWSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBJbnRDb29yZGluYXRlKG5leHRQb3NYLCBuZXh0UG9zWSk7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlQ29tbWFuZChmcm9tLCB0bykge1xuICAgICAgICBsZXQgZnJvbVggPSBmcm9tLmNvb3JkaW5hdGVzLng7XG4gICAgICAgIGxldCBmcm9tWSA9IGZyb20uY29vcmRpbmF0ZXMueTtcbiAgICAgICAgbGV0IHRvWCA9IHRvLmNvb3JkaW5hdGVzLng7XG4gICAgICAgIGxldCB0b1kgPSB0by5jb29yZGluYXRlcy55O1xuICAgICAgICBsZXQgY3VyckRpcmVjdGlvbiA9IHRoaXMuZGlyZWN0aW9uO1xuXG4gICAgICAgIGlmIChmcm9tWCAtIHRvWCA+IDAgJiYgIShjdXJyRGlyZWN0aW9uID09ICdSSUdIVCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IExlZnRUdXJuQ29tbWFuZCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmcm9tWCAtIHRvWCA8IDAgJiYgIShjdXJyRGlyZWN0aW9uID09ICdMRUZUJykpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmlnaHRUdXJuQ29tbWFuZCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmcm9tWSAtIHRvWSA+IDAgJiYgIShjdXJyRGlyZWN0aW9uID09ICdET1dOJykpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVXBUdXJuQ29tbWFuZCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmcm9tWSAtIHRvWSA8IDAgJiYgIShjdXJyRGlyZWN0aW9uID09ICdVUCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERvd25UdXJuQ29tbWFuZCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG5cbiAgICBlYXQoZ2Fpbikge1xuICAgICAgICBsZXQgYWRkaXRpb25hbE5vZGVzID0gW107XG4gICAgICAgIGxldCB0YWlsTm9kZSA9IHRoaXMuYm9keVt0aGlzLmJvZHlMZW5ndGggLSAxXTtcbiAgICAgICAgbGV0IHRhaWxOb2RlQ29vcmRpbmF0ZXMgPSB0YWlsTm9kZS5jb29yZGluYXRlcztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYWluOyBpKyspIHtcbiAgICAgICAgICAgIGFkZGl0aW9uYWxOb2Rlcy5wdXNoKG5ldyBJbnRDb29yZGluYXRlKHRhaWxOb2RlQ29vcmRpbmF0ZXMueCwgdGFpbE5vZGVDb29yZGluYXRlcy55KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWRkaXRpb25hbE5vZGVzO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZVBhdGgoKSB7XG4gICAgICAgIGxldCBzdHJhdGVneSA9IHRoaXMuc3RhdGUuc3RyYXRlZ3k7XG4gICAgICAgIGxldCBwYXRoID0gW107XG4gICAgICAgIGlmIChzdHJhdGVneSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdHJhdGVneS5jYWxjdWxhdGVUYXJnZXQgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRhcmdldCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IHN0cmF0ZWd5LmNhbGN1bGF0ZVRhcmdldCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RyYXRlZ3kucGF0aGZpbmRlciA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0VGltZSA9IHRoaXMudGltZXIuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBzdHJhdGVneS5wYXRoZmluZGVyKHRoaXMpO1xuICAgICAgICAgICAgICAgIGxldCBlbmRUaW1lID0gdGhpcy50aW1lci5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lci5nZXRcbiAgICAgICAgICAgICAgICBsZXQgcnVudGltZSA9IGVuZFRpbWUgLSBzdGFydFRpbWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFja3MucHJvcGFnYXRlUnVudGltZSh0aGlzLklELCBydW50aW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9XG5cbiAgICBpc09wcG9zaXRlRGlyZWN0aW9uKGRpcmVjdGlvbikge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5kaXJlY3Rpb24gPT09ICdSSUdIVCcgJiYgZGlyZWN0aW9uID09PSAnTEVGVCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuZGlyZWN0aW9uID09PSAnTEVGVCcgJiYgZGlyZWN0aW9uID09PSAnUklHSFQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmRpcmVjdGlvbiA9PT0gJ1VQJyAmJiBkaXJlY3Rpb24gPT09ICdET1dOJykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5kaXJlY3Rpb24gPT09ICdET1dOJyAmJiBkaXJlY3Rpb24gPT09ICdVUCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpc0FsaXZlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5zdGF0dXMgPT09ICdBTElWRSc7XG4gICAgfVxuXG4gICAgZ2V0IGJvZHlMZW5ndGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmJvZHkubGVuZ3RoO1xuICAgIH1cblxuICAgIGdldCBlbmRPZkJvZHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvZHlbdGhpcy5ib2R5TGVuZ3RoIC0gMV07XG4gICAgfVxuXG4gICAgZ2V0IGJvZHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmJvZHk7XG4gICAgfVxuXG4gICAgZ2V0IGJhc2VWZWxvY2l0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuYmFzZVZlbG9jaXR5O1xuICAgIH1cblxuICAgIGdldCBoZWFkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2R5WzBdO1xuICAgIH1cblxuICAgIGdldCBkaXJlY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmRpcmVjdGlvbjtcbiAgICB9XG4gICAgZ2V0IHN0YXR1cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuc3RhdHVzO1xuICAgIH1cblxuICAgIGdldCB0YXJnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnRhcmdldDtcbiAgICB9XG5cbiAgICBnZXQgdGFpbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9keS5zbGljZSgxKTtcbiAgICB9XG5cbiAgICBnZXQgSUQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLklEO1xuICAgIH1cblxuICAgIGdldCBwYXRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5wYXRoO1xuICAgIH1cblxuICAgIGdldCBjb2xvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuY29sb3I7XG4gICAgfVxufSIsImltcG9ydCBPYnNlcnZlckVudGl0eSBmcm9tICcuL0Fic3RyYWN0Q2xhc3Nlcy9PYnNlcnZlckVudGl0eSc7XG5pbXBvcnQgY2xvbmVEZWVwIGZyb20gJ2xvZGFzaC9jbG9uZURlZXAnO1xuaW1wb3J0IENvbmZpZ0Vycm9yIGZyb20gJy4vZXJyb3JzL0NvbmZpZ0Vycm9yLmpzJztcbmltcG9ydCBJbnRDb29yZGluYXRlIGZyb20gJy4vaW50Q29vcmRpbmF0ZS5qcyc7XG5cbmltcG9ydCB7aWRHZW5lcmF0b3J9IGZyb20gJy4vY3VzdG9tVXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpbGwgZXh0ZW5kcyBPYnNlcnZlckVudGl0eSB7XG4gICAgY29uc3RydWN0b3IoY2FsbGJhY2tzLCBjb25maWcsIG5vdGlmaWVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIFxuICAgICAgICBsZXQgcGFyc2VkQ29uZmlnXG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgcGFyc2VkQ29uZmlnID0gdGhpcy5wYXJzZUNvbmZpZyhjb25maWcpO1xuICAgICAgICB9Y2F0Y2goZSl7XG4gICAgICAgICAgICBpZih0eXBlb2YgY2FsbGJhY2tzLnByb3BhZ2F0ZUVycm9yID09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5wcm9wYWdhdGVFcnJvcihlKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YXRlID0ge307XG4gICAgICAgIHRoaXMuc3RhdGUuSUQgPSBpZEdlbmVyYXRvcigpO1xuXG5cbiAgICAgICAgdGhpcy5jYWxsYmFja3MgPSBjYWxsYmFja3M7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZSwgcGFyc2VkQ29uZmlnKTtcblxuICAgICAgICBpZiAobm90aWZpZXIpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZpZXIgPSBub3RpZmllcjtcbiAgICAgICAgICAgIG5vdGlmaWVyLnN1YnNjcmliZSh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhcnNlQ29uZmlnKGNvbmZpZykge1xuICAgICAgICBpZiAoY29uZmlnID09IHVuZGVmaW5lZCB8fCBjb25maWcucGlsbFZhbHVlID09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRQb3NYID09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRQb3NZID09IHVuZGVmaW5lZCB8fCBjb25maWcubGltaXRYID09IHVuZGVmaW5lZCB8fCBjb25maWcubGltaXRZID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IENvbmZpZ0Vycm9yKCdNaXNzaW5nIGNvbmZpZyBvciBtaXNzaW5nIGZpZWxkcyBpbiBjb25maWcuIEZpZWxkcyBuZWVkZWQ6IHBpbGxWYWx1ZTogaW50ZWdlciwgc3RhcnRQb3NYOiBJbnRlZ2VyLCBzdGFydFBvc1k6IEludGVnZXIuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcGFyc2VkQ29uZmlnID0ge307XG4gICAgICAgIHBhcnNlZENvbmZpZy5waWxsVmFsdWUgPSBOdW1iZXIoY29uZmlnLnBpbGxWYWx1ZSk7XG4gICAgICAgIHBhcnNlZENvbmZpZy5wb3NpdGlvbiA9IG5ldyBJbnRDb29yZGluYXRlKE51bWJlcihjb25maWcuc3RhcnRQb3NYKSwgTnVtYmVyKGNvbmZpZy5zdGFydFBvc1kpKTtcbiAgICAgICAgcGFyc2VkQ29uZmlnLmxpbWl0cyA9IHt9O1xuICAgICAgICBwYXJzZWRDb25maWcubGltaXRzLnggPSBOdW1iZXIoY29uZmlnLmxpbWl0WCk7XG4gICAgICAgIHBhcnNlZENvbmZpZy5saW1pdHMueSA9IE51bWJlcihjb25maWcubGltaXRZKTtcblxuICAgICAgICBpZihjb25maWcuY29sb3Ipe1xuICAgICAgICAgICAgcGFyc2VkQ29uZmlnLmNvbG9yID0gY29uZmlnLmNvbG9yO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHBhcnNlZENvbmZpZy5jb2xvciA9ICdyZWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlZENvbmZpZztcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG5cbiAgICB9XG5cbiAgICBzZXRTdGF0ZShvcHRpb25zKSB7XG4gICAgICAgIGxldCBuZXh0U3RhdGUgPSBjbG9uZURlZXAodGhpcy5zdGF0ZSk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24obmV4dFN0YXRlLCBvcHRpb25zKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gbmV4dFN0YXRlO1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICBsZXQgcGFyc2VkQ29uZmlnID0gdGhpcy5wYXJzZUNvbmZpZyh0aGlzLmNvbmZpZyk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBwb3NpdGlvbjogcGFyc2VkQ29uZmlnLnBvc2l0aW9uLFxuICAgICAgICAgICAgcGlsbFZhbHVlOiBwYXJzZWRDb25maWcucGlsbFZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uTm90aWZ5KGVudGl0eSwgZXZlbnQpIHtcbiAgICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICgnUElMTF9DT0xMSVNJT04nKTpcbiAgICAgICAgICAgICAgICBsZXQgbmV3UG9zaXRpb24gPSB0aGlzLmNhbGN1bGF0ZU5ld1JhbmRvbVBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBuZXdQb3NpdGlvblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlTmV3UmFuZG9tUG9zaXRpb24oKSB7XG4gICAgICAgIGxldCBsaW1pdFggPSB0aGlzLnN0YXRlLmxpbWl0cy54O1xuICAgICAgICBsZXQgbGltaXRZID0gdGhpcy5zdGF0ZS5saW1pdHMueDtcbiAgICAgICAgbGV0IHNuYWtlcyA9IHRoaXMuY2FsbGJhY2tzLmdldEVudGl0eUxpc3QoKS5zbmFrZXM7XG4gICAgICAgIGxldCBvYnN0YWNsZXMgPSB0aGlzLmNhbGxiYWNrcy5nZXRFbnRpdHlMaXN0KCkuYm9hcmQub2JzdGFjbGVzO1xuICAgICAgICBsZXQgYXBwZW5kZWRTbmFrZUJvZGllcyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IHNuYWtlIG9mIHNuYWtlcykge1xuICAgICAgICAgICAgYXBwZW5kZWRTbmFrZUJvZGllcy5wdXNoKC4uLnNuYWtlLmJvZHkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcHBlbmRlZFNuYWtlQm9kaWVzLmxlbmd0aCArIG9ic3RhY2xlcy5sZW5ndGggPj0gbGltaXRYICogbGltaXRZKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEludENvb3JkaW5hdGUodW5kZWZpbmVkLCB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGZyZWVQb3NpdGlvbnMgPSB0aGlzLmNhbGN1bGF0ZUZyZWVQb3NpdGlvbnMoYXBwZW5kZWRTbmFrZUJvZGllcywgb2JzdGFjbGVzKTtcbiAgICAgICAgICAgIGxldCByYW5kb21Qb3NJbmRleCA9IE1hdGgudHJ1bmMoTWF0aC5yYW5kb20oKSAqIChmcmVlUG9zaXRpb25zLmxlbmd0aCAtIDEpKTtcbiAgICAgICAgICAgIGxldCByYW5kb21Qb3NpdGlvbiA9IGZyZWVQb3NpdGlvbnNbcmFuZG9tUG9zSW5kZXhdO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBJbnRDb29yZGluYXRlKHJhbmRvbVBvc2l0aW9uLngsIHJhbmRvbVBvc2l0aW9uLnkpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjYWxjdWxhdGVGcmVlUG9zaXRpb25zKHNuYWtlQm9keSwgb2JzdGFjbGVzKSB7XG4gICAgICAgIGxldCBsaW1pdFggPSB0aGlzLnN0YXRlLmxpbWl0cy54O1xuICAgICAgICBsZXQgbGltaXRZID0gdGhpcy5zdGF0ZS5saW1pdHMueDtcbiAgICAgICAgbGV0IHBvc2l0aW9ucyA9IFtdXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGltaXRYOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGltaXRZOyBqKyspIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHg6IGksXG4gICAgICAgICAgICAgICAgICAgIHk6IGpcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBub2RlIG9mIHNuYWtlQm9keSkge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gbm9kZS5jb29yZGluYXRlcy54ICogbGltaXRYICsgbm9kZS5jb29yZGluYXRlcy55XG4gICAgICAgICAgICBwb3NpdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHBvc2l0aW9ucztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBvYnN0YWNsZSBvZiBvYnN0YWNsZXMpIHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IG9ic3RhY2xlLmNvb3JkaW5hdGVzLnggKiBsaW1pdFggKyBvYnN0YWNsZS5jb29yZGluYXRlcy55XG4gICAgICAgICAgICBwb3NpdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHBvc2l0aW9ucztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwb3NpdGlvbnM7XG4gICAgfVxuXG4gICAgZ2V0IHBvc2l0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5wb3NpdGlvbjtcbiAgICB9XG5cbiAgICBnZXQgcGlsbFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5waWxsVmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IElEKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLklEO1xuICAgIH1cblxuICAgIGdldCBjb2xvcigpe1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5jb2xvcjtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ViamVjdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmIChuZXcudGFyZ2V0ID09PSBTdWJqZWN0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBYnN0cmFjdCBjbGFzcy4gQ2Fubm90IGJlIGluc3RhbnRpYXRlZCFcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaWJlID09PSB2b2lkIDAgfHwgdHlwZW9mIHRoaXMuc3Vic2NyaWJlICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0IG1ldGhvZCAnYWRkT2JzZXJ2ZXInIG11c3QgYmUgb3ZlcnJpZGVuIVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnVuc3Vic2NyaWJlID09PSB2b2lkIDAgfHwgdHlwZW9mIHRoaXMudW5zdWJzY3JpYmUgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWJzdHJhY3QgbWV0aG9kICd1bnN1YnNjcmliZScgbXVzdCBiZSBvdmVycmlkZW4hXCIpO1xuICAgICAgICB9XG4gICAgfVxufTsiLCIvLyBcInVzZSBzdHJpbmN0XCI7XG5cbmltcG9ydCBTdWJqZWN0IGZyb20gJy4vQWJzdHJhY3RDbGFzc2VzL1N1YmplY3QnXG5pbXBvcnQgSW50Q29vcmRpbmF0ZSBmcm9tICcuL2ludENvb3JkaW5hdGUnO1xuaW1wb3J0IE9ic2VydmVyRW50aXR5IGZyb20gJy4vQWJzdHJhY3RDbGFzc2VzL09ic2VydmVyRW50aXR5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90aWZpZXIgZXh0ZW5kcyBTdWJqZWN0IHtcblxuICAgIGNvbnN0cnVjdG9yKGNhbGxiYWNrcykge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLmNhbGxiYWNrcyA9IGNhbGxiYWNrcztcbiAgICAgICAgdGhpcy5sYXN0Tm9kZUJ1ZmZlciA9IHt9O1xuXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlID0gdGhpcy5zdWJzY3JpYmUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVTdGVwQ29sbGlzaW9uVHlwZShuZXh0U3RlcCwgY2FsbGVySUQpIHtcbiAgICAgICAgY29uc3Qgc25ha2VzID0gdGhpcy5jYWxsYmFja3MuZ2V0RW50aXR5TGlzdCgpLnNuYWtlcztcbiAgICAgICAgY29uc3QgYm9hcmQgPSB0aGlzLmNhbGxiYWNrcy5nZXRFbnRpdHlMaXN0KCkuYm9hcmQ7XG4gICAgICAgIGNvbnN0IHBpbGxzID0gdGhpcy5jYWxsYmFja3MuZ2V0RW50aXR5TGlzdCgpLnBpbGxzO1xuICAgICAgICBsZXQgY2FsbGVyU25ha2UgPSB0aGlzLmNhbGxiYWNrcy5nZXRFbnRpdHlCeUlEKGNhbGxlcklEKTtcblxuICAgICAgICB0aGlzLnN0b3JlTGFzdE5vZGUoY2FsbGVySUQsIGNhbGxlclNuYWtlLmVuZE9mQm9keSk7XG5cbiAgICAgICAgaWYgKGJvYXJkKSB7XG4gICAgICAgICAgICBpZiAobmV4dFN0ZXAubnVsbFBvc2l0aW9uID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnPC0tLS0tLS0tLS0tLS0tLVdBTExfQ09MTElTSU9OX0FDSVRPTi0tLS0tLS0tLS0tLS0tLT4nKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKChvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2FsbGVyID0gdGhpcy5jYWxsYmFja3MuZ2V0RW50aXR5QnlJRChjYWxsZXJJRCk7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm9uTm90aWZ5KGNhbGxlciwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJXQUxMX0NPTExJU0lPTlwiXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBvYnN0YWNsZXMgPSBib2FyZC5vYnN0YWNsZXM7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgb2JzdGFjbGUgb2Ygb2JzdGFjbGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvYnN0YWNsZS5jb29yZGluYXRlcy54ID09IG5leHRTdGVwLmNvb3JkaW5hdGVzLnggJiYgb2JzdGFjbGUuY29vcmRpbmF0ZXMueSA9PSBuZXh0U3RlcC5jb29yZGluYXRlcy55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnPC0tLS0tLS0tLS0tLS0tLVdBTExfQ09MTElTSU9OX0FDSVRPTi0tLS0tLS0tLS0tLS0tLT4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2goKG9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhbGxlciA9IHRoaXMuY2FsbGJhY2tzLmdldEVudGl0eUJ5SUQoY2FsbGVySUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm9uTm90aWZ5KGNhbGxlciwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIldBTExfQ09MTElTSU9OXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBwaWxsIG9mIHBpbGxzKSB7XG4gICAgICAgICAgICBpZiAocGlsbC5wb3NpdGlvbi5jb29yZGluYXRlcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAocGlsbC5wb3NpdGlvbi5jb29yZGluYXRlcy54ID09PSBuZXh0U3RlcC5jb29yZGluYXRlcy54ICYmIHBpbGwucG9zaXRpb24uY29vcmRpbmF0ZXMueSA9PT0gbmV4dFN0ZXAuY29vcmRpbmF0ZXMueSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnPC0tLS0tLS0tLS0tLS0tLVBJTExfQ09MTElTSU9OX0FDSVRPTi0tLS0tLS0tLS0tLS0tLT4nKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaCgob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYWxsZXIgPSB0aGlzLmNhbGxiYWNrcy5nZXRFbnRpdHlCeUlEKGNhbGxlcklEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm9uTm90aWZ5KGNhbGxlciwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQSUxMX0NPTExJU0lPTicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGlsbDogcGlsbFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjYWxsZXJTbmFrZS50YXJnZXQgJiYgY2FsbGVyU25ha2UudGFyZ2V0LmNvb3JkaW5hdGVzICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKGNhbGxlclNuYWtlLnRhcmdldCAmJiAoY2FsbGVyU25ha2UudGFyZ2V0LmNvb3JkaW5hdGVzLnggPT09IG5leHRTdGVwLmNvb3JkaW5hdGVzLnggJiYgY2FsbGVyU25ha2UudGFyZ2V0LmNvb3JkaW5hdGVzLnkgPT09IG5leHRTdGVwLmNvb3JkaW5hdGVzLnkpKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJzwtLS0tLS0tLS0tLS0tLS1UQVJHRVRfUkVBQ0hFRC0tLS0tLS0tLS0tLS0tLT4nKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKChvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5vbk5vdGlmeShjYWxsZXJTbmFrZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1RBUkdFVF9SRUFDSEVEJyxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbGFzdE5vZGVzID0ge31cbiAgICAgICAgZm9yIChsZXQgc25ha2Ugb2Ygc25ha2VzKSB7XG4gICAgICAgICAgICBsYXN0Tm9kZXNbc25ha2UuSURdID0gc25ha2UuZW5kT2ZCb2R5O1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5hc3NpZ24obGFzdE5vZGVzLCB0aGlzLmxhc3ROb2RlQnVmZmVyKTtcbiAgICAgICAgbGV0IGluY2x1ZGVzID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhsYXN0Tm9kZXMpKSB7XG4gICAgICAgICAgICBpbmNsdWRlcyA9IGluY2x1ZGVzIHx8IChsYXN0Tm9kZXNba2V5XS5jb29yZGluYXRlcy54ID09IG5leHRTdGVwLmNvb3JkaW5hdGVzLnggJiYgbGFzdE5vZGVzW2tleV0uY29vcmRpbmF0ZXMueSA9PSBuZXh0U3RlcC5jb29yZGluYXRlcy55KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWluY2x1ZGVzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBzbmFrZSBvZiBzbmFrZXMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBub2RlIG9mIHNuYWtlLmJvZHkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRTdGVwLmNvb3JkaW5hdGVzLnggPT09IG5vZGUuY29vcmRpbmF0ZXMueCAmJiBuZXh0U3RlcC5jb29yZGluYXRlcy55ID09PSBub2RlLmNvb3JkaW5hdGVzLnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCc8LS0tLS0tLS0tLS0tLS0tQk9EWV9DT0xMSVNJT05fQUNJVE9OLS0tLS0tLS0tLS0tLS0tPicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaCgob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FsbGVyID0gdGhpcy5jYWxsYmFja3MuZ2V0RW50aXR5QnlJRChjYWxsZXJJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIub25Ob3RpZnkoY2FsbGVyLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdCT0RZX0NPTExJU0lPTidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzbmFrZXMubGVuZ3RoID09IE9iamVjdC5rZXlzKHRoaXMubGFzdE5vZGVCdWZmZXIpLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0Tm9kZUJ1ZmZlciA9IHt9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICAgIGlmIChvYnNlcnZlciBpbnN0YW5jZW9mIE9ic2VydmVyRW50aXR5KSB7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVycy5hZGQob2JzZXJ2ZXIpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHVuc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLmRlbGV0ZShvYnNlcnZlcilcbiAgICB9XG5cbiAgICBzdG9yZUxhc3ROb2RlKElELCBsYXN0Tm9kZSkge1xuICAgICAgICBpZiAoSUQgJiYgbGFzdE5vZGUgaW5zdGFuY2VvZiBJbnRDb29yZGluYXRlKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3ROb2RlQnVmZmVyW0lEXSA9IGxhc3ROb2RlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn0iLCJpbXBvcnQgQm9hcmQgZnJvbSAnLi9ib2FyZC5qcyc7XG5pbXBvcnQgU25ha2UgZnJvbSAnLi9zbmFrZS5qcyc7XG5pbXBvcnQgUGlsbCBmcm9tICcuL3BpbGwuanMnO1xuaW1wb3J0IE5vdGlmaWVyIGZyb20gJy4vbm90aWZpZXInO1xuXG5pbXBvcnQgQ29uZmlnRXJyb3IgZnJvbSAnLi9lcnJvcnMvQ29uZmlnRXJyb3IuanMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGVsIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcsIHN0cmF0ZWdpZXMpIHtcbiAgICAgICAgdGhpcy5nZXRFbnRpdHlMaXN0ID0gdGhpcy5nZXRFbnRpdHlMaXN0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2V0RW50aXR5QnlJRCA9IHRoaXMuZ2V0RW50aXR5QnlJRC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnByb3BhZ2F0ZUVycm9yID0gdGhpcy5wcm9wYWdhdGVFcnJvci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnByb3BhZ2F0ZVJ1bnRpbWUgPSB0aGlzLnByb3BhZ2F0ZVJ1bnRpbWUuYmluZCh0aGlzKTtcbiAgICAgICAgXG5cbiAgICAgICAgdGhpcy5wYXNzZWREb3duQ2FsbGJhY2tzID0ge1xuICAgICAgICAgICAgZ2V0RW50aXR5TGlzdDogdGhpcy5nZXRFbnRpdHlMaXN0LFxuICAgICAgICAgICAgZ2V0RW50aXR5QnlJRDogdGhpcy5nZXRFbnRpdHlCeUlELFxuICAgICAgICAgICAgcHJvcGFnYXRlRXJyb3I6IHRoaXMucHJvcGFnYXRlRXJyb3IsXG4gICAgICAgICAgICBwcm9wYWdhdGVSdW50aW1lOiB0aGlzLnByb3BhZ2F0ZVJ1bnRpbWVcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5ub3RpZmllciA9IG5ldyBOb3RpZmllcih0aGlzLnBhc3NlZERvd25DYWxsYmFja3MpO1xuICAgICAgICB0aGlzLnN0cmF0ZWdpZXMgPSBzdHJhdGVnaWVzO1xuICAgICAgICBcbiAgICAgICAgbGV0IHBhcnNlZENvbmZpZztcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICBwYXJzZWRDb25maWcgPSB0aGlzLnBhcnNlQ29uZmlnKGNvbmZpZyk7XG4gICAgICAgIH1jYXRjaChlKXtcbiAgICAgICAgICAgIGlmKHR5cGVvZiB0aGlzLnByb3BhZ2F0ZUVycm9yID09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcGFnYXRlRXJyb3IoZSk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYocGFyc2VkQ29uZmlnKXtcbiAgICAgICAgICAgIHRoaXMuc2ltdWxhdGlvblNwZWVkID0gcGFyc2VkQ29uZmlnLnNpbXVsYXRpb25TcGVlZDtcbiAgICAgICAgICAgIHRoaXMuRW50aXRpZXMgPSB7XG4gICAgICAgICAgICAgICAgc25ha2VzOiBwYXJzZWRDb25maWcuc25ha2VzLFxuICAgICAgICAgICAgICAgIHBpbGxzOiBwYXJzZWRDb25maWcucGlsbHMsXG4gICAgICAgICAgICAgICAgYm9hcmQ6IHBhcnNlZENvbmZpZy5ib2FyZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgXG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBsZXQgc25ha2VzID0gdGhpcy5FbnRpdGllcy5zbmFrZXM7XG4gICAgICAgIGxldCBwaWxscyA9IHRoaXMuRW50aXRpZXMucGlsbHM7XG4gICAgICAgIGxldCBib2FyZCA9IHRoaXMuRW50aXRpZXMuYm9hcmQ7XG4gICAgICAgIGlmICghdGhpcy5pc0dhbWVPdmVyKCkpIHtcblxuICAgICAgICAgICAgZm9yKGxldCBzbmFrZSBvZiBzbmFrZXMpe1xuICAgICAgICAgICAgICAgIHNuYWtlLnVwZGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yKGxldCBwaWxsIG9mIHBpbGxzKXtcbiAgICAgICAgICAgICAgICBwaWxsLnVwZGF0ZSgpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib2FyZC51cGRhdGUoKTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIGxldCBzbmFrZXMgPSB0aGlzLkVudGl0aWVzLnNuYWtlcztcbiAgICAgICAgICAgIGxldCBwaWxscyA9IHRoaXMuRW50aXRpZXMucGlsbHM7XG4gICAgICAgICAgICBsZXQgYm9hcmQgPSB0aGlzLkVudGl0aWVzLmJvYXJkO1xuICAgICAgICAgICAgZm9yKGxldCBzbmFrZSBvZiBzbmFrZXMpe1xuICAgICAgICAgICAgICAgIHNuYWtlLnJlc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IobGV0IHBpbGwgb2YgcGlsbHMpe1xuICAgICAgICAgICAgICAgIHBpbGwucmVzZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJvYXJkLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgc25ha2VGYWN0b3J5KHNuYWtlQ29uZmlnLCBub3RpZmllcikge1xuICAgICAgICBsZXQgc3RyYXRlZ3lOYW1lID0gc25ha2VDb25maWcuc3RyYXRlZ3k7XG4gICAgICAgIGxldCBzdHJhdGVneVR5cGUgPSB0aGlzLnN0cmF0ZWdpZXNbc3RyYXRlZ3lOYW1lXTtcbiAgICAgICAgbGV0IHN0cmF0ZWd5ID0gbmV3IHN0cmF0ZWd5VHlwZSh0aGlzLnBhc3NlZERvd25DYWxsYmFja3MpO1xuICAgICAgICBsZXQgc25ha2UgPSBuZXcgU25ha2UodGhpcy5wYXNzZWREb3duQ2FsbGJhY2tzLCBzbmFrZUNvbmZpZywgc3RyYXRlZ3ksIG5vdGlmaWVyKTtcbiAgICAgICAgcmV0dXJuIHNuYWtlO1xuICAgIH1cblxuICAgIGlzR2FtZU92ZXIoKXtcbiAgICAgICAgbGV0IGlzR2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICBsZXQgc25ha2VzID0gdGhpcy5FbnRpdGllcy5zbmFrZXM7XG4gICAgICAgIGZvcihsZXQgc25ha2Ugb2Ygc25ha2VzKXtcbiAgICAgICAgICAgIGlzR2FtZU92ZXIgPSBpc0dhbWVPdmVyICYmICEoc25ha2UuaXNBbGl2ZSgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNHYW1lT3ZlcjtcbiAgICB9XG5cbiAgICBwYXJzZUNvbmZpZyhjb25maWcpIHtcbiAgICAgICAgbGV0IHBhcnNlZENvbmZpZyA9IHt9XG4gICAgICAgIGxldCBlbnJpY2hlZENvbmZpZztcblxuICAgICAgICBpZihjb25maWcgPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBDb25maWdFcnJvcignQ29uZmlnIGlzIG1pc3NpbmchJyk7XG4gICAgICAgIH1cblxuICAgICAgICBlbnJpY2hlZENvbmZpZyA9IHRoaXMuZW5yaWNoQ29uZmlnKGNvbmZpZyk7XG4gICAgICAgIGxldCBzbmFrZUNvbmZpZ3MgPSBlbnJpY2hlZENvbmZpZy5zbmFrZUNvbmZpZ3M7XG4gICAgICAgIGxldCBwaWxsQ29uZmlncyA9IGVucmljaGVkQ29uZmlnLnBpbGxDb25maWdzO1xuICAgICAgICBsZXQgYm9hcmRDb25maWcgPSBlbnJpY2hlZENvbmZpZy5ib2FyZENvbmZpZztcbiAgICAgICAgbGV0IG1haW5Db25maWcgPSBlbnJpY2hlZENvbmZpZy5tYWluO1xuXG4gICAgICAgIGlmIChzbmFrZUNvbmZpZ3MpIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNuYWtlQ29uZmlncykpIHtcbiAgICAgICAgICAgICAgICBsZXQgc25ha2VzID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgc25ha2VDb25maWcgb2Ygc25ha2VDb25maWdzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0cmF0ZWdpZXNbc25ha2VDb25maWcuc3RyYXRlZ3ldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc25ha2UgPSB0aGlzLnNuYWtlRmFjdG9yeShzbmFrZUNvbmZpZywgdGhpcy5ub3RpZmllcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbmFrZXMucHVzaChzbmFrZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgQ29uZmlnRXJyb3IoXCJzbmFrZUNvbmZpZydzIHN0cmF0ZWd5IGlzIG5vdCBpbiB0aGUgaW5kZXghXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhcnNlZENvbmZpZy5zbmFrZXMgPSBzbmFrZXM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBDb25maWdFcnJvcignc25ha2VDb25maWdzIGZpZWxkIG9mIGNvbmZpZyBzaG91bGQgYmUgYW4gQXJyYXkhJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBpbGxDb25maWdzKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwaWxsQ29uZmlncykpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGlsbHMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBwaWxsQ29uZmlnIG9mIHBpbGxDb25maWdzKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwaWxsID0gbmV3IFBpbGwodGhpcy5wYXNzZWREb3duQ2FsbGJhY2tzLCBwaWxsQ29uZmlnLCB0aGlzLm5vdGlmaWVyKTtcbiAgICAgICAgICAgICAgICAgICAgcGlsbHMucHVzaChwaWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFyc2VkQ29uZmlnLnBpbGxzID0gcGlsbHM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBDb25maWdFcnJvcigncGlsbENvbmZpZ3MgZmllbGQgb2YgY29uZmlnIHNob3VsZCBiZSBhbiBBcnJheSEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9hcmRDb25maWcpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmRDb25maWcgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBsZXQgYm9hcmQgPSBuZXcgQm9hcmQodGhpcy5wYXNzZWREb3duQ2FsbGJhY2tzLCBib2FyZENvbmZpZyk7XG4gICAgICAgICAgICAgICAgcGFyc2VkQ29uZmlnLmJvYXJkID0gYm9hcmQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBDb25maWdFcnJvcignYm9hcmRDb25maWcgZmllbGQgb2YgY29uZmlnIHNob3VsZCBiZSBhbiBPYmplY3QhJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1haW5Db25maWcpIHtcbiAgICAgICAgICAgIGlmIChtYWluQ29uZmlnLnNpbXVsYXRpb25TcGVlZCkge1xuICAgICAgICAgICAgICAgIGxldCBzaW11bGF0aW9uU3BlZWQgPSBOdW1iZXIobWFpbkNvbmZpZy5zaW11bGF0aW9uU3BlZWQpO1xuICAgICAgICAgICAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHNpbXVsYXRpb25TcGVlZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkQ29uZmlnLnNpbXVsYXRpb25TcGVlZCA9IHNpbXVsYXRpb25TcGVlZDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgQ29uZmlnRXJyb3IoJ3NpbXVsYXRpb25TcGVlZCB2YWx1ZSBzaG91bGQgYmUgSW50ZWdlciEnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBDb25maWdFcnJvcignTWlzc2luZyBtYWluIGNvbmZpZyBmaWVsZCBzaW11bGF0aW9uU3BlZWQhJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyc2VkQ29uZmlnO1xuICAgIH1cblxuICAgIGVucmljaENvbmZpZyhjb25maWcpIHtcbiAgICAgICAgbGV0IGJvYXJkQ29uZmlnID0gY29uZmlnLmJvYXJkQ29uZmlnO1xuICAgICAgICBsZXQgbGltaXRYID0gMDtcbiAgICAgICAgbGV0IGxpbWl0WSA9IDA7XG4gICAgICAgIGxldCBwaWxsQ29uZmlncyA9IGNvbmZpZy5waWxsQ29uZmlncztcbiAgICAgICAgbGV0IHNuYWtlQ29uZmlncyA9IGNvbmZpZy5zbmFrZUNvbmZpZ3M7XG4gICAgICAgIGlmIChib2FyZENvbmZpZykge1xuICAgICAgICAgICAgbGltaXRYID0gYm9hcmRDb25maWcud2lkdGggfHwgbGltaXRYO1xuICAgICAgICAgICAgbGltaXRZID0gYm9hcmRDb25maWcuaGVpZ2h0IHx8IGxpbWl0WTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGlsbENvbmZpZ3MgJiYgQXJyYXkuaXNBcnJheShwaWxsQ29uZmlncykpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHBpbGxDb25maWcgb2YgcGlsbENvbmZpZ3MpIHtcbiAgICAgICAgICAgICAgICBwaWxsQ29uZmlnLmxpbWl0WCA9IGxpbWl0WDtcbiAgICAgICAgICAgICAgICBwaWxsQ29uZmlnLmxpbWl0WSA9IGxpbWl0WTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc25ha2VDb25maWdzICYmIEFycmF5LmlzQXJyYXkoc25ha2VDb25maWdzKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgc25ha2VDb25maWcgb2Ygc25ha2VDb25maWdzKSB7XG4gICAgICAgICAgICAgICAgc25ha2VDb25maWcubGltaXRYID0gbGltaXRYO1xuICAgICAgICAgICAgICAgIHNuYWtlQ29uZmlnLmxpbWl0WSA9IGxpbWl0WTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29uZmlnXG4gICAgfVxuXG5cbiAgICAvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDQUxMQkFDS1MgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi8vXG5cbiAgICBwcm9wYWdhdGVSdW50aW1lKHNuYWtlSUQsIHJ1bnRpbWUpe1xuICAgICAgICBpZih0aGlzLnJ1bnRpbWVzID09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB0aGlzLnJ1bnRpbWVzID0ge307XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ydW50aW1lc1tzbmFrZUlEXSA9IHJ1bnRpbWU7XG4gICAgfVxuXG4gICAgZ2V0RW50aXR5TGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuRW50aXRpZXM7XG4gICAgfVxuXG4gICAgcHJvcGFnYXRlRXJyb3IoZXJyb3Ipe1xuICAgICAgICBpZih0aGlzLmVycm9yQnVmZmVyID09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB0aGlzLmVycm9yQnVmZmVyID0gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICAgICAgICB0aGlzLmVycm9yQnVmZmVyLnB1c2goZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGdldEVudGl0eUJ5SUQoSUQpe1xuICAgICAgICBsZXQgcmV0dXJuRW50aXR5O1xuICAgICAgICBsZXQgc25ha2VzID0gdGhpcy5FbnRpdGllcy5zbmFrZXM7XG4gICAgICAgIGZvcihsZXQgc25ha2Ugb2Ygc25ha2VzKXtcbiAgICAgICAgICAgIGlmKHNuYWtlLklEID09IElEKXtcbiAgICAgICAgICAgICAgICByZXR1cm5FbnRpdHkgPSBzbmFrZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgcGlsbHMgPSB0aGlzLkVudGl0aWVzLnBpbGxzO1xuICAgICAgICBmb3IobGV0IHBpbGwgb2YgcGlsbHMpe1xuICAgICAgICAgICAgaWYocGlsbC5JRCA9PSBJRCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuRW50aXR5ID0gcGlsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgYm9hcmQgPSB0aGlzLkVudGl0aWVzLmJvYXJkO1xuICAgICAgICBpZihib2FyZC5JRCA9PSBJRCl7XG4gICAgICAgICAgICByZXR1cm5FbnRpdHkgPSBib2FyZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0dXJuRW50aXR5O1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJhdGVneXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBpZiAobmV3LnRhcmdldCA9PT0gU3RyYXRlZ3kpe1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWJzdHJhY3QgY2xhc3MuIENhbm5vdCBiZSBpbnN0YW50aWF0ZWQhXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5wYXRoZmluZGVyID09PSB2b2lkIDAgfHwgdHlwZW9mIHRoaXMucGF0aGZpbmRlciAhPT0gJ2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBYnN0cmFjdCBtZXRob2QgJ3BhdGhmaW5kZXInIG11c3QgYmUgb3ZlcnJpZGVuIVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuY2FsY3VsYXRlVGFyZ2V0ID09PSB2b2lkIDAgfHwgdHlwZW9mIHRoaXMuY2FsY3VsYXRlVGFyZ2V0ICE9PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0IG1ldGhvZCAnY2FsY3VsYXRlVGFyZ2V0JyBtdXN0IGJlIG92ZXJyaWRlbiFcIik7XG4gICAgICAgIH1cbiAgICB9XG59OyIsImltcG9ydCBJbnRDb29yZGluYXRlIGZyb20gJy4uL2ludENvb3JkaW5hdGUuanMnO1xuaW1wb3J0IHtFdWNsaWRlYW5EaXN0YW5jZX0gZnJvbSAnLi4vY3VzdG9tVXRpbHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBU3RhcihoZXVyaXNpbSwgc3RhcnQsIGdvYWwsIGdzY29yZVRhYmxlLCBmU2NvcmVUYWJsZSwgZGltZW5zaW9ucykge1xuICAgIGxldCBjbG9zZWRMYWJlbFNldCA9IG5ldyBTZXQoKTtcbiAgICBsZXQgb3BlbkxhYmVsU2V0ID0gbmV3IFNldChbJycgKyBzdGFydC5jb29yZGluYXRlcy54ICArIHN0YXJ0LmNvb3JkaW5hdGVzLnldKTtcbiAgICBsZXQgY2FtZUZyb20gPSB7fVxuXG4gICAgbGV0IHN0YXJ0TGFiZWwgPSAnJyArIHN0YXJ0LmNvb3JkaW5hdGVzLnggKyBzdGFydC5jb29yZGluYXRlcy55O1xuICAgIGdzY29yZVRhYmxlW3N0YXJ0TGFiZWxdLnNjb3JlID0gMDtcbiAgICBmU2NvcmVUYWJsZVtzdGFydExhYmVsXS5zY29yZSA9IGhldXJpc3RpY0Nvc3RFc3RpbWF0ZShoZXVyaXNpbSwgc3RhcnQsIGdvYWwpO1xuXG4gICAgd2hpbGUgKG9wZW5MYWJlbFNldC5zaXplID4gMCkge1xuICAgICAgICBsZXQgY3VycmVudExhYmVsID0gbWluU2NvcmVMYWJlbFNlbGVjdChvcGVuTGFiZWxTZXQsIGZTY29yZVRhYmxlKTtcbiAgICAgICAgaWYgKGN1cnJlbnRMYWJlbCA9PT0gJycgKyBnb2FsLmNvb3JkaW5hdGVzLnggKyBnb2FsLmNvb3JkaW5hdGVzLnkpIHtcbiAgICAgICAgICAgIHJldHVybiByZWNvbnN0cnVjdFBhdGgoY2FtZUZyb20sIGN1cnJlbnRMYWJlbCwgZlNjb3JlVGFibGUpO1xuICAgICAgICB9XG4gICAgICAgIG9wZW5MYWJlbFNldC5kZWxldGUoY3VycmVudExhYmVsKTtcbiAgICAgICAgY2xvc2VkTGFiZWxTZXQuYWRkKGN1cnJlbnRMYWJlbCk7XG5cbiAgICAgICAgbGV0IG5laWdoYm9ycyA9IGdldE5laWdoYm9ycyhmU2NvcmVUYWJsZVtjdXJyZW50TGFiZWxdLCBkaW1lbnNpb25zLmRpbVggLSAxLCBkaW1lbnNpb25zLmRpbVkgLSAxLCBmU2NvcmVUYWJsZSk7XG5cbiAgICAgICAgZm9yIChsZXQgbmVpZ2hib3Igb2YgbmVpZ2hib3JzKSB7XG4gICAgICAgICAgICBpZiAoY2xvc2VkTGFiZWxTZXQuaGFzKG5laWdoYm9yKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL3N6b21zesOpZG9zIG1lesWRIHTDoXZvbHPDoWdhXG4gICAgICAgICAgICBsZXQgdGVudGF0aXZlZ3Njb3JlID0gZ3Njb3JlVGFibGVbY3VycmVudExhYmVsXS5zY29yZSArIEV1Y2xpZGVhbkRpc3RhbmNlKGZTY29yZVRhYmxlW2N1cnJlbnRMYWJlbF0ucG9zaXRpb24sIGZTY29yZVRhYmxlW25laWdoYm9yXS5wb3NpdGlvbikgKyAoMSArIDEvMTAwMCk7XG5cbiAgICAgICAgICAgIGlmICghb3BlbkxhYmVsU2V0LmhhcyhuZWlnaGJvcikpIHtcbiAgICAgICAgICAgICAgICBvcGVuTGFiZWxTZXQuYWRkKG5laWdoYm9yKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGVudGF0aXZlZ3Njb3JlID49IGdzY29yZVRhYmxlW25laWdoYm9yXS5zY29yZSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYW1lRnJvbVtuZWlnaGJvcl0gPSBjdXJyZW50TGFiZWw7XG4gICAgICAgICAgICBnc2NvcmVUYWJsZVtuZWlnaGJvcl0uc2NvcmUgPSB0ZW50YXRpdmVnc2NvcmU7XG4gICAgICAgICAgICBmU2NvcmVUYWJsZVtuZWlnaGJvcl0uc2NvcmUgPSBnc2NvcmVUYWJsZVtuZWlnaGJvcl0uc2NvcmUgKyBoZXVyaXN0aWNDb3N0RXN0aW1hdGUoaGV1cmlzaW0sIGZTY29yZVRhYmxlW25laWdoYm9yXS5wb3NpdGlvbiwgZ29hbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICBbXTtcbn1cblxuLy9TcXVhcmUgb2YgRXVjbGxhYmVsZWFuIGRpc3RhbmNlXG4vLyBUT0RPOiBtYWtlcyB0aGlzIHBhc3NlZCBhcmd1bWVudFxuZnVuY3Rpb24gaGV1cmlzdGljQ29zdEVzdGltYXRlKGhldXJpc2ltLCBmcm9tLCB0bykge1xuICAgIHJldHVybiBNYXRoLnBvdyhoZXVyaXNpbShmcm9tLCB0byksIDIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWluU2NvcmVMYWJlbFNlbGVjdChsYWJlbFNldCwgdGFibGUpIHtcbiAgICBsZXQgc2V0QXNBcnJheSA9IEFycmF5LmZyb20obGFiZWxTZXQpO1xuICAgIGxldCBtaW5FbnRyeSA9IHNldEFzQXJyYXlbMF07XG4gICAgZm9yIChsZXQgZW50cnkgb2YgbGFiZWxTZXQpIHtcbiAgICAgICAgaWYgKHRhYmxlW21pbkVudHJ5XS5zY29yZSA+IHRhYmxlW2VudHJ5XS5zY29yZSkge1xuICAgICAgICAgICAgbWluRW50cnkgPSBlbnRyeTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWluRW50cnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWNvbnN0cnVjdFBhdGgoY2FtZUZyb21MYWJlbExpc3QsIGN1cnJlbnRMYWJlbCwgdGlsZXMpIHtcbiAgICBsZXQgdG90YWxQYXRoID0gW11cbiAgICB0b3RhbFBhdGgucHVzaCh0aWxlc1tjdXJyZW50TGFiZWxdLnBvc2l0aW9uKTtcbiAgICBsZXQga2V5cyA9IG5ldyBTZXQoT2JqZWN0LmtleXMoY2FtZUZyb21MYWJlbExpc3QpKVxuICAgIHdoaWxlIChrZXlzLmhhcyhjdXJyZW50TGFiZWwpKSB7XG4gICAgICAgIGN1cnJlbnRMYWJlbCA9IGNhbWVGcm9tTGFiZWxMaXN0W2N1cnJlbnRMYWJlbF07XG4gICAgICAgIHRvdGFsUGF0aC51bnNoaWZ0KHRpbGVzW2N1cnJlbnRMYWJlbF0ucG9zaXRpb24pO1xuICAgIH1cbiAgICByZXR1cm4gdG90YWxQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmVpZ2hib3JzKHRhYmxlVGlsZSwgbWF4WCwgbWF4WSwgdGFibGUpIHtcbiAgICBsZXQgbmVpZ2hib3JzID0gW107XG4gICAgbGV0IHBvc1ggPSB0YWJsZVRpbGUucG9zaXRpb24uY29vcmRpbmF0ZXMueDtcbiAgICBsZXQgcG9zWSA9IHRhYmxlVGlsZS5wb3NpdGlvbi5jb29yZGluYXRlcy55O1xuICAgIFxuXG4gICAgaWYgKHBvc1ggIT0gMCkge1xuICAgICAgICBsZXQgbGFiZWwgPSAnJyArIChwb3NYIC0gMSkgKyBwb3NZO1xuICAgICAgICBsZXQgbmVpZ2hib3IgPSB0YWJsZVtsYWJlbF07XG4gICAgICAgIGlmKG5laWdoYm9yLnN0YXR1cyAhPSAnU05BS0UnICYmIG5laWdoYm9yLnN0YXR1cyAhPSAnT0JTVEFDTEUnKXtcbiAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKGxhYmVsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocG9zWSAhPSAwKSB7XG4gICAgICAgIGxldCBsYWJlbCA9ICcnICsgcG9zWCArIChwb3NZIC0gMSk7XG4gICAgICAgIGxldCBuZWlnaGJvciA9IHRhYmxlW2xhYmVsXTtcbiAgICAgICAgaWYobmVpZ2hib3Iuc3RhdHVzICE9ICdTTkFLRScgJiYgbmVpZ2hib3Iuc3RhdHVzICE9ICdPQlNUQUNMRScpe1xuICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2gobGFiZWwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwb3NYIDwgbWF4WCkge1xuICAgICAgICBsZXQgbGFiZWwgPSAnJyArIChwb3NYICsgMSkgKyBwb3NZXG4gICAgICAgIGxldCBuZWlnaGJvciA9IHRhYmxlW2xhYmVsXTtcbiAgICAgICAgaWYobmVpZ2hib3Iuc3RhdHVzICE9ICdTTkFLRScgJiYgbmVpZ2hib3Iuc3RhdHVzICE9ICdPQlNUQUNMRScpe1xuICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2gobGFiZWwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwb3NZIDwgbWF4WSkge1xuICAgICAgICBsZXQgbGFiZWwgPSAnJyArIHBvc1ggKyAocG9zWSArIDEpO1xuICAgICAgICBsZXQgbmVpZ2hib3IgPSB0YWJsZVtsYWJlbF07XG4gICAgICAgIGlmKG5laWdoYm9yLnN0YXR1cyAhPSAnU05BS0UnICYmIG5laWdoYm9yLnN0YXR1cyAhPSAnT0JTVEFDTEUnKXtcbiAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKGxhYmVsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZWlnaGJvcnM7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEFTdGFyUHJlcHJvY2Vzcyhib2FyZCwgc25ha2VzLCBwaWxscyl7XG4gICAgbGV0IGRpbWVuc2lvbnMgPSBib2FyZC5kaW1lbnNpb25zO1xuICAgIGxldCBvYnN0YWNsZXMgPSBib2FyZC5vYnN0YWNsZXM7XG4gICAgbGV0IGdTY29yZVRhYmxlID0ge307XG4gICAgbGV0IGZTY29yZVRhYmxlID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaW1lbnNpb25zLmRpbVg7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRpbWVuc2lvbnMuZGltWTsgaisrKSB7XG4gICAgICAgICAgICBsZXQgc3RhdHVzID0gJ0VNUFRZJ1xuXG4gICAgICAgICAgICBpZihzdGF0dXMgPT0gJ0VNUFRZJyl7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBvYnN0YWNsZSBvZiBvYnN0YWNsZXMpe1xuICAgICAgICAgICAgICAgICAgICBpZihvYnN0YWNsZS5jb29yZGluYXRlcy54ID09IGkgJiYgb2JzdGFjbGUuY29vcmRpbmF0ZXMueSA9PSBqKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cyA9ICdPQlNUQUNMRSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yKGxldCBwaWxsIG9mIHBpbGxzKXtcbiAgICAgICAgICAgICAgICBpZihwaWxsLnBvc2l0aW9uLmNvb3JkaW5hdGVzLnggPT0gaSAmJiBwaWxsLnBvc2l0aW9uLmNvb3JkaW5hdGVzLnkgPT0gail7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyA9ICdQSUxMJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoc3RhdHVzID09ICdFTVBUWScpe1xuICAgICAgICAgICAgICAgIGZvcihsZXQgc25ha2Ugb2Ygc25ha2VzKXtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBub2RlIG9mIHNuYWtlLmJvZHkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYobm9kZS5jb29yZGluYXRlcy54ID09IGkgJiYgbm9kZS5jb29yZGluYXRlcy55ID09IGope1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cyA9ICdTTkFLRSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnU2NvcmVUYWJsZVsnJyArIGkgKyBqXSA9IHtcbiAgICAgICAgICAgICAgICBzY29yZTogSW5maW5pdHksXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IG5ldyBJbnRDb29yZGluYXRlKGksaiksXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZTY29yZVRhYmxlWycnICsgaSArIGpdID0ge1xuICAgICAgICAgICAgICAgIHNjb3JlOiBJbmZpbml0eSxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogbmV3IEludENvb3JkaW5hdGUoaSxqKSxcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHN0YXR1c1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGdTY29yZVRhYmxlOiBnU2NvcmVUYWJsZSxcbiAgICAgICAgZlNjb3JlVGFibGU6IGZTY29yZVRhYmxlXG4gICAgfTtcbn0iLCJpbXBvcnQgU3RyYXRlZ3kgZnJvbSAnLi4vQWJzdHJhY3RDbGFzc2VzL1N0cmF0ZWd5JztcbmltcG9ydCBBU3RhcnRBbGdvcml0aG0gZnJvbSAnLi9hU3RhckFsZ29yaXRobSdcbmltcG9ydCB7QVN0YXJQcmVwcm9jZXNzfSBmcm9tICcuL2FTdGFyQWxnb3JpdGhtJ1xuaW1wb3J0IHtFdWNsaWRlYW5EaXN0YW5jZX0gZnJvbSAnLi4vY3VzdG9tVXRpbHMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYWluQVN0YXJTdHJhdGVneSBleHRlbmRzIFN0cmF0ZWd5e1xuICAgIGNvbnN0cnVjdG9yKGNhbGxiYWNrcyl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzID0gY2FsbGJhY2tzO1xuICAgIH1cblxuICAgIHBhdGhmaW5kZXIoc25ha2UpIHtcbiAgICAgICAgbGV0IHBpbGxzID0gdGhpcy5jYWxsYmFja3MuZ2V0RW50aXR5TGlzdCgpLnBpbGxzO1xuICAgICAgICBsZXQgYm9hcmQgPSB0aGlzLmNhbGxiYWNrcy5nZXRFbnRpdHlMaXN0KCkuYm9hcmQ7XG4gICAgICAgIGxldCBzbmFrZXMgPSB0aGlzLmNhbGxiYWNrcy5nZXRFbnRpdHlMaXN0KCkuc25ha2VzO1xuICAgICAgICBsZXQgZGltZW5zaW9ucyA9IGJvYXJkLmRpbWVuc2lvbnM7XG4gICAgICAgIGxldCBoZXVyaXNtID0gRXVjbGlkZWFuRGlzdGFuY2U7XG4gICAgICAgIGxldCBhU3RhclByZXByb2Nlc3NSZXN1bHQgPSBBU3RhclByZXByb2Nlc3MoYm9hcmQsc25ha2VzLHBpbGxzKTtcbiAgICAgICAgbGV0IHBhdGggPSBBU3RhcnRBbGdvcml0aG0oaGV1cmlzbSwgc25ha2UuaGVhZCwgc25ha2UudGFyZ2V0LCBhU3RhclByZXByb2Nlc3NSZXN1bHQuZ1Njb3JlVGFibGUsIGFTdGFyUHJlcHJvY2Vzc1Jlc3VsdC5mU2NvcmVUYWJsZSwgZGltZW5zaW9ucyk7XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH1cblxuICAgIFxuICAgIGNhbGN1bGF0ZVRhcmdldChzbmFrZSkge1xuICAgICAgICBsZXQgcGlsbHMgPSB0aGlzLmNhbGxiYWNrcy5nZXRFbnRpdHlMaXN0KCkucGlsbHM7XG4gICAgICAgIGxldCBmaXJzdFBpbGwgPSBwaWxsc1swXTtcbiAgICAgICAgbGV0IG1pbiA9IGZpcnN0UGlsbDtcbiAgICAgICAgZm9yKGxldCBwaWxsIG9mIHBpbGxzKXtcbiAgICAgICAgICAgIGxldCBtaW5EaXN0ID0gRXVjbGlkZWFuRGlzdGFuY2Uoc25ha2UuaGVhZCwgbWluLnBvc2l0aW9uKTtcbiAgICAgICAgICAgIGxldCBjdXJyRGlzdCA9IEV1Y2xpZGVhbkRpc3RhbmNlKHNuYWtlLmhlYWQsIHBpbGwucG9zaXRpb24pO1xuICAgICAgICAgICAgaWYobWluRGlzdCA8IGN1cnJEaXN0KXtcbiAgICAgICAgICAgICAgICBtaW4gPSBwaWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaW4ucG9zaXRpb247XG4gICAgfVxufSIsImltcG9ydCBwbGFpbkFTdGFyU3RyYXRlZ3kgZnJvbSAnLi9wbGFpbkFTdGFyJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBsYWluQVN0YXJTdHJhdGVneTogcGxhaW5BU3RhclN0cmF0ZWd5XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGluaXRWaWV3UG9ydChob2lzdE9uKSB7XG4gICAgaWYgKGhvaXN0T24gPT0gdW5kZWZpbmVkIHx8IHR5cGVvZiBob2lzdE9uLmFwcGVuZENoaWxkICE9ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgaG9pc3Qgb24gZ2l2ZW4gZWxlbWVudCEuJyk7XG4gICAgfVxuXG4gICAgbGV0IHZpZXdQb3J0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdmlld1BvcnQuaWQgPSAndmlld1BvcnQnO1xuICAgIHZpZXdQb3J0LmlubmVySFRNTCA9ICdObyBjYW52YXMgc3VwcG9ydCA6KCc7XG5cbiAgICBsZXQgdmlld1BvcnRXcmFwcGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZpZXdQb3J0V3JhcHBlckVsZW1lbnQuaWQgPSAndmlld1BvcnRXcmFwcGVyRWxlbWVudCc7XG5cbiAgICAvL1N0w61sdXNcbiAgICB2aWV3UG9ydFdyYXBwZXJFbGVtZW50LnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgIHZpZXdQb3J0V3JhcHBlckVsZW1lbnQuc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgdmlld1BvcnQuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xuICAgIHZpZXdQb3J0LnN0eWxlLmJvcmRlciA9ICdzb2xpZCAxcHgnO1xuXG4gICAgLy9Ib3p6w6FhZMOhcyBhIERPTS1ob3pcbiAgICB2aWV3UG9ydFdyYXBwZXJFbGVtZW50LmFwcGVuZENoaWxkKHZpZXdQb3J0KTtcbiAgICBob2lzdE9uLmFwcGVuZENoaWxkKHZpZXdQb3J0V3JhcHBlckVsZW1lbnQpO1xuICAgIHJldHVybiB2aWV3UG9ydDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRDb21wb25lbnRzKGNvbmZpZywgbW9kZWwsIG1haW5sb29wKSB7XG4gICAgbGV0IHNuYWtlcyA9IG1vZGVsLmdldEVudGl0eUxpc3QoKS5zbmFrZXM7XG5cbiAgICAvL3NwZWVkIHNlbGVjdG9yXG4gICAgbGV0IHNwZWVkU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BlZWQtc2VsZWN0b3InKTtcbiAgICBzcGVlZFNlbGVjdG9yLnZhbHVlID0gTnVtYmVyKGNvbmZpZy5tYWluLnNpbXVsYXRpb25TcGVlZCk7XG4gICAgc3BlZWRTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBtb2RlbC5zaW11bGF0aW9uU3BlZWQgPSBzcGVlZFNlbGVjdG9yLnZhbHVlO1xuICAgICAgICBtYWlubG9vcC5zZXRTaW11bGF0aW9uVGltZXN0ZXAoMTAwMCAvIHNwZWVkU2VsZWN0b3IudmFsdWUpO1xuICAgIH0pO1xuXG4gICAgLy9kYXNoYm9hcmRcbiAgICBsZXQgZGFzaGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rhc2hib2FyZCcpO1xuICAgIGRhc2hib2FyZC5zdHlsZSA9IFwiYmFja2dyb3VuZC1jb2xvcjogI2Q2YzE4MjsgdGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nOiAxMHB4XCI7XG5cbiAgICAvL3Jlc3RhcnQgYnV0dG9uXG4gICAgbGV0IHJlc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdGFydC1idXR0b24nKTtcbiAgICByZXN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIG1vZGVsLnJlc2V0KCk7XG4gICAgfSlcblxuICAgIC8vc3RvcCBidXR0b25cbiAgICBsZXQgc3RvcEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdG9wLWJ1dHRvbicpO1xuICAgIHN0b3BCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgbWFpbmxvb3Auc3RvcCgpXG4gICAgfSlcblxuICAgIC8vc3RhcnQgYnV0dG9uXG4gICAgbGV0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXJ0LWJ1dHRvbicpO1xuICAgIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIG1haW5sb29wLnN0YXJ0KClcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVFcnJvck1lc3NhZ2UoZXJyb3JzKXtcbiAgICBsZXQgZXJyb3JNZXNzYWdlID0gZXJyb3JzWzBdLm5hbWUgKyAnOiAnICsgZXJyb3JzWzBdLm1lc3NhZ2U7XG4gICAgZm9yKGxldCBpID0gMTsgaSA8IGVycm9ycy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGVycm9yTWVzc2FnZSA9IGVycm9yc1tpXS5uYW1lICsgJzogJyArIGVycm9yc1tpXS5tZXNzYWdlICsgJ1xcbicgKyBlcnJvck1lc3NhZ2U7XG4gICAgfVxuICAgIHJldHVybiBlcnJvck1lc3NhZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmF3U2NlbmUobW9kZWwsIGNhbnZhc1dyYXBwZXIsIHRpbGVXaWR0aCwgdGlsZUhlaWdodCkge1xuICAgIGxldCBzbmFrZXMgPSBtb2RlbC5nZXRFbnRpdHlMaXN0KCkuc25ha2VzO1xuICAgIGxldCBwaWxscyA9IG1vZGVsLmdldEVudGl0eUxpc3QoKS5waWxscztcbiAgICBsZXQgb2JzdGFjbGVzID0gbW9kZWwuZ2V0RW50aXR5TGlzdCgpLmJvYXJkLm9ic3RhY2xlcztcbiAgICBsZXQgcGF0aFppbmRleCA9IDE7XG4gICAgbGV0IHBpbGxaaW5kZXggPSAwO1xuICAgIGxldCBzbmFrZVppbmRleCA9IDI7XG4gICAgbGV0IG9ic3RhY2xlWmluZGV4ID0gNDtcblxuICAgIGZvciAobGV0IHNuYWtlIG9mIHNuYWtlcykge1xuICAgICAgICBmb3IgKGxldCBlbGVtZW50IG9mIHNuYWtlLnBhdGgpIHtcbiAgICAgICAgICAgIGxldCB3aWR0aCA9IHRpbGVXaWR0aCAvIDI7XG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gdGlsZUhlaWdodCAvIDI7XG4gICAgICAgICAgICBsZXQgeE9mZnNldCA9IHdpZHRoIC8gMjtcbiAgICAgICAgICAgIGxldCB5T2Zmc2V0ID0gaGVpZ2h0IC8gMjtcbiAgICAgICAgICAgIGxldCBwb3NYID0gZWxlbWVudC5jb29yZGluYXRlcy54ICogdGlsZVdpZHRoICsgeE9mZnNldDtcbiAgICAgICAgICAgIGxldCBwb3NZID0gZWxlbWVudC5jb29yZGluYXRlcy55ICogdGlsZUhlaWdodCArIHlPZmZzZXQ7XG4gICAgICAgICAgICBjYW52YXNXcmFwcGVyLmNyZWF0ZVJlY3QocG9zWCwgcG9zWSwgd2lkdGgsIGhlaWdodCwgc25ha2UuY29sb3IsIHBhdGhaaW5kZXgsIHNuYWtlWmluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBub2RlIG9mIHNuYWtlLmJvZHkpIHtcbiAgICAgICAgICAgIGxldCB3aWR0aCA9IHRpbGVXaWR0aDtcbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSB0aWxlSGVpZ2h0O1xuICAgICAgICAgICAgbGV0IHBvc1ggPSBub2RlLmNvb3JkaW5hdGVzLnggKiB0aWxlV2lkdGg7XG4gICAgICAgICAgICBsZXQgcG9zWSA9IG5vZGUuY29vcmRpbmF0ZXMueSAqIHRpbGVIZWlnaHQ7XG5cbiAgICAgICAgICAgIGNhbnZhc1dyYXBwZXIuY3JlYXRlUmVjdChwb3NYLCBwb3NZLCB3aWR0aCwgaGVpZ2h0LCBzbmFrZS5jb2xvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgcGlsbCBvZiBwaWxscykge1xuICAgICAgICBsZXQgcmFkaXVzID0gdGlsZVdpZHRoIC8gMjtcbiAgICAgICAgbGV0IHhPZmZzZXQgPSB0aWxlV2lkdGggLyAyO1xuICAgICAgICBsZXQgeU9mZnNldCA9IHRpbGVIZWlnaHQgLyAyO1xuICAgICAgICBsZXQgcG9zWCA9IHBpbGwucG9zaXRpb24uY29vcmRpbmF0ZXMueCAqIHRpbGVXaWR0aCArIHhPZmZzZXQ7XG4gICAgICAgIGxldCBwb3NZID0gcGlsbC5wb3NpdGlvbi5jb29yZGluYXRlcy55ICogdGlsZUhlaWdodCArIHlPZmZzZXQ7XG5cbiAgICAgICAgY2FudmFzV3JhcHBlci5jcmVhdGVDaXJjbGUocG9zWCwgcG9zWSwgcmFkaXVzLCBwaWxsLmNvbG9yLCBwaWxsWmluZGV4KTtcbiAgICB9XG5cbiAgICBmb3IobGV0IG9ic3RhY2xlIG9mIG9ic3RhY2xlcyl7XG4gICAgICAgIGxldCB3aWR0aCA9IHRpbGVXaWR0aDtcbiAgICAgICAgbGV0IGhlaWdodCA9IHRpbGVIZWlnaHQ7XG4gICAgICAgIGxldCBwb3NYID0gb2JzdGFjbGUuY29vcmRpbmF0ZXMueCAqIHRpbGVXaWR0aDtcbiAgICAgICAgbGV0IHBvc1kgPSBvYnN0YWNsZS5jb29yZGluYXRlcy55ICogdGlsZUhlaWdodDtcblxuICAgICAgICBjYW52YXNXcmFwcGVyLmNyZWF0ZVJlY3QocG9zWCwgcG9zWSwgd2lkdGgsIGhlaWdodCwgJ2JsYWNrJywgb2JzdGFjbGVaaW5kZXgpOyBcbiAgICB9XG59IiwiaW1wb3J0IE1haW5sb29wIGZyb20gJ21haW5sb29wLmpzJztcbmltcG9ydCBDYW52YXNXcmFwcGVyIGZyb20gJy4vY2FudmFzV3JhcHBlcic7XG5pbXBvcnQgTW9kZWwgZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgc3RyYXRlZ2llcyBmcm9tICcuL3BhdGhmaW5kaW5nLWFsZ29yaXRobXMvaW5kZXguanMnO1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy9jb25maWcuanNvbic7XG5pbXBvcnQge1xuICAgIGluaXRWaWV3UG9ydCxcbiAgICBkcmF3U2NlbmUsXG4gICAgaW5pdENvbXBvbmVudHMsXG4gICAgZ2VuZXJhdGVFcnJvck1lc3NhZ2Vcbn0gZnJvbSAnLi9tYWluRnVuY3Rpb25zJztcblxuXG53aW5kb3cub25sb2FkID0gbWFpbjtcblxuZnVuY3Rpb24gbWFpbigpIHtcbiAgICBjb25zdCBtb2RlbCA9IG5ldyBNb2RlbChjb25maWcsIHN0cmF0ZWdpZXMpO1xuICAgIGNvbnNvbGUubG9nKG1vZGVsLmVycm9yQnVmZmVyKVxuICAgIGxldCBlcnJvcnMgPSBtb2RlbC5lcnJvckJ1ZmZlciB8fCBbXTtcbiAgICBpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9IGdlbmVyYXRlRXJyb3JNZXNzYWdlKGVycm9ycyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG4gICAgICAgIHdpbmRvdy5hbGVydChlcnJvck1lc3NhZ2UpO1xuICAgIH1cbiAgICBjb25zdCBudW1iZXJPZkNvbHVtbnMgPSBOdW1iZXIoY29uZmlnLmJvYXJkQ29uZmlnLndpZHRoKTtcbiAgICBjb25zdCBudW1iZXJPZlJvd3MgPSBOdW1iZXIoY29uZmlnLmJvYXJkQ29uZmlnLmhlaWdodCk7XG4gICAgY29uc3Qgdmlld1BvcnRXaWR0aCA9IDcyMDtcbiAgICBjb25zdCB2aWV3UG9ydEhlaWdodCA9IDcyMDtcbiAgICBjb25zdCB0aWxlV2lkdGggPSB2aWV3UG9ydFdpZHRoIC8gbnVtYmVyT2ZDb2x1bW5zO1xuICAgIGNvbnN0IHRpbGVIZWlnaHQgPSB2aWV3UG9ydEhlaWdodCAvIG51bWJlck9mUm93cztcbiAgICBsZXQgd3JhcHBlZENhbnZhcztcblxuICAgIGxldCB2aWV3UG9ydCA9IGluaXRWaWV3UG9ydChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlld3BvcnQtY29udGFpbmVyJykpO1xuICAgIHdyYXBwZWRDYW52YXMgPSBuZXcgQ2FudmFzV3JhcHBlcih2aWV3UG9ydCwgdmlld1BvcnRXaWR0aCwgdmlld1BvcnRIZWlnaHQpO1xuXG4gICAgbGV0IG1haW5sb29wID0gTWFpbmxvb3Auc2V0VXBkYXRlKCgpID0+IHtcbiAgICAgICAgbW9kZWwudXBkYXRlKCk7XG4gICAgfSkuc2V0RHJhdygoKSA9PiB7XG4gICAgICAgIHdyYXBwZWRDYW52YXMuY2xlYXJTY2VuZSgpO1xuICAgICAgICBkcmF3U2NlbmUobW9kZWwsd3JhcHBlZENhbnZhcywgdGlsZVdpZHRoLCB0aWxlSGVpZ2h0KTtcbiAgICAgICAgd3JhcHBlZENhbnZhcy5yZW5kZXJTY2VuZSgpXG4gICAgfSkuc2V0U2ltdWxhdGlvblRpbWVzdGVwKDEwMDAgLyBtb2RlbC5zaW11bGF0aW9uU3BlZWQpO1xuXG5cbiAgICBpbml0Q29tcG9uZW50cyhjb25maWcsIG1vZGVsLCBtYWlubG9vcCk7XG4gICAgZHJhd1NjZW5lKG1vZGVsLCB3cmFwcGVkQ2FudmFzLCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQpO1xuICAgIHdyYXBwZWRDYW52YXMucmVuZGVyU2NlbmUoKTtcbn0iXSwibmFtZXMiOlsiYSIsImIiLCJ4IiwicSIsImUiLCJsIiwiZCIsInQiLCJpIiwiaCIsImYiLCJnIiwiaiIsImsiLCJjIiwidSIsIm8iLCJ2IiwidyIsIm0iLCJuIiwicCIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIkRhdGUiLCJub3ciLCJNYXRoIiwibWF4Iiwic2V0VGltZW91dCIsInIiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNsZWFyVGltZW91dCIsInMiLCJNYWluTG9vcCIsImdldFNpbXVsYXRpb25UaW1lc3RlcCIsInNldFNpbXVsYXRpb25UaW1lc3RlcCIsImdldEZQUyIsImdldE1heEFsbG93ZWRGUFMiLCJzZXRNYXhBbGxvd2VkRlBTIiwic3RvcCIsInJlc2V0RnJhbWVEZWx0YSIsInNldEJlZ2luIiwic2V0VXBkYXRlIiwic2V0RHJhdyIsInNldEVuZCIsInN0YXJ0IiwiaXNSdW5uaW5nIiwibW9kdWxlIiwidGhpcyIsIkNvb3JkaW5hdGVFcnJvciIsIm1lc3NhZ2UiLCJuYW1lIiwiRXJyb3IiLCJJbnRDb29yZGluYXRlIiwieSIsIm51bGxQb3NpdGlvbiIsIk51bWJlciIsImlzSW50ZWdlciIsIkludENvb3JkaW5hdGVFcnJvciIsIkNhbnZhc1dyYXBwZXIiLCJjYW52YXNET01FbGVtZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJ1bmRlZmluZWQiLCJnZXRDb250ZXh0IiwiX2NhbnZhcyIsIl9jdHgiLCJfc2NlbmUiLCJjcmVhdGVSZWN0IiwiYmluZCIsImRyYXdSZWN0IiwicmVuZGVyU2NlbmUiLCJwb3NYIiwicG9zWSIsImNvbG9yIiwiemluZGV4IiwicmVjdCIsInR5cGUiLCJwb3NpdGlvbiIsInB1c2giLCJyYWRpdXMiLCJjaXJjbGUiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJQSSIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiYmVnaW5QYXRoIiwiYXJjIiwiY2xvc2VQYXRoIiwiZmlsbCIsImNsZWFyUmVjdCIsInpCdWZmZXJlZFNjZW5lIiwic29ydFNjZW5lQnlaSW5kZXgiLCJvYmplY3QiLCJkcmF3Q2lyY2xlIiwic2NlbmUiLCJzb3J0IiwiejEiLCJ6MiIsIkVudGl0eSIsIm5ldyIsInRhcmdldCIsInVwZGF0ZSIsInJlc2V0IiwibGlzdENhY2hlQ2xlYXIiLCJfX2RhdGFfXyIsInNpemUiLCJlcSIsInZhbHVlIiwib3RoZXIiLCJhc3NvY0luZGV4T2YiLCJhcnJheSIsImtleSIsImxlbmd0aCIsImFycmF5UHJvdG8iLCJBcnJheSIsInByb3RvdHlwZSIsInNwbGljZSIsImxpc3RDYWNoZURlbGV0ZSIsImRhdGEiLCJpbmRleCIsImxhc3RJbmRleCIsInBvcCIsImNhbGwiLCJsaXN0Q2FjaGVHZXQiLCJsaXN0Q2FjaGVIYXMiLCJsaXN0Q2FjaGVTZXQiLCJMaXN0Q2FjaGUiLCJlbnRyaWVzIiwiY2xlYXIiLCJlbnRyeSIsInNldCIsImdldCIsImhhcyIsInN0YWNrQ2xlYXIiLCJzdGFja0RlbGV0ZSIsInJlc3VsdCIsInN0YWNrR2V0Iiwic3RhY2tIYXMiLCJmcmVlR2xvYmFsIiwiX3R5cGVvZiIsImdsb2JhbCIsIk9iamVjdCIsImZyZWVTZWxmIiwic2VsZiIsInJvb3QiLCJGdW5jdGlvbiIsIlN5bWJvbCIsIm9iamVjdFByb3RvIiwiaGFzT3duUHJvcGVydHkiLCJuYXRpdmVPYmplY3RUb1N0cmluZyIsInRvU3RyaW5nIiwic3ltVG9TdHJpbmdUYWciLCJ0b1N0cmluZ1RhZyIsImdldFJhd1RhZyIsImlzT3duIiwidGFnIiwidW5tYXNrZWQiLCJvYmplY3RUb1N0cmluZyIsIm51bGxUYWciLCJ1bmRlZmluZWRUYWciLCJiYXNlR2V0VGFnIiwiaXNPYmplY3QiLCJhc3luY1RhZyIsImZ1bmNUYWciLCJnZW5UYWciLCJwcm94eVRhZyIsImlzRnVuY3Rpb24iLCJjb3JlSnNEYXRhIiwibWFza1NyY0tleSIsInVpZCIsImV4ZWMiLCJrZXlzIiwiSUVfUFJPVE8iLCJpc01hc2tlZCIsImZ1bmMiLCJmdW5jUHJvdG8iLCJmdW5jVG9TdHJpbmciLCJ0b1NvdXJjZSIsInJlUmVnRXhwQ2hhciIsInJlSXNIb3N0Q3RvciIsInJlSXNOYXRpdmUiLCJSZWdFeHAiLCJyZXBsYWNlIiwiYmFzZUlzTmF0aXZlIiwicGF0dGVybiIsInRlc3QiLCJnZXRWYWx1ZSIsImdldE5hdGl2ZSIsIk1hcCIsIm5hdGl2ZUNyZWF0ZSIsImhhc2hDbGVhciIsImhhc2hEZWxldGUiLCJIQVNIX1VOREVGSU5FRCIsImhhc2hHZXQiLCJoYXNoSGFzIiwiaGFzaFNldCIsIkhhc2giLCJtYXBDYWNoZUNsZWFyIiwiaXNLZXlhYmxlIiwiZ2V0TWFwRGF0YSIsIm1hcCIsIm1hcENhY2hlRGVsZXRlIiwibWFwQ2FjaGVHZXQiLCJtYXBDYWNoZUhhcyIsIm1hcENhY2hlU2V0IiwiTWFwQ2FjaGUiLCJMQVJHRV9BUlJBWV9TSVpFIiwic3RhY2tTZXQiLCJwYWlycyIsIlN0YWNrIiwiYXJyYXlFYWNoIiwiaXRlcmF0ZWUiLCJkZWZpbmVQcm9wZXJ0eSIsImJhc2VBc3NpZ25WYWx1ZSIsImFzc2lnblZhbHVlIiwib2JqVmFsdWUiLCJjb3B5T2JqZWN0Iiwic291cmNlIiwicHJvcHMiLCJjdXN0b21pemVyIiwiaXNOZXciLCJuZXdWYWx1ZSIsImJhc2VUaW1lcyIsImlzT2JqZWN0TGlrZSIsImFyZ3NUYWciLCJiYXNlSXNBcmd1bWVudHMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImlzQXJndW1lbnRzIiwiYXJndW1lbnRzIiwiaXNBcnJheSIsInN0dWJGYWxzZSIsImZyZWVFeHBvcnRzIiwiZXhwb3J0cyIsIm5vZGVUeXBlIiwiZnJlZU1vZHVsZSIsIm1vZHVsZUV4cG9ydHMiLCJCdWZmZXIiLCJuYXRpdmVJc0J1ZmZlciIsImlzQnVmZmVyIiwiTUFYX1NBRkVfSU5URUdFUiIsInJlSXNVaW50IiwiaXNJbmRleCIsImlzTGVuZ3RoIiwiYXJyYXlUYWciLCJib29sVGFnIiwiZGF0ZVRhZyIsImVycm9yVGFnIiwibWFwVGFnIiwibnVtYmVyVGFnIiwib2JqZWN0VGFnIiwicmVnZXhwVGFnIiwic2V0VGFnIiwic3RyaW5nVGFnIiwid2Vha01hcFRhZyIsImFycmF5QnVmZmVyVGFnIiwiZGF0YVZpZXdUYWciLCJmbG9hdDMyVGFnIiwiZmxvYXQ2NFRhZyIsImludDhUYWciLCJpbnQxNlRhZyIsImludDMyVGFnIiwidWludDhUYWciLCJ1aW50OENsYW1wZWRUYWciLCJ1aW50MTZUYWciLCJ1aW50MzJUYWciLCJ0eXBlZEFycmF5VGFncyIsImJhc2VJc1R5cGVkQXJyYXkiLCJiYXNlVW5hcnkiLCJmcmVlUHJvY2VzcyIsInByb2Nlc3MiLCJub2RlVXRpbCIsImJpbmRpbmciLCJub2RlSXNUeXBlZEFycmF5IiwiaXNUeXBlZEFycmF5IiwiYXJyYXlMaWtlS2V5cyIsImluaGVyaXRlZCIsImlzQXJyIiwiaXNBcmciLCJpc0J1ZmYiLCJpc1R5cGUiLCJza2lwSW5kZXhlcyIsIlN0cmluZyIsImlzUHJvdG90eXBlIiwiQ3RvciIsImNvbnN0cnVjdG9yIiwicHJvdG8iLCJvdmVyQXJnIiwidHJhbnNmb3JtIiwiYXJnIiwibmF0aXZlS2V5cyIsImJhc2VLZXlzIiwiaXNBcnJheUxpa2UiLCJiYXNlQXNzaWduIiwibmF0aXZlS2V5c0luIiwiYmFzZUtleXNJbiIsImlzUHJvdG8iLCJrZXlzSW4iLCJiYXNlQXNzaWduSW4iLCJhbGxvY1Vuc2FmZSIsImNsb25lQnVmZmVyIiwiYnVmZmVyIiwiaXNEZWVwIiwic2xpY2UiLCJjb3B5IiwiY29weUFycmF5IiwiYXJyYXlGaWx0ZXIiLCJwcmVkaWNhdGUiLCJyZXNJbmRleCIsInN0dWJBcnJheSIsIm5hdGl2ZUdldFN5bWJvbHMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJnZXRTeW1ib2xzIiwic3ltYm9sIiwiY29weVN5bWJvbHMiLCJhcnJheVB1c2giLCJ2YWx1ZXMiLCJvZmZzZXQiLCJnZXRQcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsImdldFN5bWJvbHNJbiIsImNvcHlTeW1ib2xzSW4iLCJiYXNlR2V0QWxsS2V5cyIsImtleXNGdW5jIiwic3ltYm9sc0Z1bmMiLCJnZXRBbGxLZXlzIiwiZ2V0QWxsS2V5c0luIiwiRGF0YVZpZXciLCJQcm9taXNlIiwiU2V0IiwiV2Vha01hcCIsInByb21pc2VUYWciLCJkYXRhVmlld0N0b3JTdHJpbmciLCJtYXBDdG9yU3RyaW5nIiwicHJvbWlzZUN0b3JTdHJpbmciLCJzZXRDdG9yU3RyaW5nIiwid2Vha01hcEN0b3JTdHJpbmciLCJnZXRUYWciLCJBcnJheUJ1ZmZlciIsInJlc29sdmUiLCJjdG9yU3RyaW5nIiwiaW5pdENsb25lQXJyYXkiLCJpbnB1dCIsIlVpbnQ4QXJyYXkiLCJjbG9uZUFycmF5QnVmZmVyIiwiYXJyYXlCdWZmZXIiLCJieXRlTGVuZ3RoIiwiY2xvbmVEYXRhVmlldyIsImRhdGFWaWV3IiwiYnl0ZU9mZnNldCIsImFkZE1hcEVudHJ5IiwicGFpciIsImFycmF5UmVkdWNlIiwiYWNjdW11bGF0b3IiLCJpbml0QWNjdW0iLCJtYXBUb0FycmF5IiwiZm9yRWFjaCIsIkNMT05FX0RFRVBfRkxBRyIsImNsb25lTWFwIiwiY2xvbmVGdW5jIiwicmVGbGFncyIsImNsb25lUmVnRXhwIiwicmVnZXhwIiwiYWRkU2V0RW50cnkiLCJhZGQiLCJzZXRUb0FycmF5IiwiY2xvbmVTZXQiLCJzeW1ib2xQcm90byIsInN5bWJvbFZhbHVlT2YiLCJ2YWx1ZU9mIiwiY2xvbmVTeW1ib2wiLCJjbG9uZVR5cGVkQXJyYXkiLCJ0eXBlZEFycmF5Iiwic3ltYm9sVGFnIiwiaW5pdENsb25lQnlUYWciLCJvYmplY3RDcmVhdGUiLCJjcmVhdGUiLCJiYXNlQ3JlYXRlIiwiaW5pdENsb25lT2JqZWN0IiwiQ0xPTkVfRkxBVF9GTEFHIiwiQ0xPTkVfU1lNQk9MU19GTEFHIiwiY2xvbmVhYmxlVGFncyIsImJhc2VDbG9uZSIsImJpdG1hc2siLCJzdGFjayIsImlzRmxhdCIsImlzRnVsbCIsImlzRnVuYyIsInN0YWNrZWQiLCJzdWJWYWx1ZSIsImNsb25lRGVlcCIsIkNvbmZpZ0Vycm9yIiwiY291bnRlciIsImlkR2VuZXJhdG9yIiwiaWQiLCJFdWNsaWRlYW5EaXN0YW5jZSIsImZyb20iLCJ0byIsInNxcnQiLCJwb3ciLCJjb29yZGluYXRlcyIsIkJvYXJkIiwiY2FsbGJhY2tzIiwiY29uZmlnIiwicGFyc2VkQ29uZmlnIiwicGFyc2VDb25maWciLCJwcm9wYWdhdGVFcnJvciIsInN0YXRlIiwiSUQiLCJhc3NpZ24iLCJvYnN0YWNsZXMiLCJwYXJzZWRPYnN0YWNsZXMiLCJvYnN0YWNsZSIsIm9wdGlvbnMiLCJuZXh0U3RhdGUiLCJkaW1YIiwiZGltWSIsIk9ic2VydmVyRW50aXR5Iiwib25Ob3RpZnkiLCJDb21tYW5kIiwiZXhlY3V0ZSIsIkxlZnRUdXJuQ29tbWFuZCIsInNuYWtlIiwiaGFuZGxlSW5wdXQiLCJSaWdodFR1cm5Db21tYW5kIiwiRG93blR1cm5Db21tYW5kIiwiVXBUdXJuQ29tbWFuZCIsIlNuYWtlIiwic3RyYXRlZ3kiLCJub3RpZmllciIsInZlbG9jaXR5Iiwibm90aWZpY2F0aW9uQnVmZmVyIiwic3RhdHVzIiwicGF0aCIsInRpbWVyIiwic3Vic2NyaWJlIiwic3RhcnREaXJlY3Rpb24iLCJzdGFydFZlbG9jaXR5Iiwic3RhcnRYIiwic3RhcnRZIiwiYmFzZUxlbmd0aCIsImxpbWl0WCIsImxpbWl0WSIsImJvZHkiLCJkaXJlY3Rpb24iLCJiYXNlVmVsb2NpdHkiLCJsaW1pdHMiLCJuZXh0RGlyZWN0aW9uIiwibmV4dFZlbG9jaXR5IiwibmV4dEJvZHkiLCJjb21tYW5kUmVzdWx0IiwibmV4dFN0ZXAiLCJjb21tYW5kIiwiaXNBbGl2ZSIsImNhbGN1bGF0ZVBhdGgiLCJjYWxjdWxhdGVDb21tYW5kIiwiaGVhZCIsImNhbGN1bGF0ZVZlbG9jaXR5IiwibW92ZSIsImNhbGN1bGF0ZVN0ZXBDb2xsaXNpb25UeXBlIiwibm90aWZpY2F0aW9uIiwicHJvY2Vzc05vdGlmaWNhdGlvbiIsInNldFN0YXRlIiwiZW50aXR5IiwiZXZlbnQiLCJldmVudFR5cGUiLCJzdG9yZWROb3RpZmljYXRpb24iLCJwYXlsb2FkIiwicGlsbCIsInN0b3JlTm90aWZpY2F0aW9uIiwibm90aWZpY2F0aW9uUmVzdWx0IiwiZWF0IiwicGlsbFZhbHVlIiwiZGllIiwiaXNPcHBvc2l0ZURpcmVjdGlvbiIsInZlbG9jaXR5WCIsInZlbG9jaXR5WSIsIm5leHRIZWFkIiwiY2FsY3VsYXRlTmV4dEhlYWQiLCJ1bnNoaWZ0IiwibmV4dFBvc1giLCJuZXh0UG9zWSIsImZyb21YIiwiZnJvbVkiLCJ0b1giLCJ0b1kiLCJjdXJyRGlyZWN0aW9uIiwiZ2FpbiIsImFkZGl0aW9uYWxOb2RlcyIsInRhaWxOb2RlIiwiYm9keUxlbmd0aCIsInRhaWxOb2RlQ29vcmRpbmF0ZXMiLCJjYWxjdWxhdGVUYXJnZXQiLCJwYXRoZmluZGVyIiwic3RhcnRUaW1lIiwiZ2V0VGltZSIsImVuZFRpbWUiLCJydW50aW1lIiwicHJvcGFnYXRlUnVudGltZSIsIlBpbGwiLCJzdGFydFBvc1giLCJzdGFydFBvc1kiLCJuZXdQb3NpdGlvbiIsImNhbGN1bGF0ZU5ld1JhbmRvbVBvc2l0aW9uIiwic25ha2VzIiwiZ2V0RW50aXR5TGlzdCIsImJvYXJkIiwiYXBwZW5kZWRTbmFrZUJvZGllcyIsImZyZWVQb3NpdGlvbnMiLCJjYWxjdWxhdGVGcmVlUG9zaXRpb25zIiwicmFuZG9tUG9zSW5kZXgiLCJ0cnVuYyIsInJhbmRvbSIsInJhbmRvbVBvc2l0aW9uIiwic25ha2VCb2R5IiwicG9zaXRpb25zIiwibm9kZSIsIlN1YmplY3QiLCJ1bnN1YnNjcmliZSIsIk5vdGlmaWVyIiwib2JzZXJ2ZXJzIiwibGFzdE5vZGVCdWZmZXIiLCJjYWxsZXJJRCIsInBpbGxzIiwiY2FsbGVyU25ha2UiLCJnZXRFbnRpdHlCeUlEIiwic3RvcmVMYXN0Tm9kZSIsImVuZE9mQm9keSIsIm9ic2VydmVyIiwiY2FsbGVyIiwibGFzdE5vZGVzIiwiaW5jbHVkZXMiLCJkZWxldGUiLCJsYXN0Tm9kZSIsIk1vZGVsIiwic3RyYXRlZ2llcyIsInBhc3NlZERvd25DYWxsYmFja3MiLCJzaW11bGF0aW9uU3BlZWQiLCJFbnRpdGllcyIsImlzR2FtZU92ZXIiLCJzbmFrZUNvbmZpZyIsInN0cmF0ZWd5TmFtZSIsInN0cmF0ZWd5VHlwZSIsImVucmljaGVkQ29uZmlnIiwiZW5yaWNoQ29uZmlnIiwic25ha2VDb25maWdzIiwicGlsbENvbmZpZ3MiLCJib2FyZENvbmZpZyIsIm1haW5Db25maWciLCJtYWluIiwic25ha2VGYWN0b3J5IiwicGlsbENvbmZpZyIsInNuYWtlSUQiLCJydW50aW1lcyIsImVycm9yIiwiZXJyb3JCdWZmZXIiLCJyZXR1cm5FbnRpdHkiLCJTdHJhdGVneSIsIkFTdGFyIiwiaGV1cmlzaW0iLCJnb2FsIiwiZ3Njb3JlVGFibGUiLCJmU2NvcmVUYWJsZSIsImRpbWVuc2lvbnMiLCJjbG9zZWRMYWJlbFNldCIsIm9wZW5MYWJlbFNldCIsImNhbWVGcm9tIiwic3RhcnRMYWJlbCIsInNjb3JlIiwiaGV1cmlzdGljQ29zdEVzdGltYXRlIiwiY3VycmVudExhYmVsIiwibWluU2NvcmVMYWJlbFNlbGVjdCIsInJlY29uc3RydWN0UGF0aCIsIm5laWdoYm9ycyIsImdldE5laWdoYm9ycyIsIm5laWdoYm9yIiwidGVudGF0aXZlZ3Njb3JlIiwibGFiZWxTZXQiLCJ0YWJsZSIsInNldEFzQXJyYXkiLCJtaW5FbnRyeSIsImNhbWVGcm9tTGFiZWxMaXN0IiwidGlsZXMiLCJ0b3RhbFBhdGgiLCJ0YWJsZVRpbGUiLCJtYXhYIiwibWF4WSIsImxhYmVsIiwiQVN0YXJQcmVwcm9jZXNzIiwiZ1Njb3JlVGFibGUiLCJJbmZpbml0eSIsIlBsYWluQVN0YXJTdHJhdGVneSIsImhldXJpc20iLCJhU3RhclByZXByb2Nlc3NSZXN1bHQiLCJBU3RhcnRBbGdvcml0aG0iLCJmaXJzdFBpbGwiLCJtaW4iLCJtaW5EaXN0IiwiY3VyckRpc3QiLCJwbGFpbkFTdGFyU3RyYXRlZ3kiLCJpbml0Vmlld1BvcnQiLCJob2lzdE9uIiwiYXBwZW5kQ2hpbGQiLCJ2aWV3UG9ydCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInZpZXdQb3J0V3JhcHBlckVsZW1lbnQiLCJzdHlsZSIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJib3JkZXIiLCJpbml0Q29tcG9uZW50cyIsIm1vZGVsIiwibWFpbmxvb3AiLCJzcGVlZFNlbGVjdG9yIiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJkYXNoYm9hcmQiLCJyZXN0YXJ0QnV0dG9uIiwic3RvcEJ1dHRvbiIsInN0YXJ0QnV0dG9uIiwiZ2VuZXJhdGVFcnJvck1lc3NhZ2UiLCJlcnJvcnMiLCJlcnJvck1lc3NhZ2UiLCJkcmF3U2NlbmUiLCJjYW52YXNXcmFwcGVyIiwidGlsZVdpZHRoIiwidGlsZUhlaWdodCIsInBhdGhaaW5kZXgiLCJwaWxsWmluZGV4Iiwic25ha2VaaW5kZXgiLCJvYnN0YWNsZVppbmRleCIsImVsZW1lbnQiLCJ4T2Zmc2V0IiwieU9mZnNldCIsImNyZWF0ZUNpcmNsZSIsIm9ubG9hZCIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCIsIm51bWJlck9mQ29sdW1ucyIsIm51bWJlck9mUm93cyIsInZpZXdQb3J0V2lkdGgiLCJ2aWV3UG9ydEhlaWdodCIsIndyYXBwZWRDYW52YXMiLCJNYWlubG9vcCIsImNsZWFyU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztDQUFBOzs7Ozs7O0NBT0EsR0FBQyxVQUFTQSxDQUFULEVBQVc7Q0FBQyxhQUFTQyxDQUFULENBQVdELENBQVgsRUFBYTtDQUFDLFVBQUdFLElBQUVDLEVBQUVGLENBQUYsQ0FBRixFQUFPLEVBQUVELElBQUVJLElBQUVDLENBQU4sQ0FBVixFQUFtQjtDQUFDLGFBQUlDLEtBQUdOLElBQUVJLENBQUwsRUFBT0EsSUFBRUosQ0FBVCxFQUFXTyxFQUFFUCxDQUFGLEVBQUlNLENBQUosQ0FBWCxFQUFrQk4sSUFBRVEsSUFBRUMsQ0FBSixLQUFRQyxJQUFFQyxJQUFFQyxDQUFGLEdBQUksR0FBSixJQUFTWixJQUFFUSxDQUFYLElBQWMsQ0FBQyxJQUFFRyxDQUFILElBQU1ELENBQXRCLEVBQXdCRixJQUFFUixDQUExQixFQUE0QlksSUFBRSxDQUF0QyxDQUFsQixFQUEyREEsR0FBM0QsRUFBK0RDLElBQUUsQ0FBckUsRUFBdUVQLEtBQUdRLENBQTFFO0NBQTZFLGNBQUdDLEVBQUVELENBQUYsR0FBS1IsS0FBR1EsQ0FBUixFQUFVLEVBQUVELENBQUYsSUFBSyxHQUFsQixFQUFzQjtDQUFDRyxnQkFBRSxDQUFDLENBQUgsQ0FBSztDQUFNO0NBQS9HLFNBQStHQyxFQUFFWCxJQUFFUSxDQUFKLEdBQU9JLEVBQUVSLENBQUYsRUFBSU0sQ0FBSixDQUFQLEVBQWNBLElBQUUsQ0FBQyxDQUFqQjtDQUFtQjtDQUFD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
