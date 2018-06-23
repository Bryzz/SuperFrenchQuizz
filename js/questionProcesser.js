function processRightAnswers(answerText) {
  document.getElementsByClassName("answers")[0].innerHTML = answerText;
  document.getElementsByClassName("answers")[0].classList.add("displayAnswers");
  document.getElementsByClassName("messageText")[0].innerHTML = "You did it !";
  document.getElementsByClassName("message")[0].classList.add("victory");
  document.getElementsByClassName("validate")[0].classList.add("hide");
  for (var i = 0; i < document.getElementsByClassName("answerForm").length; i++) {
    document.getElementsByClassName("answerForm")[i].disabled = true;
  }
  scoreAddPoint();
  setTimeout(function() {
    document.getElementsByClassName("message")[0].classList.remove("victory");
    document.getElementsByClassName("messageText")[0].innerHTML = "";
    document.getElementsByClassName("next")[0].classList.add("display");
  }, 3000);
}

function processWrongAnswers(answerText) {
  document.getElementsByClassName("answers")[0].innerHTML = answerText;
  document.getElementsByClassName("answers")[0].classList.add("displayAnswers");
  document.getElementsByClassName("messageText")[0].innerHTML = "I HEAR FRENCH THAT BAD";
  document.getElementsByClassName("message")[0].classList.add("failure");
  document.getElementsByClassName("validate")[0].classList.add("hide");
  for (var i = 0; i < document.getElementsByClassName("answerForm").length; i++) {
    document.getElementsByClassName("answerForm")[i].disabled = true;
  }
  scoreRemovePoint();
  setTimeout(function() {
    document.getElementsByClassName("message")[0].classList.remove("failure");
    document.getElementsByClassName("messageText")[0].innerHTML = "";
    document.getElementsByClassName("next")[0].classList.add("display");
  }, 3000);
}

function displayAlertFillUpFields() {
  document.getElementsByClassName("validate")[0].classList.add("hide");
  document.getElementsByClassName("alert")[0].classList.add("displayAlert");
  setTimeout(function() {
    document.getElementsByClassName("alert")[0].classList.remove("displayAlert");
    document.getElementsByClassName("validate")[0].classList.remove("hide");
  }, 3000);
}
