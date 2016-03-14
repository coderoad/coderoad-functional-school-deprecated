'use strict';
var expect = require('chai').expect;
var spies = require('chai-spies');

loadGlobal('students', 'data/students2.json');
loadEditor('05-find.js');

describe('01 var myClass', function() {

  it('should filter to "Web Security" class data', function () {
    var result = global.students.filter(function (course) {
      return course.title === 'Web Security';
    });
    expect(myClass).to.deep.equal(result);
  });

});
