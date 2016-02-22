/*! codeFormatter v0.1.0 by ryanpcmcquen */
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

/*global window*/
/*jslint browser:true, white:true*/

(function () {

  'use strict';

  var codeFormatter = function (selector) {
    var replacement = function (matchedText, language) {
      language = language || 'js';
      return ("<code class='prettyprint lang-" + (language) + "'>" + String(matchedText) + "</code>");
    };
    var contentArray = Array.prototype.slice.call(document.querySelectorAll(selector));
    // multi-line code
    var tripleTickRegex = new RegExp(/^```{1}[\w\W]*?^```$/gim);
    // inline code
    var singleTickRegex = new RegExp(/`[^`]+`/g);
    var codeLanguageRegex = new RegExp(/```{1}.*/);
    contentArray.map(function (i) {
      if (i.hasAttribute('contenteditable')) {
        if (!i.innerHTML.match(/<code/gi)) {
          // single tick regex only works if it is outside the triple tick match
          if (i.textContent.match(singleTickRegex)) {
            i.innerHTML = i.innerHTML.replace(singleTickRegex, replacement("$&"));
          }
          // match the code language, so we can
          // support a lot of awesome syntax highlighting
          if ((i.textContent.match(codeLanguageRegex) !== null) && (i.textContent !== undefined)) {
            // this needs a little extra filtering, but cascading is cool
            var codeLanguage = String(i.textContent.match(codeLanguageRegex)).slice(3).split(/(\s+)/)[0].trim();
            if (i.textContent.match(tripleTickRegex)) {
              i.innerHTML = i.innerHTML.replace(tripleTickRegex, replacement("$&", codeLanguage));
            }
          }
        }
      }
    });
  };

  // attach globally
  window.codeFormatter = codeFormatter;

}());
