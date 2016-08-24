/* jshint esversion: 6 */

var mongoose = require('mongoose');

var BemSchema = new mongoose.Schema({
  "eleicao": {
    "type": "object",
    "properties": {
      "ano": {
        "type": "string"
      },
      "descricao": {
        "type": "string"
      },
      "siglaUF": {
        "type": "string"
      }
    }
  },
  "sequencial": {
    "type": "string"
  },
  "tipoBem": {
    "type": "object",
    "properties": {
      "codigo": {
        "type": "string"
      },
      "descricao": {
        "type": "string"
      }
    }
  },
  "detalhe": {
    "type": "string"
  },
  "valor": {
    "type": "string"
  },
  "dataUltimaAtualizacao": {
    "type": "string"
  },
  "horaUltimaAtualizacao": {
    "type": "string"
  }
});

module.exports = mongoose.model('Bem', BemSchema);
