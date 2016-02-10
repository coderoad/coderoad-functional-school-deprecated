
var expect = require('chai').expect;
var context = require('test-context');
context('../../../../../01-filter.js');

describe('var myData', function() {

  it('doesn\'t exist', function() {
    expect(myFails).to.not.be.undefined;
  });

  it('isn\'t an array', function() {
    expect(myFails).to.be.an('array');
  });

  it('doesn\'t have exactly two items', function() {
    expect(myFails.length).to.equal(2);
  });

  it('isn\'t the right data for Jane', function() {
    expect(myFails).to.deep.equal([
      { name: "Jane", class: "Computer Science", grade: "D" },
      { name: "Jane", class: "Art", grade: "F" }
    ]);
  });

});
