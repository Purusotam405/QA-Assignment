const pages = ["http://localhost:4200/login"]
const sizes = ["iphone-6", "ipad-2", [1024, 720]]

describe("Visual Regression", () => {
	sizes.forEach((size) => {
		pages.forEach((page) => {
			it(`Should match ${page} in the resolution ${size}`, () => {
				let currentTime = new Date(Date.UTC(2022, 4, 1)).getDate()
				cy.clock(currentTime)
				cy.setResolution(size)
				cy.visit(page)
				cy.matchImageSnapshot({
					failureThreshold: 0.0,
					failureThresholdType: "percent",
				})
			})
		})
	})
})
describe("Single Element Snapshot", () => {
	it("Should match a single element on the page", () => {
		cy.visit("http://localhost:4200/login")
		cy.get("[data-cy=button]").matchImageSnapshot({
			failureThreshold: 100.0,
			failureThresholdType: "percent",
		})
	})
})
