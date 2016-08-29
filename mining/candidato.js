/* jshint esversion: 6 */

var mining = require('./../mining');
var Candidato = require('./../api/candidato/candidato.model');

function importdata() {
  mining.getdata('consulta_cand_2016', 'candidato.json', (jsonObject) => {
    console.log(jsonObject);
    /*
    Candidato.create(jsonObject)
      .then(console.log(res))
      .catch(console.error(res));
    */
  });
}

module.exports = importdata;
