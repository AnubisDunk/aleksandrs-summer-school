import Product from './Product';

class Store {
    elements = {
        allProducts: () => cy.getByTestId('products-list').find('li'),
    };
    buyProductFromFeature(index = 0) {
        cy.visit('/');
        cy.get(`ul ul :nth-child(${index}) a`).click();
        Product.elements.productOptions().each((option) => {
            option.find('button').eq(1).click();
        });

        Product.elements.buyInput().should('be.visible').click();
    }
    buyProduct(index = 0) {
        cy.visit('/store');

        this.elements.allProducts().find('a').eq(index).click();

        Product.elements.productOptions().each((option) => {
            option.find('button').eq(1).click();
        });

        Product.elements.buyInput().should('be.visible').click();
    }
}
export default new Store();
