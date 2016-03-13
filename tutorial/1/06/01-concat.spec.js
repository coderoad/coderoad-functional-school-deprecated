'use strict';
var expect = require('chai').expect;
var path = require('path');
var loadJS = require(path.join(process.env.TUTORIAL_DIR, 'loadJS')).default;

if (!global.courses) {
  global.courses = JSON.parse(JSON.stringify(require(path.join(process.env.TUTORIAL_DIR, 'data', 'courses2.json'))));
}

loadJS('06-concat.js');

describe('01 var flattenedArray', function() {

  it('should flatten the array', function () {
    expect(flattenedArray).to.have.length(4);
  });

  it('should flatten the array', function() {
    expect(flattenedArray).to.deep.equal([1, 2, 3, 4]);
  });

});
