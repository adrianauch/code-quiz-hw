//Query Selectors//
var buttonA = document.getElementById("A");
var buttonB = document.getElementById("B");
var buttonC = document.getElementById("C");
var buttonD = document.getElementById("D");
var startbtn = document.getElementById("startbtn");
var questions = document.getElementById("questions");
var answers = document.getElementById("answers");
var finalScore= document.getElementById("Final-Score");
var submitbtn = document.getElementById("submit-btn");
var initials = document.getElementById("initials");
var scorePG = document.getElementById("score-pg");
var playAgainbtn = document.getElementById("play-again");
var endGame = document.getElementById("end-game");
var feedback = document.getElementById("wonrg/right");
var questionContainer = document.getElementById("question-container");
var highscoreLink = document.getElementById("highscore")

// Global Variables// 

//Quiz Questions - 5 total and they need to be in an array//
var quizQuestions = [{
    question: "What is === operator?",
    answerA: "Checks the equity of two strings",
    answerB: "A strict operator, it checks both type and value",
    answerC: "It is an athrimetic operator and is used to evaluate equations",
    answerD: "Sets to variables equal to each other",
    correctAnswer: "B" },
    {question: "Which of the following combines the text of two strings and returns a new string?",
    answerA: "append()",
    answerB: "attach()",
    answerC: "concat()",
    answerD: "none of the above",
    correctAnswer: "C"},
    {question: "Which of the following is not a way to declare a variable?",
    answerA: "var",
    answerB: "let",
    answerC: "const",
    answerD: "decl",
    correctAnswer: "D"},
    {question: "Which of the following is not a primative data type?",
    answerA: "Boolean",
    answerB: "String",
    answerC: "Object",
    answerD: "Underfined",
    correctAnswer: "C"},
    {question: "Where do you place the script tag in teh HTML?",
    answerA: "Between the closing body tag and the closing HTML tag",
    answerB: "Above the closing body tag",
    answerC: "Before the closing head tag",
    answerD: "After the closing head tag and before the opening body tag",
    correctAnswer: "B"},];


//function declarations 

//timer? 

//Working quiz with calls to my function declaration - if else 


// score with storage. 