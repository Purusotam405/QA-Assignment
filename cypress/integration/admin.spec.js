/// <reference types="Cypress" />
// E2E without POM
describe("e2e Cypress Test", function () {
	beforeEach(function () {
		cy.visit("/login")
	})
	it("Cannot Find User", () => {
		cy.fixture("adminLogin").then((admin) => {
			const email = admin.email
			const wrongpassword = admin.wrongpassword
			const wrongemail = admin.wrongemail

			cy.datacy("email").type(email).should("have.value", email)

			cy.datacy("password")

				.type(wrongpassword)
				.should("have.value", wrongpassword)
			cy.datacy("button").contains("login").should("be.visible").click()
			cy.datacy("alert").should("contain.text", "Incorrect password")
		})
	})

	it("Login Successful", () => {
		cy.loginsuccess()
	})

	it("Betting Validation", function () {
		cy.loginsuccess()
		cy.contains("Bet").click({ multiple: true }, { force: true })
		cy.datacy("match")
			.type("ng-reflect-model", { force: true })
			.should("have.length", "1")
		cy.datacy("info").type("2", { force: true }).should("have.length", "1")
		cy.datacy("home").type("3", { force: true }).should("have.length", "1")
		cy.datacy("score").type("4", { force: true }).should("have.length", "1")
		cy.datacy("amounts").type("5", { force: true }).should("have.length", "1")
		cy.datacy("submit").click()
		cy.get('[data-cy="reset"]').click()
	})

	it("Invalid Betting", () => {
		cy.loginsuccess()
		cy.contains("Bet").click(
			{
				multiple: true,
			},
			{ force: true }
		)
		cy.datacy("match").type(".", { force: true }).should("have.length", "1")
		cy.datacy("info").type(".", { force: true }).should("have.length", "1")
		cy.datacy("home").type(".", { force: true }).should("have.length", "1")
		cy.datacy("score").type(".", { force: true }).should("have.length", "1")
		cy.datacy("amounts").type(".", { force: true }).should("have.length", "1")

		cy.datacy("homescore").should("have.text", " Home Score is required ")
		cy.datacy("numberreq").should("have.text", " Card Info is required ")
		cy.datacy("awayscore").should("have.text", " Away Score is required ")

		cy.datacy("submit").click()
	})
	it("Re-login Successful", () => {
		cy.loginsuccess()
		cy.datacy("button").contains("login").should("be.visible").click()
		cy.contains("Booking").should("be.visible")
		cy.url().should("include", "/fixture")
		cy.datacy("bookings").click()
	})

	it("Invalid Booking", () => {
		cy.loginsuccess()
		cy.datacy("bookings").click()
		cy.datacy("select").select("Choose your Match", { force: true })
		cy.datacy("selemail").click({ force: true })
		cy.datacy("card").click({ force: true })
		cy.datacy("book")
			.contains("Book the ticket")
			.should("have.text", " Book the ticket ")
			.click({ force: true })
		cy.datacy("error").should("have.text", "invalid Form")
	})

	it("Booking Validation", () => {
		cy.loginsuccess()
		cy.datacy("bookings").click()
		cy.url().should("include", "/booking")
		cy.location("protocol").should("eq", "http:")
		cy.contains("Booking").should("have.text", "Booking").click()
		cy.contains("Football Fix").should("be.visible")
		cy.contains("Logout").should("be.visible")
		cy.contains("Go back").should("be.visible")
		cy.datacy("select").select("Tottenham Hotspur VS Chelsea")
		cy.datacy("selemail").type(email)
		cy.datacy("card").type("2", { force: true })
		cy.datacy("book")
			.contains("Book the ticket")
			.should("have.text", " Book the ticket ")
			.click()
		cy.datacy("summary").should("have.text", " Booking Summary ")
		cy.datacy("close").should("be.visible", { force: true }).click()
		cy.datacy("changes").should("have.text", " Save changes ").click()
		cy.datacy("logout")
			.contains("Logout")
			.should("be.visible")
			.click({ force: true })
	})
})
