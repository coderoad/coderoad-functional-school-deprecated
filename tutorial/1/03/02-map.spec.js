var expect = require('chai').expect;
var path = require('path');
var loadJS = require('../../common/loadJS').default;
if (!global.myData) {
  global.myData = JSON.parse(JSON.stringify(require('./myData.json')));
}

describe('var myChanged', function() {
  it('doesn\'t exist', function() {
    expect(myChanged).to.not.be.undefined;
  });

  it('isn\'t an array', function() {
    expect(myChanged).to.be.an('array');
  });

  it('doesn\'t change all D\'s to A\'s', function () {
    function filterD(student) {
      return student.grade === 'D';
    }
    expect(myChanged.filter(filterD)).to.have.length(0);
  });

  it('doesn\'t change all F\'s to A\'s', function () {
    function filterD(student) {
      return student.grade === 'F';
    }
    expect(myChanged.filter(filterD)).to.have.length(0);
  });

});
