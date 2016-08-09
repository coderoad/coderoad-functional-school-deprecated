describe('04 const unknownStudentList', () => {

  const unknownStudentList = find.__get__('unknownStudentList');

  it('should find 10 students', () => {
    expect(unknownStudentList).to.have.length(10);
  });

  it('should find 10 unknown students across classes', () => {
    const names = unknownStudentList.map((student) => {
      return student.name;
    }).join('');
    expect(names).to.equal('!findthebestrevenge!');
  });

});
