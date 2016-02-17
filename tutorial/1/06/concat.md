# concat
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

In this data set, there is an array of students within an array of courses. So how can we recreate our original array of students from the courses? We can use `concat`.

Weird things happen when you start combining arrays. `concat` brings sanity.

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

Unfortunately, Javascript is missing a built in array method to concat multiple arrays together: let's call it `flatten` (often called `concatAll`). `flatten` should loop over an array and concat each element.

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

First let's recreate our student array of data from the course data.

+ First, test out `flatten` on the `flattenedArray`
@test('1/06/01-concat')
@open('06-concat.js')
@hint(
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
```
)
@hint(Flatten the resulting arrays)
@hint(
```js
var end = pre.flatten();
//> [{a: 1, b: 1}, {a: 2, b: 2}, {a: 2, b: 3}]
```
)
@action(set(
```
// Array.prototype can be used to create new Array methods
Array.prototype.flatten = function() {
  // more on `reduce` coming up next
  return this.reduce(function(a, b) {
    return a.concat(b);
  }, []);
});
```    
)
@action(insert(
```

// use `flatten` on `numberedList` to set flattenedArray to [1, 2, 3, 4]
var numberedList = [[1, 2], [3, 4]]
var flattenedArray;
```  
))

+ Map over the course data array, and map over the student array inside of the course data. Set `doubleArray` to return an array of array of objects that looks like this:

```js
  {
  "title": "Relational Databases",
  "instructor": "Sean Quentin Lewis",
  "name": "Rebecca Heineman",
  "score": 71,
  "grade": "C"
  }
```
@test('1/06/02-concat')
@action(insert(
```

// map over doubleArray twice
var doubleArray = courses;
```
))

+ Use `flatten` to put all data into a single array. Set `students` to the result.
@test('1/06/03-concat')
@action(insert(
```

// flatten doubleArray
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

+ You just thought of two more suspects!  `concat` the new suspects array onto the `suspects` list.
@test('1/06/05-concat')
@action(insert(
```

var newSuspects = ["Kevin Mitnick", "Albert Gonzalez"];
```  
))
