const inflection = require("inflection");

const getWords = Symbol();

export class Inflector {
	constructor(value) {
		Object.defineProperties(this, {
			"value": {
				writable: true,
				value: value,
				enumerable: false
			},
			"plural": {
				enumerable: true,
				get: () => {
					this.value = inflection.pluralize(this.value);
					return this;
				}
			},
			"camel": {
				enumerable: true,
				get: () => {
					//get word array
					let words = this[getWords]();
					//camelize
					let capitalizedWords = words.map((word, index) => {
						if(index > 0) {
							return word.charAt(0).toUpperCase() + word.slice(1);
						} else {
							return word.charAt(0).toLowerCase() + word.slice(1);
						}
					});
					this.value = capitalizedWords.join("");
					return this;
				}
			},
			"snake": {
				enumerable: true,
				get: () => {
					this.value = inflection.underscore(this.value);
					return this;
				}
			},
			"foreignKey": {
				enumerable: true,
				get: () => {
					this.value = inflection.foreign_key(this.value);
					return this;
				}
			},
			"pascal": {
				enumerable: true,
				get: () => {
					this.value = inflection.camelize(this.value);
					return this;
				}
			},
			"table": {
				enumerable: true,
				get: () => {
					this.value = inflection.tableize(this.value);
					return this;
				}
			}
		});
	}

	[getWords]() {
		let words = [this.value];
		if(this.value.indexOf(" ") >= 0) {
			words = this.value.split(" ");
		} else if(this.value.indexOf("_") >= 0) {
			words = this.value.split("_");
		} else {
			//TODO get words from camel/pascal
				//split by uppercases
		}
		return words;
	}

	toString() {
		return this.value.toString();
	}
}

export default function inflect (value) {
	return new Inflector(value);
}
