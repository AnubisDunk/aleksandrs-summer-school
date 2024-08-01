import Global from '../../page-elements/Global';
import Login from '../../page-elements/Login';
import Store from '../../page-elements/Store';
import Product from '../../page-elements/Product';
import Cart from '../../page-elements/Cart';
import Checkout from '../../page-elements/Checkout';
import Dashboard from '../../page-elements/Dashboard';

import 'cypress-if';

const USERNAME = Cypress.env('EMAIL');

const PASSWORD = Cypress.env('PASSWORD');
describe('Full flow test', () => {
    beforeEach(() => {
        cy.login(USERNAME, PASSWORD);
    });
    it('Sign-in webstore with right correct credentials', () => {});
    it('Sign-in webstore with wrong credentials', () => {
        cy.logout();
        Login.wrongLogin();
        Login.elements.singInButton().click();
        Login.elements.errorMessage().should('be.visible');
    });
    it('Observe item', () => {
        cy.visit('/');
        Store.openProduct(2);
    });
    it('Buy item from main page', () => {
        cy.visit('/');
        Store.openProduct(2);
        Store.buyProduct(2);
        Product.elements.buyInput().should('have.text', 'Select variant');
    });
    it('Buy item from store page', () => {
        cy.visit('/store');
        Store.elements.container().should('be.visible');
        Store.openProduct(4);
        Store.buyProduct(2);
        Product.elements.buyInput().should('have.text', 'Select variant');
    });
    it('Checkout product with empty shipping address fields', () => {
        cy.visit('/cart');
        Cart.elements.container().should('be.visible');
        Cart.elements.checkoutButton().click();
        cy.visit('/checkout?step=address');
        Checkout.elements.container().should('be.visible');
        Checkout.elements.sumbitAddressButton().click();
    });
    it('Checkout product', () => {
        cy.visit('/cart');
        Cart.elements.container().should('be.visible');
        Cart.elements.checkoutButton().click();
        cy.visit('/checkout?step=address');
        Checkout.elements.container().should('be.visible');
        cy.fixture('addressFill').then((fields) => {
            Checkout.fillShippingAddress(fields);
        });
        Checkout.elements.sumbitAddressButton().click();
        Checkout.selectDilivery(true); //isExpress?
        Checkout.elements.submitDeliveryButton().click();
        Checkout.elements.submitPaymentButton().click();
        Checkout.elements.submitOrderButton().click();
        cy.url().should('include', '/order/confirmed/order');
    });
    it('Check order from dashboard', () => {
        cy.visit('/dashboard');
        Dashboard.elements.ordersButton().last().click();

        Dashboard.orderElements
            .orderCard()
            .first()
            .should('be.visible')
            .find('a')
            .click();
        cy.url().should('include', 'order_');
    });
    it('Logout from menu', () => {
        cy.logout();
    });
    it('Logout from dashboard', () => {
        cy.visit('/dashboard');
        Dashboard.elements.logoutButton().last().click();
        Login.elements.container().should('be.visible');
        cy.url().should('include', '/sign-in');
    });
    it('Trying access cart being logout', () => {
        cy.visit('/dashboard');
        Dashboard.elements.logoutButton().last().click();
        Login.elements.container().should('be.visible');
        cy.visit('/cart');
        Login.elements.container().should('be.visible');
        cy.url().should('include', '/sign-in');
    });

    it('Change product quantity, clear cart', () => {
        cy.visit('/');
        Store.openProduct(2);
        Store.buyProduct(2);
        Product.elements.buyInput().should('have.text', 'Select variant');
        cy.visit('/cart');
        Cart.changeItemQuantity(5);
        Cart.elements.itemQuantitySelector().should('have.value', '5');
        Cart.clearCart();
        Cart.elements.emptyCart().should('be.visible');
    });
});
