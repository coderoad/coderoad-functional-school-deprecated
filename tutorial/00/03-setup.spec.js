describe('03 console.log', function() {

  it('should use `console.log` to log the name', function() {
    expect(spy).to.have.been.called();
  })

  it('should log `myName` to the console', function() {
    expect(spy).to.have.been.called.with('Ada Lovelace');
  });

});
