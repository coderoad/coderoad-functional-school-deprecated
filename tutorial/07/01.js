describe('01 suspectData', () => {

  const suspectData = require('BASE/data/suspectData.js');

  it('should be loaded in "data/suspectData.js"', () => {
    expect(suspectData).to.be.defined;
  });

});
