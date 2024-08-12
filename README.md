# @zettca/prettier-config

[![NPM Version](https://img.shields.io/npm/v/@zettca/prettier-config)](https://www.npmjs.com/package/@zettca/prettier-config)
[![CI](https://github.com/zettca/prettier-config/actions/workflows/ci.yml/badge.svg)](https://github.com/zettca/prettier-config/actions/workflows/ci.yml)
![License](https://img.shields.io/github/license/zettca/prettier-config)

Minimal Prettier sharable configuration.

This configuration **does not and will never** change Prettier's default
formatting configuration. Prettier's
[default options](https://prettier.io/docs/en/options) are well thought out and
changing them goes against
[Prettier's philosophy](https://prettier.io/docs/en/option-philosophy)

The goal of this config is to extend Prettier's configuration with plugins and
ignore rules typically desirable in apps.

# Installation

```sh
npm i -D @zettca/prettier-config
```

# Usage

Add this to your `package.json`

```json
{
  "prettier": "@zettca/prettier-config"
}
```
