describe('05 var suspectData', function() {

  it('should filter if the `indexOf` the suspects name is greater than -1', function() {
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
    var suspects = ['Hack Kerr', 'Kevin Mitnick', 'Albert Gonzalez'];
    var suspectResult = result.filter(function(student) {
      return suspects.indexOf(student.name) > -1;
    });
    expect(suspectData).to.deep.equal(suspectResult);
  });

});
