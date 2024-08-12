[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Automated tests for [webstore](https://coe-webstore.tdlbox.com/)

The Automated tests for the web store aims to ensure the functionality, performance, and security of the web store application.
This project contains automated tests using [Cypress](https://www.cypress.io/), a powerful end-to-end testing framework. Cypress makes it easy to write, debug, and run tests for your web applications. The tests are designed to ensure that the web application behaves as expected and to catch any regressions early in the development process.

Test cases are based on my [test plan](https://tdlschool.atlassian.net/browse/TSS22N-260?atlOrigin=eyJpIjoiM2FmMTIxODA3MmU4NDQ1MjkyNTg1NTA5NDM1MzA5ODAiLCJwIjoiaiJ9)

## Table of Contents

-   [Description](#automated-tests-for-webstore)
-   [Project setup](#project-setup)
    -   [Prerequisites](#prerequisites)
    -   [Instalation](#installation)
-   [Usage](#usage)
-   [Contributing](#contributing)
-   [Authors](#authors)

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

Start with cloning this repo on your local machine and installing the dependencies:

```bash
git clone https://github.com/AnubisDunk/aleksandrs-summer-school.git
```

```bash
npm install
```

Setup test user _credentials_

Create `cypress.env.json` in the project directory and put inside this code:

```json
{
    "EMAIL": "joe@doe.com",
    "PASSWORD": "joedoe"
}
```

## Usage

### Run tests

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

To run Multi-Language tests in headless mode, use:

```bash
npm run cypress-run-multilang
```

### Useful commands

To remove reports after test execution, use:

```bash
npm run reports-cleanup
```

To format code, use:

```bash
npm run format
```

After all test executions reports are generated in `mochawesome-report` directory.

### Dependencies

-   [Cypress](https://www.npmjs.com/package/cypress) is a powerful end-to-end testing framework

-   [cypress-if](https://www.npmjs.com/package/cypress-if) adds if-else logic for Cypress tests

-   [prettier](https://www.npmjs.com/package/prettier) is an opinionated code formatter

-   [languagedetect](https://www.npmjs.com/package/languagedetect) package is used for Multi-Language test cases for Latvian language detection

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Authors

> Aleksandrs Baranovskis

[Website](https://anubisdunk.com/cv)

[Github](https://github.com/AnubisDunk)

## License

[MIT](https://choosealicense.com/licenses/mit/) :D
