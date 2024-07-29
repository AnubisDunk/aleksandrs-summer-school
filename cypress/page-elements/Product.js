class Product {
    elements = {
        sizeSelector: () => cy.getByTestId('product-options').find('button').first(),
        colorSelector: () => cy.getByTestId('product-options').eq(1).find('button').first(),
        buyInput : () =>  cy.getByTestId('add-product-button')

    }
}
export default new Product();