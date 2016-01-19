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
/*global window, prettyPrint, hljs*/
/*jslint browser:true, white:true*/


(function () {
  'use strict';

  var wcf = function () {
    // return the regex markup, so the language can be dynamic
    var replacement = function (matchedText, language) {
      // if (language === 'l') {
      //   language = 'js';
      // } else {
      language = language || 'js';
      // }
      // console.log(language);
      // console.log('<code class="prettyprint lang-' + language + '">' + matchedText + '</code>');
      return ('<code class="' + language + '">' + matchedText + '</code>');
    };
    var pageContentArray = Array.prototype.slice.call(document.getElementById('pageContainer').querySelectorAll('.content'));
    pageContentArray.map(function (i) {
      // only match on the textcontent so we avoid false positives ...
      // but first we have to see if a code block is in the html,
      // so we don't create tags on every new event
      if (!i.innerHTML.match(/<code/gi)) {
        // match the code language, so we can support a lot of awesome syntax highlighting
        var codeLanguage = String('js');
        // var codeLanguage = String(i.textContent.match(/^```[\w]+$/gim)).slice(3);
        // multi-line code
        var tripleTickRegex = new RegExp(/^```[^]*^```/gm);
        if (i.textContent.match(tripleTickRegex)) {
          i.innerHTML = i.innerHTML.replace(tripleTickRegex, replacement('$&', codeLanguage));
        }
        // inline code
        var singleTickRegex = new RegExp(/`[^`]*`/g);
        if (i.textContent.match(singleTickRegex)) {
          i.innerHTML = i.innerHTML.replace(singleTickRegex, replacement('$&', codeLanguage));
        }
      }
    });
  };

  // need to fire once on load, since the 'focusin' event doesn't happen right away
  window.addEventListener('load', wcf);
  // syntax highlight after the markup
  // window.addEventListener('load', prettyPrint);
  window.addEventListener('load', hljs.initHighlighting);

  // focusin seems to work really well for the type
  // of changes in workflowy and isn't *too* expensive
  document.addEventListener('focusin', wcf);
  // syntax highlight after the markup
  // document.addEventListener('focusin', prettyPrint);
  document.addEventListener('focusin', hljs.initHighlighting);
}());
