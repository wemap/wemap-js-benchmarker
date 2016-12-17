/* eslint no-console: 0 */
/* global require, module, __dirname */
(function() {

    'use strict';

    var fs = require('fs'),
        path = require('path'),
        browserify = require('browserify');

    module.exports = {
        build: function(callback) {
            var file = null,
                bundler = browserify({
                    debug: true
                });

            file = path.resolve(__dirname, './runner.js');
            bundler.require(file, {
                expose: 'browser-runner-bundle'
            });

            file = path.resolve(__dirname, './../public/browser-runner-bundle.js');
            bundler.bundle()
                .pipe(fs.createWriteStream(file))
                .on('finish', function() {
                    callback();
                });
        }
    };

}());
