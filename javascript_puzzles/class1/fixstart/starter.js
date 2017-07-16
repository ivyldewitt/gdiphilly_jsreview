// Create a function called fixStart. It should take a single argument,
// a string, and return a version where all occurrences of its first
// character have been replaced with '*', except for the first character
// itself. You can assume that the string is at least one character long.
function fixStart(word) {
  var firstLetter = word.charAt(0);

  var sub = word.substr(1, word.length - 1);

  second = sub.replace(new RegExp(firstLetter, 'g'), '*');

  return firstLetter + second;
}

var one = fixStart('puppies');
var two = fixStart('baubble');
var three = fixStart('mooseman');

document.getElementById('one').innerHTML = `${one}`;
document.getElementById('two').innerHTML = `${two}`;
document.getElementById('three').innerHTML = `${three}`;
