describe('02 myName', function () {

  it('should exist', function () {
    expect(myName).to.be.defined;
  });

  it('should be a string', function () {
    expect(myName).to.be.a('string');
  });

  it('should have the correct value', function () {
    var result = 'Ada Lovelace';
    expect(myName).to.deep.equal(result);
  });

});
