
describe('Create Joueur Form', () => {
    const url = "http://localhost:3000/add";
    it('should submit the form successfully', () => {
        // read url from env 
      cy.visit(url); 
      cy.get('input[name="firstname"]').type('adazdazdazda');
      cy.get('input[name="lastname"]').type('Dodazdazdzade');
      cy.get('input[name="salary"]').type('50000');
      cy.get('input[name="goal"]').type('10');
      cy.get('button[type="submit"]').click();
      cy.location('pathname').should('eq', '/');
    });
  
    it('should display error messages for required fields', () => {
      cy.visit(url); // replace with the actual page URL
  
      cy.get('button[type="submit"]').click();
  
      cy.contains('Must be at least 4 characters');
      cy.contains('Must be at least 4 characters');
    });
  });
  