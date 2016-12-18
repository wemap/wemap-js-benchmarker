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
/* global process, require, __dirname, console */
(function() {

    'use strict';

    // load local current environment configuration file if exists
    require('dotenv').load({
        silent: true
    });

    var port = process.env.PORT || 9080,
        // requires
        path = require('path'),
        express = require('express'),
        bodyParser = require('body-parser'),
        compression = require('compression'),
        server = express(),
        paths = {
            www: path.join(__dirname, 'public')
        };

    // gzip compression
    server.use(compression());
    // Parsing application/json
    server.use(bodyParser.json());
    // Express server is used to serve static ressouces
    server.use('/', express.static(paths.www));

    require('./src/js/build-browser-runner').build(function __onBuildComplete__ () {
        // build benchmark.js HTML runner with browserify from sources
        server.listen(port, function() {
            var msg = 'HTML Runner Built!\n';
            msg += 'Open your browser at http://localhost:' + port + '\n';
            process.stdout.write(msg);
            return true;
        });
    });

}());
