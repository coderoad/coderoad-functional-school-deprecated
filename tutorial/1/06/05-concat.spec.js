"use strict";
var path = require('path');
var chai = require('chai');
var spies = require('chai-spies');
var expect = chai.expect;
chai.use(spies);
var loadJS = require('../../common/loadJS').default;

if (!global.courses) {
  global.courses = JSON.parse(JSON.stringify(require('../../data/courses2.json')));
}

describe('var suspectData', function() {

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
