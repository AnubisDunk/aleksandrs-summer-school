class Global {
    elements = {
        headerLink: () => cy.getByTestId('nav-store-link'),
        sideBarBurger: () => cy.getByTestId('nav-menu-button'),
        sideBarMenu: () => cy.getByTestId('nav-menu-popup'),
        languageSelector: () =>
            cy
                .getByTestId('nav-menu-popup')
                .find('button[type=button]')
                .first(),
    };
}
export default new Global();
