class Product {
    elements = {
        productOptions: () => cy.getByTestId("product-options"),
        buyInput: () => cy.getByTestId("add-product-button"),
    };
}
export default new Product();
