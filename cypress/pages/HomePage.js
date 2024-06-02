export class HomePage {
    visit() {
        cy.visit('https://www.edu.goit.global/account/login')
    }

    logout() {
        cy.get('#open-navigation-menu-mobile').click();
        cy.contains('Log out').click();
    }
}