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

function getRandomQuestion() {
  if (gapsQuestions.length == 0 && selectQuestions.length == 0) {
    return -1;
  }
  if (gapsQuestions.length != 0 && selectQuestions.length == 0) {
    return gapsQuestions.pop();
  }
  if (gapsQuestions.length == 0 && selectQuestions.length != 0) {
    return selectQuestions.pop();
  }
  var type = Math.floor(Math.random() * (1 + 1));
  if (type == 0) {
    return gapsQuestions.pop();
  }
  else {
    return selectQuestions.pop();
  }
}
