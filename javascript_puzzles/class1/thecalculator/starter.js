function squareNumber(num) {
  sq = num * num
  return `The result of square the number ${num} is: ${sq}.`;
}


function halfNumber(num) {
  div = num / 2
  return `Half of ${num} is ${div}.`;
}

function percentOf(num1, num2) {
  percent = (num1/num2) * 100;
  return `${num2} is ${percent}% of ${num1}`;
}
//Come back to you :P

function areaOfCircle(radius) {
  area = 2 * radius * 3.14;
  return `The area for a circle with radius ${radius} is: ${area}.`;
}

function theCalcSupreme(num) {
  var halved = num/2;
  var squared = halved * halved;
  var areaCalc = squared * 3.14 * 2;
  var percentage = (areaCalc/squared) * 100;
  return `The result of this amazing calculation is ${percentage}.`;
}

var square = squareNumber(6);

document.getElementById('calc1').innerHTML = square;
document.getElementById('calc2').innerHTML = halfNumber(4);
document.getElementById('calc3').innerHTML = areaOfCircle(6);
document.getElementById('calc4').innerHTML = theCalcSupreme(50);
