const chai = require('chai');
const expect = chai.expect;

const data = require('../src/data');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', () => {
  let card1;
  let card2;
  let card3;
  let deck;

    beforeEach(() => {
      card1 = new Card(data.prototypeData[0]);
      card2 = new Card(data.prototypeData[1]);
      card3 = new Card(data.prototypeData[2]);
      deck = new Deck([card1, card2, card3]);
    });

    it('Should be a function', () => {
      expect(Deck).to.be.a('function');
    });

    it('Should be an instance of Deck', () => {
      expect(deck).to.be.an.instanceof(Deck);
    });

    it('Should be an array of cards', () => {
      expect(deck.cards).to.deep.equal([card1, card2, card3]);
    });

    it('Should know how many cards are in a deck', () => {
      expect(deck.countCards()).to.equal(3);
    });
});
