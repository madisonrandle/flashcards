const chai = require('chai');
const expect = chai.expect;

const data = require('../src/data');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;

  beforeEach(() => {
    card1 = new Card(data.prototypeData[0]);
    card2 = new Card(data.prototypeData[1]);
    card3 = new Card(data.prototypeData[2]);
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('Should be a function', () => {
  expect(Round).to.be.a('function');
});

it('Should be an instance of Round', () => {
  expect(round).to.be.an.instanceof(Round);
});

it('Should store an array of cards', () => {
  expect(round.deck).to.be.an('array');
  expect(round.deck).to.deep.equal([card1, card2, card3]);
});

it('Should start a round with 0 turns', () => {
  expect(round.turns).to.equal(0);
});

it('Should store an array of incorrect guesses', () => {
  expect(round.incorrectGuesses).to.deep.equal([]);
});

it('Should return the current card', () => {
  expect(round.returnCurrentCard()).to.equal(card1);
});


});
