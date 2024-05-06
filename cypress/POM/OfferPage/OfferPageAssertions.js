export const offerPageAssertionMessage = "Thank you for your message. It has been sent.";

Cypress.on('uncaught:exception', (err, runnable) => {
    // Log the error
    cy.log("Error occurred: " + err.message);
    // Fail the test
    expect.fail("Success message does not match expected message: " + offerPageAssertionMessage);
    // Return false to prevent the error from failing the test
    return false;
});
