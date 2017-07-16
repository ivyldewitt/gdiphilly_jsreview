// Write a function that compares two numbers and returns the larger one.
// Be sure to try it our with some different numbers.
// Bonus: add error messages if the numbers are equal or cannot be compared.

function greatestNumber(num1, num2) {
  if (num1 === num2) {
    return `These two numbers are equal`;
  } else if (num1 > num2) {
    return `${num1} is the greatest number.`;
  } else if (num2 > num1) {
    return `${num2} is the greatest number.`;
  } else {
    return `I don't know what to do with these numbers!`;
  }
}

var num = greatestNumber(15, 63);

document.getElementById('num').innerHTML = num;
