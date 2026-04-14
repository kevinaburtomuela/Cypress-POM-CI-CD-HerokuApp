import { addRemoveSelector } from '../selectors/addRemoveSelector'

class AddRemovePage {


    visit() {
        cy.visit('/add_remove_elements/')
}
    addElement(){
        cy.get(addRemoveSelector.addButton).click()
        cy.get(addRemoveSelector.removeButton).should('be.visible')
    }
    removeElement(){
        cy.get(addRemoveSelector.addButton).click()
        cy.get(addRemoveSelector.removeButton).click()
        cy.get(addRemoveSelector.removeButton).should('not.exist')
    }


}

export default new AddRemovePage()