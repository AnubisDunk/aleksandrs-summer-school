import Global from '../../page-elements/Global';
import Product from '../../page-elements/Product';
import Store from '../../page-elements/Store';

const USERNAME = Cypress.env('username');
const PASSWORD = Cypress.env('password');
const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect();
describe('Multi language functionality tests', () => {
    beforeEach(() => {
        cy.login(USERNAME, PASSWORD);
    });
    it('Switching language to Latvian', () => {
        cy.visit('/');
        Global.elements.sideBarBurger().click();
        Global.elements.languageSelector().click();
        cy.contains('LV').click();
        Global.elements.headerLink().should('have.text', 'Veikals izcilībai');
    });
    it('Check if product description has proper language', () => {
        cy.visit('/');
        Global.elements.sideBarBurger().click();
        Global.elements.languageSelector().click();
        cy.contains('LV').click();
        Store.openProduct(0);
        Product.elements
            .productDescription()
            .invoke('text')
            .then((text) => {
                if (lngDetector.detect(text, 1)[0][0] === 'latvian') {
                    cy.log('Language is Latvian');
                } else {
                    throw new Error('test fails here');
                }
            });
    });
});
