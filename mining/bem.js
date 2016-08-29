/* jshint esversion: 6 */

var mining = require('./../mining');
var Bem = require('./../api/bem/bem.model');

function importdata() {
  mining.getdata('bem_candidato_2016', 'bem.json', (jsonObject) => {
    Bem.create(jsonObject)
      .then(console.log(res))
      .catch(console.error(res));
  });
}

module.exports = importdata;
