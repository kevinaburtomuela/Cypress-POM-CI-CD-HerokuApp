import { loginFormSelector } from '../selectors/loginFormSelector'

class LoginFormPage {


    visit() {
        cy.visit('/login')
}
    loginSuccess(){
        cy.get(loginFormSelector.usernameField).type('tomsmith')
        cy.get(loginFormSelector.passwordField).type('SuperSecretPassword!')
        cy.get(loginFormSelector.loginButton).click()
    }
    validateLogout(){
        cy.get(loginFormSelector.logoutMessage).should('contain', 'You logged out of the secure area!')
    }

}

export default new LoginFormPage()