/// <reference types="Cypress" />

const { homedir } = require("os")

describe('Access Fixture data by intercept method', () => {
    it('Intercept method', () => {
        cy.visit('/login')
        cy.get('[data-cy="email"]').type('purusotam405@gmail.com')
        cy.get('[data-cy="password"]').type('admin123')
        cy.get('[data-cy=button]').click()
        cy.server()
        cy.route('/fixtures/**', "fixture: home.json ")


    })

})