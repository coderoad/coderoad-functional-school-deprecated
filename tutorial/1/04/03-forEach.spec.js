"use strict";
var chai = require('chai');
var spies = require('chai-spies');
var expect = chai.expect;
chai.use(spies);
var path = require('path');

if (!global.myFixed) {
  global.myFixed = JSON.parse(JSON.stringify(require('./myFixed.json')));
}

var loadJS = require('../../common/loadJS').default;

describe('console.log', function() {

  it('should begin with an index', function () {
    var spy = chai.spy.on(console, 'log');

    loadJS('04-forEach.js');
    expect(spy).to.have.been.called.with('1/10  A  95  Relational Databases');
    expect(spy).to.have.been.called.with('10/10  C  77  Networks');
  });

});
