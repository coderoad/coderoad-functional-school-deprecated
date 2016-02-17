"use strict";
var chai = require('chai');
var expect = chai.expect;
var spies = require('chai-spies');
chai.use(spies);
var path = require('path');
var loadJS = require('../../common/loadJS').default;

describe('var total', function() {

  it('should call reduce', function() {
    var spy = chai.spy.on(Array, 'reduce');
    loadJS('07-reduce.js');
    expect(spy).to.have.been.called();
  });

  it('should add the numbers up', function () {
    expect(total).to.equal(54);
  });

});
