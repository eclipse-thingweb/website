````markdown
# Eclipse Thingweb Node-wot

![Thingweb Node-wot Logo](URL_TO_LOGO)

A fast and extensible framework to connect any device with your application.

### Default CI Pipeline | [npm](https://npmjs.com) | [Codecov](https://codecov.io) | [Telegram Group](https://t.me) | [Discord](https://discord.com) | Static Badge

The Eclipse Thingweb node-wot is a framework for implementing Web of Things servers and clients in Node.js. It is written from the ground up with TypeScript with the goal of providing a fast and extensible framework for IoT applications. Node-wot enables developers to create complex business logic without worrying about protocols and low-level details, leveraging a standard metadata format called Thing Description (TD).

---

## Web of Things Principles in a Nutshell

The Web of Things (WoT) tackles IoT fragmentation by extending standardized web technologies. It simplifies IoT application development, promoting flexibility and interoperability, while preserving existing IoT standards. WoT offers an adaptable, abstract architecture based on real-world use cases across domains.

The **Thing Description (TD)** is a JSON-LD document that describes a Thing and its capabilities, including network services (APIs), interactions, and security requirements. TD is the cornerstone of the Web of Things architecture and node-wot uses it to implement its functionalities.

### WoT Capabilities:

- ⚙️ **Properties**: Values that can be read, written, or observed (e.g., a temperature sensor with a current temperature property).
- 🦾 **Actions**: Operations that can be invoked (e.g., turning a light bulb on or off).
- ⚡ **Events**: Notifications triggered by events (e.g., motion detection by a sensor).

For more details, visit the [official W3C Web of Things website](https://www.w3.org/WoT/).

---

## Table of Contents

- [Installation](#installation)
  - [As a Library](#as-a-library)
  - [Node.js](#nodejs)
  - [Browser](#browser)
  - [CLI Tool](#as-a-cli-tool)
  - [Docker Image](#as-a-docker-image)
- [Examples](#examples)
- [Implemented/Supported Features](#implemented-supported-features)
- [Documentation](#documentation)
  - [The API](#the-api)
  - [TD Tooling](#td-tooling)
  - [Logging](#logging)
  - [Install new/different versions of Node.js](#install-newdifferent-versions-of-nodejs)
  - [Contributing](#contributing)
  - [License](#license)

---

## Installation

The framework can be used as a **library** or as a **CLI tool**. Below are the installation methods for each.

### As a Library

The core package is `@node-wot/core`, which is mandatory. Other packages are bindings for different protocols.

#### Node.js

**Warning**: Node.js version 16 and lower are no longer supported.

- Node.js version 18+
- npm version 9+

**Linux**: Install node-gyp requirements:

- Python v3.6, v3.7, or v3.8
- Make
- A C/C++ compiler toolchain (e.g., GCC)

**Windows**: Install Windows build tools:

```bash
npm install -g --production windows-build-tools
```
````

**MacOS**: Install node-gyp tools:

```bash
xcode-select --install
```

To install node-wot for Node.js:

```bash
npm i @node-wot/core @node-wot/binding-http --save
```

#### Browser

To use node-wot in the browser, install the browser bundle:

```bash
npm i @node-wot/browser-bundle --save
```

---

### As a CLI Tool

You can also use node-wot via its command line interface (CLI). More details are available in the [CLI tool's Readme](https://github.com/eclipse-thingweb/node-wot).

### As a Docker Image

To use node-wot inside a Docker container:

1. Clone the repository:
   ```bash
   git clone https://github.com/eclipse-thingweb/node-wot
   ```
2. Build the Docker image:
   ```bash
   npm run build:docker
   ```
3. Run the container:
   ```bash
   docker run --rm wot-servient -h
   ```

---

## Examples

With node-wot, you can either **expose** a Thing (server-side) or **consume** a Thing (client-side). Below is an example of how to create and expose a counter Thing and how to consume it.

#### Expose a Thing (Server-Side)

```javascript
const { Servient } = require("@node-wot/core");
const { HttpServer } = require("@node-wot/binding-http");

const servient = new Servient();
servient.addServer(new HttpServer());

servient.start().then(async (WoT) => {
  let count = 0;
  const exposingThing = await WoT.produce({
    title: "Counter",
    description: "A simple counter thing",
    properties: {
      count: {
        type: "integer",
        description: "current counter value",
        observable: true,
        readOnly: true,
      },
    },
    actions: {
      increment: {
        description: "increment counter value",
      },
    },
  });
  exposingThing.setPropertyReadHandler("count", () => {
    return count;
  });
  exposingThing.setActionHandler("increment", () => {
    count++;
    exposingThing.emitPropertyChange("count");
  });
  await exposingThing.expose();
});
```

#### Consume a Thing (Client-Side)

```javascript
const { Servient } = require("@node-wot/core");
const { HttpClientFactory } = require("@node-wot/binding-http");

const servient = new Servient();
servient.addClientFactory(new HttpClientFactory(null));

servient
  .start()
  .then(async (WoT) => {
    const td = await WoT.requestThingDescription(
      "http://localhost:8080/counter"
    );
    let thing = await WoT.consume(td);
    thing.observeProperty("count", async (data) => {
      console.log("count:", await data.value());
    });
    for (let i = 0; i < 5; i++) {
      await thing.invokeAction("increment");
    }
  })
  .catch((err) => {
    console.error(err);
  });
```

For more examples, visit the [Examples Folder](https://github.com/eclipse-thingweb/node-wot).

---

## Implemented/Supported Features

### Protocol Support

- HTTP ✔️
- HTTPS ✔️
- CoAP ✔️
- CoAPS ✔️
- MQTT ✔️
- WebSocket ➕ (Server only)
- OPC-UA ➕ (Client only)
- Modbus ➕ (Client only)

### MediaType Support

- JSON ✔️
- Text (HTML, CSS, XML, SVG) ✔️
- Base64 (PNG, JPEG, GIF) ✔️
- CBOR ✔️

---

## Documentation

The WoT Scripting API is available for interaction with Things and includes a detailed guide for implementing your own codecs.

For further reading, check out the [API Documentation](https://github.com/eclipse-thingweb/node-wot).

---

## License

Distributed under the Eclipse Public License - v 2.0. See LICENSE for more information.

```

### Key Elements in the Markdown:
- **Logo**: Replace the `URL_TO_LOGO` with the actual image URL.
- **Links**: I included placeholders for npm, Codecov, Telegram, and Discord links. Replace these with the actual URLs.
- **Installation Instructions**: Detailed for both library use and CLI tool usage.
- **Examples**: Server-side and client-side code examples for exposing and consuming a Thing.
- **Features**: Protocol and media type support.
- **Documentation**: Links to API documentation and license information.

This markdown provides an organized, readable format for understanding the core functionality and installation process of Thingweb Node-wot.
```
