/*! workflowyCodeFormatter v0.3.0 by ryanpcmcquen */
//
// Ryan P.C. McQuen | Everett, WA | ryan.q@linux.com
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation; either version 2 of the License, or
// (at your option) any later version, with the following exception:
// the text of the GPL license may be omitted.
//
// This program is distributed in the hope that it will be useful, but
// without any warranty; without even the implied warranty of
// merchantability or fitness for a particular purpose. Compiling,
// interpreting, executing or merely reading the text of the program
// may result in lapses of consciousness and/or very being, up to and
// including the end of all existence and the Universe as we know it.
// See the GNU General Public License for more details.
//
// You may have received a copy of the GNU General Public License along
// with this program (most likely, a file named COPYING).  If not, see
// <https://www.gnu.org/licenses/>.
//
/*global window, PR*/
/*jslint browser:true, white:true*/

// load in latest google code-prettify
(function () {
  'use strict';
  var gcp = document.createElement('script');
  gcp.type = 'text/javascript';
  gcp.async = true;
  gcp.src = 'https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?lang=aea&lang=agc&lang=apollo&lang=basic&lang=cbm&lang=cl&lang=clj&lang=css&lang=dart&lang=el&lang=erl&lang=erlang&lang=fs&lang=go&lang=hs&lang=lasso&lang=lassoscript&lang=latex&lang=lgt&lang=lisp&lang=ll&lang=llvm&lang=logtalk&lang=ls&lang=lsp&lang=lua&lang=matlab&lang=ml&lang=mumps&lang=n&lang=nemerle&lang=pascal&lang=proto&lang=r&lang=rd&lang=rkt&lang=rust&lang=s&lang=scala&lang=scm&lang=Splus&lang=sql&lang=ss&lang=swift&lang=tcl&lang=tex&lang=vb&lang=vbs&lang=vhd&lang=vhdl&lang=wiki&lang=xq&lang=xquery&lang=yaml&lang=yml';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gcp, s);
}());

(function () {
  'use strict';

  var wcf = function () {
    var replacement = function (matchedText, language) {
      if (language === 'l') {
        language = 'js';
      } else {
        language = language || 'js';
      }
      return ("<code class='prettyprint lang-" + (language) + "'>" + String(matchedText) + "</code>");
    };
    var pageContentArray = Array.prototype.slice.call(document.getElementById('pageContainer').querySelectorAll('.content'));
    pageContentArray.map(function (i) {
      // only match on the textcontent so we avoid false positives ...
      // but first we have to see if a code block is in the html,
      // so we don't create tags on every new event
      if (!i.innerHTML.match(/<code/gi)) {
        // match the code language, so we can support a lot of awesome syntax highlighting
        var codeLanguage = String(i.textContent.match(/```+.+/)).slice(3);
        // multi-line code
        var tripleTickRegex = new RegExp(/^```[\w\W]*?^```$/gim);
        if (i.textContent.match(tripleTickRegex)) {
          i.innerHTML = i.innerHTML.replace(tripleTickRegex, replacement("$&", codeLanguage));
        }
        // inline code
        var singleTickRegex = new RegExp(/`[^`]+`/g);
        if (i.textContent.match(singleTickRegex)) {
          i.innerHTML = i.innerHTML.replace(singleTickRegex, replacement("$&", codeLanguage));
        }
      }
    });
  };

  // need to fire once on load, since the 'focusin' event doesn't happen right away
  window.addEventListener('load', function () {
    wcf();
  });
  // syntax highlight after the markup
  window.addEventListener('load', function () {
    // wrapped in a try/catch because the browser thinks PR doesn't exist,
    // even though it works ...
    try {
      PR.prettyPrint();
    } catch (ignore) {}
  });

  // focusin seems to work really well for the type
  // of changes in workflowy and isn't *too* expensive
  document.addEventListener('focusin', function () {
    wcf();
  });
  // syntax highlight after the markup
  document.addEventListener('focusin', function () {
    // wrapped in a try/catch because the browser thinks PR doesn't exist,
    // even though it works ...
    try {
      PR.prettyPrint();
    } catch (ignore) {}
  });
}());
