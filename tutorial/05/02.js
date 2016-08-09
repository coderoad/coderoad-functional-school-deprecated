const find = require('BASE/05-find.js');

describe('02 const myClass', () => {

  const myClass = find.__get__('myClass');

  it('should filter to "Web Security" class data', () => {
    expect(myClass).to.have.length(16);
  });

});
