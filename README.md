# basic-logger

Basic logger for JavaScript.

## Installation

```sh
npm i -s @allnulled/basic-logger
```

## Usage

### In node.js

```js
const Logger = require("@allnulled/basic-logger");
const logger = Logger.create("GENERAL");

logger.trace("Method", ["arguments"]);
logger.debug("Some debug text");
logger.log("Some log text");
```

### In browser

```js
const Logger = window.BasicLogger;
```

# basic-logger
