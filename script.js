const start = document.getElementById ("start");
const quiz = document.getElementById ("quiz");
const question = document.getElementById ("questions");
const counter = document.getElementById ("counter");
const timeGauge = document.getElementById ("timeGauge");
const choiceA = document.getElementById ("A");
const choiceB = document.getElementById ("B");
const choiceC = document.getElementById ("C");
const choiceD = document.getElementById ("D");
const scoreDiv = document.getElementById ("score");
var questionNumber = 0

function loadQuestion() {
    question.textContent = arrayQuestions[questionNumber].title;

let arrayQuestions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts",
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses",
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above",
    },
    {
      title:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      title:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    }
  ];}
