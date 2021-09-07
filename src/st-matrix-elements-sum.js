import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  let result = 0;
  matrix.forEach((str, i, arr) => {
    if (i === 0) {
      str.forEach((num) => {
        result += num;
      });
    } else {
      str.forEach((num, j) => {
        if (arr[i - 1][j] !== 0) {
          result += num;
        }
      });
    }
  });

  return result;
}
