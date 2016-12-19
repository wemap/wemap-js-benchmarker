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
/* global require, module */
(function() {

    'use strict';

    var parseSuite = require('./parse-suite'),
        suites = require('./../../suites/_index');

    module.exports = function(suitename, callback) {
        if (!suites.hasOwnProperty(suitename)) {
            throw new Error('unable to find suite with name: ' + suitename);
        }
        var suiteconfig = suites[suitename],
            suite = parseSuite(suiteconfig);
        suite.on('complete', callback);
        suite.run();
    };

}());
