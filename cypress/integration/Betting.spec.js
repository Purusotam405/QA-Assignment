/// <reference types="Cypress" />
describe('End to end test for betting validation', function () {
    beforeEach(function () {
        cy.loginsuccess()
    })
    it('Test display option', function () {
        cy.get(':nth-child(1) > :nth-child(4) > [data-cy=Bet]')
            .should('be.visible').and('have.text', ' Bet ').click()

    })
    it('Test Goback button to redirect user to homepage', function () {
        cy.get(':nth-child(1) > :nth-child(4) > [data-cy=Bet]')
            .should('be.visible').and('have.text', ' Bet ').click()
        cy.get('a > .btn').should('be.enabled').and('have.text', ' Go back ').click()

    })
    it('Place the bet with empty values for all fields', function () {
        cy.get(':nth-child(1) > :nth-child(4) > [data-cy=Bet]')
            .should('be.visible').and('have.text', ' Bet ').click()
        cy.get('[data-cy=match]').should('have.text', '')
        cy.get('[data-cy=info]').should('have.text', '')
        cy.get('[data-cy=home]').should('have.text', '')
        cy.get('[data-cy=score]').should('have.text', '')
        cy.get('[data-cy=amounts]').should('have.text', '')


        // cy.get('[data-cy=homescore]').should('have.text', ' Home Score is required ')
        // cy.get('[data-cy=numberreq]').should('have.text', ' Card Info is required ')
        // cy.get('[data-cy=awayscore]').should('have.text', ' Away Score is required ')
        cy.get('[data-cy=submit]').click()
        cy.get('[data-cy=danger]').should('have.text', 'invalid Form')

    })
    it('Place the bet with valid values for all fields', function () {
        cy.get(':nth-child(1) > :nth-child(4) > [data-cy=Bet]')
            .should('be.enabled').and('have.text', ' Bet ').click()
        cy.get('[data-cy=match]').type('ng-reflect-model', { force: true })
        cy.get('[data-cy=info]').type('1', { force: true }).should('have.length', '1')
        cy.get('[data-cy=home]').type('2', { force: true }).should('have.length', '1')
        cy.get('[data-cy=score]').type('3', { force: true }).should('have.length', '1')
        cy.get('[data-cy=amounts]').type('4', { force: true }).should('have.length', '1')
        cy.get('[data-cy=submit]').click()


    })
    it('Display Validation Message for mandatory fields for Bet', function () {
        cy.get(':nth-child(1) > :nth-child(4) > [data-cy=Bet]').click();
        cy.get('[data-cy=match]').type('.', { force: true })
            .should('have.length', '1');
        cy.get('[data-cy=info]').type('.', { force: true })
            .should('have.length', '1');
        cy.get('[data-cy=home]').type('.', { force: true })
            .should('have.length', '1');
        cy.get('[data-cy=score]').type('.', { force: true })
            .should('have.length', '1');
        cy.get('[data-cy=amounts]').type('.', { force: true })
            .should('have.length', '1');

        cy.get('[data-cy=homescore]').should('have.text', ' Home Score is required ')
        cy.get('[data-cy=numberreq]').should('have.text', ' Card Info is required ')
        cy.get('[data-cy=awayscore]').should('have.text', ' Away Score is required ')
        // cy.get('[data-cy=amountscore]').should('have.value', ' Amount is required ')



        // cy.get('[data-cy=danger]').should('have.text', 'invalid Form')
        cy.get('[data-cy=submit]').click();
    })
    it('Test display for Reset Button', function () {
        cy.get(':nth-child(1) > :nth-child(4) > [data-cy=Bet]').should('be.visible')
            .and('have.text', ' Bet ').click()
        cy.get('[data-cy=match]').type('ng-reflect-model', { force: true })
        cy.get('[data-cy=info]').type('1', { force: true }).should('have.length', '1')
        cy.get('[data-cy=home]').type('2', { force: true }).should('have.length', '1')
        cy.get('[data-cy=score]').type('3', { force: true }).should('have.length', '1')
        cy.get('[data-cy=amounts]').type('4', { force: true }).should('have.length', '1')
        cy.get('[data-cy=reset]').should('be.visible').and('have.text', 'Reset').click()
    })
})