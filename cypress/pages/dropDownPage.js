import { dropDownPageSelectors } from '../selectors/dropDownSelector'
class DropDownPage {


    visit() {
        cy.visit('https://the-internet.herokuapp.com/dropdown')
}

    selectFirstOption() {
        cy.get(dropDownPageSelectors.dropDownList) .select('Option 1')
}

    selectLastOption() {
        cy.get(dropDownPageSelectors.dropDownList) .select('Option 2')
}

}

export default new DropDownPage()