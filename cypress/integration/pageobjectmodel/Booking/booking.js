import BasePage from "../basepage";
export default class Booking extends BasePage {
    static BookingOption() {
        cy.get('[data-cy=bookings]').should('have.text', 'Booking')
            .and('be.visible').click()

    }
    static GoBackBtn() {
        cy.get('[data-cy=goback]').should('have.text', ' Go back ').click();
    }
    static EmptyFields() {
        cy.get('[data-cy=bookings]').should('have.text', 'Booking')
            .and('be.visible').click()
        cy.get('[data-cy=select]').should('have.value', '')
        cy.get('[data-cy=select]').should('have.value', '')
        cy.get('[data-cy=card]').should('have.value', '')
        cy.get('[data-cy=card]').should('have.value', '')
        cy.get('[data-cy=book]').should('have.text', ' Book the ticket ').click()
        cy.get('[data-cy=error]').should('contain', 'invalid Form')
    }
    static ValidBooking() {
        cy.get('[data-cy=bookings]').should('have.text', 'Booking')
            .and('be.visible').click()
        cy.get('[data-cy=select]').select('Tottenham Hotspur VS Chelsea')
        cy.get('[data-cy=selemail]').type('purusotam405@gmail.com').should('have.value', 'purusotam405@gmail.com')
        cy.get('[data-cy=card]').type('1').should('have.value', '1')
        cy.get('[data-cy=book]').should('have.text', ' Book the ticket ').click()
        cy.get('[data-cy=changes]').should('have.text', ' Save changes ').click()

    }
    static CloseButton() {
        cy.get('[data-cy=bookings]').should('have.text', 'Booking')
            .and('be.visible').click()
        cy.get('[data-cy=select]').select('Tottenham Hotspur VS Chelsea')
        cy.get('[data-cy=selemail]').type('purusotam405@gmail.com').should('have.value', 'purusotam405@gmail.com')
        cy.get('[data-cy=card]').type('1').should('have.value', '1')
        cy.get('[data-cy=book]').should('have.text', ' Book the ticket ').click()
        cy.get('[data-cy=close]').should('have.text', ' Close ').click()
    }
    static ValidationMsg() {
        cy.get('[data-cy=bookings]').should('have.text', 'Booking')
            .and('be.visible').click()
        cy.get('[data-cy=select]').select('Tottenham Hotspur VS Chelsea')
        cy.get('[data-cy=selemail]').should('have.text', '').click()
        cy.get('[data-cy=card]').should('have.text', '').click()
        cy.get('[data-cy=book]').should('have.text', ' Book the ticket ').click()

        cy.get('[data-cy=emailreq]').should('have.text', ' Email is required ')
        cy.get('[data-cy=cardreq]').should('have.text', ' Card Info is required ')
        // cy.get('[data-cy=error]').should('have.text', 'invalid Form')
    }
    static InvalidEmailBooking() {
        cy.get('[data-cy=bookings]').should('have.text', 'Booking')
            .and('be.visible').click()
        cy.get('[data-cy=selemail]').type('123456').should('have.value', '123456')
        cy.get('[data-cy=book]').should('have.text', ' Book the ticket ').click()

    }
    static ResetButton() {
        cy.get('[data-cy=bookings]').should('have.text', 'Booking')
            .and('be.visible').click()
        cy.get('[data-cy=select]').select('Tottenham Hotspur VS Chelsea')
        cy.get('[data-cy=selemail]').type('purusotam405@gmail.com').should('have.value', 'purusotam405@gmail.com')
        cy.get('[data-cy=card]').type('1').should('have.value', '1')
        cy.get('[data-cy=resets]').should('be.visible').and('have.text', 'Reset').click()

    }
}
