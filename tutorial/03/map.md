## Map
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

+ load "myCourses"
@test('03/01')
@action(open('data/myCourses.js'))
@action(set(
```
const myCourses = [{
  title:"Relational Databases",
  instructor:"Sean Quentin Lewis",
  name:"Ada Lovelace",
  score:91,
  grade:"A"
}, {
  title:"3D Computer Graphics",
  instructor:"G.L. Webb",
  name:"Ada Lovelace",
  score:88,
  grade:"B"
}, {
  title:"Front End Web Development",
  instructor:"Moe Zaick",
  name:"Ada Lovelace",
  score:61,
  grade:"D"
}, {
  title:"Web Security",
  instructor:"Sue Denim",
  name:"Ada Lovelace",
  score:81,
  grade:"B"
}, {
  title:"Javascript Fundamentals",
  instructor:"Jay Kweerie",
  name:"Ada Lovelace",
  score:73,
  grade:"C"
}, {
  title:"Data Science",
  instructor:"Ford Fulkerson",
  name:"Ada Lovelace",
  score:58,
  grade:"F"
}, {
  title:"Algorithm Design",
  instructor:"Gale Shapely",
  name:"Ada Lovelace",
  score:93,
  grade:"A"
}, {
  title:"Data Abstraction",
  instructor:"Aster Ricks",
  name:"Ada Lovelace",
  score:82,
  grade:"B"
}, {
  title:"Data Structures",
  instructor:"Brodal Q.",
  name:"Ada Lovelace",
  score:88,
  grade:"B"
}, {
  title:"Networks",
  instructor:"Van Emde Boas",
  name:"Ada Lovelace",
  score:65,
  grade:"D"
}];
export default myCourses;
```
))

+ Make a function `changeGrade` that takes a course and changes the grade to an "A"
@test('03/02')
@action(open('03-map.js'))
@action(set(
```
import myCourses from './data/myCourses';
// Array.map(fn)

/*
  change any `course.grade`'s into an 'A'

  example:
  changeGrade({ grade: 'F' }) === { grade: 'A' };
*/
function changeGrade(course) {
  ::>
}

```
))
@hint('give `changeGrade` a parameter, call it "course"')
@hint('set `course.grade` to "A"')
@hint('return the changed course')


+ Map over the `myCourses` with the `changeGrade` function. Set `myChanged` to the result.
@test('03/03')
@action(insert(
```
// map over `myCourses` and call `changeGrade` for each item
const myChanged = myCourses.map(::>);
```
))
@hint('simply call `.map(changeGrade)`')


+ Hold up. An A in "Data Science" class looks way to suspicious. Your parents might catch on to your cheating.

Let's go back to `myCourses` and instead increment each score by 12 points.
@test('03/04')
@action(insert(
```

function increaseScore(course) {
  ::>
}

// map over `mySlightlyChanged` with a function `increaseScore` to increment each score by 12
const mySlightlyChanged = myCourses;
```
))
@hint('give `increaseScore` a parameter, call it "course"')
@hint('it should increase `course.score`')
@hint('return `course`')

+ Wait. Now you're getting 105 in "Algorithm Design" class. Fix `increaseScore` so that the maximum score is 95. That should be less suspicious.
@test('03/05')
@hint('Use `Math.min(x, y)`')
@hint('set `course.score` to `Math.min(95, course.score + 12)`')

+ One more problem. Now the scores don't match the grades. you have 95 score in "3D Computer Graphics", but only a "B" grade. Update your `increaseScore` function to also update the grade by using the `getGrade` function
@test('03/06')
@action(insert(
```

// use getGrade to set the course grade
// update `increaseScore` to also update the grade
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

```
))
@hint('call `getGrade` inside of `increaseScore`')
@hint('the `increaseScore` function should set course.grade equal to `getGrade(course.score)`')

+ Check to make sure everything is working. Set `scoresAndGrades` to an array of scores and grades only.
@test('03/07')
@action(insert(
```

// set `scoresAndGrades` to an array of scores and grades
// it should return an array of objects like this: {score: 75, grade: 'C'}
const scoresAndGrades = mySlightlyChanged.map(::>)
```
))
@hint('use `map` to return only the "score" & "grade" fields')
@hint('map with a function with a parameter, call it "student"')
@hint('you can destructure the param to be `function({score, grade})`')
@hint('then simply return { score, grade }')

@onPageComplete('In the next step we'll compare `map` with `forEach`')
