import { sliderSelector } from '../selectors/sliderSelector'

class SliderPage {


    visit() {
        cy.visit('/horizontal_slider')
}
    sliderHalfMove(){
        cy.get(sliderSelector.slider).invoke('val', 2.5).trigger('change')
        cy.get(sliderSelector.slider).should('have.value', '2.5')
    }

    sliderCompleteMove(){
        cy.get(sliderSelector.slider).invoke('val', 5.0).trigger('change')
        cy.get(sliderSelector.slider).should('have.value', '5')
    }

}

export default new SliderPage()