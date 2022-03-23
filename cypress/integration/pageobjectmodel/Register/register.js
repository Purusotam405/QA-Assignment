import BasePage from "../basepage";
export default class Register extends BasePage {
    static EmptyFieldsRegister() {
        cy.get('[data-cy=email]').should('have.value', '')
        cy.get('[data-cy=password]').should('have.value', '')
        cy.get('[data-cy="First name"]').should('have.value', '')
        cy.get('[data-cy="last name"]').should('have.value', '');
        cy.get('[data-cy=register]').should('be.visible').click()
        cy.get('[data-cy=emptyfields]').should('have.text', 'Email and password are required')
    }
    static OnlyEmailAndPassword() {
        cy.get('[data-cy=email]').type('purusotam40@gmail.com')
            .should('have.value', 'purusotam40@gmail.com')
        cy.get('[data-cy=password]').type('admin123')
            .should('have.value', 'admin123')

        cy.get('[data-cy=register]').should('be.visible').click()
    }
    static ValidRegisterFields() {
        cy.get('[data-cy=email]').type('purusotam40@gmail.com')
            .should('have.value', 'purusotam40@gmail.com')
        cy.get('[data-cy=password]').type('ad1')
            .should('have.value', 'ad1')
        cy.get('[data-cy="First name"]').type('Purusotam')
            .should('have.value', 'Purusotam')
        cy.get('[data-cy="last name"]').type('Ghimiray')
            .should('have.value', 'Ghimiray');
        cy.get('[data-cy=register]').should('be.visible').click()

    }
    static RegInvalidPassword() {
        cy.get('[data-cy=email]').type('purusotam40@gmail.com')
            .should('have.value', 'purusotam40@gmail.com')
        cy.get('[data-cy=password]').type('ad1')
            .should('have.value', 'ad1')
        cy.get('[data-cy="First name"]').type('Purusotam')
            .should('have.value', 'Purusotam')
        cy.get('[data-cy="last name"]').type('Ghimiray')
            .should('have.value', 'Ghimiray');
        cy.get('[data-cy=register]').should('be.visible').click()
    }

    static RegwithExistingEmail() {
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
    }
    static RegisterValidation() {
        cy.get('[data-cy=email]').click()

        cy.get('[data-cy=password]').click()

        cy.get('[data-cy="First name"]').click()

        cy.get('[data-cy="last name"]').click()

        cy.get('[data-cy=register]').should('be.visible').click()
        cy.get('[data-cy=emailreq]').should('have.text', ' Email is required ')
        cy.get('[data-cy=passwordreq]').should('have.text', ' Password is required ')
        cy.get('[data-cy=firstnamereq]').should('have.text', ' First Name is required ')
        cy.get('[data-cy=lastnamereq]').should('have.text', ' Last Name is required ')

    }
}
