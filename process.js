/* jshint esversion: 6 */

var path = require('path');
var mongoose = require('mongoose');

var config = require('./config/environment');
var getdata = require('./mining');

// Connect to MongoDB
mongoose.connect(config.mongo.uri);

process.argv.forEach((value) => {
  "use strict";

  let data = 'data';
  let template = 'templates';

  if (value === 'candidato') {
    data = path.join(data, 'consulta_cand_2016');
    template = path.join(template, 'candidato.json');
  } else if (value === 'bem') {
    data = path.join(data, 'bem_candidato_2016');
    template = path.join(template, 'bem.json');

    getdata(data, template, (jsonObject) => {
      bem.create(jsonObject)
        .then(console.log(res))
        .catch(console.error(res));
    });
  } else {
    return;
  }


});
