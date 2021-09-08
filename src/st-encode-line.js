import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  const code = [];
  const obj = {};
  str.split('').forEach((c, i, arr) => {
    if (c === arr[i + 1]) {
      if (c in obj) {
        obj[c]++;
      } else {
        obj[c] = 2;
      }
    } else if (c in obj) {
      code.push(`${obj[c]}${c}`);
    } else {
      code.push(c);
    }
  });
  return code.join('');
}
