require('../common/array');
var courses = require('./courses.json');

module.exports = courses.map(function(course) {
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
