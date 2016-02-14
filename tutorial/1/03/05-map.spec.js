var expect = require('chai').expect;
var path = require('path');
var loadJS = require('../../common/loadJS').default;
if (!global.myData) {
  global.myData = JSON.parse(JSON.stringify(require('./myData.json')));
}

describe('var myFixed', function() {

  it('doesn\'t exist', function() {
    expect(myFixed).to.not.be.undefined;
  });

  it('isn\'t an array', function() {
    expect(myFixed).to.be.an('array');
  });

  it('doesn\'t have 10 items', function() {
    expect(myFixed).to.have.length(10);
  });

  it('doesn\'t update grades correctly', function() {
    expect(myFixed).to.deep.equal([{
      "course": "Relational Databases",
      "instructor": "Sean Quentin Lewis",
      "name": "Ada Lovelace",
      "score": 95,
      "grade": "A"
    }, {
      "course": "3D Computer Graphics",
      "instructor": "G.L. Webb",
      "name": "Ada Lovelace",
      "score": 95,
      "grade": "A"
    }, {
      "course": "Front End Web Development",
      "instructor": "Moe Zaick",
      "name": "Ada Lovelace",
      "score": 73,
      "grade": "C"
    }, {
      "course": "Web Security",
      "instructor": "Sue Denim",
      "name": "Ada Lovelace",
      "score": 93,
      "grade": "A"
    }, {
      "course": "Javascript Fundamentals",
      "instructor": "Jay Kweerie",
      "name": "Ada Lovelace",
      "score": 85,
      "grade": "B"
    }, {
      "course": "Data Science",
      "instructor": "Ford Fulkerson",
      "name": "Ada Lovelace",
      "score": 70,
      "grade": "C"
    }, {
      "course": "Algorithm Design",
      "instructor": "Gale Shapely",
      "name": "Ada Lovelace",
      "score": 95,
      "grade": "A"
    }, {
      "course": "Data Abstraction",
      "instructor": "Aster Ricks",
      "name": "Ada Lovelace",
      "score": 94,
      "grade": "A"
    }, {
      "course": "Data Structures",
      "instructor": "Brodal Q.",
      "name": "Ada Lovelace",
      "score": 95,
      "grade": "A"
    }, {
      "course": "Networks",
      "instructor": "Van Emde Boas",
      "name": "Ada Lovelace",
      "score": 77,
      "grade": "C"
    }]);
  });

});
