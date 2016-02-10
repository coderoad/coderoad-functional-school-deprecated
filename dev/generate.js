#!/usr/bin/env node

(function() {
  var data = require('./data.json').slice(0);
  var classes = [1, 2, 3, 4];
  var name = "Ada Lovelace";
  var names = [
    "Grace Hopper",
    "Danielle Bunten Berry",
    "Rebecca Heineman",
    "Xiao Tian",
    "Ying Cracker",
    "Niklaus Wirth",
    "James Gosling",
    "Ken Thompson",
    "Donald Knuth",
    "Brian Kernaghan",
    "Tim Berners-Lee",
    "Linus Torvalds",
    "Hack Kerr",
    "Kevin Mitnick",
    "Albert Gonzalez"
  ];
  var output = [];

  function generate(data) {
    console.log('generating data...');
    output = data.map(function(classItem) {
      classItem.students = createStudentsInClass();
      classItem.average = classAverage(classItem.students);
      return classItem;
    });
    console.log("[");
    output.forEach(function(classItem, index) {
      console.log(`{ "course": "${classItem.course}", "instructor": "${classItem.instructor}", "average": "${classItem.average}", "students": [${classItem.students.map(function(student) {
        return `{ "classNumber": "${student.classNumber}", "name": "${student.name}", "score": ${student.score}, "grade": "${student.grade}" }`
      })}] }`);
      if (index !== output.length - 1) {
        console.log(',')
      }
    });
    console.log("]");
  }

  function classAverage(students) {
    var sum = students.reduce(function(total, student) {
      return total += student.score;
    }, 0);
    return Math.round(sum / students.length);
  }

  function getStudent(name) {
    var score = getScore();
    return {
      classNumber: classes[Math.floor(Math.random() * classes.length)],
      name: name,
      score: score,
      grade: getGrade(score)
    };
  }

  function createStudentsInClass() {
    var students = [];
    students.push(getStudent(name));
    names.forEach(function(name) {
      students.push(getStudent(name));
    });
    return students.sort(function(a, b) {
      if (a.class > b.class) {
        return 1;
      }
      if (a.class < b.class) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  }

  // returns a score between 30 & 100
  function getScore() {
    return Math.floor(Math.random() * 70) + 30;
  }

  function getGrade(score) {
    switch (true) {
      case (score >= 95):
        return 'A+';
      case (score >= 90):
        return "A";
      case (score >= 85):
        return 'B+';
      case (score >= 80):
        return "B";
      case (score >= 75):
        return "C+";
      case (score >= 70):
        return "C";
      case (score >= 65):
        return "D+";
      case (score >= 60):
        return "D";
      default:
        return "F";
    }
  }

  generate(data);

}());
