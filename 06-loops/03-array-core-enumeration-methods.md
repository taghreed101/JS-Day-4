# Array core enumeration methods

Unlike Ruby, JavaScript has a much smaller built in library of objects.  Fortunately, JavaScript does have a some core enumeration methods:

| Ruby | JavaScript |
|:---:|:---:|
| [each](http://ruby-doc.org/core-2.2.0/Array.html#method-i-each) | [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) |
| [map](http://ruby-doc.org/core-2.2.0/Array.html#method-i-map) | [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) |
| [select](http://ruby-doc.org/core-2.2.0/Array.html#method-i-select) | [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) |
| [inject](http://ruby-doc.org/core-2.2.0/Array.html#method-i-inject) | [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) |



### `forEach`

In Ruby, you might call `Array#each` like this:

```ruby
[1,2,3,4].each { |n| puts n }
```

The `{ |n| puts n }` is the block of code passed to `each`.  JavaScript does not have a separate object for blocks, so we instead use a **callback function**: a function called as an argument from another function.  The parameter `func` stands in for a function which will be called with each element of the array.

Here is an example of how you could use this function:

```javascript
// Define an array
var bugs = ["beetle", "spider", "yellow jacket", "firefly"];

// Execute the each() function, passing it a callback function
bugs.forEach(function (bug) {
  console.log(bug);
});
```

#### More about Callback

Callbacks are passed to another function to be called at some later time. What other types of things might we want to trigger a function call on?

We can also build functions with other functions.

```js
function multiplyBy (num) {
  return (anotherNum) => num * anotherNum
}

const multiplyBy2 = multiplyBy(2)
const multiplyBy5 = multiplyBy(5)

console.log(multiplyBy2(4))
console.log(multiplyBy5(4))
```

#### Closures

Notice that in the callback example, even though `num` in not defined within the function being returned, it is still remembered by the function through what is called the function's **closure**.

We can write some really neat code taking advantage of **closures**.

```js
function Locker(password){
  let locked = true
  let content

  return {
    toggle (pwd) {
      if (pwd === password){
        locked = !locked
      }
      return locked
    },
    read () {
      if (locked) {
        return "unlock to read"
      } else {
        return content
      }
    },
    write (newContent) {
      if (locked) {
        return "unlock to write"
      } else {
        content = newContent
        return content
      }
    }
  }
}
```

Eloquent JavaScript has a really great [explanation of closures](http://eloquentjavascript.net/03_functions.html#h_hOd+yVxaku).

### `map`

Ruby's `Array#map` method will pass each element in an array to a block, and then return a new array of the modified elements.  In JavaScript, it works the same way:

```javascript
// Source array:
var numbers = [5, 12, 2, 81, 30];

var doubledNumbers = numbers.map(function timesTwo(x) {
  return x * 2
});
doubledNumbers; // => [10, 24, 4, 162, 60]
```

### `filter`

The `filter` method works the same way as `select`.  A Each element is passed as an argument to a condition function. Depending upon whether or not the result of the function is *truthy* or *falsy*, the element is included in the resulting array.

```javascript
var numbers = [1, 2, 3, 4, 5]

var evens = numbers.filter(function (number) {
  return (number % 2 === 0);
});

evens; // => [2, 4]
```

We could have extracted the function out of the call to `filter`, into its own named function as so:

```javascript
var numbers = [1, 2, 3, 4, 5]

function isEven(number) {
  return (number % 2 === 0);
}

var evens = numbers.filter(isEven);

evens; // => [2, 4]
```

Try using select on the following arrays to filter out unwanted values:

```javascript
// Select the schools with names that have an 'r' in them:
var schools = ["Berkeley", "Notre Dame", "Chicago", "Stanford", "Tulane"];

// Select the multiples of 5:
var numbers = [4,10,39,105,73,20,15];

// Select the sub-arrays that contain less than 3 elements
var grid = [ [0,1,0,0],
             [1,0,1],
             [1,1,0,0,1],
             [0,1],
             [1,0,0,0] ];
```
### `reduce`

Finally, `reduce` works similarly as `Array#inject` or `Array#reduce` in Ruby.


Taking the sum of an array of numbers...

```javascript
var numbers = [10. 20, 30, 40, 50];

function sum(a, b) { return a + b; }

var total = numbers.reduce(sum);

total; // => 150
```

or simplified:

```javascript
const total = [1, 3, 5, 7].reduce((sum, num) => sum + num, 0)
```

Joining an array...
```javascript
var words = ["Who", "goes", "there"];

function joinWithSpace(a, b) { return a + " " + b; }

var sentence = words.reduce(joinWithSpace);

total; // => "Who goes there"
```

Filtering even numbers...

```javascript
const odds = [1, 2, 3, 4, 5, 6, 7].reduce((odds, num) => {
  if (num % 2) { // false if num % 2 === 0
    odds.push(num)
  }
  return odds
}, [])
```

Count even numbers...

```js
const numEvens = [1, 2, 3, 4, 5, 6, 7].reduce((count, num) => {
  if (!(num % 2)) { // false if num % 2 !== 0
    count++
  }
  return count
}, 0)
```

and so on...

For a step by step of how the mechanics of reduce work, check out [this section on the MDN page for reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#How_reduce_works)


### Sort

The `sort` method is similar to Ruby's enumerable method `sort`, but in Javascript it also takes in a test function optionally.

The test function for `sort` is called with two arguments `a` and `b` which represent any two elements being sorted.

Rather than returning `true` or `false` as in the case of the other test functions we've looked at, the compare function should...
- return a negative number if `a` should come before `b`
- return 0 if `a` and `b` are equal
- return a positive number if `a` should come after `b`

By default, `sort` uses a compare function that converts `a` and `b` to strings and sorts based on **unicode** values (alphabetized but with all uppercase characters before all lower case characters).

This leads to the odd behavior of `10` being sorted in front of `2`.

```js
[1, 2, 10, 20, 3, -1, 12].sort()
// => [-1, 1, 10, 12, 2, 20, 3]
```

To write a compare function that works as expected...

```js
function compareNumbers(a,b) {
  return a - b
}

// with a named function
[1, 2, 10, 20, 3, -1, 12].sort(compareNumbers)
// => [-1, 1, 2, 3, 10, 12, 20]

// with an anonymous function
[1, 2, 10, 20, 3, -1, 12].sort((a, b) => a - b)
// => [-1, 1, 2, 3, 10, 12, 20]
```


### References

[MDN: JS Reference for Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<br>
