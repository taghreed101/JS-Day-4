# Null, Undefined and Booleans

The values `null` and `undefined` both mean essentially the same thing, they hold no value. In Ruby, this was both represented with `nil`

The difference is that `undefined` implies nothing because it was never was anything while `null` implies explicitly set to nothing.

```js
typeof undefined
// => undefined
// => It evaluates as itself because it is a primitive data type

var nothing
// => undefined
// Any property that has not been assigned a value is undefined

```

Javascript will never set anything to `null` by itself. `null` only appears when you tell it to. It is useful as a placeholder for a variable that you know will be replaced with an actual value later on


## Booleans

Booleans are the simplest data type, there are only two `true` and `false`. They have the operators `!`, `||`, `&&`, and the ternary `condition ? thenExpression : elseExpression` - again similar to Ruby.

Unlike Ruby, where everything that is not false is true, Javascript has more values that evaluate to `false` when converted to boolean - six of them. This is called being **falsey**
  - `''` - empty string
  - `0` - number zero
  - `NaN` - the number representing an illegal operation
  - `false` - boolean false
  - `undefined` - value given to declared variables that are not given values
  - `null` - value representing nothing

A common way to get booleans is as the result of a comparison. There are two equality operators `==` and `===` (and two matching inequality operators `!=` and `!==`). The `==` and `===` operators are not exactly the same as the one in Ruby. You can read more about it in [MDN Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness). Another way that we can get booleans is by comparing numbers with the operators `<`, `>`,`<=`, `>=`. These are similar with Ruby.