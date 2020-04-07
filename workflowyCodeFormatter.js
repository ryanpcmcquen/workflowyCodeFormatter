/*! workflowyCodeFormatter v0.5.3 by ryanpcmcquen */
//
// Ryan P. C. McQuen | Everett, WA

/*global window, codeFormatter, PR*/
/*jslint browser:true*/

(function () {

    "use strict";

    var nikeIt = function () {
        codeFormatter(".content");
        // Syntax highlight after the markup:
        PR.prettyPrint();
    };

    // Fire on load, since the "focusin" event doesn't happen right away.
    window.addEventListener("load", function () {
        nikeIt();
    });

    window.addEventListener("focusin", function () {
        nikeIt();
    });

}());
