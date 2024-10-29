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


    // Récupérer les détails d'une SCPI par ID
    it('should tests API Recuperate SCPI Par ID', () => {
        cy.getScpiInvestToken().then((token) => {
            cy.request({
                method: 'GET',
                url: 'https://qua.scpi-invest-api.check-consulting.net/api/v1/scpi/2',
                headers: {
                    Authorization: `Bearer ${token}`,
                },

            }).then((response) => {
                expect(response.status).to.eq(200);
                console.log('Response de l\'API:', response.body);
            });
        });

    });


    //Test API filtrer les SCPI
    it('Should tests API filter recherche ', () => {
        cy.getScpiInvestToken().then((token) => {
            cy.request({
                method: 'POST',
                url: 'https://qua.scpi-invest-api.check-consulting.net/api/v1/scpi/search',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: {
                        "searchTerm": "string",
                        "localizations": [
                            "France"
                        ],
                        "sectors": [
                            "Bureaux",
                            "Commerces"
                        ],
                        "amount": 1006,
                        "fees": true
                    }

            }).then((response) => {
                expect(response.status).to.eq(200);
                console.log('Response de l\'API:', response.body);
            });
        });

    });



    //Test API endorsement programmé

    it('should tests API unified investment', () => {
            cy.getScpiInvestToken().then((token) => {
                cy.request({
                    method: 'POST',
                    url: 'https://qua.scpi-invest-api.check-consulting.net/api/v1/planified-investement',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    body: {
                        "frequency":"MENSUELLE",
                        "amount":20000,
                        "debitDayOfMonth":10,
                        "numberOfShares":1600,
                        "scpi":1
                    }

                }).then((response) => {
                    expect(response.status).to.eq(201);
                    console.log('Response de l\'API:', response.body);
                });
            });
    });

    //Test API Comparator

    it('should tests API Compare', () => {
            cy.getScpiInvestToken().then((token) => {
              cy.request({
                  method: 'POST',
                  url: 'https://qua.scpi-invest-api.check-consulting.net/api/v1/scpi/compare',
                  headers: {
                      Authorization: `Bearer ${token}`,
                  },
                  body:
                      {
                          "selectedScpis": [
                              "Activimmo",
                              "Altixia Cadence XII",
                              "Atream Hotels"
                          ],
                          "investValue": 1000000
                      }

              }).then((response) => {
                  expect(response.status).to.eq(200);
                  console.log('Response de l\'API:', response.body);
              });
            });
    });

    //Test API recuperate investment

    it('should tests API investment recuperate', () => {
        cy.getScpiInvestToken().then((token) => {
            cy.request({
                method: 'GET',
                url: 'https://qua.scpi-invest-api.check-consulting.net/api/v1/investement',
                headers: {
                    Authorization: `Bearer ${token}`,
                },

            }).then((response) => {
                expect(response.status).to.eq(200);
                console.log('Response de l\'API:', response.body);
                cy.log(JSON.stringify(response.body)); // Affiche le corps de la réponse
                console.log(response.body); // Affiche dans la console du navigateur
            });
        });
    });
})