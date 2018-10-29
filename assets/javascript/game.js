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

// Variables that hold references to the places in the HTML where I will display things.
var winsText = document.getElementById("winsHTML");
var lossesText = document.getElementById("lossesHTML");
var guessesLeftText = document.getElementById("guessesLeftHTML");
var userLettersText = document.getElementById("guessedLettersHTML")

//NEED a variable that adds adds the user guesses to the end of a string and that's what it updates to HTML.
var usedLetters = [];

// Generate computer choice.
var computerChoice = computerLetters[Math.floor(Math.random() * computerLetters.length)];
console.log(computerChoice);


document.onkeyup = function(event) {
    
    var userGuess = event.key;
    
    console.log("userGuess: " + userGuess);
    if(userGuess === computerChoice){
        // if the user guesses what the computer choice was, it gets a win and game starts over
        console.log("You won!");
        alert("You won!")
        // log wins plus one to html.
        document.getElementById("winsHTML").innerHTML = "Wins: " + wins++;
        // reset usedLetters variable
        usedLetters = [];
        // reset html pushes for the letters
        document.getElementById("guessedLettersHTML").innerHTML = "Used letters: " + usedLetters;
        computerChoice = computerLetters[Math.floor(Math.random() * computerLetters.length)];
        console.log(computerChoice);
        // reset how many guesses are left and log to HTML.
        guessesLeft = 10;
        document.getElementById("guessesLeftHTML").innerHTML = "Guesses left: " + guessesLeft;
        
    } else {
        // if user doesn't guess correctly, guesses left goes down by one...
        // ADD A LETTER TO used letters.
        console.log("Did not match computer guess");
        document.getElementById("guessesLeftHTML").innerHTML = "Guesses left: " + guessesLeft--;
        usedLetters.push(userGuess);
        document.getElementById("guessedLettersHTML").innerHTML = "Used Letters: " + usedLetters;
        // ...add a letter to letters guessed on the html.
        
        // If guess left equals 0, then make losses go up by one, re-run computer choice.
    }
    
    // usedLetters = userGuess;

    //displays text on the html.
    // winsText.textContent = "Wins: " + wins;
    // lossesText.textContent = "Losses: " + losses;
    // guessesLeftText.textContent = "Guesses remaining: " + guessesLeft;
    // userLettersText.innerHTML = "Letters guessed: " + usedLetters;
    
    if (guessesLeft === 0){
        losses++;
        alert("YOU LOSE!")
        guessesLeft = 9;
        // clear usedLetters.
        // new computer choice.
        return;
    }
}
