/* jshint esversion: 6 */

var fs = require('fs');
var os = require('os');
var path = require('path');
var request = require('request');
var AdmZip = require('adm-zip');

var datadir = 'data';

function extractdata(url) {
  "use strict";

  let zipfile = path.join(datadir, path.basename(url));

  if (!fs.existsSync(datadir)){
    fs.mkdirSync(datadir);
  }

  request.get(url)
    .pipe(fs.createWriteStream(zipfile))
    .on('end', () => {
      var zip = new AdmZip(zipfile);
      zip.extractAllTo(datadir, true);
    });
}

function getdata(dirname, templatename, callback) {
  "use strict";

  dirname = path.join(datadir, dirname);

  let template = fs.readFileSync(path.join('templates', templatename), 'utf-8');

  fs.readdir(dirname, (err, files) => {
    if (err) return;

    files.filter((file) => {
      return file.substr(-4) === '.txt'; //read only .txt files
    }).forEach((file) => {
      fs.readFile(path.join(dirname, file), 'binary', (err, content) => {
        if (err) return;

        let lines = content.split(os.EOL);

        lines.filter((line) => {
          return line !== ''; //remove empty lines
        }).forEach((line) => {
          let parts = line.split(';');
          let jsonObject = template.toString();

          for (let i = 2; i < parts.length; i++) {
            jsonObject = jsonObject.replace('#' + i, parts[i].replace(/"/g, ''));
          }

          callback(jsonObject);
        });
      });
    });
  });
}

module.exports = { getdata, extractdata };
