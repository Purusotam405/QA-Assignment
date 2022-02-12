/// <reference types="Cypress" />
describe('Kickoff App Registration', () => {
    beforeEach(() => {
        cy.visit('/login');
    })
    it('Registered Successfully', () => {
        cy
            .get('[data-cy=register]').click();
        cy
            .get('[data-cy=email]').type('purusotam401@gmail.com')
            .should('have.value', 'purusotam401@gmail.com')
        cy
            .get('[data-cy=password]').type('admin123')
            .should('have.value', 'admin123')
        cy
            .get('[data-cy="First name"]').type('Purusotam')
            .should('have.value', 'Purusotam')
        cy
            .get('[data-cy="last name"]').type('Ghimiray')
            .should('have.value', 'Ghimiray');
        cy
            .get('[data-cy=register]').should('be.visible').click()




    })
})