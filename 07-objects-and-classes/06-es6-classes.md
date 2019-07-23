# ES6 Class

In 2015, ES6 introduced classes to Javascript. Javascript classes are primarily syntactic sugar over JavaScript's existing prototype-based inheritance. The class syntax does not introduce a new object-oriented inheritance model to JavaScript.

The syntax looks like this:

```js
class Car {
  // class methods
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
```

> The Class is defined using the `class` keyword and given a name (in this case `Car`). The `constructor` function accepts three parameters (`make`, `model`, and `color`) and sets these as attributes. The class also contains a `drive` method.

Notice the use of `this` and the fact that we're not returning from the class?

When we want to generate instances of this class, we'll use the `new` keyword:

```js
const carolla = new Car('Toyota', 'Carolla', 'Grey')
const outback = new Car('Subaru', 'Outback', 'Forest Green')
```

The `new` keyword will automatically:

1. Create a new, empty object for us
2. Generate a context for that object (`this` = the new object)
3. Return the object instance from our class

### Class Inheritance

In JavaScript, we can inherit from a class by *extending* it with the `extend` keyword. This will let us create a subclass:

```js
class Car {
  constructor(make, color) {
    this.make = make
    this.color = color
  }
}

class Toyota extends Car {
  drive() {
    console.log('vroom vroom')
  }
}
```

This would be similar to inheritance (`<`) rather than the `extend` keyword in Ruby

```ruby
class Car
  # Parent class
  def initialize(make, color)
    ...
  end
end

class Toyota < Car
  # Child class
  def drive
    ...
  end
end
```

The above `Toyota` class will include all of the properties defined in the `Car` class, in addition to the `drive` method.

Just like Ruby, if we have properties that we want to add to our subclass, we still need to take in the properties of our parent class, and pass them up to our parent class with `super`:

```js
class Car {
  constructor(model, color) {
    this.model = model
    this.color = color
  }
}

class Toyota extends Car {
  constructor(model, color) {
    super(model, color)
    
    this.make = 'Toyota'
  }
  drive() {
    console.log('vroom vroom')
  }
}
```

The `super` method invokes the `constructor` method of the parent (or extended) class. So in our `Toyota` class, the `super` method will call the `constructor` method of our `Car` class.