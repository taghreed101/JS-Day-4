# Intro to Javascript

We will start JavaScript: THE programming language that is understood by browsers. It's still a programming language, like Ruby, with types, variables, functions etc. But the syntax in JavaScript is different from Ruby's, so you need to familiarise with it.

## Background & Objectives

The goal of this sidetrack is for you to realize that it's a programming language just like Ruby. It has variables, functions, conditions, loops, etc. We will learn the basics of JavaScript by building on
concepts from Ruby.

To run the Javascript code, we will be using [Node.js](https://nodejs.org/en/) to execute the JavaScript code directly in our terminal.

Make sure that the following command returns a version greater than `10`:

```bash
node -v
```

If not, you might have an older version of Node or it might not be installed on your system. 

If that is the case, on Mac, install Node:

```bash
brew install node
```

and on Ubuntu, you may use this command:

```bash
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt install nodejs
```

## Install ESlint and VSCode ESLint Extension

Before starting, take the time to install **Eslint ** in VS Code: 

1. Install ESLint in Terminal

```bash
npm install -g eslint
```

2. In **Visual Studio Code**, open **Extensions**'s tab:

3. Search for `ESLint` and select it. Click `install`

4. Restart VS Code

It will highlight instantly your syntax errors / style offenses in VS Code. Picking up the JavaScript syntax after Ruby may be trickier, so this should help you **a lot**.


## Navigation

The files are organized into numbered chapters and pages. Move through them in
order, or use them as reference when you are working on the exercises.

### Introduction
- [Readme](01-introduction/readme.md)

### Primitives
- [Numbers](02-primitives/01-numbers.md)
- [Strings](02-primitives/02-strings.md)
- [Variables](02-primitives/03-variables.md)
- [Nulls, Undefined and Booleans](02-primitives/04-nulls_undefined_booleans.md)

### Functions and Methods
- [Functions vs Methods](03-functions-and-methods/01-functions-vs-methods.md)
- [Function Basics](03-functions-and-methods/02-function-basics.md)
- [Built in Methods](03-functions-and-methods/03-built-in-methods.md)
- [IIFE Functions](03-functions-and-methods/04-iife-functions.md)

### Control Flow
- [Conditions and Logic](04-control_flow/01-conditions-and-logic.md)
- [If Statements](04-control_flow/02-if-statements.md)

### Collections
- [Array Basics](05-collections/01-array-basics.md)
- [Array Operations](05-collections/02-array-operations.md)
- [Object Literals](05-collections/03-object-literals.md)

### Loops
- [Looping Basics](06-loops/01-looping-basics.md)
- [Looping Through Arrays](06-loops/02-looping-through-arrays.md)
- [Array Enumeration Methods](06-loops/03-array-core-enumeration-methods.md)

### Objects and Classes
- [What Are Objects and Classes](07-objects-and-classes/01-what-are-objects-and-classes.md)
- [Object Constructors](07-objects-and-classes/02-object-constructors.md)
- [Variables and Properties](07-objects-and-classes/03-variables-and-properties.md)
- [Readers and Writers](07-objects-and-classes/04-readers-and-writers.md)
- [Inheritance](07-objects-and-classes/05-inheritance.md)
- [ES6 Class](07-objects-and-classes/06-es6-classes.md)

### Scopes
- [Scopes](08-scopes/01-scopes-in-javascript.md)


### Document Object Model
- [Document Object Model](09-DOM/01-document-object-model.md)