const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    let elem = value !== undefined ? value : '';
    let item = String(elem);
    const e = '( ' + item + ' )';
    this.chain.push(e);
    return chainMaker;
  },
  removeLink(position) {
    if ((typeof (position) !== 'number') || (position ^ 0) !== position) {
      this.chain = [];
      throw new Error('Position is not a number or not a integer');
    }
    if (this.chain[(position - 1)] === undefined) {
      this.chain = [];
      throw new Error('Position is not exist');
    }
    this.chain.splice((position - 1), 1);
    return chainMaker;
  },
  reverseChain() {
    this.chain.reverse();
    return chainMaker;
  },
  finishChain() {
    const chain = this.chain.join('~~');
    this.chain = [];
    return chain;
  }
};

module.exports = chainMaker;