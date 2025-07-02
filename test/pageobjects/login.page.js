const Page = require('./page');

class LoginPage extends Page {
    get inputUsername() { return $("//input[@data-test='username']"); }
    get inputPassword() { return $("//input[@data-test='password']"); }
    get btnLogin() { return $("//input[@data-test='login-button']"); }
    get errorMsg() { return $("//h3[@data-test='error']"); }

    async open() {
        await browser.url('/');
    }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    async clearInputs() {
        await this.inputUsername.clearValue();
        await this.inputPassword.clearValue();
    }

    async getErrorMessage() {
        const errorElement = await $('//h3[@data-test="error"]');
        await errorElement.waitForDisplayed({ timeout: 8000 }); // espera hasta que el mensaje aparezca
        return errorElement.getText();
    }
}

module.exports = new LoginPage();
