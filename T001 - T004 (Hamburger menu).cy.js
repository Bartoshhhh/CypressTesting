describe('T001 - T004 Hamburger menu', () => {
  it('T001 - Logowanie i sprawdzenie szczegółów produktu', () => {
    // Zignoruj błędy cross-origin
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false; // Ignoruj błędy
    });

    // Otwórz stronę
    cy.visit('https://www.saucedemo.com/v1/index.html');

    // Wprowadź dane logowania
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');

    // Kliknij przycisk logowania
    cy.get('#login-button').click();

    // Sprawdź, czy logowanie powiodło się poprzez sprawdzenie URL po logowaniu
    cy.url().should('include', '/inventory');

    // Kliknij na dowolny przedmiot, aby przejść do jego szczegółów
    cy.get('#item_4_title_link > div').click();

    // Sprawdź, czy przekierowano na stronę szczegółów produktu
    cy.url().should('include', '/inventory-item.html?id=4');
  });

  // it('T002 - Powrót do strony produktów przez Hamburger menu', () => {
  //   // Otwórz stronę
  //   cy.visit('https://www.saucedemo.com/v1/index.html');

  //   // Wprowadź dane logowania
  //   cy.get('#user-name').type('standard_user');
  //   cy.get('#password').type('secret_sauce');

  //   // Kliknij przycisk logowania
  //   cy.get('#login-button').click();

  //   // Sprawdź, czy logowanie powiodło się poprzez sprawdzenie URL po logowaniu
  //   cy.url().should('include', '/inventory');

  //   // Otwarcie Menu
  //   cy.get('#menu_button_container > div > div:nth-child(3) > div > button').click();
  //   cy.get('#inventory_sidebar_link').click();

  //   // Sprawdź, czy przekierowano na stronę produktów
  //   cy.url().should('include', '/inventory');
  // });

  it('T003 - Wylogowanie z aplikacji przez Hamburger menu', () => {
    // Otwórz stronę
    cy.visit('https://www.saucedemo.com/v1/index.html');

    // Wprowadź dane logowania
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');

    // Kliknij przycisk logowania
    cy.get('#login-button').click();

    // Sprawdź, czy logowanie powiodło się poprzez sprawdzenie URL po logowaniu
    cy.url().should('include', '/inventory');

    // Kliknij na menu
    cy.get('#menu_button_container > div > div:nth-child(3) > div > button').click();

    // Kliknij na przycisk Logout
    cy.get('#logout_sidebar_link').click();

    // Sprawdź czy poprawnie wylogowało
    cy.url().should('include', '/index');
  });

  it('T004 - Reset App state', () => {
    // Otwórz stronę
    cy.visit('https://www.saucedemo.com/v1/index.html');

    // Wprowadź dane logowania
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');

    // Kliknij przycisk logowania
    cy.get('#login-button').click();

    // Sprawdź, czy logowanie powiodło się poprzez sprawdzenie URL po logowaniu
    cy.url().should('include', '/inventory');

    // Kliknij na menu
    cy.get('#menu_button_container > div > div:nth-child(3) > div > button').click();

    // Kliknij na przycisk Reset App state
    cy.get('#reset_sidebar_link').click();

    // Sprawdzenie czy status został zresetowany jednak ta opcja nie działa.

    
  });
});
