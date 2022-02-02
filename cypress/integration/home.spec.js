/// <reference types="Cypress" />

describe('Home Page Test', () => {
    it('Homepage', () => {
        cy
            .server()
        // cy
        //     .route('GET', 'http://localhost:3000/', { fixture: 'Home.json' }).as('home')

        cy
            .route({
                url: "/users/**", fixture: 'Home.json',
                method: "GET",
                // response: { status: "logged in", code: 200 }
            })
        cy
            .visit('/login')
        cy
            .get('[data-cy="email"]').type('admin@gmail.com');
        cy
            .get('[data-cy="password"]').type('$2a$10$Tb7rVyZOgdDP2znliX9FbuZhdXWyS/2K4PlikAaqtw4s3pXcZgXwi');
        cy
            .get('[data-cy=button]').click();

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
