var courses = require('./courses2.json');
require('../common/array');

module.exports = getStudentsInCourses();

function getStudentsInCourses() {
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
