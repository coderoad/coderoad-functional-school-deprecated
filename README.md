# Functional School

A trip through functional programming in Javascript using common built-in Javascript array methods such as `map` & `reduce`.

By the end, you should have an understanding of how to use array methods to manipulate semi-complex data.

Level: Intermediate
Keywords: javascript, functional
Length: 1-2 hours


<!-- @import('01/filter') -->
<!-- @import('02/sort') -->
<!-- @import('03/map') -->
<!-- @import('04/forEach') -->
<!-- @import('05/find') -->
<!-- @import('06/concat') -->
<!-- @import('07/reduce') -->
<!-- @import('08/challenge-1') -->
<!-- @import('09/challenge-2') -->


## CodeRoad

CodeRoad is an open-sourced interactive tutorial platform for the Atom Editor. Learn more at [CodeRoad.io](http://coderoad.io).


## Setup

* install the tutorial package

    `npm install --save coderoad-functional-school`

* install and run the [atom-coderoad](https://github.com/coderoad/atom-coderoad) plugin


## Outline

##### Start

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
