const { component } = require('./settings');
const { page } = require('./settings');

// Add here more generators
module.exports = function (plop) {
  plop.setGenerator('component', component);
  plop.setGenerator('page', page);
};
