## concat
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
const start = [{
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

const middle = start.map(function(outer) {
  return outer.c.map(function(inner) {
    return {
      a: outer.a,
      b: inner.b
    };
  });
});
//> [ [{ a: 1, b: 1 }], [{a: 2, b: 2}, {a: 2, b: 3}] ]

const end = pre.flatten();
//> [{a: 1, b: 1}, {a: 2, b: 2}, {a: 2, b: 3}]
```

Back to business.

We have a suspect in mind: a classmate named "Hack Kerr". He's a nice guy, and he's always been friendly to you - but there's something suspicious about him: his name.

We'll test out flatten, then re-create our student array of data from the original course data.

+ load "courses"
@test('06/01')
@action(open('data/courses2.js'))
@action(set(
```
const courses = [{
	title: "Relational Databases",
	instructor: "Sean Quentin Lewis",
	students: [{
		name: "!f",
		score: 61,
		grade: "D"
	}, {
		name: "Albert Gonzalez",
		score: 35,
		grade: "F"
	}, {
		name: "Brian Kernaghan",
		score: 35,
		grade: "F"
	}, {
		name: "Danielle Bunten Berry",
		score: 78,
		grade: "C"
	}, {
		name: "Donald Knuth",
		score: 94,
		grade: "A"
	}, {
		name: "Grace Hopper",
		score: 36,
		grade: "F"
	}, {
		name: "Hack Kerr",
		score: 85,
		grade: "F"
	}, {
		name: "James Gosling",
		score: 30,
		grade: "F"
	}, {
		name: "Ken Thompson",
		score: 30,
		grade: "F"
	}, {
		name: "Kevin Mitnick",
		score: 72,
		grade: "C"
	}, {
		name: "Linus Torvalds",
		score: 34,
		grade: "F"
	}, {
		name: "Niklaus Wirth",
		score: 75,
		grade: "C"
	}, {
		name: "Rebecca Heineman",
		score: 71,
		grade: "C"
	}, {
		name: "Tim Berners-Lee",
		score: 54,
		grade: "F"
	}, {
		name: "Xiao Tian",
		score: 67,
		grade: "D"
	}, {
		name: "Ying Cracker",
		score: 57,
		grade: "F"
	}]
}, {
	title: "3D Computer Graphics",
	instructor: "G.L. Webb",
	students: [{
		name: "in",
		score: 58,
		grade: "F"
	}, {
		name: "Albert Gonzalez",
		score: 37,
		grade: "F"
	}, {
		name: "Brian Kernaghan",
		score: 76,
		grade: "C"
	}, {
		name: "Danielle Bunten Berry",
		score: 53,
		grade: "F"
	}, {
		name: "Donald Knuth",
		score: 34,
		grade: "F"
	}, {
		name: "Grace Hopper",
		score: 74,
		grade: "C"
	}, {
		name: "Hack Kerr",
		score: 86,
		grade: "F"
	}, {
		name: "James Gosling",
		score: 94,
		grade: "A"
	}, {
		name: "Ken Thompson",
		score: 48,
		grade: "F"
	}, {
		name: "Kevin Mitnick",
		score: 52,
		grade: "F"
	}, {
		name: "Linus Torvalds",
		score: 90,
		grade: "A"
	}, {
		name: "Niklaus Wirth",
		score: 78,
		grade: "C"
	}, {
		name: "Rebecca Heineman",
		score: 73,
		grade: "C"
	}, {
		name: "Tim Berners-Lee",
		score: 94,
		grade: "A"
	}, {
		name: "Xiao Tian",
		score: 45,
		grade: "F"
	}, {
		name: "Ying Cracker",
		score: 77,
		grade: "C"
	}]
}, {
	title: "Front End Web Development",
	instructor: "Moe Zaick",
	students: [{
		name: "dt",
		score: 31,
		grade: "F"
	}, {
		name: "Albert Gonzalez",
		score: 73,
		grade: "C"
	}, {
		name: "Brian Kernaghan",
		score: 47,
		grade: "F"
	}, {
		name: "Danielle Bunten Berry",
		score: 87,
		grade: "B"
	}, {
		name: "Donald Knuth",
		score: 80,
		grade: "B"
	}, {
		name: "Grace Hopper",
		score: 80,
		grade: "B"
	}, {
		name: "Hack Kerr",
		score: 92,
		grade: "C"
	}, {
		name: "James Gosling",
		score: 97,
		grade: "A"
	}, {
		name: "Ken Thompson",
		score: 64,
		grade: "D"
	}, {
		name: "Kevin Mitnick",
		score: 47,
		grade: "F"
	}, {
		name: "Linus Torvalds",
		score: 58,
		grade: "F"
	}, {
		name: "Niklaus Wirth",
		score: 93,
		grade: "A"
	}, {
		name: "Rebecca Heineman",
		score: 58,
		grade: "F"
	}, {
		name: "Tim Berners-Lee",
		score: 98,
		grade: "A"
	}, {
		name: "Xiao Tian",
		score: 36,
		grade: "F"
	}, {
		name: "Ying Cracker",
		score: 73,
		grade: "C"
	}]
}, {
	title: "Web Security",
	instructor: "Sue Denim",
	students: [{
		name: "he",
		score: 51,
		grade: "F"
	}, {
		name: "Albert Gonzalez",
		score: 74,
		grade: "C"
	}, {
		name: "Brian Kernaghan",
		score: 92,
		grade: "A"
	}, {
		name: "Danielle Bunten Berry",
		score: 34,
		grade: "F"
	}, {
		name: "Donald Knuth",
		score: 44,
		grade: "F"
	}, {
		name: "Grace Hopper",
		score: 81,
		grade: "B"
	}, {
		name: "Hack Kerr",
		score: 75,
		grade: "F"
	}, {
		name: "James Gosling",
		score: 95,
		grade: "A"
	}, {
		name: "Ken Thompson",
		score: 84,
		grade: "B"
	}, {
		name: "Kevin Mitnick",
		score: 89,
		grade: "B"
	}, {
		name: "Linus Torvalds",
		score: 57,
		grade: "F"
	}, {
		name: "Niklaus Wirth",
		score: 88,
		grade: "B"
	}, {
		name: "Rebecca Heineman",
		score: 93,
		grade: "A"
	}, {
		name: "Tim Berners-Lee",
		score: 36,
		grade: "F"
	}, {
		name: "Xiao Tian",
		score: 87,
		grade: "B"
	}, {
		name: "Ying Cracker",
		score: 42,
		grade: "F"
	}]
}, {
	title: "Javascript Fundamentals",
	instructor: "Jay Kweerie",
	students: [{
		name: "be",
		score: 43,
		grade: "F"
	}, {
		name: "Albert Gonzalez",
		score: 94,
		grade: "A"
	}, {
		name: "Brian Kernaghan",
		score: 71,
		grade: "C"
	}, {
		name: "Danielle Bunten Berry",
		score: 66,
		grade: "D"
	}, {
		name: "Donald Knuth",
		score: 94,
		grade: "A"
	}, {
		name: "Grace Hopper",
		score: 99,
		grade: "A"
	}, {
		name: "Hack Kerr",
		score: 83,
		grade: "F"
	}, {
		name: "James Gosling",
		score: 99,
		grade: "A"
	}, {
		name: "Ken Thompson",
		score: 65,
		grade: "D"
	}, {
		name: "Kevin Mitnick",
		score: 47,
		grade: "F"
	}, {
		name: "Linus Torvalds",
		score: 93,
		grade: "A"
	}, {
		name: "Niklaus Wirth",
		score: 50,
		grade: "F"
	}, {
		name: "Rebecca Heineman",
		score: 33,
		grade: "F"
	}, {
		name: "Tim Berners-Lee",
		score: 51,
		grade: "F"
	}, {
		name: "Xiao Tian",
		score: 87,
		grade: "B"
	}, {
		name: "Ying Cracker",
		score: 60,
		grade: "D"
	}]
}, {
	title: "Data Science",
	instructor: "Ford Fulkerson",
	students: [{
		name: "st",
		score: 28,
		grade: "F"
	}, {
		name: "Albert Gonzalez",
		score: 67,
		grade: "D"
	}, {
		name: "Brian Kernaghan",
		score: 66,
		grade: "D"
	}, {
		name: "Danielle Bunten Berry",
		score: 36,
		grade: "F"
	}, {
		name: "Donald Knuth",
		score: 36,
		grade: "F"
	}, {
		name: "Grace Hopper",
		score: 66,
		grade: "D"
	}, {
		name: "Hack Kerr",
		score: 96,
		grade: "A"
	}, {
		name: "James Gosling",
		score: 83,
		grade: "B"
	}, {
		name: "Ken Thompson",
		score: 35,
		grade: "F"
	}, {
		name: "Kevin Mitnick",
		score: 75,
		grade: "C"
	}, {
		name: "Linus Torvalds",
		score: 63,
		grade: "D"
	}, {
		name: "Niklaus Wirth",
		score: 75,
		grade: "C"
	}, {
		name: "Rebecca Heineman",
		score: 84,
		grade: "B"
	}, {
		name: "Tim Berners-Lee",
		score: 41,
		grade: "F"
	}, {
		name: "Xiao Tian",
		score: 49,
		grade: "F"
	}, {
		name: "Ying Cracker",
		score: 96,
		grade: "A"
	}]
}, {
	title: "Algorithm Design",
	instructor: "Gale Shapely",
	students: [{
		name: "re",
		score: 63,
		grade: "D"
	}, {
		name: "Albert Gonzalez",
		score: 39,
		grade: "F"
	}, {
		name: "Brian Kernaghan",
		score: 69,
		grade: "D"
	}, {
		name: "Danielle Bunten Berry",
		score: 54,
		grade: "F"
	}, {
		name: "Donald Knuth",
		score: 83,
		grade: "B"
	}, {
		name: "Grace Hopper",
		score: 31,
		grade: "F"
	}, {
		name: "Hack Kerr",
		score: 94,
		grade: "A"
	}, {
		name: "James Gosling",
		score: 35,
		grade: "F"
	}, {
		name: "Ken Thompson",
		score: 67,
		grade: "D"
	}, {
		name: "Kevin Mitnick",
		score: 81,
		grade: "B"
	}, {
		name: "Linus Torvalds",
		score: 70,
		grade: "C"
	}, {
		name: "Niklaus Wirth",
		score: 74,
		grade: "C"
	}, {
		name: "Rebecca Heineman",
		score: 92,
		grade: "A"
	}, {
		name: "Tim Berners-Lee",
		score: 48,
		grade: "F"
	}, {
		name: "Xiao Tian",
		score: 80,
		grade: "B"
	}, {
		name: "Ying Cracker",
		score: 84,
		grade: "B"
	}]
}, {
	title: "Data Abstraction",
	instructor: "Aster Ricks",
	students: [{
		name: "ve",
		score: 52,
		grade: "F"
	}, {
		name: "Albert Gonzalez",
		score: 70,
		grade: "C"
	}, {
		name: "Brian Kernaghan",
		score: 89,
		grade: "B"
	}, {
		name: "Danielle Bunten Berry",
		score: 38,
		grade: "F"
	}, {
		name: "Donald Knuth",
		score: 86,
		grade: "B"
	}, {
		name: "Grace Hopper",
		score: 42,
		grade: "F"
	}, {
		name: "Hack Kerr",
		score: 87,
		grade: "F"
	}, {
		name: "James Gosling",
		score: 89,
		grade: "B"
	}, {
		name: "Ken Thompson",
		score: 86,
		grade: "B"
	}, {
		name: "Kevin Mitnick",
		score: 41,
		grade: "F"
	}, {
		name: "Linus Torvalds",
		score: 76,
		grade: "C"
	}, {
		name: "Niklaus Wirth",
		score: 78,
		grade: "C"
	}, {
		name: "Rebecca Heineman",
		score: 70,
		grade: "C"
	}, {
		name: "Tim Berners-Lee",
		score: 74,
		grade: "C"
	}, {
		name: "Xiao Tian",
		score: 93,
		grade: "A"
	}, {
		name: "Ying Cracker",
		score: 95,
		grade: "A"
	}]
}, {
	title: "Data Structures",
	instructor: "Brodal Q.",
	students: [{
		name: "ng",
		score: 58,
		grade: "F"
	}, {
		name: "Albert Gonzalez",
		score: 56,
		grade: "F"
	}, {
		name: "Brian Kernaghan",
		score: 58,
		grade: "F"
	}, {
		name: "Danielle Bunten Berry",
		score: 38,
		grade: "F"
	}, {
		name: "Donald Knuth",
		score: 85,
		grade: "B"
	}, {
		name: "Grace Hopper",
		score: 53,
		grade: "F"
	}, {
		name: "Hack Kerr",
		score: 89,
		grade: "B"
	}, {
		name: "James Gosling",
		score: 42,
		grade: "F"
	}, {
		name: "Ken Thompson",
		score: 87,
		grade: "B"
	}, {
		name: "Kevin Mitnick",
		score: 40,
		grade: "F"
	}, {
		name: "Linus Torvalds",
		score: 91,
		grade: "A"
	}, {
		name: "Niklaus Wirth",
		score: 51,
		grade: "F"
	}, {
		name: "Rebecca Heineman",
		score: 79,
		grade: "C"
	}, {
		name: "Tim Berners-Lee",
		score: 37,
		grade: "F"
	}, {
		name: "Xiao Tian",
		score: 84,
		grade: "B"
	}, {
		name: "Ying Cracker",
		score: 45,
		grade: "F"
	}]
}, {
	title: "Networks",
	instructor: "Van Emde Boas",
	students: [{
		name: "e!",
		score: 35,
		grade: "F"
	}, {
		name: "Albert Gonzalez",
		score: 52,
		grade: "F"
	}, {
		name: "Brian Kernaghan",
		score: 61,
		grade: "D"
	}, {
		name: "Danielle Bunten Berry",
		score: 59,
		grade: "F"
	}, {
		name: "Donald Knuth",
		score: 89,
		grade: "B"
	}, {
		name: "Grace Hopper",
		score: 40,
		grade: "F"
	}, {
		name: "Hack Kerr",
		score: 102,
		grade: "F"
	}, {
		name: "James Gosling",
		score: 39,
		grade: "F"
	}, {
		name: "Ken Thompson",
		score: 83,
		grade: "B"
	}, {
		name: "Kevin Mitnick",
		score: 37,
		grade: "F"
	}, {
		name: "Linus Torvalds",
		score: 65,
		grade: "D"
	}, {
		name: "Niklaus Wirth",
		score: 36,
		grade: "F"
	}, {
		name: "Rebecca Heineman",
		score: 32,
		grade: "F"
	}, {
		name: "Tim Berners-Lee",
		score: 70,
		grade: "C"
	}, {
		name: "Xiao Tian",
		score: 52,
		grade: "F"
	}, {
		name: "Ying Cracker",
		score: 62,
		grade: "D"
	}]
}];
export default courses;
```  
))

+ First, test out `flatten` on the `flattenedArray`
@test('06/02')
@action(open('06-concat.js'))
@action(set(
```
import courses from './data/courses2';
// Array.concat(any)

// Array.prototype can be used to create new Array methods
Array.prototype.flatten = function() {
  return this.reduce((a, b) => a.concat(b), []);
};
```
))
@action(insert(
```

const numberedList = [[1, 2], [3, 4]];

// use `flatten` on `numberedList`
const flattenedArray = numberedList::>;
```  
))
@hint('call `.flatten()` on `numberedList`')


+ Now `map` over the courses array, and `map` over the students array inside of it.
Return the fields:

  * title
  * instructor
  * name
  * grade
  * score
@test('06/03')
@action(insert(
```

// map over courses then
// map over students inside of courses
const doubleArray = courses.map((course) => {
    return course.students.map((student) => {
      return {
        // fill in the fields
        title: ::>'',
        instructor: '',
        name: '',
        score: '',
        grade: ''
      };
    });
});

```
))
@hint('pair `course.title`')
@hint('pair `student.name`')

+ Use `flatten` to put all data into a single array. Set `students` to the result.
@test('06/04')
@action(insert(
```
// `flatten` doubleArray
const students = doubleArray::>;
```
))
@hint('call `.flatten()` on `doubleArray`')

+ Use the `suspects` array to `filter` to only data matching the names in the `suspects` array
@test('06/05')
@action(insert(
```

const suspects = ["Hack Kerr"];
// filter to data matching `suspects`

const suspectData = students::>;
```
))

+ You just thought of two more suspects! Make a new variable called `newSuspects` and add it above `suspects`.

```js
const newSuspects = ['Albert Gonzalez', 'Kevin Mitnick'];
```

`concat` the `newSuspects` onto the `suspects` list.
@test('06/06')
@hint('call `suspects.concat()` with `newSuspects`')

@onPageComplete('In the next step, we'll look at using one of the most powerful methods: `reduce`')
