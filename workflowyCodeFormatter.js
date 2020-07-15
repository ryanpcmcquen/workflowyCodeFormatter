/*! workflowyCodeFormatter v0.8.2 by ryanpcmcquen */
//
// Ryan P. C. McQuen | Everett, WA

/*global window, codeFormatter, PR*/
/*jslint browser:true*/

(function() {
    'use strict';

    var nikeIt = function() {
        codeFormatter('.content[contenteditable]');
        // After several rejections from add-on stores
        // complaining about files inside of Google
        // Prettify, I have decided to remove it
        // from this project.
        // PR.prettyPrint();
    };

    document.addEventListener('DOMContentLoaded', function() {
        nikeIt();
    });

    // Fire on load, since the "focusin" event doesn't happen right away.
    window.addEventListener('load', function() {
        nikeIt();
    });

    window.addEventListener('focusin', function() {
        nikeIt();
    });

    window.addEventListener('click', function() {
        nikeIt();
    });

    nikeIt();
})();
