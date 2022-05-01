import BasePage from "../basepage"
export default class Booking extends BasePage {
	static BookingOption() {
		cy.datacy("bookings")
			.should("have.text", "Booking")
			.and("be.visible")
			.click()
	}
	static GoBackBtn() {
		cy.datacy("goback").should("have.text", " Go back ").click()
	}
	static EmptyFields() {
		cy.datacy("bookings")
			.should("have.text", "Booking")
			.and("be.visible")
			.click()
		cy.datacy("select").should("have.value", "")
		cy.datacy("select").should("have.value", "")
		cy.datacy("card").should("have.value", "")
		cy.datacy("card").should("have.value", "")
		cy.datacy("book").should("have.text", " Book the ticket ").click()
		cy.datacy("error").should("contain", "invalid Form")
	}
	static ValidBooking() {
		cy.datacy("bookings")
			.should("have.text", "Booking")
			.and("be.visible")
			.click()
		cy.datacy("select").select("Tottenham Hotspur VS Chelsea")
		cy.datacy("selemail")
			.type("purusotam405@gmail.com")
			.should("have.value", "purusotam405@gmail.com")
		cy.datacy("card").type("1").should("have.value", "1")
		cy.datacy("book").should("have.text", " Book the ticket ").click()
		cy.datacy("changes").should("have.text", " Save changes ").click()
	}
	static CloseButton() {
		cy.datacy("bookings")
			.should("have.text", "Booking")
			.and("be.visible")
			.click()
		cy.datacy("select").select("Tottenham Hotspur VS Chelsea")
		cy.datacy("selemail")
			.type("purusotam405@gmail.com")
			.should("have.value", "purusotam405@gmail.com")
		cy.datacy("card").type("1").should("have.value", "1")
		cy.datacy("book").should("have.text", " Book the ticket ").click()
		cy.datacy("close").should("have.text", " Close ").click()
	}
	static ValidationMsg() {
		cy.datacy("bookings")
			.should("have.text", "Booking")
			.and("be.visible")
			.click()
		cy.datacy("select").select("Tottenham Hotspur VS Chelsea")
		cy.datacy("selemail").should("have.text", "").click()
		cy.datacy("card").should("have.text", "").click()
		cy.datacy("book").should("have.text", " Book the ticket ").click()

		cy.datacy("emailreq").should("have.text", " Email is required ")
		cy.datacy("cardreq").should("have.text", " Card Info is required ")
		// cy.get('[data-cy=error]').should('have.text', 'invalid Form')
	}
	static InvalidEmailBooking() {
		cy.datacy("bookings")
			.should("have.text", "Booking")
			.and("be.visible")
			.click()
		cy.datacy("selemail").type("123456").should("have.value", "123456")
		cy.datacy("book").should("have.text", " Book the ticket ").click()
	}
	static ResetButton() {
		cy.datacy("bookings")
			.should("have.text", "Booking")
			.and("be.visible")
			.click()
		cy.datacy("select").select("Tottenham Hotspur VS Chelsea")
		cy.datacy("selemail")
			.type("purusotam405@gmail.com")
			.should("have.value", "purusotam405@gmail.com")
		cy.datacy("card").type("1").should("have.value", "1")
		cy.datacy("resets").should("be.visible").and("have.text", "Reset").click()
	}
}
