var expect = require('chai').expect;
var path = require('path');
var loadJS = require('../../common/loadJS').default;
if (!global.myBest) {
  global.myBest = JSON.parse(JSON.stringify(require('./myBest.json')));
}
loadJS('02-sort.js');

describe('function compareScore', function () {
  it('doesn\'t exist', function() {
    expect(compareScore).to.not.be.undefined;
  });

  it('isn\'t a Function', function() {
    expect(compareScore).to.be.a('function');
  });

  it('doesn\'t have two params', function() {
    expect(compareScore.length).to.equal(2);
  });

  it('doesn\'t return 1 when b\'s score is less than a\'s', function() {
    expect(compareScore(5, 3)).to.equal(1);
  });

  it('doesn\'t return -1 when b\'s score is more than a\'s', function() {
    expect(compareScore(3, 5)).to.equal(-1);
  });

  it('doesn\'t return 0 when b\'s score equals a\'s', function() {
    expect(compareScore(3, 3)).to.equal(0);
  });

});
