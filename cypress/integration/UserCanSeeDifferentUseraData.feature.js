describe('user can see different users information', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  describe('succesfully', () => {
    it('is expected to show users details', () => {
      cy.get('[data-cy=name]').should('contain', '😃 William');
      cy.get('[data-cy=location]').should('contain', '🏘️ Lagos');
      cy.get('[data-cy=car]').should('contain', '🚘 Honda');
      cy.get('[data-cy=age]').should('contain', '25');
    });
  });
});
