# Jargon.js [![npm version](https://img.shields.io/npm/v/jargon.svg)](https://www.npmjs.com/package/jargon) [![license type](https://img.shields.io/npm/l/jargon.svg)](https://github.com/FreeAllMedia/jargon/blob/master/LICENSE) [![npm downloads](https://img.shields.io/npm/dm/jargon.svg)](https://www.npmjs.com/package/jargon) ![ECMAScript 6](https://img.shields.io/badge/ECMAScript-6-red.svg)

ES6 component for string inflection/case/format/pluralization. Highly tested. Supports chaining.

```javascript
import inflect from "jargon";

const myString = "Apple Sauce";

// Single String Transform
inflect(myString).snake.toString(); // "apple_sauce"

// Chained String Transforms
inflect(myString).snake.plural.toString(); // "apple_sauces"
```

[![Build Status](https://travis-ci.org/FreeAllMedia/jargon.png?branch=master)](https://travis-ci.org/FreeAllMedia/jargon) [![Test Coverage](https://codeclimate.com/repos/557b3d7de30ba0742500838c/badges/d525182d1790d6589836/coverage.svg)](https://codeclimate.com/repos/557b3d7de30ba0742500838c/coverage) [![Code Climate](https://codeclimate.com/repos/557b3d7de30ba0742500838c/badges/d525182d1790d6589836/gpa.svg)](https://codeclimate.com/repos/557b3d7de30ba0742500838c/feed) [![Dependency Status](https://david-dm.org/FreeAllMedia/jargon.png?theme=shields.io)](https://david-dm.org/FreeAllMedia/jargon?theme=shields.io) [![Dev Dependency Status](https://david-dm.org/FreeAllMedia/jargon/dev-status.svg)](https://david-dm.org/FreeAllMedia/jargon?theme=shields.io#info=devDependencies)

# Compatibility

*Every single build and release is automatically tested on the following platforms:*

![node 0.12.x](https://img.shields.io/badge/node-0.12.x-brightgreen.svg) ![node 0.11.x](https://img.shields.io/badge/node-0.11.x-brightgreen.svg) ![node 0.10.x](https://img.shields.io/badge/node-0.10.x-brightgreen.svg)
![iojs 2.x.x](https://img.shields.io/badge/iojs-2.x.x-brightgreen.svg) ![iojs 1.x.x](https://img.shields.io/badge/iojs-1.x.x-brightgreen.svg)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/jargon.svg)](https://saucelabs.com/u/jargon)

*If your platform is not listed above, you can test your local environment for compatibility by copying and pasting the following commands into your terminal:*

```
npm install jargon
cd node_modules/jargon
gulp test-local
```

# Installation

Copy and paste the following command into your terminal to install Jargon:

```
npm install jargon --save
```

## Import / Require

```
// ES6
import inflect from "jargon";
```

```
// ES5
var inflect = require("jargon");
```

```
// Require.js
define(["require"] , function (require) {
    var inflect = require("jargon");
});
```

# Getting Started

## Inflector Instances

The `inflect()` command returns an independent `Inflector` instance which allows one or more transforms to be completed, before returning the final string via `.toString()`.

For example, the following two snippets are functionally equivalent:

**Inline:**

```
inflect("apple").plural.toString(); // apples
```

**Progressive:**

```
const inflector = inflect("apple");

inflector.plural;

inflector.toString(); // apples
```

### Chaining Transforms

In addition to single transforms, `Inflector` instances support chaining of multiple transforms, such as in these two functionally equivalent examples:

**Inline:**

```
inflect("apple tree").plural.pascal.toString(); // AppleTrees
```

**Progressive:**

```
const inflector = inflect("apple tree");

inflector.plural;
inflector.pascal;

inflector.toString(); // AppleTrees
```

# String Transforms

Each of these transforms can be chained together to perform more complex changes.

## Plural

```
inflect("apple").plural.toString(); // apples
```

## Camel

```
inflect("apple tree").camel.toString(); // appleTree
```

## Pascal

```
inflect("apple_tree").pascal.toString(); // AppleTree
```

## Snake

```
inflect("appleTree").snake.toString(); // apple_tree
```

## Foreign Key

```
inflect("appleTree").foreignKey.toString(); // apple_tree_id
```

## Table

```
inflect("AppleTree").table.toString(); // apple_trees
```

# How to Contribute

See something that could use improvement? Have a great feature idea? We listen!

You can submit your ideas through our [issues system](https://github.com/FreeAllMedia/jargon/issues), or make the modifications yourself and submit them to us in the form of a [GitHub pull request](https://help.github.com/articles/using-pull-requests/).

We always aim to be friendly and helpful.

## Running Tests

It's easy to run the test suite locally, and *highly recommended* if you're using Jargon.js on a platform we aren't automatically testing for.

```
npm test
```

### SauceLabs Credentials

We've setup our tests to automatically detect whether or not you have our saucelabs credentials installed in your environment (`process.env.SAUCE_USERNAME`).

If our saucelabs credentials are not installed, the tests are setup to automatically detect all browsers you have installed on your local system, then use them to run the tests.

#### Obtaining Our SauceLabs Credentials

If you'd like to develop Jargon.js using SauceLabs, you need only create a new entry in our [issue tracker](https://github.com/FreeAllMedia/jargon/issues) asking for our SauceLabs credentials.

We'll send over all credentials specific to this project so that you can perform comprehensive cross-platform tests.

## Public Shared Floobits Workspace

Whenever we're working on Jargon.js, we connect to a public workspace on FlooBits that lets you see and interact with the developers. Feel free to stop by, say hello, and offer suggestions!

https://floobits.com/fam-operations/jargon

<!-- THIS IS NOT AVAILABLE, YET

### Exceptions

In cases where you need special exceptions to inflection transforms, you can provide a list of `irregular` and `uncountable` phrases which will be honored in all subsequent instances.

```
inflect.irregular = {
  "person": "people",
  "goose": "geese"
};

inflect.uncountable = [
  "sheep"
];

inflect("goose person").plural.toString(); // geese people
inflect("sheep").plural.toString(); // sheep
```

-->