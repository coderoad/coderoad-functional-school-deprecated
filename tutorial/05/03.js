describe('03 function notInList', () => {

  const notInList = find.__get__('notInList');

  it('should filter for student.name', () => {
    const regex = /[a-zA-Z]+\.name/;
    const str = notInList.toString();
    expect(str.match(regex)).to.not.be.null;
  });

});

describe('03 const unknownStudent', () => {

  const unknownStudent = find.__get__('unknownStudent');

  const otherStudents = ["Albert Gonzalez", "Brian Kernaghan", "Danielle Bunten Berry", "Donald Knuth", "Grace Hopper", "Hack Kerr", "James Gosling", "Ken Thompson", "Kevin Mitnick", "Linus Torvalds", "Niklaus Wirth", "Rebecca Heineman", "Tim Berners-Lee", "Xiao Tian", "Ying Cracker"];

  it('should filter to "Web Security" class data', () => {
    expect(unknownStudent.name).to.equal('he');
  });

});
