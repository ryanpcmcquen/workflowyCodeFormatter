// workflowyCodeFormatter v0.1.2 by @ryanpcmcquen
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
/*global window*/
/*jslint browser:true, white:true*/

(function() {
  'use strict';
  var wcf = function() {
    // i love slice calls
    Array.prototype.slice.call(document.getElementById('pageContainer').querySelectorAll('.content')).map(function(i) {
      // this only seems to work if set as a var
      var replacement = '<code>' + '$&' + '</code>';
      // only match on the textcontent so we avoid false positives
      //
      // format triple backticks first, in case code inside of
      // triple backticks contains backticks
      // (p.s. this is even capable of formatting itself!)
      if (i.textContent.match(/```[^]*```/g)) {
        i.innerHTML = i.innerHTML.replace(/```[^]*```/g, replacement);
      } else {
        i.innerHTML = i.innerHTML.replace(/`[^`]*`/g, replacement);
      }
    });
  };

  // need to fire once on load, since the 'focusin' event doesn't happen right away
  window.addEventListener('load', wcf);
  // focusin seems to work really well for the type
  // of changes in workflowy and isn't *too* expensive
  document.addEventListener('focusin', wcf);
}());
