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
/* eslint no-invalid-this: 0 */
(function() {

    'use strict';

    var IS_RUNNING = false,
        SUITE_NAME = false;

    /**
     * Store results in localstorage
     */
    function __storeResults (bench) {
        var date = new Date(),
            updated = date.toLocaleDateString();
        updated += ' ' + date.toLocaleTimeString();
        localStorage.setItem(SUITE_NAME, JSON.stringify({
            updated: updated,
            fastest: bench.filter('fastest').map('name')
        }));
    }

    /**
     * Disable all `.single-run` button when a new benchmark is launched
     */
    function __disableButtons () {
        document.querySelectorAll('.single-run')
            .forEach(function(item) {
                item.parentElement.classList.add('disabled');
            });
    }

    /**
     * Active current clicked button
     * @return {String}     Benchmark suite's name from dataset value
     */
    function __activeButton (item) {
        var parent = item.parentElement.parentElement;
        parent.classList.remove('disabled');
        parent.classList.add('running');
        item.querySelector('span').innerText = '...';
        // get value `data-suitname` from element
        return parent.dataset.suitename;
    }

    /**
     * Called when all suites in a benchmark are complete
     */
    function __onBenchmarkComplete () {
        var parent = null;
        // var name = event.name;
        __storeResults(this);
        document.querySelectorAll('.single-run')
            .forEach(function(item) {
                parent = item.parentElement.parentElement;
                parent.classList.remove('disabled');
                item.parentElement.classList.remove('running');
                item.querySelector('span').innerText = 'Run';
            });
        IS_RUNNING = false;
    }

    /**
     * Called when user click on a `.single-run` button
     * Launch a new benchmark defined on `data-suitname` button's value
     */
    function __onButtonClick () {
        if (IS_RUNNING) {
            // if already running
            return false;
        }
        __disableButtons();
        IS_RUNNING = true;
        SUITE_NAME = __activeButton(this);
        // run benchmark in a browser context after all CSS are applied
        setTimeout(function __runTimeout__ () {
            window.run(SUITE_NAME, __onBenchmarkComplete);
        }, 200);
        return true;
    }

    /**
     * Called at script loaded;
     */
    function __initialize () {
        // add click listener to each button with CSS class'single-run'
        document.querySelectorAll('.single-run')
            .forEach(function(item) {
                var str = '',
                    elt = null,
                    parent = item.parentElement.parentElement,
                    name = parent.dataset.suitename,
                    stored = localStorage.getItem(name);
                try {
                    stored = JSON.parse(stored);
                    if (stored) {
                        elt = parent.querySelector('.row-bottom');
                        str = '<em>' + stored.updated + '</em>';
                        str += '&nbsp;<em>' + stored.fastest + '</em>';
                        elt.innerHTML = str;
                    }
                } catch (err) {
                    //
                }
                item.addEventListener('click', __onButtonClick);
            });
    }

    /* ------------------------------------

    Entry Point

    */
    __initialize();

}());
