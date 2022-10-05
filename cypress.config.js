const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'byp2ay',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
