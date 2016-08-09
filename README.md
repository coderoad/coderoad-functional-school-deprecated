# Functional School

A trip through functional programming in Javascript using common built-in Javascript array methods such as `map` & `reduce`.

By the end, you should have an understanding of how to use array methods to manipulate semi-complex data.

Level: Intermediate
Keywords: javascript, functional
Length: 1-2 hours


<!-- @import('00/setup') -->
<!-- @import('01/filter') -->
<!-- @import('02/sort') -->
<!-- @import('08/challenge-1') -->
<!-- @import('09/challenge-2') -->


## CodeRoad

CodeRoad is an open-sourced interactive tutorial platform for the Atom Editor. Learn more at [CodeRoad.io](http://coderoad.io).


## Setup

* install the tutorial package

    `npm install --save coderoad-functional-school`

* install and run the [atom-coderoad](https://github.com/coderoad/atom-coderoad) plugin


## Outline

##### Map

Array -> run a function over each item -> Array

You've filtered and sorted our data, but neither of those actually change the data.

Wouldn't it be simpler if you could just change your grades?

You can use the array method `map` to run a function that returns changes to your data.

As an example, let's look at how you would increment each number in an array.

```js
function addOne(num) {
  return num + 1;
}

[1, 2, 3].map(addOne);
//> [2, 3, 4]

function addToVal(obj) {
  obj.val += 1;
  return obj;
}
[{ val: 1}].map(addToVal);
//> [{ val: 2 }]
```

`map` can change data, and it can also alter structure of the data you're working with.

```js
function makeObject(num) {
  return { val: num };
}

[1, 2].map(makeObject);
//> [{ val: 1 }, { val: 2 }]
```

Similarly, `map` can also restrict the data you want to work with.  See the example below to see another way scores could be sorted.

```js
myBest
  .map(function(student) {
    return student.score;
  })
  .sort()
  .reverse()
//> [93, 91, 88, 88, 82, 81, 73]
```

In this example, `map` transformed an object with keys of 'title', 'instructor', 'name', 'score' and 'grade', to an array of just scores. Values weren't changed, but rather limited to a smaller subset of scores.

`map` is powerful. Let's see what you can do with it.

Those D & F grades would look a lot better if they suddenly became A's.

Let's go back to before we filtered out the bad grades, and instead change the grades to A's.

##### forEach

Array -> run a function for each item

You've updated your grades, but they're still in an array. It's time to loop over them and log them to the console.

To open the console, go to *View* > *Developer* > *Toggle Developer Tools*. Or press *cmd+opt+I* on Mac, *ctrl+alt+I* on Windows.

`forEach` has a lot in common with `map`, but there is a big difference. Understanding that difference is important for grasping the difference between:

  * **functional** & **imperative** programming
  * **pure** & **impure** functions

Know it or not, you're probably already used to "imperative" programming.

> **Imperative** programming describes the order of actions

Imperative code tells the computer what to do, step by step.

```js
var x = 1; // make a variable
x = x + 1; // add one
x = x + 1; // add another
console.log(x);
//> 3
```

> **Functional** programming describes the data transformation

Functional programming is a lot like writing math equations. As in math, 1 + 1 always equals 2.

In the same way, a **pure** function will always have the same result from a given input. Input 1 -> output 2. Every time.

```js
// a pure function
function addOne(x) {
  return x + 1;
}
addOne(1)
//> 2
addOne(1)
//> 2
```

A function is "pure" if it doesn't change anything outside of its scope. Pure functions are easy to test, reuse and reason about. In other words, they make your job easier.

On the other hand, **impure** functions are less predictable. The result may be different if you call it at a later time.

```js
var y = 1;
// impure function
function increment(x) {
  y += x;
  return y;
}
increment(1)
//> 2
increment(1)
//> 3
```

It's good practice to ensure your `map` functions remain pure.

But `forEach` can be a little more dangerous. Why? Let's have a look.

```js
[1, 2, 3].map(addOne);
//> [2, 3, 4]

[1, 2, 3].forEach(addOne);
//> undefined
```

What? `undefined`? `forEach` runs a function on each item in the array, and doesn't care what the function returns. Functions called by `forEach` must make changes, called **side effects**, to even be noticed.

```js
// impure function, changes log
function addOneToLog(x) {
  console.log(x);
}

[1, 2, 3].forEach(addOneToLog);
//> 2
//> 3
//> 4
```

Now that we see how `forEach` works, let's use it to make calls to the `console`.

##### find

Array -> first element that matches a condition

Somehow your name has disappeared from the computer system. We'll have to `find` a way to get it back.

You quickly put together a list of other students in class. If someone changed your name, it'll be the name that is not in that list.

`find` works similar to `filter`, but returns only the first match.

```
var data = [1, 2, 3, 4, 5, 6];

function isEven(num) {
  return num % 2 === 0;
}

// returns all matching data to a condition
data.filter(isEven);
//> [2, 4, 6]

// returns the first match
data.find(isEven);
//> [2]
```

Find is great for performantly matching unique values in data, such as an "id", or in our case: a name.

##### concat

Array + Array -> Array

Before we've been working on a structured set of student data.

```js
// array of students
[
  {
  "title": "Relational Databases",
  "instructor": "Sean Quentin Lewis",
  "name": "Rebecca Heineman",
  "score": 71,
  "grade": "C"
  }
// students in courses...
]
```

To be safe, let's now work on the original data set. Notice how it is structured differently.

```js
// array of courses
[
  {
    "title": "Relational Databases",
    "instructor": "Sean Quentin Lewis",
    "students": [
      {
        "name": "Rebecca Heineman",
        "score": 71,
        "grade": "C"
      }
    // students...
    ]
  }
  // courses...
]
```

In this data set, there is an array of students within an array of courses. So how can we recreate our original array of students from the courses?

Weird things happen when you start combining arrays. We can use `concat` to bring sanity.

```js
[1, 2] + [3, 4];
//> "1, 23, 4"

[1, 2].push([3, 4]);
//> 3

[1, 2].join([3, 4]);
//> "13, 42"

[1, 2].concat([3, 4]);
//> [1, 2, 3, 4]
```

Unfortunately, Javascript is missing a built in array method to concat multiple arrays together: let's call it `flatten` (sometimes called `concatAll`).

`flatten` should loop over an array and `concat` each element.

Let's look at an abstraction of what we need to do:

```js
var start = [{
  a: 1,
  c: [
    { b: 1 }
  ]
}, {
  a: 2,
  c: [
    { b: 2 }, { b: 3 }
  ]
}];

var middle = start.map(function(outer) {
  return outer.c.map(function(inner) {
    return {
      a: outer.a,
      b: inner.b
    };
  });
});
//> [ [{ a: 1, b: 1 }], [{a: 2, b: 2}, {a: 2, b: 3}] ]

var end = pre.flatten();
//> [{a: 1, b: 1}, {a: 2, b: 2}, {a: 2, b: 3}]
```

Back to business.

We have a suspect in mind: a classmate named "Hack Kerr". He's a nice guy, and he's always been friendly to you - but there's something suspicious about him: his name.

We'll test out flatten, then re-create our student array of data from the original course data.

##### reduce

Array -> anything

We know our likely suspect is also in the school computer system. Perhaps our suspect also changed his grades.

You can't be sure who is a cheater, but you can assume if the grades are well above the average, the person is likely to be the culprit. For this, we'll have to do some basic statistical calculations. We'll need a new tool for transforming arrays into different data representations.

`map` has a major limitation: it will always output the same number of elements as the input array.

When you want to transform data into something different, you'll likely want to use `reduce`.

Reduce requires two parameters:

  * the running total (set by an initialValue)
  * the next value in the array

```js
function add(total, next) {
    console.log(`add(${total}, ${next}) -> ${total + next}`)
    return total + next
}

var initialValue = 100;
[1, 5, 10].reduce(add, initialValue); // initial value

// add(100, 1) -> 101
// add(101, 5) -> 106
// add(106, 10) -> 116
//> 116
```

Notice in the example we input an array of 3 items and output a single number. The data has been transformed.

It takes a while to wrap your head around `reduce`, but once you do, you'll see it's usefulness everywhere.

You may have noticed we've already used `reduce` to `flatten` our arrays.

```js
Array.prototype.flatten = function() {
  return this.reduce(function(a, b) {
    return a.concat(b);
  }, []);
};
```

With `flatten`, the initialValue was set to an empty array which each value was `concat` onto.

Do some practice with `reduce`, before you use it to narrow down a cheating suspect.
