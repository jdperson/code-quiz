// Global Definitions
var rootEl = document.querySelector("#root");
var timerEl = document.querySelector("#countdown");
var headEl = document.createElement("h1");
var descriptionEl = document.createElement("p");
var startBtn = document.createElement("button");
var listEl = document.createElement("ol");
var choice1 = document.createElement("li");
var choice2 = document.createElement("li");
var choice3 = document.createElement("li");
var choice4 = document.createElement("li");
const correct = document.createElement("footer");
const incorrect = document.createElement("footer");
var questionNum = 0;

var questions = [
    [
        "The condition in an if / else statement is enclosed with _________.",
        "quotes", 
        "curly brackets",
        "parenthesis",
        "square brackets"
    ],

    [
        "Arrays in JavaScript can be used to store _________.",
        "numbers and strings", 
        "other arrays",
        "booleans",
        "all of the above"
    ],

    [
        "String values must be enclosed within _________ when being assigned to variables.",
        "commas", 
        "curly brackets",
        "quotes",
        "parenthesis"
    ],

    [
        "A very useful tool used during development and debugging for printing content to the debugger is:",
        "JavaScript", 
        "terminal/bash",
        "for loops",
        "console.log"
    ]
]

function endQuiz(timeLeft) {
    
}

function displayMessage(bool) {
    if (bool) { correct.style.display = "block"; }
    else      { incorrect.style.display = "block"; }
}

function nextQuestion() {
    headEl.innerHTML = questions[questionNum[0]];
    listEl.children[0].innerHTML = questions[questionNum[1]];
    listEl.children[1].innerHTML = questions[questionNum[2]];
    listEl.children[2].innerHTML = questions[questionNum[3]];
    listEl.children[3].innerHTML = questions[questionNum[4]];
}

function startTimer() {
    var timeLeft = 60;

    listEl.children.addEventListener("click", function (event) {
        event.preventDefault();

        switch (questionNum) {
            case (0):
                if (event.target === listEl.children[2]) {
                    displayMessage(true);
                    nextQuestion();
                    break;
                } else {
                    timeLeft -= 6;
                    displayMessage(false);
                    nextQuestion();
                    break;
                }
            case (1):
                if (event.target === listEl.children[2]) {
                    displayMessage(true);
                    nextQuestion();
                    break;
                } else {
                    timeLeft -= 6;
                    displayMessage(false);
                    nextQuestion();
                    break;
                }
            case (2):
                if (event.target === listEl.children[3]) {
                    displayMessage(true);
                    nextQuestion();
                    break;
                } else {
                    timeLeft -= 6;
                    displayMessage(false);
                    nextQuestion();
                    break;
                }
            case (3):
                if (event.target === listEl.children[2]) {
                    displayMessage(true);
                    nextQuestion();
                    break;
                } else {
                    timeLeft -= 6;
                    displayMessage(false);
                    nextQuestion();
                    break;
                }
            case (4):
                if (event.target === listEl.children[3]) {
                    displayMessage(true);
                    endQuiz(timeLeft);
                    break;
                } else {
                    timeLeft -= 6;
                    displayMessage(false);
                    endQuiz(timeLeft);
                    break;
                }
        }
    })

    var timeInterval = setInterval(function () {
        correct.style.display = "none";
        incorrect.style.display = "none";

        if (timeLeft >= 1) { timeLeft--; }
        else {
            clearInterval(timeInterval);
            endQuiz();
        }
    }, 1000);
}

function startQuiz() {
    rootEl.removeChild(descriptionEl);
    rootEl.removeChild(startBtn);
    listEl.append(choice1);
    listEl.append(choice2);
    listEl.append(choice3);
    listEl.append(choice4);
    listEl.children.className = "choice";

    headEl.innerHTML = "Commonly used data types DO Not Include:";

    listEl.children[0].innerHTML = "strings";
    listEl.children[1].innerHTML = "booleans";
    listEl.children[2].innerHTML = "alerts";
    listEl.children[3].innerHTML = "numbers";

    rootEl.append(listEl);
    
    startTimer();
};

// Launch Procedure
headEl.innerHTML = "Coding Quiz Challenge";
descriptionEl.innerHTML = "Try to answer the code-related questions within the time limit.<br/> Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
startBtn.innerHTML = "Start Quiz";
startBtn.setAttribute("id", "start");

correct.innerHTML = "Correct!";
correct.style.display = "none";
incorrect.innerHTML = "Wrong!";
incorrect.style.display = "none";

rootEl.append(headEl);
rootEl.append(descriptionEl);
rootEl.append(startBtn);
rootEl.append(correct);
rootEl.append(incorrect);

startBtn.addEventListener("click", startQuiz);