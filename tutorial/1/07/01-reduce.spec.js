"use strict";
var chai = require('chai');
var expect = chai.expect;
var spies = require('chai-spies');
chai.use(spies);
var loadJS = require('common/loadJS').default;

var spy = chai.spy.on(Array, 'reduce');
loadJS('07-reduce.js');

describe('01 var total', function() {

  it('should call reduce', function() {
    expect(spy).to.have.been.called();
  });

  it('should add the numbers up', function () {
    expect(total).to.equal(54);
  });

});
