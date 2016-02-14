var expect = require('chai').expect;
var path = require('path');
var loadJS = require('../../common/loadJS').default;
if (!global.myData) {
  global.myData = JSON.parse(JSON.stringify(require('./myData.json')));
}

describe('mySlightlyChanged', function() {

  it('doesn\'t exist', function() {
    expect(mySlightlyChanged).to.not.be.undefined;
  });

  it('isn\'t an array', function() {
    expect(mySlightlyChanged).to.be.an('array');
  });

  it('doesn\'t increment scores by 12', function() {
    expect(mySlightlyChanged).to.deep.equal([{
      "course": "Relational Databases",
      "instructor": "Sean Quentin Lewis",
      "name": "Ada Lovelace",
      "score": 103,
      "grade": "A"
    }, {
      "course": "3D Computer Graphics",
      "instructor": "G.L. Webb",
      "name": "Ada Lovelace",
      "score": 100,
      "grade": "B"
    }, {
      "course": "Front End Web Development",
      "instructor": "Moe Zaick",
      "name": "Ada Lovelace",
      "score": 73,
      "grade": "D"
    }, {
      "course": "Web Security",
      "instructor": "Sue Denim",
      "name": "Ada Lovelace",
      "score": 93,
      "grade": "B"
    }, {
      "course": "Javascript Fundamentals",
      "instructor": "Jay Kweerie",
      "name": "Ada Lovelace",
      "score": 85,
      "grade": "C"
    }, {
      "course": "Data Science",
      "instructor": "Ford Fulkerson",
      "name": "Ada Lovelace",
      "score": 70,
      "grade": "F"
    }, {
      "course": "Algorithm Design",
      "instructor": "Gale Shapely",
      "name": "Ada Lovelace",
      "score": 105,
      "grade": "A"
    }, {
      "course": "Data Abstraction",
      "instructor": "Aster Ricks",
      "name": "Ada Lovelace",
      "score": 94,
      "grade": "B"
    }, {
      "course": "Data Structures",
      "instructor": "Brodal Q.",
      "name": "Ada Lovelace",
      "score": 100,
      "grade": "B"
    }, {
      "course": "Networks",
      "instructor": "Van Emde Boas",
      "name": "Ada Lovelace",
      "score": 77,
      "grade": "D"
    }]);
  });

});
