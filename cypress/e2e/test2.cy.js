describe('Drugi test', () => {
  it('Logowanie i wylogowanie ze strony LMS', () => {
    //Polecenie otwarcia strony logowania 
    cy.visit('https://www.edu.goit.global/account/login');
    //Polecenie wyszukania pola email i wpisania email **testowyqa@qa.team**
    cy.get('#user_email').type("testowyqa@qa.team");
    //Polecneie wyszukania pola hasło i wprowadzenia hasła **QA!automation-1**
    cy.get('#user_password').type("QA!automation-1");
    //Polecenie znalezienia i wciśnięcia przycisku **Log in**
    cy.get('.eckniwg2').click();
    //Polecnie znalezienia przycisku w prawym górnym rogu i otworzenie menu
    cy.get('#open-navigation-menu-mobile').click();
    //Polecenie znalezienia i wciśnięcia przycisku **Log out**
    cy.get(':nth-child(9) > .next-bve2vl').click();
  });
});