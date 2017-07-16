// alert("Hello JS!");


console.log('This is a sad, lonely comment.');
document.getElementById('headline').innerHTML = `What's up JavaScripters?`;

document.getElementById('welcome-message').innerHTML = "Welcome to the JavaScript Club!";
/*
So many
Lines of code
I'm not a poet
*/


var lemonadeTracklist = 13;
console.log(lemonadeTracklist);

document.getElementById('beyonce').innerHTML = `The tracklist of Beyonce's Lemonade is: ${lemonadeTracklist}.`;

var numOfKittens = 5;
var numOfPuppies = 4;
var numOfAnimals = numOfPuppies + numOfKittens;

// var firstName = "Ivy";
// var lastName = "DeWitt";

// Update functions on page.
function updateWebPageCredits(firstName, lastName) {


  document.getElementById('naming').innerHTML = `This amazing project is courtesy of
  <em>Cat Farm</em> at <strong>GDI Philly</strong> with additions by master developer
  ${firstName} ${lastName}. <em>Note: This was
  updated using a function!</em>`;
}


updateWebPageCredits("Ivy","Tyler");


function sayMyName(input1, input2, prof) {
  return `Hey, I'm ${input1} ${input2}, and I'm a professional ${prof}.`;
}

var greenLight = sayMyName('Beyonce', 'Knowles', 'singer');
var singer = sayMyName('Ariana', 'Grande', 'singer');
sayMyName('Carly Rae', 'Jespen');
sayMyName('Azaelia', 'Banks', 'rapper');

alert(greenLight);
document.getElementById('songstress').innerHTML = singer;
console.log(singer);

// And some turtle facts for good measure!

function multiplier() {
  document.getElementById('numbers').innerHTML = `Combined number of Kittens and puppies  ${numOfAnimals}`;
}

multiplier();
