import jargon, {Inflector} from "../lib/jargon.js";

describe("jargon(string)", () => {

	describe("constructor", () => {
		it("should return a extended string", () => {
			(jargon("someString") instanceof Inflector).should.be.true;
		});
	});

	describe(".snake", () => {
		it("should return an inflector object in order to allow chaining", () => {
			(jargon("appleTree").snake instanceof Inflector).should.be.true;
		});

		it("should provide a way to get a snake cased string from camel cased string", () => {
			jargon("appleTree").snake.toString().should.equal("apple_tree");
		});

		it("should provide a way to get a snake cased string from title cased string", () => {
			jargon("Apple Tree Lake").snake.toString().should.equal("apple_tree_lake");
		});
	});

	describe(".camel", () => {
		it("should return an inflector object in order to allow chaining", () => {
			(jargon("appleTree").camel instanceof Inflector).should.be.true;
		});

		it("should provide a way to get a camel cased string from snake cased string", () => {
			jargon("apple_tree").camel.toString().should.equal("appleTree");
		});

		it("should get a camel case string from a humanized string (with spaces)", () => {
			jargon("apple tree").camel.toString().should.equal("appleTree");
		});

		it("should get a camel case string from a first-capital humanized string (with spaces)", () => {
			jargon("Apple tree").camel.toString().should.equal("appleTree");
		});
	});

	describe(".pascal", () => {
		it("should return an inflector object in order to allow chaining", () => {
			(jargon("appleTree").pascal instanceof Inflector).should.be.true;
		});

		it("should provide a way to get a camel cased string from snake cased string", () => {
			jargon("apple_tree").pascal.toString().should.equal("AppleTree");
		});
	});

	describe(".plural", () => {
		it("should return an inflector object in order to allow chaining", () => {
			(jargon("appleTree").plural instanceof Inflector).should.be.true;
		});

		it("should provide a way to get a plural for a string", () => {
			jargon("apple").plural.toString().should.equal("apples");
		});
	});

	describe(".foreignKey", () => {
		it("should return an inflector object in order to allow chaining", () => {
			(jargon("appleTree").foreignKey instanceof Inflector).should.be.true;
		});

		it("should provide a way to get a foreign key id (add _id + underscore) formatted field for a string", () => {
			jargon("appleTree").foreignKey.toString().should.equal("apple_tree_id");
		});
	});

	describe(".table", () => {
		it("should return an inflector object in order to allow chaining", () => {
			(jargon("appleTree").table instanceof Inflector).should.be.true;
		});

		it("should provide a way to get a table name (plural + snake) from a camel cased string", () => {
			jargon("appleTree").table.toString().should.equal("apple_trees");
		});
	});

	describe("(chaining)", () => {
		describe(".camel.plural", () => {
			it("should provide a way to chain camel and plural to", () => {
				jargon("apple_tree").camel.plural.toString().should.equal("appleTrees");
			});
		});

		describe(".plural.snake", () => {
			it("should provide a way to chain camel and plural to", () => {
				jargon("appleTree").plural.snake.toString().should.equal("apple_trees");
			});
		});

		describe(".foreignKey.camel", () => {
			it("should provide a way to chain camel and plural to", () => {
				jargon("appleTree").foreignKey.camel.toString().should.equal("appleTreeId");
			});
		});
	});
});
