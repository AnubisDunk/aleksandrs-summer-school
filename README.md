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
