/* global module */
(function() {

    'use strict';

    module.exports = {
        name: 'Create DOM Element',
        cases: {
            'Create Element 2': function() {
                var marker, icon, plusSign;
                marker = document.createElement('div');
                icon = document.createElement('img');
                plusSign = document.createElement('span');

                marker.className += ' multipoint-marker';
                icon.className += ' multipoint_icon';
                plusSign.className += ' multipoint_plus_sign ';

                marker.appendChild(icon);
                marker.appendChild(plusSign);
            },
            'Create Element': function() {
                var marker, icon, plusSign;
                marker = document.createElement('div');
                icon = document.createElement('img');
                plusSign = document.createElement('span');

                marker.className += ' multipoint-marker';
                icon.className += ' multipoint_icon';
                plusSign.className += ' multipoint_plus_sign ';

                marker.appendChild(icon);
                marker.appendChild(plusSign);
            }
        }
    };

}());
