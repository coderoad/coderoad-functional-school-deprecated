### reduce
Array -> transform into anything

```js
function add(prev, curr) {
    console.log(`add(${prev}, ${curr}) -> ${prev + curr}`)
    return prev + curr;
}

[1, 5, 10].reduce(add, 100); // initial value

// add(100, 1) -> 101
// add(101, 5) -> 106
// add(106, 10) -> 116
//> 116
```



+ Use `reduce` to sum the numbers in the `practice` array
@test('1/07/01-reduce')
@action(open('07-reduce.js'))
@action(set(
```
var practice = [1, 1, 2, 3, 5, 8, 13, 21];

// total the numbers using a reduce function
// hint: start at 0
var total = practice.reduce();
```
))

+ `map` over each course and use `reduce` to calculate the class averages for each class. Set `averages` to the resulting array of all class averages.
@test('1/07/02-reduce')
@action(insert(
```
// Remember, an average is the sum of all student scores divided by the number of students
// set the result to an array, for example: [50, 65, 75, 85, ...];
var averages = courses.reduce();
```
))

+ `reduce` to an array of suspect scores
@test('1/07/03-reduce')
@action(insert(
```

// [{ name: 'suspectName', scores: [ 50, 65, 75, 85...] }, ... ]
var suspectScores = courses.reduce();
```
))

+ `map` over suspect data to find the `"difference"` from subtracting the students score from the average score. Add this to `suspectScores` using the key `difference`. The resulting array should look like this:
```js
[{
  name: 'suspectName',
  scores: [50, 65, 75, 85...],
  difference: 15
}]
```
@test('1/07/04-reduce')


+ `reduce` down to any likely suspect names by filtering with the `isCheater` function
@test('1/07/05-reduce')
@action(insert(
```

function isCheater(suspect) {
  return suspect.difference > 200;
}

// reduce down to a string of likely suspects
var likelySuspect = suspectScores.reduce().join(', ');
console.log(likelySuspect);
```
))
