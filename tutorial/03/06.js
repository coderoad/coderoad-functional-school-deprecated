describe('06 function getGrade', () => {

  const getGrade = map.__get__('getGrade');

  it('doesn\'t exist', () => {
    expect(getGrade).to.not.be.undefined;
  });

  it('should be a function', () => {
    expect(getGrade).to.be.a('function');
  });

  it('should take a parameter', () => {
    expect(getGrade).to.have.length(1);
  });


});

describe('06 const mySlightlyChanged', () => {

  const mySlightlyChanged = map.__get__('mySlightlyChanged');

  it('doesn\'t update grades correctly', () => {
    expect(mySlightlyChanged.map((x) => {
      return x.grade;
    })).to.deep.equal(['A', 'A', 'C', 'A', 'B', 'C', 'A', 'A', 'A', 'C']);
  });

});
