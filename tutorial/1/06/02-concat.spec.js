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

describe('var doubleArray', function() {

  var spy = chai.spy.on(Array, 'map');
  loadJS('06-concat.js');

  it('should call map twice', function() {
    expect(spy).to.have.been.called.twice;
  });

  it('should create an array of arrays', function() {
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
    });
    expect(doubleArray).to.deep.equal(result);
  });

});
