class Login {
    elements = {
        container: () => cy.getByTestId('login-page'),
        singInButton: () => cy.getByTestId('sign-in-button'),
        passwordInput: (password) => cy.getByTestId('password-input'),
        emailInput: (email) => cy.getByTestId('email-input'),
        errorMessage: () => cy.getByTestId('login-error-message'),
    };
    login(email, password) {
        this.elements.emailInput().clear().type(email);
        this.elements.passwordInput().clear().type(password);
    }
    wrongLogin() {
        let randEmail = `${this.randomChar(10)}@${this.randomChar(4)}.${this.randomChar(3)}`;
        let randPassword = this.randomChar(15);
        this.elements.emailInput().clear().type(randEmail);
        this.elements.passwordInput().clear().type(randPassword);
    }
    randomChar(length) {
        let res = '';
        const CHARACTERS =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < length; i++) {
            res += CHARACTERS.charAt(
                Math.floor(Math.random() * CHARACTERS.length)
            );
            i++;
        }
        return res;
    }
}
export default new Login();
