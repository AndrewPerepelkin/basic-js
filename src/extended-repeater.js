import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let parsedStr = String(str);
  let result = '';

  let repeatTimes;
  if ('repeatTimes' in options) {
    repeatTimes = Number(options.repeatTimes);
  } else {
    repeatTimes = 1;
  }

  let additionRepeatTimes;
  if ('additionRepeatTimes' in options) {
    additionRepeatTimes = Number(options.additionRepeatTimes);
  } else {
    additionRepeatTimes = 1;
  }

  let parsedAdd;
  if ('addition' in options) {
    parsedAdd = String(options.addition);
  } else {
    parsedAdd = '';
  }

  let separator;
  if ('separator' in options) {
    separator = String(options.separator);
  } else {
    separator = '+';
  }

  let addSeparator;
  if ('additionSeparator' in options) {
    addSeparator = String(options.additionSeparator);
  } else {
    addSeparator = '|';
  }


  function makeAdded(str, repTimes, separator) {
    let result = '';
    if (!str) {
      return result = '';
    }

    let repStr = str + separator;
    result = repStr.repeat(repTimes - 1) + str;
    return result;
  }

  let adding = makeAdded(parsedAdd, additionRepeatTimes, addSeparator);

  result = (parsedStr + adding + separator).repeat(repeatTimes - 1) + (parsedStr + adding);

  return result;
}
