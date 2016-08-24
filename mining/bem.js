/* jshint esversion: 6 */

var mongoose = require('mongoose');

var config = require('./../config/environment');
var getdata = require('./../mining');
var Bem = require('./../api/bem/bem.model');

// Connect to MongoDB
mongoose.connect(config.mongo.uri);
mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
});

function importdata() {
  getdata('bem_candidato_2016', 'bem.json', (jsonObject) => {
    Bem.create(jsonObject)
      .then(console.log(res))
      .catch(console.error(res));
  });
}

module.exports = importdata;
