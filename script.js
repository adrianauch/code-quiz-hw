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
var leadrboard = $("#leaderboard");
// Global Variables// -- what data do we care about?
var timeLeft = 60; // time left
var correctAnswer = 0;
var storedScore;
var CurrentQuestion = 0;

//Quiz Questions - Objects within an array
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
  leadrboard.hide();
  questionContainer.show();
  loadQuestions();
}

//function next question- load questions for user to pick
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
    CurrentTime.textContent = "Time:" + timeLeft;

    if (timeLeft <= 0) {
      clearInterval(interval);
      gameOver();
      CurrentTime.text("Time's Up!");
    }
  }, 1000);
}

// event on all my buttons to record what the user presses
$("#buttons").on("click", function (event) {
  var selection = event.target.value;
  //if statement to check if the answer is correct or not
  if (selection === quizQuestions[CurrentQuestion].answer) {
    correctAnswer++;
    feedback.text("Correct");
    //if the answer is not correct it should subtact 10 off of the clock
  } else {
    timeLeft = -10;
  }
  //should add to the score at the end
  CurrentQuestion++;
  //function makes sure that the game stops when there are not more questions
  if (CurrentQuestion < quizQuestions.length) {
    loadQuestions();
  } else {
    gameOver();
  }
});
//end of game  the game over should pop up
function gameOver() {
  questionContainer.remove();
  //end game should pop up with a form to enter initails
  endGame.show();
}
//function for high scores
function highscores(event) {
  event.preventDefaul();
  if (UserInitials.value === "") {
    alert("Please enter your initails!");
  } else {
    endGame.remove();
    scorePG.show();
  }
  return;
}
// score with local storeage - have to turn into an string
var savedHighScores = localStorage.getItem("High Scores");
var ScoresArray;

if (savedHighScores === null) {
  ScoresArray = [];
} else {
  ScoresArray = JSON.parse(savedHighScores);
}
var userScore = {
  initials: UserInitials.value,
  score: finalScore.textContent,
};

console.log(userScore);
ScoresArray.push(userScore);

var scoresString = JSON.stringify(ScoresArray);
window.localStorage.setItem("high scores", scoresString);

//Show High Scores function to user
var i = 0;
function DisplayHighScore() {
  var savedHighScores = localStorage.getItem("High Scores");
  console.log(savedHighScores);
  var storedHighScores = JSON.parse(savedHighScores);
  for (i < storedHighScores.length; i++; ) {
    var eachNewHighScore = docukment.createElement("p");
    eachNewHighScore.innerHTML =
      storedHighScores[i].UserInitials + "-" + storedHighScores.score;
    leadrboard.appendChild(eachNewHighScore);
  }
}

//Event Listeners!//

//start button
startButton.on("click", startGame);
