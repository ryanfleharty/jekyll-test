# Intro to JS

## Lesson Objectives

_After this lesson, students will be able to:_

1. Define programming and why we're learning it
1. Read Node error messages
1. Add comments to code
1. Describe the basic data types of JS
1. Assign values to variables
1. Concatenate values

## Define programming and why we're learning it

### What is Programming?

The first few weeks of this course will focus on programming skills. This means learning how to "think like a programmer", and also learning to use tools such as Terminal, Atom, Git, etc.

Loosely speaking, learning to "think like a programmer" involves learning:

**Concepts**

* For example, the concept of a "loop", something that repeats.
	* Values might change with successive loops.

**Syntax**

* Precise spelling of variables and inclusion of parentheses, etc.
	* Computers are stupid. They only do exactly what you tell them to.  If you mess something up, they don't realize that and will break

**Logic**

* The sequence of execution in a program, line by line. Problem-solving. How code interacts with other code.

### Why learn programming?

We are making **software**, not "traditional" websites. People these days use **apps** (either on mobile or desktop), which are hosted on the internet rather than installed locally. This is the current web paradigm called **software as a service**, _SaaS_.

Software requires internal logic. Programming is the means of supplying internal logic to a program.

### Why JavaScript?

The language we will be learning first is JavaScript. In a way it does not matter which language we learn, because the same principles apply across languages.

JavaScript is the most in-demand language for junior developers, and there's a lot of work available out there for those who know it.  It is also the only language that both browsers and servers understand, making it a great teaching tool.

## Read Node error messages

Let's dive back into programming.

Use the `first_code.js` file from the last lesson.

Error messages are good. They are not adversarial! They are there to help you.

Error messages are **clues** that you learn to read. You should be able to read these clues on your own.

![](https://i.imgur.com/HjquPtu.png)

The error above is typical. It looks intimidating and weird, but if you pry, you will find valuable clues. For example:

Error messages will tell you a **specific line number**: where in the code the error occurred. This tells me the error is on line 1 in the file `first_code.js`: `first_code.js:1`

Errors will often tell you what **type** of error. `SyntaxError: Unexpected token ILLEGAL`

You have to learn to sort the 'wheat from the chaff' so to speak. This will come with practice.

Errors are a **growth opportunity**. When you receive an error, yes it is an obstacle, but with a little patience it will turn you into a more informed, better developer.

<!--Nothing is worse than the code not doing what you wanted and NO ERROR -->

## Add comments to code

<!--I do -->

Providing verbal comments within your code is a great way to make your code comprehensible to others

single line comment:

```
// this is a single line comment
```

multi-line comment:

```
/*
this is
a mult-line
comment
 */
```

- Atom shortcut: `⌘ + /`

'Comment out' code that doesn't need to run or that you save for later.

<!--Student exercise--do that atom shortcut to comment out something like "our first program" -->

<!--SEI1 8:24 -->

## Describe the basic data types of JS

What we have so far:

```javascript
console.log('Hello World');
```

The data in quotes is a **string**. A string is just text (string of characters). You can give a string either double or single quotes. If you want to use single quotes and include a quote inside a string, use an **escape character** `\` before the quote.

Example:

```javascript
console.log('Matt\'s awesome.');
```

Along with strings we have **numbers**.

We could send a number to the console:

```javascript
console.log(100);
```

We can do arithmetic with numbers:

```javascript
console.log(100 + 100);
```

There are no quotes around numbers.

**strings** and **numbers** are the basic _datatypes_ we use day-to-day, along with another datatype, **booleans**, which we will talk about soon.

## Assign values to variables

We can assign strings and numbers to variables using the assignment operator `=`.

```javascript
var phrase = 'In my room is a chair and a table';
```

we can use that variable as a stand-in for the original value:

```javascript
console.log(phrase);
```

**phrase** can be anything we want (with some syntactical caveats - i.e. symbols and patterns we should avoid), **sentence** for example, whatever makes semantic sense.

**We will not be using `var`** (it's a bit out of date), instead we will be using **`let`** and **`const`**.

Let's use `const` here:

```javascript
const phrase = 'In my room is a chair and a table';
const sum = 99 + 1;
```

`const` variables are **constant** and do not change.  Now that the phrase is saved to a variable, we can call it whenever.

```javascript
console.log(phrase);
console.log(phrase);
console.log(phrase);
console.log(phrase);
```

```javascript
console.log(sum);
console.log(sum);
console.log(sum);
console.log(sum);
```

>x4 => "In my room is a chair and a table"

>x4 => 100


### Variable names

- cannot begin with a number or include special character
- camelCase
	- `thisVariable` NOT `this_variable`
- case sensitive
	- `thisVariable` is not the same as `ThisVariable`

### Semicolons

- The interpreter needs the semicolons to know you're done with a line.  **DO NOT FORGET THEM!**

### Variable re-assignment

With `const`, you cannot reassign a variable. It is CONSTANT.

```javascript
const item = ' chair';

item = 'eclair';
```

> TypeError: Assignment to constant variable.

>**Note:** You may see some JS developers enforcing a rule to use `UPPPER_SNAKE_CASE` instead of `camelCase` for `const` variables. This is fairly common in many languages, and you may agree with them as the course continues, but for the sake of consistency, we will enforce `camelCase` for all variables except for projects.

Use `const` as your default declaration. This means your variable is safe from arbitrary or accidental changes. However, _if you intend_ for the value of the variable to change, then use `let`.

*Whenever you declare a variable, think first whether you intend to change it*

You can re-assign variables with `let`:

```javascript
let item = 'chair';

item = 'eclair';

console.log(item);
```

> => "eclair"

### Activity

> Without running the following code, try to determine:

```javascript
let a = '';
let b = 'bongos';
let c = 'get your';

a = b;
b = c;
c = a;
```

At the end, what are the values of `a`, `b`, and `c`?


## Concatenate values

JavaScript allows us to add strings together with `+`:

```javascript
console.log('hello' + ' world');
```

> => 'hello world'

We can insert values of variables into our strings:

```javascript
const adjective = 'beautiful';

console.log('What a ' + adjective + ' day!!');
```

> => "What a beautiful day!!"

```javascript
const adjective = 'crummy';

console.log('What a ' + adjective + ' day!!');
```

> => "What a crummy day!!"

### Activity (5 mins)

* Output a console log "The sum of 5 and 10 is 15" where the values for 5 and 10 are saved to variables, and where 15 comes from those variables being summed.

## Booleans and Comparisons

Let's test out a boolean expression:

```javascript
console.log(1 > 2);
```

This is asking **is 1 greater than 2?**.

> => false

There are other comparative operators:

* `>` greater than
* `<` less than
* `==` equal to
* `>=` greater than or equal to
* `<=` less than or equal to
* `!=` is not equal

Using the **equality operator**:

```javascript
console.log(1 == 2);
```

> => false

This is asking **is 1 equal to 2?**.

Using the **inequality operator**

```javascript
console.log(1 != 2);
```

> => true

### Activity (3 mins)

Console.log each boolean expression

* Check: is `-10` greater-than-or-equal-to `-100`?
* Check: is `0` less than `1000`?
* Check: is `888` the same as `889`?
* Check: is `20` less-than-or-equal-to `20`?