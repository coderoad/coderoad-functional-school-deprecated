describe('03 var students', function() {

  it('should have 160 items', function() {
    expect(students).to.have.length(160);
  });

  it('should result in a single array of student data', function() {
    expect(students[0]).to.deep.equal({
      instructor: "Sean Quentin Lewis",
      title: "Relational Databases",
      name: "!f",
      grade: "D",
      score: 61
    });
  });

});
