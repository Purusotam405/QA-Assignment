/// <reference types="Cypress" />

// Example to read and write a sample-file

describe("Read-write-file-contaent", () => {
	it("write a file", () => {
		cy.writeFile("sample.txt", "Hello World\n")
		cy.writeFile("sample.txt", " Welcome ", { flag: "a+" })
	})
	it("Read the file", () => {
		cy.readFile("sample.txt").should("contains", "Hello World")
	})
})
