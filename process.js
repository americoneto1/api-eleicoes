/* jshint esversion: 6 */

var mongoose = require('mongoose');
var config = require('./config/environment');

function showErrorMessage(exception) {
  if (exception) console.error(exception);
  console.error('Informar o tipo de dado para importação: candidato ou bem');
}

if (process.argv.length === 3) {
  var param = process.argv.pop();

  try {
    var importdata = require(`./mining/${param}`);

    /*
    // Connect to MongoDB
    mongoose.connect(config.mongo.uri);
    mongoose.connection.on('error', function(err) {
      console.error('MongoDB connection error: ' + err);
      process.exit(-1);
    });
    */

    importdata();
  } catch (exception) {
    showErrorMessage(exception);
  }
} else {
  showErrorMessage();
}
