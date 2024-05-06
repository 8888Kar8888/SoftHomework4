import HomePage from "../POM/HomePage/HomePage";
import { expect } from "chai";
import { homePageLocators } from "../POM/HomePage/HomePageLocators";
import { FailureMessage } from "../POM/HomePage/HomePageAssertions";

describe('Login Test', () => {
    beforeEach(() => {
        // Visits the base URL set in cypress.json
        cy.visit('/');
    });

    it('Testing Login', () => {
        // Click on the Account Button using the HomePage method
        HomePage.clickAccountButton();

        // Enter username and password
        HomePage.enterUsername('your_username');
        HomePage.enterPassword('your_password');

        // Click the login button
        HomePage.clickLoginButton();

        // Get the text of the error message and verify it
        cy.xpath(homePageLocators.LOGIN_ERROR_MESSAGE)
            .invoke('text')
            .then((actualErrorMessage) => {
                try {
                    expect(actualErrorMessage).to.include(FailureMessage);
                } catch (error) {
                    // Handle error if the error message is not found or does not match the expected message
                    cy.log('Failed to find or verify the error message');
                    throw error;
                }
            });
    });
});
