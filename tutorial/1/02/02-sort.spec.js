describe('02 function compareScore', function () {
  it('doesn\'t return -1 when b\'s score is less than a\'s', function() {
    expect(compareScore({score: 5}, {score: 3})).to.equal(-1);
  });
});
