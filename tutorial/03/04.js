describe('04 function increaseScore', () => {

  const increaseScore = map.__get__('increaseScore');

  it('doesn\'t exist', () => {
    expect(increaseScore).to.be.defined;
  });

  it('should be a function', () => {
    expect(increaseScore).to.be.a('function');
  });

  it('should take a parameter', () => {
    expect(increaseScore).to.have.length(1);
  });

  it('should try changing the `score` first before returning the changed object', () => {
    var regex = /return [a-zA-Z]+\.score/;
    var func = increaseScore.toString();
    expect(func.match(regex)).to.be.null;
  });

  it('should increment scores by 12 points', () => {
    var test = {
      score: 50
    };
    expect(increaseScore(test)).to.deep.equal({
      score: 62
    });
  });

});

describe('03 var mySlightlyChanged', () => {

  const mySlightlyChanged = map.__get__('mySlightlyChanged');

  it('doesn\'t exist', () => {
    expect(mySlightlyChanged).to.not.be.undefined;
  });

  it('isn\'t an array', () => {
    expect(mySlightlyChanged).to.be.an('array');
  });

  it('should increment scores by 12', () => {
    var scores = mySlightlyChanged.map(function(x) {
      return x.score;
    });
    expect(Math.min.apply(Math, scores)).to.equal(70);
  });

});
