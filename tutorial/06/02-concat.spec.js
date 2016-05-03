describe('02 var doubleArray', function() {

  it('should create an array of arrays', function() {
    expect(doubleArray).to.have.length(10);
    expect(doubleArray[0]).to.have.length(16);
  });

  it('should create an array of arrays', function() {
    expect(doubleArray[0][0]).to.deep.equal({
      instructor: "Sean Quentin Lewis",
      title: "Relational Databases",
      name: "!f",
      grade: "D",
      score: 61
    });
  });

});
