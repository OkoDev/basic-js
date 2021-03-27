const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth = (arr) => !Array.isArray(arr) ? 0 :
    arr.reduce((max, subArray) => Math.max(max, 1 + this.calculateDepth(subArray)), 1);
};