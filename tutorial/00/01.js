'use strict';
var chai = require('chai');
var spies = require('chai-spies');
var expect = chai.expect;
chai.use(spies);
var spy = chai.spy.on(console, 'log');

console.log(chai);

describe('01 student data', () => {

  const students = require('BASE/students.js');

  it('should be loaded in "students.js"', () => {
    expect(students).to.be.defined;
  });

})
