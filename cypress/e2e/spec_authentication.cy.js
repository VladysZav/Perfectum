import { AuthenticationPage } from "../pages/authenticationPage.cy"
import { MainPage } from "../pages/mainPage.cy";
const authenticationPage = new AuthenticationPage();
const mainPage = new MainPage();

describe('Authentication page', () => {

	before(() => {
		Cypress.on('uncaught:exception', (err, runnable) => {
			// returning false here prevents Cypress from
			// failing the test if uncaught exceptions from the application appear
			return false;
		});
	});

	beforeEach(() => {
		authenticationPage.navigate();
	});

	it('Log in with empty all fields(negative test case)', () => {
		authenticationPage.verifyAuthenticationPage();
        authenticationPage.clickSubmitButton();
        authenticationPage.verifyAssertMessageWhenEmptyAllFields();
	});
    it('Log in with empty email field(negative test case)', () => {
		authenticationPage.verifyAuthenticationPage();
		authenticationPage.enterValidPassword();
        authenticationPage.clickSubmitButton();
        authenticationPage.verifyAssertMessageWhenEmptyEmailField();
	});
	it('Log in with empty password field(negative test case)', () => {
		authenticationPage.verifyAuthenticationPage();
		authenticationPage.enterInvalidEmail();
        authenticationPage.clickSubmitButton();
        authenticationPage.verifyAssertMessageWhenEmptyPasswordField();
	});
	it('Log in with invalid email and password(negative test case)', () => {
		authenticationPage.verifyAuthenticationPage();
		authenticationPage.enterInvalidEmail();
		authenticationPage.enterInvalidPassword();
        authenticationPage.clickSubmitButton();
        authenticationPage.verifyAssertMessageWhenInvalidEmailAndPassword();
	});
	it('Log in with invalid email(negative test case)', () => {
		authenticationPage.verifyAuthenticationPage();
		authenticationPage.enterInvalidEmail();
		authenticationPage.enterValidPassword();
        authenticationPage.clickSubmitButton();
        authenticationPage.verifyAssertMessageWhenInvalidEmail();
	});
	it('Log in with invalid password(negative test case)', () => {
		authenticationPage.verifyAuthenticationPage();
		authenticationPage.enterValidEmail();
		authenticationPage.enterInvalidPassword();
        authenticationPage.clickSubmitButton();
        authenticationPage.verifyAssertMessageWhenInvalidPassword();
	});
	it.only('Log in with valid credentials(positive test case)', () => {
		authenticationPage.verifyAuthenticationPage();
		authenticationPage.enterValidEmail();
		authenticationPage.enterValidPassword();
        authenticationPage.clickSubmitButton();
        authenticationPage.verifyMainPage();
		mainPage.logOut();
	});
});