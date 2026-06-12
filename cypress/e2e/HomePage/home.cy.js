import HomePage from '../../pages/homePage'
import DropDownPage from '../../pages/dropDownPage'
import CheckBoxPage from '../../pages/checkBoxPage'
import SliderPage from '../../pages/sliderPage'
import InputPage from '../../pages/inputPage'
import AddRemovePage from '../../pages/addRemovePage'
import FloatingMenuPage from '../../pages/floatingMenuPage'
import LoginFormPage from '../../pages/loginFormPage'
import SecurePage from '../../pages/securePage'
import UploadPage from '../../pages/uploadPage'
import DownloadPage from '../../pages/downloadPage'

describe('Automation test for Herokuapp', () => {

  beforeEach(() => {
    cy.intercept('https://*.optimizely.com/**', {
      statusCode: 200,
      body: {}
    })

    HomePage.visit()
  })

  it('Test case 1 - Drop down - first option', () => {
    DropDownPage.visit()
    DropDownPage.selectFirstOption()
  })

    it('Test case 2 - Drop down - Last option', () => {
    DropDownPage.visit()
    DropDownPage.selectLastOption()
  })

    it('Test case 3 - Checkbox - Check all options', () => {
    CheckBoxPage.visit()    
    cy.url().should('include', 'checkboxes')
    CheckBoxPage.unCheckAllOptions()
  })

   it('Test case 4 - Checkbox - Uncheck all options', () => {
    CheckBoxPage.visit()    
    cy.url().should('include', 'checkboxes')
    CheckBoxPage.checkAllOptions()
  })

    it('Test case 5 - Slider - Half value', () => {
    SliderPage.visit()
    SliderPage.sliderHalfMove()
  })

    it('Test case 6 - Slider - Complete value', () => {
    SliderPage.visit()
    SliderPage.sliderCompleteMove()
  })

    it('Test case 7 - Input number - Select the number 10', () => {
    InputPage.visit()
    InputPage.inputANumber()
  })

    it('Test case 8 - Add a new element', () => {
    AddRemovePage.visit()
    AddRemovePage.addElement()
  })
    it('Test case 9 - Remove an element', () => {
    AddRemovePage.visit()
    AddRemovePage.removeElement()
  })

    it('Test case 10 - Floating menu', () => {
    FloatingMenuPage.visit()
    FloatingMenuPage.selectFlotingMenu()
  })

    it('Test case 11 - Fill a login form', () => {
    LoginFormPage.visit()
    LoginFormPage.loginSuccess()
    SecurePage.validatelogin()
  })

    it('Test case 12 - Logout secure area', () => {
    LoginFormPage.visit()
    LoginFormPage.loginSuccess()
    SecurePage.validatelogin()
    SecurePage.logout()
    LoginFormPage.validateLogout()
  })

    it('Test case 13 - File download', () => {
    DownloadPage.visit()
    DownloadPage.downloadImage()
    DownloadPage.validateImage()
  })

    it('Test case 14 - File upload', () => {
    UploadPage.visit()
    UploadPage.uploadImage()    
    UploadPage.validateImage()
  })


})