const chai = require('chai');
const spies = require('chai-spies');
const expect = chai.expect;
chai.use(spies);

// load('04/myFixed.js', true)
if (process.env.TASK_POSITION === '4') {
	myFixed = [];
}
let spy = chai.spy.on(console, 'log');

const map = require('BASE/04-forEach.js');

describe('01 console.log', () => {

	if (process.env.TASK_POSITION !== '4') {
		it('should be called 10 times', () => {
			expect(spy).to.have.been.called.with('A  95  Relational Databases');
			expect(spy).to.have.been.called.with('C  77  Networks');
		});
	}

});
