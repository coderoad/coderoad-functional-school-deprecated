### forEach
Array -> run a function for each item

You've updated your grades, but they're still in an array. It's time to loop over them and log them to the console.

`forEach` has a lot in common with `map`, but the major differences between the two is important to understand the difference between "functional" & "imperative" programming.

> Imperative programming describes the order of actions

> Functional programming describes the data transformation

Functional programming is a lot like math. As in math, 1 + 1 always equals 2.

In the same way, a "pure" function will always have the same result from a given input. Input 1, output 2. Every time.

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

A function is "pure" if it doesn't change anything outside of its scope. Pure functions are easy to test, reuse and reason about. On the other hand, "impure" functions are less predictable.

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
//
[1, 2, 3].forEach(addOne);
//> undefined
```

What? `undefined`? `forEach` runs a function on each item in the array, and doesn't care what the function returns. The function must make changes, called "side effects", to even be noticed.

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

+ Use `forEach` to log out your report card to the console
@test('1/04/01-forEach')
@open('04-forEach.js')
@action(set(
```
function logCourse(course) {
  console.log(`{course.grade}  {course.score}  {course.title}`);
}

// log your grades to the console
myFixed.forEach();
```
))

+ Run `myFixed.forEach` on a second function called `logCourseWithIndex` which looks like `logCourse` but takes a second parameter called index.
@test('1/04/02-forEach')
@action(insert(
```
function logCourseWithIndex(course, index) {
  console.log(`${index + 1} {course.grade}  {course.score}  {course.title}`);
}

// log your grades to the console with an index
myFixed.forEach();
```
))

+ Where does this second parameter come from? Array methods actually have two extra parameters: the index, and the entire array. Run `myFixed.forEach` with `logCourseWithIndexAndArray`.
@test('1/04/03-forEach')
@action(insert(
```
function logCourseWithIndexAndArray(course, index, array) {
  console.log(`${index + 1}/{array.length} {course.grade}  {course.score}  {course.title}`);
}

// log your grades to the console with an index and array length
myFixed.forEach();
```
))

+ What??? Your data has all disappeared? It seems `myFixed` relies on a chain of methods.
```js
myFixed = students
    .filter(isAda)
    .sort(compareScore)
    .map(increaseScore)
    .map(getGrade)

```
