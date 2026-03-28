import { checkBoxSelectors } from '../selectors/checkBoxSelector'

class CheckBoxPage {


    visit() {
        cy.visit('https://the-internet.herokuapp.com/checkboxes')
}



}

export default new CheckBoxPagePage()