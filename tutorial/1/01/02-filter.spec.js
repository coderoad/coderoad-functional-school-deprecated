"use strict";
var expect = require('chai').expect;
var path = require('path');
var loadJS = require('../../common/loadJS').default;
if (!global.data) {
  global.data = JSON.parse(JSON.stringify(require('../../data/students.json')));
}
loadJS('01-filter.js');

describe('var myData', function() {

  it('doesn\'t exist', function() {
    expect(myData).to.not.be.undefined;
  });

  it('doesn\'t output an array', function() {
    expect(myData).to.be.an('array');
  });

  it('doesn\'t output exactly ten items', function() {
    expect(myData).to.have.length(10);
  });

  it('isn\'t the right filtered data for "Ada Lovelace"', function() {
    expect(myData).to.deep.equal([{
      course: 'Relational Databases',
      instructor: 'Sean Quentin Lewis',
      name: 'Ada Lovelace',
      score: 91,
      grade: 'A'
    }, {
      course: '3D Computer Graphics',
      instructor: 'G.L. Webb',
      name: 'Ada Lovelace',
      score: 88,
      grade: 'B'
    }, {
      course: 'Front End Web Development',
      instructor: 'Moe Zaick',
      name: 'Ada Lovelace',
      score: 61,
      grade: 'D'
    }, {
      course: 'Web Security',
      instructor: 'Sue Denim',
      name: 'Ada Lovelace',
      score: 81,
      grade: 'B'
    }, {
      course: 'Javascript Fundamentals',
      instructor: 'Jay Kweerie',
      name: 'Ada Lovelace',
      score: 73,
      grade: 'C'
    }, {
      course: 'Data Science',
      instructor: 'Ford Fulkerson',
      name: 'Ada Lovelace',
      score: 58,
      grade: 'F'
    }, {
      course: 'Algorithm Design',
      instructor: 'Gale Shapely',
      name: 'Ada Lovelace',
      score: 93,
      grade: 'A'
    }, {
      course: 'Data Abstraction',
      instructor: 'Aster Ricks',
      name: 'Ada Lovelace',
      score: 82,
      grade: 'B'
    }, {
      course: 'Data Structures',
      instructor: 'Brodal Q.',
      name: 'Ada Lovelace',
      score: 88,
      grade: 'B'
    }, {
      course: 'Networks',
      instructor: 'Van Emde Boas',
      name: 'Ada Lovelace',
      score: 65,
      grade: 'D'
    }]);
  });



});
