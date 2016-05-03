describe('05 var newSuspects', function() {

  it('should have "Albert Gonzalez" in the list', function() {
    expect(newSuspects).to.contain('Albert Gonzalez');
  });

  it('should have "Kevin Mitnick" in the list', function() {
    expect(newSuspects).to.contain('Kevin Mitnick');
  });

  it('should have only 2 names', function() {
    expect(newSuspects).to.have.length(2);
  });

});

describe('05 var suspectData', function() {

  it('should concat `newSuspects` onto `suspects`', function() {
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
