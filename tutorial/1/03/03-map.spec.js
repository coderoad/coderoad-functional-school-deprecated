var expect = require('chai').expect;

describe('03 function increaseScores', function() {

  it('doesn\'t exist', function() {
    expect(increaseScores).to.not.be.undefined;
  });

  it('should be a function', function() {
    expect(increaseScores).to.be.a('function');
  });

  it('should take a parameter', function() {
    expect(increaseScores).to.have.length(1);
  });

  it('should try changing the `score` first before returning the changed object', function() {
    var regex = /return [a-zA-Z]+\.score/;
    var func = increaseScores.toString();
    expect(func.match(regex)).to.be.null;
  });

  it('should increment scores by 12 points', function() {
    var test = {
      score: 50
    };
    expect(increaseScores(test)).to.deep.equal({
      score: 62
    });
  });

});

describe('03 var mySlightlyChanged', function() {

  it('doesn\'t exist', function() {
    expect(mySlightlyChanged).to.not.be.undefined;
  });

  it('isn\'t an array', function() {
    expect(mySlightlyChanged).to.be.an('array');
  });

  it('should increment scores by 12', function() {
    expect(mySlightlyChanged
      .map(function(x) {
        return x.score;
      })).to.deep.equal([103, 100, 73, 93, 85, 70, 105, 94, 100, 77]);
  });

});
