import { homeSelectors } from '../selectors/homeSelectors'

class HomePage {

  visit() {
    cy.visit('https://the-internet.herokuapp.com')
  }

  
}


export default new HomePage()