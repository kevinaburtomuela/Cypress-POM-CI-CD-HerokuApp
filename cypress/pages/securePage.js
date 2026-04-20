import { secureSelector } from '../selectors/secureSelector'

class SecurePage {


    visit() {
        cy.visit('/secure')
}
    validatelogin(){
        cy.get(secureSelector.loginMessage).should('contain', 'You logged into a secure area!')
    }

    logout(){

        cy.get(secureSelector.logoutButton).click()
    }


}

export default new SecurePage()