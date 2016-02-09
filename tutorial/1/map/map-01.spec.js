var expect = require('chai').expect;
// loads file context to allow globals
var context = require('test-context');
var filePath = '../../../../../02-map.js';
context(filePath);

describe('changeGrades', function() {

  it('doesn\'t exist', function() {
    expect(changeGrades).to.not.be.undefined;
  });

  it('isn\'t a function', function() {
    expect(changeGrades).to.be.a('function');
  });

  it('doesn\'t change all grades for a name', function() {
    let changed = changeGrades('Bob');
    let arrayOfGrades = data.filter(function(item) {
      return item.name === 'Bob';
    }).map(function(item) {
      item.grade = 'A';
      return item;
    });
    expect(arrayOfGrades).to.deep.equal(changed);
  });

});
