describe('05 var suspectData', function() {

  it('should have 30 items', function() {
    expect(suspectData).to.have.length(30);
  });

  it('should filter if the `indexOf` the suspects name is greater than -1', function() {
    var kevin = suspectData.filter(function(x) {
      return x.name === 'Kevin Mitnick';
    });
    expect(kevin).to.have.length(10);
    expect(kevin[0]).to.deep.equal({
      grade: 'C',
      instructor: 'Sean Quentin Lewis',
      name: 'Kevin Mitnick',
      score: 72,
      title: 'Relational Databases'
    });
  });
  
});
