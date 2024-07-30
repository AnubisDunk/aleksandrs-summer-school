import Global from './Global';

class Checkout {
    elements = {
        deliveryOptions: () => cy.getByTestId('delivery-options-container'),
        sumbitAddressButton: () => cy.getByTestId('submit-address-button'),
        submitDeliveryButton: () =>
            cy.getByTestId('submit-delivery-option-button'),
        submitPaymentButton: () => cy.getByTestId('submit-payment-button'),
        submitOrderButton: () => cy.getByTestId('submit-order-button'),
        shippingAddress: {
            firstName: () => cy.getSA('first-name'),
            lastName: () => cy.getSA('last-name'),
            address: () => cy.getSA('address'),
            company: () => cy.getSA('company'),
            postalCode: () => cy.getSA('postal-code'),
            city: () => cy.getSA('city'),
            stateProvince: () => cy.getSA('province'),
            country: () => cy.getByTestId('shipping-country-select'),
        },
    };
    fillShippingAddress(data = {}) {
        for (let field in this.elements.shippingAddress) {
            if (field != 'country') {
                this.elements.shippingAddress[field]()
                    .clear()
                    .type(data[field]);
            }
        }
        this.elements.shippingAddress.country().select(data.country);
    }
    selectDilivery(isExpress = false) {
        if (!isExpress) {
            this.elements.deliveryOptions().contains('FakeEx Standard').click();
        } else
            this.elements.deliveryOptions().contains('FakeEx Express').click();
    }
}
export default new Checkout();
