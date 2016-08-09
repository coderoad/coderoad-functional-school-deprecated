const setup = require('BASE/00-setup.js');

describe('02 const first', () => {

	// __get__ grabs global first
	const first = setup.__get__('first');

	it('should exist', () => {
		expect(first).to.be.defined;
	});

	it('should be an object', () => {
		expect(first).to.be.an('object');
	});

	it('should take have property title', () => {
		expect(first).to.have.property('title');
	});

	it('should have the correct value', () => {
		var result = {
			"title": "Relational Databases",
			"instructor": "Sean Quentin Lewis",
			"name": "Ada Lovelace",
			"score": 91,
			"grade": "A"
		};
		expect(first).to.deep.equal(result);
	});

});
