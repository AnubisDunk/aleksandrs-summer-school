class Product {
    elements = {
        productOptions: () => cy.getByTestId('product-options'),
        buyInput: () => cy.getByTestId('add-product-button'),
    };
    isAwailable() {
        return this.elements.buyInput().should('be.visible') ? true : false;
    }
}
export default new Product();
