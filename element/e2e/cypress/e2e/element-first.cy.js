describe('Reklama Element – First Test', () => {
  it('should load the homepage and display the header', () => {
    cy.visit('https://reklama-element.pl');
    cy.get('header').should('be.visible');
    cy.title().should('include', 'Reklama');
  });
});