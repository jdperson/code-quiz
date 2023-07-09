// ------------------- Global Definitions -------------------
    // Comment follow-along starts at 220

var rootEl = document.querySelector("#root");
var timerEl = document.querySelector("#countdown");
var headEl = document.createElement("h1");
var descriptionEl = document.createElement("p");
var startBtn = document.createElement("button");
var submitBtn = document.createElement("button");
var listEl = document.createElement("ol");
var choice1 = document.createElement("li");
var choice2 = document.createElement("li");
var choice3 = document.createElement("li");
var choice4 = document.createElement("li");
var containerEl = document.createElement("div");
var labelEl = document.createElement("label");
var inputEl = document.createElement("input");
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
    rootEl.removeChild(listEl);
    
    headEl.innerHTML = "All done!";
    descriptionEl.innerHTML = 'Your final score is ' + timeLeft;

    rootEl.append(descriptionEl);
    rootEl.append(containerEl);
    rootEl.append(submitBtn);

    inputEl.addEventListener("click", function(event) {
        event.preventDefault();
        correct.style.display = "none";
        incorrect.style.display = "none";
    })

    submitBtn.addEventListener("click", function(event) {
        event.preventDefault();

        var initials = document.querySelector("#initials").value;

        if (initials === "") {
            displayMessage("error", "Initials must be entered");
            return;
        }
        if (initials.length > 3) {
            displayMessage("error", "3 initials max");
            return;
        }

        localStorage.setItem("initials", initials);
        localStorage.setItem("score", timeLeft);

        //  The code above preps the score submission screen then waits for the
        //  user to click submit to then send them to the High Scores page.

        window.location.href = "./assets/scores/scores.html";
    })
    
}

function displayJudgement(bool) {
    if (bool) {
        incorrect.style.display = "none";
        correct.style.display = "block";
    } else {
        correct.style.display = "none";
        incorrect.style.display = "block";
    }
}

function nextQuestion() {
    headEl.innerHTML = questions[questionNum][0];
    choice1.innerHTML = questions[questionNum][1];
    choice2.innerHTML = questions[questionNum][2];
    choice3.innerHTML = questions[questionNum][3];
    choice4.innerHTML = questions[questionNum][4];
    questionNum++;
}

function startTimer() {
    var timeLeft = 75;

    //  This looks at what question the user is on, what the right answer is, and what the user selected
    listEl.addEventListener("click", function (event) {
        event.preventDefault();

        switch (questionNum) {
            case (0):
                if (event.target === listEl.children[2]) {
                    displayJudgement(true);
                    nextQuestion();
                    break;
                } else {
                    timeLeft -= 10;
                    displayJudgement(false);
                    nextQuestion();
                    break;
                }
            case (1):
                if (event.target === listEl.children[2]) {
                    displayJudgement(true);
                    nextQuestion();
                    break;
                } else {
                    timeLeft -= 10;
                    displayJudgement(false);
                    nextQuestion();
                    break;
                }
            case (2):
                if (event.target === listEl.children[3]) {
                    displayJudgement(true);
                    nextQuestion();
                    break;
                } else {
                    timeLeft -= 10;
                    displayJudgement(false);
                    nextQuestion();
                    break;
                }
            case (3):
                if (event.target === listEl.children[2]) {
                    displayJudgement(true);
                    nextQuestion();
                    break;
                } else {
                    timeLeft -= 10;
                    displayJudgement(false);
                    nextQuestion();
                    break;
                }
            case (4):
                if (event.target === listEl.children[3]) {
                    displayJudgement(true);
                    clearInterval(timeInterval);
                    endQuiz(timeLeft + 1);
                    break;
                } else {
                    timeLeft -= 10;
                    displayJudgement(false);
                    clearInterval(timeInterval);
                    endQuiz(timeLeft + 1);
                    break;
                }
        }
    })

    var timeInterval = setInterval(function () {
        timerEl.innerHTML = timeLeft;
        if (timeLeft >= 1) {
            timeLeft--;
        }
        else {
            clearInterval(timeInterval);
            endQuiz(timeLeft);
        }
    }, 1000);
}

function startQuiz() {
    rootEl.removeChild(descriptionEl);
    rootEl.removeChild(startBtn);
    
    choice1.className = "choice";
    choice2.className = "choice";
    choice3.className = "choice";
    choice4.className = "choice";

    headEl.innerHTML = "Commonly used data types DO Not Include:";

    choice1.innerHTML = "strings";
    choice2.innerHTML = "booleans";
    choice3.innerHTML = "alerts";
    choice4.innerHTML = "numbers";

    listEl.append(choice1);
    listEl.append(choice2);
    listEl.append(choice3);
    listEl.append(choice4);

    rootEl.append(listEl);

    //  The first question is prepared, now the timer starts    -> 119
    startTimer();
};

// ------------------- Launch Procedure -------------------

    //  This is where content and data for the start screen is prepared
    //  and added to the page until...

headEl.innerHTML = "Coding Quiz Challenge";
descriptionEl.innerHTML = "Try to answer the following code-related questions within the time limit.<br/> Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
startBtn.innerHTML = "Start Quiz";
submitBtn.innerHTML = "Submit";
labelEl.innerHTML = "Enter initials: ";
correct.innerHTML = "Correct!";
incorrect.innerHTML = "Wrong!";

labelEl.setAttribute("for", "initials");
labelEl.setAttribute("id", "initials-label")
inputEl.setAttribute("type", "text");
inputEl.setAttribute("name", "initials");
inputEl.setAttribute("id", "initials");
headEl.setAttribute("id", "title");
startBtn.setAttribute("id", "start");

correct.style.display = "none";
incorrect.style.display = "none";

rootEl.append(headEl);
rootEl.append(descriptionEl);
rootEl.append(startBtn);
rootEl.append(correct);
rootEl.append(incorrect);
containerEl.append(labelEl);
containerEl.append(inputEl);

    //  the user wants to start.   -> 196
startBtn.addEventListener("click", startQuiz);