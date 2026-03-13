"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    return [];
  } else if (discriminant === 0) {
    arr.push(-b / (2 * a));
  } else {
    const firstRoot = (-b + Math.sqrt(discriminant)) / (2 * a);
    arr.push(firstRoot);
    const secondRoot = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(secondRoot);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthlyRate = percent / 100 / 12;
  const body = amount - contribution;
  const monthlyPayment = body * (monthlyRate + (monthlyRate / ((1 + monthlyRate) ** countMonths - 1)));
  const totalPayment = monthlyPayment * countMonths;
  return parseFloat(totalPayment.toFixed(2))
}
