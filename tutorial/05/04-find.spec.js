describe('04 var unknownStudentNames', function() {

  it('should find 10 unknown students names', function() {
    var names = unknownStudentNames.join('');
    expect(names).to.equal('!findthebestrevenge!');
  });

});
