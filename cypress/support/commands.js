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

import Home from "../page-elements/Home";
import Login from "../page-elements/Login";

Cypress.Commands.add("getByTestId", (id) => {
    cy.get(`[data-testid=${id}]`);
});
Cypress.Commands.add("logIn", (email, password) => {
    cy.contains("h1", "Welcome back");
    Login.logIn(email, password);
    Login.elements.singInButton().click();
    Home.elements.headerLink().should("have.text", "Store of Excellence");
});

Cypress.Commands.add("if", (query, exists, notexists = () => {}) => {
    cy.get("body").then(($body) => {
        if ($body.find(query).length > 0) {
            //[data-testid="empty-cart-message"]
            exists();
        } else {
            notexists();
        }
    });
});
