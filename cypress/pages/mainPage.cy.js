export  class MainPage{
    logOut= () => {
        cy.get('a[onclick="logout(); return false;"]').click();
    };
}