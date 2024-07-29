import Product from "./Product";

class Home {
    elements = {
        headerLink: () => cy.getByTestId("nav-store-link"),
    };
    buyProduct(index = 0) {
        cy.get(`ul ul :nth-child(${index}) a`).click();
        //Product.elements.productOptions().should('have.length', 2)
        Product.elements.productOptions().each((option) => {
            option.find("button").first().click();
        });
        //Product.elements.productOptions().first().find('button').first().click();
        // Global.exists('[data-testid="product-options"]:last button:first', // TODO!
        //     () => {
        //         Product.elements.colorSelector().should('be.visible').click();
        //     },
        //     () => {
        //         console.log('No color');
        //     })
        //Product.elements.colorSelector().should('be.visible').click();
        Product.elements.buyInput().should("be.visible").click();
        cy.visit("/");
    }
}
export default new Home();
