// computer guesses a letter

// listen for keyboard "clicks"

// check number with computer guess

// if it is correct, add to wins, reset game

// else, subtract from guesses left, append userGuess to guessedLettersHTML

// else if guessesLeft is zero, end game, add to losses.




// Array of letters and variables.
var computerLetters = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var userGuess = "";
var wins = 0;
var losses = 0;
var guessesLeft = 9;

console.log(computerLetters[2]);
// Generate computer choice.
var computerChoice = computerLetters[Math.floor(Math.random() * computerLetters.length)];
console.log(computerChoice);


document.onkeyup = function(event) {

    var key = event.key;
    if(key === computerChoice){
        console.log("Matched computer guess");
        wins++;
        console.log(wins);
        // restart guessesLeft
        // restart userGuesses
    } else {
        console.log("Did not match computer guess");
        guessesLeft = guessesLeft - 1;
        console.log(guessesLeft);
    }
}