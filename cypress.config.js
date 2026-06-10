const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: 'https://the-internet.herokuapp.com',

    retries: {
      runMode: 0,   // cypress run
      openMode: 0   // cypress open
    },

    env: {
      username: 'admin',
      password: 'admin'
    }
  }
});
