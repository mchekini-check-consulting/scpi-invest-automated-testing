describe("it should test SCPI INVEST APIs", () => {

    it('should access protected API using Keycloak token', () => {
        cy.getScpiInvestToken().then((token) => {
            cy.request({
                method: 'GET',
                url: 'https://qua.scpi-invest-api.check-consulting.net/api/v1/scpi',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
            });
        });
    });

})