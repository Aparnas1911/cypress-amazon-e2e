const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
env: {
    AMAZON_EMAIL: "aparnasanthosh1119@gmail.com",
    AMAZON_PASSWORD: "Kausthubham123$"
  }

  },
});
