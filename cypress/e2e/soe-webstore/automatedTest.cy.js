import Global from '../../page-elements/Global';
import Login from '../../page-elements/Login';
import Store from '../../page-elements/Store';
import Product from '../../page-elements/Product';
import Cart from '../../page-elements/Cart';
import Checkout from '../../page-elements/Checkout';
import Dashboard from '../../page-elements/Dashboard';
const USERNAME = Cypress.env('username');
const PASSWORD = Cypress.env('password');
const DATA = {
    firstName: 'Joe',
    lastName: 'Doe',
    address: 'Rujenas iela 6-9',
    company: 'Obito Baltic',
    postalCode: 'LV-1035',
    city: 'Riga',
    stateProvince: 'Riga',
    country: 'us',
};
describe('Login on webstore', () => {
    beforeEach(() => {
        cy.login(USERNAME, PASSWORD);
    });
    it('Sign-in webstore', () => {});
    it('Buy 2 items from main page', () => {
        Store.buyProductFromFeature(3);
        Product.elements.buyInput().should('have.text', 'Select variant');
    });
    it('Buy 2 items from store page', () => {
        Store.buyProduct(2);
        Product.elements.buyInput().should('have.text', 'Select variant');
    });
    it('Fill checkout data', () => {
        cy.visit('/cart');
        Cart.elements.cartTitle().contains('h1', 'Cart');
        Cart.elements.checkoutButton().click();
        cy.visit('/checkout?step=address');
        Checkout.fillShippingAddress(DATA);
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
    });
    it('Trying access cart being logout', () => {
        cy.visit('/dashboard');
        Dashboard.elements.logoutButton().last().click();
        cy.wait(500);
        cy.visit('/cart');
        cy.url().should('include', '/sign-in');
    });
    // it('Clear cart', () => {
    //     cy.visit('/cart');
    //     Cart.clearCart();
    // });
});
