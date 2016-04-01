'use strict';
var expect = require('chai').expect;

// load('data/courses2.json', true)
// load('06-concat.js');

describe('01 var flattenedArray', function() {

  it('should flatten the array', function () {
    expect(flattenedArray).to.have.length(4);
  });

  it('should flatten the array', function() {
    expect(flattenedArray).to.deep.equal([1, 2, 3, 4]);
  });

});
