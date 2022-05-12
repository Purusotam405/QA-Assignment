/// <reference types="Cypress" />

// For API Validation Test
describe("REST API Test with Cypress", function () {
	it("API Test - Validate Headers", () => {
		cy.request("http://localhost:4200").as("App")
		cy.get("@App")
			.its("headers")
			.its("content-type")
			.should("include", "text/html; charset=UTF-8")
	})

	it("API-Test - Validate Status Code", () => {
		cy.request("GET", "http://localhost:3000/fixtures").then((response) => {
			expect(response).to.have.property("status", 200)
			expect(response.body).to.not.be.null
			expect(response.body).to.have.length(10)
			expect(response).to.have.property("duration")
		})
	})
	it("API-Test - Validate length", () => {
		cy.request("GET", "http://localhost:3000/fixtures").as("json")
		expect("response.body").to.have.length(13)
	})
	it("API-Test - Validate Negative Status Code", () => {
		cy.request({
			method: "GET",
			url: "http://localhost:3000/fixture",
			failOnStatusCode: false,
		}).as("json")
		cy.get("@json").its("status").should("equal", 404)
	})
})
