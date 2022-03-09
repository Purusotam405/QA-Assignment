import Login from './pageobjectmodel/login'

describe('Login', function () {
    const login = new Login()

    it('Sign in', function () {
        cy.visit('http://localhost:4200/login')
        login.email().type('purusotam405@gmail.com')
        login.password().type('admin123')
        login.button().should('be.visible').click()
    })
})