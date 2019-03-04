"use strict";

// probably want to get this from a server somewhere
var videos = [
  {
    link: "https://www.youtube-nocookie.com/embed/MBRqu0YOH14",
    channel: "Kurzgesagt",
    title: "Optimistic Nihilism",
    feedback: [
      {
        question: "HERE IS A QUESTION?",
        answers: ["Answer 1", "ANSWER 2", "ANSWER 3", "ANSWER 4"],
        correct: "ANSWER 1"
      },
      {
        question: "HERE IS A QUESTION?",
        answers: ["ANSWER 1", "ANSWER 2", "ANSWER 3", "ANSWER 4"],
        correct: "ANSWER 1"
      },
      {
        question: "HERE IS A QUESTION?",
        answers: ["ANSWER 1", "ANSWER 2", "ANSWER 3", "ANSWER 4"],
        correct: "ANSWER 1"
      }
    ]
  }
];

var buildAnswer = function(answer) {
  return '<div class="col-md-6 col-12"><div class="button button-sm">' + answer + "</div></div>";
};

var buildQuestion = function(problem) {
  var html = "";

  // html += "<li>";
  html += '<p class="main-text">' + problem.question + '</p><div class="row">';
  for (var i = 0; i < problem.answers.length; i++) {
    html += buildAnswer(problem.answers[i]);
  }
  html += "</div>"
  // html += "</li>";

  return html;
};

var buildHTML = function(feedback) {
  var html = "";
  // html += "<ol>";
  for (var i = 0; i < feedback.length; i++) {
    html += buildQuestion(feedback[i]);
  }
  // html += "</ol>";

  return html;
};

var init = function() {
  var video = videos[0];

  document.getElementById("video-player").src = video.link;
  document.getElementById("title").innerHTML =
    video.channel + " - " + video.title;

  document.getElementById("questions").innerHTML = buildHTML(video.feedback);
};

if (typeof window.onload == "function") {
  var oldOnload = window.onload;
  window.onload = function() {
    oldOnload();
    init();
  };
}
