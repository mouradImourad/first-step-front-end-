describe('Hello World App', () => {
  it('should display the correct message', () => {
    cy.visit('/');
    cy.contains('Hello World').should('be.visible');
  });
});
