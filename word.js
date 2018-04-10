var letter = require('./letter.js');

function Word(guess) {
	this.guess = guess;
	this.lets = [];
	this.found = false;

	this.getLet = function() {
		for (var i=0; i < this.guess.length; i++) {
			this.lets.push( new letter(this.guess[i]));
		}
	};

	this.findWord = function() {
		this.found = this.lets.every(function(currLett) {
			return currLett.appear;
		});
		return this.found;
	};

	this.checkLetter = function(guessLetter) {
		var toReturn = 0;

		for (var i = 0; i < this.lets.length; i++) {
			if (this.lets[i].charac == guessLetter){
				this.lets[i].appear = true;
				toReturn++;
			}
		}
		return toReturn;
	};

	this.wordShow = function() {
		var string = '';
		for (var i=0; i < this.lets.length; i++){
			string += this.lets[i].letterRender();
		}
		return string;
	};

}

module.exports = Word;