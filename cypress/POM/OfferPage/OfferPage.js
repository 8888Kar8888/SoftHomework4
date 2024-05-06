// Import necessary dependencies or locators if needed

import {offerPageLocators as OfferPageLocators} from "./OfferPageLocators"; // Import Locators object or variables

class OfferPage {
    constructor() {
        // Initialize any variables here
    }

    OrderingCake() {
        this.selectQuantityOfMembers();
        this.selectCakeOptions();
        this.enterColor("#E40707");
        this.enterName("Vaxtag");
        this.enterPhone("+37441758467");
        this.enterNote("Please Complete My Offer as soon as possible");
        this.submitOffer();
    }

    selectQuantityOfMembers() {
        cy.get(OfferPageLocators.QUANTITY_OF_MEMBERS_BUTTON).select('30-35 անձի համար');
    }

    // selectQuantityOfMembers() {
    //     cy.get(OfferPageLocators.QUANTITY_OF_MEMBERS_BUTTON).click();
    //     cy.xpath(OfferPageLocators.PERSONS_QUANTITY_30to35_OPTION).click();
    // }


    selectCakeOptions() {
        cy.xpath(OfferPageLocators.THREE_FLOOR_CAKE_OPTION).click();
        cy.xpath(OfferPageLocators.CHOCOLATE_OPTION_BISQUIT).click();
        cy.xpath(OfferPageLocators.CHOCOLATE_OPTION_CREME).click();
        cy.xpath(OfferPageLocators.CAKE_NUCLEUS).click();
    }

    enterColor(colorCode) {
        cy.get(OfferPageLocators.CAKE_COLOR_FIELD).clear().type(colorCode);
    }

    enterName(name) {
        cy.xpath(OfferPageLocators.SPECIAL_OFFER_NAME_FIELD).clear().type(name);
    }

    enterPhone(phone) {
        cy.xpath(OfferPageLocators.SPECIAL_OFFER_PHONE_FIELD).clear().type(phone);
    }

    enterNote(note) {
        cy.xpath(OfferPageLocators.SPECIAL_OFFER_NOTE_FIELD).clear().type(note);
    }

    submitOffer() {
        cy.xpath(OfferPageLocators.SPECIAL_OFFER_SUBMIT_BUTTON).click();
    }

    isSuccessMessageDisplayed() {
        cy.wait(5000); // Wait for 5 seconds (adjust the duration as needed)
        cy.xpath(OfferPageLocators.SUCCESS_MESSAGE).should('be.visible');
    }


    getSuccessMessageText() {
        return cy.xpath(OfferPageLocators.SUCCESS_MESSAGE)
            .invoke('text')
            .then((text) => {
                return text.trim();
            });
    }

}

export default OfferPage;
