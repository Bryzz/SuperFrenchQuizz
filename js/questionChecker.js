function checkAnswers(answerList, generatedQuestion) {
  var result = [true,[""]];
  for (var i = 0; i < answerList.length; i++) {
    if (answerList[i].value == "") {
      result = [false,[""]];
      return result;
    }
    if (answerList[i].value != getAnswer(generatedQuestion,i)) {
      result[0] = false;
      result[1] += "<span class=\"wrongAnswer\">" + getAnswer(generatedQuestion,i) + "</span>";
      if (i < answerList.length-1) {
        result[1] += ", ";
      }
    }
    else {
      result[1] += "<span class=\"goodAnswer\">" + getAnswer(generatedQuestion,i) + "</span>";
      if (i < answerList.length-1) {
        result[1] += ", ";
      }
    }
  }
  return result;
}
