

// 1. Intro
console.log('This is a sad, lonely comment.');
document.getElementById('headline').innerHTML = `What's up JavaScripters?`;

document.getElementById('welcome-message').innerHTML = "Welcome to the JavaScript Club!";
/*
So many
Lines of code
I'm not a poet
*/

// 2. Manipulating the DOM & Variable Overview
var lemonadeTracklist = 13;
console.log(lemonadeTracklist);

document.getElementById('beyonce').innerHTML = `The tracklist of Beyonce's Lemonade is: ${lemonadeTracklist}.`;

var numOfKittens = 5;
var numOfPuppies = 4;
var numOfAnimals = numOfPuppies + numOfKittens;

// var firstName = "Ivy";
// var lastName = "DeWitt";

// 3. Function Review

function multiplier() {
  document.getElementById('numbers').innerHTML = `Combined number of Kittens and puppies  ${numOfAnimals}`;
}

multiplier();

function updateWebPageCredits(firstName, lastName) {


  document.getElementById('naming').innerHTML = `This amazing project is courtesy of
  <em>Cat Farm</em> at <strong>GDI Philly</strong> with additions by master developer
  ${firstName} ${lastName}. <em>Note: This was
  updated using a function!</em>`;
}


updateWebPageCredits("Ivy","Tyler");

// 4. Functions w/Inputs
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

// 5. Conditionals

function temp(temperature) {
  if (temperature <= 0 || temperature >= 100) {
    document.getElementById('temp').innerHTML = `It's ${temperature} outside??? Don't even bother going out.`;
  } else if (temperature <= 30 ){
    document.getElementById('temp').innerHTML = 'Make sure to bring a coat & hat!';
  } else if (temperature <= 50) {
     document.getElementById('temp').innerHTML = `${temperature} degrees is pretty chilly - make sure to bring a coat!`;
  } else if (temperature > 50 || temperature <= 75) {
    document.getElementById('temp').innerHTML = `It's ${temperature} degrees! The weather's awesome - go outside and chill.`;
  } else {
    document.getElementById('temp').innerHTML = 'It\'s pretty warm outside - you probably don\'t need a coat.';
  }
}

var degrees = 115;

temp(degrees);

// 6. Arrays

var myFavoriteFoods = ['sushi', 'pasta', 'pizza', 'hamburgers', 'nachos'];

console.log(myFavoriteFoods[3]);
console.log(myFavoriteFoods[2]);
console.log(myFavoriteFoods[5]); //Undefined b/c there's no 5th item!
console.log(myFavoriteFoods[4]);

myFavoriteFoods[2] = 'curry';
console.log(myFavoriteFoods[2]);
myFavoriteFoods.push('ice cream');
console.log(myFavoriteFoods);
myFavoriteFoods.push('pad thai');
document.getElementById('foods').innerHTML = myFavoriteFoods[6];
