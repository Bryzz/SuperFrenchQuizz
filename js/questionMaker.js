var currentQuestion;

function getQuestionType(question) {
  return question[0];
}

function generateGapsQuestion(question) {
  var questionContent = "";
  for (var i = 0; i < question[2].length; i++) {
    questionContent += question[2][i];
    if (i < question[2].length - 1) {
      questionContent += "<input name=\"answer\" type=\"text\" class=\"answerForm\"/>";
    }
  }
  var generatedQuestion =
  [
    ["Fill in the gaps !"],
    [question[1]],
    [questionContent],
    question[3]
  ]
  return generatedQuestion;
}

function generateSelectQuestion(question) {
  var questionContent = "";
  for (var i = 0; i < question[2].length; i++) {
    questionContent += question[2][i];
    if (i < question[2].length - 1) {
      questionContent += "<select name=\"answer\" class=\"answerForm\"><option></option>";
      for (j = 0; j < question[3][i].length; j++) {
        questionContent += "<option value=\"" + question[3][i][j] + "\">" + question[3][i][j] + "</option>";
      }
      questionContent += "</select>";
    }
  }
  var generatedQuestion =
  [
    ["Select the right answers !"],
    [question[1]],
    [questionContent],
    question[4]
  ]
  return generatedQuestion;
}

function displayQuestion(generatedQuestion) {
  document.getElementsByClassName("message")[0].classList.remove("victory");
  document.getElementsByClassName("message")[0].classList.remove("failure");
  document.getElementsByClassName("messageText")[0].textContent = "";
  document.getElementsByClassName("type")[0].textContent = generatedQuestion[0];
  document.getElementsByClassName("explanations")[0].textContent = generatedQuestion[1];
  document.getElementsByClassName("questionForm")[0].innerHTML = generatedQuestion[2];
}

function generateQuestion() {
  var question = getRandomQuestion();
  if (question == -1) {
    displayFinalScore();
    return;
  }
  var generatedQuestion;
  if (getQuestionType(question) == "gaps") {
    generatedQuestion = generateGapsQuestion(question);
  }
  else if (getQuestionType(question) == "select") {
    generatedQuestion = generateSelectQuestion(question);
  }
  else {
    console.log("AN ERROR OCCURED");
  }
  currentQuestion = generatedQuestion;
  displayQuestion(generatedQuestion);
}

function getAnswer(generatedQuestion, id) {
  return generatedQuestion[3][id];
}

generateQuestion();
