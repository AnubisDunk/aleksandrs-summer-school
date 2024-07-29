class Global {
    elements = {
        sideBarBurger: () => cy.getByTestId("nav-menu-button"),
        sideBarLinks: (pageName) =>
            cy.getByTestId("nav-menu-popup").contains("a", pageName),
    };
    navigateSideBar = {
        openPage: (pageName) => {
            this.elements.sideBarBurger().click();
            this.elements.sideBarLinks(pageName);
        },
    };
}
export default new Global();
