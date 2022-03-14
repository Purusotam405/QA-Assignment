class BasePage {
    static loadHomePage() {
        cy.visit('/login')
    }
    static wait(number) {
        cy.wait(number)
    }

}
class HomePage extends BasePage {
    static login() {
        cy.loginsuccess()
        // cy.get('[data-cy=email]').type('purusotam405@gmail.com')
        // cy.get('[data-cy=password]').type('admin123')
        // cy.get('[data-cy=button]').click()
    }
}
describe('Abstraction with a class', function () {
    it('Should login to HomePage', function () {
        HomePage.loadHomePage()
        HomePage.wait(2000)
        HomePage.login()


    })
})