import Booking from "./pageobjectmodel/Booking/booking"
import BasePage from "./pageobjectmodel/basepage"
/// <reference types="Cypress" />

// Betting Validation

describe("Logging In for booking tickets", function () {
	beforeEach(function () {
		cy.loginsuccess()
		Booking.BookingOption()
		BasePage.setLargeDesktopViewport()
	})

	it("Test Display options for booking", function () {
		Booking.BookingOption()
	})

	it("Test if clicking Goback button redirects to homepage", function () {
		Booking.GoBackBtn()
	})
	it("Place the booking with empty values for all fields", function () {
		Booking.EmptyFields()
	})
	it("Place the booking with valid values and saved successfully", function () {
		Booking.ValidBooking()
	})
	it("Test with the valid values and when closed no booking is made", function () {
		Booking.CloseButton()
	})
	it("Display of Validation message for mandatory fields in the booking page", function () {
		Booking.ValidationMsg()
	})
	it("Test Booking by passing email by passing number only", function () {
		Booking.InvalidEmailBooking()
	})
	it("Test Reset Button for booking", function () {
		Booking.ResetButton()
	})
})
