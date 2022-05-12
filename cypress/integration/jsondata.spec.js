/// <reference types="Cypress" />
// Writing json data
describe("Write json data", function () {
	it("json data file", function () {
		cy.writeFile("log.json", { name: "Purusotam", age: 29 })
	})
})
