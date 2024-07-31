class Dashboard {
    elements = {
        profileButton: () => cy.getByTestId('profile-link'),
        addressesButton: () => cy.getByTestId('addresses-link'),
        ordersButton: () => cy.getByTestId('orders-link'),
        logoutButton: () => cy.getByTestId('logout-button'),
    };
    orderElements = {
        orderCard: () => cy.getByTestId('order-card'),
    };
}
export default new Dashboard();
