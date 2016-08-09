## forEach
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
let x = 1; // make a variable
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
let y = 1;
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

+ load "myFixed"
@test('04/01')
@action(open('data/myFixed.js'))
@action(set(
```
const myFixed = [{
  title:"Relational Databases",
  instructor:"Sean Quentin Lewis",
  name:"Ada Lovelace",
  score:95,
  grade:"A"
}, {
  title:"3D Computer Graphics",
  instructor:"G.L. Webb",
  name:"Ada Lovelace",
  score:95,
  grade:"A"
}, {
  title:"Front End Web Development",
  instructor:"Moe Zaick",
  name:"Ada Lovelace",
  score:73,
  grade:"C"
}, {
  title:"Web Security",
  instructor:"Sue Denim",
  name:"Ada Lovelace",
  score:93,
  grade:"A"
}, {
  title:"Javascript Fundamentals",
  instructor:"Jay Kweerie",
  name:"Ada Lovelace",
  score:85,
  grade:"B"
}, {
  title:"Data Science",
  instructor:"Ford Fulkerson",
  name:"Ada Lovelace",
  score:70,
  grade:"C"
}, {
  title:"Algorithm Design",
  instructor:"Gale Shapely",
  name:"Ada Lovelace",
  score:95,
  grade:"A"
}, {
  title:"Data Abstraction",
  instructor:"Aster Ricks",
  name:"Ada Lovelace",
  score:94,
  grade:"A"
}, {
  title:"Data Structures",
  instructor:"Brodal Q.",
  name:"Ada Lovelace",
  score:95,
  grade:"A"
}, {
  title:"Networks",
  instructor:"Van Emde Boas",
  name:"Ada Lovelace",
  score:77,
  grade:"C"
}];
export default myFixed;
```  
))

+ Use `forEach` to log out your report card to the console
@test('04/02')
@action(open('04-forEach.js'))
@action(set(
```
import myFixed from './data/myFixed';
// Array.forEach(fn)

function logCourse(course) {
  console.log(`${course.grade}  ${course.score}  ${course.title}`);
}

// log your grades to the console
myFixed.forEach(::>);
```
))
@hint('call `forEach` with `logCourse`')

+ Add a second parameter to `logCourseWithIndex` called `index`. Then call the function with `myFixed.forEach`.
@test('04/03')
@action(insert(
```

// add a second param called 'index' to the function
function logCourseWithIndex(course::>) {
  console.log(`${index + 1}  ${course.grade}  ${course.score}  ${course.title}`);
}

// log your grades to the console with an index
myFixed.forEach(logCourseWithIndex);
```
))
@hint('Array methods can take more than one parameter')
@hint('Add a second parameter to `logCourseWithIndex`')

+ Add a third parameter called `array` to `logCourseWithIndexAndArray`, then call the function with `myFixed.forEach`.
@test('04/04')
@action(insert(
```

// add a third param called 'array' to the function
function logCourseWithIndexAndArray(course, index::>) {
  console.log(`${index + 1}/${array.length}  ${course.grade}  ${course.score}  ${course.title}`);
}

// log your grades to the console with an index and array length
myFixed.forEach(logCourseWithIndexAndArray);
```
))
@hint('Array methods can take more than one parameter')
@hint('Add a third parameter to `logCourseWithIndexAndArray`')

+ What??? Suddenly Your data has all disappeared!

It seems `myFixed` relies on a chain of methods.

```js
myFixed = students
    .filter(isAda)
    .sort(compareScore)
    .map(increaseScore)
    .map(getGrade)
    .forEach(logCourseWithIndexAndArray)
```

This is why side-effects are dangerous. Students data must have changed, and now all of your transformations are effected.

@test('04/05')
@action(insert(
```

console.log(myFixed);
```
))

@onPageComplete('Something strange is going on. In the next step we'll try to `find` your data.')
