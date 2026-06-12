const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: true,
    html: true,
    json: true
  },

  e2e: {
    baseUrl: "https://the-internet.herokuapp.com",

    retries: {
      runMode: 0,
      openMode: 0
    },

    setupNodeEvents(on, config) {
    },
  },
});
