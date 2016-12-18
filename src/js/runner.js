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

    module.exports = function(filename, callback) {
        if (!suites.hasOwnProperty(filename)) {
            throw new Error('unable to find suite: ' + filename);
        }
        var suiteconfig = suites[filename],
            suite = parseSuite(suiteconfig);
        suite.on('complete', callback);
        suite.run();
    };

}());
