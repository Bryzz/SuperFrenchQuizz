var victories = 0;
var totalAttempts = 0;

// Met à jour le tableau de score en haut à gauche
function updateScoreBoard() {
  document.getElementsByClassName("score_victories")[0].innerHTML = victories;
  document.getElementsByClassName("score_attempts")[0].innerHTML = totalAttempts;
}

// Ajoute un point au compteur de victoires et de questions passées
function scoreAddPoint() {
  victories++;
  totalAttempts++;
  updateScoreBoard();
}

// Ajoute un point au compteur de questions passées
function scoreRemovePoint() {
  totalAttempts++;
  updateScoreBoard();
}

// Affiche le score final
function displayFinalScore() {
  document.getElementById("questions").classList.add("hide");
  document.getElementById("finalScore").classList.add("display");
  // Calcule le pourcentage de réussite
  var result = ((victories * 100) / totalAttempts).toFixed();
  document.getElementsByClassName("score_display")[0].innerHTML = "You got <strong>" + result + "%</strong> of the gummy bears !";
  var gummyBearDisplay = "";
  // Génère l'affichage des oursons en guimauve. Personne n'en veut, et comme tout le monde
  // veut ce cher message de défaite, aucun ne sera opaque. :)
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
