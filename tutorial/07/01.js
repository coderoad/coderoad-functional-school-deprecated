const expect = require('chai').expect;

const suspectData = require('BASE/data/suspectData.js');

describe('01 suspectData', () => {

  it('should be loaded in "data/suspectData.js"', () => {
    expect(suspectData).to.not.be.undefined;
  });

});
