
Cypress.Commands.add('loginsuccess', () => {
    cy
        .visit('/login');
    cy
        .url().should('include', '/login');
    cy
        .location('protocol').should('eq', 'http:')

    cy
        .title().should('contains', '')
    // cy.get('h2.text-center').should('have.text', 'Match Fixtures')

    cy
        .get('[data-cy=register]').contains('Register').should('exist');
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


})
