import Product from './Product';

class Store {
    elements = {
        container: () => cy.getByTestId('products-list'),
        product: () => cy.getByTestId('product-wrapper'),
    };
    openProduct(index = 0, optionIndex = 0) {
        this.elements.product().parent().eq(index).click();
        Product.elements.container().should('be.visible');
    }
    buyProduct(index = 0, optionIndex = 0) {
        Product.elements
            .productOptions()
            .if('visible')
            .then(() => {
                Product.elements.productOptions().each((option) => {
                    option.find('button').eq(optionIndex).click();
                });
            });
        Product.elements.buyInput().should('be.visible').click();
    }
}
export default new Store();
