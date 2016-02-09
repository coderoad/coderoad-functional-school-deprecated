### Filter
We'll start by looking at the `filter` method.

Last semester's grades just came in, but there's just too much data.

Use the `filter` method to shorten the data to only what you need.

```
['a', 'b', 'c'].filter(function(item) {
  return item === 'a';
});
// ['a']
```

+ Set `var myData` equal to `filter`ed down data with your name: "Jane".
@test('1/filter/filter-01')
@action(open('01-filter.js'))
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
var myData = data.filter(function(item) {
    // return true to add the item to the list
});

```))

+ Set `var myFails` to the result of `filter`ing down your data to only your failing grades ("D" or "F").

@test('1/filter/filter-02')
@action(insert(
```
var myFails = myData.filter(function() {
    // add filter here, don't forget the parameter
});

```))
