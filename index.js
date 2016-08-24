/* jshint esversion: 6 */

var mongoose = require('mongoose');
var config = require('./config/environment');
var restify = require('restify');

// Connect to MongoDB
mongoose.connect(config.mongo.uri);
mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err);
  //process.exit(-1);
});

var server = restify.createServer();
server.use(restify.CORS());
server.use(restify.queryParser());
server.use(restify.gzipResponse());

require('./api/routes')(server);

server.listen(config.port, function() {
  console.log('Restify server listening on %d', config.port);
});
