/// <reference types="Cypress" />

describe('Seeding the data database', () => {
    it('Talking with the database', () => {
        beforeEach(() => {
            cy.exec('npm run db:reset && run db:seed')


            cy.request('POST', '/test/seed/post', {
                title: 'Fiest Post',
                authorId: 1,
                body: '...'
            })
            // Seedin the DB so that we controm frm the test
            cy.request('POST', '/test/seed/user', { name: 'Purusotam' })
                .its(body)
                .as('currentUser')
        })
        it('Succesfully Loads', () => {
            cy.visit('')
        })
    })
})