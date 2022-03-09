/// <reference types="Cypress" />

describe('e2e Cypress Test', function () {
    beforeEach(() => {
        cy.visit('/login');
    })

    it('Login loaded Successfuly', function () {

        cy
            .url().should('include', '/login')
        cy
            .location('protocol').should('eq', 'http:')
        cy
            .title().should('contains', '')

    })
    it('User prompted to homepage with valid credentials', function () {

        cy
            .get('[data-cy=register]').contains('Register').should('exist')
        cy
            .contains('Email: admin@gmail.com').should('exist')
        cy
            .contains('password: 123456').should('exist')
        cy
            .get('[data-cy="email"]').clear()
        cy
            .get('[data-cy="email"]').type('purusotam405@gmail.com')

        cy
            .get('[data-cy="password"]').type('admin123').should('have.value', 'admin123')

            .get('[data-cy=button]').contains('login').should('be.visible').click()
        cy
            .get('Unable to authorize').should('not.exist')
        cy
            .url().should('include', '/fixture')

    })
    it('Correct Email and Wrong Password', function () {

        cy
            .get('[data-cy="email"]').type('purusotam405@gmail.com')

        cy
            .get('[data-cy="password"]').type('admin1234').should('contain.value', 'admin1234')

            .get('[data-cy=button]').contains('login').should('be.visible').click()
        cy
            .get('[data-cy=alert]').should('have.text', 'Incorrect password')

    })
    it('Wrong Email and Correct Password', function () {

        cy
            .get('[data-cy="email"]').type('purusotam40@gmail.com').should('contain.value', 'purusotam40@gmail.com')

        cy
            .get('[data-cy="password"]').type('admin123').should('contain.value', 'admin123')

            .get('[data-cy=button]').contains('login').should('be.visible').click()
        cy
            .get('[data-cy=alert]').should('have.text', 'Cannot find user')

    })
    it('Invalid Email Format with Correct Password', function () {

        cy
            .get('[data-cy="email"]').type('purusotam405').should('contain.value', 'purusotam405')

        cy
            .get('[data-cy="password"]').type('admin123').should('contain.value', 'admin123')

            .get('[data-cy=button]').contains('login').should('be.visible').click()
        cy
            .get('[data-cy=alert]').should('have.text', 'Email format is invalid')

    })
    it(' Entering only numbers as email address with Correct Password', function () {

        cy
            .get('[data-cy="email"]').type('405').should('contain.value', '405')

        cy
            .get('[data-cy="password"]').type('admin123').should('contain.value', 'admin123')

            .get('[data-cy=button]').contains('login').should('be.visible').click()
        cy
            .get('[data-cy=alert]').should('have.text', 'Email format is invalid')

    })
    it('Login without Email address but with Correct Password', function () {

        cy
            .get('[data-cy="password"]').type('admin123').should('contain.value', 'admin123')

            .get('[data-cy=button]').contains('login').should('be.visible').click()
        cy
            .get('[data-cy=alert]').should('have.text', 'Email and password are required')

    })
    it('Login with Valid Email Address but without Password', function () {

        cy
            .get('[data-cy="email"]').type('purusotam405@gmail.com').should('contain.value', 'purusotam405@gmail.com')

        cy
            .get('[data-cy=button]').contains('login').should('be.visible').click()
        cy
            .get('[data-cy=alert]').should('have.text', 'Email and password are required')

    })
    it('Login without Email Address and without Password', function () {

        cy
            .get('[data-cy=button]').contains('login').should('be.visible').click()
        cy
            .get('[data-cy=alert]').should('have.text', 'Email and password are required')

    })
    it('test display of register page', () => {
        cy
            .visit('/register')
        cy
            .url().should('not.include', '/register')
        cy
            .location('protocol').should('eq', 'http:')
    })
    it.only('test display of register page from login page', () => {

        cy.get('[data-cy=register]').click()
        cy
            .url().should('include', '/register')
        cy
            .location('protocol').should('eq', 'http:')
        cy.get('[data-cy=login]').click()

    })



});
