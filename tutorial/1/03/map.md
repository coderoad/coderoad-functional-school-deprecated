### Map
Array -> run a function over each item -> Array

You've filtered and sorted our data, but wouldn't it be better if you could just change your grades? You can use the array method `map` to run a function that returns changes to your data.

As an example, let's look at how you would increment each number in an array.

```
function addOne(num) {
  return num + 1;
}

function addTwo(num) {
  return num + 2;
}

[1, 2, 3].map(addOne);
//> [2, 3, 4]

[1, 2, 3].map(addOne).map(addTwo);
//> [4, 5, 6]
```

`map` is powerful.

Those D & F's would look a lot better if they suddenly became A's.

Let's go back to before we filtered out the bad grades.

+ Make a function `changeGrades` that takes student data and changes any "D"s and "F"s to "A"s.
@test('1/03/01-map')
@action(open('03-map.js'))
@action(set(
```
// change any student.grade's that are D's or F's into A's
function changeGrades(student) {

}
```
))

+ Map over the student data with the `changeGrades` function
@test('1/03/02-map')
@action(insert(
```
// map over `myData` with the `changeGrades` function
var myChanged = myData.map();
```
))

+ Hold up. An A in Data Science looks way to suspicious. Your parents might catch on.
Instead, let's go back to myData and increment each score by 12 points.
@test('1/03/03-map')
@action(insert(
```
// map over `mySlightlyChanged` with a function to increment each score by 12
var mySlightlyChanged = myData.map();
```
))

+ Wait. Now you're getting 105 in Algorithm Design class. Set `mySlightlyFixed` to your scores with a maximum score of 95. That should be less suspicious.
@test('1/03/04-map')
@action(insert(
```
// set `mySlightlyFixed` to change any scores over 100 to a score of 95
var mySlightlyFixed = mySlightlyChanged.map();
```
))

+ One more problem. Now the scores don't match the grades. Set `myFixed` as the result of using the `getGrade` function to set grades according to the new scores.
@test('1/03/05-map')
@action(insert(
```
function getGrade(score) {
  switch (true) {
    case (score >= 90):
      return "A";
    case (score >= 80):
      return "B";
    case (score >= 70):
      return "C";
    case (score >= 60):
      return "D";
    default:
      return "F";
  }
}
// set `myFixed` to update grades to the new scores
var myFixed = mySlightlyChanged.map();
```
))
