// Import necessary dependencies or locators if needed

import {homePageLocators} from "./HomePageLocators";

class HomePage {
    click_ORGANIC_MASCARA_2() {
        cy.xpath(homePageLocators.organicMascara2).click();
    }

    clickOfferButton() {
        cy.get('#slider-4-slide-10-layer-9').click(); // Example usage, you can perform any action you need
    }

     clickAccountButton() {
        cy.xpath(homePageLocators.accountButton).click();
    }

     enterUsername(username) {
        cy.get(homePageLocators.usernameField).type(username);
    }

     enterPassword(password) {
        cy.get(homePageLocators.passwordField).type(password);
    }

     clickLoginButton() {
        cy.xpath(homePageLocators.loginButton).click();
    }

}

export default new HomePage();
