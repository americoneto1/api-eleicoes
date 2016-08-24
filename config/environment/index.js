// Export the config object based on the NODE_ENV
// ==============================================
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = require('./' + env + '.js') || {};
