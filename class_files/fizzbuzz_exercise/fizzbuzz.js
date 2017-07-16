function fizzBuzz() {
  var fizzString = `<ul>`;
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
      fizzString += `<li>FizzBuzz</li>`
    } else if ( i % 5 === 0) {
      console.log("Buzz");
      fizzString += `<li>Buzz</li>`
    } else if ( i % 3 === 0) {
      console.log("Fizz");
      fizzString += `<li>Fizz</li>`
    } else {
      console.log(i);
      fizzString += `<li>${i}</li>`
    }
  }
  fizzString += `</ul>`;
  document.getElementById('fizzbuzz').innerHTML = fizzString;
}

fizzBuzz();
