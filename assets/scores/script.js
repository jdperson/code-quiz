var rootEl = document.getElementById("root");
var backBtn = document.getElementById("back");
var clearBtn = document.getElementById("clear");
var listEl = document.createElement("ol");

function renderLastRegistered() {
    var initials = localStorage.getItem("initials");
    var score = localStorage.getItem("score");

    if (rootEl === "") { rootEl.append(listEl); }

    var newScore = document.createElement("li");
    newScore.textContent = initials + " - " + score;

    listEl.append(newScore);
}

renderLastRegistered();

backBtn.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "../../index.html";
});

clearBtn.addEventListener("click", function(event) {
    event.preventDefault();
    rootEl.removeChild("ol");
})