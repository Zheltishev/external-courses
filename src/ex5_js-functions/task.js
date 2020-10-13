class Calculator {
  constructor(val = 0) {
    this.val = val;

    this.add = (el = 0) => {
      this.val += el;

      return this.add;
    };

    this.subtract = (el = 0) => {
      this.val -= el;

      return this.subtract;
    };

    this.multiply = (el = 1) => {
      this.val *= el;

      return this.multiply;
    };

    this.divide = (el = 1) => {
      this.val /= el;

      return this.divide;
    };

    this.getResult = () => {
      return this.val;
    }

    this.reset = () => {
      this.val = 0;

      return this.val;
    };
  }
}

let calculator = new Calculator();

module.exports = calculator;
