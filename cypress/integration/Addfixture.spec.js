///<reference types="Cypress" />

describe('Login from fixrure data', () => {
    beforeEach(() => {
        cy.server()
        cy.fixture("adminLogin.json").as('data')
            .then((data) => {
                cy.route('GET', 'adminLogin.json', data)
            })
    })
    it('Fixture Login', () => {
        cy.get('[data-cy=email]').type(JSON.stringify(this.data.email))
        cy.get('[data-cy=password').type(JSON.stringify(this.data.password))
        cy.get('[data-cy=button]').click()

    })

})
