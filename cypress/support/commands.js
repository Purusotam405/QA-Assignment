import { addMatchImageSnapshotCommand } from "cypress-image-snapshot/command"
// import '@percy/cypress'
import "cypress-file-upload"
import "cypress-mailosaur"

addMatchImageSnapshotCommand({
	failureThreshold: 0.0,
	failureThresholdType: "percent",
	customDiffConfig: { Threshold: 0.0 },
	capture: "viewport",
})

Cypress.Commands.add("setResolution", (size) => {
	if (Cypress._.isArray(size)) {
		cy.viewport(size[0], size[1])
	} else {
		cy.viewport(size)
	}
})

Cypress.Commands.add("loginsuccess", () => {
	cy.visit("/login")

	cy.url().should("include", "/login")
	cy.location("protocol").should("eq", "http:")
	cy.title().should("contains", "")
	cy.datacy("register").contains("Register").should("exist")
	cy.contains("Email: admin@gmail.com").should("exist")
	cy.contains("password: 123456").should("exist")
	cy.datacy("email")
		.type("purusotam405@gmail.com")
		.should("have.value", "purusotam405@gmail.com")
	cy.datacy("password").type("admin123").should("have.value", "admin123")
	cy.datacy("button").contains("login").should("be.visible").click()
})

// Cypress.Commands.add("login", (userType, email, password) => {
// 	const types = {
// 		keyAdmin: {
// 			email: "purusotam405@gmail.com",
// 			password: "admin123",
// 		},
// 		newUser: {
// 			login: email,
// 			password: password,
// 		},
// 	}
// 	const user = types[userType]
// 	localStorage.setItem("language", "en")
// 	cy.visit("/login")
// 	cy.server()
// 	cy.route("POST", "/login").as("login")
// 	localStorage.setItem("language", "en")
// 	cy.get("[data-cy=email]").type(user.email)
// 	cy.get("[data-cy=password]").type(user.password)
// 	cy.get("[data-cy=button]").click().wait("@login")
// })

Cypress.Commands.add("datacy", (value) => {
	cy.get(`[data-cy="${value}"]`)
})

// Cypress.Commands.add("notification", (value) => {
// 	cy.get("sf-snack-bar-container").should("contain", value, {
// 		matchCase: false,
// 	})
// })

//save the local storage
// Cypress.Commands.add("saveLocalStorage", () => {
// 	Object.keys(localStorage).forEach((key) => {
// 		LOCAL_STORAGE_MEMORY[key] = localStorage[key]
// 	})
// })
//restore the local storage
// Cypress.Commands.add("restoreLocalStorage", () => {
// 	Object.keys(LOCAL_STORAGE_MEMORY).forEach((key) => {
// 		localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key])
// 	})
// })

// cy.visit(
// 	userType === "admin" || userType === "newAdmin"
// 		? "/auth/login/admin"
// 		: "/auth/login"
// )

// const user = types[userType]
// cy.log("**Logging In**")
// cy.datacy("login").find("input").type(user.email)
// cy.datacy("password").find("input").type(user.password)
// cy.contains("Login").click()
// userType === "admin" && cy.notification("You have logged in successfully")
// cy.wait(1000)
