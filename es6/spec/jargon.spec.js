import inflect, {Inflector} from "../lib/inflect.js";

describe("inflect(string)", () => {

	describe("constructor", () => {
		it("should return a extended string", () => {
			(inflect("someString") instanceof Inflector).should.be.true;
		});
	});

	describe(".snake", () => {
		it("should return an inflector object in order to allow chaining", () => {
			(inflect("appleTree").snake instanceof Inflector).should.be.true;
		});

		it("should provide a way to get a snake cased string from camel cased string", () => {
			inflect("appleTree").snake.toString().should.equal("apple_tree");
		});
	});

	describe(".camel", () => {
		it("should return an inflector object in order to allow chaining", () => {
			(inflect("appleTree").camel instanceof Inflector).should.be.true;
		});

		it("should provide a way to get a camel cased string from snake cased string", () => {
			inflect("apple_tree").camel.toString().should.equal("appleTree");
		});

		it("should get a camel case string from a humanized string (with spaces)", () => {
			inflect("apple tree").camel.toString().should.equal("appleTree");
		});

		it("should get a camel case string from a first-capital humanized string (with spaces)", () => {
			inflect("Apple tree").camel.toString().should.equal("appleTree");
		});
	});

	describe(".pascal", () => {
		it("should return an inflector object in order to allow chaining", () => {
			(inflect("appleTree").pascal instanceof Inflector).should.be.true;
		});

		it("should provide a way to get a camel cased string from snake cased string", () => {
			inflect("apple_tree").pascal.toString().should.equal("AppleTree");
		});
	});

	describe(".plural", () => {
		it("should return an inflector object in order to allow chaining", () => {
			(inflect("appleTree").plural instanceof Inflector).should.be.true;
		});

		it("should provide a way to get a plural for a string", () => {
			inflect("apple").plural.toString().should.equal("apples");
		});
	});

	describe(".foreignKey", () => {
		it("should return an inflector object in order to allow chaining", () => {
			(inflect("appleTree").foreignKey instanceof Inflector).should.be.true;
		});

		it("should provide a way to get a foreign key id (add _id + underscore) formatted field for a string", () => {
			inflect("appleTree").foreignKey.toString().should.equal("apple_tree_id");
		});
	});

	describe(".table", () => {
		it("should return an inflector object in order to allow chaining", () => {
			(inflect("appleTree").table instanceof Inflector).should.be.true;
		});

		it("should provide a way to get a table name (plural + snake) from a camel cased string", () => {
			inflect("appleTree").table.toString().should.equal("apple_trees");
		});
	});

	describe("(chaining)", () => {
		describe(".camel.plural", () => {
			it("should provide a way to chain camel and plural to", () => {
				inflect("apple_tree").camel.plural.toString().should.equal("appleTrees");
			});
		});

		describe(".plural.snake", () => {
			it("should provide a way to chain camel and plural to", () => {
				inflect("appleTree").plural.snake.toString().should.equal("apple_trees");
			});
		});

		describe(".foreignKey.camel", () => {
			it("should provide a way to chain camel and plural to", () => {
				inflect("appleTree").foreignKey.camel.toString().should.equal("appleTreeId");
			});
		});
	});
});
