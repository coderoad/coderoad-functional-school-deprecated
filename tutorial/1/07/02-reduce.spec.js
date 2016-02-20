describe('02 var averages', function() {

  it('should calculate the average of each class', function () {
    var averages = data.map(function(course) {
      var sum = course.students.reduce(function(total, student) {
        total += student.score;
        return total;
      }, 0);
      return Math.round(sum / course.students.length, 0);
    });
    expect(averages).to.deep.equal([57, 67, 70, 70, 71, 62, 67, 73, 62, 57]);
  });
});
