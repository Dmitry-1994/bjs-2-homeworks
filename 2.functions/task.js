"use strict";

function getArrayParams(...arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  let sum = 0;

  for (let parametr of arr) {
    sum += parametr;
  }

  const avg = parseFloat((sum / arr.length).toFixed(2));

  return {
    min: min,
    max: max,
    avg: avg,
  };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sum = 0;

  for (let parametr of arr) {
    sum += parametr;
  }

  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let parametr of arr) {
    if (parametr % 2 === 0) {
      sumEvenElement += parametr;
    } else {
      sumOddElement += parametr;
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let parametr of arr) {
    if (parametr % 2 === 0) {
      sumEvenElement += parametr;
      countEvenElement++;
    }
  }

  return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let element of arrOfArr) {
    const tmp = func(...element);
    if (tmp >= maxWorkerResult) {
      maxWorkerResult = tmp;
    }
  }

  return maxWorkerResult;
}
