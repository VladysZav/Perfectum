export  class AuthenticationPage{
    navigate= () => cy.visit("https://demo875308.perfectum.info/admin");
    verifyAuthenticationPage= () => {
        cy.url().should('eq', 'https://demo875308.perfectum.info/admin/authentication');
        cy.get('img[alt="Perfectum CRM - Demo"]').should('be.visible');
    }; 
    verifyMainPage= () => {
        cy.url().should('eq', 'https://demo875308.perfectum.info/admin');
        cy.get('img[alt="Perfectum CRM - Demo"]').should('be.visible');
    };
    enterInvalidEmail= () => {
        cy.get('input[id="emailaddress"]').click();
        cy.get('input[id="emailaddress"]').clear().type('test');
    };
    enterInvalidPassword= () => {
        cy.get('input[id="password"]').click();
        cy.get('input[id="password"]').clear().type('test');
    };
    enterValidEmail= () => {
        cy.get('input[id="emailaddress"]').click();
        cy.get('input[id="emailaddress"]').clear().type('demo@perfectum.ua ');
    };
    enterValidPassword= () => {
        cy.get('input[id="password"]').click();
        cy.get('input[id="password"]').clear().type('demo');
    };
    clickSubmitButton= () => cy.get('button[data-callback="onSubmit"]').click();
    verifyAssertMessageWhenEmptyAllFields= () => {
        cy.contains('div[class="alert alert-danger text-center"]', 'Пароль обовʼязкове поле.').should('be.visible');
        cy.contains('div[class="alert alert-danger text-center"]', 'Електронна пошта обовʼязкове поле.').should('be.visible');
    };
    verifyAssertMessageWhenEmptyEmailField= () => {
        cy.contains('div[class="alert alert-danger text-center"]', 'Електронна пошта обовʼязкове поле.').should('be.visible');
    };
    verifyAssertMessageWhenEmptyPasswordField= () => {
        cy.contains('div[class="alert alert-danger text-center"]', 'Пароль обовʼязкове поле.').should('be.visible');
    };
    verifyAssertMessageWhenInvalidEmail= () => {
        cy.contains('div[class="alert alert-danger text-center"]', 'Електронна пошта поле повинно містити коректну адресу електронної пошти.').should('be.visible');
    };
    verifyAssertMessageWhenInvalidPassword= () => {
        cy.get('div[id="alerts"]').should('be.visible');
    };
    verifyAssertMessageWhenInvalidEmailAndPassword= () => {
        this.verifyAssertMessageWhenInvalidEmail();
    };
}