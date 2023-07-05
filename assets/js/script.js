var startBtn = document.querySelector("#start");
var initialPrompt = document.querySelector("#initial-prompt");

const question1 = document.querySelector("#q1");
const question2 = document.querySelector("#q2");
const question3 = document.querySelector("#q3");
const question4 = document.querySelector("#q4");
const question5 = document.querySelector("#q5");

function endQuiz() {};

function countdown() {
    var timeLeft = 75;

    var timeInterval = setInterval(function () {
        timeLeft--;
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            endQuiz();
        }
    }, 1000);
}

function startQuiz() {
    initialPrompt.style.display = "none";
    question1.style.display = "block";
    countdown();
};

startBtn.addEventListener("click", startQuiz);