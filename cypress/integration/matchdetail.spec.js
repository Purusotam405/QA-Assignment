/// <reference types="Cypress" /> 

describe('End to end Test for Match Details', function () {
    this.beforeEach(function () {
        cy.loginsuccess()
    })
    it('Display of Match details', function () {
        cy.get(':nth-child(1) > :nth-child(5) > [data-cy=match-details]')
            .should('be.enabled').and('have.text', ' Match Detail ').click()

    })
    it('Test on Goback button to redirect to homepage', function () {
        cy.get(':nth-child(1) > :nth-child(5) > [data-cy=match-details]')
            .should('be.enabled').and('have.text', ' Match Detail ').click()
        cy.get('[data-cy=goback]').should('be.visible').and('have.text', ' Go back ').click()


    })
    it.only('Test for successfull Logout', function () {
        cy.get('[data-cy=logout]').should('be.enabled').and('have.text', ' Logout ').click()
    })
})