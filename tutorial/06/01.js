const expect = require('chai').expect;

describe('01 load courses', () => {

  const courses = require('BASE/data/courses2.js');

  it('should be loaded in "data/courses2.js"', () => {
    expect(courses).to.be.defined;
  });

});
