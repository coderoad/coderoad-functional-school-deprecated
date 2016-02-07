var expect = require('chai').expect;

// use to ensure a specific method has been called
var spies = require('chai-spies');
chai.use(spies);

// loads file context to allow globals
var context = require('test-context');
var filePath = path.join('..', '..', '..', 'filter.js');
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

  it('should use the array filter method', function() {
    var spy = chai.spy.on(data, 'filter');
    expect(spy).to.be(true);
  });

  it('isn\'t the right data for Jane', function() {
    expect(myData).to.equal([
      { name: "Jane", class: "Computer Science", grade: "D" },
      { name: "Jane", class: "Math", grade: "B" },
      { name: "Jane", class: "Art", grade: "A" }
    ]);
  });

});
