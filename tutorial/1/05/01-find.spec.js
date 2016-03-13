'use strict';
var expect = require('chai').expect;
var spies = require('chai-spies');
var path = require('path');
var loadJS = require(path.join(process.env.TUTORIAL_DIR, 'loadJS')).default;

if (!global.students) {
  global.students = JSON.parse(JSON.stringify(require(path.join(process.env.TUTORIAL_DIR, 'data', 'students2.json'))));
}
loadJS('05-find.js');

describe('01 var myClass', function() {

  it('should filter to "Web Security" class data', function () {
    var result = global.students.filter(function (course) {
      return course.title === 'Web Security';
    });
    expect(myClass).to.deep.equal(result);
  });

});
