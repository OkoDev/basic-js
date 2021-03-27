const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength () {
    return this.chain.length;
  },
  addLink(value = '') {
    (value === null) ? value = 'null': '';
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position < 1 || this.chain[position] === undefined) {
      this.chain = [];
      throw new Error('Error!');
    }
    this.chain.splice(position -1,1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finalChain = this.chain.length > 0 ? '( ' + this.chain.join(' )~~( ') + ' )' : '';
    this.chain = [];
    return finalChain;
  }
};

module.exports = chainMaker;
