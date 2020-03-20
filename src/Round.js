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

}

module.exports = Round;
