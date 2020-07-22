# Robintrack API Utilities

🧰 A collection of utilities for building datasets and interacting with the
Robintrack API.

## Usage

Module:

```sh
npm i -S robintrack-api-utilities
```

In your app:

```js

const {
  downloadLatestLeaderboard,
  generateSymbolsFile,
  generateSymbolsJSON
} = require('robintrack-api-utilities')

const { data } = await generateSymbolsJSON()
console.dir(data) // ['A','AA','AAAU'...]
```

CLI:

```sh
npm run build -- generate
```

Generates a JSON file of all ticker symbols on Robintrack and
 writes it to the `json` directory.

## Tests

```sh
npm i -D
npm test
```

## LICENSE

MIT
