describe('02 const averages', () => {

  const averages = reduce.__get__('averages');

  it('should calculate the average of each class', () => {
    expect(averages).to.deep.equal([57, 67, 70, 70, 71, 62, 67, 73, 62, 57]);
  });

});
