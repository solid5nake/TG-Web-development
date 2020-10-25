class Calculator {
  constructor() {
    this.input = [];
  }

  get display() {
    const regex = /[\+-\/\*%]$/;
    const match = this.sum.replace(regex, '').match(/(^-|(?<=[\+-\/\*%])-)?[\d\.]+$/);
    const result = match ? match[0] : this.sum;

    if (Calculator.matchDot(result)) {
      return parseFloat(result).toFixed(2);
    }
    else {
      return result;
    }
  }

  get sum() {
    return this.input.join("");
  }

  get sumReverse() {
    return this.sum.split("").reverse().join("");
  }

  get lastOperatorPrecedence() {
    const operator = Calculator.matchOperator(this.sumReverse);

    if (operator) {
      return Calculator.operatorPrecedence(operator);
    }
  }

  static operatorPrecedence(operator) {
    switch (operator) {
      case "+":
      case "-":
        return 1;
      case "*":
      case "/":
      case "%":
        return 2;
    }
  }

  static matchOperator(string) {
    const match = string.match(/(\+|-|\/|\*|%)/);
    if (match) {
      return match[0];
    }
  }

  static matchDot(string) {
    const match = string.match(/\./);
    if (match) {
      return match[0];
    }
  }

  pushInput(userInput) {
    if (userInput === "±") {
      this.input = this.sum.replace(/[-\d\.]+$/, function (match) {
        return parseFloat(match) * -1;
      }).split('');
    }
    else {
      const operator = Calculator.matchOperator(userInput);


      if (operator) {
        if (Calculator.matchOperator(this.sum.match(/.$/)[0])) {
          this.input.pop();
        }
        const inputPrecedence = Calculator.operatorPrecedence(operator);
        const lastPrecedence = this.lastOperatorPrecedence;
        if (lastPrecedence && inputPrecedence <= lastPrecedence) {
          this.evaluate();
        }
      }
      this.input.push(userInput);
    }
  }

  evaluate() {
    const result = eval(this.sum);

    this.input = [result];
    return result;
  }

  allClear() {
    console.log(this.input);
    this.input = [];
  }
}

export default Calculator;