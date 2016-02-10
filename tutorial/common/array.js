Array.prototype.concatAll = function() {
  var results = [];
  this.forEach(function(subArray) {
    subArray.forEach(function(item) {
      results.push(item);
    });
  });
  return results;
};

// Array.prototype.flatten = function() {
//   return this.reduce(function(a, b) {
//     if (Array.isArray(a)) {
//       return a.concat(b);
//     } else {
//       a.push(b);
//     }
//   });
// };
