//const CustomError = require("../extensions/custom-error");
module.exports = function repeater(str, options) {
  if (options.hasOwnProperty('repeatTimes') && options.repeatTimes === undefined) {
    options.repeatTimes = 1
  } 
  if (options.hasOwnProperty('additionRepeatTimes') && options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1
  }
  if (options.hasOwnProperty('addition') && options.addition === undefined) {
    options.addition = ''
  }
  if (!options.hasOwnProperty('additionSeparator') && options.additionSeparator === undefined) {
    options.additionSeparator = '|'
  }
  if (!options.hasOwnProperty('separator')) {
    options.separator = '+'
  }
  if (!options.hasOwnProperty('additionRepeatTimes') && options.repeatTimes) {
    return (str + (options.separator + str).repeat(options.repeatTimes - 1))
  }
  if (!options.hasOwnProperty('additionRepeatTimes') && !options.hasOwnProperty('options.repeatTimes')) {
    return (str + options.addition);
  }
  return (str + ((options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1)) + options.addition) + (options.separator + (str + ((options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1)) + options.addition)).repeat(options.repeatTimes - 1);
};