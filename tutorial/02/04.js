describe('04 var mySorted', () => {

  const mySorted = sort.__get__('mySorted');

  it('doesn\'t exist', () => {
    expect(mySorted).to.not.be.undefined;
  });

  it('doesn\'t output an array', () => {
    expect(mySorted).to.be.an('array');
  });

  it('doesn\'t output exactly seven items', () => {
    expect(mySorted).to.have.length(7);
  });

  it('isn\'t the right sorted data', () => {
    expect(mySorted[0].score).to.equal(93);
    expect(mySorted[6].score).to.equal(73);
  });

});
