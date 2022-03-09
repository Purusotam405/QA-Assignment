/// <reference types="Cypress" />

// describe('Access fixture data', function () {
//     let usercredentials
//     beforeEach(function () {
//         cy.fixture('credentials').then((credential) => {
//             usercredentials = credential


//         })
//     })
//     it('Login with valid credentials', function () {
//         cy.visit('/login');
//         cy.get('[data-cy=email]').type(usercredentials.email)
//         cy.get('[data-cy=password]').type(usercredentials.password)
//         cy.get('[data-cy=button]').click();

//     })

describe('Access fixture data with this keyword', function () {
    // beforeEach(function () {
    //     cy.fixture('credentials').as('credential')

    // })
    // it('Login with valid credentials with this keyword', function () {
    //     cy.visit('/login');
    //     cy.get('[data-cy=email]').type(this.credential.email)
    //     cy.get('[data-cy=password]').type(this.credential.password)
    //     cy.get('[data-cy=button]').click();

    // })


    it('Intercept method', () => {
        cy.visit('/login')
        cy.get('[data-cy="email"]').type('purusotam405@gmail.com')
        cy.get('[data-cy="password"]').type('admin123')
        cy.get('[data-cy=button]').click()
        cy.server()
        cy.route('/fixtures/**', "fixture: home.json ")
            .as('home')
    })

    it('API-request', () => {
        cy.request('GET', 'http://localhost:3000/fixtures').then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.body).to.have.length(10)


        })

    })
    // it('API-POST', () => {
    //     cy.request("POST", 'http://localhost:3000/users').then((response) => {

    //     })

    // })

})



