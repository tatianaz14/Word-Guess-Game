var strangerThingsWord = ["eleven", "stranger things", "dustin", "indiana", "storm", "joe", "steve", "lovebird", "cockatiel", "kea", "parakeet", "lory", "kaka", "caique", "conure"];

var wins=0;
var losses=0;
var guesses;
var randomStrangerThings = strangerThingsWord[Math.floor(Math.random() * strangerThingsWord.length)].split("");
console.log(randomStrangerThings);
var hiddenWord;
var wrongLetterChoice;

var changeImage = document.getElementById("gameimg");
var changeGameStatus = document.getElementById("gameStatus");



// Create variables that hold references to the places in the HTML where we want to display things.
var alreadyGuessed = document.getElementById("alreadyGuessed-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeft = document.getElementById("guessesLeft-text");
var displayWord = document.getElementById("displayWord-text");

var startGame = document.getElementsByClassName("btn btn-primary btn-lg");


 

var resetGame = function(){
  //  wins = 0;
  //  losses = 0;
   guesses = 12;
   // Randomly chooses a choice from the options array. 
   randomStrangerThings = strangerThingsWord[Math.floor(Math.random() * strangerThingsWord.length)].split("");
   console.log(randomStrangerThings);
    hiddenWord = [];
    wrongLetterChoice = [];
    for(var i = 0; i<randomStrangerThings.length; i++){
      hiddenWord.push("_");
    }

      guessesLeft.textContent = "Guesses left: " + guesses;  

      displayWord.textContent = "Word: " + hiddenWord.join(" ");
      
      alreadyGuessed.textContent = "Already Guessed: " + wrongLetterChoice;
      
      winsText.textContent = "Wins: " + wins;
      
      lossesText.textContent = "Losses: " + losses;        
}


startGame.onclick = resetGame();
    

  

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

  // Determines which key was pressed.
  var userGuess = event.key;
  



for(var j = 0; j<randomStrangerThings.length; j++){
  if(randomStrangerThings[j] === userGuess && hiddenWord[j] === "_") {
    hiddenWord[j] = userGuess;
   
    if (!randomStrangerThings.includes(userGuess)){
        guesses--
    }
    
    
  }

  else if (!wrongLetterChoice.includes(userGuess) && !randomStrangerThings.includes(userGuess)) {
    wrongLetterChoice.push(userGuess);
    guesses--
  }

  }
    
    
if (!hiddenWord.includes("_") && guesses>=0){
    wins++;
    changeImage.src = "assets/images/winner.jpg";
	changeGameStatus.innerHTML = "YOU'RE A WINNER";
    resetGame();
  }
    
else if (hiddenWord.includes("_") && guesses===0){
  losses++;
  changeImage.src = "https://i.ytimg.com/vi/GgAyEcbxUFo/hqdefault.jpg";
  changeGameStatus.innerHTML = "YOU'RE A loser";
  resetGame();
}


guessesLeft.textContent = "Guesses left: " + guesses;  

displayWord.textContent = "Word: " + hiddenWord.join(" ");

alreadyGuessed.textContent = "Already Guessed: " + wrongLetterChoice;

winsText.textContent = "Wins: " + wins;

lossesText.textContent = "Losses: " + losses;

};
