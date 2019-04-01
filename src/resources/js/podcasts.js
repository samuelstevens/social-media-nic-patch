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
      link: "https://www.npr.org/player/embed/701212707/701674768",
      channel: "How I Built This with Guy Raz",
      title: "Logic"
    },
    {
      link: "https://www.npr.org/player/embed/699096835/699509919",
      channel: "How I Built This with Guy Raz",
      title: "Squarespace"
    },
    {
      link: "https://www.npr.org/player/embed/684560464/684687504",
      channel: "How I Built This with Guy Raz",
      title: "Five Guys"
    },
    {
      link: "https://www.npr.org/player/embed/678686653/679178107",
      channel: "How I Built This with Guy Raz",
      title: "Kickstarter"
    },
    {
      link: "https://www.npr.org/player/embed/698762671/698844215",
      channel: "Planet Money",
      title: "New Orleans Vs. Airbnb"
    },
    {
      link: "https://www.npr.org/player/embed/148603681/148654991",
      channel: "Planet Money",
      title: "China's Giant Pool Of Dollars"
    },
    {
      link: "https://www.npr.org/player/embed/141913370/141920436",
      channel: "Planet Money",
      title: "Inside Washington's Money Machine"
    }
  ];

  callback(responseJson);
};

var data = [];
var currentIndex = 0;

var setPodcast = function(index) {
  var podcast = data[index];

  document.getElementById("podcast-player").src = podcast.link;
  document.getElementById("title").innerHTML =
    podcast.channel + " - " + podcast.title;
};

var incrementPodcast = function() {
  currentIndex += 4;
  currentIndex %= data.length;

  setPodcast(currentIndex);
};

var init = function() {
  getData(function(newData) {
    data = newData;
    currentIndex = Math.floor(Math.random() * data.length);
    setPodcast(currentIndex);
  });
};

addLoadEvent(init);
