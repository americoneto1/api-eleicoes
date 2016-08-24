/* jshint esversion: 6 */

// Production specific configuration
// =================================
module.exports = {
  // Server port
  port:   process.env.PORT ||
          8080,

  // MongoDB connection options
  mongo: {
    uri:  process.env.MONGODB_URI ||
          'mongodb://localhost/api-eleicoes-prod'
  }
};
