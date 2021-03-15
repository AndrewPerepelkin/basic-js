const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let cats = [];

  matrix.forEach(arr => {
    arr.filter(item => {
      if (item === '^^') {
        cats.push(item);
      }
    })
  });
  return cats.length;
};
