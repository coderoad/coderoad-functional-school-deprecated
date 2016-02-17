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

describe('var suspectData', function() {

  it('should have 10 items', function() {
    expect(suspectData).to.have.length.above(9);
  })

  it('should filter if the `indexOf` the suspects name is greater than -1', function() {
    if (suspectData.length === 10) {
      suspectData.forEach(function(suspect) {
        expect(suspect.name).to.equal('Hack Kerr');
      });
    }
  });

});
