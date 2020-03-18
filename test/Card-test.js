const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', function() {
  let card;

  beforeEach(() => {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    cardSad = new Card(Date.now(), 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  });

  it('should be a function', () => {
    const card = new Card();
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', () => {
    const card = new Card();
    expect(card).to.be.an.instanceof(Card);
  });

  it('should assign an id if one is not given', () => {
    expect(cardSad.id).to.be.a('number');
  });

  it('should have an id', () => {
    expect(card.id).to.equal(1);
  });

  it('should store a question', () => {
    expect(card.question).to.equal('What is Robbie\'s favorite animal');
  });

  it('should store a list of possible answers', () => {
    expect(card.answers).to.deep.equal(['sea otter', 'pug', 'capybara']);
  });

  it('should store the correct answer', () => {
    expect(card.correctAnswer).to.equal('sea otter');
  });
});
