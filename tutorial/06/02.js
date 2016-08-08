const concat = require('BASE/06-concat.js');

describe('02 var flattenedArray', () => {

  const flattenedArray = concat.__get__('flattenedArray');

  it('should flatten the array', () => {
    expect(flattenedArray).to.have.length(4);
  });

  it('should flatten the array', () => {
    expect(flattenedArray).to.deep.equal([1, 2, 3, 4]);
  });

});
