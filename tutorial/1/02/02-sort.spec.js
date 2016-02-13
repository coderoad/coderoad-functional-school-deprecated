var expect = require('chai').expect;
var path = require('path');
var loadJS = require('../../common/loadJS').default;
if (!global.myBest) {
  global.myBest = JSON.parse(JSON.stringify(require('./myBest.json')));
}
loadJS('02-sort.js');

describe('mySorted', function () {

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
    function compareScore(a, b) {
      switch (true) {
        case b.score < a.score:
          return 1;
        case b.score > a.score:
          return -1;
        default:
          return 0;
      }
    }
    expect(mySorted).to.deep.equal(myBest.sort(compareScore));
  });

});
