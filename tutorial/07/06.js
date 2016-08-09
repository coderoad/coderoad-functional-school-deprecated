describe('06 const likelySuspects', () => {

  const likelySuspects = reduce.__get__('likelySuspects');

  it('should reduce down to a suspect name', () => {
    expect(likelySuspects).to.equal('Hack Kerr');
  });

});
