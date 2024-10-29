describe("Il devrait tester SCPI INVEST IHM", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Ignore l'erreur
        return false; // Cela empêchera Cypress d'échouer le test
    });
    it('devrait s\'authentifier avec Keycloak', () => {
        // URL d'authentification
        const url = 'https://keycloak.check-consulting.net/realms/master/protocol/openid-connect/auth?response_type=code&client_id=scpi-invest&state=UlVNNVMzN1R5R2I0UVRXVl9RODE1TGJWRm1XS1c2M05mVVg4ZE96S2x-MW9i&redirect_uri=https%3A%2F%2Fqua.scpi-invest.check-consulting.net&scope=openid%20profile&code_challenge=fU_5bxwit0pjM8v91DVxY-VJhqypj1S9RSQJXlD8LIw&code_challenge_method=S256&nonce=UlVNNVMzN1R5R2I0UVRXVl9RODE1TGJWRm1XS1c2M05mVVg4ZE96S2x-MW9i';

        cy.visit(url);
        cy.getScpiInvestToken().then((token) => {
            cy.request({
                method: 'GET',
                url:'https://qua.scpi-invest-api.check-consulting.net/api/v1/scpi',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        });

        // Remplir les champs d'authentification
        cy.get('#username').type('szemmouk');
        cy.get('#password').type('1993');
        cy.get('#kc-login').click()

    });
})