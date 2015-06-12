[![Code Climate](https://codeclimate.com/repos/557b3d7de30ba0742500838c/badges/d525182d1790d6589836/gpa.svg)](https://codeclimate.com/repos/557b3d7de30ba0742500838c/feed)
[![Test Coverage](https://codeclimate.com/repos/557b3d7de30ba0742500838c/badges/d525182d1790d6589836/coverage.svg)](https://codeclimate.com/repos/557b3d7de30ba0742500838c/coverage)
[![Dependency Status](https://david-dm.org/FreeAllMedia/jargon.png?theme=shields.io)](https://david-dm.org/FreeAllMedia/jargon?theme=shields.io)
[![Dev Dependency Status](https://david-dm.org/FreeAllMedia/jargon/dev-status.svg)](https://david-dm.org/FreeAllMedia/jargon?theme=shields.io#info=devDependencies)
[![Build Status](https://travis-ci.org/FreeAllMedia/jargon.png?branch=master)](https://travis-ci.org/FreeAllMedia/jargon)

# Jargon.js

Change string between case formats and pluralization in a chained interface.

# Installation

## Install NPM Package

```
npm install jargon
```

## Import Jargon Into Your File

**es6:**

```
import jargon from "jargon";
```

**es5:**

```
var jargon = require("jargon");
```

# Usage

These are examples of single transforms on a string. All of the methods below can be chained to create more complex transforms. See [`chaining`](#chaining).

## Pluralization

```
jargon("apple").plural.toString(); //apples
```

## Camel casing
```
jargon("apple tree").camel.toString(); //appleTree
```

## Pascal casing
```
jargon("apple_tree").pascal.toString(); //AppleTree
```

## Snake casing
```
jargon("appleTree").snake.toString(); //apple_tree
```

## Foreign Key casing
```
jargon("appleTree").foreignKey.toString(); //apple_tree_id
```

## Table casing
```
jargon("apple tree").table.toString(); //apples
```

## Chaining
Every method is chainable so you can combine them. But remember to finalize the chain with "toString();".

```
jargon("apple_tree").camel.plural.toString(); //appleTrees
```

# Development

## Style Guide

All pull requests must completely pass our `.eslintrc` style enforcement. Check `./.eslintrc` for a list of our rules.

## Public Shared Floobits Workspace

https://floobits.com/fam-operations/jargon