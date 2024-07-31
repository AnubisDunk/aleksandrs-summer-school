class Product {
    elements = {
        container: () => cy.getByTestId('product-container'),
        productOptions: () => cy.getByTestId('product-options'),
        buyInput: () => cy.getByTestId('add-product-button'),
    };
}
export default new Product();
