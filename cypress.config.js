const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : "https://www.imdb.com/chart/top/?ref_=nv_mv_250"
  },
});
