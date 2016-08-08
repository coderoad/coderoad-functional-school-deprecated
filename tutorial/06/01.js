const expect = require('chai').expect;
// load('data/courses2.json', true)
const concat = require('BASE/06-concat.js');

describe('01 var flattenedArray', () => {

  const flattenedArray = concat.__get__('flattenedArray');

  it('should flatten the array', () => {
    expect(flattenedArray).to.have.length(4);
  });

  it('should flatten the array', () => {
    expect(flattenedArray).to.deep.equal([1, 2, 3, 4]);
  });

});
