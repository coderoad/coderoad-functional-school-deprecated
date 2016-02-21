### find
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

+ `filter` to students in the class titled "Web Security"
@test('1/05/01-find')
@action(open('05-find.js'))
@action(set(
```
// filter for students.title is "Web Security"
var myClass = students.filter();
```
))

+ `find` the name in `myClass` that isn't in the list of known students
@test('1/05/02-find')
@action(insert(
```

// search for a student with a name
// not matching students in the list
var otherStudents = ["Albert Gonzalez", "Brian Kernaghan", "Danielle Bunten Berry", "Donald Knuth", "Grace Hopper", "Hack Kerr", "James Gosling", "Ken Thompson", "Kevin Mitnick", "Linus Torvalds", "Niklaus Wirth", "Rebecca Heineman", "Tim Berners-Lee", "Xiao Tian", "Ying Cracker"];

```
))
@action(insert(
```
// hint: use `indexOf` to find if an item is in the array
function notInList() {

}

// find using `notInList`
var unknownStudent = myClass.find();
```
))

+ `filter` down to students without known names
@test('1/05/03-find')
@action(insert(
```

// filter using `notInList`
var unknownStudentList = students.filter();
```  
))

+ `map` over the result to get only the `name` property
@test('1/05/04-find')
@action(insert(
```

// use `map` to return only the `student.name`
var unknownStudentNames = unknownStudentList.map();
```  
))

+ `join('')` the array of names to output the result as a string
@test('1/05/05-find')
@action(insert(
```

// use `.join('')` to join the array of strings
var decodedName = unknownStudentNames;
console.log(decodedName);
```  
))

+ Very strange. In the next step, let's find out who wants revenge, and give it to him!
@test('1/05/06-find')
