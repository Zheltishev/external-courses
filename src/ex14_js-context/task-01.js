class Calculator {
  static value = 0;

  constructor() {
    if (typeof Calculator.instance === 'object') {
      return Calculator.instance;
    }

    this.value = 0;
    Calculator.instance = this;

    return this;
  }

  static add(el = 0) {
    this.value += el;

    return this;
  }

  static subtract(el = 0) {
    this.value -= el;

    return this;
  }

  static multiply(el = 1) {
    this.value *= el;

    return this;
  }

  static divide(el = 1) {
    this.value /= el;

    return this;
  }

  static setState(el) {
    this.value = el;

    return this;
  }

  static reset() {
    this.value = 0;

    return this;
  }

  static fetchData(callback) {
    setTimeout(() => {
      return callback(500);
    }, 1000);

    return this;
  }

  static getResult() {
    return this.value;
  }
}

module.exports = Calculator;
