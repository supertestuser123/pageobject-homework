const LoginPage = {
    visit(){
        cy.visit('https://authenticationtest.com/simpleFormAuth/')
    },
    fillEmail(email){
        cy.get('#email').type(email)
    },
    fillPassword(password){
        cy.get('#password').type(password)
    },
    submitForm(){
        cy.xpath('//*[@type="submit"]').click()
    },
    emailFieldIsVisible(){
        cy.get('#email').should('exist');
    },
    passwordFieldIsVisible(){
        cy.get('#password').should('exist');
    },
    emailFieldIsEnable(){
        cy.get('#email').should('be.enabled')
    }

}


export default LoginPage