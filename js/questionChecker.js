/*
* Détermine si les réponses de l'utilisateur correspondent aux réponses attendues
*/
function checkAnswers(answerList, generatedQuestion) {
  // Initialisation de la sortie : résultat de la question, affichage des réponses correctes et incorrectes
  var result = [true,[""]];
  // Pour chacune des réponses
  for (var i = 0; i < answerList.length; i++) {
    // S'il manque une réponse (champ vide), on renvoie un String vide
    // détecté comme tel. Le moteur indique qu'il faut remplir tous les champs.
    if (answerList[i].value == "") {
      result = [false,[""]];
      return result;
    }
    // La réponse donnée n'est pas la réponse attendue
    if (answerList[i].value != getAnswer(generatedQuestion,i)) {
      // On indique que c'est faux
      result[0] = false;
      // On ajoute de l'HTML pour signaler en front quelle était la bonne réponse
      result[1] += "<span class=\"wrongAnswer\">" + getAnswer(generatedQuestion,i) + "</span>";
      if (i < answerList.length-1) {
        result[1] += ", ";
      }
    }
    // La réponse donnée était la réponse attendue
    else {
      // On ajoute de l'HTML pour confirmer la bonne réponse en front
      result[1] += "<span class=\"goodAnswer\">" + getAnswer(generatedQuestion,i) + "</span>";
      if (i < answerList.length-1) {
        result[1] += ", ";
      }
    }
  }
  return result;
}
