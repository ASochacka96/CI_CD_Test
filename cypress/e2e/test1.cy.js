describe('Pierwszy test', () => {
  it('Logowanie i wylogowanie ze strony LMS', () => {
    //Polecenie otwarcia strony logowania 
    cy.visit('https://www.edu.goit.global/account/login');
    //Polecenie wyszukania pola email i wpisania email **user888@gmail.com**
    cy.get('#user_email').type("user888@gmail.com");
    //Polecneie wyszukania pola hasło i wprowadzenia hasła **1234567890**
    cy.get('#user_password').type("1234567890");
    //Polecenie znalezienia i wciśnięcia przycisku **Log in**
    cy.get('.eckniwg2').click();
    //Polecnie znalezienia przycisku w prawym górnym rogu i otworzenie menu
    cy.get('#open-navigation-menu-mobile').click();
    //Polecenie znalezienia i wciśnięcia przycisku **Log out**
    cy.get(":nth-child(12) > .next-bve2vl").scrollIntoView().click();
  });
});