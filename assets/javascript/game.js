


// Computer key choice
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables to keep track of wins and losses, how many guesses are left, and how many have been made
var wins = 0;
var losses = 0;
var ties = 0;
var guessesLeft = 11;
var guessesSoFar = -1;









//This is the core function within which the bulk of the JS will be coded into, because everything going on is related to the key the user presses and the computer's random choice
// Here I am starting bymaking a function to track keys pressed by the user. When any key comes up within the document, it will trigger the hasBeenPressed function.

document.onkeyup = function (hasBeenPressed) {
//the hasBeenPressed function will send info of what key was pressed into the userChoice variable
    var userChoice = hasBeenPressed.key;
//variable computerIsThinkingOf gets information from these functions being applied to the computerChoice array
// Math.floor chooses the largest integer  that is greater than or equal to a given. That's being applid to math.random, which gives a random number between 0 and 1.
// because math.random function is multiplied to computerChoice.length, it will pick a random index from array computerChoice.
//Not too sure About how necessary math.floor is
    var computerIsThinkingOf = computerChoice[Math.floor(Math.random() * computerChoice.length)]; 

    //I created this fucntion to reset the amount of guesses back to 10 when they ran out while adding 1 to the loss counter. I couldn't figure out why it didn't work.
    var reset = function(){
       console.log("resetting game")
        losses++;
        guessesLeft = 11;
            
    }






    if(userChoice === computerChoice){
        wins++;
        guessesSoFar++;
    }

    else if(userChoice !== computerChoice){
        guessesLeft--;
        guessesSoFar++;
    }

    //using my reset function defined above the two if statements
    if(guessesLeft === 0){
        reset();
      
    }
    


var html = "<h3>wins: " + wins + "</h3>" +
        "<h3>losses: " + losses + "</h3>" +
        "<h3>ties: " + ties + "</h3>" +
        "<h3> Guesses Left: " + guessesLeft + "</h3>" +
        "<h3> Guesses So Far " + guessesSoFar +"</h3>";

       
//This finds the "scoreboard" div on our html file, and tells it to get modified by my JS file (the innerHTML part) and specifically to become the html array.

    document.getElementById("scoreboard").innerHTML = html;

    



}

