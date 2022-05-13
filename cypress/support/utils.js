//mailosaur Set up
let emailAddress

export function generateMailosaurEmail() {
	emailAddress = `anything@${Cypress.env(serverId)}.mailosaur.net`

	cy.datacy("email").type(emailAddress)
}
export function verifyEmail(emailSubject) {
	cy.mailosaurGetMessage(Cypress.env("serverId"), {
		sentTo: emailAddress,
	}).then((email) => {
		expect(email.subject).to.equal(emailSubject)
		cy.visit(email.html.links[0].href)
	})
}
export function setPasswordAndLogin() {}
//example
/*
cy.get('[type="password"]).first().type(password)
cy.get('[type=pasword]').last().type(password)
cy.get('[button]').contains('Accept').click()
cy.url().should('contain','/auth');
cy.notification('Invitation accepted successfully').wait(500);
//login
cy.login('newUser',emailAddress,password)
cy.url().should('contain','/dashboard')
 */
