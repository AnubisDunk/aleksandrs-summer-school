const { defineConfig } = require('cypress');

module.exports = defineConfig({
    reporter: 'mochawesome',
    reporterOptions : {
        overwrite:false,
    },
    env: {
        username: process.env.EMAIL,
        password: process.env.PASSWORD,
    },
    e2e: {
        viewportWidth: 1920,
        viewportHeight: 1080,
        trashAssetsBeforeRuns : true,
        baseUrl: 'https://coe-webstore.tdlbox.com',
        setupNodeEvents(on, config) {},
    },
});
