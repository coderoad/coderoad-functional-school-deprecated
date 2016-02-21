"use strict";
var expect = require('chai').expect;
var loadJS = require('./common/loadJS').default;

if (!global.courses) {
  global.courses = JSON.parse(JSON.stringify(require('./data/courses2.json')));
  global.suspectData = JSON.parse(JSON.stringify(require('./1/07/suspectData.json')));
}

loadJS('07-reduce.js');

describe('01 var total', function() {

  it('should add the numbers up', function () {
    expect(total).to.equal(54);
  });

});
