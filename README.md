# workflowyCodeFormatter

A simple and lightweight solution to the WorkFlowy code dilemma.

![WCF Marquee](https://raw.githubusercontent.com/ryanpcmcquen/workflowyCodeFormatter/master/wcf_marquee.png)

### One user said:

---

<blockquote class="twitter-tweet" data-conversation="none" lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/ryanpcmcquen">@ryanpcmcquen</a> <a href="https://twitter.com/WorkFlowy">@WorkFlowy</a> Nice and light. Very WorkFlowian.</p>&mdash; J Rawlins (@jprawlins) <a href="https://twitter.com/jprawlins/status/665998935643656192">November 15, 2015</a></blockquote>

---

### What happened to syntax highlighting?

If you've been a user for a while, you may remember that this extension supported language specific syntax highlighting at one time. Unfortunately, both the Chrome and Firefox extension reviews have become more stringent over time, and even though I was using a reputable open source syntax highlighting library (https://github.com/googlearchive/code-prettify), I was constantly getting rejections or would randomly have the extension unpublished because some file in that library was flagged as nefarious. For that reason, I've switched to Microlight (https://asvd.github.io/microlight/). Now the syntax highlighting is language and theme agnostic, and baked right into the `codeFormatter` library (https://github.com/ryanpcmcquen/codeFormatter).

### Web store README

---

Make backtick wrapped text look like code! {openSource}

An open source extension to make backtick wrapped text look like code in WorkFlowy.

Unlike 'WorkFlowy for coders', this solution is lightweight, pure JavaScript, and still allows editing text in all views.

Any text wrapped in 1 or 3 backticks will be rendered as code (inspired by Markdown syntax).

Use 1 backtick for inline code, and 3 backticks to wrap multi-line code. Note that the 3 backticks MUST be on their own line.

Note that extensions do not work inside of Chrome apps, so if you are using the WorkFlowy 'app', this extension will not be running. This is a limitation of Chrome apps and extensions.

Enjoy!

https://github.com/ryanpcmcquen/workflowyCodeFormatter

---

#### Web store link:

https://chrome.google.com/webstore/detail/workflowy-code-formatter/kglihipcanlbglgikjghocmbbbbkfemn

---

![Before WCF 1](https://raw.githubusercontent.com/ryanpcmcquen/workflowyCodeFormatter/master/before_WCF__1.jpg)

![After WCF 1](https://raw.githubusercontent.com/ryanpcmcquen/workflowyCodeFormatter/master/after_WCF__1.jpg)

![Before WCF 2](https://raw.githubusercontent.com/ryanpcmcquen/workflowyCodeFormatter/master/before_WCF__2.jpg)

![After WCF 2](https://raw.githubusercontent.com/ryanpcmcquen/workflowyCodeFormatter/master/after_WCF__2.jpg)

If you don't already have a WorkFlowy account, please consider using my [referral link](https://workflowy.com/invite/32bf69e5.lnx) (we'll both get bonus free space)! :tada:

---

Thanks to [Corri Blair](http://www.corriblair.com/) for the awesome graphics!

This extension also uses (as a submod):

https://github.com/ryanpcmcquen/codeFormatter
