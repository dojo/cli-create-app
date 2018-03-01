# cli-create-app

[![Build Status](https://travis-ci.org/dojo/cli-create-app.svg?branch=master)](https://travis-ci.org/dojo/cli-create-app)
[![Build status](https://ci.appveyor.com/api/projects/status/ap88vuv8xsuelowm/branch/master?svg=true)](https://ci.appveyor.com/project/Dojo/cli-create-app/branch/master)
[![codecov](https://codecov.io/gh/dojo/cli-create-app/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/cli-create-app)
[![npm version](https://badge.fury.io/js/%40dojo%2Fcli-create-app.svg)](https://badge.fury.io/js/%40dojo%2Fcli-create-app)

The `create app` command for [`@dojo/cli`](https://github.com/dojo/cli).

- [Usage](#usage)
- [Features](#features)
- [How do I contribute?](#how-do-i-contribute)
  - [Code Style](#code-style)
  - [Installation](#installation)
  - [Testing](#testing)
- [Licensing information](#licensing-information)

## Usage

To use `@dojo/cli-create-app`, install the project globally along side `dojo cli`:

```bash
npm install -g @dojo/cli-create-app
```

Run using:

```bash
dojo create [app] --name <appName>
```

## Features

`@dojo/cli-create-app` generates a skeleton project structure for Dojo 2 into a directory using the the `--name` argument provided.

All the dependencies are pre-installed using `npm` including two `@dojo/cli` commands; [`@dojo/cli-build-app`](https://github.com/dojo/cli-build-app) and [`@dojo/cli-test-intern`](https://github.com/dojo/cli-test-intern).

To start using the application, `cd` into the directory and run `dojo build --mode dev --watch memory --serve` which will build and serve the application on port `9999`. Open [http://localhost:9999](http://localhost:9999) in a modern browser (Chrome, FF, Safari, IE11 or Edge) to run the application.

To build the tests, run `dojo build --mode test`. This will output to `output/test`.

When ready to create a production build run `dojo build`, the output will be available in the `output/dist` directory.

## How do I contribute?

We appreciate your interest!  Please see the [Dojo 2 Meta Repository](https://github.com/dojo/meta#readme) for the
Contributing Guidelines.

### Code Style

This repository uses [`prettier`](https://prettier.io/) for code styling rules and formatting. A pre-commit hook is installed automatically and configured to run `prettier` against all staged files as per the configuration in the projects `package.json`.

An additional npm script to run `prettier` (with write set to `true`) against all `src` and `test` project files is available by running:

```bash
npm run prettier
```

### Installation

To start working with this package, clone the repository and run `npm install`.

In order to build the project run `grunt dev` or `grunt dist`.

### Testing

Test cases MUST be written using [Intern](https://theintern.github.io) using the Object test interface and Assert assertion interface.

90% branch coverage MUST be provided for all code submitted to this repository, as reported by istanbul’s combined coverage results for all supported platforms.

To test locally run:

`grunt test`

## Licensing information

© 2017 [JS Foundation](https://js.foundation/). [New BSD](http://opensource.org/licenses/BSD-3-Clause) license.
