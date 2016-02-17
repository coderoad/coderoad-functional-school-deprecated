"use strict";
var expect = require('chai').expect;
var path = require('path');
var loadJS = require('../../common/loadJS').default;

if (!global.data) {
  global.data = JSON.parse(JSON.stringify(require('../../data/students2.json')));
}
loadJS('05-find.js');

describe('var unknownStudent', function() {

  var otherStudents = ["Albert Gonzalez", "Brian Kernaghan", "Danielle Bunten Berry", "Donald Knuth", "Grace Hopper", "Hack Kerr", "James Gosling", "Ken Thompson", "Kevin Mitnick", "Linus Torvalds", "Niklaus Wirth", "Rebecca Heineman", "Tim Berners-Lee", "Xiao Tian", "Ying Cracker"];

  it('should filter to "Web Security" class data', function () {
    expect(unknownStudent.name).to.equal('he');
  });

});
