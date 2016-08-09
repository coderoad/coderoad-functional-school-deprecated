describe('03 const myName', () => {

  // __get__ grabs global myName
  const myName = setup.__get__('myName');

  it('should exist', () => {
    expect(myName).to.be.defined;
  });

  it('should be a string', () => {
    expect(myName).to.be.a('string');
  });

  it('should have the correct value', () => {
    const result = 'Ada Lovelace';
    expect(myName).to.deep.equal(result);
  });

});
