"use strict";

var load = function() {
  //
  var addictivePlatforms = ["Facebook", "Instagram", "Reddit", "Twitter"];
  var tags = document.getElementsByClassName("addictive-platform");
  for (var i = 0; i < tags.length; i++) {
    tags[i].innerHTML =
      addictivePlatforms[Math.floor(Math.random() * addictivePlatforms.length)];
  }
};

window.onload = load;
