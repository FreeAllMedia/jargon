"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

exports["default"] = inflect;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var inflection = require("inflection");

var getWords = Symbol();

var Inflector = (function () {
	function Inflector(value) {
		var _this = this;

		_classCallCheck(this, Inflector);

		Object.defineProperties(this, {
			"value": {
				writable: true,
				value: value,
				enumerable: false
			},
			"plural": {
				enumerable: true,
				get: function get() {
					_this.value = inflection.pluralize(_this.value);
					return _this;
				}
			},
			"camel": {
				enumerable: true,
				get: function get() {
					//get word array
					var words = _this[getWords]();
					//camelize
					var capitalizedWords = words.map(function (word, index) {
						if (index > 0) {
							return word.charAt(0).toUpperCase() + word.slice(1);
						} else {
							return word.charAt(0).toLowerCase() + word.slice(1);
						}
					});
					_this.value = capitalizedWords.join("");
					return _this;
				}
			},
			"snake": {
				enumerable: true,
				get: function get() {
					_this.value = inflection.underscore(_this.value);
					return _this;
				}
			},
			"foreignKey": {
				enumerable: true,
				get: function get() {
					_this.value = inflection.foreign_key(_this.value);
					return _this;
				}
			},
			"pascal": {
				enumerable: true,
				get: function get() {
					_this.value = inflection.camelize(_this.value);
					return _this;
				}
			},
			"table": {
				enumerable: true,
				get: function get() {
					_this.value = inflection.tableize(_this.value);
					return _this;
				}
			}
		});
	}

	_createClass(Inflector, [{
		key: getWords,
		value: function () {
			var words = [this.value];
			if (this.value.indexOf(" ") >= 0) {
				words = this.value.split(" ");
			} else if (this.value.indexOf("_") >= 0) {
				words = this.value.split("_");
			} else {}
			return words;
		}
	}, {
		key: "toString",
		value: function toString() {
			return this.value.toString();
		}
	}]);

	return Inflector;
})();

exports.Inflector = Inflector;

function inflect(value) {
	return new Inflector(value);
}

//TODO get words from camel/pascal
//split by uppercases