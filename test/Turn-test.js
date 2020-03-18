const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const data = require('../src/data');

// Class default properties
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

  it('should be instantiated with a guess and card object', () => {
    expect(turn.userGuess).to.equal('object', card);
  })
});

//
