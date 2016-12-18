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

    module.exports = function(obj) {
        var i = null,
            key = null,
            // create a new benchmark suite object
            suite = new Benchmark.Suite(obj.name, reporter),
            // get all cases name from a suite file
            cases = Object.keys(obj.cases),
            len = cases.length;
        for (i = 0; i < len; i++) {
            key = cases[i];
            // add all cases defined in a suite file to benchmark suite object
            suite.add(key, obj.cases[key]);
        }
        return suite;
    };

}());
