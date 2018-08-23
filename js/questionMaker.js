var currentQuestion;

// Récupère le type de la question
function getQuestionType(question) {
  return question[0];
}

// Génère les champs d'input pour les questions à trous
function generateGapsQuestion(question) {
  var questionContent = "";
  // Pour chaque morceau de question, séparée par un champ input à créer...
  for (var i = 0; i < question[2].length; i++) {
    // On ajoute le texte au contenu de la question
    questionContent += question[2][i];
    // Si ça n'est pas la dernière partie de la question, on ajoute un champ input
    if (i < question[2].length - 1) {
      questionContent += "<input name=\"answer\" type=\"text\" class=\"answerForm\"/>";
    }
  }
  // On génère la question à afficher
  var generatedQuestion =
  [
    ["Fill in the gaps !"],
    [question[1]],
    [questionContent],
    question[3]
  ]
  return generatedQuestion;
}

// Génère les champs d'input pour les questions avec choix multiples
function generateSelectQuestion(question) {
  var questionContent = "";
  // Pour chaque morceau de question, séparée par un champ input à créer...
  for (var i = 0; i < question[2].length; i++) {
    // On ajoute le texte au contenu de la question
    questionContent += question[2][i];
    // Si ça n'est pas la dernière partie de la question, on ajoute un champ input
    if (i < question[2].length - 1) {
      questionContent += "<select name=\"answer\" class=\"answerForm\"><option></option>";
      // Pour chaque solution proposée, on créée une option dans le champ input
      for (j = 0; j < question[3][i].length; j++) {
        questionContent += "<option value=\"" + question[3][i][j] + "\">" + question[3][i][j] + "</option>";
      }
      questionContent += "</select>";
    }
  }
  // On génère la question à afficher
  var generatedQuestion =
  [
    ["Select the right answers !"],
    [question[1]],
    [questionContent],
    question[4]
  ]
  return generatedQuestion;
}

// On affiche la question en front
function displayQuestion(generatedQuestion) {
  // On cache l'animation de victoire
  document.getElementsByClassName("message")[0].classList.remove("victory");
  // On cache l'animation de défaite
  document.getElementsByClassName("message")[0].classList.remove("failure");
  // On vide le contenu du bloc de message de victoire / défaite
  document.getElementsByClassName("messageText")[0].textContent = "";
  // On affiche les éléments de la question générée
  document.getElementsByClassName("type")[0].textContent = generatedQuestion[0];
  document.getElementsByClassName("explanations")[0].textContent = generatedQuestion[1];
  document.getElementsByClassName("questionForm")[0].innerHTML = generatedQuestion[2];
}

// Récupère une question aléatoire pour générer une question utilisable et l'afficher en front
function generateQuestion() {
  // Récupère une question aléatoire
  var question = getRandomQuestion();
  // Si c'était la dernière question, on affiche le score final
  if (question == -1) {
    displayFinalScore();
    return;
  }
  var generatedQuestion;
  // On génère une question utilisable selon son type
  if (getQuestionType(question) == "gaps") {
    generatedQuestion = generateGapsQuestion(question);
  }
  else if (getQuestionType(question) == "select") {
    generatedQuestion = generateSelectQuestion(question);
  }
  // Si le type n'existe pas, auquel cas je devrais être inquiet de ne plus
  // connaître mon propre code... J'affiche qu'il y a une erreur dans le code.
  // Ne devrait pas apparaître... A part si quelqu'un joue avec le code sans trop
  // savoir ce qu'il fait.
  else {
    console.log("AN ERROR OCCURED");
  }
  currentQuestion = generatedQuestion;
  // Affiche la question
  displayQuestion(generatedQuestion);
}

// Récupère une réponse attendue selon son index
function getAnswer(generatedQuestion, id) {
  return generatedQuestion[3][id];
}

generateQuestion();
