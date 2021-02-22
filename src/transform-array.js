const CustomError = require("../extensions/custom-error");
module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
     throw new Error('Warning Error')
     }
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-prev") {
      newArray.pop()
    } else if (arr[i] === "--double-next") {
        if (arr[i + 1] !== undefined) {
          newArray.push(arr[i + 1])
         }
    } else if (arr[i] === "--double-prev") {
        if (arr[i - 1] !== undefined){
          newArray.push(arr[i - 1]) }
    } else if (arr[i] === "--discard-next") {
        //if (arr[i + 2] && arr[i + 2].toString().includes('-prev')) {
          if (arr[i + 2] && arr[i + 2] === "--discard-prev" || arr[i + 2] === "--double-prev"){
           i = i + 2
           } else {
           i = i + 1
          }
    } else {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};