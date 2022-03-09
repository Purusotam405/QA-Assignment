/// <reference types="Cypress" />


describe('Logging In for booking tickets', function () {
    beforeEach(function () {
        cy.loginsuccess()
    });
    it('Test Display options for booking', function () {

        cy.get('[data-cy=bookings]').should('have.text', 'Booking')
            .and('be.visible').click()

    })

    it('Test if clicking Goback button redirects to homepage', function () {
        cy.get('[data-cy=bookings]').should('have.text', 'Booking')
            .and('be.visible').click()
        cy.get('[data-cy=goback]').should('have.text', ' Go back ').click();

    })
    it('Place the booking with empty values for all fields', function () {
        cy.get('[data-cy=bookings]').should('have.text', 'Booking')
            .and('be.visible').click()
        cy.get('[data-cy=select]').should('have.value', '')
        cy.get('[data-cy=select]').should('have.value', '')
        cy.get('[data-cy=card]').should('have.value', '')
        cy.get('[data-cy=card]').should('have.value', '')
        cy.get('[data-cy=book]').should('have.text', ' Book the ticket ').click()
        cy.get('[data-cy=error]').should('contain', 'invalid Form')

    })
    it('Place the booking with valid values and saved successfully', function () {
        cy.get('[data-cy=bookings]').should('have.text', 'Booking')
            .and('be.visible').click()
        cy.get('[data-cy=select]').select('Tottenham Hotspur VS Chelsea')
        cy.get('[data-cy=selemail]').type('purusotam405@gmail.com').should('have.value', 'purusotam405@gmail.com')
        cy.get('[data-cy=card]').type('1').should('have.value', '1')
        cy.get('[data-cy=book]').should('have.text', ' Book the ticket ').click()
        cy.get('[data-cy=changes]').should('have.text', ' Save changes ').click()


    })
    it('Test with the valid values and when closed no booking is made', function () {
        cy.get('[data-cy=bookings]').should('have.text', 'Booking')
            .and('be.visible').click()
        cy.get('[data-cy=select]').select('Tottenham Hotspur VS Chelsea')
        cy.get('[data-cy=selemail]').type('purusotam405@gmail.com').should('have.value', 'purusotam405@gmail.com')
        cy.get('[data-cy=card]').type('1').should('have.value', '1')
        cy.get('[data-cy=book]').should('have.text', ' Book the ticket ').click()
        cy.get('[data-cy=close]').should('have.text', ' Close ').click()


    })
    it('Display of Validation message for mandatory fields in the booking page', function () {
        cy.get('[data-cy=bookings]').should('have.text', 'Booking')
            .and('be.visible').click()
        cy.get('[data-cy=select]').select('Tottenham Hotspur VS Chelsea')
        cy.get('[data-cy=selemail]').should('have.text', '').click()
        cy.get('[data-cy=card]').should('have.text', '').click()
        cy.get('[data-cy=book]').should('have.text', ' Book the ticket ').click()

        cy.get('[data-cy=emailreq]').should('have.text', ' Email is required ')
        cy.get('[data-cy=cardreq]').should('have.text', ' Card Info is required ')
        cy.get('[data-cy=error]').should('have.text', 'invalid Form')
    })
    it('Test Booking by passing email by passing number only', function () {
        cy.get('[data-cy=bookings]').should('have.text', 'Booking')
            .and('be.visible').click()
        cy.get('[data-cy=selemail]').type('123456').should('have.value', '123456')
        cy.get('[data-cy=book]').should('have.text', ' Book the ticket ').click()

    })
    it.only('Test Reset Button for booking', function () {
        cy.get('[data-cy=bookings]').should('have.text', 'Booking')
            .and('be.visible').click()
        cy.get('[data-cy=select]').select('Tottenham Hotspur VS Chelsea')
        cy.get('[data-cy=selemail]').type('purusotam405@gmail.com').should('have.value', 'purusotam405@gmail.com')
        cy.get('[data-cy=card]').type('1').should('have.value', '1')
        cy.get('[data-cy=resets]').should('be.visible').and('have.text', 'Reset').click()




    })




})
