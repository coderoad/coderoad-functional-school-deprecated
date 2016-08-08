describe('03 function compareScore', () => {

  it('doesn\'t return 0 when b\'s score equals a\'s', () => {
    expect(compareScore({score: 3}, {score: 3})).to.equal(0);
  });
  
});
