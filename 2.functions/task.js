"use strict"

function getArrayParams(...arr) {
	let min = Math.min.apply(null, arr);
	let max = Math.max.apply(null, arr);
	let sumArr = 0;

  for (let parametr of arr) {
    sumArr += parametr;
  }

	let avg = parseFloat((sumArr / arr.length).toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumArr = 0;
	for (let parametr of arr) {
		sumArr += parametr;
	}

  return sumArr;

}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
    
    let min = Math.min.apply(null, arr);
	  let max = Math.max.apply(null, arr);

  return (max - min);

}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }


  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let parametr of arr) {
    if ((parametr % 2) === 0) {
      sumEvenElement += parametr;
    } else {
      sumOddElement += parametr;
    }
  }

  return (sumEvenElement - sumOddElement);

}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let parametr of arr) {
    if ((parametr % 2) === 0) {
      sumEvenElement += parametr;
      countEvenElement ++
    }
  }

  return (sumEvenElement / countEvenElement)

}


function makeWork(arrOfArr, func) {
	let maxWorkerResult = 0;

	for (let arr of arrOfArr) {
		const tmp = func(...arr);
		if (tmp >= maxWorkerResult) {
			maxWorkerResult = tmp;
		}
	}

	return maxWorkerResult;

}