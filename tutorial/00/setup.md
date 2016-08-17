## Start
Understanding the Data Set

Over this tutorial series, we'll be changing and working with two different data sets. It'll be a big help to first understand what the data looks like.

```json
var students = [
  {
    "title": "Relational Databases",
    "instructor": "Sean Quentin Lewis",
    "name": "Ada Lovelace",
    "score": 91,
    "grade": "A"
  },
  ...
]
```

Here we have an array of "student" objects. To get the first item in the array, you can use the array index. Array indexes start at 0.

```js
console.log(
  'first instructor', students[0].instructor
);
// first instructor Sean Quentin Lewis
```

+ Look in "data/students.js". This is the data we will be working with. Run save to continue.
@test('00/01')
@action(writeFromFile('data/students.js', '00/data.js'))
@open('data/students.js')

+ Set `first` to the first item in the `students` array.
@test('00/02')
@action(open('00-setup.js'))
@action(set(
```
// Welcome to CodeRoad!
const students = require('./data/students').default;

var first = ::>
```
))
@hint('Get the first item in students using the array index')
@hint('Access the title of `students[0]`')


+ Set `myName` to the "name" of the first student in the list.
@test('00/03')
@action(insert(
```
var myName = ::>
```
))
@hint('Get the first "name" in the students using the array index')
@hint('Access the "name" of `first`')
@hint('Try `first.name`')

+ Log your name to the console.
@test('00/04')
@action(insert(
```

console.log(::>);
```  
))
@hint('Use `console.log`')
@hint('Use `console.log(myName)`')


@onPageComplete('Now we're ready to get started with `filter`ing our data.')
