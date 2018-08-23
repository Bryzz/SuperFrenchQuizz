// Détecte un clic sur la soumission des réponses à la question
document.getElementById("validate").onclick = function() {
  var answers = document.getElementsByClassName("answerForm");
  // On vérifie les réponses
  var checkAnswer = checkAnswers(answers,currentQuestion);
  // Si tout est vrai, alors on exécute le code relatif à un succès
  if (checkAnswer[0]) {
    processRightAnswers(checkAnswer[1]);
  }
  // Sinon, on vérifie que ça n'était pas un oubli de champ de réponse
  else if (!checkAnswer[0] && checkAnswer[1]=="") {
    displayAlertFillUpFields();
  }
  // Si la réponse est fausse et que tous les champs sont remplis,
  // alors on exécute le code relatif à un échec
  else {
    processWrongAnswers(checkAnswer[1]);
  }
}

// Traitement du clic sur le bouton "Next"
document.getElementById("next").onclick = function() {
  // Cache le bloc des réponses à la question
  document.getElementsByClassName("answers")[0].classList.remove("displayAnswers");
  // Affiche le bouton de soumission
  document.getElementsByClassName("validate")[0].classList.remove("hide");
  // Cache le bouton "Next"
  document.getElementsByClassName("next")[0].classList.remove("display");*
  // Génère une nouvelle question
  generateQuestion();
}
