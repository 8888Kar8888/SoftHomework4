import HomePage from "../POM/HomePage/HomePage";
import OfferPage from "../POM/OfferPage/OfferPage";
import { offerPageAssertionMessage } from "../POM/OfferPage/OfferPageAssertions";

import { expect } from "chai";
import {offerPageLocators as OfferPageLocators} from "../POM/OfferPage/OfferPageLocators";

describe('Special Offer Test', () => {
  beforeEach(() => {
    // Visits the base URL set in cypress.json
    cy.visit('/');
  });

  it('Testing Special Offer', () => {
    // Click on the organic mascara button
    HomePage.click_ORGANIC_MASCARA_2();

    // Click on the offer button and navigate to the offer page
    HomePage.clickOfferButton();

    // Create an instance of OfferPage
    const offerPage = new OfferPage();

    // Order the cake on the offer page
    offerPage.OrderingCake();
      offerPage.isSuccessMessageDisplayed();

      // Get the text of the success message
      offerPage.getSuccessMessageText().then((messageText) => {
          console.log("Success Message: " + messageText);
          // Check if the success message is not empty
          expect(messageText).to.not.be.empty;
          // Check if the success message matches the expected message from the OfferPageAssertionClass
          expect(messageText).to.equal(offerPageAssertionMessage);
      }, (error) => {
          // Handle any errors during the above commands
          cy.log("Error occurred: " + error.message);
          // Fail the test
          expect.fail("Success message does not match expected message: " + offerPageAssertionMessage);
      });
  });
  //     offerPage.isSuccessMessageDisplayed();
  //
  //     offerPage.getSuccessMessageText().then((messageText) => {
  //         console.log("Success Message: " + messageText);
  //
  //         expect(messageText).to.not.be.empty;
  //     });
  //
  //     Cypress.on('uncaught:exception', (err, runnable) => {
  //         cy.log("Error occurred: " + err.message);
  //         expect.fail("Success message not displayed after submitting the special offer form.");
  //         return false;
  //     });
  });

