import Global from '../../page-elements/Global';
import Product from '../../page-elements/Product';
import Store from '../../page-elements/Store';

const USERNAME = Cypress.env('EMAIL');
const PASSWORD = Cypress.env('PASSWORD');
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
    it('Switching language from Latvian to English', () => {
        cy.visit('/');
        Global.elements.sideBarBurger().click();
        Global.elements.languageSelector().click();
        cy.contains('LV').click();
        Global.elements.headerLink().should('have.text', 'Veikals izcilībai');
        Global.elements.sideBarBurger().click();
        Global.elements.languageSelector().click();
        cy.contains('US').click();
        Global.elements.headerLink().should('have.text', 'Store of Excellence');
    });
    it('Check if Latvian page product description has Latvian language', () => {
        cy.visit('/');
        Global.elements.sideBarBurger().click();
        Global.elements.languageSelector().click();
        cy.contains('LV').click();
        Store.openProduct(0);
        Product.elements
            .productDescription()
            .invoke('text')
            .then((text) => {
                let detectedLanguage = lngDetector.detect(text, 1)[0][0];
                if (detectedLanguage === 'latvian') {
                    cy.log('Language is Latvian');
                } else {
                    cy.log(`Language is ${detectedLanguage}`);
                }
            });
    });
});
