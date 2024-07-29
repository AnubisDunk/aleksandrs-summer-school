import Global from '../../page-elements/Global';
import Login from '../../page-elements/Login';
import Home from '../../page-elements/Home';
import Product from '../../page-elements/Product';
import Cart from '../../page-elements/Cart';
const USERNAME = Cypress.env('username');
const PASSWORD = Cypress.env('password');
describe('Login on webstore', () => {
    beforeEach(() => {
        cy.visit('/');
    })
    it('Sign-in webstore', () => {
        cy.logIn(USERNAME, PASSWORD);
    });
    it('Buy first 2 items in store', () => {
        cy.logIn(USERNAME, PASSWORD);
        Home.buyProduct(1);
        //Home.buyProduct(2);

    })
    it('Clear cart', () => {
        cy.logIn(USERNAME, PASSWORD);
        cy.visit('https://coe-webstore.tdlbox.com/cart')
        Cart.clearCart();
        
    })
});

