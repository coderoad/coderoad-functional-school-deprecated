## find
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

+ `filter` to `students` in the class titled "Web Security"
@test('05/01')
@action(open('05-find.js'))
@action(set(
```
// Array.find(fn)

// filter for the student title matches "Web Security"
var myClass = students.filter(::>);
```
))
@hint('create a `filter` function')
@hint('filter for `student.title === "Web Security"`')

+ `find` the name in `myClass` that isn't in the list of known students
@test('05/02')
@action(insert(
```

var otherStudents = ["Albert Gonzalez", "Brian Kernaghan", "Danielle Bunten Berry", "Donald Knuth", "Grace Hopper", "Hack Kerr", "James Gosling", "Ken Thompson", "Kevin Mitnick", "Linus Torvalds", "Niklaus Wirth", "Rebecca Heineman", "Tim Berners-Lee", "Xiao Tian", "Ying Cracker"];

```
))
@action(insert(
```
// search for a student with a name
// not matching students in `otherStudents`
function notInList(::>) {

}

// find using `notInList`
var unknownStudent = myClass.find();
```
))
@hint('use `indexOf` to find what doesn't match')
@hint('use `otherStudents.indexOf(x) === -1` to find what doesn't match')
@hint('match for `student.name`')

+ `filter` down to students without known names
@test('05/03')
@action(insert(
```

// filter using `notInList`
var unknownStudentList = students.filter(::>);
```  
))
@hint('consider reusing a function')

+ `map` over the result to get only the `name` property
@test('05/04')
@action(insert(
```

// list only student names
var unknownStudentNames = unknownStudentList.map(::>);
```  
))
@hint('use `map` to return only the `student.name`')

+ `join('')` the array of names to output the result as a string
@test('05/05')
@action(insert(
```

// use `.join('')` to join the array of strings
var decodedName = unknownStudentNames::>;
console.log(decodedName);
```  
))
@hint('call `join` following `unknownStudentNames`')

@onPageComplete('Very strange. In the next step, let's find out who wants revenge, and give it to him!')
