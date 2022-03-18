"use strict";

var ccls = function ccls() {
  // The URL changed...
  var link = window.location.href; // console.log(link)

  var cls = link.split("#")[1]; // console.log(cls)

  var body = document.getElementsByTagName("BODY")[0]; // console.log(body)

  if (cls === "" || cls == undefined) {
    body.className = "home";
  } else {
    body.className = cls;
  }
};

ccls(); // samakan kayak klick url

window.addEventListener('popstate', function () {
  ccls();
});
