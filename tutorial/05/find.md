## find
Array -> first element that matches a condition

Somehow your name has disappeared from the computer system. We'll have to `find` a way to get it back.

You quickly put together a list of other students in class. If someone changed your name, it'll be the name that is not in that list.

`find` works similar to `filter`, but returns only the first match.

```js
const data = [1, 2, 3, 4, 5, 6];

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

+ load "students" data. Save to continue.
@test('05/01')
@action(writeFromFile('data/myCourses2.js', '05/courses.js'))
@action(open('data/myCourses2.js'))

+ `filter` to `courses` in the class titled "Web Security"
@test('05/02')
@action(open('05-find.js'))
@action(set(
```
const courses = require('./data/myCourses2');
// Array.find(fn)

// filter for the course title matching "Web Security"
const myClass = courses.filter(::>);
```
))
@hint('create a `filter` function that takes a param `course`')
@hint('return `true` if a condition matches, otherwise `false`')
@hint('filter for `course.title === "Web Security"`')

+ `find` the name in `myClass` that isn't in the list of known students
@test('05/03')
@action(insert(
```

const otherStudents = ["Albert Gonzalez", "Brian Kernaghan", "Danielle Bunten Berry", "Donald Knuth", "Grace Hopper", "Hack Kerr", "James Gosling", "Ken Thompson", "Kevin Mitnick", "Linus Torvalds", "Niklaus Wirth", "Rebecca Heineman", "Tim Berners-Lee", "Xiao Tian", "Ying Cracker"];

```
))
@action(insert(
```
// search for a student with a name
// not matching students in `otherStudents`
function notInList(::>) {

}

// find using `notInList`
const unknownStudent = myClass.find();
```
))
@hint('use `indexOf` to find what doesn't match')
@hint('use `otherStudents.indexOf(x) === -1` to find what doesn't match')
@hint('match for `student.name`')

+ `filter` down to students from courses without known names
@test('05/04')
@action(insert(
```

// filter using `notInList`
const unknownStudentList = courses.filter(::>);
```  
))
@hint('consider reusing a function')

+ `map` over the result to get only the `name` property
@test('05/05')
@action(insert(
```

// list only student names
const unknownStudentNames = unknownStudentList.map(::>);
```  
))
@hint('use `map` to return only the `student.name`')
@hint('try this inside of your map call: `student => student.name`')

+ `join('')` the array of names to output the result as a string
@test('05/06')
@action(insert(
```

// use `.join('')` to join the array of strings
const decodedName = unknownStudentNames::>;
console.log(decodedName);
```  
))
@hint('call `join` following `unknownStudentNames`')

@onPageComplete('Very strange. In the next step, let's find out who wants revenge, and give it to him!')
