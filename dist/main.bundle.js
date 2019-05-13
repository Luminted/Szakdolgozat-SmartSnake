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
	    function CanvasWrapper(width, height, canvasDOMElement) {
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

	var _createClass$2 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck$5(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn$2(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Board = function (_Entity) {
	    _inherits$2(Board, _Entity);

	    function Board(callbacks, config) {
	        _classCallCheck$5(this, Board);

	        var _this = _possibleConstructorReturn$2(this, (Board.__proto__ || Object.getPrototypeOf(Board)).call(this));
	        //log.info('Initializing board...');

	        _this.state = {};
	        _this.state.ID = idGenerator();
	        var parsedConfig = _this.parseConfig(config);
	        Object.assign(_this.state, parsedConfig);
	        _this.callbacks = callbacks;
	        _this.initialTiles = cloneDeep_1(_this.state.tiles);
	        _this.config = config;
	        return _this;
	    }

	    _createClass$2(Board, [{
	        key: 'parseConfig',
	        value: function parseConfig(config) {
	            if (config.width == undefined || config.height == undefined) {
	                throw new ConfigError('Missing fields in config. Fields needed: width:integer, height: integer');
	            }
	            var parsedConfig = {};
	            parsedConfig.config = config;
	            parsedConfig.width = Number(config.width);
	            parsedConfig.height = Number(config.height);
	            parsedConfig.tiles = [];
	            for (var i = 0; i < parsedConfig.width; ++i) {
	                parsedConfig.tiles.push([]);
	                for (var j = 0; j < parsedConfig.height; ++j) {
	                    parsedConfig.tiles[i].push({
	                        id: '' + i + j,
	                        position: new IntCoordinate(i, j),
	                        status: 'EMPTY'
	                    });
	                }
	            }

	            return parsedConfig;
	        }
	    }, {
	        key: 'update',
	        value: function update() {}
	    }, {
	        key: 'reset',
	        value: function reset() {
	            this.setState({
	                tiles: this.state.initialTiles
	            });
	        }
	    }, {
	        key: 'setState',
	        value: function setState(options) {
	            var nextState = this.state;
	            Object.assign(nextState, options);

	            //log.info('BOARD');
	            //log.info('prevState', this.state);
	            //log.info('next state', nextState);

	            this.state = nextState;
	        }
	    }, {
	        key: 'getTileByPosition',
	        value: function getTileByPosition(x, y) {
	            if (x >= 0 && x < this.state.width && y >= 0 && y < this.state.height) {
	                return this.state.tiles[x][y];
	            }
	            return undefined;
	        }
	    }, {
	        key: 'getTilesAsArray',
	        value: function getTilesAsArray() {
	            var tiles = [];
	            for (var i = 0; i < this.state.width; ++i) {
	                for (var j = 0; j < this.state.height; ++j) {
	                    tiles.push(this.tiles[i][j]);
	                }
	            }
	            return tiles;
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
	        key: 'tiles',
	        get: function get() {
	            return this.state.tiles;
	        }
	    }, {
	        key: 'ID',
	        get: function get() {
	            return this.state.ID;
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

	//import log from 'loglevel';

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

	//import log from 'loglevel';

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

	//import log from 'loglevel';

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

	        _this.state = {};
	        _this.state.ID = idGenerator();
	        var parsedConfig = _this.parseConfig(config);
	        _this.state.command = void 0;
	        _this.state.velocity = {
	            x: 0,
	            y: 0
	        };
	        _this.state.notificationBuffer = [];
	        _this.state.status = "ALIVE";
	        _this.state.strategy = strategy;
	        _this.state.path = [];
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
	                if (path && path.length > 0) {
	                    command = this.calculateCommand(this.head, path[0]);
	                }

	                command = command || this.state.command;
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
	                status: "ALIVE"
	            };
	            Object.assign(nextState, parsedConfig);
	            this.setState(nextState);
	        }
	    }, {
	        key: 'setTarget',
	        value: function setTarget(targetObject) {
	            if (targetObject == undefined || targetObject.position == undefined) {
	                this.setState({
	                    target: undefined
	                });
	            } else {
	                var position = targetObject.position;
	                this.setState({
	                    target: position
	                });
	            }
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
	                    var strategy = this.state.strategy;
	                    if (strategy && strategy.calculateTarget) {
	                        var newTarget = strategy.calculateTarget(this);
	                        nextState.target = newTarget;
	                    }
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
	            var path = void 0;
	            if (strategy && strategy.pathfinder) {
	                var startTime = this.timer.getTime();
	                path = strategy.pathfinder(this);
	                var endTime = this.timer.getTime();
	                this.timer.get;
	                var runtime = endTime - startTime;
	                this.callbacks.propagateRuntime(this.ID, runtime);
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

	        var parsedConfig = _this.parseConfig(config);
	        _this.state = parsedConfig;
	        _this.state.ID = idGenerator();

	        _this.callbacks = callbacks;
	        _this.config = config;

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

	            if (appendedSnakeBodies.length >= limitX * limitY) {
	                return new IntCoordinate(undefined, undefined, true);
	            } else {
	                var freePositions = this.calculateFreePositions(appendedSnakeBodies);
	                var randomPosIndex = Math.trunc(Math.random() * (freePositions.length - 1));
	                var randomPosition = freePositions[randomPosIndex];
	                return new IntCoordinate(randomPosition.x, randomPosition.y);
	            }
	        }
	    }, {
	        key: 'calculateFreePositions',
	        value: function calculateFreePositions(snakeBody) {
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
	                    console.log('<---------------WALL_COLLISION_ACITON--------------->');
	                    this.observers.forEach(function (observer) {
	                        var caller = _this2.callbacks.getEntityByID(callerID);
	                        observer.onNotify(caller, {
	                            type: "WALL_COLLISION"
	                        });
	                    });
	                }
	            }

	            var _loop = function _loop(pill) {
	                if (pill.position.coordinates != undefined) {
	                    if (pill.position.coordinates.x === nextStep.coordinates.x && pill.position.coordinates.y === nextStep.coordinates.y) {
	                        console.log('<---------------PILL_COLLISION_ACITON--------------->');
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

	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = pills[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var pill = _step.value;

	                    _loop(pill);
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

	            if (callerSnake.target && callerSnake.target.coordinates != undefined) {
	                if (callerSnake.target && callerSnake.target.coordinates.x === nextStep.coordinates.x && callerSnake.target.coordinates.y === nextStep.coordinates.y) {
	                    console.log('<---------------TARGET_REACHED--------------->');
	                    this.observers.forEach(function (observer) {
	                        observer.onNotify(callerSnake, {
	                            type: 'TARGET_REACHED'
	                        });
	                    });
	                }
	            }

	            var lastNodes = {};
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	                for (var _iterator2 = snakes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var snake = _step2.value;

	                    lastNodes[snake.ID] = snake.endOfBody;
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

	            Object.assign(lastNodes, this.lastNodeBuffer);
	            var includes = false;
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;

	            try {
	                for (var _iterator3 = Object.keys(lastNodes)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var key = _step3.value;

	                    includes = includes || lastNodes[key].coordinates.x == nextStep.coordinates.x && lastNodes[key].coordinates.y == nextStep.coordinates.y;
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

	            if (!includes) {
	                var _iteratorNormalCompletion4 = true;
	                var _didIteratorError4 = false;
	                var _iteratorError4 = undefined;

	                try {
	                    for (var _iterator4 = snakes[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                        var _snake = _step4.value;
	                        var _iteratorNormalCompletion5 = true;
	                        var _didIteratorError5 = false;
	                        var _iteratorError5 = undefined;

	                        try {
	                            for (var _iterator5 = _snake.body[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	                                var node = _step5.value;

	                                if (nextStep.coordinates.x === node.coordinates.x && nextStep.coordinates.y === node.coordinates.y) {
	                                    console.log('<---------------BODY_COLLISION_ACITON--------------->');
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

	        var parsedConfig = this.parseConfig(config);
	        this.runtimes = {};

	        this.config = config;
	        this.simulationSpeed = parsedConfig.simulationSpeed;
	        this.Entities = {
	            snakes: parsedConfig.snakes,
	            pills: parsedConfig.pills,
	            board: parsedConfig.board
	        };
	    }

	    _createClass$a(Model, [{
	        key: 'update',
	        value: function update() {
	            if (!this.isGameOver()) {
	                var snakes = this.Entities.snakes;
	                var pills = this.Entities.pills;
	                var board = this.Entities.board;

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
	            var enrichedConfig = this.enrichConfig(config);
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
	            if (error instanceof Error) {
	                return error;
	            }
	            return undefined;
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
	            var path = [new IntCoordinate(1, 1)];
	            // let pill = this.callbacks.getEntityList().pills[0];
	            // let board = this.callbacks.getEntityList().board;
	            // let path = AStartAlgorithm(snake.head, pill.position, board);
	            return path;
	        }
	    }, {
	        key: 'calculateTarget',
	        value: function calculateTarget() {
	            snake.setTarget(new IntCoordinate(1, 1));
	        }
	    }]);

	    return PlainAStarStrategy;
	}(Strategy);

	var strategies = {
	    plainAStarStrategy: PlainAStarStrategy
	};

	var main = {
		simulationSpeed: 10
	};
	var boardConfig = {
		width: 100,
		height: 100
	};
	var snakeConfigs = [{
		baseLength: "1",
		startX: "0",
		startY: "0",
		startDirection: "RIGHT",
		startVelocity: "1",
		strategy: "plainAStarStrategy"
	}, {
		baseLength: "1",
		startX: "20",
		startY: "20",
		startDirection: "LEFT",
		startVelocity: "1",
		strategy: "plainAStarStrategy"
	}];
	var pillConfigs = [{
		pillValue: 1,
		startPosX: 15,
		startPosY: 15
	}];
	var config = {
		main: main,
		boardConfig: boardConfig,
		snakeConfigs: snakeConfigs,
		pillConfigs: pillConfigs
	};

	//'use strict'

	window.onload = function () {
	    var model = new Model(config, strategies);
	    var numberOfColumns = Number(config.boardConfig.width);
	    var numberOfRows = Number(config.boardConfig.height);
	    var viewPortWidth = 1280;
	    var viewPortHeight = 720;
	    var tileWidth = viewPortWidth / numberOfColumns;
	    var tileHeight = viewPortHeight / numberOfRows;

	    var viewPort = initViewPort(document.querySelector('#viewport-container'));
	    var wrappedCanvas = new CanvasWrapper(viewPortWidth, viewPortHeight, viewPort, '2d');
	    var mainloop = void 0;

	    initComponents(config);

	    //Játékloop
	    mainloop = mainloop_min.setUpdate(function () {
	        model.update();
	        updateStatScreen(model.runtimes);
	    }).setDraw(function () {
	        wrappedCanvas.clearScene();
	        drawBoard(model);
	        wrappedCanvas.renderScene();
	    }).setSimulationTimestep(1000 / 15);

	    //TODO: This should be in a separate render module
	    function drawBoard(model) {
	        var snakes = model.getEntityList().snakes;
	        var pills = model.getEntityList().pills;

	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = snakes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var snake = _step.value;
	                var _iteratorNormalCompletion3 = true;
	                var _didIteratorError3 = false;
	                var _iteratorError3 = undefined;

	                try {
	                    for (var _iterator3 = snake.path[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                        var element = _step3.value;

	                        wrappedCanvas.createRect(element.coordinates.x * tileWidth, element.coordinates.y * tileHeight, tileWidth / 2, tileHeight / 2, 'red');
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
	                    for (var _iterator4 = snake.body[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                        var node = _step4.value;

	                        wrappedCanvas.createRect(node.coordinates.x * tileWidth, node.coordinates.y * tileHeight, tileWidth, tileHeight, 'green');
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

	                wrappedCanvas.createCircle(pill.position.coordinates.x * tileHeight, pill.position.coordinates.y * tileHeight, tileHeight / 2);
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
	    }

	    /*************************** METÓDUSOK ******************************/
	    /********************************************************************/

	    /**
	     * Játék ablakának inicializálása
	     */
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

	    function initComponents(config) {
	        var snakes = model.getEntityList().snakes;

	        //speed selector
	        var speedSelector = document.querySelector('#speed-selector');
	        speedSelector.value = Number(config.main.simulationSpeed);
	        speedSelector.addEventListener('input', function (event) {
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

	        //stat screen
	        var statScreen = document.querySelector('#statScreen');
	        statScreen.style = "background-color: #d6c182; text-align: center; padding: 10px";
	        statScreen.style.width = '300PX';
	        statScreen.style.textAlign = 'center';
	        var snakeStatScreen = document.createElement('div');
	        snakeStatScreen.style.display = 'inline';
	        snakeStatScreen.style.width = '100%';
	        snakeStatScreen.id = 'snakeStatScreen';
	        var _iteratorNormalCompletion5 = true;
	        var _didIteratorError5 = false;
	        var _iteratorError5 = undefined;

	        try {
	            for (var _iterator5 = snakes[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	                var snake = _step5.value;

	                //color
	                var colorDisplay = document.createElement('div');
	                colorDisplay.id = 'colorDisplay-' + snake.ID;
	                var colorLabel = document.createElement('label');
	                colorLabel.innerHTML = 'color:';
	                var colorDisplayContent = document.createElement('p');
	                colorDisplayContent.innerHTML = 'RED';
	                colorDisplay.appendChild(colorLabel);
	                colorDisplay.appendChild(colorDisplayContent);

	                //score
	                var scoreDisplay = document.createElement('div');
	                scoreDisplay.id = 'scoreDisplay-' + snake.ID;
	                var scoreLabel = document.createElement('label');
	                scoreLabel.innerHTML = 'score:';
	                var scoreDisplayContent = document.createElement('p');
	                scoreDisplayContent.innerHTML = 'RED';
	                scoreDisplay.appendChild(scoreLabel);
	                scoreDisplay.appendChild(scoreDisplayContent);

	                snakeStatScreen.appendChild(colorDisplay);
	                snakeStatScreen.appendChild(scoreDisplay);
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

	        statScreen.appendChild(snakeStatScreen);
	    }

	    function updateStatScreen(stats) {
	        var paragraph = document.querySelector('#innerStatScreenParagraph');
	        var _iteratorNormalCompletion6 = true;
	        var _didIteratorError6 = false;
	        var _iteratorError6 = undefined;

	        try {
	            for (var _iterator6 = Object.keys(stats)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	                var key = _step6.value;

	                paragraph.innerHTML = stats[key];
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
	};

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9tYWlubG9vcC5qcy9idWlsZC9tYWlubG9vcC5taW4uanMiLCIuLi9zcmMvanMvZXJyb3JzL0ludENvb3JkaW5hdGVFcnJvci5qcyIsIi4uL3NyYy9qcy9pbnRDb29yZGluYXRlLmpzIiwiLi4vc3JjL2pzL2NhbnZhc1dyYXBwZXIuanMiLCIuLi9zcmMvanMvQWJzdHJhY3RDbGFzc2VzL0VudGl0eS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9lcS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrQ2xlYXIuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja0RlbGV0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrR2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tIYXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzRnVuY3Rpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3JlSnNEYXRhLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNNYXNrZWQuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL190b1NvdXJjZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFZhbHVlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TmF0aXZlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTWFwLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaENsZWFyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaERlbGV0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hHZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoSGFzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaFNldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0hhc2guanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXlhYmxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVHZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUhhcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTWFwQ2FjaGUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja1NldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N0YWNrLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlFYWNoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZGVmaW5lUHJvcGVydHkuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQXNzaWduVmFsdWUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NpZ25WYWx1ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcHlPYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVGltZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc0FyZ3VtZW50cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcmd1bWVudHMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJGYWxzZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNCdWZmZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc0luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0xlbmd0aC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVW5hcnkuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19ub2RlVXRpbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb3ZlckFyZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlS2V5cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcnJheUxpa2UuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2tleXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQXNzaWduLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlS2V5c0luLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUtleXNJbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gva2V5c0luLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUFzc2lnbkluLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVCdWZmZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5QXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUZpbHRlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvc3R1YkFycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0U3ltYm9scy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcHlTeW1ib2xzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlQdXNoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UHJvdG90eXBlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0U3ltYm9sc0luLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29weVN5bWJvbHNJbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0QWxsS2V5cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldEFsbEtleXNJbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0RhdGFWaWV3LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fUHJvbWlzZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1NldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1dlYWtNYXAuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRUYWcuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pbml0Q2xvbmVBcnJheS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1VpbnQ4QXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jbG9uZUFycmF5QnVmZmVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVEYXRhVmlldy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FkZE1hcEVudHJ5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlSZWR1Y2UuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBUb0FycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVNYXAuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jbG9uZVJlZ0V4cC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FkZFNldEVudHJ5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lU2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVTeW1ib2wuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jbG9uZVR5cGVkQXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pbml0Q2xvbmVCeVRhZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VDcmVhdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pbml0Q2xvbmVPYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQ2xvbmUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2Nsb25lRGVlcC5qcyIsIi4uL3NyYy9qcy9lcnJvcnMvQ29uZmlnRXJyb3IuanMiLCIuLi9zcmMvanMvY3VzdG9tVXRpbHMuanMiLCIuLi9zcmMvanMvYm9hcmQuanMiLCIuLi9zcmMvanMvQWJzdHJhY3RDbGFzc2VzL09ic2VydmVyRW50aXR5LmpzIiwiLi4vc3JjL2pzL0Fic3RyYWN0Q2xhc3Nlcy9Db21tYW5kLmpzIiwiLi4vc3JjL2pzL0NvbW1hbmRzL0xlZnRUdXJuQ29tbWFuZC5qcyIsIi4uL3NyYy9qcy9Db21tYW5kcy9SaWdodFR1cm5Db21tYW5kLmpzIiwiLi4vc3JjL2pzL0NvbW1hbmRzL0Rvd25UdXJuQ29tbWFuZC5qcyIsIi4uL3NyYy9qcy9Db21tYW5kcy9VcFR1cm5Db21tYW5kLmpzIiwiLi4vc3JjL2pzL3NuYWtlLmpzIiwiLi4vc3JjL2pzL3BpbGwuanMiLCIuLi9zcmMvanMvQWJzdHJhY3RDbGFzc2VzL1N1YmplY3QuanMiLCIuLi9zcmMvanMvbm90aWZpZXIuanMiLCIuLi9zcmMvanMvbW9kZWwuanMiLCIuLi9zcmMvanMvQWJzdHJhY3RDbGFzc2VzL1N0cmF0ZWd5LmpzIiwiLi4vc3JjL2pzL3BhdGhmaW5kaW5nLWFsZ29yaXRobXMvcGxhaW5BU3Rhci5qcyIsIi4uL3NyYy9qcy9wYXRoZmluZGluZy1hbGdvcml0aG1zL2luZGV4LmpzIiwiLi4vc3JjL2pzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBtYWlubG9vcC5qcyAxLjAuMy0yMDE3MDUyOVxuICpcbiAqIEBhdXRob3IgSXNhYWMgU3VraW4gKGh0dHA6Ly93d3cuaXNhYWNzdWtpbi5jb20vKVxuICogQGxpY2Vuc2UgTUlUXG4gKi9cblxuIWZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYSl7aWYoeD1xKGIpLCEoYTxlK2wpKXtmb3IoZCs9YS1lLGU9YSx0KGEsZCksYT5pK2gmJihmPWcqaioxZTMvKGEtaSkrKDEtZykqZixpPWEsaj0wKSxqKyssaz0wO2Q+PWM7KWlmKHUoYyksZC09YywrK2s+PTI0MCl7bz0hMDticmVha312KGQvYyksdyhmLG8pLG89ITF9fXZhciBjPTFlMy82MCxkPTAsZT0wLGY9NjAsZz0uOSxoPTFlMyxpPTAsaj0wLGs9MCxsPTAsbT0hMSxuPSExLG89ITEscD1cIm9iamVjdFwiPT10eXBlb2Ygd2luZG93P3dpbmRvdzphLHE9cC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGZ1bmN0aW9uKCl7dmFyIGE9RGF0ZS5ub3coKSxiLGQ7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBiPURhdGUubm93KCksZD1NYXRoLm1heCgwLGMtKGItYSkpLGE9YitkLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlKGIrZCl9LGQpfX0oKSxyPXAuY2FuY2VsQW5pbWF0aW9uRnJhbWV8fGNsZWFyVGltZW91dCxzPWZ1bmN0aW9uKCl7fSx0PXMsdT1zLHY9cyx3PXMseDthLk1haW5Mb29wPXtnZXRTaW11bGF0aW9uVGltZXN0ZXA6ZnVuY3Rpb24oKXtyZXR1cm4gY30sc2V0U2ltdWxhdGlvblRpbWVzdGVwOmZ1bmN0aW9uKGEpe3JldHVybiBjPWEsdGhpc30sZ2V0RlBTOmZ1bmN0aW9uKCl7cmV0dXJuIGZ9LGdldE1heEFsbG93ZWRGUFM6ZnVuY3Rpb24oKXtyZXR1cm4gMWUzL2x9LHNldE1heEFsbG93ZWRGUFM6ZnVuY3Rpb24oYSl7cmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIGEmJihhPTEvMCksMD09PWE/dGhpcy5zdG9wKCk6bD0xZTMvYSx0aGlzfSxyZXNldEZyYW1lRGVsdGE6ZnVuY3Rpb24oKXt2YXIgYT1kO3JldHVybiBkPTAsYX0sc2V0QmVnaW46ZnVuY3Rpb24oYSl7cmV0dXJuIHQ9YXx8dCx0aGlzfSxzZXRVcGRhdGU6ZnVuY3Rpb24oYSl7cmV0dXJuIHU9YXx8dSx0aGlzfSxzZXREcmF3OmZ1bmN0aW9uKGEpe3JldHVybiB2PWF8fHYsdGhpc30sc2V0RW5kOmZ1bmN0aW9uKGEpe3JldHVybiB3PWF8fHcsdGhpc30sc3RhcnQ6ZnVuY3Rpb24oKXtyZXR1cm4gbnx8KG49ITAseD1xKGZ1bmN0aW9uKGEpe3YoMSksbT0hMCxlPWEsaT1hLGo9MCx4PXEoYil9KSksdGhpc30sc3RvcDpmdW5jdGlvbigpe3JldHVybiBtPSExLG49ITEscih4KSx0aGlzfSxpc1J1bm5pbmc6ZnVuY3Rpb24oKXtyZXR1cm4gbX19LFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoYS5NYWluTG9vcCk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbnVsbCE9PW1vZHVsZSYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZS5leHBvcnRzJiYobW9kdWxlLmV4cG9ydHM9YS5NYWluTG9vcCl9KHRoaXMpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFpbmxvb3AubWluLmpzLm1hcCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvb3JkaW5hdGVFcnJvciBleHRlbmRzIEVycm9ye1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2Upe1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ0ludENvb3JkaW5hdGVFcnJvcic7XG4gICAgfVxufSIsImltcG9ydCBJbnRDb29yZGluYXRlRXJyb3IgZnJvbSAnLi9lcnJvcnMvSW50Q29vcmRpbmF0ZUVycm9yLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50Q29vcmRpbmF0ZSB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgbnVsbFBvc2l0aW9uID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKE51bWJlci5pc0ludGVnZXIoeCkgJiYgTnVtYmVyLmlzSW50ZWdlcih5KSB8fCBudWxsUG9zaXRpb24gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy54ID0gTnVtYmVyKHgpO1xuICAgICAgICAgICAgdGhpcy55ID0gTnVtYmVyKHkpO1xuICAgICAgICAgICAgdGhpcy5udWxsUG9zaXRpb24gPSBudWxsUG9zaXRpb247XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBJbnRDb29yZGluYXRlRXJyb3IoJ0Nvb3JkaW5hdGVzIGhhdmUgdG8gYmUgaW50ZWdlciB2YWx1ZXMhJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgY29vcmRpbmF0ZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgICAgICB5OiB0aGlzLnlcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLyd1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgSW50Q29vcmRpbmF0ZSBmcm9tICcuL2ludENvb3JkaW5hdGUuanMnO1xuXG4vKipcbiAqIE9zenTDoWx5IGEgY2FudmFzIGVsZW0gQVBJLWrDoW5hayBhYnN6dHJhaMOhbMOhc8OhcmEuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhc1dyYXBwZXIge1xuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQsIGNhbnZhc0RPTUVsZW1lbnQpIHtcbiAgICAgICAgaWYoY2FudmFzRE9NRWxlbWVudCA9PSB1bmRlZmluZWQgfHwgdHlwZW9mIGNhbnZhc0RPTUVsZW1lbnQuZ2V0Q29udGV4dCAhPSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGdldCByZW5kZXIgY29udGV4dCBvZiB3cmFwcGVkIGVsZW1lbnQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5fY2FudmFzID0gY2FudmFzRE9NRWxlbWVudDtcblxuICAgICAgICB0aGlzLl9jYW52YXMud2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgICB0aGlzLl9jYW52YXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5fY3R4ID0gdGhpcy5fY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMuX3NjZW5lID0gW107XG5cbiAgICAgICAgdGhpcy5jcmVhdGVSZWN0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhd1JlY3QuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW5kZXJTY2VuZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFTDqWdsYWxhcCByZXByZXplbnTDoWNpw7MgbMOpdHJlaG96w6FzYS5cbiAgICAgKiBAcGFyYW0geyp9IHBvc1ggXG4gICAgICogQHBhcmFtIHsqfSBwb3NZIFxuICAgICAqIEBwYXJhbSB7Kn0gd2lkdGggXG4gICAgICogQHBhcmFtIHsqfSBoZWlnaHQgXG4gICAgICogQHBhcmFtIHsqfSBjb2xvciBcbiAgICAgKi9cbiAgICBjcmVhdGVSZWN0KHBvc1ggPSAwLCBwb3NZID0gMCwgd2lkdGggPSAxMCwgaGVpZ2h0ID0gMTAsIGNvbG9yID0gJ2JsYWNrJywgemluZGV4ID0gMCkge1xuICAgICAgICBjb25zdCByZWN0ID0ge1xuICAgICAgICAgICAgdHlwZTogJ3JlY3QnLFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgICAgIHg6IHBvc1gsXG4gICAgICAgICAgICAgICAgeTogcG9zWVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgemluZGV4XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3NjZW5lLnB1c2gocmVjdCk7XG4gICAgICAgIHJldHVybiByZWN0O1xuICAgIH1cblxuICAgIGNyZWF0ZUNpcmNsZShwb3NYID0gMCwgcG9zWSA9IDAsIHJhZGl1cyA9IDUsIGNvbG9yID0gJ2JsYWNrJywgemluZGV4ID0gMCkge1xuICAgICAgICBjb25zdCBjaXJjbGUgPSB7XG4gICAgICAgICAgICB0eXBlOiAnY2lyY2xlJyxcbiAgICAgICAgICAgIHJhZGl1cyxcbiAgICAgICAgICAgIHN0YXJ0QW5nbGU6IDAsXG4gICAgICAgICAgICBlbmRBbmdsZTogMiAqIE1hdGguUEksXG4gICAgICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgICAgIHg6IHBvc1gsXG4gICAgICAgICAgICAgICAgeTogcG9zWVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgemluZGV4XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3NjZW5lLnB1c2goY2lyY2xlKTtcbiAgICAgICAgcmV0dXJuIGNpcmNsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUw6lnbGFsYXAga2lyYWp6b2zDoXNhXG4gICAgICogQHBhcmFtIHsqdMOpZ2xhbGFwIHJlcHJlemVudMOhY2nDs30gcmVjdCBcbiAgICAgKi9cbiAgICBkcmF3UmVjdChyZWN0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVjdCA9PT0gJ29iamVjdCcgJiYgcmVjdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHJlY3QudHlwZSA9PSAncmVjdCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdHguZmlsbFN0eWxlID0gcmVjdC5jb2xvcjtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdHguZmlsbFJlY3QocmVjdC5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLnksIHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZHJhd0NpcmNsZShjaXJjbGUpIHtcblxuICAgICAgICBpZiAodHlwZW9mIGNpcmNsZSA9PT0gJ29iamVjdCcgJiYgY2lyY2xlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoY2lyY2xlLnR5cGUgPT09ICdjaXJjbGUnKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9jdHguZmlsbFN0eWxlID0gY2lyY2xlLmNvbG9yO1xuICAgICAgICAgICAgICAgIHRoaXMuX2N0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdHguYXJjKGNpcmNsZS5wb3NpdGlvbi54LCBjaXJjbGUucG9zaXRpb24ueSwgY2lyY2xlLnJhZGl1cywgY2lyY2xlLnN0YXJ0QW5nbGUsIGNpcmNsZS5lbmRBbmdsZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2N0eC5maWxsKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN6w61udMOpciBraXJhanpvbMOhc2FcbiAgICAgKi9cbiAgICByZW5kZXJTY2VuZSgpIHtcblxuICAgICAgICB0aGlzLl9jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgbGV0IHpCdWZmZXJlZFNjZW5lID0gdGhpcy5zb3J0U2NlbmVCeVpJbmRleCh0aGlzLl9zY2VuZSk7XG4gICAgICAgIGZvciAobGV0IG9iamVjdCBvZiB6QnVmZmVyZWRTY2VuZSkge1xuICAgICAgICAgICAgc3dpdGNoIChvYmplY3QudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3JlY3QnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdSZWN0KG9iamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NpcmNsZSc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd0NpcmNsZShvYmplY3QpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyU2NlbmUoKSB7XG4gICAgICAgIHRoaXMuX3NjZW5lID0gW107XG4gICAgfVxuXG4gICAgc29ydFNjZW5lQnlaSW5kZXgoc2NlbmUpIHtcbiAgICAgICAgbGV0IHpCdWZmZXJlZFNjZW5lID0gc2NlbmUuc29ydCgoejEsIHoyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gejEgPiB6MlxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHpCdWZmZXJlZFNjZW5lO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRpdHl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgaWYgKG5ldy50YXJnZXQgPT09IEVudGl0eSl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBYnN0cmFjdCBjbGFzcy4gQ2Fubm90IGJlIGluc3RhbnRpYXRlZCFcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLnVwZGF0ZSA9PT0gdm9pZCAwIHx8IHR5cGVvZiB0aGlzLnVwZGF0ZSAhPT0gJ2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBYnN0cmFjdCBtZXRob2QgJ3VwZGF0ZScgbXVzdCBiZSBvdmVycmlkZW4hXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5yZXNldCA9PT0gdm9pZCAwIHx8IHR5cGVvZiB0aGlzLnJlc2V0ICE9PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0IG1ldGhvZCAncmVzZXQnIG11c3QgYmUgb3ZlcnJpZGVuIVwiKTtcbiAgICAgICAgfVxuICAgIH1cbn07IiwiLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUNsZWFyO1xuIiwiLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXE7XG4iLCJ2YXIgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzb2NJbmRleE9mO1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICAtLXRoaXMuc2l6ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlRGVsZXRlO1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUdldDtcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlSGFzO1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgICsrdGhpcy5zaXplO1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlU2V0O1xuIiwidmFyIGxpc3RDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlQ2xlYXInKSxcbiAgICBsaXN0Q2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVEZWxldGUnKSxcbiAgICBsaXN0Q2FjaGVHZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVHZXQnKSxcbiAgICBsaXN0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVIYXMnKSxcbiAgICBsaXN0Q2FjaGVTZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RDYWNoZTtcbiIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBTdGFja1xuICovXG5mdW5jdGlvbiBzdGFja0NsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0NsZWFyO1xuIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIHJlc3VsdCA9IGRhdGFbJ2RlbGV0ZSddKGtleSk7XG5cbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrRGVsZXRlO1xuIiwiLyoqXG4gKiBHZXRzIHRoZSBzdGFjayB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tHZXQoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrR2V0O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0hhcztcbiIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcbiIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheXMgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWcodmFsdWUpO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZyB8fCB0YWcgPT0gYXN5bmNUYWcgfHwgdGFnID09IHByb3h5VGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb3JlSnNEYXRhO1xuIiwidmFyIGNvcmVKc0RhdGEgPSByZXF1aXJlKCcuL19jb3JlSnNEYXRhJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXNrZWQ7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Tb3VyY2U7XG4iLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTWFza2VkID0gcmVxdWlyZSgnLi9faXNNYXNrZWQnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gaXNGdW5jdGlvbih2YWx1ZSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmF0aXZlO1xuIiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VmFsdWU7XG4iLCJ2YXIgYmFzZUlzTmF0aXZlID0gcmVxdWlyZSgnLi9fYmFzZUlzTmF0aXZlJyksXG4gICAgZ2V0VmFsdWUgPSByZXF1aXJlKCcuL19nZXRWYWx1ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlQ3JlYXRlO1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoQ2xlYXI7XG4iLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hEZWxldGU7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoR2V0O1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IChkYXRhW2tleV0gIT09IHVuZGVmaW5lZCkgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEhhcztcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICB0aGlzLnNpemUgKz0gdGhpcy5oYXMoa2V5KSA/IDAgOiAxO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaFNldDtcbiIsInZhciBoYXNoQ2xlYXIgPSByZXF1aXJlKCcuL19oYXNoQ2xlYXInKSxcbiAgICBoYXNoRGVsZXRlID0gcmVxdWlyZSgnLi9faGFzaERlbGV0ZScpLFxuICAgIGhhc2hHZXQgPSByZXF1aXJlKCcuL19oYXNoR2V0JyksXG4gICAgaGFzaEhhcyA9IHJlcXVpcmUoJy4vX2hhc2hIYXMnKSxcbiAgICBoYXNoU2V0ID0gcmVxdWlyZSgnLi9faGFzaFNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoO1xuIiwidmFyIEhhc2ggPSByZXF1aXJlKCcuL19IYXNoJyksXG4gICAgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuc2l6ZSA9IDA7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUNsZWFyO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5YWJsZTtcbiIsInZhciBpc0tleWFibGUgPSByZXF1aXJlKCcuL19pc0tleWFibGUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hcERhdGE7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVEZWxldGU7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlR2V0O1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVIYXM7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLFxuICAgICAgc2l6ZSA9IGRhdGEuc2l6ZTtcblxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplICs9IGRhdGEuc2l6ZSA9PSBzaXplID8gMCA6IDE7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlU2V0O1xuIiwidmFyIG1hcENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19tYXBDYWNoZUNsZWFyJyksXG4gICAgbWFwQ2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19tYXBDYWNoZURlbGV0ZScpLFxuICAgIG1hcENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVHZXQnKSxcbiAgICBtYXBDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX21hcENhY2hlSGFzJyksXG4gICAgbWFwQ2FjaGVTZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXBDYWNoZTtcbiIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKlxuICogU2V0cyB0aGUgc3RhY2sgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgc3RhY2sgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoZGF0YSBpbnN0YW5jZW9mIExpc3RDYWNoZSkge1xuICAgIHZhciBwYWlycyA9IGRhdGEuX19kYXRhX187XG4gICAgaWYgKCFNYXAgfHwgKHBhaXJzLmxlbmd0aCA8IExBUkdFX0FSUkFZX1NJWkUgLSAxKSkge1xuICAgICAgcGFpcnMucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgdGhpcy5zaXplID0gKytkYXRhLnNpemU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGUocGFpcnMpO1xuICB9XG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrU2V0O1xuIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIHN0YWNrQ2xlYXIgPSByZXF1aXJlKCcuL19zdGFja0NsZWFyJyksXG4gICAgc3RhY2tEZWxldGUgPSByZXF1aXJlKCcuL19zdGFja0RlbGV0ZScpLFxuICAgIHN0YWNrR2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tHZXQnKSxcbiAgICBzdGFja0hhcyA9IHJlcXVpcmUoJy4vX3N0YWNrSGFzJyksXG4gICAgc3RhY2tTZXQgPSByZXF1aXJlKCcuL19zdGFja1NldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGUoZW50cmllcyk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFN0YWNrYC5cblN0YWNrLnByb3RvdHlwZS5jbGVhciA9IHN0YWNrQ2xlYXI7XG5TdGFjay5wcm90b3R5cGVbJ2RlbGV0ZSddID0gc3RhY2tEZWxldGU7XG5TdGFjay5wcm90b3R5cGUuZ2V0ID0gc3RhY2tHZXQ7XG5TdGFjay5wcm90b3R5cGUuaGFzID0gc3RhY2tIYXM7XG5TdGFjay5wcm90b3R5cGUuc2V0ID0gc3RhY2tTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhY2s7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5mb3JFYWNoYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlFYWNoKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSA9PT0gZmFsc2UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlFYWNoO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgdmFyIGZ1bmMgPSBnZXROYXRpdmUoT2JqZWN0LCAnZGVmaW5lUHJvcGVydHknKTtcbiAgICBmdW5jKHt9LCAnJywge30pO1xuICAgIHJldHVybiBmdW5jO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVQcm9wZXJ0eTtcbiIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2RlZmluZVByb3BlcnR5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGFzc2lnblZhbHVlYCBhbmQgYGFzc2lnbk1lcmdlVmFsdWVgIHdpdGhvdXRcbiAqIHZhbHVlIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgPT0gJ19fcHJvdG9fXycgJiYgZGVmaW5lUHJvcGVydHkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShvYmplY3QsIGtleSwge1xuICAgICAgJ2NvbmZpZ3VyYWJsZSc6IHRydWUsXG4gICAgICAnZW51bWVyYWJsZSc6IHRydWUsXG4gICAgICAndmFsdWUnOiB2YWx1ZSxcbiAgICAgICd3cml0YWJsZSc6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUFzc2lnblZhbHVlO1xuIiwidmFyIGJhc2VBc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ25WYWx1ZScpLFxuICAgIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEFzc2lnbnMgYHZhbHVlYCB0byBga2V5YCBvZiBgb2JqZWN0YCBpZiB0aGUgZXhpc3RpbmcgdmFsdWUgaXMgbm90IGVxdWl2YWxlbnRcbiAqIHVzaW5nIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBmb3IgZXF1YWxpdHkgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldO1xuICBpZiAoIShoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBlcShvYmpWYWx1ZSwgdmFsdWUpKSB8fFxuICAgICAgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkpIHtcbiAgICBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc2lnblZhbHVlO1xuIiwidmFyIGFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYXNzaWduVmFsdWUnKSxcbiAgICBiYXNlQXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19iYXNlQXNzaWduVmFsdWUnKTtcblxuLyoqXG4gKiBDb3BpZXMgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IGlkZW50aWZpZXJzIHRvIGNvcHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb3BpZWQgdmFsdWVzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weU9iamVjdChzb3VyY2UsIHByb3BzLCBvYmplY3QsIGN1c3RvbWl6ZXIpIHtcbiAgdmFyIGlzTmV3ID0gIW9iamVjdDtcbiAgb2JqZWN0IHx8IChvYmplY3QgPSB7fSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuXG4gICAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgICAgPyBjdXN0b21pemVyKG9iamVjdFtrZXldLCBzb3VyY2Vba2V5XSwga2V5LCBvYmplY3QsIHNvdXJjZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG5ld1ZhbHVlID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIGlmIChpc05ldykge1xuICAgICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weU9iamVjdDtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRpbWVzO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNBcmd1bWVudHM7XG4iLCJ2YXIgYmFzZUlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9fYmFzZUlzQXJndW1lbnRzJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcmd1bWVudHM7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJGYWxzZTtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpLFxuICAgIHN0dWJGYWxzZSA9IHJlcXVpcmUoJy4vc3R1YkZhbHNlJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0J1ZmZlcjtcbiIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgfHwgcmVJc1VpbnQudGVzdCh2YWx1ZSkpICYmXG4gICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSW5kZXg7XG4iLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1R5cGVkQXJyYXlgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJlxuICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnKHZhbHVlKV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzVHlwZWRBcnJheTtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5hcnk7XG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vZGVVdGlsO1xuIiwidmFyIGJhc2VJc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL19iYXNlSXNUeXBlZEFycmF5JyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc1R5cGVkQXJyYXk7XG4iLCJ2YXIgYmFzZVRpbWVzID0gcmVxdWlyZSgnLi9fYmFzZVRpbWVzJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpLFxuICAgICAgaXNBcmcgPSAhaXNBcnIgJiYgaXNBcmd1bWVudHModmFsdWUpLFxuICAgICAgaXNCdWZmID0gIWlzQXJyICYmICFpc0FyZyAmJiBpc0J1ZmZlcih2YWx1ZSksXG4gICAgICBpc1R5cGUgPSAhaXNBcnIgJiYgIWlzQXJnICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHZhbHVlKSxcbiAgICAgIHNraXBJbmRleGVzID0gaXNBcnIgfHwgaXNBcmcgfHwgaXNCdWZmIHx8IGlzVHlwZSxcbiAgICAgIHJlc3VsdCA9IHNraXBJbmRleGVzID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKSA6IFtdLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChcbiAgICAgICAgICAgLy8gU2FmYXJpIDkgaGFzIGVudW1lcmFibGUgYGFyZ3VtZW50cy5sZW5ndGhgIGluIHN0cmljdCBtb2RlLlxuICAgICAgICAgICBrZXkgPT0gJ2xlbmd0aCcgfHxcbiAgICAgICAgICAgLy8gTm9kZS5qcyAwLjEwIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIGJ1ZmZlcnMuXG4gICAgICAgICAgIChpc0J1ZmYgJiYgKGtleSA9PSAnb2Zmc2V0JyB8fCBrZXkgPT0gJ3BhcmVudCcpKSB8fFxuICAgICAgICAgICAvLyBQaGFudG9tSlMgMiBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiB0eXBlZCBhcnJheXMuXG4gICAgICAgICAgIChpc1R5cGUgJiYgKGtleSA9PSAnYnVmZmVyJyB8fCBrZXkgPT0gJ2J5dGVMZW5ndGgnIHx8IGtleSA9PSAnYnl0ZU9mZnNldCcpKSB8fFxuICAgICAgICAgICAvLyBTa2lwIGluZGV4IHByb3BlcnRpZXMuXG4gICAgICAgICAgIGlzSW5kZXgoa2V5LCBsZW5ndGgpXG4gICAgICAgICkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TGlrZUtleXM7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQcm90b3R5cGU7XG4iLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyQXJnO1xuIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzO1xuIiwidmFyIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5cycpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXM7XG4iLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZTtcbiIsInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUtleXMnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5cztcbiIsInZhciBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5hc3NpZ25gIHdpdGhvdXQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgc291cmNlc1xuICogb3IgYGN1c3RvbWl6ZXJgIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ24ob2JqZWN0LCBzb3VyY2UpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiBjb3B5T2JqZWN0KHNvdXJjZSwga2V5cyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VBc3NpZ247XG4iLCIvKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZVxuICogW2BPYmplY3Qua2V5c2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZXhjZXB0IHRoYXQgaXQgaW5jbHVkZXMgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydGllcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gbmF0aXZlS2V5c0luKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGlmIChvYmplY3QgIT0gbnVsbCkge1xuICAgIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzSW47XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpLFxuICAgIG5hdGl2ZUtleXNJbiA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXNJbicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNJbmAgd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5c0luKG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5c0luKG9iamVjdCk7XG4gIH1cbiAgdmFyIGlzUHJvdG8gPSBpc1Byb3RvdHlwZShvYmplY3QpLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmICghKGtleSA9PSAnY29uc3RydWN0b3InICYmIChpc1Byb3RvIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzSW47XG4iLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5c0luID0gcmVxdWlyZSgnLi9fYmFzZUtleXNJbicpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzSW4obmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYicsICdjJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqL1xuZnVuY3Rpb24ga2V5c0luKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0LCB0cnVlKSA6IGJhc2VLZXlzSW4ob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzSW47XG4iLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuL2tleXNJbicpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmFzc2lnbkluYCB3aXRob3V0IHN1cHBvcnQgZm9yIG11bHRpcGxlIHNvdXJjZXNcbiAqIG9yIGBjdXN0b21pemVyYCBmdW5jdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduSW4ob2JqZWN0LCBzb3VyY2UpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiBjb3B5T2JqZWN0KHNvdXJjZSwga2V5c0luKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUFzc2lnbkluO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIGFsbG9jVW5zYWZlID0gQnVmZmVyID8gQnVmZmVyLmFsbG9jVW5zYWZlIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiAgYGJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUJ1ZmZlcihidWZmZXIsIGlzRGVlcCkge1xuICBpZiAoaXNEZWVwKSB7XG4gICAgcmV0dXJuIGJ1ZmZlci5zbGljZSgpO1xuICB9XG4gIHZhciBsZW5ndGggPSBidWZmZXIubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gYWxsb2NVbnNhZmUgPyBhbGxvY1Vuc2FmZShsZW5ndGgpIDogbmV3IGJ1ZmZlci5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIGJ1ZmZlci5jb3B5KHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVCdWZmZXI7XG4iLCIvKipcbiAqIENvcGllcyB0aGUgdmFsdWVzIG9mIGBzb3VyY2VgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHNvdXJjZSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheT1bXV0gVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIHRvLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlBcnJheShzb3VyY2UsIGFycmF5KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gc291cmNlLmxlbmd0aDtcblxuICBhcnJheSB8fCAoYXJyYXkgPSBBcnJheShsZW5ndGgpKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtpbmRleF0gPSBzb3VyY2VbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5QXJyYXk7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5maWx0ZXJgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmaWx0ZXJlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlGaWx0ZXIoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzSW5kZXggPSAwLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmVzdWx0W3Jlc0luZGV4KytdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlGaWx0ZXI7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBuZXcgZW1wdHkgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBlbXB0eSBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGFycmF5cyA9IF8udGltZXMoMiwgXy5zdHViQXJyYXkpO1xuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5cyk7XG4gKiAvLyA9PiBbW10sIFtdXVxuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5c1swXSA9PT0gYXJyYXlzWzFdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIHN0dWJBcnJheSgpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJBcnJheTtcbiIsInZhciBhcnJheUZpbHRlciA9IHJlcXVpcmUoJy4vX2FycmF5RmlsdGVyJyksXG4gICAgc3R1YkFycmF5ID0gcmVxdWlyZSgnLi9zdHViQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHMgPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHJldHVybiBhcnJheUZpbHRlcihuYXRpdmVHZXRTeW1ib2xzKG9iamVjdCksIGZ1bmN0aW9uKHN5bWJvbCkge1xuICAgIHJldHVybiBwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iamVjdCwgc3ltYm9sKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFN5bWJvbHM7XG4iLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpO1xuXG4vKipcbiAqIENvcGllcyBvd24gc3ltYm9scyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyBmcm9tLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIHRvLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weVN5bWJvbHMoc291cmNlLCBvYmplY3QpIHtcbiAgcmV0dXJuIGNvcHlPYmplY3Qoc291cmNlLCBnZXRTeW1ib2xzKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weVN5bWJvbHM7XG4iLCIvKipcbiAqIEFwcGVuZHMgdGhlIGVsZW1lbnRzIG9mIGB2YWx1ZXNgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhcHBlbmQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlQdXNoKGFycmF5LCB2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgb2Zmc2V0ID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbb2Zmc2V0ICsgaW5kZXhdID0gdmFsdWVzW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlQdXNoO1xuIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIGdldFByb3RvdHlwZSA9IG92ZXJBcmcoT2JqZWN0LmdldFByb3RvdHlwZU9mLCBPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFByb3RvdHlwZTtcbiIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBnZXRQcm90b3R5cGUgPSByZXF1aXJlKCcuL19nZXRQcm90b3R5cGUnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpLFxuICAgIHN0dWJBcnJheSA9IHJlcXVpcmUoJy4vc3R1YkFycmF5Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHNJbiA9ICFuYXRpdmVHZXRTeW1ib2xzID8gc3R1YkFycmF5IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgd2hpbGUgKG9iamVjdCkge1xuICAgIGFycmF5UHVzaChyZXN1bHQsIGdldFN5bWJvbHMob2JqZWN0KSk7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlKG9iamVjdCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0U3ltYm9sc0luO1xuIiwidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAgZ2V0U3ltYm9sc0luID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9sc0luJyk7XG5cbi8qKlxuICogQ29waWVzIG93biBhbmQgaW5oZXJpdGVkIHN5bWJvbHMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgZnJvbS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyB0by5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlTeW1ib2xzSW4oc291cmNlLCBvYmplY3QpIHtcbiAgcmV0dXJuIGNvcHlPYmplY3Qoc291cmNlLCBnZXRTeW1ib2xzSW4oc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5U3ltYm9sc0luO1xuIiwidmFyIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0QWxsS2V5c2AgYW5kIGBnZXRBbGxLZXlzSW5gIHdoaWNoIHVzZXNcbiAqIGBrZXlzRnVuY2AgYW5kIGBzeW1ib2xzRnVuY2AgdG8gZ2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN5bWJvbHNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNGdW5jLCBzeW1ib2xzRnVuYykge1xuICB2YXIgcmVzdWx0ID0ga2V5c0Z1bmMob2JqZWN0KTtcbiAgcmV0dXJuIGlzQXJyYXkob2JqZWN0KSA/IHJlc3VsdCA6IGFycmF5UHVzaChyZXN1bHQsIHN5bWJvbHNGdW5jKG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRBbGxLZXlzO1xuIiwidmFyIGJhc2VHZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUdldEFsbEtleXMnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBnZXRBbGxLZXlzKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzLCBnZXRTeW1ib2xzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRBbGxLZXlzO1xuIiwidmFyIGJhc2VHZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUdldEFsbEtleXMnKSxcbiAgICBnZXRTeW1ib2xzSW4gPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzSW4nKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuL2tleXNJbicpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXNJbihvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0luLCBnZXRTeW1ib2xzSW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEFsbEtleXNJbjtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgRGF0YVZpZXcgPSBnZXROYXRpdmUocm9vdCwgJ0RhdGFWaWV3Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0YVZpZXc7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFByb21pc2UgPSBnZXROYXRpdmUocm9vdCwgJ1Byb21pc2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBTZXQgPSBnZXROYXRpdmUocm9vdCwgJ1NldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldDtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYWtNYXA7XG4iLCJ2YXIgRGF0YVZpZXcgPSByZXF1aXJlKCcuL19EYXRhVmlldycpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIFByb21pc2UgPSByZXF1aXJlKCcuL19Qcm9taXNlJyksXG4gICAgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgV2Vha01hcCA9IHJlcXVpcmUoJy4vX1dlYWtNYXAnKSxcbiAgICBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEgYW5kIHByb21pc2VzIGluIE5vZGUuanMgPCA2LlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUdldFRhZyh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiAnJztcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYWc7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIGFycmF5IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVBcnJheShhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gYXJyYXkuY29uc3RydWN0b3IobGVuZ3RoKTtcblxuICAvLyBBZGQgcHJvcGVydGllcyBhc3NpZ25lZCBieSBgUmVnRXhwI2V4ZWNgLlxuICBpZiAobGVuZ3RoICYmIHR5cGVvZiBhcnJheVswXSA9PSAnc3RyaW5nJyAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGFycmF5LCAnaW5kZXgnKSkge1xuICAgIHJlc3VsdC5pbmRleCA9IGFycmF5LmluZGV4O1xuICAgIHJlc3VsdC5pbnB1dCA9IGFycmF5LmlucHV0O1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdENsb25lQXJyYXk7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBVaW50OEFycmF5O1xuIiwidmFyIFVpbnQ4QXJyYXkgPSByZXF1aXJlKCcuL19VaW50OEFycmF5Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBhcnJheUJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIFRoZSBhcnJheSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBhcnJheSBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQXJyYXlCdWZmZXIoYXJyYXlCdWZmZXIpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBhcnJheUJ1ZmZlci5jb25zdHJ1Y3RvcihhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgbmV3IFVpbnQ4QXJyYXkocmVzdWx0KS5zZXQobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZUFycmF5QnVmZmVyO1xuIiwidmFyIGNsb25lQXJyYXlCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUFycmF5QnVmZmVyJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBkYXRhVmlld2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhVmlldyBUaGUgZGF0YSB2aWV3IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBkYXRhIHZpZXcuXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGF0YVZpZXcoZGF0YVZpZXcsIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcihkYXRhVmlldy5idWZmZXIpIDogZGF0YVZpZXcuYnVmZmVyO1xuICByZXR1cm4gbmV3IGRhdGFWaWV3LmNvbnN0cnVjdG9yKGJ1ZmZlciwgZGF0YVZpZXcuYnl0ZU9mZnNldCwgZGF0YVZpZXcuYnl0ZUxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVEYXRhVmlldztcbiIsIi8qKlxuICogQWRkcyB0aGUga2V5LXZhbHVlIGBwYWlyYCB0byBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHBhaXIgVGhlIGtleS12YWx1ZSBwYWlyIHRvIGFkZC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG1hcGAuXG4gKi9cbmZ1bmN0aW9uIGFkZE1hcEVudHJ5KG1hcCwgcGFpcikge1xuICAvLyBEb24ndCByZXR1cm4gYG1hcC5zZXRgIGJlY2F1c2UgaXQncyBub3QgY2hhaW5hYmxlIGluIElFIDExLlxuICBtYXAuc2V0KHBhaXJbMF0sIHBhaXJbMV0pO1xuICByZXR1cm4gbWFwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFkZE1hcEVudHJ5O1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ucmVkdWNlYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFthY2N1bXVsYXRvcl0gVGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpbml0QWNjdW1dIFNwZWNpZnkgdXNpbmcgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYGFycmF5YCBhc1xuICogIHRoZSBpbml0aWFsIHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBhcnJheVJlZHVjZShhcnJheSwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yLCBpbml0QWNjdW0pIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICBpZiAoaW5pdEFjY3VtICYmIGxlbmd0aCkge1xuICAgIGFjY3VtdWxhdG9yID0gYXJyYXlbKytpbmRleF07XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGl0ZXJhdGVlKGFjY3VtdWxhdG9yLCBhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIGFjY3VtdWxhdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UmVkdWNlO1xuIiwiLyoqXG4gKiBDb252ZXJ0cyBgbWFwYCB0byBpdHMga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUga2V5LXZhbHVlIHBhaXJzLlxuICovXG5mdW5jdGlvbiBtYXBUb0FycmF5KG1hcCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG1hcC5zaXplKTtcblxuICBtYXAuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gW2tleSwgdmFsdWVdO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBUb0FycmF5O1xuIiwidmFyIGFkZE1hcEVudHJ5ID0gcmVxdWlyZSgnLi9fYWRkTWFwRW50cnknKSxcbiAgICBhcnJheVJlZHVjZSA9IHJlcXVpcmUoJy4vX2FycmF5UmVkdWNlJyksXG4gICAgbWFwVG9BcnJheSA9IHJlcXVpcmUoJy4vX21hcFRvQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgY2xvbmluZy4gKi9cbnZhciBDTE9ORV9ERUVQX0ZMQUcgPSAxO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNsb25lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2xvbmVGdW5jIFRoZSBmdW5jdGlvbiB0byBjbG9uZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIG1hcC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVNYXAobWFwLCBpc0RlZXAsIGNsb25lRnVuYykge1xuICB2YXIgYXJyYXkgPSBpc0RlZXAgPyBjbG9uZUZ1bmMobWFwVG9BcnJheShtYXApLCBDTE9ORV9ERUVQX0ZMQUcpIDogbWFwVG9BcnJheShtYXApO1xuICByZXR1cm4gYXJyYXlSZWR1Y2UoYXJyYXksIGFkZE1hcEVudHJ5LCBuZXcgbWFwLmNvbnN0cnVjdG9yKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZU1hcDtcbiIsIi8qKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgIGZsYWdzIGZyb20gdGhlaXIgY29lcmNlZCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlRmxhZ3MgPSAvXFx3KiQvO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgcmVnZXhwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHJlZ2V4cCBUaGUgcmVnZXhwIHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVSZWdFeHAocmVnZXhwKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgcmVnZXhwLmNvbnN0cnVjdG9yKHJlZ2V4cC5zb3VyY2UsIHJlRmxhZ3MuZXhlYyhyZWdleHApKTtcbiAgcmVzdWx0Lmxhc3RJbmRleCA9IHJlZ2V4cC5sYXN0SW5kZXg7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVSZWdFeHA7XG4iLCIvKipcbiAqIEFkZHMgYHZhbHVlYCB0byBgc2V0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFkZC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYHNldGAuXG4gKi9cbmZ1bmN0aW9uIGFkZFNldEVudHJ5KHNldCwgdmFsdWUpIHtcbiAgLy8gRG9uJ3QgcmV0dXJuIGBzZXQuYWRkYCBiZWNhdXNlIGl0J3Mgbm90IGNoYWluYWJsZSBpbiBJRSAxMS5cbiAgc2V0LmFkZCh2YWx1ZSk7XG4gIHJldHVybiBzZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYWRkU2V0RW50cnk7XG4iLCIvKipcbiAqIENvbnZlcnRzIGBzZXRgIHRvIGFuIGFycmF5IG9mIGl0cyB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkoc2V0LnNpemUpO1xuXG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldFRvQXJyYXk7XG4iLCJ2YXIgYWRkU2V0RW50cnkgPSByZXF1aXJlKCcuL19hZGRTZXRFbnRyeScpLFxuICAgIGFycmF5UmVkdWNlID0gcmVxdWlyZSgnLi9fYXJyYXlSZWR1Y2UnKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBjbG9uaW5nLiAqL1xudmFyIENMT05FX0RFRVBfRkxBRyA9IDE7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBzZXRgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjbG9uZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNsb25lIHZhbHVlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgc2V0LlxuICovXG5mdW5jdGlvbiBjbG9uZVNldChzZXQsIGlzRGVlcCwgY2xvbmVGdW5jKSB7XG4gIHZhciBhcnJheSA9IGlzRGVlcCA/IGNsb25lRnVuYyhzZXRUb0FycmF5KHNldCksIENMT05FX0RFRVBfRkxBRykgOiBzZXRUb0FycmF5KHNldCk7XG4gIHJldHVybiBhcnJheVJlZHVjZShhcnJheSwgYWRkU2V0RW50cnksIG5ldyBzZXQuY29uc3RydWN0b3IpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lU2V0O1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVmFsdWVPZiA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udmFsdWVPZiA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgdGhlIGBzeW1ib2xgIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHN5bWJvbCBUaGUgc3ltYm9sIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBzeW1ib2wgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBjbG9uZVN5bWJvbChzeW1ib2wpIHtcbiAgcmV0dXJuIHN5bWJvbFZhbHVlT2YgPyBPYmplY3Qoc3ltYm9sVmFsdWVPZi5jYWxsKHN5bWJvbCkpIDoge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVTeW1ib2w7XG4iLCJ2YXIgY2xvbmVBcnJheUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQXJyYXlCdWZmZXInKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHR5cGVkQXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gdHlwZWRBcnJheSBUaGUgdHlwZWQgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHR5cGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBjbG9uZVR5cGVkQXJyYXkodHlwZWRBcnJheSwgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKHR5cGVkQXJyYXkuYnVmZmVyKSA6IHR5cGVkQXJyYXkuYnVmZmVyO1xuICByZXR1cm4gbmV3IHR5cGVkQXJyYXkuY29uc3RydWN0b3IoYnVmZmVyLCB0eXBlZEFycmF5LmJ5dGVPZmZzZXQsIHR5cGVkQXJyYXkubGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVR5cGVkQXJyYXk7XG4iLCJ2YXIgY2xvbmVBcnJheUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQXJyYXlCdWZmZXInKSxcbiAgICBjbG9uZURhdGFWaWV3ID0gcmVxdWlyZSgnLi9fY2xvbmVEYXRhVmlldycpLFxuICAgIGNsb25lTWFwID0gcmVxdWlyZSgnLi9fY2xvbmVNYXAnKSxcbiAgICBjbG9uZVJlZ0V4cCA9IHJlcXVpcmUoJy4vX2Nsb25lUmVnRXhwJyksXG4gICAgY2xvbmVTZXQgPSByZXF1aXJlKCcuL19jbG9uZVNldCcpLFxuICAgIGNsb25lU3ltYm9sID0gcmVxdWlyZSgnLi9fY2xvbmVTeW1ib2wnKSxcbiAgICBjbG9uZVR5cGVkQXJyYXkgPSByZXF1aXJlKCcuL19jbG9uZVR5cGVkQXJyYXknKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gb2JqZWN0IGNsb25lIGJhc2VkIG9uIGl0cyBgdG9TdHJpbmdUYWdgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIG9ubHkgc3VwcG9ydHMgY2xvbmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2xvbmVGdW5jIFRoZSBmdW5jdGlvbiB0byBjbG9uZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZUJ5VGFnKG9iamVjdCwgdGFnLCBjbG9uZUZ1bmMsIGlzRGVlcCkge1xuICB2YXIgQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIGFycmF5QnVmZmVyVGFnOlxuICAgICAgcmV0dXJuIGNsb25lQXJyYXlCdWZmZXIob2JqZWN0KTtcblxuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3IoK29iamVjdCk7XG5cbiAgICBjYXNlIGRhdGFWaWV3VGFnOlxuICAgICAgcmV0dXJuIGNsb25lRGF0YVZpZXcob2JqZWN0LCBpc0RlZXApO1xuXG4gICAgY2FzZSBmbG9hdDMyVGFnOiBjYXNlIGZsb2F0NjRUYWc6XG4gICAgY2FzZSBpbnQ4VGFnOiBjYXNlIGludDE2VGFnOiBjYXNlIGludDMyVGFnOlxuICAgIGNhc2UgdWludDhUYWc6IGNhc2UgdWludDhDbGFtcGVkVGFnOiBjYXNlIHVpbnQxNlRhZzogY2FzZSB1aW50MzJUYWc6XG4gICAgICByZXR1cm4gY2xvbmVUeXBlZEFycmF5KG9iamVjdCwgaXNEZWVwKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgcmV0dXJuIGNsb25lTWFwKG9iamVjdCwgaXNEZWVwLCBjbG9uZUZ1bmMpO1xuXG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3Iob2JqZWN0KTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgICAgcmV0dXJuIGNsb25lUmVnRXhwKG9iamVjdCk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVNldChvYmplY3QsIGlzRGVlcCwgY2xvbmVGdW5jKTtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgcmV0dXJuIGNsb25lU3ltYm9sKG9iamVjdCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0Q2xvbmVCeVRhZztcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jcmVhdGVgIHdpdGhvdXQgc3VwcG9ydCBmb3IgYXNzaWduaW5nXG4gKiBwcm9wZXJ0aWVzIHRvIHRoZSBjcmVhdGVkIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvIFRoZSBvYmplY3QgdG8gaW5oZXJpdCBmcm9tLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqL1xudmFyIGJhc2VDcmVhdGUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIG9iamVjdCgpIHt9XG4gIHJldHVybiBmdW5jdGlvbihwcm90bykge1xuICAgIGlmICghaXNPYmplY3QocHJvdG8pKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGlmIChvYmplY3RDcmVhdGUpIHtcbiAgICAgIHJldHVybiBvYmplY3RDcmVhdGUocHJvdG8pO1xuICAgIH1cbiAgICBvYmplY3QucHJvdG90eXBlID0gcHJvdG87XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBvYmplY3Q7XG4gICAgb2JqZWN0LnByb3RvdHlwZSA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQ3JlYXRlO1xuIiwidmFyIGJhc2VDcmVhdGUgPSByZXF1aXJlKCcuL19iYXNlQ3JlYXRlJyksXG4gICAgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpO1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZU9iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuICh0eXBlb2Ygb2JqZWN0LmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgIWlzUHJvdG90eXBlKG9iamVjdCkpXG4gICAgPyBiYXNlQ3JlYXRlKGdldFByb3RvdHlwZShvYmplY3QpKVxuICAgIDoge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdENsb25lT2JqZWN0O1xuIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBhcnJheUVhY2ggPSByZXF1aXJlKCcuL19hcnJheUVhY2gnKSxcbiAgICBhc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnblZhbHVlJyksXG4gICAgYmFzZUFzc2lnbiA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ24nKSxcbiAgICBiYXNlQXNzaWduSW4gPSByZXF1aXJlKCcuL19iYXNlQXNzaWduSW4nKSxcbiAgICBjbG9uZUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQnVmZmVyJyksXG4gICAgY29weUFycmF5ID0gcmVxdWlyZSgnLi9fY29weUFycmF5JyksXG4gICAgY29weVN5bWJvbHMgPSByZXF1aXJlKCcuL19jb3B5U3ltYm9scycpLFxuICAgIGNvcHlTeW1ib2xzSW4gPSByZXF1aXJlKCcuL19jb3B5U3ltYm9sc0luJyksXG4gICAgZ2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2dldEFsbEtleXMnKSxcbiAgICBnZXRBbGxLZXlzSW4gPSByZXF1aXJlKCcuL19nZXRBbGxLZXlzSW4nKSxcbiAgICBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpbml0Q2xvbmVBcnJheSA9IHJlcXVpcmUoJy4vX2luaXRDbG9uZUFycmF5JyksXG4gICAgaW5pdENsb25lQnlUYWcgPSByZXF1aXJlKCcuL19pbml0Q2xvbmVCeVRhZycpLFxuICAgIGluaXRDbG9uZU9iamVjdCA9IHJlcXVpcmUoJy4vX2luaXRDbG9uZU9iamVjdCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIGNsb25pbmcuICovXG52YXIgQ0xPTkVfREVFUF9GTEFHID0gMSxcbiAgICBDTE9ORV9GTEFUX0ZMQUcgPSAyLFxuICAgIENMT05FX1NZTUJPTFNfRkxBRyA9IDQ7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgc3VwcG9ydGVkIGJ5IGBfLmNsb25lYC4gKi9cbnZhciBjbG9uZWFibGVUYWdzID0ge307XG5jbG9uZWFibGVUYWdzW2FyZ3NUYWddID0gY2xvbmVhYmxlVGFnc1thcnJheVRhZ10gPVxuY2xvbmVhYmxlVGFnc1thcnJheUJ1ZmZlclRhZ10gPSBjbG9uZWFibGVUYWdzW2RhdGFWaWV3VGFnXSA9XG5jbG9uZWFibGVUYWdzW2Jvb2xUYWddID0gY2xvbmVhYmxlVGFnc1tkYXRlVGFnXSA9XG5jbG9uZWFibGVUYWdzW2Zsb2F0MzJUYWddID0gY2xvbmVhYmxlVGFnc1tmbG9hdDY0VGFnXSA9XG5jbG9uZWFibGVUYWdzW2ludDhUYWddID0gY2xvbmVhYmxlVGFnc1tpbnQxNlRhZ10gPVxuY2xvbmVhYmxlVGFnc1tpbnQzMlRhZ10gPSBjbG9uZWFibGVUYWdzW21hcFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tudW1iZXJUYWddID0gY2xvbmVhYmxlVGFnc1tvYmplY3RUYWddID1cbmNsb25lYWJsZVRhZ3NbcmVnZXhwVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc2V0VGFnXSA9XG5jbG9uZWFibGVUYWdzW3N0cmluZ1RhZ10gPSBjbG9uZWFibGVUYWdzW3N5bWJvbFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50MTZUYWddID0gY2xvbmVhYmxlVGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbmNsb25lYWJsZVRhZ3NbZXJyb3JUYWddID0gY2xvbmVhYmxlVGFnc1tmdW5jVGFnXSA9XG5jbG9uZWFibGVUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY2xvbmVgIGFuZCBgXy5jbG9uZURlZXBgIHdoaWNoIHRyYWNrc1xuICogdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLlxuICogIDEgLSBEZWVwIGNsb25lXG4gKiAgMiAtIEZsYXR0ZW4gaW5oZXJpdGVkIHByb3BlcnRpZXNcbiAqICA0IC0gQ2xvbmUgc3ltYm9sc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY2xvbmluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBba2V5XSBUaGUga2V5IG9mIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIHBhcmVudCBvYmplY3Qgb2YgYHZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBhbmQgdGhlaXIgY2xvbmUgY291bnRlcnBhcnRzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGNsb25lZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUNsb25lKHZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBrZXksIG9iamVjdCwgc3RhY2spIHtcbiAgdmFyIHJlc3VsdCxcbiAgICAgIGlzRGVlcCA9IGJpdG1hc2sgJiBDTE9ORV9ERUVQX0ZMQUcsXG4gICAgICBpc0ZsYXQgPSBiaXRtYXNrICYgQ0xPTkVfRkxBVF9GTEFHLFxuICAgICAgaXNGdWxsID0gYml0bWFzayAmIENMT05FX1NZTUJPTFNfRkxBRztcblxuICBpZiAoY3VzdG9taXplcikge1xuICAgIHJlc3VsdCA9IG9iamVjdCA/IGN1c3RvbWl6ZXIodmFsdWUsIGtleSwgb2JqZWN0LCBzdGFjaykgOiBjdXN0b21pemVyKHZhbHVlKTtcbiAgfVxuICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpO1xuICBpZiAoaXNBcnIpIHtcbiAgICByZXN1bHQgPSBpbml0Q2xvbmVBcnJheSh2YWx1ZSk7XG4gICAgaWYgKCFpc0RlZXApIHtcbiAgICAgIHJldHVybiBjb3B5QXJyYXkodmFsdWUsIHJlc3VsdCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciB0YWcgPSBnZXRUYWcodmFsdWUpLFxuICAgICAgICBpc0Z1bmMgPSB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xuXG4gICAgaWYgKGlzQnVmZmVyKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGNsb25lQnVmZmVyKHZhbHVlLCBpc0RlZXApO1xuICAgIH1cbiAgICBpZiAodGFnID09IG9iamVjdFRhZyB8fCB0YWcgPT0gYXJnc1RhZyB8fCAoaXNGdW5jICYmICFvYmplY3QpKSB7XG4gICAgICByZXN1bHQgPSAoaXNGbGF0IHx8IGlzRnVuYykgPyB7fSA6IGluaXRDbG9uZU9iamVjdCh2YWx1ZSk7XG4gICAgICBpZiAoIWlzRGVlcCkge1xuICAgICAgICByZXR1cm4gaXNGbGF0XG4gICAgICAgICAgPyBjb3B5U3ltYm9sc0luKHZhbHVlLCBiYXNlQXNzaWduSW4ocmVzdWx0LCB2YWx1ZSkpXG4gICAgICAgICAgOiBjb3B5U3ltYm9scyh2YWx1ZSwgYmFzZUFzc2lnbihyZXN1bHQsIHZhbHVlKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghY2xvbmVhYmxlVGFnc1t0YWddKSB7XG4gICAgICAgIHJldHVybiBvYmplY3QgPyB2YWx1ZSA6IHt9O1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gaW5pdENsb25lQnlUYWcodmFsdWUsIHRhZywgYmFzZUNsb25lLCBpc0RlZXApO1xuICAgIH1cbiAgfVxuICAvLyBDaGVjayBmb3IgY2lyY3VsYXIgcmVmZXJlbmNlcyBhbmQgcmV0dXJuIGl0cyBjb3JyZXNwb25kaW5nIGNsb25lLlxuICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldCh2YWx1ZSk7XG4gIGlmIChzdGFja2VkKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQ7XG4gIH1cbiAgc3RhY2suc2V0KHZhbHVlLCByZXN1bHQpO1xuXG4gIHZhciBrZXlzRnVuYyA9IGlzRnVsbFxuICAgID8gKGlzRmxhdCA/IGdldEFsbEtleXNJbiA6IGdldEFsbEtleXMpXG4gICAgOiAoaXNGbGF0ID8ga2V5c0luIDoga2V5cyk7XG5cbiAgdmFyIHByb3BzID0gaXNBcnIgPyB1bmRlZmluZWQgOiBrZXlzRnVuYyh2YWx1ZSk7XG4gIGFycmF5RWFjaChwcm9wcyB8fCB2YWx1ZSwgZnVuY3Rpb24oc3ViVmFsdWUsIGtleSkge1xuICAgIGlmIChwcm9wcykge1xuICAgICAga2V5ID0gc3ViVmFsdWU7XG4gICAgICBzdWJWYWx1ZSA9IHZhbHVlW2tleV07XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IHBvcHVsYXRlIGNsb25lIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgYXNzaWduVmFsdWUocmVzdWx0LCBrZXksIGJhc2VDbG9uZShzdWJWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwga2V5LCB2YWx1ZSwgc3RhY2spKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUNsb25lO1xuIiwidmFyIGJhc2VDbG9uZSA9IHJlcXVpcmUoJy4vX2Jhc2VDbG9uZScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBjbG9uaW5nLiAqL1xudmFyIENMT05FX0RFRVBfRkxBRyA9IDEsXG4gICAgQ0xPTkVfU1lNQk9MU19GTEFHID0gNDtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmNsb25lYCBleGNlcHQgdGhhdCBpdCByZWN1cnNpdmVseSBjbG9uZXMgYHZhbHVlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDEuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcmVjdXJzaXZlbHkgY2xvbmUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZGVlcCBjbG9uZWQgdmFsdWUuXG4gKiBAc2VlIF8uY2xvbmVcbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBbeyAnYSc6IDEgfSwgeyAnYic6IDIgfV07XG4gKlxuICogdmFyIGRlZXAgPSBfLmNsb25lRGVlcChvYmplY3RzKTtcbiAqIGNvbnNvbGUubG9nKGRlZXBbMF0gPT09IG9iamVjdHNbMF0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gY2xvbmVEZWVwKHZhbHVlKSB7XG4gIHJldHVybiBiYXNlQ2xvbmUodmFsdWUsIENMT05FX0RFRVBfRkxBRyB8IENMT05FX1NZTUJPTFNfRkxBRyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVEZWVwO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlnRXJyb3IgZXh0ZW5kcyBFcnJvcntcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnQ29uZmlnRXJyb3InO1xuICAgICAgfVxufSIsImxldCBjb3VudGVyID0gMDtcbmV4cG9ydCBmdW5jdGlvbiBpZEdlbmVyYXRvcigpe1xuICAgICAgICBsZXQgaWQgPSAnaWQtJyArIGNvdW50ZXIrKztcbiAgICAgICAgcmV0dXJuICBpZDtcbiAgICB9IiwiaW1wb3J0IEVudGl0eSBmcm9tICcuL0Fic3RyYWN0Q2xhc3Nlcy9FbnRpdHknO1xuaW1wb3J0IGNsb25lRGVlcCBmcm9tICdsb2Rhc2gvY2xvbmVEZWVwJztcbmltcG9ydCBDb25maWdFcnJvciBmcm9tICcuL2Vycm9ycy9Db25maWdFcnJvci5qcyc7XG5pbXBvcnQgSW50Q29vcmRpbmF0ZSBmcm9tICcuL2ludENvb3JkaW5hdGUuanMnO1xuaW1wb3J0IHtpZEdlbmVyYXRvcn0gZnJvbSAnLi9jdXN0b21VdGlscy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIGV4dGVuZHMgRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihjYWxsYmFja3MsIGNvbmZpZykge1xuICAgICAgICAvL2xvZy5pbmZvKCdJbml0aWFsaXppbmcgYm9hcmQuLi4nKTtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge307XG4gICAgICAgIHRoaXMuc3RhdGUuSUQgPSBpZEdlbmVyYXRvcigpO1xuICAgICAgICBsZXQgcGFyc2VkQ29uZmlnID0gdGhpcy5wYXJzZUNvbmZpZyhjb25maWcpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuc3RhdGUsIHBhcnNlZENvbmZpZyk7XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzID0gY2FsbGJhY2tzO1xuICAgICAgICB0aGlzLmluaXRpYWxUaWxlcyA9IGNsb25lRGVlcCh0aGlzLnN0YXRlLnRpbGVzKTtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgfVxuXG4gICAgcGFyc2VDb25maWcoY29uZmlnKSB7XG4gICAgICAgIGlmIChjb25maWcud2lkdGggPT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5oZWlnaHQgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQ29uZmlnRXJyb3IoJ01pc3NpbmcgZmllbGRzIGluIGNvbmZpZy4gRmllbGRzIG5lZWRlZDogd2lkdGg6aW50ZWdlciwgaGVpZ2h0OiBpbnRlZ2VyJyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhcnNlZENvbmZpZyA9IHt9O1xuICAgICAgICBwYXJzZWRDb25maWcuY29uZmlnID0gY29uZmlnO1xuICAgICAgICBwYXJzZWRDb25maWcud2lkdGggPSBOdW1iZXIoY29uZmlnLndpZHRoKTtcbiAgICAgICAgcGFyc2VkQ29uZmlnLmhlaWdodCA9IE51bWJlcihjb25maWcuaGVpZ2h0KTtcbiAgICAgICAgcGFyc2VkQ29uZmlnLnRpbGVzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyc2VkQ29uZmlnLndpZHRoOyArK2kpIHtcbiAgICAgICAgICAgIHBhcnNlZENvbmZpZy50aWxlcy5wdXNoKFtdKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGFyc2VkQ29uZmlnLmhlaWdodDsgKytqKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkQ29uZmlnLnRpbGVzW2ldLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBpZDogJycgKyBpICsgaixcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IG5ldyBJbnRDb29yZGluYXRlKGksIGopLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICdFTVBUWSdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlZENvbmZpZztcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7fVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGlsZXM6IHRoaXMuc3RhdGUuaW5pdGlhbFRpbGVzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldFN0YXRlKG9wdGlvbnMpIHtcbiAgICAgICAgbGV0IG5leHRTdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIE9iamVjdC5hc3NpZ24obmV4dFN0YXRlLCBvcHRpb25zKTtcblxuICAgICAgICAvL2xvZy5pbmZvKCdCT0FSRCcpO1xuICAgICAgICAvL2xvZy5pbmZvKCdwcmV2U3RhdGUnLCB0aGlzLnN0YXRlKTtcbiAgICAgICAgLy9sb2cuaW5mbygnbmV4dCBzdGF0ZScsIG5leHRTdGF0ZSk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICB9XG5cbiAgICBnZXRUaWxlQnlQb3NpdGlvbih4LCB5KSB7XG4gICAgICAgIGlmICh4ID49IDAgJiYgeCA8IHRoaXMuc3RhdGUud2lkdGggJiYgeSA+PSAwICYmIHkgPCB0aGlzLnN0YXRlLmhlaWdodCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudGlsZXNbeF1beV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH1cblxuICAgIGdldFRpbGVzQXNBcnJheSgpIHtcbiAgICAgICAgbGV0IHRpbGVzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS53aWR0aDsgKytpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuc3RhdGUuaGVpZ2h0OyArK2opIHtcbiAgICAgICAgICAgICAgICB0aWxlcy5wdXNoKHRoaXMudGlsZXNbaV1bal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aWxlcztcbiAgICB9XG5cbiAgICBnZXQgZGltZW5zaW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRpbVg6IHRoaXMuc3RhdGUud2lkdGgsXG4gICAgICAgICAgICBkaW1ZOiB0aGlzLnN0YXRlLmhlaWdodFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHRpbGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS50aWxlcztcbiAgICB9XG5cbiAgICBnZXQgSUQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuSUQ7XG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JzZXJ2ZXJFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAobmV3LnRhcmdldCA9PT0gT2JzZXJ2ZXJFbnRpdHkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0IGNsYXNzIGNhbm5vdCBiZSBpbnN0YW50aWF0ZWQhXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudXBkYXRlID09PSB2b2lkIDAgfHwgdHlwZW9mIHRoaXMudXBkYXRlICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0IG1ldGhvZCAndXBkYXRlJyBtdXN0IGJlIG92ZXJyaWRlbiFcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vbk5vdGlmeSA9PT0gdm9pZCAwIHx8IHR5cGVvZiB0aGlzLm9uTm90aWZ5ICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0IG1ldGhvZCAnb25Ob3RpZnknIG11c3QgYmUgb3ZlcnJpZGVuIVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMucmVzZXQgPT09IHZvaWQgMCB8fCB0eXBlb2YgdGhpcy5yZXNldCAhPT0gJ2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBYnN0cmFjdCBtZXRob2QgJ3Jlc2V0JyBtdXN0IGJlIG92ZXJyaWRlbiFcIik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbWFuZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmIChuZXcudGFyZ2V0ID09PSBDb21tYW5kKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBYnN0cmFjdCBjbGFzcy4gQ2Fubm90IGJlIGluc3RhbnRpYXRlZCFcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5leGVjdXRlID09PSB2b2lkIDAgfHwgdHlwZW9mIHRoaXMuZXhlY3V0ZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWJzdHJhY3QgbWV0aG9kICdleGVjdXRlJyBtdXN0IGJlIG92ZXJyaWRlbiFcIik7XG4gICAgICAgIH1cbiAgICB9XG59OyIsIi8vJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBDb21tYW5kIGZyb20gJy4uL0Fic3RyYWN0Q2xhc3Nlcy9Db21tYW5kJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWZ0VHVybkNvbW1hbmQgZXh0ZW5kcyBDb21tYW5ke1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgZXhlY3V0ZShzbmFrZSl7XG4gICAgICAgIHJldHVybiBzbmFrZS5oYW5kbGVJbnB1dCgnTEVGVCcpO1xuICAgIH1cbn0iLCIvLyd1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgQ29tbWFuZCBmcm9tICcuLi9BYnN0cmFjdENsYXNzZXMvQ29tbWFuZCc7XG5cbi8vaW1wb3J0IGxvZyBmcm9tICdsb2dsZXZlbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJpZ2h0VHVybkNvbW1hbmQgZXh0ZW5kcyBDb21tYW5ke1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgZXhlY3V0ZShzbmFrZSl7XG4gICAgICAgIHJldHVybiBzbmFrZS5oYW5kbGVJbnB1dCgnUklHSFQnKTtcbiAgICB9XG59IiwiLy8ndXNlIHN0cmljdCdcblxuaW1wb3J0IENvbW1hbmQgZnJvbSAnLi4vQWJzdHJhY3RDbGFzc2VzL0NvbW1hbmQnO1xuXG4vL2ltcG9ydCBsb2cgZnJvbSAnbG9nbGV2ZWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb3duVHVybkNvbW1hbmQgZXh0ZW5kcyBDb21tYW5ke1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgZXhlY3V0ZShzbmFrZSl7XG4gICAgICAgIHJldHVybiBzbmFrZS5oYW5kbGVJbnB1dCgnRE9XTicpO1xuICAgIH1cbn0iLCIvLyd1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgQ29tbWFuZCBmcm9tICcuLi9BYnN0cmFjdENsYXNzZXMvQ29tbWFuZCc7XG5cbi8vaW1wb3J0IGxvZyBmcm9tICdsb2dsZXZlbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVwVHVybkNvbW1hbmQgZXh0ZW5kcyBDb21tYW5ke1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgZXhlY3V0ZShzbmFrZSl7XG4gICAgICAgIHJldHVybiBzbmFrZS5oYW5kbGVJbnB1dCgnVVAnKTtcbiAgICB9XG59IiwiLy8ndXNlIHN0cmljdCdcblxuaW1wb3J0IE9ic2VydmVyRW50aXR5IGZyb20gJy4vQWJzdHJhY3RDbGFzc2VzL09ic2VydmVyRW50aXR5JztcbmltcG9ydCBDb25maWdFcnJvciBmcm9tICcuL2Vycm9ycy9Db25maWdFcnJvci5qcyc7XG5pbXBvcnQgTGVmdFR1cm5Db21tYW5kIGZyb20gJy4vQ29tbWFuZHMvTGVmdFR1cm5Db21tYW5kJztcbmltcG9ydCBSaWdodFR1cm5Db21tYW5kIGZyb20gJy4vQ29tbWFuZHMvUmlnaHRUdXJuQ29tbWFuZCc7XG5pbXBvcnQgRG93blR1cm5Db21tYW5kIGZyb20gJy4vQ29tbWFuZHMvRG93blR1cm5Db21tYW5kJztcbmltcG9ydCBVcFR1cm5Db21tYW5kIGZyb20gJy4vQ29tbWFuZHMvVXBUdXJuQ29tbWFuZCc7XG5pbXBvcnQgSW50Q29vcmRpbmF0ZSBmcm9tICcuL2ludENvb3JkaW5hdGUnO1xuXG5pbXBvcnQge1xuICAgIGlkR2VuZXJhdG9yXG59IGZyb20gJy4vY3VzdG9tVXRpbHMuanMnO1xuaW1wb3J0IGNsb25lRGVlcCBmcm9tICdsb2Rhc2gvY2xvbmVEZWVwJztcbmltcG9ydCB7IHN0YXJ0IH0gZnJvbSAncmVwbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNuYWtlIGV4dGVuZHMgT2JzZXJ2ZXJFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKGNhbGxiYWNrcywgY29uZmlnLCBzdHJhdGVneSwgbm90aWZpZXIpIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge31cbiAgICAgICAgdGhpcy5zdGF0ZS5JRCA9IGlkR2VuZXJhdG9yKCk7XG4gICAgICAgIGxldCBwYXJzZWRDb25maWcgPSB0aGlzLnBhcnNlQ29uZmlnKGNvbmZpZylcbiAgICAgICAgdGhpcy5zdGF0ZS5jb21tYW5kID0gdm9pZCAwO1xuICAgICAgICB0aGlzLnN0YXRlLnZlbG9jaXR5ID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXRlLm5vdGlmaWNhdGlvbkJ1ZmZlciA9IFtdO1xuICAgICAgICB0aGlzLnN0YXRlLnN0YXR1cyA9IFwiQUxJVkVcIjtcbiAgICAgICAgdGhpcy5zdGF0ZS5zdHJhdGVneSA9IHN0cmF0ZWd5O1xuICAgICAgICB0aGlzLnN0YXRlLnBhdGggPSBbXTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnN0YXRlLCBwYXJzZWRDb25maWcpO1xuXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLnRpbWVyID0gbmV3IERhdGUoKTtcbiAgICAgICAgdGhpcy5jYWxsYmFja3MgPSBjYWxsYmFja3M7XG4gICAgICAgIGlmIChub3RpZmllcikge1xuICAgICAgICAgICAgdGhpcy5ub3RpZmllciA9IG5vdGlmaWVyO1xuICAgICAgICAgICAgbm90aWZpZXIuc3Vic2NyaWJlKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGFyc2VDb25maWcoY29uZmlnKSB7XG4gICAgICAgIGlmIChjb25maWcuc3RhcnREaXJlY3Rpb24gPT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydFZlbG9jaXR5ID09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRYID09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRZID09IHVuZGVmaW5lZCB8fCBjb25maWcuYmFzZUxlbmd0aCA9PSB1bmRlZmluZWQgfHwgY29uZmlnLmxpbWl0WCA9PSB1bmRlZmluZWQgfHwgY29uZmlnLmxpbWl0WSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBDb25maWdFcnJvcignTWlzc2luZyBjb25maWd1cmF0aW9uIG9yIG1pc3NpbmcgZmllbGRzIGluIGNvbmZpZ3VyYXRpb24uIE5lZWRlZCBmaWVsZHM6IHN0YXJ0ZGlyZWN0aW9uOiAoTEVGVCB8IFJJR0hUIHwgVVAgfCBET1dOKSwgc3RhcnRWZWxvY2l0eTogaW50ZWdlciwgc3RhcnRYOiBpbnRlZ2VyLCBzdGFydFk6aW50ZWdlciwgYmFzZUxlbmd0aDogaW50ZWdlciwgbGltaXRYOiBpbnRlZ2VyLCBsaW1pdFk6IGludGVnZXInKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGFyc2VkQ29uZmlnID0ge31cbiAgICAgICAgcGFyc2VkQ29uZmlnLmJvZHkgPSBbXTtcbiAgICAgICAgcGFyc2VkQ29uZmlnLmRpcmVjdGlvbiA9IGNvbmZpZy5zdGFydERpcmVjdGlvbjtcbiAgICAgICAgcGFyc2VkQ29uZmlnLmJhc2VWZWxvY2l0eSA9IE51bWJlcihjb25maWcuc3RhcnRWZWxvY2l0eSk7XG4gICAgICAgIHBhcnNlZENvbmZpZy5saW1pdHMgPSB7XG4gICAgICAgICAgICB4OiBOdW1iZXIoY29uZmlnLmxpbWl0WCksXG4gICAgICAgICAgICB5OiBOdW1iZXIoY29uZmlnLmxpbWl0WSlcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbmZpZy5iYXNlTGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHBhcnNlZENvbmZpZy5ib2R5W2ldID0gbmV3IEludENvb3JkaW5hdGUoTnVtYmVyKGNvbmZpZy5zdGFydFgpLCBOdW1iZXIoY29uZmlnLnN0YXJ0WSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJzZWRDb25maWc7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBsZXQgbmV4dFN0YXRlID0ge307XG4gICAgICAgIGxldCBuZXh0RGlyZWN0aW9uO1xuICAgICAgICBsZXQgbmV4dFZlbG9jaXR5O1xuICAgICAgICBsZXQgbmV4dEJvZHk7XG4gICAgICAgIGxldCBjb21tYW5kUmVzdWx0O1xuICAgICAgICBsZXQgbmV4dFN0ZXA7XG4gICAgICAgIGxldCBwYXRoO1xuICAgICAgICBsZXQgY29tbWFuZDtcbiAgICAgICAgbGV0IG5vdGlmaWVyID0gdGhpcy5ub3RpZmllcjtcblxuICAgICAgICBpZiAodGhpcy5pc0FsaXZlKCkpIHtcbiAgICAgICAgICAgIHBhdGggPSB0aGlzLmNhbGN1bGF0ZVBhdGgoKTtcbiAgICAgICAgICAgIGlmIChwYXRoICYmIHBhdGgubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbW1hbmQgPSB0aGlzLmNhbGN1bGF0ZUNvbW1hbmQodGhpcy5oZWFkLCBwYXRoWzBdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29tbWFuZCA9IGNvbW1hbmQgfHwgdGhpcy5zdGF0ZS5jb21tYW5kO1xuICAgICAgICAgICAgaWYgKGNvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICBjb21tYW5kUmVzdWx0ID0gY29tbWFuZC5leGVjdXRlKHRoaXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXh0RGlyZWN0aW9uID0gY29tbWFuZFJlc3VsdCB8fCB0aGlzLmRpcmVjdGlvbjtcbiAgICAgICAgICAgIG5leHRWZWxvY2l0eSA9IHRoaXMuY2FsY3VsYXRlVmVsb2NpdHkobmV4dERpcmVjdGlvbik7XG4gICAgICAgICAgICBuZXh0Qm9keSA9IHRoaXMubW92ZShuZXh0VmVsb2NpdHkueCwgbmV4dFZlbG9jaXR5LnkpO1xuICAgICAgICAgICAgbmV4dFN0ZXAgPSBuZXh0Qm9keVswXTtcbiAgICAgICAgICAgIGlmIChub3RpZmllcikge1xuICAgICAgICAgICAgICAgIG5vdGlmaWVyLmNhbGN1bGF0ZVN0ZXBDb2xsaXNpb25UeXBlKG5leHRTdGVwLCB0aGlzLklEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24obmV4dFN0YXRlLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBuZXh0RGlyZWN0aW9uLFxuICAgICAgICAgICAgICAgIGJvZHk6IG5leHRCb2R5LFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5OiBuZXh0VmVsb2NpdHksXG4gICAgICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsZXQgbm90aWZpY2F0aW9uQnVmZmVyID0gdGhpcy5zdGF0ZS5ub3RpZmljYXRpb25CdWZmZXI7XG4gICAgICAgICAgICBsZXQgbm90aWZpY2F0aW9uID0gbm90aWZpY2F0aW9uQnVmZmVyLnBvcCgpO1xuICAgICAgICAgICAgd2hpbGUgKG5vdGlmaWNhdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc05vdGlmaWNhdGlvbihub3RpZmljYXRpb24sIG5leHRTdGF0ZSk7XG4gICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uID0gbm90aWZpY2F0aW9uQnVmZmVyLnBvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNBbGl2ZSgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgbGV0IHBhcnNlZENvbmZpZyA9IHRoaXMucGFyc2VDb25maWcodGhpcy5jb25maWcpO1xuICAgICAgICBsZXQgbmV4dFN0YXRlID0ge1xuICAgICAgICAgICAgdmVsb2NpdHk6IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGF0dXM6IFwiQUxJVkVcIlxuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5hc3NpZ24obmV4dFN0YXRlLCBwYXJzZWRDb25maWcpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSk7XG4gICAgfVxuXG4gICAgc2V0VGFyZ2V0KHRhcmdldE9iamVjdCkge1xuICAgICAgICBpZiAodGFyZ2V0T2JqZWN0ID09IHVuZGVmaW5lZCB8fCB0YXJnZXRPYmplY3QucG9zaXRpb24gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgcG9zaXRpb24gPSB0YXJnZXRPYmplY3QucG9zaXRpb247XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHBvc2l0aW9uXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzdGF0dXM6ICdERUFEJ1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIG9uTm90aWZ5KGVudGl0eSwgZXZlbnQpIHtcbiAgICAgICAgbGV0IGV2ZW50VHlwZSA9IGV2ZW50LnR5cGVcbiAgICAgICAgc3dpdGNoIChldmVudFR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgKCdQSUxMX0NPTExJU0lPTicpOiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudGl0eS5JRCA9PSB0aGlzLklEKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzdG9yZWROb3RpZmljYXRpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBldmVudFR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBlbnRpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGlsbDogZXZlbnQucGlsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlTm90aWZpY2F0aW9uKHN0b3JlZE5vdGlmaWNhdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAoJ1dBTExfQ09MTElTSU9OJyk6IHtcbiAgICAgICAgICAgICAgICBpZiAoZW50aXR5LklEID09IHRoaXMuSUQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0b3JlZE5vdGlmaWNhdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGV2ZW50VHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IGVudGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVOb3RpZmljYXRpb24oc3RvcmVkTm90aWZpY2F0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICgnQk9EWV9DT0xMSVNJT04nKToge1xuICAgICAgICAgICAgICAgIGlmIChlbnRpdHkuSUQgPT0gdGhpcy5JRCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3RvcmVkTm90aWZpY2F0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogZXZlbnRUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eTogZW50aXR5XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZU5vdGlmaWNhdGlvbihzdG9yZWROb3RpZmljYXRpb24pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAoJ1RBUkdFVF9SRUFDSEVEJyk6IHtcbiAgICAgICAgICAgICAgICBpZiAoZW50aXR5LklEID09IHRoaXMuSUQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0b3JlZE5vdGlmaWNhdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGV2ZW50VHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IGVudGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVOb3RpZmljYXRpb24oc3RvcmVkTm90aWZpY2F0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9jZXNzTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbiwgbmV4dFN0YXRlKSB7XG4gICAgICAgIGxldCBub3RpZmljYXRpb25SZXN1bHQgPSB7fTtcbiAgICAgICAgbGV0IHBheWxvYWQgPSBub3RpZmljYXRpb24ucGF5bG9hZFxuICAgICAgICBzd2l0Y2ggKG5vdGlmaWNhdGlvbi50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICgnUElMTF9DT0xMSVNJT04nKTpcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5lYXQocGF5bG9hZC5waWxsLnBpbGxWYWx1ZSk7XG4gICAgICAgICAgICAgICAgbmV4dFN0YXRlLmJvZHkucHVzaCguLi5yZXN1bHQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAoJ1dBTExfQ09MTElTSU9OJyk6XG4gICAgICAgICAgICAgICAgdGhpcy5kaWUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgKCdCT0RZX0NPTExJU0lPTicpOlxuICAgICAgICAgICAgICAgIHRoaXMuZGllKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICgnVEFSR0VUX1JFQUNIRUQnKTpcbiAgICAgICAgICAgICAgICBsZXQgc3RyYXRlZ3kgPSB0aGlzLnN0YXRlLnN0cmF0ZWd5O1xuICAgICAgICAgICAgICAgIGlmIChzdHJhdGVneSAmJiBzdHJhdGVneS5jYWxjdWxhdGVUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1RhcmdldCA9IHN0cmF0ZWd5LmNhbGN1bGF0ZVRhcmdldCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dFN0YXRlLnRhcmdldCA9IG5ld1RhcmdldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vdGlmaWNhdGlvblJlc3VsdDtcbiAgICB9XG5cbiAgICBzZXRTdGF0ZShvcHRpb25zKSB7XG4gICAgICAgIGxldCBuZXh0U3RhdGUgPSBjbG9uZURlZXAodGhpcy5zdGF0ZSk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24obmV4dFN0YXRlLCBvcHRpb25zKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gbmV4dFN0YXRlO1xuICAgIH1cblxuICAgIGhhbmRsZUlucHV0KGRpcmVjdGlvbikge1xuICAgICAgICBpZiAoIXRoaXMuaXNPcHBvc2l0ZURpcmVjdGlvbihkaXJlY3Rpb24pKSB7XG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgbW92ZSh2ZWxvY2l0eVgsIHZlbG9jaXR5WSkge1xuICAgICAgICBsZXQgbmV4dEJvZHkgPSBjbG9uZURlZXAodGhpcy5ib2R5KTtcblxuICAgICAgICBuZXh0Qm9keS5wb3AoKTtcbiAgICAgICAgbGV0IG5leHRIZWFkID0gdGhpcy5jYWxjdWxhdGVOZXh0SGVhZCh2ZWxvY2l0eVgsIHZlbG9jaXR5WSlcbiAgICAgICAgbmV4dEJvZHkudW5zaGlmdChuZXh0SGVhZCk7XG5cbiAgICAgICAgcmV0dXJuIG5leHRCb2R5O1xuICAgIH1cblxuICAgIHN0b3JlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbikge1xuICAgICAgICBpZiAobm90aWZpY2F0aW9uLnR5cGUgPT0gdW5kZWZpbmVkIHx8IG5vdGlmaWNhdGlvbi5wYXlsb2FkID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5ub3RpZmljYXRpb25CdWZmZXIudW5zaGlmdChub3RpZmljYXRpb24pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjYWxjdWxhdGVWZWxvY2l0eShkaXJlY3Rpb24pIHtcbiAgICAgICAgbGV0IG5leHRWZWxvY2l0eSA9IHt9O1xuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSAnUklHSFQnOlxuICAgICAgICAgICAgICAgIG5leHRWZWxvY2l0eS54ID0gdGhpcy5zdGF0ZS5iYXNlVmVsb2NpdHk7XG4gICAgICAgICAgICAgICAgbmV4dFZlbG9jaXR5LnkgPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnTEVGVCc6XG4gICAgICAgICAgICAgICAgbmV4dFZlbG9jaXR5LnggPSAtdGhpcy5zdGF0ZS5iYXNlVmVsb2NpdHk7XG4gICAgICAgICAgICAgICAgbmV4dFZlbG9jaXR5LnkgPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnRE9XTic6XG4gICAgICAgICAgICAgICAgbmV4dFZlbG9jaXR5LnggPSAwO1xuICAgICAgICAgICAgICAgIG5leHRWZWxvY2l0eS55ID0gdGhpcy5zdGF0ZS5iYXNlVmVsb2NpdHk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdVUCc6XG4gICAgICAgICAgICAgICAgbmV4dFZlbG9jaXR5LnggPSAwO1xuICAgICAgICAgICAgICAgIG5leHRWZWxvY2l0eS55ID0gLXRoaXMuc3RhdGUuYmFzZVZlbG9jaXR5O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV4dFZlbG9jaXR5O1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZU5leHRIZWFkKHZlbG9jaXR5WCwgdmVsb2NpdHlZKSB7XG4gICAgICAgIGxldCBoZWFkID0gdGhpcy5oZWFkO1xuICAgICAgICBsZXQgbmV4dFBvc1ggPSBoZWFkLmNvb3JkaW5hdGVzLnggKyB2ZWxvY2l0eVg7XG4gICAgICAgIGxldCBuZXh0UG9zWSA9IGhlYWQuY29vcmRpbmF0ZXMueSArIHZlbG9jaXR5WTtcbiAgICAgICAgbGV0IGxpbWl0cyA9IHRoaXMuc3RhdGUubGltaXRzO1xuXG5cbiAgICAgICAgaWYobmV4dFBvc1ggPCAwIHx8IG5leHRQb3NYID49IGxpbWl0cy54IHx8IG5leHRQb3NZIDwgMCB8fCBuZXh0UG9zWSA+PSBsaW1pdHMueSl7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEludENvb3JkaW5hdGUobmV4dFBvc1gsIG5leHRQb3NZLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEludENvb3JkaW5hdGUobmV4dFBvc1gsIG5leHRQb3NZKTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVDb21tYW5kKGZyb20sIHRvKSB7XG4gICAgICAgIGxldCBmcm9tWCA9IGZyb20uY29vcmRpbmF0ZXMueDtcbiAgICAgICAgbGV0IGZyb21ZID0gZnJvbS5jb29yZGluYXRlcy55O1xuICAgICAgICBsZXQgdG9YID0gdG8uY29vcmRpbmF0ZXMueDtcbiAgICAgICAgbGV0IHRvWSA9IHRvLmNvb3JkaW5hdGVzLnk7XG4gICAgICAgIGxldCBjdXJyRGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb247XG5cbiAgICAgICAgaWYgKGZyb21YIC0gdG9YID4gMCAmJiAhKGN1cnJEaXJlY3Rpb24gPT0gJ1JJR0hUJykpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGVmdFR1cm5Db21tYW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZyb21YIC0gdG9YIDwgMCAmJiAhKGN1cnJEaXJlY3Rpb24gPT0gJ0xFRlQnKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSaWdodFR1cm5Db21tYW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZyb21ZIC0gdG9ZID4gMCAmJiAhKGN1cnJEaXJlY3Rpb24gPT0gJ0RPV04nKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBVcFR1cm5Db21tYW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZyb21ZIC0gdG9ZIDwgMCAmJiAhKGN1cnJEaXJlY3Rpb24gPT0gJ1VQJykpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRG93blR1cm5Db21tYW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH1cblxuICAgIGVhdChnYWluKSB7XG4gICAgICAgIGxldCBhZGRpdGlvbmFsTm9kZXMgPSBbXTtcbiAgICAgICAgbGV0IHRhaWxOb2RlID0gdGhpcy5ib2R5W3RoaXMuYm9keUxlbmd0aCAtIDFdO1xuICAgICAgICBsZXQgdGFpbE5vZGVDb29yZGluYXRlcyA9IHRhaWxOb2RlLmNvb3JkaW5hdGVzO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhaW47IGkrKykge1xuICAgICAgICAgICAgYWRkaXRpb25hbE5vZGVzLnB1c2gobmV3IEludENvb3JkaW5hdGUodGFpbE5vZGVDb29yZGluYXRlcy54LCB0YWlsTm9kZUNvb3JkaW5hdGVzLnkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhZGRpdGlvbmFsTm9kZXM7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlUGF0aCgpIHtcbiAgICAgICAgbGV0IHN0cmF0ZWd5ID0gdGhpcy5zdGF0ZS5zdHJhdGVneTtcbiAgICAgICAgbGV0IHBhdGg7XG4gICAgICAgIGlmIChzdHJhdGVneSAmJiBzdHJhdGVneS5wYXRoZmluZGVyKSB7XG4gICAgICAgICAgICBsZXQgc3RhcnRUaW1lID0gdGhpcy50aW1lci5nZXRUaW1lKCk7XG4gICAgICAgICAgICBwYXRoID0gc3RyYXRlZ3kucGF0aGZpbmRlcih0aGlzKTtcbiAgICAgICAgICAgIGxldCBlbmRUaW1lID0gdGhpcy50aW1lci5nZXRUaW1lKCk7XG4gICAgICAgICAgICB0aGlzLnRpbWVyLmdldFxuICAgICAgICAgICAgbGV0IHJ1bnRpbWUgPSBlbmRUaW1lIC0gc3RhcnRUaW1lO1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFja3MucHJvcGFnYXRlUnVudGltZSh0aGlzLklELCBydW50aW1lKTsgXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfVxuXG4gICAgaXNPcHBvc2l0ZURpcmVjdGlvbihkaXJlY3Rpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGlyZWN0aW9uID09PSAnUklHSFQnICYmIGRpcmVjdGlvbiA9PT0gJ0xFRlQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmRpcmVjdGlvbiA9PT0gJ0xFRlQnICYmIGRpcmVjdGlvbiA9PT0gJ1JJR0hUJykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5kaXJlY3Rpb24gPT09ICdVUCcgJiYgZGlyZWN0aW9uID09PSAnRE9XTicpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuZGlyZWN0aW9uID09PSAnRE9XTicgJiYgZGlyZWN0aW9uID09PSAnVVAnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaXNBbGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuc3RhdHVzID09PSAnQUxJVkUnO1xuICAgIH1cblxuICAgIGdldCBib2R5TGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5ib2R5Lmxlbmd0aDtcbiAgICB9XG5cbiAgICBnZXQgZW5kT2ZCb2R5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2R5W3RoaXMuYm9keUxlbmd0aCAtIDFdO1xuICAgIH1cblxuICAgIGdldCBib2R5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5ib2R5O1xuICAgIH1cblxuICAgIGdldCBiYXNlVmVsb2NpdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmJhc2VWZWxvY2l0eTtcbiAgICB9XG5cbiAgICBnZXQgaGVhZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9keVswXTtcbiAgICB9XG5cbiAgICBnZXQgZGlyZWN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5kaXJlY3Rpb247XG4gICAgfVxuICAgIGdldCBzdGF0dXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnN0YXR1cztcbiAgICB9XG5cbiAgICBnZXQgdGFyZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS50YXJnZXQ7XG4gICAgfVxuXG4gICAgZ2V0IHRhaWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvZHkuc2xpY2UoMSk7XG4gICAgfVxuXG4gICAgZ2V0IElEKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5JRDtcbiAgICB9XG5cbiAgICBnZXQgcGF0aCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5wYXRoO1xuICAgIH1cbn0iLCJpbXBvcnQgT2JzZXJ2ZXJFbnRpdHkgZnJvbSAnLi9BYnN0cmFjdENsYXNzZXMvT2JzZXJ2ZXJFbnRpdHknO1xuaW1wb3J0IGNsb25lRGVlcCBmcm9tICdsb2Rhc2gvY2xvbmVEZWVwJztcbmltcG9ydCBDb25maWdFcnJvciBmcm9tICcuL2Vycm9ycy9Db25maWdFcnJvci5qcyc7XG5pbXBvcnQgSW50Q29vcmRpbmF0ZSBmcm9tICcuL2ludENvb3JkaW5hdGUuanMnO1xuXG5pbXBvcnQge2lkR2VuZXJhdG9yfSBmcm9tICcuL2N1c3RvbVV0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaWxsIGV4dGVuZHMgT2JzZXJ2ZXJFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKGNhbGxiYWNrcywgY29uZmlnLCBub3RpZmllcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBsZXQgcGFyc2VkQ29uZmlnID0gdGhpcy5wYXJzZUNvbmZpZyhjb25maWcpO1xuICAgICAgICB0aGlzLnN0YXRlID0gcGFyc2VkQ29uZmlnO1xuICAgICAgICB0aGlzLnN0YXRlLklEID0gaWRHZW5lcmF0b3IoKTtcblxuXG4gICAgICAgIHRoaXMuY2FsbGJhY2tzID0gY2FsbGJhY2tzO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcblxuICAgICAgICBpZiAobm90aWZpZXIpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZpZXIgPSBub3RpZmllcjtcbiAgICAgICAgICAgIG5vdGlmaWVyLnN1YnNjcmliZSh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhcnNlQ29uZmlnKGNvbmZpZykge1xuICAgICAgICBpZiAoY29uZmlnID09IHVuZGVmaW5lZCB8fCBjb25maWcucGlsbFZhbHVlID09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRQb3NYID09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRQb3NZID09IHVuZGVmaW5lZCB8fCBjb25maWcubGltaXRYID09IHVuZGVmaW5lZCB8fCBjb25maWcubGltaXRZID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IENvbmZpZ0Vycm9yKCdNaXNzaW5nIGNvbmZpZyBvciBtaXNzaW5nIGZpZWxkcyBpbiBjb25maWcuIEZpZWxkcyBuZWVkZWQ6IHBpbGxWYWx1ZTogaW50ZWdlciwgc3RhcnRQb3NYOiBJbnRlZ2VyLCBzdGFydFBvc1k6IEludGVnZXIuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcGFyc2VkQ29uZmlnID0ge307XG4gICAgICAgIHBhcnNlZENvbmZpZy5waWxsVmFsdWUgPSBOdW1iZXIoY29uZmlnLnBpbGxWYWx1ZSk7XG4gICAgICAgIHBhcnNlZENvbmZpZy5wb3NpdGlvbiA9IG5ldyBJbnRDb29yZGluYXRlKE51bWJlcihjb25maWcuc3RhcnRQb3NYKSwgTnVtYmVyKGNvbmZpZy5zdGFydFBvc1kpKTtcbiAgICAgICAgcGFyc2VkQ29uZmlnLmxpbWl0cyA9IHt9O1xuICAgICAgICBwYXJzZWRDb25maWcubGltaXRzLnggPSBOdW1iZXIoY29uZmlnLmxpbWl0WCk7XG4gICAgICAgIHBhcnNlZENvbmZpZy5saW1pdHMueSA9IE51bWJlcihjb25maWcubGltaXRZKTtcblxuICAgICAgICByZXR1cm4gcGFyc2VkQ29uZmlnO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcblxuICAgIH1cblxuICAgIHNldFN0YXRlKG9wdGlvbnMpIHtcbiAgICAgICAgbGV0IG5leHRTdGF0ZSA9IGNsb25lRGVlcCh0aGlzLnN0YXRlKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihuZXh0U3RhdGUsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIGxldCBwYXJzZWRDb25maWcgPSB0aGlzLnBhcnNlQ29uZmlnKHRoaXMuY29uZmlnKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBwYXJzZWRDb25maWcucG9zaXRpb24sXG4gICAgICAgICAgICBwaWxsVmFsdWU6IHBhcnNlZENvbmZpZy5waWxsVmFsdWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25Ob3RpZnkoZW50aXR5LCBldmVudCkge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgKCdQSUxMX0NPTExJU0lPTicpOlxuICAgICAgICAgICAgICAgIGxldCBuZXdQb3NpdGlvbiA9IHRoaXMuY2FsY3VsYXRlTmV3UmFuZG9tUG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IG5ld1Bvc2l0aW9uXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjYWxjdWxhdGVOZXdSYW5kb21Qb3NpdGlvbigpIHtcbiAgICAgICAgbGV0IGxpbWl0WCA9IHRoaXMuc3RhdGUubGltaXRzLng7XG4gICAgICAgIGxldCBsaW1pdFkgPSB0aGlzLnN0YXRlLmxpbWl0cy54O1xuICAgICAgICBsZXQgc25ha2VzID0gdGhpcy5jYWxsYmFja3MuZ2V0RW50aXR5TGlzdCgpLnNuYWtlcztcbiAgICAgICAgbGV0IGFwcGVuZGVkU25ha2VCb2RpZXMgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBzbmFrZSBvZiBzbmFrZXMpIHtcbiAgICAgICAgICAgIGFwcGVuZGVkU25ha2VCb2RpZXMucHVzaCguLi5zbmFrZS5ib2R5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXBwZW5kZWRTbmFrZUJvZGllcy5sZW5ndGggPj0gbGltaXRYICogbGltaXRZKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEludENvb3JkaW5hdGUodW5kZWZpbmVkLCB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGZyZWVQb3NpdGlvbnMgPSB0aGlzLmNhbGN1bGF0ZUZyZWVQb3NpdGlvbnMoYXBwZW5kZWRTbmFrZUJvZGllcyk7XG4gICAgICAgICAgICBsZXQgcmFuZG9tUG9zSW5kZXggPSBNYXRoLnRydW5jKE1hdGgucmFuZG9tKCkgKiAoZnJlZVBvc2l0aW9ucy5sZW5ndGggLSAxKSk7XG4gICAgICAgICAgICBsZXQgcmFuZG9tUG9zaXRpb24gPSBmcmVlUG9zaXRpb25zW3JhbmRvbVBvc0luZGV4XTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgSW50Q29vcmRpbmF0ZShyYW5kb21Qb3NpdGlvbi54LCByYW5kb21Qb3NpdGlvbi55KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY2FsY3VsYXRlRnJlZVBvc2l0aW9ucyhzbmFrZUJvZHkpIHtcbiAgICAgICAgbGV0IGxpbWl0WCA9IHRoaXMuc3RhdGUubGltaXRzLng7XG4gICAgICAgIGxldCBsaW1pdFkgPSB0aGlzLnN0YXRlLmxpbWl0cy54O1xuICAgICAgICBsZXQgcG9zaXRpb25zID0gW11cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW1pdFg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsaW1pdFk7IGorKykge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgeDogaSxcbiAgICAgICAgICAgICAgICAgICAgeTogalxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IG5vZGUgb2Ygc25ha2VCb2R5KSB7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBub2RlLmNvb3JkaW5hdGVzLnggKiBsaW1pdFggKyBub2RlLmNvb3JkaW5hdGVzLnlcbiAgICAgICAgICAgIHBvc2l0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgcG9zaXRpb25zO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb3NpdGlvbnM7XG4gICAgfVxuXG4gICAgZ2V0IHBvc2l0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5wb3NpdGlvbjtcbiAgICB9XG5cbiAgICBnZXQgcGlsbFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5waWxsVmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IElEKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLklEO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJqZWN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKG5ldy50YXJnZXQgPT09IFN1YmplY3QpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0IGNsYXNzLiBDYW5ub3QgYmUgaW5zdGFudGlhdGVkIVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdWJzY3JpYmUgPT09IHZvaWQgMCB8fCB0eXBlb2YgdGhpcy5zdWJzY3JpYmUgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWJzdHJhY3QgbWV0aG9kICdhZGRPYnNlcnZlcicgbXVzdCBiZSBvdmVycmlkZW4hXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudW5zdWJzY3JpYmUgPT09IHZvaWQgMCB8fCB0eXBlb2YgdGhpcy51bnN1YnNjcmliZSAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBYnN0cmFjdCBtZXRob2QgJ3Vuc3Vic2NyaWJlJyBtdXN0IGJlIG92ZXJyaWRlbiFcIik7XG4gICAgICAgIH1cbiAgICB9XG59OyIsIi8vIFwidXNlIHN0cmluY3RcIjtcblxuaW1wb3J0IFN1YmplY3QgZnJvbSAnLi9BYnN0cmFjdENsYXNzZXMvU3ViamVjdCdcbmltcG9ydCBJbnRDb29yZGluYXRlIGZyb20gJy4vaW50Q29vcmRpbmF0ZSc7XG5pbXBvcnQgT2JzZXJ2ZXJFbnRpdHkgZnJvbSAnLi9BYnN0cmFjdENsYXNzZXMvT2JzZXJ2ZXJFbnRpdHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RpZmllciBleHRlbmRzIFN1YmplY3Qge1xuXG4gICAgY29uc3RydWN0b3IoY2FsbGJhY2tzKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzID0gY2FsbGJhY2tzO1xuICAgICAgICB0aGlzLmxhc3ROb2RlQnVmZmVyID0ge307XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpYmUgPSB0aGlzLnN1YnNjcmliZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZVN0ZXBDb2xsaXNpb25UeXBlKG5leHRTdGVwLCBjYWxsZXJJRCkge1xuICAgICAgICBjb25zdCBzbmFrZXMgPSB0aGlzLmNhbGxiYWNrcy5nZXRFbnRpdHlMaXN0KCkuc25ha2VzO1xuICAgICAgICBjb25zdCBib2FyZCA9IHRoaXMuY2FsbGJhY2tzLmdldEVudGl0eUxpc3QoKS5ib2FyZDtcbiAgICAgICAgY29uc3QgcGlsbHMgPSB0aGlzLmNhbGxiYWNrcy5nZXRFbnRpdHlMaXN0KCkucGlsbHM7XG4gICAgICAgIGxldCBjYWxsZXJTbmFrZSA9IHRoaXMuY2FsbGJhY2tzLmdldEVudGl0eUJ5SUQoY2FsbGVySUQpO1xuXG4gICAgICAgIHRoaXMuc3RvcmVMYXN0Tm9kZShjYWxsZXJJRCwgY2FsbGVyU25ha2UuZW5kT2ZCb2R5KTtcblxuICAgICAgICBpZiAoYm9hcmQpIHtcbiAgICAgICAgICAgIGlmIChuZXh0U3RlcC5udWxsUG9zaXRpb24gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc8LS0tLS0tLS0tLS0tLS0tV0FMTF9DT0xMSVNJT05fQUNJVE9OLS0tLS0tLS0tLS0tLS0tPicpO1xuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2goKG9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjYWxsZXIgPSB0aGlzLmNhbGxiYWNrcy5nZXRFbnRpdHlCeUlEKGNhbGxlcklEKTtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIub25Ob3RpZnkoY2FsbGVyLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIldBTExfQ09MTElTSU9OXCJcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IHBpbGwgb2YgcGlsbHMpIHtcbiAgICAgICAgICAgIGlmIChwaWxsLnBvc2l0aW9uLmNvb3JkaW5hdGVzICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmIChwaWxsLnBvc2l0aW9uLmNvb3JkaW5hdGVzLnggPT09IG5leHRTdGVwLmNvb3JkaW5hdGVzLnggJiYgcGlsbC5wb3NpdGlvbi5jb29yZGluYXRlcy55ID09PSBuZXh0U3RlcC5jb29yZGluYXRlcy55KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc8LS0tLS0tLS0tLS0tLS0tUElMTF9DT0xMSVNJT05fQUNJVE9OLS0tLS0tLS0tLS0tLS0tPicpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKChvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhbGxlciA9IHRoaXMuY2FsbGJhY2tzLmdldEVudGl0eUJ5SUQoY2FsbGVySUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIub25Ob3RpZnkoY2FsbGVyLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BJTExfQ09MTElTSU9OJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaWxsOiBwaWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNhbGxlclNuYWtlLnRhcmdldCAmJiBjYWxsZXJTbmFrZS50YXJnZXQuY29vcmRpbmF0ZXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoY2FsbGVyU25ha2UudGFyZ2V0ICYmIChjYWxsZXJTbmFrZS50YXJnZXQuY29vcmRpbmF0ZXMueCA9PT0gbmV4dFN0ZXAuY29vcmRpbmF0ZXMueCAmJiBjYWxsZXJTbmFrZS50YXJnZXQuY29vcmRpbmF0ZXMueSA9PT0gbmV4dFN0ZXAuY29vcmRpbmF0ZXMueSkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPC0tLS0tLS0tLS0tLS0tLVRBUkdFVF9SRUFDSEVELS0tLS0tLS0tLS0tLS0tPicpO1xuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2goKG9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm9uTm90aWZ5KGNhbGxlclNuYWtlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnVEFSR0VUX1JFQUNIRUQnLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsYXN0Tm9kZXMgPSB7fVxuICAgICAgICBmb3IgKGxldCBzbmFrZSBvZiBzbmFrZXMpIHtcbiAgICAgICAgICAgIGxhc3ROb2Rlc1tzbmFrZS5JRF0gPSBzbmFrZS5lbmRPZkJvZHk7XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmFzc2lnbihsYXN0Tm9kZXMsIHRoaXMubGFzdE5vZGVCdWZmZXIpO1xuICAgICAgICBsZXQgaW5jbHVkZXMgPSBmYWxzZTtcbiAgICAgICAgZm9yKGxldCBrZXkgb2YgT2JqZWN0LmtleXMobGFzdE5vZGVzKSl7XG4gICAgICAgICAgICBpbmNsdWRlcyA9IGluY2x1ZGVzIHx8IChsYXN0Tm9kZXNba2V5XS5jb29yZGluYXRlcy54ID09IG5leHRTdGVwLmNvb3JkaW5hdGVzLnggJiYgbGFzdE5vZGVzW2tleV0uY29vcmRpbmF0ZXMueSA9PSBuZXh0U3RlcC5jb29yZGluYXRlcy55KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWluY2x1ZGVzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBzbmFrZSBvZiBzbmFrZXMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBub2RlIG9mIHNuYWtlLmJvZHkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRTdGVwLmNvb3JkaW5hdGVzLnggPT09IG5vZGUuY29vcmRpbmF0ZXMueCAmJiBuZXh0U3RlcC5jb29yZGluYXRlcy55ID09PSBub2RlLmNvb3JkaW5hdGVzLnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc8LS0tLS0tLS0tLS0tLS0tQk9EWV9DT0xMSVNJT05fQUNJVE9OLS0tLS0tLS0tLS0tLS0tPicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaCgob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FsbGVyID0gdGhpcy5jYWxsYmFja3MuZ2V0RW50aXR5QnlJRChjYWxsZXJJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIub25Ob3RpZnkoY2FsbGVyLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdCT0RZX0NPTExJU0lPTidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHNuYWtlcy5sZW5ndGggPT0gT2JqZWN0LmtleXModGhpcy5sYXN0Tm9kZUJ1ZmZlcikubGVuZ3RoKXtcbiAgICAgICAgICAgIHRoaXMubGFzdE5vZGVCdWZmZXIgPSB7fTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN1YnNjcmliZShvYnNlcnZlcikge1xuICAgICAgICBpZiAob2JzZXJ2ZXIgaW5zdGFuY2VvZiBPYnNlcnZlckVudGl0eSkge1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuYWRkKG9ic2VydmVyKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB1bnN1YnNjcmliZShvYnNlcnZlcikge1xuICAgICAgICB0aGlzLm9ic2VydmVycy5kZWxldGUob2JzZXJ2ZXIpXG4gICAgfVxuXG4gICAgc3RvcmVMYXN0Tm9kZShJRCwgbGFzdE5vZGUpIHtcbiAgICAgICAgaWYgKElEICYmIGxhc3ROb2RlIGluc3RhbmNlb2YgSW50Q29vcmRpbmF0ZSkge1xuICAgICAgICAgICAgdGhpcy5sYXN0Tm9kZUJ1ZmZlcltJRF0gPSBsYXN0Tm9kZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59IiwiaW1wb3J0IEJvYXJkIGZyb20gJy4vYm9hcmQuanMnO1xuaW1wb3J0IFNuYWtlIGZyb20gJy4vc25ha2UuanMnO1xuaW1wb3J0IFBpbGwgZnJvbSAnLi9waWxsLmpzJztcbmltcG9ydCBOb3RpZmllciBmcm9tICcuL25vdGlmaWVyJztcblxuaW1wb3J0IENvbmZpZ0Vycm9yIGZyb20gJy4vZXJyb3JzL0NvbmZpZ0Vycm9yLmpzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RlbCB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnLCBzdHJhdGVnaWVzKSB7XG4gICAgICAgIHRoaXMuZ2V0RW50aXR5TGlzdCA9IHRoaXMuZ2V0RW50aXR5TGlzdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdldEVudGl0eUJ5SUQgPSB0aGlzLmdldEVudGl0eUJ5SUQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5wcm9wYWdhdGVFcnJvciA9IHRoaXMucHJvcGFnYXRlRXJyb3IuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5wcm9wYWdhdGVSdW50aW1lID0gdGhpcy5wcm9wYWdhdGVSdW50aW1lLmJpbmQodGhpcyk7XG4gICAgICAgIFxuXG4gICAgICAgIHRoaXMucGFzc2VkRG93bkNhbGxiYWNrcyA9IHtcbiAgICAgICAgICAgIGdldEVudGl0eUxpc3Q6IHRoaXMuZ2V0RW50aXR5TGlzdCxcbiAgICAgICAgICAgIGdldEVudGl0eUJ5SUQ6IHRoaXMuZ2V0RW50aXR5QnlJRCxcbiAgICAgICAgICAgIHByb3BhZ2F0ZUVycm9yOiB0aGlzLnByb3BhZ2F0ZUVycm9yLFxuICAgICAgICAgICAgcHJvcGFnYXRlUnVudGltZTogdGhpcy5wcm9wYWdhdGVSdW50aW1lXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMubm90aWZpZXIgPSBuZXcgTm90aWZpZXIodGhpcy5wYXNzZWREb3duQ2FsbGJhY2tzKTtcbiAgICAgICAgdGhpcy5zdHJhdGVnaWVzID0gc3RyYXRlZ2llcztcbiAgICAgICAgXG4gICAgICAgIGxldCBwYXJzZWRDb25maWcgPSB0aGlzLnBhcnNlQ29uZmlnKGNvbmZpZyk7XG4gICAgICAgIHRoaXMucnVudGltZXMgPSB7fTtcblxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy5zaW11bGF0aW9uU3BlZWQgPSBwYXJzZWRDb25maWcuc2ltdWxhdGlvblNwZWVkO1xuICAgICAgICB0aGlzLkVudGl0aWVzID0ge1xuICAgICAgICAgICAgc25ha2VzOiBwYXJzZWRDb25maWcuc25ha2VzLFxuICAgICAgICAgICAgcGlsbHM6IHBhcnNlZENvbmZpZy5waWxscyxcbiAgICAgICAgICAgIGJvYXJkOiBwYXJzZWRDb25maWcuYm9hcmQsXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzR2FtZU92ZXIoKSkge1xuICAgICAgICAgICAgbGV0IHNuYWtlcyA9IHRoaXMuRW50aXRpZXMuc25ha2VzO1xuICAgICAgICAgICAgbGV0IHBpbGxzID0gdGhpcy5FbnRpdGllcy5waWxscztcbiAgICAgICAgICAgIGxldCBib2FyZCA9IHRoaXMuRW50aXRpZXMuYm9hcmQ7XG5cbiAgICAgICAgICAgIGZvcihsZXQgc25ha2Ugb2Ygc25ha2VzKXtcbiAgICAgICAgICAgICAgICBzbmFrZS51cGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvcihsZXQgcGlsbCBvZiBwaWxscyl7XG4gICAgICAgICAgICAgICAgcGlsbC51cGRhdGUoKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9hcmQudXBkYXRlKCk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICBsZXQgc25ha2VzID0gdGhpcy5FbnRpdGllcy5zbmFrZXM7XG4gICAgICAgICAgICBsZXQgcGlsbHMgPSB0aGlzLkVudGl0aWVzLnBpbGxzO1xuICAgICAgICAgICAgbGV0IGJvYXJkID0gdGhpcy5FbnRpdGllcy5ib2FyZDtcbiAgICAgICAgICAgIGZvcihsZXQgc25ha2Ugb2Ygc25ha2VzKXtcbiAgICAgICAgICAgICAgICBzbmFrZS5yZXNldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yKGxldCBwaWxsIG9mIHBpbGxzKXtcbiAgICAgICAgICAgICAgICBwaWxsLnJlc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib2FyZC5yZXNldCgpO1xuICAgIH1cblxuICAgIHNuYWtlRmFjdG9yeShzbmFrZUNvbmZpZywgbm90aWZpZXIpIHtcbiAgICAgICAgbGV0IHN0cmF0ZWd5TmFtZSA9IHNuYWtlQ29uZmlnLnN0cmF0ZWd5O1xuICAgICAgICBsZXQgc3RyYXRlZ3lUeXBlID0gdGhpcy5zdHJhdGVnaWVzW3N0cmF0ZWd5TmFtZV07XG4gICAgICAgIGxldCBzdHJhdGVneSA9IG5ldyBzdHJhdGVneVR5cGUodGhpcy5wYXNzZWREb3duQ2FsbGJhY2tzKTtcbiAgICAgICAgbGV0IHNuYWtlID0gbmV3IFNuYWtlKHRoaXMucGFzc2VkRG93bkNhbGxiYWNrcywgc25ha2VDb25maWcsIHN0cmF0ZWd5LCBub3RpZmllcik7XG4gICAgICAgIHJldHVybiBzbmFrZTtcbiAgICB9XG5cbiAgICBpc0dhbWVPdmVyKCl7XG4gICAgICAgIGxldCBpc0dhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgbGV0IHNuYWtlcyA9IHRoaXMuRW50aXRpZXMuc25ha2VzO1xuICAgICAgICBmb3IobGV0IHNuYWtlIG9mIHNuYWtlcyl7XG4gICAgICAgICAgICBpc0dhbWVPdmVyID0gaXNHYW1lT3ZlciAmJiAhKHNuYWtlLmlzQWxpdmUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzR2FtZU92ZXI7XG4gICAgfVxuXG4gICAgcGFyc2VDb25maWcoY29uZmlnKSB7XG4gICAgICAgIGxldCBwYXJzZWRDb25maWcgPSB7fVxuICAgICAgICBsZXQgZW5yaWNoZWRDb25maWcgPSB0aGlzLmVucmljaENvbmZpZyhjb25maWcpO1xuICAgICAgICBsZXQgc25ha2VDb25maWdzID0gZW5yaWNoZWRDb25maWcuc25ha2VDb25maWdzO1xuICAgICAgICBsZXQgcGlsbENvbmZpZ3MgPSBlbnJpY2hlZENvbmZpZy5waWxsQ29uZmlncztcbiAgICAgICAgbGV0IGJvYXJkQ29uZmlnID0gZW5yaWNoZWRDb25maWcuYm9hcmRDb25maWc7XG4gICAgICAgIGxldCBtYWluQ29uZmlnID0gZW5yaWNoZWRDb25maWcubWFpbjtcblxuICAgICAgICBpZiAoc25ha2VDb25maWdzKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzbmFrZUNvbmZpZ3MpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNuYWtlcyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHNuYWtlQ29uZmlnIG9mIHNuYWtlQ29uZmlncykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdHJhdGVnaWVzW3NuYWtlQ29uZmlnLnN0cmF0ZWd5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNuYWtlID0gdGhpcy5zbmFrZUZhY3Rvcnkoc25ha2VDb25maWcsIHRoaXMubm90aWZpZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc25ha2VzLnB1c2goc25ha2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IENvbmZpZ0Vycm9yKFwic25ha2VDb25maWcncyBzdHJhdGVneSBpcyBub3QgaW4gdGhlIGluZGV4IVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXJzZWRDb25maWcuc25ha2VzID0gc25ha2VzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgQ29uZmlnRXJyb3IoJ3NuYWtlQ29uZmlncyBmaWVsZCBvZiBjb25maWcgc2hvdWxkIGJlIGFuIEFycmF5IScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwaWxsQ29uZmlncykge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocGlsbENvbmZpZ3MpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBpbGxzID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcGlsbENvbmZpZyBvZiBwaWxsQ29uZmlncykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcGlsbCA9IG5ldyBQaWxsKHRoaXMucGFzc2VkRG93bkNhbGxiYWNrcywgcGlsbENvbmZpZywgdGhpcy5ub3RpZmllcik7XG4gICAgICAgICAgICAgICAgICAgIHBpbGxzLnB1c2gocGlsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhcnNlZENvbmZpZy5waWxscyA9IHBpbGxzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgQ29uZmlnRXJyb3IoJ3BpbGxDb25maWdzIGZpZWxkIG9mIGNvbmZpZyBzaG91bGQgYmUgYW4gQXJyYXkhJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvYXJkQ29uZmlnKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkQ29uZmlnID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgbGV0IGJvYXJkID0gbmV3IEJvYXJkKHRoaXMucGFzc2VkRG93bkNhbGxiYWNrcywgYm9hcmRDb25maWcpO1xuICAgICAgICAgICAgICAgIHBhcnNlZENvbmZpZy5ib2FyZCA9IGJvYXJkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgQ29uZmlnRXJyb3IoJ2JvYXJkQ29uZmlnIGZpZWxkIG9mIGNvbmZpZyBzaG91bGQgYmUgYW4gT2JqZWN0IScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtYWluQ29uZmlnKSB7XG4gICAgICAgICAgICBpZiAobWFpbkNvbmZpZy5zaW11bGF0aW9uU3BlZWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgc2ltdWxhdGlvblNwZWVkID0gTnVtYmVyKG1haW5Db25maWcuc2ltdWxhdGlvblNwZWVkKTtcbiAgICAgICAgICAgICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihzaW11bGF0aW9uU3BlZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZENvbmZpZy5zaW11bGF0aW9uU3BlZWQgPSBzaW11bGF0aW9uU3BlZWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IENvbmZpZ0Vycm9yKCdzaW11bGF0aW9uU3BlZWQgdmFsdWUgc2hvdWxkIGJlIEludGVnZXIhJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgQ29uZmlnRXJyb3IoJ01pc3NpbmcgbWFpbiBjb25maWcgZmllbGQgc2ltdWxhdGlvblNwZWVkIScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlZENvbmZpZztcbiAgICB9XG5cbiAgICBlbnJpY2hDb25maWcoY29uZmlnKSB7XG4gICAgICAgIGxldCBib2FyZENvbmZpZyA9IGNvbmZpZy5ib2FyZENvbmZpZztcbiAgICAgICAgbGV0IGxpbWl0WCA9IDA7XG4gICAgICAgIGxldCBsaW1pdFkgPSAwO1xuICAgICAgICBsZXQgcGlsbENvbmZpZ3MgPSBjb25maWcucGlsbENvbmZpZ3M7XG4gICAgICAgIGxldCBzbmFrZUNvbmZpZ3MgPSBjb25maWcuc25ha2VDb25maWdzO1xuICAgICAgICBpZiAoYm9hcmRDb25maWcpIHtcbiAgICAgICAgICAgIGxpbWl0WCA9IGJvYXJkQ29uZmlnLndpZHRoIHx8IGxpbWl0WDtcbiAgICAgICAgICAgIGxpbWl0WSA9IGJvYXJkQ29uZmlnLmhlaWdodCB8fCBsaW1pdFk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBpbGxDb25maWdzICYmIEFycmF5LmlzQXJyYXkocGlsbENvbmZpZ3MpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBwaWxsQ29uZmlnIG9mIHBpbGxDb25maWdzKSB7XG4gICAgICAgICAgICAgICAgcGlsbENvbmZpZy5saW1pdFggPSBsaW1pdFg7XG4gICAgICAgICAgICAgICAgcGlsbENvbmZpZy5saW1pdFkgPSBsaW1pdFk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNuYWtlQ29uZmlncyAmJiBBcnJheS5pc0FycmF5KHNuYWtlQ29uZmlncykpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHNuYWtlQ29uZmlnIG9mIHNuYWtlQ29uZmlncykge1xuICAgICAgICAgICAgICAgIHNuYWtlQ29uZmlnLmxpbWl0WCA9IGxpbWl0WDtcbiAgICAgICAgICAgICAgICBzbmFrZUNvbmZpZy5saW1pdFkgPSBsaW1pdFk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbmZpZ1xuICAgIH1cblxuXG4gICAgLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ0FMTEJBQ0tTICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovL1xuXG4gICAgcHJvcGFnYXRlUnVudGltZShzbmFrZUlELCBydW50aW1lKXtcbiAgICAgICAgdGhpcy5ydW50aW1lc1tzbmFrZUlEXSA9IHJ1bnRpbWU7XG4gICAgfVxuXG4gICAgZ2V0RW50aXR5TGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuRW50aXRpZXM7XG4gICAgfVxuXG4gICAgcHJvcGFnYXRlRXJyb3IoZXJyb3Ipe1xuICAgICAgICBpZihlcnJvciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgZ2V0RW50aXR5QnlJRChJRCl7XG4gICAgICAgIGxldCByZXR1cm5FbnRpdHk7XG4gICAgICAgIGxldCBzbmFrZXMgPSB0aGlzLkVudGl0aWVzLnNuYWtlcztcbiAgICAgICAgZm9yKGxldCBzbmFrZSBvZiBzbmFrZXMpe1xuICAgICAgICAgICAgaWYoc25ha2UuSUQgPT0gSUQpe1xuICAgICAgICAgICAgICAgIHJldHVybkVudGl0eSA9IHNuYWtlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBwaWxscyA9IHRoaXMuRW50aXRpZXMucGlsbHM7XG4gICAgICAgIGZvcihsZXQgcGlsbCBvZiBwaWxscyl7XG4gICAgICAgICAgICBpZihwaWxsLklEID09IElEKXtcbiAgICAgICAgICAgICAgICByZXR1cm5FbnRpdHkgPSBwaWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBib2FyZCA9IHRoaXMuRW50aXRpZXMuYm9hcmQ7XG4gICAgICAgIGlmKGJvYXJkLklEID09IElEKXtcbiAgICAgICAgICAgIHJldHVybkVudGl0eSA9IGJvYXJkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXR1cm5FbnRpdHk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cmF0ZWd5e1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIGlmIChuZXcudGFyZ2V0ID09PSBTdHJhdGVneSl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBYnN0cmFjdCBjbGFzcy4gQ2Fubm90IGJlIGluc3RhbnRpYXRlZCFcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLnBhdGhmaW5kZXIgPT09IHZvaWQgMCB8fCB0eXBlb2YgdGhpcy5wYXRoZmluZGVyICE9PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0IG1ldGhvZCAncGF0aGZpbmRlcicgbXVzdCBiZSBvdmVycmlkZW4hXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5jYWxjdWxhdGVUYXJnZXQgPT09IHZvaWQgMCB8fCB0eXBlb2YgdGhpcy5jYWxjdWxhdGVUYXJnZXQgIT09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWJzdHJhY3QgbWV0aG9kICdjYWxjdWxhdGVUYXJnZXQnIG11c3QgYmUgb3ZlcnJpZGVuIVwiKTtcbiAgICAgICAgfVxuICAgIH1cbn07IiwiaW1wb3J0IEludENvb3JkaW5hdGUgZnJvbSAnLi4vaW50Q29vcmRpbmF0ZSc7XG5pbXBvcnQgU3RyYXRlZ3kgZnJvbSAnLi4vQWJzdHJhY3RDbGFzc2VzL1N0cmF0ZWd5JztcbmltcG9ydCBBU3RhcnRBbGdvcml0aG0gZnJvbSAnLi9hU3RhckFsZ29yaXRobSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhaW5BU3RhclN0cmF0ZWd5IGV4dGVuZHMgU3RyYXRlZ3l7XG4gICAgY29uc3RydWN0b3IoY2FsbGJhY2tzKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jYWxsYmFja3MgPSBjYWxsYmFja3M7XG4gICAgfVxuXG4gICAgcGF0aGZpbmRlcihzbmFrZSkge1xuICAgICAgICBsZXQgcGF0aCA9IFtuZXcgSW50Q29vcmRpbmF0ZSgxLDEpXVxuICAgICAgICAvLyBsZXQgcGlsbCA9IHRoaXMuY2FsbGJhY2tzLmdldEVudGl0eUxpc3QoKS5waWxsc1swXTtcbiAgICAgICAgLy8gbGV0IGJvYXJkID0gdGhpcy5jYWxsYmFja3MuZ2V0RW50aXR5TGlzdCgpLmJvYXJkO1xuICAgICAgICAvLyBsZXQgcGF0aCA9IEFTdGFydEFsZ29yaXRobShzbmFrZS5oZWFkLCBwaWxsLnBvc2l0aW9uLCBib2FyZCk7XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZVRhcmdldCgpIHtcbiAgICAgICAgc25ha2Uuc2V0VGFyZ2V0KG5ldyBJbnRDb29yZGluYXRlKDEsMSkpO1xuICAgIH1cbn0iLCJpbXBvcnQgcGxhaW5BU3RhclN0cmF0ZWd5IGZyb20gJy4vcGxhaW5BU3Rhcic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwbGFpbkFTdGFyU3RyYXRlZ3k6IHBsYWluQVN0YXJTdHJhdGVneVxufSIsIi8vJ3VzZSBzdHJpY3QnXG5cbi8vaW1wb3J0IGxvZyBmcm9tICdsb2dsZXZlbCc7XG5pbXBvcnQgTWFpbmxvb3AgZnJvbSAnbWFpbmxvb3AuanMnO1xuaW1wb3J0IENhbnZhc1dyYXBwZXIgZnJvbSAnLi9jYW52YXNXcmFwcGVyJztcbmltcG9ydCBNb2RlbCBmcm9tICcuL21vZGVsJztcbmltcG9ydCBzdHJhdGVnaWVzIGZyb20gJy4vcGF0aGZpbmRpbmctYWxnb3JpdGhtcy9pbmRleC5qcyc7XG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5qc29uJztcblxuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vZGVsID0gbmV3IE1vZGVsKGNvbmZpZywgc3RyYXRlZ2llcyk7XG4gICAgY29uc3QgbnVtYmVyT2ZDb2x1bW5zID0gTnVtYmVyKGNvbmZpZy5ib2FyZENvbmZpZy53aWR0aCk7XG4gICAgY29uc3QgbnVtYmVyT2ZSb3dzID0gTnVtYmVyKGNvbmZpZy5ib2FyZENvbmZpZy5oZWlnaHQpO1xuICAgIGNvbnN0IHZpZXdQb3J0V2lkdGggPSAxMjgwO1xuICAgIGNvbnN0IHZpZXdQb3J0SGVpZ2h0ID0gNzIwO1xuICAgIGNvbnN0IHRpbGVXaWR0aCA9IHZpZXdQb3J0V2lkdGggLyBudW1iZXJPZkNvbHVtbnM7XG4gICAgY29uc3QgdGlsZUhlaWdodCA9IHZpZXdQb3J0SGVpZ2h0IC8gbnVtYmVyT2ZSb3dzO1xuXG4gICAgbGV0IHZpZXdQb3J0ID0gaW5pdFZpZXdQb3J0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aWV3cG9ydC1jb250YWluZXInKSk7XG4gICAgbGV0IHdyYXBwZWRDYW52YXMgPSBuZXcgQ2FudmFzV3JhcHBlcih2aWV3UG9ydFdpZHRoLCB2aWV3UG9ydEhlaWdodCwgdmlld1BvcnQsICcyZCcpO1xuICAgIGxldCBtYWlubG9vcDtcblxuICAgIGluaXRDb21wb25lbnRzKGNvbmZpZyk7XG5cblxuICAgIC8vSsOhdMOpa2xvb3BcbiAgICBtYWlubG9vcCA9IE1haW5sb29wLnNldFVwZGF0ZSgoKSA9PiB7XG4gICAgICAgIG1vZGVsLnVwZGF0ZSgpO1xuICAgICAgICB1cGRhdGVTdGF0U2NyZWVuKG1vZGVsLnJ1bnRpbWVzKVxuICAgIH0pLnNldERyYXcoKCkgPT4ge1xuICAgICAgICB3cmFwcGVkQ2FudmFzLmNsZWFyU2NlbmUoKTtcbiAgICAgICAgZHJhd0JvYXJkKG1vZGVsKTtcbiAgICAgICAgd3JhcHBlZENhbnZhcy5yZW5kZXJTY2VuZSgpXG4gICAgfSkuc2V0U2ltdWxhdGlvblRpbWVzdGVwKDEwMDAgLyAxNSlcblxuICAgIGxldCBjb2xvcnMgPSBbJyNFOEU4NUMnLCAnI0VDQTg4MCcsICcjRENCNDY4JywgJyNFQ0EwQTAnLCAnI0RDOUNEMCcsICcjQzQ5Q0VDJywgJyNBOEEwRUMnLCAnIzkwQjRFQycsICcjOTBDQ0U4JywgJyM5MEU0QzAnLCAnI0E0RTRBNCcsICcjQTRFNEE0JywgJyNCNEU0OTAnLCAnI0I0RTQ5MCcsICcjRThDQzdDJ107XG5cbiAgICAvL1RPRE86IFRoaXMgc2hvdWxkIGJlIGluIGEgc2VwYXJhdGUgcmVuZGVyIG1vZHVsZVxuICAgIGZ1bmN0aW9uIGRyYXdCb2FyZChtb2RlbCkge1xuICAgICAgICBsZXQgc25ha2VzID0gbW9kZWwuZ2V0RW50aXR5TGlzdCgpLnNuYWtlcztcbiAgICAgICAgbGV0IHBpbGxzID0gbW9kZWwuZ2V0RW50aXR5TGlzdCgpLnBpbGxzO1xuXG4gICAgICAgIGZvciAobGV0IHNuYWtlIG9mIHNuYWtlcykge1xuICAgICAgICAgICAgZm9yIChsZXQgZWxlbWVudCBvZiBzbmFrZS5wYXRoKSB7XG4gICAgICAgICAgICAgICAgd3JhcHBlZENhbnZhcy5jcmVhdGVSZWN0KGVsZW1lbnQuY29vcmRpbmF0ZXMueCAqIHRpbGVXaWR0aCwgZWxlbWVudC5jb29yZGluYXRlcy55ICogdGlsZUhlaWdodCwgdGlsZVdpZHRoIC8gMiwgdGlsZUhlaWdodCAvIDIsICdyZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IG5vZGUgb2Ygc25ha2UuYm9keSlcbiAgICAgICAgICAgICAgICB3cmFwcGVkQ2FudmFzLmNyZWF0ZVJlY3Qobm9kZS5jb29yZGluYXRlcy54ICogdGlsZVdpZHRoLCBub2RlLmNvb3JkaW5hdGVzLnkgKiB0aWxlSGVpZ2h0LCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQsICdncmVlbicpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IHBpbGwgb2YgcGlsbHMpIHtcbiAgICAgICAgICAgIHdyYXBwZWRDYW52YXMuY3JlYXRlQ2lyY2xlKHBpbGwucG9zaXRpb24uY29vcmRpbmF0ZXMueCAqIHRpbGVIZWlnaHQsIHBpbGwucG9zaXRpb24uY29vcmRpbmF0ZXMueSAqIHRpbGVIZWlnaHQsIHRpbGVIZWlnaHQgLyAyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiBNRVTDk0RVU09LICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICAvKipcbiAgICAgKiBKw6F0w6lrIGFibGFrw6FuYWsgaW5pY2lhbGl6w6Fsw6FzYVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGluaXRWaWV3UG9ydChob2lzdE9uKSB7XG4gICAgICAgIGlmIChob2lzdE9uID09IHVuZGVmaW5lZCB8fCB0eXBlb2YgaG9pc3RPbi5hcHBlbmRDaGlsZCAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBob2lzdCBvbiBnaXZlbiBlbGVtZW50IS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2aWV3UG9ydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB2aWV3UG9ydC5pZCA9ICd2aWV3UG9ydCc7XG4gICAgICAgIHZpZXdQb3J0LmlubmVySFRNTCA9ICdObyBjYW52YXMgc3VwcG9ydCA6KCc7XG5cbiAgICAgICAgbGV0IHZpZXdQb3J0V3JhcHBlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdmlld1BvcnRXcmFwcGVyRWxlbWVudC5pZCA9ICd2aWV3UG9ydFdyYXBwZXJFbGVtZW50JztcblxuICAgICAgICAvL1N0w61sdXNcbiAgICAgICAgdmlld1BvcnRXcmFwcGVyRWxlbWVudC5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgdmlld1BvcnRXcmFwcGVyRWxlbWVudC5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICAgICAgdmlld1BvcnQuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xuICAgICAgICB2aWV3UG9ydC5zdHlsZS5ib3JkZXIgPSAnc29saWQgMXB4JztcblxuICAgICAgICAvL0hvenrDoWFkw6FzIGEgRE9NLWhvelxuICAgICAgICB2aWV3UG9ydFdyYXBwZXJFbGVtZW50LmFwcGVuZENoaWxkKHZpZXdQb3J0KTtcbiAgICAgICAgaG9pc3RPbi5hcHBlbmRDaGlsZCh2aWV3UG9ydFdyYXBwZXJFbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIHZpZXdQb3J0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRDb21wb25lbnRzKGNvbmZpZykge1xuICAgICAgICBsZXQgc25ha2VzID0gbW9kZWwuZ2V0RW50aXR5TGlzdCgpLnNuYWtlcztcblxuICAgICAgICAvL3NwZWVkIHNlbGVjdG9yXG4gICAgICAgIGxldCBzcGVlZFNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NwZWVkLXNlbGVjdG9yJyk7XG4gICAgICAgIHNwZWVkU2VsZWN0b3IudmFsdWUgPSBOdW1iZXIoY29uZmlnLm1haW4uc2ltdWxhdGlvblNwZWVkKTtcbiAgICAgICAgc3BlZWRTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgbWFpbmxvb3Auc2V0U2ltdWxhdGlvblRpbWVzdGVwKDEwMDAgLyBzcGVlZFNlbGVjdG9yLnZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9kYXNoYm9hcmRcbiAgICAgICAgbGV0IGRhc2hib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXNoYm9hcmQnKTtcbiAgICAgICAgZGFzaGJvYXJkLnN0eWxlID0gXCJiYWNrZ3JvdW5kLWNvbG9yOiAjZDZjMTgyOyB0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmc6IDEwcHhcIjtcblxuICAgICAgICAvL3Jlc3RhcnQgYnV0dG9uXG4gICAgICAgIGxldCByZXN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3RhcnQtYnV0dG9uJyk7XG4gICAgICAgIHJlc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIG1vZGVsLnJlc2V0KCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy9zdG9wIGJ1dHRvblxuICAgICAgICBsZXQgc3RvcEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdG9wLWJ1dHRvbicpO1xuICAgICAgICBzdG9wQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBtYWlubG9vcC5zdG9wKClcbiAgICAgICAgfSlcblxuICAgICAgICAvL3N0YXJ0IGJ1dHRvblxuICAgICAgICBsZXQgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhcnQtYnV0dG9uJyk7XG4gICAgICAgIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBtYWlubG9vcC5zdGFydCgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy9zdGF0IHNjcmVlblxuICAgICAgICBsZXQgc3RhdFNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGF0U2NyZWVuJyk7XG4gICAgICAgIHN0YXRTY3JlZW4uc3R5bGUgPSBcImJhY2tncm91bmQtY29sb3I6ICNkNmMxODI7IHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZzogMTBweFwiO1xuICAgICAgICBzdGF0U2NyZWVuLnN0eWxlLndpZHRoID0gJzMwMFBYJztcbiAgICAgICAgc3RhdFNjcmVlbi5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICAgICAgbGV0IHNuYWtlU3RhdFNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzbmFrZVN0YXRTY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xuICAgICAgICBzbmFrZVN0YXRTY3JlZW4uc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgIHNuYWtlU3RhdFNjcmVlbi5pZCA9ICdzbmFrZVN0YXRTY3JlZW4nO1xuICAgICAgICBmb3IgKGxldCBzbmFrZSBvZiBzbmFrZXMpIHtcbiAgICAgICAgICAgIC8vY29sb3JcbiAgICAgICAgICAgIGxldCBjb2xvckRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbG9yRGlzcGxheS5pZCA9ICdjb2xvckRpc3BsYXktJyArIHNuYWtlLklEO1xuICAgICAgICAgICAgbGV0IGNvbG9yTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgY29sb3JMYWJlbC5pbm5lckhUTUwgPSAnY29sb3I6J1xuICAgICAgICAgICAgbGV0IGNvbG9yRGlzcGxheUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBjb2xvckRpc3BsYXlDb250ZW50LmlubmVySFRNTCA9ICdSRUQnO1xuICAgICAgICAgICAgY29sb3JEaXNwbGF5LmFwcGVuZENoaWxkKGNvbG9yTGFiZWwpO1xuICAgICAgICAgICAgY29sb3JEaXNwbGF5LmFwcGVuZENoaWxkKGNvbG9yRGlzcGxheUNvbnRlbnQpO1xuXG4gICAgICAgICAgICAvL3Njb3JlXG4gICAgICAgICAgICBsZXQgc2NvcmVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBzY29yZURpc3BsYXkuaWQgPSAnc2NvcmVEaXNwbGF5LScgKyBzbmFrZS5JRDtcbiAgICAgICAgICAgIGxldCBzY29yZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIHNjb3JlTGFiZWwuaW5uZXJIVE1MID0gJ3Njb3JlOidcbiAgICAgICAgICAgIGxldCBzY29yZURpc3BsYXlDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgc2NvcmVEaXNwbGF5Q29udGVudC5pbm5lckhUTUwgPSAnUkVEJztcbiAgICAgICAgICAgIHNjb3JlRGlzcGxheS5hcHBlbmRDaGlsZChzY29yZUxhYmVsKTtcbiAgICAgICAgICAgIHNjb3JlRGlzcGxheS5hcHBlbmRDaGlsZChzY29yZURpc3BsYXlDb250ZW50KTtcblxuICAgICAgICAgICAgc25ha2VTdGF0U2NyZWVuLmFwcGVuZENoaWxkKGNvbG9yRGlzcGxheSk7XG4gICAgICAgICAgICBzbmFrZVN0YXRTY3JlZW4uYXBwZW5kQ2hpbGQoc2NvcmVEaXNwbGF5KTtcbiAgICAgICAgfVxuICAgICAgICBzdGF0U2NyZWVuLmFwcGVuZENoaWxkKHNuYWtlU3RhdFNjcmVlbik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlU3RhdFNjcmVlbihzdGF0cykge1xuICAgICAgICBsZXQgcGFyYWdyYXBoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lubmVyU3RhdFNjcmVlblBhcmFncmFwaCcpO1xuICAgICAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMoc3RhdHMpKSB7XG4gICAgICAgICAgICBwYXJhZ3JhcGguaW5uZXJIVE1MID0gc3RhdHNba2V5XTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59Il0sIm5hbWVzIjpbImEiLCJiIiwieCIsInEiLCJlIiwibCIsImQiLCJ0IiwiaSIsImgiLCJmIiwiZyIsImoiLCJrIiwiYyIsInUiLCJvIiwidiIsInciLCJtIiwibiIsInAiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJEYXRlIiwibm93IiwiTWF0aCIsIm1heCIsInNldFRpbWVvdXQiLCJyIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJjbGVhclRpbWVvdXQiLCJzIiwiTWFpbkxvb3AiLCJnZXRTaW11bGF0aW9uVGltZXN0ZXAiLCJzZXRTaW11bGF0aW9uVGltZXN0ZXAiLCJnZXRGUFMiLCJnZXRNYXhBbGxvd2VkRlBTIiwic2V0TWF4QWxsb3dlZEZQUyIsInN0b3AiLCJyZXNldEZyYW1lRGVsdGEiLCJzZXRCZWdpbiIsInNldFVwZGF0ZSIsInNldERyYXciLCJzZXRFbmQiLCJzdGFydCIsImlzUnVubmluZyIsIm1vZHVsZSIsInRoaXMiLCJDb29yZGluYXRlRXJyb3IiLCJtZXNzYWdlIiwibmFtZSIsIkVycm9yIiwiSW50Q29vcmRpbmF0ZSIsInkiLCJudWxsUG9zaXRpb24iLCJOdW1iZXIiLCJpc0ludGVnZXIiLCJJbnRDb29yZGluYXRlRXJyb3IiLCJDYW52YXNXcmFwcGVyIiwid2lkdGgiLCJoZWlnaHQiLCJjYW52YXNET01FbGVtZW50IiwidW5kZWZpbmVkIiwiZ2V0Q29udGV4dCIsIl9jYW52YXMiLCJfY3R4IiwiX3NjZW5lIiwiY3JlYXRlUmVjdCIsImJpbmQiLCJkcmF3UmVjdCIsInJlbmRlclNjZW5lIiwicG9zWCIsInBvc1kiLCJjb2xvciIsInppbmRleCIsInJlY3QiLCJ0eXBlIiwicG9zaXRpb24iLCJwdXNoIiwicmFkaXVzIiwiY2lyY2xlIiwic3RhcnRBbmdsZSIsImVuZEFuZ2xlIiwiUEkiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImJlZ2luUGF0aCIsImFyYyIsImNsb3NlUGF0aCIsImZpbGwiLCJjbGVhclJlY3QiLCJ6QnVmZmVyZWRTY2VuZSIsInNvcnRTY2VuZUJ5WkluZGV4Iiwib2JqZWN0IiwiZHJhd0NpcmNsZSIsInNjZW5lIiwic29ydCIsInoxIiwiejIiLCJFbnRpdHkiLCJuZXciLCJ0YXJnZXQiLCJ1cGRhdGUiLCJyZXNldCIsImxpc3RDYWNoZUNsZWFyIiwiX19kYXRhX18iLCJzaXplIiwiZXEiLCJ2YWx1ZSIsIm90aGVyIiwiYXNzb2NJbmRleE9mIiwiYXJyYXkiLCJrZXkiLCJsZW5ndGgiLCJhcnJheVByb3RvIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzcGxpY2UiLCJsaXN0Q2FjaGVEZWxldGUiLCJkYXRhIiwiaW5kZXgiLCJsYXN0SW5kZXgiLCJwb3AiLCJjYWxsIiwibGlzdENhY2hlR2V0IiwibGlzdENhY2hlSGFzIiwibGlzdENhY2hlU2V0IiwiTGlzdENhY2hlIiwiZW50cmllcyIsImNsZWFyIiwiZW50cnkiLCJzZXQiLCJnZXQiLCJoYXMiLCJzdGFja0NsZWFyIiwic3RhY2tEZWxldGUiLCJyZXN1bHQiLCJzdGFja0dldCIsInN0YWNrSGFzIiwiZnJlZUdsb2JhbCIsIl90eXBlb2YiLCJnbG9iYWwiLCJPYmplY3QiLCJmcmVlU2VsZiIsInNlbGYiLCJyb290IiwiRnVuY3Rpb24iLCJTeW1ib2wiLCJvYmplY3RQcm90byIsImhhc093blByb3BlcnR5IiwibmF0aXZlT2JqZWN0VG9TdHJpbmciLCJ0b1N0cmluZyIsInN5bVRvU3RyaW5nVGFnIiwidG9TdHJpbmdUYWciLCJnZXRSYXdUYWciLCJpc093biIsInRhZyIsInVubWFza2VkIiwib2JqZWN0VG9TdHJpbmciLCJudWxsVGFnIiwidW5kZWZpbmVkVGFnIiwiYmFzZUdldFRhZyIsImlzT2JqZWN0IiwiYXN5bmNUYWciLCJmdW5jVGFnIiwiZ2VuVGFnIiwicHJveHlUYWciLCJpc0Z1bmN0aW9uIiwiY29yZUpzRGF0YSIsIm1hc2tTcmNLZXkiLCJ1aWQiLCJleGVjIiwia2V5cyIsIklFX1BST1RPIiwiaXNNYXNrZWQiLCJmdW5jIiwiZnVuY1Byb3RvIiwiZnVuY1RvU3RyaW5nIiwidG9Tb3VyY2UiLCJyZVJlZ0V4cENoYXIiLCJyZUlzSG9zdEN0b3IiLCJyZUlzTmF0aXZlIiwiUmVnRXhwIiwicmVwbGFjZSIsImJhc2VJc05hdGl2ZSIsInBhdHRlcm4iLCJ0ZXN0IiwiZ2V0VmFsdWUiLCJnZXROYXRpdmUiLCJNYXAiLCJuYXRpdmVDcmVhdGUiLCJoYXNoQ2xlYXIiLCJoYXNoRGVsZXRlIiwiSEFTSF9VTkRFRklORUQiLCJoYXNoR2V0IiwiaGFzaEhhcyIsImhhc2hTZXQiLCJIYXNoIiwibWFwQ2FjaGVDbGVhciIsImlzS2V5YWJsZSIsImdldE1hcERhdGEiLCJtYXAiLCJtYXBDYWNoZURlbGV0ZSIsIm1hcENhY2hlR2V0IiwibWFwQ2FjaGVIYXMiLCJtYXBDYWNoZVNldCIsIk1hcENhY2hlIiwiTEFSR0VfQVJSQVlfU0laRSIsInN0YWNrU2V0IiwicGFpcnMiLCJTdGFjayIsImFycmF5RWFjaCIsIml0ZXJhdGVlIiwiZGVmaW5lUHJvcGVydHkiLCJiYXNlQXNzaWduVmFsdWUiLCJhc3NpZ25WYWx1ZSIsIm9ialZhbHVlIiwiY29weU9iamVjdCIsInNvdXJjZSIsInByb3BzIiwiY3VzdG9taXplciIsImlzTmV3IiwibmV3VmFsdWUiLCJiYXNlVGltZXMiLCJpc09iamVjdExpa2UiLCJhcmdzVGFnIiwiYmFzZUlzQXJndW1lbnRzIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJpc0FyZ3VtZW50cyIsImFyZ3VtZW50cyIsImlzQXJyYXkiLCJzdHViRmFsc2UiLCJmcmVlRXhwb3J0cyIsImV4cG9ydHMiLCJub2RlVHlwZSIsImZyZWVNb2R1bGUiLCJtb2R1bGVFeHBvcnRzIiwiQnVmZmVyIiwibmF0aXZlSXNCdWZmZXIiLCJpc0J1ZmZlciIsIk1BWF9TQUZFX0lOVEVHRVIiLCJyZUlzVWludCIsImlzSW5kZXgiLCJpc0xlbmd0aCIsImFycmF5VGFnIiwiYm9vbFRhZyIsImRhdGVUYWciLCJlcnJvclRhZyIsIm1hcFRhZyIsIm51bWJlclRhZyIsIm9iamVjdFRhZyIsInJlZ2V4cFRhZyIsInNldFRhZyIsInN0cmluZ1RhZyIsIndlYWtNYXBUYWciLCJhcnJheUJ1ZmZlclRhZyIsImRhdGFWaWV3VGFnIiwiZmxvYXQzMlRhZyIsImZsb2F0NjRUYWciLCJpbnQ4VGFnIiwiaW50MTZUYWciLCJpbnQzMlRhZyIsInVpbnQ4VGFnIiwidWludDhDbGFtcGVkVGFnIiwidWludDE2VGFnIiwidWludDMyVGFnIiwidHlwZWRBcnJheVRhZ3MiLCJiYXNlSXNUeXBlZEFycmF5IiwiYmFzZVVuYXJ5IiwiZnJlZVByb2Nlc3MiLCJwcm9jZXNzIiwibm9kZVV0aWwiLCJiaW5kaW5nIiwibm9kZUlzVHlwZWRBcnJheSIsImlzVHlwZWRBcnJheSIsImFycmF5TGlrZUtleXMiLCJpbmhlcml0ZWQiLCJpc0FyciIsImlzQXJnIiwiaXNCdWZmIiwiaXNUeXBlIiwic2tpcEluZGV4ZXMiLCJTdHJpbmciLCJpc1Byb3RvdHlwZSIsIkN0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvIiwib3ZlckFyZyIsInRyYW5zZm9ybSIsImFyZyIsIm5hdGl2ZUtleXMiLCJiYXNlS2V5cyIsImlzQXJyYXlMaWtlIiwiYmFzZUFzc2lnbiIsIm5hdGl2ZUtleXNJbiIsImJhc2VLZXlzSW4iLCJpc1Byb3RvIiwia2V5c0luIiwiYmFzZUFzc2lnbkluIiwiYWxsb2NVbnNhZmUiLCJjbG9uZUJ1ZmZlciIsImJ1ZmZlciIsImlzRGVlcCIsInNsaWNlIiwiY29weSIsImNvcHlBcnJheSIsImFycmF5RmlsdGVyIiwicHJlZGljYXRlIiwicmVzSW5kZXgiLCJzdHViQXJyYXkiLCJuYXRpdmVHZXRTeW1ib2xzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiZ2V0U3ltYm9scyIsInN5bWJvbCIsImNvcHlTeW1ib2xzIiwiYXJyYXlQdXNoIiwidmFsdWVzIiwib2Zmc2V0IiwiZ2V0UHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJnZXRTeW1ib2xzSW4iLCJjb3B5U3ltYm9sc0luIiwiYmFzZUdldEFsbEtleXMiLCJrZXlzRnVuYyIsInN5bWJvbHNGdW5jIiwiZ2V0QWxsS2V5cyIsImdldEFsbEtleXNJbiIsIkRhdGFWaWV3IiwiUHJvbWlzZSIsIlNldCIsIldlYWtNYXAiLCJwcm9taXNlVGFnIiwiZGF0YVZpZXdDdG9yU3RyaW5nIiwibWFwQ3RvclN0cmluZyIsInByb21pc2VDdG9yU3RyaW5nIiwic2V0Q3RvclN0cmluZyIsIndlYWtNYXBDdG9yU3RyaW5nIiwiZ2V0VGFnIiwiQXJyYXlCdWZmZXIiLCJyZXNvbHZlIiwiY3RvclN0cmluZyIsImluaXRDbG9uZUFycmF5IiwiaW5wdXQiLCJVaW50OEFycmF5IiwiY2xvbmVBcnJheUJ1ZmZlciIsImFycmF5QnVmZmVyIiwiYnl0ZUxlbmd0aCIsImNsb25lRGF0YVZpZXciLCJkYXRhVmlldyIsImJ5dGVPZmZzZXQiLCJhZGRNYXBFbnRyeSIsInBhaXIiLCJhcnJheVJlZHVjZSIsImFjY3VtdWxhdG9yIiwiaW5pdEFjY3VtIiwibWFwVG9BcnJheSIsImZvckVhY2giLCJDTE9ORV9ERUVQX0ZMQUciLCJjbG9uZU1hcCIsImNsb25lRnVuYyIsInJlRmxhZ3MiLCJjbG9uZVJlZ0V4cCIsInJlZ2V4cCIsImFkZFNldEVudHJ5IiwiYWRkIiwic2V0VG9BcnJheSIsImNsb25lU2V0Iiwic3ltYm9sUHJvdG8iLCJzeW1ib2xWYWx1ZU9mIiwidmFsdWVPZiIsImNsb25lU3ltYm9sIiwiY2xvbmVUeXBlZEFycmF5IiwidHlwZWRBcnJheSIsInN5bWJvbFRhZyIsImluaXRDbG9uZUJ5VGFnIiwib2JqZWN0Q3JlYXRlIiwiY3JlYXRlIiwiYmFzZUNyZWF0ZSIsImluaXRDbG9uZU9iamVjdCIsIkNMT05FX0ZMQVRfRkxBRyIsIkNMT05FX1NZTUJPTFNfRkxBRyIsImNsb25lYWJsZVRhZ3MiLCJiYXNlQ2xvbmUiLCJiaXRtYXNrIiwic3RhY2siLCJpc0ZsYXQiLCJpc0Z1bGwiLCJpc0Z1bmMiLCJzdGFja2VkIiwic3ViVmFsdWUiLCJjbG9uZURlZXAiLCJDb25maWdFcnJvciIsImNvdW50ZXIiLCJpZEdlbmVyYXRvciIsImlkIiwiQm9hcmQiLCJjYWxsYmFja3MiLCJjb25maWciLCJzdGF0ZSIsIklEIiwicGFyc2VkQ29uZmlnIiwicGFyc2VDb25maWciLCJhc3NpZ24iLCJpbml0aWFsVGlsZXMiLCJ0aWxlcyIsInN0YXR1cyIsInNldFN0YXRlIiwib3B0aW9ucyIsIm5leHRTdGF0ZSIsImRpbVgiLCJkaW1ZIiwiT2JzZXJ2ZXJFbnRpdHkiLCJvbk5vdGlmeSIsIkNvbW1hbmQiLCJleGVjdXRlIiwiTGVmdFR1cm5Db21tYW5kIiwic25ha2UiLCJoYW5kbGVJbnB1dCIsIlJpZ2h0VHVybkNvbW1hbmQiLCJEb3duVHVybkNvbW1hbmQiLCJVcFR1cm5Db21tYW5kIiwiU25ha2UiLCJzdHJhdGVneSIsIm5vdGlmaWVyIiwiY29tbWFuZCIsInZlbG9jaXR5Iiwibm90aWZpY2F0aW9uQnVmZmVyIiwicGF0aCIsInRpbWVyIiwic3Vic2NyaWJlIiwic3RhcnREaXJlY3Rpb24iLCJzdGFydFZlbG9jaXR5Iiwic3RhcnRYIiwic3RhcnRZIiwiYmFzZUxlbmd0aCIsImxpbWl0WCIsImxpbWl0WSIsImJvZHkiLCJkaXJlY3Rpb24iLCJiYXNlVmVsb2NpdHkiLCJsaW1pdHMiLCJuZXh0RGlyZWN0aW9uIiwibmV4dFZlbG9jaXR5IiwibmV4dEJvZHkiLCJjb21tYW5kUmVzdWx0IiwibmV4dFN0ZXAiLCJpc0FsaXZlIiwiY2FsY3VsYXRlUGF0aCIsImNhbGN1bGF0ZUNvbW1hbmQiLCJoZWFkIiwiY2FsY3VsYXRlVmVsb2NpdHkiLCJtb3ZlIiwiY2FsY3VsYXRlU3RlcENvbGxpc2lvblR5cGUiLCJub3RpZmljYXRpb24iLCJwcm9jZXNzTm90aWZpY2F0aW9uIiwidGFyZ2V0T2JqZWN0IiwiZW50aXR5IiwiZXZlbnQiLCJldmVudFR5cGUiLCJzdG9yZWROb3RpZmljYXRpb24iLCJwYXlsb2FkIiwicGlsbCIsInN0b3JlTm90aWZpY2F0aW9uIiwibm90aWZpY2F0aW9uUmVzdWx0IiwiZWF0IiwicGlsbFZhbHVlIiwiZGllIiwiY2FsY3VsYXRlVGFyZ2V0IiwibmV3VGFyZ2V0IiwiaXNPcHBvc2l0ZURpcmVjdGlvbiIsInZlbG9jaXR5WCIsInZlbG9jaXR5WSIsIm5leHRIZWFkIiwiY2FsY3VsYXRlTmV4dEhlYWQiLCJ1bnNoaWZ0IiwibmV4dFBvc1giLCJjb29yZGluYXRlcyIsIm5leHRQb3NZIiwiZnJvbSIsInRvIiwiZnJvbVgiLCJmcm9tWSIsInRvWCIsInRvWSIsImN1cnJEaXJlY3Rpb24iLCJnYWluIiwiYWRkaXRpb25hbE5vZGVzIiwidGFpbE5vZGUiLCJib2R5TGVuZ3RoIiwidGFpbE5vZGVDb29yZGluYXRlcyIsInBhdGhmaW5kZXIiLCJzdGFydFRpbWUiLCJnZXRUaW1lIiwiZW5kVGltZSIsInJ1bnRpbWUiLCJwcm9wYWdhdGVSdW50aW1lIiwiUGlsbCIsInN0YXJ0UG9zWCIsInN0YXJ0UG9zWSIsIm5ld1Bvc2l0aW9uIiwiY2FsY3VsYXRlTmV3UmFuZG9tUG9zaXRpb24iLCJzbmFrZXMiLCJnZXRFbnRpdHlMaXN0IiwiYXBwZW5kZWRTbmFrZUJvZGllcyIsImZyZWVQb3NpdGlvbnMiLCJjYWxjdWxhdGVGcmVlUG9zaXRpb25zIiwicmFuZG9tUG9zSW5kZXgiLCJ0cnVuYyIsInJhbmRvbSIsInJhbmRvbVBvc2l0aW9uIiwic25ha2VCb2R5IiwicG9zaXRpb25zIiwibm9kZSIsIlN1YmplY3QiLCJ1bnN1YnNjcmliZSIsIk5vdGlmaWVyIiwib2JzZXJ2ZXJzIiwibGFzdE5vZGVCdWZmZXIiLCJjYWxsZXJJRCIsImJvYXJkIiwicGlsbHMiLCJjYWxsZXJTbmFrZSIsImdldEVudGl0eUJ5SUQiLCJzdG9yZUxhc3ROb2RlIiwiZW5kT2ZCb2R5IiwiY29uc29sZSIsImxvZyIsIm9ic2VydmVyIiwiY2FsbGVyIiwibGFzdE5vZGVzIiwiaW5jbHVkZXMiLCJkZWxldGUiLCJsYXN0Tm9kZSIsIk1vZGVsIiwic3RyYXRlZ2llcyIsInByb3BhZ2F0ZUVycm9yIiwicGFzc2VkRG93bkNhbGxiYWNrcyIsInJ1bnRpbWVzIiwic2ltdWxhdGlvblNwZWVkIiwiRW50aXRpZXMiLCJpc0dhbWVPdmVyIiwic25ha2VDb25maWciLCJzdHJhdGVneU5hbWUiLCJzdHJhdGVneVR5cGUiLCJlbnJpY2hlZENvbmZpZyIsImVucmljaENvbmZpZyIsInNuYWtlQ29uZmlncyIsInBpbGxDb25maWdzIiwiYm9hcmRDb25maWciLCJtYWluQ29uZmlnIiwibWFpbiIsInNuYWtlRmFjdG9yeSIsInBpbGxDb25maWciLCJzbmFrZUlEIiwiZXJyb3IiLCJyZXR1cm5FbnRpdHkiLCJTdHJhdGVneSIsIlBsYWluQVN0YXJTdHJhdGVneSIsInNldFRhcmdldCIsInBsYWluQVN0YXJTdHJhdGVneSIsIm9ubG9hZCIsIm1vZGVsIiwibnVtYmVyT2ZDb2x1bW5zIiwibnVtYmVyT2ZSb3dzIiwidmlld1BvcnRXaWR0aCIsInZpZXdQb3J0SGVpZ2h0IiwidGlsZVdpZHRoIiwidGlsZUhlaWdodCIsInZpZXdQb3J0IiwiaW5pdFZpZXdQb3J0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid3JhcHBlZENhbnZhcyIsIm1haW5sb29wIiwiaW5pdENvbXBvbmVudHMiLCJNYWlubG9vcCIsInVwZGF0ZVN0YXRTY3JlZW4iLCJjbGVhclNjZW5lIiwiZHJhd0JvYXJkIiwiZWxlbWVudCIsImNyZWF0ZUNpcmNsZSIsImhvaXN0T24iLCJhcHBlbmRDaGlsZCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJ2aWV3UG9ydFdyYXBwZXJFbGVtZW50Iiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwiYm9yZGVyIiwic3BlZWRTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJkYXNoYm9hcmQiLCJyZXN0YXJ0QnV0dG9uIiwic3RvcEJ1dHRvbiIsInN0YXJ0QnV0dG9uIiwic3RhdFNjcmVlbiIsInNuYWtlU3RhdFNjcmVlbiIsImNvbG9yRGlzcGxheSIsImNvbG9yTGFiZWwiLCJjb2xvckRpc3BsYXlDb250ZW50Iiwic2NvcmVEaXNwbGF5Iiwic2NvcmVMYWJlbCIsInNjb3JlRGlzcGxheUNvbnRlbnQiLCJzdGF0cyIsInBhcmFncmFwaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0NBQUE7Ozs7Ozs7Q0FPQSxHQUFDLFVBQVNBLENBQVQsRUFBVztDQUFDLGFBQVNDLENBQVQsQ0FBV0QsQ0FBWCxFQUFhO0NBQUMsVUFBR0UsSUFBRUMsRUFBRUYsQ0FBRixDQUFGLEVBQU8sRUFBRUQsSUFBRUksSUFBRUMsQ0FBTixDQUFWLEVBQW1CO0NBQUMsYUFBSUMsS0FBR04sSUFBRUksQ0FBTCxFQUFPQSxJQUFFSixDQUFULEVBQVdPLEVBQUVQLENBQUYsRUFBSU0sQ0FBSixDQUFYLEVBQWtCTixJQUFFUSxJQUFFQyxDQUFKLEtBQVFDLElBQUVDLElBQUVDLENBQUYsR0FBSSxHQUFKLElBQVNaLElBQUVRLENBQVgsSUFBYyxDQUFDLElBQUVHLENBQUgsSUFBTUQsQ0FBdEIsRUFBd0JGLElBQUVSLENBQTFCLEVBQTRCWSxJQUFFLENBQXRDLENBQWxCLEVBQTJEQSxHQUEzRCxFQUErREMsSUFBRSxDQUFyRSxFQUF1RVAsS0FBR1EsQ0FBMUU7Q0FBNkUsY0FBR0MsRUFBRUQsQ0FBRixHQUFLUixLQUFHUSxDQUFSLEVBQVUsRUFBRUQsQ0FBRixJQUFLLEdBQWxCLEVBQXNCO0NBQUNHLGdCQUFFLENBQUMsQ0FBSCxDQUFLO0NBQU07Q0FBL0csU0FBK0dDLEVBQUVYLElBQUVRLENBQUosR0FBT0ksRUFBRVIsQ0FBRixFQUFJTSxDQUFKLENBQVAsRUFBY0EsSUFBRSxDQUFDLENBQWpCO0NBQW1CO0NBQUMsU0FBSUYsSUFBRSxNQUFJLEVBQVY7Q0FBQSxRQUFhUixJQUFFLENBQWY7Q0FBQSxRQUFpQkYsSUFBRSxDQUFuQjtDQUFBLFFBQXFCTSxJQUFFLEVBQXZCO0NBQUEsUUFBMEJDLElBQUUsRUFBNUI7Q0FB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
