/**
 *
 *  __          ________ __  __          _____
 *  \ \        / /  ____|  \/  |   /\   |  __ \
 *   \ \  /\  / /| |__  | \  / |  /  \  | |__) |
 *    \ \/  \/ / |  __| | |\/| | / /\ \ |  ___/
 *     \  /\  /  | |____| |  | |/ ____ \| |
 *      \/  \/   |______|_|  |_/_/    \_\_|
 *
 *
 * USAGE: @see README.md
 *
 */
/* eslint no-console: 0 */
/* global require, module, __dirname */
(function() {

    'use strict';

    var fs = require('fs'),
        path = require('path'),
        browserify = require('browserify');

    module.exports = {

        /**
         * Browserify entry point
         * @param  {Function} callback Called at compilation ending to launche NodeJS server
         */
        build: function(callback) {
            var file = null,
                bundler = browserify({
                    debug: true
                });

            // add to compile benchmark runner
            file = path.resolve(__dirname, './runner.js');
            bundler.require(file, {
                expose: 'browser-runner-bundle'
            });

            // compile with browserfiy benchmark.js file runner for browser
            file = path.resolve(__dirname, './../../public/browser-runner-bundle.js');
            bundler.bundle()
                .pipe(fs.createWriteStream(file))
                .on('finish', function() {
                    // on compile complete -> start NodeJS server
                    callback();
                });
        }
    };

}());
