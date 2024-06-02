export class Login {
    visit() {
        cy.visit('https://www.edu.goit.global/account/login')
    }

    login(email, password) {
        cy.get('#user_email').type(email);
        cy.get('#user_password').type(password);
        cy.contains('Log in').click();
    }
}