# Function Basics

Whenever we have an action we want to perform like adding two numbers or parsing a string, we will define that action in a function.

There are three basic components to every function in JavaScript:

1. **Name** - keyword to identify the function. Should be concise and descriptive of the action performed.
2. **Parameters** - input values for the function which are treated as local variables within the function body.
3. **Body** - the code to be executed when the function is called.

There are two ways to define a function...

#### Declaration

The simplest syntax for defining a function is to assign a statement using the `function` keyword to a variable:

```js

function foo(bar) { bar + 'baz'; }

function multiply (num1, num2) {
  return num1 * num2
}

// Literally, the parts of the function:
function name(parameter, parameter) { body; }

```

#### Expression

Alternatively, you can expressively define a function as well:

```js

var foo = function(bar) { bar + 'baz'; };

var multiply = function (num1, num2) {
  return num1 * num2
}

// Literally, the parts of the function:
var name = function(parameter, parameter) { body; };
```

#### Declarations vs. Expressions

Both do the same thing and run the same chunk of code but they are different.

**Q. What differences do you notice?**

- **Function declarations** define functions without assigning them to variables.
- **Function expressions** assign *anonymous functions* to variables.


While we call/reference functions defined through declarations and expressions the same way, they do have a subtle but important difference...

### Hoisting (10 min / 10:45)

Function declarations are processed before any code is executed, meaning you can call functions before they are declared in the flow of your code. This behavior is known as **hoisting**.

Conversely, function expressions **are not** hoisted, meaning you cannot call them before they are defined in the flow of your code.

What do you think will happen when we run the below code...
```js
multiply(3, 5)
var multiply = function (num1, num2){
  return num1 * num2
}
// function expression
```

Surely the same thing will happen when we run the below code...

```js
multiply(3, 5)
function multiply (num1, num2) {
  return num1 * num2
}
// function declaration
```
> We can successfully call the multiply function before declaring it. When our script file loads, the browser processes all function declarations first, and then runs the rest of our JavaScript from top to bottom.

Knowing this, what will happen each time we call `express` and `declare` in the below example?

```js
express()        // What happens when we run this function at this point in the code?

var express = function () {
  console.log('Function expression called.')
}
```

What about when we run this example?

```js
var express = function () {
  console.log('Function expression called.')
}

declare()        // ???
express()        // ???

function declare () {
  console.log('Function declaration called.')
}
```

You can read more about hoisting [here](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

#### Arrow Functions

Following the release of ECMAScript 6 (ES6) in 2015, anonymous functions can be written as "arrow functions", a syntax adapted from CoffeeScript.
```js
var multiply = function (num1, num2){  // function expression
  return num1 * num2
}
```

What does this look like in ES6?
```js
const multiply = (num1, num2) => {
  return num1 * num2
}
```

Or, to simplify it further..

```js
const multiply = (num1, num2) => num1 * num2
```
Arrow functions with a "concise" function body (no brackets and on one line) have "implicit return" (no return statement necessary)

However, this single line return can be faked with parentheses
```js
const multiply = (num1, num2) => (
  num1 * num2
)
```

### Invoking a Function

In Ruby, methods can be invoked just by calling their name and parameters (either enclosed in parentheses or not), e.g. `puts('Hello world!')`. Invoking a function in JavaScript is similar, except that the parentheses are *required* even if the function does not take any parameters.

Thus, invoking the function defined above would be written as `foo()`. Run this code in the console:

```javascript
function sayHello() { 'hello'; }

sayHello();
```

What happens when we invoke `sayHello()`?  Did you expect it to return the string `'hello'`?  That's a fine expectation&mdash;it is what Ruby would do, after all. Not the case in JavaScript.

### Return Values

We know that methods in Ruby can take arguments as input and produce output.  The same is true in JavaScript.  The output of a function is also called its **return value**.

In JavaScript, there is *no implicit return*. Returning a value from a function requires using the `return` keyword explicitly. In order to get the function `sayHello()` to give us the string `hello` when we invoke it, we would have to write it like this:

```javascript
function sayHello() { return 'hello'; }
```

Any other code we put within the function body will be executed, but it will not be returned. The function below will return the sum of two numbers:

```javascript
function add(x, y) { return x + y; }
```

Though we could also add any other statements we want to the function body. Copy this code into the console:

```javascript
function add(num1, num2) {
  var sum = num1 + num2;
  return sum;
}

add(5,9);
```

Because the `add()` function includes a `return` clause, we can use its return value in other statements. For example:

```javascript
console.log(10 / add(2,3));
```

Codecademy has a good [set of exercises](http://www.codecademy.com/courses/functions-in-javascript-2-0/2) on `return` if you want to explore more.

### Parameters

When we define a function, we can provide an optional list of *parameters* (also called *arguments*).  This is a list of values that will be available to use within the function body.

Each parameter is actually a local variable that is only available within the body of the function.  The concept of where a variable is defined and where it is available to use is referred to as the variable's _scope_. As in Ruby, there are several levels of scope in JavaScript, and parameters are defined as having local scope.

When we call (invoke) a function, we pass arguments or values which are assigned to each parameter in the list. For example, consider the method definition:

```javascript
function doSomething(firstName, num, age) {
  return "You entered name: " + firstName + ", num: " + num + ", age: " + age;
}
```

This method has three parameters, so we need three arguments to call the method.  Here are two examples of calling the method:

```javascript
doSomething("Alex", 42, 12);

var firstName = "Ken";
var num = 15;
doSomething(firstName, num, 21);
```

As you can see, arguments can either be an object (like `"Alex"` and `42`), or variables (like `firstName` and `num`). The arguments are matched to the parameters based on their position in the parameter list.

Thus when we look at the call `doSomething(firstName, num, 21)` the argument `firstName` is in the first position so it matches to the parameter `firstName`.

The important thing to notice is that even though the name of the parameter and argument are the same, this is irrelevant; they are matched on position only.  To illustrate this further, consider the call:

```javascript
doSomething(firstName, 33, num);
```

In this case the third argument `num` gets passed to the parameter `age` because it is in the third position.

#### Optional Parameters

A second feature introduced by ES6 was optional function parameters. The optional parameters function exactly as per Ruby. Optional parameters allow us to define parameters that will default to some pre-determined value if the function is called without passing them in. We can set optional parameters in a function definition by assigning a value to the parameter definition.

```js
function exponentiate (base, exponent = 2) {
  return base ** exponent
}

exponentiate(4, 3)
=> 64

exponentiate(4)
=> 16
```
> Optional parameters are very useful when writing **recursive** functions as they allow values to more easily be passed through multiple function calls


### References

[MDN: JS Reference: Functions and function scope](https://developer.mozilla.org/en/JavaScript/Reference/Functions_and_function_scope)<br>
[Codecademy: Review of Functions in JavaScript](http://www.codecademy.com/courses/functions_in_javascript)
