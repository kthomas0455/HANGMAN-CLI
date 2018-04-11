var Word = require('./word.js');
var prompt = require('prompt');

console.log("Welcome to Marvel Character Hangman!");
console.log('Your Heros of choice: ', '(ironman, ', 'deadpool, ', 'wolverine, ', 'hulk, ', 'thor, ', 'groot, ', 'spiderman) ');
console.log("Guess a letter!");

console.log("-----------------------------");
prompt.start();

game = {
 	wordBank: ['ironman', 'deadpool', 'wolverine', 'hulk', 'thor', 'groot', 'spiderman'],
 	wordsWon: 0,
 	guessesRemaining: 10,

 	
 	startGame: function (wrd) {
 		this.resetGuesses();
 		this.currentWrd = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
 		this.currentWrd.getLet();
 		this.promptUser();
 	},

 	resetGuesses: function(){
 		this.guessesRemaining = 10;
 	},

 	promptUser: function(){
 		var currentWrd = game.currentWrd;
 		var promptUser = game.promptUser;
 		prompt.get(['guessLetter'], function(err, result){
 			console.log('letter guessed: ' + result.guessLetter);
 			var manyGuessed = currentWrd.checkLetter(result.guessLetter);

 			if(manyGuessed ==0) {
 				console.log("WRONG");
 				game.guessesRemaining--;
 				
 			} else {
 				console.log("CORRECT");
 					if(currentWrd.findWord()){
 						console.log("You won!");
 						console.log("-------------------");
 						console.log(currentWrd.wordShow());
 						return;
 					}
 			}

 			console.log("Guesses remaining: " + game.guessesRemaining);
 			console.log("-------------------");
 			if((game.guessesRemaining > 0) && (currentWrd.found == false)){
 				promptUser();
 			}
 			else if(game.guessesRemaining ==0){
 				console.log("Game over. Correct Word ", currentWrd.target);
 			} else {
 				console.log(currentWrd.wordShow());
 			}
 		});
 	}
};

game.startGame();
