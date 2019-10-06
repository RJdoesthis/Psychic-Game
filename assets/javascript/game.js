var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guesses = 10;

var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(computerChoice);

let guessletter = "";
document.onkeypress = function (event) {
    var userGuess = event.key;
    $('#CurrentGuess').text("User Guess: " + userGuess);


    console.log(userGuess);

    if (wins = 0, userGuess === computerChoice) {
        wins++;
    }
    else if (userGuess == computerChoice) {
        guesses--;
    }

    if (guesses === 0) {
        losses++
    }

    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guessLeft').innerHTML = "Guesses left: " + guesses;

}