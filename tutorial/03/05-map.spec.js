var expect = require('chai').expect;

describe('05 function getGrade', function() {

  it('doesn\'t exist', function() {
    expect(getGrade).to.not.be.undefined;
  });

  it('should be a function', function() {
    expect(getGrade).to.be.a('function');
  });

  it('should take a parameter', function() {
    expect(getGrade).to.have.length(1);
  });


});

describe('05 var myFixed', function() {

  it('doesn\'t exist', function() {
    expect(myFixed).to.not.be.undefined;
  });

  it('isn\'t an array', function() {
    expect(myFixed).to.be.an('array');
  });

  it('doesn\'t have 10 items', function() {
    expect(myFixed).to.have.length(10);
  });

  it('doesn\'t update grades correctly', function() {
    expect(myFixed.map(function(x) {
      return x.grade;
    })).to.deep.equal(['A', 'A', 'C', 'A', 'B', 'C', 'A', 'A', 'A', 'C']);
  });

});
