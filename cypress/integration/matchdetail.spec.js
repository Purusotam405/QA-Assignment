import BasePage from "./pageobjectmodel/basepage"
import MatchDetails from "./pageobjectmodel/MatchDetails/MatchDetails"

/// <reference types="Cypress" />
// For viewing match details in the application portal

describe("End to end Test for Match Details", function () {
	beforeEach(function () {
		BasePage.setLargeDesktopViewport()
	})
	it("Display of Match details", function () {
		cy.loginsuccess()
		MatchDetails.DisplayMatchDetails()
	})
	it("Test on Goback button to redirect to homepage", function () {
		MatchDetails.GoBackToHomePage()
	})
	it("Test for successfull Logout", function () {
		MatchDetails.SuccessfulLogout()
	})
})
