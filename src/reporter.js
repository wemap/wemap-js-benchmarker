/* eslint no-console: 0, no-undefined: 0 */
/* global module */
(function() {

    'use strict';

    function __output (msg) {
        var isdocument = window && (window !== undefined || window !== 'undefined');
        if (isdocument) {
            //
        }
        console.log(msg);
        return false;
    }

    module.exports = {
        'onStart': function() {
            // called when the suite starts running
            var msg = 'Start suite: ' + this.name;
            __output(msg);
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
