const expect = require('chai').expect;

describe('01 myBest data', () => {

  const myBest = require('BASE/data/myBest.js');

  it('should be loaded in "data/myBest.js"', () => {
    expect(myBest).to.not.be.undefined;
  });

});
