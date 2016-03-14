"use strict";
var expect = require('chai').expect;

loadGlobal('data', 'data/students.json');
loadEditor('01-filter.js');

describe('01 function isAda', function() {

  it('doesn\'t exist', function() {
    expect(isAda).to.not.be.undefined;
  });

  it('isn\'t a Function', function() {
    expect(isAda).to.be.a('function');
  });

  it('doesn\'t take a parameter', function() {
    expect(isAda).to.have.length(1);
  });

  it('doesn\'t return a boolean', function () {
    expect(isAda({name: 'Ada'})).to.be.a('boolean');
  });

  it('should match for name', function () {
    let regex1 = /\.name/;
    let regex2 = /\[.name.\]/;
    let string = isAda.toString();
    let result = !!string.match(regex1) || !!string.match(regex2);
    expect(result).to.be.true;
  });

  it('requires the full name "Ada Lovelace"', function () {
    let regex = /Ada Lovelace/;
    let string = isAda.toString();
    expect(!!string.match(regex)).to.be.true;
  });

  it('doesn\'t match student.name to "Ada Lovelace"', function() {
    let test = [{
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
