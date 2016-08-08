describe('05 var decodedName', () => {

  const decodedName = find.__get__('decodedName');

  it('should find 10 unknown students names', () => {
    expect(decodedName).to.equal('!findthebestrevenge!');
  });

});
