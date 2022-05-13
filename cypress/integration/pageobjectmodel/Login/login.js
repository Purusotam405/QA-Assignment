import BasePage from "../basepage"
// Loggin in to the application portal
export default class Login extends BasePage {
	static PageLoad() {
		cy.fixture("adminLogin").then((data) => {
			cy.visit(data.adminUrl)
			cy.url().should("include", "/login")
			cy.location("protocol").should("eq", "http:")
			cy.title().should("contains", "")
		})
	}
	static HomePage() {
		cy.fixture("adminLogin").then((data) => {
			cy.datacy("register").contains("Register").should("exist")
			cy.contains("Email: admin@gmail.com").should("exist")
			cy.contains("password: 123456").should("exist")
			cy.datacy("email").clear()
			cy.datacy("email").type(data.email).should("have.value", data.email)
			cy.datacy("password")
				.type(data.password)
				.should("have.value", data.password)
			cy.datacy("button").contains("login").should("be.visible").click()
			cy.get("Unable to authorize").should("not.exist")
			cy.url().should("include", "/fixture")
		})
	}
	static CorrectEmailWrongPassword() {
		cy.datacy("email").type("purusotam405@gmail.com")
		cy.datacy("password").type("admin1234").should("contain.value", "admin1234")
		cy.datacy("button").contains("login").should("be.visible").click()
		cy.datacy("alert").should("have.text", "Incorrect password")
	}
	static WrongEmailCorrectPassword() {
		cy.datacy("email")
			.type("purusotam40@gmail.com")
			.should("contain.value", "purusotam40@gmail.com")
		cy.datacy("password").type("admin123").should("contain.value", "admin123")
		cy.datacy("button").contains("login").should("be.visible").click()
		cy.datacy("alert").should("have.text", "Cannot find user")
	}
	static InvalidEmailFormat() {
		cy.datacy("email")
			.type("purusotam405")
			.should("contain.value", "purusotam405")
		cy.datacy("password").type("admin123").should("contain.value", "admin123")
		cy.datacy("button").contains("login").should("be.visible").click()
		cy.datacy("alert").should("have.text", "Email format is invalid")
	}
	static NumberAsEmail() {
		cy.data("email").type("405").should("contain.value", "405")
		cy.datacy("password").type("admin123").should("contain.value", "admin123")
		cy.datacy("button").contains("login").should("be.visible").click()
		cy.datacy("alert").should("have.text", "Email format is invalid")
	}
	static LoginWithoutEmail() {
		cy.get("password").type("admin123").should("contain.value", "admin123")
		cy.datacy("button").contains("login").should("be.visible").click()
		cy.datacy("alert").should("have.text", "Email and password are required")
	}
	static OnlyEmail() {
		cy.datacy("email")
			.type("purusotam405@gmail.com")
			.should("contain.value", "purusotam405@gmail.com")
		cy.datacy("button").contains("login").should("be.visible").click()
		cy.datacy("alert").should("have.text", "Email and password are required")
	}
	static WithoutEmailAndPassword() {
		cy.datacy("button").contains("login").should("be.visible").click()
		cy.datacy("alert").should("have.text", "Email and password are required")
	}
	static OnlyPassword() {
		cy.datacy("button").contains("login").should("be.visible").click()
		cy.datacy("alert").should("have.text", "Email and password are required")
	}
	static DisplyRegisterPage() {
		cy.visit("/register")
		cy.url().should("not.include", "/register")
		cy.location("protocol").should("eq", "http:")
	}
	static RegisterPageFromLogin() {
		cy.datacy("register").click()
		cy.url().should("include", "/register")
		cy.location("protocol").should("eq", "http:")
		cy.datacy("login").click()
	}
}
