const expect = require('chai').expect;

// load('data/courses2.json', true)
// load('07/suspectData.js')

const reduce = require('BASE/07-reduce.js');

describe('01 var total', () => {

	const total = reduce.__get__('total');

	it('should add the numbers up', () => {
		expect(total).to.equal(54);
	});

});
