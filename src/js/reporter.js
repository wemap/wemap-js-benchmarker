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
/* eslint no-console: 0, no-undefined: 0 */
/* global module */
(function() {

    'use strict';

    function __output (msg) {
        var elt = null,
            child = null,
            isdocument = window && (window !== undefined || window !== 'undefined');
        if (isdocument) {
            elt = document.getElementById('console');
            child = document.createElement('span');
            child.innerHTML = msg + '<br>';
            elt.appendChild(child);
        }
        console.log(msg);
        return false;
    }

    module.exports = {
        'onStart': function() {
            // called when the suite starts running
            var msg = 'Start suite: ' + this.name;
            __output(msg, 'start');
        },
        'onCycle': function(event) {
            // called between running benchmarks
            var msg = String(event.target);
            __output(msg, 'cycle');
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
            var fastest = this.filter('fastest').map('name'),
                slowest = this.filter('slowest').map('name'),
                msg = 'Fastest is ' + fastest.join(', ');
            __output(msg);
            msg = 'Slowest is ' + slowest.join(', ');
            __output(msg);
        }
    };

}());
