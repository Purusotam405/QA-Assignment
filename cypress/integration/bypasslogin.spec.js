

describe('login within UI', () => {
    it('Should be abl to login', () => {
        cy.request({
            url: 'http://localhost:3000/api/users/login',
            method: 'POST',
            body: {
                user: { email: 'purusotam405@gmail.com', password: 'admin123' }
            }

        }).then(res => cy.log(res.body.user.password))

    })

})