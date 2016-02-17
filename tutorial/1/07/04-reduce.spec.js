"use strict";
var chai = require('chai');
var expect = chai.expect;
var spies = require('chai-spies');
chai.use(spies);
var path = require('path');
var loadJS = require('../../common/loadJS').default;

loadJS('07-reduce.js');

describe('var suspectScores', function() {

  it('should map over suspect data to find the score differences', function() {
    var suspectData = [{
      name: 'Albert Gonzalez',
      scores: [35, 37, 73, 74, 94, 67, 39, 70, 56, 52]
    }, {
      name: 'Hack Kerr',
      scores: [85, 86, 92, 75, 83, 96, 94, 87, 89, 102]
    }, {
      name: 'Kevin Mitnick',
      scores: [72, 52, 47, 89, 47, 75, 81, 41, 40, 37]
    }];
    var averages = [57, 67, 70, 70, 71, 62, 67, 73, 62, 57];

    var change = suspectData.map(function(suspect) {
      return {
        name: suspect.name,
        scores: suspect.scores,
        change: suspect.scores.reduce(function(a, b, index) {
          a += b - averages[index];
          return a;
        }, 0)
      };
    });
    expect(change).to.deep.equal([{
      name: 'Albert Gonzalez',
      scores: [35, 37, 73, 74, 94, 67, 39, 70, 56, 52],
      change: -59
    }, {
      name: 'Hack Kerr',
      scores: [85, 86, 92, 75, 83, 96, 94, 87, 89, 102],
      change: 233
    }, {
      name: 'Kevin Mitnick',
      scores: [72, 52, 47, 89, 47, 75, 81, 41, 40, 37],
      change: -75
    }]);
  });

});
