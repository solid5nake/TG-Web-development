import Calculator from "./calculator.js";

const CAL = (() => {
  let 
    calculator = new Calculator(),
    el = {
      display: document.getElementById("calc-display"),
      ac: document.getElementById("all-clear")
    },

  calcInput = (input) => {
    calculator.pushInput(input);
    refresh();
  },
  
  refresh = () => {
    el.display.innerHTML = calculator.display;
    el.ac.innerHTML = "C";
  };

  return {
    one:            () => calcInput("1"),
    two:            () => calcInput("2"),
    three:          () => calcInput("3"),
    four:           () => calcInput("4"),
    five:           () => calcInput("5"),
    six:            () => calcInput("6"),
    seven:          () => calcInput("7"),
    eight:          () => calcInput("8"),
    nine:           () => calcInput("9"),
    zero:           () => calcInput("0"),
    dot:            () => calcInput("."),
    plusMinus:      () => calcInput("±"),
    modulo:         () => calcInput("%"),
    division:       () => calcInput("/"),
    multiplication: () => calcInput("*"),
    substraction:   () => calcInput("-"),
    addition:       () => calcInput("+"),
    
    equals: () => {
      calculator.evaluate();
      refresh();
    },

    allClear: () => {
      calculator.allClear();
      refresh();
      if (el.ac.innerHTML == "C") {
        el.ac.innerHTML = "AC";
      }
    }
  };
})();

export default CAL;