var expect = require('chai').expect;
var path = require('path');
var loadJS = require('../../common/loadJS').default;
if (!global.data) {
  global.data = JSON.parse(JSON.stringify(require('./data.json')));
}
loadJS('01-filter.js');

describe('var myData', function() {

  it('doesn\'t exist', function() {
    expect(myData).to.not.be.undefined;
  });

  it('doesn\'t output an array', function() {
    expect(myData).to.be.an('array');
  });

  it('doesn\'t output exactly ten items', function() {
    expect(myData).to.have.length(10);
  });

  it('isn\'t the right filtered data for "Ada Lovelace"', function() {
    var values = [91, 88, 61, 81, 73, 58, 93, 82, 88, 65];
    myVals = myData.map(function(x) {
      return x.score;
    });
    values.forEach(function(value) {
      expect(myVals).contains(value);
    });
  });

});
