import Login from '../page-elements/Login';
import Global from '../page-elements/Global';
import Dashboard from '../page-elements/Dashboard';

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
        Login.elements.container().should('be.visible');
        Login.login(email, password);
        Login.elements.singInButton().click();
        Global.elements.headerLink().should('be.visible');
    });
});
Cypress.Commands.add('logout', () => {
    cy.visit('/');
    Global.elements.sideBarBurger().click();
    Dashboard.elements.logoutButton().click();
    Login.elements.container().should('be.visible');
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
