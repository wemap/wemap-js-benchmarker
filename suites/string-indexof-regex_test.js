/* eslint no-console: 0 */
/* global require */
(function() {

    'use strict';

    var Benchmark = require('benchmark'),
        suite = new Benchmark.Suite('String using indeof vs regex.test', {
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


    suite.add('RegExp#test', function() {
        var str = 'Hello World!';
        /o/.test(str);
    });

    suite.add('String#indexOf', function() {
        var str = 'Hello World!';
        (str.indexOf('o') > -1);
    });

    suite.run({
        'async': false
    });

}());
