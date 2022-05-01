describe("Visual Regression - Data-tables", () => {
	before(function () {
		cy.fixture("adminLogin.json").then((data) => {
			cy.visit(data.adminUrl)
			cy.datacy("email").type(data.email)
			cy.datacy("password").type(data.password)
			cy.datacy("button").click()
		})
	})
	it("Should load Betting Button", () => {
		cy.datacy("Bet").first().click({ multiple: true }, { force: true })
	})
	it("Data-table Snapshot", () => {
		cy.matchImageSnapshot({
			failureThreshold: 100.0,
			failureThresholdType: "percent",
		})
	})
})
