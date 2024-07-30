class Login {
    elements = {
        singInButton: () => cy.getByTestId('sign-in-button'),
        passwordInput: (password) => cy.getByTestId('password-input'),
        emailInput: (email) => cy.getByTestId('email-input'),
    };
    logIn(email, password) {
        this.elements.emailInput().clear().type(email);
        this.elements.passwordInput().clear().type(password);
    }
}
export default new Login();
