var vm = require('vm');
var fs = require('fs');
module.exports = function loadContext(pathToContext) {
  var context = fs.readFileSync(pathToContext, 'utf8');
  vm.runInThisContext(context);
};
