# Variables

When we work with data in JavaScript, we often want to be able to store information.  A variable is used to store a value and can then be used later in the code to retrieve or modify this value.  In JavaScript, unlike Ruby, we use the `var` keyword to prefix variable definition. There are also the keywords `const`, and `let` which all do something very similar with `var` with subtle differences. `var` was around long before `const` and `let` which are newer. People tend to use either `var` or `const` and `let`.

```javascript
var num = 5;
var name = "Joel";
var programmingLanguage = "JavaScript";
```

ES6: 
```javascript
const myVar = 42
console.log(myVar)

const sum = myVar + 8
console.log(sum)

const doubleSum = 2 * sum
console.log(doubleSum)

let unassigned;
console.log(unassigned)
```

If you do not prefix a variable definition with `var`, `const` or `let` then JavaScript will define the variable for you *in the global scope*. This is almost always a Bad Idea. We'll learn more about it when we get to variable scope, but for now just be sure to prefix your variables with the keywords.

As in Ruby, a variable is assigned an initial value when it is created by using the assignment operator `=` which assigns the value on the right of the expression into the variable on the left. The order of this operation is important and the variable always comes first.  Thus `var num = 5` or `let num = 5` assigns the value 5 into the variable `num`, but the statement `var 5 = num` does not make sense. Once a variable has been created, it can be modified or used in an expression later in your program.  This makes your code more readable and helps prevent bugs when you need to change a value (since you will only need to change it in one place).  Make a few variables and expressions with variables:

```javascript
var valueOne = 5;
var valueTwo = 10;
var result = valueOne + valueTwo;
```

ES6:
```javascript
let valueThree = 5;
let valueFour = 10;
let resultTwo = valueThree + valueFour;
```

`const` is slightly different - they are constants, similar to constants in Ruby - variables that are set but are not meant to be redefined.

The JavaScript convention is to write variables and functions in `mixedCase` (as opposed to `CamelCase` or `snake_case`). Why doesn't `mixedCase` get it's own animal? Good question. It should. How about... `turtleCase`. Better.

###Console I/O

JavaScript, being a browser-focused language, does not have the same built-in console functionality as Ruby. In other words, we can't use methods like `puts` and `gets` to create interactive shell scripts. In the console environment of a web browser, however, we do have the ability to print text and receive input using prompts. Try it out:

```javascript
console.log("I will now ask you for your name.");
var name = prompt("Enter your name");
console.log("Hello ".concat(name, ". How are you"));
```

What happened? Well, we used two methods to print text to the console and receive input from the user. The `console.log()` method is somewhat analogous to Ruby's `puts`, and `prompt()` displays a browser prompt with a text field and then returns the value typed into that text field by the user.

JavaScript does not have the capacity to perform string interpolation in the same way as Ruby does: `"#{ruby_variable}"`, so we instead use the `concat()` method on a string object.

###Combined Assignment Operators

In programming, we often want to modify variable values by performing an operation on the original value as shown below:

```javascript
var num = 3;
var result = 0;

num = num * 4;
result = result + 1;
```

This is so common that JavaScript, like Ruby, has a set of Combined Assignment Operators that allow us to write this with less code.  The examples below perform the same operations as the previous code, we just don't have to write the name of the variable on both sides of the assignment operator.

```javascript
num *= 4;
result += 1;
```

###Resources

[MDN: JS Guide: Values, Variables, and Literals](https://developer.mozilla.org/en/JavaScript/Guide/Values%2C_Variables%2C_and_Literals)<br>
[Codecademy: Getting Started With Programming: Variables](http://www.codecademy.com/courses/getting-started-v2/4)
