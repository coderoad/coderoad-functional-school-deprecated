### Map
Array -> run a function over each item -> Array

You've filtered and sorted our data, but wouldn't it be better if you could change your grades? You can use the array method `map` to run a function that returns changes to your data.

```
function addOne(num) {
  return num + 1;
}

function addTwo(num) {
  return num + 2;
}

[1, 2, 3].map(addOne);
//> [2, 3, 4]

[1, 2, 3].map(addOne).map(addTwo);
//> [4, 5, 6]
```

Those D & F's would look a lot better if they suddenly became A's. Let's go back before we filtered out the bad grades.

+ Make a function `changeGrades` that takes student data and changes the grade to "A" if it is a "D" or "F".
@test('1/03/map-01')
@action(open('03-map.js'))
@action(set(
```
  myGoodGrades = myData.filter() // TODO
```))
@action(insert(
```
myData.

function changeGrades(name) {
    // filter to name
    // map over grades and change them to an A
}

```))

+ Work in Progress. Unfinished.
@test('1/03/map-02')
