const { defineConfig } = require('cypress');

module.exports = defineConfig({
    reporter: 'mochawesome',
    reporterOptions : {
        overwrite:false,
    },
    env: {
        username: 'joe@doe.com',
        password: 'joedoe',
    },
    e2e: {
        viewportWidth: 1920,
        viewportHeight: 1080,
        trashAssetsBeforeRuns : true,
        baseUrl: 'https://coe-webstore.tdlbox.com',
        setupNodeEvents(on, config) {},
    },
});
