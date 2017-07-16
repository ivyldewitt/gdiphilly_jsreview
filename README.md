# GDI Intro to JavaScript Notes

To send a popup/alert:
```JavaScript
alert("Blah blah")
```
^ Less common.

Writing to the console/developer tools:
```JavaScript
console.log()
```

^ Useful for testing.

To write to the page:
```JavaScript
document.write()
document.getElementById('headline').innerHTML = 'Hello world';
```
Syntax to link JS files - remember to do this at the end before the closing body tag:

```HTML
  <script src="cool.js"></script>
```
### Variables

* When you first create a variable, it can be undefined.
* To declare/initialize/create a variable, just type the word "Var" and the variable name.
* Good idea to give the variable a starting value.

```JavaScript
  var numOfKittens = 10; //number slash int
  var numOfKittens = 'ten'; //string
  var numOfKittens = [0, 10, 20] //array
```

Naming Conventions
* Variables are case-sensitive - should start w/a letter, $ or _
* New variables should have a unique name
* My option: $ is less common, _ is pretty popular due to underscore.js.


### Debugging 101

Debugging with the Console is always a useful way of trying to figure out specific errors. Note that the error isn't always that accurate or helpful, but you can use it as a starting point to figure out what errors are occurring.

### Strings

* We can add strings to variables, and escape them w/a backslash.

```JavaScript
console.log('adding string\'s with a backslash')
```

* We can 'add' strings together AKA string concatenation.

```JavaScript
var xo = "XO, "
xo += "by Beyonce"
console.log(xo)
```

### Functions

Functions are separable, reusable pieces of code. Variables state values, functions *do* things - calculate, etc.

Ex:

```JavaScript
function turtleFact() {
   console.log(`A turtle's lower shell is call a plastron.`)
}

turtleFact();
turtleFact();
```

^Note: Functions rule b/c we can use them over and over.

Arguments: We can accept input values from functions, which are called arguments.
These inputs allow us to reuse functions with a specific parameter - the parameter
becomes the input for these functions.

```JavaScript
function callKitten(kittenName) {
  console.log('Come here, ' + kittenName + '!');
}
callKitten('Fluffy'); //outputs 'Come here, Fluffy!'
callKitten('Pumpkin'); //outputs 'Come here, Pumpkin!'

```

We can also pass variables into functions - this allows us to add more complex exercises to our code.

```JavaScript
function addOne(inputNumber){
    var newNumber = inputNumber + 1;
    console.log('You now have ' + newNumber);
}
//Declare variables
var numberOfKittens = 5;
var numberOfPuppies = 4;
//Use them in functions
addOne(numberOfKittens);
addOne(numberOfPuppies);    
```

**Note**: When you have a function that takes multiple argument and you specify an argument anything, it returns undefined. If it adds another one it ignores any additional one.

#### Returning Values in Functions
You can have a function give you back a value to use later. Using return will immediately end a function.

### Variable sCOPE

The scope of a variable is how long a computer will remember it. A variable has global scope when it is declared outside a function - can be accessed everywhere.

```JavaScript
var awesomeGroup = 'Girl Develop It'; //Global scope
function whatIsAwesome() {
    console.log (awesomeGroup + ' is pretty awesome.'); //Will work
}
whatIsAwesome();

```

A variable with local scope can't be accessed outside of a function, as local scope means that it's defined within a function.

```JavaScript
function whatIsAwesome() {
    var awesomeGroup = 'Girl Develop It'; //Local scope
    console.log ('I made a variable called awesomeGroup with a value of ' + awesomeGroup); //Will work
}
whatIsAwesome();
console.log (awesomeGroup + ' is pretty awesome.'); //Won't work

