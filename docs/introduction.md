---
# Eclipse Thingweb node-wot
---

# Thingweb Introduction

## Background

The **Eclipse Thingweb node-wot** is a framework for implementing Web of Things (WoT) servers and clients in Node.js. Built from the ground up in TypeScript, it provides a fast, extensible foundation for IoT applications. The framework empowers developers to focus on complex business logic by abstracting protocol and low-level details through a standardized metadata format—the **Thing Description (TD)**. This abstraction, paired with satellite tools, accelerates and simplifies application development.

---

## Web of Things Principles in a Nutshell

The Web of Things (WoT) addresses IoT fragmentation by extending standardized web technologies, simplifying application development, and promoting flexibility and interoperability. WoT builds on existing IoT standards, ensuring reuse, and offers an adaptable, abstract architecture grounded in real-world use cases across domains.

At its core, WoT defines an information model—the **Thing Description (TD)**—a JSON-LD document that describes a Thing’s capabilities, network services (APIs), interactions, and security requirements. The TD is the cornerstone of the WoT architecture and the primary abstraction leveraged by node-wot. Every Thing supports the following affordances:

- ⚙️ **Properties**: Values that can be read, written, or observed (e.g., a temperature sensor’s current reading).
- 🦾 **Actions**: Operations that can be invoked (e.g., turning a light bulb on/off).
- ⚡ **Events**: Notifications triggered by changes (e.g., a motion sensor detecting movement).

