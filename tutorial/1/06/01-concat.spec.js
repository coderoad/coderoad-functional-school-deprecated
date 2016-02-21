'use strict';
var expect = require('chai').expect;
var loadJS = require('./common/loadJS').default;

if (!global.courses) {
  global.courses = JSON.parse(JSON.stringify(require('./data/courses2.json')));
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
