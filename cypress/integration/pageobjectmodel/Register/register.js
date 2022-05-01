import BasePage from "../basepage"
export default class Register extends BasePage {
	static EmptyFieldsRegister() {
		cy.datacy("email").should("have.value", "")
		cy.datacy("password").should("have.value", "")
		cy.datacy("First name").should("have.value", "")
		cy.datacy("last name").should("have.value", "")
		cy.datacy("register").should("be.visible").click()
		cy.datacy("emptyfields").should(
			"have.text",
			"Email and password are required"
		)
	}
	static OnlyEmailAndPassword() {
		cy.datacy("email")
			.type("purusotam40@gmail.com")
			.should("have.value", "purusotam40@gmail.com")
		cy.datacy("password").type("admin123").should("have.value", "admin123")
		cy.datacy("register").should("be.visible").click()
	}
	static ValidRegisterFields() {
		cy.datacy("email")
			.type("purusotam40@gmail.com")
			.should("have.value", "purusotam40@gmail.com")
		cy.datacy("password").type("ad1").should("have.value", "ad1")
		cy.datacy("First name").type("Purusotam").should("have.value", "Purusotam")
		cy.datacy("last name").type("Ghimiray").should("have.value", "Ghimiray")
		cy.datacy("register").should("be.visible").click()
	}
	static RegInvalidPassword() {
		cy.datacy("email")
			.type("purusotam40@gmail.com")
			.should("have.value", "purusotam40@gmail.com")
		cy.datacy("password").type("ad1").should("have.value", "ad1")
		cy.datacy("First name").type("Purusotam").should("have.value", "Purusotam")
		cy.datacy("last name").type("Ghimiray").should("have.value", "Ghimiray")
		cy.datacy("register").should("be.visible").click()
	}

	static RegwithExistingEmail() {
		cy.datacy("email")
			.type("purusotam405@gmail.com")
			.should("have.value", "purusotam405@gmail.com")
		cy.datacy("password")
			.type("seliseQA123")
			.should("have.value", "seliseQA123")
		cy.datacy("First name").type("Pema").should("have.value", "Pema")
		cy.datacy("last name").type("Wangyel").should("have.value", "Wangyel")
		cy.datacy("register").should("be.visible").click()
	}
	static RegisterValidation() {
		cy.datacy("email").click()

		cy.datacy("password").click()

		cy.datacy("First name").click()

		cy.datacy("last name").click()

		cy.datacy("register").should("be.visible").click()
		cy.datacy("emailreq").should("have.text", " Email is required ")
		cy.datacy("passwordreq").should("have.text", " Password is required ")
		cy.datacy("firstnamereq").should("have.text", " First Name is required ")
		cy.datacy("lastnamereq").should("have.text", " Last Name is required ")
	}
}
