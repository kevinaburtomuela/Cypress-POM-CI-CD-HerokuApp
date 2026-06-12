import { inputSelector } from '../selectors/InputSelector'

class InputPage {


    visit() {
        cy.visit('/inputs')
}
    inputANumber(){
        cy.get(inputSelector.inputnumber).clear().type('10')
        cy.get(inputSelector.inputnumber).should('have.value', '10')
    }


}

export default new InputPage()