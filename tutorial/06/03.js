describe('03 var doubleArray', () => {

  const doubleArray = concat.__get__('doubleArray');

  it('should create an array of arrays', () => {
    expect(doubleArray).to.have.length(10);
    expect(doubleArray[0]).to.have.length(16);
  });

  it('should create an array of arrays', () => {
    expect(doubleArray[0][0]).to.deep.equal({
      instructor: "Sean Quentin Lewis",
      title: "Relational Databases",
      name: "!f",
      grade: "D",
      score: 61
    });
  });

});
