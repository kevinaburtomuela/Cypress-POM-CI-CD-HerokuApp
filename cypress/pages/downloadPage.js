import { downloadSelector } from '../selectors/downloadSelector'

class DownloadPage {


    visit() {
        cy.visit('/download')
}
    downloadImage(){
        cy.get(downloadSelector.helloImage).click()
    }

    validateImage(){
        cy.readFile('cypress/downloads/random_data.txt').should('exist')
    }
}

export default new DownloadPage()