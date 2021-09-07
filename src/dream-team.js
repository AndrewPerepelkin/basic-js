import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
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
}
