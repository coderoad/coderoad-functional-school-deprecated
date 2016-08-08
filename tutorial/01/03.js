describe('03 function isGoodGrade', () => {

  const isGoodGrade = filter.__get__('isGoodGrade');

  it('doesn\'t exist', () => {
    expect(isGoodGrade).to.not.be.undefined;
  });

  it('isn\'t a Function', () => {
    expect(isGoodGrade).to.be.a('function');
  });

  it('doesn\'t have any params', () => {
    expect(isGoodGrade.length).to.equal(1);
  });

  it('doesn\'t return true when an items name matches "Ada Lovelace"', () => {
    const test = [{
      grade: 'A'
    }, {
      grade: 'D'
    }, {
      grade: 'F'
    }, {
      grade: 'B'
    }];
    expect(test.filter(isGoodGrade)).to.deep.equal([{
      grade: 'A'
    }, {
      grade: 'B'
    }]);
  });

});
