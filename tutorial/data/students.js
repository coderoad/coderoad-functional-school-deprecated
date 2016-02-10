require('../common/array');

module.exports = function(courses) {
  return courses.map(function(course) {
    return course.students.map(function(student) {
      return {
        course: course.course,
        instructor: course.instructor,
        name: student.name,
        score: student.score,
        grade: student.grade
      };
    })
  }).concatAll();
}
