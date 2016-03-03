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

First you'll need to write a sort condition function called `compareScore`.

+ `compareScore` should return 1 if the first score is less than the second
@test('1/02/01-sort')
@action(open('02-sort.js'))
@action(set(
```
function compareScore(a, b) {
  switch (true) {
    case b.score > a.score:
      // it should return 1 if b's score is more than a's
      return
    case 'set condition here':
      // it should return -1 if b's score is less than a's

    default:
      // it should return 0 if b and a have the same score

  }
}
```
))
+ `compareScore` should return -1 if the first score is more than the second
@test('1/02/02-sort')
@hint('set the second case to `b.score < a.score`')

+ `compareScore` should return 0 if the first score is the same as the second
@test('1/02/03-sort')
@hint('no case is necessary, use the `default` case')

+ Set `mySorted` to the result of `myBest` sorted by `compareScore`
@test('1/02/04-sort')
@action(insert(
```
// use the compare function to sort myBest
var mySorted = myBest
```
))
@hint('try using `myBest.sort()`')

@onPageComplete('In the next step we'll look at changing data with `map`')