```

### Conditional Logic

**Booleans**
- Boolean variables represent the values true and false.

```JavaScript
var isCuralateGreat = true
var isBoardEffectGood = false
// var isIvyPetty - definitely true!
```

Truthy & Falsy
- If you true to use a value other than true or false in JS, it will evaluate them to 'truthy' or 'falsy'.

Ex of Falsy values:
* ""
* undefined
* null

**If Statements**

Use *if* to decide which lines of code to execute. Use *if-else* to execute multipole conditions and scenarios for your code.
```JavaScript
var age = 20;
if (age >= 35) {
    console.log('You can vote AND hold any place in government!');
} else if (age >= 25) {
    console.log('You can vote AND run for the Senate!');
} else if (age >= 18) {
    console.log('You can vote!');
} else {
    console.log('You can\'t vote, but you can still write your representatives.');
}

```
**Logical Operators**

These help to expand on our conditional statements - &&, ||, !var are all logical operators. Useful for ways to combine conditions.

```JavaScript
var bananas = 5;
if (bananas >=2 && bananas <7) {
    console.log('You have a reasonable number of bananas');
} else {
    console.log('Check your banana supply');
}

```

**Arrays**

Arrays are ordered lists of values, and we can use the length property to determine how many values are in an array.

In JavaScript, we can put multiple types of values in an array.

We can access items in an array w/bracket notation - array items start at 0.
```JavaScript
var rainbowColors = ['Red', 'Orange', 'Yellow', 'Green',
'Blue', 'Indigo', 'Violet'];
var firstColor = rainbowColors[0];
var lastColor = rainbowColors[6];
```

**While Loops**

While loops will repeat the same line of code until the condition ends.

**For Loops**

For loops are similar to while loops but we declare a counter in the statement.

We can use for loops to iterate through arrays such as the code below:

```JavaScript
var rainbowColors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
for (var i = 0; i < rainbowColors.length; i++) {
  console.log(rainbowColors[i]);
}              

```

*Note: Beware the Infinite Loop - cause by code that doesn't have an end condition*

**Aside: Updating Elements in the Dom**
Some really neat code below on how to update elements via the DOM. A nice way to do so without the headaches I was getting trying to update via
```JavaScript
var foodString = '<ul> ';
for (var i = 0; i < myFavoriteFoods.length; i++) {
  var index = myFavoriteFoods.indexOf(myFavoriteFoods[i]) + 1;
  foodString += '<li>' + myFavoriteFoods[i] + '</li>';
  console.log(foodString); //We can see how the string updates;
}
foodString += '</ul>';

document.getElementById('foods').innerHTML = foodString;
console.log(foodString);
```

### Objects

Objects let us store a collection of properties.

```JavaScript
var objectName = {
  propertyName: propertyValue,
  propertyName: propertyValue,
  ...
};

```
One of the benefits of objects is that they can store multiple properties such as other objects.

```JavaScript
var aboutMe = {
  hometown: 'Somewhere in Texas',
  hair: 'brown, usually short',
  likes: ['kittens', 'code', 'dancing'],
  birthday: {month: 4, day: 17}
};
```

Access objects using bracket or dot notation.

```JavaScript
var myHometown = aboutMe.hometown //document

var myHair = aboutMe['hair'] //bracket

aboutMe.hair = 'black' //updating values
```
Objects can also be used as function arguments to pass into other data types:

```JavaScript
var WillaTheCat = {
  age: 8,
  furColor: 'orange',
  likes: ['catnip', 'tofurky', 'tuna'],
  birthday: {month: 3, day: 10, year: 2008}
}

function describeCat(cat) {
  console.log('This cat is ' + cat.age + ' years old with ' + cat.furColor + ' fur.');
}

describeCat(WillaTheCat);

```

**Object Methods**

Objects can also be used to hold functions - which are called using dot notation.

```JavaScript
Objects can also hold functions.

