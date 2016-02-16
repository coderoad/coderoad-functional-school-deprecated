var expect = require('chai').expect;
var path = require('path');
var loadJS = require('../../common/loadJS').default;
if (!global.myBest) {
  global.myBest = JSON.parse(JSON.stringify(require('./myBest.json')));
}
loadJS('02-sort.js');

describe('var mySorted', function() {

  it('doesn\'t exist', function() {
    expect(mySorted).to.not.be.undefined;
  });

  it('doesn\'t output an array', function() {
    expect(mySorted).to.be.an('array');
  });

  it('doesn\'t output exactly seven items', function() {
    expect(mySorted).to.have.length(7);
  });

  it('isn\'t the right sorted data', function() {
    function compareScore(a, b) {
      switch (true) {
        case b.score < a.score:
          return 1;
        case b.score > a.score:
          return -1;
        default:
          return 0;
      }
    }
    expect(mySorted).to.deep.equal([{
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
