
class basicAuthPage {


 clickBasicAuth() {
    cy.visit('/basic_auth', {
      auth: {
        username: Cypress.env('username'),
        password: Cypress.env('password')
      }
    })
  }

  validateLoginSuccess() {
    cy.get('.example p')
      .should('be.visible')
      .and('contain', 'Congratulations')
  }

}

export default new basicAuthPage()