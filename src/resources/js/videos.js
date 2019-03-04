"use strict";

// probably want to get this from a server somewhere
// https://raw.githubusercontent.com/samuelstevens/social-media-nic-patch/master/api/videos/data.json

var getData = function(callback) {
  var request = new XMLHttpRequest();

  request.onreadystatechange = function() {
    if (request.readyState === 4) {
      if (request.status === 200) {
        if (callback) callback(request);
      } else {
        console.log("Error");
      }
    }
  };

  request.open(
    "GET",
    "https://raw.githubusercontent.com/samuelstevens/social-media-nic-patch/master/api/videos/data.json"
  );
  request.send();
};

var buildAnswer = function(answer, questionIndex, answerIndex) {
  return (
    '<div class="col-md-6 col-12"><div class="button button-sm" onclick="submitAnswer(' +
    questionIndex +
    ", " +
    answerIndex +
    ')">' +
    answer +
    "</div></div>"
  );
};

var buildQuestion = function(problem, problemIndex) {
  var html = "";

  // html += "<li>";
  html += '<p class="main-text">' + problem.question + '</p><div class="row">';
  for (var i = 0; i < problem.answers.length; i++) {
    html += buildAnswer(problem.answers[i], problemIndex, i);
  }
  html += "</div>";
  // html += "</li>";

  return html;
};

var buildHTML = function(feedback) {
  var html = "";

  for (var i = 0; i < feedback.length; i++) {
    html += buildQuestion(feedback[i], i);
  }

  return html;
};

var init = function() {
  getData(function(data) {
    var json = JSON.parse(data.response);
    var video = json[0];
    document.getElementById("video-player").src = video.link;
    document.getElementById("title").innerHTML =
      video.channel + " - " + video.title;
    getData();
    document.getElementById("questions").innerHTML = buildHTML(video.feedback);
  });
};

var submitAnswer = function(questionIndex, answerIndex) {
  
};

if (typeof window.onload == "function") {
  var oldOnload = window.onload;
  window.onload = function() {
    oldOnload();
    init();
  };
}
