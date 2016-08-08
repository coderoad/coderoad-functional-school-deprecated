const expect = require('chai').expect;

describe('01 myData data', () => {

  const myData = require('BASE/data/myData.js');

  it('should be loaded in "data/myData.js"', () => {
    expect(myData).to.be.defined;
  });

});
