describe("Test IHM SCPI Invest Plus", () => {


    Cypress.on('uncaught:exception', (err, runnable) => {
        // Ignore l'erreur
        return false; // Cela empêchera Cypress d'échouer le test
    });
    beforeEach(() => {
        cy.viewport(1490, 900);
        const url = 'https://qua.scpi-invest.check-consulting.net';
        cy.visit(url);
        cy.getScpiInvestToken().then((token) => {
        })
        cy.get('#username').type('szemmouk');
        cy.get('#password').type('1993');
        cy.get('#kc-login').click()

    });
    it ("Page d'acceuil",()=>{
        cy.visit( 'https://qua.scpi-invest.check-consulting.net/?iss=https:%2F%2Fkeycloak.check-consulting.net%2Frealms%2Fmaster')
        cy.get('.simple-text > .ng-star-inserted').should('be.visible');

    });


    it ('Test Recherche multi crétaire ',( )  =>{
        cy.contains('Filter').click()
        cy.get('.p-sidebar-content')
        cy.get('[aria-labelledby="true"]').click() // clique sur oui pour les frais de souscription
        cy.get('.p-sidebar-content > :nth-child(3)')
        cy.get(':nth-child(8) > app-selectable-button > button.ng-star-inserted').click()
        cy.get(':nth-child(2) > app-selectable-button > .ng-star-inserted > button').click()
        cy.get('.bottom_btn > :nth-child(2)').click()
        cy.get('.p-component-overlay').click()
    });


    it ('Test Simulator ', () => {
        cy.get('.sidebar-wrapper').should('be.visible');
        cy.get(':nth-child(3) > .nav-link > p').should('be.visible').click(); // Vérifie que l'élément est visible
        //cy.url().should('eq', 'https://qua.scpi-invest.check-consulting.net/simulation');
        cy.get('.edit-icon > .fa').click();
        cy.get('.p-inputtext').type('Test_auto');
        cy.get('p-button.p-element > .p-ripple').click();
        cy.get('.add-button').click()
        cy.get('.p-inputtext').type('Primovie')
        cy.get('.card-footer').contains('Ajouter').click();
        cy.get('.p-dropdown-trigger').click()
        cy.get('#selector_detector_1').click()
        cy.get('#nue_propriete_dropdown > .p-dropdown-trigger').click()
        cy.get('#nue_propriete_dropdown_3').click()
        cy.get('.p-inputnumber-button-up').should('be.visible');
        Cypress._.times(20, () => {
            cy.get('.p-inputnumber-button-up').click();
        });
        cy.get('.card_footer > .add-button').click()
    });

})