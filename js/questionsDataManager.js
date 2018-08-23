// Va mélanger un tableau de données
function shuffleArray(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

gapsQuestions = shuffleArray(gapsQuestions);

selectQuestions = shuffleArray(selectQuestions);

// Récupère une question au hasard
function getRandomQuestion() {
  // Si les deux listes sont vides, on renvoie -1
  if (gapsQuestions.length == 0 && selectQuestions.length == 0) {
    return -1;
  }
  // Si seule la liste de question à trou n'est pas vide, on prend une question de cette liste
  if (gapsQuestions.length != 0 && selectQuestions.length == 0) {
    return gapsQuestions.pop();
  }
  // Si seule la liste de question à choix multiples n'est pas vide, on prend une question de cette liste
  if (gapsQuestions.length == 0 && selectQuestions.length != 0) {
    return selectQuestions.pop();
  }
  // Sinon on prend une question au hasard, entre une liste ou l'autre
  var type = Math.floor(Math.random() * (1 + 1));
  if (type == 0) {
    return gapsQuestions.pop();
  }
  else {
    return selectQuestions.pop();
  }
}
