const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://marush.am",
    viewportWidth: 1800,
    viewportHeight: 660,
    pageLoadTimeout: 90000,
    setupNodeEvents(on, config) {
      // Example of using setupNodeEvents
      on('before:browser:launch', (browser = {}, launchOptions) => {
        console.log('Launching browser:', browser.name);
        return launchOptions;
      });
    },
  },
});
