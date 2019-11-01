var iceCreamFlavor = ["vanilla", "chocolate", "rockyroad", "chocolatechip", "strawberry", "neopalitan", "coffee", "mint", "cookiedough", "cookiesandcream", "mango", "pistachio", "cottoncandy", "butterpecan", "moostetracks"];

var wins=0;
var losses=0;
var guesses;
var randomIceCream = iceCreamFlavor[Math.floor(Math.random() * strangerThingsWord.length)].split("");
console.log(randomIceCream);
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
   randomIceCream = iceCreamFlavor[Math.floor(Math.random() * iceCreamFlavor.length)].split("");
   console.log(randomIceCream);
    hiddenWord = [];
    wrongLetterChoice = [];
    for(var i = 0; i<randomIceCream.length; i++){
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
  



for(var j = 0; j<randomIceCream.length; j++){
  if(randomIceCream[j] === userGuess && hiddenWord[j] === "_") {
    hiddenWord[j] = userGuess;
   
    if (!randomIceCream.includes(userGuess)){
        guesses--
    }
    
    
  }

  else if (!wrongLetterChoice.includes(userGuess) && !randomIceCream.includes(userGuess)) {
    wrongLetterChoice.push(userGuess);
    guesses--
  }

  }
    
    
if (!hiddenWord.includes("_") && guesses>=0){
    wins++;
    changeImage.src = "assets/avataaars3.png";
	changeGameStatus.innerHTML = "You're a winner!";
    resetGame();
  }
    
else if (hiddenWord.includes("_") && guesses===0){
  losses++;
  changeImage.src = "assets/avataaars2.png";
  changeGameStatus.innerHTML = "Bummer. Try Again!";
  resetGame();
}


guessesLeft.textContent = "Guesses left: " + guesses;  

displayWord.textContent = "Word: " + hiddenWord.join(" ");

alreadyGuessed.textContent = "Already Guessed: " + wrongLetterChoice;

winsText.textContent = "Wins: " + wins;

lossesText.textContent = "Losses: " + losses;

};
