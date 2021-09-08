import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  const newArr = domains.reduce((prev, curr) => {
    const arr = curr.split('.').map((v) => `.${v}`);
    const arr2 = arr
      .reverse()
      .reduce((prev1, curr1) => [...prev1, `${prev1[prev1.length - 1] || ''}${curr1}`], []);
    return [...prev, ...arr2];
  }, []);
  return newArr.reduce((prev, curr) => ({
    ...prev,
    [curr]: (prev[curr] || 0) + 1,
  }), {});
}
