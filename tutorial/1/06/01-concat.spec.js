'use strict';
var path = require('path');
var chai = require('chai');
var spies = require('chai-spies');
var expect = chai.expect;
chai.use(spies);
var loadJS = require('common/loadJS').default;

if (!global.courses) {
  global.courses = JSON.parse(JSON.stringify(require('data/courses2.json')));
}

var spyFlat = chai.spy.on(Array, 'flatten');
var spyMap = chai.spy.on(Array, 'map');
loadJS('06-concat.js');

describe('01 var flattenedArray', function() {

  it('should flatten the array', function() {
    expect(flattenedArray).to.deep.equal([1, 2, 3, 4]);
  });

  it('should use the `flatten` Array method', function() {
    expect(spyFlat).to.have.been.called();
  });

});
