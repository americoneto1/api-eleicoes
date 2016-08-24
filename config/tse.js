/* jshint esversion: 6 */

var baseUrl = 'http://agencia.tse.jus.br/estatistica/sead/odsele';

module.exports = {
  candidatos: baseUrl + '/consulta_cand/consulta_cand_2016.zip',
  bens: baseUrl + '/bem_candidato/bem_candidato_2016.zip',
  legenda: baseUrl + '/consulta_legendas/consulta_legendas_2016.zip',
  vagas: baseUrl + '/consulta_vagas/consulta_vagas_2016.zip'
};
