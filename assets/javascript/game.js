// computer guesses a letter

// listen for keyboard "clicks" and the value of that click.

// check letter with computer guess

// if it is correct, add to wins, reset game

// else, subtract from guesses left, append userGuess to guessedLettersHTML

// else if guessesLeft is zero, end game, add to losses.




// Array of letters and variables.
var computerLetters = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var userGuess;
var wins = 0;
var losses = 0;
var guessesLeft = 9;


//NEED a variable that adds adds the user guesses to the end of a string and that's what it updates to HTML.
var usedLetters = [];

// Generate computer choice.
var computerChoice = computerLetters[Math.floor(Math.random() * computerLetters.length)];
console.log(computerChoice);


document.onkeyup = function(event) {
    
    var userGuess = event.key;
    
    console.log("userGuess: " + userGuess);
    if (guessesLeft === 0) {
        //add one to losses
        losses++;
        // Send losses count to HTML
        document.getElementById("lossesHTML").innerHTML = "Losses: " + losses;
        // alert user how much better computers are than humans.
        alert("You lost!");
        // reset used letters
        usedLetters = [];
        // reset guessed letters
        guessesLeft = 9;
        // update both resets to the html.
        document.getElementById("guessedLettersHTML").innerHTML = "Used Letters: " + usedLetters;
        document.getElementById("guessesLeftHTML").innerHTML = "Guesses Left: " + guessesLeft;
        // reset computer choice.
        computerChoice = computerLetters[Math.floor(Math.random() * computerLetters.length)];
        // console log to check code
        console.log(computerChoice);

    } else if (userGuess === computerChoice){
        // if the user guesses what the computer choice was, it gets a win and game starts over
        console.log("You won!");
        alert("You won!")
        // log wins plus one to html.
        document.getElementById("winsHTML").innerHTML = "Wins: " + ++wins;
        // reset usedLetters variable
        usedLetters = [];
        // reset html pushes for the letters
        document.getElementById("guessedLettersHTML").innerHTML = "Used Letters: " + usedLetters;
        // reset how many guesses are left and log to HTML.
        guessesLeft = 9;
        document.getElementById("guessesLeftHTML").innerHTML = "Guesses left: " + guessesLeft;
        // reset computer choice.
        computerChoice = computerLetters[Math.floor(Math.random() * computerLetters.length)];
        // console log it to check code is working.
        console.log(computerChoice);
        
    } else {
        // if user doesn't guess correctly, guesses left goes down by one...
        // console.log("Did not match computer guess");
        document.getElementById("guessesLeftHTML").innerHTML = "Guesses Left: " + --guessesLeft;
        // ...add a letter to usedLetters variable
        usedLetters.push(userGuess);
        // update the html to reflect the letters in userGuess variable
        document.getElementById("guessedLettersHTML").innerHTML = "Used Letters: " + usedLetters;
    }
}
