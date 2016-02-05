### Filter
Last semester's grades just came in, but there's just too much data.

Use the `filter` method to shorten the data to only what you need.

```
['a', 'b', 'c'].filter(function(item) {
  return item === 'a';
});
// ['a']
```

+ Set `var myData` equal to `filter`ed down data with your name: "Jane".
@test('filter-01')
@action(open('filter.js'))
@action(insert(
  ```
  let data = [
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
  { name: "Bob", class: "Math", grade: "F" },
  ]
```
))

+ Set `var myFails` to `filter`ed down data with failing grades ("D" or "F").
@test('filter-02')
