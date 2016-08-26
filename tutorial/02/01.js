const expect = require('chai').expect;

const myBest = require('BASE/data/myBest.js');

describe('01 myBest data', () => {

  it('should be loaded in "data/myBest.js"', () => {
    expect(myBest).to.not.be.undefined;
  });

});
