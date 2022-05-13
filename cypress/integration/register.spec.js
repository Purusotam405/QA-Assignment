import Register from "./pageobjectmodel/Register/register"
import BasePage from "./pageobjectmodel/basepage"
/// <reference types="Cypress" />

// A POM for registration to the system portal

describe("Kickoff App Registration", () => {
	beforeEach(() => {
		cy.visit("url")
		BasePage.setLargeDesktopViewport
		cy.get("[data-cy=register]").click()
	})

	it("Register with empty values for all fields", function () {
		Register.EmptyFieldsRegister()
	})
	it("Register with only Email and Password", () => {
		Register.OnlyEmailAndPassword()
	})
	it("Test to register with all the valid input fields", function () {
		Register.ValidRegisterFields()
	})
	it("Register with password less than four character", function () {
		Register.RegInvalidPassword()
	})
	it("Register with existing email but different password,lname and fname", function () {
		Register.RegwithExistingEmail()
	})
	it("Display of Validation Message for options in register", function () {
		Register.RegisterValidation()
	})
})
