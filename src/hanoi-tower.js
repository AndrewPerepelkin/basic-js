const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const answer = {
    turns: 0,
    seconds: 0
  }

  answer.turns = Math.pow(2, disksNumber) - 1;
  answer.seconds = Math.trunc(answer.turns / turnsSpeed * 3600);

  return answer;
};
