### concat
Array + Array -> Array

Before we've been working on a structured set of student data.

```js
// array of students
[
  {
  "title": "Relational Databases",
  "instructor": "Sean Quentin Lewis",
  "name": "Rebecca Heineman",
  "score": 71,
  "grade": "C"
  }
// students in courses...
]
```

To be safe, let's now work on the original data set. Notice how it is structured differently.

```js
// array of courses
[
  {
    "title": "Relational Databases",
    "instructor": "Sean Quentin Lewis",
    "students": [
      {
        "name": "Rebecca Heineman",
        "score": 71,
        "grade": "C"
      }
    // students...
    ]
  }
  // courses...
]
```

In this data set, there is an array of students within an array of courses. So how can we recreate our original array of students from the courses?

Weird things happen when you start combining arrays. We can use `concat` to bring sanity.

```js
[1, 2] + [3, 4];
//> "1, 23, 4"

[1, 2].push([3, 4]);
//> 3

[1, 2].join([3, 4]);
//> "13, 42"

[1, 2].concat([3, 4]);
//> [1, 2, 3, 4]
```

Unfortunately, Javascript is missing a built in array method to concat multiple arrays together: let's call it `flatten` (sometimes called `concatAll`).

`flatten` should loop over an array and `concat` each element.

Let's look at an abstraction of what we need to do:

```js
var start = [{
  a: 1,
  c: [
    { b: 1 }
  ]
}, {
  a: 2,
  c: [
    { b: 2 }, { b: 3 }
  ]
}];

var middle = start.map(function(outer) {
  return outer.c.map(function(inner) {
    return {
      a: outer.a,
      b: inner.b
    };
  });
});
//> [ [{ a: 1, b: 1 }], [{a: 2, b: 2}, {a: 2, b: 3}] ]

var end = pre.flatten();
//> [{a: 1, b: 1}, {a: 2, b: 2}, {a: 2, b: 3}]
```

Back to business.

We have a suspect in mind: a classmate named "Hack Kerr". He's a nice guy, and he's always been friendly to you - but there's something suspicious about him: his name.

We'll test out flatten, then re-create our student array of data from the original course data.

+ First, test out `flatten` on the `flattenedArray`
@test('1/06/01-concat')
@action(open('06-concat.js'))
@action(set(
```
// Array.prototype can be used to create new Array methods
Array.prototype.flatten = function() {
  return this.reduce(function(a, b) {
    return a.concat(b);
  }, []);
};
```
))
@action(insert(
```

var numberedList = [[1, 2], [3, 4]];

// use `flatten` on `numberedList`
var flattenedArray = numberedList;
```  
))


+ Now `map` over the courses array, and `map` over the students array inside of it.
Return the fields:

  * title
  * instructor
  * name
  * grade
  * score
@test('1/06/02-concat')
@action(insert(
```

// map over courses then
// map over students inside of courses
var doubleArray = courses.map(function(course) {
    return course.students.map(function(student) {
      return {
        // fill in the fields
        title: '',
        instructor: '',
        name: '',
        score: '',
        grade: ''
      };
    });
});

```
))

+ Use `flatten` to put all data into a single array. Set `students` to the result.
@test('1/06/03-concat')
@action(insert(
```
// `flatten` doubleArray
var students = doubleArray;
```
))

+ Use the `suspects` array to `filter` to only "Hack Kerr"'s data
@test('1/06/04-concat')
@action(insert(
```

var suspects = ["Hack Kerr"];
// filter to data matching `suspects`

var suspectData = students;
```
))

+ You just thought of two more suspects! Make a new variable called `newSuspects` and add it above `suspects`.

```js
var newSuspects = ['Albert Gonzalez', 'Kevin Mitnick'];
```

`concat` the `newSuspects` onto the `suspects` list.
@test('1/06/05-concat')
