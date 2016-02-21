describe('02 function notInList', function() {

  it('should filter for student.name', function() {
    var regex = /[a-zA-Z]+\.name/;
    var str = notInList.toString();
    expect(str.match(regex)).to.not.be.null;
  });
  
});

describe('02 var unknownStudent', function() {

  var otherStudents = ["Albert Gonzalez", "Brian Kernaghan", "Danielle Bunten Berry", "Donald Knuth", "Grace Hopper", "Hack Kerr", "James Gosling", "Ken Thompson", "Kevin Mitnick", "Linus Torvalds", "Niklaus Wirth", "Rebecca Heineman", "Tim Berners-Lee", "Xiao Tian", "Ying Cracker"];

  it('should filter to "Web Security" class data', function() {
    expect(unknownStudent.name).to.equal('he');
  });

});
