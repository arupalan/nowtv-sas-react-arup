import Chance from 'chance';
const chance = new Chance();

describe('react-simpleapp-arup', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('has a title', () => {
    cy.contains('React Simple App by Arup');
    expect(1).to.equal(1);
  });

  it('User should be able to see Header styled with class Header_banner', () => {
    cy.contains('Complex web apps made easy');
    cy.get('div > h2:first-of-type + p')
      .invoke('attr', 'class')
      .should('contain', 'Header_banner');
  });

  it('User should be able to see product message', () => {
    cy.get('div > h2:first-of-type + p')
      .parent()
      .should('contain', 'Complex web apps made easy')
      .and('be.visible');
  });

  it('User able to see human readable date', () => {
    cy.get('abbr:first-of-type')
      .parent()
      .should('contain', 'February 27, 2017')
      .and('be.visible');
  });

  it('Should show email on hover', () => {
    cy.getTestElement('message__container')
      .first()
      .trigger('mouseover');
    cy.getTestElement('hover__email__container')
      .should('contain', 'abakera@craigslist.org')
      .and('be.visible');
  });
});
