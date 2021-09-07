import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
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
