# Intro To jQuery

### Objectives
*After this lesson, students will be able to:*

- Describe jQuery and the context to use it
- know the difference between jQuery and Javascript
- Include jQuery in your projects
- Practice using jQuery selectors
- Apply jQuery to manipulate, add, and remove DOM elements
- Add event listeners for standard events - click, mouse, keydown - and custom events and respond with an action
- Capture data from specific events and iterate on or manipulate the data

## The DOM

- The DOM stands for the document object model

- Basically what this means is the the DOM is a programming interface for HTML and XML documents.  It turns those documents into an OBJECT that you can then manipulate using javascript.

## Vanilla JS

- When you hear people say vanilla js, they are commonly referring to the use of plain old javascript to manipulate the dom

- For example, to create an element and put it on the page we could do the following

```js
// create an element then put it on the page
const element = document.createElement('div');

 // How do I put text inside of an element using vanilla javascript
 element.innerText = 'All I Can be is me whoever that is';

 // To put the div on the body, I first must grab the body;
 const body = document.querySelector('body');

 // Now that we have the body we can add children to it;
 body.appendChild(element);

```

- You'll notice everything we are selecting or creating here is somehow attached to the ```document``` object.  This is the (D)OM. 

EVERYTHING IS AN OBJECT!!!!!!!!!!

- This is totally a valid way to manipulate the DOM, but as you can imagine it can get cumbersome telling the DOM exactly what you want to do each time.  That's why some people decided to create a library to make this process a little more succint.  The motto of the library is "write less, do more".  That library is called jQuery.

## jQuery - Intro 

#### What is jQuery?
jQuery is an open source 3rd-party library that is intended to make front-end development tasks — particularly those involving DOM selection and manipulation — easier, faster, and more fun.

##### But wait, what do we mean by 'library'?
**A `library`** is just a collection of reusable methods that serve a particular purpose.


#### So, as a library, what does jQuery offer us?

jQuery helps us manipulate the DOM, allowing us to perform complex manipulations using less code with less hassle.  jQuery's syntax was developed to mimic CSS selector syntax, making code easier to develop, read, and manage; also, the syntax is more concise, and jQuery solves many cross-browser compatibility issues for us.

## Using jQuery

#### Installation
jQuery is a client side library, which means we need to include it in our HTML. To do this, we have two options:

1. Reference jQuery from a server on the internet:

