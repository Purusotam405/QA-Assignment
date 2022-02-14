/// <reference types="Cypress" />

describe('Home Page Test', () => {
    it.only('Homepage', () => {
        cy
            .visit('/login')
        cy
            .get('[data-cy="email"]').type('admin@gmail.com');
        cy
            .get('[data-cy="password"]').type('$2a$10$Tb7rVyZOgdDP2znliX9FbuZhdXWyS/2K4PlikAaqtw4s3pXcZgXwi');
        cy
            .get('[data-cy=button]').click();

        cy.get(".container ,#resources, a[href='/fixtures']").click();
        cy
            .server()


        cy
            .route(
                {
                    url: '/fixtures/**',
                    method: 'POST'
                },
                {
                    fixture: 'home.json'
                }
            ).as('home')



    })



    it('stubbing response', () => {

        // cy.get('[data-cy=email]').type('purusotam405@gmail.com')
        // cy.get('[data-cy=password]').type('admin123')

        cy.fixture('home').then((home) => {
            home.email = 'pranesh403@gmail.com'
            home.password = 'admin234'
            cy.get('[data-cy=button]').click()

        })
        cy.server()
        cy.route('POST', '**/fixtures', home)
        cy.visit('/login')
    })
    it('error', () => {
        cy.visit('/fixtures')
        cy.get('[data-cy=email]').type('purusotam405@gmail.com')
        cy.get('[data-cy=password]').type('admin123')
        cy.get('[data-cy=button]').click()
        cy.server()
        cy.route({
            method: 'POST',
            url: '**/login',
            response: {
                redirect: '/error'
            },
        })
    })


})

// describe('User page', () => {
//     beforeEach(function () {
//         cy.fixture('admin').then((admin) => {
//             this.admin = admin
//         })
//     })

//     it('has user', function () {
//         cy.visit('/login')
//         cy.get('[type="text"]').type(this.admin.email)
//     })
// })
