import BasePage from "../basepage"

// Betting validations
export default class Betting extends BasePage {
	static Betbutton() {
		cy.datacy("Bet").first().click()
	}
	static Backbutton() {
		cy.datacy("Goback").click()
	}
	static EmptyField() {
		cy.datacy("match").should("have.text", "")
		cy.datacy("info").should("have.text", "")
		cy.datacy("home").should("have.text", "")
		cy.datacy("score").should("have.text", "")
		cy.datacy("amounts").should("have.text", "")

		cy.datacy("submit").click()
		cy.datacy("danger").should("have.text", "invalid Form")
	}
	static ValidFields() {
		cy.datacy("match").type("ng-reflect-model", { force: true })
		cy.datacy("info").type("1", { force: true }).should("have.length", "1")
		cy.datacy("home").type("2", { force: true }).should("have.length", "1")
		cy.datacy("score").type("3", { force: true }).should("have.length", "1")
		cy.datacy("amounts").type("4", { force: true }).should("have.length", "1")
		cy.datacy("submit").click()
	}
	static ValidationMsg() {
		cy.datacy("match").click()
		cy.datacy("info").click()
		cy.datacy("home").click()
		cy.datacy("score").click()
		cy.datacy("amounts").click()

		cy.datacy("homescore").should("have.text", " Home Score is required ")
		cy.datacy("numberreq").should("have.text", " Card Info is required ")
		cy.datacy("awayscore").should("have.text", " Away Score is required ")
		// cy.get('[data-cy=amountscore]').should('have.value', ' Amount is required ')
	}
	static Resetbtn() {
		cy.datacy("match").type("ng-reflect-model", { force: true })
		cy.datacy("info").type("1", { force: true }).should("have.length", "1")
		cy.datacy("home").type("2", { force: true }).should("have.length", "1")
		cy.datacy("score").type("3", { force: true }).should("have.length", "1")
		cy.datacy("amounts").type("4", { force: true }).should("have.length", "1")
		cy.datacy("reset").should("be.visible").and("have.text", "Reset").click()
	}
}
