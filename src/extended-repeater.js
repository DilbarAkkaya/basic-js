//const CustomError = require("../extensions/custom-error");
/*module.exports = function repeater(str, options) {
  str = String(str);
  //if (options.hasOwnProperty('addition') && options.addition !== undefined){
    //options.addition = String(options.addition);
  if (options.hasOwnProperty('repeatTimes') && options.repeatTimes === undefined) {
    options.repeatTimes = 1
  } 
  if (options.hasOwnProperty('additionRepeatTimes') && options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1
  }
  if (options.hasOwnProperty('addition') && options.addition === undefined) {
   options.addition = ''
  }  else {
    options.addition = String(options.addition);
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
    return (str + String(options.addition));
  }
  return (str + ((String(options.addition) + options.additionSeparator).repeat(options.additionRepeatTimes - 1)) + String(options.addition)) + (options.separator + (str + ((String(options.addition) + options.additionSeparator).repeat(options.additionRepeatTimes - 1)) + String(options.addition))).repeat(options.repeatTimes - 1);
}*/
/*module.exports = function repeater(str, {
  repeatTimes = 1,
  separator = '+',
  addition = '',
  additionRepeatTimes = 1,
  additionSeparator = '|',
  }) {
  
    str = String(str);
    let strBuffer = str;
  
    if (addition !== undefined) {
      addition = String(addition);
      let additionBuffer = addition;
  
      for (let i = 1; i < additionRepeatTimes; i++) {
        addition = addition + additionSeparator + additionBuffer;
      }
      str = str + addition;
      strBuffer = str;
      }
  
      for (let i = 1; i < repeatTimes; i++) {
        str = str + separator + strBuffer;
      }
      return str;
    };*/
    module.exports = function repeater(str, options)  {
      let addition = typeof options.addition === "boolean" || options.addition === null || options.addition ? String(options.addition) : '';
      let repeatTimes = options.repeatTimes || 1;
      let additionRepeatTimes = options.additionRepeatTimes || 1;
      let separator = options.separator ? String(options.separator) : "+";
      let additionSeparator = options.additionSeparator ? String(options.additionSeparator) : "|";
      let result = "";
      for (let i = 0; i < repeatTimes; i++) {
        result = result + String(str);
        for (let j = 0; j < additionRepeatTimes; j++) {
          result = result + addition;
          if (j + 1 < additionRepeatTimes) {
            result = result + additionSeparator;
          }
        }
        if (i + 1 < repeatTimes) {
          result = result + separator;
        }
      }
      return result;
    }