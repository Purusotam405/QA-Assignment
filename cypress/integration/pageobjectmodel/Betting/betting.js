import BasePage from "../basepage"

export default class Betting extends BasePage {
    static Betbutton() {
        cy.get(':nth-child(1) > :nth-child(4) > [data-cy=Bet]').click()
    }
    static Backbutton() {

        cy.get('[data-cy=Goback]').click()

    }
    static EmptyField() {

        cy.get('[data-cy=match]').should('have.text', '')
        cy.get('[data-cy=info]').should('have.text', '')
        cy.get('[data-cy=home]').should('have.text', '')
        cy.get('[data-cy=score]').should('have.text', '')
        cy.get('[data-cy=amounts]').should('have.text', '')

        cy.get('[data-cy=submit]').click()
        cy.get('[data-cy=danger]').should('have.text', 'invalid Form')

    }
    static ValidFields() {

        cy.get('[data-cy=match]').type('ng-reflect-model', { force: true })
        cy.get('[data-cy=info]').type('1', { force: true }).should('have.length', '1')
        cy.get('[data-cy=home]').type('2', { force: true }).should('have.length', '1')
        cy.get('[data-cy=score]').type('3', { force: true }).should('have.length', '1')
        cy.get('[data-cy=amounts]').type('4', { force: true }).should('have.length', '1')
        cy.get('[data-cy=submit]').click()
    }
    static ValidationMsg() {

        cy.get('[data-cy=match]').click()
        cy.get('[data-cy=info]').click()
        cy.get('[data-cy=home]').click()
        cy.get('[data-cy=score]').click()
        cy.get('[data-cy=amounts]').click()


        cy.get('[data-cy=homescore]').should('have.text', ' Home Score is required ')
        cy.get('[data-cy=numberreq]').should('have.text', ' Card Info is required ')
        cy.get('[data-cy=awayscore]').should('have.text', ' Away Score is required ')
        // cy.get('[data-cy=amountscore]').should('have.value', ' Amount is required ')

    }
    static Resetbtn() {

        cy.get('[data-cy=match]').type('ng-reflect-model', { force: true })
        cy.get('[data-cy=info]').type('1', { force: true }).should('have.length', '1')
        cy.get('[data-cy=home]').type('2', { force: true }).should('have.length', '1')
        cy.get('[data-cy=score]').type('3', { force: true }).should('have.length', '1')
        cy.get('[data-cy=amounts]').type('4', { force: true }).should('have.length', '1')
        cy.get('[data-cy=reset]').should('be.visible').and('have.text', 'Reset').click()
    }


}