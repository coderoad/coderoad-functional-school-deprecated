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

Find is great for performantly matching unique values in data, such as "id"'s, or in our case, names.

+ `filter` to students in the class titled "Web Security"
@test('1/05/01-find')
@action(open('05-find.js'))
@action(set(
```
// search for a student with a name
// not matching students in the list
var otherStudents = ["Albert Gonzalez", "Brian Kernaghan", "Danielle Bunten Berry", "Donald Knuth", "Grace Hopper", "Hack Kerr", "James Gosling", "Ken Thompson", "Kevin Mitnick", "Linus Torvalds", "Niklaus Wirth", "Rebecca Heineman", "Tim Berners-Lee", "Xiao Tian", "Ying Cracker"];
```
))
@action(insert(
```

// filter for students.title is "Web Security"
var myClass = students
```
))

+ `find` the name in `myClass` that isn't in the list of known students
@test('1/05/02-find')
@action(insert(
```

// hint: use `indexOf` to find if an item is in the array
var unknownStudent  
```
))

+ `filter` down to students without known names
@test('1/05/03-find')
@action(insert(
```
var unknownStudentList
```  
))

+ `map` over the result to get only the `name` property
@test('1/05/04-find')
@action(insert(
```
var unknownStudentNames
```  
))

+ `join('')` the array of names to output result
@test('1/05/05-find')
@action(insert(
```
var decodedName
```  
))
