### Sort
Array -> sorted Array

Your grades are filtered down to your name and good scores - but wouldn't it be better if your best grades were displayed first, at the top? Besides, your parents rarely read anything through.

You can use the array method `sort` to arrange your data. Let's see how it works.

```js
['c', 'b', 'a'].sort();
//> ['a', 'b', 'c']

[3, 2, 1].sort();
//> [1, 2, 3]
```

But what about sorting scores inside of an object?

```js
[{a: 3}, {a: 1}, {a: 2}].sort();
//> [{a: 3}, {a: 1}, {a: 2}]
```

That didn't work. Instead, you can write a custom `compareScore` function.

A sort function takes two params, and compares the first to the second. It should return values saying where the second value should go in the array:

  * -1 : sort to a lower index (front)
  * 1 : sort to a higher index (back)
  * 0 : stay the same

Alright, now time to sort your best grades to the top.

+ Write a sort condition function called `compareScore` that can sort your data by score.
@test('1/02/01-sort')
@action(open('02-sort.js'))
@action(set(
```
function compareScore(a, b) {
  switch (true) {
    case b < a:
    // it should return 1 if b's score is less than a's
      return;
    case b > a:
    // it should return -1 if b's score is more than a's
      return;
    default:
    // it should return 0 if b has the same score as a
      return;
  }
}
```
))

+ Set `mySortedGrades` to `myBest` data sorted by `compareScore`
@test('1/02/01-sort')
@action(insert(
```
// use the compare function to sort myBest
var mySorted = myBest
```
))
