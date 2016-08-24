/* jshint esversion: 6 */

var mongoose = require('mongoose');

var CandidatoSchema = new mongoose.Schema({
  "eleicao": {
    "type": "object",
    "properties": {
      "ano": {
        "type": "string"
      },
      "numeroTurno": {
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
  "unidadeEleitoral": {
    "type": "object",
    "properties": {
      "sigla": {
        "type": "string"
      },
      "descricao": {
        "type": "string"
      }
    }
  },
  "cargo": {
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
  "nome": {
    "type": "string"
  },
  "sequencial": {
    "type": "string"
  },
  "numero": {
    "type": "string"
  },
  "cpf": {
    "type": "string"
  },
  "nomeUrna": {
    "type": "string"
  },
  "situacaoCandidatura": {
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
  "partido": {
    "type": "object",
    "properties": {
      "numero": {
        "type": "string"
      },
      "sigla": {
        "type": "string"
      },
      "nome": {
        "type": "string"
      }
    }
  },
  "legenda": {
    "type": "object",
    "properties": {
      "codigo": {
        "type": "string"
      },
      "sigla": {
        "type": "string"
      },
      "composicao": {
        "type": "string"
      },
      "nome": {
        "type": "string"
      }
    }
  },
  "ocupacao": {
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
  "dataNascimento": {
    "type": "string"
  },
  "numeroTituloEleitoral": {
    "type": "string"
  },
  "idadeDataEleicao": {
    "type": "string"
  },
  "sexo": {
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
  "grauInstituicao": {
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
  "estadoCivil": {
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
  "corRaca": {
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
  "nacionalidade": {
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
  "municipioNascimento": {
    "type": "object",
    "properties": {
      "siglaUf": {
        "type": "string"
      },
      "codigo": {
        "type": "string"
      },
      "nome": {
        "type": "string"
      }
    }
  },
  "despesaMaximaCampanha": {
    "type": "string"
  },
  "situacaoTotalizacaoCandidatoTurno": {
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
  "email": {
    "type": "string"
  }
});

module.exports = mongoose.model('Candidato', CandidatoSchema);
