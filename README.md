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




## Chart:

| Data Types    | Vocabulary    |
| ------------- | ------------- |
| Number        | Variable      |
| String        | Console       |
| Array         | Function      |
|               | Argument      |
|               | Return        |
