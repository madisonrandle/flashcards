const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[0];
  }

  takeTurn(userGuess) {
    const turn = new Turn(userGuess, this.returnCurrentCard());
    const currentGuess = turn.evaluateGuess();
    this.turns++;
    !currentGuess && this.incorrectGuesses.push(this.deck[0].id);
    this.deck.shift();
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    const correctGuesses = ((this.turns - this.incorrectGuesses.length) / this.turns * 100);
    return Math.round(correctGuesses);
  }

  endRound() {
    !this.deck.length && console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    return (`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
  }
}

module.exports = Round;
