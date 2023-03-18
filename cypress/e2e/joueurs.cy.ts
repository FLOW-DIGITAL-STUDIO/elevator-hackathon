describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should display loading message when there are no joueurs', () => {
    cy.get('div')
      .contains('loading...')
      .should('be.visible')
  })

  it('should display joueurs data in a table when there are joueurs', () => {
    cy.intercept('GET', '/api/joueurs?page=1&limit=6', { fixture: 'joueurs.json' })
    cy.wait(500) // wait for data to be loaded
    cy.get('table').should('be.visible')
    cy.get('tbody tr').should('have.length', 2)
  })
})
