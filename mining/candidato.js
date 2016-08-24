/* jshint esversion: 6 */

var mongoose = require('mongoose');

var config = require('./../config/environment');
var getdata = require('./../mining');
var Candidato = require('./../api/candidato/candidato.model');

// Connect to MongoDB
mongoose.connect(config.mongo.uri);
mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
});

function importdata() {
  getdata('consulta_cand_2016', 'candidato.json', (jsonObject) => {
    Candidato.create(jsonObject)
      .then(console.log(res))
      .catch(console.error(res));
  });
}

module.exports = importdata;
