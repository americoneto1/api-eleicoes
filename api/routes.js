/* jshint esversion: 6 */

var candidato = require('./candidato');
var bem = require('./bem');

module.exports = function (server) {
  server.get('/api/candidatos', candidato.find);
  //server.get('/api/candidato/:numero/bens', bem.find);
};
