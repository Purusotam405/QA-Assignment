/// <reference types="Cypress" />

describe('Access Fixture data from fixture', () => {
    // it('Intercept method', () => {
    //     cy.visit('/login')
    //     cy.get('[data-cy="email"]').type('purusotam405@gmail.com')
    //     cy.get('[data-cy="password"]').type('admin123')
    //     cy.get('[data-cy=button]').click()
    //     cy.server()
    //     cy.route('/fixtures/**', "fixture: home.json ")
    //         .as('home')


    // })
    beforeEach(function () {
        cy.fixture('credentials').then(function (testdata) {
            this.testdata = testdata
        })
    })
    it('Login with valid credentials', function () {
        cy.visit(this.testdata.adminUrl);
        cy.get('[data-cy=email]').clear()
        cy.get('[data-cy=email]').type(this.testdata.email)
        cy.get('[data-cy=password]').clear()
        cy.get('[data-cy=password]').type(this.testdata.password)
        cy.get('[data-cy=button]').click()
        cy.url().should('be.equal', this.testdata.adminUrl)
    })




})