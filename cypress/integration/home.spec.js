/// <reference types="Cypress" />

describe('Home Page Test', () => {
    it('Homepage', () => {
        cy
            .server()
        cy
            .route('GET', 'http://localhost:3000/fixtures', { fixture: 'Home.json' }).as('home')
        cy
            .visit('/login')
        cy
            .get('[type="text"]').type('admin@gmail.com');
        cy
            .get('[type="password"]').type('$2a$10$Tb7rVyZOgdDP2znliX9FbuZhdXWyS/2K4PlikAaqtw4s3pXcZgXwi');
        cy
            .get('.btn').click();

        cy.get(".container ,#resources, a[href='/fixtures']").click();


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
