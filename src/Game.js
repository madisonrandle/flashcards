const Deck = require('../src/Deck');
const Round = require('../src/Round');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {}

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  startGame() {
    const deck = new Deck(prototypeQuestions);
    const round = new Round(deck);
    this.printMessage(deck);
    this.printQuestion(round);
  }
}

module.exports = Game;
