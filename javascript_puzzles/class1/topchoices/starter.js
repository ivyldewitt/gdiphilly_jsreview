// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice",
// picking the right suffix for the number based on what it is.

function topChoices(arr) {
  console.log(`This is a list of my top hobbies!`);
  for (var i = 0; i < arr.length-1;i++) {
    var count = arr.indexOf(arr[i]) + 1;
    if (count === 1) {
      console.log(`My ${count}st choice is ${arr[i]}.`);
    } else if (count === 2){
      console.log(`My ${count}nd choice is ${arr[i]}.`);
    } else if (count === 3) {
      console.log(`My ${count}rd choice is ${arr[i]}.`)
    } else {
      console.log(`My ${count}th choice is ${arr[i]}.`);
    }
    count++;
  }
}

choices = ['programming', 'sewing', 'cooking', 'cleaning', 'yoga', 'meditation', 'petting Toby'];

topChoices(choices);
