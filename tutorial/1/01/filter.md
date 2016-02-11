### Filter
Array -> Array of items that match a condition

You've hacked into the school's computer system, and just in time. The grades are in, aren't you're not too proud of your performance. But that's okay, you have a plan: you're going to create a fake report card.

It would be great if you could `filter` the scores that your parents will see. A `filter` takes a matching condition function and only returns items that result in true. As an example, look at `isB` below:

```
function isB(x) {
  return x === 'b';
}
```


Like all of the methods in this chapter, `filter` is already part of the `Array.prototype`, so you can run it after any array. Each item is passed into the params of the condition function, one by one.

```
var list = ['a', 'b', 'c'];
list.filter(isB);
//> ['b']
```


There's too much student data in the computer system. We'll have to sort through it. Have a look at an example below:

```
console.log(studentData[0]);
//> { course: 'Web Security',
//    instructor: 'Sue Denim',
//    name: 'Rebecca Heineman',
//    score: 93,
//    grade: 'A' }
```

+ Write a filter condition function called `isAda` that returns true if param.`name` is true
@test('1/01/01-filter')
@action(open('01-filter.js'))
@action(set(
```
function isAda(x) {
  // write condition here
  // the name must match "Ada Lovelace"
}
```))

+ Set `var myData` equal to data matching your name, "Ada Lovelace".
@test('1/01/02-filter')
@action(insert(
```
// load data
var data = require('./node_modules/coderoad-functional-school/tutorial/lib/students').slice(0);
```))
@action(insert(
```
var myData = data.filter // call filter condition here
```))

+ Set `var myBest` to your scores, excluding any grades that are "D" or "F".

@test('1/01/03-filter')
@action(insert(
```
var myBest = myData.filter // filter out "D"'s and "F"'s here
```))
