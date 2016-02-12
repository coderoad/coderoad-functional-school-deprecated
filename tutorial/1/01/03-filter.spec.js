var expect = require('chai').expect;
var path = require('path');
var loadContext = require('../../common/loadContext');
var filePath = path.join(process.env.DIR, '01-filter.js');
// global.data = require(process.env.TUTORIAL_DIR + '/tutorial/data/students').slice(0);

describe('var myBest', function() {

  it('doesn\'t exist', function() {
    expect(myBest).to.not.be.undefined;
  });

  it('doesn\'t output an array', function() {
    expect(myBest).to.be.an('array');
  });

  it('doesn\'t output exactly ten items', function() {
    expect(myBest).to.have.length(7);
  });

  it('isn\'t the right filtered data for "Ada Lovelace"', function() {
    var values = [91, 88, 81, 73, 93, 82, 88];
    myBestVals = myBest.map(function(x) {
      return x.score;
    });
    values.forEach(function(value) {
      expect(myBestVals).contains(value);
    });
  });

});
