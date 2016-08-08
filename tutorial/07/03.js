describe('03 suspectData', () => {

  const suspectData = require('BASE/data/suspectData.js');

  it('should be loaded in "data/courses2.js"', () => {
    expect(suspectData).to.be.defined;
  });

});
