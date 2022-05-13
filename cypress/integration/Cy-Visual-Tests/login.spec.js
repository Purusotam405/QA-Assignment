// Logging into the application portal
describe("Visual Regression --Login Page", () => {
	before(function () {
		cy.fixture("adminLogin.json").then((data) => {
			cy.visit(data.adminUrl)
			cy.datacy("email").type(data.email)
			cy.datacy("password").type(data.password)
			cy.datacy("button").click()
		})
	})
	it("Desktop Layout", () => {
		cy.setResolution([1200, 800])
		cy.matchImageSnapshot()
	})
	it("Tablet Layout", () => {
		cy.setResolution("ipad-2")
		cy.matchImageSnapshot({
			failureThreshold: 10.0,
			failureThresholdType: "percent",
		})
	})
	it("Mobile Layout", () => {
		cy.setResolution("iphone-6")
		cy.matchImageSnapshot({
			failureThreshold: 10.0,
			failureThresholdType: "percent",
		})
	})
})
