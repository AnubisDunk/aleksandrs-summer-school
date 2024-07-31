class Cart {
    elements = {
        container: () => cy.getByTestId('cart-container'),
        checkoutButton: () => cy.getByTestId('checkout-button'),
        cartPopup: () => cy.getByTestId('nav-cart-dropdown'),
        emptyCart: () => cy.getByTestId('empty-cart-message'),
        itemQuantitySelector: () => cy.getByTestId('product-select-button'),
        cartTitle: () => cy.getByTestId('cart-container'),
    };
    changeItemQuantity(quantity) {
        this.elements.itemQuantitySelector().first().select(quantity);
    }
    clearCart() {
        cy.getByTestId('product-row')
            .if('visible')
            .each((el) => {
                cy.wrap(el).find('button').click();
            });
    }
}
export default new Cart();
