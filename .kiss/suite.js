/* eslint no-console: 0 */
/* global require */
(function() {

    'use strict';

    var Benchmark = require('benchmark'),
        suite = new Benchmark.Suite('%%suite_name%%', {
            'onStart': function() {
                // called when the suite starts running
            },
            'onCycle': function(event) {
                // called between running benchmarks
                console.log(String(event.target));
            },
            'onAbort': function() {
                // called when aborted
            },
            'onError': function() {
                // called when a test errors
            },

            'onReset': function() {
                // called when reset
            },
            'onComplete': function() {
                // called when the suite completes running
                var fastest = suite.filter('fastest').map('name');
                console.log('Fastest is ' + fastest);
            }
        });

    suite.add('%%suite_case_name%%', function() {

    });

    suite.run({
        'async': true
    });

}());
