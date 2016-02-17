"use strict";
var chai = require('chai');
var expect = chai.expect;
var spies = require('chai-spies');
chai.use(spies);
var path = require('path');
var loadJS = require('../../common/loadJS').default;

loadJS('07-reduce.js');

describe('var likelySuspect', function() {

  it('should reduce down to a suspect name', function () {
    expect(likelySuspect).to.equal('Hack Kerr');
  });
});
