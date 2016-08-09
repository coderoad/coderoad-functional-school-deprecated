describe('04 const suspectScores', () => {

  it('should reduce to an array of suspect scores', () => {

    const suspectScores = reduce.__get__('suspectScores');

    expect(suspectScores).to.deep.equal([{
      name: 'Albert Gonzalez',
      scores: [35, 37, 73, 74, 94, 67, 39, 70, 56, 52]
    }, {
      name: 'Hack Kerr',
      scores: [85, 86, 92, 75, 83, 96, 94, 87, 89, 102]
    }, {
      name: 'Kevin Mitnick',
      scores: [72, 52, 47, 89, 47, 75, 81, 41, 40, 37]
    }]);
  });

});
