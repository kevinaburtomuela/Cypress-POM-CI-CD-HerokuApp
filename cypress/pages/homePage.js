import { homeSelectors } from '../selectors/homeSelectors'

class HomePage {

  visit() {
    cy.visit('/')
  }

  
}


export default new HomePage()