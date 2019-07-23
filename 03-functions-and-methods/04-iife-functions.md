#Immediately-Invoked Function Expressions

This is a concept of functions that do not exist in Ruby directly.

When you are working on larger, more complex applications (particularly ones with multiple linked scripts), the use of global variables can cause trouble. Since all global variables are defined on the `window` object, declaring too many global variables (commonly called "polluting the global namespace") increases the risk of variables overwriting each other and thereby causing errors.

One simple solution for this is to wrap each script's JavaScript code in an Immediately-Invoked Function Expression (IIFE). An IIFE is a function that, when loaded into the browser, immediately invokes itself and thereby creates a new local scope to enclose all variables within it.

```js
(function () {    // IIFE

  var username = "XxXskaterBoi2004XxX"
  var profileID = 4011989

  function logIn () {
    var sessionID = "8675309"
    var token
    return decrypt(sessionID)

    function decrypt (string) {
      var token = profileID
    }
    return token
  }

  logIn()

})()
```
> NOTE: Using an IIFE would prevent you from being able to access variables and functions within it from the console. Therefore, for now, you should refrain from using it
-------