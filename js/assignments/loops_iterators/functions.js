'use strict';

const sports = ["voetbal", "basketbal", "volleybal", "hockey", "honkbal", "zwemmen", "korfbal"] 

// Opdracht 1
// de for loop is hier van kracht, argumenten (begin, condition, step)
const printSport  = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    console.log(arr[i]);
  }
}

// Opdracht 2
// if statement houdt in dat de body alleen wordt uitgevoerd wanneer bij het delen van i door 2 de restwaarde 0 is.
const printEvenNumber = (limit) => {
  for (let i = 0; i < (limit + 1); i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

// Opdracht 3
// Onderstaande code print alleen de items uit de array met een index nummer een even number is.
function printSport3(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      console.log(arr[i]);
    }
  }
}

// Opdracht 4
// Onderstaande code is geschreven met de while loop, zolang de gestelde condition true is zal het blijven itereren totdat het false is.
function printSport4(arr) {
  let i = 0;
  while (i < arr.length) {
    console.log(arr[i]);
    i++;
  }
}

// Opdracht 5
// Het itereert over enumerable, non symbolic properties van arrays of objects. Omdat het itereert over een array in plaats van een object. Is "let sport" een getal, de index van de arrayitem de key.
// Vandaar dat in de console.log sport als index wordt meegegeven.
function printSport5(sports) {
  for (let sport in sports) {
    console.log( sports[sport]);
  }
}

// Opdracht 6
// for..of loop itereert over iterable object, in dit geval een array, het itereert op variable sport over iterable object sports.
function printSport6(sports) {
  for (const sport of sports) {
    console.log(sport);
  }
}

// Opdracht 7
// In de function printNumbers() itereert de while loop 3 keer (r === 0,r === 1, r === 2) , de if statements zijn geinitialiseerd om extra conditions mee te geven aan de while en  for...loops.
// De for..loop iteraties printen per iteratie een getal uit, bij de 2e (r === 1) en 3e (r === 2) ronde zijn extra conditions mee gegeven, waarbij % de modulo oftewel de restwaarde van belang zijn. 

const printNumbers = () => {
  let r = 0;
  while (r != 3) {
    if (r === 0) {
      for (i = 1; i < 11; i++) {
        console.log(i);
      }
    }
    if (r === 1) {
      for (j = 2; j < 21; j++) {
        if (j % 2 == 0) {
          console.log(j);
        }
      }
    }
    if (r === 2) {
      for (k = 3; k < 31; k++) {
        if (k % 3 == 0) {
          console.log(k);
        } 
      }
    }
    r++
  }
}

// Opdracht 8

// refactored, relatief/dynamische indexes, set default value argument, logical OR
function fibonacci(sequence) {
  sequence || (sequence = 50);

  let sum = [];

  const createFibonacci = () => {
    sum.push(sum[sum.length - 1] + sum[sum.length - 2])
  }

  const printFibonacci = () => {
    console.log(sum[sum.length - 1]);
  }

  for (let r = 0; r < sequence; r++) {
    if (sum.length < 2) {
      sum.push(r);
      printFibonacci();
    }
    else {
      createFibonacci();
      printFibonacci();
      sum.shift();
    }
  }
}

// original
function fibonacciOriginal() {
  let sum = [];
  for (let r = 0; r < 50; r++) {
    if (r < 2) {
      sum.push(r);
      console.log(r);
    }
    if (r === 1) {
      sum.push(sum[0] + sum[1]);
      console.log(sum[2]);
    }
    if (r > 2) {
      sum.push(sum[1] + sum[2]);
      console.log(sum[2]);
      sum.shift();
    }
  }
}

// Opdracht 9
// Bij elke iteratie ronde eindigt het grootste getal rechts van de array Numbers.

const numbers = [2,7,5,10,4,9,3,1,8,6];

const swapNumber = (array) => {
  for (let li = 0; li < array.length; li++) {
    let ri = li + 1;
    let swap = array[ri];
    if (array[li] > array[ri]) {
      array[ri] = array[li];
      array[li] = swap;
    }
  }
}
const bubbleSort = (inputArr) => {
  let array = [];
  for (let i = 0; i < inputArr.length; i++) {
    array[array.length] = inputArr[i];
  }
  for (let r = 0; r < array.length; r++) {
    swapNumber(array);
  }
  return array;
}
