describe('04 var suspectData', function() {

  it('should have 10 items', function() {
    expect(suspectData).to.have.length.above(9);
  });

  it('should filter if the `indexOf` the suspects name is greater than -1', function() {
    var hackKerrData = suspectData.filter(function(suspect) {
      return suspect.name === 'Hack Kerr';
    });
    expect(hackKerrData).to.have.length(10);
    expect(hackKerrData[0]).to.deep.equal({
      title: 'Relational Databases',
      instructor: 'Sean Quentin Lewis',
      name: 'Hack Kerr',
      score: 85,
      grade: 'F'
    });
  });
  
});
