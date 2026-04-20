import { floatingMenuSelector } from '../selectors/floatingMenuSelector'

class FloatingMenuPage {


    visit() {
        cy.visit('/floating_menu')
}
    selectFlotingMenu(){
        cy.get(floatingMenuSelector.homeButton).click()
        cy.url().should('include', 'home')
        cy.get(floatingMenuSelector.newsButton).click()
        cy.url().should('include', 'news')
        cy.get(floatingMenuSelector.contactButton).click()
        cy.url().should('include', 'contact')
        cy.get(floatingMenuSelector.aboutButton).click()
        cy.url().should('include', 'about')
    }


}

export default new FloatingMenuPage()