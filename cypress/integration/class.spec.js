// class using POM
class BasePage {
	static loadHomePage() {
		cy.visit("/login")
	}
	static wait(number) {
		cy.wait(number)
	}
}
class HomePage extends BasePage {
	static login() {
		cy.loginsuccess()
	}
}
describe("Abstraction with a class", function () {
	it("Should login to HomePage", function () {
		HomePage.loadHomePage()
		HomePage.wait(1000)
		HomePage.login()
	})
})
