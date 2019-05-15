(function () {
    'use strict';

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    var Entity = function Entity() {
        _classCallCheck(this, Entity);

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

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

    /** Detect free variable `global` from Node.js. */
    var freeGlobal = _typeof(commonjsGlobal) == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

    var _freeGlobal = freeGlobal;

    var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

    /** Detect free variable `self`. */
    var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof$1(self)) == 'object' && self && self.Object === Object && self;

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

    var _typeof$2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
      var type = typeof value === 'undefined' ? 'undefined' : _typeof$2(value);
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

    var _typeof$3 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */
    function isKeyable(value) {
      var type = typeof value === 'undefined' ? 'undefined' : _typeof$3(value);
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

    var _typeof$4 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
      return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof$4(value)) == 'object';
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

    function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    var ConfigError = function (_Error) {
        _inherits(ConfigError, _Error);

        function ConfigError(message) {
            _classCallCheck$1(this, ConfigError);

            var _this = _possibleConstructorReturn(this, (ConfigError.__proto__ || Object.getPrototypeOf(ConfigError)).call(this, message));

            _this.name = 'ConfigError';
            return _this;
        }

        return ConfigError;
    }(Error);

    function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    var CoordinateError = function (_Error) {
        _inherits$1(CoordinateError, _Error);

        function CoordinateError(message) {
            _classCallCheck$2(this, CoordinateError);

            var _this = _possibleConstructorReturn$1(this, (CoordinateError.__proto__ || Object.getPrototypeOf(CoordinateError)).call(this, message));

            _this.name = 'IntCoordinateError';
            return _this;
        }

        return CoordinateError;
    }(Error);

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    var IntCoordinate = function () {
        function IntCoordinate(x, y) {
            var nullPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            _classCallCheck$3(this, IntCoordinate);

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

    var counter = 0;
    function idGenerator() {
        var id = 'id-' + counter++;
        return id;
    }

    function EuclideanDistance(from, to) {
        return Math.sqrt(Math.pow(from.coordinates.x - to.coordinates.x, 2) + Math.pow(from.coordinates.y - to.coordinates.y, 2));
    }

    var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn$2(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    var Board = function (_Entity) {
        _inherits$2(Board, _Entity);

        function Board(callbacks, config) {
            _classCallCheck$4(this, Board);

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

        _createClass$1(Board, [{
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

    function _classCallCheck$5(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    var ObserverEntity = function ObserverEntity() {
        _classCallCheck$5(this, ObserverEntity);

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

    function _classCallCheck$6(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    var Command = function Command() {
        _classCallCheck$6(this, Command);

        if (new.target === Command) {
            throw new Error("Abstract class. Cannot be instantiated!");
        }

        if (this.execute === void 0 || typeof this.execute !== 'function') {
            throw new Error("Abstract method 'execute' must be overriden!");
        }
    };

    var _createClass$2 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    function _classCallCheck$7(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn$3(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    var LeftTurnCommand = function (_Command) {
        _inherits$3(LeftTurnCommand, _Command);

        function LeftTurnCommand() {
            _classCallCheck$7(this, LeftTurnCommand);

            return _possibleConstructorReturn$3(this, (LeftTurnCommand.__proto__ || Object.getPrototypeOf(LeftTurnCommand)).call(this));
        }

        _createClass$2(LeftTurnCommand, [{
            key: 'execute',
            value: function execute(snake) {
                return snake.handleInput('LEFT');
            }
        }]);

        return LeftTurnCommand;
    }(Command);

    var _createClass$3 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    function _classCallCheck$8(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn$4(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits$4(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    var RightTurnCommand = function (_Command) {
        _inherits$4(RightTurnCommand, _Command);

        function RightTurnCommand() {
            _classCallCheck$8(this, RightTurnCommand);

            return _possibleConstructorReturn$4(this, (RightTurnCommand.__proto__ || Object.getPrototypeOf(RightTurnCommand)).call(this));
        }

        _createClass$3(RightTurnCommand, [{
            key: 'execute',
            value: function execute(snake) {
                return snake.handleInput('RIGHT');
            }
        }]);

        return RightTurnCommand;
    }(Command);

    var _createClass$4 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    function _classCallCheck$9(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn$5(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits$5(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    var DownTurnCommand = function (_Command) {
        _inherits$5(DownTurnCommand, _Command);

        function DownTurnCommand() {
            _classCallCheck$9(this, DownTurnCommand);

            return _possibleConstructorReturn$5(this, (DownTurnCommand.__proto__ || Object.getPrototypeOf(DownTurnCommand)).call(this));
        }

        _createClass$4(DownTurnCommand, [{
            key: 'execute',
            value: function execute(snake) {
                return snake.handleInput('DOWN');
            }
        }]);

        return DownTurnCommand;
    }(Command);

    var _createClass$5 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    function _classCallCheck$a(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn$6(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits$6(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    var UpTurnCommand = function (_Command) {
        _inherits$6(UpTurnCommand, _Command);

        function UpTurnCommand() {
            _classCallCheck$a(this, UpTurnCommand);

            return _possibleConstructorReturn$6(this, (UpTurnCommand.__proto__ || Object.getPrototypeOf(UpTurnCommand)).call(this));
        }

        _createClass$5(UpTurnCommand, [{
            key: 'execute',
            value: function execute(snake) {
                return snake.handleInput('UP');
            }
        }]);

        return UpTurnCommand;
    }(Command);

    var _createClass$6 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

    function _classCallCheck$b(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn$7(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits$7(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    var Snake = function (_ObserverEntity) {
        _inherits$7(Snake, _ObserverEntity);

        function Snake(callbacks, config, strategy, notifier) {
            _classCallCheck$b(this, Snake);

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

        _createClass$6(Snake, [{
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

    var _createClass$7 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    function _toConsumableArray$1(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

    function _classCallCheck$c(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn$8(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits$8(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    var Pill = function (_ObserverEntity) {
        _inherits$8(Pill, _ObserverEntity);

        function Pill(callbacks, config, notifier) {
            _classCallCheck$c(this, Pill);

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

        _createClass$7(Pill, [{
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

    function _classCallCheck$d(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    var Subject = function Subject() {
        _classCallCheck$d(this, Subject);

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

    var _createClass$8 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    function _classCallCheck$e(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn$9(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits$9(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    var Notifier = function (_Subject) {
        _inherits$9(Notifier, _Subject);

        function Notifier(callbacks) {
            _classCallCheck$e(this, Notifier);

            var _this = _possibleConstructorReturn$9(this, (Notifier.__proto__ || Object.getPrototypeOf(Notifier)).call(this));

            _this.observers = new Set();
            _this.callbacks = callbacks;
            _this.lastNodeBuffer = {};

            _this.subscribe = _this.subscribe.bind(_this);
            return _this;
        }

        _createClass$8(Notifier, [{
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

    var _typeof$5 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

    var _createClass$9 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    function _classCallCheck$f(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    var Model = function () {
        function Model(config, strategies) {
            _classCallCheck$f(this, Model);

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

        _createClass$9(Model, [{
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
                    if ((typeof boardConfig === 'undefined' ? 'undefined' : _typeof$5(boardConfig)) == 'object') {
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

    function _classCallCheck$g(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    var Strategy = function Strategy() {
        _classCallCheck$g(this, Strategy);

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

    // shim for using process in browser
    if (typeof global.setTimeout === 'function') ;
    if (typeof global.clearTimeout === 'function') ;

    // from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
    var performance = global.performance || {};
    var performanceNow = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function () {
        return new Date().getTime();
    };

    var _createClass$a = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    function _classCallCheck$h(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn$a(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits$a(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    var PlainAStarStrategy = function (_Strategy) {
        _inherits$a(PlainAStarStrategy, _Strategy);

        function PlainAStarStrategy(callbacks) {
            _classCallCheck$h(this, PlainAStarStrategy);

            var _this = _possibleConstructorReturn$a(this, (PlainAStarStrategy.__proto__ || Object.getPrototypeOf(PlainAStarStrategy)).call(this));

            _this.callbacks = callbacks;
            return _this;
        }

        _createClass$a(PlainAStarStrategy, [{
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

    var strtategieIndex = {
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

    function simulate(times, config) {
        var runs = [];
        var model = void 0;

        for (var i = 0; i < times; i++) {
            model = new Model(config, strtategieIndex);
            var board = model.getEntityList().board;
            var dimensions = board.dimensions;
            while (!model.isGameOver()) {
                model.update();
            }

            var snakes = model.getEntityList().snakes;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = snakes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var snake = _step.value;

                    runs.push({
                        id: snake.ID,
                        score: calculateFitness(snake.bodyLength, dimensions)
                    });
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
        createDump(runs, model, times);
    }

    function createDump(runs, model, times) {
        var snakes = model.getEntityList().snakes;
        var board = model.getEntityList().board;
        var dimensions = board.dimensions;

        var _loop = function _loop(snake) {
            var snakeStats = runs.filter(function (run) {
                return run.id == snake.ID;
            });
            var scoreSum = 0;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = snakeStats[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var snakeStat = _step3.value;

                    scoreSum += snakeStat.score;
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

            var fitness = scoreSum / times;
            console.log('Id: ' + snake.ID + '\n' + 'strategy: ' + snake.config.strategy + '\n' + 'fitness: ' + fitness);
        };

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = snakes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var snake = _step2.value;

                _loop(snake);
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

    function calculateFitness(score, dimensions) {
        return score / (dimensions.dimX * dimensions.dimY);
    }

    var n = process.argv[0] || 100;

    simulate(50, config);

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltdWxhdGUuYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9zcmMvanMvQWJzdHJhY3RDbGFzc2VzL0VudGl0eS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9lcS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrQ2xlYXIuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja0RlbGV0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrR2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tIYXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzRnVuY3Rpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3JlSnNEYXRhLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNNYXNrZWQuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL190b1NvdXJjZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFZhbHVlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TmF0aXZlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTWFwLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaENsZWFyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaERlbGV0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hHZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoSGFzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaFNldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0hhc2guanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXlhYmxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVHZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUhhcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTWFwQ2FjaGUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja1NldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N0YWNrLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlFYWNoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZGVmaW5lUHJvcGVydHkuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQXNzaWduVmFsdWUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NpZ25WYWx1ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcHlPYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVGltZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc0FyZ3VtZW50cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcmd1bWVudHMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJGYWxzZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNCdWZmZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc0luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0xlbmd0aC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVW5hcnkuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19ub2RlVXRpbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb3ZlckFyZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlS2V5cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcnJheUxpa2UuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2tleXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQXNzaWduLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlS2V5c0luLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUtleXNJbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gva2V5c0luLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUFzc2lnbkluLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVCdWZmZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5QXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUZpbHRlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvc3R1YkFycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0U3ltYm9scy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcHlTeW1ib2xzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlQdXNoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UHJvdG90eXBlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0U3ltYm9sc0luLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29weVN5bWJvbHNJbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0QWxsS2V5cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldEFsbEtleXNJbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0RhdGFWaWV3LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fUHJvbWlzZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1NldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1dlYWtNYXAuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRUYWcuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pbml0Q2xvbmVBcnJheS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1VpbnQ4QXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jbG9uZUFycmF5QnVmZmVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVEYXRhVmlldy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FkZE1hcEVudHJ5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlSZWR1Y2UuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBUb0FycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVNYXAuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jbG9uZVJlZ0V4cC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FkZFNldEVudHJ5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lU2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVTeW1ib2wuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jbG9uZVR5cGVkQXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pbml0Q2xvbmVCeVRhZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VDcmVhdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pbml0Q2xvbmVPYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQ2xvbmUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2Nsb25lRGVlcC5qcyIsIi4uL3NyYy9qcy9lcnJvcnMvQ29uZmlnRXJyb3IuanMiLCIuLi9zcmMvanMvZXJyb3JzL0ludENvb3JkaW5hdGVFcnJvci5qcyIsIi4uL3NyYy9qcy9pbnRDb29yZGluYXRlLmpzIiwiLi4vc3JjL2pzL2N1c3RvbVV0aWxzLmpzIiwiLi4vc3JjL2pzL2JvYXJkLmpzIiwiLi4vc3JjL2pzL0Fic3RyYWN0Q2xhc3Nlcy9PYnNlcnZlckVudGl0eS5qcyIsIi4uL3NyYy9qcy9BYnN0cmFjdENsYXNzZXMvQ29tbWFuZC5qcyIsIi4uL3NyYy9qcy9Db21tYW5kcy9MZWZ0VHVybkNvbW1hbmQuanMiLCIuLi9zcmMvanMvQ29tbWFuZHMvUmlnaHRUdXJuQ29tbWFuZC5qcyIsIi4uL3NyYy9qcy9Db21tYW5kcy9Eb3duVHVybkNvbW1hbmQuanMiLCIuLi9zcmMvanMvQ29tbWFuZHMvVXBUdXJuQ29tbWFuZC5qcyIsIi4uL3NyYy9qcy9zbmFrZS5qcyIsIi4uL3NyYy9qcy9waWxsLmpzIiwiLi4vc3JjL2pzL0Fic3RyYWN0Q2xhc3Nlcy9TdWJqZWN0LmpzIiwiLi4vc3JjL2pzL25vdGlmaWVyLmpzIiwiLi4vc3JjL2pzL21vZGVsLmpzIiwiLi4vc3JjL2pzL0Fic3RyYWN0Q2xhc3Nlcy9TdHJhdGVneS5qcyIsIi4uL3NyYy9qcy9wYXRoZmluZGluZy1hbGdvcml0aG1zL2FTdGFyQWxnb3JpdGhtLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MtZXM2L2Jyb3dzZXIuanMiLCIuLi9zcmMvanMvcGF0aGZpbmRpbmctYWxnb3JpdGhtcy9wbGFpbkFTdGFyLmpzIiwiLi4vc3JjL2pzL3BhdGhmaW5kaW5nLWFsZ29yaXRobXMvaW5kZXguanMiLCIuLi9zaW11bGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRpdHl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgaWYgKG5ldy50YXJnZXQgPT09IEVudGl0eSl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBYnN0cmFjdCBjbGFzcy4gQ2Fubm90IGJlIGluc3RhbnRpYXRlZCFcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLnVwZGF0ZSA9PT0gdm9pZCAwIHx8IHR5cGVvZiB0aGlzLnVwZGF0ZSAhPT0gJ2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBYnN0cmFjdCBtZXRob2QgJ3VwZGF0ZScgbXVzdCBiZSBvdmVycmlkZW4hXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5yZXNldCA9PT0gdm9pZCAwIHx8IHR5cGVvZiB0aGlzLnJlc2V0ICE9PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0IG1ldGhvZCAncmVzZXQnIG11c3QgYmUgb3ZlcnJpZGVuIVwiKTtcbiAgICAgICAgfVxuICAgIH1cbn07IiwiLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUNsZWFyO1xuIiwiLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXE7XG4iLCJ2YXIgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzb2NJbmRleE9mO1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICAtLXRoaXMuc2l6ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlRGVsZXRlO1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUdldDtcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlSGFzO1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgICsrdGhpcy5zaXplO1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlU2V0O1xuIiwidmFyIGxpc3RDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlQ2xlYXInKSxcbiAgICBsaXN0Q2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVEZWxldGUnKSxcbiAgICBsaXN0Q2FjaGVHZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVHZXQnKSxcbiAgICBsaXN0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVIYXMnKSxcbiAgICBsaXN0Q2FjaGVTZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RDYWNoZTtcbiIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBTdGFja1xuICovXG5mdW5jdGlvbiBzdGFja0NsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0NsZWFyO1xuIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIHJlc3VsdCA9IGRhdGFbJ2RlbGV0ZSddKGtleSk7XG5cbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrRGVsZXRlO1xuIiwiLyoqXG4gKiBHZXRzIHRoZSBzdGFjayB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tHZXQoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrR2V0O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0hhcztcbiIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcbiIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheXMgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWcodmFsdWUpO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZyB8fCB0YWcgPT0gYXN5bmNUYWcgfHwgdGFnID09IHByb3h5VGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb3JlSnNEYXRhO1xuIiwidmFyIGNvcmVKc0RhdGEgPSByZXF1aXJlKCcuL19jb3JlSnNEYXRhJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXNrZWQ7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Tb3VyY2U7XG4iLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTWFza2VkID0gcmVxdWlyZSgnLi9faXNNYXNrZWQnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gaXNGdW5jdGlvbih2YWx1ZSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmF0aXZlO1xuIiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VmFsdWU7XG4iLCJ2YXIgYmFzZUlzTmF0aXZlID0gcmVxdWlyZSgnLi9fYmFzZUlzTmF0aXZlJyksXG4gICAgZ2V0VmFsdWUgPSByZXF1aXJlKCcuL19nZXRWYWx1ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlQ3JlYXRlO1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoQ2xlYXI7XG4iLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hEZWxldGU7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoR2V0O1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IChkYXRhW2tleV0gIT09IHVuZGVmaW5lZCkgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEhhcztcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICB0aGlzLnNpemUgKz0gdGhpcy5oYXMoa2V5KSA/IDAgOiAxO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaFNldDtcbiIsInZhciBoYXNoQ2xlYXIgPSByZXF1aXJlKCcuL19oYXNoQ2xlYXInKSxcbiAgICBoYXNoRGVsZXRlID0gcmVxdWlyZSgnLi9faGFzaERlbGV0ZScpLFxuICAgIGhhc2hHZXQgPSByZXF1aXJlKCcuL19oYXNoR2V0JyksXG4gICAgaGFzaEhhcyA9IHJlcXVpcmUoJy4vX2hhc2hIYXMnKSxcbiAgICBoYXNoU2V0ID0gcmVxdWlyZSgnLi9faGFzaFNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoO1xuIiwidmFyIEhhc2ggPSByZXF1aXJlKCcuL19IYXNoJyksXG4gICAgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuc2l6ZSA9IDA7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUNsZWFyO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5YWJsZTtcbiIsInZhciBpc0tleWFibGUgPSByZXF1aXJlKCcuL19pc0tleWFibGUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hcERhdGE7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVEZWxldGU7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlR2V0O1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVIYXM7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLFxuICAgICAgc2l6ZSA9IGRhdGEuc2l6ZTtcblxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplICs9IGRhdGEuc2l6ZSA9PSBzaXplID8gMCA6IDE7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlU2V0O1xuIiwidmFyIG1hcENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19tYXBDYWNoZUNsZWFyJyksXG4gICAgbWFwQ2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19tYXBDYWNoZURlbGV0ZScpLFxuICAgIG1hcENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVHZXQnKSxcbiAgICBtYXBDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX21hcENhY2hlSGFzJyksXG4gICAgbWFwQ2FjaGVTZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXBDYWNoZTtcbiIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKlxuICogU2V0cyB0aGUgc3RhY2sgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgc3RhY2sgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoZGF0YSBpbnN0YW5jZW9mIExpc3RDYWNoZSkge1xuICAgIHZhciBwYWlycyA9IGRhdGEuX19kYXRhX187XG4gICAgaWYgKCFNYXAgfHwgKHBhaXJzLmxlbmd0aCA8IExBUkdFX0FSUkFZX1NJWkUgLSAxKSkge1xuICAgICAgcGFpcnMucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgdGhpcy5zaXplID0gKytkYXRhLnNpemU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGUocGFpcnMpO1xuICB9XG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrU2V0O1xuIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIHN0YWNrQ2xlYXIgPSByZXF1aXJlKCcuL19zdGFja0NsZWFyJyksXG4gICAgc3RhY2tEZWxldGUgPSByZXF1aXJlKCcuL19zdGFja0RlbGV0ZScpLFxuICAgIHN0YWNrR2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tHZXQnKSxcbiAgICBzdGFja0hhcyA9IHJlcXVpcmUoJy4vX3N0YWNrSGFzJyksXG4gICAgc3RhY2tTZXQgPSByZXF1aXJlKCcuL19zdGFja1NldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGUoZW50cmllcyk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFN0YWNrYC5cblN0YWNrLnByb3RvdHlwZS5jbGVhciA9IHN0YWNrQ2xlYXI7XG5TdGFjay5wcm90b3R5cGVbJ2RlbGV0ZSddID0gc3RhY2tEZWxldGU7XG5TdGFjay5wcm90b3R5cGUuZ2V0ID0gc3RhY2tHZXQ7XG5TdGFjay5wcm90b3R5cGUuaGFzID0gc3RhY2tIYXM7XG5TdGFjay5wcm90b3R5cGUuc2V0ID0gc3RhY2tTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhY2s7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5mb3JFYWNoYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlFYWNoKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSA9PT0gZmFsc2UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlFYWNoO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgdmFyIGZ1bmMgPSBnZXROYXRpdmUoT2JqZWN0LCAnZGVmaW5lUHJvcGVydHknKTtcbiAgICBmdW5jKHt9LCAnJywge30pO1xuICAgIHJldHVybiBmdW5jO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVQcm9wZXJ0eTtcbiIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2RlZmluZVByb3BlcnR5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGFzc2lnblZhbHVlYCBhbmQgYGFzc2lnbk1lcmdlVmFsdWVgIHdpdGhvdXRcbiAqIHZhbHVlIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgPT0gJ19fcHJvdG9fXycgJiYgZGVmaW5lUHJvcGVydHkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShvYmplY3QsIGtleSwge1xuICAgICAgJ2NvbmZpZ3VyYWJsZSc6IHRydWUsXG4gICAgICAnZW51bWVyYWJsZSc6IHRydWUsXG4gICAgICAndmFsdWUnOiB2YWx1ZSxcbiAgICAgICd3cml0YWJsZSc6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUFzc2lnblZhbHVlO1xuIiwidmFyIGJhc2VBc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ25WYWx1ZScpLFxuICAgIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEFzc2lnbnMgYHZhbHVlYCB0byBga2V5YCBvZiBgb2JqZWN0YCBpZiB0aGUgZXhpc3RpbmcgdmFsdWUgaXMgbm90IGVxdWl2YWxlbnRcbiAqIHVzaW5nIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBmb3IgZXF1YWxpdHkgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldO1xuICBpZiAoIShoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBlcShvYmpWYWx1ZSwgdmFsdWUpKSB8fFxuICAgICAgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkpIHtcbiAgICBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc2lnblZhbHVlO1xuIiwidmFyIGFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYXNzaWduVmFsdWUnKSxcbiAgICBiYXNlQXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19iYXNlQXNzaWduVmFsdWUnKTtcblxuLyoqXG4gKiBDb3BpZXMgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IGlkZW50aWZpZXJzIHRvIGNvcHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb3BpZWQgdmFsdWVzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weU9iamVjdChzb3VyY2UsIHByb3BzLCBvYmplY3QsIGN1c3RvbWl6ZXIpIHtcbiAgdmFyIGlzTmV3ID0gIW9iamVjdDtcbiAgb2JqZWN0IHx8IChvYmplY3QgPSB7fSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuXG4gICAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgICAgPyBjdXN0b21pemVyKG9iamVjdFtrZXldLCBzb3VyY2Vba2V5XSwga2V5LCBvYmplY3QsIHNvdXJjZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG5ld1ZhbHVlID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIGlmIChpc05ldykge1xuICAgICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weU9iamVjdDtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRpbWVzO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNBcmd1bWVudHM7XG4iLCJ2YXIgYmFzZUlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9fYmFzZUlzQXJndW1lbnRzJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcmd1bWVudHM7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJGYWxzZTtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpLFxuICAgIHN0dWJGYWxzZSA9IHJlcXVpcmUoJy4vc3R1YkZhbHNlJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0J1ZmZlcjtcbiIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgfHwgcmVJc1VpbnQudGVzdCh2YWx1ZSkpICYmXG4gICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSW5kZXg7XG4iLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1R5cGVkQXJyYXlgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJlxuICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnKHZhbHVlKV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzVHlwZWRBcnJheTtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5hcnk7XG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vZGVVdGlsO1xuIiwidmFyIGJhc2VJc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL19iYXNlSXNUeXBlZEFycmF5JyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc1R5cGVkQXJyYXk7XG4iLCJ2YXIgYmFzZVRpbWVzID0gcmVxdWlyZSgnLi9fYmFzZVRpbWVzJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpLFxuICAgICAgaXNBcmcgPSAhaXNBcnIgJiYgaXNBcmd1bWVudHModmFsdWUpLFxuICAgICAgaXNCdWZmID0gIWlzQXJyICYmICFpc0FyZyAmJiBpc0J1ZmZlcih2YWx1ZSksXG4gICAgICBpc1R5cGUgPSAhaXNBcnIgJiYgIWlzQXJnICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHZhbHVlKSxcbiAgICAgIHNraXBJbmRleGVzID0gaXNBcnIgfHwgaXNBcmcgfHwgaXNCdWZmIHx8IGlzVHlwZSxcbiAgICAgIHJlc3VsdCA9IHNraXBJbmRleGVzID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKSA6IFtdLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChcbiAgICAgICAgICAgLy8gU2FmYXJpIDkgaGFzIGVudW1lcmFibGUgYGFyZ3VtZW50cy5sZW5ndGhgIGluIHN0cmljdCBtb2RlLlxuICAgICAgICAgICBrZXkgPT0gJ2xlbmd0aCcgfHxcbiAgICAgICAgICAgLy8gTm9kZS5qcyAwLjEwIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIGJ1ZmZlcnMuXG4gICAgICAgICAgIChpc0J1ZmYgJiYgKGtleSA9PSAnb2Zmc2V0JyB8fCBrZXkgPT0gJ3BhcmVudCcpKSB8fFxuICAgICAgICAgICAvLyBQaGFudG9tSlMgMiBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiB0eXBlZCBhcnJheXMuXG4gICAgICAgICAgIChpc1R5cGUgJiYgKGtleSA9PSAnYnVmZmVyJyB8fCBrZXkgPT0gJ2J5dGVMZW5ndGgnIHx8IGtleSA9PSAnYnl0ZU9mZnNldCcpKSB8fFxuICAgICAgICAgICAvLyBTa2lwIGluZGV4IHByb3BlcnRpZXMuXG4gICAgICAgICAgIGlzSW5kZXgoa2V5LCBsZW5ndGgpXG4gICAgICAgICkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TGlrZUtleXM7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQcm90b3R5cGU7XG4iLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyQXJnO1xuIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzO1xuIiwidmFyIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5cycpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXM7XG4iLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZTtcbiIsInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUtleXMnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5cztcbiIsInZhciBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5hc3NpZ25gIHdpdGhvdXQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgc291cmNlc1xuICogb3IgYGN1c3RvbWl6ZXJgIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ24ob2JqZWN0LCBzb3VyY2UpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiBjb3B5T2JqZWN0KHNvdXJjZSwga2V5cyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VBc3NpZ247XG4iLCIvKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZVxuICogW2BPYmplY3Qua2V5c2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZXhjZXB0IHRoYXQgaXQgaW5jbHVkZXMgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydGllcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gbmF0aXZlS2V5c0luKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGlmIChvYmplY3QgIT0gbnVsbCkge1xuICAgIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzSW47XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpLFxuICAgIG5hdGl2ZUtleXNJbiA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXNJbicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNJbmAgd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5c0luKG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5c0luKG9iamVjdCk7XG4gIH1cbiAgdmFyIGlzUHJvdG8gPSBpc1Byb3RvdHlwZShvYmplY3QpLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmICghKGtleSA9PSAnY29uc3RydWN0b3InICYmIChpc1Byb3RvIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzSW47XG4iLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5c0luID0gcmVxdWlyZSgnLi9fYmFzZUtleXNJbicpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzSW4obmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYicsICdjJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqL1xuZnVuY3Rpb24ga2V5c0luKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0LCB0cnVlKSA6IGJhc2VLZXlzSW4ob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzSW47XG4iLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuL2tleXNJbicpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmFzc2lnbkluYCB3aXRob3V0IHN1cHBvcnQgZm9yIG11bHRpcGxlIHNvdXJjZXNcbiAqIG9yIGBjdXN0b21pemVyYCBmdW5jdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduSW4ob2JqZWN0LCBzb3VyY2UpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiBjb3B5T2JqZWN0KHNvdXJjZSwga2V5c0luKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUFzc2lnbkluO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIGFsbG9jVW5zYWZlID0gQnVmZmVyID8gQnVmZmVyLmFsbG9jVW5zYWZlIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiAgYGJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUJ1ZmZlcihidWZmZXIsIGlzRGVlcCkge1xuICBpZiAoaXNEZWVwKSB7XG4gICAgcmV0dXJuIGJ1ZmZlci5zbGljZSgpO1xuICB9XG4gIHZhciBsZW5ndGggPSBidWZmZXIubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gYWxsb2NVbnNhZmUgPyBhbGxvY1Vuc2FmZShsZW5ndGgpIDogbmV3IGJ1ZmZlci5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIGJ1ZmZlci5jb3B5KHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVCdWZmZXI7XG4iLCIvKipcbiAqIENvcGllcyB0aGUgdmFsdWVzIG9mIGBzb3VyY2VgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHNvdXJjZSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheT1bXV0gVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIHRvLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlBcnJheShzb3VyY2UsIGFycmF5KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gc291cmNlLmxlbmd0aDtcblxuICBhcnJheSB8fCAoYXJyYXkgPSBBcnJheShsZW5ndGgpKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtpbmRleF0gPSBzb3VyY2VbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5QXJyYXk7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5maWx0ZXJgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmaWx0ZXJlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlGaWx0ZXIoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzSW5kZXggPSAwLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmVzdWx0W3Jlc0luZGV4KytdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlGaWx0ZXI7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBuZXcgZW1wdHkgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBlbXB0eSBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGFycmF5cyA9IF8udGltZXMoMiwgXy5zdHViQXJyYXkpO1xuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5cyk7XG4gKiAvLyA9PiBbW10sIFtdXVxuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5c1swXSA9PT0gYXJyYXlzWzFdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIHN0dWJBcnJheSgpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJBcnJheTtcbiIsInZhciBhcnJheUZpbHRlciA9IHJlcXVpcmUoJy4vX2FycmF5RmlsdGVyJyksXG4gICAgc3R1YkFycmF5ID0gcmVxdWlyZSgnLi9zdHViQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHMgPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHJldHVybiBhcnJheUZpbHRlcihuYXRpdmVHZXRTeW1ib2xzKG9iamVjdCksIGZ1bmN0aW9uKHN5bWJvbCkge1xuICAgIHJldHVybiBwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iamVjdCwgc3ltYm9sKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFN5bWJvbHM7XG4iLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpO1xuXG4vKipcbiAqIENvcGllcyBvd24gc3ltYm9scyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyBmcm9tLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIHRvLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weVN5bWJvbHMoc291cmNlLCBvYmplY3QpIHtcbiAgcmV0dXJuIGNvcHlPYmplY3Qoc291cmNlLCBnZXRTeW1ib2xzKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weVN5bWJvbHM7XG4iLCIvKipcbiAqIEFwcGVuZHMgdGhlIGVsZW1lbnRzIG9mIGB2YWx1ZXNgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhcHBlbmQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlQdXNoKGFycmF5LCB2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgb2Zmc2V0ID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbb2Zmc2V0ICsgaW5kZXhdID0gdmFsdWVzW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlQdXNoO1xuIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIGdldFByb3RvdHlwZSA9IG92ZXJBcmcoT2JqZWN0LmdldFByb3RvdHlwZU9mLCBPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFByb3RvdHlwZTtcbiIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBnZXRQcm90b3R5cGUgPSByZXF1aXJlKCcuL19nZXRQcm90b3R5cGUnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpLFxuICAgIHN0dWJBcnJheSA9IHJlcXVpcmUoJy4vc3R1YkFycmF5Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHNJbiA9ICFuYXRpdmVHZXRTeW1ib2xzID8gc3R1YkFycmF5IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgd2hpbGUgKG9iamVjdCkge1xuICAgIGFycmF5UHVzaChyZXN1bHQsIGdldFN5bWJvbHMob2JqZWN0KSk7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlKG9iamVjdCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0U3ltYm9sc0luO1xuIiwidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAgZ2V0U3ltYm9sc0luID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9sc0luJyk7XG5cbi8qKlxuICogQ29waWVzIG93biBhbmQgaW5oZXJpdGVkIHN5bWJvbHMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgZnJvbS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyB0by5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlTeW1ib2xzSW4oc291cmNlLCBvYmplY3QpIHtcbiAgcmV0dXJuIGNvcHlPYmplY3Qoc291cmNlLCBnZXRTeW1ib2xzSW4oc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5U3ltYm9sc0luO1xuIiwidmFyIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0QWxsS2V5c2AgYW5kIGBnZXRBbGxLZXlzSW5gIHdoaWNoIHVzZXNcbiAqIGBrZXlzRnVuY2AgYW5kIGBzeW1ib2xzRnVuY2AgdG8gZ2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN5bWJvbHNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNGdW5jLCBzeW1ib2xzRnVuYykge1xuICB2YXIgcmVzdWx0ID0ga2V5c0Z1bmMob2JqZWN0KTtcbiAgcmV0dXJuIGlzQXJyYXkob2JqZWN0KSA/IHJlc3VsdCA6IGFycmF5UHVzaChyZXN1bHQsIHN5bWJvbHNGdW5jKG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRBbGxLZXlzO1xuIiwidmFyIGJhc2VHZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUdldEFsbEtleXMnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBnZXRBbGxLZXlzKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzLCBnZXRTeW1ib2xzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRBbGxLZXlzO1xuIiwidmFyIGJhc2VHZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUdldEFsbEtleXMnKSxcbiAgICBnZXRTeW1ib2xzSW4gPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzSW4nKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuL2tleXNJbicpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXNJbihvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0luLCBnZXRTeW1ib2xzSW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEFsbEtleXNJbjtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgRGF0YVZpZXcgPSBnZXROYXRpdmUocm9vdCwgJ0RhdGFWaWV3Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0YVZpZXc7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFByb21pc2UgPSBnZXROYXRpdmUocm9vdCwgJ1Byb21pc2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBTZXQgPSBnZXROYXRpdmUocm9vdCwgJ1NldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldDtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYWtNYXA7XG4iLCJ2YXIgRGF0YVZpZXcgPSByZXF1aXJlKCcuL19EYXRhVmlldycpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIFByb21pc2UgPSByZXF1aXJlKCcuL19Qcm9taXNlJyksXG4gICAgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgV2Vha01hcCA9IHJlcXVpcmUoJy4vX1dlYWtNYXAnKSxcbiAgICBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEgYW5kIHByb21pc2VzIGluIE5vZGUuanMgPCA2LlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUdldFRhZyh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiAnJztcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYWc7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIGFycmF5IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVBcnJheShhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gYXJyYXkuY29uc3RydWN0b3IobGVuZ3RoKTtcblxuICAvLyBBZGQgcHJvcGVydGllcyBhc3NpZ25lZCBieSBgUmVnRXhwI2V4ZWNgLlxuICBpZiAobGVuZ3RoICYmIHR5cGVvZiBhcnJheVswXSA9PSAnc3RyaW5nJyAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGFycmF5LCAnaW5kZXgnKSkge1xuICAgIHJlc3VsdC5pbmRleCA9IGFycmF5LmluZGV4O1xuICAgIHJlc3VsdC5pbnB1dCA9IGFycmF5LmlucHV0O1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdENsb25lQXJyYXk7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBVaW50OEFycmF5O1xuIiwidmFyIFVpbnQ4QXJyYXkgPSByZXF1aXJlKCcuL19VaW50OEFycmF5Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBhcnJheUJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIFRoZSBhcnJheSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBhcnJheSBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQXJyYXlCdWZmZXIoYXJyYXlCdWZmZXIpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBhcnJheUJ1ZmZlci5jb25zdHJ1Y3RvcihhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgbmV3IFVpbnQ4QXJyYXkocmVzdWx0KS5zZXQobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZUFycmF5QnVmZmVyO1xuIiwidmFyIGNsb25lQXJyYXlCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUFycmF5QnVmZmVyJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBkYXRhVmlld2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhVmlldyBUaGUgZGF0YSB2aWV3IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBkYXRhIHZpZXcuXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGF0YVZpZXcoZGF0YVZpZXcsIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcihkYXRhVmlldy5idWZmZXIpIDogZGF0YVZpZXcuYnVmZmVyO1xuICByZXR1cm4gbmV3IGRhdGFWaWV3LmNvbnN0cnVjdG9yKGJ1ZmZlciwgZGF0YVZpZXcuYnl0ZU9mZnNldCwgZGF0YVZpZXcuYnl0ZUxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVEYXRhVmlldztcbiIsIi8qKlxuICogQWRkcyB0aGUga2V5LXZhbHVlIGBwYWlyYCB0byBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHBhaXIgVGhlIGtleS12YWx1ZSBwYWlyIHRvIGFkZC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG1hcGAuXG4gKi9cbmZ1bmN0aW9uIGFkZE1hcEVudHJ5KG1hcCwgcGFpcikge1xuICAvLyBEb24ndCByZXR1cm4gYG1hcC5zZXRgIGJlY2F1c2UgaXQncyBub3QgY2hhaW5hYmxlIGluIElFIDExLlxuICBtYXAuc2V0KHBhaXJbMF0sIHBhaXJbMV0pO1xuICByZXR1cm4gbWFwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFkZE1hcEVudHJ5O1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ucmVkdWNlYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFthY2N1bXVsYXRvcl0gVGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpbml0QWNjdW1dIFNwZWNpZnkgdXNpbmcgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYGFycmF5YCBhc1xuICogIHRoZSBpbml0aWFsIHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBhcnJheVJlZHVjZShhcnJheSwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yLCBpbml0QWNjdW0pIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICBpZiAoaW5pdEFjY3VtICYmIGxlbmd0aCkge1xuICAgIGFjY3VtdWxhdG9yID0gYXJyYXlbKytpbmRleF07XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGl0ZXJhdGVlKGFjY3VtdWxhdG9yLCBhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIGFjY3VtdWxhdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UmVkdWNlO1xuIiwiLyoqXG4gKiBDb252ZXJ0cyBgbWFwYCB0byBpdHMga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUga2V5LXZhbHVlIHBhaXJzLlxuICovXG5mdW5jdGlvbiBtYXBUb0FycmF5KG1hcCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG1hcC5zaXplKTtcblxuICBtYXAuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gW2tleSwgdmFsdWVdO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBUb0FycmF5O1xuIiwidmFyIGFkZE1hcEVudHJ5ID0gcmVxdWlyZSgnLi9fYWRkTWFwRW50cnknKSxcbiAgICBhcnJheVJlZHVjZSA9IHJlcXVpcmUoJy4vX2FycmF5UmVkdWNlJyksXG4gICAgbWFwVG9BcnJheSA9IHJlcXVpcmUoJy4vX21hcFRvQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgY2xvbmluZy4gKi9cbnZhciBDTE9ORV9ERUVQX0ZMQUcgPSAxO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNsb25lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2xvbmVGdW5jIFRoZSBmdW5jdGlvbiB0byBjbG9uZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIG1hcC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVNYXAobWFwLCBpc0RlZXAsIGNsb25lRnVuYykge1xuICB2YXIgYXJyYXkgPSBpc0RlZXAgPyBjbG9uZUZ1bmMobWFwVG9BcnJheShtYXApLCBDTE9ORV9ERUVQX0ZMQUcpIDogbWFwVG9BcnJheShtYXApO1xuICByZXR1cm4gYXJyYXlSZWR1Y2UoYXJyYXksIGFkZE1hcEVudHJ5LCBuZXcgbWFwLmNvbnN0cnVjdG9yKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZU1hcDtcbiIsIi8qKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgIGZsYWdzIGZyb20gdGhlaXIgY29lcmNlZCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlRmxhZ3MgPSAvXFx3KiQvO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgcmVnZXhwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHJlZ2V4cCBUaGUgcmVnZXhwIHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVSZWdFeHAocmVnZXhwKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgcmVnZXhwLmNvbnN0cnVjdG9yKHJlZ2V4cC5zb3VyY2UsIHJlRmxhZ3MuZXhlYyhyZWdleHApKTtcbiAgcmVzdWx0Lmxhc3RJbmRleCA9IHJlZ2V4cC5sYXN0SW5kZXg7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVSZWdFeHA7XG4iLCIvKipcbiAqIEFkZHMgYHZhbHVlYCB0byBgc2V0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFkZC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYHNldGAuXG4gKi9cbmZ1bmN0aW9uIGFkZFNldEVudHJ5KHNldCwgdmFsdWUpIHtcbiAgLy8gRG9uJ3QgcmV0dXJuIGBzZXQuYWRkYCBiZWNhdXNlIGl0J3Mgbm90IGNoYWluYWJsZSBpbiBJRSAxMS5cbiAgc2V0LmFkZCh2YWx1ZSk7XG4gIHJldHVybiBzZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYWRkU2V0RW50cnk7XG4iLCIvKipcbiAqIENvbnZlcnRzIGBzZXRgIHRvIGFuIGFycmF5IG9mIGl0cyB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkoc2V0LnNpemUpO1xuXG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldFRvQXJyYXk7XG4iLCJ2YXIgYWRkU2V0RW50cnkgPSByZXF1aXJlKCcuL19hZGRTZXRFbnRyeScpLFxuICAgIGFycmF5UmVkdWNlID0gcmVxdWlyZSgnLi9fYXJyYXlSZWR1Y2UnKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBjbG9uaW5nLiAqL1xudmFyIENMT05FX0RFRVBfRkxBRyA9IDE7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBzZXRgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjbG9uZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNsb25lIHZhbHVlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgc2V0LlxuICovXG5mdW5jdGlvbiBjbG9uZVNldChzZXQsIGlzRGVlcCwgY2xvbmVGdW5jKSB7XG4gIHZhciBhcnJheSA9IGlzRGVlcCA/IGNsb25lRnVuYyhzZXRUb0FycmF5KHNldCksIENMT05FX0RFRVBfRkxBRykgOiBzZXRUb0FycmF5KHNldCk7XG4gIHJldHVybiBhcnJheVJlZHVjZShhcnJheSwgYWRkU2V0RW50cnksIG5ldyBzZXQuY29uc3RydWN0b3IpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lU2V0O1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVmFsdWVPZiA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udmFsdWVPZiA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgdGhlIGBzeW1ib2xgIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHN5bWJvbCBUaGUgc3ltYm9sIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBzeW1ib2wgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBjbG9uZVN5bWJvbChzeW1ib2wpIHtcbiAgcmV0dXJuIHN5bWJvbFZhbHVlT2YgPyBPYmplY3Qoc3ltYm9sVmFsdWVPZi5jYWxsKHN5bWJvbCkpIDoge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVTeW1ib2w7XG4iLCJ2YXIgY2xvbmVBcnJheUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQXJyYXlCdWZmZXInKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHR5cGVkQXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gdHlwZWRBcnJheSBUaGUgdHlwZWQgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHR5cGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBjbG9uZVR5cGVkQXJyYXkodHlwZWRBcnJheSwgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKHR5cGVkQXJyYXkuYnVmZmVyKSA6IHR5cGVkQXJyYXkuYnVmZmVyO1xuICByZXR1cm4gbmV3IHR5cGVkQXJyYXkuY29uc3RydWN0b3IoYnVmZmVyLCB0eXBlZEFycmF5LmJ5dGVPZmZzZXQsIHR5cGVkQXJyYXkubGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVR5cGVkQXJyYXk7XG4iLCJ2YXIgY2xvbmVBcnJheUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQXJyYXlCdWZmZXInKSxcbiAgICBjbG9uZURhdGFWaWV3ID0gcmVxdWlyZSgnLi9fY2xvbmVEYXRhVmlldycpLFxuICAgIGNsb25lTWFwID0gcmVxdWlyZSgnLi9fY2xvbmVNYXAnKSxcbiAgICBjbG9uZVJlZ0V4cCA9IHJlcXVpcmUoJy4vX2Nsb25lUmVnRXhwJyksXG4gICAgY2xvbmVTZXQgPSByZXF1aXJlKCcuL19jbG9uZVNldCcpLFxuICAgIGNsb25lU3ltYm9sID0gcmVxdWlyZSgnLi9fY2xvbmVTeW1ib2wnKSxcbiAgICBjbG9uZVR5cGVkQXJyYXkgPSByZXF1aXJlKCcuL19jbG9uZVR5cGVkQXJyYXknKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gb2JqZWN0IGNsb25lIGJhc2VkIG9uIGl0cyBgdG9TdHJpbmdUYWdgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIG9ubHkgc3VwcG9ydHMgY2xvbmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2xvbmVGdW5jIFRoZSBmdW5jdGlvbiB0byBjbG9uZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZUJ5VGFnKG9iamVjdCwgdGFnLCBjbG9uZUZ1bmMsIGlzRGVlcCkge1xuICB2YXIgQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIGFycmF5QnVmZmVyVGFnOlxuICAgICAgcmV0dXJuIGNsb25lQXJyYXlCdWZmZXIob2JqZWN0KTtcblxuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3IoK29iamVjdCk7XG5cbiAgICBjYXNlIGRhdGFWaWV3VGFnOlxuICAgICAgcmV0dXJuIGNsb25lRGF0YVZpZXcob2JqZWN0LCBpc0RlZXApO1xuXG4gICAgY2FzZSBmbG9hdDMyVGFnOiBjYXNlIGZsb2F0NjRUYWc6XG4gICAgY2FzZSBpbnQ4VGFnOiBjYXNlIGludDE2VGFnOiBjYXNlIGludDMyVGFnOlxuICAgIGNhc2UgdWludDhUYWc6IGNhc2UgdWludDhDbGFtcGVkVGFnOiBjYXNlIHVpbnQxNlRhZzogY2FzZSB1aW50MzJUYWc6XG4gICAgICByZXR1cm4gY2xvbmVUeXBlZEFycmF5KG9iamVjdCwgaXNEZWVwKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgcmV0dXJuIGNsb25lTWFwKG9iamVjdCwgaXNEZWVwLCBjbG9uZUZ1bmMpO1xuXG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3Iob2JqZWN0KTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgICAgcmV0dXJuIGNsb25lUmVnRXhwKG9iamVjdCk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVNldChvYmplY3QsIGlzRGVlcCwgY2xvbmVGdW5jKTtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgcmV0dXJuIGNsb25lU3ltYm9sKG9iamVjdCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0Q2xvbmVCeVRhZztcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jcmVhdGVgIHdpdGhvdXQgc3VwcG9ydCBmb3IgYXNzaWduaW5nXG4gKiBwcm9wZXJ0aWVzIHRvIHRoZSBjcmVhdGVkIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvIFRoZSBvYmplY3QgdG8gaW5oZXJpdCBmcm9tLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqL1xudmFyIGJhc2VDcmVhdGUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIG9iamVjdCgpIHt9XG4gIHJldHVybiBmdW5jdGlvbihwcm90bykge1xuICAgIGlmICghaXNPYmplY3QocHJvdG8pKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGlmIChvYmplY3RDcmVhdGUpIHtcbiAgICAgIHJldHVybiBvYmplY3RDcmVhdGUocHJvdG8pO1xuICAgIH1cbiAgICBvYmplY3QucHJvdG90eXBlID0gcHJvdG87XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBvYmplY3Q7XG4gICAgb2JqZWN0LnByb3RvdHlwZSA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQ3JlYXRlO1xuIiwidmFyIGJhc2VDcmVhdGUgPSByZXF1aXJlKCcuL19iYXNlQ3JlYXRlJyksXG4gICAgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpO1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZU9iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuICh0eXBlb2Ygb2JqZWN0LmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgIWlzUHJvdG90eXBlKG9iamVjdCkpXG4gICAgPyBiYXNlQ3JlYXRlKGdldFByb3RvdHlwZShvYmplY3QpKVxuICAgIDoge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdENsb25lT2JqZWN0O1xuIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBhcnJheUVhY2ggPSByZXF1aXJlKCcuL19hcnJheUVhY2gnKSxcbiAgICBhc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnblZhbHVlJyksXG4gICAgYmFzZUFzc2lnbiA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ24nKSxcbiAgICBiYXNlQXNzaWduSW4gPSByZXF1aXJlKCcuL19iYXNlQXNzaWduSW4nKSxcbiAgICBjbG9uZUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQnVmZmVyJyksXG4gICAgY29weUFycmF5ID0gcmVxdWlyZSgnLi9fY29weUFycmF5JyksXG4gICAgY29weVN5bWJvbHMgPSByZXF1aXJlKCcuL19jb3B5U3ltYm9scycpLFxuICAgIGNvcHlTeW1ib2xzSW4gPSByZXF1aXJlKCcuL19jb3B5U3ltYm9sc0luJyksXG4gICAgZ2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2dldEFsbEtleXMnKSxcbiAgICBnZXRBbGxLZXlzSW4gPSByZXF1aXJlKCcuL19nZXRBbGxLZXlzSW4nKSxcbiAgICBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpbml0Q2xvbmVBcnJheSA9IHJlcXVpcmUoJy4vX2luaXRDbG9uZUFycmF5JyksXG4gICAgaW5pdENsb25lQnlUYWcgPSByZXF1aXJlKCcuL19pbml0Q2xvbmVCeVRhZycpLFxuICAgIGluaXRDbG9uZU9iamVjdCA9IHJlcXVpcmUoJy4vX2luaXRDbG9uZU9iamVjdCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIGNsb25pbmcuICovXG52YXIgQ0xPTkVfREVFUF9GTEFHID0gMSxcbiAgICBDTE9ORV9GTEFUX0ZMQUcgPSAyLFxuICAgIENMT05FX1NZTUJPTFNfRkxBRyA9IDQ7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgc3VwcG9ydGVkIGJ5IGBfLmNsb25lYC4gKi9cbnZhciBjbG9uZWFibGVUYWdzID0ge307XG5jbG9uZWFibGVUYWdzW2FyZ3NUYWddID0gY2xvbmVhYmxlVGFnc1thcnJheVRhZ10gPVxuY2xvbmVhYmxlVGFnc1thcnJheUJ1ZmZlclRhZ10gPSBjbG9uZWFibGVUYWdzW2RhdGFWaWV3VGFnXSA9XG5jbG9uZWFibGVUYWdzW2Jvb2xUYWddID0gY2xvbmVhYmxlVGFnc1tkYXRlVGFnXSA9XG5jbG9uZWFibGVUYWdzW2Zsb2F0MzJUYWddID0gY2xvbmVhYmxlVGFnc1tmbG9hdDY0VGFnXSA9XG5jbG9uZWFibGVUYWdzW2ludDhUYWddID0gY2xvbmVhYmxlVGFnc1tpbnQxNlRhZ10gPVxuY2xvbmVhYmxlVGFnc1tpbnQzMlRhZ10gPSBjbG9uZWFibGVUYWdzW21hcFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tudW1iZXJUYWddID0gY2xvbmVhYmxlVGFnc1tvYmplY3RUYWddID1cbmNsb25lYWJsZVRhZ3NbcmVnZXhwVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc2V0VGFnXSA9XG5jbG9uZWFibGVUYWdzW3N0cmluZ1RhZ10gPSBjbG9uZWFibGVUYWdzW3N5bWJvbFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50MTZUYWddID0gY2xvbmVhYmxlVGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbmNsb25lYWJsZVRhZ3NbZXJyb3JUYWddID0gY2xvbmVhYmxlVGFnc1tmdW5jVGFnXSA9XG5jbG9uZWFibGVUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY2xvbmVgIGFuZCBgXy5jbG9uZURlZXBgIHdoaWNoIHRyYWNrc1xuICogdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLlxuICogIDEgLSBEZWVwIGNsb25lXG4gKiAgMiAtIEZsYXR0ZW4gaW5oZXJpdGVkIHByb3BlcnRpZXNcbiAqICA0IC0gQ2xvbmUgc3ltYm9sc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY2xvbmluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBba2V5XSBUaGUga2V5IG9mIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIHBhcmVudCBvYmplY3Qgb2YgYHZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBhbmQgdGhlaXIgY2xvbmUgY291bnRlcnBhcnRzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGNsb25lZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUNsb25lKHZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBrZXksIG9iamVjdCwgc3RhY2spIHtcbiAgdmFyIHJlc3VsdCxcbiAgICAgIGlzRGVlcCA9IGJpdG1hc2sgJiBDTE9ORV9ERUVQX0ZMQUcsXG4gICAgICBpc0ZsYXQgPSBiaXRtYXNrICYgQ0xPTkVfRkxBVF9GTEFHLFxuICAgICAgaXNGdWxsID0gYml0bWFzayAmIENMT05FX1NZTUJPTFNfRkxBRztcblxuICBpZiAoY3VzdG9taXplcikge1xuICAgIHJlc3VsdCA9IG9iamVjdCA/IGN1c3RvbWl6ZXIodmFsdWUsIGtleSwgb2JqZWN0LCBzdGFjaykgOiBjdXN0b21pemVyKHZhbHVlKTtcbiAgfVxuICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpO1xuICBpZiAoaXNBcnIpIHtcbiAgICByZXN1bHQgPSBpbml0Q2xvbmVBcnJheSh2YWx1ZSk7XG4gICAgaWYgKCFpc0RlZXApIHtcbiAgICAgIHJldHVybiBjb3B5QXJyYXkodmFsdWUsIHJlc3VsdCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciB0YWcgPSBnZXRUYWcodmFsdWUpLFxuICAgICAgICBpc0Z1bmMgPSB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xuXG4gICAgaWYgKGlzQnVmZmVyKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGNsb25lQnVmZmVyKHZhbHVlLCBpc0RlZXApO1xuICAgIH1cbiAgICBpZiAodGFnID09IG9iamVjdFRhZyB8fCB0YWcgPT0gYXJnc1RhZyB8fCAoaXNGdW5jICYmICFvYmplY3QpKSB7XG4gICAgICByZXN1bHQgPSAoaXNGbGF0IHx8IGlzRnVuYykgPyB7fSA6IGluaXRDbG9uZU9iamVjdCh2YWx1ZSk7XG4gICAgICBpZiAoIWlzRGVlcCkge1xuICAgICAgICByZXR1cm4gaXNGbGF0XG4gICAgICAgICAgPyBjb3B5U3ltYm9sc0luKHZhbHVlLCBiYXNlQXNzaWduSW4ocmVzdWx0LCB2YWx1ZSkpXG4gICAgICAgICAgOiBjb3B5U3ltYm9scyh2YWx1ZSwgYmFzZUFzc2lnbihyZXN1bHQsIHZhbHVlKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghY2xvbmVhYmxlVGFnc1t0YWddKSB7XG4gICAgICAgIHJldHVybiBvYmplY3QgPyB2YWx1ZSA6IHt9O1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gaW5pdENsb25lQnlUYWcodmFsdWUsIHRhZywgYmFzZUNsb25lLCBpc0RlZXApO1xuICAgIH1cbiAgfVxuICAvLyBDaGVjayBmb3IgY2lyY3VsYXIgcmVmZXJlbmNlcyBhbmQgcmV0dXJuIGl0cyBjb3JyZXNwb25kaW5nIGNsb25lLlxuICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldCh2YWx1ZSk7XG4gIGlmIChzdGFja2VkKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQ7XG4gIH1cbiAgc3RhY2suc2V0KHZhbHVlLCByZXN1bHQpO1xuXG4gIHZhciBrZXlzRnVuYyA9IGlzRnVsbFxuICAgID8gKGlzRmxhdCA/IGdldEFsbEtleXNJbiA6IGdldEFsbEtleXMpXG4gICAgOiAoaXNGbGF0ID8ga2V5c0luIDoga2V5cyk7XG5cbiAgdmFyIHByb3BzID0gaXNBcnIgPyB1bmRlZmluZWQgOiBrZXlzRnVuYyh2YWx1ZSk7XG4gIGFycmF5RWFjaChwcm9wcyB8fCB2YWx1ZSwgZnVuY3Rpb24oc3ViVmFsdWUsIGtleSkge1xuICAgIGlmIChwcm9wcykge1xuICAgICAga2V5ID0gc3ViVmFsdWU7XG4gICAgICBzdWJWYWx1ZSA9IHZhbHVlW2tleV07XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IHBvcHVsYXRlIGNsb25lIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgYXNzaWduVmFsdWUocmVzdWx0LCBrZXksIGJhc2VDbG9uZShzdWJWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwga2V5LCB2YWx1ZSwgc3RhY2spKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUNsb25lO1xuIiwidmFyIGJhc2VDbG9uZSA9IHJlcXVpcmUoJy4vX2Jhc2VDbG9uZScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBjbG9uaW5nLiAqL1xudmFyIENMT05FX0RFRVBfRkxBRyA9IDEsXG4gICAgQ0xPTkVfU1lNQk9MU19GTEFHID0gNDtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmNsb25lYCBleGNlcHQgdGhhdCBpdCByZWN1cnNpdmVseSBjbG9uZXMgYHZhbHVlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDEuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcmVjdXJzaXZlbHkgY2xvbmUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZGVlcCBjbG9uZWQgdmFsdWUuXG4gKiBAc2VlIF8uY2xvbmVcbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBbeyAnYSc6IDEgfSwgeyAnYic6IDIgfV07XG4gKlxuICogdmFyIGRlZXAgPSBfLmNsb25lRGVlcChvYmplY3RzKTtcbiAqIGNvbnNvbGUubG9nKGRlZXBbMF0gPT09IG9iamVjdHNbMF0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gY2xvbmVEZWVwKHZhbHVlKSB7XG4gIHJldHVybiBiYXNlQ2xvbmUodmFsdWUsIENMT05FX0RFRVBfRkxBRyB8IENMT05FX1NZTUJPTFNfRkxBRyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVEZWVwO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlnRXJyb3IgZXh0ZW5kcyBFcnJvcntcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnQ29uZmlnRXJyb3InO1xuICAgICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvb3JkaW5hdGVFcnJvciBleHRlbmRzIEVycm9ye1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2Upe1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ0ludENvb3JkaW5hdGVFcnJvcic7XG4gICAgfVxufSIsImltcG9ydCBJbnRDb29yZGluYXRlRXJyb3IgZnJvbSAnLi9lcnJvcnMvSW50Q29vcmRpbmF0ZUVycm9yLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50Q29vcmRpbmF0ZSB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgbnVsbFBvc2l0aW9uID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKE51bWJlci5pc0ludGVnZXIoeCkgJiYgTnVtYmVyLmlzSW50ZWdlcih5KSB8fCBudWxsUG9zaXRpb24gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy54ID0gTnVtYmVyKHgpO1xuICAgICAgICAgICAgdGhpcy55ID0gTnVtYmVyKHkpO1xuICAgICAgICAgICAgdGhpcy5udWxsUG9zaXRpb24gPSBudWxsUG9zaXRpb247XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBJbnRDb29yZGluYXRlRXJyb3IoJ0Nvb3JkaW5hdGVzIGhhdmUgdG8gYmUgaW50ZWdlciB2YWx1ZXMhJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgY29vcmRpbmF0ZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgICAgICB5OiB0aGlzLnlcbiAgICAgICAgfVxuICAgIH1cbn0iLCJsZXQgY291bnRlciA9IDA7XG5leHBvcnQgZnVuY3Rpb24gaWRHZW5lcmF0b3IoKXtcbiAgICAgICAgbGV0IGlkID0gJ2lkLScgKyBjb3VudGVyKys7XG4gICAgICAgIHJldHVybiAgaWQ7XG4gICAgfVxuXG5leHBvcnQgZnVuY3Rpb24gRXVjbGlkZWFuRGlzdGFuY2UoZnJvbSwgdG8pIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KGZyb20uY29vcmRpbmF0ZXMueCAtIHRvLmNvb3JkaW5hdGVzLngsIDIpICsgTWF0aC5wb3coZnJvbS5jb29yZGluYXRlcy55IC0gdG8uY29vcmRpbmF0ZXMueSwgMikpO1xufSIsImltcG9ydCBFbnRpdHkgZnJvbSAnLi9BYnN0cmFjdENsYXNzZXMvRW50aXR5JztcbmltcG9ydCBjbG9uZURlZXAgZnJvbSAnbG9kYXNoL2Nsb25lRGVlcCc7XG5pbXBvcnQgQ29uZmlnRXJyb3IgZnJvbSAnLi9lcnJvcnMvQ29uZmlnRXJyb3IuanMnO1xuaW1wb3J0IEludENvb3JkaW5hdGUgZnJvbSAnLi9pbnRDb29yZGluYXRlLmpzJztcbmltcG9ydCB7aWRHZW5lcmF0b3J9IGZyb20gJy4vY3VzdG9tVXRpbHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2FyZCBleHRlbmRzIEVudGl0eSB7XG4gICAgY29uc3RydWN0b3IoY2FsbGJhY2tzLCBjb25maWcpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBsZXQgcGFyc2VkQ29uZmlnXG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgcGFyc2VkQ29uZmlnID0gdGhpcy5wYXJzZUNvbmZpZyhjb25maWcpO1xuICAgICAgICB9Y2F0Y2goZSl7XG4gICAgICAgICAgICBpZih0eXBlb2YgY2FsbGJhY2tzLnByb3BhZ2F0ZUVycm9yID09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5wcm9wYWdhdGVFcnJvcihlKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YXRlID0ge307XG4gICAgICAgIHRoaXMuc3RhdGUuSUQgPSBpZEdlbmVyYXRvcigpO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZSwgcGFyc2VkQ29uZmlnKTtcbiAgICAgICAgdGhpcy5jYWxsYmFja3MgPSBjYWxsYmFja3M7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIH1cblxuICAgIHBhcnNlQ29uZmlnKGNvbmZpZykge1xuICAgICAgICBpZiAoY29uZmlnLndpZHRoID09IHVuZGVmaW5lZCB8fCBjb25maWcuaGVpZ2h0ID09IHVuZGVmaW5lZCB8fCBjb25maWcub2JzdGFjbGVzICE9IHVuZGVmaW5lZCAmJiB0eXBlb2YgY29uZmlnLm9ic3RhY2xlcyA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQ29uZmlnRXJyb3IoJ01pc3NpbmcgZmllbGRzIGluIGNvbmZpZyBvciBnaXZlbiBvYnN0YWNsZSBmaWVsZCBpcyBub3QgYSBsaXN0LiBGaWVsZHMgbmVlZGVkOiB3aWR0aDppbnRlZ2VyLCBoZWlnaHQ6IGludGVnZXInKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGFyc2VkQ29uZmlnID0ge307XG4gICAgICAgIHBhcnNlZENvbmZpZy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHBhcnNlZENvbmZpZy53aWR0aCA9IE51bWJlcihjb25maWcud2lkdGgpO1xuICAgICAgICBwYXJzZWRDb25maWcuaGVpZ2h0ID0gTnVtYmVyKGNvbmZpZy5oZWlnaHQpO1xuICAgICAgICBcbiAgICAgICAgbGV0IHBhcnNlZE9ic3RhY2xlcyA9IFtdO1xuICAgICAgICBpZihjb25maWcub2JzdGFjbGVzKXtcbiAgICAgICAgICAgIGZvcihsZXQgb2JzdGFjbGUgb2YgY29uZmlnLm9ic3RhY2xlcyl7XG4gICAgICAgICAgICAgICAgcGFyc2VkT2JzdGFjbGVzLnB1c2gobmV3IEludENvb3JkaW5hdGUoTnVtYmVyKG9ic3RhY2xlLnBvc2l0aW9uLngpLCBOdW1iZXIob2JzdGFjbGUucG9zaXRpb24ueSkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHBhcnNlZENvbmZpZy5vYnN0YWNsZXMgPSBwYXJzZWRPYnN0YWNsZXM7XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlZENvbmZpZztcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7fVxuXG4gICAgcmVzZXQoKSB7fVxuXG4gICAgc2V0U3RhdGUob3B0aW9ucykge1xuICAgICAgICBsZXQgbmV4dFN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihuZXh0U3RhdGUsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgfVxuXG4gICAgZ2V0IGRpbWVuc2lvbnMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkaW1YOiB0aGlzLnN0YXRlLndpZHRoLFxuICAgICAgICAgICAgZGltWTogdGhpcy5zdGF0ZS5oZWlnaHRcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBJRCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5JRDtcbiAgICB9XG5cbiAgICBnZXQgb2JzdGFjbGVzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLm9ic3RhY2xlcztcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBPYnNlcnZlckVudGl0eSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmIChuZXcudGFyZ2V0ID09PSBPYnNlcnZlckVudGl0eSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWJzdHJhY3QgY2xhc3MgY2Fubm90IGJlIGluc3RhbnRpYXRlZCFcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy51cGRhdGUgPT09IHZvaWQgMCB8fCB0eXBlb2YgdGhpcy51cGRhdGUgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWJzdHJhY3QgbWV0aG9kICd1cGRhdGUnIG11c3QgYmUgb3ZlcnJpZGVuIVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9uTm90aWZ5ID09PSB2b2lkIDAgfHwgdHlwZW9mIHRoaXMub25Ob3RpZnkgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWJzdHJhY3QgbWV0aG9kICdvbk5vdGlmeScgbXVzdCBiZSBvdmVycmlkZW4hXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5yZXNldCA9PT0gdm9pZCAwIHx8IHR5cGVvZiB0aGlzLnJlc2V0ICE9PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0IG1ldGhvZCAncmVzZXQnIG11c3QgYmUgb3ZlcnJpZGVuIVwiKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tYW5kIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKG5ldy50YXJnZXQgPT09IENvbW1hbmQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0IGNsYXNzLiBDYW5ub3QgYmUgaW5zdGFudGlhdGVkIVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmV4ZWN1dGUgPT09IHZvaWQgMCB8fCB0eXBlb2YgdGhpcy5leGVjdXRlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBYnN0cmFjdCBtZXRob2QgJ2V4ZWN1dGUnIG11c3QgYmUgb3ZlcnJpZGVuIVwiKTtcbiAgICAgICAgfVxuICAgIH1cbn07IiwiaW1wb3J0IENvbW1hbmQgZnJvbSAnLi4vQWJzdHJhY3RDbGFzc2VzL0NvbW1hbmQnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlZnRUdXJuQ29tbWFuZCBleHRlbmRzIENvbW1hbmR7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBleGVjdXRlKHNuYWtlKXtcbiAgICAgICAgcmV0dXJuIHNuYWtlLmhhbmRsZUlucHV0KCdMRUZUJyk7XG4gICAgfVxufSIsImltcG9ydCBDb21tYW5kIGZyb20gJy4uL0Fic3RyYWN0Q2xhc3Nlcy9Db21tYW5kJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmlnaHRUdXJuQ29tbWFuZCBleHRlbmRzIENvbW1hbmR7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBleGVjdXRlKHNuYWtlKXtcbiAgICAgICAgcmV0dXJuIHNuYWtlLmhhbmRsZUlucHV0KCdSSUdIVCcpO1xuICAgIH1cbn0iLCJpbXBvcnQgQ29tbWFuZCBmcm9tICcuLi9BYnN0cmFjdENsYXNzZXMvQ29tbWFuZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvd25UdXJuQ29tbWFuZCBleHRlbmRzIENvbW1hbmR7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBleGVjdXRlKHNuYWtlKXtcbiAgICAgICAgcmV0dXJuIHNuYWtlLmhhbmRsZUlucHV0KCdET1dOJyk7XG4gICAgfVxufSIsImltcG9ydCBDb21tYW5kIGZyb20gJy4uL0Fic3RyYWN0Q2xhc3Nlcy9Db21tYW5kJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXBUdXJuQ29tbWFuZCBleHRlbmRzIENvbW1hbmR7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBleGVjdXRlKHNuYWtlKXtcbiAgICAgICAgcmV0dXJuIHNuYWtlLmhhbmRsZUlucHV0KCdVUCcpO1xuICAgIH1cbn0iLCIvLyd1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgT2JzZXJ2ZXJFbnRpdHkgZnJvbSAnLi9BYnN0cmFjdENsYXNzZXMvT2JzZXJ2ZXJFbnRpdHknO1xuaW1wb3J0IENvbmZpZ0Vycm9yIGZyb20gJy4vZXJyb3JzL0NvbmZpZ0Vycm9yLmpzJztcbmltcG9ydCBMZWZ0VHVybkNvbW1hbmQgZnJvbSAnLi9Db21tYW5kcy9MZWZ0VHVybkNvbW1hbmQnO1xuaW1wb3J0IFJpZ2h0VHVybkNvbW1hbmQgZnJvbSAnLi9Db21tYW5kcy9SaWdodFR1cm5Db21tYW5kJztcbmltcG9ydCBEb3duVHVybkNvbW1hbmQgZnJvbSAnLi9Db21tYW5kcy9Eb3duVHVybkNvbW1hbmQnO1xuaW1wb3J0IFVwVHVybkNvbW1hbmQgZnJvbSAnLi9Db21tYW5kcy9VcFR1cm5Db21tYW5kJztcbmltcG9ydCBJbnRDb29yZGluYXRlIGZyb20gJy4vaW50Q29vcmRpbmF0ZSc7XG5cbmltcG9ydCB7XG4gICAgaWRHZW5lcmF0b3Jcbn0gZnJvbSAnLi9jdXN0b21VdGlscy5qcyc7XG5pbXBvcnQgY2xvbmVEZWVwIGZyb20gJ2xvZGFzaC9jbG9uZURlZXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbmFrZSBleHRlbmRzIE9ic2VydmVyRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihjYWxsYmFja3MsIGNvbmZpZywgc3RyYXRlZ3ksIG5vdGlmaWVyKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBsZXQgcGFyc2VkQ29uZmlnXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwYXJzZWRDb25maWcgPSB0aGlzLnBhcnNlQ29uZmlnKGNvbmZpZyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2tzLnByb3BhZ2F0ZUVycm9yID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MucHJvcGFnYXRlRXJyb3IoZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fVxuICAgICAgICB0aGlzLnN0YXRlLklEID0gaWRHZW5lcmF0b3IoKTtcbiAgICAgICAgdGhpcy5zdGF0ZS52ZWxvY2l0eSA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0ZS5ub3RpZmljYXRpb25CdWZmZXIgPSBbXTtcbiAgICAgICAgdGhpcy5zdGF0ZS5zdGF0dXMgPSBcIkFMSVZFXCI7XG4gICAgICAgIHRoaXMuc3RhdGUuc3RyYXRlZ3kgPSBzdHJhdGVneTtcbiAgICAgICAgdGhpcy5zdGF0ZS5wYXRoID0gW107XG4gICAgICAgIHRoaXMuc3RhdGUudGFyZ2V0ID0gdW5kZWZpbmVkO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuc3RhdGUsIHBhcnNlZENvbmZpZyk7XG5cbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMudGltZXIgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0aGlzLmNhbGxiYWNrcyA9IGNhbGxiYWNrcztcbiAgICAgICAgaWYgKG5vdGlmaWVyKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmaWVyID0gbm90aWZpZXI7XG4gICAgICAgICAgICBub3RpZmllci5zdWJzY3JpYmUodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJzZUNvbmZpZyhjb25maWcpIHtcbiAgICAgICAgaWYgKGNvbmZpZy5zdGFydERpcmVjdGlvbiA9PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0VmVsb2NpdHkgPT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydFggPT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydFkgPT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5iYXNlTGVuZ3RoID09IHVuZGVmaW5lZCB8fCBjb25maWcubGltaXRYID09IHVuZGVmaW5lZCB8fCBjb25maWcubGltaXRZID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IENvbmZpZ0Vycm9yKCdNaXNzaW5nIGNvbmZpZ3VyYXRpb24gb3IgbWlzc2luZyBmaWVsZHMgaW4gY29uZmlndXJhdGlvbi4gTmVlZGVkIGZpZWxkczogc3RhcnRkaXJlY3Rpb246IChMRUZUIHwgUklHSFQgfCBVUCB8IERPV04pLCBzdGFydFZlbG9jaXR5OiBpbnRlZ2VyLCBzdGFydFg6IGludGVnZXIsIHN0YXJ0WTppbnRlZ2VyLCBiYXNlTGVuZ3RoOiBpbnRlZ2VyLCBsaW1pdFg6IGludGVnZXIsIGxpbWl0WTogaW50ZWdlcicpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwYXJzZWRDb25maWcgPSB7fVxuICAgICAgICBwYXJzZWRDb25maWcuYm9keSA9IFtdO1xuICAgICAgICBwYXJzZWRDb25maWcuZGlyZWN0aW9uID0gY29uZmlnLnN0YXJ0RGlyZWN0aW9uO1xuICAgICAgICBwYXJzZWRDb25maWcuYmFzZVZlbG9jaXR5ID0gTnVtYmVyKGNvbmZpZy5zdGFydFZlbG9jaXR5KTtcbiAgICAgICAgcGFyc2VkQ29uZmlnLmxpbWl0cyA9IHtcbiAgICAgICAgICAgIHg6IE51bWJlcihjb25maWcubGltaXRYKSxcbiAgICAgICAgICAgIHk6IE51bWJlcihjb25maWcubGltaXRZKVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29uZmlnLmJhc2VMZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgcGFyc2VkQ29uZmlnLmJvZHlbaV0gPSBuZXcgSW50Q29vcmRpbmF0ZShOdW1iZXIoY29uZmlnLnN0YXJ0WCksIE51bWJlcihjb25maWcuc3RhcnRZKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmZpZy5jb2xvcikge1xuICAgICAgICAgICAgcGFyc2VkQ29uZmlnLmNvbG9yID0gY29uZmlnLmNvbG9yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VkQ29uZmlnLmNvbG9yID0gJ2dyZWVuJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJzZWRDb25maWc7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBsZXQgbmV4dFN0YXRlID0ge307XG4gICAgICAgIGxldCBuZXh0RGlyZWN0aW9uO1xuICAgICAgICBsZXQgbmV4dFZlbG9jaXR5O1xuICAgICAgICBsZXQgbmV4dEJvZHk7XG4gICAgICAgIGxldCBjb21tYW5kUmVzdWx0O1xuICAgICAgICBsZXQgbmV4dFN0ZXA7XG4gICAgICAgIGxldCBwYXRoO1xuICAgICAgICBsZXQgY29tbWFuZDtcbiAgICAgICAgbGV0IG5vdGlmaWVyID0gdGhpcy5ub3RpZmllcjtcblxuICAgICAgICBpZiAodGhpcy5pc0FsaXZlKCkpIHtcbiAgICAgICAgICAgIHBhdGggPSB0aGlzLmNhbGN1bGF0ZVBhdGgoKTtcbiAgICAgICAgICAgIGlmIChwYXRoICYmIHBhdGgubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGNvbW1hbmQgPSB0aGlzLmNhbGN1bGF0ZUNvbW1hbmQodGhpcy5oZWFkLCBwYXRoWzFdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29tbWFuZCA9IGNvbW1hbmQ7XG4gICAgICAgICAgICBpZiAoY29tbWFuZCkge1xuICAgICAgICAgICAgICAgIGNvbW1hbmRSZXN1bHQgPSBjb21tYW5kLmV4ZWN1dGUodGhpcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5leHREaXJlY3Rpb24gPSBjb21tYW5kUmVzdWx0IHx8IHRoaXMuZGlyZWN0aW9uO1xuICAgICAgICAgICAgbmV4dFZlbG9jaXR5ID0gdGhpcy5jYWxjdWxhdGVWZWxvY2l0eShuZXh0RGlyZWN0aW9uKTtcbiAgICAgICAgICAgIG5leHRCb2R5ID0gdGhpcy5tb3ZlKG5leHRWZWxvY2l0eS54LCBuZXh0VmVsb2NpdHkueSk7XG4gICAgICAgICAgICBuZXh0U3RlcCA9IG5leHRCb2R5WzBdO1xuICAgICAgICAgICAgaWYgKG5vdGlmaWVyKSB7XG4gICAgICAgICAgICAgICAgbm90aWZpZXIuY2FsY3VsYXRlU3RlcENvbGxpc2lvblR5cGUobmV4dFN0ZXAsIHRoaXMuSUQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihuZXh0U3RhdGUsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IG5leHREaXJlY3Rpb24sXG4gICAgICAgICAgICAgICAgYm9keTogbmV4dEJvZHksXG4gICAgICAgICAgICAgICAgdmVsb2NpdHk6IG5leHRWZWxvY2l0eSxcbiAgICAgICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxldCBub3RpZmljYXRpb25CdWZmZXIgPSB0aGlzLnN0YXRlLm5vdGlmaWNhdGlvbkJ1ZmZlcjtcbiAgICAgICAgICAgIGxldCBub3RpZmljYXRpb24gPSBub3RpZmljYXRpb25CdWZmZXIucG9wKCk7XG4gICAgICAgICAgICB3aGlsZSAobm90aWZpY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbiwgbmV4dFN0YXRlKTtcbiAgICAgICAgICAgICAgICBub3RpZmljYXRpb24gPSBub3RpZmljYXRpb25CdWZmZXIucG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5pc0FsaXZlKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJlc2V0KCkge1xuICAgICAgICBsZXQgcGFyc2VkQ29uZmlnID0gdGhpcy5wYXJzZUNvbmZpZyh0aGlzLmNvbmZpZyk7XG4gICAgICAgIGxldCBuZXh0U3RhdGUgPSB7XG4gICAgICAgICAgICB2ZWxvY2l0eToge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXR1czogXCJBTElWRVwiLFxuICAgICAgICAgICAgdGFyZ2V0OiB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuYXNzaWduKG5leHRTdGF0ZSwgcGFyc2VkQ29uZmlnKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUpO1xuICAgIH1cblxuICAgIGRpZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzdGF0dXM6ICdERUFEJ1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIG9uTm90aWZ5KGVudGl0eSwgZXZlbnQpIHtcbiAgICAgICAgbGV0IGV2ZW50VHlwZSA9IGV2ZW50LnR5cGVcbiAgICAgICAgc3dpdGNoIChldmVudFR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgKCdQSUxMX0NPTExJU0lPTicpOiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudGl0eS5JRCA9PSB0aGlzLklEKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzdG9yZWROb3RpZmljYXRpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBldmVudFR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBlbnRpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGlsbDogZXZlbnQucGlsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlTm90aWZpY2F0aW9uKHN0b3JlZE5vdGlmaWNhdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAoJ1dBTExfQ09MTElTSU9OJyk6IHtcbiAgICAgICAgICAgICAgICBpZiAoZW50aXR5LklEID09IHRoaXMuSUQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0b3JlZE5vdGlmaWNhdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGV2ZW50VHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IGVudGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVOb3RpZmljYXRpb24oc3RvcmVkTm90aWZpY2F0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICgnQk9EWV9DT0xMSVNJT04nKToge1xuICAgICAgICAgICAgICAgIGlmIChlbnRpdHkuSUQgPT0gdGhpcy5JRCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3RvcmVkTm90aWZpY2F0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogZXZlbnRUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eTogZW50aXR5XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZU5vdGlmaWNhdGlvbihzdG9yZWROb3RpZmljYXRpb24pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAoJ1RBUkdFVF9SRUFDSEVEJyk6IHtcbiAgICAgICAgICAgICAgICBpZiAoZW50aXR5LklEID09IHRoaXMuSUQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0b3JlZE5vdGlmaWNhdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGV2ZW50VHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IGVudGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVOb3RpZmljYXRpb24oc3RvcmVkTm90aWZpY2F0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9jZXNzTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbiwgbmV4dFN0YXRlKSB7XG4gICAgICAgIGxldCBub3RpZmljYXRpb25SZXN1bHQgPSB7fTtcbiAgICAgICAgbGV0IHBheWxvYWQgPSBub3RpZmljYXRpb24ucGF5bG9hZFxuICAgICAgICBzd2l0Y2ggKG5vdGlmaWNhdGlvbi50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICgnUElMTF9DT0xMSVNJT04nKTpcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5lYXQocGF5bG9hZC5waWxsLnBpbGxWYWx1ZSk7XG4gICAgICAgICAgICAgICAgbmV4dFN0YXRlLmJvZHkucHVzaCguLi5yZXN1bHQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAoJ1dBTExfQ09MTElTSU9OJyk6XG4gICAgICAgICAgICAgICAgdGhpcy5kaWUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgKCdCT0RZX0NPTExJU0lPTicpOlxuICAgICAgICAgICAgICAgIHRoaXMuZGllKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICgnVEFSR0VUX1JFQUNIRUQnKTpcbiAgICAgICAgICAgICAgICAgICAgbmV4dFN0YXRlLnRhcmdldCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm90aWZpY2F0aW9uUmVzdWx0O1xuICAgIH1cblxuICAgIHNldFN0YXRlKG9wdGlvbnMpIHtcbiAgICAgICAgbGV0IG5leHRTdGF0ZSA9IGNsb25lRGVlcCh0aGlzLnN0YXRlKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihuZXh0U3RhdGUsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgfVxuXG4gICAgaGFuZGxlSW5wdXQoZGlyZWN0aW9uKSB7XG4gICAgICAgIGlmICghdGhpcy5pc09wcG9zaXRlRGlyZWN0aW9uKGRpcmVjdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb247XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBtb3ZlKHZlbG9jaXR5WCwgdmVsb2NpdHlZKSB7XG4gICAgICAgIGxldCBuZXh0Qm9keSA9IGNsb25lRGVlcCh0aGlzLmJvZHkpO1xuXG4gICAgICAgIG5leHRCb2R5LnBvcCgpO1xuICAgICAgICBsZXQgbmV4dEhlYWQgPSB0aGlzLmNhbGN1bGF0ZU5leHRIZWFkKHZlbG9jaXR5WCwgdmVsb2NpdHlZKVxuICAgICAgICBuZXh0Qm9keS51bnNoaWZ0KG5leHRIZWFkKTtcblxuICAgICAgICByZXR1cm4gbmV4dEJvZHk7XG4gICAgfVxuXG4gICAgc3RvcmVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uKSB7XG4gICAgICAgIGlmIChub3RpZmljYXRpb24udHlwZSA9PSB1bmRlZmluZWQgfHwgbm90aWZpY2F0aW9uLnBheWxvYWQgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm5vdGlmaWNhdGlvbkJ1ZmZlci51bnNoaWZ0KG5vdGlmaWNhdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhbGN1bGF0ZVZlbG9jaXR5KGRpcmVjdGlvbikge1xuICAgICAgICBsZXQgbmV4dFZlbG9jaXR5ID0ge307XG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlICdSSUdIVCc6XG4gICAgICAgICAgICAgICAgbmV4dFZlbG9jaXR5LnggPSB0aGlzLnN0YXRlLmJhc2VWZWxvY2l0eTtcbiAgICAgICAgICAgICAgICBuZXh0VmVsb2NpdHkueSA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdMRUZUJzpcbiAgICAgICAgICAgICAgICBuZXh0VmVsb2NpdHkueCA9IC10aGlzLnN0YXRlLmJhc2VWZWxvY2l0eTtcbiAgICAgICAgICAgICAgICBuZXh0VmVsb2NpdHkueSA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdET1dOJzpcbiAgICAgICAgICAgICAgICBuZXh0VmVsb2NpdHkueCA9IDA7XG4gICAgICAgICAgICAgICAgbmV4dFZlbG9jaXR5LnkgPSB0aGlzLnN0YXRlLmJhc2VWZWxvY2l0eTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1VQJzpcbiAgICAgICAgICAgICAgICBuZXh0VmVsb2NpdHkueCA9IDA7XG4gICAgICAgICAgICAgICAgbmV4dFZlbG9jaXR5LnkgPSAtdGhpcy5zdGF0ZS5iYXNlVmVsb2NpdHk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXh0VmVsb2NpdHk7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlTmV4dEhlYWQodmVsb2NpdHlYLCB2ZWxvY2l0eVkpIHtcbiAgICAgICAgbGV0IGhlYWQgPSB0aGlzLmhlYWQ7XG4gICAgICAgIGxldCBuZXh0UG9zWCA9IGhlYWQuY29vcmRpbmF0ZXMueCArIHZlbG9jaXR5WDtcbiAgICAgICAgbGV0IG5leHRQb3NZID0gaGVhZC5jb29yZGluYXRlcy55ICsgdmVsb2NpdHlZO1xuICAgICAgICBsZXQgbGltaXRzID0gdGhpcy5zdGF0ZS5saW1pdHM7XG5cblxuICAgICAgICBpZiAobmV4dFBvc1ggPCAwIHx8IG5leHRQb3NYID49IGxpbWl0cy54IHx8IG5leHRQb3NZIDwgMCB8fCBuZXh0UG9zWSA+PSBsaW1pdHMueSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBJbnRDb29yZGluYXRlKG5leHRQb3NYLCBuZXh0UG9zWSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBJbnRDb29yZGluYXRlKG5leHRQb3NYLCBuZXh0UG9zWSk7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlQ29tbWFuZChmcm9tLCB0bykge1xuICAgICAgICBsZXQgZnJvbVggPSBmcm9tLmNvb3JkaW5hdGVzLng7XG4gICAgICAgIGxldCBmcm9tWSA9IGZyb20uY29vcmRpbmF0ZXMueTtcbiAgICAgICAgbGV0IHRvWCA9IHRvLmNvb3JkaW5hdGVzLng7XG4gICAgICAgIGxldCB0b1kgPSB0by5jb29yZGluYXRlcy55O1xuICAgICAgICBsZXQgY3VyckRpcmVjdGlvbiA9IHRoaXMuZGlyZWN0aW9uO1xuXG4gICAgICAgIGlmIChmcm9tWCAtIHRvWCA+IDAgJiYgIShjdXJyRGlyZWN0aW9uID09ICdSSUdIVCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IExlZnRUdXJuQ29tbWFuZCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmcm9tWCAtIHRvWCA8IDAgJiYgIShjdXJyRGlyZWN0aW9uID09ICdMRUZUJykpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmlnaHRUdXJuQ29tbWFuZCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmcm9tWSAtIHRvWSA+IDAgJiYgIShjdXJyRGlyZWN0aW9uID09ICdET1dOJykpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVXBUdXJuQ29tbWFuZCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmcm9tWSAtIHRvWSA8IDAgJiYgIShjdXJyRGlyZWN0aW9uID09ICdVUCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERvd25UdXJuQ29tbWFuZCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG5cbiAgICBlYXQoZ2Fpbikge1xuICAgICAgICBsZXQgYWRkaXRpb25hbE5vZGVzID0gW107XG4gICAgICAgIGxldCB0YWlsTm9kZSA9IHRoaXMuYm9keVt0aGlzLmJvZHlMZW5ndGggLSAxXTtcbiAgICAgICAgbGV0IHRhaWxOb2RlQ29vcmRpbmF0ZXMgPSB0YWlsTm9kZS5jb29yZGluYXRlcztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYWluOyBpKyspIHtcbiAgICAgICAgICAgIGFkZGl0aW9uYWxOb2Rlcy5wdXNoKG5ldyBJbnRDb29yZGluYXRlKHRhaWxOb2RlQ29vcmRpbmF0ZXMueCwgdGFpbE5vZGVDb29yZGluYXRlcy55KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWRkaXRpb25hbE5vZGVzO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZVBhdGgoKSB7XG4gICAgICAgIGxldCBzdHJhdGVneSA9IHRoaXMuc3RhdGUuc3RyYXRlZ3k7XG4gICAgICAgIGxldCBwYXRoID0gW107XG4gICAgICAgIGlmIChzdHJhdGVneSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdHJhdGVneS5jYWxjdWxhdGVUYXJnZXQgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRhcmdldCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IHN0cmF0ZWd5LmNhbGN1bGF0ZVRhcmdldCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RyYXRlZ3kucGF0aGZpbmRlciA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0VGltZSA9IHRoaXMudGltZXIuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBzdHJhdGVneS5wYXRoZmluZGVyKHRoaXMpO1xuICAgICAgICAgICAgICAgIGxldCBlbmRUaW1lID0gdGhpcy50aW1lci5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lci5nZXRcbiAgICAgICAgICAgICAgICBsZXQgcnVudGltZSA9IGVuZFRpbWUgLSBzdGFydFRpbWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFja3MucHJvcGFnYXRlUnVudGltZSh0aGlzLklELCBydW50aW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9XG5cbiAgICBpc09wcG9zaXRlRGlyZWN0aW9uKGRpcmVjdGlvbikge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5kaXJlY3Rpb24gPT09ICdSSUdIVCcgJiYgZGlyZWN0aW9uID09PSAnTEVGVCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuZGlyZWN0aW9uID09PSAnTEVGVCcgJiYgZGlyZWN0aW9uID09PSAnUklHSFQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmRpcmVjdGlvbiA9PT0gJ1VQJyAmJiBkaXJlY3Rpb24gPT09ICdET1dOJykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5kaXJlY3Rpb24gPT09ICdET1dOJyAmJiBkaXJlY3Rpb24gPT09ICdVUCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpc0FsaXZlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5zdGF0dXMgPT09ICdBTElWRSc7XG4gICAgfVxuXG4gICAgZ2V0IGJvZHlMZW5ndGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmJvZHkubGVuZ3RoO1xuICAgIH1cblxuICAgIGdldCBlbmRPZkJvZHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvZHlbdGhpcy5ib2R5TGVuZ3RoIC0gMV07XG4gICAgfVxuXG4gICAgZ2V0IGJvZHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmJvZHk7XG4gICAgfVxuXG4gICAgZ2V0IGJhc2VWZWxvY2l0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuYmFzZVZlbG9jaXR5O1xuICAgIH1cblxuICAgIGdldCBoZWFkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2R5WzBdO1xuICAgIH1cblxuICAgIGdldCBkaXJlY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmRpcmVjdGlvbjtcbiAgICB9XG4gICAgZ2V0IHN0YXR1cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuc3RhdHVzO1xuICAgIH1cblxuICAgIGdldCB0YXJnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnRhcmdldDtcbiAgICB9XG5cbiAgICBnZXQgdGFpbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9keS5zbGljZSgxKTtcbiAgICB9XG5cbiAgICBnZXQgSUQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLklEO1xuICAgIH1cblxuICAgIGdldCBwYXRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5wYXRoO1xuICAgIH1cblxuICAgIGdldCBjb2xvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuY29sb3I7XG4gICAgfVxufSIsImltcG9ydCBPYnNlcnZlckVudGl0eSBmcm9tICcuL0Fic3RyYWN0Q2xhc3Nlcy9PYnNlcnZlckVudGl0eSc7XG5pbXBvcnQgY2xvbmVEZWVwIGZyb20gJ2xvZGFzaC9jbG9uZURlZXAnO1xuaW1wb3J0IENvbmZpZ0Vycm9yIGZyb20gJy4vZXJyb3JzL0NvbmZpZ0Vycm9yLmpzJztcbmltcG9ydCBJbnRDb29yZGluYXRlIGZyb20gJy4vaW50Q29vcmRpbmF0ZS5qcyc7XG5cbmltcG9ydCB7aWRHZW5lcmF0b3J9IGZyb20gJy4vY3VzdG9tVXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpbGwgZXh0ZW5kcyBPYnNlcnZlckVudGl0eSB7XG4gICAgY29uc3RydWN0b3IoY2FsbGJhY2tzLCBjb25maWcsIG5vdGlmaWVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIFxuICAgICAgICBsZXQgcGFyc2VkQ29uZmlnXG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgcGFyc2VkQ29uZmlnID0gdGhpcy5wYXJzZUNvbmZpZyhjb25maWcpO1xuICAgICAgICB9Y2F0Y2goZSl7XG4gICAgICAgICAgICBpZih0eXBlb2YgY2FsbGJhY2tzLnByb3BhZ2F0ZUVycm9yID09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5wcm9wYWdhdGVFcnJvcihlKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YXRlID0ge307XG4gICAgICAgIHRoaXMuc3RhdGUuSUQgPSBpZEdlbmVyYXRvcigpO1xuXG5cbiAgICAgICAgdGhpcy5jYWxsYmFja3MgPSBjYWxsYmFja3M7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZSwgcGFyc2VkQ29uZmlnKTtcblxuICAgICAgICBpZiAobm90aWZpZXIpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZpZXIgPSBub3RpZmllcjtcbiAgICAgICAgICAgIG5vdGlmaWVyLnN1YnNjcmliZSh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhcnNlQ29uZmlnKGNvbmZpZykge1xuICAgICAgICBpZiAoY29uZmlnID09IHVuZGVmaW5lZCB8fCBjb25maWcucGlsbFZhbHVlID09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRQb3NYID09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRQb3NZID09IHVuZGVmaW5lZCB8fCBjb25maWcubGltaXRYID09IHVuZGVmaW5lZCB8fCBjb25maWcubGltaXRZID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IENvbmZpZ0Vycm9yKCdNaXNzaW5nIGNvbmZpZyBvciBtaXNzaW5nIGZpZWxkcyBpbiBjb25maWcuIEZpZWxkcyBuZWVkZWQ6IHBpbGxWYWx1ZTogaW50ZWdlciwgc3RhcnRQb3NYOiBJbnRlZ2VyLCBzdGFydFBvc1k6IEludGVnZXIuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcGFyc2VkQ29uZmlnID0ge307XG4gICAgICAgIHBhcnNlZENvbmZpZy5waWxsVmFsdWUgPSBOdW1iZXIoY29uZmlnLnBpbGxWYWx1ZSk7XG4gICAgICAgIHBhcnNlZENvbmZpZy5wb3NpdGlvbiA9IG5ldyBJbnRDb29yZGluYXRlKE51bWJlcihjb25maWcuc3RhcnRQb3NYKSwgTnVtYmVyKGNvbmZpZy5zdGFydFBvc1kpKTtcbiAgICAgICAgcGFyc2VkQ29uZmlnLmxpbWl0cyA9IHt9O1xuICAgICAgICBwYXJzZWRDb25maWcubGltaXRzLnggPSBOdW1iZXIoY29uZmlnLmxpbWl0WCk7XG4gICAgICAgIHBhcnNlZENvbmZpZy5saW1pdHMueSA9IE51bWJlcihjb25maWcubGltaXRZKTtcblxuICAgICAgICBpZihjb25maWcuY29sb3Ipe1xuICAgICAgICAgICAgcGFyc2VkQ29uZmlnLmNvbG9yID0gY29uZmlnLmNvbG9yO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHBhcnNlZENvbmZpZy5jb2xvciA9ICdyZWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlZENvbmZpZztcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG5cbiAgICB9XG5cbiAgICBzZXRTdGF0ZShvcHRpb25zKSB7XG4gICAgICAgIGxldCBuZXh0U3RhdGUgPSBjbG9uZURlZXAodGhpcy5zdGF0ZSk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24obmV4dFN0YXRlLCBvcHRpb25zKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gbmV4dFN0YXRlO1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICBsZXQgcGFyc2VkQ29uZmlnID0gdGhpcy5wYXJzZUNvbmZpZyh0aGlzLmNvbmZpZyk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBwb3NpdGlvbjogcGFyc2VkQ29uZmlnLnBvc2l0aW9uLFxuICAgICAgICAgICAgcGlsbFZhbHVlOiBwYXJzZWRDb25maWcucGlsbFZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uTm90aWZ5KGVudGl0eSwgZXZlbnQpIHtcbiAgICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICgnUElMTF9DT0xMSVNJT04nKTpcbiAgICAgICAgICAgICAgICBsZXQgbmV3UG9zaXRpb24gPSB0aGlzLmNhbGN1bGF0ZU5ld1JhbmRvbVBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBuZXdQb3NpdGlvblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlTmV3UmFuZG9tUG9zaXRpb24oKSB7XG4gICAgICAgIGxldCBsaW1pdFggPSB0aGlzLnN0YXRlLmxpbWl0cy54O1xuICAgICAgICBsZXQgbGltaXRZID0gdGhpcy5zdGF0ZS5saW1pdHMueDtcbiAgICAgICAgbGV0IHNuYWtlcyA9IHRoaXMuY2FsbGJhY2tzLmdldEVudGl0eUxpc3QoKS5zbmFrZXM7XG4gICAgICAgIGxldCBvYnN0YWNsZXMgPSB0aGlzLmNhbGxiYWNrcy5nZXRFbnRpdHlMaXN0KCkuYm9hcmQub2JzdGFjbGVzO1xuICAgICAgICBsZXQgYXBwZW5kZWRTbmFrZUJvZGllcyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IHNuYWtlIG9mIHNuYWtlcykge1xuICAgICAgICAgICAgYXBwZW5kZWRTbmFrZUJvZGllcy5wdXNoKC4uLnNuYWtlLmJvZHkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcHBlbmRlZFNuYWtlQm9kaWVzLmxlbmd0aCArIG9ic3RhY2xlcy5sZW5ndGggPj0gbGltaXRYICogbGltaXRZKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEludENvb3JkaW5hdGUodW5kZWZpbmVkLCB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGZyZWVQb3NpdGlvbnMgPSB0aGlzLmNhbGN1bGF0ZUZyZWVQb3NpdGlvbnMoYXBwZW5kZWRTbmFrZUJvZGllcywgb2JzdGFjbGVzKTtcbiAgICAgICAgICAgIGxldCByYW5kb21Qb3NJbmRleCA9IE1hdGgudHJ1bmMoTWF0aC5yYW5kb20oKSAqIChmcmVlUG9zaXRpb25zLmxlbmd0aCAtIDEpKTtcbiAgICAgICAgICAgIGxldCByYW5kb21Qb3NpdGlvbiA9IGZyZWVQb3NpdGlvbnNbcmFuZG9tUG9zSW5kZXhdO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBJbnRDb29yZGluYXRlKHJhbmRvbVBvc2l0aW9uLngsIHJhbmRvbVBvc2l0aW9uLnkpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjYWxjdWxhdGVGcmVlUG9zaXRpb25zKHNuYWtlQm9keSwgb2JzdGFjbGVzKSB7XG4gICAgICAgIGxldCBsaW1pdFggPSB0aGlzLnN0YXRlLmxpbWl0cy54O1xuICAgICAgICBsZXQgbGltaXRZID0gdGhpcy5zdGF0ZS5saW1pdHMueDtcbiAgICAgICAgbGV0IHBvc2l0aW9ucyA9IFtdXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGltaXRYOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGltaXRZOyBqKyspIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHg6IGksXG4gICAgICAgICAgICAgICAgICAgIHk6IGpcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBub2RlIG9mIHNuYWtlQm9keSkge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gbm9kZS5jb29yZGluYXRlcy54ICogbGltaXRYICsgbm9kZS5jb29yZGluYXRlcy55XG4gICAgICAgICAgICBwb3NpdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHBvc2l0aW9ucztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBvYnN0YWNsZSBvZiBvYnN0YWNsZXMpIHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IG9ic3RhY2xlLmNvb3JkaW5hdGVzLnggKiBsaW1pdFggKyBvYnN0YWNsZS5jb29yZGluYXRlcy55XG4gICAgICAgICAgICBwb3NpdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHBvc2l0aW9ucztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwb3NpdGlvbnM7XG4gICAgfVxuXG4gICAgZ2V0IHBvc2l0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5wb3NpdGlvbjtcbiAgICB9XG5cbiAgICBnZXQgcGlsbFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5waWxsVmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IElEKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLklEO1xuICAgIH1cblxuICAgIGdldCBjb2xvcigpe1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5jb2xvcjtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ViamVjdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmIChuZXcudGFyZ2V0ID09PSBTdWJqZWN0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBYnN0cmFjdCBjbGFzcy4gQ2Fubm90IGJlIGluc3RhbnRpYXRlZCFcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaWJlID09PSB2b2lkIDAgfHwgdHlwZW9mIHRoaXMuc3Vic2NyaWJlICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0IG1ldGhvZCAnYWRkT2JzZXJ2ZXInIG11c3QgYmUgb3ZlcnJpZGVuIVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnVuc3Vic2NyaWJlID09PSB2b2lkIDAgfHwgdHlwZW9mIHRoaXMudW5zdWJzY3JpYmUgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWJzdHJhY3QgbWV0aG9kICd1bnN1YnNjcmliZScgbXVzdCBiZSBvdmVycmlkZW4hXCIpO1xuICAgICAgICB9XG4gICAgfVxufTsiLCIvLyBcInVzZSBzdHJpbmN0XCI7XG5cbmltcG9ydCBTdWJqZWN0IGZyb20gJy4vQWJzdHJhY3RDbGFzc2VzL1N1YmplY3QnXG5pbXBvcnQgSW50Q29vcmRpbmF0ZSBmcm9tICcuL2ludENvb3JkaW5hdGUnO1xuaW1wb3J0IE9ic2VydmVyRW50aXR5IGZyb20gJy4vQWJzdHJhY3RDbGFzc2VzL09ic2VydmVyRW50aXR5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90aWZpZXIgZXh0ZW5kcyBTdWJqZWN0IHtcblxuICAgIGNvbnN0cnVjdG9yKGNhbGxiYWNrcykge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLmNhbGxiYWNrcyA9IGNhbGxiYWNrcztcbiAgICAgICAgdGhpcy5sYXN0Tm9kZUJ1ZmZlciA9IHt9O1xuXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlID0gdGhpcy5zdWJzY3JpYmUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVTdGVwQ29sbGlzaW9uVHlwZShuZXh0U3RlcCwgY2FsbGVySUQpIHtcbiAgICAgICAgY29uc3Qgc25ha2VzID0gdGhpcy5jYWxsYmFja3MuZ2V0RW50aXR5TGlzdCgpLnNuYWtlcztcbiAgICAgICAgY29uc3QgYm9hcmQgPSB0aGlzLmNhbGxiYWNrcy5nZXRFbnRpdHlMaXN0KCkuYm9hcmQ7XG4gICAgICAgIGNvbnN0IHBpbGxzID0gdGhpcy5jYWxsYmFja3MuZ2V0RW50aXR5TGlzdCgpLnBpbGxzO1xuICAgICAgICBsZXQgY2FsbGVyU25ha2UgPSB0aGlzLmNhbGxiYWNrcy5nZXRFbnRpdHlCeUlEKGNhbGxlcklEKTtcblxuICAgICAgICB0aGlzLnN0b3JlTGFzdE5vZGUoY2FsbGVySUQsIGNhbGxlclNuYWtlLmVuZE9mQm9keSk7XG5cbiAgICAgICAgaWYgKGJvYXJkKSB7XG4gICAgICAgICAgICBpZiAobmV4dFN0ZXAubnVsbFBvc2l0aW9uID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnPC0tLS0tLS0tLS0tLS0tLVdBTExfQ09MTElTSU9OX0FDSVRPTi0tLS0tLS0tLS0tLS0tLT4nKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKChvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2FsbGVyID0gdGhpcy5jYWxsYmFja3MuZ2V0RW50aXR5QnlJRChjYWxsZXJJRCk7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm9uTm90aWZ5KGNhbGxlciwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJXQUxMX0NPTExJU0lPTlwiXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBvYnN0YWNsZXMgPSBib2FyZC5vYnN0YWNsZXM7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgb2JzdGFjbGUgb2Ygb2JzdGFjbGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvYnN0YWNsZS5jb29yZGluYXRlcy54ID09IG5leHRTdGVwLmNvb3JkaW5hdGVzLnggJiYgb2JzdGFjbGUuY29vcmRpbmF0ZXMueSA9PSBuZXh0U3RlcC5jb29yZGluYXRlcy55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnPC0tLS0tLS0tLS0tLS0tLVdBTExfQ09MTElTSU9OX0FDSVRPTi0tLS0tLS0tLS0tLS0tLT4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2goKG9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhbGxlciA9IHRoaXMuY2FsbGJhY2tzLmdldEVudGl0eUJ5SUQoY2FsbGVySUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm9uTm90aWZ5KGNhbGxlciwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIldBTExfQ09MTElTSU9OXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBwaWxsIG9mIHBpbGxzKSB7XG4gICAgICAgICAgICBpZiAocGlsbC5wb3NpdGlvbi5jb29yZGluYXRlcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAocGlsbC5wb3NpdGlvbi5jb29yZGluYXRlcy54ID09PSBuZXh0U3RlcC5jb29yZGluYXRlcy54ICYmIHBpbGwucG9zaXRpb24uY29vcmRpbmF0ZXMueSA9PT0gbmV4dFN0ZXAuY29vcmRpbmF0ZXMueSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnPC0tLS0tLS0tLS0tLS0tLVBJTExfQ09MTElTSU9OX0FDSVRPTi0tLS0tLS0tLS0tLS0tLT4nKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaCgob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYWxsZXIgPSB0aGlzLmNhbGxiYWNrcy5nZXRFbnRpdHlCeUlEKGNhbGxlcklEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm9uTm90aWZ5KGNhbGxlciwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQSUxMX0NPTExJU0lPTicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGlsbDogcGlsbFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjYWxsZXJTbmFrZS50YXJnZXQgJiYgY2FsbGVyU25ha2UudGFyZ2V0LmNvb3JkaW5hdGVzICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKGNhbGxlclNuYWtlLnRhcmdldCAmJiAoY2FsbGVyU25ha2UudGFyZ2V0LmNvb3JkaW5hdGVzLnggPT09IG5leHRTdGVwLmNvb3JkaW5hdGVzLnggJiYgY2FsbGVyU25ha2UudGFyZ2V0LmNvb3JkaW5hdGVzLnkgPT09IG5leHRTdGVwLmNvb3JkaW5hdGVzLnkpKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJzwtLS0tLS0tLS0tLS0tLS1UQVJHRVRfUkVBQ0hFRC0tLS0tLS0tLS0tLS0tLT4nKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKChvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5vbk5vdGlmeShjYWxsZXJTbmFrZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1RBUkdFVF9SRUFDSEVEJyxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbGFzdE5vZGVzID0ge31cbiAgICAgICAgZm9yIChsZXQgc25ha2Ugb2Ygc25ha2VzKSB7XG4gICAgICAgICAgICBsYXN0Tm9kZXNbc25ha2UuSURdID0gc25ha2UuZW5kT2ZCb2R5O1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5hc3NpZ24obGFzdE5vZGVzLCB0aGlzLmxhc3ROb2RlQnVmZmVyKTtcbiAgICAgICAgbGV0IGluY2x1ZGVzID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhsYXN0Tm9kZXMpKSB7XG4gICAgICAgICAgICBpbmNsdWRlcyA9IGluY2x1ZGVzIHx8IChsYXN0Tm9kZXNba2V5XS5jb29yZGluYXRlcy54ID09IG5leHRTdGVwLmNvb3JkaW5hdGVzLnggJiYgbGFzdE5vZGVzW2tleV0uY29vcmRpbmF0ZXMueSA9PSBuZXh0U3RlcC5jb29yZGluYXRlcy55KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWluY2x1ZGVzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBzbmFrZSBvZiBzbmFrZXMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBub2RlIG9mIHNuYWtlLmJvZHkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRTdGVwLmNvb3JkaW5hdGVzLnggPT09IG5vZGUuY29vcmRpbmF0ZXMueCAmJiBuZXh0U3RlcC5jb29yZGluYXRlcy55ID09PSBub2RlLmNvb3JkaW5hdGVzLnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCc8LS0tLS0tLS0tLS0tLS0tQk9EWV9DT0xMSVNJT05fQUNJVE9OLS0tLS0tLS0tLS0tLS0tPicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaCgob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FsbGVyID0gdGhpcy5jYWxsYmFja3MuZ2V0RW50aXR5QnlJRChjYWxsZXJJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIub25Ob3RpZnkoY2FsbGVyLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdCT0RZX0NPTExJU0lPTidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzbmFrZXMubGVuZ3RoID09IE9iamVjdC5rZXlzKHRoaXMubGFzdE5vZGVCdWZmZXIpLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0Tm9kZUJ1ZmZlciA9IHt9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICAgIGlmIChvYnNlcnZlciBpbnN0YW5jZW9mIE9ic2VydmVyRW50aXR5KSB7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVycy5hZGQob2JzZXJ2ZXIpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHVuc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLmRlbGV0ZShvYnNlcnZlcilcbiAgICB9XG5cbiAgICBzdG9yZUxhc3ROb2RlKElELCBsYXN0Tm9kZSkge1xuICAgICAgICBpZiAoSUQgJiYgbGFzdE5vZGUgaW5zdGFuY2VvZiBJbnRDb29yZGluYXRlKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3ROb2RlQnVmZmVyW0lEXSA9IGxhc3ROb2RlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn0iLCJpbXBvcnQgQm9hcmQgZnJvbSAnLi9ib2FyZC5qcyc7XG5pbXBvcnQgU25ha2UgZnJvbSAnLi9zbmFrZS5qcyc7XG5pbXBvcnQgUGlsbCBmcm9tICcuL3BpbGwuanMnO1xuaW1wb3J0IE5vdGlmaWVyIGZyb20gJy4vbm90aWZpZXInO1xuXG5pbXBvcnQgQ29uZmlnRXJyb3IgZnJvbSAnLi9lcnJvcnMvQ29uZmlnRXJyb3IuanMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGVsIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcsIHN0cmF0ZWdpZXMpIHtcbiAgICAgICAgdGhpcy5nZXRFbnRpdHlMaXN0ID0gdGhpcy5nZXRFbnRpdHlMaXN0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2V0RW50aXR5QnlJRCA9IHRoaXMuZ2V0RW50aXR5QnlJRC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnByb3BhZ2F0ZUVycm9yID0gdGhpcy5wcm9wYWdhdGVFcnJvci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnByb3BhZ2F0ZVJ1bnRpbWUgPSB0aGlzLnByb3BhZ2F0ZVJ1bnRpbWUuYmluZCh0aGlzKTtcbiAgICAgICAgXG5cbiAgICAgICAgdGhpcy5wYXNzZWREb3duQ2FsbGJhY2tzID0ge1xuICAgICAgICAgICAgZ2V0RW50aXR5TGlzdDogdGhpcy5nZXRFbnRpdHlMaXN0LFxuICAgICAgICAgICAgZ2V0RW50aXR5QnlJRDogdGhpcy5nZXRFbnRpdHlCeUlELFxuICAgICAgICAgICAgcHJvcGFnYXRlRXJyb3I6IHRoaXMucHJvcGFnYXRlRXJyb3IsXG4gICAgICAgICAgICBwcm9wYWdhdGVSdW50aW1lOiB0aGlzLnByb3BhZ2F0ZVJ1bnRpbWVcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5ub3RpZmllciA9IG5ldyBOb3RpZmllcih0aGlzLnBhc3NlZERvd25DYWxsYmFja3MpO1xuICAgICAgICB0aGlzLnN0cmF0ZWdpZXMgPSBzdHJhdGVnaWVzO1xuICAgICAgICBcbiAgICAgICAgbGV0IHBhcnNlZENvbmZpZztcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICBwYXJzZWRDb25maWcgPSB0aGlzLnBhcnNlQ29uZmlnKGNvbmZpZyk7XG4gICAgICAgIH1jYXRjaChlKXtcbiAgICAgICAgICAgIGlmKHR5cGVvZiB0aGlzLnByb3BhZ2F0ZUVycm9yID09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcGFnYXRlRXJyb3IoZSk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYocGFyc2VkQ29uZmlnKXtcbiAgICAgICAgICAgIHRoaXMuc2ltdWxhdGlvblNwZWVkID0gcGFyc2VkQ29uZmlnLnNpbXVsYXRpb25TcGVlZDtcbiAgICAgICAgICAgIHRoaXMuRW50aXRpZXMgPSB7XG4gICAgICAgICAgICAgICAgc25ha2VzOiBwYXJzZWRDb25maWcuc25ha2VzLFxuICAgICAgICAgICAgICAgIHBpbGxzOiBwYXJzZWRDb25maWcucGlsbHMsXG4gICAgICAgICAgICAgICAgYm9hcmQ6IHBhcnNlZENvbmZpZy5ib2FyZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgXG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBsZXQgc25ha2VzID0gdGhpcy5FbnRpdGllcy5zbmFrZXM7XG4gICAgICAgIGxldCBwaWxscyA9IHRoaXMuRW50aXRpZXMucGlsbHM7XG4gICAgICAgIGxldCBib2FyZCA9IHRoaXMuRW50aXRpZXMuYm9hcmQ7XG4gICAgICAgIGlmICghdGhpcy5pc0dhbWVPdmVyKCkpIHtcblxuICAgICAgICAgICAgZm9yKGxldCBzbmFrZSBvZiBzbmFrZXMpe1xuICAgICAgICAgICAgICAgIHNuYWtlLnVwZGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yKGxldCBwaWxsIG9mIHBpbGxzKXtcbiAgICAgICAgICAgICAgICBwaWxsLnVwZGF0ZSgpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib2FyZC51cGRhdGUoKTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIGxldCBzbmFrZXMgPSB0aGlzLkVudGl0aWVzLnNuYWtlcztcbiAgICAgICAgICAgIGxldCBwaWxscyA9IHRoaXMuRW50aXRpZXMucGlsbHM7XG4gICAgICAgICAgICBsZXQgYm9hcmQgPSB0aGlzLkVudGl0aWVzLmJvYXJkO1xuICAgICAgICAgICAgZm9yKGxldCBzbmFrZSBvZiBzbmFrZXMpe1xuICAgICAgICAgICAgICAgIHNuYWtlLnJlc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IobGV0IHBpbGwgb2YgcGlsbHMpe1xuICAgICAgICAgICAgICAgIHBpbGwucmVzZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJvYXJkLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgc25ha2VGYWN0b3J5KHNuYWtlQ29uZmlnLCBub3RpZmllcikge1xuICAgICAgICBsZXQgc3RyYXRlZ3lOYW1lID0gc25ha2VDb25maWcuc3RyYXRlZ3k7XG4gICAgICAgIGxldCBzdHJhdGVneVR5cGUgPSB0aGlzLnN0cmF0ZWdpZXNbc3RyYXRlZ3lOYW1lXTtcbiAgICAgICAgbGV0IHN0cmF0ZWd5ID0gbmV3IHN0cmF0ZWd5VHlwZSh0aGlzLnBhc3NlZERvd25DYWxsYmFja3MpO1xuICAgICAgICBsZXQgc25ha2UgPSBuZXcgU25ha2UodGhpcy5wYXNzZWREb3duQ2FsbGJhY2tzLCBzbmFrZUNvbmZpZywgc3RyYXRlZ3ksIG5vdGlmaWVyKTtcbiAgICAgICAgcmV0dXJuIHNuYWtlO1xuICAgIH1cblxuICAgIGlzR2FtZU92ZXIoKXtcbiAgICAgICAgbGV0IGlzR2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICBsZXQgc25ha2VzID0gdGhpcy5FbnRpdGllcy5zbmFrZXM7XG4gICAgICAgIGZvcihsZXQgc25ha2Ugb2Ygc25ha2VzKXtcbiAgICAgICAgICAgIGlzR2FtZU92ZXIgPSBpc0dhbWVPdmVyICYmICEoc25ha2UuaXNBbGl2ZSgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNHYW1lT3ZlcjtcbiAgICB9XG5cbiAgICBwYXJzZUNvbmZpZyhjb25maWcpIHtcbiAgICAgICAgbGV0IHBhcnNlZENvbmZpZyA9IHt9XG4gICAgICAgIGxldCBlbnJpY2hlZENvbmZpZztcblxuICAgICAgICBpZihjb25maWcgPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBDb25maWdFcnJvcignQ29uZmlnIGlzIG1pc3NpbmchJyk7XG4gICAgICAgIH1cblxuICAgICAgICBlbnJpY2hlZENvbmZpZyA9IHRoaXMuZW5yaWNoQ29uZmlnKGNvbmZpZyk7XG4gICAgICAgIGxldCBzbmFrZUNvbmZpZ3MgPSBlbnJpY2hlZENvbmZpZy5zbmFrZUNvbmZpZ3M7XG4gICAgICAgIGxldCBwaWxsQ29uZmlncyA9IGVucmljaGVkQ29uZmlnLnBpbGxDb25maWdzO1xuICAgICAgICBsZXQgYm9hcmRDb25maWcgPSBlbnJpY2hlZENvbmZpZy5ib2FyZENvbmZpZztcbiAgICAgICAgbGV0IG1haW5Db25maWcgPSBlbnJpY2hlZENvbmZpZy5tYWluO1xuXG4gICAgICAgIGlmIChzbmFrZUNvbmZpZ3MpIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNuYWtlQ29uZmlncykpIHtcbiAgICAgICAgICAgICAgICBsZXQgc25ha2VzID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgc25ha2VDb25maWcgb2Ygc25ha2VDb25maWdzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0cmF0ZWdpZXNbc25ha2VDb25maWcuc3RyYXRlZ3ldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc25ha2UgPSB0aGlzLnNuYWtlRmFjdG9yeShzbmFrZUNvbmZpZywgdGhpcy5ub3RpZmllcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbmFrZXMucHVzaChzbmFrZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgQ29uZmlnRXJyb3IoXCJzbmFrZUNvbmZpZydzIHN0cmF0ZWd5IGlzIG5vdCBpbiB0aGUgaW5kZXghXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhcnNlZENvbmZpZy5zbmFrZXMgPSBzbmFrZXM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBDb25maWdFcnJvcignc25ha2VDb25maWdzIGZpZWxkIG9mIGNvbmZpZyBzaG91bGQgYmUgYW4gQXJyYXkhJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBpbGxDb25maWdzKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwaWxsQ29uZmlncykpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGlsbHMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBwaWxsQ29uZmlnIG9mIHBpbGxDb25maWdzKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwaWxsID0gbmV3IFBpbGwodGhpcy5wYXNzZWREb3duQ2FsbGJhY2tzLCBwaWxsQ29uZmlnLCB0aGlzLm5vdGlmaWVyKTtcbiAgICAgICAgICAgICAgICAgICAgcGlsbHMucHVzaChwaWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFyc2VkQ29uZmlnLnBpbGxzID0gcGlsbHM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBDb25maWdFcnJvcigncGlsbENvbmZpZ3MgZmllbGQgb2YgY29uZmlnIHNob3VsZCBiZSBhbiBBcnJheSEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9hcmRDb25maWcpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmRDb25maWcgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBsZXQgYm9hcmQgPSBuZXcgQm9hcmQodGhpcy5wYXNzZWREb3duQ2FsbGJhY2tzLCBib2FyZENvbmZpZyk7XG4gICAgICAgICAgICAgICAgcGFyc2VkQ29uZmlnLmJvYXJkID0gYm9hcmQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBDb25maWdFcnJvcignYm9hcmRDb25maWcgZmllbGQgb2YgY29uZmlnIHNob3VsZCBiZSBhbiBPYmplY3QhJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1haW5Db25maWcpIHtcbiAgICAgICAgICAgIGlmIChtYWluQ29uZmlnLnNpbXVsYXRpb25TcGVlZCkge1xuICAgICAgICAgICAgICAgIGxldCBzaW11bGF0aW9uU3BlZWQgPSBOdW1iZXIobWFpbkNvbmZpZy5zaW11bGF0aW9uU3BlZWQpO1xuICAgICAgICAgICAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHNpbXVsYXRpb25TcGVlZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkQ29uZmlnLnNpbXVsYXRpb25TcGVlZCA9IHNpbXVsYXRpb25TcGVlZDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgQ29uZmlnRXJyb3IoJ3NpbXVsYXRpb25TcGVlZCB2YWx1ZSBzaG91bGQgYmUgSW50ZWdlciEnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBDb25maWdFcnJvcignTWlzc2luZyBtYWluIGNvbmZpZyBmaWVsZCBzaW11bGF0aW9uU3BlZWQhJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyc2VkQ29uZmlnO1xuICAgIH1cblxuICAgIGVucmljaENvbmZpZyhjb25maWcpIHtcbiAgICAgICAgbGV0IGJvYXJkQ29uZmlnID0gY29uZmlnLmJvYXJkQ29uZmlnO1xuICAgICAgICBsZXQgbGltaXRYID0gMDtcbiAgICAgICAgbGV0IGxpbWl0WSA9IDA7XG4gICAgICAgIGxldCBwaWxsQ29uZmlncyA9IGNvbmZpZy5waWxsQ29uZmlncztcbiAgICAgICAgbGV0IHNuYWtlQ29uZmlncyA9IGNvbmZpZy5zbmFrZUNvbmZpZ3M7XG4gICAgICAgIGlmIChib2FyZENvbmZpZykge1xuICAgICAgICAgICAgbGltaXRYID0gYm9hcmRDb25maWcud2lkdGggfHwgbGltaXRYO1xuICAgICAgICAgICAgbGltaXRZID0gYm9hcmRDb25maWcuaGVpZ2h0IHx8IGxpbWl0WTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGlsbENvbmZpZ3MgJiYgQXJyYXkuaXNBcnJheShwaWxsQ29uZmlncykpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHBpbGxDb25maWcgb2YgcGlsbENvbmZpZ3MpIHtcbiAgICAgICAgICAgICAgICBwaWxsQ29uZmlnLmxpbWl0WCA9IGxpbWl0WDtcbiAgICAgICAgICAgICAgICBwaWxsQ29uZmlnLmxpbWl0WSA9IGxpbWl0WTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc25ha2VDb25maWdzICYmIEFycmF5LmlzQXJyYXkoc25ha2VDb25maWdzKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgc25ha2VDb25maWcgb2Ygc25ha2VDb25maWdzKSB7XG4gICAgICAgICAgICAgICAgc25ha2VDb25maWcubGltaXRYID0gbGltaXRYO1xuICAgICAgICAgICAgICAgIHNuYWtlQ29uZmlnLmxpbWl0WSA9IGxpbWl0WTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29uZmlnXG4gICAgfVxuXG5cbiAgICAvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDQUxMQkFDS1MgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi8vXG5cbiAgICBwcm9wYWdhdGVSdW50aW1lKHNuYWtlSUQsIHJ1bnRpbWUpe1xuICAgICAgICBpZih0aGlzLnJ1bnRpbWVzID09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB0aGlzLnJ1bnRpbWVzID0ge307XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ydW50aW1lc1tzbmFrZUlEXSA9IHJ1bnRpbWU7XG4gICAgfVxuXG4gICAgZ2V0RW50aXR5TGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuRW50aXRpZXM7XG4gICAgfVxuXG4gICAgcHJvcGFnYXRlRXJyb3IoZXJyb3Ipe1xuICAgICAgICBpZih0aGlzLmVycm9yQnVmZmVyID09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB0aGlzLmVycm9yQnVmZmVyID0gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICAgICAgICB0aGlzLmVycm9yQnVmZmVyLnB1c2goZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGdldEVudGl0eUJ5SUQoSUQpe1xuICAgICAgICBsZXQgcmV0dXJuRW50aXR5O1xuICAgICAgICBsZXQgc25ha2VzID0gdGhpcy5FbnRpdGllcy5zbmFrZXM7XG4gICAgICAgIGZvcihsZXQgc25ha2Ugb2Ygc25ha2VzKXtcbiAgICAgICAgICAgIGlmKHNuYWtlLklEID09IElEKXtcbiAgICAgICAgICAgICAgICByZXR1cm5FbnRpdHkgPSBzbmFrZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgcGlsbHMgPSB0aGlzLkVudGl0aWVzLnBpbGxzO1xuICAgICAgICBmb3IobGV0IHBpbGwgb2YgcGlsbHMpe1xuICAgICAgICAgICAgaWYocGlsbC5JRCA9PSBJRCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuRW50aXR5ID0gcGlsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgYm9hcmQgPSB0aGlzLkVudGl0aWVzLmJvYXJkO1xuICAgICAgICBpZihib2FyZC5JRCA9PSBJRCl7XG4gICAgICAgICAgICByZXR1cm5FbnRpdHkgPSBib2FyZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0dXJuRW50aXR5O1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJhdGVneXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBpZiAobmV3LnRhcmdldCA9PT0gU3RyYXRlZ3kpe1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWJzdHJhY3QgY2xhc3MuIENhbm5vdCBiZSBpbnN0YW50aWF0ZWQhXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5wYXRoZmluZGVyID09PSB2b2lkIDAgfHwgdHlwZW9mIHRoaXMucGF0aGZpbmRlciAhPT0gJ2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBYnN0cmFjdCBtZXRob2QgJ3BhdGhmaW5kZXInIG11c3QgYmUgb3ZlcnJpZGVuIVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuY2FsY3VsYXRlVGFyZ2V0ID09PSB2b2lkIDAgfHwgdHlwZW9mIHRoaXMuY2FsY3VsYXRlVGFyZ2V0ICE9PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0IG1ldGhvZCAnY2FsY3VsYXRlVGFyZ2V0JyBtdXN0IGJlIG92ZXJyaWRlbiFcIik7XG4gICAgICAgIH1cbiAgICB9XG59OyIsImltcG9ydCBJbnRDb29yZGluYXRlIGZyb20gJy4uL2ludENvb3JkaW5hdGUuanMnO1xuaW1wb3J0IHtFdWNsaWRlYW5EaXN0YW5jZX0gZnJvbSAnLi4vY3VzdG9tVXRpbHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBU3RhcihoZXVyaXNpbSwgc3RhcnQsIGdvYWwsIGdzY29yZVRhYmxlLCBmU2NvcmVUYWJsZSwgZGltZW5zaW9ucykge1xuICAgIGxldCBjbG9zZWRMYWJlbFNldCA9IG5ldyBTZXQoKTtcbiAgICBsZXQgb3BlbkxhYmVsU2V0ID0gbmV3IFNldChbJycgKyBzdGFydC5jb29yZGluYXRlcy54ICArIHN0YXJ0LmNvb3JkaW5hdGVzLnldKTtcbiAgICBsZXQgY2FtZUZyb20gPSB7fVxuXG4gICAgbGV0IHN0YXJ0TGFiZWwgPSAnJyArIHN0YXJ0LmNvb3JkaW5hdGVzLnggKyBzdGFydC5jb29yZGluYXRlcy55O1xuICAgIGdzY29yZVRhYmxlW3N0YXJ0TGFiZWxdLnNjb3JlID0gMDtcbiAgICBmU2NvcmVUYWJsZVtzdGFydExhYmVsXS5zY29yZSA9IGhldXJpc3RpY0Nvc3RFc3RpbWF0ZShoZXVyaXNpbSwgc3RhcnQsIGdvYWwpO1xuXG4gICAgd2hpbGUgKG9wZW5MYWJlbFNldC5zaXplID4gMCkge1xuICAgICAgICBsZXQgY3VycmVudExhYmVsID0gbWluU2NvcmVMYWJlbFNlbGVjdChvcGVuTGFiZWxTZXQsIGZTY29yZVRhYmxlKTtcbiAgICAgICAgaWYgKGN1cnJlbnRMYWJlbCA9PT0gJycgKyBnb2FsLmNvb3JkaW5hdGVzLnggKyBnb2FsLmNvb3JkaW5hdGVzLnkpIHtcbiAgICAgICAgICAgIHJldHVybiByZWNvbnN0cnVjdFBhdGgoY2FtZUZyb20sIGN1cnJlbnRMYWJlbCwgZlNjb3JlVGFibGUpO1xuICAgICAgICB9XG4gICAgICAgIG9wZW5MYWJlbFNldC5kZWxldGUoY3VycmVudExhYmVsKTtcbiAgICAgICAgY2xvc2VkTGFiZWxTZXQuYWRkKGN1cnJlbnRMYWJlbCk7XG5cbiAgICAgICAgbGV0IG5laWdoYm9ycyA9IGdldE5laWdoYm9ycyhmU2NvcmVUYWJsZVtjdXJyZW50TGFiZWxdLCBkaW1lbnNpb25zLmRpbVggLSAxLCBkaW1lbnNpb25zLmRpbVkgLSAxLCBmU2NvcmVUYWJsZSk7XG5cbiAgICAgICAgZm9yIChsZXQgbmVpZ2hib3Igb2YgbmVpZ2hib3JzKSB7XG4gICAgICAgICAgICBpZiAoY2xvc2VkTGFiZWxTZXQuaGFzKG5laWdoYm9yKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL3N6b21zesOpZG9zIG1lesWRIHTDoXZvbHPDoWdhXG4gICAgICAgICAgICBsZXQgdGVudGF0aXZlZ3Njb3JlID0gZ3Njb3JlVGFibGVbY3VycmVudExhYmVsXS5zY29yZSArIEV1Y2xpZGVhbkRpc3RhbmNlKGZTY29yZVRhYmxlW2N1cnJlbnRMYWJlbF0ucG9zaXRpb24sIGZTY29yZVRhYmxlW25laWdoYm9yXS5wb3NpdGlvbikgKyAoMSArIDEvMTAwMCk7XG5cbiAgICAgICAgICAgIGlmICghb3BlbkxhYmVsU2V0LmhhcyhuZWlnaGJvcikpIHtcbiAgICAgICAgICAgICAgICBvcGVuTGFiZWxTZXQuYWRkKG5laWdoYm9yKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGVudGF0aXZlZ3Njb3JlID49IGdzY29yZVRhYmxlW25laWdoYm9yXS5zY29yZSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYW1lRnJvbVtuZWlnaGJvcl0gPSBjdXJyZW50TGFiZWw7XG4gICAgICAgICAgICBnc2NvcmVUYWJsZVtuZWlnaGJvcl0uc2NvcmUgPSB0ZW50YXRpdmVnc2NvcmU7XG4gICAgICAgICAgICBmU2NvcmVUYWJsZVtuZWlnaGJvcl0uc2NvcmUgPSBnc2NvcmVUYWJsZVtuZWlnaGJvcl0uc2NvcmUgKyBoZXVyaXN0aWNDb3N0RXN0aW1hdGUoaGV1cmlzaW0sIGZTY29yZVRhYmxlW25laWdoYm9yXS5wb3NpdGlvbiwgZ29hbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICBbXTtcbn1cblxuLy9TcXVhcmUgb2YgRXVjbGxhYmVsZWFuIGRpc3RhbmNlXG4vLyBUT0RPOiBtYWtlcyB0aGlzIHBhc3NlZCBhcmd1bWVudFxuZnVuY3Rpb24gaGV1cmlzdGljQ29zdEVzdGltYXRlKGhldXJpc2ltLCBmcm9tLCB0bykge1xuICAgIHJldHVybiBNYXRoLnBvdyhoZXVyaXNpbShmcm9tLCB0byksIDIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWluU2NvcmVMYWJlbFNlbGVjdChsYWJlbFNldCwgdGFibGUpIHtcbiAgICBsZXQgc2V0QXNBcnJheSA9IEFycmF5LmZyb20obGFiZWxTZXQpO1xuICAgIGxldCBtaW5FbnRyeSA9IHNldEFzQXJyYXlbMF07XG4gICAgZm9yIChsZXQgZW50cnkgb2YgbGFiZWxTZXQpIHtcbiAgICAgICAgaWYgKHRhYmxlW21pbkVudHJ5XS5zY29yZSA+IHRhYmxlW2VudHJ5XS5zY29yZSkge1xuICAgICAgICAgICAgbWluRW50cnkgPSBlbnRyeTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWluRW50cnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWNvbnN0cnVjdFBhdGgoY2FtZUZyb21MYWJlbExpc3QsIGN1cnJlbnRMYWJlbCwgdGlsZXMpIHtcbiAgICBsZXQgdG90YWxQYXRoID0gW11cbiAgICB0b3RhbFBhdGgucHVzaCh0aWxlc1tjdXJyZW50TGFiZWxdLnBvc2l0aW9uKTtcbiAgICBsZXQga2V5cyA9IG5ldyBTZXQoT2JqZWN0LmtleXMoY2FtZUZyb21MYWJlbExpc3QpKVxuICAgIHdoaWxlIChrZXlzLmhhcyhjdXJyZW50TGFiZWwpKSB7XG4gICAgICAgIGN1cnJlbnRMYWJlbCA9IGNhbWVGcm9tTGFiZWxMaXN0W2N1cnJlbnRMYWJlbF07XG4gICAgICAgIHRvdGFsUGF0aC51bnNoaWZ0KHRpbGVzW2N1cnJlbnRMYWJlbF0ucG9zaXRpb24pO1xuICAgIH1cbiAgICByZXR1cm4gdG90YWxQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmVpZ2hib3JzKHRhYmxlVGlsZSwgbWF4WCwgbWF4WSwgdGFibGUpIHtcbiAgICBsZXQgbmVpZ2hib3JzID0gW107XG4gICAgbGV0IHBvc1ggPSB0YWJsZVRpbGUucG9zaXRpb24uY29vcmRpbmF0ZXMueDtcbiAgICBsZXQgcG9zWSA9IHRhYmxlVGlsZS5wb3NpdGlvbi5jb29yZGluYXRlcy55O1xuICAgIFxuXG4gICAgaWYgKHBvc1ggIT0gMCkge1xuICAgICAgICBsZXQgbGFiZWwgPSAnJyArIChwb3NYIC0gMSkgKyBwb3NZO1xuICAgICAgICBsZXQgbmVpZ2hib3IgPSB0YWJsZVtsYWJlbF07XG4gICAgICAgIGlmKG5laWdoYm9yLnN0YXR1cyAhPSAnU05BS0UnICYmIG5laWdoYm9yLnN0YXR1cyAhPSAnT0JTVEFDTEUnKXtcbiAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKGxhYmVsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocG9zWSAhPSAwKSB7XG4gICAgICAgIGxldCBsYWJlbCA9ICcnICsgcG9zWCArIChwb3NZIC0gMSk7XG4gICAgICAgIGxldCBuZWlnaGJvciA9IHRhYmxlW2xhYmVsXTtcbiAgICAgICAgaWYobmVpZ2hib3Iuc3RhdHVzICE9ICdTTkFLRScgJiYgbmVpZ2hib3Iuc3RhdHVzICE9ICdPQlNUQUNMRScpe1xuICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2gobGFiZWwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwb3NYIDwgbWF4WCkge1xuICAgICAgICBsZXQgbGFiZWwgPSAnJyArIChwb3NYICsgMSkgKyBwb3NZXG4gICAgICAgIGxldCBuZWlnaGJvciA9IHRhYmxlW2xhYmVsXTtcbiAgICAgICAgaWYobmVpZ2hib3Iuc3RhdHVzICE9ICdTTkFLRScgJiYgbmVpZ2hib3Iuc3RhdHVzICE9ICdPQlNUQUNMRScpe1xuICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2gobGFiZWwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwb3NZIDwgbWF4WSkge1xuICAgICAgICBsZXQgbGFiZWwgPSAnJyArIHBvc1ggKyAocG9zWSArIDEpO1xuICAgICAgICBsZXQgbmVpZ2hib3IgPSB0YWJsZVtsYWJlbF07XG4gICAgICAgIGlmKG5laWdoYm9yLnN0YXR1cyAhPSAnU05BS0UnICYmIG5laWdoYm9yLnN0YXR1cyAhPSAnT0JTVEFDTEUnKXtcbiAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKGxhYmVsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZWlnaGJvcnM7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEFTdGFyUHJlcHJvY2Vzcyhib2FyZCwgc25ha2VzLCBwaWxscyl7XG4gICAgbGV0IGRpbWVuc2lvbnMgPSBib2FyZC5kaW1lbnNpb25zO1xuICAgIGxldCBvYnN0YWNsZXMgPSBib2FyZC5vYnN0YWNsZXM7XG4gICAgbGV0IGdTY29yZVRhYmxlID0ge307XG4gICAgbGV0IGZTY29yZVRhYmxlID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaW1lbnNpb25zLmRpbVg7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRpbWVuc2lvbnMuZGltWTsgaisrKSB7XG4gICAgICAgICAgICBsZXQgc3RhdHVzID0gJ0VNUFRZJ1xuXG4gICAgICAgICAgICBpZihzdGF0dXMgPT0gJ0VNUFRZJyl7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBvYnN0YWNsZSBvZiBvYnN0YWNsZXMpe1xuICAgICAgICAgICAgICAgICAgICBpZihvYnN0YWNsZS5jb29yZGluYXRlcy54ID09IGkgJiYgb2JzdGFjbGUuY29vcmRpbmF0ZXMueSA9PSBqKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cyA9ICdPQlNUQUNMRSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yKGxldCBwaWxsIG9mIHBpbGxzKXtcbiAgICAgICAgICAgICAgICBpZihwaWxsLnBvc2l0aW9uLmNvb3JkaW5hdGVzLnggPT0gaSAmJiBwaWxsLnBvc2l0aW9uLmNvb3JkaW5hdGVzLnkgPT0gail7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyA9ICdQSUxMJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoc3RhdHVzID09ICdFTVBUWScpe1xuICAgICAgICAgICAgICAgIGZvcihsZXQgc25ha2Ugb2Ygc25ha2VzKXtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBub2RlIG9mIHNuYWtlLmJvZHkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYobm9kZS5jb29yZGluYXRlcy54ID09IGkgJiYgbm9kZS5jb29yZGluYXRlcy55ID09IGope1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cyA9ICdTTkFLRSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnU2NvcmVUYWJsZVsnJyArIGkgKyBqXSA9IHtcbiAgICAgICAgICAgICAgICBzY29yZTogSW5maW5pdHksXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IG5ldyBJbnRDb29yZGluYXRlKGksaiksXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZTY29yZVRhYmxlWycnICsgaSArIGpdID0ge1xuICAgICAgICAgICAgICAgIHNjb3JlOiBJbmZpbml0eSxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogbmV3IEludENvb3JkaW5hdGUoaSxqKSxcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHN0YXR1c1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGdTY29yZVRhYmxlOiBnU2NvcmVUYWJsZSxcbiAgICAgICAgZlNjb3JlVGFibGU6IGZTY29yZVRhYmxlXG4gICAgfTtcbn0iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbi8vIGJhc2VkIG9mZiBodHRwczovL2dpdGh1Yi5jb20vZGVmdW5jdHpvbWJpZS9ub2RlLXByb2Nlc3MvYmxvYi9tYXN0ZXIvYnJvd3Nlci5qc1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbnZhciBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuaWYgKHR5cGVvZiBnbG9iYWwuc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xufVxuaWYgKHR5cGVvZiBnbG9iYWwuY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xufVxuXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5leHBvcnQgZnVuY3Rpb24gbmV4dFRpY2soZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn1cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5leHBvcnQgdmFyIHRpdGxlID0gJ2Jyb3dzZXInO1xuZXhwb3J0IHZhciBwbGF0Zm9ybSA9ICdicm93c2VyJztcbmV4cG9ydCB2YXIgYnJvd3NlciA9IHRydWU7XG5leHBvcnQgdmFyIGVudiA9IHt9O1xuZXhwb3J0IHZhciBhcmd2ID0gW107XG5leHBvcnQgdmFyIHZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbmV4cG9ydCB2YXIgdmVyc2lvbnMgPSB7fTtcbmV4cG9ydCB2YXIgcmVsZWFzZSA9IHt9O1xuZXhwb3J0IHZhciBjb25maWcgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmV4cG9ydCB2YXIgb24gPSBub29wO1xuZXhwb3J0IHZhciBhZGRMaXN0ZW5lciA9IG5vb3A7XG5leHBvcnQgdmFyIG9uY2UgPSBub29wO1xuZXhwb3J0IHZhciBvZmYgPSBub29wO1xuZXhwb3J0IHZhciByZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5leHBvcnQgdmFyIHJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5leHBvcnQgdmFyIGVtaXQgPSBub29wO1xuXG5leHBvcnQgZnVuY3Rpb24gYmluZGluZyhuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3dkICgpIHsgcmV0dXJuICcvJyB9XG5leHBvcnQgZnVuY3Rpb24gY2hkaXIgKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIHVtYXNrKCkgeyByZXR1cm4gMDsgfVxuXG4vLyBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9rdW1hdmlzL2Jyb3dzZXItcHJvY2Vzcy1ocnRpbWUvYmxvYi9tYXN0ZXIvaW5kZXguanNcbnZhciBwZXJmb3JtYW5jZSA9IGdsb2JhbC5wZXJmb3JtYW5jZSB8fCB7fVxudmFyIHBlcmZvcm1hbmNlTm93ID1cbiAgcGVyZm9ybWFuY2Uubm93ICAgICAgICB8fFxuICBwZXJmb3JtYW5jZS5tb3pOb3cgICAgIHx8XG4gIHBlcmZvcm1hbmNlLm1zTm93ICAgICAgfHxcbiAgcGVyZm9ybWFuY2Uub05vdyAgICAgICB8fFxuICBwZXJmb3JtYW5jZS53ZWJraXROb3cgIHx8XG4gIGZ1bmN0aW9uKCl7IHJldHVybiAobmV3IERhdGUoKSkuZ2V0VGltZSgpIH1cblxuLy8gZ2VuZXJhdGUgdGltZXN0YW1wIG9yIGRlbHRhXG4vLyBzZWUgaHR0cDovL25vZGVqcy5vcmcvYXBpL3Byb2Nlc3MuaHRtbCNwcm9jZXNzX3Byb2Nlc3NfaHJ0aW1lXG5leHBvcnQgZnVuY3Rpb24gaHJ0aW1lKHByZXZpb3VzVGltZXN0YW1wKXtcbiAgdmFyIGNsb2NrdGltZSA9IHBlcmZvcm1hbmNlTm93LmNhbGwocGVyZm9ybWFuY2UpKjFlLTNcbiAgdmFyIHNlY29uZHMgPSBNYXRoLmZsb29yKGNsb2NrdGltZSlcbiAgdmFyIG5hbm9zZWNvbmRzID0gTWF0aC5mbG9vcigoY2xvY2t0aW1lJTEpKjFlOSlcbiAgaWYgKHByZXZpb3VzVGltZXN0YW1wKSB7XG4gICAgc2Vjb25kcyA9IHNlY29uZHMgLSBwcmV2aW91c1RpbWVzdGFtcFswXVxuICAgIG5hbm9zZWNvbmRzID0gbmFub3NlY29uZHMgLSBwcmV2aW91c1RpbWVzdGFtcFsxXVxuICAgIGlmIChuYW5vc2Vjb25kczwwKSB7XG4gICAgICBzZWNvbmRzLS1cbiAgICAgIG5hbm9zZWNvbmRzICs9IDFlOVxuICAgIH1cbiAgfVxuICByZXR1cm4gW3NlY29uZHMsbmFub3NlY29uZHNdXG59XG5cbnZhciBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpO1xuZXhwb3J0IGZ1bmN0aW9uIHVwdGltZSgpIHtcbiAgdmFyIGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcbiAgdmFyIGRpZiA9IGN1cnJlbnRUaW1lIC0gc3RhcnRUaW1lO1xuICByZXR1cm4gZGlmIC8gMTAwMDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuZXh0VGljazogbmV4dFRpY2ssXG4gIHRpdGxlOiB0aXRsZSxcbiAgYnJvd3NlcjogYnJvd3NlcixcbiAgZW52OiBlbnYsXG4gIGFyZ3Y6IGFyZ3YsXG4gIHZlcnNpb246IHZlcnNpb24sXG4gIHZlcnNpb25zOiB2ZXJzaW9ucyxcbiAgb246IG9uLFxuICBhZGRMaXN0ZW5lcjogYWRkTGlzdGVuZXIsXG4gIG9uY2U6IG9uY2UsXG4gIG9mZjogb2ZmLFxuICByZW1vdmVMaXN0ZW5lcjogcmVtb3ZlTGlzdGVuZXIsXG4gIHJlbW92ZUFsbExpc3RlbmVyczogcmVtb3ZlQWxsTGlzdGVuZXJzLFxuICBlbWl0OiBlbWl0LFxuICBiaW5kaW5nOiBiaW5kaW5nLFxuICBjd2Q6IGN3ZCxcbiAgY2hkaXI6IGNoZGlyLFxuICB1bWFzazogdW1hc2ssXG4gIGhydGltZTogaHJ0aW1lLFxuICBwbGF0Zm9ybTogcGxhdGZvcm0sXG4gIHJlbGVhc2U6IHJlbGVhc2UsXG4gIGNvbmZpZzogY29uZmlnLFxuICB1cHRpbWU6IHVwdGltZVxufTtcbiIsImltcG9ydCBTdHJhdGVneSBmcm9tICcuLi9BYnN0cmFjdENsYXNzZXMvU3RyYXRlZ3knO1xuaW1wb3J0IEFTdGFydEFsZ29yaXRobSBmcm9tICcuL2FTdGFyQWxnb3JpdGhtJ1xuaW1wb3J0IHtBU3RhclByZXByb2Nlc3N9IGZyb20gJy4vYVN0YXJBbGdvcml0aG0nXG5pbXBvcnQge0V1Y2xpZGVhbkRpc3RhbmNlfSBmcm9tICcuLi9jdXN0b21VdGlscy5qcydcbmltcG9ydCB7IHByb21pc2lmeSB9IGZyb20gJ3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGFpbkFTdGFyU3RyYXRlZ3kgZXh0ZW5kcyBTdHJhdGVneXtcbiAgICBjb25zdHJ1Y3RvcihjYWxsYmFja3Mpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNhbGxiYWNrcyA9IGNhbGxiYWNrcztcbiAgICB9XG5cbiAgICBwYXRoZmluZGVyKHNuYWtlKSB7XG4gICAgICAgIGxldCBwaWxscyA9IHRoaXMuY2FsbGJhY2tzLmdldEVudGl0eUxpc3QoKS5waWxscztcbiAgICAgICAgbGV0IGJvYXJkID0gdGhpcy5jYWxsYmFja3MuZ2V0RW50aXR5TGlzdCgpLmJvYXJkO1xuICAgICAgICBsZXQgc25ha2VzID0gdGhpcy5jYWxsYmFja3MuZ2V0RW50aXR5TGlzdCgpLnNuYWtlcztcbiAgICAgICAgbGV0IGRpbWVuc2lvbnMgPSBib2FyZC5kaW1lbnNpb25zO1xuICAgICAgICBsZXQgaGV1cmlzbSA9IEV1Y2xpZGVhbkRpc3RhbmNlO1xuICAgICAgICBsZXQgYVN0YXJQcmVwcm9jZXNzUmVzdWx0ID0gQVN0YXJQcmVwcm9jZXNzKGJvYXJkLHNuYWtlcyxwaWxscyk7XG4gICAgICAgIGxldCBwYXRoID0gQVN0YXJ0QWxnb3JpdGhtKGhldXJpc20sIHNuYWtlLmhlYWQsIHNuYWtlLnRhcmdldCwgYVN0YXJQcmVwcm9jZXNzUmVzdWx0LmdTY29yZVRhYmxlLCBhU3RhclByZXByb2Nlc3NSZXN1bHQuZlNjb3JlVGFibGUsIGRpbWVuc2lvbnMpO1xuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9XG5cbiAgICBcbiAgICBjYWxjdWxhdGVUYXJnZXQoc25ha2UpIHtcbiAgICAgICAgbGV0IHBpbGxzID0gdGhpcy5jYWxsYmFja3MuZ2V0RW50aXR5TGlzdCgpLnBpbGxzO1xuICAgICAgICBsZXQgZmlyc3RQaWxsID0gcGlsbHNbMF07XG4gICAgICAgIGxldCBtaW4gPSBmaXJzdFBpbGw7XG4gICAgICAgIGZvcihsZXQgcGlsbCBvZiBwaWxscyl7XG4gICAgICAgICAgICBsZXQgbWluRGlzdCA9IEV1Y2xpZGVhbkRpc3RhbmNlKHNuYWtlLmhlYWQsIG1pbi5wb3NpdGlvbik7XG4gICAgICAgICAgICBsZXQgY3VyckRpc3QgPSBFdWNsaWRlYW5EaXN0YW5jZShzbmFrZS5oZWFkLCBwaWxsLnBvc2l0aW9uKTtcbiAgICAgICAgICAgIGlmKG1pbkRpc3QgPCBjdXJyRGlzdCl7XG4gICAgICAgICAgICAgICAgbWluID0gcGlsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWluLnBvc2l0aW9uO1xuICAgIH1cbn0iLCJpbXBvcnQgcGxhaW5BU3RhclN0cmF0ZWd5IGZyb20gJy4vcGxhaW5BU3Rhcic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwbGFpbkFTdGFyU3RyYXRlZ3k6IHBsYWluQVN0YXJTdHJhdGVneVxufSIsImltcG9ydCBNb2RlbCBmcm9tICcuL3NyYy9qcy9tb2RlbCc7XG5pbXBvcnQgc3RydGF0ZWdpZUluZGV4IGZyb20gJy4vc3JjL2pzL3BhdGhmaW5kaW5nLWFsZ29yaXRobXMvaW5kZXgnXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vc3JjL2NvbmZpZy9jb25maWcuanNvbic7XG5cbmZ1bmN0aW9uIHNpbXVsYXRlKHRpbWVzLCBjb25maWcpIHtcbiAgICBsZXQgcnVucyA9IFtdO1xuICAgIGxldCBtb2RlbDtcbiAgICAgICAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aW1lczsgaSsrKSB7XG4gICAgICAgIG1vZGVsID0gbmV3IE1vZGVsKGNvbmZpZywgc3RydGF0ZWdpZUluZGV4KTtcbiAgICAgICAgbGV0IGJvYXJkID0gbW9kZWwuZ2V0RW50aXR5TGlzdCgpLmJvYXJkO1xuICAgICAgICBsZXQgZGltZW5zaW9ucyA9IGJvYXJkLmRpbWVuc2lvbnM7XG4gICAgICAgIHdoaWxlICghbW9kZWwuaXNHYW1lT3ZlcigpKSB7XG4gICAgICAgICAgICBtb2RlbC51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGV0IHNuYWtlcyA9IG1vZGVsLmdldEVudGl0eUxpc3QoKS5zbmFrZXM7XG4gICAgICAgIGZvcihsZXQgc25ha2Ugb2Ygc25ha2VzKXtcbiAgICAgICAgICAgIHJ1bnMucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IHNuYWtlLklELFxuICAgICAgICAgICAgICAgIHNjb3JlOiBjYWxjdWxhdGVGaXRuZXNzKHNuYWtlLmJvZHlMZW5ndGgsIGRpbWVuc2lvbnMpLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVEdW1wKHJ1bnMsIG1vZGVsLCB0aW1lcyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUR1bXAocnVucywgbW9kZWwsIHRpbWVzKSB7XG4gICAgbGV0IHNuYWtlcyA9IG1vZGVsLmdldEVudGl0eUxpc3QoKS5zbmFrZXM7XG4gICAgbGV0IGJvYXJkID0gbW9kZWwuZ2V0RW50aXR5TGlzdCgpLmJvYXJkO1xuICAgIGxldCBkaW1lbnNpb25zID0gYm9hcmQuZGltZW5zaW9ucztcblxuICAgIGZvcihsZXQgc25ha2Ugb2Ygc25ha2VzKXtcbiAgICAgICAgbGV0IHNuYWtlU3RhdHMgPSBydW5zLmZpbHRlcigocnVuKSA9PiBydW4uaWQgPT0gc25ha2UuSUQpO1xuICAgICAgICBsZXQgc2NvcmVTdW0gPSAwO1xuICAgICAgICBmb3IobGV0IHNuYWtlU3RhdCBvZiBzbmFrZVN0YXRzKXtcbiAgICAgICAgICAgIHNjb3JlU3VtICs9IHNuYWtlU3RhdC5zY29yZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZml0bmVzcyA9IHNjb3JlU3VtIC8gdGltZXM7XG4gICAgICAgIGNvbnNvbGUubG9nKCdJZDogJyArIHNuYWtlLklEICsgJ1xcbicgKyAnc3RyYXRlZ3k6ICcgKyBzbmFrZS5jb25maWcuc3RyYXRlZ3kgKyAnXFxuJyArICdmaXRuZXNzOiAnICsgZml0bmVzcyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVGaXRuZXNzKHNjb3JlLCBkaW1lbnNpb25zKXtcbiAgICByZXR1cm4gc2NvcmUgLyAoZGltZW5zaW9ucy5kaW1YICogZGltZW5zaW9ucy5kaW1ZKVxufVxuXG5sZXQgbiA9IHByb2Nlc3MuYXJndlswXSB8fCAxMDA7XG5cbnNpbXVsYXRlKDUwLCBjb25maWcpOyJdLCJuYW1lcyI6WyJFbnRpdHkiLCJuZXciLCJ0YXJnZXQiLCJFcnJvciIsInVwZGF0ZSIsInJlc2V0IiwibGlzdENhY2hlQ2xlYXIiLCJfX2RhdGFfXyIsInNpemUiLCJlcSIsInZhbHVlIiwib3RoZXIiLCJhc3NvY0luZGV4T2YiLCJhcnJheSIsImtleSIsImxlbmd0aCIsImFycmF5UHJvdG8iLCJBcnJheSIsInByb3RvdHlwZSIsInNwbGljZSIsImxpc3RDYWNoZURlbGV0ZSIsImRhdGEiLCJpbmRleCIsImxhc3RJbmRleCIsInBvcCIsImNhbGwiLCJsaXN0Q2FjaGVHZXQiLCJ1bmRlZmluZWQiLCJsaXN0Q2FjaGVIYXMiLCJsaXN0Q2FjaGVTZXQiLCJwdXNoIiwiTGlzdENhY2hlIiwiZW50cmllcyIsImNsZWFyIiwiZW50cnkiLCJzZXQiLCJnZXQiLCJoYXMiLCJzdGFja0NsZWFyIiwic3RhY2tEZWxldGUiLCJyZXN1bHQiLCJzdGFja0dldCIsInN0YWNrSGFzIiwiZnJlZUdsb2JhbCIsImdsb2JhbCIsIk9iamVjdCIsImZyZWVTZWxmIiwic2VsZiIsInJvb3QiLCJGdW5jdGlvbiIsIlN5bWJvbCIsIm9iamVjdFByb3RvIiwiaGFzT3duUHJvcGVydHkiLCJuYXRpdmVPYmplY3RUb1N0cmluZyIsInRvU3RyaW5nIiwic3ltVG9TdHJpbmdUYWciLCJ0b1N0cmluZ1RhZyIsImdldFJhd1RhZyIsImlzT3duIiwidGFnIiwidW5tYXNrZWQiLCJlIiwib2JqZWN0VG9TdHJpbmciLCJudWxsVGFnIiwidW5kZWZpbmVkVGFnIiwiYmFzZUdldFRhZyIsImlzT2JqZWN0IiwidHlwZSIsImFzeW5jVGFnIiwiZnVuY1RhZyIsImdlblRhZyIsInByb3h5VGFnIiwiaXNGdW5jdGlvbiIsImNvcmVKc0RhdGEiLCJtYXNrU3JjS2V5IiwidWlkIiwiZXhlYyIsImtleXMiLCJJRV9QUk9UTyIsImlzTWFza2VkIiwiZnVuYyIsImZ1bmNQcm90byIsImZ1bmNUb1N0cmluZyIsInRvU291cmNlIiwicmVSZWdFeHBDaGFyIiwicmVJc0hvc3RDdG9yIiwicmVJc05hdGl2ZSIsIlJlZ0V4cCIsInJlcGxhY2UiLCJiYXNlSXNOYXRpdmUiLCJwYXR0ZXJuIiwidGVzdCIsImdldFZhbHVlIiwib2JqZWN0IiwiZ2V0TmF0aXZlIiwiTWFwIiwibmF0aXZlQ3JlYXRlIiwiaGFzaENsZWFyIiwiaGFzaERlbGV0ZSIsIkhBU0hfVU5ERUZJTkVEIiwiaGFzaEdldCIsImhhc2hIYXMiLCJoYXNoU2V0IiwiSGFzaCIsIm1hcENhY2hlQ2xlYXIiLCJpc0tleWFibGUiLCJnZXRNYXBEYXRhIiwibWFwIiwibWFwQ2FjaGVEZWxldGUiLCJtYXBDYWNoZUdldCIsIm1hcENhY2hlSGFzIiwibWFwQ2FjaGVTZXQiLCJNYXBDYWNoZSIsIkxBUkdFX0FSUkFZX1NJWkUiLCJzdGFja1NldCIsInBhaXJzIiwiU3RhY2siLCJhcnJheUVhY2giLCJpdGVyYXRlZSIsImRlZmluZVByb3BlcnR5IiwiYmFzZUFzc2lnblZhbHVlIiwiYXNzaWduVmFsdWUiLCJvYmpWYWx1ZSIsImNvcHlPYmplY3QiLCJzb3VyY2UiLCJwcm9wcyIsImN1c3RvbWl6ZXIiLCJpc05ldyIsIm5ld1ZhbHVlIiwiYmFzZVRpbWVzIiwibiIsImlzT2JqZWN0TGlrZSIsImFyZ3NUYWciLCJiYXNlSXNBcmd1bWVudHMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImlzQXJndW1lbnRzIiwiYXJndW1lbnRzIiwiaXNBcnJheSIsInN0dWJGYWxzZSIsImZyZWVFeHBvcnRzIiwiZXhwb3J0cyIsIm5vZGVUeXBlIiwiZnJlZU1vZHVsZSIsIm1vZHVsZSIsIm1vZHVsZUV4cG9ydHMiLCJCdWZmZXIiLCJuYXRpdmVJc0J1ZmZlciIsImlzQnVmZmVyIiwiTUFYX1NBRkVfSU5URUdFUiIsInJlSXNVaW50IiwiaXNJbmRleCIsImlzTGVuZ3RoIiwiYXJyYXlUYWciLCJib29sVGFnIiwiZGF0ZVRhZyIsImVycm9yVGFnIiwibWFwVGFnIiwibnVtYmVyVGFnIiwib2JqZWN0VGFnIiwicmVnZXhwVGFnIiwic2V0VGFnIiwic3RyaW5nVGFnIiwid2Vha01hcFRhZyIsImFycmF5QnVmZmVyVGFnIiwiZGF0YVZpZXdUYWciLCJmbG9hdDMyVGFnIiwiZmxvYXQ2NFRhZyIsImludDhUYWciLCJpbnQxNlRhZyIsImludDMyVGFnIiwidWludDhUYWciLCJ1aW50OENsYW1wZWRUYWciLCJ1aW50MTZUYWciLCJ1aW50MzJUYWciLCJ0eXBlZEFycmF5VGFncyIsImJhc2VJc1R5cGVkQXJyYXkiLCJiYXNlVW5hcnkiLCJmcmVlUHJvY2VzcyIsInByb2Nlc3MiLCJub2RlVXRpbCIsImJpbmRpbmciLCJub2RlSXNUeXBlZEFycmF5IiwiaXNUeXBlZEFycmF5IiwiYXJyYXlMaWtlS2V5cyIsImluaGVyaXRlZCIsImlzQXJyIiwiaXNBcmciLCJpc0J1ZmYiLCJpc1R5cGUiLCJza2lwSW5kZXhlcyIsIlN0cmluZyIsImlzUHJvdG90eXBlIiwiQ3RvciIsImNvbnN0cnVjdG9yIiwicHJvdG8iLCJvdmVyQXJnIiwidHJhbnNmb3JtIiwiYXJnIiwibmF0aXZlS2V5cyIsImJhc2VLZXlzIiwiaXNBcnJheUxpa2UiLCJiYXNlQXNzaWduIiwibmF0aXZlS2V5c0luIiwiYmFzZUtleXNJbiIsImlzUHJvdG8iLCJrZXlzSW4iLCJiYXNlQXNzaWduSW4iLCJhbGxvY1Vuc2FmZSIsImNsb25lQnVmZmVyIiwiYnVmZmVyIiwiaXNEZWVwIiwic2xpY2UiLCJjb3B5IiwiY29weUFycmF5IiwiYXJyYXlGaWx0ZXIiLCJwcmVkaWNhdGUiLCJyZXNJbmRleCIsInN0dWJBcnJheSIsIm5hdGl2ZUdldFN5bWJvbHMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJnZXRTeW1ib2xzIiwic3ltYm9sIiwiY29weVN5bWJvbHMiLCJhcnJheVB1c2giLCJ2YWx1ZXMiLCJvZmZzZXQiLCJnZXRQcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsImdldFN5bWJvbHNJbiIsImNvcHlTeW1ib2xzSW4iLCJiYXNlR2V0QWxsS2V5cyIsImtleXNGdW5jIiwic3ltYm9sc0Z1bmMiLCJnZXRBbGxLZXlzIiwiZ2V0QWxsS2V5c0luIiwiRGF0YVZpZXciLCJQcm9taXNlIiwiU2V0IiwiV2Vha01hcCIsInByb21pc2VUYWciLCJkYXRhVmlld0N0b3JTdHJpbmciLCJtYXBDdG9yU3RyaW5nIiwicHJvbWlzZUN0b3JTdHJpbmciLCJzZXRDdG9yU3RyaW5nIiwid2Vha01hcEN0b3JTdHJpbmciLCJnZXRUYWciLCJBcnJheUJ1ZmZlciIsInJlc29sdmUiLCJjdG9yU3RyaW5nIiwiaW5pdENsb25lQXJyYXkiLCJpbnB1dCIsIlVpbnQ4QXJyYXkiLCJjbG9uZUFycmF5QnVmZmVyIiwiYXJyYXlCdWZmZXIiLCJieXRlTGVuZ3RoIiwiY2xvbmVEYXRhVmlldyIsImRhdGFWaWV3IiwiYnl0ZU9mZnNldCIsImFkZE1hcEVudHJ5IiwicGFpciIsImFycmF5UmVkdWNlIiwiYWNjdW11bGF0b3IiLCJpbml0QWNjdW0iLCJtYXBUb0FycmF5IiwiZm9yRWFjaCIsIkNMT05FX0RFRVBfRkxBRyIsImNsb25lTWFwIiwiY2xvbmVGdW5jIiwicmVGbGFncyIsImNsb25lUmVnRXhwIiwicmVnZXhwIiwiYWRkU2V0RW50cnkiLCJhZGQiLCJzZXRUb0FycmF5IiwiY2xvbmVTZXQiLCJzeW1ib2xQcm90byIsInN5bWJvbFZhbHVlT2YiLCJ2YWx1ZU9mIiwiY2xvbmVTeW1ib2wiLCJjbG9uZVR5cGVkQXJyYXkiLCJ0eXBlZEFycmF5Iiwic3ltYm9sVGFnIiwiaW5pdENsb25lQnlUYWciLCJvYmplY3RDcmVhdGUiLCJjcmVhdGUiLCJiYXNlQ3JlYXRlIiwiaW5pdENsb25lT2JqZWN0IiwiQ0xPTkVfRkxBVF9GTEFHIiwiQ0xPTkVfU1lNQk9MU19GTEFHIiwiY2xvbmVhYmxlVGFncyIsImJhc2VDbG9uZSIsImJpdG1hc2siLCJzdGFjayIsImlzRmxhdCIsImlzRnVsbCIsImlzRnVuYyIsInN0YWNrZWQiLCJzdWJWYWx1ZSIsImNsb25lRGVlcCIsIkNvbmZpZ0Vycm9yIiwibWVzc2FnZSIsIm5hbWUiLCJDb29yZGluYXRlRXJyb3IiLCJJbnRDb29yZGluYXRlIiwieCIsInkiLCJudWxsUG9zaXRpb24iLCJOdW1iZXIiLCJpc0ludGVnZXIiLCJJbnRDb29yZGluYXRlRXJyb3IiLCJjb3VudGVyIiwiaWRHZW5lcmF0b3IiLCJpZCIsIkV1Y2xpZGVhbkRpc3RhbmNlIiwiZnJvbSIsInRvIiwiTWF0aCIsInNxcnQiLCJwb3ciLCJjb29yZGluYXRlcyIsIkJvYXJkIiwiY2FsbGJhY2tzIiwiY29uZmlnIiwicGFyc2VkQ29uZmlnIiwicGFyc2VDb25maWciLCJwcm9wYWdhdGVFcnJvciIsInN0YXRlIiwiSUQiLCJhc3NpZ24iLCJ3aWR0aCIsImhlaWdodCIsIm9ic3RhY2xlcyIsInBhcnNlZE9ic3RhY2xlcyIsIm9ic3RhY2xlIiwicG9zaXRpb24iLCJvcHRpb25zIiwibmV4dFN0YXRlIiwiZGltWCIsImRpbVkiLCJPYnNlcnZlckVudGl0eSIsIm9uTm90aWZ5IiwiQ29tbWFuZCIsImV4ZWN1dGUiLCJMZWZ0VHVybkNvbW1hbmQiLCJzbmFrZSIsImhhbmRsZUlucHV0IiwiUmlnaHRUdXJuQ29tbWFuZCIsIkRvd25UdXJuQ29tbWFuZCIsIlVwVHVybkNvbW1hbmQiLCJTbmFrZSIsInN0cmF0ZWd5Iiwibm90aWZpZXIiLCJ2ZWxvY2l0eSIsIm5vdGlmaWNhdGlvbkJ1ZmZlciIsInN0YXR1cyIsInBhdGgiLCJ0aW1lciIsIkRhdGUiLCJzdWJzY3JpYmUiLCJzdGFydERpcmVjdGlvbiIsInN0YXJ0VmVsb2NpdHkiLCJzdGFydFgiLCJzdGFydFkiLCJiYXNlTGVuZ3RoIiwibGltaXRYIiwibGltaXRZIiwiYm9keSIsImRpcmVjdGlvbiIsImJhc2VWZWxvY2l0eSIsImxpbWl0cyIsImkiLCJjb2xvciIsIm5leHREaXJlY3Rpb24iLCJuZXh0VmVsb2NpdHkiLCJuZXh0Qm9keSIsImNvbW1hbmRSZXN1bHQiLCJuZXh0U3RlcCIsImNvbW1hbmQiLCJpc0FsaXZlIiwiY2FsY3VsYXRlUGF0aCIsImNhbGN1bGF0ZUNvbW1hbmQiLCJoZWFkIiwiY2FsY3VsYXRlVmVsb2NpdHkiLCJtb3ZlIiwiY2FsY3VsYXRlU3RlcENvbGxpc2lvblR5cGUiLCJub3RpZmljYXRpb24iLCJwcm9jZXNzTm90aWZpY2F0aW9uIiwic2V0U3RhdGUiLCJlbnRpdHkiLCJldmVudCIsImV2ZW50VHlwZSIsInN0b3JlZE5vdGlmaWNhdGlvbiIsInBheWxvYWQiLCJwaWxsIiwic3RvcmVOb3RpZmljYXRpb24iLCJub3RpZmljYXRpb25SZXN1bHQiLCJlYXQiLCJwaWxsVmFsdWUiLCJkaWUiLCJpc09wcG9zaXRlRGlyZWN0aW9uIiwidmVsb2NpdHlYIiwidmVsb2NpdHlZIiwibmV4dEhlYWQiLCJjYWxjdWxhdGVOZXh0SGVhZCIsInVuc2hpZnQiLCJuZXh0UG9zWCIsIm5leHRQb3NZIiwiZnJvbVgiLCJmcm9tWSIsInRvWCIsInRvWSIsImN1cnJEaXJlY3Rpb24iLCJnYWluIiwiYWRkaXRpb25hbE5vZGVzIiwidGFpbE5vZGUiLCJib2R5TGVuZ3RoIiwidGFpbE5vZGVDb29yZGluYXRlcyIsImNhbGN1bGF0ZVRhcmdldCIsInBhdGhmaW5kZXIiLCJzdGFydFRpbWUiLCJnZXRUaW1lIiwiZW5kVGltZSIsInJ1bnRpbWUiLCJwcm9wYWdhdGVSdW50aW1lIiwiUGlsbCIsInN0YXJ0UG9zWCIsInN0YXJ0UG9zWSIsIm5ld1Bvc2l0aW9uIiwiY2FsY3VsYXRlTmV3UmFuZG9tUG9zaXRpb24iLCJzbmFrZXMiLCJnZXRFbnRpdHlMaXN0IiwiYm9hcmQiLCJhcHBlbmRlZFNuYWtlQm9kaWVzIiwiZnJlZVBvc2l0aW9ucyIsImNhbGN1bGF0ZUZyZWVQb3NpdGlvbnMiLCJyYW5kb21Qb3NJbmRleCIsInRydW5jIiwicmFuZG9tIiwicmFuZG9tUG9zaXRpb24iLCJzbmFrZUJvZHkiLCJwb3NpdGlvbnMiLCJqIiwibm9kZSIsIlN1YmplY3QiLCJ1bnN1YnNjcmliZSIsIk5vdGlmaWVyIiwib2JzZXJ2ZXJzIiwibGFzdE5vZGVCdWZmZXIiLCJiaW5kIiwiY2FsbGVySUQiLCJwaWxscyIsImNhbGxlclNuYWtlIiwiZ2V0RW50aXR5QnlJRCIsInN0b3JlTGFzdE5vZGUiLCJlbmRPZkJvZHkiLCJvYnNlcnZlciIsImNhbGxlciIsImxhc3ROb2RlcyIsImluY2x1ZGVzIiwiZGVsZXRlIiwibGFzdE5vZGUiLCJNb2RlbCIsInN0cmF0ZWdpZXMiLCJwYXNzZWREb3duQ2FsbGJhY2tzIiwic2ltdWxhdGlvblNwZWVkIiwiRW50aXRpZXMiLCJpc0dhbWVPdmVyIiwic25ha2VDb25maWciLCJzdHJhdGVneU5hbWUiLCJzdHJhdGVneVR5cGUiLCJlbnJpY2hlZENvbmZpZyIsImVucmljaENvbmZpZyIsInNuYWtlQ29uZmlncyIsInBpbGxDb25maWdzIiwiYm9hcmRDb25maWciLCJtYWluQ29uZmlnIiwibWFpbiIsInNuYWtlRmFjdG9yeSIsInBpbGxDb25maWciLCJzbmFrZUlEIiwicnVudGltZXMiLCJlcnJvciIsImVycm9yQnVmZmVyIiwicmV0dXJuRW50aXR5IiwiU3RyYXRlZ3kiLCJBU3RhciIsImhldXJpc2ltIiwic3RhcnQiLCJnb2FsIiwiZ3Njb3JlVGFibGUiLCJmU2NvcmVUYWJsZSIsImRpbWVuc2lvbnMiLCJjbG9zZWRMYWJlbFNldCIsIm9wZW5MYWJlbFNldCIsImNhbWVGcm9tIiwic3RhcnRMYWJlbCIsInNjb3JlIiwiaGV1cmlzdGljQ29zdEVzdGltYXRlIiwiY3VycmVudExhYmVsIiwibWluU2NvcmVMYWJlbFNlbGVjdCIsInJlY29uc3RydWN0UGF0aCIsIm5laWdoYm9ycyIsImdldE5laWdoYm9ycyIsIm5laWdoYm9yIiwidGVudGF0aXZlZ3Njb3JlIiwibGFiZWxTZXQiLCJ0YWJsZSIsInNldEFzQXJyYXkiLCJtaW5FbnRyeSIsImNhbWVGcm9tTGFiZWxMaXN0IiwidGlsZXMiLCJ0b3RhbFBhdGgiLCJ0YWJsZVRpbGUiLCJtYXhYIiwibWF4WSIsInBvc1giLCJwb3NZIiwibGFiZWwiLCJBU3RhclByZXByb2Nlc3MiLCJnU2NvcmVUYWJsZSIsIkluZmluaXR5Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInBlcmZvcm1hbmNlIiwicGVyZm9ybWFuY2VOb3ciLCJub3ciLCJtb3pOb3ciLCJtc05vdyIsIm9Ob3ciLCJ3ZWJraXROb3ciLCJQbGFpbkFTdGFyU3RyYXRlZ3kiLCJoZXVyaXNtIiwiYVN0YXJQcmVwcm9jZXNzUmVzdWx0IiwiQVN0YXJ0QWxnb3JpdGhtIiwiZmlyc3RQaWxsIiwibWluIiwibWluRGlzdCIsImN1cnJEaXN0IiwicGxhaW5BU3RhclN0cmF0ZWd5Iiwic2ltdWxhdGUiLCJ0aW1lcyIsInJ1bnMiLCJtb2RlbCIsInN0cnRhdGVnaWVJbmRleCIsImNhbGN1bGF0ZUZpdG5lc3MiLCJjcmVhdGVEdW1wIiwic25ha2VTdGF0cyIsImZpbHRlciIsInJ1biIsInNjb3JlU3VtIiwic25ha2VTdGF0IiwiZml0bmVzcyIsImNvbnNvbGUiLCJsb2ciLCJhcmd2Il0sIm1hcHBpbmdzIjoiOzs7OztRQUFxQkEs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
