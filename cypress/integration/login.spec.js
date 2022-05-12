import Login from "./pageobjectmodel/Login/login"
import BasePage from "./pageobjectmodel/basepage"

/// <reference types="Cypress" />
// For logging into the application

describe("e2e Cypress Test", function () {
	beforeEach(() => {
		cy.visit("/login")
		BasePage.setDesktop()
	})

	it("Login loaded Successfuly", function () {
		Login.PageLoad()
	})

	it("User prompted to homepage with valid credentials", function () {
		Login.HomePage()
	})

	it("Correct Email and Wrong Password", function () {
		Login.CorrectEmailWrongPassword()
	})

	it("Wrong Email and Correct Password", function () {
		Login.WrongEmailCorrectPassword()
	})

	it("Invalid Email Format with Correct Password", function () {
		Login.InvalidEmailFormat()
	})

	it(" Entering only numbers as email address with Correct Password", function () {
		Login.NumberAsEmail()
	})

	it("Login without Email address but with Correct Password", function () {
		Login.LoginWithoutEmail()
	})

	it("Login with Valid Email Address but without Password", function () {
		Login.CorrectEmailWrongPassword()
	})

	it("Login without Email Address and without Password", function () {
		Login.WithoutEmailAndPassword()
	})

	it("test display of register page", () => {
		Login.DisplyRegisterPage()
	})

	it("test display of register page from login page", () => {
		Login.RegisterPageFromLogin()
	})
})
