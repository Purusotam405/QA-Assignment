describe("Visual Regression --Login Page", () => {
	before(function () {
		cy.fixture("adminLogin.json").then((data) => {
			cy.visit(data.adminUrl)
			cy.get("[data-cy=email]").type(data.email)
			cy.get("[data-cy=password]").type(data.password)
			cy.get("[data-cy=button]").click()
		})
	})
	it("Desktop Layout", () => {
		cy.setResolution([1200, 800])
		cy.matchImageSnapshot()
	})
	it("Tablet Layout", () => {
		cy.setResolution("ipad-2")
		cy.matchImageSnapshot({
			failureThreshold: 100.0,
			failureThresholdType: "percent",
		})
	})
	it("Mobile Layout", () => {
		cy.setResolution("iphone-6")
		cy.matchImageSnapshot({
			failureThreshold: 100.0,
			failureThresholdType: "percent",
		})
	})
})
