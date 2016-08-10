const expect = require('chai').expect;

describe('01 courses2 data', () => {

  const courses = require('BASE/data/courses2.js');

  it('should be loaded in "data/courses2.js"', () => {
    expect(courses).to.not.be.undefined;
  });

});
