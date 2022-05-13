/// <reference types="Cypress" />
// Writing json data/Writing a file
describe("Write json data", function () {
	it("json data file", function () {
		cy.writeFile("log.json", { name: "Purusotam", age: 29 })
	})
})
