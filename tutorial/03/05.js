describe('05 function increaseScore', () => {

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
    const test = {
      score: 82,
      grade: 'A',
    };
    expect(increaseScore(test).score).to.equal(94);
  });

  it('should change scores over 95 to 95', () => {
    const test = {
      score: 84,
      grade: 'A',
    };
    expect(increaseScore(test).score).to.equal(95);
  });

});

describe('05 const mySlightlyChanged', () => {

  const mySlightlyChanged = map.__get__('mySlightlyChanged');

  it('should cap scores at 95', () => {
    const scores = mySlightlyChanged.map((x) => x.score);
    expect(Math.max.apply(Math, scores)).to.equal(95);
  });

});
