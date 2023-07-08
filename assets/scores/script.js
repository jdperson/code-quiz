var rootEl = document.getElementById("root");
var backBtn = document.getElementById("back");
var clearBtn = document.getElementById("clear");
var listEl = document.createElement("ol");
var newScore = document.createElement("li");
var initials = localStorage.getItem("initials");
var score = localStorage.getItem("score");



newScore.textContent = initials + " - " + score;

listEl.append(newScore);
rootEl.append(listEl);



backBtn.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "../../index.html";
});

clearBtn.addEventListener("click", function(event) {
    event.preventDefault();
    rootEl.removeChild(listEl);
})