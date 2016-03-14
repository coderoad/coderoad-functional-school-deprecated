"use strict";
var expect = require('chai').expect;

loadGlobal('courses', 'data/courses2.json');
loadGlobal('suspectData', '1/07/suspectData.json');
loadEditor('07-reduce.js');

describe('01 var total', function() {

  it('should add the numbers up', function () {
    expect(total).to.equal(54);
  });

});
