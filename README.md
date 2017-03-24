# cli-create-app

[![Build Status](https://travis-ci.org/dojo/cli-create-app.svg?branch=master)](https://travis-ci.org/dojo/cli-create-app)
[![codecov](https://codecov.io/gh/dojo/cli-create-app/branch/master/graph/badge.svg)](https://codecov.io/gh/dojo/cli-create-app)
[![npm version](https://badge.fury.io/js/%40dojo%2Fcli-create-app.svg)](https://badge.fury.io/js/%40dojo%2Fcli-create-app)

The `create app` command for the `dojo cli`.

**WARNING** This is _beta_ software. While we do not anticipate significant changes to the API at this stage, we may feel the need to do so. This is not yet production ready, so you should use at your own risk.

- [Usage](#usage)
- [Features](#features)
- [How do I contribute?](#how-do-i-contribute)
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
dojo create [app] -name <appName>
```

## Features

Will create a new app folder and scaffold an app within it.

## How do I contribute?

We appreciate your interest!  Please see the [Dojo 2 Meta Repository](https://github.com/dojo/meta#readme) for the
Contributing Guidelines and Style Guide.

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
