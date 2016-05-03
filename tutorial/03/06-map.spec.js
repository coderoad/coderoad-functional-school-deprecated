var expect = require('chai').expect;

describe('06 var scoresAndGrades', function() {

  it('should return an array of scores and grades', function() {
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
