/* global module */
(function() {

    'use strict';

    module.exports = {
        name: 'String.indexOf vs Regex.test',
        cases: {
            'RegExp#test': function() {
                var str = 'Hello World!';
                /o/.test(str);
            },
            'String#indexOf': function() {
                var str = 'Hello World!';
                (str.indexOf('o') > -1);
            }
        }
    };

}());
