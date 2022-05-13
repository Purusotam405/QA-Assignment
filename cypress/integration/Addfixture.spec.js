///<reference types="Cypress" />
// Access json data from fixtures folder

describe("Login from fixture data", () => {
	beforeEach(() => {
		cy.visit("/login")
	})

	it("Fixture Login", () => {
		cy.fixture("adminLogin").then((data) => {
			cy.datacy("email").type(data.email)
			cy.datacy("password").type(data.password)
			cy.datacy("button").click()
		})
	})
})
