Cypress.Commands.add('getScpiInvestToken', () => {
    cy.request({
        method: 'POST',
        url: 'https://keycloak.check-consulting.net/realms/master/protocol/openid-connect/token',
        form: true,
        body: {
            grant_type: 'password',
            client_id: 'scpi-invest',
            username: 'mchekini',
            password: 'test',
        }
    }).then((response) => {
        const { access_token } = response.body;
        return access_token;
    });
});