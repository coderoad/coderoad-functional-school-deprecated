describe('04 console.log', () => {

  it('should use `console.log` to log the name', () => {
    expect(spy).to.have.been.called();
  })

  it('should log `myName` to the console', () => {
    expect(spy).to.have.been.called.with('Ada Lovelace');
  });

});
