"use strict";

// probably want to get this from a server somewhere
// https://raw.githubusercontent.com/samuelstevens/social-media-nic-patch/master/api/videos/data.json

var getData = function(callback) {
  // var request = new XMLHttpRequest();
  //
  // request.onreadystatechange = function() {
  //   if (request.readyState === 4) {
  //     if (request.status === 200) {
  //       if (callback) callback(JSON.parse(request.response););
  //     } else {
  //       console.log("Error");
  //     }
  //   }
  // };
  //
  // request.open(
  //   "GET",
  //   "https://raw.githubusercontent.com/samuelstevens/social-media-nic-patch/master/api/videos/data.json"
  // );
  // request.send();
  var responseJson = [
    {
      link: "https://www.youtube-nocookie.com/embed/MBRqu0YOH14",
      channel: "Kurzgesagt",
      title: "Optimistic Nihilism"
    },
    {
      link: "https://www.youtube-nocookie.com/embed/sNhhvQGsMEc",
      channel: "Kurzgesagt",
      title: "The Fermi Paradox"
    },
    {
      link: "https://www.youtube-nocookie.com/embed/vo4pMVb0R6M",
      channel: "CrashCourse",
      title: "Intro to Psychology"
    }
  ];

  callback(responseJson);
};

var init = function() {
  getData(function(data) {
    // need to pick different index
    var video = data[Math.floor(Math.random() * data.length)];;

    document.getElementById("video-player").src = video.link;
    document.getElementById("title").innerHTML =
      video.channel + " - " + video.title;
  });
};

if (typeof window.onload == "function") {
  var oldOnload = window.onload;
  window.onload = function() {
    oldOnload();
    init();
  };
}
