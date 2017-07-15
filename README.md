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

## Chart:

*Data Types:* Number, String

*Vocab:* Variable, Console, Data Type, Function, Argument, Return
