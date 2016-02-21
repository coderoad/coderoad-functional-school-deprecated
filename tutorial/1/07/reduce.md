### reduce
Array -> anything

We know our likely suspect is also in the school computer system. Perhaps our suspect also changed his grades.

You can't be sure who is a cheater, but you can assume if the grades are well above the average, the person is likely to be the culprit. For this, we'll have to do some basic statistical calculations. We'll need a new tool for transforming arrays into different data representations.

`map` has a major limitation: it will always output the same number of elements as the input array.

When you want to transform data into something different, you'll likely want to use `reduce`.

Reduce requires two parameters:

  * the running total (set by an initialValue)
  * the next value in the array

```js
function add(total, next) {
    console.log(`add(${total}, ${next}) -> ${total + next}`)
    return total + next
}

var initialValue = 100;
[1, 5, 10].reduce(add, initialValue); // initial value

// add(100, 1) -> 101
// add(101, 5) -> 106
// add(106, 10) -> 116
//> 116
```

Notice in the example we input an array of 3 items and output a single number. The data has been transformed.

It takes a while to wrap your head around `reduce`, but once you do, you'll see it's usefulness everywhere.

You may have noticed we've already used `reduce` to `flatten` our arrays.

```js
Array.prototype.flatten = function() {
  return this.reduce(function(a, b) {
    return a.concat(b);
  }, []);
};
```

With `flatten`, the initialValue was set to an empty array which each value was `concat` onto.

Do some practice with `reduce`, before you use it to narrow down a cheating suspect.


+ Use `reduce` to sum the numbers in the `practice` array
@test('1/07/01-reduce')
@action(open('07-reduce.js'))
@action(set(
```
var practice = [1, 1, 2, 3, 5, 8, 13, 21];

function add(a, b) {
  return a + b;
}

// total the numbers using a reduce function
// initialValue defaults to 0
var total = practice.reduce();
```
))

+ Not all reduce functions are so easy. `reduce` is a little more difficult to master.

`map` over each course and use `reduce` to calculate the class averages for each class. Set `averages` to the resulting array of all class averages.
@test('1/07/02-reduce')
@action(insert(
```

var averages = courses.map(function(course) {
  var sum = course.students.reduce(function(total, student) {
    // calculate score totals here

    // set initialValue to 0
  });
  return Math.round(sum / course.students.length, 0);
});
```
))

+ `reduce` to an array of suspect scores from the `suspectData` we collected previously.
@test('1/07/03-reduce')
@action(insert(
```

// [{ name: 'suspectName', scores: [ 50, 65, 75, 85...] } ...]
var suspectScores = suspectData.reduce(function(total, next) {
  // see if suspect name has a list yet
  var index = total.findIndex(function(suspect) {
    return suspect.name === next.name;
  });
  if (index < 0) {
    total.push({
        // add a new {name: '', scores: [72]} object


    });
  } else {
    // push the next score onto the suspects scores
    total[index].scores.push();
  }
  return total;
}, []);

```
))

+ `map` over suspect data to find the `"difference"` from subtracting the students score from the average score. Add this to `suspectScores` using the key `difference`. The resulting array should look like this:
```js
[{
  name: 'suspectName',
  scores: [50, 65, 75 ...],
  difference: 15
}]
```
@test('1/07/04-reduce')
@action(insert(
```

var suspectStats = suspectScores.map(function(suspect) {
    // calculate the total difference in scores from the averages
    // you may want to third reduce param: index
    var difference = suspect.scores.reduce();

    return {
      name: suspect.name,
      scores: suspect.scores,
      difference: difference
    };
});
```  
))


+ `reduce` down to likely suspect names by filtering with the `isCheater` function.

This could be done with a `filter` & `map`, but it is simpler to just use one `reduce`.
@test('1/07/05-reduce')
@action(insert(
```

function isCheater(suspect) {
  return suspect.difference > 200;
}

// reduce down to a string of likely suspects
var likelySuspects = suspectStats.reduce(function() {}, []).join(', ');
```
))

+ It looks like we have a likely suspect.
@test('1/07/06-reduce')
@action(insert(
```
console.log(likelySuspects);
```  
))
