/// <reference types="Cypress" />

describe('Login from fixture data', function () {
    it('signin', function () {
        cy.visit('/login')

        cy.fixture('adminLogin').then(user => {
            const email = user.email
            const password = user.password

            cy.get('[data-cy=email]').type(email)
            cy.get('[data-cy=password]').type(password)
            cy.get('[data-cy=button]').contains('login').should('be.visible').click();
            // cy.get('[data-cy=logout]').contains('Logout').should('be.visible').scrollIntoView();
            cy
                .screenshot({ capture: 'fullPage' })

        })
    })
})