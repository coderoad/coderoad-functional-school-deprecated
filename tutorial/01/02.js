describe('02 const myData', () => {

  const myData = filter.__get__('myData');

  it('doesn\'t exist', () => {
    expect(myData).to.not.be.undefined;
  });

  it('doesn\'t output an array', () => {
    expect(myData).to.be.an('array');
  });

  it('doesn\'t output exactly ten items', () => {
    expect(myData).to.have.length(10);
  });

  it('isn\'t the right filtered data for "Ada Lovelace"', () => {
    expect(myData).to.deep.equal([{
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
      title: 'Front End Web Development',
      instructor: 'Moe Zaick',
      name: 'Ada Lovelace',
      score: 61,
      grade: 'D'
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
      title: 'Data Science',
      instructor: 'Ford Fulkerson',
      name: 'Ada Lovelace',
      score: 58,
      grade: 'F'
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
    }, {
      title: 'Networks',
      instructor: 'Van Emde Boas',
      name: 'Ada Lovelace',
      score: 65,
      grade: 'D'
    }]);
  });

});
