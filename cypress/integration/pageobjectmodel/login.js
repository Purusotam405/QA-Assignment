class Login {
    email() {
        return cy.get('[data-cy=email]')

    }
    password() {
        return cy.get('[data-cy=password]')
    }
    button() {
        return cy.get('[data-cy=button]')
    }

}
export default Login

