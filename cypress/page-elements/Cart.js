class Cart {
    elements = {
        checkoutButton: () => cy.getByTestId('checkout-button'),
        cartPopup: () => cy.getByTestId('nav-cart-dropdown'),
        cartTitle: () => cy.getByTestId('cart-container'),
    };

    clearCart() {
        cy.if(
            'tbody tr',
            () => {
                cy.get('tbody tr').each(($el) => {
                    cy.wrap($el).find('button').click();
                });
                console.log('Cart is not empty');
            },
            () => {
                console.log('Cart is empty');
            }
        );
    }
}
export default new Cart();
