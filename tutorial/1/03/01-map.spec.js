var expect = require('chai').expect;
var path = require('path');
var loadJS = require('../../common/loadJS').default;
if (!global.myData) {
  global.myData = JSON.parse(JSON.stringify(require('./myData.json')));
}

describe('function changeGrades', function() {

  it('doesn\'t exist', function() {
    expect(changeGrades).to.not.be.undefined;
  });

  it('isn\'t a function', function() {
    expect(changeGrades).to.be.a('function');
  });

  it('shouldn\'t change other grades to an A', function() {
    var test = {
      grade: 'B'
    };
    expect(changeGrades(test)).to.deep.equal(test);
  })

  it('doesn\'t change grades from a D to an A', function() {
    var test = {
      grade: 'D'
    };
    expect(arrayOfGrades).to.deep.equal({
      grade: 'A'
    });
  });

  it('doesn\'t change grades from a F to an A', function() {
    var test = {
      grade: 'F'
    };
    expect(arrayOfGrades).to.deep.equal({
      grade: 'A'
    });
  });

});
