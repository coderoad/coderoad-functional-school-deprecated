### Filter
Array -> Array of items that match a condition

You've hacked into the school's computer system, and just in time. The grades are in, aren't you're not too proud of your performance. But that's okay, you have a plan: you're going to create a fake report card.

It would be great if you could `filter` the scores that your parents will see. A `filter` takes a matching condition function and only returns items that result in true. As an example, look at `isA` below:

```
function isA(x) {
  return x === 'a';
}
```


Like all of the methods in this chapter, `filter` is already part of the `Array.prototype`, so you can run it following any array. Each item in the array is passed into the params of the condition function, one by one.

```
var list = ['a', 'b'];
list.filter(isA);

// if isA(list[0]), add to output array
// if isA(list[1]), add to output array
//
//> ['a']
```

If your data was composed of objects, we could use dot notation to find matches. Checkout `isB` below.

```
function isB(x) {
  return x.item === 'b'
}

var list = [{item: 'a'}, {item: 'b'}];
list.filter(isB);
//> [{item: 'b'}]
```

Where were we? Back to filtering our grades.

There's too much student data in the computer system. We'll have to sort through it. Have a look at an example below:

```
console.log(data[0]);
//> { course: 'Web Security',
//    instructor: 'Sue Denim',
//    name: 'Rebecca Heineman',
//    score: 93,
//    grade: 'A' }
```

+ Write a filter condition function called `isAda` that returns true only if the name matches your name: "Ada Lovelace".
@test('1/01/01-filter')
@action(open('01-filter.js'))
@action(set(
```
/**
 * Data is set as a global. Example:
 * [{
 * "course": "Relational Databases",
 * "instructor": "Sean Quentin Lewis",
 * "name": "Ada Lovelace",
 * "score": 91,
 * "grade": "A"
 * },
 * ...
 * ]
 */
```
))
@action(insert(
```
function isAda() {
  // write condition here
  // the student.name must match "Ada Lovelace"

}
```
))

+ Set `var myData` equal to data matching your name, "Ada Lovelace".
@test('1/01/02-filter')
@action(insert(
```
// call filter condition here
var myData = data.filter();

```
))

+ Write a filter condition called `isGoodGrade` that will filter out any "D" or "F" grades.
@test('1/01/03-filter')
@action(insert(
```
// return true if student "grade" is not a "D" or "F"
function isGoodGrade(student) {

}
```
))

+ Set `var myBest` to your scores, excluding any grades that are "D" or "F".

@test('1/01/04-filter')
@action(insert(
```
// filter out "D"'s and "F"'s here
var myBest = myData.filter();

```
))
