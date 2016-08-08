describe('04 function increaseScore', () => {

  const increaseScore = map.__get__('increaseScore');

  it('doesn\'t exist', () => {
    expect(increaseScore).to.not.be.undefined;
  });

  it('should be a function', () => {
    expect(increaseScore).to.be.a('function');
  });

  it('should take a parameter', () => {
    expect(increaseScore).to.have.length(1);
  });

  it('shouldn\'t change scores under 95', () => {
    var test = {
      score: 82
    };
    expect(increaseScore(test)).to.deep.equal({
      score: 94
    });
  });

  it('should change scores over 95 to 95', () => {
    var test = {
      score: 84
    };
    expect(increaseScore(test)).to.deep.equal({
      score: 95
    });
  });

});

describe('04 var mySlightlyChanged', () => {

  const mySlightlyChanged = map.__get__('mySlightlyChanged');

  it('should cap scores at 95', () => {
    var scores = mySlightlyChanged.map(function(x) {
      return x.score;
    });
    expect(Math.max.apply(Math, scores)).to.equal(95);
  });

});