var WillaTheCat = {
  age: 8,
  furColor: 'orange',
  meow: function() {
    console.log('meowww');
  },
  eat: function(food) {
    console.log('Yum, I love ' + food);  
  }
};
```

**Anatomy of a Website**

We have HTML: structure, CSS: presentation, and JavaScript: interactivity.

IDs vs Classes:

* IDs are a unique value on a webpage.
* Class - lots of elements can have the same class.

**The Dom Tree**

The Document Object Model - aka the way we interact with a web page. It serves as a tree
or map to how we interact with elements on a page.

Accessing the Dom:

The browser automatically creates a document object to store the DOM on a web page. To find and manipulate the DOM do the following steps:

1. Find the DOM node (HTML element) and store it in a variable.
2. Use methods to manipulate the node.

We can get elements by ID as we've seen many times, and we can also get them by the element tag name. Example below:
```JavaScript
var listItems = document.getElementsByTagName('li');
for (var i =0; i < listItems.length; i++) {
  var listItem = listItems[i];
}
```
Since HTML5, we can also access by additional methods such as getElementsByClassName and querySelector.

```JavaScript
document.getElementsByClassName(className);
document.querySelector(cssQuery);
document.querySelectorAll(cssQuery);
```
Link to documentation on the [querySelector](https://developer.mozilla.org/en-US/Add-ons/Code_snippets/QuerySelector)

**Gentlement vs Gentlements**

If you're using a method w/getElements it will return an array of nodes. You'll need to select them individually using the same bracket notation as you would with an array.

```JavaScript
document.getElementsByTagName('p'); //returns multiple nodes
var specficParagraph = document.getElementsByTagName('p')[2];

```

**DOM Attribute Manipulation**

We can change the src of an image using DOM manipulation.

```JavaScript
<img id="kittenPic" src="http://placekitten.com/200/300" alt="cat"/>

var imgKitten = document.getElementById('kittenPic');
var oldSrc = imgKitten.src;
imgKitten.src = 'http://placekitten.com/100/500';

```
*Or* we could change this using the getAttribute/setAttribute methods.

```JavaScript
var imgKitten = document.getElementById('kittenPic');
var oldSrc = imgKitten.getAttribute('src');
imgKitten.setAttribute('src', 'http://placekitten.com/100/500');

```

**Create New Nodes**

If we need to create new nodes from scratch we can use the following syntax:

```JavaScript

document.createElement(tagName); //Create the node
document.createTextNode(text); //Adding text
document.appendChild(); //Appending to an element
```

Below is an example in action.
```JavaScript
var pageNode = document.getElementsByTagName('body')[0];

var newImg = document.createElement('img');
newImg.src = 'http://placekitten.com/400/300';
newImg.style.border = '1px solid black';
pageNode.appendChild(newImg);

var newParagraph = document.createElement('p');
var paragraphText = document.createTextNode('Squee!');
newParagraph.appendChild(paragraphText);
pageNode.appendChild(newParagraph);

```

**Events**

An event is a type of object that is created when a user interacts with a web page. Ex: 'clicking on an element' is an unique event.

```JavaScript
element.onclick = function () {
  //do something awesome
};

```

You can check out more JS click events here: [JS Events](https://www.w3schools.com/jsref/dom_obj_event.asp)

**Best Practice - Listening Functions**

Listening functions work similarly to many other functions we've done before. Find the object and add the listening function.

```JavaScript
var myTarget = document.getElementById('clickMe');

myTarget.onclick=function(){
     alert ('Hi!');
}

```

**Forms**

You can collect information from users to use in functions. The most common method is an HTML form.

We can retrieve values from form elements using the *value* property.
```JavaScript
var temperature = document.getElementById('temp').value;
console.log (temperature);

```
If you're using submit buttons - you should use the preventDefault() action!

```JavaScript
var submitButton = document.getElementById('tempSubmitButton');
submitButton.onclick = function () {
    event.preventDefault();
    var temperature = document.getElementById('temp').value;
    console.log (temperature);
}
     
```


## Chart:

| Data Types    | Vocabulary    |
| ------------- | ------------- |
| Number        | Variable      |
| String        | Console       |
| Array         | Function      |
| Boolean       | Argument      |
| Objects       | Return        |
|               | If Statement  |
|               | Loops         |
