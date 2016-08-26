const expect = require('chai').expect;

const courses = require('BASE/data/courses2.js');

describe('01 courses2 data', () => {

  it('should be loaded in "data/courses2.js"', () => {
    expect(courses).to.not.be.undefined;
  });

});
