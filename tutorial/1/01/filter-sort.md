### Filter & Sort
We'll start by looking at the `filter` and `sort` methods.

Last semester's grades just came in, but there's just too much data.

Use the `filter` method to shorten the data to only what you need.

```
['a', 'b', 'c'].filter(function(item) {
  return item === 'a';
});
// ['a']
```

+ Set `var myData` equal to `filter`ed down data with your name: "Jane".
@test('1/01/filter-01')
@action(open('01-filter.js'))
@action(set(
```
var studentData = require('./data/student').data;
```))
@action(insert(
```
var myData = data.filter(function(item) {
    // return true to add the item to the list
});

```))

+ Set `var myFails` to the result of `filter`ing down your data to only your failing grades ("D" or "F").

@test('1/01/filter-02')
@action(insert(
```
var myFails = myData.filter(function() {
    // add filter here, don't forget the parameter
});

```))
