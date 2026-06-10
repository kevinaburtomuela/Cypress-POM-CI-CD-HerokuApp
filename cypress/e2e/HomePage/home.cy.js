import HomePage from '../../pages/homePage'
import BasicAuthPage from '../../pages/basicAuthPage'
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

  it.skip('Basic Auth', () => {
    BasicAuthPage.clickBasicAuth()
    BasicAuthPage.validateLoginSuccess()
    cy.url().should('include', 'herokuapp')
  })

  it('Drop down - first option', () => {
    DropDownPage.visit()
    DropDownPage.selectFirstOption()
  })

    it('Drop down - Last option', () => {
    DropDownPage.visit()
    DropDownPage.selectLastOption()
  })

    it('Checkbox - Check all options', () => {
    CheckBoxPage.visit()    
    cy.url().should('include', 'checkboxes')
    CheckBoxPage.unCheckAllOptions()
  })

   it('Checkbox - Uncheck all options', () => {
    CheckBoxPage.visit()    
    cy.url().should('include', 'checkboxes')
    CheckBoxPage.checkAllOptions()
  })

    it('Slider - Half value', () => {
    SliderPage.visit()
    SliderPage.sliderHalfMove()
  })

    it('Slider - Complete value', () => {
    SliderPage.visit()
    SliderPage.sliderCompleteMove()
  })

    it('Input number - Select the number 10', () => {
    InputPage.visit()
    InputPage.inputANumber()
  })

    it('Add a new element', () => {
    AddRemovePage.visit()
    AddRemovePage.addElement()
  })
    it('Remove an element', () => {
    AddRemovePage.visit()
    AddRemovePage.removeElement()
  })

    it('Floating menu', () => {
    FloatingMenuPage.visit()
    FloatingMenuPage.selectFlotingMenu()
  })

    it('Fill a login form', () => {
    LoginFormPage.visit()
    LoginFormPage.loginSuccess()
    SecurePage.validatelogin()
  })

    it('Logout secure area', () => {
    LoginFormPage.visit()
    LoginFormPage.loginSuccess()
    SecurePage.validatelogin()
    SecurePage.logout()
    LoginFormPage.validateLogout()
  })

    it('File download', () => {
    DownloadPage.visit()
    DownloadPage.downloadImage()
    DownloadPage.validateImage()
  })

    it('File upload', () => {
    UploadPage.visit()
    UploadPage.uploadImage()    
    UploadPage.validateImage()
  })


})