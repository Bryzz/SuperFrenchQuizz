var victories = 0;
var totalAttempts = 0;

function updateScoreBoard() {
  document.getElementsByClassName("score_victories")[0].innerHTML = victories;
  document.getElementsByClassName("score_attempts")[0].innerHTML = totalAttempts;
}

function scoreAddPoint() {
  victories++;
  totalAttempts++;
  updateScoreBoard();
}

function scoreRemovePoint() {
  totalAttempts++;
  updateScoreBoard();
}

function displayFinalScore() {
  document.getElementById("questions").classList.add("hide");
  document.getElementById("finalScore").classList.add("display");
  var result = ((victories * 100) / totalAttempts).toFixed();
  document.getElementsByClassName("score_display")[0].innerHTML = "You got <strong>" + result + "%</strong> of the gummy bears !";
  var gummyBearDisplay = "";
  for (var i = 0; i < totalAttempts; i++) {
    if (i >= victories) {
      gummyBearDisplay += "<img class=\"failedGummy\" src=\"img/gummy-bear_large.png\"/>";
    }
    else {
      gummyBearDisplay += "<img src=\"img/gummy-bear_large.png\"/>";
    }
  }
  document.getElementsByClassName("gummybearsList")[0].innerHTML = gummyBearDisplay;
}
