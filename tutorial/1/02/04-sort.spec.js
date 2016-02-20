'use strict';
var expect = require('chai').expect;

describe('04 var mySorted', function() {

  it('doesn\'t exist', function() {
    expect(mySorted).to.not.be.undefined;
  });

  it('doesn\'t output an array', function() {
    expect(mySorted).to.be.an('array');
  });

  it('doesn\'t output exactly seven items', function() {
    expect(mySorted).to.have.length(7);
  });

  it('isn\'t the right sorted data', function() {
    expect(mySorted[0].score).to.equal(93);
    expect(mySorted[6].score).to.equal(73);
  });

});
