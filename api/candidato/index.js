/* jshint esversion: 6 */

var Candidato = require('./candidato.model');

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if(entity) {
      return res.send(statusCode, entity);
    }
    return null;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.send(statusCode, err);
  };
}

module.exports = {
  find: function(req, res) {
    if (!Object.keys(req.query).length) {
      res.send(400, "Necessario informar algum parametro de filtro");
      return;
    }

    return Candidato.find(req.query).exec()
      .then(respondWithResult(res))
      .catch(handleError(res));
  }
};
