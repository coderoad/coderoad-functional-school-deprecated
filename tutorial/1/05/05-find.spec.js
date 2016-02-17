"use strict";
var expect = require('chai').expect;
var path = require('path');
var loadJS = require('../../common/loadJS').default;

if (!global.data) {
  global.data = JSON.parse(JSON.stringify(require('../../data/students2.json')));
}
loadJS('05-find.js');

describe('var decodedName', function() {

  it('should find 10 unknown students names', function() {
    expect(decodedName).to.equal('!findthebestrevenge!');
  });

});
