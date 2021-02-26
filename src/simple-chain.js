const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arrayForElementsOfChain: [],
  getLength() {
    return this.arrayForElementsOfChain.length;
   },
  addLink(value) {
    value = String(value);
    //value = value.toString();
   /*if (value == null) {
      this.arrayForElementsOfChain.push('( null )');
      return this;
    }
    if (value == function() {}) {
      this.arrayForElementsOfChain.push('( function() {}');
      return this;
    }*/
    if (value.length == 0) {
      this.arrayForElementsOfChain.push('');
      return this;
    } else {
      this.arrayForElementsOfChain.push(`( ${value.toString()} )`);
      return this;
    }
  },
  removeLink(position) {
    if (position > 0 && position < this.arrayForElementsOfChain.length && typeof position == 'number') {
    this.arrayForElementsOfChain.splice(position -1, 1);
    return this;
    } else {
    this.arrayForElementsOfChain = [];
    throw Error('Oshibkaaa');
    }
  },
  reverseChain() {
    this.arrayForElementsOfChain.reverse();
    return this;
  },
  finishChain() {
    let chain = this.arrayForElementsOfChain.join('~~');
    this.arrayForElementsOfChain = [];
    return chain;
  }
};

module.exports = chainMaker;