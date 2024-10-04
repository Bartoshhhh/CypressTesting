describe('T005 - T021 - Functionality', () => {
    it('T005 - Sprawdzenie przekierowania do koszyka', () => {
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
        cy.get('#shopping_cart_container > a > svg > path').click();
        cy.url().should('include', '/cart');
    });

    it('T006 - Poprawność działania filtru A-Z', () => {
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

        // Wybierz opcję 'Z-A' z filtru
        cy.get('#inventory_filter_container > select').select('Name (Z to A)');

        // Wybierz opcję 'A-Z' z filtru
        cy.get('#inventory_filter_container > select').select('Name (A to Z)');

        // Sprawdź, czy na pierwszym miejscu znajduje się produkt o nazwie "Sauce Labs Backpack"
        cy.get('#inventory_container > div').first().find('.inventory_item_name').should('contain', 'Sauce Labs Backpack');
    });

    it('T007 - Poprawność działania filtru Z-A', () => {
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

        // Wybierz opcję 'Z-A' z filtru
        cy.get('#inventory_filter_container > select').select('Name (Z to A)');

        // Sprawdź, czy na pierwszym miejscu znajduje się produkt o nazwie "Test.allTheThings() T-Shirt (Red)"
        cy.get('#inventory_container > div').first().find('.inventory_item_name').should('contain', 'Test.allTheThings() T-Shirt (Red)');
    });

    it('T008 - Poprawność działania filtru price Low to High', () => {
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

        // Wybierz opcję 'price Low to High' z filtru
        cy.get('#inventory_filter_container > select').select('Price (low to high)');

        // Sprawdź, czy na pierwszym miejscu znajduje się produkt o cenie 7.99
        cy.get('#inventory_container > div').first().find('.pricebar > div').should('contain', '7.99');



    });

    it('T009 - Poprawność działania filtru price High to Low', () => {
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

        // Wybierz opcję 'price Low to High' z filtru
        cy.get('#inventory_filter_container > select').select('Price (high to low)');

        // Sprawdź, czy na pierwszym miejscu znajduje się produkt o cenie 7.99
        cy.get('#inventory_container > div').first().find('.pricebar > div').should('contain', '49.99');



    });




    it('T010 - Dodanie przedmiotu do koszyka', () => {
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

        // Wstaw przedmiot do koszyka
        cy.get('#inventory_container > div > div:nth-child(1) > div.pricebar > button').click();

        // Sprawdź czy przedmiot został prawidłowo dodany

        cy.get('#shopping_cart_container > a > span').should('have.text', '1');

    });

    it('T011 - Dodanie przedmiotu do koszyka przy użyciu strony produktu', () => {
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

        // Wstaw przedmiot do koszyka z karty produktu
        cy.get('#item_4_title_link > div').click();
        cy.get('#inventory_item_container > div > div > div > button').click();

        // Sprawdź czy przedmiot został prawidłowo dodany

        cy.get('#shopping_cart_container > a > span').should('have.text', '1');

    });

    it('T012 - Usunięcie przedmiotu z koszyka', () => {
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

        // Wstaw przedmiot do koszyka
        cy.get('#inventory_container > div > div:nth-child(1) > div.pricebar > button').click();

        // Sprawdź czy przedmiot został prawidłowo dodany

        cy.get('#shopping_cart_container > a > span').should('have.text', '1');

        // Usuń przedmiot z koszyka za pomocą przycisku remove

        cy.contains('REMOVE').click();
        cy.wait(60);

        // Wejdź w koszyk
        cy.get('#shopping_cart_container > a > svg > path').click();

        // Sprawdź, czy znajdujesz się w koszyku
        cy.url().should('include', '/cart.html');

        // Sprawdź, czy na stronie nie ma przedmiotu "Sauce Labs Backpack"
        cy.contains('Sauce Labs Backpack').should('not.exist'); // Sprawdź, czy tekst nie istnieje na stronie


    });

    it('T013 - Dodanie kilku (3) przedmiotów do koszyka', () => {
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

        // Wstaw przedmiot do koszyka
        cy.get('#inventory_container > div > div:nth-child(1) > div.pricebar > button').click();
        cy.get('#inventory_container > div > div:nth-child(2) > div.pricebar > button').click();
        cy.get('#inventory_container > div > div:nth-child(3) > div.pricebar > button').click();

        // Sprawdź czy przedmiot został prawidłowo dodany

        cy.get('#shopping_cart_container > a > span').should('have.text', '3');

    });


    it('T014 - Usunięcie kilku (3) przedmiotów do koszyka', () => {
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

        // Wstaw przedmiot do koszyka
        cy.get('#inventory_container > div > div:nth-child(1) > div.pricebar > button').click();
        cy.get('#inventory_container > div > div:nth-child(2) > div.pricebar > button').click();
        cy.get('#inventory_container > div > div:nth-child(3) > div.pricebar > button').click();

        // Sprawdź czy przedmiot został prawidłowo dodany
        cy.get('#shopping_cart_container > a > span').should('have.text', '3');

        // Usuń dodane przedmioty z koszyka z poziomu strony inwentarza
        cy.get('#inventory_container > div > div:nth-child(3) > div.pricebar > button')
        .contains('REMOVE')
        .click();

        cy.get('#inventory_container > div > div:nth-child(2) > div.pricebar > button')
        .contains('REMOVE')
        .click();

        cy.get('#inventory_container > div > div:nth-child(1) > div.pricebar > button')
        .contains('REMOVE')
        .click();

        // Wejdź w koszyk
        cy.get('#shopping_cart_container > a > svg > path').click();

        // Sprawdź, czy znajdujesz się w koszyku
        cy.url().should('include', '/cart.html');
        
        // Sprawdź, czy na stronie nie ma przedmiotu "Sauce Labs Backpack"
        cy.contains('Sauce Labs Backpack').should('not.exist'); // Sprawdź, czy (1) przedmiot znajduje się
        cy.contains('Sauce Labs Bike Light').should('not.exist'); // Sprawdź, czy (1) przedmiot znajduje się
        cy.contains('Sauce Labs Bolt T-Shirt').should('not.exist'); // Sprawdź, czy (1) przedmiot znajduje się


    });

    it('T015 - Usunięcie przedmiotu z koszyka na ekranie cart', () => {
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

        // Wstaw przedmioty do koszyka
        cy.get('#inventory_container > div > div:nth-child(1) > div.pricebar > button').click();
        cy.get('#inventory_container > div > div:nth-child(2) > div.pricebar > button').click();

        // Sprawdź czy przedmiot został prawidłowo dodany

        cy.get('#shopping_cart_container > a > span').should('have.text', '2');

        // Wejdź w koszyk
        cy.get('#shopping_cart_container > a > svg > path').click();

        // Sprawdź, czy znajdujesz się w koszyku
        cy.url().should('include', '/cart.html');

        // Usunięcie jednego przedmiotu z koszyka
        cy.get('#cart_contents_container > div > div.cart_list > div:nth-child(4) > div.cart_item_label > div.item_pricebar > button').click();

        cy.contains('Sauce Labs Bike Light').should('not.exist'); // Sprawdź, czy przedmiot nie istnieje


    });

    it('T016 - Zakup przedmiotu', () => {
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

        // Wstaw przedmiot do koszyka
        cy.get('#inventory_container > div > div:nth-child(1) > div.pricebar > button').click();

        // Sprawdź czy przedmiot został prawidłowo dodany

        cy.get('#shopping_cart_container > a > span').should('have.text', '1');

        // Przejdź do koszyka
        cy.get('#shopping_cart_container > a > svg > path').click();

        // Przejdź do kasy
        cy.get('#cart_contents_container > div > div.cart_footer > a.btn_action.checkout_button').click();

        // Uzupełnij FirstName,LastName,Zip/Postal code

        cy.get('#first-name').type('Adam');
        cy.get('#last-name').type('Grabowski');
        cy.get('#postal-code').type('00-002');

        // Proceduj
        cy.get('#checkout_info_container > div > form > div.checkout_buttons > input').click();
        
        // Sprawdź czy produkt jest prawidłowo dodany i proceduj

        cy.contains('Sauce Labs Backpack').should('exist');
        cy.wait(4000)

        cy.get('#checkout_summary_container > div > div.summary_info > div.cart_footer > a.btn_action.cart_button').click();

        // Sprawdź czy udało się zrealizować zamówienie

        cy.url().should('include', '/checkout-complete');


    });

    it('T017 - Zakup kilku przedmiotów', () => {
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

        // Wstaw przedmioty do koszyka
        cy.get('#inventory_container > div > div:nth-child(1) > div.pricebar > button').click();
        cy.get('#inventory_container > div > div:nth-child(2) > div.pricebar > button').click();

        // Sprawdź czy przedmiot został prawidłowo dodany

        cy.get('#shopping_cart_container > a > span').should('have.text', '2');

        // Przejdź do koszyka
        cy.get('#shopping_cart_container > a > svg > path').click();

        // Przejdź do kasy
        cy.get('#cart_contents_container > div > div.cart_footer > a.btn_action.checkout_button').click();

        // Uzupełnij FirstName,LastName,Zip/Postal code

        cy.get('#first-name').type('Adam');
        cy.get('#last-name').type('Grabowski');
        cy.get('#postal-code').type('00-002');

        // Proceduj
        cy.get('#checkout_info_container > div > form > div.checkout_buttons > input').click();
        
        // Sprawdź czy produkt jest prawidłowo dodany i proceduj

        cy.contains('Sauce Labs Backpack').should('exist');
        cy.wait(4000)

        cy.contains('Sauce Labs Bike Light').should('exist');
        cy.wait(4000)

        cy.get('#checkout_summary_container > div > div.summary_info > div.cart_footer > a.btn_action.cart_button').click();

        // Sprawdź czy udało się zrealizować zamówienie

        cy.url().should('include', '/checkout-complete');


    });

    it('T018 - Działanie przycisku Continue shopping', () => {
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

        // Wstaw przedmioty do koszyka
        cy.get('#inventory_container > div > div:nth-child(1) > div.pricebar > button').click();
        cy.get('#inventory_container > div > div:nth-child(2) > div.pricebar > button').click();

        // Sprawdź czy przedmiot został prawidłowo dodany

        cy.get('#shopping_cart_container > a > span').should('have.text', '2');

        // Przejdź do koszyka
        cy.get('#shopping_cart_container > a > svg > path').click();

        // Naciśnij przycisk continue shopping
        cy.get('#cart_contents_container > div > div.cart_footer > a.btn_secondary').click();

        // Sprawdź czy prawidłowo powróci i czy produkty nadal znajdują się w koszyku

        cy.url().should('include', 'inventory');
        cy.get('#shopping_cart_container > a > span').should('have.text', '2');


    });

    it('T019 - Przycisk cancel wraca do koszyka', () => {
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

        // Wstaw przedmioty do koszyka
        cy.get('#inventory_container > div > div:nth-child(1) > div.pricebar > button').click();
        cy.get('#inventory_container > div > div:nth-child(2) > div.pricebar > button').click();

        // Sprawdź czy przedmiot został prawidłowo dodany

        cy.get('#shopping_cart_container > a > span').should('have.text', '2');

        // Przejdź do koszyka
        cy.get('#shopping_cart_container > a > svg > path').click();

        // Naciśnij przycisk checkout
        cy.get('#cart_contents_container > div > div.cart_footer > a.btn_action.checkout_button').click();

        // Sprawdzenie czy jesteś na pierwszym etapie zakupu (checkout-step-one)
        cy.url().should('include', '/checkout-step-one');

        // Przycisk cancel
        cy.get('#checkout_info_container > div > form > div.checkout_buttons > a').click();
        
        // Czy przedmioty nadal znajdują się w koszyku + Sprawdzenie URL powrotu do koszyka
        cy.get('#shopping_cart_container > a > span').should('have.text', '2');
        cy.url().should('include', 'cart');

    });


    it('T020 - Przycisk cancel po wypełnieniu danych adresowych', () => {
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

        // Wstaw przedmioty do koszyka
        cy.get('#inventory_container > div > div:nth-child(1) > div.pricebar > button').click();
        cy.get('#inventory_container > div > div:nth-child(2) > div.pricebar > button').click();

        // Sprawdź czy przedmiot został prawidłowo dodany

        cy.get('#shopping_cart_container > a > span').should('have.text', '2');

        // Przejdź do koszyka
        cy.get('#shopping_cart_container > a > svg > path').click();

        // Naciśnij przycisk checkout
        cy.get('#cart_contents_container > div > div.cart_footer > a.btn_action.checkout_button').click();

        // Sprawdzenie czy jesteś na pierwszym etapie zakupu (checkout-step-one)
        cy.url().should('include', '/checkout-step-one');

        // Uzupełnij FirstName,LastName,Zip/Postal code i kliknij cancel

        cy.get('#first-name').type('Adam');
        cy.get('#last-name').type('Grabowski');
        cy.get('#postal-code').type('00-002');

        cy.get('#checkout_info_container > div > form > div.checkout_buttons > a').click();

        // Czy przedmioty nadal znajdują się w koszyku + Sprawdzenie URL czy powróci do koszyka
        cy.get('#shopping_cart_container > a > span').should('have.text', '2');
        cy.url().should('include', '/cart');

        

    });


        it('T020 - Przycisk cancel po wypełnieniu danych adresowych', () => {
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

        // Wstaw przedmioty do koszyka
        cy.get('#inventory_container > div > div:nth-child(1) > div.pricebar > button').click();
        cy.get('#inventory_container > div > div:nth-child(2) > div.pricebar > button').click();

        // Sprawdź czy przedmiot został prawidłowo dodany

        cy.get('#shopping_cart_container > a > span').should('have.text', '2');

        // Przejdź do koszyka
        cy.get('#shopping_cart_container > a > svg > path').click();

        // Naciśnij przycisk checkout
        cy.get('#cart_contents_container > div > div.cart_footer > a.btn_action.checkout_button').click();

        // Sprawdzenie czy jesteś na pierwszym etapie zakupu (checkout-step-one)
        cy.url().should('include', '/checkout-step-one');

        // Uzupełnij FirstName,LastName,Zip/Postal code i kliknij cancel

        cy.get('#first-name').type('Adam');
        cy.get('#last-name').type('Grabowski');
        cy.get('#postal-code').type('00-002');

        cy.get('#checkout_info_container > div > form > div.checkout_buttons > a').click();

        // Czy przedmioty nadal znajdują się w koszyku + Sprawdzenie URL czy powróci do koszyka
        cy.get('#shopping_cart_container > a > span').should('have.text', '2');
        cy.url().should('include', '/cart');

        

    });

    it('T021 - Status koszyka zostaje zapamiętany po wylogowaniu', () => {
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

        // Wstaw przedmioty do koszyka
        cy.get('#inventory_container > div > div:nth-child(1) > div.pricebar > button').click();
        cy.get('#inventory_container > div > div:nth-child(2) > div.pricebar > button').click();

        // Sprawdź czy przedmiot został prawidłowo dodany

        cy.get('#shopping_cart_container > a > span').should('have.text', '2');

        // Przejdź do koszyka
        cy.get('#shopping_cart_container > a > svg > path').click();

        // Przejdź do menu i naciśnij Logout
        cy.get('#menu_button_container > div > div:nth-child(3) > div > button').click();
        cy.get('#logout_sidebar_link').click();

        // Sprawdź czy prawidłowo przekeiruje na ekran logowania
        cy.url().should('include', '/index');        

        // Wprowadź dane logowania i naciśnij przycisk
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');

        cy.get('#login-button').click();

        // Sprawdź czy po logowaniu (2) przedmioty nadal znajdują się w koszyku + Czy po zalogowaniu znajduje się na ekranie inwentarza

        cy.get('#shopping_cart_container > a > span').should('have.text', '2');
        cy.url().should('include', '/inventory');  
        


        // Zaloguj się ponownie



        // Czy przedmioty nadal znajdują się w koszyku + Sprawdzenie URL czy powróci do koszyka
        cy.get('#shopping_cart_container > a > span').should('have.text', '2');
        cy.url().should('include', '/inventory');

        

    });



});
