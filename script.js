//VARIBALES//
var buttonA = $("#A");
var buttonB = $("#B");
var buttonC = $("#C");
var buttonD = $("#D");
var startButton = $("#startbtn");
var questionPrompt = $("#viewQuestion");
var possAnswers = $("#answers");
var finalScore = $("#Final-Score");
var submitbtn = $("#submit-btn");
var UserInitials = $("#initials");
var scorePG = $("#score-pg");
var playAgainbtn = $("#play-again");
var endGame = $("#end-game");
var feedback = $("#wrong-right");
var questionContainer = $("#containerQ");
var highscoreLink = $("#highscore");
var countdown = $("#timer");
var landingPage = $("#landing-page");

// Global Variables// -- what data do we care about?
var timeLeft = 60; // time left
var correctAnswer = 0;
var storedScore;
var CurrentQuestion = 0;

//Quiz Questions - 5 total and they need to be in an array//
var quizQuestions = [
  {
    title: "What is the rarest m&m color?",
    options: ["Red", "Blue", "Brown", "Yellow"],
    answer: "Brown",
  },
  {
    title: "What was the first soft drink in space?",
    options: ["Coca-Cola", "Pepsi", "Dr.Pepper", "Gatorade"],
    answer: "Coca-cola",
  },
  {
    title: "What is the most consumer manufactured drink in the world?",
    options: ["Soft Drinks", "Coffee", "Alcohol", "Tea"],
    answer: "Tea",
  },
  {
    title: "Where was Hawaiian pizza invented?",
    options: ["Italy", "Canada", "United States", "United Kingdom"],
    answer: "Canada",
  },
  {
    title: "How long does it take to grow a pineapple?",
    options: ["3 months", "6 months", "1 year", "3 years"],
    answer: "3 Years",
  },
];

//FUNCTIONS//
//1. function - start game
function startGame() {
  landingPage.hide();
  endGame.hide();
  questionContainer.show();
  loadQuestions();
}

//another function that loads the data for the next question
//Event listener for all the answer buttons -
//check to see if they are on the last question- if not load the next question

//function next question- load questions
function loadQuestions() {
  questionPrompt.text(quizQuestions[CurrentQuestion].title);
  var choiceA = quizQuestions[CurrentQuestion].options[0];
  var choiceB = quizQuestions[CurrentQuestion].options[1];
  var choiceC = quizQuestions[CurrentQuestion].options[2];
  var choiceD = quizQuestions[CurrentQuestion].options[3];
  buttonA.text(choiceA);
  buttonB.text(choiceB);
  buttonC.text(choiceC);
  buttonD.text(choiceD);
}
//Timer Function
function coutdown() {
  interval = setInterval(function () {
    timeLeft--;
    countdown.textContent = "Time:" + timeLeft;

    if (timeLeft <= 0) {
      clearInterval(interval);
      gameOver();
      CurrentTime.text("Time's Up!");
    }
  }, 1000);
}

//if statement comparing event.target.value with quizQuestions[currentQuestion].correctAnswer
//check currentQuestion to see if the quiz is over
//either show score or run loadQuestions()
$("#buttons").on("click", function (event) {
  var selection = event.target.value;
  if (selection === quizQuestions[CurrentQuestion].answer) {
    correctAnswer++;
    feedback.text("Correct");
  } else {
    timeLeft = -10;
  }
  CurrentQuestion++;
  if (CurrentQuestion < quizQuestions.length) {
    loadQuestions();
  } else {
    gameOver();
  }
});

function gameOver() {
  questionContainer.hide();
  endGame.show();
}
// score with storage.

//Event Listeners!
//start button
startButton.on("click", startGame);

//click for multiple choice answers. Event objest, target
