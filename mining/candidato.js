/* jshint esversion: 6 */

var getdata = require('./../mining');
var Candidato = require('./../api/candidato/candidato.model');

function importdata() {
  getdata('consulta_cand_2016', 'candidato.json', (jsonObject) => {
    Candidato.create(jsonObject)
      .then(console.log(res))
      .catch(console.error(res));
  });
}

module.exports = importdata;
