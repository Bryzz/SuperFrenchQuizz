// S'occupe de modifier les classes CSS en front pour afficher "VICTOIRE".
// En règle générale, on rigole plus avec le message de défaite, ne vous attendez
// pas à ce que cette fonction soit exécutée.
function processRightAnswers(answerText) {
  document.getElementsByClassName("answers")[0].innerHTML = answerText;
  document.getElementsByClassName("answers")[0].classList.add("displayAnswers");
  document.getElementsByClassName("messageText")[0].innerHTML = "You did it !";
  document.getElementsByClassName("message")[0].classList.add("victory");
  document.getElementsByClassName("validate")[0].classList.add("hide");
  for (var i = 0; i < document.getElementsByClassName("answerForm").length; i++) {
    document.getElementsByClassName("answerForm")[i].disabled = true;
  }
  // On ajoute un point au score. Qui restera à zéro. Car on aime le message de défaite.
  scoreAddPoint();
  setTimeout(function() {
    document.getElementsByClassName("message")[0].classList.remove("victory");
    document.getElementsByClassName("messageText")[0].innerHTML = "";
    document.getElementsByClassName("next")[0].classList.add("display");
  }, 3000);
}

// S'occupe de modifier les classes CSS en front pour afficher "DEFAITE".
// De manière générale, on passera souvent par là.
function processWrongAnswers(answerText) {
  document.getElementsByClassName("answers")[0].innerHTML = answerText;
  document.getElementsByClassName("answers")[0].classList.add("displayAnswers");
  document.getElementsByClassName("messageText")[0].innerHTML = "I HEAR FRENCH THAT BAD";
  document.getElementsByClassName("message")[0].classList.add("failure");
  document.getElementsByClassName("validate")[0].classList.add("hide");
  for (var i = 0; i < document.getElementsByClassName("answerForm").length; i++) {
    document.getElementsByClassName("answerForm")[i].disabled = true;
  }
  // On retire un point sur le score total. Personne n'aime les points sur les i.
  scoreRemovePoint();
  setTimeout(function() {
    document.getElementsByClassName("message")[0].classList.remove("failure");
    document.getElementsByClassName("messageText")[0].innerHTML = "";
    document.getElementsByClassName("next")[0].classList.add("display");
  }, 3000);
}

// Affiche un popup si un champ n'est pas rempli à la soumission des réponses.
// En règle générale, le joueur moyen aura rempli n'importe quoi pour son refus
// d'atteindre le message de succès qui est vraiment pas amusant du tout.
function displayAlertFillUpFields() {
  document.getElementsByClassName("validate")[0].classList.add("hide");
  document.getElementsByClassName("alert")[0].classList.add("displayAlert");
  setTimeout(function() {
    document.getElementsByClassName("alert")[0].classList.remove("displayAlert");
    document.getElementsByClassName("validate")[0].classList.remove("hide");
  }, 3000);
}
