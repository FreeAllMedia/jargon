import inflection from "inflection";
import privateData from "incognito";

const i = require('i')();

const getWords = Symbol();

export class Inflector {
	constructor(value) {
		const _ = privateData(this);
		_.value = value;
		Object.defineProperties(this, {
			"plural": {
				enumerable: true,
				get: () => {
					_.value = inflection.pluralize(_.value);
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
					_.value = capitalizedWords.join("");
					return this;
				}
			},
			"snake": {
				enumerable: true,
				get: () => {
					_.value = i.camelize(_.value);
					_.value = _.value.replace(/ /g,"_");
					_.value = i.underscore(_.value);

					return this;
				}
			},
			"foreignKey": {
				enumerable: true,
				get: () => {
					_.value = inflection.foreign_key(_.value);
					return this;
				}
			},
			"pascal": {
				enumerable: true,
				get: () => {
					_.value = inflection.camelize(_.value);
					return this;
				}
			},
			"table": {
				enumerable: true,
				get: () => {
					_.value = inflection.tableize(_.value);
					return this;
				}
			}
		});
	}

	[getWords]() {
		const _ = privateData(this);
		let words = [_.value];
		if(_.value.indexOf(" ") >= 0) {
			words = _.value.split(" ");
		} else if(_.value.indexOf("_") >= 0) {
			words = _.value.split("_");
		} else {
			//TODO get words from camel/pascal
				//split by uppercases
		}
		return words;
	}

	toString() {
		return privateData(this).value.toString();
	}
}

export default function inflect (value) {
	return new Inflector(value);
}
