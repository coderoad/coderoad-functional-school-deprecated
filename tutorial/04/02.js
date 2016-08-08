require('BASE/04-forEach.js');

describe('02 console.log', () => {

	if (process.env.TASK_POSITION !== '4') {
		it('should be called 10 times', () => {
			expect(spy).to.have.been.called.with('A  95  Relational Databases');
			expect(spy).to.have.been.called.with('C  77  Networks');
		});
	}

});
