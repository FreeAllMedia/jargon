"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

exports["default"] = inflect;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _inflection = require("inflection");

var _inflection2 = _interopRequireDefault(_inflection);

var _incognito = require("incognito");

var _incognito2 = _interopRequireDefault(_incognito);

var i = require('i')();

var getWords = Symbol();

var Inflector = (function () {
	function Inflector(value) {
		var _this = this;

		_classCallCheck(this, Inflector);

		var _ = (0, _incognito2["default"])(this);
		_.value = value;
		Object.defineProperties(this, {
			"plural": {
				enumerable: true,
				get: function get() {
					_.value = _inflection2["default"].pluralize(_.value);
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
					_.value = capitalizedWords.join("");
					return _this;
				}
			},
			"snake": {
				enumerable: true,
				get: function get() {
					_.value = i.camelize(_.value);
					_.value = _.value.replace(/ /g, "_");
					_.value = i.underscore(_.value);

					return _this;
				}
			},
			"title": {
				enumerable: true,
				get: function get() {
					_.value = _inflection2["default"].titleize(_.value.replace(/[_-]/, " ").replace(/([a-z])([A-Z])/, "$1 $2"));
					return _this;
				}
			},
			"foreignKey": {
				enumerable: true,
				get: function get() {
					_.value = _inflection2["default"].foreign_key(_.value);
					return _this;
				}
			},
			"pascal": {
				enumerable: true,
				get: function get() {
					_.value = _.value.replace(/[ -]/g, "_");
					_.value = _inflection2["default"].camelize(_.value);
					return _this;
				}
			},
			"table": {
				enumerable: true,
				get: function get() {
					_.value = _inflection2["default"].tableize(_.value);
					return _this;
				}
			}
		});
	}

	_createClass(Inflector, [{
		key: getWords,
		value: function value() {
			var _ = (0, _incognito2["default"])(this);
			var words = [_.value];
			if (_.value.indexOf(" ") >= 0) {
				words = _.value.split(" ");
			} else if (_.value.indexOf("_") >= 0) {
				words = _.value.split("_");
			} else {
				//TODO get words from camel/pascal
				//split by uppercases
			}
			return words;
		}
	}, {
		key: "toString",
		value: function toString() {
			return (0, _incognito2["default"])(this).value.toString();
		}
	}]);

	return Inflector;
})();

exports.Inflector = Inflector;

function inflect(value) {
	return new Inflector(value);
}