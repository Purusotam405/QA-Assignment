/// <reference types="Cypress" />
describe('Kickoff App Registration', () => {
    beforeEach(() => {
        cy.visit('/login');
        cy
            .get('[data-cy=register]').click();
    })
    it('Register with empty values for all fields', function () {

        cy
            .get('[data-cy=email]')
            .should('have.value', '')
        cy
            .get('[data-cy=password]')
            .should('have.value', '')
        cy
            .get('[data-cy="First name"]')
            .should('have.value', '')
        cy
            .get('[data-cy="last name"]')
            .should('have.value', '');
        cy
            .get('[data-cy=register]').should('be.visible').click()
        cy.get('[data-cy=emptyfields]')
            .should('have.text', 'Email and password are required')

    })
    it('Register with only Email and Password', () => {

        cy
            .get('[data-cy=email]').type('purusotam405@gmail.com')
            .should('have.value', 'purusotam405@gmail.com')
        cy
            .get('[data-cy=password]').type('admin123')
            .should('have.value', 'admin123')

        cy
            .get('[data-cy=register]').should('be.visible').click()
        cy
            .get('[data-cy=emptyfields]').contains('Email and password are required')
        cy
            .get('[data-cy=fistnamereq]').should('not.have.text', 'First Name is required')
        cy
            .get('[data-cy=lastnamereq]').should('not.have.text', 'Last Name is required')
    })
    it('Test to register with all the valid input fields', function () {
        cy
            .get('[data-cy=email]').type('purusotam407@gmail.com')
            .should('have.value', 'purusotam407@gmail.com')
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
    it('Register with password less than four character', function () {
        cy
            .get('[data-cy=email]').type('purusotam40@gmail.com')
            .should('have.value', 'purusotam40@gmail.com')
        cy
            .get('[data-cy=password]').type('ad1')
            .should('have.value', 'ad1')
        cy
            .get('[data-cy="First name"]').type('Purusotam')
            .should('have.value', 'Purusotam')
        cy
            .get('[data-cy="last name"]').type('Ghimiray')
            .should('have.value', 'Ghimiray');
        cy
            .get('[data-cy=register]').should('be.visible').click()

    })
    it('Register with existing email but different password,lname and fname', function () {
        cy
            .get('[data-cy=email]').type('purusotam405@gmail.com')
            .should('have.value', 'purusotam405@gmail.com')
        cy
            .get('[data-cy=password]').type('seliseQA123')
            .should('have.value', 'seliseQA123')
        cy
            .get('[data-cy="First name"]').type('Pema')
            .should('have.value', 'Pema')
        cy
            .get('[data-cy="last name"]').type('Wangyel')
            .should('have.value', 'Wangyel');
        cy
            .get('[data-cy=register]').should('be.visible').click()

    })
    it.only('Display of Validation Message for options in register', function () {
        cy
            .get('[data-cy=email]').click()

        cy
            .get('[data-cy=password]').click()

        cy
            .get('[data-cy="First name"]').click()

        cy
            .get('[data-cy="last name"]').click()

        cy
            .get('[data-cy=register]').should('be.visible').click()
        cy.get('[data-cy=emailreq]').should('have.text', ' Email is required ')
        cy.get('[data-cy=passwordreq]').should('have.text', ' Password is required ')
        cy.get('[data-cy=firstnamereq]').should('have.text', ' First Name is required ')
        cy.get('[data-cy=lastnamereq]').should('have.text', ' Last Name is required ')


    })
})