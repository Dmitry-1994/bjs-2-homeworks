"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;

  if (discriminant === 0) {
    arr.push(-b / (2 * a));
  };

  if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
    arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentMonths = (percent / 100) / 12;
  let bodyLoan = amount - contribution;
  let paymentPerMonth = bodyLoan * (percentMonths + (percentMonths / ((Math.pow((1 + percentMonths), countMonths)) - 1)));
  let amountTotal = (paymentPerMonth * countMonths).toFixed(2);

  return parseFloat(amountTotal);
}