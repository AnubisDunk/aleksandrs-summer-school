[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
# Automated tests for webstore

This project contains automated tests using [Cypress](https://www.cypress.io/), a powerful end-to-end testing framework. Cypress makes it easy to write, debug, and run tests for your web applications.

## Prerequisites

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
10.8.1
v22.3.0
```

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

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

To run tests use: 
``` bash
npm run cypress-run
```

To run tests in browser instance use (with UI) use: 
``` bash
npm run cypress-open
```
## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)