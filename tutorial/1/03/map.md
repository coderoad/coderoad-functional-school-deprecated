### Map
Array -> run a function over each item -> Array

You've filtered and sorted our data, but neither of those actually change the data.

Wouldn't it be simpler if you could just change your grades? You can use the array method `map` to run a function that returns changes to your data.

As an example, let's look at how you would increment each number in an array.

```js
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

`map` can change data, but it can also restrict the data you want to work with. See the example below to see another way scores could be sorted.

```js
myBest
  .map(function(student) {
    return student.score;
  })
  .sort()
  .reverse()
//> [93, 91, 88, 88, 82, 81, 73]
```

In this example, `map` transformed an object with keys of 'title', 'instructor', 'name', 'score' and 'grade', to an array of scores only. Data wasn't changed, but it was limited to a smaller subset of scores.

`map` is powerful. Let's see what you can do with it.

Those D & F grades would look a lot better if they suddenly became A's.

Let's go back to before we filtered out the bad grades, and instead change the grades to A's.

+ Make a function `changeGrades` that takes student data and changes all grades to "A"s.
@test('1/03/01-map')
@action(open('03-map.js'))
@action(set(
```
// change any `student.grade`'s into an 'A'
function changeGrades(student) {

}
```
))


+ Map over the `myData` with the `changeGrades` function. Set `myChanged` to the result.
@test('1/03/02-map')
@action(insert(
```
// map over `myData` with the `changeGrades` function
var myChanged = myData.map();
```
))

+ Hold up. An A in "Data Science" class looks way to suspicious. Your parents might catch on to your cheating.

Let's go back to `myData` and instead increment each score by 12 points.
@test('1/03/03-map')
@action(insert(
```
// map over `mySlightlyChanged` with a function `increaseGrades` to increment each score by 12
var mySlightlyChanged = myData.map();
```
))

+ Wait. Now you're getting 105 in "Algorithm Design" class. Set `mySlightlyFixed` to have a maximum score of 95. That should be less suspicious.
@test('1/03/04-map')
@action(insert(
```
// set `mySlightlyFixed` to change any scores over 100 to a score of 95
var mySlightlyFixed = mySlightlyChanged.map();
```
))

+ One more problem. Now the scores don't match the grades. you have 95 score in "3D Computer Graphics", but only a "B" grade. Set `myFixed` as the result of using the `getGrade` function to set grades according to their new scores.
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

+ Check to make sure everything is working. Set `scoresAndGrades` to an array of scores and grades only.
@test('1/03/06-map')
@action(insert(
```

// set `scoresAndGrades` to an array of scores and grades
// it should return an array of objects like this: {score: 75, grade: 'C'}
var scoresAndGrades = myFixed;
```
))
