const LoginPage = require('../pageobjects/login.page');
const credentials = require('../data/credentials');

describe('Login Tests for the SauceDemo', () => {

    beforeEach(async () => {
        await LoginPage.open();
    });

    it('UC-1: should show error for empty credentials', async () => {
        await LoginPage.inputUsername.setValue('a');
        await LoginPage.inputPassword.setValue('a');

        await LoginPage.inputUsername.click();
        await browser.keys('Backspace');

        await LoginPage.inputPassword.click();
        await browser.keys('Backspace');

        const usernameValue = await LoginPage.inputUsername.getValue();
        const passwordValue = await LoginPage.inputPassword.getValue();
        expect(usernameValue).toBe('');
        expect(passwordValue).toBe('');

        await LoginPage.btnLogin.click();

        const error = await LoginPage.getErrorMessage();
        expect(error).toContain('Username is required');
    });

    it('UC-2: should show error when password is missing', async () => {
        const user = credentials.validUsers[0];
        await LoginPage.inputUsername.setValue(user.username);
        await LoginPage.inputPassword.setValue(user.password);

        await LoginPage.inputPassword.click();
        const passwordValue = await LoginPage.inputPassword.getValue();
        for (let i = 0; i < passwordValue.length; i++) {
            await browser.keys('Backspace');
        }

        const clearPassword = await LoginPage.inputPassword.getValue();
        expect(clearPassword).toBe('');
        
        await LoginPage.btnLogin.click();

        const error = await LoginPage.getErrorMessage();
        expect(error).toContain('Password is required');
    });

    credentials.validUsers.forEach((user) => {
        it(`UC-3: should login successfully with valid user: ${user.username}`, async () => {
            await LoginPage.login(user.username, user.password);
            await expect(browser).toHaveTitle('Swag Labs');
        });
    });

    it('UC-4: should show error when using a locked out user', async () => {
        const user = credentials.invalidUser;
        await LoginPage.inputUsername.setValue(user.username);
        await LoginPage.inputPassword.setValue(user.password);

        await LoginPage.btnLogin.click();

        const error = await LoginPage.getErrorMessage();
        expect(error).toContain('Sorry, this user has been locked out.');
    });
});
