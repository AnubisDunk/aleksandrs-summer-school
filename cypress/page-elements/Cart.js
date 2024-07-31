class Cart {
    elements = {
        container: () => cy.getByTestId('cart-container'),
        checkoutButton: () => cy.getByTestId('checkout-button'),
        cartPopup: () => cy.getByTestId('nav-cart-dropdown'),
        cartTitle: () => cy.getByTestId('cart-container'),
    };

    clearCart() {
        cy.getByTestId('product-row')
            .if('visible')
            .each((el) => {
                cy.wrap(el).find('button').click();
            });
    }
}
export default new Cart();
