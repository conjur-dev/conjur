# Conjur

https://github.com/conjur-dev/conjur

![GitWorkflow](https://github.com/conjur-dev/conjur/workflows/master/badge.svg)

A front end boilerplate with ReactJS.

## Prerequisites and Installation

Install the following frameworks and packages.

- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

Verify the installation.

```bash
node --version
yarn --version
```

Clone this repository.

```bash
git clone https://github.com/conjur-dev/conjur.git <PROJECT_NAME>
cd <PROJECT_NAME>
yarn install
yarn build
```

This repository is for front end code only, designed to be a submodule for full stack development. For usage please see corresponding installation notes.

- [Conjur-Express](https://github.com/conjur-dev/conjur-express)
- [Conjur-Go](https://github.com/conjur-dev/conjur-go)

## Development

Start a development server for frontend, default listening on port :3000.

```bash
yarn start:dev
```

Running tests.

```bash
yarn test
```

## Production

Create an optimized frontend production build.

```bash
yarn build
```

Serve a static site.

```bash
yarn start
```
