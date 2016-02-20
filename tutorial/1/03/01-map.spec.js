var expect = require('chai').expect;
var loadJS = require('./common/loadJS').default;
if (!global.myData) {
  global.myData = JSON.parse(JSON.stringify(require('./1/03/myData.json')));
}
loadJS('03-map.js')

describe('01 function changeGrades', function() {

  it('doesn\'t exist', function() {
    expect(changeGrades).to.not.be.undefined;
  });

  it('isn\'t a function', function() {
    expect(changeGrades).to.be.a('function');
  });

  it('should take a parameter', function() {
    expect(changeGrades).to.have.length(1);
  });

  it('should try changing `student.grade` first before returning `student`', function () {
    var regex = /return [a-zA-Z]+\.grade/;
    var func = changeGrades.toString();
    expect(func.match(regex)).to.be.null;
  });

  it('should change grades from a D to an A', function() {
    var test = {
      grade: 'D'
    };
    expect(changeGrades(test)).to.deep.equal({
      grade: 'A'
    });
  });

  it('should change grades from a F to an A', function() {
    var test = {
      grade: 'F'
    };
    expect(changeGrades(test)).to.deep.equal({
      grade: 'A'
    });
  });

  it('should change grades from a B to an A', function() {
    var test = {
      grade: 'B'
    };
    expect(changeGrades(test)).to.deep.equal({
      grade: 'A'
    });
  });

});
