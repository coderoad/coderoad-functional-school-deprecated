describe('05 var newSuspects', () => {

  const newSuspects = concat.__get__('newSuspects');

  it('should have "Albert Gonzalez" in the list', () => {
    expect(newSuspects).to.contain('Albert Gonzalez');
  });

  it('should have "Kevin Mitnick" in the list', () => {
    expect(newSuspects).to.contain('Kevin Mitnick');
  });

  it('should have only 2 names', () => {
    expect(newSuspects).to.have.length(2);
  });

});

describe('05 var suspectData', () => {

  const suspectData = concat.__get__('suspectData');

  it('should concat `newSuspects` onto `suspects`', () => {
    expect(suspectData).to.have.length(30);
  });

  it('should filter if the `indexOf` the suspects name is greater than -1', () => {
    const kevin = suspectData.filter((x) => {
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
