import HomePage from '../../pages/HomePage'
import BasicAuthPage from '../../pages/basicAuthPage'
import DropDownPage from '../../pages/dropDownPage'

describe('Automation test for Herokuapp', () => {

  beforeEach(() => {
    cy.intercept('https://*.optimizely.com/**', {
      statusCode: 200,
      body: {}
    })

    HomePage.visit()
  })

  it('Basic Auth', () => {
    BasicAuthPage.clickBasicAuth()
    BasicAuthPage.validateLoginSuccess()
    cy.url().should('include', 'herokuapp')
  })

  it('Drop down - first option', () => {
    DropDownPage.visit()
    DropDownPage.selectFirstOption()
  })

    it('Drop down - last option', () => {
    DropDownPage.visit()
    DropDownPage.selectLastOption()
  })

  

})