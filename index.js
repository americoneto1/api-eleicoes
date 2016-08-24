/* jshint esversion: 6 */

var mongoose = require('mongoose');
var config = require('./config/environment');
var restify = require('restify');

// Connect to MongoDB
mongoose.connect(config.mongo.uri);
mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
});

var server = restify.createServer();

server.listen(config.port, config.ip, function() {
  console.log('Restify server listening on %d', config.port);
});
