const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let arr = [];

  members.forEach(str => {
    if (typeof (str) === "string") {
      let member = str.trim().slice(0, 1).toUpperCase();
      arr.push(member);
    }
  });

  let coolSecretName = arr.sort().join('');

  if (coolSecretName === '') {
    return false;
  }
  return coolSecretName;

};
