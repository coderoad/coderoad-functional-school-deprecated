var expect = require('chai').expect;
// loads file context to allow globals
var context = require('test-context');
var filePath = '../../../../../01-filter.js';
context(filePath);

describe('isAda', function() {

  it('doesn\'t exist', function() {
    expect(isAda).to.not.be.undefined;
  });

  it('isn\'t a Function', function() {
    expect(isAda).to.be.a('function');
  });

  it('doesn\'t have any params', function() {
    expect(isAda.length).to.equal(1);
  });

  it('doesn\'t return true when an items name matches "Ada Lovelace"', function() {
    var test = [{
      name: 'Jane'
    }, {
      name: 'Joe'
    }, {
      name: 'Ada Lovelace'
    }];
    expect(test.filter(isAda)).to.deep.equal([{
      name: "Ada Lovelace"
    }]);
  });

});
