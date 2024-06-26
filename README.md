# KhulnaSoft OpenAPI Parser

[![CI](https://github.com/khulnasoft/openapi-parser/actions/workflows/ci.yml/badge.svg)](https://github.com/khulnasoft/openapi-parser/actions/workflows/ci.yml)
[![Release](https://github.com/khulnasoft/openapi-parser/actions/workflows/release.yml/badge.svg)](https://github.com/khulnasoft/openapi-parser/actions/workflows/release.yml)
[![Contributors](https://img.shields.io/github/contributors/khulnasoft/openapi-parser)](https://github.com/khulnasoft/openapi-parser/graphs/contributors)
[![GitHub License](https://img.shields.io/github/license/khulnasoft/openapi-parser)](https://github.com/khulnasoft/openapi-parser/blob/main/LICENSE)
[![Discord](https://img.shields.io/discord/1135330207960678410?style=flat&color=5865F2)](https://discord.gg/8HeZcRGPFS)

⚠️ This package is in early development. Don’t use it in production (yet).

Modern OpenAPI parser written in TypeScript with support for OpenAPI 3.1, OpenAPI 3.0 and Swagger 2.0.

## Goals

- [x] Written in TypeScript
- [x] Runs in Node.js and in the browser (without any polyfills or configuration)
- [x] Tested with hundreds of real world examples
- [ ] Amazing error output
- [ ] Support for OpenAPI 4.0 👀

## Limitations

References are hard and the following features aren’t implemented yet (but will be in the future):

- references inside inside referenced files (recursion, yay)
- circular references in referenced files (recursion inside recursion, yay)
- URLs (low priority though)

## Installation

```
npm add @readyapi/openapi-parser
```

## Usage

### Validate

```ts
import { validate } from '@readyapi/openapi-parser'

const file = `{
  "openapi": "3.1.0",
  "info": {
    "title": "Hello World",
    "version": "1.0.0"
  },
  "paths": {}
}`

const result = await validate(file)

console.log(result.valid)

if (!result.valid) {
  console.log(result.errors)
}
```

### Resolve references

```ts
import { resolve } from '@readyapi/openapi-parser'

const file = `{
  "openapi": "3.1.0",
  "info": {
    "title": "Hello World",
    "version": "1.0.0"
  },
  "paths": {}
}`

const result = await resolve(file)
```

## Upgrade your OpenAPI specification

There’s an `upgrade` command to upgrade all your OpenAPI specifications to the latest OpenAPI version.

> ⚠️ Currently, only an upgrade from OpenAPI 3.0 to OpenAPI 3.1 is supported. Swagger 2.0 is not supported (yet).

```ts
const specification = openapi()
  .load({
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
    paths: {},
  })
  .upgrade()
  .get()
```

## Community

We are API nerds. You too? Let’s chat on Discord: <https://discord.gg/8HeZcRGPFS>

## Thank you!

Thanks a ton for all the help and inspiration:

- [@philsturgeon](https://github.com/philsturgeon) to make sure we build something we won’t hate.
- We took a lot of inspiration from [@seriousme]https://github.com/seriousme and his package [openapi-schema-validator](https://github.com/seriousme/openapi-schema-validator) early-on.
- You could consider this package the modern successor of [@apidevtools/swagger-parser](https://github.com/APIDevTools/swagger-parser), we even test against it to make sure we’re getting the same results (where intended).
- We stole a lot of example specification from [@mermade](https://github.com/mermade) to test against.

## Contributors

<!-- readme: collaborators,contributors -start -->
<table>
<tr>
    <td align="center">
        <a href="https://github.com/FortiShield">
            <img src="https://avatars.githubusercontent.com/u/161459699?v=4" width="100;" alt="FortiShield"/>
            <br />
            <sub><b>FortiShield</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/NxPKG">
            <img src="https://avatars.githubusercontent.com/u/116948796?v=4" width="100;" alt="NxPKG"/>
            <br />
            <sub><b>NxPKG</b></sub>
        </a>
    </td></tr>
</table>
<!-- readme: collaborators,contributors -end -->

Contributions are welcome! Read [`CONTRIBUTING`](https://github.com/khulnasoft/openapi-parser/blob/main/CONTRIBUTING).

## License

The source code in this repository is licensed under [MIT](https://github.com/khulnasoft/openapi-parser/blob/main/LICENSE).
