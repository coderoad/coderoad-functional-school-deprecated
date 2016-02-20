describe('03 var students', function() {

  it('should flatten the array with `.flatten()`', function() {
    expect(spyFlat).to.have.been.called.twice;
  });

  it('should result in a single array of student data', function() {
    var result = courses.map(function(course) {
      return course.students.map(function(student) {
        return {
          title: course.title,
          instructor: course.instructor,
          name: student.name,
          score: student.score,
          grade: student.grade
        };
      });
    }).flatten();
    expect(students).to.deep.equal(result);
  });
});
