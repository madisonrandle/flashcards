const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', function() {
  let card;

  beforeEach(function() {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    cardSad = new Card(Date.now(), 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  });

// Class default properties
// Class methods
// Anything that updates class properties


  it('should be a function', function() {
    const card = new Card();
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    const card = new Card();
    expect(card).to.be.an.instanceof(Card);
  });

  it('should assign an id if one is not given', function() {
    expect(cardSad.id).to.be.a('number');
  });

  it('should have an id', function() {
    expect(card.id).to.equal(1);
  });

  it('should store a question', function() {
    expect(card.question).to.equal('What is Robbie\'s favorite animal');
  });

  it('should store a list of possible answers', function() {
    expect(card.answers).to.deep.equal(['sea otter', 'pug', 'capybara']);
  });

  it('should store the correct answer', function() {
    expect(card.correctAnswer).to.equal('sea otter');
  });
});
