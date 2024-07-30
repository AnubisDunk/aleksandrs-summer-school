class Dashboard {
    elements = {
        logoutButton: () => cy.getByTestId('logout-button'),
    };
}
export default new Dashboard();
