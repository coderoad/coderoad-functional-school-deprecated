const expect = require('chai').expect;

describe('01 myCourses data', () => {

  const myCourses = require('BASE/data/myCourses.js');

  it('should be loaded in "data/myCourses.js"', () => {
    expect(myCourses).to.be.defined;
  });

});
