const chai = require('chai');
const spies = require('chai-spies');
const expect = chai.expect;
chai.use(spies);
let spy = chai.spy.on(console, 'log');

describe('01 student data', () => {

  const students = require('BASE/students.js');

  it('should be loaded in "students.js"', () => {
    expect(students).to.be.defined;
  });

})
