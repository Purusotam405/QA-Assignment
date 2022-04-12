import { addMatchImageSnapshotCommand } from "cypress-image-snapshot/command"
// import '@percy/cypress'

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
	cy.get("[data-cy=register]").contains("Register").should("exist")
	cy.contains("Email: admin@gmail.com").should("exist")
	cy.contains("password: 123456").should("exist")
	cy.get("[data-cy=email]")
		.type("purusotam405@gmail.com")
		.should("have.value", "purusotam405@gmail.com")
	cy.get("[data-cy=password]").type("admin123").should("have.value", "admin123")
	cy.get("[data-cy=button]").contains("login").should("be.visible").click()
})
