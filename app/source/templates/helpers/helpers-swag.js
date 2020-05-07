// Register all Swag helpers
// const Handlebars = require('handlebars');
// const Swag = require('swag');
// Swag.registerHelpers(Handlebars);


module.exports.register  = function () {
  'use strict';

  // Register Swag Handlebars helpers
  // https://github.com/elving/swag

  var Handlebars = require('handlebars');
  var Swag = require('swag');
  Swag.registerHelpers(Handlebars);

};
