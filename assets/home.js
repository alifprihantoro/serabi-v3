"use strict";

var _this = void 0;

var ccls = function ccls() {
  // The URL changed...
  var link = _this.window.location.href; // console.log(link)

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
}); //sw

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
