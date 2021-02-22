//const CustomError = require("../extensions/custom-error");
module.exports = function countCats(matrix) {
  let count = 0;
  let cat = "^^";
  let arr = matrix.flat();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === cat) {
      count++;
    } else {
      arr[i] = arr[i];
    }
  }
  return count;
};
