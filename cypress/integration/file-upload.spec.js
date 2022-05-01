describe("Tutorialspoint Test", function () {
	it("Test Case6", function () {
		const pic1 = "favicon.ico"
		// const pic2 = "commands.txt"
		cy.visit("https://the-internet.herokuapp.com/upload")
		cy.get("#file-upload").attachFile(pic1)
		// .attachFile(pic2)
		cy.get("#file-submit").click()
		cy.get("#uploaded-files").contains("favicon")
		// cy.get("#uploaded-files").contains("commands")
	})
})
