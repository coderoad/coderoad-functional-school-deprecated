var expect = require('chai').expect;

// loads file context to allow globals
var context = require('test-context');
var filePath = '../../../../../01-filter.js';
context(filePath);

describe('var myData', function() {

  it('doesn\'t exist', function() {
    expect(myData).to.not.be.undefined;
  });

  it('isn\'t an array', function() {
    expect(myData).to.be.an('array');
  });

  it('doesn\'t have three items', function() {
    expect(myData.length).to.equal(3);
  });

  it('isn\'t the right data for Jane', function() {
    expect(myData).to.deep.equal([
      { name: "Jane", class: "Computer Science", grade: "D" },
      { name: "Jane", class: "Math", grade: "B" },
      { name: "Jane", class: "Art", grade: "F" }
    ]);
  });

});
