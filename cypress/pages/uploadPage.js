import { uploadSelector } from '../selectors/uploadSelector'

class UploadPage {


    visit() {
        cy.visit('/upload')
}
    uploadImage(){
        cy.get(uploadSelector.selectImageButton).selectFile('cypress/fixtures/upload/qa.png')
        cy.get(uploadSelector.uploadButton).click()
    }

    validateImage(){
        cy.get(uploadSelector.uploadMessage).should('have.text', 'File Uploaded!')
        cy.get(uploadSelector.archiveMessage).should('contain', 'qa.png')
    }
}

export default new UploadPage()