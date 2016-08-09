const expect = require('chai').expect;

const reduce = require('BASE/07-reduce.js');

describe('01 const total', () => {

  const total = reduce.__get__('total');

	it('should add the numbers up', () => {
		expect(total).to.equal(54);
	});

});
