import config from "../../framework/config/config"
import LoginPage from "../../framework/pages/LoginPage.js"
import 'cypress-xpath'

describe('Домашняя работа', () => {
  beforeEach(() => {
      LoginPage.visit()
      
  })
  
  it.skip('1) Проверка что сайт существует', () => {
    LoginPage.emailFieldIsVisible()
    LoginPage.passwordFieldIsVisible()
  })

  it.skip('2) Проверка успешной авторизации', () => {
    LoginPage.fillEmail(config.user.email)
    LoginPage.fillPassword(config.user.password)
    LoginPage.submitForm()

    cy.url().should('eq','https://authenticationtest.com/loginSuccess/')
  })

  it.skip('3) Проверка авторизации без пароля', () => {
    LoginPage.fillEmail(config.user.email)
    LoginPage.submitForm()
    
    cy.url().should('eq','https://authenticationtest.com/loginFail/')
    
  })

  it.skip('4) Проверка авторизации без почты', () => {
    LoginPage.fillPassword(config.user.password)
    LoginPage.submitForm()

    cy.url().should('eq','https://authenticationtest.com/loginFail/')
  })

  it('5) Проверка невалидной почты', () => {
    LoginPage.fillEmail('123')
    LoginPage.submitForm()
    cy.wait(1000)
    //тут после клика появляется всплывашка, которой нет в коде элемента
    // добавил проверку что поле остается активным и ничего не происходит
    LoginPage.emailFieldIsEnable()
  })

})