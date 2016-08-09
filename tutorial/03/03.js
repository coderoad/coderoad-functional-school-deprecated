describe('03 const myChanged', () => {

  const myChanged = map.__get__('myChanged');

  it('doesn\'t exist', () => {
    expect(myChanged).to.be.defined;
  });

  it('isn\'t an array', () => {
    expect(myChanged).to.be.an('array');
  });

  it('doesn\'t change all D\'s to A\'s', () => {
    function filterD(student) {
      return student.grade === 'D';
    }
    expect(myChanged.filter(filterD)).to.have.length(0);
  });

  it('doesn\'t change all F\'s to A\'s', () => {
    function filterD(student) {
      return student.grade === 'F';
    }
    expect(myChanged.filter(filterD)).to.have.length(0);
  });

});
