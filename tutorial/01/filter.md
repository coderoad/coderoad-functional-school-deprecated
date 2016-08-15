## Filter
Array -> Array of items that match a condition

You've hacked into the school's computer system, and just in time. The grades are in, but you're not too proud of your performance. That's okay, you have a plan: you're going to create a fake report card.

It would be great if you could `filter` the scores that your parents will see.

`filter` takes a matching condition function and only returns items that result in true. As an example, look at `isA` below:

```js
function isA(x) {
  return x === 'a';
}
```


Like all of the methods in this chapter, `filter` is already part of the `Array.prototype`, so you can run it following any array. Each item in the array is passed into the params of the condition function, one by one. [Learn more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).

```js
const list = ['a', 'b'];
list.filter(isA);

// if isA(list[0]), add to output array
// if isA(list[1]), add to output array
//
//> ['a']
```

If your data was composed of objects, we could use dot notation to find matches. Checkout `isB` below.

```js
function isB(x) {
  return x.item === 'b'
}

const list = [{item: 'a'}, {item: 'b'}];
list.filter(isB);
//> [{item: 'b'}]
```

Where were we? Back to filtering our grades.

There's too much student data in the computer system. We'll have to sort through it. Have a look at an example below:

```js
console.log(students[0]);
//> { course: 'Web Security',
//    instructor: 'Sue Denim',
//    name: 'Rebecca Heineman',
//    score: 93,
//    grade: 'A' }
```

+ Write a filter condition function called `isAda` that returns true only if the name matches your name: "Ada Lovelace".
@test('01/01')
@action(open('01-filter.js'))
@action(set(
```
import students from './data/students';
// Array.filter(fn)

function isAda(student) {
  // return true if student name
  // matches "Ada Lovelace"
  ::>
}
```
))
@hint('Some tasks have hints')
@hint('Check if `student.name` matches "Ada Lovelace"')
@hint('Use `===` to check equality')

+ Set `const myData` to filter with the `isAda` function.
@test('01/02')
@action(insert(
```
// run the function name in filter
const myData = students.filter(::>);
```
))
@hint('Add a function to the `filter` call: `Array.filter(function() {})`')
@hint('Pass `isAda` into your `filter` call')

+ Write a filter condition called `isGoodGrade` that will filter out any "D" or "F" grades.
@test('01/03')
@action(insert(
```


// return true if student.grade is not a "D" or "F"
function isGoodGrade(student) {
  ::>
}
```
))
@hint('match for `student.grade` that isn't "D" or "F"')
@hint('use `!==` to check non-equality')
@hint('Match for both: `student.grade !== "D" && student.grade !== "F"`')

+ Set `const myBest` to your scores, excluding any grades that are "D" or "F".

@test('01/04')
@action(insert(
```
// filter out "D"'s and "F"'s here
const myBest = myData.filter(::>);

```
))

@onPageComplete('In the next step we'll look at how to `sort` data')