For more details, visit the [official W3C Web of Things website](https://www.w3.org/WoT/).

---

## Installation

The node-wot framework can be utilized as a library or a CLI tool. Below are the installation instructions for both approaches.

### As a Library

The framework comprises modular packages, with `@node-wot/core` as the mandatory core package. Additional binding packages enable communication with various protocols.

#### Node.js

> **Warning**: Node.js version 16 and lower are no longer actively supported.

**Requirements**:

- Node.js 18+
- npm 9+

**Platform-Specific Prerequisites**:

- **Linux**: Meet [node-gyp requirements](https://github.com/nodejs/node-gyp#on-unix):
  - Python v3.6, v3.7, or v3.8
  - `make`
  - GCC or equivalent C/C++ compiler
- **Windows**: Install Windows Build Tools via an admin CMD shell:
  ```bash
  npm install -g --production windows-build-tools
  ```
- **Mac OS**: Install Xcode command-line tools:
  ```bash
  xcode-select --install
  ```

To install node-wot in a Node.js application:

```bash
cd your-app-folder
npm install @node-wot/core @node-wot/binding-http --save
```

#### Browser

The browser requires ECMAScript 2015 (ES6) support. For ES5 browsers (e.g., IE11), polyfills may be needed.

Install the browser bundle:

```bash
npm install @node-wot/browser-bundle --save
```

See the [package README](https://github.com/eclipse-thingweb/node-wot/tree/master/packages/browser-bundle) for additional options.

### As a CLI Tool

Node-wot offers a command-line interface (CLI). Refer to the [CLI README](https://github.com/eclipse-thingweb/node-wot/tree/master/packages/cli) for installation details.

### As a Docker Image

Run node-wot in a Docker container (Linux or WSL on Windows recommended):

1. Clone the repository:
   ```bash
   git clone https://github.com/eclipse-thingweb/node-wot
   cd node-wot
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

Node-wot supports creating **server-side Things** ("exposing a Thing") and **client-side Things** ("consuming a Thing"). Below is an example of a simple counter Thing.

### Exposing a Counter Thing

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
        description: "Current counter value",
        observable: true,
        readOnly: true,
      },
    },
    actions: {
      increment: {
        description: "Increment counter value",
      },
    },
  });
  exposingThing.setPropertyReadHandler("count", () => count);
  exposingThing.setActionHandler("increment", () => {
    count++;
    exposingThing.emitPropertyChange("count");
  });
  await exposingThing.expose();
  console.log("Thing exposed at http://localhost:8080/counter");
});
```

### Consuming the Counter Thing

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
    const thing = await WoT.consume(td);
    thing.observeProperty("count", async (data) => {
      console.log("count:", await data.value());
    });
    for (let i = 0; i < 5; i++) {
      await thing.invokeAction("increment");
    }
  })
  .catch((err) => console.error(err));
```

More examples are available in the [JavaScript examples](https://github.com/eclipse-thingweb/node-wot/tree/master/examples/scripts) and [TypeScript examples](https://github.com/eclipse-thingweb/node-wot/tree/master/examples/typescript) folders. A live version is hosted at [http://plugfest.thingweb.io/examples/counter.html](http://plugfest.thingweb.io/examples/counter.html).

---

## Implemented/Supported Features

### Protocol Support

| Protocol  | Status       | Notes             |
| --------- | ------------ | ----------------- |
| HTTP      | ✔️ Supported |                   |
| HTTPS     | ✔️ Supported |                   |
| CoAP      | ✔️ Supported |                   |
| CoAPS     | ✔️ Supported |                   |
| MQTT      | ✔️ Supported |                   |
| Firestore | ✔️ Supported | Last version only |
| Websocket | ➕ Partial   | Server only       |
| OPC-UA    | ➕ Partial   | Client only       |
| NETCONF   | ➕ Partial   | Client only       |
| Modbus    | ➕ Partial   | Client only       |
| M-Bus     | ➕ Partial   | Client only       |

> **Note**: Additional protocols can be added by implementing `ProtocolClient`, `ProtocolClientFactory`, and `ProtocolServer` interfaces.  
> **Note**: Bindings for `binding-fujitsu` and `binding-oracle` were removed post-v0.7.x due to lack of maintainers.

### MediaType Support

| MediaType         | Status       | Notes                  |
| ----------------- | ------------ | ---------------------- |
| JSON              | ✔️ Supported |                        |
| Text (HTML, etc.) | ✔️ Supported | Includes CSS, XML, SVG |
| Base64 (Images)   | ✔️ Supported | PNG, JPEG, GIF         |
| Octet Stream      | ✔️ Supported |                        |
| CBOR              | ✔️ Supported |                        |
| EXI               | ⏲️ Planned   |                        |

> **Note**: Add new MediaTypes by implementing the `ContentCodec` interface (see [Documentation](#documentation)).

---

## No Time for Explanations - Show Me a Running Example!

### Using Node.js

```bash
wot-servient -h
cd examples/scripts
wot-servient
```

Or without CLI linking:

```bash
node packages/cli/dist/cli.js examples/scripts/counter.js
node packages/cli/dist/cli.js --client-only examples/scripts/counter-client.js
```

Access at `http://localhost:8080/counter`.

### Using Docker

```bash
docker run -it --init -p 8080:8080/tcp -p 5683:5683/udp -v "$(pwd)"/examples:/srv/examples --rm wot-servient /srv/examples/scripts/counter.js
docker run -it --init -v "$(pwd)"/examples:/srv/examples --rm --net=host wot-servient /srv/examples/scripts/counter-client.js --client-only
```

### Using a Browser

Open `examples/browser/index.html` in a modern browser to consume a test Thing at `http://plugfest.thingweb.io:8083/testthing`. See the code in `examples/browser/index.js`.

---

## Online Things

Test your applications with these hosted Things:

- **Counter**: [HTTP](http://plugfest.thingweb.io:8083/counter), [CoAP](coap://plugfest.thingweb.io:5683/counter)
- **Smart Coffee Machine**: [HTTP](http://plugfest.thingweb.io:8083/smart-coffee-machine), [CoAP](coap://plugfest.thingweb.io:5683/smart-coffee-machine)
- **TestThing**: [HTTP](http://plugfest.thingweb.io:8083/testthing), [CoAP](coap://plugfest.thingweb.io:5683/testthing)
- **Presence Sensor**: [MQTT](https://zion.vaimee.com/things/urn:uuid:0a028f8e-8a91-4aaf-a346-9a48d440fd7c)
- **Smart Clock**: [CoAP](https://zion.vaimee.com/things/urn:uuid:913cf8cb-3687-4d98-8d2f-f6f27cfc7162)
- **Simple Coffee Machine**: [HTTP](https://zion.vaimee.com/things/urn:uuid:7ba2bca0-a7f6-47b3-bdce-498caa33bbaf)

No security mechanisms are required. See the [Online Things](#online-things) section for details.

---

## Documentation

> **Warning**: Documentation expansion is planned—stay tuned!

### The API

Node-wot implements the WoT Scripting API:

- [Editor’s Draft](https://w3c.github.io/wot-scripting-api/)
- [Working Draft](https://www.w3.org/TR/wot-scripting-api/)
- [API Documentation](https://eclipse-thingweb.github.io/node-wot/api/)

Explore examples in `examples/scripts`.

### TD Tooling

Leverage the TD abstraction with satellite tools for rapid development.

### Logging

Logging uses the `debug` package. Enable logs with the `DEBUG` environment variable:

```bash
DEBUG=* npm start                    # All logs
DEBUG=node-wot* npm start           # Node-wot logs
DEBUG='*debug,*info' npm start      # Debug and info logs
DEBUG=node-wot:core* npm start      # Core package logs
DEBUG=node-wot:binding-coap*error npm start  # CoAP error logs
```

### Install New/Different Versions of Node.js

Use `n` to manage Node.js versions:

```bash
sudo npm install -g n
sudo n stable  # Or `latest`
sudo ln -sf /usr/local/n/versions/node/<VERSION>/bin/node /usr/bin/node
```

---

## Contributing

See the [Contributing Guidelines](https://github.com/eclipse-thingweb/node-wot/blob/master/CONTRIBUTING.md) for details.
