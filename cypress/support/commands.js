// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import Login from '../page-elements/Login';
import Global from '../page-elements/Global';

Cypress.Commands.add('getByTestId', (id) => {
    cy.get(`[data-testid=${id}]`);
});
Cypress.Commands.add('getSA', (id) => {
    //shortcut for getting Shipping Adress ID
    cy.getByTestId(`shipping-${id}-input`);
});
Cypress.Commands.add('login', (email, password) => {
    cy.session([email, password], () => {
        cy.visit('/');
        Login.elements.loginTitle().should('be.visible');
        Login.logIn(email, password);
        Login.elements.singInButton().click();
        Global.elements.headerLink().should('be.visible');
    });
});
//My cypress if command.
Cypress.Commands.add('myif', (query, exists, notexists = () => {}) => {
    cy.get('body').then(($body) => {
        if ($body.find(query).length > 0) {
            exists();
        } else {
            notexists();
        }
    });
});
