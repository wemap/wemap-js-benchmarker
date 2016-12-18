/* global module */
(function() {

    'use strict';

    module.exports = {
        name: 'Create DOM Element',
        cases: {
            'createElement': function() {
                var parent = document.createElement('div'),
                    marker = document.createElement('div'),
                    icon = document.createElement('img'),
                    plusSign = document.createElement('span');
                marker.className += ' multipoint-marker';
                icon.className += ' multipoint_icon';
                plusSign.className += ' multipoint_plus_sign ';
                marker.appendChild(icon);
                marker.appendChild(plusSign);
                parent.appendChild(marker);
            },
            'createElement + setAttribute': function() {
                var parent = document.createElement('div'),
                    marker = document.createElement('div'),
                    icon = document.createElement('img'),
                    plusSign = document.createElement('span');
                marker.setAttribute('class', 'multipoint-marker');
                icon.setAttribute('class', 'multipoint_icon');
                plusSign.setAttribute('class', 'multipoint_plus_sign');
                marker.appendChild(icon);
                marker.appendChild(plusSign);
                parent.appendChild(marker);
            },
            'createDocumentFragment': function() {
                var parent = document.createElement('div'),
                    fragment = document.createDocumentFragment(),
                    marker = document.createElement('div'),
                    icon = document.createElement('img'),
                    plusSign = document.createElement('span');
                marker.className += ' multipoint-marker';
                icon.className += ' multipoint_icon';
                plusSign.className += ' multipoint_plus_sign ';
                fragment.appendChild(marker);
                marker.appendChild(icon);
                marker.appendChild(plusSign);
                parent.appendChild(fragment);
            },
            'innerHTML': function() {
                var parent = document.createElement('div'),
                    elts = '<div class="multipoint-marker">';
                elts += '<img class="multipoint_icon"/>';
                elts += '<span class="multipoint_plus_sign"></span>';
                elts += '</div>';
                parent.innerHTML = elts;
            }
        }
    };

}());
