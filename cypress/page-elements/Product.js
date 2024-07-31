class Product {
    elements = {
        container: () => cy.getByTestId('product-container'),
        productOptions: () => cy.getByTestId('product-options'),
        productDescription: () => cy.getByTestId('product-description'),
        buyInput: () => cy.getByTestId('add-product-button'),
    };
}
export default new Product();
