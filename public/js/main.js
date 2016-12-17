/* eslint no-invalid-this: 0 */
/* global */
(function() {

    'use strict';

    // add click listener to each button with CSS class'single-run'
    document.querySelectorAll('.single-run')
        .forEach(function(item) {
            item.addEventListener('click', function() {
                // get field data-xxxxx from element
                var suitename = this.dataset.suitename;
                // run benchmark in a browser context
                window.run(suitename);
            });
        });

}());
