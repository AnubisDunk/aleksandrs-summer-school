import Global from '../../page-elements/Global';
import Login from '../../page-elements/Login';
import Store from '../../page-elements/Store';
import Product from '../../page-elements/Product';
import Cart from '../../page-elements/Cart';
import Checkout from '../../page-elements/Checkout';
import Dashboard from '../../page-elements/Dashboard';
import 'cypress-if';
const USERNAME = Cypress.env('username');
const PASSWORD = Cypress.env('password');
describe('Login on webstore', () => {
    beforeEach(() => {
        cy.login(USERNAME, PASSWORD);
    });
    it('Sign-in webstore', () => {});
    it('Buy item from main page', () => {
        Store.buyProductFromFeature(2);
        Product.elements.buyInput().should('have.text', 'Select variant');
    });
    it('Buy item from store page', () => {
        Store.buyProduct(2);
        Product.elements.buyInput().should('have.text', 'Select variant');
    });
    it('Fill checkout data', () => {
        cy.visit('/cart');
        Cart.elements.container().should('be.visible');
        Cart.elements.checkoutButton().click();
        cy.visit('/checkout?step=address');
        Checkout.elements.container().should('be.visible');
        cy.fixture('addressFill').then((fields) => {
            Checkout.fillShippingAddress(fields);
        });
        Checkout.elements.sumbitAddressButton().click();
        Checkout.selectDilivery(true);
        Checkout.elements.submitDeliveryButton().click();
        Checkout.elements.submitPaymentButton().click();
        Checkout.elements.submitOrderButton().click();
        cy.url().should('include', '/order/confirmed/order');
    });
    it('Logout from menu', () => {
        cy.visit('/');
        Global.elements.sideBarBurger().click();
        Dashboard.elements.logoutButton().click();
    });
    it('Logout from dashboard', () => {
        cy.visit('/dashboard');
        Dashboard.elements.logoutButton().last().click();
        Login.elements.loginTitle().should('be.visible');
        cy.url().should('include', '/sign-in');
    });
    it('Trying access cart being logout', () => {
        cy.visit('/dashboard');
        Dashboard.elements.logoutButton().last().click();
        Login.elements.loginTitle().should('be.visible');
        cy.visit('/cart');
        Login.elements.loginTitle().should('be.visible');
        cy.url().should('include', '/sign-in');
    });
    it('Clear cart', () => {
        Store.buyProduct(2);
        Product.elements.buyInput().should('have.text', 'Select variant');
        cy.visit('/cart');
        Cart.clearCart();
    });
});
