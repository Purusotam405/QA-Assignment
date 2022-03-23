import BasePage from "../basepage"
export default class MatchDetails extends BasePage {
    static DisplayMatchDetails() {
        cy.get(':nth-child(1) > :nth-child(5) > [data-cy=match-details]')
            .should('be.enabled').and('have.text', ' Match Detail ').click()
    }
    static GoBackToHomePage() {
        cy.get('[data-cy=goback]').should('be.visible').and('have.text', ' Go back ').click()


    }
    static SuccessfulLogout() {
        cy.get('[data-cy=logout]').should('be.enabled').and('have.text', ' Logout ').click()
    }
}
