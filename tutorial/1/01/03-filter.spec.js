"use strict";
var expect = require('chai').expect;
var path = require('path');
var loadJS = require('../../common/loadJS').default;
if (!global.data) {
  global.data = JSON.parse(JSON.stringify(require('../../data/students.json')));
}
loadJS('01-filter.js');

describe('function isGoodGrade', function() {

  it('doesn\'t exist', function() {
    expect(isGoodGrade).to.not.be.undefined;
  });

  it('isn\'t a Function', function() {
    expect(isGoodGrade).to.be.a('function');
  });

  it('doesn\'t have any params', function() {
    expect(isGoodGrade.length).to.equal(1);
  });

  it('doesn\'t return true when an items name matches "Ada Lovelace"', function() {
    var test = [{
      grade: 'A'
    }, {
      grade: 'D'
    }, {
      grade: 'F'
    }, {
      grade: 'B'
    }];
    expect(test.filter(isGoodGrade)).to.deep.equal([{
      grade: 'A'
    }, {
      grade: 'B'
    }]);
  });

});
