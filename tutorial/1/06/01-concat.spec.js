'use strict';
var chai = require('chai');
var expect = chai.expect;
var loadJS = require('./common/loadJS').default;

if (!global.courses) {
  global.courses = JSON.parse(JSON.stringify(require('./data/courses2.json')));
}

loadJS('06-concat.js');

describe('01 var flattenedArray', function() {

  it('should flatten the array', function() {
    expect(flattenedArray).to.have.length(4);
    expect(flattenedArray).to.deep.equal([1, 2, 3, 4]);
  });

  // it('should use the `flatten` Array method', function() {
  //   expect(spy).to.have.been.called.with([[1, 2], [3, 4]]);
  // });

});
