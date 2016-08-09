## reduce
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

const initialValue = 100;
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
@test('07/01')
@action(open('07-reduce.js'))
@action(set(
```
import courses from './data/courses2';
// Array.reduce(fn(a, b), initialValue)

const practice = [1, 1, 2, 3, 5, 8, 13, 21];

function add(a, b) {
  return a + b;
}

// total the numbers using a reduce function
const total = practice.reduce(::>);
```
))
@hint('with only numbers, the initialValue defaults to 0')
@hint('just call `reduce` with `add`')

+ Not all reduce functions are so easy. `reduce` is a little more difficult to master.

`map` over each course and use `reduce` to calculate the class averages for each class. Set `averages` to the resulting array of all class averages.
@test('07/02')
@action(insert(
```

const averages = courses.map(function(course) {
  const sum = course.students.reduce(function(total, student) {
    ::>

  });
  return Math.round(sum / course.students.length, 0);
});
```
))
@hint('set the initialValue to 0')
@hint('like this: `reduce(function () {}, 0)`')
@hint('return the sum of `student.score` and `total`')

+ load suspectData
@test('07/03')
@action(open('data/suspectData.js'))
@action(set(
```
const suspectData = [{
  title:"Relational Databases",
  instructor:"Sean Quentin Lewis",
  name:"Albert Gonzalez",
  score:35,
  grade:"F"
}, {
  title:"Relational Databases",
  instructor:"Sean Quentin Lewis",
  name:"Hack Kerr",
  score:85,
  grade:"F"
}, {
  title:"Relational Databases",
  instructor:"Sean Quentin Lewis",
  name:"Kevin Mitnick",
  score:72,
  grade:"C"
}, {
  title:"3D Computer Graphics",
  instructor:"G.L. Webb",
  name:"Albert Gonzalez",
  score:37,
  grade:"F"
}, {
  title:"3D Computer Graphics",
  instructor:"G.L. Webb",
  name:"Hack Kerr",
  score:86,
  grade:"F"
}, {
  title:"3D Computer Graphics",
  instructor:"G.L. Webb",
  name:"Kevin Mitnick",
  score:52,
  grade:"F"
}, {
  title:"Front End Web Development",
  instructor:"Moe Zaick",
  name:"Albert Gonzalez",
  score:73,
  grade:"C"
}, {
  title:"Front End Web Development",
  instructor:"Moe Zaick",
  name:"Hack Kerr",
  score:92,
  grade:"C"
}, {
  title:"Front End Web Development",
  instructor:"Moe Zaick",
  name:"Kevin Mitnick",
  score:47,
  grade:"F"
}, {
  title:"Web Security",
  instructor:"Sue Denim",
  name:"Albert Gonzalez",
  score:74,
  grade:"C"
}, {
  title:"Web Security",
  instructor:"Sue Denim",
  name:"Hack Kerr",
  score:75,
  grade:"F"
}, {
  title:"Web Security",
  instructor:"Sue Denim",
  name:"Kevin Mitnick",
  score:89,
  grade:"B"
}, {
  title:"Javascript Fundamentals",
  instructor:"Jay Kweerie",
  name:"Albert Gonzalez",
  score:94,
  grade:"A"
}, {
  title:"Javascript Fundamentals",
  instructor:"Jay Kweerie",
  name:"Hack Kerr",
  score:83,
  grade:"F"
}, {
  title:"Javascript Fundamentals",
  instructor:"Jay Kweerie",
  name:"Kevin Mitnick",
  score:47,
  grade:"F"
},{
  title:"Data Science",
  instructor:"Ford Fulkerson",
  name:"Albert Gonzalez",
  score:67,
  grade:"D"
}, {
  title:"Data Science",
  instructor:"Ford Fulkerson",
  name:"Hack Kerr",
  score:96,
  grade:"A"
}, {
  title:"Data Science",
  instructor:"Ford Fulkerson",
  name:"Kevin Mitnick",
  score:75,
  grade:"C"
}, {
  title:"Algorithm Design",
  instructor:"Gale Shapely",
  name:"Albert Gonzalez",
  score:39,
  grade:"F"
}, {
  title:"Algorithm Design",
  instructor:"Gale Shapely",
  name:"Hack Kerr",
  score:94,
  grade:"A"
}, {
  title:"Algorithm Design",
  instructor:"Gale Shapely",
  name:"Kevin Mitnick",
  score:81,
  grade:"B"
}, {
  title:"Data Abstraction",
  instructor:"Aster Ricks",
  name:"Albert Gonzalez",
  score:70,
  grade:"C"
}, {
  title:"Data Abstraction",
  instructor:"Aster Ricks",
  name:"Hack Kerr",
  score:87,
  grade:"F"
}, {
  title:"Data Abstraction",
  instructor:"Aster Ricks",
  name:"Kevin Mitnick",
  score:41,
  grade:"F"
}, {
  title:"Data Structures",
  instructor:"Brodal Q.",
  name:"Albert Gonzalez",
  score:56,
  grade:"F"
},{
  title:"Data Structures",
  instructor:"Brodal Q.",
  name:"Hack Kerr",
  score:89,
  grade:"B"
},{
  title:"Data Structures",
  instructor:"Brodal Q.",
  name:"Kevin Mitnick",
  score:40,
  grade:"F"
}, {
  title:"Networks",
  instructor:"Van Emde Boas",
  name:"Albert Gonzalez",
  score:52,
  grade:"F"
}, {
  title:"Networks",
  instructor:"Van Emde Boas",
  name:"Hack Kerr",
  score:102,
  grade:"F"
}, {
  title:"Networks",
  instructor:"Van Emde Boas",
  name:"Kevin Mitnick",
  score:37,
  grade:"F"
}];
export default suspectData;
```  
))


