describe('04 const myBest', () => {

  const myBest = filter.__get__('myBest');

  it('doesn\'t exist', () => {
    expect(myBest).to.be.defined;
  });

  it('doesn\'t output an array', () => {
    expect(myBest).to.be.an('array');
  });

  it('doesn\'t output exactly seven items', () => {
    expect(myBest).to.have.length(7);
  });

  it('isn\'t the right filtered data for "Ada Lovelace"', () => {
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
