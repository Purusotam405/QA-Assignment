import Betting from "./pageobjectmodel/Betting/betting"
import BasePage from "./pageobjectmodel/basepage"

/// <reference types="Cypress" />

describe("End to end test for betting validation", function () {
	beforeEach(function () {
		cy.loginsuccess()
		BasePage.setDesktop()
		Betting.Betbutton()
	})
	// it("Test display option", function () {
	// 	Betting.Betbutton()
	// })

	it("Test Goback button to redirect user to homepage", function () {
		Betting.Backbutton()
	})
	it("Place the bet with empty valu1`  VBNMes for all fields", function () {
		Betting.EmptyField()
	})
	it("Place the bet with valid values for all fields", function () {
		Betting.ValidFields()
	})
	it("Display Validation Message for mandatory fields for Bet", function () {
		Betting.ValidationMsg()
	})
	it("Test display for Reset Button", function () {
		Betting.Resetbtn()
	})
})
