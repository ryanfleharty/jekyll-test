
[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

# Combining Datatypes & Callbacks Lab & HW

This combination lab/hw (start during lab time) is designed to be a review of all the material covered the last few days, to help solidify these fundamentals.

#### Learning Objectives

- Learn common programming principals
- Practice commenting code
- Practice renaming variables to be more semantic
- Practice reading errors
- Practice combining datatypes one level deep
- Practice combining datatypes more than one level deep
- Practice using array methods with callbacks

#### Prerequisites

- JavaScript fundamentals
- Javascript basics of Arrays, Objects and Functions
- Introduction to callbacks

---

## Getting Started

1. Touch a file for each section - there are three sections - `programming_fundamentals` , `combining_datatypes` and `arrays_w_callbacks`



## Deliverables

Three files answering the questions in each section

## Technical Requirements
1. JavaScript files must run without errors (comment out things that don't work and leave a comment for the hw grader)


## Submission Guidelines

- Must be submitted before next start of class


### CSS

**OPTIONAL:** Watch this video introducing [flexbox](https://www.youtube.com/watch?v=tqdqEiTlqF0&index=33&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)

## Section 1: Programming Fundamentals

1. Create a file called `programming_fundamentals.js` inside your `homework` folder for today.
2. Copy the questions that you are answering into your file (and comment it out) and write the answer below the question.

#### Common programming principles

As you are starting out, there may be things you are really worried about and other big **gotchas** that you aren't yet aware that are gotchas!

Read this article on [programming principles](http://www.artima.com/weblogs/viewpost.jsp?thread=331531), focus on the following nine:

* **DRY**
* **KISS**
* **Avoid creating a YAGNI**
* **Do the simplest thing that could possibly work**
* **Don't make me think**
* **Write code for the maintainer**
* **Single responsibility principle**
* **Avoid premature optimization**
* **Separation of concerns**

- Write a ~1 sentence summary for each one
- Which ones surprise you (if any)?
- Which one is currently giving you the most struggle?

#### Commenting Code

Comment each line of this code and describe what it is doing. Feel free to run this code and add console.logs to help you figure it out:

```js
const f = l => {
  let es = 0, p = 0, c = 1, n = 0
  while (c <= l) {
    n = c + p;
    [c, p] = [n, c]
    es += (c % 2 === 0) ? c : 0
  }
  return es
}

console.log(f(55))
```

At first we may strive for the shortest code possible. But we really should be striving for readable code that is easy to maintain. Compare the same solution with more semantic variable names (feel free to use this one to help you figure out what is happening in this function:

```js
const f2 = limit => {
  let evenSum = 0;
  let last = 0;
  let current = 1;
  while (current <= limit) {
    let next = current + last;
    [current, last] = [next, current]
    if (current % 2 === 0) {
      evenSum += current;
    }
  }
  return evenSum;
}


console.log(f2(55))

```

**Answer with comments:**

- In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a _classic_ ) - are there any other variable names or things that would make this code easier to read and understand?

- If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with `f` or `f2`?


- Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?

### Section 2 Combining Datatypes

#### Combine objects, arrays, and functions

- touch `combining_datatypes.js` and do your work for this section in this new file

**COMPLETE ANY 4**

1. Create an object that has a property that is an array. Log one of the elements of that array.

1. Create an object that has a property that is an object. Log one of the properties of that inner object.

1. Create an array that has an object in it.  Log one of the properties of that object.
1. Create an array that has an array as one of its elements.  Log one of the elements of the inner array.
1. Create an array that has a function as one of its elements.  Call that function.
1. Create an object that has a property that is an array. Loop over the array and log each individual element.
1. Create an array that has an array as one of its elements.  Loop over the second array and log each individual element.
    - Bonus: make each element of the outer array an array as well.  Using two for loops, loop over each array in the outer array and log those elements.

<hr>
&#x1F534; Commit: <br>
"Combine objects, arrays, and functions"
<hr>

## Combine objects, arrays, and functions more than one level deep

**COMPLETE ANY 5**

1. Create a function that returns an object.  Log a value of that object (hint: call the function and then call a property on the return value).
1. Create a function that returns an array.  Log an element of the array.
1. Create a function that returns an object that has an array.  Log one of the elements of that array.
1. Create a function that returns an object that has an object.  Log one of the properties of the inner object.
1. Create a function that returns a function.  Call that inner function
1. Create an array that has a function that returns an object.  Log a property of the object.
1. Create an array that has a function that returns an object that has an array.  Log an element of the inner array.
1. Create an array that has a function that returns an object that has an object.  Log a property of the inner object.
1. Create an array that has a function that returns a function.  Call the inner function.

<hr>
&#x1F534; Commit:  <br>
"Combine objects, arrays, and functions more than one level deep"
<hr>

**Model a Vending Machine**
Model a vending machine

- a vending machine is an object
- it has an array of snacks (make 3 snacks)
- snacks are objects that have a name and a price
- a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
- Be able to call vendingMachine.vend() with a valid integer to return a snack

## Callbacks

1. Make a function `operateNums` that takes two arguments. Assume the two arguments are a number and a function (a callback).
2. Make it so that when `operateNums` is invoked, the callback "operates" on the number.
3. Create a function called `multByTwo` that accepts a number as an argument and multiplies that number by two.
4. Create a function called `squareNum` that accepts a number as an argument and squares that number.
5. Use `multByTwo` and `squareNum` as callbacks when invoking `operateNums`.


#### Function definition placement

Clean up this code, so that it works and has function definitions in the correct place

```javascript
bar();
const bar = () => {
    console.log('bar here');
}
foo();

const foo = () => {
    console.log('foo here');
}
```


#### Error reading

What is meant by the error this produces?

```javascript
foo();

const foo ()=>{
    console.log('hi');
}
```

### Section 3 Array Methods with Callbacks

![](https://i.stack.imgur.com/ufv6k.png)

A few array methods use callbacks. For example `.map` - `.map` takes each element of an array and does something to it and returns a new arrays.

But what should it do? Multiply everything by 5? Capitalize everything? If `.map` had a hard-coded thing it always did with an array, it wouldn't be very flexible.

By allowing a callback to determine what happens to each array element we get a lot of flexibility and we can do some really powerful things.

Four Arrays to work with

```js
const smallNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const nums = [ 37, 826,209, 419, 309, 48, 738,709,728, 607, 9, 863, 976, 588, 611, 164,383, 261, 14, 525,479,169,755,574, 330,
  736, 541, 838, 577,957,179,436,333, 206, 295,744,926, 799, 691,259,401,104,630,645, 722, 607, 587, 714, 446, 356, 18, 16, 14, 5,
  13,13,17, 5, 5, 18, 12, 5, 18, 11, 2, 2,  9,  8, 4,5,18, 15,18,0,6,11,18,14, 2, 19, -14, 5, 18, 12, 3, 12, 7, 15, 5, 3, 12, 7, 6,
  10, 3, 3, 3, 18, 12, 14 ]

const panagram = ['The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazy', 'dog']

const panagrams = [ 'The','job', 'requires', 'extra', 'pluck', 'and', 'zeal', 'from', 'every', 'young', 'wage', 'earner',  'Quick', 'zephyrs', 'blow,', 'vexing', 'daft', 'Jim', 'Two', 'driven', 'jocks', 'help', 'fax', 'my', 'big',
  'quiz', 'Five', 'quacking', 'zephyrs', 'jolt', 'my', 'wax', 'bed', 'The', 'five', 'boxing', 'wizards', 'jump', 'quickly', 'Pack',
  'my', 'box', 'with', 'five', 'dozen', 'liquor', 'jugs', 'We', 'promptly', 'judged', 'antique', 'ivory', 'buckles', 'for', 'the',
  'next', 'prize', 'Jaded', 'zombies', 'acted', 'quaintly', 'but', 'kept','driving','their','oxen','forward' ]
```

The first question is for the numbers arrays. The second question is for the words array. Your functions should work for both the smaller arrays and bigger arrays.

You don't have to write an answer to the thought questions.

#### Every

1. Determine if every number is greater than or equal to 0
1. determine if every word shorter than 8 characters

#### Filter

1. filter the array for numbers less than 100
1. filter words that have an even length

#### Find

1. Find the first value divisible by 5
1. find the first word that is longer than 6 characters


#### Find Index
1. find the index of the first number that is divisible by 3
1. find the index of the first word that is less than 2 charaters long

#### For Each
1. console.log each value of the nums array multiplied by 3
1. console.log each word with an exclamation point at the end of it

**Thought Questions**
- What happened to the original array?
- Can you store the values from a `forEach` method in a new array?

#### Map
1.  make a new array of each number multiplied by 100
1. make a new array of all the words in all uppercase

**Thought Questions**
- What happened to the original array?
- Can you store the values from a `map` method in a new array?

#### Some
- Find out if some numbers are divisible by 7
- Find out if some words have the letter `a` in them

#### Sort
- Try to sort without any arguments, do you get what you'd expect with the numbers array?
- Sort the numbers in ascending order
- Sort the numbers in descending order
- Sort the words in ascending order
- Sort the words in descending order

**Thought Questions**
- What happened to the original array?

### Hungry for More

#### isPanagram

Using the following array - test whether each letter a-z (case insensitive) is used at least once

```js
const panagram = ['The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazy', 'dog']
```

#### Reduce
- Add all the numbers in the array together using the `reduce` method
- concatenate all the words using reduce

**Thought Questions**
- What happened to the original array?

### Array Methods Challenge Problems

- filter for words that have at least two vowels in them
- find each instance of the word zephyr - include case insensitive and plurals (Zephyr, zephyrs, and Zephyrs), and list the index positions

#### isPanagram

Using the following array - test whether each letter a-z (case insensitive) is used at least once

```js
const panagram = ['The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazy', 'dog']
```


#### Working with data

- filter for products with a price that is less than 20, using the array below:
- sort alphabetically by product name

```js
const products = [
      {
        "name": "allen wrench",
        "price": 2.99,
        "description": "handy tool"
      },
      {
        "name": "cornucopia",
        "price": 5.99,
        "description": "festive holiday decoration"
      },
      {
        "name": "banana",
        "price": 0.99,
        "description": "full of potassium"
      },
      {
        "name": "guillotine (cigar)",
        "price": 10.59,
        "description": "behead your stub"
      },
      {
        "name": "jack-o-lantern",
        "price": 3.99,
        "description": "spooky seasonal fun"
      },
      {
        "name": "doggie treat (box)",
        "price": 5.99,
        "description": "fido loves 'em"
      },
      {
        "name": "egg separator",
        "price": 3.99,
        "description": "it separates yolks from whites"
      },
      {
        "name": "LED lightbulb",
        "price": 6.55,
        "description": "It's super-efficient!"
      },
      {
        "name": "owl pellets",
        "price": 3.99,
        "description": "Don't ask what they used to be."
      },
      {
        "name": "flag",
        "price": 5.99,
        "description": "catches the breeze"
      },
      {
        "name": "hair brush",
        "price": 6.99,
        "description": "fine boar bristles"
      },
      {
        "name": "iridium (one gram)",
        "price": 19.36,
        "description": "corrosion-resistant metal"
      },
      {
        "name": "quark",
        "price": 0.01,
        "description": "Very small"
      },
      {
        "name": "turtleneck",
        "price": 19.99,
        "description": "available in black and slightly-darker black"
      },
      {
        "name": "kaleidoscope",
        "price": 8.25,
        "description": "tube with moving plastic pieces inside"
      },
      {
        "name": "mitt (leather)",
        "price": 15,
        "description": "regulation sized"
      },
      {
        "name": "nothing",
        "price": 10,
        "description": "Hey, if you pay us, we won't ask any questions."
      },
      {
        "name": "violin",
        "price": 2000,
        "description": "Talk about a JS fiddle..."
      },
      {
        "name": "yoyo",
        "price": 1,
        "description": "We had to pull some strings to get this one in."
      },
      {
        "name": "pincushion",
        "price": 1.99,
        "description": "You'll get 'stuck' on it"
      },
    ]
```


### More Hungry For More

1. Complete all of the **Combine objects, arrays, and functions** section.


2. Complete all of the **Combine objects, arrays, and functions more than one level deep** section.


3. Watch these extra CSS videos explaining flexbox in more depth.

   - [Flexbox: Wrap, Justify, Align](https://www.youtube.com/watch?v=7d8aAw8mzjI&index=34&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)

   - [Flexbox: Child Property](https://www.youtube.com/watch?v=zDYAbI78dzc&index=35&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)



   ---

   *Copyright 2018, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*


   ---



   Title: Combining data types/Callbacks<br>
   Type: Homework<br>
   Duration: 4hr<br>
   Creator: Matt Huntington<br>
   Adapted by: Thom Page, Karolin Rafalski<br>
   Competencies: Objects, Arrays, Loops <br>
   Prerequisites: JavaScript <br>
