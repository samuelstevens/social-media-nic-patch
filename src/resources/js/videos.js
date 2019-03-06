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
      link: "https://www.youtube-nocookie.com/embed/vo4pMVb0R6M",
      channel: "CrashCourse",
      title: "Intro to Psychology"
    },
    {
      link: "https://www.youtube-nocookie.com/embed/sNhhvQGsMEc",
      channel: "Kurzgesagt",
      title: "The Fermi Paradox"
    },
    {
      link: "https://www.youtube-nocookie.com/embed/ft3vTaYbkdE",
      channel: "minutephysics",
      title: "How To Stop Structures from Shaking"
    },
    {
      link: "https://www.youtube-nocookie.com/embed/3MqYE2UuN24",
      channel: "minutephysics",
      title: "Is It Better to Walk or Run in the Rain?"
    }
  ];

  callback(responseJson);
};

var data = [];
var currentIndex = 0;

var setVideo = function(index) {
  var video = data[index];

  document.getElementById("video-player").src = video.link;
  document.getElementById("title").innerHTML =
    video.channel + " - " + video.title;
};

var incrementVideo = function() {
  currentIndex += 1;
  if (currentIndex >= data.length) {
    currentIndex = 0;
  }

  setVideo(currentIndex);
};

var init = function() {
  getData(function(newData) {
    data = newData;
    currentIndex = Math.floor(Math.random() * data.length);
    setVideo(currentIndex);
  });
};

addLoadEvent(init);
