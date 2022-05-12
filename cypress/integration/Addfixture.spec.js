///<reference types="Cypress" />

describe("Login from fixture data", () => {
	beforeEach(() => {
		cy.visit("/login")
	})
	// Access data from fixtures folder
	it("Fixture Login", () => {
		cy.fixture("adminLogin").then((data) => {
			cy.datacy("email").type(data.email)
			cy.datacy("password").type(data.password)
			cy.datacy("button").click()
		})
	})
})
