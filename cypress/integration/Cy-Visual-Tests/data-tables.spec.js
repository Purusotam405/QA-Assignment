describe("Visual Regression - Data-tables", () => {
	before(function () {
		cy.fixture("adminLogin.json").then((data) => {
			cy.visit(data.adminUrl)
			cy.get("[data-cy=email]").type(data.email)
			cy.get("[data-cy=password]").type(data.password)
			cy.get("[data-cy=button]").click()
		})
	})
	it("Should load Betting Button", () => {
		cy.get(":nth-child(1) > :nth-child(4) > [data-cy=Bet]").click()
	})
	it("Data-table Snapshot", () => {
		cy.matchImageSnapshot({
			failureThreshold: 100.0,
			failureThresholdType: "percent",
		})
	})
})
