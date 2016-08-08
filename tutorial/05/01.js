const expect = require('chai').expect;

// load('data/students2.js', true)
const find = require('BASE/05-find.js');

describe('01 var myClass', () => {

  const students = find.__get__('students');
  const myClass = find.__get__('myClass');

  it('should filter to "Web Security" class data', () => {
    const result = students.filter((course) => {
      return course.title === 'Web Security';
    });
    expect(myClass).to.deep.equal(result);
  });

});
