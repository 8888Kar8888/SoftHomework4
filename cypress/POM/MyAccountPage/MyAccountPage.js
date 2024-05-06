import {myAccountPageLocators as MyAccountPageLocators} from "./MyAccountPageLocators";

class MyAccountPage {
    static getLoginErrorMessageText() {
        return cy.get(MyAccountPageLocators.LOGIN_ERROR_MESSAGE, { timeout: 10000 })
            .should('be.visible')  // Ensure the error message is visible
            .invoke('text');
    }
}

export default MyAccountPage;
