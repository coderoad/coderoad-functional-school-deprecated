describe('05 const suspectData', () => {

  const suspectData = concat.__get__('suspectData');

  it('should have 10 items', () => {
    expect(suspectData).to.have.length.below(31);
  });

  it('should filter if the `indexOf` the suspects name is greater than -1', () => {
    const hackKerrData = suspectData.filter((suspect) => {
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