From a CDN (content delivery network) like [CDNJS](https://cdnjs.com/) or [Google Hosted Libraries](https://developers.google.com/speed/libraries/)


`<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>`

2. Download a copy of jQuery to host on your own server:

[CDNJS](http://www.cdnjs.com), [Google Hosted Libraries](https://developers.google.com/speed/libraries/), and the [jQuery site](http://www.jquery.com) will all allow you to download a copy of jQuery to include in your projects.

#### What's with the 'min.js' in the name of the jQuery file?

`.min.js`, or `.min.anything` is a naming convention that conveys that this is a minified file.

## Minified?

Minification is the process of making a file smaller by:

- removing all line breaks and whitespace 
- reducing the length of variable and function names
- stripping out all comments. 

Minification reduces the jQuery library's size to 1/3 of its original size. 

Minified scripts are not meant to be read by humans, so most servers that host jQuery and other libraries will also offer the original (non-minified) version of the code so developers can understand the code.

**It's a good exercise to visit code.jquery.com and take a look at minified and non-minified jQuery.**

## DOM manipulation with jQuery


### Selecting an element with jQuery

To select an element in the DOM, we use the global jQuery function:

```JavaScript
// This is the basic syntax for jQuery selections
$(' ')

// To select a particular element by tag, you do
$('h2') // selects all h2 elements

// To select by ID, you use the same syntax as CSS selectors
$('#someID') // Would select the element with ID="someID"

// To select all elements of a particular class, use CSS syntax again
$('.someClass') // Selects all elements of the class "someClass"

// This is easier to type and read than:
document.getElementByClassName('someClass');

// And you can use more complicated CSS selectors as well
$('p.anotherClass') // Selects all <p> tags that also have the class "anotherClass" (<p class="anotherClass")

```


```JavaScript

// We prepend '$' to variable names when a variable is going to be a jQuery object to help us remember what that variable is for. This is just a naming convention, the computer cares not what we call it. 

const $paragraph = $('p'); // Returns a jQuery object containing all <p> tags on your web page.

// However, we don't have to prepend '$' to our variables. It's just so we can remember what a variable is being used for.
const paragraph = $('p'); // This is functionally identical to the version above that includes the '$' in front of jqObject.
```

#### Selecting a DOM element and changing its content

In this HTML:


```html
<div id="myDiv">Hello world!</div>
```

```JavaScript
const myDiv = document.getElementById('myDiv');
myDiv.innerHTML = "Goodbye world!";
```

Now the code above isn't too hard to deal with, but even so, in jQuery, this is a one-liner.

```javascript
$('#myDiv').html("Goodbye world!");
```

If we wanted to **save our selection as a jQuery object**, the code would look like this instead:

- First we select the element we want and save it as a jQuery object

```javascript
const $myDiv = $('#myDiv');
```

- Then we use our jQuery object to perform our task

```javascript
$myDiv.html("Goodbye world!");
```

- Note: ```.html()``` replaces the html inside of the selected element, if we just want to change the text we can use, ```.text()```


- Lets Play around with adding a removing stuff from the DOM

```
<div id='container'>
  <section class="dogs">
    <ul>
      <li>Newfie</li>
      <li>Golden</li>
    </ul>
  </section>
</div>
```


- Do the following (try to use the jQuery Documentation)

1. Look up how to add 'lab' to the beginning of the ul list.
2. Look up how to add 'shepard' to the end of the ul list.
3. Look up how to remove Golden from the list
4. Add an ```h1``` tag to top of the section that says `My Favourite Dogs`
5. Create a function that generates a random ```RGB``` value.
6. Look up how to edit css properties using jQuery and try to make the background color for the page a random color every time you load up the page.  


### Let's move onto DOM Events now

## Describe what a browser event is

Every kind of interactivity in the browser is an event: clicks, mouseovers, key presses, scrolling, resizing, loading the page, and more.

When you interact with the browser it checks to see if there is a _listener_ for that interaction.

If there is a _listener_ present, the browser will try to run any _handlers_ for those interactions.

A _handler_ is just a function that runs a desired procedure.


## Create a click event

How can we set up a _click_ event?

We need:

1. An element to set it on
2. A _listener_ that listens for the event: on _which element_ should the event take place
3. A _handler_ that runs the procedure we want to have happen when the event is triggered

Make a button in the html:

```html
<button id="btn">Click me<button>
```

Grab the button in the JS (DOM element):

```javascript
const $btn = $('#btn');
```

### Event listener

Set an event listener:

Use `.on()` [.on() documentation](http://api.jquery.com/on/)

```javascript
$btn.on('click');
```

The event listener takes a string as an argument. There are just a few strings that it will recognize as valid events, and 'click' is one of them.

[List of events](https://developer.mozilla.org/en-US/docs/Web/Events)

### Event handler

Add a _function_ that runs what we want to have happen. This function is what _handles_ the event and is called an _event handler_:

```javascript
$btn.on('click', () => {
	console.log('button was clicked!!');
});
```

Notice that we have supplied a function as an argument. The jargon for using a function as an argument to another function is `callback`.

pseudo code for an event listener

```javascript
elem.on(STRING, CALLBACK);
```

### check to see if it works

```javascript
$btn.on('click', () => {

  console.log('button was clicked!!');

});
```

### Activity 

* Make it so that when the button is clicked, an image will appear on the page.
* When the button is clicked again make it so the picture goes away
* Create another button that when clicked changes the background of the page to a random color
* Use the `mouseenter` and `mouseleave` listeners to add and remove a color from the dog section of your html.









