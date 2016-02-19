/*! codeFormatter v0.1.0 by ryanpcmcquen */

/*global window, PR*/
/*jslint browser:true, white:true*/

// load in latest google code-prettify
(function () {
  'use strict';
  var gcp = document.createElement('script');
  gcp.type = 'text/javascript';
  gcp.src = 'https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?autoload=false&lang=css&lang=dart&lang=erlang&lang=go&lang=hs&lang=lua&lang=r&lang=rust&lang=sql&lang=wiki';
  var s = document.getElementsByTagName('head')[0];
  s.parentNode.insertBefore(gcp, s);
}());

(function () {

  'use strict';
  var codeFormatter = function (selector) {
    var replacement = function (matchedText, language) {
      return ("<code class='prettyprint lang-" + (language) + "'>" + String(matchedText) + "</code>");
    };
    var contentArray = Array.prototype.slice.call(document.querySelectorAll(selector));
    // multi-line code
    var tripleTickRegex = new RegExp(/^```{1}[\w\W]*?^```$/gim);
    // inline code
    var singleTickRegex = new RegExp(/`[^`]+`/g);
    var codeLanguageRegex = new RegExp(/^```{1}.*/);
    contentArray.map(function (i) {
      if (i.hasAttribute('contenteditable')) {
        if (!i.innerHTML.match(/<code/gi)) {
          if (i.textContent.match(codeLanguageRegex) !== null) {
            // match the code language, so we can
            // support a lot of awesome syntax highlighting
            // this needs a little extra filtering, but cascading is cool
            var codeLanguage = String(i.textContent.match(codeLanguageRegex)).slice(3).split(/(\s+)/)[0].trim();
            if (i.textContent.match(tripleTickRegex)) {
              i.innerHTML = i.innerHTML.replace(tripleTickRegex, replacement("$&", codeLanguage));
            }
            if (i.textContent.match(singleTickRegex)) {
              i.innerHTML = i.innerHTML.replace(singleTickRegex, replacement("$&", codeLanguage));
            }
          }
        }
      }
    });
  };

  window.codeFormatter = codeFormatter;

}());
