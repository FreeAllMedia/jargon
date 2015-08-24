"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _libJargonJs = require("../lib/jargon.js");

var _libJargonJs2 = _interopRequireDefault(_libJargonJs);

describe("jargon(string)", function () {

	describe("constructor", function () {
		it("should return a extended string", function () {
			((0, _libJargonJs2["default"])("someString") instanceof _libJargonJs.Inflector).should.be["true"];
		});
	});

	describe(".snake", function () {
		it("should return an inflector object in order to allow chaining", function () {
			((0, _libJargonJs2["default"])("appleTree").snake instanceof _libJargonJs.Inflector).should.be["true"];
		});

		it("should provide a way to get a snake cased string from camel cased string", function () {
			(0, _libJargonJs2["default"])("appleTree").snake.toString().should.equal("apple_tree");
		});

		it("should provide a way to get a snake cased string from title cased string", function () {
			(0, _libJargonJs2["default"])("Apple Tree Lake").snake.toString().should.equal("apple_tree_lake");
		});
	});

	describe(".camel", function () {
		it("should return an inflector object in order to allow chaining", function () {
			((0, _libJargonJs2["default"])("appleTree").camel instanceof _libJargonJs.Inflector).should.be["true"];
		});

		it("should provide a way to get a camel cased string from snake cased string", function () {
			(0, _libJargonJs2["default"])("apple_tree").camel.toString().should.equal("appleTree");
		});

		it("should get a camel case string from a humanized string (with spaces)", function () {
			(0, _libJargonJs2["default"])("apple tree").camel.toString().should.equal("appleTree");
		});

		it("should get a camel case string from a first-capital humanized string (with spaces)", function () {
			(0, _libJargonJs2["default"])("Apple tree").camel.toString().should.equal("appleTree");
		});
	});

	describe(".pascal", function () {
		it("should return an inflector object in order to allow chaining", function () {
			((0, _libJargonJs2["default"])("appleTree").pascal instanceof _libJargonJs.Inflector).should.be["true"];
		});

		it("should provide a way to get a camel cased string from snake cased string", function () {
			(0, _libJargonJs2["default"])("apple_tree").pascal.toString().should.equal("AppleTree");
		});
	});

	describe(".plural", function () {
		it("should return an inflector object in order to allow chaining", function () {
			((0, _libJargonJs2["default"])("appleTree").plural instanceof _libJargonJs.Inflector).should.be["true"];
		});

		it("should provide a way to get a plural for a string", function () {
			(0, _libJargonJs2["default"])("apple").plural.toString().should.equal("apples");
		});
	});

	describe(".foreignKey", function () {
		it("should return an inflector object in order to allow chaining", function () {
			((0, _libJargonJs2["default"])("appleTree").foreignKey instanceof _libJargonJs.Inflector).should.be["true"];
		});

		it("should provide a way to get a foreign key id (add _id + underscore) formatted field for a string", function () {
			(0, _libJargonJs2["default"])("appleTree").foreignKey.toString().should.equal("apple_tree_id");
		});
	});

	describe(".table", function () {
		it("should return an inflector object in order to allow chaining", function () {
			((0, _libJargonJs2["default"])("appleTree").table instanceof _libJargonJs.Inflector).should.be["true"];
		});

		it("should provide a way to get a table name (plural + snake) from a camel cased string", function () {
			(0, _libJargonJs2["default"])("appleTree").table.toString().should.equal("apple_trees");
		});
	});

	describe("(chaining)", function () {
		describe(".camel.plural", function () {
			it("should provide a way to chain camel and plural to", function () {
				(0, _libJargonJs2["default"])("apple_tree").camel.plural.toString().should.equal("appleTrees");
			});
		});

		describe(".plural.snake", function () {
			it("should provide a way to chain camel and plural to", function () {
				(0, _libJargonJs2["default"])("appleTree").plural.snake.toString().should.equal("apple_trees");
			});
		});

		describe(".foreignKey.camel", function () {
			it("should provide a way to chain camel and plural to", function () {
				(0, _libJargonJs2["default"])("appleTree").foreignKey.camel.toString().should.equal("appleTreeId");
			});
		});
	});
});