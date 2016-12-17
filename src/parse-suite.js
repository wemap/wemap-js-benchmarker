/* eslint no-undefined: 0 */
/* global module, require */
(function() {

    'use strict';

    var Benchmark = require('benchmark'),
        reporter = require('./reporter');

    // fix Benchmark is undefined in browser
    if (window && (window !== undefined || window !== 'undefined')) {
        window.Benchmark = Benchmark;
    }

    module.exports = function(suite) {
        var i = null,
            key = null,
            bench = new Benchmark.Suite(suite.name, reporter),
            cases = Object.keys(suite.cases),
            len = cases.length;
        for (i = 0; i < len; i++) {
            key = cases[i];
            bench.add(key, suite.cases[key]);
        }
        return bench;
    };

}());
