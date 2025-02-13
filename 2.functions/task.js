"use strict"

function getArrayParams(...arr) {
  let min = Infinity
  let max = - Infinity
  const sumArr = arr.reduce((accumulator, currentValue) => accumulator + currentValue)

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] <= min) {
      min = arr[i];
    }

    if (arr[i] >= max) {
      max = arr[i];
    }
  }

  let avg = parseFloat((sumArr / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
