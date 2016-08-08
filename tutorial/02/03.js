describe('03 function compareScore', () => {

  it('doesn\'t return -1 when b\'s score is less than a\'s', () => {
    expect(compareScore({score: 5}, {score: 3})).to.equal(-1);
  });

});
