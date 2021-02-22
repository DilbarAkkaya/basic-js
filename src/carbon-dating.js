const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let t = 0;
  const k = 0.693 / HALF_LIFE_PERIOD;
  if ((typeof(sampleActivity)) == 'string' && parseFloat(sampleActivity) > 0 && parseFloat(sampleActivity) < 15) {
      return t = Math.ceil((Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity))) / k);
  } else {
      return false;
  }
};
