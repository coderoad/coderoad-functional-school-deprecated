"use strict";
var expect = require('chai').expect;
var path = require('path');
var loadJS = require('../../common/loadJS').default;
if (!global.data) {
  global.data = JSON.parse(JSON.stringify(require('../../data/students.json')));
}
loadJS('01-filter.js');

describe('var myBest', function() {

  it('doesn\'t exist', function() {
    expect(myBest).to.not.be.undefined;
  });

  it('doesn\'t output an array', function() {
    expect(myBest).to.be.an('array');
  });

  it('doesn\'t output exactly seven items', function() {
    expect(myBest).to.have.length(7);
  });

  it('isn\'t the right filtered data for "Ada Lovelace"', function() {
    expect(myBest).to.deep.equal([{
      title: 'Relational Databases',
      instructor: 'Sean Quentin Lewis',
      name: 'Ada Lovelace',
      score: 91,
      grade: 'A'
    }, {
      title: '3D Computer Graphics',
      instructor: 'G.L. Webb',
      name: 'Ada Lovelace',
      score: 88,
      grade: 'B'
    }, {
      title: 'Web Security',
      instructor: 'Sue Denim',
      name: 'Ada Lovelace',
      score: 81,
      grade: 'B'
    }, {
      title: 'Javascript Fundamentals',
      instructor: 'Jay Kweerie',
      name: 'Ada Lovelace',
      score: 73,
      grade: 'C'
    }, {
      title: 'Algorithm Design',
      instructor: 'Gale Shapely',
      name: 'Ada Lovelace',
      score: 93,
      grade: 'A'
    }, {
      title: 'Data Abstraction',
      instructor: 'Aster Ricks',
      name: 'Ada Lovelace',
      score: 82,
      grade: 'B'
    }, {
      title: 'Data Structures',
      instructor: 'Brodal Q.',
      name: 'Ada Lovelace',
      score: 88,
      grade: 'B'
    }]);
  });

});
