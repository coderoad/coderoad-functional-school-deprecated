describe('07 var scoresAndGrades', () => {

  const scoresAndGrades = map.__get__('scoresAndGrades');

  it('should return an array of scores and grades', () => {
    expect(scoresAndGrades[0]).to.deep.equal({
      grade: "A",
      score: 95
    });
    expect(scoresAndGrades[9]).to.deep.equal({
      grade: "C",
      score: 77
    });
  });
});
