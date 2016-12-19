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

    function __parseSuiteObjects (objects) {
        var loopItems = [];
        // load suites object to configure loop inside handlebars template
        Object.keys(objects).map(function(key) {
            loopItems.push({
                id: key,
                name: objects[key].name
            });
        });
        return loopItems;
    }

    // load local current environment configuration file if exists
    require('dotenv').load({
        silent: true
    });

    var suites = false,
        port = process.env.PORT || 9080,
        // requires
        path = require('path'),
        express = require('express'),
        bodyParser = require('body-parser'),
        compression = require('compression'),
        exphbs = require('express-handlebars'),
        server = express(),
        paths = {
            www: path.resolve(__dirname, 'public')
        };

    // gzip compression
    server.use(compression());
    // Parsing application/json
    server.use(bodyParser.json());
    // set views folder
    server.set('views', path.resolve(__dirname, 'src/views'));
    // handlebars views
    // Express server is used to serve static ressouces
    server.engine('.hbs', exphbs({
        extname: '.hbs',
        defaultLayout: 'index',
        layoutsDir: path.resolve(__dirname, 'src/views/layouts'),
        partialsDir: path.resolve(__dirname, 'src/views/partials')
    }));
    server.set('view engine', '.hbs');

    suites = require(path.resolve(__dirname, 'suites/_index'));
    server.get('/', function(req, res) {
        res.render('suites', {
            suites: __parseSuiteObjects(suites)
        });
    });

    server.use(express.static(paths.www));

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
