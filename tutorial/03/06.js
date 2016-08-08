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

describe('05 var myFixed', () => {

  const myFixed = map.__get__('myFixed');

  it('doesn\'t exist', () => {
    expect(myFixed).to.not.be.undefined;
  });

  it('isn\'t an array', () => {
    expect(myFixed).to.be.an('array');
  });

  it('doesn\'t have 10 items', () => {
    expect(myFixed).to.have.length(10);
  });

  it('doesn\'t update grades correctly', () => {
    expect(myFixed.map((x) => {
      return x.grade;
    })).to.deep.equal(['A', 'A', 'C', 'A', 'B', 'C', 'A', 'A', 'A', 'C']);
  });

});
