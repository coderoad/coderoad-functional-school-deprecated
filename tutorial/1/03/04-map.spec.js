var expect = require('chai').expect;

describe('04 function capScores', function() {

  it('doesn\'t exist', function() {
    expect(capScores).to.not.be.undefined;
  });

  it('should be a function', function() {
    expect(capScores).to.be.a('function');
  });

  it('should take a parameter', function() {
    expect(capScores).to.have.length(1);
  });

  it('shouldn\'t change scores under 100', function() {
    var test = {
      score: 99
    };
    expect(capScores(test)).to.deep.equal({
      score: 99
    });
  });

  it('should change scores over 100 to 95', function() {
    var test = {
      score: 101
    };
    expect(capScores(test)).to.deep.equal({
      score: 95
    });
  });

});

describe('04 var mySlightlyFixed', function() {

  it('doesn\'t exist', function() {
    expect(mySlightlyFixed).to.not.be.undefined;
  });

  it('isn\'t an array', function() {
    expect(mySlightlyFixed).to.be.an('array');
  });

  it('doesn\'t increment scores by 12', function() {
    expect(mySlightlyFixed).to.deep.equal([{
      "title": "Relational Databases",
      "instructor": "Sean Quentin Lewis",
      "name": "Ada Lovelace",
      "score": 95,
      "grade": "A"
    }, {
      "title": "3D Computer Graphics",
      "instructor": "G.L. Webb",
      "name": "Ada Lovelace",
      "score": 95,
      "grade": "B"
    }, {
      "title": "Front End Web Development",
      "instructor": "Moe Zaick",
      "name": "Ada Lovelace",
      "score": 73,
      "grade": "D"
    }, {
      "title": "Web Security",
      "instructor": "Sue Denim",
      "name": "Ada Lovelace",
      "score": 93,
      "grade": "B"
    }, {
      "title": "Javascript Fundamentals",
      "instructor": "Jay Kweerie",
      "name": "Ada Lovelace",
      "score": 85,
      "grade": "C"
    }, {
      "title": "Data Science",
      "instructor": "Ford Fulkerson",
      "name": "Ada Lovelace",
      "score": 70,
      "grade": "F"
    }, {
      "title": "Algorithm Design",
      "instructor": "Gale Shapely",
      "name": "Ada Lovelace",
      "score": 95,
      "grade": "A"
    }, {
      "title": "Data Abstraction",
      "instructor": "Aster Ricks",
      "name": "Ada Lovelace",
      "score": 94,
      "grade": "B"
    }, {
      "title": "Data Structures",
      "instructor": "Brodal Q.",
      "name": "Ada Lovelace",
      "score": 95,
      "grade": "B"
    }, {
      "title": "Networks",
      "instructor": "Van Emde Boas",
      "name": "Ada Lovelace",
      "score": 77,
      "grade": "D"
    }]);
  });

});
