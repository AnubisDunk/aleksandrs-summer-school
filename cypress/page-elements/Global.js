class Global {
    elements = {
        headerLink: () => cy.getByTestId('nav-store-link'),
        sideBarBurger: () => cy.getByTestId('nav-menu-button'),
        sideBarLinks: (pageName) =>
            cy.getByTestId('nav-menu-popup').contains('a', pageName),
    };
    navigateSideBar = {
        openPage: (pageName) => {
            this.elements.sideBarBurger().click();
            this.elements.sideBarLinks(pageName);
        },
    };
}
export default new Global();
