class Global {
    elements = {
        sideBarBurger: () => cy.getByTestId('nav-menu-button'),
        sideBarLinks: (pageName) => cy.getByTestId('nav-menu-popup').contains('a', pageName)

    }
    navigateSideBar = {
        openPage : (pageName) => {
            this.elements.sideBarBurger().click();
            this.elements.sideBarLinks(pageName);
        }
    }
    exists(query, exists, notexists) {
        cy.get('body').then($body => {
            if ($body.find(query).length > 0) { //[data-testid="empty-cart-message"]
              
                exists();
            } else {
               
                notexists();
                
            }
        })
    }
};
export default new Global();