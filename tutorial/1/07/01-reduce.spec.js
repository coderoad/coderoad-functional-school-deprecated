"use strict";
var expect = require('chai').expect;
var path = require('path');
var loadJS = require(path.join(process.env.TUTORIAL_DIR, 'loadJS')).default;

if (!global.courses) {
  global.courses = JSON.parse(JSON.stringify(require(path.join(process.env.TUTORIAL_DIR, 'data', 'courses2.json'))));
  global.suspectData = JSON.parse(JSON.stringify(require(path.join(process.env.TUTORIAL_DIR, '1', '07', 'suspectData.json'))));
}

loadJS('07-reduce.js');

describe('01 var total', function() {

  it('should add the numbers up', function () {
    expect(total).to.equal(54);
  });

});
