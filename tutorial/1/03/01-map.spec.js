var expect = require('chai').expect;
var path = require('path');
var loadJS = require(path.join(process.env.TUTORIAL_DIR, 'loadJS')).default;
if (!global.myData) {
  global.myData = JSON.parse(JSON.stringify(require(path.join(process.env.TUTORIAL_DIR, '1', '03', 'myData.json'))));
}
loadJS('03-map.js')

describe('01 function changeGrade', function() {

  it('doesn\'t exist', function() {
    expect(changeGrade).to.not.be.undefined;
  });

  it('isn\'t a function', function() {
    expect(changeGrade).to.be.a('function');
  });

  it('should take a parameter', function() {
    expect(changeGrade).to.have.length(1);
  });

  it('should try changing `student.grade` first before returning `student`', function () {
    var regex = /return [a-zA-Z]+\.grade/;
    var func = changeGrade.toString();
    expect(func.match(regex)).to.be.null;
  });

  it('should change grades from a D to an A', function() {
    var test = {
      grade: 'D'
    };
    expect(changeGrade(test)).to.deep.equal({
      grade: 'A'
    });
  });

  it('should change grades from a F to an A', function() {
    var test = {
      grade: 'F'
    };
    expect(changeGrade(test)).to.deep.equal({
      grade: 'A'
    });
  });

  it('should change grades from a B to an A', function() {
    var test = {
      grade: 'B'
    };
    expect(changeGrade(test)).to.deep.equal({
      grade: 'A'
    });
  });

});
