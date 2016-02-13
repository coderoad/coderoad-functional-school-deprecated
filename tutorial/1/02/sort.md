### Sort
Array -> sorted Array

Your grades are filtered down to your name and good scores - but wouldn't it be better if your best grades were shown at the top? Besides, your parents rarely read all the way down to the bottom.

We can use the array method `sort` to arrange our data. Let's see how it works.

+ Write a sort condition function called `sortByScore` that can sort your data by score.
@test('1/02/01-sort')
@action(open('02-sort.js'))
@action(set(
```
function sortByScore(a, b) {
  // it should return -1 a's score is bigger than b's

  // it should return 1 if a's score is less than b's

  // it should return 0 if a has the same score as b

}
```))
