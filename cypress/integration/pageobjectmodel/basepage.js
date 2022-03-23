export default class BasePage {
    static pause(ms) {
        cy.wait(ms)
    }
    static logInfo(message) {
        cy.log(message)
    }
    static setMobileViewport() {
        cy.viewport('iphone-x')
    }
    static setTabletviewport() {
        cy.viewport('ipad-2')
    }
    static setDesktop() {
        cy.viewport('macbook-13')
    }
    static setLargeDesktopViewport() {
        cy.viewport(1980, 1080)
    }
}