/* jshint esversion: 6 */

var fs = require('fs');
var os = require('os');
var path = require('path');

function getdata(dirname, templatename, callback) {
  "use strict";

  dirname = path.join('data', dirname);

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

module.exports = getdata;