+ `reduce` to an array of suspect scores from the `suspectData` we collected previously.
@test('07/04')
@action(open('07-reduce.js'))
@action(insert(
```

// [{ name: 'suspectName', scores: [ 50, 65, 75, 85...] } ...]
const suspectScores = suspectData.reduce(function(total, next) {
  // see if suspect name has a list yet
  const index = total.findIndex(function(suspect) {
    return suspect.name === next.name;
  });
  if (index < 0) {
    total.push({
      ::>

    });
  } else {
    // push the next score onto the suspects scores
    total[index].scores.push();
  }
  return total;
}, []);

```
))
@hint('if the name is new, push an object with name & scores: `{ name: '', scores: [42]}`')
@hint('match for `next.name` & `next.score`')
@hint('you can concat the scores onto an array: `[].concat(next.score)`')
@hint('if the name is already in the list, just add the `next.score`')

+ `map` over suspect data to find the `"difference"` from subtracting the students score from the average score. Add this to `suspectScores` using the key `difference`. The resulting array should look like this:
```js
[{
  name: 'suspectName',
  scores: [50, 65, 75 ...],
  difference: 15
}]
```
@test('07/05')
@action(insert(
```

const suspectStats = suspectScores.map(function(suspect) {
    // calculate the total difference in scores from the averages
    const difference = suspect.scores.reduce(::>);

    return {
      name: suspect.name,
      scores: suspect.scores,
      difference: difference
    };
});
```  
))
@hint('You may want to use a second param: `index`')
@hint('Compare the `suspect.scores[index]` with the `averages[index]`')
@hint('To get a sum, start your `reduce` function at 0')


+ `reduce` down to likely suspect names by filtering with the `isCheater` function.

This could be done with a `filter` & `map`, but it is simpler to just use one `reduce`.
@test('07/06')
@action(insert(
```

function isCheater(suspect) {
  return suspect.difference > 200;
}

// reduce down to a string of likely suspects
const likelySuspects = suspectStats.reduce(function(::>) {}, []);
```
))
@hint('use `.join(', ')`')

+ It looks like we have a likely suspect.
@test('07/07')
@action(insert(
```
console.log(likelySuspects);
```  
))
