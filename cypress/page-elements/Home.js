import Product from "./Product";

class Home {
    elements = {
        headerLink: () => cy.getByTestId('nav-store-link')
    };
    buyProduct(index = 0) {
        cy.get(`ul ul :nth-child(${index}) a`).click();
        Product.elements.sizeSelector().click();
        
        Product.elements.colorSelector().should('be.visible').click();
        Product.elements.buyInput().should('be.visible').click();
        cy.visit('/');
    }
}
export default new Home();