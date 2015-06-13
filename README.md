# Jargon.js

An inflection/case/format/pluralization component with a chainable transforms.

[![npm version](https://img.shields.io/npm/v/jargon.svg)](https://www.npmjs.com/package/jargon) [![npm downloads](https://img.shields.io/npm/dm/jargon.svg)](https://www.npmjs.com/package/jargon)

[![Build Status](https://travis-ci.org/FreeAllMedia/jargon.png?branch=master)](https://travis-ci.org/FreeAllMedia/jargon) [![Test Coverage](https://codeclimate.com/repos/557b3d7de30ba0742500838c/badges/d525182d1790d6589836/coverage.svg)](https://codeclimate.com/repos/557b3d7de30ba0742500838c/coverage) [![Code Climate](https://codeclimate.com/repos/557b3d7de30ba0742500838c/badges/d525182d1790d6589836/gpa.svg)](https://codeclimate.com/repos/557b3d7de30ba0742500838c/feed)

[![Dependency Status](https://david-dm.org/FreeAllMedia/jargon.png?theme=shields.io)](https://david-dm.org/FreeAllMedia/jargon?theme=shields.io) [![Dev Dependency Status](https://david-dm.org/FreeAllMedia/jargon/dev-status.svg)](https://david-dm.org/FreeAllMedia/jargon?theme=shields.io#info=devDependencies)

## Compatibility

We automatically test every release against:

* **node:** `0.10`, `0.11`, `0.12`, & `iojs`
* **browsers:** `Safari`, `Chrome`, `PhantomJS`, `Firefox`

# Getting Started

## Installation

```
npm install jargon
```

## Setup

### Node.js / Browserify / Webpack

#### Import `inflect` from jargon

```
// ES6
import inflect from "jargon";
```

```
// ES5
var inflect = require("jargon");
```

### Require.js

To make npm packages available with require.js, make sure you have r.js installed first.

```
define(["require"] , function (require) {
    var inflect = require("jargon");
});
```

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

# Transforms

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

# Contribute

We highly encourage you to fork, make enhancements, and then submit pull requests back!

## Our Meager Requirements

1. You must follow strict test-driven best practices.
    * Tests must be written prior to library code being written.
    * Google `Red, Green, Refactor` for more information on this strict expectation.
2. You must adhere to our automated `.eslintrc` style guide and must ensure that it is passing without warnings or errors before you submit a pull request.

## Public Shared Floobits Workspace

https://floobits.com/fam-operations/jargon