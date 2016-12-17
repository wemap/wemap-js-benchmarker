/* global require, module */
(function() {

    'use strict';

    var parseSuite = require('./parse-suite'),
        suites = require('./../suites/_index');

    module.exports = function(filename) {
        if (!suites.hasOwnProperty(filename)) {
            throw new Error('unable to find suite: ' + filename);
        }
        var suite = suites[filename],
            bench = parseSuite(suite);
        bench.run({
            async: false
        });
    };

}());
