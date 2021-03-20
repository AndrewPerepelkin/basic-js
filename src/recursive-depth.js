const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    if (Array.isArray(arr)) {
      arr.forEach(n => {
        let count = this.calculateDepth(n);
        if (count > depth) {
          depth = count;
        }
      })
      return depth + 1;
    } else {
      return depth;
    }
  }
}