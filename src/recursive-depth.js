const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
  calculateDepth(arr, depth) {
      let depthMax;
      if(depth == undefined){
        depth = 1;
      }
      depthMax = depth;
      for(let i = 0; i < arr.length; i++){
          if(Array.isArray(arr[i])){
              depthMax = Math.max(this.calculateDepth(arr[i], depth + 1), depthMax);
          }
      }
      return depthMax;
  }
};