describe('05 const suspectStats', () => {

  it('should map over suspect data to find the score differences', () => {

    const suspectStats = reduce.__get__('suspectStats');

    expect(suspectStats).to.deep.equal([{
      name: 'Albert Gonzalez',
      scores: [35, 37, 73, 74, 94, 67, 39, 70, 56, 52],
      difference: -59
    }, {
      name: 'Hack Kerr',
      scores: [85, 86, 92, 75, 83, 96, 94, 87, 89, 102],
      difference: 233
    }, {
      name: 'Kevin Mitnick',
      scores: [72, 52, 47, 89, 47, 75, 81, 41, 40, 37],
      difference: -75
    }]);
  });

});
