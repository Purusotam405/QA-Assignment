import BasePage from "../basepage"
export default class MatchDetails extends BasePage {
	static DisplayMatchDetails() {
		cy.datacy("match-details")
			.first()
			.should("be.enabled")
			.and("have.text", " Match Detail ")
			.click()
	}
	static GoBackToHomePage() {
		cy.datacy("goback")
			.should("be.visible")
			.and("have.text", " Go back ")
			.click()
	}
	static SuccessfulLogout() {
		cy.datacy("logout")
			.should("be.enabled")
			.and("have.text", " Logout ")
			.click()
	}
}
