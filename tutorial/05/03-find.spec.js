describe('03 var unknownStudentList', function() {

  it('should find 10 students', function() {
    expect(unknownStudentList).to.have.length(10);
  });

  it('should find 10 unknown students across classes', function() {
    var names = unknownStudentList.map(function(student) {
      return student.name;
    }).join('');
    expect(names).to.equal('!findthebestrevenge!');
  });

});
