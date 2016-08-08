'use strict';
var expect = require('chai').expect;

const filter = require('BASE/01-filter.js');

describe('01 function isAda', () => {

  const isAda = filter.__get__('isAda');

  it('doesn\'t exist', () => {
    expect(isAda).to.not.be.undefined;
  });

  it('isn\'t a Function', () => {
    expect(isAda).to.be.a('function');
  });

  it('doesn\'t take a parameter', () => {
    expect(isAda).to.have.length(1);
  });

  it('doesn\'t return a boolean', () => {
    expect(isAda({name: 'Ada'})).to.be.a('boolean');
  });

  it('should match for name', () => {
    const regex1 = /\.name/;
    const regex2 = /\[.name.\]/;
    const string = isAda.toString();
    const result = !!string.match(regex1) || !!string.match(regex2);
    expect(result).to.be.true;
  });

  it('requires the full name "Ada Lovelace"', () => {
    const regex = /Ada Lovelace/;
    const string = isAda.toString();
    expect(!!string.match(regex)).to.be.true;
  });

  it('doesn\'t match student.name to "Ada Lovelace"', () => {
    const test = [{
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
