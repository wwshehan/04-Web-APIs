var startBtn = document.getElementById("startBtn");
var submitScoreBtn = document.getElementById("submitScoreBtn");

var timerEl = document.getElementById("timer");
var ScoreEl = document.getElementById("completeScore");

var questionText = document.getElementById("questions");
var answerChoice = document.getElementById("answers");

var questionNumber = -1;
var answer;
var timeLeft = 70;
var userInit;

function render() {
  document.getElementById("home").classList.add("d-none");
  document.getElementById("questionDisplay").classList.remove("d-none");

  setTimer();
  questionGen();
}

function setTimer() {
  var count = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Time:" + timeLeft;

    if (timeLeft === 0 || timeLeft < 0 || questionNumber === questions.length){
      clearInterval(count);
      setTimeout(displayScore, 500);
    }
  }, 1000);
}

function questionGen() {
  questionNumber++;

  answer = questions[questionNumber].answer;

  questionText.textContent = questions[questionNumber].title;
  answerChoice.innerHTML = "";

  var choices = questions[questionNumber].choices;

  for (var i = 0; i < choices.length; i++) {
    var nextChoice = document.createElement("button");
    nextChoice.textContent = choices[i];
    answerBtn = answerChoice
      .appendChild(nextChoice)
      .setAttribute("class", "btn-block btn-secondary");
  }
}

function displayScore() {
  document.getElementById("questionDisplay").classList.add("d-none");
  document.getElementById("completeScore").classList.remove("d-none");
  ScoreEl.textContent = "Your score is " + timeLeft;
}

startBtn.addEventListener("click", render);
submitScoreBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  sumScore();
  window.location.href = "highscores.html";
});

function sumScore() {
  userInit = document.getElementById("userName").nodeValue;
  var updatedScore = {
    name: userInit,
    score: timeLeft,
  };
  var highScore = JSON.parse(localStorage.getItem("highScores" || []));
  highScore.push(updatedScore);
  localStorage.setItem("highScore", JSON.stringify(highScore));
}

function ansFBHide() {
  var feedbackEl = document.getElementsByClassName("answerFeedback")[0];
  feedbackEl.style.display = "none";
}
function ansFBShow() {
  var feedbackEl = document.getElementsByClassName("answerFeedback")[0];
  feedbackEl.removeAttribute = "style";
}

answerChoice.addEventListener("click", function (event) {
  var feedbackEl = document.getElementsByClassName("answerFeedback")[0];

  if (answer === event.target.textContent) {
    feedbackEl.innerHTML = "Correct answer!";
    setTimeout(ansFBHide, 1000);
    timeLeft = timeLeft + 5;
    ansFBShow();
  } else {
    feedbackEl.innerHTML = "Sorry, wrong answer.";
    setTimeout(ansFBShow, 1000);
    timeLeft = timeLeft - 10;
    ansFBShow();
  }
  questionGen();
});
