/// <reference types="Cypress" />

describe("e2e Cypress Test", function () {
	beforeEach(function () {
		cy.visit("/login")
	})
	it("Cannot Find User", () => {
		cy.fixture("adminLogin").then((admin) => {
			const email = admin.email
			const wrongpassword = admin.wrongpassword
			const wrongemail = admin.wrongemail

			cy.get("[data-cy=email]").type(email).should("have.value", email)

			cy.get("[data-cy=password]")

				.type(wrongpassword)
				.should("have.value", wrongpassword)
			cy.get("[data-cy=button]").contains("login").should("be.visible").click()
			cy.get("[data-cy=alert]").should("contain.text", "Incorrect password")
		})
	})

	it("Login Successful", () => {
		cy.loginsuccess()
	})

	it("Invalid Betting", () => {
		cy.loginsuccess()
		cy.get(":nth-child(1) > :nth-child(4) > [data-cy=Bet]").click({
			force: true,
		})
		cy.get("[data-cy=match]")
			.type(".", { force: true })
			.should("have.length", "1")
		cy.get("[data-cy=info]")
			.type(".", { force: true })
			.should("have.length", "1")
		cy.get("[data-cy=home]")
			.type(".", { force: true })
			.should("have.length", "1")
		cy.get("[data-cy=score]")
			.type(".", { force: true })
			.should("have.length", "1")
		cy.get("[data-cy=amounts]")
			.type(".", { force: true })
			.should("have.length", "1")

		cy.get("[data-cy=homescore]").should(
			"have.text",
			" Home Score is required "
		)
		cy.get("[data-cy=numberreq]").should("have.text", " Card Info is required ")
		cy.get("[data-cy=awayscore]").should(
			"have.text",
			" Away Score is required "
		)

		cy.get("[data-cy=submit]").click()
	})

	it("Betting Validation", function () {
		cy.loginsuccess()
		cy.get(":nth-child(1) > :nth-child(4) > [data-cy=Bet]").click()
		cy.get("[data-cy=match]")
			.type("ng-reflect-model", { force: true })
			.should("have.length", "1")
		cy.get("[data-cy=info]")
			.type("2", { force: true })
			.should("have.length", "1")
		cy.get("[data-cy=home]")
			.type("3", { force: true })
			.should("have.length", "1")
		cy.get("[data-cy=score]")
			.type("4", { force: true })
			.should("have.length", "1")
		cy.get("[data-cy=amounts]")
			.type("5", { force: true })
			.should("have.length", "1")
		cy.get("[data-cy=submit]").click()
		// cy.get('[data-cy="reset"]').click();
	})
	it("Re-login Successful", () => {
		cy.loginsuccess()
		cy.get('[data-cy="button"]').contains("login").should("be.visible").click()
		cy.contains("Booking").should("be.visible")
		cy.url().should("include", "/fixture")
		cy.get("[data-cy=bookings]").click()
	})

	it("Invalid Booking", () => {
		cy.loginsuccess()
		cy.get("[data-cy=bookings]").click()
		cy.get("[data-cy=select]").select("Choose your Match", { force: true })
		cy.get("[data-cy=selemail]").click({ force: true })
		cy.get("[data-cy=card]").click({ force: true })
		cy.get("[data-cy=book]")
			.contains("Book the ticket")
			.should("have.text", " Book the ticket ")
			.click({ force: true })
		cy.get("[data-cy=error]").should("have.text", "invalid Form")
	})

	it("Booking Validation", () => {
		cy.loginsuccess()
		cy.get("[data-cy=bookings]").click()
		cy.url().should("include", "/booking")
		cy.location("protocol").should("eq", "http:")
		cy.contains("Booking").should("have.text", "Booking").click()
		cy.contains("Football Fix").should("be.visible")
		cy.contains("Logout").should("be.visible")
		cy.contains("Go back").should("be.visible")
		cy.get("[data-cy=select]").select("Tottenham Hotspur VS Chelsea")
		cy.get("[data-cy=selemail]").type("purusotam405@gmail.com")
		cy.get("[data-cy=card]").type("2", { force: true })
		cy.get("[data-cy=book]")
			.contains("Book the ticket")
			.should("have.text", " Book the ticket ")
			.click()
		cy.get("[data-cy=summary]").should("have.text", " Booking Summary ")
		cy.get("[data-cy=close]").should("be.visible", { force: true }).click()
		cy.get("[data-cy=changes]").should("have.text", " Save changes ").click()
		cy.get("[data-cy=logout]")
			.contains("Logout")
			.should("be.visible")
			.click({ force: true })
	})
})
