import { checkBoxSelector } from '../selectors/checkBoxSelector'

class CheckBoxPage {


    visit() {
        cy.visit('/checkboxes')
}
    checkAllOptions(){
        cy.get(checkBoxSelector.firstCheckBox).check()
        cy.get(checkBoxSelector.lastCheckBox).check()
    }

    unCheckAllOptions(){
        cy.get(checkBoxSelector.firstCheckBox).uncheck()
        cy.get(checkBoxSelector.lastCheckBox).uncheck()
    }


}

export default new CheckBoxPage()