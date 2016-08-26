const expect = require('chai').expect;

const myCourses = require('BASE/data/myCourses.js');

describe('01 myCourses data', () => {

  it('should be loaded in "data/myCourses.js"', () => {
    expect(myCourses).to.not.be.undefined;
  });

});
