describe('03 var students', () => {

  const students = concat.__get__('students');

  it('should have 160 items', () => {
    expect(students).to.have.length(160);
  });

  it('should result in a single array of student data', () => {
    expect(students[0]).to.deep.equal({
      instructor: "Sean Quentin Lewis",
      title: "Relational Databases",
      name: "!f",
      grade: "D",
      score: 61
    });
  });

});
