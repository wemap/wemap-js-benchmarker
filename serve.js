/* global process, require, __dirname, console */
(function() {

    'use strict';

    // touch .env
    // npm i -D dotenv express express-livereload compression body-parser
    require('dotenv').load();

    var port = process.env.PORT || 9080,
        debug = process.env.DEBUG || false,
        // requires
        path = require('path'),
        express = require('express'),
        bodyParser = require('body-parser'),
        compression = require('compression'),
        server = express(),
        paths = {
            www: path.join(__dirname, 'dist')
        };

    // gzip compression
    server.use(compression());
    // Parsing application/json
    server.use(bodyParser.json());
    // Express server is used to serve static ressouces
    server.use('/', express.static(paths.www));

    server.listen(port, function() {
        if (!debug) {
            return true;
        }
        var msg = 'Application now running under http://localhost:' + port;
        process.stdout.write(msg);
        return true;
    });

}());
