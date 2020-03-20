const Turn = require('../src/Turn');
// const Deck = require('../src/Deck');
// const util = require('./util');

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

}

module.exports = Round;
