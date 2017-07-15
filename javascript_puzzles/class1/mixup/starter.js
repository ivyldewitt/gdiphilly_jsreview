function mixUp(string1, string2) {
  var ch1 = string1.slice(0, 2);
  var ch2 = string2.slice(0, 2);
  var newSt1 = ch2 + string1.substr(2, string1.length - 1);
  var newSt2 = ch1 + string2.substr(2, string1.length - 1);

  return `The new string is: ${newSt1} ${newSt2}`;
}

var mix = mixUp("dog", "run");


document.getElementById('mixing').innerHTML = mix;
// should return rug don


// Create a function called mixUp. It should take in two strings,
// and return the concatenation of the two strings (separated by a space)
// slicing out and swapping the first 2 characters of each. You can assume
// that the strings are at least 2 characters long. For example:
// mixUp('mix', pod'): 'pox mid'
