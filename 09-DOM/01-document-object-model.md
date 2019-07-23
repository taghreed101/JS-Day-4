# The Document Object Model

The DOM is a new type of object that we have not met before - because in Ruby this does not exist. In the context of a website, a DOM is basically how JavaScript uses objects to represent what you see in the browser.

The [Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction), commonly referred to as the "DOM", is a programming interface for HTML. When you load HTML into the browser, it gets converted into a dynamic object-based structure. The [visual representation](https://css-tricks.com/dom/) of this is what you see when you open up Developer Tools in the browser.

The DOM is available for us to manipulate as an object, and this object is structured and stored like an upside down tree, like this...

![dom diagram](dom-diagram.png)

Or this...

```
html
└── head
│   ├──title
│   ├──meta
│   ├──link[rel="stylesheet"]
|   └──script[type="text/javascript"]
|
└── body
    ├── header
    │   ├── h1
    │   └── nav
    └── section.simplicity
    |   └── h2
    │   └── article
    ├── section.life
    |   └── h2
    │   └── article
    │       └── block_quote
    │       └── block_quote
    └── footer
```

### The Document Object

Each web page loaded in the browser has its own `document` object. The `document` interface serves as an entry point to the web page's content. The document is an example of a **host object**--that is, a JavaScript object provided by and unique to the browser environment.

### Nodes

Everything in the DOM exists as a **node**. HTML elements are called **element nodes**, attributes are called **attribute nodes**, the text inside elements are called **text nodes**. There are even comment nodes for `<!-- html comments like this one --->`. The document itself is called a document node.

You also can refer to nodes by their relationships to each other. For example, in the graphic above, you would say that the body element is the "parent" to the two `div` elements contained inside it, which are called child nodes. The two divs are also "siblings" to one another because they are on the same level in the tree structure.

Let's look at another example...

![DOM Tree Relationships](http://profsamscott.com/javascript/images/helloworldtree.jpg)

## Working with the DOM

Understanding the DOM is central to working in JavaScript. JavaScript uses the DOM to create dynamic HTML. This includes adding new HTML elements and attributes, changing CSS styles in a page, removing existing elements and attributes, and [many more things](https://www.w3schools.com/js/js_htmldom.asp).

It used to be rather difficult to interact with the DOM because different browsers had different methods for doing so. Years ago, this is what gave way for the rise of [jQuery](http://api.jquery.com/), a JavaScript library intended to make DOM manipulation easier. Nowadays, the DOM API is standardized and we don't really need to worry about using (and learning) an additional library.

## Getting Data from the DOM 

There are two groups of methods you can use to get elements from the DOM. We'll start with the oldest and end with the ones we recommend.

### `getElement(s)By`

Each of these methods follows the same general naming convention:

| Method Name | Description |
| --- | --- |
| `.getElementById()` | Gets a single element by an ID selector |
| `.getElementsByClassName()` | Gets a list of elements with a class selector |
| `.getElementsByTagName()` | Gets a list of elements with a tag (element) selector |

Each of these three methods are part of the `document` object. We'll walk through each individually:

**`getElementById()`**

To use the `getElementById` method, we first need to reference the `document` object (where the method lives). Then, we pass in a string that matches the ID of an element in our HTML

```js
let titleElement = document.getElementById('title')
```

The above code snippet will find the first item on the page with an ID of `title` and return it back to us, to be saved in the variable `titleElement`.

**`getElementsByClassName`**

The `getElementById` method returns a single Node item; the `getElementsByClassName` returns a NodeList, which is like an Array of Nodes.

```js
let paragraphElements = document.getElementsByClassName('paragraph')
```

The above code snippet returns a NodeList (like an Array) of every element with a class of 'paragraph' and saves it to the `paragraphElements` variable. Notice that `Elements` in the method name is plural here, where as in `getElementById` it's singular? This is to tell us that `getElementByID` only returns one Node while `getElementsByClassName` returns a list of Nodes.

**`getElementsByTagName`**

The `getElementsByTagName` is a hand way of retrieving elements by their html tag (`h1`, `span`, `a`, `li`, etc). `Elements` is plural in the method name, meaning it too returns a list of Nodes.

```js
let spanElements = document.getElementsByTagName('span')
```

The above snippet returns every `span` element on the page and saves it to the `spanElements` variable.

### `querySelector`

There are only two methods in this group: `querySelector` and `querySelectorAll`. In the `getElement(s)By` family of methods, we saw that sometimes `Elements` was plural in the method name and sometimes it was singular, and that's how we knew whether the method returned a single node or a list of nodes. With the `querySelector` family, the clue is also in the name: `querySelector` returns a single node (specifically, the first matching node) whereas `querySelectorAll` returns a list of nodes (specifically, every matching node).

We'll walk through both `querySelector` and `querySelector` all, but first a note about selectors:

#### Selectors

Unlike with the `getElement(s)By` family of methods, we need to pass a complete selector to both `querySelector` and `querySelectorAll` - it's in the name! What's a selector? A selector is a way of targeting a particular element, something we learned about when we first covered CSS.

The following is a list of CSS selectors and the JavaScript equivalents you would use with `querySelector`:

| CSS Selector | JS Selector |
| --- | --- |
| `.class-name` | `.class-name` |
| `#some-id` | `#some-id` |
| `h1` | `h1` |

They're the same!

The `querySelector` methods were designed to mimic the way we target elements in CSS, so the selector we pass in is the same we'd use to style that element!

**`querySelector`**

With `querySelector`, we'll pass in a selector for the element we want to retrieve from the DOM. The element that we get back will be the first element that matches that selector.

```js
let title = document.querySelector('.title')
```

We'll only get one element back and it will always be the first element that matches the selector (in this case, `.title`). If we have more than one element in the page with that selector and we want to retrieve them all, then we'd use `querySelectorAll`

**`querySelectorAll`**

With `querySelectorAll`, we'll get back all elements on the page that match the selector we pass in.

```js
let title = document.querySelectorAll('h2')
```

The above code snippet would return a list of all `h2` elements on the page.

## Setting Data in the DOM

Now that we know how to get elements from the DOM, it'd probably be helpful to learn what we can do with them. We'll soon learn about adding event listeners to DOM elements - a way for us to listen for when some event happens to a node (like it gets clicked) and then perform some response. But there are many other things we can do with nodes! Toggle, add or remove classes, change their styling, animate them, move them from one part of the page to another, replace their content with new content, etc. The list goes on!

### Exploring DOM Nodes

Your goal is to research this topic area, find out how you would use it and why it might be helpful or important.

**1. Getting and Setting Attributes**

Remember from our HTML lesson that some elements have attributes: the `a` tag has an `href` attribute and the `img` tag has a `src` attribute. In JavaScript, there are ways to access the list of attributes on a node and to get and set attributes.

Every node object has an `attributes` property where it lists it's attributes (like `href` and `src`). You can get and set data using the `getAttribute` and `setAttribute` method.

Look at the `attributes` property of a node. Also look up the `getAttribute` and `setAttribute` methods and how they work. Make sure you understand:

- How do we access the list of attributes on a node?
- How to we get the value of a particular attribute (like the `href` attribute)?
- How do we add an attribute (like the `name` attribute)?

**2. Class list API**

A very common task in JavaScript is toggling CSS classes. We'll remove a `.is-hidden` class when the user clicks on something or we'll add an `is-active` class a navigation element when someone clicks on a hamburger menu.

The way we get and set classes on nodes is with the `classList` API. Every node has a `classList` property and there are methods we can use to add  a class (`addClass`), remove a class (`removeClass`) or toggle a class (`toggleClass`).

Research these methods and think about how they work and why they're useful. Make sure you understand:

- How can we see the list of classes a node has?
- How can we check to see if a node has a class?
- How can we add a class to a node?
- How can we remove a class from a node?
- How can we toggle a class from a node?

**3. Traversing Nodes**

We'll often have a particular node but need to check it's parents, children or siblings. Luckily, each node has this information stored within it!

Look through a node object and see if you can find the following:

- `children` / `childNodes`
- `firstChild` / `firstElementChild`
- `lastChild` / `lastElementChild`
- `nextSibling` / `nextElementSibling` and `previousSibling` / `previousElementSibling`
- `parentNode`

What are these properties? What is the difference between children and child Nodes? What kinds of nodes do you see stored in these properties?

Think about these questions and explore the above list of properties. Find out how to access these and what the different options tell you.

**4. Changing the Styling**

Something we may want to perform in JavaScript is updating or changing the styling of an element using JavaScript. A lot of web animation tools do that and there are tools for React that do this so you can write all your styles in JavaScript.

Explore the `style` property of a node. What do you see in there? How could we see the style of an element like, is it `display: block`? Can we change these style properties, like setting the background color?

**5. Content**

We'll sometimes have an element and want to change the text or html contained within that element. This is commonly called *templating* and there are libraries that will make it a little easier. With the new template literal syntax in ES6, we can often get away without a templating library. We could just use the list of properties below to reset the html or text of an element and interpolate data in to it.

Review these properties of a node:

- `innerHTML` / `outerHTML`
- `innerText` / `outerText`
- `textContent`

What are they? How are they similar? How are they different?

Make sure you understand how you might use these and why they might be useful. Can we change the html inside of an element?

**6. Dataset**

Part of HTML5 includes the `data-*` attribute: a way for us to attach arbitrary data to an element. If we define a `div` element with a `data-name="A Great Div"` attribute, then our `dataset` property inside our node will be an object with a `name` key holding the string `"A Great Div"`.

Play around with it. Look up the `data-*` attribute and explore the `dataset` property inside of a node. See how you can create data attributes of your own and retrieve the data they hold from the `dataset` object.

**7. Node Dimensions**

There are a number of use cases where getting the height, width and position of a node are helpful, but the biggest is probable animation.

Explore this list of methods and properties:

- `getBoundingClientRect()`
- `offsetHeight` / `offsetWidth` and `offsetLeft` / `offsetTop`
- `clientHeight` / `clientWidth` and `clientLeft` / `clientTop`

What are they? What information do they hold? What's the difference between `offsetHeight` and `clientHeight`? What data do you see in the result of `getBoundingClientRect()`?