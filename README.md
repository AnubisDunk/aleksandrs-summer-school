[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Automated tests for webstore

This project contains automated tests using [Cypress](https://www.cypress.io/), a powerful end-to-end testing framework. Cypress makes it easy to write, debug, and run tests for your web applications. The tests are designed to ensure that the web application behaves as expected and to catch any regressions early in the development process.

## Project setup

### Prerequisites

This project requires NodeJS and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```bash
npm -v && node -v
10.8.1
v22.3.0
```

### Installation

Start with cloning this repo on your local machine:

```bash
git clone https://github.com/AnubisDunk/aleksandrs-summer-school.git
```

To install and set up the library, run:

```bash
npm install
```

Setup test user _credentials_

Create `cypress.env.json` in project directory and put inside this code:

```json
{
    "EMAIL": "joe@doe.com",
    "PASSWORD": "joedoe"
}
```

## Usage

To run **all** tests in headless mode, use:

```bash
npm run cypress-run
```

To run **all** tests in Cypress Test Runner, use:

```bash
npm run cypress-open
```

To run e2e tests in headless mode, use:

```bash
npm run cypress-run-e2e
```

To run multilanguage tests in headless mode, use:

```bash
npm run cypress-run-multilang
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Authors

> Aleksandrs Baranovskis

[Website](https://anubisdunk.com/cv)

[Github](https://github.com/AnubisDunk)

## License

[MIT](https://choosealicense.com/licenses/mit/)
