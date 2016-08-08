const expect = require('chai').expect;

describe('01 students2 data', () => {

  const students = require('BASE/data/students2.js');

  it('should be loaded in "data/students2.js"', () => {
    expect(students).to.be.defined;
  });

});
