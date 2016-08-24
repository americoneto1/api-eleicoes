/* jshint esversion: 6 */

var mongoose = require('mongoose');
var config = require('./config/tse');

function showErrorMessage() {
  console.log('Informar o tipo de dado para importação: candidato ou bem');
}

if (process.argv.length === 3) {
  var param = process.argv.pop();
  var mining = require('./mining');

  mining.extractdata(config[param]);  
} else {
  showErrorMessage();
}
