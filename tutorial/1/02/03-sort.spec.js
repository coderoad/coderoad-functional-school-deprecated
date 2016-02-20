describe('03 function compareScore', function() {
  it('doesn\'t return 0 when b\'s score equals a\'s', function() {
    expect(compareScore({score: 3}, {score: 3})).to.equal(0);
  });
});
