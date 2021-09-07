import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  const arr = n.toString().split('');
  const arrNumbers = arr.reduce((prev, curr, i) => {
    const number = parseInt(arr.filter((num, index) => index !== i).join(''), 10);
    return [...prev, number];
  }, []);
  const max = arrNumbers.sort((a, b) => b - a)[0];
  return max;
}
