const { defineConfig } = require("cypress");

module.exports = defineConfig({
    env: {
        username: "joe@doe.com",
        password: "joedoe",
    },
    e2e: {
        baseUrl: "https://coe-webstore.tdlbox.com/us/sign-in/",
        setupNodeEvents(on, config) {},
    },
});
