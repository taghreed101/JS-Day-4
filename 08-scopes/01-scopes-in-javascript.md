# Scopes in Javascript

Just like Ruby, in Javascript there is the concept of scopes - where a variable can be referenced/used

#### Quick Example

Here's a code snippet that demonstrates some of Javascript's fundamental rules of scope...

```js
function getColor () {
  color = "red"
}

getColor()
console.log(color) // What should we see in the console?
```

Let's see what happens if we add the `var` keyword...

```js
function getAnotherColor () {
  var anotherColor = "green"
}

getAnotherColor()
console.log(anotherColor) // What should we see in the console?
```

#### Rules of Scope in JS

In Javascript, there are two types of scope: **global scope** and **local scope**.

There are four simple rules to remember about scope in JS...

1. Variables created **without** the `var`, `let`, or `const` keywords, no matter where in a program, are placed in the global scope.
2. Variables created **with** the `var`, `let`, or `const` keywords are created in the current local scope.
3. All functions create a new local scope.
4. The current scope includes all outer (enclosing) scopes.

> One consequence of rule 3 is that variables defined outside of any function are inherently global, even if the `var` keyword is used.

![scope diagram](js-es5-scope-2.png)

Another way to say this...

* **Local variables** defined inside a function cannot be accessed from anywhere outside of the function, because the variable is defined only within the scope of the function.
* However, a function can access all variables and functions defined inside the scope in which it is defined (which includes all outer scopes).

### Hoisting and Scopes

#### Functions

A Javascript feature that may impact scope is **hoisting**. This applies to Javascript functions, and was detailed in Function Basics.

Recall that there are two ways to declare functions in Javascript, **function declarations** and **function expressions**.

```js
var sayHello = function () {
    console.log("Hello!")
}

function sayHello () {
    console.log("Hello!")
}
```
A function expression follows the same rules as variable assignment. Since the value of the reference is a function, that function is only available after the assignment. With a function declaration, no matter where you put it in your code, it behaves as if you wrote it as the very first line in your code. This will impact the scope of the function.

#### Variables

Variables are hoisted too, but *their values are not*. More precisely, variable initializations are hoisted, but value assignments are not hoisted.

Variables are first **initialized**, meaning a space in memory is reserved or allocated for the name, but no value is assigned. That variable (or **reference**) will return `undefined` instead of triggering a `ReferenceError`.


```js
console.log("My name is " + firstName)

var firstName = "John"

// My name is undefined