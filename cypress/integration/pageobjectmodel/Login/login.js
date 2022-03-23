import BasePage from "../basepage"
export default class Login extends BasePage {

    static PageLoad() {
        cy.fixture('adminLogin').then(data => {
            cy.visit(data.adminUrl)
            cy.url().should('include', '/login')
            cy.location('protocol').should('eq', 'http:')
            cy.title().should('contains', '')
        })
    }
    static HomePage() {
        cy.fixture('adminLogin').then(data => {
            cy.get('[data-cy=register]').contains('Register').should('exist')
            cy.contains('Email: admin@gmail.com').should('exist')
            cy.contains('password: 123456').should('exist')
            cy.get('[data-cy="email"]').clear()
            cy.get('[data-cy="email"]').type(data.email).should('have.value', data.email)
            cy.get('[data-cy="password"]').type(data.password).should('have.value', data.password)
            cy.get('[data-cy=button]').contains('login').should('be.visible').click()
            cy.get('Unable to authorize').should('not.exist')
            cy.url().should('include', '/fixture')

        })

    }
    static CorrectEmailWrongPassword() {
        cy.get('[data-cy="email"]').type('purusotam405@gmail.com')
        cy.get('[data-cy="password"]').type('admin1234').should('contain.value', 'admin1234')
        cy.get('[data-cy=button]').contains('login').should('be.visible').click()
        cy.get('[data-cy=alert]').should('have.text', 'Incorrect password')

    }
    static WrongEmailCorrectPassword() {
        cy.get('[data-cy="email"]').type('purusotam40@gmail.com').should('contain.value', 'purusotam40@gmail.com')
        cy.get('[data-cy="password"]').type('admin123').should('contain.value', 'admin123')
        cy.get('[data-cy=button]').contains('login').should('be.visible').click()
        cy.get('[data-cy=alert]').should('have.text', 'Cannot find user')
    }
    static InvalidEmailFormat() {
        cy.get('[data-cy="email"]').type('purusotam405').should('contain.value', 'purusotam405')
        cy.get('[data-cy="password"]').type('admin123').should('contain.value', 'admin123')
        cy.get('[data-cy=button]').contains('login').should('be.visible').click()
        cy.get('[data-cy=alert]').should('have.text', 'Email format is invalid')

    }
    static NumberAsEmail() {
        cy.get('[data-cy="email"]').type('405').should('contain.value', '405')
        cy.get('[data-cy="password"]').type('admin123').should('contain.value', 'admin123')
        cy.get('[data-cy=button]').contains('login').should('be.visible').click()
        cy.get('[data-cy=alert]').should('have.text', 'Email format is invalid')

    }
    static LoginWithoutEmail() {
        cy.get('[data-cy="password"]').type('admin123').should('contain.value', 'admin123')
        cy.get('[data-cy=button]').contains('login').should('be.visible').click()
        cy.get('[data-cy=alert]').should('have.text', 'Email and password are required')

    }
    static OnlyEmail() {
        cy.get('[data-cy="email"]').type('purusotam405@gmail.com').should('contain.value', 'purusotam405@gmail.com')
        cy.get('[data-cy=button]').contains('login').should('be.visible').click()
        cy.get('[data-cy=alert]').should('have.text', 'Email and password are required')
    }
    static WithoutEmailAndPassword() {
        cy.get('[data-cy=button]').contains('login').should('be.visible').click()
        cy.get('[data-cy=alert]').should('have.text', 'Email and password are required')

    }
    static OnlyPassword() {
        cy.get('[data-cy=button]').contains('login').should('be.visible').click()
        cy.get('[data-cy=alert]').should('have.text', 'Email and password are required')

    }
    static DisplyRegisterPage() {
        cy.visit('/register')
        cy.url().should('not.include', '/register')
        cy.location('protocol').should('eq', 'http:')

    }
    static RegisterPageFromLogin() {
        cy.get('[data-cy=register]').click()
        cy.url().should('include', '/register')
        cy.location('protocol').should('eq', 'http:')
        cy.get('[data-cy=login]').click()

    }


}


