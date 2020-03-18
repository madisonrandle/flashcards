const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const data = require('../src/data');

// Class default properties - ✔️
// Class methods
// Anything that updates class properties

describe('Turn', () => {
  let card;
  let turn;

  beforeEach(() => {
    card = new Card(data.prototypeData[0]);
    turn = new Turn('object', card);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should accept a user\'s guess', () => {
    expect(turn.userGuess).to.be.a('string');
    expect(turn.userGuess).to.equal('object');
  });

  it('should accept a card\'s content for each play', () => {
    expect(turn.currentCard).to.be.an('object');
    expect(turn.currentCard).to.equal(card);
  });

  it('should return a user\'s guess', () => {
    expect(turn.returnGuess()).to.equal('object');
  });

  it('should return a card\'s content for each play', () => {
    expect(turn.returnCard()).to.equal(card);
  });


});

//
