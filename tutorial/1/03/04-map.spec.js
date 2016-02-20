var expect = require('chai').expect;

describe('04 function increaseScore', function() {

  it('doesn\'t exist', function() {
    expect(increaseScore).to.not.be.undefined;
  });

  it('should be a function', function() {
    expect(increaseScore).to.be.a('function');
  });

  it('should take a parameter', function() {
    expect(increaseScore).to.have.length(1);
  });

  it('shouldn\'t change scores under 95', function() {
    var test = {
      score: 82
    };
    expect(increaseScore(test)).to.deep.equal({
      score: 94
    });
  });

  it('should change scores over 95 to 95', function() {
    var test = {
      score: 84
    };
    expect(increaseScore(test)).to.deep.equal({
      score: 95
    });
  });

});

describe('04 var mySlightlyChanged', function() {

  it('should cap scores at 95', function() {
    var scores = mySlightlyChanged.map(function(x) {
      return x.score;
    });
    expect(Math.max.apply(Math, scores)).to.equal(95);
  });

});
