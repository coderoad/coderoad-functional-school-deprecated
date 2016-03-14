'use strict';
var chai = require('chai');
var spies = require('chai-spies');
var expect = chai.expect;
chai.use(spies);

loadGlobal('myFixed', '1/04/myFixed.json');
if (process.env.TASK_POSITION === '4') {
  global.myFixed = [];
}
var spy = chai.spy.on(console, 'log');
loadEditor('04-forEach.js');

describe('01 console.log', function() {

  if (process.env.TASK_POSITION !== '4') {
    it('should be called 10 times', function() {
      expect(spy).to.have.been.called.with('A  95  Relational Databases');
      expect(spy).to.have.been.called.with('C  77  Networks');
    });
  }

});
