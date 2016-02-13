var expect = require('chai').expect;
var path = require('path');
var loadJS = require('../../common/loadJS').default;
if (!global.data) {
  global.data = JSON.parse(JSON.stringify(require('../../data/students.json')));
}
loadJS('02-sort.js');

describe('', function () {});
