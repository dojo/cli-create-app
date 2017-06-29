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
dojo create [app] --name <appName>
```

## Features

`@dojo/cli-create-app` generates a skeleton project structure for Dojo 2 into a directory using the the `--name` argument provided.

All the dependencies have been pre-installed using `npm` including two `@dojo/cli` commands; [`@dojo/cli-build-webpack`](https://github.com/dojo/cli-build) and [`@dojo/cli-test-intern`](https://github.com/dojo/cli-test-intern).

To start using the application, `cd` into the directory and run `dojo build --watch` which will build and serve the application on port `9999`. Open [http://localhost:9999](http://localhost:9999) in a modern browser (Chrome, FF, Safari, IE11 or Edge) to run the application.

For testing the application run `dojo test`, which will build the application (`src` and `tests`) and run all test in node.

When ready to create a production build run `dojo build`, the output will be available in the `dist` directory.

### Manifest.json

This sample app contains [a web app manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest), `manifest.json`, that allows the app
to be installed on the homescreen of a mobile device if it was built with Service Workers enabled. Service Workers can be enabled by setting the `"serviceWorker"` option in the `.dojorc` config for `build-webpack`.

By default, the manifest will use the images in the images folder as the app's icon if it is installed. These images can and should be replaced
with an appropriate icon for your application.

It also has a `background_color` and `theme_color` in `manifest.json`, which can be updated to match the desired color scheme for your application.

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
