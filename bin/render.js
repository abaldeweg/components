#!/usr/bin/env node

'use strict'

const ejs = require('ejs');
const fs = require('fs')
const mkdirp = require('mkdirp')
const { kebabCase, camelCase, upperFirst, snakeCase } = require('lodash')

const name = kebabCase(process.argv[2]) || 'component'
const component = 'B' + upperFirst(camelCase(name))
const filename = 'B' + upperFirst(camelCase(name)) + '.vue'
const data = {
  name: name,
  cssClass: snakeCase(name),
  component: component
};
const options = {};

// component
renderFile(
  __dirname + '/component',
  data,
  options,
  './src/components/' + component,
  './src/components/' + component + '/' + filename
);
// view
renderFile(
  __dirname + '/view',
  data,
  options,
  './src/views',
  './src/views/' + filename
);

function renderFile(source, data, options, mkdir, file) {
  ejs.renderFile(source, data, options, function (err, str) {
    mkdirp(mkdir)
      .then(function () {
        fs.writeFile(file, str, function (err) {
          if (err) console.error(err)
        })
      })
  });
}

console.log('Add the new component to the Index view.')
console.log('Add the new component to the router')
console.log('Export and register the component in index.js.')
