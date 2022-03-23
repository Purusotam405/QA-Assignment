///<reference types="Cypress" />

describe('Login from fixture data', () => {
    beforeEach(() => {
        cy.visit('/login')

    })

    it('Fixture Login', () => {
        cy.fixture('adminLogin').then(data => {
            cy.get('[data-cy=email]').type(data.email)
            cy.get('[data-cy=password').type(data.password)
            cy.get('[data-cy=button]').click()

        })


    })

})
