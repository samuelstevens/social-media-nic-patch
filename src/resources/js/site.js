"use strict";

var load = function() {
  // Header link
  // Could remove this/add to it, it's currently not very useful
  var headerDiv = document.getElementById("js-header");
  headerDiv.innerHTML = '<a href="/">' + headerDiv.innerHTML + "</a>";

  //
  var addictivePlatforms = ["Facebook", "Instagram", "Reddit", "Twitter"];
  var tags = document.getElementsByClassName("addictive-platform");
  for (var i = 0; i < tags.length; i++) {
    tags[i].innerHTML =
      addictivePlatforms[Math.floor(Math.random() * addictivePlatforms.length)];
  }
};

window.onload = load;
