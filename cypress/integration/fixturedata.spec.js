/// <reference types="Cypress" />

// Example to access data from the fixtures folder
describe("Login from fixture data", function () {
	it("signin", function () {
		cy.visit("/login")

		cy.fixture("adminLogin").then((user) => {
			const email = user.email
			const password = user.password

			cy.datacy("email").type(email)
			cy.datacy("password").type(password)
			cy.datacy("button").contains("login").should("be.visible").click()
			cy.get("[data-cy=logout]")
				.contains("Logout")
				.should("be.visible")
				.scrollIntoView()
			cy.screenshot({ capture: "fullPage" })
		})
	})
})
