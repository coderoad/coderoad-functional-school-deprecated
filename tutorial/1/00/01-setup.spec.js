"use strict";
var chai = require('chai');
var spies = require('chai-spies');
var expect = chai.expect;
chai.use(spies);
var spy = chai.spy.on(console, 'log');

// load('data/students.js', true)
// load('00-setup.js')

describe('01 first', function() {

	it('should exist', function() {
		expect(first).to.be.defined;
	});

	it('should be an object', function() {
		expect(first).to.be.an('object');
	});

	it('should take have property title', function() {
		expect(first).to.have.property('title');
	});

	it('should have the correct value', function() {
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
