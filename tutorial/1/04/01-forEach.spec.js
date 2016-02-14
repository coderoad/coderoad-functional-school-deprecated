var chai = require('chai');
var spies = require('chai-spies');
var expect = chai.expect;
chai.use(spies);
var path = require('path');
var loadJS = require('../../common/loadJS').default;

if (!global.myFixed) {
  global.myFixed = JSON.parse(JSON.stringify(require('./myFixed.json')));
}

describe('log', function() {

});
