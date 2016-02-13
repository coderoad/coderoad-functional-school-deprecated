### Map
Array -> run a function over each item -> Array

```
[1, 2, 3].map(function(num) {
  return num + 1;
});
// [2, 3, 4]
```

Now that we've filtered down our data, let's make some changes. Those D & F's would look a lot better if they suddenly became A's.

+ Make a function `changeGrades` that that takes a name and changes all of that person's grades to an A
@test('1/02/map-01')
@action(open('02-map.js'))
@action(set(
```
var data = [
  { name: "Joe", class: "Computer Science", grade: "C" },
  { name: "Jane", class: "Computer Science", grade: "D" },
  { name: "Mo", class: "Computer Science", grade: "B" },
  { name: "Bob", class: "Computer Science", grade: "F" },
  { name: "Joe", class: "Math", grade: "C" },
  { name: "Jane", class: "Math", grade: "B" },
  { name: "Mo", class: "Math", grade: "D" },
  { name: "Bob", class: "Math", grade: "A" },
  { name: "Joe", class: "Art", grade: "C" },
  { name: "Jane", class: "Art", grade: "F" },
  { name: "Mo", class: "Art", grade: "B" },
  { name: "Bob", class: "Math", grade: "F" }
];
```))
@action(insert(
```
function changeGrades(name) {
    // filter to name
    // map over grades and change them to an A
}

```))

+ Work in Progress. Unfinished.
@test('1/02/map-02')
