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
            'innerHTML.join()': function() {
                var parent = document.createElement('div'),
                    marker = document.createElement('div'),
                    childs = [
                        '<img class="multipoint_icon"/>',
                        '<span class="multipoint_plus_sign"></span>'
                    ];
                marker.className = 'multipoint-marker';
                marker.innerHTML = childs.join('');
                parent.appendChild(marker);
            },
            'innerHTML.join() 2': function() {
                var childs = [],
                    parent = document.createElement('div'),
                    marker = document.createElement('div');
                childs.push('<img class="multipoint_icon"/>');
                childs.push('<span class="multipoint_plus_sign"></span>');
                marker.className = 'multipoint-marker';
                marker.innerHTML = childs.join('');
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
            'createDocumentFragment 2': function() {
                var parent = document.createElement('div'),
                    marker = document.createElement('div'),
                    fragment = document.createDocumentFragment(),
                    icon = document.createElement('img'),
                    plusSign = document.createElement('span');
                marker.className += ' multipoint-marker';
                icon.className += ' multipoint_icon';
                plusSign.className += ' multipoint_plus_sign ';
                fragment.appendChild(icon);
                fragment.appendChild(plusSign);
                marker.appendChild(fragment);
                parent.appendChild(fragment);
            }
        }
    };

}());
