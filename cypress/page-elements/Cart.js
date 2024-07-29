class Cart {
    elements = {};

    clearCart() {
        cy.if("tbody tr", () => {
            cy.get("tbody tr").each(($el) => {
                cy.wrap($el).find("button").click();
            });
            console.log("Cart is not empty");
        });
        // Global.exists('[data-testid="empty-cart-message"]', () => {
        //     console.log('Cart is empty');
        // }, () => {
        //     cy.get('tbody tr').each(($el) => {
        //         cy.wrap($el).find('button').click();
        //     });
        //     console.log('Cart is not empty');
        // })
    }
}
export default new Cart();
