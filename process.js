/* jshint esversion: 6 */

function showErrorMessage() {
  console.log('Informar o tipo de dado para importação: candidato ou bem');
}

if (process.argv.length === 3) {
  var param = process.argv.pop();

  try {
    var importdata = require(`./mining/${param}`);
    importdata();
  } catch (e) {
    showErrorMessage();
  }
} else {
  showErrorMessage();
}
