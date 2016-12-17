/* eslint no-console: 0 */
/* global module */
(function() {

    'use strict';

    module.exports = {
        'onStart': function(event) {
            // called when the suite starts running
            console.log(String(event.target));
        },
        'onCycle': function(event) {
            // called between running benchmarks
            console.log(String(event.target));
        },
        'onAbort': function() {
            // called when aborted
            console.log('onAbort', arguments);
        },
        'onError': function() {
            // called when a test errors
            console.log('onError', arguments);
        },
        'onReset': function() {
            // called when reset
            console.log('onReset', arguments);
        },
        'onComplete': function() {
            // called when the suite completes running
            var fastest = this.filter('fastest').map('name');
            console.log('Fastest is ' + fastest);
        }
    };

}());
