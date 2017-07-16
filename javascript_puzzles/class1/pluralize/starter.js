// Write a function pluralize that takes in two arguments,
// a number and a word, and returns the plural.

function pluralize(num, word) {
  var plural = word + 's';
  if (num == 1) {
    return `${num}, ${word}`;

  } else {
    return `${num}, ${plural}`;
  }
}

var p1 = pluralize(5, 'cat');
var p2 = pluralize(1, 'dog');

document.getElementById('pluralize1').innerHTML = p1;
document.getElementById('pluralize2').innerhTML = p2;
