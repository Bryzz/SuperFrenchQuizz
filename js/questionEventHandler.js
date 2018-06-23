document.getElementById("validate").onclick = function() {
  var answers = document.getElementsByClassName("answerForm");
  var checkAnswer = checkAnswers(answers,currentQuestion);
  if (checkAnswer[0]) {
    processRightAnswers(checkAnswer[1]);
  }
  else if (!checkAnswer[0] && checkAnswer[1]=="") {
    displayAlertFillUpFields();
  }
  else {
    processWrongAnswers(checkAnswer[1]);
  }
}

document.getElementById("next").onclick = function() {
  document.getElementsByClassName("answers")[0].classList.remove("displayAnswers");
  document.getElementsByClassName("validate")[0].classList.remove("hide");
  document.getElementsByClassName("next")[0].classList.remove("display");
  generateQuestion();
}
