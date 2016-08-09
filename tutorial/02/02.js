const sort = require('BASE/02-sort.js');
const compareScore = sort.__get__('compareScore');

describe('02 function compareScore', () => {

	it('doesn\'t exist', () => {
		expect(compareScore).to.be.defined;
	});

	it('isn\'t a Function', () => {
		expect(compareScore).to.be.a('function');
	});

	it('doesn\'t have two params', () => {
		expect(compareScore.length).to.equal(2);
	});

	it('doesn\'t return 1 when b\'s score is more than a\'s', () => {
		expect(compareScore({
			score: 3
		}, {
			score: 5
		})).to.equal(1);
	});

});
