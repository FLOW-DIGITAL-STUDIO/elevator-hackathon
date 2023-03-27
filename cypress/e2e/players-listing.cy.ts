describe('players list', () => {
  it('should list players', () => {
    cy.visit('localhost:3000');
    // cy.get('[aria-label="total-player-0"]');
    cy.get('#players').should(($b) => {
      if ($b.has('[aria-label="total-player-0"]')) {
        expect(true);
      } else {
        cy.get('[aria-label="player-1"]').click();
      }
    });
  });
  it('should test pagination', () => {
    cy.visit('localhost:3000');
    let currentPos: string;
    cy.get('#current-position').should(($e) => (currentPos = $e.text()));
    cy.get('[aria-label="forward"]').click();
    cy.get('#current-position').should(($e) => {
      expect($e.text()).to.equal((parseInt(currentPos, 10) + 1).toString());
    });
    cy.get('[aria-label="backward"]').click();
    cy.get('#current-position').should(($e) => {
      expect($e.text()).to.equal(parseInt(currentPos, 10).toString());
    });
  });
  it('should create user', () => {
    cy.visit('localhost:3000');
  });
});

export {};
