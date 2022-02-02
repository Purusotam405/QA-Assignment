/// <reference types="Cypress" />

describe('e2e Cypress Test', function () {
    let adminlogging
    beforeEach(function () {
        cy.fixture('adminLogin').then((admin) => {
            adminlogging = admin
        });
    });

    it.only('Cannot Find User', () => {

        cy
            .visit('/login');
        cy
            .get('[data-cy=email]').type('purusotam403@gmail.com').should('have.value', 'purusotam403@gmail.com');

        cy
            .get('[data-cy=password]').type('admin12').should('have.value', 'admin12');
        cy
            .get('[data-cy=button]').contains('login').should('be.visible').click();
        cy
            .get('form.ng-dirty > .alert').should('contain.text', 'Cannot find user')



    })

    // it.only('Invalid Credentials', () => {

    //     cy
    //         .visit('/login');
    //     cy
    //         .get('[type="text"]').type('purusotam405').should('have.value', 'purusotam405');

    //     cy
    //         .get('[type="password"]').type('admin12').should('have.value', 'admin12');
    //     cy
    //         .get('.btn').contains('login').should('be.visible').click();
    //     cy
    //         .get('form.ng-dirty.ng-touched.ng-valid').find('.alert alert-danger').contains('Email format is invalid')



    // })
    it('Login Successful', () => {

        cy
            .visit('/login');
        cy
            .url().should('include', '/login');
        cy
            .location('protocol').should('eq', 'http:')
        cy
            .title().should('contains', '')
        cy
            .get('[data-cy=anchor]').contains('Register').should('exist');
        cy
            .contains('Email: admin@gmail.com').should('exist');
        cy
            .contains('password: 123456').should('exist');
        cy
            .get('[data-cy=email]').type('purusotam405@gmail.com').should('have.value', 'purusotam405@gmail.com');
        // cy
        //     .get('[type="text"]').type('this.admin.email').should('have.value', 'this.admin.email');
        //      expect(this.admin.email).to.equal('this.admin.email')
        cy
            .get('[data-cy=password]').type('admin123').should('have.value', 'admin123');
        // cy
        //     .get('[type="password"]').type('this.admin.password').should('have.value', this.admin.password);
        // expect(this.admin.password).to.equal(this.admin.password)
        cy
            .get('[data-cy=button]').contains('login').should('be.visible').click();
        cy
            .get('Unable to authorize').should('not.exist')
        cy
            .url().should('include', '/fixture');
        cy
            .get(':nth-child(1) > :nth-child(4) > .btn').click();


    });

    it('Betting Validation', function () {
        // cy.get('h3').contains('Tottenham Hotspur VS Chelsea')

        cy.get('[data-cy=match]').type('ng-reflect-model', { force: true })
            .should('have.length', '1');
        cy
            .get('[data-cy=info]').type('2', { force: true })
            .should('have.length', '1');
        cy
            .get('[data-cy=home]').type('3', { force: true })
            .should('have.length', '1');
        cy
            .get('[data-cy=score]').type('4', { force: true })
            .should('have.length', '1');
        cy
            .get('[data-cy=amounts]').type('5', { force: true })
            .should('have.length', '1');
        cy
            .get('[data-cy=submit]').click();
        // cy.get('[data-cy="reset"]').click();
    });

    // it('invalid betting', () => {

    //     cy
    //         .get('#matchId').type('', { force: true })
    //         .should('have.length', '1');
    //     cy
    //         .get('#cardInfo').type('2', { force: true })
    //         .should('have.length', '1');
    //     cy
    //         .get('#homeScore').type('3', { force: true })
    //         .should('have.length', '1');
    //     cy
    //         .get('#awayScore').type('4', { force: true })
    //         .should('have.length', '1');
    //     cy
    //         .get('#amount').type('5', { force: true })
    //         .should('have.length', '1');
    //     cy
    //         .get('.btn-success').click();
    //     cy.get(':nth-child(2) > .help-block > span').contains('Card Info is required')
    // })

    it('Re-login Successful', () => {
        cy
            .visit('/login')
        cy
            .url().should('include', '/login');
        cy
            .get('[data-cy="email"]').type('purusotam405@gmail.com').should('have.value', 'purusotam405@gmail.com');
        cy
            .get('[data-cy="password"]').type('admin123').should('have.value', 'admin123');
        cy
            .get('[data-cy="button"]').contains('login').should('be.visible').click();
        cy
            .contains('Booking').should('be.visible');

        cy
            .url().should('include', '/fixture');
        cy
            .get('.nav-link').click();
    });

    it('Booking Validation', () => {
        cy
            .contains('Booking').should('have.text', 'Booking').click();
        cy
            .contains('Football Fix').should('be.visible');
        cy
            .contains('Logout').should('be.visible');
        cy
            .contains('Go back').should('be.visible');
        cy
            .get('[data-cy=select]').select('Tottenham Hotspur VS Chelsea');
        cy
            .get('[data-cy=selemail]').type('purusotam405@gmail.com')
        cy
            .get('[data-cy=card]').type('2', { force: true })
        cy
            .get('[data-cy=book]').contains('Book the ticket').should('have.text', ' Book the ticket ').click();
        cy
            .get('[data-cy=close]').click();
    });

    it('Match Details', () => {
        cy
            .visit('/login')
        cy
            .url().should('include', '/login');
        cy
            .get('[data-cy="email"]').type('purusotam405@gmail.com').should('have.value', 'purusotam405@gmail.com');
        cy
            .get('[data-cy="password"]').type('admin123').should('have.value', 'admin123');
        cy
            .get('.btn').contains('login').should('be.visible').click();
        cy
            .url().should('include', '/fixture');
        cy
            .get('tbody.text-center > :nth-child(1) > :nth-child(5)').click();
        cy
            .get('[data-cy=goback]').click();
        cy
            .get(':nth-child(2) > :nth-child(5) > .btn').click();
        cy
            .get('[data-cy=goback]').click();
        cy
            .get(':nth-child(3) > :nth-child(5) > .btn').click();
        cy
            .get('[data-cy=goback]').click();
        cy
            .get(':nth-child(4) > :nth-child(5) > .btn').click();
        cy
            .get('[data-cy=goback]').click();
        cy
            .get(':nth-child(5) > :nth-child(5)').click();
        cy
            .get('[data-cy=goback]').click();
        cy
            .get(':nth-child(6) > :nth-child(5) > .btn').click();
        cy
            .get('[data-cy=goback]').click();
        cy
            .get(':nth-child(7) > :nth-child(5) > .btn').click();
        cy
            .get('[data-cy=goback]').click();
        cy
            .get(':nth-child(8) > :nth-child(5) > .btn').click();
        cy
            .get('[data-cy=goback]').click();
        cy
            .get(':nth-child(9) > :nth-child(5) > .btn').click();
        cy
            .get('[data-cy=goback]').click();
        cy
            .get(':nth-child(10) > :nth-child(5) > .btn').click()
        cy
            .get('[data-cy=goback]').click();
        cy
            .get('.nav-item > .btn').contains('Logout').should('be.visible').click();
    });

});