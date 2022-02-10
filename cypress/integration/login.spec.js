// describe("Cypress Fixtures Example", function () {

//     before(function () {
//         cy.fixture('credentials').then(function (testdata) {
//             this.testdata = testdata
//         })
//     })
//     it("Login with valid credentials", function () {
//         cy.visit(this.testdata.adminUrl)
//         cy.get('[id=Email]').clear()
//         cy.get('[id=Email]').type(this.testdata.username)
//         cy.get('[id=Password]').clear()
//         cy.get('[id=Password]').type(this.testdata.password)
//         cy.get('[type=submit]').click();

//         cy.url().should('be.equal', this.testdata.adminUrl)
//     });
// });


/// <reference types="Cypress" />

describe('e2e Cypress Test', function () {
    beforeEach(function () {
        cy.fixture('credentials').then(function (credentials) {
            this.credentials = credentials
        })
    })

    // it('Cannot Find User', () => {

    //     cy
    //         .visit('/login');
    //     cy
    //         .get('[data-cy=email]').type('purusotam403@gmail.com').should('have.value', 'purusotam403@gmail.com');

    //     cy
    //         .get('[data-cy=password]').type('admin12').should('have.value', 'admin12');
    //     cy
    //         .get('[data-cy=button]').contains('login').should('be.visible').click();
    //     cy
    //         .get('form.ng-dirty > .alert').should('contain.text', 'Cannot find user')



    // })

    // it.only('Invalid Credentials', () => {

    //     cy
    //         .visit('/login');
    //     cy
    //         .get('[data-cy=email]').type('purusotam405').should('have.value', 'purusotam405');

    //     cy
    //         .get('[data-cy=password]').type('admin12').should('have.value', 'admin12');
    //     cy
    //         .get('[data-cy=button]').contains('login').should('be.visible').click();
    //     cy
    //         .get('form.ng-dirty.ng-touched.ng-valid').find('.alert alert-danger').contains('Email format is invalid')



    // })
    it('Login Successful', function () {

        cy
            .visit(this.credentials.adminUrl)
        cy
            .url().should('include', '/login')
        cy
            .location('protocol').should('eq', 'http:')
        cy
            .title().should('contains', '')
        cy
            .get('[data-cy=anchor]').contains('Register').should('exist')
        cy
            .contains('Email: admin@gmail.com').should('exist')
        cy
            .contains('password: 123456').should('exist')
        cy
            .get('[data-cy="email"]').clear()
        cy
            .get('[data-cy="email"]').type(this.credentials.email, { force: true }).should('have.value', this.credentials.email, { force: true })
        // cy
        //     .get('[data-cy=mail]').type(this.admin.email).should('have.value', this.admin.email);
        //      expect(this.admin.email).to.equal('this.admin.email')

        cy
            .get('[data-cy="password"]').type(this.credentials.password, { force: true }).should('have.value', this.credentials.password, { force: true })
        // cy
        //     .get('[type="password"]').type('this.admin.password').should('have.value', this.admin.password);
        // expect(this.admin.password).to.equal(this.admin.password)
        cy
            .get('[data-cy=button]').contains('login').should('be.visible').click()
        cy
            .get('Unable to authorize').should('not.exist')
        cy
            .url().should('include', '/fixture')

        cy
            .get(':nth-child(1) > :nth-child(4) > .btn').click()
    })

    it.only('login from http request method', () => {
        cy.request({
            method: 'GET',
            url: '/login', // baseUrl is prepend to URL
            // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
            body: {
                email: 'purusotam405@gmail.com',
                password: 'admin123',


            },
        })

        // to prove we have a session
        cy.getCookie('cypress-session-cookie').should('exist')

    })


});
