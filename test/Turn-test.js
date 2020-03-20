const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const data = require('../src/data');

describe('Turn', () => {
  let card, turn;

  beforeEach(() => {
    card = new Card(data.prototypeData[0]);
    turn = new Turn('function', card);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should accept a user\'s guess', () => {
    expect(turn.userGuess).to.be.a('string');
    expect(turn.userGuess).to.equal('function');
  });

  it('should accept a card\'s content for each play', () => {
    expect(turn.currentCard).to.be.an('object');
    expect(turn.currentCard).to.equal(card);
  });

  it('should return a user\'s guess', () => {
    expect(turn.returnGuess()).to.be.a('string');
    expect(turn.returnGuess()).to.equal('function');
  });

  it('should return a card\'s content for each play', () => {
    expect(turn.returnCard()).to.be.an('object');
    expect(turn.returnCard()).to.equal(card);
  });

  it('should evaluate a user\'s guess', () => {
    expect(turn.evaluateGuess()).to.be.a('boolean');
  });

  it('should return true if a user guesses correctly', () => {
    const turn = new Turn('object', card);
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should return false if a user guesses incorrectly', () => {
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should return \'correct!\' if a user guesses correctly', () => {
    const turn = new Turn('object', card);
    expect(turn.giveFeedback()).to.equal('correct!')
  });

  it('should return \'incorrect!\' if a user guesses incorrectly', () => {
    expect(turn.giveFeedback()).to.equal('incorrect!')
  });
});
