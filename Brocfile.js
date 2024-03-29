/* global require, module */


var EmberApp = require('ember-cli/lib/broccoli/ember-app');

// http://stackoverflow.com/questions/23349959/recommended-way-to-include-bootstrap-library-in-ember-js-ember-cli-app
var mergeTrees = require('broccoli-merge-trees');
var pickFiles = require('broccoli-static-compiler');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

app.import('vendor/bootstrap/dist/js/bootstrap.js');
app.import('vendor/bootstrap/dist/css/bootstrap.css');

var fonts = pickFiles('vendor/bootstrap/dist/fonts', {
    srcDir: '/', 
    files: ['**/*'],
    destDir: '/fonts'
});

var bootstrapFiles = pickFiles('vendor/bootstrap/dist/css', {
	srcDir: '/',
	files: ['bootstrap.css.map'],
	destDir: '/assets'
});

// module.exports = app.toTree();
module.exports = mergeTrees([app.toTree(), fonts, bootstrapFiles]);