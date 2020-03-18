const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const data = require('../src/data');

describe('Card', () => {
  let cardContents;
  let card;

  beforeEach(() => {
    cardContents = data.prototypeData[0]
    card = new Card(cardContents);
  });

  it('should be a function', () => {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', () => {
    expect(card).to.be.an.instanceof(Card);
  });

  it('should have an id', () => {
    expect(card.id).to.equal(1);
  });

  it('should store a question', () => {
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
  });

  it('should store a list of possible answers', () => {
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
  });

  it('should store the correct answer', () => {
    expect(card.correctAnswer).to.equal('object');
  });
});
