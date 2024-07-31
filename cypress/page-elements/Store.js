import Product from './Product';

class Store {
    elements = {
        allProducts: () => cy.getByTestId('products-list').find('li'),
    };
    buyProductFromFeature(index = 0, optionIndex = 0) {
        cy.visit('/');
        cy.getByTestId('product-wrapper').parent().eq(index).click();
        Product.elements.container().should('be.visible');

        Product.elements.productOptions().each((option) => {
            option.find('button').eq(optionIndex).click();
        });
        Product.elements.buyInput().should('be.visible').click();
    }
    buyProduct(index = 0, optionIndex = 0) {
        cy.visit('/store');

        this.elements.allProducts().find('a').eq(index).click();

        Product.elements.productOptions().each((option) => {
            option.find('button').eq(optionIndex).click();
        });

        Product.elements.buyInput().should('be.visible').click();
    }
}
export default new Store();
