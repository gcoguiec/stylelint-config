<h1 align="center">@gcoguiec/stylelint-config</h1>
<br>

<p align="center">
  <a href="https://www.npmjs.com/package/@gcoguiec/stylelint-config">
    <img src="https://img.shields.io/github/package-json/v/gcoguiec/stylelint-config?filename=package.json&style=flat-square" alt="Version"/>
  </a>
  <a href="https://github.com/gcoguiec/stylelint-config/actions/workflows/ci.yml">
    <img src="https://img.shields.io/github/actions/workflow/status/gcoguiec/stylelint-config/ci.yml?branch=main&label=ci&style=flat-square" alt="CI Status"/>
  </a>
  <a href="https://github.com/gcoguiec/stylelint-config/blob/main/LICENSE.md">
    <img src="https://img.shields.io/github/license/gcoguiec/stylelint-config?style=flat-square&label=License"
         alt="License"/>
  </a>
</p>

<hr>

## Table of Contents

- [Getting Started](#getting-started)
- [License](#license)

## Getting Started

### Install

```bash
pnpm add -D stylelint stylelint-order stylelint-scss stylelint-prettier @gcoguiec/stylelint-config
```

### Configure

Add a `stylelint.config.cjs` file at the project root with the following configuration:

```js
// stylelint.config.cjs
module.exports = {
  root: true,
  extends: ['@gcoguiec/stylelint-config/index.cjs']
};
```

### (Optional) Add scripts to your `package.json` file

```json
{
  "scripts": {
    "lint:scss": "stylelint \"**/*.scss\"",
    "lint:scss:fix": "pnpm lint:scss --fix"
  }
}
```

**Note:** you can replace `pnpm` by your favorite package manager instead.

### (Optional) Add the tasks to your `justfile`

```just
lint-scss *args:
  pnpm stylelint "**/*.scss" {{args}}

lint-scss-fix:
  @just lint-scss --fix
```

## License

This project is licensed under [BSD 2-Clause](https://spdx.org/licenses/BSD-2-Clause.html).
