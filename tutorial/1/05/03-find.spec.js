"use strict";
var expect = require('chai').expect;
var path = require('path');
var loadJS = require('../../common/loadJS').default;

if (!global.data) {
  global.data = JSON.parse(JSON.stringify(require('../../data/students2.json')));
}
loadJS('05-find.js');

describe('var unknownStudentList', function() {

  it('should find 10 students', function() {
    expect(unknownStudentList).to.have.length(10);
  });

  it('should find 10 unknown students across classes', function() {
    let names = unknownStudentList.map(function(student) {
      return student.name;
    }).join('');
    expect(names).to.equal('!findthebestrevenge!');
  });

});
