//VARIBALES//
var buttonA = $("#A");
var buttonB = $("#B");
var buttonC = $("#C");
var buttonD = $("#D");
var startButton = $("#startbtn");
var quizQuestions = $("#questions");
var possAnswers = $("#answers");
var finalScore = $("#Final-Score");
var submitbtn = $("#submit-btn");
var UserInitials = $("#initials");
var scorePG = $("#score-pg");
var playAgainbtn = $("#play-again");
var endGame = $("#end-game");
var feedback = $("#wrong/right");
var questionContainer = $("#containerQ");
var highscoreLink = $("#highscore");
var countdown = $("#timer");

// Global Variables// -- what data do we care about?
var score = 60; // time left
var correctAnswers;
var storedScore;
var CurrentQuestion = 0;

//Quiz Questions - 5 total and they need to be in an array//
var quizQuestions = [
  {
    //question [0]
    question: "What is === operator?",
    answerA: "Checks the equity of two strings",
    answerB: "A strict operator, it checks both type and value",
    answerC: "It is an athrimetic operator and is used to evaluate equations",
    answerD: "Sets to variables equal to each other",
    correctAnswer: "B",
  },
  {
    //question [1]
    question:
      "Which of the following combines the text of two strings and returns a new string?",
    answerA: "append()",
    answerB: "attach()",
    answerC: "concat()",
    answerD: "none of the above",
    correctAnswer: "C",
  },
  {
    //question [2]
    question: "Which of the following is not a way to declare a variable?",
    answerA: "var",
    answerB: "let",
    answerC: "const",
    answerD: "decl",
    correctAnswer: "D",
  },
  {
    //question [3]
    question: "Which of the following is not a primative data type?",
    answerA: "Boolean",
    answerB: "String",
    answerC: "Object",
    answerD: "Underfined",
    correctAnswer: "C",
  },
  {
    //question [4]
    question: "Where do you place the script tag in the HTML?",
    answerA: "Between the closing body tag and the closing HTML tag",
    answerB: "Above the closing body tag",
    answerC: "Before the closing head tag",
    answerD: "After the closing head tag and before the opening body tag",
    correctAnswer: "B",
  },
];

//FUNCTIONS//
//1. function - start game
function startGame() {
  //what I need in this function-
  //for the timer to start
  //first question to appear
}

//timer- function that have the interval that takes off the clock
//another function that loads the data for the next question
//Event listener for all the answer buttons -
//check to see if they are on the last question- if not load the next question

//function next question- load questions
function loadQuestions() {
  var presentedQuestion = quizQuestions[CurrentQuestion];
  //some logic to put 'presentedQuestion' on the screen
}

//function that handles the user clicking an answer
//removes time if question is answered in correctly
//if statement comparing event.target.value with quizQuestions[currentQuestion].correctAnswer
//check currentQuestion to see if the quiz is over
//either show score or run loadQuestions()
$("#buttons").on("click", function (event) {
  var selection = event.target.value;
  //some logic to put 'selection'
});

// score with storage.

//Event Listeners!
//start button
startButton.on("click", startGame);
//click for multiple choice answers. Event objest, target.
