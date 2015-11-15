(function() {
  var wcf = function() {
    // i love slice calls
    Array.prototype.slice.call(document.getElementById('pageContainer').querySelectorAll('.content')).map(function(i) {
      // this only seems to work if set as a var
      var replacement = '<code>' + '$&' + '</code>';
      // only replace on the textcontent so we don't jack up the html,
      // format triple backticks first, in case code inside of
      // triple backticks contains backticks
      // (p.s. this is even capable of formatting itself!)
      if (i.textContent.match(/```[^]*```/g)) {
        i.innerHTML = i.textContent.replace(/```[^]*```/g, replacement);
      } else {
        i.innerHTML = i.textContent.replace(/`[^`]*`/g, replacement);
      }
    });
  };

  // need to fire once on load, since the 'focusin' event doesn't happen right away
  window.addEventListener('load', wcf);
  // focusin seems to work really well for the type
  // of changes in workflowy and isn't *too* expensive
  document.addEventListener('focusin', wcf);
}());
